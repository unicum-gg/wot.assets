import { g as e, j as a, f as s, t as n, r as t } from '../../../chunks/vendor.js';
import {
    i,
    e as _,
    m as r,
    ae as o,
    n as l,
    C as c,
    B as d,
    q as m,
    _ as h,
    p as u,
    b,
    T as v,
    J as S,
    U as g,
    d as x,
} from '../../../chunks/lib.js';
import { T as k, S as w } from '../../../chunks/constants.js';
import { T as f } from '../../../chunks/skills.js';
const [p, N] = i()(
        ({ observableModel: a }) => {
            const s = { tankmenList: a.array('tankmen') };
            return { computes: { getTankmenList: e(() => r(s.tankmenList.get(), o), { equals: _ }) } };
        },
        ({ externalModel: e }) => ({
            showShop: e.createCallback((e) => ({ tankmanGroupName: e }), 'showShop'),
            close: e.createCallbackNoArgs('close'),
        }),
    ),
    j = {
        root: 'Sonar_root_196deb26',
        base: 'Sonar_eaaa66ac',
        back: 'Sonar_back_5e5fb3cf',
        line: 'Sonar_line_8e5c7e3e',
        line__top: 'Sonar_line__top_1538161c',
        line__bottom: 'Sonar_line__bottom_67de78ec',
        emitter: 'Sonar_emitter_5fa3fe6c',
        wave: 'Sonar_wave_82872689',
        wave__0: 'Sonar_wave__0_19772766',
        sonarWave: 'Sonar_sonarWave_196deb26',
        wave__1: 'Sonar_wave__1_af7b2c30',
        wave__2: 'Sonar_wave__2_51a2ab0',
        wave__3: 'Sonar_wave__3_38a78832',
        wave__4: 'Sonar_wave__4_593bf80d',
        wave__5: 'Sonar_wave__5_b190575c',
        wave__6: 'Sonar_wave__6_62466fdc',
        wave__7: 'Sonar_wave__7_3ae30ecb',
        wave__8: 'Sonar_wave__8_ccea596a',
        wave__9: 'Sonar_wave__9_4cf1e85a',
        fadeInWithScale: 'Sonar_fadeInWithScale_196deb26',
        slideUp: 'Sonar_slideUp_196deb26',
        blink: 'Sonar_blink_196deb26',
        scale: 'Sonar_scale_196deb26',
        rotate: 'Sonar_rotate_196deb26',
        windowIn: 'Sonar_windowIn_196deb26',
        fadeOut: 'Sonar_fadeOut_196deb26',
        fadeIn: 'Sonar_fadeIn_196deb26',
    },
    I = ({ className: e = '' }) =>
        a.jsxs('div', {
            className: s(j.base, e),
            children: [
                a.jsx('div', {
                    className: j.emitter,
                    children: Array.from({ length: 10 }, (e, n) =>
                        a.jsx('div', { className: s(j.wave, j[`wave__${n}`]) }, `wave-${n}`),
                    ),
                }),
                a.jsx('div', { className: j.back }),
                a.jsx('div', { className: s(j.line, j.line__top) }),
                a.jsx('div', { className: s(j.line, j.line__bottom) }),
            ],
        }),
    A = 'Sound_1f0766a',
    C = 'Sound_content_5cadfcb7',
    T = 'Sound_base__active_7615d841',
    L = 'Sound_iconContainer_b9a54241',
    E = 'Sound_icon_2309261a',
    y = 'Sound_label_a620019d',
    U = 'Sound_sonar_21faecb5',
    V = 'Sound_sonar__show_42488991',
    O = ({ className: e = '', isActive: n = !1, isSoundOn: t = !1 }) =>
        a.jsxs('div', {
            className: s(A, (n || t) && T, e),
            children: [
                a.jsxs('div', {
                    className: C,
                    children: [
                        a.jsx('div', { className: L, children: a.jsx('div', { className: E }) }),
                        a.jsx('div', { className: y, children: R.strings.battle_pass.tankmenVoiceover.soundOn() }),
                    ],
                }),
                a.jsx(I, { className: s(U, t && V) }),
            ],
        });
