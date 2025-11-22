(() => {
    'use strict';
    var e,
        n = {
            2581: (e, n, t) => {
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => y, off: () => b, on: () => p, onResize: () => f, onScaleUpdated: () => v }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        events: () => r,
                        getMouseGlobalPosition: () => S,
                        getSize: () => E,
                        graphicsQuality: () => x,
                        playSound: () => _,
                        setRTPC: () => w,
                    }));
                var o = {};
                (t.r(o), t.d(o, { getBgUrl: () => z, getTextureUrl: () => L }));
                var i = {};
                (t.r(i),
                    t.d(i, {
                        addModelObserver: () => q,
                        addPreloadTexture: () => K,
                        arabic2roman: () => ce,
                        children: () => o,
                        displayStatus: () => D,
                        displayStatusIs: () => de,
                        enableFullScreenModeSupported: () => fe,
                        events: () => j,
                        extraSize: () => me,
                        forceTriggerMouseMove: () => ie,
                        freezeTextureBeforeResize: () => J,
                        getBrowserTexturePath: () => Q,
                        getDisplayStatus: () => se,
                        getExternalPaddingsRem: () => le,
                        getFontNames: () => ue,
                        getScale: () => Z,
                        getSize: () => Y,
                        getViewGlobalPosition: () => W,
                        initExternalPaddings: () => ve,
                        isEventHandled: () => oe,
                        isFocused: () => re,
                        pxToRem: () => ee,
                        remToPx: () => ne,
                        resize: () => X,
                        sendEvent: () => G,
                        setAnimateWindow: () => te,
                        setEventHandled: () => ae,
                        setInputPaddingsRem: () => V,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => ge,
                    }));
                var s = t(7363),
                    u = t.n(s),
                    c = t(1533),
                    l = t.n(c);
                const d = {
                    linear: (e) => e,
                    easeInQuad: (e) => e * e,
                    easeOutQuad: (e) => e * (2 - e),
                    easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                    easeInCubic: (e) => e * e * e,
                    easeOutCubic: (e) => --e * e * e + 1,
                    easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    easeInQuart: (e) => e * e * e * e,
                    easeOutQuart: (e) => 1 - --e * e * e * e,
                    easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                    easeInQuint: (e) => e * e * e * e * e,
                    easeOutQuint: (e) => 1 + --e * e * e * e * e,
                    easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    easeInOutCirc(e) {
                        const n = Math.sqrt,
                            t = Math.pow;
                        return e < 0.5 ? (1 - n(1 - t(2 * e, 2))) / 2 : (n(1 - t(-2 * e + 2, 2)) + 1) / 2;
                    },
                    easeOutBack(e) {
                        const n = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + n * Math.pow(e - 1, 2);
                    },
                    bezier: (e, n, t, r) => (a) =>
                        (1 - a) * (1 - a) * (1 - a) * e +
                        3 * (1 - a) * (1 - a) * a * n +
                        3 * (1 - a) * a * a * t +
                        a * a * a * r,
                };
                function m(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function g(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const f = m('clientResized'),
                    v = m('self.onScaleUpdated'),
                    p = (e, n) => engine.on(e, n),
                    b = (e, n) => engine.off(e, n),
                    h = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') };
                const y = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && g(!1);
                    }
                    function t() {
                        e.enabled && g(!0);
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
                            : g(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const o = `mouse${n}`,
                                        i = h[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        r(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(o, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && g(!0);
                        },
                        disableOutside() {
                            e.enabled && g(!1);
                        },
                    });
                })();
                function _(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function w(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const x = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    T = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(C).reduce((e, n) => ((e[n] = () => _(C[n])), e), {}),
                    k = { play: Object.assign({}, O, { sound: _ }), setRTPC: w },
                    P = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    A = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function M(e) {
                    let n = '';
                    for (let t = A.length - 1; t >= 0; t--) for (; e >= A[t]; ) ((n += P[t]), (e -= A[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function L(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function z(e, n, t) {
                    return `url(${L(e, n, t)})`;
                }
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    j = {
                        onTextureFrozen: m('self.onTextureFrozen'),
                        onTextureReady: m('self.onTextureReady'),
                        onDomBuilt: m('self.onDomBuilt'),
                        onLoaded: m('self.onLoaded'),
                        onDisplayChanged: m('self.onShowingStatusChanged'),
                        onFocusUpdated: m('self.onFocusChanged'),
                        children: {
                            onAdded: m('children.onAdded'),
                            onLoaded: m('children.onLoaded'),
                            onRemoved: m('children.onRemoved'),
                            onAttached: m('children.onAttached'),
                            onTextureReady: m('children.onTextureReady'),
                            onRequestPosition: m('children.requestPosition'),
                        },
                    },
                    B = ['args'];
                const $ = 2,
                    N = 16,
                    I = 32,
                    H = 64,
                    F = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const a = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        a = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) ((t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(n, B);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    G = {
                        close(e) {
                            F('popover' === e ? $ : I);
                        },
                        minimize() {
                            F(H);
                        },
                        move(e) {
                            F(N, { isMouseEvent: !0, on: e });
                        },
                    };
                function K(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function V(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function Q(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function q(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function Y(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function X(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function W(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: ne(n.x), y: ne(n.y) };
                }
                function J() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Z() {
                    return viewEnv.getScale();
                }
                function ee(e) {
                    return viewEnv.pxToRem(e);
                }
                function ne(e) {
                    return viewEnv.remToPx(e);
                }
                function te(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function re() {
                    return viewEnv.isFocused();
                }
                function ae() {
                    return viewEnv.setEventHandled();
                }
                function oe() {
                    return viewEnv.isEventHandled();
                }
                function ie() {
                    viewEnv.forceTriggerMouseMove();
                }
                function se() {
                    return viewEnv.getShowingStatus();
                }
                const ue = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ce = M;
                function le() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const de = Object.keys(D).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === D[n]), e), {}),
                    me = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ge = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : j.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function fe() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ve(e) {
                    function n() {
                        const n = viewEnv.getExternalPaddingsRem(),
                            t = n.top,
                            r = n.right,
                            a = n.bottom,
                            o = n.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${o}rem`));
                    }
                    (n(), engine.on('self.onPaddingsUpdated', () => n()));
                }
                const pe = { view: i, client: a, sound: k, intl: T };
                const be = (e) => {
                    (0, s.useEffect)(e, []);
                };
                function he(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', n);
                    });
                }
                var ye = t(3403),
                    _e = t(7030),
                    we = t(6483),
                    Ee = t.n(we);
                const Se = (e) => {
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
                };
                function xe() {}
                const Te = xe;
                function Ce() {
                    return !1;
                }
                console.log;
                const Oe = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const Pe = (0, s.forwardRef)(function (e, n) {
                        let t = e.src,
                            r = e.className,
                            a = e.autoplay,
                            o = void 0 !== a && a,
                            i = e.style,
                            c = e.loop,
                            l = void 0 !== c && c,
                            d = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            g = e.onClick,
                            f = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) ((t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Oe);
                        const v = n,
                            p = (0, s.useRef)(null);
                        return (
                            be(() =>
                                pe.view.events.onDisplayChanged((e, n) => {
                                    var t, r;
                                    n === D.hidden && (null == (t = p.current) || t.pause());
                                    n === D.shown && (null == (r = p.current) || r.play());
                                }),
                            ),
                            (0, s.useEffect)(
                                () =>
                                    Se(() => {
                                        const e = p.current;
                                        if (!v || !e || !d)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const n = e.cohGetKeyframeTimestamps();
                                        n.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              n.map((n) => {
                                                  null == e || e.cohPrebufferKeyframe(n);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [d, v],
                            ),
                            (0, s.useEffect)(() => {
                                if (v && p.current) {
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
                                                    if (p.current) {
                                                        const t = p.current,
                                                            r = t.currentTime,
                                                            a = t.duration;
                                                        if (
                                                            (n !== r &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: r, duration: a }),
                                                                ),
                                                                (n = r)),
                                                            p.current.paused || !v || !d)
                                                        )
                                                            return;
                                                        const o = p.current.cohGetKeyframeTimestamps();
                                                        o.forEach((n, t) => {
                                                            r > o[t] - 0.02 &&
                                                                r < o[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const r = Object.keys(null != m ? m : {})[t];
                                                                    return e({
                                                                        time: n,
                                                                        name: `${m ? r : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                r = t[0],
                                                a = t[1];
                                            return (r(), a);
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
                                        a = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.currentTime;
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            var n, t, r;
                                            p.current &&
                                                (p.current.currentTime =
                                                    ((n = 0),
                                                    (t = p.current.duration),
                                                    (r = e) < n ? n : r > t ? t : r));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.play();
                                        },
                                        u = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.pause();
                                        },
                                        c = () => {
                                            (u(), i(0));
                                        },
                                        l = () => {
                                            var e, n;
                                            return null !=
                                                (e = null == (n = p.current) ? void 0 : n.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        g = (e) => {
                                            (i(e), s());
                                        },
                                        f = (e) => {
                                            (i(e), u());
                                        },
                                        b = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        h = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = p.current) || t.addEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = p.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        },
                                        y = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = p.current) || t.removeEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = p.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        };
                                    return (
                                        (v.current = {
                                            on: h,
                                            off: y,
                                            play: s,
                                            pause: u,
                                            stop: c,
                                            cleanup: b,
                                            getCurrentTime: a,
                                            getDuration: o,
                                            getCachedKeyframes: l,
                                            goToAndPlay: g,
                                            goToAndStop: f,
                                            setCurrentTime: i,
                                            domRef: p.current,
                                            onChangeTime: t,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            (b(), (v.current = null));
                                        }
                                    );
                                }
                            }, [m, v, d]),
                            (0, s.useEffect)(() => {
                                p.current && o && p.current.play();
                            }, [o, l]),
                            (0, s.useEffect)(() => {
                                if (p.current)
                                    return () => {
                                        p.current && p.current.pause();
                                    };
                            }, []),
                            u().createElement(
                                'video',
                                ke({ src: t, className: r, style: i, loop: l, ref: p, onClick: g }, f),
                            )
                        );
                    }),
                    Re = (0, s.memo)(Pe),
                    Ae = 'DogTag_base_2b',
                    Me = 'DogTag_engraving_eb',
                    Le = 'DogTag_background_7f',
                    ze = R.strings.settings.LANGUAGE_CODE(),
                    De = ['de', 'es', 'fr', 'hu', 'it', 'pl', 'pt_br', 'ru', 'tr', 'uk', 'zh_cn', 'cs'];
                let je;
                !(function (e) {
                    ((e.Small = 'small'), (e.Big = 'big'));
                })(je || (je = {}));
                const Be = ({ background: e, engraving: n, size: t = je.Big, grade: r = 0, className: a }) => {
                        const o = De.includes(ze) ? `_${ze}` : '';
                        return u().createElement(
                            'div',
                            { className: Ee()(Ae, a) },
                            u().createElement('div', {
                                className: Le,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.dogtags.${t}.backgrounds.background_${e}_0)`,
                                },
                            }),
                            u().createElement('div', {
                                className: Me,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.dogtags.${t}.engravings.engraving_${n}_${r}${o})`,
                                },
                            }),
                        );
                    },
                    $e = {
                        base: 'AnimatedDogTag_base_9e',
                        base__small: 'AnimatedDogTag_base__small_ce',
                        base__medium: 'AnimatedDogTag_base__medium_13',
                        base__large: 'AnimatedDogTag_base__large_04',
                        shadow: 'AnimatedDogTag_shadow_24',
                        backplateBox: 'AnimatedDogTag_backplateBox_a8',
                        backplate: 'AnimatedDogTag_backplate_2d',
                        base__extraSmall: 'AnimatedDogTag_base__extraSmall_64',
                        dogTag: 'AnimatedDogTag_dogTag_34',
                        videoBox: 'AnimatedDogTag_videoBox_10',
                        video: 'AnimatedDogTag_video_e4',
                    },
                    Ne = {
                        base: 'Counter_base_29',
                        base__extraSmall: 'Counter_base__extraSmall_f8',
                        text: 'Counter_text_73',
                        base__medium: 'Counter_base__medium_78',
                        base__large: 'Counter_base__large_88',
                        count: 'Counter_count_ee',
                        base__small: 'Counter_base__small_52',
                    };
                let Ie;
                !(function (e) {
                    ((e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large'));
                })(Ie || (Ie = {}));
                const He = ({ engraving: e, count: n, size: t }) => {
                    const r = R.strings.dogtags.component.engraving.coupled.$num(e).counter();
                    return u().createElement(
                        'div',
                        { className: Ee()(Ne.base, Ne[`base__${t}`]) },
                        u().createElement('div', { className: Ne.text }, r),
                        u().createElement('div', { className: Ne.count }, n),
                    );
                };
                let Fe, Ge;
                (!(function (e) {
                    ((e.Static = 'static'),
                        (e.Intro = 'intro'),
                        (e.AutoShowing = 'autoShowing'),
                        (e.Showing = 'showing'),
                        (e.Loop = 'loop'),
                        (e.Hiding = 'hiding'));
                })(Fe || (Fe = {})),
                    (function (e) {
                        ((e.ExtraSmall = 'extraSmall'),
                            (e.Small = 'small'),
                            (e.Medium = 'medium'),
                            (e.Large = 'large'));
                    })(Ge || (Ge = {})));
                const Ke = { duration: 500, easing: d.easeOutBack },
                    Ve = {
                        [Ge.ExtraSmall]: Ie.ExtraSmall,
                        [Ge.Small]: Ie.Small,
                        [Ge.Medium]: Ie.Medium,
                        [Ge.Large]: Ie.Large,
                    },
                    Qe = { [Ge.ExtraSmall]: 'small', [Ge.Small]: 'big', [Ge.Medium]: 'big', [Ge.Large]: 's500x300' },
                    qe = {
                        vehicle_sparks_1: 'ach_dog_tag_animation_01',
                        vehicle_sparks_2: 'ach_dog_tag_animation_02',
                        vehicle_sparks_3: 'ach_dog_tag_animation_03',
                    },
                    Ue = ({
                        background: e,
                        engraving: n,
                        progress: t = 0,
                        animationState: r = Fe.Static,
                        animationName: a = '',
                        onAnimationEnd: o,
                        grade: i = 0,
                        showBackplate: c = !0,
                        size: l = Ge.Medium,
                        className: d,
                        isSoundOff: m,
                    }) => {
                        const g = (0, s.useRef)(null),
                            f = (0, s.useState)([]),
                            v = f[0],
                            p = f[1],
                            b = R.videos.dogtags.$dyn(a);
                        (0, s.useEffect)(() => {
                            const e = g.current;
                            if (e)
                                return Se(() => {
                                    p(e.getCachedKeyframes());
                                });
                        }, [g]);
                        const h = (0, _e.useSpring)(() => ({ from: { opacity: 0 }, config: Ke }), [r]),
                            y = h[0],
                            _ = h[1],
                            w = (0, _e.useSpring)(() => ({
                                from: { opacity: 0, transform: 'translateY(-50%)' },
                                config: Ke,
                                onRest: () => {
                                    r === Fe.Hiding && (null == o || o());
                                },
                            })),
                            E = w[0],
                            S = w[1],
                            T = (0, s.useCallback)(() => {
                                var e;
                                (null == (e = g.current) || e.play(),
                                    S.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !1 }),
                                    !m && he(R.sounds.$dyn(qe[a])));
                            }, [a, S, m]);
                        (0, s.useEffect)(() => {
                            switch (r) {
                                case Fe.Intro:
                                    return void _.start({ to: { opacity: 1 }, immediate: !1 });
                                case Fe.AutoShowing:
                                    return (_.start({ to: { opacity: 1 }, immediate: !1 }), void T());
                                case Fe.Showing:
                                    return void T();
                                case Fe.Loop:
                                    return (
                                        C(),
                                        _.start({ to: { opacity: 1 }, immediate: !0 }),
                                        void S.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !0 })
                                    );
                                case Fe.Hiding:
                                    return (
                                        _.start({ to: { opacity: 0 } }),
                                        void S.start({
                                            to: { opacity: 0, transform: 'translateY(-50%)' },
                                            immediate: !1,
                                        })
                                    );
                                case Fe.Static:
                                    (_.start({ to: { opacity: 1 }, immediate: !0 }),
                                        S.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !0 }));
                            }
                        }, [r, S, _, T]);
                        const C = () => {
                            g.current && (g.current.goToAndPlay(5), he(R.sounds.ach_dog_tag_idle()));
                        };
                        return u().createElement(
                            _e.animated.div,
                            { className: Ee()($e.base, $e[`base__${l}`], d), style: y },
                            c &&
                                u().createElement(
                                    _e.animated.div,
                                    { className: $e.backplateBox, style: E },
                                    u().createElement(
                                        'div',
                                        {
                                            className: $e.backplate,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${Qe[l]}.bottom_plates.bottom_plate_${e})`,
                                            },
                                        },
                                        u().createElement(He, { engraving: n, count: t, size: Ve[l] }),
                                    ),
                                ),
                            u().createElement('div', { className: $e.shadow }),
                            r !== Fe.Static &&
                                x.isHigh() &&
                                Boolean(b) &&
                                u().createElement(
                                    'div',
                                    { className: $e.videoBox },
                                    u().createElement(Re, {
                                        ref: g,
                                        className: $e.video,
                                        onEnded: C,
                                        isPrebufferKeyframes: Boolean(v.length),
                                        src: b,
                                    }),
                                ),
                            u().createElement(Be, {
                                background: e,
                                engraving: n,
                                grade: i,
                                size: je.Big,
                                className: $e.dogTag,
                            }),
                        );
                    };
                var Ye = t(9174);
                function Xe(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (!e) return;
                            if ('string' == typeof e) return We(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return We(e, n);
                        })(e)) ||
                        (n && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function We(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const Je = (e) => (0 === e ? window : window.subViews.get(e));
                const Ze = ((e, n) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: a, children: o, mocks: i }) {
                                const c = (0, s.useRef)([]),
                                    l = (t, r, a) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = Je,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function o(e, n = 0) {
                                                    viewEnv.removeDataChangedCallback(e, n)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, n, t) => {
                                                        t.forEach((n) => {
                                                            const t = a.get(n);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = t(n),
                                                        o = r.split('.').reduce((e, n) => e[n], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, n) => {
                                                              const t = e[n];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (t, o) => {
                                                        const s = 'string' == typeof o ? `${r}.${o}` : r,
                                                            u = pe.view.addModelObserver(s, n, !0);
                                                        return (a.set(u, t), e && t(i(o)), u);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, n) => {
                                                        const t = i(n);
                                                        return (...n) => {
                                                            t(e(...n));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const n = i(e);
                                                        return () => {
                                                            n();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = Xe(a.keys()); !(e = t()).done; ) o(e.value, n);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(r),
                                            s =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (o = null == a ? void 0 : a.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            u = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            l = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: u,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const n = u(e),
                                                            r = Ye.LO.box(n, { equals: Ce });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Ye.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (e, n) => {
                                                        const r = null != n ? n : u(e),
                                                            a = Ye.LO.box(r, { equals: Ce });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Ye.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : u(e),
                                                            a = Ye.LO.box(r, { equals: Ce });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Ye.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = u(n);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, n) => ((e[n] = Ye.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Ye.aD)((n) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(n[e]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                o = Object.entries(a),
                                                                i = o.reduce(
                                                                    (e, [n, t]) => ((e[t] = Ye.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Ye.aD)((e) => {
                                                                            o.forEach(([n, t]) => {
                                                                                i[t].set(e[n]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            m = { mode: t, model: d, externalModel: s, cleanup: l };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && a ? a.controls(m) : n(m),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    m = (0, s.useState)(r),
                                    g = m[0],
                                    f = m[1],
                                    v = (0, s.useState)(() => l(r, a, i)),
                                    p = v[0],
                                    b = v[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? b(l(g, a, i)) : (d.current = !0);
                                    }, [i, g, a]),
                                    (0, s.useEffect)(() => {
                                        f(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            (p.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [p],
                                    ),
                                    u().createElement(t.Provider, { value: p }, o)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(({ observableModel: e }) => {
                        const n = {
                            root: e.object(),
                            background: e.object('background'),
                            engraving: e.object('engraving'),
                        };
                        return Object.assign({}, n);
                    }, Te),
                    en = Ze[0],
                    nn = Ze[1],
                    tn = 'App_base_71',
                    rn = (0, ye.Pi)(() => {
                        const e = nn().model,
                            n = e.root.get().animation,
                            t = e.background.get(),
                            r = e.engraving.get();
                        be(() => {
                            (pe.view.resize(500, 300, 'rem'), he(R.sounds.ach_dog_tag_pre_battle_in()));
                        });
                        const a = (0, _e.useSpring)(() => ({
                                from: { opacity: 1 },
                                config: { duration: 1e3, easing: d.easeInCubic },
                                onStart: () => he(R.sounds.ach_dog_tag_pre_battle_out()),
                                onRest: () => {
                                    pe.view.sendEvent.close();
                                },
                            })),
                            o = a[0],
                            i = a[1];
                        return (
                            (0, s.useEffect)(
                                () =>
                                    ((e, n) => {
                                        let t;
                                        const r = setTimeout(() => {
                                            t = e();
                                        }, n);
                                        return () => {
                                            ('function' == typeof t && t(), clearTimeout(r));
                                        };
                                    })(() => {
                                        i.start({ opacity: 0 });
                                    }, 7e3),
                                [i],
                            ),
                            u().createElement(
                                _e.animated.div,
                                { style: o, className: tn },
                                u().createElement(Ue, {
                                    background: t.id,
                                    engraving: r.id,
                                    progress: r.currentProgress,
                                    size: Ge.ExtraSmall,
                                    animationState: Fe.AutoShowing,
                                    animationName: n,
                                    isSoundOff: !0,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    l().render(
                        u().createElement(en, null, u().createElement(rn, null)),
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
        var a = t[e];
        if (void 0 !== a) return a.exports;
        var o = (t[e] = { exports: {} });
        return (n[e](o, o.exports, r), o.exports);
    }
    ((r.m = n),
        (e = []),
        (r.O = (n, t, a, o) => {
            if (!t) {
                var i = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [t, a, o] = e[l], s = !0, u = 0; u < t.length; u++)
                        (!1 & o || i >= o) && Object.keys(r.O).every((e) => r.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), o < i && (i = o));
                    if (s) {
                        e.splice(l--, 1);
                        var c = a();
                        void 0 !== c && (n = c);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
            e[l] = [t, a, o];
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
        (r.j = 880),
        (() => {
            var e = { 880: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var a,
                        o,
                        [i, s, u] = t,
                        c = 0;
                    if (i.some((n) => 0 !== e[n])) {
                        for (a in s) r.o(s, a) && (r.m[a] = s[a]);
                        if (u) var l = u(r);
                    }
                    for (n && n(t); c < i.length; c++) ((o = i[c]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return r.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var a = r.O(void 0, [532], () => r(2581));
    a = r.O(a);
})();
