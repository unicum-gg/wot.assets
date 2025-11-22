import { v as a, D as t } from './lib.js';
import './vendor.js';
const o = a,
    s = (a) => o(a, t.ShortTime, !0),
    l = (a) => o(a, t.DayMonthFull, !0),
    r = (a, s) => ({ startDate: o(a, t.DayMonthFull, !0), endDate: o(s, t.DayMonthFull, !0) });
export { l as a, s as b, r as f };
