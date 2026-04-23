import { t as e, j as s, l as a } from '../../../chunks/vendor.js';
import {
    i,
    r as l,
    d as o,
    n as t,
    F as c,
    P as n,
    B as r,
    t as d,
    s as _,
    o as m,
    h as g,
    k as v,
    T as N,
    l as x,
    U as p,
} from '../../../chunks/lib.js';
var j = ((e) => (
    (e.STANDARD = 'standard'),
    (e.POST_PROGRESSION = 'postProgression'),
    (e.VEH_SKILL_TREE = 'vehSkillTree'),
    e
))(j || {});
const [h, b] = i()(
        ({ observableModel: e }) => ({
            ...e.primitives(['type', 'isPrestigeAvailable']),
            vehicleInfo: e.object('vehicleInfo'),
            prestigeEmblem: e.object('prestigeEmblem'),
        }),
        ({ externalModel: e }) => ({
            goToProgression: e.createCallbackNoArgs('onGoToProgression'),
            close: e.createCallbackNoArgs('onClose'),
        }),
    ),
    P = 'Icon_glow_b6f80802',
    f = 'Icon_glow__light_3f310309',
    k = 'Icon_glow__strong_cd5dd8a1',
    u = 'Icon_7f7c6297',
    w = 'Icon_tankIcon_34bc69b9',
    C = l.resolve('images'),
    S = e(({ vehicleType: e }) => {
        const { model: i } = b(),
            l = o({ value: 'c_440x330' }, { small: { value: 'c_600x450' } }),
            c = C.readOrEmpty(`elitewindow.tank_icons.${l.value}.${t(e)}`);
        return s.jsxs('div', {
            className: u,
            children: [
                s.jsx('div', { className: a(P, k) }),
                !i.isPrestigeAvailable.get() && s.jsx('div', { className: a(P, f) }),
                s.jsx('div', { className: w, style: { backgroundImage: `url(${c})` } }),
            ],
        });
    }),
    y = 'ProgressionBlock_textBackground_52823f45',
    T = 'ProgressionBlock_29163b1a',
    A = 'ProgressionBlock_lockWrapper_721c0560',
    I = 'ProgressionBlock_lock_4669aa21',
    E = 'ProgressionBlock_lockCloud_c5cf7fca',
    O = 'ProgressionBlock_content_8ce0e880',
    B = 'ProgressionBlock_title_a1a7cf79',
    D = 'ProgressionBlock_description_340e09db',
    G = 'ProgressionBlock_icon_230ee763',
    H = R.strings.elite_window.elite_window,
    z = e(({ className: e }) => {
        const { model: i } = b(),
            l = i.type.get(),
            o = l === j.POST_PROGRESSION ? H.post_progression.description() : H.vanity_progression.title(),
            t = l !== j.POST_PROGRESSION && H.vanity_progression.description();
        return s.jsxs('div', {
            className: a(T, e),
            children: [
                s.jsxs('div', {
                    className: A,
                    children: [s.jsx('div', { className: E }), s.jsx('div', { className: I })],
                }),
                s.jsxs('div', {
                    className: O,
                    children: [
                        s.jsx('div', { className: y }),
                        o &&
                            s.jsxs('div', {
                                className: B,
                                children: [l === j.POST_PROGRESSION && s.jsx('div', { className: G }), o],
                            }),
                        t && s.jsx(c, { text: t, split: !0, className: D }),
                    ],
                }),
            ],
        });
    }),
    L = 'Content_glow_7d6ef440',
    F = 'Content_glow__strong_4a868d52',
    $ = 'Content_9af045a3',
    M = 'Content_base__hasPostProgression_a9391767',
    K = 'Content_main_f562db1d',
    U = 'Content_section_57c57489',
    V = 'Content_section__image_7f1ebf74',
    W = 'Content_section__body_8837b3f5',
    q = 'Content_section__title_806db271',
    J = 'Content_section__description_e93395a4',
    Q = 'Content_prestigeBadge_a19642a7',
    X = 'Content_prestigeEmblem_5e4cfab0',
    Y = 'Content_postProgression_9f8673d',
    Z = 'Content_arrow_82982ba8',
    ee = R.strings.elite_window.elite_window,
    se = e(({ className: e }) => {
        const { model: i, controls: l } = b(),
            o = i.vehicleInfo.get(),
            t = i.type.get(),
            r = i.isPrestigeAvailable.get(),
            d = i.prestigeEmblem.get();
        return s.jsxs('div', {
            className: a($, t !== j.STANDARD && M),
            children: [
                s.jsxs('div', {
                    className: K,
                    children: [
                        s.jsx('div', { className: Z }),
                        s.jsxs('div', {
                            className: U,
                            children: [
                                s.jsx('div', { className: V, children: s.jsx(S, { vehicleType: o.vehicleType }) }),
                                s.jsxs('div', {
                                    className: W,
                                    children: [
                                        s.jsx('div', { className: q, children: ee.elite.title() }),
                                        s.jsx(c, { className: J, text: ee.elite.description(), split: !0 }),
                                    ],
                                }),
                            ],
                        }),
                        r &&
                            s.jsxs('div', {
                                className: U,
                                children: [
                                    s.jsxs('div', {
                                        className: a(V, Q),
                                        children: [
                                            s.jsx('div', { className: a(L, F) }),
                                            s.jsx(n, {
                                                level: d.level,
                                                grade: d.grade ?? 1,
                                                type: d.type,
                                                size: n.sizes.xl,
                                                classNames: { base: X },
                                            }),
                                        ],
                                    }),
                                    s.jsxs('div', {
                                        className: W,
                                        children: [
                                            s.jsx('div', { className: q, children: ee.prestige.title() }),
                                            s.jsx(c, { className: J, text: ee.prestige.description(), split: !0 }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
                t !== j.STANDARD && s.jsx(z, { className: Y }),
            ],
        });
    }),
    ae = 'Footer_e604d473',
    ie = 'Footer_button_cc34b9a4',
    le = R.strings.elite_window.elite_window,
    oe = e(({ className: e }) => {
        const { model: i, controls: l } = b(),
            o = i.type.get();
        return s.jsxs('div', {
            className: a(ae, e),
            children: [
                s.jsx(r, {
                    onClick: l.close,
                    size: _.medium,
                    theme: d.primary,
                    className: ie,
                    children: le.buttons.ok(),
                }),
                o !== j.STANDARD &&
                    s.jsx(r, {
                        onClick: l.goToProgression,
                        size: _.medium,
                        theme: d.secondary,
                        classNames: { base: ie },
                        children:
                            o === j.POST_PROGRESSION ? le.buttons.post_progression() : le.buttons.vanity_progression(),
                    }),
            ],
        });
    }),
    te = 'Header_ee5a2d07',
    ce = 'Header_tankName_8c840ed3',
    ne = 'Header_vehicleText_b549f08a',
    re = 'Header_title_b0ea43f0',
    de = R.strings.elite_window.elite_window,
    _e = e(({ className: e }) => {
        const { model: i, controls: l } = b(),
            o = i.vehicleInfo.get();
        return s.jsxs('div', {
            className: a(te, e),
            children: [
                s.jsxs(m, {
                    className: ce,
                    children: [
                        s.jsx(m.Level, { className: ne, value: o.vehicleLvl }),
                        s.jsx(m.Type, { type: o.vehicleType, premium: o.isElite }),
                        s.jsx(m.Name, { className: ne, children: o.vehicleName }),
                    ],
                }),
                s.jsx('div', { className: re, children: de.title() }),
            ],
        });
    }),
    me = 'App_f208273f',
    ge = 'App_backgroundGlare_3ba092e8',
    ve = 'App_header_494088d4',
    Ne = 'App_footer_ac8fd39',
    xe = 'App_closeButton_c796cf51',
    pe = e(function () {
        const { controls: e } = b();
        return (
            g(v.ESCAPE, e.close),
            s.jsxs('div', {
                className: me,
                children: [
                    s.jsx('div', { className: ge }),
                    s.jsx('div', {
                        className: xe,
                        children: s.jsx(N, {
                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                            type: 'close',
                            side: 'right',
                            onClick: e.close,
                        }),
                    }),
                    s.jsx(_e, { className: ve }),
                    s.jsx(se, {}),
                    s.jsx(oe, { className: Ne }),
                ],
            })
        );
    });
x(s.jsx(h, { children: s.jsx(p, { children: s.jsx(pe, {}) }) }));
