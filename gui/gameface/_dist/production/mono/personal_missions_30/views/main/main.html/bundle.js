import {
    s as e,
    t as s,
    v as a,
    o as t,
    w as i,
    e as n,
    x as o,
    r,
    p as l,
    y as c,
    m as d,
    j as _,
    n as m,
    f as u,
    R as p,
    z as g,
    q as f,
    A as h,
} from '../../../chunks/vendor.js';
import {
    w as b,
    c as I,
    i as N,
    f as v,
    k as x,
    x as E,
    e as y,
    b as S,
    r as O,
    n as C,
    I as w,
    B as j,
    y as A,
    D as M,
    F as D,
    a as T,
    h as L,
    v as P,
    z as k,
    A as V,
    S as B,
    C as H,
    L as $,
    M as Q,
    H as W,
    E as U,
    T as q,
    G as F,
    J as Y,
    K as z,
    l as G,
    N as K,
    O as X,
    P as Z,
    R as J,
    Q as ee,
    W as se,
    X as ae,
    Y as te,
    Z as ie,
    _ as ne,
    $ as oe,
    a0 as re,
    u as le,
    a1 as ce,
    a2 as de,
    a3 as _e,
    a4 as me,
    a5 as ue,
    a6 as pe,
    a7 as ge,
    a8 as fe,
    q as he,
    a9 as be,
    aa as Ie,
    V as Ne,
    ab as ve,
    ac as xe,
    ad as Ee,
    m as ye,
    ae as Se,
    af as Oe,
    ag as Ce,
    ah as we,
    ai as je,
    aj as Ae,
    d as Me,
    U as De,
} from '../../../chunks/lib.js';
import { P as Te, M as Le, O as Pe } from '../../../chunks/enums.js';
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
    us = { step: { ...b.step, factor: 9 }, animationConfig: { ...b.animationConfig, tension: 120 } },
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
    hs = l(function ({ children: e }) {
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
                        h.start({ opacity: 0, config: { duration: 300, easing: y.easeInQuart } }),
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
            [f, h] = d(() => ({ from: { opacity: 0 }, config: { duration: 300, easing: y.easeOutQuart } })),
            [b, I] = d(() => ({ from: { opacity: 1, transform: 'translateY(0rem)' }, config: { duration: 200 } })),
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
                    h.start({ opacity: 1, config: { duration: 300, easing: y.easeInQuart } }));
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
                                h.start({ opacity: 0, config: { duration: 300, easing: y.easeInQuart } }),
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
                                    h.start({ opacity: 1, config: { duration: 300, easing: y.easeInQuart } }),
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
                                h.start({ opacity: 0, config: { duration: 300, easing: y.easeInQuart } }),
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
                                    h.start({ opacity: 1, config: { duration: 300, easing: y.easeInQuart } }),
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
                                    h.start({ opacity: 1, config: { duration: 300, easing: y.easeInQuart } }),
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
            }, [i.missionCategory, i.nextOperationId, i.detailId, i.action, t, a, v, I, O, l, w, g, h, u]),
            _.jsx(fs.Provider, {
                value: {
                    completedStateStyle: f,
                    additionalCardStyle: m,
                    animationInProgress: o,
                    progressionStyle: p,
                    detailInfoStyle: C,
                    zoomOutStyle: x,
                    statusStyle: b,
                    menuStyle: N,
                },
                children: e,
            })
        );
    }),
    bs = () => {
        const e = r.useContext(fs);
        if (!e) throw new Error('useAnimation must be used within an AnimationProvider');
        return e;
    },
    Is = 'ZoomOut_718336b5',
    Ns = 'ZoomOut_line_227e84e1',
    vs = 'ZoomOut_icon_ea52efbd';
