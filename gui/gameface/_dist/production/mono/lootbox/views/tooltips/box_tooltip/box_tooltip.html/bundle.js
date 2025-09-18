import { m as e, j as s, n as t } from '../../../../chunks/vendor.js';
import { i as o, c as a, z as c, F as i, r, A as n } from '../../../../chunks/lib.js';
import { l } from '../../../../chunks/getRewardImage.js';
import { a as d, g as p } from '../../../../chunks/resources.js';
const x = {
        images: { glow: 'tooltips.glow', divider: 'tooltips.divider' },
        texts: { howGetTitle: 'boxTooltip.howGet.title' },
    },
    m = {
        dynamicTexts: {
            boxTitle: 'common.boxCategory.lowerCase',
            boxDescription: 'boxTooltip.description.text',
            howGetBoxText: 'boxTooltip.howGet.text',
            guaranteedBoxText: 'boxTooltip.guaranteed.text',
        },
    },
    [u, b] = o()(({ observableModel: s }) => {
        const t = s.object().get().eventName;
        return {
            ...{ root: s.object() },
            computes: { resources: e(() => d(x, t), { equals: a }), dynamicResources: e(() => p(m, t), { equals: a }) },
        };
    }, c),
    g = { base: 'Divider_a108a991' };
function j({ image: e }) {
    return s.jsx('div', { className: g.base, style: { backgroundImage: `url(${e})` } });
}
const _ = 'App_fef503db',
    h = 'App_icon_370a809b',
    v = 'App_textsBlock_d8714f06',
    T = 'App_title_8ab43c68',
    w = 'App_howGetTitle_9b9b34e0',
    y = 'App_howGetDescription_b9b2156f',
    N = 'App_description_8f07459c',
    f = 'App_descriptionGuaranteed_71e24b29',
    A = 'App_count_3c2c9ca9',
    G = 'App_howGetBlock_9b8f7ad0',
    k = 'App_guarantyBlock_367ef0d5',
    B = 'App_glow_271595c0';
const C = t(function () {
    const { model: e } = b(),
        { boxesCountToGuaranteed: t, boxCategory: o } = e.root.get(),
        { images: a, texts: c } = e.computes.resources(),
        { dynamicTexts: r } = e.computes.dynamicResources();
    return s.jsxs('div', {
        className: _,
        children: [
            s.jsx('div', { className: h, style: { backgroundImage: `url(${l('s296x222', o)})` } }),
            s.jsxs('div', {
                className: v,
                children: [
                    s.jsx('div', { className: T, children: r.boxTitle.dynOpt(o) }),
                    s.jsx(i, { className: N, text: r.boxDescription.dynOpt(o) }),
                    s.jsx(j, { image: a.divider }),
                    s.jsxs('div', {
                        className: G,
                        children: [
                            s.jsx('div', { className: w, children: c.howGetTitle }),
                            s.jsx(i, { className: y, text: r.howGetBoxText.dynOpt(o) }),
                        ],
                    }),
                    s.jsx(j, { image: a.divider }),
                    t > 0 &&
                        s.jsxs('div', {
                            className: k,
                            children: [
                                s.jsx('div', { className: B, style: { backgroundImage: `url(${a.glow})` } }),
                                s.jsx(i, {
                                    className: f,
                                    text: r.guaranteedBoxText.dynOpt(o),
                                    upgradeLegacy: !0,
                                    params: { count: s.jsx('span', { className: A, children: t }) },
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
r(s.jsx(u, { children: s.jsx(n, { children: s.jsx(C, {}) }) }));
