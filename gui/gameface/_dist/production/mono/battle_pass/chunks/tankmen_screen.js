import { g as e, w as a, f as s, j as n, R as t, r as i, k as l } from './vendor.js';
import {
    i as o,
    e as _,
    m as c,
    H as r,
    r as d,
    ab as b,
    k as m,
    l as k,
    E as v,
    B as u,
    n as p,
    bT as h,
    bN as f,
    p as S,
    bm as w,
    bj as N,
    br as g,
    b as j,
    bz as x,
} from './lib.js';
import { N as I, T as P } from './constants.js';
/* empty css      */ const V = {
        battlePass: {
            chapterChoice: '/battlePass/chapterChoice',
            progression: '/battlePass/progression',
            postProgression: '/battlePass/postProgression',
            buyPass: '/battlePass/buyPass',
            buyPassRewards: '/battlePass/buyPassRewards',
            buyLevels: '/battlePass/buyLevels',
            buyLevelsRewards: '/battlePass/buyLevelsRewards',
            holidayFinal: '/battlePass/holidayFinal',
            tankmenScreen: '/battlePass/tankmenScreen',
        },
    },
    [y, T] = o()(
        ({ observableModel: a }) => {
            const s = { tankmenList: a.array('tankmen') };
            return { computes: { getTankmenList: e(() => c(s.tankmenList.get(), r), { equals: _ }) } };
        },
        ({ externalModel: e }) => ({ showShop: e.createCallback((e) => ({ tankmanGroupName: e }), 'showShop') }),
    );
