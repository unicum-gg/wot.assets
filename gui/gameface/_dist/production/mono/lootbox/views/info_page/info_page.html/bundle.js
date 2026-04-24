import { o as e, m as s, f as a, p as t, j as o, e as r, r as i, n } from '../../../chunks/vendor.js';
import {
    i as c,
    m as l,
    k as d,
    l as m,
    p as u,
    c as _,
    n as h,
    o as b,
    R as p,
    F as x,
    q as f,
    I as g,
    t as v,
    v as N,
    s as j,
    w as k,
    a as w,
    D as y,
    x as C,
    y as T,
    e as L,
    z as S,
    T as B,
    r as P,
} from '../../../chunks/lib.js';
import { C as R, c as I, a as D, g as A } from '../../../chunks/resources.js';
import { g as M } from '../../../chunks/getConfig.js';
import { S as $ } from '../../../chunks/sounds.js';
import { g as H, o as V, l as E } from '../../../chunks/getRewardImage.js';
import { f as F, i as O } from '../../../chunks/utils.js';
import { L as q } from '../../../chunks/loupe_button.js';
import { T as G } from '../../../chunks/tank_name.js';
import { B as X } from '../../../chunks/big_button.js';
/* empty css                    */ const z = {
        images: {
            background: 'infopage.background',
            mask: 'infopage.mask',
            checkmark: 'infopage.checkmark',
            previewIcon: 'common.previewIcon',
            externalLinkSmall: 'common.externalLinkSmall',
            shadowLeft: 'infopage.shadowLeft',
            shadowMiddle: 'infopage.shadowMiddle',
            shadowRight: 'infopage.shadowRight',
            tabShine: 'infopage.tabShine',
        },
        texts: {
            backButton: 'common.backButton',
            titleGuaranteed: 'infoPage.footer.title.guaranteed',
            descriptionGuaranteed: 'infoPage.footer.description.guaranteed',
            titleCompensation: 'infoPage.footer.title.compensation',
            descriptionCompensation: 'infoPage.footer.description.compensation',
            titleAutoOpen: 'infoPage.footer.title.autoOpen',
            descriptionAutoOpen: 'infoPage.footer.description.autoOpen',
            headerTitle: 'eventName.upperCase',
            headerSubtitle: 'infoPage.header.subtitle',
            headerDescription: 'infoPage.header.description',
            lootListLink: 'infoPage.header.lootListLink',
            headerShopButton: 'common.getButton.lowerCase',
            headerVideoButtonText: 'infoPage.header.videoButtonText',
            rewardsMultiplier: 'common.rewards.multiplier',
            rewardsDivider: 'infoPage.rewards.divider',
            rewardsPercent: 'infoPage.rewards.percent',
        },
        sounds: {
            purchaseClick: $.purchaseClick,
            purchaseHover: $.purchaseHover,
            infoPageTabClick: $.infoPageTabClick,
            infoPageTabHover: $.infoPageTabHover,
        },
    },
    W = { dynamicTexts: { boxNames: 'common.boxCategory.lowerCase', rewardsPremiumDay: 'common.rewards.premiumDay' } },
    [J, K] = c()(
        ({ observableModel: a }) => {
            const t = a.object().get().eventName,
                o = {
                    root: a.object(),
                    boxes: a.arrayClone('boxes'),
                    hasDescription: e.box(M(t, R.InfoPage).hasDescription),
                    sticky: e.box(!1),
                    activeCategory: e.box(''),
                    eventName: t,
                },
                r = s((e) => {
                    const s = [];
                    return (
                        l(e, (e) => {
                            if (I.includes(e.name)) {
                                const a = d(s, (s) => s.name === e.name);
                                if (void 0 !== a)
                                    return void m(s, a, { ...s[a], value: `${s[a].value} %(divider) ${e.value}` });
                            }
                            u(s, e);
                        }),
                        s
                    );
                }),
                i = s(
                    (e) => {
                        const s = h(o.boxes.get(), (s) => s.category === e);
                        if (!s) throw new Error(`Box with category ${e} is not found`);
                        return s;
                    },
                    { equals: _ },
                ),
                n = s(
                    (e) => {
                        const s = i(e).slots;
                        return s ? l(s, (e) => ({ probability: e.probability, bonuses: r(e.bonuses.items) })) : [];
                    },
                    { equals: _ },
                ),
                c = s((e) => i(e).guaranteedLimit, { equals: _ }),
                b = s(() => D(z, t)),
                p = s(() => A(W, t)),
                x = s(() => o.boxes.get().length > 1);
            return {
                ...o,
                computes: { getSlots: n, getGuaranteed: c, resources: b, dynamicResources: p, displayTabs: x },
            };
        },
        ({ externalModel: e, model: s, cleanup: o }) => {
            const r = a((e) => {
                s.activeCategory.get() !== e && s.activeCategory.set(e);
            });
            return (
                o(
                    t(() => {
                        const { chosenCategory: e } = s.root.get();
                        r(e);
                    }),
                ),
                {
                    showShop: e.createCallbackNoArgs('onShowShop'),
                    showVideo: e.createCallbackNoArgs('onShowVideo'),
                    showLootList: e.createCallbackNoArgs('onShowLootList'),
                    close: e.createCallbackNoArgs('onClose'),
                    showPreview: e.createCallback((e) => e, 'onPreview'),
                    saveCategory: e.createCallback((e) => ({ chosenCategory: e }), 'onChosenCategory'),
                    setSticky: a((e) => s.sticky.set(e)),
                }
            );
        },
    ),
    Q = 'Divider_d6e02c14',
    U = 'Divider_base__first_d2793de3';
