import { m as e, j as s, e as a, n as t, r as c } from '../../../../chunks/vendor.js';
import {
    i as n,
    c as r,
    z as o,
    J as i,
    K as l,
    j as m,
    m as d,
    F as u,
    L as _,
    I as p,
    M as y,
    N as h,
    q as g,
    r as b,
    A as f,
} from '../../../../chunks/lib.js';
import { T as x, L as v, g as j } from '../../../../chunks/statistics.js';
import { a as w, g as N } from '../../../../chunks/resources.js';
import { T as C } from '../../../../chunks/tank_name.js';
import { V as k } from '../../../../chunks/vehicle_info.js';
import { g as L } from '../../../../chunks/getRewardImage.js';
const A = {
        texts: {
            multiplier: 'common.rewards.multiplier',
            vehicle: 'statisticsRewards.tooltips.category.vehicle',
            name: 'statisticsRewards.tooltips.category.name',
            nameCount: 'statisticsRewards.tooltips.category.nameCount',
            style3D: 'statisticsRewards.tooltips.category.style3D',
            label: 'statisticsRewards.tooltips.category.label',
            vehicleCompensation: 'statisticsRewards.tooltips.category.vehicleCompensation',
            styleCompensation: 'statisticsRewards.tooltips.category.styleCompensation',
            attachment: 'statisticsRewards.tooltips.category.attachment',
        },
    },
    I = {
        dynamicTexts: {
            category: 'statisticsRewards.label',
            compensationCount: 'common.rewards.count',
            hiddenRewardsCount: 'statisticsRewards.tooltips.category.hiddenRewardsCount',
        },
    },
    [$, T] = n()(({ observableModel: s }) => {
        const a = {
                root: s.object(),
                ...s.primitives(['bonusesCategory', 'eventName', 'compensatedCount']),
                bonuses: s.array('bonuses.items'),
            },
            t = e(() => w(A, a.eventName.get()), { equals: r }),
            c = e(() => N(I, a.eventName.get()), { equals: r }),
            n = e(() => a.bonuses.get(), { equals: r });
        return { ...a, computes: { bonuses: n, resources: t, dynamicResources: c } };
    }, o),
    S = (e, s) => {
        switch (e) {
            case x.Style3D:
                return s.style3D;
            case x.Vehicles:
                return s.vehicle;
            case x.Attachment:
                return s.attachment;
            default:
                return s.name;
        }
    },
    q = {
        root: 'AttachmentRarity_root_43c6f01c',
        base: 'AttachmentRarity_da893673',
        icoWrapper: 'AttachmentRarity_icoWrapper_f4b68af1',
        ico: 'AttachmentRarity_ico_f4c561ab',
        text: 'AttachmentRarity_text_df05f94a',
        base__rare: 'AttachmentRarity_base__rare_43c6f01c',
        base__epic: 'AttachmentRarity_base__epic_43c6f01c',
        base__legendary: 'AttachmentRarity_base__legendary_43c6f01c',
        fadeIn: 'AttachmentRarity_fadeIn_43c6f01c',
    };
function M({ rarity: e }) {
    const t = m.resolve('strings');
    return s.jsxs('div', {
        className: a(q.base, q[`base__${e}`]),
        children: [
            s.jsx('div', {
                className: q.icoWrapper,
                children: s.jsx('div', {
                    className: q.ico,
                    style: {
                        backgroundImage: `url(${R.images.gui.maps.icons.customization.rarity.sign.s20x20.$dyn(e)})`,
                    },
                }),
            }),
            s.jsx('div', {
                className: q.text,
                children: t.readOrEmpty(`vehicle_customization.customization.rarity.${e}`),
            }),
        ],
    });
}
const z = 'List_3e9032c6',
    D = 'List_row_fefcbc15',
    E = 'List_compensation_2b1d48d6',
    V = 'List_compensation__big_90932e64',
    W = 'List_count_827893bb',
    B = 'List_name_d7c1cd7d',
    F = 'List_vehicleType_7f88ba1e',
    H = t(function () {
        const { model: e } = T(),
            { texts: t } = e.computes.resources(),
            { dynamicTexts: c } = e.computes.dynamicResources(),
            n = e.bonusesCategory.get(),
            r = e.compensatedCount.get(),
            o = e.computes.bonuses();
        return s.jsxs('div', {
            className: z,
            children: [
                d(o, (a, c) => {
                    const { vehicle: n, label: r, count: o } = a,
                        i = n && { label: n.vehicleName, level: n.vehicleLvl, type: n.vehicleType, isElite: n.isElite };
                    return s.jsx(
                        u,
                        {
                            className: D,
                            text: S(e.bonusesCategory.get(), t),
                            upgradeLegacy: !0,
                            params: {
                                num: c + 1,
                                name: s.jsx(u, {
                                    text: t.label,
                                    upgradeLegacy: !0,
                                    params: { label: r },
                                    className: B,
                                }),
                                label: a.label,
                                vehicle: i ? s.jsx(C, { reward: i, style: { nameHeight: '16rem' }, className: B }) : '',
                                vehicleInfo: n ? s.jsx(k, { ...n, classNames: { base: B, type: F } }) : '',
                                count:
                                    o > 1
                                        ? s.jsx(u, {
                                              text: t.nameCount,
                                              upgradeLegacy: !0,
                                              params: { count: o },
                                              className: W,
                                          })
                                        : '',
                                rarity: s.jsx(M, { rarity: a.icon }),
                            },
                        },
                        c,
                    );
                }),
                Boolean(r) &&
                    s.jsx(u, {
                        className: a(E, o.length && V),
                        text: n === x.Vehicles ? t.vehicleCompensation : t.styleCompensation,
                        upgradeLegacy: !0,
                        params: {
                            count: s.jsx(u, {
                                className: W,
                                text: c.compensationCount.plural('count', r),
                                upgradeLegacy: !0,
                                params: { count: r },
                            }),
                        },
                    }),
            ],
        });
    }),
    J = 'Skills_b058d2b1',
    K = 'Skills_skill_8ccace3c';
