import { j as e, R as a, r as s } from '../../../chunks/vendor.js';
import {
    u as t,
    aS as o,
    m as i,
    p as n,
    E as r,
    A as l,
    i as c,
    d2 as d,
    G as m,
    aR as g,
    b as _,
    B as p,
    C as b,
    r as y,
    U as u,
} from '../../../chunks/lib.js';
import { e as h } from '../../../chunks/sound.js';
import { S as f } from '../../../chunks/spring_wrapper.js';
const I = { y: 0, opacity: 1 };
var x = ((e) => (
    (e.HEADER = 'header'),
    (e.BLOCK_1 = 'block1'),
    (e.TITLE_1 = 'title1'),
    (e.BLOCK_2 = 'block2'),
    (e.TITLE_2 = 'title2'),
    (e.BLOCK_3 = 'block3'),
    (e.TITLE_3 = 'title3'),
    (e.BUTTON = 'button'),
    e
))(x || {});
const j = 500,
    C = {
        header: { from: { y: -10, opacity: 0 }, to: I, delay: 0, duration: j },
        block1: { from: { y: 5, opacity: 0 }, to: I, delay: 400, duration: j },
        title1: { from: { y: -15, opacity: 0 }, to: I, delay: 400, duration: j },
        block2: { from: { y: 5, opacity: 0 }, to: I, delay: 600, duration: j },
        title2: { from: { y: -15, opacity: 0 }, to: I, delay: 600, duration: j },
        block3: { from: { y: 5, opacity: 0 }, to: I, delay: 800, duration: j },
        title3: { from: { y: -15, opacity: 0 }, to: I, delay: 800, duration: j },
        button: { from: { y: -10, opacity: 0 }, to: I, delay: 1200, duration: j },
    },
    k = 'InfoImage_dcfad64c';
function B({ image: a, imageBig: s }) {
    const { breakpoint: i } = t();
    return e.jsx('div', {
        className: k,
        style: ((e, a) => {
            let s = e;
            return (i.weight > o.medium.weight && (s = a), { backgroundImage: `url('${s}')` });
        })(a, s),
    });
}
const N = 'InfoBlock_f854eb14',
    A = 'InfoBlock_infoBlock_6c954df0',
    v = 'InfoBlock_title_2476dc97',
    E = 'InfoBlock_subTitle_a648caba',
    M = a.memo(function ({ items: a, canceledAnim: t = !1 }) {
        return e.jsx('div', {
            className: N,
            children: i(a, (a, o) =>
                s.createElement(
                    f,
                    { isCanceled: t, ...C[`block${o + 1}`], onStart: () => n.sound(h), key: `block_${o}` },
                    e.jsxs('div', {
                        className: A,
                        children: [
                            e.jsx(B, { image: a.image, imageBig: a.imageBig }),
                            e.jsxs(f, {
                                isCanceled: t,
                                ...C[`title${o + 1}`],
                                children: [
                                    e.jsx('div', { className: v, children: a.header }),
                                    e.jsx(r, {
                                        classMix: E,
                                        text: a.text,
                                        alignContent: l.Center,
                                        justifyContent: l.Center,
                                        binding: a.binding,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ),
            ),
        });
    }),
    [T, z] = c()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({ onClose: e.createCallbackNoArgs('onClose') }),
    ),
    w = 'MetaIntroApp_f24aa649',
    L = 'MetaIntroApp_background_47115184',
    S = 'MetaIntroApp_container_1d43a669',
    O = 'MetaIntroApp_content_7027a85a',
    $ = 'MetaIntroApp_header_b706abdc',
    K = 'MetaIntroApp_bottomContainer_341b7343',
    U = 'MetaIntroApp_topContainer_9352c5d0',
    D = 'MetaIntroApp_btn_4fa2f453',
    H = 'MetaIntroApp_closeBtn_f6844130',
    G = [
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
    P = () => {
        const { controls: a } = z(),
            [t, o] = s.useState(!1);
        (d(a.onClose), m(g.ENTER, a.onClose), m(g.SPACE, a.onClose));
        const i = _(
            { size: p.sizes.extraSmall },
            { medium: { size: p.sizes.small }, large: { size: p.sizes.medium }, extraLarge: { size: p.sizes.large } },
        );
        return e.jsxs('div', {
            className: w,
            onClick: () => o(!0),
            children: [
                e.jsx(b, { className: H, onClose: a.onClose }),
                e.jsx('div', { className: L }),
                e.jsx(f, {
                    className: U,
                    isCanceled: t,
                    ...C[x.HEADER],
                    children: e.jsx('div', { className: $, children: R.strings.last_stand_lobby.metaIntro.title() }),
                }),
                e.jsx('div', {
                    className: S,
                    children: e.jsx('div', { className: O, children: e.jsx(M, { canceledAnim: t, items: G }) }),
                }),
                e.jsx(f, {
                    isCanceled: t,
                    className: K,
                    ...C[x.BUTTON],
                    children: e.jsx('div', {
                        className: D,
                        children: e.jsx(p, {
                            theme: p.themes.primary,
                            size: i.size,
                            onClick: a.onClose,
                            children: R.strings.last_stand_lobby.common.yes(),
                        }),
                    }),
                }),
            ],
        });
    };
y(e.jsx(u, { children: e.jsx(T, { children: e.jsx(P, {}) }) }));
