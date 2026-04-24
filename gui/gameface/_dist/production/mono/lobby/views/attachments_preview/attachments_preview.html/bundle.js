import { j as e, r as s, e as a, m as t } from '../../../chunks/vendor.js';
import {
    B as r,
    u as n,
    a as c,
    c as i,
    A as l,
    b as o,
    s as d,
    i as m,
    n as h,
    r as p,
    p as u,
    V as j,
    F as _,
    d as f,
    e as x,
    f as g,
    C as b,
    g as v,
    m as y,
    h as w,
    k as N,
    j as A,
    U as S,
} from '../../../chunks/lib.js';
import { g as z } from '../../../chunks/resources.js';
import { u as k } from '../../../chunks/usePreloadImages.js';
import { u as E, P, R as C, h as T, g as H } from '../../../chunks/reward.js';
const O = 'ScrollContent_alignedWrapper_aeca2e8f',
    I = 'ScrollContent_scrollBar_fa01fa0a',
    V = ({ children: t }) => {
        const [r, m] = s.useState(!1),
            { api: h } = n(),
            { animationScroll: p, applyScroll: u, getBounds: j } = h,
            _ = c(h, d.horizontal);
        return (
            s.useEffect(
                () =>
                    i(() => {
                        'idle' === _.type && p.scrollPosition.idle && u(p.scrollPosition.get());
                    }),
                [p.scrollPosition, _, u],
            ),
            s.useEffect(() => {
                const [e, s] = j();
                m(e !== s);
            }, [j]),
            e.jsxs(e.Fragment, {
                children: [
                    e.jsx(l, { classNames: { wrapper: a(!r && O) }, children: t }),
                    e.jsx(o, { classNames: { base: I } }),
                ],
            })
        );
    },
    $ = ({ children: s }) => e.jsx(r, { children: e.jsx(V, { children: s }) }),
    [B, F] = m()(
        ({ observableModel: e }) => ({
            root: e.object(),
            attachments: e.array('attachments'),
            ...e.primitives(['bundleType', 'name']),
        }),
        h,
    ),
    M = 'Attachment_109d6468',
    R = 'Attachment_rewardHighlight_d7fbdbe6',
    U = 'Attachment_rewardOverlay_aab126a3',
    W = 'Attachment_video_c86f988c',
    q = 'Attachment_name_e6194f3d',
    D = 'Attachment_description_da398fbf',
    G = t(function ({ reward: s }) {
        const { model: a } = F(),
            { bundleType: t } = a.root.get(),
            { getText: r } = z(t),
            { assetSize: n, textSize: c, overlaySize: i } = E(P.AttachmentPreview),
            l = s.overlayType,
            o = p.resolve('videos');
        return e.jsxs('div', {
            className: M,
            children: [
                e.jsxs(C, {
                    reward: s,
                    template: P.AttachmentPreview,
                    children: [
                        l && e.jsx(C.Highlight, { special: l, size: i, className: R }),
                        e.jsx(C.Image, {
                            template: P.AttachmentPreview,
                            showCounter: !1,
                            count: s.count,
                            image: H(s, n),
                            currencySize: c,
                            onMouseEnter: u.highlight,
                        }),
                        l && e.jsx(C.Overlay, { name: s.name, special: l, size: i, className: U }),
                        T(l) &&
                            e.jsx(j, { src: o.readOrEmpty(`rarity.cycle_${l}`), autoplay: !0, loop: !0, className: W }),
                    ],
                }),
                e.jsx('div', { className: q, children: s.label }),
                e.jsx('div', { className: D, children: r(`attachments_preview.rarity.${l}`) }),
            ],
        });
    }),
    J = 'Header_e0ac2a8e',
    K = 'Header_title_faafb1ee',
    L = 'Header_description_20baac9';
function Q({ title: s, description: t, className: r = '' }) {
    return e.jsxs('div', {
        className: a(J, r),
        children: [e.jsx(_, { text: s, className: K }), e.jsx(_, { className: L, text: t })],
    });
}
const X = 'App_7b0d0f3d',
    Y = 'App_close_f5179698',
    Z = 'App_header_8f98007e',
    ee = 'App_content_9d82d0a5',
    se = 'App_footer_9f29f1a9',
    ae = p.resolve('strings'),
    te = t(function () {
        const { model: s } = F(),
            { getExtImage: a, getText: t } = z(s.bundleType.get()),
            r = s.attachments.get(),
            n = ae.readOrEmpty('open_bundle.bonuses.attachmentsSet.default'),
            c = ae.readOrEmpty(`open_bundle.bonuses.attachmentsSet.${s.name.get()}`, 'silent');
        f(N.ESCAPE, v.closeView);
        const i = x({ buttonSize: g.medium }, { large: { buttonSize: g.large } }),
            l = k([a('confirmation.background')]);
        return e.jsx('div', {
            className: X,
            style: { backgroundImage: `url(${a('confirmation.background')})` },
            children:
                l &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(b, { onClose: v.closeView, className: Y }),
                        e.jsx(Q, { className: Z, title: c || n, description: t('attachments_preview.description') }),
                        e.jsx($, {
                            children: e.jsx('div', {
                                className: ee,
                                children: y(r, (s) => e.jsx(G, { reward: s }, s.icon)),
                            }),
                        }),
                        e.jsx(w, {
                            className: se,
                            size: i.buttonSize,
                            onClick: v.closeView,
                            children: t('attachments_preview.confirm'),
                        }),
                    ],
                }),
        });
    });
A(e.jsx(S, { children: e.jsx(B, { children: e.jsx(te, {}) }) })).then(h);
