import { r as e, j as t, f as s, D as a } from '../../../chunks/vendor.js';
import {
    bu as l,
    bv as n,
    c0 as c,
    z as i,
    a4 as r,
    i as o,
    d2 as u,
    b as d,
    B as m,
    h as p,
    a7 as v,
    r as b,
    U as f,
    c$ as x,
    d0 as h,
} from '../../../chunks/lib.js';
import { u as _, D as j } from '../../../chunks/common.js';
import { M as y, g as S } from '../../../chunks/date-time-utils.js';
import '../../../chunks/story_point.js';
import '../../../chunks/sound.js';
const N = 'SceneWrapper_52fcfc1e',
    g = 'SceneWrapper_base__down_4ece5089',
    M = 'SceneWrapper_base__moveSpaceDisabled_1b1cd939';
function A({
    children: a,
    moveSpace: l,
    onMouseOver3dScene: n,
    onDragStateChange: c,
    moveSpaceEnabled: i = !0,
    className: r,
    ...o
}) {
    const [u, d] = e.useState(!1),
        [m, p] = e.useState({ x: 0, y: 0 }),
        v = e.useRef(null);
    e.useEffect(() => {
        function e() {
            (d(!1), c?.(!1));
        }
        return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
    }, []);
    const b = (e) => {
        if (!v.current) return;
        const { width: t, height: s } = v.current.getBoundingClientRect();
        return !(0 === e.clientX || 0 === e.clientY || e.clientX >= t - 1 || e.clientY >= s - 1);
    };
    return t.jsx('div', {
        ...o,
        ref: v,
        className: s(N, u && g, !i && M, r),
        onMouseDown: function (e) {
            (e.preventDefault(), 0 === e.button && b(e) && i && (d(!0), c?.(!0), p({ x: e.clientX, y: e.clientY })));
        },
        onMouseMove: function (e) {
            if ((e.preventDefault(), u)) {
                if (!b(e)) return;
                const t = e.clientX !== m.x ? e.clientX - m.x : 0,
                    s = e.clientY !== m.y ? e.clientY - m.y : 0;
                (p({ x: e.clientX, y: e.clientY }), l({ dx: t, dy: s, dz: 0 }));
            }
        },
        onMouseUp: function () {
            (d(!1), c?.(!1));
        },
        onWheel: function (e) {
            if ((e.preventDefault(), !i || !b(e))) return;
            const t = e.deltaY < 0;
            l({ dx: 0, dy: 0, dz: t ? -600 : 600 });
        },
        onMouseOver: function () {
            n({ isOver3dScene: !0 });
        },
        onMouseOut: function () {
            n({ isOver3dScene: !1 });
        },
        children: a,
    });
}
const P = a(function ({
        className: e,
        classNames: s,
        iconSize: a = i.x48x48,
        vehicleId: o,
        vehicleType: u,
        isPremium: d,
        isElite: m,
        vehicleName: p,
        vehicleLvl: v,
        roleKey: b,
        emblem: f,
    }) {
        const x = _(o);
        return t.jsxs(l, {
            className: e,
            children: [
                Boolean(f.level) &&
                    t.jsx(l.Prestige, {
                        level: f.level,
                        grade: f.grade,
                        type: f.type,
                        direction: l.Prestige.direction.left,
                    }),
                t.jsx(l.Level, { className: s?.level, value: v, numberType: c.numberTypes.roman }),
                n(u) && t.jsx(l.Type, { className: s?.type, type: u, premium: d || m, size: a }),
                t.jsx(l.Name, { className: s?.name, children: p }),
                b && t.jsx(l.Role, { ...x, classNames: { base: s?.role }, roleKey: r(b), size: l.Role.sizes.x16x16 }),
            ],
        });
    }),
    [z, D] = o()(
        ({ observableModel: e }) => ({
            ...e.primitives(['isExitButtonAvailable', 'timerStartTime']),
            selectedVehicle: e.object('selectedVehicle'),
            selectedDifficulty: e.object('selectedDifficulty'),
        }),
        ({ externalModel: e }) => ({
            moveSpace: e.createCallback((e) => e, 'onMoveSpace'),
            mouseOver3dScene: e.createCallback((e) => ({ isOver3dScene: e }), 'onOverScene'),
            exitBattle: e.createCallbackNoArgs('onExitBattle'),
            openMenu: e.createCallbackNoArgs('onEscape'),
        }),
    );
