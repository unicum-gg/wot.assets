import { r as e, n as a, l as t, j as o, f as i, m as s, p as n } from '../../../chunks/vendor.js';
import {
    c as r,
    i as c,
    f as l,
    g as d,
    h as p,
    u as _,
    e as m,
    r as g,
    V as f,
    j as h,
    I as u,
    l as b,
    m as C,
    p as S,
    b as v,
    F as x,
    B as O,
    t as y,
    a as I,
    k as N,
    q as w,
    v as E,
    n as j,
    d as T,
    U as k,
} from '../../../chunks/lib.js';
import { O as L, P as A } from '../../../chunks/enums.js';
/* empty css                    */ var H = ((e) => (
    (e.FIRST_TWO = 'firstTwo'),
    (e.THIRD = 'third'),
    (e.COMPLETED_WITH_HONOR = 'completedWithHonor'),
    (e.LOCKED = 'locked'),
    e
))(H || {});
const W = {
        [L.AVAILABLE]: L.AVAILABLE,
        [L.ACTIVE]: L.AVAILABLE,
        [L.COMPLETED]: L.AVAILABLE,
        [L.COMPLETED_WITH_HONORS]: L.AVAILABLE,
        [L.UNAVAILABLE]: L.UNAVAILABLE,
        [L.LOCKED]: L.UNAVAILABLE,
    },
    R = ['first', 'second', 'third'],
    $ = { left: 'left', right: 'right' },
    D = 'light',
    V = 'dark';
