import { j as s, w as a } from './vendor.js';
import { a9 as l, g as o } from './lib.js';
const i = 'DivineGlow_2b9c4670',
    e = 'DivineGlow_glow_fddce7f8',
    d = 'DivineGlow_glow__bg_a3df35d7',
    c = (s) => !!o.isHigh() && s,
    m = ({ className: o, classNames: m, playerRef: n, animated: r = !0 }) =>
        s.jsx('div', {
            className: a(i, o),
            children: c(r)
                ? s.jsx(l, {
                      className: a(e, null == m ? void 0 : m.glow),
                      src: String(R.videos.comp7.divine_glow()),
                      autoplay: !0,
                      loop: !0,
                      ref: n,
                  })
                : s.jsx('div', { className: a(e, d, null == m ? void 0 : m.glow) }),
        });
export { m as D };
