import { r as a, j as e, e as s, n as r, p as t, q as i } from '../../../chunks/vendor.js';
import {
    u as n,
    a as d,
    i as o,
    c as l,
    b as c,
    r as m,
    e as p,
    d as _,
    I as y,
    m as u,
    R as x,
    g,
    f as v,
    h as f,
    V as h,
    C as j,
    B as N,
    t as b,
    k as w,
    j as A,
    l as T,
    U as C,
} from '../../../chunks/lib.js';
const [E, H] = o()(
        ({ observableModel: a }) => ({ mainRewards: a.array('mainRewards') }),
        ({ externalModel: a }) => ({
            animationEnded: a.createCallbackNoArgs('onAnimationEnded'),
            close: a.createCallback((a) => ({ reason: a }), 'onClose'),
        }),
    ),
    O = 'TextMask_gradient_4dbfb7a9',
    k = 'TextMask_9987747a',
    M = 'TextMask_gradient__top_f63df556',
    S = 'TextMask_gradient__bottom_9724ea06',
    Q = ({ text: a, className: r }) =>
        e.jsxs('span', {
            className: s(k, r),
            children: [
                a,
                e.jsx('span', { className: s(O, M), children: a }),
                e.jsx('span', { className: s(O, S), children: a }),
            ],
        }),
    W = ({ text: a, openTag: s, closeTag: r, classNames: t }) => {
        const [i, n] = a.split(s);
        if (!n) return a;
        const [d, o] = n.split(r);
        return e.jsxs('span', {
            className: null == t ? void 0 : t.title,
            children: [i && l(i), d && e.jsx(Q, { className: null == t ? void 0 : t.highlight, text: d }), o && l(o)],
        });
    },
    z = 'Header_7d83acf6',
    B = 'Header_subTitleWrapper_dd95ac49',
    I = 'Header_subTitle_11b912d7',
    D = 'Header_arrow_de9151',
    P = 'Header_arrowHead_4e2a2709',
    $ = 'Header_arrowBody_27276e71',
    q = 'Header_arrow__left_65f475ba',
    L = 'Header_arrow__right_65f475ba',
    U = 'Header_title_c5f44fd0',
    V = 'Header_underTitleWrapper_1ee34789',
    F = 'Header_wing_c2ef7d92',
    G = 'Header_wing__left_a6e40196',
    J = 'Header_wing__right_f408d2da',
    K = 'Header_underTitle_a88a751e',
    X = r(function () {
        const a = c(),
            r = m.resolve('strings'),
            n = r.readOrEmpty('awards.collector20.title'),
            d = r.readOrEmpty('awards.collector20.subTitle'),
            o = r.readOrEmpty('awards.collector20.underTitle'),
            l = t(
                ((a) => ({
                    from: { opacity: 0, y: '-20rem' },
                    to: { opacity: 1, y: '0rem' },
                    delay: 100,
                    config: { duration: 400, easings: p.easeOutQuad },
                    onStart: () => {
                        a.play('animation', { target: 'subtitle' });
                    },
                }))(a),
            ),
            _ = t(
                ((a) => ({
                    from: { opacity: 0, y: '-20rem' },
                    to: { opacity: 1, y: '0rem' },
                    delay: 1e3,
                    config: { duration: 500, easings: p.easeOutQuad },
                    onStart: () => {
                        a.play('animation', { target: 'title' });
                    },
                }))(a),
            );
        return e.jsxs('div', {
            className: z,
            children: [
                e.jsxs(i.div, {
                    style: l,
                    className: B,
                    children: [
                        e.jsxs('div', {
                            className: s(D, q),
                            children: [e.jsx('div', { className: $ }), e.jsx('div', { className: P })],
                        }),
                        d && e.jsx(Q, { className: I, text: d }),
                        e.jsxs('div', {
                            className: s(D, L),
                            children: [e.jsx('div', { className: P }), e.jsx('div', { className: $ })],
                        }),
                    ],
                }),
                n &&
                    e.jsx(i.div, {
                        style: _,
                        className: U,
                        children: e.jsx(W, { text: n, openTag: '{gold_Open}', closeTag: '{gold_Close}' }),
                    }),
                e.jsxs('div', {
                    className: V,
                    children: [
                        o && e.jsx('div', { className: K, children: o }),
                        e.jsx('div', { className: s(F, G) }),
                        e.jsx('div', { className: s(F, J) }),
                    ],
                }),
            ],
        });
    }),
    Y = 'AnimatedReward_1789d927',
    Z = ({ children: a, animationConfig: r, className: n }) => {
        const d = t(r);
        return e.jsx(i.div, { style: d, className: s(Y, n), children: a });
    },
    aa = 'MainRewards_title_b9294abf',
    ea = 'MainRewards_f647a436',
    sa = 'MainRewards_reward_7b876cb8',
    ra = 'MainRewards_captions_4f8422d',
    ta = (a, e, s, r) => ({
        from: { opacity: 0, y: '20rem', pointerEvents: 'none' },
        to: { opacity: 1, y: '0rem', pointerEvents: 'auto' },
        trail: 300,
        delay: e + 300 * s,
        config: { duration: a },
        onStart: () => {
            r.play('animation', { target: 'reward' });
        },
    }),
    ia = ({ rewards: a, classNames: r, oneCountDelay: t, duration: i }) => {
        const n = _({ size: y.S296x222 }, { medium: { size: y.S400x300 } }),
            d = c();
        return e.jsx('div', {
            className: s(ea, null == r ? void 0 : r.base),
            children: u(a, (a, o) =>
                e.jsxs(
                    Z,
                    {
                        animationConfig: ta(i, t, o, d),
                        className: sa,
                        children: [
                            e.jsx(x, {
                                name: a.name,
                                image: v(
                                    { item: a.item, type: a.overlayType, icon: a.icon, name: a.name, value: a.value },
                                    n.size,
                                ),
                                special: a.overlayType,
                                size: n.size,
                                tooltipArgs: g({ tooltipId: a.tooltipId }, Number(a.tooltipContentId)),
                            }),
                            e.jsx('div', {
                                className: s(ra, null == r ? void 0 : r.caption),
                                children: e.jsx('div', { className: aa, children: l(a.label) }),
                            }),
                        ],
                    },
                    o + a.name + a.value,
                ),
            ),
        });
    },
    na = 'App_video_b460a12e',
    da = 'App_decorWrapper_bb0bfe54',
    oa = 'App_5c487cff',
    la = 'App_closeButton_f5179698',
    ca = 'App_content_6d450fd7',
    ma = 'App_wrapperRewards_af08fa77',
    pa = 'App_reward_da80d895',
    _a = 'App_mainRewardCaption_5929e7e0',
    ya = 'App_ribbonWrapper_94247f4d',
    ua = 'App_godraysWrapper_edb55c07',
    xa = 'App_ribbon_f6a1d903',
    ga = 'App_raysWrapper_e48e223c',
    va = 'App_godrays_3df409cd',
    fa = 'App_rays_20aa2b69',
    ha = 'App_wrapperButton_6d5ac65d',
    ja = 'App_button_7b36300d',
    Na = 'App_buttonContent_cd42fca3',
    ba = 300,
    wa = 2400,
    Aa = (a) => ({
        from: { opacity: 0, y: '0rem' },
        to: { opacity: 1, y: '-20rem' },
        delay: a,
        config: { duration: 400, easings: p.easeOutQuad },
    }),
    Ta = (a) => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: a,
        config: { duration: 600, easings: p.easeOutQuad },
    }),
    Ra = (a) => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: a,
        config: { duration: ba, easings: p.easeOutQuad },
    }),
    Ca = (a) => ({
        from: { opacity: 0, y: '0rem' },
        to: { opacity: 1, y: '-10rem' },
        delay: a,
        config: { duration: ba, easings: p.easeOutQuad },
    }),
    Ea = r(function () {
        const [r, o] = a.useState(!1),
            l = (() => {
                const e = n(),
                    s = d(),
                    r = 2560 / 1440,
                    t = viewEnv.pxToRem(e.width) * s,
                    i = viewEnv.pxToRem(e.height) * s,
                    o = t / i;
                return a.useMemo(
                    () =>
                        r >= o
                            ? { width: i * r + 'rem', height: `${i}rem` }
                            : { width: `${t}rem`, height: t / r + 'rem' },
                    [i, o, t, r],
                );
            })(),
            { model: p, controls: _ } = H(),
            y = c(),
            u = m.resolve('strings'),
            x = () => {
                r && _.close('cancel');
            };
        (f(w.ESCAPE, x), f(w.ENTER, x), f(w.SPACE, x));
        const g = u.readOrEmpty('awards.collector20.button.affirmative'),
            v = a.useCallback(() => {
                const a = p.mainRewards.get().items.length;
                return wa + a * ba;
            }, [p.mainRewards]),
            [A, T] = t(() => Aa(2e3)),
            [C, E] = t(() => Ta(2400)),
            [O, k] = t(() => Ra(v())),
            [M, S] = t(() => Ca(v()));
        return (
            a.useLayoutEffect(() => {
                o(!1);
                const a = v();
                (T.start({ ...Aa(2e3) }),
                    E.start({
                        ...Ta(2400),
                        onStart: () => {
                            y.play('animation', { target: 'godrays' });
                        },
                    }),
                    k.start({ ...Ra(a) }),
                    S.start({
                        ...Ca(a),
                        onStart: () => {
                            y.play('animation', { target: 'end' });
                        },
                        onRest: () => o(!0),
                    }),
                    T.set({ opacity: 0, y: '0rem' }),
                    E.set({ opacity: 0 }),
                    k.set({ opacity: 0 }),
                    S.set({ opacity: 0, y: '0rem' }));
            }, [S, k, E, T, v, y]),
            e.jsxs('div', {
                className: s(oa),
                children: [
                    e.jsx(h, {
                        src: R.videos.achievements.bg_reward_screen(),
                        autoplay: !0,
                        loop: !0,
                        className: na,
                        style: l,
                    }),
                    e.jsxs('div', {
                        className: da,
                        children: [
                            e.jsx(i.div, { style: A, className: ya, children: e.jsx('div', { className: xa }) }),
                            e.jsx(i.div, {
                                style: C,
                                className: ua,
                                children: e.jsxs('div', {
                                    className: ga,
                                    children: [e.jsx('div', { className: va }), e.jsx('div', { className: fa })],
                                }),
                            }),
                        ],
                    }),
                    e.jsx(i.div, { style: O, className: la, children: e.jsx(j, { onClose: x }) }),
                    e.jsx(X, {}),
                    e.jsxs('div', {
                        className: ca,
                        children: [
                            e.jsx('div', {
                                className: ma,
                                children: e.jsx('div', {
                                    className: pa,
                                    children: e.jsx(ia, {
                                        oneCountDelay: wa,
                                        rewards: p.mainRewards.get().items,
                                        duration: ba,
                                        classNames: { caption: _a },
                                    }),
                                }),
                            }),
                            e.jsx(i.div, {
                                style: M,
                                className: ha,
                                children: e.jsx(N, {
                                    theme: b.primary,
                                    classNames: { base: ja, content: Na },
                                    onClick: () => {
                                        r && _.close('confirm');
                                    },
                                    children: g,
                                }),
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    Ha = A({
        animation: {
            title: 'ach_cup_hover',
            subtitle: 'gui_random_reward_red_ribbon_appear',
            godrays: 'ach_sub_glare',
            reward: 'gui_random_reward_appear',
            end: 'gui_random_reward_end',
        },
    });
T(e.jsx(E, { children: e.jsx(C, { soundsOverrides: Ha, children: e.jsx(Ea, {}) }) }));
