import {
    l as e,
    m as t,
    n as a,
    p as s,
    R as n,
    i as o,
    j as r,
    r as i,
    k as d,
    q as l,
    s as c,
    t as f,
    v as g,
    w as m,
} from '../../../chunks/vendor.js';
import {
    i as u,
    d as h,
    e as p,
    n as _,
    g as x,
    h as y,
    T as v,
    j as w,
    k as b,
    p as C,
    l as j,
    c as S,
    V as N,
    m as I,
    u as D,
    B as E,
    o as k,
    q as A,
    s as P,
    F as O,
    t as T,
    C as V,
    a as F,
    r as $,
    U as q,
} from '../../../chunks/lib.js';
import { u as B, D as M, a as L, e as H, b as W, d as Y, c as z } from '../../../chunks/easings.js';
import { b as G, a as Q, f as X } from '../../../chunks/format.js';
var U = ((e) => (
        (e.CLOSED = 'closed'),
        (e.OPENED = 'opened'),
        (e.READY_TO_OPEN = 'readyToOpen'),
        (e.EXPIRED = 'expired'),
        e
    ))(U || {}),
    J = ((e) => ((e.NONE = 'none'), (e.NY = 'ny'), (e.NY_EVENT = 'nyEvent'), (e.WDR = 'wdr'), e))(J || {}),
    K = ((e) => ((e.OPEN_DOOR = 'openDoor'), e))(K || {});
const [Z, ee] = u()(
    ({ observableModel: n, externalModel: o, readByPath: r, cleanup: i }) => {
        const d = () => {
                return (
                    (e = r('doors')),
                    (t = ({ dayId: e }) => e),
                    (a = (e) => ({ ...e })),
                    p(e, (e, s) => ((e[t(s)] = a(s)), e), {})
                );
                var e, t, a;
            },
            l = n.primitives(['startTime', 'postEventStartDate', 'postEventEndDate']),
            { isCalendarCompleted: c } = n.primitives(['isCalendarCompleted']),
            f = e.box(c.get()),
            g = {
                doors: e.box(d()),
                progression: n.primitives(['isCompleted'], 'progressionRewards'),
                eventBus: e.box(null),
                progressionRewards: n.array('progressionRewards.rewards'),
                ...n.primitives([
                    'statePhase',
                    'showBlur',
                    'doorOpenBlocked',
                    'isAnimationEnabled',
                    'isIntroScreenVisible',
                    'holidayOpsStartTime',
                ]),
                isWalletAvailable: e.box(!0),
            };
        (o.subscribe(
            t(() => g.doors.set(d())),
            'doors',
        ),
            o.subscribe(
                t(() => {
                    const e = r('event');
                    g.eventBus.set({ eventType: e.eventType, payload: e.payload ? JSON.parse(e.payload) : null });
                }),
                'event',
            ),
            i(
                a(
                    () => c.get(),
                    t(() => f.set(c.get())),
                    { delay: 1500 },
                ),
            ));
        const m = s(
                (e) => {
                    const t = g.doors.get()[e];
                    if (!t) throw new Error(`Door with id ${e} not found`);
                    return t;
                },
                { equals: h.shallow },
            ),
            u = s(() =>
                Object.values(g.doors.get()).reduce(
                    (e, t) => (t.doorState !== U.READY_TO_OPEN ? e : !e || t.dayId < e ? t.dayId : e),
                    void 0,
                ),
            ),
            _ = s(() => c.get() && f.get()),
            x = s(() => ({ startDate: l.startTime.get(), endDate: l.postEventStartDate.get() - 86400 })),
            y = s(() => ({ startDate: l.postEventStartDate.get(), endDate: l.postEventEndDate.get() }));
        return { ...g, computes: { door: m, activeDay: u, eventCompleted: _, activePhase: x, postActivePhase: y } };
    },
    ({ externalModel: e }) => ({
        close: e.createCallbackNoArgs('onClose'),
        animationCompleted: e.createCallbackNoArgs('onAnimationCompleted'),
        openDoor: e.createCallback((e) => ({ dayId: e }), 'onOpenDoorAnimStarted'),
        showReward: e.createCallback((e) => ({ dayId: e }), 'onOpenDoorAnimEnded'),
        showPurchaseDialog: e.createCallback((e) => ({ dayId: e }), 'onShowPurchaseDialog'),
        progressionRewardCompleted: e.createCallbackNoArgs('progressionRewards.onProgressionRewardCompleted'),
        openDownloadLink: e.createCallbackNoArgs('onOpenDownloadLink'),
        infoClick: e.createCallbackNoArgs('onInfoClick'),
    }),
);
const te = n.createContext({ on: () => _, once: () => _, off: _, trigger: _ }),
    ae = o(({ children: e }) => {
        const t = B(),
            { model: s } = ee();
        return (
            x(() =>
                a(
                    () => s.eventBus.get(),
                    (e) => {
                        if (e && e.eventType === K.OPEN_DOOR) return t.trigger('onOpenDoor', e.payload.doorId);
                    },
                ),
            ),
            r.jsx(te.Provider, { value: t, children: e })
        );
    }),
    se = () => i.useContext(te),
    ne = ({ items: e, getValue: t, timeout: a }) => {
        const [s, n] = i.useState(e.map((e) => ({ data: e, state: 'idle' }))),
            o = y();
        return (
            i.useEffect(() => {
                if (o.isRunning) return;
                const r = (() => {
                        const a = s[s.length - 1];
                        if (!a) return e[0];
                        const n = e.findIndex((e) => t(e) === t(a.data));
                        return -1 === n ? e[0] : e[n + 1];
                    })(),
                    i = (() => {
                        const a = s[0];
                        if (!a) return;
                        return -1 === e.findIndex((e) => t(e) === t(a.data)) ? a.data : void 0;
                    })();
                (void 0 === r && void 0 === i) ||
                    (n((e) => [
                        ...e.map((e) => (void 0 !== i && t(e.data) === t(i) ? { ...e, state: 'removing' } : e)),
                        ...(void 0 !== r ? [{ data: r, state: 'adding' }] : []),
                    ]),
                    o.run(() => {
                        n((e) => e.filter((e) => 'removing' !== e.state).map((e) => ({ ...e, state: 'idle' })));
                    }, a));
            }, [e, s]),
            s
        );
    },
    oe = (e, t) => e.toDateString() === t.toDateString();
