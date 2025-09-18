import { r, p as e, j as s, m as a, q as o } from './vendor.js';
import { D as n } from './lib.js';
const t = 'NumberAnim_d10abffc',
    i = (r) => r,
    c = (r, e) => {
        const s = Math.floor(r);
        return e ? n(s, 0) : s;
    },
    d = r.memo(function ({
        renderText: r = (r) => s.jsx(o.div, { children: r }),
        prefix: n = '',
        currentNumber: d,
        previousNumber: m = 0,
        delay: l,
        duration: u,
        className: f,
        isCanceled: v,
        isFormatted: j = !1,
        onStart: p,
        onRest: x,
    }) {
        const N = e({
            from: { val: m },
            to: { val: d },
            delay: l,
            config: { duration: u, easing: i },
            cancel: v,
            reverse: v,
            onStart: p,
            onRest: x,
        });
        return s.jsxs('div', {
            className: a(t, f),
            children: [n, v ? r(c(d, j)) : s.jsx(o.div, { children: r(N.val.to((r) => c(r, j))) })],
        });
    });
export { d as N };
