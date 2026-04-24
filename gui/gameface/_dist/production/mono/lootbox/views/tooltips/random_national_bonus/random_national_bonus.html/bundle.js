import { n as s, j as e } from '../../../../chunks/vendor.js';
import { i as a, A as t, o as i, I as r, F as d, r as o, E as l } from '../../../../chunks/lib.js';
import { g as n } from '../../../../chunks/getRewardImage.js';
/* empty css                       */ const [p, m] = a()(({ observableModel: s }) => ({ root: s.object() }), t),
    c = 'App_fed01ed5',
    h = 'App_icon_370a809b',
    g = 'App_title_7de7d87e',
    j = 'App_highlighted_33d456ed',
    x = 'App_description_843bb261',
    b = s(function () {
        const { model: s } = m(),
            a = s.root.get(),
            t = i.resolve('strings');
        return e.jsxs('div', {
            className: c,
            children: [
                e.jsx('div', { className: h, style: { backgroundImage: `url(${n(a, r.S600x450)})` } }),
                e.jsx('div', { className: g, children: t.readOrEmpty(`tooltips.awardItem.${a.name}.header`) }),
                e.jsx(d, {
                    classMix: x,
                    text: t.readOrEmpty(`tooltips.awardItem.${a.name}.body`),
                    binding: {
                        highlighted: e.jsx(d, {
                            classMix: j,
                            text: t.readOrEmpty('tooltips.awardItem.highlighted'),
                            binding: { xp: a.value },
                        }),
                    },
                }),
            ],
        });
    });
o(e.jsx(p, { children: e.jsx(l, { children: e.jsx(b, {}) }) }));
