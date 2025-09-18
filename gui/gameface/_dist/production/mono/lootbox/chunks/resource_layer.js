import { j as e, e as s, C as a, r as t, i as o, m as r, n } from './vendor.js';
import {
    n as c,
    Y as i,
    k as d,
    j as l,
    u,
    m as _,
    z as m,
    a0 as b,
    i as g,
    c as p,
    a1 as x,
    X as f,
    I as h,
    _ as y,
    a2 as v,
    C,
    B as N,
    e as j,
    a3 as w,
    y as T,
    a4 as I,
    a5 as R,
} from './lib.js';
import { S as k, g as S, f as E } from './utils.js';
import { N as B } from './title2.js';
import { l as L } from './getRewardImage.js';
import { a as G, g as P, D as $, R as D } from './resources.js';
import { S as M } from './sounds.js';
import { S as H } from './scroll_with_lips.js';
import { T as A, i as O, b as X, g as q, a as z, c as V } from './statistics.js';
import { u as U, R as F } from './use_cover_size.js';
const K = 'StatisticsButton_844af96b',
    Y = 'StatisticsButton_text_6dff36a3',
    J = 'StatisticsButton_icon_a1774dca';
function Q({ icon: a, label: t, onClick: o, className: r = '' }) {
    return e.jsxs('div', {
        className: s(K, r),
        onMouseEnter: () => {
            c.highlight();
        },
        onClick: () => {
            (c.yes1(), o());
        },
        children: [
            e.jsx('div', { className: J, style: { backgroundImage: `url(${a})` } }),
            e.jsx('div', { className: Y, children: t }),
        ],
    });
}
const W = t.createContext(void 0);
function Z() {
    const e = t.useContext(W);
    if (!e) throw new Error('useTabsContext must be used within a features/lootbox/components/base/tabs component');
    return e;
}
function ee({ guaranteedState: s, children: a }) {
    const o = t.useMemo(() => ({ guaranteedState: s }), [s]);
    return e.jsx(W.Provider, { value: o, children: a });
}
const se = 'GuaranteedTip_75e1ea9b',
    ae = 'GuaranteedTip_base__hover_80a4532e',
    te = 'GuaranteedTip_bg_eac0aa42',
    oe = 'GuaranteedTip_glow_19246642',
    re = 'GuaranteedTip_content_a2a98ab2',
    ne = 'GuaranteedTip_image_c950b1ec',
    ce = 'GuaranteedTip_text_8e5abdc1',
    ie = 'GuaranteedTip_description_9bc9798',
    de = 'GuaranteedTip_number_f40ec379';
