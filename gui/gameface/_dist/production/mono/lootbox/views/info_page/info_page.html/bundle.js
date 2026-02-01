import { o as e, k as s, f as a, n as t, j as o, e as i, r, m as n } from '../../../chunks/vendor.js';
import {
    i as c,
    m as l,
    f as d,
    s as m,
    p as u,
    c as _,
    h as b,
    j as h,
    R as x,
    k as f,
    l as p,
    I as g,
    n as v,
    o as N,
    q as j,
    t as k,
    F as w,
    D as y,
    v as C,
    w as T,
    d as L,
    x as S,
    T as B,
    r as P,
} from '../../../chunks/lib.js';
import { C as I, c as R, a as D, g as A } from '../../../chunks/resources.js';
import { g as M } from '../../../chunks/getConfig.js';
import { S as $ } from '../../../chunks/sounds.js';
import { L as H } from '../../../chunks/loupe_button.js';
import { T as V } from '../../../chunks/tank_name.js';
import { g as E, o as F, l as O } from '../../../chunks/getRewardImage.js';
import { f as q, i as G } from '../../../chunks/utils.js';
import { B as X } from '../../../chunks/big_button.js';
const W = {
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
    z = { dynamicTexts: { boxNames: 'common.boxCategory.lowerCase', rewardsPremiumDay: 'common.rewards.premiumDay' } },
    [J, K] = c()(
        ({ observableModel: a }) => {
            const t = a.object().get().eventName,
                o = {
                    root: a.object(),
                    boxes: a.arrayClone('boxes'),
                    hasDescription: e.box(M(t, I.InfoPage).hasDescription),
                    sticky: e.box(!1),
                    activeCategory: e.box(''),
                    eventName: t,
                },
                i = s((e) => {
                    const s = [];
                    return (
                        l(e, (e) => {
                            if (R.includes(e.name)) {
                                const a = d(s, (s) => s.name === e.name);
                                if (void 0 !== a)
                                    return void m(s, a, { ...s[a], value: `${s[a].value} %(divider) ${e.value}` });
                            }
                            u(s, e);
                        }),
                        s
                    );
                }),
                r = s(
                    (e) => {
                        const s = b(o.boxes.get(), (s) => s.category === e);
                        if (!s) throw new Error(`Box with category ${e} is not found`);
                        return s;
                    },
                    { equals: _ },
                ),
                n = s(
                    (e) => {
                        const s = r(e).slots;
                        return s ? l(s, (e) => ({ probability: e.probability, bonuses: i(e.bonuses.items) })) : [];
                    },
                    { equals: _ },
                ),
                c = s((e) => r(e).guaranteedLimit, { equals: _ }),
                h = s(() => D(W, t)),
                x = s(() => A(z, t)),
                f = s(() => o.boxes.get().length > 1);
            return {
                ...o,
                computes: { getSlots: n, getGuaranteed: c, resources: h, dynamicResources: x, displayTabs: f },
            };
        },
        ({ externalModel: e, model: s, cleanup: o }) => {
            const i = a((e) => {
                s.activeCategory.get() !== e && s.activeCategory.set(e);
            });
            return (
                o(
                    t(() => {
                        const { chosenCategory: e } = s.root.get();
                        i(e);
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
    Q = { base: 'Divider_d6e02c14', base__first: 'Divider_base__first_d2793de3' };
function U({ isFirst: e = !1 }) {
    return o.jsx('div', { className: i(Q.base, e && Q.base__first) });
}
const Y = 'Content_8eaaf71a';
const Z = {
        base__fraction: 'ComplexNumber_base__fraction_1b24306e',
        unitsName: 'ComplexNumber_unitsName_1b24306e',
        fraction: 'ComplexNumber_fraction_c9ed5457',
        base: 'ComplexNumber_b295d3a2',
        integer: 'ComplexNumber_integer_61932fde',
    },
    ee = (e) => {
        if (Number.isInteger(e)) return { integer: String(e), separator: '', fraction: '' };
        const s = h.resolve('intl').formatReal('fractional', e),
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
    };
function se({ probability: e, unitsName: s }) {
    const { integer: a, separator: t, fraction: r } = ee(e),
        n = e % 1 > 0;
    return o.jsxs('div', {
        className: i(Z.base, n && Z.base__fraction),
        children: [
            o.jsxs('div', { className: Z.integer, children: [a, t] }),
            Boolean(r) && o.jsx('span', { className: Z.fraction, children: r }),
            o.jsx('div', { className: Z.unitsName, children: s }),
        ],
    });
}
const ae = 'Probability_b2962f58';
const te = {
    root: 'Title_root_2e63cf3',
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
function oe({ reward: e, texts: s, className: a }) {
    const { name: t, value: r, label: n } = e,
        c = t === x.PremiumPlus,
        l = t === x.TmanToken,
        d = r
            .split(' %(divider) ')
            .sort((e, s) => Number(e) - Number(s))
            .join(' %(divider) ');
    return o.jsxs('div', {
        className: i(te.base, te[`base__${t}`], a),
        children: [
            r &&
                !l &&
                o.jsxs('div', {
                    className: te.title,
                    children: [
                        o.jsx(f, {
                            text: q(d),
                            binding: { divider: o.jsx('span', { className: te.label, children: s.divider }) },
                            classMix: i(te.name, c && te.name__aligned),
                        }),
                        c &&
                            o.jsx('span', {
                                className: te.pluralText,
                                children: s.premiumDay(Number(r.split(' ').at(-1))),
                            }),
                    ],
                }),
            o.jsx(f, { text: n, classMix: te.label }),
        ],
    });
}
const ie = 'Reward_2801b9c',
    re = 'Reward_rewardImage_16a3dbae',
    ne = 'Reward_icon_fb678067',
    ce = 'Reward_icon__semiTransparent_54390a49',
    le = 'Reward_icon__hovered_ec5f1ec2',
    de = 'Reward_overlay_a7650b10',
    me = 'Reward_count_1f55fab4',
    ue = 'Reward_checkmark_5d7fcdff',
    _e = 'Reward_loupeButton_20f8acb7',
    be = 'Reward_loupeIcon_966a3d73',
    he = 'Reward_tankName_c3434962';
const xe = 'Rewards_b3634f8b';
const fe = { base: 'RewardBlock_5c12840f' };
function pe({ children: e, classNames: s }) {
    return o.jsxs('div', { className: i(fe.base, s), children: [e, o.jsx(U, {})] });
}
((pe.Content = function ({ children: e, classNames: s }) {
    return o.jsx('div', { className: i(Y, s), children: e });
}),
    (pe.Probability = function ({ probability: e, unitsName: s, classNames: a }) {
        return o.jsx('div', { className: i(ae, a), children: o.jsx(se, { probability: e, unitsName: s }) });
    }),
    (pe.Rewards = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(xe, s), children: e });
    }),
    (pe.Reward = function ({
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
                tooltipContentId: b,
                count: h,
                overlayType: v,
                styleID: N,
                isInHangar: j,
                icon: k,
            } = e,
            [w, y] = r.useState(!1),
            C = m === x.Vehicles;
        return o.jsxs('div', {
            className: ie,
            children: [
                o.jsx(p, {
                    ignoreShowDelay: !0,
                    contentId: Number(b),
                    args: { tooltipId: _, boxCategory: k, eventName: a },
                    children: o.jsxs('div', {
                        className: re,
                        onMouseEnter: () => {
                            G(e) && y(!0);
                        },
                        onMouseLeave: () => y(!1),
                        children: [
                            o.jsx('div', {
                                className: i(ne, j && ce, w && le),
                                style: { backgroundImage: `url(${E(e)})` },
                            }),
                            v &&
                                o.jsx('div', {
                                    className: de,
                                    style: { backgroundImage: `url(${F(g.S180x135, m, v)})` },
                                }),
                            j && o.jsx('div', { className: ue, style: { backgroundImage: `url(${l.checkmark})` } }),
                            h > 1 &&
                                o.jsx('div', {
                                    className: me,
                                    children: o.jsx(f, {
                                        text: d.rewardsMultiplier,
                                        binding: { count: h },
                                        formatWithBrackets: !0,
                                    }),
                                }),
                            G(e) &&
                                o.jsx(H, {
                                    className: _e,
                                    icon: { img: l.previewIcon, className: be },
                                    onClick: () => {
                                        (c(t), n({ bonusType: m, bonusId: u || '', styleID: N }));
                                    },
                                }),
                        ],
                    }),
                }),
                C
                    ? o.jsx(V, { reward: e, style: { nameHeight: '14rem' }, className: he, hasShortName: !0 })
                    : o.jsx(oe, { reward: e, texts: { divider: d.divider, premiumDay: d.premiumDay } }),
            ],
        });
    }));
const ge = 'Shadow_bf167c05',
    ve = 'Shadow_shadowSlice_72a105f9',
    Ne = 'Shadow_shadowSlice__middle_57439790';
const je = 'Tab_80082bae',
    ke = 'Tab_image_8d117dd4',
    we = 'Tab_box_86eb6858',
    ye = 'Tab_base__hover_0',
    Ce = 'Tab_base__active_0',
    Te = 'Tab_title_a5c917ce',
    Le = 'Tab_shine_b3052800';
const Se = 'TabList_87138e48';
const Be = { base: 'Tabs_1545335a' };
function Pe({ className: e, forwardRef: s, children: a }) {
    return o.jsx('div', { className: i(Be.base, e), ref: s, children: a });
}
((Pe.Tab = function ({ category: e, resources: s, sticky: a, activeCategory: t, saveCategory: n }) {
    const [c, l] = r.useState(!1),
        { images: d, sounds: m, texts: u } = s,
        _ = t === e,
        b = () => {
            _ || (v.sound(m.click), n(e));
        },
        h = () => {
            (_ || v.sound(m.hover), l(!0));
        };
    return o.jsxs('div', {
        className: i(je, c && ye, _ && Ce),
        children: [
            o.jsx('div', {
                className: ke,
                children: o.jsx('div', {
                    className: we,
                    style: { backgroundImage: `url(${O('s600x450', e)})` },
                    onMouseEnter: h,
                    onMouseLeave: () => l(!1),
                    onClick: b,
                }),
            }),
            o.jsx('div', { className: Le, style: { backgroundImage: `url(${d.shine})` } }),
            !a &&
                o.jsx('div', {
                    className: Te,
                    onMouseEnter: h,
                    onMouseLeave: () => l(!1),
                    onClick: b,
                    children: u.title(e),
                }),
        ],
    });
}),
    (Pe.TabList = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(Se, s), children: e });
    }),
    (Pe.Shadow = function ({ images: e }) {
        return o.jsxs('div', {
            className: ge,
            children: [
                o.jsx('img', { className: ve, src: e.shadowLeft }),
                o.jsx('img', { className: i(Ne, ve), src: e.shadowMiddle }),
                o.jsx('img', { className: ve, src: e.shadowRight }),
            ],
        });
    }));
const Ie = h.resolve('views').read((e) => e.mono.lootbox.tooltips.box_tooltip('resId'));
const Re = n(function ({ className: e, forwardRef: s }) {
        const { model: a, controls: t } = K(),
            { images: i, sounds: r } = a.computes.resources(),
            { dynamicTexts: n } = a.computes.dynamicResources(),
            c = a.boxes.get(),
            d = a.sticky.get(),
            m = a.activeCategory.get(),
            u = a.eventName,
            _ = { shadowLeft: i.shadowLeft, shadowMiddle: i.shadowMiddle, shadowRight: i.shadowRight },
            b = {
                images: { shine: i.tabShine },
                sounds: { hover: r.infoPageTabHover, click: r.infoPageTabClick },
                texts: { title: (e) => n.boxNames.dynOpt(e) },
            };
        return o.jsxs(Pe, {
            className: e,
            forwardRef: s,
            children: [
                o.jsx(Pe.TabList, {
                    children: l(c, (e) =>
                        o.jsx(
                            N,
                            {
                                params: { contentId: Ie, args: { boxCategory: e.category, eventName: u } },
                                children: o.jsx(
                                    Pe.Tab,
                                    {
                                        category: e.category,
                                        resources: b,
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
                o.jsx(Pe.Shadow, { images: _ }),
            ],
        });
    }),
    De = {
        base: 'Content_d65784d',
        tabs__hide: 'Content_tabs__hide_eb9be4e6',
        rewardBlock: 'Content_rewardBlock_513f629c',
    };
const Ae = n(function ({ scrollApi: e }) {
        const { model: s, controls: a } = K(),
            { texts: t, images: n } = s.computes.resources(),
            { dynamicTexts: c } = s.computes.dynamicResources(),
            d = s.activeCategory.get(),
            m = s.eventName,
            u = s.sticky.get(),
            _ = s.computes.getSlots(d),
            b = s.computes.displayTabs(),
            h = r.useRef(null),
            x = {
                images: { checkmark: n.checkmark, previewIcon: n.previewIcon },
                texts: {
                    rewardsMultiplier: t.rewardsMultiplier,
                    divider: t.rewardsDivider,
                    premiumDay: (e) => c.rewardsPremiumDay.plural('premiumDay', e),
                },
            };
        return (
            r.useEffect(() => {
                const s = (e) => {
                    a.setSticky(Boolean(h.current && e.value.scrollPosition >= h.current.offsetTop));
                };
                return (
                    e.events.on('change', s),
                    () => {
                        e.events.off('change', s);
                    }
                );
            }, [a, e.events]),
            o.jsxs('div', {
                className: De.base,
                children: [
                    b
                        ? o.jsx(Re, { className: i(De.tabs, u && De.tabs__hide), forwardRef: h })
                        : o.jsx(U, { isFirst: !0 }),
                    o.jsx('div', {
                        children: l(_, ({ probability: e, bonuses: s }, i) =>
                            o.jsx(
                                pe,
                                {
                                    classNames: De.rewardBlock,
                                    children: o.jsxs(pe.Content, {
                                        children: [
                                            o.jsx(pe.Probability, { probability: e, unitsName: t.rewardsPercent }),
                                            o.jsx(pe.Rewards, {
                                                children: l(s, (e, s) =>
                                                    o.jsx(
                                                        pe.Reward,
                                                        {
                                                            reward: e,
                                                            activeCategory: d,
                                                            eventName: m,
                                                            saveCategory: a.saveCategory,
                                                            showPreview: a.showPreview,
                                                            resources: x,
                                                        },
                                                        s,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                },
                                i,
                            ),
                        ),
                    }),
                ],
            })
        );
    }),
    Me = {
        base: 'TextBlock_a2d952f',
        title: 'TextBlock_title_d152d79f',
        description: 'TextBlock_description_5db34e07',
    };
function $e({ title: e, description: s, className: a }) {
    return o.jsxs('div', {
        className: i(Me.base, a),
        children: [
            o.jsx('div', { className: Me.title, children: e }),
            o.jsx('div', { className: Me.description, children: s }),
        ],
    });
}
const He = 'Footer_4604fd6b',
    Ve = 'Footer_text_384f7588',
    Ee = 'Footer_textBlock_e36860cc';
function Fe(e, s) {
    return j(e, (e) => s(e.category) > 0);
}
function Oe(e, s, a) {
    const t = k(e, (e, a, t) => ((e[`guaranteed${t}`] = s(a.category)), e), {});
    return o.jsx(w, { text: a, params: t, upgradeLegacy: !0 });
}
const qe = n(function () {
        const { model: e } = K(),
            { texts: s } = e.computes.resources(),
            a = e.boxes.get(),
            t = e.computes.getGuaranteed;
        return o.jsx('div', {
            className: He,
            children: o.jsxs('div', {
                className: Ve,
                children: [
                    Fe(a, t) &&
                        o.jsx($e, {
                            title: s.titleGuaranteed,
                            description: Oe(a, t, s.descriptionGuaranteed),
                            className: Ee,
                        }),
                    o.jsx($e, { title: s.titleCompensation, description: s.descriptionCompensation, className: Ee }),
                    o.jsx($e, { title: s.titleAutoOpen, description: s.descriptionAutoOpen, className: Ee }),
                ],
            }),
        });
    }),
    Ge = { base: 'ExternalLink_3e4af53', text: 'ExternalLink_text_c8545bfe', icon: 'ExternalLink_icon_887a2bf3' };
function Xe({ text: e, icon: s, onClick: a, classNames: t }) {
    return o.jsxs('div', {
        className: i(Ge.base, t),
        onClick: a,
        children: [
            o.jsx('div', { className: Ge.text, children: e }),
            o.jsx('div', { className: Ge.icon, style: { backgroundImage: `url(${s})` } }),
        ],
    });
}
const We = 'Button_a211aeba';
const ze = 'Content_a26f6580';
const Je = 'Description_d9500488';
const Ke = 'LootLink_951fc13b';
const Qe = 'Subtitle_816e5b9e';
const Ue = 'Title_852f27cf';
const Ye = 'VideoButton_26790f4';
const Ze = { base: 'Header_bc33b80e' };
function es({ children: e, classNames: s }) {
    return o.jsx('div', { className: i(Ze.base, s), children: e });
}
((es.Button = function ({ children: e, classNames: s }) {
    return o.jsx('div', { className: i(We, s), children: e });
}),
    (es.VideoButton = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(Ye, s), children: e });
    }),
    (es.Content = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(ze, s), children: e });
    }),
    (es.Description = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(Je, s), children: e });
    }),
    (es.Subtitle = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(Qe, s), children: e });
    }),
    (es.Title = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(Ue, s), children: e });
    }),
    (es.LootLink = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(Ke, s), children: e });
    }));
