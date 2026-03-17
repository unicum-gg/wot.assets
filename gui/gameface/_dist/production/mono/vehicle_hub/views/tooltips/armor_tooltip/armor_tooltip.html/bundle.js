import { r as e, j as a, f as r, s, g as c, z as l } from '../../../../chunks/vendor.js';
import { r as t, an as o, i, n as m, aL as n, aK as d } from '../../../../chunks/lib.js';
import { a as p, D as _ } from '../../../../chunks/armor_model.js';
const u = 'ArmorLayer_94179689',
    v = 'ArmorLayer_layer_5ad9db4',
    N = 'ArmorLayer_armor_d9ec88fc',
    x = t.resolve('strings'),
    j = e.memo(function ({
        layerName: e,
        nominalArmor: s,
        color: c,
        count: l,
        reductionFactor: t,
        selectedMode: i,
        classNames: m,
    }) {
        const n = x.readOrEmpty(`armor_inspector.tooltip.armor.part.${e}`),
            d =
                t > 1
                    ? a.jsx(o, { text: x.readOrEmpty('armor_inspector.tooltip.armor.reduction'), params: { value: t } })
                    : '',
            _ =
                l > 1
                    ? x.readOrEmpty('armor_inspector.tooltip.armor.layer.multiple')
                    : x.readOrEmpty('armor_inspector.tooltip.armor.layer.single'),
            j = i === p.NOMINAL ? { color: c } : { filter: 'none' };
        return a.jsx('div', {
            className: r(u, null == m ? void 0 : m.base),
            style: j,
            children: a.jsx(o, {
                className: r(v, null == m ? void 0 : m.layer),
                text: _,
                params: {
                    armor: a.jsx(o, {
                        className: N,
                        text: x.readOrEmpty('armor_inspector.tooltip.reductionAndArmor.value'),
                        params: {
                            value: a.jsx('span', { className: null == m ? void 0 : m.value, children: s }),
                            reduction: a.jsx('span', { className: null == m ? void 0 : m.value, children: d }),
                        },
                    }),
                    part: a.jsx('div', { children: n }),
                    count: l,
                },
            }),
        });
    }),
    [A, y] = i()(({ observableModel: e }) => {
        const a = {
                ...e.primitives(['selectedMode', 'dccType', 'dccValue', 'dccColor']),
                armorLayers: e.arrayClone('armorLayers'),
            },
            r = c(() => a.armorLayers.get().reduce((e, a) => e + a.nominalArmor * a.reductionFactor, 0)),
            s = c(() => Math.round(a.armorLayers.get().reduce((e, a) => e + a.resultArmor * a.reductionFactor, 0))),
            l = c(() => {
                var e;
                return (null == (e = a.armorLayers.get()[0]) ? void 0 : e.impactAngle) ?? 0;
            });
        return { ...a, computes: { totalNominalArmor: r, totalEffectiveArmor: s, impactAngle: l } };
    }, m),
    h = 'App_4ddf07be',
    f = 'App_content_99d3405e',
    g = 'App_section_8d81c223',
    E = 'App_section__nominal_multiple_ccfcd1c9',
    O = 'App_section__angle_0',
    b = 'App_section__effective_1febaf50',
    T = 'App_section__dcc_4ee5cb89',
    L = 'App_section__dcc_no_damage_369f0583',
    M = 'App_image_4d2b9a23',
    C = 'App_image__nominal_4645aa40',
    I = 'App_image__angle_a810893a',
    R = 'App_image__effective_64e0c709',
    $ = 'App_image__dcc_7a228b6',
    k = 'App_image__no_damage_4a0ce0c5',
    P = 'App_image__ricochet_d9df22db',
    D = 'App_info_c3da088b',
    F = 'App_value_a6176592',
    V = 'App_value__angle_af94c4a7',
    w = 'App_value__dcc_filter_ece5f858',
    G = 'App_value__dcc_e69021c4',
    H = 'App_calculations_f78ad647',
    z = 'App_majorValue_cb0d7c5',
    B = 'App_divider_9b66e1ca',
    K = 'App_dividerImage_94ed318e',
    q = 'App_layers_ee23ccfe',
    J = 'App_layer_ec0b9703',
    Q = 'App_separator_44573a34',
    S = 'App_line_9b60d064',
    U = t.resolve('strings');