const le = 'Item_c5163bf';
const ue = {
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
const _e = { base: 'Tabs_6382a8ae' };
function me({ className: a = '', children: o }) {
    const [r, n] = t.useState('');
    return e.jsx(ee, {
        guaranteedState: { activeId: r, setActiveId: n },
        children: e.jsx('div', { className: s(_e.base, a), children: o }),
    });
}
((me.Tab = function ({ tab: a, onClick: o, state: r, className: n = '' }) {
    const [i, d] = t.useState(!1);
    return e.jsx('div', {
        className: s(ue.base, ue[`base__${r}`], n),
        children: e.jsxs('div', {
            className: s(ue.wrapper),
            onClick: () => {
                r !== k.Disable && o();
            },
            onMouseEnter: () => {
                (r === k.Default && c.highlight(), d(!0));
            },
            onMouseLeave: () => {
                d(!1);
            },
            children: [
                i && r === k.Default && e.jsx('div', { className: ue.shadow }),
                e.jsx('div', {
                    className: s(ue.image, i && r === k.Default && ue.image__hovered),
                    style: { backgroundImage: `url(${L('s180x135', a.boxCategory)})` },
                }),
                a.boxesCount >= 0 &&
                    e.jsx('div', {
                        className: s(ue.counter, i && r === k.Default && ue.counter__hovered),
                        children: `×${a.boxesCount}`,
                    }),
            ],
        }),
    });
}),
    (me.Guaranteed = function ({ id: a, icons: o, texts: r, soundHover: n, boxesCountToGuaranteed: l, className: u }) {
        const [_, m] = t.useState(!0),
            { guaranteedState: b } = Z(),
            g = b.activeId === a,
            p = !_ && g;
        return (
            t.useEffect(
                () =>
                    i(() => {
                        m(!1);
                    }, 1050),
                [],
            ),
            t.useEffect(() => {
                g && c.sound(n);
            }, [g, n]),
            e.jsxs('div', {
                className: s(se, p && ae, u),
                children: [
                    e.jsxs('div', {
                        className: re,
                        children: [
                            e.jsx('div', { className: te }),
                            e.jsx('div', { className: ne, style: { backgroundImage: `url(${o.guaranteedIco})` } }),
                            e.jsx('div', {
                                className: ce,
                                children: e.jsx(d, {
                                    text: r,
                                    classMix: ie,
                                    binding: {
                                        count: e.jsx(B, {
                                            boxesCountToGuaranteed: l,
                                            glowIcon: o.glowIcon,
                                            strongGlowIcon: o.numberGlow,
                                            accentCount: 0,
                                            className: de,
                                        }),
                                    },
                                }),
                            }),
                        ],
                    }),
                    e.jsx('div', { className: oe, style: { backgroundImage: `url(${o.slotGlow})` } }),
                ],
            })
        );
    }),
    (me.Item = function ({ id: a, children: t, className: o }) {
        const { guaranteedState: r } = Z();
        return e.jsx('div', {
            onMouseOver: () => r.setActiveId(a),
            onMouseOut: () => r.setActiveId(''),
            className: s(le, o),
            children: t,
        });
    }),
    (me.Tooltip = function ({ children: s, boxCategory: a, eventName: t, className: o }) {
        const r = l.resolve('views'),
            n = u({
                contentId: r.read((e) => e.mono.lootbox.tooltips.box_tooltip('resId')),
                args: { boxCategory: a, eventName: t },
            });
        return e.jsx('div', { ...n, className: o, children: s });
    }));
const be = 'BoxSwitch_30f3e1e',
    ge = 'BoxSwitch_tab_66b3d775',
    pe = 'BoxSwitch_tab__isFirst_12303d41',
    xe = 'BoxSwitch_guaranteedTip_b851e3c0',
    fe = { opacity: 0, transform: 'translateX(-20rem)' },
    he = (e, s) =>
        t.useMemo(
            () =>
                ((e, s) =>
                    Array(e)
                        .fill(0)
                        .map((e) => new a({ id: e, ...s })))(e, s),
            [e, s],
        );
function ye({
    tabs: a,
    sounds: r,
    changeTab: n = m,
    texts: i,
    icons: d,
    tabsGuaranteedCount: l,
    active: u = '',
    className: g = '',
    startAnimation: p = !0,
    eventName: x,
}) {
    const [f, h] = t.useState(!1),
        y = he(a.length, fe),
        v = (e) => {
            y[e].start({
                to: { opacity: 1, transform: 'translateX(0)' },
                config: { duration: 160, easing: b.easeOutCubic },
                onRest: () =>
                    ((e) => {
                        e !== a.length - 1 ? v(e + 1) : h(!0);
                    })(e),
            });
        };
    t.useEffect(() => {
        p && v(0);
    }, [p, a.length]);
    return e.jsx(me, {
        className: s(be, g),
        children: _(a, (a, t) => {
            const _ = `${t}_${a.boxCategory}`,
                m = f && a.boxesCountToGuaranteed > 0 && a.boxesCountToGuaranteed <= l;
            return e.jsx(
                o.div,
                {
                    style: y[t].springs,
                    className: s(ge, 0 === t && pe),
                    children: e.jsxs(me.Item, {
                        id: _,
                        children: [
                            e.jsx(
                                me.Tooltip,
                                {
                                    boxCategory: a.boxCategory,
                                    eventName: x,
                                    children: e.jsx(me.Tab, {
                                        tab: a,
                                        onClick: () => {
                                            return ((e = a.boxCategory), c.sound(r.switch), void n(e));
                                            var e;
                                        },
                                        state: S(a.boxCategory, u, a.boxesCount),
                                    }),
                                },
                                a.boxCategory,
                            ),
                            m &&
                                e.jsx(me.Guaranteed, {
                                    id: _,
                                    icons: d,
                                    texts: i.plural('tabText', a.boxesCountToGuaranteed),
                                    soundHover: r.entryHover,
                                    boxesCountToGuaranteed: a.boxesCountToGuaranteed,
                                    className: xe,
                                }),
                        ],
                    }),
                },
                a.boxCategory,
            );
        }),
    });
}
const ve = {
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
        sounds: { statsClose: M.statsClose, statsOpen: M.statsOpen },
    },
    Ce = {
        dynamicTexts: {
            boxCategory: 'common.boxCategory.lowerCase',
            category: 'statisticsRewards.label',
            defaultCount: 'common.rewards.count',
            rewardsPremiumDay: 'common.rewards.premiumDay',
        },
    },
    [Ne, je] = g()(
        ({ observableModel: e }) => {
            const s = {
                    root: e.object(),
                    categories: e.arrayClone('categories'),
                    ...e.primitives(['eventName', 'openedCount']),
                },
                a = r(() => G(ve, s.eventName.get()), { equals: p }),
                t = r(() => P(Ce, s.eventName.get()), { equals: p }),
                o = r(() => G(ve, ''), { equals: p }),
                n = r(() => s.categories.get(), { equals: p }),
                c = r(() => s.eventName.get(), { equals: p });
            return {
                ...s,
                computes: { resources: a, dynamicResources: t, defaultResources: o, categories: n, getEventName: c },
            };
        },
        ({ externalModel: e }) => ({
            reset: e.createCallbackNoArgs('onReset'),
            updateResetState: e.createCallbackNoArgs('onUpdateResetState'),
        }),
    ),
    we = { base: 'Background_9cc315a3', border: 'Background_border_caf5e725', noise: 'Background_noise_7edfd4f1' };
function Te({ className: a = '', background: t }) {
    return e.jsxs('div', {
        className: s(we.base, a),
        children: [
            e.jsx('div', { className: we.noise, style: { backgroundImage: `url(${t})` } }),
            e.jsx('div', { className: we.border }),
        ],
    });
}
const Ie = {
    root: 'RewardsCategory_root_3eb3b669',
    base: 'RewardsCategory_9bfca053',
    base__big: 'RewardsCategory_base__big_44bddd9f',
    icon: 'RewardsCategory_icon_5d8c935',
    description: 'RewardsCategory_description_8ec07587',
    name: 'RewardsCategory_name_721013e0',
    count: 'RewardsCategory_count_5085a59d',
    count__premium_plus: 'RewardsCategory_count__premium_plus_3eb3b669',
    count__gold: 'RewardsCategory_count__gold_89f5aa05',
    count__credits: 'RewardsCategory_count__credits_e134547d',
    count__freeXP: 'RewardsCategory_count__freeXP_3eb3b669',
    count__crystal: 'RewardsCategory_count__crystal_96723e07',
    fadeIn: 'RewardsCategory_fadeIn_3eb3b669',
};
const Re = n(function ({ category: a, imageSize: t, className: o }) {
        const {
                model: { computes: r },
            } = je(),
            { texts: n } = r.resources(),
            { dynamicTexts: c } = r.dynamicResources(),
            { type: i, count: l } = a,
            u = ((e, s, a) => {
                switch (a.type) {
                    case A.PremiumPlus:
                        return `${a.count} ${s.rewardsPremiumDay.plural('premiumDay', a.count)}`;
                    case A.Gold:
                    case A.Credits:
                    case A.Crystal:
                    case A.FreeXP:
                    case A.Components:
                        return e.currency;
                    default:
                        return s.defaultCount.plural('count', a.count);
                }
            })(n, c, a),
            _ = O(i) ? c.boxCategory.dynOpt(X(i)) : c.category.dyn(q(i));
        return e.jsx(x, {
            tooltipArgs: z(i, r.getEventName()),
            children: e.jsxs('div', {
                className: s(Ie.base, Ie[`base__${t}`], o),
                children: [
                    e.jsx('div', { className: Ie.icon, style: { backgroundImage: `url(${V(a.type, t)})` } }),
                    e.jsxs('div', {
                        className: Ie.description,
                        children: [
                            e.jsx('div', { className: Ie.name, children: _ }),
                            e.jsx('div', {
                                className: s(Ie.count, Ie[`count__${i}`]),
                                children: e.jsx(d, {
                                    text: u,
                                    binding: { count: l, currency: e.jsx(d, { text: E(`${l}`) }) },
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    ke = 'CategoriesList_95abc50f',
    Se = 'CategoriesList_empty_34f630ba',
    Ee = 'CategoriesList_area_8027c1dc',
    Be = 'CategoriesList_base__wide_e53c0e2f',
    Le = 'CategoriesList_scroll_89c6313f',
    Ge = 'CategoriesList_scrollContent_77f57b21',
    Pe = 'CategoriesList_scrollBar_7226aea6',
    $e = 'CategoriesList_lip_87604d5d',
    De = 'CategoriesList_reward_bf69d32c',
    Me = 'CategoriesList_reward__odd_86028083';
const He = n(function ({ className: a }) {
        const {
                model: { computes: t },
            } = je(),
            { texts: o, images: r } = t.resources(),
            n = t.categories(),
            {
                breakpoint: { weight: c },
            } = f();
        return e.jsx('div', {
            className: s(ke, n.length > 7 && Be, a),
            children: e.jsx(H, {
                lipImage: r.scrollLipTop,
                classNames: { base: Le, scrollContent: Ge, scrollBar: Pe, lip: $e },
                children: e.jsxs('div', {
                    className: Ee,
                    children: [
                        0 === n.length && e.jsx('div', { className: Se, children: o.emptyHeader }),
                        _(n, (a, t) =>
                            e.jsx(
                                Re,
                                {
                                    category: a,
                                    imageSize: c < y.medium.weight ? h.Small : h.Big,
                                    className: s(De, !(t % 2) && Me),
                                },
                                t,
                            ),
                        ),
                    ],
                }),
            }),
        });
    }),
    Ae = 'Header_ae11a84e',
    Oe = 'Header_text_ba5c4112',
    Xe = 'Header_count_2ae11020',
    qe = 'Header_icon_42bde254';
const ze = n(function ({ className: a = '' }) {
        const {
                model: { computes: t, openedCount: o },
            } = je(),
            { texts: r, images: n } = t.resources();
        return e.jsxs('div', {
            className: s(Ae, a),
            children: [
                e.jsx(d, {
                    text: r.header,
                    binding: { count: e.jsx('span', { className: Xe, children: o.get() }) },
                    classMix: Oe,
                }),
                e.jsx(v, {
                    header: r.tooltipTitle,
                    body: r.tooltipDescription,
                    children: e.jsx('div', { className: qe, style: { backgroundImage: `url(${n.infoIcon})` } }),
                }),
            ],
        });
    }),
    Ve = { base: 'ResetButton_18914227' };
const Ue = n(function ({ className: a = '' }) {
        const {
                model: { computes: t, openedCount: o },
                controls: r,
            } = je(),
            n = t.categories(),
            { texts: c } = t.resources();
        return e.jsx('div', {
            className: s(Ve.base, a),
            children: e.jsx(v, {
                body: c.resetTooltipDescription,
                children: e.jsx(C, {
                    type: j.ghost,
                    size: N.medium,
                    disabled: 0 === n.length && 0 === o.get(),
                    onClick: r.reset,
                    mixClass: Ve.button,
                    children: c.resetButton,
                }),
            }),
        });
    }),
    Fe = {
        base: 'Content_f062b3a',
        header: 'Content_header_550bbd13',
        rewards: 'Content_rewards_eca51ba5',
        reset: 'Content_reset_593e0817',
    };
function Ke({ className: a }) {
    return e.jsxs('div', {
        className: s(Fe.base, a),
        children: [
            e.jsx(ze, { className: Fe.header }),
            e.jsx(He, { className: Fe.rewards }),
            e.jsx(Ue, { className: Fe.reset }),
        ],
    });
}
const Ye = {
        root: 'Popover_root_b6b2f5f6',
        base: 'Popover_f203d73',
        base__show: 'Popover_base__show_ab334a8',
        wrapper: 'Popover_wrapper_be8deb63',
        close: 'Popover_close_433ed601',
        background: 'Popover_background_7cb1d547',
        content: 'Popover_content_bf603773',
        shadow: 'Popover_shadow_9e358b54',
        fadeIn: 'Popover_fadeIn_b6b2f5f6',
    },
    Je = 'show',
    Qe = 'hide';
const We = n(function ({ onHidden: a, isStatsEnabled: o, className: r }) {
        const [n, d] = t.useState(Qe),
            {
                model: { computes: l, root: u },
                controls: _,
            } = je(),
            { isResetCompleted: m } = u.get(),
            { images: b, sounds: g } = l.resources(),
            p = () => {
                (d(Qe), c.sound(g.statsClose));
            },
            x = t.useRef(null);
        return (
            t.useEffect(() => {
                const e = x.current;
                if (e && n === Je) return (w.register(e, p), () => w.unregister(e, p));
            }, [n, x, d]),
            t.useEffect(() => {
                m && (p(), _.updateResetState());
            }, [m]),
            t.useEffect(
                () =>
                    T(() => {
                        (d(Je), c.sound(g.statsOpen));
                    }),
                [g, d],
            ),
            t.useEffect(() => {
                if (n === Qe)
                    return i(() => {
                        a();
                    }, 300);
            }, [a, n]),
            t.useEffect(() => {
                o || p();
            }, [o]),
            e.jsxs('div', {
                className: s(Ye.base, Ye[`base__${n}`], r),
                ref: x,
                children: [
                    e.jsxs('div', {
                        className: Ye.wrapper,
                        children: [
                            e.jsx(Te, { className: Ye.background, background: `${b.noiseBackground}` }),
                            e.jsx(Ke, { className: Ye.content }),
                            e.jsx('div', {
                                className: Ye.close,
                                style: { backgroundImage: `url(${b.closeIcon})` },
                                onClick: () => {
                                    (c.yes1(), p());
                                },
                                onMouseEnter: () => {
                                    c.highlight();
                                },
                            }),
                        ],
                    }),
                    e.jsx('div', { className: Ye.shadow }),
                ],
            })
        );
    }),
    Ze = { context: 'model.hasBoxes.statistics' };
function es(s) {
    return e.jsx(Ne, { options: s.options || Ze, children: e.jsx(We, { ...s }) });
}
const ss = (e, s) => {
        const a = s && !s.includes($),
            t = e && !e.includes($);
        return a ? s : t ? e : s || e;
    },
    as = (e, s) => {
        const a = ((e, s) => ss(e, s))(e, s),
            t = a.split(':')[0];
        return { src: a, type: t };
    },
    ts = (e, s) => {
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
    os = { base: 'ImageLayer_f8eebc6c' };
function rs({ src: a, className: t, onLoaded: o = m }) {
    return (ts(a, o), e.jsx('div', { className: s(os.base, t), style: { backgroundImage: `url(${a})` } }));
}
function ns({
    src: s,
    className: a,
    loop: o = !1,
    onLoaded: r,
    onEnded: n,
    playVideo: c,
    autoplay: i = !1,
    onPlay: d,
    shouldCleanUp: l = !1,
}) {
    const u = t.useRef(null),
        _ = U(D);
    t.useEffect(() => {
        const e = u.current;
        e && c && e.goToAndPlay(0);
    }, [c]);
    const [m, b] = I(() => {
        var e;
        const s = null == (e = u.current) ? void 0 : e.getCachedKeyframes();
        return !(null == s ? void 0 : s.length) || (null == r || r(), !1);
    });
    return (
        t.useEffect(() => (m(), b), []),
        t.useEffect(() => {
            if (l) {
                const e = u.current;
                return () => {
                    e && (e.domRef.src = '');
                };
            }
        }, [l, u]),
        e.jsx(R, { ref: u, className: a, style: _, src: s, autoplay: i, loop: o, onEnded: n, onPlay: d })
    );
}
const cs = 'ResourceLayer_62748772',
    is = 'ResourceLayer_layer_c06d2ca4',
    ds = 'ResourceLayer_layer__video_445e841b';
function ls({
    layer: a,
    className: t,
    onLoaded: o,
    onVideoEnded: r,
    playVideo: n,
    loop: c,
    autoplay: i,
    onVideoPlay: d,
    shouldCleanUp: l,
}) {
    return e.jsxs('div', {
        className: s(cs, t),
        children: [
            a.type === F.video &&
                e.jsx(ns, {
                    className: s(is, ds),
                    src: a.src,
                    onLoaded: o,
                    onEnded: r,
                    loop: c,
                    autoplay: i,
                    playVideo: n,
                    onPlay: d,
                    shouldCleanUp: l,
                }),
            a.type === F.image && e.jsx(rs, { src: a.src, className: is, onLoaded: o }),
        ],
    });
}
export { ye as B, ls as R, Q as S, es as a, as as d };
