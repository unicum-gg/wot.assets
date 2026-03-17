import { p as e, q as t, i as o, j as a, e as s, k as r, l, s as n, r as i } from './vendor.js';
import { i as c, B as u, d as g, e as m, I as d, F as f, R as p, u as _, c as b } from './lib.js';
const D = 'escape',
    h = 'close',
    x = 'confirm',
    y = 'cancel',
    v = { [h]: h, [D]: D, [x]: x, [y]: y },
    [N, j] = c()(
        ({ observableModel: o }) => {
            const a = { ...o.primitives(['backgroundImage', 'dimmerAlpha']), buttons: o.arrayClone('buttons') },
                s = o.dict('content'),
                r = o.dict('resources'),
                l = e((e, t = !0) => {
                    const o = s.get(e);
                    return (!o && t && console.error(`Error getting string content for key ${e}`), o);
                }),
                n = e((e, t = !0) => {
                    const o = r.get(e);
                    return !o && t ? (console.error(`Error getting string content for key ${e}`), null) : (o ?? null);
                }),
                i = e((e, o, a = !0) => {
                    try {
                        const s = l(e, a);
                        if (!s) return;
                        return t(o, JSON.parse(s));
                    } catch (s) {
                        return void (a && console.error(`Error parsing JSON content for key ${e}: ${s}`));
                    }
                });
            return { ...a, computes: { getResource: n, getStringContent: l, getParsedContent: i } };
        },
        ({ externalModel: e }) => ({ onAction: e.createCallback((e) => ({ action: e }), 'onAction') }),
    ),
    T = {
        base: 'DefaultDialogTemplate_2b940a27',
        overlay: 'DefaultDialogTemplate_overlay_a401350d',
        body: 'DefaultDialogTemplate_body_df1a2692',
        iconImage: 'DefaultDialogTemplate_iconImage_1ea84ffb',
        title: 'DefaultDialogTemplate_title_ff9a8518',
        description: 'DefaultDialogTemplate_description_8f648786',
        description_text: 'DefaultDialogTemplate_description_text_9e3e132c',
        divider: 'DefaultDialogTemplate_divider_4d4ef886',
        buttonGroup: 'DefaultDialogTemplate_buttonGroup_8ab4d55c',
        button: 'DefaultDialogTemplate_button_c76aebb7',
        closeButton: 'DefaultDialogTemplate_closeButton_7efb3d0a',
        footer: 'DefaultDialogTemplate_footer_aa9b73fa',
        footer_glowWrapper: 'DefaultDialogTemplate_footer_glowWrapper_200951f2',
        footer_glow: 'DefaultDialogTemplate_footer_glow_cf98773e',
        footer_border: 'DefaultDialogTemplate_footer_border_f9a7d920',
        footer_text: 'DefaultDialogTemplate_footer_text_fa82ceed',
        footer_image: 'DefaultDialogTemplate_footer_image_441f56cf',
    },
    C = { size: u.sizes.extraSmall },
    S = { medium: { size: u.sizes.small }, large: { size: u.sizes.medium }, extraLarge: { size: u.sizes.large } },
    k = o(function ({ className: e }) {
        const t = g(C, S),
            {
                model: o,
                controls: { onAction: r },
            } = j(),
            l = o.buttons.get();
        return l.length
            ? a.jsx('div', {
                  className: s(T.buttonGroup, e),
                  children: l.map((e, o) =>
                      a.jsx(
                          u,
                          {
                              className: T.button,
                              autoAlignContent: !1,
                              theme: 0 === o ? u.themes.primary : u.themes.secondary,
                              size: t.size,
                              onClick: () => r(e.action),
                              soundTarget: e.soundTarget || void 0,
                              'data-test-id': e.action,
                              children: e.label,
                          },
                          o,
                      ),
                  ),
              })
            : null;
    }),
    z = o(function ({ className: e }) {
        const { controls: t } = j(),
            o = m();
        return a.jsx('div', {
            onClick: function (e) {
                (o.play('close', { target: 'dialog:close_button', original: e }),
                    t.onAction(v.close),
                    e.stopPropagation());
            },
            onMouseEnter: function (e) {
                o.play('mouse-enter', { target: 'dialog:close_button', original: e });
            },
            className: s(T.closeButton, e),
            'data-test-id': 'close',
            children: a.jsx(d, { path: 'ui.close_btn', width: 48, height: 48 }),
        });
    }),
    P = r(l(n(), n())),
    A = o(function ({ className: e }) {
        const { model: t } = j(),
            o = t.computes.getResource('descriptionString', false),
            r = t.computes.getParsedContent('descriptionStringParams', P, false) ?? {};
        return o
            ? a.jsx('div', {
                  className: s(T.description, e),
                  children: a.jsx(f, { className: T.description_text, text: o, params: r, upgradeLegacy: !0 }),
              })
            : null;
    }),
    w = r(l(n(), n())),
    I = !1,
    E = o(function ({ className: e }) {
        const { model: t } = j(),
            o = t.computes.getStringContent('footerHighlightColor', I),
            r = t.computes.getResource('footerString', I),
            l = t.computes.getParsedContent('footerStringParams', w, I) ?? {},
            n = t.computes.getResource('footerImage', I),
            c = i.useMemo(() => (o ? { '--footer-highlight-color': o } : {}), [o]);
        return r
            ? a.jsxs('div', {
                  className: s(T.footer, o && T.footer__highlight, e),
                  style: c,
                  children: [
                      o &&
                          a.jsxs(a.Fragment, {
                              children: [
                                  a.jsx('div', {
                                      className: T.footer_glowWrapper,
                                      children: a.jsx('div', { className: T.footer_glow }),
                                  }),
                                  a.jsx(d, {
                                      path: 'ui.noise',
                                      className: T.footer_border,
                                      repeat: 'both',
                                      style: { backgroundSize: '100rem 100rem' },
                                  }),
                              ],
                          }),
                      n && a.jsx(p, { src: n, className: T.footer_image, fit: 'contain' }),
                      a.jsx('div', {
                          className: T.footer_text,
                          children: a.jsx(f, { text: r, params: l, upgradeLegacy: !0 }),
                      }),
                  ],
              })
            : a.jsx('div', { className: s(T.footer, e) });
    }),
    R = o(function ({ className: e }) {
        const { model: t } = j(),
            o = t.backgroundImage.get(),
            r = t.dimmerAlpha.get();
        return a.jsx('div', {
            className: s(T.overlay, e),
            style: { backgroundImage: o ? `url(${o})` : void 0, backgroundColor: `rgba(0,0,0,${r})` },
            'data-test-id': 'closeOverlay',
        });
    }),
    $ = r(l(n(), n())),
    B = o(function ({ className: e }) {
        const { model: t } = j(),
            o = t.computes.getResource('titleString', false),
            r = t.computes.getParsedContent('titleStringParams', $, false) ?? {};
        return o
            ? a.jsx('div', { className: s(T.title, e), children: a.jsx(f, { text: o, params: r, upgradeLegacy: !0 }) })
            : null;
    }),
    L = o(function ({ children: e, className: t }) {
        const { controls: o } = j();
        return (_(b.ESCAPE, () => o.onAction(v.escape)), a.jsx('div', { className: s(T.base, t), children: e }));
    });
var M = ((e) => ((e.Primary = 'primary'), (e.Secondary = 'secondary'), (e.Custom = 'custom'), e))(M || {});
export { M as B, N as D, v as a, E as b, R as c, z as d, L as e, B as f, A as g, k as h, T as s, j as u };