var F = ((e) => (
    (e.RECEIVED = 'received'),
    (e.FREE = 'free'),
    (e.PAID = 'paid'),
    (e.IN_SHOP = 'inShop'),
    (e.QUEST_CHAIN = 'questChain'),
    (e.NOT_FULL = 'notFull'),
    (e.AVAILABLE_IN_QUEST_CHAIN = 'availableInQuestChain'),
    (e.UNAVAILABLE = 'unavailable'),
    e
))(F || {});
const H = {
        root: 'State_root_9f725de9',
        base: 'State_61aa07d2',
        base__received: 'State_base__received_9f725de9',
        base__availableInQuestChain: 'State_base__availableInQuestChain_e7d81234',
        base__unavailable: 'State_base__unavailable_445e22fe',
        button: 'State_button_a6e8ec12',
        icon: 'State_icon_7f62d791',
        checkGlow: 'State_checkGlow_9b252f8a',
        textAvailable: 'State_textAvailable_660005ee',
        fadeInWithScale: 'State_fadeInWithScale_9f725de9',
        slideUp: 'State_slideUp_9f725de9',
        blink: 'State_blink_9f725de9',
        scale: 'State_scale_9f725de9',
        rotate: 'State_rotate_9f725de9',
        windowIn: 'State_windowIn_9f725de9',
        fadeOut: 'State_fadeOut_9f725de9',
        fadeIn: 'State_fadeIn_9f725de9',
    },
    $ = R.strings.battle_pass.tankmenVoiceover,
    B = n(({ tankman: e }) => {
        const { controls: n } = N(),
            { state: t, progressionLevel: i, count: _, availableCount: r, groupName: o } = e,
            h = (() => {
                switch (t) {
                    case F.FREE:
                    case F.PAID:
                        return a.jsx(l, { classMix: H.textAvailable, text: $.$dyn(t), binding: { progressNumber: i } });
                    case F.IN_SHOP:
                    case F.QUEST_CHAIN:
                        return a.jsxs(a.Fragment, {
                            children: [
                                $.$dyn(t),
                                a.jsx(c, {
                                    type: m.main,
                                    size: d.medium,
                                    mixClass: H.button,
                                    onClick: () => n.showShop(o),
                                    children: $.shopButton(),
                                }),
                            ],
                        });
                    case F.NOT_FULL:
                        return a.jsxs(a.Fragment, {
                            children: [
                                a.jsx(l, { text: $.notFull(), binding: { availableCount: r, count: _ } }),
                                a.jsx(c, {
                                    type: m.main,
                                    size: d.medium,
                                    mixClass: H.button,
                                    onClick: () => n.showShop(o),
                                    children: $.shopButton(),
                                }),
                            ],
                        });
                    case F.AVAILABLE_IN_QUEST_CHAIN:
                    case F.RECEIVED:
                        return a.jsxs(a.Fragment, {
                            children: [
                                t === F.RECEIVED && a.jsx('div', { className: H.icon }),
                                a.jsx('div', { className: H.checkGlow }),
                                a.jsx('div', { children: $.$dyn(t) }),
                            ],
                        });
                    case F.UNAVAILABLE:
                        return $.unavailable();
                }
            })();
        return a.jsx('div', { className: s(H.base, H[`base__${t}`]), children: h });
    }),
    D = {
        container: {
            small: { width: '210rem', height: '280rem' },
            medium: { width: '240rem', height: '360rem' },
            large: { width: '280rem', height: '400rem' },
            extraLarge: { width: '380rem', height: '560rem' },
        },
        image: {
            small: { width: '280rem' },
            medium: { width: '360rem' },
            large: { width: '400rem' },
            extraLarge: { width: '560rem' },
        },
    },
    Q = {
        container: {
            small: { width: '250rem', height: '340rem' },
            medium: { width: '280rem', height: '380rem' },
            large: { width: '320rem', height: '440rem' },
            extraLarge: { width: '440rem', height: '640rem' },
        },
        image: {
            small: { width: '340rem' },
            medium: { width: '380rem' },
            large: { width: '440rem' },
            extraLarge: { width: '640rem' },
        },
    },
    W = 'Tankman_e1df9801',
    P = 'Tankman_content_c99ff641',
    M = 'Tankman_base__disabled_ca952550',
    G = 'Tankman_content__muted_c4e70e7',
    q = 'Tankman_img_6c9e9123',
    z = 'Tankman_img__hover_ca952550',
    J = 'Tankman_base__active_ca952550',
    K = 'Tankman_description_8d1d0155',
    X = 'Tankman_name_2f8ac095',
    Y = 'Tankman_sound_162bee5e',
    Z = 'Tankman_sound__disabled_19fa3b76',
    ee = 'Tankman_skills_f0ffac15',
    ae = ({ tankman: e, setActiveTankman: n, isDisabled: i, tankmenCount: _ }) => {
        const { groupName: r, fullName: o, hasVoiceover: l, skills: c } = e,
            [d, m] = t.useState(!1),
            [b, v] = t.useState(!1),
            [S, g] = t.useState(!1),
            x = _ < 6 ? Q : D,
            w = h(
                { container: x.container.small, image: x.image.small },
                {
                    medium: { container: x.container.medium, image: x.image.medium },
                    large: { container: x.container.large, image: x.image.large },
                    extraLarge: { container: x.container.extraLarge, image: x.image.extraLarge },
                },
            );
        return (
            t.useEffect(() => {
                b && !i && l && (m(!0), u.sound(R.sounds.bp_highlight()));
            }, [i, b, l]),
            a.jsxs('div', {
                className: s(W, i && M, S && J),
                children: [
                    a.jsxs('div', {
                        className: s(P, !l && G),
                        onClick: () => {
                            S ||
                                i ||
                                !l ||
                                (n(r),
                                g(!0),
                                u.sound(R.sounds.play()),
                                u.sound(r),
                                setTimeout(() => {
                                    (g(!1), n(''));
                                }, k));
                        },
                        onMouseEnter: () => {
                            !i && l ? (m(!0), u.sound(R.sounds.bp_highlight())) : v(!0);
                        },
                        onMouseLeave: () => {
                            (m(!1), v(!1));
                        },
                        style: w.container,
                        children: [
                            a.jsx('div', {
                                className: s(q, d && l && z),
                                style: {
                                    ...w.image,
                                    backgroundImage: `url('R.images.gui.maps.icons.battlePass.tankman.persons.commander_${r}')`,
                                },
                            }),
                            l && a.jsx(O, { className: s(Y, i && Z), isActive: d, isSoundOn: S }),
                        ],
                    }),
                    a.jsxs('div', {
                        className: K,
                        children: [
                            a.jsx('div', { className: X, children: o }),
                            a.jsx(f, { skills: c, className: ee }),
                            a.jsx(B, { tankman: e }),
                        ],
                    }),
                ],
            })
        );
    },
    se = 'Content_8eaaf71a',
    ne = n(({ className: e = '' }) => {
        const {
                model: { computes: n },
            } = N(),
            [i, _] = t.useState(''),
            r = n.getTankmenList(),
            o = r.length;
        return a.jsx('div', {
            className: s(se, e),
            children: r.map((e, s) => {
                const n = i.length > 0 && e.groupName !== i;
                return a.jsx(ae, { isDisabled: n, setActiveTankman: _, tankman: e, tankmenCount: o }, `tankman-${s}`);
            }),
        });
    }),
    te = 'Header_d513407a',
    ie = 'Header_subtitle_769c3e56',
    _e = 'Header_title_1c0aea5a',
    re = R.strings.battle_pass.tankmenVoiceover,
    oe = () =>
        a.jsxs('div', {
            className: te,
            children: [
                a.jsx('div', { className: ie, children: re.subtitle() }),
                a.jsx('div', { className: _e, children: re.title() }),
            ],
        }),
    le = { base: 'App_a3f660e2', close: 'App_close_14a78384', content: 'App_content_4f5b331c' },
    ce = R.strings.battle_pass.tankmenVoiceover,
    de = n(() => {
        const { controls: e } = N();
        return (
            b(e.close),
            a.jsxs('div', {
                className: le.base,
                children: [
                    a.jsx(oe, {}),
                    a.jsx(ne, { className: le.content }),
                    a.jsx(c, {
                        type: m.primary,
                        size: d.medium,
                        mixClass: le.button,
                        onClick: () => e.close(),
                        soundClick: w,
                        children: ce.button(),
                    }),
                    a.jsx('div', {
                        className: le.close,
                        children: a.jsx(v, {
                            caption: ce.close(),
                            type: 'close',
                            side: 'right',
                            onClick: () => e.close(),
                        }),
                    }),
                ],
            })
        );
    });
x(new S().add(g).addWithProps(p, {}).render(a.jsx(de, {})));
