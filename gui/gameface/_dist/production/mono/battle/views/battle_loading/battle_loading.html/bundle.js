import { j as e, h as a, k as s, m as t, r as i } from '../../../chunks/vendor.js';
import { T as l, i as n, n as d, p as _, a as c, u as r, P as o, S as g, k as p, r as b } from '../../../chunks/lib.js';
var m = ((e) => (
    (e.WhiteSpanish = 'whiteSpanish'),
    (e.Red = 'red'),
    (e.LightRed = 'lightRed'),
    (e.Currency = 'currency'),
    (e.Heading = 'heading'),
    (e.MetaHeading = 'metaHeading'),
    e
))(m || {});
const h = {
        root: 'Text_root_e1d6e9be',
        base: 'Text_da4fa79b',
        base__whiteSpanish: 'Text_base__whiteSpanish_356a3dde',
        base__red: 'Text_base__red_6151012b',
        base__currency: 'Text_base__currency_42b9618c',
        base__heading: 'Text_base__heading_b9657513',
        base__lightRed: 'Text_base__lightRed_6151012b',
        base__metaHeading: 'Text_base__metaHeading_b43a106',
        layer0: 'Text_layer0_f3f9aa3f',
        layer0__shadow: 'Text_layer0__shadow_806cca02',
        layer1: 'Text_layer1_d782557a',
        layer2: 'Text_layer2_7feb516d',
        layer3: 'Text_layer3_f5988973',
        layer4: 'Text_layer4_c5d73bf5',
    },
    x = ({ text: t, type: i, shadow: n = !1, grunge: d = !1, overflow: _ = !1, className: c }) => {
        const r = _ ? e.jsx(l, { content: t }) : t;
        return e.jsxs('div', {
            className: a(h.base, h[`base__${i}`], c),
            children: [
                e.jsx(s.div, { className: a(h.layer0, n && h.layer0__shadow), children: r }),
                i === m.Heading &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx(s.div, { className: h.layer1, children: r }),
                            e.jsx(s.div, { className: h.layer2, children: r }),
                        ],
                    }),
                e.jsx(s.div, { className: h.layer3, children: r }),
                d && e.jsx(s.div, { className: h.layer4, children: r }),
            ],
        });
    },
    [v, f] = n()(({ observableModel: e }) => ({ primitives: e.primitives(['currentProgress']) }), d),
    u = {
        bgImageBase: 'R.images.last_stand.gui.maps.icons.battle.eventLoading.pattern_base',
        line: { bgColorBase: '#8f0808', bgColorDisabled: '#C0C0C0', bgColorFinished: '#8f0808' },
        pattern: {
            bgImageBase: 'R.images.last_stand.gui.maps.icons.battle.eventLoading.pattern_red',
            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
            bgImageFinished: 'R.images.last_stand.gui.maps.icons.battle.eventLoading.pattern_red',
        },
        glow: 'R.invalid',
        glowSmall: 'R.images.last_stand.gui.maps.icons.battle.eventLoading.glowSmallRed',
        delta: {
            color: '#ffc',
            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
        },
    },
    j = {
        root: 'Button_root_6bcdc8c',
        base: 'Button_2cec6d93',
        bg: 'Button_bg_83706ac',
        base__left: 'Button_base__left_6bcdc8c',
        hover: 'Button_hover_ff45df9f',
    };
var N = ((e) => ((e.Left = 'left'), (e.Right = 'right'), e))(N || {});
function B({ type: s, className: t, onClick: i }) {
    return e.jsxs('div', {
        className: a(j.base, j[`base__${s}`], t),
        onClick: i,
        onMouseEnter: _.highlight,
        children: [e.jsx('div', { className: j.bg }), e.jsx('div', { className: j.hover })],
    });
}
const y = 'NavButton_2cc704c3',
    L = 'NavButton_navImg_a6c6cdd9',
    A = 'NavButton_navImg__active_b8e6dee';