function Y({ isFirst: e = !1 }) {
    return o.jsx('div', { className: r(Q, e && U) });
}
const Z = 'Content_8eaaf71a';
const ee = 'ComplexNumber_base__fraction_1b24306e',
    se = 'ComplexNumber_unitsName_1b24306e',
    ae = 'ComplexNumber_fraction_c9ed5457',
    te = 'ComplexNumber_b295d3a2',
    oe = 'ComplexNumber_integer_61932fde';
function re({ probability: e, unitsName: s }) {
    const {
            integer: a,
            separator: t,
            fraction: i,
        } = ((e) => {
            if (Number.isInteger(e)) return { integer: String(e), separator: '', fraction: '' };
            const s = b.resolve('intl').formatReal('fractional', e),
                a = s.match(/[^0-9]/);
            if (a) {
                const e = a[0],
                    t = s.indexOf(e);
                return { integer: s.substring(0, t), separator: e, fraction: s.substring(t + 1).replace(/^|0+$/g, '') };
            }
            return (
                console.warn(`number isn't an integer or contains an unsupported separator ${e}`),
                { integer: String(e), separator: '', fraction: '' }
            );
        })(e),
        n = e % 1 > 0;
    return o.jsxs('div', {
        className: r(te, n && ee),
        children: [
            o.jsxs('div', { className: oe, children: [a, t] }),
            Boolean(i) && o.jsx('span', { className: ae, children: i }),
            o.jsx('div', { className: se, children: s }),
        ],
    });
}
const ie = 'Probability_b2962f58';
const ne = {
    base: 'Title_953a4d89',
    title: 'Title_4a8f0758',
    name: 'Title_name_db913f2d',
    name__aligned: 'Title_name__aligned_fe2cac3',
    base__credits: 'Title_base__credits_2e63cf3',
    base__equipCoin: 'Title_base__equipCoin_2e63cf3',
    base__freeXP: 'Title_base__freeXP_2e63cf3',
    base__bptaler: 'Title_base__bptaler_2e63cf3',
    base__crystal: 'Title_base__crystal_2e63cf3',
    base__gold: 'Title_base__gold_2e63cf3',
    base__premium_plus: 'Title_base__premium_plus_2e63cf3',
    pluralText: 'Title_pluralText_5286007c',
    label: 'Title_label_ad626d6',
    fadeIn: 'Title_fadeIn_2e63cf3',
};
function ce({ reward: e, texts: s, className: a }) {
    const { name: t, value: i, label: n } = e,
        c = t === p.PremiumPlus,
        l = t === p.TmanToken,
        d = i
            .split(' %(divider) ')
            .sort((e, s) => Number(e) - Number(s))
            .join(' %(divider) ');
    return o.jsxs('div', {
        className: r(ne.base, ne[`base__${t}`], a),
        children: [
            i &&
                !l &&
                o.jsxs('div', {
                    className: ne.title,
                    children: [
                        o.jsx(x, {
                            text: F(d),
                            binding: { divider: o.jsx('span', { className: ne.label, children: s.divider }) },
                            classMix: r(ne.name, c && ne.name__aligned),
                        }),
                        c &&
                            o.jsx('span', {
                                className: ne.pluralText,
                                children: s.premiumDay(Number(i.split(' ').at(-1))),
                            }),
                    ],
                }),
            o.jsx(x, { text: n, classMix: ne.label }),
        ],
    });
}
const le = 'Reward_2801b9c',
    de = 'Reward_rewardImage_16a3dbae',
    me = 'Reward_icon_fb678067',
    ue = 'Reward_icon__semiTransparent_54390a49',
    _e = 'Reward_icon__hovered_ec5f1ec2',
    he = 'Reward_overlay_a7650b10',
    be = 'Reward_count_1f55fab4',
    pe = 'Reward_checkmark_5d7fcdff',
    xe = 'Reward_loupeButton_20f8acb7',
    fe = 'Reward_loupeIcon_966a3d73',
    ge = 'Reward_tankName_c3434962';
