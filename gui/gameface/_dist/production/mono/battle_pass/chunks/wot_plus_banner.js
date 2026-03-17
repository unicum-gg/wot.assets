import { t as s, j as t } from './vendor.js';
import { I as a, l as o } from './lib.js';
const l = 'WotPlusBanner_df826e64',
    e = 'WotPlusBanner_text_a6efd270',
    r = s(() =>
        t.jsxs('div', {
            className: l,
            children: [
                t.jsx(a, { path: 'battlePass.tooltips.plus_logo', width: 64, height: 64 }),
                t.jsx('div', {
                    className: e,
                    children: t.jsx(o, {
                        path: 'battle_pass.tooltips.plusBanner.text',
                        params: { color1: '#F2F2F7', color2: '#FCF2C4' },
                        split: !0,
                    }),
                }),
            ],
        }),
    );
export { r as W };
