import { r as e, m as t, n as s, j as a, z as i, A as n, R as l, s as o } from './vendor.js';
import {
    M as r,
    aH as _,
    e as c,
    aI as d,
    p as b,
    i as u,
    g as p,
    m,
    b as S,
    aJ as g,
    aK as h,
    c as f,
    T as x,
    s as v,
    aL as I,
    u as T,
    N as w,
    k as y,
    aM as C,
    l as D,
    w as k,
    C as j,
    J as A,
    B as L,
    H as N,
    F as E,
    au as B,
    S as F,
    aN as $,
    a3 as O,
} from './lib.js';
import { u as z } from './string-utils.js';
function P(s, a, i) {
    const n = e.useContext(r);
    let l = Object.entries(n).filter(([e, t]) => !0 === t && e in G);
    return s.reduce((e, s) => {
        const i = l.map((e) => t(a[((e, t) => e + '__' + t)(s, e[0])], a[((e, t) => e + z(t))(s, e[0])]));
        return ((e[s] = t(a[s], ...i)), e);
    }, {});
}
var G = ((e) => (
    (e.extraLarge = 'extraLarge'),
    (e.large = 'large'),
    (e.medium = 'medium'),
    (e.small = 'small'),
    (e.extraSmall = 'extraSmall'),
    (e.extraLargeWidth = 'extraLargeWidth'),
    (e.largeWidth = 'largeWidth'),
    (e.mediumWidth = 'mediumWidth'),
    (e.smallWidth = 'smallWidth'),
    (e.extraSmallWidth = 'extraSmallWidth'),
    (e.extraLargeHeight = 'extraLargeHeight'),
    (e.largeHeight = 'largeHeight'),
    (e.mediumHeight = 'mediumHeight'),
    (e.smallHeight = 'smallHeight'),
    (e.extraSmallHeight = 'extraSmallHeight'),
    e
))(G || {});
var M = ((e) => (
    (e.Hangar = 'hangar'),
    (e.Setup = 'setup'),
    (e.Compare = 'compare'),
    (e.Battle = 'battle'),
    (e.Respawn = 'respawn'),
    (e.Prebattle = 'prebattle'),
    e
))(M || {});
const X = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
    H = (e) => e === M.Battle || e === M.Prebattle,
    W = (e) => H(e) || e === M.Respawn,
    q = (e, t = []) => {
        const s = document.getElementById('root');
        s && (s.style.cursor = e ? 'grabbing' : 'default');
        for (const a of t) {
            const t = document.getElementById(a);
            t && (t.style.pointerEvents = e ? 'none' : 'auto');
        }
    },
    K = (e, t, s) => {
        let a = '',
            i = 8e3;
        for (const n of s) {
            const e = Math.abs(n.centerX - t);
            e < i && ((a = n.id), (i = e));
        }
        return a;
    },
    U = (e, t) => {
        const s = t.find((t) => t.id === e);
        return s ? s.centerX : 0;
    };
