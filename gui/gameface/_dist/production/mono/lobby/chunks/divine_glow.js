import { j as s, J as l } from './vendor.js';
import { dl as o, cS as a } from './lib.js';
const i = 'DivineGlow_2b9c4670',
    e = 'DivineGlow_glow_fddce7f8',
    d = 'DivineGlow_glow__bg_a3df35d7',
    c = (s) => !!a.isHigh() && s,
    m = ({ className: a, classNames: m, playerRef: n, animated: r = !0 }) =>
        s.jsx('div', {
            className: l(i, a),
            children: c(r)
                ? s.jsx(o, {
                      className: l(e, null == m ? void 0 : m.glow),
                      src: String(R.videos.comp7.divine_glow()),
                      autoplay: !0,
                      loop: !0,
                      ref: n,
                  })
                : s.jsx('div', { className: l(e, d, null == m ? void 0 : m.glow) }),
        });
export { m as D };