function O({ skills: e = [], className: t = '' }) {
    return s.jsx('div', {
        className: a(J, t),
        children: e.map((e, a) =>
            s.jsx(
                'div',
                {
                    className: K,
                    style: { backgroundImage: `url('R.images.gui.maps.icons.tankmen.skills.medium.${e}')` },
                },
                `${e}_${a}`,
            ),
        ),
    });
}
const G = {
        root: 'Reward_root_21f091ec',
        base: 'Reward_6c767796',
        icon: 'Reward_icon_bb33f955',
        overlay: 'Reward_overlay_ee910109',
        count: 'Reward_count_d04a747',
        description: 'Reward_description_82ad0f86',
        name: 'Reward_name_d63928d9',
        skills: 'Reward_skills_b1d62052',
        fadeIn: 'Reward_fadeIn_21f091ec',
    },
    P = t(function ({ reward: e, className: t }) {
        const { model: c } = T(),
            n = c.bonusesCategory.get(),
            { texts: r } = c.computes.resources(),
            { count: o, label: i, overlayType: l, name: m, icon: u, tankman: h, value: g } = e,
            b = { name: m, icon: u, value: g };
        return s.jsxs('div', {
            className: a(G.base, t),
            children: [
                s.jsxs('div', {
                    className: G.icon,
                    style: { backgroundImage: `url(${L(b, p.Small)})` },
                    children: [
                        o > 1 && s.jsx('div', { className: G.count, children: _(r.multiplier, { count: o }) }),
                        Boolean(l) &&
                            s.jsx('div', {
                                className: a(G.overlay, G[`overlay__${p.Small}`]),
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${p.Small}.${l}_overlay)`,
                                },
                            }),
                    ],
                }),
                s.jsxs('div', {
                    className: G.description,
                    children: [
                        s.jsx('div', { className: G.name, children: y(i) }),
                        n === x.CrewMember && s.jsx(O, { skills: d(h.skills, (e) => e), className: G.skills }),
                    ],
                }),
            ],
        });
    }),
    Q = 'Rewards_e3c609b4',
    U = 'Rewards_reward_e4f396cf',
    X = 'Rewards_reward__last_8dfd597c',
    Y = 'Rewards_rewardsLeft_f415fe92',
    Z = 'Rewards_count_2fe5263a',
    ee = t(function () {
        const { model: e } = T(),
            { dynamicTexts: t } = e.computes.dynamicResources(),
            n = e.computes.bonuses(),
            r = h('rem').height,
            [o, m] = c.useState(n),
            [_, p] = c.useState(0);
        return (
            c.useEffect(() => {
                const e = Math.floor((r - 100) / 60);
                if (n.length > e) {
                    const t = [...i(n, 0, e - 1)],
                        c = [...((s = n), (a = n.length - e), i(s, Math.max(0, s.length - a), l(s)))],
                        r = g(c, (e, s) => e + s.count, 0);
                    (m(t), p(r));
                }
                var s, a;
            }, [n, r]),
            s.jsxs('div', {
                className: Q,
                children: [
                    d(o, (e, t) => s.jsx(P, { reward: e, className: a(U, t === o.length - 1 && X) }, t)),
                    _ > 0 &&
                        s.jsx('div', {
                            className: Y,
                            children: s.jsx(u, {
                                text: t.hiddenRewardsCount.plural('hiddenRewardsCount', _),
                                upgradeLegacy: !0,
                                params: { count: s.jsx('div', { className: Z, children: _ }) },
                            }),
                        }),
                ],
            })
        );
    }),
    se = 'Content_15fab6f0',
    ae = t(function () {
        const { model: e } = T(),
            a = e.bonusesCategory.get();
        return s.jsx('div', { className: se, children: v.includes(a) ? s.jsx(H, {}) : s.jsx(ee, {}) });
    }),
    te = 'App_4978ff0e',
    ce = 'App_title_6b3cec5f',
    ne = t(function () {
        const { model: e } = T(),
            { dynamicTexts: a } = e.computes.dynamicResources(),
            t = e.bonusesCategory.get(),
            c = a.category.dyn(j(t));
        return s.jsxs('div', {
            className: te,
            children: [s.jsx('div', { className: ce, children: c }), s.jsx(ae, {})],
        });
    });
b(s.jsx($, { children: s.jsx(f, { children: s.jsx(ne, {}) }) }));
