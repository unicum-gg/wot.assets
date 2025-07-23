(() => {
    'use strict';
    var e = {
            7412: (e, n, t) => {
                var r = t(7515),
                    o = t(1856),
                    i = t(3138),
                    a = t(6112),
                    s = t(4598);
                var u = t(7363),
                    c = t.n(u),
                    l = t(2039);
                const d = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const f = (0, u.forwardRef)(function (e, n) {
                    let t = e.src,
                        f = e.className,
                        m = e.autoplay,
                        g = void 0 !== m && m,
                        h = e.style,
                        p = e.loop,
                        y = void 0 !== p && p,
                        E = e.isPrebufferKeyframes,
                        w = e.keyframesNameConfig,
                        b = e.onClick,
                        T = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                r,
                                o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) ((t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]));
                            return o;
                        })(e, d);
                    const P = n,
                        x = (0, u.useRef)(null);
                    return (
                        (0, l.b)(() =>
                            i.O.view.events.onDisplayChanged((e, n) => {
                                var t, r;
                                n === a.W.hidden && (null == (t = x.current) || t.pause());
                                n === a.W.shown && (null == (r = x.current) || r.play());
                            }),
                        ),
                        (0, u.useEffect)(
                            () =>
                                (0, o.v)(() => {
                                    const e = x.current;
                                    if (!P || !e || !E)
                                        return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                    const n = e.cohGetKeyframeTimestamps();
                                    n.length > 0
                                        ? ((e.cohFastSeek = !0),
                                          n.map((n) => {
                                              null == e || e.cohPrebufferKeyframe(n);
                                          }))
                                        : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                }),
                            [E, P],
                        ),
                        (0, u.useEffect)(() => {
                            if (P && x.current) {
                                const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: s.ZT },
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
                                                if (x.current) {
                                                    const t = x.current,
                                                        r = t.currentTime,
                                                        o = t.duration;
                                                    if (
                                                        (n !== r &&
                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                e({ currentTime: r, duration: o }),
                                                            ),
                                                            (n = r)),
                                                        x.current.paused || !P || !E)
                                                    )
                                                        return;
                                                    const i = x.current.cohGetKeyframeTimestamps();
                                                    i.forEach((n, t) => {
                                                        r > i[t] - 0.02 &&
                                                            r < i[t] &&
                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                const r = Object.keys(null != w ? w : {})[t];
                                                                return e({ time: n, name: `${w ? r : `Point_${t}`}` });
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
                                    o = (n) => (
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
                                    i = () => {
                                        var e;
                                        return null == (e = x.current) ? void 0 : e.currentTime;
                                    },
                                    a = () => {
                                        var e;
                                        return null == (e = x.current) ? void 0 : e.duration;
                                    },
                                    u = (e) => {
                                        x.current && (x.current.currentTime = (0, r.u)(0, x.current.duration, e));
                                    },
                                    c = () => {
                                        var e;
                                        return null == (e = x.current) ? void 0 : e.play();
                                    },
                                    l = () => {
                                        var e;
                                        return null == (e = x.current) ? void 0 : e.pause();
                                    },
                                    d = () => {
                                        (l(), u(0));
                                    },
                                    v = () => {
                                        var e, n;
                                        return null !=
                                            (e = null == (n = x.current) ? void 0 : n.cohGetKeyframeTimestamps())
                                            ? e
                                            : [];
                                    },
                                    f = (e) => {
                                        (u(e), c());
                                    },
                                    m = (e) => {
                                        (u(e), l());
                                    },
                                    g = () => {
                                        ((e.changeTimeHandlers = []),
                                            (e.changeKeyframeHandlers = []),
                                            null == e.changeTimeLoop || e.changeTimeLoop());
                                    },
                                    h = (e, n) => {
                                        var t;
                                        return (
                                            null == (t = x.current) || t.addEventListener(e, n),
                                            () => {
                                                var t;
                                                return null == (t = x.current) ? void 0 : t.removeEventListener(e, n);
                                            }
                                        );
                                    },
                                    p = (e, n) => {
                                        var t;
                                        return (
                                            null == (t = x.current) || t.removeEventListener(e, n),
                                            () => {
                                                var t;
                                                return null == (t = x.current) ? void 0 : t.removeEventListener(e, n);
                                            }
                                        );
                                    };
                                return (
                                    (P.current = {
                                        on: h,
                                        off: p,
                                        play: c,
                                        pause: l,
                                        stop: d,
                                        cleanup: g,
                                        getCurrentTime: i,
                                        getDuration: a,
                                        getCachedKeyframes: v,
                                        goToAndPlay: f,
                                        goToAndStop: m,
                                        setCurrentTime: u,
                                        domRef: x.current,
                                        onChangeTime: t,
                                        onKeyframes: o,
                                    }),
                                    () => {
                                        (g(), (P.current = null));
                                    }
                                );
                            }
                        }, [w, P, E]),
                        (0, u.useEffect)(() => {
                            x.current && g && x.current.play();
                        }, [g, y]),
                        (0, u.useEffect)(() => {
                            if (x.current)
                                return () => {
                                    x.current && x.current.pause();
                                };
                        }, []),
                        c().createElement(
                            'video',
                            v({ src: t, className: f, style: h, loop: y, ref: x, onClick: b }, T),
                        )
                    );
                });
                (0, u.memo)(f);
            },
            7515: (e, n, t) => {
                t.d(n, { u: () => r });
                const r = (e, n, t) => (t < e ? e : t > n ? n : t);
            },
            1856: (e, n, t) => {
                t.d(n, { v: () => r });
                const r = (e) => {
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
            },
            527: (e, n, t) => {
                (t.r(n),
                    t.d(n, { mouse: () => l, off: () => u, on: () => s, onResize: () => i, onScaleUpdated: () => a }));
                var r = t(2472),
                    o = t(1176);
                const i = (0, r.E)('clientResized'),
                    a = (0, r.E)('self.onScaleUpdated'),
                    s = (e, n) => engine.on(e, n),
                    u = (e, n) => engine.off(e, n),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const l = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && (0, o.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, o.R)(!0);
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
                            : (0, o.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        a = c[n]((e) => t([e, 'outside']));
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
                    return Object.assign({}, i, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && (0, o.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, o.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, n, t) => {
                (t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => o.G,
                        setRTPC: () => o.E,
                    }));
                var r = t(527),
                    o = t(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, n, t) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(n, { R: () => r });
            },
            2493: (e, n, t) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function o(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                t.d(n, { E: () => o, G: () => r });
            },
            2472: (e, n, t) => {
                function r(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                t.d(n, { E: () => r });
            },
            3138: (e, n, t) => {
                t.d(n, { O: () => i });
                var r = t(5959),
                    o = t(514);
                const i = { view: t(7641), client: r, sound: o.ZP };
            },
            514: (e, n, t) => {
                t.d(n, { ZP: () => a });
                var r = t(5959);
                const o = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(o).reduce((e, n) => ((e[n] = () => (0, r.playSound)(o[n])), e), {}),
                    a = { play: Object.assign({}, i, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, n, t) => {
                function r(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function o(e, n, t) {
                    return `url(${r(e, n, t)})`;
                }
                (t.r(n), t.d(n, { getBgUrl: () => o, getTextureUrl: () => r }));
            },
            6112: (e, n, t) => {
                t.d(n, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, n, t) => {
                t.d(n, { U: () => o });
                var r = t(2472);
                const o = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, n, t) => {
                (t.r(n),
                    t.d(n, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => u,
                        arabic2roman: () => C,
                        children: () => o,
                        displayStatus: () => i.W,
                        displayStatusIs: () => O,
                        events: () => a.U,
                        extraSize: () => z,
                        forceTriggerMouseMove: () => x,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => R,
                        getFontNames: () => S,
                        getScale: () => p,
                        getSize: () => f,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => P,
                        isFocused: () => b,
                        pxToRem: () => y,
                        remToPx: () => E,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => w,
                        setEventHandled: () => T,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => v,
                        whenTutorialReady: () => L,
                    }));
                var r = t(9690),
                    o = t(3722),
                    i = t(6112),
                    a = t(6538),
                    s = t(8566);
                function u(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function d(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function v(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function f(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function g(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: E(n.x), y: E(n.y) };
                }
                function h() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function y(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function w(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function T() {
                    return viewEnv.setEventHandled();
                }
                function P() {
                    return viewEnv.isEventHandled();
                }
                function x() {
                    viewEnv.forceTriggerMouseMove();
                }
                function R() {
                    return viewEnv.getShowingStatus();
                }
                const S = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    C = r.cg,
                    O = Object.keys(i.W).reduce(
                        (e, n) => ((e[n] = () => viewEnv.getShowingStatus() === i.W[n]), e),
                        {},
                    ),
                    z = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    L = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, n, t) => {
                t.d(n, { qP: () => c });
                const r = ['args'];
                const o = 2,
                    i = 16,
                    a = 32,
                    s = 64,
                    u = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                a = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) ((t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]));
                                    return o;
                                })(n, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((o = i),
                                              Object.entries(o).map(([e, n]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var o;
                    },
                    c = {
                        close(e) {
                            u('popover' === e ? o : a);
                        },
                        minimize() {
                            u(s);
                        },
                        move(e) {
                            u(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, n, t) => {
                function r() {}
                t.d(n, { ZT: () => r });
                console.log;
            },
            2039: (e, n, t) => {
                t.d(n, { b: () => o });
                var r = t(7363);
                const o = (e) => {
                    (0, r.useEffect)(e, []);
                };
            },
            9690: (e, n, t) => {
                t.d(n, { cg: () => i });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    o = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let n = '';
                    for (let t = o.length - 1; t >= 0; t--) for (; e >= o[t]; ) ((n += r[t]), (e -= o[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            5888: (e, n, t) => {
                t(7363);
            },
            7363: (e) => {
                e.exports = React;
            },
        },
        n = {};
    function t(r) {
        var o = n[r];
        if (void 0 !== o) return o.exports;
        var i = (n[r] = { exports: {} });
        return (e[r](i, i.exports, t), i.exports);
    }
    ((t.n = (e) => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return (t.d(n, { a: n }), n);
    }),
        (t.d = (e, n) => {
            for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
        }),
        (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (t.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        t(7412),
        t(7363),
        t(5888));
})();
