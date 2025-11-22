import { G as e, H as s, I as a, v as r, j as t } from '../../../../chunks/vendor.js';
import { i, a as l, n as c, r as d, ap as n, aK as p, ay as o, ax as h } from '../../../../chunks/lib.js';
import { A as m, B as u } from '../../../../chunks/model.js';
const _ = s({ alertType: a(m), battleSchedule: u }),
    [j, x] = i()((s) => {
        const a = s.observableModel.primitives(['params', 'type']);
        return {
            type: a.type,
            computes: {
                params: l.primitive(() => {
                    try {
                        return e(_, JSON.parse(a.params.get()));
                    } catch (s) {
                        return (console.error(s), { alertType: m.None, battleSchedule: [] });
                    }
                }),
            },
        };
    }, c);
function b() {
    return x().model.computes.params();
}
const v = {
        base: 'App_b217f952',
        header: 'App_header_7064cb34',
        description: 'App_description_254da56e',
        battleSchedule: 'App_battleSchedule_c84dc551',
        scheduleIcon: 'App_scheduleIcon_f2261e5a',
        scheduleContainer: 'App_scheduleContainer_2cf619f6',
        scheduleTitle: 'App_scheduleTitle_bc482b99',
        periodsContainer: 'App_periodsContainer_3e673754',
        periodList: 'App_periodList_72a48a31',
        period: 'App_period_b93939b2',
        goal: 'App_goal_d5b93517',
    },
    f = d.resolve('strings'),
    N = R.strings.battle_royale.ceasefire,
    y = r(function () {
        const { battleSchedule: e } = b();
        return t.jsxs('div', {
            className: v.battleSchedule,
            children: [
                t.jsx('div', { className: v.scheduleIcon }),
                t.jsxs('div', {
                    className: v.scheduleContainer,
                    children: [
                        t.jsx('div', { className: v.scheduleTitle, children: N.header.schedule() }),
                        e.map(({ goal: e, periods: s }, a) =>
                            t.jsxs(
                                'div',
                                {
                                    className: v.periodsContainer,
                                    children: [
                                        t.jsx('div', {
                                            className: v.periodList,
                                            children: s.map(([e, s], a) =>
                                                t.jsx(
                                                    n,
                                                    {
                                                        text: N.template.schedule(),
                                                        params: { start: e, end: s },
                                                        className: v.period,
                                                    },
                                                    `${a}-${e}-${s}`,
                                                ),
                                            ),
                                        }),
                                        t.jsx('div', { className: v.goal, children: e }),
                                    ],
                                },
                                e + a,
                            ),
                        ),
                    ],
                }),
            ],
        });
    }),
    A = r(function () {
        const { alertType: e } = b(),
            s = e === m.CeasefireAllServers || e === m.CeasefireCurrentServer;
        return t.jsx(p, {
            children: t.jsx(p.Decorator, {
                children: t.jsxs('div', {
                    className: v.base,
                    children: [
                        t.jsxs('div', {
                            className: v.headerContainer,
                            children: [
                                t.jsx('div', {
                                    className: v.header,
                                    children: f.readOrEmpty(`battle_royale.ceasefire.header.${e}`),
                                }),
                                t.jsx('div', {
                                    className: v.description,
                                    children: t.jsx(n, {
                                        text: f.readOrEmpty(`battle_royale.ceasefire.text.${e}`),
                                        split: !0,
                                    }),
                                }),
                            ],
                        }),
                        s && t.jsx(y, {}),
                    ],
                }),
            }),
        });
    });
o(t.jsx(h, { children: t.jsx(j, { children: t.jsx(A, {}) }) }));
