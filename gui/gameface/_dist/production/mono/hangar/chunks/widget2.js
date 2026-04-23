import { D as e, r as s, j as t, f as a } from './vendor.js';
import {
    aw as o,
    dw as n,
    dx as r,
    i,
    l as c,
    r as l,
    dy as d,
    W as m,
    cl as p,
    dz as g,
    dc as _,
    dA as u,
    dB as x,
    dC as h,
    ct as b,
    dD as v,
    dE as T,
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
    [w, y] = i('TeaserModel')(
        ({ observableModel: e }) =>
            e.primitives(['type', 'postCounter', 'description', 'text', 'isVideo', 'finishTime', 'image']),
        ({ externalModel: e }) => ({
            onClick: e.createCallbackNoArgs('onClick'),
            onClose: e.createCallbackNoArgs('onClose'),
        }),
    ),
    j = {
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
        const { model: n, controls: r } = y(),
            i = n.type.get() || f.News,
            N = n.postCounter.get(),
            w = n.text.get(),
            k = n.description.get(),
            W = n.finishTime.get(),
            B = n.isVideo.get(),
            E = n.image.get(),
            M = c(),
            P = l.resolve('strings');
        const A = s.useCallback(
                (e) => {
                    (e.stopPropagation(), r.onClose());
                },
                [r],
            ),
            [S, $] = s.useState(null);
        s.useLayoutEffect(() => {
            let e;
            const s = d(m(W || 0), p());
            if (!W || s <= 0) return void $(null);
            const t = Math.floor(T.seconds(s)),
                a = g(m(W), _(1)) ? u.Extended : u.Long;
            return (
                $({ duration: t, style: a }),
                a === u.Extended && (e = setTimeout(() => $((e) => ({ ...e, style: u.Long })), d(m(t + 1), _(1)))),
                () => {
                    e && (clearTimeout(e), (e = void 0));
                }
            );
        }, [W]);
        const [L, V] = s.useState(null),
            [z, D] = s.useState(!1);
        return (
            s.useEffect(() => {
                const e = new Image();
                return (
                    (e.src = E),
                    (e.onload = () => {
                        (V({ path: E, height: e.height, width: e.width }), D(!0));
                    }),
                    (e.onerror = () => {
                        D(!0);
                    }),
                    () => {
                        ((e.src = ''), V(null));
                    }
                );
            }, [E]),
            z
                ? t.jsxs('div', {
                      className: a(j.base, j[`base__${i}Type`], B && j.base__video, e),
                      onClick: function (e) {
                          (M.play('click', { target: C, original: e }), r.onClick());
                      },
                      onMouseEnter: function (e) {
                          M.play('mouse-enter', { target: C, original: e });
                      },
                      children: [
                          t.jsx('div', {
                              className: a(j.contentWrapper, o?.contentWrapper),
                              children: t.jsx('div', {
                                  className: a(j.imageWrapper, o?.imageWrapper),
                                  children:
                                      L &&
                                      t.jsx('div', {
                                          className: a(j.image, o?.image),
                                          style: {
                                              backgroundImage: `url(${L.path})`,
                                              height: `${L.height}rem`,
                                              width: `${L.width}rem`,
                                          },
                                      }),
                              }),
                          }),
                          t.jsx('div', { className: a(j.vignette, o?.vignette) }),
                          t.jsxs('div', {
                              className: a(j.contentWrapper, o?.contentWrapper),
                              children: [
                                  t.jsxs('div', {
                                      className: a(j.title, o?.title),
                                      children: [
                                          P.readOrEmpty('menu.promo.teaser.title'),
                                          Boolean(N) &&
                                              N > 0 &&
                                              t.jsx(x, {
                                                  className: a(j.counter, o?.counter),
                                                  value: N,
                                                  size: 'small',
                                              }),
                                      ],
                                  }),
                                  t.jsx(h, {
                                      type: 'close',
                                      side: 'right',
                                      classNames: { base: a(j.closeButton, o?.closeButton) },
                                      onClick: A,
                                      caption: '',
                                  }),
                                  w && t.jsx('div', { className: a(j.text, o?.text), children: w }),
                                  (k || S) &&
                                      t.jsxs('div', {
                                          className: j.bottomContent,
                                          children: [
                                              k &&
                                                  t.jsx('div', {
                                                      className: a(j.description, o?.description),
                                                      children: t.jsx(b, {
                                                          classMix: j.extendedText,
                                                          text: k,
                                                          isTruncationAvailable: !0,
                                                      }),
                                                  }),
                                              S && t.jsx(v, { className: a(j.countdown, o?.countdown), ...S }),
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
    return t.jsx(w, { ...a, mode: 'real', mocks: N, children: t.jsx(k, { className: e, classNames: s }) });
}
export { W as default };
