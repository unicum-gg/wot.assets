(() => {
    'use strict';
    var e,
        t = {
            3495: (e, t, a) => {
                a.d(t, { Y: () => d });
                var l = a(3138),
                    i = a(6179),
                    r = a(1043),
                    n = a(5262);
                const s = l.O.client.getSize('rem'),
                    o = s.width,
                    m = s.height,
                    _ = Object.assign({ width: o, height: m }, (0, n.T)(o, m, r.j)),
                    d = (0, i.createContext)(_);
            },
            1039: (e, t, a) => {
                var l = a(6179),
                    i = a.n(l),
                    r = a(6536),
                    n = a(3495),
                    s = a(1043),
                    o = a(5262),
                    m = a(3138);
                (0, l.memo)(({ children: e }) => {
                    const t = (0, l.useContext)(n.Y),
                        a = (0, l.useState)(t),
                        _ = a[0],
                        d = a[1],
                        g = (0, l.useCallback)((e, t) => {
                            const a = m.O.view.pxToRem(e),
                                l = m.O.view.pxToRem(t);
                            d(Object.assign({ width: a, height: l }, (0, o.T)(a, l, s.j)));
                        }, []);
                    ((0, r.Z)(() => {
                        engine.on('clientResized', g);
                    }),
                        (0, l.useEffect)(() => () => engine.off('clientResized', g), [g]));
                    const c = (0, l.useMemo)(() => Object.assign({}, _), [_]);
                    return i().createElement(n.Y.Provider, { value: c }, e);
                });
            },
            6010: (e, t, a) => {
                var l = a(6179),
                    i = a(7382),
                    r = a(3495);
                const n = ['children'];
                const s = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                l,
                                i = {},
                                r = Object.keys(e);
                            for (l = 0; l < r.length; l++) ((a = r[l]), t.indexOf(a) >= 0 || (i[a] = e[a]));
                            return i;
                        })(e, n);
                    const s = (0, l.useContext)(r.Y),
                        o = s.extraLarge,
                        m = s.large,
                        _ = s.medium,
                        d = s.small,
                        g = s.extraSmall,
                        c = s.extraLargeWidth,
                        h = s.largeWidth,
                        u = s.mediumWidth,
                        b = s.smallWidth,
                        w = s.extraSmallWidth,
                        p = s.extraLargeHeight,
                        v = s.largeHeight,
                        E = s.mediumHeight,
                        f = s.smallHeight,
                        x = s.extraSmallHeight,
                        L = { extraLarge: p, large: v, medium: E, small: f, extraSmall: x };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && o) return t;
                        if (a.large && m) return t;
                        if (a.medium && _) return t;
                        if (a.small && d) return t;
                        if (a.extraSmall && g) return t;
                    } else {
                        if (a.extraLargeWidth && c) return (0, i.H)(t, a, L);
                        if (a.largeWidth && h) return (0, i.H)(t, a, L);
                        if (a.mediumWidth && u) return (0, i.H)(t, a, L);
                        if (a.smallWidth && b) return (0, i.H)(t, a, L);
                        if (a.extraSmallWidth && w) return (0, i.H)(t, a, L);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && p) return t;
                            if (a.largeHeight && v) return t;
                            if (a.mediumHeight && E) return t;
                            if (a.smallHeight && f) return t;
                            if (a.extraSmallHeight && x) return t;
                        }
                    }
                    return null;
                };
                s.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                };
                (0, l.memo)(s);
            },
            7382: (e, t, a) => {
                a.d(t, { H: () => l });
                const l = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, a) => {
                (a(6010), a(1039), a(3495));
            },
            1043: (e, t, a) => {
                a.d(t, { j: () => l });
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, a) => {
                var l;
                function i(e, t, a) {
                    const l = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, a),
                        i = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, a),
                        r = Math.min(l, i);
                    return {
                        extraLarge: r === a.extraLarge.weight,
                        large: r === a.large.weight,
                        medium: r === a.medium.weight,
                        small: r === a.small.weight,
                        extraSmall: r === a.extraSmall.weight,
                        extraLargeWidth: l === a.extraLarge.weight,
                        largeWidth: l === a.large.weight,
                        mediumWidth: l === a.medium.weight,
                        smallWidth: l === a.small.weight,
                        extraSmallWidth: l === a.extraSmall.weight,
                        extraLargeHeight: i === a.extraLarge.weight,
                        largeHeight: i === a.large.weight,
                        mediumHeight: i === a.medium.weight,
                        smallHeight: i === a.small.weight,
                        extraSmallHeight: i === a.extraSmall.weight,
                    };
                }
                (a.d(t, { T: () => i }),
                    (function (e) {
                        ((e.extraLarge = 'extraLarge'),
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
                            (e.extraSmallHeight = 'extraSmallHeight'));
                    })(l || (l = {})));
            },
            122: (e, t, a) => {
                a.d(t, { F: () => l });
                const l = (e, t) => {
                    let a;
                    const l = setTimeout(() => {
                        a = e();
                    }, t);
                    return () => {
                        ('function' == typeof a && a(), clearTimeout(l));
                    };
                };
            },
            527: (e, t, a) => {
                (a.r(t), a.d(t, { mouse: () => s, onResize: () => r }));
                var l = a(2472),
                    i = a(1176);
                const r = (0, l.E)('clientResized'),
                    n = { down: (0, l.E)('mousedown'), up: (0, l.E)('mouseup'), move: (0, l.E)('mousemove') };
                const s = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, i.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, i.R)(!0);
                    }
                    function l() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, i.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const r = `mouse${t}`,
                                        s = n[t]((e) => a([e, 'outside']));
                                    function o(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        l(),
                                        () => {
                                            i &&
                                                (s(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                l(),
                                                (i = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            ((e.enabled = !1), l());
                        },
                        enable() {
                            ((e.enabled = !0), l());
                        },
                        enableOutside() {
                            e.enabled && (0, i.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, i.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, a) => {
                (a.r(t),
                    a.d(t, {
                        events: () => l,
                        getMouseGlobalPosition: () => r,
                        getSize: () => i,
                        graphicsQuality: () => n,
                    }));
                var l = a(527);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const n = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => l });
            },
            2472: (e, t, a) => {
                function l(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => l });
            },
            3138: (e, t, a) => {
                a.d(t, { O: () => i });
                var l = a(5959);
                const i = { view: a(7641), client: l };
            },
            3722: (e, t, a) => {
                function l(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function i(e, t, a) {
                    return `url(${l(e, t, a)})`;
                }
                (a.r(t), a.d(t, { getBgUrl: () => i, getTextureUrl: () => l }));
            },
            6112: (e, t, a) => {
                a.d(t, { W: () => l });
                const l = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                a.d(t, { U: () => i });
                var l = a(2472);
                const i = {
                    onTextureFrozen: (0, l.E)('self.onTextureFrozen'),
                    onTextureReady: (0, l.E)('self.onTextureReady'),
                    onDomBuilt: (0, l.E)('self.onDomBuilt'),
                    onLoaded: (0, l.E)('self.onLoaded'),
                    onDisplayChanged: (0, l.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, l.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, l.E)('children.onAdded'),
                        onLoaded: (0, l.E)('children.onLoaded'),
                        onRemoved: (0, l.E)('children.onRemoved'),
                        onAttached: (0, l.E)('children.onAttached'),
                        onTextureReady: (0, l.E)('children.onTextureReady'),
                        onRequestPosition: (0, l.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, a) => {
                (a.r(t),
                    a.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => s,
                        children: () => l,
                        displayStatus: () => i.W,
                        displayStatusIs: () => P,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => L,
                        freezeTextureBeforeResize: () => u,
                        getBrowserTexturePath: () => m,
                        getDisplayStatus: () => S,
                        getScale: () => b,
                        getSize: () => g,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => x,
                        isFocused: () => E,
                        pxToRem: () => w,
                        remToPx: () => p,
                        resize: () => c,
                        sendEvent: () => n.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => M,
                    }));
                var l = a(3722),
                    i = a(6112),
                    r = a(6538),
                    n = a(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function m(e, t, a, l = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, l);
                }
                function _(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function c(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function u() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function E() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function x() {
                    return viewEnv.isEventHandled();
                }
                function L() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const P = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    M = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                a.d(t, { qP: () => m });
                const l = ['args'];
                const i = 2,
                    r = 16,
                    n = 32,
                    s = 64,
                    o = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        l,
                                        i = {},
                                        r = Object.keys(e);
                                    for (l = 0; l < r.length; l++) ((a = r[l]), t.indexOf(a) >= 0 || (i[a] = e[a]));
                                    return i;
                                })(t, l);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, n, {
                                          arguments:
                                              ((i = r),
                                              Object.entries(i).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var i;
                    },
                    m = {
                        close(e) {
                            o('popover' === e ? i : n);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            6536: (e, t, a) => {
                a.d(t, { Z: () => i });
                var l = a(6179);
                const i = (e) => {
                    const t = (0, l.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5415: (e, t, a) => {
                (a(6179), a(7739));
                var l = a(1043);
                let i, r, n;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.j.small.width)] = 'Small'),
                        (e[(e.Medium = l.j.medium.width)] = 'Medium'),
                        (e[(e.Large = l.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.j.extraLarge.width)] = 'ExtraLarge'));
                })(i || (i = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.j.small.width)] = 'Small'),
                            (e[(e.Medium = l.j.medium.width)] = 'Medium'),
                            (e[(e.Large = l.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.j.extraLarge.width)] = 'ExtraLarge'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.j.small.height)] = 'Small'),
                            (e[(e.Medium = l.j.medium.height)] = 'Medium'),
                            (e[(e.Large = l.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.j.extraLarge.height)] = 'ExtraLarge'));
                    })(n || (n = {})));
            },
            903: (e, t, a) => {
                a.d(t, { FL: () => i, wD: () => l });
                (a(5415), a(8546));
                const l = (e, t, a = '') => {
                        const l = a.length > 0 ? `_${a}` : a,
                            i = e.$dyn(`c_${t}${l}`),
                            r = e.$dyn(`common${l}`);
                        return i || r;
                    },
                    i = (e, t, a, i) => {
                        const r = R.images.gui.maps.icons.battlePass.logo,
                            n = l(r, e, `emblem${i ? '_BP' : ''}${a ? '_open' : ''}${t}`);
                        return n ? { backgroundImage: `url(${n})` } : void 0;
                    };
            },
            9830: (e, t, a) => {
                var l = a(6483),
                    i = a.n(l),
                    r = a(6179),
                    n = a.n(r),
                    s = a(903);
                const o = {
                        base: 'Emblem_base_be',
                        progress: 'Emblem_progress_37',
                        progress__small: 'Emblem_progress__small_42',
                        progress__completed: 'Emblem_progress__completed_69',
                        hideProgress: 'Emblem_hideProgress_b4',
                        progress__hidden: 'Emblem_progress__hidden_6d',
                        image: 'Emblem_image_dc',
                        image__micro: 'Emblem_image__micro_aa',
                        image__small: 'Emblem_image__small_ce',
                        image__open: 'Emblem_image__open_43',
                        image__openSmall: 'Emblem_image__openSmall_5d',
                        image__openMicro: 'Emblem_image__openMicro_a9',
                        image__battlePass: 'Emblem_image__battlePass_ba',
                        image__battlePassSmall: 'Emblem_image__battlePassSmall_d5',
                        image__battlePassMicro: 'Emblem_image__battlePassMicro_6e',
                        image__battlePassOpen: 'Emblem_image__battlePassOpen_36',
                        image__battlePassSmallOpen: 'Emblem_image__battlePassSmallOpen_2f',
                        image__battlePassMicroOpen: 'Emblem_image__battlePassMicroOpen_e5',
                        image__seasonWaiting: 'Emblem_image__seasonWaiting_96',
                        image__seasonWaitingSmall: 'Emblem_image__seasonWaitingSmall_c0',
                        image__seasonWaitingMicro: 'Emblem_image__seasonWaitingMicro_86',
                        image__completedFree: 'Emblem_image__completedFree_56',
                        image__completedFreeSmall: 'Emblem_image__completedFreeSmall_a1',
                        image__completedFreeMicro: 'Emblem_image__completedFreeMicro_45',
                        image__completedFreeOpen: 'Emblem_image__completedFreeOpen_08',
                        image__completedFreeSmallOpen: 'Emblem_image__completedFreeSmallOpen_91',
                        image__completedFreeMicroOpen: 'Emblem_image__completedFreeMicroOpen_d3',
                        image__completedGolden: 'Emblem_image__completedGolden_77',
                        image__completedGoldenSmall: 'Emblem_image__completedGoldenSmall_be',
                        image__completedGoldenMicro: 'Emblem_image__completedGoldenMicro_2d',
                        marathon: 'Emblem_marathon_c6',
                        resource: 'Emblem_resource_97',
                        marathon__micro: 'Emblem_marathon__micro_61',
                        resource__micro: 'Emblem_resource__micro_67',
                        marathon__small: 'Emblem_marathon__small_0b',
                        resource__small: 'Emblem_resource__small_41',
                        hideLevel: 'Emblem_hideLevel_f2',
                        showLevel: 'Emblem_showLevel_c5',
                        hideLevelSmall: 'Emblem_hideLevelSmall_cc',
                        showLevelSmall: 'Emblem_showLevelSmall_31',
                        hideLevelMicro: 'Emblem_hideLevelMicro_15',
                        showLevelMicro: 'Emblem_showLevelMicro_bc',
                        showIcon: 'Emblem_showIcon_c2',
                        showIconSmall: 'Emblem_showIconSmall_1d',
                        showIconMicro: 'Emblem_showIconMicro_f8',
                    },
                    m = {
                        base: 'Label_base_85',
                        textWithBlend: 'Label_textWithBlend_07',
                        textWithBlend__show: 'Label_textWithBlend__show_fa',
                        show: 'Label_show_69',
                        textWithBlend__new: 'Label_textWithBlend__new_4a',
                        textWithBlend__hide: 'Label_textWithBlend__hide_f1',
                        hide: 'Label_hide_33',
                        textMask: 'Label_textMask_7f',
                        textMask__animated: 'Label_textMask__animated_38',
                        maskAppearance: 'Label_maskAppearance_26',
                        textMask__micro: 'Label_textMask__micro_37',
                        textMask__small: 'Label_textMask__small_54',
                        textMask__medium: 'Label_textMask__medium_eb',
                        textMask__large: 'Label_textMask__large_0a',
                        textMask__extraLarge: 'Label_textMask__extraLarge_4c',
                        text: 'Label_text_67',
                        text__micro: 'Label_text__micro_a4',
                        text__small: 'Label_text__small_e0',
                        text__large: 'Label_text__large_65',
                        text__extraLarge: 'Label_text__extraLarge_22',
                        text__blended: 'Label_text__blended_67',
                        text__filtered: 'Label_text__filtered_86',
                        text__rewardScreen: 'Label_text__rewardScreen_68',
                        textAppearance: 'Label_textAppearance_31',
                        text__show: 'Label_text__show_95',
                        text__hide: 'Label_text__hide_37',
                        text__hideWithDelay: 'Label_text__hideWithDelay_53',
                        text__new: 'Label_text__new_a0',
                        hideLevel: 'Label_hideLevel_61',
                        showLevel: 'Label_showLevel_55',
                        hideLevelSmall: 'Label_hideLevelSmall_9d',
                        showLevelSmall: 'Label_showLevelSmall_96',
                        hideLevelMicro: 'Label_hideLevelMicro_9e',
                        showLevelMicro: 'Label_showLevelMicro_50',
                        showIcon: 'Label_showIcon_0f',
                        showIconSmall: 'Label_showIconSmall_96',
                        hideProgress: 'Label_hideProgress_0c',
                        showIconMicro: 'Label_showIconMicro_1e',
                    },
                    _ = 'R.images.gui.maps.icons.battlePass.logo',
                    d = (e, t, a) =>
                        e && t
                            ? `url(${_}.${a ? `c_${a}_` : ''}font_texture_gold_contrast)`
                            : e
                              ? `url(${_}.${a ? `c_${a}_` : ''}font_texture_gold)`
                              : `url(${_}.${a ? `c_${a}_` : ''}font_texture)`,
                    g = (0, r.memo)(
                        ({
                            level: e,
                            size: t,
                            isGold: a,
                            isForRewardScreen: l = !1,
                            curState: r,
                            isFirstLevel: s,
                            showProgressionCompleted: o,
                            chapterID: _ = 0,
                        }) => {
                            const g = i()(m.base, m[`base__${t}`]),
                                c = i()(
                                    m.text,
                                    m.text__filtered,
                                    m[`text__${t}`],
                                    m[`text__${r}`],
                                    o && m.text__hideWithDelay,
                                    s && m.text__new,
                                    l && m.text__rewardScreen,
                                ),
                                h = i()(
                                    m.textWithBlend,
                                    s && m.text__new,
                                    o && m.text__hideWithDelay,
                                    m[`textWithBlend__${r}`],
                                ),
                                u = i()(m.text, m.text__blended, m[`text__${t}`], l && m.text__rewardScreen),
                                b = i()(m.textMask, l && m.textMask__animated, m[`textMask__${t}`]);
                            return n().createElement(
                                'div',
                                { className: g },
                                n().createElement('div', { className: c }, e),
                                n().createElement(
                                    'div',
                                    { className: h },
                                    n().createElement('div', { className: u }, e),
                                    n().createElement('div', { className: b, style: { backgroundImage: d(a, l, _) } }),
                                ),
                            );
                        },
                    );
                var c = a(8546);
                const h = {
                        label: 'EmblemLabels_label_14',
                        label__small: 'EmblemLabels_label__small_a3',
                        label__micro: 'EmblemLabels_label__micro_4b',
                        label__hasProgress: 'EmblemLabels_label__hasProgress_26',
                        label__hasProgressProgression: 'EmblemLabels_label__hasProgressProgression_77',
                        label__hasProgressSmall: 'EmblemLabels_label__hasProgressSmall_c1',
                        label__show: 'EmblemLabels_label__show_3d',
                        showLevel: 'EmblemLabels_showLevel_04',
                        label__showSmall: 'EmblemLabels_label__showSmall_7e',
                        showLevelSmall: 'EmblemLabels_showLevelSmall_2f',
                        label__hide: 'EmblemLabels_label__hide_28',
                        hideLevel: 'EmblemLabels_hideLevel_be',
                        label_hideSmall: 'EmblemLabels_label_hideSmall_65',
                        hideLevelSmall: 'EmblemLabels_hideLevelSmall_c1',
                        label__hideWithDelay: 'EmblemLabels_label__hideWithDelay_68',
                        label__hideWithDelaySmall: 'EmblemLabels_label__hideWithDelaySmall_36',
                        label__new: 'EmblemLabels_label__new_d7',
                        label__newSmall: 'EmblemLabels_label__newSmall_c1',
                        label__disabled: 'EmblemLabels_label__disabled_b6',
                        icon: 'EmblemLabels_icon_40',
                        icon__small: 'EmblemLabels_icon__small_f3',
                        icon__micro: 'EmblemLabels_icon__micro_cf',
                        icon__animated: 'EmblemLabels_icon__animated_09',
                        showIcon: 'EmblemLabels_showIcon_d3',
                        icon__animatedSmall: 'EmblemLabels_icon__animatedSmall_e4',
                        icon__animatedMicro: 'EmblemLabels_icon__animatedMicro_10',
                        showIconSmall: 'EmblemLabels_showIconSmall_cb',
                        hideLevelMicro: 'EmblemLabels_hideLevelMicro_65',
                        showLevelMicro: 'EmblemLabels_showLevelMicro_ab',
                        hideProgress: 'EmblemLabels_hideProgress_7f',
                        showIconMicro: 'EmblemLabels_showIconMicro_5c',
                    },
                    u = (e, t) => {
                        const a = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case c.$u.Small:
                                    return 'l';
                                case c.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(t)}${a}`;
                    },
                    b = (0, r.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: a,
                            battlePassState: l,
                            hasProgression: r,
                            isGolden: o,
                            labelAnimation: m,
                            newLabelAnimation: _,
                            isChapterChosen: d = !1,
                            chapterID: b = 0,
                            isProgressionCompleted: w = !1,
                            hasBeenActive: p = !1,
                            isChapterSelection: v = !1,
                            isProgression: E = !1,
                        }) => {
                            let f = '',
                                x = '';
                            a === c.$u.Small
                                ? ((f = 'Small'), (x = '__small'))
                                : a === c.$u.Micro && ((f = 'Micro'), (x = '__micro'));
                            const L = l === c.Bq.SwitchedChapterRightNow,
                                S = l === c.Bq.CompletedRightNow,
                                P = ((e, t, a, l, i) => (e || i ? t || !a : t || !l))(v, w, p, d, E),
                                y = !E && !v;
                            return n().createElement(
                                n().Fragment,
                                null,
                                P
                                    ? n().createElement('div', {
                                          className: i()(h.icon, x && h[`icon${x}`], S && h[`icon__animated${f}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = u(o, a);
                                                  if (y) {
                                                      if (w) {
                                                          const a = e.tank.$dyn(`tank_${t}`),
                                                              l = e.tank.$dyn(`c_${b}_tank_${t}`);
                                                          return null != l ? l : a;
                                                      }
                                                      if (!d) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, s.wD)(e.chapterIcons, b, t);
                                              })()})`,
                                          },
                                      })
                                    : n().createElement(
                                          'div',
                                          {
                                              className: i()(
                                                  h.label,
                                                  h[`label${x}`],
                                                  L && h.label__new,
                                                  L && h[`label__new${f}`],
                                                  !S && w && h.label__disabled,
                                                  h[`label__${m}${f}`],
                                                  r && h[`label__hasProgress${f}`],
                                                  r && h[`label__hasProgress${f}${E ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          n().createElement(g, {
                                              level: t,
                                              size: a,
                                              isGold: o,
                                              isFirstLevel: L,
                                              curState: m,
                                              showProgressionCompleted: S,
                                              key: 'label',
                                              chapterID: b,
                                          }),
                                      ),
                                e &&
                                    n().createElement(
                                        'div',
                                        {
                                            className: i()(
                                                h.label,
                                                h[`label${x}`],
                                                L && h.label__new,
                                                L && h[`label__new${f}`],
                                                h[`label__${_}${f}`],
                                                r && h[`label__hasProgress${f}`],
                                            ),
                                        },
                                        n().createElement(g, {
                                            level: e,
                                            size: a,
                                            isGold: o,
                                            isFirstLevel: L,
                                            curState: _,
                                            key: 'newLabel',
                                            chapterID: b,
                                        }),
                                    ),
                            );
                        },
                    ),
                    w = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let p, v;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(p || (p = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(v || (v = {})));
                const E = ({ size: e = p.Default, classMix: t }) =>
                        n().createElement('div', { className: i()(w.background, w[`background__${e}`], t) }),
                    f = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    x = ({ size: e }) => {
                        const t = i()(f.base, f[`base__${e}`]);
                        return n().createElement('div', { className: t });
                    },
                    L = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    S = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: l, isComplete: r, withoutBounce: s }) => {
                            const o = i()(
                                    L.base,
                                    L[`base__${e}`],
                                    a && L.base__disabled,
                                    r && L.base__finished,
                                    s && L.base__withoutBounce,
                                ),
                                m = !a && !r;
                            return n().createElement(
                                'div',
                                { className: o, style: l, ref: t },
                                n().createElement('div', { className: L.pattern }),
                                n().createElement('div', { className: L.gradient }),
                                m && n().createElement(x, { size: e }),
                            );
                        },
                    ),
                    P = ({ size: e, value: t, lineRef: a, disabled: l, onComplete: i }) => {
                        const s = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                o && i && i();
                            }, [o, i]),
                            n().createElement(S, { size: e, disabled: l, baseStyles: s, isComplete: o, lineRef: a })
                        );
                    };
                var y = a(122);
                let M, $;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(M || (M = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })($ || ($ = {})));
                const B = 'ProgressBarDeltaSimple_base_6c',
                    C = 'ProgressBarDeltaSimple_delta_99',
                    k = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: l,
                            size: i,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: m,
                        }) => {
                            const _ = s < l,
                                d = (0, r.useState)($.Idle),
                                g = d[0],
                                c = d[1],
                                h = g === $.In,
                                u = g === $.End,
                                b = g === $.Idle,
                                w = (0, r.useCallback)(
                                    (e) => {
                                        (c(e), m && m(e));
                                    },
                                    [m],
                                );
                            ((0, r.useEffect)(() => {
                                if (b && !a) {
                                    const e = t;
                                    return (0, y.F)(() => {
                                        w($.In);
                                    }, e);
                                }
                            }, [w, a, b, t]),
                                (0, r.useEffect)(() => {
                                    if (h) {
                                        const a = e + t;
                                        return (0, y.F)(() => {
                                            (o && o(), w($.End));
                                        }, a);
                                    }
                                }, [w, h, o, t, e]));
                            const p = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [_ ? 'left' : 'right']: '0',
                                    }),
                                    [_, t, e],
                                ),
                                v = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [_ ? 'left' : 'right']: '0',
                                    }),
                                    [_, t, e],
                                ),
                                E = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(l - s)}%`, left: `${_ ? s : l}%` }),
                                    [l, _, s],
                                );
                            return u
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: B, style: E },
                                      n().createElement(
                                          'div',
                                          { style: b ? p : v, className: C },
                                          n().createElement(x, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    O = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: l,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onChangeAnimationState: m,
                            onEndAnimation: _,
                        }) => {
                            const d = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(S, {
                                    size: t,
                                    lineRef: l,
                                    disabled: i,
                                    isComplete: s,
                                    baseStyles: d,
                                }),
                                a >= 0 &&
                                    n().createElement(k, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: a,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: m,
                                        onEndAnimation: _,
                                    }),
                            );
                        },
                    ),
                    W = 'ProgressBarDeltaGrow_base_7e',
                    z = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    I = 'ProgressBarDeltaGrow_glow_68',
                    H = (e) => (e ? { left: 0 } : { right: 0 }),
                    D = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    j = (e) => ({ transitionDuration: `${e}ms` }),
                    A = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: l,
                            size: s,
                            to: o,
                            onEndAnimation: m,
                            onChangeAnimationState: _,
                            className: d,
                        }) => {
                            const g = o < l,
                                c = (0, r.useState)(M.Idle),
                                h = c[0],
                                u = c[1],
                                b = h === M.End,
                                w = h === M.Idle,
                                p = h === M.Grow,
                                v = h === M.Shrink,
                                E = (0, r.useCallback)(
                                    (e) => {
                                        (u(e), _ && _(e));
                                    },
                                    [_],
                                ),
                                f = (0, r.useCallback)(
                                    (e, t) =>
                                        (0, y.F)(() => {
                                            E(e);
                                        }, t),
                                    [E],
                                );
                            (0, r.useEffect)(() => {
                                if (!a)
                                    return w
                                        ? f(M.Grow, t)
                                        : p
                                          ? f(M.Shrink, e)
                                          : v
                                            ? f(M.End, e)
                                            : void (b && m && m());
                            }, [f, a, b, p, w, v, m, t, e]);
                            const L = (0, r.useMemo)(() => Object.assign({ width: '100%' }, j(e), H(g)), [g, e]),
                                S = (0, r.useMemo)(() => Object.assign({ width: '0%' }, j(e), H(g)), [g, e]),
                                P = (0, r.useMemo)(() => Object.assign({ width: '0%' }, D(g, l), j(e)), [l, g, e]),
                                $ = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - l)}%` }, D(g, l), j(e)),
                                    [l, g, o, e],
                                );
                            if (b) return null;
                            const B = i()(W, d, g && 0 === o && z);
                            return n().createElement(
                                'div',
                                { style: w ? P : $, className: B },
                                n().createElement(
                                    'div',
                                    { style: v ? S : L, className: I },
                                    n().createElement(x, { size: s }),
                                ),
                            );
                        },
                    ),
                    F = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: l,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onEndAnimation: m,
                            onChangeAnimationState: _,
                        }) => {
                            const d = e < a,
                                g = (0, r.useState)(!1),
                                c = g[0],
                                h = g[1],
                                u = (0, r.useCallback)(
                                    (e) => {
                                        (e === M.Shrink && h(!0), _ && _(e));
                                    },
                                    [_],
                                ),
                                b = (0, r.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                w = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(S, {
                                    size: t,
                                    lineRef: l,
                                    disabled: i,
                                    isComplete: s,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: c ? w : b,
                                }),
                                a >= 0 &&
                                    n().createElement(A, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: u,
                                        freezed: o.freezed,
                                        onEndAnimation: m,
                                        from: a,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    T = ['onComplete', 'onEndAnimation'];
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const G = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    l,
                                    i = {},
                                    r = Object.keys(e);
                                for (l = 0; l < r.length; l++) ((a = r[l]), t.indexOf(a) >= 0 || (i[a] = e[a]));
                                return i;
                            })(e, T);
                        const i = (0, r.useState)(!1),
                            s = i[0],
                            o = i[1],
                            m = (0, r.useCallback)(() => {
                                const e = 100 === l.to;
                                (e !== s && o(e), e && t && t(), a && a());
                            }, [s, t, a, l.to]);
                        switch (l.animationSettings.type) {
                            case v.Simple:
                                return n().createElement(O, N({}, l, { onEndAnimation: m, isComplete: s }));
                            case v.Growing:
                                return n().createElement(F, N({}, l, { onEndAnimation: m, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    V = ['onEndAnimation'];
                function q() {
                    return (
                        (q =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                                }
                                return e;
                            }),
                        q.apply(this, arguments)
                    );
                }
                const U = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                l,
                                i = {},
                                r = Object.keys(e);
                            for (l = 0; l < r.length; l++) ((a = r[l]), t.indexOf(a) >= 0 || (i[a] = e[a]));
                            return i;
                        })(e, V);
                    const l = (0, r.useRef)({}),
                        i = (0, r.useCallback)(() => {
                            ((l.current.from = void 0), t && t());
                        }, [t]),
                        s = 'number' == typeof l.current.from ? l.current.from : a.from;
                    return (
                        (l.current.from = s),
                        n().createElement(G, q({}, a, { onEndAnimation: i, key: `${s}-${a.to}`, from: s }))
                    );
                });
                function Q() {
                    return (
                        (Q =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                                }
                                return e;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                const Y = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: l,
                            deltaFrom: i,
                            animationSettings: r,
                            onEndAnimation: s,
                            onChangeAnimationState: o,
                            onComplete: m,
                        }) => {
                            if (i === t)
                                return n().createElement(P, {
                                    key: `${i}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: l,
                                    onComplete: m,
                                });
                            const _ = {
                                from: i,
                                to: t,
                                size: e,
                                lineRef: a,
                                disabled: l,
                                animationSettings: r,
                                onComplete: m,
                                onEndAnimation: s,
                                onChangeAnimationState: o,
                            };
                            return r.withStack
                                ? n().createElement(U, _)
                                : n().createElement(G, Q({ key: `${i}-${t}` }, _));
                        },
                    ),
                    Z = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    J = (e, t, a) => (a < e ? e : a > t ? t : a),
                    K = (e, t, a) => {
                        if ('number' == typeof a) {
                            return (J(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    X = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    ee = {
                        freezed: !1,
                        withStack: !1,
                        type: v.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    te = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = X,
                            size: a = p.Default,
                            animationSettings: l = ee,
                            disabled: s = !1,
                            withoutBackground: o = !1,
                            progressBarBackgroundClassMix: m,
                            value: _,
                            deltaFrom: d,
                            lineRef: g,
                            onChangeAnimationState: c,
                            onEndAnimation: h,
                            onComplete: u,
                        }) => {
                            const b = ((e, t, a) =>
                                (0, r.useMemo)(() => {
                                    const l = (J(0, t, e) / t) * 100;
                                    return { value: l, deltaFrom: K(l, t, a) };
                                }, [a, t, e]))(_, e, d);
                            return n().createElement(
                                'div',
                                { className: i()(w.base, w[`base__${a}`]), style: Z(t) },
                                !o && n().createElement(E, { size: a, classMix: m }),
                                n().createElement(Y, {
                                    size: a,
                                    lineRef: g,
                                    disabled: s,
                                    value: b.value,
                                    deltaFrom: b.deltaFrom,
                                    animationSettings: l,
                                    onEndAnimation: h,
                                    onChangeAnimationState: c,
                                    onComplete: u,
                                }),
                            );
                        },
                    ),
                    ae = {
                        base: 'EmblemProgressBar_base_5c',
                        base__small: 'EmblemProgressBar_base__small_6c',
                        base__completed: 'EmblemProgressBar_base__completed_6d',
                        hideProgress: 'EmblemProgressBar_hideProgress_18',
                        base__completePostProgression: 'EmblemProgressBar_base__completePostProgression_20',
                        base__hidden: 'EmblemProgressBar_base__hidden_8b',
                        hideLevel: 'EmblemProgressBar_hideLevel_1e',
                        showLevel: 'EmblemProgressBar_showLevel_5d',
                        hideLevelSmall: 'EmblemProgressBar_hideLevelSmall_ae',
                        showLevelSmall: 'EmblemProgressBar_showLevelSmall_df',
                        hideLevelMicro: 'EmblemProgressBar_hideLevelMicro_13',
                        showLevelMicro: 'EmblemProgressBar_showLevelMicro_ae',
                        showIcon: 'EmblemProgressBar_showIcon_55',
                        showIconSmall: 'EmblemProgressBar_showIconSmall_26',
                        showIconMicro: 'EmblemProgressBar_showIconMicro_78',
                    },
                    le = (0, r.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: a,
                            isProgressionCompleted: l,
                            size: r,
                        }) => {
                            const s = i()(
                                ae.base,
                                ae[`base__${r}`],
                                a && ae.base__completed,
                                !a && l && ae.base__hidden,
                            );
                            return n().createElement(
                                'div',
                                { className: s },
                                n().createElement(te, {
                                    key: e.to,
                                    size: p.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function ie() {
                    return (
                        (ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                                }
                                return e;
                            }),
                        ie.apply(this, arguments)
                    );
                }
                (0, r.memo)((e) => {
                    const t = e.progression,
                        a = e.size,
                        l = e.battlePassState,
                        r = e.hasBattlePass,
                        m = e.isChapterChosen,
                        _ = e.hasBeenActive,
                        d = void 0 !== _ && _,
                        g = e.isChapterSelection,
                        h = void 0 !== g && g,
                        u = e.isOpen,
                        w = void 0 !== u && u,
                        p = e.isProgression,
                        v = void 0 !== p && p,
                        E = e.showProgressBar,
                        f = void 0 === E || E,
                        x = e.chapterType,
                        L = e.chapterID;
                    let S = '',
                        P = '',
                        y = '';
                    a === c.$u.Small
                        ? ((S = 'Small'), (P = '__small'), (y = '_small'))
                        : a === c.$u.Micro && ((S = 'Micro'), (P = '__micro'), (y = '_micro'));
                    const M = w ? 'Open' : '',
                        $ = l === c.Bq.CompletedRightNow,
                        B = r || l === c.Bq.Bought,
                        C = (l === c.Bq.Completed || $) && B,
                        k = (l === c.Bq.Completed || $) && !B,
                        O = C || k,
                        W = i()(
                            o.image,
                            o[`image${P}`],
                            w && o[`image__open${S}`],
                            B && o[`image__battlePass${S}${M}`],
                            l === c.Bq.AwaitSeason && o[`image__seasonWaiting${S}`],
                            k && o[`image__completedFree${S}${M}`],
                        ),
                        R = i()(o[`${x}`], o[`${x}${P}`]),
                        z = void 0 !== t.from,
                        I = f && ((z && m) || d);
                    return n().createElement(
                        'div',
                        { className: o.base },
                        n().createElement('div', { className: R }),
                        n().createElement(
                            'div',
                            { className: W, style: (0, s.FL)(L, y, w, B) },
                            l !== c.Bq.AwaitSeason &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        b,
                                        ie(
                                            {
                                                hasProgression: z,
                                                isGolden: B,
                                                isProgressionCompleted: O,
                                                isChapterChosen: m,
                                                hasBeenActive: d,
                                                isChapterSelection: h,
                                                isProgression: v,
                                            },
                                            e,
                                            t,
                                        ),
                                    ),
                                    I &&
                                        n().createElement(le, {
                                            key: t.to,
                                            progression: t,
                                            showProgressionCompleted: $,
                                            isProgressionCompleted: O,
                                            size: a,
                                        }),
                                ),
                        ),
                    );
                });
            },
            8546: (e, t, a) => {
                let l, i, r, n;
                (a.d(t, { $u: () => l, Bq: () => r }),
                    (function (e) {
                        ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(l || (l = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(i || (i = {})),
                    (function (e) {
                        ((e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'));
                    })(n || (n = {})));
            },
        },
        a = {};
    function l(e) {
        var i = a[e];
        if (void 0 !== i) return i.exports;
        var r = (a[e] = { exports: {} });
        return (t[e](r, r.exports, l), r.exports);
    }
    ((l.m = t),
        (e = []),
        (l.O = (t, a, i, r) => {
            if (!a) {
                var n = 1 / 0;
                for (_ = 0; _ < e.length; _++) {
                    for (var [a, i, r] = e[_], s = !0, o = 0; o < a.length; o++)
                        (!1 & r || n >= r) && Object.keys(l.O).every((e) => l.O[e](a[o]))
                            ? a.splice(o--, 1)
                            : ((s = !1), r < n && (n = r));
                    if (s) {
                        e.splice(_--, 1);
                        var m = i();
                        void 0 !== m && (t = m);
                    }
                }
                return t;
            }
            r = r || 0;
            for (var _ = e.length; _ > 0 && e[_ - 1][2] > r; _--) e[_] = e[_ - 1];
            e[_] = [a, i, r];
        }),
        (l.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (l.d(t, { a: t }), t);
        }),
        (l.d = (e, t) => {
            for (var a in t) l.o(t, a) && !l.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        }),
        (l.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (l.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (l.j = 1730),
        (() => {
            var e = { 1730: 0 };
            l.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var i,
                        r,
                        [n, s, o] = a,
                        m = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (i in s) l.o(s, i) && (l.m[i] = s[i]);
                        if (o) var _ = o(l);
                    }
                    for (t && t(a); m < n.length; m++) ((r = n[m]), l.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return l.O(_);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var i = l.O(void 0, [1519], () => l(9830));
    i = l.O(i);
})();
