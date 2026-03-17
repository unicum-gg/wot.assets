import { j as e, f as s, t as r } from '../../../../chunks/vendor.js';
import { i, b$ as a, b_ as c, J as t, U as d, j as l } from '../../../../chunks/lib.js';
import { N as n } from '../../../../chunks/constants.js';
const [o, x] = i()(({ observableModel: e }) => ({ root: e.object() }), a),
    j = 'TextBlock_c1243dca',
    m = ({ text: r, className: i = '' }) => e.jsx('div', { className: s(j, i), children: r }),
    k = 'Divider_de5c9395',
    h = () => e.jsx('div', { className: k }),
    p = 'Title_a2303213',
    _ = ({ text: s, children: r }) => e.jsxs('div', { className: p, children: [r, e.jsx('div', { children: s })] }),
    P = 'NewPerk_65dd7364',
    N = 'NewPerk_textWrapper_deeac718',
    v = 'NewPerk_text_b9d72254',
    f = 'NewPerk_icon_bd29446e',
    b = R.strings.tooltips.skill,
    g = ({ hasZeroPerk: s, isZero: r }) =>
        e.jsx('div', {
            className: P,
            children: e.jsx('div', {
                children: r
                    ? e.jsxs(e.Fragment, {
                          children: [
                              e.jsx(_, { text: b.newPerk.zeroPerk.title(), children: e.jsx('div', { className: f }) }),
                              e.jsxs('div', {
                                  className: N,
                                  children: [
                                      e.jsx(h, {}),
                                      e.jsx(m, { text: b.newPerk.zeroPerk.text(), className: v }),
                                      e.jsx(h, {}),
                                  ],
                              }),
                          ],
                      })
                    : e.jsxs(e.Fragment, {
                          children: [
                              e.jsx(_, { text: b.newPerk.perk.title() }),
                              s && e.jsx(m, { text: b.newPerk.perk.text(), className: v }),
                          ],
                      }),
            }),
        }),
    w = 'SpecificPerk_ce130323',
    u = 'SpecificPerk_title_82263009',
    Z = 'SpecificPerk_titleTexts_ce130323',
    S = 'SpecificPerk_subtitle_93cd4397',
    z = 'SpecificPerk_specificIcon_ecae8756',
    I = 'SpecificPerk_zeroPerkIcon_3d9628f1',
    T = R.strings.tooltips,
    y = ({ isZero: s, name: r }) =>
        e.jsxs('div', {
            className: w,
            children: [
                e.jsxs('div', {
                    className: u,
                    children: [
                        e.jsx('div', {
                            className: z,
                            style: {
                                backgroundImage: `url('R.images.gui.maps.icons.battlePass.tankman.perks.icon_perk_${r}')`,
                            },
                        }),
                        e.jsxs('div', {
                            className: Z,
                            children: [
                                e.jsx('div', { children: T.skill.name.$dyn(r) }),
                                e.jsx(m, { text: T.perkType.name.common() }),
                            ],
                        }),
                    ],
                }),
                s &&
                    e.jsxs('div', {
                        className: S,
                        children: [e.jsx('div', { className: I }), e.jsx(m, { text: T.perks.zeroPerkInfo() })],
                    }),
            ],
        }),
    $ = 'App_fa61a3fe',
    D = r(() => {
        const { model: s } = x(),
            { name: r, isZero: i, hasZeroPerk: a } = s.root.get(),
            t = r !== n;
        return e.jsx(c, {
            children: e.jsx(c.Decorator, {
                children: e.jsx('div', {
                    className: $,
                    children: t ? e.jsx(y, { isZero: i, name: r }) : e.jsx(g, { isZero: i, hasZeroPerk: a }),
                }),
            }),
        });
    });
l(new t().add(d).addWithProps(o, {}).render(e.jsx(D, {})));
