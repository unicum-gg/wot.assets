import { j as s, A as e, x as a, r as t, y as o, z as l } from '../../../chunks/vendor.js';
import { cY as r, i as n, F as c, p, r as i } from '../../../chunks/lib.js';
import { I as d } from '../../../chunks/consts.js';
/* empty css                     */ const _ = 'SmokeParticles_1ffc5542',
    m = ({ playerRef: a, className: t, ...o }) =>
        s.jsx(r, {
            className: e(_, t),
            src: String(R.videos.comp7.particles_280x170()),
            ref: a,
            autoplay: !0,
            loop: !0,
            preload: 'auto',
            ...o,
        }),
    [x, u] = n()(
        ({ observableModel: s }) => ({ root: s.object() }),
        ({ externalModel: s }) => ({ openTournaments: s.createCallbackNoArgs('onOpenTournaments') }),
    ),
    j = 'App_35a80190',
    f = 'App_layer_189ce663',
    g = 'App_layer__logo_9d5f5d05',
    h = 'App_base__extended_0',
    y = 'App_layer__scene_15826d42',
    A = 'App_layer__shadow_97041c3b',
    v = 'App_particles_96ffdf4d',
    b = 'App_content_9c70423d',
    N = 'App_heading_9b9f1413',
    k = 'App_text_db0469e',
    M = a(() => {
        const { model: a, controls: r } = u(),
            n = t.useRef(null),
            { state: i, isExtended: _ } = a.root.get(),
            x = o(d);
        return s.jsxs(l.div, {
            style: x,
            className: e(j, _ && h),
            onClick: () => {
                (p.click(), r.openTournaments());
            },
            onMouseEnter: () => {
                var s;
                (p.highlight(), null == (s = n.current) || s.play());
            },
            onMouseLeave: () => {
                var s;
                null == (s = n.current) || s.stop();
            },
            children: [
                s.jsx('div', { className: e(f, A) }),
                s.jsx('div', { className: e(f, g) }),
                s.jsx('div', { className: e(f, y) }),
                s.jsx(m, { playerRef: n, autoplay: !1, className: v }),
                s.jsxs('div', {
                    className: b,
                    children: [
                        s.jsx(c, { text: `${R.strings.comp7_ext.tournamentsWidget.heading()}`, classMix: N }),
                        s.jsx(c, { text: `${R.strings.comp7_ext.tournamentsWidget.text.$dyn(i)}`, classMix: k }),
                    ],
                }),
            ],
        });
    });
i(s.jsx(x, { children: s.jsx(M, {}) }));
