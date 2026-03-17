import {
    q as e,
    s,
    t as a,
    o as t,
    v as i,
    e as n,
    w as o,
    r,
    n as l,
    x as c,
    l as d,
    j as _,
    m,
    f as u,
    R as p,
    y as g,
    p as f,
    z as b,
} from '../../../chunks/vendor.js';
import {
    P as h,
    c as I,
    i as N,
    f as v,
    k as x,
    Q as E,
    e as y,
    b as S,
    r as O,
    p as C,
    I as w,
    B as j,
    S as A,
    T as M,
    W as D,
    a as T,
    h as P,
    n as L,
    L as k,
    F as V,
    M as B,
    X as H,
    Y as $,
    Z as Q,
    _ as W,
    $ as U,
    a0 as q,
    a1 as F,
    a2 as Y,
    H as z,
    J as G,
    l as K,
    y as X,
    a3 as Z,
    a4 as J,
    R as ee,
    D as se,
    a5 as ae,
    a6 as te,
    a7 as ie,
    a8 as ne,
    a9 as oe,
    aa as re,
    ab as le,
    u as ce,
    ac as de,
    ad as _e,
    ae as me,
    af as ue,
    ag as pe,
    ah as ge,
    ai as fe,
    aj as be,
    v as he,
    ak as Ie,
    al as Ne,
    V as ve,
    am as xe,
    an as Ee,
    ao as ye,
    m as Se,
    E as Oe,
    K as Ce,
    ap as we,
    aq as je,
    ar as Ae,
    d as Me,
    U as De,
} from '../../../chunks/lib.js';
import { P as Te, M as Pe, O as Le } from '../../../chunks/enums.js';
import { s as Re, b as ke } from '../../../chunks/helpers.js';
/* empty css                    */ const Ve = 'detailId';
var Be = ((e) => ((e.ASSEMBLING = 'assembling'), (e.MISSIONS = 'missions'), (e.PROGRESSION = 'progression'), e))(
        Be || {},
    ),
    He = ((e) => (
        (e.IDLE = 'idle'),
        (e.ANIMATION_STARTED = 'animationStarted'),
        (e.ASSEMBLING = 'assembling'),
        (e.CONTINUE_DETAIL_INFO = 'continueDetailInfo'),
        (e.CONTINUE_CLAIM_DETAIL = 'continueClaimDetail'),
        (e.CONTINUE_BACK = 'continueBack'),
        e
    ))(He || {});
const $e = 'leaveOperation',
    Qe = 'openOperation',
    We = 'leaveProgression',
    Ue = 'switchMissions',
    qe = 'showMissions',
    Fe = 'hideMissions',
    Ye = 'toFreeCamera',
    ze = 'showProgressions',
    Ge = 'toDetailInfo',
    Ke = 'showDetailInfo',
    Xe = 'hideDetailInfo',
    Ze = 'leaveAssembling',
    Je = 'updateStatus',
    es = 'hideAdditionalMissions',
    ss = 'showAdditionalMissions',
    as = 'idle',
    ts = s(
        e({
            id: 'animation',
            initial: as,
            context: { nextOperationId: null, missionCategory: null, detailId: null, action: null },
            states: {
                [as]: {
                    on: {
                        SWITCH_OPERATION: { target: $e, actions: a({ nextOperationId: (e, s) => s.operationId }) },
                        TO_MISSIONS: { target: We, actions: a({ missionCategory: (e, s) => s.missionCategory }) },
                        TO_DETAIL_INFO: {
                            target: Ge,
                            actions: a({ detailId: (e, s) => s.detailId, action: (e, s) => s.action }),
                        },
                        HIDE_DETAIL_INFO: {
                            target: Xe,
                            actions: a({
                                action: (e, s) => (s.action ? s.action : null),
                                detailId: (e, s) => (s.detailId ? s.detailId : null),
                            }),
                        },
                        SHOW_DETAIL_INFO: { target: Ke, actions: a({ action: (e, s) => s.action }) },
                        LEAVE_ASSEMBLING: {
                            target: Ze,
                            actions: a({ detailId: (e, s) => (s.detailId ? s.detailId : null) }),
                        },
                        HIDE_MISSIONS: { target: Fe },
                        SWITCH_MISSIONS: { target: Ue },
                        TO_FREE_CAMERA: { target: Ye },
                        UPDATE_STATUS: { target: Je },
                        HIDE_ADDITIONAL_MISSIONS: { target: es },
                    },
                },
                [$e]: { on: { LEAVE_OPERATION_DONE: Qe } },
                [Qe]: { on: { TO_IDLE: { target: as } } },
                [We]: { on: { LEAVE_PROGRESSION_DONE: { target: qe } } },
                [Ye]: { on: { TO_IDLE: { target: as } } },
                [qe]: { on: { TO_IDLE: { target: as } } },
                [Ue]: { on: { TO_IDLE: { target: as } } },
                [Fe]: { on: { HIDE_MISSIONS_DONE: { target: ze } } },
                [ze]: { on: { TO_IDLE: { target: as } } },
                [Ge]: { on: { SHOW_DETAIL_INFO: { target: Ke } } },
                [Ke]: { on: { TO_IDLE: { target: as } } },
                [Xe]: {
                    on: { TO_IDLE: { target: as }, SHOW_DETAIL_INFO: { target: Ke }, LEAVE_ASSEMBLING: { target: Ze } },
                },
                [Ze]: { on: { TO_IDLE: { target: as } } },
                [Je]: { on: { TO_IDLE: { target: as } } },
                [es]: { on: { HIDE_ADDITIONAL_MISSIONS_DONE: { target: ss } } },
                [ss]: { on: { TO_IDLE: { target: as } } },
            },
        }),
    ),
    is = { default: 'default', missions: 'missions' },
    ns = 'claim',
    os = 'showInfo',
    rs = 'back';
function ls(e, s) {
    Promise.all(e.flat()).then(() => {
        null == s || s();
    });
}
const cs = 'missions',
    ds = 'assembling',
    _s = 'progression',
    ms = { carouselButton: I('carouselButton'), bp_slide: I('bp_slide') },
    us = { step: { ...h.step, factor: 9 }, animationConfig: { ...h.animationConfig, tension: 120 } },
    [ps, gs] = N()(
        (e) => {
            const s = {
                ...e.observableModel.primitives([
                    'activeOperationId',
                    'mainScreenState',
                    'cameraFlightInProgress',
                    'animationState',
                    'campaignName',
                ]),
                vehicle: e.observableModel.object('vehicle'),
                status: e.observableModel.object('status'),
                operations: e.observableModel.arrayClone('operations'),
                menuItems: e.observableModel.arrayClone('menuItems'),
                activeDetailId: t.box(''),
                currentState: t.box(e.observableModel.primitives(['mainScreenState']).mainScreenState.get()),
            };
            e.cleanup(
                i(() => {
                    const e = s.mainScreenState.get(),
                        a = s.currentState.get(),
                        t = s.animationState.get(),
                        i = s.activeDetailId.get();
                    switch (
                        (a === cs && e === Be.PROGRESSION
                            ? ts.send({ type: 'HIDE_MISSIONS' })
                            : a === ds && e === Be.PROGRESSION && i
                              ? ts.send({ type: 'HIDE_DETAIL_INFO', action: rs })
                              : a === _s &&
                                e === Be.MISSIONS &&
                                o(() => {
                                    s.currentState.set(cs);
                                }),
                        t)
                    ) {
                        case He.ASSEMBLING:
                            return ts.send({ type: 'TO_FREE_CAMERA' });
                        case He.CONTINUE_DETAIL_INFO:
                            return ts.send({ type: 'SHOW_DETAIL_INFO', action: os });
                        case He.CONTINUE_CLAIM_DETAIL:
                            return ts.send({ type: 'SHOW_DETAIL_INFO', action: ns });
                        case He.CONTINUE_BACK:
                            return ts.send({ type: 'LEAVE_ASSEMBLING' });
                    }
                }),
            );
            const a = v.model(() => {
                    const e = s.operations.get(),
                        a = s.activeOperationId.get();
                    return e.find((e) => e.operationId === a);
                }),
                n = v.model((e) => {
                    var s;
                    return null == (s = a()) ? void 0 : s.details.find((s) => s.id === e);
                }),
                r = v.model((e) => {
                    var s;
                    return null == (s = a()) ? void 0 : s.details.findIndex((s) => s.status === e);
                }),
                l = v.model((e) => {
                    var a;
                    return null == (a = s.operations.get().find((s) => s.operationId === e))
                        ? void 0
                        : a.operationState;
                }),
                c = v.model(() => {
                    var e;
                    return null == (e = a())
                        ? void 0
                        : e.details.reduce((e, { maxPoint: s }, a) => (e.push((e[a - 1] ?? 0) + s), e), []);
                }),
                d = v.model((e) => {
                    const t = s.activeDetailId.get();
                    if (!t) return;
                    const i = a();
                    if (!i) return;
                    const n = i.details.findIndex((e) => e.id === t),
                        o = e === x.ARROW_LEFT ? n - 1 : n + 1,
                        r = i.details[o];
                    return r ? { index: o, detail: r } : void 0;
                });
            return {
                ...s,
                computes: {
                    firstDetailIndexByStatus: r,
                    requiredDetailsPoint: c,
                    nextActiveDetail: d,
                    operationStateToPerform: l,
                    activeOperation: a,
                    detailById: n,
                },
            };
        },
        ({ model: e, externalModel: s }) => ({
            goBack: s.createCallbackNoArgs('onBack'),
            showVehiclePreview: s.createCallbackNoArgs('onVehiclePreview'),
            setFreeCamera: s.createCallbackNoArgs('setFreeCamera'),
            showVehicleInHangar: s.createCallbackNoArgs('showVehicleInHangar'),
            handleOperationStatusButtonClick: s.createCallbackNoArgs('onOperationStatusButtonClick'),
            playIntroVideoClick: s.createCallbackNoArgs('showOperationVehicleVideo'),
            openAdditionalMission: s.createCallbackNoArgs('onAdditionalMission'),
            showDetailVideo: s.createCallback((e) => ({ [Ve]: e }), 'showDetailVideo'),
            showDetailInfo: s.createCallback((e) => ({ [Ve]: e }), 'onDetailInfo'),
            updateAnimationState: s.createCallback((e) => ({ animationState: e }), 'updateAnimationState'),
            changeCategory: s.createCallback((e) => ({ category: e }), 'missionsModel.changeCategory'),
            openMissions: s.createCallback((e) => ({ category: e }), 'onMission'),
            switchOperation: s.createCallback((e) => ({ operationId: e }), 'onSwitchOperation'),
            claimDetail: s.createCallback((e) => ({ [Ve]: e }), 'onClaimDetail'),
            mouseOver3dScene: s.createCallback((e) => e, 'onMouseOver3dScene'),
            moveSpace: s.createCallback((e) => e, 'onMoveSpace'),
            setActiveDetailId: n((s) => {
                e.activeDetailId.set(s);
            }),
            setCurrentState: n((s) => {
                e.currentState.set(s);
            }),
        }),
    ),
    fs = r.createContext(null),
    bs = l(function ({ children: e }) {
        const { model: s, controls: a } = gs(),
            t = c(ts, (e) => e.value),
            i = c(ts, (e) => e.context),
            n = s.cameraFlightInProgress.get(),
            o = t !== as || n,
            l = E((e) => {
                ls(
                    [
                        v.start({
                            opacity: 0,
                            transform: 'translateY(-20rem)',
                            delay: 300,
                            config: { duration: 300, easing: y.easeInQuart },
                        }),
                        b.start({ opacity: 0, config: { duration: 300, easing: y.easeInQuart } }),
                        u.start({
                            opacity: 0,
                            transform: 'translateY(-20rem)',
                            delay: 240,
                            config: { duration: 250, easing: y.easeInQuart },
                        }),
                    ],
                    e,
                );
            }),
            [m, u] = d(() => ({
                from: { opacity: 0, transform: 'translateY(20rem)' },
                config: { duration: 300, easing: y.easeOutQuart },
            })),
            [p, g] = d(() => ({
                from: { opacity: 0, transform: 'translateY(20rem)', pointerEvents: 'none' },
                config: { duration: 300, easing: y.easeOutQuart },
            })),
            [f, b] = d(() => ({ from: { opacity: 0 }, config: { duration: 300, easing: y.easeOutQuart } })),
            [h, I] = d(() => ({ from: { opacity: 1, transform: 'translateY(0rem)' }, config: { duration: 200 } })),
            [N, v] = d(() => ({
                from: { opacity: 1, transform: 'translateY(0rem)' },
                config: { duration: 300, easing: y.easeOutQuart },
            })),
            [x, O] = d(() => ({
                from: { opacity: 0, transform: 'translate(-50%, 20rem)' },
                config: { duration: 300 },
            })),
            [C, w] = d(() => ({ from: { opacity: 0, transform: 'translateX(-20rem)' }, config: { duration: 300 } }));
        return (
            S(() => {
                (u.start({ opacity: 1, transform: 'translateY(0rem)', delay: 360 }),
                    g.start({ opacity: 1, transform: 'translateY(0rem)', pointerEvents: 'auto' }),
                    b.start({ opacity: 1, config: { duration: 300, easing: y.easeInQuart } }));
            }),
            r.useEffect(() => {
                switch (t) {
                    case $e:
                        ls(
                            [
                                g.start({
                                    opacity: 0,
                                    transform: 'translateY(-20rem)',
                                    pointerEvents: 'none',
                                    config: { duration: 300, easing: y.easeInQuart },
                                }),
                                I.start({
                                    opacity: 0,
                                    transform: 'translateY(10rem)',
                                    config: { easing: y.easeInQuart },
                                }),
                                b.start({ opacity: 0, config: { duration: 300, easing: y.easeInQuart } }),
                                u.start({
                                    opacity: 0,
                                    transform: 'translateY(-20rem)',
                                    delay: 150,
                                    config: { duration: 300, easing: y.easeInQuart },
                                }),
                            ],
                            () => {
                                i.nextOperationId &&
                                    (a.switchOperation(i.nextOperationId), ts.send({ type: 'LEAVE_OPERATION_DONE' }));
                            },
                        );
                        break;
                    case Qe:
                        (u.set({ transform: 'translateY(20rem)' }),
                            g.set({ transform: 'translateY(20rem)' }),
                            ls(
                                [
                                    u.start({
                                        opacity: 1,
                                        transform: 'translateY(0rem)',
                                        delay: 620,
                                        config: { duration: 300, easing: y.easeOutQuart },
                                    }),
                                    I.start({
                                        opacity: 1,
                                        transform: 'translateY(0rem)',
                                        config: { easing: y.easeOutCirc },
                                    }),
                                    b.start({ opacity: 1, config: { duration: 300, easing: y.easeInQuart } }),
                                    g.start({
                                        opacity: 1,
                                        transform: 'translateY(0rem)',
                                        pointerEvents: 'auto',
                                        config: { duration: 500, easing: y.easeInOutCirc },
                                        delay: 100,
                                    }),
                                ],
                                () => ts.send({ type: 'TO_IDLE' }),
                            ));
                        break;
                    case We:
                        ls(
                            [
                                v.start({
                                    opacity: 0,
                                    transform: 'translateY(-20rem)',
                                    delay: 300,
                                    config: { duration: 300, easing: y.easeOutQuart },
                                }),
                                g.start({
                                    opacity: 0,
                                    transform: 'translateY(20rem)',
                                    pointerEvents: 'none',
                                    config: { duration: 300, easing: y.easeInQuart },
                                }),
                                b.start({ opacity: 0, config: { duration: 300, easing: y.easeInQuart } }),
                                u.start({
                                    opacity: 0,
                                    transform: 'translateY(-20rem)',
                                    delay: 200,
                                    config: { duration: 250, easing: y.easeInQuart },
                                }),
                            ],
                            () => {
                                i.missionCategory &&
                                    (ts.send({ type: 'LEAVE_PROGRESSION_DONE' }), a.openMissions(i.missionCategory));
                            },
                        );
                        break;
                    case ze:
                        (u.set({ transform: 'translateY(20rem)' }),
                            ls(
                                [
                                    v.start({
                                        opacity: 1,
                                        transform: 'translateY(0rem)',
                                        delay: 300,
                                        config: { duration: 300, easing: y.easeOutQuart },
                                    }),
                                    u.start({ opacity: 1, transform: 'translateY(0rem)', delay: 480 }),
                                    g.start({
                                        opacity: 1,
                                        transform: 'translateY(0rem)',
                                        pointerEvents: 'auto',
                                        config: { duration: 500, easing: y.easeInOutCirc },
                                        delay: 200,
                                    }),
                                    b.start({ opacity: 1, config: { duration: 300, easing: y.easeInQuart } }),
                                ],
                                () => ts.send({ type: 'TO_IDLE' }),
                            ));
                        break;
                    case Ye:
                        l(() => {
                            (a.setFreeCamera(), a.setCurrentState(ds), ts.send({ type: 'TO_IDLE' }));
                        });
                        break;
                    case Ge:
                        (i.action === ns &&
                            g.start({
                                opacity: 0,
                                transform: 'translateY(20rem)',
                                pointerEvents: 'none',
                                config: { duration: 250, easing: y.easeInQuart },
                            }),
                            l(() => {
                                if (i.action === os) {
                                    if (!i.detailId) return;
                                    (a.showDetailInfo(i.detailId), a.setCurrentState(ds));
                                } else if (i.action === ns) {
                                    if (!i.detailId) return;
                                    (a.claimDetail(i.detailId), a.setCurrentState(ds));
                                }
                            }));
                        break;
                    case Ke:
                        (i.action === ns &&
                            g.start({
                                opacity: 1,
                                transform: 'translateY(0rem)',
                                pointerEvents: 'auto',
                                config: { easing: y.easeOutQuart },
                                onRest: () => a.updateAnimationState(He.IDLE),
                            }),
                            ls(
                                [
                                    O.start({
                                        opacity: 1,
                                        transform: 'translate(-50%, 0rem)',
                                        config: { easing: y.easeOutQuart },
                                    }),
                                    w.start({
                                        opacity: 1,
                                        transform: 'translateX(0rem)',
                                        config: { easing: y.easeOutQuart },
                                    }),
                                ],
                                () => {
                                    (a.updateAnimationState(He.IDLE), ts.send({ type: 'TO_IDLE' }));
                                },
                            ));
                        break;
                    case Xe:
                        (i.action === ns &&
                            g.start({
                                opacity: 0,
                                transform: 'translateY(20rem)',
                                pointerEvents: 'none',
                                config: { duration: 300, easing: y.easeInCirc },
                                onRest: () => {
                                    i.detailId && (a.setActiveDetailId(i.detailId), a.claimDetail(i.detailId));
                                },
                            }),
                            ls(
                                [
                                    w.start({
                                        opacity: 0,
                                        transform: 'translateX(20rem)',
                                        config: { easing: y.easeInCirc },
                                    }),
                                    O.start({
                                        opacity: 0,
                                        transform: 'translate(-50%, 20rem)',
                                        config: { easing: y.easeInCirc },
                                    }),
                                ],
                                () => {
                                    i.action === rs
                                        ? a.setActiveDetailId('')
                                        : i.action === os &&
                                          (i.detailId
                                              ? (a.setActiveDetailId(i.detailId), a.showDetailInfo(i.detailId))
                                              : (a.setFreeCamera(),
                                                a.setActiveDetailId(''),
                                                ts.send({ type: 'TO_IDLE' })));
                                },
                            ));
                        break;
                    case Ze:
                        (a.setCurrentState(_s),
                            u.set({ transform: 'translateY(20rem)', opacity: 0 }),
                            ls(
                                [
                                    v.start({
                                        opacity: 1,
                                        transform: 'translateY(0rem)',
                                        delay: 300,
                                        config: { duration: 300, easing: y.easeOutQuart },
                                    }),
                                    u.start({ opacity: 1, transform: 'translateY(0rem)', delay: 630 }),
                                    g.start({
                                        opacity: 1,
                                        transform: 'translateY(0rem)',
                                        pointerEvents: 'auto',
                                        config: { duration: 500, easing: y.easeInOutCirc },
                                        delay: 200,
                                    }),
                                    b.start({ opacity: 1, config: { duration: 300, easing: y.easeInQuart } }),
                                ],
                                () => {
                                    (ts.send({ type: 'TO_IDLE' }), a.updateAnimationState(He.IDLE));
                                },
                            ));
                        break;
                    case Je:
                        I.start({
                            opacity: 0,
                            transform: 'translateY(10rem)',
                            config: { easing: y.easeInQuart, duration: 300 },
                            onRest: () => {
                                (a.handleOperationStatusButtonClick(), ts.send({ type: 'TO_IDLE' }));
                            },
                        });
                        break;
                    case es:
                        u.start({
                            opacity: 0,
                            transform: 'translateY(-20rem)',
                            delay: 200,
                            config: { duration: 300, easing: y.easeInQuart },
                            onRest: () => ts.send({ type: 'HIDE_ADDITIONAL_MISSIONS_DONE' }),
                        });
                        break;
                    case ss:
                        (u.set({ transform: 'translateY(20rem)' }),
                            u.start({
                                opacity: 1,
                                transform: 'translateY(0rem)',
                                delay: 200,
                                config: { duration: 300, easing: y.easeOutQuart },
                                onRest: () => ts.send({ type: 'TO_IDLE' }),
                            }));
                }
            }, [i.missionCategory, i.nextOperationId, i.detailId, i.action, t, a, v, I, O, l, w, g, b, u]),
            _.jsx(fs.Provider, {
                value: {
                    completedStateStyle: f,
                    additionalCardStyle: m,
                    animationInProgress: o,
                    progressionStyle: p,
                    detailInfoStyle: C,
                    zoomOutStyle: x,
                    statusStyle: h,
                    menuStyle: N,
                },
                children: e,
            })
        );
    }),
    hs = () => {
        const e = r.useContext(fs);
        if (!e) throw new Error('useAnimation must be used within an AnimationProvider');
        return e;
    },
    Is = 'ZoomOut_718336b5',
    Ns = 'ZoomOut_line_227e84e1',
    vs = 'ZoomOut_icon_ea52efbd';
