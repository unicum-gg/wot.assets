import { j as o } from './vendor.js';
import { o as e, u as t, a as s } from './lib.js';
import { T as a, N as n } from './title2.js';
function r({ counts: r, texts: c, icons: i, category: x, eventName: g, className: l }) {
    const m = e.resolve('views'),
        u = t({
            contentId: m.read((o) => o.mono.lootbox.tooltips.guaranteed_reward_info('resId')),
            args: { category: x, eventName: g },
        });
    return o.jsxs(a, {
        ...u,
        className: l,
        children: [
            r.boxesToGuaranteed > 1
                ? o.jsx(s, {
                      text: c.title,
                      upgradeLegacy: !0,
                      params: {
                          count: o.jsx(n, {
                              boxesCountToGuaranteed: r.boxesToGuaranteed,
                              glowIcon: i.glow,
                              strongGlowIcon: i.strongGlow,
                              accentCount: r.accent,
                          }),
                      },
                  })
                : o.jsx(a.StrongMessage, { text: c.nextBox, image: i.strongGlow }),
            o.jsx(a.Info, { icon: i.info }),
        ],
    });
}
export { r as G };