const ve = 'Rewards_b3634f8b';
const Ne = 'RewardBlock_5c12840f';
function je({ children: e, classNames: s }) {
    return o.jsxs('div', { className: r(Ne, s), children: [e, o.jsx(Y, {})] });
}
((je.Content = function ({ children: e, classNames: s }) {
    return o.jsx('div', { className: r(Z, s), children: e });
}),
    (je.Probability = function ({ probability: e, unitsName: s, classNames: a }) {
        return o.jsx('div', { className: r(ie, a), children: o.jsx(re, { probability: e, unitsName: s }) });
    }),
    (je.Rewards = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: r(ve, s), children: e });
    }),
    (je.Reward = function ({
        reward: e,
        resources: s,
        eventName: a,
        activeCategory: t,
        showPreview: n,
        saveCategory: c,
    }) {
        const { images: l, texts: d } = s,
            {
                name: m,
                id: u,
                tooltipId: _,
                tooltipContentId: h,
                count: b,
                overlayType: v,
                styleID: N,
                isInHangar: j,
                icon: k,
            } = e,
            [w, y] = i.useState(!1),
            C = m === p.Vehicles;
        return o.jsxs('div', {
            className: le,
            children: [
                o.jsx(f, {
                    ignoreShowDelay: !0,
                    contentId: Number(h),
                    args: { tooltipId: _, boxCategory: k, eventName: a },
                    children: o.jsxs('div', {
                        className: de,
                        onMouseEnter: () => {
                            O(e) && y(!0);
                        },
                        onMouseLeave: () => y(!1),
                        children: [
                            o.jsx('div', {
                                className: r(me, j && ue, w && _e),
                                style: { backgroundImage: `url(${H(e)})` },
                            }),
                            v &&
                                o.jsx('div', {
                                    className: he,
                                    style: { backgroundImage: `url(${V(g.S180x135, m, v)})` },
                                }),
                            j && o.jsx('div', { className: pe, style: { backgroundImage: `url(${l.checkmark})` } }),
                            b > 1 &&
                                o.jsx('div', {
                                    className: be,
                                    children: o.jsx(x, {
                                        text: d.rewardsMultiplier,
                                        binding: { count: b },
                                        formatWithBrackets: !0,
                                    }),
                                }),
                            O(e) &&
                                o.jsx(q, {
                                    className: xe,
                                    icon: { img: l.previewIcon, className: fe },
                                    onClick: () => {
                                        (c(t), n({ bonusType: m, bonusId: u || '', styleID: N }));
                                    },
                                }),
                        ],
                    }),
                }),
                C
                    ? o.jsx(G, { reward: e, style: { nameHeight: '14rem' }, className: ge, hasShortName: !0 })
                    : o.jsx(ce, { reward: e, texts: { divider: d.divider, premiumDay: d.premiumDay } }),
            ],
        });
    }));
const ke = 'Shadow_bf167c05',
    we = 'Shadow_shadowSlice_72a105f9',
    ye = 'Shadow_shadowSlice__middle_57439790';
const Ce = 'Tab_80082bae',
    Te = 'Tab_image_8d117dd4',
    Le = 'Tab_box_86eb6858',
    Se = 'Tab_base__hover_0',
    Be = 'Tab_base__active_0',
    Pe = 'Tab_title_a5c917ce',
    Re = 'Tab_shine_b3052800';
