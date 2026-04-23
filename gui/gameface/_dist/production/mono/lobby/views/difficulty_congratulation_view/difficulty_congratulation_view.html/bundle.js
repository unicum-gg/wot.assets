import { D as s, r as a, j as e } from '../../../chunks/vendor.js';
import {
    i,
    O as t,
    Q as o,
    D as r,
    W as n,
    b as l,
    B as c,
    I as d,
    C as f,
    E as u,
    A as m,
    m as p,
    j as y,
    p as g,
    r as _,
    U as b,
} from '../../../chunks/lib.js';
import { E as C, S as j } from '../../../chunks/spring_wrapper.js';
import { S as x } from '../../../chunks/story_point.js';
import { M as h } from '../../../chunks/sound.js';
import { g as A, a as D, b as z, c as E } from '../../../chunks/utils.js';
const [N, T] = i()(
        ({ observableModel: s }) => ({ root: s.object(), rewards: s.array('rewards') }),
        ({ externalModel: s }) => ({ close: s.createCallbackNoArgs('onClose') }),
    ),
    v = { y: -5, opacity: 0 },
    w = { y: 0, opacity: 1 };
var k = ((s) => (
    (s.ICON = 'icon'),
    (s.TITLE = 'title'),
    (s.HEADER = 'header'),
    (s.DESCRIPTION = 'description'),
    (s.REWARDS = 'rewards'),
    (s.BUTTON = 'button'),
    s
))(k || {});
const S = 500,
    I = {
        icon: {
            from: { opacity: 0, transform: 'scale(1.2, 1.2)' },
            to: { opacity: 1, transform: ' scale(1, 1)' },
            duration: 1200,
            delay: 0,
            easingType: C.EaseInOut,
        },
        title: { from: v, to: w, delay: 1e3, duration: S },
        header: { from: v, to: w, delay: 1200, duration: S },
        description: { from: v, to: w, delay: 1400, duration: S },
        rewards: { from: v, to: w, delay: 2200, duration: S },
        button: {
            from: { y: 10, transform: 'translate(-50%)', opacity: 0 },
            to: { y: 0, transform: 'translate(-50%)', opacity: 1 },
            delay: 2e3,
            duration: 800,
        },
    },
    O = 'DifficultyCongratulationApp_70d6f646',
    W = 'DifficultyCongratulationApp_background_1a04c1bf',
    B = 'DifficultyCongratulationApp_center_833227ce',
    L = 'DifficultyCongratulationApp_modifierIcon_1e80aaa9',
    M = 'DifficultyCongratulationApp_title_345bbaf0',
    $ = 'DifficultyCongratulationApp_header_c567657c',
    P = 'DifficultyCongratulationApp_descriptionContainer_b424b140',
    U = 'DifficultyCongratulationApp_button_a922cf0d',
    H = 'DifficultyCongratulationApp_rewards_fd607614',
    Q = 'DifficultyCongratulationApp_rewardLabel_f328651f',
    q = 'DifficultyCongratulationApp_rewardList_80c7934b',
    F = 'DifficultyCongratulationApp_reward_ccc9cf18',
    G = 'DifficultyCongratulationApp_closeBtn_ec8e894',
    J = 600 + I[k.REWARDS].delay,
    K = { from: { opacity: 0, y: -5 } };
function V() {
    g.sound(h);
}
const X = t.resolve('strings'),
    Y = s(function () {
        const { model: s, controls: i } = T(),
            { level: t, modifier: g } = s.root.get(),
            _ = s.rewards.get();
        (o(i.close), r(n.ENTER, i.close), r(n.SPACE, i.close));
        const [b, h] = a.useState(!1),
            N = l(
                { size: c.sizes.extraSmall },
                {
                    medium: { size: c.sizes.small },
                    large: { size: c.sizes.medium },
                    extraLarge: { size: c.sizes.large },
                },
            ),
            v = l({ size: x.sizes.s186x186 }, { large: { size: x.sizes.s256x256 } }),
            w = l({ size: d.Big }, { medium: { size: d.S180x135 } });
        return e.jsxs('div', {
            className: O,
            onClick: () => {
                h(!0);
            },
            children: [
                e.jsx(f, { className: G, onClose: i.close }),
                e.jsx('div', {
                    className: W,
                    style: {
                        backgroundImage: `url('R.images.last_stand.gui.maps.icons.backgrounds.difficulty_bg.bg_${t}')`,
                    },
                }),
                e.jsxs('div', {
                    className: B,
                    children: [
                        e.jsx(j, {
                            ...I[k.ICON],
                            isCanceled: b,
                            children: e.jsx(x, {
                                classNames: { base: L },
                                size: v.size,
                                modifier: g,
                                withTimesSymbol: !0,
                            }),
                        }),
                        e.jsx(j, {
                            ...I[k.TITLE],
                            className: M,
                            isCanceled: b,
                            children: R.strings.last_stand_lobby.difficultyWindow.title(),
                        }),
                        e.jsx(j, {
                            ...I[k.HEADER],
                            isCanceled: b,
                            children: e.jsx(u, {
                                classMix: $,
                                justifyContent: m.Center,
                                text: X.readOrEmpty(`R.strings.last_stand_lobby.difficultyWindow.header.level_${t}`),
                            }),
                        }),
                        e.jsx(j, {
                            ...I[k.DESCRIPTION],
                            isCanceled: b,
                            children: e.jsx(u, {
                                classMix: P,
                                justifyContent: m.Center,
                                isTruncationAvailable: !0,
                                isTooltipEnable: !0,
                                binding: { modifier: g },
                                text: X.readOrEmpty(
                                    `R.strings.last_stand_lobby.difficultyWindow.description.level_${t}`,
                                ),
                            }),
                        }),
                        _.length > 0 &&
                            e.jsxs(j, {
                                ...I[k.REWARDS],
                                isCanceled: b,
                                className: H,
                                children: [
                                    e.jsx('div', {
                                        className: Q,
                                        children: R.strings.last_stand_lobby.difficultyWindow.rewards(),
                                    }),
                                    e.jsx('div', {
                                        className: q,
                                        children: p(_, (s, a) =>
                                            e.jsx(
                                                'div',
                                                {
                                                    className: F,
                                                    children: e.jsx(j, {
                                                        ...K,
                                                        duration: 800,
                                                        delay: J + 120 * a,
                                                        easingType: C.EaseOutBack,
                                                        isCanceled: b,
                                                        onStart: V,
                                                        children: e.jsx(y, {
                                                            name: s.name,
                                                            value: E(s),
                                                            size: w.size,
                                                            special: s.overlayType,
                                                            image: z(s, w.size),
                                                            valueType: D(s.name),
                                                            tooltipArgs: A(s),
                                                        }),
                                                    }),
                                                },
                                                `${s.name}${a}`,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                    ],
                }),
                e.jsx(j, {
                    ...I[k.BUTTON],
                    className: U,
                    isCanceled: b,
                    children: e.jsx(c, {
                        theme: c.themes.primary,
                        size: N.size,
                        onClick: i.close,
                        children: R.strings.last_stand_lobby.common.yes(),
                    }),
                }),
            ],
        });
    });
_(e.jsx(b, { children: e.jsx(N, { children: e.jsx(Y, {}) }) }));
