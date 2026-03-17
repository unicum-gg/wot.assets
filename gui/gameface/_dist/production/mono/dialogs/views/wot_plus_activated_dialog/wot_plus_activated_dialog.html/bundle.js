import { i as e, j as i, e as s, k as a, m as t, n, s as o } from '../../../chunks/vendor.js';
import { D as l, R as c, F as r, d as g, u as d, c as m, r as p, U as b } from '../../../chunks/lib.js';
import {
    B as u,
    a as f,
    u as _,
    e as v,
    c as x,
    f as h,
    g as w,
    h as N,
    b as P,
    d as y,
    D as j,
} from '../../../chunks/mono_dialog_template_button_model.js';
(f.confirm,
    R.strings.dialogs.wotPlusProBoostActivationDialog.confirm(),
    u.Primary,
    f.cancel,
    R.strings.dialogs.common.cancel(),
    u.Secondary);
const S = {
        titleString: R.strings.dialogs.wotPlusActivationDialog.pro.heading(),
        iconImage: R.images.gui.maps.icons.subscription.activation_dialog.pro(),
        iconGlowImage: R.images.gui.maps.icons.subscription.activation_dialog.icon_glow_pro(),
        descriptionString: R.strings.dialogs.wotPlusActivationDialog.pro.description(),
    },
    z = [
        { label: R.strings.dialogs.wotPlusActivationDialog.benefits.proBoost(), type: 'pro_boost' },
        {
            label: R.strings.dialogs.wotPlusActivationDialog.benefits.serviceRecordCustomization(),
            type: 'service_record_customization',
        },
        { label: R.strings.dialogs.wotPlusActivationDialog.benefits.battlePassPlus(), type: 'battle_pass_plus' },
    ],
    D = [
        { label: R.strings.dialogs.wotPlusActivationDialog.benefits.goldReserve(), type: 'gold_reserve' },
        {
            label: R.strings.dialogs.wotPlusActivationDialog.benefits.intensiveCrewRegimen(),
            type: 'intensive_crew_regimen',
        },
        { label: R.strings.dialogs.wotPlusActivationDialog.benefits.battleBonus(), type: 'battle_bonus' },
        {
            label: R.strings.dialogs.wotPlusActivationDialog.benefits.manageableXpMultiplier(),
            type: 'manageable_xp_multiplier',
        },
        {
            label: R.strings.dialogs.wotPlusActivationDialog.benefits.freeEquipmentDemounting(),
            type: 'free_equipment_demounting',
        },
        { label: R.strings.dialogs.wotPlusActivationDialog.benefits.excludedMap(), type: 'excluded_map' },
        { label: R.strings.dialogs.wotPlusActivationDialog.benefits.assistant(), type: 'assistant' },
        { label: R.strings.dialogs.wotPlusActivationDialog.benefits.exclusiveVehicles(), type: 'exclusive_vehicles' },
        { label: R.strings.dialogs.wotPlusActivationDialog.benefits.attendanceRewards(), type: 'attendance_rewards' },
    ];
(R.strings.dialogs.wotPlusActivationDialog.core.heading(),
    R.images.gui.maps.icons.subscription.activation_dialog.core(),
    R.images.gui.maps.icons.subscription.activation_dialog.icon_glow_core(),
    R.strings.dialogs.wotPlusActivationDialog.core.description());
const A = { descriptionStringParams: JSON.stringify({ date: '24. 12. 2025' }), benefits: JSON.stringify(D) },
    I = { label: R.strings.dialogs.wotPlusActivationDialog.benefits.tankerBanner(), type: 'tanker_banner' },
    B = R.images.gui.maps.icons.subscription.activation_dialog.background_pro();
R.images.gui.maps.icons.subscription.activation_dialog.background_core();
const O = {
        pro_6: {
            content: {
                descriptionStringParams: JSON.stringify({
                    planInterval: R.strings.dialogs.wotPlusActivationDialog.planInterval6(),
                    date: '24. 12. 2025',
                }),
                emphasizedBenefits: JSON.stringify(z),
                benefits: JSON.stringify(D),
            },
        },
        pro_12: {
            backgroundImage: B,
            content: {
                ...A,
                descriptionStringParams: JSON.stringify({
                    planInterval: R.strings.dialogs.wotPlusActivationDialog.planInterval12(),
                    date: '24. 12. 2025',
                }),
                emphasizedBenefits: JSON.stringify(z),
                benefits: JSON.stringify(D),
            },
            resources: S,
        },
        core_steam: { resources: { titleString: R.strings.dialogs.wotPlusActivationDialog.cn.heading() } },
        cn: {
            content: { benefits: JSON.stringify([...D, I]) },
            resources: { titleString: R.strings.dialogs.wotPlusActivationDialog.cn.heading() },
        },
    },
    { content: k, resources: J, ...L } = O.pro_12;