function k({ index: s, activeIndex: t, className: i, onClick: l }) {
    return e.jsx('div', {
        className: a(y, i),
        onClick: () => {
            l(s);
        },
        onMouseEnter: _.highlight,
        children: e.jsx('div', { className: a(L, s === t && A) }),
    });
}
const C = 'BattleLoadingApp_b9007f71',
    T = 'BattleLoadingApp_vignette_8978ecaa',
    w = 'BattleLoadingApp_shadow_d504334d',
    I = 'BattleLoadingApp_bgImage_b59d6fa2',
    $ = 'BattleLoadingApp_block_99e2ad2a',
    S = 'BattleLoadingApp_row_e0989d6e',
    H = 'BattleLoadingApp_titleContainer_63bd28b1',
    E = 'BattleLoadingApp_row__active_e279ac6d',
    P = 'BattleLoadingApp_titleSimple_ee1e1cfd',
    F = 'BattleLoadingApp_titleArt_7a7ffec0',
    M = 'BattleLoadingApp_description_6021feae',
    W = 'BattleLoadingApp_progressBar_5f92fb85',
    D = 'BattleLoadingApp_progressBorder_6ac9f8e2',
    O = 'BattleLoadingApp_container_a0ad6b27',
    z = 'BattleLoadingApp_button_947199e9',
    G = 'BattleLoadingApp_button__left_bdb11db2',
    V = 'BattleLoadingApp_button__right_a36d10f9',
    q = 'BattleLoadingApp_navigation_435261c0',
    J = R.strings.last_stand_battle.loading,
    K = t(
        ({
            hintsNum: s = 2,
            bgPath: t = 'R.images.last_stand.gui.maps.icons.battle.eventLoading.tips.tipBg_',
            localePath: l = J,
        }) => {
            const { model: n } = f(),
                d = n.primitives.currentProgress.get(),
                b = new Array(s).fill(0),
                [h, v] = i.useState(c(0, s - 1)),
                j = i.useCallback(() => {
                    (v((h - 1 + s) % s), _.click());
                }, [h, s]),
                y = i.useCallback(
                    (e = !0) => {
                        (v((h + 1) % s), e && _.click());
                    },
                    [h, s],
                ),
                L = i.useCallback((e) => {
                    (v(e), _.click());
                }, []),
                A = () => {
                    (_.click(), v((h + 1) % s));
                };
            return (
                r(p.ENTER, A),
                r(p.SPACE, A),
                r(p.TAB, A),
                r(p.ARROW_RIGHT, A),
                r(p.ARROW_LEFT, () => {
                    (_.click(), v(h <= 0 ? s - 1 : (h - 1) % s));
                }),
                i.useEffect(() => {
                    const e = setInterval(() => {
                        y(!1);
                    }, 7e3);
                    return () => clearInterval(e);
                }, [h, y]),
                e.jsxs('div', {
                    className: C,
                    children: [
                        e.jsx('div', { className: I, style: { backgroundImage: `url('${t}${h}')` } }),
                        e.jsx('div', { className: T }),
                        e.jsx('div', { className: w }),
                        e.jsx('div', {
                            className: $,
                            children: b.map((s, t) =>
                                e.jsxs(
                                    'div',
                                    {
                                        className: a(S, t === h && E),
                                        children: [
                                            e.jsxs('div', {
                                                className: H,
                                                children: [
                                                    e.jsx(x, {
                                                        type: m.Heading,
                                                        text: l.$dyn(`title_${t}`),
                                                        className: F,
                                                        shadow: !0,
                                                    }),
                                                    e.jsx('div', { className: P, children: l.$dyn(`title_${t}`) }),
                                                ],
                                            }),
                                            e.jsx('div', { className: M, children: l.$dyn(`description_${t}`) }),
                                        ],
                                    },
                                    `row_${t}`,
                                ),
                            ),
                        }),
                        e.jsxs('div', {
                            className: O,
                            children: [
                                e.jsx(B, { type: N.Left, className: a(z, G), onClick: j }),
                                e.jsx(B, { type: N.Right, className: a(z, V), onClick: y }),
                            ],
                        }),
                        e.jsx('div', {
                            className: q,
                            children: b.map((a, s) => e.jsx(k, { onClick: L, index: s, activeIndex: h }, `tip_${s}`)),
                        }),
                        e.jsxs('div', {
                            className: W,
                            children: [
                                e.jsx('div', { className: D }),
                                e.jsx(o, { value: d, maxValue: 100, size: g.Small, theme: u }),
                            ],
                        }),
                    ],
                })
            );
        },
    );
b(e.jsx(v, { children: e.jsx(K, {}) }));
