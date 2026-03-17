import {
    j as e,
    f as a,
    r as t,
    k as s,
    n as r,
    g as i,
    t as n,
    o,
    e as l,
    v as c,
    s as d,
    w as _,
    x as u,
    y as m,
    z as p,
    A as b,
    B as h,
    C as f,
    D as g,
    E as v,
    q as x,
    R as w,
    p as C,
    F as y,
    G as j,
    H as S,
} from '../../../chunks/vendor.js';
import {
    C as N,
    B as k,
    q as I,
    n as P,
    v as B,
    w as A,
    A as E,
    x as T,
    y as L,
    O as D,
    S as W,
    z as O,
    D as M,
    p as V,
    g as z,
    h as F,
    E as $,
    G as H,
    R as U,
    i as G,
    e as q,
    H as X,
    c as Z,
    K,
    L as Q,
    M as Y,
    N as J,
    m as ee,
    Q as ae,
    W as te,
    X as se,
    r as re,
    Y as ie,
    Z as ne,
    f as oe,
    _ as le,
    $ as ce,
    a0 as de,
    a1 as _e,
    a2 as ue,
    a3 as me,
    a4 as pe,
    F as be,
    a5 as he,
    a6 as fe,
    a7 as ge,
    a8 as ve,
    j as xe,
    a9 as we,
    aa as Ce,
    ab as ye,
    ac as je,
    u as Se,
    a as Ne,
    ad as ke,
    ae as Ie,
    af as Pe,
    ag as Re,
    ah as Be,
    ai as Ae,
    aj as Ee,
    ak as Te,
    al as Le,
    am as De,
    an as We,
    ao as Oe,
    ap as Me,
    aq as Ve,
    ar as ze,
    as as Fe,
    at as $e,
    au as He,
    av as Ue,
    aw as Ge,
    ax as qe,
    ay as Xe,
    az as Ze,
    aA as Ke,
    aB as Qe,
    aC as Ye,
    aD as Je,
    aE as ea,
    aF as aa,
    aG as ta,
    aH as sa,
    aI as ra,
    aJ as ia,
    aK as na,
    aL as oa,
    aM as la,
    aN as ca,
    aO as da,
    aP as _a,
    aQ as ua,
    aR as ma,
    aS as pa,
    aT as ba,
    aU as ha,
    l as fa,
    aV as ga,
    aW as va,
    aX as xa,
    I as wa,
    aY as Ca,
    aZ as ya,
    a_ as ja,
    a$ as Sa,
    b0 as Na,
    b1 as ka,
    b2 as Ia,
    b3 as Pa,
    b4 as Ra,
    b5 as Ba,
    b6 as Aa,
    b7 as Ea,
    b8 as Ta,
    b9 as La,
    ba as Da,
    s as Wa,
    bb as Oa,
    bc as Ma,
    bd as Va,
    be as za,
    bf as Fa,
    bg as $a,
    bh as Ha,
    bi as Ua,
    bj as Ga,
    bk as qa,
    bl as Xa,
    bm as Za,
    bn as Ka,
    bo as Qa,
    bp as Ya,
    bq as Ja,
    br as et,
    bs as at,
    bt as tt,
    bu as st,
    bv as rt,
    bw as it,
    bx as nt,
    b as ot,
    by as lt,
    bz as ct,
    bA as dt,
    bB as _t,
    bC as ut,
    bD as mt,
    bE as pt,
    bF as bt,
    T as ht,
    bG as ft,
    bH as gt,
    bI as vt,
    bJ as xt,
    bK as wt,
    bL as Ct,
    bM as yt,
    bN as jt,
    bO as St,
    bP as Nt,
    bQ as kt,
    J as It,
    U as Pt,
    bR as Rt,
    d as Bt,
    bS as At,
    bT as Et,
} from '../../../chunks/lib.js';
import {
    g as Tt,
    a as Lt,
    o as Dt,
    v as Wt,
    e as Ot,
    m as Mt,
    R as Vt,
    b as zt,
    c as Ft,
} from '../../../chunks/utils.js';
import { g as $t, a as Ht } from '../../../chunks/filename.js';
import { T as Ut } from '../../../chunks/skills.js';
import { T as Gt } from '../../../chunks/constants.js';
var qt = ((e) => (
        (e.Active = 'active'),
        (e.Paused = 'paused'),
        (e.Completed = 'completed'),
        (e.NotStarted = 'notStarted'),
        e
    ))(qt || {}),
    Xt = ((e) => (
        (e.Vehicle = 'vehicle'),
        (e.VehicleStyle = 'vehicleStyle'),
        (e.Style = 'style'),
        (e.Tankman = 'tankman'),
        (e.PostProgression = 'postProgression'),
        e
    ))(Xt || {});