var re = ((e) => ((e.ACTIVE_PHASE = 'activePhase'), (e.POST_ACTIVE_PHASE = 'postActivePhase'), e))(re || {});
const ie = 'DoorCurrency_57770cf2',
    de = 'DoorCurrency_base__notEnough_5a8b00c1',
    le = o(({ dayId: e }) => {
        const { model: t } = ee(),
            { isEnoughResources: a, price: s } = t.computes.door(e);
        return t.statePhase.get() === re.POST_ACTIVE_PHASE && Boolean(s)
            ? r.jsxs('div', {
                  className: d(ie, !a && de),
                  children: [
                      r.jsx('span', { children: s }),
                      r.jsx('img', { src: R.images.advent_calendar.gui.maps.icons.mainView.resources(), alt: '' }),
                  ],
              })
            : null;
    }),
    ce = {
        root: 'DoorDay_root_ce9d6f78',
        doorNumber: 'DoorDay_doorNumber_2b684697',
        doorNumber__highlighted: 'DoorDay_doorNumber__highlighted_4c01a54c',
        doorNumber__closed: 'DoorDay_doorNumber__closed_ce9d6f78',
        doorNumber__expired: 'DoorDay_doorNumber__expired_5fc33042',
    },
    fe = ({ children: e, tooltipArgs: t }) =>
        t
            ? r.jsx(v, {
                  args: { payload: JSON.stringify(t) },
                  contentId: R.views.advent_calendar.mono.lobby.tooltips.advent_calendar_simple_tooltip('resId'),
                  children: e,
              })
            : e,
    ge = 'DoorFrontSide_2cbefa7f',
    me = 'DoorFrontSide_art_41ddf6fd',
    ue = 'DoorFrontSide_box_a0922c5c',
    he = n.forwardRef(({ children: e, className: t, tooltipArgs: a, ...s }, n) =>
        r.jsxs('div', {
            className: d(ge, t),
            ref: n,
            ...s,
            children: [
                r.jsx('div', { className: me }),
                e,
                r.jsx(fe, { tooltipArgs: a, children: r.jsx('div', { className: ue }) }),
            ],
        }),
    ),
    pe = 'DoorMark_f9db969',
    _e = 'DoorMark_overlay_45c6cc1f',
    xe = 'DoorMark_mark_cfdb9d51',
    ye = {
        [J.NONE]: '',
        [J.NY]: R.images.advent_calendar.gui.maps.icons.mainView.marks.ny(),
        [J.NY_EVENT]: R.images.advent_calendar.gui.maps.icons.mainView.marks.nyEvent(),
        [J.WDR]: R.images.advent_calendar.gui.maps.icons.mainView.marks.wdr(),
    },
    ve = o(({ dayId: e }) => {
        const { model: t } = ee(),
            a = M[e];
        if (!a) return null;
        const s = (e, a) => {
                var s;
                const n = null == (s = L[a]) ? void 0 : s[e];
                return n ? t.doors.get()[n] : void 0;
            },
            n = [
                s(a.x, a.y),
                ...Array.from(new Array(a.width + 1)).map((e, t) => s(a.x - 1 + t, a.y + a.height)),
                ...Array.from(new Array(a.height)).map((e, t) => s(a.x - 1, a.y + t)),
            ]
                .filter((e) => !!e)
                .filter((e) => e.mark !== J.NONE);
        return r.jsx('div', {
            className: pe,
            children: r.jsx('div', {
                className: _e,
                children: n.map((e, t) => {
                    const a = M[e.dayId];
                    return a
                        ? r.jsx(
                              'div',
                              {
                                  className: xe,
                                  style: {
                                      '--mark-x-pos': a.x + a.width,
                                      '--mark-y-pos': a.y,
                                      backgroundImage: `url(${ye[e.mark]})`,
                                  },
                              },
                              t,
                          )
                        : null;
                }),
            }),
        });
    }),
    we = 'DoorWrapper_5395b30e',
    be = {
        Wrapper: ({ children: e, className: t, style: a, dayId: s, doorState: n, ...o }) => {
            const i = M[s];
            return i
                ? r.jsx('div', {
                      className: d(we, t, `door-${i.width}x${i.height}`),
                      style: {
                          width: `calc(${i.width} * var(--width-ratio))`,
                          height: `calc(${i.height} * var(--height-ratio))`,
                          top: `calc(${i.y} * var(--height-ratio))`,
                          left: `calc(${i.x} * var(--width-ratio))`,
                          '--door-img': `url("R.images.advent_calendar.gui.maps.icons.mainView.${n}.c_160x${i.width}x${i.height}")`,
                          '--x-pos': i.x,
                          '--y-pos': i.y,
                          ...a,
                      },
                      ...o,
                      children: e,
                  })
                : null;
        },
        FrontSide: he,
        Day: ({ dayId: e, doorState: t }) => {
            const a = 25 === e;
            return r.jsx('span', {
                className: d(ce.doorNumber, a && ce.doorNumber__highlighted, ce[`doorNumber__${t}`]),
                children: e,
            });
        },
        Currency: le,
        Mark: ve,
    },
    Ce = R.strings.advent_calendar.mainView.tooltip,
    Re = (e, t) => {
        if (!t) return { body: R.strings.advent_calendar.server_error() };
        const a = new Date(1e3 * e),
            s = { date: Q(e), time: G(e) };
        if (oe(new Date(), a)) return { body: Ce.availableToday(), bindings: s };
        return oe(new Date(Date.now() + 864e5), a)
            ? { body: Ce.availableTomorrow(), bindings: s }
            : { header: Ce.availableSometime.title(), body: Ce.availableSometime.description(), bindings: s };
    },
    je = o(({ door: e }) => {
        const { model: t } = ee();
        return r.jsx(be.Wrapper, {
            dayId: e.dayId,
            doorState: e.doorState,
            children: r.jsxs(be.FrontSide, {
                tooltipArgs: Re(e.openTimeStamp, t.isWalletAvailable.get()),
                children: [
                    r.jsx(be.Day, { dayId: e.dayId, doorState: e.doorState }),
                    r.jsx(be.Currency, { dayId: e.dayId }),
                    r.jsx(be.Mark, { dayId: e.dayId }),
                ],
            }),
        });
    }),
    Se = R.strings.advent_calendar.mainView.tooltip,
    Ne = o(({ door: e }) => {
        const { model: t } = ee(),
            a = (() => {
                if (!t.isWalletAvailable.get()) return { body: R.strings.advent_calendar.server_error() };
                switch (t.statePhase.get()) {
                    case re.ACTIVE_PHASE:
                        return {
                            header: Se.expired.title(),
                            body: Se.expired.description(),
                            bindings: X(t.computes.postActivePhase().startDate, t.computes.postActivePhase().endDate),
                        };
                    case re.POST_ACTIVE_PHASE:
                        if (e.isEnoughResources) {
                            const e = t.computes.activeDay();
                            if (!e) return;
                            return {
                                header: Se.enoughResources.title(),
                                body: Se.enoughResources.description(),
                                bindings: { day: e.toString() },
                            };
                        }
                }
            })();
        return r.jsx(be.Wrapper, {
            dayId: e.dayId,
            doorState: e.doorState,
            children: r.jsxs(be.FrontSide, {
                tooltipArgs: a,
                children: [
                    r.jsx(be.Day, { dayId: e.dayId, doorState: e.doorState }),
                    r.jsx(be.Currency, { dayId: e.dayId }),
                    r.jsx(be.Mark, { dayId: e.dayId }),
                ],
            }),
        });
    });
