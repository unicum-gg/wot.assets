import { p as e, j as t, q as s, r as l } from '../../../chunks/vendor.js';
import { a as o, u as c, aj as i, ak as a, B as r, z as n, U as _, A as d, E as m } from '../../../chunks/lib.js';
/* empty css                              */ const [h, b] = o()(
        ({ observableModel: e }) => ({ ...{ root: e.object() } }),
        ({ externalModel: e }) => ({
            onVideoPlay: e.createCallbackNoArgs('onVideoPlay'),
            onClose: e.createCallbackNoArgs('onClose'),
            onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
        }),
    ),
    x = 'TextBlock_textBlock_title_40fe83d5',
    g = 'TextBlock_textBlock_text_24c82369',
    p = 'TextBlock_textBlock_ead49a2e',
    w = 'TextBlock_textBlock__lastItem_636071ba',
    j = e(({ title: e, text: l, lastItem: o }) =>
        t.jsxs('div', {
            className: s(p, o && w),
            children: [t.jsx('div', { className: x, children: e }), t.jsx('div', { className: g, children: l })],
        }),
    ),
    k = 'WelcomeScreenApp_base_title_7a61718c',
    S = 'WelcomeScreenApp_95e9a7ce',
    u = 'WelcomeScreenApp_base_group_7465317e',
    y = 'WelcomeScreenApp_base_row_f0045ca2',
    N = 'WelcomeScreenApp_base_videoPlayButton_79ef36b',
    v = 'WelcomeScreenApp_base_button_9eddf0db',
    B = [
        {
            title: R.strings.white_tiger_lobby.welcomeScreen.header_1(),
            text: R.strings.white_tiger_lobby.welcomeScreen.description_1(),
        },
        {
            title: R.strings.white_tiger_lobby.welcomeScreen.header_2(),
            text: R.strings.white_tiger_lobby.welcomeScreen.description_2(),
        },
        {
            title: R.strings.white_tiger_lobby.welcomeScreen.header_3(),
            text: R.strings.white_tiger_lobby.welcomeScreen.description_3(),
        },
    ],
    A = e(() => {
        const { controls: e } = b(),
            { onVideoPlay: s, onClose: o, onViewLoaded: n } = e,
            [_, d] = l.useState(!1),
            [m, h] = l.useState(!1);
        c(o);
        return (
            l.useEffect(
                () =>
                    i(() => {
                        m || (n(), h(!0));
                    }),
                [m, n],
            ),
            t.jsxs('div', {
                className: S,
                children: [
                    t.jsx('div', { className: k, children: R.strings.white_tiger_lobby.welcomeScreen.title() }),
                    t.jsx('div', {
                        className: N,
                        onMouseEnter: a('highlight'),
                        onClick: () => {
                            (d((e) => !e), s());
                        },
                    }),
                    t.jsxs('div', {
                        className: u,
                        children: [
                            t.jsx('div', {
                                className: y,
                                children: B.map((e, s) =>
                                    t.jsx(j, { title: e.title, text: e.text, lastItem: s === B.length - 1 }, s),
                                ),
                            }),
                            t.jsx(r, {
                                theme: 'primary',
                                size: 'small',
                                onMouseEnter: () => a('highlight'),
                                onClick: () => {
                                    o();
                                },
                                className: v,
                                children: R.strings.white_tiger_lobby.welcomeScreen.button(),
                            }),
                        ],
                    }),
                ],
            })
        );
    });
n(t.jsx(h, { children: t.jsx(_, { children: t.jsx(A, {}) }) }))
    .then(() => d(document.getElementById('root')))
    .then(() => m());