const ss = {
    base: 'VideoButton_48d93b73',
    videoIcon: 'VideoButton_videoIcon_bc784850',
    videoText: 'VideoButton_videoText_a951280b',
};
function as({ onClick: e, text: s }) {
    return o.jsxs('div', {
        className: ss.base,
        onMouseEnter: v.highlight,
        onClick: function () {
            (v.click(), e());
        },
        children: [o.jsx('div', { className: ss.videoIcon }), o.jsx('div', { className: ss.videoText, children: s })],
    });
}
const ts = 'Header_lootLink_526646ae',
    os = 'Header_description_3cd4f9ef',
    is = 'Header_subtitle_4a9a6a75',
    rs = 'Header_button_dc4dfa71';
const ns = n(function () {
        const { model: e, controls: s } = K(),
            { texts: a, images: t, sounds: i } = e.computes.resources(),
            { hasVideoButton: r, hasShopButton: n, startDate: c, endDate: l, hasLootListLink: d } = e.root.get(),
            m = e.hasDescription.get();
        return o.jsxs(es, {
            children: [
                o.jsxs(es.Content, {
                    children: [
                        o.jsx(es.Title, { children: a.headerTitle }),
                        o.jsx(es.Subtitle, {
                            classNames: is,
                            children: o.jsx(f, {
                                text: a.headerSubtitle,
                                binding: {
                                    from: o.jsx(y, { datetime: c, format: C.FullDate }),
                                    to: o.jsx(y, { datetime: l, format: C.FullDate }),
                                },
                            }),
                        }),
                        m &&
                            o.jsx(es.Description, {
                                classNames: os,
                                children: o.jsx(f, { text: a.headerDescription }),
                            }),
                        d &&
                            o.jsx(es.LootLink, {
                                classNames: ts,
                                children: o.jsx(Xe, {
                                    text: a.lootListLink,
                                    icon: t.externalLinkSmall,
                                    onClick: s.showLootList,
                                }),
                            }),
                        n &&
                            o.jsx(es.Button, {
                                classNames: rs,
                                children: o.jsx(X, {
                                    text: a.headerShopButton,
                                    onClick: s.showShop,
                                    soundHover: i.purchaseHover,
                                }),
                            }),
                    ],
                }),
                r &&
                    o.jsx(es.VideoButton, {
                        children: o.jsx(as, { onClick: s.showVideo, text: a.headerVideoButtonText }),
                    }),
            ],
        });
    }),
    cs = 'App_64fd6dfc',
    ls = 'App_shadow_dde54256',
    ds = 'App_scroll_54c70e4',
    ms = 'App_scrollBar_2ae0a958',
    us = 'App_scrollArea_59a9c25',
    _s = 'App_content_9af800a',
    bs = 'App_stickyTabs_66711e9',
    hs = 'App_stickyTabs__show_4c7ff591',
    xs = 'App_backButton_26dc4949';
const fs = n(function () {
    const e = K(),
        { model: s, controls: a } = e,
        { images: t, texts: r, sounds: n } = s.computes.resources(),
        c = s.sticky.get(),
        l = s.computes.displayTabs(),
        d = T();
    return (
        L(a.close),
        o.jsxs('div', {
            className: cs,
            style: { backgroundImage: `url(${t.background})` },
            children: [
                o.jsx('div', {
                    className: ls,
                    style: { maskImage: `url(${t.mask})` },
                    children: o.jsx(S.Vertical.Default, {
                        api: d,
                        className: ds,
                        barClassNames: { base: ms },
                        scrollClassNames: { content: us },
                        children: o.jsxs('div', {
                            className: _s,
                            children: [o.jsx(ns, {}), o.jsx(Ae, { scrollApi: d }), o.jsx(qe, {})],
                        }),
                    }),
                }),
                l && o.jsx('div', { className: i(bs, c && hs), children: o.jsx(Re, {}) }),
                o.jsx('div', {
                    className: xs,
                    children: o.jsx(B, { caption: r.backButton, type: 'back', side: 'left', onClick: a.close }),
                }),
            ],
        })
    );
});
P(o.jsx(J, { children: o.jsx(fs, {}) }));
