import { y as e, j as a, w as s } from '../../../../chunks/vendor.js';
import { i, aC as n, F as t, q as r, aA as o, aB as c } from '../../../../chunks/lib.js';
import { T as p } from '../../../../chunks/tooltip_decorator.js';
import { D as d } from '../../../../chunks/diff.js';
import { R as _, a as l } from '../../../../chunks/rank_emblem.js';
import { S as x } from '../../../../chunks/enums.js';
/* empty css                        */ import '../../../../chunks/get_division_name.js';
import '../../../../chunks/get_rank_name.js';
const [g, h] = i()(({ observableModel: e }) => ({ root: e.object() }), n),
    m = {
        base: 'App_1452e781',
        base__day: 'App_base__day_d1e1e777',
        base__season: 'App_base__season_25d4a97a',
        indicatorValue: 'App_indicatorValue_1e9a0105',
        description: 'App_description_c3c26a60',
        description__centered: 'App_description__centered_77377dbe',
        ratingDescription: 'App_ratingDescription_432251cd',
        bgSection: 'App_bgSection_dcd190a7',
        section: 'App_section_9843de37',
        section__rank: 'App_section__rank_5c080205',
        section__centered: 'App_section__centered_f952cbde',
        dayText: 'App_dayText_e27f46e4',
        heading: 'App_heading_f1e09b2f',
        highlightedValue: 'App_highlightedValue_64abd7b3',
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
    A = { [x.Day]: 'day', [x.Season]: 'season' },
    f = e(function () {
        const { model: e } = h(),
            {
                statisticsMode: i,
                seasonName: n,
                rank: o,
                division: c,
                ratingPoints: p,
                diff: g,
                maxAchievedRatingPoints: f,
                dayOfMaxRatingIndex: j,
            } = e.root.get();
        return a.jsxs('div', {
            className: s(m.base, m[`base__${A[i]}`]),
            children: [
                a.jsxs('div', {
                    className: s(m.section, m.section__centered, m.section__rank),
                    children: [
                        a.jsx(_, { rank: o, division: c, seasonName: n, size: l.x150 }),
                        a.jsx('div', {
                            className: m.indicatorValue,
                            children: a.jsx(t, { value: i === x.Season ? f : p }),
                        }),
                        i === x.Season
                            ? a.jsx(r, {
                                  text: R.strings.comp7_ext.rankIndicatorTooltip.season.ratingDescription(),
                                  binding: {
                                      dayOfRecord: a.jsx(r, {
                                          text: R.strings.comp7_ext.rankIndicatorTooltip.season.dayOfRecord(),
                                          binding: { day: j + 1 },
                                          classMix: m.dayText,
                                      }),
                                  },
                                  classMix: s(m.description, m.description__centered),
                              })
                            : a.jsx(r, {
                                  text: R.strings.comp7_ext.rankIndicatorTooltip.day.ratingDescription(),
                                  classMix: m.ratingDescription,
                              }),
                    ],
                }),
                i === x.Day &&
                    a.jsxs(a.Fragment, {
                        children: [
                            a.jsxs('div', {
                                className: m.bgSection,
                                children: [
                                    a.jsx(r, {
                                        text: R.strings.comp7_ext.rankIndicatorTooltip.day.ratingDiff(),
                                        binding: { diff: a.jsx(d, { value: g }) },
                                        classMix: m.heading,
                                    }),
                                    a.jsx(r, {
                                        text: R.strings.comp7_ext.rankIndicatorTooltip.day.ratingDiffDescription(),
                                        classMix: m.description,
                                    }),
                                ],
                            }),
                            a.jsxs('div', {
                                className: m.section,
                                children: [
                                    a.jsx(r, {
                                        text: R.strings.comp7_ext.rankIndicatorTooltip.day.ratingRecord(),
                                        binding: {
                                            maxAchievedRatingPoints: a.jsx('div', {
                                                className: m.highlightedValue,
                                                children: a.jsx(t, { value: f }),
                                            }),
                                        },
                                        classMix: m.heading,
                                    }),
                                    a.jsx(r, {
                                        text: R.strings.comp7_ext.rankIndicatorTooltip.day.ratingRecordDescription(),
                                        classMix: m.description,
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        });
    });
o(a.jsx(g, { children: a.jsx(c, { children: a.jsx(p, { children: a.jsx(f, {}) }) }) }));
