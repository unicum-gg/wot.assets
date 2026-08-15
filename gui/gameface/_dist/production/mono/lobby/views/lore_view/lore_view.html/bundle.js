import { w as e, j as s, f as a } from '../../../chunks/vendor.js';
import {
    i,
    r as o,
    u as r,
    k as t,
    a as l,
    C as n,
    I as c,
    F as m,
    B as d,
    b as h,
    U as p,
} from '../../../chunks/lib.js';
/* empty css                    */ const [g, _] = i('LoreViewProvider')(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
    ),
    j = 'App_5bde5e4d',
    u = 'App_content_31efa367',
    b = 'App_close_14a78384',
    x = 'App_title_45f5ed89',
    A = 'App_decor_e68c3755',
    f = 'App_decor__right_bee2311f',
    v = 'App_name_9b03b5da',
    N = 'App_body_63ef0de5',
    y = 'App_description_f316003b',
    C = o.resolve('strings'),
    k = e(function () {
        const { model: e, controls: i } = _(),
            { nodeId: o } = e.root.get();
        (r(t.ESCAPE, i.close), r(t.ENTER, i.close), r(t.SPACE, i.close));
        const h = l(
            { imageWidth: 720, imageHeight: 540, buttonSize: 'medium' },
            {
                medium: { imageWidth: 800, imageHeight: 600 },
                large: { imageWidth: 1200, imageHeight: 900, buttonSize: 'large' },
            },
        );
        return s.jsxs('div', {
            className: j,
            children: [
                s.jsx(n, { className: b, onClose: i.close }),
                s.jsxs('div', {
                    className: u,
                    children: [
                        s.jsxs('div', {
                            className: N,
                            children: [
                                s.jsx(c, {
                                    width: h.imageWidth,
                                    height: h.imageHeight,
                                    path: `R.images.journey_marathon.gui.maps.icons.journeyMarathon.lore_view.lore_images.${o}_${h.imageWidth}x${h.imageHeight}`,
                                }),
                                s.jsx(m, { path: `journey_marathon.lore.description.${o}`, className: y }),
                            ],
                        }),
                        s.jsxs('div', {
                            className: x,
                            children: [
                                s.jsx('div', { className: A }),
                                s.jsx(m, { path: `journey_marathon.lore.name.${o}`, className: v }),
                                s.jsx('div', { className: a(A, f) }),
                            ],
                        }),
                        s.jsx(d, {
                            onClick: i.close,
                            size: h.buttonSize,
                            children: C.readOrEmpty('journey_marathon.confirm'),
                        }),
                    ],
                }),
            ],
        });
    });
h(s.jsx(g, { children: s.jsx(p, { children: s.jsx(k, {}) }) }), { fullScreen: !0, immediateLayout: !1 });
