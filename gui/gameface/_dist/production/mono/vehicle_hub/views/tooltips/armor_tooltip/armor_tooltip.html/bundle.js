import { r as a, j as e, e as s, p as r, g as l, y as c } from '../../../../chunks/vendor.js';
import { r as o, N as t, i as m, n as i, aD as n, aC as p } from '../../../../chunks/lib.js';
const d = 'ArmorLayer_8511e0db',
    _ = 'ArmorLayer_layer_5ad9db4',
    v = 'ArmorLayer_armor_d9ec88fc',
    u = o.resolve('strings'),
    x = a.memo(function ({ layerName: a, nominalArmor: r, color: l, count: c, classNames: o }) {
        const m = u.readOrEmpty(`armor_inspector.tooltip.armor.part.${a}`),
            i =
                c > 1
                    ? u.readOrEmpty('armor_inspector.tooltip.armor.layer.multiple')
                    : u.readOrEmpty('armor_inspector.tooltip.armor.layer.single');
        return e.jsx('div', {
            className: s(d, null == o ? void 0 : o.base),
            style: { color: l },
            children: e.jsx(t, {
                className: s(_, null == o ? void 0 : o.layer),
                text: i,
                params: {
                    armor: e.jsx(t, {
                        className: v,
                        text: u.readOrEmpty('armor_inspector.tooltip.armor.value'),
                        params: { value: e.jsx('span', { className: null == o ? void 0 : o.value, children: r }) },
                    }),
                    part: e.jsx('div', { children: m }),
                    count: c,
                },
            }),
        });
    }),
    [j, N] = m()(({ observableModel: a }) => {
        const e = { armorLayers: a.arrayClone('armorLayers') },
            s = l(() => e.armorLayers.get().reduce((a, e) => a + e.nominalArmor, 0)),
            r = l(() => e.armorLayers.get().reduce((a, e) => a + e.resultArmor, 0)),
            c = l(() => {
                var a;
                return (null == (a = e.armorLayers.get()[0]) ? void 0 : a.impactAngle) ?? 0;
            });
        return { ...e, computes: { totalNominalArmor: s, totalEffectiveArmor: r, impactAngle: c } };
    }, i),
    A = 'App_4ddf07be',
    y = 'App_content_66e6c0bb',
    h = 'App_section_8d81c223',
    f = 'App_section__nominal_ccfcd1c9',
    g = 'App_section__effective_39c268f4',
    b = 'App_image_4d2b9a23',
    E = 'App_image__nominal_6651b124',
    L = 'App_image__angle_a810893a',
    O = 'App_image__effective_64e0c709',
    $ = 'App_info_5ca42508',
    C = 'App_value_957eb145',
    k = 'App_value__angle_13feac86',
    w = 'App_calculations_c68ace7d',
    R = 'App_majorValue_49d964de',
    B = 'App_divider_9b66e1ca',
    D = 'App_dividerImage_94ed318e',
    I = 'App_layers_ee23ccfe',
    M = 'App_layer_ec0b9703',
    V = 'App_separator_44573a34',
    q = 'App_line_9b60d064',
    z = o.resolve('strings'),
    F = c(function () {
        const { model: l } = N(),
            c = a.useRef(null);
        ((e, s) => {
            const l = a.useCallback(
                (a) => {
                    s && s(a.width, a.height);
                },
                [s],
            );
            a.useEffect(() => {
                if (!e.current) return;
                const a = new r((a) => {
                    l(e.current.getBoundingClientRect());
                });
                return (
                    a.observe(e.current),
                    () => {
                        a.disconnect();
                    }
                );
            }, [l, e]);
        })(c, n);
        const o = l.armorLayers.get(),
            m = o.length,
            i = l.computes.impactAngle(),
            p = l.computes.totalNominalArmor(),
            d = l.computes.totalEffectiveArmor(),
            _ = d - p,
            v = m > 1,
            u = o[0];
        return e.jsx('div', {
            className: A,
            ref: c,
            children: e.jsxs('div', {
                className: y,
                children: [
                    e.jsxs('div', {
                        className: s(h, !v && f),
                        children: [
                            e.jsx('div', { className: s(b, E) }),
                            v
                                ? e.jsxs('div', {
                                      className: $,
                                      children: [
                                          e.jsx(t, {
                                              className: C,
                                              text: z.readOrEmpty('armor_inspector.tooltip.armor.value'),
                                              params: { value: e.jsx('span', { className: R, children: p }) },
                                          }),
                                          e.jsxs('div', {
                                              className: I,
                                              children: [
                                                  e.jsx('div', { className: V }),
                                                  o.map((a, s) =>
                                                      e.jsxs(
                                                          'div',
                                                          {
                                                              className: M,
                                                              children: [
                                                                  e.jsx('div', { className: q }),
                                                                  e.jsx(x, { ...a }),
                                                              ],
                                                          },
                                                          `${a.layerName}-${s}`,
                                                      ),
                                                  ),
                                              ],
                                          }),
                                      ],
                                  })
                                : e.jsx('div', {
                                      className: $,
                                      children: e.jsx(x, { ...u, classNames: { base: C, value: R } }),
                                  }),
                        ],
                    }),
                    e.jsx('div', { className: B, children: e.jsx('div', { className: D }) }),
                    e.jsxs('div', {
                        className: h,
                        children: [
                            e.jsx('div', { className: s(b, L) }),
                            e.jsxs('div', {
                                className: $,
                                children: [
                                    e.jsx(t, {
                                        className: s(C, k),
                                        text: z.readOrEmpty('armor_inspector.tooltip.angle.value'),
                                        params: { value: e.jsx('span', { className: R, children: i }) },
                                    }),
                                    e.jsx(t, {
                                        className: w,
                                        text: z.readOrEmpty('armor_inspector.tooltip.armor.value'),
                                        params: { value: `+${_}` },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx('div', { className: B, children: e.jsx('div', { className: D }) }),
                    e.jsxs('div', {
                        className: s(h, g),
                        children: [
                            e.jsx('div', { className: s(b, O) }),
                            e.jsxs('div', {
                                className: $,
                                children: [
                                    e.jsx(t, {
                                        className: C,
                                        text: z.readOrEmpty('armor_inspector.tooltip.armor.value'),
                                        params: { value: e.jsx('span', { className: R, children: d }) },
                                    }),
                                    e.jsx(t, {
                                        className: w,
                                        text: z.readOrEmpty('armor_inspector.tooltip.armor.value'),
                                        params: { value: `(${p} + ${_})` },
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
p(e.jsx(j, { children: e.jsx(F, {}) }));
