import { j as e, e as s, C as a, r as t, i as o, k as n, m as c } from './vendor.js';
import {
    n as r,
    T as i,
    Z as l,
    k as d,
    j as u,
    u as _,
    m,
    A as b,
    a1 as g,
    a2 as f,
    a3 as x,
    a4 as p,
    C as h,
    B as N,
    e as y,
    i as C,
    c as v,
    a5 as j,
    F as I,
    Y as w,
    I as T,
    $ as S,
    a6 as k,
    z as B,
} from './lib.js';
import { H as E, u as R, R as P } from './use_cover_size.js';
import { S as G, g as L, f as $ } from './utils.js';
import { N as D } from './title2.js';
import { l as M } from './getRewardImage.js';
import { R as z, D as H, a as A, g as O } from './resources.js';
import { S as q } from './sounds.js';
import { S as V } from './scroll_with_lips.js';
import { T as X, i as U, b as F, g as K, a as Y, c as Z } from './statistics.js';
const J = 'StatisticsButton_844af96b',
    Q = 'StatisticsButton_text_6dff36a3',
    W = 'StatisticsButton_icon_a1774dca';
function ee({ icon: a, label: t, onClick: o, className: n = '' }) {
    return e.jsxs('div', {
        className: s(J, n),
        onMouseEnter: () => {
            r.highlight();
        },
        onClick: () => {
            (r.yes1(), o());
        },
        children: [
            e.jsx('div', { className: W, style: { backgroundImage: `url(${a})` } }),
            e.jsx('div', { className: Q, children: t }),
        ],
    });
}
const se = 'Body_9b6a113b';
const ae = 'Close_5e757668';
const te = 'Heading_ea9bcf76';
const oe = 'PanelControls_69644a1c';
const ne = 'Switcher_2841375e';
const ce = 'Page_a1e5a08c';
function re({ children: a, className: t }) {
    return e.jsx('div', { className: s(ce, t), children: a });
}
((re.Close = function ({ onClick: a, text: t, className: o }) {
    return e.jsx('div', {
        className: s(ae, o),
        children: e.jsx(i, { caption: t, type: 'close', side: 'right', onClick: a }),
    });
}),
    (re.PanelControls = function ({ children: a, className: t }) {
        return e.jsx('div', { className: s(oe, t), children: a });
    }),
    (re.Heading = function ({ text: a, className: t }) {
        return e.jsx(E, { title: a, className: s(te, t) });
    }),
    (re.Switcher = function ({ children: a, className: t }) {
        return e.jsx('div', { className: s(ne, t), children: a });
    }),
    (re.Body = function ({ children: a, className: t }) {
        return e.jsx('div', { className: s(se, t), children: a });
    }));
const ie = t.createContext(void 0);
function le() {
    const e = t.useContext(ie);
    if (!e) throw new Error('useTabsContext must be used within a features/lootbox/components/base/tabs component');
    return e;
}
function de({ guaranteedState: s, children: a }) {
    const o = t.useMemo(() => ({ guaranteedState: s }), [s]);
    return e.jsx(ie.Provider, { value: o, children: a });
}
const ue = 'GuaranteedTip_75e1ea9b',
    _e = 'GuaranteedTip_base__hover_80a4532e',
    me = 'GuaranteedTip_bg_eac0aa42',
    be = 'GuaranteedTip_glow_19246642',
    ge = 'GuaranteedTip_content_a2a98ab2',
    fe = 'GuaranteedTip_image_c950b1ec',
    xe = 'GuaranteedTip_text_8e5abdc1',
    pe = 'GuaranteedTip_description_9bc9798',
    he = 'GuaranteedTip_number_f40ec379';
