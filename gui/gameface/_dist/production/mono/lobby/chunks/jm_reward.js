import { f as e, j as a } from './vendor.js';
import { Y as s, an as t, M as l, r, af as o, ao as i, _ as n, Z as c, ap as b } from './lib.js';
import { b as m, k as _, r as d, t as h, u as p, c as u } from './helpers.js';
const v = {
    base: 'LabelOverflow_66e8b7ee',
    base__rare: 'LabelOverflow_base__rare_1eef7c47',
    base__epic: 'LabelOverflow_base__epic_e83ce98c',
    base__legendary: 'LabelOverflow_base__legendary_31fd8d8e',
    text: 'LabelOverflow_text_db94c191',
};
function x({ text: r, withoutLineBreaks: o = !1, rarity: i, className: n }) {
    const c = r.split(' '),
        b = (c[0] && c[0].length > 12) || (c[1] && c[1].length > 11),
        m = e(v.base, i && v[`base__${i}`]);
    return a.jsx('div', {
        className: n,
        children: o
            ? a.jsx(s, { text: r })
            : b
              ? a.jsx(t, { text: r, className: m })
              : a.jsx(l, { className: m, text: r, classNames: { text: v.text } }),
    });
}
const y = 'ShakingComponent_5911c90e';
function f({ children: s, hasShaking: t }) {
    return a.jsx('div', { className: e(t && y), children: s });
}
const g = 'JmReward_9551c376',
    j = 'JmReward_raritySign_dbb317ca',
    w = 'JmReward_label_8a6b6361',
    N = 'JmReward_label__token_4b754cfe',
    k = r.resolve('images');
function L({
    bonus: s,
    hideValue: t = !1,
    size: l = n.Small,
    showLabel: r = !1,
    withoutLineBreaks: v = !1,
    className: y,
    classNames: L,
    hasShaking: S = !1,
    tooltipDisabled: I = !1,
}) {
    const O = m(s),
        J = u(s),
        $ = _(s),
        z = d(s),
        B = h(s),
        T = p(s),
        C = t || O ? void 0 : s.value,
        A = O ? R.views.journey_marathon.mono.lobby.tooltips.key_tooltip('resId') : s.tooltipContentId,
        D = { tooltipId: s.tooltipId, ...(O && { keyName: s.label }) },
        E = s.label && r && (O || J || $ || z || B || T),
        M = a.jsx(o, {
            tooltipArgs: I ? { contentId: 0, disabled: !0 } : b(D, Number(A)),
            name: s.name,
            image: c(s, l),
            special: 'overlayType' in s ? s.overlayType : void 0,
            size: l,
            value: C,
            valueType: i(s.name),
            classNames: L,
        });
    return a.jsxs('div', {
        className: e(g, y),
        children: [
            O ? a.jsx(f, { hasShaking: S, children: M }) : M,
            J &&
                a.jsx('div', {
                    style: {
                        backgroundImage: `url('${k.readOrEmpty(`customization.rarity.glowWithSign.${l}.${s.rarity}`)}')`,
                    },
                    className: j,
                }),
            E &&
                a.jsx(x, {
                    text: s.label,
                    rarity: J ? s.rarity : void 0,
                    withoutLineBreaks: v,
                    className: e(w, O && N, L?.label),
                }),
        ],
    });
}
export { L as J };
