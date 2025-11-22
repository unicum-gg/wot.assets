import { j as a, w as s } from './vendor.js';
import { dy as e, cU as i, dz as n, n as t, dA as m } from './lib.js';
const c = 'AnimatedBackground_f47e334b',
    o = 'AnimatedBackground_rays_caf372e5',
    r = 'AnimatedBackground_sunShineCanvas_21aff824',
    d = 'AnimatedBackground_staticHighlight_4c4023e9',
    h = {
        width: 400,
        height: 400,
        frameCount: 50,
        chunk: { count: 2, rows: 5, columns: 5 },
        getChunkPath: m('R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_'),
    },
    g = e(h),
    u = ({ className: e }) =>
        a.jsx('div', {
            className: s(c, e),
            children: i.isHigh()
                ? a.jsxs(a.Fragment, {
                      children: [
                          a.jsx(n, {
                              onAnimationDone: t,
                              width: h.width,
                              height: h.height,
                              frameCount: h.frameCount,
                              getImageSource: g,
                              frameTime: 50,
                              className: r,
                          }),
                          a.jsx('div', { className: o }),
                      ],
                  })
                : a.jsx('div', { className: d }),
        });
export { u as A };