const M = { lightsOn: r('pm_lobby_lights_on') },
    [P, B] = c()(
        ({ observableModel: e }) => {
            const a = {
                    ...e.primitives(['campaignSelectorViewState', 'blockedByVehicle', 'firstTimeEntrance']),
                    campaigns: e.arrayClone('campaigns'),
                },
                t = l.primitive(() => {
                    const e = a.campaignSelectorViewState.get(),
                        t = a.firstTimeEntrance.get();
                    return e === H.FIRST_TWO || (e === H.THIRD && t) ? H.THIRD : H.FIRST_TWO;
                }),
                o = l.primitive(() => {
                    const e = a.firstTimeEntrance.get(),
                        { first: o, second: s } = i();
                    return e && o.completedWithHonor && s.completedWithHonor ? H.FIRST_TWO : t();
                }),
                i = l.model(() =>
                    d(
                        a.campaigns.get(),
                        (e, { campaignName: a, completedWithHonor: t }, o) => {
                            const i = R[o];
                            return i ? ((e[`${i}`] = { campaignName: a, completedWithHonor: t }), e) : e;
                        },
                        {},
                    ),
                ),
                s = l.model(() => {
                    const e = p(a.campaigns.get(), 2),
                        t = null == e ? void 0 : e.operations.find(({ active: e }) => e);
                    return t ? t.operationId : 0;
                }),
                n = l.primitive((e, t, o) => {
                    const i = a.campaignSelectorViewState.get();
                    return !(a.firstTimeEntrance.get() || o !== L.AVAILABLE || t < 8 || e !== i) && i === H.THIRD;
                });
            return {
                ...a,
                computes: {
                    campaignsInfo: i,
                    disabledCampaign: t,
                    activeOperationId: s,
                    isAttention: n,
                    completedCampaign: o,
                },
            };
        },
        ({ externalModel: e }) => ({
            openInfoScreen: e.createCallbackNoArgs('onMoreInfo'),
            close: e.createCallbackNoArgs('onClose'),
            openOperation: e.createCallback((e) => ({ operationId: e }), 'onOperation'),
            switchCampaign: e.createCallback((e) => ({ campaignsState: e }), 'switchCampaign'),
        }),
    ),
    F = [
        { opacity: 0.7, config: { duration: 100 } },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0.8, config: { duration: 100 }, delay: 700 },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0.9, config: { duration: 100 } },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0.8, config: { duration: 100 } },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0.9, config: { duration: 100 }, delay: 400 },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0.8, config: { duration: 100 }, delay: 800 },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0.9, config: { duration: 100 } },
        { opacity: 1, config: { duration: 100 } },
    ],
    K = [
        { opacity: 0, config: { duration: 100 } },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 0.2, config: { duration: 100 }, delay: 700 },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 0.1, config: { duration: 100 } },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 0.2, config: { duration: 100 } },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 0.1, config: { duration: 100 }, delay: 400 },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 0.2, config: { duration: 100 }, delay: 800 },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 0.1, config: { duration: 100 } },
        { opacity: 0, config: { duration: 100 } },
    ],
    U = e.createContext(null),
    Y = a(function ({ children: a }) {
        const { model: i, controls: s } = B(),
            n = i.computes.disabledCampaign(),
            r = i.campaignSelectorViewState.get(),
            [c, l] = e.useState('idle'),
            d = _(),
            p = 'fadeIn' !== c && 'idle' !== c,
            g = r === H.LOCKED || r === H.COMPLETED_WITH_HONOR;
        function f(e) {
            l(e);
        }
        function h() {
            (N.stop(), y.stop(), x.stop());
        }
        const [u, b] = t(() => ({
                from: { opacity: 0, transform: 'scale(1)' },
                config: { duration: 300, easing: m.easeInCirc },
            })),
            [C, S] = t(() => ({
                from: { opacity: 0, transform: 'translateY(0rem)', pointerEvents: 'none' },
                config: { duration: 300, easing: m.easeInOutCirc },
            })),
            [v, x] = t(() => ({ from: { opacity: g ? 0 : 1 } })),
            [O, y] = t(() => ({ from: { opacity: g ? 1 : 0 } })),
            [I, N] = t(() => ({ from: { opacity: 0 } })),
            [w, E] = t(() => ({ from: { opacity: 0 }, config: { duration: 300 } }));
        return (
            e.useEffect(() => {
                b.start({ to: { opacity: 1 }, onRest: () => f('fadeIn') });
            }, [b]),
            e.useEffect(() => {
                switch (c) {
                    case 'fadeOut':
                        (S.start({ to: { opacity: 0, transform: 'translateY(20rem)', pointerEvents: 'none' } }),
                            x.start({ to: { opacity: 1 }, config: { duration: 100, easing: m.easeInOutCirc } }),
                            y.start({ to: { opacity: 0 }, config: { duration: 100, easing: m.easeInOutCirc } }),
                            N.start({ to: { opacity: 0 }, config: { duration: 100, easing: m.easeInOutCirc } }),
                            E.start({ to: { opacity: 1 }, onRest: () => f('startLoading') }));
                        break;
                    case 'startLoading':
                        (f('endLoading'), s.switchCampaign(n));
                        break;
                    case 'endLoading':
                        E.start({ to: { opacity: 0 }, onRest: () => f('fadeIn'), config: { duration: 300 } });
                        break;
                    case 'fadeIn':
                        if (g)
                            return void S.start({
                                from: { opacity: 0, transform: 'translateY(20rem)' },
                                to: { opacity: 1, transform: 'translateY(0rem)', pointerEvents: 'auto' },
                                onRest: () => f('idle'),
                            });
                        (S.start({
                            from: { opacity: 0, transform: 'translateY(20rem)' },
                            to: { opacity: 1, transform: 'translateY(0rem)', pointerEvents: 'auto' },
                        }),
                            x.start({ from: { opacity: 1 }, to: K, config: { easing: m.easeInOutCirc } }),
                            d.play('lightsOn'),
                            y.start({
                                from: { opacity: 0 },
                                to: F,
                                config: { easing: m.easeInOutCirc },
                                onRest() {
                                    (f('idle'),
                                        N.start({
                                            to: { opacity: 1 },
                                            config: { duration: 2e3, easing: m.easeInCirc },
                                        }));
                                },
                            }));
                }
            }, [y, x, n, b, S, E, g, N, s, d, c]),
            o.jsx(U.Provider, {
                value: {
                    currentStep: c,
                    bugsStyle: I,
                    backgroundStyle: O,
                    boardItemStyle: v,
                    contentStyle: u,
                    footerStyle: C,
                    UIBlocked: p,
                    getAnimationShade: function (e) {
                        return 'idle' !== c && 'fadeIn' !== c && 'openOperation' !== c ? 'dark' : e;
                    },
                    updateStep: f,
                    startAnimation: function () {
                        (h(), l('fadeOut'));
                    },
                    openOperation: function (e) {
                        (h(),
                            l('openOperation'),
                            b.start({
                                to: { transform: 'scale(1.1)', opacity: 0 },
                                config: { duration: 300, easing: m.easeInOutCirc },
                                onRest: () => e(),
                            }));
                    },
                },
                children: a,
            })
        );
    }),
    G = () => {
        const a = e.useContext(U);
        if (!a) throw new Error('useAnimation must be used within an AnimationProvider');
        return a;
    },
    q = 'Particles_b7c425ba',
    z = 'Particles_video_dadccd98',
    Z = 'Particles_video__glow_27caffe2',
    J = 'Particles_video__sparks_390a3794',
    Q = 'Particles_video__newCampaignSparks_b536df1c',
    X = 'Particles_video__newCampaignGlow_6d8cdfa1',
    ee = 'Particles_wrapper_7a6969a2',
    ae = 'Particles_wrapper__hidden_efb078a7',
    te = a(function ({ className: e }) {
        const a = g.resolve('videos'),
            { model: t } = B(),
            s = t.campaignSelectorViewState.get(),
            n = s === H.COMPLETED_WITH_HONOR,
            r = t.firstTimeEntrance.get() && s !== H.LOCKED;
        return n || r
            ? o.jsxs('div', {
                  className: i(q, e),
                  children: [
                      n &&
                          o.jsxs(o.Fragment, {
                              children: [
                                  o.jsx(f, {
                                      src: a.readOrEmpty('personal_missions_30.campaign_selector.new_campaign_glow'),
                                      className: i(z, Z),
                                      loop: !0,
                                      autoplay: !0,
                                  }),
                                  o.jsx(f, {
                                      src: a.readOrEmpty('personal_missions_30.campaign_selector.sparks'),
                                      className: i(z, J),
                                      loop: !0,
                                      autoplay: !0,
                                  }),
                              ],
                          }),
                      r &&
                          o.jsxs('div', {
                              className: i(ee, t.blockedByVehicle.get() && ae),
                              children: [
                                  o.jsx(f, {
                                      src: a.readOrEmpty('personal_missions_30.campaign_selector.new_campaign_glow'),
                                      className: i(z, X),
                                      loop: !0,
                                      autoplay: !0,
                                  }),
                                  o.jsx(f, {
                                      src: a.readOrEmpty('personal_missions_30.campaign_selector.new_campaign_sparks'),
                                      className: i(z, Q),
                                      loop: !0,
                                      autoplay: !0,
                                  }),
                              ],
                          }),
                  ],
              })
            : null;
    }),
    oe = {
        base: 'Background_81dbcfb6',
        lightLeft: 'Background_lightLeft_cac88ec4',
        lightRight: 'Background_lightRight_5a3c0254',
        base__locked: 'Background_base__locked_26effab7',
        base__completedWithHonor: 'Background_base__completedWithHonor_26effab7',
        content: 'Background_content_6c5e4ec3',
    },
    ie = a(function (e) {
        const { model: a } = B(),
            t = a.campaignSelectorViewState.get(),
            { backgroundStyle: n } = G();
        return o.jsxs('div', {
            className: i(oe.base, oe[`base__${t}`], e.className),
            children: [
                o.jsx('div', { className: oe.content, children: e.children }),
                o.jsx(s.div, { style: t === H.FIRST_TWO ? n : void 0, className: oe.lightLeft }),
                o.jsx(s.div, { style: t === H.THIRD ? n : void 0, className: oe.lightRight }),
            ],
        });
    }),
    se = { top: 0, left: 0 },
    ne = {
        1: {
            extraSmall: { top: -19, left: 216 },
            medium: { top: -26, left: 266 },
            large: { top: -25, left: 317 },
            extraLarge: { top: -37, left: 407 },
        },
        2: {
            extraSmall: { top: 27, left: 63 },
            medium: { top: 31, left: 77 },
            large: { top: 43, left: 93 },
            extraLarge: { top: 51, left: 113 },
        },
        3: {
            extraSmall: { top: 154, left: -8 },
            medium: { top: 184, left: -8 },
            large: { top: 227, left: -10 },
            extraLarge: { top: 292, left: -24 },
        },
        4: {
            extraSmall: { top: 230, left: 120 },
            medium: { top: 278, left: 148 },
            large: { top: 338, left: 176 },
            extraLarge: { top: 441, left: 221 },
        },
        5: {
            extraSmall: { top: 21, left: 120 },
            medium: { top: 24, left: 148 },
            large: { top: 34, left: 175 },
            extraLarge: { top: 41, left: 221 },
        },
        6: {
            extraSmall: { top: 131, left: -2 },
            medium: { top: 158, left: -1 },
            large: { top: 194, left: -2 },
            extraLarge: { top: 251, left: -11 },
        },
        7: {
            extraSmall: { top: 207, left: 125 },
            medium: { top: 250, left: 155 },
            large: { top: 305, left: 184 },
            extraLarge: { top: 397, left: 232 },
        },
        8: {
            extraSmall: { top: 25, left: 37 },
            medium: { top: 25, left: 47 },
            large: { top: 35, left: 60 },
            extraLarge: { top: 41, left: 77 },
        },
        9: {
            extraSmall: { top: 142, left: 226 },
            medium: { top: 175, left: 275 },
            large: { top: 210, left: 332 },
            extraLarge: { top: 271, left: 431 },
        },
        10: {
            extraSmall: { top: 244, left: 35 },
            medium: { top: 298, left: 44 },
            large: { top: 361, left: 55 },
            extraLarge: { top: 470, left: 66 },
        },
    },
    re = {
        1: {
            extraSmall: { top: 70, left: 189 },
            medium: { top: 83, left: 232 },
            large: { top: 105, left: 277 },
            extraLarge: { top: 133, left: 355 },
        },
        2: {
            extraSmall: { top: 121, left: 31 },
            medium: { top: 145, left: 40 },
            large: { top: 180, left: 47 },
            extraLarge: { top: 232, left: 53 },
        },
        3: {
            extraSmall: { top: 202, left: 116 },
            medium: { top: 243, left: 145 },
            large: { top: 295, left: 171 },
            extraLarge: { top: 384, left: 213 },
        },
        5: {
            extraSmall: { top: 133, left: 100 },
            medium: { top: 161, left: 123 },
            large: { top: 196, left: 149 },
            extraLarge: { top: 254, left: 187 },
        },
        6: {
            extraSmall: { top: 254, left: 84 },
            medium: { top: 309, left: 106 },
            large: { top: 374, left: 123 },
            extraLarge: { top: 487, left: 153 },
        },
    },
    ce = {
        medium: { width: 100, height: 100 },
        large: { width: 120, height: 120 },
        extraLarge: { width: 160, height: 160 },
    },
    le = 'completed',
    de = 'default';