var Ie = ((e) => ((e.S1x1 = 's1x1'), (e.S2x1 = 's2x1'), (e.S3x1 = 's3x1'), (e.S1x2 = 's1x2'), (e.S2x2 = 's2x2'), e))(
    Ie || {},
);
const De = {
        width: 80,
        height: 80,
        frameCount: 24,
        chunk: { count: 1, rows: 3, columns: 8 },
        getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.tearOff',
    },
    Ee = {
        width: 80,
        height: 80,
        frameCount: 16,
        chunk: { count: 1, rows: 4, columns: 4 },
        getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.hover',
    },
    ke = [
        De,
        Ee,
        {
            width: 150,
            height: 150,
            frameCount: 14,
            chunk: { count: 1, rows: 2, columns: 7 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x1_1',
        },
        {
            width: 300,
            height: 300,
            frameCount: 8,
            chunk: { count: 1, rows: 2, columns: 4 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x1_2',
        },
        {
            width: 550,
            height: 550,
            frameCount: 8,
            chunk: { count: 1, rows: 2, columns: 4 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x1_3',
        },
    ],
    Ae = [
        De,
        Ee,
        {
            width: 150,
            height: 150,
            frameCount: 14,
            chunk: { count: 1, rows: 2, columns: 7 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x1_1',
        },
        {
            width: 300,
            height: 300,
            frameCount: 7,
            chunk: { count: 1, rows: 1, columns: 7 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x1_2',
        },
        {
            width: 600,
            height: 600,
            frameCount: 6,
            chunk: { count: 1, rows: 1, columns: 6 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x1_3',
        },
        {
            width: 950,
            height: 800,
            frameCount: 5,
            chunk: { count: 1, rows: 1, columns: 5 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x1_4',
        },
    ],
    Pe = [
        De,
        Ee,
        {
            width: 150,
            height: 150,
            frameCount: 14,
            chunk: { count: 1, rows: 2, columns: 7 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_1',
        },
        {
            width: 300,
            height: 300,
            frameCount: 7,
            chunk: { count: 1, rows: 1, columns: 7 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_2',
        },
        {
            width: 600,
            height: 500,
            frameCount: 8,
            chunk: { count: 1, rows: 2, columns: 4 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_3',
        },
        {
            width: 900,
            height: 700,
            frameCount: 5,
            chunk: { count: 1, rows: 1, columns: 5 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_4',
        },
        {
            width: 1270,
            height: 1010,
            frameCount: 5,
            chunk: { count: 1, rows: 1, columns: 5 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_5',
        },
    ],
    Oe = [
        De,
        Ee,
        {
            width: 150,
            height: 150,
            frameCount: 15,
            chunk: { count: 1, rows: 3, columns: 5 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x2_1',
        },
        {
            width: 300,
            height: 300,
            frameCount: 8,
            chunk: { count: 1, rows: 2, columns: 4 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x2_2',
        },
        {
            width: 600,
            height: 600,
            frameCount: 6,
            chunk: { count: 1, rows: 2, columns: 3 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x2_3',
        },
        {
            width: 850,
            height: 750,
            frameCount: 4,
            chunk: { count: 1, rows: 2, columns: 2 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x2_4',
        },
    ],
    Te = [
        De,
        Ee,
        {
            width: 150,
            height: 150,
            frameCount: 6,
            chunk: { count: 1, rows: 1, columns: 6 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x2_1',
        },
        {
            width: 300,
            height: 300,
            frameCount: 6,
            chunk: { count: 1, rows: 1, columns: 6 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x2_2',
        },
        {
            width: 600,
            height: 600,
            frameCount: 9,
            chunk: { count: 1, rows: 3, columns: 3 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x2_3',
        },
        {
            width: 985,
            height: 720,
            frameCount: 9,
            chunk: { count: 1, rows: 3, columns: 3 },
            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x2_4',
        },
    ],
    Ve = [
        { angle: 45, offset: 0 },
        { angle: 45, offset: 0 },
        { angle: 45, offset: 0 },
        { angle: 45, offset: 0.045 },
        { angle: 45, offset: 0.06 },
        { angle: 45, offset: 0.08 },
        { angle: 45, offset: 0.085 },
        { angle: 45, offset: 0.099 },
        { angle: 45, offset: 0.11 },
        { angle: 45, offset: 0.121 },
        { angle: 45, offset: 0.133 },
        { angle: 45, offset: 0.15 },
        { angle: 45, offset: 0.16 },
        { angle: 45, offset: 0.17 },
        { angle: 45, offset: 0.18 },
        { angle: 45, offset: 0.18 },
        { angle: 45, offset: 0.183 },
        { angle: 45, offset: 0.19 },
        { angle: 45, offset: 0.19 },
        { angle: 45, offset: 0.2 },
        { angle: 45, offset: 0.2 },
        { angle: 45, offset: 0.2 },
        { angle: 45, offset: 0.2 },
        { angle: 45, offset: 0.205 },
    ],
    Fe = [
        { angle: 45, offset: 0.206 },
        { angle: 45, offset: 0.21 },
        { angle: 45, offset: 0.215 },
        { angle: 45, offset: 0.219 },
        { angle: 45, offset: 0.22 },
        { angle: 45, offset: 0.225 },
        { angle: 45, offset: 0.226 },
        { angle: 45, offset: 0.229 },
        { angle: 45, offset: 0.23 },
        { angle: 45, offset: 0.23 },
        { angle: 45, offset: 0.23 },
        { angle: 45, offset: 0.233 },
        { angle: 45, offset: 0.233 },
        { angle: 45, offset: 0.233 },
        { angle: 45, offset: 0.233 },
        { angle: 45, offset: 0.233 },
    ],
    $e = [
        ...Ve,
        ...Fe,
        { angle: 45, offset: 0.233 },
        { angle: 45, offset: 0.236 },
        { angle: 45, offset: 0.243 },
        { angle: 45, offset: 0.25 },
        { angle: 45, offset: 0.26 },
        { angle: 45, offset: 0.275 },
        { angle: 45, offset: 0.285 },
        { angle: 45.1, offset: 0.31 },
        { angle: 45.3, offset: 0.335 },
        { angle: 45.4, offset: 0.362 },
        { angle: 45.6, offset: 0.39 },
        { angle: 45.7, offset: 0.415 },
        { angle: 45.8, offset: 0.455 },
        { angle: 46, offset: 0.49 },
        { angle: 46.1, offset: 0.535 },
        { angle: 46.2, offset: 0.58 },
        { angle: 46.4, offset: 0.652 },
        { angle: 46.5, offset: 0.695 },
        { angle: 46.7, offset: 0.753 },
        { angle: 46.8, offset: 2 },
        { angle: 46.9, offset: 2 },
        { angle: 47.1, offset: 2 },
        { angle: 47.2, offset: 2 },
        { angle: 47.4, offset: 2 },
        { angle: 47.5, offset: 2 },
        { angle: 47.6, offset: 2 },
        { angle: 47.8, offset: 2 },
        { angle: 47.9, offset: 2 },
        { angle: 48, offset: 2 },
        { angle: 48, offset: 2 },
    ],
    qe = [
        ...Ve,
        ...Fe,
        { angle: 45, offset: 0.235 },
        { angle: 45, offset: 0.24 },
        { angle: 45, offset: 0.24 },
        { angle: 45, offset: 0.245 },
        { angle: 45, offset: 0.25 },
        { angle: 45, offset: 0.255 },
        { angle: 45, offset: 0.26 },
        { angle: 45, offset: 0.273 },
        { angle: 45, offset: 0.29 },
        { angle: 45, offset: 0.31 },
        { angle: 45, offset: 0.345 },
        { angle: 45, offset: 0.37 },
        { angle: 45, offset: 0.415 },
        { angle: 45, offset: 0.463 },
        { angle: 45, offset: 0.523 },
        { angle: 45.6, offset: 0.586 },
        { angle: 46.2, offset: 0.66 },
        { angle: 46.5, offset: 0.735 },
        { angle: 46.8, offset: 0.813 },
        { angle: 47.2, offset: 0.91 },
        { angle: 47.5, offset: 1.005 },
        { angle: 47.8, offset: 1.105 },
        { angle: 48, offset: 1.23 },
        { angle: 48.2, offset: 1.36 },
        { angle: 48.3, offset: 1.485 },
        { angle: 48.5, offset: 3 },
        { angle: 49, offset: 3 },
        { angle: 50, offset: 3 },
        { angle: 50, offset: 3 },
        { angle: 50, offset: 3 },
        { angle: 50, offset: 3 },
        { angle: 50, offset: 3 },
        { angle: 50, offset: 3 },
    ],
    Be = [
        ...Ve,
        ...Fe,
        { angle: 45, offset: 0.238 },
        { angle: 45, offset: 0.238 },
        { angle: 45, offset: 0.24 },
        { angle: 45, offset: 0.25 },
        { angle: 45, offset: 0.258 },
        { angle: 45, offset: 0.27 },
        { angle: 45.3, offset: 0.283 },
        { angle: 45.7, offset: 0.308 },
        { angle: 46.5, offset: 0.328 },
        { angle: 46.2, offset: 0.35 },
        { angle: 45.9, offset: 0.388 },
        { angle: 45.5, offset: 0.42 },
        { angle: 45, offset: 0.465 },
        { angle: 44.5, offset: 0.513 },
        { angle: 44.4, offset: 0.558 },
        { angle: 45.4, offset: 0.628 },
        { angle: 46, offset: 0.69 },
        { angle: 46.2, offset: 0.76 },
        { angle: 46.5, offset: 0.823 },
        { angle: 46.8, offset: 0.908 },
        { angle: 47, offset: 0.988 },
        { angle: 47.2, offset: 1.075 },
        { angle: 47.5, offset: 1.168 },
        { angle: 47.8, offset: 1.265 },
        { angle: 48, offset: 1.373 },
        { angle: 49, offset: 1.523 },
        { angle: 50, offset: 1.673 },
        { angle: 51, offset: 1.833 },
        { angle: 53, offset: 2.008 },
        { angle: 54, offset: 2.16 },
        { angle: 55, offset: 2.315 },
        { angle: 55, offset: 2.453 },
        { angle: 56, offset: 4 },
        { angle: 59, offset: 4 },
        { angle: 60, offset: 4 },
        { angle: 60, offset: 4 },
        { angle: 60, offset: 4 },
        { angle: 60, offset: 4 },
        { angle: 60, offset: 4 },
    ],
    Me = [
        ...Ve,
        ...Fe,
        { angle: 45, offset: 0.233 },
        { angle: 45, offset: 0.259 },
        { angle: 45, offset: 0.305 },
        { angle: 46.5, offset: 0.362 },
        { angle: 45, offset: 0.426 },
        { angle: 44, offset: 0.5 },
        { angle: 43, offset: 0.555 },
        { angle: 42.5, offset: 0.642 },
        { angle: 43, offset: 0.722 },
        { angle: 42.9, offset: 0.807 },
        { angle: 42.6, offset: 0.9 },
        { angle: 42.5, offset: 0.975 },
        { angle: 42.6, offset: 1.055 },
        { angle: 42.5, offset: 1.16 },
        { angle: 42.3, offset: 1.255 },
        { angle: 44.4, offset: 1.38 },
        { angle: 45, offset: 3 },
        { angle: 47.7, offset: 3 },
        { angle: 49.5, offset: 3 },
        { angle: 50.3, offset: 3 },
        { angle: 49.4, offset: 3 },
        { angle: 49.6, offset: 3 },
        { angle: 48.7, offset: 3 },
        { angle: 48.4, offset: 3 },
        { angle: 45.5, offset: 3 },
        { angle: 47.1, offset: 3 },
        { angle: 45.6, offset: 3 },
        { angle: 45.6, offset: 3 },
        { angle: 45.6, offset: 3 },
        { angle: 45.6, offset: 3 },
    ],
    Le = [
        ...Ve,
        ...Fe,
        { angle: 45, offset: 0.235 },
        { angle: 45, offset: 0.235 },
        { angle: 45, offset: 0.24 },
        { angle: 45, offset: 0.24 },
        { angle: 45, offset: 0.25 },
        { angle: 45, offset: 0.258 },
        { angle: 45, offset: 0.26 },
        { angle: 45, offset: 0.268 },
        { angle: 45, offset: 0.278 },
        { angle: 45, offset: 0.3 },
        { angle: 45.7, offset: 0.325 },
        { angle: 45.8, offset: 0.35 },
        { angle: 45.9, offset: 0.38 },
        { angle: 46.4, offset: 0.418 },
        { angle: 46.8, offset: 0.46 },
        { angle: 46.6, offset: 0.5 },
        { angle: 46.4, offset: 0.56 },
        { angle: 46.6, offset: 0.62 },
        { angle: 46.7, offset: 0.685 },
        { angle: 42.7, offset: 0.79 },
        { angle: 42.5, offset: 0.875 },
        { angle: 42.3, offset: 0.975 },
        { angle: 42.1, offset: 1.07 },
        { angle: 42, offset: 1.175 },
        { angle: 42, offset: 1.3 },
        { angle: 38.2, offset: 1.6 },
        { angle: 35.5, offset: 1.9 },
        { angle: 33, offset: 3 },
        { angle: 33, offset: 3 },
        { angle: 33, offset: 3 },
        { angle: 33, offset: 3 },
        { angle: 33, offset: 3 },
        { angle: 33, offset: 3 },
    ],
    He = De.frameCount,
    We = De.frameCount + Ee.frameCount - 1,
    Ye = {
        [Ie.S1x1]: { gridConfigs: ke, frameConfigs: $e, delays: { rewardShow: 600 } },
        [Ie.S2x1]: { gridConfigs: Ae, frameConfigs: qe, delays: { rewardShow: 800 } },
        [Ie.S3x1]: { gridConfigs: Pe, frameConfigs: Be, delays: { rewardShow: 850 } },
        [Ie.S1x2]: { gridConfigs: Oe, frameConfigs: Le, delays: { rewardShow: 800 } },
        [Ie.S2x2]: { gridConfigs: Te, frameConfigs: Me, delays: { rewardShow: 600 } },
    },
    ze = { init: 800, glowIn: 800, glowOut: 800, accent: 500 },
    Ge = { glowOut: 600 };
const Qe = (e, t) => ({ ...e, img: t }),
    Xe = (e, t, a = 0) => {
        const s = (function (e) {
            const t = b(e);
            return (a) => ({ ...t(a), width: e.width, height: e.height });
        })(t);
        return ((e, t, a, s, n = 0) => {
            const o = {};
            for (let r = t; r <= a; r++) {
                const t = s(r),
                    a = o[t.path];
                if (a) e.set(r + n, Qe(t, a));
                else {
                    const a = new Image();
                    ((o[t.path] = a),
                        (a.src = t.path),
                        (a.onerror = () => {
                            console.error(`[CanvasSequence] Error loading image(${r})`, t.path, `(${t.x},${t.y})`);
                        }),
                        e.set(r + n, Qe(t, a)));
                }
            }
        })(e, 0, t.frameCount - 1, s, a);
    },
    Ue = (e, t) => {
        const a = i.useRef(new Map()),
            s = i.useRef(0),
            n = (function () {
                const e = i.useRef(0);
                return (
                    w(() => {
                        window.cancelAnimationFrame(e.current);
                    }),
                    i.useMemo(
                        () => ({
                            run: (t, a) => {
                                window.cancelAnimationFrame(e.current);
                                let s = Date.now();
                                const n = () => {
                                    ((e.current = window.requestAnimationFrame(n)),
                                        Date.now() - s < a || ((s = Date.now()), t()));
                                };
                                e.current = window.requestAnimationFrame(n);
                            },
                            clear: () => {
                                (window.cancelAnimationFrame(e.current), (e.current = 0));
                            },
                            get isRunning() {
                                return 0 !== e.current;
                            },
                        }),
                        [],
                    )
                );
            })();
        return (
            i.useEffect(() => {
                (a.current.clear(),
                    t.reduce((e, t) => (Xe(a.current, t, e.frameOffset), (e.frameOffset += t.frameCount), e), {
                        frameOffset: 0,
                    }));
            }, [t, e]),
            i.useMemo(() => {
                const t = (t) => {
                    s.current = t;
                    const n = e.current;
                    if (n) {
                        const e = a.current.get(t);
                        if (!e) return void console.error('frameImage was not provided in frameImages Map');
                        ((n.width = e.width),
                            (n.height = e.height),
                            (n.style.width = `${n.width}rem`),
                            (n.style.height = `${n.height}rem`));
                        const s = n.getContext('2d');
                        (s.clearRect(0, 0, n.width, n.height), s.drawImage(e.img, -e.x, -e.y));
                    }
                };
                return {
                    setFrame: t,
                    animate: (e) => {
                        const o = void 0 !== e.startFrameIndex ? e.startFrameIndex : s.current,
                            r = void 0 !== e.endFrameIndex ? e.endFrameIndex : a.current.size - 1,
                            i = r > o ? 1 : -1;
                        let d = o;
                        return (
                            n.run(() => {
                                var a, s, l;
                                (d === o && (null == (a = e.onStart) || a.call(e)),
                                    null == (s = e.onAnimate) || s.call(e, d),
                                    t(d),
                                    d === r ? (n.clear(), null == (l = e.onFinish) || l.call(e)) : (d += i));
                            }, e.frameTime),
                            () => n.clear()
                        );
                    },
                    getCurrentFrame: () => s.current,
                    onLoad: (e, t) => {
                        const s = [...new Set([...a.current.values()].map(({ img: e }) => e))][e];
                        if (!s) return _;
                        if (0 === s.width) {
                            const e = () => {
                                (s.removeEventListener('load', e), t());
                            };
                            return (
                                s.addEventListener('load', e),
                                () => {
                                    s.removeEventListener('load', e);
                                }
                            );
                        }
                        return (t(), _);
                    },
                };
            }, [e, n])
        );
    },
    Je = (e, t, a, s) => {
        const { width: n, height: o } = e.getBoundingClientRect(),
            r = (n / s.width) * a;
        e.style.clipPath = ((e, t, a, s) => {
            const n = Math.cos(s),
                o = Math.sin(s),
                r = n * n,
                i = n * o,
                d = o * o,
                l = a * o,
                c = a * n;
            return `polygon(${((e * r + l) / e) * 100}% ${((e * -i + c) / t) * 100}%, ${((e + t * i + l) / e) * 100}% ${((t * r + c) / t) * 100}%, ${((e * d + l) / e) * 100}% ${((t + e * i + c) / t) * 100}%, ${((t * -i + l) / e) * 100}% ${((t * d + c) / t) * 100}%)`;
        })(n, o, r, t);
    };
var Ke = ((e) => ((e.Init = 'init'), (e.Idle = 'idle'), (e.Hover = 'hover'), (e.Open = 'open'), e))(Ke || {});
const Ze = (e) => {
        const t = y(),
            a = ((e) => {
                switch (`${e.width}x${e.height}`) {
                    case '1x1':
                        return Ie.S1x1;
                    case '2x1':
                        return Ie.S2x1;
                    case '3x1':
                        return Ie.S3x1;
                    case '1x2':
                        return Ie.S1x2;
                    case '2x2':
                        return Ie.S2x2;
                    default:
                        return (console.error(`[DoorSize] Unknown size! (${e.width}x${e.height})`), Ie.S1x1);
                }
            })(e),
            { gridConfigs: s, frameConfigs: n, delays: o } = Ye[a],
            r = i.useRef(null),
            d = i.useRef(null),
            { animate: c, getCurrentFrame: f, onLoad: g, setFrame: m } = Ue(d, s),
            u = i.useRef('init'),
            h = i.useRef(!1),
            [p, x] = l(() => ({ x: '-50%', y: '-50%', scale: 1, opacity: 0 })),
            [v, w] = l(() => ({ opacity: 0 })),
            [, b] = l(() => ({
                opacity: 1,
                onChange: ({ value: e }) => {
                    (r.current && (r.current.style.opacity = e.opacity.toString()),
                        d.current && (d.current.style.opacity = e.opacity.toString()));
                },
            })),
            R = i.useMemo(() => {
                const a = (t) => {
                        const a = r.current;
                        if (n[t] && a) {
                            const { offset: s, angle: o } = n[t];
                            Je(a, o * (Math.PI / 180), s, e);
                        }
                    },
                    s = () =>
                        new Promise((e) => {
                            (x.start({
                                to: [{ opacity: 1, scale: 1.2 }, { scale: 1 }],
                                config: { duration: ze.glowIn, easing: H },
                                onRest: () => e(),
                            }),
                                w.start({ opacity: 0.8, config: { duration: ze.init, easing: W }, delay: ze.glowIn }));
                        }),
                    i = (e) => {
                        c({ frameTime: 33, onAnimate: a, ...e });
                    },
                    l = () => {
                        ((h.current = !0),
                            r.current && (r.current.style.pointerEvents = 'none'),
                            d.current && (d.current.style.display = 'none'));
                    };
                return {
                    tearOff: (e, a = !1) => {
                        a
                            ? ((u.current = 'idle'),
                              p.opacity.set(1),
                              v.opacity.set(0.8),
                              i({ startFrameIndex: He, endFrameIndex: He }))
                            : t.run(async () => {
                                  if ('init' === u.current) {
                                      u.current = 'idle';
                                      try {
                                          await s();
                                      } finally {
                                          'idle' === u.current &&
                                              (C.sound('adv_stamp_highlight'), i({ endFrameIndex: He }));
                                      }
                                  }
                              }, e);
                    },
                    open: (e = !0) => (
                        (u.current = 'open'),
                        C.sound('adv_stamp_get'),
                        x.start({
                            to: { opacity: 0, scale: 1.4 },
                            config: { duration: ze.glowOut, easing: H },
                            delay: Ge.glowOut,
                        }),
                        w.start({ to: { opacity: 0 }, config: { duration: ze.glowOut, easing: H }, delay: Ge.glowOut }),
                        e
                            ? (i({ startFrameIndex: We, onFinish: l }), o.rewardShow)
                            : (b.start({
                                  to: { opacity: 0 },
                                  config: { duration: ze.glowOut, easing: H },
                                  delay: Ge.glowOut,
                                  onRest: l,
                              }),
                              Ge.glowOut)
                    ),
                    enter: () => {
                        (C.sound('adv_stamp_highlight'),
                            'init' === u.current
                                ? (s().catch(_), i({ endFrameIndex: He }))
                                : (x.start({ to: [{ scale: 1.1 }], config: { duration: ze.accent, easing: W } }),
                                  i({ endFrameIndex: We })),
                            (u.current = 'hover'));
                    },
                    leave: () => {
                        ((u.current = 'idle'),
                            x.start({ to: [{ scale: 1 }], config: { duration: ze.accent, easing: H } }),
                            i({ endFrameIndex: He }));
                    },
                    restore: () => {
                        (h.current && l(), a(f()), m(f()));
                    },
                };
            }, [c, o.rewardShow, n, f, x, p.opacity, t, e, m, w, v.opacity, b]);
        return (
            i.useEffect(() => g(0, () => m(f())), []),
            i.useEffect(() => g(1, () => m(f())), []),
            { glowStyle: p, shineStyle: v, doorRef: r, canvasRef: d, state: u, api: R }
        );
    },
    et = 'ReadyToOpenDoor_glow_f05f65a1',
    tt = 'ReadyToOpenDoor_glowBorder_338b9f5b',
    at = 'ReadyToOpenDoor_shineWrapper_95dafd6',
    st = 'ReadyToOpenDoor_shine_83ddbe86',
    nt = 'ReadyToOpenDoor_frontSide_cb8701bb',
    ot = 'ReadyToOpenDoor_backSide_416774b3',
    rt = o(({ door: e }) => {
        const { breakpoint: t } = j(),
            { model: a, controls: s } = ee(),
            o = se(),
            i = M[e.dayId] || { x: 0, y: 0, width: 0, height: 0 },
            d = y(),
            { shineStyle: l, glowStyle: f, state: g, doorRef: m, canvasRef: u, api: h } = Ze(i),
            p = (e) => () => {
                g.current === Ke.Open || a.doorOpenBlocked.get() || e();
            },
            _ = p(() => {
                if (a.statePhase.get() === re.POST_ACTIVE_PHASE) return s.showPurchaseDialog(e.dayId);
                s.openDoor(e.dayId);
            }),
            v = p(h.enter),
            w = p(h.leave);
        return (
            x(() => {
                e.openAnimationRequired || h.tearOff(0, !0);
            }),
            x(() =>
                o.on('onOpenDoor', (t) => {
                    t === e.dayId &&
                        (() => {
                            const t = h.open(a.isAnimationEnabled.get());
                            d.run(() => s.showReward(e.dayId), t);
                        })();
                }),
            ),
            x(() =>
                o.on('onTearOff', (t, a, s = 0) => {
                    t === e.dayId && h.tearOff(s + 1e3 * a);
                }),
            ),
            n.useEffect(() => S(h.restore), [h, t.name]),
            r.jsxs(
                be.Wrapper,
                {
                    dayId: e.dayId,
                    doorState: e.doorState,
                    children: [
                        r.jsx(c.div, { className: et, style: f }),
                        r.jsx(c.div, {
                            className: at,
                            style: l,
                            children: r.jsx(N, {
                                className: st,
                                src: R.videos.advent_calendar.shine(),
                                autoplay: !0,
                                loop: !0,
                            }),
                        }),
                        r.jsxs(be.FrontSide, {
                            ref: m,
                            onMouseEnter: v,
                            onMouseLeave: w,
                            onClick: _,
                            className: nt,
                            children: [
                                r.jsx(c.div, { className: tt, style: { opacity: f.opacity } }),
                                r.jsx(be.Day, { dayId: e.dayId, doorState: e.doorState }),
                                r.jsx(be.Currency, { dayId: e.dayId }),
                                r.jsx(be.Mark, { dayId: e.dayId }),
                            ],
                        }),
                        r.jsx('canvas', { ref: u, className: ot }),
                    ],
                },
                t.name,
            )
        );
    }),
    it = 'DoorResolver_enter_cee4635f',
    dt = o(({ dayId: e }) => {
        const { model: t } = ee(),
            a = t.computes.door(e),
            s = a.doorState === U.OPENED ? 2e3 : 300,
            n = ne({ getValue: I, items: [a.doorState], timeout: s });
        return r.jsx(r.Fragment, {
            children: n.map(({ data: e, state: t }) =>
                r.jsx(
                    'div',
                    {
                        className: 'adding' === t ? it : '',
                        children: (() => {
                            switch (e) {
                                case U.CLOSED:
                                    return r.jsx(je, { door: a });
                                case U.EXPIRED:
                                    return r.jsx(Ne, { door: a });
                                case U.READY_TO_OPEN:
                                    return r.jsx(rt, { door: { ...a, doorState: e } });
                                default:
                                    return r.jsx('div', {});
                            }
                        })(),
                    },
                    e,
                ),
            ),
        });
    }),
    lt = 'Calendar_3586eabd',
    ct = 'Calendar_content_1355d8b1',
    ft = 'Calendar_content__hidden_811e638e',
    gt = 'Calendar_base__blocked_56e9b951',
    mt = 'Calendar_base__layer_af15e6b5',
    ut = 'Calendar_base__art_a21479e0',
    ht = 'Calendar_base__artBorders_48b65ad6',
    pt = 'Calendar_base__calendarBorder_a3040dcc',
    _t = 'Calendar_linkButtonContainer_94da6ea9',
    xt = 'Calendar_base__linkButtonHidden_303cc33f',
    yt = 'Calendar_linkButtonIconWrapper_afd5f6de',
    vt = 'Calendar_linkButtonIcon_46d54fd7',
    wt = R.strings.advent_calendar.mainView,
    bt = Object.keys(Y).reduce(
        (e, t) => (
            (e[`--${t}_width`] = `${Y[t].widthRatio}rem`),
            (e[`--${t}_height`] = `${Y[t].heightRatio}rem`),
            (e[`--${t}_offset`] = `${Y[t].topOffset}rem`),
            e
        ),
        {},
    ),
    Ct = o(() => {
        const { model: e, controls: t } = ee(),
            s = se(),
            n = D(
                { buttonSize: E.sizes.extraSmall },
                { medium: { buttonSize: E.sizes.small }, extraLarge: { buttonSize: E.sizes.medium } },
            ),
            [o, f] = l(() => ({ opacity: 1 })),
            [g, m] = l(() => ({ opacity: 0.7 }));
        (x(() =>
            s.on('onOpenDoor', () => {
                const t = Object.values(e.doors.get());
                t.filter((e) => e.doorState === U.OPENED).length === t.length - 1 &&
                    (f.start({ opacity: 0, delay: 2500 }), m.start({ opacity: 0, delay: 2500 }));
            }),
        ),
            x(() =>
                a(
                    () => Object.values(e.doors.get()).every((e) => e.doorState === U.OPENED),
                    (e, t) => {
                        t && !e && (f.start({ opacity: 1 }), m.start({ opacity: 0.7 }));
                    },
                ),
            ));
        const u = i.useCallback(() => {
            t.openDownloadLink();
        }, [t]);
        return r.jsxs('div', {
            className: d(lt, e.doorOpenBlocked.get() && gt, !e.computes.eventCompleted() && xt),
            style: bt,
            children: [
                r.jsx('div', { className: d(mt, ut) }),
                r.jsxs('div', {
                    className: d(ct, e.computes.eventCompleted() && ft),
                    children: [
                        r.jsx(c.div, { className: d(mt, ht), style: g }),
                        r.jsx(c.div, { className: d(mt, pt), style: o }),
                        Object.keys(M).map((e) => r.jsx(dt, { dayId: Number(e) }, e)),
                    ],
                }),
                r.jsx('div', {
                    className: _t,
                    children: r.jsxs(E, {
                        theme: E.themes.secondary,
                        size: n.buttonSize,
                        onClick: u,
                        children: [
                            r.jsx('span', { children: wt.footer.linkButton.text() }),
                            r.jsx('span', { className: yt, children: r.jsx('span', { className: vt }) }),
                        ],
                    }),
                }),
            ],
        });
    });
var Rt = ((e) => (
        (e.REWARD_RECEIVED = 'rewardReceived'),
        (e.REWARD_IN_PROGRESS = 'rewardInProgress'),
        (e.REWARD_LOCKED = 'rewardLocked'),
        e
    ))(Rt || {}),
    jt = ((e) => ((e.STYLE_2D = 'style2D'), (e.CREW_MEMBER = 'crewMember'), (e.BIG_LOOTBOX = 'lootBox'), e))(jt || {});
const St = '0px 0px 0px #fff0',
    Nt = '0px 0px 3px #fff',
    It = 'ProgressStatus_7baa4bfa',
    Dt = 'ProgressStatus_glow_4bf290e8',
    Et = 'ProgressStatus_amount_46e2f4ad',
    kt = 'ProgressStatus_doorsClosed_a2140866',
    At = 'ProgressStatus_check_27b6ca81',
    Pt = 'ProgressStatus_stage_cae40b2a',
    Ot = 'ProgressStatus_slash_3257b615',
    Tt = R.strings.common.common,
    Vt = o(
        ({
            isReceived: e,
            isInProgress: t,
            actualOpenedDoorsAmount: a,
            requiredOpenedDoorsAmount: s,
            completedDelay: n,
            isPostEvent: o,
            setTriggerBlurAnimation: d,
        }) => {
            const { model: m, controls: u } = ee(),
                h = m.progression.isCompleted.get(),
                p = k(h),
                _ = k(t),
                x = k(a),
                [y, v] = i.useState(!1),
                w = f(),
                b = l({
                    ref: w,
                    from: { opacity: 1, transform: 'translateY(0rem)' },
                    to: { opacity: 0, transform: 'translateY(-5rem)' },
                    transform: 'translateY(0rem)',
                    config: { duration: 800, easing: z },
                    onRest: () => C.sound('adv_fill_in'),
                }),
                R = f(),
                j = l({
                    ref: R,
                    from: { opacity: 0, transform: 'translateY(5rem)' },
                    to: { opacity: 1, transform: 'translateY(0rem)' },
                    config: { duration: 100, easing: A.easeOutQuad },
                    onRest: () => d(!0),
                }),
                S = f(),
                N = l({
                    ref: S,
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                    config: { duration: 200, easing: A.easeOutQuad },
                    onRest: () => {
                        S.start({
                            to: { opacity: 0 },
                            config: { duration: 500, easing: A.easeInQuad },
                            onRest: () => {
                                (v(!1), u.progressionRewardCompleted());
                            },
                        });
                    },
                });
            g(y ? [w, R, S] : []);
            const [I, D] = l(() => ({ opacity: !t || o ? 1 : 0.5 })),
                [E, P] = l(() => ({ opacity: !t || o ? 0.5 : 1 })),
                [O, T] = l(() => ({ textShadow: St })),
                [V, F] = l(() => ({ opacity: h ? 0 : 1, transform: 'translateY(0rem)' }));
            return (
                i.useEffect(() => {
                    t &&
                        (!1 === _
                            ? (P.start({
                                  from: { opacity: 0.5 },
                                  to: { opacity: 1 },
                                  delay: 1e3,
                                  config: { duration: 200, easing: A.easeInQuad },
                                  onRest: () => {
                                      T.start({
                                          from: { textShadow: St },
                                          to: { textShadow: Nt },
                                          reverse: !0,
                                          config: { duration: 300, easing: A.easeInQuad },
                                      });
                                  },
                              }),
                              D.start({
                                  from: { opacity: 1 },
                                  to: { opacity: 0.5 },
                                  delay: 1e3,
                                  config: { duration: 200, easing: A.easeInQuad },
                              }))
                            : T.start({
                                  from: { textShadow: St },
                                  to: { textShadow: Nt },
                                  config: { duration: 300, easing: A.easeInQuad },
                                  reverse: !0,
                                  onRest: () => {
                                      y || (a === s ? v(!0) : Number.isInteger(x) && u.animationCompleted());
                                  },
                              }));
                }, [a, P, D, T, t, _, s, u, x]),
                i.useEffect(() => {
                    h &&
                        !1 === p &&
                        F.start({
                            from: { opacity: 1, transform: 'translateY(0rem)' },
                            to: { opacity: 0, transform: 'translateY(-5rem)' },
                            delay: n,
                            config: { duration: 800, easing: z },
                        });
                }, [F, n, h, p]),
                r.jsx(c.div, {
                    style: V,
                    className: It,
                    children: e
                        ? r.jsx('span', { className: At })
                        : r.jsxs(r.Fragment, {
                              children: [
                                  r.jsx(c.div, { style: j, children: r.jsx('span', { className: At }) }),
                                  r.jsx(c.div, { style: N, className: Dt }),
                                  r.jsx(c.div, {
                                      style: b,
                                      children: r.jsxs(c.div, {
                                          style: E,
                                          className: Et,
                                          children: [
                                              r.jsx(c.div, { style: O, children: a }),
                                              r.jsxs(c.div, {
                                                  style: I,
                                                  className: kt,
                                                  children: [
                                                      ' ',
                                                      r.jsx('span', { className: Ot, children: Tt.slash() }),
                                                      ' ',
                                                      s,
                                                  ],
                                              }),
                                              r.jsx('div', { className: Pt }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                })
            );
        },
    ),
    Ft = 'AnimationReward_3b892878',
    $t = 'AnimationReward_reward_6f254e85',
    qt = 'AnimationReward_base__lootbox_314748a6',
    Bt = 'AnimationReward_spacer_8dae3fb1',
    Mt = 'AnimationReward_base__received_314748a6',
    Lt = 'AnimationReward_lock_970b5f01',
    Ht = 'AnimationReward_image_520788ef',
    Wt = 'AnimationReward_imageWrapper_3f6b7438',
    Yt = 'AnimationReward_lootBoxGlow_8877f155',
    zt = R.strings.advent_calendar.progressionRewards,
    Gt = (e) => (!0 == e > P.medium.weight ? 'big' : 'small'),
    Qt = (e, t) => `url(R.images.advent_calendar.gui.maps.icons.mainView.progression.${e}_${t})`,
    Xt = o(
        ({
            isLastReward: e,
            isReceived: t,
            isInProgress: a,
            completedDelay: s,
            actualOpenedDoorsAmount: n,
            rewardType: o,
            requiredOpenedDoorsAmount: f,
            tooltipContentId: g,
            tooltipId: m,
            isPostEvent: u,
        }) => {
            const { model: h, controls: p } = ee(),
                { breakpoint: _ } = j(),
                x = h.progression.isCompleted.get(),
                [y, w] = i.useState(!1),
                b = h.holidayOpsStartTime.get(),
                R = k(t),
                [S, N] = l(() => ({ opacity: x || t ? 0.5 : 1 })),
                [I, D] = l(() => ({ opacity: x ? 0 : 1 })),
                [E, P] = l(() => ({ opacity: t ? 0 : 0.5, transform: 'translate(-50%, -50%)' })),
                O = i.useMemo(() => ({ tooltipId: m }), [m]);
            return (
                i.useEffect(() => {
                    y &&
                        (N.start({
                            from: { opacity: 1 },
                            to: { opacity: 0.5 },
                            config: { duration: 200, easing: A.easeInQuad },
                        }),
                        D.start({
                            from: { opacity: 1 },
                            to: { opacity: 0 },
                            config: { duration: 200, easing: A.easeInQuad },
                        }));
                }, [N, D, y]),
                i.useEffect(() => {
                    t &&
                        !1 === R &&
                        (e || C.sound('adv_progress_level'),
                        P.start({
                            from: { opacity: 0.5, transform: 'translate(-50%, -50%)' },
                            to: { opacity: 0, transform: 'translate(-50%, -100%)' },
                            config: { duration: 800, easing: z },
                            onRest: () => {
                                x || p.animationCompleted();
                            },
                        }));
                }, [t, e, P, R, p, x]),
                r.jsxs('div', {
                    className: d(Ft, o === jt.BIG_LOOTBOX && qt, t && Mt),
                    children: [
                        r.jsxs('div', {
                            className: $t,
                            children: [
                                o === jt.BIG_LOOTBOX
                                    ? r.jsx(fe, {
                                          tooltipArgs: {
                                              header: zt.tooltip.lootbox.simple.header(),
                                              body: zt.tooltip.lootbox.simple.body(),
                                              bindings: { date: Q(b) },
                                          },
                                          children: r.jsxs(c.div, {
                                              style: S,
                                              className: Wt,
                                              children: [
                                                  r.jsx(c.div, { style: I, className: Yt }),
                                                  r.jsx('div', {
                                                      className: Ht,
                                                      style: { backgroundImage: `${Qt(o, Gt(_.weight))}` },
                                                  }),
                                              ],
                                          }),
                                      })
                                    : r.jsx(v, {
                                          contentId: g,
                                          args: O,
                                          children: r.jsx(c.div, {
                                              style: S,
                                              className: Wt,
                                              children: r.jsx('div', {
                                                  className: Ht,
                                                  style: { backgroundImage: `${Qt(o, Gt(_.weight))}` },
                                              }),
                                          }),
                                      }),
                                r.jsx(
                                    Vt,
                                    {
                                        isReceived: t,
                                        isInProgress: a,
                                        actualOpenedDoorsAmount: n,
                                        requiredOpenedDoorsAmount: f,
                                        completedDelay: s,
                                        setTriggerBlurAnimation: w,
                                        isPostEvent: u,
                                    },
                                    u.toString(),
                                ),
                            ],
                        }),
                        !e &&
                            r.jsx('div', {
                                className: Bt,
                                children: r.jsx(fe, {
                                    tooltipArgs: {
                                        header: zt.tooltip.lock.title(),
                                        body: zt.tooltip.lock.description(),
                                    },
                                    children: r.jsx(c.div, { style: E, className: Lt }),
                                }),
                            }),
                    ],
                })
            );
        },
    ),
    Ut = 'Title_30ab97fa',
    Jt = 'Title_text_b62b14aa',
    Kt = 'Title_text__notFinished_c2bdd7f',
    Zt = 'Title_check_c5bdd5c4',
    ea = 'Title_dae96377',
    ta = 'Title_postTitle_861160d7',
    aa = 'Title_postTitle__locked_fab62b4d',
    sa = 'Title_lock_1c902cd7',
    na = R.strings.advent_calendar.mainView,
    oa = o(({ activePhaseCompleted: e, completed: t }) => {
        const { model: a } = ee(),
            s = a.statePhase.get(),
            n = a.progression.isCompleted.get();
        return s === re.POST_ACTIVE_PHASE
            ? r.jsx('div', {
                  className: Ut,
                  children: n
                      ? r.jsxs('div', {
                            className: ta,
                            children: [
                                r.jsx('span', { className: Zt }),
                                r.jsx(O, { className: Jt, text: na.footer.progressionFinished.title() }),
                            ],
                        })
                      : r.jsxs('div', {
                            className: d(ta, aa),
                            children: [
                                r.jsx('span', { className: sa }),
                                r.jsx(fe, {
                                    tooltipArgs: {
                                        body: R.strings.advent_calendar.progressionRewards.tooltip.postActivePhase.title(),
                                        bindings: X(
                                            a.computes.activePhase().startDate,
                                            a.computes.postActivePhase().startDate,
                                        ),
                                    },
                                    children: r.jsx('div', {
                                        children: r.jsx(O, { className: Jt, text: na.footer.expired.title() }),
                                    }),
                                }),
                            ],
                        }),
              })
            : r.jsxs('div', {
                  className: Ut,
                  children: [
                      r.jsxs(c.div, {
                          style: t,
                          className: ea,
                          children: [
                              r.jsx('span', { className: Zt }),
                              r.jsx(O, { className: Jt, text: na.footer.progressionFinished.title() }),
                          ],
                      }),
                      r.jsx(c.div, {
                          style: e,
                          children: r.jsx(O, {
                              className: d(Jt, Kt),
                              text: na.footer.progressionNotFinished.title(),
                              params: { endDate: Q(a.computes.postActivePhase().startDate) },
                              upgradeLegacy: !0,
                          }),
                      }),
                  ],
              });
    }),
    ra = 'Footer_6cf7952',
    ia = 'Footer_base__hidden_44e170f6',
    da = 'Footer_title_b40b5fba',
    la = o(() => {
        const { model: e, controls: t } = ee(),
            a = e.progressionRewards.get(),
            s = e.progression.isCompleted.get(),
            n = e.statePhase.get(),
            o = k(s),
            [c, f] = l(() => ({ opacity: s ? 0 : 1, config: { duration: 900, easing: A.easeInQuad } })),
            [g, m] = l(() => ({ opacity: s ? 1 : 0, transform: 'translateY(-40%)' }));
        i.useEffect(() => {
            s &&
                !1 === o &&
                f.start({
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                    delay: 600,
                    onRest: () => {
                        (C.sound('adv_progress_full'),
                            m.start({
                                from: { opacity: 0, transform: 'translateY(-40%)' },
                                to: { opacity: 1, transform: 'translateY(-50%)' },
                                config: { duration: 100, easing: A.easeOutQuad },
                                onRest: () => t.animationCompleted(),
                            }));
                    },
                });
        }, [f, m, s, o, t]);
        const u = e.computes.eventCompleted() || e.isIntroScreenVisible.get();
        return r.jsxs('div', {
            className: d(ra, u && ia),
            children: [
                r.jsx('div', { className: da, children: r.jsx(oa, { activePhaseCompleted: c, completed: g }) }),
                T(a, (e, t) =>
                    r.jsx(
                        Xt,
                        {
                            isReceived: e.state === Rt.REWARD_RECEIVED,
                            isInProgress: e.state === Rt.REWARD_IN_PROGRESS,
                            isPostEvent: n === re.POST_ACTIVE_PHASE,
                            actualOpenedDoorsAmount: e.actualOpenedDoorsAmount,
                            rewardType: e.rewardType,
                            requiredOpenedDoorsAmount: e.requiredOpenedDoorsAmount,
                            tooltipContentId: e.tooltipContentId,
                            tooltipId: e.tooltipId,
                            isLastReward: t === a.length - 1,
                            completedDelay: 300 * t,
                        },
                        t,
                    ),
                ),
            ],
        });
    }),
    ca = 'GradientText_5009d812',
    fa = 'GradientText_text_99fcfd11',
    ga = 'GradientText_text__hidden_b8e46c8c',
    ma = 'GradientText_text__basis_b0cfbac3',
    ua = 'GradientText_text__gradientColorize_9ee0d6a3',
    ha = 'GradientText_text__secondary_60f92075',
    pa = ({ text: e, className: t }) =>
        r.jsxs('div', {
            className: d(ca, t),
            children: [
                r.jsx('div', { className: d(fa, ga), children: e }),
                r.jsx('div', { className: d(fa, ma), children: e }),
                r.jsx('div', { className: d(fa, ha), children: e }),
                r.jsx('div', { className: d(fa, ua), children: e }),
            ],
        }),
    _a = 'Header_66f27af6',
    xa = 'Header_base__hidden_20fc4480',
    ya = 'Header_shadow_55e54ec6',
    va = 'Header_titleWrapper_901c979d',
    wa = 'Header_title_758fad4a',
    ba = 'Header_infoButton_88790d91',
    Ca = 'Header_subTitle_68b15384',
    Ra = 'Header_br_b2b829d8',
    ja = R.strings.advent_calendar.mainView,
    Sa = o(() => {
        const { model: e } = ee(),
            t = (() => {
                switch (e.statePhase.get()) {
                    case re.ACTIVE_PHASE:
                        return {
                            text: ja.activePhase.subTitle(),
                            params: {
                                ...X(e.computes.activePhase().startDate, e.computes.postActivePhase().startDate),
                                br: Ra,
                            },
                        };
                    case re.POST_ACTIVE_PHASE:
                        return {
                            text: ja.postActivePhase.subTitle(),
                            params: { date: Q(e.computes.postActivePhase().endDate), br: Ra },
                        };
                }
            })(),
            a = e.computes.eventCompleted() || e.isIntroScreenVisible.get();
        return r.jsxs('span', {
            className: d(_a, a && xa),
            children: [
                r.jsxs('div', {
                    className: va,
                    children: [
                        r.jsx(pa, { className: wa, text: ja.title() }),
                        e.statePhase.get() === re.ACTIVE_PHASE &&
                            r.jsx(v, {
                                contentId:
                                    R.views.advent_calendar.mono.lobby.tooltips.advent_calendar_all_rewards_tooltip(
                                        'resId',
                                    ),
                                children: r.jsx('div', { className: ba }),
                            }),
                    ],
                }),
                r.jsx(O, { className: Ca, ...t }),
                r.jsx('div', { className: ya }),
            ],
        });
    }),
    Na = 'Navigation_198a64a7',
    Ia = 'Navigation_close_f4659190',
    Da = 'Navigation_info_bd9bd9d4',
    Ea = 'Navigation_hidden_32795b43',
    ka = 'Navigation_infoIcon_308a716',
    Aa = o(() => {
        const { model: e, controls: t } = ee(),
            a = e.isIntroScreenVisible.get(),
            s = e.computes.eventCompleted(),
            n = D({ buttonSize: E.sizes.extraSmall }, { extraLarge: { buttonSize: E.sizes.small } });
        return r.jsxs('div', {
            className: Na,
            children: [
                r.jsxs(E, {
                    theme: E.themes.secondary,
                    size: n.buttonSize,
                    className: d(Da, (a || s) && Ea),
                    onClick: t.infoClick,
                    children: [
                        r.jsx('div', { className: ka }),
                        R.strings.advent_calendar.mainView.navigation.aboutEventBtn.label(),
                    ],
                }),
                r.jsx(V, { onClose: t.close, className: d(Ia, a && Ea) }),
            ],
        });
    }),
    Pa = 'App_795682f0',
    Oa = 'App_background_518d1420',
    Ta = 'App_vignette_979c1b09',
    Va = 'App_content_fcd5bfcb',
    Fa = 'App_content__ready_97f2f2ea',
    $a = 'App_content__slowReady_e5d53eda',
    qa = 'App_content__blurred_9be9f4f5',
    Ba = o(() => {
        const { model: e, controls: t } = ee(),
            { trigger: s } = se(),
            n = y();
        F(t.close);
        const o = (t) => {
            Object.values(e.doors.get())
                .filter((e) => e.openAnimationRequired && e.doorState === U.READY_TO_OPEN)
                .sort((e, t) => e.dayId - t.dayId)
                .forEach((e, a) => {
                    s('onTearOff', e.dayId, a, t);
                });
        };
        return (
            x(() => (n.run(() => o(0), 1e3), () => n.clear())),
            x(() => {
                if (!e.computes.eventCompleted())
                    return m(
                        () => e.computes.eventCompleted(),
                        () => C.sound('adv_postcard'),
                    );
            }),
            x(() =>
                a(
                    () => e.doors.get(),
                    () => o(0),
                    { delay: 400 },
                ),
            ),
            r.jsx('div', {
                className: Pa,
                lang: R.strings.settings.LANGUAGE_CODE(),
                children: r.jsxs('div', {
                    className: d(Va, e.isAnimationEnabled.get() ? Fa : $a, e.showBlur.get() && qa),
                    children: [
                        r.jsx('div', { className: Oa }),
                        r.jsx('div', { className: Ta }),
                        r.jsx(Aa, {}),
                        r.jsx(Sa, {}),
                        r.jsx(Ct, {}),
                        r.jsx(la, {}),
                    ],
                }),
            })
        );
    });
$(r.jsx(q, { children: r.jsx(Z, { children: r.jsx(ae, { children: r.jsx(Ba, {}) }) }) }));
