import { y as e, j as s, w as i } from '../../../../chunks/vendor.js';
import { i as t, aC as r, q as a, F as o, aA as c, aB as n } from '../../../../chunks/lib.js';
import { T as d } from '../../../../chunks/tooltip_decorator.js';
import { S as p } from '../../../../chunks/enums.js';
/* empty css                        */ const [l, g] = t()(({ observableModel: e }) => ({ root: e.object() }), r),
    x = 'App_7443fc67',
    m = 'App_section_a3957b62',
    j = 'App_section__bg_b6da9bb8',
    h = 'App_heading_ade6eef',
    _ = 'App_count_d181c83a',
    v = 'App_description_35a8fa7c',
    b = 'App_vehicleName_e27f46e4',
    u = e(() => {
        const { model: e } = g(),
            { statisticsMode: t, averagePrestige: r, recordPrestige: c, recordPrestigeVehicleName: n } = e.root.get();
        return s.jsxs('div', {
            className: x,
            children: [
                s.jsxs('div', {
                    className: m,
                    children: [
                        s.jsx(a, {
                            text:
                                t === p.Season
                                    ? R.strings.comp7_ext.prestigeIndicatorTooltip.prestige.season.heading()
                                    : R.strings.comp7_ext.prestigeIndicatorTooltip.prestige.day.heading(),
                            binding: {
                                averagePrestige: s.jsx('div', { className: _, children: s.jsx(o, { value: r }) }),
                            },
                            classMix: h,
                        }),
                        s.jsx(a, {
                            text: R.strings.comp7_ext.prestigeIndicatorTooltip.prestige.description(),
                            classMix: v,
                        }),
                    ],
                }),
                s.jsxs('div', {
                    className: i(m, j),
                    children: [
                        s.jsx(a, {
                            text:
                                t === p.Season
                                    ? R.strings.comp7_ext.prestigeIndicatorTooltip.prestigeRecord.season.heading()
                                    : R.strings.comp7_ext.prestigeIndicatorTooltip.prestigeRecord.day.heading(),
                            binding: {
                                recordPrestige: s.jsx('div', { className: _, children: s.jsx(o, { value: c }) }),
                            },
                            classMix: h,
                        }),
                        s.jsx(a, {
                            text: R.strings.comp7_ext.prestigeIndicatorTooltip.prestigeRecord.description(),
                            binding: { vehicleName: s.jsx('div', { className: b, children: n }) },
                            classMix: v,
                        }),
                    ],
                }),
            ],
        });
    });
c(s.jsx(l, { children: s.jsx(n, { children: s.jsx(d, { children: s.jsx(u, {}) }) }) }));