function pe({ completed: e, operationId: a, iconShade: t, className: i }) {
    const n = e ? le : de,
        r = re[a],
        { top: c, left: l } = h((null == r ? void 0 : r.extraSmall) ?? se, r),
        { boardItemStyle: d, getAnimationShade: p } = G(),
        _ = p(t);
    return o.jsxs(o.Fragment, {
        children: [
            o.jsx(u, {
                path: `personal_missions_30.campaign_selector.arrow.${n}_${a}_light`,
                className: i,
                width: '82rem',
                height: '82rem',
                adaptive: ce,
                style: { top: b(c), left: b(l) },
            }),
            o.jsx(s.div, {
                style: 'light' === _ ? d : void 0,
                children: o.jsx(u, {
                    path: `personal_missions_30.campaign_selector.arrow.${n}_${a}_dark`,
                    className: i,
                    width: '82rem',
                    height: '82rem',
                    adaptive: ce,
                    style: { top: b(c), left: b(l) },
                }),
            }),
        ],
    });
}
const _e = {
        base: 'OperationCard_f80d92be',
        background: 'OperationCard_background_82f0a58d',
        base__third: 'OperationCard_base__third_dcb7ac10',
        background__dark: 'OperationCard_background__dark_f4047eec',
        badge: 'OperationCard_badge_f518b903',
        alert: 'OperationCard_alert_dcb7ac10',
        sparks: 'OperationCard_sparks_dcb7ac10',
        glowHover: 'OperationCard_glowHover_bb419c45',
        maskedArea: 'OperationCard_maskedArea_676613e3',
        badge__dark: 'OperationCard_badge__dark_e9065fb1',
        wrapper: 'OperationCard_wrapper_545a72bd',
        name: 'OperationCard_name_229e88ee',
        base__light: 'OperationCard_base__light_dcb7ac10',
        base__active: 'OperationCard_base__active_dcb7ac10',
        base__firstTwo: 'OperationCard_base__firstTwo_dcb7ac10',
        hoverArea: 'OperationCard_hoverArea_c18fdca8',
        hoverArea__available: 'OperationCard_hoverArea__available_dcb7ac10',
        glareHover: 'OperationCard_glareHover_ccf115c7',
        glareAttention: 'OperationCard_glareAttention_49917f45',
        base__dark: 'OperationCard_base__dark_dcb7ac10',
    },
    me = 'big',
    ge = 'small',
    fe = a(function ({
        iconShade: a,
        campaignUnionType: r,
        lastActiveOperationId: c,
        className: l,
        operation: { completed: d, operationIcon: p, operationId: _, operationName: m, state: f },
    }) {
        const h = g.resolve('strings'),
            b = g.resolve('sounds'),
            [x, O] = e.useState(0),
            { model: y, controls: I } = B(),
            N = y.computes.isAttention(r, _, f),
            { boardItemStyle: w, currentStep: E, getAnimationShade: j, openOperation: T } = G(),
            k = j(a),
            H = W[f],
            R = c === _,
            $ = R ? me : ge,
            D = f === L.COMPLETED_WITH_HONORS ? L.COMPLETED_WITH_HONORS : L.COMPLETED,
            V = f === L.LOCKED,
            M = C(
                'operation',
                e.useMemo(() => [_], [_]),
            ),
            P = S(
                A.CUSTOM_SIMPLE,
                e.useMemo(
                    () => ({
                        body: h.readOrEmpty('personal_missions_30.campaignSelector.operation.tooltip.locked'),
                        resId: g
                            .resolve('views')
                            .read((e) => e.mono.personal_missions_30.tooltips.param_tooltip('resId')),
                    }),
                    [h],
                ),
            ),
            [F, K] = t(() => ({
                from: { transform: 'translate(10%, -220%) rotate(30deg)' },
                config: { duration: 1e3, easing: n.easeOutCirc },
                loop: !1,
                onRest: () => O((e) => e + 1),
            }));
        return (
            v(() => {
                K.start({ to: { transform: 'translate(-45%, 30%) rotate(30deg)' }, loop: !0, delay: 3e3 });
            }),
            e.useEffect(() => {
                if ('fadeOut' === E) K.stop();
            }, [K, E]),
            o.jsxs('div', {
                className: i(_e.base, _e[`base__${r}`], _e[`base__${a}`], R && _e.base__active, l),
                children: [
                    o.jsx('div', {
                        className: i(_e.hoverArea, !V && _e.hoverArea__available),
                        ...(V ? P : M),
                        onClick: function () {
                            V ? P.onClick() : (b.play('yes1'), M.onClick(), T(() => I.openOperation(_)));
                        },
                        onMouseEnter: function (e) {
                            (V ? P.onMouseEnter(e) : M.onMouseEnter(e), V || b.play('gui_hangar_hover'));
                        },
                    }),
                    o.jsx('div', { className: _e.glowHover }),
                    o.jsx(u, {
                        path: `personal_missions_30.campaign_selector.card.${r}.${R ? 'active' : H}.${p}_light`,
                        className: _e.background,
                    }),
                    o.jsx(s.div, {
                        style: 'light' === k ? w : void 0,
                        children: o.jsx(u, {
                            path: `personal_missions_30.campaign_selector.card.${r}.${R ? 'active' : H}.${p}_dark`,
                            className: i(_e.background, _e.background__dark),
                        }),
                    }),
                    o.jsxs('div', {
                        className: _e.maskedArea,
                        children: [
                            o.jsx('div', { className: _e.glareHover }),
                            x < 5 && N && o.jsx(s.div, { style: F, className: _e.glareAttention }),
                        ],
                    }),
                    f === L.LOCKED
                        ? o.jsx('div', {
                              className: _e.wrapper,
                              children: o.jsx(u, {
                                  path: 'personal_missions_30.common.card.alert',
                                  width: '48rem',
                                  height: '48rem',
                                  className: _e.alert,
                              }),
                          })
                        : d
                          ? o.jsxs(o.Fragment, {
                                children: [
                                    o.jsx(u, {
                                        path: `personal_missions_30.campaign_selector.card.${r}.badge.${D}_light_${$}_${_}`,
                                        className: _e.badge,
                                    }),
                                    o.jsx(s.div, {
                                        className: i(_e.badge, _e.badge__dark),
                                        style: 'light' === k ? w : void 0,
                                        children: o.jsx(u, {
                                            path: `personal_missions_30.campaign_selector.card.${r}.badge.${D}_dark_${$}_${_}`,
                                            width: '100%',
                                            height: '100%',
                                        }),
                                    }),
                                ],
                            })
                          : void 0,
                    o.jsx('div', { className: _e.name, children: m }),
                ],
            })
        );
    }),
    he = 'Operation_campaignCard_8ac4ca25';
