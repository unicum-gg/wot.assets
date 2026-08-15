'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [2736],
    {
        3874: (e, t, o) => {
            let l;
            (o.d(t, { e: () => i, f: () => l }),
                (function (e) {
                    ((e.ShowArrows = 'showArrows'), (e.ShowMarker = 'showMarker'), (e.UpdateToys = 'updateToys'));
                })(l || (l = {})));
            const s = (e) => e.startTime + ((null == e ? void 0 : e.duration) || 0),
                n = { startTime: 0, duration: 800 },
                a = { startTime: s(n) - 300, duration: 1400 },
                r = { startTime: s(a) - 400 },
                i = { [l.ShowArrows]: n, [l.ShowMarker]: a, [l.UpdateToys]: r };
        },
        406: (e, t, o) => {
            o.d(t, { B: () => c });
            var l = o(280),
                s = o(6179),
                n = o.n(s);
            const a = {
                    creamColor: 'FormatTextWithColorTags_creamColor_8f',
                    brownColor: 'FormatTextWithColorTags_brownColor_90',
                    credColor: 'FormatTextWithColorTags_credColor_a7',
                    blueColor: 'FormatTextWithColorTags_blueColor_73',
                    lightBlueColor: 'FormatTextWithColorTags_lightBlueColor_fa',
                    goldColor: 'FormatTextWithColorTags_goldColor_d6',
                    grayColor: 'FormatTextWithColorTags_grayColor_8b',
                    whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_4b',
                    bondColor: 'FormatTextWithColorTags_bondColor_53',
                    yellowColor: 'FormatTextWithColorTags_yellowColor_84',
                },
                r = ['text', 'binding', 'className'];
            function i() {
                return (
                    (i = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var o = arguments[t];
                                  for (var l in o) ({}).hasOwnProperty.call(o, l) && (e[l] = o[l]);
                              }
                              return e;
                          }),
                    i.apply(null, arguments)
                );
            }
            const c = (0, s.memo)((e) => {
                let t = e.text,
                    o = e.binding,
                    s = e.className,
                    c = (function (e, t) {
                        if (null == e) return {};
                        var o = {};
                        for (var l in e)
                            if ({}.hasOwnProperty.call(e, l)) {
                                if (t.indexOf(l) >= 0) continue;
                                o[l] = e[l];
                            }
                        return o;
                    })(e, r);
                const d = ((e, t) => {
                        const o =
                                /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                            s = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                            r = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                            i = t ? Object.assign({}, t) : {};
                        let c = o.exec(e),
                            d = e,
                            _ = 0;
                        for (; c;) {
                            const u = c[0],
                                y = s.exec(u),
                                p = r.exec(u),
                                g = c[1];
                            if (y && p) {
                                const e = y[0],
                                    o = e + _++ + p[0].replaceAll(')', '') + e;
                                ((d = d.replace(u, `%(${o})`)),
                                    (i[o] = a[e]
                                        ? n().createElement(
                                              'span',
                                              { className: a[e] },
                                              n().createElement(l.z, { text: g, binding: t }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: ((m = e), { color: `#${m}` }) },
                                              n().createElement(l.z, { text: g, binding: t }),
                                          )));
                            }
                            c = o.exec(e);
                        }
                        var m;
                        return [d, i];
                    })(t, o),
                    _ = d[0],
                    m = d[1];
                return n().createElement(l.z, i({ text: _, classMix: s, binding: m }, c));
            });
        },
        3614: (e, t, o) => {
            o.d(t, { W: () => B });
            var l = o(6483),
                s = o.n(l),
                n = o(122),
                a = o(6247),
                r = o(3403),
                i = o(6179),
                c = o.n(i),
                d = o(3874),
                _ = o(5678),
                m = o(3138),
                u = o(6808),
                y = o(7522),
                p = o(7727),
                g = o(7030);
            const b = 'NewToyItem_base_f9',
                S = 'NewToyItem_item_4b',
                v = ({ icon: e, isVisible: t, delay: o, duration: l, onAnimationEnd: s }) => {
                    const n = (0, g.useSpring)(() => ({
                            config: { duration: l, easing: y.Z.easeInOutCubic },
                            onStart: () => (0, p.G)(R.sounds.hangar_newyear_slot_fill_in()),
                            from: { opacity: 0, y: '0%', scale: 0.5 },
                        })),
                        a = n[0],
                        r = n[1];
                    return (
                        (0, i.useEffect)(() => {
                            t &&
                                r.start({
                                    to: [{ opacity: 1, scale: 1 }, { y: '100%' }],
                                    onRest: () => (null == s ? void 0 : s()),
                                    delay: o,
                                });
                        }, [r, o, t, s]),
                        c().createElement(
                            g.animated.div,
                            { style: a, className: b },
                            c().createElement('div', {
                                className: S,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.newYear.toys.medium.$dyn(e)})`,
                                },
                            }),
                        )
                    );
                };
            var T = o(9987),
                k = o(3415),
                E = o(939),
                h = o(8526);
            const f = {
                    base: 'ToySlot_base_96',
                    inner: 'ToySlot_inner_06',
                    inner__withGlow: 'ToySlot_inner__withGlow_cd',
                    inner__selected: 'ToySlot_inner__selected_30',
                    inner__locked: 'ToySlot_inner__locked_64',
                    selectionIndicator: 'ToySlot_selectionIndicator_f9',
                    selectionIndicator__active: 'ToySlot_selectionIndicator__active_fe',
                    counter: 'ToySlot_counter_f5',
                    counter__firstAppearance: 'ToySlot_counter__firstAppearance_a3',
                    counterAppearance: 'ToySlot_counterAppearance_a3',
                    counter__blink: 'ToySlot_counter__blink_9d',
                    blink: 'ToySlot_blink_b9',
                    image: 'ToySlot_image_3b',
                    inner__lockAnimated: 'ToySlot_inner__lockAnimated_a3',
                    lock: 'ToySlot_lock_b5',
                    lockLine: 'ToySlot_lockLine_d9',
                    lockIcon: 'ToySlot_lockIcon_af',
                    slideInFadeIn: 'ToySlot_slideInFadeIn_9e',
                    fadeOut: 'ToySlot_fadeOut_26',
                    fadeIn: 'ToySlot_fadeIn_c5',
                    fadeInWithScale: 'ToySlot_fadeInWithScale_80',
                    slideUp: 'ToySlot_slideUp_75',
                    scale: 'ToySlot_scale_28',
                    spin: 'ToySlot_spin_44',
                    slideInNotification: 'ToySlot_slideInNotification_c1',
                },
                w = (e, t, o, l, s) =>
                    s
                        ? e < 0
                            ? { contentId: -1, isEnabled: !1 }
                            : {
                                  contentId: R.views.lobby.new_year.tooltips.NyDecorationTooltip('resId'),
                                  args: { toyID: e },
                              }
                        : o
                          ? {
                                contentId: R.views.lobby.new_year.tooltips.NySlotLockedTooltip('resId'),
                                args: { level: l },
                            }
                          : e < 0
                            ? { contentId: -1, isEnabled: !1 }
                            : t === E.X.GuestD
                              ? {
                                    contentId: R.views.lobby.new_year.tooltips.NyDogDecorationTooltip('resId'),
                                    args: { toyID: e, state: E.Y.Selected },
                                }
                              : {
                                    contentId: R.views.lobby.new_year.tooltips.NyDecorationTooltip('resId'),
                                    args: { toyID: e },
                                };
            let I, N;
            (!(function (e) {
                ((e.Static = 'static'), (e.FirstAppearance = 'firstAppearance'), (e.Blink = 'blink'));
            })(I || (I = {})),
                (function (e) {
                    ((e.Locked = 'locked'), (e.LockAnimated = 'lockAnimated'), (e.LockHidden = 'lockHidden'));
                })(N || (N = {})));
            const C = ({
                toyId: e,
                slotId: t,
                icon: o,
                slotType: l,
                isDisabled: n = !1,
                isSelected: a = !1,
                isNew: r = !1,
                lockState: d = N.LockHidden,
                unlockLevel: _ = 0,
                bubbleAnimation: m = I.Static,
                onMouseLeave: u,
                onMouseEnter: y,
                selectSlot: g,
            }) => {
                const b = (0, i.useRef)(!1),
                    S = () => {
                        ((0, p.G)(R.sounds.hangar_newyear_slot_over_off()), null == u || u(t), (b.current = !1));
                    };
                return (
                    (0, h.I9)(() => {
                        b.current && S();
                    }),
                    c().createElement(
                        k.l,
                        { tooltipArgs: w(e, l, d === N.Locked, _, n), className: f.base },
                        c().createElement(
                            'div',
                            {
                                className: s()(
                                    f.inner,
                                    a && f.inner__selected,
                                    !n && f.inner__withGlow,
                                    f[`inner__${d}`],
                                ),
                                onMouseEnter: () => {
                                    ((0, p.G)(R.sounds.hangar_newyear_slot_over()),
                                        null == y || y(t),
                                        (b.current = !0));
                                },
                                onMouseLeave: S,
                                onClick: () => {
                                    n || ((0, p.G)(R.sounds.highlight_red_butt()), null == g || g(t));
                                },
                            },
                            c().createElement('span', {
                                className: s()(f.selectionIndicator, a && f.selectionIndicator__active),
                            }),
                            c().createElement('div', { className: f.image, style: { backgroundImage: `url(${o})` } }),
                            d !== N.LockHidden &&
                                c().createElement(
                                    'div',
                                    { className: f.lock },
                                    c().createElement('div', { className: f.lockLine }),
                                    c().createElement('div', { className: f.lockIcon }),
                                ),
                            r &&
                                c().createElement(
                                    'div',
                                    { className: s()(f.counter, m && f[`counter__${m}`]) },
                                    c().createElement(T.A, { size: 'big', isEmpty: !0 }),
                                ),
                        ),
                    )
                );
            };
            var L = o(8343);
            const A = 'SlotWrapper_base_89',
                x = 'SlotWrapper_newToys_b1',
                D = (e, t) => (e ? N.Locked : t ? N.LockAnimated : N.LockHidden),
                O = (0, r.Pi)(
                    ({
                        groupIndex: e,
                        slotIndex: t,
                        hasAnimation: o,
                        isDisabled: l = !1,
                        className: n,
                        customPopoverSize: a,
                        onAnimationEnd: r,
                    }) => {
                        const d = (0, _.t)(),
                            y = d.model,
                            p = d.model.computes,
                            g = d.controls,
                            b = y.root.get().hasNewToysAnimation,
                            S = p.getSlot(e, t),
                            T = S.toyId,
                            k = S.slotId,
                            E = S.icon,
                            h = S.slotType,
                            f = S.isNew,
                            w = S.newToys,
                            N = S.isLocked,
                            O = S.unlockLevel,
                            R = p.isSelectedSlot(k),
                            P = !p.getSlot(e, t + 1).newToys.length,
                            H = (0, i.useRef)(null),
                            W = ((e) => {
                                if (e)
                                    return m.O.client.getSize().width >> 1 > e.getBoundingClientRect().x
                                        ? 'left'
                                        : 'right';
                                return 'center';
                            })(H.current),
                            $ = 1 === y.computes.getSlotsLength(e) ? 500 : 450,
                            G = (0, i.useState)(!1),
                            F = G[0],
                            M = G[1],
                            B = (0, i.useState)(f),
                            z = B[0],
                            Y = B[1],
                            U = (0, i.useState)(I.Static),
                            j = U[0],
                            V = U[1],
                            X = (0, i.useCallback)(() => {
                                (V(z ? I.Blink : I.FirstAppearance), Y(f), null == r || r(P), M(!1));
                            }, [z, f, r, P]);
                        return (
                            (0, i.useEffect)(() => {
                                b ? w.length > 0 && (M(!0), V(I.Static)) : Y(f);
                            }, [b, f, w.length]),
                            c().createElement(
                                'div',
                                { className: s()(A, n), ref: H },
                                F &&
                                    c().createElement(
                                        'div',
                                        { className: x },
                                        u.Wt.map(w, (e, t) =>
                                            c().createElement(v, {
                                                isVisible: o && b,
                                                key: t,
                                                icon: e,
                                                delay: (t + 1) * $,
                                                duration: $,
                                                onAnimationEnd: t === w.length - 1 ? X : () => {},
                                            }),
                                        ),
                                    ),
                                c().createElement(C, {
                                    slotId: k,
                                    icon: E,
                                    toyId: T,
                                    slotType: h,
                                    isSelected: R,
                                    isDisabled: l,
                                    isNew: z,
                                    bubbleAnimation: j,
                                    onMouseEnter: g.onHoverSlot,
                                    onMouseLeave: g.onHoverOutSlot,
                                    selectSlot: R ? g.closeToysList : g.selectSlot,
                                    lockState: D(N, b),
                                    unlockLevel: O,
                                }),
                                R &&
                                    !l &&
                                    !N &&
                                    c().createElement(L.V, { root: H, positionCorrection: W, customSize: a }),
                            )
                        );
                    },
                ),
                P = 'SlotsGroup_base_e9',
                H = 'SlotsGroup_slot_bd',
                W = 'SlotsGroup_slot__disabled_a5',
                $ = (0, r.Pi)(
                    ({
                        className: e,
                        groupIndex: t,
                        hasAnimation: o = !1,
                        isDisabled: l = !1,
                        toyPopoverSize: n,
                        handleAnimationEnd: r,
                    }) => {
                        const d = (0, _.t)().model.computes.getSlotsLength(t),
                            m = (0, i.useCallback)(
                                (e) => {
                                    e && r(t);
                                },
                                [t, r],
                            );
                        return c().createElement(
                            'div',
                            { className: s()(P, e) },
                            (0, a.K)(d, (e) =>
                                c().createElement(O, {
                                    hasAnimation: o,
                                    key: e,
                                    className: s()(H, l && W),
                                    slotIndex: e,
                                    groupIndex: t,
                                    isDisabled: l,
                                    customPopoverSize: n,
                                    onAnimationEnd: m,
                                }),
                            ),
                        );
                    },
                ),
                G = 'ToySlotsBar_base_22',
                F = 'ToySlotsBar_base__hidden_e6',
                M = 'ToySlotsBar_slotsGroup_e4',
                B = (0, r.Pi)(
                    ({
                        isDisabled: e = !1,
                        isHidden: t = !1,
                        className: o,
                        toyPopoverSize: l,
                        handleAnimationEnd: r,
                    }) => {
                        const m = (0, _.t)(),
                            u = m.model,
                            y = m.controls,
                            p = u.computes.groupSlotsLength(),
                            g = u.root.get().hasNewToysAnimation,
                            b = (0, i.useState)(!1),
                            S = b[0],
                            v = b[1];
                        (0, i.useEffect)(() => {
                            if (g && !t)
                                return (0, n.F)(() => {
                                    v(!0);
                                }, d.e[d.f.UpdateToys].startTime);
                        }, [t, g]);
                        const T = (0, i.useCallback)(
                            (e) => {
                                e === u.computes.groupIndexWithMaxNewToys() &&
                                    (v(!1), y.onAnimationEnd(), null == r || r());
                            },
                            [y, r, u.computes],
                        );
                        return c().createElement(
                            'div',
                            { className: s()(G, t && F, o) },
                            (0, a.K)(p, (t) =>
                                c().createElement(
                                    'div',
                                    { className: M, key: t },
                                    c().createElement($, {
                                        groupIndex: t,
                                        hasAnimation: S,
                                        isDisabled: e,
                                        toyPopoverSize: l,
                                        handleAnimationEnd: T,
                                    }),
                                ),
                            ),
                        );
                    },
                );
        },
        8343: (e, t, o) => {
            o.d(t, { o: () => D, V: () => O });
            var l = o(6483),
                s = o.n(l),
                n = o(8526),
                a = o(5521),
                r = o(7727),
                i = o(9916),
                c = o(3403),
                d = o(6179),
                _ = o.n(d),
                m = o(5678);
            const u = 'Header_base_3a',
                y = 'Header_icon_ff',
                p = 'Header_title_d1',
                g = ({ type: e }) =>
                    _().createElement(
                        'div',
                        { className: u },
                        _().createElement('div', {
                            className: y,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.newYear.decoration_types.craft.$dyn(e)})`,
                            },
                        }),
                        _().createElement('div', { className: p }, R.strings.ny.decorationTypes.$dyn(e)),
                    );
            var b = o(1362),
                S = o(198),
                v = o(9987),
                T = o(2056),
                k = o(939);
            const E = {
                    base: 'Slot_base_69',
                    base__selected: 'Slot_base__selected_58',
                    glowWrapper: 'Slot_glowWrapper_07',
                    glow: 'Slot_glow_ba',
                    item: 'Slot_item_85',
                    item__selected: 'Slot_item__selected_cd',
                    item__available: 'Slot_item__available_04',
                    counter: 'Slot_counter_53',
                    selectedCheck: 'Slot_selectedCheck_73',
                    selectionIndicator: 'Slot_selectionIndicator_18',
                    locked: 'Slot_locked_75',
                    lockedLine: 'Slot_lockedLine_d1',
                    lockedIcon: 'Slot_lockedIcon_3f',
                    dropSource: 'Slot_dropSource_44',
                },
                h = (e) => e === k.Y.Selected || e === k.Y.Available,
                f = ({
                    model: { toyID: e, state: t, icon: o, isNew: l, slotType: n, dropSource: a },
                    onClick: i,
                    seenHandler: c,
                    className: m,
                }) => {
                    const u = (0, d.useState)(l),
                        y = u[0],
                        p = u[1];
                    return _().createElement(
                        T.u,
                        ((e, t, o, l) => {
                            switch (o) {
                                case k.X.GuestD:
                                    return {
                                        contentId: R.views.lobby.new_year.tooltips.NyDogDecorationTooltip('resId'),
                                        args: { toyID: e, state: l },
                                    };
                                case k.X.Decoration:
                                default:
                                    return {
                                        contentId: t
                                            ? R.views.lobby.new_year.tooltips.NyDecorationTooltip('resId')
                                            : R.views.lobby.new_year.tooltips.NyDecorationUnavailableTooltip('resId'),
                                        args: { toyID: e },
                                    };
                            }
                        })(e, h(t), n, t),
                        _().createElement(
                            'div',
                            {
                                className: s()(E.base, m, E[`base__${t}`]),
                                onMouseEnter: () => {
                                    (h(t) && (0, r.G)(R.sounds.highlight()), y && (p(!1), null == c || c()));
                                },
                            },
                            h(t) &&
                                _().createElement(
                                    'div',
                                    { className: E.glowWrapper },
                                    _().createElement('div', { className: E.glow }),
                                ),
                            _().createElement('div', {
                                className: s()(E.item, E[`item__${t}`]),
                                onClick: (e) => {
                                    t !== k.Y.Disabled &&
                                        t !== k.Y.Locked &&
                                        ((0, r.G)(R.sounds.highlight_red_butt()), i(e));
                                },
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.newYear.toys.medium.$dyn(o)})`,
                                },
                            }),
                            (() => {
                                switch (t) {
                                    case k.Y.Selected:
                                        return _().createElement(
                                            _().Fragment,
                                            null,
                                            _().createElement('div', { className: E.selectionIndicator }),
                                            _().createElement('div', { className: E.selectedCheck }),
                                        );
                                    case k.Y.Locked:
                                        return _().createElement(
                                            'div',
                                            { className: E.locked },
                                            _().createElement('div', { className: E.lockedLine }),
                                            _().createElement('div', { className: E.lockedIcon }),
                                        );
                                    default:
                                        return null;
                                }
                            })(),
                            a &&
                                _().createElement('div', {
                                    className: E.dropSource,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.newYear.toys.dropSource.$dyn(`${a}_small`)})`,
                                    },
                                }),
                            y &&
                                _().createElement(
                                    'div',
                                    { className: E.counter },
                                    _().createElement(v.A, { size: 'big', isEmpty: !0 }),
                                ),
                        ),
                    );
                },
                w = 'List_base_72',
                I = 'List_lips_30',
                N = 'List_slot_1e',
                C = { base: 'List_bar_44' },
                L = { content: 'List_scroll_93' },
                A = (0, c.Pi)(({ selectHandler: e, seenHandler: t, unseenCount: o }) => {
                    const l = S.kB.useVerticalApi(),
                        n = (0, b.z)(l),
                        a = (0, d.useRef)(0),
                        r = (0, m.t)().model.computes.toys(),
                        i = (0, d.useCallback)(() => {
                            ((a.current += 1), a.current >= o && t());
                        }, [o, t, a]);
                    return _().createElement(
                        'div',
                        { className: w },
                        _().createElement(
                            S.kB.Vertical,
                            { areaClassName: s()(n || I), barClassNames: C, scrollClassNames: L, api: l },
                            r.map((t, o) =>
                                _().createElement(f, {
                                    key: o,
                                    model: t,
                                    className: N,
                                    seenHandler: i,
                                    onClick: () => {
                                        e(t.toyID);
                                    },
                                }),
                            ),
                        ),
                    );
                }),
                x = {
                    base: 'ToysPopover_base_56',
                    intro: 'ToysPopover_intro_56',
                    base__oneRow: 'ToysPopover_base__oneRow_02',
                    base__left: 'ToysPopover_base__left_f9',
                    base__right: 'ToysPopover_base__right_51',
                    base__small: 'ToysPopover_base__small_ed',
                    base__extraSmall: 'ToysPopover_base__extraSmall_6f',
                    nip: 'ToysPopover_nip_92',
                    background: 'ToysPopover_background_57',
                    closeBtn: 'ToysPopover_closeBtn_ae',
                };
            let D;
            !(function (e) {
                ((e.Small = 'small'), (e.ExtraSmall = 'extraSmall'));
            })(D || (D = {}));
            const O = (0, c.Pi)(({ positionCorrection: e, root: t, customSize: o }) => {
                const l = (0, m.t)(),
                    c = l.model,
                    u = l.controls,
                    y = viewEnv.getScale(),
                    p = c.computes.toys().length;
                return (
                    (0, n.gd)(
                        a.n.ESCAPE,
                        () => {
                            u.closeToysList();
                        },
                        !0,
                    ),
                    (0, d.useEffect)(() => {
                        const e = t.current;
                        if (e) return (i.c1.register(e, u.closeToysList), () => i.c1.unregister(e, u.closeToysList));
                    }, [t, u.closeToysList]),
                    _().createElement(
                        'div',
                        {
                            className: s()(
                                x.base,
                                x.base__active,
                                x[`base__${e}`],
                                p <= 5 && x.base__oneRow,
                                x[`base__${o}`],
                            ),
                        },
                        _().createElement(g, { type: c.computes.popoverType() }),
                        _().createElement(A, {
                            selectHandler: u.selectToy,
                            seenHandler: u.allToysSeen,
                            unseenCount: c.computes.getUnseenCount(),
                        }),
                        _().createElement(
                            'svg',
                            { className: x.background, viewBox: '0 0 100% 100%' },
                            _().createElement(
                                'defs',
                                null,
                                _().createElement(
                                    'linearGradient',
                                    {
                                        id: 'bg-gradient',
                                        gradientUnits: 'userSpaceOnUse',
                                        x1: '0%',
                                        y1: '0%',
                                        x2: '0%',
                                        y2: '100%',
                                    },
                                    _().createElement('stop', { offset: '0%', stopColor: '#003067' }),
                                    _().createElement('stop', { offset: '93%', stopColor: '#2d5e9e' }),
                                    _().createElement('stop', { offset: '100%', stopColor: '#2a5b9b' }),
                                ),
                            ),
                            _().createElement('rect', {
                                x: '0%',
                                y: '0%',
                                width: '100%',
                                height: '100%',
                                rx: 8 * y,
                                fill: 'url(#bg-gradient)',
                            }),
                        ),
                        _().createElement('div', { className: x.nip }),
                        _().createElement('div', {
                            className: x.closeBtn,
                            onClick: () => {
                                ((0, r.G)(R.sounds.yes()), u.closeToysList());
                            },
                            onMouseEnter: r.$.playHighlight,
                        }),
                    )
                );
            });
        },
        5678: (e, t, o) => {
            o.d(t, { j: () => c, t: () => d });
            var l = o(3215),
                s = o(4598),
                n = o(9480),
                a = o(3946);
            const r = {
                    slotId: -1,
                    toyId: -1,
                    icon: null,
                    slotType: '',
                    isNew: !1,
                    isEmpty: !1,
                    newToys: [],
                    isLocked: !1,
                    unlockLevel: 0,
                },
                i = (0, l.q)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                groupSlots: e.array('groupSlots.items', []),
                                selectedToys: e.array('toysList.toys', []),
                                toysList: e.object('toysList'),
                            },
                            o = (0, a.Om)(
                                (e) => {
                                    var o, l;
                                    return null !=
                                        (o = null == (l = n.get(t.groupSlots.get(), e)) ? void 0 : l.slots.items)
                                        ? o
                                        : [];
                                },
                                { equals: s.jv },
                            ),
                            l = (0, a.Om)(
                                (e, t) => {
                                    var l;
                                    return null != (l = n.get(o(e), t)) ? l : r;
                                },
                                { equals: s.jv },
                            ),
                            i = (0, a.Om)(() => n.reduce(t.selectedToys.get(), (e, t) => (t.isNew ? e + 1 : e), 0));
                        return Object.assign({}, t, {
                            computes: {
                                isSelectedSlot: (0, a.Om)((e) => t.root.get().selectedSlot === e),
                                groupSlotsLength: (0, a.Om)(() => t.groupSlots.get().length),
                                groupIndexWithMaxNewToys: (0, a.Om)(() => {
                                    let e = -1,
                                        l = 0;
                                    return (
                                        t.groupSlots.get().forEach((t, s) =>
                                            o(s).forEach((t) => {
                                                l < t.value.newToys.length && ((l = t.value.newToys.length), (e = s));
                                            }),
                                        ),
                                        e
                                    );
                                }),
                                getSlotsLength: (0, a.Om)((e) => o(e).length),
                                getSlot: l,
                                getUnseenCount: i,
                                toys: (0, a.Om)(() =>
                                    (0, n.mapExists)(t.selectedToys.get(), (e) => Object.assign({}, e)),
                                ),
                                popoverType: (0, a.Om)(() => t.toysList.get().type),
                            },
                        });
                    },
                    ({ externalModel: e }) => ({
                        onHoverSlot: e.createCallback((e) => ({ slotId: e }), 'onHoverSlot'),
                        onHoverOutSlot: e.createCallback((e) => ({ slotId: e }), 'onHoverOutSlot'),
                        selectSlot: e.createCallback((e) => ({ slotId: e }), 'onSelectSlot'),
                        selectToy: e.createCallback((e) => ({ toyId: e }), 'toysList.onApplySelection'),
                        closeToysList: e.createCallbackNoArgs('toysList.onListClose'),
                        allToysSeen: e.createCallbackNoArgs('toysList.onAllToysSeen'),
                        onAnimationEnd: e.createCallbackNoArgs('onAnimationEnd'),
                    }),
                ),
                c = i[0],
                d = i[1];
        },
        939: (e, t, o) => {
            let l, s;
            (o.d(t, { X: () => s, Y: () => l }),
                (function (e) {
                    ((e.Unavailable = 'unavailable'),
                        (e.Available = 'available'),
                        (e.Selected = 'selected'),
                        (e.Disabled = 'disabled'),
                        (e.Locked = 'locked'));
                })(l || (l = {})),
                (function (e) {
                    ((e.Decoration = 'decoration'), (e.GuestD = 'guestD'));
                })(s || (s = {})));
        },
    },
]);