const Ne = 'Item_c5163bf';
const ye = {
    root: 'Tab_root_0',
    base: 'Tab_88e35585',
    wrapper: 'Tab_wrapper_fb0b19c7',
    base__active: 'Tab_base__active_0',
    base__disable: 'Tab_base__disable_0',
    base__default: 'Tab_base__default_0',
    shadow: 'Tab_shadow_982b087',
    image: 'Tab_image_d5081629',
    image__hovered: 'Tab_image__hovered_7e912516',
    counter: 'Tab_counter_d245ca70',
    counter__hovered: 'Tab_counter__hovered_e6f6fe65',
    fadeIn: 'Tab_fadeIn_0',
};
const Ce = { base: 'Tabs_6382a8ae' };
function ve({ className: a = '', children: o }) {
    const [n, c] = t.useState('');
    return e.jsx(de, {
        guaranteedState: { activeId: n, setActiveId: c },
        children: e.jsx('div', { className: s(Ce.base, a), children: o }),
    });
}
((ve.Tab = function ({ tab: a, onClick: o, state: n, className: c = '' }) {
    const [i, l] = t.useState(!1);
    return e.jsx('div', {
        className: s(ye.base, ye[`base__${n}`], c),
        children: e.jsxs('div', {
            className: s(ye.wrapper),
            onClick: () => {
                n !== G.Disable && o();
            },
            onMouseEnter: () => {
                (n === G.Default && r.highlight(), l(!0));
            },
            onMouseLeave: () => {
                l(!1);
            },
            children: [
                i && n === G.Default && e.jsx('div', { className: ye.shadow }),
                e.jsx('div', {
                    className: s(ye.image, i && n === G.Default && ye.image__hovered),
                    style: { backgroundImage: `url(${M('s180x135', a.boxCategory)})` },
                }),
                a.boxesCount >= 0 &&
                    e.jsx('div', {
                        className: s(ye.counter, i && n === G.Default && ye.counter__hovered),
                        children: `×${a.boxesCount}`,
                    }),
            ],
        }),
    });
}),
    (ve.Guaranteed = function ({ id: a, icons: o, texts: n, soundHover: c, boxesCountToGuaranteed: i, className: u }) {
        const [_, m] = t.useState(!0),
            { guaranteedState: b } = le(),
            g = b.activeId === a,
            f = !_ && g;
        return (
            t.useEffect(
                () =>
                    l(() => {
                        m(!1);
                    }, 1050),
                [],
            ),
            t.useEffect(() => {
                g && r.sound(c);
            }, [g, c]),
            e.jsxs('div', {
                className: s(ue, f && _e, u),
                children: [
                    e.jsxs('div', {
                        className: ge,
                        children: [
                            e.jsx('div', { className: me }),
                            e.jsx('div', { className: fe, style: { backgroundImage: `url(${o.guaranteedIco})` } }),
                            e.jsx('div', {
                                className: xe,
                                children: e.jsx(d, {
                                    text: n,
                                    classMix: pe,
                                    binding: {
                                        count: e.jsx(D, {
                                            boxesCountToGuaranteed: i,
                                            glowIcon: o.glowIcon,
                                            strongGlowIcon: o.numberGlow,
                                            accentCount: 0,
                                            className: he,
                                        }),
                                    },
                                }),
                            }),
                        ],
                    }),
                    e.jsx('div', { className: be, style: { backgroundImage: `url(${o.slotGlow})` } }),
                ],
            })
        );
    }),
    (ve.Item = function ({ id: a, children: t, className: o }) {
        const { guaranteedState: n } = le();
        return e.jsx('div', {
            onMouseOver: () => n.setActiveId(a),
            onMouseOut: () => n.setActiveId(''),
            className: s(Ne, o),
            children: t,
        });
    }),
    (ve.Tooltip = function ({ children: s, boxCategory: a, eventName: t, className: o }) {
        const n = u.resolve('views'),
            c = _({
                contentId: n.read((e) => e.mono.lootbox.tooltips.box_tooltip('resId')),
                args: { boxCategory: a, eventName: t },
            });
        return e.jsx('div', { ...c, className: o, children: s });
    }));
const je = 'BoxSwitch_30f3e1e',
    Ie = 'BoxSwitch_tab_66b3d775',
    we = 'BoxSwitch_tab__isFirst_12303d41',
    Te = 'BoxSwitch_guaranteedTip_b851e3c0',
    Se = { opacity: 0, transform: 'translateX(-20rem)' },
    ke = (e, s) =>
        t.useMemo(
            () =>
                ((e, s) =>
                    Array(e)
                        .fill(0)
                        .map((e) => new a({ id: e, ...s })))(e, s),
            [e, s],
        );
