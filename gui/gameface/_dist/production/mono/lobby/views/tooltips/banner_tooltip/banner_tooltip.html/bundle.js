import { I as e, r as a, j as s, Q as t } from '../../../../chunks/vendor.js';
import {
    i as o,
    n,
    bL as r,
    R as i,
    cy as l,
    cz as c,
    bE as d,
    bK as p,
    cA as m,
    ch as _,
} from '../../../../chunks/lib.js';
import { F as f, I as h, A as x, a as b, b as T } from '../../../../chunks/event_banner_state.js';
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
    W = 'cooldown',
    k = 'accent',
    E = (e, a, o, n) => {
        const r = l;
        return {
            [W]: s.jsx(i, {
                className: t(B, D),
                path: 'fl_tooltips.bannerTooltip.curfewTime',
                params: { timer: s.jsx(d, { size: 'x24x24', type: 'cooldown', start: n }) },
            }),
            [k]: s.jsx(d, { size: 'x24x24', type: 'accent', start: n }),
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
    S = e(function ({ type: e }) {
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
            s.jsx('div', { className: g, children: E(e, o, n, i) })
        );
    }),
    A = {
        [T]: {
            isDisabled: !1,
            shouldShowPoints: !0,
            shouldShowTierData: !0,
            dateInfoType: k,
            specificDescriptionKey: 'fl_tooltips.bannerTooltip.descriptionActive',
        },
        [b]: { isDisabled: !1, dateInfoType: k },
        [x]: { isDisabled: !0, dateInfoType: L },
        [h]: { isDisabled: !0, dateInfoType: W },
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
    z = 'ProgressPoints_progressionValuesWrapper_e7ef156c',
    H = 'ProgressPoints_currentProgress_25705c74',
    K = 'ProgressPoints_progressIcon_9b37bf52',
    V = 'ProgressPoints_description_281855c9',
    Q = e(function () {
        const { model: e } = v(),
            a = e.maxPoints.get(),
            t = e.curPoints.get();
        return 0 === a && 0 === t
            ? null
            : s.jsxs('div', {
                  className: M,
                  children: [
                      s.jsxs('div', {
                          className: z,
                          children: [
                              s.jsx(i, {
                                  className: V,
                                  path: 'fl_tooltips.bannerTooltip.progress',
                                  params: { value: s.jsx('div', { className: H, children: t }), maxValue: a },
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
    U = 'BannerTooltip_warningText_3870055d',
    X = 'BannerTooltip_descriptionText_714dbfec',
    Y = 'BannerTooltip_performanceIcon_4b05a3c8',
    Z = 'BannerTooltip_performance_acfebd23',
    ee = 'BannerTooltip_performanceHeaderWrapper_dbeaaac9',
    ae = 'BannerTooltip_rewardIcon_cba7ea77',
    se = 'BannerTooltip_rewardWrapper_10979df7',
    te = 'BannerTooltip_modeLabel_e1a061ec',
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
                dateInfoType: h,
            } = A[a.get()],
            x = a.get() !== f,
            b = _ || 'fl_tooltips.bannerTooltip.description';
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
                            c && s.jsx(Q, {}),
                            s.jsx(i, { path: b, params: { vehicleTier: r.get() }, className: X }),
                            !d &&
                                s.jsx(i, {
                                    className: oe,
                                    path: 'fl_tooltips.bannerTooltip.mode',
                                    split: !0,
                                    params: {
                                        mode: s.jsx(i, { className: te, path: 'hangar_event_banners.modeLabel' }),
                                    },
                                }),
                            x &&
                                s.jsxs('div', {
                                    className: Z,
                                    children: [
                                        s.jsxs('div', {
                                            className: ee,
                                            children: [
                                                s.jsx('div', { className: Y }),
                                                s.jsx(i, {
                                                    path: 'fl_tooltips.bannerTooltip.performanceRisk.title',
                                                    className: U,
                                                }),
                                            ],
                                        }),
                                        s.jsx(i, {
                                            path: 'fl_tooltips.bannerTooltip.performanceRisk.text',
                                            className: X,
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
                    h && s.jsxs(s.Fragment, { children: [s.jsx(u, {}), s.jsx(S, { type: h })] }),
                ],
            }),
        });
    });
_(s.jsx(j, { children: s.jsx(ne, {}) }));
