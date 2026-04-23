import { j as e, e as s, C as a, r as t, k as o, m as n, n as c } from './vendor.js';
import {
    t as r,
    T as i,
    Z as l,
    F as d,
    o as u,
    u as _,
    m,
    A as b,
    a1 as g,
    a2 as f,
    a3 as x,
    a4 as p,
    C as h,
    B as N,
    f as y,
    i as j,
    c as C,
    a5 as v,
    a as w,
    Y as I,
    I as T,
    $ as S,
    a6 as k,
    j as B,
} from './lib.js';
import { H as E, u as R, R as P } from './use_cover_size.js';
import { S as L, g as $, f as G } from './utils.js';
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
const ae = 'Close_179bd5e3';
const te = 'Heading_ea9bcf76';
const oe = 'PanelControls_a0535d59';
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
    ge = 'GuaranteedTip_content_d025cbb7',
    fe = 'GuaranteedTip_image_c950b1ec',
    xe = 'GuaranteedTip_text_8e5abdc1',
    pe = 'GuaranteedTip_description_9bc9798',
    he = 'GuaranteedTip_number_f40ec379';
const Ne = 'Item_c5163bf';
const ye = {
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
const je = 'Tabs_6382a8ae';
function Ce({ className: a = '', children: o }) {
    const [n, c] = t.useState('');
    return e.jsx(de, {
        guaranteedState: { activeId: n, setActiveId: c },
        children: e.jsx('div', { className: s(je, a), children: o }),
    });
}
((Ce.Tab = function ({ tab: a, onClick: o, state: n, className: c = '' }) {
    const [i, l] = t.useState(!1);
    return e.jsx('div', {
        className: s(ye.base, ye[`base__${n}`], c),
        children: e.jsxs('div', {
            className: s(ye.wrapper),
            onClick: () => {
                n !== L.Disable && o();
            },
            onMouseEnter: () => {
                (n === L.Default && r.highlight(), l(!0));
            },
            onMouseLeave: () => {
                l(!1);
            },
            children: [
                i && n === L.Default && e.jsx('div', { className: ye.shadow }),
                e.jsx('div', {
                    className: s(ye.image, i && n === L.Default && ye.image__hovered),
                    style: { backgroundImage: `url(${M('s180x135', a.boxCategory)})` },
                }),
                a.boxesCount >= 0 &&
                    e.jsx('div', {
                        className: s(ye.counter, i && n === L.Default && ye.counter__hovered),
                        children: `×${a.boxesCount}`,
                    }),
            ],
        }),
    });
}),
    (Ce.Guaranteed = function ({ id: a, icons: o, texts: n, soundHover: c, boxesCountToGuaranteed: i, className: u }) {
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
    (Ce.Item = function ({ id: a, children: t, className: o }) {
        const { guaranteedState: n } = le();
        return e.jsx('div', {
            onMouseOver: () => n.setActiveId(a),
            onMouseOut: () => n.setActiveId(''),
            className: s(Ne, o),
            children: t,
        });
    }),
    (Ce.Tooltip = function ({ children: s, boxCategory: a, eventName: t, className: o }) {
        const n = u.resolve('views'),
            c = _({
                contentId: n.read((e) => e.mono.lootbox.tooltips.box_tooltip('resId')),
                args: { boxCategory: a, eventName: t },
            });
        return e.jsx('div', { ...c, className: o, children: s });
    }));
const ve = 'BoxSwitch_30f3e1e',
    we = 'BoxSwitch_tab_66b3d775',
    Ie = 'BoxSwitch_tab__isFirst_12303d41',
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
    return e.jsx(Ce, {
        className: s(ve, _),
        children: m(a, (a, t) => {
            const _ = `${t}_${a.boxCategory}`,
                m = p && a.boxesCountToGuaranteed > 0 && a.boxesCountToGuaranteed <= d;
            return e.jsx(
                o.div,
                {
                    style: N[t].springs,
                    className: s(we, 0 === t && Ie),
                    children: e.jsxs(Ce.Item, {
                        id: _,
                        children: [
                            e.jsx(
                                Ce.Tooltip,
                                {
                                    boxCategory: a.boxCategory,
                                    eventName: x,
                                    children: e.jsx(Ce.Tab, {
                                        tab: a,
                                        onClick: () => {
                                            return ((e = a.boxCategory), r.sound(n.switch), void c(e));
                                            var e;
                                        },
                                        state: $(a.boxCategory, u, a.boxesCount),
                                    }),
                                },
                                a.boxCategory,
                            ),
                            m &&
                                e.jsx(Ce.Guaranteed, {
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
const Ee = 'ImageLayer_f8eebc6c';
function Re({ src: a, className: o, onLoaded: n = b }) {
    return (
        ((e, s) => {
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
        })(a, n),
        e.jsx('div', { className: s(Ee, o), style: { backgroundImage: `url(${a})` } })
    );
}
function Pe({
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
        const e = u.current?.getCachedKeyframes();
        return !e?.length || (n?.(), !1);
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
    Ge = 'ResourceLayer_layer__video_445e841b';
function De({
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
                e.jsx(Pe, {
                    className: s($e, Ge),
                    src: a.src,
                    onLoaded: o,
                    onEnded: n,
                    loop: r,
                    autoplay: i,
                    playVideo: c,
                    onPlay: l,
                    shouldCleanUp: d,
                }),
            a.type === P.image && e.jsx(Re, { src: a.src, className: $e, onLoaded: o }),
        ],
    });
}
const Me = (e, s) => {
        const a = s && !s.includes(H),
            t = e && !e.includes(H);
        return a ? s : t ? e : s || e;
    },
    ze = (e, s) => {
        const a = ((e, s) => Me(e, s))(e, s),
            t = a.split(':')[0];
        return { src: a, type: t };
    },
    He = 'Close_8b4fdd21';
function Ae({ className: a = '', img: t, onClick: o, onMouseEnter: n }) {
    return e.jsx('div', { className: s(He, a), style: { backgroundImage: `url(${t})` }, onClick: o, onMouseEnter: n });
}
const Oe = 'Background_9cc315a3',
    qe = 'Background_border_caf5e725',
    Ve = 'Background_noise_7edfd4f1';
const Xe = 'Body_5abb9234';
const Ue = 'Content_15583580';
const Fe = 'Shadow_28212855';
const Ke = 'Layout_8695f8df',
    Ye = t.forwardRef(function ({ children: a, className: t }, o) {
        return e.jsx('div', { className: s(Ke, t), ref: o, children: a });
    });
((Ye.Background = function ({ className: a = '', img: t }) {
    return e.jsxs('div', {
        className: s(Oe, a),
        children: [
            e.jsx('div', { className: Ve, style: { backgroundImage: `url(${t})` } }),
            e.jsx('div', { className: qe }),
        ],
    });
}),
    (Ye.Body = function ({ children: a, className: t }) {
        return e.jsx('div', { className: s(Xe, t), children: a });
    }),
    (Ye.Shadow = function ({ className: a = '' }) {
        return e.jsx('div', { className: s(Fe, a) });
    }),
    (Ye.Content = function ({ children: a, className: t }) {
        return e.jsx('div', { className: s(Ue, t), children: a });
    }));
const Ze = { base__disabled: 'ResetButton_base__disabled_2c71c62d' };
function Je({ texts: a, disabled: t, onClick: o, className: n = '' }) {
    const c = p({ body: a.tooltip });
    return e.jsx('div', {
        className: s(Ze.base, t && Ze.base__disabled, n),
        ...c,
        children: e.jsx(h, {
            type: y.ghost,
            size: N.medium,
            disabled: t,
            onClick: o,
            mixClass: Ze.button,
            children: a.button,
        }),
    });
}
const Qe = 'Icon_f4b46a7a',
    We = 'Icon_ea7f6157';
const es = 'Text_count_356a3dde';
const ss = 'Header_1b2a1dfa';
function as({ children: a, className: t = '' }) {
    return e.jsx('div', { className: s(ss, t), children: a });
}
((as.Icon = function ({ icon: a, className: t = '', ...o }) {
    return e.jsx('div', {
        className: s(Qe, t),
        ...o,
        children: e.jsx('div', { className: We, style: { backgroundImage: `url(${a})` } }),
    });
}),
    (as.Text = function ({ text: s, count: a, className: t = '' }) {
        return e.jsx(d, { text: s, binding: { count: e.jsx('span', { className: es, children: a }) }, classMix: t });
    }));
const ts = {
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
    os = {
        dynamicTexts: {
            boxCategory: 'common.boxCategory.lowerCase',
            category: 'statisticsRewards.label',
            defaultCount: 'common.rewards.count',
            rewardsPremiumDay: 'common.rewards.premiumDay',
        },
    },
    [ns, cs] = j()(
        ({ observableModel: e }) => {
            const s = {
                    root: e.object(),
                    categories: e.arrayClone('categories'),
                    ...e.primitives(['eventName', 'openedCount']),
                },
                a = n(() => A(ts, s.eventName.get()), { equals: C }),
                t = n(() => O(os, s.eventName.get()), { equals: C }),
                o = n(() => A(ts, ''), { equals: C }),
                c = n(() => s.categories.get(), { equals: C }),
                r = n(() => s.eventName.get(), { equals: C });
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
const rs = c(function ({ className: s = '' }) {
        const {
                model: { computes: a, openedCount: t },
            } = cs(),
            { texts: o, images: n } = a.resources(),
            c = p({ header: o.tooltipTitle, body: o.tooltipDescription });
        return e.jsxs(as, {
            className: s,
            children: [e.jsx(as.Text, { text: o.header, count: t.get() }), e.jsx(as.Icon, { ...c, icon: n.infoIcon })],
        });
    }),
    is = {
        base: 'Count_3cf6e1f6',
        base__premium_plus: 'Count_base__premium_plus_d63373f8',
        base__gold: 'Count_base__gold_d020e831',
        base__credits: 'Count_base__credits_8ec6d26c',
        base__freeXP: 'Count_base__freeXP_d63373f8',
        base__crystal: 'Count_base__crystal_b3e000d4',
        base__big: 'Count_base__big_7201c11c',
        fadeIn: 'Count_fadeIn_d63373f8',
    };
const ls = 'Description_7ef73286';
const ds = { base: 'Icon_d9a247ec', base__big: 'Icon_base__big_67ef6218', fadeIn: 'Icon_fadeIn_55a8ab20' };
const us = {
    base: 'Label_929aff3c',
    base__big: 'Label_base__big_9ef95764',
    base__smallDouble: 'Label_base__smallDouble_ddda1810',
    base__bigDouble: 'Label_base__bigDouble_6f70ec06',
    fadeIn: 'Label_fadeIn_e3f8b3ce',
};
const _s = { base: 'Category_11bd884e', base__big: 'Category_base__big_9223dd50', fadeIn: 'Category_fadeIn_b894c2f0' };
function ms({ children: a, imageSize: t, className: o }) {
    return e.jsx('div', { className: s(_s.base, _s[`base__${t}`], o), children: a });
}
((ms.Icon = function ({ img: a, imageSize: t, className: o }) {
    return e.jsx('div', { className: s(ds.base, ds[`base__${t}`], o), style: { backgroundImage: `url(${a})` } });
}),
    (ms.Description = function ({ children: a, className: t }) {
        return e.jsx('div', { className: s(ls, t), children: a });
    }),
    (ms.Label = function ({ label: a, imageSize: t, wide: o, className: n }) {
        const c = o ? us[`base__${t}Double`] : us[`base__${t}`];
        return e.jsx('div', { className: s(us.base, c, n), children: a });
    }),
    (ms.Count = function ({ children: a, type: t, imageSize: o, className: n }) {
        return e.jsx('div', { className: s(is.base, is[`base__${t}`], is[`base__${o}`], n), children: a });
    }));
const bs = 'Info_63d4ffeb';
const gs = 'Categories_f228c023',
    fs = 'Categories_area_ffccdaa6',
    xs = 'Categories_base__wide_c099b2e6',
    ps = 'Categories_scroll_d800d930',
    hs = 'Categories_scrollContent_3984cae9',
    Ns = 'Categories_scrollBar_d74b6295',
    ys = 'Categories_lip_737cb362';
function js({ lipImage: a, wide: t, children: o, className: n }) {
    return e.jsx('div', {
        className: s(gs, t && xs, n),
        children: e.jsx(V, {
            lipImage: a,
            classNames: { base: ps, scrollContent: hs, scrollBar: Ns, lip: ys },
            children: e.jsx('div', { className: fs, children: o }),
        }),
    });
}
((js.Info = function ({ children: a, className: t }) {
    return e.jsx('div', { className: s(bs, t), children: a });
}),
    (js.Category = ms));
const Cs = c(function ({ category: s, wide: a, imageSize: t, className: o }) {
        const {
                model: { computes: n },
            } = cs(),
            { texts: c } = n.resources(),
            { dynamicTexts: r } = n.dynamicResources(),
            { type: i, count: l } = s,
            d = ((e, s, a) => {
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
            })(c, r, s),
            u = U(i) ? r.boxCategory.dynOpt(F(i)) : r.category.dyn(K(i));
        return e.jsx(v, {
            tooltipArgs: Y(i, n.getEventName()),
            children: e.jsxs(js.Category, {
                imageSize: t,
                className: o,
                children: [
                    e.jsx(js.Category.Icon, { img: Z(s.type, t), imageSize: t }),
                    e.jsxs(js.Category.Description, {
                        children: [
                            e.jsx(js.Category.Label, { imageSize: t, wide: a, label: u }),
                            e.jsx(js.Category.Count, {
                                type: i,
                                imageSize: t,
                                children: e.jsx(w, {
                                    text: d,
                                    params: { count: l, currency: e.jsx(w, { text: G(`${l}`), upgradeLegacy: !0 }) },
                                    upgradeLegacy: !0,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    vs = 'Rewards_405577a5',
    ws = 'Rewards_reward_e4f396cf';
const Is = c(function ({ className: a }) {
        const {
                model: { computes: t },
            } = cs(),
            { texts: o, images: n } = t.resources(),
            c = t.categories(),
            {
                breakpoint: { weight: r },
            } = I(),
            i = c.length > 7;
        return e.jsxs(js, {
            className: s(vs, a),
            lipImage: n.scrollLipTop,
            wide: i,
            children: [
                0 === c.length && e.jsx(js.Info, { children: o.emptyHeader }),
                m(c, (s, a) =>
                    e.jsx(
                        Cs,
                        { category: s, wide: i, imageSize: r < S.medium.weight ? T.Small : T.Big, className: ws },
                        a,
                    ),
                ),
            ],
        });
    }),
    Ts = {
        base: 'Popover_b5a0d9d4',
        base__show: 'Popover_base__show_ab334a8',
        background: 'Popover_background_7cb1d547',
        content: 'Popover_content_bf603773',
        shadow: 'Popover_shadow_68af0352',
        header: 'Popover_header_47cd95a3',
        reset: 'Popover_reset_bbe1207',
        fadeIn: 'Popover_fadeIn_b6b2f5f6',
    },
    Ss = 'show',
    ks = 'hide';
const Bs = c(function ({ onHidden: a, isStatsEnabled: o, className: n }) {
        const [c, i] = t.useState(ks),
            {
                model: { computes: d, root: u, openedCount: _ },
                controls: m,
            } = cs(),
            { isResetCompleted: b } = u.get(),
            { images: g, sounds: f, texts: x } = d.resources(),
            p = d.categories(),
            h = () => {
                (i(ks), r.sound(f.statsClose));
            },
            N = t.useRef(null);
        return (
            t.useEffect(() => {
                const e = N.current;
                if (e && c === Ss) return (k.register(e, h), () => k.unregister(e, h));
            }, [c, N, i]),
            t.useEffect(() => {
                b && (h(), m.updateResetState());
            }, [b]),
            t.useEffect(
                () =>
                    B(() => {
                        (i(Ss), r.sound(f.statsOpen));
                    }),
                [f, i],
            ),
            t.useEffect(() => {
                if (c === ks)
                    return l(() => {
                        a();
                    }, 300);
            }, [a, c]),
            t.useEffect(() => {
                o || h();
            }, [o]),
            e.jsxs(Ye, {
                className: s(Ts.base, Ts[`base__${c}`], n),
                ref: N,
                children: [
                    e.jsxs(Ye.Body, {
                        children: [
                            e.jsx(Ye.Background, { className: Ts.background, img: g.noiseBackground }),
                            e.jsxs(Ye.Content, {
                                className: Ts.content,
                                children: [
                                    e.jsx(rs, { className: Ts.header }),
                                    e.jsx(Is, {}),
                                    e.jsx(Je, {
                                        className: Ts.reset,
                                        disabled: 0 === p.length && 0 === _.get(),
                                        onClick: m.reset,
                                        texts: { tooltip: x.resetTooltipDescription, button: x.resetButton },
                                    }),
                                ],
                            }),
                            e.jsx(Ae, {
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
                    e.jsx(Ye.Shadow, { className: Ts.shadow }),
                ],
            })
        );
    }),
    Es = { context: 'model.hasBoxes.statistics' };
function Rs(s) {
    return e.jsx(ns, { options: s.options || Es, children: e.jsx(Bs, { ...s }) });
}
export { Be as B, re as P, De as R, ee as S, Rs as a, ze as d };
