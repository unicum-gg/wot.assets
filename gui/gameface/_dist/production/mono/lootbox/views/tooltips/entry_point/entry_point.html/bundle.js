import { o as e, m as s, j as t, e as o } from '../../../../chunks/vendor.js';
import { i, A as r, G as n, H as a, J as c, F as l, r as d, E as m } from '../../../../chunks/lib.js';
import { a as _ } from '../../../../chunks/resources.js';
import '../../../../chunks/getRewardImage.js';
const x = {
        images: { alert: 'entry_point.alert', lootboxTooltip: 'entry_point.lootboxTooltip', time: 'entry_point.time' },
        texts: {
            title: 'entryPoint.tooltip.title',
            description: 'entryPoint.tooltip.description',
            warningTitle: 'entryPoint.tooltip.warningTitle',
            warningDescription: 'entryPoint.tooltip.warningDescription',
            lessThanMinute: 'entryPoint.tooltip.lessThanMinute',
            timerText: 'entryPoint.tooltip.timerText',
        },
    },
    [p, u] = i()(({ observableModel: s }) => {
        const t = s.object().get().eventName;
        return { ...{ root: s.object(), resources: e.box(_(x, t)) }, computes: {} };
    }, r);
function j(e) {
    return e < 10 ? '0' + e : e;
}
const b = 'Timer_ece32445',
    h = 'Timer_timerText_389b7aec',
    T = 'Timer_iconWrapper_e0ef602f',
    g = 'Timer_icon_a6577db7',
    v = 'Timer_value_4ddac53a';
const f = s(function () {
        const { model: e } = u(),
            { eventExpireTime: s } = e.root.get(),
            { images: o, texts: i } = e.resources.get(),
            r = n(s, 1),
            l =
                ((d = a(r)),
                (m = i.lessThanMinute),
                d.minutes > 0
                    ? `${d.days ? c(R.strings.common.duration.days(), { days: d.days }) : ''} ${j(d.hours)} : ${j(d.minutes)} : ${j(d.seconds)}`
                    : m);
        var d, m;
        return t.jsxs('div', {
            className: b,
            children: [
                t.jsx('div', { className: h, children: i.timerText }),
                t.jsx('div', {
                    className: T,
                    children: t.jsx('div', { className: g, style: { backgroundImage: `url(${o.time})` } }),
                }),
                t.jsx('div', { className: v, children: l }),
            ],
        });
    }),
    N = {
        icon: 'BaseTooltip_icon_3288a8b1',
        title: 'BaseTooltip_title_f4f02165',
        description: 'BaseTooltip_description_f508a8da',
    };
const y = s(function () {
        const { model: e } = u(),
            { images: s, texts: o } = e.resources.get();
        return t.jsxs('div', {
            className: N.base,
            children: [
                t.jsx('div', { className: N.icon, style: { backgroundImage: `url(${s.lootboxTooltip})` } }),
                t.jsx('div', { className: N.title, children: o.title }),
                t.jsx(l, { classMix: N.description, text: o.description }),
                t.jsx(f, {}),
            ],
        });
    }),
    I = {
        root: 'AlertIcon_root_a8a4098d',
        base: 'AlertIcon_7dcecd8f',
        shadow: 'AlertIcon_shadow_5a06c9a',
        base__big: 'AlertIcon_base__big_a8a4098d',
        icon: 'AlertIcon_icon_3bb8b40',
        fadeIn: 'AlertIcon_fadeIn_a8a4098d',
    },
    w = { small: 'small' };
function E({ icon: e, hasShadow: s = !1, size: i = w.small, className: r }) {
    return t.jsxs('div', {
        className: o(I.base, I[`base__${i}`], r),
        children: [
            s && t.jsx('div', { className: I.shadow }),
            t.jsx('div', { className: I.icon, style: { backgroundImage: `url(${e})` } }),
        ],
    });
}
const A = 'ErrorTooltip_1a899ce5',
    $ = 'ErrorTooltip_shadow_c014711a',
    k = 'ErrorTooltip_alertIcon_8ff91e02',
    P = 'ErrorTooltip_title_27846c7',
    M = 'ErrorTooltip_text_49b56fd6',
    B = 'ErrorTooltip_description_791ec4ee';
const D = s(function () {
        const { model: e } = u(),
            { images: s, texts: o } = e.resources.get();
        return t.jsxs('div', {
            className: A,
            children: [
                t.jsx('div', { className: $ }),
                t.jsxs('div', {
                    className: P,
                    children: [
                        t.jsx(E, { className: k, icon: s.alert }),
                        t.jsx('div', { className: M, children: t.jsx(l, { text: o.warningTitle }) }),
                    ],
                }),
                t.jsx('div', { className: B, children: o.warningDescription }),
            ],
        });
    }),
    z = 'App_67d0cdee';
const F = s(function () {
    const { model: e } = u(),
        { isEnabled: s } = e.root.get();
    return t.jsx('div', { className: z, children: s ? t.jsx(y, {}) : t.jsx(D, {}) });
});
d(t.jsx(p, { children: t.jsx(m, { children: t.jsx(F, {}) }) }));
