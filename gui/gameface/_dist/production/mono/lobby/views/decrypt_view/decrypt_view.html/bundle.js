import { r as e, j as a, m as s, s as t } from '../../../chunks/vendor.js';
import {
    i as r,
    C as i,
    B as n,
    J as o,
    S as c,
    F as l,
    o as d,
    q as _,
    e as m,
    aO as g,
    aj as u,
    m as p,
    p as f,
    a5 as h,
    a6 as x,
    a7 as b,
    u as T,
    k as y,
    Y as v,
    at as j,
    P as N,
} from '../../../chunks/lib.js';
import { S as k, E as F } from '../../../chunks/spring_wrapper.js';
import { V as w } from '../../../chunks/video_background.js';
import { h as W } from '../../../chunks/sound.js';
import { c as A, p as C, g as S, a as D, b as I } from '../../../chunks/utils2.js';
import { a as B, c as Q } from '../../../chunks/string-utils.js';
const [E, $] = r()(
        ({ observableModel: e }) => ({
            ...e.primitives(['id', 'name', 'index', 'selectedDifficulty', 'isMuted', 'isTransition']),
            rewards: e.array('rewards'),
            types: e.array('types'),
        }),
        ({ externalModel: e }) => ({
            affirmation: e.createCallbackNoArgs('onAffirmation'),
            muted: e.createCallbackNoArgs('onMuted'),
        }),
    ),
    L = 'ToggleButton_94bf2f8b',
    M = 'ToggleButton_overlay_8bf98e0f',
    O = 'ToggleButton_base__active_a46cdd59',
    q = 'ToggleButton_indicator_18fa845a',
    z = e.memo(function ({ active: e, className: t, classNames: r, children: c, size: l = o.small, ...d }) {
        return a.jsxs('div', {
            className: s(L, t, e && O),
            children: [
                a.jsx(i, { ...d, mixClass: null == r ? void 0 : r.button, type: n.secondary, size: l, children: c }),
                a.jsx('div', { className: s(M, null == r ? void 0 : r.overlay) }),
                a.jsx('div', { className: s(q, null == r ? void 0 : r.indicator) }),
            ],
        });
    }),
    P = 'Listen_2021016c',
    H = 'Listen_muteBtn_99f71881',
    V = 'Listen_muteIcon_80398762',
    J = 'Listen_listenLabel_5942fc2',
    U = e.memo(function ({ isActive: e, className: t, onClick: r }) {
        return a.jsxs('div', {
            className: s(P, t),
            children: [
                a.jsx(c, {
                    body: R.strings.last_stand_lobby.decrypt.voiceoverTooltip(),
                    children: a.jsx(z, {
                        classNames: { button: H },
                        active: e,
                        onClick: () => {
                            r();
                        },
                        children: a.jsx('div', { className: V }),
                    }),
                }),
                a.jsx('div', { className: J, children: R.strings.last_stand_lobby.decrypt.voiceover() }),
            ],
        });
    }),
    Y = {
        root: 'FormatTextWithTags_root_a9361a35',
        header: 'FormatTextWithTags_header_6baaa481',
        paragraph: 'FormatTextWithTags_paragraph_cf849c30',
        red: 'FormatTextWithTags_red_214b689c',
        white: 'FormatTextWithTags_white_867e220b',
        violet: 'FormatTextWithTags_violet_25111db2',
        blackReal: 'FormatTextWithTags_blackReal_b060137a',
        whiteReal: 'FormatTextWithTags_whiteReal_1f4d21bd',
        whiteOrange: 'FormatTextWithTags_whiteOrange_96934585',
        whiteSpanish: 'FormatTextWithTags_whiteSpanish_c40f8329',
        par: 'FormatTextWithTags_par_3703096b',
        parSecondary: 'FormatTextWithTags_parSecondary_ee5e2f3b',
        parTertiary: 'FormatTextWithTags_parTertiary_60d19137',
        redDark: 'FormatTextWithTags_redDark_f47c1278',
        yellow: 'FormatTextWithTags_yellow_55f96a18',
        orange: 'FormatTextWithTags_orange_8023cf0c',
        cream: 'FormatTextWithTags_cream_59dd6755',
        brown: 'FormatTextWithTags_brown_b07a572a',
        greenBright: 'FormatTextWithTags_greenBright_3d4a7038',
        green: 'FormatTextWithTags_green_60a03752',
        greenDark: 'FormatTextWithTags_greenDark_f47d0c2',
        blueBooster: 'FormatTextWithTags_blueBooster_73066b27',
        blueTeamkiller: 'FormatTextWithTags_blueTeamkiller_1f16d855',
        cred: 'FormatTextWithTags_cred_a616f5e5',
        gold: 'FormatTextWithTags_gold_29b1f581',
        bond: 'FormatTextWithTags_bond_865ee503',
        prom: 'FormatTextWithTags_prom_ad610099',
    },
    G = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
    K = new RegExp('(?<=(?:%\\(|{))(.*?)(?=(?:_[Oo]pen|Start))'),
    X = e.memo(function ({ text: s }) {
        const t = e.useMemo(() => {
            let e = 0;
            const t = {};
            return {
                replacedText: B(Q(s)).replace(G, (s, r = '') => {
                    const i = s.match(K);
                    if (!(null == i ? void 0 : i[1])) return (console.warn('No tag type found in:', s), r);
                    const n = i[1].toLowerCase();
                    if (!(n in Y)) return (console.warn(`Unknown tag type: ${n}`), r);
                    const o = 'tag_' + e++;
                    return ((t[o] = a.jsx('span', { className: Y[n], children: r || '' })), `%(${o})`);
                }),
                binding: t,
            };
        }, [s]);
        return a.jsx(l, { text: t.replacedText, binding: t.binding });
    }),
    Z = (e) => {
        const { children: s, isScrollActive: t } = e,
            r = d();
        return t ? a.jsx(_.Vertical.Area.Default, { ...e, api: r, children: s }) : s;
    },
    ee = 'Story_bd7b4662',
    ae = 'Story_scroll_f4a8dff0',
    se = 'Story_text_56e819f1',
    te = 'Story_bar_19d07bb5',
    re = e.memo(function ({ artefactId: t, className: r }) {
        const i = e.useRef(null),
            n = e.useRef(null),
            [o, c] = e.useState(!1),
            l = e.useCallback(() => {
                if (n.current && i.current) {
                    const e = i.current.offsetHeight,
                        a = n.current.offsetHeight;
                    c(e < a);
                }
            }, []);
        return (
            e.useEffect(() => m(l), [l]),
            g(l, [l]),
            a.jsx('div', {
                className: s(ee, r),
                children: a.jsx('div', {
                    className: ae,
                    ref: i,
                    children: a.jsx(Z, {
                        isScrollActive: o,
                        barClassNames: { base: te },
                        children: a.jsx('div', {
                            className: se,
                            ref: n,
                            children: a.jsx(X, { text: R.strings.last_stand_lobby.meta.story.$dyn(t) }),
                        }),
                    }),
                }),
            })
        );
    }),
    ie = 'QuestInfo_e2e1ffa0',
    ne = 'QuestInfo_bg_71fbe199',
    oe = 'QuestInfo_name_1ec46db9',
    ce = 'QuestInfo_index_5261596',
    le = 'QuestInfo_kingReward_1cd9db98',
    de = 'QuestInfo_status_e118c583',
    _e = 'QuestInfo_rewards_d5d683c3',
    me = 'QuestInfo_reward_8f34da49',
    ge = 'QuestInfo_voiceover_f679972',
    ue = 'QuestInfo_description_ba074c8e',
    pe = 800,
    fe = 120,
    he = 1100,
    xe = { from: { opacity: 0, y: -5 } },
    be = t(({ className: e, skipAnim: t }) => {
        const { model: r, controls: i } = $(),
            n = r.id.get(),
            o = r.rewards.get();
        return a.jsxs('div', {
            className: s(ie, e),
            children: [
                a.jsx('div', { className: ne }),
                a.jsx(k, {
                    ...xe,
                    duration: pe,
                    delay: 500,
                    isCanceled: t,
                    children: a.jsxs('div', {
                        className: oe,
                        children: [
                            a.jsx('div', {
                                className: ce,
                                children: u(r.types.get(), 'final')
                                    ? a.jsx('div', { className: le })
                                    : A(r.index.get()),
                            }),
                            r.name.get(),
                        ],
                    }),
                }),
                a.jsx(k, {
                    ...xe,
                    duration: pe,
                    delay: 700,
                    isCanceled: t,
                    children: a.jsx('div', { className: de, children: R.strings.last_stand_lobby.decrypt.completed() }),
                }),
                a.jsx('div', {
                    className: _e,
                    children: p(o, (e, s) =>
                        a.jsx(
                            'div',
                            {
                                className: me,
                                children: a.jsx(k, {
                                    ...xe,
                                    duration: pe,
                                    delay: he + fe * s,
                                    easingType: F.EaseOutBack,
                                    isCanceled: t,
                                    onStart: () => f.sound(W),
                                    children: a.jsx(h, {
                                        name: e.name,
                                        value: S(e),
                                        size: x.Small,
                                        special: e.overlayType,
                                        image: D(e, x.Small),
                                        valueType: b(e.name),
                                        tooltipArgs: I(e),
                                    }),
                                }),
                            },
                            `${e.name}${s}`,
                        ),
                    ),
                }),
                a.jsx(k, {
                    ...xe,
                    duration: pe,
                    delay: he + o.length * fe,
                    isCanceled: t,
                    children:
                        u(r.types.get(), 'sound') &&
                        a.jsx(U, { className: ge, isActive: !r.isMuted.get(), onClick: i.muted }),
                }),
                a.jsx(k, {
                    from: { opacity: 0 },
                    duration: 1600,
                    delay: he + o.length * fe * 2,
                    isCanceled: t,
                    children: a.jsx(re, { className: ue, artefactId: C(n) }),
                }),
            ],
        });
    }),
    Te = 'DecryptApp_9d6b3505',
    ye = 'DecryptApp_closeBtn_2548be01',
    ve = 'DecryptApp_container_63c20cf2',
    je = 'DecryptApp_background_5fdb458c',
    Ne = 'DecryptApp_video_459fd0c9',
    ke = 'DecryptApp_vignetteBg_f4ced471',
    Fe = 'DecryptApp_questInfo_29639fc',
    we = 'DecryptApp_buttons_cc6ba164',
    We = 'DecryptApp_button_3981a831',
    Ae = R.strings.last_stand_lobby.decrypt,
    Ce = t(() => {
        const { model: t, controls: r } = $(),
            [c, l] = e.useState(!1),
            d = u(t.types.get(), 'video');
        (T(y.ESCAPE, r.affirmation), T(y.ENTER, r.affirmation));
        const _ = t.index.get(),
            m = `bg_${_}`;
        return a.jsxs('div', {
            className: s(Te),
            onClick: () => l(!0),
            children: [
                a.jsx(v, {
                    classNames: { base: ye },
                    caption: R.strings.last_stand_lobby.common.close(),
                    type: 'close',
                    side: 'right',
                    onClick: r.affirmation,
                }),
                a.jsx('div', {
                    className: ve,
                    children:
                        !d || j.isLow()
                            ? a.jsx('div', {
                                  className: je,
                                  style: {
                                      backgroundImage: `url('R.images.last_stand.gui.maps.icons.backgrounds.decrypt.${m}')`,
                                  },
                              })
                            : a.jsx(w, {
                                  onPlay: () => {
                                      f.sound(`ev_last_stand_quantum${_}_video_start`);
                                  },
                                  src: R.videos.last_stand.quants.$dyn(m),
                                  className: Ne,
                              }),
                }),
                a.jsx('div', { className: ke }),
                a.jsx(be, { className: Fe, skipAnim: c }),
                a.jsx('div', {
                    className: we,
                    children: a.jsx(k, {
                        from: { opacity: 0, y: 5 },
                        className: We,
                        duration: pe,
                        delay: he + t.rewards.get().length * fe * 5,
                        isCanceled: c,
                        children: a.jsx(i, {
                            type: n.primary,
                            size: o.medium,
                            onClick: r.affirmation,
                            isFocused: !0,
                            children: t.isTransition.get() ? Ae.continue() : Ae.affirmative(),
                        }),
                    }),
                }),
            ],
        });
    });
N(a.jsx(E, { children: a.jsx(Ce, {}) }));
