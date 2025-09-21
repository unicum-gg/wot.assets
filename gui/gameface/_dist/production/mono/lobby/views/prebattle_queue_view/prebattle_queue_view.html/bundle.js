import { r as e, j as t, f as n, s as a } from '../../../chunks/vendor.js';
import { i as s, a8 as c, a9 as l, aG as r, $ as i, P as o, Q as u, R as d, U as p } from '../../../chunks/lib.js';
const m = 'SceneWrapper_52fcfc1e',
    v = 'SceneWrapper_base__down_4ece5089',
    f = 'SceneWrapper_base__moveSpaceDisabled_1b1cd939';
function b({
    children: a,
    moveSpace: s,
    onMouseOver3dScene: c,
    onDragStateChange: l,
    moveSpaceEnabled: r = !0,
    className: i,
    ...o
}) {
    const [u, d] = e.useState(!1),
        [p, b] = e.useState({ x: 0, y: 0 }),
        _ = e.useRef(null);
    e.useEffect(() => {
        function e() {
            (d(!1), null == l || l(!1));
        }
        return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
    }, []);
    const h = (e) => {
        if (!_.current) return;
        const { width: t, height: n } = _.current.getBoundingClientRect();
        return !(0 === e.clientX || 0 === e.clientY || e.clientX >= t - 1 || e.clientY >= n - 1);
    };
    return t.jsx('div', {
        ...o,
        ref: _,
        className: n(m, u && v, !r && f, i),
        onMouseDown: function (e) {
            (e.preventDefault(),
                0 === e.button && h(e) && r && (d(!0), null == l || l(!0), b({ x: e.clientX, y: e.clientY })));
        },
        onMouseMove: function (e) {
            if ((e.preventDefault(), u)) {
                if (!h(e)) return;
                const t = e.clientX !== p.x ? e.clientX - p.x : 0,
                    n = e.clientY !== p.y ? e.clientY - p.y : 0;
                (b({ x: e.clientX, y: e.clientY }), s({ dx: t, dy: n, dz: 0 }));
            }
        },
        onMouseUp: function () {
            (d(!1), null == l || l(!1));
        },
        onWheel: function (e) {
            if ((e.preventDefault(), !r || !h(e))) return;
            const t = e.deltaY < 0;
            s({ dx: 0, dy: 0, dz: t ? -600 : 600 });
        },
        onMouseOver: function () {
            c({ isOver3dScene: !0 });
        },
        onMouseOut: function () {
            c({ isOver3dScene: !1 });
        },
        children: a,
    });
}
const [_, h] = s()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({
            moveSpace: e.createCallback((e) => e, 'onMoveSpace'),
            mouseOver3dScene: e.createCallback((e) => ({ isOver3dScene: e }), 'onOverScene'),
            exitBattle: e.createCallbackNoArgs('onExitBattle'),
            openMenu: e.createCallbackNoArgs('onEscape'),
        }),
    ),
    x = 1e3,
    S = 3600;
const j = ({ className: n, timerStartTime: a }) => {
        const s = a ?? Date.now(),
            [c, l] = e.useState(Math.max(0, Math.floor((Date.now() - s) / x)));
        e.useEffect(() => {
            const e = setInterval(() => {
                const e = Math.max(Math.floor((Date.now() - s) / x));
                l(e);
            }, x);
            return () => clearInterval(e);
        }, [s]);
        const { minutes: r, seconds: i } = (function (e = 0) {
            let t = e;
            const n = Math.trunc(t / 86400);
            t -= 86400 * n;
            const a = Math.trunc(t / S);
            t -= a * S;
            const s = Math.trunc(t / 60);
            return ((t -= 60 * s), { days: n, hours: a, minutes: s, seconds: t });
        })(c);
        return t.jsx('div', { className: n, children: `${r}:${String(i).padStart(2, '0')}` });
    },
    g = 'PrebattleQueueApp_dad90a27',
    M = 'PrebattleQueueApp_sceneWrapper_e240a18f',
    N = 'PrebattleQueueApp_vignette_df4e667c',
    y = 'PrebattleQueueApp_container_653beeb8',
    A = 'PrebattleQueueApp_containerIcon_f2dd1b77',
    P = 'PrebattleQueueApp_smoke_9bb4e6a0',
    Q = 'PrebattleQueueApp_icon_b7fa2fd7',
    w = 'PrebattleQueueApp_title_d262fafd',
    B = 'PrebattleQueueApp_timer_dfb21a5c',
    D = 'PrebattleQueueApp_searching_30a888c6',
    k = 'PrebattleQueueApp_leaveBtn_8e3485b8',
    E = 'PrebattleQueueApp_tip_f191965b',
    O = a(() => {
        const { model: e, controls: n } = h(),
            { selectedDifficultyLevel: a, isExitButtonAvailable: s, timerStartTime: o } = e.root.get();
        c(n.openMenu);
        const u = l({ value: r.sizes.small }, { medium: { value: r.sizes.large } });
        return t.jsxs('div', {
            className: g,
            children: [
                t.jsx('div', { className: N }),
                t.jsx('div', { className: M, children: t.jsx(b, { moveSpace: n.moveSpace, onMouseOver3dScene: i }) }),
                t.jsxs('div', {
                    className: y,
                    children: [
                        t.jsxs('div', {
                            className: A,
                            children: [
                                t.jsx('div', { className: P }),
                                t.jsx('div', {
                                    className: Q,
                                    style: {
                                        backgroundImage: `url('R.images.last_stand.gui.maps.icons.difficulties.c_112x112.diff_${a}')`,
                                    },
                                }),
                            ],
                        }),
                        t.jsx('div', {
                            className: w,
                            children: R.strings.last_stand_lobby.difficult.uppercase.$dyn(`level_${a}`),
                        }),
                        t.jsx(j, { className: B, timerStartTime: o }),
                        t.jsx('div', { className: D, children: R.strings.last_stand_lobby.preBattle.searching() }),
                        t.jsx('div', { className: E, children: R.strings.last_stand_lobby.preBattle.tip() }),
                        s &&
                            t.jsx('div', {
                                className: k,
                                children: t.jsx(r, {
                                    theme: r.themes.secondary,
                                    size: u.value,
                                    onClick: n.exitBattle,
                                    children: R.strings.last_stand_lobby.preBattle.leave(),
                                }),
                            }),
                    ],
                }),
            ],
        });
    });
o(t.jsx(_, { children: t.jsx(p, { children: t.jsx(O, {}) }) }))
    .then(() => u(document.getElementById('root')))
    .then(() => d());
