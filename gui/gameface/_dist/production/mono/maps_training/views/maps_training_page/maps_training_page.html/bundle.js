import { j as e, e as a, r as t, q as s } from '../../../chunks/vendor.js';
import {
    i,
    c as n,
    r as o,
    u as r,
    a as l,
    t as c,
    p as d,
    o as _,
    b as m,
    d as p,
    g as u,
    e as h,
    f as b,
    m as g,
    h as v,
    j as f,
    k as x,
    l as j,
    F as M,
    I as N,
    n as S,
    q as y,
    s as C,
    R as E,
    T as k,
    v as w,
    w as I,
    x as T,
    S as O,
    y as $,
    B as L,
    z as P,
    U as B,
    A,
    C as z,
    D as G,
    E as H,
    G as V,
    H as F,
    J as K,
    K as D,
    L as W,
    M as U,
    N as Z,
} from '../../../chunks/lib.js';
const q = 'disabled',
    [Q, J] = i()(
        ({ observableModel: e }) => {
            const a = {
                    ...e.primitives([
                        'isMapSelected',
                        'incompleteFilter',
                        'titleFilter',
                        'isDataLoaded',
                        'modeName',
                        'modeId',
                    ]),
                    selectedMapModel: e.object('selectedMapModel'),
                    vehicleMarker: e.object('vehicleMarker'),
                    maps: e.arrayClone('maps'),
                    groups: e.arrayClone('groups'),
                    menuItems: e.arrayClone('menuItems'),
                },
                t = (e, a) => {
                    if (e.isEnabled === a.isEnabled) {
                        const t = e.isCompleted ? 1 : 0,
                            s = a.isCompleted ? 1 : 0;
                        return t !== s && e.isEnabled
                            ? t > s
                                ? 1
                                : -1
                            : ((e, a) => String(e.title).localeCompare(String(a.title)))(e, a);
                    }
                    return ((e, a) => (e.isEnabled < a.isEnabled ? 1 : -1))(e, a);
                };
            return {
                ...a,
                sortedMaps: n.shallow((e, s) =>
                    a.maps
                        .get()
                        .filter((a) => {
                            const t = a,
                                i = !e || !t.isCompleted,
                                n = t.title,
                                o =
                                    '' === s ||
                                    (n &&
                                        Boolean(
                                            String(n).match(new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')),
                                        ));
                            return i && o;
                        })
                        .sort(t),
                ),
            };
        },
        ({ externalModel: e }) => ({
            back: e.createCallbackNoArgs('onBack'),
            select: e.createCallback((e) => ({ id: e }), 'onSelect'),
            scenarioSelect: e.createCallback((e) => ({ id: e }), 'onScenarioSelect'),
            filteringChange: e.createCallback((e, a) => ({ incomplete: e, title: a }), 'onFilteringChange'),
            blurRectUpdated: e.createCallback(
                (e, a, t, s) => ({ top: e, left: a, right: t, bottom: s }),
                'onBlurRectUpdated',
            ),
            infoClicked: e.createCallbackNoArgs('onInfoClicked'),
            close: e.createCallbackNoArgs('onClose'),
            navigate: e.createCallback((e) => ({ name: e }), 'onNavigate'),
            sceneWrapper: {
                moveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                mouseOver3dScene: e.createCallback((e) => e, 'onMouseOver3dScene'),
            },
        }),
    ),
    X = 'modeSelector',
    Y = 'achievements',
    ee = 'tournament',
    ae = {
        root: 'MenuItem_root_28be5e00',
        base: 'MenuItem_862e4b38',
        base__modeSelectorName: 'MenuItem_base__modeSelectorName_28be5e00',
        base__enabledState: 'MenuItem_base__enabledState_6f88d3d1',
        modeSelector: 'MenuItem_modeSelector_1c338d85',
        modeIcon: 'MenuItem_modeIcon_1db29b3c',
        label: 'MenuItem_label_3cf912d3',
        base__disabledState: 'MenuItem_base__disabledState_28be5e00',
        titleWrapper: 'MenuItem_titleWrapper_cf46ff6b',
        title: 'MenuItem_title_dd56437b',
        arrow: 'MenuItem_arrow_d310b413',
        arrow__verticalCenter: 'MenuItem_arrow__verticalCenter_4e18b706',
        modeName: 'MenuItem_modeName_36c0339e',
    },
    te = o.resolve('strings'),
    se = {
        [X]: {
            header: te.readOrEmpty('tooltips.header.battleType.header'),
            body: te.readOrEmpty('tooltips.header.battleType.body'),
        },
        [ee]: {
            header: te.readOrEmpty('tooltips.header.buttons.tournaments.header'),
            body: te.readOrEmpty('tooltips.header.buttons.tournaments.body'),
        },
        [Y]: {
            header: te.readOrEmpty('tooltips.header.buttons.profile.header'),
            body: te.readOrEmpty('tooltips.header.buttons.profile.body'),
        },
    };
function ie(e) {
    return te.readOrEmpty(`menu.headerButtons.${e}`);
}
function ne(e) {
    return 'string' == typeof e ? c(e) : e;
}
function oe({
    name: t,
    state: s,
    modeName: i,
    modeId: n,
    modeIcon: o,
    onClick: c,
    title: _,
    withTooltip: m = !0,
    withArrow: p = !1,
    className: u,
}) {
    const h = r() >= 2;
    const b = l(
        (function (e, a) {
            const t = se[e];
            return { header: a ? (t?.header ?? '') : '', body: a ? (t?.body ?? '') : '', disabled: !a };
        })(t, m),
    );
    return e.jsx('div', {
        className: a(ae.base, ae[`base__${s}State`], ae[`base__${t}Name`], u),
        ...b,
        onMouseEnter: (e) => {
            (b.onMouseEnter?.(e), s !== q && d.sound('highlight'));
        },
        onClick: function () {
            s !== q && c(t);
        },
        lang: R.strings.settings.LANGUAGE_CODE(),
        children:
            t === X
                ? e.jsxs(e.Fragment, {
                      children: [
                          e.jsxs('div', {
                              className: ae.modeSelector,
                              children: [
                                  e.jsx('div', {
                                      className: a(ae.label, h && ae.label__upscale),
                                      children: ne(_ || ie(t)),
                                  }),
                                  i && e.jsx('div', { className: ae.modeName, children: ne(i) }),
                                  e.jsx('div', {
                                      className: ae.modeIcon,
                                      style: {
                                          backgroundImage: `url(${o ?? `R.images.gui.maps.icons.battleTypes.c_64x64.${n}`})`,
                                      },
                                  }),
                              ],
                          }),
                          e.jsx('svg', {
                              className: a(ae.arrow, h && ae.arrow__upscale),
                              width: '7',
                              height: '18',
                              viewBox: '0 0 7 18',
                              fill: 'none',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: e.jsx('path', {
                                  d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                                  fill: '#eeede9',
                                  fillOpacity: '0.9',
                              }),
                          }),
                      ],
                  })
                : e.jsxs('div', {
                      className: ae.titleWrapper,
                      children: [
                          e.jsx('div', { className: ae.title, children: ne(_ || ie(t)) }),
                          p &&
                              e.jsx('svg', {
                                  className: a(ae.arrow, ae.arrow__verticalCenter),
                                  width: '7',
                                  height: '18',
                                  viewBox: '0 0 7 18',
                                  fill: 'none',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: e.jsx('path', {
                                      d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                                      fill: '#eeede9',
                                      fillOpacity: '0.9',
                                  }),
                              }),
                      ],
                  }),
    });
}
const re = {
    root: 'Tooltip_root_648bdb8d',
    base: 'Tooltip_d6454088',
    base__left: 'Tooltip_base__left_9ad90f1d',
    base__teamPoint: 'Tooltip_base__teamPoint_bae63392',
    base__top: 'Tooltip_base__top_11f48f50',
    base__visible: 'Tooltip_base__visible_69ef4f3f',
    image: 'Tooltip_image_af622229',
};
function le({ image: t, isLeft: s, isTop: i, isTeamPoint: n, isVisible: o }) {
    return e.jsx('div', {
        className: a(
            re.base,
            re['base__' + (s ? 'left' : 'right')],
            n && re.base__teamPoint,
            i && re.base__top,
            o && re.base__visible,
        ),
        children: e.jsx('div', { className: re.image, style: { backgroundImage: `url(${t})` } }),
    });
}
const ce = {
        root: 'Point_root_d8b7e333',
        base: 'Point_8a5de05a',
        title: 'Point_title_41667fa8',
        base__enemyBase: 'Point_base__enemyBase_d8b7e333',
        base__main: 'Point_base__main_d8b7e333',
        base__left: 'Point_base__left_d8b7e333',
        base__point: 'Point_base__point_d8b7e333',
        base__hover: 'Point_base__hover_d8b7e333',
        text: 'Point_text_77acf975',
        bullet: 'Point_bullet_aedfa7e4',
        bulletTeamPointBG: 'Point_bulletTeamPointBG_88bf7cc6',
        teamLabel: 'Point_teamLabel_b2bb7afb',
        teamLabel__mask: 'Point_teamLabel__mask_8fd6388a',
    },
    de = o.resolve('strings'),
    _e = (e) => (e / 5.7) * 3.32;
function me({
    id: s,
    isLeft: i,
    type: n,
    positionX: o,
    positionY: r,
    tooltipImage: l,
    isSmall: c,
    isShowTooltip: h,
    index: b,
    isHighlighted: g,
    onPointEvent: v,
}) {
    const f = t.useRef(0),
        [x, j] = t.useState(g),
        { model: M } = J(),
        N = M.selectedMapModel.get().id,
        S = 'point' !== n,
        y = !S || Boolean(l),
        C = t.useRef(null),
        E = t.useRef(!0),
        [k, w] = t.useState(window.innerHeight),
        I = function () {
            !y || (x && f.current) || (d.highlight(), j(!0), v(s, !0));
        };
    function T() {
        if (!C.current) return;
        const { top: e } = C.current.getBoundingClientRect();
        E.current = e - viewEnv.remToPx(270) > 70;
    }
    (t.useEffect(function () {
        function e() {
            const e = u('rem');
            w(e.height);
        }
        e();
        const a = _(e),
            t = m(e);
        return () => {
            (clearTimeout(f.current), a(), t());
        };
    }, []),
        t.useEffect(
            function () {
                return p(T);
            },
            [k],
        ));
    const O = S
            ? de.readOrEmpty('maps_training.mapSelection.options.minimapBase')
            : de.readOrEmpty(`maps_training.c_${N}.${s}`),
        $ = b + 1;
    return e.jsxs('div', {
        className: a(ce.base, ce[`base__${n}`], i ? ce.base__left : ce.base__right, (x || g) && ce.base__hover),
        style: (function () {
            const e = c ? _e(o) : o;
            return { top: `${c ? _e(r) : r}rem`, left: `${e}rem` };
        })(),
        ref: C,
        children: [
            S && e.jsx('div', { className: ce.bulletTeamPointBG }),
            e.jsxs('div', {
                onMouseEnter: function () {
                    f.current = window.setTimeout(I, 100);
                },
                onMouseLeave: function () {
                    if (y && (x || f.current)) {
                        const e = f.current;
                        (e > 0 && (clearTimeout(e), (f.current = 0)), j(!1), v(s, !1));
                    }
                },
                children: [
                    e.jsxs('div', {
                        className: ce.bullet,
                        children: [
                            S && e.jsx('div', { className: ce.teamLabel, children: $ }),
                            'main' === n &&
                                e.jsx('div', { className: a(ce.teamLabel, ce.teamLabel__mask), children: $ }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: ce.title,
                        children: [
                            O,
                            h &&
                                e.jsx(le, { image: l, isLeft: i, isTeamPoint: S, isTop: E.current, isVisible: x || g }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
const pe = 'Minimap_56313038',
    ue = 'Minimap_scenario_d0d9ef72',
    he = 'Minimap_bg_85adfa16';
function be(e, a) {
    return { backgroundImage: `url(${e})`, width: `${a}rem`, height: `${a}rem` };
}
const ge = s(function ({ highlightedPoint: a, onPointEvent: t }) {
        const { model: s } = J(),
            { id: i, points: n, scenarioImage: o } = s.selectedMapModel.get(),
            { breakpoint: r } = h(),
            l = r.weight < b.medium.weight,
            c = l ? 332 : 570;
        return e.jsxs('div', {
            className: pe,
            style: be(`img://spaces/${i}/mmap.dds`, c),
            children: [
                e.jsx('div', { className: he }),
                e.jsx('div', { className: ue, style: be(o, c) }),
                g(n, (s, i) =>
                    e.jsx(
                        me,
                        { isSmall: l, index: i, onPointEvent: t, isHighlighted: a === s.id, ...s },
                        `point_${s.id}`,
                    ),
                ),
            ],
        });
    }),
    ve = 'Info_80cc32c',
    fe = 'Info_icon_7889eaa8',
    xe = 'Info_text_55959f92',
    je = o.resolve('strings');
function Me({ id: a, header: t }) {
    const s = l({ header: t, body: je.readOrEmpty(`arenas.c_${a}.description`) });
    return e.jsxs('div', {
        className: ve,
        ...s,
        onMouseEnter: (e) => {
            (s.onMouseEnter(e), d.highlight());
        },
        children: [
            e.jsx('div', { className: fe }),
            e.jsx('div', { className: xe, children: je.readOrEmpty('maps_training.descriptionInfo') }),
        ],
    });
}
const Ne = 'TextKey_583f19c3',
    Se = 'TextKey_content_954e2172',
    ye = 'TextKey_base__highlight_591e8197',
    Ce = 'TextKey_bullet_3d33d938';
function Ee({ textKey: t, pointId: s, isHighlighted: i, onMouseEnter: n, onMouseLeave: o, value: r, punctuation: l }) {
    return e.jsxs('div', {
        className: a(Ne, i && ye),
        children: [
            e.jsxs('div', {
                className: Se,
                onMouseEnter: () => n(t, s),
                onMouseLeave: () => o(t, s),
                children: [e.jsx('div', { className: Ce }), r],
            }),
            l,
        ],
    });
}
const ke = 'ScenarioInfo_b19f2c76',
    we = 'ScenarioInfo_shadow_22e6654b',
    Ie = 'ScenarioInfo_baseTitle_f08f6c2f',
    Te = 'ScenarioInfo_title_934c522d',
    Oe = 'ScenarioInfo_tacticTitle_aa75be90',
    $e = 'ScenarioInfo_tacticDescr_b6c38411',
    Le = 'ScenarioInfo_paragraph_3d99fe50',
    Pe = o.resolve('strings'),
    Be = o.resolve('intl'),
    Re = /<([A-Za-z][A-Za-z0-9_]*)>.*?<\/\1>/g,
    Ae = new RegExp('(?<=<).*?(?=>)'),
    ze = new RegExp('(?<=>).*(?=<)'),
    Ge = /%\([A-Za-z0-9_]*\)s[.,?!;:] ?/g,
    He = /%\([A-Za-z0-9_]*\)(?![sd])/g,
    Ve = /[.,?!;:] ?/g,
    Fe = s(function ({ highlightedPoint: a, onKeywordEvent: s }) {
        const [i, n] = t.useState(''),
            { model: o } = J(),
            { id: r, selectedScenario: l, points: c, scenarios: _ } = o.selectedMapModel.get(),
            m = v(_, l),
            p = Pe.readOrEmpty(`arenas.c_${r}.name`),
            u = Be.toUpperCase(p),
            h = t.useMemo(
                function () {
                    const { team: e, scenarioNum: a, vehicleType: t } = m,
                        s = f(Pe.readOrEmpty('maps_training.baseNum'), { base: e }),
                        i = f(Pe.readOrEmpty('maps_training.scenarioNum'), { scenario: a });
                    return f(Pe.readOrEmpty('maps_training.scenario.baseTitle'), {
                        scenario: i,
                        vehicle: Pe.readOrEmpty(`maps_training.vehicleType.${t}`),
                        team: x(s),
                    });
                },
                [m],
            ),
            b = t.useCallback(
                function (e, a) {
                    (d.highlight(), n(e), s(a, !0));
                },
                [s],
            ),
            g = t.useCallback(
                function (e, a) {
                    (n(''), s(a, !1));
                },
                [s],
            ),
            [N, S, y] = t.useMemo(
                function () {
                    let e = Pe.readOrEmpty(`maps_training.c_${r}.team${m.team}.${m.vehicleType}.descr`);
                    e = e.replace(He, '$&s');
                    const a = {},
                        t = e.match(Re);
                    t &&
                        t.forEach((t, s) => {
                            const [i] = t.match(Ae) || [''],
                                [n] = t.match(ze) || [''],
                                o = `matched${s}`;
                            ((a[o] = [i, n]), (e = e.replace(t, `%(${o})s`)));
                        });
                    const s = {},
                        i = e.match(Ge);
                    return (
                        i &&
                            i.forEach((a) => {
                                const [t] = a.match(Ve) || [''],
                                    i = a.slice(2, a.length - 2 - t.length);
                                ((s[i] = t), (e = e.replace(a, a.slice(0, a.length - t.length))));
                            }),
                        [e, a, s]
                    );
                },
                [r, m],
            ),
            C = t.useMemo(
                function () {
                    const t = { p: e.jsx('div', { className: Le }) };
                    return (
                        j(c, (s) => {
                            const n = s.id;
                            j(s.textKeys, (s) => {
                                t[s] = e.jsx(
                                    Ee,
                                    {
                                        value: Pe.readOrEmpty(`maps_training.c_${r}.${s}`),
                                        pointId: n,
                                        textKey: s,
                                        punctuation: y[s],
                                        isHighlighted: i === s || a === n,
                                        onMouseEnter: b,
                                        onMouseLeave: g,
                                    },
                                    `${l}_${s}`,
                                );
                            });
                        }),
                        Object.entries(S).forEach(([s, [n, o]]) => {
                            t[s] = e.jsx(
                                Ee,
                                {
                                    value: o,
                                    pointId: n,
                                    textKey: s,
                                    punctuation: y[s],
                                    isHighlighted: i === s || a === n,
                                    onMouseEnter: b,
                                    onMouseLeave: g,
                                },
                                `${l}_${s}`,
                            );
                        }),
                        t
                    );
                },
                [c, S, y, l, i, a, b, g, r],
            );
        return e.jsxs('div', {
            className: ke,
            children: [
                e.jsx('div', { className: we }),
                e.jsx('div', { className: Ie, children: h }),
                e.jsx('div', { className: Te, children: u }),
                e.jsx('div', {
                    className: Oe,
                    children: Pe.readOrEmpty(`maps_training.c_${r}.team${m.team}.${m.vehicleType}.title`),
                }),
                e.jsx('div', {
                    className: $e,
                    children: e.jsx(M, { text: N, params: C, upgradeLegacy: !0, split: !0 }),
                }),
                e.jsx(Me, { id: r, header: p }),
            ],
        });
    }),
    Ke = {
        base: 'ScenarioRewards_61c38a7d',
        rewards: 'ScenarioRewards_rewards_cf548827',
        title: 'ScenarioRewards_title_d8c2d359',
        shine: 'ScenarioRewards_shine_3e53614c',
        rewardClassMix: 'ScenarioRewards_rewardClassMix_4167dff2',
    },
    De = o.resolve('strings');
function We() {
    const { model: a } = J(),
        s = a.selectedMapModel.get().rewards,
        { screenWidthRem: i } = h(),
        n = i < b.medium.width ? N.Small : N.Big,
        o = t.useMemo(
            function () {
                return g(s, (e) => {
                    const { name: a, value: t, tooltipId: s, tooltipContentId: i } = e;
                    return {
                        name: a,
                        image: C(e, n),
                        value: t,
                        valueType: y(a),
                        tooltipArgs: S(
                            { tooltipId: s },
                            Number(i) ||
                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                        ),
                    };
                });
            },
            [n, s],
        );
    return e.jsx('div', {
        className: Ke.base,
        children:
            s.length > 0 &&
            e.jsxs(e.Fragment, {
                children: [
                    e.jsx('div', { className: Ke.arrow }),
                    e.jsxs('div', {
                        className: Ke.rewards,
                        children: [
                            e.jsx('div', { className: Ke.shine }),
                            e.jsx('div', {
                                className: Ke.title,
                                children: De.readOrEmpty('maps_training.mapSelection.options.rewardsTitle'),
                            }),
                            e.jsx(E, { data: o, size: n, rewardItemClassMix: Ke.rewardClassMix }),
                        ],
                    }),
                ],
            }),
    });
}
const Ue = 'ScenarioCard_ce43d9d5',
    Ze = 'ScenarioCard_base__selected_2f057ace',
    qe = 'ScenarioCard_card_71406647',
    Qe = 'ScenarioCard_base__completed_cc1adb57',
    Je = 'ScenarioCard_base__hover_cc1adb57',
    Xe = 'ScenarioCard_borderShine_2675039f',
    Ye = 'ScenarioCard_borderShine__bottom_28816297',
    ea = 'ScenarioCard_selectedOverlay_ee536659',
    aa = 'ScenarioCard_shine_8e6c402e',
    ta = 'ScenarioCard_title_6b61c9ef',
    sa = 'ScenarioCard_rewards_a3b83018',
    ia = 'ScenarioCard_base__anim_cc1adb57',
    na = 'ScenarioCard_completed_cf825958',
    oa = 'ScenarioCard_checkmark_44ed786',
    ra = o.resolve('strings');
function la({
    scenarioNum: s,
    vehicleType: i,
    isSelected: n,
    index: o,
    rewards: r,
    isComplete: l,
    isShowCompleteAnimation: c,
}) {
    const { controls: _ } = J(),
        [m, p] = t.useState(!1);
    t.useEffect(
        function () {
            l && c && d.sound(R.sounds.mt_anim_scenario_complete());
        },
        [l, c],
    );
    const u = t.useMemo(
            function () {
                return g(r, (e) => {
                    const { name: a, value: t, tooltipId: s, tooltipContentId: i } = e;
                    return {
                        name: a,
                        value: t,
                        image: C(e),
                        valueType: y(a),
                        tooltipArgs: S(
                            { tooltipId: s },
                            Number(i) ||
                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                        ),
                    };
                });
            },
            [r],
        ),
        h = f(ra.readOrEmpty('maps_training.scenarioNum'), { scenario: s }),
        b = t.useMemo(
            function () {
                return { scenario: o };
            },
            [o],
        );
    return e.jsxs('div', {
        className: a(Ue, l && Qe, n && Ze, m && !n && Je, l && c && ia),
        onClick: function () {
            n || (d.click(), _.scenarioSelect(o));
        },
        onMouseEnter: function () {
            (d.highlight(), p(!0));
        },
        onMouseLeave: function () {
            p(!1);
        },
        children: [
            e.jsx(k, {
                ignoreMouseClick: !0,
                ignoreShowDelay: !0,
                contentId: R.views.mono.maps_training.scenario_tooltip('resId'),
                args: b,
                children: e.jsxs('div', {
                    className: qe,
                    lang: ra.readOrEmpty('settings.LANGUAGE_CODE'),
                    children: [
                        n &&
                            e.jsxs(e.Fragment, {
                                children: [e.jsx('div', { className: ea }), e.jsx('div', { className: aa })],
                            }),
                        e.jsx('div', { className: Xe }),
                        e.jsx('div', { className: a(Xe, Ye) }),
                        e.jsx('div', { className: ta, children: h }),
                        e.jsx('div', { className: ta, children: ra.readOrEmpty(`maps_training.vehicleType.${i}`) }),
                        l &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx('div', {
                                        className: na,
                                        children: ra.readOrEmpty(
                                            'maps_training.mapSelection.options.scenarioCompleted',
                                        ),
                                    }),
                                    e.jsx('div', { className: oa }),
                                ],
                            }),
                    ],
                }),
            }),
            (!l || c) && e.jsx('div', { className: sa, children: e.jsx(E, { data: u, size: N.Small }) }),
        ],
    });
}
const ca = 'Scenarios_638d959b',
    da = s(function () {
        const { model: a } = J(),
            { scenarios: t, selectedScenario: s, isShowCompleteAnimation: i } = a.selectedMapModel.get();
        return e.jsx('div', {
            className: ca,
            children: g(t, (a, t) =>
                e.jsx(
                    la,
                    { isSelected: t === s, index: t, isShowCompleteAnimation: i && t === s, ...a },
                    `scenario_${a.team}_${a.vehicleType}`,
                ),
            ),
        });
    }),
    _a = {
        root: 'VehicleMarker_root_20624c4',
        base: 'VehicleMarker_516481a7',
        fadeIn: 'VehicleMarker_fadeIn_20624c4',
        vehicle: 'VehicleMarker_vehicle_c8d4fd9b',
        vehicle__mediumTank: 'VehicleMarker_vehicle__mediumTank_333918a',
        vehicle__heavyTank: 'VehicleMarker_vehicle__heavyTank_dd54eecd',
        title: 'VehicleMarker_title_29df78cd',
        descr: 'VehicleMarker_descr_e2b83108',
        info: 'VehicleMarker_info_6781f30a',
    },
    ma = o.resolve('strings'),
    pa = s(function () {
        const { model: t } = J(),
            s = t.vehicleMarker.get().top,
            { vehicleName: i, selectedScenario: n, scenarios: o } = t.selectedMapModel.get(),
            { screenWidthRem: r } = h(),
            c = r < b.medium.width ? 20 : 0,
            { vehicleType: _ } = v(o, n),
            m = l({
                header: ma.readOrEmpty(`maps_training.vehicleMarker.${_}.tooltip.title`),
                body: ma.readOrEmpty(`maps_training.vehicleMarker.${_}.tooltip.body`),
            });
        return e.jsxs('div', {
            className: _a.base,
            style: { transform: 'translate(-50%, ' + Math.max(s - c, 0) + 'rem)' },
            children: [
                e.jsx('div', { className: a(_a.vehicle, _a[`vehicle__${_}`]) }),
                e.jsx('div', { className: _a.title, children: i }),
                e.jsxs('div', {
                    className: _a.descr,
                    children: [
                        ma.readOrEmpty(`maps_training.vehicleMarker.${_}.descr`),
                        e.jsx('div', {
                            className: _a.info,
                            ...m,
                            onMouseEnter: (e) => {
                                (m.onMouseEnter(e), d.highlight());
                            },
                        }),
                    ],
                }),
            ],
        });
    }),
    ua = 'MapOptions_ce83a9ee',
    ha = 'MapOptions_topPanel_ce2d0924',
    ba = 'MapOptions_leftPanel_6743a995',
    ga = 'MapOptions_sceneWrapper_9de28b9c',
    va = 'MapOptions_marker_975481e1',
    fa = 'MapOptions_rightPanel_f88edffc',
    xa = 'MapOptions_bottomPanel_a1410d79',
    ja = 'MapOptions_bottomPanelTitle_ae5b3b6f',
    Ma = 'MapOptions_menuItems_764d3737',
    Na = o.resolve('strings');
function Sa() {
    const { controls: a } = J(),
        { breakpoint: s } = h(),
        [i, n] = t.useState(''),
        [o, r] = t.useState(''),
        l = w(function (e) {
            a.sceneWrapper.mouseOver3dScene(e);
        }),
        c = w(function (e) {
            a.sceneWrapper.moveSpace(e);
        });
    I(T.ESCAPE, a.back);
    const d = t.useCallback(function (e, a) {
            n(a ? e : '');
        }, []),
        p = t.useCallback(function (e, a) {
            r(a ? e : '');
        }, []);
    return (
        t.useLayoutEffect(() => {
            function e() {
                const e = u('rem');
                a.blurRectUpdated(
                    e.height - ((e) => (e.weight >= b.large.weight ? 219 : e.weight >= b.medium.weight ? 213 : 195))(s),
                    0,
                    e.width,
                    e.height,
                );
            }
            e();
            const t = _(e),
                i = m(e);
            return () => {
                (t(), i());
            };
        }, [a, s]),
        e.jsxs('div', {
            className: ua,
            children: [
                e.jsx('div', { className: ha }),
                e.jsx('div', { className: ga, children: e.jsx(O, { moveSpace: c, onMouseOver3dScene: l }) }),
                e.jsx('div', { className: va, children: e.jsx(pa, {}) }),
                e.jsx('div', {
                    className: Ma,
                    children: e.jsx(oe, {
                        name: 'mapsTraining',
                        state: 'enabled',
                        title: Na.readOrEmpty('maps_training.mapSelection.options.backGoto'),
                        onClick: a.back,
                        withArrow: !0,
                        withTooltip: !1,
                    }),
                }),
                e.jsx('div', { className: ba, children: e.jsx(Fe, { highlightedPoint: i, onKeywordEvent: p }) }),
                e.jsxs('div', {
                    className: xa,
                    children: [
                        e.jsx('div', {
                            className: ja,
                            children: Na.readOrEmpty('maps_training.mapSelection.options.scenariosTitle'),
                        }),
                        e.jsx(da, {}),
                        e.jsx(We, {}),
                    ],
                }),
                e.jsx('div', { className: fa, children: e.jsx(ge, { onPointEvent: d, highlightedPoint: o }) }),
            ],
        })
    );
}
const ya = {
        root: 'InfoButton_root_c58f1a93',
        border: 'InfoButton_border_f3a2eae1',
        base: 'InfoButton_74c97479',
        base__smallSize: 'InfoButton_base__smallSize_c40e1b5c',
        base__mediumSize: 'InfoButton_base__mediumSize_f347ecd3',
        content: 'InfoButton_content_1cc251f9',
        label: 'InfoButton_label_7fc8e38b',
        icon: 'InfoButton_icon_c58f1a93',
    },
    Ca = { small: 'small', medium: 'medium' },
    Ea = { [Ca.small]: 16, [Ca.medium]: 24 },
    ka = t.forwardRef(function (
        { size: t, infoType: s, label: i, tooltipHeader: n, tooltipBody: o, classNames: r = {}, ...c },
        d,
    ) {
        const _ = n || o,
            m = l({ header: n, body: o }),
            p = $(t, B);
        return e.jsxs(L, {
            ...c,
            onClick: function (e) {
                (_ && m.onClick(), c.onClick?.(e));
            },
            onMouseEnter: function (e) {
                (_ && m.onMouseEnter(e), c.onMouseEnter?.(e));
            },
            onMouseLeave: function (e) {
                (m.onMouseLeave(), c.onMouseLeave?.(e));
            },
            ref: d,
            size: L.sizes.small,
            theme: L.themes.secondary,
            autoAlignContent: !1,
            className: a(ya.base, ya[`base__${t}Size`], c.className),
            classNames: { ...r, content: a(ya.content, r?.content) },
            children: [
                e.jsx('div', { className: ya.border }),
                e.jsx(P, {
                    className: ya.icon,
                    path: `header_footer.info_icon_${s}_${p}`,
                    height: Ea[t],
                    width: Ea[t],
                }),
                i && e.jsx('div', { className: ya.label, children: i }),
            ],
        });
    });
ka.sizes = Ca;
var wa = ((e) => ((e.Info = 'Info'), (e.Question = 'Question'), (e.Video = 'Video'), e))(wa || {});
const Ia = {
        base: 'MapCard_7b82d161',
        base__disabled: 'MapCard_base__disabled_b4b722ef',
        base__completed: 'MapCard_base__completed_b07cd4fd',
        base__hover: 'MapCard_base__hover_ac4f3480',
        background: 'MapCard_background_fa151161',
        contextShadow: 'MapCard_contextShadow_62484de0',
        checkmark: 'MapCard_checkmark_5d0db5f9',
        completed: 'MapCard_completed_c4d6cbe',
        title: 'MapCard_title_43f4df20',
        title__disabled: 'MapCard_title__disabled_10648906',
        overlayImage: 'MapCard_overlayImage_7854c75b',
        overlaySaturation: 'MapCard_overlaySaturation_64c7d29',
        overlayHover: 'MapCard_overlayHover_300d3bfc',
    },
    Ta = o.resolve('strings');
function Oa({ title: s, image: i, id: n, onClick: o, isEnabled: r, isCompleted: l }) {
    const [c, _] = t.useState(!1);
    return e.jsxs('div', {
        className: a(Ia.base, l && Ia.base__completed, !r && Ia.base__disabled, c && r && !l && Ia.base__hover),
        onClick: function () {
            r && (d.click(), o(n));
        },
        onMouseEnter: function () {
            (d.highlight(), _(!0));
        },
        onMouseLeave: function () {
            _(!1);
        },
        children: [
            e.jsx('div', {
                className: Ia.background,
                style: { backgroundImage: `url(${i})` },
                children: e.jsx('div', { className: Ia.contextShadow }),
            }),
            !r && e.jsx('div', { className: Ia.overlayImage }),
            e.jsx('div', { className: a(Ia.title, !r && Ia.title__disabled), children: s }),
            !r && e.jsx('div', { className: Ia.overlaySaturation }),
            l &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx('div', {
                            className: Ia.completed,
                            children: Ta.readOrEmpty('maps_training.mapSelection.MapCard.completed'),
                        }),
                        e.jsx('div', { className: Ia.checkmark }),
                    ],
                }),
            r && !l && e.jsx('div', { className: a(Ia.overlayHover, !r && Ia.overlayHover__disabled) }),
        ],
    });
}
const $a = 'MapGroup_71166309',
    La = 'MapGroup_titleBlock_616330c6',
    Pa = 'MapGroup_title_6b6ba6a9',
    Ba = 'MapGroup_count_d9bfeba6',
    Ra = 'MapGroup_status_c6ce8de',
    Aa = 'MapGroup_statusTitle_5c4dffbf',
    za = 'MapGroup_icon_ef9f14c8',
    Ga = o.resolve('strings');
function Ha({ groupTitle: t, count: s, status: i, classMix: n }) {
    const o = f(Ga.readOrEmpty('maps_training.countTitle'), { count: s }),
        r = l({
            header: Ga.readOrEmpty('maps_training.mapSelection.statusTitle.tips.header'),
            body: Ga.readOrEmpty('maps_training.mapSelection.statusTitle.tips.body'),
        });
    return e.jsxs('div', {
        className: a($a, n),
        children: [
            e.jsxs('div', {
                className: La,
                children: [e.jsx('div', { className: Pa, children: t }), e.jsx('div', { className: Ba, children: o })],
            }),
            i &&
                e.jsxs('div', {
                    className: Ra,
                    ...r,
                    children: [
                        e.jsx('div', { className: za }),
                        e.jsx('div', {
                            className: Aa,
                            children: Ga.readOrEmpty('maps_training.mapSelection.statusTitle.status'),
                        }),
                    ],
                }),
        ],
    });
}
const Va = 'MapListEmpty_2a00c67b',
    Fa = 'MapListEmpty_block_b2e31e1f',
    Ka = 'MapListEmpty_title_b5425c3d',
    Da = 'MapListEmpty_description_d9491eca',
    Wa = o.resolve('strings');
function Ua({ title: t, description: s, className: i }) {
    const n = f(Wa.readOrEmpty('maps_training.mapSelection.MapListEmpty.text'), { searchTxt: s });
    return e.jsx('div', {
        className: a(Va, i),
        children: e.jsxs('div', {
            className: Fa,
            children: [e.jsx('div', { className: Ka, children: t }), e.jsx('div', { className: Da, children: n })],
        }),
    });
}
const Za = {
        root: 'ScrollContainer_root_14e26b7c',
        base: 'ScrollContainer_a913c1cf',
        base__top: 'ScrollContainer_base__top_1b8e4a94',
        base__bottom: 'ScrollContainer_base__bottom_a417efd7',
        base__both: 'ScrollContainer_base__both_3ad63038',
        scrollContent: 'ScrollContainer_scrollContent_aca70867',
    },
    qa = 'top',
    Qa = 'bottom',
    Ja = 'both',
    Xa = 'none';
const Ya = s(function ({ children: t }) {
        const { api: s } = A(),
            [i, n] = z(s);
        return e.jsx(G, {
            className: a(Za.base, Za[`base__${((o = i), (r = n), o || r ? (o ? (r ? Xa : Qa) : qa) : Ja)}`]),
            children: e.jsx('div', { className: Za.scrollContent, children: t }),
        });
        var o, r;
    }),
    et = 'MapSelect_ad19ca6e',
    at = 'MapSelect_scrollArea_4adbceb3',
    tt = 'MapSelect_scrollBar_24aba26a',
    st = 'MapSelect_group_2f1b30b1',
    it = 'MapSelect_topBlock_5aab0dce',
    nt = 'MapSelect_title_78aa501',
    ot = 'MapSelect_subtitle_839e0c65',
    rt = 'MapSelect_filter_5b3ef8dd',
    lt = 'MapSelect_line_a3a84e69',
    ct = 'MapSelect_maps_226e2e8a',
    dt = 'MapSelect_filterBlock_dee82ed1',
    _t = 'MapSelect_toggle_e1d33cf9',
    mt = 'MapSelect_iconToggle_596a6b63',
    pt = 'MapSelect_input_d0f986df',
    ut = 'MapSelect_info_aeb4de90',
    ht = 'MapSelect_menuItems_3b44c8c5',
    bt = o.resolve('strings'),
    gt = s(function () {
        const { model: a, controls: s } = J(),
            i = a.groups.get(),
            n = a.menuItems.get(),
            [o, r] = t.useState(a.incompleteFilter.get()),
            [c, _] = t.useState(a.titleFilter.get() || '');
        I(T.ESCAPE, s.close);
        const m = a.sortedMaps(Boolean(o), c),
            p = {};
        m.forEach((e) => {
            (p[e.groupId] ??= new Array()).push(e);
        });
        const u = t.useCallback(
                function () {
                    (d.yes1(), s.infoClicked());
                },
                [s],
            ),
            g = t.useCallback(
                function (e) {
                    (s.filteringChange(Boolean(o), c), s.select(e));
                },
                [s, o, c],
            ),
            v = t.useCallback(
                function () {
                    (s.filteringChange(!o, c), r(!o));
                },
                [s, c, o],
            ),
            f = t.useCallback(
                function (e) {
                    (s.filteringChange(Boolean(o), e.target.value), _(e.target.value));
                },
                [s, o],
            ),
            x = l({ body: bt.readOrEmpty('maps_training.mapSelection.filters.tip1') }),
            {
                breakpoint: { weight: j },
            } = h();
        return e.jsxs('div', {
            className: et,
            children: [
                e.jsxs('div', {
                    className: it,
                    children: [
                        e.jsx('div', { className: nt, children: bt.readOrEmpty('maps_training.mapSelection.title') }),
                        e.jsx('div', {
                            className: ot,
                            children: bt.readOrEmpty('maps_training.mapSelection.subtitle'),
                        }),
                        e.jsx('div', {
                            className: rt,
                            children: e.jsxs('div', {
                                className: dt,
                                children: [
                                    e.jsx(H, {
                                        ...x,
                                        activated: o,
                                        onClick: v,
                                        className: _t,
                                        size: V.medium,
                                        children: e.jsx('div', { className: mt }),
                                    }),
                                    e.jsx('div', {
                                        className: pt,
                                        children: e.jsx(F.Provider, {
                                            value: c,
                                            children: e.jsxs(F.Decoration, {
                                                children: [
                                                    e.jsx(F.Icon, { icon: F.icons.search }),
                                                    e.jsx(F.Field, {
                                                        onChange: f,
                                                        children: bt.readOrEmpty(
                                                            'maps_training.mapSelection.filters.tip2',
                                                        ),
                                                    }),
                                                    e.jsx(F.ClearButton, {}),
                                                ],
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                e.jsx('div', { className: lt }),
                e.jsx('div', {
                    className: at,
                    children: e.jsxs(K, {
                        children: [
                            e.jsxs(Ya, {
                                children: [
                                    i.map((a, t) => {
                                        const s = p[a.groupId];
                                        return void 0 === s
                                            ? null
                                            : e.jsxs(
                                                  'div',
                                                  {
                                                      children: [
                                                          e.jsx(
                                                              Ha,
                                                              {
                                                                  count: s.length,
                                                                  groupTitle: a.groupTitle,
                                                                  status: a.isGroupDisabled,
                                                                  classMix: st,
                                                              },
                                                              `${a.groupId}${a.groupTitle}`,
                                                          ),
                                                          e.jsx('div', {
                                                              className: ct,
                                                              children: s.map((a) =>
                                                                  e.jsx(Oa, { onClick: g, ...a }, `${a.id}${a.title}`),
                                                              ),
                                                          }),
                                                      ],
                                                  },
                                                  `${a.groupTitle}${t}`,
                                              );
                                    }),
                                    0 === m.length &&
                                        a.isDataLoaded.get() &&
                                        e.jsx(Ua, {
                                            title: bt.readOrEmpty('maps_training.mapSelection.MapListEmpty.title'),
                                            description: c,
                                        }),
                                ],
                            }),
                            e.jsx(D, { classNames: { base: tt } }),
                        ],
                    }),
                }),
                e.jsx('div', {
                    className: ut,
                    children: e.jsx(ka, {
                        size: j > b.large.weight ? ka.sizes.medium : ka.sizes.small,
                        onClick: u,
                        infoType: wa.Info,
                        label: '',
                        tooltipHeader: '',
                        tooltipBody: '',
                    }),
                }),
                e.jsx('div', {
                    className: ht,
                    children: n.map((e) =>
                        t.createElement(oe, {
                            ...e,
                            key: e.name,
                            modeName: a.modeName.get(),
                            modeId: a.modeId.get(),
                            onClick: () => {
                                s.navigate(e.name);
                            },
                        }),
                    ),
                }),
            ],
        });
    }),
    vt = 'MapsTrainingPage_da7db6ae',
    ft = 'MapsTrainingPage_base__select_cf7858dc',
    xt = s(function () {
        const { model: t } = J(),
            s = t.isMapSelected.get(),
            i = a(vt, !s && ft);
        return e.jsx('div', { className: i, children: s ? e.jsx(Sa, {}) : e.jsx(gt, {}) });
    });
Z(new W().add(U).add(Q).render(e.jsx(xt, {})), { fullScreen: !0 });
