import { j as s, f as e, t as a } from '../../../../chunks/vendor.js';
import { i as t, N as i, l as n, e as c, b_ as r, J as d, U as l, j as o } from '../../../../chunks/lib.js';
const [_, j] = t()(({ observableModel: s }) => ({ ...{ root: s.object() } }), i),
    p = 'Message_2be04282',
    x = 'Message_separator_8e93a926',
    h = 'Message_content_892e4ad6',
    m = 'Message_text_4b17d86',
    b = 'Message_lightWrapper_3117043c',
    v = 'Message_lightWrapper__x2_2e75acbc',
    g = 'Message_light_b62af34c',
    N = 'Message_points_65c3ecdb',
    f = 'Message_check_3a018192',
    M = R.strings.battle_pass.tooltips.notChosen,
    C = ({ points: a }) => {
        const t = n();
        return s.jsxs('div', {
            className: p,
            children: [
                s.jsx('div', { className: x }),
                s.jsx('div', {
                    className: h,
                    children: s.jsx('div', {
                        className: m,
                        children: s.jsx(c, {
                            text: M.points(),
                            binding: {
                                points: s.jsxs('div', {
                                    className: N,
                                    children: [
                                        s.jsx('div', {
                                            className: e(b, 2 === t && v),
                                            children: s.jsx('div', { className: g }),
                                        }),
                                        s.jsx('div', { className: f, children: a }),
                                    ],
                                }),
                            },
                        }),
                    }),
                }),
                s.jsx('div', { className: x }),
            ],
        });
    },
    u = 'Content_3b8aeff8',
    W = 'Content_separator_9582cf97',
    k = 'Content_title_53d25156',
    w = 'Content_subtitle_9986b7c5',
    D = 'Content_messageWrapper_563c2e09',
    J = 'Content_description_bf1180f1',
    P = 'Content_separatorWrapper_162c2d2f',
    T = R.strings.battle_pass.tooltips.notChosen,
    U = a(() => {
        const { model: e } = j(),
            { points: a } = e.root.get();
        return s.jsxs('div', {
            className: u,
            children: [
                s.jsx('div', { className: k, children: T.title() }),
                s.jsx('div', { className: w, children: T.subTitle() }),
                a > 0
                    ? s.jsx('div', { className: D, children: s.jsx(C, { points: a }) })
                    : s.jsx('div', { className: P, children: s.jsx('div', { className: W }) }),
                s.jsx('div', { className: J, children: T.description() }),
            ],
        });
    }),
    q = () => s.jsx(r, { children: s.jsx(r.Decorator, { children: s.jsx(U, {}) }) });
o(new d().add(l).addWithProps(_, {}).render(s.jsx(q, {})));
