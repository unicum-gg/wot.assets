import { y as e, j as t, z as a } from '../../../../chunks/vendor.js';
import { a as s, F as i, cr as n, aG as r, c_ as o, j as c, a3 as p, cX as m } from '../../../../chunks/lib.js';
import { g as d, a as _ } from '../../../../chunks/readResource.js';
const [l, f] = s()(({ observableModel: e }) => ({ root: e.object(), performance: e.object('performance') })),
    h = {
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
        modeBtn: 'App_modeBtn_b5da005c',
        modeLabel: 'App_modeLabel_a80a53d8',
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
    x = R.strings.fun_random.entryPoint.tooltip.state,
    b = e(() => {
        const e = o,
            { model: a } = f(),
            { modeState: s, startTime: p, leftTime: m, endTime: d } = a.root.get();
        switch (s) {
            case 'finished':
                return t.jsxs(t.Fragment, {
                    children: [
                        t.jsx('div', { children: x.finished.title() }),
                        t.jsxs('div', {
                            className: h.inactiveTimer,
                            children: [
                                t.jsx(r, {
                                    className: h.timer,
                                    path: 'ui_kit.datetime.x16x16.cooldown',
                                    width: 16,
                                    height: 16,
                                }),
                                t.jsx('div', { className: h.inactiveDescription, children: x.finished.description() }),
                            ],
                        }),
                    ],
                });
            case 'inactive':
                return t.jsx(i, {
                    text: x.ceasefire(),
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
                        t.jsx('div', { children: x.announce() }),
                        t.jsxs('div', {
                            className: h.inactiveTimer,
                            children: [
                                t.jsx(r, {
                                    className: h.timer,
                                    path: 'ui_kit.datetime.x16x16.cooldown',
                                    width: 16,
                                    height: 16,
                                }),
                                t.jsx(i, {
                                    className: h.inactiveDescription,
                                    text: R.strings.user_missions.common.daterange.divider(),
                                    params: { startDate: e(p, c.DayMonthFull), endDate: e(d, c.DayMonthFull) },
                                }),
                            ],
                        }),
                    ],
                });
            default:
                return t.jsx(i, {
                    text: x.progress(),
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
        var e, s;
        const { model: n } = f(),
            { assetsPointer: o, modeState: c } = n.root.get(),
            p = n.performance.get(),
            { dynamicTexts: m } = d(null, { assetsPointer: o });
        return t.jsxs('div', {
            className: a(h.base, h[`base__${c}`], h[`base__${p.performanceRisk}`]),
            children: [
                t.jsx('img', { className: h.topContentBg, src: _(o).event_banner_tooltip.bg(), alt: 'background' }),
                t.jsx('div', {
                    className: h.topContent,
                    children: t.jsx('div', { className: h.title, children: m.userName() }),
                }),
                t.jsxs('div', {
                    className: h.bottomContent,
                    children: [
                        t.jsx(i, { text: m.entryPoint.tooltip.description(), className: h.paragraph }),
                        t.jsx(i, {
                            text: R.strings.fun_random.entryPoint.tooltip.modeDescription(),
                            params: {
                                mode: t.jsx('div', {
                                    className: h.modeBtn,
                                    children: R.strings.fun_random.entryPoint.tooltip.modeBtnText(),
                                }),
                            },
                            className: h.mode,
                        }),
                        p.showPerfRisk &&
                            t.jsxs('div', {
                                className: h.performance,
                                children: [
                                    t.jsx(r, {
                                        className: h.performanceIcon,
                                        path: 'library.alertIcon',
                                        width: 16,
                                        height: 16,
                                    }),
                                    t.jsx('div', {
                                        className: h.performanceTitle,
                                        children:
                                            null == (e = m.entryPoint.tooltip.performance.$dyn(p.performanceRisk))
                                                ? void 0
                                                : e.header(),
                                    }),
                                    t.jsx('div', {
                                        className: h.performanceText,
                                        children:
                                            null == (s = m.entryPoint.tooltip.performance.$dyn(p.performanceRisk))
                                                ? void 0
                                                : s.description(),
                                    }),
                                ],
                            }),
                        t.jsx('div', { className: h.divider }),
                        t.jsx('div', { className: h.timerContainer, children: t.jsx(b, {}) }),
                    ],
                }),
            ],
        });
    });
p(t.jsx(l, { children: t.jsx(m, { children: t.jsx(j, {}) }) }));