function ue({ className: e, ...a }) {
    const t = ne[a.operation.operationId],
        { top: i, left: s } = h((null == t ? void 0 : t.extraSmall) ?? se, t);
    return o.jsx('div', {
        className: e,
        style: { top: b(i), left: b(s) },
        children: o.jsx(fe, { ...a, className: he }),
    });
}
const be = {
        base: 'Campaign_b9d0bb1c',
        threads: 'Campaign_threads_d288be34',
        arrow: 'Campaign_arrow_7ed28fa8',
        operation: 'Campaign_operation_5f4543bc',
    },
    Ce = {
        medium: { width: 496, height: 477 },
        large: { width: 594, height: 571 },
        extraLarge: { width: 780, height: 750 },
    };
const Se = a(function ({ campaignIndex: a, campaign: { operations: t }, className: n }) {
        const { model: r } = B(),
            c = r.campaignSelectorViewState.get(),
            l = r.computes.activeOperationId(),
            { boardItemStyle: d, getAnimationShade: p } = G(),
            _ = (function (e) {
                return e < 2 ? H.FIRST_TWO : H.THIRD;
            })(a),
            m = (function (e, a) {
                switch (e) {
                    case H.LOCKED:
                    case H.COMPLETED_WITH_HONOR:
                    case a:
                        return D;
                    default:
                        return V;
                }
            })(c, _),
            g = p(m),
            f = R[a],
            h = (function (e, a) {
                return e.reduce(
                    (e, t) => (a === H.FIRST_TWO ? (t.active || t.state === L.AVAILABLE ? t : e) : t.active ? t : e),
                    void 0,
                );
            })(t, _);
        if (f)
            return o.jsx('div', {
                className: i(be.base, be[`base__${g}`], be[`base__${l}`], n),
                children: t.map((i, n) =>
                    o.jsxs(
                        e.Fragment,
                        {
                            children: [
                                o.jsx(ue, {
                                    iconShade: m,
                                    operation: i,
                                    lastActiveOperationId: null == h ? void 0 : h.operationId,
                                    campaignUnionType: _,
                                    className: be.operation,
                                }),
                                n !== t.length - 1 && 2 !== a && o.jsx(pe, { ...i, iconShade: m, className: be.arrow }),
                                _ === H.THIRD &&
                                    0 !== l &&
                                    l === i.operationId &&
                                    o.jsxs(o.Fragment, {
                                        children: [
                                            o.jsx(u, {
                                                path: `personal_missions_30.campaign_selector.threads.threads_${l}_light`,
                                                width: '404rem',
                                                height: '389rem',
                                                adaptive: Ce,
                                                className: be.threads,
                                            }),
                                            o.jsx(s.div, {
                                                style: 'light' === g ? d : void 0,
                                                className: be.threads,
                                                children: o.jsx(u, {
                                                    path: `personal_missions_30.campaign_selector.threads.threads_${l}_dark`,
                                                    width: '404rem',
                                                    height: '389rem',
                                                    adaptive: Ce,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        },
                        i.operationId,
                    ),
                ),
            });
    }),
    ve = {
        base: 'Content_d6e1c064',
        videoWrapper: 'Content_videoWrapper_3b55dd2b',
        base__firstTwo: 'Content_base__firstTwo_da09528a',
        base__third: 'Content_base__third_da09528a',
        base__completedWithHonor: 'Content_base__completedWithHonor_da09528a',
        base__locked: 'Content_base__locked_da09528a',
        video: 'Content_video_112ed3f2',
        campaign: 'Content_campaign_697bf9ad',
        campaign__first: 'Content_campaign__first_6b0c43f0',
        campaign__second: 'Content_campaign__second_d4ebfd7b',
        campaign__third: 'Content_campaign__third_5147ffb6',
    },
    xe = a(function () {
        const e = g.resolve('videos'),
            { model: a } = B(),
            t = a.campaigns.get(),
            n = a.campaignSelectorViewState.get(),
            { bugsStyle: r } = G();
        return o.jsxs('div', {
            className: i(ve.base, ve[`base__${n}`]),
            children: [
                t.map((e, a) =>
                    o.jsx(
                        Se,
                        { campaignIndex: a, campaign: e, className: i(ve.campaign, ve[`campaign__${R[a]}`]) },
                        e.campaignName,
                    ),
                ),
                n !== H.FIRST_TWO &&
                    o.jsx(s.div, {
                        style: r,
                        className: ve.videoWrapper,
                        children: o.jsx(f, {
                            src: e.readOrEmpty('personal_missions_30.campaign_selector.bugs'),
                            className: ve.video,
                            loop: !0,
                            autoplay: !0,
                        }),
                    }),
            ],
        });
    }),
    Oe = 'Completed_3554cb33',
    ye = 'Completed_icon_b7a72552',
    Ie = 'Completed_title_b2013ee0',
    Ne = 'Completed_subtitle_446b5d0f';
function we({ className: e }) {
    return o.jsxs('div', {
        className: i(Oe, e),
        children: [
            o.jsx(u, {
                path: 'personal_missions_30.campaign_selector.done_160',
                width: '160rem',
                height: '160rem',
                adaptive: {
                    large: { width: 220, height: 220, path: 'personal_missions_30.campaign_selector.done_220' },
                },
                className: ye,
            }),
            o.jsx(x, { className: Ie, path: 'personal_missions_30.campaignSelector.completedAll.title' }),
            o.jsx(x, { className: Ne, path: 'personal_missions_30.campaignSelector.completedAll.subtitle' }),
        ],
    });
}
const Ee = 'Locked_33fcc4e0',
    je = 'Locked_icon_2a64ac0',
    Te = 'Locked_subtitle_2b8a289f';
function ke({ className: e }) {
    return o.jsxs('div', {
        className: i(Ee, e),
        children: [
            o.jsx(u, {
                path: 'personal_missions_30.campaign_selector.lock_64',
                width: '64rem',
                height: '64rem',
                className: je,
            }),
            o.jsx(x, { className: Te, path: 'personal_missions_30.campaignSelector.locked' }),
        ],
    });
}
const Le = 'Congratulations_d8cbc768',
    Ae = 'Congratulations_status_c5e8d951',
    He = a(function ({ className: e }) {
        const { model: a } = B(),
            { first: t, second: s, third: n } = a.computes.campaignsInfo(),
            r = a.computes.completedCampaign();
        return o.jsxs('div', {
            className: i(Le, e),
            children: [
                o.jsx(u, { path: 'personal_missions_30.campaign_selector.done', width: '80rem', height: '80rem' }),
                o.jsx(x, {
                    className: Ae,
                    path: `personal_missions_30.campaignSelector.status.completed.${r}`,
                    params: {
                        firstCampaign: t.campaignName,
                        secondCampaign: s.campaignName,
                        thirdCampaign: n.campaignName,
                    },
                }),
            ],
        });
    }),
    We = 'Control_9644b6b9',
    Re = 'Control_status_40fde3b8',
    $e = 'Control_base__firstTimeEntrance_da09528a',
    De = 'Control_base__blocked_da09528a',
    Ve = 'Control_wrapper_76264813',
    Me = 'Control_alert_4069240a',
    Pe = 'Control_info_a90b2e50',
    Be = 'Control_glareAttention_8e622eb7';
const Fe = { content: 'Control_buttonContent_8e527c3' },
    Ke = { switchCampaign: 'switchCampaign', switchCampaigns: 'switchCampaigns', activate: 'activate' },
    Ue = a(function () {
        var a, r;
        const c = g.resolve('views'),
            l = g.resolve('strings'),
            { model: d, controls: p } = B(),
            _ = d.blockedByVehicle.get(),
            m = d.firstTimeEntrance.get(),
            f = d.campaignSelectorViewState.get(),
            h =
                (null == (r = null == (a = d.campaigns.get()[2]) ? void 0 : a.operations[0]) ? void 0 : r.state) ===
                L.LOCKED,
            { first: b, second: C, third: v } = d.computes.campaignsInfo(),
            I = d.computes.disabledCampaign(),
            N = m && !_,
            w = (function (e, a) {
                return e ? Ke.activate : a === H.THIRD ? Ke.switchCampaigns : Ke.switchCampaign;
            })(m, f),
            { UIBlocked: E, startAnimation: j, openOperation: T } = G();
        const k = S(
                A.CUSTOM_SIMPLE,
                e.useMemo(
                    () => ({
                        body: l.readOrEmpty('personal_missions_30.campaignSelector.status.button.tooltip'),
                        resId: c.read((e) => e.mono.personal_missions_30.tooltips.param_tooltip('resId')),
                    }),
                    [l, c],
                ),
            ),
            W = S(
                A.CUSTOM_SIMPLE,
                e.useMemo(
                    () => ({
                        header: l.readOrEmpty('personal_missions_30.campaignSelector.status.tooltip.title'),
                        body: l.readOrEmpty(`personal_missions_30.campaignSelector.status.tooltip.${I}`),
                        resId: c.read((e) => e.mono.personal_missions_30.tooltips.param_tooltip('resId')),
                    }),
                    [I, l, c],
                ),
            ),
            [R, $] = t(() => ({
                from: { transform: 'translate(10%, -220%) rotate(30deg)' },
                to: { transform: 'translate(-60%, 30%) rotate(30deg)' },
                loop: !0,
                delay: 5e3,
                config: { duration: 1e3, easing: n.easeOutCirc },
            }));
        return o.jsxs('div', {
            className: i(We, m && $e, E && De),
            children: [
                o.jsx(x, {
                    className: Re,
                    path: `personal_missions_30.campaignSelector.status.text.${w}`,
                    params: {
                        firstCampaign: b.campaignName,
                        secondCampaign: C.campaignName,
                        thirdCampaign: v.campaignName,
                        icon: o.jsx(u, {
                            className: Pe,
                            path: 'personal_missions_30.campaign_selector.info',
                            width: '24rem',
                            height: '24rem',
                        }),
                    },
                    ...(!m && W),
                }),
                o.jsxs('div', {
                    className: Ve,
                    ...(_ && k),
                    children: [
                        o.jsx(O, {
                            theme: m ? y.primary : y.secondary,
                            size: 'small',
                            disabled: _ || (m && h),
                            classNames: Fe,
                            onClick: function () {
                                _ || (m ? T(() => p.switchCampaign(I)) : j());
                            },
                            children: l.readOrEmpty(`personal_missions_30.campaignSelector.status.button.${w}`),
                        }),
                        _ &&
                            o.jsx(u, {
                                className: Me,
                                path: 'personal_missions_30.campaign_selector.alert',
                                width: '24rem',
                                height: '24rem',
                            }),
                        N && o.jsx(s.div, { style: R, className: Be }),
                    ],
                }),
            ],
        });
    }),
    Ye = {
        base: 'Switcher_b045409e',
        content: 'Switcher_content_b19c6c99',
        content__left: 'Switcher_content__left_bd242217',
        base__firstTwo: 'Switcher_base__firstTwo_9ba1e4f',
        base__firstTimeEntrance: 'Switcher_base__firstTimeEntrance_9ba1e4f',
        content__right: 'Switcher_content__right_52928bd0',
        base__third: 'Switcher_base__third_9ba1e4f',
        content__visible: 'Switcher_content__visible_fb2be705',
    };
const Ge = a(function ({ className: e }) {
        const { model: a } = B(),
            t = a.campaignSelectorViewState.get(),
            s = a.firstTimeEntrance.get(),
            n = (function ({ first: e, second: a, third: t }) {
                return { left: e.completedWithHonor && a.completedWithHonor, right: t.completedWithHonor };
            })(a.computes.campaignsInfo());
        return o.jsx('div', {
            className: i(Ye.base, Ye[`base__${t}`], s && Ye.base__firstTimeEntrance, e),
            children: Object.keys($).map((e) => {
                const a = n[e];
                return o.jsx(
                    'div',
                    {
                        className: i(Ye.content, Ye[`content__${e}`], a && Ye.content__visible),
                        children: a ? o.jsx(He, {}) : o.jsx(Ue, {}),
                    },
                    e,
                );
            }),
        });
    }),
    qe = {
        base: 'Footer_d2687e3',
        base__firstTwo: 'Footer_base__firstTwo_4308958a',
        base__default: 'Footer_base__default_4308958a',
        base__third: 'Footer_base__third_6ab8fda8',
        base__locked: 'Footer_base__locked_4308958a',
        base__completedWithHonor: 'Footer_base__completedWithHonor_954c2d1e',
    },
    ze = a(function ({ className: e }) {
        const { model: a } = B(),
            t = a.campaignSelectorViewState.get(),
            { footerStyle: n } = G();
        return o.jsx(s.div, {
            style: n,
            className: i(qe.base, qe[`base__${t}`], e),
            children: (() => {
                switch (t) {
                    case H.FIRST_TWO:
                    case H.THIRD:
                        return o.jsx(Ge, {});
                    case H.COMPLETED_WITH_HONOR:
                        return o.jsx(we, {});
                    case H.LOCKED:
                        return o.jsx(ke, {});
                }
            })(),
        });
    }),
    Ze = {
        particles: 'CampaignSelector_particles_6921a00e',
        base: 'CampaignSelector_c83ac2ea',
        content: 'CampaignSelector_content_7f268683',
        base__blocked: 'CampaignSelector_base__blocked_39b3c306',
        background: 'CampaignSelector_background_2a460990',
        footer: 'CampaignSelector_footer_b309f959',
        base__firstTwo: 'CampaignSelector_base__firstTwo_39b3c306',
        base__default: 'CampaignSelector_base__default_39b3c306',
        base__third: 'CampaignSelector_base__third_39b3c306',
        base__locked: 'CampaignSelector_base__locked_39b3c306',
        base__completedWithHonor: 'CampaignSelector_base__completedWithHonor_39b3c306',
        video: 'CampaignSelector_video_8f009bf0',
    },
    Je = a(function () {
        const e = g.resolve('videos'),
            { model: a, controls: t } = B(),
            n = a.campaignSelectorViewState.get(),
            { contentStyle: r, UIBlocked: c } = G();
        return (
            I(N.ESCAPE, t.close),
            o.jsx('div', {
                className: i(Ze.base, Ze[`base__${n}`], c && Ze.base__blocked),
                children: o.jsxs(s.div, {
                    style: r,
                    className: Ze.content,
                    children: [
                        o.jsx(ie, { className: Ze.background, children: o.jsx(xe, {}) }),
                        o.jsx(te, { className: Ze.particles }),
                        o.jsx(f, {
                            src: e.readOrEmpty('personal_missions_30.campaign_selector.smoke'),
                            className: Ze.video,
                            loop: !0,
                            autoplay: !0,
                        }),
                        o.jsx(ze, { className: Ze.footer }),
                    ],
                }),
            })
        );
    }),
    Qe = {
        getter: E({
            campaigns: [
                {
                    campaignName: 'The Long-Awaited Backup',
                    completedWithHonor: !1,
                    operations: [
                        {
                            state: L.COMPLETED_WITH_HONORS,
                            operationId: 1,
                            operationName: 'StuG IV',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_1_1',
                        },
                        {
                            state: L.AVAILABLE,
                            operationId: 2,
                            operationName: 'T28 HTC',
                            completed: !0,
                            isSelected: !1,
                            operationIcon: 'tile_1_2',
                        },
                        {
                            state: L.ACTIVE,
                            operationId: 3,
                            operationName: 'T 55A',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_1_3',
                        },
                        {
                            state: L.LOCKED,
                            operationId: 4,
                            operationName: 'Object 260',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_1_4',
                        },
                    ],
                },
                {
                    campaignName: 'Second Front',
                    completedWithHonor: !1,
                    operations: [
                        {
                            state: L.COMPLETED_WITH_HONORS,
                            operationId: 5,
                            operationName: 'Excalibur',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_5_1',
                        },
                        {
                            state: L.ACTIVE,
                            operationId: 6,
                            operationName: 'Chimera',
                            completed: !0,
                            isSelected: !1,
                            operationIcon: 'tile_6_1',
                        },
                        {
                            state: L.LOCKED,
                            operationId: 7,
                            operationName: 'Object 279 (e)',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_7_1',
                        },
                    ],
                },
                {
                    campaignName: 'Awesome Third Campaign',
                    completedWithHonor: !1,
                    operations: [
                        {
                            state: L.COMPLETED_WITH_HONORS,
                            operationId: 8,
                            operationName: 'Zebra',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_8_1',
                        },
                        {
                            state: L.ACTIVE,
                            operationId: 9,
                            operationName: 'Tiger',
                            completed: !0,
                            isSelected: !1,
                            operationIcon: 'tile_9_1',
                        },
                        {
                            state: L.LOCKED,
                            operationId: 10,
                            operationName: 'Crocodile',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_10_1',
                        },
                    ],
                },
            ],
            blockedByVehicle: !1,
            firstTimeEntrance: !1,
            campaignSelectorViewState: H.THIRD,
        }),
        controls: ({ model: e }) =>
            w({ switchCampaign: (a) => e.campaignSelectorViewState.set(a), openOperation: j, openInfoScreen: j }),
    };
T(
    o.jsx(k, {
        soundsOverrides: M,
        children: o.jsx(P, { mocks: Qe, mode: 'real', children: o.jsx(Y, { children: o.jsx(Je, {}) }) }),
    }),
    { fullScreen: !0 },
);
