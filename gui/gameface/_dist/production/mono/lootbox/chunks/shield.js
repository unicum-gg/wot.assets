import { j as e, e as s } from './vendor.js';
import { al as a, ab as n } from './lib.js';
import { a as i } from './resources.js';
const t = {
        ENTRY_POINT: {
            icon: { emptyIconBrightness: 0.4, boxesIconBrightness: 0.4 },
            shine: { opacity: { initial: 1, hover: 1 } },
        },
        HOME_VIEW: {
            hasIdle: !0,
            vignette: { isEnabled: !0, opacity: 0.4 },
            hoverZone: { width: '38%', height: '39%', horizontalOffset: '30.8%', verticalOffset: '39%' },
            backgroundColor: '#111',
        },
        COMMON: { guaranteed: { accent: 5, visibleAt: 10 } },
    },
    o = {
        DEFAULT_CONFIG: t,
        anniversaryCN: {
            ENTRY_POINT: { icon: { emptyIconBrightness: 0.2 } },
            HOME_VIEW: { hasIdle: !1 },
            COMMON: { guaranteed: { visibleAt: 5 } },
        },
        retro: {
            ENTRY_POINT: { icon: { emptyIconBrightness: 0.3, boxesIconBrightness: 0.3 } },
            HOME_VIEW: { hoverZone: { width: '35%', height: '45%', horizontalOffset: '30.8%', verticalOffset: '35%' } },
        },
    },
    c = (e, s) => {
        const a = (e, s) => {
            const n = { ...e };
            for (const i in n)
                s && i in s && ('object' == typeof n[i] ? (n[i] = a(n[i], s[i] ?? n[i])) : (n[i] = s[i] ?? n[i]));
            return n;
        };
        return a(e, s);
    };
function r(e, s) {
    const n = o[a(e)],
        i = n?.COMMON ? c(t.COMMON, n.COMMON) : t.COMMON;
    if (!s) return i;
    const r = n ? c(t[s], n[s]) : t[s],
        l = Object.keys(r).filter((e) => e in i);
    if (l.length > 0)
        throw new Error(
            `[getConfig] Name conflict in "${e}.${String(s)}": keys [${l.join(', ')}] exist in both componentConfig and commonConfig.`,
        );
    return { ...r, ...i };
}
const l = {
        base: 'Number_cf3a5bc4',
        'base__size-large': 'Number_base__size-large_bbebea6f',
        media: 'Number_media_2d3c9ebe',
        count: 'Number_count_de0280bc',
        base__highlight: 'Number_base__highlight_17ab79b6',
        glow: 'Number_glow_87d55301',
        fadeIn: 'Number_fadeIn_17ab79b6',
    },
    g = { small: 'small', large: 'large' };
function h({ highlight: a, assets: i, counts: t, size: o = g.small, className: c = '' }) {
    const { icons: r, videos: h } = i,
        d = a ? 'none' : r.default;
    return e.jsxs('div', {
        className: s(l.base, l[`base__size-${o}`], a && l.base__highlight, c),
        children: [
            a
                ? e.jsx('div', {
                      className: l.media,
                      children: e.jsx(n, { loop: !0, autoplay: !0, className: l.glow, src: h.glow }),
                  })
                : e.jsx('div', { className: l.media, style: { backgroundImage: `url(${d})` } }),
            e.jsx('div', { className: l.count, children: t }),
        ],
    });
}
const d = 'Highlight_c2944c51',
    m = 'Highlight_base__highlight_8b97c5a1';
const u = 'Info_9c6dfc74';
const _ = 'Title_1dcff219',
    b = 'Title_wrapper_5727057f';
function f({ children: a, className: n, ...i }) {
    return e.jsx('div', { ...i, className: s(_, n), children: e.jsx('div', { className: b, children: a }) });
}
((f.Info = function ({ icon: a, className: n }) {
    return e.jsx('div', { className: s(u, n), style: { backgroundImage: `url(${a})` } });
}),
    (f.Highlight = function ({ text: a, highlight: n, className: i }) {
        return e.jsx('div', { className: s(d, n && m, i), children: a });
    }));
const N = {
    images: { guaranteedIconS: 'common.shield.shieldS', guaranteedIconM: 'common.shield.shieldM' },
    videos: { guaranteedGlowS: 'common.shield.glowS', guaranteedGlowM: 'common.shield.glowM' },
};
function v({ counts: s, size: a = g.small, eventName: n, className: t }) {
    const o = (function (e, s) {
            const { images: a, videos: n } = i(N, e);
            switch (s) {
                case g.small:
                    return { icons: { default: a.guaranteedIconS }, videos: { glow: n.guaranteedGlowS } };
                case g.large:
                    return { icons: { default: a.guaranteedIconM }, videos: { glow: n.guaranteedGlowM } };
            }
        })(n, a),
        { guaranteed: c } = r(n);
    return e.jsx(h, { className: t, highlight: s <= c.accent, counts: s, size: a, assets: o });
}
export { v as S, f as T, r as g, g as s };
