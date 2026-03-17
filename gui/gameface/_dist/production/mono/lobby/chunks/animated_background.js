import { j as a, w as s } from './vendor.js';
import { e2 as e, g as i, e3 as n, aC as t, e4 as m } from './lib.js';
const o = 'AnimatedBackground_f47e334b',
    r = 'AnimatedBackground_rays_caf372e5',
    c = 'AnimatedBackground_sunShineCanvas_21aff824',
    h = 'AnimatedBackground_staticHighlight_4c4023e9',
    g = {
        width: 400,
        height: 400,
        frameCount: 50,
        chunk: { count: 2, rows: 5, columns: 5 },
        getChunkPath: m('R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_'),
    },
    d = e(g),
    u = ({ className: e }) =>
        a.jsx('div', {
            className: s(o, e),
            children: i.isHigh()
                ? a.jsxs(a.Fragment, {
                      children: [
                          a.jsx(n, {
                              onAnimationDone: t,
                              width: g.width,
                              height: g.height,
                              frameCount: g.frameCount,
                              getImageSource: d,
                              frameTime: 50,
                              className: c,
                          }),
                          a.jsx('div', { className: r }),
                      ],
                  })
                : a.jsx('div', { className: h }),
        });
export { u as A };
