import { j as t, r as s } from '../../../chunks/vendor.js';
import {
    s as e,
    X as a,
    m as o,
    p as i,
    E as n,
    A as r,
    i as l,
    a8 as c,
    u as d,
    k as m,
    Y as g,
    C as p,
    B as _,
    J as b,
    P as y,
} from '../../../chunks/lib.js';
import { S as u } from '../../../chunks/spring_wrapper.js';
import { i as h } from '../../../chunks/sound.js';
import { T as f } from '../../../chunks/text.module.js';
import { T as I } from '../../../chunks/text_simple.js';
const x = { y: 0, opacity: 1 };
var j = ((t) => (
    (t.HEADER = 'header'),
    (t.BLOCK_1 = 'block1'),
    (t.TITLE_1 = 'title1'),
    (t.BLOCK_2 = 'block2'),
    (t.TITLE_2 = 'title2'),
    (t.BLOCK_3 = 'block3'),
    (t.TITLE_3 = 'title3'),
    (t.BUTTON = 'button'),
    t
))(j || {});
const k = 500,
    C = {
        header: { from: { y: -10, opacity: 0 }, to: x, delay: 0, duration: k },
        block1: { from: { y: 5, opacity: 0 }, to: x, delay: 400, duration: k },
        title1: { from: { y: -15, opacity: 0 }, to: x, delay: 400, duration: k },
        block2: { from: { y: 5, opacity: 0 }, to: x, delay: 600, duration: k },
        title2: { from: { y: -15, opacity: 0 }, to: x, delay: 600, duration: k },
        block3: { from: { y: 5, opacity: 0 }, to: x, delay: 800, duration: k },
        title3: { from: { y: -15, opacity: 0 }, to: x, delay: 800, duration: k },
        button: { from: { y: -10, opacity: 0 }, to: x, delay: 1200, duration: k },
    },
    B = 'InfoImage_dcfad64c',
    N = ({ image: s, imageBig: o }) => {
        const { breakpoint: i } = e();
        return t.jsx('div', {
            className: B,
            style: ((t, s) => {
                let e = t;
                return (i.weight > a.medium.weight && (e = s), { backgroundImage: `url('${e}')` });
            })(s, o),
        });
    },
    A = 'InfoBlock_c1dba0f8',
    T = 'InfoBlock_infoBlock_6c954df0',
    E = 'InfoBlock_title_21748742',
    v = 'InfoBlock_subTitle_4f8757df',
    M = ({ items: e, canceledAnim: a = !1 }) =>
        t.jsx('div', {
            className: A,
            children: o(e, (e, o) =>
                s.createElement(
                    u,
                    { isCanceled: a, ...C[`block${o + 1}`], onStart: () => i.sound(h), key: `block_${o}` },
                    t.jsxs('div', {
                        className: T,
                        children: [
                            t.jsx(N, { image: e.image, imageBig: e.imageBig }),
                            t.jsxs(u, {
                                isCanceled: a,
                                ...C[`title${o + 1}`],
                                children: [
                                    t.jsx('div', { className: E, children: e.header }),
                                    t.jsx(n, {
                                        classMix: v,
                                        text: e.text,
                                        alignContent: r.Center,
                                        justifyContent: r.Center,
                                        binding: e.binding,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ),
            ),
        }),
    [w, L] = l()(
        ({ observableModel: t }) => ({ root: t.object() }),
        ({ externalModel: t }) => ({ onClose: t.createCallbackNoArgs('onClose') }),
    ),
    O = 'MetaIntroApp_b72c7723',
    S = 'MetaIntroApp_header_7bf5bfe7',
    $ = 'MetaIntroApp_content_a7b52449',
    H = 'MetaIntroApp_bottomContainer_341b7343',
    K = 'MetaIntroApp_topContainer_9352c5d0',
    D = 'MetaIntroApp_btn_80e916b1',
    P = 'MetaIntroApp_closeBtn_9ab412a0',
    U = () => {
        const { controls: e } = L(),
            a = [
                {
                    header: R.strings.last_stand_lobby.metaIntro.header.fight(),
                    text: R.strings.last_stand_lobby.metaIntro.description.fight(),
                    image: R.images.last_stand.gui.maps.icons.metaIntro.fight(),
                    imageBig: R.images.last_stand.gui.maps.icons.metaIntro.big.fight(),
                },
                {
                    header: R.strings.last_stand_lobby.metaIntro.header.progress(),
                    text: R.strings.last_stand_lobby.metaIntro.description.progress(),
                    image: R.images.last_stand.gui.maps.icons.metaIntro.progress(),
                    imageBig: R.images.last_stand.gui.maps.icons.metaIntro.big.progress(),
                },
                {
                    header: R.strings.last_stand_lobby.metaIntro.header.reward(),
                    text: R.strings.last_stand_lobby.metaIntro.description.reward(),
                    image: R.images.last_stand.gui.maps.icons.metaIntro.reward(),
                    imageBig: R.images.last_stand.gui.maps.icons.metaIntro.big.reward(),
                },
            ],
            [o, i] = s.useState(!1);
        return (
            c(e.onClose),
            d(m.ENTER, e.onClose),
            d(m.SPACE, e.onClose),
            t.jsxs('div', {
                className: O,
                onClick: () => i(!0),
                children: [
                    t.jsx(g, {
                        classNames: { base: P },
                        caption: R.strings.last_stand_lobby.common.close(),
                        type: 'close',
                        side: 'right',
                        onClick: e.onClose,
                    }),
                    t.jsx(u, {
                        className: K,
                        isCanceled: o,
                        ...C[j.HEADER],
                        children: t.jsx(I, {
                            text: R.strings.last_stand_lobby.metaIntro.title(),
                            className: S,
                            type: f.Heading,
                            shadow: !0,
                        }),
                    }),
                    t.jsx('div', { className: $, children: t.jsx(M, { canceledAnim: o, items: a }) }),
                    t.jsx(u, {
                        isCanceled: o,
                        className: H,
                        ...C[j.BUTTON],
                        children: t.jsx('div', {
                            className: D,
                            children: t.jsx(p, {
                                type: _.primary,
                                size: b.medium,
                                onClick: e.onClose,
                                children: R.strings.last_stand_lobby.common.yes(),
                            }),
                        }),
                    }),
                ],
            })
        );
    };
y(t.jsx(w, { children: t.jsx(U, {}) }));
