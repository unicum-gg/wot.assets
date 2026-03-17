import { y as e, j as t, z as s } from '../../../../chunks/vendor.js';
import { a, F as i, cE as n, aJ as r, dc as o, q as c, a6 as p, d9 as m } from '../../../../chunks/lib.js';
import { c as d, g as l } from '../../../../chunks/readResource.js';
const [_, f] = a()(({ observableModel: e }) => ({ root: e.object(), performance: e.object('performance') })),
    x = {
        root: 'App_root_0',
        base: 'App_db75b9f1',
        topContentBg: 'App_topContentBg_f64e8b02',
        base__inactive: 'App_base__inactive_0',
        base__finished: 'App_base__finished_0',
        base__announce: 'App_base__announce_0',
        topContent: 'App_topContent_52c7eecf',
        bottomContent: 'App_bottomContent_86b6402b',
        title: 'App_title_753bca21',
        paragraph: 'App_paragraph_fb438e59',
        mode: 'App_mode_206f61ed',
        modeBtn: 'App_modeBtn_191edcde',
        performance: 'App_performance_414926ee',
        performanceTitle: 'App_performanceTitle_588190eb',
        base__mediumRisk: 'App_base__mediumRisk_0',
        base__highRisk: 'App_base__highRisk_0',
        performanceText: 'App_performanceText_bb4921fa',
        performanceIcon: 'App_performanceIcon_460c7fbb',
        divider: 'App_divider_25372ba3',
        timerContainer: 'App_timerContainer_74f63437',
        inactiveTimer: 'App_inactiveTimer_aa4edbb',
        timer: 'App_timer_581f55cf',
        inactiveDescription: 'App_inactiveDescription_a9335078',
    },
    h = R.strings.fun_random.entryPoint.tooltip.state,
    b = e(() => {
        const e = o,
            { model: s } = f(),
            { modeState: a, startTime: p, leftTime: m, endTime: d } = s.root.get();
        switch (a) {
            case 'finished':
                return t.jsxs(t.Fragment, {
                    children: [
                        t.jsx('div', { children: h.finished.title() }),
                        t.jsxs('div', {
                            className: x.inactiveTimer,
                            children: [
                                t.jsx(r, {
                                    className: x.timer,
                                    path: 'ui_kit.datetime.x16x16.cooldown',
                                    width: 16,
                                    height: 16,
                                }),
                                t.jsx('div', { className: x.inactiveDescription, children: h.finished.description() }),
                            ],
                        }),
                    ],
                });
            case 'inactive':
                return t.jsx(i, {
                    text: h.ceasefire(),
                    params: {
                        timer: t.jsx(n, {
                            start: m,
                            format: n.format.default,
                            type: n.type.cooldown,
                            size: n.size.x24x24,
                        }),
                    },
                });
            case 'announce':
                return t.jsxs(t.Fragment, {
                    children: [
                        t.jsx('div', { children: h.announce() }),
                        t.jsxs('div', {
                            className: x.inactiveTimer,
                            children: [
                                t.jsx(r, {
                                    className: x.timer,
                                    path: 'ui_kit.datetime.x16x16.cooldown',
                                    width: 16,
                                    height: 16,
                                }),
                                t.jsx(i, {
                                    className: x.inactiveDescription,
                                    text: R.strings.user_missions.common.daterange.divider(),
                                    params: { startDate: e(p, c.DayMonthFull), endDate: e(d, c.DayMonthFull) },
                                }),
                            ],
                        }),
                    ],
                });
            default:
                return t.jsx(i, {
                    text: h.progress(),
                    params: {
                        timer: t.jsx(n, {
                            start: m,
                            format: n.format.default,
                            type: n.type.accent,
                            size: n.size.x24x24,
                        }),
                    },
                });
        }
    }),
    j = e(() => {
        var e, a;
        const { model: n } = f(),
            { assetsPointer: o, modeState: c } = n.root.get(),
            p = n.performance.get(),
            { dynamicTexts: m } = d(null, { assetsPointer: o });
        return t.jsxs('div', {
            className: s(x.base, x[`base__${c}`], x[`base__${p.performanceRisk}`]),
            children: [
                t.jsx('img', { className: x.topContentBg, src: l(o).event_banner_tooltip.bg(), alt: 'background' }),
                t.jsx('div', {
                    className: x.topContent,
                    children: t.jsx('div', { className: x.title, children: m.userName() }),
                }),
                t.jsxs('div', {
                    className: x.bottomContent,
                    children: [
                        t.jsx(i, { text: m.entryPoint.tooltip.description(), className: x.paragraph }),
                        t.jsx(i, {
                            text: R.strings.fun_random.entryPoint.tooltip.modeDescription(),
                            params: {
                                mode: t.jsx('div', {
                                    className: x.modeBtn,
                                    children: R.strings.fun_random.entryPoint.tooltip.modeBtnText(),
                                }),
                            },
                            classMix: x.mode,
                        }),
                        p.showPerfRisk &&
                            t.jsxs('div', {
                                className: x.performance,
                                children: [
                                    t.jsx(r, {
                                        className: x.performanceIcon,
                                        path: 'library.alertIcon',
                                        width: 16,
                                        height: 16,
                                    }),
                                    t.jsx('div', {
                                        className: x.performanceTitle,
                                        children:
                                            null == (e = m.entryPoint.tooltip.performance.$dyn(p.performanceRisk))
                                                ? void 0
                                                : e.header(),
                                    }),
                                    t.jsx('div', {
                                        className: x.performanceText,
                                        children:
                                            null == (a = m.entryPoint.tooltip.performance.$dyn(p.performanceRisk))
                                                ? void 0
                                                : a.description(),
                                    }),
                                ],
                            }),
                        t.jsx('div', { className: x.divider }),
                        t.jsx('div', { className: x.timerContainer, children: t.jsx(b, {}) }),
                    ],
                }),
            ],
        });
    });
p(t.jsx(_, { children: t.jsx(m, { children: t.jsx(j, {}) }) }));
