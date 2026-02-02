import { j as e, f as a, v as s } from '../../../../chunks/vendor.js';
import {
    y as t,
    aP as r,
    ah as l,
    i,
    a as d,
    aQ as n,
    aR as o,
    aS as c,
    aT as m,
    ai as _,
    n as p,
    r as b,
    ap as u,
    aK as h,
    ay as x,
    ax as j,
} from '../../../../chunks/lib.js';
const v = {
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
    f = ({ battleType: s, battleMode: r, isNotFirstColumn: l }) =>
        e.jsxs('div', {
            className: a(v.base, l && v.base__notFirstColumn),
            children: [
                e.jsx('div', { className: v.battleType, children: s }),
                t(r, ({ place: s, points: t }, l) => {
                    const i = r.length - 1 === l;
                    return e.jsx(
                        'div',
                        {
                            className: v.cell,
                            children: e.jsxs('div', {
                                className: a(v.row, i && v.row__last),
                                children: [
                                    e.jsx('div', { className: v.place, children: s }),
                                    t
                                        ? e.jsxs('div', {
                                              className: v.pointContainer,
                                              children: [
                                                  e.jsx('div', { className: v.point, children: t }),
                                                  e.jsx('div', { className: v.reward }),
                                              ],
                                          })
                                        : e.jsx('div', { className: v.dash, children: R.strings.common.common.dash() }),
                                ],
                            }),
                        },
                        l,
                    );
                }),
            ],
        }),
    N = 'Table_8cfe9af4',
    y = 'Table_battleTypeBg_b005c4ad',
    T = 'Table_a7b52080',
    C = 'Table_separators_1618eb00',
    g = 'Table_separator_eea24026',
    H = ({ battleModes: a, battleType: s }) => {
        const i = r(a, (e, a) => Math.max(e, a.length), 0);
        return e.jsxs('div', {
            className: N,
            children: [
                e.jsx('div', { className: y }),
                e.jsx('div', {
                    className: T,
                    children: t(a, (a, t) => {
                        const r = t > 0;
                        return e.jsx(f, { battleMode: a, battleType: s(t), isNotFirstColumn: r }, t);
                    }),
                }),
                e.jsx('div', { className: C, children: i > 1 && l(i - 1, (a) => e.jsx('div', { className: g }, a)) }),
            ],
        });
    },
    w = R.strings.battle_royale_extention.tooltip.progressionWidget,
    [M, E] = i()(({ observableModel: e }) => {
        const a = e.object(),
            s = d.primitive(() => {
                const e = a.get().timeTillEnd;
                let s = '';
                return (
                    (s =
                        e >= n
                            ? o(R.strings.common.duration.days(), { days: Math.trunc(e / n) })
                            : e >= c
                              ? o(R.strings.common.duration.hours(), { hours: Math.trunc(e / c) })
                              : o(R.strings.common.duration.minutes(), { minutes: Math.trunc(e / m) || 1 })),
                    { text: w.subTitle(), time: s }
                );
            }),
            t = d.primitive((e) => {
                const s = a.get().leaderBoard.battleTypes,
                    t = _(s, e);
                if (!t) throw Error('battleType is undefined');
                return t;
            });
        return { params: a, computes: { battleLeaveTime: s, battleType: t } };
    }, p),
    $ = {
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
    B = 'battle_royale_extention.tooltip.progressionWidget',
    F = s(() => {
        const { model: s } = E(),
            { isCompleted: t } = s.params.get(),
            { time: r, text: l } = s.computes.battleLeaveTime(),
            i = b.resolve('strings'),
            d = t ? 'completed' : 'inProgress';
        return e.jsxs('div', {
            className: a($.base, $[`base__${d}`]),
            children: [
                e.jsxs('div', {
                    className: $.header,
                    children: [
                        e.jsx('div', { className: $.completedIcon }),
                        e.jsxs('div', {
                            className: $.headerContainer,
                            children: [
                                e.jsx('div', { className: $.title, children: i.readOrEmpty(`${B}.title`) }),
                                e.jsx(u, { text: l, params: { value: r }, className: $.time, upgradeLegacy: !0 }),
                            ],
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: $.description,
                    children: [
                        e.jsx('div', { className: $.subtitle, children: i.readOrEmpty(`${B}.description.header`) }),
                        e.jsx('div', { className: $.text, children: i.readOrEmpty(`${B}.description.${d}`) }),
                    ],
                }),
            ],
        });
    }),
    I = 'App_54b301f',
    L = s(function () {
        const { model: a } = E(),
            { isCompleted: s, leaderBoard: t } = a.params.get();
        return e.jsx(h, {
            children: e.jsx(h.Decorator, {
                children: e.jsxs('div', {
                    className: I,
                    children: [
                        e.jsx(F, {}),
                        !s && e.jsx(H, { battleModes: t.battleModes, battleType: a.computes.battleType }),
                    ],
                }),
            }),
        });
    });
x(e.jsx(j, { children: e.jsx(M, { children: e.jsx(L, {}) }) }));
