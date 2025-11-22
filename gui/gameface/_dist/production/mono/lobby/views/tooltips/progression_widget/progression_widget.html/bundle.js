import { j as e, f as a, v as s } from '../../../../chunks/vendor.js';
import {
    y as t,
    ah as r,
    i as l,
    a as i,
    aP as d,
    aQ as n,
    aR as o,
    aS as c,
    ai as m,
    n as _,
    r as p,
    ap as b,
    aK as u,
    ay as h,
    ax as x,
} from '../../../../chunks/lib.js';
const j = {
        base: 'Column_ff23958e',
        battleType: 'Column_battleType_66a6d7ec',
        cell: 'Column_cell_14a5553e',
        row: 'Column_row_74e84674',
        row__last: 'Column_row__last_5be9bf05',
        pointContainer: 'Column_pointContainer_b43f5997',
        point: 'Column_point_1e454ca5',
        place: 'Column_place_241dd415',
        reward: 'Column_reward_e7901f9f',
        dash: 'Column_dash_f9b9a2c',
    },
    v = ({ battleType: s, battleMode: r, isNotFirstColumn: l }) =>
        e.jsxs('div', {
            className: a(j.base, l && j.base__notFirstColumn),
            children: [
                e.jsx('div', { className: j.battleType, children: s }),
                t(r, ({ place: s, points: t }, l) => {
                    const i = r.length - 1 === l;
                    return e.jsx(
                        'div',
                        {
                            className: j.cell,
                            children: e.jsxs('div', {
                                className: a(j.row, i && j.row__last),
                                children: [
                                    e.jsx('div', { className: j.place, children: s }),
                                    t
                                        ? e.jsxs('div', {
                                              className: j.pointContainer,
                                              children: [
                                                  e.jsx('div', { className: j.point, children: t }),
                                                  e.jsx('div', { className: j.reward }),
                                              ],
                                          })
                                        : e.jsx('div', { className: j.dash, children: R.strings.common.common.dash() }),
                                ],
                            }),
                        },
                        l,
                    );
                }),
            ],
        }),
    f = 'Table_8cfe9af4',
    N = 'Table_battleTypeBg_b005c4ad',
    y = 'Table_a7b52080',
    C = 'Table_separators_1618eb00',
    T = 'Table_separator_eea24026',
    g = ({ battleModes: a, battleType: s }) => {
        const l = a.reduce((e, a) => Math.max(e, a.length), 0);
        return e.jsxs('div', {
            className: f,
            children: [
                e.jsx('div', { className: N }),
                e.jsx('div', {
                    className: y,
                    children: t(a, (a, t) => {
                        const r = t > 0;
                        return e.jsx(v, { battleMode: a, battleType: s(t), isNotFirstColumn: r }, t);
                    }),
                }),
                e.jsx('div', { className: C, children: l > 1 && r(l - 1, (a) => e.jsx('div', { className: T }, a)) }),
            ],
        });
    },
    H = R.strings.battle_royale_extention.tooltip.progressionWidget,
    [w, M] = l()(({ observableModel: e }) => {
        const a = e.object(),
            s = i.primitive(() => {
                const e = a.get().timeTillEnd;
                let s = '';
                return (
                    (s =
                        e >= d
                            ? n(R.strings.common.duration.days(), { days: Math.trunc(e / d) })
                            : e >= o
                              ? n(R.strings.common.duration.hours(), { hours: Math.trunc(e / o) })
                              : n(R.strings.common.duration.minutes(), { minutes: Math.trunc(e / c) || 1 })),
                    { text: H.subTitle(), time: s }
                );
            }),
            t = i.primitive((e) => {
                const s = a.get().leaderBoard.battleTypes,
                    t = m(s, e);
                if (!t) throw Error('battleType is undefined');
                return t;
            });
        return { params: a, computes: { battleLeaveTime: s, battleType: t } };
    }, _),
    E = {
        base: 'Header_dd3276f6',
        base__unavailable: 'Header_base__unavailable_45ec0218',
        header: 'Header_f77580be',
        headerContainer: 'Header_headerContainer_56f3a04a',
        base__completed: 'Header_base__completed_65f475ba',
        completedIcon: 'Header_completedIcon_80fa7e3e',
        title: 'Header_title_f002e0bf',
        description: 'Header_description_9a38e31b',
        subtitle: 'Header_subtitle_8fedad16',
        text: 'Header_text_716171df',
        time: 'Header_time_e49d5d0f',
    },
    $ = 'battle_royale_extention.tooltip.progressionWidget',
    B = s(() => {
        const { model: s } = M(),
            { isCompleted: t } = s.params.get(),
            { time: r, text: l } = s.computes.battleLeaveTime(),
            i = p.resolve('strings'),
            d = t ? 'completed' : 'inProgress';
        return e.jsxs('div', {
            className: a(E.base, E[`base__${d}`]),
            children: [
                e.jsxs('div', {
                    className: E.header,
                    children: [
                        e.jsx('div', { className: E.completedIcon }),
                        e.jsxs('div', {
                            className: E.headerContainer,
                            children: [
                                e.jsx('div', { className: E.title, children: i.readOrEmpty(`${$}.title`) }),
                                e.jsx(b, { text: l, params: { value: r }, className: E.time, upgradeLegacy: !0 }),
                            ],
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: E.description,
                    children: [
                        e.jsx('div', { className: E.subtitle, children: i.readOrEmpty(`${$}.description.header`) }),
                        e.jsx('div', { className: E.text, children: i.readOrEmpty(`${$}.description.${d}`) }),
                    ],
                }),
            ],
        });
    }),
    F = 'App_54b301f',
    I = s(function () {
        const { model: a } = M(),
            { isCompleted: s, leaderBoard: t } = a.params.get();
        return e.jsx(u, {
            children: e.jsx(u.Decorator, {
                children: e.jsxs('div', {
                    className: F,
                    children: [
                        e.jsx(B, {}),
                        !s && e.jsx(g, { battleModes: t.battleModes, battleType: a.computes.battleType }),
                    ],
                }),
            }),
        });
    });
h(e.jsx(x, { children: e.jsx(w, { children: e.jsx(I, {}) }) }));
