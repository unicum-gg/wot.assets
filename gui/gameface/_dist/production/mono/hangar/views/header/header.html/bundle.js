import {
    r as e,
    x as t,
    j as a,
    f as s,
    n,
    w as r,
    m as o,
    s as i,
    o as l,
    y as c,
    q as d,
} from '../../../chunks/vendor.js';
import {
    i as u,
    n as _,
    H as m,
    c as b,
    u as p,
    r as v,
    V as f,
    q as g,
    I as x,
    K as h,
    M as y,
    B as N,
    N as B,
    O as j,
    d as E,
    P as I,
    Q as P,
    R as T,
    S as k,
    T as C,
    W as A,
    X as S,
    v as W,
    Y as M,
    Z as O,
    _ as w,
    o as D,
    D as H,
    $ as V,
    a0 as L,
    a1 as z,
    a2 as $,
    y as U,
    a3 as G,
    U as F,
    a4 as q,
    j as Y,
    a5 as K,
    a6 as J,
    a7 as Q,
    a8 as X,
    a9 as Z,
    aa as ee,
    ab as te,
    ac as ae,
    ad as se,
    ae as ne,
    af as re,
    ag as oe,
    ah as ie,
    ai as le,
    aj as ce,
    ak as de,
    E as ue,
    al as _e,
    am as me,
    an as be,
    J as pe,
    F as ve,
    ao as fe,
    G as ge,
} from '../../../chunks/lib.js';
import { a as xe, D as he } from '../../../chunks/divider.js';
/* empty css                    */ var ye = ((e) => ((e.Hangar = 'hangar'), (e.Default = 'default'), e))(ye || {});
const [Ne, Be] = u('HeaderStateModel')((e) => ({ ...e.observableModel.primitives(['type']) })),
    [je, Ee] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['pageTitle', 'backNavigationDescription', 'backNavigationAllowed']),
            infoButtons: e.array('infoButtons'),
        }),
        ({ externalModel: e }) => ({
            navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate'),
            doInfoAction: e.createCallback((e) => ({ index: e }), 'onInfoAction'),
        }),
    ),
    [Ie, Pe] = u('HeaderProvider')(({ observableModel: e }) => ({ ...e.primitives(['oldStyle']) }), _),
    Te = 'playerReady',
    ke = 'battleStartAction',
    Ce = 'searchingBattle',
    Ae = 'battleReady',
    [Se, We] = u('PrebattleProvider')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives({
                        currentMode: 'currentMode',
                        battleStatus: 'battleStatus',
                        queueType: 'queueType',
                    }),
                    states: e.dict('states'),
                    battleVehicle: e.transform((e) => {
                        if (m(e.type)) return { ...e, type: e.type };
                    }, 'battleVehicle'),
                },
                a = b.primitive(() => t.battleStatus.get() === Ce),
                s = b.primitive(() => t.battleStatus.get() === Ae);
            return { ...t, computes: { isSearchingBattle: a, isBattleReady: s } };
        },
        ({ externalModel: e }) => ({ actionPrebattle: e.createCallback((e) => ({ action: e }), 'onAction') }),
    ),
    [Me, Oe] = u('PremiumShopProvider')(
        ({ observableModel: e }) => ({ ...e.primitives({ isPremiumShop: 'premiumShopEnabled' }) }),
        ({ externalModel: e }) => ({ openPremiumShop: e.createCallbackNoArgs('onOpenExternalPremiumShop') }),
    ),
    [we, De] = u('TutorialProvider')(
        ({ observableModel: e }) => {
            const t = { triggers: e.arrayClone('triggers.items') },
                a = b.primitive(() => t.triggers.get().length);
            return { ...t, computes: { triggersCount: a } };
        },
        ({ externalModel: e }) => ({
            onTriggerActivated: e.createCallback(
                (e, t, a) => ({ componentId: e, triggerType: t, state: a }),
                'onTriggerActivated',
            ),
        }),
    ),
    [He, Re] = u('BattleStartProvider')(({ observableModel: e }) => ({ ...e.primitives(['tooltip']) }), _);
const Ve = 'active',
    Le = 'ready',
    ze = 'notReady',
    $e = 'disabled';
const Ue = {
        backgroundEffect: 'BackgroundEffects_backgroundEffect_7bb0c1b5',
        base: 'BackgroundEffects_47bdcaf9',
        backgroundEffect__rays: 'BackgroundEffects_backgroundEffect__rays_4ebbd8d0',
    },
    Ge = 'rays';
