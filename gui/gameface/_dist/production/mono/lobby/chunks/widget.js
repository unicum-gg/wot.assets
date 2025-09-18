import { L as e, r as s, j as a, f as t } from './vendor.js';
import {
    O as n,
    b$ as o,
    c0 as r,
    i,
    X as d,
    A as l,
    d2 as c,
    cE as _,
    d3 as p,
    d4 as u,
    d5 as m,
    d6 as f,
    d7 as g,
    d8 as b,
    bF as T,
    cq as h,
    d9 as v,
} from './lib.js';
var x = ((e) => ((e.News = 'news'), (e.ShopPromo = 'shopPromo'), (e.None = 'none'), e))(x || {});
const N = {
        getter: o({
            type: x.News,
            description:
                'Watch very interesting video, with very long, very very interesting and meaningful description!',
            isVideo: !0,
            image: 'https://pie-webbrg-cdn-stg.wgcdn.co/dcont/fb/image/whats_new_475x230_2.png',
        }),
        controls: () => n(r('onClick', 'onClose')),
    },
    [w, y] = i('TeaserModel')(
        ({ observableModel: e }) =>
            e.primitives(['type', 'postCounter', 'description', 'text', 'isVideo', 'finishTime', 'image']),
        ({ externalModel: e }) => ({
            onClick: e.createCallbackNoArgs('onClick'),
            onClose: e.createCallbackNoArgs('onClose'),
        }),
    ),
    C = {
        imageWrapper: 'Teaser_imageWrapper_f2e16467',
        base: 'Teaser_f2c23afe',
        base__newsType: 'Teaser_base__newsType_9c6e19d3',
        base__shopPromoType: 'Teaser_base__shopPromoType_7da9b1fe',
        base__video: 'Teaser_base__video_3d4fdb7e',
        contentWrapper: 'Teaser_contentWrapper_b44f0d64',
        image: 'Teaser_image_41628c29',
        title: 'Teaser_title_f8c387e3',
        counter: 'Teaser_counter_6afc9955',
        closeButton: 'Teaser_closeButton_c46a88df',
        text: 'Teaser_text_8e0a588c',
        bottomContent: 'Teaser_bottomContent_eb7878d6',
        description: 'Teaser_description_bda296e5',
        extendedText: 'Teaser_extendedText_286b5b73',
        countdown: 'Teaser_countdown_40e45fc1',
        fadeIn: 'Teaser_fadeIn_3d4fdb7e',
        fadeInThreeQuarters: 'Teaser_fadeInThreeQuarters_3d4fdb7e',
        fadeInHalf: 'Teaser_fadeInHalf_3d4fdb7e',
        fadeOut: 'Teaser_fadeOut_3d4fdb7e',
        fadeInWithScale: 'Teaser_fadeInWithScale_3d4fdb7e',
        slideUp: 'Teaser_slideUp_3d4fdb7e',
        scale: 'Teaser_scale_3d4fdb7e',
        raysAppearance: 'Teaser_raysAppearance_3d4fdb7e',
        rotate: 'Teaser_rotate_3d4fdb7e',
        'reverse-rotate': 'Teaser_reverse-rotate_3d4fdb7e',
        glowAppearance: 'Teaser_glowAppearance_3d4fdb7e',
        highlightAppearance: 'Teaser_highlightAppearance_3d4fdb7e',
        blink: 'Teaser_blink_3d4fdb7e',
        slideUpIn: 'Teaser_slideUpIn_3d4fdb7e',
    },
    j = 'Teaser:Base',
    k = e(function ({ className: e, classNames: n }) {
        const { model: o, controls: r } = y(),
            i = o.type.get() || x.News,
            N = o.postCounter.get(),
            w = o.text.get(),
            k = o.description.get(),
            I = o.finishTime.get(),
            W = o.isVideo.get(),
            A = o.image.get(),
            E = d(),
            B = l.resolve('strings');
        const M = s.useCallback(
                (e) => {
                    (e.stopPropagation(), r.onClose());
                },
                [r],
            ),
            [S, P] = s.useState(null);
        s.useLayoutEffect(() => {
            let e;
            const s = c(_(I || 0), p());
            if (!I || s <= 0) return void P(null);
            const a = Math.floor(v.seconds(s)),
                t = u(_(I), m(1)) ? f.Extended : f.Long;
            return (
                P({ duration: a, style: t }),
                t === f.Extended && (e = setTimeout(() => P((e) => ({ ...e, style: f.Long })), c(_(a + 1), m(1)))),
                () => {
                    e && (clearTimeout(e), (e = void 0));
                }
            );
        }, [I]);
        const [$, L] = s.useState(null),
            [O, U] = s.useState(!1);
        return (
            s.useEffect(() => {
                const e = new Image();
                return (
                    (e.src = A),
                    (e.onload = () => {
                        (L({ path: A, height: e.height, width: e.width }), U(!0));
                    }),
                    (e.onerror = () => {
                        U(!0);
                    }),
                    () => {
                        ((e.src = ''), L(null));
                    }
                );
            }, [A]),
            O
                ? a.jsx('div', {
                      className: t(C.base, C[`base__${i}Type`], W && C.base__video, e),
                      onClick: function (e) {
                          (E.play('click', { target: j, original: e }), r.onClick());
                      },
                      onMouseEnter: function (e) {
                          E.play('mouse-enter', { target: j, original: e });
                      },
                      children: a.jsxs('div', {
                          className: t(C.contentWrapper, null == n ? void 0 : n.contentWrapper),
                          children: [
                              a.jsx('div', {
                                  className: t(C.imageWrapper, null == n ? void 0 : n.imageWrapper),
                                  children:
                                      $ &&
                                      a.jsx('div', {
                                          className: t(C.image, null == n ? void 0 : n.image),
                                          style: {
                                              backgroundImage: `url(${$.path})`,
                                              height: `${$.height}rem`,
                                              width: `${$.width}rem`,
                                          },
                                      }),
                              }),
                              a.jsxs('div', {
                                  className: t(C.title, null == n ? void 0 : n.title),
                                  children: [
                                      B.readOrEmpty('menu.promo.teaser.title'),
                                      Boolean(N) &&
                                          N > 0 &&
                                          a.jsx(g, {
                                              className: t(C.counter, null == n ? void 0 : n.counter),
                                              value: N,
                                              size: 'small',
                                          }),
                                  ],
                              }),
                              a.jsx(b, {
                                  type: 'close',
                                  side: 'right',
                                  classNames: { base: t(C.closeButton, null == n ? void 0 : n.closeButton) },
                                  onClick: M,
                                  caption: '',
                              }),
                              w && a.jsx('div', { className: t(C.text, null == n ? void 0 : n.text), children: w }),
                              (k || S) &&
                                  a.jsxs('div', {
                                      className: C.bottomContent,
                                      children: [
                                          k &&
                                              a.jsx('div', {
                                                  className: t(C.description, null == n ? void 0 : n.description),
                                                  children: a.jsx(T, {
                                                      classMix: C.extendedText,
                                                      text: k,
                                                      isTruncationAvailable: !0,
                                                  }),
                                              }),
                                          S &&
                                              a.jsx(h, {
                                                  className: t(C.countdown, null == n ? void 0 : n.countdown),
                                                  ...S,
                                              }),
                                      ],
                                  }),
                          ],
                      }),
                  })
                : null
        );
    });
function I({ className: e, classNames: s, ...t }) {
    return a.jsx(w, { ...t, mode: 'real', mocks: N, children: a.jsx(k, { className: e, classNames: s }) });
}
export { I as default };
