import { S as e, r as a, j as s, aa as t } from '../../../../chunks/vendor.js';
import {
    i as o,
    n,
    c1 as r,
    a8 as i,
    d5 as l,
    cA as c,
    bX as d,
    c0 as p,
    d6 as m,
    cu as _,
} from '../../../../chunks/lib.js';
import { F as f, I as x, A as h, a as T, b } from '../../../../chunks/event_banner_state.js';
import { D as u } from '../../../../chunks/divider.js';
const [j, v] = o()(
        ({ observableModel: e }) => ({
            ...e.primitives([
                'state',
                'eventStartDate',
                'eventEndDate',
                'rewardsCount',
                'curLevel',
                'maxLevel',
                'curPoints',
                'maxPoints',
                'vehiclesLevel',
            ]),
        }),
        n,
    ),
    g = 'DateInfo_timerWrapper_8a5d0eea',
    D = 'DateInfo_text_200a86de',
    N = 'DateInfo_dateRange_4555ce2f',
    w = 'DateInfo_dateRangeLabel_ecd46d59',
    I = 'DateInfo_dateRangeWrapper_e3de28dc',
    B = 'DateInfo_curfewText_f40d11bf',
    P = 'DateInfo_cooldownIconWrapper_dc30f0ca',
    y = 'DateInfo_cooldownIcon_98fd90f',
    L = 'dateRange',
    S = 'cooldown',
    W = 'accent',
    k = (e, a, o, n) => {
        const r = l;
        return {
            [S]: s.jsx(i, {
                className: t(B, D),
                path: 'fl_tooltips.bannerTooltip.curfewTime',
                params: { timer: s.jsx(d, { size: 'x24x24', type: 'cooldown', start: n }) },
            }),
            [W]: s.jsx(d, { size: 'x24x24', type: 'accent', start: n }),
            [L]: s.jsxs('div', {
                className: I,
                children: [
                    s.jsx(i, { className: w, path: 'fl_tooltips.bannerTooltip.dateRangeLabel' }),
                    s.jsx(i, {
                        className: N,
                        path: 'fl_tooltips.bannerTooltip.dateRange',
                        params: {
                            icon: s.jsx('div', { className: P, children: s.jsx('div', { className: y }) }),
                            startDate: r(a, c.DayMonthFull),
                            endDate: r(o, c.DayMonthFull),
                        },
                    }),
                ],
            }),
        }[e];
    },
    A = e(function ({ type: e }) {
        const { model: t } = v(),
            o = t.eventStartDate.get(),
            n = t.eventEndDate.get(),
            [i, l] = a.useState(n - Math.floor(new Date().getTime() / r));
        return (
            a.useEffect(() => {
                const e = window.setTimeout(() => {
                    const e = n - Math.floor(new Date().getTime() / r);
                    l(e);
                }, r);
                return () => window.clearTimeout(e);
            }, [n]),
            s.jsx('div', { className: g, children: k(e, o, n, i) })
        );
    }),
    E = {
        [b]: {
            isDisabled: !1,
            shouldShowPoints: !0,
            shouldShowTierData: !0,
            dateInfoType: W,
            specificDescriptionKey: 'fl_tooltips.bannerTooltip.descriptionActive',
        },
        [T]: { isDisabled: !1, dateInfoType: W },
        [h]: { isDisabled: !0, dateInfoType: L },
        [x]: { isDisabled: !0, dateInfoType: S },
        [f]: {
            isDisabled: !0,
            shouldHideCallToAction: !0,
            specificDescriptionKey: 'fl_tooltips.bannerTooltip.descriptionEnded',
        },
    },
    C = 'HeaderDecorator_wrapper_47003ef5';
