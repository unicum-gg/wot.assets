import { i as s, j as o, e } from './vendor.js';
import { R as a, u as l, c as t } from './lib.js';
import {
    u as n,
    s as i,
    b as r,
    c,
    d as u,
    e as m,
    f as d,
    g as p,
    h as v,
    a as j,
} from './mono_dialog_template_button_model.js';
const N = {
        Wrapper: m,
        Overlay: c,
        CloseButton: u,
        Footer: r,
        IconImage: s(function ({ className: s }) {
            const { model: l } = n(),
                t = l.computes.getResource('iconImage', false);
            return t ? o.jsx(a, { src: t, className: e(i.iconImage, s), fit: 'contain' }) : null;
        }),
        Title: d,
        Description: p,
        ButtonGroup: v,
    },
    x = s(function ({ componentMap: s = {}, classNames: a = {}, children: r }) {
        const {
                Overlay: c = N.Overlay,
                CloseButton: u = N.CloseButton,
                Wrapper: m = N.Wrapper,
                IconImage: d = N.IconImage,
                Title: p = N.Title,
                Description: v = N.Description,
                ButtonGroup: x = N.ButtonGroup,
                Footer: g = N.Footer,
            } = s,
            { model: f, controls: I } = n(),
            b = f.buttons.get().length > 0;
        return (
            l(t.ESCAPE, () => {
                I.onAction(j.escape);
            }),
            o.jsxs(m, {
                className: null == a ? void 0 : a.wrapper,
                children: [
                    o.jsx(c, { className: null == a ? void 0 : a.overlay }),
                    o.jsxs('div', {
                        className: e(i.body, null == a ? void 0 : a.body),
                        children: [
                            o.jsx(d, { className: null == a ? void 0 : a.iconImage }),
                            o.jsx(p, { className: null == a ? void 0 : a.title }),
                            o.jsx(v, { className: null == a ? void 0 : a.description }),
                            b && o.jsx('div', { className: e(i.divider, null == a ? void 0 : a.divider) }),
                            o.jsx(x, { className: null == a ? void 0 : a.buttonGroup }),
                            r,
                        ],
                    }),
                    o.jsx(g, { className: null == a ? void 0 : a.footer }),
                    o.jsx(u, { className: null == a ? void 0 : a.closeButton }),
                ],
            })
        );
    });
export { x as D };
