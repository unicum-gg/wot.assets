import { m as e, j as s, e as a, n as t, r as c } from '../../../../chunks/vendor.js';
import {
    i as n,
    c as r,
    A as i,
    K as o,
    L as l,
    o as m,
    m as d,
    a as u,
    M as _,
    I as p,
    N as y,
    O as h,
    w as g,
    r as b,
    E as x,
} from '../../../../chunks/lib.js';
import { T as f, L as v, g as j } from '../../../../chunks/statistics.js';
import { a as w, g as N } from '../../../../chunks/resources.js';
import { T as C } from '../../../../chunks/tank_name.js';
import { V as k } from '../../../../chunks/vehicle_info.js';
import { g as L } from '../../../../chunks/getRewardImage.js';
/* empty css                       */ const A = {
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
    $ = {
        dynamicTexts: {
            category: 'statisticsRewards.label',
            compensationCount: 'common.rewards.count',
            hiddenRewardsCount: 'statisticsRewards.tooltips.category.hiddenRewardsCount',
        },
    },
    [I, T] = n()(({ observableModel: s }) => {
        const a = {
                root: s.object(),
                ...s.primitives(['bonusesCategory', 'eventName', 'compensatedCount']),
                bonuses: s.arrayClone('bonuses.items'),
            },
            t = e(() => w(A, a.eventName.get()), { equals: r }),
            c = e(() => N($, a.eventName.get()), { equals: r }),
            n = e(() => a.bonuses.get(), { equals: r });
        return { ...a, computes: { bonuses: n, resources: t, dynamicResources: c } };
    }, i),
    S = (e, s) => {
        switch (e) {
            case f.Style3D:
                return s.style3D;
            case f.Vehicles:
                return s.vehicle;
            case f.Attachment:
                return s.attachment;
            default:
                return s.name;
        }
    },
    E = {
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
        className: a(E.base, E[`base__${e}`]),
        children: [
            s.jsx('div', {
                className: E.icoWrapper,
                children: s.jsx('div', {
                    className: E.ico,
                    style: {
                        backgroundImage: `url(${R.images.gui.maps.icons.customization.rarity.sign.s20x20.$dyn(e)})`,
                    },
                }),
            }),
            s.jsx('div', {
                className: E.text,
                children: t.readOrEmpty(`vehicle_customization.customization.rarity.${e}`),
            }),
        ],
    });
}
const q = 'List_3e9032c6',
    B = 'List_row_fefcbc15',
    D = 'List_compensation_2b1d48d6',
    z = 'List_compensation__big_90932e64',
    V = 'List_count_827893bb',
    W = 'List_name_d7c1cd7d',
    O = 'List_vehicleType_7f88ba1e',
    G = t(function () {
        const { model: e } = T(),
            { texts: t } = e.computes.resources(),
            { dynamicTexts: c } = e.computes.dynamicResources(),
            n = e.bonusesCategory.get(),
            r = e.compensatedCount.get(),
            i = e.computes.bonuses();
        return s.jsxs('div', {
            className: q,
            children: [
                d(i, (a, c) => {
                    const { vehicle: n, label: r, count: i } = a,
                        o = n && { label: n.vehicleName, level: n.vehicleLvl, type: n.vehicleType, isElite: n.isElite };
                    return s.jsx(
                        u,
                        {
                            className: B,
                            text: S(e.bonusesCategory.get(), t),
                            upgradeLegacy: !0,
                            params: {
                                num: c + 1,
                                name: s.jsx(u, {
                                    text: t.label,
                                    upgradeLegacy: !0,
                                    params: { label: r },
                                    className: W,
                                }),
                                label: a.label,
                                vehicle: o ? s.jsx(C, { reward: o, style: { nameHeight: '16rem' }, className: W }) : '',
                                vehicleInfo: n ? s.jsx(k, { ...n, classNames: { base: W, type: O } }) : '',
                                count:
                                    i > 1
                                        ? s.jsx(u, {
                                              text: t.nameCount,
                                              upgradeLegacy: !0,
                                              params: { count: i },
                                              className: V,
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
                        className: a(D, i.length && z),
                        text: n === f.Vehicles ? t.vehicleCompensation : t.styleCompensation,
                        upgradeLegacy: !0,
                        params: {
                            count: s.jsx(u, {
                                className: V,
                                text: c.compensationCount.plural('count', r),
                                upgradeLegacy: !0,
                                params: { count: r },
                            }),
                        },
                    }),
            ],
        });
    }),
    H = 'Skills_b058d2b1',
    K = 'Skills_skill_8ccace3c';
function F({ skills: e = [], className: t = '' }) {
    return s.jsx('div', {
        className: a(H, t),
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
const J = {
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
            { count: i, label: o, overlayType: l, name: m, icon: u, tankman: h, value: g } = e,
            b = { name: m, icon: u, value: g };
        return s.jsxs('div', {
            className: a(J.base, t),
            children: [
                s.jsxs('div', {
                    className: J.icon,
                    style: { backgroundImage: `url(${L(b, p.Small)})` },
                    children: [
                        i > 1 && s.jsx('div', { className: J.count, children: _(r.multiplier, { count: i }) }),
                        Boolean(l) &&
                            s.jsx('div', {
                                className: a(J.overlay, J[`overlay__${p.Small}`]),
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${p.Small}.${l}_overlay)`,
                                },
                            }),
                    ],
                }),
                s.jsxs('div', {
                    className: J.description,
                    children: [
                        s.jsx('div', { className: J.name, children: y(o) }),
                        n === f.CrewMember && s.jsx(F, { skills: d(h.skills, (e) => e), className: J.skills }),
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
            [i, m] = c.useState(n),
            [_, p] = c.useState(0);
        return (
            c.useEffect(() => {
                const e = Math.floor((r - 100) / 60);
                if (n.length > e) {
                    const t = [...o(n, 0, e - 1)],
                        c = [...((s = n), (a = n.length - e), o(s, Math.max(0, s.length - a), l(s)))],
                        r = g(c, (e, s) => e + s.count, 0);
                    (m(t), p(r));
                }
                var s, a;
            }, [n, r]),
            s.jsxs('div', {
                className: Q,
                children: [
                    d(i, (e, t) => s.jsx(P, { reward: e, className: a(U, t === i.length - 1 && X) }, t)),
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
        return s.jsx('div', { className: se, children: v.includes(a) ? s.jsx(G, {}) : s.jsx(ee, {}) });
    }),
    te = 'App_4978ff0e',
    ce = 'App_title_6b3cec5f',
    ne = [f.CrewBook, f.Guide, f.Brochure],
    re = t(function () {
        const { model: e } = T(),
            { dynamicTexts: a } = e.computes.dynamicResources(),
            t = e.bonusesCategory.get(),
            c = a.category.dyn(
                ((e) => {
                    const s = j(e);
                    return ne.includes(e) ? `${s}_tooltip` : s;
                })(t),
            );
        return s.jsxs('div', {
            className: te,
            children: [s.jsx('div', { className: ce, children: c }), s.jsx(ae, {})],
        });
    });
b(s.jsx(I, { children: s.jsx(x, { children: s.jsx(re, {}) }) }));
