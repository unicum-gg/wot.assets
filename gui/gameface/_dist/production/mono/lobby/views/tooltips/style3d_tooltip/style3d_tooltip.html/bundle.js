import { x as s, j as e, w as i } from '../../../../chunks/vendor.js';
import { i as t, n as c, F as o, r as l } from '../../../../chunks/lib.js';
import { t as d, T as a } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ const [p, r] = t()(({ observableModel: s }) => ({ root: s.object() }), c),
    n = 'App_5750b50d',
    _ = 'App_image_44f419b9',
    m = 'App_section_33f04f1b',
    x = 'App_section__bg_be804357',
    b = 'App_section__bottom_df7c9a59',
    j = 'App_divider_31ebf907',
    h = 'App_divider__top_6b53b19b',
    v = 'App_title_83b851ff',
    g = 'App_text_281c93b4',
    u = 'App_subtitle_915d9cd5',
    A = 'App_howToReceive_5cbf6889',
    f = 'App_paragraph_5142910c',
    N = s(() => {
        const { model: s } = r(),
            { styleId: t, vehicles: c } = s.root.get();
        return e.jsxs('div', {
            className: n,
            children: [
                e.jsx('div', {
                    className: m,
                    children: e.jsx(o, { text: String(R.strings.comp7_ext.style3dTooltip.$num(t)), classMix: v }),
                }),
                e.jsx('div', {
                    className: _,
                    style: { backgroundImage: `url(${R.images.comp7.gui.maps.icons.rewards.$dyn(`style3d_${t}`)})` },
                }),
                e.jsxs('div', {
                    className: m,
                    children: [
                        e.jsx('div', { className: f, children: R.strings.comp7_ext.style3dTooltip.description() }),
                        e.jsx('div', {
                            className: i(u, A),
                            children: R.strings.comp7_ext.style3dTooltip.howToReceive(),
                        }),
                        e.jsx('div', {
                            className: f,
                            children: `${R.strings.comp7_ext.style3dTooltip.secondaryDescription.$num(t)}`,
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: i(m, x, b),
                    children: [
                        e.jsx('div', { className: i(d.divider, j, h) }),
                        e.jsx('div', { className: u, children: R.strings.comp7_ext.style3dTooltip.suitableVehicles() }),
                        e.jsx('div', { className: g, children: c }),
                    ],
                }),
            ],
        });
    });
l(e.jsx(p, { children: e.jsx(a, { children: e.jsx(N, {}) }) }));
