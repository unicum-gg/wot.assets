import { j as s, m as i } from '../../../../chunks/vendor.js';
import {
    i as e,
    $ as a,
    m as o,
    a5 as t,
    a6 as r,
    a7 as l,
    D as p,
    b0 as n,
    a_ as d,
    P as c,
    a$ as m,
} from '../../../../chunks/lib.js';
import { K as _, a as b } from '../../../../chunks/key_icon.js';
import { f as j } from '../../../../chunks/string-utils.js';
import { g as T, a as x, p as v } from '../../../../chunks/utils2.js';
import { A as g } from '../../../../chunks/meta_view_model.js';
const [h, N] = e()(({ observableModel: s }) => ({ root: s.object(), rewards: s.array('rewards') }), a),
    u = {
        root: 'MissionTooltipApp_root_ad56bad4',
        base: 'MissionTooltipApp_5fde8d41',
        name: 'MissionTooltipApp_name_c7ae4d12',
        task: 'MissionTooltipApp_task_5b459de7',
        progress: 'MissionTooltipApp_progress_f908f163',
        base__receive: 'MissionTooltipApp_base__receive_ad56bad4',
        base__open: 'MissionTooltipApp_base__open_ad56bad4',
        icon: 'MissionTooltipApp_icon_d584d870',
        rewardsLabel: 'MissionTooltipApp_rewardsLabel_68499e38',
        rewards: 'MissionTooltipApp_rewards_2e0964b4',
        reward: 'MissionTooltipApp_reward_e904a91a',
        description: 'MissionTooltipApp_description_e30e55fb',
        dots: 'MissionTooltipApp_dots_e8c95599',
        bottom: 'MissionTooltipApp_bottom_b80f8ad9',
        price: 'MissionTooltipApp_price_c9aa3a08',
        priceName: 'MissionTooltipApp_priceName_9a7685a',
        priceLabel: 'MissionTooltipApp_priceLabel_3401a6e8',
        priceValue: 'MissionTooltipApp_priceValue_76332938',
        key: 'MissionTooltipApp_key_b38745ad',
        info: 'MissionTooltipApp_info_3ce60e1c',
        bottomText: 'MissionTooltipApp_bottomText_4daee49e',
    },
    A = () => {
        const { model: e } = N(),
            {
                id: a,
                index: c,
                regularArtefactCount: m,
                name: h,
                description: A,
                skipPrice: M,
                decodePrice: k,
                isHangar: f,
                state: w,
                endDate: y,
            } = e.root.get(),
            L = w === g.InProgress,
            $ = w === g.Open;
        return s.jsxs('div', {
            className: i(u.base, u[`base__${w}`]),
            children: [
                s.jsx('div', { className: u.name, children: h }),
                s.jsx('div', { className: u.task, children: A }),
                s.jsx('div', {
                    className: u.progress,
                    children: j(
                        w === g.Receive
                            ? R.strings.last_stand_tooltips.missionTooltip.received()
                            : $
                              ? R.strings.last_stand_tooltips.missionTooltip.completed()
                              : R.strings.last_stand_tooltips.missionTooltip.count(),
                        { current: c, count: m },
                    ),
                }),
                s.jsx('div', {
                    className: u.icon,
                    style: {
                        backgroundImage: `url('R.images.last_stand.gui.maps.icons.backgrounds.tooltip_bg.bg_${c}')`,
                    },
                }),
                f &&
                    s.jsxs(s.Fragment, {
                        children: [
                            !$ &&
                                s.jsx('div', {
                                    className: u.rewardsLabel,
                                    children:
                                        w === g.Receive
                                            ? R.strings.last_stand_tooltips.missionTooltip.rewardsDecrypted()
                                            : R.strings.last_stand_tooltips.missionTooltip.rewards(),
                                }),
                            s.jsx('div', {
                                className: u.rewards,
                                children: o(e.rewards.get(), (i, e) =>
                                    s.jsx(
                                        t,
                                        {
                                            name: i.name,
                                            value: T(i),
                                            className: u.reward,
                                            size: r.Small,
                                            special: i.overlayType,
                                            image: x(i, r.Small),
                                            valueType: l(i.name),
                                        },
                                        `${i.name}${e}`,
                                    ),
                                ),
                            }),
                        ],
                    }),
                !f &&
                    $ &&
                    s.jsx('div', {
                        className: u.description,
                        children: R.strings.last_stand_lobby.meta.shortStory.$dyn(v(a)),
                    }),
                !$ &&
                    (M > 0 || k > 0) &&
                    s.jsxs(s.Fragment, {
                        children: [
                            s.jsx('div', { className: u.dots }),
                            s.jsxs('div', {
                                className: u.price,
                                children: [
                                    L &&
                                        M > 0 &&
                                        s.jsxs('div', {
                                            className: u.priceName,
                                            children: [
                                                s.jsx('div', {
                                                    className: u.priceLabel,
                                                    children: R.strings.last_stand_tooltips.missionTooltip.skip(),
                                                }),
                                                s.jsxs('div', {
                                                    className: u.priceValue,
                                                    children: [p(M, 0), s.jsx(_, { size: b.C28x28, className: u.key })],
                                                }),
                                            ],
                                        }),
                                    k > 0 &&
                                        s.jsxs('div', {
                                            className: u.priceName,
                                            children: [
                                                s.jsx('div', {
                                                    className: u.priceLabel,
                                                    children: R.strings.last_stand_tooltips.missionTooltip.decrypt(),
                                                }),
                                                s.jsxs('div', {
                                                    className: u.priceValue,
                                                    children: [p(k, 0), s.jsx(_, { size: b.C28x28, className: u.key })],
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                s.jsx('div', { className: u.dots }),
                s.jsxs('div', {
                    className: u.bottom,
                    children: [
                        s.jsx('div', { className: u.info }),
                        s.jsx('div', {
                            className: u.bottomText,
                            children: j(R.strings.last_stand_tooltips.missionTooltip.bottom(), {
                                date: n(y, d.ShortDateTime),
                            }),
                        }),
                    ],
                }),
            ],
        });
    };
c(s.jsx(h, { children: s.jsx(m, { children: s.jsx(A, {}) }) }));
