import { m as e, n as s, j as o, e as t } from '../../../../chunks/vendor.js';
import { i as a, c, A as i, a as n, r as l, E as r } from '../../../../chunks/lib.js';
import { l as m } from '../../../../chunks/getRewardImage.js';
import { a as d, g as x } from '../../../../chunks/resources.js';
/* empty css                       */ const p = {
        images: {
            glow: 'tooltips.glow',
            divider: 'tooltips.divider',
            arrow: 'tooltips.arrow',
            compensationIcon: 'tooltips.compensationIcon',
            vehicles: 'tooltips.vehicles',
        },
        texts: { howGetTitle: 'boxTooltip.howGet.title', notification: 'tooltip.compensation.notification' },
    },
    u = {
        dynamicTexts: {
            boxTitle: 'common.boxCategory.lowerCase',
            boxDescription: 'boxTooltip.description.text',
            howGetBoxText: 'boxTooltip.howGet.text',
            guaranteedBoxText: 'boxTooltip.guaranteed.text',
        },
    },
    [_, g] = a()(({ observableModel: s }) => {
        const o = { root: s.object() },
            { eventName: t } = o.root.get(),
            a = e(() => d(p, t), { equals: c }),
            i = e(() => x(u, t), { equals: c });
        return { ...o, computes: { resources: a, dynamicResources: i } };
    }, i),
    b = 'Arrow_6d88c43b',
    j = s(function ({ className: e = '' }) {
        const { model: s } = g(),
            { images: a } = s.computes.resources();
        return o.jsx('div', { className: t(b, e), style: { backgroundImage: `url(${a.arrow})` } });
    }),
    f = 'Divider_a108a991';
function h({ image: e, className: s = '' }) {
    return o.jsx('div', { className: t(f, s), style: { backgroundImage: `url(${e})` } });
}
const N = 'GlowBlock_480232de',
    v = 'GlowBlock_glow_e73efd9c',
    T = 'GlowBlock_text_7ba8322b',
    w = 'GlowBlock_count_7d740',
    y = s(function ({ className: e = '' }) {
        const { model: s } = g(),
            { images: a } = s.computes.resources(),
            { dynamicTexts: c } = s.computes.dynamicResources(),
            { boxesCountToGuaranteed: i, boxCategory: l } = s.root.get();
        return o.jsxs('div', {
            className: t(N, e),
            children: [
                o.jsx('div', { className: v, style: { backgroundImage: `url(${a.glow})` } }),
                o.jsx(n, {
                    className: T,
                    text: c.guaranteedBoxText.dynOpt(l),
                    upgradeLegacy: !0,
                    params: { count: o.jsx('span', { className: w, children: i }) },
                }),
            ],
        });
    }),
    k = 'Icon_8243dc1d';
function I({ image: e }) {
    return o.jsx('div', { className: k, style: { backgroundImage: `url(${e})` } });
}
const A = 'TextIcon_cc0a0891',
    G = 'TextIcon_icon_d1b62560',
    B = 'TextIcon_notification_f69487e6';
function C({ icon: e, text: s, className: a = '' }) {
    return o.jsxs('div', {
        className: t(A, a),
        children: [
            o.jsx('div', { className: G, style: { backgroundImage: `url(${e})` } }),
            o.jsx('div', { className: B, children: s }),
        ],
    });
}
const $ = { base: 'Title_bc528df2', base__small: 'Title_base__small_919c2807', fadeIn: 'Title_fadeIn_2e63cf3' },
    D = 'small',
    O = 'medium';
function R({ title: e, size: s = O }) {
    return o.jsx('div', { className: t($.base, $[`base__${s}`]), children: e });
}
const q = 'App_cab7a561',
    z = 'App_info_3f0f2d4',
    E = 'App_content_21db64d3',
    L = 'App_arrow_5f9090c6',
    M = 'App_textBlock_b6e75841',
    F = 'App_highlight_86866f89',
    H = 'App_description_a897f85c',
    J = 'App_topDivider_fa28fc4b',
    K = 'App_bottomDivider_d6e091c2',
    P = 'App_glow_4704b493',
    Q = s(function () {
        const { model: e } = g(),
            { images: s, texts: t } = e.computes.resources(),
            { dynamicTexts: a } = e.computes.dynamicResources(),
            { boxesCountToGuaranteed: c, boxCategory: i } = e.root.get();
        return o.jsxs('div', {
            className: q,
            children: [
                o.jsx(C, { icon: s.compensationIcon, text: t.notification, className: z }),
                o.jsxs('div', {
                    className: E,
                    children: [
                        o.jsx(I, { image: s.vehicles }),
                        o.jsx(j, { className: L }),
                        o.jsx(I, { image: m('s180x135', i) }),
                    ],
                }),
                o.jsxs('div', {
                    className: M,
                    children: [
                        o.jsx(R, { title: a.boxTitle.dynOpt(i) }),
                        o.jsx(n, { className: H, text: a.boxDescription.dynOpt(i) }),
                    ],
                }),
                o.jsx(h, { image: s.divider, className: J }),
                o.jsxs('div', {
                    className: F,
                    children: [
                        o.jsx(R, { title: t.howGetTitle, size: D }),
                        o.jsx(n, { className: H, text: a.howGetBoxText.dynOpt(i) }),
                    ],
                }),
                o.jsx(h, { image: s.divider, className: K }),
                c > 0 && o.jsx(y, { className: P }),
            ],
        });
    });
l(o.jsx(_, { children: o.jsx(r, { children: o.jsx(Q, {}) }) }));
