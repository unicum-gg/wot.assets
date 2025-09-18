import { y as e, j as t, x as s } from '../../../chunks/vendor.js';
import { i as a, F as r, T as o, r as i, d as n } from '../../../chunks/lib.js';
import { g as p } from '../../../chunks/get_roman_levels.js';
import { u as d } from '../../../chunks/use_server_time_polling.js';
/* empty css                     */ var l = ((e) => (
    (e[(e.NotStarted = 0)] = 'NotStarted'),
    (e[(e.JustStarted = 1)] = 'JustStarted'),
    (e[(e.Active = 2)] = 'Active'),
    (e[(e.EndSoon = 3)] = 'EndSoon'),
    (e[(e.End = 4)] = 'End'),
    (e[(e.Disabled = 5)] = 'Disabled'),
    e
))(l || {});
const [_, c] = a()(
        ({ observableModel: e }) => ({
            root: e.object(),
            vehicleLevels: e.array('vehicleLevels'),
            season: e.primitives(['startTimestamp', 'endTimestamp', 'serverTimestamp', 'state', 'name'], 'season'),
        }),
        ({ externalModel: e }) => ({ pollServerTime: e.createCallbackNoArgs('season.pollServerTime') }),
    ),
    m = e(() => {
        const { model: e, controls: s } = c(),
            { timeLeftUntilPrimeTime: a } = e.root.get(),
            i = e.season.endTimestamp.get(),
            n = e.season.serverTimestamp.get(),
            p = e.season.state.get();
        return (
            d(n, i, s.pollServerTime),
            p === l.Disabled
                ? t.jsx(r, {
                      text: R.strings.comp7_light.entryPointTooltip.status.ceasefire(),
                      binding: {
                          timer: t.jsx(o, {
                              start: a,
                              format: o.format.default,
                              type: o.type.cooldown,
                              size: o.size.x24x24,
                          }),
                      },
                  })
                : t.jsx(r, {
                      text: R.strings.comp7_light.entryPointTooltip.status.active(),
                      binding: {
                          timer: t.jsx(o, {
                              start: i - n,
                              format: o.format.default,
                              type: o.type.accent,
                              size: o.size.x24x24,
                          }),
                      },
                  })
        );
    }),
    g = {
        decorator: 'App_decorator_2b788cac',
        decoratorInner: 'App_decoratorInner_c21b80f6',
        base: 'App_db75b9f1',
        topContentBg: 'App_topContentBg_1d8d99d8',
        base__notStarted: 'App_base__notStarted_0',
        base__disabled: 'App_base__disabled_0',
        base__end: 'App_base__end_0',
        topContent: 'App_topContent_52c7eecf',
        bottomContent: 'App_bottomContent_86b6402b',
        title: 'App_title_65c2019a',
        paragraph: 'App_paragraph_849a18a2',
        mode: 'App_mode_e4b84612',
        modeBtn: 'App_modeBtn_191edcde',
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
    v = 'Tooltips_divider_ca103a1d',
    A = {
        [l.Disabled]: 'disabled',
        [l.JustStarted]: 'justStarted',
        [l.NotStarted]: 'notStarted',
        [l.Active]: 'active',
        [l.EndSoon]: 'endSoon',
        [l.End]: 'end',
    },
    b = e(() => {
        const { model: e } = c(),
            a = e.season.state.get(),
            o = p(e.vehicleLevels.get(), R.strings.comp7_light.listSeparator());
        return t.jsxs('div', {
            className: s(g.base, g[`base__${A[a]}`]),
            children: [
                t.jsx('div', { className: g.topContentBg }),
                t.jsx('div', {
                    className: g.topContent,
                    children: t.jsx('div', { className: g.title, children: R.strings.comp7_light.featureName() }),
                }),
                t.jsxs('div', {
                    className: g.bottomContent,
                    children: [
                        t.jsx(r, {
                            text: R.strings.comp7_light.entryPointTooltip.description(),
                            binding: { levels: o },
                            classMix: g.paragraph,
                        }),
                        t.jsx(r, {
                            text: R.strings.comp7_light.entryPointTooltip.modeDescription(),
                            binding: {
                                mode: t.jsx('div', {
                                    className: g.modeBtn,
                                    children: R.strings.comp7_light.entryPointTooltip.modeBtnText(),
                                }),
                            },
                            classMix: g.mode,
                        }),
                        t.jsx('div', { className: s(v, g.divider) }),
                        t.jsx('div', { className: g.timerContainer, children: t.jsx(m, {}) }),
                    ],
                }),
            ],
        });
    });
i(
    t.jsx(_, {
        children: t.jsx(n, {
            children: t.jsx('div', {
                className: g.decorator,
                children: t.jsx('div', { className: g.decoratorInner, children: t.jsx(b, {}) }),
            }),
        }),
    }),
);
