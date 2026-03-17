import { j as a, t as s } from './vendor.js';
const n = {
    base: 'DailyBonus_6602def3',
    dailyBonusContainer: 'DailyBonus_dailyBonusContainer_6602def3',
    factor: 'DailyBonus_factor_2de27320',
    dailyBonusIcon: 'DailyBonus_dailyBonusIcon_9a49094a',
    dailyBonusIcon__stpcoin: 'DailyBonus_dailyBonusIcon__stpcoin_f19cd0df',
};
function o({ coinType: o, dailyBonusFactor: i, className: c }) {
    return a.jsxs('div', {
        className: s(n.base, c),
        children: [
            a.jsx('div', {
                className: n.dailyBonusContainer,
                children: a.jsx('div', { className: s(n.dailyBonusIcon, n[`dailyBonusIcon__${o}`]) }),
            }),
            a.jsx('div', { className: n.factor, children: `×${i}` }),
        ],
    });
}
export { o as D };