function Q({ className: s, timerStartTime: a }) {
    const l = a ?? Date.now(),
        [n, c] = e.useState(Math.max(0, Math.floor((Date.now() - l) / y)));
    e.useEffect(() => {
        const e = setInterval(() => {
            const e = Math.max(Math.floor((Date.now() - l) / y));
            c(e);
        }, y);
        return () => clearInterval(e);
    }, [l]);
    const { minutes: i, seconds: r } = S(n);
    return t.jsx('div', { className: s, children: `${i}:${String(r).padStart(2, '0')}` });
}
const k = 'PrebattleQueueApp_dad90a27',
    E = 'PrebattleQueueApp_sceneWrapper_e240a18f',
    w = 'PrebattleQueueApp_vignette_df4e667c',
    B = 'PrebattleQueueApp_topShadow_6589c225',
    O = 'PrebattleQueueApp_container_653beeb8',
    T = 'PrebattleQueueApp_difficulty_caaef6b0',
    C = 'PrebattleQueueApp_timer_744d2724',
    L = 'PrebattleQueueApp_vehicle_aa053dfb',
    I = 'PrebattleQueueApp_vehicleInfo_16038df5',
    Y = 'PrebattleQueueApp_vehicleName_dee87a9c',
    X = 'PrebattleQueueApp_vehicleLevel_dee87a9c',
    W = 'PrebattleQueueApp_vehicleType_1c7b81b3',
    V = 'PrebattleQueueApp_vehicleRole_24a367fe',
    $ = 'PrebattleQueueApp_leaveBtn_701eb3a6',
    K = 'PrebattleQueueApp_tip_34008381',
    U = a(function () {
        const { model: e, controls: s } = D();
        u(s.openMenu);
        const a = d({ value: m.sizes.small }, { medium: { value: m.sizes.large } }),
            l = d({ size: i.x24x24 }, { medium: { size: i.x48x48 }, extraLarge: { size: i.x64x64 } }),
            n = e.selectedDifficulty.get(),
            c = e.selectedVehicle.get(),
            r = p({
                contentId: R.views.last_stand.mono.lobby.tooltips.difficulty_tooltip('resId'),
                args: { level: n.level, state: n.state, isLocked: n.isLocked },
                disabled: !1,
            });
        return t.jsxs('div', {
            className: k,
            children: [
                t.jsx('div', { className: w }),
                t.jsx('div', { className: B }),
                t.jsx('div', { className: E, children: t.jsx(A, { moveSpace: s.moveSpace, onMouseOver3dScene: v }) }),
                t.jsxs('div', {
                    className: O,
                    children: [
                        t.jsx('div', {
                            ...r,
                            onMouseEnter: (e) => {
                                (e.stopPropagation(), r.onMouseEnter(e));
                            },
                            children: t.jsx(j, { className: T, ...n, isDisabled: !1, onClick: v }),
                        }),
                        t.jsx(Q, { className: C, timerStartTime: e.timerStartTime.get() }),
                        t.jsx('div', {
                            className: L,
                            children: t.jsx(P, {
                                className: I,
                                classNames: { name: Y, level: X, type: W, role: V },
                                iconSize: l.size,
                                ...c,
                            }),
                        }),
                        t.jsx('div', { className: K, children: R.strings.last_stand_lobby.preBattle.tip() }),
                        e.isExitButtonAvailable.get() &&
                            t.jsx('div', {
                                className: $,
                                children: t.jsx(m, {
                                    theme: m.themes.secondary,
                                    size: a.value,
                                    onClick: s.exitBattle,
                                    children: R.strings.last_stand_lobby.preBattle.leave(),
                                }),
                            }),
                    ],
                }),
            ],
        });
    });
b(t.jsx(z, { children: t.jsx(f, { children: t.jsx(U, {}) }) }))
    .then(() => x(document.getElementById('root')))
    .then(() => h());
