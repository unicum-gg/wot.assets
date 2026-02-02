import { cm as e } from './lib.js';
const t = -1,
    s = 0,
    a = 1,
    r = window.systemLocale,
    o = (t, o, i) => {
        const n =
            Number.isInteger(t) || Number.isInteger(10 * t)
                ? r.getRealFormat(t, a)
                : r.getRealFormat(parseFloat(t.toFixed(i)), s);
        return o ? e(R.strings.comp7_ext.percentage(), { percentageValue: n }) : n;
    },
    i = ({ value: e, isPercentage: t = !1, fractionDigits: s = 2 }) =>
        -1 === e ? R.strings.comp7_ext.dash() : o(e, t, s);
export { t as N, o as f, i as g };