function Be({
    tabs: a,
    sounds: n,
    changeTab: c = b,
    texts: i,
    icons: l,
    tabsGuaranteedCount: d,
    active: u = '',
    className: _ = '',
    startAnimation: f = !0,
    eventName: x,
}) {
    const [p, h] = t.useState(!1),
        N = ke(a.length, Se),
        y = (e) => {
            N[e].start({
                to: { opacity: 1, transform: 'translateX(0)' },
                config: { duration: 160, easing: g.easeOutCubic },
                onRest: () =>
                    ((e) => {
                        e !== a.length - 1 ? y(e + 1) : h(!0);
                    })(e),
            });
        };
    t.useEffect(() => {
        f && y(0);
    }, [f, a.length]);
    return e.jsx(ve, {
        className: s(je, _),
        children: m(a, (a, t) => {
            const _ = `${t}_${a.boxCategory}`,
                m = p && a.boxesCountToGuaranteed > 0 && a.boxesCountToGuaranteed <= d;
            return e.jsx(
                o.div,
                {
                    style: N[t].springs,
                    className: s(Ie, 0 === t && we),
                    children: e.jsxs(ve.Item, {
                        id: _,
                        children: [
                            e.jsx(
                                ve.Tooltip,
                                {
                                    boxCategory: a.boxCategory,
                                    eventName: x,
                                    children: e.jsx(ve.Tab, {
                                        tab: a,
                                        onClick: () => {
                                            return ((e = a.boxCategory), r.sound(n.switch), void c(e));
                                            var e;
                                        },
                                        state: L(a.boxCategory, u, a.boxesCount),
                                    }),
                                },
                                a.boxCategory,
                            ),
                            m &&
                                e.jsx(ve.Guaranteed, {
                                    id: _,
                                    icons: l,
                                    texts: i.plural('tabText', a.boxesCountToGuaranteed),
                                    soundHover: n.entryHover,
                                    boxesCountToGuaranteed: a.boxesCountToGuaranteed,
                                    className: Te,
                                }),
                        ],
                    }),
                },
                a.boxCategory,
            );
        }),
    });
}
const Ee = (e, s) => {
        t.useEffect(() => {
            const a = new Image();
            return (
                a.addEventListener('load', s),
                (a.src = e),
                () => {
                    a.removeEventListener('load', s);
                }
            );
        }, [e, s]);
    },
    Re = { base: 'ImageLayer_f8eebc6c' };
function Pe({ src: a, className: t, onLoaded: o = b }) {
    return (Ee(a, o), e.jsx('div', { className: s(Re.base, t), style: { backgroundImage: `url(${a})` } }));
}
function Ge({
    src: s,
    className: a,
    loop: o = !1,
    onLoaded: n,
    onEnded: c,
    playVideo: r,
    autoplay: i = !1,
    onPlay: l,
    shouldCleanUp: d = !1,
}) {
    const u = t.useRef(null),
        _ = R(z);
    t.useEffect(() => {
        const e = u.current;
        e && r && e.goToAndPlay(0);
    }, [r]);
    const [m, b] = f(() => {
        var e;
        const s = null == (e = u.current) ? void 0 : e.getCachedKeyframes();
        return !(null == s ? void 0 : s.length) || (null == n || n(), !1);
    });
    return (
        t.useEffect(() => (m(), b), []),
        t.useEffect(() => {
            if (d) {
                const e = u.current;
                return () => {
                    e && (e.domRef.src = '');
                };
            }
        }, [d, u]),
        e.jsx(x, { ref: u, className: a, style: _, src: s, autoplay: i, loop: o, onEnded: c, onPlay: l })
    );
}
const Le = 'ResourceLayer_62748772',
    $e = 'ResourceLayer_layer_c06d2ca4',
    De = 'ResourceLayer_layer__video_445e841b';
function Me({
    layer: a,
    className: t,
    onLoaded: o,
    onVideoEnded: n,
    playVideo: c,
    loop: r,
    autoplay: i,
    onVideoPlay: l,
    shouldCleanUp: d,
}) {
    return e.jsxs('div', {
        className: s(Le, t),
        children: [
            a.type === P.video &&
                e.jsx(Ge, {
                    className: s($e, De),
                    src: a.src,
                    onLoaded: o,
                    onEnded: n,
                    loop: r,
                    autoplay: i,
                    playVideo: c,
                    onPlay: l,
                    shouldCleanUp: d,
                }),
            a.type === P.image && e.jsx(Pe, { src: a.src, className: $e, onLoaded: o }),
        ],
    });
}
const ze = (e, s) => {
        const a = s && !s.includes(H),
            t = e && !e.includes(H);
        return a ? s : t ? e : s || e;
    },
    He = (e, s) => {
        const a = ((e, s) => ze(e, s))(e, s),
            t = a.split(':')[0];
        return { src: a, type: t };
    },
    Ae = { base: 'Close_8b4fdd21' };
function Oe({ className: a = '', img: t, onClick: o, onMouseEnter: n }) {
    return e.jsx('div', {
        className: s(Ae.base, a),
        style: { backgroundImage: `url(${t})` },
        onClick: o,
        onMouseEnter: n,
    });
}
const qe = 'Background_9cc315a3',
    Ve = 'Background_border_caf5e725',
    Xe = 'Background_noise_7edfd4f1';
