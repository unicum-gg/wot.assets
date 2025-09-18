import { w as r } from './vendor.js';
import { ai as t } from './lib.js';
var e = ((r) => ((r[(r.left = 0)] = 'left'), (r[(r.right = 1)] = 'right'), r))(e || {});
const n = ['zh_cn', 'zh_sg', 'zh_tw'];
function s(r, t) {
    return r.replace(/(\{|%\()\w+(\}|\)[s|d])/g, (r) => {
        const e = 0 === r.indexOf('%') ? 2 : 1;
        return String(t[r.slice(e, -e)]);
    });
}
const i = (r) => r.replace(/&nbsp;/g, ' '),
    o = (r, t, e = 0) => r.split(t).reduce(0 === e ? a : c, []),
    a = (r, t, e) => {
        if (e % 2) {
            const e = r.pop();
            return [...r, e + t];
        }
        return [...r, t];
    },
    c = (r, t, e) => {
        if (0 === e) return [t];
        if (e % 2) return [...r, ' ' === t ? ' ' : t];
        {
            const e = r.pop();
            return [...r, e + t];
        }
    },
    p = (r, t = 0) => {
        let e = [];
        const n = new RegExp('(?<=[a-zà-ÿα-ωа-я])(-)(?=[a-zà-ÿα-ωа-я])', 'gu'),
            s = i(r);
        return (o(s, /( )/, t).forEach((r) => (e = e.concat(o(r, n, 0)))), e);
    },
    u = (e, s, o) =>
        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
            ((e, s = 0) => {
                const o = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                if (n.includes(o)) return t(e);
                if ('ja' === o)
                    return r()
                        .parse(e)
                        .map((r) => i(r));
                return p(e, s);
            })(e, s),
        );
export { e as A, u as a, s as f };
