import {
    o as e,
    n as a,
    f as t,
    p as s,
    j as l,
    e as n,
    r,
    u as o,
    i,
    m as c,
    q as d,
} from '../../../chunks/vendor.js';
import {
    G as m,
    H as u,
    I as p,
    i as _,
    J as b,
    K as f,
    L as g,
    p as h,
    M as x,
    N as y,
    O as w,
    P as v,
    F as N,
    Q as j,
    R as k,
    m as C,
    D as S,
    S as I,
    n as T,
    y as A,
    U as $,
    d as E,
    h as P,
    f as L,
    E as W,
    r as H,
    W as z,
    X as B,
    Y as M,
    Z as D,
    V as X,
    _ as F,
    $ as V,
    a0 as Y,
    a1 as O,
    j as Q,
} from '../../../chunks/lib.js';
import { s as G, g as U } from '../../../chunks/resources.js';
import { u as q } from '../../../chunks/usePreloadImages.js';
import { C as J, u as K, P as Z, R as ee, g as ae, i as te } from '../../../chunks/reward.js';
import { A as se, a as le } from '../../../chunks/arrow.js';
import { B as ne } from '../../../chunks/background.js';
const re = 'check',
    oe = 'select',
    ie = 'shine',
    ce = { default: 100, shine_in: 1e3, shine_out: 650, pulse: 600, check: 500 },
    de = { default: 100, shine: 200, select_long: 200 },
    me = 3,
    ue = { check: { from: 1.5, to: 1 }, shine: { from: 0.8, to: 1.5 } };
function pe(e) {
    return {
        fade_in: async function (a, t = 0) {
            return new Promise((s) => {
                e.start({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: a }, delay: t, onResolve: s });
            });
        },
        fade_out: async function (a, t = 0) {
            return new Promise((s) => {
                e.start({ from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: a }, delay: t, onResolve: s });
            });
        },
        scale_in: async function (a, t, s = 0) {
            return new Promise((l) => {
                e.start({
                    from: { opacity: 0, scale: t[0] },
                    to: { opacity: 1, scale: t[1] },
                    config: { duration: a },
                    delay: s,
                    onResolve: l,
                });
            });
        },
        pulse: async function (e, a, t, s) {
            const l = a / (2 * e - 1),
                n = (e) => 0 === e,
                r = (a) => a === e - 1;
            for (let o = 0; o < e; o++) {
                const e = n(o) ? t : 0;
                (s(), await this.fade_in(l, e), r(o) || (await this.fade_out(l, l)));
            }
        },
    };
}
const { default: _e, pulse: be, shine_in: fe, shine_out: ge, check: he } = ce,
    { default: xe, select_long: ye } = de,
    we = {
        steps: { min: 6, max: 10 },
        accentLastIndex: 4,
        durations: { default: 2 * _e + xe, long: 2 * _e + ye, final: be + fe + ge + he + 4 * xe },
    },
    ve = 'select',
    Ne = 'long_select',
    je = 'final';
