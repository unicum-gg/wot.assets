import { w as e, p as a, r as s, j as i, q as r, f as l } from '../../../chunks/vendor.js';
import {
    c as n,
    i as o,
    d,
    e as c,
    a as t,
    V as m,
    f as p,
    u as _,
    k as h,
    b as w,
    U as R,
    g as u,
} from '../../../chunks/lib.js';
import { B as v, a as x } from '../../../chunks/bonuses_mocks.js';
import { A as j, H as N, a as b, F as y, t as g } from '../../../chunks/header.js';
import { i as C } from '../../../chunks/helpers.js';
/* empty css                    */ const T = {
        getter: n({
            mainRewards: [
                {
                    ...x,
                    icon: 'J20_Type_2605',
                    label: 'Coccodrillo',
                    name: 'vehicles',
                    tooltipContentId: '728',
                    isElite: !0,
                    vehicleShortName: 'Type_26',
                    vehicleLvl: 8,
                    vehicleType: 'heavyTank',
                    isPremium: !1,
                },
            ],
            additionalRewards: [v.CREDIT, v.EXP_FREE, v.OPTICS, v.CRYSTAL, v.EQUIP_COIN],
        }),
        controls: () => ({ close: () => window.model.onClose() }),
    },
    [f, A] = o('MainRewardsProvider')(
        ({ observableModel: e }) => ({
            mainRewards: e.arrayClone('mainRewards'),
            additionalRewards: e.arrayClone('additionalRewards'),
        }),
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
    ),
    k = 'Reward_b54b4dc5',
    M = 'Reward_icon_9c924ee7',
    E = 'Reward_info_97107c39',
    I = 'Reward_level_942ae754',
    S = 'Reward_name_942ae754',
    P = e(function ({ reward: e, index: n, className: o }) {
        const _ = d(),
            h = a({ ...j.getMainReward(n), onStart: () => _.play('animation', { target: 'reward' }) }),
            w = s.useMemo(() => ({ contentId: Number(e.tooltipContentId), args: { tooltipId: e.tooltipId } }), [e]),
            R = c(w),
            u = t({ VehicleType: m.Type.sizes.x48x48 }, { large: { VehicleType: m.Type.sizes.x64x64 } });
        return C(e)
            ? i.jsxs(r.div, {
                  ...R,
                  style: h,
                  className: l(k, o),
                  children: [
                      i.jsx('div', {
                          className: M,
                          style: { backgroundImage: `url(R.images.gui.maps.shop.vehicles.c_600x450.${e.icon})` },
                      }),
                      i.jsxs(m, {
                          className: E,
                          children: [
                              i.jsx(m.Level, { className: I, value: e.vehicleLvl }),
                              p(e.vehicleType) &&
                                  i.jsx(m.Type, { type: e.vehicleType, premium: e.isPremium, size: u.VehicleType }),
                              i.jsx(m.Name, { className: S, children: e.vehicleShortName }),
                          ],
                      }),
                  ],
              })
            : null;
    }),
    D = 'MainRewards_597b951b',
    L = 'MainRewards_ribbonWrapper_626a5e29',
    O = 'MainRewards_ribbon_13f45a79',
    V = 'MainRewards_raysWrapper_626a5e29',
    z = 'MainRewards_rays_3f41364d',
    B = 'MainRewards_reward_7e25700e';
function F({ bonuses: e, className: s }) {
    const n = d(),
        o = a({ ...j.RIBBON, onStart: () => n.play('open', { target: 'view' }) }),
        c = a(j.RAYS);
    return i.jsxs('div', {
        className: l(D, s),
        children: [
            i.jsx(r.div, { style: o, className: L, children: i.jsx('div', { className: O }) }),
            i.jsx(r.div, { style: c, className: V, children: i.jsx('div', { className: z }) }),
            e.map((e, a) => i.jsx(P, { className: B, reward: e, index: a }, e.name)),
        ],
    });
}
const U = 'App_5b430e52',
    W = 'App_header_62b47ab',
    Y = 'App_content_32b0ab9a',
    q = 'App_mainRewards_9a6a16c3',
    H = 'App_mainRewards__additional_8126661e',
    J = 'App_additionalRewards_e8e7a9e0',
    Q = 'App_footer_8855e946',
    X = e(function () {
        const { model: e, controls: a } = A(),
            s = e.mainRewards.get(),
            r = e.additionalRewards.get(),
            n = j.getMainRewardsDuration(s.length),
            o = j.getAdditionalRewardDuration(r.length),
            d = r.length > 0;
        return (
            _(h.ESCAPE, a.close),
            _(h.ENTER, a.close),
            _(h.SPACE, a.close),
            i.jsxs('div', {
                className: U,
                children: [
                    i.jsx(N, { className: W, onClose: a.close }),
                    i.jsxs('div', {
                        className: Y,
                        children: [
                            i.jsx(F, { className: l(q, d && H), bonuses: s }),
                            d && i.jsx(b, { className: J, bonuses: r, animationDelay: n }),
                        ],
                    }),
                    i.jsx(y, { className: Q, animationDelay: n + o, onClose: a.close }),
                ],
            })
        );
    });
w(i.jsx(f, { mode: 'real', mocks: T, children: i.jsx(R, { soundsOverrides: u(g), children: i.jsx(X, {}) }) }), {
    fullScreen: !0,
    immediateLayout: !1,
});
