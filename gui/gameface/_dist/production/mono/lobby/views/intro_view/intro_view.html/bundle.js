import { w as s, j as e, R as a } from '../../../chunks/vendor.js';
import {
    i as o,
    n,
    r as l,
    u as i,
    k as r,
    a as c,
    B as t,
    C as m,
    F as p,
    b as d,
    U as _,
} from '../../../chunks/lib.js';
/* empty css                    */ const [j, u] = o('IntroViewProvider')(n, ({ externalModel: s }) => ({
        close: s.createCallbackNoArgs('onClose'),
    })),
    f = 'App_f753008c',
    h = 'App_close_c79d8d0e',
    g = 'App_title_ffd16d31',
    x = 'App_content_6d5ac65d',
    A = 'App_infoBlock_59a9c25',
    N = 'App_spacer_74d68a9',
    k = 'App_infoBlockImage_29a8a6d7',
    b = 'App_infoBlockTitle_253e098e',
    v = 'App_infoBlockSubtitle_17db16dc',
    y = 'App_logo_747cfe53',
    C = 'App_button_36cdaf87',
    B = l.resolve('strings'),
    E = l.resolve('images'),
    S = ['first', 'second', 'third'],
    z = s(function () {
        const { controls: s } = u();
        (i(r.ESCAPE, s.close), i(r.ENTER, s.close), i(r.SPACE, s.close));
        const o = c(
            { buttonSize: t.sizes.small, infoImage: 'small' },
            { large: { buttonSize: t.sizes.medium, infoImage: 'large' } },
        );
        return e.jsxs('div', {
            className: f,
            children: [
                e.jsx(m, { className: h, onClose: s.close }),
                e.jsx(p, { path: 'journey_marathon.longNameUpperCase', className: g }),
                e.jsx('div', {
                    className: x,
                    children: S.map((s, n) => {
                        const l = `R.images.journey_marathon.gui.maps.icons.journeyMarathon.intro_view.info_${s}_${o.infoImage}`;
                        return e.jsxs(
                            a.Fragment,
                            {
                                children: [
                                    0 !== n && e.jsx('div', { className: N }),
                                    e.jsxs('div', {
                                        className: A,
                                        children: [
                                            e.jsx('div', {
                                                className: k,
                                                style: { backgroundImage: `url(${E.readOrEmpty(l)})` },
                                            }),
                                            e.jsx(p, {
                                                path: `journey_marathon.introView.infoBlock.${s}.title`,
                                                className: b,
                                            }),
                                            e.jsx(p, {
                                                path: `journey_marathon.introView.infoBlock.${s}.subtitle`,
                                                className: v,
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            s,
                        );
                    }),
                }),
                e.jsx('div', { className: y }),
                e.jsx(t, {
                    onClick: s.close,
                    size: o.buttonSize,
                    className: C,
                    children: B.readOrEmpty('journey_marathon.confirm'),
                }),
            ],
        });
    });
d(e.jsx(j, { children: e.jsx(_, { children: e.jsx(z, {}) }) }), { fullScreen: !0, immediateLayout: !1 });
