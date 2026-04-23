import { j as s } from '../../../../chunks/vendor.js';
import { i as e, n as a, J as d, U as i, H as o, r as l } from '../../../../chunks/lib.js';
const [n, p] = e()(({ observableModel: s }) => s.primitives(['name', 'image', 'conditions', 'description']), a),
    t = 'MedalTooltipApp_b71f12ed',
    c = 'MedalTooltipApp_name_596db87',
    r = 'MedalTooltipApp_image_4de77f5',
    m = 'MedalTooltipApp_conditions_f946bd7f',
    j = 'MedalTooltipApp_description_b614b671',
    _ = 'MedalTooltipApp_dots_75f87ce4',
    v = () => {
        const { model: e } = p();
        return s.jsxs('div', {
            className: t,
            children: [
                s.jsx('div', { className: c, children: e.name.get() }),
                s.jsx('div', { className: r, style: { backgroundImage: `url(${e.image.get()})` } }),
                s.jsx('div', { className: _ }),
                s.jsx('div', { className: j, children: e.description.get() }),
                s.jsx('div', { className: _ }),
                s.jsx('div', { className: m, children: e.conditions.get() }),
            ],
        });
    };
l(new d().add(i).add(n).add(o).render(s.jsx(v, {})));
