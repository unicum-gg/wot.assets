import { v as e, r as s, j as t, f as a } from './vendor.js';
import {
    aG as o,
    ca as n,
    cb as i,
    i as r,
    o as l,
    r as c,
    de as d,
    W as m,
    aa as p,
    df as u,
    ac as g,
    dg as _,
    dh as v,
    di as h,
    cj as x,
    dj as b,
    dk as T,
} from './lib.js';
var f = ((e) => ((e.News = 'news'), (e.ShopPromo = 'shopPromo'), (e.None = 'none'), e))(f || {});
const N = {
        getter: n({
            type: f.News,
            description:
                'Watch very interesting video, with very long, very very interesting and meaningful description!',
            isVideo: !0,
            image: 'https://pie-webbrg-cdn-stg.wgcdn.co/dcont/fb/image/whats_new_475x230_2.png',
        }),
        controls: () => o(i('onClick', 'onClose')),
    },
    [j, w] = r('TeaserModel')(
        ({ observableModel: e }) =>
            e.primitives(['type', 'postCounter', 'description', 'text', 'isVideo', 'finishTime', 'image']),
        ({ externalModel: e }) => ({
            onClick: e.createCallbackNoArgs('onClick'),
            onClose: e.createCallbackNoArgs('onClose'),
        }),
    ),
    y = {
        imageWrapper: 'Teaser_imageWrapper_901f1116',
        vignette: 'Teaser_vignette_32737740',
        base: 'Teaser_a2a96284',
        base__video: 'Teaser_base__video_3d4fdb7e',
        contentWrapper: 'Teaser_contentWrapper_b44f0d64',
        image: 'Teaser_image_41628c29',
        base__newsType: 'Teaser_base__newsType_3d4fdb7e',
        base__shopPromoType: 'Teaser_base__shopPromoType_3d4fdb7e',
        title: 'Teaser_title_f8c387e3',
        counter: 'Teaser_counter_6afc9955',
        closeButton: 'Teaser_closeButton_c46a88df',
        text: 'Teaser_text_8e0a588c',
        bottomContent: 'Teaser_bottomContent_eb7878d6',
        description: 'Teaser_description_bda296e5',
        extendedText: 'Teaser_extendedText_286b5b73',
        countdown: 'Teaser_countdown_40e45fc1',
    },
    C = 'Teaser:Base',
    k = e(function ({ className: e, classNames: o }) {
        const { model: n, controls: i } = w(),
            r = n.type.get() || f.News,
            N = n.postCounter.get(),
            j = n.text.get(),
            k = n.description.get(),
            W = n.finishTime.get(),
            B = n.isVideo.get(),
            E = n.image.get(),
            M = l(),
            P = c.resolve('strings');
        const S = s.useCallback(
                (e) => {
                    (e.stopPropagation(), i.onClose());
                },
                [i],
            ),
            [$, A] = s.useState(null);
        s.useLayoutEffect(() => {
            let e;
            const s = d(m(W || 0), p());
            if (!W || s <= 0) return void A(null);
            const t = Math.floor(T.seconds(s)),
                a = u(m(W), g(1)) ? _.Extended : _.Long;
            return (
                A({ duration: t, style: a }),
                a === _.Extended && (e = setTimeout(() => A((e) => ({ ...e, style: _.Long })), d(m(t + 1), g(1)))),
                () => {
                    e && (clearTimeout(e), (e = void 0));
                }
            );
        }, [W]);
        const [L, V] = s.useState(null),
            [I, z] = s.useState(!1);
        return (
            s.useEffect(() => {
                const e = new Image();
                return (
                    (e.src = E),
                    (e.onload = () => {
                        (V({ path: E, height: e.height, width: e.width }), z(!0));
                    }),
                    (e.onerror = () => {
                        z(!0);
                    }),
                    () => {
                        ((e.src = ''), V(null));
                    }
                );
            }, [E]),
            I
                ? t.jsxs('div', {
                      className: a(y.base, y[`base__${r}Type`], B && y.base__video, e),
                      onClick: function (e) {
                          (M.play('click', { target: C, original: e }), i.onClick());
                      },
                      onMouseEnter: function (e) {
                          M.play('mouse-enter', { target: C, original: e });
                      },
                      children: [
                          t.jsx('div', {
                              className: a(y.contentWrapper, null == o ? void 0 : o.contentWrapper),
                              children: t.jsx('div', {
                                  className: a(y.imageWrapper, null == o ? void 0 : o.imageWrapper),
                                  children:
                                      L &&
                                      t.jsx('div', {
                                          className: a(y.image, null == o ? void 0 : o.image),
                                          style: {
                                              backgroundImage: `url(${L.path})`,
                                              height: `${L.height}rem`,
                                              width: `${L.width}rem`,
                                          },
                                      }),
                              }),
                          }),
                          t.jsx('div', { className: a(y.vignette, null == o ? void 0 : o.vignette) }),
                          t.jsxs('div', {
                              className: a(y.contentWrapper, null == o ? void 0 : o.contentWrapper),
                              children: [
                                  t.jsxs('div', {
                                      className: a(y.title, null == o ? void 0 : o.title),
                                      children: [
                                          P.readOrEmpty('menu.promo.teaser.title'),
                                          Boolean(N) &&
                                              N > 0 &&
                                              t.jsx(v, {
                                                  className: a(y.counter, null == o ? void 0 : o.counter),
                                                  value: N,
                                                  size: 'small',
                                              }),
                                      ],
                                  }),
                                  t.jsx(h, {
                                      type: 'close',
                                      side: 'right',
                                      classNames: { base: a(y.closeButton, null == o ? void 0 : o.closeButton) },
                                      onClick: S,
                                      caption: '',
                                  }),
                                  j && t.jsx('div', { className: a(y.text, null == o ? void 0 : o.text), children: j }),
                                  (k || $) &&
                                      t.jsxs('div', {
                                          className: y.bottomContent,
                                          children: [
                                              k &&
                                                  t.jsx('div', {
                                                      className: a(y.description, null == o ? void 0 : o.description),
                                                      children: t.jsx(x, {
                                                          classMix: y.extendedText,
                                                          text: k,
                                                          isTruncationAvailable: !0,
                                                      }),
                                                  }),
                                              $ &&
                                                  t.jsx(b, {
                                                      className: a(y.countdown, null == o ? void 0 : o.countdown),
                                                      ...$,
                                                  }),
                                          ],
                                      }),
                              ],
                          }),
                      ],
                  })
                : null
        );
    });
function W({ className: e, classNames: s, ...a }) {
    return t.jsx(j, { ...a, mode: 'real', mocks: N, children: t.jsx(k, { className: e, classNames: s }) });
}
export { W as default };