function W(e) {
    return e === _.RICOCHET
        ? U.readOrEmpty('armor_inspector.tooltip.dcc.ricochet')
        : e === _.NO_DAMAGE
          ? U.readOrEmpty('armor_inspector.tooltip.dcc.no_damage')
          : U.readOrEmpty('armor_inspector.tooltip.dcc.penetration');
}
const X = l(function () {
    const { model: c } = y(),
        l = e.useRef(null);
    ((a, r) => {
        const c = e.useCallback(
            (e) => {
                r && r(e.width, e.height);
            },
            [r],
        );
        e.useEffect(() => {
            if (!a.current) return;
            const e = new s((e) => {
                c(a.current.getBoundingClientRect());
            });
            return (
                e.observe(a.current),
                () => {
                    e.disconnect();
                }
            );
        }, [c, a]);
    })(l, n);
    const t = c.armorLayers.get(),
        i = t.length,
        m = c.computes.impactAngle(),
        d = c.computes.totalNominalArmor(),
        u = c.computes.totalEffectiveArmor(),
        v = u - d,
        N = i > 1,
        x = t[0],
        A = c.dccValue.get(),
        X = c.dccType.get(),
        Y = c.selectedMode.get(),
        Z = Y === p.PENETRATION ? { color: c.dccColor.get(), opacity: 1 } : { filter: 'none' };
    return a.jsx('div', {
        className: h,
        ref: l,
        children: a.jsxs('div', {
            className: f,
            children: [
                a.jsxs('div', {
                    className: r(g, N && E),
                    children: [
                        a.jsx('div', { className: r(M, C) }),
                        N
                            ? a.jsxs('div', {
                                  className: D,
                                  children: [
                                      a.jsx(o, {
                                          className: F,
                                          text: U.readOrEmpty('armor_inspector.tooltip.armor.value'),
                                          params: { value: a.jsx('span', { className: z, children: d }) },
                                      }),
                                      a.jsxs('div', {
                                          className: q,
                                          children: [
                                              a.jsx('div', { className: Q }),
                                              t.map((e, r) =>
                                                  a.jsxs(
                                                      'div',
                                                      {
                                                          className: J,
                                                          children: [
                                                              a.jsx('div', { className: S }),
                                                              a.jsx(j, { ...e, selectedMode: Y }),
                                                          ],
                                                      },
                                                      `${e.layerName}-${r}`,
                                                  ),
                                              ),
                                          ],
                                      }),
                                  ],
                              })
                            : a.jsx('div', {
                                  className: D,
                                  children: a.jsx(j, { ...x, classNames: { base: F, value: z }, selectedMode: Y }),
                              }),
                    ],
                }),
                a.jsx('div', { className: B, children: a.jsx('div', { className: K }) }),
                a.jsxs('div', {
                    className: r(g, O),
                    children: [
                        a.jsx('div', { className: r(M, I) }),
                        a.jsxs('div', {
                            className: D,
                            children: [
                                a.jsx(o, {
                                    className: r(F, V),
                                    text: U.readOrEmpty('armor_inspector.tooltip.angle.value'),
                                    params: { value: a.jsx('span', { className: z, children: m }) },
                                }),
                                a.jsx(o, {
                                    className: H,
                                    text: U.readOrEmpty('armor_inspector.tooltip.armor.value'),
                                    params: { value: `+${v}` },
                                }),
                            ],
                        }),
                    ],
                }),
                a.jsx('div', { className: B, children: a.jsx('div', { className: K }) }),
                a.jsxs('div', {
                    className: r(g, b),
                    children: [
                        a.jsx('div', { className: r(M, R) }),
                        a.jsxs('div', {
                            className: D,
                            children: [
                                a.jsx(o, {
                                    className: F,
                                    text: U.readOrEmpty('armor_inspector.tooltip.armor.value'),
                                    params: { value: a.jsx('span', { className: z, children: u }) },
                                }),
                                a.jsx(o, {
                                    className: H,
                                    text: U.readOrEmpty('armor_inspector.tooltip.armor.value'),
                                    params: { value: `(${d} + ${v})` },
                                }),
                            ],
                        }),
                    ],
                }),
                a.jsx('div', { className: B, children: a.jsx('div', { className: K }) }),
                a.jsxs('div', {
                    className: r(g, T, X !== _.PENETRATION && L),
                    children: [
                        a.jsx('div', {
                            className: r(M, X === _.PENETRATION && $, X === _.NO_DAMAGE && k, X === _.RICOCHET && P),
                        }),
                        a.jsxs('div', {
                            className: D,
                            children: [
                                X === _.PENETRATION &&
                                    a.jsx(o, {
                                        className: r(F, w),
                                        style: Z,
                                        text: U.readOrEmpty('armor_inspector.tooltip.dcc.percent'),
                                        params: { value: a.jsx('span', { className: z, style: Z, children: A }) },
                                    }),
                                a.jsx('div', { className: r(F, G, w), style: Z, children: W(X) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
});
d(a.jsx(A, { children: a.jsx(X, {}) }));
