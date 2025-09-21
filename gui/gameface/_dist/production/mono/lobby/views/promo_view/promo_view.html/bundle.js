import { r as e, p as s, j as a, m as t, q as o, s as r } from '../../../chunks/vendor.js';
import {
    i,
    at as n,
    _ as c,
    a3 as d,
    p as l,
    a8 as m,
    u as h,
    k as p,
    ah as _,
    ag as u,
    Y as f,
    E as g,
    aP as b,
    aQ as v,
    aR as y,
    A as j,
    C,
    B as x,
    J as A,
    af as N,
    P as E,
} from '../../../chunks/lib.js';
import { S as P } from '../../../chunks/spring_wrapper.js';
import { j as w, k as D } from '../../../chunks/sound.js';
const [S, T] = i()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
    ),
    k = 1920,
    W = 1080,
    B = k / W,
    H = { width: 300, height: 150 },
    L = { y: 0, opacity: 1 };
var U = ((e) => ((e.HEADER = 'header'), (e.SUBHEADER = 'subheader'), (e.BUTTON = 'button'), e))(U || {});
const $ = 1e3,
    M = {
        header: { from: { y: -10, opacity: 0 }, to: L, delay: $, duration: 500 },
        subheader: { from: { y: -10, opacity: 0 }, to: L, delay: 1150, duration: 500 },
        button: { from: { y: -10, opacity: 0 }, to: L, delay: 1450, duration: 1e3 },
    },
    O = 'ContainerAnimation_dc99b0bc',
    q = 'ContainerAnimation_content_9f9d6eae',
    z = 'ContainerAnimation_img_89f111a1',
    J = 'ContainerAnimation_videoLoop_906f1a50',
    Q = 'ContainerAnimation_frame_d123d03b',
    Y = 'ContainerAnimation_base__started_448f44b3',
    F = (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
    G = (e, s, a, t) => (a ? t.width / e : t.height / s),
    I = e.memo(function ({
        isStarted: r,
        scaleCover: i,
        screenWidth: d,
        screenHeight: l,
        scaleState: m,
        isCoverWidth: h,
        className: p,
    }) {
        const _ = e.useRef(null),
            [u, f] = s(() => ({ transform: `scale(${i})`, x: 0, y: 0, opacity: 1 }));
        return (
            e.useEffect(() => {
                r &&
                    f.start({
                        to: [
                            {
                                transform: `scale(${G(d, l, h, { width: l * B * 0.6, height: (d / B) * 0.6 })})`,
                                x: 0,
                                y: 0,
                                opacity: 1,
                                config: { duration: 800 },
                            },
                            {
                                transform: `scale(${G(d, l, h, H)})})`,
                                x: ((d / 2 - 200) / i) * m,
                                y: ((-l / 2 + 180) / i) * m,
                                opacity: 0,
                                config: { duration: 1e3 },
                            },
                        ],
                        config: { easing: F },
                    });
            }, [f, h, r, m, l, i, d]),
            e.useEffect(() => {
                const e = _.current;
                e && (r ? e.pause() : e.play());
            }, [r]),
            a.jsx('div', {
                className: t(O, r && Y, p),
                children: a.jsxs(o.div, {
                    className: q,
                    style: u,
                    children: [
                        n.isLow()
                            ? a.jsx('div', { className: z })
                            : a.jsx(c, {
                                  ref: _,
                                  src: R.videos.last_stand.promo_loop(),
                                  className: J,
                                  loop: !0,
                                  autoplay: !0,
                              }),
                        a.jsx('div', { className: Q }),
                    ],
                }),
            })
        );
    }),
    K = 'PromoApp_6e17783a',
    V = 'PromoApp_container_c21d069a',
    X = 'PromoApp_vignetteBg_3b32fdde',
    Z = 'PromoApp_header_72d498f',
    ee = 'PromoApp_base__started_a4fe4c39',
    se = 'PromoApp_subheader_5a122f8',
    ae = 'PromoApp_gradient_5d52cdb6',
    te = 'PromoApp_bottomContainer_8e2a2910',
    oe = 'PromoApp_topContainer_609c5a3b',
    re = 'PromoApp_btn_12a9cd9',
    ie = 'PromoApp_closeBtn_501b9d40',
    ne = R.strings.last_stand_lobby.promoWindow,
    ce = r(() => {
        const { model: s, controls: o } = T(),
            { startDate: r, endDate: i, regularArtefactsLength: n } = s.root.get(),
            [c, E] = e.useState(!1),
            S = d(),
            H = () => {
                E(!0);
            };
        (e.useEffect(() => {
            if (c) {
                l.sound(w);
                const e = setTimeout(o.close, 1800);
                return () => clearTimeout(e);
            }
        }, [o.close, c]),
            m(H),
            h(p.ENTER, H));
        const [L, $] = e.useState({ width: 0, height: 0, scaleCover: 1, isCoverWidth: !1 }),
            O = () => {
                const e = N('rem');
                $(
                    ((e, s) => {
                        let a = 1,
                            t = !1;
                        return (
                            e >= s * B ? ((a = e / k), (t = !0)) : s >= e / B && ((a = s / W), (t = !1)),
                            { width: e, height: s, scaleCover: a, isCoverWidth: t }
                        );
                    })(e.width, e.height),
                );
            };
        return (
            e.useEffect(() => {
                (l.sound(D), O(), _(O), u(O));
            }, []),
            a.jsxs('div', {
                className: t(K, c && ee),
                children: [
                    a.jsx(f, {
                        classNames: { base: ie },
                        caption: R.strings.last_stand_lobby.common.close(),
                        type: 'close',
                        side: 'right',
                        onClick: H,
                    }),
                    a.jsx('div', {
                        className: V,
                        style: { width: k * S, height: W * S, transform: `scale(${L.scaleCover})` },
                        children: a.jsx(I, {
                            isStarted: c,
                            scaleCover: L.scaleCover,
                            screenHeight: L.height,
                            screenWidth: L.width,
                            scaleState: S,
                            isCoverWidth: L.isCoverWidth,
                        }),
                    }),
                    a.jsx('div', { className: X }),
                    a.jsx('div', { className: ae }),
                    a.jsx(P, {
                        className: oe,
                        ...M[U.HEADER],
                        children: a.jsx('div', { className: Z, children: ne.header() }),
                    }),
                    a.jsx(P, {
                        className: oe,
                        ...M[U.SUBHEADER],
                        children: a.jsx(g, {
                            classMix: se,
                            text: ne.subheader(),
                            binding: {
                                dateRange: a.jsx(b, {
                                    start: r,
                                    end: i,
                                    rangeType: v.DateShort,
                                    rangeDividerType: y.DashDivider,
                                    isConvertedToLocal: !0,
                                }),
                                regularArtefactsLength: n,
                            },
                            alignContent: j.Center,
                            justifyContent: j.Center,
                        }),
                    }),
                    a.jsx(P, {
                        className: te,
                        ...M[U.BUTTON],
                        children: a.jsx('div', {
                            className: re,
                            children: a.jsx(C, {
                                type: x.primary,
                                size: A.medium,
                                onClick: H,
                                children: R.strings.last_stand_lobby.promoWindow.btn(),
                            }),
                        }),
                    }),
                ],
            })
        );
    });
E(a.jsx(S, { children: a.jsx(ce, {}) }));