const Ie = 'TabList_87138e48';
const De = 'Tabs_1545335a';
function Ae({ className: e, forwardRef: s, children: a }) {
    return o.jsx('div', { className: r(De, e), ref: s, children: a });
}
((Ae.Tab = function ({ category: e, resources: s, sticky: a, activeCategory: t, saveCategory: n }) {
    const [c, l] = i.useState(!1),
        { images: d, sounds: m, texts: u } = s,
        _ = t === e,
        h = () => {
            _ || (v.sound(m.click), n(e));
        },
        b = () => {
            (_ || v.sound(m.hover), l(!0));
        };
    return o.jsxs('div', {
        className: r(Ce, c && Se, _ && Be),
        children: [
            o.jsx('div', {
                className: Te,
                children: o.jsx('div', {
                    className: Le,
                    style: { backgroundImage: `url(${E('s600x450', e)})` },
                    onMouseEnter: b,
                    onMouseLeave: () => l(!1),
                    onClick: h,
                }),
            }),
            o.jsx('div', { className: Re, style: { backgroundImage: `url(${d.shine})` } }),
            !a &&
                o.jsx('div', {
                    className: Pe,
                    onMouseEnter: b,
                    onMouseLeave: () => l(!1),
                    onClick: h,
                    children: u.title(e),
                }),
        ],
    });
}),
    (Ae.TabList = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: r(Ie, s), children: e });
    }),
    (Ae.Shadow = function ({ images: e }) {
        return o.jsxs('div', {
            className: ke,
            children: [
                o.jsx('img', { className: we, src: e.shadowLeft }),
                o.jsx('img', { className: r(ye, we), src: e.shadowMiddle }),
                o.jsx('img', { className: we, src: e.shadowRight }),
            ],
        });
    }));
const Me = b.resolve('views').read((e) => e.mono.lootbox.tooltips.box_tooltip('resId'));
const $e = n(function ({ className: e, forwardRef: s }) {
        const { model: a, controls: t } = K(),
            { images: r, sounds: i } = a.computes.resources(),
            { dynamicTexts: n } = a.computes.dynamicResources(),
            c = a.boxes.get(),
            d = a.sticky.get(),
            m = a.activeCategory.get(),
            u = a.eventName,
            _ = { shadowLeft: r.shadowLeft, shadowMiddle: r.shadowMiddle, shadowRight: r.shadowRight },
            h = {
                images: { shine: r.tabShine },
                sounds: { hover: i.infoPageTabHover, click: i.infoPageTabClick },
                texts: { title: (e) => n.boxNames.dynOpt(e) },
            };
        return o.jsxs(Ae, {
            className: e,
            forwardRef: s,
            children: [
                o.jsx(Ae.TabList, {
                    children: l(c, (e) =>
                        o.jsx(
                            N,
                            {
                                params: { contentId: Me, args: { boxCategory: e.category, eventName: u } },
                                children: o.jsx(
                                    Ae.Tab,
                                    {
                                        category: e.category,
                                        resources: h,
                                        saveCategory: t.saveCategory,
                                        activeCategory: m,
                                        sticky: d,
                                    },
                                    e.category,
                                ),
                            },
                            e.category,
                        ),
                    ),
                }),
                o.jsx(Ae.Shadow, { images: _ }),
            ],
        });
    }),
    He = {
        base: 'Content_d65784d',
        tabs__hide: 'Content_tabs__hide_eb9be4e6',
        rewardBlock: 'Content_rewardBlock_513f629c',
    };
