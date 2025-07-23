'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [3138],
    {
        9630: (e, t, a) => {
            a.d(t, { a: () => s });
            var n = a(6179);
            function s(e, t) {
                (0, n.useEffect)(
                    () => (window.addEventListener('resize', e), () => window.removeEventListener('resize', e)),
                    t,
                );
            }
        },
        412: (e, t, a) => {
            (a.r(t), a.d(t, { default: () => Kt }));
            var n = a(1856),
                s = a(3138),
                r = a(9630),
                c = a(6179),
                o = a.n(c),
                i = a(6483),
                l = a.n(i),
                d = a(6373),
                u = a(5977),
                m = a(3403),
                _ = a(5678),
                p = a(3614),
                g = a(8343),
                f = a(6628),
                S = a(2145),
                k = a(5332),
                v = a(7727);
            const b = {
                    base: 'ActionButton_base_f9',
                    base__default: 'ActionButton_base__default_ee',
                    glow: 'ActionButton_glow_d9',
                    slideInFadeIn: 'ActionButton_slideInFadeIn_75',
                    fadeOut: 'ActionButton_fadeOut_4e',
                    fadeIn: 'ActionButton_fadeIn_ec',
                    fadeInWithScale: 'ActionButton_fadeInWithScale_88',
                    slideUp: 'ActionButton_slideUp_80',
                    scale: 'ActionButton_scale_b3',
                    spin: 'ActionButton_spin_e4',
                    blink: 'ActionButton_blink_2a',
                    slideInNotification: 'ActionButton_slideInNotification_ab',
                },
                E = ['onClick', 'type', 'children'];
            function y() {
                return (
                    (y = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    y.apply(null, arguments)
                );
            }
            let h;
            !(function (e) {
                ((e.Accent = 'accent'), (e.Default = 'default'));
            })(h || (h = {}));
            const w = (e) => {
                let t = e.onClick,
                    a = e.type,
                    n = void 0 === a ? h.Default : a,
                    s = e.children,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var a = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                a[n] = e[n];
                            }
                        return a;
                    })(e, E);
                const c = (0, k.N)(
                    () => {
                        (t(), (0, v.G)(R.sounds.hangar_newyear_hud_side_click()));
                    },
                    [t],
                    200,
                    !0,
                );
                return o().createElement(
                    'div',
                    y({ className: l()(b.base, b[`base__${n}`]), onClick: c, onMouseEnter: v.$.playHighlight }, r),
                    s,
                    o().createElement('div', { className: b.glow }),
                );
            };
            var C = a(3112);
            const N = 'InfoDecorator_base_e3',
                I = 'InfoDecorator_background_a1',
                O = 'InfoDecorator_arrow_36',
                x = ({
                    children: e,
                    className: t,
                    startColor: a = '#213da1',
                    endColor: n = '#4361c8',
                    classNames: s,
                }) => {
                    const r = (0, C.V)();
                    return o().createElement(
                        'div',
                        { className: l()(N, t) },
                        o().createElement(
                            'svg',
                            { className: I, viewBox: '0 0 100% 100%' },
                            o().createElement(
                                'defs',
                                null,
                                o().createElement(
                                    'linearGradient',
                                    {
                                        id: 'bg-gradient',
                                        gradientUnits: 'userSpaceOnUse',
                                        x1: '0%',
                                        y1: '0%',
                                        x2: '0%',
                                        y2: '100%',
                                    },
                                    o().createElement('stop', { offset: '0%', stopColor: a, stopOpacity: '0%' }),
                                    o().createElement('stop', { offset: '100%', stopColor: n, stopOpacity: '100%' }),
                                ),
                            ),
                            o().createElement('rect', {
                                x: '0%',
                                y: '0%',
                                width: '100%',
                                height: '100%',
                                rx: 8 * r,
                                fill: 'url(#bg-gradient)',
                            }),
                        ),
                        e,
                        o().createElement('div', { className: l()(O, null == s ? void 0 : s.arrow) }),
                    );
                },
                A = 'Info_base_94',
                T = 'Info_title_a1',
                M = 'Info_description_f3',
                P = R.strings.ny.sacksActionButtonWidget,
                B = ({ widgetState: e, className: t }) =>
                    o().createElement(
                        x,
                        { className: t },
                        o().createElement(
                            'div',
                            { className: A },
                            o().createElement('div', { className: T }, P.title()),
                            o().createElement('div', { className: M }, P.description.$dyn(e)),
                        ),
                    );
            var L = a(3215);
            const D = (0, L.q)()(
                    ({ observableModel: e }) => ({ root: e.object() }),
                    ({ externalModel: e }) => ({
                        goToGladeView: e.createCallbackNoArgs('onGoToGladeView'),
                        openBuySacksScreen: e.createCallbackNoArgs('onOpenBuySacksScreen'),
                        openBuyBreedScreen: e.createCallbackNoArgs('onOpenBuyBreedScreen'),
                    }),
                ),
                F = D[0],
                J = D[1],
                $ = 'EntryPointWidget_marker_ff',
                z = 'EntryPointWidget_marker__show_60',
                U = 'EntryPointWidget_purchasedIcon_cb',
                K = R.strings.ny.sacksActionButtonWidget,
                W = (0, m.Pi)(({ classNames: e }) => {
                    const t = J(),
                        a = t.model,
                        n = t.controls,
                        s = a.root.get(),
                        r = s.widgetState,
                        c = s.hasWidgetMarker,
                        i = r === u.K.AllPurchased;
                    return o().createElement(
                        'div',
                        { className: null == e ? void 0 : e.base },
                        o().createElement(
                            d.i,
                            { header: K.title(), body: K.description.$dyn(r), isEnabled: !i },
                            o().createElement(
                                w,
                                { onClick: n.openBuySacksScreen, type: i ? h.Default : h.Accent },
                                o().createElement(
                                    'div',
                                    { className: e.icon },
                                    i && o().createElement('div', { className: U }),
                                ),
                            ),
                        ),
                        !i &&
                            o().createElement(
                                'div',
                                { className: l()($, c && z) },
                                o().createElement(B, { widgetState: r }),
                            ),
                    );
                }),
                j = 'Content_base_73',
                H = 'Content_content_fd',
                G = 'Content_actionButtonWrapper_46',
                q = 'Content_slots_7e',
                Z = 'Content_slots__withActionButtons_34',
                V = 'Content_icon_91',
                Q = 'Content_icon__breed_97',
                Y = 'Content_icon__allPurchased_0d',
                X = 'Content_icon__buy_68',
                ee = { context: 'model.challengeModel.guestDCustomizationModel.toySlotsBar' },
                te = { context: 'model.challengeModel.guestDCustomizationModel.breedSlotBar' },
                ae = R.strings.ny.breedActionButtonWidget,
                ne = R.strings.ny.guestD.empty,
                se = (0, m.Pi)(({ className: e }) => {
                    const t = (0, f.t)().model.guestDCustomization,
                        a = J(),
                        n = a.model,
                        s = a.controls,
                        r = t.get().state,
                        c = n.root.get(),
                        i = c.isExtraBreedPurchased,
                        m = c.widgetState;
                    return o().createElement(
                        'div',
                        { className: l()(j, e) },
                        r === u.f.Empty
                            ? o().createElement(S.O, {
                                  title: ne.title(),
                                  description: ne.description(),
                                  buttonText: ne.button(),
                                  onClick: s.goToGladeView,
                              })
                            : o().createElement(
                                  'div',
                                  { className: H },
                                  m !== u.K.Unavailable &&
                                      o().createElement(W, {
                                          classNames: { icon: l()(V, m === u.K.AllPurchased ? Y : X), base: G },
                                      }),
                                  o().createElement(
                                      _.j,
                                      { options: ee },
                                      o().createElement(p.W, { className: l()(q, Z), toyPopoverSize: g.o.Small }),
                                  ),
                                  i
                                      ? o().createElement(
                                            _.j,
                                            { options: te },
                                            o().createElement(p.W, { className: q, toyPopoverSize: g.o.ExtraSmall }),
                                        )
                                      : o().createElement(
                                            'div',
                                            { className: G },
                                            o().createElement(
                                                d.i,
                                                { header: ae.title(), body: ae.text() },
                                                o().createElement(
                                                    w,
                                                    { onClick: s.openBuyBreedScreen, type: h.Accent },
                                                    o().createElement('div', { className: l()(V, Q) }),
                                                ),
                                            ),
                                        ),
                              ),
                    );
                }),
                re = 'CustomizationScreen_base_bc',
                ce = 'CustomizationScreen_sacks_af',
                oe = 'CustomizationScreen_slots_46';
            var ie = a(5433),
                le = a(4598),
                de = a(9480),
                ue = a(9174),
                me = a(3946);
            let _e;
            !(function (e) {
                ((e.Idle = 'idle'),
                    (e.Start = 'start'),
                    (e.Bump = 'bump'),
                    (e.FinalDisappearances = 'finalDisappearances'),
                    (e.End = 'end'));
            })(_e || (_e = {}));
            const pe = { icon: '', item: '', value: '', name: '', label: '', itemType: '' },
                ge = (0, L.q)()(
                    ({ observableModel: e }) => {
                        const t = { root: e.object(), rewards: e.array('rewards') },
                            a = ue.LO.box(!1),
                            n = ue.LO.box(!1),
                            s = ue.LO.box(_e.Idle),
                            r = (0, me.Om)(() => {
                                switch (t.root.get().level) {
                                    case 1:
                                    default:
                                        return ie.v5.Level1;
                                    case 2:
                                        return ie.v5.Level2;
                                    case 3:
                                        return ie.v5.Level3;
                                    case 4:
                                        return ie.v5.Level4;
                                }
                            }),
                            c = (0, me.Om)(() => ({ count: t.root.get().count }), { equals: le.jv }),
                            o = (0, me.Om)(
                                () => {
                                    var e;
                                    const a = null != (e = de.get(t.rewards.get(), 0)) ? e : pe;
                                    return Object.assign({}, a);
                                },
                                { equals: le.jv },
                            );
                        return Object.assign({}, t, {
                            computes: {
                                getBundleType: r,
                                getAnimationContext: c,
                                reward: o,
                                hasSacks: (0, me.Om)(() => t.root.get().count > 0),
                            },
                            isSkipAnimation: a,
                            isRewardAppeared: n,
                            updateState: s,
                        });
                    },
                    ({ externalModel: e, model: t }) => ({
                        openSack: e.createCallbackNoArgs('onOpenSack'),
                        openAnimationStart: e.createCallbackNoArgs('onOpenAnimationStart'),
                        openAnimationEnd: e.createCallbackNoArgs('onOpenAnimationEnd'),
                        setIsSkipAnimation: (0, ue.aD)((e) => t.isSkipAnimation.set(e)),
                        setIsRewardAppeared: (0, ue.aD)((e) => t.isRewardAppeared.set(e)),
                        setUpdateState: (0, ue.aD)((e) => t.updateState.set(e)),
                    }),
                ),
                fe = ge[0],
                Se = ge[1],
                ke = {
                    base: 'MarkerItemCounter_base_e7',
                    icon: 'MarkerItemCounter_icon_91',
                    base__sack: 'MarkerItemCounter_base__sack_f5',
                    count: 'MarkerItemCounter_count_a9',
                    slideInFadeIn: 'MarkerItemCounter_slideInFadeIn_0e',
                    fadeOut: 'MarkerItemCounter_fadeOut_83',
                    fadeIn: 'MarkerItemCounter_fadeIn_37',
                    fadeInWithScale: 'MarkerItemCounter_fadeInWithScale_24',
                    slideUp: 'MarkerItemCounter_slideUp_93',
                    scale: 'MarkerItemCounter_scale_a0',
                    spin: 'MarkerItemCounter_spin_46',
                    blink: 'MarkerItemCounter_blink_05',
                    slideInNotification: 'MarkerItemCounter_slideInNotification_e4',
                },
                ve = ({ count: e, type: t = 'sack', classNames: a }) =>
                    o().createElement(
                        'div',
                        { className: l()(ke.base, ke[`base__${t}`], null == a ? void 0 : a.base) },
                        o().createElement('div', { className: l()(ke.icon, null == a ? void 0 : a.icon) }),
                        o().createElement('div', { className: l()(ke.count, null == a ? void 0 : a.count) }, e),
                    ),
                be = 'Info_base_d4',
                Ee = 'Info_base__counter_4b',
                ye = 'Info_base__transparent_5f',
                he = 'Info_base__hidden_25';
            var we = a(3032),
                Ce = a(9766),
                Ne = a(406);
            const Ie = 'Missions_base_b4',
                Oe = 'Missions_title_6c',
                xe = 'Missions_titleText_0f',
                Ae = 'Missions_countdown_bf',
                Re = 'Missions_description_e6',
                Te = R.strings.ny.sacksMarker.missionsInfo,
                Me = { text: Ae },
                Pe = (0, m.Pi)(() => {
                    const e = Se().model.root.get(),
                        t = e.missionsCompleted,
                        a = e.missionsTotal,
                        n = e.missionDescription,
                        s = e.missionsCountdown,
                        r = t === a;
                    return o().createElement(
                        'div',
                        { className: Ie },
                        o().createElement(
                            'div',
                            { className: Oe },
                            r
                                ? o().createElement(we.ZP, { duration: s, classNames: Me })
                                : o().createElement(Ce.z, {
                                      text: Te.title.inProgress(),
                                      binding: {
                                          completed: o().createElement(Ne.B, {
                                              text: Te.title.completed(),
                                              binding: { missionsCompleted: t, missionsTotal: a },
                                          }),
                                      },
                                      classMix: xe,
                                  }),
                        ),
                        o().createElement(Ce.z, {
                            text: r ? Te.description.completed() : n,
                            classMix: Re,
                            binding: { missionsCompleted: t, missionsTotal: a },
                        }),
                    );
                }),
                Be = (0, m.Pi)(({ className: e }) => {
                    const t = Se().model,
                        a = t.root.get(),
                        n = a.isOpening,
                        s = a.count,
                        r = a.isSacksMarkerShown,
                        c = t.computes.hasSacks(),
                        i = r && !c,
                        d =
                            t.updateState.get() === _e.Start ||
                            t.updateState.get() === _e.Bump ||
                            t.updateState.get() === _e.FinalDisappearances;
                    return o().createElement(
                        x,
                        { className: l()(be, c && Ee, i && ye, (n || d) && he, e) },
                        c ? o().createElement(ve, { count: s }) : o().createElement(Pe, null),
                    );
                }),
                Le = 'NySacks_base_3a',
                De = 'NySacks_base__ready_e7',
                Fe = 'NySacks_info_77';
            var Je = a(367),
                $e = a(2056),
                ze = a(8526),
                Ue = a(5415),
                Ke = a(5521),
                We = a(7515),
                je = a(6112);
            var He = a(2039);
            const Ge = [
                'src',
                'className',
                'autoplay',
                'style',
                'loop',
                'isPrebufferKeyframes',
                'keyframesNameConfig',
                'onClick',
            ];
            function qe() {
                return (
                    (qe = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    qe.apply(null, arguments)
                );
            }
            const Ze = (0, c.forwardRef)(function (e, t) {
                    let a = e.src,
                        r = e.className,
                        i = e.autoplay,
                        l = void 0 !== i && i,
                        d = e.style,
                        u = e.loop,
                        m = void 0 !== u && u,
                        _ = e.isPrebufferKeyframes,
                        p = e.keyframesNameConfig,
                        g = e.onClick,
                        f = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    a[n] = e[n];
                                }
                            return a;
                        })(e, Ge);
                    const S = t,
                        k = (0, c.useRef)(null);
                    return (
                        (0, He.b)(() =>
                            s.O.view.events.onDisplayChanged((e, t) => {
                                var a, n;
                                t === je.W.hidden && (null == (a = k.current) || a.pause());
                                t === je.W.shown && (null == (n = k.current) || n.play());
                            }),
                        ),
                        (0, c.useEffect)(
                            () =>
                                (0, n.v)(() => {
                                    const e = k.current;
                                    if (!S || !e || !_)
                                        return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                    const t = e.cohGetKeyframeTimestamps();
                                    t.length > 0
                                        ? ((e.cohFastSeek = !0),
                                          t.map((t) => {
                                              null == e || e.cohPrebufferKeyframe(t);
                                          }))
                                        : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                }),
                            [_, S],
                        ),
                        (0, c.useEffect)(() => {
                            if (S && k.current) {
                                const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: le.ZT },
                                    t = () => {
                                        let t = 0;
                                        const a = (function (e) {
                                                let t = 0;
                                                return [
                                                    function a() {
                                                        (e(), (t = requestAnimationFrame(a)));
                                                    },
                                                    function () {
                                                        cancelAnimationFrame(t);
                                                    },
                                                ];
                                            })(() => {
                                                if (k.current) {
                                                    const a = k.current,
                                                        n = a.currentTime,
                                                        s = a.duration;
                                                    if (
                                                        (t !== n &&
                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                e({ currentTime: n, duration: s }),
                                                            ),
                                                            (t = n)),
                                                        k.current.paused || !S || !_)
                                                    )
                                                        return;
                                                    const r = k.current.cohGetKeyframeTimestamps();
                                                    r.forEach((t, a) => {
                                                        n > r[a] - 0.02 &&
                                                            n < r[a] &&
                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                const n = Object.keys(null != p ? p : {})[a];
                                                                return e({ time: t, name: `${p ? n : `Point_${a}`}` });
                                                            });
                                                    });
                                                }
                                            }),
                                            n = a[0],
                                            s = a[1];
                                        return (n(), s);
                                    };
                                e.changeTimeLoop = t();
                                const a = (t) => (
                                        e.changeTimeHandlers.push(t),
                                        () => {
                                            const a = e.changeTimeHandlers,
                                                n = a.indexOf(t);
                                            n < 0
                                                ? console.warn(
                                                      "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                  )
                                                : a.splice(n, 1);
                                        }
                                    ),
                                    n = (t) => (
                                        e.changeKeyframeHandlers.push(t),
                                        () => {
                                            const a = e.changeKeyframeHandlers,
                                                n = a.indexOf(t);
                                            n < 0
                                                ? console.warn(
                                                      "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                  )
                                                : a.splice(n, 1);
                                        }
                                    ),
                                    s = () => {
                                        var e;
                                        return null == (e = k.current) ? void 0 : e.currentTime;
                                    },
                                    r = () => {
                                        var e;
                                        return null == (e = k.current) ? void 0 : e.duration;
                                    },
                                    c = (e) => {
                                        k.current && (k.current.currentTime = (0, We.u)(0, k.current.duration, e));
                                    },
                                    o = () => {
                                        var e;
                                        return null == (e = k.current) ? void 0 : e.play();
                                    },
                                    i = () => {
                                        var e;
                                        return null == (e = k.current) ? void 0 : e.pause();
                                    },
                                    l = () => {
                                        (i(), c(0));
                                    },
                                    d = () => {
                                        var e, t;
                                        return null !=
                                            (e = null == (t = k.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                            ? e
                                            : [];
                                    },
                                    u = (e) => {
                                        (c(e), o());
                                    },
                                    m = (e) => {
                                        (c(e), i());
                                    },
                                    g = () => {
                                        ((e.changeTimeHandlers = []),
                                            (e.changeKeyframeHandlers = []),
                                            null == e.changeTimeLoop || e.changeTimeLoop());
                                    },
                                    f = (e, t) => {
                                        var a;
                                        return (
                                            null == (a = k.current) || a.addEventListener(e, t),
                                            () => {
                                                var a;
                                                return null == (a = k.current) ? void 0 : a.removeEventListener(e, t);
                                            }
                                        );
                                    },
                                    v = (e, t) => {
                                        var a;
                                        return (
                                            null == (a = k.current) || a.removeEventListener(e, t),
                                            () => {
                                                var a;
                                                return null == (a = k.current) ? void 0 : a.removeEventListener(e, t);
                                            }
                                        );
                                    };
                                return (
                                    (S.current = {
                                        on: f,
                                        off: v,
                                        play: o,
                                        pause: i,
                                        stop: l,
                                        cleanup: g,
                                        getCurrentTime: s,
                                        getDuration: r,
                                        getCachedKeyframes: d,
                                        goToAndPlay: u,
                                        goToAndStop: m,
                                        setCurrentTime: c,
                                        domRef: k.current,
                                        onChangeTime: a,
                                        onKeyframes: n,
                                    }),
                                    () => {
                                        (g(), (S.current = null));
                                    }
                                );
                            }
                        }, [p, S, _]),
                        (0, c.useEffect)(() => {
                            k.current && l && k.current.play();
                        }, [l, m]),
                        (0, c.useEffect)(() => {
                            if (k.current)
                                return () => {
                                    k.current && k.current.pause();
                                };
                        }, []),
                        o().createElement(
                            'video',
                            qe({ src: a, className: r, style: d, loop: m, ref: k, onClick: g }, f),
                        )
                    );
                }),
                Ve = (0, c.memo)(Ze);
            var Qe = a(7522),
                Ye = a(7030),
                Xe = a(9733),
                et = a(9762),
                tt = a(6457);
            let at, nt;
            (!(function (e) {
                ((e.Idle = 'idle'),
                    (e.OpeningParticles = 'openingParticles'),
                    (e.AppearReward = 'appearReward'),
                    (e.SwitchingToClosed = 'switchingToClosed'),
                    (e.LastSacks = 'lastSacks'),
                    (e.Slide = 'slide'));
            })(at || (at = {})),
                (function (e) {
                    ((e.StartOpening = 'startOpening'),
                        (e.Appear = 'appear'),
                        (e.OpeningEnd = 'openingEnd'),
                        (e.ToSlide = 'toSlide'),
                        (e.ToCloseSacks = 'toCloseSacks'),
                        (e.SlideEnd = 'slideEnd'),
                        (e.UpdateContext = 'updateContext'));
                })(nt || (nt = {})));
            const st = (0, c.createContext)({}),
                rt = () => {
                    const e = (0, c.useContext)(st);
                    return (0, Xe.L)(e.animationService);
                },
                ct = 'AnimationResolver_shine_7e',
                ot = 'AnimationResolver_shine__hide_6e';
            var it = a(2686),
                lt = a(126),
                dt = a(122);
            const ut = {
                    [Ue.cJ.ExtraSmall]: 128,
                    [Ue.cJ.Small]: 180,
                    [Ue.cJ.Medium]: 360,
                    [Ue.cJ.Large]: 360,
                    [Ue.cJ.ExtraLarge]: 360,
                },
                mt = ({ imageSource: e, className: t, frameIndex: a }) => {
                    const n = (0, Ue.GS)().mediaSize,
                        s = ut[n],
                        r = {
                            width: s,
                            height: s,
                            frameCount: 2,
                            chunk: { count: 1, rows: 1, columns: 2 },
                            getChunkPath: () => e,
                        };
                    return o().createElement(it.At, {
                        width: r.width,
                        height: r.height,
                        frameCount: r.frameCount,
                        getImageSource: (0, it.qs)(r),
                        loop: !1,
                        state: 'stop',
                        initialFrameIndex: a,
                        className: t,
                    });
                },
                _t = {
                    base: 'Sack_base_87',
                    background: 'Sack_background_15',
                    base__empty: 'Sack_base__empty_9e',
                    background__closed: 'Sack_background__closed_62',
                    base__appearReward: 'Sack_base__appearReward_ac',
                    base__slide: 'Sack_base__slide_52',
                    base__lastSacks: 'Sack_base__lastSacks_e6',
                    base__switchingToClosed: 'Sack_base__switchingToClosed_50',
                    slideIn: 'Sack_slideIn_03',
                    background__open: 'Sack_background__open_c8',
                    slideOut: 'Sack_slideOut_6c',
                    base__canClick: 'Sack_base__canClick_40',
                    reward: 'Sack_reward_25',
                    slash: 'Sack_slash_93',
                    glow: 'Sack_glow_9f',
                    foreground: 'Sack_foreground_a8',
                    base__idle: 'Sack_base__idle_73',
                    base__openingParticles: 'Sack_base__openingParticles_4b',
                };
            var pt = a(7506),
                gt = a(5734),
                ft = a(3768);
            const St = 'SackReward_base_86',
                kt = 'SackReward_reward_cc',
                vt = 'SackReward_reward__toy_7f',
                bt = 'SackReward_toyRewardCounter_89',
                Et = 'SackReward_label_df',
                yt = {
                    [Ue.cJ.ExtraSmall]: ft.$u.Big,
                    [Ue.cJ.Small]: ft.$u.Big,
                    [Ue.cJ.Medium]: ft.$u.S180x135,
                    [Ue.cJ.Large]: ft.$u.S180x135,
                    [Ue.cJ.ExtraLarge]: ft.$u.S232x174,
                },
                ht = {
                    [Ue.cJ.ExtraSmall]: 100,
                    [Ue.cJ.Small]: 100,
                    [Ue.cJ.Medium]: 200,
                    [Ue.cJ.Large]: 200,
                    [Ue.cJ.ExtraLarge]: 240,
                };
            var wt;
            !(function (e) {
                ((e[(e.First = 0)] = 'First'), (e[(e.Second = 1)] = 'Second'));
            })(wt || (wt = {}));
            const Ct = (0, m.Pi)(({ className: e }) => {
                    const t = Se(),
                        a = t.model,
                        n = t.controls,
                        s = rt()[1],
                        r = (0, Ue.GS)().mediaSize,
                        i = (0, c.useRef)(wt.First),
                        d = (0, c.useRef)({ y: '0rem', rotate: '-30deg', opacity: 0, filter: 'brightness(2)' }),
                        u = a.computes.reward(),
                        m = (0, Ye.useSpring)(() => ({ from: d.current })),
                        _ = m[0],
                        p = m[1],
                        g = (0, c.useMemo)(() => yt[r], [r]),
                        f = (0, c.useMemo)(
                            () => ({
                                size: r <= Ue.cJ.Small ? gt.B.Medium : gt.B.Large,
                                isFlexable: !0,
                                classNames: { counter: bt },
                            }),
                            [r],
                        );
                    return (
                        (0, c.useLayoutEffect)(() => {
                            const e = [
                                {
                                    y: `-${ht[r]}rem`,
                                    rotate: '0deg',
                                    filter: 'brightness(1)',
                                    opacity: 1,
                                    delay: 300,
                                    config: { duration: 500, easing: Qe.Z.easeOutCirc },
                                    onRest: () => {
                                        i.current = wt.Second;
                                    },
                                },
                                {
                                    y: `-${ht[r] + 20}rem`,
                                    opacity: 0,
                                    config: { duration: 800, easing: Qe.Z.easeOutCirc },
                                    delay: 1e3,
                                    onRest: () => {
                                        (n.setIsRewardAppeared(!0), (i.current = wt.First));
                                    },
                                },
                            ];
                            p.start({
                                from: d.current,
                                to: e.slice(i.current),
                                onChange: ({ value: e }) => {
                                    d.current = e;
                                },
                            });
                        }, [p, n, r, s]),
                        o().createElement(
                            'div',
                            { className: l()(St, e) },
                            u.name &&
                                o().createElement(
                                    Ye.animated.div,
                                    { style: _, className: l()(kt, (0, ft.qI)(u) && vt) },
                                    o().createElement(pt.Q, {
                                        bonusModel: u,
                                        toyRewardOptions: f,
                                        size: g,
                                        classNames: { info: Et },
                                    }),
                                ),
                        )
                    );
                }),
                Nt = {
                    [Ue.cJ.ExtraSmall]: 'small',
                    [Ue.cJ.Small]: 'medium',
                    [Ue.cJ.Medium]: 'large',
                    [Ue.cJ.Large]: 'large',
                    [Ue.cJ.ExtraLarge]: 'large',
                },
                It = R.videos.new_year.sacks,
                Ot = {
                    width: 256,
                    height: 460,
                    frameCount: 69,
                    chunk: { count: 1, rows: 7, columns: 10 },
                    getChunkPath: () => 'R.images.gui.maps.icons.newYear.celebrity_challenge.dog.sacks.sequences.glow',
                },
                xt = (0, lt.q)(Ot),
                At = (0, m.Pi)(({ level: e, className: t }) => {
                    const a = Se().model,
                        n = a.root.get().isOpening,
                        s = a.computes.hasSacks(),
                        r = (0, c.useRef)(null),
                        i = rt(),
                        d = i[0],
                        u = i[1],
                        m = (0, c.useState)(s ? 0 : 1),
                        _ = m[0],
                        p = m[1];
                    (0, c.useEffect)(() => {
                        switch (d.value) {
                            case at.Idle:
                            case at.OpeningParticles:
                                p(1);
                                break;
                            case at.AppearReward:
                                return (p(0), (0, dt.F)(() => p((e) => e + 1), 0));
                            case at.SwitchingToClosed:
                                (p(1), u({ type: nt.OpeningEnd }));
                        }
                    }, [u, d.value]);
                    const g = (0, Ue.GS)().mediaSize,
                        f = Nt[g],
                        S = `R.images.gui.maps.icons.newYear.celebrity_challenge.dog.sacks.level_${e}`;
                    return (
                        (0, c.useEffect)(() => {
                            var e, t;
                            r.current &&
                                d.value === at.OpeningParticles &&
                                (u({ type: nt.Appear }),
                                null == (e = r.current) || e.stop(),
                                null == (t = r.current) || t.play());
                        }, [u, d.value]),
                        o().createElement(
                            'div',
                            {
                                className: l()(
                                    _t.base,
                                    s && _t.base__canClick,
                                    !s && _t.base__empty,
                                    _t[`base__level${e}`],
                                    _t[`base__${d.value}`],
                                    t,
                                ),
                            },
                            o().createElement('div', {
                                className: l()(_t.background, _t.background__closed),
                                style: { backgroundImage: `url(${S}.closed_${f})` },
                            }),
                            o().createElement(mt, {
                                imageSource: `${S}.open_background_${f}`,
                                frameIndex: _,
                                className: l()(_t.background, _t.background__open),
                            }),
                            d.value === at.AppearReward && o().createElement(Ct, { className: _t.reward }),
                            n &&
                                o().createElement(mt, {
                                    imageSource: `${S}.open_foreground_${f}`,
                                    frameIndex: _,
                                    className: _t.foreground,
                                }),
                            o().createElement(Ve, {
                                ref: r,
                                className: _t.slash,
                                src: It.particles_open_blast_slash(),
                            }),
                            d.value === at.AppearReward &&
                                o().createElement(it.At, {
                                    width: Ot.width,
                                    height: Ot.height,
                                    frameCount: Ot.frameCount,
                                    loop: !1,
                                    state: 'play',
                                    getImageSource: xt,
                                    className: _t.glow,
                                }),
                        )
                    );
                }),
                Rt = {
                    base: 'OneSack_base_38',
                    particles: 'OneSack_particles_93',
                    particles__hide: 'OneSack_particles__hide_56',
                    godRays: 'OneSack_godRays_89',
                    smoke: 'OneSack_smoke_ad',
                    smoke__show: 'OneSack_smoke__show_18',
                },
                Tt = (0, m.Pi)(({ level: e, className: t }) => {
                    const a = Se().model,
                        n = a.root.get().isOpening,
                        r = a.computes.hasSacks(),
                        i = a.updateState.get(),
                        d = s.O.client.graphicsQuality.isHigh(),
                        u = r && d,
                        m = (0, Ye.useSpring)(() => ({ from: { opacity: 0, scale: 2, rotate: 0 } })),
                        _ = m[0],
                        p = m[1];
                    return (
                        (0, c.useEffect)(() => {
                            (i !== _e.Bump && i !== _e.FinalDisappearances) ||
                                p.start({
                                    from: { opacity: 1, scale: 2, rotate: 0 },
                                    to: [{ scale: 0.1, opacity: 0, rotate: 30, config: { duration: 1500 } }],
                                });
                        }, [p, i]),
                        o().createElement(
                            'div',
                            { className: l()(Rt.base, !r && Rt.base__noSacks, t) },
                            o().createElement(Ye.animated.div, { style: _, className: Rt.godRays }),
                            o().createElement('div', {
                                className: l()(Rt.smoke, i === _e.FinalDisappearances && Rt.smoke__show),
                            }),
                            o().createElement(At, { level: e }),
                            u &&
                                o().createElement(Ve, {
                                    className: l()(Rt.particles, (i === _e.Start || n) && Rt.particles__hide),
                                    src: R.videos.new_year.sacks.idle.particles_small(),
                                    autoplay: !0,
                                    loop: !0,
                                }),
                        )
                    );
                });
            var Mt = a(7298);
            const Pt = {
                    idle: { state: _e.Idle, nextState: _e.Start, timeout: 1400 },
                    start: { state: _e.Start, nextState: _e.Bump, timeout: 1400 },
                    bump: { state: _e.Bump, nextState: _e.FinalDisappearances, timeout: 33 },
                    finalDisappearances: { state: _e.FinalDisappearances, nextState: _e.End, timeout: 3e3 },
                    end: { state: _e.End, nextState: _e.Idle, timeout: 1e3 },
                },
                Bt = {
                    base: 'UpgradeSacks_base_78',
                    twirly: 'UpgradeSacks_twirly_86',
                    bumpParticle: 'UpgradeSacks_bumpParticle_75',
                    sack: 'UpgradeSacks_sack_81',
                    sackFrom: 'UpgradeSacks_sackFrom_db',
                    base__start: 'UpgradeSacks_base__start_9f',
                    sackTo: 'UpgradeSacks_sackTo_89',
                    base__finalDisappearances: 'UpgradeSacks_base__finalDisappearances_31',
                },
                Lt = ({ children: [e, t], className: a, onAnimate: n, isUpdateStart: s }) => {
                    const r = (0, Mt._)(Pt, _e.Idle, s),
                        i = (0, c.useState)(r.step.state),
                        d = i[0],
                        u = i[1];
                    return (
                        (0, c.useEffect)(() => {
                            (n(d), u(r.step.state));
                        }, [r.step.state, d, n]),
                        o().createElement(
                            'div',
                            { className: l()(Bt.base, Bt[`base__${d}`], a) },
                            o().createElement(
                                'div',
                                { className: Bt.sack },
                                (d === _e.Idle || d === _e.Start) &&
                                    o().createElement('div', { className: Bt.sackFrom }, e),
                                (d === _e.Bump || d === _e.FinalDisappearances) &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: Bt.sackTo }, t),
                                        o().createElement(Ve, {
                                            className: Bt.bumpParticle,
                                            src: R.videos.new_year.sacks.particle_blast(),
                                            autoplay: d === _e.Bump,
                                        }),
                                    ),
                            ),
                            d !== _e.Idle &&
                                o().createElement(Ve, {
                                    className: Bt.twirly,
                                    src: R.videos.new_year.sacks.upgraded_slashes(),
                                    autoplay: d === _e.Start,
                                }),
                        )
                    );
                },
                Dt = (0, m.Pi)(() => {
                    const e = Se(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get().level,
                        s = t.updateState.get(),
                        r = (0, c.useState)(n),
                        i = r[0],
                        d = r[1],
                        u = rt(),
                        m = u[0],
                        _ = u[1],
                        p = s === _e.Start || s === _e.Bump,
                        g = (0, c.useCallback)(
                            (e) => {
                                (a.setUpdateState(e), e === _e.End && d(n));
                            },
                            [a, n],
                        ),
                        f = (0, Ye.useSpring)(() => ({ from: { opacity: 1, x: '0rem' } })),
                        S = f[0],
                        k = f[1];
                    return (
                        (0, c.useEffect)(() => {
                            m.value === at.Slide &&
                                k.start({
                                    from: { opacity: 1, x: '0rem' },
                                    to: [
                                        {
                                            x: '-20rem',
                                            opacity: 0,
                                            config: { duration: 250, easing: Qe.Z.easeOutCirc },
                                        },
                                        {
                                            x: '20rem',
                                            opacity: 0,
                                            config: { duration: 10 },
                                            onRest: () => _({ type: nt.SlideEnd }),
                                        },
                                        { x: '0rem', opacity: 1, config: { duration: 200, easing: Qe.Z.easeOutCirc } },
                                    ],
                                });
                        }, [k, _, m.value]),
                        o().createElement(
                            Ye.animated.div,
                            { style: S },
                            o().createElement(Ve, {
                                className: l()(ct, p && ot),
                                src: R.videos.new_year.sacks.idle.shine(),
                                autoplay: !0,
                                loop: !0,
                            }),
                            i !== n
                                ? o().createElement(Lt, { onAnimate: g, isUpdateStart: !0 }, [
                                      o().createElement(Tt, { key: i, level: i }),
                                      o().createElement(Tt, { key: n, level: n }),
                                  ])
                                : o().createElement(Tt, { level: n }),
                        )
                    );
                }),
                Ft = 'Sacks_base_97',
                Jt = 'Sacks_base__canClick_91',
                $t = {
                    [Ue.cJ.ExtraSmall]: 128,
                    [Ue.cJ.Small]: 180,
                    [Ue.cJ.Medium]: 216,
                    [Ue.cJ.Large]: 256,
                    [Ue.cJ.ExtraLarge]: 360,
                },
                zt = (0, m.Pi)(() => {
                    var e, t;
                    const a = Se(),
                        n = a.model,
                        r = a.controls,
                        i = n.root.get().isOpening,
                        d = n.isSkipAnimation.get(),
                        u = n.isRewardAppeared.get(),
                        m = n.computes.hasSacks(),
                        _ = m && !i,
                        p = n.computes.getAnimationContext(),
                        g = (0, Je.k)(() => {
                            return (
                                (e = p),
                                (t = r.openAnimationStart),
                                (a = r.openAnimationEnd),
                                (0, et.C)({
                                    id: 'sacks-opening-animation-machine',
                                    context: e,
                                    initial: at.Idle,
                                    states: {
                                        [at.Idle]: {
                                            on: {
                                                [nt.StartOpening]: {
                                                    target: at.OpeningParticles,
                                                    actions: [t, (0, tt.f0)((e, t) => t.context)],
                                                },
                                            },
                                        },
                                        [at.OpeningParticles]: { on: { [nt.Appear]: { target: at.AppearReward } } },
                                        [at.AppearReward]: {
                                            on: {
                                                [nt.ToSlide]: [
                                                    {
                                                        target: at.Slide,
                                                        cond: (e) => e.count > 1,
                                                        actions: (0, tt.f0)((e) =>
                                                            Object.assign({}, e, { count: e.count - 1 }),
                                                        ),
                                                    },
                                                    { target: at.LastSacks },
                                                ],
                                                [nt.ToCloseSacks]: [
                                                    {
                                                        target: at.SwitchingToClosed,
                                                        cond: (e) => e.count > 1,
                                                        actions: (0, tt.f0)((e) =>
                                                            Object.assign({}, e, { count: e.count - 1 }),
                                                        ),
                                                    },
                                                    { target: at.LastSacks },
                                                ],
                                            },
                                        },
                                        [at.SwitchingToClosed]: {
                                            on: { [nt.OpeningEnd]: { target: at.Idle, actions: a } },
                                        },
                                        [at.Slide]: { on: { [nt.SlideEnd]: { target: at.Idle, actions: a } } },
                                        [at.LastSacks]: { entry: a, on: { [nt.OpeningEnd]: { target: at.Idle } } },
                                    },
                                    on: { [nt.UpdateContext]: { actions: (0, tt.f0)((e, t) => t.context) } },
                                })
                            );
                            var e, t, a;
                        }),
                        f =
                            (null == (e = g.state) ? void 0 : e.value) === at.OpeningParticles ||
                            (null == (t = g.state) ? void 0 : t.value) === at.AppearReward,
                        S = (0, c.useCallback)(() => {
                            _ &&
                                (s.O.sound.play.sound(R.sounds.hangar_newyear_bag_open()),
                                s.O.sound.play.sound(R.sounds.hangar_newyear_hud_side_click()),
                                r.openSack(),
                                g.send({ type: nt.StartOpening }));
                        }, [g, _, r]),
                        k = () => {
                            !f || d ? S() : r.setIsSkipAnimation(!0);
                        };
                    ((0, c.useEffect)(() => {
                        var e;
                        (null == (e = g.state) ? void 0 : e.value) === at.LastSacks &&
                            (m ? g.send({ type: nt.OpeningEnd }) : r.setIsSkipAnimation(!1));
                    }, [g, r, m]),
                        (0, c.useEffect)(() => {
                            g.send({ type: nt.UpdateContext, context: p });
                        }, [g, p]),
                        (0, c.useEffect)(() => {
                            var e;
                            u &&
                                (null == (e = g.state) ? void 0 : e.value) === at.AppearReward &&
                                (r.setIsRewardAppeared(!1),
                                d ? g.send({ type: nt.ToCloseSacks }) : g.send({ type: nt.ToSlide }));
                        }, [g, r, u, d]),
                        (0, c.useEffect)(() => {
                            var e;
                            d &&
                                (null == (e = g.state) ? void 0 : e.value) === at.Idle &&
                                (S(), r.setIsSkipAnimation(!1));
                        }, [g, r, S, d]),
                        (0, ze.gd)(Ke.n.SPACE, k));
                    const v = n.computes.getBundleType(),
                        b = (0, Ue.GS)().mediaSize;
                    return o().createElement(
                        $e.u,
                        {
                            contentId: R.views.lobby.new_year.tooltips.NySacksTooltip('resId'),
                            args: { bundleType: v },
                            isEnabled: !i,
                        },
                        o().createElement(
                            'div',
                            {
                                className: l()(Ft, m && Jt),
                                onClick: k,
                                onMouseEnter: () => {
                                    _ && s.O.sound.play.sound(R.sounds.gui_hangar_hover());
                                },
                                style: { '--sack-size': `${$t[b]}rem`, '--sack-original-size': $t[Ue.cJ.ExtraLarge] },
                            },
                            o().createElement(
                                st.Provider,
                                { value: { animationService: g } },
                                o().createElement(Dt, null),
                            ),
                        ),
                    );
                }),
                Ut = (0, m.Pi)(({ className: e }) => {
                    const t = Se().model.root.get(),
                        a = t.isReady;
                    return t.level > 0
                        ? o().createElement(
                              'div',
                              { className: l()(Le, a && De, e) },
                              o().createElement(zt, null),
                              o().createElement(Be, { className: Fe }),
                          )
                        : null;
                }),
                Kt = () => {
                    const e = (0, c.useState)(0),
                        t = e[0],
                        a = e[1];
                    return (
                        (0, n.v)(() => {
                            a(s.O.view.getSize('rem').width / 2);
                        }),
                        (0, r.a)(() => {
                            a(s.O.view.getSize('rem').width / 2);
                        }, []),
                        o().createElement(
                            'div',
                            { className: re, style: { '--half-screen-width': `${t}rem` } },
                            o().createElement(
                                fe,
                                { options: { context: 'model.challengeModel.guestDCustomizationModel.sacksModel' } },
                                o().createElement(Ut, { className: ce }),
                            ),
                            o().createElement(
                                F,
                                { options: { context: 'model.challengeModel.guestDCustomizationModel' } },
                                o().createElement(se, { className: oe }),
                            ),
                        )
                    );
                };
        },
        2145: (e, t, a) => {
            a.d(t, { O: () => u });
            var n = a(3457),
                s = a(6179),
                r = a.n(s);
            const c = 'EmptyScreen_base_7d',
                o = 'EmptyScreen_inner_4d',
                i = 'EmptyScreen_title_32',
                l = 'EmptyScreen_description_fb',
                d = 'EmptyScreen_button_65',
                u = ({ title: e, description: t, buttonText: a, onClick: s }) =>
                    r().createElement(
                        'div',
                        { className: c },
                        r().createElement(
                            'div',
                            { className: o },
                            r().createElement('div', { className: i }, e),
                            r().createElement('div', { className: l }, t),
                            r().createElement(
                                'div',
                                { className: d },
                                r().createElement(n.u5, { type: n.L$.primary, size: n.qE.medium, onClick: s }, a),
                            ),
                        ),
                    );
        },
    },
]);
