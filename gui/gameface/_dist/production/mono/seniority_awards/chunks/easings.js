import { j as e, r, e as a } from './vendor.js';
import { r as s, e as t, z as o, B as i, A as n, F as d, x as c, _ as l, $ as w } from './lib.js';
import { g as u } from './category.js';
const m = 'SeniorityAwardsViewFooter_ee5e4688',
    _ = 'SeniorityAwardsViewFooter_description_ad1f38e5',
    p = 'SeniorityAwardsViewFooter_buttonHolder_b0449970',
    y = 'SeniorityAwardsViewFooter_button_925ad150',
    v = 'SeniorityAwardsViewFooter_buttonWrapper_3ea3a32b',
    h = 'SeniorityAwardsViewFooter_glow_40376564',
    x = 'seniority_awards.rewardsView',
    b = ({
        moreReardsCount: r = 0,
        isGotoHangarAvailable: a = !1,
        hasMoreRewards: c,
        isShopAvailable: l,
        onShowMoreClick: w,
        onAcceptClick: u,
        onGotoHangarBtnClick: b,
    }) => {
        const g = s.resolve('strings'),
            j = t({ value: o.medium }, { large: { value: o.large } });
        return e.jsx('div', {
            className: m,
            children: c
                ? e.jsx('div', {
                      className: p,
                      children: e.jsx(i, {
                          className: y,
                          size: j.value,
                          onClick: w,
                          theme: n.primary,
                          soundTarget: 'rewards-view:button',
                          children:
                              r > 0
                                  ? e.jsx(d, {
                                        text: g.readOrEmpty(`${x}.moreRewardsWithCountBtn`),
                                        params: { count: r },
                                        upgradeLegacy: !0,
                                    })
                                  : g.readOrEmpty(`${x}.moreRewardsBtn`),
                      }),
                  })
                : e.jsxs(e.Fragment, {
                      children: [
                          l && e.jsx('div', { className: _, children: g.readOrEmpty(`${x}.exchangeCoins`) }),
                          e.jsxs('div', {
                              className: p,
                              children: [
                                  e.jsxs('div', {
                                      className: v,
                                      children: [
                                          l && e.jsx('div', { className: h }),
                                          e.jsx(i, {
                                              className: y,
                                              size: j.value,
                                              onClick: u,
                                              theme: n.primary,
                                              soundTarget: 'rewards-view:button',
                                              children: l
                                                  ? g.readOrEmpty(`${x}.gotoRewardsBtn`)
                                                  : g.readOrEmpty(`${x}.applyBtn`),
                                          }),
                                      ],
                                  }),
                                  a &&
                                      e.jsx('div', {
                                          className: v,
                                          children: e.jsx(i, {
                                              size: j.value,
                                              onClick: b,
                                              theme: n.secondary,
                                              soundTarget: 'rewards-view:button',
                                              children: g.readOrEmpty(`${x}.gotoHangarBtn`),
                                          }),
                                      }),
                              ],
                          }),
                      ],
                  }),
        });
    },
    g = 400;
