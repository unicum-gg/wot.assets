import { j as s, J as l } from './vendor.js';
import { dn as o, cV as a } from './lib.js';
const i = 'DivineGlow_2b9c4670',
    e = 'DivineGlow_glow_fddce7f8',
    d = 'DivineGlow_glow__bg_a3df35d7',
    c = (s) => !!a.isHigh() && s,
    n = ({ className: a, classNames: n, playerRef: m, animated: r = !0 }) =>
        s.jsx('div', {
            className: l(i, a),
            children: c(r)
                ? s.jsx(o, {
                      className: l(e, null == n ? void 0 : n.glow),
                      src: String(R.videos.comp7.divine_glow()),
                      autoplay: !0,
                      loop: !0,
                      ref: m,
                  })
                : s.jsx('div', { className: l(e, d, null == n ? void 0 : n.glow) }),
        });
export { n as D };