const Zt = 'BuyButtons_e1c3bdfe',
    Kt = 'BuyButtons_button_1f41b584',
    Qt = R.strings.battle_pass.battlePassBuyView,
    Yt = ({ isWalletAvailable: t, onAccept: s, buttonAcceptText: r, onCancel: i, className: n }) =>
        e.jsxs('div', {
            className: a(Zt, n),
            children: [
                e.jsx(N, { type: I.main, size: k.medium, disabled: !t, onClick: s, mixClass: Kt, children: r }),
                e.jsx(N, { type: I.primary, size: k.medium, onClick: i, mixClass: Kt, children: Qt.btnCancel() }),
            ],
        }),
    Jt = {
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
    es = R.strings.battle_pass.battlePassBuyView.confirm,
    as = ({ chapter: t, buyBP: s, subTitle: r, className: i, type: n = 'default' }) =>
        e.jsxs('div', {
            className: a(Jt.base, Jt[`base__${n}`], i),
            children: [
                e.jsx('span', {
                    className: Jt.chapter,
                    children: e.jsx(P, { text: es.chapter(), binding: { name: Tt(t) } }),
                }),
                e.jsx('span', { className: Jt.buyBPTitle, children: s }),
                e.jsx('span', { className: Jt.subTitle, children: r }),
            ],
        });
var ts = ((e) => (
    (e.Passed = 'passed'),
    (e.PossiblySelected = 'possiblySelected'),
    (e.Selected = 'selected'),
    (e.Available = 'available'),
    e
))(ts || {});
const ss = (e, a) => (e / a) * 100 + '%',
    rs = {
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
    is = { ...T, freezed: !0, type: E.Simple },
    ns = t.memo(({ size: t = W.Default, value: s, slideValue: r, maximum: i, theme: n = D }) => {
        const o = s >= i ? i : s;
        return e.jsxs('div', {
            className: a(rs.base, rs[`base__${t}`]),
            children: [
                e.jsx(L, { value: s, maxValue: i, deltaFrom: r, animationSettings: is, theme: n }),
                e.jsx('div', {
                    className: rs.glowWrapper,
                    style: { left: ss(o, i) },
                    children: e.jsx('div', { className: a(rs.glow, rs.glow__left) }),
                }),
                e.jsx('div', {
                    className: rs.glowWrapper,
                    style: { left: ss(r, i) },
                    children: e.jsx('div', { className: a(rs.glow, rs.glow__right) }),
                }),
            ],
        });
    }),
    os = {
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
    ls = ({ start: t, total: s, passed: r, selected: i, possiblySelected: n, width: o }) =>
        e.jsx('div', {
            className: os.base,
            children: O(s, (l) => {
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
                                return ts.PossiblySelected;
                            case e < a:
                                return ts.Passed;
                            case e >= a && e < t:
                                return ts.Selected;
                            default:
                                return ts.Available;
                        }
                    })(l, r, i, n),
                    _ = o - 1;
                return e.jsx(
                    'div',
                    {
                        className: os.labelSplitter,
                        children: e.jsx('div', {
                            className: a(os.label, os[`label__${d}`]),
                            style: { width: `${l === s - 1 ? _ : o}rem` },
                            children: c,
                        }),
                    },
                    l,
                );
            }),
        }),
    cs = 'LevelSlider_45aae928',
    ds = 'LevelSlider_base__locked_5e3186ce',
    _s = 'LevelSlider_slider_4e661b48',
    us = 'LevelSlider_slider__down_aecacc79',
    ms = ({
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
                    return M(i + 1, r, o);
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
                                u !== a && (V.sound(R.sounds.bp_progress_bar_drag()), m(a), b(a));
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
                    V.sound(R.sounds.bp_progress_bar_take());
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
                    className: a(cs, !l && ds),
                    style: { width: o * v + 'rem' },
                    ref: h,
                    onMouseOut: () => {
                        l && b(u);
                    },
                    onMouseDown: g,
                    children: [
                        e.jsx(ls, { start: s, total: r, passed: i, selected: u, possiblySelected: p, width: o }),
                        e.jsx(ns, { value: x, maximum: v, allowSlide: l, slideValue: w }),
                    ],
                }),
                l && e.jsx('div', { className: a(_s, d && us), style: { left: o * w + 1 + 'rem' }, onMouseDown: g }),
            ],
        });
    },
    ps = 'AnimatedReward_1789d927',
    bs = ({ children: t, animationConfig: i, className: n }) => {
        const o = s(i);
        return e.jsx(r.div, { style: o, className: a(ps, n), children: t });
    },
    hs = 'RewardsList_d759a036',
    fs = 'RewardsList_reward_e3f6b2c5',
    gs = 'RewardsList_base__small_bed41ebf',
    vs = (e) => ({
        config: { duration: 300 },
        delay: 100 + 100 * e,
        from: { opacity: 0 },
        onStart: () => {
            V.sound(R.sounds.bp_reward());
        },
        to: { opacity: 1 },
    }),
    xs = ({ rewards: t }) => {
        const { breakpoint: s } = z(),
            r = s.weight <= F.small.weight;
        return e.jsx('div', {
            className: a(hs, r && gs),
            children: $(
                t,
                (e, a) => a < 10,
                (a, t) => {
                    const s = r ? H.Small : H.Big;
                    return e.jsx(
                        bs,
                        { animationConfig: vs(t), className: fs, children: e.jsx(U, { ...Lt(a, s) }) },
                        `reward${t}`,
                    );
                },
            ),
        });
    },
    ws = {
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
    [Cs, ys] = G()(
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
                t = i(() => a.rewards.get(), { equals: q });
            return { ...a, computes: { rewards: t } };
        },
        ({ externalModel: e }) => ({
            changeSelectedLevels: e.createCallback(
                (e) => (e ? { count: null == e ? void 0 : e.count } : {}),
                'onChangeSelectedLevels',
            ),
        }),
    ),
    js = 'Content_559efe9c',
    Ss = 'Content_buttonWrapper_3596c383',
    Ns = 'Content_buttonWrapper__active_97efd5f3',
    ks = 'Content_rewardBtn_322728d5',
    Is = R.strings.battle_pass.battlePassBuyView.confirmAnyNumber,
    Ps = 10,
    Rs = 12,
    Bs = 20,
    As = 24,
    Es = 50,
    Ts = n(() => {
        const { model: s, controls: r } = ys(),
            { start: i, passed: n, total: o, selected: l } = s.levels,
            [c, d] = t.useState(0),
            { screenWidthRem: _, breakpoint: u } = z(),
            m = u.weight <= F.small.weight,
            p = s.computes.rewards(),
            { chapterID: b } = s.root.get(),
            h = X();
        t.useEffect(
            () =>
                Z(() => {
                    d(p.length - 10);
                }, 0),
            [p],
        );
        const f = K(() => {
                h.push(ws.battlePass.buyLevelsRewards, { chapterID: b });
            }),
            g = (() => {
                const e = m ? Bs : As;
                if (o.get() <= Es) return e;
                const a = _ - 2 * Ps,
                    t = Math.floor(a / o.get()),
                    s = Math.min(t, e);
                return (
                    s < Rs &&
                        console.warn(`BuyLevelSlider is so big. Current size is ${s * o.get()}, max size is ${a}`),
                    s
                );
            })();
        return e.jsxs('div', {
            className: js,
            children: [
                e.jsx(ms, {
                    start: i.get(),
                    total: o.get(),
                    passed: n.get(),
                    selected: l.get(),
                    width: g,
                    onChangeSelectedLevels: r.changeSelectedLevels,
                    allowSlide: !0,
                }),
                e.jsx(xs, { rewards: p }),
                e.jsx('div', {
                    className: a(Ss, c > 0 && Ns),
                    children: e.jsx(N, {
                        type: I.ghost,
                        size: k.medium,
                        mixClass: ks,
                        onClick: f,
                        children: c > 0 && e.jsx(P, { text: Is.moreRewards(), binding: { count: c } }),
                    }),
                }),
            ],
        });
    }),
    Ls = 'Footer_b7a0c3d',
    Ds = 'Footer_levelsBlock_9d3d3a12',
    Ws = 'Footer_priceBlock_85e8d734',
    Os = 'Footer_levelsLabel_f348b218',
    Ms = 'Footer_footerLabel_611e7f7e',
    Vs = 'Footer_price_4a9e98a1',
    zs = ({ levelsToBuy: a, price: t }) =>
        e.jsxs('div', {
            className: Ls,
            children: [
                e.jsxs('div', {
                    className: Ds,
                    children: [
                        e.jsx('div', {
                            className: Ms,
                            children: R.strings.battle_pass.battlePassBuyView.levelsSelected(),
                        }),
                        e.jsx('div', { className: Os, children: a }),
                    ],
                }),
                e.jsxs('div', {
                    className: Ws,
                    children: [
                        e.jsx('div', { className: Ms, children: R.strings.battle_pass.battlePassBuyView.price() }),
                        e.jsx(Q, { type: 'gold', size: 'big', value: t, classNames: { icon: Vs } }),
                    ],
                }),
            ],
        }),
    [Fs, $s] = G()(
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
    Hs = 'BuyLevelsContent_491ebf34',
    Us = 'BuyLevelsContent_background_eb135b98',
    Gs = 'BuyLevelsContent_shadow_95e0da99',
    qs = 'BuyLevelsContent_content_27ab1b8b',
    Xs = 'BuyLevelsContent_footer_bbd6ad32',
    Zs = 'BuyLevelsContent_divider_d1f36af3',
    Ks = 'BuyLevelsContent_title_f3f3fb3f',
    Qs = 'BuyLevelsContent_buttons_7ea06e78',
    Ys = R.strings.battle_pass.battlePassBuyView,
    Js = n(() => {
        const { model: a, controls: s } = $s(),
            { isWalletAvailable: r } = a.main,
            { price: i, levelsPassed: n, levelsSelected: o, chapterID: l } = a.levels,
            c = { context: 'model.confirmAnyNumber', rootId: R.aliases.battle_pass.BuyLevels('resId') },
            d = o.get() - n.get(),
            _ = X();
        (((e) => {
            const a = t.useCallback(
                (a) => {
                    a.altKey || e();
                },
                [e],
            );
            B(A.ENTER, a);
        })(s.buy),
            Y(A.ESCAPE, () => _.goBack()));
        const u = {
            backgroundImage: `url(${$t(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, l.get())})`,
        };
        return e.jsxs('div', {
            className: Hs,
            children: [
                e.jsx('div', { style: u, className: Us }),
                e.jsx('div', { className: Gs }),
                e.jsxs('div', {
                    className: qs,
                    children: [
                        e.jsx(as, {
                            chapter: l.get(),
                            buyBP: Ys.confirmAnyNumber.title(),
                            subTitle: Ys.confirmAnyNumber.descr(),
                            className: Ks,
                        }),
                        e.jsx(Cs, { options: c, children: e.jsx(Ts, {}, `${d}${i.get()}`) }),
                        e.jsxs('div', {
                            className: Xs,
                            children: [
                                e.jsx('div', { className: Zs }),
                                e.jsx(zs, { levelsToBuy: d, price: i.get() }),
                                e.jsx(Yt, {
                                    onAccept: s.buy,
                                    onCancel: _.goBack,
                                    isWalletAvailable: r.get(),
                                    buttonAcceptText: R.strings.menu.boosterBuyWindow.buyButtonLabel(),
                                    className: Qs,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    [er, ar] = G()(({ observableModel: e }) => {
        const a = {
                rewardsInfo: e.primitives(['chapterID', 'packageState', 'toLevel', 'fromLevel']),
                nowRewards: e.array('nowRewards.items'),
            },
            t = i(() => a.nowRewards.get(), { equals: q });
        return { ...a, computes: { nowRewards: t } };
    }, J),
    tr = 'ChapterBackground_69fd488d',
    sr = 'ChapterBackground_base__current_fdadf34',
    rr = ({ chapter: t, isCurrent: s, customBackgroundStyle: r }) =>
        e.jsx('div', { className: a(tr, s && sr), style: r || Ht(t) }),
    ir = {
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
var nr = ((e) => ((e.now = 'now'), (e.future = 'future'), e))(nr || {});
const or = ({ description: t, type: s, steps: r = '', className: i = '', title: n = '' }) =>
        e.jsxs('div', {
            className: a(ir.base, ir[`base__${s}`], i),
            children: [
                e.jsx('div', { className: ir.iconShadow }),
                e.jsxs('div', {
                    className: ir.title,
                    children: [
                        e.jsx('div', { className: ir.icon }),
                        e.jsx('div', { className: ir.titleText, children: n }),
                    ],
                }),
                e.jsx(P, {
                    classMix: ir.descriptionText,
                    text: t,
                    binding: { steps: e.jsx('span', { className: ir.steps, children: r }, r) },
                }),
            ],
        }),
    lr = 'GroupRewards_46776305',
    cr = 'GroupRewards_item_662b83cb',
    dr = ({ rewards: t, className: s }) => {
        const { breakpoint: r } = z(),
            i = r.weight < F.medium.weight ? H.Small : H.Big;
        return e.jsx('div', {
            className: a(lr, s),
            children: ee(t, (a, t) =>
                e.jsx('div', { className: cr, children: e.jsx(U, { ...Lt(a, i, !0) }) }, `reward_${t}_${a.name}`),
            ),
        });
    },
    _r = 'RewardsBlock_479e00eb',
    ur = 'RewardsBlock_groupTitle_f9f5fbdd',
    mr = 'RewardsBlock_groupRewards_2893db92',
    pr = 'RewardsBlock_groupRewards__future_d962e74b',
    br = ({ description: t, iconType: s, steps: r = '', rewards: i, className: n = '', title: o = '' }) =>
        e.jsxs('div', {
            className: a(_r, n),
            children: [
                e.jsx(or, { description: t, type: s, steps: r, className: ur, title: o }),
                e.jsx(dr, { rewards: i, className: a(mr, s === nr.future && pr) }),
            ],
        });
var hr = ((e) => (
    (e[(e.Idle = 0)] = 'Idle'),
    (e[(e.Start = 1)] = 'Start'),
    (e[(e.Between = 2)] = 'Between'),
    (e[(e.End = 3)] = 'End'),
    e
))(hr || {});
const fr = { type: 'idle' };
const gr = 'ScrollWithLips_b466eb6f',
    vr = 'ScrollWithLips_lip_b541dfde',
    xr = 'ScrollWithLips_lip__top_4610f987',
    wr = 'ScrollWithLips_lip__bottom_1755a6e5',
    Cr = 'ScrollWithLips_scroll_35d7ef3c',
    yr = 'ScrollWithLips_scroll__loaded_76bcfcc5',
    jr = 'ScrollWithLips_topButton_9c4da3a2',
    Sr = 'ScrollWithLips_bottomButton_810d617c',
    Nr = 'ScrollWithLips_track_a8bacc80',
    kr = ({ className: s, children: r, setVisibleScroll: i }) => {
        const n = te();
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
                [_, u] = t.useState(fr),
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
                        u(fr);
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
                                await ae(l);
                            })(),
                            o.on('change', l),
                            () => o.off('change', l)
                        ),
                        [o, l],
                    ),
                    t.useEffect(() => {
                        const e = async () => {
                            (await Dt(), l());
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
            l = o !== hr.Idle;
        return (
            t.useEffect(() => {
                i && i(o !== hr.Idle);
            }, [i, o]),
            e.jsxs('div', {
                className: a(gr, s),
                children: [
                    o !== hr.Start && o !== hr.Idle && e.jsx('div', { className: a(vr, xr) }),
                    o !== hr.End && o !== hr.Idle && e.jsx('div', { className: a(vr, wr) }),
                    e.jsx(se.Vertical.Default, {
                        api: n,
                        barClassNames: { base: a(Cr, l && yr), topButton: jr, bottomButton: Sr, track: Nr },
                        children: r,
                    }),
                ],
            })
        );
    },
    Ir = 'Content_9b051971',
    Pr = 'Content_mainContent_6b58769b',
    Rr = R.strings.battle_pass.battlePassBuyView.reward,
    Br = ({ fromLevel: a, toLevel: t, rewards: s }) => {
        const { description: r, completedSteps: i } = ((e, a) =>
            e < a
                ? { description: Rr.descriptionNowRewards(), completedSteps: `${e} – ${a}` }
                : { description: Rr.descriptionNowRewardsSingle(), completedSteps: `${a}` })(a, t);
        return e.jsx('div', {
            className: Ir,
            children: e.jsx(kr, {
                children: e.jsx(br, {
                    title: Rr.titleNowRewards(),
                    description: r,
                    iconType: nr.now,
                    steps: i,
                    rewards: s,
                    className: Pr,
                }),
            }),
        });
    },
    Ar = 'MoreRewards_f8e4ee5b',
    Er = 'MoreRewards_background_276f926f',
    Tr = 'MoreRewards_shadow_8f93a270',
    Lr = n(() => {
        const { model: a } = ar(),
            { chapterID: t, toLevel: s, fromLevel: r } = a.rewardsInfo,
            i = X();
        Y(A.ESCAPE, () => i.goBack());
        const n = {
            backgroundImage: `url(${$t(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, t.get())})`,
        };
        return e.jsxs('div', {
            className: Ar,
            children: [
                e.jsx('div', {
                    className: Er,
                    children: e.jsx(rr, { chapter: t.get(), isCurrent: !0, customBackgroundStyle: n }),
                }),
                e.jsx('div', { className: Tr }),
                e.jsx(Br, { rewards: a.computes.nowRewards(), toLevel: s.get(), fromLevel: r.get() }),
            ],
        });
    }),
    Dr = { context: 'model.rewards', rootId: R.aliases.battle_pass.BuyLevels('resId') },
    Wr = n(() => {
        const { model: a } = $s();
        return 'rewardsState' === a.main.state.get()
            ? e.jsx(er, { options: Dr, children: e.jsx(Lr, {}) })
            : e.jsx(Js, {});
    }),
    Or = () => e.jsx(Fs, { options: { rootId: R.aliases.battle_pass.BuyLevels('resId') }, children: e.jsx(Wr, {}) }),
    [Mr, Vr] = G()(({ observableModel: e }) => {
        const a = {
                levels: e.object(),
                nowRewards: e.array('nowRewards.items'),
                futureRewards: e.array('futureRewards.items'),
            },
            t = i(() => a.nowRewards.get(), { equals: q }),
            s = i(() => a.futureRewards.get(), { equals: q });
        return { ...a, computes: { nowRewards: t, futureRewards: s } };
    }, J),
    zr = 'Content_d0e2f711',
    Fr = 'Content_mainContent_3c1770a6',
    $r = 'Content_base__noScroll_da09528a',
    Hr = R.strings.battle_pass.battlePassBuyView.reward,
    Ur = n(() => {
        const { model: s } = Vr(),
            { fromLevel: r, toLevel: i, isPurchaseWithLevels: n } = s.levels.get(),
            o = s.computes.nowRewards(),
            l = s.computes.futureRewards(),
            { description: c, completedSteps: d } = ((e, a, t) =>
                t
                    ? { description: Hr.descriptionNowRewardsCheckbox() }
                    : e < a
                      ? { description: Hr.descriptionNowRewards(), completedSteps: `${e} - ${a}` }
                      : { description: Hr.descriptionNowRewardsSingle(), completedSteps: `${a}` })(r, i, n),
            [_, u] = t.useState(!1);
        return e.jsx(kr, {
            className: a(zr, !_ && $r),
            setVisibleScroll: u,
            children: e.jsxs('div', {
                className: Fr,
                children: [
                    o.length > 0 &&
                        e.jsx(br, {
                            description: c,
                            iconType: nr.now,
                            rewards: o,
                            steps: d,
                            title: Hr.titleNowRewards(),
                        }),
                    l.length > 0 &&
                        e.jsx(br, {
                            description: Hr.descriptionFutureRewards(),
                            iconType: nr.future,
                            rewards: l,
                            title: Hr.titleFutureRewards(),
                        }),
                ],
            }),
        });
    }),
    Gr = 'MoreRewards_c02e454c',
    qr = 'MoreRewards_content_16a0f9d5',
    Xr = 'MoreRewards_background_c0223b52',
    Zr = 'MoreRewards_shadow_8f93a270',
    Kr = n(() => {
        const { model: a } = Vr(),
            { chapterID: s } = a.levels.get(),
            [r, i] = t.useState(!1),
            n = X();
        (Y(A.ESCAPE, () => n.goBack()),
            t.useEffect(() => {
                (async () => {
                    (await Dt(), i(!0));
                })();
            }, []));
        const o = { backgroundImage: `url(${$t(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, s)})` };
        return e.jsxs('div', {
            className: Gr,
            children: [
                e.jsx('div', {
                    className: Xr,
                    children: e.jsx(rr, { chapter: s, isCurrent: !0, customBackgroundStyle: o }),
                }),
                e.jsx('div', { className: Zr }),
                r && e.jsx('div', { className: qr, children: e.jsx(Ur, {}) }),
            ],
        });
    }),
    Qr = {
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
    Jr = 'x160x160',
    ei = 'x200x200',
    ai = 'x240x240',
    ti = 'x360x360',
    si = 'x74x74',
    ri = 'x120x120',
    ii = 'x200x200',
    ni = 'x260x260',
    oi = 'x300x300',
    li = 'x456x456',
    ci = 'x600x600',
    di = 'x912x912',
    _i = 'x28x28',
    ui = 'x48x48',
    mi = 'x60x60',
    pi = 'x80x80',
    bi = 'x100x100',
    hi = 'x120x120',
    fi = 'x160x160',
    gi = 'x240x240',
    vi = 'x320x320',
    xi = re.resolve('images'),
    wi = function ({ iconSize: t, shieldSize: s, containerSize: r, chapterID: i, bpPurchased: n, className: o = '' }) {
        const l = n ? 'purchased' : 'basic',
            c = String(i).slice(-1),
            d = s === si ? ri : s === ri ? ni : s === ii ? li : s === ni || s === oi ? ci : di,
            _ = t === _i ? mi : t === ui ? bi : t === mi ? hi : t === pi ? fi : t === bi || t === hi ? gi : vi,
            u =
                xi.readOrEmpty(`battlePass.emblem.shield.c_${i}.${l}.${ie(s, d)}`, 'silent') ||
                xi.readOrEmpty(`battlePass.emblem.shield.default.${l}.${s}`),
            m =
                xi.readOrEmpty(`battlePass.emblem.icon.c_${i}.${l}.${ie(t, _)}`, 'silent') ||
                xi.readOrEmpty(`battlePass.emblem.icon.default_${c}.${l}.${t}`);
        return e.jsxs('div', {
            className: a(Qr.base, Qr[`base__${r}`], o),
            children: [
                e.jsx('div', { className: a(Qr.shield, Qr[`shield__${s}`]), style: { backgroundImage: `url(${u})` } }),
                e.jsx('div', {
                    className: a(Qr.icon, Qr[`icon__${t}`]),
                    style: {
                        backgroundImage: `url(${i > 0 ? m : xi.readOrEmpty(`battlePass.emblem.icon.not_chosen.${ie(t, mi)}`)})`,
                    },
                }),
            ],
        });
    },
    [Ci, yi] = G()(
        ({ observableModel: e }) => {
            o.box('');
            const a = {
                    root: e.object(),
                    main: e.primitives(['state', 'shopOfferDiscount', 'isShopOfferAvailable', 'isWalletAvailable']),
                    rewards: e.array('rewards'),
                    regularChapters: e.array('regularChapters'),
                    package: e.array('package'),
                },
                t = i(() => a.rewards.get().topPriorityRewards.items, { equals: q }),
                s = i(() => a.rewards.get().prevTopPriorityRewards.items, { equals: q }),
                r = i(() => a.rewards.get().nowRewards.items, { equals: q }),
                n = i(() => a.rewards.get().futureRewards.items, { equals: q }),
                l = i(() => a.package.get().starterPackRewards.items, { equals: q }),
                c = i(() => {
                    const { chapterID: e } = a.package.get(),
                        t = a.regularChapters.get();
                    return {
                        chapterIDs: [
                            e,
                            ...$(
                                t,
                                ({ chapterID: a }) => a !== e,
                                ({ chapterID: e }) => e,
                            ),
                        ],
                        amount: ne(t, ({ hasStarterPack: e }) => e).length,
                    };
                }),
                d = i((e) => {
                    var t;
                    return null ==
                        (t = oe(a.regularChapters.get(), ({ hasStarterPack: a, chapterID: t }) => a && t === e))
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
    ji = 'PurchaseBlock_fa4dd8be',
    Si = 'PurchaseBlock_button_3b8b9877',
    Ni = 'PurchaseBlock_previousPrice_1e77a9b2',
    ki = 'PurchaseBlock_currentPrice_c4a7499d',
    Ii = 'PurchaseBlock_currency_a51b98a4',
    Pi = 'PurchaseBlock_actionLip_63994768',
    Ri = re.resolve('strings'),
    Bi = n(function ({ isPriceUpdateAnimation: a }) {
        const { model: t, controls: s } = yi(),
            { isWalletAvailable: r } = t.root.get(),
            { price: i, prevPrice: n } = t.package.get(),
            o = le(
                { currencySize: de.medium, buttonSize: ce.small },
                { medium: { currencySize: de.extraLarge, buttonSize: ce.large } },
            );
        return e.jsxs('div', {
            className: ji,
            children: [
                e.jsx('div', { className: Pi }),
                a
                    ? e.jsx('div', {
                          className: Ni,
                          children: e.jsx(_e, {
                              classNames: { base: Ii },
                              type: ue.gold,
                              size: o.currencySize,
                              children: n,
                          }),
                      })
                    : e.jsx('div', {
                          className: ki,
                          children: e.jsx(_e, {
                              classNames: { base: Ii },
                              type: ue.gold,
                              size: o.currencySize,
                              children: i,
                          }),
                      }),
                e.jsx(me, {
                    theme: pe.primary,
                    size: o.buttonSize,
                    className: Si,
                    onClick: s.buy,
                    disabled: !r,
                    'data-test-id': 'buyButton',
                    children: Ri.readOrEmpty('battle_pass.battlePassBuyView.confirm.btnBuy'),
                }),
            ],
        });
    }),
    Ai = {
        base: 'DiscountIcon_932f671c',
        icon: 'DiscountIcon_icon_655d7c11',
        highlight: 'DiscountIcon_highlight_75d6adf',
    };
function Ei({ className: t = '' }) {
    return e.jsxs('div', {
        className: a(Ai.base, t),
        children: [e.jsx('div', { className: Ai.icon }), e.jsx('div', { className: Ai.highlight })],
    });
}
const Ti = 'Logos_1ed97e35',
    Li = 'Logos_logoWrapper_826e9a4f',
    Di = 'Logos_logo_ada5f291',
    Wi = 'Logos_starterPack_f4dabb81',
    Oi = re.resolve('images'),
    Mi = (e) => {
        const a = String(e).slice(-1);
        return (
            Oi.readOrEmpty(`battlePass.emblem.icon.c_${e}.purchased.${fi}`, 'silent') ||
            Oi.readOrEmpty(`battlePass.emblem.icon.default_${a}.purchased.${fi}`)
        );
    },
    Vi = R.strings.battle_pass.battlePassBuyView.confirm.shopOfferBlock;
const zi = n(function ({ className: t = '' }) {
        const {
                model: { computes: s },
            } = yi(),
            { chapterIDs: r, amount: i } = s.starterPackInfo();
        return e.jsxs('div', {
            className: a(Ti, t),
            children: [
                r.map((a, t) =>
                    e.jsx(
                        'div',
                        {
                            className: Li,
                            style: { zIndex: r.length - t },
                            children: e.jsx('div', { className: Di, style: { backgroundImage: `url(${Mi(a)})` } }),
                        },
                        a,
                    ),
                ),
                Boolean(i) && e.jsx(P, { classMix: Wi, text: Vi.packsAmount(), binding: { amount: i } }),
            ],
        });
    }),
    Fi = 'ShopOfferBlock_5d538f0f',
    $i = 'ShopOfferBlock_logos_c4a5c492',
    Hi = 'ShopOfferBlock_headline_333a5398',
    Ui = 'ShopOfferBlock_text_83d7e7fc',
    Gi = 'ShopOfferBlock_discount_c7eeef37',
    qi = 'ShopOfferBlock_title_7245add2',
    Xi = 'ShopOfferBlock_description_ef059d17',
    Zi = 'ShopOfferBlock_button_4790b6d6',
    Ki = R.strings.battle_pass.battlePassBuyView.confirm.shopOfferBlock;
const Qi = n(function ({ className: t = '' }) {
        const { model: s, controls: r } = yi(),
            i = s.regularChapters.get(),
            n = K(() => {
                r.shopOffer();
            }),
            o = le({ buttonSize: ce.small }, { medium: { buttonSize: ce.large } });
        return e.jsxs('div', {
            className: a(Fi, t),
            children: [
                Boolean(i.length) && e.jsx(zi, { className: $i }),
                e.jsxs('div', {
                    className: Hi,
                    children: [
                        e.jsx(be, {
                            upgradeLegacy: !0,
                            className: Ui,
                            text: Ki.headline(),
                            params: { count: i.length },
                        }),
                        e.jsx(Ei, { className: Gi }),
                    ],
                }),
                e.jsx(be, { upgradeLegacy: !0, className: qi, text: Ki.title() }),
                e.jsx(be, { upgradeLegacy: !0, className: Xi, text: Ki.description() }),
                e.jsx(me, { size: o.buttonSize, onClick: n, className: Zi, children: Ki.buy() }),
            ],
        });
    }),
    Yi = {
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
    Ji = (e, a, t) => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100 * e,
        config: { duration: 100 },
        onStart: () => {
            a();
        },
        reset: t,
    }),
    en = re.resolve('strings'),
    an = n(({ isCheckboxAnimationActive: i, isPrevious: n = !1, className: o }) => {
        const { model: l } = yi(),
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
                V.sound(R.sounds.bp_reward());
            },
            { breakpoint: f } = z(),
            g = f.weight < F.medium.weight ? H.Small : H.Big,
            v = s(Ji(6, h)),
            x = X();
        return e.jsxs('div', {
            className: a(Yi.base, o),
            children: [
                e.jsx('div', {
                    className: Yi.descriptionText,
                    children:
                        n !== d
                            ? en.readOrEmpty('battle_pass.battlePassBuyView.confirm.descriptionCheckboxChecked')
                            : en.readOrEmpty('battle_pass.battlePassBuyView.confirm.description'),
                }),
                e.jsxs('div', {
                    className: Yi.rewardsWrapper,
                    children: [
                        e.jsx('div', {
                            className: a(Yi.priorityRewards, b && Yi.priorityRewards__rewardsButtonVisible),
                            children: ee(p, (a, s) =>
                                n
                                    ? t.createElement(U, { ...Lt(a, g), key: `${a.name}_${s}` })
                                    : e.jsx(
                                          bs,
                                          { animationConfig: Ji(s, h), children: e.jsx(U, { ...Lt(a, g) }) },
                                          `${a.name}_${s}`,
                                      ),
                            ),
                        }),
                        b &&
                            e.jsx(r.div, {
                                style: v,
                                children: e.jsx('div', {
                                    className: Yi.buttonWrapper,
                                    children: e.jsx(me, {
                                        theme: pe.secondary,
                                        size: ce.large,
                                        className: a(Yi.rewardBtn, i && Yi.rewardBtn__currentRewardsAnimation),
                                        classNames: { content: Yi.buttonContent },
                                        onClick: () => x.push(ws.battlePass.buyPassRewards, { packageID: c }),
                                        children: e.jsx(P, {
                                            text: en.readOrEmpty('battle_pass.battlePassBuyView.btnRewards'),
                                            binding: { count: _ },
                                            classMix: Yi.text,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
            ],
        });
    }),
    tn = {
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
    sn = re.resolve('strings'),
    rn = 'x36x36',
    nn = 'x52x52',
    on = n(function ({ starterPackRewards: t, presentSize: s, rewardSize: r, classNames: i }) {
        return e.jsxs('div', {
            className: tn.base,
            children: [
                e.jsx('div', {
                    className: a(tn.presentLogo, tn[`presentLogo__${s}`], null == i ? void 0 : i.presentLogo),
                }),
                e.jsx('div', {
                    className: a(tn.equalLogo, null == i ? void 0 : i.equalLogo),
                    children: sn.readOrEmpty('battle_pass.progression.footer.starter_pack.equal'),
                }),
                e.jsx('div', {
                    className: tn.rewardsWrapper,
                    children: e.jsx('div', {
                        className: tn.rewards,
                        children: ee(t, (a, t) =>
                            e.jsx(
                                U,
                                { ...Lt(a, r), className: null == i ? void 0 : i.reward },
                                `reward_${a.name}_${t}`,
                            ),
                        ),
                    }),
                }),
            ],
        });
    }),
    ln = 'StarterPack_packDescription_e09c33a3',
    cn = 'StarterPack_purchaseText_67051b2',
    dn = 'StarterPack_presentLogo_f1509f42',
    _n = 'StarterPack_equalLogo_4d2bea9f',
    un = re.resolve('strings'),
    mn = n(function () {
        const { model: a } = yi(),
            t = a.computes.starterPackRewards(),
            { breakpoint: s } = z(),
            r = s.weight < F.medium.weight ? H.Small : H.Big;
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(be, {
                    text: un.readOrEmpty('battle_pass.battlePassBuyView.confirm.starterPack.description'),
                    upgradeLegacy: !0,
                    params: {
                        purchaseText: e.jsx('span', {
                            className: cn,
                            children: un.readOrEmpty('battle_pass.battlePassBuyView.confirm.starterPack.purchaseText'),
                        }),
                    },
                    className: ln,
                }),
                e.jsx(on, {
                    starterPackRewards: t,
                    presentSize: nn,
                    rewardSize: r,
                    classNames: { presentLogo: dn, equalLogo: _n },
                }),
            ],
        });
    }),
    pn = {
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
    bn = re.resolve('strings'),
    hn = re.resolve('images'),
    fn = n(() => {
        const [s, r] = t.useState(!1),
            i = t.useRef(!1),
            { model: n, controls: o } = yi(),
            { chapterID: l, remainingLevelsCount: c, isPurchaseWithLevels: d } = n.package.get(),
            _ = n.computes.hasStarterPackInChapter(l),
            u = n.main.isShopOfferAvailable.get(),
            m = X();
        Y(A.ESCAPE, () => m.goBack());
        const p = (() => {
            const e = String(l).slice(-1),
                a = `battlePass.backgrounds.chapter_general.c_${l}`,
                t = `battlePass.backgrounds.chapter_general.default_${e}`;
            return hn.readOrEmpty(a, 'silent') || hn.readOrEmpty(t);
        })();
        t.useEffect(() => {
            if (i.current)
                return (
                    r(!0),
                    Z(() => {
                        r(!1);
                    }, 300)
                );
            i.current = !0;
        }, [d, i]);
        const b = le(
            { iconSize: bi, shieldSize: ni, containerSize: ei },
            {
                medium: { iconSize: hi, shieldSize: oi, containerSize: ai },
                large: { iconSize: fi, shieldSize: li, containerSize: ti },
            },
        );
        return e.jsxs('div', {
            className: pn.base,
            style: { backgroundImage: `url(${p})` },
            children: [
                e.jsx('div', {
                    className: a(
                        pn.contentWrapper,
                        !u && pn.contentWrapper__noShopOffer,
                        s && pn.contentWrapper__rewardsUpdateAnimation,
                    ),
                    children: e.jsxs('div', {
                        className: pn.content,
                        children: [
                            e.jsx('div', {
                                className: pn.emblem,
                                children: e.jsx(wi, {
                                    iconSize: b.iconSize,
                                    shieldSize: b.shieldSize,
                                    containerSize: b.containerSize,
                                    bpPurchased: !0,
                                    chapterID: l,
                                }),
                            }),
                            e.jsxs('div', {
                                className: pn.chapterInfo,
                                children: [
                                    e.jsx('div', {
                                        className: pn.chapterName,
                                        children: bn.readOrEmpty(`battle_pass.chapter.fullName.c_${l}`),
                                    }),
                                    c > 0 &&
                                        e.jsx('div', {
                                            className: pn.checkbox,
                                            children: e.jsx(he, {
                                                checked: d,
                                                onCheckedChange: o.togglePurchaseWithLevels,
                                                classNames: { checkIcon: pn.checkIcon, check: pn.check },
                                                'data-test-id': 'buyLevelsCheckbox',
                                                children: e.jsx(be, {
                                                    text: bn.pluralOrEmpty(
                                                        'battle_pass.battlePassBuyView.confirm.checkbox.stage',
                                                        c,
                                                    ),
                                                    upgradeLegacy: !0,
                                                    params: { stagesNumber: c },
                                                    className: pn.checkboxLabel,
                                                }),
                                            }),
                                        }),
                                    s
                                        ? e.jsx(an, {
                                              isCheckboxAnimationActive: s,
                                              className: pn.previousRewards,
                                              isPrevious: !0,
                                          })
                                        : e.jsx(an, { isCheckboxAnimationActive: s, className: pn.currentRewards }),
                                    e.jsx('div', { className: pn.starterPack, children: _ && e.jsx(mn, {}) }),
                                    e.jsx(Bi, { isPriceUpdateAnimation: s }),
                                ],
                            }),
                        ],
                    }),
                }),
                u &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx('div', { className: pn.offerBack }),
                            e.jsx('div', {
                                className: pn.offerWrapper,
                                children: e.jsx('div', { className: pn.offer, children: e.jsx(Qi, {}) }),
                            }),
                        ],
                    }),
            ],
        });
    }),
    gn = { context: 'model.rewards', rootId: R.aliases.battle_pass.BuyPass('resId') },
    vn = n(() => {
        const { model: a } = yi();
        switch (a.main.state.get()) {
            case 'buyState':
            default:
                return e.jsx(fn, {});
            case 'rewardsState':
                return e.jsx(Mr, { options: gn, children: e.jsx(Kr, {}) });
        }
    }),
    xn = () => e.jsx(Ci, { options: { rootId: R.aliases.battle_pass.BuyPass('resId') }, children: e.jsx(vn, {}) }),
    wn = [
        { emblem: { delay: 0, diff: 60, duration: 350 } },
        { deadline: { delay: 30 } },
        { chapterName: { delay: 60 } },
        { finalReward: { delay: 90 } },
        { buttonsGroup: { delay: 120 } },
    ],
    Cn = (e = 0, a = 30, t = 200) => ({
        from: { opacity: 0, transform: `translateY(${a}rem)` },
        to: { opacity: 1, transform: 'translateY(0rem)' },
        config: { duration: t, easing: fe.easeInOutCubic },
        delay: e,
    }),
    yn = re.resolve('images'),
    jn = re.resolve('videos'),
    [Sn, Nn] = G()(
        ({ observableModel: e }) => {
            const a = e.array('chapters'),
                t = { root: e.object(), selectedChapterID: o.box(0), prevChapterIndex: o.box(0), chapters: a },
                s = i(() => ge(a.get(), ({ isExtra: e }) => e)),
                r = i(() => ge(a.get(), ({ chapterState: e }) => e === qt.Active)),
                n = i(() => ve(a.get(), ({ chapterState: e }) => e === qt.Completed)),
                l = i((e) => oe(a.get(), (a) => a.chapterID === e), { equals: q }),
                c = i((e) => {
                    const t = oe(a.get(), (a) => a.chapterID === e);
                    return {
                        levelProgression: (null == t ? void 0 : t.levelProgression) || 0,
                        currentLevel: (null == t ? void 0 : t.currentLevel) || 0,
                    };
                }),
                d = i(() => ne(t.chapters.get(), (e) => !e.isExtra), { equals: q }),
                _ = i(() => ne(t.chapters.get(), (e) => !e.isExtra && !e.isPostProgression), { equals: q }),
                u = i(() => ne(d(), (e) => e.chapterState === qt.Completed).length, { equals: q }),
                m = i(() => ne(t.chapters.get(), (e) => e.isExtra)),
                p = i(() => ne(t.chapters.get(), (e) => e.isPostProgression)),
                b = [2],
                h = i(
                    () => {
                        const e = oe(t.chapters.get(), ({ chapterID: e }) => e === t.selectedChapterID.get());
                        return e || xe(t.chapters.get(), t.prevChapterIndex.get());
                    },
                    { equals: q },
                ),
                f = i(
                    () => {
                        const { timeLeft: e, isExtra: a } = h();
                        return a ? we(e).days < 3 : we(e).days < 20;
                    },
                    { equals: q },
                ),
                g = i(() => [...(s() ? m() : []), ..._(), ...p()]),
                v = i(
                    () => {
                        const e = [];
                        return (
                            ee(g(), (a) => {
                                const t = String(a.chapterID).slice(-1),
                                    s = `battlePass.backgrounds.chapter_choice.c_${a.chapterID}`,
                                    r = `battlePass.backgrounds.chapter_choice.default_${t}`,
                                    i = `battle_pass.chapter_choice.c_${a.chapterID}.idle`,
                                    n = `battle_pass.chapter_choice.default_${t}.idle`;
                                e.push({
                                    chapter: a.chapterID,
                                    mainBg: yn.readOrEmpty(s, 'silent') || yn.readOrEmpty(r),
                                    idleBg: jn.readOrEmpty(i, 'silent') || jn.readOrEmpty(n, 'silent'),
                                });
                            }),
                            e
                        );
                    },
                    { equals: q },
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
                        Ce(
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
    kn = 'LoopVideo_cfc6c5cb';
function In({ src: a, style: s }) {
    const r = t.useRef(null),
        [i, n] = ye(() => {
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
        e.jsx(je, { src: a, style: s, className: kn, ref: r, autoplay: !0, loop: !0 })
    );
}
const Pn = 'Background_d1f724bf',
    Rn = 'Background_mainBg_b8b64d56',
    Bn = 'Background_idleBg_30e8ffa',
    An = n(function ({ style: t, i: s, index: i, classNames: n = {} }) {
        const { model: o } = Nn(),
            l = o.prevChapterIndex.get(),
            c = o.computes.backgrounds(),
            { mainBg: d, idleBg: _ } = c[s],
            { width: u, height: m } = Se(),
            p = Ne(),
            b = Wt(u, m, p, _);
        return e.jsxs('div', {
            className: Pn,
            children: [
                e.jsx(r.div, {
                    className: a(Rn, null == n ? void 0 : n.main),
                    style: {
                        ...t,
                        backgroundImage: `url(${d})`,
                        zIndex: s === i ? 3 : s === l ? 2 : 1,
                        transform: t.x.to((e) => `translateX(${e}rem)`),
                    },
                }),
                s === i &&
                    e.jsx('div', {
                        className: a(Bn, null == n ? void 0 : n.idle),
                        children: e.jsx(In, { src: _, style: b }),
                    }),
            ],
        });
    }),
    En = 2,
    Tn = 'isCommonProgression';
(ke.lightTank, ke.mediumTank, ke.heavyTank, ke['AT-SPG'], ke.SPG, O(1, 12, Ie));
const Ln = { heavy_tank: Ae, medium_tank: Be, light_tank: Re, at_spg: Pe };
function Dn(e, a) {
    return e === Tn && a.status !== Le.UNSUITABLE_TO_QUEUE && a.bpProgress < a.maxBpScore;
}
function Wn(e, a, t, s) {
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
const On = {
    ['levels']: (e, a) => !e.levels || e.levels.includes(`level_${a.level}`),
    ['nations']: (e, a) => !e.nations || e.nations.includes(Te(a.nationId)),
    ['vehicle_types']: (e, a) => !e.vehicle_types || e.vehicle_types.includes(a.type),
};
function Mn(e, a, t) {
    let s = !1;
    const r = e.specials ?? [];
    for (const i of r)
        if ('rented' !== i) {
            if (!Wn(r, i, a, t)) return !1;
        } else s = !0;
    if (!s && Ee(a)) return !1;
    if (t && e.battle_pass && e.battle_pass.length > 0) for (const i of e.battle_pass) if (!Dn(i, t)) return !1;
    for (const i of Object.keys(e)) if (i in On && !On[i](e, a)) return !1;
    return ((e, a) => {
        const t = De(a.role);
        let s = !1;
        for (const r of Object.keys(Ln)) if (r in e && ((s = !0), e[r].some((e) => e.includes(t)))) return !0;
        return !s;
    })(e, a);
}
function Vn(e, { shortName: a, fullName: t }) {
    const s = e.toLowerCase();
    return !(s.length > 0 && !a.toLowerCase().includes(s) && !t.toLowerCase().includes(s));
}
function zn(e, a, t) {
    const s = e[a] ?? [],
        r = { ...e };
    return ((r[a] = s.includes(t) ? s.filter((e) => e !== t) : [...s, t]), r[a].length > 0 || delete r[a], r);
}
function Fn(e, a) {
    return 'regular' === a.type
        ? zn(e, a.field, a.value)
        : Object.keys(Ln).reduce((e, t) => {
              const s = Ln[t].find((e) => e.includes(a.role));
              return s
                  ? zn(e, t, ((i = s), 'at_spg' === (r = t) ? `role_ATSPG_${i}` : `role_${r[0].toUpperCase()}T_${i}`))
                  : e;
              var r, i;
          }, e);
}
function $n(e, a, t, s) {
    if (t.favorite !== s.favorite) return t.favorite ? -1 : 1;
    const r = e[Te(t.nationId)] ?? 0,
        i = e[Te(s.nationId)] ?? 0;
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
const [Hn, Un] = G('FilterVehiclesProvider')(
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
                n = We.structural(() => t(i.defaultFilters.get())),
                l = {
                    ...e.primitives(['carouselRowCount']),
                    filters: o.box(r, { deep: !1 }),
                    searchName: o.box((null == s ? void 0 : s[0]) ?? ''),
                    nations: e.arrayClone('nationsOrder'),
                };
            return {
                ...l,
                computes: {
                    hasFilters: We.primitive(
                        () => !Oe.structural(n(), l.filters.get()) || l.searchName.get().length > 0,
                    ),
                    nations: () => l.nations.get(),
                    nationToIndex: We.shallow(() => l.nations.get().reduce((e, a, t) => ((e[a] = t), e), {})),
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
                        a.filters.set(Fn(a.filters.get(), e));
                    }),
                    carouselTypeChange: t.createCallback((e) => ({ rowCount: e }), 'onCarouselTypeChange'),
                }
            );
        },
    ),
    Gn = 'disabled',
    qn = [ke.lightTank, ke.mediumTank, ke.heavyTank, ke['AT-SPG'], ke.SPG].reduce((e, a, t) => ((e[a] = t), e), {}),
    [Xn, Zn] = G('VehicleStatisticsProvider')(({ observableModel: e }) => {
        const a = e.dict('statistics'),
            t = We.structural((e) => a.get(e));
        return { ids: We.primitive(() => a.keys), get: t };
    }),
    [Kn, Qn] = G('VehiclesProvider')(
        ({ observableModel: e }) => {
            const a = { vehicles: e.dictRef('vehicles') };
            return {
                get: We.structural((e) => {
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
                    return { ...s, imageKey: Me(s.name) };
                }),
                has: We.primitive((e) => Boolean(a.vehicles.get(e))),
                ids: We.shallow(() => [...a.vehicles.keys.values()]),
                amount: We.primitive(() => a.vehicles.length),
                list: We.shallow(() => {
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
        J,
        { useRequires: () => ({ statistics: Zn() }) },
    ),
    [Yn, Jn] = G('MyVehiclesProvider')(
        (e) => {
            const a = e.requires.statistic.model.ids,
                t = We.structural((t) => {
                    if (a().has(t)) return e.requires.vehicles.model.get(t);
                }),
                s = We.shallow(() => {
                    const t = [];
                    for (const s of a().values()) {
                        const a = e.requires.vehicles.model.get(s);
                        a ? t.push(a) : console.warn(`No vehicle with id: ${s}`);
                    }
                    return t;
                });
            return { get: t, getAll: s, amount: We.primitive(() => s().length), ids: a };
        },
        J,
        { useRequires: () => ({ vehicles: Qn(), statistic: Zn() }) },
    ),
    eo = re.resolve('strings'),
    ao = Ve(Fe + $e),
    to = () => `${Date.now().toString(16)}_${ao(3)}`;
function so(e, a, t = 1) {
    const s = ze(a, { count: t });
    return e.has(s) ? so(e, a, t + 1) : s;
}
function ro(e = '', a = []) {
    return {
        title: '' !== e ? e : eo.readOrEmpty('playlists.defaultName'),
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        list: a,
    };
}
const io = (e) => ({ type: 'ok', value: e });
function no(e) {
    if ('ok' === e.type) return e.value;
}
const oo = 'delete',
    lo = 'import',
    co = _({ title: p(), createdAt: u(f(), h(), b(0)), modifiedAt: u(f(), h(), b(0)), list: m(u(f(), h())) }),
    _o = u(
        p(),
        g((e) => (e.length > 0 ? e : void 0)),
    ),
    [uo, mo, { Context: po }] = G('PlaylistsProvider')(
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
                n = We.shallow(() => t.keys),
                l = We.primitive(() => v(_o, s.selectedID.get())),
                c = We.structural((e) => {
                    try {
                        const a = t.get(e);
                        if (!a) return io(void 0);
                        const s = v(co, JSON.parse(a)),
                            r = new Set();
                        for (const e of s.list)
                            if (He[e]) {
                                const a = He[e].find((e) => Boolean(i.myVehicles.get(e.toString())));
                                r.add(a ?? e);
                            } else r.add(e);
                        return io({ ...s, list: [...r.values()] });
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
                d = We.shallow(() =>
                    Ue(n().values())
                        .map((e) => c(e))
                        .filter((e) => 'ok' === e.type && void 0 !== e.value)
                        .map((e) => e.value.title)
                        .reduce((e, a) => e.add(a), new Set()),
                ),
                _ = We.primitive((e) => {
                    const a = c(e);
                    if ('ok' !== a.type || void 0 === a.value) throw new Error(`Can't get playlist by id ${e}`);
                    return a.value;
                }),
                u = We.structural((e) => {
                    const a = c(e);
                    if ('ok' === a.type && void 0 !== a.value) return { id: e, ...a.value };
                }),
                m = We.shallow(() =>
                    Ue(n().values())
                        .map((e) => u(e))
                        .filter((e) => void 0 !== e)
                        .toArray()
                        .sort((e, a) => e.title.localeCompare(a.title))
                        .map((e) => e.id),
                ),
                p = We.primitive(() => {
                    const e = l();
                    if (e) return u(e);
                }),
                b = We.shallow(() => {
                    const a = e.filters.model.computes.nationToIndex();
                    return Ge(e.myVehicles.model.getAll(), (e, t) => $n(a, qn, e, t));
                }),
                h = We.primitive((e) => {
                    var a;
                    const t = u(e),
                        s = g();
                    if (void 0 === t || 0 === t.list.length) return;
                    const r = new Set(t.list);
                    for (let i = 0; i < s.length; i += 1) {
                        const e = Number(null == (a = s[i]) ? void 0 : a.id);
                        if (qe(e) && r.has(e)) return i;
                    }
                }),
                f = We.primitive(() => !1 === Oe.structural(r(), i.filters.get()) || i.searchName.get().length > 0),
                g = We.shallow(() => {
                    const a = i.filters.get(),
                        t = b(),
                        s = i.searchName.get();
                    return t.filter((t) => {
                        if (!Vn(s, t)) return !1;
                        const r = e.statistic.model.get(t.id);
                        return Mn(a, t, r);
                    });
                }),
                x = We.primitive((a) => {
                    var t;
                    return Boolean(null == (t = e.statistic.model.get(a)) ? void 0 : t.elite);
                }),
                w = We.shallow((a) => {
                    const t = e.vehicles.model.get(a);
                    return null == t ? void 0 : t.imageKey;
                }),
                C = We.primitive(() => g().length),
                y = We.shallow(() => {
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
                filters: Xe({
                    update: (a) => {
                        e.filters.set(Fn(e.filters.get(), a));
                    },
                    reset: () => {
                        (e.filters.set(e.defaultFilters()), e.searchName.set(''));
                    },
                    search: (a) => e.searchName.set(a),
                    change: (a) => {
                        e.filters.set(Fn(e.filters.get(), a));
                    },
                }),
                create: l((a) => {
                    const { id: s = to(), vehicleIds: r = [], skipRedirect: i = !1 } = a ?? {};
                    t({ id: s, initial: ro(so(e.titles(), 'playlists.defaultName'), r), skipRedirect: i });
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
                    l(() => ({ type: lo, params: JSON.stringify({ titles: Array.from(e.titles().values()) }) })),
                    'openImportConfirm',
                ),
                openDeleteConfirm: a.createCallback(
                    (e, a) => ({ id: e, type: oo, params: JSON.stringify({ title: a }) }),
                    'openDeleteConfirm',
                ),
            };
        },
        { useRequires: () => ({ vehicles: Qn(), myVehicles: Jn(), filters: Un(), statistic: Zn() }) },
    ),
    bo = 'pending',
    ho = 'readyToSelect',
    fo = Gn,
    [go, vo] = G('VehiclesInventoryProvider')(
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
                r = We.shallow(() => {
                    const a = s.intCD.get();
                    return e.requires.vehicles.model.get(a);
                }),
                i = We.shallow((a) => {
                    if (void 0 === a) return;
                    const t = s.intCD.get();
                    return -1 === t ? e.requires.vehicles.model.get(a) : e.requires.vehicles.model.get(t);
                }),
                n = We.shallow(() => {
                    const a = s.intCD.get();
                    return e.requires.statistic.model.get(a);
                }),
                l = We.primitive(() => -1 !== s.intCD.get()),
                c = We.shallow((e) => Ze(e, (e) => _.get(String(e)))),
                _ = e.requires.myVehicles.model,
                u = We.structural(() => e.requires.vehicles.model.list().filter((e) => e.rent.isRented)),
                m = We.primitive(() =>
                    e.requires.vehicles.model.list().some((a) => {
                        const t = e.requires.statistic.model.get(a.vehicleId);
                        if (t) return 'inPrebattle' === t.status;
                    }),
                ),
                p = We.primitive(() => {
                    const a = [..._.getAll()],
                        t = e.requires.filters.model.computes.nationToIndex();
                    return (a.sort((e, a) => $n(t, qn, e, a)), a);
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
                                    !1 !== n.has(a.id) && !!Mn(s, a, e.requires.statistic.model.get(a.id)) && Vn(r, a),
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
                        amount: We.primitive(() => t.get().length),
                        list: () => t.get(),
                        ids: We.shallow(() => t.get().map((e) => e.id)),
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
                myVehicles: Jn(),
                vehicles: Qn(),
                statistic: Zn(),
                filters: Un(),
                playlists: t.useContext(po),
            }),
        },
    ),
    xo = -1,
    [wo, Co, { Context: yo }] = G('ManageableVehiclePlaylistsModel')(
        (e) => {
            const a = {
                    ...e.observableModel.primitives({ intCD: 'vehicleId' }),
                    displayedVehicleId: o.box(xo),
                    changesInPlaylistSelection: o.set(new Set()),
                },
                t = We.shallow(() =>
                    e.requires.playlists.model.sortedIds().reduce((a, t) => {
                        const s = e.requires.playlists.model.byIdFull(t);
                        return (s ? a.push(s) : console.warn(`Missing playlist data for id = ${t}`), a);
                    }, []),
                ),
                s = We.structural(() =>
                    t().map(({ id: e, title: t, list: s }) => {
                        const r = s.includes(a.displayedVehicleId.get());
                        return { id: e, title: t, selected: a.changesInPlaylistSelection.has(e) ? !r : r };
                    }, []),
                ),
                r = We.primitive(() => 0 === s().length);
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
                        vehicle: We.shallow(() => {
                            const t = a.displayedVehicleId.get(),
                                s = e.requires.vehicles.model.get(t),
                                r = e.requires.vehicleStatistics.model.get(t);
                            if (void 0 !== s && void 0 !== r) return { ...s, elite: r.elite };
                        }),
                        empty: We.primitive(() => a.vehicleId.get() === xo),
                        sortedPlaylists: t,
                        hasChanges: We.primitive(() => a.changesInPlaylistSelection.size > 0),
                        enabled: We.primitive(() => e.requires.playlists.model.enabled.get()),
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
                    const t = no(e.requires.playlists.model.byId(s));
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
        { useRequires: () => ({ vehicles: Qn(), playlists: mo(), vehicleStatistics: Zn() }) },
    ),
    jo = () => t.useContext(yo),
    So = (e) =>
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
    No = 'Buttons_937965ba',
    ko = 'Buttons_right_268130b5',
    Io = 'Buttons_button_aeef4019',
    Po = 'Buttons_button__create_61690fd8',
    Ro = 'Buttons_icon_378ba619',
    Bo = re.resolve('strings'),
    Ao = n(function () {
        const { model: t, controls: s } = Co();
        return e.jsxs('div', {
            className: a(No),
            children: [
                e.jsx(Ke, {
                    body: Bo.readOrEmpty('playlists.managaeble_playlists.buttons.create.tooltipBody'),
                    children: e.jsx(me, {
                        className: a(Io, Po),
                        theme: me.themes.secondary,
                        size: me.sizes.extraSmall,
                        autoAlignContent: !1,
                        onClick: () => {
                            (s.goToCreatePlaylist([t.displayedVehicleId.get()]), s.reset());
                        },
                        children: e.jsx(So, { className: Ro }),
                    }),
                }),
                e.jsxs('div', {
                    className: ko,
                    children: [
                        e.jsx(me, {
                            className: Io,
                            theme: me.themes.secondary,
                            size: me.sizes.extraSmall,
                            onClick: () => {
                                (s.cancel(), s.reset());
                            },
                            children: e.jsx(Qe, {
                                text: Bo.readOrEmpty('playlists.managaeble_playlists.buttons.cancel.title'),
                            }),
                        }),
                        e.jsx(me, {
                            className: Io,
                            theme: me.themes.primary,
                            size: me.sizes.extraSmall,
                            disabled: !t.computeds.hasChanges(),
                            onClick: () => {
                                (s.save(), s.reset());
                            },
                            children: e.jsx(Qe, {
                                text: Bo.readOrEmpty('playlists.managaeble_playlists.buttons.save.title'),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Eo = 'Item_itemBackground_f5007fc6',
    To = 'Item_c5163bf',
    Lo = 'Item_checkbox_cfffba80',
    Do = 'Item_item__checked_5f6fcc69',
    Wo = 'Item_check_a68580c8',
    Oo = 'Item_checkboxLabel_885d0061',
    Mo = n(function ({ id: t, title: s, checked: r }) {
        const { controls: i } = Co();
        return e.jsxs('div', {
            className: a(To, r && Do),
            children: [
                e.jsx('div', { className: Eo }),
                e.jsx(he, {
                    checked: r,
                    onCheckedChange: () => i.togglePlaylist(t),
                    size: Ye.small,
                    className: Lo,
                    classNames: { label: Oo, check: Wo },
                    children: e.jsx(Qe, { text: s }),
                }),
            ],
        });
    }),
    Vo = 'List_152fbdf4',
    zo = 'List_scrollWrapper_e69e8089',
    Fo = 'List_scrollContent_30662217',
    $o = 'List_scrollbar_611defd3',
    Ho = n(function () {
        const { model: a } = Co(),
            t = a.computeds.playlistItems();
        return e.jsxs('div', {
            className: Vo,
            children: [
                e.jsx(Je, {
                    classNames: { wrapper: zo, content: Fo },
                    children: ee(t, ({ id: a, title: t, selected: s }) =>
                        e.jsx(Mo, { id: a, title: t, checked: s }, a),
                    ),
                }),
                e.jsx(ea, { classNames: { base: $o } }),
            ],
        });
    }),
    Uo = 'Vehicle_name_f5f779f6',
    Go = 'Vehicle_level_c03ad304',
    qo = 'Vehicle_type_9905a21f',
    Xo = n(function () {
        const { model: a } = Co(),
            t = a.computeds.vehicle();
        if (void 0 === t) return null;
        const s = De(t.role);
        return e.jsxs(aa, {
            children: [
                e.jsx(aa.Level, { value: t.level, className: Go }),
                ta(t.type) &&
                    e.jsx(aa.Type, { size: aa.Type.sizes.x24x24, className: qo, type: t.type, premium: t.elite }),
                e.jsx(Qe, { text: t.fullName, className: Uo }),
                s !== sa && e.jsx(aa.Role, { size: aa.Role.sizes.x16x16, roleKey: s }),
            ],
        });
    }),
    Zo = 'Styles_display_f2930fa3',
    Ko = 'Styles_header_dcb2494f',
    Qo = 'Styles_body_504cd01f',
    Yo = 'Styles_title_ece3f15e',
    Jo = re.resolve('strings');
function el({ className: t }) {
    return e.jsxs(ra.Header, {
        className: a(Ko, t),
        children: [
            e.jsx(ra.Title, {
                className: Yo,
                children: e.jsx(Qe, { text: Jo.readOrEmpty('playlists.managaeble_playlists.header.title') }),
            }),
            e.jsx(Xo, {}),
        ],
    });
}
function al({ className: t }) {
    return e.jsxs(ra.Body, {
        className: a(Qo, t),
        children: [e.jsx(ra.Divider, {}), e.jsx(ia, { children: e.jsx(Ho, {}) }), e.jsx(ra.Divider, {}), e.jsx(Ao, {})],
    });
}
const tl = t.memo(function ({ vehicleId: t, tipSize: s, className: r, children: i, ...n }) {
        return e.jsxs(ra.Display, {
            ...n,
            className: a(Zo, r),
            children: [e.jsx(ra.Tip, { size: s }), e.jsx(ra.Close, {}), i],
        });
    }),
    sl = n(({ children: e }) => {
        const a = na(),
            s = oa(),
            r = la(),
            i = ca(),
            { model: n, controls: o } = Co(),
            l = n.vehicleId.get(),
            c = n.displayedVehicleId.get(),
            [d, _] = t.useState(!1),
            [u, m] = t.useState(!1),
            p = K(() => {
                (m(!0), a.open(), r.run(() => m(!1), da));
            }),
            b = K(() => {
                (m(!0),
                    a.close(),
                    r.run(() => {
                        (_(!0),
                            o.setDisplayedVehicleId(xo),
                            i.run(() => {
                                (m(!1), _(!1));
                            }));
                    }, da));
            }),
            h = K(() => {
                (_(!0), o.setDisplayedVehicleId(l), i.run(() => _(!1)));
            });
        t.useEffect(() => {
            s || n.computeds.empty() || a.opened || (o.reset(), b());
        }, [a.opened]);
        const f = K(() => {
            i.isRunning ||
                (a.opened || r.isRunning || l === c
                    ? a.opened || l === xo || c === xo
                        ? a.opened && l === xo && c !== xo && b()
                        : r.isRunning || p()
                    : h());
        });
        return (
            t.useEffect(f, [f, l, c, a.opened, u, d]),
            _a(() => {
                n.computeds.empty() || o.reset();
            }),
            e
        );
    }),
    rl = (e) => `manageable-vehicle-playlists-model-${e}`,
    il = n(function ({ children: a, position: s, freeSpaceRem: r, tipSize: i }) {
        const { model: n, controls: o } = Co(),
            l = n.displayedVehicleId.get(),
            c = ua('rem'),
            d = K((e, { callerBounding: a }) => {
                const t = e.trigger.bounding.get();
                if (t && !ma(t, a)) return (e.close(), !1);
            }),
            _ = n.vehicleId.get(),
            u = n.computeds.isVehiclePlaylistsEmpty(),
            m = pa(_);
        return (
            t.useEffect(() => {
                u && m === xo && _ !== xo && (o.goToCreatePlaylist([_]), o.reset());
            }, [m, _, u, o]),
            u
                ? null
                : e.jsx(ra, {
                      id: rl(l),
                      children: e.jsxs(sl, {
                          children: [
                              e.jsx(ra.Portal, {
                                  paddingsRem: c,
                                  position: s,
                                  freeSpaceRem: r,
                                  onBeforePositionChange: d,
                                  children:
                                      l !== xo &&
                                      e.jsxs(
                                          tl,
                                          { vehicleId: l, tipSize: i, children: [e.jsx(el, {}), e.jsx(al, {})] },
                                          l,
                                      ),
                              }),
                              a,
                          ],
                      }),
                  })
        );
    });
const nl = 'emptySlot',
    ol = 'emptySlot',
    ll = 'left',
    cl = 'right',
    dl = 'both',
    _l = 'none',
    ul = 189,
    ml = 245,
    pl = {
        default: { single: ul, double: ul },
        breakpoints: { medium: { single: 224 }, large: { single: ml, double: ml }, extraLarge: { single: 302 } },
    },
    bl = (e, a) => (e || a ? (e ? (a ? _l : cl) : ll) : dl),
    hl = {
        base: 'Content_7ccb81a0',
        disabledOverlay: 'Content_disabledOverlay_a8908196',
        base__disabled: 'Content_base__disabled_da09528a',
        base__selected: 'Content_base__selected_da09528a',
        base__empty: 'Content_base__empty_da09528a',
    };
function fl({ children: t, selected: s, disabled: r, empty: i }) {
    return e.jsxs('div', {
        'data-name': 'Content',
        className: a(hl.base, i && hl.base__empty, s && hl.base__selected, r && hl.base__disabled),
        children: [t, r && e.jsx('div', { className: hl.disabledOverlay })],
    });
}
const gl = {
    base: 'Slot_977dd8f1',
    base__wrapper: 'Slot_base__wrapper_ae3081b5',
    base__disabled: 'Slot_base__disabled_334cc10f',
    base__empty: 'Slot_base__empty_d386066c',
    content: 'Slot_content_1a27c8cf',
    base__active: 'Slot_base__active_71f19f5c',
    base__selected: 'Slot_base__selected_71f19f5c',
    selected: 'Slot_selected_6e9f21df',
    selected__border: 'Slot_selected__border_e2a17304',
};
function vl({ children: t, selected: s = !1, disabled: r = !1, active: i, className: n, ...o }) {
    const l = r || void 0 === o.onClick;
    return e.jsx('div', {
        ...o,
        'data-name': 'Slot',
        className: a(
            gl.base,
            i && gl.base__active,
            s && gl.base__selected,
            r && gl.base__disabled,
            l && gl.base__empty,
            gl.base__wrapper,
            n,
        ),
        children: e.jsxs('div', {
            className: gl.content,
            children: [
                e.jsx(fl, { selected: s, disabled: r, empty: l, children: t }),
                s && e.jsx('div', { className: a(gl.selected, gl.selected__border) }),
                e.jsx('div', { className: gl.selected }),
            ],
        }),
    });
}
const xl = { buySlot: 'buySlot', buyTank: 'buyTank', restoreTank: 'restoreTank', rentTank: 'rentTank' },
    wl = {
        [xl.buySlot]: 'buy_slot',
        [xl.buyTank]: 'buy_vehicle_new',
        [xl.restoreTank]: 'restore_vehicle',
        [xl.rentTank]: 'wot_plus_slot',
    },
    Cl = (e) => e in xl,
    yl = {
        wrapper: 'ActionCards_wrapper_690d669a',
        text: 'ActionCards_text_cdbc926',
        wrapper__double: 'ActionCards_wrapper__double_70640c01',
        content: 'ActionCards_content_a46de8cf',
        content__buySlot: 'ActionCards_content__buySlot_a70e9708',
        icon: 'ActionCards_icon_f8219d70',
        contentIcon: 'ActionCards_contentIcon_166df330',
        currency: 'ActionCards_currency_ac7c654f',
        discount: 'ActionCards_discount_967a7825',
    },
    jl = { [bo]: 'menu.tankCarousel.wotPlusSelectionPending', [ho]: 'menu.tankCarousel.wotPlusSelectionAvailable' },
    Sl = n(function ({ type: t }) {
        const s = vo(),
            r = s.model.slots.price.currency.get(),
            i = s.model.slots.price.value.get(),
            n = s.model.slots.free.get(),
            o = s.model.slots.recover.get(),
            l = s.model.slots.discount.get(),
            c = s.model.telecomRentStatus.get();
        if (t === xl.buySlot)
            return e.jsx('div', {
                className: yl.currency,
                children: e.jsx(ba, {
                    type: ha.currency,
                    size: de.extraSmall,
                    enabled: l,
                    classNames: { icon: yl.discount },
                    children: e.jsx(_e, {
                        type: r,
                        size: de.extraSmall,
                        reverse: !0,
                        classNames: { base: a(yl.content, yl.content__buySlot), icon: yl.contentIcon },
                        children: i,
                    }),
                }),
            });
        if (t === xl.rentTank) {
            const a = jl[c];
            return a ? e.jsx(fa, { className: yl.text, upgradeLegacy: !0, path: a }) : null;
        }
        return e.jsxs('div', {
            className: yl.content,
            children: [
                t === xl.buyTank &&
                    e.jsx(fa, {
                        upgradeLegacy: !0,
                        path: 'menu.tankCarousel.vehicleStates.buyTankEmptyCount',
                        params: { count: n },
                    }),
                t === xl.restoreTank &&
                    e.jsx(fa, {
                        upgradeLegacy: !0,
                        path: 'menu.tankCarousel.vehicleStates.restoreTankCount',
                        params: { count: o },
                    }),
            ],
        });
    });
function Nl({ type: s, width: r, height: i, doubleRow: n, className: o }) {
    const l = vo(),
        c = ga(),
        d = l.model.slots.price.value.get(),
        _ = l.model.slots.price.defaultValue.get(),
        u = l.model.slots.discount.get();
    l.model.telecomRentStatus.get();
    const m = re.resolve('strings'),
        p = ie(`hangar.carousel.actionCards.x48x48.${s}`, `hangar.carousel.actionCards.x96x96.${s}`),
        b = va({
            header: m.readOrEmpty(`tooltips.tanks_carousel.${wl[s]}.header`),
            body: m.readOrEmpty(`tooltips.tanks_carousel.${wl[s]}.body`),
        }),
        h = xa(
            'actionSlotPrice',
            t.useMemo(() => [[d], [_]], [d, _]),
            t.useMemo(() => ({ disabled: !u }), [u]),
        ),
        f = u && wl[s] === wl.buySlot ? h : b;
    return e.jsx(vl, {
        ...f,
        className: o,
        style: { width: `${r}px`, height: `${i}px` },
        'data-test-id': s,
        onClick: function (e) {
            (f.onClick(), c.play('click', { target: 'vehicle:action-cards', original: e }));
            const a = {
                [xl.buySlot]: l.controls.buySlot,
                [xl.buyTank]: l.controls.goBuyVehicle,
                [xl.restoreTank]: l.controls.goRecoverVehicle,
                [xl.rentTank]: l.controls.selectTelecomRentalVehicle,
            }[s];
            if ('function' != typeof a) return console.error(`Unknown action type ${s} in ${Nl.name} handleClick`);
            a();
        },
        onMouseEnter: function (e) {
            (f.onMouseEnter(e), c.play('mouse-enter', { target: 'vehicle:action-cards', original: e }));
        },
        children: e.jsxs('div', {
            className: a(yl.wrapper, n && yl.wrapper__double),
            children: [
                e.jsx(wa, {
                    className: yl.icon,
                    path: `hangar.carousel.actionCards.x32x32.${s}`,
                    adaptive: { medium: { path: p } },
                }),
                e.jsx('div', {
                    className: yl.text,
                    children: e.jsx(fa, { path: `menu.tankCarousel.vehicleStates.${s}` }),
                }),
                e.jsx(Sl, { type: s }),
            ],
        }),
    });
}
const kl = 'undamaged',
    Il = { ['54033']: 'alpha', ['50705']: 'alpha', ['51201']: 'super', ['56833']: 'super' },
    Pl = {
        ammoNotFull: 'ammoNotFull',
        crewNotFull: 'crewNotFull',
        exploded: 'exploded',
        destroyed: 'destroyed',
        damaged: 'damaged',
        rentable: 'rentable',
        rentableAgain: 'rentableAgain',
        rentalIsOver: 'rentalIsOver',
        tooHeavy: 'tooHeavy',
        unsuitableToQueue: 'unsuitableToQueue',
        unsuitableToUnit: 'unsuitableToUnit',
        inPrebattle: 'inPrebattle',
        battle: 'battle',
        wot_plus_exclusive_vehicle_disabled: 'wot_plus_exclusive_vehicle_disabled',
    },
    Rl = {
        [Pl.ammoNotFull]: 'ammo',
        [Pl.crewNotFull]: 'crew',
        [Pl.exploded]: 'repair',
        [Pl.destroyed]: 'repair',
        [Pl.damaged]: 'repair',
        [Pl.rentable]: 'rental',
        [Pl.rentableAgain]: 'rental',
        [Pl.rentalIsOver]: 'rental',
        [Pl.tooHeavy]: 'notSuitable',
        [Pl.unsuitableToQueue]: 'notSuitable',
        [Pl.unsuitableToUnit]: 'notSuitable',
        [Pl.inPrebattle]: 'inPlatoon',
        [Pl.battle]: 'inBattle',
        [Pl.wot_plus_exclusive_vehicle_disabled]: 'notSuitable',
    };
function Bl(e, a, t) {
    return !(!e || a === Gn || !t) && t.status !== Pl.unsuitableToQueue && t.maxBpScore > 0;
}
const [Al, El, Tl] = G()(({ observableModel: e }) => ({
        ...e.primitives(['isCrystalEarnEnabled', 'isDailyMultipliedXpEnabled', 'isInfiniteAmmo']),
    })),
    Ll = () => t.useContext(Tl.Context),
    Dl = {
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
    Wl = {
        inactive: Dl.base__inactive,
        activating: Dl.base__activating,
        active: Dl.base__active,
        deactivating: Dl.base__deactivating,
    };
function Ol({ className: t, doubleRow: s, state: r = 'inactive', isCornerHidden: i = !1 }) {
    return 'inactive' === r
        ? null
        : e.jsxs('div', {
              className: a(Dl.base, r && Wl[r], s && Dl.base__double, t),
              children: [
                  e.jsx('div', { className: Dl.glow }),
                  !i && e.jsx('div', { className: Dl.corner }),
                  e.jsx('div', { className: Dl.arrow }),
                  [Dl.triangle__1, Dl.triangle__2, Dl.triangle__3].map((t) =>
                      e.jsx('div', { className: a(Dl.triangle, t) }, t),
                  ),
              ],
          });
}
const Ml = {
        base: 'Background_1089bc1c',
        wotPlus: 'Background_wotPlus_3cf6035a',
        crystal: 'Background_crystal_6112fa42',
        bpBonus: 'Background_bpBonus_86685469',
        flag: 'Background_flag_57525fcb',
        base__double: 'Background_base__double_26effab7',
        flag__active: 'Background_flag__active_de322c1b',
        vehicle: 'Background_vehicle_23ef6e2b',
        vehicle__dimmed: 'Background_vehicle__dimmed_4dddd8fc',
        crystal__limit: 'Background_crystal__limit_61072361',
        favorite: 'Background_favorite_d98f92cc',
        favorite__active: 'Background_favorite__active_7f14a6c7',
    },
    Vl = Ca('Favorite', Ml.favorite, { variants: { active: { true: Ml.favorite__active } } });
function zl({ vehicle: t, selected: s, active: r, className: i }) {
    return e.jsx(wa, {
        className: a(Ml.flag, s || (r && Ml.flag__active), i),
        path: `hangar.carousel.cards.flags.x400x300.${Te(t.nationId)}`,
        position: 'top left',
    });
}
const Fl = n(function ({ vehicle: s, statistic: r, validBP: i, doubleRow: n, classNames: o }) {
    var l;
    const c = (null == (l = Ll()) ? void 0 : l.model.isCrystalEarnEnabled.get()) ?? !0,
        d =
            (xe((null == r ? void 0 : r.numberOfCrystalEarned) ?? [], 1) ?? 0) <=
            (xe((null == r ? void 0 : r.numberOfCrystalEarned) ?? [], 0) ?? 0),
        _ = null == r ? void 0 : r.proBoostActive,
        u = c && s.crystalEarning,
        m = pa(_),
        p = t.useMemo(() => (_ ? (!1 === m ? 'activating' : 'active') : m ? 'deactivating' : 'inactive'), [_, m]);
    return e.jsxs(e.Fragment, {
        children: [
            (null == r ? void 0 : r.fromWotPlus) &&
                e.jsx('div', { className: a(Ml.wotPlus, null == o ? void 0 : o.wotPlus) }),
            e.jsx(Ol, { state: p, className: null == o ? void 0 : o.proBoostIcon, doubleRow: n, isCornerHidden: u }),
            u && e.jsx('div', { className: a(Ml.crystal, d && Ml.crystal__limit, null == o ? void 0 : o.crystal) }),
            (null == r ? void 0 : r.bpSpecial) &&
                i &&
                e.jsx('div', { className: a(Ml.bpBonus, null == o ? void 0 : o.bpBonus) }),
        ],
    });
});
function $l({ vehicle: t, validBP: s, dimmed: r, active: i, statistic: n, selected: o, doubleRow: l, ...c }) {
    return e.jsxs('div', {
        ...c,
        className: a(Ml.base, l && Ml.base__double, c.className),
        children: [
            e.jsx(zl, { vehicle: t, active: i, selected: o }),
            e.jsx(ya, {
                className: a(
                    Ml.vehicle,
                    (((null == n ? void 0 : n.status) && n.status !== kl) || r) && Ml.vehicle__dimmed,
                ),
                name: t.name,
            }),
            e.jsx(Fl, { vehicle: t, statistic: n, validBP: s, doubleRow: l }),
            e.jsx(Vl, { active: t.favorite }),
        ],
    });
}
const Hl = 'Bonuses_8169b4b3',
    Ul = 'Bonuses_bonus_af8ebe7c',
    Gl = 'Bonuses_bonus__active_2364401e',
    ql = 'Bonuses_bonusIcon_b65fb47f',
    Xl = 'Bonuses_bonusValue_322db074',
    Zl = 'Bonuses_rent_ea11a7e4',
    Kl = 'Bonuses_base__double_ca1cd57b',
    Ql = 'Bonuses_icon_3991db74',
    Yl = 'Bonuses_text_a556857c',
    Jl = re.resolve('strings');
function ec({ bonusMultiplier: t, className: s, classNames: r }) {
    return e.jsxs('div', {
        className: a(Ul, -1 !== t && Gl, s),
        children: [
            e.jsx('div', { className: a(ql, null == r ? void 0 : r.icon) }),
            e.jsx('div', {
                className: a(Xl, null == r ? void 0 : r.value),
                children: `${Jl.readOrEmpty('common.multiplierSmall')}${t}`,
            }),
        ],
    });
}
const ac = n(function ({ vehicle: t, statistic: s, doubleRow: r, ...i }) {
        var n;
        const o = (null == (n = Ll()) ? void 0 : n.model.isDailyMultipliedXpEnabled.get()) ?? !0;
        return e.jsxs('div', {
            ...i,
            className: a(Hl, r && Kl, i.className),
            children: [
                o && s && e.jsx(ec, { bonusMultiplier: s.bonusMultiplier }),
                e.jsx(ja.ShortCounter, {
                    time: t.rent.leftTime,
                    wins: t.rent.leftWins,
                    battles: t.rent.leftBattles,
                    classNames: { base: Zl, icon: Ql, text: Yl },
                }),
            ],
        });
    }),
    tc = {
        root: 'Information_root_6e8d4f26',
        base: 'Information_dd628d50',
        info: 'Information_info_b2948982',
        details: 'Information_details_e5340a0c',
        base__double: 'Information_base__double_6e8d4f26',
        text: 'Information_text_2260d128',
        text__level: 'Information_text__level_e5a9014e',
        text__premium: 'Information_text__premium_741ebb2f',
        truncatedName: 'Information_truncatedName_f698f1ce',
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
        identifier: 'Information_identifier_342fa79b',
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
    sc = Ca('VehicleName', {
        element: aa.Name,
        className: tc.text,
        cva: { variants: { premium: { true: tc.text__premium } } },
    });
function rc({ statistic: t, vehicle: s, className: r, status: i }) {
    const n = re.resolve('views'),
        o = re.resolve('aliases'),
        l = re.resolve('strings'),
        c = Sa({
            resId: o.read((e) => e.hangar.shared.VehiclesStatistics('resId')),
            contentId: n.read((e) =>
                'paused' !== i
                    ? e.lobby.battle_pass.tooltips.VehiclePointsTooltipView('resId')
                    : e.lobby.battle_pass.tooltips.BattlePassOnPauseTooltipView('resId'),
            ),
            args: { intCD: null == s ? void 0 : s.vehicleId },
        });
    return e.jsxs('div', {
        className: a(tc.battlePass, t.maxBpScore > 0 && tc.battlePass__active, t.bpSpecial && tc.battlePass__bonus, r),
        onMouseEnter: function (e) {
            null == c || c.onMouseEnter(e);
        },
        onMouseLeave: function (e) {
            null == c || c.onMouseLeave();
        },
        children: [
            e.jsxs('div', {
                className: tc.bpPoints,
                children: [
                    e.jsx('div', { className: tc.points, children: Na.formatNumber('integral', t.bpProgress) }),
                    e.jsx('div', {
                        className: a(tc.points, tc.points__slash),
                        children: l.readOrEmpty('common.common.slash'),
                    }),
                    e.jsx('div', { className: tc.points, children: Na.formatNumber('integral', t.maxBpScore) }),
                    e.jsx('div', { className: tc.bpShadow }),
                ],
            }),
            e.jsx('div', { className: tc.bpIcon }),
        ],
    });
}
function ic({ statistic: t, elite: s, vehicle: r, selected: i, classNames: n, className: o }) {
    return e.jsxs('div', {
        className: a(tc.details, o),
        children: [
            t &&
                e.jsx(aa.Prestige, {
                    level: t.prestigeLevel,
                    grade: t.prestigeGrade,
                    type: t.prestigeType,
                    direction: ka.left,
                    className: a(tc.prestige, i && tc.prestige__active, null == n ? void 0 : n.prestige),
                }),
            e.jsx(aa.Level, { className: a(tc.text, tc.text__level, null == n ? void 0 : n.level), value: r.level }),
            ta(r.type) &&
                e.jsx(aa.Type, {
                    type: r.type,
                    premium: s || (null == t ? void 0 : t.elite),
                    size: aa.Type.sizes.x24x24,
                    className: null == n ? void 0 : n.type,
                }),
        ],
    });
}
function nc({ vehicle: t, className: s, classNames: r }) {
    const i = Il[t.id],
        n = t.nationChangeAvailable,
        o = t.rent.leftTime > 0 || t.rent.leftWins > 0 || t.rent.leftBattles > 0;
    return e.jsxs('div', {
        className: a(
            tc.identifier,
            tc[`identifier__${i}`],
            n && tc.identifier__changeNation,
            o && tc.identifier__rent,
            s,
        ),
        children: [
            e.jsx(sc, {
                className: null == r ? void 0 : r.name,
                premium: t.premium,
                children: e.jsx(Ia, { className: tc.truncatedName, text: t.shortName }),
            }),
            (i || n) &&
                e.jsx('div', {
                    className: a(
                        tc.identifierIcon,
                        tc[`identifierIcon__${i}`],
                        n && tc.identifierIcon__changeNation,
                        null == r ? void 0 : r.icon,
                    ),
                }),
        ],
    });
}
const oc = n(function ({ vehicle: t, statistic: s, selected: r, doubleRow: i, ...n }) {
        const o = vo(),
            l = o.model.bpState.active.get(),
            c = o.model.bpState.status.get();
        return e.jsxs('div', {
            ...n,
            className: a(tc.base, i && tc.base__double, n.className),
            children: [
                s && Bl(l, c, s) && e.jsx(rc, { vehicle: t, statistic: s, status: c }),
                e.jsxs(aa, {
                    className: tc.info,
                    children: [e.jsx(ic, { vehicle: t, statistic: s, selected: r }), e.jsx(nc, { vehicle: t })],
                }),
            ],
        });
    }),
    lc = {
        base: 'Overlay_fc7c8edc',
        alert: 'Overlay_alert_db4a0e15',
        alertIcon: 'Overlay_alertIcon_3d7c077a',
        base__double: 'Overlay_base__double_3c7155a',
        alertText: 'Overlay_alertText_8a4e1d4d',
        alertText__light: 'Overlay_alertText__light_bece984e',
    };
function cc({ status: t, classNames: s, className: r }) {
    const i = re.resolve('images'),
        n = ie(`hangar.carousel.cards.alerts.${Rl[t]}`, `hangar.carousel.cards.alerts.${Rl[t]}_upscale`),
        o = ie('hangar.carousel.cards.alerts.notSuitable', 'hangar.carousel.cards.alerts.notSuitable_upscale'),
        l = t === Pl.battle || t === Pl.inPrebattle;
    return e.jsxs('div', {
        className: a(lc.alert, r),
        children: [
            e.jsx(wa, { className: a(lc.alertIcon, null == s ? void 0 : s.icon), path: i.has(n) ? n : o }),
            e.jsx(fa, {
                upgradeLegacy: !0,
                className: a(lc.alertText, l && lc.alertText__light, null == s ? void 0 : s.text),
                path: `menu.tankCarousel.vehicleStates.${t}`,
                params: { icon: e.jsx(wa, { path: 'library.premium_small', width: 34, height: 16 }) },
            }),
        ],
    });
}
function dc({ statistic: t, doubleRow: s, ...r }) {
    return t.status === kl
        ? null
        : e.jsx('div', {
              ...r,
              className: a(lc.base, s && lc.base__double, r.className),
              children: e.jsx(cc, { status: t.status }),
          });
}
Ca('Disable', lc.disable);
const _c = 'Card_e79008fd',
    uc = 'Card_base__double_f8b7f334',
    mc = 'Card_content_a6141b08',
    pc = 'Card_border_e9cb9a85',
    bc = re.resolve('views'),
    hc = re.resolve('aliases'),
    fc = n(function ({ vehicleId: t, selected: s = !1, doubleRow: r, children: i, concurrent: n, ...o }) {
        const l = vo(),
            c = Qn().model.get(t),
            d = Zn().model.get(t),
            _ = ga(),
            u = l.model.current.inventoryId.get(),
            m = l.model.prebattleModeActive(),
            p = l.model.bpState.active.get(),
            b = l.model.bpState.status.get();
        if (!c || !d) return e.jsx(vl, { ...o });
        const h = n ? gc : $l;
        return e.jsxs(vl, {
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
                e.jsx(h, { vehicle: c, validBP: Bl(p, b, d), dimmed: m, statistic: d, selected: s, doubleRow: r }),
                e.jsx(vc, {
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
function gc(a) {
    const [s, r] = t.useState(!0),
        [, i] = t.useTransition();
    return (
        t.useEffect(() => {
            s && i(() => r(!1));
        }, [s]),
        s ? null : e.jsx($l, { ...a })
    );
}
function vc({ vehicle: s, statistic: r, selected: i, doubleRow: n, concurrent: o, disableContextMenu: l }) {
    const [c, d] = t.useState(o),
        _ = t.useRef(null),
        [, u] = t.useTransition(),
        m = Pa(
            'vehicle',
            t.useMemo(
                () => ({ inventoryId: null == s ? void 0 : s.inventoryId }),
                [null == s ? void 0 : s.inventoryId],
            ),
        ),
        p = Sa({
            resId: hc.read((e) => e.hangar.shared.VehiclesInventory('resId')),
            contentId: bc.read((e) => e.mono.hangar.vehicle_tooltip('resId')),
            args: w.useMemo(
                () => ({ inventoryId: null == s ? void 0 : s.inventoryId }),
                [null == s ? void 0 : s.inventoryId],
            ),
        });
    return (
        t.useEffect(() => {
            c && u(() => d(!1));
        }, [c]),
        c
            ? null
            : e.jsxs('div', {
                  ...p,
                  ...(!l && m),
                  ref: _,
                  className: a(_c, n && uc),
                  children: [
                      e.jsxs('div', {
                          className: mc,
                          children: [
                              e.jsx(ac, { vehicle: s, statistic: r, doubleRow: n }),
                              e.jsx(oc, { vehicle: s, selected: i, statistic: r, doubleRow: n }),
                          ],
                      }),
                      e.jsx(dc, { statistic: r, doubleRow: n }),
                  ],
              })
    );
}
const xc = {
    empty: 'ActiveSlots_empty_9aab1ce1',
    doubleSlots: 'ActiveSlots_doubleSlots_2ce42013',
    slot__double: 'ActiveSlots_slot__double_e321ab18',
};
function wc({ width: a, className: t }) {
    return e.jsx('div', {
        className: xc.empty,
        children: e.jsx(vl, {
            className: t,
            style: { width: `${a}px` },
            children: e.jsx('div', { className: xc.vehicleSlot }),
        }),
    });
}
function Cc({ slotId: s, width: r, currentVehicleId: i, double: n, className: o }) {
    const l = (function (e) {
        const a = jo(),
            s = Boolean(a && a.model.computeds.enabled()),
            r = !a || a.model.computeds.isVehiclePlaylistsEmpty(),
            i = K(() => {
                s && !r && a.model.vehicleId.get() === e && a.controls.reset();
            });
        return t.useMemo(() => {
            if (s && !r) return { 'data-popover-trigger-id': rl(e), onMouseDown: i };
        }, [r, s, i, e]);
    })(Number(s));
    return void 0 === s
        ? null
        : Cl(s)
          ? e.jsx(Nl, { className: a(pc, o), type: s, width: r, doubleRow: n })
          : s === nl
            ? e.jsx(wc, { className: a(pc, o), width: r })
            : e.jsx(fc, {
                  ...l,
                  vehicleId: s,
                  selected: s === i,
                  doubleRow: n,
                  className: a(pc, o),
                  style: { width: r },
              });
}
function yc({ chunkedSlots: t, classNames: s, ...r }) {
    return void 0 === t
        ? null
        : e.jsx('div', {
              className: xc.doubleSlots,
              children: t.map((t, i) =>
                  e.jsx(Cc, { ...r, slotId: t, className: a(xc.slot__double, null == s ? void 0 : s.slot) }, i),
              ),
          });
}
const jc = {
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
function Sc({ direction: t, className: s, ...r }) {
    return e.jsx(me, {
        ...r,
        classNames: {
            base: a(jc.button, jc[`button__${t}`], s),
            background: jc.background,
            border: jc.border,
            overlay: jc.overlay,
            content: jc.content,
        },
        theme: me.themes.secondary,
        size: me.sizes.small,
        autoAlignContent: !1,
        soundTarget: 'carousel:arrow_button',
        children: e.jsx(wa, { path: 'hangar.carousel.buttonArrow', className: jc.icon }),
    });
}
Sc.direction = { right: 'right', left: 'left' };
const Nc = {
        root: 'CarouselNavButtons_root_3f67251c',
        navButtonWrapper: 'CarouselNavButtons_navButtonWrapper_a13c2a68',
        navButton: 'CarouselNavButtons_navButton_adcc2e9b',
        navButton__left: 'CarouselNavButtons_navButton__left_5f6dc3a0',
        navButton__right: 'CarouselNavButtons_navButton__right_66b4f03f',
        navButton__hidden: 'CarouselNavButtons_navButton__hidden_69011a0b',
        mask: 'CarouselNavButtons_mask_d54421e2',
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
    },
    kc = 0;
function Ic(e) {
    return ({ button: a }) => {
        a === kc && e();
    };
}
function Pc({ itemWidth: s, api: r, children: i }) {
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
        className: Nc.navButtonWrapper,
        children: [
            e.jsx(Sc, {
                direction: Sc.direction.left,
                onMouseDown: Ic(() => h(-1)),
                onMouseUp: f,
                onMouseLeave: f,
                className: a(Nc.navButton, Nc.navButton__left, p && Nc.navButton__hidden),
            }),
            e.jsx('div', { className: a(Nc.mask, Nc[`mask__${bl(u, m)}`]), children: i }),
            e.jsx(Sc, {
                direction: Sc.direction.right,
                onMouseDown: Ic(() => h(1)),
                onMouseUp: f,
                onMouseLeave: f,
                className: a(Nc.navButton, Nc.navButton__right, b && Nc.navButton__hidden),
            }),
        ],
    });
}
const Rc = {
    base: 'CarouselSkeleton_1ac002e3',
    content: 'CarouselSkeleton_content_b18f8dd7',
    scroll: 'CarouselSkeleton_scroll_badf82c7',
};
function Bc(t) {
    return e.jsx('div', { ...t, className: a(Rc.content, t.className) });
}
function Ac({
    api: t,
    widthElement: s,
    totalElements: r,
    disabled: i,
    onDraggingState: n,
    renderElement: o,
    classNames: l,
}) {
    return e.jsx('div', {
        className: a(Rc.base, null == l ? void 0 : l.base),
        children: e.jsx(Pc, {
            api: t,
            itemWidth: s,
            children: e.jsx(Ea, {
                api: t,
                elementWidth: s - Ba(1),
                direction: 'horizontal',
                totalElements: r,
                wrappers: { Content: Bc },
                className: a(Rc.scroll, null == l ? void 0 : l.scroll),
                renderScroll: (a) => e.jsx(Ta, { ...a, api: t, disabled: i, onDraggingState: n, children: a.children }),
                renderElement: (a) => (o ? o(a) : e.jsx(wc, { className: null == l ? void 0 : l.element, width: s })),
            }),
        }),
    });
}
function Ec(e, a, s, r) {
    return t.useMemo(() => {
        if (!a) return { activeSlotsAmount: 0, activeSlotsIds: [] };
        const t = ((e, a) => ({
                left: [...(a != fo ? [xl.rentTank] : [])],
                right: [xl.buyTank, ...(e > 0 ? [xl.restoreTank] : []), xl.buySlot],
            }))(s, r),
            i = e.length + t.right.length + t.left.length,
            n = Math.max(0, a - i);
        return { activeSlotsAmount: i, activeSlotsIds: [...t.left, ...e, ...t.right, ...Array(n).fill(ol)] };
    }, [s, e, a, r]);
}
function Tc({ api: e, carouselRows: a }) {
    const s = (function (e) {
            const a = le(pl.default, pl.breakpoints);
            return Ba(e === En ? a.double : a.single);
        })(a),
        [r, i] = t.useState({ carouselRows: 0, cardWidth: 0, visibleSlots: 0 });
    return (
        t.useLayoutEffect(() => {
            function t() {
                const t = e.getWrapperSize();
                t &&
                    i(
                        a !== En
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
const Lc = 'Carousel_draggingOverlay_2ac699b0',
    Dc = 'Carousel_9b3e04da',
    Wc = 'Carousel_base__visible_24d53d12',
    Oc = 'Carousel_card_5449ec9a',
    Mc = 'Carousel_card__inactive_c59331d9';
n(function () {
    const s = jo(),
        [r, i] = t.useState(!1),
        { api: n } = La(),
        o = vo(),
        l = Un().model.carouselRowCount.get(),
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
        h = pa(p),
        f = o.model.slots.recover.get(),
        { carouselRows: g, cardWidth: v, visibleSlots: x } = Tc({ api: n, carouselRows: l }),
        { activeSlotsAmount: w, activeSlotsIds: y } = Ec(_, x, f, d),
        j =
            ((S = y),
            t.useMemo(() => {
                var e, a;
                const t = [];
                for (let s = 0; s < S.length; s += En) t.push(S.slice(s, s + En));
                return (
                    1 === (null == (e = t.at(-1)) ? void 0 : e.length) && (null == (a = t.at(-1)) || a.push(ol)),
                    t
                );
            }, [S]));
    var S;
    (t.useEffect(() => {
        const e = Da(500, !0, () =>
            Wa.contextMenu.hide(
                0,
                re.resolve('aliases').read((e) => e.common.contextMenu.Backport('resId')),
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
                        ? (o.current && i && 0 != o.current - i && e.applyScroll(p, { immediate: !0 }), (o.current = i))
                        : ((o.current = i), e.applyScroll(p, { immediate: !0 }));
                }
                return (
                    t(),
                    new Ra().add(e.events.on('resizeHandled', t)).add(e.events.on('recalculateContent', t)).dispose
                );
            }, [a, e, s, r, n, i]);
        })(n, b, v, g, _.length, x > w),
        (function (e, a, t, s, r) {
            const i = s === En;
            function n(s) {
                t(-1 !== e ? a[e + s].inventoryId : a[0].inventoryId);
            }
            const o = [
                { key: A.ARROW_DOWN, blockKey: !i || e % s == s - 1 || e === a.length - 1, action: () => n(1) },
                { key: A.ARROW_UP, blockKey: !i || e % s == 0, action: () => n(-1) },
                { key: A.ARROW_LEFT, blockKey: i ? e < s : 0 === e, action: () => n(-s) },
                { key: A.ARROW_RIGHT, blockKey: i ? e > a.length - (s + 1) : e === a.length - 1, action: () => n(s) },
                { key: A.HOME, blockKey: 0 === a.length, action: () => t(a[0].inventoryId) },
                { key: A.END, blockKey: 0 === a.length, action: () => t(a[a.length - 1].inventoryId) },
            ];
            for (const { key: l, blockKey: c, action: d } of o) {
                const e = r || c ? A.NONE : l;
                Y(e, d);
            }
        })(b, u, o.controls.select, g, 0 === _.length || c));
    const N = (function (e, a) {
        const [s, r] = t.useState(0 === a),
            i = ca();
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
                e.jsx(Ac, {
                    api: n,
                    widthElement: v,
                    totalElements: g === En ? j.length : y.length,
                    disabled: x > w,
                    onDraggingState: i,
                    classNames: { base: a(Dc, N && Wc), element: a(Oc, r && Mc) },
                    renderElement: (t) => {
                        const s = a(Oc, r && Mc);
                        return g === En
                            ? e.jsx(Oa, {
                                  failure: () => e.jsx(wc, { className: s, width: v }),
                                  children: e.jsx(
                                      yc,
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
                            : e.jsx(Oa, {
                                  failure: () => e.jsx(wc, { className: s, width: v }),
                                  children: e.jsx(
                                      Cc,
                                      { slotId: y[t], currentVehicleId: p, width: v, className: s, double: !1 },
                                      y[t] ?? t,
                                  ),
                              });
                    },
                }),
                s && s.model.computeds.enabled() && e.jsx(il, { freeSpaceRem: 0, tipSize: '32rem' }),
                C.createPortal(r && e.jsx('div', { className: Lc }), document.body),
            ],
        })
    );
});
const Vc = 'ActiveCardHeader_235d362d',
    zc = 'ActiveCardHeader_activeText_7d2a0ad7',
    Fc = 'ActiveCardHeader_idleVideo_b2e26623',
    $c = function ({ text: t, videoSrc: s, className: r = '', classNames: i }) {
        return e.jsxs('div', {
            className: a(Vc, r),
            children: [
                e.jsx('div', { className: a(zc, null == i ? void 0 : i.activeText), children: t }),
                e.jsx(je, { className: a(Fc, null == i ? void 0 : i.idleVideo), src: s, autoplay: !0, loop: !0 }),
            ],
        });
    },
    Hc = {
        base: 'Content_8ce13fac',
        base__disabled: 'Content_base__disabled_da09528a',
        base__selected: 'Content_base__selected_da09528a',
    };
function Uc({ children: t, selected: s, disabled: r }) {
    return e.jsx('div', { className: a(Hc.base, s && Hc.base__selected, r && Hc.base__disabled), children: t });
}
const Gc = 'Slot_750e4447',
    qc = 'Slot_base__disabled_440d6866',
    Xc = 'Slot_content_27d2b58',
    Zc = 'Slot_base__active_71f19f5c',
    Kc = 'Slot_base__selected_71f19f5c',
    Qc = 'Slot_selected_302eadc9',
    Yc = 'Slot_selected__border_e2a17304';
function Jc({ children: t, selected: s = !1, disabled: r = !1, active: i = !1, className: n, ...o }) {
    return e.jsx('div', {
        ...o,
        className: a(Gc, i && Zc, s && Kc, r && qc, n),
        children: e.jsxs('div', {
            className: Xc,
            children: [
                e.jsx(Uc, { selected: s, disabled: r, children: t }),
                s && e.jsx('div', { className: a(Qc, Yc) }),
                e.jsx('div', { className: Qc }),
            ],
        }),
    });
}
const ed = 'regular',
    ad = 'postprogression',
    td = 'extra',
    sd = (e, a) => (e ? td : a ? ad : ed),
    rd = {
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
    id = {
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
    nd = ({ type: t, className: s }) =>
        e.jsxs('div', {
            className: a(id.base, id[`base__${t}`], s),
            children: [
                e.jsx('div', { className: id.glowBig }),
                e.jsx('div', { className: id.line }),
                e.jsx('div', { className: id.shadow }),
                e.jsx('div', { className: id.glowInner }),
                e.jsx('svg', {
                    width: '42',
                    height: '42',
                    viewBox: '0 0 42 42',
                    className: id.blur,
                    children: e.jsx('g', { children: e.jsx('circle', { cx: '21', cy: '21', r: '3' }) }),
                }),
                e.jsx('div', { className: a(id.icon) }),
            ],
        }),
    od = 'UnlockedState_d8033d83',
    ld = 'UnlockedState_stages_ef0d6acd',
    cd = 'UnlockedState_mainStage_286ea378',
    dd = 'UnlockedState_additionalStage_83045438',
    _d = 'UnlockedState_cycleText_5b49e844',
    ud = R.strings.battle_pass.chapterChoice,
    md = function ({ currentLevel: a, cyclesCompletedCount: t, maxLevel: s }) {
        const r = (a - 1) % s;
        return e.jsxs('div', {
            className: od,
            children: [
                e.jsx(P, { classMix: _d, text: ud.postprogression.unlocked.cycle(), binding: { cycle: t + 1 } }),
                e.jsxs('div', {
                    className: ld,
                    children: [
                        e.jsx('span', { className: cd, children: `${r}` }),
                        e.jsx(P, { classMix: dd, text: ud.stages.additional(), binding: { level: s } }),
                    ],
                }),
            ],
        });
    },
    pd = 'PostprogressionInfo_f8fcfc44',
    bd = 'PostprogressionInfo_lockedText_c823728d',
    hd = R.strings.battle_pass.chapterChoice,
    fd = n(function ({ chapterID: a }) {
        const { model: t } = Nn(),
            { currentLevel: s, cyclesCompletedCount: r, maxLevel: i } = t.computes.getChapterById(a),
            n = t.computes.regularChapters().length - 1 !== t.computes.regularChaptersCompleteCount();
        return e.jsx('div', {
            className: pd,
            children: n
                ? e.jsx(be, {
                      className: bd,
                      text: hd.postprogression.locked(),
                      params: { count: t.computes.regularChapters().length - 1 },
                  })
                : e.jsx(md, { currentLevel: s, cyclesCompletedCount: r, maxLevel: i }),
        });
    }),
    gd = 'CompletedState_completeText_f209b72f',
    vd = 'CompletedState_completeText__bought_4533734f',
    xd = R.strings.battle_pass.chapterChoice,
    wd = function ({ isBought: t, chapterRewardsCount: s }) {
        return e.jsx(e.Fragment, {
            children: t
                ? e.jsx('div', { className: a(gd, vd), children: xd.stages.complete.improved() })
                : e.jsx(P, { classMix: gd, text: xd.stages.complete.unimproved(), binding: { count: s } }),
        });
    },
    Cd = 'UncompletedState_9e8c0393',
    yd = 'UncompletedState_mainStage_5808557f',
    jd = 'UncompletedState_additionalStage_ef80ee9c',
    Sd = R.strings.battle_pass.chapterChoice,
    Nd = function ({ currentLevel: a, maxStages: t }) {
        return e.jsxs('div', {
            className: Cd,
            children: [
                e.jsx('span', { className: yd, children: '' + (a - 1) }),
                e.jsx(P, { classMix: jd, text: Sd.stages.additional(), binding: { level: t } }),
            ],
        });
    },
    kd = 'RegularInfo_46f7818d',
    Id = 'RegularInfo_uncomplete_854e3542';
R.strings.battle_pass.chapterChoice;
const Pd = n(function ({ chapterID: a }) {
        const { model: t } = Nn(),
            {
                currentLevel: s,
                chapterState: r,
                isBought: i,
                chapterRewardsCount: n,
                maxLevel: o,
            } = t.computes.getChapterById(a);
        return e.jsx('div', {
            className: kd,
            children:
                r === qt.Completed
                    ? e.jsx(wd, { isBought: i, chapterRewardsCount: n })
                    : e.jsx('div', { className: Id, children: e.jsx(Nd, { currentLevel: s, maxStages: o }) }),
        });
    }),
    Rd = {
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
    Bd = re.resolve('images'),
    Ad = re.resolve('strings'),
    Ed = R.strings.battle_pass.chapterChoice,
    Td = n(function ({ chapterID: t, className: s = '' }) {
        const { model: r } = Nn(),
            { breakpoint: i } = z(),
            { isBought: n, isExtra: o, isPostProgression: l } = r.computes.getChapterById(t),
            c = sd(o, l),
            d = le({ iconSize: mi }, { large: { iconSize: pi }, extraLarge: { iconSize: hi } }),
            _ = ie(d.iconSize, fi),
            u = (() => {
                const e = String(t).slice(-1);
                return (
                    Bd.readOrEmpty(`battlePass.emblem.icon.c_${t}.${n ? 'purchased' : 'basic'}.${_}`, 'silent') ||
                    Bd.readOrEmpty(`battlePass.emblem.icon.default_${e}.${n ? 'purchased' : 'basic'}.${_}`)
                );
            })();
        return e.jsxs('div', {
            className: a(Rd.base, l && Rd.base__postprogression),
            children: [
                e.jsx('div', {
                    className: a(Rd.infoIcon, Rd[`infoIcon__${d.iconSize}`]),
                    style: { backgroundImage: `url(${u})` },
                }),
                e.jsxs('div', {
                    className: Rd.infoDescription,
                    style: { '--card-width': rd[c][i.name].cardWidth },
                    children: [
                        e.jsx('div', {
                            className: a(Rd.chapterName, n && Rd.chapterName__bought),
                            children: l
                                ? Ed.postprogression.name()
                                : Ad.readOrEmpty(`battle_pass.chapter.fullName.c_${t}`),
                        }),
                        l ? e.jsx(fd, { chapterID: t }) : e.jsx(Pd, { chapterID: t }),
                    ],
                }),
            ],
        });
    }),
    Ld = {
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
    Dd = re.resolve('images'),
    Wd = (e, a = !1) => (e === qt.Completed ? Va.done : a ? Va.locked : void 0),
    Od = n(function ({ chapterID: t, classNames: s = {} }) {
        const { model: r } = Nn(),
            { breakpoint: i } = z(),
            {
                chapterState: n,
                isExtra: o,
                isPostProgression: l,
                currentLevel: c,
                maxLevel: d,
            } = r.computes.getChapterById(t),
            _ = sd(o, l),
            u = t === r.selectedChapterID.get(),
            m = r.computes.regularChapters().length - 1 !== r.computes.regularChaptersCompleteCount() && l,
            p = String(t).slice(-1),
            b =
                Dd.readOrEmpty(`battlePass.chapter_choice.card_bg.c_${t}`, 'silent') ||
                Dd.readOrEmpty(`battlePass.chapter_choice.card_bg.default_${p}`),
            h =
                Dd.readOrEmpty(`battlePass.chapter_choice.tanks.c_${t}`, 'silent') ||
                Dd.readOrEmpty(`battlePass.chapter_choice.tanks.default_${p}`);
        return e.jsxs('div', {
            className: a(Ld.base, Ld[`base__${n}`], u && Ld.base__selected),
            children: [
                e.jsx('div', { className: Ld.bg, style: { backgroundImage: `url(${b})` } }),
                e.jsx('div', {
                    className: a(Ld.reward, s.reward),
                    style: {
                        backgroundImage: `url(${h})`,
                        width: rd[_][i.name].rewardWidth,
                        height: rd[_][i.name].rewardHeight,
                    },
                }),
                n !== qt.Completed &&
                    !l &&
                    e.jsx(Ma, {
                        value: c,
                        maxValue: d,
                        size: 'small',
                        className: a(Ld.progressBar, n === qt.Active && Ld.progressBar__active),
                        classNames: { background: Ld.progressBarBg },
                    }),
                e.jsx('div', { className: Ld.info, children: e.jsx(Td, { chapterID: t }) }),
                Wd(n, m) && e.jsx('div', { className: Ld.status, children: e.jsx(nd, { type: Wd(n, m) }) }),
            ],
        });
    }),
    Md = {
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
    Vd = R.strings.battle_pass.chapterChoice,
    zd = n(function ({ chapterID: t }) {
        const { model: s, controls: r } = Nn(),
            { breakpoint: i } = z(),
            { chapterState: n, isPostProgression: o, isExtra: l } = s.computes.getChapterById(t),
            c = s.selectedChapterID.get(),
            d = s.computes.selectedChapter(),
            _ = s.computes.sortedChapters().indexOf(d),
            u = sd(l, o);
        return e.jsxs('div', {
            className: a(Md.base, l && Md.base__extra),
            children: [
                n === qt.Active &&
                    e.jsx($c, {
                        text: o ? Vd.activeChapter.postprogression.text() : Vd.activeChapter.text(),
                        videoSrc: R.videos.battle_pass.chapter_choice.activeAnimation(),
                        className: Md.active,
                        classNames: { idleVideo: Md[`idleVideo__${o ? ad : ed}`] },
                    }),
                e.jsx(Jc, {
                    selected: c === t,
                    active: n === qt.Active,
                    onClick: () => {
                        t !== c &&
                            (r.setPrevChapterIndex(_),
                            r.setSelectedChapterID(t),
                            r.onChapterSelect(t),
                            V.sound(R.sounds.bp_select_chapter()));
                    },
                    className: Md.slot,
                    style: { width: rd[u][i.name].cardWidth, height: rd[u][i.name].cardHeight },
                    'data-test-id': `chapterID-${t}`,
                    children: e.jsx(Od, { chapterID: t }),
                }),
            ],
        });
    }),
    Fd = {
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
    $d = n(function () {
        const { model: s, controls: r } = Nn(),
            [i, n] = t.useState(!1),
            { api: o } = La(),
            { animationScroll: l, applyScroll: c, getBounds: d } = o,
            _ = s.computes.selectedChapter(),
            u = s.computes.sortedChapters(),
            m = u.indexOf(_),
            p = za(o, Fa.horizontal, void 0, { gapBeforeStart: 5 }),
            [b, h] = Aa(o);
        (t.useEffect(() => {
            _ && r.setSelectedChapterID(_.chapterID);
        }, [r, _]),
            t.useEffect(
                () =>
                    ae(() => {
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
                    !1 === (Ua(a.get(), t) && Ua(a.goal, t)) && e.stopPropagation();
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
            Y(A.ARROW_RIGHT, () => {
                const e = m < u.length - 1 ? m + 1 : m;
                f(e, m);
            }),
            Y(A.ARROW_LEFT, () => {
                f(m > 0 ? m - 1 : m, m);
            }),
            e.jsxs('div', {
                className: Fd.base,
                children: [
                    e.jsx('div', {
                        className: a(Fd.mask, Fd[`mask__${bl(b, h)}`]),
                        children: e.jsx($a, {
                            classNames: { wrapper: Fd.scrollWrapper },
                            children: e.jsx('div', {
                                className: a(Fd.cardsWrapper, i && Fd.cardsWrapper__inactive),
                                children: ee(u, (a, t) => e.jsx(zd, { chapterID: a.chapterID }, `${a.chapterID}_${t}`)),
                            }),
                        }),
                    }),
                    e.jsx(Ha, { classNames: { base: Fd.scrollBar } }),
                ],
            })
        );
    }),
    Hd = 'ButtonsGroup_6fd5782',
    Ud = 'ButtonsGroup_button_17bae557',
    Gd = re.resolve('strings'),
    qd = n(function () {
        const a = X(),
            { model: t, controls: s } = Nn(),
            r = t.computes.selectedChapter(),
            { chapterID: i, isPostProgression: n, tankmenScreenID: o } = r,
            { breakpoint: l } = z(),
            c = l.weight >= F.large.weight ? ce.large : ce.medium;
        return (
            Y(A.SPACE, () => {
                n ? a.push(ws.battlePass.postProgression, {}) : a.push(ws.battlePass.progression, { chapterID: i });
            }),
            e.jsxs('div', {
                className: Hd,
                children: [
                    n
                        ? e.jsx(me, {
                              onClick: () => a.push(ws.battlePass.postProgression, {}),
                              className: Ud,
                              size: c,
                              'data-test-id': 'toPostProgression',
                              children: Gd.readOrEmpty(
                                  'battle_pass.chapterChoice.chapterInfo.buttons.toPostProgression',
                              ),
                          })
                        : e.jsx(me, {
                              onClick: () => a.push(ws.battlePass.progression, { chapterID: i }),
                              className: Ud,
                              size: c,
                              'data-test-id': 'toChapter',
                              children: Gd.readOrEmpty('battle_pass.chapterChoice.chapterInfo.buttons.toChapter'),
                          }),
                    0 !== o &&
                        e.jsx(me, {
                            onClick: () => s.showTankmen(i),
                            className: Ud,
                            theme: pe.secondary,
                            size: c,
                            'data-test-id': 'toCrewMembers',
                            children: Gd.readOrEmpty('battle_pass.chapterChoice.chapterInfo.buttons.toCrewMembers'),
                        }),
                ],
            })
        );
    }),
    Xd = 'Deadline_d8216f12',
    Zd = 'Deadline_timerIcon_cda81cf2',
    Kd = 'Deadline_timerLabel_218217e0',
    Qd = re.resolve('strings'),
    Yd = Xa,
    Jd = n(function () {
        const { model: a } = Nn(),
            { expireTime: t, timeLeft: s } = a.computes.selectedChapter(),
            r = a.computes.detailedTimer();
        return e.jsx('div', {
            className: Xd,
            children: r
                ? e.jsx(P, {
                      text: Qd.readOrEmpty('battle_pass.chapterChoice.chapterInfo.deadline.time'),
                      binding: {
                          endTime: e.jsx(Ga, { start: s, size: qa.x48x48, classNames: { icon: Zd, label: Kd } }, s),
                      },
                  })
                : e.jsx(P, {
                      text: Qd.readOrEmpty('battle_pass.chapterChoice.chapterInfo.deadline.date'),
                      binding: { endDate: Yd(t, Za.DayMonthFull) },
                  }),
        });
    }),
    e_ = {
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
    a_ = 'x100x100',
    t_ = 'x120x120',
    s_ = 'x140x140',
    r_ = re.resolve('images'),
    i_ = function ({
        iconSize: s,
        onClick: r,
        onMouseEnter: i,
        onMouseLeave: n,
        soundHover: o = '',
        soundClick: l = '',
        className: c = '',
    }) {
        const [d, _] = t.useState(!1),
            u = r_.readOrEmpty(`battlePass.icons.previewButton.${ie(s, s_)}`);
        return e.jsx('div', {
            className: a(e_.base, d && e_.base__hovered, e_[`base__${s}`], c),
            onClick: (e) => {
                (null == r || r(e), l && V.sound(l));
            },
            onMouseEnter: () => {
                (_(!0), null == i || i(), o && V.sound(o));
            },
            onMouseLeave: () => {
                (_(!1), null == n || n());
            },
            style: { backgroundImage: `url(${u})` },
        });
    },
    n_ = {
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
    o_ = 'x24x24',
    l_ = 'x32x32',
    c_ = 'x48x48',
    d_ = 'x80x80',
    __ = re.resolve('images'),
    u_ = function ({ iconSize: t, className: s = '' }) {
        const r = __.readOrEmpty(`battlePass.icons.inGarage.${t}`);
        return e.jsx('div', { className: a(n_.base, n_[`base__${t}`], s), style: { backgroundImage: `url(${r})` } });
    },
    m_ = (e) => {
        switch (e) {
            case ke.heavyTank:
                return ke.heavyTank;
            case ke.lightTank:
                return ke.lightTank;
            case ke.mediumTank:
                return ke.mediumTank;
            case ke.SPG:
                return ke.SPG;
            default:
                return ke['AT-SPG'];
        }
    },
    p_ = ({
        vehicleName: a,
        vehicleShortName: t,
        vehicleType: s,
        vehicleLvl: r,
        isElite: i,
        classNames: n,
        vehicleTypeIconSize: o = Qa.x64x64,
        isShortName: l = !1,
        custom: c = !1,
    }) =>
        e.jsx('div', {
            className: null == n ? void 0 : n.base,
            children: e.jsxs(aa, {
                children: [
                    e.jsx(aa.Level, {
                        className: null == n ? void 0 : n.level,
                        value: r,
                        numberType: Ka.numberTypes.roman,
                    }),
                    e.jsx(aa.Type, { className: null == n ? void 0 : n.typeIcon, type: m_(s), premium: i, size: o }),
                    e.jsx(aa.Name, { className: null == n ? void 0 : n.name, children: l ? t : a }),
                ],
            }),
        }),
    b_ = {
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
    h_ = re.resolve('strings'),
    f_ = 'vehicle',
    g_ = 'style',
    v_ = n(function () {
        const { model: t } = Nn(),
            s = t.computes.selectedChapter(),
            { styleName: r, vehicleInfo: i, finalRewardType: n, isVehicleInHangar: o } = s,
            {
                breakpoint: { weight: l },
            } = z(),
            c = (e) =>
                e === f_
                    ? l < F.large.weight
                        ? Qa.x64x64
                        : Qa.x96x96
                    : e === g_
                      ? l < F.large.weight
                          ? Qa.x24x24
                          : Qa.x48x48
                      : void 0,
            d = (e) =>
                e === f_
                    ? l >= F.large.weight
                        ? d_
                        : l >= F.medium.weight
                          ? c_
                          : l_
                    : e === g_
                      ? l >= F.large.weight
                          ? l_
                          : o_
                      : l_,
            _ = { level: b_.vehicleLevel, name: b_.vehicleName },
            u = { level: b_.styleLevel, name: b_.styleName };
        return (() => {
            switch (n) {
                case Xt.Vehicle:
                    return e.jsxs('div', {
                        className: b_.vehicleWrapper,
                        children: [
                            e.jsx(P, {
                                classMix: b_.vehicle,
                                text: h_.readOrEmpty('battle_pass.chapterChoice.vehicle.reward.subTitle'),
                                binding: {
                                    vehicleName: e.jsx(p_, { ...i, vehicleTypeIconSize: c(f_), classNames: _ }),
                                },
                            }),
                            o && e.jsx(u_, { iconSize: d(f_), className: a(b_.inGarage, b_.inGarage__vehicle) }),
                        ],
                    });
                case Xt.VehicleStyle:
                    return e.jsx(P, {
                        classMix: b_.vehicleStyle,
                        text: h_.readOrEmpty('battle_pass.chapterChoice.vehicleStyle.reward.subTitle'),
                        binding: { styleName: r },
                    });
                case Xt.Style:
                    return e.jsxs('div', {
                        className: b_.styleWrapper,
                        children: [
                            e.jsx(P, {
                                classMix: b_.style,
                                text: h_.readOrEmpty('battle_pass.chapterChoice.stylePreview.reward.subTitle'),
                                binding: {
                                    vehicleName: e.jsx(p_, { ...i, vehicleTypeIconSize: c(g_), classNames: u }),
                                },
                            }),
                            o && e.jsx(u_, { iconSize: d(g_), className: a(b_.inGarage, b_.inGarage__style) }),
                        ],
                    });
                case Xt.Tankman:
                    return e.jsx(P, {
                        classMix: b_.crew,
                        text: h_.readOrEmpty('battle_pass.chapterChoice.crewMember.reward.subTitle'),
                    });
                case Xt.PostProgression:
                    return e.jsx(P, {
                        classMix: b_.postProgression,
                        text: h_.readOrEmpty('battle_pass.chapterChoice.eliteCircuit.reward.subTitle'),
                    });
                default:
                    return '';
            }
        })();
    }),
    x_ = 'Title_vehicleStyleWrapper_5727057f',
    w_ = 'Title_postProgression_2e63cf3',
    C_ = 'Title_crew_ace25966',
    y_ = 'Title_vehicle_c974ddd5',
    j_ = 'Title_vehicleStyle_e7d39a46',
    S_ = 'Title_style_2e63cf3',
    N_ = 'Title_level_2e63cf3',
    k_ = 'Title_name_93838a06',
    I_ = 'Title_inGarage_1c4370bb',
    P_ = re.resolve('strings'),
    R_ = n(function () {
        const { model: a } = Nn(),
            t = a.computes.selectedChapter(),
            { styleName: s, vehicleInfo: r, finalRewardType: i, isVehicleInHangar: n, tankmanNames: o } = t,
            {
                breakpoint: { weight: l },
            } = z(),
            c = l < F.large.weight ? Qa.x64x64 : Qa.x96x96,
            d = l >= F.large.weight ? d_ : l >= F.medium.weight ? c_ : l_,
            _ = { level: N_, name: k_ };
        return (function () {
            switch (i) {
                case Xt.Vehicle:
                    return e.jsx(P, {
                        classMix: y_,
                        text: P_.readOrEmpty('battle_pass.chapterChoice.vehicle.reward.title'),
                    });
                case Xt.VehicleStyle:
                    return e.jsxs('div', {
                        className: x_,
                        children: [
                            e.jsx(P, {
                                classMix: j_,
                                text: P_.readOrEmpty('battle_pass.chapterChoice.vehicleStyle.reward.title'),
                                binding: { vehicleName: e.jsx(p_, { ...r, vehicleTypeIconSize: c, classNames: _ }) },
                            }),
                            n && e.jsx(u_, { iconSize: d, className: I_ }),
                        ],
                    });
                case Xt.Style:
                    return e.jsx(P, {
                        classMix: S_,
                        text: P_.readOrEmpty('battle_pass.chapterChoice.stylePreview.reward.title'),
                        binding: { styleName: s },
                    });
                case Xt.Tankman:
                    return e.jsx(P, { classMix: C_, text: Ya(o, P_.readOrEmpty('battle_pass.common.comma')) });
                case Xt.PostProgression:
                    return e.jsx(P, {
                        classMix: w_,
                        text: P_.readOrEmpty('battle_pass.chapterChoice.eliteCircuit.reward.title'),
                    });
                default:
                    return '';
            }
        })();
    }),
    B_ = 'FinalReward_96b2b9a7',
    A_ = 'FinalReward_rewardInfo_e61fb0c8',
    E_ = 'FinalReward_preview_68854b55',
    T_ = n(function () {
        const { model: a, controls: s } = Nn(),
            r = le({ previewButton: a_ }, { medium: { previewButton: t_ }, large: { previewButton: s_ } }),
            i = a.computes.selectedChapter(),
            { finalRewardType: n, chapterID: o } = i,
            l = t.useCallback(
                (e) => {
                    (s.openPreview(o), e.stopPropagation());
                },
                [o, s],
            ),
            c = n === Xt.Style || n === Xt.Vehicle || n === Xt.VehicleStyle;
        return e.jsxs('div', {
            className: B_,
            children: [
                c && e.jsx('div', { className: E_, children: e.jsx(i_, { iconSize: r.previewButton, onClick: l }) }),
                e.jsxs('div', { className: A_, children: [e.jsx(R_, {}), e.jsx(v_, {})] }),
            ],
        });
    }),
    L_ = {
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
    D_ = re.resolve('strings'),
    W_ = n(function () {
        const { model: t } = Nn(),
            s = t.computes.selectedChapter(),
            { chapterID: i, isBought: n, finalRewardType: o } = s,
            l = le(
                { iconSize: pi, shieldSize: ii, containerSize: Jr },
                {
                    medium: { iconSize: bi, shieldSize: ni, containerSize: ei },
                    large: { iconSize: hi, shieldSize: oi, containerSize: ai },
                    extraLarge: { iconSize: fi, shieldSize: li, containerSize: ti },
                },
            ),
            c = y(
                wn.length,
                wn.map((e) => {
                    const { delay: a, diff: t, duration: s } = Object.values(e)[0];
                    return Cn(a, t, s);
                }),
            ),
            d = wn.reduce((e, a, t) => ((e[Object.keys(a)[0]] = c[t]), e), {});
        return e.jsxs('div', {
            className: L_.base,
            children: [
                e.jsx(r.div, {
                    style: d.emblem,
                    children: e.jsx(wi, {
                        iconSize: l.iconSize,
                        shieldSize: l.shieldSize,
                        containerSize: l.containerSize,
                        bpPurchased: n,
                        chapterID: i,
                        className: L_.emblem,
                    }),
                }),
                e.jsxs('div', {
                    className: L_.info,
                    children: [
                        e.jsx(r.div, {
                            style: d.deadline,
                            children: e.jsx('div', { className: L_.deadline, children: e.jsx(Jd, {}) }),
                        }),
                        e.jsx(r.div, {
                            style: d.chapterName,
                            children: e.jsx('div', {
                                className: a(L_.chapterName, n && L_.chapterName__bougth),
                                children: D_.readOrEmpty(`battle_pass.chapter.fullName.c_${i}`),
                            }),
                        }),
                        e.jsx(r.div, {
                            style: d.finalReward,
                            children: e.jsx('div', {
                                className: a(L_.finalReward, L_[`finalReward__${o}`]),
                                children: e.jsx(T_, {}),
                            }),
                        }),
                        e.jsx(r.div, {
                            style: d.buttonsGroup,
                            children: e.jsx('div', {
                                className: a(L_.buttonsGroup, L_[`buttonsGroup__${o}`]),
                                children: e.jsx(qd, {}),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    O_ = 'FreeBpPoints_13635b90',
    M_ = 'FreeBpPoints_pointsBlock_de8d94dc',
    V_ = 'FreeBpPoints_points_cd1a8292',
    z_ = 'FreeBpPoints_icon_e6968e4a',
    F_ = 'FreeBpPoints_text_74f25e3',
    $_ = re.resolve('strings'),
    H_ = n(function () {
        const { model: a } = Nn(),
            { freePoints: t } = a.root.get(),
            s = va({
                header: $_.readOrEmpty('battle_pass.chapterChoice.freePoints.tooltip.header'),
                body: $_.readOrEmpty('battle_pass.chapterChoice.freePoints.tooltip.body'),
            }),
            r = le({ iconSize: '' }, { medium: { iconSize: '_medium' }, large: { iconSize: '_large' } });
        return e.jsxs('div', {
            className: O_,
            ...s,
            children: [
                e.jsxs('div', {
                    className: M_,
                    children: [
                        e.jsx('div', { className: V_, children: e.jsx(Ja, { value: t }) }),
                        e.jsx(wa, { className: z_, path: `battlePass.chapter_choice.freePoints${r.iconSize}` }),
                    ],
                }),
                e.jsx('div', { className: F_, children: $_.readOrEmpty('battle_pass.chapterChoice.freePoints.text') }),
            ],
        });
    }),
    U_ = 'App_772aceb',
    G_ = 'App_background_f46709aa',
    q_ = 'App_main_879c8615',
    X_ = 'App_idle_e06fed7f',
    Z_ = 'App_shadow_d2a46054',
    K_ = 'App_freeBpPoints_c3ec6dd0',
    Q_ = 'App_chapterInfo_e8b5e743',
    Y_ = 'App_cards_a8851e46',
    J_ = n(function () {
        const { model: a, controls: i } = Nn(),
            { onViewLoaded: n } = i,
            o = a.computes.selectedChapter(),
            l = a.prevChapterIndex.get(),
            c = a.computes.sortedChapters().indexOf(o),
            [d, _] = t.useState(c),
            { chapterID: u } = o,
            [m, p] = t.useState(!1),
            b = X();
        (Y(A.ESCAPE, () => {
            b.goBack();
        }),
            t.useEffect(
                () =>
                    ae(() => {
                        m || (n(), p(!0));
                    }),
                [m, n],
            ));
        const [h, f] = y(a.computes.backgrounds().length, (e) => ({
                x: 0,
                opacity: e === c ? 1 : 0,
                config: { duration: 400, easing: fe.easeOutQuint },
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
        const [x] = s(() => Cn(200, 60)),
            [w] = s(() => Cn(300, 60)),
            [C] = s(() =>
                ((e = 0, a = 250) => ({
                    from: { opacity: 0, transform: 'scale(1.1)' },
                    to: { opacity: 1, transform: 'scale(1)' },
                    config: { duration: 500, easing: fe.easeInOutCubic },
                    delay: e,
                }))(),
            );
        return e.jsx(e.Fragment, {
            children:
                m &&
                e.jsxs('div', {
                    className: U_,
                    children: [
                        e.jsx(r.div, {
                            className: G_,
                            style: C,
                            children: e.jsxs(e.Fragment, {
                                children: [
                                    h.map((a, t) =>
                                        e.jsx(An, { style: a, i: t, index: d, classNames: { idle: X_, main: q_ } }, t),
                                    ),
                                    e.jsx('div', { className: Z_ }),
                                ],
                            }),
                        }),
                        a.root.get().freePoints > 0 &&
                            e.jsx(r.div, { className: K_, style: w, children: e.jsx(H_, {}) }),
                        e.jsx('div', { className: Q_, children: e.jsx(W_, {}) }, u),
                        e.jsx(r.div, { className: Y_, style: x, children: e.jsx(et, { children: e.jsx($d, {}) }) }),
                    ],
                }),
        });
    }),
    eu = () =>
        e.jsx(Sn, { options: { rootId: R.aliases.battle_pass.ChapterChoice('resId') }, children: e.jsx(J_, {}) }),
    au = (e, a, t, s, r) => {
        const i = R.images.gui.maps.icons.battlePass.awards_widget;
        return r
            ? `url(${i.$dyn(`${e.toLowerCase()}_${a}${t}_${s}_${r}`)})`
            : `url(${i.$dyn(`${e.toLowerCase()}_${a}${t}_${s}`)})`;
    };
var tu = ((e) => (
        (e.Award = 'Award'),
        (e.Ticket = 'Ticket'),
        (e.Coin = 'Coin'),
        (e.Taler = 'Taler'),
        (e.Collection = 'Collection'),
        (e.Commander = 'Commander'),
        e
    ))(tu || {}),
    su = ((e) => ((e.Small = 'small'), (e.Big = 'big'), e))(su || {}),
    ru = ((e) => ((e.None = ''), (e.Small = 's'), (e.Medium = 'm'), e))(ru || {}),
    iu = ((e) => ((e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = ''), e))(iu || {}),
    nu = ((e) => ((e.Hover = 'Hover'), (e.Disabled = 'Disabled'), (e.Triggered = 'Triggered'), (e.None = ''), e))(
        nu || {},
    );
const ou = {
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
    lu = ({ size: t, isHover: s, disabled: r = !1, type: i = tu.Coin }) => {
        const { breakpoint: n } = z(),
            o = n.weight >= F.medium.weight ? ru.Medium : ru.Small;
        return e.jsx('div', {
            className: a(ou.base, ou[`base__${t}`], ou[`base__${t}${i}`], s && ou.base__hovered),
            children: r
                ? e.jsx('div', {
                      className: ou.bgDisabled,
                      style: { backgroundImage: au(i, iu.Background, nu.Disabled, t, o) },
                  })
                : e.jsxs(e.Fragment, {
                      children: [
                          e.jsx('div', {
                              className: ou.bg,
                              style: { backgroundImage: au(i, iu.Background, nu.None, t, o) },
                          }),
                          e.jsx('div', {
                              className: ou.bgHover,
                              style: { backgroundImage: au(i, iu.Background, nu.Hover, t, o) },
                          }),
                      ],
                  }),
        });
    },
    cu = {
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
    du = ({ size: t, isHover: s, highlighted: r = !1, disabled: i = !1, type: n = tu.Coin }) => {
        const { breakpoint: o } = z(),
            l = o.weight >= F.medium.weight ? ru.Medium : ru.Small;
        return e.jsx('div', {
            className: a(cu.base, cu[`base__${t}`], s && cu.base__hovered),
            children: i
                ? e.jsx('div', {
                      className: a(cu.borderDisabled, cu[`borderDisabled__${t}`]),
                      style: { backgroundImage: au(n, iu.Border, nu.Disabled, t, l) },
                  })
                : e.jsxs(e.Fragment, {
                      children: [
                          e.jsx('div', {
                              className: cu.border,
                              style: { backgroundImage: au(r ? tu.Collection : n, iu.Border, nu.None, t, l) },
                          }),
                          e.jsx('div', {
                              className: cu.borderHover,
                              style: { backgroundImage: au(n, iu.Border, nu.Hover, t, l) },
                          }),
                      ],
                  }),
        });
    },
    _u = {
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
    uu = ({ state: t, count: s, size: r, maxCount: i = 0 }) => {
        switch (t) {
            case pu.InProgress:
                return e.jsx(P, { text: `${s || 0} / ${i}` });
            case pu.Completed:
                return e.jsx('div', { className: a(_u.base, _u[`base__${r}`]) });
            default:
                return e.jsx(Ja, { format: 'integral', value: s });
        }
    },
    mu = {
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
var pu = ((e) => ((e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed'), e))(pu || {});
const bu = ({ size: t, count: s, maxCount: r, state: i = '', isLocked: n = !1, disabled: o = !1 }) =>
        e.jsx('div', {
            className: a(mu.base, mu[`base__${t}`], n && mu.base__locked, o && mu.base__disabled),
            children: e.jsx(uu, { state: i, size: t, count: s, maxCount: r }),
        }),
    hu = {
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
    fu = (e, a, t) => {
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
    gu = ({ size: t, isHover: s, isDark: r = !0, disabled: i = !1, type: n }) => {
        const { breakpoint: o } = z(),
            l = o.weight >= F.medium.weight ? ru.Medium : ru.Small;
        return e.jsx('div', {
            className: a(hu.base, hu[`base__${t}`], hu[`base__${fu(s, r, i)}`]),
            style: { backgroundImage: au(n, iu.Icon, nu.None, t, n === tu.Collection ? ru.None : l) },
        });
    },
    vu = {
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
    xu = (e, a) => {
        switch (!0) {
            case e:
                return 'disabled';
            case a:
                return 'hover';
            default:
                return '';
        }
    },
    wu = ({ size: t, title: s, isHover: r, disabled: i = !1, isGold: n = !1 }) =>
        e.jsx('div', {
            className: a(vu.base, vu[`base__${t}`], vu[`base__${xu(i, r)}`], n && vu.base__gold),
            children: s,
        }),
    Cu = {
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
    yu = R.strings.battle_pass.awardsWidget,
    ju = ({ count: s, disabled: r = !1, onClick: i, size: n }) => {
        const [o, l] = t.useState(!1),
            c = 1 === s ? yu.title.awardSingle() : yu.title.awardMultiple(),
            d = r ? yu.description.awardDisabled() : yu.description.award(),
            _ = t.useCallback(() => {
                r || (V.click(), i());
            }, [r, i]);
        return e.jsx(Ke, {
            body: d,
            isEnabled: Boolean(d),
            children: e.jsxs('div', {
                className: a(Cu.base, Cu[`base__${n}`], r ? Cu.base__disabled : Cu.base__hasAppearAnimation),
                onMouseEnter: () => {
                    (V.sound(R.sounds.bp_highlight_02()), l(!0));
                },
                onMouseLeave: () => {
                    l(!1);
                },
                onClick: _,
                children: [
                    e.jsx(du, { size: n, isHover: o, type: tu.Award, disabled: r }),
                    e.jsx(lu, { size: n, isHover: o, type: tu.Award, disabled: r }),
                    e.jsx(gu, { size: n, isHover: o, type: tu.Award, disabled: r, isDark: !1 }),
                    e.jsx(bu, { size: n, count: s, disabled: r }),
                    e.jsx(wu, { size: n, isHover: o, title: c, disabled: r, isGold: !0 }),
                    !r &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx('div', { className: a(Cu.shine, Cu.shine__left) }),
                                e.jsx('div', { className: a(Cu.shine, Cu.shine__right) }),
                                e.jsx('div', { className: Cu.arrow }),
                                e.jsx('div', {
                                    className: Cu.blinkShape,
                                    children: e.jsx('div', { className: Cu.blink }),
                                }),
                            ],
                        }),
                ],
            }),
        });
    },
    Su = {
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
    Nu = R.strings.battle_pass.awardsWidget,
    ku = ({ count: s, onClick: r, size: i }) => {
        const [n, o] = t.useState(!1);
        return e.jsx(Ke, {
            body: Nu.description.coin(),
            isEnabled: Boolean(Nu.description.coin()),
            children: e.jsxs('div', {
                className: a(Su.base, Su[`base__${i}`]),
                onMouseEnter: () => {
                    (V.sound(R.sounds.bp_highlight_02()), o(!0));
                },
                onMouseLeave: () => {
                    o(!1);
                },
                onClick: () => {
                    (V.click(), r());
                },
                children: [
                    e.jsx(du, { size: i, isHover: n }),
                    e.jsx(lu, { size: i, isHover: n }),
                    e.jsx(gu, { size: i, isHover: n, type: tu.Coin }),
                    e.jsx(bu, { size: i, count: s }),
                    e.jsx(wu, { size: i, isHover: n, title: Nu.title.coin() }),
                ],
            }),
        });
    },
    Iu = {
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
    Pu = R.strings.battle_pass.awardsWidget,
    Ru = ({ count: s, maxCount: r, newItemsCount: i, hasTrigger: n, size: o, onClick: l }) => {
        const [c, d] = t.useState(!1),
            _ = r === s,
            u = o === su.Small && n,
            m = _ ? Pu.description.collectionCompleted() : Pu.description.collection(),
            p = K(() => {
                (V.click(), l());
            });
        return e.jsx(Ke, {
            body: m,
            isEnabled: Boolean(m),
            children: e.jsxs('div', {
                className: a(Iu.base, Iu[`base__${o}`]),
                onMouseEnter: () => {
                    (V.sound(R.sounds.bp_highlight_02()), d(!0));
                },
                onMouseLeave: () => {
                    d(!1);
                },
                onClick: p,
                children: [
                    e.jsx(du, { size: o, isHover: c, type: tu.Coin, highlighted: u }),
                    e.jsx(lu, { size: o, isHover: c }),
                    e.jsx(gu, { size: o, isHover: c, type: tu.Collection }),
                    e.jsx(bu, { size: o, count: s, maxCount: r, state: _ ? pu.Completed : pu.InProgress }),
                    e.jsx(wu, { size: o, isHover: c, title: Pu.title.collection() }),
                    i > 0 && e.jsx('div', { className: Iu.bubble, children: e.jsx(at, { size: 'small' }) }),
                ],
            }),
        });
    },
    Bu = {
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
    Au = R.strings.battle_pass.awardsWidget,
    Eu = ({ onClick: s, size: r, tankmenScreenID: i }) => {
        const [n, o] = t.useState(!1),
            l = Au.description.commander(),
            c =
                R.images.gui.maps.icons.battlePass.awards_widget.$dyn(`commander_icon_small_${i}`) ||
                R.images.gui.maps.icons.battlePass.awards_widget.commander_icon_small();
        return e.jsx(Ke, {
            body: l,
            isEnabled: Boolean(l),
            children: e.jsxs('div', {
                className: a(Bu.base, Bu[`base__${r}`], n && Bu.base__hover),
                onMouseEnter: () => {
                    (V.sound(R.sounds.bp_highlight_02()), o(!0));
                },
                onMouseLeave: () => o(!1),
                onClick: () => {
                    (V.click(), s());
                },
                children: [
                    e.jsx(du, { size: r, isHover: n }),
                    e.jsx(lu, { size: r, isHover: n }),
                    e.jsx(wu, { size: r, isHover: n, title: Au.title.commander() }),
                    e.jsx('div', { className: Bu.icon, style: { backgroundImage: `url(${c})` } }),
                ],
            }),
        });
    },
    Tu = {
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
    Lu = R.strings.battle_pass.awardsWidget,
    Du = ({ count: s, onClick: r, size: i }) => {
        const [n, o] = t.useState(!1);
        return e.jsx(Ke, {
            body: Lu.description.taler(),
            children: e.jsxs('div', {
                className: a(Tu.base, Tu[`base__${i}`], n && Tu.base__hover),
                onMouseEnter: () => {
                    (V.sound(R.sounds.bp_highlight_02()), o(!0));
                },
                onMouseLeave: () => {
                    o(!1);
                },
                onClick: () => {
                    (V.click(), r());
                },
                children: [
                    e.jsx(du, { size: i, isHover: n }),
                    e.jsx(lu, { size: i, isHover: n }),
                    e.jsx(gu, { size: i, isHover: n, type: tu.Taler }),
                    e.jsx(bu, { size: i, count: s }),
                    e.jsx(wu, { size: i, isHover: n, title: Lu.title.taler() }),
                ],
            }),
        });
    },
    Wu = {
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
    Ou = R.strings.battle_pass.awardsWidget,
    Mu = ({ count: s, onClick: r, size: i }) => {
        const [n, o] = t.useState(!1),
            l = Boolean(s),
            c = l ? tu.Ticket : void 0;
        return e.jsx(Ke, {
            body: Ou.description.ticket(),
            isEnabled: Boolean(Ou.description.ticket()),
            children: e.jsxs('div', {
                className: a(Wu.base, Wu[`base__${i}`], l && Wu.base__hasAppearAnimation),
                onMouseEnter: () => {
                    (V.sound(R.sounds.bp_highlight_02()), o(!0));
                },
                onMouseLeave: () => {
                    o(!1);
                },
                onClick: () => {
                    (V.click(), r());
                },
                children: [
                    e.jsx(du, { size: i, isHover: n, type: c }),
                    e.jsx(lu, { size: i, isHover: n, type: c }),
                    e.jsx(gu, { size: i, isHover: n, type: tu.Ticket, isDark: !l }),
                    e.jsx(bu, { size: i, count: s }),
                    e.jsx(wu, { size: i, isHover: n, title: Ou.title.ticket(), isGold: l }),
                    l &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx('div', { className: a(Wu.shine, Wu.shine__left) }),
                                e.jsx('div', { className: a(Wu.shine, Wu.shine__right) }),
                                e.jsx('div', { className: Wu.arrow }),
                                e.jsx('div', {
                                    className: Wu.blinkShape,
                                    children: e.jsx('div', { className: Wu.blink }),
                                }),
                            ],
                        }),
                ],
            }),
        });
    },
    [Vu, zu] = G()(
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
                            type: tu.Award,
                            props: {
                                size: e,
                                count: r,
                                disabled: !o,
                                onClick: a.createCallbackNoArgs('onTakeRewardsClick'),
                            },
                            condition: r > 0,
                        },
                        {
                            type: tu.Ticket,
                            props: { size: e, count: n, onClick: a.createCallbackNoArgs('showTickets') },
                            condition: _,
                        },
                        {
                            type: tu.Coin,
                            props: { size: e, count: i, onClick: a.createCallbackNoArgs('onBpcoinClick') },
                            condition: d,
                        },
                        {
                            type: tu.Taler,
                            props: { size: e, count: s, onClick: a.createCallbackNoArgs('showTalers') },
                            condition: c,
                        },
                        {
                            type: tu.Collection,
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
                            type: tu.Commander,
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
    Fu = {
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
    $u = (a, t) => {
        switch (a) {
            case tu.Award:
                return e.jsx(ju, { ...t });
            case tu.Ticket:
                return e.jsx(Mu, { ...t });
            case tu.Coin:
                return e.jsx(ku, { ...t });
            case tu.Taler:
                return e.jsx(Du, { ...t });
            case tu.Collection:
                return e.jsx(Ru, { ...t });
            case tu.Commander:
                return e.jsx(Eu, { ...t });
            default:
                return (console.warn('Unknown award type: ', a), null);
        }
    },
    Hu = n(({ size: t, classNames: s }) => {
        const { model: r } = zu();
        return e.jsx('div', {
            className: a(Fu.base, Fu[`base__${t}`], null == s ? void 0 : s.base),
            children: ee(
                r.computes.awardsList(t),
                (t) =>
                    t.condition &&
                    e.jsx(
                        'div',
                        { className: a(Fu.award, null == s ? void 0 : s.award), children: $u(t.type, t.props) },
                        t.type,
                    ),
            ),
        });
    }),
    Uu = ({ rootId: a, size: t = su.Small, context: s = 'model', classNames: r }) =>
        e.jsx(Vu, { options: { context: s, rootId: a }, children: e.jsx(Hu, { size: t, classNames: r }) }),
    [Gu, qu] = G()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), nowRewards: e.array('rewards.nowRewards.items') },
                t = i(() => a.nowRewards.get(), { equals: q });
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
    Xu = 'selectableRewardsState',
    Zu = 'finalState',
    Ku = 'FinalStateLabel_icon_2cf5ceb5',
    Qu = 'FinalStateLabel_greenLight_7967eb2f',
    Yu = 'FinalStateLabel_text_f6f99450',
    Ju = () =>
        e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: Ku }),
                e.jsx('div', { className: Qu }),
                e.jsx('div', { className: Yu, children: R.strings.battle_pass.holidayFinalScreen.finalState.label() }),
            ],
        }),
    em = {
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
    am = R.strings.battle_pass.holidayFinalScreen,
    tm = n(() => {
        const { model: t, controls: s } = qu(),
            { takeRewards: r, showHangar: i } = s,
            { state: n, finalRewardType: o } = t.root.get(),
            l = n === Xu;
        return e.jsx('div', {
            className: a(em.base, em[`base__${n}`]),
            children: e.jsxs('div', {
                className: em.controls,
                children: [
                    e.jsx('div', {
                        className: em.label,
                        children: l
                            ? e.jsx('div', { className: em.text, children: am.selectableRewardsState.label() })
                            : e.jsx(Ju, {}),
                    }),
                    e.jsx('div', {
                        className: em.buttonWrapper,
                        children: e.jsx(N, {
                            size: k.medium,
                            mixClass: em.button,
                            onClick: () => {
                                l ? r() : i();
                            },
                            children: (() => {
                                switch (n) {
                                    case Xu:
                                        return am.selectableRewardsState.button();
                                    case Zu:
                                        return o === Xt.Vehicle
                                            ? am.finalState.button.showVehicle()
                                            : am.finalState.button.showHangar();
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
    sm = 'Divider_3683d6e2',
    rm = 'Divider_divider__right_24d5147b',
    im = ({ isRight: t = !1 }) => e.jsx('div', { className: a(sm, t && rm) }),
    nm = 'Title_ec301c01',
    om = 'Title_text_65e6762b',
    lm = ({ text: a }) =>
        e.jsxs('div', {
            className: nm,
            children: [e.jsx(im, {}), e.jsx('div', { className: om, children: a }), e.jsx(im, { isRight: !0 })],
        }),
    cm = {
        base: 'Purchase_78d7de59',
        content: 'Purchase_content_1a1b801',
        preview: 'Purchase_preview_a16bc569',
        shadow: 'Purchase_shadow_87ba71b',
        visibleRewards: 'Purchase_visibleRewards_8b26a786',
        title: 'Purchase_title_8d5affdf',
        description: 'Purchase_description_34691989',
        rewardButton: 'Purchase_rewardButton_bc4b54c4',
    },
    dm = R.strings.battle_pass.holidayFinalScreen.buyState,
    _m = (e) => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 400 + 100 * e,
        config: { duration: 400 },
        onStart: () => {
            V.sound(R.sounds.bp_reward());
        },
    }),
    um = n(() => {
        const { model: a, controls: t } = qu(),
            { chapterID: i, finalRewardType: n } = a.root.get(),
            { showPreviewVehicle: o } = t,
            l = X(),
            c = a.computes.rewardList(),
            d = n === Xt.Vehicle,
            {
                breakpoint: { weight: _ },
            } = z(),
            u = _ <= F.small.weight ? H.Small : H.Big,
            m = c.length > 9 ? [...tt(c, 0, 9)] : c,
            p = s(_m(m.length)),
            b = c.length - m.length;
        return e.jsxs('div', {
            className: cm.base,
            children: [
                d && e.jsx('div', { className: cm.preview, children: e.jsx(st, { type: 'preview', onClick: o }) }),
                e.jsxs('div', {
                    className: cm.content,
                    children: [
                        e.jsx('div', { className: cm.shadow }),
                        e.jsx('div', { className: cm.title, children: e.jsx(lm, { text: dm.title() }) }),
                        e.jsx('div', { className: cm.description, children: dm.description() }),
                        e.jsx('div', {
                            className: cm.visibleRewards,
                            children: ee(m, (a, t) =>
                                e.jsx(
                                    bs,
                                    {
                                        animationConfig: _m(t),
                                        children: e.jsx(U, { ...Lt(a, u), className: cm.reward }),
                                    },
                                    `${a.item}_${t}`,
                                ),
                            ),
                        }),
                        b > 0 &&
                            e.jsx(r.div, {
                                style: p,
                                children: e.jsx(N, {
                                    type: I.ghost,
                                    size: k.medium,
                                    mixClass: cm.rewardButton,
                                    onClick: () => {
                                        l.push(ws.battlePass.buyPassRewards, { chapterID: i });
                                    },
                                    children: e.jsx(P, { text: dm.moreRewards(), binding: { count: b } }),
                                }),
                            }),
                    ],
                }),
            ],
        });
    }),
    mm = 'Rewards_full_eea97d7',
    pm = { context: 'model.rewards' },
    bm = n(() => e.jsx(Mr, { options: pm, children: e.jsx('div', { className: mm, children: e.jsx(Kr, {}) }) })),
    hm = 'Tankmen_9641cad5',
    fm = 'Tankmen_image_208678b',
    gm = 'Tankmen_title_ebf30d50',
    vm = 'Tankmen_description_e7d7080c',
    xm = 'Tankmen_tankmenBtn_96878805',
    wm = 'Tankmen_button_e7e9840c',
    Cm = 'Tankmen_blink_22bb5961',
    ym = R.strings.battle_pass.holidayFinalScreen.tankmenState,
    jm = n(() => {
        const { controls: a } = qu(),
            { showTankmen: t } = a;
        return e.jsxs('div', {
            className: hm,
            children: [
                e.jsx('div', { className: fm }),
                e.jsx('div', { className: gm, children: e.jsx(lm, { text: ym.title() }) }),
                e.jsx('div', { className: vm, children: ym.description() }),
                e.jsx('div', {
                    className: xm,
                    children: e.jsxs(N, {
                        type: I.main,
                        size: k.medium,
                        mixClass: wm,
                        onClick: t,
                        children: [e.jsx('div', { className: Cm }), ym.tankmenButton()],
                    }),
                }),
            ],
        });
    }),
    Sm = n(() => {
        const { model: a } = qu(),
            { state: t } = a.root.get();
        switch (t) {
            case 'buyState':
                return e.jsx(um, {});
            case 'rewardsState':
                return e.jsx(bm, {});
            case 'tankmenState':
                return e.jsx(jm, {});
            case Xu:
            case Zu:
                return e.jsx(tm, {});
            default:
                return (console.warn('Unknown state ', t), null);
        }
    }),
    Nm = 'Footer_5f98e398',
    km = 'Footer_light_2fc739c7',
    Im = 'Footer_buttonWrapper_fbd12995',
    Pm = 'Footer_button_9e4f9bc',
    Rm = 'Footer_blink_106ec98e',
    Bm = R.strings.battle_pass.holidayFinalScreen.buyState,
    Am = n(() => {
        const { model: a } = qu(),
            { isSeasonEndingSoon: t, chapterID: s } = a.root.get(),
            r = X();
        return e.jsxs('div', {
            className: Nm,
            children: [
                e.jsx('div', { className: km }),
                e.jsx('div', {
                    className: Im,
                    children: e.jsxs(N, {
                        type: I.main,
                        size: k.medium,
                        mixClass: Pm,
                        onClick: () => {
                            r.push(ws.battlePass.buyPass, { chapterID: s });
                        },
                        children: [t && e.jsx('div', { className: Rm }), Bm.buyButton()],
                    }),
                }),
            ],
        });
    }),
    Em = 'Header_add5cf9d',
    Tm = 'Header_title_1435c6ee',
    Lm = 'Header_description_e959461d',
    Dm = ({ title: a, description: t }) =>
        e.jsxs('div', {
            className: Em,
            children: [e.jsx('div', { className: Tm, children: a }), e.jsx('div', { className: Lm, children: t })],
        }),
    Wm = {
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
    Om = R.strings.battle_pass,
    Mm = n(() => {
        const [s, r] = t.useState(!1),
            { model: i } = qu(),
            { state: n, chapterID: o } = i.root.get(),
            l = X();
        return (
            t.useEffect(() => {
                (async () => {
                    (await Dt(), r(!0));
                })();
            }, []),
            Y(A.ESCAPE, () => l.goBack()),
            e.jsxs('div', {
                className: a(Wm.base, Wm[`base__${n}`]),
                children: [
                    e.jsx('div', { className: Wm.background }),
                    s &&
                        e.jsxs('div', {
                            className: Wm.additionalAnimation,
                            children: [
                                e.jsxs('div', {
                                    className: Wm.header,
                                    children: [
                                        e.jsx(Dm, {
                                            title: e.jsx(P, {
                                                text: Om.holidayFinalScreen.chapter(),
                                                binding: { chapterName: Om.chapter.fullNameUppercased.$num(o) },
                                            }),
                                            description: Om.holidayFinalScreen.completed(),
                                        }),
                                        e.jsx('div', {
                                            className: Wm.awards,
                                            children: e.jsx(Uu, {
                                                rootId: R.aliases.battle_pass.HolidayFinal('resId'),
                                                context: 'model.awardsWidget',
                                            }),
                                        }),
                                    ],
                                }),
                                e.jsx(Sm, {}),
                                e.jsx('div', { className: Wm.footer, children: e.jsx(Am, {}) }),
                            ],
                        }),
                ],
            })
        );
    }),
    Vm = () => e.jsx(Gu, { options: { rootId: R.aliases.battle_pass.HolidayFinal('resId') }, children: e.jsx(Mm, {}) }),
    zm = 'DescriptioBlock_bef3efe1',
    Fm = 'DescriptioBlock_icon_5296290c',
    $m = 'DescriptioBlock_title_c66e1534',
    Hm = 'DescriptioBlock_description_ec6501b9',
    Um = ({ icon: a, title: s, descr: r }) => {
        const i = t.useCallback((e) => {
            e.stopPropagation();
        }, []);
        return e.jsxs('div', {
            className: zm,
            onClick: i,
            children: [
                e.jsx('div', { className: $m, children: s }),
                e.jsx('div', { className: Fm, style: { backgroundImage: `url(${a})` } }),
                e.jsx('div', { className: Hm, children: r && rt(r) }),
            ],
        });
    },
    Gm = {
        base: 'Slider_f5a1ddc7',
        base__carousel: 'Slider_base__carousel_42efb660',
        trackWrapper: 'Slider_trackWrapper_e314ef92',
        track: 'Slider_track_5f6048f2',
        base__withoutAnimation: 'Slider_base__withoutAnimation_263edf46',
        base__withoutPointer: 'Slider_base__withoutPointer_263edf46',
        slide: 'Slider_slide_dd5c4f9f',
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
    qm = t.createContext({}),
    Xm = t.memo(
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
                { breakpoint: _ } = z(),
                u = _.weight < F.medium.weight,
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
                E = async () => {
                    var e;
                    if (d && d.current) {
                        (C(!0), await Dt());
                        const a = viewEnv.getScale();
                        (h(d.current.offsetWidth / a),
                            g(
                                (null == (e = d.current.querySelector(`.${Gm.slide__active}`))
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
                        E(),
                        window.addEventListener('resize', E),
                        () => {
                            window.removeEventListener('resize', E);
                        }
                    ),
                    [],
                ));
            const T = t.useCallback(async () => {
                    N ||
                        y ||
                        n ||
                        (i && j(!0),
                        await Dt(),
                        l && l(),
                        x(v - 1),
                        i &&
                            setTimeout(async () => {
                                C(!0);
                                const e = m.concat();
                                (e.unshift(e.pop()), p(e), x(v), await Dt(), C(!1), j(!1));
                            }, 600),
                        V.sound(R.sounds.play()),
                        V.sound(R.sounds.bp_glide_01()));
                }, [N, y, n, i, l, v, m]),
                L = t.useCallback(async () => {
                    k ||
                        y ||
                        n ||
                        (i && j(!0),
                        await Dt(),
                        c && c(),
                        x(v + 1),
                        i &&
                            setTimeout(async () => {
                                C(!0);
                                const e = m.concat();
                                (e.push(e.shift()), p(e), x(v), await Dt(), C(!1), j(!1));
                            }, 600),
                        V.sound(R.sounds.play()),
                        V.sound(R.sounds.bp_glide_01()));
                }, [k, y, n, i, c, v, m]),
                D = () => V.sound(R.sounds.highlight());
            (B(A.ARROW_LEFT, T), B(A.ARROW_RIGHT, L));
            const W = t.useMemo(() => (i ? { width: 'auto' } : { width: `${b}rem` }), [b, i]),
                O = t.useMemo(
                    () =>
                        i
                            ? { transform: `translateX(${-f * v + b / 2 + f / 2}rem)` }
                            : { transform: `translateX(-${b * (v - 1)}rem)` },
                    [b, f, v, i],
                ),
                M = t.useMemo(() => (r ? { top: r } : {}), [r]),
                $ = a(
                    Gm.base,
                    u && Gm.base__large,
                    i && Gm.base__carousel,
                    i && u && Gm.base__carouselLarge,
                    w && Gm.base__withoutAnimation,
                    y && Gm.base__withoutPointer,
                ),
                H = a(Gm.prev, N && Gm.prev__disabled),
                U = a(Gm.next, k && Gm.next__disabled),
                G = a(Gm.counter, !I && Gm.counter__disabled);
            return e.jsxs('div', {
                className: $,
                children: [
                    I && e.jsx('div', { className: H, onClick: T, onMouseEnter: D, style: M }),
                    I && e.jsx('div', { className: U, onClick: L, onMouseEnter: D, style: M }),
                    o &&
                        e.jsxs('div', {
                            className: G,
                            children: [v, e.jsx('div', { className: Gm.counterDivider, children: '/' }), S],
                        }),
                    e.jsx('div', {
                        className: Gm.trackWrapper,
                        ref: d,
                        children: e.jsx('div', {
                            className: Gm.track,
                            style: O,
                            children: m.map((t, s) => {
                                const r = s + 2 === v,
                                    n = s === v;
                                let o;
                                n ? (o = L) : r && (o = T);
                                let l = a(Gm.slide, u && Gm.slide__large, s + 1 === v && Gm.slide__active);
                                return (
                                    i &&
                                        (l = a(
                                            Gm.slide,
                                            Gm.slide__carousel,
                                            u && Gm.slide__large,
                                            s + 1 === v && Gm.slide__active,
                                            r && Gm.slide__beforeActive,
                                            r && u && Gm.slide__beforeActiveLarge,
                                            n && Gm.slide__afterActive,
                                            n && u && Gm.slide__afterActiveLarge,
                                            s + 2 < v && Gm.slide__leftEdge,
                                            s + 2 < v && u && Gm.slide__leftEdgeLarge,
                                            s > v && Gm.slide__rightEdge,
                                            s > v && u && Gm.slide__rightEdgeLarge,
                                        )),
                                    e.jsx(
                                        'div',
                                        {
                                            className: l,
                                            style: W,
                                            onClick: o,
                                            children: e.jsx(qm.Provider, { value: P, children: t }),
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
    Zm = 'Content_353e971e',
    Km = 'Content_title_948554b1',
    Qm = 'Content_base__video_da09528a',
    Ym = 'Content_bg_3c3188a8',
    Jm = 'Content_shadow_7e9b4ef',
    ep = 'Content_video_1cac105e',
    ap = 'Content_videoIcon_259c899',
    tp = 'Content_videoText_68f88905',
    sp = 'Content_b7b53602',
    rp = 'Content_base__high_da09528a',
    ip = 'Content_bottomContainer_c412d1e3',
    np = 'Content_buttonWrapper_e641a202',
    op = 'Content_close_5d9c81f7',
    lp = '220rem',
    cp = '300rem',
    dp = {
        [F.extraSmall.weight]: lp,
        [F.small.weight]: lp,
        [F.medium.weight]: '250rem',
        [F.large.weight]: cp,
        [F.extraLarge.weight]: cp,
    },
    _p = ({
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
            { breakpoint: f } = z(),
            g = dp[f.weight],
            v = f.height >= it.Medium && f.weight <= nt.Small,
            x = f.height <= it.Small ? k.small : k.medium,
            w = a(Zm, v && rp, m && Qm);
        t.useEffect(
            () =>
                ae(() => {
                    b || (c(), h(!0));
                }),
            [b, c],
        );
        const C = t.useCallback(() => {
            o();
        }, [o]);
        t.useEffect(() => {
            if (m)
                return Z(() => {
                    (l(), p(!1));
                }, 1e3);
        }, [m, l]);
        return (
            ot(C),
            e.jsxs('div', {
                className: w,
                style: { backgroundImage: `url(${d})` },
                children: [
                    _ &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx('div', { className: Ym, style: { backgroundImage: `url(${d})` } }),
                                e.jsx('div', { className: a(Jm, null == u ? void 0 : u.shadow) }),
                            ],
                        }),
                    e.jsx('span', { className: Km, children: s }),
                    e.jsxs('div', {
                        className: ep,
                        onClick: () => {
                            (V.sound(R.sounds.play()), p(!0));
                        },
                        onMouseEnter: () => V.sound(R.sounds.play()),
                        children: [e.jsx('div', { className: ap }), e.jsx('div', { className: tp, children: r })],
                    }),
                    e.jsx('div', {
                        className: sp,
                        children: e.jsx(Xm, {
                            arrowsTopPosition: g,
                            withCounter: !0,
                            children: n.map(
                                ({ value: a }, t) =>
                                    a && e.jsx(Um, { icon: a.icon, title: a.title, descr: a.description }, t),
                            ),
                        }),
                    }),
                    e.jsx('div', {
                        className: ip,
                        children: e.jsx('div', {
                            className: np,
                            children: e.jsx(N, { type: I.primary, size: x, mixClass: op, onClick: C, children: i }),
                        }),
                    }),
                ],
            })
        );
    },
    [up, mp] = G()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), slides: e.array('slides') },
                t = i(() => ee(a.slides.get(), (e, a) => ({ id: a, value: e })), { equals: q });
            return { ...a, computes: { getSlides: t } };
        },
        ({ externalModel: e }) => ({
            confirm: e.createCallbackNoArgs('onClose'),
            onVideo: e.createCallbackNoArgs('onVideo'),
            onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
        }),
    ),
    pp = n(() => {
        const a = X(),
            { model: t, controls: s } = mp(),
            { title: r, about: i, buttonLabel: n, background: o } = t.root.get(),
            l = t.computes.getSlides(),
            c = o || 'R.images.gui.maps.icons.battlePass.backgrounds.common',
            d = () => {
                (s.confirm(), a.push(ws.battlePass.chapterChoice));
            };
        return (
            Y(A.ESCAPE, () => d()),
            e.jsx(_p, {
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
    bp = () => e.jsx(up, { options: { rootId: R.aliases.battle_pass.Intro('resId') }, children: e.jsx(pp, {}) }),
    hp = 1e3,
    fp = {
        ...T,
        withStack: !0,
        type: E.Simple,
        delta: { duration: 500, delay: 300 },
        line: { duration: 500, delay: 300 },
    },
    gp = {
        ...D,
        line: { ...D.line, bgColorFinished: '#000000' },
        pattern: { ...D.pattern, bgImageFinished: D.bgImageBase },
    };
var vp = ((e) => (
    (e.FillProgressMax = 'fillProgressMax'),
    (e.RunCycle = 'runCycle'),
    (e.ResetProgress = 'resetProgress'),
    (e.RefillProgress = 'refillProgress'),
    (e.Idle = 'idle'),
    e
))(vp || {});
const xp = {
    fillProgressMax: { nextStep: 'runCycle', delay: hp },
    runCycle: { nextStep: 'resetProgress', delay: 2200 },
    resetProgress: { nextStep: 'refillProgress', delay: hp },
    refillProgress: { nextStep: 'idle', delay: hp },
};
var wp = ((e) => ((e.COMPLETED = 'completed'), (e.IN_PROGRESS = 'inProgress'), (e.NOT_STARTED = 'notStarted'), e))(
        wp || {},
    ),
    Cp = ((e) => (
        (e.NotAvailable = 'notAvailable'),
        (e.PurchasingIP = 'purchasingIP'),
        (e.ExtraChapter = 'extraChapter'),
        e
    ))(Cp || {}),
    yp = ((e) => ((e.left = 'left'), (e.right = 'right'), e))(yp || {}),
    jp = ((e) => (
        (e[(e.Active = 0)] = 'Active'),
        (e[(e.Paused = 1)] = 'Paused'),
        (e[(e.Completed = 2)] = 'Completed'),
        (e[(e.NotStarted = 3)] = 'NotStarted'),
        e
    ))(jp || {}),
    Sp = ((e) => (
        (e[(e.Locked = 0)] = 'Locked'),
        (e[(e.Unlocked = 1)] = 'Unlocked'),
        (e[(e.Paused = 2)] = 'Paused'),
        e
    ))(Sp || {});
const Np = {
        '--small-card-width': '140rem',
        '--small-current-card-width': '224rem',
        '--medium-card-width': '220rem',
        '--medium-current-card-width': '340rem',
        '--extra-large-card-width': '276rem',
    },
    kp = (e, a = !1) =>
        a ? (e < F.medium.weight ? 224 : 340) : e < F.medium.weight ? 140 : e < F.extraLarge.weight ? 220 : 276,
    [Ip, Pp] = G()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    levels: e.array('levels'),
                    chapters: e.array('chapters'),
                    animationStep: o.box(vp.Idle),
                },
                t = i((e) => {
                    const t = a.levels.get(),
                        s = lt(t, e - 1);
                    s || console.warn(`level info not found for number: ${e}`);
                    const r = t.length;
                    return { ...s, maxLevel: r, isFirstLevel: 1 === e, isLastLevel: e === r };
                }),
                s = i((e) => {
                    const a = t(e);
                    return ee(a.rewards, (e) => ({ ...e }));
                }),
                r = i((e) => {
                    const {
                            currentLevel: s,
                            currentLevelPoints: r,
                            previousLevel: i,
                            postProgressionStatus: n,
                        } = a.root.get(),
                        o = a.animationStep.get();
                    if ([vp.FillProgressMax, vp.RunCycle].includes(o)) return e === i ? wp.IN_PROGRESS : wp.COMPLETED;
                    const { levelPoints: l, maxLevel: c } = t(e);
                    return e < s || (s === c && r === l * c)
                        ? wp.COMPLETED
                        : e === s && (n !== Sp.Locked || r > 0)
                          ? wp.IN_PROGRESS
                          : wp.NOT_STARTED;
                }),
                n = i((e) => {
                    const { postProgressionStatus: t } = a.root.get(),
                        s = r(e);
                    return { cardStatus: s, isDisabled: t !== Sp.Unlocked && s === wp.NOT_STARTED };
                }),
                l = i(
                    () =>
                        _()
                            ? m().length && p() && b()
                                ? Cp.ExtraChapter
                                : u()
                                  ? Cp.PurchasingIP
                                  : void 0
                            : Cp.NotAvailable,
                    { equals: q },
                ),
                c = i(() => ne(a.chapters.get(), (e) => e.isRegular), { equals: q }),
                d = i(() => ne(a.chapters.get(), (e) => e.isRegular && e.chapterStatus === jp.Completed).length, {
                    equals: q,
                }),
                _ = i(() => d() === c().length),
                u = i(() => ge(a.chapters.get(), (e) => !e.isBattlePassPurchased)),
                m = i(() => ne(a.chapters.get(), (e) => !e.isRegular)),
                p = i(() => ge(m(), (e) => e.chapterStatus !== jp.Active)),
                b = i(() => ge(m(), (e) => e.chapterStatus !== jp.Completed)),
                h = i(() => {
                    const { currentLevel: e, currentLevelPoints: t } = a.root.get(),
                        s = e - 1;
                    return Ce(a.levels.get(), (e, { levelPoints: a }, r) => (r < s ? e + a : r === s ? e + t : e), 0);
                }),
                f = i(() => Ce(a.levels.get(), (e, { levelPoints: a }) => e + a, 0)),
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
                        m = o !== Sp.Locked,
                        [p = 0, b = 0] = ((e, a) => {
                            const t = kp(e),
                                s = kp(e, a);
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
                        progressValue: [vp.FillProgressMax, vp.RunCycle].includes(l) ? h : f(s, r, c),
                        previousProgressValue: l === vp.ResetProgress ? 0 : f(i, n, _, g),
                        maxProgressValue: h,
                    };
                }),
                w = i(() => {
                    const e = ne(
                        m(),
                        (e) =>
                            (e.chapterStatus === jp.Active || e.chapterStatus === jp.Completed) &&
                            !e.isBattlePassPurchased,
                    );
                    return e.length > 0 ? e : ne(a.chapters.get(), (e) => !e.isBattlePassPurchased);
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
    Rp = 'Highlight_ec6e9d0b',
    Bp = 'Highlight_inner_fc05a4f9',
    Ap = 'Highlight_side_ffdc7ad0',
    Ep = 'Highlight_side__left_48f019cc',
    Tp = 'Highlight_side__right_7a86ef2a',
    Lp = t.memo(() =>
        e.jsxs('div', {
            className: Rp,
            children: [
                e.jsx('div', { className: a(Ap, Ep) }),
                e.jsx('div', { className: Bp }),
                e.jsx('div', { className: a(Ap, Tp) }),
            ],
        }),
    ),
    Dp = 'Background_3985f66b',
    Wp = 'Background_default_7c7472e5',
    Op = 'Background_base__first_26effab7',
    Mp = 'Background_base__last_26effab7',
    Vp = 'Background_disabled_536defa9',
    zp = n(({ level: t }) => {
        const { model: s } = Pp(),
            { isFirstLevel: r, isLastLevel: i } = s.computes.levelInfo(t),
            { cardStatus: n, isDisabled: o } = s.computes.cardStates(t);
        return e.jsxs('div', {
            className: a(Dp, r && Op, i && Mp),
            children: [
                e.jsx('div', { className: Wp }),
                o && e.jsx('div', { className: Vp }),
                n === wp.IN_PROGRESS && e.jsx(Lp, {}),
            ],
        });
    }),
    Fp = {
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
    $p = i((e) => {
        const { item: a, name: t, value: s, overlayType: r, tooltipId: i, tooltipContentId: n } = e;
        return {
            name: a || t,
            smallImage: _t(e, H.Big),
            bigImage: _t(e, H.S180x135),
            special: r,
            value: s,
            valueType: dt(t),
            tooltipArgs: ct({ tooltipId: i }, Number(n), { ignoreShowDelay: !0 }),
        };
    }),
    Hp = n(({ level: t, className: s }) => {
        const { model: r } = Pp(),
            i = r.computes.levelRewards(t),
            { cardStatus: n } = r.computes.cardStates(t),
            {
                breakpoint: { weight: o },
            } = z(),
            l = o < F.medium.weight,
            c = 1 === i.length,
            d = ((e, a) => (a ? (e ? H.Big : H.S180x135) : e ? H.Small : H.Big))(l, c),
            _ = (e) => (l || !c ? e.smallImage : e.bigImage);
        return e.jsx('div', {
            className: a(Fp.base, Fp[`base__${n}`], s),
            children: e.jsx('div', {
                className: a(Fp.rewards, Fp[`rewards__${i.length}`]),
                children: ee(i, (t, s) => {
                    const r = $p(t);
                    return e.jsx(
                        'div',
                        { className: a(Fp.reward), children: e.jsx(U, { size: d, image: _(r), ...r }) },
                        `reward__${r.name}${s}`,
                    );
                }),
            }),
        });
    }),
    Up = {
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
    Gp = ({ position: t }) =>
        e.jsx('div', { className: a(Up.base, Up[`base__${t}`]), children: e.jsx('div', { className: Up.inner }) }),
    qp = {
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
    Xp = n(({ level: i, className: n }) => {
        const { model: o } = Pp(),
            { postProgressionStatus: l } = o.root.get(),
            { cardStatus: c } = o.computes.cardStates(i),
            [d, _] = t.useState(!1),
            u = c === wp.IN_PROGRESS,
            m = l === Sp.Unlocked,
            { stageOpacity: p } = s({
                from: { stageOpacity: d ? 1 : 0 },
                to: { stageOpacity: 0 },
                delay: 0,
                onStart: () => V.sound(R.sounds.bp_current_phase()),
                config: { duration: 750, easing: Ot },
            }),
            { sparkOpacity: b } = s({
                from: { sparkOpacity: d ? 0.7 : 0 },
                to: { sparkOpacity: 0 },
                delay: 1100,
                onRest: () => _(!1),
                config: { duration: 300, easing: Ot },
            });
        return (
            t.useEffect(() => {
                if (u)
                    return Z(() => {
                        _(!0);
                    }, 100);
            }, [u]),
            e.jsx('div', {
                className: a(qp.base, qp[`base__${c}`], n),
                children: u
                    ? e.jsxs(e.Fragment, {
                          children: [
                              m &&
                                  e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsx('div', { className: qp.glow }),
                                          e.jsx(r.div, { style: { opacity: b }, className: qp.animatedGlow }),
                                      ],
                                  }),
                              e.jsxs('div', {
                                  className: qp.numberInProgress,
                                  children: [
                                      i,
                                      e.jsx(r.div, {
                                          style: {
                                              opacity: p,
                                              transform: p
                                                  .to([0, 1], [2.5, 1])
                                                  .to((e) => `translate(-50%, -50%) scale(${e})`),
                                          },
                                          className: qp.animatedNumber,
                                          children: i,
                                      }),
                                  ],
                              }),
                              e.jsx('div', {
                                  className: qp.title,
                                  children: R.strings.battle_pass.postProgressionView.progression.currentStep(),
                              }),
                          ],
                      })
                    : e.jsx('div', { className: qp.number, children: i }),
            })
        );
    }),
    Zp = {
        base__showAnimation: 'CompletedStatus_base__showAnimation_8334d234',
        base__hideAnimation: 'CompletedStatus_base__hideAnimation_5e0caacf',
        icon: 'CompletedStatus_icon_6277c5c1',
        iconGlow: 'CompletedStatus_iconGlow_2dfae495',
    },
    Kp = ({ shouldAppear: t }) =>
        e.jsxs('div', {
            className: a(Zp.base, t ? Zp.base__showAnimation : Zp.base__hideAnimation),
            children: [
                e.jsx('div', { className: Zp.iconGlow }),
                e.jsx(Ke, {
                    body: R.strings.battle_pass.tooltips.completed.got(),
                    children: e.jsx('div', { className: Zp.icon }),
                }),
            ],
        }),
    Qp = {
        base: 'CurrentPoints_4c27ce16',
        base__appear: 'CurrentPoints_base__appear_2cb3686f',
        base__disappear: 'CurrentPoints_base__disappear_e11174fb',
        value__current: 'CurrentPoints_value__current_9c51dee4',
        value__total: 'CurrentPoints_value__total_99fac246',
        divider: 'CurrentPoints_divider_83c77e4c',
        icon: 'CurrentPoints_icon_6b371e14',
    },
    Yp = n(({ totalLevelPoints: t, shouldAppear: s, shouldDisappear: r, className: i }) => {
        const { model: n } = Pp(),
            { currentLevelPoints: o, previousLevelPoints: l } = n.root.get();
        return e.jsx(ut, {
            ignoreShowDelay: !0,
            contentId: R.views.mono.battle_pass.tooltips.bp_points('resId'),
            children: e.jsxs('div', {
                className: a(Qp.base, s && Qp.base__appear, r && Qp.base__disappear, i),
                children: [
                    e.jsx('div', { className: a(Qp.value, Qp.value__current), children: r ? l : o }),
                    e.jsx('div', { className: Qp.divider, children: '/' }),
                    e.jsx('div', { className: a(Qp.value, Qp.value__total), children: t }),
                    e.jsx('div', { className: Qp.icon }),
                ],
            }),
        });
    }),
    Jp = 'Status_41b476d1',
    eb = 'Status_pointsWrapper_6042cf48',
    ab = n(({ level: s, className: r }) => {
        const { model: i } = Pp(),
            { cardStatus: n, isDisabled: o } = i.computes.cardStates(s),
            { levelPoints: l } = i.computes.levelInfo(s),
            c = i.animationStep.get(),
            d = [vp.FillProgressMax, vp.RunCycle].includes(c),
            _ = c === vp.ResetProgress,
            u = n === wp.COMPLETED && !o,
            m = n === wp.IN_PROGRESS,
            [p, b] = t.useState(u);
        return (
            t.useEffect(() => {
                if (c === vp.RunCycle) return void b(!1);
                const e = c === vp.FillProgressMax,
                    a = c === vp.ResetProgress;
                return p
                    ? void 0
                    : Z(
                          () => {
                              b(!!e || u);
                          },
                          (a ? 500 : 0) + 100 * s,
                      );
            }, [c, p, u, s]),
            e.jsxs('div', {
                className: a(Jp, r),
                children: [
                    u && p && e.jsx(Kp, { shouldAppear: p }),
                    m && e.jsx(Yp, { className: eb, totalLevelPoints: l, shouldAppear: _, shouldDisappear: d }),
                ],
            })
        );
    }),
    tb = {
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
    sb = n(({ level: t }) => {
        const { model: s } = Pp(),
            { levelPoints: r, isFirstLevel: i, isLastLevel: n } = s.computes.levelInfo(t),
            { cardStatus: o } = s.computes.cardStates(t),
            l = !i && o === wp.IN_PROGRESS,
            c = !n && s.computes.cardStates(t + 1).cardStatus !== wp.IN_PROGRESS;
        return e.jsxs('div', {
            className: a(tb.base, tb[`base__${o}`]),
            style: Np,
            children: [
                e.jsx(zp, { level: t }),
                e.jsx(Xp, { className: tb.stage, level: t }),
                e.jsx(Hp, { className: tb.rewards, level: t }),
                e.jsx(ab, { className: tb.status, level: t }),
                e.jsx('div', { className: tb.points, children: t * r }),
                i && e.jsx('div', { className: a(tb.points, tb.points__initial), children: 0 }),
                l && e.jsx(Gp, { position: yp.left }),
                c && e.jsx(Gp, { position: yp.right }),
            ],
        });
    }),
    rb = 'Cards_afe60a85',
    ib = n(() => {
        const { model: a } = Pp(),
            t = a.levels.get(),
            { chapterID: s } = a.root.get();
        return e.jsx('div', {
            className: rb,
            children: ee(t, ({ level: a }, t) => e.jsx(sb, { level: a }, `${s}_${t}`)),
        });
    }),
    nb = 'ExtraChapter_51af81b2',
    ob = 'ExtraChapter_wrapper_1111764a',
    lb = 'ExtraChapter_border_1fc38ae',
    cb = 'ExtraChapter_base__hover_d6a2f84c',
    db = 'ExtraChapter_bg_6bfbbfc5',
    _b = 'ExtraChapter_widget_ba8b2337',
    ub = 'ExtraChapter_title_4965d60',
    mb = 'ExtraChapter_description_1a9020c',
    pb = 'ExtraChapter_content_7e770f3c',
    bb = R.strings.battle_pass.postProgressionView.footer.extraChapter,
    hb = n(() => {
        var s;
        const { model: r } = Pp(),
            i = null == (s = r.computes.extraChapters()[0]) ? void 0 : s.chapterID,
            [n, o] = t.useState(!1),
            l = X();
        return i
            ? e.jsxs('div', {
                  className: a(nb, n && cb),
                  onMouseOver: (e) => {
                      (e.stopPropagation(), o(!0), V.sound(R.sounds.highlight()));
                  },
                  onMouseOut: () => {
                      o(!1);
                  },
                  onClick: () => {
                      (l.push(ws.battlePass.progression, { chapterID: i }), V.sound(R.sounds.play()));
                  },
                  children: [
                      e.jsxs('div', {
                          className: ob,
                          children: [
                              e.jsx('div', { className: db }),
                              e.jsxs('div', {
                                  className: pb,
                                  children: [
                                      e.jsx('div', { className: ub, children: bb.title.text() }),
                                      e.jsx('div', { className: mb, children: bb.description.text() }),
                                  ],
                              }),
                          ],
                      }),
                      e.jsx('div', { className: _b }),
                      e.jsx('div', { className: lb }),
                  ],
              })
            : null;
    }),
    fb = 'NotAvailable_e1e3731d',
    gb = 'NotAvailable_background_a3edbc06',
    vb = 'NotAvailable_content_94110074',
    xb = 'NotAvailable_button_149fb125',
    wb = 'NotAvailable_description_6cafdd55',
    Cb = 'NotAvailable_completedCount_8450f150',
    yb = R.strings.battle_pass.postProgressionView.footer,
    jb = n(() => {
        const { model: a } = Pp(),
            t = X(),
            s = a.computes.completedRegularChaptersCount(),
            r = a.computes.regularChapters().length;
        return e.jsxs('div', {
            className: fb,
            children: [
                e.jsx('div', { className: gb }),
                e.jsxs('div', {
                    className: vb,
                    children: [
                        e.jsx(P, {
                            classMix: wb,
                            text: yb.description.text(),
                            binding: {
                                completedChapters: e.jsx('span', { className: Cb, children: s }),
                                chaptersAmount: r,
                            },
                        }),
                        e.jsx(N, {
                            type: I.ghost,
                            size: k.medium,
                            mixClass: xb,
                            onClick: () => t.push(ws.battlePass.chapterChoice),
                            children: yb.button.text(),
                        }),
                    ],
                }),
            ],
        });
    }),
    Sb = 'PurchasingIp_349aa5c4',
    Nb = 'PurchasingIp_wrapper_2ff2079e',
    kb = 'PurchasingIp_border_78bb5b9b',
    Ib = 'PurchasingIp_base__hover_e6cc332b',
    Pb = 'PurchasingIp_bg_345ee932',
    Rb = 'PurchasingIp_blink_990fb4a0',
    Bb = 'PurchasingIp_text_4355bb8a',
    Ab = 'PurchasingIp_button_b213818',
    Eb = 'PurchasingIp_content_b09e9d85',
    Tb = R.strings.battle_pass.postProgressionView.footer.purchaseIP,
    Lb = n(() => {
        const { model: s } = Pp(),
            r = X(),
            [i, n] = t.useState(!1);
        return e.jsxs('div', {
            className: a(Sb, i && Ib),
            onMouseOver: (e) => {
                (e.stopPropagation(), n(!0), V.sound(R.sounds.highlight()));
            },
            onMouseOut: () => {
                n(!1);
            },
            onClick: () => {
                var e;
                const a = s.computes.chaptersForPurchase();
                (V.sound(R.sounds.play()),
                    r.push(ws.battlePass.buyPass, { chapterID: null == (e = a[0]) ? void 0 : e.chapterID }));
            },
            children: [
                e.jsxs('div', {
                    className: Nb,
                    children: [
                        e.jsx('div', { className: Pb }),
                        e.jsx('div', { className: Rb }),
                        e.jsxs('div', {
                            className: Eb,
                            children: [
                                e.jsx('div', {
                                    className: Bb,
                                    children: R.strings.battle_pass.postProgressionView.footer.purchaseIP.banner.text(),
                                }),
                                e.jsx(N, { type: I.main, size: k.medium, mixClass: Ab, children: Tb.button.text() }),
                            ],
                        }),
                    ],
                }),
                e.jsx('div', { className: kb }),
            ],
        });
    }),
    Db = 'Footer_447447a9',
    Wb = n(({ className: t = '' }) => {
        const { model: s } = Pp(),
            r = s.computes.footerState();
        return e.jsx('div', {
            className: a(Db, t),
            children: (() => {
                switch (r) {
                    case Cp.NotAvailable:
                        return e.jsx(jb, {});
                    case Cp.PurchasingIP:
                        return e.jsx(Lb, {});
                    case Cp.ExtraChapter:
                        return e.jsx(hb, {});
                    default:
                        return null;
                }
            })(),
        });
    }),
    Ob = 'Header_8161ac6c',
    Mb = 'Header_background_ca26eac9',
    Vb = 'Header_headlineContainer_83fb95ed',
    zb = 'Header_headline_49f93202',
    Fb = 'Header_divider_d589871a',
    $b = 'Header_title_87287815',
    Hb = 'Header_descriptionContainer_5475d6de',
    Ub = 'Header_descriptionPaused_65f475ba',
    Gb = 'Header_description_1d21a2e3',
    qb = 'Header_icon_e3ea70af',
    Xb = 'Header_label_f1c2cd27',
    Zb = R.strings.battle_pass.postProgressionView.header,
    Kb = n(({ className: t }) => {
        const { postProgressionStatus: s, endDate: r } = Pp().model.root.get(),
            i = s === Sp.Locked,
            n = s === Sp.Paused,
            o = Xa(r, Za.DayMonthFull);
        return e.jsxs('div', {
            className: a(Ob, t),
            children: [
                e.jsx('div', { className: Mb }),
                e.jsxs('div', {
                    className: Vb,
                    children: [
                        !i &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx('span', { className: zb, children: Zb.headline.unlocked() }),
                                    e.jsx('div', { className: Fb }),
                                ],
                            }),
                        e.jsx(P, { classMix: zb, text: Zb.headline.deadline(), binding: { endDate: o } }),
                    ],
                }),
                e.jsx('span', { className: $b, children: Zb.title() }),
                e.jsx('div', {
                    className: Hb,
                    children: n
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx('div', { className: qb }),
                                  e.jsx('span', { className: Xb, children: Zb.description.onPause.highlight() }),
                                  e.jsx('span', { className: Ub, children: Zb.description.onPause.regular() }),
                              ],
                          })
                        : e.jsx('span', { className: Gb, children: Zb.description.active() }),
                }),
            ],
        });
    }),
    Qb = 'Counter_530269bb',
    Yb = 'Counter_infinityIconContainer_1ffbc2e2',
    Jb = 'Counter_infinityIcon_d060ec47',
    eh = 'Counter_label_3f062fe0',
    ah = 'Counter_cyclesCompleted_98e1bb2c',
    th = 'Counter_cyclesNumber_623ae487',
    sh = 'Counter_cyclesNumber__animated_78a25366',
    rh = 'Counter_cyclesNumber__hidden_4c746c1c',
    ih = R.strings.battle_pass.postProgressionView.progression,
    nh = n(({ className: t, labelRef: s, shouldRun: r }) => {
        const { model: i } = Pp(),
            { cyclesCompletedCount: n, previousCyclesCompletedCount: o } = i.root.get(),
            l = i.animationStep.get(),
            c = n !== o && [vp.Idle, vp.FillProgressMax].includes(l);
        return e.jsxs('div', {
            className: a(Qb, t),
            ref: s,
            children: [
                e.jsx('div', { className: Yb, children: e.jsx('div', { className: Jb }) }),
                e.jsx('div', {
                    className: eh,
                    children: n
                        ? e.jsxs('div', {
                              className: ah,
                              children: [
                                  e.jsx('span', { children: ih.cyclesCompleted() }),
                                  e.jsx(
                                      'span',
                                      { className: a(th, r && sh, c && rh), children: n },
                                      `cyclesCompletedCount-${r}`,
                                  ),
                              ],
                          })
                        : ih.cyclicalProgression(),
                }),
            ],
        });
    }),
    oh = {
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
    lh = '--label-offset',
    ch = { left: 0, width: 0 },
    dh = n(({ className: s, shouldRun: r }) => {
        const { model: i } = Pp(),
            { cyclesCompletedCount: n } = i.root.get(),
            o = t.useRef(null),
            l = t.useRef(null),
            {
                breakpoint: { weight: c },
            } = z(),
            d = Ne(),
            [_, u] = t.useState({ [lh]: '0%' });
        return (
            mt(() => {
                var e, a;
                const t = (null == (e = o.current) ? void 0 : e.getBoundingClientRect()) ?? ch,
                    s = (null == (a = l.current) ? void 0 : a.getBoundingClientRect().left) ?? 0,
                    r = 15 * d,
                    i = (100 * (s - t.left - r)) / t.width;
                u({ [lh]: `${i}%` });
            }, [o.current, l.current, c, d, n]),
            e.jsxs('div', {
                className: a(oh.base, s),
                style: _,
                children: [
                    e.jsx('div', { className: oh.arrow }),
                    e.jsxs('div', {
                        className: a(oh.contour, oh[`contour__${d}x`]),
                        ref: o,
                        children: [
                            e.jsx('div', { className: a(oh.border, oh.border__vertical) }),
                            e.jsx('div', { className: a(oh.border, oh.border__horizontal) }),
                            r &&
                                Array(5)
                                    .fill(void 0)
                                    .map((t, s) =>
                                        e.jsx('div', { className: a(oh.bar, oh[`bar__state${s + 1}`]) }, `bar-${s}`),
                                    ),
                        ],
                    }),
                    e.jsx(nh, { className: oh.labelContainer, labelRef: l, shouldRun: r }),
                ],
            })
        );
    }),
    _h = 'ProgressBar_7a10c6f0',
    uh = 'ProgressBar_progressBackground_ce66ede4',
    mh = 'ProgressBar_progressBar_61381794',
    ph = 'ProgressBar_progressBar__disabled_f37621b4',
    bh = 'ProgressBar_optimizedProgressBar_87a4af2b',
    hh = 'ProgressBar_cycle_7886c8',
    fh = n(() => {
        const { model: s, controls: r } = Pp(),
            { postProgressionStatus: i } = s.root.get(),
            n = s.animationStep.get(),
            o = n === vp.RunCycle,
            l = i === Sp.Locked,
            c = i === Sp.Paused,
            d = l || c,
            {
                breakpoint: { weight: _ },
            } = z(),
            { progressValue: u, previousProgressValue: m, maxProgressValue: p } = s.computes.getProgressValues(_),
            b = s.computes.progressChanged();
        (t.useEffect(() => {
            switch (n) {
                case vp.FillProgressMax:
                case vp.RefillProgress:
                    return void r.handleProgressAchieved();
                case vp.RunCycle:
                    return void r.handleCycleCompleted();
            }
        }, [n, r]),
            t.useEffect(() => {
                if (b && n === vp.Idle)
                    return Z(() => {
                        r.handleProgressAchieved();
                    }, hp);
            }, [n, r, b]));
        const h = t.useRef(pt());
        return e.jsxs('div', {
            className: _h,
            style: { '--progress-line-width': `${p}rem` },
            children: [
                e.jsx('div', { className: uh }),
                e.jsx(ut, {
                    contentId: R.views.mono.battle_pass.tooltips.bp_points('resId'),
                    children: e.jsx('div', {
                        className: a(mh, d && ph),
                        children: e.jsx(bt, {
                            api: h,
                            value: u,
                            deltaFrom: m,
                            maxValue: p,
                            disabled: d,
                            animationSettings: fp,
                            theme: gp,
                            className: bh,
                        }),
                    }),
                }),
                e.jsx(dh, { className: hh, shouldRun: o }),
            ],
        });
    }),
    gh = 'Toolbar_infoButtons_dd878d8c',
    vh = R.strings.battle_pass.postProgressionView.toolbar,
    xh = n(({ className: a }) => {
        const { openInfoPage: t, openPointsInfo: s } = Pp().controls;
        return e.jsx('div', {
            className: a,
            children: e.jsxs('div', {
                className: gh,
                children: [
                    e.jsx(ht, { caption: vh.aboutBattlePass(), type: 'info', onClick: t }),
                    e.jsx(ht, { caption: vh.howToEarnPoints(), type: 'info', onClick: s }),
                ],
            }),
        });
    }),
    wh = 'App_ad9a5024',
    Ch = 'App_toolbar_d16ffb0a',
    yh = 'App_awardsWidget_1186a317',
    jh = 'App_award_70e8698f',
    Sh = 'App_content_b9a70459',
    Nh = 'App_header_77cc1fba',
    kh = 'App_progression_992167b9',
    Ih = 'App_footer_e6643cae',
    Ph = R.images.gui.maps.icons.battlePass.backgrounds.progression,
    Rh = n(() => {
        const { model: a, controls: s } = Pp(),
            { chapterID: r } = a.root.get(),
            i = a.animationStep.get(),
            n = a.computes.cycleChanged(),
            o = X();
        (t.useEffect(() => {
            if (i !== vp.Idle) {
                const { nextStep: e, delay: a } = xp[i];
                return Z(() => {
                    s.setAnimationStep(e);
                }, a);
            }
            n && s.setAnimationStep(vp.FillProgressMax);
        }, [i, s, n]),
            Y(A.ESCAPE, () => o.goBack()));
        const l = `url(${$t(Ph, r)})`;
        return e.jsxs('div', {
            className: wh,
            style: { backgroundImage: l },
            children: [
                e.jsx(xh, { className: Ch }),
                e.jsx(Uu, {
                    rootId: R.aliases.battle_pass.PostProgression('resId'),
                    context: 'model.awardsWidget',
                    classNames: { base: yh, award: jh },
                }),
                e.jsxs('div', {
                    className: Sh,
                    children: [
                        e.jsx(Kb, { className: Nh }),
                        e.jsxs('div', { className: kh, children: [e.jsx(ib, {}), e.jsx(fh, {})] }),
                    ],
                }),
                e.jsx(Wb, { className: Ih }),
            ],
        });
    }),
    Bh = () =>
        e.jsx(Ip, { options: { rootId: R.aliases.battle_pass.PostProgression('resId') }, children: e.jsx(Rh, {}) });
var Ah = ((e) => (
        (e.Active = 'active'),
        (e.Paused = 'paused'),
        (e.Completed = 'completed'),
        (e.NotStarted = 'notStarted'),
        e
    ))(Ah || {}),
    Eh = ((e) => (
        (e.NoAction = 'noAction'),
        (e.Buy = 'buy'),
        (e.BuyLevel = 'buyLevel'),
        (e.ActivateChapter = 'activateChapter'),
        e
    ))(Eh || {}),
    Th = ((e) => ((e.COMMON = 'common'), (e.EXTRA = 'extra'), (e.HOLIDAY = 'holiday'), e))(Th || {}),
    Lh = ((e) => ((e.left = 'left'), (e.right = 'right'), e))(Lh || {}),
    Dh = ((e) => ((e.COMPLETED = 'completed'), (e.IN_PROGRESS = 'inProgress'), (e.NOT_STARTED = 'notStarted'), e))(
        Dh || {},
    ),
    Wh = ((e) => (
        (e.UNLOCK_BIG = 'bp_unlock_big'),
        (e.UNLOCK_SMALL = 'bp_unlock_small'),
        (e.IMPROVED_REWARD = 'bp_improved_reward'),
        e
    ))(Wh || {}),
    Oh = ((e) => ((e.back = 'back'), (e.forward = 'forward'), e))(Oh || {}),
    Mh = ((e) => ((e.Default = 'default'), (e.Gray = 'gray'), e))(Mh || {});
const Vh = [Ah.Active, Ah.Completed],
    [zh, Fh] = G()(
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
                t = i(() => ee(a.freeFinalRewards.get(), Ie), { equals: q }),
                s = i(() => ee(a.paidFinalRewards.get(), Ie), { equals: q }),
                r = i(() => ee(a.starterPackRewards.get(), Ie), { equals: q }),
                n = i(() => a.root.get().chapterType === Th.HOLIDAY),
                o = i(() => ({ freeFinalRewards: Mt(t()), ...(s().length && { paidFinalRewards: Mt(s()) }) })),
                l = i(() => {
                    const { freeFinalRewards: e, paidFinalRewards: a } = o();
                    return !(!a && e.mainReward === Vt.progressiveStyle);
                }),
                c = i(() => a.root.get().chapterType === Th.EXTRA),
                d = i(() => !(n() || c()), { equals: q }),
                _ = i((e) => (e ? a.paidTankmanInfo.get() : a.freeTankmanInfo.get())),
                u = i((e) => {
                    const t = a.levels.get(),
                        s = lt(t, e - 1);
                    return (s || console.warn(`level info not found for number: ${e}`), { ...s, maxLevel: t.length });
                }),
                m = i((e, a) => {
                    const t = u(e);
                    return ee(a ? t.freeRewardItems.items : t.paidRewardItems.items, (e) => ({ ...e }));
                }),
                p = i(() => {
                    const {
                            freePointsInLevel: e,
                            currentPointsInLevel: t,
                            chapterState: s,
                            hasExtra: r,
                        } = a.root.get(),
                        i = Vh.includes(s) || r ? t : e,
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
                        ? Dh.COMPLETED
                        : e === _ && (s !== Ah.NotStarted || d > 0)
                          ? Dh.IN_PROGRESS
                          : Dh.NOT_STARTED;
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
                        isRare: i.isRare && n !== Dh.IN_PROGRESS,
                        isDisabled: (t && !s) || (r !== Ah.Active && n === Dh.NOT_STARTED),
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
    $h = 'AdditionalRewardInfo_rewardText_31efb669',
    Hh = 'AdditionalRewardInfo_subTitle_251693c1',
    Uh = 'AdditionalRewardInfo_subTitleTextWrapper_19819b2b',
    Gh = 'AdditionalRewardInfo_subTitleText_b6b02718',
    qh = 'AdditionalRewardInfo_subTitleText__truncated_539e6fd4',
    Xh = 'AdditionalRewardInfo_infoIcon_a4fa826d',
    Zh = R.strings.battle_pass.progression.extraChapterWidget,
    Kh = n(({ additionalReward: s }) => {
        const {
                model: { widgetFinalRewards: r, styleInfo: i, vehicleInfo: n },
            } = Fh(),
            { vehicleName: o } = n.get(),
            { battleQuest: l } = r.get(),
            [c, d] = t.useState(!1),
            _ = t.useRef(null),
            u = t.useCallback(async () => {
                await Dt();
                const e = _.current;
                e && d(e.scrollWidth > e.offsetWidth);
            }, []);
        return (
            ft(
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
                    s === Vt.style &&
                        e.jsx(P, {
                            classMix: $h,
                            text: Zh.vehicleSubTitle(),
                            binding: { styleName: i.get().styleName },
                        }),
                    s === Vt.battleQuest &&
                        e.jsx(ut, {
                            contentId: R.views.mono.battle_pass.tooltips.random_quest('resId'),
                            args: { tokenID: l },
                            children: e.jsxs('div', {
                                className: Hh,
                                children: [
                                    e.jsx('div', {
                                        className: Uh,
                                        children: e.jsx('div', {
                                            className: a(Gh, c && qh),
                                            ref: _,
                                            children: e.jsx(P, {
                                                text: Zh.styleSubTitle(),
                                                binding: { vehicleName: o },
                                            }),
                                        }),
                                    }),
                                    e.jsx('div', { className: Xh }),
                                ],
                            }),
                        }),
                ],
            })
        );
    }),
    Qh = 'StyleDescription_rewardTitle_a38f5a35',
    Yh = 'StyleDescription_rewardTitle__singleReward_844cd016',
    Jh = 'StyleDescription_title_10aa0199',
    ef = 'StyleDescription_title__singleReward_4f032bf8',
    af = 'StyleDescription_vehicleTitle_d97e976a',
    tf = 'StyleDescription_vehicleLabel_d39e5139',
    sf = 'StyleDescription_vehicleInHangar_f82728b9',
    rf = 'StyleDescription_remark_bf754841',
    nf = 'StyleDescription_lockIcon_6a873423',
    of = 'StyleDescription_baseClass_cf456a8f',
    lf = 'StyleDescription_name_9ce7517f',
    cf = 'StyleDescription_level_7a97d385',
    df = 'StyleDescription_type_8cffe3f7',
    _f = R.strings.battle_pass.progression.extraChapterWidget,
    uf = n(({ additionalReward: t, isPaidReward: s }) => {
        const {
                model: { styleInfo: r, vehicleInfoFromStyle: i, root: n, computes: o },
                controls: l,
            } = Fh(),
            { isBattlePassPurchased: c } = n.get(),
            { styleName: d, isVehicleInHangar: _ } = r.get(),
            u = o.getPaidFinalRewards().length,
            m = { base: of, level: cf, name: lf, typeIcon: df };
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(st, { type: 'preview', size: 'normal', onClick: l.openPreview }),
                e.jsx('div', { className: a(Qh, !u && Yh), children: u ? _f.style3DTitle() : _f.styleTitle() }),
                e.jsx(P, { classMix: a(Jh, !u && ef), text: _f.styleName(), binding: { styleName: d } }),
                !u &&
                    e.jsxs('div', {
                        className: af,
                        children: [
                            e.jsx(P, {
                                classMix: tf,
                                text: _f.forLabel(),
                                binding: {
                                    vehicleName: e.jsx(p_, {
                                        ...i.get(),
                                        classNames: m,
                                        vehicleTypeIconSize: Qa.x24x24,
                                    }),
                                },
                            }),
                            _ && e.jsx(Ke, { body: _f.inHangarTooltip(), children: e.jsx('div', { className: sf }) }),
                        ],
                    }),
                t && e.jsx(Kh, { additionalReward: t }),
                s &&
                    !c &&
                    e.jsx(ut, {
                        contentId: R.views.mono.battle_pass.tooltips.lock_icon('resId'),
                        children: e.jsxs('div', {
                            className: rf,
                            children: [e.jsx('div', { className: nf }), e.jsx('div', { children: _f.styleRemark() })],
                        }),
                    }),
            ],
        });
    }),
    mf = {
        base: 'Voice_c37942b8',
        icon: 'Voice_icon_341b24d6',
        icon__speaker: 'Voice_icon__speaker_172c2c35',
        icon__wave0: 'Voice_icon__wave0_77617b3a',
        base__animate: 'Voice_base__animate_d1a20ef1',
        icon__wave1: 'Voice_icon__wave1_1096fc2',
    },
    pf = R.strings.battle_pass.progression.extraChapterWidget,
    bf = (() => {
        const e = Math.ceil(Gt / 800);
        return { duration: 800, iterationCount: e, totalDuration: 800 * e };
    })(),
    hf = ({ groupName: s }) => {
        const [r, i] = t.useState(!1),
            n = t.useCallback(() => {
                r || (V.sound(R.sounds.play()), V.sound(s), i(!0));
            }, [r, s]);
        return (
            t.useEffect(() => {
                r &&
                    Z(() => {
                        i(!1);
                    }, bf.totalDuration);
            }, [r]),
            e.jsx(Ke, {
                body: pf.voiceoverTooltip(),
                children: e.jsxs('div', {
                    className: a(mf.base, r && mf.base__animate),
                    onClick: n,
                    onMouseEnter: () => {
                        V.sound(R.sounds.bp_highlight());
                    },
                    style: {
                        '--animation-duration': `${bf.duration}ms`,
                        '--animation-iteration-count': bf.iterationCount,
                    },
                    children: [
                        e.jsx('div', { className: a(mf.icon, mf.icon__speaker) }),
                        e.jsx('div', { className: a(mf.icon, mf.icon__wave0) }),
                        e.jsx('div', { className: a(mf.icon, mf.icon__wave1) }),
                        e.jsx('div', { className: a(mf.icon, mf.icon__wave2) }),
                    ],
                }),
            })
        );
    },
    ff = 'TankmanDescription_title_6b604eaf',
    gf = 'TankmanDescription_title__noVoice_132efc49',
    vf = 'TankmanDescription_name_9f802b92',
    xf = 'TankmanDescription_skills_8507fe1b',
    wf = 'TankmanDescription_skill_2e650973',
    Cf = 'TankmanDescription_skill__paidReward_f372df77',
    yf = 'TankmanDescription_description_4c6b2a1b',
    jf = 'TankmanDescription_lockIcon_7b9909c0',
    Sf = 'TankmanDescription_lockText_e8d2d84c',
    Nf = 'TankmanDescription_showCommander_392de842',
    kf = 'TankmanDescription_close_b105aa08',
    If = R.strings.battle_pass.progression.extraChapterWidget,
    Pf = R.strings.battle_pass.awardsWidget.description.commander(),
    Rf = n(({ isPaidReward: t }) => {
        const { model: s, controls: r } = Fh(),
            { tankmenScreenID: i, isBattlePassPurchased: n } = s.root.get(),
            { tankman: o, hasVoice: l, skills: c, groupName: d } = s.computes.getFinalRewardTankmanInfo(t),
            { freeFinalRewards: _, paidFinalRewards: u } = s.computes.getFinalRewardsDescription(),
            m = _.mainReward === Vt.tankman && (null == u ? void 0 : u.mainReward) === Vt.tankman;
        return e.jsxs(e.Fragment, {
            children: [
                l && e.jsx(hf, { groupName: d }),
                e.jsx('div', { className: a(ff, !l && gf), children: If.tankman() }),
                e.jsx('div', { className: vf, children: o }),
                c.length > 0 &&
                    e.jsx('div', { className: xf, children: e.jsx(Ut, { skills: c, className: a(wf, t && Cf) }) }),
                t &&
                    !n &&
                    e.jsx(ut, {
                        contentId: R.views.mono.battle_pass.tooltips.lock_icon('resId'),
                        children: e.jsxs('div', {
                            className: yf,
                            children: [
                                e.jsx('div', { className: jf }),
                                e.jsx('div', { className: Sf, children: If.labelWithBP() }),
                            ],
                        }),
                    }),
                Boolean(i) &&
                    !m &&
                    e.jsx(Ke, {
                        body: Pf,
                        isEnabled: Boolean(Pf),
                        children: e.jsx('div', {
                            className: Nf,
                            children: e.jsx(N, {
                                type: I.ghost,
                                size: k.small,
                                mixClass: kf,
                                onClick: r.showTankmen,
                                children: If.commanderVoices(),
                            }),
                        }),
                    }),
            ],
        });
    }),
    Bf = 'Timer_992312dc',
    Af = 'Timer_light_b54b0e12',
    Ef = 'Timer_icon_daefbc5f',
    Tf = 'Timer_value_ef2605c8',
    Lf = ({ expireTime: a = 0 }) => {
        const t = gt(a, 1),
            s = ((e) => {
                const a = (e) => e.toString().padStart(2, '0');
                return `${e.days ? vt(R.strings.common.duration.days(), { days: e.days }) : ''} ${a(e.hours)} : ${a(e.minutes)} : ${a(e.seconds)}`;
            })(we(t));
        return e.jsx(Ke, {
            body: R.strings.battle_pass.progression.extraChapterWidget.timer(),
            children: e.jsxs('div', {
                className: Bf,
                children: [
                    e.jsx('div', { className: Ef }),
                    e.jsx('div', { className: Tf, children: s }),
                    e.jsx('div', { className: Af }),
                    e.jsx('div', { className: Af }),
                ],
            }),
        });
    },
    Df = 'VehicleInfo_f8a1a53e',
    Wf = 'VehicleInfo_type_f9fe252e',
    Of = ({ vehicleLvl: t, vehicleName: s, vehicleType: r, isElite: i, classNames: n }) =>
        e.jsxs('div', {
            className: a(Df, null == n ? void 0 : n.base),
            children: [
                zt(t),
                e.jsx('div', {
                    className: a(Wf, null == n ? void 0 : n.type),
                    style: {
                        backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${xt(r)}${i ? '_elite' : ''}`)})`,
                    },
                }),
                s,
            ],
        }),
    Mf = {
        vehicleBg: 'VehicleDescription_vehicleBg_a5f58731',
        vehicleBg__description: 'VehicleDescription_vehicleBg__description_449188e7',
        vehicleCaption: 'VehicleDescription_vehicleCaption_ff05b2b9',
        description: 'VehicleDescription_description_ac70d89a',
        rewardLabel: 'VehicleDescription_rewardLabel_e69780e1',
        rewardDescription: 'VehicleDescription_rewardDescription_ac995cfe',
        rewardLockIcon: 'VehicleDescription_rewardLockIcon_bf4a508e',
        rewardLockText: 'VehicleDescription_rewardLockText_1ae0fc44',
    },
    Vf = R.strings.battle_pass.progression.extraChapterWidget,
    zf = n(({ additionalReward: t, isPaidReward: s }) => {
        const {
                model: { vehicleInfo: r, root: i, computes: n },
                controls: o,
            } = Fh(),
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
            } = z(),
            { isBattlePassPurchased: b, seasonNum: h } = i.get(),
            f = n.getPaidFinalRewards().length,
            g = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_600x450.${m})` },
            v = p > F.medium.weight ? 14 : 12,
            x = d.length > v ? _ : d,
            w = Vf.tank.description.$num(h);
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: a(Mf.vehicleBg, !f && Mf.vehicleBg__description), style: g }),
                e.jsx(st, { type: 'preview', size: 'normal', onClick: o.openPreview }),
                e.jsx('div', { className: Mf.vehicleCaption, children: Vf.vehicleCaption() }),
                e.jsx(Of, {
                    classNames: { base: Mf.vehicleInfo },
                    vehicleLvl: u,
                    vehicleName: x,
                    vehicleType: l,
                    isElite: c,
                }),
                !f && w && e.jsx('div', { className: Mf.description, children: e.jsx(P, { text: w }) }),
                t && e.jsx('div', { className: Mf.rewardLabel, children: e.jsx(Kh, { additionalReward: t }) }),
                s &&
                    !b &&
                    e.jsx(ut, {
                        contentId: R.views.mono.battle_pass.tooltips.lock_icon('resId'),
                        children: e.jsxs('div', {
                            className: Mf.rewardDescription,
                            children: [
                                e.jsx('div', { className: Mf.rewardLockIcon }),
                                e.jsx('div', { className: Mf.rewardLockText, children: Vf.labelWithBP() }),
                            ],
                        }),
                    }),
            ],
        });
    }),
    Ff = 'Separator_da94a3ab',
    $f = 'Separator_separatorBg_79e9a0f1',
    Hf = ({ classNames: t }) =>
        e.jsx('div', {
            className: a(Ff, null == t ? void 0 : t.base),
            children: e.jsx('div', { className: a($f, null == t ? void 0 : t.separatorBg) }),
        }),
    Uf = 'ExtraChapterWidget_3f5dd2c5',
    Gf = 'ExtraChapterWidget_widgetWrapper_df1761bd',
    qf = 'ExtraChapterWidget_base__styleReward_3f5dd2c5',
    Xf = 'ExtraChapterWidget_glow_4388d699',
    Zf = 'ExtraChapterWidget_glow__styleReward_8dcf5d5f',
    Kf = 'ExtraChapterWidget_content_7571cec7',
    Qf = 'ExtraChapterWidget_content__left_2a162beb',
    Yf = 'ExtraChapterWidget_content__singleReward_d0c77a05',
    Jf = 'ExtraChapterWidget_separatorBg_58fe9583',
    eg = 'ExtraChapterWidget_timer_92648812',
    ag = { [Vt.tankman]: Rf, [Vt.vehicle]: zf, [Vt.style]: uf },
    tg = ({ mainReward: a, additionalReward: t }, s) => {
        const r = ag[a];
        return r ? e.jsx(r, { additionalReward: t, ...s }) : (console.warn('Unknown final reward type:', a), null);
    },
    sg = n(() => {
        const {
                model: { root: t, computes: s },
            } = Fh(),
            { timeLeft: r } = t.get(),
            { freeFinalRewards: i, paidFinalRewards: n } = s.getFinalRewardsDescription(),
            o = s.regularBattlePass(),
            l = !n && i.mainReward === Vt.style;
        return e.jsxs('div', {
            className: a(Uf, l && qf),
            children: [
                e.jsxs('div', {
                    className: Gf,
                    children: [
                        e.jsx('div', { className: a(Xf, l && Zf) }),
                        e.jsx('div', { className: a(Kf, !n && Yf), children: tg(i, { isPaidReward: !1 }) }),
                        n &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(Hf, { classNames: { separatorBg: Jf } }),
                                    e.jsx('div', { className: a(Kf, Qf), children: tg(n, { isPaidReward: !0 }) }),
                                ],
                            }),
                    ],
                }),
                !o && e.jsx('div', { className: eg, children: e.jsx(Lf, { expireTime: r }) }),
            ],
        });
    }),
    rg = {
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
    ig = re.resolve('strings'),
    ng = (e, a) =>
        e
            ? a
                ? ig.readOrEmpty('battle_pass.progression.activatePausedExtraChapterDescr')
                : ig.readOrEmpty('battle_pass.progression.activateExtraChapterDescr')
            : ig.readOrEmpty('battle_pass.progression.activateChapterDescr'),
    og = n(() => {
        const { model: t, controls: s } = Fh(),
            r = X(),
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
            b = n === Th.EXTRA,
            h = n === Th.HOLIDAY,
            f = _ === Ah.Paused,
            g = c - d,
            v = i === Eh.ActivateChapter && g > 0,
            x = i !== Eh.ActivateChapter && l,
            w = p
                ? ig.readOrEmpty('battle_pass.progression.battlePassBuyDescrStarterPack')
                : h
                  ? ig.readOrEmpty('battle_pass.progression.battlePassBuyHolidayDescr')
                  : ig.readOrEmpty('battle_pass.progression.battlePassBuyDescr'),
            {
                buyBtnLabel: C,
                tooltip: y,
                label: j,
                warning: S,
                buttonType: R,
                lightColor: B,
                route: A,
                params: E,
            } = ((e) => {
                switch (e) {
                    case Eh.Buy:
                        return {
                            buyBtnLabel: ig.readOrEmpty('battle_pass.progression.battlePassBuyBtn'),
                            tooltip: ig.readOrEmpty('battle_pass.tooltips.footerBuyBtn.battlePass.descr'),
                            label: w,
                            warning: ig.readOrEmpty('battle_pass.progression.seasonEndingDescr'),
                            buttonType: I.main,
                            lightColor: 'red',
                            route: ws.battlePass.buyPass,
                            params: { chapterID: m },
                        };
                    case Eh.BuyLevel:
                        return {
                            buyBtnLabel: ig.readOrEmpty('battle_pass.progression.episodeBuyBtn'),
                            tooltip: h
                                ? ig.readOrEmpty('battle_pass.tooltips.footerBuyBtn.episode.holidayDescr')
                                : ig.readOrEmpty('battle_pass.tooltips.footerBuyBtn.episode.descr'),
                            label: ig.readOrEmpty('battle_pass.progression.episodeBuyDescr'),
                            warning: ig.readOrEmpty('battle_pass.progression.seasonEndingDescr'),
                            buttonType: I.main,
                            lightColor: '',
                            route: ws.battlePass.buyLevels,
                            params: { chapterID: m },
                        };
                    case Eh.ActivateChapter:
                        return {
                            buyBtnLabel: ig.readOrEmpty('battle_pass.progression.activateChapter'),
                            tooltip: ig.readOrEmpty('battle_pass.tooltips.footerBuyBtn.activateChapter.descr'),
                            label: ng(b, f),
                            warning: ig.readOrEmpty('battle_pass.progression.freePointsDescr'),
                            buttonType: I.primary,
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
                            buttonType: I.ghost,
                            lightColor: 'green',
                            route: '',
                            params: {},
                        };
                }
            })(i),
            T = v || x ? S : j,
            L = ((a) => {
                const t = we(a);
                switch (!0) {
                    case t.days >= 1:
                        return e.jsx(P, {
                            text: ig.readOrEmpty('battle_pass.status.timeLeft.days'),
                            binding: { day: t.days },
                        });
                    case t.hours >= 1:
                        return e.jsx(P, {
                            text: ig.readOrEmpty('battle_pass.status.timeLeft.hours'),
                            binding: { hour: t.hours },
                        });
                    case t.minutes >= 1:
                        return e.jsx(P, {
                            text: ig.readOrEmpty('battle_pass.status.timeLeft.min'),
                            binding: { min: t.minutes },
                        });
                    default:
                        return ig.readOrEmpty('battle_pass.status.timeLeft.lessMin');
                }
            })(u),
            D = t.computes.getStarterPackRewards(),
            W = () => {
                i === Eh.ActivateChapter
                    ? s.chapterActivate()
                    : A && r.push(A, { chapterID: E.chapterID || void 0, reset: E.reset });
            };
        return e.jsxs('div', {
            className: rg.base,
            children: [
                !p &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx('div', { className: a(rg.light, rg[`light__${B}`]) }),
                            e.jsxs('div', {
                                className: rg.labelContainer,
                                children: [
                                    f &&
                                        e.jsx('div', {
                                            className: rg.status,
                                            children: ig.readOrEmpty('battle_pass.progression.footer.status.paused'),
                                        }),
                                    e.jsx('div', { className: rg.label, children: T }),
                                    x && e.jsx('div', { className: rg.days, children: L }),
                                    v &&
                                        e.jsxs(e.Fragment, {
                                            children: [
                                                e.jsx('div', { className: rg.points, children: g }),
                                                e.jsx('div', {
                                                    className: rg.info,
                                                    children: e.jsx(Ke, {
                                                        header: ig.readOrEmpty(
                                                            'battle_pass.tooltips.progression.freePoints.header',
                                                        ),
                                                        body: o
                                                            ? ig.readOrEmpty(
                                                                  'battle_pass.tooltips.progression.freePoints.bodyExceptExtra',
                                                              )
                                                            : ig.readOrEmpty(
                                                                  'battle_pass.tooltips.progression.freePoints.body',
                                                              ),
                                                        children: e.jsx('div', { className: rg.infoHover }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                e.jsx('div', {
                    className: rg.buttonWrapper,
                    children: p
                        ? e.jsxs('div', {
                              className: rg.starterAndButton,
                              'data-test-id': `${i}ButtonWithSeasonData`,
                              children: [
                                  e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsx('div', {
                                              className: a(rg.label, rg.label__buy),
                                              children: e.jsx(P, { text: T }),
                                          }),
                                          x && e.jsx('div', { className: rg.days, children: L }),
                                      ],
                                  }),
                                  e.jsx(Ke, {
                                      body: y,
                                      children: e.jsxs(N, {
                                          type: R,
                                          size: k.medium,
                                          mixClass: rg.button,
                                          onClick: W,
                                          children: [x && e.jsx('div', { className: rg.blink }), C],
                                      }),
                                  }),
                                  e.jsx(on, { starterPackRewards: D, presentSize: rn, rewardSize: H.Small }),
                              ],
                          })
                        : e.jsx(Ke, {
                              body: y,
                              children: e.jsxs(N, {
                                  type: R,
                                  size: k.medium,
                                  mixClass: rg.button,
                                  onClick: W,
                                  children: [x && e.jsx('div', { className: rg.blink }), C],
                              }),
                          }),
                }),
            ],
        });
    }),
    lg = 'Header_d6c7a62a',
    cg = 'Header_labels_73a63da7',
    dg = 'Header_title_46bb5059',
    _g = 'Header_chapterWrapper_ec40e5cf',
    ug = 'Header_chapterText_dd36a1a8',
    mg = 'Header_chapterText__overflow_ae7bd806',
    pg = 'Header_chapterStatus_9c15353a',
    bg = 'Header_date_dc70e297',
    hg = 'Header_titleButtons_7521b3e5',
    fg = 'Header_titleButton_d86731f6',
    gg = 'Header_logo_46c0cb85',
    vg = 'Header_awards_f810fc3a',
    xg = 'Header_emblem_c890a2dc',
    wg = 'Header_emblem__isChapterNotChosen_8aa33950',
    Cg = R.strings.battle_pass,
    yg = n(() => {
        const { controls: s, model: r } = Fh(),
            {
                chapterID: i,
                chapterState: n,
                seasonNum: o,
                expireTime: l,
                isBattlePassPurchased: c,
                timeLeft: d,
                chapterType: _,
            } = r.root.get(),
            u = [Ah.NotStarted, Ah.Paused],
            [m, p] = t.useState(!1),
            [b, h] = t.useState('auto'),
            {
                breakpoint: { weight: f },
            } = z(),
            g = f <= F.medium.weight ? viewEnv.pxToRem(170) : viewEnv.pxToRem(210),
            v = t.useRef(null),
            x = t.useRef(null),
            w =
                (C = n) === Ah.Paused
                    ? Cg.progression.header.paused()
                    : C === Ah.NotStarted
                      ? Cg.progression.header.inactive()
                      : void 0;
        var C;
        const y = t.useRef(0),
            j = _ === Th.EXTRA,
            S = _ === Th.HOLIDAY,
            N = Math.trunc(d / 86400),
            k = Cg.chapter.fullName.$num(i),
            I = wt(Cg.progression.seasonEndingTooltip(), { day: N }),
            B = wt(Cg.progression.header.chapter.status(), { chapterName: k }),
            A = t.useCallback(
                (e) => {
                    e > y.current && (y.current = e);
                },
                [y],
            ),
            E = t.useCallback(async () => {
                await Dt();
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
        const T = le(
            { iconSize: ui, shieldSize: ri, containerSize: Yr },
            { medium: { iconSize: pi, shieldSize: ii, containerSize: Jr } },
        );
        return e.jsxs('div', {
            className: lg,
            children: [
                e.jsx('div', {
                    className: gg,
                    children: e.jsx('div', {
                        className: a(xg, u.includes(n) && wg),
                        children: e.jsx(wi, {
                            iconSize: T.iconSize,
                            shieldSize: T.shieldSize,
                            containerSize: T.containerSize,
                            bpPurchased: c,
                            chapterID: i,
                            className: xg,
                        }),
                    }),
                }),
                e.jsx('div', {
                    className: cg,
                    children: e.jsxs('div', {
                        className: dg,
                        children: [
                            e.jsx(Ke, {
                                body: I,
                                isEnabled: Boolean(d),
                                children: e.jsx('div', {
                                    className: bg,
                                    children: j
                                        ? e.jsx(P, {
                                              text: Cg.progression.season.end.special(),
                                              binding: { endTime: Xa(l, Za.DayMonthFull) },
                                          })
                                        : S
                                          ? e.jsx(P, {
                                                text: Cg.progression.season.end.special(),
                                                binding: { endTime: Xa(l, Za.DayMonthFullTime) },
                                            })
                                          : e.jsx(P, {
                                                text: Cg.progression.season.end.normal(),
                                                binding: {
                                                    seasonNum: zt(o),
                                                    seasonName: Cg.season.fullName.$num(o),
                                                    endDate: Xa(l, Za.DayMonthFull),
                                                },
                                            }),
                                }),
                            }),
                            e.jsxs('div', {
                                className: _g,
                                ref: v,
                                children: [
                                    e.jsx('div', {
                                        style: { maxWidth: `${b}` },
                                        children: e.jsx(Ke, {
                                            body: B,
                                            isEnabled: m,
                                            children: e.jsx('div', { className: a(ug, m && mg), ref: x, children: B }),
                                        }),
                                    }),
                                    w && e.jsx('div', { className: pg, children: w }),
                                ],
                            }),
                            e.jsxs('div', {
                                className: hg,
                                children: [
                                    e.jsx('div', {
                                        className: fg,
                                        children: e.jsx(ht, {
                                            caption: j || S ? Cg.progression.aboutExtra() : Cg.progression.about(),
                                            type: 'info',
                                            onClick: s.openAbout,
                                        }),
                                    }),
                                    e.jsx('div', {
                                        className: fg,
                                        children: e.jsx(ht, {
                                            caption: Cg.howToEarnPoints.title(),
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
                    className: vg,
                    children: e.jsx(Uu, {
                        rootId: R.aliases.battle_pass.Progression('resId'),
                        context: 'model.awardsWidget',
                    }),
                }),
            ],
        });
    });
var jg = ((e) => ((e.Dragging = 'dragging'), (e.End = 'scrollingToEnd'), (e.Idle = 'idle'), e))(jg || {});
const Sg = { type: 'idle' };
var Ng = ((e) => (
    (e[(e.MainButton = 0)] = 'MainButton'),
    (e[(e.AuxiliaryButton = 1)] = 'AuxiliaryButton'),
    (e[(e.SecondaryButton = 2)] = 'SecondaryButton'),
    (e[(e.FourthButton = 3)] = 'FourthButton'),
    (e[(e.FifthButton = 4)] = 'FifthButton'),
    e
))(Ng || {});
const kg = {
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
    Ig = ({ onClick: s, direction: r, type: i = Mh.Default, className: n, tooltipBody: o }) => {
        const l = t.useCallback(() => {
                V.sound(R.sounds.highlight());
            }, []),
            c = t.useCallback(() => {
                (V.sound(R.sounds.bp_slide()), s());
            }, [s]);
        return e.jsx(Ke, {
            body: o,
            children: e.jsx('div', {
                className: a(kg.base, kg[`base__${i}`], n),
                onClick: c,
                onMouseEnter: l,
                children: e.jsx('div', { className: a(kg.icon, kg[`icon__${r}`], 2 === Ct() && kg.icon__4k) }),
            }),
        });
    },
    Pg = 'Bookmark_1a260409',
    Rg = 'Bookmark_container_5cba29f3',
    Bg = 'Bookmark_container__start_f008a523',
    Ag = 'Bookmark_container__wide_16a4de6e',
    Eg = 'Bookmark_textWrapper_985290f6',
    Tg = 'Bookmark_withTooltip_ef0470d4',
    Lg = 'Bookmark_text_7877afbc',
    Dg = 'Bookmark_text__basic_9271b9b6',
    Wg = 'Bookmark_text__premium_49218d9e',
    Og = 'Bookmark_text__single_8125f23e',
    Mg = 'Bookmark_text__wide_3f764b56',
    Vg = 'Bookmark_text__disappeared_68a02d91',
    zg = 'Bookmark_textInner_8a053178',
    Fg = 'Bookmark_leftTextLine_efb7ffd5',
    $g = 'Bookmark_rightTextLine_c747efe3',
    Hg = ({ isWide: t, isDecorated: s }) =>
        e.jsxs('div', {
            className: a(Lg, Og, t && Mg),
            children: [
                s && e.jsx('div', { className: Fg }),
                e.jsx('div', { className: zg, children: R.strings.battle_pass.progression.postProgressionDescr() }),
                s && e.jsx('div', { className: $g }),
            ],
        }),
    Ug = t.forwardRef(
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
            const _ = e.jsx(P, {
                text: R.strings.battle_pass.tooltips.postProgress.body(),
                binding: { chapterStep: o },
            });
            return e.jsx('div', {
                className: a(Pg, l),
                ref: d,
                children: e.jsx('div', {
                    className: a(Rg, s && Ag, !s && Bg),
                    children: s
                        ? e.jsx(Ke, {
                              body: i,
                              header: n,
                              isEnabled: 'string' == typeof i,
                              children: e.jsx('div', {
                                  className: Tg,
                                  children: e.jsx(Hg, { isWide: s, isDecorated: !0 }),
                              }),
                          })
                        : e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx('div', {
                                      className: Eg,
                                      children: e.jsx(Ke, {
                                          header: R.strings.battle_pass.tooltips.postProgress.header(),
                                          body: _,
                                          children: e.jsx(Hg, { isWide: s }),
                                      }),
                                  }),
                                  e.jsx(ut, {
                                      contentId: R.views.mono.battle_pass.tooltips.lock_icon('resId'),
                                      children: e.jsx('div', {
                                          className: a(Lg, Wg),
                                          children: R.strings.battle_pass.progression.premiumProgressionDescr(),
                                      }),
                                  }),
                                  e.jsx('div', {
                                      className: a(Lg, Dg, r && Vg),
                                      children: R.strings.battle_pass.progression.baseProgressionDescr(),
                                  }),
                              ],
                          }),
                }),
            });
        },
    ),
    Gg = 'LoupeButton_d966f396',
    qg = 'LoupeButton_icon_bfb9d784',
    Xg = 'LoupeButton_iconHover_22ab079c',
    Zg = 'LoupeButton_hoverArea_fa5a9428',
    Kg = ({ onClick: s, hoverAreaClasses: r }) => {
        const i = t.useCallback(() => V.sound(R.sounds.highlight()), []),
            n = t.useCallback(() => {
                (V.sound(R.sounds.play()), s());
            }, [s]),
            o = a(Zg, r);
        return e.jsxs('div', {
            className: Gg,
            onClick: n,
            onMouseEnter: i,
            children: [
                e.jsx('div', { className: qg }),
                e.jsx('div', { className: Xg }),
                r && e.jsx('div', { className: o }),
            ],
        });
    },
    Qg = 'VehicleInfo_c9c556fb',
    Yg = 'VehicleInfo_prefix_da97ceb4',
    Jg = 'VehicleInfo_type_514b50be',
    ev = R.strings.battle_pass.progression.widget3dStyle,
    av = t.memo(({ vehicleLvl: a, vehicleName: s, vehicleType: r, isElite: i }) => {
        const n = t.useMemo(() => {
            const e = xt(r);
            return {
                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${e}${i ? '_elite' : ''}`)})`,
            };
        }, [r, i]);
        return e.jsxs('div', {
            className: Qg,
            children: [
                e.jsx('div', { className: Yg, children: ev.forVehicle() }),
                zt(a),
                e.jsx('div', { className: Jg, style: n }),
                s,
            ],
        });
    }),
    tv = 'Widget3dStyle_a34c3929',
    sv = 'Widget3dStyle_title_d5bd52fc',
    rv = 'Widget3dStyle_base__closedChapter_9577883c',
    iv = 'Widget3dStyle_box_7d47e858',
    nv = 'Widget3dStyle_light_afd0e007',
    ov = 'Widget3dStyle_image_37b4439c',
    lv = 'Widget3dStyle_previewButton_42e4e473',
    cv = 'Widget3dStyle_box__hovered_9577883c',
    dv = 'Widget3dStyle_footer_ff3bf09e',
    _v = 'Widget3dStyle_caption_cc553073',
    uv = R.strings.battle_pass.progression.widget3dStyle,
    mv = n(({ widget3dStyleRef: s, level: r, isShowTitle: i }) => {
        const [n, o] = t.useState(!1),
            { controls: l, model: c } = Fh(),
            { chapterState: d, isStyleTaken: _ } = c.root.get(),
            { styleName: u, styleId: m } = c.widget3dStyle.get(),
            {
                breakpoint: { weight: p },
            } = z(),
            b = ((e, a) => (2 !== a ? (e <= F.small.weight ? '_small' : '_medium') : ''))(p, viewEnv.getScale()),
            h = Ft(r, m, b),
            f = e.jsx(P, { text: uv.currentStyle(), binding: { name: u } }),
            g = t.useCallback(() => {
                l.open3dStylePreview(r);
            }, [l, r]);
        return e.jsxs('div', {
            className: a(tv, d === Ah.Completed && rv),
            ref: s,
            children: [
                !_ && i && e.jsx('div', { className: sv, children: uv.titleNoChapterSelected() }),
                e.jsxs('div', {
                    className: a(iv, n && cv),
                    onMouseEnter: () => o(!0),
                    onMouseLeave: () => o(!1),
                    children: [
                        !_ && r === qx && e.jsx('div', { className: nv }),
                        e.jsx('div', { className: ov, style: h }),
                        e.jsx('div', { className: lv, children: e.jsx(Kg, { onClick: g }) }),
                    ],
                }),
                e.jsxs('div', {
                    className: dv,
                    children: [
                        e.jsx('div', { className: _v, children: f }),
                        e.jsx(av, { ...c.widget3dStyleVehicleInfo.get() }),
                    ],
                }),
            ],
        });
    }),
    pv = ({
        level: e,
        levelWidth: a,
        currentLevelWidth: t,
        pointsInLevel: s,
        totalPointsInLevel: r,
        currentLevel: i,
    }) => (e > i ? t + a * (e - 2) + a * (s / r) : (e - 1) * a + t * (s / r)),
    bv = (e) => e + 1,
    hv = n(
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
            const { model: m } = Fh(),
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
                    b = pv({
                        level: n,
                        levelWidth: r,
                        currentLevelWidth: i,
                        pointsInLevel: l,
                        totalPointsInLevel: m,
                        currentLevel: h,
                    }),
                    g = s ? s.value.levelPoints : 0,
                    v = pv({
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
                    ...T,
                    withStack: !0,
                    type: E.Simple,
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
                            ? Z(() => {
                                  v(bv);
                              }, 700)
                            : void 0;
                    v(bv);
                }, [d, _, b]),
                t.useEffect(() => {
                    if (b)
                        return ae(() => {
                            s && s();
                        });
                }, [s, b]),
                e.jsx(bt, { animationSettings: S, deltaFrom: w, value: y, maxValue: C || void 0, api: a, theme: u }, g)
            );
        },
    ),
    fv = {
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
    gv = R.strings.battle_pass.tooltips.progression.freePoints,
    vv = n(({ progressApi: t, freePointsApi: s, levelWidth: r, currentLevelWidth: i, progressChange: n }) => {
        const { model: o } = Fh(),
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
            C = Ne(),
            y = (l === Ah.NotStarted || l === Ah.Paused) && h - m > 0,
            j = o.computes.getTotalLevelPoints(),
            S = o.computes.getCurrentWidth(r, i, C, j),
            N = m >= w.length * j,
            k = {
                '--progress-line-base': D.line.bgColorBase,
                '--progress-line-disabled': D.line.bgColorDisabled,
                '--progress-line-finished': D.line.bgColorFinished,
            };
        return e.jsxs('div', {
            className: fv.progressContainer,
            children: [
                y &&
                    e.jsx(Ke, {
                        header: gv.header(),
                        body: gv.body(),
                        children: e.jsx('div', {
                            className: fv.progress,
                            children: e.jsx(hv, {
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
                                theme: yt,
                            }),
                        }),
                    }),
                e.jsx('div', {
                    className: a(fv.progressBackground, N && fv.progressBackground__finished),
                    style: { width: `${S}rem`, ...k },
                }),
                e.jsx(ut, {
                    contentId: R.views.mono.battle_pass.tooltips.bp_points('resId'),
                    children: e.jsx('div', {
                        className: a(fv.progress, y && fv.progress__inactive),
                        children: e.jsx(hv, {
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
    xv = 'Background_3985f66b',
    wv = 'Background_default_6d3ad0aa',
    Cv = 'Background_base__premium_26effab7',
    yv = 'Background_rare_927afb2',
    jv = 'Background_rareBg_af0bac1',
    Sv = 'Background_pattern_f3c44da',
    Nv = 'Background_pattern__left_910cb7b6',
    kv = 'Background_pattern__right_9077c0df',
    Iv = 'Background_pattern__leftIndent_508a3857',
    Pv = 'Background_pattern__rightIndent_db46b63f',
    Rv = 'Background_pattern__completed_51752ce4',
    Bv = 'Background_disabled_12f45c1c',
    Av = 'Background_inProgress_f241145e',
    Ev = 'Background_inProgressInner_eca44a42',
    Tv = 'Background_inProgressPart_886e2046',
    Lv = 'Background_inProgressPart__left_6b695373',
    Dv = 'Background_inProgressPart__right_cb03c83d',
    Wv = (e) => `url(R.images.gui.maps.icons.battlePass.progression.pattern_rare_${e})`,
    Ov = n(({ level: t, isPremium: s = !1 }) => {
        const { model: r } = Fh(),
            { cardStatus: i, isRare: n, isDisabled: o } = r.computes.cardStates(t, s),
            l =
                i.current !== Dh.IN_PROGRESS &&
                ((e, a) => {
                    switch (e) {
                        case Dh.NOT_STARTED:
                            return a;
                        case Dh.COMPLETED:
                            return !a;
                        default:
                            return (console.warn(`Unsupported status for isIndent: ${e}`), !1);
                    }
                })(i.current, s);
        return e.jsxs('div', {
            className: a(xv, s && Cv),
            children: [
                e.jsx('div', { className: wv }),
                o && e.jsx('div', { className: Bv }),
                i.current === Dh.IN_PROGRESS &&
                    e.jsxs('div', {
                        className: Av,
                        children: [
                            e.jsx('div', { className: a(Tv, Lv) }),
                            !s && e.jsx('div', { className: Ev }),
                            e.jsx('div', { className: a(Tv, Dv) }),
                        ],
                    }),
                n &&
                    e.jsxs('div', {
                        className: yv,
                        children: [
                            e.jsx('div', {
                                className: a(Sv, Nv, l && Iv, i.current === Dh.COMPLETED && Rv),
                                style: { backgroundImage: Wv('left') },
                            }),
                            e.jsx('div', {
                                className: a(Sv, kv, !l && Pv, i.current === Dh.COMPLETED && Rv),
                                style: { backgroundImage: Wv('right') },
                            }),
                            i.current === Dh.NOT_STARTED && e.jsx('div', { className: jv }),
                        ],
                    }),
            ],
        });
    }),
    Mv = 'ClosedStatus_659358dc',
    Vv = 'ClosedStatus_icon_26722519',
    zv = 'ClosedStatus_icon__current_d82fe3b3',
    Fv = 'ClosedStatus_icon__exit_70d0e6c0',
    $v = 'ClosedStatus_icon__exitActive_6e4d1395',
    Hv = 'ClosedStatus_icon__exitCurrentActive_add31c82',
    Uv = 'ClosedStatus_icon__exitDone_694aab32',
    Gv = 'ClosedStatus_title_9c1acbb0',
    qv = 'ClosedStatus_title__exit_29b67eb8',
    Xv = 'ClosedStatus_title__exitActive_3d936f93',
    Zv = 'ClosedStatus_title__exitDone_694aab32',
    Kv = n(({ level: t, playUnlockAnimation: s = !1, handleUnlockAnimationExited: r, baseUnlockProps: i }) => {
        const { model: n } = Fh(),
            { isBattlePassPurchased: o } = n.root.get(),
            { cardStatus: l } = n.computes.cardStates(t, !0),
            c = l.current === Dh.IN_PROGRESS,
            d = { exit: Fv, exitActive: c ? Hv : $v, exitDone: Uv },
            _ = { exit: qv, exitActive: Xv, exitDone: Zv },
            u = !o || s,
            m = c && u;
        return e.jsxs('div', {
            className: Mv,
            children: [
                u &&
                    e.jsx(j, {
                        ...i,
                        classNames: d,
                        onExited: r,
                        children: e.jsx('div', { className: a(Vv, c && zv) }),
                    }),
                m &&
                    e.jsx(j, {
                        ...i,
                        classNames: u ? _ : {},
                        children: e.jsx('div', {
                            className: Gv,
                            children: R.strings.battle_pass.progression.currentStepLocked(),
                        }),
                    }),
            ],
        });
    }),
    Qv = {
        base__showAnimation: 'CompletedStatus_base__showAnimation_b386bcdc',
        iconGlow__completedEnter: 'CompletedStatus_iconGlow__completedEnter_8876529f',
        iconGlow__completedEnterActive: 'CompletedStatus_iconGlow__completedEnterActive_81bf80a4',
        iconGlow__completedEnterDone: 'CompletedStatus_iconGlow__completedEnterDone_36f61f63',
        icon: 'CompletedStatus_icon_d2e41a1a',
    },
    Yv = ({ completedIn: t, handleCompleteGlowAnimationExited: s, children: r }) => {
        const i = {
            exit: Qv.iconGlow__completedEnter,
            exitActive: Qv.iconGlow__completedEnterActive,
            exitDone: Qv.iconGlow__completedEnterDone,
        };
        return e.jsxs('div', {
            className: a(Qv.base, t && Qv.base__showAnimation),
            children: [
                e.jsx(j, { in: !t, timeout: bx, classNames: i, onExited: s, children: r }),
                e.jsx(Ke, { body: hx.tooltips.completed.got(), children: e.jsx('div', { className: Qv.icon }) }),
            ],
        });
    },
    Jv = {
        base: 'CurrentPoints_4c27ce16',
        value__current: 'CurrentPoints_value__current_9c51dee4',
        value__total: 'CurrentPoints_value__total_99fac246',
        divider: 'CurrentPoints_divider_83c77e4c',
        icon: 'CurrentPoints_icon_6b371e14',
    },
    ex = n(() => {
        const {
                model: { computes: t },
            } = Fh(),
            { current: s, total: r } = t.currentLevelPoints();
        return e.jsx(ut, {
            ignoreShowDelay: !0,
            contentId: R.views.mono.battle_pass.tooltips.bp_points('resId'),
            children: e.jsxs('div', {
                className: Jv.base,
                children: [
                    e.jsx('div', { className: a(Jv.value, Jv.value__current), children: s }),
                    e.jsx('div', { className: Jv.divider, children: '/' }),
                    e.jsx('div', { className: a(Jv.value, Jv.value__total), children: r }),
                    e.jsx('div', { className: Jv.icon }),
                ],
            }),
        });
    }),
    ax = 'Effects_glowWrapper_efa5ae0d',
    tx = 'Effects_glow_23dde4b0',
    sx = 'Effects_glow__active_b9e151',
    rx = 'Effects_dust_ff3a2345',
    ix = 'Effects_dust__active_ece15182',
    nx = ({ baseUnlockProps: a }) => {
        const t = { exit: tx, exitActive: sx, exitDone: tx },
            s = { exit: rx, exitActive: ix, exitDone: rx };
        return e.jsxs('div', {
            children: [
                e.jsx(j, {
                    ...a,
                    classNames: t,
                    children: e.jsx('div', { className: ax, children: e.jsx('div', { className: tx }) }),
                }),
                e.jsx(j, {
                    ...a,
                    classNames: s,
                    children: e.jsx('div', { className: ax, children: e.jsx('div', { className: rx }) }),
                }),
            ],
        });
    },
    ox = 'Status_5c99d05d',
    lx = 'Status_base__inProgress_21b2f358',
    cx = 'Status_iconContainer_7da53d2b',
    dx = 'Status_iconInner_9a38fa07',
    _x = 'Status_iconGlow_f0af9b33',
    ux = 'Status_iconGlow__completed_1ceaf83f',
    mx = 'Status_iconGlow__hidden_5ce2d06a',
    px = 'Status_pointsWrapper_6042cf48',
    bx = 1500,
    hx = R.strings.battle_pass,
    fx = R.views.mono.battle_pass,
    gx = n(
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
            const { model: b } = Fh(),
                { cardStatus: h, isDisabled: f } = b.computes.cardStates(p, s),
                g = b.computes.isRewardNeedTake(p, s),
                [v, x] = t.useState(!1),
                [w, C] = t.useState(!1),
                [y, j] = t.useState(!0),
                [S, N] = t.useState(!1),
                k = h.current === Dh.COMPLETED && !g && !f,
                I = (f && s) || k || i,
                P = !s && h.current === Dh.IN_PROGRESS && h.potential !== Dh.COMPLETED,
                R = () => {
                    (d && V.sound(Wh.IMPROVED_REWARD), x(!0));
                };
            (t.useEffect(
                () =>
                    i
                        ? Z(() => {
                              (j(!1),
                                  c &&
                                      !S &&
                                      (h.current === Dh.IN_PROGRESS
                                          ? V.sound(Wh.UNLOCK_BIG)
                                          : V.sound(Wh.UNLOCK_SMALL)));
                          }, u + o)
                        : r
                          ? (C(!0),
                            Z(() => {
                                (C(!1), R());
                            }, u + n))
                          : void (w && C(!1)),
                [i, r, w],
            ),
                t.useEffect(() => {
                    if (r && S)
                        return Z(() => {
                            R();
                        }, n);
                }, [r, S]));
            const B = () => {
                    (!r && _ && _(), N(!0));
                },
                A = { in: y, timeout: bx + l };
            return e.jsxs('div', {
                className: a(ox, h.current === Dh.IN_PROGRESS && lx),
                style: { '--animation-duration': `${m}ms` },
                children: [
                    I &&
                        e.jsxs('div', {
                            className: cx,
                            children: [
                                ((!r && k) || (v && !g)) &&
                                    e.jsx(Yv, {
                                        completedIn: v,
                                        handleCompleteGlowAnimationExited: () => {
                                            w && C(!1);
                                        },
                                        children: e.jsx('div', { className: a(_x, ux, w && mx) }),
                                    }),
                                !r &&
                                    !i &&
                                    f &&
                                    s &&
                                    e.jsx(ut, {
                                        isEnabled: s,
                                        contentId: fx.tooltips.lock_icon('resId'),
                                        children: e.jsx('div', {
                                            children: e.jsx(Kv, {
                                                level: p,
                                                baseUnlockProps: A,
                                                playUnlockAnimation: i,
                                                handleUnlockAnimationExited: B,
                                            }),
                                        }),
                                    }),
                                i &&
                                    !S &&
                                    e.jsx(ut, {
                                        contentId: fx.tooltips.lock_icon('resId'),
                                        children: e.jsxs('div', {
                                            className: dx,
                                            children: [
                                                e.jsx(Kv, {
                                                    level: p,
                                                    baseUnlockProps: A,
                                                    playUnlockAnimation: i,
                                                    handleUnlockAnimationExited: B,
                                                }),
                                                h.current === Dh.IN_PROGRESS && e.jsx(nx, { baseUnlockProps: A }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    P && e.jsx('div', { className: px, children: e.jsx(ex, {}) }),
                ],
            });
        },
    ),
    vx = {
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
    xx = R.strings.battle_pass.progression,
    wx = n(({ stepNumber: i, stageAnimationDelay: n, isRewardAnimationActive: o }) => {
        const { model: l, controls: c } = Fh(),
            { chapterState: d, showLevelsAnimations: _ } = l.root.get(),
            [u, m] = t.useState(!1),
            { cardStatus: p } = l.computes.cardStates(i, !1),
            b = l.computes.isRewardNeedTake(i, !1) || l.computes.isRewardNeedTake(i, !0),
            h = l.computes.levelInfo(i).maxLevel === i,
            f = p.current === Dh.IN_PROGRESS,
            g = d === Ah.NotStarted || d === Ah.Paused,
            v = p.current === Dh.COMPLETED && !b && !o,
            { stageOpacity: x } = s({
                from: { stageOpacity: u ? 1 : 0 },
                to: { stageOpacity: 0 },
                delay: 0,
                onStart: () => V.sound(R.sounds.bp_current_phase()),
                config: { duration: 750, easing: Ot },
            }),
            { sparkOpacity: w } = s({
                from: { sparkOpacity: u ? 1 : 0 },
                to: { sparkOpacity: 0 },
                delay: 1100,
                onRest: () => m(!1),
                config: { duration: 1500, easing: Ot },
            });
        return (
            t.useEffect(() => {
                if (_ && f)
                    return Z(() => {
                        (m(!0), c.finishLevelsAnimation());
                    }, n + 100);
            }, [_, f, n]),
            e.jsxs('div', {
                className: a(vx.base, vx[`base__${p.current}`], v && vx.base__rewardTaken),
                children: [
                    f &&
                        !g &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx('div', { className: vx.glow }),
                                e.jsx(r.div, { style: { opacity: w }, className: vx.animatedGlow }),
                            ],
                        }),
                    h && e.jsx('div', { className: vx.iconFinal }),
                    f
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  e.jsxs('div', {
                                      className: vx.numberInProgress,
                                      children: [
                                          i,
                                          e.jsx(r.div, {
                                              style: {
                                                  opacity: x,
                                                  transform: x
                                                      .to([0, 1], [2.5, 1])
                                                      .to((e) => `translate(-50%, -50%) scale(${e})`),
                                              },
                                              className: vx.animatedNumber,
                                              children: i,
                                          }),
                                      ],
                                  }),
                                  e.jsx('div', {
                                      className: vx.title,
                                      children: g ? xx.pausedStep() : xx.currentStep(),
                                  }),
                              ],
                          })
                        : e.jsx('div', { className: vx.number, children: i }),
                ],
            })
        );
    }),
    Cx = {
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
    yx = i((e) => {
        const { item: a, name: t, value: s, overlayType: r, tooltipId: i, tooltipContentId: n, id: o, icon: l } = e;
        return {
            id: o,
            icon: l,
            name: a || t,
            smallImage: _t(e, H.Big),
            bigImage: _t(e, H.S180x135),
            special: r,
            value: s,
            valueType: dt(t),
            tooltipArgs: ct({ tooltipId: i }, Number(n), { ignoreShowDelay: !0 }),
        };
    }),
    jx = n(({ isPremium: s, levelNum: r, hasAnimation: i }) => {
        const {
                breakpoint: { weight: n },
            } = z(),
            { model: o, controls: l } = Fh(),
            { cardStatus: c } = o.computes.cardStates(r, s),
            d = o.computes.isRewardNeedTake(r, s),
            _ = o.computes.levelRewardItems(r, !0),
            u = o.computes.levelRewardItems(r, !1),
            m = s ? u : _,
            [p, b] = t.useState(m),
            h = c.current === Dh.IN_PROGRESS,
            f = t.useRef(!1);
        t.useEffect(() => {
            if (f.current) return Z(() => b(m), 1e3);
            f.current = !0;
        }, [m, f]);
        return e.jsx('div', {
            className: a(
                Cx.base,
                h && Cx.base__inProgress,
                s && Cx.base__reverse,
                i && Cx.base__animated,
                1 === m.length && Cx.base__single,
                2 === m.length && Cx.base__column,
                3 === m.length && (h ? Cx.base__tripleInProgress : Cx.base__tripleDefault),
            ),
            children: ee(p, (t, s) => {
                const r = yx(t),
                    o = r.name.includes(jt.StyleProgressToken) || r.name.includes(jt.BattlePassSelectToken),
                    c = (d && o) || i,
                    { size: _, image: u } = ((e) => {
                        const a = n < F.medium.weight;
                        return m.length > 1
                            ? a
                                ? { size: H.Small, image: e.smallImage }
                                : { size: H.Big, image: e.smallImage }
                            : a
                              ? { size: H.Big, image: e.smallImage }
                              : { size: H.S180x135, image: e.bigImage };
                    })(r);
                return e.jsxs(
                    'div',
                    {
                        className: a(Cx.reward, Cx[`reward__${s}`]),
                        children: [
                            c && e.jsx('div', { className: Cx.shine }),
                            i &&
                                e.jsxs(e.Fragment, {
                                    children: [
                                        e.jsx('div', { className: Cx.staticShine }),
                                        e.jsx('div', { className: Cx.explosion }),
                                    ],
                                }),
                            e.jsx(U, { size: _, image: u, className: Cx.rewardInner, ...r }),
                            r.icon === Vt.style &&
                                e.jsx('div', {
                                    className: Cx.preview,
                                    children: e.jsx(st, {
                                        type: 'preview',
                                        size: 'normal',
                                        className: Cx.iconButton,
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
    Sx = 'CardRewards_50fb1177',
    Nx = 'CardRewards_base__completed_434ea7b1',
    kx = n(({ levelNum: t, isRewardAnimationActive: s, isPremium: r = !1 }) => {
        const { model: i } = Fh(),
            { cardStatus: n, isDisabled: o } = i.computes.cardStates(t, r),
            l = i.computes.isRewardNeedTake(t, r),
            c = n.current === Dh.COMPLETED && !l && !o && !s;
        return e.jsx('div', {
            className: a(Sx, c && Nx),
            children: e.jsx(jx, { levelNum: t, isPremium: r, hasAnimation: s }),
        });
    }),
    Ix = 'CardContent_f26d7969',
    Px = 'CardContent_status_b4751d54',
    Rx = 'CardContent_buttonHolder_5af6834d',
    Bx = 'CardContent_buttonLight_c4e99653',
    Ax = 'CardContent_buttonInner_331e7784',
    Ex = 'CardContent_buttonInner__disabled_df771be2',
    Tx = 'CardContent_button_3b7b5ae4',
    Lx = 'CardContent_button__disabled_d7ebe82e',
    Dx = 'CardContent_buttonBlink_b4dcf5b4',
    Wx = 'CardContent_buttonText_25c40fc',
    Ox = 100,
    Mx = 1800,
    Vx = R.strings.battle_pass.progression,
    zx = n(
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
                } = Fh(),
                { isBattlePassPurchased: u, currentLevel: m, previousLevel: p } = c.root.get(),
                {
                    needTakePaid: b,
                    needTakeFree: h,
                    isFreeRewardChoiceEnabled: f,
                    isPaidRewardChoiceEnabled: g,
                } = c.computes.levelInfo(r),
                { cardStatus: v } = c.computes.cardStates(r, s),
                x = c.computes.isRewardNeedTake(r, s),
                w = v.current === Dh.IN_PROGRESS,
                C = v.current === Dh.COMPLETED,
                [y, j] = t.useState(!1),
                [S, P] = t.useState(!1),
                {
                    breakpoint: { weight: R },
                } = z(),
                B = R <= F.small.weight ? k.extraSmall : k.small,
                A = t.useRef(x),
                E = A.current;
            (t.useEffect(() => {
                A.current = x;
            }),
                t.useEffect(() => {
                    if (E && !x) {
                        const e = Z(() => {
                                (j(!1), d());
                            }, Mx),
                            a = Z(() => {
                                P(!1);
                            }, 2300);
                        return (
                            j(!0),
                            P(!0),
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
                        (l ? (a = (r - s + 1) * Ox) : c && (a = (r - s) * Ox),
                            (_ = Boolean(w || l || c || u)),
                            (b = Boolean(w || u)),
                            (h = Boolean(C && _)),
                            (t = (n - o - 1) * Ox),
                            w && (d = (r - s + 1) * Ox * 2.5));
                    }
                    if (n && o) {
                        const a = Math.min(m - p, Math.floor(0.5 * n));
                        let l = m - a;
                        l <= 0 && (l = 1);
                        const d = r < m && r >= l;
                        (d && ((t = (r - l + 1) * Ox), s && (t += Ox)),
                            (h = Boolean(C && d)),
                            (c = a * Ox + Ox * Math.trunc(a / 2) + f),
                            o && (e = i));
                    }
                    return (
                        S && ((f = 0), (t = Mx), (h = Boolean(C))),
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
                L = K(() => {
                    _({ level: r });
                }),
                D = h || b,
                W = D && !(f || g);
            return e.jsxs('div', {
                className: Ix,
                children: [
                    !s &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx(wx, {
                                    stepNumber: r,
                                    stageAnimationDelay: T.stageAnimationDelay,
                                    isRewardAnimationActive: y,
                                }),
                                D &&
                                    e.jsx(Ke, {
                                        isEnabled: W,
                                        body: Vx.btnRewardsUnavailable(),
                                        children: e.jsxs('div', {
                                            className: Rx,
                                            children: [
                                                !W && e.jsx('div', { className: Bx }),
                                                e.jsx('div', {
                                                    className: a(Ax, W && Ex),
                                                    children: e.jsxs(N, {
                                                        type: I.ghost,
                                                        size: B,
                                                        disabled: W,
                                                        onClick: L,
                                                        mixClass: a(Tx, W && Lx),
                                                        children: [
                                                            !W && e.jsx('div', { className: Dx }),
                                                            e.jsx('div', { className: Wx, children: Vx.takeReward() }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    e.jsx(kx, { levelNum: r, isPremium: s, isRewardAnimationActive: y }),
                    e.jsx('div', {
                        className: Px,
                        children: e.jsx(gx, { isPremium: Boolean(s), completedDuration: 500, level: r, ...T }),
                    }),
                ],
            });
        },
    ),
    Fx = {
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
    $x = ({ position: t, isPremium: s = !1, isRare: r = !1, status: i }) =>
        e.jsx('div', {
            className: a(Fx.base, Fx[`base__${i}`], Fx[`base__${t}`], r && Fx.base__rare, s && Fx.base__premium),
            children: e.jsx('div', { className: Fx.inner }),
        }),
    Hx = {
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
    Ux = n(
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
            const { model: _ } = Fh(),
                { currentPointsInLevel: u, chapterState: m } = _.root.get(),
                { cardStatus: p, isRare: b } = _.computes.cardStates(r, s),
                { levelPoints: h } = _.computes.levelInfo(r),
                f = !s && (p.current === Dh.COMPLETED || p.current === Dh.IN_PROGRESS),
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
                    ((p.current === Dh.NOT_STARTED && !b) ||
                        ((null == x ? void 0 : x.isRare) && p.current !== Dh.IN_PROGRESS) ||
                        (null == x ? void 0 : x.cardStatus.current) === Dh.IN_PROGRESS),
                S =
                    !v &&
                    ((p.current === Dh.COMPLETED && !b) ||
                        ((null == w ? void 0 : w.isRare) && p.current !== Dh.IN_PROGRESS) ||
                        (null == w ? void 0 : w.cardStatus.current) === Dh.IN_PROGRESS),
                N = ((e, a, t, s) =>
                    e === Dh.COMPLETED
                        ? 100
                        : e !== Dh.IN_PROGRESS || (a !== Ah.NotStarted && a !== Ah.Paused)
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
                className: a(Hx.base, Hx[`base__${p.current}`], !s && Hx.base__nonPremium),
                ref: C,
                style: I,
                children: [
                    e.jsx(Ov, { level: r, isPremium: s }),
                    e.jsx(zx, {
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
                                e.jsx('div', { className: a(Hx.totalPoints, Hx.totalPoints__default), children: y }),
                                v &&
                                    e.jsx('div', {
                                        className: a(Hx.totalPoints, Hx.totalPoints__final),
                                        children: i * h,
                                    }),
                            ],
                        }),
                    f && e.jsx('div', { className: Hx.progressShadow, style: k }),
                    !j && e.jsx($x, { position: Lh.left, isPremium: s, isRare: b, status: p.current }),
                    !S && e.jsx($x, { position: Lh.right, isPremium: s, isRare: b, status: p.current }),
                ],
            });
        },
    ),
    Gx = n(
        ({
            currentCardRef: s,
            freeProgressionCutCardRef: r,
            potentialLevelCardRef: i,
            isPremium: n,
            sectionKey: o,
            maxVisibleCards: l,
        }) => {
            const { model: c } = Fh(),
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
                className: a(fv.row, !n && fv.row__basic),
                children: ee(b, (a, t) => {
                    return e.jsx(
                        Ux,
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
    qx = 1,
    Xx = n(
        ({
            currentCardRef: s,
            freeProgressionCutCardRef: r,
            potentialLevelCardRef: i,
            onProgressChanged: n,
            widget3dStyleLeftRef: o,
            shadowLipRef: l,
            api: c,
        }) => {
            const { model: d } = Fh(),
                { currentLevel: _, currentPointsInLevel: u, showLevelsAnimations: m } = d.root.get(),
                p = d.computes.isLayoutWithExtraWidget(),
                b = d.levels.get(),
                h = t.useRef(pt()),
                f = t.useRef(pt());
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
                } = z();
            return (
                t.useEffect(() => {
                    Dt().then(() => {
                        const e = x();
                        if (e) {
                            const a =
                                Math.floor((viewEnv.getClientSizeRem().width - e.currentLevelWidth) / e.levelWidth) + 1;
                            v({ levelWidth: e.levelWidth, currentLevelWidth: e.currentLevelWidth, maxCardsShown: a });
                        }
                    });
                }, [w, x, b.length, _, u]),
                t.useEffect(() => {
                    m && V.sound(R.sounds.bp_progress_bar_start());
                }, [m]),
                t.useEffect(() => {
                    n && n();
                }, [_, u, n]),
                e.jsxs('div', {
                    className: fv.wrapper,
                    children: [
                        !p &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(mv, { widget3dStyleRef: o, level: qx, isShowTitle: !0 }),
                                    e.jsx('div', {
                                        className: a(fv.decor, fv.decor__left),
                                        children: e.jsx('div', { className: fv.decorBackground }),
                                    }),
                                    e.jsx('div', {
                                        className: fv.bookmarkBackground,
                                        ref: l,
                                        children: e.jsx(Ug, { isDisappeared: !0, mixClass: fv.bookmarkLeftResponsive }),
                                    }),
                                ],
                            }),
                        e.jsxs('div', {
                            className: fv.section,
                            children: [
                                e.jsx(Gx, {
                                    sectionKey: 'baseCard',
                                    currentCardRef: s,
                                    freeProgressionCutCardRef: r,
                                    potentialLevelCardRef: i,
                                    maxVisibleCards: m ? g.maxCardsShown : 0,
                                    currentLevel: _,
                                }),
                                e.jsx(vv, { progressApi: h, freePointsApi: f, progressChange: n, ...g }),
                                e.jsx(Gx, {
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
                                        className: fv.decor,
                                        children: e.jsx('div', { className: fv.decorBackground }),
                                    }),
                                    e.jsx(mv, { level: 4 }),
                                ],
                            }),
                    ],
                })
            );
        },
    ),
    Zx = { allowedButtons: [Ng.MainButton] },
    Kx = R.strings.battle_pass.progression,
    Qx = ['dragStart', 'dragEnd', 'dragging'],
    Yx = n(({ onHorizontalScroll: s }) => {
        const { model: r } = Fh(),
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
            k = St(),
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
                    [d, _] = t.useState(Sg);
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
                            _(Sg);
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
            })(k, void 0, Zx),
            D = (e) => {
                (T.type === jg.Dragging && L({ type: jg.End }), B(e));
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
                        return { type: Mh.Default, tooltipBody: Kx.backToCurrentStageArrow.descr() };
                    case 'navToPotentialLevel':
                        return { type: Mh.Gray, tooltipBody: Kx.backToPotentialStageArrow.descr() };
                }
            },
            H = (e) => {
                (O(I.goal), V(), N(null == e ? void 0 : e.type));
            };
        return (
            t.useEffect(
                () =>
                    ae(() => {
                        o && l && P(M());
                    }),
                [P, M, o, l],
            ),
            t.useEffect(() => {
                const e = async () => {
                    const e = A(),
                        a = I.goal;
                    await Dt();
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
            t.useEffect(() => Z(() => z(_), 700), [n]),
            t.useEffect(() => {
                if (((e = '') => Qx.includes(e))(S)) return void s('dragStart' === S);
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
                        className: a(fv.bookmark, fv.bookmark__start),
                        children: e.jsx(Ug, {
                            chapterStep: i.length,
                            mixClass: a(fv.bookmarkLeftFixed, y && fv.bookmarkLeftFixed__active),
                        }),
                    }),
                    e.jsx('div', {
                        className: fv.scrollWrapper,
                        ref: d,
                        onClick: H,
                        onMouseLeave: V,
                        onWheel: H,
                        children: e.jsx(se.Horizontal.Area.Default, {
                            api: W,
                            barClassNames: { base: fv.scrollBarPosition },
                            onDrag: H,
                            children: e.jsx(Xx, {
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
                            fv.scrollToButton,
                            fv.scrollToButton__backward,
                            'hidden' !== w && fv.scrollToButton__visible,
                        ),
                        children: e.jsx(Ig, {
                            onClick: () => F(w),
                            direction: Oh.back,
                            className: fv.arrowButton,
                            ...$(w),
                        }),
                    }),
                    e.jsx('div', {
                        className: a(
                            fv.scrollToButton,
                            fv.scrollToButton__forward,
                            'hidden' !== v && fv.scrollToButton__visible,
                        ),
                        children: e.jsx(Ig, {
                            onClick: () => F(v),
                            direction: Oh.forward,
                            className: fv.arrowButton,
                            ...$(v),
                        }),
                    }),
                ],
            })
        );
    }),
    Jx = n(() => {
        const { model: s } = Fh(),
            r = s.computes.isLayoutWithExtraWidget(),
            [i, n] = t.useState(!1),
            o = a(fv.additionalShadow, i && fv.additionalShadow__active);
        return e.jsxs('div', {
            className: a(fv.base, r && fv.base__isLayoutWithExtraWidget),
            children: [
                e.jsx('div', { className: a(fv.shadow, fv.shadow__left), children: e.jsx('div', { className: o }) }),
                e.jsx('div', { className: a(fv.shadow, fv.shadow__right), children: e.jsx('div', { className: o }) }),
                e.jsx(Yx, {
                    onHorizontalScroll: (e) => {
                        n(e);
                    },
                }),
            ],
        });
    }),
    ew = 'ProgressionContent_23d7382d',
    aw = 'ProgressionContent_base__extra_b83b4c7d',
    tw = 'ProgressionContent_base__extraChapter_efc5bb01',
    sw = 'ProgressionContent_header_3c9de2e1',
    rw = 'ProgressionContent_progression_ee26929',
    iw = 'ProgressionContent_progression__extraChapter_ed356b04',
    nw = 'ProgressionContent_extraChapterWidget_6d130b1f',
    ow = 'ProgressionContent_footer_b7b80223',
    lw = n(() => {
        const {
                model: { root: t, computes: s },
            } = Fh(),
            { chapterType: r, chapterID: i, actionType: n, isPaused: o } = t.get(),
            l = s.isLayoutWithExtraWidget(),
            c = r === Th.EXTRA,
            d = n !== Eh.NoAction,
            _ = a(rw, l && iw);
        return e.jsxs('div', {
            className: a(ew, l && aw, c && tw),
            style: Ht(i),
            children: [
                !o && e.jsx('div', { className: _, children: e.jsx(Jx, {}) }),
                e.jsx('div', { className: sw, children: e.jsx(yg, {}) }),
                e.jsx('div', { className: ow, children: d && e.jsx(og, {}) }),
                l && e.jsx('div', { className: nw, children: e.jsx(sg, {}) }),
            ],
        });
    }),
    cw = 'App_7cf6cd46',
    dw = n(() => {
        const { model: a, controls: s } = Fh(),
            { showReplaceRewardsAnimations: r } = a.root.get(),
            i = X();
        return (
            Y(A.ESCAPE, () => i.goBack()),
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
                    ae(() => {
                        s.viewLoad();
                    }),
                [],
            ),
            t.useEffect(() => {
                r && V.sound(R.sounds.bp_pick_up_award());
            }, [r]),
            e.jsx('div', { className: cw, children: e.jsx(lw, {}) })
        );
    }),
    _w = () => e.jsx(zh, { options: { rootId: R.aliases.battle_pass.Progression('resId') }, children: e.jsx(dw, {}) }),
    uw = 'App_811b056b',
    mw = 'App_mainView_54c70e4',
    pw = n(() => {
        const { location: a } = X(),
            s = S(a, {
                from: { opacity: 0 },
                enter: { opacity: 1, config: { duration: 150, easing: fe.easeInQuad }, delay: 150 },
            });
        return e.jsx(t.Suspense, {
            fallback: e.jsx('div', {}),
            children: e.jsx('div', {
                className: uw,
                children: s((a, t) =>
                    e.jsx(r.div, {
                        className: mw,
                        style: a,
                        children: e.jsxs(Nt, {
                            children: [
                                e.jsx(kt, { path: ws.battlePass.intro, component: bp }),
                                e.jsx(kt, { path: ws.battlePass.progression, component: _w }),
                                e.jsx(kt, { path: ws.battlePass.chapterChoice, component: eu }),
                                e.jsx(kt, { path: ws.battlePass.postProgression, component: Bh }),
                                e.jsx(kt, { path: ws.battlePass.buyPass, component: xn }),
                                e.jsx(kt, { path: ws.battlePass.buyPassRewards, component: xn }),
                                e.jsx(kt, { path: ws.battlePass.buyLevels, component: Or }),
                                e.jsx(kt, { path: ws.battlePass.buyLevelsRewards, component: Or }),
                                e.jsx(kt, { path: ws.battlePass.holidayFinal, component: Vm }),
                            ],
                        }),
                    }),
                ),
            }),
        });
    });
Bt(new It().add(Pt).addWithProps(Rt, { context: 'model.router' }).render(e.jsx(pw, {})))
    .then(() => At(document.getElementById('root')))
    .then(() => Et());
