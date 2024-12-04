(() => {
    var __webpack_modules__ = {
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var n = t(6483),
                    a = t.n(n),
                    r = t(3649),
                    i = t(6179),
                    o = t.n(i),
                    s = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: n = r.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                    const c = l && e ? (0, r.WU)(u, e) : u;
                    return o().createElement(
                        i.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            o().createElement(
                                'div',
                                { className: a()(s.Z.base, t), key: `${u}-${l}` },
                                (0, r.Uw)(u, n, e).map((e, u) =>
                                    o().createElement(i.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => n.z });
                var n = t(280);
                t(8082);
            },
            8082: (e, u, t) => {
                'use strict';
                t(3649);
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => E });
                var n = t(3138),
                    a = t(6179),
                    r = t(1043),
                    i = t(5262);
                const o = n.O.client.getSize('rem'),
                    s = o.width,
                    l = o.height,
                    c = Object.assign({ width: s, height: l }, (0, i.T)(s, l, r.j)),
                    E = (0, a.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var n = t(3138),
                    a = t(6536),
                    r = t(6179),
                    i = t.n(r),
                    o = t(3495),
                    s = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, r.useContext)(o.Y),
                        t = (0, r.useState)(u),
                        c = t[0],
                        E = t[1],
                        d = (0, r.useCallback)((e, u) => {
                            const t = n.O.view.pxToRem(e),
                                a = n.O.view.pxToRem(u);
                            E(Object.assign({ width: t, height: a }, (0, l.T)(t, a, s.j)));
                        }, []),
                        m = (0, r.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, a.Z)(() => {
                        n.O.client.events.on('clientResized', d), n.O.client.events.on('self.onScaleUpdated', m);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', d),
                                    n.O.client.events.off('self.onScaleUpdated', m);
                            },
                            [d, m],
                        );
                    const _ = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return i().createElement(o.Y.Provider, { value: _ }, e);
                };
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t(7382),
                    r = t(3495);
                const i = ['children'];
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, i);
                    const o = (0, n.useContext)(r.Y),
                        s = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        E = o.small,
                        d = o.extraSmall,
                        m = o.extraLargeWidth,
                        _ = o.largeWidth,
                        A = o.mediumWidth,
                        F = o.smallWidth,
                        C = o.extraSmallWidth,
                        D = o.extraLargeHeight,
                        B = o.largeHeight,
                        g = o.mediumHeight,
                        h = o.smallHeight,
                        b = o.extraSmallHeight,
                        f = { extraLarge: D, large: B, medium: g, small: h, extraSmall: b };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && E) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && m) return (0, a.H)(u, t, f);
                        if (t.largeWidth && _) return (0, a.H)(u, t, f);
                        if (t.mediumWidth && A) return (0, a.H)(u, t, f);
                        if (t.smallWidth && F) return (0, a.H)(u, t, f);
                        if (t.extraSmallWidth && C) return (0, a.H)(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && h) return u;
                            if (t.extraSmallHeight && b) return u;
                        }
                    }
                    return null;
                };
                o.defaultProps = {
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
                (0, n.memo)(o);
            },
            7382: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => n });
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, u, t) => {
                'use strict';
                t.d(u, { YN: () => a.Y, ZN: () => n.Z });
                t(6010);
                var n = t(1039),
                    a = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var n;
                function a(e, u, t) {
                    const n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        a = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => a }),
                    (function (e) {
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
                            (e.extraSmallHeight = 'extraSmallHeight');
                    })(n || (n = {}));
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    a = t(9916),
                    r = t(6179);
                const i = [
                    'children',
                    'contentId',
                    'args',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onClick',
                    'ignoreShowDelay',
                    'ignoreMouseClick',
                    'decoratorId',
                    'isEnabled',
                    'targetId',
                    'onShow',
                    'onHide',
                ];
                function o(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const s = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            E = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            _ = void 0 !== m && m,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            C = e.decoratorId,
                            D = void 0 === C ? 0 : C,
                            B = e.isEnabled,
                            g = void 0 === B || B,
                            h = e.targetId,
                            b = void 0 === h ? 0 : h,
                            f = e.onShow,
                            v = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, i);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => b || (0, n.F)().resId, [b]),
                            x = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, D, { isMouseEvent: !0, on: !0, arguments: o(a) }, y),
                                    f && f(),
                                    (w.current.isVisible = !0));
                            }, [t, D, a, y, f]),
                            S = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        s(t, D, { on: !1 }, y),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, D, y, v]),
                            T = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === g && S();
                            }, [g, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return g
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(x, _ ? 100 : 400)),
                                                      l && l(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              S(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === F && S(), null == d || d(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === F && S(), null == E || E(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var N;
                    };
            },
            926: (e) => {
                e.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            7044: (e, u, t) => {
                'use strict';
                t.d(u, { s_: () => a });
                t(3649), t(9916);
                var n = t(8613);
                const a = 1e3;
                Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime;
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        i = l[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(2472);
                const a = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => y,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => p,
                        getFontNames: () => w,
                        getScale: () => C,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => f,
                        isFocused: () => h,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                const o = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function C() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    x = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    o = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? a : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => n });
                const n = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id)),
                        { caller: t, stack: u, resId: n }
                    );
                };
            },
            2344: (e, u, t) => {
                'use strict';
                t.d(u, { D9: () => a });
                t(3469), t(2133);
                var n = t(2790);
                t(3779), t(579), t(5360), t(9056);
                const a = n.Z;
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(6179);
                const a = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            3469: (e, u, t) => {
                'use strict';
                t(7044), t(6179);
            },
            2133: (e, u, t) => {
                'use strict';
                t(6179);
            },
            5360: (e, u, t) => {
                'use strict';
                t(6536);
                var n = t(9916);
                t(6179);
                n.Sw.instance;
                let a;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(a || (a = {}));
            },
            9056: (e, u, t) => {
                'use strict';
                var n = t(9916);
                t(6179);
                n.Sw.instance;
            },
            2790: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(6179);
                const a = (e, u) => {
                    const t = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            (u && !u(e)) || (t.current = e);
                        }, [u, e]),
                        t.current
                    );
                };
            },
            3779: (e, u, t) => {
                'use strict';
                t(6179);
            },
            579: (e, u, t) => {
                'use strict';
                t(3138), t(6179);
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
                t.d(u, { n: () => n }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
                            (e[(e.ALT = 165)] = 'ALT'),
                            (e[(e.ENTER = 13)] = 'ENTER'),
                            (e[(e.ESCAPE = 27)] = 'ESCAPE'),
                            (e[(e.SPACE = 32)] = 'SPACE'),
                            (e[(e.END = 35)] = 'END'),
                            (e[(e.HOME = 36)] = 'HOME'),
                            (e[(e.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (e[(e.ARROW_UP = 38)] = 'ARROW_UP'),
                            (e[(e.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (e[(e.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (e[(e.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (e[(e.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (e[(e.PLUS = 187)] = 'PLUS'),
                            (e[(e.MINUS = 189)] = 'MINUS'),
                            (e[(e.PAGE_UP = 33)] = 'PAGE_UP'),
                            (e[(e.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (e[(e.BACKSPACE = 8)] = 'BACKSPACE'),
                            (e[(e.DELETE = 46)] = 'DELETE'),
                            (e[(e.TAB = 9)] = 'TAB'),
                            (e[(e.KEY_N = 78)] = 'KEY_N'),
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(n || (n = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
                            (e.ALT_GRAPH = 'AltGraph'),
                            (e.CAPS_LOCK = 'CapsLock'),
                            (e.CONTROL = 'Control'),
                            (e.FN = 'Fn'),
                            (e.FN_LOCK = 'FnLock'),
                            (e.META = 'Meta'),
                            (e.NUM_LOCK = 'NumLock'),
                            (e.SCROLL_LOCK = 'ScrollLock'),
                            (e.SHIFT = 'Shift'),
                            (e.SYMBOL = 'Symbol'),
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(a || (a = {}));
            },
            9480: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        collectMapBy: () => p,
                        contains: () => _,
                        every: () => s,
                        exists: () => v,
                        filter: () => c,
                        filterMap: () => w,
                        find: () => b,
                        findIndex: () => x,
                        findIndexLast: () => S,
                        findLast: () => h,
                        get: () => a,
                        includes: () => f,
                        join: () => T,
                        lastElement: () => C,
                        lastIndex: () => A,
                        lastIndexZero: () => F,
                        map: () => o,
                        mapExists: () => y,
                        pop: () => m,
                        push: () => E,
                        reduce: () => N,
                        set: () => d,
                        slice: () => D,
                        some: () => l,
                        splice: () => g,
                        tail: () => B,
                        unsafeGet: () => r,
                        unwrapItem: () => i,
                    });
                var n = t(8968);
                function a(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const r = a;
                function i(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function o(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function s(e, u) {
                    if (Array.isArray(e)) return e.every(u);
                    for (let t = 0; t < e.length; t++) {
                        if (!u(r(e, t), t, e)) return !1;
                    }
                    return !0;
                }
                function l(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(r(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function c(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let a = 0; a < e.length; a++) {
                        var n;
                        const r = null == (n = e[a]) ? void 0 : n.value;
                        u(r, a, e) && t.push(r);
                    }
                    return t;
                }
                function E(e, u) {
                    if (Array.isArray(e)) return e.push(u), e;
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function d(e, u, t) {
                    if (Array.isArray(e)) return (e[u] = t), e;
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function m(e, u = e.length - 1) {
                    if (Array.isArray(e)) return e.splice(u, 1)[0];
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function _(e, u, t) {
                    for (let n = 0; n < e.length; n++) {
                        const a = r(e, n);
                        if (t && t(a)) return !0;
                        if (u === a) return !0;
                    }
                    return !1;
                }
                function A(e) {
                    return e.length - 1;
                }
                function F(e) {
                    return Math.max(0, e.length - 1);
                }
                function C(e) {
                    if (0 !== e.length) return a(e, e.length - 1);
                }
                function D(e, u = 0, t = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let n = Math.max(u, 0);
                            const a = Math.min(t, F(e));
                            return {
                                next: function () {
                                    if (n > a) return { done: !0, value: null };
                                    const u = e[n++];
                                    return u ? { value: i(u), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function B(e, u) {
                    return D(e, Math.max(0, e.length - 1 - u), A(e));
                }
                function g(e, u, t) {
                    if (Array.isArray(e)) return e.splice(u, t);
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function h(e, u) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        const n = i(e[t]);
                        if (u(n, t, e)) return n;
                    }
                }
                function b(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        const n = i(e[t]);
                        if (u(n, t, e)) return n;
                    }
                }
                function f(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        if (r(e, t) === u) return !0;
                    }
                    return !1;
                }
                function v(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        if (u(i(e[t]))) return !0;
                    }
                    return !1;
                }
                function p(e, u, t) {
                    return N(e, (e, n) => ((e[u(n)] = t(n)), e), {});
                }
                function w(e, u, t) {
                    const n = [];
                    for (let a = 0; a < e.length; a++) {
                        const i = r(e, a);
                        u(i, a, e) && n.push(t(i, a, e));
                    }
                    return n;
                }
                function y(e, u) {
                    return w(e, n.C, u);
                }
                function x(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        if (u(r(e, t), t, e)) return t;
                    }
                }
                function S(e, u) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        if (u(r(e, t), t, e)) return t;
                    }
                }
                function T(e, u = ',') {
                    let t = '';
                    for (let n = 0; n < e.length; n++) {
                        n > 0 && (t += u);
                        const a = r(e, n);
                        t += null == a ? '' : String(a);
                    }
                    return t;
                }
                function N(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, r(e, t), t, e);
                    }
                    return n;
                }
            },
            8968: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                t.d(u, { C: () => n });
            },
            3649: (e, u, t) => {
                'use strict';
                t.d(u, { Uw: () => _, WU: () => r, uF: () => i, v2: () => a });
                var n = t(1281);
                let a;
                function r(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function i(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    s = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    l = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    c = (e, u, t = a.left) => e.split(u).reduce(t === a.left ? s : l, []),
                    E = (() => {
                        const e = new RegExp(
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                .source +
                                '|' +
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                    .source +
                                '|' +
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source +
                                '|' +
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source,
                            'gum',
                        );
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    d = ['zh_cn', 'zh_sg', 'zh_tw'],
                    m = (e, u = a.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (d.includes(t)) return E(e);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => o(e));
                        }
                        return ((e, u = a.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = o(e);
                            return c(r, /( )/, u).forEach((e) => (t = t.concat(c(e, n, a.left)))), t;
                        })(e, u);
                    },
                    _ = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : m(e, u)));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
                class a {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (e) => {
                                this._views[e] &&
                                    (this._views[e].forEach((e) => {
                                        delete this._callbacks[e];
                                    }),
                                    delete this._views[e]);
                            }),
                            (this._callbacks = {}),
                            (this._views = {}),
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { c1: () => b, Sw: () => r.Z, B3: () => s, Z5: () => i.Z5, B0: () => o, ry: () => C });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
                            this.removeMouseListener();
                    }
                    addMouseListener() {
                        this._listenMouse ||
                            (document.addEventListener('mousedown', this.onMouseDown), (this._listenMouse = !0));
                    }
                    removeMouseListener() {
                        this._listenMouse &&
                            0 === this.entries.length &&
                            (document.removeEventListener('mousedown', this.onMouseDown), (this._listenMouse = !1));
                    }
                }
                n.__instance = void 0;
                const a = n;
                var r = t(1358);
                var i = t(8613);
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    m = t(3138);
                const _ = ['args'];
                function A(e, u, t, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            A(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            A(r, n, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, _);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    B = () => D(o.CLOSE),
                    g = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var h = t(7572);
                const b = a.instance,
                    f = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => D(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                d = s.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(d),
                                };
                            D(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, B);
                        },
                        handleViewEvent: D,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            406: (e, u, t) => {
                'use strict';
                t.d(u, { B: () => l });
                var n = t(280),
                    a = t(6179),
                    r = t.n(a);
                const i = {
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
                    o = ['text', 'binding', 'className'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const l = (0, a.memo)((e) => {
                    let u = e.text,
                        t = e.binding,
                        a = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, o);
                    const c = ((e, u) => {
                            const t =
                                    /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                                a = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                                o = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                                s = u ? Object.assign({}, u) : {};
                            let l = t.exec(e),
                                c = e,
                                E = 0;
                            for (; l; ) {
                                const m = l[0],
                                    _ = a.exec(m),
                                    A = o.exec(m),
                                    F = l[1];
                                if (_ && A) {
                                    const e = _[0],
                                        t = e + E++ + A[0].replaceAll(')', '') + e;
                                    (c = c.replace(m, `%(${t})`)),
                                        (s[t] = i[e]
                                            ? r().createElement(
                                                  'span',
                                                  { className: i[e] },
                                                  r().createElement(n.z, { text: F, binding: u }),
                                              )
                                            : r().createElement(
                                                  'span',
                                                  { style: ((d = e), { color: `#${d}` }) },
                                                  r().createElement(n.z, { text: F, binding: u }),
                                              ));
                                }
                                l = t.exec(e);
                            }
                            var d;
                            return [c, s];
                        })(u, t),
                        E = c[0],
                        d = c[1];
                    return r().createElement(n.z, s({ text: E, classMix: a, binding: d }, l));
                });
            },
            2882: (e, u, t) => {
                'use strict';
                let n;
                t.d(u, { $: () => J }),
                    (function (e) {
                        (e[(e.Normal = 0)] = 'Normal'), (e[(e.Disabled = 1)] = 'Disabled');
                    })(n || (n = {}));
                var a = t(6179),
                    r = t.n(a),
                    i = t(2344),
                    o = t(2056),
                    s = t(7030),
                    l = t(6483),
                    c = t.n(l),
                    E = t(4069);
                const d = 'EffectCounter_base_5a',
                    m = 'EffectCounter_count_06',
                    _ = 'EffectCounter_base__strong_86',
                    A = 'EffectCounter_effect_12',
                    F = 'EffectCounter_strongEffect_3f',
                    C = 'EffectCounter_particles_04';
                let D;
                !(function (e) {
                    (e.None = 'none'),
                        (e.StrongEffect = 'strongEffect'),
                        (e.WeakEffect = 'weakEffect'),
                        (e.Default = 'none');
                })(D || (D = {}));
                const B = { duration: 1e3 },
                    g = { duration: 500 },
                    h = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${e.toString().padStart(5, '0')}`,
                    b = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((e + 75) % 120).toString().padStart(5, '0')}`,
                    f = 140,
                    v = r().memo(function ({
                        value: e,
                        className: u,
                        from: t,
                        onStart: n,
                        onRest: i,
                        onChange: o,
                        onPause: l,
                        onResume: v,
                        onProps: p,
                        onResolve: w,
                        style: y = D.Default,
                        valueConfig: x = B,
                        changeShineConfig: S = g,
                    }) {
                        const T = (0, s.useSpring)(() => ({
                                to: { value: e },
                                from: { value: null != t ? t : e },
                                config: x,
                                onStart: n,
                                onRest: i,
                                onChange: o,
                                onPause: l,
                                onResume: v,
                                onProps: p,
                                onResolve: w,
                            })),
                            N = T[0],
                            k = T[1],
                            M = (0, s.useTransition)(y, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                config: S,
                            });
                        return (
                            (0, a.useEffect)(() => {
                                'number' == typeof t &&
                                    k.start({ to: { value: e }, from: { value: t }, config: x, reset: !0 });
                            }, [e, t, k, x]),
                            r().createElement(
                                'div',
                                { className: c()(d, y === D.StrongEffect && _, u) },
                                r().createElement(
                                    'div',
                                    { className: m },
                                    M((e, u) =>
                                        r().createElement(
                                            s.animated.div,
                                            { style: e, className: A },
                                            u === D.StrongEffect &&
                                                r().createElement(
                                                    r().Fragment,
                                                    null,
                                                    r().createElement(E.A, {
                                                        width: f,
                                                        height: f,
                                                        frameCount: 120,
                                                        frameTime: 50,
                                                        getSrcByFrame: h,
                                                        className: C,
                                                    }),
                                                    r().createElement(E.A, {
                                                        width: f,
                                                        height: f,
                                                        frameCount: 120,
                                                        frameTime: 50,
                                                        getSrcByFrame: b,
                                                        className: C,
                                                    }),
                                                    r().createElement('div', { className: F }),
                                                ),
                                        ),
                                    ),
                                    r().createElement(
                                        s.animated.div,
                                        null,
                                        N.value.to((e) => e.toFixed(0)),
                                    ),
                                ),
                            )
                        );
                    });
                var p = t(5976);
                let w;
                !(function (e) {
                    (e.China = 'CN'), (e.Ru = 'RU');
                })(w || (w = {}));
                var y = t(9766);
                const x = 'GuaranteedRewardCount_base_d0',
                    S = 'GuaranteedRewardCount_text_3b',
                    T = 'GuaranteedRewardCount_countWrapper_52',
                    N = 'GuaranteedRewardCount_icon_ea',
                    k = ({ onInfoClick: e, InfoComponent: u, boxesCount: t, children: n }) =>
                        r().createElement(
                            'div',
                            { className: x },
                            r().createElement(y.z, {
                                classMix: S,
                                text: R.strings.ny.rewardKitMain.guaranteedReward.$plural('boxesLeft', t),
                                binding: { count: r().createElement('div', { className: T }, n) },
                            }),
                            r().createElement(
                                'div',
                                { className: S },
                                r().createElement('div', { className: N }, r().createElement(u, { onClick: e })),
                            ),
                        ),
                    M = {
                        base: 'GuaranteedRewardNext_base_f7',
                        text: 'GuaranteedRewardNext_text_9e',
                        icon: 'GuaranteedRewardNext_icon_b9',
                        firstShine: 'GuaranteedRewardNext_firstShine_88',
                        secondShine: 'GuaranteedRewardNext_secondShine_9d',
                        dragonBreath: 'GuaranteedRewardNext_dragonBreath_c0',
                        particles: 'GuaranteedRewardNext_particles_97',
                        particles__left: 'GuaranteedRewardNext_particles__left_f5',
                        particles__center: 'GuaranteedRewardNext_particles__center_c7',
                        particles__right: 'GuaranteedRewardNext_particles__right_a9',
                        slideInFadeIn: 'GuaranteedRewardNext_slideInFadeIn_64',
                        fadeOut: 'GuaranteedRewardNext_fadeOut_b1',
                        fadeIn: 'GuaranteedRewardNext_fadeIn_23',
                        fadeInWithScale: 'GuaranteedRewardNext_fadeInWithScale_f6',
                        slideUp: 'GuaranteedRewardNext_slideUp_a6',
                        scale: 'GuaranteedRewardNext_scale_34',
                        spin: 'GuaranteedRewardNext_spin_f7',
                        blink: 'GuaranteedRewardNext_blink_f4',
                        slideInNotification: 'GuaranteedRewardNext_slideInNotification_18',
                    },
                    L = 220,
                    O = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${e.toString().padStart(5, '0')}`,
                    I = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((e + 75) % 120).toString().padStart(5, '0')}`,
                    H = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((e + 50) % 120).toString().padStart(5, '0')}`,
                    P = ({ onInfoClick: e, InfoComponent: u }) =>
                        r().createElement(
                            'div',
                            { className: M.base },
                            r().createElement(E.A, {
                                width: L,
                                height: L,
                                frameCount: 120,
                                frameTime: 50,
                                getSrcByFrame: O,
                                className: c()(M.particles, M.particles__left),
                            }),
                            r().createElement(E.A, {
                                width: L,
                                height: L,
                                frameCount: 120,
                                getSrcByFrame: I,
                                className: c()(M.particles, M.particles__center),
                            }),
                            r().createElement(E.A, {
                                width: L,
                                height: L,
                                frameCount: 120,
                                frameTime: 50,
                                getSrcByFrame: H,
                                className: c()(M.particles, M.particles__right),
                            }),
                            r().createElement(
                                'div',
                                { className: M.text },
                                r().createElement('div', { className: M.firstShine }),
                                r().createElement('div', { className: M.secondShine }),
                                r().createElement(
                                    'div',
                                    { className: M.content },
                                    R.strings.ny.rewardKitMain.guaranteedReward.next(),
                                ),
                                r().createElement('div', { className: M.icon }, r().createElement(u, { onClick: e })),
                            ),
                        ),
                    G = 'InfoIcon_base_5d',
                    W = 'InfoIcon_base__clickable_fd',
                    U = ({ onClick: e }) => r().createElement('div', { className: c()(G, e && W), onClick: e }),
                    j = 'InfoText_base_16',
                    z = 'InfoText_text_83',
                    $ = 'InfoText_icon_ef',
                    K = 'InfoText_underline_f3',
                    V = ({ onClick: e }) =>
                        r().createElement(
                            'div',
                            { className: j, onClick: e },
                            r().createElement(
                                'div',
                                { className: z },
                                r().createElement('div', { className: K }),
                                R.strings.ny.rewardKitMain.guaranteedReward.moreInfo(),
                            ),
                            r().createElement('div', { className: $ }),
                        );
                let q;
                !(function (e) {
                    (e[(e.Hidden = 0)] = 'Hidden'),
                        (e[(e.NextGuaranteed = 1)] = 'NextGuaranteed'),
                        (e[(e.ThroughCountGuaranteed = 2)] = 'ThroughCountGuaranteed');
                })(q || (q = {}));
                const Y = (e) => e === q.ThroughCountGuaranteed,
                    Z = r().memo(function ({
                        state: e,
                        boxesCount: u,
                        onInfoClick: t,
                        className: n,
                        sunShineEffectCount: i,
                        switchDelay: l,
                        animationFrom: c = u,
                        realm: E,
                    }) {
                        var d;
                        const m = (0, a.useRef)(u);
                        (0, a.useEffect)(() => {
                            e === q.ThroughCountGuaranteed && (m.current = u);
                        }, [u, e]);
                        const _ = (0, s.useTransition)(e, {
                                from: { opacity: 0 },
                                enter: { opacity: 1, delay: null != (d = null == l ? void 0 : l.enter) ? d : 0 },
                                leave: { opacity: 0 },
                                config: { duration: 300 },
                            }),
                            A = E === w.China ? V : U;
                        return r().createElement(
                            r().Fragment,
                            null,
                            _(
                                (a, l) =>
                                    l !== q.Hidden &&
                                    r().createElement(
                                        s.animated.div,
                                        { style: a, className: n },
                                        r().createElement(
                                            o.u,
                                            {
                                                isEnabled: E !== w.China,
                                                contentId:
                                                    R.views.lobby.new_year.tooltips.NyGuaranteedRewardTooltip('resId'),
                                            },
                                            r().createElement(
                                                'div',
                                                null,
                                                (() => {
                                                    switch (l) {
                                                        case q.ThroughCountGuaranteed:
                                                            return r().createElement(
                                                                k,
                                                                { onInfoClick: t, boxesCount: u, InfoComponent: A },
                                                                r().createElement(v, {
                                                                    value: Y(e) ? u : m.current,
                                                                    from: Y(e) ? c : m.current,
                                                                    style: u > i ? D.WeakEffect : D.StrongEffect,
                                                                    sequenceAnimationState: p.Z.isWeak()
                                                                        ? 'stop'
                                                                        : 'play',
                                                                }),
                                                            );
                                                        case q.NextGuaranteed:
                                                            return r().createElement(P, {
                                                                onInfoClick: t,
                                                                InfoComponent: A,
                                                            });
                                                        default:
                                                            return (
                                                                console.warn('Unreachable state GuaranteedReward'), null
                                                            );
                                                    }
                                                })(),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    X = { enter: 850 },
                    Q = r().memo(function ({
                        maxBoxesCount: e,
                        realm: u,
                        state: t,
                        onInfoClick: n,
                        isFocused: a = !1,
                        className: o = '',
                        switchDelay: s = X,
                    }) {
                        var l, c, E;
                        const d = null != (l = (0, i.D9)(t)) ? l : t,
                            m = null != (c = (0, i.D9)(e)) ? c : e,
                            _ = (null != (E = (0, i.D9)(a)) ? E : a) !== a && a;
                        return r().createElement(Z, {
                            state: t,
                            boxesCount: e,
                            sunShineEffectCount: 5,
                            realm: u,
                            onInfoClick: u === w.China ? n : void 0,
                            className: o,
                            animationFrom: _ ? ((A = e), (F = m), A > F ? 0 : A < F ? F : A) : e,
                            switchDelay: d === q.Hidden ? s : void 0,
                        });
                        var A, F;
                    }),
                    J = ({
                        className: e,
                        switchDelay: u,
                        model: { maxBoxesCount: t, realm: i, state: o, onShowInfo: s, isPremiumType: l, isFocused: c },
                    }) => {
                        const E = (0, a.useCallback)(() => s(), [s]),
                            d = (() => {
                                switch (!0) {
                                    case o === n.Disabled || !l:
                                        return q.Hidden;
                                    case t <= 1:
                                        return q.NextGuaranteed;
                                    default:
                                        return q.ThroughCountGuaranteed;
                                }
                            })();
                        return r().createElement(Q, {
                            maxBoxesCount: t,
                            realm: i,
                            state: d,
                            onInfoClick: E,
                            isFocused: c,
                            className: e,
                            switchDelay: u,
                        });
                    };
            },
            4069: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => s });
                var n = t(6179),
                    a = t.n(n),
                    r = t(6808);
                const i = [
                    'width',
                    'height',
                    'getSrcByFrame',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'loop',
                    'state',
                    'onAnimationComplete',
                ];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const s = (0, n.memo)((e) => {
                    let u = e.width,
                        t = e.height,
                        s = e.getSrcByFrame,
                        l = e.frameCount,
                        c = e.onAnimate,
                        E = void 0 === c ? r.Bi : c,
                        d = e.frameTime,
                        m = void 0 === d ? 33 : d,
                        _ = e.initialFrameIndex,
                        A = void 0 === _ ? 0 : _,
                        F = e.loop,
                        C = void 0 === F || F,
                        D = e.state,
                        B = void 0 === D ? 'play' : D,
                        g = e.onAnimationComplete,
                        h = void 0 === g ? r.Bi : g,
                        b = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, i);
                    const f = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            const e = f.current;
                            if (!e) return;
                            const n = l - 1,
                                a = e.getContext('2d'),
                                r = (n) => {
                                    a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, u, t);
                                };
                            if ('stop' === B) {
                                const e = s(0),
                                    u = new Image();
                                u.src = e;
                                const t = () => r(u);
                                return u.addEventListener('load', t), () => u.removeEventListener('load', t);
                            }
                            const i = ((e, u) => {
                                    const t = [];
                                    for (let n = 0; n < e; n++) {
                                        const e = new Image();
                                        (e.src = u(n)), t.push(e);
                                    }
                                    return t;
                                })(l, s),
                                o = ((e, u = 0) => {
                                    let t = u;
                                    return () => {
                                        const u = t;
                                        return (t += 1), t > e && (t = 0), u;
                                    };
                                })(n, A),
                                c = setInterval(() => {
                                    const e = o(),
                                        u = i[e];
                                    r(i[e]), E(e, u), e === n && (h(), C || clearInterval(c));
                                }, m);
                            return () => clearInterval(c);
                        }, [l, m, s, t, A, C, E, h, B, u]),
                        a().createElement('canvas', o({}, b, { width: u, height: t, ref: f }))
                    );
                });
            },
            5976: (e, u, t) => {
                'use strict';
                let n;
                t.d(u, { Z: () => r }),
                    (function (e) {
                        (e[(e.Ultra = 0)] = 'Ultra'),
                            (e[(e.Max = 1)] = 'Max'),
                            (e[(e.Height = 2)] = 'Height'),
                            (e[(e.Medium = 3)] = 'Medium'),
                            (e[(e.Low = 4)] = 'Low'),
                            (e[(e.Min = 5)] = 'Min'),
                            (e[(e.PerfLevelCount = 6)] = 'PerfLevelCount');
                    })(n || (n = {}));
                const a = n.Ultra,
                    r = {
                        GraphicsPreset: n,
                        isWeak: () => a >= n.Low,
                        betterThan: (e) => a < e,
                        betterThanEq: (e) => a <= e,
                        worseThan: (e) => a > e,
                        worseThanEq: (e) => a >= e,
                        is: (e) => a === e,
                    };
            },
            6808: (e, u, t) => {
                'use strict';
                t.d(u, { Bi: () => a, VS: () => r, Wt: () => n });
                t(6483), t(7739), t(3649), t(6179), t(2973);
                var n = t(9480);
                const a = () => {},
                    r = (e, u) => e.$dyn(u);
            },
            2973: (e, u, t) => {
                'use strict';
                let n, a;
                t.d(u, { r: () => a }),
                    (function (e) {
                        (e.ExtraSmall = 'extraSmall'),
                            (e.Small = 'small'),
                            (e.Medium = 'medium'),
                            (e.Large = 'large'),
                            (e.ExtraLarge = 'extraLarge');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Ru = 'RU'),
                            (e.Eu = 'EU'),
                            (e.Na = 'NA'),
                            (e.Asia = 'ASIA'),
                            (e.Cn = 'CN'),
                            (e.Kr = 'KR'),
                            (e.Ct = 'CT'),
                            (e.St = 'ST'),
                            (e.QA = 'QA'),
                            (e.Dev = 'DEV'),
                            (e.Sb = 'SB');
                    })(a || (a = {}));
            },
            8509: (e, u, t) => {
                'use strict';
                var n = t(7739),
                    a = t(6179),
                    r = t.n(a),
                    i = t(6483),
                    o = t.n(i),
                    s = t(926),
                    l = t.n(s),
                    c = t(1043);
                let E, d, m;
                !(function (e) {
                    (e[(e.ExtraSmall = c.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = c.j.small.width)] = 'Small'),
                        (e[(e.Medium = c.j.medium.width)] = 'Medium'),
                        (e[(e.Large = c.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = c.j.extraLarge.width)] = 'ExtraLarge');
                })(E || (E = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = c.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = c.j.small.width)] = 'Small'),
                            (e[(e.Medium = c.j.medium.width)] = 'Medium'),
                            (e[(e.Large = c.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = c.j.extraLarge.width)] = 'ExtraLarge');
                    })(d || (d = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = c.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = c.j.small.height)] = 'Small'),
                            (e[(e.Medium = c.j.medium.height)] = 'Medium'),
                            (e[(e.Large = c.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = c.j.extraLarge.height)] = 'ExtraLarge');
                    })(m || (m = {}));
                const _ = () => {
                        const e = (0, a.useContext)(n.YN),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return E.ExtraLarge;
                                    case e.large:
                                        return E.Large;
                                    case e.medium:
                                        return E.Medium;
                                    case e.small:
                                        return E.Small;
                                    case e.extraSmall:
                                        return E.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), E.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return d.ExtraLarge;
                                    case e.largeWidth:
                                        return d.Large;
                                    case e.mediumWidth:
                                        return d.Medium;
                                    case e.smallWidth:
                                        return d.Small;
                                    case e.extraSmallWidth:
                                        return d.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), d.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return m.ExtraLarge;
                                    case e.largeHeight:
                                        return m.Large;
                                    case e.mediumHeight:
                                        return m.Medium;
                                    case e.smallHeight:
                                        return m.Small;
                                    case e.extraSmallHeight:
                                        return m.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), m.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: i, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    A = ['children', 'className'];
                function F() {
                    return (
                        (F = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        F.apply(null, arguments)
                    );
                }
                const C = {
                        [d.ExtraSmall]: '',
                        [d.Small]: l().SMALL_WIDTH,
                        [d.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [d.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [d.ExtraLarge]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    D = {
                        [m.ExtraSmall]: '',
                        [m.Small]: l().SMALL_HEIGHT,
                        [m.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [m.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [m.ExtraLarge]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    B = {
                        [E.ExtraSmall]: '',
                        [E.Small]: l().SMALL,
                        [E.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [E.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [E.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    g = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, A);
                        const a = _(),
                            i = a.mediaWidth,
                            s = a.mediaHeight,
                            l = a.mediaSize;
                        return r().createElement('div', F({ className: o()(t, C[i], D[s], B[l]) }, n), u);
                    },
                    h = ['children'];
                const b = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, h);
                    return r().createElement(n.ZN, null, r().createElement(g, t, u));
                };
                var f = t(493),
                    v = t.n(f);
                function p(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const w = {
                        playHighlight() {
                            p('highlight');
                        },
                        playClick() {
                            p('play');
                        },
                        playYes() {
                            p('yes1');
                        },
                    },
                    y = {
                        base: 'TextButton_base_b6',
                        base__right: 'TextButton_base__right_39',
                        icon: 'TextButton_icon_17',
                        icon__back: 'TextButton_icon__back_43',
                        icon__forward: 'TextButton_icon__forward_59',
                        icon__close: 'TextButton_icon__close_53',
                        icon__info: 'TextButton_icon__info_33',
                        glow: 'TextButton_glow_a4',
                        caption: 'TextButton_caption_82',
                        caption__back: 'TextButton_caption__back_b9',
                        caption__forward: 'TextButton_caption__forward_4e',
                        caption__close: 'TextButton_caption__close_36',
                        caption__info: 'TextButton_caption__info_23',
                        goto: 'TextButton_goto_e7',
                        base__left: 'TextButton_base__left_ff',
                        shine: 'TextButton_shine_e2',
                    },
                    x = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function S() {
                    return (
                        (S = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        S.apply(null, arguments)
                    );
                }
                class T extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && p(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && p(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            a = e.side,
                            i = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            E = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, x)),
                            _ = o()(y.base, y[`base__${i}`], y[`base__${a}`], null == s ? void 0 : s.base),
                            A = o()(y.icon, y[`icon__${i}`], y[`icon__${a}`], null == s ? void 0 : s.icon),
                            F = o()(y.glow, null == s ? void 0 : s.glow),
                            C = o()(y.caption, y[`caption__${i}`], null == s ? void 0 : s.caption),
                            D = o()(y.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            S(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== i && r().createElement('div', { className: y.shine }),
                            r().createElement('div', { className: A }, r().createElement('div', { className: F })),
                            r().createElement('div', { className: C }, u),
                            n && r().createElement('div', { className: D }, n),
                        );
                    }
                }
                T.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var N = t(3138),
                    k = t(5521),
                    M = t(9916);
                const L = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function O(e = k.n.NONE, u = L, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== k.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && N.O.view.isEventHandled()) return;
                                N.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                var I = t(3403);
                let H, P, G, W;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(H || (H = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(P || (P = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(G || (G = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(W || (W = {}));
                const U = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    j = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function z() {
                    return (
                        (z = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        z.apply(null, arguments)
                    );
                }
                const $ = (e) => {
                        let u = e.id,
                            t = e.isChecked,
                            n = void 0 !== t && t,
                            i = e.isDisabled,
                            s = void 0 !== i && i,
                            l = e.isAlert,
                            c = void 0 !== l && l,
                            E = e.size,
                            d = void 0 === E ? P.medium : E,
                            m = e.type,
                            _ = void 0 === m ? G.primary : m,
                            A = e.soundHover,
                            F = void 0 === A ? 'highlight' : A,
                            C = e.soundClick,
                            D = void 0 === C ? 'play' : C,
                            B = e.onMouseEnter,
                            g = e.onMouseLeave,
                            h = e.onMouseUp,
                            b = e.onMouseDown,
                            f = e.onClick,
                            v = e.onChange,
                            w = e.onFocus,
                            y = e.onBlur,
                            x = e.text,
                            S = e.contentStyles,
                            T = e.children,
                            N = e.alignment,
                            k = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, j);
                        const M = (0, a.useState)(!1),
                            R = M[0],
                            L = M[1],
                            O = (0, a.useState)(!1),
                            I = (O[0], O[1]),
                            $ = (0, a.useCallback)(
                                (e) => {
                                    s || (v && v(), f && f(e));
                                },
                                [s, v, f],
                            ),
                            K = (0, a.useCallback)(
                                (e) => {
                                    const u = e.button === H.LEFT;
                                    s || (u && L(!0), u && b && b(e), D && p(D));
                                },
                                [s, b, D],
                            ),
                            V = (0, a.useCallback)(
                                (e) => {
                                    s || (L(!1), h && h(e));
                                },
                                [s, h],
                            ),
                            q = (0, a.useCallback)(
                                (e) => {
                                    s || (B && B(e), F && p(F));
                                },
                                [s, B, F],
                            ),
                            Y = (0, a.useCallback)(
                                (e) => {
                                    s || (L(!1), g && g(e));
                                },
                                [s, g],
                            ),
                            Z = (0, a.useCallback)(
                                (e) => {
                                    s || (I(!0), w && w(e));
                                },
                                [s, w],
                            ),
                            X = (0, a.useCallback)(
                                (e) => {
                                    s || (I(!1), y && y(e));
                                },
                                [s, y],
                            ),
                            Q = r().createElement(
                                'div',
                                { className: U.label },
                                r().createElement(
                                    'div',
                                    { className: o()(U.labelContent, 's-labelContent'), style: S },
                                    x || T,
                                ),
                            );
                        return r().createElement(
                            'div',
                            z(
                                {
                                    id: u,
                                    className: o()(U.base, U[`base__${d}`], U[`base__${_}`], {
                                        [U.base__checked]: n,
                                        [U.base__disabled]: s,
                                        [U.base__mouseDown]: R,
                                        [U.base__alert]: c,
                                        [U.base__center]: N === W.Center,
                                        [U.base__bottom]: N === W.Bottom,
                                    }),
                                    onClick: $,
                                    onMouseEnter: q,
                                    onMouseLeave: Y,
                                    onMouseDown: K,
                                    onMouseUp: V,
                                    onFocus: Z,
                                    onBlur: X,
                                },
                                k,
                            ),
                            r().createElement(
                                'div',
                                { className: U.input },
                                r().createElement('div', { className: U.alertOverlay }),
                                r().createElement('div', { className: U.inputHoverOverlay }),
                                r().createElement('div', { className: U.highlight }),
                            ),
                            r().createElement('div', { className: U.checkmark }),
                            ((x || T) && Q) || null,
                        );
                    },
                    K = (0, a.memo)(({ text: e, isChecked: u, onClick: t, isDisabled: n = !1 }) => {
                        const i = (0, a.useCallback)(() => t(), [t]);
                        return r().createElement(
                            'div',
                            null,
                            r().createElement($, {
                                text: e,
                                isChecked: u,
                                type: G.main,
                                size: P.large,
                                isDisabled: n,
                                onClick: i,
                            }),
                        );
                    });
                var V = t(406);
                class q extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = M.B3.GOLD;
                        else e = M.B3.INTEGRAL;
                        const u = M.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                q.defaultProps = { format: 'integral' };
                const Y = 'Background_base_d7',
                    Z = 'Background_rightBorder_62',
                    X = 'Background_background_d7',
                    Q = () =>
                        r().createElement(
                            'div',
                            { className: Y },
                            r().createElement('div', { className: X }),
                            r().createElement('div', { className: Z }),
                        ),
                    J = {
                        base: 'CButton_base_40',
                        base__main: 'CButton_base__main_42',
                        base__primary: 'CButton_base__primary_7f',
                        base__primaryGreen: 'CButton_base__primaryGreen_6f',
                        base__primaryRed: 'CButton_base__primaryRed_ec',
                        base__secondary: 'CButton_base__secondary_50',
                        base__ghost: 'CButton_base__ghost_ed',
                        base__extraSmall: 'CButton_base__extraSmall_27',
                        base__small: 'CButton_base__small_df',
                        base__medium: 'CButton_base__medium_74',
                        base__large: 'CButton_base__large_5c',
                        base__disabled: 'CButton_base__disabled_d9',
                        back: 'CButton_back_e5',
                        texture: 'CButton_texture_fe',
                        state: 'CButton_state_11',
                        base__focus: 'CButton_base__focus_83',
                        stateHighlightHover: 'CButton_stateHighlightHover_ff',
                        stateHighlightActive: 'CButton_stateHighlightActive_35',
                        stateDisabled: 'CButton_stateDisabled_54',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let ee, ue;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ee || (ee = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(ue || (ue = {}));
                const te = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: i,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: E,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const C = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        B = D[0],
                        g = D[1],
                        h = (0, a.useState)(!1),
                        b = h[0],
                        f = h[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                B && null !== C.current && !C.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, a.useEffect)(() => {
                            g(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: C,
                                className: o()(
                                    J.base,
                                    J[`base__${n}`],
                                    i && J.base__disabled,
                                    u && J[`base__${u}`],
                                    B && J.base__focus,
                                    b && J.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== l && p(l), E && E(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    i || (_ && _(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== c && p(c),
                                        m && m(e),
                                        t && (i || (C.current && (C.current.focus(), g(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (A && A(e), f(!1));
                                },
                                onClick: function (e) {
                                    i || (F && F(e));
                                },
                            },
                            n !== ee.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: J.back }),
                                    r().createElement('span', { className: J.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: o()(J.state, J.state__default) },
                                r().createElement('span', { className: J.stateDisabled }),
                                r().createElement('span', { className: J.stateHighlightHover }),
                                r().createElement('span', { className: J.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: J.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                te.defaultProps = { type: ee.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ne = te;
                var ae = t(9766),
                    re = t(2056);
                const ie = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function oe() {
                    return (
                        (oe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        oe.apply(null, arguments)
                    );
                }
                const se = R.views.common.tooltip_window.simple_tooltip_content,
                    le = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            i = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, ie);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: n, note: i, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, i, s]);
                        return r().createElement(
                            re.u,
                            oe(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? se.SimpleTooltipHtmlContent('resId') : se.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    ce = 'Footer_base_3d',
                    Ee = 'Footer_errorMessage_e5',
                    de = 'Footer_alertIcon_df',
                    me = 'Footer_buttonContent_0d',
                    _e = R.strings.ny.rewardKitStatistics,
                    Ae = ({ isResetFailed: e, hasStatistics: u, resetStatistics: t }) =>
                        r().createElement(
                            'div',
                            { className: ce },
                            r().createElement(
                                le,
                                { body: _e.statistics.resetDescription() },
                                r().createElement(
                                    ne,
                                    { type: ee.ghost, size: ue.medium, onClick: t, disabled: !u, mixClass: me },
                                    _e.statistics.reset(),
                                ),
                            ),
                            e &&
                                r().createElement(
                                    le,
                                    { body: _e.resetError.body() },
                                    r().createElement(
                                        'div',
                                        { className: Ee },
                                        r().createElement(ae.z, {
                                            text: _e.resetError.label(),
                                            binding: { alertIcon: r().createElement('span', { className: de }) },
                                        }),
                                    ),
                                ),
                        ),
                    Fe = 'Header_base_f9',
                    Ce = 'Header_content_ea',
                    De = 'Header_highlightedText_37',
                    Be = 'Header_infoIcon_2b',
                    ge = R.strings.ny.rewardKitStatistics,
                    he = ({ count: e }) =>
                        r().createElement(
                            'div',
                            { className: Fe },
                            r().createElement(
                                le,
                                { header: ge.tooltip.header(), body: ge.tooltip.body() },
                                r().createElement(
                                    'div',
                                    { className: Ce },
                                    r().createElement(ae.z, {
                                        text: R.strings.ny.rewardKitStatistics.$plural('openedBoxes', e),
                                        binding: { count: r().createElement('span', { className: De }, e) },
                                    }),
                                    r().createElement('div', { className: Be }),
                                ),
                            ),
                        );
                var be = t(9480);
                let fe, ve, pe, we, ye, xe, Se, Te;
                !(function (e) {
                    (e.None = ''),
                        (e.Vehicles = 'vehicles'),
                        (e.Customizations = 'customizations'),
                        (e.Attachment = 'attachment'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Currencies = 'currencies'),
                        (e.ModernizedEquipment = 'modernizedEquipment'),
                        (e.NyToys = 'nyToys');
                })(fe || (fe = {})),
                    (function (e) {
                        (e.Undefined = 'undefined'),
                            (e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental'),
                            (e.Soviet = 'soviet'),
                            (e.TraditionalWestern = 'traditionalWestern'),
                            (e.ModernWestern = 'modernWestern'),
                            (e.Asian = 'asian'),
                            (e.Mega = 'Mega'),
                            (e.GiftSystem = 'GiftSystem'),
                            (e.Cat = 'Cat'),
                            (e.Atm = 'Atm'),
                            (e.Gift2 = 'Gift2'),
                            (e.Bro = 'Bro'),
                            (e.Dog = 'Dog'),
                            (e.Surprise = 'Surprise');
                    })(ve || (ve = {})),
                    (function (e) {
                        (e.Crystal = 'ny_crystal'),
                            (e.Emerald = 'ny_emerald'),
                            (e.Amber = 'ny_amber'),
                            (e.Iron = 'ny_iron'),
                            (e.AnyResource = 'anyResource');
                    })(pe || (pe = {})),
                    (function (e) {
                        (e.XP = 'xpFactor'),
                            (e.TankmenXP = 'tankmenXPFactor'),
                            (e.FreeXp = 'freeXPFactor'),
                            (e.Credits = 'creditsFactor');
                    })(we || (we = {})),
                    (function (e) {
                        (e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental');
                    })(ye || (ye = {})),
                    (function (e) {
                        (e.Level1 = 'level1'), (e.Level2 = 'level2'), (e.Level3 = 'level3'), (e.Level4 = 'level4');
                    })(xe || (xe = {})),
                    (function (e) {
                        (e.Zero = 'zero'), (e.Number = 'number'), (e.Default = 'default');
                    })(Se || (Se = {})),
                    (function (e) {
                        (e.Undefined = 'undefined'),
                            (e.ToEvent = 'toEvent'),
                            (e.ToGuestD = 'toGuestD'),
                            (e.ToGuestC = 'toGuestC'),
                            (e.ToMarkertplace = 'toMarkertplace'),
                            (e.ToGiftmachine = 'toGiftmachine'),
                            (e.ToRewards = 'toRewards');
                    })(Te || (Te = {}));
                const Ne = R.images.gui.maps.icons.quests.bonuses.big,
                    ke = {
                        [fe.None]: '',
                        [fe.Vehicles]: Ne.vehicles(),
                        [fe.Customizations]: Ne.style_3d(),
                        [fe.Attachment]: Ne.attachment(),
                        [fe.PremiumPlus]: Ne.premium_plus_universal(),
                        [fe.Gold]: Ne.gold(),
                        [fe.Credits]: Ne.credits(),
                        [pe.Crystal]: Ne.ny_crystal(),
                        [pe.Emerald]: Ne.ny_emerald(),
                        [pe.Amber]: Ne.ny_amber(),
                        [pe.Iron]: Ne.ny_iron(),
                        [fe.ModernizedEquipment]: Ne.modernizedEquipment(),
                        [fe.NyToys]: Ne.nyToys(),
                    },
                    Me = {
                        base: 'StatisticsSection_base_e2',
                        icon: 'StatisticsSection_icon_59',
                        name: 'StatisticsSection_name_e2',
                        count: 'StatisticsSection_count_78',
                        count__gold: 'StatisticsSection_count__gold_08',
                        count__credits: 'StatisticsSection_count__credits_d3',
                        count__ny_crystal: 'StatisticsSection_count__ny_crystal_d5',
                        count__ny_emerald: 'StatisticsSection_count__ny_emerald_49',
                        count__ny_amber: 'StatisticsSection_count__ny_amber_aa',
                        count__ny_iron: 'StatisticsSection_count__ny_iron_90',
                    },
                    Re = R.strings.ny.rewardKitStatistics.statistics,
                    Le = [fe.Gold, fe.Credits],
                    Oe = ({ type: e, count: u }) => {
                        const t = r().createElement(q, { value: u, format: Le.includes(e) ? 'gold' : 'integral' });
                        return r().createElement(
                            'div',
                            { className: Me.base },
                            r().createElement('div', {
                                className: Me.icon,
                                style: { backgroundImage: `url('${ke[e]}')` },
                            }),
                            r().createElement(
                                'div',
                                { className: Me.name },
                                r().createElement(ae.z, {
                                    text: Re.$dyn(e),
                                    binding: {
                                        units: r().createElement(ae.z, {
                                            text: Re.units(),
                                            binding: { unitsCount: t },
                                            classMix: Me.count,
                                        }),
                                        days: r().createElement(ae.z, {
                                            text: Re.days(),
                                            binding: { daysCount: t },
                                            classMix: Me.count,
                                        }),
                                        currency: r().createElement(
                                            'span',
                                            { className: o()(Me.count, Me[`count__${e}`]) },
                                            t,
                                        ),
                                    },
                                }),
                            ),
                        );
                    },
                    Ie = 'ResourcesStatistics_base_33',
                    He = 'ResourcesStatistics_column_e1',
                    Pe = 'ResourcesStatistics_resource_83',
                    Ge = (e, u) => (u ? be.filter(e, (e, u) => u % 2 == 1) : be.filter(e, (e, u) => u % 2 == 0)),
                    We = ({ resources: e }) =>
                        r().createElement(
                            'div',
                            { className: Ie },
                            r().createElement(
                                'div',
                                { className: He },
                                Ge(e, !1).map((e, u) =>
                                    r().createElement(
                                        re.u,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                            args: { type: e.type },
                                            key: u,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Pe },
                                            r().createElement(Oe, { type: e.type, count: e.value }),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: He },
                                Ge(e, !0).map((e, u) =>
                                    r().createElement(
                                        re.u,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                            args: { type: e.type },
                                            key: u,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Pe },
                                            r().createElement(Oe, { type: e.type, count: e.value }),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    Ue = 'Statistics_base_f5',
                    je = 'Statistics_item_0b',
                    ze = [fe.Vehicles, fe.Customizations, fe.Attachment, fe.ModernizedEquipment],
                    $e = R.views.lobby.new_year.tooltips,
                    Ke = (e) => {
                        switch (e) {
                            case fe.Vehicles:
                                return $e.NyVehiclesStatisticsTooltip('resId');
                            case fe.Customizations:
                                return $e.NyCustomizationsStatisticsTooltip('resId');
                            case fe.Attachment:
                                return $e.NyAttachmentsStatisticsTooltip('resId');
                            case fe.ModernizedEquipment:
                                return $e.NyEquipmentsStatisticsTooltip('resId');
                            default:
                                return R.invalid('resId');
                        }
                    },
                    Ve = ({ rewards: e }) =>
                        r().createElement(
                            'div',
                            { className: Ue },
                            be.map(e, (e, u) =>
                                r().createElement(
                                    re.u,
                                    {
                                        ignoreShowDelay: !0,
                                        contentId: Ke(e.type),
                                        isEnabled: ze.includes(e.type),
                                        key: u,
                                    },
                                    r().createElement(
                                        'div',
                                        { className: je },
                                        r().createElement(Oe, { type: e.type, count: e.count }),
                                    ),
                                ),
                            ),
                        ),
                    qe = 'NyRewardKitStatistics_base_7e',
                    Ye = 'NyRewardKitStatistics_content_08',
                    Ze = 'NyRewardKitStatistics_closeBtn_64',
                    Xe = 'NyRewardKitStatistics_message_e4',
                    Qe = 'NyRewardKitStatistics_rewards_0f',
                    Je = 'NyRewardKitStatistics_resources_b9',
                    eu = 'NyRewardKitStatistics_resourcesCounter_5b',
                    uu = 'NyRewardKitStatistics_line_4c',
                    tu = 'NyRewardKitStatistics_resourcesCounterText_d3',
                    nu = R.strings.ny.rewardKitStatistics,
                    au = ({
                        closeStatistics: e,
                        boxesCount: u,
                        hasStatistics: t,
                        resourcesTotalCount: n,
                        resetStatistics: a,
                        isResetFailed: i,
                        rewards: s,
                        resources: l,
                    }) =>
                        r().createElement(
                            'div',
                            { className: o()(qe) },
                            r().createElement(Q, null),
                            r().createElement('div', {
                                className: Ze,
                                onClick: () => {
                                    p(R.sounds.cancelcloseno()), e();
                                },
                            }),
                            r().createElement(
                                'div',
                                { className: Ye },
                                r().createElement(he, { count: u }),
                                t
                                    ? r().createElement(
                                          'div',
                                          null,
                                          r().createElement(
                                              'div',
                                              { className: Qe },
                                              r().createElement(Ve, { rewards: s }),
                                          ),
                                          r().createElement(
                                              'div',
                                              { className: eu },
                                              r().createElement('div', { className: uu }),
                                              r().createElement(V.B, {
                                                  text: nu.resourcesTotalCount(),
                                                  binding: { count: r().createElement(q, { value: n }) },
                                                  className: tu,
                                              }),
                                              r().createElement('div', { className: uu }),
                                          ),
                                          r().createElement(
                                              'div',
                                              { className: Je },
                                              r().createElement(We, { resources: l }),
                                          ),
                                      )
                                    : r().createElement(
                                          'div',
                                          { className: Xe },
                                          R.strings.ny.rewardKitStatistics.noStatistics(),
                                      ),
                            ),
                            r().createElement(Ae, { hasStatistics: t, isResetFailed: i, resetStatistics: a }),
                        ),
                    ru = 'NyRewardKitsStatisticsSlider_base_71',
                    iu = 'NyRewardKitsStatisticsSlider_base__visible_25',
                    ou = 'NyRewardKitsStatisticsSlider_shadow_2d',
                    su = ({
                        isVisible: e,
                        closeStatistics: u,
                        resources: t,
                        rewards: n,
                        isResetFailed: i,
                        resetStatistics: s,
                        resourcesTotalCount: l,
                        boxesCount: c,
                    }) => {
                        const E = t.length + n.length > 0,
                            d = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const t = d.current;
                                if (t && e) return M.c1.register(t, u), () => M.c1.unregister(t, u);
                            }, [e, d, u]),
                            (0, a.useEffect)(() => {
                                e && p(R.sounds.gui_lootbox_in_game_shop_box_buy());
                            }, [e]),
                            r().createElement(
                                'div',
                                { className: o()(ru, e && iu), ref: d },
                                r().createElement('div', { className: ou }),
                                r().createElement(au, {
                                    closeStatistics: u,
                                    hasStatistics: E,
                                    isResetFailed: i,
                                    resetStatistics: s,
                                    boxesCount: c,
                                    rewards: n,
                                    resources: t,
                                    resourcesTotalCount: l,
                                }),
                            )
                        );
                    };
                function lu() {
                    return !1;
                }
                console.log;
                var cu = t(9174);
                function Eu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return du(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? du(e, u)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function du(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const mu = (e) => (0 === e ? window : window.subViews.get(e));
                var _u = t(3946);
                const Au = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: i, children: o, mocks: s }) {
                                const l = (0, a.useRef)([]),
                                    c = (t, n, a) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = mu,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = a.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = t(u),
                                                        r = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const o = 'string' == typeof r ? `${n}.${r}` : n,
                                                            s = N.O.view.addModelObserver(o, u, !0);
                                                        return a.set(s, t), e && t(i(r)), s;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, u) => {
                                                        const t = i(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = i(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = Eu(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            o =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                            c = (e) => l.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : s(e),
                                                            a = cu.LO.box(n, { equals: lu });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, cu.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : s(e),
                                                            a = cu.LO.box(n, { equals: lu });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, cu.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = s(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = cu.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, cu.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                i = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = cu.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, cu.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            d = { mode: t, model: E, externalModel: o, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && a ? a.controls(d) : u(d),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    d = (0, a.useState)(n),
                                    m = d[0],
                                    _ = d[1],
                                    A = (0, a.useState)(() => c(n, i, s)),
                                    F = A[0],
                                    C = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? C(c(m, i, s)) : (E.current = !0);
                                    }, [s, m, i]),
                                    (0, a.useEffect)(() => {
                                        _(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    r().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    sidebar: e.object('sidebar'),
                                    rewardKitStatistics: e.object('rewardKitStatistics'),
                                    rewards: e.array('rewardKitStatistics.rewards', []),
                                    resources: e.array('rewardKitStatistics.resources', []),
                                    boxesCountButtons: e.array('boxesCountButtons.items', []),
                                    itemsTabBar: e.array('sidebar.itemsTabBar', []),
                                    guaranteedReward: e.object('guaranteedReward'),
                                },
                                t = (0, _u.Om)(() =>
                                    (0, be.mapExists)(u.itemsTabBar.get(), (e) => Object.assign({ id: e.name }, e)),
                                ),
                                n = (0, _u.Om)((e) => t().findIndex((u) => u.name === e)),
                                a = (0, _u.Om)(() =>
                                    (0, be.mapExists)(u.boxesCountButtons.get(), (e) => Object.assign({}, e)),
                                );
                            return Object.assign({}, u, {
                                computes: { tabs: t, boxesCountButtons: a, getTabIndexByName: n },
                            });
                        },
                        ({ externalModel: e }) => ({
                            closeWindow: e.createCallbackNoArgs('onWindowClose'),
                            openBoxFromHitArea: e.createCallbackNoArgs('onOpenBoxFromHitArea'),
                            openBox: e.createCallbackNoArgs('onOpenBox'),
                            buyBox: e.createCallbackNoArgs('onBuyBox'),
                            showInfo: e.createCallbackNoArgs('guaranteedReward.onShowInfo'),
                            animationSwitch: e.createCallbackNoArgs('onAnimationSwitch'),
                            resetStatistics: e.createCallbackNoArgs('rewardKitStatistics.onResetStatistics'),
                            updateLastSeen: e.createCallbackNoArgs('rewardKitStatistics.onUpdateLastSeen'),
                            changeTab: e.createCallback((e) => ({ tabName: e }), 'onChangeTab'),
                            switchBoxHover: e.createCallback((e) => ({ value: e }), 'onSwitchBoxHover'),
                            countSelected: e.createCallback((e) => ({ value: e }), 'onCountSelected'),
                        }),
                    ),
                    Fu = Au[0],
                    Cu = Au[1];
                var Du = t(2344);
                function Bu(e, u, t, n) {
                    let a,
                        r = !1,
                        i = 0;
                    function o() {
                        a && clearTimeout(a);
                    }
                    function s(...s) {
                        const l = this,
                            c = Date.now() - i;
                        function E() {
                            (i = Date.now()), t.apply(l, s);
                        }
                        r ||
                            (n && !a && E(),
                            o(),
                            void 0 === n && c > e
                                ? E()
                                : !0 !== u &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : E,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (s.cancel = function () {
                            o(), (r = !0);
                        }),
                        s
                    );
                }
                function gu(e, u, t, n = !1) {
                    const r = (0, a.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? Bu(e, u, !1) : Bu(e, t, !1 !== u);
                            })(t, n, e),
                        u,
                    );
                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                }
                var hu = t(2882),
                    bu = t(2973);
                const fu = 'BuyButton_base_23',
                    vu = 'BuyButton_interactiveArea_b6',
                    pu = 'BuyButton_base__disabled_dc',
                    wu = 'BuyButton_externalLinkIcon_a0',
                    yu = 'BuyButton_wrapper_e1',
                    xu = 'BuyButton_image_c2',
                    Su = 'BuyButton_base__hover_00',
                    Tu = 'BuyButton_text_8a',
                    Nu = R.strings.ny.rewardKitMain.entryView,
                    ku = (0, a.memo)(({ onClick: e, realm: u, isExternalLink: t, isDisabled: n = !1 }) => {
                        const i = u === bu.r.Cn ? Nu.buyLabelCn() : Nu.buyLabel(),
                            s = (0, a.useState)(!1),
                            l = s[0],
                            c = s[1];
                        return r().createElement(
                            'div',
                            { className: o()(fu, l && Su, n && pu) },
                            r().createElement(
                                le,
                                { body: R.strings.lootboxes.tooltip.entryView.buyBoxes() },
                                r().createElement('div', {
                                    className: vu,
                                    onClick: () => {
                                        w.playClick(), e();
                                    },
                                    onMouseEnter: () => {
                                        p(R.sounds.gui_lootbox_logistic_center_buy_more()), c(!0);
                                    },
                                    onMouseLeave: () => {
                                        c(!1);
                                    },
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: yu },
                                r().createElement('div', { className: xu }),
                                r().createElement(
                                    'div',
                                    { className: Tu },
                                    i,
                                    t && r().createElement('span', { className: wu }),
                                ),
                            ),
                        );
                    }),
                    Mu = {
                        base: 'ToggleButton_base_2c',
                        base__button: 'ToggleButton_base__button_cb',
                        base__active: 'ToggleButton_base__active_a6',
                        base__slot: 'ToggleButton_base__slot_98',
                        base__disabled: 'ToggleButton_base__disabled_19',
                        texture: 'ToggleButton_texture_f1',
                        background: 'ToggleButton_background_ef',
                        background__main: 'ToggleButton_background__main_68',
                        background__primary: 'ToggleButton_background__primary_a9',
                        background__primaryGreen: 'ToggleButton_background__primaryGreen_4f',
                        background__primaryRed: 'ToggleButton_background__primaryRed_ca',
                        background__secondary: 'ToggleButton_background__secondary_b2',
                        background__ghost: 'ToggleButton_background__ghost_d6',
                        content: 'ToggleButton_content_63',
                        overlay: 'ToggleButton_overlay_23',
                        indicator: 'ToggleButton_indicator_a7',
                    };
                let Ru;
                !(function (e) {
                    (e.Button = 'button'), (e.Slot = 'slot');
                })(Ru || (Ru = {}));
                const Lu = () => {},
                    Ou = r().memo(
                        ({
                            active: e = !1,
                            className: u,
                            children: t,
                            toggleType: n = Ru.Button,
                            toggleButtonType: i = ee.secondary,
                            onClick: s,
                            disabled: l,
                            soundClick: c = 'play',
                            soundHover: E = 'highlight',
                            onMouseEnter: d = Lu,
                            onMouseDown: m = Lu,
                            onMouseUp: _ = Lu,
                            onMouseLeave: A = Lu,
                        }) => {
                            const F = (0, a.useCallback)(
                                    (u) => {
                                        l || (p(c), s && s(u, e));
                                    },
                                    [s, l, e, c],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        l || (p(E), d && d(e));
                                    },
                                    [l, E, d],
                                ),
                                D = (0, a.useCallback)(
                                    (e) => {
                                        l || ((1 !== e.button && 2 !== e.button) || (null !== c && p(c)), m && m(e));
                                    },
                                    [m, l, c],
                                ),
                                B = o()(Mu.base, u, Mu[`base__${n}`], e && Mu.base__active, l && Mu.base__disabled);
                            return r().createElement(
                                'div',
                                {
                                    className: B,
                                    onClick: F,
                                    onMouseEnter: C,
                                    onMouseUp: l ? Lu : _,
                                    onMouseDown: D,
                                    onMouseLeave: l ? Lu : A,
                                },
                                r().createElement('div', { className: Mu.content }, t),
                                n === Ru.Button &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', {
                                            className: o()(Mu.background, Mu[`background__${i}`]),
                                        }),
                                        r().createElement('div', { className: Mu.texture }),
                                    ),
                                r().createElement('div', { className: Mu.overlay }),
                                r().createElement('div', { className: Mu.indicator }),
                            );
                        },
                    );
                var Iu = t(7030);
                const Hu = 'Footer_base_5d',
                    Pu = 'Footer_animationContainer_6f',
                    Gu = 'Footer_button_ba',
                    Wu = 'Footer_externalLinkIcon_a9',
                    Uu = 'Footer_toggleBtnHolder_b6',
                    ju = 'Footer_toggleBtn_8d',
                    zu = R.strings.ny.rewardKitMain.buttonLabel,
                    $u = (0, I.Pi)(
                        ({ isReadyToOpen: e, onOpenBoxClick: u, onOpenBoxMouseEnter: t, onOpenBoxMouseLeave: n }) => {
                            const a = Cu(),
                                i = a.model,
                                o = a.controls,
                                s = i.root.get(),
                                l = s.realm,
                                c = s.currentCountButton,
                                E = s.isOpenBoxBtnVisible,
                                d = s.isRewardKitEnable,
                                m = s.isExternalLink,
                                _ = l === String(bu.r.Cn),
                                A = _ && m ? zu.buyMoreCn() : zu.buyMore(),
                                F = (0, Iu.useTransition)(E, {
                                    from: { opacity: 0 },
                                    enter: { opacity: 1 },
                                    leave: { opacity: 0 },
                                    config: Iu.config.slow,
                                });
                            return r().createElement(
                                'div',
                                { className: Hu },
                                F((a, s) =>
                                    s
                                        ? r().createElement(
                                              Iu.animated.div,
                                              { style: a, className: Pu },
                                              r().createElement(
                                                  ne,
                                                  {
                                                      disabled: !e,
                                                      type: ee.main,
                                                      size: ue.medium,
                                                      mixClass: Gu,
                                                      onClick: u,
                                                      onMouseEnter: t,
                                                      onMouseLeave: n,
                                                  },
                                                  zu.open(),
                                              ),
                                              i.computes
                                                  .boxesCountButtons()
                                                  .map(({ isEnabled: e, label: u, idx: t }, n) =>
                                                      r().createElement(
                                                          'div',
                                                          { className: Uu, key: n },
                                                          r().createElement(
                                                              Ou,
                                                              {
                                                                  active: n === c,
                                                                  disabled: !e,
                                                                  toggleType: Ru.Slot,
                                                                  className: ju,
                                                                  onClick: () => o.countSelected(t),
                                                              },
                                                              u,
                                                          ),
                                                      ),
                                                  ),
                                          )
                                        : r().createElement(
                                              Iu.animated.div,
                                              { style: a, className: Pu },
                                              r().createElement(
                                                  ne,
                                                  {
                                                      type: ee.main,
                                                      size: ue.medium,
                                                      mixClass: Gu,
                                                      onClick: d ? o.buyBox : o.showInfo,
                                                  },
                                                  A,
                                                  _ && m && r().createElement('span', { className: Wu }),
                                              ),
                                              r().createElement(
                                                  ne,
                                                  { size: ue.medium, mixClass: Gu, onClick: o.closeWindow },
                                                  zu.back(),
                                              ),
                                          ),
                                ),
                            );
                        },
                    ),
                    Ku = {
                        base: 'Main_base_80',
                        fadeContainer: 'Main_fadeContainer_64',
                        title: 'Main_title_84',
                        content: 'Main_content_84',
                        content__disabled: 'Main_content__disabled_8d',
                        footer__disabled: 'Main_footer__disabled_b4',
                        buyButton: 'Main_buyButton_98',
                        hoverAreaContainer: 'Main_hoverAreaContainer_dc',
                        hoverArea: 'Main_hoverArea_16',
                        hoverArea__ready: 'Main_hoverArea__ready_6d',
                        hoverArea__hidden: 'Main_hoverArea__hidden_6d',
                        guaranteedReward: 'Main_guaranteedReward_68',
                        alert: 'Main_alert_d4',
                        infoText: 'Main_infoText_63',
                        slideInFadeIn: 'Main_slideInFadeIn_b6',
                        fadeOut: 'Main_fadeOut_71',
                        fadeIn: 'Main_fadeIn_62',
                        fadeInWithScale: 'Main_fadeInWithScale_11',
                        slideUp: 'Main_slideUp_e1',
                        scale: 'Main_scale_bf',
                        spin: 'Main_spin_ad',
                        blink: 'Main_blink_36',
                        slideInNotification: 'Main_slideInNotification_ba',
                    };
                var Vu = t(3649),
                    qu = t(6808);
                const Yu = 'NoBoxes_base_94',
                    Zu = 'NoBoxes_title_b5',
                    Xu = 'NoBoxes_subtitle_6b',
                    Qu = 'NoBoxes_primaryTitleRow_ca',
                    Ju = 'NoBoxes_buttonNextContainer_45',
                    et = 'NoBoxes_buttonNext_c0',
                    ut = R.strings.ny.rewardKitMain.entryView,
                    tt = (0, I.Pi)(({ currentName: e, realm: u }) => {
                        const t = Cu(),
                            n = t.model,
                            a = t.controls,
                            i = u === String(bu.r.Cn) ? ut.howToGet.newYear_premiumCn() : ut.howToGet.newYear_premium(),
                            o = n.computes.getTabIndexByName(e),
                            s = (() => {
                                const e = ((e, u) => {
                                    for (let t = 0; t < e.length; t++) {
                                        const n = e[(t + u) % e.length];
                                        if (n.infoCount > 0) return n.name;
                                    }
                                })(n.computes.tabs(), o);
                                return e
                                    ? { type: 'hasAnotherCategoryBoxes', hasBoxesCategoryType: e }
                                    : { type: 'noPremiumBoxes' };
                            })();
                        switch (s.type) {
                            case 'noPremiumBoxes':
                                return r().createElement(
                                    'div',
                                    { className: Yu },
                                    r().createElement('div', { className: Zu }, ut.noBoxes.title()),
                                    r().createElement('div', { className: Xu }, i),
                                );
                            case 'hasAnotherCategoryBoxes':
                                return r().createElement(
                                    'div',
                                    { className: Yu },
                                    r().createElement('div', { className: Qu }, ut.noBoxes.premium.titleFirstRow()),
                                    r().createElement(
                                        'div',
                                        { className: Qu },
                                        (0, Vu.uF)(ut.noBoxes.premium.titleSecondRow(), {
                                            collectionName: (0, qu.VS)(
                                                R.strings.ny.lootBox.typeNames.to,
                                                s.hasBoxesCategoryType,
                                            ),
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Ju },
                                        r().createElement(
                                            ne,
                                            {
                                                type: 'ghost',
                                                mixClass: et,
                                                onClick: () => a.changeTab(s.hasBoxesCategoryType),
                                            },
                                            (0, Vu.uF)(ut.noBoxes.premium.switchButton(), {
                                                collectionName: (0, qu.VS)(
                                                    R.strings.ny.lootBox.typeNames.goTo,
                                                    s.hasBoxesCategoryType,
                                                ),
                                            }),
                                        ),
                                    ),
                                );
                            default:
                                return console.warn('Unreachable code branch'), null;
                        }
                    }),
                    nt = R.strings.ny.rewardKitMain,
                    at = (0, I.Pi)(() => {
                        var e;
                        const u = _().remScreenHeight,
                            t = Cu(),
                            n = t.model,
                            i = t.controls,
                            s = n.root.get(),
                            l = s.isViewHidden,
                            c = s.isBoxChangeAnimation,
                            E = s.isBoxOpenEnabled,
                            d = s.currentName,
                            m = s.isBoxesAvailable,
                            A = s.isOpenBoxBtnVisible,
                            F = s.isRewardKitEnable,
                            C = s.isExternalLink,
                            D = s.realm,
                            B = null != (e = (0, Du.D9)(c)) ? e : c,
                            g = (0, a.useRef)(!1),
                            h = (0, a.useState)(!1),
                            b = h[0],
                            f = h[1],
                            v = (0, a.useState)(!1),
                            p = v[0],
                            w = v[1],
                            y = () => f(!0),
                            x = () => f(!1),
                            S = D === bu.r.Cn;
                        (0, a.useEffect)(() => {
                            const e = !c || (B && !c);
                            if (((E && e) !== p && w(E && e), !A || !E)) return;
                            const u = b && e;
                            u !== g.current && ((g.current = u), i.switchBoxHover(u));
                        });
                        const T = gu(
                            () => {
                                p && (i.switchBoxHover(!1), f(!1), i.openBox());
                            },
                            [p, i],
                            200,
                            !0,
                        );
                        O(k.n.SPACE, (e) => {
                            e.repeat || (!l && A && T());
                        });
                        const N = (0, a.useCallback)(() => {
                                S && (F || i.showInfo()), i.buyBox();
                            }, [i, S, F]),
                            M = (0, a.useCallback)(() => {
                                p && (i.switchBoxHover(!1), f(!1), i.openBoxFromHitArea());
                            }, [p, i]),
                            R = nt.entryView.title.$dyn(d),
                            L = (1.03 * u + 210) / 1200;
                        return r().createElement(
                            'div',
                            { className: Ku.base, style: { '--bg-scale': L } },
                            r().createElement(hu.$, {
                                model: Object.assign({}, n.guaranteedReward.get(), { onShowInfo: () => i.showInfo() }),
                                className: Ku.guaranteedReward,
                                switchDelay: { enter: 400 },
                            }),
                            r().createElement(
                                'div',
                                { className: Ku.hoverAreaContainer },
                                r().createElement('div', {
                                    className: o()(Ku.hoverArea, !A && Ku.hoverArea__hidden, p && Ku.hoverArea__ready),
                                    onMouseOver: y,
                                    onMouseLeave: x,
                                    onClick: M,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: Ku.fadeContainer },
                                r().createElement('div', { className: Ku.title }, R),
                                r().createElement(
                                    'div',
                                    { className: o()(Ku.content) },
                                    !A && m && r().createElement(tt, { currentName: d, realm: D }),
                                ),
                                m
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(
                                              'div',
                                              { className: o()(Ku.footer, c && Ku.footer__disabled) },
                                              r().createElement($u, {
                                                  isReadyToOpen: p,
                                                  onOpenBoxClick: T,
                                                  onOpenBoxMouseEnter: y,
                                                  onOpenBoxMouseLeave: x,
                                              }),
                                          ),
                                          r().createElement(
                                              'div',
                                              { className: Ku.buyButton },
                                              r().createElement(ku, {
                                                  onClick: N,
                                                  realm: D,
                                                  isExternalLink: C,
                                                  isDisabled: !E,
                                              }),
                                          ),
                                      )
                                    : r().createElement('div', { className: Ku.alert }, nt.entryDesc.notAvailableNow()),
                            ),
                        );
                    });
                let rt;
                !(function (e) {
                    (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(rt || (rt = {}));
                const it = () => {
                        const e = (0, a.useContext)(n.YN);
                        return e.large || e.extraLarge;
                    },
                    ot = (0, a.createContext)(null);
                let st, lt, ct;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(st || (st = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Active = 'active'), (e.Disabled = 'disabled');
                    })(lt || (lt = {})),
                    (function (e) {
                        e.Blue = 'blue';
                    })(ct || (ct = {}));
                const Et = {
                        base: 'MenuSection_base_4e',
                        base__small: 'MenuSection_base__small_f3',
                        item: 'MenuSection_item_7a',
                        item__first: 'MenuSection_item__first_ed',
                        item__last: 'MenuSection_item__last_93',
                        item__single: 'MenuSection_item__single_19',
                        title: 'MenuSection_title_90',
                    },
                    dt = ['children'];
                function mt() {
                    return (
                        (mt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        mt.apply(null, arguments)
                    );
                }
                const _t = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, dt);
                    return r().createElement(
                        re.u,
                        mt(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        u,
                    );
                };
                function At() {
                    return (
                        (At = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        At.apply(null, arguments)
                    );
                }
                const Ft = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = r().createElement('div', { className: t }, e);
                        if (u.header || u.body) return r().createElement(le, u, n);
                        const a = u.contentId;
                        return a
                            ? r().createElement(re.u, At({}, u, { contentId: a }), n)
                            : r().createElement(_t, u, n);
                    },
                    Ct = 'BlueArrow_base_ef',
                    Dt = 'BlueArrow_base__active_e8',
                    Bt = ({ isEnabled: e = !1 }) => r().createElement('div', { className: o()(Ct, e && Dt) }),
                    gt = ['type'];
                const ht = (e) => {
                        let u = e.type,
                            t = void 0 === u ? ct.Blue : u,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, gt);
                        return t === ct.Blue ? r().createElement(Bt, n) : null;
                    },
                    bt = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    ft = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function vt() {
                    return (
                        (vt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        vt.apply(null, arguments)
                    );
                }
                const pt = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        a = e.fadeInAnimation,
                        i = e.hide,
                        s = e.maximumNumber,
                        l = e.className,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, ft);
                    const E = n ? null : t,
                        d = 'string' == typeof E;
                    if ((E && !d && E < 0) || 0 === E) return null;
                    const m = E && !d && E > s,
                        _ = o()(
                            bt.base,
                            bt[`base__${u}`],
                            a && bt.base__animated,
                            i && bt.base__hidden,
                            !E && bt.base__pattern,
                            n && bt.base__empty,
                            l,
                        );
                    return r().createElement(
                        'div',
                        vt({ className: _ }, c),
                        r().createElement('div', { className: bt.bg }),
                        r().createElement('div', { className: bt.pattern }),
                        r().createElement(
                            'div',
                            { className: o()(bt.value, d && bt.value__text) },
                            m ? s : E,
                            m && r().createElement('span', { className: bt.plus }, '+'),
                        ),
                    );
                };
                pt.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const wt = {
                        base: 'ItemPresenter_base_b1',
                        base__small: 'ItemPresenter_base__small_67',
                        base__active: 'ItemPresenter_base__active_db',
                        base__disabled: 'ItemPresenter_base__disabled_2e',
                        icon: 'ItemPresenter_icon_69',
                        icon__small: 'ItemPresenter_icon__small_d2',
                        counter: 'ItemPresenter_counter_90',
                        label: 'ItemPresenter_label_3e',
                        hover: 'ItemPresenter_hover_57',
                        light: 'ItemPresenter_light_ef',
                        indicator: 'ItemPresenter_indicator_5f',
                        name: 'ItemPresenter_name_ae',
                    },
                    yt = ({
                        children: e,
                        sidebarState: u,
                        isComplete: t,
                        icon: n,
                        name: a,
                        iconSmall: i,
                        size: s,
                        unseen: l,
                        onClick: c,
                        classNames: E,
                    }) => {
                        const d = i && s === st.Small,
                            m = 'boolean' == typeof l ? 0 : l,
                            _ = u === lt.Active;
                        return r().createElement(
                            'div',
                            { onClick: () => !_ && c(), className: o()(wt.base, wt[`base__${s}`], wt[`base__${u}`]) },
                            r().createElement('div', { className: wt.hover }),
                            r().createElement('div', { className: o()(wt.light, null == E ? void 0 : E.light) }),
                            n &&
                                r().createElement(
                                    'div',
                                    {
                                        className: o()(wt.icon, d && wt.icon__small),
                                        style: { backgroundImage: `url(${d ? i : n})` },
                                    },
                                    t && r().createElement('div', { className: wt.indicator }),
                                ),
                            a && r().createElement('div', { className: o()(wt.name, null == E ? void 0 : E.name) }, a),
                            Boolean(l) &&
                                r().createElement(
                                    'div',
                                    { className: wt.counter },
                                    r().createElement(pt, { value: m, isEmpty: !m }),
                                ),
                            e && e,
                        );
                    },
                    xt = {
                        base: 'SectionItem_base_ec',
                        arrow: 'SectionItem_arrow_4f',
                        base__small: 'SectionItem_base__small_1e',
                    },
                    St = [
                        'id',
                        'contentRenderer',
                        'sidebarState',
                        'isComplete',
                        'onChange',
                        'size',
                        'tooltipArgs',
                        'activeArrowType',
                    ];
                function Tt() {
                    return (
                        (Tt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Tt.apply(null, arguments)
                    );
                }
                const Nt = (e) => {
                    let u = e.id,
                        t = e.contentRenderer,
                        n = e.sidebarState,
                        i = e.isComplete,
                        s = e.onChange,
                        l = e.size,
                        c = e.tooltipArgs,
                        E = e.activeArrowType,
                        d = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, St);
                    const m = (0, a.useRef)(null),
                        _ = { tabId: u, isActive: n === lt.Active, size: l },
                        A = t && (0, a.cloneElement)(t, _),
                        F = n === lt.Active;
                    return r().createElement(
                        Ft,
                        { tooltipArgs: c },
                        r().createElement(
                            'div',
                            {
                                className: o()(xt.base, xt[`base__${l}`]),
                                ref: m,
                                onMouseEnter: () => !F && w.playHighlight(),
                            },
                            r().createElement(
                                'div',
                                { className: xt.arrow },
                                r().createElement(ht, { size: l, type: E, isEnabled: F }),
                            ),
                            r().createElement(
                                yt,
                                Tt({ sidebarState: n, isComplete: i, onClick: () => s(u), size: l }, d),
                                A,
                            ),
                        ),
                    );
                };
                function kt() {
                    return (
                        (kt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        kt.apply(null, arguments)
                    );
                }
                const Mt = (e, u) => (e.id === u ? lt.Active : lt.Default),
                    Rt = ({ items: e, size: u, activeTabId: t, onChange: n, classNames: i, activeArrowType: s }) => {
                        const l = (0, a.useContext)(ot);
                        return r().createElement(
                            'div',
                            { className: o()(Et.base, Et[`base__${u}`]) },
                            e.map((a, c) => {
                                const E = 1 === e.length;
                                return r().createElement(
                                    'div',
                                    {
                                        className: o()(
                                            Et.item,
                                            E && Et.item__single,
                                            0 === c && !E && Et.item__first,
                                            c === e.length - 1 && !E && Et.item__last,
                                        ),
                                        key: a.id,
                                        ref: (e) => (null == l ? void 0 : l.setSectionItem(e, a.id.toString())),
                                    },
                                    a.sectionName &&
                                        r().createElement(
                                            'div',
                                            { className: o()(Et.title, null == i ? void 0 : i.title) },
                                            a.sectionName,
                                        ),
                                    r().createElement(
                                        Nt,
                                        kt({}, a, {
                                            size: u,
                                            sidebarState: Mt(a, t),
                                            activeArrowType: a.activeArrowType || s,
                                            classNames: i,
                                            onChange: n,
                                            isComplete: a.isComplete,
                                        }),
                                    ),
                                );
                            }),
                        );
                    },
                    Lt = {
                        base: 'Sidebar_base_30',
                        section: 'Sidebar_section_05',
                        section__small: 'Sidebar_section__small_7f',
                    },
                    Ot = ({ classNames: e, items: u, onChange: t, startTabId: n, isTabChangeDisabled: i }) => {
                        const s = it(),
                            l = (0, a.useState)(n),
                            c = l[0],
                            E = l[1],
                            d = (0, Du.D9)(n),
                            m = (0, a.useRef)(null),
                            _ = ((e) =>
                                e.reduce((e, u) => (u.isNewSection && e.push([]), e[e.length - 1].push(u), e), [[]]))(
                                u,
                            ),
                            A = gu(
                                (e) => {
                                    i || (E(e), t(e));
                                },
                                [i, t],
                                400,
                                !0,
                            );
                        return (
                            (0, a.useEffect)(() => {
                                u.find((e) => e.id === n) ? E(n) : console.warn(`Unknown start tabId: ${n} provided`);
                            }, [d, n, u]),
                            r().createElement(
                                'div',
                                { className: o()(Lt.base, null == e ? void 0 : e.base), ref: m },
                                _.map((u, t) => {
                                    const n = u.find((e) => e.id === c);
                                    return r().createElement(
                                        'div',
                                        { className: o()(Lt.section, Lt[`section__${s ? st.Big : st.Small}`]), key: t },
                                        r().createElement(Rt, {
                                            items: u,
                                            size: s ? st.Big : st.Small,
                                            activeTabId: null == n ? void 0 : n.id,
                                            classNames: e,
                                            onChange: A,
                                        }),
                                    );
                                }),
                            )
                        );
                    },
                    It = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    },
                    Ht = 'BaseCounter_base_f0',
                    Pt = 'BaseCounter_plus_e0',
                    Gt = (e, u, t, n) => (t && !n ? u : e),
                    Wt = (0, a.memo)(
                        ({
                            valueFrom: e,
                            valueTo: u,
                            isDisabled: t = !0,
                            isPreAnimation: n = !1,
                            duration: i = 1e3,
                            hasPlus: o = !1,
                            onAnimationComplete: s,
                        }) => {
                            const l = (0, a.useState)(() => Gt(e, u, t, n)),
                                c = l[0],
                                E = l[1],
                                d = (0, a.useRef)(0),
                                m = (0, a.useCallback)(() => {
                                    cancelAnimationFrame(d.current), s();
                                }, [s]);
                            return (
                                (0, a.useEffect)(() => {
                                    (t || n) && E(Gt(e, u, t, n));
                                }, [e, u, t, n]),
                                (0, a.useEffect)(() => {
                                    if (!t && !n) {
                                        const t = (n, a) => {
                                            const r = Math.min((n - a) / i, 1),
                                                o = Math.floor(r * (u - e) + e);
                                            E(o), r < 1 ? (d.current = requestAnimationFrame((e) => t(e, a))) : m();
                                        };
                                        d.current = requestAnimationFrame((e) => t(e, e));
                                    }
                                }, [i, e, u, s, t, n, m]),
                                r().createElement(
                                    'div',
                                    { className: Ht },
                                    r().createElement(q, { value: c }),
                                    o && r().createElement('div', { className: Pt }, '+'),
                                )
                            );
                        },
                    ),
                    Ut = (e, u) => {
                        const t = Math.min(e, u);
                        return { countFrom: t, countTo: t, isDecrement: !1 };
                    },
                    jt = {
                        base: 'CounterWithGlow_base_59',
                        base__small: 'CounterWithGlow_base__small_c8',
                        base__disabled: 'CounterWithGlow_base__disabled_3f',
                        amount: 'CounterWithGlow_amount_36',
                    },
                    zt = 33,
                    $t = 0,
                    Kt = !0,
                    Vt = 'play';
                const qt = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function Yt() {
                    return (
                        (Yt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Yt.apply(null, arguments)
                    );
                }
                const Zt = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            n = e.getImageSource,
                            i = e.frameCount,
                            o = e.onAnimate,
                            s = e.frameTime,
                            l = void 0 === s ? zt : s,
                            c = e.initialFrameIndex,
                            E = void 0 === c ? $t : c,
                            d = e.lastFrameIndex,
                            m = void 0 === d ? i - 1 : d,
                            _ = e.loop,
                            A = void 0 === _ ? Kt : _,
                            F = e.state,
                            C = void 0 === F ? Vt : F,
                            D = e.onAnimationDone,
                            B = e.onAnimationComplete,
                            g = e.poster,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, qt);
                        const b = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = b.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (C) {
                                    case 'play':
                                        return (function () {
                                            const e = Jt(E, m, n),
                                                u = Xt(E, m),
                                                a = window.setInterval(() => {
                                                    const n = u(),
                                                        r = e.get(n);
                                                    r
                                                        ? (null == o || o(n, r),
                                                          t(r),
                                                          n === m &&
                                                              (null == B || B(),
                                                              A || (null == D || D(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === E && g ? { path: g, x: 0, y: 0 } : n(E),
                                                u = new Image();
                                            u.src = e.path;
                                            const a = () => t(Qt(e, u));
                                            return (
                                                u.addEventListener('load', a), () => u.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, n, E, m, A, o, B, D, g, C]),
                            r().createElement('canvas', Yt({}, h, { width: u, height: t, ref: b }))
                        );
                    }),
                    Xt = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return (t += 1), t > u && (t = e), n;
                        };
                    },
                    Qt = (e, u) => Object.assign({}, e, { img: u }),
                    Jt = (e, u, t) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= u; r++) {
                            const e = t(r),
                                u = a[e.path];
                            if (u) n.set(r, Qt(e, u));
                            else {
                                const u = new Image();
                                (a[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, Qt(e, u));
                            }
                        }
                        return n;
                    };
                function en(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (n) => {
                        const a = n % t,
                            r = (a % u.columns) * e.width,
                            i = Math.trunc(a / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / t)), x: r, y: i };
                    };
                }
                function un(e) {
                    return (u) => `${e}${u}`;
                }
                var tn = t(7044);
                const nn = 'Glow_base_ee',
                    an = 'Glow_base__increment_42',
                    rn = 'Glow_base__decrement_13',
                    on = 'Glow_animation_3f',
                    sn = {
                        width: 400,
                        height: 300,
                        frameCount: 95,
                        chunk: { count: 2, rows: 8, columns: 6 },
                        getChunkPath: un('R.images.gui.maps.icons.newYear.common.counter_with_glow.increment.sprite_'),
                    },
                    ln = {
                        width: 400,
                        height: 300,
                        frameCount: 80,
                        chunk: { count: 2, rows: 8, columns: 5 },
                        getChunkPath: un('R.images.gui.maps.icons.newYear.common.counter_with_glow.decrement.sprite_'),
                    },
                    cn = en(sn),
                    En = en(ln),
                    dn = (0, a.memo)(({ isDecrement: e = !1 }) =>
                        r().createElement(
                            'div',
                            { className: o()(nn, e ? rn : an) },
                            r().createElement(Zt, {
                                width: 400,
                                height: 300,
                                frameCount: e ? ln.frameCount : sn.frameCount,
                                frameTime: tn.s_ / 50,
                                className: on,
                                getImageSource: e ? En : cn,
                                loop: !1,
                            }),
                        ),
                    );
                let mn, _n;
                !(function (e) {
                    (e.Small = 'small'), (e.Normal = 'normal'), (e.Default = 'normal');
                })(mn || (mn = {})),
                    (function (e) {
                        (e.Init = 'init'),
                            (e.ShowGlow = 'showGlow'),
                            (e.StartCount = 'startCount'),
                            (e.FinishCount = 'finishCount'),
                            (e.Done = 'done');
                    })(_n || (_n = {}));
                const An = ({ count: e, hasSound: u, maxCount: t = 999999, size: n = mn.Default }) => {
                        const i = (0, a.useState)(_n.Init),
                            s = i[0],
                            l = i[1],
                            c = (0, a.useRef)(e),
                            E = ((e, u, t = 999999) => {
                                const n = (0, a.useRef)(e),
                                    r = (0, Du.D9)(u),
                                    i = (0, a.useState)(() => Ut(e, t)),
                                    o = i[0],
                                    s = i[1];
                                (0, a.useEffect)(() => {
                                    const u = Math.min(n.current, t),
                                        a = Math.min(e, t);
                                    (u === a && n.current === e) ||
                                        s({ countFrom: u, countTo: a, isDecrement: n.current > e });
                                }, [e, t]),
                                    (0, a.useEffect)(() => {
                                        r && !u && s(Ut(o.countTo, t));
                                    }, [o.countTo, u, t, r]);
                                const l = (0, a.useCallback)(() => {
                                    n.current = e;
                                }, [e]);
                                return [o, { handleAnimationEnd: l }];
                            })(e, s !== _n.Init, t),
                            d = E[0],
                            m = d.countFrom,
                            _ = d.countTo,
                            A = d.isDecrement,
                            F = E[1].handleAnimationEnd;
                        (0, a.useEffect)(() => {
                            e !== c.current && (l(_n.ShowGlow), (c.current = e));
                        }, [e]);
                        const C = (0, a.useCallback)(() => {
                            l(_n.FinishCount);
                        }, []);
                        return (
                            (0, a.useEffect)(() => {
                                switch (s) {
                                    case _n.ShowGlow:
                                        return It(() => {
                                            u &&
                                                p(
                                                    R.sounds[
                                                        A
                                                            ? 'hangar_newyear_debrises_spend'
                                                            : 'hangar_newyear_debrises_get'
                                                    ](),
                                                ),
                                                l(_n.StartCount);
                                        }, 800);
                                    case _n.FinishCount:
                                        return It(() => l(_n.Done), 800);
                                    case _n.Done:
                                        return It(() => {
                                            l(_n.Init), F();
                                        }, 300);
                                    default:
                                        return;
                                }
                            }, [s, A, u, F]),
                            r().createElement(
                                'div',
                                { className: o()(jt.base, 0 === m && 0 === _ && jt.base__disabled, jt[`base__${n}`]) },
                                s !== _n.Init && r().createElement(dn, { isDecrement: A, key: _ }),
                                r().createElement(
                                    'div',
                                    { className: jt.amount },
                                    r().createElement(Wt, {
                                        key: `${m}-${_}`,
                                        valueFrom: m,
                                        valueTo: _,
                                        hasPlus: e > t,
                                        duration: 800,
                                        isDisabled: s !== _n.StartCount,
                                        isPreAnimation: s === _n.ShowGlow,
                                        onAnimationComplete: C,
                                    }),
                                ),
                            )
                        );
                    },
                    Fn = 'Tab_base_fd',
                    Cn = 'Tab_icon_d9',
                    Dn = 'Tab_amount_45',
                    Bn = 'Tab_counter_bd',
                    gn = (0, a.memo)(({ infoCount: e, name: u, unseenCount: t }) => {
                        const n = 1 === t,
                            a = it(),
                            i = {
                                backgroundImage: `url(${R.images.gui.maps.icons.newYear.sidebar.$dyn(`${u}${a ? '' : '_small'}`)})`,
                            };
                        return r().createElement(
                            'div',
                            { className: Fn },
                            r().createElement('div', { className: Cn, style: i }),
                            r().createElement(
                                'div',
                                { className: Dn },
                                r().createElement(An, { count: e, maxCount: 999, size: a ? mn.Normal : mn.Small }),
                            ),
                            n && r().createElement('div', { className: Bn }, r().createElement(pt, { isEmpty: n })),
                        );
                    }),
                    hn = (0, I.Pi)(() => {
                        const e = Cu(),
                            u = e.model,
                            t = e.model.computes,
                            n = e.controls,
                            a = u.root.get(),
                            i = a.isBoxChangeAnimation,
                            o = a.currentName,
                            s = qu.Wt.map(t.tabs(), (e) => ({
                                id: e.name,
                                contentRenderer: r().createElement(gn, e),
                                isDisabled: i,
                                tooltipArgs: {
                                    contentId:
                                        R.views.lobby.tooltips.loot_box_category_tooltip.LootBoxCategoryTooltipContent(
                                            'resId',
                                        ),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: { category: e.name },
                                },
                            }));
                        return r().createElement(Ot, {
                            items: s,
                            onChange: n.changeTab,
                            startTabId: o,
                            isTabChangeDisabled: i,
                        });
                    }),
                    bn = {
                        base: 'TriggerHint_base_11',
                        bg: 'TriggerHint_bg_16',
                        base__blue: 'TriggerHint_base__blue_29',
                        content: 'TriggerHint_content_f8',
                        border: 'TriggerHint_border_87',
                        base__visible: 'TriggerHint_base__visible_ba',
                        triggerHolder: 'TriggerHint_triggerHolder_46',
                        base__right: 'TriggerHint_base__right_3e',
                        base__left: 'TriggerHint_base__left_dd',
                        base__up: 'TriggerHint_base__up_bb',
                        text: 'TriggerHint_text_f7',
                        animationArrow: 'TriggerHint_animationArrow_2c',
                        arrow: 'TriggerHint_arrow_fd',
                        blink: 'TriggerHint_blink_26',
                        base__cyan: 'TriggerHint_base__cyan_5d',
                        base__withoutAnimation: 'TriggerHint_base__withoutAnimation_19',
                    };
                let fn, vn;
                !(function (e) {
                    (e.Blue = 'blue'), (e.Cyan = 'cyan');
                })(fn || (fn = {})),
                    (function (e) {
                        (e.Right = 'right'), (e.Left = 'left'), (e.Up = 'up'), (e.Down = 'down');
                    })(vn || (vn = {}));
                const pn = ({
                        direction: e = vn.Right,
                        text: u,
                        isVisible: t,
                        children: n,
                        hintType: a = fn.Blue,
                        classNames: i,
                    }) => {
                        const s = N.O.client.graphicsQuality.isLow();
                        return r().createElement(
                            'div',
                            {
                                className: o()(
                                    bn.base,
                                    bn[`base__${a}`],
                                    bn[`base__${e}`],
                                    t && bn.base__visible,
                                    s && bn.base__withoutAnimation,
                                    null == i ? void 0 : i.base,
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: o()(bn.content, null == i ? void 0 : i.content) },
                                r().createElement('div', { className: o()(bn.border, null == i ? void 0 : i.border) }),
                                n,
                            ),
                            r().createElement(
                                'div',
                                { className: o()(bn.triggerHolder, null == i ? void 0 : i.holder) },
                                r().createElement('div', { className: o()(bn.bg, null == i ? void 0 : i.arrowBg) }),
                                r().createElement(
                                    'div',
                                    { className: o()(bn.animationArrow, null == i ? void 0 : i.arrow) },
                                    r().createElement('div', { className: bn.arrow }),
                                ),
                                r().createElement('div', { className: o()(bn.text, null == i ? void 0 : i.text) }, u),
                            ),
                        );
                    },
                    wn = 'StatisticsButton_base_2d',
                    yn = R.strings.ny.rewardKitStatistics.tooltip,
                    xn = ({ onClick: e, classNames: u }) =>
                        r().createElement(
                            le,
                            {
                                header: yn.header(),
                                body: yn.body(),
                                onClick: () => {
                                    w.playClick(), null == e || e();
                                },
                            },
                            r().createElement('div', {
                                className: o()(wn, null == u ? void 0 : u.base),
                                onMouseEnter: () => {
                                    w.playHighlight();
                                },
                            }),
                        ),
                    Sn = 'StatisticButtonContainer_base_d6',
                    Tn = 'StatisticButtonContainer_base__contrasted_4e',
                    Nn = (0, I.Pi)(({ showStatistics: e }) => {
                        const u = _().mediaWidth,
                            t = Cu().model;
                        return r().createElement(
                            pn,
                            {
                                text: R.strings.ny.rewardKitStatistics.triggerHint(),
                                hintType: fn.Cyan,
                                isVisible: t.root.get().isStatisticsHintActive,
                                classNames: { arrowBg: o()(Sn, u < d.Small && Tn) },
                            },
                            r().createElement(xn, { onClick: e }),
                        );
                    }),
                    kn = 'App_base_be',
                    Mn = 'App_base__visible_a8',
                    Rn = 'App_statisticsButton_09',
                    Ln = 'App_closeBtn_57',
                    On = 'App_sidebar_de',
                    In = 'App_main_72',
                    Hn = 'App_animationSwitcher_5b',
                    Pn = (0, I.Pi)(() => {
                        const e = Cu(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            i = n.isViewHidden,
                            s = n.isVideoOff,
                            l = n.isBoxOpenEnabled,
                            c = (0, a.useState)(!1),
                            E = c[0],
                            d = c[1],
                            m = (0, a.useState)(!1),
                            _ = m[0],
                            A = m[1];
                        var F;
                        return (
                            (F = () => {
                                _ ? A(!1) : t.closeWindow();
                            }),
                            O(k.n.ESCAPE, F),
                            ((e, u) => {
                                (0, a.useEffect)(() => {
                                    let u = null;
                                    return (
                                        (u = requestAnimationFrame(() => {
                                            u = requestAnimationFrame(() => {
                                                (u = null), e();
                                            });
                                        })),
                                        () => {
                                            null !== u && cancelAnimationFrame(u);
                                        }
                                    );
                                }, u);
                            })(() => {
                                d(!0);
                            }, []),
                            r().createElement(
                                'div',
                                { className: o()(kn, !i && E && Mn), lang: R.strings.settings.LANGUAGE_CODE() },
                                r().createElement(su, {
                                    isVisible: _,
                                    rewards: u.rewards.get(),
                                    resources: u.resources.get(),
                                    boxesCount: u.rewardKitStatistics.get().count,
                                    isResetFailed: u.rewardKitStatistics.get().isResetFailed,
                                    resourcesTotalCount: u.rewardKitStatistics.get().totalResourcesCount,
                                    closeStatistics: () => A(!1),
                                    resetStatistics: () => t.resetStatistics(),
                                }),
                                r().createElement(
                                    'div',
                                    { className: Ln },
                                    r().createElement(T, {
                                        caption: R.strings.ny.rewardKit.upper.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.closeWindow,
                                    }),
                                ),
                                r().createElement('div', { className: In }, r().createElement(at, null)),
                                r().createElement('div', { className: On }, r().createElement(hn, null)),
                                r().createElement(
                                    'div',
                                    { className: Hn },
                                    r().createElement(K, {
                                        text: R.strings.ny.rewardKitMain.buttonLabel.videoSwitch(),
                                        isChecked: !s,
                                        onClick: t.animationSwitch,
                                        isDisabled: !l,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Rn },
                                    r().createElement(Nn, {
                                        showStatistics: () => {
                                            t.updateLastSeen(), A(!0);
                                        },
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    v().render(
                        r().createElement(b, null, r().createElement(Fu, null, r().createElement(Pn, null))),
                        document.getElementById('root'),
                    );
                });
            },
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 8239),
        (() => {
            var e = { 8239: 0, 4840: 0, 7188: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(8509));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
