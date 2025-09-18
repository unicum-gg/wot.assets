import { p as o, j as s } from '../../../../chunks/vendor.js';
import { a as t, al as a, I as e, L as r, z as n } from '../../../../chunks/lib.js';
import { d as c } from '../../../../chunks/TooltipDecorator2.js';
/* empty css                                 */ const [i, l] = t()(
        ({ observableModel: o }) => ({ root: o.object() }),
        a,
    ),
    p = 'TankInfoTooltipApp_110414c8',
    d = 'TankInfoTooltipApp_icon_9fc22c97',
    m = 'TankInfoTooltipApp_content_5725c62b',
    j = 'TankInfoTooltipApp_title_dd59cb74',
    T = 'TankInfoTooltipApp_description_1a5cf366',
    _ = o(() => {
        const { model: o } = l(),
            { parameter: t, icon: a, description: n } = o.root.get(),
            c = { backgroundImage: `url('${a}')` },
            i = e.resolve('strings').readOrEmpty(`white_tiger_lobby.ttx.${t}`);
        return s.jsxs('div', {
            className: p,
            children: [
                s.jsx('div', { className: d, style: c }),
                s.jsxs('div', {
                    className: m,
                    children: [
                        s.jsx('span', { className: j, children: i }),
                        n && s.jsx(r, { className: T, split: !0, text: n }),
                    ],
                }),
            ],
        });
    });
n(s.jsx(i, { children: s.jsx(c, { children: s.jsx(_, {}) }) }));