function xs({ className: e }) {
    const s = O.resolve('sounds'),
        { zoomOutStyle: a, animationInProgress: t } = bs(),
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
                onMouseEnter: function () {
                    t || (i.onMouseEnter(), s.play('highlight'));
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
            { detailInfoStyle: o } = bs(),
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
                _.jsx('div', { className: ws, children: s.readOrEmpty(`personal_missions_30.detail.name.${i}`) }),
                _.jsx(A, {
                    children: _.jsx(M, {
                        className: js,
                        areaClassName: As,
                        children: _.jsx(D, {
                            path: `personal_missions_30.detail.descr.historical.${i}`,
                            className: Ms,
                        }),
                    }),
                }),
            ],
        });
    }),
    Ts = 'Assembling_aad1dbe5',
    Ls = 'Assembling_wrapper_455363c4',
    Ps = 'Assembling_infoBox_ec2ebc27',
    Rs = 'Assembling_base__disabled_ca5e9f6e',
    ks = 'Assembling_zoomOut_8760d796',
    Vs = l(function () {
        const { model: e, controls: s } = gs(),
            a = e.activeDetailId.get(),
            { animationInProgress: t } = bs();
        return (
            T(x.ESCAPE, function () {
                t || (a ? ts.send({ type: 'HIDE_DETAIL_INFO', action: os }) : s.goBack());
            }),
            _.jsx('div', {
                className: u(Ts, t && Rs),
                children:
                    a &&
                    _.jsxs('div', {
                        className: Ls,
                        children: [_.jsx(Ds, { className: Ps }), _.jsx(xs, { className: ks })],
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
    zs = [Le.ASSAULT, Le.SNIPER, Le.SUPPORT],
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
                const a = L(t(s), e);
                if (!a) throw new Error(`mission with index ${e} was not found`);
                return a;
            }),
            n = v.primitive((e) => a(e).operationName),
            o = v.primitive((e) => ({ minLevel: a(e).minRequiredVehicle, maxLevel: a(e).maxRequiredVehicle }));
        return {
            ...s,
            computes: { missionsByCategory: t, missionByIndex: i, operationNameById: n, vehicleLevelsById: o },
        };
    }, P),
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
        title: 'CategoryInfo_title_36d4af70',
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
                        _.jsx(D, {
                            split: !0,
                            path: 'personal_missions_30.main.missions.category.description',
                            params: {
                                category: s.readOrEmpty(`personal_missions_30.common.category.${i}`),
                                operationName: _.jsx('div', {
                                    className: sa.highlightedText,
                                    children: t.computes.operationNameById(n),
                                }),
                                minLevel: V(t.computes.vehicleLevelsById(n).minLevel),
                                maxLevel: V(t.computes.vehicleLevelsById(n).maxLevel),
                            },
                            className: sa.description,
                        }),
                        _.jsx(D, {
                            path: `personal_missions_30.main.missions.category.vehicles.${i}`,
                            params: {
                                HT: _.jsx(ea, { item: W }),
                                MT: _.jsx(ea, { item: Q }),
                                LT: _.jsx(ea, { item: $ }),
                                TD: _.jsx(ea, { item: H }),
                                SPG: _.jsx(ea, { item: B }),
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
        t = U({
            contentId: a.read((e) => e.mono.personal_missions_30.tooltips.missions_category_tooltip('resId')),
            args: { category: e },
        });
    return _.jsx(q.Tab, { tabId: e, ...t, children: s });
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
                                return _.jsx(D, {
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
                                                children: _.jsx(D, {
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
const ga = 'Progress_431da46b',
    fa = 'Progress_separator_5e9f0d5b',
    ha = 'Progress_line_6fc99c5a',
    ba = 'Progress_icon_14b45aa1',
    Ia = 'Progress_c2cbad16',
    Na = 'Progress_container_24631f37',
    va = 'Progress_done_23661691',
    xa = 'Progress_vehicle_2ae25c73',
    Ea = 'Progress_done__visible_c28cb7f7';
function ya({ cardIndex: e, cardType: s, currentProgressValue: a, maxProgressValue: t, className: i }) {
    const n = O.resolve('views'),
        { breakpoint: o } = F(),
        r = Re(o.weight, z.medium) && s === is.default,
        l = U({
            contentId: n.read((e) => e.mono.personal_missions_30.tooltips.mission_progress_tooltip('resId')),
            args: { missionIndex: e },
        });
    return _.jsxs('div', {
        className: u(ga, i),
        children: [
            !r &&
                _.jsxs('div', {
                    className: fa,
                    children: [
                        _.jsx('div', { className: ha }),
                        _.jsx(w, {
                            className: ba,
                            path: 'personal_missions_30.common.card.done_separator',
                            width: '16rem',
                            height: '17rem',
                        }),
                        _.jsx('div', { className: ha }),
                    ],
                }),
            _.jsx('div', {
                className: Ia,
                ...l,
                children: Y(t, (e) =>
                    _.jsxs(
                        'div',
                        {
                            className: Na,
                            children: [
                                _.jsx(w, {
                                    className: xa,
                                    path: 'personal_missions_30.common.card.vehicle',
                                    width: '64rem',
                                    height: '64rem',
                                }),
                                _.jsx(w, {
                                    className: u(va, e < a && Ea),
                                    path: 'personal_missions_30.common.card.done',
                                    width: '64rem',
                                    height: '64rem',
                                }),
                            ],
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
const Sa = (e, s) => window.getComputedStyle(e, null).getPropertyValue(s),
    Oa = (e, s, a) => {
        const t = a.getContext('2d'),
            i = Array.from(e).length;
        if (!t || 0 === i) return 0;
        t.font = ((e) => {
            const s = Sa(e, 'font-weight'),
                a = Sa(e, 'font-size'),
                t = Sa(e, 'font-family');
            return `${s} ${G(parseFloat(a))}px ${t}`;
        })(s);
        const n = t.measureText(e),
            o = ((e) => {
                const s = Sa(e, 'letter-spacing'),
                    [a] = s.match(/[a-z%]+$/);
                return 'em' === a ? parseFloat(Sa(e, 'font-size')) * parseFloat(s) : parseFloat(s);
            })(s);
        return Math.ceil(n.width + (i - 1) * G(o));
    },
    Ca = (e) => {
        if (e.start >= e.end - 1) return e.start;
        const s = Math.floor((e.start + e.end) / 2),
            a = e.words.slice(0, s).join(' '),
            t = Math.ceil(Oa(a, e.element, e.canvas) / e.element.getBoundingClientRect().width);
        return Ca(t <= 1 ? { ...e, start: s } : { ...e, end: s });
    },
    wa = 'MultilineOverflow_ec9f8e47',
    ja = 'MultilineOverflow_base__truncated_f602d646',
    Aa = 'MultilineOverflow_text_b39629e',
    Ma = 'MultilineOverflow_truncatedContent_b0ee4004',
    Da = 'MultilineOverflow_singleLine_c231496e',
    Ta = 'MultilineOverflow_line_ffcfe2ce',
    La = r.forwardRef(function ({ text: e, lines: s, className: a, onChange: t, simpleTooltipParams: i, ...n }, o) {
        const l = C(
                Te.CUSTOM_SIMPLE,
                r.useMemo(
                    () => ({
                        ...i,
                        resId: O.resolve('views').read((e) =>
                            e.mono.personal_missions_30.tooltips.param_tooltip('resId'),
                        ),
                    }),
                    [i],
                ),
            ),
            c = r.useRef(null),
            d = r.useRef(null),
            [m, p] = r.useState(!1),
            [g, f] = r.useState([]),
            [h, b] = r.useState(0),
            I = K(),
            N = r.useMemo(() => document.createElement('canvas'), []),
            v = r.useCallback(() => (d.current ? d.current.getBoundingClientRect().height : 0), []),
            x = r.useCallback(
                (e) => {
                    const s = v();
                    return e && s ? Math.round(e.scrollHeight / s) : 0;
                },
                [v],
            );
        const E = r.useCallback(() => {
                if (x(c.current) <= s) return p(!1);
                p(!0);
                const a = e.split(' '),
                    t = Array.from(new Array(s)).reduce((e, t, i) => {
                        if (!c.current) return e;
                        const n = e.reduce((e, s) => e + s.length, 0),
                            o = a.slice(n);
                        if (i === s - 1) return (e.push(o), e);
                        const r = Ca({ start: 0, end: o.length, words: o, element: c.current, canvas: N });
                        return (e.push(o.slice(0, r)), e);
                    }, []);
                f(t);
            }, [N, x, s, e]),
            y = r.useCallback(() => {
                I.run(() => {
                    (b(v() * s), E());
                });
            }, [v, s, I, E]);
        return (
            r.useEffect(y, [y]),
            X(y, [y]),
            r.useEffect(() => {
                null == t || t(m);
            }, [t, m]),
            _.jsxs('div', {
                ...n,
                ref: o,
                className: u(wa, a, m && ja),
                onMouseEnter: function (e) {
                    var s;
                    (null == (s = n.onMouseEnter) || s.call(n, e), m && l.onMouseEnter());
                },
                onClick: function (e) {
                    var s;
                    (null == (s = n.onClick) || s.call(n, e), m && l.onClick());
                },
                onMouseLeave: function (e) {
                    var s;
                    (null == (s = n.onMouseLeave) || s.call(n, e), m && l.onMouseLeave());
                },
                children: [
                    _.jsx('div', { ref: c, className: Aa, style: { maxHeight: `${Z(h)}rem` }, children: e }),
                    _.jsx('div', {
                        className: Ma,
                        children: g.map((e, s) => _.jsx('div', { className: Ta, children: e.join(' ') }, s)),
                    }),
                    _.jsx('div', { ref: d, className: Da, children: R.strings.common.common.dot() }),
                ],
            })
        );
    }),
    Pa = 64,
    Ra = 90,
    ka = 128,
    Va = {
        [is.default]: {
            [z.extraSmall]: { double: 2, doubleRequired: 1, single: 5 },
            [z.small]: { double: 2, doubleRequired: 1, single: 5 },
            [z.medium]: { double: 3, doubleRequired: 3, single: 8 },
            [z.large]: { double: 3, doubleRequired: 3, single: 8 },
            [z.extraLarge]: { double: 3, doubleRequired: 3, single: 9 },
        },
        [is.missions]: {
            [z.extraSmall]: { double: 4, doubleRequired: 3, single: 8 },
            [z.small]: { double: 4, doubleRequired: 3, single: 8 },
            [z.medium]: { double: 5, doubleRequired: 4, single: 10 },
            [z.large]: { double: 5, doubleRequired: 4, single: 10 },
            [z.extraLarge]: { double: 5, doubleRequired: 4, single: 10 },
        },
    };
function Ba(e, s, a) {
    return s ? a.single : e ? a.doubleRequired : a.double;
}
const Ha = {
    base: 'Quest_555c39f7',
    image: 'Quest_image_83f034ec',
    base__missions: 'Quest_base__missions_3236e985',
    wrapper: 'Quest_wrapper_2200f7dd',
    title: 'Quest_title_e8e4a50f',
    quest: 'Quest_a31e9bfc',
};
function $a({
    cardType: e,
    quest: { questCondition: s, summary: a, questType: t },
    singleQuest: i,
    allQuestsRequired: n,
    className: o,
}) {
    const { breakpoint: l } = F(),
        c = (function (e, s) {
            return Va[e][s];
        })(e, l.name),
        d = e === is.missions,
        m = r.useMemo(() => ({ header: a, body: s }), [s, a]);
    return _.jsxs('div', {
        className: u(Ha.base, Ha[`base__${e}`], o),
        children: [
            _.jsx(w, {
                className: Ha.image,
                path: d
                    ? `personal_missions_30.quest_type.c_128x128.icon_battle_condition_${t}`
                    : `personal_missions_30.quest_type.c_64x64.icon_battle_condition_${t}`,
                width: d ? ka : Pa,
                height: d ? ka : Pa,
                adaptive: {
                    medium: {
                        width: d ? ka : Ra,
                        height: d ? ka : Ra,
                        path: d
                            ? `personal_missions_30.quest_type.c_128x128.icon_battle_condition_${t}`
                            : `personal_missions_30.quest_type.c_90x90.icon_battle_condition_${t}`,
                    },
                },
            }),
            _.jsxs('div', {
                className: Ha.wrapper,
                children: [
                    _.jsx('div', { className: Ha.title, children: a }),
                    _.jsx(La, { text: s, className: Ha.quest, simpleTooltipParams: m, lines: Ba(!n, i, c) }),
                ],
            }),
        ],
    });
}
const Qa = {
    base: 'QuestSeparator_43fba5a4',
    dots: 'QuestSeparator_dots_e1abf39e',
    arrow: 'QuestSeparator_arrow_9ef069fe',
    text: 'QuestSeparator_text_a5a5c2eb',
};
function Wa({ className: e }) {
    return _.jsxs('div', {
        className: u(Qa.base, e),
        children: [
            _.jsx(w, { path: 'personal_missions_30.common.card.dots', width: '48rem', height: '4rem' }),
            _.jsx(w, { path: 'personal_missions_30.common.card.arrow', width: '16rem', height: '16rem' }),
            _.jsx(D, { className: Qa.text, path: 'personal_missions_30.main.mission.mission.quest.separator' }),
            _.jsx(w, {
                className: Qa.arrow,
                path: 'personal_missions_30.common.card.arrow',
                width: '16rem',
                height: '16rem',
            }),
            _.jsx(w, {
                className: Qa.dots,
                path: 'personal_missions_30.common.card.dots',
                width: '48rem',
                height: '4rem',
            }),
        ],
    });
}
const Ua = {
    base: 'Quests_36d28d52',
    quest: 'Quests_quest_55d2c50',
    base__missions: 'Quests_base__missions_f09ce410',
    base__default: 'Quests_base__default_f09ce410',
    questSeparator: 'Quests_questSeparator_622bda04',
};
function qa({ cardType: e, mission: { allQuestsRequired: s, quests: a }, className: t }) {
    return _.jsx('div', {
        className: u(Ua.base, Ua[`base__${e}`], t),
        children: a.map((t, i) =>
            _.jsxs(
                p.Fragment,
                {
                    children: [
                        !s && i > 0 && _.jsx(Wa, { className: Ua.questSeparator }),
                        _.jsx($a, {
                            quest: t,
                            cardType: e,
                            singleQuest: 1 === a.length,
                            allQuestsRequired: s,
                            className: Ua.quest,
                        }),
                    ],
                },
                t.id,
            ),
        ),
    });
}
const Fa = { base: 'Rewards_1a8854f', reward: 'Rewards_reward_28325b8d', base__big: 'Rewards_base__big_405577a5' };
function Ya({ rewards: e, imageSize: s = ee.Small, className: a }) {
    return _.jsx('div', {
        className: u(Fa.base, Fa[`base__${s}`], a),
        children: e.map((e, a) => _.jsx('div', { className: Fa.reward, children: _.jsx(J, { ...ke(e, s) }) }, a)),
    });
}
const za = {
    base: 'Disabled_e625fb0e',
    text: 'Disabled_text_291ac5b3',
    base__missions: 'Disabled_base__missions_3cd47f61',
};
function Ga({ cardType: e = is.default }) {
    const s = O.resolve('strings');
    return _.jsxs('div', {
        className: u(za.base, za[`base__${e}`]),
        children: [
            _.jsx(w, { path: 'personal_missions_30.common.card.alert', width: '48rem', height: '48rem' }),
            _.jsx('div', {
                className: za.text,
                children: s.readOrEmpty('personal_missions_30.main.mission.text.alert'),
            }),
        ],
    });
}
const Ka = {
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
function Xa(e) {
    return e === ia.COMPLETED ? se.done : e === ia.LOCKED ? se.locked : void 0;
}
const Za = r.memo(
        r.forwardRef(function ({ index: e, mission: s }, a) {
            const t = O.resolve('strings'),
                i = s.missionStatus === ia.ACTIVE,
                n = s.missionStatus === ia.ACTIVE ? ee.Big : ee.Small,
                o = s.missionStatus === ia.LOCKED || s.missionStatus === ia.DISABLED,
                l = C(
                    Te.CUSTOM_SIMPLE,
                    r.useMemo(
                        () => ({
                            body: t.readOrEmpty(
                                `personal_missions_30.main.missions.card.tooltip.${s.missionStatus === ia.COMPLETED ? se.done : se.locked}`,
                            ),
                            resId: O.resolve('views').read((e) =>
                                e.mono.personal_missions_30.tooltips.param_tooltip('resId'),
                            ),
                        }),
                        [s.missionStatus, t],
                    ),
                );
            return _.jsxs('div', {
                ref: ae([a]),
                className: u(Ka.base, Ka[`base__${s.missionStatus}`]),
                children: [
                    _.jsx(pa, { ...s, cardType: is.missions, className: u(i && Ka.missionNumber) }),
                    _.jsx(te, {
                        disableMouse: !0,
                        selected: i,
                        status: Xa(s.missionStatus),
                        disabled: o,
                        className: Ka.content,
                        classNames: { wrapper: u(!o && Ka.cardWrapper), card: Ka.cardComponent },
                        children: _.jsx('div', {
                            className: Ka.card,
                            children: (() => {
                                switch (s.missionStatus) {
                                    case ia.ACTIVE:
                                    case ia.COMPLETED:
                                    case ia.LOCKED:
                                        return _.jsxs('div', {
                                            className: Ka.innerContent,
                                            children: [
                                                _.jsx(qa, { mission: s, className: Ka.quests, cardType: is.missions }),
                                                _.jsxs('div', {
                                                    className: Ka.footer,
                                                    children: [
                                                        s.maxProgressValue > 1 &&
                                                            _.jsx(ya, {
                                                                ...s,
                                                                cardIndex: e,
                                                                cardType: is.missions,
                                                                className: Ka.progress,
                                                            }),
                                                        _.jsx(Hs, { type: 'withoutAlpha', className: Ka.separator }),
                                                        _.jsx(Ya, {
                                                            rewards: s.rewards,
                                                            imageSize: n,
                                                            className: Ka.rewards,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        });
                                    case ia.DISABLED:
                                        return _.jsx(Ga, { cardType: is.missions });
                                    default:
                                        console.error(`Unexpected mission status: ${s.missionStatus}`);
                                }
                            })(),
                        }),
                    }),
                    s.missionStatus === ia.LOCKED &&
                        _.jsxs(_.Fragment, {
                            children: [
                                _.jsx('div', { className: Ka.brightLine }),
                                _.jsx('div', { className: Ka.shadowLine }),
                                _.jsx(w, {
                                    path: 'personal_missions_30.common.card.status_lock_icon',
                                    className: Ka.lockedIcon,
                                }),
                            ],
                        }),
                    Xa(s.missionStatus) && _.jsx('div', { className: Ka.tooltipZone, ...l }),
                ],
            });
        }),
    ),
    Ja = 'DraggingOverlay_599243d';
function et() {
    const e = K();
    return (ie(() => e.run(ne)), _.jsx('div', { className: Ja }));
}
const st = {
        base: 'ScrollableCards_cede7903',
        content: 'ScrollableCards_content_8c53892b',
        scroll: 'ScrollableCards_scroll_dc0445ca',
        button: 'ScrollableCards_button_189502f8',
        button__left: 'ScrollableCards_button__left_3baf8988',
        button__right: 'ScrollableCards_button__right_619f434e',
    },
    at = 'visible',
    tt = l(function ({ currentAnimationState: e }) {
        const { model: s } = gs(),
            { model: a } = Zs(),
            { breakpoint: t } = F(),
            i = Re(t.weight, z.medium) ? la : ca,
            n = s.activeOperationId.get(),
            o = a.computes.missionsByCategory(n),
            l = oe(o, (e) => e.missionStatus === ia.ACTIVE),
            c = r.useRef([]),
            d = r.useRef(null),
            m = r.useRef(null),
            { api: p } = re(),
            f = K(),
            h = le(),
            b = ce(p, _e.horizontal, void 0, { gapBeforeStart: 5 }),
            I = r.useCallback(
                function (e) {
                    const s = p.getWrapperSize(),
                        a = p.animationScroll.scrollPosition.get(),
                        t = c.current[e];
                    if (!t || !s) return;
                    const i = t.offsetLeft - s / 2 + t.offsetWidth / 2;
                    (0 === a && i < 0) || a === i || (h.play('bp_slide'), p.applyScroll(i));
                },
                [p, h],
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
                                ? (s.classList.add(at), a.classList.remove(at))
                                : e.offsetLeft > p.animationScroll.scrollPosition.get() + t
                                  ? (a.classList.add(at), s.classList.remove(at))
                                  : (a.classList.remove(at), s.classList.remove(at)));
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
            (void 0 !== l && I(l), h.play('carouselButton'), v.onClick());
        }
        function E() {
            (h.play('mouse-enter'), v.onMouseEnter());
        }
        return _.jsxs('div', {
            className: st.base,
            children: [
                _.jsx(de, {
                    areaClassName: st.scroll,
                    children: _.jsx('div', {
                        className: st.content,
                        children: o.map((e, s) => _.jsx(Za, { mission: e, index: s, ref: N }, e.currentMissionNumber)),
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
                                className: u(st.button, st.button__left, st.button__hidden),
                            }),
                            _.jsx(da, {
                                silent: !0,
                                ...v,
                                size: i,
                                ref: m,
                                arrowDirection: 'right',
                                onClick: x,
                                onMouseEnter: E,
                                className: u(st.button, st.button__right, st.button__hidden),
                            }),
                        ],
                    }),
                g.createPortal('dragging' === b.type && _.jsx(et, {}), document.body),
            ],
        });
    }),
    it = 'Missions_aa7824d8',
    nt = 'Missions_tabs_41232459',
    ot = 'Missions_tabs__disabled_44072e35',
    rt = 'Missions_category_a34a8a14',
    lt = 'Missions_separator_cf7f866c',
    ct = { opacity: 1, transform: 'translateY(0rem)' },
    dt = { opacity: 0, transform: 'translateY(-20rem)' },
    _t = l(function () {
        const { controls: e } = gs(),
            { model: s } = Zs(),
            { breakpoint: a } = F(),
            t = Re(a.weight, z.large),
            { animationInProgress: i } = bs(),
            n = c(ts, (e) => e.value),
            [o, l] = d(() => ({ from: { opacity: 0 } })),
            [p, g] = d(() => ({ from: { opacity: 0 } })),
            [f, h] = d(() => ({ from: { opacity: 0, transform: 'translateY(-20rem)' } })),
            [b, I] = d(() => ({ from: { opacity: 0, transform: 'translateY(20rem)' } }));
        return (
            S(() => {
                l.start({
                    opacity: 1,
                    config: { duration: 300, easing: y.easeOutCubic },
                    onRest: () => {
                        ls(
                            [
                                h.start({ ...ct, config: { duration: 300, easing: y.easeOutQuart } }),
                                I.start({ ...ct, config: { duration: 300, easing: y.easeOutQuart } }),
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
                className: it,
                children: [
                    _.jsx(q, {
                        active: s.missionsCategory.get(),
                        theme: ue.primary,
                        size: t ? me.small : me.large,
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
                                    h.start({
                                        ...dt,
                                        config: { duration: 400, easing: y.easeInQuart },
                                        onRest: () => {
                                            (a(),
                                                h.start({
                                                    ...ct,
                                                    config: { duration: 500, easing: y.easeOutQuart },
                                                    delay: 300,
                                                }),
                                                I.start({
                                                    ...ct,
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
                                            h.start({ ...dt, config: { duration: 400, easing: y.easeInQuart } }),
                                        ],
                                        () => {
                                            (a(),
                                                ls(
                                                    [
                                                        h.start({
                                                            ...ct,
                                                            config: { duration: 500, easing: y.easeOutQuart },
                                                            delay: 300,
                                                        }),
                                                        I.start({
                                                            ...ct,
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
                            children: _.jsx(q.Switcher, {
                                className: u(nt, i && ot),
                                children: Gs.map(({ id: e, label: s }) => _.jsx(ta, { id: e, label: s }, e)),
                            }),
                        }),
                    }),
                    _.jsxs(m.div, {
                        style: f,
                        children: [_.jsx(aa, { className: rt }), _.jsx(Hs, { type: 'withoutAlpha', className: lt })],
                    }),
                    _.jsx(m.div, {
                        style: b,
                        children: _.jsx(pe, { settings: us, children: _.jsx(tt, { currentAnimationState: n }) }),
                    }),
                ],
            })
        );
    });
var mt = ((e) => ((e.DAILY = 'daily'), (e.WEEKLY = 'weekly'), e))(mt || {}),
    ut = ((e) => (
        (e.DONE = 'done'),
        (e.IN_PROGRESS = 'inProgress'),
        (e.NOT_RECEIVED = 'notReceived'),
        (e.DEFAULT = 'default'),
        e
    ))(ut || {}),
    pt = ((e) => ((e.MAIN = 'main'), (e.OPERATION = 'operation'), (e.CAMPAIGN = 'campaign'), e))(pt || {}),
    gt = ((e) => (
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
    ))(gt || {});
function ft(e) {
    return Y(e, (e) => ({
        id: `quest_${e}`,
        questType: 'damage',
        questCondition: 'Kill 10 000 vehicles',
        summary: 'Kill them all',
    }));
}
(pt.MAIN,
    pt.OPERATION,
    pt.CAMPAIGN,
    ut.DONE,
    ut.DONE,
    ut.DONE,
    ut.DONE,
    ut.DONE,
    ut.DONE,
    ut.DONE,
    ut.DONE,
    ut.NOT_RECEIVED,
    ut.NOT_RECEIVED,
    ut.IN_PROGRESS,
    ut.DEFAULT,
    ut.DEFAULT,
    ut.DEFAULT,
    ut.DEFAULT);
const ht = [
    { name: 'style_3d' },
    { name: 'premium_universal' },
    { name: 'camouflage' },
    { name: 'credits', value: '250 000' },
];
(ia.ACTIVE, Le.ASSAULT, ft(2), ia.ACTIVE, Le.SNIPER, ft(2), ia.ACTIVE, Le.SUPPORT, ft(2), mt.DAILY, mt.WEEKLY);
(Pe.ACTIVE,
    Pe.AVAILABLE,
    Pe.UNAVAILABLE,
    Pe.COMPLETED,
    Pe.AVAILABLE,
    Pe.COMPLETED_WITH_HONORS,
    gt.AVAILABLE,
    Be.ASSEMBLING);
const bt = (e) =>
        e < Nt.completedMissions
            ? { status: ia.COMPLETED, currentProgressValue: 4 }
            : e === Nt.completedMissions
              ? { status: ia.ACTIVE, currentProgressValue: 2 }
              : e === Nt.completedMissions + 1
                ? { status: ia.DISABLED, currentProgressValue: 0 }
                : { status: ia.LOCKED, currentProgressValue: 0 },
    It = [
        { name: 'style_3d' },
        { name: 'premium_universal' },
        { name: 'camouflage' },
        { name: 'credits', value: '250 000' },
    ],
    Nt = { maximumMissions: 15, completedMissions: 3, maxProgressValue: 4 },
    vt = Y(Nt.maximumMissions, (e) => ({
        missionStatus: bt(e + 1).status,
        currentMissionNumber: e + 1,
        allQuestsRequired: ge(),
        currentProgressValue: bt(e + 1).currentProgressValue,
        maxProgressValue: Nt.maxProgressValue,
        rewards: It,
        quests: ft(fe(1, 2)),
    })),
    xt = {
        getter: he({
            missionsModel: {
                allMissions: [
                    {
                        operationId: 8,
                        operationName: 'Perfect strike',
                        minRequiredVehicle: 6,
                        maxRequiredVehicle: 10,
                        missionsCategorizations: [
                            { missionsCategory: Le.ASSAULT, missions: vt },
                            { missionsCategory: Le.SNIPER, missions: vt },
                            { missionsCategory: Le.SUPPORT, missions: vt },
                        ],
                    },
                    {
                        operationId: 9,
                        operationName: 'Perfect strike',
                        minRequiredVehicle: 6,
                        maxRequiredVehicle: 10,
                        missionsCategorizations: [
                            { missionsCategory: Le.ASSAULT, missions: vt },
                            { missionsCategory: Le.SNIPER, missions: vt },
                            { missionsCategory: Le.SUPPORT, missions: vt },
                        ],
                    },
                    {
                        operationId: 10,
                        operationName: 'Perfect strike',
                        minRequiredVehicle: 6,
                        maxRequiredVehicle: 10,
                        missionsCategorizations: [
                            { missionsCategory: Le.ASSAULT, missions: vt },
                            { missionsCategory: Le.SNIPER, missions: vt },
                            { missionsCategory: Le.SUPPORT, missions: vt },
                        ],
                    },
                ],
                missionsCategory: Le.ASSAULT,
            },
        }),
        controls: () => P,
    },
    Et = { context: 'model.missionsModel' };
function yt() {
    return _.jsx(Xs, { options: Et, mocks: xt, mode: 'real', children: _.jsx(_t, {}) });
}
const St = 'Background_af83c19a',
    Ot = 'Background_6cd490f5',
    Ct = 'Background_noise_c5b84c8b';
function wt({ className: e }) {
    return _.jsxs('div', {
        className: u(St, e),
        children: [_.jsx('div', { className: Ot }), _.jsx('div', { className: Ct })],
    });
}
const jt = { rewardWidth: 296, detailWidth: 380 },
    At = { rewardWidth: 248, detailWidth: 260 },
    Mt = 'done',
    Dt = 'inProgress';
const Tt = new Set([Pe.COMPLETED, Pe.COMPLETED_WITH_HONORS]),
    Lt = 'ProgressBar_13ab2776',
    Pt = 'ProgressBar_progressBar_f19231cf',
    Rt = 'ProgressBar_progressBackground_129fd0d3',
    kt = p.memo(function (e) {
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
            className: Lt,
            ...s,
            children: _.jsx(be, {
                size: 'medium',
                value: e.value,
                maxValue: e.maxValue,
                className: Pt,
                classNames: { background: Rt },
                children: _.jsx(Ie, { initValue: e.prevValue, initMaxValue: e.maxValue }),
            }),
        });
    }),
    Vt = 'Divider_657ed92',
    Bt = 'Divider_separator_5e4040d8',
    Ht = 'Divider_base__completed_76b1f722',
    $t = 'Divider_point_cccdd49a';
function Qt({ operationState: e, maxPoint: s, className: a }) {
    const t = Tt.has(e);
    return _.jsxs('div', {
        className: u(Vt, t && Ht, a),
        children: [_.jsx('div', { className: Bt }), !t && _.jsx('div', { className: $t, children: s })],
    });
}
const Wt = {
    border: 'ContentWrapper_border_e0f7c2c',
    border__bottom: 'ContentWrapper_border__bottom_e728cfac',
    border__top: 'ContentWrapper_border__top_89652dc7',
};
function Ut({ children: e }) {
    return _.jsxs(_.Fragment, {
        children: [
            _.jsx(Hs, { className: u(Wt.border, Wt.border__top) }),
            e,
            _.jsx(Hs, { className: u(Wt.border, Wt.border__bottom) }),
        ],
    });
}
const qt = 'InProgress_status_a90e1754',
    Ft = 'InProgress_point_12655571';
function Yt({ earnedPoint: e, id: s, maxPoint: a }) {
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
    return _.jsx(Ut, {
        children: _.jsx(D, {
            ...i,
            className: qt,
            path: 'personal_missions_30.main.progression.detail.status.active',
            params: {
                icon: _.jsx(w, {
                    path: 'personal_missions_30.points.c_24x24',
                    width: '24rem',
                    height: '24rem',
                    className: Ft,
                }),
                detailName: t.readOrEmpty(`personal_missions_30.detail.name.${s}`),
                earnedPoint: e,
                maxPoint: a,
            },
        }),
    });
}
const zt = 'NotReceived_wrapper_4d14069c',
    Gt = 'NotReceived_button_75c05936',
    Kt = 'NotReceived_buttonContent_bee7d2fd',
    Xt = 'NotReceived_glareAttention_c2d53c79',
    Zt = l(function ({ firstElementByStatus: e, id: s, onClaim: a }) {
        const { controls: t } = gs(),
            i = O.resolve('strings'),
            { animationInProgress: n } = bs(),
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
        return _.jsx(Ut, {
            children: _.jsxs('div', {
                className: zt,
                children: [
                    _.jsx(j, {
                        disabled: !e,
                        theme: 'primary',
                        size: 'small',
                        className: Gt,
                        classNames: { content: Kt },
                        ...o,
                        onClick: function () {
                            (o.onClick(), n || a(s));
                        },
                        children: i.readOrEmpty('personal_missions_30.main.progression.button'),
                    }),
                    e && _.jsx(m.div, { style: l, className: Xt }),
                ],
            }),
        });
    }),
    Jt = {
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
    ei = l(function ({ index: e, detail: s, detailsLength: a, className: t }) {
        const i = O.resolve('strings'),
            n = O.resolve('videos'),
            o = O.resolve('sounds'),
            { model: l, controls: c } = gs(),
            p = l.computes.activeOperation(),
            g = l.currentState.get(),
            f = l.computes.requiredDetailsPoint(),
            [h, b] = r.useState(s),
            I = l.computes.firstDetailIndexByStatus(ut.NOT_RECEIVED) === e,
            N = l.activeDetailId.get(),
            v = h.status === ut.DONE,
            x = N === h.id,
            { animationInProgress: E } = bs(),
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
                h.status !== s.status
                    ? j.start({
                          opacity: 0,
                          onRest: () => {
                              (b({ ...s }), j.start({ opacity: 1, delay: 150 }));
                          },
                      })
                    : h.earnedPoint !== s.earnedPoint && b({ ...s });
            }, [j, s, h.status, h.earnedPoint]),
            p && f)
        )
            return _.jsxs('div', {
                'data-name': 'Detail',
                className: u(
                    Jt.base,
                    Jt[`base__${h.status}`],
                    Jt[`base__${p.operationState}`],
                    x && v && Jt.base__selected,
                    I && Jt.base__firstNotReceived,
                    t,
                ),
                children: [
                    0 === e &&
                        _.jsx(Qt, {
                            maxPoint: 0,
                            operationState: p.operationState,
                            className: u(Jt.divider, Jt.divider__first),
                        }),
                    _.jsx('div', { className: Jt.background }),
                    _.jsx('div', { className: Jt.glow }),
                    _.jsx(m.div, {
                        style: S,
                        className: Jt.wrapper,
                        children:
                            I &&
                            _.jsx(Ne, {
                                src: n.readOrEmpty('personal_missions_30.main.detail_glow'),
                                className: Jt.video,
                                loop: !0,
                                autoplay: !0,
                            }),
                    }),
                    _.jsxs('div', {
                        className: Jt.content,
                        children: [
                            _.jsx('div', {
                                className: Jt.detailName,
                                children: i.readOrEmpty(`personal_missions_30.detail.name.${h.id}`),
                            }),
                            _.jsx(w, {
                                path: `personal_missions_30.vehicle_detail.c_400x150.${h.id}`,
                                className: Jt.detail,
                                ...(!x && !v && y),
                                onClick: () => M(h.id),
                                onMouseEnter: function () {
                                    (!x && !v && y.onMouseEnter(), ((v && !x) || I) && o.play('bp_improved_reward'));
                                },
                            }),
                            _.jsx(w, { path: 'personal_missions_30.main.progression.arrow', className: Jt.arrow }),
                            _.jsx(w, {
                                path: 'personal_missions_30.main.progression.preview_icon',
                                className: Jt.preview,
                            }),
                            _.jsx(m.div, {
                                style: S,
                                className: u(Jt.wrapper, h.status === ut.DONE && Jt.wrapper__disabled),
                                children: (() => {
                                    switch (h.status) {
                                        case ut.IN_PROGRESS:
                                            return _.jsx(Yt, { ...h });
                                        case ut.NOT_RECEIVED:
                                            return _.jsx(Zt, { id: h.id, firstElementByStatus: I, onClaim: M });
                                    }
                                })(),
                            }),
                            _.jsx(D, {
                                path: 'personal_missions_30.main.progression.detailNumber',
                                className: u(
                                    Jt.detailNumber,
                                    h.status === ut.IN_PROGRESS && Jt.detailNumber__inProgress,
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
                    _.jsx(Qt, {
                        maxPoint: f[e],
                        className: u(Jt.divider, e === a - 1 && Jt.divider__last),
                        operationState: p.operationState,
                    }),
                ],
            });
    }),
    si = 'Progress_dc1d47d2',
    ai = 'Progress_wrapper_95c599d8';
function ti(e, s, a, t = []) {
    const i = t.findIndex((e) => e >= s),
        n = t[i];
    if (0 === s || -1 === i || void 0 === n) return s;
    const o = a[i];
    if (!o) return 0;
    return i * e + ((s - (n - o.maxPoint)) / o.maxPoint) * e;
}
const ii = l(
        r.forwardRef(function ({ className: e }, s) {
            const { model: a } = gs(),
                t = a.computes.activeOperation(),
                i = a.computes.requiredDetailsPoint();
            if (!t) return;
            const { operationId: n, details: o, maxValue: r, value: l, deltaFrom: c, operationState: d } = t,
                m = o.length,
                p = r / m,
                g = ti(p, l, o, i),
                f = ti(p, c, o, i);
            return _.jsxs('div', {
                className: u(si, e),
                ref: s,
                children: [
                    !Tt.has(d) &&
                        _.jsx('div', {
                            className: ai,
                            children: _.jsx(kt, { value: g, prevValue: f, maxValue: r }, n),
                        }),
                    o.map((e, s) => _.jsx(ei, { index: s, detail: e, detailsLength: m }, e.id)),
                ],
            });
        }),
    ),
    ni = {
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
function oi({ reward: { completedTasks: e, items: s, rewardsType: a, tasksNumber: t }, index: i }) {
    const n = O.resolve('strings'),
        o = e === t ? Mt : Dt,
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
        className: u(ni.base, ni[`base__${o}`], 0 === i && ni.status__hidden),
        children: [
            _.jsx(D, { ...l, className: ni.title, path: `personal_missions_30.main.progression.reward.title.${a}` }),
            _.jsx('div', {
                className: ni.items,
                children: s.map((e, s) =>
                    _.jsx('div', { className: ni.reward, children: _.jsx(J, { ...ke(e, ee.Big) }) }, s),
                ),
            }),
            _.jsx('div', {
                className: ni.status,
                children: (() => {
                    switch (o) {
                        case Dt:
                            return (
                                a !== pt.MAIN &&
                                _.jsx(D, {
                                    path: `personal_missions_30.main.progression.reward.status.inProgress.${a}`,
                                    params: {
                                        completedTasks: _.jsx('div', { className: ni.bold, children: e }),
                                        tasksNumber: _.jsx('div', { className: ni.bold, children: t }),
                                    },
                                })
                            );
                        case Mt:
                            return _.jsxs(_.Fragment, {
                                children: [
                                    _.jsx(w, {
                                        path: 'personal_missions_30.main.progression.arrow__small',
                                        height: '24rem',
                                        width: '24rem',
                                        className: ni.icon,
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
const ri = 'MainReward_fc423f8a',
    li = 'MainReward_vehicle_79e7db29',
    ci = 'MainReward_vehicleInfo_567bd76c',
    di = 'MainReward_vehicleName_2f6f9e18',
    _i = 'MainReward_preview_ac8bfcb1',
    mi = 'MainReward_button_10f377d',
    ui = 'MainReward_buttonContent_e44cd18e',
    pi = l(function ({ className: e }) {
        const s = O.resolve('strings'),
            a = O.resolve('sounds'),
            { model: t, controls: i } = gs(),
            n = t.computes.activeOperation(),
            o = t.activeOperationId.get(),
            { isElite: r, vehicleLvl: l, vehicleType: c, vehicleShortName: d } = t.vehicle.get(),
            { animationInProgress: m } = bs();
        function p() {
            m ||
                ((null == n ? void 0 : n.vehicleInHangar)
                    ? i.showVehicleInHangar()
                    : (a.play('yes'), i.showVehiclePreview()));
        }
        return _.jsxs('div', {
            className: u(ri, e),
            'data-name': 'MainReward',
            children: [
                _.jsx(w, { className: li, path: `personal_missions_30.operation_vehicle.c_296x222.vehicle_3_${o}` }),
                (null == n ? void 0 : n.vehicleInHangar)
                    ? _.jsx(j, {
                          theme: 'secondary',
                          size: 'small',
                          className: mi,
                          classNames: { content: ui },
                          onClick: p,
                          children: s.readOrEmpty('personal_missions_30.main.progression.reward.previewButton'),
                      })
                    : _.jsx(w, {
                          path: 'personal_missions_30.main.progression.preview_icon',
                          width: '100rem',
                          height: '100rem',
                          className: _i,
                          onClick: p,
                          onMouseEnter: function () {
                              m || a.play('highlight');
                          },
                      }),
                _.jsxs(ve, {
                    className: ci,
                    children: [
                        _.jsx(ve.Level, { className: di, value: l, numberType: 'roman' }),
                        xe(c) && _.jsx(ve.Type, { type: c, premium: r }),
                        _.jsx(ve.Name, { className: di, children: d }),
                    ],
                }),
            ],
        });
    }),
    gi = 'Rewards_855b83d9',
    fi = 'Rewards_reward_17816b38',
    hi = 'Rewards_divider_f047eb1d',
    bi = 'Rewards_mainReward_feb5fd02',
    Ii = l(
        r.forwardRef(function ({ className: e }, s) {
            const { model: a } = gs(),
                t = a.computes.activeOperation();
            if (t)
                return _.jsxs('div', {
                    ref: s,
                    className: u(gi, e),
                    children: [
                        _.jsx('div', { className: fi, children: _.jsx(pi, { className: bi }) }),
                        t.rewards.map((e, s) =>
                            _.jsx(
                                'div',
                                {
                                    children: _.jsxs('div', {
                                        className: fi,
                                        children: [
                                            s > 0 &&
                                                _.jsx(w, {
                                                    path: 'personal_missions_30.main.progression.divider',
                                                    width: '3rem',
                                                    height: '110rem',
                                                    className: hi,
                                                }),
                                            _.jsx(oi, { index: s, reward: e }),
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
    Ni = {
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
    vi = l(function ({ className: e }) {
        const s = r.useRef(null),
            a = r.useRef(null),
            { api: t } = re(),
            i = K(),
            n = K(),
            { animationInProgress: o } = bs(),
            l = c(ts, (e) => e.value),
            d = Ee(l),
            m = le(),
            [p, f] = r.useState('hidden'),
            h = ce(t, _e.horizontal, void 0, { gapBeforeStart: 5 }),
            { model: b } = gs(),
            I = b.computes.activeOperation(),
            N = b.activeOperationId.get(),
            v = b.computes.firstDetailIndexByStatus(ut.NOT_RECEIVED),
            E = b.computes.firstDetailIndexByStatus(ut.IN_PROGRESS),
            y = -1 === v ? E : v,
            { breakpoint: S } = F(),
            w = Re(S.weight, z.large) ? At : jt,
            j = G(w.rewardWidth),
            A = G(w.detailWidth),
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
            void 0 !== y && (m.play('carouselButton'), M.onClick(), P(y));
        }
        function L() {
            (m.play('mouse-enter'), M.onMouseEnter());
        }
        function P(e) {
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
            const s = b.computes.nextActiveDetail(e);
            s &&
                s.index !== v &&
                s.index !== E &&
                (ts.send({ type: 'HIDE_DETAIL_INFO', detailId: s.detail.id, action: os }), P(s.index));
        }
        return (
            T(x.ARROW_LEFT, () => R(x.ARROW_LEFT)),
            T(x.ARROW_RIGHT, () => R(x.ARROW_RIGHT)),
            r.useEffect(() => {
                void 0 !== y && (l !== as || (d !== Qe && void 0 !== d) || P(y));
            }, [N, l]),
            r.useEffect(() => {
                const e = () => {
                    const e = s.current,
                        i = a.current,
                        [n, o] = t.getBounds(),
                        r = t.animationScroll.scrollPosition.get(),
                        l = t.getWrapperSize();
                    if (!e || !i || !l) return;
                    if (I && !Tt.has(I.operationState)) {
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
                className: u(Ni.base, Ni[`base__${null == I ? void 0 : I.operationState}`], Ni[`base__${p}`], e),
                children: [
                    _.jsx('div', { className: u(Ni.shadow, Ni.shadow__left) }),
                    _.jsx('div', { className: u(Ni.shadow, Ni.shadow__right) }),
                    _.jsxs('div', {
                        className: Ni.wrapper,
                        children: [
                            _.jsx(wt, { className: Ni.background }),
                            _.jsx(de, {
                                className: Ni.scroll,
                                areaClassName: Ni.scrollArea,
                                barClassNames: { base: Ni.bar },
                                children: _.jsxs('div', {
                                    className: u(Ni.content, o && Ni.content__disabled),
                                    children: [
                                        _.jsx(ii, { ref: a, className: Ni.progressbar }),
                                        _.jsx(Ii, { ref: s, className: Ni.rewards }),
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
                        onMouseEnter: L,
                        className: u(Ni.arrowButton, Ni.arrowButton__left, 'left' === p && Ni.arrowButton__visible),
                    }),
                    _.jsx(da, {
                        silent: !0,
                        size: ra,
                        arrowDirection: 'right',
                        ...M,
                        onClick: D,
                        onMouseEnter: L,
                        className: u(Ni.arrowButton, Ni.arrowButton__right, 'right' === p && Ni.arrowButton__visible),
                    }),
                    g.createPortal('dragging' === h.type && _.jsx(et, {}), document.body),
                ],
            })
        );
    }),
    xi = new Set([
        gt.PRECEDING_OPERATION_NOT_COMPLETED,
        gt.PAUSED,
        gt.NEXT_OPERATION_AVAILABLE,
        gt.COMPLETED,
        gt.AVAILABLE,
    ]),
    Ei = new Set([gt.REQUIRES_VEHICLE, gt.PRECEDING_OPERATION_NOT_COMPLETED, gt.VEHICLE_IS_IN_BATTLE]),
    yi = {
        [gt.REQUIRES_VEHICLE]: 'lock_closed',
        [gt.PRECEDING_OPERATION_NOT_COMPLETED]: 'lock_closed',
        [gt.VEHICLE_IS_IN_BATTLE]: 'lock_closed',
        [gt.PAUSED]: 'pause',
        [gt.NEXT_OPERATION_AVAILABLE]: 'checkMark',
        [gt.COMPLETED]: 'checkMark',
        [gt.AVAILABLE]: null,
        [gt.ACTIVE]: null,
        [gt.CAMPAIGN_FINISHED]: null,
        [gt.NOT_ALL_COMPLETED]: null,
        [gt.NOT_ALL_COMPLETED_WITH_HONOR]: null,
    },
    Si = {
        base: 'OperationStatus_7bc3be55',
        base__hasGradient: 'OperationStatus_base__hasGradient_3d20021',
        icon: 'OperationStatus_icon_e0618634',
        button: 'OperationStatus_button_7ab14b50',
        glareAttention: 'OperationStatus_glareAttention_18133b71',
        buttonContent: 'OperationStatus_buttonContent_664edec7',
    },
    Oi = new Set([gt.COMPLETED, gt.PAUSED, gt.AVAILABLE]),
    Ci = l(function ({ currentAnimationState: e, className: s }) {
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
            g = yi[l],
            h = l === gt.COMPLETED ? 'secondary' : 'primary',
            { statusStyle: b } = bs(),
            [I, N] = d(() => ({
                from: { transform: 'translate(10%, -220%) rotate(30deg)' },
                to: { transform: 'translate(-60%, 30%) rotate(30deg)' },
                loop: !0,
                delay: l === gt.NEXT_OPERATION_AVAILABLE ? 15e3 : 3e3,
                config: { duration: 1e3, easing: f.easeOutCirc },
            }));
        return _.jsxs(m.div, {
            style: b,
            className: u(Si.base, Ei.has(l) && Si.base__hasGradient, s),
            children: [
                g &&
                    _.jsx('div', {
                        className: Si.icon,
                        style: {
                            backgroundImage: `url(${t.readOrEmpty(`personal_missions_30.main.menu.icons.solid.${g}`)})`,
                        },
                    }),
                _.jsx(D, {
                    path: `personal_missions_30.main.operation.status.${l}`,
                    params: (() => {
                        switch (l) {
                            case gt.REQUIRES_VEHICLE:
                                return { requiredVehicleLevel: V(r) };
                            case gt.PAUSED:
                            case gt.COMPLETED:
                            case gt.AVAILABLE:
                                return { currentOperationName: n };
                            case gt.NEXT_OPERATION_AVAILABLE:
                                return { currentOperationName: n, nextOperationName: o };
                            default:
                                return {};
                        }
                    })(),
                }),
                xi.has(l) &&
                    p !== Pe.LOCKED &&
                    _.jsxs('div', {
                        className: Si.button,
                        children: [
                            _.jsx(j, {
                                onClick: function () {
                                    e === as &&
                                        (Oi.has(l)
                                            ? ts.send({ type: 'UPDATE_STATUS' })
                                            : ts.send({ type: 'SWITCH_OPERATION', operationId: c }));
                                },
                                theme: h,
                                size: 'small',
                                classNames: { content: u(Si.buttonContent, Si[`buttonContent__${h}`]) },
                                children: a.readOrEmpty(`personal_missions_30.main.operation.button.${l}`),
                            }),
                            (l === gt.AVAILABLE || l === gt.NEXT_OPERATION_AVAILABLE) &&
                                _.jsx(m.div, { style: I, className: Si.glareAttention }),
                        ],
                    }),
            ],
        });
    }),
    wi = {
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
    ji = {
        [Pe.COMPLETED_WITH_HONORS]: 'checkMark_double',
        [Pe.COMPLETED]: 'checkMark',
        [Pe.ACTIVE]: 'triangularFlag',
        [Pe.UNAVAILABLE]: 'lock_closed',
        [Pe.AVAILABLE]: 'lock_open',
        [Pe.LOCKED]: 'lock_closed',
    };
function Ai({ state: e, selected: s, className: a }) {
    const t = O.resolve('strings');
    return _.jsxs('div', {
        className: u(wi.base, wi[`base__${e}`], s ? wi.base__selected : wi.base__textHidden, a),
        children: [
            _.jsx(w, { path: `personal_missions_30.main.menu.icons.${ji[e]}`, className: wi.icon }),
            _.jsx('div', {
                className: wi.text,
                children: t.readOrEmpty(`personal_missions_30.main.menuItem.state.${e}`),
            }),
        ],
    });
}
const Mi = 'VehicleName_c038d9d8',
    Di = 'VehicleName_name_13a273f',
    Ti = 'VehicleName_playVideoButton_10de3bdb',
    Li = l(function ({ operationName: e }) {
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
            className: Mi,
            children: [
                _.jsx('div', { className: Di, children: e }),
                _.jsx(w, {
                    className: Ti,
                    path: 'personal_missions_30.main.menu.icons.solid.video',
                    width: 32,
                    height: 32,
                    ...i,
                    onClick: function () {
                        (t.play('yes'), s.playIntroVideoClick(), i.onClick());
                    },
                    onMouseEnter: function () {
                        (i.onMouseEnter(), t.play('highlight'));
                    },
                }),
            ],
        });
    }),
    Pi = {
        base: 'MenuItem_d36069b6',
        base__selected: 'MenuItem_base__selected_b91feb1b',
        wrapper: 'MenuItem_wrapper_d941deee',
        vehicleImage: 'MenuItem_vehicleImage_455d92b7',
        base__unavailable: 'MenuItem_base__unavailable_28be5e00',
        base__locked: 'MenuItem_base__locked_28be5e00',
        infoBox: 'MenuItem_infoBox_effb61f3',
        vehicleName: 'MenuItem_vehicleName_a562c8af',
        state: 'MenuItem_state_b65b146b',
    };
function Ri({ state: e, operationId: s, operationIcon: a, operationName: t, selected: i }) {
    const n = O.resolve('strings'),
        o = O.resolve('sounds'),
        l = ye(
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
        d = h(e, {
            initial: { opacity: 1 },
            from: { opacity: 0 },
            enter: {
                opacity: 1,
                onStart() {
                    e === Pe.ACTIVE && o.play('gui_hangar_ammunition_panel_removed_dk');
                },
            },
            leave: { opacity: 0 },
            config: { duration: 200 },
            exitBeforeEnter: !0,
        });
    return _.jsx('div', {
        className: u(Pi.base, Pi[`base__${e}`], i && Pi.base__selected),
        children: _.jsxs('div', {
            className: Pi.wrapper,
            ...(e === Pe.LOCKED ? c : l),
            children: [
                _.jsx(w, {
                    path: `personal_missions_30.operation_vehicle.c_150x100.${a}`,
                    className: Pi.vehicleImage,
                    onMouseEnter: function () {
                        i || o.play('highlight');
                    },
                    onClick: function () {
                        i || o.play('tabs');
                    },
                }),
                _.jsxs('div', {
                    className: Pi.infoBox,
                    children: [
                        _.jsx('div', { className: Pi.vehicleName, children: _.jsx(Li, { operationName: t }) }),
                        d((e, s) =>
                            _.jsx(m.div, {
                                style: e,
                                children: _.jsx(Ai, { selected: i, state: s, className: Pi.state }),
                            }),
                        ),
                    ],
                }),
            ],
        }),
    });
}
const ki = 'Menu_f1a51291',
    Vi = 'Menu_list_bb43d3a9',
    Bi = 'Menu_status_3546b8c6',
    Hi = 'Menu_chevron_64fd0b8c',
    $i = new Set([gt.ACTIVE, gt.NOT_ALL_COMPLETED_WITH_HONOR, gt.NOT_ALL_COMPLETED, gt.CAMPAIGN_FINISHED]),
    Qi = l(function ({ className: e }) {
        const { model: s } = gs(),
            a = s.menuItems.get(),
            { status: t } = s.status.get(),
            i = s.activeOperationId.get(),
            n = c(ts, (e) => e.value),
            { menuStyle: o } = bs();
        return _.jsxs(m.div, {
            style: o,
            className: u(ki, e),
            children: [
                _.jsx('div', {
                    className: Vi,
                    children: Se(a, (e, s) =>
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
                                                    s !== Pe.LOCKED &&
                                                    n === as &&
                                                    i !== a &&
                                                    ts.send({ type: 'SWITCH_OPERATION', operationId: a })
                                                )
                                            );
                                            var s, a;
                                        },
                                        children: _.jsx(Ri, { ...e, selected: i === e.operationId }),
                                    }),
                                    s !== a.length - 1 &&
                                        _.jsx(w, {
                                            path: 'personal_missions_30.main.menu.icons.chevron_right',
                                            width: 10,
                                            height: 26,
                                            className: Hi,
                                        }),
                                ],
                            },
                            e.operationId,
                        ),
                    ),
                }),
                !$i.has(t) && _.jsx(Ci, { currentAnimationState: n, className: Bi }),
            ],
        });
    }),
    Wi = 'Completed_f9b3442',
    Ui = 'Completed_image_68376a7c',
    qi = 'Completed_title_53a638e0',
    Fi = 'Completed_description_dd74aea4',
    Yi = 'Completed_button_2f65c2e1',
    zi = 'Completed_operation_681298f',
    Gi = 'Completed_glow_a9f265a3',
    Ki = 'Completed_rays_8566affd',
    Xi = l(function ({ className: e }) {
        const s = O.resolve('strings'),
            { model: a } = gs(),
            { currentOperationName: t, nextOperationName: i, operationIdToPerform: n, status: o } = a.status.get(),
            r = a.computes.operationStateToPerform(n),
            l = a.campaignName.get(),
            { breakpoint: c } = F(),
            d = Re(c.weight, z.large) ? Oe.small : Oe.medium,
            { completedStateStyle: p, animationInProgress: g } = bs();
        return _.jsxs(m.div, {
            style: p,
            className: u(Wi, e),
            children: [
                _.jsx('div', { className: Gi }),
                _.jsx('div', { className: Ki }),
                _.jsx(w, {
                    className: Ui,
                    path: 'personal_missions_30.campaign_selector.done_160',
                    width: '160rem',
                    height: '160rem',
                    adaptive: {
                        large: { width: 220, height: 220, path: 'personal_missions_30.campaign_selector.done_220' },
                    },
                }),
                _.jsx('div', { className: qi, children: s.readOrEmpty('personal_missions_30.main.complete.title') }),
                _.jsx(D, {
                    className: Fi,
                    path: `personal_missions_30.main.complete.description.${o}`,
                    params: {
                        currentOperationName: _.jsx('span', { className: zi, children: t }),
                        nextOperationName: _.jsx('span', { className: zi, children: i }),
                        campaignName: _.jsx('span', { className: zi, children: l }),
                    },
                }),
                o !== gt.CAMPAIGN_FINISHED &&
                    r !== Pe.LOCKED &&
                    _.jsx(j, {
                        className: Yi,
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
    Zi = 'Completed_cc94136f',
    Ji = 'Completed_image_3b32a21f',
    en = 'Completed_text_3d00c33a';
function sn({ missionCategory: e }) {
    const s = O.resolve('strings');
    return _.jsxs('div', {
        className: Zi,
        children: [
            _.jsx(w, {
                className: Ji,
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
                        Ce,
                        {
                            className: en,
                            text: s,
                            params: { missionType: _.jsx(D, { path: `personal_missions_30.common.category.${e}` }) },
                        },
                        s,
                    ),
                ),
        ],
    });
}
function an(e, s = 0) {
    return 100 * (e + s) + 20 * e;
}
const tn = 'Title_1676083a',
    nn = 'Title_text_3a1c405f',
    on = 'Title_image_899d070e';
function rn({ missionCategory: e }) {
    const s = O.resolve('strings');
    return _.jsxs('div', {
        className: tn,
        children: [
            _.jsx(w, {
                path: `personal_missions_30.category.c_32x32.${e}`,
                width: '32rem',
                height: '32rem',
                adaptive: {
                    medium: { width: 36, height: 36, path: `personal_missions_30.category.c_36x36.${e}` },
                    extraLarge: { width: 48, height: 48, path: `personal_missions_30.category.c_48x48.${e}` },
                },
                className: on,
            }),
            _.jsx('div', { className: nn, children: s.readOrEmpty(`personal_missions_30.common.category.${e}`) }),
        ],
    });
}
const ln = {
    base: 'VehicleTypes_54108783',
    image: 'VehicleTypes_image_41f6ac8c',
    base__assault: 'VehicleTypes_base__assault_8f698c7c',
    base__support: 'VehicleTypes_base__support_8f698c7c',
    base__sniper: 'VehicleTypes_base__sniper_8f698c7c',
    line: 'VehicleTypes_line_d3555d32',
};
function cn({ missionCategory: e, className: s }) {
    return _.jsxs('div', {
        className: u(ln.base, ln[`base__${e}`], s),
        children: [
            _.jsx('div', { className: ln.line }),
            _.jsx(w, { path: `personal_missions_30.common.card.${e}_types`, className: ln.image }),
            _.jsx('div', { className: ln.line }),
        ],
    });
}
const dn = 'DefaultCard_2c35f6e',
    _n = 'DefaultCard_content_ac73ae55',
    mn = 'DefaultCard_cardWrapper_e41c5beb',
    un = 'DefaultCard_card_43ca4f26',
    pn = 'DefaultCard_header_7ac329f8',
    gn = 'DefaultCard_vehicleTypes_c0edf390',
    fn = 'DefaultCard_innerContent_9d3b73d1',
    hn = 'DefaultCard_footer_93929a8f',
    bn = 'DefaultCard_quests_2aaa2468',
    In = 'DefaultCard_separator_fafec470',
    Nn = 'DefaultCard_rewards_14dfa3b1',
    vn = ['currentMissionNumber', 'currentProgressValue', 'missionStatus'],
    xn = l(function ({ index: e, mission: s }) {
        const a = O.resolve('views'),
            t = O.resolve('sounds'),
            { controls: i } = gs(),
            n = c(ts, (e) => e.value),
            [o, l] = r.useState(s),
            u = U({
                contentId: a.read((e) => e.mono.personal_missions_30.tooltips.missions_category_tooltip('resId')),
                args: { category: o.missionCategory },
            }),
            [p, g] = d(() => ({ from: { opacity: 0, transform: 'translateY(20rem)' } })),
            h = r.useMemo(
                () => vn.some((e) => o[e] !== s[e]),
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
                        delay: an(e),
                    });
            }),
            r.useEffect(() => {
                n === Qe || (s.missionStatus === ia.ACTIVE && o.missionStatus === ia.LOCKED)
                    ? l(s)
                    : h &&
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
                                      delay: an(e, 3),
                                  }));
                          },
                      });
            }, [g, n, e, s, h, o.missionStatus]),
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
                                delay: an(e, 3),
                            }));
                }
            }, [g, n, e]),
            _.jsxs(m.div, {
                style: p,
                className: dn,
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
                    _.jsx(te, {
                        className: _n,
                        classNames: { wrapper: mn },
                        multiple: !0,
                        children: _.jsxs('div', {
                            className: un,
                            children: [
                                _.jsxs('div', {
                                    className: pn,
                                    ...u,
                                    children: [
                                        _.jsx(rn, { missionCategory: o.missionCategory }),
                                        _.jsx(cn, { missionCategory: o.missionCategory, className: gn }),
                                    ],
                                }),
                                (() => {
                                    switch (o.missionStatus) {
                                        case ia.ACTIVE:
                                        case ia.LOCKED:
                                            return _.jsxs('div', {
                                                className: fn,
                                                children: [
                                                    _.jsx(qa, { mission: o, className: bn, cardType: is.default }),
                                                    _.jsxs('div', {
                                                        className: hn,
                                                        children: [
                                                            o.maxProgressValue > 1 &&
                                                                _.jsx(ya, {
                                                                    cardIndex: e,
                                                                    cardType: is.default,
                                                                    currentProgressValue: o.currentProgressValue,
                                                                    maxProgressValue: o.maxProgressValue,
                                                                }),
                                                            _.jsx(Hs, { type: 'withoutAlpha', className: In }),
                                                            _.jsx(Ya, { rewards: o.rewards, className: Nn }),
                                                        ],
                                                    }),
                                                ],
                                            });
                                        case ia.DISABLED:
                                            return _.jsx(Ga, {});
                                        case ia.COMPLETED:
                                            return _.jsx(sn, { missionCategory: o.missionCategory });
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
    En = {
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
    yn = l(function ({
        additionalMission: { currentPoints: e, maxPoints: s, type: a },
        operationState: t,
        progressHidden: i,
        className: n,
    }) {
        const o = O.resolve('strings'),
            { model: l, controls: d } = gs(),
            { status: m } = l.status.get(),
            p = t === Pe.ACTIVE && m !== gt.PAUSED && !i,
            g = p && e === s,
            [f, h] = r.useState({ currentPoints: e, maxPoints: s, completed: g, progressShown: p }),
            { animationInProgress: b } = bs(),
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
                (I !== ss && I !== Qe) || h({ currentPoints: e, maxPoints: s, completed: g, progressShown: p });
            }, [I, g, e, s, p]),
            r.useEffect(() => {
                (f.currentPoints === e && f.progressShown === p) ||
                    I !== as ||
                    !p ||
                    ts.send({ type: 'HIDE_ADDITIONAL_MISSIONS' });
            }, [I, e, p, f.currentPoints, f.progressShown]),
            _.jsx(te, {
                className: u(En.base, f.completed && En.base__completed, En[`base__${a}`]),
                classNames: { wrapper: n },
                onClick: function () {
                    d.openAdditionalMission();
                },
                status: f.completed ? se.done : void 0,
                children: _.jsxs('div', {
                    className: En.wrapper,
                    children: [
                        _.jsx('div', {
                            className: En.title,
                            children: o.readOrEmpty(`personal_missions_30.main.additionalMission.title.${a}`),
                        }),
                        _.jsx(Hs, { type: 'withoutAlpha', className: En.separator }),
                        _.jsxs('div', {
                            className: En.content,
                            children: [
                                _.jsxs('div', {
                                    className: En.status,
                                    ...N,
                                    children: [
                                        _.jsx(w, {
                                            path: `personal_missions_30.main.additional_card.${a}`,
                                            className: En.image,
                                        }),
                                        f.progressShown &&
                                            _.jsx(D, {
                                                className: En.progress,
                                                path: 'personal_missions_30.main.mission.counter',
                                                params: {
                                                    currentValue: _.jsx('span', {
                                                        className: En.currentValue,
                                                        children: f.currentPoints,
                                                    }),
                                                    maxValue: s,
                                                },
                                            }),
                                    ],
                                }),
                                _.jsx('div', {
                                    children: _.jsx(D, {
                                        className: En.text,
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
    Sn = 'Missions_74bb97b6',
    On = 'Missions_additionalCardsWrapper_8e829c9b',
    Cn = 'Missions_additionalCard_8b2b9913',
    wn = l(function ({ className: e }) {
        const { model: s } = gs(),
            { additionalCardStyle: a } = bs(),
            t = s.computes.activeOperation();
        if (!t) return null;
        const i = t.additionalMissions.some((e) => e.isProgressHidden);
        return _.jsxs('div', {
            className: u(Sn, e),
            children: [
                t.missions.map((e, s) => _.jsx(xn, { mission: e, index: s }, s)),
                t.operationState !== Pe.COMPLETED &&
                    t.additionalMissions.some((e) => e.isEnabled) &&
                    _.jsx(m.div, {
                        style: a,
                        className: On,
                        children: t.additionalMissions.map((e) =>
                            e.isEnabled
                                ? _.jsx(
                                      yn,
                                      {
                                          additionalMission: e,
                                          operationState: t.operationState,
                                          progressHidden: i,
                                          className: Cn,
                                      },
                                      e.type,
                                  )
                                : null,
                        ),
                    }),
            ],
        });
    }),
    jn = 'Progression_c7c2323d',
    An = 'Progression_missions_a14a8547',
    Mn = 'Progression_completed_95b1e94b',
    Dn = 'Progression_menu_ad782db3',
    Tn = l(function () {
        const { model: e } = gs(),
            s = e.computes.activeOperation(),
            a = e.activeOperationId.get();
        return _.jsxs('div', {
            className: jn,
            children: [
                _.jsx(Qi, { className: Dn }),
                (null == s ? void 0 : s.operationState) === Pe.COMPLETED_WITH_HONORS
                    ? _.jsx(Xi, { className: Mn }, a)
                    : _.jsx(wn, { className: An }),
            ],
        });
    }),
    Ln = {
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
    Pn = l(function () {
        const { model: e, controls: s } = gs(),
            a = e.computes.activeOperation(),
            t = e.currentState.get(),
            { progressionStyle: i, animationInProgress: n } = bs(),
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
                    a && s.mouseOver3dScene({ isOver3dScene: a.classList.contains(Ln.sceneWrapper) });
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
                className: u(Ln.base, Ln[`base__${t}`], Ln[`base__${null == a ? void 0 : a.operationState}`]),
                'data-name': 'Dashboard',
                children: [
                    _.jsx(Ae, { className: Ln.sceneWrapper, moveSpace: c, onMouseOver3dScene: l, moveSpaceEnabled: o }),
                    _.jsx('div', { className: Ln.completedWithHonorsShadow }),
                    _.jsx('div', { className: Ln.vignette }),
                    _.jsx('div', { className: Ln.progressionShadow }),
                    _.jsx('div', { className: Ln.missionsShadow }),
                    _.jsxs('div', {
                        className: u(Ln.wrapper, n && Ln.wrapper__disabled),
                        'data-test-id': `isDisabled-${String(n)}`,
                        children: [
                            (() => {
                                switch (t) {
                                    case _s:
                                        return _.jsx(Tn, {});
                                    case cs:
                                        return _.jsx(yt, {});
                                    case ds:
                                        return _.jsx(Vs, {});
                                    default:
                                        console.error(`Unexpected main screen state: ${t}`);
                                }
                            })(),
                            _.jsx(m.div, {
                                style: i,
                                className: Ln.progress,
                                children: _.jsx(pe, { settings: us, children: _.jsx(vi, {}) }),
                            }),
                        ],
                    }),
                ],
            })
        );
    });
Me(_.jsx(ps, { children: _.jsx(hs, { children: _.jsx(De, { soundsOverrides: ms, children: _.jsx(Pn, {}) }) }) }), {
    fullScreen: !0,
}).then(() => je(!1));