class ke {
    last;
    availableList;
    order;
    i;
    constructor(e, a) {
        ((this.last = a), (this.availableList = e), (this.order = this.randomOrder()), (this.i = -1));
    }
    isCompleted() {
        return this.i >= this.order.length;
    }
    isLongTime() {
        return this.i >= this.order.length - we.accentLastIndex;
    }
    randomOrder() {
        if (1 === this.availableList.length) return this.availableList;
        let e = [this.last];
        const a = u(we.steps.min, we.steps.max);
        for (; e.length < a; ) {
            const a = m(this.availableList);
            e[e.length - 1].name !== a.name && e.push(a);
        }
        return e.reverse();
    }
    name() {
        const e = this.order[this.i];
        return e
            ? this.i < this.order.length - 1
                ? `${e.name}_${this.isLongTime() ? Ne : ve}`
                : `${e.name}_${je}`
            : '';
    }
    duration() {
        return this.i === this.order.length - 1
            ? we.durations.final
            : this.isLongTime()
              ? we.durations.long
              : we.durations.default;
    }
    next() {
        return (
            this.i++,
            this.isCompleted() ? { name: '', duration: 0 } : { name: this.name(), duration: this.duration() }
        );
    }
}
function Ce(e, a) {
    const { start: t, end: s } = e.coordinates,
        { start: l, end: n } = a.coordinates;
    return !(l.x >= s.x || l.y >= s.y) && !(t.x >= n.x || t.y >= n.y);
}
const Se = { maxX: 12, maxY: 5 },
    Ie = 'initial',
    Te = 'appearance',
    Ae = 'available',
    Re = 'pending',
    $e = 'selecting',
    Ee = 'completed',
    Pe = 'available',
    Le = 'received',
    We = 'newlyReceived',
    [He, ze] = _()(
        ({ observableModel: t }) => {
            const s = {
                    root: t.object(),
                    cells: t.arrayClone('cells'),
                    fixedRewards: t.array('fixedReward'),
                    stepPrice: t.object('stepPrice'),
                    ...t.primitives(['isInterrupted']),
                    viewState: e.box(Ie),
                    probabilityHidden: e.box(!1),
                    cellSelectAnimationState: e.box(''),
                },
                l = a((e) => {
                    const a = g(s.cells.get(), (a) => a.name === e);
                    return (a || console.warn(`Cell "${e}" not found!`), a);
                }),
                n = a(() => {
                    const e = s.cells.get();
                    !(function (e, a) {
                        let t = a.maxX,
                            s = a.maxY;
                        for (let l = 0; l < e.length; l++) {
                            const n = p(e, l);
                            n.bonuses.length !== Number(n.template.slice(1)) &&
                                console.warn(`The length of ${n.name} is not corrected.`);
                            const { start: r, end: o } = n.coordinates;
                            ((t = Math.min(t, r.x)),
                                (s = Math.min(s, r.y)),
                                (r.x < 0 || r.y < 0 || o.x > a.maxX || o.y > a.maxY) &&
                                    console.warn(`Cell ${n.name} is out of bounds`),
                                (r.x >= o.x || r.y >= o.y) && console.warn(`Cell ${n.name} has incorrect coordinates`));
                            for (let a = l + 1; a < e.length; a++) {
                                const t = p(e, a);
                                Ce(n, t) && console.warn(`Cell ${n.name} intersects with cell ${t.name}!`);
                            }
                        }
                        (0 === t && 0 === s) ||
                            console.warn(
                                `Coordinates looks incorrect! Coordinates should be from (0,0), now: (${t}, ${s})`,
                            );
                    })(e, Se);
                    let a = { x: 0, y: 0 };
                    return (
                        f(e, (e) => {
                            const { end: t } = e.coordinates;
                            ((a.x = Math.max(t.x, a.x)), (a.y = Math.max(t.y, a.y)));
                        }),
                        a
                    );
                }),
                r = a(() => b(s.cells.get(), (e) => e.state !== Le));
            return { ...s, computes: { cell: l, gridSize: n, availableCells: r } };
        },
        ({ externalModel: e, model: a, cleanup: l }) => {
            const n = e.createCallback((e) => ({ cellName: e }), 'onItemShown'),
                r = e.createCallbackNoArgs('resetInterruption'),
                o = t((e) => {
                    a.viewState.set(e);
                }),
                i = t((e) => {
                    a.probabilityHidden.set(e);
                }),
                c = t((e) => {
                    a.cellSelectAnimationState.set(e);
                }),
                d = s(() => {
                    a.isInterrupted.get() && (o(Ae), r());
                }),
                m = s(() => {
                    const e = a.computes.availableCells();
                    a.viewState.get() !== Ae || e.length || (h.sound(G.completed), o(Ee));
                });
            let u;
            const p = s(() => {
                if (a.viewState.get() !== Re) return;
                const e = g(a.cells.get(), (e) => e.state === We);
                if (e) {
                    o($e);
                    const t = a.computes.availableCells(),
                        s = new ke(t, e),
                        l = () => {
                            const { name: a, duration: r } = s.next();
                            if (!a) return (o(t.length ? Ae : Ee), c(''), void n(e.name));
                            (c(a),
                                (u = setTimeout(() => {
                                    l();
                                }, r)));
                        };
                    l();
                }
            });
            return (
                l(() => {
                    (p(), m(), d(), clearTimeout(u));
                }),
                {
                    goPreview: e.createCallback((e) => e, 'showPreview'),
                    play: e.createCallbackNoArgs('play'),
                    setViewState: o,
                    setProbabilityHidden: i,
                }
            );
        },
    ),
    Be = 'AltInfo_ebdfc674',
    Me = 'AltInfo_icon_d580c4b3',
    De = 'AltInfo_description_a11db082';
function Xe({ bundleType: e, className: a = '' }) {
    const { getText: t, getExtImage: s } = U(e),
        r = x({ header: t('main.alt.tooltip.header'), body: t('main.alt.tooltip.body') });
    return l.jsxs('div', {
        ...r,
        className: n(Be, a),
        children: [
            l.jsx('div', { className: Me, style: { backgroundImage: `url(${s('main.alt')})` } }),
            l.jsx('div', { className: De, children: t('main.alt.description') }),
        ],
    });
}
const Fe = 'Loader_86bc8253',
    Ve = 'Loader_image_36fd996';