const Ue = 'Body_5abb9234';
const Fe = 'Content_15583580';
const Ke = 'Shadow_28212855';
const Ye = 'Layout_8695f8df',
    Ze = t.forwardRef(function ({ children: a, className: t }, o) {
        return e.jsx('div', { className: s(Ye, t), ref: o, children: a });
    });
((Ze.Background = function ({ className: a = '', img: t }) {
    return e.jsxs('div', {
        className: s(qe, a),
        children: [
            e.jsx('div', { className: Xe, style: { backgroundImage: `url(${t})` } }),
            e.jsx('div', { className: Ve }),
        ],
    });
}),
    (Ze.Body = function ({ children: a, className: t }) {
        return e.jsx('div', { className: s(Ue, t), children: a });
    }),
    (Ze.Shadow = function ({ className: a = '' }) {
        return e.jsx('div', { className: s(Ke, a) });
    }),
    (Ze.Content = function ({ children: a, className: t }) {
        return e.jsx('div', { className: s(Fe, t), children: a });
    }));
const Je = { base__disabled: 'ResetButton_base__disabled_2c71c62d' };
function Qe({ texts: a, disabled: t, onClick: o, className: n = '' }) {
    const c = p({ body: a.tooltip });
    return e.jsx('div', {
        className: s(Je.base, t && Je.base__disabled, n),
        ...c,
        children: e.jsx(h, {
            type: y.ghost,
            size: N.medium,
            disabled: t,
            onClick: o,
            mixClass: Je.button,
            children: a.button,
        }),
    });
}
const We = 'Icon_f4b46a7a',
    es = 'Icon_ea7f6157';
const ss = 'Text_count_356a3dde';
const as = { base: 'Header_1b2a1dfa' };
function ts({ children: a, className: t = '' }) {
    return e.jsx('div', { className: s(as.base, t), children: a });
}
((ts.Icon = function ({ icon: a, className: t = '', ...o }) {
    return e.jsx('div', {
        className: s(We, t),
        ...o,
        children: e.jsx('div', { className: es, style: { backgroundImage: `url(${a})` } }),
    });
}),
    (ts.Text = function ({ text: s, count: a, className: t = '' }) {
        return e.jsx(d, { text: s, binding: { count: e.jsx('span', { className: ss, children: a }) }, classMix: t });
    }));
const os = {
        images: {
            statsIcon: 'statistics.stats',
            noiseBackground: 'statistics.noise',
            closeIcon: 'statistics.close_white',
            infoIcon: 'common.info',
            scrollLipTop: 'statistics.lipBig',
        },
        texts: {
            header: 'common.statistics.header',
            emptyHeader: 'common.statistics.emptyHeader',
            tooltipTitle: 'common.statistics.tooltip.title',
            tooltipDescription: 'common.statistics.tooltip.body',
            currency: 'statisticsRewards.count.currency',
            resetButton: 'statisticsRewards.resetButton.text',
            resetTooltipDescription: 'statisticsRewards.resetButton.tooltipText',
        },
        sounds: { statsClose: q.statsClose, statsOpen: q.statsOpen },
    },
    ns = {
        dynamicTexts: {
            boxCategory: 'common.boxCategory.lowerCase',
            category: 'statisticsRewards.label',
            defaultCount: 'common.rewards.count',
            rewardsPremiumDay: 'common.rewards.premiumDay',
        },
    },
    [cs, rs] = C()(
        ({ observableModel: e }) => {
            const s = {
                    root: e.object(),
                    categories: e.arrayClone('categories'),
                    ...e.primitives(['eventName', 'openedCount']),
                },
                a = n(() => A(os, s.eventName.get()), { equals: v }),
                t = n(() => O(ns, s.eventName.get()), { equals: v }),
                o = n(() => A(os, ''), { equals: v }),
                c = n(() => s.categories.get(), { equals: v }),
                r = n(() => s.eventName.get(), { equals: v });
            return {
                ...s,
                computes: { resources: a, dynamicResources: t, defaultResources: o, categories: c, getEventName: r },
            };
        },
        ({ externalModel: e }) => ({
            reset: e.createCallbackNoArgs('onReset'),
            updateResetState: e.createCallbackNoArgs('onUpdateResetState'),
        }),
    );