function xs({ className: e }) {
    const s = O.resolve('sounds'),
        { zoomOutStyle: a, animationInProgress: t } = hs(),
        i = C(
            Te.CUSTOM_SIMPLE,
            r.useMemo(
                () => ({
                    body: O.resolve('strings').readOrEmpty('personal_missions_30.tooltip.assembling.zoomOut'),
                    split: !1,
                    resId: O.resolve('views').read((e) => e.mono.personal_missions_30.tooltips.param_tooltip('resId')),
                }),
                [],
            ),
        );
    return _.jsxs(m.div, {
        style: a,
        className: u(Is, e),
        children: [
            _.jsx('div', { className: Ns }),
            _.jsx(w, {
                path: 'personal_missions_30.common.zoom_out',
                ...i,
                onClick: function () {
                    t || (s.play('yes'), i.onClick(), ts.send({ type: 'HIDE_DETAIL_INFO', action: os }));
                },
                onMouseEnter: function (e) {
                    t || (i.onMouseEnter(e), s.play('highlight'));
                },
                width: 64,
                height: 64,
                className: vs,
            }),
            _.jsx('div', { className: Ns }),
        ],
    });
}
const Es = 'InfoBox_ea99595d',
    ys = 'InfoBox_header_7764560e',
    Ss = 'InfoBox_button_54dcf703',
    Os = 'InfoBox_buttonIcon_68293c83',
    Cs = 'InfoBox_title_b1b49d70',
    ws = 'InfoBox_componentName_ce19d1c0',
    js = 'InfoBox_scrollArea_4137adea',
    As = 'InfoBox_textArea_58ae1c7b',
    Ms = 'InfoBox_text_860b4630',
    Ds = l(function ({ className: e }) {
        const s = O.resolve('strings'),
            { model: a, controls: t } = gs(),
            i = a.activeDetailId.get(),
            n = a.computes.detailById(i),
            { detailInfoStyle: o } = hs(),
            l = C(
                Te.CUSTOM_SIMPLE,
                r.useMemo(
                    () => ({
                        body: s.readOrEmpty('personal_missions_30.tooltip.assembling.viewAnimation'),
                        resId: O.resolve('views').read((e) =>
                            e.mono.personal_missions_30.tooltips.param_tooltip('resId'),
                        ),
                    }),
                    [s],
                ),
            );
        const c = s.readOrEmpty(`personal_missions_30.detail.descr.historical.${i}`).split('\n');
        return _.jsxs(m.div, {
            style: o,
            className: u(Es, e),
            children: [
                _.jsxs('div', {
                    className: ys,
                    children: [
                        _.jsx('div', {
                            className: Cs,
                            children: s.readOrEmpty('personal_missions_30.main.assembling.component'),
                        }),
                        (null == n ? void 0 : n.hasAssemblingVideo) &&
                            _.jsx(j, {
                                theme: 'secondary',
                                className: Ss,
                                ...l,
                                onClick: function () {
                                    (t.showDetailVideo(i), l.onClick());
                                },
                                children: _.jsx(w, {
                                    path: 'personal_missions_30.common.video',
                                    width: 32,
                                    height: 32,
                                    className: Os,
                                }),
                            }),
                    ],
                }),
                _.jsx(A, { split: !0, text: s.readOrEmpty(`personal_missions_30.detail.name.${i}`), className: ws }),
                _.jsx(M, {
                    children: _.jsx(D, {
                        className: js,
                        areaClassName: As,
                        children: c.map((e, s) => _.jsx(A, { split: !0, text: e, className: Ms }, s)),
                    }),
                }),
            ],
        });
    }),
    Ts = 'Assembling_aad1dbe5',
    Ps = 'Assembling_wrapper_455363c4',
    Ls = 'Assembling_infoBox_ec2ebc27',
    Rs = 'Assembling_base__disabled_ca5e9f6e',
    ks = 'Assembling_zoomOut_8760d796',
    Vs = l(function () {
        const { model: e, controls: s } = gs(),
            a = e.activeDetailId.get(),
            { animationInProgress: t } = hs();
        return (
            T(x.ESCAPE, function () {
                t || (a ? ts.send({ type: 'HIDE_DETAIL_INFO', action: os }) : s.goBack());
            }),
            _.jsx('div', {
                className: u(Ts, t && Rs),
                children:
                    a &&
                    _.jsxs('div', {
                        className: Ps,
                        children: [_.jsx(Ds, { className: Ls }), _.jsx(xs, { className: ks })],
                    }),
            })
        );
    }),
    Bs = {
        base: 'Separator_ad87e1c2',
        separator: 'Separator_a31c4ceb',
        separator__left: 'Separator_separator__left_99aa190',
        separatorPattern: 'Separator_separatorPattern_151b0785',
    };
function Hs({ className: e, type: s = 'default' }) {
    return _.jsxs('div', {
        className: u(Bs.base, Bs[`base__${s}`], e),
        children: [
            'default' === s && _.jsx('div', { className: u(Bs.separator, Bs.separator__left) }),
            _.jsx('div', { className: Bs.separatorPattern }),
            'default' === s && _.jsx('div', { className: Bs.separator }),
        ],
    });
}
const $s = 'assault',
    Qs = 'breakthrough',
    Ws = 'sniper',
    Us = 'support',
    qs = 'universal',
    Fs = 'default',
    Ys = 'role',
    zs = [Pe.ASSAULT, Pe.SNIPER, Pe.SUPPORT],
    Gs = zs.map((e) => {
        return {
            id: e,
            label:
                ((s = e),
                O.resolve('intl').toUpperCase(
                    O.resolve('strings').readOrEmpty(`personal_missions_30.common.category.${s}`),
                )),
        };
        var s;
    });
function Ks(e, s, a) {
    return e.find((e) => e[s] === a);
}
const [Xs, Zs] = N()(({ observableModel: e }) => {
        const s = { ...e.primitives(['missionsCategory']), allMissions: e.arrayClone('allMissions') },
            a = v.model((e) => {
                const a = Ks(s.allMissions.get(), 'operationId', e);
                if (!a) throw new Error(`operation with operationId: ${e} was not found`);
                return a;
            }),
            t = v.model((e) => {
                const t = a(e).missionsCategorizations;
                if (!t) throw new Error(`missionsCategorizations with operationId: ${e} was not found`);
                const i = s.missionsCategory.get(),
                    n = Ks(t, 'missionsCategory', i);
                if (!n) throw new Error(`missions with missionsCategory: ${i} was not found`);
                return n.missions;
            }),
            i = v.model((e, s) => {
                const a = P(t(s), e);
                if (!a) throw new Error(`mission with index ${e} was not found`);
                return a;
            }),
            n = v.primitive((e) => a(e).operationName),
            o = v.primitive((e) => ({ minLevel: a(e).minRequiredVehicle, maxLevel: a(e).maxRequiredVehicle }));
        return {
            ...s,
            computes: { missionsByCategory: t, missionByIndex: i, operationNameById: n, vehicleLevelsById: o },
        };
    }, L),
    Js = {
        base: 'VehicleItem_4773539d',
        base__role: 'VehicleItem_base__role_f4574026',
        icon: 'VehicleItem_icon_622e4ecc',
        header: 'VehicleItem_header_5a7536ee',
    };
function ea({ item: e, type: s = Fs, className: a }) {
    const t = O.resolve('strings'),
        i = s === Ys ? 'roles' : 'vehicleTypes',
        n = s === Ys ? 'personal_missions_30.common.role' : 'menu.header.vehicleType';
    return _.jsxs('div', {
        className: u(Js.base, Js[`base__${s}`], a),
        children: [
            _.jsx(w, { path: `personal_missions_30.common.${i}.${k(e)}`, className: Js.icon }),
            _.jsx('div', { className: Js.header, children: t.readOrEmpty(`${n}.${k(e)}`) }),
        ],
    });
}
const sa = {
        base: 'CategoryInfo_c4876b8',
        icon: 'CategoryInfo_icon_2d0fb57a',
        title: 'CategoryInfo_title_3745f90',
        separator: 'CategoryInfo_separator_621f70ab',
        descriptionBlock: 'CategoryInfo_descriptionBlock_18a18499',
        description: 'CategoryInfo_description_3c4aef16',
        highlightedText: 'CategoryInfo_highlightedText_76a530ff',
    },
    aa = l(function ({ className: e }) {
        const s = O.resolve('strings'),
            { model: a } = gs(),
            { model: t } = Zs(),
            i = t.missionsCategory.get(),
            n = a.activeOperationId.get();
        return _.jsxs('div', {
            className: u(sa.base, e),
            children: [
                _.jsx(w, {
                    path: `personal_missions_30.category.c_64x64.${i}`,
                    width: '64rem',
                    height: '64rem',
                    adaptive: { large: { width: 80, height: 80, path: `personal_missions_30.category.c_80x80.${i}` } },
                    className: sa.icon,
                }),
                _.jsx('div', {
                    className: sa.title,
                    children: s.readOrEmpty(`personal_missions_30.common.category.${i}`),
                }),
                _.jsx(Hs, { type: 'withoutAlpha', className: sa.separator }),
                _.jsxs('div', {
                    className: sa.descriptionBlock,
                    children: [
                        _.jsx(V, {
                            path: 'personal_missions_30.main.missions.category.description',
                            params: {
                                category: s.readOrEmpty(`personal_missions_30.common.category.${i}`),
                                operationName: _.jsx('div', {
                                    className: sa.highlightedText,
                                    children: t.computes.operationNameById(n),
                                }),
                                minLevel: B(t.computes.vehicleLevelsById(n).minLevel),
                                maxLevel: B(t.computes.vehicleLevelsById(n).maxLevel),
                            },
                            className: sa.description,
                        }),
                        _.jsx(V, {
                            path: `personal_missions_30.main.missions.category.vehicles.${i}`,
                            params: {
                                HT: _.jsx(ea, { item: U }),
                                MT: _.jsx(ea, { item: W }),
                                LT: _.jsx(ea, { item: Q }),
                                TD: _.jsx(ea, { item: $ }),
                                SPG: _.jsx(ea, { item: H }),
                                breakthrough: _.jsx(ea, { item: Qs, type: Ys }),
                                assault: _.jsx(ea, { item: $s, type: Ys }),
                                universal: _.jsx(ea, { item: qs, type: Ys }),
                                sniper: _.jsx(ea, { item: Ws, type: Ys }),
                                support: _.jsx(ea, { item: Us, type: Ys }),
                            },
                            className: sa.vehicles,
                        }),
                    ],
                }),
            ],
        });
    });