(l.fromObject(k), l.fromObject(J));
const U = {
        base: 'BenefitList_1bd95cb5',
        wrapper: 'BenefitList_wrapper_fe67d7f7',
        benefit: 'BenefitList_benefit_1c535c60',
        benefit_wrapper: 'BenefitList_benefit_wrapper_40b9d16',
        benefit_label: 'BenefitList_benefit_label_f9b9fe45',
        benefit__emphasized: 'BenefitList_benefit__emphasized_8840aef',
    },
    T = e(function ({
        className: e,
        classNames: a = {},
        label: t,
        type: n,
        imageUriTemplate: o,
        size: l = '80x80',
        emphasized: g = !1,
    }) {
        const d = o.replace('{{size}}', `c_${l}`).replace('{{type}}', n),
            [m, p] = l.split('x').map(Number);
        return i.jsx('div', {
            className: s(U.benefit, e, g && U.benefit__emphasized),
            children: i.jsxs('div', {
                className: s(U.benefit_wrapper, e),
                style: { maxWidth: `${m + 20}rem` },
                children: [
                    i.jsx(c, { src: d, fit: 'contain', className: s(U.benefit_icon, a.image), width: m, height: p }),
                    i.jsx(r, { text: t, className: s(U.benefit_label, a.label) }),
                ],
            }),
        });
    }),
    C = a(t(n({ label: o(), type: o() }))),
    E = { xs: '64x64', m: '80x80' },
    q = { xs: '100x100', l: '150x150' },
    G = e(function ({
        className: e,
        classNames: a,
        paramsPath: t = 'benefits',
        imageUriTemplate: n,
        emphasized: o = !1,
        sizing: l = E,
    }) {
        const c = l.xs,
            r = l.m ?? l.xs,
            d = l.l ?? l.m ?? l.xs,
            m = l.xl ?? l.l ?? l.m ?? l.xs,
            { model: p } = _(),
            { benefitSize: b } = g(
                { benefitSize: c },
                { medium: { benefitSize: r }, large: { benefitSize: d }, extraLarge: { benefitSize: m } },
            ),
            u = p.computes.getParsedContent(t, C, false);
        return u
            ? i.jsx('div', {
                  className: s(U.base, e, o && U.base__emphasized),
                  children: i.jsx('div', {
                      className: U.wrapper,
                      children: u.map((e) =>
                          i.jsx(
                              T,
                              {
                                  className: null == a ? void 0 : a.benefit,
                                  classNames: {
                                      label: null == a ? void 0 : a.label,
                                      image: null == a ? void 0 : a.image,
                                  },
                                  emphasized: o,
                                  imageUriTemplate: n,
                                  type: e.type,
                                  label: e.label,
                                  size: b,
                              },
                              e.type,
                          ),
                      ),
                  }),
              })
            : null;
    }),
    M = 'SideImage_109b8ca',
    $ = 'SideImage_image_e09cdce0',
    F = 'SideImage_glow_9814931f',
    V = e(function ({ className: e, classNames: a }) {
        const { model: t } = _(),
            n = t.computes.getResource('iconImage', false),
            o = t.computes.getResource('iconGlowImage', false);
        return n
            ? i.jsxs('div', {
                  className: s(M, e),
                  children: [
                      i.jsx(c, { className: s($, null == a ? void 0 : a.image), src: n, fit: 'contain' }),
                      o && i.jsx(c, { className: s(F, e, null == a ? void 0 : a.glow), src: o, fit: 'contain' }),
                  ],
              })
            : null;
    }),
    W = 'Index_body_d18bc871',
    X = 'Index_main_20bd2c1e',
    H = 'Index_aside_cebb2516',
    K = 'Index_emphasizedBenefits_d6979b70',
    Q = 'Index_benefits_e04cc6e8',
    Y = 'Index_title_e8853572',
    Z = 'Index_description_51c077a',
    ee = 'R.images.gui.maps.icons.subscription.activation_dialog.benefits.{{size}}.{{type}}',
    ie = e(function () {
        const { model: e, controls: s } = _(),
            a = e.buttons.get().length > 0;
        return (
            d(m.ESCAPE, () => {
                s.onAction(f.escape);
            }),
            i.jsxs(v, {
                children: [
                    i.jsx(x, {}),
                    i.jsxs('div', {
                        className: W,
                        children: [
                            i.jsx('div', { className: H, children: i.jsx(V, {}) }),
                            i.jsxs('div', {
                                className: X,
                                children: [
                                    i.jsx(h, { className: Y }),
                                    i.jsx(w, { className: Z }),
                                    i.jsx(G, {
                                        className: K,
                                        paramsPath: 'emphasizedBenefits',
                                        imageUriTemplate: ee,
                                        sizing: q,
                                        emphasized: !0,
                                    }),
                                    i.jsx(G, { className: Q, paramsPath: 'benefits', imageUriTemplate: ee }),
                                    a && i.jsx(N, {}),
                                ],
                            }),
                        ],
                    }),
                    i.jsx(P, {}),
                    i.jsx(y, {}),
                ],
            })
        );
    });
p(i.jsx(b, { children: i.jsx(j, { children: i.jsx(ie, {}) }) }));
