import { o as e, n as s, j as t, e as o } from '../../../../chunks/vendor.js';
import { i, z as r, E as n, G as a, H as c, k as l, r as d, A as m } from '../../../../chunks/lib.js';
import { a as x } from '../../../../chunks/resources.js';
import '../../../../chunks/getRewardImage.js';
const p = {
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
    [u, _] = i()(({ observableModel: s }) => {
        const t = s.object().get().eventName;
        return { ...{ root: s.object(), resources: e.box(x(p, t)) }, computes: {} };
    }, r);
function j(e) {
    return e < 10 ? '0' + e : e;
}
const h = 'Timer_ece32445',
    T = 'Timer_timerText_389b7aec',
    g = 'Timer_iconWrapper_e0ef602f',
    v = 'Timer_icon_a6577db7',
    b = 'Timer_value_4ddac53a';
const f = s(function () {
        const { model: e } = _(),
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
            className: h,
            children: [
                t.jsx('div', { className: T, children: i.timerText }),
                t.jsx('div', {
                    className: g,
                    children: t.jsx('div', { className: v, style: { backgroundImage: `url(${o.time})` } }),
                }),
                t.jsx('div', { className: b, children: l }),
            ],
        });
    }),
    N = {
        icon: 'BaseTooltip_icon_3288a8b1',
        title: 'BaseTooltip_title_f4f02165',
        description: 'BaseTooltip_description_f508a8da',
    };
const y = s(function () {
        const { model: e } = _(),
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
    w = { base: 'AlertIcon_7dcecd8f', shadow: 'AlertIcon_shadow_daf8370', icon: 'AlertIcon_icon_35ce98b5' };
function E({ icon: e, hasShadow: s = !1, className: i }) {
    return t.jsxs('div', {
        className: o(w.base, i),
        children: [
            s && t.jsx('div', { className: w.shadow }),
            t.jsx('div', { className: w.icon, style: { backgroundImage: `url(${e})` } }),
        ],
    });
}
const k = 'ErrorTooltip_1a899ce5',
    I = 'ErrorTooltip_shadow_c014711a',
    $ = 'ErrorTooltip_alertIcon_8ff91e02',
    P = 'ErrorTooltip_title_c3fe1b7c',
    A = 'ErrorTooltip_text_49b56fd6',
    M = 'ErrorTooltip_description_791ec4ee';
const B = s(function () {
        const { model: e } = _(),
            { images: s, texts: o } = e.resources.get();
        return t.jsxs('div', {
            className: k,
            children: [
                t.jsx('div', { className: I }),
                t.jsxs('div', {
                    className: P,
                    children: [
                        t.jsx(E, { className: $, icon: s.alert }),
                        t.jsx('div', { className: A, children: t.jsx(l, { text: o.warningTitle }) }),
                    ],
                }),
                t.jsx('div', { className: M, children: o.warningDescription }),
            ],
        });
    }),
    D = 'App_67d0cdee';
const z = s(function () {
    const { model: e } = _(),
        { isEnabled: s } = e.root.get();
    return t.jsx('div', { className: D, children: s ? t.jsx(y, {}) : t.jsx(B, {}) });
});
d(t.jsx(u, { children: t.jsx(m, { children: t.jsx(z, {}) }) }));