function Ye({ bundleType: e, className: a = '' }) {
    const { getExtImage: t } = U(e);
    return l.jsx('div', {
        className: n(Fe, a),
        children: l.jsx('div', { className: Ve, style: { backgroundImage: `url(${t('main.footer.loading')})` } }),
    });
}
const Oe = 'Parallax_642396e4',
    Qe = 'Parallax_layer_cdf6ae01',
    Ge = [
        R.images.open_bundle.gui.maps.icons.bundles.default.parallax.l_2(),
        R.images.open_bundle.gui.maps.icons.bundles.default.parallax.l_3(),
    ],
    Ue = ({ parallaxConfig: e, className: a }) => {
        const { screenWidthRem: t } = y(),
            s = e.reduce((e, a) => {
                const t = Math.abs(a.speedX);
                return t > e ? t : e;
            }, 0),
            c = r.createRef(),
            d = s * t,
            [m] = w(c),
            u = o({
                from: { transform: 'scale(1)' },
                to: [{ transform: 'scale(1.1)' }, { transform: 'scale(1)' }],
                config: { duration: 3e4 },
                loop: !0,
            });
        return l.jsx('div', {
            ref: c,
            className: n(Oe, a),
            children: e.map((e, a) =>
                l.jsx(
                    i.div,
                    {
                        className: Qe,
                        style: {
                            width: `${t + 2 * d}rem`,
                            left: -d + 'rem',
                            x: m.x.to((a) => a * e.speedX),
                            y: m.y.to((a) => a * e.speedY),
                            backgroundImage: `url(${e.path})`,
                            ...(Ge.includes(e.path) && u),
                        },
                    },
                    a,
                ),
            ),
        });
    },
    qe = [
        { path: 'parallax.l_1', speedX: -0.012, speedY: -0.0032 },
        { path: 'parallax.l_2', speedX: -0.025, speedY: -0.0064 },
        { path: 'parallax.l_3', speedX: -0.037, speedY: -0.023 },
        { path: 'parallax.l_4', speedX: -0.053, speedY: -0.04 },
    ],
    Je = { default_config: qe },
    Ke = 'Background_3b6d25c7',
    Ze = 'Background_parallax_6e34f438',
    ea = 'Background_lowQualityAsset_b8b64d56',
    aa = c(function ({ className: e = '' }) {
        const { model: a } = ze(),
            { bundleType: t } = a.root.get(),
            { getExtImage: s } = U(t),
            r = ((e) => {
                const a = Je[e] || qe,
                    { getExtImage: t } = U(e);
                return a.map((e) => ({ ...e, path: t(e.path) }));
            })(t),
            c = r.map((e) => e.path),
            d = q(c),
            m = o({ to: { opacity: d ? 1 : 0 }, config: { duration: 300 } });
        return l.jsx('div', {
            className: n(Ke, e),
            children: v.isLow()
                ? l.jsx('div', { className: ea, style: { backgroundImage: `url(${s('parallax.lowQualityImage')})` } })
                : l.jsx(i.div, { className: n(Ze, e), style: m, children: l.jsx(Ue, { parallaxConfig: r }) }),
        });
    }),
    ta = 'CompletionInfo_f2ab1b8c',
    sa = 'CompletionInfo_iconWrapper_b302caee',
    la = 'CompletionInfo_icon_b3acdd8c',
    na = 'CompletionInfo_text_b5f1a286',
    ra = c(function ({ className: e = '' }) {
        const { model: a } = ze(),
            { bundleType: t } = a.root.get(),
            { getText: s, getExtImage: r } = U(t);
        return l.jsxs('div', {
            className: n(ta, e),
            children: [
                l.jsx('div', {
                    className: sa,
                    children: l.jsx('div', { className: la, style: { backgroundImage: `url(${r('main.done')})` } }),
                }),
                l.jsx(N, { text: s('main.completed'), className: na }),
            ],
        });
    });
