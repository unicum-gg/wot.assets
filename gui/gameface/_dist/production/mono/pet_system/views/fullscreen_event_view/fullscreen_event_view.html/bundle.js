import { p as e, q as s, s as a, t, j as r, k as p } from '../../../chunks/vendor.js';
import {
    r as l,
    i as d,
    m as o,
    g as i,
    n,
    b as c,
    I as _,
    e as m,
    h as y,
    o as j,
    M as v,
    B as x,
    A as h,
    F as w,
    c as g,
    d as u,
    k as A,
    U as b,
    l as f,
} from '../../../chunks/lib.js';
import { S as N } from '../../../chunks/synergy_rewards.js';
/* empty css                    */ const k = l.resolve('aliases'),
    [E, O] = d()(
        ({ observableModel: s }) => {
            const a = { root: s.object(), rewards: s.array('rewards') },
                t = e(() =>
                    o(a.rewards.get(), (e) => ({
                        ...e,
                        image: c(e, _.Big),
                        valueType: n(e.name),
                        tooltipArgs: i(
                            { tooltipId: e.tooltipId },
                            k.read((e) => e.hangar.shared.PetEvent('resId')),
                        ),
                    })),
                );
            return { ...a, computes: { getRewards: t, hasRewards: e(() => t().length > 0) } };
        },
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
    ),
    I = 'App_1d40feee',
    S = 'App_contentWrapper_85695a2e',
    C = 'App_img_52297d37',
    $ = 'App_video_ae425fb9',
    B = 'App_title_cc05b3ce',
    z = 'App_descriptionWrapper_656353e9',
    M = 'App_descriptionScrollWrapper_a39002f9',
    W = 'App_descriptionContent_4f66c3aa',
    T = 'App_descriptionBar_b3366266',
    q = 'App_text_0',
    F = 'App_joke_14331c43',
    L = 'App_rewardsTitle_4923ec50',
    P = 'App_flexBreak_1ff3f8f2',
    U = 'App_rewards_d0d451da',
    D = 'App_reward_d2e6a341',
    G = 'App_buttons_149abdc7',
    H = l.resolve('strings'),
    J = l.resolve('images'),
    K = l.resolve('sounds'),
    Q = s(function () {
        const { model: e, controls: s } = O(),
            l = e.root.get().eventId,
            d = H.readOrEmpty(`pet_events.joke.event_${l}`),
            o = J.readOrEmpty(`petSystem.event_view.reward_${l}_400x400`),
            i = [...Array(d ? 5 : 4).keys()],
            n = e.computes.getRewards(),
            c = e.computes.hasRewards();
        m(s.close);
        const _ = a(
            i.length,
            i.map((e, s) => ({
                from: { y: 20, opacity: 0 },
                to: { y: 0, opacity: 1 },
                delay: 250 * (s + 1),
                config: { duration: 250, easing: t.easeOutSine },
                onStart: () => {
                    let e = 'pet_system_window_item_02';
                    (0 === s
                        ? (e = 'pet_system_window_item_01')
                        : s === i.length - 1 && (e = 'pet_system_window_item_03'),
                        K.play(e));
                },
            })),
        );
        return r.jsx('div', {
            className: I,
            children: r.jsxs('div', {
                className: S,
                children: [
                    r.jsxs(p.div, {
                        style: _[0],
                        children: [
                            r.jsx('div', { className: C, style: { backgroundImage: `url(${o})` } }),
                            !y.isLow() &&
                                o &&
                                r.jsx(j, { className: $, src: R.videos.pet_system.pet_rays(), autoplay: !0, loop: !0 }),
                            r.jsx(v, { className: B, text: H.readOrEmpty(`pet_events.title.event_${l}`) }),
                        ],
                    }),
                    r.jsx(p.div, {
                        style: _[1],
                        className: z,
                        children: r.jsxs(x, {
                            children: [
                                r.jsx(h, {
                                    classNames: { wrapper: M, content: W },
                                    children: r.jsx(w, {
                                        text: H.readOrEmpty(`pet_events.text.event_${l}`),
                                        params: {
                                            color: '#eeede9e6',
                                            defaultColor: '#eeede980',
                                            br: r.jsx('span', { className: P }),
                                        },
                                        className: q,
                                        split: !0,
                                    }),
                                }),
                                r.jsx(g, { classNames: { base: T } }),
                            ],
                        }),
                    }),
                    r.jsxs(p.div, {
                        style: _[2],
                        children: [
                            r.jsx('div', { className: L, children: H.readOrEmpty('pet_events.rewards.title') }),
                            r.jsx(N, {
                                rewards: n,
                                hasRewards: c,
                                className: U,
                                classNames: { reward: D },
                                imageSize: 80,
                            }),
                        ],
                    }),
                    d && r.jsx(p.div, { style: _[3], children: r.jsx(v, { className: F, text: d }) }),
                    r.jsx(p.div, {
                        style: _[d ? 4 : 3],
                        className: G,
                        children: r.jsx(u, {
                            size: u.sizes.medium,
                            onClick: s.close,
                            children: H.readOrEmpty('pet_events.submit'),
                        }),
                    }),
                ],
            }),
        });
    });
A(r.jsx(E, { children: r.jsx(b, { children: r.jsx(Q, {}) }) })).then(() => f());
