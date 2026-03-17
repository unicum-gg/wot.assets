import { q as e, m as s, r as t, j as a, e as r } from '../../../chunks/vendor.js';
import {
    i,
    h as n,
    j as l,
    u as c,
    l as d,
    B as o,
    m as _,
    D as u,
    n as m,
    o as v,
    q as h,
    F as A,
    v as E,
    V as I,
    T as x,
    w as f,
    I as b,
    c as w,
    b as g,
    r as N,
    U as L,
} from '../../../chunks/lib.js';
import { E as S } from '../../../chunks/enums.js';
import { P as j, F as C, S as p } from '../../../chunks/footer.js';
/* empty css                     */ var T = ((e) => (
    (e.ACTIVE = 'ACTIVE'),
    (e.NOT_AVAILABLE = 'NOT_AVAILABLE'),
    (e.ALREADY_IN_GARAGE = 'ALREADY_IN_GARAGE'),
    (e.ALREADY_RECEIVED = 'ALREADY_RECEIVED'),
    (e.SOLD_OUT = 'SOLD_OUT'),
    (e.COUNT_NOT_AVAILABLE = 'COUNT_NOT_AVAILABLE'),
    e
))(T || {});
const [D, V] = i()(
        ({ observableModel: s }) => {
            const t = { root: s.object(), rewards: s.array('rewards') },
                a = e(
                    () => {
                        var e, s;
                        const a = t.root.get().eventMode;
                        return a === S.TWO_PARALLEL_PRODUCTS
                            ? null == (e = n(t.rewards.get(), ({ rewardId: e }) => e === t.root.get().currentRewardId))
                                ? void 0
                                : e.rewardId
                            : a === S.SEQUENTIAL_PRODUCT || a === S.ONE_SERIAL_PRODUCT
                              ? null == (s = n(t.rewards.get(), ({ state: e }) => e === T.ACTIVE))
                                  ? void 0
                                  : s.rewardId
                              : void 0;
                    },
                    { equals: l },
                ),
                r = e(() => n(t.rewards.get(), (e) => e.rewardId === a()), { equals: l });
            return { ...t, computes: { selectedRewardId: a, selectedReward: r } };
        },
        ({ externalModel: e }) => ({
            preview: e.createCallback((e) => ({ rewardId: e }), 'onPreview'),
            contributeResources: e.createCallback((e) => ({ rewardId: e }), 'onResourcesContribute'),
            returnResources: e.createCallback((e) => ({ rewardId: e }), 'onResourcesReturn'),
            selectReward: e.createCallback((e) => ({ rewardId: e }), 'onRewardSelected'),
            showHangar: e.createCallbackNoArgs('onHangarShow'),
        }),
    ),
    y = 'Footer_affirmative_416d3b79',
    O = s(function () {
        const { model: e, controls: s } = V(),
            { progression: r, progressionState: i, eventMode: n } = e.root.get(),
            l = e.computes.selectedRewardId(),
            _ = e.computes.selectedReward(),
            u = c({ buttonSize: 'medium' }, { large: { buttonSize: 'large' } }),
            m = t.useCallback(() => l && s.contributeResources(l), [s, l]),
            v = t.useCallback(() => l && s.returnResources(l), [s, l]),
            h = e.rewards.get(),
            A =
                !d(h, (e) => e.state === T.SOLD_OUT) &&
                d(h, (e) => [T.ALREADY_IN_GARAGE, T.ALREADY_RECEIVED, T.SOLD_OUT].includes(e.state));
        return n === S.TWO_PARALLEL_PRODUCTS && i !== j.Forbidden && A
            ? a.jsx(o, {
                  className: y,
                  onClick: s.showHangar,
                  size: u.buttonSize,
                  theme: 'primary',
                  children: R.strings.resource_well.mainView.affirmative.button(),
              })
            : a.jsx(C, {
                  variant: 'main',
                  progressionState: i,
                  vehicleInfo: null == _ ? void 0 : _.vehicleInfo,
                  onResourcesSelect: m,
                  onHangarShow: s.showHangar,
                  onResourcesReturn: v,
                  eventMode: n,
                  progressValue: r,
              });
    }),
    k = {
        content: 'Timer_content_23e8ba68',
        text: 'Timer_text_6ee5dd6c',
        time: 'Timer_time_7dd62be4',
        content__endingSoon: 'Timer_content__endingSoon_6ee5dd6c',
        timer: 'Timer_2dc5a913',
    },
    U = R.strings.resource_well,
    P = m,
    G = ({ endDate: e = 0, isEventEndingSoon: s = !1, timeLeft: t = 0 }) => {
        const i = c({ iconSize: 'x24x24' }, { large: { iconSize: 'x32x32' } });
        return a.jsx('div', {
            className: r(k.content, s ? k.content__endingSoon : k.content__daysLeft),
            children: s
                ? a.jsxs(a.Fragment, {
                      children: [
                          a.jsx('div', { className: k.text, children: U.mainView.timer.leftTime() }),
                          a.jsx(_, { className: k.timer, start: t, size: i.iconSize }),
                      ],
                  })
                : a.jsxs(a.Fragment, {
                      children: [
                          a.jsx('div', { className: k.text, children: U.mainView.timer.lastUntil() }),
                          a.jsx('span', { className: k.text, children: ' ' }),
                          a.jsx('div', { className: k.time, children: P(e, u.DayMonthFullTime) }),
                      ],
                  }),
        });
    },
    Y = 'Header_5380af7a',
    B = 'Header_subTitle_3e27bdfc',
    M = 'Header_title_c278441',
    z = 'Header_subTitle__empty_65f475ba',
    F = 'Header_description_d01fbd5',
    W = 'Header_br_b2b829d8',
    H = R.strings.resource_well,
    $ = s(function ({ className: e }) {
        const { model: s } = V(),
            { eventMode: t, progressionState: i, endDate: n, timeLeft: l, isEventEndingSoon: c } = s.root.get(),
            o = s.rewards.get(),
            _ = v(
                o,
                (e, s) => (
                    s.hasStyle ? (e.withStyleCount = s.vehiclesLimit) : (e.withoutStyleCount = s.vehiclesLimit),
                    e
                ),
                { withStyleCount: 0, withoutStyleCount: 0 },
            ),
            u = !(
                d(o, (e) => [T.ALREADY_IN_GARAGE, T.ALREADY_RECEIVED].includes(e.state)) ||
                h(
                    o,
                    (e) =>
                        [T.ALREADY_IN_GARAGE, T.ALREADY_RECEIVED].includes(e.state) &&
                        h(o, (s) => e.rewardId !== s.rewardId && 0 === s.vehiclesLeftCount),
                )
            ),
            m = () =>
                d(o, (e) => e.state === T.ALREADY_RECEIVED)
                    ? {
                          title: H.eventInfo.header.title.allVehiclesReceived(),
                          subTitle: H.eventInfo.header.subTitle.eventOver(),
                      }
                    : h(
                            o,
                            (e) =>
                                e.state === T.ALREADY_RECEIVED &&
                                h(
                                    o,
                                    (s) =>
                                        s.rewardId !== e.rewardId &&
                                        (0 === s.vehiclesLeftCount || s.state === T.ALREADY_IN_GARAGE),
                                ),
                        )
                      ? {
                            title: H.eventInfo.header.title.vehicleReceived(),
                            subTitle: H.eventInfo.header.subTitle.eventOver(),
                        }
                      : { title: H.commonTexts.eventTitle(), subTitle: '' };
        return a.jsxs('div', {
            className: r(Y, e),
            children: [
                u
                    ? a.jsx(G, { endDate: n, isEventEndingSoon: c, timeLeft: l })
                    : a.jsx('div', { className: r(B, !m().subTitle && z), children: m().subTitle }),
                a.jsx('div', { className: M, children: m().title }),
                t === S.SEQUENTIAL_PRODUCT &&
                    a.jsx(A, {
                        className: F,
                        text: H.eventInfo.description.sequentialEventMode(),
                        params: {
                            styleTanksCount: E.formatNumber('integral', _.withStyleCount),
                            withoutStyleTanksCount: E.formatNumber('integral', _.withoutStyleCount),
                            br: W,
                        },
                        upgradeLegacy: !0,
                    }),
                t === S.TWO_PARALLEL_PRODUCTS &&
                    i !== j.Forbidden &&
                    h(o, (e) => e.state === T.ACTIVE && Boolean(e.vehiclesLeftCount)) &&
                    a.jsx('div', { className: F, children: H.eventInfo.description.inParallelEventMode() }),
                t === S.ONE_SERIAL_PRODUCT &&
                    a.jsx('div', { className: F, children: H.eventInfo.description.oneSerialEventMode() }),
            ],
        });
    }),
    q = 'VehicleReceivedState_title_bfc8d322',
    Q = 'VehicleReceivedState_9b6d7966',
    J = R.strings.resource_well,
    K = ({ state: e, className: s }) => {
        const t = {
            [T.ALREADY_RECEIVED]: J.eventInfo.tanksAlreadyReceived(),
            [T.ALREADY_IN_GARAGE]: J.eventInfo.tanksAlreadyInGarage(),
        }[e];
        return a.jsx('div', { className: r(Q, s), children: a.jsx('div', { className: q, children: t }) });
    },
    X = 'Counter_counterBackground_8ac9070',
    Z = 'Counter_202f6dcc',
    ee = 'Counter_8743d17f',
    se = 'Counter_counter__glow_5214be6e',
    te = 'Counter_counter__over_76b00b88',
    ae = 'Counter_counterNumber_202f6dcc',
    re = ({ vehiclesLeftCount: e, showCounterGlow: s }) =>
        a.jsx('div', {
            className: Z,
            children: e
                ? a.jsx(p, {
                      body: R.strings.resource_well.tooltips.counter.warning.text(),
                      children: a.jsxs('div', {
                          className: r(ee, s && se),
                          children: [
                              a.jsx('div', { className: X }),
                              a.jsx('div', { className: ae, children: E.formatNumber('integral', e) }),
                          ],
                      }),
                  })
                : a.jsxs('div', {
                      className: r(ee, te),
                      children: [
                          a.jsx('div', { className: X }),
                          a.jsx('div', { className: ae, children: R.strings.resource_well.eventInfo.tanksOver() }),
                      ],
                  }),
        }),
    ie = 'ActiveState_d9c278e5',
    ne = 'ActiveState_base__disabled_6e0d27c8',
    le = 'ActiveState_title_ee54ad73',
    ce = 'ActiveState_title__withGlow_8235d582',
    de = 'ActiveState_button_37561140',
    oe = R.strings.resource_well,
    _e = s(function ({ reward: e, className: s, disabled: t }) {
        const { model: i, controls: n } = V(),
            { eventMode: l, progressionState: d } = i.root.get(),
            _ = i.computes.selectedRewardId(),
            { rewardId: u, vehiclesLeftCount: m, state: v, hasStyle: h } = e,
            { selectReward: A } = n,
            E = c({ buttonSize: 'small' }, { large: { buttonSize: 'medium' } }),
            I = l === S.TWO_PARALLEL_PRODUCTS && v === T.ACTIVE && _ !== u && d !== j.Forbidden && Boolean(m),
            R = ([S.ONE_SERIAL_PRODUCT, S.SEQUENTIAL_PRODUCT].includes(l) && h) || m <= 1e4,
            x =
                l === S.TWO_PARALLEL_PRODUCTS
                    ? oe.eventInfo.inParallelEventMode.tanksLeftText()
                    : h
                      ? oe.eventInfo.top.tanksLeftText()
                      : oe.eventInfo.withoutStyle.tanksLeftText();
        return a.jsxs(a.Fragment, {
            children: [
                a.jsxs('div', {
                    className: r(ie, t && ne, s),
                    children: [
                        a.jsx(re, { vehiclesLeftCount: m, showCounterGlow: R }),
                        Boolean(m) && a.jsx('div', { className: r(le, R && ce), children: x }),
                    ],
                }),
                I &&
                    a.jsx(p, {
                        body: oe.tooltips.mainView.selectVehicle.button(),
                        children: a.jsx(o, {
                            onClick: () => A(u),
                            size: E.buttonSize,
                            className: de,
                            theme: 'secondary',
                            children: oe.counterStates.activeState.selectVehicleButton(),
                        }),
                    }),
            ],
        });
    }),
    ue = 'DisabledState_text_9bc58d8f',
    me = 'DisabledState_48b5ef99',
    ve = ({ vehiclesLeftCount: e, className: s }) =>
        a.jsx('div', {
            className: r(me, s),
            children: a.jsx(A, {
                className: ue,
                text: R.strings.resource_well.eventInfo.withoutStyle.blocked.textInfo(),
                params: { regularRewardVehiclesCount: E.formatNumber('integral', e) },
                upgradeLegacy: !0,
            }),
        }),
    he = 'ErrorState_icon_f0d58ac7',
    Ae = 'ErrorState_c264cc6b',
    Ee = ({ className: e }) =>
        a.jsx(p, {
            body: R.strings.resource_well.tooltips.counter.error.text(),
            children: a.jsx('div', { className: r(Ae, e), children: a.jsx('div', { className: he }) }),
        }),
    Ie = 'CounterStates_activeState_9bffc64d',
    Re = 'CounterStates_activeState__wide_9c62b467',
    xe = 'CounterStates_errorState_3d3df3cb',
    fe = 'CounterStates_disabledState_7a829f15',
    be = 'CounterStates_vehicleReceivedState_b586d061',
    we = ({ reward: e, eventMode: s, disabled: t }) => {
        const { vehiclesLeftCount: i, state: n } = e;
        return a.jsx(a.Fragment, {
            children: (() => {
                switch (!0) {
                    case n === T.COUNT_NOT_AVAILABLE:
                        return a.jsx(Ee, { className: xe });
                    case n === T.ALREADY_RECEIVED || n === T.ALREADY_IN_GARAGE:
                        return a.jsx(K, { state: n, className: be });
                    case n === T.NOT_AVAILABLE:
                        return a.jsx(ve, { className: fe, vehiclesLeftCount: i });
                    default: {
                        const i = [S.SEQUENTIAL_PRODUCT, S.ONE_SERIAL_PRODUCT].includes(s);
                        return a.jsx(_e, { className: r(Ie, i && Re), reward: e, disabled: t });
                    }
                }
            })(),
        });
    },
    ge = 'VehicleDust_27e6230e',
    Ne = 'VehicleDust_base__state--show_b8954185',
    Le = 'VehicleDust_particles_5e244cab',
    Se = ({ visible: e, classNames: s }) =>
        a.jsxs('div', {
            className: r(ge, e && Ne, null == s ? void 0 : s.base),
            children: [
                a.jsx('img', {
                    className: r(Le, null == s ? void 0 : s.dust),
                    src: 'swf://gui/flash/animations/resourceWell/DustAni_dust.swf',
                }),
                a.jsx('img', {
                    className: r(Le, null == s ? void 0 : s.parts),
                    src: 'swf://gui/flash/animations/resourceWell/DustAni_parts.swf',
                }),
            ],
        }),
    je = 'VehicleImage_858e9dea',
    Ce = 'VehicleImage_tankWrapper_58e4602c',
    pe = 'VehicleImage_tank_9743a42f',
    Te = 'VehicleImage_tank__state--show_96771558',
    De = 'VehicleImage_tankLight_13a00a4d',
    Ve = 'VehicleImage_tankLight__state--show_96771558',
    ye = ({
        isVehicleActive: e,
        activeVehicleImageSrc: s,
        defaultVehicleImageSrc: t,
        lightsImageSrc: i,
        isLightsActive: n,
    }) =>
        a.jsxs('div', {
            className: je,
            children: [
                a.jsxs('div', {
                    className: Ce,
                    children: [
                        a.jsx('div', { className: r(pe, e && Te), style: { backgroundImage: `url(${s})` } }),
                        a.jsx('div', { className: r(pe, !e && Te), style: { backgroundImage: `url(${t})` } }),
                    ],
                }),
                a.jsx('div', { className: r(De, n && Ve), style: { backgroundImage: `url(${i})` } }),
            ],
        }),
    Oe = 'VehicleInfo_infoIcon_b4d1c36e',
    ke = 'VehicleInfo_727cd5bd',
    Ue = 'VehicleInfo_base__disabled_4d7dc501',
    Pe = 'VehicleInfo_text_23c6f228',
    Ge = 'VehicleInfo_type_1b1dad2c',
    Ye = 'VehicleInfo_info_8032de6d',
    Be = 'VehicleInfo_infoWrapper_a3632c61',
    Me = 'VehicleInfo_infoText_1f7265c',
    ze = ({ vehicleInfo: e, className: s, hasStyle: t, disabled: i, eventMode: n }) => {
        const l = c({ typeSize: 'x48x48' }, { large: { typeSize: 'x64x64' } });
        return a.jsxs('div', {
            className: r(s, ke, i && Ue),
            children: [
                a.jsxs(I, {
                    children: [
                        a.jsx(I.Level, { className: Pe, value: e.vehicleLvl }),
                        a.jsx(I.Type, { className: Ge, type: e.vehicleType, premium: e.isElite, size: l.typeSize }),
                        a.jsx(I.Name, { className: Pe, children: e.vehicleName }),
                    ],
                }),
                [S.SEQUENTIAL_PRODUCT, S.ONE_SERIAL_PRODUCT].includes(n) &&
                    a.jsx('div', {
                        className: Ye,
                        children: t
                            ? a.jsx(x, {
                                  contentId: R.views.resource_well.mono.lobby.tooltips.serial_number_tooltip('resId'),
                                  children: a.jsxs('div', {
                                      className: Be,
                                      children: [
                                          a.jsx('div', {
                                              className: Me,
                                              children: R.strings.resource_well.eventInfo.top.styleText(),
                                          }),
                                          a.jsx('div', { className: Oe }),
                                      ],
                                  }),
                              })
                            : a.jsx('div', {
                                  className: Me,
                                  children: R.strings.resource_well.eventInfo.withoutStyle.styleText(),
                              }),
                    }),
            ],
        });
    },
    Fe = {
        base: 'Rewards_ec437daa',
        dust: 'Rewards_dust_51cf4c77',
        'index--0': 'Rewards_index--0_6f1fad32',
        'index--1': 'Rewards_index--1_507b16e2',
        dustParts: 'Rewards_dustParts_51cf4c77',
        vehicleInfoWrapper: 'Rewards_vehicleInfoWrapper_f394a3e3',
        preview: 'Rewards_preview_fc0a7b9f',
        previewLabel: 'Rewards_previewLabel_ac2fb8e8',
    },
    We = R.images.resource_well.gui.maps.icons,
    He = R.strings.resource_well,
    $e = s(function () {
        const { model: e, controls: s } = V(),
            { eventMode: i } = e.root.get(),
            n = e.rewards.get(),
            l = e.computes.selectedRewardId();
        return a.jsx('div', {
            className: Fe.base,
            children: f(n, (e, n) => {
                const { vehiclesLeftCount: c, rewardId: d, state: o } = e,
                    _ = [T.ALREADY_RECEIVED, T.ALREADY_IN_GARAGE].includes(o),
                    u = Boolean(c) && o === T.ACTIVE && l === d,
                    m = (Boolean(c) && o === T.ACTIVE && !l) || (T.ACTIVE && l === d) || _,
                    v = !_ && 0 === c,
                    h =
                        i === S.TWO_PARALLEL_PRODUCTS &&
                        Boolean(l) &&
                        l !== d &&
                        ![T.ALREADY_IN_GARAGE, T.ALREADY_RECEIVED].includes(o),
                    A = v || h;
                return a.jsxs(
                    t.Fragment,
                    {
                        children: [
                            a.jsx(ye, {
                                isVehicleActive: m,
                                isLightsActive: u,
                                activeVehicleImageSrc: We.tanksBg.$dyn(`tank_${n}_active`),
                                defaultVehicleImageSrc: We.tanksBg.$dyn(`tank_${n}_default`),
                                lightsImageSrc: We.tanksBg.$dyn(`tank_${n}_shine`),
                            }),
                            a.jsx(Se, {
                                visible: u,
                                classNames: { base: Fe[`index--${n}`], parts: Fe.dustParts, dust: Fe.dust },
                            }),
                            a.jsxs('div', {
                                className: r(Fe[`index--${n}`], Fe.vehicleInfoWrapper),
                                children: [
                                    !_ &&
                                        a.jsx(b, {
                                            className: Fe.preview,
                                            type: 'preview',
                                            onClick: () => s.preview(e.rewardId),
                                            children: a.jsx('div', {
                                                className: Fe.previewLabel,
                                                children: He.mainView.preview.label(),
                                            }),
                                        }),
                                    a.jsx(ze, {
                                        vehicleInfo: e.vehicleInfo,
                                        eventMode: i,
                                        hasStyle: e.hasStyle,
                                        disabled: A,
                                    }),
                                    a.jsx(we, { reward: e, eventMode: i, disabled: h }),
                                ],
                            }),
                        ],
                    },
                    e.rewardId,
                );
            }),
        });
    }),
    qe = 'App_92308d19',
    Qe = 'App_base__blur_683be9ab',
    Je = 'App_background_6e019d9d',
    Ke = 'App_header_2af7bd70',
    Xe = 'App_solidBackground_ecec25af',
    Ze = s(function () {
        const { model: e } = V(),
            { showBlur: s } = e.root.get();
        return (
            w(),
            t.useLayoutEffect(() => {
                g(!0);
            }),
            a.jsxs(a.Fragment, {
                children: [
                    a.jsx('div', { className: Xe }),
                    a.jsxs('div', {
                        className: r(qe, s && Qe),
                        children: [
                            a.jsx('div', { className: Je }),
                            a.jsx($, { className: Ke }),
                            a.jsx($e, {}),
                            a.jsx(O, {}),
                        ],
                    }),
                ],
            })
        );
    });
N(a.jsx(L, { children: a.jsx(D, { children: a.jsx(Ze, {}) }) }), { fullScreen: !0 }).then(() => g(!1));