const oa = {
    [k.extraSmall]: { width: 93, height: 93, margin: 8 },
    [k.small]: { width: 93, height: 93, margin: 8 },
    [k.medium]: { width: 93, height: 93, margin: 8 },
    [k.large]: { width: 110, height: 110, margin: 10 },
    [k.extraLarge]: { width: 145, height: 145, margin: 15 },
};
function ia() {
    const { breakpoint: e } = y();
    return oa[e.name];
}
const ca = 'RewardBlock_45a3b5d0',
    da = 'RewardBlock_info_1b4df6a4',
    ma = 'RewardBlock_fixed_33228e1a',
    ua = 'RewardBlock_random_f29eb048',
    pa = 'RewardBlock_randomIcon_abf9c098',
    _a = 'RewardBlock_currency_759a6c1b';
function ba({ bundleType: e, bonuses: a, tooltipDisabled: t = !1 }) {
    const { getText: s, getExtImage: n } = U(e),
        r = C(a, (e, a) =>
            J.includes(e.name)
                ? l.jsx(
                      S,
                      { type: e.name, reverse: !0, children: l.jsx('div', { className: _a, children: e.label }) },
                      `${e.name}_${a}`,
                  )
                : null,
        ),
        o = I({ contentId: R.views.open_bundle.mono.lobby.tooltips.fixed_rewards('resId'), disabled: t });
    return l.jsxs('div', {
        className: ca,
        children: [
            l.jsx(N, { className: ma, text: s('main.footer.receive'), params: { item: r } }),
            l.jsx('div', { ...o, className: da, style: { backgroundImage: `url(${n('main.footer.info')})` } }),
            l.jsx(N, {
                className: ua,
                text: s('main.footer.random'),
                params: {
                    icon: l.jsx('div', {
                        className: pa,
                        style: { backgroundImage: `url(${n('main.footer.random')})` },
                    }),
                },
            }),
        ],
    });
}
const [fa, ga] = _()(({ observableModel: e }) => ({ ...e.primitives(['name', 'value', 'isEnough']) }), T),
    ha = 'Price_156340df';