function j({ resId: e, contentId: a, decoratorId: s, disabled: t, args: o, onShowTooltip: i, onHideTooltip: n }) {
    const d = c({ resId: e, contentId: a, decoratorId: s, disabled: t, args: o, showDelay: g }),
        w = r.useRef(),
        [u, m] = r.useState(!1);
    return (
        l(() => clearTimeout(w.current)),
        {
            ...d,
            onMouseEnter: (e) => {
                var r;
                (null == (r = d.onMouseEnter) || r.call(d, e),
                    w.current && clearTimeout(w.current),
                    (w.current = setTimeout(() => {
                        (m(!0), null == i || i());
                    }, g)));
            },
            onMouseLeave: () => {
                var e;
                (null == (e = d.onMouseLeave) || e.call(d),
                    w.current && (clearTimeout(w.current), (w.current = void 0)),
                    u && (null == n || n()),
                    m(!1));
            },
        }
    );
}
function S(e) {
    return j({
        ...e,
        contentId: s
            .resolve('views')
            .read((e) => e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
    });
}
const T = 'HeaderButton_a376d13c',
    V = 'HeaderButton_caption_915bc256',
    N = 'HeaderButton_icon_b123e86b',
    H = ({ onShowTooltip: r, onHideTooltip: a }) => {
        const t = s.resolve('strings'),
            o = j({
                contentId: s.resolve('views').read((e) => e.mono.seniority_awards.tooltips.seniority_tooltip('resId')),
                onShowTooltip: r,
                onHideTooltip: a,
            });
        return e.jsxs('div', {
            className: T,
            ...o,
            children: [
                e.jsx('div', { className: V, children: t.readOrEmpty('seniority_awards.rewardsView.info') }),
                e.jsx('div', { className: N }),
            ],
        });
    },
    A = 'SeniorityAwardsViewHeader_699fc570',
    B = 'SeniorityAwardsViewHeader_titleBox_dddc842b',
    f = 'SeniorityAwardsViewHeader_light_23331022',
    E = 'SeniorityAwardsViewHeader_line_eb9e2523',
    C = 'SeniorityAwardsViewHeader_line__inverted_fd812922',
    k = 'SeniorityAwardsViewHeader_square_67a0fdc5',
    I = 'SeniorityAwardsViewHeader_title_5cda5632',
    M = 'SeniorityAwardsViewHeader_subTitle_55b48fc7',
    O = 'SeniorityAwardsViewHeader_rank_ba17e17',
    F = { primary: 'primary', secondary: 'secondary' },
    L = ({ type: r = F.primary, category: t, maxCategory: o, onShowTooltip: i, onHideTooltip: n }) => {
        const c = s.resolve('strings');
        return e.jsxs('div', {
            className: A,
            children: [
                e.jsxs('div', {
                    className: B,
                    children: [
                        e.jsx('div', { className: f }),
                        e.jsx('div', { className: E, children: e.jsx('div', { className: k }) }),
                        e.jsx('div', { className: I, children: c.readOrEmpty('seniority_awards.rewardsView.title') }),
                        e.jsx('div', { className: a(E, C), children: e.jsx('div', { className: k }) }),
                    ],
                }),
                (() => {
                    switch (r) {
                        case F.primary:
                            return e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(d, {
                                        className: M,
                                        text: c.readOrEmpty('seniority_awards.rewardsView.subTitle.text'),
                                        params: {
                                            rank: e.jsx('span', {
                                                className: O,
                                                children: c.readOrEmpty(
                                                    `seniority_awards.rewardsView.subTitle.rank.${u(t, o)}`,
                                                ),
                                            }),
                                        },
                                        upgradeLegacy: !0,
                                    }),
                                    e.jsx(H, { onShowTooltip: i, onHideTooltip: n }),
                                ],
                            });
                        case F.secondary:
                            return e.jsx('div', {
                                className: M,
                                children: c.readOrEmpty('seniority_awards.rewardsView.selection.received'),
                            });
                        default:
                            console.error('Unexpected seniority awards header type');
                    }
                })(),
            ],
        });
    },
    $ = 'seniority_awards',
    R = $ + '_vehicle_selection';
var z = ((e) => ((e.RewardsScreen = 'sa_rewards_screen'), (e.VehicleSelectionView = 'sa_vehicle_selection_view'), e))(
        z || {},
    ),
    G = ((e) => (
        (e.GoToShopButton = 'goto_shop_button'),
        (e.ShowMoreButton = 'show_more_button'),
        (e.ConfirmButton = 'confirm_button'),
        (e.GoToHangarButton = 'goto_hangar_button'),
        (e.CloseButton = 'close_button'),
        (e.SelectButton = 'select_button'),
        (e.VehicleTabButton = 'vehicle_tab_button'),
        (e.VehicleTooltip = 'vehicle_tooltip'),
        (e.SeniorityAwardsTooltip = 'seniority_awards_tooltip'),
        e
    ))(G || {});
const q = { pending: 'pending', success: 'success', error: 'error' },
    W = (e, a = 0) => {
        const [s, t] = r.useState(q.pending),
            o = w((e) => t(e), [], a),
            i = r.useCallback(() => {
                o(q.success);
            }, [o]),
            n = r.useCallback(() => {
                o(q.error);
            }, [o]);
        return (
            r.useLayoutEffect(() => {
                const r = new Image();
                return (
                    (r.src = e),
                    r.addEventListener('load', i),
                    r.addEventListener('error', n),
                    () => {
                        (r.removeEventListener('load', i), r.removeEventListener('error', n));
                    }
                );
            }, [e, i, n]),
            s
        );
    },
    D = (e) => --e * e * e + 1,
    P = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    U = (e) => {
        const r = 2.5949095;
        return e < 0.5
            ? (Math.pow(2 * e, 2) * (7.189819 * e - r)) / 2
            : (Math.pow(2 * e - 2, 2) * ((r + 1) * (2 * e - 2) + r) + 2) / 2;
    };
export { $ as F, G as I, z as P, L as S, b as a, R as b, P as c, U as d, D as e, S as f, F as h, q as l, W as u };
