import { p as e, j as s, e as a } from '../../../chunks/vendor.js';
import {
    i,
    r as o,
    u as l,
    n as c,
    F as t,
    P as n,
    B as r,
    t as d,
    s as _,
    V as m,
    a as g,
    k as v,
    T as N,
    b as x,
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
    C = o.resolve('images'),
    S = e(({ vehicleType: e }) => {
        const { model: i } = b(),
            o = l({ value: 'c_440x330' }, { small: { value: 'c_600x450' } }),
            t = C.readOrEmpty(`elitewindow.tank_icons.${o.value}.${c(e)}`);
        return s.jsxs('div', {
            className: u,
            children: [
                s.jsx('div', { className: a(P, k) }),
                !i.isPrestigeAvailable.get() && s.jsx('div', { className: a(P, f) }),
                s.jsx('div', { className: w, style: { backgroundImage: `url(${t})` } }),
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
    D = 'ProgressionBlock_description_57ee8f0',
    G = 'ProgressionBlock_icon_230ee763',
    H = R.strings.elite_window.elite_window,
    z = e(({ className: e }) => {
        const { model: i } = b(),
            o = i.type.get(),
            l = o === j.POST_PROGRESSION ? H.post_progression.description() : H.vanity_progression.title(),
            c = o !== j.POST_PROGRESSION && H.vanity_progression.description();
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
                        l &&
                            s.jsxs('div', {
                                className: B,
                                children: [o === j.POST_PROGRESSION && s.jsx('div', { className: G }), l],
                            }),
                        c && s.jsx('div', { className: D, children: c }),
                    ],
                }),
            ],
        });
    }),
    L = 'Content_glow_7d6ef440',
    F = 'Content_glow__strong_4a868d52',
    $ = 'Content_9af045a3',
    M = 'Content_base__hasPostProgression_a9391767',
    V = 'Content_main_f562db1d',
    K = 'Content_section_57c57489',
    U = 'Content_section__image_7f1ebf74',
    W = 'Content_section__body_8837b3f5',
    q = 'Content_section__title_abaae582',
    J = 'Content_section__description_a54536e0',
    Q = 'Content_prestigeBadge_a19642a7',
    X = 'Content_prestigeEmblem_5e4cfab0',
    Y = 'Content_postProgression_9f8673d',
    Z = 'Content_arrow_82982ba8',
    ee = R.strings.elite_window.elite_window,
    se = e(({ className: e }) => {
        const { model: i, controls: o } = b(),
            l = i.vehicleInfo.get(),
            c = i.type.get(),
            r = i.isPrestigeAvailable.get(),
            d = i.prestigeEmblem.get();
        return s.jsxs('div', {
            className: a($, c !== j.STANDARD && M),
            children: [
                s.jsxs('div', {
                    className: V,
                    children: [
                        s.jsx('div', { className: Z }),
                        s.jsxs('div', {
                            className: K,
                            children: [
                                s.jsx('div', { className: U, children: s.jsx(S, { vehicleType: l.vehicleType }) }),
                                s.jsxs('div', {
                                    className: W,
                                    children: [
                                        s.jsx('div', { className: q, children: ee.elite.title() }),
                                        s.jsx(t, { className: J, text: ee.elite.description() }),
                                    ],
                                }),
                            ],
                        }),
                        r &&
                            s.jsxs('div', {
                                className: K,
                                children: [
                                    s.jsxs('div', {
                                        className: a(U, Q),
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
                                            s.jsx(t, { className: J, text: ee.prestige.description() }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
                c !== j.STANDARD && s.jsx(z, { className: Y }),
            ],
        });
    }),
    ae = 'Footer_e604d473',
    ie = 'Footer_button_cc34b9a4',
    oe = R.strings.elite_window.elite_window,
    le = e(({ className: e }) => {
        const { model: i, controls: o } = b(),
            l = i.type.get();
        return s.jsxs('div', {
            className: a(ae, e),
            children: [
                s.jsx(r, {
                    onClick: o.close,
                    size: _.medium,
                    theme: d.primary,
                    className: ie,
                    children: oe.buttons.ok(),
                }),
                l !== j.STANDARD &&
                    s.jsx(r, {
                        onClick: o.goToProgression,
                        size: _.medium,
                        theme: d.secondary,
                        classNames: { base: ie },
                        children:
                            l === j.POST_PROGRESSION ? oe.buttons.post_progression() : oe.buttons.vanity_progression(),
                    }),
            ],
        });
    }),
    ce = 'Header_ee5a2d07',
    te = 'Header_tankName_8c840ed3',
    ne = 'Header_vehicleText_b549f08a',
    re = 'Header_title_b0ea43f0',
    de = R.strings.elite_window.elite_window,
    _e = e(({ className: e }) => {
        const { model: i, controls: o } = b(),
            l = i.vehicleInfo.get();
        return s.jsxs('div', {
            className: a(ce, e),
            children: [
                s.jsxs(m, {
                    className: te,
                    children: [
                        s.jsx(m.Level, { className: ne, value: l.vehicleLvl }),
                        s.jsx(m.Type, { type: l.vehicleType, premium: l.isElite }),
                        s.jsx(m.Name, { className: ne, children: l.vehicleName }),
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
                    s.jsx(le, { className: Ne }),
                ],
            })
        );
    });
x(s.jsx(h, { children: s.jsx(p, { children: s.jsx(pe, {}) }) }));
