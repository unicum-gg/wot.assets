import { j as e } from '../../../../chunks/vendor.js';
import { J as s, U as i, H as a, r as n } from '../../../../chunks/lib.js';
const o = 'NewbieBannerTooltipApp_c22595f8',
    d = 'NewbieBannerTooltipApp_banner_eb58ff0b',
    l = 'NewbieBannerTooltipApp_title_f7939b7d',
    p = 'NewbieBannerTooltipApp_text_3551be93',
    r = 'NewbieBannerTooltipApp_modeWrapper_298fa674',
    t = 'NewbieBannerTooltipApp_mode_f2699ee5',
    c = 'NewbieBannerTooltipApp_modeText_956dacbb',
    b = R.strings.sm_lobby.tooltips.newbieBannerTooltip,
    m = () =>
        e.jsxs('div', {
            className: o,
            children: [
                e.jsx('div', { className: d, children: e.jsx('div', { className: l, children: b.title() }) }),
                e.jsx('div', { className: p, children: b.text() }),
                e.jsxs('div', {
                    className: r,
                    children: [
                        e.jsx('div', { className: t, children: b.mode() }),
                        e.jsx('div', { className: c, children: b.modeText() }),
                    ],
                }),
            ],
        });
n(new s().add(i).add(a).render(e.jsx(m, {})));
