import { j as e, f as s } from '../../../../chunks/vendor.js';
import { r as t, aK as a, ap as i, I as r, ay as l, ax as p } from '../../../../chunks/lib.js';
const o = 'App_9188ef79',
    c = 'App_headerContainer_bd668828',
    n = 'App_title_65c0c363',
    d = 'App_subtitle_39585678',
    _ = 'App_separator_649b3a29',
    x = 'App_description_c0f41308',
    h = 'App_image_a56d3071',
    m = 'App_info_cb654453',
    j = 'App_text_1072bf2a',
    b = t.resolve('strings');
function v() {
    return e.jsx(a, {
        children: e.jsx(a.Decorator, {
            children: e.jsxs('div', {
                className: o,
                children: [
                    e.jsxs('div', {
                        className: c,
                        children: [
                            e.jsx('div', {
                                className: n,
                                children: b.readOrEmpty('battle_royale_extention.tooltip.shop.title'),
                            }),
                            e.jsx('div', {
                                className: s(d, j),
                                children: e.jsx(i, {
                                    text: b.readOrEmpty('battle_royale_extention.tooltip.shop.subtitle'),
                                    split: !0,
                                }),
                            }),
                        ],
                    }),
                    e.jsx('div', { className: _ }),
                    e.jsxs('div', {
                        className: s(x, j),
                        children: [
                            e.jsx('div', {
                                className: h,
                                children: e.jsx(r, {
                                    path: 'battleRoyale.currency.proxy_80',
                                    width: '80rem',
                                    height: '80rem',
                                }),
                            }),
                            e.jsx('div', {
                                className: m,
                                children: b.readOrEmpty('battle_royale_extention.tooltip.shop.text'),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
l(e.jsx(p, { children: e.jsx(v, {}) }));