const is = c(function ({ className: s = '' }) {
        const {
                model: { computes: a, openedCount: t },
            } = rs(),
            { texts: o, images: n } = a.resources(),
            c = p({ header: o.tooltipTitle, body: o.tooltipDescription });
        return e.jsxs(ts, {
            className: s,
            children: [e.jsx(ts.Text, { text: o.header, count: t.get() }), e.jsx(ts.Icon, { ...c, icon: n.infoIcon })],
        });
    }),
    ls = {
        root: 'Count_root_d63373f8',
        base: 'Count_3cf6e1f6',
        base__premium_plus: 'Count_base__premium_plus_d63373f8',
        base__gold: 'Count_base__gold_d020e831',
        base__credits: 'Count_base__credits_8ec6d26c',
        base__freeXP: 'Count_base__freeXP_d63373f8',
        base__crystal: 'Count_base__crystal_b3e000d4',
        base__big: 'Count_base__big_7201c11c',
        fadeIn: 'Count_fadeIn_d63373f8',
    };
const ds = 'Description_7ef73286';
const us = {
    root: 'Icon_root_55a8ab20',
    base: 'Icon_d9a247ec',
    base__big: 'Icon_base__big_67ef6218',
    fadeIn: 'Icon_fadeIn_55a8ab20',
};
const _s = {
    root: 'Label_root_e3f8b3ce',
    base: 'Label_b2c19c0d',
    base__big: 'Label_base__big_e3f8b3ce',
    fadeIn: 'Label_fadeIn_e3f8b3ce',
};
const ms = {
    root: 'Category_root_b894c2f0',
    base: 'Category_a6f47b3f',
    base__big: 'Category_base__big_d4527141',
    fadeIn: 'Category_fadeIn_b894c2f0',
};
function bs({ children: a, imageSize: t, className: o }) {
    return e.jsx('div', { className: s(ms.base, ms[`base__${t}`], o), children: a });
}
((bs.Icon = function ({ img: a, imageSize: t, className: o }) {
    return e.jsx('div', { className: s(us.base, us[`base__${t}`], o), style: { backgroundImage: `url(${a})` } });
}),
    (bs.Description = function ({ children: a, className: t }) {
        return e.jsx('div', { className: s(ds, t), children: a });
    }),
    (bs.Label = function ({ label: a, imageSize: t, className: o }) {
        return e.jsx('div', { className: s(_s.base, _s[`base__${t}`], o), children: a });
    }),
    (bs.Count = function ({ children: a, type: t, imageSize: o, className: n }) {
        return e.jsx('div', { className: s(ls.base, ls[`base__${t}`], ls[`base__${o}`], n), children: a });
    }));
const gs = 'Info_63d4ffeb';
const fs = {
    base: 'Categories_f228c023',
    area: 'Categories_area_ffccdaa6',
    base__wide: 'Categories_base__wide_c099b2e6',
    scroll: 'Categories_scroll_d800d930',
    scrollContent: 'Categories_scrollContent_3984cae9',
    scrollBar: 'Categories_scrollBar_d74b6295',
    lip: 'Categories_lip_737cb362',
};
function xs({ lipImage: a, wide: t, children: o, className: n }) {
    return e.jsx('div', {
        className: s(fs.base, t && fs.base__wide, n),
        children: e.jsx(V, {
            lipImage: a,
            classNames: { base: fs.scroll, scrollContent: fs.scrollContent, scrollBar: fs.scrollBar, lip: fs.lip },
            children: e.jsx('div', { className: fs.area, children: o }),
        }),
    });
}
((xs.Info = function ({ children: a, className: t }) {
    return e.jsx('div', { className: s(gs, t), children: a });
}),
    (xs.Category = bs));
