import {
    j as e,
    f as a,
    r as t,
    m as s,
    p as r,
    g as i,
    v as n,
    o,
    e as l,
    w as c,
    t as d,
    x as _,
    y as u,
    z as m,
    A as p,
    B as b,
    C as h,
    D as f,
    E as g,
    F as v,
    s as x,
    G as w,
    R as C,
    q as y,
    H as j,
    I as S,
    J as N,
} from '../../../chunks/vendor.js';
import {
    C as k,
    B as I,
    q as P,
    n as B,
    v as A,
    w as E,
    A as T,
    x as L,
    y as D,
    O as W,
    S as O,
    z as M,
    D as V,
    p as z,
    g as F,
    h as $,
    E as H,
    G as U,
    R as G,
    i as q,
    e as X,
    H as Z,
    c as K,
    K as Y,
    L as Q,
    M as J,
    N as ee,
    m as ae,
    Q as te,
    W as se,
    X as re,
    r as ie,
    Y as ne,
    Z as oe,
    f as le,
    _ as ce,
    $ as de,
    a0 as _e,
    a1 as ue,
    a2 as me,
    a3 as pe,
    a4 as be,
    F as he,
    a5 as fe,
    a6 as ge,
    a7 as ve,
    a8 as xe,
    j as we,
    a9 as Ce,
    aa as ye,
    ab as je,
    ac as Se,
    u as Ne,
    a as ke,
    ad as Ie,
    ae as Pe,
    af as Re,
    ag as Be,
    ah as Ae,
    ai as Ee,
    aj as Te,
    ak as Le,
    al as De,
    am as We,
    an as Oe,
    ao as Me,
    ap as Ve,
    aq as ze,
    ar as Fe,
    as as $e,
    at as He,
    au as Ue,
    av as Ge,
    aw as qe,
    ax as Xe,
    ay as Ze,
    az as Ke,
    aA as Ye,
    aB as Qe,
    aC as Je,
    aD as ea,
    aE as aa,
    aF as ta,
    aG as sa,
    aH as ra,
    aI as ia,
    aJ as na,
    aK as oa,
    aL as la,
    aM as ca,
    aN as da,
    aO as _a,
    aP as ua,
    aQ as ma,
    aR as pa,
    aS as ba,
    aT as ha,
    aU as fa,
    l as ga,
    aV as va,
    aW as xa,
    aX as wa,
    I as Ca,
    aY as ya,
    aZ as ja,
    a_ as Sa,
    a$ as Na,
    b0 as ka,
    b1 as Ia,
    b2 as Pa,
    b3 as Ra,
    b4 as Ba,
    b5 as Aa,
    b6 as Ea,
    b7 as Ta,
    b8 as La,
    b9 as Da,
    ba as Wa,
    bb as Oa,
    s as Ma,
    bc as Va,
    bd as za,
    be as Fa,
    bf as $a,
    bg as Ha,
    bh as Ua,
    bi as Ga,
    bj as qa,
    bk as Xa,
    bl as Za,
    bm as Ka,
    bn as Ya,
    bo as Qa,
    bp as Ja,
    bq as et,
    br as at,
    bs as tt,
    bt as st,
    bu as rt,
    bv as it,
    b as nt,
    bw as ot,
    bx as lt,
    by as ct,
    bz as dt,
    bA as _t,
    bB as ut,
    bC as mt,
    bD as pt,
    T as bt,
    bE as ht,
    bF as ft,
    bG as gt,
    bH as vt,
    bI as xt,
    bJ as wt,
    bK as Ct,
    bL as yt,
    bM as jt,
    bN as St,
    bO as Nt,
    J as kt,
    U as It,
    bP as Pt,
    d as Rt,
    bQ as Bt,
    bR as At,
} from '../../../chunks/lib.js';
import {
    g as Et,
    a as Tt,
    o as Lt,
    v as Dt,
    e as Wt,
    m as Ot,
    R as Mt,
    b as Vt,
    c as zt,
} from '../../../chunks/utils.js';
import { g as Ft, a as $t } from '../../../chunks/filename.js';
import { T as Ht } from '../../../chunks/skills.js';
import { T as Ut } from '../../../chunks/constants.js';
var Gt = ((e) => (
        (e.Active = 'active'),
        (e.Paused = 'paused'),
        (e.Completed = 'completed'),
        (e.NotStarted = 'notStarted'),
        e
    ))(Gt || {}),
    qt = ((e) => (
        (e.Vehicle = 'vehicle'),
        (e.VehicleStyle = 'vehicleStyle'),
        (e.Style = 'style'),
        (e.Tankman = 'tankman'),
        (e.PostProgression = 'postProgression'),
        e
    ))(qt || {});
const Xt = 'BuyButtons_e1c3bdfe',
    Zt = 'BuyButtons_button_1f41b584',
    Kt = R.strings.battle_pass.battlePassBuyView,
    Yt = ({ isWalletAvailable: t, onAccept: s, buttonAcceptText: r, onCancel: i, className: n }) =>
        e.jsxs('div', {
            className: a(Xt, n),
            children: [
                e.jsx(k, { type: P.main, size: I.medium, disabled: !t, onClick: s, mixClass: Zt, children: r }),
                e.jsx(k, { type: P.primary, size: I.medium, onClick: i, mixClass: Zt, children: Kt.btnCancel() }),
            ],
        }),
    Qt = {
        root: 'Title_root_2e63cf3',
        base: 'Title_52ee5f68',
        chapter: 'Title_chapter_93ec32ba',
        base__transparentChapterName: 'Title_base__transparentChapterName_2e63cf3',
        buyBPTitle: 'Title_buyBPTitle_67e3537c',
        subTitle: 'Title_subTitle_855394c6',
        fadeInWithScale: 'Title_fadeInWithScale_2e63cf3',
        slideUp: 'Title_slideUp_2e63cf3',
        blink: 'Title_blink_2e63cf3',
        scale: 'Title_scale_2e63cf3',
        rotate: 'Title_rotate_2e63cf3',
        windowIn: 'Title_windowIn_2e63cf3',
        fadeOut: 'Title_fadeOut_2e63cf3',
        fadeIn: 'Title_fadeIn_2e63cf3',
    },
    Jt = R.strings.battle_pass.battlePassBuyView.confirm,
    es = ({ chapter: t, buyBP: s, subTitle: r, className: i, type: n = 'default' }) =>
        e.jsxs('div', {
            className: a(Qt.base, Qt[`base__${n}`], i),
            children: [
                e.jsx('span', {
                    className: Qt.chapter,
                    children: e.jsx(B, { text: Jt.chapter(), binding: { name: Et(t) } }),
                }),
                e.jsx('span', { className: Qt.buyBPTitle, children: s }),
                e.jsx('span', { className: Qt.subTitle, children: r }),
            ],
        });
var as = ((e) => (
    (e.Passed = 'passed'),
    (e.PossiblySelected = 'possiblySelected'),
    (e.Selected = 'selected'),
    (e.Available = 'available'),
    e
))(as || {});
const ts = (e, a) => (e / a) * 100 + '%',
    ss = {
        root: 'LevelProgressBar_root_932ea6c8',
        base: 'LevelProgressBar_1f000b52',
        base__small: 'LevelProgressBar_base__small_f5685264',
        glowWrapper: 'LevelProgressBar_glowWrapper_79467745',
        glow: 'LevelProgressBar_glow_bfbae884',
        glow__left: 'LevelProgressBar_glow__left_161b0a49',
        glow__right: 'LevelProgressBar_glow__right_ef115412',
        fadeInWithScale: 'LevelProgressBar_fadeInWithScale_932ea6c8',
        slideUp: 'LevelProgressBar_slideUp_932ea6c8',
        blink: 'LevelProgressBar_blink_932ea6c8',
        scale: 'LevelProgressBar_scale_932ea6c8',
        rotate: 'LevelProgressBar_rotate_932ea6c8',
        windowIn: 'LevelProgressBar_windowIn_932ea6c8',
        fadeOut: 'LevelProgressBar_fadeOut_932ea6c8',
        fadeIn: 'LevelProgressBar_fadeIn_932ea6c8',
    },
    rs = { ...L, freezed: !0, type: T.Simple },
    is = t.memo(({ size: t = O.Default, value: s, slideValue: r, maximum: i, theme: n = W }) => {
        const o = s >= i ? i : s;
        return e.jsxs('div', {
            className: a(ss.base, ss[`base__${t}`]),
            children: [
                e.jsx(D, { value: s, maxValue: i, deltaFrom: r, animationSettings: rs, theme: n }),
                e.jsx('div', {
                    className: ss.glowWrapper,
                    style: { left: ts(o, i) },
                    children: e.jsx('div', { className: a(ss.glow, ss.glow__left) }),
                }),
                e.jsx('div', {
                    className: ss.glowWrapper,
                    style: { left: ts(r, i) },
                    children: e.jsx('div', { className: a(ss.glow, ss.glow__right) }),
                }),
            ],
        });
    }),
    ns = {
        root: 'Points_root_d59040e3',
        base: 'Points_5f54a83a',
        labelSplitter: 'Points_labelSplitter_99f0664c',
        label: 'Points_label_ca794b4a',
        label__passed: 'Points_label__passed_24cdd0be',
        label__selected: 'Points_label__selected_c380b9cb',
        label__possiblySelected: 'Points_label__possiblySelected_443d6a02',
        label__available: 'Points_label__available_24cdd0be',
        fadeInWithScale: 'Points_fadeInWithScale_d59040e3',
        slideUp: 'Points_slideUp_d59040e3',
        blink: 'Points_blink_d59040e3',
        scale: 'Points_scale_d59040e3',
        rotate: 'Points_rotate_d59040e3',
        windowIn: 'Points_windowIn_d59040e3',
        fadeOut: 'Points_fadeOut_d59040e3',
        fadeIn: 'Points_fadeIn_d59040e3',
    },
    os = ({ start: t, total: s, passed: r, selected: i, possiblySelected: n, width: o }) =>
        e.jsx('div', {
            className: ns.base,
            children: M(s, (l) => {
                const c = ((e, a, t, s, r) =>
                        e === a || e === t - 1 || (e + 1) % 5 == 0 || e === s || e === r - 1 ? e + 1 : '')(
                        l,
                        t,
                        s,
                        r,
                        i,
                    ),
                    d = ((e, a, t, s) => {
                        switch (!0) {
                            case e >= t && e < s:
                                return as.PossiblySelected;
                            case e < a:
                                return as.Passed;
                            case e >= a && e < t:
                                return as.Selected;
                            default:
                                return as.Available;
                        }
                    })(l, r, i, n),
                    _ = o - 1;
                return e.jsx(
                    'div',
                    {
                        className: ns.labelSplitter,
                        children: e.jsx('div', {
                            className: a(ns.label, ns[`label__${d}`]),
                            style: { width: `${l === s - 1 ? _ : o}rem` },
                            children: c,
                        }),
                    },
                    l,
                );
            }),
        }),
    ls = 'LevelSlider_45aae928',
    cs = 'LevelSlider_base__locked_5e3186ce',
    ds = 'LevelSlider_slider_4e661b48',
    _s = 'LevelSlider_slider__down_aecacc79',
    us = ({
        start: s = 0,
        total: r = 0,
        passed: i = 0,
        selected: n = 0,
        width: o = 22,
        allowSlide: l = !0,
        onChangeSelectedLevels: c,
    }) => {
        const [d, _] = t.useState(!1),
            [u, m] = t.useState(n),
            [p, b] = t.useState(i + 1),
            h = t.useRef(null),
            f = t.useCallback(
                (e) => {
                    const a = h.current.getBoundingClientRect(),
                        t = a.width / (r - s),
                        n = (e - a.left) / (t || 1),
                        o = s + Math.round(n);
                    return V(i + 1, r, o);
                },
                [i, s, r],
            );
        (t.useEffect(() => {
            (m(n), b(i + 1));
        }, [n, i]),
            t.useEffect(() => {
                const e = (e) => {
                        if (l && d) {
                            const a = f(e.clientX);
                            (m(a), _(!1), c({ count: a - i }));
                        }
                    },
                    a = (e) => {
                        if (l)
                            if (d) {
                                const a = f(e.clientX);
                                u !== a && (z.sound(R.sounds.bp_progress_bar_drag()), m(a), b(a));
                            } else if (e.target === h.current) {
                                const a = f(e.clientX);
                                p !== a && b(a);
                            }
                    };
                return (
                    document.addEventListener('mouseup', e),
                    document.addEventListener('mousemove', a),
                    () => {
                        (document.removeEventListener('mouseup', e), document.removeEventListener('mousemove', a));
                    }
                );
            }, [l, u, f, d, c, i, p]));
        const g = (e) => {
                if (l && 0 === e.button) {
                    z.sound(R.sounds.bp_progress_bar_take());
                    const a = f(e.clientX);
                    (m(a), b(a), _(!0));
                }
            },
            v = r - s,
            x = 0 === i ? i : i - s,
            w = u - s;
        return e.jsxs('div', {
            children: [
                e.jsxs('div', {
                    className: a(ls, !l && cs),
                    style: { width: o * v + 'rem' },
                    ref: h,
                    onMouseOut: () => {
                        l && b(u);
                    },
                    onMouseDown: g,
                    children: [
                        e.jsx(os, { start: s, total: r, passed: i, selected: u, possiblySelected: p, width: o }),
                        e.jsx(is, { value: x, maximum: v, allowSlide: l, slideValue: w }),
                    ],
                }),
                l && e.jsx('div', { className: a(ds, d && _s), style: { left: o * w + 1 + 'rem' }, onMouseDown: g }),
            ],
        });
    },
    ms = 'AnimatedReward_1789d927',
    ps = ({ children: t, animationConfig: i, className: n }) => {
        const o = s(i);
        return e.jsx(r.div, { style: o, className: a(ms, n), children: t });
    },
    bs = 'RewardsList_d759a036',
    hs = 'RewardsList_reward_e3f6b2c5',
    fs = 'RewardsList_base__small_bed41ebf',
    gs = (e) => ({
        config: { duration: 300 },
        delay: 100 + 100 * e,
        from: { opacity: 0 },
        onStart: () => {
            z.sound(R.sounds.bp_reward());
        },
        to: { opacity: 1 },
    }),
    vs = ({ rewards: t }) => {
        const { breakpoint: s } = F(),
            r = s.weight <= $.small.weight;
        return e.jsx('div', {
            className: a(bs, r && fs),
            children: H(
                t,
                (e, a) => a < 10,
                (a, t) => {
                    const s = r ? U.Small : U.Big;
                    return e.jsx(
                        ps,
                        { animationConfig: gs(t), className: hs, children: e.jsx(G, { ...Tt(a, s) }) },
                        `reward${t}`,
                    );
                },
            ),
        });
    },
    xs = {
        battlePass: {
            chapterChoice: '/battlePass/chapterChoice',
            progression: '/battlePass/progression',
            postProgression: '/battlePass/postProgression',
            intro: '/battlePass/intro',
            buyPass: '/battlePass/buyPass',
            buyPassRewards: '/battlePass/buyPassRewards',
            buyLevels: '/battlePass/buyLevels',
            buyLevelsRewards: '/battlePass/buyLevelsRewards',
            holidayFinal: '/battlePass/holidayFinal',
        },
    },
    [ws, Cs] = q()(
        ({ observableModel: e }) => {
            const a = {
                    levels: e.primitives({
                        levelsStart: 'start',
                        levelsPassed: 'passed',
                        levelsTotal: 'total',
                        levelsSelected: 'selected',
                    }),
                    root: e.object(),
                    rewards: e.array('rewards.items'),
                },
                t = i(() => a.rewards.get(), { equals: X });
            return { ...a, computes: { rewards: t } };
        },
        ({ externalModel: e }) => ({
            changeSelectedLevels: e.createCallback(
                (e) => (e ? { count: null == e ? void 0 : e.count } : {}),
                'onChangeSelectedLevels',
            ),
        }),
    ),
    ys = 'Content_559efe9c',
    js = 'Content_buttonWrapper_3596c383',
    Ss = 'Content_buttonWrapper__active_97efd5f3',
    Ns = 'Content_rewardBtn_322728d5',
    ks = R.strings.battle_pass.battlePassBuyView.confirmAnyNumber,
    Is = 10,
    Ps = 12,
    Rs = 20,
    Bs = 24,
    As = 50,
    Es = n(() => {
        const { model: s, controls: r } = Cs(),
            { start: i, passed: n, total: o, selected: l } = s.levels,
            [c, d] = t.useState(0),
            { screenWidthRem: _, breakpoint: u } = F(),
            m = u.weight <= $.small.weight,
            p = s.computes.rewards(),
            { chapterID: b } = s.root.get(),
            h = Z();
        t.useEffect(
            () =>
                K(() => {
                    d(p.length - 10);
                }, 0),
            [p],
        );
        const f = Y(() => {
                h.push(xs.battlePass.buyLevelsRewards, { chapterID: b });
            }),
            g = (() => {
                const e = m ? Rs : Bs;
                if (o.get() <= As) return e;
                const a = _ - 2 * Is,
                    t = Math.floor(a / o.get()),
                    s = Math.min(t, e);
                return (
                    s < Ps &&
                        console.warn(`BuyLevelSlider is so big. Current size is ${s * o.get()}, max size is ${a}`),
                    s
                );
            })();
        return e.jsxs('div', {
            className: ys,
            children: [
                e.jsx(us, {
                    start: i.get(),
                    total: o.get(),
                    passed: n.get(),
                    selected: l.get(),
                    width: g,
                    onChangeSelectedLevels: r.changeSelectedLevels,
                    allowSlide: !0,
                }),
                e.jsx(vs, { rewards: p }),
                e.jsx('div', {
                    className: a(js, c > 0 && Ss),
                    children: e.jsx(k, {
                        type: P.ghost,
                        size: I.medium,
                        mixClass: Ns,
                        onClick: f,
                        children: c > 0 && e.jsx(B, { text: ks.moreRewards(), binding: { count: c } }),
                    }),
                }),
            ],
        });
    }),
    Ts = 'Footer_b7a0c3d',
    Ls = 'Footer_levelsBlock_9d3d3a12',
    Ds = 'Footer_priceBlock_85e8d734',
    Ws = 'Footer_levelsLabel_f348b218',
    Os = 'Footer_footerLabel_611e7f7e',
    Ms = 'Footer_price_4a9e98a1',
    Vs = ({ levelsToBuy: a, price: t }) =>
        e.jsxs('div', {
            className: Ts,
            children: [
                e.jsxs('div', {
                    className: Ls,
                    children: [
                        e.jsx('div', {
                            className: Os,
                            children: R.strings.battle_pass.battlePassBuyView.levelsSelected(),
                        }),
                        e.jsx('div', { className: Ws, children: a }),
                    ],
                }),
                e.jsxs('div', {
                    className: Ds,
                    children: [
                        e.jsx('div', { className: Os, children: R.strings.battle_pass.battlePassBuyView.price() }),
                        e.jsx(Q, { type: 'gold', size: 'big', value: t, classNames: { icon: Ms } }),
                    ],
                }),
            ],
        }),
    [zs, Fs] = q()(
        ({ observableModel: e }) => ({
            ...{
                main: e.primitives(['state', 'isWalletAvailable']),
                levels: e.primitives(
                    [
                        'price',
                        'levelsStart',
                        'levelsPassed',
                        'levelsTotal',
                        'levelsSelected',
                        'chapterID',
                        'backBtnText',
                    ],
                    'confirmAnyNumber',
                ),
            },
        }),
        ({ externalModel: e }) => ({
            showRewards: e.createCallback(() => ({}), 'showRewards'),
            buy: e.createCallbackNoArgs('confirmAnyNumber.onBuyClick'),
        }),
    ),
    $s = 'BuyLevelsContent_491ebf34',
    Hs = 'BuyLevelsContent_background_eb135b98',
    Us = 'BuyLevelsContent_shadow_95e0da99',
    Gs = 'BuyLevelsContent_content_27ab1b8b',
    qs = 'BuyLevelsContent_footer_bbd6ad32',
    Xs = 'BuyLevelsContent_divider_d1f36af3',
    Zs = 'BuyLevelsContent_title_f3f3fb3f',
    Ks = 'BuyLevelsContent_buttons_7ea06e78',
    Ys = R.strings.battle_pass.battlePassBuyView,
    Qs = n(() => {
        const { model: a, controls: s } = Fs(),
            { isWalletAvailable: r } = a.main,
            { price: i, levelsPassed: n, levelsSelected: o, chapterID: l } = a.levels,
            c = { context: 'model.confirmAnyNumber', rootId: R.aliases.battle_pass.BuyLevels('resId') },
            d = o.get() - n.get(),
            _ = Z();
        (((e) => {
            const a = t.useCallback(
                (a) => {
                    a.altKey || e();
                },
                [e],
            );
            A(E.ENTER, a);
        })(s.buy),
            J(E.ESCAPE, () => _.goBack()));
        const u = {
            backgroundImage: `url(${Ft(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, l.get())})`,
        };
        return e.jsxs('div', {
            className: $s,
            children: [
                e.jsx('div', { style: u, className: Hs }),
                e.jsx('div', { className: Us }),
                e.jsxs('div', {
                    className: Gs,
                    children: [
                        e.jsx(es, {
                            chapter: l.get(),
                            buyBP: Ys.confirmAnyNumber.title(),
                            subTitle: Ys.confirmAnyNumber.descr(),
                            className: Zs,
                        }),
                        e.jsx(ws, { options: c, children: e.jsx(Es, {}, `${d}${i.get()}`) }),
                        e.jsxs('div', {
                            className: qs,
                            children: [
                                e.jsx('div', { className: Xs }),
                                e.jsx(Vs, { levelsToBuy: d, price: i.get() }),
                                e.jsx(Yt, {
                                    onAccept: s.buy,
                                    onCancel: _.goBack,
                                    isWalletAvailable: r.get(),
                                    buttonAcceptText: R.strings.menu.boosterBuyWindow.buyButtonLabel(),
                                    className: Ks,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    [Js, er] = q()(({ observableModel: e }) => {
        const a = {
                rewardsInfo: e.primitives(['chapterID', 'packageState', 'toLevel', 'fromLevel']),
                nowRewards: e.array('nowRewards.items'),
            },
            t = i(() => a.nowRewards.get(), { equals: X });
        return { ...a, computes: { nowRewards: t } };
    }, ee),
    ar = 'ChapterBackground_69fd488d',
    tr = 'ChapterBackground_base__current_fdadf34',
    sr = ({ chapter: t, isCurrent: s, customBackgroundStyle: r }) =>
        e.jsx('div', { className: a(ar, s && tr), style: r || $t(t) }),
    rr = {
        root: 'GroupTitle_root_bdc8a0f5',
        base: 'GroupTitle_10694817',
        title: 'GroupTitle_title_30d20078',
        iconShadow: 'GroupTitle_iconShadow_15df5427',
        base__now: 'GroupTitle_base__now_bdc8a0f5',
        base__future: 'GroupTitle_base__future_bdc8a0f5',
        icon: 'GroupTitle_icon_8cd628dc',
        titleText: 'GroupTitle_titleText_a92b7265',
        descriptionText: 'GroupTitle_descriptionText_bfc23e31',
        steps: 'GroupTitle_steps_fb03b880',
        fadeInWithScale: 'GroupTitle_fadeInWithScale_bdc8a0f5',
        slideUp: 'GroupTitle_slideUp_bdc8a0f5',
        blink: 'GroupTitle_blink_bdc8a0f5',
        scale: 'GroupTitle_scale_bdc8a0f5',
        rotate: 'GroupTitle_rotate_bdc8a0f5',
        windowIn: 'GroupTitle_windowIn_bdc8a0f5',
        fadeOut: 'GroupTitle_fadeOut_bdc8a0f5',
        fadeIn: 'GroupTitle_fadeIn_bdc8a0f5',
    };
var ir = ((e) => ((e.now = 'now'), (e.future = 'future'), e))(ir || {});
const nr = ({ description: t, type: s, steps: r = '', className: i = '', title: n = '' }) =>
        e.jsxs('div', {
            className: a(rr.base, rr[`base__${s}`], i),
            children: [
                e.jsx('div', { className: rr.iconShadow }),
                e.jsxs('div', {
                    className: rr.title,
                    children: [
                        e.jsx('div', { className: rr.icon }),
                        e.jsx('div', { className: rr.titleText, children: n }),
                    ],
                }),
                e.jsx(B, {
                    classMix: rr.descriptionText,
                    text: t,
                    binding: { steps: e.jsx('span', { className: rr.steps, children: r }, r) },
                }),
            ],
        }),
    or = 'GroupRewards_46776305',
    lr = 'GroupRewards_item_662b83cb',
    cr = ({ rewards: t, className: s }) => {
        const { breakpoint: r } = F(),
            i = r.weight < $.medium.weight ? U.Small : U.Big;
        return e.jsx('div', {
            className: a(or, s),
            children: ae(t, (a, t) =>
                e.jsx('div', { className: lr, children: e.jsx(G, { ...Tt(a, i, !0) }) }, `reward_${t}_${a.name}`),
            ),
        });
    },
    dr = 'RewardsBlock_479e00eb',
    _r = 'RewardsBlock_groupTitle_f9f5fbdd',
    ur = 'RewardsBlock_groupRewards_2893db92',
    mr = 'RewardsBlock_groupRewards__future_d962e74b',
    pr = ({ description: t, iconType: s, steps: r = '', rewards: i, className: n = '', title: o = '' }) =>
        e.jsxs('div', {
            className: a(dr, n),
            children: [
                e.jsx(nr, { description: t, type: s, steps: r, className: _r, title: o }),
                e.jsx(cr, { rewards: i, className: a(ur, s === ir.future && mr) }),
            ],
        });
var br = ((e) => (
    (e[(e.Idle = 0)] = 'Idle'),
    (e[(e.Start = 1)] = 'Start'),
    (e[(e.Between = 2)] = 'Between'),
    (e[(e.End = 3)] = 'End'),
    e
))(br || {});
const hr = { type: 'idle' };
const fr = 'ScrollWithLips_b466eb6f',
    gr = 'ScrollWithLips_lip_b541dfde',
    vr = 'ScrollWithLips_lip__top_4610f987',
    xr = 'ScrollWithLips_lip__bottom_1755a6e5',
    wr = 'ScrollWithLips_scroll_35d7ef3c',
    Cr = 'ScrollWithLips_scroll__loaded_76bcfcc5',
    yr = 'ScrollWithLips_topButton_9c4da3a2',
    jr = 'ScrollWithLips_bottomButton_810d617c',
    Sr = 'ScrollWithLips_track_a8bacc80',
    Nr = ({ className: s, children: r, setVisibleScroll: i }) => {
        const n = se();
        !(function (e, a) {
            const {
                    contentRef: s,
                    wrapperRef: r,
                    scrollPosition: i,
                    clampPosition: n,
                    animationScroll: o,
                    events: l,
                    getContainerSize: c,
                    getWrapperSize: d,
                } = e,
                [_, u] = t.useState(hr),
                [m, p] = t.useState(!1);
            (t.useEffect(() => {
                const e = s.current;
                e && (e.style.cursor = m ? ('dragging' === _.type ? 'grabbing' : 'grab') : 'default');
            }, [s, m, _.type]),
                t.useEffect(() => {
                    if ('dragging' !== _.type) return;
                    const e = (e) => {
                            const t = s.current,
                                l = r.current;
                            if (!t || !l) return;
                            const c = _.positionFrom - e.screenY,
                                d = _.previousScrollPosition + c;
                            i.start({
                                scrollPosition: n(t, d),
                                from: { scrollPosition: o.scrollPosition.get() },
                                ...a,
                            });
                        },
                        t = () => {
                            (window.removeEventListener('mousemove', e), u({ type: 'scrollingToEnd' }));
                        };
                    return (
                        window.addEventListener('mousemove', e),
                        window.addEventListener('mouseup', t),
                        () => {
                            (window.removeEventListener('mousemove', e), window.removeEventListener('mouseup', t));
                        }
                    );
                }, [o.scrollPosition, n, s, _, i, r, a]),
                t.useEffect(() => {
                    if ('scrollingToEnd' !== _.type) return;
                    const e = () => {
                        u(hr);
                    };
                    return (o.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                }, [o.scrollPosition, _.type, l]),
                t.useEffect(() => {
                    const e = s.current;
                    if (!e) return;
                    const a = (e) => {
                        0 === e.button &&
                            u({
                                type: 'dragging',
                                positionFrom: e.screenY,
                                previousScrollPosition: o.scrollPosition.get(),
                            });
                    };
                    return (e.addEventListener('mousedown', a), () => e.removeEventListener('mousedown', a));
                }, [o.scrollPosition, s]),
                t.useEffect(() => {
                    const e = () => {
                        const e = c() ?? 0,
                            a = d() ?? 0;
                        p(e > a);
                    };
                    return (
                        l.on('resizeHandled', e),
                        l.on('recalculateContent', e),
                        () => {
                            (l.off('resizeHandled', e), l.off('recalculateContent', e));
                        }
                    );
                }, [l, c, d]));
        })(n);
        const o = ((e) => {
                const [a, s] = t.useState(0),
                    { animationScroll: r, getContainerSize: i, getWrapperSize: n, events: o } = e,
                    l = t.useCallback(() => {
                        const e = r.scrollPosition.get(),
                            a = i() - n();
                        switch (!0) {
                            case !a:
                                return s(0);
                            case e <= 0:
                                return s(1);
                            case e >= a:
                                return s(3);
                            default:
                                s(2);
                        }
                    }, [r.scrollPosition, i, n]);
                return (
                    t.useEffect(
                        () => (
                            (async () => {
                                await te(l);
                            })(),
                            o.on('change', l),
                            () => o.off('change', l)
                        ),
                        [o, l],
                    ),
                    t.useEffect(() => {
                        const e = async () => {
                            (await Lt(), l());
                        };
                        return (
                            engine.on('clientResized', e),
                            () => {
                                engine.off('clientResized', e);
                            }
                        );
                    }, [l]),
                    a
                );
            })(n),
            l = o !== br.Idle;
        return (
            t.useEffect(() => {
                i && i(o !== br.Idle);
            }, [i, o]),
            e.jsxs('div', {
                className: a(fr, s),
                children: [
                    o !== br.Start && o !== br.Idle && e.jsx('div', { className: a(gr, vr) }),
                    o !== br.End && o !== br.Idle && e.jsx('div', { className: a(gr, xr) }),
                    e.jsx(re.Vertical.Default, {
                        api: n,
                        barClassNames: { base: a(wr, l && Cr), topButton: yr, bottomButton: jr, track: Sr },
                        children: r,
                    }),
                ],
            })
        );
    },
    kr = 'Content_9b051971',
    Ir = 'Content_mainContent_6b58769b',
    Pr = R.strings.battle_pass.battlePassBuyView.reward,
    Rr = ({ fromLevel: a, toLevel: t, rewards: s }) => {
        const { description: r, completedSteps: i } = ((e, a) =>
            e < a
                ? { description: Pr.descriptionNowRewards(), completedSteps: `${e} – ${a}` }
                : { description: Pr.descriptionNowRewardsSingle(), completedSteps: `${a}` })(a, t);
        return e.jsx('div', {
            className: kr,
            children: e.jsx(Nr, {
                children: e.jsx(pr, {
                    title: Pr.titleNowRewards(),
                    description: r,
                    iconType: ir.now,
                    steps: i,
                    rewards: s,
                    className: Ir,
                }),
            }),
        });
    },
    Br = 'MoreRewards_f8e4ee5b',
    Ar = 'MoreRewards_background_276f926f',
    Er = 'MoreRewards_shadow_8f93a270',
    Tr = n(() => {
        const { model: a } = er(),
            { chapterID: t, toLevel: s, fromLevel: r } = a.rewardsInfo,
            i = Z();
        J(E.ESCAPE, () => i.goBack());
        const n = {
            backgroundImage: `url(${Ft(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, t.get())})`,
        };
        return e.jsxs('div', {
            className: Br,
            children: [
                e.jsx('div', {
                    className: Ar,
                    children: e.jsx(sr, { chapter: t.get(), isCurrent: !0, customBackgroundStyle: n }),
                }),
                e.jsx('div', { className: Er }),
                e.jsx(Rr, { rewards: a.computes.nowRewards(), toLevel: s.get(), fromLevel: r.get() }),
            ],
        });
    }),
    Lr = { context: 'model.rewards', rootId: R.aliases.battle_pass.BuyLevels('resId') },
    Dr = n(() => {
        const { model: a } = Fs();
        return 'rewardsState' === a.main.state.get()
            ? e.jsx(Js, { options: Lr, children: e.jsx(Tr, {}) })
            : e.jsx(Qs, {});
    }),
    Wr = () => e.jsx(zs, { options: { rootId: R.aliases.battle_pass.BuyLevels('resId') }, children: e.jsx(Dr, {}) }),
    [Or, Mr] = q()(({ observableModel: e }) => {
        const a = {
                levels: e.object(),
                nowRewards: e.array('nowRewards.items'),
                futureRewards: e.array('futureRewards.items'),
            },
            t = i(() => a.nowRewards.get(), { equals: X }),
            s = i(() => a.futureRewards.get(), { equals: X });
        return { ...a, computes: { nowRewards: t, futureRewards: s } };
    }, ee),
    Vr = 'Content_d0e2f711',
    zr = 'Content_mainContent_3c1770a6',
    Fr = 'Content_base__noScroll_da09528a',
    $r = R.strings.battle_pass.battlePassBuyView.reward,
    Hr = n(() => {
        const { model: s } = Mr(),
            { fromLevel: r, toLevel: i, isPurchaseWithLevels: n } = s.levels.get(),
            o = s.computes.nowRewards(),
            l = s.computes.futureRewards(),
            { description: c, completedSteps: d } = ((e, a, t) =>
                t
                    ? { description: $r.descriptionNowRewardsCheckbox() }
                    : e < a
                      ? { description: $r.descriptionNowRewards(), completedSteps: `${e} - ${a}` }
                      : { description: $r.descriptionNowRewardsSingle(), completedSteps: `${a}` })(r, i, n),
            [_, u] = t.useState(!1);
        return e.jsx(Nr, {
            className: a(Vr, !_ && Fr),
            setVisibleScroll: u,
            children: e.jsxs('div', {
                className: zr,
                children: [
                    o.length > 0 &&
                        e.jsx(pr, {
                            description: c,
                            iconType: ir.now,
                            rewards: o,
                            steps: d,
                            title: $r.titleNowRewards(),
                        }),
                    l.length > 0 &&
                        e.jsx(pr, {
                            description: $r.descriptionFutureRewards(),
                            iconType: ir.future,
                            rewards: l,
                            title: $r.titleFutureRewards(),
                        }),
                ],
            }),
        });
    }),
    Ur = 'MoreRewards_c02e454c',
    Gr = 'MoreRewards_content_16a0f9d5',
    qr = 'MoreRewards_background_c0223b52',
    Xr = 'MoreRewards_shadow_8f93a270',
    Zr = n(() => {
        const { model: a } = Mr(),
            { chapterID: s } = a.levels.get(),
            [r, i] = t.useState(!1),
            n = Z();
        (J(E.ESCAPE, () => n.goBack()),
            t.useEffect(() => {
                (async () => {
                    (await Lt(), i(!0));
                })();
            }, []));
        const o = { backgroundImage: `url(${Ft(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, s)})` };
        return e.jsxs('div', {
            className: Ur,
            children: [
                e.jsx('div', {
                    className: qr,
                    children: e.jsx(sr, { chapter: s, isCurrent: !0, customBackgroundStyle: o }),
                }),
                e.jsx('div', { className: Xr }),
                r && e.jsx('div', { className: Gr, children: e.jsx(Hr, {}) }),
            ],
        });
    }),
    Kr = {
        root: 'Emblem_root_9b4d607c',
        base__x60x60: 'Emblem_base__x60x60_d8756e36',
        base__x100x100: 'Emblem_base__x100x100_547cf3ad',
        base__x160x160: 'Emblem_base__x160x160_c9c06954',
        base__x200x200: 'Emblem_base__x200x200_2ddeb5ee',
        base__x240x240: 'Emblem_base__x240x240_308c1aa9',
        base__x360x360: 'Emblem_base__x360x360_98f20cf9',
        shield: 'Emblem_shield_451cf2c9',
        icon: 'Emblem_icon_73d84087',
        shield__x74x74: 'Emblem_shield__x74x74_a298d905',
        shield__x120x120: 'Emblem_shield__x120x120_c8aa5234',
        shield__x200x200: 'Emblem_shield__x200x200_f1ed9db0',
        shield__x260x260: 'Emblem_shield__x260x260_ef1c262b',
        shield__x300x300: 'Emblem_shield__x300x300_7c6d6f97',
        shield__x456x456: 'Emblem_shield__x456x456_c818292e',
        icon__x28x28: 'Emblem_icon__x28x28_6ea3e635',
        icon__x48x48: 'Emblem_icon__x48x48_f2526f88',
        icon__x60x60: 'Emblem_icon__x60x60_628dbf9a',
        icon__x80x80: 'Emblem_icon__x80x80_34079478',
        icon__x100x100: 'Emblem_icon__x100x100_e8181a63',
        icon__x120x120: 'Emblem_icon__x120x120_c8aa5234',
        icon__x160x160: 'Emblem_icon__x160x160_aec06e5c',
        fadeInWithScale: 'Emblem_fadeInWithScale_9b4d607c',
        slideUp: 'Emblem_slideUp_9b4d607c',
        blink: 'Emblem_blink_9b4d607c',
        scale: 'Emblem_scale_9b4d607c',
        rotate: 'Emblem_rotate_9b4d607c',
        windowIn: 'Emblem_windowIn_9b4d607c',
        fadeOut: 'Emblem_fadeOut_9b4d607c',
        fadeIn: 'Emblem_fadeIn_9b4d607c',
    },
    Yr = 'x100x100',
    Qr = 'x160x160',
    Jr = 'x200x200',
    ei = 'x240x240',
    ai = 'x360x360',
    ti = 'x74x74',
    si = 'x120x120',
    ri = 'x200x200',
    ii = 'x260x260',
    ni = 'x300x300',
    oi = 'x456x456',
    li = 'x600x600',
    ci = 'x912x912',
    di = 'x28x28',
    _i = 'x48x48',
    ui = 'x60x60',
    mi = 'x80x80',
    pi = 'x100x100',
    bi = 'x120x120',
    hi = 'x160x160',
    fi = 'x240x240',
    gi = 'x320x320',
    vi = ie.resolve('images'),
    xi = function ({ iconSize: t, shieldSize: s, containerSize: r, chapterID: i, bpPurchased: n, className: o = '' }) {
        const l = n ? 'purchased' : 'basic',
            c = String(i).slice(-1),
            d = s === ti ? si : s === si ? ii : s === ri ? oi : s === ii || s === ni ? li : ci,
            _ = t === di ? ui : t === _i ? pi : t === ui ? bi : t === mi ? hi : t === pi || t === bi ? fi : gi,
            u =
                vi.readOrEmpty(`battlePass.emblem.shield.c_${i}.${l}.${ne(s, d)}`, 'silent') ||
                vi.readOrEmpty(`battlePass.emblem.shield.default.${l}.${s}`),
            m =
                vi.readOrEmpty(`battlePass.emblem.icon.c_${i}.${l}.${ne(t, _)}`, 'silent') ||
                vi.readOrEmpty(`battlePass.emblem.icon.default_${c}.${l}.${t}`);
        return e.jsxs('div', {
            className: a(Kr.base, Kr[`base__${r}`], o),
            children: [
                e.jsx('div', { className: a(Kr.shield, Kr[`shield__${s}`]), style: { backgroundImage: `url(${u})` } }),
                e.jsx('div', {
                    className: a(Kr.icon, Kr[`icon__${t}`]),
                    style: {
                        backgroundImage: `url(${i > 0 ? m : vi.readOrEmpty(`battlePass.emblem.icon.not_chosen.${ne(t, ui)}`)})`,
                    },
                }),
            ],
        });
    },
    [wi, Ci] = q()(
        ({ observableModel: e }) => {
            o.box('');
            const a = {
                    root: e.object(),
                    main: e.primitives(['state', 'shopOfferDiscount', 'isShopOfferAvailable', 'isWalletAvailable']),
                    rewards: e.array('rewards'),
                    regularChapters: e.array('regularChapters'),
                    package: e.array('package'),
                },
                t = i(() => a.rewards.get().topPriorityRewards.items, { equals: X }),
                s = i(() => a.rewards.get().prevTopPriorityRewards.items, { equals: X }),
                r = i(() => a.rewards.get().nowRewards.items, { equals: X }),
                n = i(() => a.rewards.get().futureRewards.items, { equals: X }),
                l = i(() => a.package.get().starterPackRewards.items, { equals: X }),
                c = i(() => {
                    const { chapterID: e } = a.package.get(),
                        t = a.regularChapters.get();
                    return {
                        chapterIDs: [
                            e,
                            ...H(
                                t,
                                ({ chapterID: a }) => a !== e,
                                ({ chapterID: e }) => e,
                            ),
                        ],
                        amount: oe(t, ({ hasStarterPack: e }) => e).length,
                    };
                }),
                d = i((e) => {
                    var t;
                    return null ==
                        (t = le(a.regularChapters.get(), ({ hasStarterPack: a, chapterID: t }) => a && t === e))
                        ? void 0
                        : t.hasStarterPack;
                });
            return {
                ...a,
                computes: {
                    topPriorityRewards: t,
                    prevTopPriorityRewards: s,
                    nowRewards: r,
                    futureRewards: n,
                    starterPackInfo: c,
                    starterPackRewards: l,
                    hasStarterPackInChapter: d,
                },
            };
        },
        ({ model: e, externalModel: a }) => ({
            shopOffer: a.createCallbackNoArgs('onShopOfferClick'),
            buy: a.createCallbackNoArgs('onBuyClick'),
            togglePurchaseWithLevels: a.createCallbackNoArgs('onChangePurchaseWithLevels'),
            closeClick: a.createCallbackNoArgs('onShopOfferClick'),
            showRewardsClick: a.createCallbackNoArgs('onShowRewardsClick'),
        }),
    ),
    yi = 'PurchaseBlock_fa4dd8be',
    ji = 'PurchaseBlock_button_3b8b9877',
    Si = 'PurchaseBlock_previousPrice_1e77a9b2',
    Ni = 'PurchaseBlock_currentPrice_c4a7499d',
    ki = 'PurchaseBlock_currency_a51b98a4',
    Ii = 'PurchaseBlock_actionLip_63994768',
    Pi = ie.resolve('strings'),
    Ri = n(function ({ isPriceUpdateAnimation: a }) {
        const { model: t, controls: s } = Ci(),
            { isWalletAvailable: r } = t.root.get(),
            { price: i, prevPrice: n } = t.package.get(),
            o = ce(
                { currencySize: _e.medium, buttonSize: de.small },
                { medium: { currencySize: _e.extraLarge, buttonSize: de.large } },
            );
        return e.jsxs('div', {
            className: yi,
            children: [
                e.jsx('div', { className: Ii }),
                a
                    ? e.jsx('div', {
                          className: Si,
                          children: e.jsx(ue, {
                              classNames: { base: ki },
                              type: me.gold,
                              size: o.currencySize,
                              children: n,
                          }),
                      })
                    : e.jsx('div', {
                          className: Ni,
                          children: e.jsx(ue, {
                              classNames: { base: ki },
                              type: me.gold,
                              size: o.currencySize,
                              children: i,
                          }),
                      }),
                e.jsx(pe, {
                    theme: be.primary,
                    size: o.buttonSize,
                    className: ji,
                    onClick: s.buy,
                    disabled: !r,
                    'data-test-id': 'buyButton',
                    children: Pi.readOrEmpty('battle_pass.battlePassBuyView.confirm.btnBuy'),
                }),
            ],
        });
    }),
    Bi = 'DiscountIcon_932f671c',
    Ai = 'DiscountIcon_icon_655d7c11',
    Ei = 'DiscountIcon_highlight_75d6adf';
function Ti({ className: t = '' }) {
    return e.jsxs('div', {
        className: a(Bi, t),
        children: [e.jsx('div', { className: Ai }), e.jsx('div', { className: Ei })],
    });
}
const Li = 'Logos_1ed97e35',
    Di = 'Logos_logoWrapper_826e9a4f',
    Wi = 'Logos_logo_ada5f291',
    Oi = 'Logos_starterPack_f4dabb81',
    Mi = ie.resolve('images'),
    Vi = (e) => {
        const a = String(e).slice(-1);
        return (
            Mi.readOrEmpty(`battlePass.emblem.icon.c_${e}.purchased.${hi}`, 'silent') ||
            Mi.readOrEmpty(`battlePass.emblem.icon.default_${a}.purchased.${hi}`)
        );
    },
    zi = R.strings.battle_pass.battlePassBuyView.confirm.shopOfferBlock;
const Fi = n(function ({ className: t = '' }) {
        const {
                model: { computes: s },
            } = Ci(),
            { chapterIDs: r, amount: i } = s.starterPackInfo();
        return e.jsxs('div', {
            className: a(Li, t),
            children: [
                r.map((a, t) =>
                    e.jsx(
                        'div',
                        {
                            className: Di,
                            style: { zIndex: r.length - t },
                            children: e.jsx('div', { className: Wi, style: { backgroundImage: `url(${Vi(a)})` } }),
                        },
                        a,
                    ),
                ),
                Boolean(i) && e.jsx(B, { classMix: Oi, text: zi.packsAmount(), binding: { amount: i } }),
            ],
        });
    }),
    $i = 'ShopOfferBlock_5d538f0f',
    Hi = 'ShopOfferBlock_logos_c4a5c492',
    Ui = 'ShopOfferBlock_headline_333a5398',
    Gi = 'ShopOfferBlock_text_83d7e7fc',
    qi = 'ShopOfferBlock_discount_c7eeef37',
    Xi = 'ShopOfferBlock_title_7245add2',
    Zi = 'ShopOfferBlock_description_ef059d17',
    Ki = 'ShopOfferBlock_button_4790b6d6',
    Yi = R.strings.battle_pass.battlePassBuyView.confirm.shopOfferBlock;
const Qi = n(function ({ className: t = '' }) {
        const { model: s, controls: r } = Ci(),
            i = s.regularChapters.get(),
            n = Y(() => {
                r.shopOffer();
            }),
            o = ce({ buttonSize: de.small }, { medium: { buttonSize: de.large } });
        return e.jsxs('div', {
            className: a($i, t),
            children: [
                Boolean(i.length) && e.jsx(Fi, { className: Hi }),
                e.jsxs('div', {
                    className: Ui,
                    children: [
                        e.jsx(he, {
                            upgradeLegacy: !0,
                            className: Gi,
                            text: Yi.headline(),
                            params: { count: i.length },
                        }),
                        e.jsx(Ti, { className: qi }),
                    ],
                }),
                e.jsx(he, { upgradeLegacy: !0, className: Xi, text: Yi.title() }),
                e.jsx(he, { upgradeLegacy: !0, className: Zi, text: Yi.description() }),
                e.jsx(pe, { size: o.buttonSize, onClick: n, className: Ki, children: Yi.buy() }),
            ],
        });
    }),
    Ji = {
        base: 'Rewards_e0c7ea28',
        descriptionText: 'Rewards_descriptionText_70d3a019',
        priorityRewards: 'Rewards_priorityRewards_8561c5b0',
        priorityRewards__rewardsButtonVisible: 'Rewards_priorityRewards__rewardsButtonVisible_d5b93e12',
        rewardsWrapper: 'Rewards_rewardsWrapper_e727c56d',
        buttonWrapper: 'Rewards_buttonWrapper_fd4269bd',
        rewardBtn: 'Rewards_rewardBtn_c25bebb2',
        rewardBtn__currentRewardsAnimation: 'Rewards_rewardBtn__currentRewardsAnimation_4dddd688',
        buttonContent: 'Rewards_buttonContent_5599209b',
    },
    en = (e, a, t) => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100 * e,
        config: { duration: 100 },
        onStart: () => {
            a();
        },
        reset: t,
    }),
    an = ie.resolve('strings'),
    tn = n(({ isCheckboxAnimationActive: i, isPrevious: n = !1, className: o }) => {
        const { model: l } = Ci(),
            { chapterID: c, isPurchaseWithLevels: d } = l.package.get(),
            _ =
                l.computes.nowRewards().length +
                l.computes.futureRewards().length -
                l.computes.topPriorityRewards().length,
            u = l.computes.topPriorityRewards(),
            m = l.computes.prevTopPriorityRewards(),
            p = n ? m : u,
            b = _ > 0,
            h = () => {
                z.sound(R.sounds.bp_reward());
            },
            { breakpoint: f } = F(),
            g = f.weight < $.medium.weight ? U.Small : U.Big,
            v = s(en(6, h)),
            x = Z();
        return e.jsxs('div', {
            className: a(Ji.base, o),
            children: [
                e.jsx('div', {
                    className: Ji.descriptionText,
                    children:
                        n !== d
                            ? an.readOrEmpty('battle_pass.battlePassBuyView.confirm.descriptionCheckboxChecked')
                            : an.readOrEmpty('battle_pass.battlePassBuyView.confirm.description'),
                }),
                e.jsxs('div', {
                    className: Ji.rewardsWrapper,
                    children: [
                        e.jsx('div', {
                            className: a(Ji.priorityRewards, b && Ji.priorityRewards__rewardsButtonVisible),
                            children: ae(p, (a, s) =>
                                n
                                    ? t.createElement(G, { ...Tt(a, g), key: `${a.name}_${s}` })
                                    : e.jsx(
                                          ps,
                                          { animationConfig: en(s, h), children: e.jsx(G, { ...Tt(a, g) }) },
                                          `${a.name}_${s}`,
                                      ),
                            ),
                        }),
                        b &&
                            e.jsx(r.div, {
                                style: v,
                                children: e.jsx('div', {
                                    className: Ji.buttonWrapper,
                                    children: e.jsx(pe, {
                                        theme: be.secondary,
                                        size: de.large,
                                        className: a(Ji.rewardBtn, i && Ji.rewardBtn__currentRewardsAnimation),
                                        classNames: { content: Ji.buttonContent },
                                        onClick: () => x.push(xs.battlePass.buyPassRewards, { packageID: c }),
                                        children: e.jsx(B, {
                                            text: an.readOrEmpty('battle_pass.battlePassBuyView.btnRewards'),
                                            binding: { count: _ },
                                            classMix: Ji.text,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
            ],
        });
    }),
    sn = {
        root: 'StarterPack_root_e09c33a3',
        base: 'StarterPack_231839be',
        presentLogo: 'StarterPack_presentLogo_cb1c6f84',
        presentLogo__x36x36: 'StarterPack_presentLogo__x36x36_15fc148b',
        presentLogo__x52x52: 'StarterPack_presentLogo__x52x52_f480a652',
        equalLogo: 'StarterPack_equalLogo_407c8a9c',
        rewardsWrapper: 'StarterPack_rewardsWrapper_bf86c609',
        rewards: 'StarterPack_rewards_231839be',
        fadeInWithScale: 'StarterPack_fadeInWithScale_e09c33a3',
        slideUp: 'StarterPack_slideUp_e09c33a3',
        blink: 'StarterPack_blink_e09c33a3',
        scale: 'StarterPack_scale_e09c33a3',
        rotate: 'StarterPack_rotate_e09c33a3',
        windowIn: 'StarterPack_windowIn_e09c33a3',
        fadeOut: 'StarterPack_fadeOut_e09c33a3',
        fadeIn: 'StarterPack_fadeIn_e09c33a3',
    },
    rn = ie.resolve('strings'),
    nn = 'x36x36',
    on = 'x52x52',
    ln = n(function ({ starterPackRewards: t, presentSize: s, rewardSize: r, classNames: i }) {
        return e.jsxs('div', {
            className: sn.base,
            children: [
                e.jsx('div', {
                    className: a(sn.presentLogo, sn[`presentLogo__${s}`], null == i ? void 0 : i.presentLogo),
                }),
                e.jsx('div', {
                    className: a(sn.equalLogo, null == i ? void 0 : i.equalLogo),
                    children: rn.readOrEmpty('battle_pass.progression.footer.starter_pack.equal'),
                }),
                e.jsx('div', {
                    className: sn.rewardsWrapper,
                    children: e.jsx('div', {
                        className: sn.rewards,
                        children: ae(t, (a, t) =>
                            e.jsx(
                                G,
                                { ...Tt(a, r), className: null == i ? void 0 : i.reward },
                                `reward_${a.name}_${t}`,
                            ),
                        ),
                    }),
                }),
            ],
        });
    }),
    cn = 'StarterPack_packDescription_e09c33a3',
    dn = 'StarterPack_purchaseText_67051b2',
    _n = 'StarterPack_presentLogo_f1509f42',
    un = 'StarterPack_equalLogo_4d2bea9f',
    mn = ie.resolve('strings'),
    pn = n(function () {
        const { model: a } = Ci(),
            t = a.computes.starterPackRewards(),
            { breakpoint: s } = F(),
            r = s.weight < $.medium.weight ? U.Small : U.Big;
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(he, {
                    text: mn.readOrEmpty('battle_pass.battlePassBuyView.confirm.starterPack.description'),
                    upgradeLegacy: !0,
                    params: {
                        purchaseText: e.jsx('span', {
                            className: dn,
                            children: mn.readOrEmpty('battle_pass.battlePassBuyView.confirm.starterPack.purchaseText'),
                        }),
                    },
                    className: cn,
                }),
                e.jsx(ln, {
                    starterPackRewards: t,
                    presentSize: on,
                    rewardSize: r,
                    classNames: { presentLogo: _n, equalLogo: un },
                }),
            ],
        });
    }),
    bn = {
        base: 'PassContent_1cb8450b',
        contentWrapper: 'PassContent_contentWrapper_6bd43d6a',
        contentWrapper__noShopOffer: 'PassContent_contentWrapper__noShopOffer_3c8d5049',
        content: 'PassContent_content_c067e9cf',
        emblem: 'PassContent_emblem_bf66736c',
        chapterInfo: 'PassContent_chapterInfo_3efcc8f4',
        chapterName: 'PassContent_chapterName_b21f7a0e',
        check: 'PassContent_check_a557a239',
        checkIcon: 'PassContent_checkIcon_2ddd3576',
        checkboxLabel: 'PassContent_checkboxLabel_968825b',
        previousRewards: 'PassContent_previousRewards_3344ac4c',
        currentRewards: 'PassContent_currentRewards_cc1995e8',
        checkbox: 'PassContent_checkbox_a0d760a8',
        starterPack: 'PassContent_starterPack_bcf3e072',
        offerBack: 'PassContent_offerBack_a71885da',
        offerWrapper: 'PassContent_offerWrapper_e8393a4',
        offer: 'PassContent_offer_d09e2495',
    },
    hn = ie.resolve('strings'),
    fn = ie.resolve('images'),
    gn = n(() => {
        const [s, r] = t.useState(!1),
            i = t.useRef(!1),
            { model: n, controls: o } = Ci(),
            { chapterID: l, remainingLevelsCount: c, isPurchaseWithLevels: d } = n.package.get(),
            _ = n.computes.hasStarterPackInChapter(l),
            u = n.main.isShopOfferAvailable.get(),
            m = Z();
        J(E.ESCAPE, () => m.goBack());
        const p = (() => {
            const e = String(l).slice(-1),
                a = `battlePass.backgrounds.chapter_general.c_${l}`,
                t = `battlePass.backgrounds.chapter_general.default_${e}`;
            return fn.readOrEmpty(a, 'silent') || fn.readOrEmpty(t);
        })();
        t.useEffect(() => {
            if (i.current)
                return (
                    r(!0),
                    K(() => {
                        r(!1);
                    }, 300)
                );
            i.current = !0;
        }, [d, i]);
        const b = ce(
            { iconSize: pi, shieldSize: ii, containerSize: Jr },
            {
                medium: { iconSize: bi, shieldSize: ni, containerSize: ei },
                large: { iconSize: hi, shieldSize: oi, containerSize: ai },
            },
        );
        return e.jsxs('div', {
            className: bn.base,
            style: { backgroundImage: `url(${p})` },
            children: [
                e.jsx('div', {
                    className: a(
                        bn.contentWrapper,
                        !u && bn.contentWrapper__noShopOffer,
                        s && bn.contentWrapper__rewardsUpdateAnimation,
                    ),
                    children: e.jsxs('div', {
                        className: bn.content,
                        children: [
                            e.jsx('div', {
                                className: bn.emblem,
                                children: e.jsx(xi, {
                                    iconSize: b.iconSize,
                                    shieldSize: b.shieldSize,
                                    containerSize: b.containerSize,
                                    bpPurchased: !0,
                                    chapterID: l,
                                }),
                            }),
                            e.jsxs('div', {
                                className: bn.chapterInfo,
                                children: [
                                    e.jsx('div', {
                                        className: bn.chapterName,
                                        children: hn.readOrEmpty(`battle_pass.chapter.fullName.c_${l}`),
                                    }),
                                    c > 0 &&
                                        e.jsx('div', {
                                            className: bn.checkbox,
                                            children: e.jsx(fe, {
                                                checked: d,
                                                onCheckedChange: o.togglePurchaseWithLevels,
                                                classNames: { checkIcon: bn.checkIcon, check: bn.check },
                                                'data-test-id': 'buyLevelsCheckbox',
                                                children: e.jsx(he, {
                                                    text: hn.pluralOrEmpty(
                                                        'battle_pass.battlePassBuyView.confirm.checkbox.stage',
                                                        c,
                                                    ),
                                                    upgradeLegacy: !0,
                                                    params: { stagesNumber: c },
                                                    className: bn.checkboxLabel,
                                                }),
                                            }),
                                        }),
                                    s
                                        ? e.jsx(tn, {
                                              isCheckboxAnimationActive: s,
                                              className: bn.previousRewards,
                                              isPrevious: !0,
                                          })
                                        : e.jsx(tn, { isCheckboxAnimationActive: s, className: bn.currentRewards }),
                                    e.jsx('div', { className: bn.starterPack, children: _ && e.jsx(pn, {}) }),
                                    e.jsx(Ri, { isPriceUpdateAnimation: s }),
                                ],
                            }),
                        ],
                    }),
                }),
                u &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx('div', { className: bn.offerBack }),
                            e.jsx('div', {
                                className: bn.offerWrapper,
                                children: e.jsx('div', { className: bn.offer, children: e.jsx(Qi, {}) }),
                            }),
                        ],
                    }),
            ],
        });
    }),
    vn = { context: 'model.rewards', rootId: R.aliases.battle_pass.BuyPass('resId') },
    xn = n(() => {
        const { model: a } = Ci();
        switch (a.main.state.get()) {
            case 'buyState':
            default:
                return e.jsx(gn, {});
            case 'rewardsState':
                return e.jsx(Or, { options: vn, children: e.jsx(Zr, {}) });
        }
    }),
    wn = () => e.jsx(wi, { options: { rootId: R.aliases.battle_pass.BuyPass('resId') }, children: e.jsx(xn, {}) }),
    Cn = [
        { emblem: { delay: 0, diff: 60, duration: 350 } },
        { deadline: { delay: 30 } },
        { chapterName: { delay: 60 } },
        { finalReward: { delay: 90 } },
        { buttonsGroup: { delay: 120 } },
    ],
    yn = (e = 0, a = 30, t = 200) => ({
        from: { opacity: 0, transform: `translateY(${a}rem)` },
        to: { opacity: 1, transform: 'translateY(0rem)' },
        config: { duration: t, easing: ge.easeInOutCubic },
        delay: e,
    }),
    jn = ie.resolve('images'),
    Sn = ie.resolve('videos'),
    [Nn, kn] = q()(
        ({ observableModel: e }) => {
            const a = e.array('chapters'),
                t = { root: e.object(), selectedChapterID: o.box(0), prevChapterIndex: o.box(0), chapters: a },
                s = i(() => ve(a.get(), ({ isExtra: e }) => e)),
                r = i(() => ve(a.get(), ({ chapterState: e }) => e === Gt.Active)),
                n = i(() => xe(a.get(), ({ chapterState: e }) => e === Gt.Completed)),
                l = i((e) => le(a.get(), (a) => a.chapterID === e), { equals: X }),
                c = i((e) => {
                    const t = le(a.get(), (a) => a.chapterID === e);
                    return {
                        levelProgression: (null == t ? void 0 : t.levelProgression) || 0,
                        currentLevel: (null == t ? void 0 : t.currentLevel) || 0,
                    };
                }),
                d = i(() => oe(t.chapters.get(), (e) => !e.isExtra), { equals: X }),
                _ = i(() => oe(t.chapters.get(), (e) => !e.isExtra && !e.isPostProgression), { equals: X }),
                u = i(() => oe(d(), (e) => e.chapterState === Gt.Completed).length, { equals: X }),
                m = i(() => oe(t.chapters.get(), (e) => e.isExtra)),
                p = i(() => oe(t.chapters.get(), (e) => e.isPostProgression)),
                b = [2],
                h = i(
                    () => {
                        const e = le(t.chapters.get(), ({ chapterID: e }) => e === t.selectedChapterID.get());
                        return e || we(t.chapters.get(), t.prevChapterIndex.get());
                    },
                    { equals: X },
                ),
                f = i(
                    () => {
                        const { timeLeft: e, isExtra: a } = h();
                        return a ? Ce(e).days < 3 : Ce(e).days < 20;
                    },
                    { equals: X },
                ),
                g = i(() => [...(s() ? m() : []), ..._(), ...p()]),
                v = i(
                    () => {
                        const e = [];
                        return (
                            ae(g(), (a) => {
                                const t = String(a.chapterID).slice(-1),
                                    s = `battlePass.backgrounds.chapter_choice.c_${a.chapterID}`,
                                    r = `battlePass.backgrounds.chapter_choice.default_${t}`,
                                    i = `battle_pass.chapter_choice.c_${a.chapterID}.idle`,
                                    n = `battle_pass.chapter_choice.default_${t}.idle`;
                                e.push({
                                    chapter: a.chapterID,
                                    mainBg: jn.readOrEmpty(s, 'silent') || jn.readOrEmpty(r),
                                    idleBg: Sn.readOrEmpty(i, 'silent') || Sn.readOrEmpty(n, 'silent'),
                                });
                            }),
                            e
                        );
                    },
                    { equals: X },
                );
            return {
                ...t,
                computes: {
                    getChapterById: l,
                    getProgressionInfoByChapterId: c,
                    hasExtra: s,
                    hasActive: r,
                    detailedTimer: f,
                    isCompleted: n,
                    regularChapters: d,
                    extraChapters: m,
                    regularChaptersCompleteCount: u,
                    chaptersLineInfo: () =>
                        ye(
                            d(),
                            (e, { chapterID: a, chapterState: t }, s) => (
                                b.includes(s + 1) || e.push({ chapterID: a, chapterState: t }),
                                e
                            ),
                            [],
                        ),
                    sortedChapters: g,
                    selectedChapter: h,
                    backgrounds: v,
                },
            };
        },
        ({ externalModel: e, model: a, cleanup: t }) => {
            const s = l((e) => {
                    a.selectedChapterID.set(e);
                }),
                r = l((e) => {
                    a.prevChapterIndex.set(e);
                }),
                i = c(
                    () => a.root.get().selectedChapter,
                    (e) => {
                        (s(e), r(e));
                    },
                    { fireImmediately: !0 },
                );
            return (
                t(() => {
                    i();
                }),
                {
                    openPreview: e.createCallback((e) => ({ chapterID: e }), 'onPreviewClick'),
                    openAbout: e.createCallbackNoArgs('onAboutClick'),
                    openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                    onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
                    showTankmen: e.createCallback((e) => ({ chapterID: e }), 'showTankmen'),
                    onChapterSelect: e.createCallback((e) => ({ chapterID: e }), 'onChapterSelect'),
                    setSelectedChapterID: s,
                    setPrevChapterIndex: r,
                }
            );
        },
    ),
    In = 'LoopVideo_cfc6c5cb';
function Pn({ src: a, style: s }) {
    const r = t.useRef(null),
        [i, n] = je(() => {
            const e = r.current;
            if (!e) return !0;
            const a = e.getCachedKeyframes();
            return !(null == a ? void 0 : a.length) || (e.goToAndPlay(0), !1);
        });
    return (
        t.useEffect(() => (i(), n), []),
        t.useEffect(() => {
            const e = r.current;
            return () => {
                e && (e.domRef.src = '');
            };
        }, [r]),
        e.jsx(Se, { src: a, style: s, className: In, ref: r, autoplay: !0, loop: !0 })
    );
}
const Rn = 'Background_d1f724bf',
    Bn = 'Background_mainBg_b8b64d56',
    An = 'Background_idleBg_30e8ffa',
    En = n(function ({ style: t, i: s, index: i, classNames: n = {} }) {
        const { model: o } = kn(),
            l = o.prevChapterIndex.get(),
            c = o.computes.backgrounds(),
            { mainBg: d, idleBg: _ } = c[s],
            { width: u, height: m } = Ne(),
            p = ke(),
            b = Dt(u, m, p, _);
        return e.jsxs('div', {
            className: Rn,
            children: [
                e.jsx(r.div, {
                    className: a(Bn, null == n ? void 0 : n.main),
                    style: {
                        ...t,
                        backgroundImage: `url(${d})`,
                        zIndex: s === i ? 3 : s === l ? 2 : 1,
                        transform: t.x.to((e) => `translateX(${e}rem)`),
                    },
                }),
                s === i &&
                    e.jsx('div', {
                        className: a(An, null == n ? void 0 : n.idle),
                        children: e.jsx(Pn, { src: _, style: b }),
                    }),
            ],
        });
    });
(Ie.lightTank, Ie.mediumTank, Ie.heavyTank, Ie['AT-SPG'], Ie.SPG, M(1, 12, Pe));
const Tn = 'vehicle_types',
    Ln = 'nations',
    Dn = 'levels',
    Wn = { heavy_tank: Ee, medium_tank: Ae, light_tank: Be, at_spg: Re };
function On(e, a) {
    return 'isCommonProgression' === e && a.status !== De.UNSUITABLE_TO_QUEUE && a.bpProgress < a.maxBpScore;
}
function Mn(e, a, t, s) {
    switch (a) {
        case 'elite':
            return e.includes('premium') || (s && s.elite && !t.premium);
        case 'premium':
            return t.premium || (e.includes('elite') && s && s.elite);
        case 'bonus':
            return s && s.bonusMultiplier >= 2;
        case 'favorite':
            return t.favorite;
        case 'crystals':
            return t.crystalEarning;
        case 'rented':
            return !0;
        case 'canInstallAttachments':
            return t.canInstallAttachments;
        case 'own3DStyle':
            return s && s.own3DStyle;
        case 'event':
        case 'funRandom':
            return t.isSuitableVehicle;
        default:
            return !1;
    }
}
const Vn = {
    [Dn]: (e, a) => !e.levels || e.levels.includes(`level_${a.level}`),
    [Ln]: (e, a) => !e.nations || e.nations.includes(Le(a.nationId)),
    [Tn]: (e, a) => !e.vehicle_types || e.vehicle_types.includes(a.type),
};
function zn(e, a, t) {
    let s = !1;
    const r = e.specials ?? [];
    for (const i of r)
        if ('rented' !== i) {
            if (!Mn(r, i, a, t)) return !1;
        } else s = !0;
    if (!s && Te(a) && !(null == t ? void 0 : t.fromWotPlus)) return !1;
    if (t && e.battle_pass && e.battle_pass.length > 0) for (const i of e.battle_pass) if (!On(i, t)) return !1;
    for (const i of Object.keys(e)) if (i in Vn && !Vn[i](e, a)) return !1;
    return ((e, a) => {
        const t = We(a.role);
        let s = !1;
        for (const r of Object.keys(Wn)) if (r in e && ((s = !0), e[r].some((e) => e.includes(t)))) return !0;
        return !s;
    })(e, a);
}
function Fn(e, { shortName: a, fullName: t }) {
    const s = e.toLowerCase();
    return !(s.length > 0 && !a.toLowerCase().includes(s) && !t.toLowerCase().includes(s));
}
function $n(e, a, t) {
    const s = e[a] ?? [],
        r = { ...e };
    return ((r[a] = s.includes(t) ? s.filter((e) => e !== t) : [...s, t]), r[a].length > 0 || delete r[a], r);
}
function Hn(e, a) {
    return 'regular' === a.type
        ? $n(e, a.field, a.value)
        : Object.keys(Wn).reduce((e, t) => {
              const s = Wn[t].find((e) => e.includes(a.role));
              return s
                  ? $n(e, t, ((i = s), 'at_spg' === (r = t) ? `role_ATSPG_${i}` : `role_${r[0].toUpperCase()}T_${i}`))
                  : e;
              var r, i;
          }, e);
}
function Un(e, a, t, s) {
    if (t.favorite !== s.favorite) return t.favorite ? -1 : 1;
    const r = e[Le(t.nationId)] ?? 0,
        i = e[Le(s.nationId)] ?? 0;
    if (r !== i) return r - i;
    const n = a[t.type] ?? 0,
        o = a[s.type] ?? 0;
    return n !== o
        ? n - o
        : t.level !== s.level
          ? t.level - s.level
          : t.premium !== s.premium
            ? t.premium
                ? 1
                : -1
            : t.shortName.localeCompare(s.shortName);
}
const [Gn, qn] = q('FilterVehiclesProvider')(
        ({ observableModel: e, readByPath: a }) => {
            function t(e) {
                try {
                    return JSON.parse(e);
                } catch (a) {
                    return (console.error(a), {});
                }
            }
            const { text_search: s, ...r } = t(a('filters')),
                i = { ...e.primitives(['defaultFilters']) },
                n = Oe.structural(() => t(i.defaultFilters.get())),
                l = {
                    ...e.primitives(['carouselRowCount']),
                    filters: o.box(r, { deep: !1 }),
                    searchName: o.box((null == s ? void 0 : s[0]) ?? ''),
                    nations: e.arrayClone('nationsOrder'),
                };
            return {
                ...l,
                computes: {
                    hasFilters: Oe.primitive(
                        () => !Me.structural(n(), l.filters.get()) || l.searchName.get().length > 0,
                    ),
                    nations: () => l.nations.get(),
                    nationToIndex: Oe.shallow(() => l.nations.get().reduce((e, a, t) => ((e[a] = t), e), {})),
                    default: n,
                },
            };
        },
        ({ cleanup: e, model: a, externalModel: t }) => {
            const s = t.createCallback((e) => e, 'onSaveFilter');
            return (
                e(
                    d(() => {
                        var e, t;
                        ((e = a.filters.get()),
                            (t = a.searchName.get()),
                            s({ filters: JSON.stringify({ ...e, text_search: t.length > 0 ? [t] : void 0 }) }));
                    }),
                ),
                {
                    reset: l(() => {
                        (a.filters.set(a.computes.default()), a.searchName.set(''));
                    }),
                    search: l((e) => {
                        a.searchName.set(e);
                    }),
                    change: l((e) => {
                        a.filters.set(Hn(a.filters.get(), e));
                    }),
                    carouselTypeChange: t.createCallback((e) => ({ rowCount: e }), 'onCarouselTypeChange'),
                }
            );
        },
    ),
    Xn = 'disabled',
    Zn = [Ie.lightTank, Ie.mediumTank, Ie.heavyTank, Ie['AT-SPG'], Ie.SPG].reduce((e, a, t) => ((e[a] = t), e), {}),
    [Kn, Yn] = q('VehicleStatisticsProvider')(({ observableModel: e }) => {
        const a = e.dict('statistics'),
            t = Oe.structural((e) => a.get(e));
        return { ids: Oe.primitive(() => a.keys), get: t };
    }),
    [Qn, Jn] = q('VehiclesProvider')(
        ({ observableModel: e }) => {
            const a = { vehicles: e.dictRef('vehicles') };
            return {
                get: Oe.structural((e) => {
                    if (-1 === e) return;
                    const t = a.vehicles.get(e);
                    if (!t) return void console.error(`Error getting vehicle with id: ${e}`);
                    const s = (function (e) {
                        try {
                            const a = JSON.parse(e);
                            return ((a.shortName = a.shortName.replace(/<img.+\/>/, '')), a);
                        } catch (a) {
                            throw (console.error(`Error parsing JSON for element ${e}:`, a), a);
                        }
                    })(t);
                    return { ...s, imageKey: Ve(s.name) };
                }),
                has: Oe.primitive((e) => Boolean(a.vehicles.get(e))),
                ids: Oe.shallow(() => [...a.vehicles.keys.values()]),
                amount: Oe.primitive(() => a.vehicles.length),
                list: Oe.shallow(() => {
                    let e = [];
                    for (const [s, r] of a.vehicles.entries())
                        try {
                            e.push(JSON.parse(r.get()));
                        } catch (t) {
                            console.error(`Error parsing JSON for element ${s}:`, t);
                        }
                    return e;
                }),
            };
        },
        ee,
        { useRequires: () => ({ statistics: Yn() }) },
    ),
    [eo, ao] = q('MyVehiclesProvider')(
        (e) => {
            const a = e.requires.statistic.model.ids,
                t = Oe.structural((t) => {
                    if (a().has(t)) return e.requires.vehicles.model.get(t);
                }),
                s = Oe.shallow(() => {
                    const t = [];
                    for (const s of a().values()) {
                        const a = e.requires.vehicles.model.get(s);
                        a ? t.push(a) : console.warn(`No vehicle with id: ${s}`);
                    }
                    return t;
                });
            return { get: t, getAll: s, amount: Oe.primitive(() => s().length), ids: a };
        },
        ee,
        { useRequires: () => ({ vehicles: Jn(), statistic: Yn() }) },
    ),
    to = ie.resolve('strings'),
    so = ze($e + He),
    ro = () => `${Date.now().toString(16)}_${so(3)}`;
function io(e, a, t = 1) {
    const s = Fe(a, { count: t });
    return e.has(s) ? io(e, a, t + 1) : s;
}
function no(e = '', a = []) {
    return {
        title: '' !== e ? e : to.readOrEmpty('playlists.defaultName'),
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        list: a,
    };
}
const oo = (e) => ({ type: 'ok', value: e });
function lo(e) {
    if ('ok' === e.type) return e.value;
}
const co = 'delete',
    _o = 'import',
    uo = _({ title: p(), createdAt: u(f(), h(), b(0)), modifiedAt: u(f(), h(), b(0)), list: m(u(f(), h())) }),
    mo = u(
        p(),
        g((e) => (e.length > 0 ? e : void 0)),
    ),
    [po, bo, { Context: ho }] = q('PlaylistsProvider')(
        ({ requires: e, observableModel: a }) => {
            const t = a.dict('storage'),
                s = a.primitives(['selectedID', 'enabled', 'dirtyEdit']),
                r = e.filters.model.computes.default,
                i = {
                    vehicles: e.vehicles.model,
                    myVehicles: e.myVehicles.model,
                    enabled: s.enabled,
                    nationsOrder: e.filters.model.nations,
                    filters: o.box(r(), { deep: !1 }),
                    searchName: o.box('', { deep: !1 }),
                    edit: { initial: o.box(void 0, { deep: !1 }), dirty: s.dirtyEdit },
                },
                n = Oe.shallow(() => t.keys),
                l = Oe.primitive(() => v(mo, s.selectedID.get())),
                c = Oe.structural((e) => {
                    try {
                        const a = t.get(e);
                        if (!a) return oo(void 0);
                        const s = v(uo, JSON.parse(a)),
                            r = new Set();
                        for (const e of s.list)
                            if (Ue[e]) {
                                const a = Ue[e].find((e) => Boolean(i.myVehicles.get(e.toString())));
                                r.add(a ?? e);
                            } else r.add(e);
                        return oo({ ...s, list: [...r.values()] });
                    } catch (r) {
                        return (
                            console.error(`Error getting playlist with ${e} id`, r),
                            (a = 'PARSE_ERROR'),
                            (s = String(r)),
                            { type: 'error', error: { tag: a, msg: s } }
                        );
                    }
                    var a, s;
                }),
                d = Oe.shallow(() =>
                    Ge(n().values())
                        .map((e) => c(e))
                        .filter((e) => 'ok' === e.type && void 0 !== e.value)
                        .map((e) => e.value.title)
                        .reduce((e, a) => e.add(a), new Set()),
                ),
                _ = Oe.primitive((e) => {
                    const a = c(e);
                    if ('ok' !== a.type || void 0 === a.value) throw new Error(`Can't get playlist by id ${e}`);
                    return a.value;
                }),
                u = Oe.structural((e) => {
                    const a = c(e);
                    if ('ok' === a.type && void 0 !== a.value) return { id: e, ...a.value };
                }),
                m = Oe.shallow(() =>
                    Ge(n().values())
                        .map((e) => u(e))
                        .filter((e) => void 0 !== e)
                        .toArray()
                        .sort((e, a) => e.title.localeCompare(a.title))
                        .map((e) => e.id),
                ),
                p = Oe.primitive(() => {
                    const e = l();
                    if (e) return u(e);
                }),
                b = Oe.shallow(() => {
                    const a = e.filters.model.computes.nationToIndex();
                    return qe(e.myVehicles.model.getAll(), (e, t) => Un(a, Zn, e, t));
                }),
                h = Oe.primitive((e) => {
                    var a;
                    const t = u(e),
                        s = g();
                    if (void 0 === t || 0 === t.list.length) return;
                    const r = new Set(t.list);
                    for (let i = 0; i < s.length; i += 1) {
                        const e = Number(null == (a = s[i]) ? void 0 : a.id);
                        if (Xe(e) && r.has(e)) return i;
                    }
                }),
                f = Oe.primitive(() => !1 === Me.structural(r(), i.filters.get()) || i.searchName.get().length > 0),
                g = Oe.shallow(() => {
                    const a = i.filters.get(),
                        t = b(),
                        s = i.searchName.get();
                    return t.filter((t) => {
                        if (!Fn(s, t)) return !1;
                        const r = e.statistic.model.get(t.id);
                        return zn(a, t, r);
                    });
                }),
                x = Oe.primitive((a) => {
                    var t;
                    return Boolean(null == (t = e.statistic.model.get(a)) ? void 0 : t.elite);
                }),
                w = Oe.shallow((a) => {
                    const t = e.vehicles.model.get(a);
                    return null == t ? void 0 : t.imageKey;
                }),
                C = Oe.primitive(() => g().length),
                y = Oe.shallow(() => {
                    var e;
                    return null == (e = p()) ? void 0 : e.list.map(i.vehicles.get);
                });
            return {
                ...i,
                current: p,
                titles: d,
                currentId: l,
                byIdUnsafe: _,
                byId: c,
                byIdFull: u,
                filtered: g,
                filteredAmount: C,
                defaultFilters: r,
                hasFilters: f,
                vehicleImage: w,
                currentVehicles: y,
                ids: n,
                sortedIds: m,
                isElite: x,
                firstAddedVehicleIndexByPlaylistId: h,
            };
        },
        ({ model: e, externalModel: a }) => {
            const t = a.createCallback(
                (e) => ({ id: e.id, data: JSON.stringify(e.initial), skipRedirect: e.skipRedirect }),
                'onCreate',
            );
            return {
                filters: Ze({
                    update: (a) => {
                        e.filters.set(Hn(e.filters.get(), a));
                    },
                    reset: () => {
                        (e.filters.set(e.defaultFilters()), e.searchName.set(''));
                    },
                    search: (a) => e.searchName.set(a),
                    change: (a) => {
                        e.filters.set(Hn(e.filters.get(), a));
                    },
                }),
                create: l((a) => {
                    const { id: s = ro(), vehicleIds: r = [], skipRedirect: i = !1 } = a ?? {};
                    t({ id: s, initial: no(io(e.titles(), 'playlists.defaultName'), r), skipRedirect: i });
                }),
                edit: {
                    sendModify: a.createCallback((e, a) => ({ id: e, data: JSON.stringify(a) }), 'onModify'),
                    setDirty: a.createCallback((e) => ({ value: e }), 'onSetDirtyEdit'),
                },
                select: a.createCallback((e = '') => ({ id: e }), 'onSelect'),
                save: a.createCallback((e) => ({ id: e }), 'onSave'),
                exit: a.createCallback((e) => ({ id: e }), 'onDiscard'),
                goToAboutVehicle: a.createCallback((e) => ({ intCD: e }), 'onGoToAboutVehicle'),
                openImport: a.createCallback(
                    l(() => ({ type: _o, params: JSON.stringify({ titles: Array.from(e.titles().values()) }) })),
                    'openImportConfirm',
                ),
                openDeleteConfirm: a.createCallback(
                    (e, a) => ({ id: e, type: co, params: JSON.stringify({ title: a }) }),
                    'openDeleteConfirm',
                ),
            };
        },
        { useRequires: () => ({ vehicles: Jn(), myVehicles: ao(), filters: qn(), statistic: Yn() }) },
    ),
    fo = 'pending',
    go = 'readyToSelect',
    vo = Xn,
    [xo, wo] = q('VehiclesInventoryProvider')(
        (e) => {
            const a = e.observableModel.primitives([
                    'freeSlotsCount',
                    'defaultSlotPrice',
                    'slotPrice',
                    'slotPriceCurrency',
                    'recoverableVehicleCount',
                    'currentVehicleIntCD',
                    'currentVehicleInventoryId',
                    'hasDiscont',
                    'bpEntityValid',
                    'bpStatus',
                    'telecomRentStatus',
                ]),
                t = o.box([], { deep: !1 }),
                s = { intCD: a.currentVehicleIntCD, inventoryId: a.currentVehicleInventoryId },
                r = Oe.shallow(() => {
                    const a = s.intCD.get();
                    return e.requires.vehicles.model.get(a);
                }),
                i = Oe.shallow((a) => {
                    if (void 0 === a) return;
                    const t = s.intCD.get();
                    return -1 === t ? e.requires.vehicles.model.get(a) : e.requires.vehicles.model.get(t);
                }),
                n = Oe.shallow(() => {
                    const a = s.intCD.get();
                    return e.requires.statistic.model.get(a);
                }),
                l = Oe.primitive(() => -1 !== s.intCD.get()),
                c = Oe.shallow((e) => Ke(e, (e) => _.get(String(e)))),
                _ = e.requires.myVehicles.model,
                u = Oe.structural(() => e.requires.vehicles.model.list().filter((e) => e.rent.isRented)),
                m = Oe.primitive(() =>
                    e.requires.vehicles.model.list().some((a) => {
                        const t = e.requires.statistic.model.get(a.vehicleId);
                        if (t) return 'inPrebattle' === t.status;
                    }),
                ),
                p = Oe.primitive(() => {
                    const a = [..._.getAll()],
                        t = e.requires.filters.model.computes.nationToIndex();
                    return (a.sort((e, a) => Un(t, Zn, e, a)), a);
                });
            return (
                e.cleanup(
                    d(() => {
                        var a;
                        const s = e.requires.filters.model.filters.get(),
                            r = e.requires.filters.model.searchName.get(),
                            i = null == (a = e.requires.playlists) ? void 0 : a.model.current(),
                            n = _.ids(),
                            o = (i ? c(i.list) : p()).filter(
                                (a) =>
                                    !1 !== n.has(a.id) && !!zn(s, a, e.requires.statistic.model.get(a.id)) && Fn(r, a),
                            );
                        x(() => t.set(o));
                    }),
                ),
                {
                    vehicles: e.requires.myVehicles.model,
                    vehicle: i,
                    selectedVehicle: r,
                    isVehicleSelected: l,
                    selectedVehicleStatistics: n,
                    accumulateByIds: c,
                    rentVehiclesList: u,
                    prebattleModeActive: m,
                    current: {
                        intCD: a.currentVehicleIntCD,
                        inventoryId: a.currentVehicleInventoryId,
                        amount: Oe.primitive(() => t.get().length),
                        list: () => t.get(),
                        ids: Oe.shallow(() => t.get().map((e) => e.id)),
                        playlist: e.requires.playlists ? e.requires.playlists.model.current : () => {},
                    },
                    slots: {
                        free: a.freeSlotsCount,
                        price: { defaultValue: a.defaultSlotPrice, value: a.slotPrice, currency: a.slotPriceCurrency },
                        recover: a.recoverableVehicleCount,
                        discount: a.hasDiscont,
                    },
                    bpState: { active: a.bpEntityValid, status: a.bpStatus },
                    telecomRentStatus: a.telecomRentStatus,
                }
            );
        },
        (e) => ({
            select: e.externalModel.createCallback((e) => ({ id: e }), 'onSelect'),
            buySlot: e.externalModel.createCallbackNoArgs('onBuySlot'),
            goBuyVehicle: e.externalModel.createCallbackNoArgs('onGoBuyVehicle'),
            goRecoverVehicle: e.externalModel.createCallbackNoArgs('onGoRecoverVehicle'),
            selectTelecomRentalVehicle: e.externalModel.createCallbackNoArgs('onSelectTelecomRentalVehicle'),
        }),
        {
            useRequires: () => ({
                myVehicles: ao(),
                vehicles: Jn(),
                statistic: Yn(),
                filters: qn(),
                playlists: t.useContext(ho),
            }),
        },
    ),
    Co = -1,
    [yo, jo, { Context: So }] = q('ManageableVehiclePlaylistsModel')(
        (e) => {
            const a = {
                    ...e.observableModel.primitives({ intCD: 'vehicleId' }),
                    displayedVehicleId: o.box(Co),
                    changesInPlaylistSelection: o.set(new Set()),
                },
                t = Oe.shallow(() =>
                    e.requires.playlists.model.sortedIds().reduce((a, t) => {
                        const s = e.requires.playlists.model.byIdFull(t);
                        return (s ? a.push(s) : console.warn(`Missing playlist data for id = ${t}`), a);
                    }, []),
                ),
                s = Oe.structural(() =>
                    t().map(({ id: e, title: t, list: s }) => {
                        const r = s.includes(a.displayedVehicleId.get());
                        return { id: e, title: t, selected: a.changesInPlaylistSelection.has(e) ? !r : r };
                    }, []),
                ),
                r = Oe.primitive(() => 0 === s().length);
            return (
                e.cleanup(
                    d(() => {
                        (a.displayedVehicleId.get(), t(), x(() => a.changesInPlaylistSelection.clear()));
                    }),
                ),
                {
                    ...a,
                    computeds: {
                        playlistItems: s,
                        isVehiclePlaylistsEmpty: r,
                        vehicle: Oe.shallow(() => {
                            const t = a.displayedVehicleId.get(),
                                s = e.requires.vehicles.model.get(t),
                                r = e.requires.vehicleStatistics.model.get(t);
                            if (void 0 !== s && void 0 !== r) return { ...s, elite: r.elite };
                        }),
                        empty: Oe.primitive(() => a.vehicleId.get() === Co),
                        sortedPlaylists: t,
                        hasChanges: Oe.primitive(() => a.changesInPlaylistSelection.size > 0),
                        enabled: Oe.primitive(() => e.requires.playlists.model.enabled.get()),
                    },
                }
            );
        },
        (e) => ({
            setDisplayedVehicleId: l((a) => {
                e.model.displayedVehicleId.set(a);
            }),
            reset: e.externalModel.createCallbackNoArgs('onReset'),
            selectVehicle: e.externalModel.createCallback((e) => ({ id: e }), 'onSelectVehicle'),
            goToCreatePlaylist: (a) => {
                e.requires.playlists.controls.create({ vehicleIds: a });
            },
            togglePlaylist: l((a) => {
                e.model.changesInPlaylistSelection.has(a)
                    ? e.model.changesInPlaylistSelection.delete(a)
                    : e.model.changesInPlaylistSelection.add(a);
            }),
            save: l(() => {
                const a = e.model.displayedVehicleId.get(),
                    t = e.requires.playlists.model.currentId();
                for (const s of e.model.changesInPlaylistSelection) {
                    const t = lo(e.requires.playlists.model.byId(s));
                    if (!t) return void console.warn(`Missing playlist data for id = ${s}`);
                    (e.requires.playlists.controls.edit.sendModify(s, {
                        ...t,
                        modifiedAt: Date.now(),
                        list: t.list.includes(a) ? t.list.filter((e) => e !== a) : [...t.list, a],
                    }),
                        e.requires.playlists.controls.save(s));
                }
                e.requires.playlists.controls.select(t);
            }),
            cancel: l(() => {
                e.model.changesInPlaylistSelection.clear();
            }),
        }),
        { useRequires: () => ({ vehicles: Jn(), playlists: bo(), vehicleStatistics: Yn() }) },
    ),
    No = () => t.useContext(So),
    ko = (e) =>
        t.createElement(
            'svg',
            {
                width: 24,
                height: 24,
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                xmlnsXlink: 'http://www.w3.org/1999/xlink',
                ...e,
            },
            t.createElement('path', {
                opacity: 0.8,
                d: 'M19 16H22V18H19V21H17V18H14V16H17V13H19V16Z',
                fill: '#0D0E10',
            }),
            t.createElement('path', {
                d: 'M19 15H22V17H19V20H17V17H14V15H17V12H19V15Z',
                fill: 'url(#paint0_radial_111851_505980)',
            }),
            t.createElement('path', {
                d: 'M19 15H22V17H19V20H17V17H14V15H17V12H19V15Z',
                fill: 'url(#pattern0_111851_505980)',
                fillOpacity: 0.8,
            }),
            t.createElement(
                'g',
                { opacity: 0.8 },
                t.createElement('path', {
                    d: 'M12 16H5V15H12V16ZM15 13H5V12H15V13ZM19 10H5V9H19V10ZM19 7H5V6H19V7Z',
                    fill: 'url(#paint1_radial_111851_505980)',
                }),
                t.createElement('path', {
                    d: 'M12 16H5V15H12V16ZM15 13H5V12H15V13ZM19 10H5V9H19V10ZM19 7H5V6H19V7Z',
                    fill: 'url(#pattern1_111851_505980)',
                    fillOpacity: 0.8,
                }),
            ),
            t.createElement('path', {
                opacity: 0.8,
                d: 'M12 17H5V16H12V17ZM15 14H5V13H15V14ZM19 11H5V10H19V11ZM19 8H5V7H19V8Z',
                fill: '#0D0E10',
            }),
            t.createElement(
                'defs',
                null,
                t.createElement(
                    'pattern',
                    { id: 'pattern0_111851_505980', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    t.createElement('use', { xlinkHref: '#image0_111851_505980', transform: 'scale(0.0208333)' }),
                ),
                t.createElement(
                    'pattern',
                    { id: 'pattern1_111851_505980', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    t.createElement('use', {
                        xlinkHref: '#image0_111851_505980',
                        transform: 'matrix(0.0208333 0 0 0.0291667 0 -0.2)',
                    }),
                ),
                t.createElement(
                    'radialGradient',
                    {
                        id: 'paint0_radial_111851_505980',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(15.7778 13.6) rotate(90) scale(5.6 4.97778)',
                    },
                    t.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    t.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                t.createElement(
                    'radialGradient',
                    {
                        id: 'paint1_radial_111851_505980',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(12 14.0904) rotate(180) scale(8.90909 2.42616)',
                    },
                    t.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    t.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                t.createElement('image', {
                    id: 'image0_111851_505980',
                    width: 48,
                    height: 48,
                    preserveAspectRatio: 'none',
                    xlinkHref:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAnBSURBVHgBbdrnbhzHEobhpTSiguWcYRswYMD3fwn+68swYFuAcg6kwuHb5DMuEaeBBXd6uqsrflVdy6M//vjjw/v37w8fPnw4bNu2Pqenp4eTk5PDrVu3Drdv317fe//27dv1vfXXr18/XL169fDq1atD48qVK2vN0dHRmu+59e/evTscHx+vuZcvX65n57S2dY0XL16s9a0z35qeG70zend05eiwXd0OVyK+Js42xUDMtQnDCdOhhPQXoZs3b+7PHdj7hGpf89G3r/fzjN7duHFjp0MoQji37ymzddeuXTucnJ4c3p6eK2frZQPhniMUwRa8efNmvYto763JEq2LIE11QOt715qYi0bfCT4t1ByrZtHeTUW2t+/9bbDe2ar1PiVtLWhzD03GEKEcShO0GgME6F17aC3B+8t9uEX7nz17ttb2iRZhllbP6PW9T3t6N63Xp+d3789dMtpLoNevX3/kd42INf/555/v/k8jfVr3ySef7G7R8+PHjxeN5r/88svd/XoX45TEVTDpvNY9f/788Omnn34UH7yAm3s+PTlX5paZI0bbmO9AwSOQxEUBR/MxF/H20Gx/uUTxEGOdk2DR+ueffw5Pnjw5fPfdd4cvvvhit3b7nIHR5hOqfQm2hD26cji+dnwOBjPy2yz6oUjIETMx0KdDIhzDrYnBtCrwBRqrFXwxzo97H732NMSc4Pee0uzr2fdciEdsbZgoZGAmDZFeAGMkRiNmvXV9RyslJHAjxppPo9FtvzHdkUJTWN+zqjPP3fw/K23cpgkEImbwR2NiNPThcpRAUzO/tIewzXsmLBfqr4CekCoPdM779+d7Ts/gdIM+Du2wNAYFaAQSYar59no30QNMYq5kCInEG2g1bx9rQjyCQS0KBDjbZRicDExf5uNTg6D0/0HuhGKa59MEI3AWhDS5DUFpnYIngp3zchY/Ee/DTC2OSKaKYIgj0JQO4LThYIFGo9ONJuYDB0x2VgKEZsWGZDcTa0PCZCFK3DDG1xfGXkDhTGqYkTlpdfonK8UQbCcQWEbPORNZGu0T/JgU/GJVXC2LiHQo0ifc5v/igv/LnB0cA61jVpZhMetm9oUm9rU2Bq29f//+4enTpwt+Q6pZYJYk7927t4Tv+45CMTzroJ9++umj2qcNhIjRGOgARVvvaUmAU0DWYNE7d+4sl+TLmCrX9Nzazvj555/X3uZnELPWZ599tsfnRnLBxm2YDwFDsMdw61mrv7Qv0SRs8/2Nxtdff3345ptv1jolTIyliATpGXNgHdSi1XcV8IUrbXtWhBL8TIDPbMgqXKP9MQDelMh8WjXbHBRTHnvf91nCqKNmcmuudVw4GqsanYEleJQJop4LEAAKdHiCKDf6AAUW4N/KDvtntRpjrNyccnyCyPUb11f9M9Fpgc+8oNg0y2qwJjElDFhULXInIGB+wqccIYYwy01ZFB+S2sw1KUDxud/s4CpJ2ziDrMHcMztOC4XfE/p2rV2U0FlUknRe5/B7Vat4pIjpzidvTnawEOxLCJnRARgwjxhtgj/+LxgJxkLNdRgXE1OgltW4JgDgXuD21s1bew7iHZLnUuJMDhKPAadngSZrzzUsR4hoEiTrcdGJPtN1+tu8IRmugL19bVcc6MyNor2QKlxuMd/ky5m0REJTrAKP50VcLhBPoNFVcb/+XSDW9PPmOyda7ibOoLhZWM57xQXN7fD333+vw3755ZfdHzN7GTHiVZNTY9NdVKUTZl05035XTZB49+7dte6rr75a54Xr1UBptPUpIYWqiF2IEqwMXI5oXedDwJXIvv322928Xjx48GCHRPUJOJzXTKggucws7FICzylABdpwpVQ0TjRsTXwkREDR3n///fcj1940npSvTWI0zUskWSVBYkjJQRAXfJaYLkfwvsfIzCMKNVUv91WC5AVlbi6Dr9aw0OYQuB4TmV0wQokYF2BubCpEbkfT4NSISZckCU5jC33M6d5Bu85QakM/sbMXcy1uI/hyh4XR030wYQ7icJ+ZoefNqTNYCK1G51Kesh4Ec9fOUJ5TkCp1A4Wiel5eMvnMBzTQkCElldk2pJ3ZWZi3MofPukrccD888QpxqCvYulW6eMHHEFMep80CdGqNdRRdfJcCGtOdBuR9dKWMZs0ziU+im/duQuo1Edh1dMuE7rcuLCrCadLGvLQruuac+onr2ZsCOmfeuliVwCzo5kYpXMg60M11t5pOIYDBf10V0xAovOxi4XjYPPuXsznWAUprmhdn81Kv2mWZ2eZ0PYVaButszAMRYurPP/9cgvz+++8LIkMlPgqd0tSPP/64GCtBaVhhpPVa4jEUJIuXy4Udd9WRm2ARDfEyW/a9v7jJ/Vd1Mt1vv/22BKh3mQAQQU0ziz+BFoMCnKYms83VD3U7Uzv13YXG/su9ongRn9HQPF4uPhu7zP/999/vks6LBs1MxiMCo6GU925hUGQWZNwMqsz8MtuLrVGuN5e7yyULqXIPl2dmoyFSOmxeMiJUrSTDOgz8TbQypuYBhqxriA3VrDK+kSdoFO8WILHDaUeRNV1CmZvAEyqZerYUlRLTUoAA0s3kNmusCbV8nxvbY9/m5g/nMattrtRQfzeveNPDn9fIaf7L3TXud7nLxu1mq18+UGRSpo4IWptExFfdBWhSpxgeN7Qe+TaIm+15TE/kUVabn3XYvOzLP+4Fs8kGsfZqVK2vf9OLStiaS2nGRVq7hBV0IqbvGizB5bjlo0ePFmMq2qw3G2WzubaXLCn4IvDRpsglmNaiOIjIX3/9tQ52rXMTi/E+NNB6rXOBhbCY4rOzWTBvdoFBHTt5AFxKYG/P1s1CU0kCDLZQaJqmxb/++uvSSChTHpC+Z6AKvHqZDx8+XN9/+OGH3Z9n2yUYjNFoRl/cEFCmp5TO1YG4eevmDhgpb9ZLq6Dkg4InLfk9LJPP1qMgZ4HmKiV0Hgg3f2pyGQISs+Onoo0GJqPTuToXdSW437xKcttt/qbVITPLlYln8mK2WdfHSAxgOvj1bwq01Fy0DDT94qmX2idGVcAzn7RmtnAofpvlLkFIOf+NwC/wDaUvf47Zies0GTCwQK5Kk73PrXp2efJjRy4rM09lyTnzp64Fx5dbd3o0MR8azcSCMMEklNkP5WbtmddQbjSLuPbNOmheZOQCWfrVmUJunJ1bfMxqYZs/berDwOOCs/cFap0LkKuJS3vS/SzDZ3XZ2izSobVUuCNGU5SzleDoQZ+FSGfPCXAO64HO4fwXGoRor08LlQkJkqbqEMz1kpgKU+aU8tOejoVSXBKcbczmipMUpPT+UPyMJlrap9A84Pj43GL/Ay7gs62Y7foXAAAAAElFTkSuQmCC',
                }),
            ),
        ),
    Io = 'Buttons_937965ba',
    Po = 'Buttons_right_268130b5',
    Ro = 'Buttons_button_aeef4019',
    Bo = 'Buttons_button__create_61690fd8',
    Ao = 'Buttons_icon_378ba619',
    Eo = ie.resolve('strings'),
    To = w(function () {
        const { model: t, controls: s } = jo();
        return e.jsxs('div', {
            className: a(Io),
            children: [
                e.jsx(Ye, {
                    body: Eo.readOrEmpty('playlists.managaeble_playlists.buttons.create.tooltipBody'),
                    children: e.jsx(pe, {
                        className: a(Ro, Bo),
                        theme: pe.themes.secondary,
                        size: pe.sizes.extraSmall,
                        autoAlignContent: !1,
                        onClick: () => {
                            (s.goToCreatePlaylist([t.displayedVehicleId.get()]), s.reset());
                        },
                        children: e.jsx(ko, { className: Ao }),
                    }),
                }),
                e.jsxs('div', {
                    className: Po,
                    children: [
                        e.jsx(pe, {
                            className: Ro,
                            theme: pe.themes.secondary,
                            size: pe.sizes.extraSmall,
                            onClick: () => {
                                (s.cancel(), s.reset());
                            },
                            children: e.jsx(Qe, {
                                text: Eo.readOrEmpty('playlists.managaeble_playlists.buttons.cancel.title'),
                            }),
                        }),
                        e.jsx(pe, {
                            className: Ro,
                            theme: pe.themes.primary,
                            size: pe.sizes.extraSmall,
                            disabled: !t.computeds.hasChanges(),
                            onClick: () => {
                                (s.save(), s.reset());
                            },
                            children: e.jsx(Qe, {
                                text: Eo.readOrEmpty('playlists.managaeble_playlists.buttons.save.title'),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Lo = 'Item_itemBackground_f5007fc6',
    Do = 'Item_c5163bf',
    Wo = 'Item_checkbox_cfffba80',
    Oo = 'Item_item__checked_5f6fcc69',
    Mo = 'Item_check_a68580c8',
    Vo = 'Item_checkboxLabel_885d0061',
    zo = w(function ({ id: t, title: s, checked: r }) {
        const { controls: i } = jo();
        return e.jsxs('div', {
            className: a(Do, r && Oo),
            children: [
                e.jsx('div', { className: Lo }),
                e.jsx(fe, {
                    checked: r,
                    onCheckedChange: () => i.togglePlaylist(t),
                    size: Je.small,
                    className: Wo,
                    classNames: { label: Vo, check: Mo },
                    children: e.jsx(Qe, { text: s }),
                }),
            ],
        });
    }),
    Fo = 'List_152fbdf4',
    $o = 'List_scrollWrapper_e69e8089',
    Ho = 'List_scrollContent_30662217',
    Uo = 'List_scrollbar_611defd3',
    Go = w(function () {
        const { model: a } = jo(),
            t = a.computeds.playlistItems();
        return e.jsxs('div', {
            className: Fo,
            children: [
                e.jsx(ea, {
                    classNames: { wrapper: $o, content: Ho },
                    children: ae(t, ({ id: a, title: t, selected: s }) =>
                        e.jsx(zo, { id: a, title: t, checked: s }, a),
                    ),
                }),
                e.jsx(aa, { classNames: { base: Uo } }),
            ],
        });
    }),
    qo = 'Vehicle_name_f5f779f6',
    Xo = 'Vehicle_level_c03ad304',
    Zo = 'Vehicle_type_9905a21f',
    Ko = w(function () {
        const { model: a } = jo(),
            t = a.computeds.vehicle();
        if (void 0 === t) return null;
        const s = We(t.role);
        return e.jsxs(ta, {
            children: [
                e.jsx(ta.Level, { value: t.level, className: Xo }),
                sa(t.type) &&
                    e.jsx(ta.Type, { size: ta.Type.sizes.x24x24, className: Zo, type: t.type, premium: t.elite }),
                e.jsx(Qe, { text: t.fullName, className: qo }),
                s !== ra && e.jsx(ta.Role, { size: ta.Role.sizes.x16x16, roleKey: s }),
            ],
        });
    }),
    Yo = 'Styles_display_f2930fa3',
    Qo = 'Styles_header_dcb2494f',
    Jo = 'Styles_body_504cd01f',
    el = 'Styles_title_ece3f15e',
    al = ie.resolve('strings');
function tl({ className: t }) {
    return e.jsxs(ia.Header, {
        className: a(Qo, t),
        children: [
            e.jsx(ia.Title, {
                className: el,
                children: e.jsx(Qe, { text: al.readOrEmpty('playlists.managaeble_playlists.header.title') }),
            }),
            e.jsx(Ko, {}),
        ],
    });
}
function sl({ className: t }) {
    return e.jsxs(ia.Body, {
        className: a(Jo, t),
        children: [e.jsx(ia.Divider, {}), e.jsx(na, { children: e.jsx(Go, {}) }), e.jsx(ia.Divider, {}), e.jsx(To, {})],
    });
}
const rl = t.memo(function ({ vehicleId: t, tipSize: s, className: r, children: i, ...n }) {
        return e.jsxs(ia.Display, {
            ...n,
            className: a(Yo, r),
            children: [e.jsx(ia.Tip, { size: s }), e.jsx(ia.Close, {}), i],
        });
    }),
    il = w(({ children: e }) => {
        const a = oa(),
            s = la(),
            r = ca(),
            i = da(),
            { model: n, controls: o } = jo(),
            l = n.vehicleId.get(),
            c = n.displayedVehicleId.get(),
            [d, _] = t.useState(!1),
            [u, m] = t.useState(!1),
            p = Y(() => {
                (m(!0), a.open(), r.run(() => m(!1), _a));
            }),
            b = Y(() => {
                (m(!0),
                    a.close(),
                    r.run(() => {
                        (_(!0),
                            o.setDisplayedVehicleId(Co),
                            i.run(() => {
                                (m(!1), _(!1));
                            }));
                    }, _a));
            }),
            h = Y(() => {
                (_(!0), o.setDisplayedVehicleId(l), i.run(() => _(!1)));
            });
        t.useEffect(() => {
            s || n.computeds.empty() || a.opened || (o.reset(), b());
        }, [a.opened]);
        const f = Y(() => {
            i.isRunning ||
                (a.opened || r.isRunning || l === c
                    ? a.opened || l === Co || c === Co
                        ? a.opened && l === Co && c !== Co && b()
                        : r.isRunning || p()
                    : h());
        });
        return (
            t.useEffect(f, [f, l, c, a.opened, u, d]),
            ua(() => {
                n.computeds.empty() || o.reset();
            }),
            e
        );
    }),
    nl = (e) => `manageable-vehicle-playlists-model-${e}`,
    ol = w(function ({ children: a, position: s, freeSpaceRem: r, tipSize: i }) {
        const { model: n, controls: o } = jo(),
            l = n.displayedVehicleId.get(),
            c = ma('rem'),
            d = Y((e, { callerBounding: a }) => {
                const t = e.trigger.bounding.get();
                if (t && !pa(t, a)) return (e.close(), !1);
            }),
            _ = n.vehicleId.get(),
            u = n.computeds.isVehiclePlaylistsEmpty(),
            m = ba(_);
        return (
            t.useEffect(() => {
                u && m === Co && _ !== Co && (o.goToCreatePlaylist([_]), o.reset());
            }, [m, _, u, o]),
            u
                ? null
                : e.jsx(ia, {
                      id: nl(l),
                      children: e.jsxs(il, {
                          children: [
                              e.jsx(ia.Portal, {
                                  paddingsRem: c,
                                  position: s,
                                  freeSpaceRem: r,
                                  onBeforePositionChange: d,
                                  children:
                                      l !== Co &&
                                      e.jsxs(
                                          rl,
                                          { vehicleId: l, tipSize: i, children: [e.jsx(tl, {}), e.jsx(sl, {})] },
                                          l,
                                      ),
                              }),
                              a,
                          ],
                      }),
                  })
        );
    });
const ll = 'emptySlot',
    cl = 'left',
    dl = 'right',
    _l = 'both',
    ul = 'none',
    ml = 189,
    pl = 245,
    bl = {
        default: { single: ml, double: ml },
        breakpoints: { medium: { single: 224 }, large: { single: pl, double: pl }, extraLarge: { single: 302 } },
    },
    hl = (e, a) => (e || a ? (e ? (a ? ul : dl) : cl) : _l),
    fl = 'Content_7ccb81a0',
    gl = 'Content_disabledOverlay_a8908196',
    vl = 'Content_base__disabled_da09528a',
    xl = 'Content_base__selected_da09528a',
    wl = 'Content_base__empty_da09528a';
function Cl({ children: t, selected: s, disabled: r, empty: i }) {
    return e.jsxs('div', {
        'data-name': 'Content',
        className: a(fl, i && wl, s && xl, r && vl),
        children: [t, r && e.jsx('div', { className: gl })],
    });
}
const yl = 'Slot_977dd8f1',
    jl = 'Slot_base__wrapper_ae3081b5',
    Sl = 'Slot_base__disabled_334cc10f',
    Nl = 'Slot_base__empty_d386066c',
    kl = 'Slot_content_1a27c8cf',
    Il = 'Slot_base__active_71f19f5c',
    Pl = 'Slot_base__selected_71f19f5c',
    Rl = 'Slot_selected_6e9f21df',
    Bl = 'Slot_selected__border_e2a17304',
    Al = t.memo(function ({ children: t, selected: s = !1, disabled: r = !1, active: i, className: n, ...o }) {
        const l = r || void 0 === o.onClick;
        return e.jsx('div', {
            ...o,
            'data-name': 'Slot',
            className: a(yl, i && Il, s && Pl, r && Sl, l && Nl, jl, n),
            children: e.jsxs('div', {
                className: kl,
                children: [
                    e.jsx(Cl, { selected: s, disabled: r, empty: l, children: t }),
                    s && e.jsx('div', { className: a(Rl, Bl) }),
                    e.jsx('div', { className: Rl }),
                ],
            }),
        });
    }),
    El = { buySlot: 'buySlot', buyTank: 'buyTank', restoreTank: 'restoreTank', rentTank: 'rentTank' },
    Tl = {
        [El.buySlot]: 'buy_slot',
        [El.buyTank]: 'buy_vehicle_new',
        [El.restoreTank]: 'restore_vehicle',
        [El.rentTank]: 'wot_plus_slot',
    },
    Ll = 'ActionCards_wrapper_690d669a',
    Dl = 'ActionCards_text_cdbc926',
    Wl = 'ActionCards_wrapper__double_70640c01',
    Ol = 'ActionCards_content_a46de8cf',
    Ml = 'ActionCards_content__buySlot_a70e9708',
    Vl = 'ActionCards_icon_f8219d70',
    zl = 'ActionCards_contentIcon_166df330',
    Fl = 'ActionCards_currency_ac7c654f',
    $l = 'ActionCards_discount_967a7825',
    Hl = { [fo]: 'menu.tankCarousel.wotPlusSelectionPending', [go]: 'menu.tankCarousel.wotPlusSelectionAvailable' },
    Ul = w(function ({ type: t }) {
        const s = wo(),
            r = s.model.slots.price.currency.get(),
            i = s.model.slots.price.value.get(),
            n = s.model.slots.free.get(),
            o = s.model.slots.recover.get(),
            l = s.model.slots.discount.get(),
            c = s.model.telecomRentStatus.get();
        if (t === El.buySlot)
            return e.jsx('div', {
                className: Fl,
                children: e.jsx(ha, {
                    type: fa.currency,
                    size: _e.extraSmall,
                    enabled: l,
                    classNames: { icon: $l },
                    children: e.jsx(ue, {
                        type: r,
                        size: _e.extraSmall,
                        reverse: !0,
                        classNames: { base: a(Ol, Ml), icon: zl },
                        children: i,
                    }),
                }),
            });
        if (t === El.rentTank) {
            const a = Hl[c];
            return a ? e.jsx(ga, { className: Dl, upgradeLegacy: !0, path: a }) : null;
        }
        return e.jsxs('div', {
            className: Ol,
            children: [
                t === El.buyTank &&
                    e.jsx(ga, {
                        upgradeLegacy: !0,
                        path: 'menu.tankCarousel.vehicleStates.buyTankEmptyCount',
                        params: { count: n },
                    }),
                t === El.restoreTank &&
                    e.jsx(ga, {
                        upgradeLegacy: !0,
                        path: 'menu.tankCarousel.vehicleStates.restoreTankCount',
                        params: { count: o },
                    }),
            ],
        });
    });
function Gl({ type: s, width: r, height: i, doubleRow: n, className: o }) {
    const l = wo(),
        c = va(),
        d = l.model.slots.price.value.get(),
        _ = l.model.slots.price.defaultValue.get(),
        u = l.model.slots.discount.get();
    l.model.telecomRentStatus.get();
    const m = ie.resolve('strings'),
        p = ne(`hangar.carousel.actionCards.x48x48.${s}`, `hangar.carousel.actionCards.x96x96.${s}`),
        b = xa({
            header: m.readOrEmpty(`tooltips.tanks_carousel.${Tl[s]}.header`),
            body: m.readOrEmpty(`tooltips.tanks_carousel.${Tl[s]}.body`),
        }),
        h = wa(
            'actionSlotPrice',
            t.useMemo(() => [[d], [_]], [d, _]),
            t.useMemo(() => ({ disabled: !u }), [u]),
        ),
        f = u && Tl[s] === Tl.buySlot ? h : b;
    return e.jsx(Al, {
        ...f,
        className: o,
        style: { width: void 0 !== r ? `${r}px` : void 0, height: void 0 !== i ? `${i}px` : void 0 },
        'data-test-id': s,
        onClick: function (e) {
            (f.onClick(), c.play('click', { target: 'vehicle:action-cards', original: e }));
            const a = {
                [El.buySlot]: l.controls.buySlot,
                [El.buyTank]: l.controls.goBuyVehicle,
                [El.restoreTank]: l.controls.goRecoverVehicle,
                [El.rentTank]: l.controls.selectTelecomRentalVehicle,
            }[s];
            if ('function' != typeof a) return console.error(`Unknown action type ${s} in ${Gl.name} handleClick`);
            a();
        },
        onMouseEnter: function (e) {
            (f.onMouseEnter(e), c.play('mouse-enter', { target: 'vehicle:action-cards', original: e }));
        },
        children: e.jsxs('div', {
            className: a(Ll, n && Wl),
            children: [
                e.jsx(Ca, {
                    className: Vl,
                    path: `hangar.carousel.actionCards.x32x32.${s}`,
                    adaptive: { medium: { path: p } },
                }),
                e.jsx('div', { className: Dl, children: e.jsx(ga, { path: `menu.tankCarousel.vehicleStates.${s}` }) }),
                e.jsx(Ul, { type: s }),
            ],
        }),
    });
}
const ql = 'undamaged',
    Xl = '54033',
    Zl = '50705',
    Kl = '56833',
    Yl = '51201',
    Ql = { [Xl]: 'alpha', [Zl]: 'alpha', [Yl]: 'super', [Kl]: 'super' },
    Jl = 'ammoNotFull',
    ec = 'crewNotFull',
    ac = 'exploded',
    tc = 'destroyed',
    sc = 'damaged',
    rc = 'rentable',
    ic = 'rentableAgain',
    nc = 'rentalIsOver',
    oc = 'tooHeavy',
    lc = 'unsuitableToQueue',
    cc = 'unsuitableToUnit',
    dc = 'inPrebattle',
    _c = 'battle',
    uc = 'wot_plus_exclusive_vehicle_disabled',
    mc = {
        [Jl]: 'ammo',
        [ec]: 'crew',
        [ac]: 'repair',
        [tc]: 'repair',
        [sc]: 'repair',
        [rc]: 'rental',
        [ic]: 'rental',
        [nc]: 'rental',
        [oc]: 'notSuitable',
        [lc]: 'notSuitable',
        [cc]: 'notSuitable',
        [dc]: 'inPlatoon',
        [_c]: 'inBattle',
        [uc]: 'notSuitable',
    };
function pc(e, a, t) {
    return !(!e || a === Xn || !t) && t.status !== lc && t.maxBpScore > 0;
}
const [bc, hc, fc] = q()(({ observableModel: e }) => ({
        ...e.primitives(['isCrystalEarnEnabled', 'isDailyMultipliedXpEnabled', 'isInfiniteAmmo']),
    })),
    gc = () => t.useContext(fc.Context),
    vc = {
        base: 'ProBoost_7490b440',
        arrow: 'ProBoost_arrow_346b5e61',
        glow: 'ProBoost_glow_280ac9aa',
        base__double: 'ProBoost_base__double_b53eea3f',
        base__active: 'ProBoost_base__active_7b71aa2e',
        corner: 'ProBoost_corner_9f13801e',
        base__activating: 'ProBoost_base__activating_7b71aa2e',
        triangle: 'ProBoost_triangle_ae0f2fba',
        triangle__1: 'ProBoost_triangle__1_1cb04326',
        triangle__2: 'ProBoost_triangle__2_39aff7fd',
        triangle__3: 'ProBoost_triangle__3_e738f7f2',
        base__deactivating: 'ProBoost_base__deactivating_7b71aa2e',
    },
    xc = {
        inactive: vc.base__inactive,
        activating: vc.base__activating,
        active: vc.base__active,
        deactivating: vc.base__deactivating,
    };
function wc({ className: t, doubleRow: s, state: r = 'inactive', isCornerHidden: i = !1 }) {
    return 'inactive' === r
        ? null
        : e.jsxs('div', {
              className: a(vc.base, r && xc[r], s && vc.base__double, t),
              children: [
                  e.jsx('div', { className: vc.glow }),
                  !i && e.jsx('div', { className: vc.corner }),
                  e.jsx('div', { className: vc.arrow }),
                  [vc.triangle__1, vc.triangle__2, vc.triangle__3].map((t) =>
                      e.jsx('div', { className: a(vc.triangle, t) }, t),
                  ),
              ],
          });
}
const Cc = 'Background_1089bc1c',
    yc = 'Background_wotPlus_3cf6035a',
    jc = 'Background_crystal_6112fa42',
    Sc = 'Background_bpBonus_86685469',
    Nc = 'Background_flag_beb58b8',
    kc = 'Background_base__double_26effab7',
    Ic = 'Background_flag__active_de322c1b',
    Pc = 'Background_vehicle_23ef6e2b',
    Rc = 'Background_vehicle__dimmed_7f14a6c7',
    Bc = 'Background_crystal__limit_61072361',
    Ac = ya('Favorite', 'Background_favorite_d98f92cc', {
        variants: { active: { true: 'Background_favorite__active_7f14a6c7' } },
    });
function Ec({ vehicle: t, selected: s, active: r, className: i }) {
    return e.jsx(Ca, {
        className: a(Nc, s || (r && Ic), i),
        path: `hangar.carousel.cards.flags.x400x300.${Le(t.nationId)}`,
        position: 'top left',
    });
}
const Tc = w(function ({ vehicle: s, statistic: r, validBP: i, doubleRow: n, classNames: o }) {
    var l;
    const c = (null == (l = gc()) ? void 0 : l.model.isCrystalEarnEnabled.get()) ?? !0,
        d =
            (we((null == r ? void 0 : r.numberOfCrystalEarned) ?? [], 1) ?? 0) <=
            (we((null == r ? void 0 : r.numberOfCrystalEarned) ?? [], 0) ?? 0),
        _ = null == r ? void 0 : r.proBoostActive,
        u = null == r ? void 0 : r.fromWotPlus,
        m = c && s.crystalEarning && !u,
        p = ba(_),
        b = t.useMemo(() => (_ ? (!1 === p ? 'activating' : 'active') : p ? 'deactivating' : 'inactive'), [_, p]);
    return e.jsxs(e.Fragment, {
        children: [
            u && e.jsx('div', { className: a(yc, null == o ? void 0 : o.wotPlus) }),
            e.jsx(wc, { state: b, className: null == o ? void 0 : o.proBoostIcon, doubleRow: n, isCornerHidden: m }),
            m && e.jsx('div', { className: a(jc, d && Bc, null == o ? void 0 : o.crystal) }),
            (null == r ? void 0 : r.bpSpecial) &&
                i &&
                e.jsx('div', { className: a(Sc, null == o ? void 0 : o.bpBonus) }),
        ],
    });
});
function Lc({ vehicle: t, validBP: s, dimmed: r, active: i, statistic: n, selected: o, doubleRow: l, ...c }) {
    return e.jsxs('div', {
        ...c,
        className: a(Cc, l && kc, c.className),
        children: [
            e.jsx(Ec, { vehicle: t, active: i, selected: o }),
            e.jsx(ja, {
                className: a(Pc, (((null == n ? void 0 : n.status) && n.status !== ql) || r) && Rc),
                name: t.name,
            }),
            e.jsx(Tc, { vehicle: t, statistic: n, validBP: s, doubleRow: l }),
            e.jsx(Ac, { active: t.favorite }),
        ],
    });
}
const Dc = 'Bonuses_8169b4b3',
    Wc = 'Bonuses_bonus_af8ebe7c',
    Oc = 'Bonuses_bonus__active_2364401e',
    Mc = 'Bonuses_bonusIcon_b65fb47f',
    Vc = 'Bonuses_bonusValue_322db074',
    zc = 'Bonuses_rent_ea11a7e4',
    Fc = 'Bonuses_base__double_ca1cd57b',
    $c = 'Bonuses_icon_3991db74',
    Hc = 'Bonuses_text_a556857c',
    Uc = ie.resolve('strings');
function Gc({ bonusMultiplier: t, className: s, classNames: r }) {
    return e.jsxs('div', {
        className: a(Wc, -1 !== t && Oc, s),
        children: [
            e.jsx('div', { className: a(Mc, null == r ? void 0 : r.icon) }),
            e.jsx('div', {
                className: a(Vc, null == r ? void 0 : r.value),
                children: `${Uc.readOrEmpty('common.multiplierSmall')}${t}`,
            }),
        ],
    });
}
const qc = w(function ({ vehicle: t, statistic: s, doubleRow: r, ...i }) {
        var n;
        const o = (null == (n = gc()) ? void 0 : n.model.isDailyMultipliedXpEnabled.get()) ?? !0;
        return e.jsxs('div', {
            ...i,
            className: a(Dc, r && Fc, i.className),
            children: [
                o && s && e.jsx(Gc, { bonusMultiplier: s.bonusMultiplier }),
                e.jsx(Sa.ShortCounter, {
                    time: t.rent.leftTime,
                    wins: t.rent.leftWins,
                    battles: t.rent.leftBattles,
                    classNames: { base: zc, icon: $c, text: Hc },
                }),
            ],
        });
    }),
    Xc = {
        root: 'Information_root_6e8d4f26',
        base: 'Information_dd628d50',
        info: 'Information_info_b2948982',
        details: 'Information_details_e5340a0c',
        base__double: 'Information_base__double_6e8d4f26',
        text: 'Information_text_a2b2c19b',
        text__level: 'Information_text__level_e5a9014e',
        text__premium: 'Information_text__premium_741ebb2f',
        truncatedText: 'Information_truncatedText_ede7ae03',
        battlePass: 'Information_battlePass_63749625',
        battlePass__bonus: 'Information_battlePass__bonus_6e8d4f26',
        battlePass__active: 'Information_battlePass__active_960b5eed',
        bpPoints: 'Information_bpPoints_21ee2e63',
        points: 'Information_points_b67585b1',
        points__slash: 'Information_points__slash_b8c7004e',
        bpShadow: 'Information_bpShadow_4248ba9f',
        bpIcon: 'Information_bpIcon_a622154',
        prestige: 'Information_prestige_95cc4ef2',
        prestige__active: 'Information_prestige__active_960b5eed',
        identifier: 'Information_identifier_1bcd619a',
        identifier__changeNation: 'Information_identifier__changeNation_665b13a2',
        identifier__alpha: 'Information_identifier__alpha_6e8d4f26',
        identifier__super: 'Information_identifier__super_46b1ed0d',
        identifier__rent: 'Information_identifier__rent_1fba5dce',
        identifierIcon: 'Information_identifierIcon_3636b34b',
        identifierIcon__alpha: 'Information_identifierIcon__alpha_ddf4d235',
        identifierIcon__super: 'Information_identifierIcon__super_34b8f5c2',
        identifierIcon__changeNation: 'Information_identifierIcon__changeNation_dfee83c8',
        fadeInWithScale: 'Information_fadeInWithScale_6e8d4f26',
        slideUp: 'Information_slideUp_6e8d4f26',
        blink: 'Information_blink_6e8d4f26',
        scale: 'Information_scale_6e8d4f26',
        rotate: 'Information_rotate_6e8d4f26',
        windowIn: 'Information_windowIn_6e8d4f26',
        fadeOut: 'Information_fadeOut_6e8d4f26',
        fadeIn: 'Information_fadeIn_6e8d4f26',
    },
    Zc = ya('VehicleName', {
        element: ta.Name,
        className: Xc.text,
        cva: { variants: { premium: { true: Xc.text__premium } } },
    });
function Kc({ statistic: t, vehicle: s, className: r, status: i }) {
    const n = ie.resolve('views'),
        o = ie.resolve('aliases'),
        l = ie.resolve('strings'),
        c = Na({
            resId: o.read((e) => e.hangar.shared.VehiclesStatistics('resId')),
            contentId: n.read((e) =>
                'paused' !== i
                    ? e.lobby.battle_pass.tooltips.VehiclePointsTooltipView('resId')
                    : e.lobby.battle_pass.tooltips.BattlePassOnPauseTooltipView('resId'),
            ),
            args: { intCD: null == s ? void 0 : s.vehicleId },
        });
    return e.jsxs('div', {
        className: a(Xc.battlePass, t.maxBpScore > 0 && Xc.battlePass__active, t.bpSpecial && Xc.battlePass__bonus, r),
        onMouseEnter: function (e) {
            null == c || c.onMouseEnter(e);
        },
        onMouseLeave: function (e) {
            null == c || c.onMouseLeave();
        },
        children: [
            e.jsxs('div', {
                className: Xc.bpPoints,
                children: [
                    e.jsx('div', { className: Xc.points, children: ka.formatNumber('integral', t.bpProgress) }),
                    e.jsx('div', {
                        className: a(Xc.points, Xc.points__slash),
                        children: l.readOrEmpty('common.common.slash'),
                    }),
                    e.jsx('div', { className: Xc.points, children: ka.formatNumber('integral', t.maxBpScore) }),
                    e.jsx('div', { className: Xc.bpShadow }),
                ],
            }),
            e.jsx('div', { className: Xc.bpIcon }),
        ],
    });
}
function Yc({ statistic: t, elite: s, vehicle: r, selected: i, classNames: n, className: o }) {
    return e.jsxs('div', {
        className: a(Xc.details, o),
        children: [
            t &&
                e.jsx(ta.Prestige, {
                    level: t.prestigeLevel,
                    grade: t.prestigeGrade,
                    type: t.prestigeType,
                    direction: Ia.left,
                    className: a(Xc.prestige, i && Xc.prestige__active, null == n ? void 0 : n.prestige),
                }),
            e.jsx(ta.Level, { className: a(Xc.text, Xc.text__level, null == n ? void 0 : n.level), value: r.level }),
            sa(r.type) &&
                e.jsx(ta.Type, {
                    type: r.type,
                    premium: s || (null == t ? void 0 : t.elite),
                    size: ta.Type.sizes.x24x24,
                    className: null == n ? void 0 : n.type,
                }),
        ],
    });
}
function Qc({ vehicle: t, className: s, classNames: r }) {
    const i = Ql[t.id],
        n = t.nationChangeAvailable,
        o = t.rent.leftTime > 0 || t.rent.leftWins > 0 || t.rent.leftBattles > 0;
    return e.jsxs('div', {
        className: a(
            Xc.identifier,
            Xc[`identifier__${i}`],
            n && Xc.identifier__changeNation,
            o && Xc.identifier__rent,
            s,
        ),
        children: [
            e.jsx(Zc, {
                className: null == r ? void 0 : r.name,
                premium: t.premium,
                children: e.jsx(Qe, { className: Xc.truncatedText, text: t.shortName }),
            }),
            (i || n) &&
                e.jsx('div', {
                    className: a(
                        Xc.identifierIcon,
                        Xc[`identifierIcon__${i}`],
                        n && Xc.identifierIcon__changeNation,
                        null == r ? void 0 : r.icon,
                    ),
                }),
        ],
    });
}
const Jc = w(function ({ vehicle: t, statistic: s, selected: r, doubleRow: i, ...n }) {
        const o = wo(),
            l = o.model.bpState.active.get(),
            c = o.model.bpState.status.get();
        return e.jsxs('div', {
            ...n,
            className: a(Xc.base, i && Xc.base__double, n.className),
            children: [
                s && pc(l, c, s) && e.jsx(Kc, { vehicle: t, statistic: s, status: c }),
                e.jsxs(ta, {
                    className: Xc.info,
                    children: [e.jsx(Yc, { vehicle: t, statistic: s, selected: r }), e.jsx(Qc, { vehicle: t })],
                }),
            ],
        });
    }),
    ed = {
        base: 'Overlay_ef16c91',
        alert: 'Overlay_alert_db4a0e15',
        alertIcon: 'Overlay_alertIcon_3d7c077a',
        base__double: 'Overlay_base__double_3c7155a',
        alertText: 'Overlay_alertText_ca764641',
        alertText__light: 'Overlay_alertText__light_bece984e',
    };
function ad({ status: t, classNames: s, className: r }) {
    const i = ie.resolve('images'),
        n = ne(`hangar.carousel.cards.alerts.${mc[t]}`, `hangar.carousel.cards.alerts.${mc[t]}_upscale`),
        o = ne('hangar.carousel.cards.alerts.notSuitable', 'hangar.carousel.cards.alerts.notSuitable_upscale'),
        l = t === _c || t === dc;
    return e.jsxs('div', {
        className: a(ed.alert, r),
        children: [
            e.jsx(Ca, { className: a(ed.alertIcon, null == s ? void 0 : s.icon), path: i.has(n) ? n : o }),
            e.jsx(ga, {
                upgradeLegacy: !0,
                className: a(ed.alertText, l && ed.alertText__light, null == s ? void 0 : s.text),
                path: `menu.tankCarousel.vehicleStates.${t}`,
                params: { icon: e.jsx(Ca, { path: 'library.premium_small', width: 34, height: 16 }) },
            }),
        ],
    });
}
function td({ statistic: t, doubleRow: s, ...r }) {
    return t.status === ql
        ? null
        : e.jsx('div', {
              ...r,
              className: a(ed.base, s && ed.base__double, r.className),
              children: e.jsx(ad, { status: t.status }),
          });
}
ya('Disable', ed.disable);
const sd = 'Card_e79008fd',
    rd = 'Card_base__double_f8b7f334',
    id = 'Card_content_a6141b08',
    nd = 'Card_border_e9cb9a85',
    od = ie.resolve('views'),
    ld = ie.resolve('aliases'),
    cd = w(function ({ vehicleId: t, selected: s = !1, doubleRow: r, children: i, concurrent: n, ...o }) {
        const l = wo(),
            c = Jn().model.get(t),
            d = Yn().model.get(t),
            _ = va(),
            u = l.model.current.inventoryId.get(),
            m = l.model.prebattleModeActive(),
            p = l.model.bpState.active.get(),
            b = l.model.bpState.status.get();
        if (!c || !d) return e.jsx(Al, { ...o });
        const h = n ? dd : Lc;
        return e.jsxs(Al, {
            ...o,
            className: a('vehicle-card', o.className),
            selected: s,
            'data-test-id': `vehicleCard-${t}`,
            onMouseEnter: function (e) {
                var a;
                (_.play('mouse-enter', { target: 'vehicle-card', original: e }),
                    null == (a = o.onMouseEnter) || a.call(o, e));
            },
            onMouseLeave: function (e) {
                var a;
                null == (a = o.onMouseLeave) || a.call(o, e);
            },
            onClick: function (e) {
                var a;
                m ||
                    (c && c.inventoryId === u) ||
                    (_.play('click', { target: 'vehicle-card', original: e }),
                    l.controls.select(c.inventoryId),
                    null == (a = o.onClick) || a.call(o, e));
            },
            children: [
                e.jsx(h, { vehicle: c, validBP: pc(p, b, d), dimmed: m, statistic: d, selected: s, doubleRow: r }),
                e.jsx(_d, {
                    concurrent: n,
                    statistic: d,
                    vehicle: c,
                    selected: s,
                    disableContextMenu: m,
                    doubleRow: r,
                }),
            ],
        });
    });
function dd(a) {
    const [s, r] = t.useState(!0),
        [, i] = t.useTransition();
    return (
        t.useEffect(() => {
            s && i(() => r(!1));
        }, [s]),
        s ? null : e.jsx(Lc, { ...a })
    );
}
function _d({ vehicle: s, statistic: r, selected: i, doubleRow: n, concurrent: o, disableContextMenu: l }) {
    const [c, d] = t.useState(o),
        [, _] = t.useTransition(),
        u = Pa(
            'vehicle',
            t.useMemo(
                () => ({ inventoryId: null == s ? void 0 : s.inventoryId }),
                [null == s ? void 0 : s.inventoryId],
            ),
        ),
        m = Na({
            resId: ld.read((e) => e.hangar.shared.VehiclesInventory('resId')),
            contentId: od.read((e) => e.mono.hangar.vehicle_tooltip('resId')),
            args: C.useMemo(
                () => ({ inventoryId: null == s ? void 0 : s.inventoryId }),
                [null == s ? void 0 : s.inventoryId],
            ),
        });
    return (
        t.useEffect(() => {
            c && _(() => d(!1));
        }, [c]),
        c
            ? null
            : e.jsxs('div', {
                  ...m,
                  ...(!l && u),
                  className: a(sd, n && rd),
                  children: [
                      e.jsxs('div', {
                          className: id,
                          children: [
                              e.jsx(qc, { vehicle: s, statistic: r, doubleRow: n }),
                              e.jsx(Jc, { vehicle: s, selected: i, statistic: r, doubleRow: n }),
                          ],
                      }),
                      e.jsx(td, { statistic: r, doubleRow: n }),
                  ],
              })
    );
}
const ud = {
    empty: 'ActiveSlots_empty_9aab1ce1',
    doubleSlots: 'ActiveSlots_doubleSlots_2ce42013',
    slot__double: 'ActiveSlots_slot__double_e321ab18',
};
function md({ width: a, className: t }) {
    return e.jsx('div', {
        className: ud.empty,
        children: e.jsx(Al, {
            className: t,
            style: { width: `${a}px` },
            children: e.jsx('div', { className: ud.vehicleSlot }),
        }),
    });
}
function pd({ slotId: s, width: r, currentVehicleId: i, double: n, className: o }) {
    const l = (function (e) {
        const a = No(),
            s = Boolean(a && a.model.computeds.enabled()),
            r = !a || a.model.computeds.isVehiclePlaylistsEmpty(),
            i = Y(() => {
                s && !r && a.model.vehicleId.get() === e && a.controls.reset();
            });
        return t.useMemo(() => {
            if (s && !r) return { 'data-popover-trigger-id': nl(e), onMouseDown: i };
        }, [r, s, i, e]);
    })(Number(s));
    return void 0 === s
        ? null
        : s in El
          ? e.jsx(Gl, { className: a(nd, o), type: s, width: r, doubleRow: n })
          : 'emptySlot' === s
            ? e.jsx(md, { className: a(nd, o), width: r })
            : e.jsx(cd, {
                  ...l,
                  vehicleId: s,
                  selected: s === i,
                  doubleRow: n,
                  className: a(nd, o),
                  style: { width: r },
              });
}
function bd({ chunkedSlots: t, classNames: s, ...r }) {
    return void 0 === t
        ? null
        : e.jsx('div', {
              className: ud.doubleSlots,
              children: t.map((t, i) =>
                  e.jsx(pd, { ...r, slotId: t, className: a(ud.slot__double, null == s ? void 0 : s.slot) }, i),
              ),
          });
}
const hd = {
    root: 'ArrowButton_root_5327085d',
    button: 'ArrowButton_button_7654af94',
    icon: 'ArrowButton_icon_35e5294f',
    button__left: 'ArrowButton_button__left_5327085d',
    background: 'ArrowButton_background_5327085d',
    border: 'ArrowButton_border_5327085d',
    overlay: 'ArrowButton_overlay_c36cbc33',
    content: 'ArrowButton_content_4666fd05',
    button__right: 'ArrowButton_button__right_5327085d',
    fadeInWithScale: 'ArrowButton_fadeInWithScale_5327085d',
    slideUp: 'ArrowButton_slideUp_5327085d',
    blink: 'ArrowButton_blink_5327085d',
    scale: 'ArrowButton_scale_5327085d',
    rotate: 'ArrowButton_rotate_5327085d',
    windowIn: 'ArrowButton_windowIn_5327085d',
    fadeOut: 'ArrowButton_fadeOut_5327085d',
    fadeIn: 'ArrowButton_fadeIn_5327085d',
};
function fd({ direction: t, className: s, ...r }) {
    return e.jsx(pe, {
        ...r,
        classNames: {
            base: a(hd.button, hd[`button__${t}`], s),
            background: hd.background,
            border: hd.border,
            overlay: hd.overlay,
            content: hd.content,
        },
        theme: pe.themes.secondary,
        size: pe.sizes.small,
        autoAlignContent: !1,
        soundTarget: 'carousel:arrow_button',
        children: e.jsx(Ca, { path: 'hangar.carousel.buttonArrow', className: hd.icon }),
    });
}
fd.direction = { right: 'right', left: 'left' };
const gd = {
    root: 'CarouselNavButtons_root_3f67251c',
    navButtonWrapper: 'CarouselNavButtons_navButtonWrapper_a13c2a68',
    navButton: 'CarouselNavButtons_navButton_adcc2e9b',
    navButton__left: 'CarouselNavButtons_navButton__left_5f6dc3a0',
    navButton__right: 'CarouselNavButtons_navButton__right_66b4f03f',
    navButton__hidden: 'CarouselNavButtons_navButton__hidden_69011a0b',
    mask: 'CarouselNavButtons_mask_17bb1a0e',
    mask__both: 'CarouselNavButtons_mask__both_7294632e',
    mask__left: 'CarouselNavButtons_mask__left_e8bc4c90',
    mask__right: 'CarouselNavButtons_mask__right_6be519f7',
    fadeInWithScale: 'CarouselNavButtons_fadeInWithScale_3f67251c',
    slideUp: 'CarouselNavButtons_slideUp_3f67251c',
    blink: 'CarouselNavButtons_blink_3f67251c',
    scale: 'CarouselNavButtons_scale_3f67251c',
    rotate: 'CarouselNavButtons_rotate_3f67251c',
    windowIn: 'CarouselNavButtons_windowIn_3f67251c',
    fadeOut: 'CarouselNavButtons_fadeOut_3f67251c',
    fadeIn: 'CarouselNavButtons_fadeIn_3f67251c',
};
function vd(e) {
    return ({ button: a }) => {
        0 === a && e();
    };
}
function xd({ itemWidth: s, api: r, children: i }) {
    const n = t.useRef(null),
        [o, l] = t.useState(!1),
        { applyScroll: c, animationScroll: d, disabled: _ } = r,
        [u, m] = Aa(r),
        p = u || _,
        b = m || _;
    function h(e) {
        function a() {
            const a = d.scrollPosition.get();
            c(a + e * s);
        }
        o || (a(), (n.current = window.setInterval(a, 100)), l(!0));
    }
    function f() {
        (null !== n.current && (clearInterval(n.current), (n.current = null)), l(!1));
    }
    return e.jsxs('div', {
        className: gd.navButtonWrapper,
        children: [
            e.jsx(fd, {
                direction: fd.direction.left,
                onMouseDown: vd(() => h(-1)),
                onMouseUp: f,
                onMouseLeave: f,
                className: a(gd.navButton, gd.navButton__left, p && gd.navButton__hidden),
            }),
            e.jsx('div', { className: a(gd.mask, gd[`mask__${hl(u, m)}`]), children: i }),
            e.jsx(fd, {
                direction: fd.direction.right,
                onMouseDown: vd(() => h(1)),
                onMouseUp: f,
                onMouseLeave: f,
                className: a(gd.navButton, gd.navButton__right, b && gd.navButton__hidden),
            }),
        ],
    });
}
const wd = { base: 'CarouselScroll_3690a837', areaContent: 'CarouselScroll_areaContent_f5dd7772' },
    Cd = 'dragging',
    yd = 'idle';
function jd({
    api: s,
    children: r,
    className: i,
    areaClassNames: n,
    staticContent: o,
    disabled: l,
    onDraggingState: c,
}) {
    const { animationScroll: d, applyScroll: _, setDisabled: u } = s,
        m = Ea(s, La.horizontal, void 0, { gapBeforeStart: 5 });
    return (
        t.useEffect(() => {
            null == c || c(m.type === Cd);
        }, [m.type, c]),
        t.useEffect(() => {
            u(l);
        }, [l, u]),
        t.useEffect(
            () =>
                te(() => {
                    m.type === yd && d.scrollPosition.idle && _(d.scrollPosition.get());
                }),
            [d.scrollPosition, m, _],
        ),
        e.jsx('div', {
            className: a(wd.base, i),
            children: e.jsxs(Ta, {
                className: null == n ? void 0 : n.base,
                classNames: {
                    wrapper: a(wd.areaWrapper, null == n ? void 0 : n.wrapper),
                    content: a(wd.areaContent, null == n ? void 0 : n.content),
                },
                children: [r, o],
            }),
        })
    );
}
const Sd = 'CarouselSkeleton_1ac002e3',
    Nd = 'CarouselSkeleton_content_b18f8dd7',
    kd = 'CarouselSkeleton_scroll_badf82c7';
function Id(t) {
    return e.jsx('div', { ...t, className: a(Nd, t.className) });
}
function Pd({
    api: t,
    widthElement: s,
    totalElements: r,
    disabled: i,
    onDraggingState: n,
    renderElement: o,
    classNames: l,
}) {
    return e.jsx('div', {
        className: a(Sd, null == l ? void 0 : l.base),
        children: e.jsx(xd, {
            api: t,
            itemWidth: s,
            children: e.jsx(Da, {
                api: t,
                elementWidth: s - Ba(1),
                direction: 'horizontal',
                totalElements: r,
                wrappers: { Content: Id },
                className: a(kd, null == l ? void 0 : l.scroll),
                renderScroll: (a) => e.jsx(jd, { ...a, api: t, disabled: i, onDraggingState: n, children: a.children }),
                renderElement: (a) => (o ? o(a) : e.jsx(md, { className: null == l ? void 0 : l.element, width: s })),
            }),
        }),
    });
}
function Rd(e, a, s, r) {
    return t.useMemo(() => {
        if (!a) return { activeSlotsAmount: 0, activeSlotsIds: [] };
        const t = ((e, a) => ({
                left: [...(a != vo ? [El.rentTank] : [])],
                right: [El.buyTank, ...(e > 0 ? [El.restoreTank] : []), El.buySlot],
            }))(s, r),
            i = e.length + t.right.length + t.left.length,
            n = Math.max(0, a - i);
        return { activeSlotsAmount: i, activeSlotsIds: [...t.left, ...e, ...t.right, ...Array(n).fill(ll)] };
    }, [s, e, a, r]);
}
function Bd({ api: e, carouselRows: a }) {
    const s = (function (e) {
            const a = ce(bl.default, bl.breakpoints);
            return Ba(2 === e ? a.double : a.single);
        })(a),
        [r, i] = t.useState({ carouselRows: 0, cardWidth: 0, visibleSlots: 0 });
    return (
        t.useLayoutEffect(() => {
            function t() {
                const t = e.getWrapperSize();
                t &&
                    i(
                        2 !== a
                            ? { visibleSlots: Math.ceil(t / s), cardWidth: s, carouselRows: a }
                            : { visibleSlots: Math.ceil((t / s) * a), cardWidth: s, carouselRows: a },
                    );
            }
            t();
            return new Ra().add(e.events.on('resizeHandled', t)).add(e.events.on('recalculateContent', t)).dispose;
        }, [e, s, a]),
        r
    );
}
const Ad = 'Carousel_draggingOverlay_2ac699b0',
    Ed = 'Carousel_9b3e04da',
    Td = 'Carousel_base__visible_24d53d12',
    Ld = 'Carousel_card_5449ec9a',
    Dd = 'Carousel_card__inactive_c59331d9';
w(function () {
    const s = No(),
        [r, i] = t.useState(!1),
        { api: n } = Wa(),
        o = wo(),
        l = qn().model.carouselRowCount.get(),
        c = o.model.prebattleModeActive(),
        d = o.model.telecomRentStatus.get(),
        _ = o.model.current.ids(),
        u = o.model.current.list(),
        m = o.model.selectedVehicle(),
        p = null == m ? void 0 : m.id,
        { currentIndex: b } = (function (e, a) {
            return t.useMemo(() => {
                if (!a) return { currentIndex: -1, currentPosition: -1 };
                const t = e.indexOf(a);
                return { currentIndex: t, currentPosition: t >= 0 ? t + 1 : -1 };
            }, [e, a]);
        })(_, p),
        h = ba(p),
        f = o.model.slots.recover.get(),
        { carouselRows: g, cardWidth: v, visibleSlots: x } = Bd({ api: n, carouselRows: l }),
        { activeSlotsAmount: w, activeSlotsIds: C } = Rd(_, x, f, d),
        j =
            ((S = C),
            t.useMemo(() => {
                var e, a;
                const t = [];
                for (let s = 0; s < S.length; s += 2) t.push(S.slice(s, s + 2));
                return (
                    1 === (null == (e = t.at(-1)) ? void 0 : e.length) && (null == (a = t.at(-1)) || a.push(ll)),
                    t
                );
            }, [S]));
    var S;
    (t.useEffect(() => {
        const e = Oa(500, !0, () =>
            Ma.contextMenu.hide(
                0,
                ie.resolve('aliases').read((e) => e.common.contextMenu.Backport('resId')),
            ),
        );
        return (
            n.events.on('change', e),
            () => {
                (e.cancel(), n.events.off('change', e));
            }
        );
    }, [n]),
        (function (e, a, s, r, i, n) {
            const o = t.useRef(null);
            t.useLayoutEffect(() => {
                function t() {
                    const t = e.getWrapperSize(),
                        l = e.animationScroll.scrollPosition.get();
                    if (!t) return;
                    n && e.applyScroll(0, { immediate: !0 });
                    const c = s - Ba(1),
                        d = l,
                        _ = l + t,
                        u = c * Math.floor(a / r),
                        m = u + c,
                        p = u - (Math.floor(t / c) / 2) * c;
                    u > d && m < _
                        ? (o.current && i && 0 !== o.current - i && e.applyScroll(p, { immediate: !0 }),
                          (o.current = i))
                        : ((o.current = i), e.applyScroll(p, { immediate: !0 }));
                }
                return (
                    t(),
                    new Ra().add(e.events.on('resizeHandled', t)).add(e.events.on('recalculateContent', t)).dispose
                );
            }, [a, e, s, r, n, i]);
        })(n, b, v, g, _.length, x > w),
        (function (e, a, t, s, r) {
            const i = 2 === s;
            function n(s) {
                t(-1 !== e ? a[e + s].inventoryId : a[0].inventoryId);
            }
            const o = [
                { key: E.ARROW_DOWN, blockKey: !i || e % s === s - 1 || e === a.length - 1, action: () => n(1) },
                { key: E.ARROW_UP, blockKey: !i || e % s === 0, action: () => n(-1) },
                { key: E.ARROW_LEFT, blockKey: i ? e < s : 0 === e, action: () => n(-s) },
                { key: E.ARROW_RIGHT, blockKey: i ? e > a.length - (s + 1) : e === a.length - 1, action: () => n(s) },
                { key: E.HOME, blockKey: 0 === a.length, action: () => t(a[0].inventoryId) },
                { key: E.END, blockKey: 0 === a.length, action: () => t(a[a.length - 1].inventoryId) },
            ];
            for (const { key: l, blockKey: c, action: d } of o) {
                const e = r || c ? E.NONE : l;
                J(e, d);
            }
        })(b, u, o.controls.select, g, 0 === _.length || c));
    const N = (function (e, a) {
        const [s, r] = t.useState(0 === a),
            i = da();
        return (
            t.useEffect(() => {
                if (s || 0 === a) return r(!0);
                function t() {
                    (r(!0), n.dispose(), i.clear());
                }
                i.run(t);
                const n = new Ra()
                    .add(i.clear)
                    .add(e.events.on('resizeHandled', () => i.run(t)))
                    .add(e.events.on('recalculateContent', () => i.run(t)));
                return n.dispose;
            }, [e, a, s, i]),
            s
        );
    })(n, _.length);
    return (
        t.useEffect(() => {
            s && s.model.computeds.enabled() && p !== h && s.controls.reset();
        }, [p, h, s]),
        e.jsxs(e.Fragment, {
            children: [
                e.jsx(Pd, {
                    api: n,
                    widthElement: v,
                    totalElements: 2 === g ? j.length : C.length,
                    disabled: x > w,
                    onDraggingState: i,
                    classNames: { base: a(Ed, N && Td), element: a(Ld, r && Dd) },
                    renderElement: (t) => {
                        const s = a(Ld, r && Dd);
                        return 2 === g
                            ? e.jsx(Va, {
                                  failure: () => e.jsx(md, { className: s, width: v }),
                                  children: e.jsx(
                                      bd,
                                      {
                                          chunkedSlots: j[t],
                                          currentVehicleId: p,
                                          width: v,
                                          classNames: { slot: s },
                                          double: !0,
                                      },
                                      t,
                                  ),
                              })
                            : e.jsx(Va, {
                                  failure: () => e.jsx(md, { className: s, width: v }),
                                  children: e.jsx(
                                      pd,
                                      { slotId: C[t], currentVehicleId: p, width: v, className: s, double: !1 },
                                      C[t] ?? t,
                                  ),
                              });
                    },
                }),
                s && s.model.computeds.enabled() && e.jsx(ol, { freeSpaceRem: 0, tipSize: '32rem' }),
                y.createPortal(r && e.jsx('div', { className: Ad }), document.body),
            ],
        })
    );
});
const Wd = 'ActiveCardHeader_235d362d',
    Od = 'ActiveCardHeader_activeText_7d2a0ad7',
    Md = 'ActiveCardHeader_idleVideo_b2e26623',
    Vd = function ({ text: t, videoSrc: s, className: r = '', classNames: i }) {
        return e.jsxs('div', {
            className: a(Wd, r),
            children: [
                e.jsx('div', { className: a(Od, null == i ? void 0 : i.activeText), children: t }),
                e.jsx(Se, { className: a(Md, null == i ? void 0 : i.idleVideo), src: s, autoplay: !0, loop: !0 }),
            ],
        });
    },
    zd = 'Content_8ce13fac',
    Fd = 'Content_base__disabled_da09528a',
    $d = 'Content_base__selected_da09528a';
function Hd({ children: t, selected: s, disabled: r }) {
    return e.jsx('div', { className: a(zd, s && $d, r && Fd), children: t });
}
const Ud = 'Slot_750e4447',
    Gd = 'Slot_base__disabled_440d6866',
    qd = 'Slot_content_27d2b58',
    Xd = 'Slot_base__active_71f19f5c',
    Zd = 'Slot_base__selected_71f19f5c',
    Kd = 'Slot_selected_302eadc9',
    Yd = 'Slot_selected__border_e2a17304';
function Qd({ children: t, selected: s = !1, disabled: r = !1, active: i = !1, className: n, ...o }) {
    return e.jsx('div', {
        ...o,
        className: a(Ud, i && Xd, s && Zd, r && Gd, n),
        children: e.jsxs('div', {
            className: qd,
            children: [
                e.jsx(Hd, { selected: s, disabled: r, children: t }),
                s && e.jsx('div', { className: a(Kd, Yd) }),
                e.jsx('div', { className: Kd }),
            ],
        }),
    });
}
const Jd = 'regular',
    e_ = 'postprogression',
    a_ = 'extra',
    t_ = (e, a) => (e ? a_ : a ? e_ : Jd),
    s_ = {
        regular: {
            extraSmall: { cardWidth: '262rem', cardHeight: '166rem', rewardWidth: '288rem', rewardHeight: '192rem' },
            small: { cardWidth: '262rem', cardHeight: '166rem', rewardWidth: '288rem', rewardHeight: '192rem' },
            medium: { cardWidth: '326rem', cardHeight: '206rem', rewardWidth: '360rem', rewardHeight: '240rem' },
            large: { cardWidth: '406rem', cardHeight: '256rem', rewardWidth: '450rem', rewardHeight: '300rem' },
            extraLarge: { cardWidth: '486rem', cardHeight: '306rem', rewardWidth: '540rem', rewardHeight: '360rem' },
        },
        postprogression: {
            extraSmall: { cardWidth: '198rem', cardHeight: '166rem', rewardWidth: '192rem', rewardHeight: '192rem' },
            small: { cardWidth: '198rem', cardHeight: '166rem', rewardWidth: '192rem', rewardHeight: '192rem' },
            medium: { cardWidth: '246rem', cardHeight: '206rem', rewardWidth: '240rem', rewardHeight: '240rem' },
            large: { cardWidth: '306rem', cardHeight: '256rem', rewardWidth: '300rem', rewardHeight: '300rem' },
            extraLarge: { cardWidth: '366rem', cardHeight: '306rem', rewardWidth: '360rem', rewardHeight: '360rem' },
        },
        extra: {
            extraSmall: { cardWidth: '262rem', cardHeight: '230rem', rewardWidth: '288rem', rewardHeight: '256rem' },
            small: { cardWidth: '262rem', cardHeight: '230rem', rewardWidth: '288rem', rewardHeight: '256rem' },
            medium: { cardWidth: '326rem', cardHeight: '286rem', rewardWidth: '360rem', rewardHeight: '320rem' },
            large: { cardWidth: '406rem', cardHeight: '356rem', rewardWidth: '450rem', rewardHeight: '400rem' },
            extraLarge: { cardWidth: '486rem', cardHeight: '426rem', rewardWidth: '540rem', rewardHeight: '480rem' },
        },
    },
    r_ = {
        root: 'Status_root_35b9a31c',
        base: 'Status_d06498e2',
        icon: 'Status_icon_1af01ceb',
        base__done: 'Status_base__done_35b9a31c',
        base__locked: 'Status_base__locked_35b9a31c',
        line: 'Status_line_324edf86',
        shadow: 'Status_shadow_75136b3b',
        glowInner: 'Status_glowInner_3e65d7dc',
        blur: 'Status_blur_fe6f30fc',
        glowBig: 'Status_glowBig_156fcd01',
        fadeInWithScale: 'Status_fadeInWithScale_35b9a31c',
        slideUp: 'Status_slideUp_35b9a31c',
        blink: 'Status_blink_35b9a31c',
        scale: 'Status_scale_35b9a31c',
        rotate: 'Status_rotate_35b9a31c',
        windowIn: 'Status_windowIn_35b9a31c',
        fadeOut: 'Status_fadeOut_35b9a31c',
        fadeIn: 'Status_fadeIn_35b9a31c',
    },
    i_ = ({ type: t, className: s }) =>
        e.jsxs('div', {
            className: a(r_.base, r_[`base__${t}`], s),
            children: [
                e.jsx('div', { className: r_.glowBig }),
                e.jsx('div', { className: r_.line }),
                e.jsx('div', { className: r_.shadow }),
                e.jsx('div', { className: r_.glowInner }),
                e.jsx('svg', {
                    width: '42',
                    height: '42',
                    viewBox: '0 0 42 42',
                    className: r_.blur,
                    children: e.jsx('g', { children: e.jsx('circle', { cx: '21', cy: '21', r: '3' }) }),
                }),
                e.jsx('div', { className: a(r_.icon) }),
            ],
        }),
    n_ = 'UnlockedState_d8033d83',
    o_ = 'UnlockedState_stages_ef0d6acd',
    l_ = 'UnlockedState_mainStage_286ea378',
    c_ = 'UnlockedState_additionalStage_83045438',
    d_ = 'UnlockedState_cycleText_5b49e844',
    __ = R.strings.battle_pass.chapterChoice,
    u_ = function ({ currentLevel: a, cyclesCompletedCount: t, maxLevel: s }) {
        const r = (a - 1) % s;
        return e.jsxs('div', {
            className: n_,
            children: [
                e.jsx(B, { classMix: d_, text: __.postprogression.unlocked.cycle(), binding: { cycle: t + 1 } }),
                e.jsxs('div', {
                    className: o_,
                    children: [
                        e.jsx('span', { className: l_, children: `${r}` }),
                        e.jsx(B, { classMix: c_, text: __.stages.additional(), binding: { level: s } }),
                    ],
                }),
            ],
        });
    },
    m_ = 'PostprogressionInfo_f8fcfc44',
    p_ = 'PostprogressionInfo_lockedText_c823728d',
    b_ = R.strings.battle_pass.chapterChoice,
    h_ = n(function ({ chapterID: a }) {
        const { model: t } = kn(),
            { currentLevel: s, cyclesCompletedCount: r, maxLevel: i } = t.computes.getChapterById(a),
            n = t.computes.regularChapters().length - 1 !== t.computes.regularChaptersCompleteCount();
        return e.jsx('div', {
            className: m_,
            children: n
                ? e.jsx(he, {
                      className: p_,
                      text: b_.postprogression.locked(),
                      params: { count: t.computes.regularChapters().length - 1 },
                  })
                : e.jsx(u_, { currentLevel: s, cyclesCompletedCount: r, maxLevel: i }),
        });
    }),
    f_ = 'CompletedState_completeText_f209b72f',
    g_ = 'CompletedState_completeText__bought_4533734f',
    v_ = R.strings.battle_pass.chapterChoice,
    x_ = function ({ isBought: t, chapterRewardsCount: s }) {
        return e.jsx(e.Fragment, {
            children: t
                ? e.jsx('div', { className: a(f_, g_), children: v_.stages.complete.improved() })
                : e.jsx(B, { classMix: f_, text: v_.stages.complete.unimproved(), binding: { count: s } }),
        });
    },
    w_ = 'UncompletedState_9e8c0393',
    C_ = 'UncompletedState_mainStage_5808557f',
    y_ = 'UncompletedState_additionalStage_ef80ee9c',
    j_ = R.strings.battle_pass.chapterChoice,
    S_ = function ({ currentLevel: a, maxStages: t }) {
        return e.jsxs('div', {
            className: w_,
            children: [
                e.jsx('span', { className: C_, children: '' + (a - 1) }),
                e.jsx(B, { classMix: y_, text: j_.stages.additional(), binding: { level: t } }),
            ],
        });
    },
    N_ = 'RegularInfo_46f7818d',
    k_ = 'RegularInfo_uncomplete_854e3542';
R.strings.battle_pass.chapterChoice;
const I_ = n(function ({ chapterID: a }) {
        const { model: t } = kn(),
            {
                currentLevel: s,
                chapterState: r,
                isBought: i,
                chapterRewardsCount: n,
                maxLevel: o,
            } = t.computes.getChapterById(a);
        return e.jsx('div', {
            className: N_,
            children:
                r === Gt.Completed
                    ? e.jsx(x_, { isBought: i, chapterRewardsCount: n })
                    : e.jsx('div', { className: k_, children: e.jsx(S_, { currentLevel: s, maxStages: o }) }),
        });
    }),
    P_ = {
        root: 'CardInfo_root_8e8a9c2',
        base: 'CardInfo_7298ebd2',
        base__postprogression: 'CardInfo_base__postprogression_f10eeba',
        infoIcon: 'CardInfo_infoIcon_fe2dde8d',
        infoIcon__x60x60: 'CardInfo_infoIcon__x60x60_69dd0923',
        infoIcon__x80x80: 'CardInfo_infoIcon__x80x80_39f83cbc',
        infoIcon__x120x120: 'CardInfo_infoIcon__x120x120_a47141e5',
        infoDescription: 'CardInfo_infoDescription_af2ed432',
        chapterName: 'CardInfo_chapterName_91c4f3ea',
        chapterName__bought: 'CardInfo_chapterName__bought_a3ef657b',
        fadeInWithScale: 'CardInfo_fadeInWithScale_8e8a9c2',
        slideUp: 'CardInfo_slideUp_8e8a9c2',
        blink: 'CardInfo_blink_8e8a9c2',
        scale: 'CardInfo_scale_8e8a9c2',
        rotate: 'CardInfo_rotate_8e8a9c2',
        windowIn: 'CardInfo_windowIn_8e8a9c2',
        fadeOut: 'CardInfo_fadeOut_8e8a9c2',
        fadeIn: 'CardInfo_fadeIn_8e8a9c2',
    },
    R_ = ie.resolve('images'),
    B_ = ie.resolve('strings'),
    A_ = R.strings.battle_pass.chapterChoice,
    E_ = n(function ({ chapterID: t, className: s = '' }) {
        const { model: r } = kn(),
            { breakpoint: i } = F(),
            { isBought: n, isExtra: o, isPostProgression: l } = r.computes.getChapterById(t),
            c = t_(o, l),
            d = ce({ iconSize: ui }, { large: { iconSize: mi }, extraLarge: { iconSize: bi } }),
            _ = ne(d.iconSize, hi),
            u = (() => {
                const e = String(t).slice(-1);
                return (
                    R_.readOrEmpty(`battlePass.emblem.icon.c_${t}.${n ? 'purchased' : 'basic'}.${_}`, 'silent') ||
                    R_.readOrEmpty(`battlePass.emblem.icon.default_${e}.${n ? 'purchased' : 'basic'}.${_}`)
                );
            })();
        return e.jsxs('div', {
            className: a(P_.base, l && P_.base__postprogression),
            children: [
                e.jsx('div', {
                    className: a(P_.infoIcon, P_[`infoIcon__${d.iconSize}`]),
                    style: { backgroundImage: `url(${u})` },
                }),
                e.jsxs('div', {
                    className: P_.infoDescription,
                    style: { '--card-width': s_[c][i.name].cardWidth },
                    children: [
                        e.jsx('div', {
                            className: a(P_.chapterName, n && P_.chapterName__bought),
                            children: l
                                ? A_.postprogression.name()
                                : B_.readOrEmpty(`battle_pass.chapter.fullName.c_${t}`),
                        }),
                        l ? e.jsx(h_, { chapterID: t }) : e.jsx(I_, { chapterID: t }),
                    ],
                }),
            ],
        });
    }),
    T_ = {
        root: 'CardTemplate_root_5ee959db',
        base: 'CardTemplate_664f5f0d',
        bg: 'CardTemplate_bg_e653648c',
        reward: 'CardTemplate_reward_4b474b06',
        base__paused: 'CardTemplate_base__paused_5ee959db',
        base__notStarted: 'CardTemplate_base__notStarted_5ee959db',
        base__completed: 'CardTemplate_base__completed_5ee959db',
        base__selected: 'CardTemplate_base__selected_5ee959db',
        progressBar: 'CardTemplate_progressBar_9b805b48',
        progressBar__active: 'CardTemplate_progressBar__active_5ddba882',
        progressBarBg: 'CardTemplate_progressBarBg_5ee959db',
        info: 'CardTemplate_info_b6b5a8af',
        status: 'CardTemplate_status_4dbaa00d',
        fadeInWithScale: 'CardTemplate_fadeInWithScale_5ee959db',
        slideUp: 'CardTemplate_slideUp_5ee959db',
        blink: 'CardTemplate_blink_5ee959db',
        scale: 'CardTemplate_scale_5ee959db',
        rotate: 'CardTemplate_rotate_5ee959db',
        windowIn: 'CardTemplate_windowIn_5ee959db',
        fadeOut: 'CardTemplate_fadeOut_5ee959db',
        fadeIn: 'CardTemplate_fadeIn_5ee959db',
    },
    L_ = ie.resolve('images'),
    D_ = (e, a = !1) => (e === Gt.Completed ? Fa.done : a ? Fa.locked : void 0),
    W_ = n(function ({ chapterID: t, classNames: s = {} }) {
        const { model: r } = kn(),
            { breakpoint: i } = F(),
            {
                chapterState: n,
                isExtra: o,
                isPostProgression: l,
                currentLevel: c,
                maxLevel: d,
            } = r.computes.getChapterById(t),
            _ = t_(o, l),
            u = t === r.selectedChapterID.get(),
            m = r.computes.regularChapters().length - 1 !== r.computes.regularChaptersCompleteCount() && l,
            p = String(t).slice(-1),
            b =
                L_.readOrEmpty(`battlePass.chapter_choice.card_bg.c_${t}`, 'silent') ||
                L_.readOrEmpty(`battlePass.chapter_choice.card_bg.default_${p}`),
            h =
                L_.readOrEmpty(`battlePass.chapter_choice.tanks.c_${t}`, 'silent') ||
                L_.readOrEmpty(`battlePass.chapter_choice.tanks.default_${p}`);
        return e.jsxs('div', {
            className: a(T_.base, T_[`base__${n}`], u && T_.base__selected),
            children: [
                e.jsx('div', { className: T_.bg, style: { backgroundImage: `url(${b})` } }),
                e.jsx('div', {
                    className: a(T_.reward, s.reward),
                    style: {
                        backgroundImage: `url(${h})`,
                        width: s_[_][i.name].rewardWidth,
                        height: s_[_][i.name].rewardHeight,
                    },
                }),
                n !== Gt.Completed &&
                    !l &&
                    e.jsx(za, {
                        value: c,
                        maxValue: d,
                        size: 'small',
                        className: a(T_.progressBar, n === Gt.Active && T_.progressBar__active),
                        classNames: { background: T_.progressBarBg },
                    }),
                e.jsx('div', { className: T_.info, children: e.jsx(E_, { chapterID: t }) }),
                D_(n, m) && e.jsx('div', { className: T_.status, children: e.jsx(i_, { type: D_(n, m) }) }),
            ],
        });
    }),
    O_ = {
        root: 'Card_root_f4c22d1c',
        base: 'Card_3be28e6f',
        base__extra: 'Card_base__extra_5e0e439b',
        slot: 'Card_slot_a21856b4',
        active: 'Card_active_bd76cf9b',
        info: 'Card_info_9eddf15f',
        idleVideo__regular: 'Card_idleVideo__regular_f4c22d1c',
        idleVideo__extra: 'Card_idleVideo__extra_4cdfaaf7',
        idleVideo__postprogression: 'Card_idleVideo__postprogression_b28e5b27',
        fadeInWithScale: 'Card_fadeInWithScale_f4c22d1c',
        slideUp: 'Card_slideUp_f4c22d1c',
        blink: 'Card_blink_f4c22d1c',
        scale: 'Card_scale_f4c22d1c',
        rotate: 'Card_rotate_f4c22d1c',
        windowIn: 'Card_windowIn_f4c22d1c',
        fadeOut: 'Card_fadeOut_f4c22d1c',
        fadeIn: 'Card_fadeIn_f4c22d1c',
    },
    M_ = R.strings.battle_pass.chapterChoice,
    V_ = n(function ({ chapterID: t }) {
        const { model: s, controls: r } = kn(),
            { breakpoint: i } = F(),
            { chapterState: n, isPostProgression: o, isExtra: l } = s.computes.getChapterById(t),
            c = s.selectedChapterID.get(),
            d = s.computes.selectedChapter(),
            _ = s.computes.sortedChapters().indexOf(d),
            u = t_(l, o);
        return e.jsxs('div', {
            className: a(O_.base, l && O_.base__extra),
            children: [
                n === Gt.Active &&
                    e.jsx(Vd, {
                        text: o ? M_.activeChapter.postprogression.text() : M_.activeChapter.text(),
                        videoSrc: R.videos.battle_pass.chapter_choice.activeAnimation(),
                        className: O_.active,
                        classNames: { idleVideo: O_[`idleVideo__${o ? e_ : Jd}`] },
                    }),
                e.jsx(Qd, {
                    selected: c === t,
                    active: n === Gt.Active,
                    onClick: () => {
                        t !== c &&
                            (r.setPrevChapterIndex(_),
                            r.setSelectedChapterID(t),
                            r.onChapterSelect(t),
                            z.sound(R.sounds.bp_select_chapter()));
                    },
                    className: O_.slot,
                    style: { width: s_[u][i.name].cardWidth, height: s_[u][i.name].cardHeight },
                    'data-test-id': `chapterID-${t}`,
                    children: e.jsx(W_, { chapterID: t }),
                }),
            ],
        });
    }),
    z_ = {
        root: 'CardsContent_root_ef18ba3c',
        base: 'CardsContent_f347026f',
        mask: 'CardsContent_mask_a692c319',
        mask__both: 'CardsContent_mask__both_a3217d34',
        mask__left: 'CardsContent_mask__left_96e6e67c',
        mask__right: 'CardsContent_mask__right_50882304',
        cardsWrapper: 'CardsContent_cardsWrapper_7a6da9dd',
        cardsWrapper__inactive: 'CardsContent_cardsWrapper__inactive_92450b8d',
        scrollWrapper: 'CardsContent_scrollWrapper_e65fe5a6',
        scrollBar: 'CardsContent_scrollBar_9c08690c',
        fadeInWithScale: 'CardsContent_fadeInWithScale_ef18ba3c',
        slideUp: 'CardsContent_slideUp_ef18ba3c',
        blink: 'CardsContent_blink_ef18ba3c',
        scale: 'CardsContent_scale_ef18ba3c',
        rotate: 'CardsContent_rotate_ef18ba3c',
        windowIn: 'CardsContent_windowIn_ef18ba3c',
        fadeOut: 'CardsContent_fadeOut_ef18ba3c',
        fadeIn: 'CardsContent_fadeIn_ef18ba3c',
    },
    F_ = n(function () {
        const { model: s, controls: r } = kn(),
            [i, n] = t.useState(!1),
            { api: o } = Wa(),
            { animationScroll: l, applyScroll: c, getBounds: d } = o,
            _ = s.computes.selectedChapter(),
            u = s.computes.sortedChapters(),
            m = u.indexOf(_),
            p = Ea(o, La.horizontal, void 0, { gapBeforeStart: 5 }),
            [b, h] = Aa(o);
        (t.useEffect(() => {
            _ && r.setSelectedChapterID(_.chapterID);
        }, [r, _]),
            t.useEffect(
                () =>
                    te(() => {
                        'idle' === p.type && l.scrollPosition.idle && c(l.scrollPosition.get());
                    }),
                [l.scrollPosition, c, p.type],
            ),
            t.useEffect(() => {
                const e = u.indexOf(_),
                    [a, t] = d();
                c(e >= Math.floor(u.length / 2) ? t : a);
            }, [c, d, _, u]),
            t.useEffect(() => {
                n('dragging' === p.type);
            }, [p.type]),
            t.useEffect(() => {
                const e = (e, a, t) => {
                    !1 === (Ha(a.get(), t) && Ha(a.goal, t)) && e.stopPropagation();
                };
                return (
                    o.events.on('mouseWheel', e),
                    () => {
                        o.events.off('mouseWheel', e);
                    }
                );
            }, [o]));
        const f = (e, a) => {
            (r.setSelectedChapterID(u[e].chapterID),
                r.onChapterSelect(u[e].chapterID),
                e !== a && r.setPrevChapterIndex(a));
        };
        return (
            J(E.ARROW_RIGHT, () => {
                const e = m < u.length - 1 ? m + 1 : m;
                f(e, m);
            }),
            J(E.ARROW_LEFT, () => {
                f(m > 0 ? m - 1 : m, m);
            }),
            e.jsxs('div', {
                className: z_.base,
                children: [
                    e.jsx('div', {
                        className: a(z_.mask, z_[`mask__${hl(b, h)}`]),
                        children: e.jsx(Ta, {
                            classNames: { wrapper: z_.scrollWrapper },
                            children: e.jsx('div', {
                                className: a(z_.cardsWrapper, i && z_.cardsWrapper__inactive),
                                children: ae(u, (a, t) => e.jsx(V_, { chapterID: a.chapterID }, `${a.chapterID}_${t}`)),
                            }),
                        }),
                    }),
                    e.jsx($a, { classNames: { base: z_.scrollBar } }),
                ],
            })
        );
    }),
    $_ = 'ButtonsGroup_6fd5782',
    H_ = 'ButtonsGroup_button_17bae557',
    U_ = ie.resolve('strings'),
    G_ = n(function () {
        const a = Z(),
            { model: t, controls: s } = kn(),
            r = t.computes.selectedChapter(),
            { chapterID: i, isPostProgression: n, tankmenScreenID: o } = r,
            { breakpoint: l } = F(),
            c = l.weight >= $.large.weight ? de.large : de.medium;
        return (
            J(E.SPACE, () => {
                n ? a.push(xs.battlePass.postProgression, {}) : a.push(xs.battlePass.progression, { chapterID: i });
            }),
            e.jsxs('div', {
                className: $_,
                children: [
                    n
                        ? e.jsx(pe, {
                              onClick: () => a.push(xs.battlePass.postProgression, {}),
                              className: H_,
                              size: c,
                              'data-test-id': 'toPostProgression',
                              children: U_.readOrEmpty(
                                  'battle_pass.chapterChoice.chapterInfo.buttons.toPostProgression',
                              ),
                          })
                        : e.jsx(pe, {
                              onClick: () => a.push(xs.battlePass.progression, { chapterID: i }),
                              className: H_,
                              size: c,
                              'data-test-id': 'toChapter',
                              children: U_.readOrEmpty('battle_pass.chapterChoice.chapterInfo.buttons.toChapter'),
                          }),
                    0 !== o &&
                        e.jsx(pe, {
                            onClick: () => s.showTankmen(i),
                            className: H_,
                            theme: be.secondary,
                            size: c,
                            'data-test-id': 'toCrewMembers',
                            children: U_.readOrEmpty('battle_pass.chapterChoice.chapterInfo.buttons.toCrewMembers'),
                        }),
                ],
            })
        );
    }),
    q_ = 'Deadline_d8216f12',
    X_ = 'Deadline_timerIcon_cda81cf2',
    Z_ = 'Deadline_timerLabel_218217e0',
    K_ = ie.resolve('strings'),
    Y_ = qa,
    Q_ = n(function () {
        const { model: a } = kn(),
            { expireTime: t, timeLeft: s } = a.computes.selectedChapter(),
            r = a.computes.detailedTimer();
        return e.jsx('div', {
            className: q_,
            children: r
                ? e.jsx(B, {
                      text: K_.readOrEmpty('battle_pass.chapterChoice.chapterInfo.deadline.time'),
                      binding: {
                          endTime: e.jsx(Ua, { start: s, size: Ga.x48x48, classNames: { icon: X_, label: Z_ } }, s),
                      },
                  })
                : e.jsx(B, {
                      text: K_.readOrEmpty('battle_pass.chapterChoice.chapterInfo.deadline.date'),
                      binding: { endDate: Y_(t, Xa.DayMonthFull) },
                  }),
        });
    }),
    J_ = {
        root: 'PreviewButton_root_22577403',
        base: 'PreviewButton_8d85fd92',
        base__x100x100: 'PreviewButton_base__x100x100_40f65925',
        base__x120x120: 'PreviewButton_base__x120x120_eabae7e5',
        base__x140x140: 'PreviewButton_base__x140x140_592ecabc',
        base__hovered: 'PreviewButton_base__hovered_6f70d99a',
        fadeInWithScale: 'PreviewButton_fadeInWithScale_22577403',
        slideUp: 'PreviewButton_slideUp_22577403',
        blink: 'PreviewButton_blink_22577403',
        scale: 'PreviewButton_scale_22577403',
        rotate: 'PreviewButton_rotate_22577403',
        windowIn: 'PreviewButton_windowIn_22577403',
        fadeOut: 'PreviewButton_fadeOut_22577403',
        fadeIn: 'PreviewButton_fadeIn_22577403',
    },
    eu = 'x100x100',
    au = 'x120x120',
    tu = 'x140x140',
    su = ie.resolve('images'),
    ru = function ({
        iconSize: s,
        onClick: r,
        onMouseEnter: i,
        onMouseLeave: n,
        soundHover: o = '',
        soundClick: l = '',
        className: c = '',
    }) {
        const [d, _] = t.useState(!1),
            u = su.readOrEmpty(`battlePass.icons.previewButton.${ne(s, tu)}`);
        return e.jsx('div', {
            className: a(J_.base, d && J_.base__hovered, J_[`base__${s}`], c),
            onClick: (e) => {
                (null == r || r(e), l && z.sound(l));
            },
            onMouseEnter: () => {
                (_(!0), null == i || i(), o && z.sound(o));
            },
            onMouseLeave: () => {
                (_(!1), null == n || n());
            },
            style: { backgroundImage: `url(${u})` },
        });
    },
    iu = {
        root: 'InGarage_root_2e055df1',
        base: 'InGarage_66bdf5dd',
        base__x24x24: 'InGarage_base__x24x24_79818dbf',
        base__x32x32: 'InGarage_base__x32x32_839c6a2c',
        base__x48x48: 'InGarage_base__x48x48_19be1254',
        base__x80x80: 'InGarage_base__x80x80_c3a1d174',
        fadeInWithScale: 'InGarage_fadeInWithScale_2e055df1',
        slideUp: 'InGarage_slideUp_2e055df1',
        blink: 'InGarage_blink_2e055df1',
        scale: 'InGarage_scale_2e055df1',
        rotate: 'InGarage_rotate_2e055df1',
        windowIn: 'InGarage_windowIn_2e055df1',
        fadeOut: 'InGarage_fadeOut_2e055df1',
        fadeIn: 'InGarage_fadeIn_2e055df1',
    },
    nu = 'x24x24',
    ou = 'x32x32',
    lu = 'x48x48',
    cu = 'x80x80',
    du = ie.resolve('images'),
    _u = function ({ iconSize: t, className: s = '' }) {
        const r = du.readOrEmpty(`battlePass.icons.inGarage.${t}`);
        return e.jsx('div', { className: a(iu.base, iu[`base__${t}`], s), style: { backgroundImage: `url(${r})` } });
    },
    uu = (e) => {
        switch (e) {
            case Ie.heavyTank:
                return Ie.heavyTank;
            case Ie.lightTank:
                return Ie.lightTank;
            case Ie.mediumTank:
                return Ie.mediumTank;
            case Ie.SPG:
                return Ie.SPG;
            default:
                return Ie['AT-SPG'];
        }
    },
    mu = ({
        vehicleName: a,
        vehicleShortName: t,
        vehicleType: s,
        vehicleLvl: r,
        isElite: i,
        classNames: n,
        vehicleTypeIconSize: o = Ka.x64x64,
        isShortName: l = !1,
        custom: c = !1,
    }) =>
        e.jsx('div', {
            className: null == n ? void 0 : n.base,
            children: e.jsxs(ta, {
                children: [
                    e.jsx(ta.Level, {
                        className: null == n ? void 0 : n.level,
                        value: r,
                        numberType: Za.numberTypes.roman,
                    }),
                    e.jsx(ta.Type, { className: null == n ? void 0 : n.typeIcon, type: uu(s), premium: i, size: o }),
                    e.jsx(ta.Name, { className: null == n ? void 0 : n.name, children: l ? t : a }),
                ],
            }),
        }),
    pu = {
        vehicleWrapper: 'SubTitle_vehicleWrapper_c315a83c',
        styleWrapper: 'SubTitle_styleWrapper_58dc2a28',
        style: 'SubTitle_style_911a25b1',
        vehicleStyle: 'SubTitle_vehicleStyle_d5861629',
        postProgression: 'SubTitle_postProgression_c315a83c',
        crew: 'SubTitle_crew_f25c78a4',
        styleLevel: 'SubTitle_styleLevel_c315a83c',
        styleName: 'SubTitle_styleName_aa5a3fa2',
        vehicle: 'SubTitle_vehicle_947ca1b3',
        vehicleLevel: 'SubTitle_vehicleLevel_c315a83c',
        vehicleName: 'SubTitle_vehicleName_c315a83c',
        inGarage__style: 'SubTitle_inGarage__style_b8f6084a',
        inGarage__vehicle: 'SubTitle_inGarage__vehicle_1cb9fdfb',
    },
    bu = ie.resolve('strings'),
    hu = 'vehicle',
    fu = 'style',
    gu = n(function () {
        const { model: t } = kn(),
            s = t.computes.selectedChapter(),
            { styleName: r, vehicleInfo: i, finalRewardType: n, isVehicleInHangar: o } = s,
            {
                breakpoint: { weight: l },
            } = F(),
            c = (e) =>
                e === hu
                    ? l < $.large.weight
                        ? Ka.x64x64
                        : Ka.x96x96
                    : e === fu
                      ? l < $.large.weight
                          ? Ka.x24x24
                          : Ka.x48x48
                      : void 0,
            d = (e) =>
                e === hu
                    ? l >= $.large.weight
                        ? cu
                        : l >= $.medium.weight
                          ? lu
                          : ou
                    : e === fu
                      ? l >= $.large.weight
                          ? ou
                          : nu
                      : ou,
            _ = { level: pu.vehicleLevel, name: pu.vehicleName },
            u = { level: pu.styleLevel, name: pu.styleName };
        return (() => {
            switch (n) {
                case qt.Vehicle:
                    return e.jsxs('div', {
                        className: pu.vehicleWrapper,
                        children: [
                            e.jsx(B, {
                                classMix: pu.vehicle,
                                text: bu.readOrEmpty('battle_pass.chapterChoice.vehicle.reward.subTitle'),
                                binding: {
                                    vehicleName: e.jsx(mu, { ...i, vehicleTypeIconSize: c(hu), classNames: _ }),
                                },
                            }),
                            o && e.jsx(_u, { iconSize: d(hu), className: a(pu.inGarage, pu.inGarage__vehicle) }),
                        ],
                    });
                case qt.VehicleStyle:
                    return e.jsx(B, {
                        classMix: pu.vehicleStyle,
                        text: bu.readOrEmpty('battle_pass.chapterChoice.vehicleStyle.reward.subTitle'),
                        binding: { styleName: r },
                    });
                case qt.Style:
                    return e.jsxs('div', {
                        className: pu.styleWrapper,
                        children: [
                            e.jsx(B, {
                                classMix: pu.style,
                                text: bu.readOrEmpty('battle_pass.chapterChoice.stylePreview.reward.subTitle'),
                                binding: {
                                    vehicleName: e.jsx(mu, { ...i, vehicleTypeIconSize: c(fu), classNames: u }),
                                },
                            }),
                            o && e.jsx(_u, { iconSize: d(fu), className: a(pu.inGarage, pu.inGarage__style) }),
                        ],
                    });
                case qt.Tankman:
                    return e.jsx(B, {
                        classMix: pu.crew,
                        text: bu.readOrEmpty('battle_pass.chapterChoice.crewMember.reward.subTitle'),
                    });
                case qt.PostProgression:
                    return e.jsx(B, {
                        classMix: pu.postProgression,
                        text: bu.readOrEmpty('battle_pass.chapterChoice.eliteCircuit.reward.subTitle'),
                    });
                default:
                    return '';
            }
        })();
    }),
    vu = 'Title_vehicleStyleWrapper_5727057f',
    xu = 'Title_postProgression_2e63cf3',
    wu = 'Title_crew_ace25966',
    Cu = 'Title_vehicle_c974ddd5',
    yu = 'Title_vehicleStyle_e7d39a46',
    ju = 'Title_style_2e63cf3',
    Su = 'Title_level_2e63cf3',
    Nu = 'Title_name_93838a06',
    ku = 'Title_inGarage_1c4370bb',
    Iu = ie.resolve('strings'),
    Pu = n(function () {
        const { model: a } = kn(),
            t = a.computes.selectedChapter(),
            { styleName: s, vehicleInfo: r, finalRewardType: i, isVehicleInHangar: n, tankmanNames: o } = t,
            {
                breakpoint: { weight: l },
            } = F(),
            c = l < $.large.weight ? Ka.x64x64 : Ka.x96x96,
            d = l >= $.large.weight ? cu : l >= $.medium.weight ? lu : ou,
            _ = { level: Su, name: Nu };
        return (function () {
            switch (i) {
                case qt.Vehicle:
                    return e.jsx(B, {
                        classMix: Cu,
                        text: Iu.readOrEmpty('battle_pass.chapterChoice.vehicle.reward.title'),
                    });
                case qt.VehicleStyle:
                    return e.jsxs('div', {
                        className: vu,
                        children: [
                            e.jsx(B, {
                                classMix: yu,
                                text: Iu.readOrEmpty('battle_pass.chapterChoice.vehicleStyle.reward.title'),
                                binding: { vehicleName: e.jsx(mu, { ...r, vehicleTypeIconSize: c, classNames: _ }) },
                            }),
                            n && e.jsx(_u, { iconSize: d, className: ku }),
                        ],
                    });
                case qt.Style:
                    return e.jsx(B, {
                        classMix: ju,
                        text: Iu.readOrEmpty('battle_pass.chapterChoice.stylePreview.reward.title'),
                        binding: { styleName: s },
                    });
                case qt.Tankman:
                    return e.jsx(B, { classMix: wu, text: Ya(o, Iu.readOrEmpty('battle_pass.common.comma')) });
                case qt.PostProgression:
                    return e.jsx(B, {
                        classMix: xu,
                        text: Iu.readOrEmpty('battle_pass.chapterChoice.eliteCircuit.reward.title'),
                    });
                default:
                    return '';
            }
        })();
    }),
    Ru = 'FinalReward_96b2b9a7',
    Bu = 'FinalReward_rewardInfo_e61fb0c8',
    Au = 'FinalReward_preview_68854b55',
    Eu = n(function () {
        const { model: a, controls: s } = kn(),
            r = ce({ previewButton: eu }, { medium: { previewButton: au }, large: { previewButton: tu } }),
            i = a.computes.selectedChapter(),
            { finalRewardType: n, chapterID: o } = i,
            l = t.useCallback(
                (e) => {
                    (s.openPreview(o), e.stopPropagation());
                },
                [o, s],
            ),
            c = n === qt.Style || n === qt.Vehicle || n === qt.VehicleStyle;
        return e.jsxs('div', {
            className: Ru,
            children: [
                c && e.jsx('div', { className: Au, children: e.jsx(ru, { iconSize: r.previewButton, onClick: l }) }),
                e.jsxs('div', { className: Bu, children: [e.jsx(Pu, {}), e.jsx(gu, {})] }),
            ],
        });
    }),
    Tu = {
        root: 'ChapterInfo_root_939c7d1e',
        base: 'ChapterInfo_583787',
        deadline: 'ChapterInfo_deadline_cc71632d',
        info: 'ChapterInfo_info_fa494249',
        chapterName: 'ChapterInfo_chapterName_867dd2e0',
        chapterName__bougth: 'ChapterInfo_chapterName__bougth_4015ed41',
        finalReward__vehicleStyle: 'ChapterInfo_finalReward__vehicleStyle_9092be9e',
        finalReward__vehicle: 'ChapterInfo_finalReward__vehicle_8f1be3b9',
        finalReward__style: 'ChapterInfo_finalReward__style_71da8196',
        finalReward__tankman: 'ChapterInfo_finalReward__tankman_939c7d1e',
        finalReward__postProgression: 'ChapterInfo_finalReward__postProgression_42299b8a',
        buttonsGroup__vehicleStyle: 'ChapterInfo_buttonsGroup__vehicleStyle_32e73b60',
        buttonsGroup__vehicle: 'ChapterInfo_buttonsGroup__vehicle_19a07e37',
        buttonsGroup__style: 'ChapterInfo_buttonsGroup__style_99acb72a',
        buttonsGroup__tankman: 'ChapterInfo_buttonsGroup__tankman_939c7d1e',
        buttonsGroup__postProgression: 'ChapterInfo_buttonsGroup__postProgression_d83fdc7a',
        emblem: 'ChapterInfo_emblem_b1fd21e1',
        fadeInWithScale: 'ChapterInfo_fadeInWithScale_939c7d1e',
        slideUp: 'ChapterInfo_slideUp_939c7d1e',
        blink: 'ChapterInfo_blink_939c7d1e',
        scale: 'ChapterInfo_scale_939c7d1e',
        rotate: 'ChapterInfo_rotate_939c7d1e',
        windowIn: 'ChapterInfo_windowIn_939c7d1e',
        fadeOut: 'ChapterInfo_fadeOut_939c7d1e',
        fadeIn: 'ChapterInfo_fadeIn_939c7d1e',
    },
    Lu = ie.resolve('strings'),
    Du = n(function () {
        const { model: t } = kn(),
            s = t.computes.selectedChapter(),
            { chapterID: i, isBought: n, finalRewardType: o } = s,
            l = ce(
                { iconSize: mi, shieldSize: ri, containerSize: Qr },
                {
                    medium: { iconSize: pi, shieldSize: ii, containerSize: Jr },
                    large: { iconSize: bi, shieldSize: ni, containerSize: ei },
                    extraLarge: { iconSize: hi, shieldSize: oi, containerSize: ai },
                },
            ),
            c = j(
                Cn.length,
                Cn.map((e) => {
                    const { delay: a, diff: t, duration: s } = Object.values(e)[0];
                    return yn(a, t, s);
                }),
            ),
            d = Cn.reduce((e, a, t) => ((e[Object.keys(a)[0]] = c[t]), e), {});
        return e.jsxs('div', {
            className: Tu.base,
            children: [
                e.jsx(r.div, {
                    style: d.emblem,
                    children: e.jsx(xi, {
                        iconSize: l.iconSize,
                        shieldSize: l.shieldSize,
                        containerSize: l.containerSize,
                        bpPurchased: n,
                        chapterID: i,
                        className: Tu.emblem,
                    }),
                }),
                e.jsxs('div', {
                    className: Tu.info,
                    children: [
                        e.jsx(r.div, {
                            style: d.deadline,
                            children: e.jsx('div', { className: Tu.deadline, children: e.jsx(Q_, {}) }),
                        }),
                        e.jsx(r.div, {
                            style: d.chapterName,
                            children: e.jsx('div', {
                                className: a(Tu.chapterName, n && Tu.chapterName__bougth),
                                children: Lu.readOrEmpty(`battle_pass.chapter.fullName.c_${i}`),
                            }),
                        }),
                        e.jsx(r.div, {
                            style: d.finalReward,
                            children: e.jsx('div', {
                                className: a(Tu.finalReward, Tu[`finalReward__${o}`]),
                                children: e.jsx(Eu, {}),
                            }),
                        }),
                        e.jsx(r.div, {
                            style: d.buttonsGroup,
                            children: e.jsx('div', {
                                className: a(Tu.buttonsGroup, Tu[`buttonsGroup__${o}`]),
                                children: e.jsx(G_, {}),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Wu = 'FreeBpPoints_13635b90',
    Ou = 'FreeBpPoints_pointsBlock_de8d94dc',
    Mu = 'FreeBpPoints_points_cd1a8292',
    Vu = 'FreeBpPoints_icon_e6968e4a',
    zu = 'FreeBpPoints_text_74f25e3',
    Fu = ie.resolve('strings'),
    $u = n(function () {
        const { model: a } = kn(),
            { freePoints: t } = a.root.get(),
            s = xa({
                header: Fu.readOrEmpty('battle_pass.chapterChoice.freePoints.tooltip.header'),
                body: Fu.readOrEmpty('battle_pass.chapterChoice.freePoints.tooltip.body'),
            }),
            r = ce({ iconSize: '' }, { medium: { iconSize: '_medium' }, large: { iconSize: '_large' } });
        return e.jsxs('div', {
            className: Wu,
            ...s,
            children: [
                e.jsxs('div', {
                    className: Ou,
                    children: [
                        e.jsx('div', { className: Mu, children: e.jsx(Qa, { value: t }) }),
                        e.jsx(Ca, { className: Vu, path: `battlePass.chapter_choice.freePoints${r.iconSize}` }),
                    ],
                }),
                e.jsx('div', { className: zu, children: Fu.readOrEmpty('battle_pass.chapterChoice.freePoints.text') }),
            ],
        });
    }),
    Hu = 'App_772aceb',
    Uu = 'App_background_f46709aa',
    Gu = 'App_main_879c8615',
    qu = 'App_idle_e06fed7f',
    Xu = 'App_shadow_d2a46054',
    Zu = 'App_freeBpPoints_c3ec6dd0',
    Ku = 'App_chapterInfo_e8b5e743',
    Yu = 'App_cards_a8851e46',
    Qu = n(function () {
        const { model: a, controls: i } = kn(),
            { onViewLoaded: n } = i,
            o = a.computes.selectedChapter(),
            l = a.prevChapterIndex.get(),
            c = a.computes.sortedChapters().indexOf(o),
            [d, _] = t.useState(c),
            { chapterID: u } = o,
            [m, p] = t.useState(!1),
            b = Z();
        (J(E.ESCAPE, () => {
            b.goBack();
        }),
            t.useEffect(
                () =>
                    te(() => {
                        m || (n(), p(!0));
                    }),
                [m, n],
            ));
        const [h, f] = j(a.computes.backgrounds().length, (e) => ({
                x: 0,
                opacity: e === c ? 1 : 0,
                config: { duration: 400, easing: ge.easeOutQuint },
            })),
            g = 0.1 * viewEnv.getViewSizeRem().width,
            v = t.useCallback(
                (e, a) => {
                    (f.start((t) =>
                        t === e
                            ? {
                                  from: { x: a * g, opacity: 0, zIndex: 3 },
                                  to: { x: 0, opacity: 1, zIndex: 3 },
                                  reset: !0,
                              }
                            : {},
                    ),
                        _(e));
                },
                [f, g],
            );
        t.useEffect(() => {
            v(c, l < c ? 1 : -1);
        }, [l, c, v]);
        const [x] = s(() => yn(200, 60)),
            [w] = s(() => yn(300, 60)),
            [C] = s(() =>
                ((e = 0) => ({
                    from: { opacity: 0, transform: 'scale(1.1)' },
                    to: { opacity: 1, transform: 'scale(1)' },
                    config: { duration: 500, easing: ge.easeInOutCubic },
                    delay: e,
                }))(),
            );
        return e.jsx(e.Fragment, {
            children:
                m &&
                e.jsxs('div', {
                    className: Hu,
                    children: [
                        e.jsx(r.div, {
                            className: Uu,
                            style: C,
                            children: e.jsxs(e.Fragment, {
                                children: [
                                    h.map((a, t) =>
                                        e.jsx(En, { style: a, i: t, index: d, classNames: { idle: qu, main: Gu } }, t),
                                    ),
                                    e.jsx('div', { className: Xu }),
                                ],
                            }),
                        }),
                        a.root.get().freePoints > 0 &&
                            e.jsx(r.div, { className: Zu, style: w, children: e.jsx($u, {}) }),
                        e.jsx('div', { className: Ku, children: e.jsx(Du, {}) }, u),
                        e.jsx(r.div, { className: Yu, style: x, children: e.jsx(Ja, { children: e.jsx(F_, {}) }) }),
                    ],
                }),
        });
    }),
    Ju = () =>
        e.jsx(Nn, { options: { rootId: R.aliases.battle_pass.ChapterChoice('resId') }, children: e.jsx(Qu, {}) }),
    em = (e, a, t, s, r) => {
        const i = R.images.gui.maps.icons.battlePass.awards_widget;
        return r
            ? `url(${i.$dyn(`${e.toLowerCase()}_${a}${t}_${s}_${r}`)})`
            : `url(${i.$dyn(`${e.toLowerCase()}_${a}${t}_${s}`)})`;
    };
var am = ((e) => (
        (e.Award = 'Award'),
        (e.Ticket = 'Ticket'),
        (e.Coin = 'Coin'),
        (e.Taler = 'Taler'),
        (e.Collection = 'Collection'),
        (e.Commander = 'Commander'),
        e
    ))(am || {}),
    tm = ((e) => ((e.Small = 'small'), (e.Big = 'big'), e))(tm || {}),
    sm = ((e) => ((e.None = ''), (e.Small = 's'), (e.Medium = 'm'), e))(sm || {}),
    rm = ((e) => ((e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = ''), e))(rm || {}),
    im = ((e) => ((e.Hover = 'Hover'), (e.Disabled = 'Disabled'), (e.Triggered = 'Triggered'), (e.None = ''), e))(
        im || {},
    );
const nm = {
        root: 'Background_root_26effab7',
        base: 'Background_8e48022f',
        bg: 'Background_bg_fcef4881',
        bgDisabled: 'Background_bgDisabled_26effab7',
        bgHover: 'Background_bgHover_32967f75',
        base__big: 'Background_base__big_26effab7',
        base__hovered: 'Background_base__hovered_26effab7',
        fadeInWithScale: 'Background_fadeInWithScale_26effab7',
        slideUp: 'Background_slideUp_26effab7',
        blink: 'Background_blink_26effab7',
        scale: 'Background_scale_26effab7',
        rotate: 'Background_rotate_26effab7',
        windowIn: 'Background_windowIn_26effab7',
        fadeOut: 'Background_fadeOut_26effab7',
        fadeIn: 'Background_fadeIn_26effab7',
    },
    om = ({ size: t, isHover: s, disabled: r = !1, type: i = am.Coin }) => {
        const { breakpoint: n } = F(),
            o = n.weight >= $.medium.weight ? sm.Medium : sm.Small;
        return e.jsx('div', {
            className: a(nm.base, nm[`base__${t}`], nm[`base__${t}${i}`], s && nm.base__hovered),
            children: r
                ? e.jsx('div', {
                      className: nm.bgDisabled,
                      style: { backgroundImage: em(i, rm.Background, im.Disabled, t, o) },
                  })
                : e.jsxs(e.Fragment, {
                      children: [
                          e.jsx('div', {
                              className: nm.bg,
                              style: { backgroundImage: em(i, rm.Background, im.None, t, o) },
                          }),
                          e.jsx('div', {
                              className: nm.bgHover,
                              style: { backgroundImage: em(i, rm.Background, im.Hover, t, o) },
                          }),
                      ],
                  }),
        });
    },
    lm = {
        root: 'Border_root_b559a98b',
        base: 'Border_3359fba1',
        border: 'Border_b559a98b',
        borderHover: 'Border_borderHover_6143f6b7',
        base__hovered: 'Border_base__hovered_b559a98b',
        borderDisabled: 'Border_borderDisabled_6282d18a',
        borderDisabled__big: 'Border_borderDisabled__big_80fa355b',
        fadeInWithScale: 'Border_fadeInWithScale_b559a98b',
        slideUp: 'Border_slideUp_b559a98b',
        blink: 'Border_blink_b559a98b',
        scale: 'Border_scale_b559a98b',
        rotate: 'Border_rotate_b559a98b',
        windowIn: 'Border_windowIn_b559a98b',
        fadeOut: 'Border_fadeOut_b559a98b',
        fadeIn: 'Border_fadeIn_b559a98b',
    },
    cm = ({ size: t, isHover: s, highlighted: r = !1, disabled: i = !1, type: n = am.Coin }) => {
        const { breakpoint: o } = F(),
            l = o.weight >= $.medium.weight ? sm.Medium : sm.Small;
        return e.jsx('div', {
            className: a(lm.base, lm[`base__${t}`], s && lm.base__hovered),
            children: i
                ? e.jsx('div', {
                      className: a(lm.borderDisabled, lm[`borderDisabled__${t}`]),
                      style: { backgroundImage: em(n, rm.Border, im.Disabled, t, l) },
                  })
                : e.jsxs(e.Fragment, {
                      children: [
                          e.jsx('div', {
                              className: lm.border,
                              style: { backgroundImage: em(r ? am.Collection : n, rm.Border, im.None, t, l) },
                          }),
                          e.jsx('div', {
                              className: lm.borderHover,
                              style: { backgroundImage: em(n, rm.Border, im.Hover, t, l) },
                          }),
                      ],
                  }),
        });
    },
    dm = {
        root: 'CountValue_root_108ab14',
        base: 'CountValue_897d3748',
        base__big: 'CountValue_base__big_94594a84',
        fadeInWithScale: 'CountValue_fadeInWithScale_108ab14',
        slideUp: 'CountValue_slideUp_108ab14',
        blink: 'CountValue_blink_108ab14',
        scale: 'CountValue_scale_108ab14',
        rotate: 'CountValue_rotate_108ab14',
        windowIn: 'CountValue_windowIn_108ab14',
        fadeOut: 'CountValue_fadeOut_108ab14',
        fadeIn: 'CountValue_fadeIn_108ab14',
    },
    _m = ({ state: t, count: s, size: r, maxCount: i = 0 }) => {
        switch (t) {
            case mm.InProgress:
                return e.jsx(B, { text: `${s || 0} / ${i}` });
            case mm.Completed:
                return e.jsx('div', { className: a(dm.base, dm[`base__${r}`]) });
            default:
                return e.jsx(Qa, { format: 'integral', value: s });
        }
    },
    um = {
        root: 'Count_root_d63373f8',
        base: 'Count_1153e9f8',
        base__big: 'Count_base__big_4b990a50',
        base__locked: 'Count_base__locked_c07f63fe',
        base__disabled: 'Count_base__disabled_67818843',
        fadeInWithScale: 'Count_fadeInWithScale_d63373f8',
        slideUp: 'Count_slideUp_d63373f8',
        blink: 'Count_blink_d63373f8',
        scale: 'Count_scale_d63373f8',
        rotate: 'Count_rotate_d63373f8',
        windowIn: 'Count_windowIn_d63373f8',
        fadeOut: 'Count_fadeOut_d63373f8',
        fadeIn: 'Count_fadeIn_d63373f8',
    };
var mm = ((e) => ((e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed'), e))(mm || {});
const pm = ({ size: t, count: s, maxCount: r, state: i = '', isLocked: n = !1, disabled: o = !1 }) =>
        e.jsx('div', {
            className: a(um.base, um[`base__${t}`], n && um.base__locked, o && um.base__disabled),
            children: e.jsx(_m, { state: i, size: t, count: s, maxCount: r }),
        }),
    bm = {
        root: 'Icon_root_55a8ab20',
        base: 'Icon_891882bd',
        base__big: 'Icon_base__big_e04b5410',
        base__darkened: 'Icon_base__darkened_211e4f9f',
        base__hover: 'Icon_base__hover_ab1977b2',
        base__disabled: 'Icon_base__disabled_92482313',
        fadeInWithScale: 'Icon_fadeInWithScale_55a8ab20',
        slideUp: 'Icon_slideUp_55a8ab20',
        blink: 'Icon_blink_55a8ab20',
        scale: 'Icon_scale_55a8ab20',
        rotate: 'Icon_rotate_55a8ab20',
        windowIn: 'Icon_windowIn_55a8ab20',
        fadeOut: 'Icon_fadeOut_55a8ab20',
        fadeIn: 'Icon_fadeIn_55a8ab20',
    },
    hm = (e, a, t) => {
        switch (!0) {
            case t:
                return 'disabled';
            case e:
                return 'hover';
            case a:
                return 'darkened';
            default:
                return '';
        }
    },
    fm = ({ size: t, isHover: s, isDark: r = !0, disabled: i = !1, type: n }) => {
        const { breakpoint: o } = F(),
            l = o.weight >= $.medium.weight ? sm.Medium : sm.Small;
        return e.jsx('div', {
            className: a(bm.base, bm[`base__${t}`], bm[`base__${hm(s, r, i)}`]),
            style: { backgroundImage: em(n, rm.Icon, im.None, t, n === am.Collection ? sm.None : l) },
        });
    },
    gm = {
        root: 'Label_root_e3f8b3ce',
        base: 'Label_e1274655',
        base__big: 'Label_base__big_a8cc16a4',
        base__gold: 'Label_base__gold_6ef0fe9',
        base__hover: 'Label_base__hover_b5605ac8',
        base__disabled: 'Label_base__disabled_4a0c758c',
        fadeInWithScale: 'Label_fadeInWithScale_e3f8b3ce',
        slideUp: 'Label_slideUp_e3f8b3ce',
        blink: 'Label_blink_e3f8b3ce',
        scale: 'Label_scale_e3f8b3ce',
        rotate: 'Label_rotate_e3f8b3ce',
        windowIn: 'Label_windowIn_e3f8b3ce',
        fadeOut: 'Label_fadeOut_e3f8b3ce',
        fadeIn: 'Label_fadeIn_e3f8b3ce',
    },
    vm = (e, a) => {
        switch (!0) {
            case e:
                return 'disabled';
            case a:
                return 'hover';
            default:
                return '';
        }
    },
    xm = ({ size: t, title: s, isHover: r, disabled: i = !1, isGold: n = !1 }) =>
        e.jsx('div', {
            className: a(gm.base, gm[`base__${t}`], gm[`base__${vm(i, r)}`], n && gm.base__gold),
            children: s,
        }),
    wm = {
        root: 'ChoiceAward_root_3f034cd8',
        base: 'ChoiceAward_edd74108',
        base__big: 'ChoiceAward_base__big_ca77c409',
        base__disabled: 'ChoiceAward_base__disabled_991de9d',
        base__hasAppearAnimation: 'ChoiceAward_base__hasAppearAnimation_aeaea71d',
        baseAppear: 'ChoiceAward_baseAppear_3f034cd8',
        shine: 'ChoiceAward_shine_2a2a93bd',
        shine_small_s: 'ChoiceAward_shine_small_s_3f034cd8',
        shine_small_m: 'ChoiceAward_shine_small_m_3f034cd8',
        shine_big_s: 'ChoiceAward_shine_big_s_3f034cd8',
        shine_big_m: 'ChoiceAward_shine_big_m_3f034cd8',
        shine__left: 'ChoiceAward_shine__left_9adf4b0f',
        shine__right: 'ChoiceAward_shine__right_872a6406',
        arrow: 'ChoiceAward_arrow_e556b329',
        blinkShape: 'ChoiceAward_blinkShape_a5d55ba7',
        blink: 'ChoiceAward_blink_d3e21e1f',
        blinker: 'ChoiceAward_blinker_3f034cd8',
        fadeInWithScale: 'ChoiceAward_fadeInWithScale_3f034cd8',
        slideUp: 'ChoiceAward_slideUp_3f034cd8',
        scale: 'ChoiceAward_scale_3f034cd8',
        rotate: 'ChoiceAward_rotate_3f034cd8',
        windowIn: 'ChoiceAward_windowIn_3f034cd8',
        fadeOut: 'ChoiceAward_fadeOut_3f034cd8',
        fadeIn: 'ChoiceAward_fadeIn_3f034cd8',
    },
    Cm = R.strings.battle_pass.awardsWidget,
    ym = ({ count: s, disabled: r = !1, onClick: i, size: n }) => {
        const [o, l] = t.useState(!1),
            c = 1 === s ? Cm.title.awardSingle() : Cm.title.awardMultiple(),
            d = r ? Cm.description.awardDisabled() : Cm.description.award(),
            _ = t.useCallback(() => {
                r || (z.click(), i());
            }, [r, i]);
        return e.jsx(Ye, {
            body: d,
            isEnabled: Boolean(d),
            children: e.jsxs('div', {
                className: a(wm.base, wm[`base__${n}`], r ? wm.base__disabled : wm.base__hasAppearAnimation),
                onMouseEnter: () => {
                    (z.sound(R.sounds.bp_highlight_02()), l(!0));
                },
                onMouseLeave: () => {
                    l(!1);
                },
                onClick: _,
                children: [
                    e.jsx(cm, { size: n, isHover: o, type: am.Award, disabled: r }),
                    e.jsx(om, { size: n, isHover: o, type: am.Award, disabled: r }),
                    e.jsx(fm, { size: n, isHover: o, type: am.Award, disabled: r, isDark: !1 }),
                    e.jsx(pm, { size: n, count: s, disabled: r }),
                    e.jsx(xm, { size: n, isHover: o, title: c, disabled: r, isGold: !0 }),
                    !r &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx('div', { className: a(wm.shine, wm.shine__left) }),
                                e.jsx('div', { className: a(wm.shine, wm.shine__right) }),
                                e.jsx('div', { className: wm.arrow }),
                                e.jsx('div', {
                                    className: wm.blinkShape,
                                    children: e.jsx('div', { className: wm.blink }),
                                }),
                            ],
                        }),
                ],
            }),
        });
    },
    jm = {
        root: 'CoinAward_root_a9001336',
        base: 'CoinAward_f5a8f424',
        base__big: 'CoinAward_base__big_df55371',
        fadeInWithScale: 'CoinAward_fadeInWithScale_a9001336',
        slideUp: 'CoinAward_slideUp_a9001336',
        blink: 'CoinAward_blink_a9001336',
        scale: 'CoinAward_scale_a9001336',
        rotate: 'CoinAward_rotate_a9001336',
        windowIn: 'CoinAward_windowIn_a9001336',
        fadeOut: 'CoinAward_fadeOut_a9001336',
        fadeIn: 'CoinAward_fadeIn_a9001336',
    },
    Sm = R.strings.battle_pass.awardsWidget,
    Nm = ({ count: s, onClick: r, size: i }) => {
        const [n, o] = t.useState(!1);
        return e.jsx(Ye, {
            body: Sm.description.coin(),
            isEnabled: Boolean(Sm.description.coin()),
            children: e.jsxs('div', {
                className: a(jm.base, jm[`base__${i}`]),
                onMouseEnter: () => {
                    (z.sound(R.sounds.bp_highlight_02()), o(!0));
                },
                onMouseLeave: () => {
                    o(!1);
                },
                onClick: () => {
                    (z.click(), r());
                },
                children: [
                    e.jsx(cm, { size: i, isHover: n }),
                    e.jsx(om, { size: i, isHover: n }),
                    e.jsx(fm, { size: i, isHover: n, type: am.Coin }),
                    e.jsx(pm, { size: i, count: s }),
                    e.jsx(xm, { size: i, isHover: n, title: Sm.title.coin() }),
                ],
            }),
        });
    },
    km = {
        root: 'CollectionAward_root_4cd724f9',
        base: 'CollectionAward_7e81ced4',
        base__big: 'CollectionAward_base__big_e54e4774',
        bubble: 'CollectionAward_bubble_6b106ffd',
        fadeInWithScale: 'CollectionAward_fadeInWithScale_4cd724f9',
        slideUp: 'CollectionAward_slideUp_4cd724f9',
        blink: 'CollectionAward_blink_4cd724f9',
        scale: 'CollectionAward_scale_4cd724f9',
        rotate: 'CollectionAward_rotate_4cd724f9',
        windowIn: 'CollectionAward_windowIn_4cd724f9',
        fadeOut: 'CollectionAward_fadeOut_4cd724f9',
        fadeIn: 'CollectionAward_fadeIn_4cd724f9',
    },
    Im = R.strings.battle_pass.awardsWidget,
    Pm = ({ count: s, maxCount: r, newItemsCount: i, hasTrigger: n, size: o, onClick: l }) => {
        const [c, d] = t.useState(!1),
            _ = r === s,
            u = o === tm.Small && n,
            m = _ ? Im.description.collectionCompleted() : Im.description.collection(),
            p = Y(() => {
                (z.click(), l());
            });
        return e.jsx(Ye, {
            body: m,
            isEnabled: Boolean(m),
            children: e.jsxs('div', {
                className: a(km.base, km[`base__${o}`]),
                onMouseEnter: () => {
                    (z.sound(R.sounds.bp_highlight_02()), d(!0));
                },
                onMouseLeave: () => {
                    d(!1);
                },
                onClick: p,
                children: [
                    e.jsx(cm, { size: o, isHover: c, type: am.Coin, highlighted: u }),
                    e.jsx(om, { size: o, isHover: c }),
                    e.jsx(fm, { size: o, isHover: c, type: am.Collection }),
                    e.jsx(pm, { size: o, count: s, maxCount: r, state: _ ? mm.Completed : mm.InProgress }),
                    e.jsx(xm, { size: o, isHover: c, title: Im.title.collection() }),
                    i > 0 && e.jsx('div', { className: km.bubble, children: e.jsx(et, { size: 'small' }) }),
                ],
            }),
        });
    },
    Rm = {
        root: 'CommanderAward_root_9c46950e',
        base: 'CommanderAward_d7dc7d83',
        icon: 'CommanderAward_icon_f54191ae',
        base__hover: 'CommanderAward_base__hover_9c46950e',
        fadeInWithScale: 'CommanderAward_fadeInWithScale_9c46950e',
        slideUp: 'CommanderAward_slideUp_9c46950e',
        blink: 'CommanderAward_blink_9c46950e',
        scale: 'CommanderAward_scale_9c46950e',
        rotate: 'CommanderAward_rotate_9c46950e',
        windowIn: 'CommanderAward_windowIn_9c46950e',
        fadeOut: 'CommanderAward_fadeOut_9c46950e',
        fadeIn: 'CommanderAward_fadeIn_9c46950e',
    },
    Bm = R.strings.battle_pass.awardsWidget,
    Am = ({ onClick: s, size: r, tankmenScreenID: i }) => {
        const [n, o] = t.useState(!1),
            l = Bm.description.commander(),
            c =
                R.images.gui.maps.icons.battlePass.awards_widget.$dyn(`commander_icon_small_${i}`) ||
                R.images.gui.maps.icons.battlePass.awards_widget.commander_icon_small();
        return e.jsx(Ye, {
            body: l,
            isEnabled: Boolean(l),
            children: e.jsxs('div', {
                className: a(Rm.base, Rm[`base__${r}`], n && Rm.base__hover),
                onMouseEnter: () => {
                    (z.sound(R.sounds.bp_highlight_02()), o(!0));
                },
                onMouseLeave: () => o(!1),
                onClick: () => {
                    (z.click(), s());
                },
                children: [
                    e.jsx(cm, { size: r, isHover: n }),
                    e.jsx(om, { size: r, isHover: n }),
                    e.jsx(xm, { size: r, isHover: n, title: Bm.title.commander() }),
                    e.jsx('div', { className: Rm.icon, style: { backgroundImage: `url(${c})` } }),
                ],
            }),
        });
    },
    Em = {
        root: 'TalerAward_root_7a3c6bdb',
        base: 'TalerAward_c1966527',
        base__big: 'TalerAward_base__big_75f7f954',
        fadeInWithScale: 'TalerAward_fadeInWithScale_7a3c6bdb',
        slideUp: 'TalerAward_slideUp_7a3c6bdb',
        blink: 'TalerAward_blink_7a3c6bdb',
        scale: 'TalerAward_scale_7a3c6bdb',
        rotate: 'TalerAward_rotate_7a3c6bdb',
        windowIn: 'TalerAward_windowIn_7a3c6bdb',
        fadeOut: 'TalerAward_fadeOut_7a3c6bdb',
        fadeIn: 'TalerAward_fadeIn_7a3c6bdb',
    },
    Tm = R.strings.battle_pass.awardsWidget,
    Lm = ({ count: s, onClick: r, size: i }) => {
        const [n, o] = t.useState(!1);
        return e.jsx(Ye, {
            body: Tm.description.taler(),
            children: e.jsxs('div', {
                className: a(Em.base, Em[`base__${i}`], n && Em.base__hover),
                onMouseEnter: () => {
                    (z.sound(R.sounds.bp_highlight_02()), o(!0));
                },
                onMouseLeave: () => {
                    o(!1);
                },
                onClick: () => {
                    (z.click(), r());
                },
                children: [
                    e.jsx(cm, { size: i, isHover: n }),
                    e.jsx(om, { size: i, isHover: n }),
                    e.jsx(fm, { size: i, isHover: n, type: am.Taler }),
                    e.jsx(pm, { size: i, count: s }),
                    e.jsx(xm, { size: i, isHover: n, title: Tm.title.taler() }),
                ],
            }),
        });
    },
    Dm = {
        root: 'TicketAward_root_5b80ab82',
        base: 'TicketAward_af869a5b',
        base__big: 'TicketAward_base__big_6ea086b3',
        base__hasAppearAnimation: 'TicketAward_base__hasAppearAnimation_94749694',
        baseAppear: 'TicketAward_baseAppear_5b80ab82',
        shine: 'TicketAward_shine_7589460e',
        shine_small_s: 'TicketAward_shine_small_s_5b80ab82',
        shine_small_m: 'TicketAward_shine_small_m_5b80ab82',
        shine_big_s: 'TicketAward_shine_big_s_5b80ab82',
        shine_big_m: 'TicketAward_shine_big_m_5b80ab82',
        shine__left: 'TicketAward_shine__left_176547fa',
        shine__right: 'TicketAward_shine__right_d221ffc5',
        arrow: 'TicketAward_arrow_ae4102b5',
        blinkShape: 'TicketAward_blinkShape_4b394787',
        blink: 'TicketAward_blink_fde51f1e',
        blinker: 'TicketAward_blinker_5b80ab82',
        fadeInWithScale: 'TicketAward_fadeInWithScale_5b80ab82',
        slideUp: 'TicketAward_slideUp_5b80ab82',
        scale: 'TicketAward_scale_5b80ab82',
        rotate: 'TicketAward_rotate_5b80ab82',
        windowIn: 'TicketAward_windowIn_5b80ab82',
        fadeOut: 'TicketAward_fadeOut_5b80ab82',
        fadeIn: 'TicketAward_fadeIn_5b80ab82',
    },
    Wm = R.strings.battle_pass.awardsWidget,
    Om = ({ count: s, onClick: r, size: i }) => {
        const [n, o] = t.useState(!1),
            l = Boolean(s),
            c = l ? am.Ticket : void 0;
        return e.jsx(Ye, {
            body: Wm.description.ticket(),
            isEnabled: Boolean(Wm.description.ticket()),
            children: e.jsxs('div', {
                className: a(Dm.base, Dm[`base__${i}`], l && Dm.base__hasAppearAnimation),
                onMouseEnter: () => {
                    (z.sound(R.sounds.bp_highlight_02()), o(!0));
                },
                onMouseLeave: () => {
                    o(!1);
                },
                onClick: () => {
                    (z.click(), r());
                },
                children: [
                    e.jsx(cm, { size: i, isHover: n, type: c }),
                    e.jsx(om, { size: i, isHover: n, type: c }),
                    e.jsx(fm, { size: i, isHover: n, type: am.Ticket, isDark: !l }),
                    e.jsx(pm, { size: i, count: s }),
                    e.jsx(xm, { size: i, isHover: n, title: Wm.title.ticket(), isGold: l }),
                    l &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx('div', { className: a(Dm.shine, Dm.shine__left) }),
                                e.jsx('div', { className: a(Dm.shine, Dm.shine__right) }),
                                e.jsx('div', { className: Dm.arrow }),
                                e.jsx('div', {
                                    className: Dm.blinkShape,
                                    children: e.jsx('div', { className: Dm.blink }),
                                }),
                            ],
                        }),
                ],
            }),
        });
    },
    [Mm, Vm] = q()(
        ({ observableModel: e, externalModel: a }) => {
            const t = { root: e.object(), collectionEntryPoint: e.object('collectionEntryPoint') },
                s = i((e) => {
                    const {
                            talerCount: s,
                            notChosenRewardCount: r,
                            bpcoinCount: i,
                            ticketsCount: n,
                            isChooseRewardsEnabled: o,
                            tankmenScreenID: l,
                            isTalerEnabled: c,
                            isBpCoinEnabled: d,
                            isTicketsEnabled: _,
                        } = t.root.get(),
                        {
                            collectionItemCount: u,
                            newCollectionItemCount: m,
                            maxCollectionItemCount: p,
                            isFirstEnter: b,
                            isCollectionsEnabled: h,
                        } = t.collectionEntryPoint.get();
                    return [
                        {
                            type: am.Award,
                            props: {
                                size: e,
                                count: r,
                                disabled: !o,
                                onClick: a.createCallbackNoArgs('onTakeRewardsClick'),
                            },
                            condition: r > 0,
                        },
                        {
                            type: am.Ticket,
                            props: { size: e, count: n, onClick: a.createCallbackNoArgs('showTickets') },
                            condition: _,
                        },
                        {
                            type: am.Coin,
                            props: { size: e, count: i, onClick: a.createCallbackNoArgs('onBpcoinClick') },
                            condition: d,
                        },
                        {
                            type: am.Taler,
                            props: { size: e, count: s, onClick: a.createCallbackNoArgs('showTalers') },
                            condition: c,
                        },
                        {
                            type: am.Collection,
                            props: {
                                size: e,
                                count: u,
                                maxCount: p,
                                newItemsCount: m,
                                hasTrigger: b,
                                onClick: a.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                            },
                            condition: h,
                        },
                        {
                            type: am.Commander,
                            props: {
                                size: e,
                                count: 0,
                                tankmenScreenID: l,
                                onClick: a.createCallbackNoArgs('showTankmen'),
                            },
                            condition: 0 !== l,
                        },
                    ];
                });
            return { ...t, computes: { awardsList: s } };
        },
        ({ externalModel: e }) => ({
            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
            openGoodsForBpCoins: e.createCallbackNoArgs('onBpcoinClick'),
            openGoodsForBpTalers: e.createCallbackNoArgs('showTalers'),
            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
        }),
    ),
    zm = {
        root: 'AwardsWrapper_root_b50d5668',
        base: 'AwardsWrapper_f2595641',
        award: 'AwardsWrapper_award_cc628048',
        base__big: 'AwardsWrapper_base__big_b50d5668',
        fadeInWithScale: 'AwardsWrapper_fadeInWithScale_b50d5668',
        slideUp: 'AwardsWrapper_slideUp_b50d5668',
        blink: 'AwardsWrapper_blink_b50d5668',
        scale: 'AwardsWrapper_scale_b50d5668',
        rotate: 'AwardsWrapper_rotate_b50d5668',
        windowIn: 'AwardsWrapper_windowIn_b50d5668',
        fadeOut: 'AwardsWrapper_fadeOut_b50d5668',
        fadeIn: 'AwardsWrapper_fadeIn_b50d5668',
    },
    Fm = (a, t) => {
        switch (a) {
            case am.Award:
                return e.jsx(ym, { ...t });
            case am.Ticket:
                return e.jsx(Om, { ...t });
            case am.Coin:
                return e.jsx(Nm, { ...t });
            case am.Taler:
                return e.jsx(Lm, { ...t });
            case am.Collection:
                return e.jsx(Pm, { ...t });
            case am.Commander:
                return e.jsx(Am, { ...t });
            default:
                return (console.warn('Unknown award type: ', a), null);
        }
    },
    $m = n(({ size: t, classNames: s }) => {
        const { model: r } = Vm();
        return e.jsx('div', {
            className: a(zm.base, zm[`base__${t}`], null == s ? void 0 : s.base),
            children: ae(
                r.computes.awardsList(t),
                (t) =>
                    t.condition &&
                    e.jsx(
                        'div',
                        { className: a(zm.award, null == s ? void 0 : s.award), children: Fm(t.type, t.props) },
                        t.type,
                    ),
            ),
        });
    }),
    Hm = ({ rootId: a, size: t = tm.Small, context: s = 'model', classNames: r }) =>
        e.jsx(Mm, { options: { context: s, rootId: a }, children: e.jsx($m, { size: t, classNames: r }) }),
    [Um, Gm] = q()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), nowRewards: e.array('rewards.nowRewards.items') },
                t = i(() => a.nowRewards.get(), { equals: X });
            return { ...a, computes: { rewardList: t } };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
            showPreviewVehicle: e.createCallbackNoArgs('onPreviewVehicle'),
            showTankmen: e.createCallbackNoArgs('showTankmen'),
            showHangar: e.createCallbackNoArgs('showHangar'),
        }),
    ),
    qm = 'selectableRewardsState',
    Xm = 'finalState',
    Zm = 'FinalStateLabel_icon_2cf5ceb5',
    Km = 'FinalStateLabel_greenLight_7967eb2f',
    Ym = 'FinalStateLabel_text_f6f99450',
    Qm = () =>
        e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: Zm }),
                e.jsx('div', { className: Km }),
                e.jsx('div', { className: Ym, children: R.strings.battle_pass.holidayFinalScreen.finalState.label() }),
            ],
        }),
    Jm = {
        root: 'Final_root_a3c6efa6',
        base: 'Final_fe33f216',
        controls: 'Final_controls_ff63bbde',
        label: 'Final_label_d1e455c6',
        base__finalState: 'Final_base__finalState_a3c6efa6',
        text: 'Final_text_78e61012',
        icon: 'Final_icon_2e669607',
        greenLight: 'Final_greenLight_e3a16077',
        finalStateText: 'Final_finalStateText_d9b1929a',
        buttonWrapper: 'Final_buttonWrapper_a582995e',
        button: 'Final_button_dee53b83',
        fadeInWithScale: 'Final_fadeInWithScale_a3c6efa6',
        slideUp: 'Final_slideUp_a3c6efa6',
        blink: 'Final_blink_a3c6efa6',
        scale: 'Final_scale_a3c6efa6',
        rotate: 'Final_rotate_a3c6efa6',
        windowIn: 'Final_windowIn_a3c6efa6',
        fadeOut: 'Final_fadeOut_a3c6efa6',
        fadeIn: 'Final_fadeIn_a3c6efa6',
    },
    ep = R.strings.battle_pass.holidayFinalScreen,
    ap = n(() => {
        const { model: t, controls: s } = Gm(),
            { takeRewards: r, showHangar: i } = s,
            { state: n, finalRewardType: o } = t.root.get(),
            l = n === qm;
        return e.jsx('div', {
            className: a(Jm.base, Jm[`base__${n}`]),
            children: e.jsxs('div', {
                className: Jm.controls,
                children: [
                    e.jsx('div', {
                        className: Jm.label,
                        children: l
                            ? e.jsx('div', { className: Jm.text, children: ep.selectableRewardsState.label() })
                            : e.jsx(Qm, {}),
                    }),
                    e.jsx('div', {
                        className: Jm.buttonWrapper,
                        children: e.jsx(k, {
                            size: I.medium,
                            mixClass: Jm.button,
                            onClick: () => {
                                l ? r() : i();
                            },
                            children: (() => {
                                switch (n) {
                                    case qm:
                                        return ep.selectableRewardsState.button();
                                    case Xm:
                                        return o === qt.Vehicle
                                            ? ep.finalState.button.showVehicle()
                                            : ep.finalState.button.showHangar();
                                    default:
                                        return '';
                                }
                            })(),
                        }),
                    }),
                ],
            }),
        });
    }),
    tp = 'Divider_3683d6e2',
    sp = 'Divider_divider__right_24d5147b',
    rp = ({ isRight: t = !1 }) => e.jsx('div', { className: a(tp, t && sp) }),
    ip = 'Title_ec301c01',
    np = 'Title_text_65e6762b',
    op = ({ text: a }) =>
        e.jsxs('div', {
            className: ip,
            children: [e.jsx(rp, {}), e.jsx('div', { className: np, children: a }), e.jsx(rp, { isRight: !0 })],
        }),
    lp = {
        base: 'Purchase_78d7de59',
        content: 'Purchase_content_1a1b801',
        preview: 'Purchase_preview_a16bc569',
        shadow: 'Purchase_shadow_87ba71b',
        visibleRewards: 'Purchase_visibleRewards_8b26a786',
        title: 'Purchase_title_8d5affdf',
        description: 'Purchase_description_34691989',
        rewardButton: 'Purchase_rewardButton_bc4b54c4',
    },
    cp = R.strings.battle_pass.holidayFinalScreen.buyState,
    dp = (e) => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 400 + 100 * e,
        config: { duration: 400 },
        onStart: () => {
            z.sound(R.sounds.bp_reward());
        },
    }),
    _p = n(() => {
        const { model: a, controls: t } = Gm(),
            { chapterID: i, finalRewardType: n } = a.root.get(),
            { showPreviewVehicle: o } = t,
            l = Z(),
            c = a.computes.rewardList(),
            d = n === qt.Vehicle,
            {
                breakpoint: { weight: _ },
            } = F(),
            u = _ <= $.small.weight ? U.Small : U.Big,
            m = c.length > 9 ? [...at(c, 0, 9)] : c,
            p = s(dp(m.length)),
            b = c.length - m.length;
        return e.jsxs('div', {
            className: lp.base,
            children: [
                d && e.jsx('div', { className: lp.preview, children: e.jsx(tt, { type: 'preview', onClick: o }) }),
                e.jsxs('div', {
                    className: lp.content,
                    children: [
                        e.jsx('div', { className: lp.shadow }),
                        e.jsx('div', { className: lp.title, children: e.jsx(op, { text: cp.title() }) }),
                        e.jsx('div', { className: lp.description, children: cp.description() }),
                        e.jsx('div', {
                            className: lp.visibleRewards,
                            children: ae(m, (a, t) =>
                                e.jsx(
                                    ps,
                                    {
                                        animationConfig: dp(t),
                                        children: e.jsx(G, { ...Tt(a, u), className: lp.reward }),
                                    },
                                    `${a.item}_${t}`,
                                ),
                            ),
                        }),
                        b > 0 &&
                            e.jsx(r.div, {
                                style: p,
                                children: e.jsx(k, {
                                    type: P.ghost,
                                    size: I.medium,
                                    mixClass: lp.rewardButton,
                                    onClick: () => {
                                        l.push(xs.battlePass.buyPassRewards, { chapterID: i });
                                    },
                                    children: e.jsx(B, { text: cp.moreRewards(), binding: { count: b } }),
                                }),
                            }),
                    ],
                }),
            ],
        });
    }),
    up = 'Rewards_full_eea97d7',
    mp = { context: 'model.rewards' },
    pp = n(() => e.jsx(Or, { options: mp, children: e.jsx('div', { className: up, children: e.jsx(Zr, {}) }) })),
    bp = 'Tankmen_9641cad5',
    hp = 'Tankmen_image_208678b',
    fp = 'Tankmen_title_ebf30d50',
    gp = 'Tankmen_description_e7d7080c',
    vp = 'Tankmen_tankmenBtn_96878805',
    xp = 'Tankmen_button_e7e9840c',
    wp = 'Tankmen_blink_22bb5961',
    Cp = R.strings.battle_pass.holidayFinalScreen.tankmenState,
    yp = n(() => {
        const { controls: a } = Gm(),
            { showTankmen: t } = a;
        return e.jsxs('div', {
            className: bp,
            children: [
                e.jsx('div', { className: hp }),
                e.jsx('div', { className: fp, children: e.jsx(op, { text: Cp.title() }) }),
                e.jsx('div', { className: gp, children: Cp.description() }),
                e.jsx('div', {
                    className: vp,
                    children: e.jsxs(k, {
                        type: P.main,
                        size: I.medium,
                        mixClass: xp,
                        onClick: t,
                        children: [e.jsx('div', { className: wp }), Cp.tankmenButton()],
                    }),
                }),
            ],
        });
    }),
    jp = n(() => {
        const { model: a } = Gm(),
            { state: t } = a.root.get();
        switch (t) {
            case 'buyState':
                return e.jsx(_p, {});
            case 'rewardsState':
                return e.jsx(pp, {});
            case 'tankmenState':
                return e.jsx(yp, {});
            case qm:
            case Xm:
                return e.jsx(ap, {});
            default:
                return (console.warn('Unknown state ', t), null);
        }
    }),
    Sp = 'Footer_5f98e398',
    Np = 'Footer_light_2fc739c7',
    kp = 'Footer_buttonWrapper_fbd12995',
    Ip = 'Footer_button_9e4f9bc',
    Pp = 'Footer_blink_106ec98e',
    Rp = R.strings.battle_pass.holidayFinalScreen.buyState,
    Bp = n(() => {
        const { model: a } = Gm(),
            { isSeasonEndingSoon: t, chapterID: s } = a.root.get(),
            r = Z();
        return e.jsxs('div', {
            className: Sp,
            children: [
                e.jsx('div', { className: Np }),
                e.jsx('div', {
                    className: kp,
                    children: e.jsxs(k, {
                        type: P.main,
                        size: I.medium,
                        mixClass: Ip,
                        onClick: () => {
                            r.push(xs.battlePass.buyPass, { chapterID: s });
                        },
                        children: [t && e.jsx('div', { className: Pp }), Rp.buyButton()],
                    }),
                }),
            ],
        });
    }),
    Ap = 'Header_add5cf9d',
    Ep = 'Header_title_1435c6ee',
    Tp = 'Header_description_e959461d',
    Lp = ({ title: a, description: t }) =>
        e.jsxs('div', {
            className: Ap,
            children: [e.jsx('div', { className: Ep, children: a }), e.jsx('div', { className: Tp, children: t })],
        }),
    Dp = {
        root: 'App_root_0',
        base: 'App_ef84fef',
        base__rewardsState: 'App_base__rewardsState_a9a568ab',
        background: 'App_background_a2d1b7ea',
        base__tankmenState: 'App_base__tankmenState_0',
        additionalAnimation: 'App_additionalAnimation_eb290d79',
        fadeIn: 'App_fadeIn_0',
        header: 'App_header_4716088',
        awards: 'App_awards_2541e2b5',
        footer: 'App_footer_e521ba53',
        base__buyState: 'App_base__buyState_0',
        fadeInWithScale: 'App_fadeInWithScale_0',
        slideUp: 'App_slideUp_0',
        blink: 'App_blink_0',
        scale: 'App_scale_0',
        rotate: 'App_rotate_0',
        windowIn: 'App_windowIn_0',
        fadeOut: 'App_fadeOut_0',
    },
    Wp = R.strings.battle_pass,
    Op = n(() => {
        const [s, r] = t.useState(!1),
            { model: i } = Gm(),
            { state: n, chapterID: o } = i.root.get(),
            l = Z();
        return (
            t.useEffect(() => {
                (async () => {
                    (await Lt(), r(!0));
                })();
            }, []),
            J(E.ESCAPE, () => l.goBack()),
            e.jsxs('div', {
                className: a(Dp.base, Dp[`base__${n}`]),
                children: [
                    e.jsx('div', { className: Dp.background }),
                    s &&
                        e.jsxs('div', {
                            className: Dp.additionalAnimation,
                            children: [
                                e.jsxs('div', {
                                    className: Dp.header,
                                    children: [
                                        e.jsx(Lp, {
                                            title: e.jsx(B, {
                                                text: Wp.holidayFinalScreen.chapter(),
                                                binding: { chapterName: Wp.chapter.fullNameUppercased.$num(o) },
                                            }),
                                            description: Wp.holidayFinalScreen.completed(),
                                        }),
                                        e.jsx('div', {
                                            className: Dp.awards,
                                            children: e.jsx(Hm, {
                                                rootId: R.aliases.battle_pass.HolidayFinal('resId'),
                                                context: 'model.awardsWidget',
                                            }),
                                        }),
                                    ],
                                }),
                                e.jsx(jp, {}),
                                e.jsx('div', { className: Dp.footer, children: e.jsx(Bp, {}) }),
                            ],
                        }),
                ],
            })
        );
    }),
    Mp = () => e.jsx(Um, { options: { rootId: R.aliases.battle_pass.HolidayFinal('resId') }, children: e.jsx(Op, {}) }),
    Vp = 'DescriptioBlock_bef3efe1',
    zp = 'DescriptioBlock_icon_5296290c',
    Fp = 'DescriptioBlock_title_c66e1534',
    $p = 'DescriptioBlock_description_ec6501b9',
    Hp = ({ icon: a, title: s, descr: r }) => {
        const i = t.useCallback((e) => {
            e.stopPropagation();
        }, []);
        return e.jsxs('div', {
            className: Vp,
            onClick: i,
            children: [
                e.jsx('div', { className: Fp, children: s }),
                e.jsx('div', { className: zp, style: { backgroundImage: `url(${a})` } }),
                e.jsx('div', { className: $p, children: r && st(r) }),
            ],
        });
    },
    Up = {
        base: 'Slider_f5a1ddc7',
        base__carousel: 'Slider_base__carousel_42efb660',
        trackWrapper: 'Slider_trackWrapper_e314ef92',
        track: 'Slider_track_5f6048f2',
        base__withoutAnimation: 'Slider_base__withoutAnimation_263edf46',
        base__withoutPointer: 'Slider_base__withoutPointer_263edf46',
        slide: 'Slider_slide_250a7a05',
        slide__active: 'Slider_slide__active_c7030606',
        slide__carousel: 'Slider_slide__carousel_61dcf976',
        slide__beforeActive: 'Slider_slide__beforeActive_331e848',
        slide__afterActive: 'Slider_slide__afterActive_89b575bd',
        slide__beforeActiveLarge: 'Slider_slide__beforeActiveLarge_fc8e80ff',
        slide__afterActiveLarge: 'Slider_slide__afterActiveLarge_d0848dd6',
        slide__leftEdge: 'Slider_slide__leftEdge_47585811',
        slide__leftEdgeLarge: 'Slider_slide__leftEdgeLarge_772d676b',
        slide__rightEdge: 'Slider_slide__rightEdge_5689ef5c',
        slide__rightEdgeLarge: 'Slider_slide__rightEdgeLarge_f7c6104a',
        prev: 'Slider_prev_45e410ec',
        next: 'Slider_next_dd9252fc',
        prev__disabled: 'Slider_prev__disabled_263edf46',
        next__disabled: 'Slider_next__disabled_7ba1eeac',
        counter: 'Slider_counter_b981d50f',
        base__large: 'Slider_base__large_263edf46',
        counter__disabled: 'Slider_counter__disabled_eaaf3231',
        counterDivider: 'Slider_counterDivider_3d5ed95',
    },
    Gp = t.createContext({}),
    qp = t.memo(
        ({
            children: s,
            arrowsTopPosition: r,
            carouselMode: i,
            disabled: n,
            withCounter: o,
            onPrevSlide: l,
            onNextSlide: c,
        }) => {
            const d = t.useRef(null),
                { breakpoint: _ } = F(),
                u = _.weight < $.medium.weight,
                [m, p] = t.useState(s),
                [b, h] = t.useState(0),
                [f, g] = t.useState(0),
                [v, x] = t.useState(i ? 3 : 1),
                [w, C] = t.useState(!1),
                [y, j] = t.useState(!1),
                S = m.length,
                N = 1 === v && !i,
                k = v === S && !i,
                I = 1 !== S,
                P = t.useMemo(() => ({ isAnimationDisabled: w }), [w]),
                B = async () => {
                    var e;
                    if (d && d.current) {
                        (C(!0), await Lt());
                        const a = viewEnv.getScale();
                        (h(d.current.offsetWidth / a),
                            g(
                                (null == (e = d.current.querySelector(`.${Up.slide__active}`))
                                    ? void 0
                                    : e.offsetWidth) / a,
                            ),
                            setTimeout(() => {
                                C(!1);
                            }, 100));
                    }
                };
            (t.useEffect(() => {
                const e = [];
                (m.map((a) => {
                    const t = s.find((e) => (null == e ? void 0 : e.key) === (null == a ? void 0 : a.key));
                    t && e.push(t);
                }),
                    p(e));
            }, [s]),
                t.useEffect(() => {
                    if (i) {
                        const e = m.concat();
                        (e.unshift(...e.splice(-2, m.length)), p(e));
                    }
                }, []),
                t.useEffect(
                    () => (
                        B(),
                        window.addEventListener('resize', B),
                        () => {
                            window.removeEventListener('resize', B);
                        }
                    ),
                    [],
                ));
            const T = t.useCallback(async () => {
                    N ||
                        y ||
                        n ||
                        (i && j(!0),
                        await Lt(),
                        l && l(),
                        x(v - 1),
                        i &&
                            setTimeout(async () => {
                                C(!0);
                                const e = m.concat();
                                (e.unshift(e.pop()), p(e), x(v), await Lt(), C(!1), j(!1));
                            }, 600),
                        z.sound(R.sounds.play()),
                        z.sound(R.sounds.bp_glide_01()));
                }, [N, y, n, i, l, v, m]),
                L = t.useCallback(async () => {
                    k ||
                        y ||
                        n ||
                        (i && j(!0),
                        await Lt(),
                        c && c(),
                        x(v + 1),
                        i &&
                            setTimeout(async () => {
                                C(!0);
                                const e = m.concat();
                                (e.push(e.shift()), p(e), x(v), await Lt(), C(!1), j(!1));
                            }, 600),
                        z.sound(R.sounds.play()),
                        z.sound(R.sounds.bp_glide_01()));
                }, [k, y, n, i, c, v, m]),
                D = () => z.sound(R.sounds.highlight());
            (A(E.ARROW_LEFT, T), A(E.ARROW_RIGHT, L));
            const W = t.useMemo(() => (i ? { width: 'auto' } : { width: `${b}rem` }), [b, i]),
                O = t.useMemo(
                    () =>
                        i
                            ? { transform: `translateX(${-f * v + b / 2 + f / 2}rem)` }
                            : { transform: `translateX(-${b * (v - 1)}rem)` },
                    [b, f, v, i],
                ),
                M = t.useMemo(() => (r ? { top: r } : {}), [r]),
                V = a(
                    Up.base,
                    u && Up.base__large,
                    i && Up.base__carousel,
                    i && u && Up.base__carouselLarge,
                    w && Up.base__withoutAnimation,
                    y && Up.base__withoutPointer,
                ),
                H = a(Up.prev, N && Up.prev__disabled),
                U = a(Up.next, k && Up.next__disabled),
                G = a(Up.counter, !I && Up.counter__disabled);
            return e.jsxs('div', {
                className: V,
                children: [
                    I && e.jsx('div', { className: H, onClick: T, onMouseEnter: D, style: M }),
                    I && e.jsx('div', { className: U, onClick: L, onMouseEnter: D, style: M }),
                    o &&
                        e.jsxs('div', {
                            className: G,
                            children: [v, e.jsx('div', { className: Up.counterDivider, children: '/' }), S],
                        }),
                    e.jsx('div', {
                        className: Up.trackWrapper,
                        ref: d,
                        children: e.jsx('div', {
                            className: Up.track,
                            style: O,
                            children: m.map((t, s) => {
                                const r = s + 2 === v,
                                    n = s === v;
                                let o;
                                n ? (o = L) : r && (o = T);
                                let l = a(Up.slide, u && Up.slide__large, s + 1 === v && Up.slide__active);
                                return (
                                    i &&
                                        (l = a(
                                            Up.slide,
                                            Up.slide__carousel,
                                            u && Up.slide__large,
                                            s + 1 === v && Up.slide__active,
                                            r && Up.slide__beforeActive,
                                            r && u && Up.slide__beforeActiveLarge,
                                            n && Up.slide__afterActive,
                                            n && u && Up.slide__afterActiveLarge,
                                            s + 2 < v && Up.slide__leftEdge,
                                            s + 2 < v && u && Up.slide__leftEdgeLarge,
                                            s > v && Up.slide__rightEdge,
                                            s > v && u && Up.slide__rightEdgeLarge,
                                        )),
                                    e.jsx(
                                        'div',
                                        {
                                            className: l,
                                            style: W,
                                            onClick: o,
                                            children: e.jsx(Gp.Provider, { value: P, children: t }),
                                        },
                                        `slide-${s}`,
                                    )
                                );
                            }),
                        }),
                    }),
                ],
            });
        },
    ),
    Xp = 'Content_353e971e',
    Zp = 'Content_title_948554b1',
    Kp = 'Content_base__video_da09528a',
    Yp = 'Content_bg_3c3188a8',
    Qp = 'Content_shadow_7e9b4ef',
    Jp = 'Content_video_1cac105e',
    eb = 'Content_videoIcon_259c899',
    ab = 'Content_videoText_68f88905',
    tb = 'Content_b7b53602',
    sb = 'Content_base__high_da09528a',
    rb = 'Content_bottomContainer_c412d1e3',
    ib = 'Content_buttonWrapper_e641a202',
    nb = 'Content_close_5d9c81f7',
    ob = '220rem',
    lb = '300rem',
    cb = {
        [$.extraSmall.weight]: ob,
        [$.small.weight]: ob,
        [$.medium.weight]: '250rem',
        [$.large.weight]: lb,
        [$.extraLarge.weight]: lb,
    },
    db = ({
        title: s,
        about: r,
        buttonLabel: i,
        slides: n,
        onClose: o,
        onVideo: l,
        onViewLoaded: c,
        backgroundLink: d = '',
        isBlurred: _ = !1,
        classNames: u,
    }) => {
        const [m, p] = t.useState(!1),
            [b, h] = t.useState(!1),
            { breakpoint: f } = F(),
            g = cb[f.weight],
            v = f.height >= rt.Medium && f.weight <= it.Small,
            x = f.height <= rt.Small ? I.small : I.medium,
            w = a(Xp, v && sb, m && Kp);
        t.useEffect(
            () =>
                te(() => {
                    b || (c(), h(!0));
                }),
            [b, c],
        );
        const C = t.useCallback(() => {
            o();
        }, [o]);
        t.useEffect(() => {
            if (m)
                return K(() => {
                    (l(), p(!1));
                }, 1e3);
        }, [m, l]);
        return (
            nt(C),
            e.jsxs('div', {
                className: w,
                style: { backgroundImage: `url(${d})` },
                children: [
                    _ &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx('div', { className: Yp, style: { backgroundImage: `url(${d})` } }),
                                e.jsx('div', { className: a(Qp, null == u ? void 0 : u.shadow) }),
                            ],
                        }),
                    e.jsx('span', { className: Zp, children: s }),
                    e.jsxs('div', {
                        className: Jp,
                        onClick: () => {
                            (z.sound(R.sounds.play()), p(!0));
                        },
                        onMouseEnter: () => z.sound(R.sounds.play()),
                        children: [e.jsx('div', { className: eb }), e.jsx('div', { className: ab, children: r })],
                    }),
                    e.jsx('div', {
                        className: tb,
                        children: e.jsx(qp, {
                            arrowsTopPosition: g,
                            withCounter: !0,
                            children: n.map(
                                ({ value: a }, t) =>
                                    a && e.jsx(Hp, { icon: a.icon, title: a.title, descr: a.description }, t),
                            ),
                        }),
                    }),
                    e.jsx('div', {
                        className: rb,
                        children: e.jsx('div', {
                            className: ib,
                            children: e.jsx(k, { type: P.primary, size: x, mixClass: nb, onClick: C, children: i }),
                        }),
                    }),
                ],
            })
        );
    },
    [_b, ub] = q()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), slides: e.array('slides') },
                t = i(() => ae(a.slides.get(), (e, a) => ({ id: a, value: e })), { equals: X });
            return { ...a, computes: { getSlides: t } };
        },
        ({ externalModel: e }) => ({
            confirm: e.createCallbackNoArgs('onClose'),
            onVideo: e.createCallbackNoArgs('onVideo'),
            onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
        }),
    ),
    mb = n(() => {
        const a = Z(),
            { model: t, controls: s } = ub(),
            { title: r, about: i, buttonLabel: n, background: o } = t.root.get(),
            l = t.computes.getSlides(),
            c = o || 'R.images.gui.maps.icons.battlePass.backgrounds.common',
            d = () => {
                (s.confirm(), a.push(xs.battlePass.chapterChoice));
            };
        return (
            J(E.ESCAPE, () => d()),
            e.jsx(db, {
                title: r,
                about: i,
                buttonLabel: n,
                slides: l,
                onClose: d,
                onVideo: s.onVideo,
                onViewLoaded: s.onViewLoaded,
                backgroundLink: c,
                isBlurred: !0,
            })
        );
    }),
    pb = () => e.jsx(_b, { options: { rootId: R.aliases.battle_pass.Intro('resId') }, children: e.jsx(mb, {}) }),
    bb = 1e3,
    hb = {
        ...L,
        withStack: !0,
        type: T.Simple,
        delta: { duration: 500, delay: 300 },
        line: { duration: 500, delay: 300 },
    },
    fb = {
        ...W,
        line: { ...W.line, bgColorFinished: '#000000' },
        pattern: { ...W.pattern, bgImageFinished: W.bgImageBase },
    };
var gb = ((e) => (
    (e.FillProgressMax = 'fillProgressMax'),
    (e.RunCycle = 'runCycle'),
    (e.ResetProgress = 'resetProgress'),
    (e.RefillProgress = 'refillProgress'),
    (e.Idle = 'idle'),
    e
))(gb || {});
const vb = {
    fillProgressMax: { nextStep: 'runCycle', delay: bb },
    runCycle: { nextStep: 'resetProgress', delay: 2200 },
    resetProgress: { nextStep: 'refillProgress', delay: bb },
    refillProgress: { nextStep: 'idle', delay: bb },
};
var xb = ((e) => ((e.COMPLETED = 'completed'), (e.IN_PROGRESS = 'inProgress'), (e.NOT_STARTED = 'notStarted'), e))(
        xb || {},
    ),
    wb = ((e) => (
        (e.NotAvailable = 'notAvailable'),
        (e.PurchasingIP = 'purchasingIP'),
        (e.ExtraChapter = 'extraChapter'),
        e
    ))(wb || {}),
    Cb = ((e) => ((e.left = 'left'), (e.right = 'right'), e))(Cb || {}),
    yb = ((e) => (
        (e[(e.Active = 0)] = 'Active'),
        (e[(e.Paused = 1)] = 'Paused'),
        (e[(e.Completed = 2)] = 'Completed'),
        (e[(e.NotStarted = 3)] = 'NotStarted'),
        e
    ))(yb || {}),
    jb = ((e) => (
        (e[(e.Locked = 0)] = 'Locked'),
        (e[(e.Unlocked = 1)] = 'Unlocked'),
        (e[(e.Paused = 2)] = 'Paused'),
        e
    ))(jb || {});
const Sb = {
        '--small-card-width': '140rem',
        '--small-current-card-width': '224rem',
        '--medium-card-width': '220rem',
        '--medium-current-card-width': '340rem',
        '--extra-large-card-width': '276rem',
    },
    Nb = (e, a = !1) =>
        a ? (e < $.medium.weight ? 224 : 340) : e < $.medium.weight ? 140 : e < $.extraLarge.weight ? 220 : 276,
    [kb, Ib] = q()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    levels: e.array('levels'),
                    chapters: e.array('chapters'),
                    animationStep: o.box(gb.Idle),
                },
                t = i((e) => {
                    const t = a.levels.get(),
                        s = ot(t, e - 1);
                    s || console.warn(`level info not found for number: ${e}`);
                    const r = t.length;
                    return { ...s, maxLevel: r, isFirstLevel: 1 === e, isLastLevel: e === r };
                }),
                s = i((e) => {
                    const a = t(e);
                    return ae(a.rewards, (e) => ({ ...e }));
                }),
                r = i((e) => {
                    const {
                            currentLevel: s,
                            currentLevelPoints: r,
                            previousLevel: i,
                            postProgressionStatus: n,
                        } = a.root.get(),
                        o = a.animationStep.get();
                    if ([gb.FillProgressMax, gb.RunCycle].includes(o)) return e === i ? xb.IN_PROGRESS : xb.COMPLETED;
                    const { levelPoints: l, maxLevel: c } = t(e);
                    return e < s || (s === c && r === l * c)
                        ? xb.COMPLETED
                        : e === s && (n !== jb.Locked || r > 0)
                          ? xb.IN_PROGRESS
                          : xb.NOT_STARTED;
                }),
                n = i((e) => {
                    const { postProgressionStatus: t } = a.root.get(),
                        s = r(e);
                    return { cardStatus: s, isDisabled: t !== jb.Unlocked && s === xb.NOT_STARTED };
                }),
                l = i(
                    () =>
                        _()
                            ? m().length && p() && b()
                                ? wb.ExtraChapter
                                : u()
                                  ? wb.PurchasingIP
                                  : void 0
                            : wb.NotAvailable,
                    { equals: X },
                ),
                c = i(() => oe(a.chapters.get(), (e) => e.isRegular), { equals: X }),
                d = i(() => oe(a.chapters.get(), (e) => e.isRegular && e.chapterStatus === yb.Completed).length, {
                    equals: X,
                }),
                _ = i(() => d() === c().length),
                u = i(() => ve(a.chapters.get(), (e) => !e.isBattlePassPurchased)),
                m = i(() => oe(a.chapters.get(), (e) => !e.isRegular)),
                p = i(() => ve(m(), (e) => e.chapterStatus !== yb.Active)),
                b = i(() => ve(m(), (e) => e.chapterStatus !== yb.Completed)),
                h = i(() => {
                    const { currentLevel: e, currentLevelPoints: t } = a.root.get(),
                        s = e - 1;
                    return ye(a.levels.get(), (e, { levelPoints: a }, r) => (r < s ? e + a : r === s ? e + t : e), 0);
                }),
                f = i(() => ye(a.levels.get(), (e, { levelPoints: a }) => e + a, 0)),
                g = i(() => {
                    const {
                        currentLevel: e,
                        currentLevelPoints: t,
                        previousLevel: s,
                        previousLevelPoints: r,
                    } = a.root.get();
                    return e !== s || t !== r;
                }),
                v = i(() => {
                    const { cyclesCompletedCount: e, previousCyclesCompletedCount: t } = a.root.get();
                    return e > t;
                }),
                x = i((e) => {
                    const {
                            currentLevel: s,
                            currentLevelPoints: r,
                            previousLevel: i,
                            previousLevelPoints: n,
                            postProgressionStatus: o,
                        } = a.root.get(),
                        l = a.animationStep.get(),
                        { levelPoints: c, maxLevel: d } = t(s),
                        { levelPoints: _ } = t(i),
                        u = v(),
                        m = o !== jb.Locked,
                        [p = 0, b = 0] = ((e, a) => {
                            const t = Nb(e),
                                s = Nb(e, a);
                            return [t, a ? s : t];
                        })(e, m),
                        h = p * (d - 1) + b,
                        f = (
                            (e, a) =>
                            (t, s, r, i = !1) =>
                                e * (t - 1) + ((i ? e : a) / r) * s
                        )(p, b),
                        g = !u && i < s;
                    return {
                        progressValue: [gb.FillProgressMax, gb.RunCycle].includes(l) ? h : f(s, r, c),
                        previousProgressValue: l === gb.ResetProgress ? 0 : f(i, n, _, g),
                        maxProgressValue: h,
                    };
                }),
                w = i(() => {
                    const e = oe(
                        m(),
                        (e) =>
                            (e.chapterStatus === yb.Active || e.chapterStatus === yb.Completed) &&
                            !e.isBattlePassPurchased,
                    );
                    return e.length > 0 ? e : oe(a.chapters.get(), (e) => !e.isBattlePassPurchased);
                });
            return {
                ...a,
                computes: {
                    footerState: l,
                    regularChapters: c,
                    completedRegularChaptersCount: d,
                    extraChapters: m,
                    cardStates: n,
                    levelInfo: t,
                    levelRewards: s,
                    currentPointsInChapter: h,
                    totalPointsInChapter: f,
                    progressChanged: g,
                    cycleChanged: v,
                    getProgressValues: x,
                    chaptersForPurchase: w,
                },
            };
        },
        ({ model: e, externalModel: a }) => ({
            openPointsInfo: a.createCallbackNoArgs('onOpenPointsInfo'),
            openInfoPage: a.createCallbackNoArgs('onOpenInfoPage'),
            setAnimationStep: l((a) => e.animationStep.set(a)),
            handleProgressAchieved: a.createCallbackNoArgs('onProgressAchieved'),
            handleCycleCompleted: a.createCallbackNoArgs('onCycleCompleted'),
        }),
    ),
    Pb = 'Highlight_ec6e9d0b',
    Rb = 'Highlight_inner_fc05a4f9',
    Bb = 'Highlight_side_ffdc7ad0',
    Ab = 'Highlight_side__left_48f019cc',
    Eb = 'Highlight_side__right_7a86ef2a',
    Tb = t.memo(() =>
        e.jsxs('div', {
            className: Pb,
            children: [
                e.jsx('div', { className: a(Bb, Ab) }),
                e.jsx('div', { className: Rb }),
                e.jsx('div', { className: a(Bb, Eb) }),
            ],
        }),
    ),
    Lb = 'Background_3985f66b',
    Db = 'Background_default_7c7472e5',
    Wb = 'Background_base__first_26effab7',
    Ob = 'Background_base__last_26effab7',
    Mb = 'Background_disabled_536defa9',
    Vb = n(({ level: t }) => {
        const { model: s } = Ib(),
            { isFirstLevel: r, isLastLevel: i } = s.computes.levelInfo(t),
            { cardStatus: n, isDisabled: o } = s.computes.cardStates(t);
        return e.jsxs('div', {
            className: a(Lb, r && Wb, i && Ob),
            children: [
                e.jsx('div', { className: Db }),
                o && e.jsx('div', { className: Mb }),
                n === xb.IN_PROGRESS && e.jsx(Tb, {}),
            ],
        });
    }),
    zb = {
        root: 'CardRewards_root_35611a2f',
        base: 'CardRewards_178a6e14',
        base__completed: 'CardRewards_base__completed_434ea7b1',
        rewards: 'CardRewards_rewards_db8e5858',
        rewards__2: 'CardRewards_rewards__2_32a806d4',
        base__inProgress: 'CardRewards_base__inProgress_35611a2f',
        rewards__3: 'CardRewards_rewards__3_6ac4c499',
        reward: 'CardRewards_reward_8562c98f',
        rewards__1: 'CardRewards_rewards__1_35611a2f',
        fadeInWithScale: 'CardRewards_fadeInWithScale_35611a2f',
        slideUp: 'CardRewards_slideUp_35611a2f',
        blink: 'CardRewards_blink_35611a2f',
        scale: 'CardRewards_scale_35611a2f',
        rotate: 'CardRewards_rotate_35611a2f',
        windowIn: 'CardRewards_windowIn_35611a2f',
        fadeOut: 'CardRewards_fadeOut_35611a2f',
        fadeIn: 'CardRewards_fadeIn_35611a2f',
    },
    Fb = i((e) => {
        const { item: a, name: t, value: s, overlayType: r, tooltipId: i, tooltipContentId: n } = e;
        return {
            name: a || t,
            smallImage: dt(e, U.Big),
            bigImage: dt(e, U.S180x135),
            special: r,
            value: s,
            valueType: ct(t),
            tooltipArgs: lt({ tooltipId: i }, Number(n), { ignoreShowDelay: !0 }),
        };
    }),
    $b = n(({ level: t, className: s }) => {
        const { model: r } = Ib(),
            i = r.computes.levelRewards(t),
            { cardStatus: n } = r.computes.cardStates(t),
            {
                breakpoint: { weight: o },
            } = F(),
            l = o < $.medium.weight,
            c = 1 === i.length,
            d = ((e, a) => (a ? (e ? U.Big : U.S180x135) : e ? U.Small : U.Big))(l, c),
            _ = (e) => (l || !c ? e.smallImage : e.bigImage);
        return e.jsx('div', {
            className: a(zb.base, zb[`base__${n}`], s),
            children: e.jsx('div', {
                className: a(zb.rewards, zb[`rewards__${i.length}`]),
                children: ae(i, (t, s) => {
                    const r = Fb(t);
                    return e.jsx(
                        'div',
                        { className: a(zb.reward), children: e.jsx(G, { size: d, image: _(r), ...r }) },
                        `reward__${r.name}${s}`,
                    );
                }),
            }),
        });
    }),
    Hb = {
        root: 'Divider_root_76b1f722',
        base: 'Divider_e7aefb14',
        base__left: 'Divider_base__left_c4dc4b02',
        base__right: 'Divider_base__right_5c287de9',
        inner: 'Divider_inner_5e9c8eab',
        fadeInWithScale: 'Divider_fadeInWithScale_76b1f722',
        slideUp: 'Divider_slideUp_76b1f722',
        blink: 'Divider_blink_76b1f722',
        scale: 'Divider_scale_76b1f722',
        rotate: 'Divider_rotate_76b1f722',
        windowIn: 'Divider_windowIn_76b1f722',
        fadeOut: 'Divider_fadeOut_76b1f722',
        fadeIn: 'Divider_fadeIn_76b1f722',
    },
    Ub = ({ position: t }) =>
        e.jsx('div', { className: a(Hb.base, Hb[`base__${t}`]), children: e.jsx('div', { className: Hb.inner }) }),
    Gb = {
        root: 'Stage_root_68142ff2',
        base: 'Stage_2019a8bb',
        number: 'Stage_number_1d4a1a4c',
        animatedNumber: 'Stage_animatedNumber_3b1e34e9',
        numberInProgress: 'Stage_numberInProgress_9fdc0826',
        title: 'Stage_title_29b5b4ba',
        glow: 'Stage_glow_cc25be2a',
        base__inProgress: 'Stage_base__inProgress_68142ff2',
        animatedGlow: 'Stage_animatedGlow_a126942e',
        fadeInWithScale: 'Stage_fadeInWithScale_68142ff2',
        slideUp: 'Stage_slideUp_68142ff2',
        blink: 'Stage_blink_68142ff2',
        scale: 'Stage_scale_68142ff2',
        rotate: 'Stage_rotate_68142ff2',
        windowIn: 'Stage_windowIn_68142ff2',
        fadeOut: 'Stage_fadeOut_68142ff2',
        fadeIn: 'Stage_fadeIn_68142ff2',
    },
    qb = n(({ level: i, className: n }) => {
        const { model: o } = Ib(),
            { postProgressionStatus: l } = o.root.get(),
            { cardStatus: c } = o.computes.cardStates(i),
            [d, _] = t.useState(!1),
            u = c === xb.IN_PROGRESS,
            m = l === jb.Unlocked,
            { stageOpacity: p } = s({
                from: { stageOpacity: d ? 1 : 0 },
                to: { stageOpacity: 0 },
                delay: 0,
                onStart: () => z.sound(R.sounds.bp_current_phase()),
                config: { duration: 750, easing: Wt },
            }),
            { sparkOpacity: b } = s({
                from: { sparkOpacity: d ? 0.7 : 0 },
                to: { sparkOpacity: 0 },
                delay: 1100,
                onRest: () => _(!1),
                config: { duration: 300, easing: Wt },
            });
        return (
            t.useEffect(() => {
                if (u)
                    return K(() => {
                        _(!0);
                    }, 100);
            }, [u]),
            e.jsx('div', {
                className: a(Gb.base, Gb[`base__${c}`], n),
                children: u
                    ? e.jsxs(e.Fragment, {
                          children: [
                              m &&
                                  e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsx('div', { className: Gb.glow }),
                                          e.jsx(r.div, { style: { opacity: b }, className: Gb.animatedGlow }),
                                      ],
                                  }),
                              e.jsxs('div', {
                                  className: Gb.numberInProgress,
                                  children: [
                                      i,
                                      e.jsx(r.div, {
                                          style: {
                                              opacity: p,
                                              transform: p
                                                  .to([0, 1], [2.5, 1])
                                                  .to((e) => `translate(-50%, -50%) scale(${e})`),
                                          },
                                          className: Gb.animatedNumber,
                                          children: i,
                                      }),
                                  ],
                              }),
                              e.jsx('div', {
                                  className: Gb.title,
                                  children: R.strings.battle_pass.postProgressionView.progression.currentStep(),
                              }),
                          ],
                      })
                    : e.jsx('div', { className: Gb.number, children: i }),
            })
        );
    }),
    Xb = {
        base__showAnimation: 'CompletedStatus_base__showAnimation_8334d234',
        base__hideAnimation: 'CompletedStatus_base__hideAnimation_5e0caacf',
        icon: 'CompletedStatus_icon_6277c5c1',
        iconGlow: 'CompletedStatus_iconGlow_2dfae495',
    },
    Zb = ({ shouldAppear: t }) =>
        e.jsxs('div', {
            className: a(Xb.base, t ? Xb.base__showAnimation : Xb.base__hideAnimation),
            children: [
                e.jsx('div', { className: Xb.iconGlow }),
                e.jsx(Ye, {
                    body: R.strings.battle_pass.tooltips.completed.got(),
                    children: e.jsx('div', { className: Xb.icon }),
                }),
            ],
        }),
    Kb = {
        base: 'CurrentPoints_4c27ce16',
        base__appear: 'CurrentPoints_base__appear_2cb3686f',
        base__disappear: 'CurrentPoints_base__disappear_e11174fb',
        value__current: 'CurrentPoints_value__current_9c51dee4',
        value__total: 'CurrentPoints_value__total_99fac246',
        divider: 'CurrentPoints_divider_83c77e4c',
        icon: 'CurrentPoints_icon_6b371e14',
    },
    Yb = n(({ totalLevelPoints: t, shouldAppear: s, shouldDisappear: r, className: i }) => {
        const { model: n } = Ib(),
            { currentLevelPoints: o, previousLevelPoints: l } = n.root.get();
        return e.jsx(_t, {
            ignoreShowDelay: !0,
            contentId: R.views.mono.battle_pass.tooltips.bp_points('resId'),
            children: e.jsxs('div', {
                className: a(Kb.base, s && Kb.base__appear, r && Kb.base__disappear, i),
                children: [
                    e.jsx('div', { className: a(Kb.value, Kb.value__current), children: r ? l : o }),
                    e.jsx('div', { className: Kb.divider, children: '/' }),
                    e.jsx('div', { className: a(Kb.value, Kb.value__total), children: t }),
                    e.jsx('div', { className: Kb.icon }),
                ],
            }),
        });
    }),
    Qb = 'Status_41b476d1',
    Jb = 'Status_pointsWrapper_6042cf48',
    eh = n(({ level: s, className: r }) => {
        const { model: i } = Ib(),
            { cardStatus: n, isDisabled: o } = i.computes.cardStates(s),
            { levelPoints: l } = i.computes.levelInfo(s),
            c = i.animationStep.get(),
            d = [gb.FillProgressMax, gb.RunCycle].includes(c),
            _ = c === gb.ResetProgress,
            u = n === xb.COMPLETED && !o,
            m = n === xb.IN_PROGRESS,
            [p, b] = t.useState(u);
        return (
            t.useEffect(() => {
                if (c === gb.RunCycle) return void b(!1);
                const e = c === gb.FillProgressMax,
                    a = c === gb.ResetProgress;
                return p
                    ? void 0
                    : K(
                          () => {
                              b(!!e || u);
                          },
                          (a ? 500 : 0) + 100 * s,
                      );
            }, [c, p, u, s]),
            e.jsxs('div', {
                className: a(Qb, r),
                children: [
                    u && p && e.jsx(Zb, { shouldAppear: p }),
                    m && e.jsx(Yb, { className: Jb, totalLevelPoints: l, shouldAppear: _, shouldDisappear: d }),
                ],
            })
        );
    }),
    ah = {
        root: 'Card_root_f4c22d1c',
        base: 'Card_1d966e2a',
        base__inProgress: 'Card_base__inProgress_b07d56b3',
        stage: 'Card_stage_1d11f254',
        rewards: 'Card_rewards_aba92251',
        status: 'Card_status_f3176857',
        points: 'Card_points_a0ccfd85',
        points__initial: 'Card_points__initial_86462962',
        progressShadow: 'Card_progressShadow_e0bd1d',
        fadeInWithScale: 'Card_fadeInWithScale_f4c22d1c',
        slideUp: 'Card_slideUp_f4c22d1c',
        blink: 'Card_blink_f4c22d1c',
        scale: 'Card_scale_f4c22d1c',
        rotate: 'Card_rotate_f4c22d1c',
        windowIn: 'Card_windowIn_f4c22d1c',
        fadeOut: 'Card_fadeOut_f4c22d1c',
        fadeIn: 'Card_fadeIn_f4c22d1c',
    },
    th = n(({ level: t }) => {
        const { model: s } = Ib(),
            { levelPoints: r, isFirstLevel: i, isLastLevel: n } = s.computes.levelInfo(t),
            { cardStatus: o } = s.computes.cardStates(t),
            l = !i && o === xb.IN_PROGRESS,
            c = !n && s.computes.cardStates(t + 1).cardStatus !== xb.IN_PROGRESS;
        return e.jsxs('div', {
            className: a(ah.base, ah[`base__${o}`]),
            style: Sb,
            children: [
                e.jsx(Vb, { level: t }),
                e.jsx(qb, { className: ah.stage, level: t }),
                e.jsx($b, { className: ah.rewards, level: t }),
                e.jsx(eh, { className: ah.status, level: t }),
                e.jsx('div', { className: ah.points, children: t * r }),
                i && e.jsx('div', { className: a(ah.points, ah.points__initial), children: 0 }),
                l && e.jsx(Ub, { position: Cb.left }),
                c && e.jsx(Ub, { position: Cb.right }),
            ],
        });
    }),
    sh = 'Cards_afe60a85',
    rh = n(() => {
        const { model: a } = Ib(),
            t = a.levels.get(),
            { chapterID: s } = a.root.get();
        return e.jsx('div', {
            className: sh,
            children: ae(t, ({ level: a }, t) => e.jsx(th, { level: a }, `${s}_${t}`)),
        });
    }),
    ih = 'ExtraChapter_51af81b2',
    nh = 'ExtraChapter_wrapper_1111764a',
    oh = 'ExtraChapter_border_1fc38ae',
    lh = 'ExtraChapter_base__hover_d6a2f84c',
    ch = 'ExtraChapter_bg_6bfbbfc5',
    dh = 'ExtraChapter_widget_ba8b2337',
    _h = 'ExtraChapter_title_4965d60',
    uh = 'ExtraChapter_description_1a9020c',
    mh = 'ExtraChapter_content_7e770f3c',
    ph = R.strings.battle_pass.postProgressionView.footer.extraChapter,
    bh = n(() => {
        var s;
        const { model: r } = Ib(),
            i = null == (s = r.computes.extraChapters()[0]) ? void 0 : s.chapterID,
            [n, o] = t.useState(!1),
            l = Z();
        return i
            ? e.jsxs('div', {
                  className: a(ih, n && lh),
                  onMouseOver: (e) => {
                      (e.stopPropagation(), o(!0), z.sound(R.sounds.highlight()));
                  },
                  onMouseOut: () => {
                      o(!1);
                  },
                  onClick: () => {
                      (l.push(xs.battlePass.progression, { chapterID: i }), z.sound(R.sounds.play()));
                  },
                  children: [
                      e.jsxs('div', {
                          className: nh,
                          children: [
                              e.jsx('div', { className: ch }),
                              e.jsxs('div', {
                                  className: mh,
                                  children: [
                                      e.jsx('div', { className: _h, children: ph.title.text() }),
                                      e.jsx('div', { className: uh, children: ph.description.text() }),
                                  ],
                              }),
                          ],
                      }),
                      e.jsx('div', { className: dh }),
                      e.jsx('div', { className: oh }),
                  ],
              })
            : null;
    }),
    hh = 'NotAvailable_e1e3731d',
    fh = 'NotAvailable_background_a3edbc06',
    gh = 'NotAvailable_content_94110074',
    vh = 'NotAvailable_button_149fb125',
    xh = 'NotAvailable_description_6cafdd55',
    wh = 'NotAvailable_completedCount_8450f150',
    Ch = R.strings.battle_pass.postProgressionView.footer,
    yh = n(() => {
        const { model: a } = Ib(),
            t = Z(),
            s = a.computes.completedRegularChaptersCount(),
            r = a.computes.regularChapters().length;
        return e.jsxs('div', {
            className: hh,
            children: [
                e.jsx('div', { className: fh }),
                e.jsxs('div', {
                    className: gh,
                    children: [
                        e.jsx(B, {
                            classMix: xh,
                            text: Ch.description.text(),
                            binding: {
                                completedChapters: e.jsx('span', { className: wh, children: s }),
                                chaptersAmount: r,
                            },
                        }),
                        e.jsx(k, {
                            type: P.ghost,
                            size: I.medium,
                            mixClass: vh,
                            onClick: () => t.push(xs.battlePass.chapterChoice),
                            children: Ch.button.text(),
                        }),
                    ],
                }),
            ],
        });
    }),
    jh = 'PurchasingIp_349aa5c4',
    Sh = 'PurchasingIp_wrapper_2ff2079e',
    Nh = 'PurchasingIp_border_78bb5b9b',
    kh = 'PurchasingIp_base__hover_e6cc332b',
    Ih = 'PurchasingIp_bg_345ee932',
    Ph = 'PurchasingIp_blink_990fb4a0',
    Rh = 'PurchasingIp_text_4355bb8a',
    Bh = 'PurchasingIp_button_b213818',
    Ah = 'PurchasingIp_content_b09e9d85',
    Eh = R.strings.battle_pass.postProgressionView.footer.purchaseIP,
    Th = n(() => {
        const { model: s } = Ib(),
            r = Z(),
            [i, n] = t.useState(!1);
        return e.jsxs('div', {
            className: a(jh, i && kh),
            onMouseOver: (e) => {
                (e.stopPropagation(), n(!0), z.sound(R.sounds.highlight()));
            },
            onMouseOut: () => {
                n(!1);
            },
            onClick: () => {
                var e;
                const a = s.computes.chaptersForPurchase();
                (z.sound(R.sounds.play()),
                    r.push(xs.battlePass.buyPass, { chapterID: null == (e = a[0]) ? void 0 : e.chapterID }));
            },
            children: [
                e.jsxs('div', {
                    className: Sh,
                    children: [
                        e.jsx('div', { className: Ih }),
                        e.jsx('div', { className: Ph }),
                        e.jsxs('div', {
                            className: Ah,
                            children: [
                                e.jsx('div', {
                                    className: Rh,
                                    children: R.strings.battle_pass.postProgressionView.footer.purchaseIP.banner.text(),
                                }),
                                e.jsx(k, { type: P.main, size: I.medium, mixClass: Bh, children: Eh.button.text() }),
                            ],
                        }),
                    ],
                }),
                e.jsx('div', { className: Nh }),
            ],
        });
    }),
    Lh = 'Footer_447447a9',
    Dh = n(({ className: t = '' }) => {
        const { model: s } = Ib(),
            r = s.computes.footerState();
        return e.jsx('div', {
            className: a(Lh, t),
            children: (() => {
                switch (r) {
                    case wb.NotAvailable:
                        return e.jsx(yh, {});
                    case wb.PurchasingIP:
                        return e.jsx(Th, {});
                    case wb.ExtraChapter:
                        return e.jsx(bh, {});
                    default:
                        return null;
                }
            })(),
        });
    }),
    Wh = 'Header_8161ac6c',
    Oh = 'Header_background_ca26eac9',
    Mh = 'Header_headlineContainer_83fb95ed',
    Vh = 'Header_headline_49f93202',
    zh = 'Header_divider_d589871a',
    Fh = 'Header_title_87287815',
    $h = 'Header_descriptionContainer_5475d6de',
    Hh = 'Header_descriptionPaused_65f475ba',
    Uh = 'Header_description_1d21a2e3',
    Gh = 'Header_icon_e3ea70af',
    qh = 'Header_label_f1c2cd27',
    Xh = R.strings.battle_pass.postProgressionView.header,
    Zh = n(({ className: t }) => {
        const { postProgressionStatus: s, endDate: r } = Ib().model.root.get(),
            i = s === jb.Locked,
            n = s === jb.Paused,
            o = qa(r, Xa.DayMonthFull);
        return e.jsxs('div', {
            className: a(Wh, t),
            children: [
                e.jsx('div', { className: Oh }),
                e.jsxs('div', {
                    className: Mh,
                    children: [
                        !i &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx('span', { className: Vh, children: Xh.headline.unlocked() }),
                                    e.jsx('div', { className: zh }),
                                ],
                            }),
                        e.jsx(B, { classMix: Vh, text: Xh.headline.deadline(), binding: { endDate: o } }),
                    ],
                }),
                e.jsx('span', { className: Fh, children: Xh.title() }),
                e.jsx('div', {
                    className: $h,
                    children: n
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx('div', { className: Gh }),
                                  e.jsx('span', { className: qh, children: Xh.description.onPause.highlight() }),
                                  e.jsx('span', { className: Hh, children: Xh.description.onPause.regular() }),
                              ],
                          })
                        : e.jsx('span', { className: Uh, children: Xh.description.active() }),
                }),
            ],
        });
    }),
    Kh = 'Counter_530269bb',
    Yh = 'Counter_infinityIconContainer_1ffbc2e2',
    Qh = 'Counter_infinityIcon_d060ec47',
    Jh = 'Counter_label_3f062fe0',
    ef = 'Counter_cyclesCompleted_98e1bb2c',
    af = 'Counter_cyclesNumber_623ae487',
    tf = 'Counter_cyclesNumber__animated_78a25366',
    sf = 'Counter_cyclesNumber__hidden_4c746c1c',
    rf = R.strings.battle_pass.postProgressionView.progression,
    nf = n(({ className: t, labelRef: s, shouldRun: r }) => {
        const { model: i } = Ib(),
            { cyclesCompletedCount: n, previousCyclesCompletedCount: o } = i.root.get(),
            l = i.animationStep.get(),
            c = n !== o && [gb.Idle, gb.FillProgressMax].includes(l);
        return e.jsxs('div', {
            className: a(Kh, t),
            ref: s,
            children: [
                e.jsx('div', { className: Yh, children: e.jsx('div', { className: Qh }) }),
                e.jsx('div', {
                    className: Jh,
                    children: n
                        ? e.jsxs('div', {
                              className: ef,
                              children: [
                                  e.jsx('span', { children: rf.cyclesCompleted() }),
                                  e.jsx(
                                      'span',
                                      { className: a(af, r && tf, c && sf), children: n },
                                      `cyclesCompletedCount-${r}`,
                                  ),
                              ],
                          })
                        : rf.cyclicalProgression(),
                }),
            ],
        });
    }),
    of = {
        root: 'Cycle_root_8af1a177',
        base: 'Cycle_74f0e867',
        labelContainer: 'Cycle_labelContainer_3604ca19',
        contour: 'Cycle_contour_24ba23fd',
        border: 'Cycle_border_c131c31f',
        border__horizontal: 'Cycle_border__horizontal_c4a77614',
        contour__2x: 'Cycle_contour__2x_8af1a177',
        border__vertical: 'Cycle_border__vertical_218efe03',
        arrow: 'Cycle_arrow_9ac4ac6',
        bar: 'Cycle_bar_ed90b853',
        bar__state1: 'Cycle_bar__state1_cdb101bd',
        state1: 'Cycle_state1_8af1a177',
        bar__state2: 'Cycle_bar__state2_19af5de',
        state2: 'Cycle_state2_8af1a177',
        bar__state3: 'Cycle_bar__state3_297a53d6',
        state3: 'Cycle_state3_8af1a177',
        bar__state4: 'Cycle_bar__state4_a23fc208',
        state4: 'Cycle_state4_8af1a177',
        bar__state5: 'Cycle_bar__state5_e607ac47',
        state5: 'Cycle_state5_8af1a177',
        fadeInWithScale: 'Cycle_fadeInWithScale_8af1a177',
        slideUp: 'Cycle_slideUp_8af1a177',
        blink: 'Cycle_blink_8af1a177',
        scale: 'Cycle_scale_8af1a177',
        rotate: 'Cycle_rotate_8af1a177',
        windowIn: 'Cycle_windowIn_8af1a177',
        fadeOut: 'Cycle_fadeOut_8af1a177',
        fadeIn: 'Cycle_fadeIn_8af1a177',
    },
    lf = '--label-offset',
    cf = { left: 0, width: 0 },
    df = n(({ className: s, shouldRun: r }) => {
        const { model: i } = Ib(),
            { cyclesCompletedCount: n } = i.root.get(),
            o = t.useRef(null),
            l = t.useRef(null),
            {
                breakpoint: { weight: c },
            } = F(),
            d = ke(),
            [_, u] = t.useState({ [lf]: '0%' });
        return (
            ut(() => {
                var e, a;
                const t = (null == (e = o.current) ? void 0 : e.getBoundingClientRect()) ?? cf,
                    s = (null == (a = l.current) ? void 0 : a.getBoundingClientRect().left) ?? 0,
                    r = 15 * d,
                    i = (100 * (s - t.left - r)) / t.width;
                u({ [lf]: `${i}%` });
            }, [o.current, l.current, c, d, n]),
            e.jsxs('div', {
                className: a(of.base, s),
                style: _,
                children: [
                    e.jsx('div', { className: of.arrow }),
                    e.jsxs('div', {
                        className: a(of.contour, of[`contour__${d}x`]),
                        ref: o,
                        children: [
                            e.jsx('div', { className: a(of.border, of.border__vertical) }),
                            e.jsx('div', { className: a(of.border, of.border__horizontal) }),
                            r &&
                                Array(5)
                                    .fill(void 0)
                                    .map((t, s) =>
                                        e.jsx('div', { className: a(of.bar, of[`bar__state${s + 1}`]) }, `bar-${s}`),
                                    ),
                        ],
                    }),
                    e.jsx(nf, { className: of.labelContainer, labelRef: l, shouldRun: r }),
                ],
            })
        );
    }),
    _f = 'ProgressBar_7a10c6f0',
    uf = 'ProgressBar_progressBackground_ce66ede4',
    mf = 'ProgressBar_progressBar_61381794',
    pf = 'ProgressBar_progressBar__disabled_f37621b4',
    bf = 'ProgressBar_optimizedProgressBar_87a4af2b',
    hf = 'ProgressBar_cycle_7886c8',
    ff = n(() => {
        const { model: s, controls: r } = Ib(),
            { postProgressionStatus: i } = s.root.get(),
            n = s.animationStep.get(),
            o = n === gb.RunCycle,
            l = i === jb.Locked,
            c = i === jb.Paused,
            d = l || c,
            {
                breakpoint: { weight: _ },
            } = F(),
            { progressValue: u, previousProgressValue: m, maxProgressValue: p } = s.computes.getProgressValues(_),
            b = s.computes.progressChanged();
        (t.useEffect(() => {
            switch (n) {
                case gb.FillProgressMax:
                case gb.RefillProgress:
                    return void r.handleProgressAchieved();
                case gb.RunCycle:
                    return void r.handleCycleCompleted();
            }
        }, [n, r]),
            t.useEffect(() => {
                if (b && n === gb.Idle)
                    return K(() => {
                        r.handleProgressAchieved();
                    }, bb);
            }, [n, r, b]));
        const h = t.useRef(mt());
        return e.jsxs('div', {
            className: _f,
            style: { '--progress-line-width': `${p}rem` },
            children: [
                e.jsx('div', { className: uf }),
                e.jsx(_t, {
                    contentId: R.views.mono.battle_pass.tooltips.bp_points('resId'),
                    children: e.jsx('div', {
                        className: a(mf, d && pf),
                        children: e.jsx(pt, {
                            api: h,
                            value: u,
                            deltaFrom: m,
                            maxValue: p,
                            disabled: d,
                            animationSettings: hb,
                            theme: fb,
                            className: bf,
                        }),
                    }),
                }),
                e.jsx(df, { className: hf, shouldRun: o }),
            ],
        });
    }),
    gf = 'Toolbar_infoButtons_dd878d8c',
    vf = R.strings.battle_pass.postProgressionView.toolbar,
    xf = n(({ className: a }) => {
        const { openInfoPage: t, openPointsInfo: s } = Ib().controls;
        return e.jsx('div', {
            className: a,
            children: e.jsxs('div', {
                className: gf,
                children: [
                    e.jsx(bt, { caption: vf.aboutBattlePass(), type: 'info', onClick: t }),
                    e.jsx(bt, { caption: vf.howToEarnPoints(), type: 'info', onClick: s }),
                ],
            }),
        });
    }),
    wf = 'App_ad9a5024',
    Cf = 'App_toolbar_d16ffb0a',
    yf = 'App_awardsWidget_1186a317',
    jf = 'App_award_70e8698f',
    Sf = 'App_content_b9a70459',
    Nf = 'App_header_77cc1fba',
    kf = 'App_progression_992167b9',
    If = 'App_footer_e6643cae',
    Pf = R.images.gui.maps.icons.battlePass.backgrounds.progression,
    Rf = n(() => {
        const { model: a, controls: s } = Ib(),
            { chapterID: r } = a.root.get(),
            i = a.animationStep.get(),
            n = a.computes.cycleChanged(),
            o = Z();
        (t.useEffect(() => {
            if (i !== gb.Idle) {
                const { nextStep: e, delay: a } = vb[i];
                return K(() => {
                    s.setAnimationStep(e);
                }, a);
            }
            n && s.setAnimationStep(gb.FillProgressMax);
        }, [i, s, n]),
            J(E.ESCAPE, () => o.goBack()));
        const l = `url(${Ft(Pf, r)})`;
        return e.jsxs('div', {
            className: wf,
            style: { backgroundImage: l },
            children: [
                e.jsx(xf, { className: Cf }),
                e.jsx(Hm, {
                    rootId: R.aliases.battle_pass.PostProgression('resId'),
                    context: 'model.awardsWidget',
                    classNames: { base: yf, award: jf },
                }),
                e.jsxs('div', {
                    className: Sf,
                    children: [
                        e.jsx(Zh, { className: Nf }),
                        e.jsxs('div', { className: kf, children: [e.jsx(rh, {}), e.jsx(ff, {})] }),
                    ],
                }),
                e.jsx(Dh, { className: If }),
            ],
        });
    }),
    Bf = () =>
        e.jsx(kb, { options: { rootId: R.aliases.battle_pass.PostProgression('resId') }, children: e.jsx(Rf, {}) });
var Af = ((e) => (
        (e.Active = 'active'),
        (e.Paused = 'paused'),
        (e.Completed = 'completed'),
        (e.NotStarted = 'notStarted'),
        e
    ))(Af || {}),
    Ef = ((e) => (
        (e.NoAction = 'noAction'),
        (e.Buy = 'buy'),
        (e.BuyLevel = 'buyLevel'),
        (e.ActivateChapter = 'activateChapter'),
        e
    ))(Ef || {}),
    Tf = ((e) => ((e.COMMON = 'common'), (e.EXTRA = 'extra'), (e.HOLIDAY = 'holiday'), e))(Tf || {}),
    Lf = ((e) => ((e.left = 'left'), (e.right = 'right'), e))(Lf || {}),
    Df = ((e) => ((e.COMPLETED = 'completed'), (e.IN_PROGRESS = 'inProgress'), (e.NOT_STARTED = 'notStarted'), e))(
        Df || {},
    ),
    Wf = ((e) => (
        (e.UNLOCK_BIG = 'bp_unlock_big'),
        (e.UNLOCK_SMALL = 'bp_unlock_small'),
        (e.IMPROVED_REWARD = 'bp_improved_reward'),
        e
    ))(Wf || {}),
    Of = ((e) => ((e.back = 'back'), (e.forward = 'forward'), e))(Of || {}),
    Mf = ((e) => ((e.Default = 'default'), (e.Gray = 'gray'), e))(Mf || {});
const Vf = [Af.Active, Af.Completed],
    [zf, Ff] = q()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    levels: e.array('levels.items'),
                    widget3dStyle: e.object('widget3dStyle'),
                    widget3dStyleVehicleInfo: e.object('widget3dStyle.vehicleInfo'),
                    widgetFinalRewards: e.object('widgetFinalRewards'),
                    vehicleInfo: e.object('widgetFinalRewards.vehicleInfo'),
                    freeTankmanInfo: e.array('widgetFinalRewards.tankmanInfo.free'),
                    paidTankmanInfo: e.array('widgetFinalRewards.tankmanInfo.paid'),
                    styleInfo: e.object('widgetFinalRewards.styleInfo'),
                    vehicleInfoFromStyle: e.object('widgetFinalRewards.styleInfo.vehicleInfo'),
                    freeFinalRewards: e.array('freeFinalRewards'),
                    paidFinalRewards: e.array('paidFinalRewards'),
                    starterPackRewards: e.array('starterPackRewards.items'),
                },
                t = i(() => ae(a.freeFinalRewards.get(), Pe), { equals: X }),
                s = i(() => ae(a.paidFinalRewards.get(), Pe), { equals: X }),
                r = i(() => ae(a.starterPackRewards.get(), Pe), { equals: X }),
                n = i(() => a.root.get().chapterType === Tf.HOLIDAY),
                o = i(() => ({ freeFinalRewards: Ot(t()), ...(s().length && { paidFinalRewards: Ot(s()) }) })),
                l = i(() => {
                    const { freeFinalRewards: e, paidFinalRewards: a } = o();
                    return !(!a && e.mainReward === Mt.progressiveStyle);
                }),
                c = i(() => a.root.get().chapterType === Tf.EXTRA),
                d = i(() => !(n() || c()), { equals: X }),
                _ = i((e) => (e ? a.paidTankmanInfo.get() : a.freeTankmanInfo.get())),
                u = i((e) => {
                    const t = a.levels.get(),
                        s = ot(t, e - 1);
                    return (s || console.warn(`level info not found for number: ${e}`), { ...s, maxLevel: t.length });
                }),
                m = i((e, a) => {
                    const t = u(e);
                    return ae(a ? t.freeRewardItems.items : t.paidRewardItems.items, (e) => ({ ...e }));
                }),
                p = i(() => {
                    const {
                            freePointsInLevel: e,
                            currentPointsInLevel: t,
                            chapterState: s,
                            hasExtra: r,
                        } = a.root.get(),
                        i = Vf.includes(s) || r ? t : e,
                        n = u(1);
                    return { current: i, total: null == n ? void 0 : n.levelPoints };
                }),
                b = i((e, t) => {
                    const {
                            chapterState: s,
                            currentLevel: r,
                            potentialLevel: i,
                            currentPointsInChapter: n,
                            freePointsInChapter: o,
                        } = a.root.get(),
                        { levelPoints: l, maxLevel: c } = u(e),
                        d = t ? o : n,
                        _ = t ? i : r;
                    return e < _ || (_ === c && d === l * c)
                        ? Df.COMPLETED
                        : e === _ && (s !== Af.NotStarted || d > 0)
                          ? Df.IN_PROGRESS
                          : Df.NOT_STARTED;
                }),
                h = i((e, t, s, r) => {
                    const { currentLevel: i, currentPointsInLevel: n } = a.root.get();
                    return ((i - 1) * e + (n / r) * t) / s;
                }),
                f = i(() => {
                    const e = a.levels.get();
                    return e[e.length - 1].value.levelPoints;
                }),
                g = i((e, a) => {
                    const { needTakeFree: t, needTakePaid: s } = u(e);
                    return a ? s : t;
                }),
                v = i((e, t) => {
                    const { isBattlePassPurchased: s, chapterState: r } = a.root.get(),
                        i = u(e),
                        n = b(e, !1);
                    return {
                        cardStatus: { current: n, potential: b(e, !0) },
                        isRare: i.isRare && n !== Df.IN_PROGRESS,
                        isDisabled: (t && !s) || (r !== Af.Active && n === Df.NOT_STARTED),
                    };
                });
            return {
                ...a,
                computes: {
                    getFreeFinalRewards: t,
                    getPaidFinalRewards: s,
                    regularBattlePass: d,
                    getFinalRewardTankmanInfo: _,
                    currentLevelPoints: p,
                    levelInfo: u,
                    levelRewardItems: m,
                    getCurrentWidth: h,
                    getTotalLevelPoints: f,
                    isRewardNeedTake: g,
                    cardStates: v,
                    isLayoutWithExtraWidget: l,
                    getFinalRewardsDescription: o,
                    getStarterPackRewards: r,
                },
            };
        },
        ({ externalModel: e }) => ({
            chapterActivate: e.createCallbackNoArgs('onChapterActivate'),
            openAbout: e.createCallbackNoArgs('onAboutClick'),
            openPreview: e.createCallbackNoArgs('widgetFinalRewards.onRewardPreviewClick'),
            open3dStylePreview: e.createCallback((e) => ({ level: e }), 'widget3dStyle.onPreviewClick'),
            onStyleBonusPreview: e.createCallback((e) => ({ bonusId: e }), 'onStyleBonusPreview'),
            showTankmen: e.createCallbackNoArgs('widgetFinalRewards.showTankmen'),
            openInfo: e.createCallbackNoArgs('onPointsInfoClick'),
            viewLoad: e.createCallbackNoArgs('onViewLoaded'),
            finishLevelsAnimation: e.createCallbackNoArgs('onLevelsAnimationFinished'),
            takeReward: e.createCallback(({ level: e }) => ({ level: e }), 'onTakeClick'),
            finishAnimation: e.createCallbackNoArgs('onFinishedAnimation'),
        }),
    ),
    $f = 'AdditionalRewardInfo_rewardText_31efb669',
    Hf = 'AdditionalRewardInfo_subTitle_251693c1',
    Uf = 'AdditionalRewardInfo_subTitleTextWrapper_19819b2b',
    Gf = 'AdditionalRewardInfo_subTitleText_b6b02718',
    qf = 'AdditionalRewardInfo_subTitleText__truncated_539e6fd4',
    Xf = 'AdditionalRewardInfo_infoIcon_a4fa826d',
    Zf = R.strings.battle_pass.progression.extraChapterWidget,
    Kf = n(({ additionalReward: s }) => {
        const {
                model: { widgetFinalRewards: r, styleInfo: i, vehicleInfo: n },
            } = Ff(),
            { vehicleName: o } = n.get(),
            { battleQuest: l } = r.get(),
            [c, d] = t.useState(!1),
            _ = t.useRef(null),
            u = t.useCallback(async () => {
                await Lt();
                const e = _.current;
                e && d(e.scrollWidth > e.offsetWidth);
            }, []);
        return (
            ht(
                () => (
                    u(),
                    engine.on('clientResized', u),
                    () => {
                        engine.off('clientResized', u);
                    }
                ),
            ),
            e.jsxs(e.Fragment, {
                children: [
                    s === Mt.style &&
                        e.jsx(B, {
                            classMix: $f,
                            text: Zf.vehicleSubTitle(),
                            binding: { styleName: i.get().styleName },
                        }),
                    s === Mt.battleQuest &&
                        e.jsx(_t, {
                            contentId: R.views.mono.battle_pass.tooltips.random_quest('resId'),
                            args: { tokenID: l },
                            children: e.jsxs('div', {
                                className: Hf,
                                children: [
                                    e.jsx('div', {
                                        className: Uf,
                                        children: e.jsx('div', {
                                            className: a(Gf, c && qf),
                                            ref: _,
                                            children: e.jsx(B, {
                                                text: Zf.styleSubTitle(),
                                                binding: { vehicleName: o },
                                            }),
                                        }),
                                    }),
                                    e.jsx('div', { className: Xf }),
                                ],
                            }),
                        }),
                ],
            })
        );
    }),
    Yf = 'StyleDescription_rewardTitle_a38f5a35',
    Qf = 'StyleDescription_rewardTitle__singleReward_844cd016',
    Jf = 'StyleDescription_title_10aa0199',
    eg = 'StyleDescription_title__singleReward_4f032bf8',
    ag = 'StyleDescription_vehicleTitle_d97e976a',
    tg = 'StyleDescription_vehicleLabel_d39e5139',
    sg = 'StyleDescription_vehicleInHangar_f82728b9',
    rg = 'StyleDescription_remark_bf754841',
    ig = 'StyleDescription_lockIcon_6a873423',
    ng = 'StyleDescription_baseClass_cf456a8f',
    og = 'StyleDescription_name_9ce7517f',
    lg = 'StyleDescription_level_7a97d385',
    cg = 'StyleDescription_type_8cffe3f7',
    dg = R.strings.battle_pass.progression.extraChapterWidget,
    _g = n(({ additionalReward: t, isPaidReward: s }) => {
        const {
                model: { styleInfo: r, vehicleInfoFromStyle: i, root: n, computes: o },
                controls: l,
            } = Ff(),
            { isBattlePassPurchased: c } = n.get(),
            { styleName: d, isVehicleInHangar: _ } = r.get(),
            u = o.getPaidFinalRewards().length,
            m = { base: ng, level: lg, name: og, typeIcon: cg };
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(tt, { type: 'preview', size: 'normal', onClick: l.openPreview }),
                e.jsx('div', { className: a(Yf, !u && Qf), children: u ? dg.style3DTitle() : dg.styleTitle() }),
                e.jsx(B, { classMix: a(Jf, !u && eg), text: dg.styleName(), binding: { styleName: d } }),
                !u &&
                    e.jsxs('div', {
                        className: ag,
                        children: [
                            e.jsx(B, {
                                classMix: tg,
                                text: dg.forLabel(),
                                binding: {
                                    vehicleName: e.jsx(mu, {
                                        ...i.get(),
                                        classNames: m,
                                        vehicleTypeIconSize: Ka.x24x24,
                                    }),
                                },
                            }),
                            _ && e.jsx(Ye, { body: dg.inHangarTooltip(), children: e.jsx('div', { className: sg }) }),
                        ],
                    }),
                t && e.jsx(Kf, { additionalReward: t }),
                s &&
                    !c &&
                    e.jsx(_t, {
                        contentId: R.views.mono.battle_pass.tooltips.lock_icon('resId'),
                        children: e.jsxs('div', {
                            className: rg,
                            children: [e.jsx('div', { className: ig }), e.jsx('div', { children: dg.styleRemark() })],
                        }),
                    }),
            ],
        });
    }),
    ug = {
        base: 'Voice_c37942b8',
        icon: 'Voice_icon_341b24d6',
        icon__speaker: 'Voice_icon__speaker_172c2c35',
        icon__wave0: 'Voice_icon__wave0_77617b3a',
        base__animate: 'Voice_base__animate_d1a20ef1',
        icon__wave1: 'Voice_icon__wave1_1096fc2',
    },
    mg = R.strings.battle_pass.progression.extraChapterWidget,
    pg = (() => {
        const e = Math.ceil(Ut / 800);
        return { duration: 800, iterationCount: e, totalDuration: 800 * e };
    })(),
    bg = ({ groupName: s }) => {
        const [r, i] = t.useState(!1),
            n = t.useCallback(() => {
                r || (z.sound(R.sounds.play()), z.sound(s), i(!0));
            }, [r, s]);
        return (
            t.useEffect(() => {
                r &&
                    K(() => {
                        i(!1);
                    }, pg.totalDuration);
            }, [r]),
            e.jsx(Ye, {
                body: mg.voiceoverTooltip(),
                children: e.jsxs('div', {
                    className: a(ug.base, r && ug.base__animate),
                    onClick: n,
                    onMouseEnter: () => {
                        z.sound(R.sounds.bp_highlight());
                    },
                    style: {
                        '--animation-duration': `${pg.duration}ms`,
                        '--animation-iteration-count': pg.iterationCount,
                    },
                    children: [
                        e.jsx('div', { className: a(ug.icon, ug.icon__speaker) }),
                        e.jsx('div', { className: a(ug.icon, ug.icon__wave0) }),
                        e.jsx('div', { className: a(ug.icon, ug.icon__wave1) }),
                        e.jsx('div', { className: a(ug.icon, ug.icon__wave2) }),
                    ],
                }),
            })
        );
    },
    hg = 'TankmanDescription_title_6b604eaf',
    fg = 'TankmanDescription_title__noVoice_132efc49',
    gg = 'TankmanDescription_name_9f802b92',
    vg = 'TankmanDescription_skills_8507fe1b',
    xg = 'TankmanDescription_skill_2e650973',
    wg = 'TankmanDescription_skill__paidReward_f372df77',
    Cg = 'TankmanDescription_description_4c6b2a1b',
    yg = 'TankmanDescription_lockIcon_7b9909c0',
    jg = 'TankmanDescription_lockText_e8d2d84c',
    Sg = 'TankmanDescription_showCommander_392de842',
    Ng = 'TankmanDescription_close_b105aa08',
    kg = R.strings.battle_pass.progression.extraChapterWidget,
    Ig = R.strings.battle_pass.awardsWidget.description.commander(),
    Pg = n(({ isPaidReward: t }) => {
        const { model: s, controls: r } = Ff(),
            { tankmenScreenID: i, isBattlePassPurchased: n } = s.root.get(),
            { tankman: o, hasVoice: l, skills: c, groupName: d } = s.computes.getFinalRewardTankmanInfo(t),
            { freeFinalRewards: _, paidFinalRewards: u } = s.computes.getFinalRewardsDescription(),
            m = _.mainReward === Mt.tankman && (null == u ? void 0 : u.mainReward) === Mt.tankman;
        return e.jsxs(e.Fragment, {
            children: [
                l && e.jsx(bg, { groupName: d }),
                e.jsx('div', { className: a(hg, !l && fg), children: kg.tankman() }),
                e.jsx('div', { className: gg, children: o }),
                c.length > 0 &&
                    e.jsx('div', { className: vg, children: e.jsx(Ht, { skills: c, className: a(xg, t && wg) }) }),
                t &&
                    !n &&
                    e.jsx(_t, {
                        contentId: R.views.mono.battle_pass.tooltips.lock_icon('resId'),
                        children: e.jsxs('div', {
                            className: Cg,
                            children: [
                                e.jsx('div', { className: yg }),
                                e.jsx('div', { className: jg, children: kg.labelWithBP() }),
                            ],
                        }),
                    }),
                Boolean(i) &&
                    !m &&
                    e.jsx(Ye, {
                        body: Ig,
                        isEnabled: Boolean(Ig),
                        children: e.jsx('div', {
                            className: Sg,
                            children: e.jsx(k, {
                                type: P.ghost,
                                size: I.small,
                                mixClass: Ng,
                                onClick: r.showTankmen,
                                children: kg.commanderVoices(),
                            }),
                        }),
                    }),
            ],
        });
    }),
    Rg = 'Timer_992312dc',
    Bg = 'Timer_light_b54b0e12',
    Ag = 'Timer_icon_daefbc5f',
    Eg = 'Timer_value_ef2605c8',
    Tg = ({ expireTime: a = 0 }) => {
        const t = ft(a, 1),
            s = ((e) => {
                const a = (e) => e.toString().padStart(2, '0');
                return `${e.days ? gt(R.strings.common.duration.days(), { days: e.days }) : ''} ${a(e.hours)} : ${a(e.minutes)} : ${a(e.seconds)}`;
            })(Ce(t));
        return e.jsx(Ye, {
            body: R.strings.battle_pass.progression.extraChapterWidget.timer(),
            children: e.jsxs('div', {
                className: Rg,
                children: [
                    e.jsx('div', { className: Ag }),
                    e.jsx('div', { className: Eg, children: s }),
                    e.jsx('div', { className: Bg }),
                    e.jsx('div', { className: Bg }),
                ],
            }),
        });
    },
    Lg = 'VehicleInfo_f8a1a53e',
    Dg = 'VehicleInfo_type_f9fe252e',
    Wg = ({ vehicleLvl: t, vehicleName: s, vehicleType: r, isElite: i, classNames: n }) =>
        e.jsxs('div', {
            className: a(Lg, null == n ? void 0 : n.base),
            children: [
                Vt(t),
                e.jsx('div', {
                    className: a(Dg, null == n ? void 0 : n.type),
                    style: {
                        backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${vt(r)}${i ? '_elite' : ''}`)})`,
                    },
                }),
                s,
            ],
        }),
    Og = {
        vehicleBg: 'VehicleDescription_vehicleBg_a5f58731',
        vehicleBg__description: 'VehicleDescription_vehicleBg__description_449188e7',
        vehicleCaption: 'VehicleDescription_vehicleCaption_ff05b2b9',
        description: 'VehicleDescription_description_ac70d89a',
        rewardLabel: 'VehicleDescription_rewardLabel_e69780e1',
        rewardDescription: 'VehicleDescription_rewardDescription_ac995cfe',
        rewardLockIcon: 'VehicleDescription_rewardLockIcon_bf4a508e',
        rewardLockText: 'VehicleDescription_rewardLockText_1ae0fc44',
    },
    Mg = R.strings.battle_pass.progression.extraChapterWidget,
    Vg = n(({ additionalReward: t, isPaidReward: s }) => {
        const {
                model: { vehicleInfo: r, root: i, computes: n },
                controls: o,
            } = Ff(),
            {
                vehicleType: l,
                isElite: c,
                vehicleName: d,
                vehicleShortName: _,
                vehicleLvl: u,
                vehicleNation: m,
            } = r.get(),
            {
                breakpoint: { weight: p },
            } = F(),
            { isBattlePassPurchased: b, seasonNum: h } = i.get(),
            f = n.getPaidFinalRewards().length,
            g = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_600x450.${m})` },
            v = p > $.medium.weight ? 14 : 12,
            x = d.length > v ? _ : d,
            w = Mg.tank.description.$num(h);
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: a(Og.vehicleBg, !f && Og.vehicleBg__description), style: g }),
                e.jsx(tt, { type: 'preview', size: 'normal', onClick: o.openPreview }),
                e.jsx('div', { className: Og.vehicleCaption, children: Mg.vehicleCaption() }),
                e.jsx(Wg, {
                    classNames: { base: Og.vehicleInfo },
                    vehicleLvl: u,
                    vehicleName: x,
                    vehicleType: l,
                    isElite: c,
                }),
                !f && w && e.jsx('div', { className: Og.description, children: e.jsx(B, { text: w }) }),
                t && e.jsx('div', { className: Og.rewardLabel, children: e.jsx(Kf, { additionalReward: t }) }),
                s &&
                    !b &&
                    e.jsx(_t, {
                        contentId: R.views.mono.battle_pass.tooltips.lock_icon('resId'),
                        children: e.jsxs('div', {
                            className: Og.rewardDescription,
                            children: [
                                e.jsx('div', { className: Og.rewardLockIcon }),
                                e.jsx('div', { className: Og.rewardLockText, children: Mg.labelWithBP() }),
                            ],
                        }),
                    }),
            ],
        });
    }),
    zg = 'Separator_da94a3ab',
    Fg = 'Separator_separatorBg_79e9a0f1',
    $g = ({ classNames: t }) =>
        e.jsx('div', {
            className: a(zg, null == t ? void 0 : t.base),
            children: e.jsx('div', { className: a(Fg, null == t ? void 0 : t.separatorBg) }),
        }),
    Hg = 'ExtraChapterWidget_3f5dd2c5',
    Ug = 'ExtraChapterWidget_widgetWrapper_df1761bd',
    Gg = 'ExtraChapterWidget_base__styleReward_3f5dd2c5',
    qg = 'ExtraChapterWidget_glow_4388d699',
    Xg = 'ExtraChapterWidget_glow__styleReward_8dcf5d5f',
    Zg = 'ExtraChapterWidget_content_7571cec7',
    Kg = 'ExtraChapterWidget_content__left_2a162beb',
    Yg = 'ExtraChapterWidget_content__singleReward_d0c77a05',
    Qg = 'ExtraChapterWidget_separatorBg_58fe9583',
    Jg = 'ExtraChapterWidget_timer_92648812',
    ev = { [Mt.tankman]: Pg, [Mt.vehicle]: Vg, [Mt.style]: _g },
    av = ({ mainReward: a, additionalReward: t }, s) => {
        const r = ev[a];
        return r ? e.jsx(r, { additionalReward: t, ...s }) : (console.warn('Unknown final reward type:', a), null);
    },
    tv = n(() => {
        const {
                model: { root: t, computes: s },
            } = Ff(),
            { timeLeft: r } = t.get(),
            { freeFinalRewards: i, paidFinalRewards: n } = s.getFinalRewardsDescription(),
            o = s.regularBattlePass(),
            l = !n && i.mainReward === Mt.style;
        return e.jsxs('div', {
            className: a(Hg, l && Gg),
            children: [
                e.jsxs('div', {
                    className: Ug,
                    children: [
                        e.jsx('div', { className: a(qg, l && Xg) }),
                        e.jsx('div', { className: a(Zg, !n && Yg), children: av(i, { isPaidReward: !1 }) }),
                        n &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx($g, { classNames: { separatorBg: Qg } }),
                                    e.jsx('div', { className: a(Zg, Kg), children: av(n, { isPaidReward: !0 }) }),
                                ],
                            }),
                    ],
                }),
                !o && e.jsx('div', { className: Jg, children: e.jsx(Tg, { expireTime: r }) }),
            ],
        });
    }),
    sv = {
        root: 'Footer_root_4308958a',
        base: 'Footer_ab6b29ea',
        light: 'Footer_light_3b6e1ce3',
        light__red: 'Footer_light__red_944d6c45',
        light__green: 'Footer_light__green_9e6310c0',
        buttonWrapper: 'Footer_buttonWrapper_bdb4b046',
        starterAndButton: 'Footer_starterAndButton_2f4854e4',
        button: 'Footer_button_9e575f35',
        labelContainer: 'Footer_labelContainer_ae5572d4',
        label: 'Footer_label_e76dc882',
        label__buy: 'Footer_label__buy_8b13ea86',
        days: 'Footer_days_9ed2f711',
        points: 'Footer_points_58964618',
        status: 'Footer_status_9143122e',
        info: 'Footer_info_5836cdb1',
        infoHover: 'Footer_infoHover_63796a67',
        blink: 'Footer_blink_106ec98e',
        move: 'Footer_move_4308958a',
        fadeInWithScale: 'Footer_fadeInWithScale_4308958a',
        slideUp: 'Footer_slideUp_4308958a',
        scale: 'Footer_scale_4308958a',
        rotate: 'Footer_rotate_4308958a',
        windowIn: 'Footer_windowIn_4308958a',
        fadeOut: 'Footer_fadeOut_4308958a',
        fadeIn: 'Footer_fadeIn_4308958a',
    },
    rv = ie.resolve('strings'),
    iv = (e, a) =>
        e
            ? a
                ? rv.readOrEmpty('battle_pass.progression.activatePausedExtraChapterDescr')
                : rv.readOrEmpty('battle_pass.progression.activateExtraChapterDescr')
            : rv.readOrEmpty('battle_pass.progression.activateChapterDescr'),
    nv = n(() => {
        const { model: t, controls: s } = Ff(),
            r = Z(),
            {
                actionType: i,
                chapterType: n,
                hasExtra: o,
                isSeasonEndingSoon: l,
                freePointsInChapter: c,
                currentPointsInChapter: d,
                chapterState: _,
                timeLeft: u,
                chapterID: m,
                isStarterPack: p,
            } = t.root.get(),
            b = n === Tf.EXTRA,
            h = n === Tf.HOLIDAY,
            f = _ === Af.Paused,
            g = c - d,
            v = i === Ef.ActivateChapter && g > 0,
            x = i !== Ef.ActivateChapter && l,
            w = p
                ? rv.readOrEmpty('battle_pass.progression.battlePassBuyDescrStarterPack')
                : h
                  ? rv.readOrEmpty('battle_pass.progression.battlePassBuyHolidayDescr')
                  : rv.readOrEmpty('battle_pass.progression.battlePassBuyDescr'),
            {
                buyBtnLabel: C,
                tooltip: y,
                label: j,
                warning: S,
                buttonType: N,
                lightColor: R,
                route: A,
                params: E,
            } = ((e) => {
                switch (e) {
                    case Ef.Buy:
                        return {
                            buyBtnLabel: rv.readOrEmpty('battle_pass.progression.battlePassBuyBtn'),
                            tooltip: rv.readOrEmpty('battle_pass.tooltips.footerBuyBtn.battlePass.descr'),
                            label: w,
                            warning: rv.readOrEmpty('battle_pass.progression.seasonEndingDescr'),
                            buttonType: P.main,
                            lightColor: 'red',
                            route: xs.battlePass.buyPass,
                            params: { chapterID: m },
                        };
                    case Ef.BuyLevel:
                        return {
                            buyBtnLabel: rv.readOrEmpty('battle_pass.progression.episodeBuyBtn'),
                            tooltip: h
                                ? rv.readOrEmpty('battle_pass.tooltips.footerBuyBtn.episode.holidayDescr')
                                : rv.readOrEmpty('battle_pass.tooltips.footerBuyBtn.episode.descr'),
                            label: rv.readOrEmpty('battle_pass.progression.episodeBuyDescr'),
                            warning: rv.readOrEmpty('battle_pass.progression.seasonEndingDescr'),
                            buttonType: P.main,
                            lightColor: '',
                            route: xs.battlePass.buyLevels,
                            params: { chapterID: m },
                        };
                    case Ef.ActivateChapter:
                        return {
                            buyBtnLabel: rv.readOrEmpty('battle_pass.progression.activateChapter'),
                            tooltip: rv.readOrEmpty('battle_pass.tooltips.footerBuyBtn.activateChapter.descr'),
                            label: iv(b, f),
                            warning: rv.readOrEmpty('battle_pass.progression.freePointsDescr'),
                            buttonType: P.primary,
                            lightColor: 'green',
                            route: '',
                            params: {},
                        };
                    default:
                        return {
                            buyBtnLabel: '',
                            tooltip: '',
                            label: '',
                            warning: '',
                            buttonType: P.ghost,
                            lightColor: 'green',
                            route: '',
                            params: {},
                        };
                }
            })(i),
            T = v || x ? S : j,
            L = ((a) => {
                const t = Ce(a);
                switch (!0) {
                    case t.days >= 1:
                        return e.jsx(B, {
                            text: rv.readOrEmpty('battle_pass.status.timeLeft.days'),
                            binding: { day: t.days },
                        });
                    case t.hours >= 1:
                        return e.jsx(B, {
                            text: rv.readOrEmpty('battle_pass.status.timeLeft.hours'),
                            binding: { hour: t.hours },
                        });
                    case t.minutes >= 1:
                        return e.jsx(B, {
                            text: rv.readOrEmpty('battle_pass.status.timeLeft.min'),
                            binding: { min: t.minutes },
                        });
                    default:
                        return rv.readOrEmpty('battle_pass.status.timeLeft.lessMin');
                }
            })(u),
            D = t.computes.getStarterPackRewards(),
            W = () => {
                i === Ef.ActivateChapter
                    ? s.chapterActivate()
                    : A && r.push(A, { chapterID: E.chapterID || void 0, reset: E.reset });
            };
        return e.jsxs('div', {
            className: sv.base,
            children: [
                !p &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx('div', { className: a(sv.light, sv[`light__${R}`]) }),
                            e.jsxs('div', {
                                className: sv.labelContainer,
                                children: [
                                    f &&
                                        e.jsx('div', {
                                            className: sv.status,
                                            children: rv.readOrEmpty('battle_pass.progression.footer.status.paused'),
                                        }),
                                    e.jsx('div', { className: sv.label, children: T }),
                                    x && e.jsx('div', { className: sv.days, children: L }),
                                    v &&
                                        e.jsxs(e.Fragment, {
                                            children: [
                                                e.jsx('div', { className: sv.points, children: g }),
                                                e.jsx('div', {
                                                    className: sv.info,
                                                    children: e.jsx(Ye, {
                                                        header: rv.readOrEmpty(
                                                            'battle_pass.tooltips.progression.freePoints.header',
                                                        ),
                                                        body: o
                                                            ? rv.readOrEmpty(
                                                                  'battle_pass.tooltips.progression.freePoints.bodyExceptExtra',
                                                              )
                                                            : rv.readOrEmpty(
                                                                  'battle_pass.tooltips.progression.freePoints.body',
                                                              ),
                                                        children: e.jsx('div', { className: sv.infoHover }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                e.jsx('div', {
                    className: sv.buttonWrapper,
                    children: p
                        ? e.jsxs('div', {
                              className: sv.starterAndButton,
                              'data-test-id': `${i}ButtonWithSeasonData`,
                              children: [
                                  e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsx('div', {
                                              className: a(sv.label, sv.label__buy),
                                              children: e.jsx(B, { text: T }),
                                          }),
                                          x && e.jsx('div', { className: sv.days, children: L }),
                                      ],
                                  }),
                                  e.jsx(Ye, {
                                      body: y,
                                      children: e.jsxs(k, {
                                          type: N,
                                          size: I.medium,
                                          mixClass: sv.button,
                                          onClick: W,
                                          children: [x && e.jsx('div', { className: sv.blink }), C],
                                      }),
                                  }),
                                  e.jsx(ln, { starterPackRewards: D, presentSize: nn, rewardSize: U.Small }),
                              ],
                          })
                        : e.jsx(Ye, {
                              body: y,
                              children: e.jsxs(k, {
                                  type: N,
                                  size: I.medium,
                                  mixClass: sv.button,
                                  onClick: W,
                                  children: [x && e.jsx('div', { className: sv.blink }), C],
                              }),
                          }),
                }),
            ],
        });
    }),
    ov = 'Header_d6c7a62a',
    lv = 'Header_labels_73a63da7',
    cv = 'Header_title_46bb5059',
    dv = 'Header_chapterWrapper_ec40e5cf',
    _v = 'Header_chapterText_dd36a1a8',
    uv = 'Header_chapterText__overflow_ae7bd806',
    mv = 'Header_chapterStatus_9c15353a',
    pv = 'Header_date_dc70e297',
    bv = 'Header_titleButtons_7521b3e5',
    hv = 'Header_titleButton_d86731f6',
    fv = 'Header_logo_46c0cb85',
    gv = 'Header_awards_f810fc3a',
    vv = 'Header_emblem_c890a2dc',
    xv = 'Header_emblem__isChapterNotChosen_8aa33950',
    wv = R.strings.battle_pass,
    Cv = n(() => {
        const { controls: s, model: r } = Ff(),
            {
                chapterID: i,
                chapterState: n,
                seasonNum: o,
                expireTime: l,
                isBattlePassPurchased: c,
                timeLeft: d,
                chapterType: _,
            } = r.root.get(),
            u = [Af.NotStarted, Af.Paused],
            [m, p] = t.useState(!1),
            [b, h] = t.useState('auto'),
            {
                breakpoint: { weight: f },
            } = F(),
            g = f <= $.medium.weight ? viewEnv.pxToRem(170) : viewEnv.pxToRem(210),
            v = t.useRef(null),
            x = t.useRef(null),
            w =
                (C = n) === Af.Paused
                    ? wv.progression.header.paused()
                    : C === Af.NotStarted
                      ? wv.progression.header.inactive()
                      : void 0;
        var C;
        const y = t.useRef(0),
            j = _ === Tf.EXTRA,
            S = _ === Tf.HOLIDAY,
            N = Math.trunc(d / 86400),
            k = wv.chapter.fullName.$num(i),
            I = xt(wv.progression.seasonEndingTooltip(), { day: N }),
            P = xt(wv.progression.header.chapter.status(), { chapterName: k }),
            A = t.useCallback(
                (e) => {
                    e > y.current && (y.current = e);
                },
                [y],
            ),
            E = t.useCallback(async () => {
                await Lt();
                const e = v.current,
                    a = x.current;
                e &&
                    a &&
                    (A(a.offsetWidth),
                    w
                        ? (p(y.current >= e.offsetWidth - g), h(e.offsetWidth / viewEnv.getScale() - g + 'rem'))
                        : (p(y.current >= e.offsetWidth), h(e.offsetWidth / viewEnv.getScale() - 10 + 'rem')));
            }, [A, w, g]);
        t.useEffect(
            () => (
                E(),
                engine.on('clientResized', E),
                () => {
                    engine.off('clientResized', E);
                }
            ),
            [n],
        );
        const T = ce(
            { iconSize: _i, shieldSize: si, containerSize: Yr },
            { medium: { iconSize: mi, shieldSize: ri, containerSize: Qr } },
        );
        return e.jsxs('div', {
            className: ov,
            children: [
                e.jsx('div', {
                    className: fv,
                    children: e.jsx('div', {
                        className: a(vv, u.includes(n) && xv),
                        children: e.jsx(xi, {
                            iconSize: T.iconSize,
                            shieldSize: T.shieldSize,
                            containerSize: T.containerSize,
                            bpPurchased: c,
                            chapterID: i,
                            className: vv,
                        }),
                    }),
                }),
                e.jsx('div', {
                    className: lv,
                    children: e.jsxs('div', {
                        className: cv,
                        children: [
                            e.jsx(Ye, {
                                body: I,
                                isEnabled: Boolean(d),
                                children: e.jsx('div', {
                                    className: pv,
                                    children: j
                                        ? e.jsx(B, {
                                              text: wv.progression.season.end.special(),
                                              binding: { endTime: qa(l, Xa.DayMonthFull) },
                                          })
                                        : S
                                          ? e.jsx(B, {
                                                text: wv.progression.season.end.special(),
                                                binding: { endTime: qa(l, Xa.DayMonthFullTime) },
                                            })
                                          : e.jsx(B, {
                                                text: wv.progression.season.end.normal(),
                                                binding: {
                                                    seasonNum: Vt(o),
                                                    seasonName: wv.season.fullName.$num(o),
                                                    endDate: qa(l, Xa.DayMonthFull),
                                                },
                                            }),
                                }),
                            }),
                            e.jsxs('div', {
                                className: dv,
                                ref: v,
                                children: [
                                    e.jsx('div', {
                                        style: { maxWidth: `${b}` },
                                        children: e.jsx(Ye, {
                                            body: P,
                                            isEnabled: m,
                                            children: e.jsx('div', { className: a(_v, m && uv), ref: x, children: P }),
                                        }),
                                    }),
                                    w && e.jsx('div', { className: mv, children: w }),
                                ],
                            }),
                            e.jsxs('div', {
                                className: bv,
                                children: [
                                    e.jsx('div', {
                                        className: hv,
                                        children: e.jsx(bt, {
                                            caption: j || S ? wv.progression.aboutExtra() : wv.progression.about(),
                                            type: 'info',
                                            onClick: s.openAbout,
                                        }),
                                    }),
                                    e.jsx('div', {
                                        className: hv,
                                        children: e.jsx(bt, {
                                            caption: wv.howToEarnPoints.title(),
                                            type: 'info',
                                            onClick: s.openInfo,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                e.jsx('div', {
                    className: gv,
                    children: e.jsx(Hm, {
                        rootId: R.aliases.battle_pass.Progression('resId'),
                        context: 'model.awardsWidget',
                    }),
                }),
            ],
        });
    });
var yv = ((e) => ((e.Dragging = 'dragging'), (e.End = 'scrollingToEnd'), (e.Idle = 'idle'), e))(yv || {});
const jv = { type: 'idle' };
var Sv = ((e) => (
    (e[(e.MainButton = 0)] = 'MainButton'),
    (e[(e.AuxiliaryButton = 1)] = 'AuxiliaryButton'),
    (e[(e.SecondaryButton = 2)] = 'SecondaryButton'),
    (e[(e.FourthButton = 3)] = 'FourthButton'),
    (e[(e.FifthButton = 4)] = 'FifthButton'),
    e
))(Sv || {});
const Nv = {
        root: 'ArrowButton_root_5327085d',
        base: 'ArrowButton_bae005da',
        base__gray: 'ArrowButton_base__gray_2872d83c',
        icon: 'ArrowButton_icon_78679b8c',
        icon__4k: 'ArrowButton_icon__4k_2f0ad49a',
        icon__back: 'ArrowButton_icon__back_20344757',
        icon__forward: 'ArrowButton_icon__forward_3467f80',
        fadeInWithScale: 'ArrowButton_fadeInWithScale_5327085d',
        slideUp: 'ArrowButton_slideUp_5327085d',
        blink: 'ArrowButton_blink_5327085d',
        scale: 'ArrowButton_scale_5327085d',
        rotate: 'ArrowButton_rotate_5327085d',
        windowIn: 'ArrowButton_windowIn_5327085d',
        fadeOut: 'ArrowButton_fadeOut_5327085d',
        fadeIn: 'ArrowButton_fadeIn_5327085d',
    },
    kv = ({ onClick: s, direction: r, type: i = Mf.Default, className: n, tooltipBody: o }) => {
        const l = t.useCallback(() => {
                z.sound(R.sounds.highlight());
            }, []),
            c = t.useCallback(() => {
                (z.sound(R.sounds.bp_slide()), s());
            }, [s]);
        return e.jsx(Ye, {
            body: o,
            children: e.jsx('div', {
                className: a(Nv.base, Nv[`base__${i}`], n),
                onClick: c,
                onMouseEnter: l,
                children: e.jsx('div', { className: a(Nv.icon, Nv[`icon__${r}`], 2 === wt() && Nv.icon__4k) }),
            }),
        });
    },
    Iv = 'Bookmark_1a260409',
    Pv = 'Bookmark_container_5cba29f3',
    Rv = 'Bookmark_container__start_f008a523',
    Bv = 'Bookmark_container__wide_16a4de6e',
    Av = 'Bookmark_textWrapper_985290f6',
    Ev = 'Bookmark_withTooltip_ef0470d4',
    Tv = 'Bookmark_text_7877afbc',
    Lv = 'Bookmark_text__basic_9271b9b6',
    Dv = 'Bookmark_text__premium_49218d9e',
    Wv = 'Bookmark_text__single_8125f23e',
    Ov = 'Bookmark_text__wide_3f764b56',
    Mv = 'Bookmark_text__disappeared_68a02d91',
    Vv = 'Bookmark_textInner_8a053178',
    zv = 'Bookmark_leftTextLine_efb7ffd5',
    Fv = 'Bookmark_rightTextLine_c747efe3',
    $v = ({ isWide: t, isDecorated: s }) =>
        e.jsxs('div', {
            className: a(Tv, Wv, t && Ov),
            children: [
                s && e.jsx('div', { className: zv }),
                e.jsx('div', { className: Vv, children: R.strings.battle_pass.progression.postProgressionDescr() }),
                s && e.jsx('div', { className: Fv }),
            ],
        }),
    Hv = t.forwardRef(
        (
            { isWide: s = !1, isDisappeared: r = !1, tooltipBody: i, tooltipTitle: n, chapterStep: o, mixClass: l },
            c,
        ) => {
            const d = t.useRef(null);
            t.useImperativeHandle(c, () => ({
                width: () => {
                    const e = d.current;
                    if (e) {
                        const a = window.getComputedStyle(e, null).getPropertyValue('width');
                        return Number(a.split('rem')[0]);
                    }
                    return 0;
                },
            }));
            const _ = e.jsx(B, {
                text: R.strings.battle_pass.tooltips.postProgress.body(),
                binding: { chapterStep: o },
            });
            return e.jsx('div', {
                className: a(Iv, l),
                ref: d,
                children: e.jsx('div', {
                    className: a(Pv, s && Bv, !s && Rv),
                    children: s
                        ? e.jsx(Ye, {
                              body: i,
                              header: n,
                              isEnabled: 'string' == typeof i,
                              children: e.jsx('div', {
                                  className: Ev,
                                  children: e.jsx($v, { isWide: s, isDecorated: !0 }),
                              }),
                          })
                        : e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx('div', {
                                      className: Av,
                                      children: e.jsx(Ye, {
                                          header: R.strings.battle_pass.tooltips.postProgress.header(),
                                          body: _,
                                          children: e.jsx($v, { isWide: s }),
                                      }),
                                  }),
                                  e.jsx(_t, {
                                      contentId: R.views.mono.battle_pass.tooltips.lock_icon('resId'),
                                      children: e.jsx('div', {
                                          className: a(Tv, Dv),
                                          children: R.strings.battle_pass.progression.premiumProgressionDescr(),
                                      }),
                                  }),
                                  e.jsx('div', {
                                      className: a(Tv, Lv, r && Mv),
                                      children: R.strings.battle_pass.progression.baseProgressionDescr(),
                                  }),
                              ],
                          }),
                }),
            });
        },
    ),
    Uv = 'LoupeButton_d966f396',
    Gv = 'LoupeButton_icon_bfb9d784',
    qv = 'LoupeButton_iconHover_22ab079c',
    Xv = 'LoupeButton_hoverArea_fa5a9428',
    Zv = ({ onClick: s, hoverAreaClasses: r }) => {
        const i = t.useCallback(() => z.sound(R.sounds.highlight()), []),
            n = t.useCallback(() => {
                (z.sound(R.sounds.play()), s());
            }, [s]),
            o = a(Xv, r);
        return e.jsxs('div', {
            className: Uv,
            onClick: n,
            onMouseEnter: i,
            children: [
                e.jsx('div', { className: Gv }),
                e.jsx('div', { className: qv }),
                r && e.jsx('div', { className: o }),
            ],
        });
    },
    Kv = 'VehicleInfo_c9c556fb',
    Yv = 'VehicleInfo_prefix_da97ceb4',
    Qv = 'VehicleInfo_type_514b50be',
    Jv = R.strings.battle_pass.progression.widget3dStyle,
    ex = t.memo(({ vehicleLvl: a, vehicleName: s, vehicleType: r, isElite: i }) => {
        const n = t.useMemo(() => {
            const e = vt(r);
            return {
                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${e}${i ? '_elite' : ''}`)})`,
            };
        }, [r, i]);
        return e.jsxs('div', {
            className: Kv,
            children: [
                e.jsx('div', { className: Yv, children: Jv.forVehicle() }),
                Vt(a),
                e.jsx('div', { className: Qv, style: n }),
                s,
            ],
        });
    }),
    ax = 'Widget3dStyle_a34c3929',
    tx = 'Widget3dStyle_title_d5bd52fc',
    sx = 'Widget3dStyle_base__closedChapter_9577883c',
    rx = 'Widget3dStyle_box_7d47e858',
    ix = 'Widget3dStyle_light_afd0e007',
    nx = 'Widget3dStyle_image_37b4439c',
    ox = 'Widget3dStyle_previewButton_42e4e473',
    lx = 'Widget3dStyle_box__hovered_9577883c',
    cx = 'Widget3dStyle_footer_ff3bf09e',
    dx = 'Widget3dStyle_caption_cc553073',
    _x = R.strings.battle_pass.progression.widget3dStyle,
    ux = n(({ widget3dStyleRef: s, level: r, isShowTitle: i }) => {
        const [n, o] = t.useState(!1),
            { controls: l, model: c } = Ff(),
            { chapterState: d, isStyleTaken: _ } = c.root.get(),
            { styleName: u, styleId: m } = c.widget3dStyle.get(),
            {
                breakpoint: { weight: p },
            } = F(),
            b = ((e, a) => (2 !== a ? (e <= $.small.weight ? '_small' : '_medium') : ''))(p, viewEnv.getScale()),
            h = zt(r, m, b),
            f = e.jsx(B, { text: _x.currentStyle(), binding: { name: u } }),
            g = t.useCallback(() => {
                l.open3dStylePreview(r);
            }, [l, r]);
        return e.jsxs('div', {
            className: a(ax, d === Af.Completed && sx),
            ref: s,
            children: [
                !_ && i && e.jsx('div', { className: tx, children: _x.titleNoChapterSelected() }),
                e.jsxs('div', {
                    className: a(rx, n && lx),
                    onMouseEnter: () => o(!0),
                    onMouseLeave: () => o(!1),
                    children: [
                        !_ && r === Yw && e.jsx('div', { className: ix }),
                        e.jsx('div', { className: nx, style: h }),
                        e.jsx('div', { className: ox, children: e.jsx(Zv, { onClick: g }) }),
                    ],
                }),
                e.jsxs('div', {
                    className: cx,
                    children: [
                        e.jsx('div', { className: dx, children: f }),
                        e.jsx(ex, { ...c.widget3dStyleVehicleInfo.get() }),
                    ],
                }),
            ],
        });
    }),
    mx = ({
        level: e,
        levelWidth: a,
        currentLevelWidth: t,
        pointsInLevel: s,
        totalPointsInLevel: r,
        currentLevel: i,
    }) => (e > i ? t + a * (e - 2) + a * (s / r) : (e - 1) * a + t * (s / r)),
    px = (e) => e + 1,
    bx = n(
        ({
            api: a,
            progressChange: s,
            levelWidth: r,
            currentLevelWidth: i,
            level: n,
            previousLevel: o,
            currentPointsInLevel: l,
            previousPointsInLevel: c,
            currentPointsInChapter: d,
            previousPointsInChapter: _,
            theme: u,
        }) => {
            const { model: m } = Ff(),
                { isPaused: p, showLevelsAnimations: b, currentLevel: h } = m.root.get(),
                f = m.levels.get(),
                [g, v] = t.useState(0),
                x = t.useRef(-1),
                [{ previousBaseEarnedPoints: w, maxBasePoints: C, baseProgressionSize: y }, j] = t.useState({
                    previousBaseEarnedPoints: 0,
                    maxBasePoints: 0,
                    baseProgressionSize: 0,
                });
            t.useEffect(() => {
                if (p) return;
                const e = x.current !== _,
                    a = e ? o : n,
                    t = i + (f.length - 1) * r,
                    s = f[a - 1],
                    u = n <= f.length ? n - 1 : f.length - 1,
                    m = f[u].value.levelPoints,
                    b = mx({
                        level: n,
                        levelWidth: r,
                        currentLevelWidth: i,
                        pointsInLevel: l,
                        totalPointsInLevel: m,
                        currentLevel: h,
                    }),
                    g = s ? s.value.levelPoints : 0,
                    v = mx({
                        level: a > n ? n : a,
                        levelWidth: r,
                        currentLevelWidth: a < h ? r : i,
                        pointsInLevel: c,
                        totalPointsInLevel: g,
                        currentLevel: h,
                    }),
                    w = e && a <= n ? v : b;
                (_ !== d && r && (x.current = _),
                    j({ maxBasePoints: t, previousBaseEarnedPoints: w, baseProgressionSize: b }));
            }, [p, r, i, n, o, d, c, l, _, h, f]);
            const S = t.useMemo(
                () => ({
                    ...L,
                    withStack: !0,
                    type: T.Simple,
                    delta: { duration: 400, delay: 300 },
                    line: { duration: 400, delay: 300 },
                }),
                [],
            );
            return (
                t.useEffect(() => {
                    const e = h !== o || l !== c;
                    if (!b && (e || d === _))
                        return e && -1 === x.current
                            ? K(() => {
                                  v(px);
                              }, 700)
                            : void 0;
                    v(px);
                }, [d, _, b]),
                t.useEffect(() => {
                    if (b)
                        return te(() => {
                            s && s();
                        });
                }, [s, b]),
                e.jsx(pt, { animationSettings: S, deltaFrom: w, value: y, maxValue: C || void 0, api: a, theme: u }, g)
            );
        },
    ),
    hx = {
        base: 'Progression_1b76c395',
        base__isLayoutWithExtraWidget: 'Progression_base__isLayoutWithExtraWidget_61efd8f5',
        scrollWrapper: 'Progression_scrollWrapper_5d6c50f7',
        wrapper: 'Progression_wrapper_2d700f2',
        progressContainer: 'Progression_progressContainer_bf13204b',
        progress: 'Progression_progress_f2c8d04a',
        progress__inactive: 'Progression_progress__inactive_884002f1',
        progressBackground: 'Progression_progressBackground_58b1a303',
        progressBackground__finished: 'Progression_progressBackground__finished_335b0244',
        decor: 'Progression_decor_158cf9e5',
        decorBackground: 'Progression_decorBackground_da5971de',
        decor__left: 'Progression_decor__left_61efd8f5',
        row: 'Progression_row_2b2744bc',
        row__basic: 'Progression_row__basic_db90f79e',
        bookmark: 'Progression_bookmark_adda18c9',
        bookmark__start: 'Progression_bookmark__start_e45cdc98',
        bookmarkLeftFixed: 'Progression_bookmarkLeftFixed_87985cd2',
        bookmarkLeftFixed__active: 'Progression_bookmarkLeftFixed__active_3d829e66',
        bookmarkLeftResponsive: 'Progression_bookmarkLeftResponsive_f380dd1b',
        bookmarkBackground: 'Progression_bookmarkBackground_3695986',
        scrollToButton: 'Progression_scrollToButton_b51d1a4f',
        scrollToButton__visible: 'Progression_scrollToButton__visible_750807fe',
        scrollToButton__forward: 'Progression_scrollToButton__forward_f3d60cf3',
        scrollToButton__backward: 'Progression_scrollToButton__backward_d30703b1',
        arrowButton: 'Progression_arrowButton_fe2d3e38',
        shadow: 'Progression_shadow_aeeafbe',
        shadow__left: 'Progression_shadow__left_7a5e7f90',
        shadow__right: 'Progression_shadow__right_b09b06b4',
        additionalShadow: 'Progression_additionalShadow_19983a68',
        additionalShadow__active: 'Progression_additionalShadow__active_3d829e66',
        scrollBarPosition: 'Progression_scrollBarPosition_31bb147f',
    },
    fx = R.strings.battle_pass.tooltips.progression.freePoints,
    gx = n(({ progressApi: t, freePointsApi: s, levelWidth: r, currentLevelWidth: i, progressChange: n }) => {
        const { model: o } = Ff(),
            {
                chapterState: l,
                currentLevel: c,
                previousLevel: d,
                currentPointsInLevel: _,
                previousPointsInLevel: u,
                currentPointsInChapter: m,
                previousPointsInChapter: p,
                freePointsInLevel: b,
                freePointsInChapter: h,
                previousFreePointsInChapter: f,
                previousFreePointsInLevel: g,
                potentialLevel: v,
                previousPotentialLevel: x,
            } = o.root.get(),
            w = o.levels.get(),
            C = ke(),
            y = (l === Af.NotStarted || l === Af.Paused) && h - m > 0,
            j = o.computes.getTotalLevelPoints(),
            S = o.computes.getCurrentWidth(r, i, C, j),
            N = m >= w.length * j,
            k = {
                '--progress-line-base': W.line.bgColorBase,
                '--progress-line-disabled': W.line.bgColorDisabled,
                '--progress-line-finished': W.line.bgColorFinished,
            };
        return e.jsxs('div', {
            className: hx.progressContainer,
            children: [
                y &&
                    e.jsx(Ye, {
                        header: fx.header(),
                        body: fx.body(),
                        children: e.jsx('div', {
                            className: hx.progress,
                            children: e.jsx(bx, {
                                api: s,
                                progressChange: n,
                                levelWidth: r,
                                currentLevelWidth: i,
                                level: v,
                                previousLevel: x,
                                currentPointsInLevel: b,
                                previousPointsInLevel: g,
                                currentPointsInChapter: h,
                                previousPointsInChapter: f,
                                theme: Ct,
                            }),
                        }),
                    }),
                e.jsx('div', {
                    className: a(hx.progressBackground, N && hx.progressBackground__finished),
                    style: { width: `${S}rem`, ...k },
                }),
                e.jsx(_t, {
                    contentId: R.views.mono.battle_pass.tooltips.bp_points('resId'),
                    children: e.jsx('div', {
                        className: a(hx.progress, y && hx.progress__inactive),
                        children: e.jsx(bx, {
                            api: t,
                            levelWidth: r,
                            currentLevelWidth: i,
                            level: c,
                            previousLevel: d,
                            currentPointsInLevel: _,
                            previousPointsInLevel: u,
                            currentPointsInChapter: m,
                            previousPointsInChapter: p,
                            progressChange: n,
                        }),
                    }),
                }),
            ],
        });
    }),
    vx = 'Background_3985f66b',
    xx = 'Background_default_6d3ad0aa',
    wx = 'Background_base__premium_26effab7',
    Cx = 'Background_rare_927afb2',
    yx = 'Background_rareBg_af0bac1',
    jx = 'Background_pattern_f3c44da',
    Sx = 'Background_pattern__left_910cb7b6',
    Nx = 'Background_pattern__right_9077c0df',
    kx = 'Background_pattern__leftIndent_508a3857',
    Ix = 'Background_pattern__rightIndent_db46b63f',
    Px = 'Background_pattern__completed_51752ce4',
    Rx = 'Background_disabled_12f45c1c',
    Bx = 'Background_inProgress_f241145e',
    Ax = 'Background_inProgressInner_eca44a42',
    Ex = 'Background_inProgressPart_886e2046',
    Tx = 'Background_inProgressPart__left_6b695373',
    Lx = 'Background_inProgressPart__right_cb03c83d',
    Dx = (e) => `url(R.images.gui.maps.icons.battlePass.progression.pattern_rare_${e})`,
    Wx = n(({ level: t, isPremium: s = !1 }) => {
        const { model: r } = Ff(),
            { cardStatus: i, isRare: n, isDisabled: o } = r.computes.cardStates(t, s),
            l =
                i.current !== Df.IN_PROGRESS &&
                ((e, a) => {
                    switch (e) {
                        case Df.NOT_STARTED:
                            return a;
                        case Df.COMPLETED:
                            return !a;
                        default:
                            return (console.warn(`Unsupported status for isIndent: ${e}`), !1);
                    }
                })(i.current, s);
        return e.jsxs('div', {
            className: a(vx, s && wx),
            children: [
                e.jsx('div', { className: xx }),
                o && e.jsx('div', { className: Rx }),
                i.current === Df.IN_PROGRESS &&
                    e.jsxs('div', {
                        className: Bx,
                        children: [
                            e.jsx('div', { className: a(Ex, Tx) }),
                            !s && e.jsx('div', { className: Ax }),
                            e.jsx('div', { className: a(Ex, Lx) }),
                        ],
                    }),
                n &&
                    e.jsxs('div', {
                        className: Cx,
                        children: [
                            e.jsx('div', {
                                className: a(jx, Sx, l && kx, i.current === Df.COMPLETED && Px),
                                style: { backgroundImage: Dx('left') },
                            }),
                            e.jsx('div', {
                                className: a(jx, Nx, !l && Ix, i.current === Df.COMPLETED && Px),
                                style: { backgroundImage: Dx('right') },
                            }),
                            i.current === Df.NOT_STARTED && e.jsx('div', { className: yx }),
                        ],
                    }),
            ],
        });
    }),
    Ox = 'ClosedStatus_659358dc',
    Mx = 'ClosedStatus_icon_26722519',
    Vx = 'ClosedStatus_icon__current_d82fe3b3',
    zx = 'ClosedStatus_icon__exit_70d0e6c0',
    Fx = 'ClosedStatus_icon__exitActive_6e4d1395',
    $x = 'ClosedStatus_icon__exitCurrentActive_add31c82',
    Hx = 'ClosedStatus_icon__exitDone_694aab32',
    Ux = 'ClosedStatus_title_9c1acbb0',
    Gx = 'ClosedStatus_title__exit_29b67eb8',
    qx = 'ClosedStatus_title__exitActive_3d936f93',
    Xx = 'ClosedStatus_title__exitDone_694aab32',
    Zx = n(({ level: s, playUnlockAnimation: r = !1, handleUnlockAnimationExited: i, baseUnlockProps: n }) => {
        const o = t.useRef(null),
            l = t.useRef(null),
            { model: c } = Ff(),
            { isBattlePassPurchased: d } = c.root.get(),
            { cardStatus: _ } = c.computes.cardStates(s, !0),
            u = _.current === Df.IN_PROGRESS,
            m = { exit: zx, exitActive: u ? $x : Fx, exitDone: Hx },
            p = { exit: Gx, exitActive: qx, exitDone: Xx },
            b = !d || r,
            h = u && b;
        return e.jsxs('div', {
            className: Ox,
            children: [
                b &&
                    e.jsx(S, {
                        ...n,
                        nodeRef: o,
                        classNames: m,
                        onExited: i,
                        children: e.jsx('div', { ref: o, className: a(Mx, u && Vx) }),
                    }),
                h &&
                    e.jsx(S, {
                        ...n,
                        nodeRef: l,
                        classNames: b ? p : {},
                        children: e.jsx('div', {
                            ref: l,
                            className: Ux,
                            children: R.strings.battle_pass.progression.currentStepLocked(),
                        }),
                    }),
            ],
        });
    }),
    Kx = 'CompletedStatus_cd7b3965',
    Yx = 'CompletedStatus_base__showAnimation_b386bcdc',
    Qx = 'CompletedStatus_iconGlow__completedEnter_8876529f',
    Jx = 'CompletedStatus_iconGlow__completedEnterActive_81bf80a4',
    ew = 'CompletedStatus_iconGlow__completedEnterDone_36f61f63',
    aw = 'CompletedStatus_icon_a8f57fb0',
    tw = ({ completedIn: s, handleCompleteGlowAnimationExited: r, children: i }) => {
        const n = t.useRef(null),
            o = { exit: Qx, exitActive: Jx, exitDone: ew };
        return e.jsxs('div', {
            className: a(Kx, s && Yx),
            children: [
                e.jsx(S, {
                    in: !s,
                    nodeRef: n,
                    timeout: vw,
                    classNames: o,
                    onExited: r,
                    children: e.jsx('div', { ref: n, children: i }),
                }),
                e.jsx(Ye, { body: xw.tooltips.completed.got(), children: e.jsx('div', { className: aw }) }),
            ],
        });
    },
    sw = {
        base: 'CurrentPoints_4c27ce16',
        value__current: 'CurrentPoints_value__current_9c51dee4',
        value__total: 'CurrentPoints_value__total_99fac246',
        divider: 'CurrentPoints_divider_83c77e4c',
        icon: 'CurrentPoints_icon_6b371e14',
    },
    rw = n(() => {
        const {
                model: { computes: t },
            } = Ff(),
            { current: s, total: r } = t.currentLevelPoints();
        return e.jsx(_t, {
            ignoreShowDelay: !0,
            contentId: R.views.mono.battle_pass.tooltips.bp_points('resId'),
            children: e.jsxs('div', {
                className: sw.base,
                children: [
                    e.jsx('div', { className: a(sw.value, sw.value__current), children: s }),
                    e.jsx('div', { className: sw.divider, children: '/' }),
                    e.jsx('div', { className: a(sw.value, sw.value__total), children: r }),
                    e.jsx('div', { className: sw.icon }),
                ],
            }),
        });
    }),
    iw = 'Effects_glowWrapper_efa5ae0d',
    nw = 'Effects_glow_75ba9df8',
    ow = 'Effects_glow__active_b9e151',
    lw = 'Effects_dust_f4cf542',
    cw = 'Effects_dust__active_ece15182',
    dw = ({ baseUnlockProps: a }) => {
        const s = t.useRef(null),
            r = t.useRef(null),
            i = { exit: nw, exitActive: ow, exitDone: nw },
            n = { exit: lw, exitActive: cw, exitDone: lw };
        return e.jsxs('div', {
            children: [
                e.jsx(S, {
                    ...a,
                    nodeRef: s,
                    classNames: i,
                    children: e.jsx('div', { ref: s, className: iw, children: e.jsx('div', { className: nw }) }),
                }),
                e.jsx(S, {
                    ...a,
                    nodeRef: r,
                    classNames: n,
                    children: e.jsx('div', { ref: r, className: iw, children: e.jsx('div', { className: lw }) }),
                }),
            ],
        });
    },
    _w = 'Status_5c99d05d',
    uw = 'Status_base__inProgress_21b2f358',
    mw = 'Status_iconContainer_7da53d2b',
    pw = 'Status_iconInner_9a38fa07',
    bw = 'Status_iconGlow_e61b8bfb',
    hw = 'Status_iconGlow__completed_1ceaf83f',
    fw = 'Status_iconGlow__hidden_5ce2d06a',
    gw = 'Status_pointsWrapper_6042cf48',
    vw = 1500,
    xw = R.strings.battle_pass,
    ww = R.views.mono.battle_pass,
    Cw = n(
        ({
            isPremium: s,
            playCompleteAnimation: r,
            playUnlockAnimation: i,
            completeAnimationDelay: n = 0,
            unlockAnimationDelay: o = 0,
            baseTimeout: l = 0,
            playUnlockAnimationSound: c = !0,
            playCompleteAnimationSound: d = !0,
            onAnimationDone: _,
            initialAnimationDelay: u,
            completedDuration: m,
            level: p,
        }) => {
            const { model: b } = Ff(),
                { cardStatus: h, isDisabled: f } = b.computes.cardStates(p, s),
                g = b.computes.isRewardNeedTake(p, s),
                [v, x] = t.useState(!1),
                [w, C] = t.useState(!1),
                [y, j] = t.useState(!0),
                [S, N] = t.useState(!1),
                k = h.current === Df.COMPLETED && !g && !f,
                I = (f && s) || k || i,
                P = !s && h.current === Df.IN_PROGRESS && h.potential !== Df.COMPLETED,
                R = () => {
                    (d && z.sound(Wf.IMPROVED_REWARD), x(!0));
                };
            (t.useEffect(
                () =>
                    i
                        ? K(() => {
                              (j(!1),
                                  c &&
                                      !S &&
                                      (h.current === Df.IN_PROGRESS
                                          ? z.sound(Wf.UNLOCK_BIG)
                                          : z.sound(Wf.UNLOCK_SMALL)));
                          }, u + o)
                        : r
                          ? (C(!0),
                            K(() => {
                                (C(!1), R());
                            }, u + n))
                          : void (w && C(!1)),
                [i, r, w],
            ),
                t.useEffect(() => {
                    if (r && S)
                        return K(() => {
                            R();
                        }, n);
                }, [r, S]));
            const B = () => {
                    (!r && _ && _(), N(!0));
                },
                A = { in: y, timeout: vw + l };
            return e.jsxs('div', {
                className: a(_w, h.current === Df.IN_PROGRESS && uw),
                style: { '--animation-duration': `${m}ms` },
                children: [
                    I &&
                        e.jsxs('div', {
                            className: mw,
                            children: [
                                ((!r && k) || (v && !g)) &&
                                    e.jsx(tw, {
                                        completedIn: v,
                                        handleCompleteGlowAnimationExited: () => {
                                            w && C(!1);
                                        },
                                        children: e.jsx('div', { className: a(bw, hw, w && fw) }),
                                    }),
                                !r &&
                                    !i &&
                                    f &&
                                    s &&
                                    e.jsx(_t, {
                                        isEnabled: s,
                                        contentId: ww.tooltips.lock_icon('resId'),
                                        children: e.jsx('div', {
                                            children: e.jsx(Zx, {
                                                level: p,
                                                baseUnlockProps: A,
                                                playUnlockAnimation: i,
                                                handleUnlockAnimationExited: B,
                                            }),
                                        }),
                                    }),
                                i &&
                                    !S &&
                                    e.jsx(_t, {
                                        contentId: ww.tooltips.lock_icon('resId'),
                                        children: e.jsxs('div', {
                                            className: pw,
                                            children: [
                                                e.jsx(Zx, {
                                                    level: p,
                                                    baseUnlockProps: A,
                                                    playUnlockAnimation: i,
                                                    handleUnlockAnimationExited: B,
                                                }),
                                                h.current === Df.IN_PROGRESS && e.jsx(dw, { baseUnlockProps: A }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    P && e.jsx('div', { className: gw, children: e.jsx(rw, {}) }),
                ],
            });
        },
    ),
    yw = {
        root: 'Stage_root_68142ff2',
        base: 'Stage_7c79af8a',
        base__rewardTaken: 'Stage_base__rewardTaken_a669b795',
        number: 'Stage_number_1d4a1a4c',
        animatedNumber: 'Stage_animatedNumber_3b1e34e9',
        numberInProgress: 'Stage_numberInProgress_d91be11d',
        title: 'Stage_title_a5ffe511',
        glow: 'Stage_glow_cc400fdf',
        base__inProgress: 'Stage_base__inProgress_68142ff2',
        animatedGlow: 'Stage_animatedGlow_4243426d',
        iconFinal: 'Stage_iconFinal_b5e7d2e',
        fadeInWithScale: 'Stage_fadeInWithScale_68142ff2',
        slideUp: 'Stage_slideUp_68142ff2',
        blink: 'Stage_blink_68142ff2',
        scale: 'Stage_scale_68142ff2',
        rotate: 'Stage_rotate_68142ff2',
        windowIn: 'Stage_windowIn_68142ff2',
        fadeOut: 'Stage_fadeOut_68142ff2',
        fadeIn: 'Stage_fadeIn_68142ff2',
    },
    jw = R.strings.battle_pass.progression,
    Sw = n(({ stepNumber: i, stageAnimationDelay: n, isRewardAnimationActive: o }) => {
        const { model: l, controls: c } = Ff(),
            { chapterState: d, showLevelsAnimations: _ } = l.root.get(),
            [u, m] = t.useState(!1),
            { cardStatus: p } = l.computes.cardStates(i, !1),
            b = l.computes.isRewardNeedTake(i, !1) || l.computes.isRewardNeedTake(i, !0),
            h = l.computes.levelInfo(i).maxLevel === i,
            f = p.current === Df.IN_PROGRESS,
            g = d === Af.NotStarted || d === Af.Paused,
            v = p.current === Df.COMPLETED && !b && !o,
            { stageOpacity: x } = s({
                from: { stageOpacity: u ? 1 : 0 },
                to: { stageOpacity: 0 },
                delay: 0,
                onStart: () => z.sound(R.sounds.bp_current_phase()),
                config: { duration: 750, easing: Wt },
            }),
            { sparkOpacity: w } = s({
                from: { sparkOpacity: u ? 1 : 0 },
                to: { sparkOpacity: 0 },
                delay: 1100,
                onRest: () => m(!1),
                config: { duration: 1500, easing: Wt },
            });
        return (
            t.useEffect(() => {
                if (_ && f)
                    return K(() => {
                        (m(!0), c.finishLevelsAnimation());
                    }, n + 100);
            }, [_, f, n]),
            e.jsxs('div', {
                className: a(yw.base, yw[`base__${p.current}`], v && yw.base__rewardTaken),
                children: [
                    f &&
                        !g &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx('div', { className: yw.glow }),
                                e.jsx(r.div, { style: { opacity: w }, className: yw.animatedGlow }),
                            ],
                        }),
                    h && e.jsx('div', { className: yw.iconFinal }),
                    f
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  e.jsxs('div', {
                                      className: yw.numberInProgress,
                                      children: [
                                          i,
                                          e.jsx(r.div, {
                                              style: {
                                                  opacity: x,
                                                  transform: x
                                                      .to([0, 1], [2.5, 1])
                                                      .to((e) => `translate(-50%, -50%) scale(${e})`),
                                              },
                                              className: yw.animatedNumber,
                                              children: i,
                                          }),
                                      ],
                                  }),
                                  e.jsx('div', {
                                      className: yw.title,
                                      children: g ? jw.pausedStep() : jw.currentStep(),
                                  }),
                              ],
                          })
                        : e.jsx('div', { className: yw.number, children: i }),
                ],
            })
        );
    }),
    Nw = {
        root: 'Rewards_root_405577a5',
        base: 'Rewards_70f08a68',
        base__column: 'Rewards_base__column_a9c4b33d',
        base__inProgress: 'Rewards_base__inProgress_d0a3b9e5',
        reward: 'Rewards_reward_3ab9772c',
        base__tripleDefault: 'Rewards_base__tripleDefault_405577a5',
        reward__0: 'Rewards_reward__0_405577a5',
        reward__2: 'Rewards_reward__2_ab1f8587',
        base__reverse: 'Rewards_base__reverse_405577a5',
        base__tripleInProgress: 'Rewards_base__tripleInProgress_405577a5',
        reward__1: 'Rewards_reward__1_804d2a62',
        base__single: 'Rewards_base__single_405577a5',
        shine: 'Rewards_shine_353df8a9',
        base__animated: 'Rewards_base__animated_405577a5',
        fadeIn: 'Rewards_fadeIn_405577a5',
        rewardInner: 'Rewards_rewardInner_cdaabcb1',
        changeReward: 'Rewards_changeReward_405577a5',
        staticShine: 'Rewards_staticShine_6885b0f2',
        explosion: 'Rewards_explosion_20cd9d55',
        preview: 'Rewards_preview_4455ca2',
        iconButton: 'Rewards_iconButton_1f79ae3',
        fadeInWithScale: 'Rewards_fadeInWithScale_405577a5',
        slideUp: 'Rewards_slideUp_405577a5',
        blink: 'Rewards_blink_405577a5',
        scale: 'Rewards_scale_405577a5',
        rotate: 'Rewards_rotate_405577a5',
        windowIn: 'Rewards_windowIn_405577a5',
        fadeOut: 'Rewards_fadeOut_405577a5',
    },
    kw = i((e) => {
        const { item: a, name: t, value: s, overlayType: r, tooltipId: i, tooltipContentId: n, id: o, icon: l } = e;
        return {
            id: o,
            icon: l,
            name: a || t,
            smallImage: dt(e, U.Big),
            bigImage: dt(e, U.S180x135),
            special: r,
            value: s,
            valueType: ct(t),
            tooltipArgs: lt({ tooltipId: i }, Number(n), { ignoreShowDelay: !0 }),
        };
    }),
    Iw = n(({ isPremium: s, levelNum: r, hasAnimation: i }) => {
        const {
                breakpoint: { weight: n },
            } = F(),
            { model: o, controls: l } = Ff(),
            { cardStatus: c } = o.computes.cardStates(r, s),
            d = o.computes.isRewardNeedTake(r, s),
            _ = o.computes.levelRewardItems(r, !0),
            u = o.computes.levelRewardItems(r, !1),
            m = s ? u : _,
            [p, b] = t.useState(m),
            h = c.current === Df.IN_PROGRESS,
            f = t.useRef(!1);
        t.useEffect(() => {
            if (f.current) return K(() => b(m), 1e3);
            f.current = !0;
        }, [m, f]);
        return e.jsx('div', {
            className: a(
                Nw.base,
                h && Nw.base__inProgress,
                s && Nw.base__reverse,
                i && Nw.base__animated,
                1 === m.length && Nw.base__single,
                2 === m.length && Nw.base__column,
                3 === m.length && (h ? Nw.base__tripleInProgress : Nw.base__tripleDefault),
            ),
            children: ae(p, (t, s) => {
                const r = kw(t),
                    o = r.name.includes(yt.StyleProgressToken) || r.name.includes(yt.BattlePassSelectToken),
                    c = (d && o) || i,
                    { size: _, image: u } = ((e) => {
                        const a = n < $.medium.weight;
                        return m.length > 1
                            ? a
                                ? { size: U.Small, image: e.smallImage }
                                : { size: U.Big, image: e.smallImage }
                            : a
                              ? { size: U.Big, image: e.smallImage }
                              : { size: U.S180x135, image: e.bigImage };
                    })(r);
                return e.jsxs(
                    'div',
                    {
                        className: a(Nw.reward, Nw[`reward__${s}`]),
                        children: [
                            c && e.jsx('div', { className: Nw.shine }),
                            i &&
                                e.jsxs(e.Fragment, {
                                    children: [
                                        e.jsx('div', { className: Nw.staticShine }),
                                        e.jsx('div', { className: Nw.explosion }),
                                    ],
                                }),
                            e.jsx(G, { size: _, image: u, className: Nw.rewardInner, ...r }),
                            r.icon === Mt.style &&
                                e.jsx('div', {
                                    className: Nw.preview,
                                    children: e.jsx(tt, {
                                        type: 'preview',
                                        size: 'normal',
                                        className: Nw.iconButton,
                                        onClick: () => l.onStyleBonusPreview(r.id),
                                    }),
                                }),
                        ],
                    },
                    `reward__${r.name}${s}`,
                );
            }),
        });
    }),
    Pw = 'CardRewards_50fb1177',
    Rw = 'CardRewards_base__completed_434ea7b1',
    Bw = n(({ levelNum: t, isRewardAnimationActive: s, isPremium: r = !1 }) => {
        const { model: i } = Ff(),
            { cardStatus: n, isDisabled: o } = i.computes.cardStates(t, r),
            l = i.computes.isRewardNeedTake(t, r),
            c = n.current === Df.COMPLETED && !l && !o && !s;
        return e.jsx('div', {
            className: a(Pw, c && Rw),
            children: e.jsx(Iw, { levelNum: t, isPremium: r, hasAnimation: s }),
        });
    }),
    Aw = 'CardContent_f26d7969',
    Ew = 'CardContent_status_b4751d54',
    Tw = 'CardContent_buttonHolder_5af6834d',
    Lw = 'CardContent_buttonLight_c4e99653',
    Dw = 'CardContent_buttonInner_331e7784',
    Ww = 'CardContent_buttonInner__disabled_df771be2',
    Ow = 'CardContent_button_3b7b5ae4',
    Mw = 'CardContent_button__disabled_d7ebe82e',
    Vw = 'CardContent_buttonBlink_4f39579b',
    zw = 'CardContent_buttonText_25c40fc',
    Fw = 100,
    $w = 1800,
    Hw = R.strings.battle_pass.progression,
    Uw = n(
        ({
            isPremium: s,
            stepNumber: r,
            onFinalAnimationDone: i,
            maxVisibleCards: n,
            showLevelsAnimations: o,
            showBuyAnimations: l,
        }) => {
            const {
                    model: c,
                    controls: { finishAnimation: d, takeReward: _ },
                } = Ff(),
                { isBattlePassPurchased: u, currentLevel: m, previousLevel: p } = c.root.get(),
                {
                    needTakePaid: b,
                    needTakeFree: h,
                    isFreeRewardChoiceEnabled: f,
                    isPaidRewardChoiceEnabled: g,
                } = c.computes.levelInfo(r),
                { cardStatus: v } = c.computes.cardStates(r, s),
                x = c.computes.isRewardNeedTake(r, s),
                w = v.current === Df.IN_PROGRESS,
                C = v.current === Df.COMPLETED,
                [y, j] = t.useState(!1),
                [S, N] = t.useState(!1),
                {
                    breakpoint: { weight: R },
                } = F(),
                B = R <= $.small.weight ? I.extraSmall : I.small,
                A = t.useRef(x),
                E = A.current;
            (t.useEffect(() => {
                A.current = x;
            }),
                t.useEffect(() => {
                    if (E && !x) {
                        const e = K(() => {
                                (j(!1), d());
                            }, $w),
                            a = K(() => {
                                N(!1);
                            }, 2300);
                        return (
                            j(!0),
                            N(!0),
                            () => {
                                (e(), a());
                            }
                        );
                    }
                }, [x]));
            const T = (() => {
                    let e,
                        a = 0,
                        t = 0,
                        c = 0,
                        d = 0,
                        _ = !1,
                        b = !1,
                        h = !1,
                        f = 300 * Math.ceil(m / 25);
                    if (n && l && u) {
                        const e = Math.floor(0.5 * n);
                        let s = m - e,
                            i = m + e,
                            o = 0;
                        s <= 0 && ((o = 1 - s), (i += o), (s = 1));
                        const l = r < m && r >= s,
                            c = r > m && r <= i,
                            u = r === s;
                        (l ? (a = (r - s + 1) * Fw) : c && (a = (r - s) * Fw),
                            (_ = Boolean(w || l || c || u)),
                            (b = Boolean(w || u)),
                            (h = Boolean(C && _)),
                            (t = (n - o - 1) * Fw),
                            w && (d = (r - s + 1) * Fw * 2.5));
                    }
                    if (n && o) {
                        const a = Math.min(m - p, Math.floor(0.5 * n));
                        let l = m - a;
                        l <= 0 && (l = 1);
                        const d = r < m && r >= l;
                        (d && ((t = (r - l + 1) * Fw), s && (t += Fw)),
                            (h = Boolean(C && d)),
                            (c = a * Fw + Fw * Math.trunc(a / 2) + f),
                            o && (e = i));
                    }
                    return (
                        S && ((f = 0), (t = $w), (h = Boolean(C))),
                        r === m - 1 && (e = i),
                        {
                            baseTimeout: d,
                            playCompleteAnimation: h,
                            playCompleteAnimationSound: h,
                            playUnlockAnimation: _,
                            playUnlockAnimationSound: b,
                            unlockAnimationDelay: a,
                            onAnimationDone: e,
                            completeAnimationDelay: t,
                            stageAnimationDelay: c,
                            initialAnimationDelay: f,
                        }
                    );
                })(),
                L = Y(() => {
                    _({ level: r });
                }),
                D = h || b,
                W = D && !(f || g);
            return e.jsxs('div', {
                className: Aw,
                children: [
                    !s &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx(Sw, {
                                    stepNumber: r,
                                    stageAnimationDelay: T.stageAnimationDelay,
                                    isRewardAnimationActive: y,
                                }),
                                D &&
                                    e.jsx(Ye, {
                                        isEnabled: W,
                                        body: Hw.btnRewardsUnavailable(),
                                        children: e.jsxs('div', {
                                            className: Tw,
                                            children: [
                                                !W && e.jsx('div', { className: Lw }),
                                                e.jsx('div', {
                                                    className: a(Dw, W && Ww),
                                                    children: e.jsxs(k, {
                                                        type: P.ghost,
                                                        size: B,
                                                        disabled: W,
                                                        onClick: L,
                                                        mixClass: a(Ow, W && Mw),
                                                        children: [
                                                            !W && e.jsx('div', { className: Vw }),
                                                            e.jsx('div', { className: zw, children: Hw.takeReward() }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    e.jsx(Bw, { levelNum: r, isPremium: s, isRewardAnimationActive: y }),
                    e.jsx('div', {
                        className: Ew,
                        children: e.jsx(Cw, { isPremium: Boolean(s), completedDuration: 500, level: r, ...T }),
                    }),
                ],
            });
        },
    ),
    Gw = {
        root: 'Divider_root_76b1f722',
        base: 'Divider_e7aefb14',
        base__left: 'Divider_base__left_c4dc4b02',
        base__right: 'Divider_base__right_5c287de9',
        base__rare: 'Divider_base__rare_e403ffc2',
        base__completed: 'Divider_base__completed_e15d1358',
        base__premium: 'Divider_base__premium_edc64468',
        inner: 'Divider_inner_5e9c8eab',
        fadeInWithScale: 'Divider_fadeInWithScale_76b1f722',
        slideUp: 'Divider_slideUp_76b1f722',
        blink: 'Divider_blink_76b1f722',
        scale: 'Divider_scale_76b1f722',
        rotate: 'Divider_rotate_76b1f722',
        windowIn: 'Divider_windowIn_76b1f722',
        fadeOut: 'Divider_fadeOut_76b1f722',
        fadeIn: 'Divider_fadeIn_76b1f722',
    },
    qw = ({ position: t, isPremium: s = !1, isRare: r = !1, status: i }) =>
        e.jsx('div', {
            className: a(Gw.base, Gw[`base__${i}`], Gw[`base__${t}`], r && Gw.base__rare, s && Gw.base__premium),
            children: e.jsx('div', { className: Gw.inner }),
        }),
    Xw = {
        root: 'Card_root_f4c22d1c',
        base: 'Card_83a2cdb2',
        base__inProgress: 'Card_base__inProgress_cc79557f',
        base__nonPremium: 'Card_base__nonPremium_43e4be2f',
        totalPoints: 'Card_totalPoints_c960ba66',
        totalPoints__default: 'Card_totalPoints__default_86462962',
        totalPoints__final: 'Card_totalPoints__final_b0d756a8',
        progressShadow: 'Card_progressShadow_e0bd1d',
        fadeInWithScale: 'Card_fadeInWithScale_f4c22d1c',
        slideUp: 'Card_slideUp_f4c22d1c',
        blink: 'Card_blink_f4c22d1c',
        scale: 'Card_scale_f4c22d1c',
        rotate: 'Card_rotate_f4c22d1c',
        windowIn: 'Card_windowIn_f4c22d1c',
        fadeOut: 'Card_fadeOut_f4c22d1c',
        fadeIn: 'Card_fadeIn_f4c22d1c',
    },
    Zw = n(
        ({
            isPremium: s,
            stepNumber: r,
            maxLevels: i,
            maxVisibleCards: n,
            showBuyAnimations: o,
            showLevelsAnimations: l,
            onAnimationDone: c,
            levelRef: d,
        }) => {
            const { model: _ } = Ff(),
                { currentPointsInLevel: u, chapterState: m } = _.root.get(),
                { cardStatus: p, isRare: b } = _.computes.cardStates(r, s),
                { levelPoints: h } = _.computes.levelInfo(r),
                f = !s && (p.current === Df.COMPLETED || p.current === Df.IN_PROGRESS),
                g = 1 === r,
                v = r === i,
                x = g ? void 0 : _.computes.cardStates(r - 1, s),
                w = v ? void 0 : _.computes.cardStates(r + 1, s),
                C = t.useRef(null),
                y = s ? (r - 1) * h : h;
            t.useImperativeHandle(d, () => ({
                width: () => {
                    const e = C.current;
                    return e ? e.offsetWidth : void 0;
                },
                offsetLeft: () => {
                    const e = C.current;
                    return e ? e.offsetLeft : void 0;
                },
                getOffsetLeftInArea: () => {
                    const e = C.current;
                    if (!e) return 0;
                    const a = e.parentNode,
                        t = a ? a.offsetLeft : 0;
                    return e.offsetLeft + t;
                },
                getHTMLElement: () => C.current,
            }));
            const j =
                    !g &&
                    ((p.current === Df.NOT_STARTED && !b) ||
                        ((null == x ? void 0 : x.isRare) && p.current !== Df.IN_PROGRESS) ||
                        (null == x ? void 0 : x.cardStatus.current) === Df.IN_PROGRESS),
                S =
                    !v &&
                    ((p.current === Df.COMPLETED && !b) ||
                        ((null == w ? void 0 : w.isRare) && p.current !== Df.IN_PROGRESS) ||
                        (null == w ? void 0 : w.cardStatus.current) === Df.IN_PROGRESS),
                N = ((e, a, t, s) =>
                    e === Df.COMPLETED
                        ? 100
                        : e !== Df.IN_PROGRESS || (a !== Af.NotStarted && a !== Af.Paused)
                          ? 0
                          : (100 * t) / s)(p.current, m, u, y),
                k = { width: `${N}%` },
                I = {
                    '--small-card-width': '140rem',
                    '--small-current-card-width': '224rem',
                    '--big-card-width': '220rem',
                    '--big-current-card-width': '340rem',
                };
            return e.jsxs('div', {
                className: a(Xw.base, Xw[`base__${p.current}`], !s && Xw.base__nonPremium),
                ref: C,
                style: I,
                children: [
                    e.jsx(Wx, { level: r, isPremium: s }),
                    e.jsx(Uw, {
                        isPremium: s,
                        stepNumber: r,
                        maxVisibleCards: n,
                        showLevelsAnimations: l,
                        showBuyAnimations: o,
                        onFinalAnimationDone: c,
                    }),
                    s &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx('div', { className: a(Xw.totalPoints, Xw.totalPoints__default), children: y }),
                                v &&
                                    e.jsx('div', {
                                        className: a(Xw.totalPoints, Xw.totalPoints__final),
                                        children: i * h,
                                    }),
                            ],
                        }),
                    f && e.jsx('div', { className: Xw.progressShadow, style: k }),
                    !j && e.jsx(qw, { position: Lf.left, isPremium: s, isRare: b, status: p.current }),
                    !S && e.jsx(qw, { position: Lf.right, isPremium: s, isRare: b, status: p.current }),
                ],
            });
        },
    ),
    Kw = n(
        ({
            currentCardRef: s,
            freeProgressionCutCardRef: r,
            potentialLevelCardRef: i,
            isPremium: n,
            sectionKey: o,
            maxVisibleCards: l,
        }) => {
            const { model: c } = Ff(),
                {
                    chapterID: d,
                    currentLevel: _,
                    potentialLevel: u,
                    showBuyAnimations: m,
                    showLevelsAnimations: p,
                } = c.root.get(),
                b = c.levels.get(),
                [h, f] = t.useState(!1),
                g = () => {
                    f(!0);
                },
                v = Boolean(l && n && m),
                x = Boolean(l && p);
            return e.jsx('div', {
                className: a(hx.row, !n && hx.row__basic),
                children: ae(b, (a, t) => {
                    return e.jsx(
                        Zw,
                        {
                            showBuyAnimations: v && !h,
                            showLevelsAnimations: x,
                            levelRef: ((c = a.level), (m = _), (p = u), c === m ? s : c === p ? i : r),
                            stepNumber: a.level,
                            isPremium: n,
                            maxLevels: b.length,
                            maxVisibleCards: l,
                            onAnimationDone: g,
                        },
                        `${d}_${o}_${t}`,
                    );
                    var c, m, p;
                }),
            });
        },
    ),
    Yw = 1,
    Qw = n(
        ({
            currentCardRef: s,
            freeProgressionCutCardRef: r,
            potentialLevelCardRef: i,
            onProgressChanged: n,
            widget3dStyleLeftRef: o,
            shadowLipRef: l,
            api: c,
        }) => {
            const { model: d } = Ff(),
                { currentLevel: _, currentPointsInLevel: u, showLevelsAnimations: m } = d.root.get(),
                p = d.computes.isLayoutWithExtraWidget(),
                b = d.levels.get(),
                h = t.useRef(mt()),
                f = t.useRef(mt());
            c.current.moveProgressBars = (e) => {
                (h.current.update(e), f.current.update(e));
            };
            const [g, v] = t.useState({ levelWidth: 0, currentLevelWidth: 0, maxCardsShown: 0 }),
                x = t.useCallback(() => {
                    if (s.current) {
                        const e = s.current,
                            a = r.current,
                            t = e ? e.width() : 0,
                            i = a ? a.width() : 0;
                        return !i && t
                            ? { currentLevelWidth: t, levelWidth: 224 === t ? 140 : 220 }
                            : { currentLevelWidth: t, levelWidth: i };
                    }
                }, [s, r]),
                {
                    breakpoint: { weight: w },
                } = F();
            return (
                t.useEffect(() => {
                    Lt().then(() => {
                        const e = x();
                        if (e) {
                            const a =
                                Math.floor((viewEnv.getClientSizeRem().width - e.currentLevelWidth) / e.levelWidth) + 1;
                            v({ levelWidth: e.levelWidth, currentLevelWidth: e.currentLevelWidth, maxCardsShown: a });
                        }
                    });
                }, [w, x, b.length, _, u]),
                t.useEffect(() => {
                    m && z.sound(R.sounds.bp_progress_bar_start());
                }, [m]),
                t.useEffect(() => {
                    n && n();
                }, [_, u, n]),
                e.jsxs('div', {
                    className: hx.wrapper,
                    children: [
                        !p &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(ux, { widget3dStyleRef: o, level: Yw, isShowTitle: !0 }),
                                    e.jsx('div', {
                                        className: a(hx.decor, hx.decor__left),
                                        children: e.jsx('div', { className: hx.decorBackground }),
                                    }),
                                    e.jsx('div', {
                                        className: hx.bookmarkBackground,
                                        ref: l,
                                        children: e.jsx(Hv, { isDisappeared: !0, mixClass: hx.bookmarkLeftResponsive }),
                                    }),
                                ],
                            }),
                        e.jsxs('div', {
                            className: hx.section,
                            children: [
                                e.jsx(Kw, {
                                    sectionKey: 'baseCard',
                                    currentCardRef: s,
                                    freeProgressionCutCardRef: r,
                                    potentialLevelCardRef: i,
                                    maxVisibleCards: m ? g.maxCardsShown : 0,
                                    currentLevel: _,
                                }),
                                e.jsx(gx, { progressApi: h, freePointsApi: f, progressChange: n, ...g }),
                                e.jsx(Kw, {
                                    sectionKey: 'basePremiumCard',
                                    isPremium: !0,
                                    currentCardRef: s,
                                    freeProgressionCutCardRef: r,
                                    potentialLevelCardRef: i,
                                    maxVisibleCards: g.maxCardsShown,
                                    currentLevel: _,
                                }),
                            ],
                        }),
                        !p &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx('div', {
                                        className: hx.decor,
                                        children: e.jsx('div', { className: hx.decorBackground }),
                                    }),
                                    e.jsx(ux, { level: 4 }),
                                ],
                            }),
                    ],
                })
            );
        },
    ),
    Jw = { allowedButtons: [Sv.MainButton] },
    eC = R.strings.battle_pass.progression,
    aC = ['dragStart', 'dragEnd', 'dragging'],
    tC = n(({ onHorizontalScroll: s }) => {
        const { model: r } = Ff(),
            i = r.levels.get(),
            { currentLevel: n, isBattlePassPurchased: o, showBuyAnimations: l } = r.root.get(),
            c = t.useRef({ moveProgressBars: () => {} }),
            d = t.useRef(null),
            _ = t.useRef(null),
            u = t.useRef(null),
            m = t.useRef(null),
            p = t.useRef(null),
            b = t.useRef(null),
            h = t.useRef(null),
            f = t.useRef(0),
            g = r.computes.isLayoutWithExtraWidget(),
            [v, x] = t.useState('hidden'),
            [w, C] = t.useState('hidden'),
            [y, j] = t.useState(!1),
            [S, N] = t.useState(void 0),
            k = jt(),
            {
                animationScroll: { scrollPosition: I },
                applyScroll: P,
                events: R,
                handleMouseWheel: B,
                getContainerSize: A,
                getWrapperSize: E,
            } = k,
            [T, L] = (function (e, a, s) {
                const {
                        contentRef: r,
                        wrapperRef: i,
                        scrollPosition: n,
                        clampPosition: o,
                        animationScroll: l,
                        events: c,
                    } = e,
                    [d, _] = t.useState(jv);
                return (
                    t.useEffect(() => {
                        const e = r.current;
                        e && (e.style.cursor = 'dragging' === d.type ? 'move' : 'grab');
                    }, [r, d.type]),
                    t.useEffect(() => {
                        if ('dragging' !== d.type) return;
                        const e = (e) => {
                            const t = r.current,
                                s = i.current;
                            if (!t || !s) return;
                            const c = d.positionFrom - e.screenX,
                                _ = d.previousScrollPosition + c;
                            n.start({
                                scrollPosition: o(t, _),
                                from: { scrollPosition: l.scrollPosition.get() },
                                ...a,
                            });
                        };
                        function t() {
                            (window.removeEventListener('mousemove', e),
                                document.body.removeEventListener('mouseleave', t),
                                _({ type: 'scrollingToEnd' }));
                        }
                        return (
                            window.addEventListener('mousemove', e),
                            window.addEventListener('mouseup', t),
                            document.body.addEventListener('mouseleave', t),
                            () => {
                                (window.removeEventListener('mousemove', e),
                                    window.removeEventListener('mouseup', t),
                                    document.body.removeEventListener('mouseleave', t));
                            }
                        );
                    }, [l.scrollPosition, o, r, d, n, i, a, s]),
                    t.useEffect(() => {
                        if ('scrollingToEnd' !== d.type) return;
                        const e = () => {
                            _(jv);
                        };
                        return (l.scrollPosition.idle && e(), c.on('rest', e), () => c.off('rest', e));
                    }, [l.scrollPosition, d.type, c]),
                    t.useEffect(() => {
                        const e = r.current;
                        if (!e) return;
                        const a = (e) => {
                            (s && s.allowedButtons && -1 === s.allowedButtons.findIndex((a) => e.button === a)) ||
                                _({
                                    type: 'dragging',
                                    positionFrom: e.screenX,
                                    previousScrollPosition: l.scrollPosition.get(),
                                });
                        };
                        return (e.addEventListener('mousedown', a), () => e.removeEventListener('mousedown', a));
                    }, [l.scrollPosition, r, s]),
                    [d, _]
                );
            })(k, void 0, Jw),
            D = (e) => {
                (T.type === yv.Dragging && L({ type: yv.End }), B(e));
            },
            W = t.useMemo(() => ({ ...k, handleMouseWheel: D }), []),
            O = t.useCallback(
                (e) => {
                    const a = m.current ? m.current.offsetWidth : 0,
                        t = p.current ? p.current.offsetWidth : 0;
                    if (d.current) {
                        const s = E();
                        (c.current.moveProgressBars({
                            viewPort: d.current,
                            horizontalScrollPosition: s ? e - s : e,
                            leftOffset: a + t,
                        }),
                            j(g || e > a + 0.5 * t));
                    }
                },
                [E, g],
            ),
            M = t.useCallback((e = !1) => {
                const a = _.current;
                let t = 0,
                    s = 0;
                const r = m.current ? m.current.offsetWidth : 0,
                    i = p.current ? p.current.offsetWidth : 0;
                a && ((t = a.width()), (s = a.offsetLeft() + r + i));
                const n = d.current;
                let o = 0;
                if (t && n) {
                    const a = 0.5 * n.offsetWidth;
                    e && f.current ? (o = s + t - 0.5 * f.current - a) : ((o = s + 0.5 * t - a), (f.current = t));
                }
                return ((o = Math.round(o < 0 ? 0 : o)), o);
            }, []),
            V = () => {
                const e = d.current,
                    a = _ && _.current,
                    t = u.current,
                    s = m.current ? m.current.offsetWidth : 0,
                    r = p.current ? p.current.offsetWidth : 0;
                if (a) {
                    const i = a.offsetLeft() + s + r,
                        n = (null == t ? void 0 : t.offsetLeft()) + s + r,
                        o =
                            I.goal < i - e.offsetWidth
                                ? 'navToCurrentLevel'
                                : t && I.goal < n - e.offsetWidth
                                  ? 'navToPotentialLevel'
                                  : 'hidden',
                        l = (() => {
                            switch (!0) {
                                case t && I.goal > n + t.width():
                                    return 'navToPotentialLevel';
                                case I.goal > i + a.width():
                                    return 'navToCurrentLevel';
                                default:
                                    return 'hidden';
                            }
                        })();
                    (x(o), C(l));
                }
            },
            z = (e) => {
                const a = ((e) => {
                    let a = 0;
                    if (e && e.current && d && d.current) {
                        const t = e.current,
                            s = m.current ? m.current.offsetWidth : 0,
                            r = p.current ? p.current.offsetWidth : 0;
                        let i = 0,
                            n = 0;
                        t && ((i = t.width()), (n = t.offsetLeft() + s + r));
                        const o = d.current;
                        (i && o && (a = n + 0.5 * i - 0.5 * o.offsetWidth), (a = Math.round(a < 0 ? 0 : a)));
                    }
                    return a;
                })(e);
                (O(I.goal), P(a), V());
            },
            F = (e) => {
                switch (e) {
                    case 'navToCurrentLevel':
                        return z(_);
                    case 'navToPotentialLevel':
                        return z(u);
                }
            },
            $ = (e) => {
                switch (e) {
                    case 'navToCurrentLevel':
                        return { type: Mf.Default, tooltipBody: eC.backToCurrentStageArrow.descr() };
                    case 'navToPotentialLevel':
                        return { type: Mf.Gray, tooltipBody: eC.backToPotentialStageArrow.descr() };
                }
            },
            H = (e) => {
                (O(I.goal), V(), N(null == e ? void 0 : e.type));
            };
        return (
            t.useEffect(
                () =>
                    te(() => {
                        o && l && P(M());
                    }),
                [P, M, o, l],
            ),
            t.useEffect(() => {
                const e = async () => {
                    const e = A(),
                        a = I.goal;
                    await Lt();
                    const t = A(),
                        s = d.current,
                        [, r] = k.getBounds(),
                        i = 0.25 * s.offsetWidth,
                        n = t && e && t !== e ? (a * t) / e : a;
                    (O(n), P(n > r - i ? r : n));
                };
                return (
                    engine.on('clientResized', e),
                    () => {
                        engine.off('clientResized', e);
                    }
                );
            }, []),
            t.useEffect(() => K(() => z(_), 700), [n]),
            t.useEffect(() => {
                if (((e = '') => aC.includes(e))(S)) return void s('dragStart' === S);
                const e = () => {
                        S || O(I.goal);
                    },
                    a = () => {
                        (s(!1), O(I.goal));
                    },
                    t = () => {
                        (s(!0), O(I.goal));
                    };
                return (
                    R.on('change', e),
                    R.on('rest', a),
                    R.on('start', t),
                    () => {
                        (R.off('change', e), R.off('rest', a), R.off('start', t));
                    }
                );
            }, [R, O, s, I.goal, S]),
            e.jsxs(e.Fragment, {
                children: [
                    e.jsx('div', {
                        className: a(hx.bookmark, hx.bookmark__start),
                        children: e.jsx(Hv, {
                            chapterStep: i.length,
                            mixClass: a(hx.bookmarkLeftFixed, y && hx.bookmarkLeftFixed__active),
                        }),
                    }),
                    e.jsx('div', {
                        className: hx.scrollWrapper,
                        ref: d,
                        onClick: H,
                        onMouseLeave: V,
                        onWheel: H,
                        children: e.jsx(re.Horizontal.Area.Default, {
                            api: W,
                            barClassNames: { base: hx.scrollBarPosition },
                            onDrag: H,
                            children: e.jsx(Qw, {
                                api: c,
                                currentCardRef: _,
                                freeProgressionCutCardRef: b,
                                potentialLevelCardRef: u,
                                separatorRef: h,
                                widget3dStyleLeftRef: m,
                                shadowLipRef: p,
                                onProgressChanged: H,
                            }),
                        }),
                    }),
                    e.jsx('div', {
                        className: a(
                            hx.scrollToButton,
                            hx.scrollToButton__backward,
                            'hidden' !== w && hx.scrollToButton__visible,
                        ),
                        children: e.jsx(kv, {
                            onClick: () => F(w),
                            direction: Of.back,
                            className: hx.arrowButton,
                            ...$(w),
                        }),
                    }),
                    e.jsx('div', {
                        className: a(
                            hx.scrollToButton,
                            hx.scrollToButton__forward,
                            'hidden' !== v && hx.scrollToButton__visible,
                        ),
                        children: e.jsx(kv, {
                            onClick: () => F(v),
                            direction: Of.forward,
                            className: hx.arrowButton,
                            ...$(v),
                        }),
                    }),
                ],
            })
        );
    }),
    sC = n(() => {
        const { model: s } = Ff(),
            r = s.computes.isLayoutWithExtraWidget(),
            [i, n] = t.useState(!1),
            o = a(hx.additionalShadow, i && hx.additionalShadow__active);
        return e.jsxs('div', {
            className: a(hx.base, r && hx.base__isLayoutWithExtraWidget),
            children: [
                e.jsx('div', { className: a(hx.shadow, hx.shadow__left), children: e.jsx('div', { className: o }) }),
                e.jsx('div', { className: a(hx.shadow, hx.shadow__right), children: e.jsx('div', { className: o }) }),
                e.jsx(tC, {
                    onHorizontalScroll: (e) => {
                        n(e);
                    },
                }),
            ],
        });
    }),
    rC = 'ProgressionContent_23d7382d',
    iC = 'ProgressionContent_base__extra_b83b4c7d',
    nC = 'ProgressionContent_base__extraChapter_efc5bb01',
    oC = 'ProgressionContent_header_3c9de2e1',
    lC = 'ProgressionContent_progression_ee26929',
    cC = 'ProgressionContent_progression__extraChapter_ed356b04',
    dC = 'ProgressionContent_extraChapterWidget_6d130b1f',
    _C = 'ProgressionContent_footer_b7b80223',
    uC = n(() => {
        const {
                model: { root: t, computes: s },
            } = Ff(),
            { chapterType: r, chapterID: i, actionType: n, isPaused: o } = t.get(),
            l = s.isLayoutWithExtraWidget(),
            c = r === Tf.EXTRA,
            d = n !== Ef.NoAction,
            _ = a(lC, l && cC);
        return e.jsxs('div', {
            className: a(rC, l && iC, c && nC),
            style: $t(i),
            children: [
                !o && e.jsx('div', { className: _, children: e.jsx(sC, {}) }),
                e.jsx('div', { className: oC, children: e.jsx(Cv, {}) }),
                e.jsx('div', { className: _C, children: d && e.jsx(nv, {}) }),
                l && e.jsx('div', { className: dC, children: e.jsx(tv, {}) }),
            ],
        });
    }),
    mC = 'App_7cf6cd46',
    pC = n(() => {
        const { model: a, controls: s } = Ff(),
            { showReplaceRewardsAnimations: r } = a.root.get(),
            i = Z();
        return (
            J(E.ESCAPE, () => i.goBack()),
            t.useEffect(() => {
                const e = () => {
                    document.body.style.height = window.innerHeight - (innerHeight % 2) + 'px';
                };
                return (
                    window.addEventListener('resize', e),
                    e(),
                    () => {
                        (window.removeEventListener('resize', e), (document.body.style.height = 'auto'));
                    }
                );
            }, []),
            t.useEffect(
                () =>
                    te(() => {
                        s.viewLoad();
                    }),
                [],
            ),
            t.useEffect(() => {
                r && z.sound(R.sounds.bp_pick_up_award());
            }, [r]),
            e.jsx('div', { className: mC, children: e.jsx(uC, {}) })
        );
    }),
    bC = () => e.jsx(zf, { options: { rootId: R.aliases.battle_pass.Progression('resId') }, children: e.jsx(pC, {}) }),
    hC = 'App_811b056b',
    fC = 'App_mainView_54c70e4',
    gC = n(() => {
        const { location: a } = Z(),
            s = N(a, {
                from: { opacity: 0 },
                enter: { opacity: 1, config: { duration: 150, easing: ge.easeInQuad }, delay: 150 },
            });
        return e.jsx(t.Suspense, {
            fallback: e.jsx('div', {}),
            children: e.jsx('div', {
                className: hC,
                children: s((a, t) =>
                    e.jsx(r.div, {
                        className: fC,
                        style: a,
                        children: e.jsxs(St, {
                            children: [
                                e.jsx(Nt, { path: xs.battlePass.intro, component: pb }),
                                e.jsx(Nt, { path: xs.battlePass.progression, component: bC }),
                                e.jsx(Nt, { path: xs.battlePass.chapterChoice, component: Ju }),
                                e.jsx(Nt, { path: xs.battlePass.postProgression, component: Bf }),
                                e.jsx(Nt, { path: xs.battlePass.buyPass, component: wn }),
                                e.jsx(Nt, { path: xs.battlePass.buyPassRewards, component: wn }),
                                e.jsx(Nt, { path: xs.battlePass.buyLevels, component: Wr }),
                                e.jsx(Nt, { path: xs.battlePass.buyLevelsRewards, component: Wr }),
                                e.jsx(Nt, { path: xs.battlePass.holidayFinal, component: Mp }),
                            ],
                        }),
                    }),
                ),
            }),
        });
    });
Rt(new kt().add(It).addWithProps(Pt, { context: 'model.router' }).render(e.jsx(gC, {})))
    .then(() => Bt(document.getElementById('root')))
    .then(() => At());
