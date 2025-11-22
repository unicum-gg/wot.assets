import { x as e, j as t, w as a } from '../../../../chunks/vendor.js';
import { i as n, F as i, bO as s, r as p } from '../../../../chunks/lib.js';
import { t as o, T as r } from '../../../../chunks/tooltips.module.js';
var c = ((e) => (
    (e[(e.StartingSoon = 0)] = 'StartingSoon'),
    (e[(e.Live = 1)] = 'Live'),
    (e[(e.BetweenShowmatches = 2)] = 'BetweenShowmatches'),
    (e[(e.Finished = 3)] = 'Finished'),
    e
))(c || {});
const [_, l] = n()(({ observableModel: e }) => ({ root: e.object() })),
    d = {
        base: 'App_db75b9f1',
        topContentBg: 'App_topContentBg_fc931abd',
        base__live: 'App_base__live_0',
        topContent: 'App_topContent_52c7eecf',
        title: 'App_title_65c2019a',
        bottomContent: 'App_bottomContent_86b6402b',
        paragraph: 'App_paragraph_849a18a2',
        divider: 'App_divider_5cecff56',
        timerContainer: 'App_timerContainer_3955c4fa',
        fadeIn: 'App_fadeIn_0',
        fadeInThreeQuarters: 'App_fadeInThreeQuarters_0',
        fadeInHalf: 'App_fadeInHalf_0',
        fadeOut: 'App_fadeOut_0',
        fadeInWithScale: 'App_fadeInWithScale_0',
        slideUp: 'App_slideUp_0',
        scale: 'App_scale_0',
        raysAppearance: 'App_raysAppearance_0',
        rotate: 'App_rotate_0',
        'reverse-rotate': 'App_reverse-rotate_0',
        glowAppearance: 'App_glowAppearance_0',
        highlightAppearance: 'App_highlightAppearance_0',
        blink: 'App_blink_0',
        slideUpIn: 'App_slideUpIn_0',
    },
    h = {
        [c.StartingSoon]: 'startingSoon',
        [c.Live]: 'live',
        [c.BetweenShowmatches]: 'betweenShowmatches',
        [c.Finished]: 'finished',
    },
    m = [c.Live, c.BetweenShowmatches],
    A = e(() => {
        const { model: e } = l(),
            { state: n, timeLeftUntilLiveMatch: p, timeLeftUntilNextShowMatchDay: r } = e.root.get();
        return t.jsxs('div', {
            className: a(d.base, d[`base__${h[n]}`]),
            children: [
                t.jsx('div', { className: d.topContentBg }),
                t.jsx('div', {
                    className: d.topContent,
                    children: t.jsx('div', {
                        className: d.title,
                        children: R.strings.comp7_ext.tournamentsEntryPointTooltip.heading(),
                    }),
                }),
                t.jsxs('div', {
                    className: d.bottomContent,
                    children: [
                        t.jsx(i, {
                            text: R.strings.comp7_ext.tournamentsEntryPointTooltip.description(),
                            classMix: d.paragraph,
                        }),
                        m.includes(n) &&
                            t.jsxs(t.Fragment, {
                                children: [
                                    t.jsx('div', { className: a(o.divider, d.divider) }),
                                    t.jsx('div', {
                                        className: d.timerContainer,
                                        children: t.jsx(i, {
                                            text:
                                                n === c.Live
                                                    ? R.strings.comp7_ext.tournamentsEntryPointTooltip.live()
                                                    : R.strings.comp7_ext.tournamentsEntryPointTooltip.showmatch(),
                                            binding: {
                                                timer: t.jsx(s, {
                                                    start: n === c.Live ? p : r,
                                                    format: s.format.default,
                                                    type: s.type.accent,
                                                    size: s.size.x24x24,
                                                }),
                                            },
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    });
p(t.jsx(_, { children: t.jsx(r, { children: t.jsx(A, {}) }) }));