function F({ children: e, isDisabled: a = !1 }) {
    const t = a
        ? R.images.frontline.gui.maps.icons.hangarEventBanners.tooltips.header_disabled()
        : R.images.frontline.gui.maps.icons.hangarEventBanners.tooltips.header_enabled();
    return s.jsx('div', { className: C, style: { backgroundImage: `url(${t})` }, children: e });
}
const M = 'ProgressPoints_a5cbe757',
    H = 'ProgressPoints_progressionValuesWrapper_e7ef156c',
    z = 'ProgressPoints_currentProgress_25705c74',
    K = 'ProgressPoints_progressIcon_9b37bf52',
    V = 'ProgressPoints_description_281855c9',
    X = e(function () {
        const { model: e } = v(),
            a = e.maxPoints.get(),
            t = e.curPoints.get();
        return 0 === a && 0 === t
            ? null
            : s.jsxs('div', {
                  className: M,
                  children: [
                      s.jsxs('div', {
                          className: H,
                          children: [
                              s.jsx(i, {
                                  className: V,
                                  path: 'fl_tooltips.bannerTooltip.progress',
                                  params: { value: s.jsx('div', { className: z, children: t }), maxValue: a },
                              }),
                              s.jsx('div', { className: K }),
                          ],
                      }),
                      s.jsx(p, { size: 'small', value: t, maxValue: a }),
                  ],
              });
    }),
    $ = 'BannerTooltip_67cf8ae2',
    q = 'BannerTooltip_contentWrapper_69bfdee9',
    G = 'BannerTooltip_title_eb5c95ad',
    J = 'BannerTooltip_maxTier_baec7baf',
    O = 'BannerTooltip_rewardText_9b198a9a',
    Q = 'BannerTooltip_warningText_3870055d',
    U = 'BannerTooltip_descriptionText_714dbfec',
    Y = 'BannerTooltip_performanceIcon_4b05a3c8',
    Z = 'BannerTooltip_performance_acfebd23',
    ee = 'BannerTooltip_performanceHeaderWrapper_dbeaaac9',
    ae = 'BannerTooltip_rewardIcon_cba7ea77',
    se = 'BannerTooltip_rewardWrapper_10979df7',
    te = 'BannerTooltip_modeLabel_512876d5',
    oe = 'BannerTooltip_callToAction_e0a487d4',
    ne = e(function () {
        const { model: e } = v(),
            { state: a, rewardsCount: t, maxLevel: o, curLevel: n, vehiclesLevel: r } = e,
            {
                isDisabled: l,
                shouldShowPoints: c,
                shouldHideCallToAction: d,
                shouldShowTierData: p,
                specificDescriptionKey: _,
                dateInfoType: x,
            } = E[a.get()],
            h = a.get() !== f,
            T = _ || 'fl_tooltips.bannerTooltip.description';
        return s.jsx(m, {
            children: s.jsxs('div', {
                className: $,
                children: [
                    s.jsx(F, {
                        isDisabled: l,
                        children: s.jsx(i, {
                            path: 'fl_tooltips.bannerTooltip.' + (p ? 'headerWithTier' : 'header'),
                            params: { curLevel: n.get(), maxLevel: o.get(), maxTierClass: J },
                            className: G,
                        }),
                    }),
                    s.jsxs('div', {
                        className: q,
                        children: [
                            c && s.jsx(X, {}),
                            s.jsx(i, { path: T, params: { vehicleTier: r.get() }, className: U }),
                            !d &&
                                s.jsx(i, {
                                    className: oe,
                                    path: 'fl_tooltips.bannerTooltip.mode',
                                    split: !0,
                                    params: {
                                        mode: s.jsx('div', {
                                            className: te,
                                            children: R.strings.hangar_event_banners.modeLabel(),
                                        }),
                                    },
                                }),
                            h &&
                                s.jsxs('div', {
                                    className: Z,
                                    children: [
                                        s.jsxs('div', {
                                            className: ee,
                                            children: [
                                                s.jsx('div', { className: Y }),
                                                s.jsx(i, {
                                                    path: 'fl_tooltips.bannerTooltip.performanceRisk.title',
                                                    className: Q,
                                                }),
                                            ],
                                        }),
                                        s.jsx(i, {
                                            path: 'fl_tooltips.bannerTooltip.performanceRisk.text',
                                            className: U,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    Boolean(t.get()) &&
                        s.jsxs(s.Fragment, {
                            children: [
                                s.jsx(u, {}),
                                s.jsxs('div', {
                                    className: se,
                                    children: [
                                        s.jsx('div', { className: ae }),
                                        s.jsx(i, {
                                            path: 'fl_tooltips.bannerTooltip.rewardInfo',
                                            params: { value: t.get() },
                                            split: !0,
                                            className: O,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    x && s.jsxs(s.Fragment, { children: [s.jsx(u, {}), s.jsx(A, { type: x })] }),
                ],
            }),
        });
    });
_(s.jsx(j, { children: s.jsx(ne, {}) }));
