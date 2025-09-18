import { x as e, r as s, j as t, f as a } from './vendor.js';
import {
    aE as o,
    c0 as n,
    c1 as i,
    i as r,
    q as l,
    r as c,
    d2 as d,
    l as m,
    N as u,
    d3 as p,
    P as _,
    d4 as g,
    d5 as h,
    d6 as v,
    c9 as x,
    d7 as b,
    d8 as T,
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
    [w, y] = r('TeaserModel')(
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
    },
    j = 'Teaser:Base',
    k = e(function ({ className: e, classNames: o }) {
        const { model: n, controls: i } = y(),
            r = n.type.get() || f.News,
            N = n.postCounter.get(),
            w = n.text.get(),
            k = n.description.get(),
            W = n.finishTime.get(),
            E = n.isVideo.get(),
            B = n.image.get(),
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
            const s = d(m(W || 0), u());
            if (!W || s <= 0) return void A(null);
            const t = Math.floor(T.seconds(s)),
                a = p(m(W), _(1)) ? g.Extended : g.Long;
            return (
                A({ duration: t, style: a }),
                a === g.Extended && (e = setTimeout(() => A((e) => ({ ...e, style: g.Long })), d(m(t + 1), _(1)))),
                () => {
                    e && (clearTimeout(e), (e = void 0));
                }
            );
        }, [W]);
        const [L, V] = s.useState(null),
            [I, q] = s.useState(!1);
        return (
            s.useEffect(() => {
                const e = new Image();
                return (
                    (e.src = B),
                    (e.onload = () => {
                        (V({ path: B, height: e.height, width: e.width }), q(!0));
                    }),
                    (e.onerror = () => {
                        q(!0);
                    }),
                    () => {
                        ((e.src = ''), V(null));
                    }
                );
            }, [B]),
            I
                ? t.jsx('div', {
                      className: a(C.base, C[`base__${r}Type`], E && C.base__video, e),
                      onClick: function (e) {
                          (M.play('click', { target: j, original: e }), i.onClick());
                      },
                      onMouseEnter: function (e) {
                          M.play('mouse-enter', { target: j, original: e });
                      },
                      children: t.jsxs('div', {
                          className: a(C.contentWrapper, null == o ? void 0 : o.contentWrapper),
                          children: [
                              t.jsx('div', {
                                  className: a(C.imageWrapper, null == o ? void 0 : o.imageWrapper),
                                  children:
                                      L &&
                                      t.jsx('div', {
                                          className: a(C.image, null == o ? void 0 : o.image),
                                          style: {
                                              backgroundImage: `url(${L.path})`,
                                              height: `${L.height}rem`,
                                              width: `${L.width}rem`,
                                          },
                                      }),
                              }),
                              t.jsxs('div', {
                                  className: a(C.title, null == o ? void 0 : o.title),
                                  children: [
                                      P.readOrEmpty('menu.promo.teaser.title'),
                                      Boolean(N) &&
                                          N > 0 &&
                                          t.jsx(h, {
                                              className: a(C.counter, null == o ? void 0 : o.counter),
                                              value: N,
                                              size: 'small',
                                          }),
                                  ],
                              }),
                              t.jsx(v, {
                                  type: 'close',
                                  side: 'right',
                                  classNames: { base: a(C.closeButton, null == o ? void 0 : o.closeButton) },
                                  onClick: S,
                                  caption: '',
                              }),
                              w && t.jsx('div', { className: a(C.text, null == o ? void 0 : o.text), children: w }),
                              (k || $) &&
                                  t.jsxs('div', {
                                      className: C.bottomContent,
                                      children: [
                                          k &&
                                              t.jsx('div', {
                                                  className: a(C.description, null == o ? void 0 : o.description),
                                                  children: t.jsx(x, {
                                                      classMix: C.extendedText,
                                                      text: k,
                                                      isTruncationAvailable: !0,
                                                  }),
                                              }),
                                          $ &&
                                              t.jsx(b, {
                                                  className: a(C.countdown, null == o ? void 0 : o.countdown),
                                                  ...$,
                                              }),
                                      ],
                                  }),
                          ],
                      }),
                  })
                : null
        );
    });
function W({ className: e, classNames: s, ...a }) {
    return t.jsx(w, { ...a, mode: 'real', mocks: N, children: t.jsx(k, { className: e, classNames: s }) });
}
export { W as default };
