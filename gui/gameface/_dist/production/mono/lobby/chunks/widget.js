import { L as e, r as s, j as t, f as a } from './vendor.js';
import {
    b as o,
    ck as n,
    cl as i,
    a as r,
    aE as l,
    E as c,
    d4 as d,
    d5 as m,
    d6 as p,
    d7 as u,
    d8 as _,
    d3 as g,
    d9 as v,
    ab as b,
    da as h,
    d2 as x,
    db as T,
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
    j = {
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
        const L = s.useCallback(
                (e) => {
                    (e.stopPropagation(), i.onClose());
                },
                [i],
            ),
            [S, $] = s.useState(null);
        s.useLayoutEffect(() => {
            let e;
            const s = d(m(W || 0), p());
            if (!W || s <= 0) return void $(null);
            const t = Math.floor(T.seconds(s)),
                a = u(m(W), _(1)) ? g.Extended : g.Long;
            return (
                $({ duration: t, style: a }),
                a === g.Extended && (e = setTimeout(() => $((e) => ({ ...e, style: g.Long })), d(m(t + 1), _(1)))),
                () => {
                    e && (clearTimeout(e), (e = void 0));
                }
            );
        }, [W]);
        const [A, V] = s.useState(null),
            [I, z] = s.useState(!1);
        return (
            s.useEffect(() => {
                const e = new Image();
                return (
                    (e.src = B),
                    (e.onload = () => {
                        (V({ path: B, height: e.height, width: e.width }), z(!0));
                    }),
                    (e.onerror = () => {
                        z(!0);
                    }),
                    () => {
                        ((e.src = ''), V(null));
                    }
                );
            }, [B]),
            I
                ? t.jsxs('div', {
                      className: a(j.base, j[`base__${r}Type`], E && j.base__video, e),
                      onClick: function (e) {
                          (M.play('click', { target: C, original: e }), i.onClick());
                      },
                      onMouseEnter: function (e) {
                          M.play('mouse-enter', { target: C, original: e });
                      },
                      children: [
                          t.jsx('div', {
                              className: a(j.contentWrapper, null == o ? void 0 : o.contentWrapper),
                              children: t.jsx('div', {
                                  className: a(j.imageWrapper, null == o ? void 0 : o.imageWrapper),
                                  children:
                                      A &&
                                      t.jsx('div', {
                                          className: a(j.image, null == o ? void 0 : o.image),
                                          style: {
                                              backgroundImage: `url(${A.path})`,
                                              height: `${A.height}rem`,
                                              width: `${A.width}rem`,
                                          },
                                      }),
                              }),
                          }),
                          t.jsx('div', { className: a(j.vignette, null == o ? void 0 : o.vignette) }),
                          t.jsxs('div', {
                              className: a(j.contentWrapper, null == o ? void 0 : o.contentWrapper),
                              children: [
                                  t.jsxs('div', {
                                      className: a(j.title, null == o ? void 0 : o.title),
                                      children: [
                                          P.readOrEmpty('menu.promo.teaser.title'),
                                          Boolean(N) &&
                                              N > 0 &&
                                              t.jsx(v, {
                                                  className: a(j.counter, null == o ? void 0 : o.counter),
                                                  value: N,
                                                  size: 'small',
                                              }),
                                      ],
                                  }),
                                  t.jsx(b, {
                                      type: 'close',
                                      side: 'right',
                                      classNames: { base: a(j.closeButton, null == o ? void 0 : o.closeButton) },
                                      onClick: L,
                                      caption: '',
                                  }),
                                  w && t.jsx('div', { className: a(j.text, null == o ? void 0 : o.text), children: w }),
                                  (k || S) &&
                                      t.jsxs('div', {
                                          className: j.bottomContent,
                                          children: [
                                              k &&
                                                  t.jsx('div', {
                                                      className: a(j.description, null == o ? void 0 : o.description),
                                                      children: t.jsx(h, {
                                                          classMix: j.extendedText,
                                                          text: k,
                                                          isTruncationAvailable: !0,
                                                      }),
                                                  }),
                                              S &&
                                                  t.jsx(x, {
                                                      className: a(j.countdown, null == o ? void 0 : o.countdown),
                                                      ...S,
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
    return t.jsx(w, { ...a, mode: 'real', mocks: N, children: t.jsx(k, { className: e, classNames: s }) });
}
export { W as default };