const xa = c(function () {
    const { model: e } = ga();
    return l.jsx(S, { className: ha, type: e.name.get(), reverse: !0, size: A.medium, children: e.value.get() });
});
function ya({ context: e = 'model.stepPrice' }) {
    const a = r.useMemo(() => ({ context: e }), [e]);
    return l.jsx($, { children: l.jsx(fa, { options: a, children: l.jsx(xa, {}) }) });
}
const wa = 'Footer_efb5a1ea',
    va = 'Footer_purchase_9a12df3',
    Na = 'Footer_button_3c789754',
    ja = 'Footer_glow_3d092842',
    ka = c(function ({ className: e = '' }) {
        const { model: a, controls: t } = ze(),
            { bundleType: s } = a.root.get(),
            { isEnough: r } = a.stepPrice.get(),
            o = a.fixedRewards.get(),
            i = a.cellSelectAnimationState.get(),
            { getText: c } = U(s),
            d = ia().margin / 2,
            m = (function (e) {
                const { breakpoint: a } = y();
                return a.weight >= j[e].weight;
            })(k.large),
            u = () => {
                (r && t.setViewState(Re), t.play());
            };
        return (
            E(W.SPACE, u),
            l.jsxs('div', {
                style: { marginLeft: `${d}rem`, marginRight: `${d}rem` },
                className: n(wa, e),
                children: [
                    l.jsx(ba, { bundleType: s, bonuses: o, tooltipDisabled: Boolean(i) }),
                    l.jsxs('div', {
                        className: va,
                        children: [
                            l.jsx(ya, {}),
                            l.jsxs(P, {
                                className: Na,
                                size: m ? L.large : L.medium,
                                onClick: u,
                                children: [c('main.footer.button'), l.jsx('div', { className: ja })],
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    Ca = 'Header_bbfb94eb',
    Sa = 'Header_a98c2191',
    Ia = 'Header_title_7baaac5a',
    Ta = 'Header_description_1988f442',
    Aa = c(function ({ className: e = '' }) {
        const { model: a } = ze(),
            { startTime: t, finishTime: s, bundleType: r } = a.root.get(),
            { getText: o, getExtImage: i } = U(r),
            c = H.resolve('intl');
        return l.jsxs('div', {
            className: n(Ca, e),
            children: [
                l.jsxs('div', {
                    className: Sa,
                    children: [
                        l.jsx(se, { image: i('main.header.arrow') }),
                        l.jsx('div', { className: Ia, children: o('bundle.name_uppercased') }),
                        l.jsx(se, { image: i('main.header.arrow'), side: le.right }),
                    ],
                }),
                l.jsx('div', {
                    className: Ta,
                    children: l.jsx(N, {
                        text: o('main.header.description'),
                        params: {
                            startDate: c.formatDateTime(z.DayMonthFull, t),
                            endDate: c.formatDateTime(z.DayMonthFull, s),
                            bundleName: o('bundle.name'),
                        },
                    }),
                }),
            ],
        });
    });
const Ra = 'Check_b4dac75a';
function $a({ bundleType: e, className: a = '' }) {
    const { getExtImage: t } = U(e);
    return l.jsx('div', { className: n(Ra, a), style: { backgroundImage: `url(${t('main.cell.check')})` } });
}
const Ea = 'AnimatedWrapper_b296db6e',
    Pa = i('div');
function La({ springApi: e, style: a = {}, className: t = '', children: s = null }) {
    const r = o({ ref: e, from: { opacity: 0, scale: 1 }, to: { opacity: 1, scale: 1 }, config: { duration: 200 } });
    return l.jsx(Pa, {
        className: n(Ea, t),
        style: {
            ...a,
            ...r,
            transform: r.scale.to((e) => (a?.transform ? `${a?.transform} scale(${e})` : `scale(${e})`)),
        },
        children: s,
    });
}
const Wa = 'SelectLayer_background_c822d679',
    Ha = 'SelectLayer_border_561ccf64',
    za = 'SelectLayer_sparkles_27f2b41',
    Ba = 'SelectLayer_3e1e8fc0';
function Ma({ bundleType: e, className: a = '' }) {
    const { getExtImage: t } = U(e);
    return l.jsxs('div', {
        className: n(Ba, a),
        children: [
            l.jsx(ne, { className: Wa, image: t('main.cell.select_background') }),
            l.jsx('div', { className: za, style: { borderImageSource: `url(${t('main.cell.sparkles')})` } }),
            l.jsx('div', { className: Ha }),
        ],
    });
}
const Da = 'AnimationState_baf2b851',
    Xa = 'AnimationState_layer_86e6059d',
    Fa = 'AnimationState_shine_b8faf88d',
    Va = 'AnimationState_checkWrapper_64e1a229',
    Ya = 'AnimationState_check_318875f3',
    Oa = D(G.cell_select),
    Qa = D(G.cell_glow_appears);
const Ga = 'Border_c9da0750';
const Ua = {
    root: 'CellReward_root_8b97a0ba',
    base: 'CellReward_6831b000',
    glowVideo: 'CellReward_glowVideo_f5640de9',
    base__l: 'CellReward_base__l_8b97a0ba',
    reward: 'CellReward_reward_43f9914',
    reward__received: 'CellReward_reward__received_fe08e5d7',
    reward__centred: 'CellReward_reward__centred_7770ec15',
    base__m: 'CellReward_base__m_8b97a0ba',
    label: 'CellReward_label_f3612f78',
    count: 'CellReward_count_540a0f00',
    rewardImage: 'CellReward_rewardImage_c6a107c0',
    rewardHighlight: 'CellReward_rewardHighlight_9f5219a',
    rewardOverlay: 'CellReward_rewardOverlay_38f05890',
    loupe: 'CellReward_loupe_a4b63feb',
    loupeHover: 'CellReward_loupeHover_3d74aca3',
    check: 'CellReward_check_a29f1710',
};
const qa = 'ProbabilityState_8609ca4f',
    Ja = 'ProbabilityState_text_8fe0e1c8',
    Ka = 'ProbabilityState_value_d81d7252';
function Za(e) {
    if (Number.isInteger(e)) return String(e);
    return H.resolve('intl').formatReal('fractional', e);
}
const et = 'ReceivedState_gradient_7bc7efa5',
    at = 'ReceivedState_a76e8db6',
    tt = 'ReceivedState_icon_6ab8eabf';
const st = 'Cell_4eaa0f36',
    lt = r.forwardRef(function ({ cell: e, showProbabilities: a, style: t = {}, className: s = '', ...r }, o) {
        const { start: i, end: c } = e.coordinates,
            d = ia();
        return l.jsx('div', {
            ref: o,
            className: n(st, s),
            style: {
                left: d.width * i.x + 'rem',
                top: d.height * i.y + 'rem',
                width: d.width * (c.x - i.x) - d.margin + 'rem',
                height: d.height * (c.y - i.y) - d.margin + 'rem',
                margin: d.margin / 2 + 'rem',
                ...t,
            },
            children: r.children,
        });
    });
((lt.Border = function ({ bundleType: e, style: a = {}, className: t = '' }) {
    const { getExtImage: s } = U(e);
    return l.jsx('div', { className: n(Ga, t), style: { borderImageSource: `url(${s('main.cell.border')})`, ...a } });
}),
    (lt.AnimationState = function ({ template: e, bundleType: a, animationType: t, className: s = '' }) {
        const { shineSize: o } = K(e),
            i = d(),
            c = d(),
            m = d(),
            u = pe(i),
            p = pe(c),
            _ = pe(m),
            { getExtImage: b } = U(a);
        return (
            r.useEffect(() => {
                switch (t) {
                    case ve:
                        !(async function () {
                            (Oa(), await u.fade_in(ce.default), await u.fade_out(ce.default, de.default));
                        })();
                        break;
                    case Ne:
                        !(async function () {
                            (Oa(), await u.fade_in(ce.default), await u.fade_out(ce.default, de.select_long));
                        })();
                        break;
                    case je:
                        !(async function () {
                            (await u.pulse(me, ce.pulse, de.default, Oa),
                                Qa(),
                                await p.scale_in(ce.shine_in, [ue.shine.from, ue.shine.to], de.shine),
                                await Promise.all([
                                    u.fade_out(ce.shine_out, de.shine),
                                    p.fade_out(ce.shine_out, de.shine),
                                ]),
                                await _.scale_in(ce.check, [ue.check.from, ue.check.to]));
                        })();
                }
            }, [t]),
            l.jsxs('div', {
                className: n(Da, s),
                children: [
                    l.jsx(
                        La,
                        {
                            springApi: c,
                            className: Fa,
                            style: {
                                backgroundImage: `url(${b('main.cell.sun')})`,
                                transform: 'translate(-50%, -50%)',
                                width: `${o}`,
                                height: `${o}`,
                            },
                        },
                        ie,
                    ),
                    l.jsx(La, { springApi: i, className: Xa, children: l.jsx(Ma, { bundleType: a }) }, oe),
                    l.jsx(
                        La,
                        {
                            style: { transform: 'translate(-50%, 50%)' },
                            springApi: m,
                            className: Va,
                            children: l.jsx($a, { bundleType: a, className: Ya }),
                        },
                        re,
                    ),
                ],
            })
        );
    }),
    (lt.ProbabilityState = function ({ bundleType: e, value: a, className: t = '' }) {
        const { getText: s } = U(e);
        return l.jsx('div', {
            className: n(qa, t),
            children: l.jsx(N, {
                text: s('main.cell.probability'),
                className: Ja,
                params: { num: l.jsx('div', { className: Ka, children: Za(a) }) },
            }),
        });
    }),
    (lt.ReceivedState = function ({ bundleType: e, className: a = '' }) {
        return l.jsxs('div', {
            className: n(at, a),
            children: [l.jsx('div', { className: et }), l.jsx($a, { bundleType: e, className: tt })],
        });
    }),
    (lt.Reward = function ({ bundleType: e, reward: a, cell: t, preview: s, animated: r = !1, className: o = '' }) {
        const { getExtImage: i, getExtVideo: c } = U(e),
            { assetSize: d, multiTextSize: m, multiCurrencySize: u, textSize: p, overlaySize: _ } = K(t.template),
            { count: b } = a,
            f = t.template.charAt(0).toLowerCase(),
            g = a.isInHangar && t.state === Pe,
            x = J.includes(a.name),
            y = f == Z.S,
            w = !y || x,
            v = t.isRare && (t.state === We || (!a.isInHangar && t.state !== Le)),
            N = b > 1 && !x,
            j = a.overlayType,
            k = c(`${a.name}Glow`, 'silent'),
            C = c('glow');
        return l.jsxs('div', {
            className: n(Ua.base, Ua[`base__${f}`], o),
            children: [
                v && l.jsx(X, { className: Ua.glowVideo, src: k || C, loop: !0, autoplay: !0 }),
                l.jsxs(ee, {
                    reward: a,
                    template: t.template,
                    tooltipDisabled: r,
                    className: n(Ua.reward, g && Ua.reward__received, (!w || (x && y)) && Ua.reward__centred),
                    children: [
                        j && l.jsx(ee.Highlight, { special: j, size: _, className: Ua.rewardHighlight }),
                        l.jsx(ee.Image, {
                            template: t.template,
                            showCounter: N,
                            count: b,
                            image: ae(a, d),
                            currencySize: p,
                            className: n(N && y && Ua.rewardImage),
                        }),
                        j && l.jsx(ee.Overlay, { name: a.name, special: j, size: _, className: Ua.rewardOverlay }),
                        w &&
                            l.jsxs(l.Fragment, {
                                children: [
                                    l.jsx(ee.Name, {
                                        reward: a,
                                        fontSize: p,
                                        nameHeight: p,
                                        multiTextSize: x ? u : m,
                                        template: f,
                                        className: Ua.label,
                                    }),
                                    s.enabled &&
                                        l.jsx('div', {
                                            className: Ua.loupe,
                                            children: l.jsx(ee.LoupeButton, {
                                                className: Ua.loupeHover,
                                                icon: {
                                                    img: R.images.open_bundle.gui.maps.icons.bundles.default.main.previewIcon(),
                                                },
                                                onMouseEnter: () => {
                                                    h.sound(G.highlight);
                                                },
                                                onClick: () => {
                                                    (h.sound(G.play),
                                                        s.open({
                                                            bonusType: a.name,
                                                            bonusId: a.id,
                                                            attachmentsToken: a.value,
                                                            styleID: a.styleID,
                                                        }));
                                                },
                                            }),
                                        }),
                                ],
                            }),
                    ],
                }),
                g &&
                    l.jsx('div', {
                        className: Ua.check,
                        style: { backgroundImage: `url(${i('main.cell.in_hangar')})` },
                    }),
            ],
        });
    }));
const nt = {
        root: 'CellWrapper_root_4524beef',
        received: 'CellWrapper_received_4524beef',
        probability: 'CellWrapper_probability_62845a51',
        cellSelection: 'CellWrapper_cellSelection_79e1c16',
        border: 'CellWrapper_border_757a8bef',
        background: 'CellWrapper_background_a60bd818',
        glow: 'CellWrapper_glow_bdecbc44',
        base: 'CellWrapper_6fc47f63',
        base__select: 'CellWrapper_base__select_4524beef',
        base__long_select: 'CellWrapper_base__long_select_4524beef',
        base__final: 'CellWrapper_base__final_9a5d8507',
        content: 'CellWrapper_content_52fea838',
        base__disabled: 'CellWrapper_base__disabled_4524beef',
        content__small: 'CellWrapper_content__small_c903f058',
        'move-from-top': 'CellWrapper_move-from-top_4524beef',
        'move-from-bottom': 'CellWrapper_move-from-bottom_4524beef',
        'fade-in': 'CellWrapper_fade-in_4524beef',
        'fade-out': 'CellWrapper_fade-out_4524beef',
        rotate: 'CellWrapper_rotate_4524beef',
    },
    rt = [Re, $e],
    ot = c(function ({ showProbabilities: e, name: a, className: t = '' }) {
        const [s, o] = r.useState(''),
            { model: i, controls: c } = ze(),
            { bundleType: d } = i.root.get(),
            { getExtImage: m } = U(d),
            u = i.cellSelectAnimationState.get(),
            p = i.viewState.get(),
            _ = i.computes.cell(a),
            b = _.state === Le,
            f = _.bonuses,
            g = _.template.charAt(0).toLowerCase();
        r.useEffect(() => {
            switch (u) {
                case `${a}_${ve}`:
                    o(ve);
                    break;
                case `${a}_${Ne}`:
                    o(Ne);
                    break;
                case `${a}_${je}`:
                    o(je);
                    break;
                default:
                    o('');
            }
        }, [u, a]);
        const h = b
                ? l.jsx(lt.ReceivedState, { bundleType: d, className: nt.received })
                : s
                  ? l.jsx(
                        lt.AnimationState,
                        { template: _.template, bundleType: d, className: nt.cellSelection, animationType: s },
                        a,
                    )
                  : e
                    ? l.jsx(lt.ProbabilityState, { bundleType: d, value: _.probability, className: nt.probability })
                    : void 0,
            { pulse: x, shine_in: y, shine_out: w } = ce,
            { default: v } = de,
            N = { '--final-animation-delay': `${x + y + w + 3 * v}ms` };
        return l.jsxs(lt, {
            cell: _,
            showProbabilities: e,
            className: n(nt.base, nt[`base__${s}`], b && nt.base__disabled, t),
            children: [
                l.jsx(ne, { image: m('main.cell.background'), className: nt.background, style: N }),
                l.jsx(lt.Border, { bundleType: d, className: nt.border, style: N }),
                l.jsx('div', {
                    className: n(nt.content, g === Z.S && nt.content__small),
                    style: N,
                    children: C(f, (e, a) =>
                        l.jsx(
                            lt.Reward,
                            {
                                bundleType: d,
                                reward: e,
                                preview: { open: c.goPreview, enabled: !u && te(e) },
                                animated: rt.includes(p),
                                cell: _,
                            },
                            e.name + a,
                        ),
                    ),
                }),
                h,
            ],
        });
    }),
    it = 'Layout_d6de9028',
    ct = 'Layout_background_9acf7b39',
    dt = 'Layout_cell_e049b8ff',
    mt = c(function ({ className: e = '' }) {
        const { model: a } = ze(),
            t = ia(),
            { bundleType: s } = a.root.get(),
            { getExtImage: o } = U(s),
            { x: i, y: c } = a.computes.gridSize(),
            d = a.viewState.get(),
            m = a.probabilityHidden.get(),
            u = (function (e = W.ESCAPE, a = !1, t = !1, s = !1) {
                const [l, n] = r.useState(a);
                return (
                    r.useEffect(() => {
                        if (e !== W.NONE && !s)
                            return (
                                window.addEventListener('keydown', a, t),
                                window.addEventListener('keyup', l, t),
                                () => {
                                    (window.removeEventListener('keydown', a, t),
                                        window.removeEventListener('keyup', l, t));
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (a.repeat) return;
                                if (B()) return;
                                (n(!0), M(), t && a.stopPropagation());
                            }
                        }
                        function l(a) {
                            if (a.keyCode === e) {
                                if (B()) return;
                                (n(!1), M(), t && a.stopPropagation());
                            }
                        }
                    }, [e, t, s]),
                    r.useEffect(() => {
                        s && l && n(!1);
                    }, [l, s]),
                    l
                );
            })(W.ALT, !1, !0, m),
            p = d === Ae && u;
        return (
            r.useEffect(() => {
                p && h.sound(G.alt_pressed);
            }, [p]),
            l.jsxs('div', {
                style: { width: i * t.width + 'rem', height: c * t.height + 'rem' },
                className: n(it, e),
                children: [
                    l.jsx(ne, { image: o('main.layout_background'), className: ct }),
                    C(a.cells.get(), (e) => l.jsx(ot, { name: e.name, showProbabilities: p, className: dt }, e.name)),
                ],
            })
        );
    }),
    ut = {
        root: 'App_root_0',
        background: 'App_background_c4cf9ab7',
        base: 'App_e312cfaa',
        header: 'App_header_92568c86',
        base__initial: 'App_base__initial_0',
        base__appearance: 'App_base__appearance_0',
        'move-from-top': 'App_move-from-top_0',
        'fade-in': 'App_fade-in_0',
        content: 'App_content_76a86f6e',
        wrapper: 'App_wrapper_bd668828',
        layout: 'App_layout_cc2987b1',
        footer: 'App_footer_29e2f339',
        loader: 'App_loader_69e9032f',
        completed: 'App_completed_b1e42137',
        'move-from-bottom': 'App_move-from-bottom_0',
        base__available: 'App_base__available_0',
        base__completed: 'App_base__completed_0',
        base__selecting: 'App_base__selecting_0',
        'fade-out': 'App_fade-out_0',
        alt: 'App_alt_555e959b',
        rotate: 'App_rotate_0',
        glow: 'App_glow_0',
    },
    pt = [Re, $e],
    _t = [Ae, Te],
    bt = c(function () {
        const { model: e, controls: a } = ze(),
            { bundleType: t } = e.root.get(),
            s = e.computes.availableCells(),
            o = e.viewState.get();
        (F(),
            r.useEffect(
                () => (
                    V(() => {
                        a.setViewState(Te);
                    }, 300),
                    V(() => {
                        a.setViewState(Ae);
                    }, 600)
                ),
                [a],
            ));
        const i = Y(a.setProbabilityHidden, [], 500);
        r.useEffect(() => {
            O.onFocusUpdated((e) => {
                i(!e);
            });
        }, [i]);
        const c = pt.includes(o)
            ? l.jsx(Ye, { bundleType: t, className: ut.loader })
            : s.length && o !== Ee
              ? l.jsx(ka, { className: ut.footer })
              : l.jsx(ra, { className: ut.completed });
        return l.jsxs('div', {
            className: n(ut.base, ut[`base__${o}`]),
            children: [
                l.jsx(aa, { className: ut.background }),
                l.jsxs('div', {
                    className: ut.content,
                    children: [
                        l.jsx(Aa, { className: ut.header }),
                        l.jsxs('div', { className: ut.wrapper, children: [l.jsx(mt, { className: ut.layout }), c] }),
                    ],
                }),
                _t.includes(o) && s.length && l.jsx(Xe, { bundleType: t, className: ut.alt }),
            ],
        });
    });
Q(l.jsx(He, { children: l.jsx($, { children: l.jsx(bt, {}) }) }), { fullScreen: !0 }).then(T);
