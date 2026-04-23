import { n as e, j as s, e as a, m as n } from '../../../../chunks/vendor.js';
import {
    i as o,
    a3 as t,
    t as i,
    F as c,
    r,
    a4 as l,
    a5 as d,
    m as _,
    h as m,
    J as u,
    Y as b,
    a6 as p,
    C as h,
    n as x,
    a7 as f,
    j as w,
    U as g,
} from '../../../../chunks/lib.js';
import { B as j } from '../../../../chunks/background.js';
import { g as N } from '../../../../chunks/resources.js';
import { a as y, T as v, f as T, I as B, C as k, g as A, b as P, i as C } from '../../../../chunks/reward.js';
const [E, S] = o()(
        ({ observableModel: s }) => {
            const a = {
                    root: s.object(),
                    bonuses: s.array('bonuses'),
                    ...s.primitives(['bundleType', 'isButtonDisabled']),
                },
                n = e(() => t(a.bonuses.get(), 0)),
                o = e(() => i(a.bonuses.get(), (e, s) => 0 !== s));
            return { ...a, computes: { mainBonus: n, additionalBonuses: o } };
        },
        ({ externalModel: e }) => ({
            showPreview: e.createCallback((e, s) => ({ bonusType: e, bonusId: s }), 'onShowReward'),
        }),
    ),
    I = 'Count_9e5d70af';
function $({ count: e, className: n = '' }) {
    return s.jsx(c, {
        text: R.strings.open_bundle_lobby_default.notifications.specialReward.multiplier(),
        params: { count: e },
        className: a(I, n),
    });
}
const U = 'Name_b707f363',
    H = 'Name_label_f455243a';
function M({ reward: e, className: n = '' }) {
    const { name: o, label: t } = e;
    return s.jsx('div', {
        className: a(U, n),
        children:
            o === y.vehicles
                ? s.jsx(v, { reward: e, style: { nameHeight: '18rem' } })
                : s.jsx(c, { split: !0, className: H, text: T(t) }),
    });
}
const z = {
        root: 'Reward_root_21f091ec',
        base: 'Reward_7179eaa8',
        base__main: 'Reward_base__main_93fc57c',
        image: 'Reward_image_fff4eee5',
        highlight: 'Reward_highlight_f1cd08e0',
        overlay: 'Reward_overlay_76a9c830',
        base__trophy: 'Reward_base__trophy_21f091ec',
        count: 'Reward_count_39163b1',
        base__additional: 'Reward_base__additional_21f091ec',
        base__battle_bonus_x5: 'Reward_base__battle_bonus_x5_21f091ec',
        base__crew_bonus_x3: 'Reward_base__crew_bonus_x3_21f091ec',
        description: 'Reward_description_66c1a2d7',
    },
    D = 'main',
    O = 'additional',
    Y = r.resolve('images'),
    Q = [l.EQUIPMENT_TROPHY_BASIC, l.EQUIPMENT_TROPHY_UPGRADED],
    q = n(function ({ reward: e, type: n = O, className: o = '' }) {
        const { count: t, name: i, icon: c, overlayType: r } = e,
            l = n === O ? B.Big : B.S180x135,
            _ = k.includes(i),
            m = Q.includes(i),
            u = n !== O || _,
            b = t > 1,
            p = d(B.S180x135, r);
        return s.jsxs('div', {
            className: a(z.base, z[`base__${n}`], z[`base__${c}`], m && z.base__trophy, o),
            children: [
                p &&
                    s.jsx(j, {
                        image: Y.readOrEmpty(`quests.bonuses.${B.S180x135}.${p}_highlight`, 'silent'),
                        className: z.highlight,
                    }),
                s.jsx(j, { image: A(e, l), className: z.image }),
                r && s.jsx(j, { image: P({ size: B.S180x135, name: i, special: r }), className: z.overlay }),
                b && s.jsx($, { count: t, className: z.count }),
                u && s.jsx(M, { reward: e, className: z.description }),
            ],
        });
    }),
    F = 'AdditionalRewards_972e0751',
    G = 'AdditionalRewards_base__wide_7eba2b21',
    J = n(function () {
        const { model: e } = S(),
            n = e.computes.additionalBonuses();
        return s.jsx('div', {
            className: a(F, n.length >= 3 && G),
            children: _(n, (e, a) => s.jsx(q, { reward: e }, `${e.name}_${a}`)),
        });
    }),
    V = 'Header_75ff486e';
function K({ bundleType: e }) {
    const { getText: a } = N(e);
    return s.jsx('div', {
        className: V,
        children: s.jsx(c, { text: a('notifications.specialReward.title'), params: { eventName: a('bundle.name') } }),
    });
}
const L = 'Preview_d1fe5e07',
    W = 'Preview_button_95fc3ad0',
    X = n(function ({ className: e = '' }) {
        const { model: a, controls: n } = S(),
            o = a.bundleType.get(),
            { getText: t } = N(o),
            i = a.computes.mainBonus();
        return s.jsx('div', {
            className: L,
            children: s.jsx(m, {
                className: W,
                theme: b.secondary,
                size: u.small,
                onClick: function () {
                    n.showPreview(i.name, i.id);
                },
                children:
                    i.name === y.vehicles
                        ? t('notifications.specialReward.showVehicle')
                        : t('notifications.specialReward.showStyle'),
            }),
        });
    }),
    Z = 'App_background_bb0bfe54',
    ee = 'App_eda219f2',
    se = 'App_base__popup_58df188b',
    ae = 'App_close_17e179e2',
    ne = 'App_content_c85f25d3',
    oe = 'App_main_23219c42',
    te = n(function () {
        const { model: e } = S(),
            { isPopUp: n } = e.root.get(),
            o = e.bundleType.get(),
            { getExtImage: t } = N(o),
            i = e.computes.mainBonus(),
            c = e.computes.additionalBonuses();
        return s.jsxs(p, {
            className: a(ee, n && se),
            children: [
                s.jsx(j, { image: t('specialRewardsNotification.background'), className: Z }),
                n && s.jsx(h, { size: f.small, onClose: x, className: ae }),
                s.jsxs('div', {
                    className: ne,
                    children: [
                        s.jsx(K, { bundleType: o }),
                        Boolean(i) && s.jsx(q, { reward: i, type: D, className: oe }),
                        c.length > 0 && s.jsx(J, {}),
                        Boolean(i) && C(i) && s.jsx(X, {}),
                    ],
                }),
            ],
        });
    });
w(s.jsx(E, { children: s.jsx(g, { children: s.jsx(te, {}) }) })).then(x);
