import { r as s, j as e, h as a, n as t, k as l } from '../../../chunks/vendor.js';
import { F as i, b as c, c as n, s as d, d as o, r as p } from '../../../chunks/lib.js';
const r = 'HintSlide_e291e2ca',
    _ = 'HintSlide_hintIcon_aa2fefb3',
    m = 'HintSlide_text_b7b9001a',
    h = 'HintSlide_title_669cf402',
    x = 'HintSlide_description_2ee3501c',
    j = s.memo(function ({ sourceCount: s, className: t, bgPath: l, localePath: c }) {
        return e.jsxs('div', {
            className: a(r, t),
            children: [
                e.jsx('div', { className: _, style: { backgroundImage: `url(${l}${s})` } }),
                e.jsxs('div', {
                    className: m,
                    children: [
                        e.jsx(i, { classMix: h, text: c.$dyn(`title_${s}`) }),
                        e.jsx(i, { classMix: x, text: c.$dyn(`description_${s}`) }),
                    ],
                }),
            ],
        });
    }),
    b = 'HelpApp_a4ec8984',
    g = 'HelpApp_header_51c3d04b',
    u = 'HelpApp_title_3461492e',
    H = 'HelpApp_close_6aeb8f26',
    N = 'HelpApp_content_d73325a4',
    f = 'HelpApp_pagination_b9109639',
    v = 'HelpApp_slide_10c12dfe',
    A = 'HelpApp_sizer_1fa63daa',
    y = 'HelpApp_bottomBg_7e66c3a1',
    $ = R.strings.last_stand_battle.help,
    P = R.strings.last_stand_battle.help.title(),
    k = ({
        hintsNum: a = 2,
        bgPath: i = 'R.images.last_stand.gui.maps.icons.battle.eventLoading.tips.c_1024x600.tipBg_',
        localePath: p = $,
        title: r = P,
    }) => {
        c(() => d.close());
        const _ = new Array(a).fill(0),
            m = t({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 200 } });
        return e.jsx(l.div, {
            className: b,
            style: m,
            children: e.jsxs('div', {
                className: N,
                children: [
                    e.jsxs('div', {
                        className: g,
                        children: [
                            e.jsx('span', { className: u, children: r }),
                            e.jsx('div', {
                                className: H,
                                children: e.jsx(n, {
                                    caption: R.strings.last_stand_battle.common.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: () => d.close(),
                                }),
                            }),
                        ],
                    }),
                    e.jsx(o, {
                        hasArrow: !0,
                        selectedIndex: 0,
                        className: f,
                        children: _.map((a, t) => ({
                            render: function () {
                                return e.jsxs(
                                    s.Fragment,
                                    {
                                        children: [
                                            e.jsx(j, { sourceCount: t, className: v, bgPath: i, localePath: p }),
                                            e.jsx('div', { className: A }),
                                        ],
                                    },
                                    `hint_${t}`,
                                );
                            },
                        })),
                    }),
                    e.jsx('div', { className: y }),
                ],
            }),
        });
    };
p(e.jsx(k, {}));