function ta({ id: e, label: s }) {
    const a = O.resolve('views'),
        t = q({
            contentId: a.read((e) => e.mono.personal_missions_30.tooltips.missions_category_tooltip('resId')),
            args: { category: e },
        });
    return _.jsx(F.Tab, { tabId: e, ...t, children: s });
}
var ia = ((e) => (
    (e.ACTIVE = 'active'),
    (e.DISABLED = 'disabled'),
    (e.COMPLETED = 'completed'),
    (e.LOCKED = 'locked'),
    e
))(ia || {});
const na = {
        base: 'ArrowButton_472a47bc',
        base__small: 'ArrowButton_base__small_406dfd6e',
        base__medium: 'ArrowButton_base__medium_3ee48459',
        base__large: 'ArrowButton_base__large_a8d86102',
        base__up: 'ArrowButton_base__up_cca52ffc',
        base__down: 'ArrowButton_base__down_4ae648f3',
        base__left: 'ArrowButton_base__left_45ed34a5',
        icon: 'ArrowButton_icon_440f072',
    },
    oa = { up: 'up', right: 'right', down: 'down', left: 'left' },
    ra = 'small',
    la = 'medium',
    ca = 'large',
    da = r.forwardRef(function ({ arrowDirection: e = oa.right, size: s, className: a, classNames: t, ...i }, n) {
        return _.jsx(j, {
            ...i,
            theme: 'secondary',
            className: u(na.base, na[`base__${s}`], na[`base__${e}`], a),
            autoAlignContent: !1,
            classNames: t,
            ref: n,
            children: _.jsx('div', { className: u(na.icon, null == t ? void 0 : t.icon) }),
        });
    });
da.direction = oa;
const _a = {
    base: 'ShadowLine_a5bf2ece',
    glow: 'ShadowLine_glow_2c471335',
    line: 'ShadowLine_line_f4e55e79',
    dash: 'ShadowLine_dash_24e41869',
    dash__left: 'ShadowLine_dash__left_1f7623b0',
    dash__right: 'ShadowLine_dash__right_81c6c0e4',
};
function ma({ children: e }) {
    return _.jsxs('div', {
        className: _a.base,
        children: [
            e,
            _.jsx('div', { className: _a.glow }),
            _.jsx('div', { className: _a.line }),
            _.jsx('div', { className: u(_a.dash, _a.dash__left) }),
            _.jsx('div', { className: u(_a.dash, _a.dash__right) }),
        ],
    });
}
const ua = {
    base: 'MissionNumber_36d5d4af',
    base__missions: 'MissionNumber_base__missions_59467b17',
    base__completed: 'MissionNumber_base__completed_59467b17',
    base__locked: 'MissionNumber_base__locked_59467b17',
    base__disabled: 'MissionNumber_base__disabled_59467b17',
    base__default: 'MissionNumber_base__default_54b91be4',
    line: 'MissionNumber_line_5eb3c137',
    content: 'MissionNumber_content_1ea67e25',
    base__active: 'MissionNumber_base__active_59467b17',
    counter: 'MissionNumber_counter_f5c2eef',
    currentValue: 'MissionNumber_currentValue_7d6b8a24',
    mission: 'MissionNumber_mission_9ce6f188',
    subtitle: 'MissionNumber_subtitle_f0005ad0',
};
function pa({ cardType: e, missionStatus: s, currentMissionNumber: a, maxMissions: t, className: i }) {
    return _.jsxs('div', {
        className: u(ua.base, ua[`base__${s}`], ua[`base__${e}`], i),
        children: [
            _.jsx('div', { className: ua.line }),
            _.jsx(ma, {
                children: _.jsx('div', {
                    className: ua.content,
                    children: (() => {
                        switch (e) {
                            case is.default:
                                return _.jsx(V, {
                                    className: ua.counter,
                                    path: 'personal_missions_30.main.mission.counter',
                                    params: {
                                        maxValue: t,
                                        currentValue: _.jsx('div', {
                                            className: u(ua.currentValue, a === t && ua.currentValue__done),
                                            children: a,
                                        }),
                                    },
                                });
                            case is.missions:
                                return _.jsxs(_.Fragment, {
                                    children: [
                                        _.jsx('div', { className: ua.mission, children: a }),
                                        s === ia.ACTIVE &&
                                            _.jsx('div', {
                                                className: ua.subtitle,
                                                children: _.jsx(V, {
                                                    path: 'personal_missions_30.main.mission.subtitle',
                                                }),
                                            }),
                                    ],
                                });
                            default:
                                console.error('Unexpected card type inside missions number');
                        }
                    })(),
                }),
            }),
        ],
    });
}
const ga = {
    base: 'VehiclesProgress_d2b4bea6',
    container: 'VehiclesProgress_container_3dc9329c',
    done: 'VehiclesProgress_done_db1d3990',
    vehicle: 'VehiclesProgress_vehicle_3344a8a1',
    done__visible: 'VehiclesProgress_done__visible_b31330f7',
};
function fa({ currentProgress: e, maxProgress: s, className: a, ...t }) {
    return _.jsx('div', {
        ...t,
        className: u(ga.base, a),
        children: Y(s, (s) =>
            _.jsxs(
                'div',
                {
                    className: ga.container,
                    children: [
                        _.jsx(w, {
                            className: ga.vehicle,
                            path: 'personal_missions_30.common.card.vehicle',
                            width: '64rem',
                            height: '64rem',
                        }),
                        _.jsx(w, {
                            className: u(ga.done, s < e && ga.done__visible),
                            path: 'personal_missions_30.common.card.done',
                            width: '64rem',
                            height: '64rem',
                        }),
                    ],
                },
                s,
            ),
        ),
    });
}
const ba = 'Progress_431da46b',
    ha = 'Progress_separator_5e9f0d5b',
    Ia = 'Progress_line_6fc99c5a',
    Na = 'Progress_icon_14b45aa1',
    va = 'Progress_bab84485';
function xa({ cardIndex: e, cardType: s, currentProgressValue: a, maxProgressValue: t, className: i }) {
    const n = O.resolve('views'),
        { breakpoint: o } = z(),
        r = Re(o.weight, G.medium) && s === is.default,
        l = q({
            contentId: n.read((e) => e.mono.personal_missions_30.tooltips.mission_progress_tooltip('resId')),
            args: { missionIndex: e },
        });
    return _.jsxs('div', {
        className: u(ba, i),
        children: [
            !r &&
                _.jsxs('div', {
                    className: ha,
                    children: [
                        _.jsx('div', { className: Ia }),
                        _.jsx(w, {
                            className: Na,
                            path: 'personal_missions_30.common.card.done_separator',
                            width: '16rem',
                            height: '17rem',
                        }),
                        _.jsx('div', { className: Ia }),
                    ],
                }),
            _.jsx(fa, { ...l, currentProgress: a, maxProgress: t, className: va }),
        ],
    });
}
const Ea = (e, s) => window.getComputedStyle(e, null).getPropertyValue(s),
    ya = (e, s, a) => {
        const t = a.getContext('2d'),
            i = Array.from(e).length;
        if (!t || 0 === i) return 0;
        t.font = ((e) => {
            const s = Ea(e, 'font-weight'),
                a = Ea(e, 'font-size'),
                t = Ea(e, 'font-family');
            return `${s} ${K(parseFloat(a))}px ${t}`;
        })(s);
        const n = t.measureText(e),
            o = ((e) => {
                const s = Ea(e, 'letter-spacing'),
                    [a] = s.match(/[a-z%]+$/);
                return 'em' === a ? parseFloat(Ea(e, 'font-size')) * parseFloat(s) : parseFloat(s);
            })(s);
        return Math.ceil(n.width + (i - 1) * K(o));
    },
    Sa = (e) => {
        if (e.start >= e.end - 1) return e.start;
        const s = Math.floor((e.start + e.end) / 2),
            a = e.words.slice(0, s).join(' '),
            t = Math.ceil(ya(a, e.element, e.canvas) / e.element.getBoundingClientRect().width);
        return Sa(t <= 1 ? { ...e, start: s } : { ...e, end: s });
    },
    Oa = 'MultilineOverflow_ec9f8e47',
    Ca = 'MultilineOverflow_base__truncated_f602d646',
    wa = 'MultilineOverflow_text_b39629e',
    ja = 'MultilineOverflow_truncatedContent_b0ee4004',
    Aa = 'MultilineOverflow_singleLine_c231496e',
    Ma = 'MultilineOverflow_line_ffcfe2ce',
    Da = r.forwardRef(function (
        { text: e, lines: s, className: a, onChange: t, split: i, simpleTooltipParams: n, ...o },
        l,
    ) {
        const c = C(
                Te.CUSTOM_SIMPLE,
                r.useMemo(
                    () => ({
                        ...n,
                        resId: O.resolve('views').read((e) =>
                            e.mono.personal_missions_30.tooltips.param_tooltip('resId'),
                        ),
                    }),
                    [n],
                ),
            ),
            d = r.useRef(null),
            m = r.useRef(null),
            [p, g] = r.useState(!1),
            [f, b] = r.useState([]),
            [h, I] = r.useState(0),
            N = X(),
            v = r.useMemo(() => document.createElement('canvas'), []),
            x = r.useCallback(() => (m.current ? m.current.getBoundingClientRect().height : 0), []),
            E = r.useCallback(
                (e) => {
                    const s = x();
                    return e && s ? Math.round(e.scrollHeight / s) : 0;
                },
                [x],
            );
        const y = r.useCallback(() => {
                if (E(d.current) <= s) return g(!1);
                g(!0);
                const a = e.split(' '),
                    t = Array.from(new Array(s)).reduce((e, t, i) => {
                        if (!d.current) return e;
                        const n = e.reduce((e, s) => e + s.length, 0),
                            o = a.slice(n);
                        if (i === s - 1) return (e.push(o), e);
                        const r = Sa({ start: 0, end: o.length, words: o, element: d.current, canvas: v });
                        return (e.push(o.slice(0, r)), e);
                    }, []);
                b(t);
            }, [v, E, s, e]),
            S = r.useCallback(() => {
                N.run(() => {
                    (I(x() * s), y());
                });
            }, [x, s, N, y]);
        return (
            r.useEffect(S, [S]),
            Z(S, [S]),
            r.useEffect(() => {
                null == t || t(p);
            }, [t, p]),
            _.jsxs('div', {
                ...o,
                ref: l,
                className: u(Oa, a, p && Ca),
                onMouseEnter: function (e) {
                    var s;
                    (null == (s = o.onMouseEnter) || s.call(o, e), p && c.onMouseEnter(e));
                },
                onClick: function (e) {
                    var s;
                    (null == (s = o.onClick) || s.call(o, e), p && c.onClick());
                },
                onMouseLeave: function (e) {
                    var s;
                    (null == (s = o.onMouseLeave) || s.call(o, e), p && c.onMouseLeave());
                },
                children: [
                    _.jsx('div', {
                        ref: d,
                        className: wa,
                        style: { maxHeight: `${J(h)}rem` },
                        children: _.jsx(A, { text: e, split: i }),
                    }),
                    _.jsx('div', {
                        className: ja,
                        children: f.map((e, s) => _.jsx('div', { className: Ma, children: e.join(' ') }, s)),
                    }),
                    _.jsx('div', { ref: m, className: Aa, children: R.strings.common.common.dot() }),
                ],
            })
        );
    }),
    Ta = 64,
    Pa = 90,
    La = 128,
    Ra = {
        [is.default]: {
            [G.extraSmall]: { double: 2, doubleRequired: 1, single: 5 },
            [G.small]: { double: 2, doubleRequired: 1, single: 5 },
            [G.medium]: { double: 3, doubleRequired: 3, single: 8 },
            [G.large]: { double: 3, doubleRequired: 3, single: 8 },
            [G.extraLarge]: { double: 3, doubleRequired: 3, single: 9 },
        },
        [is.missions]: {
            [G.extraSmall]: { double: 4, doubleRequired: 3, single: 8 },
            [G.small]: { double: 4, doubleRequired: 3, single: 8 },
            [G.medium]: { double: 5, doubleRequired: 4, single: 10 },
            [G.large]: { double: 5, doubleRequired: 4, single: 10 },
            [G.extraLarge]: { double: 5, doubleRequired: 4, single: 10 },
        },
    };
