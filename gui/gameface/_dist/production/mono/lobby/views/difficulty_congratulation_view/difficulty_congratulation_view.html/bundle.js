import { s, r as a, j as t, f as i } from '../../../chunks/vendor.js';
import {
    i as e,
    s as l,
    aj as o,
    u as n,
    k as r,
    a4 as c,
    t as d,
    E as u,
    A as f,
    C as p,
    B as m,
    J as y,
    P as _,
} from '../../../chunks/lib.js';
import { E as j, S as C } from '../../../chunks/spring_wrapper.js';
import { T as g } from '../../../chunks/text.module.js';
import { T as x } from '../../../chunks/text_simple.js';
import { Q as h } from '../../../chunks/index.js';
import '../../../chunks/key_icon.js';
import '../../../chunks/utils2.js';
import '../../../chunks/string-utils.js';
const [b, A] = e()(
        ({ observableModel: s }) => ({ root: s.object() }),
        ({ externalModel: s }) => ({ close: s.createCallbackNoArgs('onClose') }),
    ),
    D = { y: -5, opacity: 0 },
    N = { y: 0, opacity: 1 };
var k = ((s) => (
    (s.ICON = 'icon'),
    (s.TITLE = 'title'),
    (s.HEADER = 'header'),
    (s.DESCRIPTION = 'description'),
    (s.DAILY = 'daily'),
    (s.BUTTON = 'button'),
    s
))(k || {});
const v = 500,
    T = {
        icon: {
            from: { opacity: 0, filter: 'brightness(2) contrast(3) blur(10rem)', transform: 'scale(1.5, 1)' },
            to: { opacity: 1, filter: 'brightness(1) contrast(1) blur(0rem)', transform: ' scale(1, 1)' },
            duration: 1200,
            delay: 0,
            easingType: j.EaseInOut,
        },
        title: { from: D, to: N, delay: 1e3, duration: v },
        header: { from: D, to: N, delay: 1200, duration: v },
        description: { from: D, to: N, delay: 1400, duration: v },
        daily: { from: D, to: N, delay: 1600, duration: v },
        button: {
            from: { y: 10, transform: 'translate(-50%)', opacity: 0 },
            to: { y: 0, transform: 'translate(-50%)', opacity: 1 },
            delay: 2e3,
            duration: 800,
        },
    },
    E = 'DifficultyCongratulationApp_70d6f646',
    I = 'DifficultyCongratulationApp_center_41545684',
    S = 'DifficultyCongratulationApp_base__daily_7998c441',
    O = 'DifficultyCongratulationApp_icons_3131370c',
    $ = 'DifficultyCongratulationApp_decorSmoke_8fefbf79',
    w = 'DifficultyCongratulationApp_icon_5884141',
    B = 'DifficultyCongratulationApp_title_41e92987',
    L = 'DifficultyCongratulationApp_header_d3e13f12',
    P = 'DifficultyCongratulationApp_descriptionContainer_bd8292b5',
    F = 'DifficultyCongratulationApp_footer_54207e63',
    H = 'DifficultyCongratulationApp_plusGlow_2a28e3a5',
    M = 'DifficultyCongratulationApp_dailyLabel_1c014fd9',
    q = 'DifficultyCongratulationApp_quests_413c63fd',
    G = 'DifficultyCongratulationApp_questsGlow_5908490',
    U = 'DifficultyCongratulationApp_unlockIcon_7f55a541',
    Y = 'DifficultyCongratulationApp_button_f33a2136',
    z = 'DifficultyCongratulationApp_closeBtn_e03f3929',
    J = R.strings.last_stand_lobby.difficultyWindow,
    Q = s(() => {
        const { model: s, controls: e } = A(),
            { level: _, showDaily: j } = s.root.get(),
            { breakpoint: b } = l();
        (o(e.close), n(r.ENTER, e.close), n(r.SPACE, e.close));
        const [D, N] = a.useState(!1);
        return t.jsxs('div', {
            className: i(E, j && S),
            onClick: () => {
                N(!0);
            },
            children: [
                t.jsx(c, {
                    classNames: { base: z },
                    caption: R.strings.last_stand_lobby.common.close(),
                    type: 'close',
                    side: 'right',
                    onClick: e.close,
                }),
                t.jsxs('div', {
                    className: I,
                    children: [
                        t.jsx(C, {
                            className: O,
                            ...T[k.ICON],
                            isCanceled: D,
                            children: t.jsxs(t.Fragment, {
                                children: [
                                    t.jsx('div', { className: $ }),
                                    t.jsx('div', {
                                        className: w,
                                        style: {
                                            backgroundImage: `url('R.images.last_stand.gui.maps.icons.difficulties.c_256x256.diff_${_}')`,
                                        },
                                    }),
                                ],
                            }),
                        }),
                        t.jsx('div', {
                            className: L,
                            children: t.jsxs(t.Fragment, {
                                children: [
                                    t.jsx(C, { ...T[k.TITLE], className: B, isCanceled: D, children: J.title() }),
                                    t.jsx(C, {
                                        className: L,
                                        ...T[k.HEADER],
                                        isCanceled: D,
                                        children: t.jsx(x, {
                                            type: g.Heading,
                                            text:
                                                b.name === d.extraSmall
                                                    ? J.headerShort.$dyn(`level_${_}`)
                                                    : J.header.$dyn(`level_${_}`),
                                            shadow: !0,
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        t.jsx(C, {
                            ...T[k.DESCRIPTION],
                            className: P,
                            isCanceled: D,
                            children: t.jsx(u, {
                                justifyContent: f.Center,
                                isTruncationAvailable: !0,
                                isTooltipEnable: !0,
                                text: J.description.$dyn(`level_${_}`),
                            }),
                        }),
                        j &&
                            t.jsxs(C, {
                                ...T[k.DAILY],
                                className: F,
                                isCanceled: D,
                                children: [
                                    t.jsx('div', { className: H }),
                                    t.jsx(u, { text: R.strings.last_stand_lobby.difficult.daily(), classMix: M }),
                                    t.jsxs('div', {
                                        className: q,
                                        children: [
                                            t.jsx('div', { className: G }),
                                            t.jsx(h, { fullBorder: !0 }),
                                            t.jsx('div', { className: U }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
                t.jsx(C, {
                    ...T[k.BUTTON],
                    className: Y,
                    isCanceled: D,
                    children: t.jsx(p, {
                        type: m.primary,
                        size: y.medium,
                        isFocused: !0,
                        onClick: e.close,
                        children: R.strings.last_stand_lobby.common.yes(),
                    }),
                }),
            ],
        });
    });
_(t.jsx(b, { children: t.jsx(Q, {}) }));
