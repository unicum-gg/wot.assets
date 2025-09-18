(() => {
    'use strict';
    var e,
        n = {
            1986: (e, n, t) => {
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => p, off: () => v, on: () => f, onResize: () => d, onScaleUpdated: () => m }));
                var o = {};
                (t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => E,
                        getSize: () => w,
                        graphicsQuality: () => b,
                        playSound: () => h,
                        setRTPC: () => y,
                    }));
                var i = {};
                (t.r(i), t.d(i, { getBgUrl: () => A, getTextureUrl: () => k }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => $,
                        addPreloadTexture: () => D,
                        arabic2roman: () => ae,
                        children: () => i,
                        displayStatus: () => z,
                        displayStatusIs: () => le,
                        enableFullScreenModeSupported: () => de,
                        events: () => F,
                        extraSize: () => ue,
                        forceTriggerMouseMove: () => re,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => K,
                        getDisplayStatus: () => oe,
                        getExternalPaddingsRem: () => se,
                        getFontNames: () => ie,
                        getScale: () => X,
                        getSize: () => I,
                        getViewGlobalPosition: () => Q,
                        initExternalPaddings: () => me,
                        isEventHandled: () => te,
                        isFocused: () => ee,
                        pxToRem: () => J,
                        remToPx: () => Y,
                        resize: () => q,
                        sendEvent: () => V,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => ne,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => B,
                        whenTutorialReady: () => ce,
                    }));
                var s = t(6483),
                    l = t.n(s);
                function u(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = u('clientResized'),
                    m = u('self.onScaleUpdated'),
                    f = (e, n) => engine.on(e, n),
                    v = (e, n) => engine.off(e, n),
                    g = { down: u('mousedown'), up: u('mouseup'), move: u('mousemove') };
                const p = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && c(!1);
                    }
                    function t() {
                        e.enabled && c(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', n),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', n),
                                  document.body.addEventListener('mouseleave', t))
                            : c(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        a = g[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            o &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function h(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function y(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    T = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    P = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    x = Object.keys(P).reduce((e, n) => ((e[n] = () => h(P[n])), e), {}),
                    S = { play: Object.assign({}, x, { sound: h }), setRTPC: y },
                    _ = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    O = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function C(e) {
                    let n = '';
                    for (let t = O.length - 1; t >= 0; t--) for (; e >= O[t]; ) ((n += _[t]), (e -= O[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function k(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function A(e, n, t) {
                    return `url(${k(e, n, t)})`;
                }
                const z = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    F = {
                        onTextureFrozen: u('self.onTextureFrozen'),
                        onTextureReady: u('self.onTextureReady'),
                        onDomBuilt: u('self.onDomBuilt'),
                        onLoaded: u('self.onLoaded'),
                        onDisplayChanged: u('self.onShowingStatusChanged'),
                        onFocusUpdated: u('self.onFocusChanged'),
                        children: {
                            onAdded: u('children.onAdded'),
                            onLoaded: u('children.onLoaded'),
                            onRemoved: u('children.onRemoved'),
                            onAttached: u('children.onAttached'),
                            onTextureReady: u('children.onTextureReady'),
                            onRequestPosition: u('children.requestPosition'),
                        },
                    },
                    L = ['args'];
                const j = 2,
                    H = 16,
                    N = 32,
                    M = 64,
                    U = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) ((t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]));
                                    return o;
                                })(n, L);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, n]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof n) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: n };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: n };
                                                      default:
                                                          return { __Type: t, name: e, string: n.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    V = {
                        close(e) {
                            U('popover' === e ? j : N);
                        },
                        minimize() {
                            U(M);
                        },
                        move(e) {
                            U(H, { isMouseEvent: !0, on: e });
                        },
                    };
                function D(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function K(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function $(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function I(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function Q(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: Y(n.x), y: Y(n.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function X() {
                    return viewEnv.getScale();
                }
                function J(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ee() {
                    return viewEnv.isFocused();
                }
                function ne() {
                    return viewEnv.setEventHandled();
                }
                function te() {
                    return viewEnv.isEventHandled();
                }
                function re() {
                    viewEnv.forceTriggerMouseMove();
                }
                function oe() {
                    return viewEnv.getShowingStatus();
                }
                const ie = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ae = C;
                function se() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const le = Object.keys(z).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === z[n]), e), {}),
                    ue = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ce = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : F.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function de() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function me(e) {
                    function n() {
                        const n = viewEnv.getExternalPaddingsRem(),
                            t = n.top,
                            r = n.right,
                            o = n.bottom,
                            i = n.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${o}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (n(), engine.on('self.onPaddingsUpdated', () => n()));
                }
                const fe = { view: a, client: o, sound: S, intl: T };
                var ve = t(7363),
                    ge = t.n(ve);
                const pe = (e) => {
                    (0, ve.useEffect)(e, []);
                };
                function he() {
                    const e = (0, ve.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ve.useEffect)(() => n, []),
                        (0, ve.useMemo)(
                            () => ({
                                run: (n) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                (n(), (e.current = 0));
                                            });
                                        })));
                                },
                                clear: () => {
                                    (window.cancelAnimationFrame(e.current), (e.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const ye = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    we = ['children', 'className', 'theme'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const be = ge().forwardRef(function (e, n) {
                    let t = e.children,
                        r = e.className,
                        o = e.theme,
                        i = void 0 === o ? 'default' : o,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                r,
                                o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) ((t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]));
                            return o;
                        })(e, we);
                    const s = he(),
                        u = ge().useRef(null);
                    return (
                        pe(() => {
                            s.run(() => {
                                const e = u.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                fe.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                fe.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        ge().createElement(
                            'div',
                            Ee({}, a, {
                                className: l()(ye.base, ye[`base__theme-${i}`], r),
                                ref: function (e) {
                                    ((u.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                },
                            }),
                            ge().createElement('div', { className: ye.decorator }, t),
                        )
                    );
                });
                var Te = t(1533),
                    Pe = t.n(Te);
                function xe() {}
                console.log;
                const Se = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function Re() {
                    return (
                        (Re =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Re.apply(this, arguments)
                    );
                }
                const _e = (0, ve.forwardRef)(function (e, n) {
                        let t = e.src,
                            r = e.className,
                            o = e.autoplay,
                            i = void 0 !== o && o,
                            a = e.style,
                            s = e.loop,
                            l = void 0 !== s && s,
                            u = e.isPrebufferKeyframes,
                            c = e.keyframesNameConfig,
                            d = e.onClick,
                            m = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) ((t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]));
                                return o;
                            })(e, Se);
                        const f = n,
                            v = (0, ve.useRef)(null);
                        return (
                            pe(() =>
                                fe.view.events.onDisplayChanged((e, n) => {
                                    var t, r;
                                    n === z.hidden && (null == (t = v.current) || t.pause());
                                    n === z.shown && (null == (r = v.current) || r.play());
                                }),
                            ),
                            (0, ve.useEffect)(
                                () =>
                                    ((e) => {
                                        let n,
                                            t = null;
                                        return (
                                            (t = requestAnimationFrame(() => {
                                                t = requestAnimationFrame(() => {
                                                    ((t = null), (n = e()));
                                                });
                                            })),
                                            () => {
                                                ('function' == typeof n && n(), null !== t && cancelAnimationFrame(t));
                                            }
                                        );
                                    })(() => {
                                        const e = v.current;
                                        if (!f || !e || !u)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const n = e.cohGetKeyframeTimestamps();
                                        n.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              n.map((n) => {
                                                  null == e || e.cohPrebufferKeyframe(n);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [u, f],
                            ),
                            (0, ve.useEffect)(() => {
                                if (f && v.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: xe,
                                        },
                                        n = () => {
                                            let n = 0;
                                            const t = (function (e) {
                                                    let n = 0;
                                                    return [
                                                        function t() {
                                                            (e(), (n = requestAnimationFrame(t)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (v.current) {
                                                        const t = v.current,
                                                            r = t.currentTime,
                                                            o = t.duration;
                                                        if (
                                                            (n !== r &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: r, duration: o }),
                                                                ),
                                                                (n = r)),
                                                            v.current.paused || !f || !u)
                                                        )
                                                            return;
                                                        const i = v.current.cohGetKeyframeTimestamps();
                                                        i.forEach((n, t) => {
                                                            r > i[t] - 0.02 &&
                                                                r < i[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const r = Object.keys(null != c ? c : {})[t];
                                                                    return e({
                                                                        time: n,
                                                                        name: `${c ? r : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                r = t[0],
                                                o = t[1];
                                            return (r(), o);
                                        };
                                    e.changeTimeLoop = n();
                                    const t = (n) => (
                                            e.changeTimeHandlers.push(n),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    r = t.indexOf(n);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(r, 1);
                                            }
                                        ),
                                        r = (n) => (
                                            e.changeKeyframeHandlers.push(n),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    r = t.indexOf(n);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(r, 1);
                                            }
                                        ),
                                        o = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.currentTime;
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.duration;
                                        },
                                        a = (e) => {
                                            var n, t, r;
                                            v.current &&
                                                (v.current.currentTime =
                                                    ((n = 0),
                                                    (t = v.current.duration),
                                                    (r = e) < n ? n : r > t ? t : r));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.play();
                                        },
                                        l = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.pause();
                                        },
                                        d = () => {
                                            (l(), a(0));
                                        },
                                        m = () => {
                                            var e, n;
                                            return null !=
                                                (e = null == (n = v.current) ? void 0 : n.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        g = (e) => {
                                            (a(e), s());
                                        },
                                        p = (e) => {
                                            (a(e), l());
                                        },
                                        h = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        y = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = v.current) || t.addEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = v.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        },
                                        w = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = v.current) || t.removeEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = v.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        };
                                    return (
                                        (f.current = {
                                            on: y,
                                            off: w,
                                            play: s,
                                            pause: l,
                                            stop: d,
                                            cleanup: h,
                                            getCurrentTime: o,
                                            getDuration: i,
                                            getCachedKeyframes: m,
                                            goToAndPlay: g,
                                            goToAndStop: p,
                                            setCurrentTime: a,
                                            domRef: v.current,
                                            onChangeTime: t,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            (h(), (f.current = null));
                                        }
                                    );
                                }
                            }, [c, f, u]),
                            (0, ve.useEffect)(() => {
                                v.current && i && v.current.play();
                            }, [i, l]),
                            (0, ve.useEffect)(() => {
                                if (v.current)
                                    return () => {
                                        v.current && v.current.pause();
                                    };
                            }, []),
                            ge().createElement(
                                'video',
                                Re({ src: t, className: r, style: a, loop: l, ref: v, onClick: d }, m),
                            )
                        );
                    }),
                    Oe = (0, ve.memo)(_e);
                var Ce = t(3403);
                const ke = 'SkillUntrainedHeader_base_74',
                    Ae = 'SkillUntrainedHeader_gradient_03',
                    ze = 'SkillUntrainedHeader_icon_21',
                    Fe = 'SkillUntrainedHeader_header_96',
                    Le = (0, ve.memo)(({ className: e }) =>
                        ge().createElement(
                            'div',
                            { className: l()(ke, e) },
                            ge().createElement('div', { className: Ae }),
                            ge().createElement('div', { className: ze }),
                            ge().createElement('div', { className: Fe }, R.strings.tooltips.skill.untrained.header()),
                        ),
                    ),
                    je = 'SkillUntrainedAdditionalApp_base_a7',
                    He = 'SkillUntrainedAdditionalApp_movie_74',
                    Ne = 'SkillUntrainedAdditionalApp_header_db',
                    Me = 'SkillUntrainedAdditionalApp_description_93',
                    Ue = (0, Ce.Pi)(() =>
                        ge().createElement(
                            'div',
                            { className: je },
                            ge().createElement(Le, { className: Ne }),
                            ge().createElement(Oe, {
                                loop: !0,
                                autoplay: !0,
                                src: R.videos.animations.advancedHints.skillUntrainedPenalty(),
                                className: He,
                            }),
                            ge().createElement(
                                'div',
                                { className: Me },
                                R.strings.tooltips.skill.untrained.additional(),
                            ),
                        ),
                    );
                engine.whenReady.then(() => {
                    Pe().render(
                        ge().createElement(be, null, ge().createElement(Ue, null)),
                        document.getElementById('root'),
                    );
                });
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
            },
        },
        t = {};
    function r(e) {
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var i = (t[e] = { exports: {} });
        return (n[e](i, i.exports, r), i.exports);
    }
    ((r.m = n),
        (e = []),
        (r.O = (n, t, o, i) => {
            if (!t) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [t, o, i] = e[c], s = !0, l = 0; l < t.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(c--, 1);
                        var u = o();
                        void 0 !== u && (n = u);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [t, o, i];
        }),
        (r.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return (r.d(n, { a: n }), n);
        }),
        (r.d = (e, n) => {
            for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (r.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (r.j = 2486),
        (() => {
            var e = { 2486: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [a, s, l] = t,
                        u = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var c = l(r);
                    }
                    for (n && n(t); u < a.length; u++) ((i = a[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var o = r.O(void 0, [9056], () => r(1986));
    o = r.O(o);
})();