const Ve = n(function ({ scrollApi: e }) {
        const { model: s, controls: a } = K(),
            { texts: t, images: n } = s.computes.resources(),
            { dynamicTexts: c } = s.computes.dynamicResources(),
            d = s.activeCategory.get(),
            m = s.eventName,
            u = s.sticky.get(),
            _ = s.computes.getSlots(d),
            h = s.computes.displayTabs(),
            b = i.useRef(null),
            p = {
                images: { checkmark: n.checkmark, previewIcon: n.previewIcon },
                texts: {
                    rewardsMultiplier: t.rewardsMultiplier,
                    divider: t.rewardsDivider,
                    premiumDay: (e) => c.rewardsPremiumDay.plural('premiumDay', e),
                },
            };
        return (
            i.useEffect(() => {
                const s = (e) => {
                    a.setSticky(Boolean(b.current && e.value.scrollPosition >= b.current.offsetTop));
                };
                return (
                    e.events.on('change', s),
                    () => {
                        e.events.off('change', s);
                    }
                );
            }, [a, e.events]),
            o.jsxs('div', {
                className: He.base,
                children: [
                    h
                        ? o.jsx($e, { className: r(He.tabs, u && He.tabs__hide), forwardRef: b })
                        : o.jsx(Y, { isFirst: !0 }),
                    o.jsx('div', {
                        children: l(_, ({ probability: e, bonuses: s }, r) =>
                            o.jsx(
                                je,
                                {
                                    classNames: He.rewardBlock,
                                    children: o.jsxs(je.Content, {
                                        children: [
                                            o.jsx(je.Probability, { probability: e, unitsName: t.rewardsPercent }),
                                            o.jsx(je.Rewards, {
                                                children: l(s, (e, s) =>
                                                    o.jsx(
                                                        je.Reward,
                                                        {
                                                            reward: e,
                                                            activeCategory: d,
                                                            eventName: m,
                                                            saveCategory: a.saveCategory,
                                                            showPreview: a.showPreview,
                                                            resources: p,
                                                        },
                                                        s,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                },
                                r,
                            ),
                        ),
                    }),
                ],
            })
        );
    }),
    Ee = 'TextBlock_a2d952f',
    Fe = 'TextBlock_title_d152d79f',
    Oe = 'TextBlock_description_5db34e07';
function qe({ title: e, description: s, className: a }) {
    return o.jsxs('div', {
        className: r(Ee, a),
        children: [o.jsx('div', { className: Fe, children: e }), o.jsx('div', { className: Oe, children: s })],
    });
}
const Ge = 'Footer_4604fd6b',
    Xe = 'Footer_text_384f7588',
    ze = 'Footer_textBlock_e36860cc';
function We(e, s) {
    return j(e, (e) => s(e.category) > 0);
}
function Je(e, s, a) {
    const t = k(e, (e, a, t) => ((e[`guaranteed${t}`] = s(a.category)), e), {});
    return o.jsx(w, { text: a, params: t, upgradeLegacy: !0 });
}
const Ke = n(function () {
        const { model: e } = K(),
            { texts: s } = e.computes.resources(),
            a = e.boxes.get(),
            t = e.computes.getGuaranteed;
        return o.jsx('div', {
            className: Ge,
            children: o.jsxs('div', {
                className: Xe,
                children: [
                    We(a, t) &&
                        o.jsx(qe, {
                            title: s.titleGuaranteed,
                            description: Je(a, t, s.descriptionGuaranteed),
                            className: ze,
                        }),
                    o.jsx(qe, { title: s.titleCompensation, description: s.descriptionCompensation, className: ze }),
                    o.jsx(qe, { title: s.titleAutoOpen, description: s.descriptionAutoOpen, className: ze }),
                ],
            }),
        });
    }),
    Qe = 'ExternalLink_3e4af53',
    Ue = 'ExternalLink_text_c8545bfe',
    Ye = 'ExternalLink_icon_887a2bf3';
function Ze({ text: e, icon: s, onClick: a, classNames: t }) {
    return o.jsxs('div', {
        className: r(Qe, t),
        onClick: a,
        children: [
            o.jsx('div', { className: Ue, children: e }),
            o.jsx('div', { className: Ye, style: { backgroundImage: `url(${s})` } }),
        ],
    });
}
const es = 'Button_a211aeba';
const ss = 'Content_a26f6580';
const as = 'Description_d9500488';
const ts = 'LootLink_951fc13b';
const os = 'Subtitle_816e5b9e';
const rs = 'Title_852f27cf';
const is = 'VideoButton_26790f4';
const ns = 'Header_bc33b80e';
function cs({ children: e, classNames: s }) {
    return o.jsx('div', { className: r(ns, s), children: e });
}
((cs.Button = function ({ children: e, classNames: s }) {
    return o.jsx('div', { className: r(es, s), children: e });
}),
    (cs.VideoButton = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: r(is, s), children: e });
    }),
    (cs.Content = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: r(ss, s), children: e });
    }),
    (cs.Description = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: r(as, s), children: e });
    }),
    (cs.Subtitle = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: r(os, s), children: e });
    }),
    (cs.Title = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: r(rs, s), children: e });
    }),
    (cs.LootLink = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: r(ts, s), children: e });
    }));
