import { E as e, r as s, j as t, f as a } from './vendor.js';
import {
    b as o,
    dl as n,
    dm as r,
    a as i,
    aT as c,
    o as l,
    dn as d,
    cr as m,
    cs as p,
    dp as _,
    dq as g,
    dk as u,
    dr as b,
    dd as h,
    ds as x,
    dj as T,
    dt as v,
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
        controls: () => o(r('onClick', 'onClose')),
    },
    [j, w] = i('TeaserModel')(
        ({ observableModel: e }) =>
            e.primitives(['type', 'postCounter', 'description', 'text', 'isVideo', 'finishTime', 'image']),
        ({ externalModel: e }) => ({
            onClick: e.createCallbackNoArgs('onClick'),
            onClose: e.createCallbackNoArgs('onClose'),
        }),
    ),
    y = {
        root: 'Teaser_root_3d4fdb7e',
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
        const { model: n, controls: r } = w(),
            i = n.type.get() || f.News,
            N = n.postCounter.get(),
            j = n.text.get(),
            k = n.description.get(),
            W = n.finishTime.get(),
            E = n.isVideo.get(),
            B = n.image.get(),
            M = c(),
            P = l.resolve('strings');
        const S = s.useCallback(
                (e) => {
                    (e.stopPropagation(), r.onClose());
                },
                [r],
            ),
            [$, A] = s.useState(null);
        s.useLayoutEffect(() => {
            let e;
            const s = d(m(W || 0), p());
            if (!W || s <= 0) return void A(null);
            const t = Math.floor(v.seconds(s)),
                a = _(m(W), g(1)) ? u.Extended : u.Long;
            return (
                A({ duration: t, style: a }),
                a === u.Extended && (e = setTimeout(() => A((e) => ({ ...e, style: u.Long })), d(m(t + 1), g(1)))),
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
                ? t.jsxs('div', {
                      className: a(y.base, y[`base__${i}Type`], E && y.base__video, e),
                      onClick: function (e) {
                          (M.play('click', { target: C, original: e }), r.onClick());
                      },
                      onMouseEnter: function (e) {
                          M.play('mouse-enter', { target: C, original: e });
                      },
                      children: [
                          t.jsx('div', {
                              className: a(y.contentWrapper, o?.contentWrapper),
                              children: t.jsx('div', {
                                  className: a(y.imageWrapper, o?.imageWrapper),
                                  children:
                                      L &&
                                      t.jsx('div', {
                                          className: a(y.image, o?.image),
                                          style: {
                                              backgroundImage: `url(${L.path})`,
                                              height: `${L.height}rem`,
                                              width: `${L.width}rem`,
                                          },
                                      }),
                              }),
                          }),
                          t.jsx('div', { className: a(y.vignette, o?.vignette) }),
                          t.jsxs('div', {
                              className: a(y.contentWrapper, o?.contentWrapper),
                              children: [
                                  t.jsxs('div', {
                                      className: a(y.title, o?.title),
                                      children: [
                                          P.readOrEmpty('menu.promo.teaser.title'),
                                          Boolean(N) &&
                                              N > 0 &&
                                              t.jsx(b, {
                                                  className: a(y.counter, o?.counter),
                                                  value: N,
                                                  size: 'small',
                                              }),
                                      ],
                                  }),
                                  t.jsx(h, {
                                      type: 'close',
                                      side: 'right',
                                      classNames: { base: a(y.closeButton, o?.closeButton) },
                                      onClick: S,
                                      caption: '',
                                  }),
                                  j && t.jsx('div', { className: a(y.text, o?.text), children: j }),
                                  (k || $) &&
                                      t.jsxs('div', {
                                          className: y.bottomContent,
                                          children: [
                                              k &&
                                                  t.jsx('div', {
                                                      className: a(y.description, o?.description),
                                                      children: t.jsx(x, {
                                                          classMix: y.extendedText,
                                                          text: k,
                                                          isTruncationAvailable: !0,
                                                      }),
                                                  }),
                                              $ && t.jsx(T, { className: a(y.countdown, o?.countdown), ...$ }),
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
