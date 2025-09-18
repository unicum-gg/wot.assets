import { p as e, j as s } from '../../../../chunks/vendor.js';
import { a as o, al as l, F as i, z as c } from '../../../../chunks/lib.js';
import { d as t } from '../../../../chunks/TooltipDecorator2.js';
/* empty css                                 */ const [r, a] = o()(
        ({ observableModel: e }) => ({ root: e.object() }),
        l,
    ),
    p = 'CarouselVehicleTooltipApp_d3df77e6',
    d = 'CarouselVehicleTooltipApp_content_55fea761',
    n = 'CarouselVehicleTooltipApp_title_4ba6fbeb',
    h = 'CarouselVehicleTooltipApp_descriptionTitle_5decc288',
    j = 'CarouselVehicleTooltipApp_description_df858c15',
    m = 'CarouselVehicleTooltipApp_titleIcon_452e804d',
    u = e(() => {
        const { model: e } = a(),
            { title: o, subtitle: l, description: c, icon: t } = e.root.get(),
            r = { backgroundImage: `url(${t})` };
        return s.jsx('div', {
            className: p,
            children: s.jsxs('div', {
                className: d,
                children: [
                    s.jsx('div', { className: m, style: r }),
                    s.jsx('div', { className: n, children: o }),
                    s.jsx('div', { className: h, children: l }),
                    s.jsx('div', { className: j, children: s.jsx(i, { text: c }) }),
                ],
            }),
        });
    });
c(s.jsx(r, { children: s.jsx(t, { children: s.jsx(u, {}) }) }));
