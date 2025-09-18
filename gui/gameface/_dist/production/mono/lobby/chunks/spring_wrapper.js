import { p as e, r as a, j as s, q as t } from './vendor.js';
import { j as n } from './lib.js';
const r = { x: 0, y: 0, opacity: 0, transform: 'scale(1) rotate(0deg)' },
    i = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' };
var o = ((e) => (
    (e.Linear = 'linear'),
    (e.EaseIn = 'easeIn'),
    (e.EaseOut = 'easeOut'),
    (e.EaseInOut = 'easeInOut'),
    (e.EaseOutBack = 'easeOutBack'),
    (e.EaseOutQuint = 'easeOutQuint'),
    (e.EaseOutExpo = 'easeOutExpo'),
    e
))(o || {});
const u = {
        linear: n.linear,
        easeIn: n.easeInCubic,
        easeOut: n.easeOutCubic,
        easeInOut: n.easeInOutCubic,
        easeOutBack: n.easeOutBack,
        easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
        easeOutExpo: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
    },
    c = ({
        children: n,
        from: o = r,
        to: c = i,
        config: O,
        isCanceled: l = !1,
        isDisabled: d = !1,
        duration: m = 250,
        delay: f = 0,
        transformOrigin: p = '50% 50%',
        easingType: E = 'easeInOut',
        onRest: g,
        onStart: I,
        trigger: y,
        className: x,
        isReverse: b = !1,
    }) => {
        const h = u[E],
            [j, v] = e(() => o),
            k = l && !d ? c : { ...j, transformOrigin: p };
        return (
            a.useEffect(() => {
                v.start({
                    from: o,
                    to: c,
                    delay: f,
                    immediate: l,
                    config: O ? { ...O } : { duration: m, easing: h },
                    cancel: l || d,
                    reverse: b,
                    onRest: (e) => {
                        !0 === e.finished && g && g();
                    },
                    onStart: () => {
                        I && I();
                    },
                });
            }, [v, f, m, h, o, l, g, c, y, d, b, I, O]),
            s.jsx(t.div, { className: x, style: k, children: n })
        );
    };
export { o as E, c as S };