const Fe = e.memo(function ({ buttonState: e, className: r }) {
        const o = e === Ve ? [Ge] : [];
        const i = v.resolve('videos'),
            l = t(o, {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                config: { duration: 100 },
                trail: 500,
            });
        return a.jsx('div', {
            className: s(Ue.base, r),
            children: l((e, t) =>
                a.jsx(n.div, {
                    style: e,
                    children: a.jsx(
                        f,
                        {
                            loop: !0,
                            autoplay: !0,
                            src: i.readOrEmpty(`header_footer.battle_button.${t}`),
                            className: s(Ue.backgroundEffect, Ue[`backgroundEffect__${t}`]),
                        },
                        t,
                    ),
                }),
            ),
        });
    }),
    qe = 'ButtonEffects_merged_86ab891d',
    Ye = 'ButtonEffects_bdb5411e',
    Ke = e.memo(function ({ className: e, onAnimationStarted: t }) {
        const n = v.resolve('videos'),
            r = g({ value: 'small' }, { large: { value: 'large' } });
        return a.jsx('div', {
            className: s(Ye, e),
            children: a.jsx(
                f,
                {
                    autoplay: !0,
                    loop: !0,
                    onPlay: t,
                    src: n.readOrEmpty(`header_footer.battle_button.foreground_${r.value}`),
                    className: qe,
                },
                `glitterEffect-${r.value}`,
            ),
        });
    }),
    Je = {
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
function Qe({ buttonState: e, buttonText: t, animationActive: s, onAnimationEnded: r }) {
    const i = o({
        opacity: s ? 0.9 : 0,
        config: { duration: s ? 3600 : 1e3, easing: s ? y.easeInCirc : y.easeOutCirc },
        onRest: () => {
            s && r();
        },
    });
    return e === Ve
        ? a.jsx(n.div, { className: Je.textGlow, style: i, children: t })
        : e === Le
          ? a.jsx('div', { className: Je.textGlow, children: t })
          : null;
}
const Xe = r(function ({ actionType: e, buttonState: t, animationActive: n, onAnimationEnded: r, className: o }) {
        const i = We(),
            l = v.resolve('strings'),
            c = x.toUpperCase(
                l.readOrEmpty(
                    (function (e, t) {
                        return e === ke
                            ? 'menu.headerButtons.battle.button.battle'
                            : t
                              ? 'menu.headerButtons.notReady'
                              : 'menu.headerButtons.ready';
                    })(e, i.model.states.get(Te)),
                ),
            );
        return a.jsxs('div', {
            className: s(Je.base, Je[`base__${t}`], o),
            children: [
                a.jsx(h, {
                    classNames: { base: Je.textWrapper, text: Je.text, textOverlay: Je.textOverlay },
                    children: c,
                }),
                a.jsx(Qe, { buttonState: t, buttonText: c, animationActive: n, onAnimationEnded: r }),
            ],
        });
    }),
    Ze = {
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
    et = [Le, ze],
    tt = r(function ({
        buttonState: e,
        transitionActive: t,
        transitionFromState: n,
        actionType: r,
        children: o,
        className: i,
    }) {
        const l = Re(),
            c = We(),
            d = l.model.tooltip.get(),
            u = (function (e) {
                var t, a, s, n;
                const r = null == (t = e.match(/{HEADER}(.*?){\/HEADER}/)) ? void 0 : t[1],
                    o = null == (a = e.match(/{BODY}(.*?){\/BODY}/)) ? void 0 : a[1],
                    i = null == (s = e.match(/{NOTE}(.*?){\/NOTE}/)) ? void 0 : s[1],
                    l = null == (n = e.match(/{ATTENTION}(.*?){\/ATTENTION}/)) ? void 0 : n[1];
                return p({ header: r, body: o, alert: l, note: i, hasHtmlContent: !0 });
            })(d),
            _ = e === $e,
            m = n && et.includes(n) && et.includes(e);
        return a.jsx('div', {
            ...(_ && d && u),
            className: i,
            children: a.jsxs(N, {
                theme: N.themes.custom,
                disabled: _,
                autoAlignContent: !1,
                onClick: () => {
                    _ || c.controls.actionPrebattle(r);
                },
                className: s(Ze.button, Ze[`button__${e}`]),
                classNames: {
                    background: s(Ze.background, Ze[`background__${e}`], t && !m && Ze.background__appear),
                    content: Ze.content,
                    border: Ze.border,
                    overlay: Ze.overlay,
                },
                'data-test-id': 'battleButton',
                soundTarget: 'battleButton',
                children: [
                    t &&
                        !m &&
                        a.jsx('div', { className: s(Ze.background, Ze.background__dissapear, Ze[`background__${n}`]) }),
                    o,
                ],
            }),
        });
    }),
    at = {
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
    st = 'FightButton',
    nt = B('BattleButton', at.base),
    rt = r(function ({ classNames: t }) {
        const n = We(),
            [r, o] = e.useState(!1),
            [l, c] = e.useState(!1),
            [d, u] = e.useState(),
            { model: _, controls: m } = De(),
            b = _.computes.triggersCount(),
            p = j(),
            v = 'BATTLE_ROYALE_TOURNAMENT' === n.model.queueType.get(),
            f = 'TRAINING' === n.model.currentMode.get(),
            g =
                (!n.model.states.get('playerCreator') && !f && n.model.states.get('readinessAvailable')) || v
                    ? 'readyAction'
                    : ke,
            x = (function (e, t, a) {
                return t ? $e : e === ke ? Ve : a ? ze : Le;
            })(g, !n.model.states.get('actionEnabled'), n.model.states.get(Te)),
            h = E(x),
            y = x === $e;
        return (
            e.useEffect(
                () =>
                    i(() => {
                        const e = I(_.triggers.get(), (e) => e.componentId === st);
                        ((b > 0 && e) || (h && x !== h)) && m.onTriggerActivated(st, 'enabled_change', !0);
                    }),
                [x, m, _.triggers, h, b],
            ),
            e.useEffect(() => {
                h &&
                    x !== h &&
                    (c(!0),
                    u(h),
                    p.run(() => {
                        c(!1);
                    }, 600));
            }, [p, x, h]),
            a.jsxs(nt, {
                className: null == t ? void 0 : t.base,
                id: 'fight-button',
                children: [
                    a.jsx(Fe, { buttonState: x, className: s(at.backgroundEffects, null == t ? void 0 : t.effect) }),
                    a.jsxs(tt, {
                        actionType: g,
                        buttonState: x,
                        transitionActive: l,
                        transitionFromState: d,
                        className: null == t ? void 0 : t.content,
                        children: [
                            !y && a.jsx('div', { className: s(at.reflector, at[`reflector__${x}`]) }),
                            x === Ve && a.jsx(Ke, { className: at.buttonEffects, onAnimationStarted: () => o(!0) }),
                            a.jsx('div', { className: at.hoverOverlay }),
                            a.jsx('div', { className: s(at.desaturation, !y && at.desaturation__hidden) }),
                            a.jsx(Xe, {
                                actionType: g,
                                buttonState: x,
                                animationActive: r,
                                onAnimationEnded: () => o(!1),
                                className: at.buttonText,
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    ot = e.memo(({ options: e, ...t }) => a.jsx(He, { options: e, children: a.jsx(rt, { ...t }) }));
var it = ((e) => ((e.Personal = 'personal'), (e.Clan = 'clan'), (e.Event = 'event'), e))(it || {}),
    lt = ((e) => ((e[(e.Inactive = 0)] = 'Inactive'), (e[(e.Active = 1)] = 'Active'), (e[(e.Used = 2)] = 'Used'), e))(
        lt || {},
    );
const ct = 'alert',
    dt = 'x24x24',
    ut = 'x32x32',
    _t = 'x96x96',
    mt = { [it.Personal]: 0, [it.Clan]: 1, [it.Event]: 2 };
function bt(e) {
    return mt[e] ?? 0;
}
function pt(e) {
    return Math.max(0, Math.floor(e - Date.now() / P));
}
const [vt, ft] = u()(
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
                a = b.primitive(() => I(t.reserves.get(), (e) => e.inactivationTime > 0)),
                s = b.shallow(() => {
                    const e = t.reserves.get();
                    return S(e, (e, t) => bt(e.reserveType) - bt(t.reserveType));
                }),
                n = b.shallow(() => t.disabledCategories.get().every((e) => e.isDisabled));
            return { ...t, computes: { visible: a, sortedBoosters: s, disabled: n } };
        },
        ({ externalModel: e }) => ({ openBooster: e.createCallbackNoArgs('openBoosterNavigation') }),
    ),
    gt = 'Activate_d05a6105',
    xt = 'Activate_base__disabled_77f76d6c',
    ht = 'Activate_wrapper_ea72f87a',
    yt = 'Activate_iconWrapper_b884eeb8',
    Nt = 'Activate_icon_bfced9a9',
    Bt = 'Activate_icon__glow_6978c825',
    jt = 'Activate_amount_f5085294',
    Et = 'Activate_text_8435f323',
    It = 'Activate_text__limited_41cb7f36',
    Pt = 'Activate_textOverlay_a5c8a675',
    Tt = 'Activate_textOverlay__limited_4a7dd59b',
    kt = 'Activate_hint_b3d5d80e',
    Ct = 'Activate_hint__glow_24eef452',
    At = 'Activate_glow_d01917a6',
    St = 'Activate_glow__limited_5e88d41',
    Wt = 'Activate_glow__alert_8001ed30',
    Mt = 'Activate_sparks_718002e7',
    Ot = 'Activate_sparks__visible_842edf80',
    wt = r(function () {
        const { model: e } = ft(),
            t = v.resolve('strings'),
            n = v.resolve('intl'),
            r = e.computes.visible(),
            o = e.allReserves.get(),
            i = e.limitedReserves.get(),
            l = e.reserveExpire.get(),
            c = e.computes.disabled();
        return r
            ? null
            : a.jsxs('div', {
                  className: s(gt, c && xt),
                  children: [
                      a.jsxs('div', {
                          className: ht,
                          children: [
                              a.jsx('div', { className: s(Mt, l && Ot) }),
                              a.jsx('div', { className: s(At, i && St, l && Wt) }),
                              a.jsx('div', { className: yt, children: a.jsx('div', { className: s(Nt, i && Bt) }) }),
                              a.jsx(h, {
                                  classNames: { base: jt, text: s(Et, i && It), textOverlay: s(Pt, i && Tt) },
                                  children: n.formatNumber('integral', o),
                              }),
                          ],
                      }),
                      !c &&
                          a.jsx('div', {
                              className: s(kt, i && Ct),
                              children: n.toUpperCase(
                                  t.readOrEmpty('menu.boostersWindow.boostersTableRenderer.activateBtnLabel'),
                              ),
                          }),
                  ],
              });
    }),
    Dt = {
        background: 'Card_background_d014d7d',
        fill: 'Card_fill_68e6b048',
        fillPattern: 'Card_fillPattern_496f8980',
        base: 'Card_92483693',
        base__disabled: 'Card_base__disabled_530f6e06',
        background__personal: 'Card_background__personal_57d23cf4',
        background__clan: 'Card_background__clan_46c6fc44',
        background__alert: 'Card_background__alert_9b1dc5e1',
        alert: 'Card_alert_402bb5af',
        alert__visible: 'Card_alert__visible_bf4a84a5',
        icon: 'Card_icon_28c8b5da',
        premium: 'Card_premium_44855832',
        premium__visible: 'Card_premium__visible_bd677cbc',
        timer: 'Card_timer_712238da',
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
    Ht = r(function ({ type: t, timeLeft: n, timeTotal: r, icon: o, className: i }) {
        const { model: l } = ft(),
            { minutesLeft: c, percentLeft: d } = (function (t, a) {
                const [s, n] = e.useState(pt(t));
                (e.useEffect(() => {
                    n(pt(t));
                }, [t]),
                    e.useEffect(() => {
                        if (0 === s) return;
                        const e = setTimeout(() => {
                            n(pt(t));
                        }, P);
                        return () => clearTimeout(e);
                    }, [s, t]));
                const r = A(s),
                    o = Math.ceil(k(r));
                return { minutesLeft: o, percentLeft: Math.max(0, Math.min(100, (o / (a / T)) * 100)) };
            })(n, r),
            u = l.computes.disabled(),
            _ = c <= 9,
            m = c <= 2,
            b = g({ size: dt }, { large: { size: ut } }),
            p = W(b.size, _t),
            v = o.includes('premium');
        return n <= 0
            ? null
            : a.jsxs('div', {
                  className: s(Dt.base, u && Dt.base__disabled, i),
                  style: { '--fill_percentage': `${d}%` },
                  children: [
                      a.jsx('div', { className: s(Dt.background, Dt[`background__${_ ? ct : t}`]) }),
                      a.jsx(M, { className: Dt.icon, path: `personal_reserves.common.cards.${p}.${o}` }),
                      a.jsx(M, {
                          className: s(Dt.premium, v && Dt.premium__visible),
                          path: `personal_reserves.common.cards.${b.size}.premium_booster_glow`,
                      }),
                      a.jsxs('div', {
                          className: s(Dt.timer, _ && Dt.timer__visible),
                          children: [
                              a.jsx('div', { className: Dt.timerGlow }),
                              a.jsx(O, {
                                  upgradeLegacy: !0,
                                  path: 'personal_reserves.hangarEntry.minute',
                                  params: { minutesLeft: c },
                              }),
                          ],
                      }),
                      a.jsx('div', { className: s(Dt.alert, m && Dt.alert__visible) }),
                      a.jsxs('div', {
                          className: Dt.fill,
                          children: [
                              a.jsx('div', { className: s(Dt.fillPattern, Dt[`fillPattern__${_ ? ct : t}`]) }),
                              a.jsx('div', { className: s(Dt.fillBorderTop, m && Dt.fillBorderTop__alert) }),
                              a.jsx('div', { className: s(Dt.fillBorderBottom, _ && Dt.fillBorderBottom__visible) }),
                          ],
                      }),
                  ],
              });
    }),
    Rt = 'List_background_dc475fe4',
    Vt = 'List_border_59b5e8fe',
    Lt = 'List_borderShadow_776a55b9',
    zt = 'List_e706f6ab',
    $t = 'List_base__disabled_8303c2c1',
    Ut = 'List_cards_efba95c2',
    Gt = 'List_card_d0063856',
    Ft = r(function () {
        const { model: e } = ft(),
            t = e.computes.sortedBoosters(),
            n = e.computes.visible(),
            r = e.computes.disabled();
        return n
            ? a.jsxs('div', {
                  className: s(zt, r && $t),
                  children: [
                      a.jsx('div', { className: Rt }),
                      a.jsx('div', { className: Vt }),
                      a.jsx('div', { className: Lt }),
                      a.jsx('div', {
                          className: Ut,
                          children: w(
                              t,
                              (e) => e.state === lt.Active,
                              (e) =>
                                  a.jsx(
                                      Ht,
                                      {
                                          type: e.reserveType,
                                          timeLeft: e.inactivationTime,
                                          timeTotal: e.totalDuration,
                                          icon: e.iconId,
                                          className: Gt,
                                      },
                                      e.boosterID,
                                  ),
                          ),
                      }),
                  ],
              })
            : null;
    }),
    qt = 'Reserves_43f2a7a7',
    Yt = 'Reserves_base__disabled_58e2c36d',
    Kt = r(function () {
        const { model: e, controls: t } = ft(),
            n = (function () {
                const e = v.resolve('views'),
                    t = v.resolve('aliases');
                return C({
                    resId: t.read((e) => e.lobby_header.default.ReservesEntryPoint('resId')),
                    contentId: e.read((e) => e.lobby.personal_reserves.PersonalReservesTooltip('resId')),
                });
            })(),
            r = D(),
            o = e.computes.disabled();
        return a.jsxs('div', {
            ...n,
            className: s(qt, o && Yt),
            onClick: function (e) {
                (n.onClick(), o || (r.play('click', { target: 'reserves', original: e }), t.openBooster()));
            },
            onMouseEnter: function (e) {
                (n.onMouseEnter(), o || r.play('mouse-enter', { target: 'reserves', original: e }));
            },
            'data-test-id': 'reservesButton',
            children: [a.jsx(Ft, {}), a.jsx(wt, {})],
        });
    }),
    Jt = e.memo(({ options: e, ...t }) => a.jsx(vt, { options: e, children: a.jsx(Kt, { ...t }) })),
    [Qt, Xt] = u('WalletModel')(
        ({ observableModel: e }) => {
            const t = { currencies: e.dict('currencies') };
            return {
                ...t,
                list: b.shallow((e) =>
                    Array.from(t.currencies.keys.values()).sort((t, a) => {
                        const s = e.indexOf(t),
                            n = e.indexOf(a),
                            r = e.length;
                        return (-1 === s ? r : s) - (-1 === n ? r : n);
                    }),
                ),
            };
        },
        ({ externalModel: e }) => ({ currencyAction: e.createCallback((e) => ({ type: e }), 'onCurrencyAction') }),
    ),
    Zt = {
        base: 'Hint_e53dd99e',
        discountBackground: 'Hint_discountBackground_1de34646',
        discount: 'Hint_discount_94b7b9ff',
        onlyDiscount: 'Hint_onlyDiscount_8b648a0a',
        discountWithHintText: 'Hint_discountWithHintText_381cf018',
        onlyHintText: 'Hint_onlyHintText_790ec746',
        discountValue: 'Hint_discountValue_b1f389fc',
        discountHintTitle: 'Hint_discountHintTitle_95a8470',
        hintText: 'Hint_hintText_6f3fa83f',
        hintTitle: 'Hint_hintTitle_135a3ed',
        discountValue__withHint: 'Hint_discountValue__withHint_e2bc8dbb',
    };
function ea({ classNames: e }) {
    const t = v.resolve('strings');
    return a.jsxs('div', {
        className: s(Zt.onlyDiscount, null == e ? void 0 : e.onlyDiscount),
        children: [
            a.jsx('div', { className: s(Zt.discountBackground, null == e ? void 0 : e.discountBackground) }),
            a.jsx(H.Root, {
                children: a.jsx(H.Value, {
                    value: t.readOrEmpty('common.common.percent'),
                    classNames: {
                        valueContainer: s(Zt.discount, null == e ? void 0 : e.discount),
                        value: s(Zt.discountValue, null == e ? void 0 : e.discountValue),
                    },
                }),
            }),
        ],
    });
}
function ta({ type: e, classNames: t }) {
    const n = v.resolve('intl'),
        r = v.resolve('strings');
    return a.jsx('div', {
        className: s(
            Zt.hintText,
            Zt.onlyHintText,
            null == t ? void 0 : t.hintText,
            null == t ? void 0 : t.onlyHintText,
        ),
        children: a.jsx(h, {
            classNames: null == t ? void 0 : t.textGradient,
            children: a.jsx('div', {
                className: s(Zt.hintTitle, null == t ? void 0 : t.hintTitle),
                children: n.toUpperCase(r.readOrEmpty(`menu.headerButtons.btnLabel.${e}`)),
            }),
        }),
    });
}
function aa({ classNames: e, type: t }) {
    const n = v.resolve('intl'),
        r = v.resolve('strings');
    return a.jsxs('div', {
        className: s(Zt.discountWithHintText, null == e ? void 0 : e.discountWithHintText),
        children: [
            a.jsx('div', { className: s(Zt.discountBackground, null == e ? void 0 : e.discountBackground) }),
            a.jsx('div', {
                className: s(Zt.discountHintTitle, null == e ? void 0 : e.discountHintTitle),
                children: n.toUpperCase(r.readOrEmpty(`menu.headerButtons.btnLabel.${t}`)),
            }),
            a.jsx(H.Root, {
                children: a.jsx(H.Value, {
                    value: r.readOrEmpty('common.common.percent'),
                    classNames: {
                        valueContainer: s(Zt.discount, null == e ? void 0 : e.discount),
                        value: s(Zt.discountValue, Zt.discountValue__withHint, null == e ? void 0 : e.discountValue),
                    },
                }),
            }),
        ],
    });
}
function sa({ classNames: e, type: t }) {
    return a.jsxs('div', {
        className: s(Zt.base, null == e ? void 0 : e.base),
        children: [
            a.jsx(ea, {
                classNames: {
                    onlyDiscount: null == e ? void 0 : e.onlyDiscount,
                    discountBackground: null == e ? void 0 : e.discountBackground,
                    discount: null == e ? void 0 : e.discount,
                    discountValue: null == e ? void 0 : e.discountValue,
                },
            }),
            a.jsx(ta, {
                type: t,
                classNames: {
                    hintText: null == e ? void 0 : e.hintText,
                    textGradient: null == e ? void 0 : e.textGradient,
                    onlyHintText: null == e ? void 0 : e.onlyHintText,
                },
            }),
            a.jsx(aa, { classNames: e, type: t }),
        ],
    });
}
const na = {
        base: 'Currency_92022680',
        hintWrapper: 'Currency_hintWrapper_530465b9',
        base__interactive: 'Currency_base__interactive_52396ddd',
        currencyWrapper: 'Currency_currencyWrapper_b13579ba',
        currencyIcon: 'Currency_currencyIcon_346f8c78',
        value: 'Currency_value_ab21a888',
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
    ra = 1e6,
    oa = 1e5;
function ia({ wgMoneyAvailable: t, value: n, type: r, classNames: o }) {
    const i = e.useRef(null),
        l = v.resolve('intl'),
        c = v.resolve('strings'),
        d = g(
            {
                displayValue: () =>
                    n >= ra ? { abbreviated: !0, value: V(n, oa) / ra } : { abbreviated: !1, value: n },
            },
            {
                medium: {
                    displayValue: () =>
                        n >= 1e7 ? { abbreviated: !0, value: V(n, oa) / ra } : { abbreviated: !1, value: n },
                },
                large: {
                    displayValue: () =>
                        n >= 1e8 ? { abbreviated: !0, value: V(n, oa) / ra } : { value: n, abbreviated: !1 },
                },
            },
        );
    if (!1 === t)
        return a.jsxs('div', {
            className: s(na.value, na.value__unavailable, null == o ? void 0 : o.value),
            children: [
                a.jsx('div', { className: na.dash, children: c.readOrEmpty('common.common.semi_dash') }),
                a.jsx('div', { className: na.dash, children: c.readOrEmpty('common.common.semi_dash') }),
            ],
        });
    const u = d.displayValue();
    return a.jsx('div', {
        ref: i,
        className: s(na.value, null == o ? void 0 : o.base),
        children: u.abbreviated
            ? a.jsx(O, {
                  path: 'menu.hangar_header.million',
                  params: { value: u.value },
                  brackets: { start: '%(', end: ')s' },
                  className: s(na.formattedValue, null == o ? void 0 : o.formattedValue),
              })
            : l.formatNumber(r === L.gold ? 'gold' : 'integral', u.value),
    });
}
const la = r(function ({ currency: t, type: n, className: r, classNames: o }) {
        var i, l, c, d, u;
        const { controls: _ } = Xt(),
            m = D(),
            b = 'AVAILABLE' === t.status,
            f = (function (t, a, s, n) {
                const r = v.resolve('strings'),
                    o = p({
                        header: r.readOrEmpty(`tooltips.header.buttons.${t}.header`),
                        body: r.readOrEmpty(`tooltips.header.buttons.${t}.body`),
                    }),
                    i = e.useMemo(() => ({ disabled: 'string' != typeof s || '' === s }), [s]),
                    l = U(
                        s,
                        e.useMemo(() => [n], [n]),
                        i,
                    );
                return !1 === a ? o : l;
            })(n, b, t.tooltipType, t.value),
            x = g({ size: z.extraSmall }, { large: { size: z.small }, extraLarge: { size: z.medium } }),
            h = W(x.size, z.small);
        return a.jsxs('div', {
            ...f,
            className: s(
                na.base,
                b ? na.base__interactive : na.base__nonInteractive,
                t.discount > 0 && na.base__discount,
                r,
            ),
            onMouseEnter: function (e) {
                (m.play('mouse-enter', { target: 'WalletCurrency', original: e }), f.onMouseEnter());
            },
            onClick: function (e) {
                (null == f || f.onClick(),
                    b && (m.play('click', { target: 'WalletCurrency', original: e }), _.currencyAction(n)));
            },
            children: [
                a.jsx('div', {
                    className: s(na.currencyWrapper, null == o ? void 0 : o.currencyWrapper),
                    children: a.jsx($, {
                        reverse: !0,
                        classNames: {
                            ...(null == o ? void 0 : o.currency),
                            icon: s(na.currencyIcon, null == (i = null == o ? void 0 : o.currency) ? void 0 : i.icon),
                        },
                        type: n,
                        size: h,
                        'data-test-id': n,
                        children: a.jsx(ia, {
                            wgMoneyAvailable: b,
                            value: t.value,
                            type: n,
                            classNames: null == o ? void 0 : o.currencyValue,
                        }),
                    }),
                }),
                b &&
                    a.jsx('div', {
                        className: s(na.hintWrapper, null == o ? void 0 : o.hintWrapper),
                        children: a.jsx(sa, {
                            type: n,
                            classNames: {
                                ...(null == o ? void 0 : o.hint),
                                discountWithHintText: s(
                                    na.discountWithHintText,
                                    null == (l = null == o ? void 0 : o.hint) ? void 0 : l.discountWithHintText,
                                ),
                                onlyDiscount: s(
                                    na.onlyDiscount,
                                    null == (c = null == o ? void 0 : o.hint) ? void 0 : c.onlyDiscount,
                                ),
                                onlyHintText: s(
                                    na.onlyHintText,
                                    null == (d = null == o ? void 0 : o.hint) ? void 0 : d.onlyHintText,
                                ),
                                base: s(na.hint, null == (u = null == o ? void 0 : o.hint) ? void 0 : u.base),
                                textGradient: { text: na.text, textOverlay: s(na.text, na.text__overlay) },
                            },
                        }),
                    }),
            ],
        });
    }),
    ca = r(function (e) {
        const t = Xt().model.currencies.get(e.type);
        return t
            ? a.jsx(la, { ...e, currency: t })
            : (console.error(`Currency with type ${e.type} is not defined`), null);
    }),
    da = 'Wallet_fc600169',
    ua = [L.crystal, L.gold, L.credits],
    _a = r(function ({ className: e, classNames: t, currenciesOrder: n = ua }) {
        const { model: r } = Xt(),
            o = r.list(n);
        return a.jsx('div', {
            'data-name': 'Wallet',
            className: s(da, e),
            children: o.map((e) => a.jsx(ca, { type: e, classNames: t }, e)),
        });
    }),
    ma = e.memo(({ className: e, classNames: t, currenciesOrder: s, ...n }) =>
        a.jsx(Qt, { ...n, children: a.jsx(_a, { className: e, classNames: t, currenciesOrder: s }) }),
    ),
    ba = 'RightSide_3c6c89c0',
    pa = 'RightSide_separator_fea82003',
    va = v.resolve('aliases'),
    fa = va.read((e) => e.lobby_header.default.ReservesEntryPoint('resId')),
    ga = va.read((e) => e.lobby_header.default.Wallet('resId')),
    xa = function () {
        const e = G(fa),
            t = G(ga);
        return a.jsx('div', {
            className: ba,
            children: a.jsxs(xe, {
                className: pa,
                children: [e && a.jsx(Jt, { options: { rootId: fa } }), t && a.jsx(ma, { options: { rootId: ga } })],
            }),
        });
    },
    ha = {
        border: 'InfoButton_border_f3a2eae1',
        base: 'InfoButton_74c97479',
        base__smallSize: 'InfoButton_base__smallSize_c40e1b5c',
        base__mediumSize: 'InfoButton_base__mediumSize_f347ecd3',
        content: 'InfoButton_content_1cc251f9',
        label: 'InfoButton_label_7fc8e38b',
        icon: 'InfoButton_icon_c58f1a93',
    },
    ya = { small: 'small', medium: 'medium' },
    Na = { [ya.small]: 16, [ya.medium]: 24 },
    Ba = e.forwardRef(function (
        { size: e, infoType: t, label: n, tooltipHeader: r, tooltipBody: o, classNames: i = {}, ...l },
        c,
    ) {
        const d = r || o,
            u = p({ header: r, body: o }),
            _ = W(e, F);
        return a.jsxs(N, {
            ...l,
            onClick: function (e) {
                var t;
                (d && u.onClick(), null == (t = l.onClick) || t.call(l, e));
            },
            onMouseEnter: function (e) {
                var t;
                (d && u.onMouseEnter(), null == (t = l.onMouseEnter) || t.call(l, e));
            },
            onMouseLeave: function (e) {
                var t;
                (u.onMouseLeave(), null == (t = l.onMouseLeave) || t.call(l, e));
            },
            ref: c,
            size: N.sizes.small,
            theme: N.themes.secondary,
            autoAlignContent: !1,
            className: s(ha.base, ha[`base__${e}Size`], l.className),
            classNames: { ...i, content: s(ha.content, null == i ? void 0 : i.content) },
            children: [
                a.jsx('div', { className: ha.border }),
                a.jsx(M, {
                    className: ha.icon,
                    path: `header_footer.info_icon_${t}_${_}`,
                    height: Na[e],
                    width: Na[e],
                }),
                n && a.jsx('div', { className: ha.label, children: n }),
            ],
        });
    });
Ba.sizes = ya;
const ja = 'NavigationBar_bcf1c1f',
    Ea = 'NavigationBar_button_205ef0a',
    Ia = 'NavigationBar_button__backNavigation_a37bc71e',
    Pa = 'NavigationBar_label_4840a20f',
    Ta = 'NavigationBar_icon_b6a301d6',
    ka = 'NavigationBar_iconImage_e695cd8e',
    Ca = 'NavigationBar_iconImage__default_dfd5b7a7',
    Aa = 'NavigationBar_iconImage__hover_c132ba6f',
    Sa = 'NavigationBar_iconImage__active_fbf5db52',
    Wa = 'NavigationBar_button__garageNavigation_69a10af0',
    Ma = 'NavigationBar_divider_535279af',
    Oa = 'NavigationBar_pageTitle_c8b7dbb6',
    wa = 'NavigationBar_hiddenLabel_1fa48c6e',
    Da = 'NavigationBar_base__ready_69a10af0',
    Ha = 'NavigationBar_base__animating_69a10af0',
    Ra = 'NavigationBar_hiddenLabelInner_8490d7c',
    Va = 'NavigationBar_infoButton_69ab999';
function La({ classNames: e = {} }) {
    return a.jsxs('div', {
        className: s(Ta, e.icon),
        children: [
            a.jsx('div', { className: s(ka, Ca, e.iconImage, e.iconImage__default) }),
            a.jsx('div', { className: s(ka, Aa, e.iconImage, e.iconImage__hover) }),
            a.jsx('div', { className: s(ka, Sa, e.iconImage, e.iconImage__active) }),
        ],
    });
}
const za = r(function ({ classNames: t = {}, className: n, garageNavigationAllowed: r, battleButtonVisible: o }) {
    const { model: i, controls: l } = Ee(),
        c = D(),
        d = v.resolve('strings'),
        u = i.pageTitle.get(),
        _ = i.backNavigationAllowed.get(),
        m = i.backNavigationDescription.get(),
        b = i.infoButtons.get();
    function p(e) {
        c.play('mouse-enter', { target: 'NavigationButton', original: e });
    }
    function f(e) {
        return function () {
            l.doInfoAction(e);
        };
    }
    const x = q(),
        h = v.resolve('intl'),
        y = e.useRef(null),
        [N, B] = e.useState(0),
        [j, E] = e.useState(!1),
        [I, P] = e.useState(!1);
    Y(() => {
        var e, t;
        (E(!0),
            B(
                (null == (e = y.current) ? void 0 : e.offsetWidth)
                    ? (null == (t = y.current) ? void 0 : t.offsetWidth) + 1
                    : 0,
            ));
        const a = K(() => P(!0));
        return () => {
            (E(!1), B(0), P(!1), a());
        };
    }, [x.screenWidthRem, x.breakpoint.name, r, o, _, m, u]);
    const T = g({ value: Ba.sizes.small }, { extraLarge: { value: Ba.sizes.medium } });
    return a.jsxs('div', {
        className: s(ja, j && Da, I && Ha, n, t.base),
        children: [
            a.jsxs(xe, {
                className: s(Ma, t.divider),
                children: [
                    r &&
                        a.jsxs('div', {
                            className: s(Ea, Wa, t.button, t.button__garageNavigation),
                            'data-test-id': 'garageButton',
                            onClick: function (e) {
                                (c.play('click', { target: 'NavigationButton', original: e }), l.navigateTo('garage'));
                            },
                            onMouseEnter: p,
                            children: [
                                a.jsx(La, { classNames: t }),
                                a.jsx('div', {
                                    className: s(Pa, t.label),
                                    children: h.toUpperCase(d.readOrEmpty('menu.headerButtons.hangar')),
                                }),
                            ],
                        }),
                    _ &&
                        a.jsx(a.Fragment, {
                            children: a.jsxs('div', {
                                className: s(Ea, Ia, t.button, t.button__backNavigation),
                                onClick: function (e) {
                                    (c.play('click', { target: 'NavigationButton', original: e }),
                                        l.navigateTo('back'));
                                },
                                onMouseEnter: p,
                                children: [
                                    a.jsx(La, { classNames: t }),
                                    a.jsx('div', {
                                        className: s(Pa, t.label),
                                        children: h.toUpperCase(d.readOrEmpty('menu.headerButtons.navigation.back')),
                                    }),
                                    m &&
                                        a.jsx('div', {
                                            ref: y,
                                            className: s(wa, t.hiddenLabel),
                                            style: { '--width': `${N}px` },
                                            children: a.jsx(Q, { className: Ra, text: h.toUpperCase(m) }),
                                        }),
                                ],
                            }),
                        }),
                    u &&
                        a.jsx(a.Fragment, {
                            children: a.jsx('div', {
                                className: s(Oa, t.title),
                                children: a.jsx(Q, { text: h.toUpperCase(u) }),
                            }),
                        }),
                ],
            }),
            b.length > 0 &&
                J(b, (e, t) =>
                    a.jsx(
                        'div',
                        {
                            className: Va,
                            children: a.jsx(Ba, {
                                size: T.value,
                                onClick: f(t),
                                infoType: e.type,
                                label: e.label,
                                tooltipHeader: e.tooltipHeader,
                                tooltipBody: e.tooltipBody,
                            }),
                        },
                        t,
                    ),
                ),
        ],
    });
});
var $a = ((e) => (
    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
    (e[(e.ADD_NEEDED = 1)] = 'ADD_NEEDED'),
    (e[(e.ADDED = 2)] = 'ADDED'),
    (e[(e.CONFIRMATION_SENT = 3)] = 'CONFIRMATION_SENT'),
    (e[(e.CONFIRMED = 4)] = 'CONFIRMED'),
    (e[(e.PROCESSING = 5)] = 'PROCESSING'),
    e
))($a || {});
const Ua = X(
        le((e) => e > 0),
        ie(A),
    ),
    Ga = [
        [te, ae],
        [se, ne],
        [k, re],
        [oe, () => re(1)],
    ];
function Fa(e) {
    if (e) {
        const t = Z(e, ee());
        for (const [e, a] of Ga) {
            const s = Math.round(e(t));
            if (s > 0) return a(s);
        }
    }
}
const [qa, Ya] = u('UserAccountProvider')(
        ({ observableModel: e, cleanup: t }) => {
            const a = e.object('userInfo'),
                s = e.object('subscriptions'),
                n = {
                    basic: l.box(Fa(Ua(s.get().activePremiumExpiryTime))),
                    plus: l.box(Fa(Ua(s.get().wotPlusExpiryTime))),
                };
            const r = c(
                    () => s.get().activePremiumExpiryTime,
                    (e) => {
                        n.basic.set(Fa(Ua(e)));
                    },
                ),
                o = c(
                    () => s.get().wotPlusExpiryTime,
                    (e) => {
                        n.plus.set(Fa(Ua(e)));
                    },
                ),
                i = setInterval(function () {
                    d(() => {
                        (n.basic.set(Fa(Ua(s.get().activePremiumExpiryTime))),
                            n.plus.set(Fa(Ua(s.get().wotPlusExpiryTime))));
                    });
                }, 6e4);
            return (
                t(() => {
                    (clearInterval(i), r(), o());
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
    Ka = 'PlayersProfile_b15b3eb3',
    Ja = 'PlayersProfile_playerInfo_89f70778',
    Qa = 'PlayersProfile_playerInfoWrapper_2ed6c121',
    Xa = 'PlayersProfile_badgeWrapper_5b9813ec',
    Za = 'PlayersProfile_badge_4050c3e9',
    es = 'PlayersProfile_text_99417432',
    ts = 'PlayersProfile_text__name_2ed6c121',
    as = 'PlayersProfile_text__clanTag_f7f24d88',
    ss = 'PlayersProfile_text__teamKiller_8bf5e412',
    ns = 'PlayersProfile_base__alertVisible_9b40d452',
    rs = 'PlayersProfile_anonymizerIcon_8632eb46',
    os = 'PlayersProfile_alertIcon_b8de5d15',
    is = v.resolve('strings'),
    ls = B('PlayersProfile', Ka, { variants: { alertVisible: { true: ns } } }),
    cs = new Set([$a.ADD_NEEDED, $a.ADDED]),
    ds = r(function () {
        const t = D(),
            n = p({
                header: is.readOrEmpty('tooltips.header.account.header'),
                body: is.readOrEmpty('tooltips.header.account.body'),
            }),
            { model: r, controls: o } = Ya(),
            {
                userName: i,
                badgeID: l,
                isInClan: c,
                clanAbbrev: d,
                teamKiller: u,
                hasSteamAccount: _,
                steamEmailStatus: m,
                anonymized: b,
                email: v,
            } = r.userInfo.get(),
            f = ce(
                'AccountCompletion',
                e.useMemo(() => [v], [v]),
            ),
            g = _ && cs.has(m);
        const x = W(de.Badge.sizes.x48x48, de.Badge.sizes.x80x80);
        return a.jsxs(ls, {
            alertVisible: g,
            children: [
                a.jsxs(de, {
                    ...n,
                    className: Ja,
                    onClick: function (e) {
                        (t.play('click', { target: 'player-info', original: e }),
                            n.onClick(),
                            o.openAccountDashboard());
                    },
                    onMouseEnter: function (e) {
                        (t.play('mouse-enter', { target: 'player-info', original: e }), n.onMouseEnter());
                    },
                    children: [
                        l > 0 &&
                            a.jsx('div', {
                                className: Xa,
                                children: a.jsx(de.Badge, {
                                    badgeId: String(l),
                                    width: 48,
                                    height: 48,
                                    size: x,
                                    className: Za,
                                }),
                            }),
                        a.jsxs(de.Wrapper, {
                            className: Qa,
                            children: [
                                a.jsx(de.Name, { className: s(es, ts, u && ss), children: a.jsx(Q, { text: i }) }),
                                c &&
                                    a.jsx(de.ClanTag, {
                                        className: s(es, as),
                                        children: a.jsx(O, {
                                            upgradeLegacy: !0,
                                            path: 'common.clanTag',
                                            params: { abbrev: d },
                                        }),
                                    }),
                            ],
                        }),
                        b && a.jsx('div', { className: rs }),
                    ],
                }),
                g && a.jsx('div', { ...f, className: os }),
            ],
        });
    }),
    us = e.memo(({ options: e, ...t }) => a.jsx(qa, { options: e, children: a.jsx(ds, { ...t }) })),
    _s = {
        base: 'Premiums_e458a55f',
        base__clickable: 'Premiums_base__clickable_dd8e69b8',
        subscription: 'Premiums_subscription_5299180c',
        text: 'Premiums_text_8ff97d88',
        text__premShop: 'Premiums_text__premShop_a067f33c',
        divider: 'Premiums_divider_268fb4cd',
        wotPlusImg: 'Premiums_wotPlusImg_195105fb',
        wotPlusImg__disabled: 'Premiums_wotPlusImg__disabled_8e8e6ceb',
        alertIcon: 'Premiums_alertIcon_da4f2f9b',
        premiumImg: 'Premiums_premiumImg_d5d73467',
        premiumImg__disabled: 'Premiums_premiumImg__disabled_12a94c05',
        premiumShopImg: 'Premiums_premiumShopImg_99a91f62',
    },
    ms = B('PremiumShop', s(_s.base, _s.base__clickable)),
    bs = v.resolve('strings');
function ps() {
    const { model: e, controls: t } = Oe(),
        n = D(),
        r = p({
            header: bs.readOrEmpty('tooltips.header.premShop.header'),
            body: bs.readOrEmpty('tooltips.header.premShop.body'),
        });
    if (e.premiumShopEnabled.get())
        return a.jsxs(ms, {
            ...r,
            onClick: function (e) {
                (r.onClick(), n.play('click', { target: 'premium-shop', original: e }), t.openPremiumShop());
            },
            onMouseEnter: function (e) {
                (r.onMouseEnter(), n.play('mouse-enter', { target: 'premium-shop', original: e }));
            },
            children: [
                a.jsx('div', { className: _s.premiumShopImg }),
                a.jsx('div', {
                    className: s(_s.text, _s.text__premShop),
                    children: bs.readOrEmpty('menu.headerButtons.btnLabel.premShop'),
                }),
            ],
        });
}
const vs = B('Premiums', _s.base),
    fs = 1,
    gs = 2,
    xs = v.resolve('strings'),
    hs = v.resolve('aliases'),
    ys = v.resolve('views');
const Ns = r(function ({ className: e }) {
        const t = D(),
            n = C({
                resId: hs.read((e) => e.lobby_header.default.UserAccount('resId')),
                contentId: ys.read((e) => e.lobby.subscription.WotPlusTooltip('resId')),
            }),
            r = C({
                resId: hs.read((e) => e.lobby_header.default.UserAccount('resId')),
                contentId: hs.read((e) => e.common.tooltip.Backport('resId')),
                decoratorId: R.invalid('resId'),
                args: { tooltipId: 'ammunitionEmptySlot', tooltipArgs: '["#tooltips:header/premium_buy"]' },
            }),
            { model: o, controls: i } = Ya(),
            l = (function (e) {
                if (void 0 === e) return null;
                const { unit: t, value: a } = e;
                return 'days' === t
                    ? { unit: 'day', value: a }
                    : 'hours' === t
                      ? { unit: 'hour', value: a }
                      : { unit: 'hour', value: 1 };
            })(o.premiums.basic.get()),
            { premiumSubscriptionEnabled: c, wotPlusEnabled: d, wotPlusState: u } = o.subscriptions.get();
        const _ = d && u === fs;
        return a.jsxs(vs, {
            className: e,
            children: [
                a.jsxs('div', {
                    ...n,
                    className: _s.subscription,
                    'data-test-id': 'wotPlus',
                    onClick: function (e) {
                        (n.onClick(),
                            t.play('click', { target: 'premiums:wot-plus', original: e }),
                            i.openWotPlusSubscriptionPage());
                    },
                    onMouseEnter: function (e) {
                        (n.onMouseEnter(), t.play('mouse-enter', { target: 'premiums:wot-plus', original: e }));
                    },
                    children: [
                        a.jsx('div', { className: s(_s.wotPlusImg, !_ && _s.wotPlusImg__disabled) }),
                        a.jsx('div', {
                            className: _s.text,
                            children: xs.readOrEmpty(
                                d
                                    ? 'subscription.headerButton.state.active'
                                    : 'subscription.headerButton.state.available',
                            ),
                        }),
                        u === gs && a.jsx(M, { path: 'subscription.alert_icon', className: _s.alertIcon }),
                    ],
                }),
                a.jsx(he, { className: _s.divider }),
                a.jsxs('div', {
                    ...r,
                    className: _s.subscription,
                    'data-test-id': 'premium',
                    onClick: function (e) {
                        (r.onClick(),
                            t.play('click', { target: 'premiums:premium', original: e }),
                            i.openPremiumSubscriptionPage());
                    },
                    onMouseEnter: function (e) {
                        (r.onMouseEnter(), t.play('mouse-enter', { target: 'premiums:premium', original: e }));
                    },
                    children: [
                        a.jsx('div', { className: s(_s.premiumImg, !c && _s.premiumImg__disabled) }),
                        a.jsx('div', {
                            className: _s.text,
                            children:
                                c && l
                                    ? a.jsx('span', {
                                          children: a.jsx(O, {
                                              path: `menu.timeLeft.short.${l.unit}`,
                                              params: { [l.unit]: Math.ceil(l.value) },
                                              upgradeLegacy: !0,
                                          }),
                                      })
                                    : a.jsx('span', { children: xs.readOrEmpty('menu.common.premiumBuy') }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Bs = e.memo(({ options: e, ...t }) => a.jsx(qa, { options: e, children: a.jsx(Ns, { ...t }) })),
    js = 'UserProfile_2146e52',
    Es = 'UserProfile_divider_4a395a41',
    Is = v.resolve('aliases'),
    Ps = Is.read((e) => e.lobby_header.default.UserAccount('resId')),
    Ts = Is.read((e) => e.lobby_header.default.PremShop('resId'));
function ks({ className: e }) {
    const t = G(Ps);
    return a.jsx('div', {
        className: s(js, e),
        children: a.jsxs(xe, {
            className: Es,
            children: [
                t && a.jsx(us, { options: { rootId: Ps } }),
                t && a.jsx(Bs, { options: { rootId: Ps } }),
                Ts && a.jsx(ps, {}),
            ],
        }),
    });
}
const Cs = r(function ({ garageNavigationAllowed: e, battleButtonVisible: t, classNames: s }) {
        return Be().model.type.get() === ye.Hangar
            ? a.jsx(ks, { className: null == s ? void 0 : s.userProfile })
            : a.jsx(za, {
                  className: null == s ? void 0 : s.navigationBar,
                  garageNavigationAllowed: e,
                  battleButtonVisible: t,
              });
    }),
    As = {
        base: 'App_52f7c200',
        base__oldStyle: 'App_base__oldStyle_ed955e9f',
        leftSide: 'App_leftSide_3e2b71ca',
        userProfile: 'App_userProfile_0',
        navigationBar: 'App_navigationBar_a5705175',
        rightSide: 'App_rightSide_afef9c8a',
        base__battleButtonVisible: 'App_base__battleButtonVisible_0',
        battleButton: 'App_battleButton_81a4bb44',
        battleButtonEffects: 'App_battleButtonEffects_1da8cd9d',
    },
    Ss = B('Header', As.base, {
        variants: {
            oldStyle: { true: As.base__oldStyle },
            battleButtonVisible: { true: As.base__battleButtonVisible },
        },
    }),
    Ws = v.resolve('aliases').read((e) => e.lobby_header.default.FightStart('resId')),
    Ms = new Set([Ce, Ae]);
const Os = r(function () {
        const t = ue(0, 250),
            n = _e(),
            r = Be(),
            o = Pe(),
            { model: i } = We(),
            [l, c] = e.useState(!1),
            d = i.battleStatus.get(),
            u = !i.computes.isSearchingBattle() && !i.computes.isBattleReady(),
            _ = r.model.type.get(),
            m = Boolean(me(n.location, { paths: ['/hangar/allVehicles', ':/hangar/allVehicles'] })),
            b = G(Ws);
        e.useEffect(() => {
            c(!Ms.has(d) && (_ === ye.Hangar || m));
        }, [d, _, m]);
        const p = l && b;
        return a.jsxs(Ss, {
            ref: t,
            oldStyle: o.model.oldStyle.get(),
            battleButtonVisible: p,
            children: [
                a.jsx('div', {
                    className: As.leftSide,
                    children: a.jsx(Cs, {
                        garageNavigationAllowed: u,
                        battleButtonVisible: p,
                        classNames: { userProfile: As.userProfile, navigationBar: As.navigationBar },
                    }),
                }),
                p &&
                    a.jsx(ot, {
                        options: { rootId: Ws },
                        classNames: { base: As.battleButton, effect: As.battleButtonEffects },
                    }),
                a.jsx('div', {
                    className: s(As.rightSide, p && As.rightSide__battleButtonVisible),
                    children: !i.computes.isSearchingBattle() && !i.computes.isBattleReady() && a.jsx(xa, {}),
                }),
            ],
        });
    }),
    ws = v.resolve('aliases'),
    Ds = be({ click: { battleButton: 'gui_battle' } });
ge(
    new pe()
        .addWithProps(ve, { soundsOverrides: Ds })
        .add(Ie)
        .addWithProps(fe, {
            context: 'model.router',
            rootId: ws.read((e) => e.lobby_header.default.HeaderState('resId')),
        })
        .addWithProps(we, { options: { context: 'tutorialModel' } })
        .addWithProps(Me, { options: { rootId: ws.read((e) => e.lobby_header.default.PremShop('resId')) } })
        .addWithProps(Se, { options: { rootId: ws.read((e) => e.lobby_header.default.Prebattle('resId')) } })
        .addWithProps(Ne, { options: { rootId: ws.read((e) => e.lobby_header.default.HeaderState('resId')) } })
        .addWithProps(je, { options: { rootId: ws.read((e) => e.lobby_header.default.NavigationBar('resId')) } })
        .render(a.jsx(Os, {})),
);