const ls = 'VideoButton_48d93b73',
    ds = 'VideoButton_videoIcon_bc784850',
    ms = 'VideoButton_videoText_a951280b';
function us({ onClick: e, text: s }) {
    return o.jsxs('div', {
        className: ls,
        onMouseEnter: v.highlight,
        onClick: function () {
            (v.click(), e());
        },
        children: [o.jsx('div', { className: ds }), o.jsx('div', { className: ms, children: s })],
    });
}
const _s = 'Header_lootLink_526646ae',
    hs = 'Header_description_3cd4f9ef',
    bs = 'Header_subtitle_4a9a6a75',
    ps = 'Header_button_dc4dfa71';
const xs = n(function () {
        const { model: e, controls: s } = K(),
            { texts: a, images: t, sounds: r } = e.computes.resources(),
            { hasVideoButton: i, hasShopButton: n, startDate: c, endDate: l, hasLootListLink: d } = e.root.get(),
            m = e.hasDescription.get();
        return o.jsxs(cs, {
            children: [
                o.jsxs(cs.Content, {
                    children: [
                        o.jsx(cs.Title, { children: a.headerTitle }),
                        o.jsx(cs.Subtitle, {
                            classNames: bs,
                            children: o.jsx(x, {
                                text: a.headerSubtitle,
                                binding: {
                                    from: o.jsx(y, { datetime: c, format: C.FullDate }),
                                    to: o.jsx(y, { datetime: l, format: C.FullDate }),
                                },
                            }),
                        }),
                        m &&
                            o.jsx(cs.Description, {
                                classNames: hs,
                                children: o.jsx(x, { text: a.headerDescription }),
                            }),
                        d &&
                            o.jsx(cs.LootLink, {
                                classNames: _s,
                                children: o.jsx(Ze, {
                                    text: a.lootListLink,
                                    icon: t.externalLinkSmall,
                                    onClick: s.showLootList,
                                }),
                            }),
                        n &&
                            o.jsx(cs.Button, {
                                classNames: ps,
                                children: o.jsx(X, {
                                    text: a.headerShopButton,
                                    onClick: s.showShop,
                                    soundHover: r.purchaseHover,
                                }),
                            }),
                    ],
                }),
                i &&
                    o.jsx(cs.VideoButton, {
                        children: o.jsx(us, { onClick: s.showVideo, text: a.headerVideoButtonText }),
                    }),
            ],
        });
    }),
    fs = 'App_64fd6dfc',
    gs = 'App_shadow_eac0adb7',
    vs = 'App_scroll_54c70e4',
    Ns = 'App_scrollBar_2ae0a958',
    js = 'App_scrollArea_59a9c25',
    ks = 'App_content_9af800a',
    ws = 'App_stickyTabs_66711e9',
    ys = 'App_stickyTabs__show_4c7ff591',
    Cs = 'App_backButton_26dc4949';
const Ts = n(function () {
    const e = K(),
        { model: s, controls: a } = e,
        { images: t, texts: i, sounds: n } = s.computes.resources(),
        c = s.sticky.get(),
        l = s.computes.displayTabs(),
        d = T();
    return (
        L(a.close),
        o.jsxs('div', {
            className: fs,
            style: { backgroundImage: `url(${t.background})` },
            children: [
                o.jsx('div', {
                    className: gs,
                    style: { maskImage: `url(${t.mask})` },
                    children: o.jsx(S.Vertical.Default, {
                        api: d,
                        className: vs,
                        barClassNames: { base: Ns },
                        scrollClassNames: { content: js },
                        children: o.jsxs('div', {
                            className: ks,
                            children: [o.jsx(xs, {}), o.jsx(Ve, { scrollApi: d }), o.jsx(Ke, {})],
                        }),
                    }),
                }),
                l && o.jsx('div', { className: r(ws, c && ys), children: o.jsx($e, {}) }),
                o.jsx('div', {
                    className: Cs,
                    children: o.jsx(B, { caption: i.backButton, type: 'back', side: 'left', onClick: a.close }),
                }),
            ],
        })
    );
});
P(o.jsx(J, { children: o.jsx(Ts, {}) }));