var O = ((e) => ((e.PROGRESSION = 'progression'), (e.IN_SHOP = 'inShop'), (e.UNAVAILABLE = 'unavailable'), e))(O || {});
const C = {
        base: 'Details_f71cbec7',
        base__received: 'Details_base__received_cc86090a',
        button: 'Details_button_7162adb1',
        label: 'Details_label_53b1bce8',
        label__received: 'Details_label__received_672e99c5',
        fadeInWithScale: 'Details_fadeInWithScale_43c92208',
        slideUp: 'Details_slideUp_43c92208',
        blink: 'Details_blink_43c92208',
        scale: 'Details_scale_43c92208',
        rotate: 'Details_rotate_43c92208',
        windowIn: 'Details_windowIn_43c92208',
        fadeOut: 'Details_fadeOut_43c92208',
        fadeIn: 'Details_fadeIn_43c92208',
    },
    D = d.resolve('strings'),
    E = a(({ tankman: e, className: a }) => {
        const { controls: t } = T(),
            { state: i, progressionLevel: l, groupName: o, chapterID: _ } = e,
            c = b(),
            r = m({ buttonSize: k.extraSmall }, { large: { buttonSize: k.small } }),
            d = D.readOrEmpty(`battle_pass.tankmenVoiceover.${i}`),
            h = s(C.label, C[`label__${i}`]),
            f =
                i === O.PROGRESSION
                    ? n.jsx(v, { classMix: h, text: d, binding: { progressionLevel: l } })
                    : n.jsx('span', { className: h, children: d }),
            S = (() => {
                switch (i) {
                    case O.PROGRESSION:
                        return {
                            label: D.readOrEmpty('battle_pass.tankmenVoiceover.chapterButton'),
                            handler: () => c.push(V.battlePass.progression, { chapterID: _ }),
                        };
                    case O.IN_SHOP:
                        return {
                            label: D.readOrEmpty('battle_pass.tankmenVoiceover.shopButton'),
                            handler: () => t.showShop(o),
                        };
                    default:
                        return null;
                }
            })();
        return n.jsxs('div', {
            className: s(C.base, C[`base__${i}`], a),
            children: [
                f,
                S &&
                    n.jsx(u, {
                        onClick: S.handler,
                        className: C.button,
                        theme: p.secondary,
                        size: r.buttonSize,
                        children: S.label,
                    }),
            ],
        });
    }),
    $ = {
        base: 'Skills_12e25c21',
        skill: 'Skills_skill_8dd2237b',
        skill__specificPerk: 'Skills_skill__specificPerk_9fedba',
        tooltip: 'Skills_tooltip_313e3831',
        zeroIcon: 'Skills_zeroIcon_907fac9b',
        icon: 'Skills_icon_f9b466d4',
        icon__new_skill: 'Skills_icon__new_skill_dfb9653d',
        divider: 'Skills_divider_693bc0a8',
        fadeInWithScale: 'Skills_fadeInWithScale_2c9d324a',
        slideUp: 'Skills_slideUp_2c9d324a',
        blink: 'Skills_blink_2c9d324a',
        scale: 'Skills_scale_2c9d324a',
        rotate: 'Skills_rotate_2c9d324a',
        windowIn: 'Skills_windowIn_2c9d324a',
        fadeOut: 'Skills_fadeOut_2c9d324a',
        fadeIn: 'Skills_fadeIn_2c9d324a',
    },
    L = d.resolve('images'),
    z = ({ skills: e, className: a }) => {
        const i = h(e, (e) => e.isZero);
        return n.jsx('div', {
            className: s($.base, a),
            children: c(e, (e, a) => {
                const { name: l, isZero: o } = e,
                    _ = l !== I,
                    c = a === i && !_;
                return n.jsxs(
                    t.Fragment,
                    {
                        children: [
                            n.jsx(f, {
                                contentId: R.views.mono.battle_pass.tooltips.crew_member_skill('resId'),
                                args: { name: l, isZero: o, hasZeroPerk: void 0 !== i },
                                children: n.jsxs('div', {
                                    className: s($.skill, _ && $.skill__specificPerk),
                                    children: [
                                        o && !_ && n.jsx('div', { className: $.zeroIcon }),
                                        n.jsx('div', {
                                            className: s($.icon, $[`icon__${l}`]),
                                            style: {
                                                backgroundImage: `url(${L.readOrEmpty(`battlePass.tankman.new_perks.icon_perk_${l}`)})`,
                                            },
                                        }),
                                    ],
                                }),
                            }),
                            c && n.jsx('div', { className: $.divider }),
                        ],
                    },
                    `${e.name}_${a}`,
                );
            }),
        });
    },
    A = {
        base: 'Voice_cd68eca5',
        icon: 'Voice_icon_a4c0c739',
        icon__speaker: 'Voice_icon__speaker_96c5b33',
        icon__wave0: 'Voice_icon__wave0_86731afb',
        base__animate: 'Voice_base__animate_d1a20ef1',
        wave0: 'Voice_wave0_d1a20ef1',
        icon__wave1: 'Voice_icon__wave1_a21172b8',
        wave1: 'Voice_wave1_d1a20ef1',
        icon__wave2: 'Voice_icon__wave2_8dd59152',
        wave2: 'Voice_wave2_d1a20ef1',
        label: 'Voice_label_5b3d7cf5',
        base__hover: 'Voice_base__hover_d1a20ef1',
        fadeInWithScale: 'Voice_fadeInWithScale_d1a20ef1',
        slideUp: 'Voice_slideUp_d1a20ef1',
        blink: 'Voice_blink_d1a20ef1',
        scale: 'Voice_scale_d1a20ef1',
        rotate: 'Voice_rotate_d1a20ef1',
        windowIn: 'Voice_windowIn_d1a20ef1',
        fadeOut: 'Voice_fadeOut_d1a20ef1',
        fadeIn: 'Voice_fadeIn_d1a20ef1',
    },
    B = d.resolve('strings'),
    W = (() => {
        const e = Math.ceil(P / 800);
        return { duration: 800, iterationCount: e, totalDuration: 800 * e };
    })(),
    H = ({ isHovered: e, isPlayingSound: a, className: t }) =>
        n.jsxs('div', {
            className: s(A.base, e && A.base__hover, a && A.base__animate, t),
            style: { '--animation-duration': `${W.duration}ms`, '--animation-iteration-count': W.iterationCount },
            children: [
                n.jsx('div', { className: s(A.icon, A.icon__speaker) }),
                Array.from({ length: 3 }, (e, a) =>
                    n.jsx('div', { className: s(A.icon, A[`icon__wave${a}`]) }, `wave${a}`),
                ),
                n.jsx('div', { className: A.label, children: B.readOrEmpty('battle_pass.tankmenVoiceover.listen') }),
            ],
        }),
    U = {
        base: 'Tankman_90661404',
        base__hover: 'Tankman_base__hover_ca952550',
        base__active: 'Tankman_base__active_9fe4dd8e',
        base__disabled: 'Tankman_base__disabled_9be07c52',
        interactiveContainer: 'Tankman_interactiveContainer_8be6d5d0',
        base__muted: 'Tankman_base__muted_ca952550',
        image: 'Tankman_image_2e7bae1e',
        content: 'Tankman_content_a12559ff',
        voice: 'Tankman_voice_a253f649',
        skills: 'Tankman_skills_771bfa6a',
        name: 'Tankman_name_eb347b56',
    },
    M = d.resolve('images'),
    G = ({ tankman: e, activeTankman: a, setActiveTankman: t }) => {
        const { groupName: l, fullName: o, hasVoiceover: _, skills: c } = e,
            r = Boolean(a) && a !== l,
            [d, b] = i.useState(!1),
            [m, k] = i.useState(!1),
            [v, u] = i.useState(!1);
        return (
            i.useEffect(() => {
                m && !r && _ && (b(!0), S.sound(R.sounds.bp_highlight()));
            }, [r, m, _]),
            n.jsxs('div', {
                className: s(
                    U.base,
                    r && U.base__disabled,
                    v && U.base__active,
                    d && U.base__hover,
                    !_ && U.base__muted,
                ),
                children: [
                    n.jsx('div', {
                        className: U.interactiveContainer,
                        onClick: () => {
                            v ||
                                r ||
                                !_ ||
                                (t(l),
                                u(!0),
                                S.sound(R.sounds.play()),
                                S.sound(l),
                                setTimeout(() => {
                                    (u(!1), t(''));
                                }, P));
                        },
                        onMouseEnter: () => {
                            !r && _ ? (b(!0), S.sound(R.sounds.bp_highlight())) : k(!0);
                        },
                        onMouseLeave: () => {
                            (b(!1), k(!1));
                        },
                        children: _ && n.jsx(H, { className: U.voice, isHovered: d, isPlayingSound: v }),
                    }),
                    n.jsx('div', {
                        className: U.image,
                        style: {
                            backgroundImage: `url(${M.readOrEmpty(`battlePass.tankman.persons.commander_${l}`)})`,
                        },
                    }),
                    n.jsxs('div', {
                        className: U.content,
                        children: [
                            c.length > 0 && n.jsx(z, { className: U.skills, skills: c }),
                            n.jsx('span', { className: U.name, children: o }),
                            n.jsx(E, { className: U.details, tankman: e }),
                        ],
                    }),
                ],
            })
        );
    },
    Z = 'Content_bd627888',
    F = 'Content_scrollWrapper_722ae7d9',
    q = 'Content_scrollWrapper__hasScroll_24bcd139',
    J = 'Content_scrollContent_bc619017',
    K = 'Content_scrollBar_66a66791',
    Q = a(({ className: e }) => {
        const {
                model: { computes: a },
            } = T(),
            s = a.getTankmenList(),
            [t, o] = i.useState(''),
            { api: _ } = w(),
            [c, r] = i.useState(!1),
            d = i.useCallback(() => {
                const [e, a] = _.getBounds();
                r(e !== a);
            }, [_]);
        return (
            i.useEffect(
                () => (
                    _.events.on('resizeHandled', d),
                    () => {
                        _.events.off('resizeHandled', d);
                    }
                ),
                [_.events, d],
            ),
            n.jsxs('div', {
                className: l(Z, e),
                children: [
                    n.jsx(N, {
                        classNames: { wrapper: l(F, c && q), content: J },
                        children: s.map((e, a) =>
                            n.jsx(G, { tankman: e, activeTankman: t, setActiveTankman: o }, `tankman-${a}`),
                        ),
                    }),
                    n.jsx(g, { classNames: { base: K } }),
                ],
            })
        );
    }),
    X = 'App_7603ab20',
    Y = 'App_content_927ebd71',
    ee = () => {
        const e = b();
        return (
            j(e.goBack),
            n.jsx('div', { className: X, children: n.jsx(x, { children: n.jsx(Q, { className: Y }) }) })
        );
    },
    ae = () => n.jsx(y, { options: { rootId: R.aliases.battle_pass.TankmenScreen('resId') }, children: n.jsx(ee, {}) });
export { ae as T, V as r };