function ka(e, s, a) {
    return s ? a.single : e ? a.doubleRequired : a.double;
}
const Va = {
    base: 'Quest_555c39f7',
    image: 'Quest_image_83f034ec',
    base__missions: 'Quest_base__missions_3236e985',
    wrapper: 'Quest_wrapper_2200f7dd',
    title: 'Quest_title_e8e4a50f',
    quest: 'Quest_a31e9bfc',
};
function Ba({
    cardType: e,
    quest: { questCondition: s, summary: a, questType: t },
    singleQuest: i,
    allQuestsRequired: n,
    className: o,
}) {
    const { breakpoint: l } = z(),
        c = (function (e, s) {
            return Ra[e][s];
        })(e, l.name),
        d = e === is.missions,
        m = r.useMemo(() => ({ header: a, body: s }), [s, a]);
    return _.jsxs('div', {
        className: u(Va.base, Va[`base__${e}`], o),
        children: [
            _.jsx(w, {
                className: Va.image,
                path: d
                    ? `personal_missions_30.quest_type.c_128x128.icon_battle_condition_${t}`
                    : `personal_missions_30.quest_type.c_64x64.icon_battle_condition_${t}`,
                width: d ? La : Ta,
                height: d ? La : Ta,
                adaptive: {
                    medium: {
                        width: d ? La : Pa,
                        height: d ? La : Pa,
                        path: d
                            ? `personal_missions_30.quest_type.c_128x128.icon_battle_condition_${t}`
                            : `personal_missions_30.quest_type.c_90x90.icon_battle_condition_${t}`,
                    },
                },
            }),
            _.jsxs('div', {
                className: Va.wrapper,
                children: [
                    _.jsx('div', { className: Va.title, children: a }),
                    _.jsx(Da, { split: !0, text: s, className: Va.quest, simpleTooltipParams: m, lines: ka(!n, i, c) }),
                ],
            }),
        ],
    });
}
const Ha = {
    base: 'QuestSeparator_43fba5a4',
    dots: 'QuestSeparator_dots_e1abf39e',
    arrow: 'QuestSeparator_arrow_9ef069fe',
    text: 'QuestSeparator_text_a5a5c2eb',
};
function $a({ className: e }) {
    return _.jsxs('div', {
        className: u(Ha.base, e),
        children: [
            _.jsx(w, { path: 'personal_missions_30.common.card.dots', width: '48rem', height: '4rem' }),
            _.jsx(w, { path: 'personal_missions_30.common.card.arrow', width: '16rem', height: '16rem' }),
            _.jsx(V, { className: Ha.text, path: 'personal_missions_30.main.mission.mission.quest.separator' }),
            _.jsx(w, {
                className: Ha.arrow,
                path: 'personal_missions_30.common.card.arrow',
                width: '16rem',
                height: '16rem',
            }),
            _.jsx(w, {
                className: Ha.dots,
                path: 'personal_missions_30.common.card.dots',
                width: '48rem',
                height: '4rem',
            }),
        ],
    });
}
const Qa = {
    base: 'Quests_36d28d52',
    quest: 'Quests_quest_55d2c50',
    base__missions: 'Quests_base__missions_f09ce410',
    base__default: 'Quests_base__default_f09ce410',
    questSeparator: 'Quests_questSeparator_622bda04',
};
function Wa({ cardType: e, mission: { allQuestsRequired: s, quests: a }, className: t }) {
    return _.jsx('div', {
        className: u(Qa.base, Qa[`base__${e}`], t),
        children: a.map((t, i) =>
            _.jsxs(
                p.Fragment,
                {
                    children: [
                        !s && i > 0 && _.jsx($a, { className: Qa.questSeparator }),
                        _.jsx(Ba, {
                            quest: t,
                            cardType: e,
                            singleQuest: 1 === a.length,
                            allQuestsRequired: s,
                            className: Qa.quest,
                        }),
                    ],
                },
                t.id,
            ),
        ),
    });
}
const Ua = { base: 'Rewards_1a8854f', reward: 'Rewards_reward_28325b8d', base__big: 'Rewards_base__big_405577a5' };
function qa({ rewards: e, imageSize: s = se.Small, className: a }) {
    return _.jsx('div', {
        className: u(Ua.base, Ua[`base__${s}`], a),
        children: e.map((e, a) => _.jsx('div', { className: Ua.reward, children: _.jsx(ee, { ...ke(e, s) }) }, a)),
    });
}
const Fa = {
    base: 'Disabled_e625fb0e',
    text: 'Disabled_text_291ac5b3',
    base__missions: 'Disabled_base__missions_3cd47f61',
};
function Ya({ cardType: e = is.default }) {
    const s = O.resolve('strings');
    return _.jsxs('div', {
        className: u(Fa.base, Fa[`base__${e}`]),
        children: [
            _.jsx(w, { path: 'personal_missions_30.common.card.alert', width: '48rem', height: '48rem' }),
            _.jsx('div', {
                className: Fa.text,
                children: s.readOrEmpty('personal_missions_30.main.mission.text.alert'),
            }),
        ],
    });
}
const za = {
    card: 'MissionsCard_card_397fd5a8',
    base: 'MissionsCard_87d065e9',
    base__active: 'MissionsCard_base__active_612e59cb',
    content: 'MissionsCard_content_46af9d6e',
    cardComponent: 'MissionsCard_cardComponent_3763b817',
    cardWrapper: 'MissionsCard_cardWrapper_84ee73ce',
    innerContent: 'MissionsCard_innerContent_76ce27e2',
    footer: 'MissionsCard_footer_c7257096',
    quests: 'MissionsCard_quests_c9799910',
    base__completed: 'MissionsCard_base__completed_d27920a2',
    base__locked: 'MissionsCard_base__locked_d27920a2',
    progress: 'MissionsCard_progress_7096a356',
    separator: 'MissionsCard_separator_de243fda',
    rewards: 'MissionsCard_rewards_6f552e92',
    lockedIcon: 'MissionsCard_lockedIcon_d27920a2',
    tooltipZone: 'MissionsCard_tooltipZone_fe1364a1',
    brightLine: 'MissionsCard_brightLine_2caf52b8',
    shadowLine: 'MissionsCard_shadowLine_32ae564b',
    missionNumber: 'MissionsCard_missionNumber_1408b413',
};
function Ga(e) {
    return e === ia.COMPLETED ? ae.done : e === ia.LOCKED ? ae.locked : void 0;
}
const Ka = r.memo(
        r.forwardRef(function ({ index: e, mission: s }, a) {
            const t = O.resolve('strings'),
                i = s.missionStatus === ia.ACTIVE,
                n = s.missionStatus === ia.ACTIVE ? se.Big : se.Small,
                o = s.missionStatus === ia.LOCKED || s.missionStatus === ia.DISABLED,
                l = C(
                    Te.CUSTOM_SIMPLE,
                    r.useMemo(
                        () => ({
                            body: t.readOrEmpty(
                                `personal_missions_30.main.missions.card.tooltip.${s.missionStatus === ia.COMPLETED ? ae.done : ae.locked}`,
                            ),
                            resId: O.resolve('views').read((e) =>
                                e.mono.personal_missions_30.tooltips.param_tooltip('resId'),
                            ),
                        }),
                        [s.missionStatus, t],
                    ),
                );
            return _.jsxs('div', {
                ref: te([a]),
                className: u(za.base, za[`base__${s.missionStatus}`]),
                children: [
                    _.jsx(pa, { ...s, cardType: is.missions, className: u(i && za.missionNumber) }),
                    _.jsx(ie, {
                        disableMouse: !0,
                        selected: i,
                        status: Ga(s.missionStatus),
                        disabled: o,
                        className: za.content,
                        classNames: { wrapper: u(!o && za.cardWrapper), card: za.cardComponent },
                        children: _.jsx('div', {
                            className: za.card,
                            children: (() => {
                                switch (s.missionStatus) {
                                    case ia.ACTIVE:
                                    case ia.COMPLETED:
                                    case ia.LOCKED:
                                        return _.jsxs('div', {
                                            className: za.innerContent,
                                            children: [
                                                _.jsx(Wa, { mission: s, className: za.quests, cardType: is.missions }),
                                                _.jsxs('div', {
                                                    className: za.footer,
                                                    children: [
                                                        s.maxProgressValue > 1 &&
                                                            _.jsx(xa, {
                                                                ...s,
                                                                cardIndex: e,
                                                                cardType: is.missions,
                                                                className: za.progress,
                                                            }),
                                                        _.jsx(Hs, { type: 'withoutAlpha', className: za.separator }),
                                                        _.jsx(qa, {
                                                            rewards: s.rewards,
                                                            imageSize: n,
                                                            className: za.rewards,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        });
                                    case ia.DISABLED:
                                        return _.jsx(Ya, { cardType: is.missions });
                                    default:
                                        console.error(`Unexpected mission status: ${s.missionStatus}`);
                                }
                            })(),
                        }),
                    }),
                    s.missionStatus === ia.LOCKED &&
                        _.jsxs(_.Fragment, {
                            children: [
                                _.jsx('div', { className: za.brightLine }),
                                _.jsx('div', { className: za.shadowLine }),
                                _.jsx(w, {
                                    path: 'personal_missions_30.common.card.status_lock_icon',
                                    className: za.lockedIcon,
                                }),
                            ],
                        }),
                    Ga(s.missionStatus) && _.jsx('div', { className: za.tooltipZone, ...l }),
                ],
            });
        }),
    ),
    Xa = 'DraggingOverlay_599243d';
function Za() {
    const e = X();
    return (ne(() => e.run(oe)), _.jsx('div', { className: Xa }));
}
const Ja = {
        base: 'ScrollableCards_cede7903',
        content: 'ScrollableCards_content_8c53892b',
        scroll: 'ScrollableCards_scroll_dc0445ca',
        button: 'ScrollableCards_button_189502f8',
        button__left: 'ScrollableCards_button__left_3baf8988',
        button__right: 'ScrollableCards_button__right_619f434e',
    },
    et = 'visible',
    st = l(function ({ currentAnimationState: e }) {
        const { model: s } = gs(),
            { model: a } = Zs(),
            { breakpoint: t } = z(),
            i = Re(t.weight, G.medium) ? la : ca,
            n = s.activeOperationId.get(),
            o = a.computes.missionsByCategory(n),
            l = re(o, (e) => e.missionStatus === ia.ACTIVE),
            c = r.useRef([]),
            d = r.useRef(null),
            m = r.useRef(null),
            { api: p } = le(),
            f = X(),
            b = ce(),
            h = de(p, me.horizontal, void 0, { gapBeforeStart: 5 }),
            I = r.useCallback(
                function (e) {
                    const s = p.getWrapperSize(),
                        a = p.animationScroll.scrollPosition.get(),
                        t = c.current[e];
                    if (!t || !s) return;
                    const i = t.offsetLeft - s / 2 + t.offsetWidth / 2;
                    (0 === a && i < 0) || a === i || (b.play('bp_slide'), p.applyScroll(i));
                },
                [p, b],
            );
        (r.useEffect(() => {
            void 0 !== l && e === as && f.run(() => I(l));
        }, [l, I, f, e]),
            r.useEffect(() => {
                if (void 0 === l) return;
                const e = () => {
                    f.run(() => {
                        const e = c.current[l],
                            s = d.current,
                            a = m.current,
                            t = p.getWrapperSize();
                        e &&
                            t &&
                            s &&
                            a &&
                            (p.animationScroll.scrollPosition.get() > e.offsetLeft + e.offsetWidth
                                ? (s.classList.add(et), a.classList.remove(et))
                                : e.offsetLeft > p.animationScroll.scrollPosition.get() + t
                                  ? (a.classList.add(et), s.classList.remove(et))
                                  : (a.classList.remove(et), s.classList.remove(et)));
                    });
                };
                return (
                    p.events.on('change', e),
                    p.events.on('recalculateContent', e),
                    p.events.on('resizeHandled', e),
                    () => {
                        (p.events.off('change', e),
                            p.events.off('recalculateContent', e),
                            p.events.off('resizeHandled', e));
                    }
                );
            }, [l, p, f]));
        const N = r.useCallback((e) => {
                c.current.push(e);
            }, []),
            v = C(
                Te.CUSTOM_SIMPLE,
                r.useMemo(
                    () => ({
                        body: O.resolve('strings').readOrEmpty(
                            'personal_missions_30.main.missions.button.tooltip.toActiveMission',
                        ),
                        resId: O.resolve('views').read((e) =>
                            e.mono.personal_missions_30.tooltips.param_tooltip('resId'),
                        ),
                    }),
                    [],
                ),
            );
        function x() {
            (void 0 !== l && I(l), b.play('carouselButton'), v.onClick());
        }
        function E(e) {
            (b.play('mouse-enter'), v.onMouseEnter(e));
        }
        return _.jsxs('div', {
            className: Ja.base,
            children: [
                _.jsx(_e, {
                    areaClassName: Ja.scroll,
                    children: _.jsx('div', {
                        className: Ja.content,
                        children: o.map((e, s) => _.jsx(Ka, { mission: e, index: s, ref: N }, e.currentMissionNumber)),
                    }),
                }),
                void 0 !== l &&
                    _.jsxs(_.Fragment, {
                        children: [
                            _.jsx(da, {
                                silent: !0,
                                ...v,
                                ref: d,
                                size: i,
                                arrowDirection: 'left',
                                onClick: x,
                                onMouseEnter: E,
                                className: u(Ja.button, Ja.button__left, Ja.button__hidden),
                            }),
                            _.jsx(da, {
                                silent: !0,
                                ...v,
                                size: i,
                                ref: m,
                                arrowDirection: 'right',
                                onClick: x,
                                onMouseEnter: E,
                                className: u(Ja.button, Ja.button__right, Ja.button__hidden),
                            }),
                        ],
                    }),
                g.createPortal('dragging' === h.type && _.jsx(Za, {}), document.body),
            ],
        });
    }),
    at = 'Missions_aa7824d8',
    tt = 'Missions_tabs_41232459',
    it = 'Missions_tabs__disabled_44072e35',
    nt = 'Missions_category_a34a8a14',
    ot = 'Missions_separator_cf7f866c',
    rt = { opacity: 1, transform: 'translateY(0rem)' },
    lt = { opacity: 0, transform: 'translateY(-20rem)' },
    ct = l(function () {
        const { controls: e } = gs(),
            { model: s } = Zs(),
            { breakpoint: a } = z(),
            t = Re(a.weight, G.large),
            { animationInProgress: i } = hs(),
            n = c(ts, (e) => e.value),
            [o, l] = d(() => ({ from: { opacity: 0 } })),
            [p, g] = d(() => ({ from: { opacity: 0 } })),
            [f, b] = d(() => ({ from: { opacity: 0, transform: 'translateY(-20rem)' } })),
            [h, I] = d(() => ({ from: { opacity: 0, transform: 'translateY(20rem)' } }));
        return (
            S(() => {
                l.start({
                    opacity: 1,
                    config: { duration: 300, easing: y.easeOutCubic },
                    onRest: () => {
                        ls(
                            [
                                b.start({ ...rt, config: { duration: 300, easing: y.easeOutQuart } }),
                                I.start({ ...rt, config: { duration: 300, easing: y.easeOutQuart } }),
                                g.start({ opacity: 1, config: { duration: 400, easing: y.easeOutQuart } }),
                            ],
                            () => {
                                (ts.send({ type: 'TO_IDLE' }), e.updateAnimationState(He.IDLE));
                            },
                        );
                    },
                });
            }),
            T(x.ESCAPE, () => {
                i || e.goBack();
            }),
            r.useEffect(() => {
                n === Fe &&
                    l.start({
                        opacity: 0,
                        config: { duration: 200 },
                        onRest: () => {
                            (ts.send({ type: 'HIDE_MISSIONS_DONE' }), e.setCurrentState(_s));
                        },
                    });
            }, [e, n, l]),
            _.jsxs(m.div, {
                style: o,
                className: at,
                children: [
                    _.jsx(F, {
                        active: s.missionsCategory.get(),
                        theme: pe.primary,
                        size: t ? ue.small : ue.large,
                        onActiveChange: (s) => {
                            var a;
                            ((a = () => {
                                e.changeCategory(s);
                            }),
                                i ||
                                    (ts.send({ type: 'SWITCH_MISSIONS' }),
                                    e.updateAnimationState(He.ANIMATION_STARTED),
                                    I.start({
                                        opacity: 0,
                                        transform: 'translateY(20rem)',
                                        config: { duration: 400, easing: y.easeInQuart },
                                    }),
                                    b.start({
                                        ...lt,
                                        config: { duration: 400, easing: y.easeInQuart },
                                        onRest: () => {
                                            (a(),
                                                b.start({
                                                    ...rt,
                                                    config: { duration: 500, easing: y.easeOutQuart },
                                                    delay: 300,
                                                }),
                                                I.start({
                                                    ...rt,
                                                    config: { duration: 500, easing: y.easeOutQuart },
                                                    delay: 300,
                                                    onRest: () => ts.send({ type: 'TO_IDLE' }),
                                                }));
                                        },
                                    }),
                                    ls(
                                        [
                                            I.start({
                                                opacity: 0,
                                                transform: 'translateY(20rem)',
                                                config: { duration: 400, easing: y.easeInQuart },
                                            }),
                                            b.start({ ...lt, config: { duration: 400, easing: y.easeInQuart } }),
                                        ],
                                        () => {
                                            (a(),
                                                ls(
                                                    [
                                                        b.start({
                                                            ...rt,
                                                            config: { duration: 500, easing: y.easeOutQuart },
                                                            delay: 300,
                                                        }),
                                                        I.start({
                                                            ...rt,
                                                            config: { duration: 500, easing: y.easeOutQuart },
                                                            delay: 300,
                                                        }),
                                                    ],
                                                    () => {
                                                        (ts.send({ type: 'TO_IDLE' }), e.updateAnimationState(He.IDLE));
                                                    },
                                                ));
                                        },
                                    )));
                        },
                        children: _.jsx(m.div, {
                            style: p,
                            children: _.jsx(F.Switcher, {
                                className: u(tt, i && it),
                                children: Gs.map(({ id: e, label: s }) => _.jsx(ta, { id: e, label: s }, e)),
                            }),
                        }),
                    }),
                    _.jsxs(m.div, {
                        style: f,
                        children: [_.jsx(aa, { className: nt }), _.jsx(Hs, { type: 'withoutAlpha', className: ot })],
                    }),
                    _.jsx(m.div, {
                        style: h,
                        children: _.jsx(ge, { settings: us, children: _.jsx(st, { currentAnimationState: n }) }),
                    }),
                ],
            })
        );
    });
var dt = ((e) => ((e.DAILY = 'daily'), (e.WEEKLY = 'weekly'), e))(dt || {}),
    _t = ((e) => (
        (e.DONE = 'done'),
        (e.IN_PROGRESS = 'inProgress'),
        (e.NOT_RECEIVED = 'notReceived'),
        (e.DEFAULT = 'default'),
        e
    ))(_t || {}),
    mt = ((e) => ((e.MAIN = 'main'), (e.OPERATION = 'operation'), (e.CAMPAIGN = 'campaign'), e))(mt || {}),
    ut = ((e) => (
        (e.CAMPAIGN_FINISHED = 'campaignFinished'),
        (e.NOT_ALL_COMPLETED = 'notAllCompleted'),
        (e.NOT_ALL_COMPLETED_WITH_HONOR = 'notAllCompletedWithHonor'),
        (e.PAUSED = 'paused'),
        (e.NEXT_OPERATION_AVAILABLE = 'nextOperationAvailable'),
        (e.COMPLETED = 'completed'),
        (e.PRECEDING_OPERATION_NOT_COMPLETED = 'precedingOperationNotCompleted'),
        (e.REQUIRES_VEHICLE = 'requiresVehicle'),
        (e.VEHICLE_IS_IN_BATTLE = 'vehicleIsInBattle'),
        (e.ACTIVE = 'active'),
        (e.AVAILABLE = 'available'),
        e
    ))(ut || {});
function pt(e) {
    return Y(e, (e) => ({
        id: `quest_${e}`,
        questType: 'damage',
        questCondition: 'Kill 10 000 vehicles',
        summary: 'Kill them all',
    }));
}
(mt.MAIN,
    mt.OPERATION,
    mt.CAMPAIGN,
    _t.DONE,
    _t.DONE,
    _t.DONE,
    _t.DONE,
    _t.DONE,
    _t.DONE,
    _t.DONE,
    _t.DONE,
    _t.NOT_RECEIVED,
    _t.NOT_RECEIVED,
    _t.IN_PROGRESS,
    _t.DEFAULT,
    _t.DEFAULT,
    _t.DEFAULT,
    _t.DEFAULT);
const gt = [
    { name: 'style_3d' },
    { name: 'premium_universal' },
    { name: 'camouflage' },
    { name: 'credits', value: '250 000' },
];
(ia.ACTIVE, Pe.ASSAULT, pt(2), ia.ACTIVE, Pe.SNIPER, pt(2), ia.ACTIVE, Pe.SUPPORT, pt(2), dt.DAILY, dt.WEEKLY);
(Le.ACTIVE,
    Le.AVAILABLE,
    Le.UNAVAILABLE,
    Le.COMPLETED,
    Le.AVAILABLE,
    Le.COMPLETED_WITH_HONORS,
    ut.AVAILABLE,
    Be.ASSEMBLING);
const ft = (e) =>
        e < ht.completedMissions
            ? { status: ia.COMPLETED, currentProgressValue: 4 }
            : e === ht.completedMissions
              ? { status: ia.ACTIVE, currentProgressValue: 2 }
              : e === ht.completedMissions + 1
                ? { status: ia.DISABLED, currentProgressValue: 0 }
                : { status: ia.LOCKED, currentProgressValue: 0 },
    bt = [
        { name: 'style_3d' },
        { name: 'premium_universal' },
        { name: 'camouflage' },
        { name: 'credits', value: '250 000' },
    ],
    ht = { maximumMissions: 15, completedMissions: 3, maxProgressValue: 4 },
    It = Y(ht.maximumMissions, (e) => ({
        missionStatus: ft(e + 1).status,
        currentMissionNumber: e + 1,
        allQuestsRequired: fe(),
        currentProgressValue: ft(e + 1).currentProgressValue,
        maxProgressValue: ht.maxProgressValue,
        rewards: bt,
        quests: pt(be(1, 2)),
    })),
    Nt = {
        getter: he({
            missionsModel: {
                allMissions: [
                    {
                        operationId: 8,
                        operationName: 'Perfect strike',
                        minRequiredVehicle: 6,
                        maxRequiredVehicle: 10,
                        missionsCategorizations: [
                            { missionsCategory: Pe.ASSAULT, missions: It },
                            { missionsCategory: Pe.SNIPER, missions: It },
                            { missionsCategory: Pe.SUPPORT, missions: It },
                        ],
                    },
                    {
                        operationId: 9,
                        operationName: 'Perfect strike',
                        minRequiredVehicle: 6,
                        maxRequiredVehicle: 10,
                        missionsCategorizations: [
                            { missionsCategory: Pe.ASSAULT, missions: It },
                            { missionsCategory: Pe.SNIPER, missions: It },
                            { missionsCategory: Pe.SUPPORT, missions: It },
                        ],
                    },
                    {
                        operationId: 10,
                        operationName: 'Perfect strike',
                        minRequiredVehicle: 6,
                        maxRequiredVehicle: 10,
                        missionsCategorizations: [
                            { missionsCategory: Pe.ASSAULT, missions: It },
                            { missionsCategory: Pe.SNIPER, missions: It },
                            { missionsCategory: Pe.SUPPORT, missions: It },
                        ],
                    },
                ],
                missionsCategory: Pe.ASSAULT,
            },
        }),
        controls: () => L,
    },
    vt = { context: 'model.missionsModel' };
function xt() {
    return _.jsx(Xs, { options: vt, mocks: Nt, mode: 'real', children: _.jsx(ct, {}) });
}
const Et = 'Background_af83c19a',
    yt = 'Background_6cd490f5',
    St = 'Background_noise_c5b84c8b';
function Ot({ className: e }) {
    return _.jsxs('div', {
        className: u(Et, e),
        children: [_.jsx('div', { className: yt }), _.jsx('div', { className: St })],
    });
}
const Ct = { rewardWidth: 296, detailWidth: 380 },
    wt = { rewardWidth: 248, detailWidth: 260 },
    jt = 'done',
    At = 'inProgress';
const Mt = new Set([Le.COMPLETED, Le.COMPLETED_WITH_HONORS]),
    Dt = 'ProgressBar_13ab2776',
    Tt = 'ProgressBar_progressBar_f19231cf',
    Pt = 'ProgressBar_progressBackground_129fd0d3',
    Lt = p.memo(function (e) {
        const s = C(
            Te.PROGRESSION,
            r.useMemo(
                () => ({
                    resId: O.resolve('views').read((e) => e.mono.personal_missions_30.tooltips.param_tooltip('resId')),
                }),
                [],
            ),
        );
        return _.jsx('div', {
            className: Dt,
            ...s,
            children: _.jsx(Ie, {
                size: 'medium',
                value: e.value,
                maxValue: e.maxValue,
                className: Tt,
                classNames: { background: Pt },
                children: _.jsx(Ne, { initValue: e.prevValue, initMaxValue: e.maxValue }),
            }),
        });
    }),
    Rt = 'Divider_657ed92',
    kt = 'Divider_separator_5e4040d8',
    Vt = 'Divider_base__completed_76b1f722',
    Bt = 'Divider_point_cccdd49a';
function Ht({ operationState: e, maxPoint: s, className: a }) {
    const t = Mt.has(e);
    return _.jsxs('div', {
        className: u(Rt, t && Vt, a),
        children: [_.jsx('div', { className: kt }), !t && _.jsx('div', { className: Bt, children: s })],
    });
}
const $t = {
    border: 'ContentWrapper_border_e0f7c2c',
    border__bottom: 'ContentWrapper_border__bottom_e728cfac',
    border__top: 'ContentWrapper_border__top_89652dc7',
};
function Qt({ children: e }) {
    return _.jsxs(_.Fragment, {
        children: [
            _.jsx(Hs, { className: u($t.border, $t.border__top) }),
            e,
            _.jsx(Hs, { className: u($t.border, $t.border__bottom) }),
        ],
    });
}
const Wt = 'InProgress_status_a90e1754',
    Ut = 'InProgress_point_12655571';
function qt({ earnedPoint: e, id: s, maxPoint: a }) {
    const t = O.resolve('strings'),
        i = C(
            Te.PM3_POINTS,
            r.useMemo(
                () => ({
                    resId: O.resolve('views').read((e) => e.mono.personal_missions_30.tooltips.param_tooltip('resId')),
                }),
                [],
            ),
        );
    return _.jsx(Qt, {
        children: _.jsx(V, {
            ...i,
            className: Wt,
            path: 'personal_missions_30.main.progression.detail.status.active',
            params: {
                icon: _.jsx(w, {
                    path: 'personal_missions_30.points.c_24x24',
                    width: '24rem',
                    height: '24rem',
                    className: Ut,
                }),
                detailName: t.readOrEmpty(`personal_missions_30.detail.name.${s}`),
                earnedPoint: e,
                maxPoint: a,
            },
        }),
    });
}
const Ft = 'NotReceived_wrapper_4d14069c',
    Yt = 'NotReceived_button_75c05936',
    zt = 'NotReceived_buttonContent_bee7d2fd',
    Gt = 'NotReceived_glareAttention_c2d53c79',
    Kt = l(function ({ firstElementByStatus: e, id: s, onClaim: a }) {
        const { controls: t } = gs(),
            i = O.resolve('strings'),
            { animationInProgress: n } = hs(),
            o = C(
                Te.CUSTOM_SIMPLE,
                r.useMemo(
                    () => ({
                        body: i.readOrEmpty(
                            'personal_missions_30.main.progression.mountButton.' + (e ? 'active' : 'disable'),
                        ),
                        resId: O.resolve('views').read((e) =>
                            e.mono.personal_missions_30.tooltips.param_tooltip('resId'),
                        ),
                    }),
                    [e, i],
                ),
            ),
            [l, c] = d(() => ({
                from: { transform: 'translate(10%, -220%) rotate(30deg)' },
                to: { transform: 'translate(-60%, 30%) rotate(30deg)' },
                loop: !0,
                delay: 3e3,
                config: { duration: 1e3, easing: y.easeOutCirc },
            }));
        return _.jsx(Qt, {
            children: _.jsxs('div', {
                className: Ft,
                children: [
                    _.jsx(j, {
                        disabled: !e,
                        theme: 'primary',
                        size: 'small',
                        className: Yt,
                        classNames: { content: zt },
                        ...o,
                        onClick: function () {
                            (o.onClick(), n || a(s));
                        },
                        children: i.readOrEmpty('personal_missions_30.main.progression.button'),
                    }),
                    e && _.jsx(m.div, { style: l, className: Gt }),
                ],
            }),
        });
    }),
    Xt = {
        base: 'Detail_391b711d',
        content: 'Detail_content_f72ba27c',
        wrapper: 'Detail_wrapper_959320e3',
        wrapper__disabled: 'Detail_wrapper__disabled_e5d2da51',
        detail: 'Detail_8ad33d22',
        base__done: 'Detail_base__done_cdd8039b',
        preview: 'Detail_preview_127f6ca4',
        arrow: 'Detail_arrow_c9c63ca8',
        base__selected: 'Detail_base__selected_cdd8039b',
        base__firstNotReceived: 'Detail_base__firstNotReceived_cdd8039b',
        base__inProgress: 'Detail_base__inProgress_cdd8039b',
        base__notReceived: 'Detail_base__notReceived_cdd8039b',
        base__completed: 'Detail_base__completed_cdd8039b',
        base__completedWithHonors: 'Detail_base__completedWithHonors_cdd8039b',
        detailNumber: 'Detail_detailNumber_ed4add15',
        detailName: 'Detail_detailName_3e246437',
        base__active: 'Detail_base__active_cdd8039b',
        base__received: 'Detail_base__received_cdd8039b',
        glow: 'Detail_glow_bda41477',
        glowComponent: 'Detail_glowComponent_40426f71',
        background: 'Detail_background_7783be7f',
        base__default: 'Detail_base__default_cdd8039b',
        divider: 'Detail_divider_5b44c41c',
        divider__first: 'Detail_divider__first_4ec4b0e5',
        divider__last: 'Detail_divider__last_4e63ed3b',
        video: 'Detail_video_82d3b729',
    },
    Zt = l(function ({ index: e, detail: s, detailsLength: a, className: t }) {
        const i = O.resolve('strings'),
            n = O.resolve('videos'),
            o = O.resolve('sounds'),
            { model: l, controls: c } = gs(),
            p = l.computes.activeOperation(),
            g = l.currentState.get(),
            f = l.computes.requiredDetailsPoint(),
            [b, h] = r.useState(s),
            I = l.computes.firstDetailIndexByStatus(_t.NOT_RECEIVED) === e,
            N = l.activeDetailId.get(),
            v = b.status === _t.DONE,
            x = N === b.id,
            { animationInProgress: E } = hs(),
            y = C(
                Te.CUSTOM_SIMPLE,
                r.useMemo(
                    () => ({
                        body: O.resolve('strings').readOrEmpty(
                            'personal_missions_30.main.progression.tooltip.detail.notDone',
                        ),
                        split: !1,
                        resId: O.resolve('views').read((e) =>
                            e.mono.personal_missions_30.tooltips.param_tooltip('resId'),
                        ),
                    }),
                    [],
                ),
            ),
            [S, j] = d(() => ({ from: { opacity: 1 }, config: { duration: 200 } }));
        function A(e, s) {
            (g === _s && (l.activeDetailId.set(s), ts.send({ type: 'TO_DETAIL_INFO', detailId: s, action: e })),
                g === ds &&
                    ('' === N
                        ? (e === os && (l.activeDetailId.set(s), c.showDetailInfo(s)),
                          e === ns && ts.send({ type: 'HIDE_DETAIL_INFO', detailId: s, action: e }))
                        : ts.send({ type: 'HIDE_DETAIL_INFO', detailId: s, action: e })));
        }
        function M(e) {
            (y.onClick(),
                x ||
                    E ||
                    (v && (o.play('yes1'), A(os, e)), I && (c.updateAnimationState(He.ANIMATION_STARTED), A(ns, e))));
        }
        if (
            (r.useEffect(() => {
                b.status !== s.status
                    ? j.start({
                          opacity: 0,
                          onRest: () => {
                              (h({ ...s }), j.start({ opacity: 1, delay: 150 }));
                          },
                      })
                    : b.earnedPoint !== s.earnedPoint && h({ ...s });
            }, [j, s, b.status, b.earnedPoint]),
            p && f)
        )
            return _.jsxs('div', {
                'data-name': 'Detail',
                className: u(
                    Xt.base,
                    Xt[`base__${b.status}`],
                    Xt[`base__${p.operationState}`],
                    x && v && Xt.base__selected,
                    I && Xt.base__firstNotReceived,
                    t,
                ),
                children: [
                    0 === e &&
                        _.jsx(Ht, {
                            maxPoint: 0,
                            operationState: p.operationState,
                            className: u(Xt.divider, Xt.divider__first),
                        }),
                    _.jsx('div', { className: Xt.background }),
                    _.jsx('div', { className: Xt.glow }),
                    _.jsx(m.div, {
                        style: S,
                        className: Xt.wrapper,
                        children:
                            I &&
                            _.jsx(ve, {
                                src: n.readOrEmpty('personal_missions_30.main.detail_glow'),
                                className: Xt.video,
                                loop: !0,
                                autoplay: !0,
                            }),
                    }),
                    _.jsxs('div', {
                        className: Xt.content,
                        children: [
                            _.jsx('div', {
                                className: Xt.detailName,
                                children: i.readOrEmpty(`personal_missions_30.detail.name.${b.id}`),
                            }),
                            _.jsx(w, {
                                path: `personal_missions_30.vehicle_detail.c_400x150.${b.id}`,
                                className: Xt.detail,
                                ...(!x && !v && y),
                                onClick: () => M(b.id),
                                onMouseEnter: function (e) {
                                    (!x && !v && y.onMouseEnter(e), ((v && !x) || I) && o.play('bp_improved_reward'));
                                },
                            }),
                            _.jsx(w, { path: 'personal_missions_30.main.progression.arrow', className: Xt.arrow }),
                            _.jsx(w, {
                                path: 'personal_missions_30.main.progression.preview_icon',
                                className: Xt.preview,
                            }),
                            _.jsx(m.div, {
                                style: S,
                                className: u(Xt.wrapper, b.status === _t.DONE && Xt.wrapper__disabled),
                                children: (() => {
                                    switch (b.status) {
                                        case _t.IN_PROGRESS:
                                            return _.jsx(qt, { ...b });
                                        case _t.NOT_RECEIVED:
                                            return _.jsx(Kt, { id: b.id, firstElementByStatus: I, onClaim: M });
                                    }
                                })(),
                            }),
                            _.jsx(V, {
                                path: 'personal_missions_30.main.progression.detailNumber',
                                className: u(
                                    Xt.detailNumber,
                                    b.status === _t.IN_PROGRESS && Xt.detailNumber__inProgress,
                                ),
                                params: {
                                    number: String(e + 1).padStart(
                                        2,
                                        i.readOrEmpty('personal_missions_30.main.progression.counter.zero'),
                                    ),
                                },
                            }),
                        ],
                    }),
                    _.jsx(Ht, {
                        maxPoint: f[e],
                        className: u(Xt.divider, e === a - 1 && Xt.divider__last),
                        operationState: p.operationState,
                    }),
                ],
            });
    }),
    Jt = 'Progress_dc1d47d2',
    ei = 'Progress_wrapper_95c599d8';
function si(e, s, a, t = []) {
    const i = t.findIndex((e) => e >= s),
        n = t[i];
    if (0 === s || -1 === i || void 0 === n) return s;
    const o = a[i];
    if (!o) return 0;
    return i * e + ((s - (n - o.maxPoint)) / o.maxPoint) * e;
}
const ai = l(
        r.forwardRef(function ({ className: e }, s) {
            const { model: a } = gs(),
                t = a.computes.activeOperation(),
                i = a.computes.requiredDetailsPoint();
            if (!t) return;
            const { operationId: n, details: o, maxValue: r, value: l, deltaFrom: c, operationState: d } = t,
                m = o.length,
                p = r / m,
                g = si(p, l, o, i),
                f = si(p, c, o, i);
            return _.jsxs('div', {
                className: u(Jt, e),
                ref: s,
                children: [
                    !Mt.has(d) &&
                        _.jsx('div', {
                            className: ei,
                            children: _.jsx(Lt, { value: g, prevValue: f, maxValue: r }, n),
                        }),
                    o.map((e, s) => _.jsx(Zt, { index: s, detail: e, detailsLength: m }, e.id)),
                ],
            });
        }),
    ),
    ti = {
        base: 'AdditionalReward_2db51724',
        title: 'AdditionalReward_title_9b676874',
        items: 'AdditionalReward_items_e9141083',
        reward: 'AdditionalReward_reward_3327de60',
        base__done: 'AdditionalReward_base__done_63ee7343',
        status: 'AdditionalReward_status_fab58014',
        base__inProgress: 'AdditionalReward_base__inProgress_63ee7343',
        base__hidden: 'AdditionalReward_base__hidden_63ee7343',
        bold: 'AdditionalReward_bold_22e4e246',
        icon: 'AdditionalReward_icon_286945a9',
    };
function ii({ reward: { completedTasks: e, items: s, rewardsType: a, tasksNumber: t }, index: i }) {
    const n = O.resolve('strings'),
        o = e === t ? jt : At,
        l = C(
            Te.CUSTOM_SIMPLE,
            r.useMemo(
                () => ({
                    body: n.readOrEmpty(`personal_missions_30.main.progression.tooltip.rewards.${a}`),
                    resId: O.resolve('views').read((e) => e.mono.personal_missions_30.tooltips.param_tooltip('resId')),
                }),
                [a, n],
            ),
        );
    return _.jsxs('div', {
        className: u(ti.base, ti[`base__${o}`], 0 === i && ti.status__hidden),
        children: [
            _.jsx(V, { ...l, className: ti.title, path: `personal_missions_30.main.progression.reward.title.${a}` }),
            _.jsx('div', {
                className: ti.items,
                children: s.map((e, s) =>
                    _.jsx('div', { className: ti.reward, children: _.jsx(ee, { ...ke(e, se.Big) }) }, s),
                ),
            }),
            _.jsx('div', {
                className: ti.status,
                children: (() => {
                    switch (o) {
                        case At:
                            return (
                                a !== mt.MAIN &&
                                _.jsx(V, {
                                    path: `personal_missions_30.main.progression.reward.status.inProgress.${a}`,
                                    params: {
                                        completedTasks: _.jsx('div', { className: ti.bold, children: e }),
                                        tasksNumber: _.jsx('div', { className: ti.bold, children: t }),
                                    },
                                })
                            );
                        case jt:
                            return _.jsxs(_.Fragment, {
                                children: [
                                    _.jsx(w, {
                                        path: 'personal_missions_30.main.progression.arrow__small',
                                        height: '24rem',
                                        width: '24rem',
                                        className: ti.icon,
                                    }),
                                    _.jsx(_.Fragment, {
                                        children: n.readOrEmpty(
                                            'personal_missions_30.main.progression.reward.status.received',
                                        ),
                                    }),
                                ],
                            });
                        default:
                            console.error(`Unexpected status: ${o}`);
                    }
                })(),
            }),
        ],
    });
}
const ni = 'MainReward_fc423f8a',
    oi = 'MainReward_vehicle_79e7db29',
    ri = 'MainReward_vehicleInfo_567bd76c',
    li = 'MainReward_vehicleName_2f6f9e18',
    ci = 'MainReward_preview_ac8bfcb1',
    di = 'MainReward_button_10f377d',
    _i = 'MainReward_buttonContent_e44cd18e',
    mi = l(function ({ className: e }) {
        const s = O.resolve('strings'),
            a = O.resolve('sounds'),
            { model: t, controls: i } = gs(),
            n = t.computes.activeOperation(),
            o = t.activeOperationId.get(),
            { isElite: r, vehicleLvl: l, vehicleType: c, vehicleShortName: d } = t.vehicle.get(),
            { animationInProgress: m } = hs();
        function p() {
            m ||
                ((null == n ? void 0 : n.vehicleInHangar)
                    ? i.showVehicleInHangar()
                    : (a.play('yes'), i.showVehiclePreview()));
        }
        return _.jsxs('div', {
            className: u(ni, e),
            'data-name': 'MainReward',
            children: [
                _.jsx(w, { className: oi, path: `personal_missions_30.operation_vehicle.c_296x222.vehicle_3_${o}` }),
                (null == n ? void 0 : n.vehicleInHangar)
                    ? _.jsx(j, {
                          theme: 'secondary',
                          size: 'small',
                          className: di,
                          classNames: { content: _i },
                          onClick: p,
                          children: s.readOrEmpty('personal_missions_30.main.progression.reward.previewButton'),
                      })
                    : _.jsx(w, {
                          path: 'personal_missions_30.main.progression.preview_icon',
                          width: '100rem',
                          height: '100rem',
                          className: ci,
                          onClick: p,
                          onMouseEnter: function () {
                              m || a.play('highlight');
                          },
                      }),
                _.jsxs(xe, {
                    className: ri,
                    children: [
                        _.jsx(xe.Level, { className: li, value: l, numberType: 'roman' }),
                        Ee(c) && _.jsx(xe.Type, { type: c, premium: r }),
                        _.jsx(xe.Name, { className: li, children: d }),
                    ],
                }),
            ],
        });
    }),
    ui = 'Rewards_855b83d9',
    pi = 'Rewards_reward_17816b38',
    gi = 'Rewards_divider_f047eb1d',
    fi = 'Rewards_mainReward_feb5fd02',
    bi = l(
        r.forwardRef(function ({ className: e }, s) {
            const { model: a } = gs(),
                t = a.computes.activeOperation();
            if (t)
                return _.jsxs('div', {
                    ref: s,
                    className: u(ui, e),
                    children: [
                        _.jsx('div', { className: pi, children: _.jsx(mi, { className: fi }) }),
                        t.rewards.map((e, s) =>
                            _.jsx(
                                'div',
                                {
                                    children: _.jsxs('div', {
                                        className: pi,
                                        children: [
                                            s > 0 &&
                                                _.jsx(w, {
                                                    path: 'personal_missions_30.main.progression.divider',
                                                    width: '3rem',
                                                    height: '110rem',
                                                    className: gi,
                                                }),
                                            _.jsx(ii, { index: s, reward: e }),
                                        ],
                                    }),
                                },
                                s,
                            ),
                        ),
                    ],
                });
        }),
    ),
    hi = {
        base: 'Progression_cd193b8c',
        content: 'Progression_content_5aca907b',
        content__disabled: 'Progression_content__disabled_884002f1',
        progressbar: 'Progression_progressbar_c3f75238',
        wrapper: 'Progression_wrapper_4bac8bb7',
        scrollArea: 'Progression_scrollArea_12caa5b2',
        shadow: 'Progression_shadow_b01cb69a',
        shadow__left: 'Progression_shadow__left_4cf02a8',
        shadow__right: 'Progression_shadow__right_753d7bf7',
        arrowButton: 'Progression_arrowButton_90413975',
        arrowButton__left: 'Progression_arrowButton__left_aa30b6aa',
        arrowButton__right: 'Progression_arrowButton__right_ca24c462',
        base__completed: 'Progression_base__completed_61efd8f5',
        base__completedWithHonors: 'Progression_base__completedWithHonors_61efd8f5',
        arrowButton__visible: 'Progression_arrowButton__visible_627338e7',
        rewards: 'Progression_rewards_32acd950',
        background: 'Progression_background_d1d356ae',
        bar: 'Progression_bar_e8c74acd',
    },
    Ii = l(function ({ className: e }) {
        const s = r.useRef(null),
            a = r.useRef(null),
            { api: t } = le(),
            i = X(),
            n = X(),
            { animationInProgress: o } = hs(),
            l = c(ts, (e) => e.value),
            d = ye(l),
            m = ce(),
            [p, f] = r.useState('hidden'),
            b = de(t, me.horizontal, void 0, { gapBeforeStart: 5 }),
            { model: h } = gs(),
            I = h.computes.activeOperation(),
            N = h.activeOperationId.get(),
            v = h.computes.firstDetailIndexByStatus(_t.NOT_RECEIVED),
            E = h.computes.firstDetailIndexByStatus(_t.IN_PROGRESS),
            y = -1 === v ? E : v,
            { breakpoint: S } = z(),
            w = Re(S.weight, G.large) ? wt : Ct,
            j = K(w.rewardWidth),
            A = K(w.detailWidth),
            M = C(
                Te.CUSTOM_SIMPLE,
                r.useMemo(
                    () => ({
                        body: O.resolve('strings').readOrEmpty(
                            'personal_missions_30.main.progression.tooltip.toActiveStage',
                        ),
                        resId: O.resolve('views').read((e) =>
                            e.mono.personal_missions_30.tooltips.param_tooltip('resId'),
                        ),
                    }),
                    [],
                ),
            );
        function D() {
            void 0 !== y && (m.play('carouselButton'), M.onClick(), L(y));
        }
        function P(e) {
            (m.play('mouse-enter'), M.onMouseEnter(e));
        }
        function L(e) {
            i.run(() => {
                const a = s.current,
                    [i, n] = t.getBounds(),
                    o = t.animationScroll.scrollPosition.get(),
                    r = t.getWrapperSize();
                if (!a || !r) return;
                const l = -1 === e ? n : A * e - r / 2 + j / 2;
                (0 === o && l < 0) || o === l || (m.play('bp_slide'), t.applyScroll(l));
            });
        }
        function R(e) {
            if (o) return;
            const s = h.computes.nextActiveDetail(e);
            s &&
                s.index !== v &&
                s.index !== E &&
                (ts.send({ type: 'HIDE_DETAIL_INFO', detailId: s.detail.id, action: os }), L(s.index));
        }
        return (
            T(x.ARROW_LEFT, () => R(x.ARROW_LEFT)),
            T(x.ARROW_RIGHT, () => R(x.ARROW_RIGHT)),
            r.useEffect(() => {
                void 0 !== y && (l !== as || (d !== Qe && void 0 !== d) || L(y));
            }, [N, l]),
            r.useEffect(() => {
                const e = () => {
                    const e = s.current,
                        i = a.current,
                        [n, o] = t.getBounds(),
                        r = t.animationScroll.scrollPosition.get(),
                        l = t.getWrapperSize();
                    if (!e || !i || !l) return;
                    if (I && !Mt.has(I.operationState)) {
                        const s = o - e.offsetWidth + j;
                        if (r <= s) {
                            const a = Math.ceil(s - r);
                            (i.classList.add('mask'),
                                (e.style.transform = `translateX(-${a}px)`),
                                (i.style.maskPosition = `-${a}px 100%`));
                        } else (i.classList.remove('mask'), (e.style.transform = 'translateX(-0px)'));
                    } else (i.classList.remove('mask'), (e.style.transform = 'translateX(-0px)'));
                    if (-1 === v && -1 === E) {
                        const s = o - r > e.offsetWidth ? 'right' : 'hidden';
                        return void f(s);
                    }
                    const c = (function (e, s, a, t) {
                        if (void 0 === t) return 'hidden';
                        const i = t * s;
                        return e > i + s ? 'left' : e <= i - a ? 'right' : 'hidden';
                    })(r, A, l - j, y);
                    f(c);
                };
                return (
                    n.run(() => e()),
                    t.events.on('change', e),
                    t.events.on('recalculateContent', e),
                    t.events.on('resizeHandled', e),
                    () => {
                        (t.events.off('change', e),
                            t.events.off('recalculateContent', e),
                            t.events.off('resizeHandled', e));
                    }
                );
            }, [I, t, A, y, E, v, j, n]),
            _.jsxs('div', {
                'data-name': 'Progression',
                className: u(hi.base, hi[`base__${null == I ? void 0 : I.operationState}`], hi[`base__${p}`], e),
                children: [
                    _.jsx('div', { className: u(hi.shadow, hi.shadow__left) }),
                    _.jsx('div', { className: u(hi.shadow, hi.shadow__right) }),
                    _.jsxs('div', {
                        className: hi.wrapper,
                        children: [
                            _.jsx(Ot, { className: hi.background }),
                            _.jsx(_e, {
                                className: hi.scroll,
                                areaClassName: hi.scrollArea,
                                barClassNames: { base: hi.bar },
                                children: _.jsxs('div', {
                                    className: u(hi.content, o && hi.content__disabled),
                                    children: [
                                        _.jsx(ai, { ref: a, className: hi.progressbar }),
                                        _.jsx(bi, { ref: s, className: hi.rewards }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    _.jsx(da, {
                        silent: !0,
                        size: ra,
                        arrowDirection: 'left',
                        ...M,
                        onClick: D,
                        onMouseEnter: P,
                        className: u(hi.arrowButton, hi.arrowButton__left, 'left' === p && hi.arrowButton__visible),
                    }),
                    _.jsx(da, {
                        silent: !0,
                        size: ra,
                        arrowDirection: 'right',
                        ...M,
                        onClick: D,
                        onMouseEnter: P,
                        className: u(hi.arrowButton, hi.arrowButton__right, 'right' === p && hi.arrowButton__visible),
                    }),
                    g.createPortal('dragging' === b.type && _.jsx(Za, {}), document.body),
                ],
            })
        );
    }),
    Ni = new Set([
        ut.PRECEDING_OPERATION_NOT_COMPLETED,
        ut.PAUSED,
        ut.NEXT_OPERATION_AVAILABLE,
        ut.COMPLETED,
        ut.AVAILABLE,
    ]),
    vi = new Set([ut.REQUIRES_VEHICLE, ut.PRECEDING_OPERATION_NOT_COMPLETED, ut.VEHICLE_IS_IN_BATTLE]),
    xi = {
        [ut.REQUIRES_VEHICLE]: 'lock_closed',
        [ut.PRECEDING_OPERATION_NOT_COMPLETED]: 'lock_closed',
        [ut.VEHICLE_IS_IN_BATTLE]: 'lock_closed',
        [ut.PAUSED]: 'pause',
        [ut.NEXT_OPERATION_AVAILABLE]: 'checkMark',
        [ut.COMPLETED]: 'checkMark',
        [ut.AVAILABLE]: null,
        [ut.ACTIVE]: null,
        [ut.CAMPAIGN_FINISHED]: null,
        [ut.NOT_ALL_COMPLETED]: null,
        [ut.NOT_ALL_COMPLETED_WITH_HONOR]: null,
    },
    Ei = {
        base: 'OperationStatus_7bc3be55',
        base__hasGradient: 'OperationStatus_base__hasGradient_3d20021',
        icon: 'OperationStatus_icon_e0618634',
        button: 'OperationStatus_button_7ab14b50',
        glareAttention: 'OperationStatus_glareAttention_18133b71',
        buttonContent: 'OperationStatus_buttonContent_664edec7',
    },
    yi = new Set([ut.COMPLETED, ut.PAUSED, ut.AVAILABLE]),
    Si = l(function ({ currentAnimationState: e, className: s }) {
        const a = O.resolve('strings'),
            t = O.resolve('images'),
            { model: i } = gs(),
            {
                currentOperationName: n,
                nextOperationName: o,
                requiredVehicleLevel: r,
                status: l,
                operationIdToPerform: c,
            } = i.status.get(),
            p = i.computes.operationStateToPerform(c),
            g = xi[l],
            b = l === ut.COMPLETED ? 'secondary' : 'primary',
            { statusStyle: h } = hs(),
            [I, N] = d(() => ({
                from: { transform: 'translate(10%, -220%) rotate(30deg)' },
                to: { transform: 'translate(-60%, 30%) rotate(30deg)' },
                loop: !0,
                delay: l === ut.NEXT_OPERATION_AVAILABLE ? 15e3 : 3e3,
                config: { duration: 1e3, easing: f.easeOutCirc },
            }));
        return _.jsxs(m.div, {
            style: h,
            className: u(Ei.base, vi.has(l) && Ei.base__hasGradient, s),
            children: [
                g &&
                    _.jsx('div', {
                        className: Ei.icon,
                        style: {
                            backgroundImage: `url(${t.readOrEmpty(`personal_missions_30.main.menu.icons.solid.${g}`)})`,
                        },
                    }),
                _.jsx(V, {
                    path: `personal_missions_30.main.operation.status.${l}`,
                    params: (() => {
                        switch (l) {
                            case ut.REQUIRES_VEHICLE:
                                return { requiredVehicleLevel: B(r) };
                            case ut.PAUSED:
                            case ut.COMPLETED:
                            case ut.AVAILABLE:
                                return { currentOperationName: n };
                            case ut.NEXT_OPERATION_AVAILABLE:
                                return { currentOperationName: n, nextOperationName: o };
                            default:
                                return {};
                        }
                    })(),
                }),
                Ni.has(l) &&
                    p !== Le.LOCKED &&
                    _.jsxs('div', {
                        className: Ei.button,
                        children: [
                            _.jsx(j, {
                                onClick: function () {
                                    e === as &&
                                        (yi.has(l)
                                            ? ts.send({ type: 'UPDATE_STATUS' })
                                            : ts.send({ type: 'SWITCH_OPERATION', operationId: c }));
                                },
                                theme: b,
                                size: 'small',
                                classNames: { content: u(Ei.buttonContent, Ei[`buttonContent__${b}`]) },
                                children: a.readOrEmpty(`personal_missions_30.main.operation.button.${l}`),
                            }),
                            (l === ut.AVAILABLE || l === ut.NEXT_OPERATION_AVAILABLE) &&
                                _.jsx(m.div, { style: I, className: Ei.glareAttention }),
                        ],
                    }),
            ],
        });
    }),
    Oi = {
        base: 'State_c71b06cc',
        icon: 'State_icon_2d3ccaa3',
        base__selected: 'State_base__selected_9f725de9',
        text: 'State_text_d27af289',
        base__completedWithHonors: 'State_base__completedWithHonors_9f725de9',
        base__completed: 'State_base__completed_9f725de9',
        base__active: 'State_base__active_9f725de9',
        base__unavailable: 'State_base__unavailable_9f725de9',
        base__available: 'State_base__available_9f725de9',
        base__textHidden: 'State_base__textHidden_9f725de9',
    },
    Ci = {
        [Le.COMPLETED_WITH_HONORS]: 'checkMark_double',
        [Le.COMPLETED]: 'checkMark',
        [Le.ACTIVE]: 'triangularFlag',
        [Le.UNAVAILABLE]: 'lock_closed',
        [Le.AVAILABLE]: 'lock_open',
        [Le.LOCKED]: 'lock_closed',
    };
function wi({ state: e, selected: s, className: a }) {
    const t = O.resolve('strings');
    return _.jsxs('div', {
        className: u(Oi.base, Oi[`base__${e}`], s ? Oi.base__selected : Oi.base__textHidden, a),
        children: [
            _.jsx(w, { path: `personal_missions_30.main.menu.icons.${Ci[e]}`, className: Oi.icon }),
            _.jsx('div', {
                className: Oi.text,
                children: t.readOrEmpty(`personal_missions_30.main.menuItem.state.${e}`),
            }),
        ],
    });
}
const ji = 'VehicleName_c038d9d8',
    Ai = 'VehicleName_name_13a273f',
    Mi = 'VehicleName_playVideoButton_10de3bdb',
    Di = l(function ({ operationName: e }) {
        const { controls: s } = gs(),
            a = O.resolve('strings'),
            t = O.resolve('sounds'),
            i = C(
                Te.CUSTOM_SIMPLE,
                r.useMemo(
                    () => ({
                        body: a.readOrEmpty('personal_missions_30.main.menuItem.tooltip.videoIntro'),
                        resId: O.resolve('views').read((e) =>
                            e.mono.personal_missions_30.tooltips.param_tooltip('resId'),
                        ),
                    }),
                    [a],
                ),
            );
        return _.jsxs('div', {
            className: ji,
            children: [
                _.jsx('div', { className: Ai, children: e }),
                _.jsx(w, {
                    className: Mi,
                    path: 'personal_missions_30.main.menu.icons.solid.video',
                    width: 32,
                    height: 32,
                    ...i,
                    onClick: function () {
                        (t.play('yes'), s.playIntroVideoClick(), i.onClick());
                    },
                    onMouseEnter: function (e) {
                        (i.onMouseEnter(e), t.play('highlight'));
                    },
                }),
            ],
        });
    }),
    Ti = {
        base: 'MenuItem_d36069b6',
        base__selected: 'MenuItem_base__selected_b91feb1b',
        wrapper: 'MenuItem_wrapper_d941deee',
        vehicleImage: 'MenuItem_vehicleImage_1697986e',
        base__unavailable: 'MenuItem_base__unavailable_28be5e00',
        base__locked: 'MenuItem_base__locked_28be5e00',
        infoBox: 'MenuItem_infoBox_effb61f3',
        vehicleName: 'MenuItem_vehicleName_a562c8af',
        state: 'MenuItem_state_b65b146b',
    };
function Pi({ state: e, operationId: s, operationIcon: a, operationName: t, selected: i }) {
    const n = O.resolve('strings'),
        o = O.resolve('sounds'),
        l = Se(
            'operation',
            r.useMemo(() => [s], [s]),
        ),
        c = C(
            Te.CUSTOM_SIMPLE,
            r.useMemo(
                () => ({
                    body: n.readOrEmpty('personal_missions_30.campaignSelector.operation.tooltip.locked'),
                    resId: O.resolve('views').read((e) => e.mono.personal_missions_30.tooltips.param_tooltip('resId')),
                }),
                [n],
            ),
        ),
        d = b(e, {
            initial: { opacity: 1 },
            from: { opacity: 0 },
            enter: {
                opacity: 1,
                onStart() {
                    e === Le.ACTIVE && o.play('gui_hangar_ammunition_panel_removed_dk');
                },
            },
            leave: { opacity: 0 },
            config: { duration: 200 },
            exitBeforeEnter: !0,
        });
    return _.jsx('div', {
        className: u(Ti.base, Ti[`base__${e}`], i && Ti.base__selected),
        children: _.jsxs('div', {
            className: Ti.wrapper,
            ...(e === Le.LOCKED ? c : l),
            children: [
                _.jsx(w, {
                    path: `personal_missions_30.operation_vehicle.c_150x100.${a}`,
                    className: Ti.vehicleImage,
                    onMouseEnter: function () {
                        i || o.play('highlight');
                    },
                    onClick: function () {
                        i || o.play('tabs');
                    },
                }),
                _.jsxs('div', {
                    className: Ti.infoBox,
                    children: [
                        _.jsx('div', { className: Ti.vehicleName, children: _.jsx(Di, { operationName: t }) }),
                        d((e, s) =>
                            _.jsx(m.div, {
                                style: e,
                                children: _.jsx(wi, { selected: i, state: s, className: Ti.state }),
                            }),
                        ),
                    ],
                }),
            ],
        }),
    });
}
const Li = 'Menu_f1a51291',
    Ri = 'Menu_list_bb43d3a9',
    ki = 'Menu_status_3546b8c6',
    Vi = 'Menu_chevron_64fd0b8c',
    Bi = new Set([ut.ACTIVE, ut.NOT_ALL_COMPLETED_WITH_HONOR, ut.NOT_ALL_COMPLETED, ut.CAMPAIGN_FINISHED]),
    Hi = l(function ({ className: e }) {
        const { model: s } = gs(),
            a = s.menuItems.get(),
            { status: t } = s.status.get(),
            i = s.activeOperationId.get(),
            n = c(ts, (e) => e.value),
            { menuStyle: o } = hs();
        return _.jsxs(m.div, {
            style: o,
            className: u(Li, e),
            children: [
                _.jsx('div', {
                    className: Ri,
                    children: Oe(a, (e, s) =>
                        _.jsxs(
                            r.Fragment,
                            {
                                children: [
                                    _.jsx('div', {
                                        onClick: () => {
                                            return (
                                                (s = e.state),
                                                (a = e.operationId),
                                                void (
                                                    s !== Le.LOCKED &&
                                                    n === as &&
                                                    i !== a &&
                                                    ts.send({ type: 'SWITCH_OPERATION', operationId: a })
                                                )
                                            );
                                            var s, a;
                                        },
                                        children: _.jsx(Pi, { ...e, selected: i === e.operationId }),
                                    }),
                                    s !== a.length - 1 &&
                                        _.jsx(w, {
                                            path: 'personal_missions_30.main.menu.icons.chevron_right',
                                            width: 10,
                                            height: 26,
                                            className: Vi,
                                        }),
                                ],
                            },
                            e.operationId,
                        ),
                    ),
                }),
                !Bi.has(t) && _.jsx(Si, { currentAnimationState: n, className: ki }),
            ],
        });
    }),
    $i = 'Completed_f9b3442',
    Qi = 'Completed_image_68376a7c',
    Wi = 'Completed_title_53a638e0',
    Ui = 'Completed_description_dd74aea4',
    qi = 'Completed_button_2f65c2e1',
    Fi = 'Completed_operation_681298f',
    Yi = 'Completed_glow_a9f265a3',
    zi = 'Completed_rays_8566affd',
    Gi = l(function ({ className: e }) {
        const s = O.resolve('strings'),
            { model: a } = gs(),
            { currentOperationName: t, nextOperationName: i, operationIdToPerform: n, status: o } = a.status.get(),
            r = a.computes.operationStateToPerform(n),
            l = a.campaignName.get(),
            { breakpoint: c } = z(),
            d = Re(c.weight, G.large) ? Ce.small : Ce.medium,
            { completedStateStyle: p, animationInProgress: g } = hs();
        return _.jsxs(m.div, {
            style: p,
            className: u($i, e),
            children: [
                _.jsx('div', { className: Yi }),
                _.jsx('div', { className: zi }),
                _.jsx(w, {
                    className: Qi,
                    path: 'personal_missions_30.campaign_selector.done_160',
                    width: '160rem',
                    height: '160rem',
                    adaptive: {
                        large: { width: 220, height: 220, path: 'personal_missions_30.campaign_selector.done_220' },
                    },
                }),
                _.jsx('div', { className: Wi, children: s.readOrEmpty('personal_missions_30.main.complete.title') }),
                _.jsx(V, {
                    className: Ui,
                    path: `personal_missions_30.main.complete.description.${o}`,
                    params: {
                        currentOperationName: _.jsx('span', { className: Fi, children: t }),
                        nextOperationName: _.jsx('span', { className: Fi, children: i }),
                        campaignName: _.jsx('span', { className: Fi, children: l }),
                    },
                }),
                o !== ut.CAMPAIGN_FINISHED &&
                    r !== Le.LOCKED &&
                    _.jsx(j, {
                        className: qi,
                        theme: 'primary',
                        size: d,
                        onClick: function () {
                            g || ts.send({ type: 'SWITCH_OPERATION', operationId: n });
                        },
                        children: s.readOrEmpty('personal_missions_30.main.complete.button'),
                    }),
            ],
        });
    }),
    Ki = 'Completed_cc94136f',
    Xi = 'Completed_image_3b32a21f',
    Zi = 'Completed_text_3d00c33a';
function Ji({ missionCategory: e }) {
    const s = O.resolve('strings');
    return _.jsxs('div', {
        className: Ki,
        children: [
            _.jsx(w, {
                className: Xi,
                path: 'personal_missions_30.common.card.done_small',
                width: '80rem',
                height: '80rem',
                adaptive: { medium: { width: 110, height: 110, path: 'personal_missions_30.common.card.done_big' } },
            }),
            s
                .readOrEmpty('personal_missions_30.main.mission.text.completed')
                .split('\n')
                .map((s) =>
                    _.jsx(
                        A,
                        {
                            className: Zi,
                            text: s,
                            params: { missionType: _.jsx(V, { path: `personal_missions_30.common.category.${e}` }) },
                        },
                        s,
                    ),
                ),
        ],
    });
}
function en(e, s = 0) {
    return 100 * (e + s) + 20 * e;
}
const sn = 'Title_1676083a',
    an = 'Title_text_3a1c405f',
    tn = 'Title_image_899d070e';
function nn({ missionCategory: e }) {
    const s = O.resolve('strings');
    return _.jsxs('div', {
        className: sn,
        children: [
            _.jsx(w, {
                path: `personal_missions_30.category.c_32x32.${e}`,
                width: '32rem',
                height: '32rem',
                adaptive: {
                    medium: { width: 36, height: 36, path: `personal_missions_30.category.c_36x36.${e}` },
                    extraLarge: { width: 48, height: 48, path: `personal_missions_30.category.c_48x48.${e}` },
                },
                className: tn,
            }),
            _.jsx('div', { className: an, children: s.readOrEmpty(`personal_missions_30.common.category.${e}`) }),
        ],
    });
}
const on = {
    base: 'VehicleTypes_54108783',
    image: 'VehicleTypes_image_41f6ac8c',
    base__assault: 'VehicleTypes_base__assault_8f698c7c',
    base__support: 'VehicleTypes_base__support_8f698c7c',
    base__sniper: 'VehicleTypes_base__sniper_8f698c7c',
    line: 'VehicleTypes_line_d3555d32',
};
function rn({ missionCategory: e, className: s }) {
    return _.jsxs('div', {
        className: u(on.base, on[`base__${e}`], s),
        children: [
            _.jsx('div', { className: on.line }),
            _.jsx(w, { path: `personal_missions_30.common.card.${e}_types`, className: on.image }),
            _.jsx('div', { className: on.line }),
        ],
    });
}
const ln = 'DefaultCard_2c35f6e',
    cn = 'DefaultCard_content_ac73ae55',
    dn = 'DefaultCard_cardWrapper_e41c5beb',
    _n = 'DefaultCard_card_43ca4f26',
    mn = 'DefaultCard_header_7ac329f8',
    un = 'DefaultCard_vehicleTypes_c0edf390',
    pn = 'DefaultCard_innerContent_9d3b73d1',
    gn = 'DefaultCard_footer_93929a8f',
    fn = 'DefaultCard_quests_2aaa2468',
    bn = 'DefaultCard_separator_fafec470',
    hn = 'DefaultCard_rewards_14dfa3b1',
    In = ['currentMissionNumber', 'currentProgressValue', 'missionStatus'],
    Nn = l(function ({ index: e, mission: s }) {
        const a = O.resolve('views'),
            t = O.resolve('sounds'),
            { controls: i } = gs(),
            n = c(ts, (e) => e.value),
            [o, l] = r.useState(s),
            u = q({
                contentId: a.read((e) => e.mono.personal_missions_30.tooltips.missions_category_tooltip('resId')),
                args: { category: o.missionCategory },
            }),
            [p, g] = d(() => ({ from: { opacity: 0, transform: 'translateY(20rem)' } })),
            b = r.useMemo(
                () => In.some((e) => o[e] !== s[e]),
                [
                    s.currentMissionNumber,
                    s.currentProgressValue,
                    s.missionStatus,
                    o.currentMissionNumber,
                    o.currentProgressValue,
                    o.missionStatus,
                ],
            );
        return (
            S(() => {
                n === as &&
                    g.start({
                        opacity: 1,
                        transform: 'translateY(0rem)',
                        config: { duration: 300, easing: f.easeOutQuart },
                        delay: en(e),
                    });
            }),
            r.useEffect(() => {
                n === Qe || (s.missionStatus === ia.ACTIVE && o.missionStatus === ia.LOCKED)
                    ? l(s)
                    : b &&
                      n === as &&
                      g.start({
                          opacity: 0,
                          transform: 'translateY(-20rem)',
                          config: { duration: 300, easing: f.easeInQuart },
                          delay: 50 * e,
                          onRest: () => {
                              (l(s),
                                  g.set({ transform: 'translateY(20rem)' }),
                                  g.start({
                                      opacity: 1,
                                      transform: 'translateY(0rem)',
                                      config: { duration: 300, easing: f.easeOutQuart },
                                      delay: en(e, 3),
                                  }));
                          },
                      });
            }, [g, n, e, s, b, o.missionStatus]),
            r.useEffect(() => {
                switch (n) {
                    case $e:
                    case We:
                    case Ye:
                    case Ge:
                        g.start({
                            opacity: 0,
                            transform: 'translateY(-20rem)',
                            config: { duration: 300, easing: f.easeInQuart },
                            delay: 50 * e,
                        });
                        break;
                    case Qe:
                    case Ze:
                    case ze:
                        (g.set({ transform: 'translateY(20rem)' }),
                            g.start({
                                opacity: 1,
                                transform: 'translateY(0rem)',
                                config: { duration: 300, easing: f.easeOutQuart },
                                delay: en(e, 3),
                            }));
                }
            }, [g, n, e]),
            _.jsxs(m.div, {
                style: p,
                className: ln,
                onClick: function () {
                    n === as &&
                        (t.play('yes'),
                        i.updateAnimationState(He.ANIMATION_STARTED),
                        ts.send({ type: 'TO_MISSIONS', missionCategory: o.missionCategory }));
                },
                children: [
                    _.jsx(pa, {
                        cardType: is.default,
                        missionStatus: o.missionStatus,
                        currentMissionNumber: o.currentMissionNumber,
                        maxMissions: o.maxMissions,
                    }),
                    _.jsx(ie, {
                        className: cn,
                        classNames: { wrapper: dn },
                        multiple: !0,
                        children: _.jsxs('div', {
                            className: _n,
                            children: [
                                _.jsxs('div', {
                                    className: mn,
                                    ...u,
                                    children: [
                                        _.jsx(nn, { missionCategory: o.missionCategory }),
                                        _.jsx(rn, { missionCategory: o.missionCategory, className: un }),
                                    ],
                                }),
                                (() => {
                                    switch (o.missionStatus) {
                                        case ia.ACTIVE:
                                        case ia.LOCKED:
                                            return _.jsxs('div', {
                                                className: pn,
                                                children: [
                                                    _.jsx(Wa, { mission: o, className: fn, cardType: is.default }),
                                                    _.jsxs('div', {
                                                        className: gn,
                                                        children: [
                                                            o.maxProgressValue > 1 &&
                                                                _.jsx(xa, {
                                                                    cardIndex: e,
                                                                    cardType: is.default,
                                                                    currentProgressValue: o.currentProgressValue,
                                                                    maxProgressValue: o.maxProgressValue,
                                                                }),
                                                            _.jsx(Hs, { type: 'withoutAlpha', className: bn }),
                                                            _.jsx(qa, { rewards: o.rewards, className: hn }),
                                                        ],
                                                    }),
                                                ],
                                            });
                                        case ia.DISABLED:
                                            return _.jsx(Ya, {});
                                        case ia.COMPLETED:
                                            return _.jsx(Ji, { missionCategory: o.missionCategory });
                                        default:
                                            console.error(`Unexpected previousMission status: ${o.missionStatus}`);
                                    }
                                })(),
                            ],
                        }),
                    }),
                ],
            })
        );
    }),
    vn = {
        base: 'AdditionalCard_15bcf296',
        wrapper: 'AdditionalCard_wrapper_a2077e5e',
        title: 'AdditionalCard_title_4c575969',
        content: 'AdditionalCard_content_99f366cc',
        status: 'AdditionalCard_status_798a8fd4',
        base__daily: 'AdditionalCard_base__daily_f7c5f11b',
        image: 'AdditionalCard_image_aa708d2c',
        base__weekly: 'AdditionalCard_base__weekly_f7c5f11b',
        base__completed: 'AdditionalCard_base__completed_f7c5f11b',
        progress: 'AdditionalCard_progress_e4831808',
        currentValue: 'AdditionalCard_currentValue_9b3afc4c',
        text: 'AdditionalCard_text_4b72abae',
    },
    xn = l(function ({
        additionalMission: { currentPoints: e, maxPoints: s, type: a },
        operationState: t,
        progressHidden: i,
        className: n,
    }) {
        const o = O.resolve('strings'),
            { model: l, controls: d } = gs(),
            { status: m } = l.status.get(),
            p = t === Le.ACTIVE && m !== ut.PAUSED && !i,
            g = p && e === s,
            [f, b] = r.useState({ currentPoints: e, maxPoints: s, completed: g, progressShown: p }),
            { animationInProgress: h } = hs(),
            I = c(ts, (e) => e.value),
            N = C(
                Te.PM3_POINTS,
                r.useMemo(
                    () => ({
                        resId: O.resolve('views').read((e) =>
                            e.mono.personal_missions_30.tooltips.param_tooltip('resId'),
                        ),
                    }),
                    [],
                ),
            );
        return (
            r.useEffect(() => {
                (I !== ss && I !== Qe) || b({ currentPoints: e, maxPoints: s, completed: g, progressShown: p });
            }, [I, g, e, s, p]),
            r.useEffect(() => {
                (f.currentPoints === e && f.progressShown === p) ||
                    I !== as ||
                    !p ||
                    ts.send({ type: 'HIDE_ADDITIONAL_MISSIONS' });
            }, [I, e, p, f.currentPoints, f.progressShown]),
            _.jsx(ie, {
                className: u(vn.base, f.completed && vn.base__completed, vn[`base__${a}`]),
                classNames: { wrapper: n },
                onClick: function () {
                    d.openAdditionalMission();
                },
                status: f.completed ? ae.done : void 0,
                children: _.jsxs('div', {
                    className: vn.wrapper,
                    children: [
                        _.jsx('div', {
                            className: vn.title,
                            children: o.readOrEmpty(`personal_missions_30.main.additionalMission.title.${a}`),
                        }),
                        _.jsx(Hs, { type: 'withoutAlpha', className: vn.separator }),
                        _.jsxs('div', {
                            className: vn.content,
                            children: [
                                _.jsxs('div', {
                                    className: vn.status,
                                    ...N,
                                    children: [
                                        _.jsx(w, {
                                            path: `personal_missions_30.main.additional_card.${a}`,
                                            className: vn.image,
                                        }),
                                        f.progressShown &&
                                            _.jsx(V, {
                                                className: vn.progress,
                                                path: 'personal_missions_30.main.mission.counter',
                                                params: {
                                                    currentValue: _.jsx('span', {
                                                        className: vn.currentValue,
                                                        children: f.currentPoints,
                                                    }),
                                                    maxValue: s,
                                                },
                                            }),
                                    ],
                                }),
                                _.jsx('div', {
                                    children: _.jsx(V, {
                                        className: vn.text,
                                        path: `personal_missions_30.main.additionalMission.text.${f.completed ? 'completed' : a}`,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        );
    }),
    En = 'Missions_74bb97b6',
    yn = 'Missions_additionalCardsWrapper_8e829c9b',
    Sn = 'Missions_additionalCard_8b2b9913',
    On = l(function ({ className: e }) {
        const { model: s } = gs(),
            { additionalCardStyle: a } = hs(),
            t = s.computes.activeOperation();
        if (!t) return null;
        const i = t.additionalMissions.some((e) => e.isProgressHidden);
        return _.jsxs('div', {
            className: u(En, e),
            children: [
                t.missions.map((e, s) => _.jsx(Nn, { mission: e, index: s }, s)),
                t.operationState !== Le.COMPLETED &&
                    t.additionalMissions.some((e) => e.isEnabled) &&
                    _.jsx(m.div, {
                        style: a,
                        className: yn,
                        children: t.additionalMissions.map((e) =>
                            e.isEnabled
                                ? _.jsx(
                                      xn,
                                      {
                                          additionalMission: e,
                                          operationState: t.operationState,
                                          progressHidden: i,
                                          className: Sn,
                                      },
                                      e.type,
                                  )
                                : null,
                        ),
                    }),
            ],
        });
    }),
    Cn = 'Progression_c7c2323d',
    wn = 'Progression_missions_a14a8547',
    jn = 'Progression_completed_95b1e94b',
    An = 'Progression_menu_ad782db3',
    Mn = l(function () {
        const { model: e } = gs(),
            s = e.computes.activeOperation(),
            a = e.activeOperationId.get();
        return _.jsxs('div', {
            className: Cn,
            children: [
                _.jsx(Hi, { className: An }),
                (null == s ? void 0 : s.operationState) === Le.COMPLETED_WITH_HONORS
                    ? _.jsx(Gi, { className: jn }, a)
                    : _.jsx(On, { className: wn }),
            ],
        });
    }),
    Dn = {
        sceneWrapper: 'Main_sceneWrapper_84c5dae7',
        progressionShadow: 'Main_progressionShadow_ca6ff6b5',
        missionsShadow: 'Main_missionsShadow_eb81cd44',
        vignette: 'Main_vignette_4ff7a20d',
        shadow: 'Main_shadow_dd29bf43',
        base: 'Main_aae0650c',
        wrapper: 'Main_wrapper_77b681a3',
        wrapper__disabled: 'Main_wrapper__disabled_7d2b6ba9',
        base__missions: 'Main_base__missions_84c5dae7',
        base__assembling: 'Main_base__assembling_84c5dae7',
        base__progression: 'Main_base__progression_84c5dae7',
        base__completedWithHonors: 'Main_base__completedWithHonors_84c5dae7',
        completedWithHonorsShadow: 'Main_completedWithHonorsShadow_cc7ae74e',
        progress: 'Main_progress_a05440d5',
        glow: 'Main_glow_437189d1',
        up: 'Main_up_84c5dae7',
        fadeIn: 'Main_fadeIn_84c5dae7',
        glowFadeInUp: 'Main_glowFadeInUp_84c5dae7',
        raysAppearance: 'Main_raysAppearance_84c5dae7',
        rotate: 'Main_rotate_84c5dae7',
    },
    Tn = l(function () {
        const { model: e, controls: s } = gs(),
            a = e.computes.activeOperation(),
            t = e.currentState.get(),
            { progressionStyle: i, animationInProgress: n } = hs(),
            o = t === ds || n;
        T(x.ESCAPE, function () {
            if (n) return;
            s.goBack();
        });
        const l = E((e) => {
                o || s.mouseOver3dScene(e);
            }),
            c = E((e) => {
                t === _s || n || s.moveSpace(e);
            });
        return (
            r.useEffect(() => {
                if (t === ds || t === cs || n) s.mouseOver3dScene({ isOver3dScene: !1 });
                else {
                    const e = we(),
                        a = document.elementFromPoint(e.x, e.y);
                    a && s.mouseOver3dScene({ isOver3dScene: a.classList.contains(Dn.sceneWrapper) });
                }
            }, [t, n, s]),
            r.useEffect(
                () => (
                    ts.start(),
                    () => {
                        ts.stop();
                    }
                ),
                [],
            ),
            r.useLayoutEffect(() => {
                je(!0);
            }),
            _.jsxs('div', {
                className: u(Dn.base, Dn[`base__${t}`], Dn[`base__${null == a ? void 0 : a.operationState}`]),
                'data-name': 'Dashboard',
                children: [
                    _.jsx(Ae, { className: Dn.sceneWrapper, moveSpace: c, onMouseOver3dScene: l, moveSpaceEnabled: o }),
                    _.jsx('div', { className: Dn.completedWithHonorsShadow }),
                    _.jsx('div', { className: Dn.vignette }),
                    _.jsx('div', { className: Dn.progressionShadow }),
                    _.jsx('div', { className: Dn.missionsShadow }),
                    _.jsxs('div', {
                        className: u(Dn.wrapper, n && Dn.wrapper__disabled),
                        'data-test-id': `isDisabled-${String(n)}`,
                        children: [
                            (() => {
                                switch (t) {
                                    case _s:
                                        return _.jsx(Mn, {});
                                    case cs:
                                        return _.jsx(xt, {});
                                    case ds:
                                        return _.jsx(Vs, {});
                                    default:
                                        console.error(`Unexpected main screen state: ${t}`);
                                }
                            })(),
                            _.jsx(m.div, {
                                style: i,
                                className: Dn.progress,
                                children: _.jsx(ge, { settings: us, children: _.jsx(Ii, {}) }),
                            }),
                        ],
                    }),
                ],
            })
        );
    });
Me(_.jsx(ps, { children: _.jsx(bs, { children: _.jsx(De, { soundsOverrides: ms, children: _.jsx(Tn, {}) }) }) }), {
    fullScreen: !0,
}).then(() => je(!1));