const ps = c(function ({ category: s, imageSize: a, className: t }) {
        const {
                model: { computes: o },
            } = rs(),
            { texts: n } = o.resources(),
            { dynamicTexts: c } = o.dynamicResources(),
            { type: r, count: i } = s,
            l = ((e, s, a) => {
                switch (a.type) {
                    case X.PremiumPlus:
                        return `${a.count} ${s.rewardsPremiumDay.plural('premiumDay', a.count)}`;
                    case X.Gold:
                    case X.Credits:
                    case X.Crystal:
                    case X.FreeXP:
                    case X.Components:
                        return e.currency;
                    default:
                        return s.defaultCount.plural('count', a.count);
                }
            })(n, c, s),
            d = U(r) ? c.boxCategory.dynOpt(F(r)) : c.category.dyn(K(r));
        return e.jsx(j, {
            tooltipArgs: Y(r, o.getEventName()),
            children: e.jsxs(xs.Category, {
                imageSize: a,
                className: t,
                children: [
                    e.jsx(xs.Category.Icon, { img: Z(s.type, a), imageSize: a }),
                    e.jsxs(xs.Category.Description, {
                        children: [
                            e.jsx(xs.Category.Label, { imageSize: a, label: d }),
                            e.jsx(xs.Category.Count, {
                                type: r,
                                imageSize: a,
                                children: e.jsx(I, {
                                    text: l,
                                    params: { count: i, currency: e.jsx(I, { text: $(`${i}`), upgradeLegacy: !0 }) },
                                    upgradeLegacy: !0,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    hs = 'Rewards_405577a5',
    Ns = 'Rewards_reward_e4f396cf';
const ys = c(function ({ className: a }) {
        const {
                model: { computes: t },
            } = rs(),
            { texts: o, images: n } = t.resources(),
            c = t.categories(),
            {
                breakpoint: { weight: r },
            } = w(),
            i = c.length > 7;
        return e.jsxs(xs, {
            className: s(hs, a),
            lipImage: n.scrollLipTop,
            wide: i,
            children: [
                0 === c.length && e.jsx(xs.Info, { children: o.emptyHeader }),
                m(c, (s, a) =>
                    e.jsx(ps, { category: s, imageSize: r < S.medium.weight ? T.Small : T.Big, className: Ns }, a),
                ),
            ],
        });
    }),
    Cs = {
        root: 'Popover_root_b6b2f5f6',
        base: 'Popover_b5a0d9d4',
        base__show: 'Popover_base__show_ab334a8',
        background: 'Popover_background_7cb1d547',
        content: 'Popover_content_bf603773',
        shadow: 'Popover_shadow_68af0352',
        header: 'Popover_header_47cd95a3',
        reset: 'Popover_reset_bbe1207',
        fadeIn: 'Popover_fadeIn_b6b2f5f6',
    },
    vs = 'show',
    js = 'hide';
const Is = c(function ({ onHidden: a, isStatsEnabled: o, className: n }) {
        const [c, i] = t.useState(js),
            {
                model: { computes: d, root: u, openedCount: _ },
                controls: m,
            } = rs(),
            { isResetCompleted: b } = u.get(),
            { images: g, sounds: f, texts: x } = d.resources(),
            p = d.categories(),
            h = () => {
                (i(js), r.sound(f.statsClose));
            },
            N = t.useRef(null);
        return (
            t.useEffect(() => {
                const e = N.current;
                if (e && c === vs) return (k.register(e, h), () => k.unregister(e, h));
            }, [c, N, i]),
            t.useEffect(() => {
                b && (h(), m.updateResetState());
            }, [b]),
            t.useEffect(
                () =>
                    B(() => {
                        (i(vs), r.sound(f.statsOpen));
                    }),
                [f, i],
            ),
            t.useEffect(() => {
                if (c === js)
                    return l(() => {
                        a();
                    }, 300);
            }, [a, c]),
            t.useEffect(() => {
                o || h();
            }, [o]),
            e.jsxs(Ze, {
                className: s(Cs.base, Cs[`base__${c}`], n),
                ref: N,
                children: [
                    e.jsxs(Ze.Body, {
                        children: [
                            e.jsx(Ze.Background, { className: Cs.background, img: g.noiseBackground }),
                            e.jsxs(Ze.Content, {
                                className: Cs.content,
                                children: [
                                    e.jsx(is, { className: Cs.header }),
                                    e.jsx(ys, {}),
                                    e.jsx(Qe, {
                                        className: Cs.reset,
                                        disabled: 0 === p.length && 0 === _.get(),
                                        onClick: m.reset,
                                        texts: { tooltip: x.resetTooltipDescription, button: x.resetButton },
                                    }),
                                ],
                            }),
                            e.jsx(Oe, {
                                onClick: () => {
                                    (r.yes1(), h());
                                },
                                onMouseEnter: () => {
                                    r.highlight();
                                },
                                img: g.closeIcon,
                            }),
                        ],
                    }),
                    e.jsx(Ze.Shadow, { className: Cs.shadow }),
                ],
            })
        );
    }),
    ws = { context: 'model.hasBoxes.statistics' };
function Ts(s) {
    return e.jsx(cs, { options: s.options || ws, children: e.jsx(Is, { ...s }) });
}
export { Be as B, re as P, Me as R, ee as S, Ts as a, He as d };
