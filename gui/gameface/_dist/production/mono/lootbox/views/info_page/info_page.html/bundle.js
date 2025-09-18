import { o as e, m as s, f as a, p as t, j as o, e as i, r as n, n as r } from '../../../chunks/vendor.js';
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
    u as v,
    n as N,
    o as j,
    q as k,
    F as w,
    D as y,
    t as C,
    v as T,
    d as L,
    w as S,
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
                n = s(
                    (e) => {
                        const s = b(o.boxes.get(), (s) => s.category === e);
                        if (!s) throw new Error(`Box with category ${e} is not found`);
                        return s;
                    },
                    { equals: _ },
                ),
                r = s(
                    (e) => {
                        const s = n(e).slots;
                        return s ? l(s, (e) => ({ probability: e.probability, bonuses: i(e.bonuses.items) })) : [];
                    },
                    { equals: _ },
                ),
                c = s((e) => n(e).guaranteedLimit, { equals: _ }),
                h = s(() => D(W, t)),
                x = s(() => A(z, t)),
                f = s(() => o.boxes.get().length > 1);
            return {
                ...o,
                computes: { getSlots: r, getGuaranteed: c, resources: h, dynamicResources: x, displayTabs: f },
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
    const { integer: a, separator: t, fraction: n } = ee(e),
        r = e % 1 > 0;
    return o.jsxs('div', {
        className: i(Z.base, r && Z.base__fraction),
        children: [
            o.jsxs('div', { className: Z.integer, children: [a, t] }),
            Boolean(n) && o.jsx('span', { className: Z.fraction, children: n }),
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
    const { name: t, value: n, label: r } = e,
        c = t === x.PremiumPlus,
        l = t === x.TmanToken,
        d = n
            .split(' %(divider) ')
            .sort((e, s) => Number(e) - Number(s))
            .join(' %(divider) ');
    return o.jsxs('div', {
        className: i(te.base, te[`base__${t}`], a),
        children: [
            n &&
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
                                children: s.premiumDay(Number(n.split(' ').at(-1))),
                            }),
                    ],
                }),
            o.jsx(f, { text: r, classMix: te.label }),
        ],
    });
}
const ie = 'Reward_2801b9c',
    ne = 'Reward_rewardImage_16a3dbae',
    re = 'Reward_icon_fb678067',
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
        showPreview: r,
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
            [w, y] = n.useState(!1),
            C = m === x.Vehicles;
        return o.jsxs('div', {
            className: ie,
            children: [
                o.jsx(p, {
                    ignoreShowDelay: !0,
                    contentId: Number(b),
                    args: { tooltipId: _, boxCategory: k, eventName: a },
                    children: o.jsxs('div', {
                        className: ne,
                        onMouseEnter: () => {
                            G(e) && y(!0);
                        },
                        onMouseLeave: () => y(!1),
                        children: [
                            o.jsx('div', {
                                className: i(re, j && ce, w && le),
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
                                        (c(t), r({ bonusType: m, bonusId: u || '', styleID: N }));
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
((Pe.Tab = function ({ category: e, resources: s, sticky: a, activeCategory: t, saveCategory: r, eventName: c }) {
    const [l, d] = n.useState(!1),
        { images: m, sounds: u, texts: _ } = s,
        b = t === e,
        x = h.resolve('views'),
        f = v({
            contentId: x.read((e) => e.mono.lootbox.tooltips.box_tooltip('resId')),
            args: { boxCategory: e, eventName: c },
        }),
        p = () => {
            b || (N.sound(u.click), r(e));
        },
        g = () => {
            (b || N.sound(u.hover), d(!0));
        };
    return o.jsxs('div', {
        ...f,
        className: i(je, l && ye, b && Ce),
        children: [
            o.jsx('div', {
                className: ke,
                children: o.jsx('div', {
                    className: we,
                    style: { backgroundImage: `url(${O('s600x450', e)})` },
                    onMouseEnter: g,
                    onMouseLeave: () => d(!1),
                    onClick: p,
                }),
            }),
            o.jsx('div', { className: Le, style: { backgroundImage: `url(${m.shine})` } }),
            !a &&
                o.jsx('div', {
                    className: Te,
                    onMouseEnter: g,
                    onMouseLeave: () => d(!1),
                    onClick: p,
                    children: _.title(e),
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
const Ie = r(function ({ className: e, forwardRef: s }) {
        const { model: a, controls: t } = K(),
            { images: i, sounds: n } = a.computes.resources(),
            { dynamicTexts: r } = a.computes.dynamicResources(),
            c = a.boxes.get(),
            d = a.sticky.get(),
            m = a.activeCategory.get(),
            u = a.eventName,
            _ = { shadowLeft: i.shadowLeft, shadowMiddle: i.shadowMiddle, shadowRight: i.shadowRight },
            b = {
                images: { shine: i.tabShine },
                sounds: { hover: n.infoPageTabHover, click: n.infoPageTabClick },
                texts: { title: (e) => r.boxNames.dynOpt(e) },
            };
        return o.jsxs(Pe, {
            className: e,
            forwardRef: s,
            children: [
                o.jsx(Pe.TabList, {
                    children: l(c, (e) =>
                        o.jsx(
                            Pe.Tab,
                            {
                                category: e.category,
                                resources: b,
                                saveCategory: t.saveCategory,
                                activeCategory: m,
                                sticky: d,
                                eventName: u,
                            },
                            e.category,
                        ),
                    ),
                }),
                o.jsx(Pe.Shadow, { images: _ }),
            ],
        });
    }),
    Re = {
        base: 'Content_d65784d',
        tabs__hide: 'Content_tabs__hide_eb9be4e6',
        rewardBlock: 'Content_rewardBlock_513f629c',
    };
const De = r(function ({ scrollApi: e }) {
        const { model: s, controls: a } = K(),
            { texts: t, images: r } = s.computes.resources(),
            { dynamicTexts: c } = s.computes.dynamicResources(),
            d = s.activeCategory.get(),
            m = s.eventName,
            u = s.sticky.get(),
            _ = s.computes.getSlots(d),
            b = s.computes.displayTabs(),
            h = n.useRef(null),
            x = {
                images: { checkmark: r.checkmark, previewIcon: r.previewIcon },
                texts: {
                    rewardsMultiplier: t.rewardsMultiplier,
                    divider: t.rewardsDivider,
                    premiumDay: (e) => c.rewardsPremiumDay.plural('premiumDay', e),
                },
            };
        return (
            n.useEffect(() => {
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
                className: Re.base,
                children: [
                    b
                        ? o.jsx(Ie, { className: i(Re.tabs, u && Re.tabs__hide), forwardRef: h })
                        : o.jsx(U, { isFirst: !0 }),
                    o.jsx('div', {
                        children: l(_, ({ probability: e, bonuses: s }, i) =>
                            o.jsx(
                                pe,
                                {
                                    classNames: Re.rewardBlock,
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
    Ae = {
        base: 'TextBlock_a2d952f',
        title: 'TextBlock_title_d152d79f',
        description: 'TextBlock_description_5db34e07',
    };
function Me({ title: e, description: s, className: a }) {
    return o.jsxs('div', {
        className: i(Ae.base, a),
        children: [
            o.jsx('div', { className: Ae.title, children: e }),
            o.jsx('div', { className: Ae.description, children: s }),
        ],
    });
}
const $e = 'Footer_4604fd6b',
    He = 'Footer_text_384f7588',
    Ve = 'Footer_textBlock_e36860cc';
function Ee(e, s) {
    return j(e, (e) => s(e.category) > 0);
}
function Fe(e, s, a) {
    const t = k(e, (e, a, t) => ((e[`guaranteed${t}`] = s(a.category)), e), {});
    return o.jsx(w, { text: a, params: t, upgradeLegacy: !0 });
}
const Oe = r(function () {
        const { model: e } = K(),
            { texts: s } = e.computes.resources(),
            a = e.boxes.get(),
            t = e.computes.getGuaranteed;
        return o.jsx('div', {
            className: $e,
            children: o.jsxs('div', {
                className: He,
                children: [
                    Ee(a, t) &&
                        o.jsx(Me, {
                            title: s.titleGuaranteed,
                            description: Fe(a, t, s.descriptionGuaranteed),
                            className: Ve,
                        }),
                    o.jsx(Me, { title: s.titleCompensation, description: s.descriptionCompensation, className: Ve }),
                    o.jsx(Me, { title: s.titleAutoOpen, description: s.descriptionAutoOpen, className: Ve }),
                ],
            }),
        });
    }),
    qe = { base: 'ExternalLink_3e4af53', text: 'ExternalLink_text_c8545bfe', icon: 'ExternalLink_icon_887a2bf3' };
function Ge({ text: e, icon: s, onClick: a, classNames: t }) {
    return o.jsxs('div', {
        className: i(qe.base, t),
        onClick: a,
        children: [
            o.jsx('div', { className: qe.text, children: e }),
            o.jsx('div', { className: qe.icon, style: { backgroundImage: `url(${s})` } }),
        ],
    });
}
const Xe = 'Button_a211aeba';
const We = 'Content_a26f6580';
const ze = 'Description_d9500488';
const Je = 'LootLink_951fc13b';
const Ke = 'Subtitle_816e5b9e';
const Qe = 'Title_852f27cf';
const Ue = 'VideoButton_26790f4';
const Ye = { base: 'Header_bc33b80e' };
function Ze({ children: e, classNames: s }) {
    return o.jsx('div', { className: i(Ye.base, s), children: e });
}
((Ze.Button = function ({ children: e, classNames: s }) {
    return o.jsx('div', { className: i(Xe, s), children: e });
}),
    (Ze.VideoButton = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(Ue, s), children: e });
    }),
    (Ze.Content = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(We, s), children: e });
    }),
    (Ze.Description = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(ze, s), children: e });
    }),
    (Ze.Subtitle = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(Ke, s), children: e });
    }),
    (Ze.Title = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(Qe, s), children: e });
    }),
    (Ze.LootLink = function ({ children: e, classNames: s }) {
        return o.jsx('div', { className: i(Je, s), children: e });
    }));
const es = {
    base: 'VideoButton_48d93b73',
    videoIcon: 'VideoButton_videoIcon_bc784850',
    videoText: 'VideoButton_videoText_a951280b',
};
function ss({ onClick: e, text: s }) {
    return o.jsxs('div', {
        className: es.base,
        onMouseEnter: N.highlight,
        onClick: function () {
            (N.click(), e());
        },
        children: [o.jsx('div', { className: es.videoIcon }), o.jsx('div', { className: es.videoText, children: s })],
    });
}
const as = 'Header_lootLink_526646ae',
    ts = 'Header_description_3cd4f9ef',
    os = 'Header_subtitle_4a9a6a75',
    is = 'Header_button_dc4dfa71';
const ns = r(function () {
        const { model: e, controls: s } = K(),
            { texts: a, images: t, sounds: i } = e.computes.resources(),
            { hasVideoButton: n, hasShopButton: r, startDate: c, endDate: l, hasLootListLink: d } = e.root.get(),
            m = e.hasDescription.get();
        return o.jsxs(Ze, {
            children: [
                o.jsxs(Ze.Content, {
                    children: [
                        o.jsx(Ze.Title, { children: a.headerTitle }),
                        o.jsx(Ze.Subtitle, {
                            classNames: os,
                            children: o.jsx(f, {
                                text: a.headerSubtitle,
                                binding: {
                                    from: o.jsx(y, { datetime: c, format: C.FullDate }),
                                    to: o.jsx(y, { datetime: l, format: C.FullDate }),
                                },
                            }),
                        }),
                        m &&
                            o.jsx(Ze.Description, {
                                classNames: ts,
                                children: o.jsx(f, { text: a.headerDescription }),
                            }),
                        d &&
                            o.jsx(Ze.LootLink, {
                                classNames: as,
                                children: o.jsx(Ge, {
                                    text: a.lootListLink,
                                    icon: t.externalLinkSmall,
                                    onClick: s.showLootList,
                                }),
                            }),
                        r &&
                            o.jsx(Ze.Button, {
                                classNames: is,
                                children: o.jsx(X, {
                                    text: a.headerShopButton,
                                    onClick: s.showShop,
                                    soundHover: i.purchaseHover,
                                }),
                            }),
                    ],
                }),
                n &&
                    o.jsx(Ze.VideoButton, {
                        children: o.jsx(ss, { onClick: s.showVideo, text: a.headerVideoButtonText }),
                    }),
            ],
        });
    }),
    rs = 'App_64fd6dfc',
    cs = 'App_shadow_dde54256',
    ls = 'App_scroll_54c70e4',
    ds = 'App_scrollBar_2ae0a958',
    ms = 'App_scrollArea_59a9c25',
    us = 'App_content_9af800a',
    _s = 'App_stickyTabs_66711e9',
    bs = 'App_stickyTabs__show_4c7ff591',
    hs = 'App_backButton_26dc4949';
const xs = r(function () {
    const e = K(),
        { model: s, controls: a } = e,
        { images: t, texts: n, sounds: r } = s.computes.resources(),
        c = s.sticky.get(),
        l = s.computes.displayTabs(),
        d = T();
    return (
        L(a.close),
        o.jsxs('div', {
            className: rs,
            style: { backgroundImage: `url(${t.background})` },
            children: [
                o.jsx('div', {
                    className: cs,
                    style: { maskImage: `url(${t.mask})` },
                    children: o.jsx(S.Vertical.Default, {
                        api: d,
                        className: ls,
                        barClassNames: { base: ds },
                        scrollClassNames: { content: ms },
                        children: o.jsxs('div', {
                            className: us,
                            children: [o.jsx(ns, {}), o.jsx(De, { scrollApi: d }), o.jsx(Oe, {})],
                        }),
                    }),
                }),
                l && o.jsx('div', { className: i(_s, c && bs), children: o.jsx(Ie, {}) }),
                o.jsx('div', {
                    className: hs,
                    children: o.jsx(B, { caption: n.backButton, type: 'back', side: 'left', onClick: a.close }),
                }),
            ],
        })
    );
});
P(o.jsx(J, { children: o.jsx(xs, {}) }));