var V = ((e) => (
    (e.Ready = 'ready'),
    (e.DragStart = 'start'),
    (e.Drag = 'drag'),
    (e.Drop = 'drop'),
    (e.DropExit = 'exit'),
    e
))(V || {});
const Y = (e) => `panel-${e}-section`,
    J = (e, t) => {
        const s = Y(e),
            a = t.filter((e) => e !== s);
        return { selfId: s, blockOnGrabIds: ['setup-content', ...a] };
    },
    Q = ({ baseId: t, slotsLength: s, handleSwap: a, setIsExitBlocked: i, syncInitiator: n }) => {
        const {
                dragState: l,
                handleGrabberAction: o,
                getForceCenterX: r,
                resetDragResults: _,
            } = ((t, s, a) => {
                const i = e.useRef([]),
                    n = e.useRef({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                    [l, o] = e.useState({ activeDragId: '', potentialDropId: '' }),
                    r = e.useCallback((e) => {
                        n.current.dropId ||
                            n.current.prevPotentialDropId ||
                            ((n.current.prevPotentialDropId = e), o({ activeDragId: e, potentialDropId: e }));
                    }, []),
                    _ = e.useCallback((e, t) => {
                        if (i.current) {
                            const s = K(0, t, i.current);
                            s !== n.current.prevPotentialDropId &&
                                ((n.current.prevPotentialDropId = s), o({ activeDragId: e, potentialDropId: s }));
                        }
                    }, []),
                    c = e.useCallback((e, t) => {
                        if (i.current && t) {
                            const s = n.current,
                                a = K(0, t, i.current);
                            ((s.dropId = a),
                                (s.dragId = e),
                                (s.prevPotentialDropId = ''),
                                o({ activeDragId: e, potentialDropId: '' }),
                                a !== e && b.sound('cons_equipment_swipe'));
                        }
                    }, []),
                    d = e.useCallback(() => {
                        const { dragId: e, dropId: t, prevPotentialDropId: s } = n.current;
                        (e || t || s) &&
                            ((n.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                            o({ activeDragId: '', potentialDropId: '' }));
                    }, []),
                    u = e.useCallback(
                        (e) => {
                            const { dropId: t } = n.current;
                            t && t !== e ? a(e, t) : d();
                        },
                        [d, a],
                    ),
                    p = e.useCallback((e, t) => {
                        const s = i.current.find((t) => t.id === e);
                        s && t && (s.centerX = t);
                    }, []),
                    m = e.useCallback(
                        (e, t) => {
                            const { dragId: s, currentCenterX: a } = t;
                            switch (e) {
                                case V.Ready:
                                    return p(s, a);
                                case V.DragStart:
                                    return r(s);
                                case V.Drag:
                                    return _(s, a);
                                case V.Drop:
                                    return c(s, a);
                                case V.DropExit:
                                    return u(s);
                                default:
                                    return void console.warn('Unknown grabber action', e);
                            }
                        },
                        [r, _, c, u, p],
                    );
                return (
                    e.useEffect(() => {
                        if (t !== i.current.length) {
                            const e = new Array(t).fill(null);
                            i.current = e.map((e, t) => ({ id: `${s}-${t}`, centerX: 0 }));
                        }
                    }, [t, s]),
                    {
                        dragState: l,
                        handleGrabberAction: m,
                        getForceCenterX: e.useCallback((e) => {
                            const { dragId: t, dropId: s } = n.current;
                            return e === t ? U(s, i.current) : e === s ? U(t, i.current) : 0;
                        }, []),
                        resetDragResults: d,
                    }
                );
            })(s, t, a),
            c = e.useCallback(
                (e, t) => {
                    if (i)
                        switch (e) {
                            case V.DragStart:
                            case V.Drag:
                                i(!0);
                                break;
                            default:
                                i(!1);
                        }
                    o(e, t);
                },
                [o, i],
            );
        return (
            e.useEffect(() => {
                i && i(!1);
            }, [i]),
            e.useEffect(() => _, [n, _]),
            { handleGrabberAction: c, dragState: l, getForceCenterX: r }
        );
    },
    [Z, ee] = u()(
        ({ observableModel: e }) => {
            const t = {
                    root: e.object(),
                    ammunitionPanel: e.object('ammunitionPanel'),
                    roleSkillSlot: e.object('roleSkillSlot'),
                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                    lastSlotAction: e.object('lastSlotAction'),
                },
                a = s(() => t.sectionGroups.get().length),
                i = s(
                    (e) => {
                        const s = p(t.sectionGroups.get(), e);
                        if (!s) throw Error(`No ammunition section group found with index: ${e}`);
                        return {
                            ...s,
                            sections: m(s.sections, (e) => ({ ...e, slots: m(e.slots, (e) => ({ ...e })) })),
                            setupSelector: { ...s.setupSelector, states: m(s.setupSelector.states, (e) => e) },
                        };
                    },
                    { equals: f },
                ),
                n = s((e) => i(e).sections.length),
                l = s(
                    (e, t) => {
                        const s = i(e),
                            a = p(s.sections, t);
                        if (!a) throw Error(`No ammunition section found with index: ${t}`);
                        return a;
                    },
                    { equals: f },
                ),
                o = s((e, t) => l(e, t).slots.length),
                r = s((e, t) => {
                    const s = l(e, t).slots;
                    return S(s, (e) => Boolean(e) && !X(e)).length;
                }),
                _ = s((e, t) => {
                    const s = l(e, t).slots;
                    return g(s, (e) => e.intCD > 0);
                }),
                c = s(
                    (e, t, s) => {
                        const a = l(e, t),
                            i = p(a.slots, s);
                        if (!i) throw Error(`No ammunition slot found with index: ${s}`);
                        return i;
                    },
                    { equals: f },
                ),
                d = s(
                    (e) => {
                        const { sections: t } = i(e);
                        return h(t, (e) => Y(e.type));
                    },
                    { equals: f },
                ),
                b = s(
                    (e, t, s) => {
                        const a = c(e, t, s);
                        if (!a) throw Error(`No ammunition slot found with index: ${s}`);
                        if (!a.specializations) throw Error('Selected slot have no specializations');
                        return {
                            ...a.specializations,
                            specializations: m(a.specializations.specializations, (e) => ({ ...e })),
                        };
                    },
                    { equals: f },
                );
            return {
                ...t,
                computes: {
                    groups: { length: a, group: i },
                    sections: { length: n, section: l, IDs: d },
                    slots: { length: o, filteredLength: r, slot: c, existFilled: _ },
                    specializations: b,
                },
            };
        },
        ({ externalModel: e }) => ({
            sectionSelect: e.createCallback((e) => ({ ...e }), 'ammunitionPanel.onSectionSelect'),
            dragDropSwap: e.createCallback((e) => ({ ...e }), 'ammunitionPanel.onDragDropSwap'),
            slotClear: e.createCallback((e) => ({ ...e }), 'ammunitionPanel.onSlotClear'),
            sectionResized: e.createCallback((e) => ({ ...e }), 'ammunitionPanel.onSectionResized'),
            changeSetupIndex: e.createCallback((e) => ({ ...e }), 'ammunitionPanel.onChangeSetupIndex'),
            specializationSelect: e.createCallback((e) => ({ ...e }), 'ammunitionPanel.onSpecializationSelect'),
            switch: e.createCallbackNoArgs('onSwitch'),
        }),
    ),
    te = {
        root: 'GroupAnimation_root_fd2d7da3',
        base__enterUp: 'GroupAnimation_base__enterUp_810fa5c8',
        animationEnterTop: 'GroupAnimation_animationEnterTop_fd2d7da3',
        base__enterDown: 'GroupAnimation_base__enterDown_e87fb6cb',
        animationEnterDown: 'GroupAnimation_animationEnterDown_fd2d7da3',
        base__exitUp: 'GroupAnimation_base__exitUp_a53f65e0',
        animationExitTop: 'GroupAnimation_animationExitTop_fd2d7da3',
        base__exitDown: 'GroupAnimation_base__exitDown_e37574cc',
        animationExitDown: 'GroupAnimation_animationExitDown_fd2d7da3',
    },
    se = 'up',
    ae = 'down',
    ie = ({ children: t, index: s, setSetupSwitching: l, disabled: o = !1 }) => {
        const r = e.useRef(1 - s),
            _ = e.useMemo(() => {
                const e = ((t = s), (a = r.current), t === a ? '' : t > a ? ae : se);
                var t, a;
                const i = e && z(e);
                return o ? {} : { enter: te[`base__enter${i}`], exit: te[`base__exit${i}`] };
            }, [s, o]);
        return (
            (r.current = s),
            a.jsx(i, {
                className: te.base,
                children: a.jsx(
                    n,
                    { timeout: 300, classNames: _, onEnter: () => l(!0), onExited: () => l(!1), children: t },
                    s,
                ),
            })
        );
    },
    ne = 'KeyboardKey_3d3ee945',
    le = 'KeyboardKey_back_2732f77d',
    oe = l.memo(({ text: e }) =>
        a.jsx('div', { className: ne, children: a.jsx('div', { className: le, children: e }) }),
    ),
    re = 'SetupSwitchHotKey_13bea094',
    _e = 'SetupSwitchHotKey_hotKeyWrapper_ed73bd81',
    ce = 'SetupSwitchHotKey_plusWrapper_424c2c95',
    de = 'SetupSwitchHotKey_plus_f9675ba7',
    be = 'SetupSwitchHotKey_plus__horizontal_a00be814',
    ue = 'SetupSwitchHotKey_plus__vertical_ca1b09d6',
    pe = l.memo(({ hotKeys: e }) =>
        a.jsx('div', {
            className: re,
            children: e.map((e, t) => {
                if (!e) return null;
                const { value: s } = e;
                return 0 === t
                    ? a.jsx(oe, { text: s }, t)
                    : a.jsxs(
                          'div',
                          {
                              className: _e,
                              children: [
                                  a.jsxs('div', {
                                      className: ce,
                                      children: [
                                          a.jsx('div', { className: `${de} ${be}` }),
                                          a.jsx('div', { className: `${de} ${ue}` }),
                                      ],
                                  }),
                                  a.jsx(oe, { text: s }),
                              ],
                          },
                          t,
                      );
            }),
        }),
    ),
    me = 'optDevices',
    Se = 'shells',
    ge = 'consumables',
    he = 'battleBoosters',
    fe = 'battleAbilities',
    xe = 'toggleShells',
    ve = 'apply',
    Ie = 'equipCoinInfo',
    Te = 'simple',
    we = 'modernized',
    ye = 'TopLabel_18b0f2b3',
    Ce = 'TopLabel_base__ready_3725974e',
    De = 'TopLabel_text_c186495',
    ke = 'TopLabel_text__hangar_109a6a1d',
    je = 'TopLabel_text__shown_83a7f079',
    Re = 'TopLabel_text__hidden_30cc7458',
    Ae = 'TopLabel_text__truncated_9d4edd6d',
    Le = e.memo(({ panelType: s, text: i, parentRef: n, isTruncated: l = !1, show: o = !1 }) => {
        const r = e.useRef(!1),
            [_, c] = e.useState(!1);
        e.useEffect(() => {
            n || (o && !r.current && (r.current = !0), c(o));
        }, [o, n]);
        const d = e.useCallback(() => {
                ((r.current = !0), c(!0));
            }, []),
            b = e.useCallback(() => {
                c(!1);
            }, []);
        return (
            e.useEffect(() => {
                const e = n && n.current;
                if (e)
                    return (
                        e.addEventListener('mouseenter', d),
                        e.addEventListener('mouseleave', b),
                        () => {
                            (e.removeEventListener('mouseenter', d), e.removeEventListener('mouseleave', b));
                        }
                    );
            }, [n, d, b]),
            a.jsx('div', {
                className: t(ye, r.current && Ce),
                children: a.jsx('div', {
                    className: t(De, s !== M.Setup && ke, l && Ae, o && _ ? je : Re),
                    children: i,
                }),
            })
        );
    }),
    Ne = 'notUsableSection',
    Ee = l.memo(function ({ className: e, children: t }) {
        return a.jsx(x, {
            contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
            children: a.jsx('div', { className: e, children: t }),
        });
    }),
    Be = 'SlotDivider_507433c5',
    Fe = () => a.jsx('div', { className: Be }),
    $e = 'Grabber_fad92a59',
    Oe = 'Grabber_base__enabled_c61a3c30',
    ze = 'Grabber_base__waitingUpdate_b1d6858',
    Pe = 'Grabber_base__updating_4c69d28c',
    Ge = 'Grabber_base__active_336bd2de',
    Me = 'Grabber_base__exit_a0ef4ec5',
    Xe = 'Grabber_base__showAnimation_b69adaa8',
    He = ({
        children: s,
        id: i,
        containerRef: n,
        isEnabled: l = !0,
        onClick: o,
        forceCenterX: r,
        isUpdateAvailable: _,
        handleAction: d,
        blockOnGrabIds: b = [],
    }) => {
        const { breakpoint: u } = v(),
            p = e.useRef({
                actualX: 0,
                clickCenterOffset: 0,
                dropCenterX: 0,
                grabActivationPassed: !1,
                isDragActive: !1,
                id: i,
            }),
            m = e.useRef({ isValid: !1, startX: 0, startCenterX: 0, minXRestriction: 0, maxXRestriction: 8e3 }),
            S = e.useRef(null),
            [g, h] = e.useState(!1),
            [f, x] = e.useState(0),
            D = I(),
            k = 0 !== r && l,
            j = r ? r - m.current.startCenterX : f;
        e.useEffect(() => {
            if (((m.current.isValid = !1), i))
                return c(() => {
                    const e = S.current,
                        t = n.current;
                    if (t && e) {
                        const s = e.getBoundingClientRect(),
                            a = t.getBoundingClientRect(),
                            n = s.left + 0.5 * s.width;
                        ((m.current = {
                            isValid: !0,
                            minXRestriction: a.left,
                            maxXRestriction: a.left + a.width,
                            startX: s.left,
                            startCenterX: n,
                        }),
                            d(V.Ready, { dragId: i, currentCenterX: n }));
                    }
                });
        }, [u]);
        const R = e.useCallback(
                (e) => {
                    ((p.current.isDragActive = e), h(e), p.current.grabActivationPassed && !e && q(!1, b));
                },
                [b],
            ),
            A = e.useCallback(() => {
                (d(V.DragStart, { dragId: p.current.id }), (p.current.grabActivationPassed = !0), q(!0, b));
            }, [d, b]),
            L = e.useCallback((e) => {
                const t = p.current,
                    { startX: s, startCenterX: a, minXRestriction: i, maxXRestriction: n } = m.current,
                    l = a - s,
                    o = e - t.clickCenterOffset;
                t.dropCenterX = ((e, t, s, a) => {
                    const i = s + t,
                        n = a - t;
                    return e < i ? i : e > n ? n : e;
                })(o, l, i, n);
            }, []),
            N = e.useCallback(
                (e) => {
                    const t = p.current,
                        s = m.current;
                    0 === e.button &&
                        !t.isDragActive &&
                        s.isValid &&
                        l &&
                        !_ &&
                        S.current &&
                        ((t.actualX = e.clientX), (t.clickCenterOffset = t.actualX - s.startCenterX), R(!0));
                },
                [l, _, R],
            ),
            E = e.useCallback(() => {
                !o || (l && m.current.isValid) || o();
            }, [l, o]);
        (T(
            g ? y.ESCAPE : y.NONE,
            w(() => R(!1)),
        ),
            e.useEffect(() => {
                l && r && x(0);
            }, [r, l]));
        const B = !g && p.current.grabActivationPassed;
        (e.useLayoutEffect(() => {
            p.current.id = i;
        }, [i]),
            e.useEffect(() => {
                if (B) {
                    const e = p.current;
                    (d(V.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                        r === e.dropCenterX &&
                            ((e.grabActivationPassed = !1), D.run(() => d(V.DropExit, { dragId: e.id }))));
                }
            }, [B, D, r, d]),
            e.useEffect(() => {
                if (l && g && p.current.id) {
                    const e = C.up(([e, t]) => {
                            if ('outside' === t) return R(!1);
                            const s = p.current,
                                a = e.clientX;
                            (a === s.actualX && 0 === e.button && !p.current.grabActivationPassed
                                ? o && o()
                                : p.current.grabActivationPassed && L(a),
                                p.current.isDragActive && R(!1));
                        }),
                        t = C.move(([e]) => {
                            const t = p.current;
                            if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                            const s = e.clientX,
                                a = t.grabActivationPassed;
                            (!a && A(),
                                s !== t.actualX &&
                                    ((t.actualX = s),
                                    L(s),
                                    a && d(V.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                    x(t.dropCenterX - m.current.startCenterX)));
                        });
                    return () => {
                        (t(), e());
                    };
                }
            }, [A, d, g, l, o, R, L]));
        const F = l ? t($e, Oe, g && Ge, B && Me, k && ze, r && Pe) : t($e, r && Xe);
        return a.jsx('div', {
            id: i,
            ref: S,
            onClick: E,
            onMouseDown: N,
            onTransitionEnd: (e) => {
                const t = p.current;
                e.target === S.current &&
                    t.grabActivationPassed &&
                    ((t.grabActivationPassed = !1), D.run(() => d(V.DropExit, { dragId: t.id })));
            },
            className: F,
            style: { left: j },
            children: s,
        });
    };
var We = ((e) => ((e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next'), e))(
    We || {},
);
const qe = 'KeyLabel_20a0a5a7',
    Ke = 'KeyLabel_base__current_fa13a58c',
    Ue = 'KeyLabel_base__next_b60aff3e',
    Ve = ({ text: e, show: s, panelType: i, shellState: n, className: l }) => {
        if (!e) return null;
        const o = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
        return a.jsx('div', {
            className: t(qe, n === We.Current && Ke, n === We.Next && Ue, l),
            children: a.jsx(Le, { isTruncated: !0, text: o, show: s, panelType: i }),
        });
    },
    Ye = ({ wrapper: e, children: t, when: s, withProps: i }) =>
        s ? a.jsx(e, { ...i, children: t }) : a.jsx(l.Fragment, { children: t }),
    Je = {
        root: 'Container_root_a197fc5',
        base: 'Container_d1bc8c0b',
        base__grabbing: 'Container_base__grabbing_7b31b75b',
        base__hangar: 'Container_base__hangar_a197fc5',
        base__hovered: 'Container_base__hovered_c456aff5',
        base__compare: 'Container_base__compare_49272068',
        base__selected: 'Container_base__selected_a197fc5',
        base__dragIn: 'Container_base__dragIn_c456aff5',
        base__dragInActive: 'Container_base__dragInActive_f61c68c9',
        base__toggle: 'Container_base__toggle_5755d156',
        base__disabled: 'Container_base__disabled_a197fc5',
    },
    Qe = ({
        activeDragId: e,
        slotType: s,
        isSelected: i,
        isBorderActive: n,
        children: l,
        panelType: o,
        isDisabled: r,
        isPotentialDrop: _,
        isHovered: c = !1,
        onClick: d,
    }) => {
        const b = t(
            Je.base,
            !e && Je[`base__${o}`],
            s && Je[`base__${s}`],
            i && !_ && !n && Je.base__selected,
            _ && Je['base__dragIn' + (i ? 'Active' : '')],
            r && Je.base__disabled,
            c && Je.base__hovered,
        );
        return a.jsx('div', { className: b, onClick: d, children: l });
    },
    Ze = {
        root: 'Bonus_root_d9abacdd',
        base: 'Bonus_7cf80a75',
        base__fitting: 'Bonus_base__fitting_78953d8',
        icon: 'Bonus_icon_2874151b',
        icon__battleBooster: 'Bonus_icon__battleBooster_29da35ed',
        icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_e33951ee',
        icon__equipmentPlus: 'Bonus_icon__equipmentPlus_f2c23fc',
        icon__builtInEquipment: 'Bonus_icon__builtInEquipment_bb9f0bba',
        icon__equipmentModernized: 'Bonus_icon__equipmentModernized_5530413e',
        icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_d9abacdd',
        icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_5530413e',
    },
    et = l.memo(({ isTemporary: s, overlayType: i, overlaySource: n }) => {
        const l = t(Ze.base, s && Ze.base__fitting),
            o = t(Ze.icon, Ze[`icon__${i}`]),
            r = e.useMemo(() => ({ backgroundImage: `url(${n})` }), [n]);
        return a.jsx('div', { className: l, children: a.jsx('div', { className: o, style: r }) });
    }),
    tt = {
        root: 'Level_root_4e6750d',
        base: 'Level_f8346462',
        base__level1: 'Level_base__level1_a7517449',
        base__level2: 'Level_base__level2_d06baff8',
        base__level3: 'Level_base__level3_736a907d',
        base__level4: 'Level_base__level4_9c3e3bf3',
        base__level5: 'Level_base__level5_9c0b41d2',
        base__level6: 'Level_base__level6_a6954078',
        base__level7: 'Level_base__level7_45911b77',
        base__level8: 'Level_base__level8_2bcf0a03',
        base__level9: 'Level_base__level9_a6954078',
        base__level10: 'Level_base__level10_736a907d',
    },
    st = ({ level: s }) => {
        const i = e.useMemo(
                () => ({ backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${s}`)})` }),
                [s],
            ),
            n = t(tt.base, tt[`base__level${s}`]);
        return a.jsx('div', { style: i, className: n });
    },
    at = 'Inside_image_b998c9cf',
    it = 'Inside_image__fitting_250c1ebd',
    nt = 'Inside_warning_3f6eb750',
    lt = 'Inside_change_2308ad0b',
    ot = ({ level: s, overlayType: i, isTemporary: n, withAttention: l, imageSource: o, isIncompatible: r }) => {
        const _ = e.useMemo(() => {
                const e = 'equipmentModernized' === i ? `${i}_${s}_overlay` : `${i}_overlay`;
                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(e);
            }, [i, s]),
            c = e.useMemo(() => ({ backgroundImage: `url(${o})` }), [o]),
            d = !_ && Boolean(i) && s;
        return a.jsxs('div', {
            children: [
                d && a.jsx(st, { level: s }),
                a.jsx('div', { className: t(at, (n || l) && it), style: c }),
                l && a.jsx('div', { className: nt }),
                r && a.jsx('div', { className: lt }),
                _ && a.jsx(et, { isTemporary: n, overlaySource: _, overlayType: i }),
            ],
        });
    },
    rt = (t) => {
        const s = e.useRef(-1),
            a = e.useCallback(
                (e) => {
                    if (-1 === s.current) {
                        const a = t(e);
                        a &&
                            (s.current = window.setTimeout(() => {
                                s.current = -1;
                            }, a));
                    }
                },
                [t],
            );
        return (e.useEffect(() => () => clearTimeout(s.current), []), a);
    },
    _t = ({ children: e, slotType: t, slotId: s, isEnabled: i = !0, panelType: n }) =>
        a.jsx(D, {
            targetId: n !== M.Setup ? R.aliases.last_stand.shared.AmmunitionPanel('resId') : 0,
            isEnabled: i,
            args: { slotType: t, slotId: s },
            children: a.jsx('div', { children: e }),
        }),
    ct = 'Close_7a599d05',
    dt = 'Close_base__invisible_420a0118',
    bt = 'Close_base__shown_3335c0d7',
    ut = 'Close_base__hover_39051cbe',
    pt = 'Close_base__down_8d4aa238',
    mt = e.memo(({ id: s, show: i = !0, onClick: n, soundHover: l = 'highlight', soundClick: o = 'play' }) => {
        const [r, _] = e.useState(!1),
            [d, u] = e.useState(!1),
            [p, m] = e.useState(!1),
            S = e.useCallback((e) => {
                e.stopPropagation();
            }, []),
            g = e.useCallback(() => {
                (u(!0), l && b.sound(l));
            }, [l]),
            h = e.useCallback(() => {
                (_(!1), u(!1));
            }, []),
            f = e.useCallback(
                (e) => {
                    i && 0 === e.button && (_(!0), o && b.sound(o));
                },
                [i, o],
            ),
            x = e.useCallback(
                (e) => {
                    i && 0 === e.button && n && n();
                },
                [i, n],
            );
        e.useEffect(
            () =>
                c(() => {
                    m(!0);
                }),
            [],
        );
        const v = t(ct, !p && dt, p && i && bt, r && pt, d && ut);
        return a.jsx('div', {
            id: s,
            onMouseOver: g,
            onMouseLeave: h,
            onMouseDown: f,
            onMouseUp: x,
            className: v,
            onClick: S,
        });
    }),
    St = 0,
    gt = 'select',
    ht = 'undo',
    ft = 'cancel',
    xt = 'swap',
    vt = 'demount',
    It = 'demount_from_setup',
    Tt = 'demount_from_setups',
    wt = 'destroy',
    yt = 'upgrade',
    Ct = 'add_one',
    Dt = 1600;
var kt = ((e) => (
    (e.RIGHT = 'Right'),
    (e.LEFT = 'Left'),
    (e.SWAP = 'Swap'),
    (e.FITTING = 'Fitting'),
    (e.FITTING_REMOVE = 'FittingRemove'),
    (e.FADE = 'Fade'),
    (e.DESTROY = 'Destroy'),
    (e.DEMOUNT = 'Demount'),
    e
))(kt || {});
const jt = { [xt]: 200, [ht]: 250, [gt]: 250, [wt]: 1400, [vt]: Dt, [Tt]: Dt, [It]: Dt },
    Rt = 'BackEffects_shine_4dd8dab3',
    At = 'BackEffects_sparks_7dedbc89',
    Lt = 'BackEffects_nut_f2ca7afc',
    Nt = 'BackEffects_wrench_156d8c9',
    Et = { enterActive: 'BackEffects_shine__enterActive_d85eabdc' },
    Bt = { enterActive: 'BackEffects_sparks__enterActive_49a23d20' },
    Ft = { enterActive: 'BackEffects_nut__enterActive_b2b17725' },
    $t = { enterActive: 'BackEffects_wrench__enterActive_f384890d' },
    Ot = [vt, Tt],
    zt = e.memo(({ in: e, actionType: t }) =>
        a.jsxs(a.Fragment, {
            children: [
                a.jsx(n, { in: e, timeout: 200, classNames: Et, children: a.jsx('div', { className: Rt }) }),
                a.jsx(n, { in: e, timeout: 400, classNames: Bt, children: a.jsx('div', { className: At }) }),
                Ot.includes(t) &&
                    a.jsxs(a.Fragment, {
                        children: [
                            a.jsx(n, {
                                in: e,
                                timeout: 600,
                                classNames: Ft,
                                children: a.jsx('div', { className: Lt }),
                            }),
                            a.jsx(n, {
                                in: e,
                                timeout: 600,
                                classNames: $t,
                                children: a.jsx('div', { className: Nt }),
                            }),
                        ],
                    }),
            ],
        }),
    ),
    Pt = 'ColorMask_924fc7d6',
    Gt = 'ColorMask_base__enterActive_3e45e48',
    Mt = ({ inProp: e, maskImage: t }) =>
        a.jsx(n, {
            in: e,
            timeout: 1200,
            classNames: { enterActive: Gt },
            children: a.jsx('div', { className: Pt, style: { maskImage: `url(${t})` } }),
        }),
    Xt = {
        root: 'SlotTransitions_root_2c19d108',
        base: 'SlotTransitions_ec23d98b',
        base__exitLeft: 'SlotTransitions_base__exitLeft_e1551095',
        'animation-left': 'SlotTransitions_animation-left_2c19d108',
        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_cd82bb59',
        'animation-fade': 'SlotTransitions_animation-fade_2c19d108',
        base__enterRight: 'SlotTransitions_base__enterRight_466484dd',
        'animation-right': 'SlotTransitions_animation-right_2c19d108',
        base__enterRightFade: 'SlotTransitions_base__enterRightFade_53d00ad0',
        base__exitRight: 'SlotTransitions_base__exitRight_c94b548f',
        base__enterLeft: 'SlotTransitions_base__enterLeft_55b8b9aa',
        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_94b336ff',
        'animation-right-long': 'SlotTransitions_animation-right-long_2c19d108',
        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_f0ef4f88',
        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_25f5e2f3',
        'animation-left-long': 'SlotTransitions_animation-left-long_2c19d108',
        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_8e789869',
        base__exitFade: 'SlotTransitions_base__exitFade_8bd63299',
        base__enterFade: 'SlotTransitions_base__enterFade_ec021579',
        base__enter: 'SlotTransitions_base__enter_1a0764f3',
        base__enterFitting: 'SlotTransitions_base__enterFitting_a550830c',
        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_97a1acb5',
        'animation-left-shells': 'SlotTransitions_animation-left-shells_2c19d108',
        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_6f2fa15a',
        'animation-right-shells': 'SlotTransitions_animation-right-shells_2c19d108',
        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_19e93e2',
        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_4ad39de0',
        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_4d303a33',
        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_2c19d108',
        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_2c0680ae',
        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_1934871c',
        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_2c19d108',
        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_b87ae6f4',
        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_8bd63299',
        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_ec021579',
        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_e1551095',
        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_cd82bb59',
        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_466484dd',
        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_53d00ad0',
        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_c94b548f',
        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_55b8b9aa',
        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_94b336ff',
        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_f0ef4f88',
        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_25f5e2f3',
        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_8e789869',
        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_3af2f546',
        'animation-fitting': 'SlotTransitions_animation-fitting_2c19d108',
        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_ff33d03b',
        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_2c19d108',
        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_2c19d108',
        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_46002f0c',
        'animation-destroy': 'SlotTransitions_animation-destroy_2c19d108',
        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_ec021579',
        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_36d5f9bd',
        'animation-bright-up': 'SlotTransitions_animation-bright-up_2c19d108',
        'animation-demount': 'SlotTransitions_animation-demount_2c19d108',
        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_ec021579',
        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_8bd63299',
        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_ec021579',
        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_cd709f94',
        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_e1551095',
        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_cd82bb59',
        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_466484dd',
        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_53d00ad0',
        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_c94b548f',
        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_55b8b9aa',
        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_94b336ff',
        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_f0ef4f88',
        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_25f5e2f3',
        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_8e789869',
        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_3af2f546',
        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_ff33d03b',
        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_2c19d108',
        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_8bd63299',
        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_ec021579',
        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_e1551095',
        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_cd82bb59',
        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_466484dd',
        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_53d00ad0',
        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_c94b548f',
        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_55b8b9aa',
        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_94b336ff',
        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_f0ef4f88',
        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_25f5e2f3',
        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_8e789869',
        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_3af2f546',
        baseBattleAbilities__exitFittingRemove: 'SlotTransitions_baseBattleAbilities__exitFittingRemove_ff33d03b',
        baseBattleAbilities__exitActiveFitting: 'SlotTransitions_baseBattleAbilities__exitActiveFitting_2c19d108',
        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_8bd63299',
        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_ec021579',
        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_3af2f546',
        baseBattleBoosters__exitFittingRemove: 'SlotTransitions_baseBattleBoosters__exitFittingRemove_ff33d03b',
        baseBattleBoosters__exitActiveFitting: 'SlotTransitions_baseBattleBoosters__exitActiveFitting_2c19d108',
        baseLs_consumables__exitLeft: 'SlotTransitions_baseLs_consumables__exitLeft_e1551095',
        baseLs_consumables__exitLeftFade: 'SlotTransitions_baseLs_consumables__exitLeftFade_cd82bb59',
        baseLs_consumables__enterRight: 'SlotTransitions_baseLs_consumables__enterRight_466484dd',
        baseLs_consumables__enterRightFade: 'SlotTransitions_baseLs_consumables__enterRightFade_53d00ad0',
        baseLs_consumables__exitRight: 'SlotTransitions_baseLs_consumables__exitRight_c94b548f',
        baseLs_consumables__enterLeft: 'SlotTransitions_baseLs_consumables__enterLeft_55b8b9aa',
        baseLs_consumables__exitRightSwap: 'SlotTransitions_baseLs_consumables__exitRightSwap_94b336ff',
        baseLs_consumables__enterRightSwap: 'SlotTransitions_baseLs_consumables__enterRightSwap_f0ef4f88',
        baseLs_consumables__enterLeftSwap: 'SlotTransitions_baseLs_consumables__enterLeftSwap_25f5e2f3',
        baseLs_consumables__exitLeftSwap: 'SlotTransitions_baseLs_consumables__exitLeftSwap_8e789869',
        baseLs_consumables__enterFitting: 'SlotTransitions_baseLs_consumables__enterFitting_3af2f546',
        baseLs_consumables__exitFittingRemove: 'SlotTransitions_baseLs_consumables__exitFittingRemove_ff33d03b',
        baseLs_consumables__exitActiveFitting: 'SlotTransitions_baseLs_consumables__exitActiveFitting_2c19d108',
        baseLs_consumables__exitFade: 'SlotTransitions_baseLs_consumables__exitFade_8bd63299',
        baseLs_consumables__enterFade: 'SlotTransitions_baseLs_consumables__enterFade_ec021579',
    },
    Ht = { enter: Xt.base__enter, exit: Xt.base__enter },
    Wt = o(
        ({
            children: t,
            slotIndex: s,
            uniqueKey: o,
            slotType: r,
            isEmpty: _ = !1,
            imageSource: c,
            itemInstalledSetupIdx: d,
        }) => {
            var b;
            const { model: u } = ee(),
                {
                    leftID: p,
                    rightID: m,
                    leftIntCD: S,
                    rightIntCD: g,
                    actionType: h,
                    intCD: f,
                } = u.lastSlotAction.get(),
                [x, v] = e.useState(!0),
                [I, T] = e.useState(!0),
                [w, y] = e.useState(c),
                [C, D] = e.useState(o),
                [k, j] = e.useState(d),
                R = e.useRef(),
                A = e.useRef(),
                L = !((f !== o && f !== C) || k === d || (h !== wt && h !== vt)),
                N = -1 === S || -1 === g,
                E = r ? `base${(null == (b = r[0]) ? void 0 : b.toUpperCase()) + r.slice(1)}` : 'base',
                B = jt[h] || 0;
            (e.useEffect(
                () => () => {
                    (R.current && clearTimeout(R.current), A.current && clearTimeout(A.current));
                },
                [],
            ),
                e.useEffect(() => {
                    _ || y(c);
                }, [_, c]));
            const F = e.useCallback(
                    (e) => {
                        const t = { ...Ht };
                        switch (h) {
                            case xt: {
                                const e = p === s ? kt.RIGHT : kt.LEFT,
                                    a = m - p != 1 ? kt.SWAP : '';
                                ((t.enterDone = Xt[`${E}__enter${e}${a}`]),
                                    (t.exit = Xt[`${E}__exit${e}${a}`]),
                                    N &&
                                        (_
                                            ? (t.enterDone = Xt[`${E}__enter${kt.FADE}`])
                                            : (t.exit = Xt[`${E}__exit${kt.FADE}`])));
                                break;
                            }
                            case wt:
                                ((t.enterDone = Xt[`${E}__enter${kt.DESTROY}`]),
                                    (t.exit = Xt[`${E}__exit${kt.DESTROY}`]),
                                    (R.current = setTimeout(() => v(!0), 900)),
                                    T(!0));
                                break;
                            case Tt:
                            case vt:
                                ((t.enter = Xt[`${E}__enter${kt.DEMOUNT}${kt.FADE}`]),
                                    (t.exit = Xt[`${E}__exit${kt.DEMOUNT}`]),
                                    (R.current = setTimeout(() => v(!0), 900)));
                                break;
                            case gt:
                            case ht:
                                if (r !== Se) {
                                    const e = h === gt ? kt.FITTING : kt.FITTING_REMOVE;
                                    ((t.enter = Xt[`${E}__enter${e}`]),
                                        (t.exit = Xt[`${E}__exit${e}`]),
                                        (t.exitActive = Xt[`${E}__exitActive${kt.FITTING}`]));
                                } else
                                    ((t.enterDone = Xt[`${E}__enter${kt.FADE}`]),
                                        (t.exit = Xt[`${E}__exit${kt.FADE}`]));
                                break;
                            default:
                                return e;
                        }
                        return l.cloneElement(e, { classNames: t, timeout: B });
                    },
                    [h, r, E, B, p, s, m, _, N],
                ),
                $ = e.useCallback(
                    (e) => {
                        A.current = setTimeout(() => {
                            ((e.className = ''), e.classList.add(Xt.base), D(o), j(d));
                        }, B);
                    },
                    [B, o, d],
                ),
                O = e.useCallback(() => {
                    (v(!1), T(!1));
                }, []);
            return a.jsxs(a.Fragment, {
                children: [
                    a.jsx(i, {
                        component: null,
                        childFactory: F,
                        children: a.jsx(
                            n,
                            {
                                timeout: B,
                                classNames: Ht,
                                onEntered: $,
                                onExiting: O,
                                unmountOnExit: !0,
                                children: a.jsx('div', { className: Xt.base, children: t }),
                            },
                            o,
                        ),
                    }),
                    L &&
                        a.jsxs(a.Fragment, {
                            children: [a.jsx(zt, { in: x, actionType: h }), a.jsx(Mt, { inProp: I, maskImage: w })],
                        }),
                ],
            });
        },
    ),
    qt = l.memo(
        ({
            intCD: e,
            id: t,
            itemInstalledSetupIdx: s,
            isMountedMoreThanOne: i,
            isInstalled: n,
            isDisabled: l,
            imageSource: o,
            isEmpty: r,
            slotIndex: _,
            slotType: c,
            isBootCamp: d,
            contextMenuDisabled: b,
            isSetupSwitching: u,
            children: p,
        }) =>
            a.jsx(Wt, {
                uniqueKey: e,
                isEmpty: r,
                slotIndex: _,
                slotType: c,
                imageSource: o,
                itemInstalledSetupIdx: s,
                children: a.jsx(k, {
                    isEnabled: !(u || b || l || r || d),
                    args: {
                        intCD: e,
                        slotType: c,
                        installedSlotId: t,
                        isMounted: n,
                        fieldType: 1,
                        itemInstalledSetupIdx: s,
                        itemInstalledSetupSlotIdx: t,
                        isMountedMoreThanOne: i,
                    },
                    children: a.jsx('div', { children: p }),
                }),
            }),
    ),
    Kt = 'Slot_b9de9862',
    Ut = 'Slot_label_d81e74ca',
    Vt = 'Slot_close_57c1870c',
    Yt = 'Slot_disabled_f2040aa2',
    Jt = 'Slot_shadow_13896c4',
    Qt = 'Slot_category_e4e4688f',
    Zt = R.images.last_stand.gui.maps.icons.tanksetup.panel.empty(),
    es = R.images.last_stand.gui.maps.icons.tanksetup.panel.empty_hover(),
    ts = (e, t, s, a, i) => (t ? (a || i || !s ? Zt : es) : e),
    ss = o(
        ({
            slotType: t,
            slotIndex: s,
            level: i,
            isSelected: n,
            isSetupSwitching: l,
            isSectionSelected: o,
            onActiveSlotChanged: r,
            onSlotSelected: _,
            onActiveSlotRefChanged: d,
            onSlotClear: u,
            panelType: p,
            isDisabled: m = !1,
            isBorderActive: S,
            isIncompatible: g = !1,
            grabberId: h,
            containerRef: f,
            activeDragId: x,
            handleGrabberAction: v,
            forceLeftUpdate: I,
            potentialDropId: T,
            blockOnGrabIds: w,
            contextMenuDisabled: y,
            groupIndex: C,
            sectionIndex: D,
        }) => {
            const { model: k } = ee(),
                {
                    imageSource: j,
                    isInstalled: R,
                    itemInstalledSetupIdx: A,
                    isMountedMoreThanOne: L,
                    overlayType: N,
                    keyName: E,
                    categoryImgSource: B,
                    withAttention: F,
                    id: $,
                    intCD: O,
                } = k.computes.slots.slot(C, D, s),
                [z, P] = e.useState(!1),
                G = p === M.Setup,
                q = !W(p),
                K = !H(p),
                U = p === M.Compare,
                V = G && o && q,
                Y = e.useRef(!1),
                J = e.useRef(null),
                Q = -1 === O;
            (e.useEffect(() => {
                if (!Y.current && o && n)
                    return c(() => {
                        (r && r(J, t, $), (Y.current = !0));
                    });
                Y.current = !0;
            }, [$, o, n, r, t]),
                e.useEffect(() => {
                    (n && d(J), P(!1));
                }, [n, d]));
            const Z = e.useCallback(() => (!n && q && !l && _(t, $), 500), [$, q, n, l, _, t]),
                te = rt(Z),
                se = e.useCallback(() => {
                    m || te('');
                }, [te, m]),
                ae = e.useCallback(() => {
                    (K && !n && !x && !m && b.highlight(), P(!0));
                }, [n, x, m, K]);
            e.useEffect(() => {
                (T && b.highlight(), P(!1));
            }, [T]);
            const ie = e.useCallback(() => {
                    (P(!1), null == u || u($, t));
                }, [$, u, t]),
                ne = G && !R,
                le = Boolean(h && T === h),
                oe = h && (V || U),
                re = `${t}-slot-${$}`,
                _e = B && B.length > 0,
                ce = _e ? { backgroundImage: `url(${B})` } : {},
                de = {
                    id: h,
                    containerRef: f,
                    isEnabled: !Q,
                    onClick: se,
                    isUpdateAvailable: Boolean(x),
                    handleAction: v,
                    forceCenterX: I,
                    blockOnGrabIds: w,
                },
                be = {
                    isEmpty: Q,
                    intCD: O,
                    slotType: t,
                    slotIndex: s,
                    imageSource: j,
                    isDisabled: m,
                    isInstalled: R,
                    id: $,
                    itemInstalledSetupIdx: A,
                    isMountedMoreThanOne: L,
                    contextMenuDisabled: y,
                    isSetupSwitching: l,
                };
            return a.jsxs('div', {
                className: Kt,
                onMouseEnter: ae,
                onMouseLeave: () => P(!1),
                id: re,
                children: [
                    (o || U) &&
                        !R &&
                        a.jsx('div', {
                            className: Vt,
                            children: a.jsx(mt, { id: `close-${re}`, show: !x, onClick: ie }),
                        }),
                    a.jsx(_t, {
                        slotType: t,
                        slotId: $,
                        isEnabled: !x,
                        panelType: p,
                        children: a.jsx('div', {
                            ref: J,
                            children: a.jsxs(Qe, {
                                activeDragId: x,
                                slotType: t,
                                isSelected: n,
                                isBorderActive: Boolean(S),
                                panelType: p,
                                isDisabled: m,
                                isPotentialDrop: le,
                                onClick: oe ? void 0 : se,
                                isHovered: z,
                                children: [
                                    q &&
                                        a.jsx('div', {
                                            className: Ut,
                                            children: a.jsx(Ve, { text: E, show: p === M.Setup, panelType: p }),
                                        }),
                                    a.jsx(Ye, {
                                        when: Boolean(oe),
                                        wrapper: He,
                                        withProps: de,
                                        children: a.jsx(Ye, {
                                            when: q,
                                            wrapper: qt,
                                            withProps: be,
                                            children: a.jsx(ot, {
                                                imageSource: ts(j, X(k.computes.slots.slot(C, D, s)), z, m, n),
                                                isIncompatible: g,
                                                overlayType: N,
                                                level: i,
                                                isTemporary: ne,
                                                withAttention: F,
                                            }),
                                        }),
                                    }),
                                    _e &&
                                        a.jsxs(a.Fragment, {
                                            children: [
                                                a.jsx('span', { className: Jt }),
                                                a.jsx('span', { className: Qt, style: ce }),
                                            ],
                                        }),
                                    m && a.jsx('div', { className: Yt }),
                                ],
                            }),
                        }),
                    }),
                ],
            });
        },
    ),
    as = 'BattleAbilitySlot_c73918d9',
    is = 'BattleAbilitySlot_rank_caa5a144',
    ns = ({ rank: e, ...t }) =>
        a.jsxs('div', {
            className: as,
            children: [
                a.jsx(ss, { ...t }),
                e && a.jsx('div', { className: is, style: { backgroundImage: `url(${e})` } }),
            ],
        });
var ls = ((e) => (
    (e.None = ''),
    (e.Tiny = 'tiny'),
    (e.Small = 'small'),
    (e.Medium = 'medium'),
    (e.Large = 'large'),
    (e.Huge = 'huge'),
    e
))(ls || {});
const os = {
        root: 'Specialization_root_12d00a3f',
        base: 'Specialization_b046f24b',
        base__tiny: 'Specialization_base__tiny_12d00a3f',
        base__small: 'Specialization_base__small_12d00a3f',
        base__medium: 'Specialization_base__medium_e72e0264',
        base__large: 'Specialization_base__large_12d00a3f',
        base__huge: 'Specialization_base__huge_314b2abc',
        base__setup: 'Specialization_base__setup_258796cf',
        base__correct: 'Specialization_base__correct_2df74c11',
        glow: 'Specialization_glow_e8c18ff3',
        icon: 'Specialization_icon_5e0bdb5d',
        icon__tiny: 'Specialization_icon__tiny_12d00a3f',
        icon__small: 'Specialization_icon__small_12d00a3f',
        icon__medium: 'Specialization_icon__medium_67e03e70',
        icon__large: 'Specialization_icon__large_12d00a3f',
        icon__huge: 'Specialization_icon__huge_3f0f9146',
        specializationWrapper: 'Specialization_specializationWrapper_12d00a3f',
        specializationButton: 'Specialization_specializationButton_ad5da609',
    },
    rs = ({
        name: s,
        isCorrect: i,
        isSpecializationActive: n = !0,
        isDynamic: l,
        mediaSize: o,
        isClickable: r,
        onSpecializationClick: _,
        index: c,
    }) => {
        const d = o !== ls.None,
            b = e.useCallback(() => {
                r && n && _ && _(c);
            }, [c, r, n, _]),
            u = e.useMemo(() => {
                let e = '';
                d && (e = (o === ls.Large || o === ls.Huge ? ls.Large : ls.Medium) + '_');
                const t = `${e}${s}_${i ? 'on' : 'off'}`,
                    a = R.images.gui.maps.icons.specialization.$dyn(t);
                return a && { backgroundImage: `url(${a})` };
            }, [s, i, o, d]),
            p = e.useMemo(() => ({ spec: s, isDyn: l, isClickable: r, tooltip: 'hangarSlotSpec' }), [s, l, r]);
        if (!u) return null;
        const m = t(`specialization-${s}`, os.base, d && os[`base__${o}`], n && os.base__setup, i && os.base__correct),
            S = t(os.icon, d && os[`icon__${o}`]),
            g = d ? '' : os.specializationWrapper,
            h = a.jsxs(
                'div',
                {
                    className: m,
                    children: [a.jsx('div', { className: os.glow }), a.jsx('div', { className: S, style: u })],
                },
                s,
            );
        return a.jsx(D, {
            args: p,
            children:
                r && n
                    ? a.jsx(j, {
                          size: A.small,
                          type: L.ghost,
                          mixClass: os.specializationButton,
                          onClick: b,
                          children: h,
                      })
                    : a.jsx('div', { className: g, children: h }),
        });
    },
    _s = 'Specializations_3d396f0b',
    cs = ({
        specializations: e,
        isSpecializationActive: t = !0,
        isDynamic: s,
        mediaSize: i = ls.None,
        activeSpecsMask: n,
        onSpecializationClick: l,
    }) =>
        e.length
            ? a.jsx(
                  'div',
                  {
                      className: _s,
                      children: m(e, (e, n) =>
                          a.jsx(
                              rs,
                              {
                                  index: n,
                                  ...e,
                                  isSpecializationActive: t,
                                  isDynamic: s,
                                  mediaSize: i,
                                  onSpecializationClick: l,
                              },
                              e.name,
                          ),
                      ),
                  },
                  n,
              )
            : null,
    ds = 'OptDeviceSlot_e97e43e9',
    bs = 'OptDeviceSlot_specializations_8a51ea48',
    us = o(({ groupIndex: e, sectionIndex: s, slotIndex: i, activeSpecsMask: n, isChangeSetupIndex: l, ...o }) => {
        const { controls: r, model: _ } = ee(),
            c = _.computes.specializations(e, s, i),
            d = c.specializations.length,
            b = o.panelType === M.Setup || o.panelType === M.Compare,
            u = !W(o.panelType),
            { isDynamic: p } = c;
        return a.jsxs('div', {
            className: t(ds, d && !p && !l && 'specializationsSlot'),
            children: [
                u &&
                    a.jsx('div', {
                        className: bs,
                        children: a.jsx(cs, {
                            specializations: c.specializations,
                            isDynamic: p,
                            activeSpecsMask: n,
                            isSpecializationActive: b,
                            onSpecializationClick: (e) => {
                                r.specializationSelect({ slotId: o.id, specializationIndex: e });
                            },
                        }),
                    }),
                a.jsx(ss, { ...o, groupIndex: e, sectionIndex: s, slotIndex: i }),
            ],
        });
    }),
    ps = o(({ groupIndex: e, sectionIndex: t, slotIndex: s, sectionType: i, ...n }) => {
        const { model: l } = ee(),
            o = l.computes.slots.slot(e, t, s),
            { selectedSection: r, selectedSlot: _ } = l.ammunitionPanel.get(),
            c = (r === i ? _ : -1) === o.id;
        switch (i) {
            case me: {
                const i = o;
                return a.jsx(us, { ...i, ...n, groupIndex: e, sectionIndex: t, slotIndex: s, isSelected: c });
            }
            case fe: {
                const i = o;
                return a.jsx(ns, { ...n, ...i, groupIndex: e, sectionIndex: t, slotIndex: s, isSelected: c });
            }
            default:
                return a.jsx(ss, { ...n, isSelected: c, groupIndex: e, sectionIndex: t, slotIndex: s });
        }
    }),
    ms = 'Slots_a6e84cbb',
    Ss = o(
        ({
            groupIndex: s,
            sectionIndex: i,
            sectionType: n,
            onActiveSlotChanged: l,
            isDisabled: o,
            blockOnGrabIds: r,
            isChangeSetupIndex: _,
            setIsExitBlocked: c,
            ...d
        }) => {
            const u = e.useRef(null),
                p = e.useRef(null),
                { model: m, controls: S } = ee(),
                g = m.computes.slots.length(s, i),
                { selectedSection: h, selectedSlot: f, syncInitiator: x } = m.ammunitionPanel.get(),
                v = e.useCallback(
                    (e, t) => {
                        S.dragDropSwap({
                            sectionType: n,
                            dragId: Number(e[e.length - 1]),
                            dropId: Number(t[t.length - 1]),
                        });
                    },
                    [S, n],
                ),
                I = h === n,
                T = n === fe,
                w = I ? f : -1,
                y = `${n}-${g}slots`,
                {
                    handleGrabberAction: C,
                    dragState: D,
                    getForceCenterX: k,
                } = Q({ baseId: y, slotsLength: g, handleSwap: v, setIsExitBlocked: c, syncInitiator: x });
            e.useEffect(() => {
                I && -1 !== w && u.current && l(u, h, w);
            }, [l, I, h, w]);
            const j = (e, t) => {
                    if ((o || b.click(), 'number' != typeof t)) return console.warn('selectedSlot is not a number');
                    S.sectionSelect({ selectedSlot: t, selectedSection: e });
                },
                R = (e) => {
                    u.current = e ? e.current : null;
                },
                A = (e, t) => {
                    S.slotClear({ slotId: e, sectionType: t });
                };
            return a.jsx('div', {
                id: y,
                ref: p,
                className: t(ms, n),
                children: N(g, (t) => {
                    const c = !T && g > 1 ? `${y}-${t}` : '';
                    return a.jsxs(
                        e.Fragment,
                        {
                            children: [
                                t > 0 && a.jsx(Fe, {}),
                                a.jsx(ps, {
                                    groupIndex: s,
                                    sectionIndex: i,
                                    slotIndex: t,
                                    sectionType: n,
                                    isSectionSelected: I,
                                    isDisabled: o,
                                    contextMenuDisabled: T,
                                    slotType: n,
                                    onActiveSlotChanged: l,
                                    onSlotSelected: j,
                                    onActiveSlotRefChanged: R,
                                    onSlotClear: A,
                                    grabberId: c,
                                    containerRef: p,
                                    forceLeftUpdate: k(c),
                                    activeDragId: D.activeDragId,
                                    handleGrabberAction: C,
                                    potentialDropId: D.potentialDropId,
                                    blockOnGrabIds: r,
                                    isSetupSwitching: _,
                                    isChangeSetupIndex: _,
                                    ...d,
                                }),
                            ],
                        },
                        `slot ${s}-${i}-${t}`,
                    );
                }),
            });
        },
    ),
    gs = 'Section_8e51181c',
    hs = 'Section_label_750cbd6f',
    fs = 'Section_label__additionalGap_fc6849b1',
    xs = 'Section_counter_fbbbb372',
    vs = 'Section_configLabel_5b68792a',
    Is = 'Section_configText_b91d57e5',
    Ts = 'Section_configVehicleIcon_32705942',
    ws = o(
        ({
            groupIndex: s,
            sectionIndex: i,
            type: n,
            newItemsCount: l,
            panelType: o,
            sectionsIds: r,
            vehicle: _,
            vehicleType: c,
            isSetupSwitching: d,
            classMix: b,
            ...u
        }) => {
            const { model: p } = ee(),
                m = e.useRef(null),
                { selectedSection: S, syncInitiator: g } = p.ammunitionPanel.get(),
                h = p.computes.slots.length(s, i),
                f = p.computes.slots.existFilled(s, i),
                x = S === n,
                { selfId: v, blockOnGrabIds: I } = J(n, r),
                T = ((_ && _.length > 0) || (c && c.length > 0)) && o !== M.Battle && o !== M.Respawn,
                w = e.useMemo(
                    () => ({
                        icon: a.jsx('span', {
                            className: Ts,
                            style: {
                                backgroundImage: c
                                    ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(c)})`
                                    : '',
                            },
                        }),
                        vehicle: _,
                    }),
                    [_, c],
                ),
                y = h > 0 && o !== M.Compare && o !== M.Battle && o !== M.Respawn,
                C = R.strings.tank_setup.section.$dyn(n);
            if ('string' != typeof C) throw new Error(`No top label text for section type ${n} or it's not a string`);
            return a.jsxs('div', {
                id: d ? Ne : v,
                ref: m,
                className: t(gs, b, x && 'sectionSelected', h > 1 && 'multiSlot', g >= 0 && f && 'existFilledSlots'),
                children: [
                    T &&
                        a.jsx(Ee, {
                            className: vs,
                            children: a.jsx(E, {
                                classMix: Is,
                                text: R.strings.tank_setup.categories.reserves.config(),
                                binding: w,
                            }),
                        }),
                    y &&
                        a.jsx('div', {
                            className: t(hs, 1 === i && fs),
                            children: a.jsx(Le, {
                                text: C,
                                parentRef: m,
                                show: (!x && n !== Os && o === M.Setup) || (!x && o === M.Hangar),
                                panelType: o,
                            }),
                        }),
                    a.jsx(Ss, {
                        groupIndex: s,
                        sectionIndex: i,
                        sectionType: n,
                        panelType: o,
                        blockOnGrabIds: I,
                        ...u,
                    }),
                    Boolean(l) &&
                        a.jsx('div', {
                            className: xs,
                            children: a.jsx(B, { value: l, size: 'small', fadeInAnimation: !0 }),
                        }),
                ],
            });
        },
    ),
    ys = {
        root: 'ShellsSlot_root_e15841e1',
        base: 'ShellsSlot_df7b0ff7',
        base__grabbing: 'ShellsSlot_base__grabbing_9cdd7e05',
        shell: 'ShellsSlot_shell_d9711749',
        hover: 'ShellsSlot_hover_e4554569',
        image: 'ShellsSlot_image_efb6f1af',
        infinity: 'ShellsSlot_infinity_69a24c30',
        count: 'ShellsSlot_count_ca759020',
        shadow: 'ShellsSlot_shadow_a36a44c0',
        label: 'ShellsSlot_label_585c6795',
    },
    Cs = ({
        id: s,
        itemInstalledSetupIdx: i,
        isMountedMoreThanOne: n,
        imageSource: l,
        count: o,
        isInfinity: r,
        isSelected: _,
        panelType: c,
        intCD: d,
        slotIndex: b,
        grabberId: u,
        isSetupSwitching: p,
        containerRef: m,
        activeDragId: S,
        handleGrabberAction: g,
        forceLeftUpdate: h,
        potentialDropId: f,
        blockOnGrabIds: x,
        isDisabled: v,
        keyName: I,
        shellState: T,
    }) => {
        const w = !W(c),
            y = e.useMemo(() => ({ backgroundImage: `url(${l})` }), [l]),
            C = u && u === f,
            j = u && u === S,
            [A, L] = e.useMemo(() => {
                const e = { slotType: Se, slotId: s, fieldType: 1, intCD: d };
                return [
                    e,
                    {
                        ...e,
                        installedSlotId: s,
                        itemInstalledSetupIdx: i,
                        itemInstalledSetupSlotIdx: s,
                        isMountedMoreThanOne: n,
                    },
                ];
            }, [d, s, i, n]),
            N = e.useMemo(
                () => ({
                    id: u,
                    containerRef: m,
                    isEnabled: Boolean(u) && _,
                    isUpdateAvailable: Boolean(S),
                    handleAction: g,
                    forceCenterX: h,
                    blockOnGrabIds: x,
                }),
                [S, x, m, h, u, g, _],
            ),
            E = e.useMemo(() => ({ slotIndex: b, uniqueKey: d, slotType: Se, imageSource: null }), [d, b]);
        return a.jsx(k, {
            isEnabled: w && !p && !v,
            args: L,
            children: a.jsx(D, {
                targetId: c !== M.Setup ? R.aliases.last_stand.shared.AmmunitionPanel('resId') : void 0,
                args: A,
                isEnabled: !S,
                children: a.jsxs('div', {
                    id: `shell-slot-${b}`,
                    className: ys.base,
                    children: [
                        I &&
                            c === M.Setup &&
                            a.jsx('div', {
                                className: ys.label,
                                children: a.jsx(Ve, { text: I, show: !0, shellState: T, panelType: c }),
                            }),
                        a.jsxs('div', {
                            className: t(
                                ys.shell,
                                !S && w && !v && ys.shell__active,
                                j && ys.shell__grabbing,
                                !j && C && ys.shell__potential,
                            ),
                            children: [
                                a.jsx('div', { className: ys.shadow }),
                                a.jsx(Ye, {
                                    when: w,
                                    wrapper: He,
                                    withProps: N,
                                    children: a.jsxs(Ye, {
                                        when: w,
                                        wrapper: Wt,
                                        withProps: E,
                                        children: [
                                            a.jsx('div', { className: ys.image, style: y }),
                                            r
                                                ? a.jsx('div', { className: ys.infinity })
                                                : a.jsx('div', { className: ys.count, children: o }),
                                        ],
                                    }),
                                }),
                                a.jsx('div', { className: ys.hover }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    Ds = {
        root: 'ToggleSlot_root_d5821aae',
        base: 'ToggleSlot_fd6009fd',
        slot: 'ToggleSlot_slot_10041914',
        slot__grabbing: 'ToggleSlot_slot__grabbing_1babbfc3',
        image: 'ToggleSlot_image_fc04f6da',
        slot__active: 'ToggleSlot_slot__active_d5821aae',
        glow: 'ToggleSlot_glow_226511cf',
        toggle: 'ToggleSlot_toggle_c1004917',
    },
    ks = ({ id: s, isSelected: i, imageSource: n, onSlotSelected: l, panelType: o }) => {
        const r = e.useCallback(() => {
                !i && l(s);
            }, [s, i, l]),
            _ = t(Ds.slot, !i && Ds.slot__active, Ds.slot__compare),
            c = e.useMemo(() => ({ backgroundImage: `url(${n})` }), [n]),
            d = e.useMemo(
                () => ({ backgroundImage: `url(R.atlases.components.icon_selected_${i ? 'on' : 'off'})` }),
                [i],
            );
        return a.jsx(_t, {
            slotType: xe,
            slotId: s,
            panelType: o,
            children: a.jsx('div', {
                className: Ds.base,
                children: a.jsxs('div', {
                    className: _,
                    onClick: r,
                    id: `shell-slot-${s}`,
                    children: [
                        i && a.jsx('div', { className: Ds.glow }),
                        a.jsx('div', { className: Ds.image, style: c }),
                        a.jsx('div', { className: Ds.toggle, style: d }),
                    ],
                }),
            }),
        });
    },
    js = 'ShellContainer_dc4ea32e',
    Rs = 'ShellContainer_base__compressed_c2c260c2',
    As = o(
        ({
            groupIndex: e,
            sectionIndex: s,
            slotIndex: i,
            isCompare: n,
            handleSlotSelected: l,
            baseId: o,
            grabber: r,
            ..._
        }) => {
            const { handleGrabberAction: c, dragState: d, getForceCenterX: b } = r,
                { model: u } = ee(),
                p = u.computes.slots.length(e, s),
                m = u.computes.slots.slot(e, s, i),
                S = p > 1 ? `${o}-${m.id}` : '';
            return X(m)
                ? null
                : a.jsx(
                      'div',
                      {
                          className: t(js, 0 !== i && Rs),
                          children: n
                              ? a.jsx(ks, { panelType: M.Hangar, ...m, onSlotSelected: l })
                              : a.jsx(Cs, {
                                    ...m,
                                    slotIndex: i,
                                    grabberId: S,
                                    forceLeftUpdate: b(S),
                                    activeDragId: d.activeDragId,
                                    handleGrabberAction: c,
                                    potentialDropId: d.potentialDropId,
                                    ..._,
                                }),
                      },
                      m.id,
                  );
        },
    ),
    Ls = 'Shells_73816891',
    Ns = o(
        ({
            panelType: t,
            onSelected: s,
            isCompare: i,
            isSelected: n,
            syncInitiator: l,
            blockOnGrabIds: o,
            isDisabled: r,
            isSetupSwitching: _,
            setIsExitBlocked: d,
            groupIndex: u,
            sectionIndex: p,
        }) => {
            const { model: m, controls: S } = ee(),
                g = m.computes.slots.length(u, p),
                h = e.useRef(!1),
                f = e.useRef(null),
                x = i ? xe : Se,
                v = `${x}-${g}shells`,
                I = !H(t),
                T = e.useCallback(
                    (e) => {
                        (S.sectionSelect({ selectedSlot: e, selectedSection: x }), I && b.click());
                    },
                    [S, x, I],
                ),
                w = e.useCallback(
                    (e, t) => {
                        S.dragDropSwap({
                            sectionType: x,
                            dragId: Number(e[e.length - 1]),
                            dropId: Number(t[t.length - 1]),
                        });
                    },
                    [S, x],
                ),
                y = Q({ baseId: v, slotsLength: g, handleSwap: w, setIsExitBlocked: d, syncInitiator: l });
            return (
                e.useEffect(
                    () =>
                        c(() => {
                            h.current = !0;
                        }),
                    [],
                ),
                e.useEffect(() => {
                    if (n && t === M.Setup) {
                        if (!h.current)
                            return c(() => {
                                s();
                            });
                        s();
                    }
                }, [n, t, s]),
                a.jsx('div', {
                    id: v,
                    ref: f,
                    className: Ls,
                    onMouseEnter: () => {
                        !r && I && b.highlight();
                    },
                    children: N(g, (e) =>
                        a.jsx(
                            As,
                            {
                                groupIndex: u,
                                sectionIndex: p,
                                slotIndex: e,
                                isCompare: i,
                                containerRef: f,
                                handleSlotSelected: T,
                                panelType: t,
                                blockOnGrabIds: o,
                                isSelected: n,
                                isDisabled: r,
                                isSetupSwitching: _,
                                grabber: y,
                                baseId: v,
                            },
                            `${u} ${p} ${e}`,
                        ),
                    ),
                })
            );
        },
    ),
    Es = {
        root: 'ShellsSection_root_351fa6c6',
        base: 'ShellsSection_96d797e1',
        base__grabbing: 'ShellsSection_base__grabbing_f22e8f5d',
        base__compressed: 'ShellsSection_base__compressed_4638c8dd',
        attention: 'ShellsSection_attention_2e19185a',
        blinking: 'ShellsSection_blinking_351fa6c6',
        border: 'ShellsSection_border_be906716',
        border__double: 'ShellsSection_border__double_ba11490b',
        border__triple: 'ShellsSection_border__triple_62ee85d6',
        disabled: 'ShellsSection_disabled_25f8765e',
        disabled__shellSwapped: 'ShellsSection_disabled__shellSwapped_4a53a86f',
    },
    Bs = [M.Hangar, M.Battle, M.Prebattle, M.Respawn],
    Fs = o(
        ({
            type: s,
            sectionsIds: i,
            panelType: n,
            onActiveSlotChanged: l,
            isDisabled: o,
            isBorderActive: r,
            classMix: _,
            isSetupSwitching: c,
            setIsExitBlocked: d,
            newItemsCount: b,
            groupIndex: u,
            sectionIndex: p,
        }) => {
            const { model: m } = ee(),
                { ammoNotFull: S, selectedSection: g, syncInitiator: h } = m.ammunitionPanel.get(),
                f = e.useRef(null),
                x = n === M.Compare,
                v = n === M.Prebattle && s === Se,
                I = g === s || v,
                T = e.useCallback(() => {
                    l(f, g, 0);
                }, [l, g]),
                { selfId: w, blockOnGrabIds: y } = J(s, i),
                C = ((e) => Bs.includes(e))(n) && !o && S,
                D = m.computes.slots.filteredLength(u, p);
            return a.jsxs('div', {
                id: c ? Ne : w,
                className: t(
                    Es.base,
                    _,
                    Es[`base__${n}`],
                    !r && I && Es.base__selected,
                    x && Es.base__compare,
                    o && Es.base__disabled,
                ),
                ref: f,
                children: [
                    C && a.jsx('div', { className: Es.attention }),
                    C &&
                        a.jsx('div', {
                            className: t(Es.border, 2 === D && Es.border__double, 3 === D && Es.border__triple),
                        }),
                    a.jsx(Ns, {
                        groupIndex: u,
                        sectionIndex: p,
                        panelType: n,
                        onSelected: T,
                        isSelected: I,
                        isDisabled: o,
                        isCompare: x,
                        syncInitiator: h,
                        blockOnGrabIds: y,
                        isSetupSwitching: c,
                        setIsExitBlocked: d,
                    }),
                    Boolean(b) &&
                        a.jsx('div', {
                            className: Es.counter,
                            children: a.jsx(B, { value: b, size: 'small', fadeInAnimation: !0 }),
                        }),
                    o && a.jsx('div', { className: t(Es.disabled, 0 != p && Es.disabled__shellSwapped) }),
                ],
            });
        },
    ),
    $s = {
        root: 'Sections_root_fde26e3b',
        base: 'Sections_1821e728',
        section: 'Sections_section_1c52aea1',
        section__battle: 'Sections_section__battle_fde26e3b',
        section__small: 'Sections_section__small_fde26e3b',
        section__extraSmall: 'Sections_section__extraSmall_69d0e362',
        section__first: 'Sections_section__first_301ae757',
        section__additionalGap: 'Sections_section__additionalGap_36c5af59',
    },
    Os = 'ls_consumables',
    zs = o(
        ({
            groupIndex: s,
            panelType: i,
            isDisabled: n = !1,
            onActiveSlotChanged: o,
            isBorderActive: r,
            isChangeSetupIndex: _,
            setIsExitBlocked: c,
        }) => {
            const { model: d } = ee(),
                b = P(['section'], $s),
                u = d.computes.sections.IDs(s),
                p = {
                    panelType: i,
                    isDisabled: n,
                    onActiveSlotChanged: o,
                    isBorderActive: r,
                    sectionsIds: u,
                    isChangeSetupIndex: _,
                    setIsExitBlocked: c,
                };
            return a.jsx('div', {
                className: $s.base,
                children: N(d.computes.sections.length(s), (n) => {
                    const o = d.computes.sections.section(s, n);
                    if (!o.slots || !o.slots.length) return null;
                    const r = t(
                        b.section,
                        0 !== n && W(i) && $s.section__battle,
                        0 === n && $s.section__first,
                        1 === n && $s.section__additionalGap,
                    );
                    if (o.type === Se || o.type === xe) {
                        const t = o;
                        return a.jsx(
                            l.Fragment,
                            {
                                children: e.createElement(Fs, {
                                    ...t,
                                    ...p,
                                    groupIndex: s,
                                    sectionIndex: n,
                                    isSetupSwitching: _,
                                    key: `${o.name}${s}${o.slots.length}`,
                                    classMix: r,
                                }),
                            },
                            `${o.name}${n}${o.slots.length}`,
                        );
                    }
                    return e.createElement(ws, {
                        ...o,
                        ...p,
                        groupIndex: s,
                        sectionIndex: n,
                        isSetupSwitching: _,
                        key: `${o.name}${s}${o.slots.length}`,
                        classMix: r,
                    });
                }),
            });
        },
    ),
    Ps = {
        root: 'Group_root_3e43713e',
        base: 'Group_4e387277',
        wrapper: 'Group_wrapper_13aeff54',
        switch: 'Group_switch_3696ba35',
        switch__battle: 'Group_switch__battle_3e43713e',
        switch__small: 'Group_switch__small_3e43713e',
        switch__extraSmall: 'Group_switch__extraSmall_f6e86705',
        prebattleSwitchIndicator: 'Group_prebattleSwitchIndicator_3f486136',
        hint: 'Group_hint_5a4fab2d',
        hint__disabled: 'Group_hint__disabled_2234244e',
    },
    Gs = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
    Ms = (e) => e.setupSelector.hotKeys,
    Xs = (e, t) => ({ index: e.currentIndex, setSetupSwitching: t }),
    Hs = o(({ groupIndex: e, sectionProps: s, isSetupSwitching: i, setSetupSwitching: n }) => {
        const l = P(['switch'], Ps),
            { model: o } = ee(),
            { isDisabled: r } = o.root.get(),
            _ = o.computes.groups.group(e);
        return a.jsxs('div', {
            className: Ps.base,
            children: [
                a.jsxs('div', {
                    className: Ps.wrapper,
                    children: [
                        a.jsx(ie, { ...Xs(_, n), children: a.jsx(zs, { ...s, groupIndex: e, isChangeSetupIndex: i }) }),
                        _.setupSelector.isSwitchEnabled &&
                            a.jsx('div', {
                                className: t(l.switch, H(s.panelType) && Ps.switch__battle),
                                children:
                                    _.setupSelector.isPrebattleSwitchDisabled &&
                                    a.jsx(F, {
                                        header: Gs.title(),
                                        body: String(Gs.desc.$dyn(`c_${_.groupId}`)),
                                        children: a.jsx('div', { className: Ps.prebattleSwitchIndicator }),
                                    }),
                            }),
                    ],
                }),
                ((c = _),
                (d = s.panelType),
                (d === M.Battle || d === M.Respawn) &&
                    c.setupSelector.isSwitchEnabled &&
                    Ms(c) &&
                    a.jsx('div', {
                        className: t(Ps.hint, r && Ps.hint__disabled),
                        children: a.jsx(pe, { hotKeys: Ms(_) }),
                    })),
            ],
        });
        var c, d;
    }),
    Ws = 'Groups_1c3577ff',
    qs = o(({ sectionProps: t, isSetupSwitching: s, isReady: i, setSetupSwitching: n, children: l }) => {
        const { model: o, controls: r } = ee(),
            { changeSetupIndex: _ } = r;
        (e.useEffect(() => {
            (t.panelType !== M.Hangar && t.panelType !== M.Setup) || !i || n(!1);
        }, [i, t.panelType, n]),
            e.useEffect(() => {
                t.panelType === M.Respawn && n(!1);
            }, [t.panelType, n]));
        const c = e.useCallback(
            (e) => {
                (t.panelType === M.Respawn && n(!0), _(e));
            },
            [_, t.panelType, n],
        );
        return a.jsxs('div', {
            className: Ws,
            children: [
                N(o.computes.groups.length(), (e) =>
                    a.jsx(
                        Hs,
                        {
                            sectionProps: t,
                            groupIndex: e,
                            isSetupSwitching: s,
                            setSetupSwitching: n,
                            handleSetupSwitching: c,
                        },
                        `group-${e}`,
                    ),
                ),
                l,
            ],
        });
    }),
    Ks = 'Border_4fe957c5',
    Us = 'Border_3070a776',
    Vs = 'Border_wrapper_684383fb',
    Ys = 'Border_active_ed37b388',
    Js = e.memo(({ slotOffset: t, slotWidth: s, onAnimationEnd: i }) => {
        const n = e.useRef(null),
            l = e.useRef(!1);
        e.useEffect(() => {
            l.current = !0;
        }, [t, s]);
        const o = e.useCallback(() => {
            (l.current && i(), (l.current = !1));
        }, [i]);
        e.useEffect(() => {
            const e = n.current;
            return (
                e && e.addEventListener('transitionend', o),
                () => {
                    e && e.removeEventListener('transitionend', o);
                }
            );
        }, [o]);
        const r = e.useMemo(() => ({ left: t }), [t]),
            _ = e.useMemo(() => ({ width: s }), [s]);
        return a.jsx('div', {
            className: Ks,
            children: a.jsx('div', {
                ref: n,
                className: Us,
                style: r,
                children: a.jsx('div', { className: Vs, children: a.jsx('div', { className: Ys, style: _ }) }),
            }),
        });
    }),
    Qs = 'RoleSkillSlot_ac43ca92',
    Zs = 'RoleSkillSlot_icon_39aacf42',
    ea = ({ roleSkill: s, tooltipId: i, tooltipHeader: n, tooltipBody: l, className: o }) => {
        const r = e.useMemo(
            () => ({
                args: { tooltipId: i, roleSkill: s, header: n, body: l, hasHtmlContent: !0 },
                header: n,
                body: l,
                ignoreShowDelay: !0,
            }),
            [s, n, l, i],
        );
        return a.jsx($, {
            tooltipArgs: r,
            className: t(Qs, o),
            children: a.jsx('div', {
                className: Zs,
                style: { backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(s)})` },
            }),
        });
    },
    ta = 'SlotGlow_slotGlow_2e5d8400',
    sa = 'SlotGlow_glow_7665a94',
    aa = 'SlotGlow_glow__initialized_841b414',
    ia = 'SlotGlow_glow__shown_a06f32e5',
    na = 'SlotGlow_glow__hidden_90ec79c9',
    la = e.memo(({ slotOffset: s, slotWidth: i, isAnimationRunning: n }) => {
        const [l, o] = e.useState({ offset: s, slotWidth: i }),
            r = e.useRef({ initialized: !1, offset: s, slotWidth: i });
        (e.useEffect(() => {
            let { initialized: e } = r.current;
            (!e && s && ((e = !0), o({ offset: s, slotWidth: i })),
                (r.current = { initialized: e, offset: s, slotWidth: i }));
        }, [s, i]),
            e.useEffect(() => {
                n || o(r.current);
            }, [n]));
        const _ = e.useMemo(() => {
                const e = l.slotWidth + 25;
                return { left: l.offset, width: e, backgroundSize: `${d(e)}rem 100%` };
            }, [l.offset, l.slotWidth]),
            c = !n && l.offset === r.current.offset,
            b = t(sa, r.current.initialized && aa, c ? ia : na);
        return a.jsx('div', { className: ta, children: a.jsx('div', { className: b, style: _ }) });
    }),
    oa = {
        root: 'AmmunitionPanel_root_ec5fa6f8',
        base: 'AmmunitionPanel_295fc0f',
        base__locked: 'AmmunitionPanel_base__locked_a5bae142',
        base__disabled: 'AmmunitionPanel_base__disabled_2cda449f',
        base__hidden: 'AmmunitionPanel_base__hidden_20067f9a',
        border: 'AmmunitionPanel_border_9dd14789',
        border__hidden: 'AmmunitionPanel_border__hidden_20067f9a',
        roleSkillSlot: 'AmmunitionPanel_roleSkillSlot_38874d4',
        roleSkillSlot__battle: 'AmmunitionPanel_roleSkillSlot__battle_ec5fa6f8',
        roleSkillSlot__small: 'AmmunitionPanel_roleSkillSlot__small_ec5fa6f8',
        roleSkillSlot__extraSmall: 'AmmunitionPanel_roleSkillSlot__extraSmall_7bbb51d8',
        roleSkillSlot__prebattle: 'AmmunitionPanel_roleSkillSlot__prebattle_ec5fa6f8',
    },
    ra = o(({ show: s = !0, isReady: i = !0, panelType: n, isDisabled: l = !1 }) => {
        const { model: o, controls: r } = ee(),
            { isSetupSwitchInProgress: b, syncInitiator: u } = o.ammunitionPanel.get(),
            p = o.roleSkillSlot.get(),
            m = e.useRef(!1),
            [S, g] = e.useState({ slotWidth: 0, slotOffset: 0 }),
            [h, f] = e.useState(!1),
            [x, v] = e.useState(!1),
            I = e.useRef(null),
            T = e.useRef({ element: null, generation: 0, slotIndex: null, sectionIndex: null }),
            w = e.useCallback(
                (e, t) => {
                    if (h || b || n !== M.Hangar) return;
                    const s = t ?? { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                    r.sectionResized({ sectionType: e, ...s });
                },
                [h, b, n, r],
            ),
            y = e.useCallback(
                (e) => {
                    w('main', e);
                },
                [w],
            );
        ((t, s, a, i = []) => {
            const n = _(
                () =>
                    c(() =>
                        c(() => {
                            if (t.current) {
                                const e = t.current.getBoundingClientRect(),
                                    a = {
                                        width: d(e.width),
                                        height: d(e.height),
                                        offsetX: d(e.left),
                                        offsetY: d(e.top),
                                    };
                                (window.tutorialApi.updateComponents(), s(a));
                            }
                        }),
                    ),
                [s, t],
            );
            (e.useEffect(() => {
                n();
            }, [n, ...i]),
                e.useEffect(
                    () => (
                        engine.on('clientResized', n),
                        () => {
                            engine.off('clientResized', n);
                        }
                    ),
                    [a, n],
                ));
        })(I, y, !0, [u]);
        const C = e.useCallback(() => {
                v(!1);
            }, []),
            D = O(),
            k = e.useCallback(() => {
                if (T.current.element && I.current) {
                    const e = T.current.element.getBoundingClientRect(),
                        t = I.current.getBoundingClientRect();
                    g({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                }
            }, [D]),
            j = e.useCallback(
                (e, t, s) => {
                    if (e.current && I.current) {
                        const a = ((e, t, s) => e !== s.current.slotIndex || t !== s.current.sectionIndex)(s, t, T);
                        ((T.current.element = e.current),
                            (T.current.slotIndex = s),
                            (T.current.sectionIndex = t),
                            m.current && a ? v(!0) : (m.current = !0),
                            T.current.generation && k());
                    }
                },
                [k],
            ),
            R = e.useCallback(
                () =>
                    c(() => {
                        ((T.current.generation += 1), k());
                    }),
                [T, k],
            );
        e.useEffect(
            () => (
                window.engine.on('clientResized', R),
                c(() => {
                    (window.engine.off('clientResized', R), y(), R());
                })
            ),
            [y, R],
        );
        const { slotWidth: A, slotOffset: L } = S,
            N = n === M.Setup || n === M.Compare,
            E = e.useMemo(
                () => ({ panelType: n, isDisabled: l, onActiveSlotChanged: j, isBorderActive: x }),
                [x, l, j, n],
            ),
            B = P(['roleSkillSlot'], oa);
        return a.jsxs('div', {
            ref: I,
            className: t(oa.base, !i && oa.base__locked, !s && oa.base__hidden, l && oa.base__disabled),
            children: [
                N && a.jsx(la, { slotOffset: L, slotWidth: A, isAnimationRunning: x }, `${T.current.generation}${L}`),
                a.jsx(qs, {
                    isSetupSwitching: b || h,
                    sectionProps: E,
                    isReady: i,
                    setSetupSwitching: f,
                    children:
                        p.roleSkill &&
                        a.jsx(ea, {
                            roleSkill: p.roleSkill,
                            tooltipId: p.tooltipId,
                            tooltipHeader: p.tooltipHeader,
                            tooltipBody: p.tooltipBody,
                            className: t(oa.roleSkillSlot, oa[`roleSkillSlot__${n}`], B.roleSkillSlot),
                        }),
                }),
                N &&
                    a.jsx('div', {
                        className: t(oa.border, !x && oa.border__hidden),
                        children: a.jsx(Js, { slotWidth: A, slotOffset: L, onAnimationEnd: C }),
                    }),
            ],
        });
    });
export {
    Ct as A,
    he as B,
    ge as C,
    vt as D,
    Ie as E,
    Os as L,
    Z as M,
    me as O,
    M as P,
    ft as R,
    gt as S,
    St as T,
    yt as U,
    ht as a,
    xt as b,
    It as c,
    Tt as d,
    wt as e,
    cs as f,
    ve as g,
    we as h,
    Te as i,
    Se as j,
    fe as k,
    ra as l,
    ee as m,
    rt as u,
};
