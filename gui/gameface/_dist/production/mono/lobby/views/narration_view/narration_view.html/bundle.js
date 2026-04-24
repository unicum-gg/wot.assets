import { D as a, j as e, f as s, r, u as t, t as i } from '../../../chunks/vendor.js';
import {
    i as n,
    a8 as o,
    ap as l,
    d,
    d3 as c,
    aI as _,
    aF as x,
    aJ as N,
    b6 as m,
    B as b,
    w as f,
    d2 as h,
    C as p,
    d4 as g,
    r as j,
    U as u,
} from '../../../chunks/lib.js';
import { d as v } from '../../../chunks/sound.js';
import { P as T, V as y } from '../../../chunks/index.js';
const [S, C] = n()(
        ({ observableModel: a }) => ({ root: a.object() }),
        ({ externalModel: a }) => ({
            onClose: a.createCallbackNoArgs('onClose'),
            onSlide: a.createCallback((a) => ({ slideIndex: a }), 'onSlide'),
            onVoiceoverToggle: a.createCallbackNoArgs('onVoiceoverToggle'),
        }),
    ),
    k = 'ls_slider:navigation_button',
    A = 'NarrationText_e60fa2f1',
    P = 'NarrationText_base__first_1ff40c1e',
    W = 'NarrationText_base__switch_f5f39cf4',
    E = 'NarrationText_voicerToggle_7996a30f',
    w = 'NarrationText_voicerImage_ddd59b26',
    z = 'NarrationText_textWrapper_7851e39a',
    I = 'NarrationText_title_c6323ea8',
    O = 'NarrationText_shadow_c558de93',
    B = 'NarrationText_scrollTextWrapper_2966ec7f',
    F = 'NarrationText_scrollContentWrapper_5d272dcd',
    V = 'NarrationText_text_7fbf87ef',
    $ = 'NarrationText_highlightText_c7174a16',
    L = 'NarrationText_highlightText__secondary_e31000ce',
    D = 'NarrationText_titleParagraph_117b3e67',
    M = 'NarrationText_paragraph_a1fd10d6',
    J = a(function ({ index: a, isFirst: r, isAnimationPlaying: t }) {
        const i = o.resolve('strings'),
            { model: n, controls: m } = C();
        return e.jsxs('div', {
            className: s(A, t && W, r && P),
            children: [
                e.jsxs(l, {
                    className: E,
                    size: l.sizes.small,
                    activated: Boolean(n.root.get().isVoiceoverActive),
                    onClick: m.onVoiceoverToggle,
                    children: [
                        e.jsx('div', { className: w }),
                        i.readOrEmpty('R.strings.last_stand_lobby.narration.actions.voiceover'),
                    ],
                }),
                e.jsxs('div', {
                    className: z,
                    children: [
                        e.jsx(d, {
                            params: { number: c(a) },
                            text: i.readOrEmpty(`R.strings.last_stand_lobby.narration.narrationTitle.ls_artefact_${a}`),
                            className: I,
                        }),
                        e.jsxs('div', {
                            className: B,
                            children: [
                                e.jsx('div', { className: O }),
                                e.jsxs(
                                    _,
                                    {
                                        children: [
                                            e.jsx(x, {
                                                className: F,
                                                children: e.jsx('div', {
                                                    className: V,
                                                    children: e.jsx(d, {
                                                        split: !0,
                                                        params: {
                                                            pargraphStart: e.jsx('div', { className: M }),
                                                            titleParagraph: e.jsx('div', { className: D }),
                                                            highlightText: $,
                                                            highlightSecondaryText: s($, L),
                                                        },
                                                        text: i.readOrEmpty(
                                                            `R.strings.last_stand_lobby.narration.narrationText.ls_narration_${a}`,
                                                        ),
                                                    }),
                                                }),
                                            }),
                                            e.jsx(N, {}),
                                        ],
                                    },
                                    `slide${a}`,
                                ),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    U = 'NarrationContent_vignette_4eea4cea',
    q = 'NarrationContent_5f0e9d0b',
    G = 'NarrationContent_content_3e11b3cf',
    H = 'NarrationContent_content__first_2210ffaa',
    K = 'NarrationContent_content__switch_a633cfb7',
    Q = function ({
        baseRef: a,
        selectedIndex: r,
        isAnimationStart: t,
        isAnimationPlaying: i,
        onLoadCompleted: n,
        isFirst: o,
    }) {
        return e.jsxs('div', {
            className: q,
            children: [
                e.jsx('div', {
                    className: s(G, t && o && H, i && K),
                    children: e.jsx(T, {
                        refParent: a,
                        slideIndex: r,
                        backgroundPath: `R.images.last_stand.gui.maps.icons.backgrounds.bg_${r}`,
                        onLoadCompleted: n,
                    }),
                }),
                e.jsx('div', { className: U }),
                e.jsx(J, { index: r, isAnimationPlaying: i, isFirst: t && o }),
            ],
        });
    },
    X = 'NarrationSlider_52899b6f',
    Y = 'NarrationSlider_blackScreen_2a8ce117',
    Z = 'NarrationSlider_slideButton_3ef51db8',
    aa = 'NarrationSlider_buttonWrapper_d86e1fae',
    ea = 'NarrationSlider_buttonWrapper__right_a0c8af8f',
    sa = 'NarrationSlider_buttonWrapper__left_a75c32d',
    ra = 'NarrationSlider_buttonNumLabel_e82adf30',
    ta = 'NarrationSlider_slideWrapper_853cc82f',
    ia = 'NarrationSlider_slideWrapper__blur_b61bfecc',
    na = 'NarrationSlider_slideWrapper__unblur_fe6e2e1a',
    oa = 'NarrationSlider_video_19efa0f0',
    la = 'NarrationSlider_video__hide_b6adbcdb',
    da = 'NarrationSlider_video__show_a64fda4f',
    ca = 'NarrationSlider_prevArrow_f0d71b7f',
    _a = 'NarrationSlider_nextArrow_ab02e93d',
    xa = a(function ({ baseRef: a }) {
        const n = o.resolve('strings'),
            { model: l, controls: d } = C(),
            { slideNumber: _, isNextDisabled: x } = l.root.get(),
            [N, h] = r.useState(_),
            [p, g] = r.useState(!0),
            [j, u] = r.useState(!1),
            v = m(),
            T = _ + 1,
            S = _ - 1,
            A = T <= 4,
            [P, W] = t(() => ({ from: { opacity: 1 } })),
            E = r.useCallback(
                (a, e) => {
                    (g(!0),
                        j ||
                            (u(!0),
                            W.start({
                                to: { opacity: 1 },
                                onRest: () => {
                                    (h(a), !e && d.onSlide(a));
                                },
                                immediate: !1,
                                delay: 50,
                                config: { duration: 200 },
                            })));
                },
                [W, d, j],
            );
        r.useEffect(() => {
            _ !== N && E(_, !0);
        }, [_, N, E]);
        const w = r.useCallback(() => {
            (g(!1),
                W.start({
                    to: { opacity: 0 },
                    delay: 0,
                    config: { duration: 200 },
                    onRest: () => {
                        u(!1);
                    },
                }));
        }, [W]);
        return e.jsxs('div', {
            className: X,
            children: [
                e.jsxs('div', {
                    className: s(ta, p ? ia : na),
                    children: [
                        e.jsx(Q, {
                            baseRef: a,
                            selectedIndex: N,
                            onLoadCompleted: w,
                            isFirst: v,
                            isAnimationStart: p,
                            isAnimationPlaying: j,
                        }),
                        e.jsx(i.div, { className: Y, style: P }),
                        e.jsx(y, {
                            src: R.videos.last_stand.slide_overlay(),
                            className: s(oa, p ? da : la),
                            paused: !j,
                            rotated: p,
                        }),
                    ],
                }),
                Boolean(S) &&
                    e.jsxs('div', {
                        className: s(aa, sa),
                        children: [
                            e.jsx('div', { className: ra, children: c(S) }),
                            e.jsx(b, {
                                disabled: j,
                                onClick: () => E(S),
                                className: Z,
                                theme: b.themes.secondary,
                                size: b.sizes.small,
                                soundTarget: k,
                                children: e.jsx('div', { className: ca }),
                            }),
                        ],
                    }),
                A &&
                    e.jsxs('div', {
                        className: s(aa, ea),
                        children: [
                            e.jsx('div', { className: ra, children: c(T) }),
                            e.jsx(f, {
                                isEnabled: x,
                                header: n.readOrEmpty('R.strings.last_stand_lobby.narration.tooltips.nextStory'),
                                body: n.readOrEmpty(
                                    `R.strings.last_stand_lobby.narration.tooltips.disabledNextEpisode_${_}`,
                                ),
                                children: e.jsx(b, {
                                    disabled: j || x,
                                    onClick: () => E(T),
                                    className: Z,
                                    theme: b.themes.secondary,
                                    size: b.sizes.small,
                                    soundTarget: k,
                                    children: e.jsx('div', { className: _a }),
                                }),
                            }),
                        ],
                    }),
            ],
        });
    }),
    Na = 'NarrationApp_b32d4a89',
    ma = 'NarrationApp_closeButton_f57beb0f',
    ba = a(function () {
        const { controls: a } = C(),
            s = r.useRef(null);
        return (
            h(a.onClose),
            e.jsxs('div', {
                className: Na,
                ref: s,
                children: [e.jsx(xa, { baseRef: s }), e.jsx(p, { className: ma, onClose: a.onClose })],
            })
        );
    }),
    fa = g({ click: { [k]: v } });
j(e.jsx(u, { soundsOverrides: fa, children: e.jsx(S, { children: e.jsx(ba, {}) }) }));
