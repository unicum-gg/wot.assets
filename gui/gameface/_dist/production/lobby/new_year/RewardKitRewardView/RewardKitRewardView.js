(() => {
    var __webpack_modules__ = {
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var a = t(6483),
                    n = t.n(a),
                    r = t(3649),
                    i = t(6179),
                    o = t.n(i),
                    s = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: a = r.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, r.WU)(u, e) : u;
                    return o().createElement(
                        i.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            o().createElement(
                                'div',
                                { className: n()(s.Z.base, t), key: `${u}-${l}` },
                                (0, r.Uw)(u, a, e).map((e, u) =>
                                    o().createElement(i.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => a.z });
                var a = t(280);
                t(8082);
            },
            8082: (e, u, t) => {
                'use strict';
                t(3649);
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => d });
                var a = t(3138),
                    n = t(6179),
                    r = t(1043),
                    i = t(5262);
                const o = a.O.client.getSize('rem'),
                    s = o.width,
                    l = o.height,
                    c = Object.assign({ width: s, height: l }, (0, i.T)(s, l, r.j)),
                    d = (0, n.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var a = t(3138),
                    n = t(6536),
                    r = t(6179),
                    i = t.n(r),
                    o = t(3495),
                    s = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, r.useContext)(o.Y),
                        t = (0, r.useState)(u),
                        c = t[0],
                        d = t[1],
                        _ = (0, r.useCallback)((e, u) => {
                            const t = a.O.view.pxToRem(e),
                                n = a.O.view.pxToRem(u);
                            d(Object.assign({ width: t, height: n }, (0, l.T)(t, n, s.j)));
                        }, []),
                        m = (0, r.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    ((0, n.Z)(() => {
                        (a.O.client.events.on('clientResized', _), a.O.client.events.on('self.onScaleUpdated', m));
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                (a.O.client.events.off('clientResized', _),
                                    a.O.client.events.off('self.onScaleUpdated', m));
                            },
                            [_, m],
                        ));
                    const E = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return i().createElement(o.Y.Provider, { value: E }, e);
                };
            },
            6010: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    n = t(7382),
                    r = t(3495);
                const i = ['children'];
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, i);
                    const o = (0, a.useContext)(r.Y),
                        s = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        d = o.small,
                        _ = o.extraSmall,
                        m = o.extraLargeWidth,
                        E = o.largeWidth,
                        A = o.mediumWidth,
                        F = o.smallWidth,
                        C = o.extraSmallWidth,
                        D = o.extraLargeHeight,
                        B = o.largeHeight,
                        h = o.mediumHeight,
                        g = o.smallHeight,
                        p = o.extraSmallHeight,
                        b = { extraLarge: D, large: B, medium: h, small: g, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && d) return u;
                        if (t.extraSmall && _) return u;
                    } else {
                        if (t.extraLargeWidth && m) return (0, n.H)(u, t, b);
                        if (t.largeWidth && E) return (0, n.H)(u, t, b);
                        if (t.mediumWidth && A) return (0, n.H)(u, t, b);
                        if (t.smallWidth && F) return (0, n.H)(u, t, b);
                        if (t.extraSmallWidth && C) return (0, n.H)(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && g) return u;
                            if (t.extraSmallHeight && p) return u;
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
                (0, a.memo)(o);
            },
            7382: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => a });
                const a = (e, u, t) =>
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
                t.d(u, { YN: () => n.Y, ZN: () => a.Z });
                t(6010);
                var a = t(1039),
                    n = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var a;
                function n(e, u, t) {
                    const a = (function (e, u) {
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
                        n = (function (e, u) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                (t.d(u, { T: () => n }),
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
                    })(a || (a = {})));
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var a = t(7902),
                    n = t(9916),
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
                const s = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            E = void 0 !== m && m,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            C = e.decoratorId,
                            D = void 0 === C ? 0 : C,
                            B = e.isEnabled,
                            h = void 0 === B || B,
                            g = e.targetId,
                            p = void 0 === g ? 0 : g,
                            b = e.onShow,
                            f = e.onHide,
                            w = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, i);
                        const v = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => p || (0, a.F)().resId, [p]),
                            R = (0, r.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (s(t, D, { isMouseEvent: !0, on: !0, arguments: o(n) }, y),
                                    b && b(),
                                    (v.current.isVisible = !0));
                            }, [t, D, n, y, b]),
                            S = (0, r.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        s(t, D, { on: !1 }, y),
                                        v.current.isVisible && f && f(),
                                        (v.current.isVisible = !1));
                                }
                            }, [t, D, y, f]),
                            x = (0, r.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(v.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === h && S();
                            }, [h, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return h
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(R, E ? 100 : 400)),
                                                      l && l(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (S(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === F && S(), null == _ || _(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === F && S(), null == d || d(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      w,
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
                t.d(u, { s_: () => n });
                (t(3649), t(9916));
                var a = t(8613);
                const n = 1e3;
                (Date.now(), a.Ew.getRegionalDateTime, a.Ew.getFormattedDateTime);
            },
            527: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i }));
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${u}`,
                                        i = l[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        a(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
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
                            ((e.enabled = !1), a());
                        },
                        enable() {
                            ((e.enabled = !0), a());
                        },
                        enableOutside() {
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var a = t(527),
                    n = t(2493);
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
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2493: (e, u, t) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var a = t(5959),
                    n = t(514);
                const r = { view: t(7641), client: a, sound: n.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => o, hY: () => i });
                var a = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, a.playSound)(n[u])), e), {}),
                    i = Object.assign({}, r, { sound: a.playSound }),
                    o = { play: i, setRTPC: a.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var a = t(2472);
                const n = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => y,
                        events: () => r.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getFontNames: () => v,
                        getScale: () => C,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => b,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => S,
                    }));
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                const o = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function c(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
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
                function h(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const v = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    R = {
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
                const a = ['args'];
                const n = 2,
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
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
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
                        var n;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? n : i);
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
                t.d(u, { F: () => a });
                const a = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        a = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (a = window.subViews[t].id)),
                        { caller: t, stack: u, resId: a }
                    );
                };
            },
            2344: (e, u, t) => {
                'use strict';
                t.d(u, { D9: () => r, er: () => i });
                (t(3469), t(2133));
                var a = t(2790),
                    n = t(3779);
                (t(579), t(5360), t(9056));
                const r = a.Z,
                    i = n.Z;
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(6179);
                const n = (e) => {
                    const u = (0, a.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            3469: (e, u, t) => {
                'use strict';
                (t(7044), t(6179));
            },
            2133: (e, u, t) => {
                'use strict';
                t(6179);
            },
            5360: (e, u, t) => {
                'use strict';
                t(6536);
                var a = t(9916);
                t(6179);
                a.Sw.instance;
                let n;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(n || (n = {}));
            },
            9056: (e, u, t) => {
                'use strict';
                var a = t(9916);
                t(6179);
                a.Sw.instance;
            },
            2790: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(6179);
                const n = (e, u) => {
                    const t = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            (u && !u(e)) || (t.current = e);
                        }, [u, e]),
                        t.current
                    );
                };
            },
            3779: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(6179);
                const n = (e, u, t = []) => {
                    const n = (0, a.useRef)(new Date().getTime());
                    (0, a.useEffect)(() => {
                        let t = 0;
                        const a = () => {
                            t = requestAnimationFrame(a);
                            new Date().getTime() - n.current >= u && (e(), cancelAnimationFrame(t));
                        };
                        return (
                            a(),
                            () => {
                                cancelAnimationFrame(t);
                            }
                        );
                    }, t);
                };
            },
            579: (e, u, t) => {
                'use strict';
                (t(3138), t(6179));
            },
            5521: (e, u, t) => {
                'use strict';
                let a, n;
                (t.d(u, { n: () => a }),
                    (function (e) {
                        ((e[(e.NONE = -1)] = 'NONE'),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.ALT = 'Alt'),
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
                            (e.SYMBOL_LOCK = 'SymbolLock'));
                    })(n || (n = {})));
            },
            3649: (e, u, t) => {
                'use strict';
                t.d(u, { Uw: () => E, WU: () => r, uF: () => i, v2: () => n });
                var a = t(1281);
                let n;
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
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(n || (n = {}));
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
                    c = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? s : l, []),
                    d = (() => {
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
                    _ = ['zh_cn', 'zh_sg', 'zh_tw'],
                    m = (e, u = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (_.includes(t)) return d(e);
                        if ('ja' === t) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => o(e));
                        }
                        return ((e, u = n.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = o(e);
                            return (c(r, /( )/, u).forEach((e) => (t = t.concat(c(e, a, n.left)))), t);
                        })(e, u);
                    },
                    E = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : m(e, u)));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(3138);
                class n {
                    constructor() {
                        ((this._callbacks = void 0),
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
                            (this._updateHandler = void 0));
                    }
                    static get instance() {
                        return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, t, n);
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        ((this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                ((this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(e) {
                        (this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data));
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (e, u, t) => {
                'use strict';
                t.d(u, {
                    c1: () => p,
                    Sw: () => r.Z,
                    B3: () => s,
                    Z5: () => i.Z5,
                    B0: () => o,
                    ry: () => C,
                    Sy: () => B,
                });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
                            this.removeMouseListener());
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
                a.__instance = void 0;
                const n = a;
                var r = t(1358);
                var i = t(8613);
                let o;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    m = t(3138);
                const E = ['args'];
                function A(e, u, t, a, n, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(a, n);
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            A(r, a, n, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            A(r, a, n, i, o, 'throw', e);
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
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, E);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, u]) => {
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
                        var a;
                    },
                    B = () => D(o.CLOSE),
                    h = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var g = t(7572);
                const p = n.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: g.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => D(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                _ = s.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            D(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, B);
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
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            2698: (e, u, t) => {
                'use strict';
                var a = t(7739),
                    n = t(6179),
                    r = t.n(n),
                    i = t(6483),
                    o = t.n(i),
                    s = t(926),
                    l = t.n(s),
                    c = t(1043);
                let d, _, m;
                (!(function (e) {
                    ((e[(e.ExtraSmall = c.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = c.j.small.width)] = 'Small'),
                        (e[(e.Medium = c.j.medium.width)] = 'Medium'),
                        (e[(e.Large = c.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = c.j.extraLarge.width)] = 'ExtraLarge'));
                })(d || (d = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = c.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = c.j.small.width)] = 'Small'),
                            (e[(e.Medium = c.j.medium.width)] = 'Medium'),
                            (e[(e.Large = c.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = c.j.extraLarge.width)] = 'ExtraLarge'));
                    })(_ || (_ = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = c.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = c.j.small.height)] = 'Small'),
                            (e[(e.Medium = c.j.medium.height)] = 'Medium'),
                            (e[(e.Large = c.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = c.j.extraLarge.height)] = 'ExtraLarge'));
                    })(m || (m = {})));
                const E = () => {
                        const e = (0, n.useContext)(a.YN),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return d.ExtraLarge;
                                    case e.large:
                                        return d.Large;
                                    case e.medium:
                                        return d.Medium;
                                    case e.small:
                                        return d.Small;
                                    case e.extraSmall:
                                        return d.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), d.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return _.ExtraLarge;
                                    case e.largeWidth:
                                        return _.Large;
                                    case e.mediumWidth:
                                        return _.Medium;
                                    case e.smallWidth:
                                        return _.Small;
                                    case e.extraSmallWidth:
                                        return _.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), _.ExtraSmall);
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
                                        return (console.error('Unreachable media context resolution'), m.ExtraSmall);
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
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        F.apply(null, arguments)
                    );
                }
                const C = {
                        [_.ExtraSmall]: '',
                        [_.Small]: l().SMALL_WIDTH,
                        [_.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [_.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [_.ExtraLarge]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    D = {
                        [m.ExtraSmall]: '',
                        [m.Small]: l().SMALL_HEIGHT,
                        [m.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [m.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [m.ExtraLarge]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    B = {
                        [d.ExtraSmall]: '',
                        [d.Small]: l().SMALL,
                        [d.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [d.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [d.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    h = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, A);
                        const n = E(),
                            i = n.mediaWidth,
                            s = n.mediaHeight,
                            l = n.mediaSize;
                        return r().createElement('div', F({ className: o()(t, C[i], D[s], B[l]) }, a), u);
                    },
                    g = ['children'];
                const p = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, g);
                    return r().createElement(a.ZN, null, r().createElement(h, t, u));
                };
                var b = t(493),
                    f = t.n(b),
                    w = t(2344);
                let v;
                !(function (e) {
                    ((e[(e.Space = 32)] = 'Space'),
                        (e[(e.Enter = 13)] = 'Enter'),
                        (e[(e.A = 65)] = 'A'),
                        (e[(e.B = 66)] = 'B'),
                        (e[(e.C = 67)] = 'C'),
                        (e[(e.D = 68)] = 'D'),
                        (e[(e.E = 69)] = 'E'),
                        (e[(e.F = 70)] = 'F'),
                        (e[(e.G = 71)] = 'G'),
                        (e[(e.H = 72)] = 'H'),
                        (e[(e.I = 73)] = 'I'),
                        (e[(e.J = 74)] = 'J'),
                        (e[(e.K = 75)] = 'K'),
                        (e[(e.L = 76)] = 'L'),
                        (e[(e.M = 77)] = 'M'),
                        (e[(e.N = 78)] = 'N'),
                        (e[(e.O = 79)] = 'O'),
                        (e[(e.P = 80)] = 'P'),
                        (e[(e.Q = 81)] = 'Q'),
                        (e[(e.R = 82)] = 'R'),
                        (e[(e.S = 83)] = 'S'),
                        (e[(e.T = 84)] = 'T'),
                        (e[(e.U = 85)] = 'U'),
                        (e[(e.V = 86)] = 'V'),
                        (e[(e.W = 87)] = 'W'),
                        (e[(e.X = 88)] = 'X'),
                        (e[(e.Y = 89)] = 'Y'),
                        (e[(e.Z = 90)] = 'Z'));
                })(v || (v = {}));
                const y = (e = {}) => {
                        (0, n.useEffect)(() => {
                            const u = (u) => {
                                if (!u.altKey && !u.ctrlKey && !u.shiftKey) {
                                    const t = e[u.keyCode];
                                    'function' == typeof t && t(u);
                                }
                            };
                            return (
                                window.addEventListener('keyup', u),
                                () => {
                                    window.removeEventListener('keyup', u);
                                }
                            );
                        }, [e]);
                    },
                    S = (e, u) => {
                        (0, n.useEffect)(() => {
                            let u = null;
                            return (
                                (u = requestAnimationFrame(() => {
                                    u = requestAnimationFrame(() => {
                                        ((u = null), e());
                                    });
                                })),
                                () => {
                                    null !== u && cancelAnimationFrame(u);
                                }
                            );
                        }, u);
                    };
                var x = t(5521),
                    N = t(9916),
                    I = t(3403);
                let k, T, L, O, M, H, P, W;
                (!(function (e) {
                    ((e.Undefined = 'undefined'),
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
                        (e.Surprise = 'Surprise'));
                })(k || (k = {})),
                    (function (e) {
                        ((e.Crystal = 'ny_crystal'),
                            (e.Emerald = 'ny_emerald'),
                            (e.Amber = 'ny_amber'),
                            (e.Iron = 'ny_iron'),
                            (e.AnyResource = 'anyResource'));
                    })(T || (T = {})),
                    (function (e) {
                        ((e.XP = 'xpFactor'),
                            (e.TankmenXP = 'tankmenXPFactor'),
                            (e.FreeXp = 'freeXPFactor'),
                            (e.Credits = 'creditsFactor'));
                    })(L || (L = {})),
                    (function (e) {
                        ((e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental'));
                    })(O || (O = {})),
                    (function (e) {
                        ((e.Level1 = 'level1'), (e.Level2 = 'level2'), (e.Level3 = 'level3'), (e.Level4 = 'level4'));
                    })(M || (M = {})),
                    (function (e) {
                        ((e.Zero = 'zero'), (e.Number = 'number'), (e.Default = 'default'));
                    })(H || (H = {})),
                    (function (e) {
                        ((e.Undefined = 'undefined'),
                            (e.ToEvent = 'toEvent'),
                            (e.ToGuestD = 'toGuestD'),
                            (e.ToGuestC = 'toGuestC'),
                            (e.ToMarkertplace = 'toMarkertplace'),
                            (e.ToGiftmachine = 'toGiftmachine'),
                            (e.ToRewards = 'toRewards'));
                    })(P || (P = {})),
                    (function (e) {
                        ((e.Def = 'LootDefRenderer'),
                            (e.Video = 'LootVideoRenderer'),
                            (e.Vehicle = 'LootVehicleRenderer'),
                            (e.VehicleVideo = 'LootVehicleVideoRenderer'),
                            (e.Animated = 'LootAnimatedRenderer'),
                            (e.Conversion = 'LootConversionRenderer'),
                            (e.Compensation = 'LootCompensationRenderer'),
                            (e.VehicleCompensation = 'VehicleCompensationRenderer'),
                            (e.VehicleCompensationWithoutAnimation = 'VehicleCompensationWithoutAnimationRenderer'),
                            (e.BlueprintFinalFragment = 'BlueprintFinalFragmentRenderer'),
                            (e.CrewBook = 'CrewBookRenderer'),
                            (e.NewYearToy = 'LootNewYearToyRenderer'),
                            (e.Attachment = 'LootAttachmentRenderer'),
                            (e.SpecialAttachment = 'LootAttachmentSpecialRenderer'));
                    })(W || (W = {})));
                const G = [T.Iron, T.Crystal, T.Emerald, T.Amber],
                    V = (e) => e.startsWith('modernized'),
                    z = (e) =>
                        e.rendererType === W.VehicleVideo ||
                        e.rendererType === W.SpecialAttachment ||
                        e.rendererType === W.Vehicle,
                    $ = (e) => e.rendererType === W.VehicleCompensation,
                    U = (e) => e.rendererType === W.Attachment,
                    j = (e) => e.rendererType === W.SpecialAttachment;
                let Z, q;
                (!(function (e) {
                    ((e.CongratTypeVehicle = 'VehicleLootBoxCongrats'),
                        (e.CongratTypeStyle = 'StyleLootBoxCongrats'),
                        (e.CongratTypeAttachment = 'AttachmentLootBoxCongrats'));
                })(Z || (Z = {})),
                    (function (e) {
                        ((e.Gold = 'gold'), (e.Silver = 'silver'));
                    })(q || (q = {})));
                const K = (e) => {
                    const u = e && e.filter((e) => z(e))[0],
                        t = e && e.filter((e) => j(e))[0],
                        a = e && e.filter((e) => U(e))[0];
                    if (u && z(u)) {
                        const e = u;
                        return t && j(t)
                            ? { congratsType: t.congratsViewModel.congratsType, intCD: t.congratsViewModel.intCD }
                            : {
                                  congratsType: e.congratsViewModel.congratsType,
                                  vehicleName: e.congratsViewModel.vehicleName,
                                  vehicleLvl: e.congratsViewModel.vehicleLvl,
                                  vehicleIsElite: e.congratsViewModel.vehicleIsElite,
                                  vehicleType: e.congratsViewModel.vehicleType,
                                  sourceName: e.videoSrc,
                                  congratsSourceId: e.congratsViewModel.congratsSourceId,
                              };
                    }
                    return a && 'rare' === a.rarity ? { congratsType: 'AttachmentLootBoxCongrats' } : null;
                };
                function Y() {
                    return !1;
                }
                console.log;
                var X = t(9174),
                    Q = t(3138);
                function J(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return ee(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? ee(e, u)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ee(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const ue = (e) => (0 === e ? window : window.subViews.get(e));
                function te(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function ae(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const ne = ae;
                function re(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let n = 0; n < e.length; n++) {
                        var a;
                        const r = null == (a = e[n]) ? void 0 : a.value;
                        u(r, n, e) && t.push(r);
                    }
                    return t;
                }
                function ie(e, u) {
                    return (function (e, u, t) {
                        const a = [];
                        for (let n = 0; n < e.length; n++) {
                            const r = ne(e, n);
                            u(r, n, e) && a.push(t(r, n, e));
                        }
                        return a;
                    })(e, te, u);
                }
                var oe = t(3946);
                const se = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: i, children: o, mocks: s }) {
                                const l = (0, n.useRef)([]),
                                    c = (t, a, n) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ue,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const n = t(u),
                                                        r = a.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                            s = Q.O.view.addModelObserver(o, u, !0);
                                                        return (n.set(s, t), e && t(i(r)), s);
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
                                                        for (var e, t = J(n.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            o =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            c = (e) => l.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const a = null != u ? u : s(e),
                                                            n = X.LO.box(a, { equals: Y });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, X.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const a = null != u ? u : s(e),
                                                            n = X.LO.box(a, { equals: Y });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, X.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const a = s(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = X.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, X.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                r = Object.entries(n),
                                                                i = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = X.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, X.aD)((e) => {
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
                                            _ = { mode: t, model: d, externalModel: o, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && n ? n.controls(_) : u(_),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(a),
                                    m = _[0],
                                    E = _[1],
                                    A = (0, n.useState)(() => c(a, i, s)),
                                    F = A[0],
                                    C = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? C(c(m, i, s)) : (d.current = !0);
                                    }, [s, m, i]),
                                    (0, n.useEffect)(() => {
                                        E(a);
                                    }, [a]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    r().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                root: e.object(),
                                rewardKitStatistics: e.object('rewardKitStatistics'),
                                rewards: e.array('rewards', []),
                                statisticsRewards: e.array('rewardKitStatistics.rewards', []),
                                resources: e.array('rewardKitStatistics.resources', []),
                                guaranteedReward: e.object('guaranteedReward'),
                            };
                            return Object.assign({}, u, {
                                computes: {
                                    rewards: (0, oe.Om)(() =>
                                        ie(u.rewards.get(), (e) =>
                                            Object.assign({}, e, {
                                                congratsViewModel: Object.assign({}, e.congratsViewModel),
                                            }),
                                        ),
                                    ),
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            nextOpen: e.createCallbackNoArgs('onNextOpen'),
                            videoChange: e.createCallbackNoArgs('onVideoChange'),
                            closeEvent: e.createCallbackNoArgs('onCloseEvent'),
                            destroyEvent: e.createCallbackNoArgs('onDestroyEvent'),
                            readyToRestart: e.createCallbackNoArgs('onReadyToRestart'),
                            showSpecialReward: e.createCallback((e) => e, 'showSpecialReward'),
                            buyBox: e.createCallbackNoArgs('onBuyBox'),
                            specialAction: e.createCallback((e) => e, 'onSpecialAction'),
                            showInfo: e.createCallbackNoArgs('guaranteedReward.onShowInfo'),
                            resetStatistics: e.createCallbackNoArgs('rewardKitStatistics.onResetStatistics'),
                            updateLastSeen: e.createCallbackNoArgs('rewardKitStatistics.onUpdateLastSeen'),
                        }),
                    ),
                    le = se[0],
                    ce = se[1];
                let de;
                !(function (e) {
                    ((e.OpeningEnd = 'openingEnd'),
                        (e.SwitchAnimation = 'switchAnimation'),
                        (e.Close = 'close'),
                        (e.OpenNextBox = 'openNextBox'),
                        (e.ReloadStart = 'reloadStart'),
                        (e.ReloadEnd = 'reloadEnd'),
                        (e.RewardAnimationEnd = 'rewardAnimationEnd'),
                        (e.SpecialVideoShow = 'specialVideoShow'),
                        (e.AttachmentRewardScreenShow = 'attachmentRewardScreenShow'));
                })(de || (de = {}));
                const _e = (0, n.createContext)({
                        isRewardRendered: !1,
                        shouldOpenVideoPlay: !1,
                        shouldReloadVideoPlay: !1,
                        isSpecialRewardClosed: !1,
                        isOverlayVisible: !1,
                        isReload: !1,
                        isForcedRendering: !1,
                        isMemoryRiskySystem: !1,
                        responseDict: null,
                        handleEvent: () => {},
                    }),
                    me = (0, I.Pi)(({ children: e }) => {
                        const u = ce(),
                            t = u.model,
                            a = u.controls,
                            i = t.root.get(),
                            o = i.isVideoOff,
                            s = i.leftLootBoxes,
                            l = i.isReload,
                            c = i.isForcedRendering,
                            d = i.hardReset,
                            _ = i.isSpecialRewardClosed,
                            m = i.isMemoryRiskySystem,
                            E = t.computes.rewards(),
                            A = K(E),
                            F = (0, n.useState)(!1),
                            C = F[0],
                            D = F[1],
                            B = (0, n.useState)(!o),
                            h = B[0],
                            g = B[1],
                            p = (0, n.useState)(!1),
                            b = p[0],
                            f = p[1],
                            v = (0, n.useState)(!1),
                            R = v[0],
                            I = v[1],
                            k = (0, n.useState)(!1),
                            T = k[0],
                            L = k[1],
                            O = (0, n.useRef)({ timeoutSpecialRewardOverlay: 0, timeoutShowSpecial: 0 }),
                            M = (0, w.D9)(E.length);
                        ((0, n.useEffect)(() => {
                            0 === M && g(!o);
                        }, [o, M, E.length]),
                            (0, n.useEffect)(() => {
                                d && a.close();
                            }, [d, a]),
                            (0, n.useEffect)(() => {
                                _ && T && L(!1);
                            }, [T, _]),
                            (0, n.useEffect)(() => {
                                o || (g(!1), f(!1));
                            }, [o]),
                            (0, n.useEffect)(
                                () => () => {
                                    clearTimeout(O.current.timeoutShowSpecial);
                                },
                                [],
                            ),
                            (0, n.useEffect)(() => {
                                clearTimeout(O.current.timeoutSpecialRewardOverlay);
                            }, [d]));
                        const H = (0, n.useCallback)(() => {
                                g(!1);
                            }, []),
                            P = (0, n.useCallback)(() => {
                                C && a.close();
                            }, [C, a]),
                            W = (0, n.useCallback)(
                                (e) => {
                                    27 === e.keyCode && C && (a.close(), (0, N.Sy)());
                                },
                                [C, a],
                            ),
                            G = (0, n.useCallback)(() => {
                                (f(!1), I(!1), o || g(!0));
                            }, [o, R]),
                            V = (0, n.useCallback)(() => {
                                o ? G() : f(!0);
                            }, [G, o]),
                            z = (0, n.useCallback)(() => {
                                (I(!0), s > 0 ? (D(!1), a.nextOpen()) : P());
                            }, [P, s, a]),
                            $ = (0, n.useCallback)(() => {
                                C && z();
                            }, [z, C]),
                            U = (0, n.useCallback)(() => D(!0), []),
                            j = (0, n.useCallback)(() => {
                                O.current.timeoutSpecialRewardOverlay = window.setTimeout(() => {
                                    (L(!0),
                                        (O.current.timeoutSpecialRewardOverlay = window.setTimeout(() => {
                                            a.showSpecialReward(K(E) || {});
                                        }, 200)));
                                }, 800);
                            }, [E, a]),
                            Z = (0, n.useCallback)(() => a.videoChange(), [a]),
                            q = (0, n.useMemo)(() => ({ [x.n.SPACE]: $ }), [$]);
                        (y(q),
                            S(
                                () => (
                                    window.addEventListener('keydown', W),
                                    () => {
                                        window.removeEventListener('keydown', W);
                                    }
                                ),
                                [],
                            ));
                        const Y = (0, n.useCallback)(
                                (e) => {
                                    if (e)
                                        switch (e) {
                                            case de.OpeningEnd:
                                                H();
                                                break;
                                            case de.SwitchAnimation:
                                                Z();
                                                break;
                                            case de.Close:
                                                P();
                                                break;
                                            case de.OpenNextBox:
                                                z();
                                                break;
                                            case de.ReloadStart:
                                                V();
                                                break;
                                            case de.ReloadEnd:
                                                G();
                                                break;
                                            case de.RewardAnimationEnd:
                                                U();
                                                break;
                                            case de.SpecialVideoShow:
                                            case de.AttachmentRewardScreenShow:
                                                j();
                                        }
                                },
                                [Z, P, z, H, G, V, U, j],
                            ),
                            X = (0, n.useMemo)(
                                () => ({
                                    isRewardRendered: C,
                                    shouldOpenVideoPlay: h && !o,
                                    shouldReloadVideoPlay: b && !o,
                                    responseDict: A,
                                    isSpecialRewardClosed: _,
                                    isOverlayVisible: T,
                                    handleEvent: Y,
                                    isReload: R || l,
                                    isForcedRendering: c,
                                    isMemoryRiskySystem: m,
                                }),
                                [C, h, o, b, A, _, T, Y, R, l, c, m],
                            );
                        return r().createElement(_e.Provider, { value: X }, e);
                    }),
                    Ee = 'Spinner_base_87',
                    Ae = 'Spinner_caption_cf',
                    Fe = 'Spinner_gear_c4',
                    Ce = 'Spinner_logo_bf',
                    De = ({ message: e, className: u, classNames: t }) =>
                        r().createElement(
                            'div',
                            { className: o()(Ee, u) },
                            e && r().createElement('div', { className: o()(Ae, null == t ? void 0 : t.caption) }, e),
                            r().createElement('div', { className: o()(Fe, null == t ? void 0 : t.gear) }),
                            r().createElement('div', { className: o()(Ce, null == t ? void 0 : t.logo) }),
                        );
                function Be(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const he = {
                        playHighlight() {
                            Be('highlight');
                        },
                        playClick() {
                            Be('play');
                        },
                        playYes() {
                            Be('yes1');
                        },
                    },
                    ge = {
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
                let pe, be;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(pe || (pe = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(be || (be = {})));
                const fe = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: i,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: d,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: E,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const C = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        B = D[0],
                        h = D[1],
                        g = (0, n.useState)(!1),
                        p = g[0],
                        b = g[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                B && null !== C.current && !C.current.contains(e.target) && h(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, n.useEffect)(() => {
                            h(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: C,
                                className: o()(
                                    ge.base,
                                    ge[`base__${a}`],
                                    i && ge.base__disabled,
                                    u && ge[`base__${u}`],
                                    B && ge.base__focus,
                                    p && ge.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== l && Be(l), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    i || (E && E(e), b(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== c && Be(c),
                                        m && m(e),
                                        t && (i || (C.current && (C.current.focus(), h(!0)))),
                                        b(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (A && A(e), b(!1));
                                },
                                onClick: function (e) {
                                    i || (F && F(e));
                                },
                            },
                            a !== pe.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: ge.back }),
                                    r().createElement('span', { className: ge.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: o()(ge.state, ge.state__default) },
                                r().createElement('span', { className: ge.stateDisabled }),
                                r().createElement('span', { className: ge.stateHighlightHover }),
                                r().createElement('span', { className: ge.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: ge.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                fe.defaultProps = { type: pe.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const we = fe,
                    ve = 'Error_base_46',
                    ye = 'Error_alertIcon_04',
                    Re = 'Error_errorCaption_f2',
                    Se = 'Error_button_cd',
                    xe = ({ errorBtnLabel: e, errorBtnClickHandler: u, errorMessage: t }) =>
                        r().createElement(
                            'div',
                            { className: ve },
                            r().createElement('div', { className: ye }),
                            r().createElement('div', { className: Re }, t),
                            r().createElement(we, { size: be.medium, mixClass: Se, onClick: u }, e),
                        );
                xe.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const Ne = 'Waiting_base_c5',
                    Ie = 'Waiting_blackOverlay_55',
                    ke = ({
                        message: e,
                        isError: u,
                        errorMessage: t,
                        errorBtnLabel: a,
                        errorBtnClickHandler: i,
                        overlayAlpha: o,
                    }) => {
                        const s = r().createRef();
                        return (
                            (0, n.useEffect)(() => {
                                const e = s.current;
                                e && o && (e.style.opacity = o);
                            }, [s, o]),
                            r().createElement(
                                'div',
                                { className: Ne },
                                r().createElement('div', { className: Ie, ref: s }),
                                u
                                    ? r().createElement(xe, {
                                          errorBtnLabel: a,
                                          errorMessage: t,
                                          errorBtnClickHandler: i,
                                      })
                                    : r().createElement(De, { message: e }),
                            )
                        );
                    };
                ke.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                var Te = t(2882),
                    Le = t(6808),
                    Oe = t(406);
                class Me extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = N.B3.GOLD;
                        else e = N.B3.INTEGRAL;
                        const u = N.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Me.defaultProps = { format: 'integral' };
                const He = 'Background_base_d7',
                    Pe = 'Background_rightBorder_62',
                    We = 'Background_background_d7',
                    Ge = () =>
                        r().createElement(
                            'div',
                            { className: He },
                            r().createElement('div', { className: We }),
                            r().createElement('div', { className: Pe }),
                        );
                var Ve = t(9766),
                    ze = t(2056);
                const $e = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ue() {
                    return (
                        (Ue = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ue.apply(null, arguments)
                    );
                }
                const je = R.views.common.tooltip_window.simple_tooltip_content,
                    Ze = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            i = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, $e);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: a, note: i, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, a, i, s]);
                        return r().createElement(
                            ze.u,
                            Ue(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? je.SimpleTooltipHtmlContent('resId') : je.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    qe = 'Footer_base_3d',
                    Ke = 'Footer_errorMessage_e5',
                    Ye = 'Footer_alertIcon_df',
                    Xe = 'Footer_buttonContent_0d',
                    Qe = R.strings.ny.rewardKitStatistics,
                    Je = ({ isResetFailed: e, hasStatistics: u, resetStatistics: t }) =>
                        r().createElement(
                            'div',
                            { className: qe },
                            r().createElement(
                                Ze,
                                { body: Qe.statistics.resetDescription() },
                                r().createElement(
                                    we,
                                    { type: pe.ghost, size: be.medium, onClick: t, disabled: !u, mixClass: Xe },
                                    Qe.statistics.reset(),
                                ),
                            ),
                            e &&
                                r().createElement(
                                    Ze,
                                    { body: Qe.resetError.body() },
                                    r().createElement(
                                        'div',
                                        { className: Ke },
                                        r().createElement(Ve.z, {
                                            text: Qe.resetError.label(),
                                            binding: { alertIcon: r().createElement('span', { className: Ye }) },
                                        }),
                                    ),
                                ),
                        ),
                    eu = 'Header_base_f9',
                    uu = 'Header_content_ea',
                    tu = 'Header_highlightedText_37',
                    au = 'Header_infoIcon_2b',
                    nu = R.strings.ny.rewardKitStatistics,
                    ru = ({ count: e }) =>
                        r().createElement(
                            'div',
                            { className: eu },
                            r().createElement(
                                Ze,
                                { header: nu.tooltip.header(), body: nu.tooltip.body() },
                                r().createElement(
                                    'div',
                                    { className: uu },
                                    r().createElement(Ve.z, {
                                        text: R.strings.ny.rewardKitStatistics.$plural('openedBoxes', e),
                                        binding: { count: r().createElement('span', { className: tu }, e) },
                                    }),
                                    r().createElement('div', { className: au }),
                                ),
                            ),
                        );
                let iu;
                !(function (e) {
                    ((e.None = ''),
                        (e.Vehicles = 'vehicles'),
                        (e.Customizations = 'customizations'),
                        (e.Attachment = 'attachment'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Currencies = 'currencies'),
                        (e.ModernizedEquipment = 'modernizedEquipment'),
                        (e.NyToys = 'nyToys'));
                })(iu || (iu = {}));
                const ou = R.images.gui.maps.icons.quests.bonuses.big,
                    su = {
                        [iu.None]: '',
                        [iu.Vehicles]: ou.vehicles(),
                        [iu.Customizations]: ou.style_3d(),
                        [iu.Attachment]: ou.attachment(),
                        [iu.PremiumPlus]: ou.premium_plus_universal(),
                        [iu.Gold]: ou.gold(),
                        [iu.Credits]: ou.credits(),
                        [T.Crystal]: ou.ny_crystal(),
                        [T.Emerald]: ou.ny_emerald(),
                        [T.Amber]: ou.ny_amber(),
                        [T.Iron]: ou.ny_iron(),
                        [iu.ModernizedEquipment]: ou.modernizedEquipment(),
                        [iu.NyToys]: ou.nyToys(),
                    },
                    lu = {
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
                    cu = R.strings.ny.rewardKitStatistics.statistics,
                    du = [iu.Gold, iu.Credits],
                    _u = ({ type: e, count: u }) => {
                        const t = r().createElement(Me, { value: u, format: du.includes(e) ? 'gold' : 'integral' });
                        return r().createElement(
                            'div',
                            { className: lu.base },
                            r().createElement('div', {
                                className: lu.icon,
                                style: { backgroundImage: `url('${su[e]}')` },
                            }),
                            r().createElement(
                                'div',
                                { className: lu.name },
                                r().createElement(Ve.z, {
                                    text: cu.$dyn(e),
                                    binding: {
                                        units: r().createElement(Ve.z, {
                                            text: cu.units(),
                                            binding: { unitsCount: t },
                                            classMix: lu.count,
                                        }),
                                        days: r().createElement(Ve.z, {
                                            text: cu.days(),
                                            binding: { daysCount: t },
                                            classMix: lu.count,
                                        }),
                                        currency: r().createElement(
                                            'span',
                                            { className: o()(lu.count, lu[`count__${e}`]) },
                                            t,
                                        ),
                                    },
                                }),
                            ),
                        );
                    },
                    mu = 'ResourcesStatistics_base_33',
                    Eu = 'ResourcesStatistics_column_e1',
                    Au = 'ResourcesStatistics_resource_83',
                    Fu = (e, u) => re(e, u ? (e, u) => u % 2 == 1 : (e, u) => u % 2 == 0),
                    Cu = ({ resources: e }) =>
                        r().createElement(
                            'div',
                            { className: mu },
                            r().createElement(
                                'div',
                                { className: Eu },
                                Fu(e, !1).map((e, u) =>
                                    r().createElement(
                                        ze.u,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                            args: { type: e.type },
                                            key: u,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Au },
                                            r().createElement(_u, { type: e.type, count: e.value }),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: Eu },
                                Fu(e, !0).map((e, u) =>
                                    r().createElement(
                                        ze.u,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                            args: { type: e.type },
                                            key: u,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Au },
                                            r().createElement(_u, { type: e.type, count: e.value }),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    Du = 'Statistics_base_f5',
                    Bu = 'Statistics_item_0b',
                    hu = [iu.Vehicles, iu.Customizations, iu.Attachment, iu.ModernizedEquipment],
                    gu = R.views.lobby.new_year.tooltips,
                    pu = (e) => {
                        switch (e) {
                            case iu.Vehicles:
                                return gu.NyVehiclesStatisticsTooltip('resId');
                            case iu.Customizations:
                                return gu.NyCustomizationsStatisticsTooltip('resId');
                            case iu.Attachment:
                                return gu.NyAttachmentsStatisticsTooltip('resId');
                            case iu.ModernizedEquipment:
                                return gu.NyEquipmentsStatisticsTooltip('resId');
                            default:
                                return R.invalid('resId');
                        }
                    },
                    bu = ({ rewards: e }) => {
                        return r().createElement(
                            'div',
                            { className: Du },
                            ((u = e),
                            (t = (e, u) =>
                                r().createElement(
                                    ze.u,
                                    {
                                        ignoreShowDelay: !0,
                                        contentId: pu(e.type),
                                        isEnabled: hu.includes(e.type),
                                        key: u,
                                    },
                                    r().createElement(
                                        'div',
                                        { className: Bu },
                                        r().createElement(_u, { type: e.type, count: e.count }),
                                    ),
                                )),
                            Array.isArray(u) ? u.map(t) : u.map((e, u, a) => t(null == e ? void 0 : e.value, u, a))),
                        );
                        var u, t;
                    },
                    fu = 'NyRewardKitStatistics_base_7e',
                    wu = 'NyRewardKitStatistics_content_08',
                    vu = 'NyRewardKitStatistics_closeBtn_64',
                    yu = 'NyRewardKitStatistics_message_e4',
                    Ru = 'NyRewardKitStatistics_rewards_0f',
                    Su = 'NyRewardKitStatistics_resources_b9',
                    xu = 'NyRewardKitStatistics_resourcesCounter_5b',
                    Nu = 'NyRewardKitStatistics_line_4c',
                    Iu = 'NyRewardKitStatistics_resourcesCounterText_d3',
                    ku = R.strings.ny.rewardKitStatistics,
                    Tu = ({
                        closeStatistics: e,
                        boxesCount: u,
                        hasStatistics: t,
                        resourcesTotalCount: a,
                        resetStatistics: n,
                        isResetFailed: i,
                        rewards: s,
                        resources: l,
                    }) =>
                        r().createElement(
                            'div',
                            { className: o()(fu) },
                            r().createElement(Ge, null),
                            r().createElement('div', {
                                className: vu,
                                onClick: () => {
                                    (Be(R.sounds.cancelcloseno()), e());
                                },
                            }),
                            r().createElement(
                                'div',
                                { className: wu },
                                r().createElement(ru, { count: u }),
                                t
                                    ? r().createElement(
                                          'div',
                                          null,
                                          r().createElement(
                                              'div',
                                              { className: Ru },
                                              r().createElement(bu, { rewards: s }),
                                          ),
                                          r().createElement(
                                              'div',
                                              { className: xu },
                                              r().createElement('div', { className: Nu }),
                                              r().createElement(Oe.B, {
                                                  text: ku.resourcesTotalCount(),
                                                  binding: { count: r().createElement(Me, { value: a }) },
                                                  className: Iu,
                                              }),
                                              r().createElement('div', { className: Nu }),
                                          ),
                                          r().createElement(
                                              'div',
                                              { className: Su },
                                              r().createElement(Cu, { resources: l }),
                                          ),
                                      )
                                    : r().createElement(
                                          'div',
                                          { className: yu },
                                          R.strings.ny.rewardKitStatistics.noStatistics(),
                                      ),
                            ),
                            r().createElement(Je, { hasStatistics: t, isResetFailed: i, resetStatistics: n }),
                        ),
                    Lu = 'NyRewardKitsStatisticsSlider_base_71',
                    Ou = 'NyRewardKitsStatisticsSlider_base__visible_25',
                    Mu = 'NyRewardKitsStatisticsSlider_shadow_2d',
                    Hu = ({
                        isVisible: e,
                        closeStatistics: u,
                        resources: t,
                        rewards: a,
                        isResetFailed: i,
                        resetStatistics: s,
                        resourcesTotalCount: l,
                        boxesCount: c,
                    }) => {
                        const d = t.length + a.length > 0,
                            _ = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const t = _.current;
                                if (t && e) return (N.c1.register(t, u), () => N.c1.unregister(t, u));
                            }, [e, _, u]),
                            (0, n.useEffect)(() => {
                                e && Be(R.sounds.gui_lootbox_in_game_shop_box_buy());
                            }, [e]),
                            r().createElement(
                                'div',
                                { className: o()(Lu, e && Ou), ref: _ },
                                r().createElement('div', { className: Mu }),
                                r().createElement(Tu, {
                                    closeStatistics: u,
                                    hasStatistics: d,
                                    isResetFailed: i,
                                    resetStatistics: s,
                                    boxesCount: c,
                                    rewards: a,
                                    resources: t,
                                    resourcesTotalCount: l,
                                }),
                            )
                        );
                    },
                    Pu = {
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
                    Wu = [
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
                function Gu() {
                    return (
                        (Gu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Gu.apply(null, arguments)
                    );
                }
                class Vu extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Be(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Be(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                (e && e(u), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            a = e.goto,
                            n = e.side,
                            i = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(e, Wu)),
                            E = o()(Pu.base, Pu[`base__${i}`], Pu[`base__${n}`], null == s ? void 0 : s.base),
                            A = o()(Pu.icon, Pu[`icon__${i}`], Pu[`icon__${n}`], null == s ? void 0 : s.icon),
                            F = o()(Pu.glow, null == s ? void 0 : s.glow),
                            C = o()(Pu.caption, Pu[`caption__${i}`], null == s ? void 0 : s.caption),
                            D = o()(Pu.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            Gu(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== i && r().createElement('div', { className: Pu.shine }),
                            r().createElement('div', { className: A }, r().createElement('div', { className: F })),
                            r().createElement('div', { className: C }, u),
                            a && r().createElement('div', { className: D }, a),
                        );
                    }
                }
                Vu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const zu = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function $u(e = x.n.NONE, u = zu, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== x.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && Q.O.view.isEventHandled()) return;
                                (Q.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t, a]);
                }
                let Uu, ju, Zu, qu;
                (!(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Uu || (Uu = {})),
                    (function (e) {
                        ((e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            (e.extraLarge = 'extraLarge'));
                    })(ju || (ju = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(Zu || (Zu = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(qu || (qu = {})));
                const Ku = {
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
                    Yu = [
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
                function Xu() {
                    return (
                        (Xu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Xu.apply(null, arguments)
                    );
                }
                const Qu = (e) => {
                        let u = e.id,
                            t = e.isChecked,
                            a = void 0 !== t && t,
                            i = e.isDisabled,
                            s = void 0 !== i && i,
                            l = e.isAlert,
                            c = void 0 !== l && l,
                            d = e.size,
                            _ = void 0 === d ? ju.medium : d,
                            m = e.type,
                            E = void 0 === m ? Zu.primary : m,
                            A = e.soundHover,
                            F = void 0 === A ? 'highlight' : A,
                            C = e.soundClick,
                            D = void 0 === C ? 'play' : C,
                            B = e.onMouseEnter,
                            h = e.onMouseLeave,
                            g = e.onMouseUp,
                            p = e.onMouseDown,
                            b = e.onClick,
                            f = e.onChange,
                            w = e.onFocus,
                            v = e.onBlur,
                            y = e.text,
                            R = e.contentStyles,
                            S = e.children,
                            x = e.alignment,
                            N = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Yu);
                        const I = (0, n.useState)(!1),
                            k = I[0],
                            T = I[1],
                            L = (0, n.useState)(!1),
                            O = (L[0], L[1]),
                            M = (0, n.useCallback)(
                                (e) => {
                                    s || (f && f(), b && b(e));
                                },
                                [s, f, b],
                            ),
                            H = (0, n.useCallback)(
                                (e) => {
                                    const u = e.button === Uu.LEFT;
                                    s || (u && T(!0), u && p && p(e), D && Be(D));
                                },
                                [s, p, D],
                            ),
                            P = (0, n.useCallback)(
                                (e) => {
                                    s || (T(!1), g && g(e));
                                },
                                [s, g],
                            ),
                            W = (0, n.useCallback)(
                                (e) => {
                                    s || (B && B(e), F && Be(F));
                                },
                                [s, B, F],
                            ),
                            G = (0, n.useCallback)(
                                (e) => {
                                    s || (T(!1), h && h(e));
                                },
                                [s, h],
                            ),
                            V = (0, n.useCallback)(
                                (e) => {
                                    s || (O(!0), w && w(e));
                                },
                                [s, w],
                            ),
                            z = (0, n.useCallback)(
                                (e) => {
                                    s || (O(!1), v && v(e));
                                },
                                [s, v],
                            ),
                            $ = r().createElement(
                                'div',
                                { className: Ku.label },
                                r().createElement(
                                    'div',
                                    { className: o()(Ku.labelContent, 's-labelContent'), style: R },
                                    y || S,
                                ),
                            );
                        return r().createElement(
                            'div',
                            Xu(
                                {
                                    id: u,
                                    className: o()(Ku.base, Ku[`base__${_}`], Ku[`base__${E}`], {
                                        [Ku.base__checked]: a,
                                        [Ku.base__disabled]: s,
                                        [Ku.base__mouseDown]: k,
                                        [Ku.base__alert]: c,
                                        [Ku.base__center]: x === qu.Center,
                                        [Ku.base__bottom]: x === qu.Bottom,
                                    }),
                                    onClick: M,
                                    onMouseEnter: W,
                                    onMouseLeave: G,
                                    onMouseDown: H,
                                    onMouseUp: P,
                                    onFocus: V,
                                    onBlur: z,
                                },
                                N,
                            ),
                            r().createElement(
                                'div',
                                { className: Ku.input },
                                r().createElement('div', { className: Ku.alertOverlay }),
                                r().createElement('div', { className: Ku.inputHoverOverlay }),
                                r().createElement('div', { className: Ku.highlight }),
                            ),
                            r().createElement('div', { className: Ku.checkmark }),
                            ((y || S) && $) || null,
                        );
                    },
                    Ju = (0, n.memo)(({ text: e, isChecked: u, onClick: t, isDisabled: a = !1 }) => {
                        const i = (0, n.useCallback)(() => t(), [t]);
                        return r().createElement(
                            'div',
                            null,
                            r().createElement(Qu, {
                                text: e,
                                isChecked: u,
                                type: Zu.main,
                                size: ju.large,
                                isDisabled: a,
                                onClick: i,
                            }),
                        );
                    });
                var et = t(2973);
                const ut = 'BuyButton_base_23',
                    tt = 'BuyButton_interactiveArea_b6',
                    at = 'BuyButton_base__disabled_dc',
                    nt = 'BuyButton_externalLinkIcon_a0',
                    rt = 'BuyButton_wrapper_e1',
                    it = 'BuyButton_image_c2',
                    ot = 'BuyButton_base__hover_00',
                    st = 'BuyButton_text_8a',
                    lt = R.strings.ny.rewardKitMain.entryView,
                    ct = (0, n.memo)(({ onClick: e, realm: u, isExternalLink: t, isDisabled: a = !1 }) => {
                        const i = u === et.r.Cn ? lt.buyLabelCn() : lt.buyLabel(),
                            s = (0, n.useState)(!1),
                            l = s[0],
                            c = s[1];
                        return r().createElement(
                            'div',
                            { className: o()(ut, l && ot, a && at) },
                            r().createElement(
                                Ze,
                                { body: R.strings.lootboxes.tooltip.entryView.buyBoxes() },
                                r().createElement('div', {
                                    className: tt,
                                    onClick: () => {
                                        (he.playClick(), e());
                                    },
                                    onMouseEnter: () => {
                                        (Be(R.sounds.gui_lootbox_logistic_center_buy_more()), c(!0));
                                    },
                                    onMouseLeave: () => {
                                        c(!1);
                                    },
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: rt },
                                r().createElement('div', { className: it }),
                                r().createElement(
                                    'div',
                                    { className: st },
                                    i,
                                    t && r().createElement('span', { className: nt }),
                                ),
                            ),
                        );
                    }),
                    dt = 'StatisticsButton_base_2d',
                    _t = R.strings.ny.rewardKitStatistics.tooltip,
                    mt = ({ onClick: e, classNames: u }) =>
                        r().createElement(
                            Ze,
                            {
                                header: _t.header(),
                                body: _t.body(),
                                onClick: () => {
                                    (he.playClick(), null == e || e());
                                },
                            },
                            r().createElement('div', {
                                className: o()(dt, null == u ? void 0 : u.base),
                                onMouseEnter: () => {
                                    he.playHighlight();
                                },
                            }),
                        );
                var Et = t(280);
                const At = 'BoxQuantity_base_32',
                    Ft = 'BoxQuantity_boxQuantity_34',
                    Ct = (0, n.memo)(({ boxQuantity: e, text: u, emptyText: t, bindingName: a }) => {
                        const i = e > 0,
                            o = (0, n.useMemo)(() => ({ [a]: r().createElement('div', { className: Ft }, e) }), [a, e]);
                        return r().createElement(
                            'div',
                            { className: At },
                            i ? r().createElement(Et.z, { text: u, binding: o }) : t,
                        );
                    }),
                    Dt = 'ControlPanel_base_57',
                    Bt = 'ControlPanel_leftButton_32',
                    ht = 'ControlPanel_rightButton_1d',
                    gt = ({ hasBoxes: e, text: u, emptyText: t, isButtonDisabled: a }) => {
                        const i = (0, n.useContext)(_e).handleEvent,
                            o = e ? u : t,
                            s = e ? pe.main : pe.primary,
                            l = (0, n.useCallback)(() => i(de.OpenNextBox), [i]);
                        return r().createElement(
                            'div',
                            null,
                            r().createElement(
                                Ze,
                                { body: R.strings.ny.newYear.errors.lootboxDisabled(), isEnabled: a },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(we, { onClick: l, type: s, size: be.medium, disabled: a }, o),
                                ),
                            ),
                        );
                    },
                    pt = ({ regularText: e, specialText: u, onClick: t }) => {
                        const a = (0, n.useCallback)(() => t(), [t]),
                            i = '' !== u ? u : e;
                        return r().createElement(we, { onClick: a, type: pe.primary, size: be.medium }, i);
                    },
                    bt = ({
                        hasBoxes: e,
                        nextBoxesButtonText: u,
                        allBoxesButtonText: t,
                        specialButtonText: a,
                        onSpecialButtonClick: n,
                        isNextButtonDisabled: i,
                    }) => {
                        const o = e || '' !== a;
                        return r().createElement(
                            'div',
                            { className: Dt },
                            r().createElement(
                                'div',
                                { className: Bt },
                                r().createElement(gt, { hasBoxes: e, text: u, emptyText: t, isButtonDisabled: i }),
                            ),
                            o &&
                                r().createElement(
                                    'div',
                                    { className: ht },
                                    r().createElement(pt, { regularText: t, specialText: a, onClick: n }),
                                ),
                        );
                    },
                    ft = 'Controls_base_82',
                    wt = 'Controls_statisticsButton_5b',
                    vt = 'Controls_closeButton_56',
                    yt = 'Controls_animationSwitcher_62',
                    Rt = 'Controls_bottomButtons_07',
                    St = 'Controls_controlPanel_7a',
                    xt = 'Controls_quantity_bb',
                    Nt = 'Controls_buyButton_28',
                    It = 'Controls_button_d4',
                    kt = 'Controls_errorBox_9c',
                    Tt = 'Controls_error_bd',
                    Lt = 'Controls_errorIcon_df',
                    Ot = (e, u) =>
                        u
                            ? R.strings.lootboxes.rewardView.congratsBtnLabel.toGarage()
                            : e
                              ? R.strings.lootboxes.rewardView.congratsBtnLabel.$dyn(e)
                              : '',
                    Mt = (0, I.Pi)(({ onClose: e, onShowStatistics: u }) => {
                        const t = (0, n.useContext)(_e),
                            a = t.handleEvent,
                            i = t.responseDict,
                            o = ce(),
                            s = o.model,
                            l = o.controls,
                            c = s.root.get(),
                            d = c.isNextBtnEnabled,
                            _ = c.leftLootBoxes,
                            m = c.specialRewardType,
                            E = c.isGiftBuyBtnVisible,
                            A = c.realm,
                            F = c.isVideoOff,
                            C = c.isExternal,
                            D = c.isFirstAttach,
                            B = !d && 0 === _,
                            h = (0, n.useCallback)(() => a(de.SwitchAnimation), [a]),
                            g = (0, n.useCallback)(() => l.buyBox(), [l]),
                            p = (0, n.useCallback)(() => {
                                i ? l.specialAction(i) : a(de.Close);
                            }, [a, l, i]),
                            b =
                                _ > 0
                                    ? R.strings.lootboxes.rewardView.toBoxes()
                                    : R.strings.lootboxes.rewardView.openBtnLabel();
                        return (
                            $u(x.n.ESCAPE, e),
                            r().createElement(
                                'div',
                                { className: ft },
                                r().createElement(
                                    'div',
                                    { className: Rt },
                                    B
                                        ? r().createElement(
                                              'div',
                                              { className: kt },
                                              r().createElement(
                                                  'div',
                                                  { className: Tt },
                                                  r().createElement('span', { className: Lt }),
                                                  R.strings.lootboxes.entryDesc.notAvailableNowShort(),
                                              ),
                                              r().createElement(
                                                  'div',
                                                  { className: It },
                                                  r().createElement(
                                                      we,
                                                      { type: pe.primary, size: be.medium, onClick: e },
                                                      b,
                                                  ),
                                              ),
                                          )
                                        : r().createElement(
                                              r().Fragment,
                                              null,
                                              r().createElement(
                                                  'div',
                                                  { className: St },
                                                  r().createElement(bt, {
                                                      hasBoxes: _ > 0,
                                                      nextBoxesButtonText:
                                                          R.strings.lootboxes.rewardView.nextOpenBtnLabel(),
                                                      allBoxesButtonText: b,
                                                      specialButtonText: Ot(m, D),
                                                      onSpecialButtonClick: p,
                                                      isNextButtonDisabled: !d,
                                                  }),
                                              ),
                                              r().createElement(
                                                  'div',
                                                  { className: xt },
                                                  r().createElement(Ct, {
                                                      boxQuantity: _,
                                                      text: R.strings.lootboxes.rewardView.boxesCount(),
                                                      emptyText: R.strings.lootboxes.rewardView.zeroBoxes(),
                                                      bindingName: 'count',
                                                  }),
                                              ),
                                              E &&
                                                  r().createElement(
                                                      'div',
                                                      { className: Nt },
                                                      r().createElement(ct, {
                                                          onClick: g,
                                                          realm: A,
                                                          isExternalLink: C,
                                                      }),
                                                  ),
                                          ),
                                    r().createElement(
                                        'div',
                                        { className: yt },
                                        r().createElement(Ju, {
                                            text: R.strings.lootboxes.buttonLabel.videoSwitch.lowerCase(),
                                            isChecked: !F,
                                            onClick: h,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: vt },
                                    r().createElement(Vu, {
                                        side: 'right',
                                        type: 'close',
                                        caption: R.strings.lootboxes.closeButtonLabel(),
                                        onClick: e,
                                    }),
                                ),
                                r().createElement('div', { className: wt }, r().createElement(mt, { onClick: u })),
                            )
                        );
                    }),
                    Ht = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(a));
                        };
                    };
                var Pt = t(3649);
                const Wt = 'AttachmentHeading_base_d0',
                    Gt = 'AttachmentHeading_title_6d',
                    Vt = 'AttachmentHeading_description_06',
                    zt = R.strings.lootboxes.rewardView.attachment,
                    $t = ({ congratsInfo: { attachUserName: e, groupAttachName: u, rarity: t } }) =>
                        r().createElement(
                            'div',
                            { className: Wt },
                            r().createElement(
                                'div',
                                { className: Gt },
                                systemLocale.toUpperCase(
                                    (0, Pt.uF)(zt.title(), { groupAttachName: u, attachUserName: e }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: Vt },
                                systemLocale.toUpperCase(
                                    (0, Pt.uF)(zt.rarity(), {
                                        rarity: R.strings.vehicle_customization.customization.rarity.$dyn(t),
                                    }),
                                ),
                            ),
                        ),
                    Ut = 'BaseHeading_base_e3',
                    jt = () =>
                        r().createElement('div', { className: Ut }, R.strings.lootboxes.notification.header.big()),
                    Zt = 'ModernizedEquipmentHeading_base_70',
                    qt = 'ModernizedEquipmentHeading_title_82',
                    Kt = 'ModernizedEquipmentHeading_description_00',
                    Yt = R.strings.lootboxes.notification.modernizedEquipment,
                    Xt = ({ equipmentName: e }) =>
                        r().createElement(
                            'div',
                            { className: o()(Zt) },
                            r().createElement('div', { className: qt }, Yt.$dyn(e)),
                            r().createElement('div', { className: Kt }, Yt.subtitle()),
                        ),
                    Qt = {
                        base: 'SpecialRewardHeading_base_86',
                        base__vehicle: 'SpecialRewardHeading_base__vehicle_6e',
                        vehicleInfo: 'SpecialRewardHeading_vehicleInfo_e4',
                        iconWrapper: 'SpecialRewardHeading_iconWrapper_e3',
                        icon: 'SpecialRewardHeading_icon_8a',
                        base__style: 'SpecialRewardHeading_base__style_dd',
                        commonHeading: 'SpecialRewardHeading_commonHeading_7e',
                        slideInFadeIn: 'SpecialRewardHeading_slideInFadeIn_4b',
                        fadeOut: 'SpecialRewardHeading_fadeOut_05',
                        fadeIn: 'SpecialRewardHeading_fadeIn_67',
                        fadeInWithScale: 'SpecialRewardHeading_fadeInWithScale_0a',
                        slideUp: 'SpecialRewardHeading_slideUp_64',
                        scale: 'SpecialRewardHeading_scale_a1',
                        spin: 'SpecialRewardHeading_spin_cb',
                        blink: 'SpecialRewardHeading_blink_73',
                        slideInNotification: 'SpecialRewardHeading_slideInNotification_32',
                    },
                    Jt = R.images.gui.maps.icons.vehicleTypes.big,
                    ea = R.strings.lootboxes.notification,
                    ua = ({ congratsInfo: { congratsType: e, vehicleName: u, vehicleType: t, vehicleLvl: a } }) => {
                        const n = e === Z.CongratTypeVehicle;
                        return r().createElement(
                            'div',
                            { className: o()(Qt.base, n ? Qt.base__vehicle : Qt.base__style) },
                            r().createElement(
                                'div',
                                { className: Qt.commonHeading },
                                ea[n ? 'vehicle' : 'style'].subtitle(),
                            ),
                            r().createElement(
                                'div',
                                { className: Qt.vehicleInfo },
                                r().createElement('div', { className: Qt.level }, a),
                                r().createElement(
                                    'div',
                                    { className: Qt.iconWrapper },
                                    r().createElement('div', {
                                        className: Qt.icon,
                                        style: { backgroundImage: `url(${Jt.$dyn(t)})` },
                                    }),
                                ),
                                r().createElement('div', { className: Qt.name }, u),
                            ),
                        );
                    };
                let ta;
                !(function (e) {
                    ((e[(e.Default = 0)] = 'Default'),
                        (e[(e.SpecialReward = 1)] = 'SpecialReward'),
                        (e[(e.ModernizedEquipment = 2)] = 'ModernizedEquipment'),
                        (e[(e.Attachment = 3)] = 'Attachment'));
                })(ta || (ta = {}));
                const aa = (e) => {
                        switch (e.type) {
                            case ta.ModernizedEquipment:
                                return r().createElement(Xt, { equipmentName: e.info.bonusName });
                            case ta.SpecialReward:
                                return r().createElement(ua, { congratsInfo: e.info.congratsViewModel });
                            case ta.Attachment:
                                return r().createElement($t, { congratsInfo: e.info.congratsViewModel });
                            default:
                                return r().createElement(jt, null);
                        }
                    },
                    na = Math.pow(255, 3),
                    ra = (e) => {
                        var u;
                        ((u = () => {
                            const u = viewEnv.enterUniprofRegion(
                                `FE: ${e}`,
                                ((e) => {
                                    const u = e.split('').reduce((e, u) => 0 | ((e << 5) - e + u.charCodeAt(0)), 0);
                                    return Math.floor(Math.abs(u % na));
                                })(e),
                            );
                            return () => {
                                viewEnv.exitUniprofRegion(u);
                            };
                        }),
                            (0, n.useEffect)(u, []));
                    },
                    ia = () => {};
                var oa = t(4069);
                const sa = {
                        base: 'Convertation_base_86',
                        bumpStars: 'Convertation_bumpStars_9e',
                        bumpParticles: 'Convertation_bumpParticles_18',
                        particlesCanvas: 'Convertation_particlesCanvas_97',
                        bump: 'Convertation_bump_5e',
                        bumpRays: 'Convertation_bumpRays_c0',
                        twirlyCanvas: 'Convertation_twirlyCanvas_65',
                        base__start: 'Convertation_base__start_e7',
                        base__bump: 'Convertation_base__bump_26',
                        base__end: 'Convertation_base__end_8c',
                        reward: 'Convertation_reward_7e',
                        rewardFrom: 'Convertation_rewardFrom_0b',
                        rewardTo: 'Convertation_rewardTo_92',
                        star: 'Convertation_star_06',
                        star__one: 'Convertation_star__one_d7',
                        star__second: 'Convertation_star__second_9e',
                        star__third: 'Convertation_star__third_11',
                    },
                    la = ['children'],
                    ca = ['children'];
                function da(e, u) {
                    if (null == e) return {};
                    var t = {};
                    for (var a in e)
                        if ({}.hasOwnProperty.call(e, a)) {
                            if (u.indexOf(a) >= 0) continue;
                            t[a] = e[a];
                        }
                    return t;
                }
                function _a() {
                    return (
                        (_a = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        _a.apply(null, arguments)
                    );
                }
                const ma = {
                        idle: { state: 'idle', nextState: 'start', timeout: 400 },
                        start: { state: 'start', nextState: 'bump', timeout: 960 },
                        bump: { state: 'bump', nextState: 'end', timeout: 33 },
                        end: { state: 'end', stop: !0 },
                    },
                    Ea = { width: 250, height: 250 },
                    Aa = () => {},
                    Fa = (e) =>
                        `R.images.gui.maps.icons.sequence.convert_twirly.twirly_convertation_${e.toString().padStart(5, '0')}`,
                    Ca = (0, n.memo)(
                        ({
                            children: [e, u],
                            className: t,
                            classNames: a = {},
                            onAnimate: i = Aa,
                            animationSettings: s = ma,
                            getSrcByFrameTwirly: l = Fa,
                            size: c = Ea,
                            drawSize: d = Ea,
                            isConvertationStart: _ = !0,
                            initAnimationState: m = 'idle',
                        }) => {
                            const E = ((e, u, t = !0) => {
                                const a = (0, n.useState)(e[u]),
                                    r = a[0],
                                    i = a[1],
                                    o = (0, n.useRef)(ia),
                                    s = (0, n.useCallback)(() => {
                                        r.stop ||
                                            (o.current(),
                                            (o.current = Ht(() => {
                                                i(e[null == r ? void 0 : r.nextState]);
                                            }, r.timeout)));
                                    }, [r, e]);
                                return (
                                    (0, n.useEffect)(() => (t && s(), () => o.current()), [t, s]),
                                    {
                                        step: r,
                                        setStep: (0, n.useCallback)(
                                            (u) => {
                                                i(e[u]);
                                            },
                                            [e],
                                        ),
                                        next: s,
                                    }
                                );
                            })(s, m, _).step.state;
                            return (
                                (0, n.useEffect)(() => {
                                    i(E);
                                }, [E, i]),
                                r().createElement(
                                    'div',
                                    {
                                        className: o()(sa.base, sa[`base__${E}`], t),
                                        style: {
                                            width: 'number' == typeof c.width ? `${c.width}rem` : c.width,
                                            height: 'number' == typeof c.height ? `${c.height}rem` : c.height,
                                        },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: o()(sa.bumpStars, a.bumpStars) },
                                        r().createElement('div', { className: o()(sa.star, sa.star__one, a.star) }),
                                        r().createElement('div', { className: o()(sa.star, sa.star__second, a.star) }),
                                        r().createElement('div', { className: o()(sa.star, sa.star__third, a.star) }),
                                    ),
                                    r().createElement('div', { className: o()(sa.bump, a.bump) }),
                                    r().createElement('div', { className: o()(sa.bumpRays, a.bumpRays) }),
                                    r().createElement(
                                        'div',
                                        { className: o()(sa.reward, a.reward) },
                                        ('idle' === E || 'start' === E) &&
                                            r().createElement(
                                                'div',
                                                { className: o()(sa.rewardFrom, a.rewardFrom) },
                                                e,
                                            ),
                                        ('end' === E || 'bump' === E) &&
                                            r().createElement('div', { className: o()(sa.rewardTo, a.rewardTo) }, u),
                                    ),
                                    ('start' === E || 'bump' === E) &&
                                        r().createElement(
                                            oa.A,
                                            _a({}, d, {
                                                className: o()(sa.twirlyCanvas, a.twirlyCanvas),
                                                frameCount: 60,
                                                frameTime: 16,
                                                getSrcByFrame: l,
                                            }),
                                        ),
                                    r().createElement('div', { className: o()(sa.bumpParticles, a.bumpParticles) }),
                                )
                            );
                        },
                        (e, u) => {
                            e.children;
                            const t = da(e, la),
                                a = (u.children, da(u, ca));
                            return (
                                (n = t),
                                (r = a),
                                Object.keys(n).length === Object.keys(r).length &&
                                    Object.keys(n).every(
                                        (e) => Object.prototype.hasOwnProperty.call(r, e) && n[e] === r[e],
                                    )
                            );
                            var n, r;
                        },
                    ),
                    Da = (e) => e.replace('..', 'img://gui'),
                    Ba = 'GodRays_base_26',
                    ha = 'GodRays_expander_d0',
                    ga = 'GodRays_canvas_7d',
                    pa = (e) =>
                        `R.images.gui.maps.icons.sequence.sun_shine_with_particles.reward_glow${e.toString().padStart(4, '0')}`,
                    ba = r().memo(({ className: e, width: u = 400, height: t = 400 }) =>
                        r().createElement(
                            'div',
                            { className: Ba },
                            r().createElement('div', { className: o()(ha, e) }),
                            r().createElement(oa.A, {
                                width: u,
                                height: t,
                                frameCount: 49,
                                frameTime: 50,
                                getSrcByFrame: pa,
                                className: ga,
                            }),
                        ),
                    ),
                    fa = {
                        base: 'SpecialCompensationRenderer_base_72',
                        item: 'SpecialCompensationRenderer_item_59',
                        wrapper: 'SpecialCompensationRenderer_wrapper_dc',
                        reward: 'SpecialCompensationRenderer_reward_74',
                        twirly: 'SpecialCompensationRenderer_twirly_89',
                        icon: 'SpecialCompensationRenderer_icon_9b',
                        animation: 'SpecialCompensationRenderer_animation_28',
                        shine: 'SpecialCompensationRenderer_shine_4f',
                        twin: 'SpecialCompensationRenderer_twin_0e',
                        godrays: 'SpecialCompensationRenderer_godrays_66',
                        marker: 'SpecialCompensationRenderer_marker_2c',
                        label: 'SpecialCompensationRenderer_label_92',
                        fadeIn: 'SpecialCompensationRenderer_fadeIn_48',
                        label__currency: 'SpecialCompensationRenderer_label__currency_35',
                        base__noAnimation: 'SpecialCompensationRenderer_base__noAnimation_4f',
                        bounceInFadeIn: 'SpecialCompensationRenderer_bounceInFadeIn_0c',
                        fadeZoomIn: 'SpecialCompensationRenderer_fadeZoomIn_5f',
                        fadeInRotateZoomShifted: 'SpecialCompensationRenderer_fadeInRotateZoomShifted_18',
                        fadeInRotateZoom: 'SpecialCompensationRenderer_fadeInRotateZoom_2c',
                        fadeInZoom: 'SpecialCompensationRenderer_fadeInZoom_c0',
                        fadeOut: 'SpecialCompensationRenderer_fadeOut_2d',
                        delayedFadeOut: 'SpecialCompensationRenderer_delayedFadeOut_48',
                        fadeInBlinkIn: 'SpecialCompensationRenderer_fadeInBlinkIn_11',
                        blinkOut: 'SpecialCompensationRenderer_blinkOut_d1',
                        blinkInZoomIn: 'SpecialCompensationRenderer_blinkInZoomIn_e1',
                        rotate: 'SpecialCompensationRenderer_rotate_9c',
                    };
                let wa;
                !(function (e) {
                    ((e.Waiting = 'waiting'), (e.Start = 'start'), (e.End = 'end'));
                })(wa || (wa = {}));
                const va = { width: '100%', height: '100%' },
                    ya = { reward: fa.reward, rewardFrom: fa.reward, rewardTo: fa.reward, twirlyCanvas: fa.twirly },
                    Ra = Object.assign({}, ma, {
                        idle: Object.assign({}, ma.idle, { timeout: 600 }),
                        start: Object.assign({}, ma.start, { timeout: 1600 }),
                    }),
                    Sa = (0, n.memo)(({ model: e, onAnimationEnd: u, index: t }) => {
                        const a = (0, n.useContext)(_e).isForcedRendering,
                            i = (0, n.useState)(wa.Waiting),
                            s = i[0],
                            l = i[1];
                        (0, n.useEffect)(() => {
                            s === wa.Start && Be(R.sounds.gui_lootbox_reward_circles());
                        }, [s]);
                        const c = Object.assign({}, e, {
                            iconAfter: R.images.gui.maps.icons.quests.bonuses.s360x270.gold_small(),
                        });
                        return (
                            ra('SpecialCompensationRendererComponent'),
                            (0, w.er)(() => !a && l(wa.Start), 1100),
                            (0, w.er)(() => u(t), a ? 0 : 4200),
                            r().createElement(
                                'div',
                                { className: o()(fa.base, a && fa.base__noAnimation, fa[`base__${s}`]) },
                                r().createElement(
                                    ze.u,
                                    {
                                        contentId:
                                            R.views.common.tooltip_window.loot_box_compensation_tooltip.LootBoxVehicleCompensationTooltipContent(
                                                'resId',
                                            ),
                                        decoratorId:
                                            R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                        args: c,
                                    },
                                    r().createElement(
                                        'div',
                                        { className: fa.item },
                                        r().createElement(
                                            'div',
                                            { className: fa.wrapper },
                                            r().createElement(Ca, { size: va, classNames: ya, animationSettings: Ra }, [
                                                r().createElement(
                                                    'div',
                                                    {
                                                        key: 1,
                                                        className: o()(fa.icon, fa.icon__before),
                                                        style: { backgroundImage: `url(${Da(e.iconFrom)})` },
                                                    },
                                                    r().createElement('div', { className: fa.label }, e.vehicleName),
                                                ),
                                                r().createElement(
                                                    'div',
                                                    {
                                                        key: 2,
                                                        className: o()(fa.icon, fa.icon__after),
                                                        style: { backgroundImage: `url(${Da(e.iconAfter)})` },
                                                    },
                                                    r().createElement('div', { className: fa.marker }),
                                                    r().createElement(
                                                        'div',
                                                        { className: o()(fa.label, fa.label__currency) },
                                                        e.labelStr,
                                                    ),
                                                ),
                                            ]),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: fa.godrays },
                                            r().createElement(ba, null),
                                        ),
                                    ),
                                ),
                            )
                        );
                    });
                var xa = t(5976);
                const Na = {
                        base: 'RewardItem_base_99',
                        base__special: 'RewardItem_base__special_d4',
                        base__vehicles: 'RewardItem_base__vehicles_3f',
                        base__specialRendered: 'RewardItem_base__specialRendered_51',
                        base__animated: 'RewardItem_base__animated_a0',
                        jumpInfinite: 'RewardItem_jumpInfinite_bc',
                        base__animatedHighResolution: 'RewardItem_base__animatedHighResolution_af',
                        jumpInfiniteFor4k: 'RewardItem_jumpInfiniteFor4k_ca',
                        base__hoverable: 'RewardItem_base__hoverable_5f',
                        base__0: 'RewardItem_base__0_aa',
                        base__1: 'RewardItem_base__1_7b',
                        base__2: 'RewardItem_base__2_31',
                        base__3: 'RewardItem_base__3_9d',
                        base__4: 'RewardItem_base__4_85',
                        base__5: 'RewardItem_base__5_44',
                        base__6: 'RewardItem_base__6_e9',
                        baseVehicleLootBoxCongrats: 'RewardItem_baseVehicleLootBoxCongrats_3b',
                        baseStyleLootBoxCongrats: 'RewardItem_baseStyleLootBoxCongrats_c0',
                        baseVehicleLootBoxCongrats__vehicles: 'RewardItem_baseVehicleLootBoxCongrats__vehicles_71',
                        baseStyleLootBoxCongrats__vehicles: 'RewardItem_baseStyleLootBoxCongrats__vehicles_6d',
                        item: 'RewardItem_item_99',
                        item__1: 'RewardItem_item__1_6b',
                        item__2: 'RewardItem_item__2_fa',
                    },
                    Ia = ['children'];
                function ka() {
                    return (
                        (ka = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        ka.apply(null, arguments)
                    );
                }
                const Ta = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Ia);
                        return r().createElement(
                            ze.u,
                            ka(
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
                    },
                    La = {
                        base: 'AttachmentRenderer_base_e2',
                        item: 'AttachmentRenderer_item_a9',
                        glow: 'AttachmentRenderer_glow_66',
                        glow__rare: 'AttachmentRenderer_glow__rare_0b',
                        glow__epic: 'AttachmentRenderer_glow__epic_09',
                        glow__legendary: 'AttachmentRenderer_glow__legendary_10',
                        image: 'AttachmentRenderer_image_a2',
                        label: 'AttachmentRenderer_label_28',
                        fadeIn: 'AttachmentRenderer_fadeIn_62',
                        base__noAnimation: 'AttachmentRenderer_base__noAnimation_25',
                        rarityLabel: 'AttachmentRenderer_rarityLabel_af',
                        bounceInFadeIn: 'AttachmentRenderer_bounceInFadeIn_10',
                        fadeZoomIn: 'AttachmentRenderer_fadeZoomIn_3c',
                        fadeInRotateZoomShifted: 'AttachmentRenderer_fadeInRotateZoomShifted_42',
                        fadeInRotateZoom: 'AttachmentRenderer_fadeInRotateZoom_26',
                        fadeInZoom: 'AttachmentRenderer_fadeInZoom_ab',
                        fadeOut: 'AttachmentRenderer_fadeOut_db',
                        delayedFadeOut: 'AttachmentRenderer_delayedFadeOut_48',
                        fadeInBlinkIn: 'AttachmentRenderer_fadeInBlinkIn_be',
                        blinkOut: 'AttachmentRenderer_blinkOut_42',
                        blinkInZoomIn: 'AttachmentRenderer_blinkInZoomIn_95',
                        rotate: 'AttachmentRenderer_rotate_35',
                    },
                    Oa = R.strings.lootboxes.rewardView,
                    Ma = ({
                        model: { tooltipId: e, icon: u, labelStr: t, rarity: a, groupName: i },
                        isSpecial: s = !1,
                    }) => {
                        const l = (0, n.useContext)(_e),
                            c = l.isSpecialRewardClosed,
                            d = l.handleEvent,
                            _ = l.isForcedRendering;
                        return (
                            (0, n.useEffect)(() => {
                                !c && s && d(de.AttachmentRewardScreenShow);
                            }, [d, s, c]),
                            r().createElement(
                                'div',
                                { className: o()(La.base, _ && La.base__noAnimation) },
                                r().createElement(
                                    Ta,
                                    { args: { tooltipId: e } },
                                    r().createElement(
                                        'div',
                                        { className: La.item },
                                        r().createElement('div', { className: o()(La.glow, La[`glow__${a}`]) }),
                                        r().createElement('div', {
                                            className: La.image,
                                            style: { backgroundImage: `url(${Da(u)})` },
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: La.label },
                                            `${i} ${t}`,
                                            r().createElement(
                                                'div',
                                                { className: La.rarityLabel },
                                                (0, Pt.uF)(Oa.attachment.rarity(), {
                                                    rarity: R.strings.vehicle_customization.customization.rarity.$dyn(
                                                        a,
                                                    ),
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    Ha = 'EntryAnimationRenderer_base_b9',
                    Pa = 'EntryAnimationRenderer_base__hidden_d3',
                    Wa = 'EntryAnimationRenderer_reward_3f',
                    Ga = 'EntryAnimationRenderer_base__ready_3c',
                    Va = 'EntryAnimationRenderer_base__noAnimation_5e',
                    za = 'EntryAnimationRenderer_effectsContainer_56',
                    $a = 'EntryAnimationRenderer_effects_27';
                var Ua = t(7044);
                const ja = 'ShinyParticles_base_6e',
                    Za = 'ShinyParticles_expander_35',
                    qa = 'ShinyParticles_canvas_2c',
                    Ka = (e) =>
                        R.images.gui.maps.icons.sequence.convert_particles.$dyn(
                            `items_idle_${e.toString().padStart(5, '0')}`,
                        ),
                    Ya = (0, n.memo)(() =>
                        r().createElement(
                            'div',
                            { className: ja },
                            r().createElement('div', { className: Za }),
                            r().createElement(oa.A, {
                                width: 600,
                                height: 600,
                                frameCount: 60,
                                frameTime: Ua.s_ / 25,
                                getSrcByFrame: Ka,
                                className: qa,
                            }),
                        ),
                    );
                let Xa;
                !(function (e) {
                    ((e[(e.GodRays = 0)] = 'GodRays'), (e[(e.Particles = 1)] = 'Particles'));
                })(Xa || (Xa = {}));
                const Qa = ({ type: e = Xa.GodRays }) => {
                        switch (e) {
                            case Xa.GodRays:
                                return r().createElement(ba, null);
                            case Xa.Particles:
                                return r().createElement(Ya, null);
                        }
                    },
                    Ja = (0, n.memo)(
                        ({
                            children: e,
                            onAnimationEnd: u,
                            index: t,
                            isSpecialReward: a = !1,
                            isRewardAfterSpecial: i = !1,
                            animationType: s,
                        }) => {
                            const l = (0, n.useContext)(_e),
                                c = l.isSpecialRewardClosed,
                                d = l.isForcedRendering,
                                _ = (0, n.useState)(!1),
                                m = _[0],
                                E = _[1];
                            (0, n.useEffect)(() => {
                                if (!d)
                                    return Ht(() => {
                                        null == u || u(t);
                                    }, 650);
                                null == u || u(t);
                            }, [t, d, u]);
                            const A = o()(Ha, d && Va, !d && m && Ga, a && !c && Pa);
                            return (
                                S(() => {
                                    (a ||
                                        i ||
                                        (Be(R.sounds.gui_lootbox_reward_fx()),
                                        Be(R.sounds.gui_lootbox_reward_item_default())),
                                        E(!0));
                                }, [a, i]),
                                r().createElement(
                                    'div',
                                    { className: A },
                                    r().createElement(
                                        'div',
                                        { className: za },
                                        r().createElement('div', { className: $a }, r().createElement(Qa, { type: s })),
                                    ),
                                    r().createElement('div', { className: Wa }, e),
                                )
                            );
                        },
                    ),
                    en = {
                        base: 'LootDefRenderer_base_8c',
                        item: 'LootDefRenderer_item_43',
                        image: 'LootDefRenderer_image_f4',
                        labelInner: 'LootDefRenderer_labelInner_c9',
                        label__ny_crystal: 'LootDefRenderer_label__ny_crystal_9a',
                        label__ny_emerald: 'LootDefRenderer_label__ny_emerald_59',
                        label__ny_amber: 'LootDefRenderer_label__ny_amber_f2',
                        label__ny_iron: 'LootDefRenderer_label__ny_iron_35',
                        label: 'LootDefRenderer_label_98',
                        fadeIn: 'LootDefRenderer_fadeIn_bd',
                        label__noAnimation: 'LootDefRenderer_label__noAnimation_88',
                        label__credits: 'LootDefRenderer_label__credits_06',
                        label__gold: 'LootDefRenderer_label__gold_9e',
                        label__slots: 'LootDefRenderer_label__slots_22',
                        bounceInFadeIn: 'LootDefRenderer_bounceInFadeIn_da',
                        fadeZoomIn: 'LootDefRenderer_fadeZoomIn_69',
                        fadeInRotateZoomShifted: 'LootDefRenderer_fadeInRotateZoomShifted_55',
                        fadeInRotateZoom: 'LootDefRenderer_fadeInRotateZoom_12',
                        fadeInZoom: 'LootDefRenderer_fadeInZoom_70',
                        fadeOut: 'LootDefRenderer_fadeOut_1f',
                        delayedFadeOut: 'LootDefRenderer_delayedFadeOut_9e',
                        fadeInBlinkIn: 'LootDefRenderer_fadeInBlinkIn_22',
                        blinkOut: 'LootDefRenderer_blinkOut_74',
                        blinkInZoomIn: 'LootDefRenderer_blinkInZoomIn_68',
                        rotate: 'LootDefRenderer_rotate_f5',
                    },
                    un = (e) => {
                        return (
                            (u = e.bonusName),
                            G.includes(u)
                                ? {
                                      contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                      args: { type: e.bonusName },
                                  }
                                : {
                                      contentId:
                                          R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                              'resId',
                                          ),
                                      args: { tooltipId: e.tooltipId },
                                  }
                        );
                        var u;
                    },
                    tn = (0, n.memo)(({ model: e }) => {
                        const u = (0, n.useContext)(_e).isForcedRendering,
                            t = `url(${Da(e.icon)})`,
                            a = (0, n.useMemo)(() => ({ backgroundImage: t }), [t]),
                            i = o()(en.label, en[`label__${e.bonusName}`], u && en.label__noAnimation);
                        return r().createElement(
                            'div',
                            { className: en.base },
                            r().createElement(
                                ze.u,
                                un(e),
                                r().createElement(
                                    'div',
                                    { className: en.item },
                                    r().createElement('div', { className: en.image, style: a }),
                                    e.labelStr &&
                                        r().createElement(
                                            'div',
                                            { className: i },
                                            e.labelStr &&
                                                r().createElement(Ve.z, { text: e.labelStr, classMix: en.labelInner }),
                                        ),
                                ),
                            ),
                        );
                    }),
                    an = {
                        base: 'ModernizedEquipmentRenderer_base_e5',
                        bounceInFadeIn: 'ModernizedEquipmentRenderer_bounceInFadeIn_0f',
                        wrapper: 'ModernizedEquipmentRenderer_wrapper_97',
                        item: 'ModernizedEquipmentRenderer_item_03',
                        effectsWrapper: 'ModernizedEquipmentRenderer_effectsWrapper_08',
                        fadeZoomIn: 'ModernizedEquipmentRenderer_fadeZoomIn_5c',
                        fadeInRotateZoomShifted: 'ModernizedEquipmentRenderer_fadeInRotateZoomShifted_1b',
                        fadeInRotateZoom: 'ModernizedEquipmentRenderer_fadeInRotateZoom_ac',
                        fadeInZoom: 'ModernizedEquipmentRenderer_fadeInZoom_0d',
                        fadeOut: 'ModernizedEquipmentRenderer_fadeOut_d3',
                        delayedFadeOut: 'ModernizedEquipmentRenderer_delayedFadeOut_0f',
                        fadeIn: 'ModernizedEquipmentRenderer_fadeIn_68',
                        fadeInBlinkIn: 'ModernizedEquipmentRenderer_fadeInBlinkIn_c1',
                        blinkOut: 'ModernizedEquipmentRenderer_blinkOut_7e',
                        blinkInZoomIn: 'ModernizedEquipmentRenderer_blinkInZoomIn_54',
                        rotate: 'ModernizedEquipmentRenderer_rotate_c9',
                    },
                    nn = (0, n.memo)(
                        ({ bonusName: e, specialRewardType: u, onAnimationEnd: t, tooltipId: a, index: i }) => {
                            const s = (0, n.useContext)(_e).isForcedRendering;
                            (0, n.useEffect)(() => {
                                if (!s)
                                    return (
                                        Be(R.sounds.gui_lootbox_reward_fx()),
                                        Be(R.sounds.gui_lootbox_reward_item_default()),
                                        Ht(() => {
                                            t(i);
                                        }, 800)
                                    );
                                t(i);
                            }, [i, t, s]);
                            const l = o()(an.base, s && an.base__noAnimation, an[`base__${u}`]);
                            return r().createElement(
                                'div',
                                { className: l },
                                r().createElement('div', { className: an.effectsWrapper }, r().createElement(Qa, null)),
                                r().createElement(
                                    ze.u,
                                    {
                                        contentId:
                                            R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                'resId',
                                            ),
                                        args: { tooltipId: a },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: an.wrapper },
                                        r().createElement('div', {
                                            className: an.item,
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.quests.bonuses.s600x450.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            );
                        },
                    );
                var rn = t(514);
                const on = {
                        base: 'SpecialAttachmentRenderer_base_6d',
                        fadeInZoom: 'SpecialAttachmentRenderer_fadeInZoom_98',
                        base__noAnimation: 'SpecialAttachmentRenderer_base__noAnimation_27',
                        wrapper: 'SpecialAttachmentRenderer_wrapper_8e',
                        glow: 'SpecialAttachmentRenderer_glow_98',
                        glow__epic: 'SpecialAttachmentRenderer_glow__epic_9f',
                        glow__legendary: 'SpecialAttachmentRenderer_glow__legendary_72',
                        item: 'SpecialAttachmentRenderer_item_ba',
                        bounceInFadeIn: 'SpecialAttachmentRenderer_bounceInFadeIn_a8',
                        fadeZoomIn: 'SpecialAttachmentRenderer_fadeZoomIn_93',
                        fadeInRotateZoomShifted: 'SpecialAttachmentRenderer_fadeInRotateZoomShifted_35',
                        fadeInRotateZoom: 'SpecialAttachmentRenderer_fadeInRotateZoom_cf',
                        fadeOut: 'SpecialAttachmentRenderer_fadeOut_32',
                        delayedFadeOut: 'SpecialAttachmentRenderer_delayedFadeOut_a2',
                        fadeIn: 'SpecialAttachmentRenderer_fadeIn_54',
                        fadeInBlinkIn: 'SpecialAttachmentRenderer_fadeInBlinkIn_6a',
                        blinkOut: 'SpecialAttachmentRenderer_blinkOut_f2',
                        blinkInZoomIn: 'SpecialAttachmentRenderer_blinkInZoomIn_1e',
                        rotate: 'SpecialAttachmentRenderer_rotate_2c',
                    },
                    sn = ({ model: { congratsViewModel: e }, onAnimationEnd: u, index: t }) => {
                        const a = (0, n.useContext)(_e),
                            i = a.isSpecialRewardClosed,
                            s = a.isForcedRendering;
                        return (
                            (0, n.useEffect)(() => {
                                if (i) return s ? void u(t) : Ht(() => u(t), 500);
                            }, [t, u, s, i]),
                            (0, n.useEffect)(() => {
                                i && rn.hY.sound(R.sounds.gui_lootbox_reward_item_custom());
                            }, [i]),
                            i
                                ? r().createElement(
                                      'div',
                                      { className: o()(on.base, s && on.base__noAnimation) },
                                      r().createElement(
                                          'div',
                                          { className: on.wrapper },
                                          r().createElement('div', {
                                              className: o()(on.glow, on[`glow__${e.rarity}`]),
                                          }),
                                          r().createElement('div', {
                                              className: on.item,
                                              style: {
                                                  backgroundImage: `url(R.images.gui.maps.vehicles.attachments.s900x675.${e.attachName})`,
                                              },
                                          }),
                                      ),
                                  )
                                : null
                        );
                    },
                    ln = {
                        base: 'SpecialRenderer_base_83',
                        base__TankmanLootBoxCongrats: 'SpecialRenderer_base__TankmanLootBoxCongrats_84',
                        fadeInRotateZoom: 'SpecialRenderer_fadeInRotateZoom_43',
                        base__VehicleLootBoxCongrats: 'SpecialRenderer_base__VehicleLootBoxCongrats_37',
                        fadeInRotateZoomShifted: 'SpecialRenderer_fadeInRotateZoomShifted_75',
                        base__StyleLootBoxCongrats: 'SpecialRenderer_base__StyleLootBoxCongrats_65',
                        base__noAnimation: 'SpecialRenderer_base__noAnimation_28',
                        wrapper: 'SpecialRenderer_wrapper_fa',
                        item: 'SpecialRenderer_item_ed',
                        bounceInFadeIn: 'SpecialRenderer_bounceInFadeIn_64',
                        fadeZoomIn: 'SpecialRenderer_fadeZoomIn_05',
                        fadeInZoom: 'SpecialRenderer_fadeInZoom_62',
                        fadeOut: 'SpecialRenderer_fadeOut_60',
                        delayedFadeOut: 'SpecialRenderer_delayedFadeOut_87',
                        fadeIn: 'SpecialRenderer_fadeIn_fb',
                        fadeInBlinkIn: 'SpecialRenderer_fadeInBlinkIn_81',
                        blinkOut: 'SpecialRenderer_blinkOut_ac',
                        blinkInZoomIn: 'SpecialRenderer_blinkInZoomIn_f9',
                        rotate: 'SpecialRenderer_rotate_b3',
                    },
                    cn = (0, n.memo)(
                        ({
                            model: { congratsViewModel: e, videoSrc: u },
                            specialRewardType: t,
                            onAnimationEnd: a,
                            index: i,
                        }) => {
                            const s = (0, n.useContext)(_e),
                                l = s.isSpecialRewardClosed,
                                c = s.isForcedRendering;
                            if (
                                ((0, n.useEffect)(() => {
                                    if (!c) return Ht(() => a(i), 500);
                                    a(i);
                                }, [i, a, c]),
                                (0, n.useEffect)(() => {
                                    ('' === u || l) && Be(R.sounds.gui_lootbox_reward_item_custom());
                                }, [l, u]),
                                '' !== u && !l)
                            )
                                return null;
                            const d = o()(ln.base, c && ln.base__noAnimation, ln[`base__${t}`]);
                            return r().createElement(
                                'div',
                                { className: d },
                                r().createElement(
                                    'div',
                                    { className: ln.wrapper },
                                    r().createElement('div', {
                                        className: ln.item,
                                        style: { backgroundImage: `url(${Da(e.vehicleImage)})` },
                                    }),
                                ),
                            );
                        },
                    ),
                    dn = 'SpecialRewardRenderer_base_25',
                    _n = 'SpecialRewardRenderer_item_b2',
                    mn = 'SpecialRewardRenderer_image_c3',
                    En = 'SpecialRewardRenderer_label_f3',
                    An = 'SpecialRewardRenderer_base__noAnimation_8a',
                    Fn = (0, n.memo)(({ model: { videoSrc: e, tooltipId: u, icon: t, labelStr: a } }) => {
                        const i = (0, n.useContext)(_e),
                            s = i.isSpecialRewardClosed,
                            l = i.handleEvent,
                            c = i.isForcedRendering,
                            d = (0, n.useRef)(!1);
                        return (
                            (0, n.useEffect)(() => {
                                '' === e || s || d.current || ((d.current = !0), l(de.SpecialVideoShow));
                            }, [l, s, e]),
                            r().createElement(
                                'div',
                                { className: o()(dn, c && An) },
                                r().createElement(
                                    ze.u,
                                    {
                                        contentId:
                                            R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                'resId',
                                            ),
                                        decoratorId:
                                            R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                        args: { tooltipId: u },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: _n },
                                        r().createElement('div', {
                                            className: mn,
                                            style: { backgroundImage: `url(${Da(t)})` },
                                        }),
                                        a &&
                                            r().createElement(
                                                'div',
                                                { className: En },
                                                r().createElement(Ve.z, { text: a }),
                                            ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Cn = 'ToyRenderer_base_af',
                    Dn = 'ToyRenderer_item_60',
                    Bn = 'ToyRenderer_image_69',
                    hn = 'ToyRenderer_rank_65',
                    gn = 'ToyRenderer_rank__noAnimation_85',
                    pn = 'ToyRenderer_labelText_5e',
                    bn = R.views.lobby.new_year.tooltips,
                    fn = ({ model: { labelStr: e, icon: u, toyID: t } }) => {
                        const a = (0, n.useContext)(_e).isForcedRendering;
                        return r().createElement(
                            'div',
                            { className: Cn },
                            r().createElement(
                                ze.u,
                                { contentId: bn.NyDecorationTooltip('resId'), args: { toyID: t } },
                                r().createElement(
                                    'div',
                                    { className: Dn },
                                    r().createElement('div', {
                                        className: Bn,
                                        style: { backgroundImage: `url(${u})` },
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: o()(hn, a && gn) },
                                        r().createElement(Oe.B, { className: pn, text: e }),
                                    ),
                                ),
                            ),
                        );
                    },
                    wn = ({
                        reward: e,
                        specialRewardType: u,
                        onAnimationEnd: t,
                        index: a,
                        animationDelay: i,
                        isSpecialDisplay: o = !1,
                        isRewardAfterSpecial: s = !1,
                    }) => {
                        const l = (0, n.useState)(!1),
                            c = l[0],
                            d = l[1];
                        return (
                            (0, w.er)(() => d(!0), i, []),
                            c
                                ? V(e.bonusName)
                                    ? r().createElement(nn, {
                                          bonusName: e.bonusName,
                                          specialRewardType: u,
                                          onAnimationEnd: t,
                                          index: a,
                                          tooltipId: e.tooltipId,
                                      })
                                    : U(e)
                                      ? r().createElement(
                                            Ja,
                                            { onAnimationEnd: t, index: a, isRewardAfterSpecial: s },
                                            r().createElement(Ma, { model: e }),
                                        )
                                      : ((e) => e.rendererType === W.Def)(e)
                                        ? r().createElement(
                                              Ja,
                                              { onAnimationEnd: t, index: a, isRewardAfterSpecial: s },
                                              r().createElement(tn, { model: e }),
                                          )
                                        : ((e) => e.rendererType === W.NewYearToy)(e)
                                          ? r().createElement(
                                                Ja,
                                                { onAnimationEnd: t, index: a },
                                                r().createElement(fn, { model: e }),
                                            )
                                          : o && z(e)
                                            ? j(e)
                                                ? r().createElement(sn, { model: e, onAnimationEnd: t, index: a })
                                                : r().createElement(cn, {
                                                      model: e,
                                                      specialRewardType: u,
                                                      onAnimationEnd: t,
                                                      index: a,
                                                  })
                                            : z(e)
                                              ? r().createElement(
                                                    Ja,
                                                    { index: a, onAnimationEnd: t, isSpecialReward: !0 },
                                                    j(e)
                                                        ? r().createElement(Ma, { model: e, isSpecial: !0 })
                                                        : r().createElement(Fn, { model: e, specialRewardType: u }),
                                                )
                                              : $(e)
                                                ? r().createElement(
                                                      Ja,
                                                      { index: a, animationType: Xa.Particles },
                                                      r().createElement(Sa, { model: e, onAnimationEnd: t, index: a }),
                                                  )
                                                : null
                                : null
                        );
                    },
                    vn = (0, n.memo)(
                        ({
                            reward: e,
                            index: u,
                            onAnimationEnd: t,
                            gridLength: a,
                            specialRewardType: i,
                            isVisible: s,
                            specialRewardIndex: l = -1,
                            isSpecialDisplay: c = !1,
                            animationDelay: d,
                        }) => {
                            const _ = (0, n.useContext)(_e),
                                m = _.isForcedRendering,
                                E = _.isMemoryRiskySystem,
                                A = _.isRewardRendered,
                                F = parseInt(window.getComputedStyle(document.documentElement).fontSize) > 1,
                                C = -1 !== l && u >= l + 1,
                                D = m ? 0 : d,
                                B = !xa.Z.isWeak() && !E && !c && A,
                                h = o()(
                                    Na.base,
                                    -1 !== l && Na[`base${i}`],
                                    Na[`base${i}__${e.bonusName}`],
                                    A && Na[`base__${u}`],
                                    c && Na.base__special,
                                    Na[`base__${e.bonusName}`],
                                    c && A && Na.base__specialRendered,
                                    B && Na.base__animated,
                                    B && F && Na.base__animatedHighResolution,
                                    E && Na.base__hoverable,
                                ),
                                g = o()(
                                    Na.item,
                                    !c &&
                                        Na[
                                            `item__${((e, u) => {
                                                const t = e % 2 == 0,
                                                    a = Math.floor(e / 2),
                                                    n = t ? [a - 1, a] : [a, a];
                                                return u === n[0] || u === n[1]
                                                    ? 0
                                                    : u < n[0]
                                                      ? 1 === u
                                                          ? 1
                                                          : 2
                                                      : u > n[1]
                                                        ? u === e - 1
                                                            ? 2
                                                            : 1
                                                        : 0;
                                            })(a, u)}`
                                        ],
                                );
                            return r().createElement(
                                'div',
                                { className: h },
                                r().createElement(
                                    'div',
                                    { className: g },
                                    (s || m) &&
                                        r().createElement(wn, {
                                            reward: e,
                                            specialRewardType: i,
                                            onAnimationEnd: t,
                                            index: u,
                                            animationDelay: D,
                                            isRewardAfterSpecial: C,
                                            isSpecialDisplay: c,
                                        }),
                                ),
                            );
                        },
                    ),
                    yn = {
                        base: 'Rewards_base_14',
                        rewards: 'Rewards_rewards_32',
                        rewards__4: 'Rewards_rewards__4_6b',
                        rewards__5: 'Rewards_rewards__5_89',
                        rewards__6: 'Rewards_rewards__6_29',
                        rewards__invisible: 'Rewards_rewards__invisible_40',
                        rewards__ModernizedEquipmentRewardKitCongrats:
                            'Rewards_rewards__ModernizedEquipmentRewardKitCongrats_96',
                        rewards__VehicleLootBoxCongrats: 'Rewards_rewards__VehicleLootBoxCongrats_bd',
                        rewards__StyleLootBoxCongrats: 'Rewards_rewards__StyleLootBoxCongrats_1d',
                        rewards__AttachmentLootBoxCongrats: 'Rewards_rewards__AttachmentLootBoxCongrats_d4',
                        rewards__isSpecial: 'Rewards_rewards__isSpecial_8c',
                        heading: 'Rewards_heading_cf',
                        heading__visible: 'Rewards_heading__visible_a0',
                    },
                    Rn = (e, u, t) => {
                        const a = e[t],
                            n = a
                                ? ((e) => {
                                      switch (!0) {
                                          case $(e):
                                              return 3200;
                                          case z(e):
                                              return 800;
                                          default:
                                              return 400;
                                      }
                                  })(a)
                                : 0;
                        return n + (u[t] || 0);
                    },
                    Sn = ({ rewards: e, specialRewardType: u, isReload: t }) => {
                        const a = (0, n.useContext)(_e),
                            i = a.shouldReloadVideoPlay,
                            s = a.shouldOpenVideoPlay,
                            l = a.isRewardRendered,
                            c = a.handleEvent,
                            d = a.isForcedRendering,
                            _ = e.findIndex((e) => z(e) || V(e.bonusName)),
                            m = e[_],
                            E = e.find((e) => V(e.bonusName)),
                            A = e.find((e) => j(e)),
                            F = E ? e.filter((e) => !V(e.bonusName)) : e,
                            C = e.reduce((u, t, a) => {
                                const n = Rn(e, u, a - 1);
                                return (u.push(n), a === e.length - 1 && m && u.push(Rn(e, u, a)), u);
                            }, []),
                            D = (0, n.useCallback)(
                                (u) => {
                                    u === (m ? e.length : e.length - 1) && c(de.RewardAnimationEnd);
                                },
                                [c, e.length, m],
                            );
                        (0, n.useEffect)(() => {
                            if (t) return Ht(() => c(de.ReloadStart), 500);
                        }, [c, t]);
                        const B = { '--list-width-modifier': ((e.length + 1) / 6).toFixed(2) },
                            h = o()(
                                yn.rewards,
                                yn[`rewards__${F.length}`],
                                u && yn[`rewards__${u}`],
                                (t || i) && yn.rewards__invisible,
                                m && yn.rewards__isSpecial,
                            ),
                            g = E
                                ? { type: ta.ModernizedEquipment, info: E }
                                : A
                                  ? { type: ta.Attachment, info: e[_] }
                                  : m
                                    ? { type: ta.SpecialReward, info: m }
                                    : { type: ta.Default };
                        return r().createElement(
                            'div',
                            { className: yn.base },
                            F.length &&
                                r().createElement(
                                    'div',
                                    { className: o()(yn.heading, ((!t && l) || d) && yn.heading__visible) },
                                    r().createElement(aa, g),
                                ),
                            r().createElement(
                                'div',
                                { className: h, style: B },
                                F.map((e, a) =>
                                    r().createElement(vn, {
                                        key: `${a}_${e.bonusName}`,
                                        index: a,
                                        reward: e,
                                        isVisible: !t && !s,
                                        onAnimationEnd: D,
                                        gridLength: F.length || 4,
                                        specialRewardType: u,
                                        specialRewardIndex: _,
                                        animationDelay: C[a],
                                    }),
                                ),
                                m &&
                                    r().createElement(vn, {
                                        key: `${e.length}_${m.bonusName}`,
                                        index: e.length,
                                        reward: m,
                                        isVisible: !t && !s,
                                        onAnimationEnd: D,
                                        gridLength: e.length || 4,
                                        specialRewardType: u,
                                        isSpecialDisplay: !0,
                                        specialRewardIndex: _,
                                        animationDelay: C[e.length],
                                    }),
                            ),
                        );
                    },
                    xn = 'Main_base_8b',
                    Nn = 'Main_shadow_81',
                    In = 'Main_shadow__visible_ac',
                    kn = 'Main_wrapper_c5',
                    Tn = 'Main_rewards_1f',
                    Ln = 'Main_container_50',
                    On = 'Main_container__visible_4f',
                    Mn = 'Main_base__animationOff_89',
                    Hn = 'Main_buttonsWrapper_ee',
                    Pn = 'Main_buttonsWrapper__visible_6c',
                    Wn = 'Main_overlay_cf',
                    Gn = 'Main_overlay__visible_71',
                    Vn = 'Main_rewardsOverlay_7d',
                    zn = (0, I.Pi)(() => {
                        const e = (0, n.useContext)(_e),
                            u = e.isRewardRendered,
                            t = e.shouldReloadVideoPlay,
                            a = e.isReload,
                            i = e.isOverlayVisible,
                            s = e.isForcedRendering,
                            l = e.handleEvent,
                            c = (0, n.useState)(!1),
                            d = c[0],
                            _ = c[1],
                            m = ce(),
                            E = m.model,
                            A = m.controls,
                            F = E.root.get(),
                            C = F.isOpening,
                            D = F.isReload,
                            B = F.isSpecialRewardClosed,
                            h = F.specialRewardType,
                            g = E.computes.rewards(),
                            p = (0, n.useState)(!1),
                            b = p[0],
                            f = p[1],
                            w = (0, n.useRef)(0),
                            v = (0, n.useCallback)(() => u && l(de.Close), [l, u]);
                        ((0, n.useEffect)(() => {
                            a ? (w.current = window.setTimeout(() => f(!0), 1e3)) : (clearTimeout(w.current), f(!1));
                        }, [a]),
                            (0, n.useEffect)(() => {
                                C || l(de.OpeningEnd);
                            }, [l, C]),
                            (0, n.useEffect)(() => {
                                !D && C && l(de.ReloadEnd);
                            }, [l, C, D]));
                        const y = g.find((e) => j(e)),
                            S = u || s,
                            x = !B && i;
                        return r().createElement(
                            'div',
                            { className: o()(xn, s && Mn), lang: R.strings.settings.LANGUAGE_CODE() },
                            b &&
                                !t &&
                                r().createElement(ke, {
                                    errorBtnClickHandler: Le.Bi,
                                    message: R.strings.ny.newYear.loading(),
                                    overlayAlpha: '0.5',
                                }),
                            r().createElement(Hu, {
                                isVisible: d,
                                rewards: E.statisticsRewards.get(),
                                resources: E.resources.get(),
                                boxesCount: E.rewardKitStatistics.get().count,
                                isResetFailed: E.rewardKitStatistics.get().isResetFailed,
                                resourcesTotalCount: E.rewardKitStatistics.get().totalResourcesCount,
                                closeStatistics: () => _(!1),
                                resetStatistics: A.resetStatistics,
                            }),
                            r().createElement('div', { className: o()(Nn, S && In) }),
                            r().createElement('div', { className: o()(Wn, x && !y && Gn) }),
                            r().createElement(
                                'div',
                                { className: kn },
                                r().createElement(
                                    'div',
                                    { className: Tn },
                                    r().createElement('div', { className: Vn }),
                                    r().createElement(Sn, { rewards: g, specialRewardType: h, isReload: a }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: o()(Ln, u && On) },
                                    r().createElement(Te.$, {
                                        model: Object.assign({}, E.guaranteedReward.get(), {
                                            onShowInfo: () => A.showInfo(),
                                        }),
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: o()(Hn, u && Pn) },
                                        r().createElement(Mt, {
                                            onClose: v,
                                            onShowStatistics: () => {
                                                (A.updateLastSeen(), _(!0));
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    $n = () => r().createElement(me, null, r().createElement(zn, null));
                engine.whenReady.then(() => {
                    f().render(
                        r().createElement(p, null, r().createElement(le, null, r().createElement($n, null))),
                        document.getElementById('root'),
                    );
                });
            },
            406: (e, u, t) => {
                'use strict';
                t.d(u, { B: () => l });
                var a = t(280),
                    n = t(6179),
                    r = t.n(n);
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
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const l = (0, n.memo)((e) => {
                    let u = e.text,
                        t = e.binding,
                        n = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, o);
                    const c = ((e, u) => {
                            const t =
                                    /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                                n = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                                o = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                                s = u ? Object.assign({}, u) : {};
                            let l = t.exec(e),
                                c = e,
                                d = 0;
                            for (; l; ) {
                                const m = l[0],
                                    E = n.exec(m),
                                    A = o.exec(m),
                                    F = l[1];
                                if (E && A) {
                                    const e = E[0],
                                        t = e + d++ + A[0].replaceAll(')', '') + e;
                                    ((c = c.replace(m, `%(${t})`)),
                                        (s[t] = i[e]
                                            ? r().createElement(
                                                  'span',
                                                  { className: i[e] },
                                                  r().createElement(a.z, { text: F, binding: u }),
                                              )
                                            : r().createElement(
                                                  'span',
                                                  { style: ((_ = e), { color: `#${_}` }) },
                                                  r().createElement(a.z, { text: F, binding: u }),
                                              )));
                                }
                                l = t.exec(e);
                            }
                            var _;
                            return [c, s];
                        })(u, t),
                        d = c[0],
                        _ = c[1];
                    return r().createElement(a.z, s({ text: d, classMix: n, binding: _ }, l));
                });
            },
            2882: (e, u, t) => {
                'use strict';
                let a;
                (t.d(u, { $: () => J }),
                    (function (e) {
                        ((e[(e.Normal = 0)] = 'Normal'), (e[(e.Disabled = 1)] = 'Disabled'));
                    })(a || (a = {})));
                var n = t(6179),
                    r = t.n(n),
                    i = t(2344),
                    o = t(2056),
                    s = t(7030),
                    l = t(6483),
                    c = t.n(l),
                    d = t(4069);
                const _ = 'EffectCounter_base_5a',
                    m = 'EffectCounter_count_06',
                    E = 'EffectCounter_base__strong_86',
                    A = 'EffectCounter_effect_12',
                    F = 'EffectCounter_strongEffect_3f',
                    C = 'EffectCounter_particles_04';
                let D;
                !(function (e) {
                    ((e.None = 'none'),
                        (e.StrongEffect = 'strongEffect'),
                        (e.WeakEffect = 'weakEffect'),
                        (e.Default = 'none'));
                })(D || (D = {}));
                const B = { duration: 1e3 },
                    h = { duration: 500 },
                    g = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${e.toString().padStart(5, '0')}`,
                    p = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((e + 75) % 120).toString().padStart(5, '0')}`,
                    b = 140,
                    f = r().memo(function ({
                        value: e,
                        className: u,
                        from: t,
                        onStart: a,
                        onRest: i,
                        onChange: o,
                        onPause: l,
                        onResume: f,
                        onProps: w,
                        onResolve: v,
                        style: y = D.Default,
                        valueConfig: R = B,
                        changeShineConfig: S = h,
                    }) {
                        const x = (0, s.useSpring)(() => ({
                                to: { value: e },
                                from: { value: null != t ? t : e },
                                config: R,
                                onStart: a,
                                onRest: i,
                                onChange: o,
                                onPause: l,
                                onResume: f,
                                onProps: w,
                                onResolve: v,
                            })),
                            N = x[0],
                            I = x[1],
                            k = (0, s.useTransition)(y, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                config: S,
                            });
                        return (
                            (0, n.useEffect)(() => {
                                'number' == typeof t &&
                                    I.start({ to: { value: e }, from: { value: t }, config: R, reset: !0 });
                            }, [e, t, I, R]),
                            r().createElement(
                                'div',
                                { className: c()(_, y === D.StrongEffect && E, u) },
                                r().createElement(
                                    'div',
                                    { className: m },
                                    k((e, u) =>
                                        r().createElement(
                                            s.animated.div,
                                            { style: e, className: A },
                                            u === D.StrongEffect &&
                                                r().createElement(
                                                    r().Fragment,
                                                    null,
                                                    r().createElement(d.A, {
                                                        width: b,
                                                        height: b,
                                                        frameCount: 120,
                                                        frameTime: 50,
                                                        getSrcByFrame: g,
                                                        className: C,
                                                    }),
                                                    r().createElement(d.A, {
                                                        width: b,
                                                        height: b,
                                                        frameCount: 120,
                                                        frameTime: 50,
                                                        getSrcByFrame: p,
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
                var w = t(5976);
                let v;
                !(function (e) {
                    ((e.China = 'CN'), (e.Ru = 'RU'));
                })(v || (v = {}));
                var y = t(9766);
                const S = 'GuaranteedRewardCount_base_d0',
                    x = 'GuaranteedRewardCount_text_3b',
                    N = 'GuaranteedRewardCount_countWrapper_52',
                    I = 'GuaranteedRewardCount_icon_ea',
                    k = ({ onInfoClick: e, InfoComponent: u, boxesCount: t, children: a }) =>
                        r().createElement(
                            'div',
                            { className: S },
                            r().createElement(y.z, {
                                classMix: x,
                                text: R.strings.ny.rewardKitMain.guaranteedReward.$plural('boxesLeft', t),
                                binding: { count: r().createElement('div', { className: N }, a) },
                            }),
                            r().createElement(
                                'div',
                                { className: x },
                                r().createElement('div', { className: I }, r().createElement(u, { onClick: e })),
                            ),
                        ),
                    T = {
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
                    M = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((e + 75) % 120).toString().padStart(5, '0')}`,
                    H = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((e + 50) % 120).toString().padStart(5, '0')}`,
                    P = ({ onInfoClick: e, InfoComponent: u }) =>
                        r().createElement(
                            'div',
                            { className: T.base },
                            r().createElement(d.A, {
                                width: L,
                                height: L,
                                frameCount: 120,
                                frameTime: 50,
                                getSrcByFrame: O,
                                className: c()(T.particles, T.particles__left),
                            }),
                            r().createElement(d.A, {
                                width: L,
                                height: L,
                                frameCount: 120,
                                getSrcByFrame: M,
                                className: c()(T.particles, T.particles__center),
                            }),
                            r().createElement(d.A, {
                                width: L,
                                height: L,
                                frameCount: 120,
                                frameTime: 50,
                                getSrcByFrame: H,
                                className: c()(T.particles, T.particles__right),
                            }),
                            r().createElement(
                                'div',
                                { className: T.text },
                                r().createElement('div', { className: T.firstShine }),
                                r().createElement('div', { className: T.secondShine }),
                                r().createElement(
                                    'div',
                                    { className: T.content },
                                    R.strings.ny.rewardKitMain.guaranteedReward.next(),
                                ),
                                r().createElement('div', { className: T.icon }, r().createElement(u, { onClick: e })),
                            ),
                        ),
                    W = 'InfoIcon_base_5d',
                    G = 'InfoIcon_base__clickable_fd',
                    V = ({ onClick: e }) => r().createElement('div', { className: c()(W, e && G), onClick: e }),
                    z = 'InfoText_base_16',
                    $ = 'InfoText_text_83',
                    U = 'InfoText_icon_ef',
                    j = 'InfoText_underline_f3',
                    Z = ({ onClick: e }) =>
                        r().createElement(
                            'div',
                            { className: z, onClick: e },
                            r().createElement(
                                'div',
                                { className: $ },
                                r().createElement('div', { className: j }),
                                R.strings.ny.rewardKitMain.guaranteedReward.moreInfo(),
                            ),
                            r().createElement('div', { className: U }),
                        );
                let q;
                !(function (e) {
                    ((e[(e.Hidden = 0)] = 'Hidden'),
                        (e[(e.NextGuaranteed = 1)] = 'NextGuaranteed'),
                        (e[(e.ThroughCountGuaranteed = 2)] = 'ThroughCountGuaranteed'));
                })(q || (q = {}));
                const K = (e) => e === q.ThroughCountGuaranteed,
                    Y = r().memo(function ({
                        state: e,
                        boxesCount: u,
                        onInfoClick: t,
                        className: a,
                        sunShineEffectCount: i,
                        switchDelay: l,
                        animationFrom: c = u,
                        realm: d,
                    }) {
                        var _;
                        const m = (0, n.useRef)(u);
                        (0, n.useEffect)(() => {
                            e === q.ThroughCountGuaranteed && (m.current = u);
                        }, [u, e]);
                        const E = (0, s.useTransition)(e, {
                                from: { opacity: 0 },
                                enter: { opacity: 1, delay: null != (_ = null == l ? void 0 : l.enter) ? _ : 0 },
                                leave: { opacity: 0 },
                                config: { duration: 300 },
                            }),
                            A = d === v.China ? Z : V;
                        return r().createElement(
                            r().Fragment,
                            null,
                            E(
                                (n, l) =>
                                    l !== q.Hidden &&
                                    r().createElement(
                                        s.animated.div,
                                        { style: n, className: a },
                                        r().createElement(
                                            o.u,
                                            {
                                                isEnabled: d !== v.China,
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
                                                                r().createElement(f, {
                                                                    value: K(e) ? u : m.current,
                                                                    from: K(e) ? c : m.current,
                                                                    style: u > i ? D.WeakEffect : D.StrongEffect,
                                                                    sequenceAnimationState: w.Z.isWeak()
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
                                                                console.warn('Unreachable state GuaranteedReward'),
                                                                null
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
                        onInfoClick: a,
                        isFocused: n = !1,
                        className: o = '',
                        switchDelay: s = X,
                    }) {
                        var l, c, d;
                        const _ = null != (l = (0, i.D9)(t)) ? l : t,
                            m = null != (c = (0, i.D9)(e)) ? c : e,
                            E = (null != (d = (0, i.D9)(n)) ? d : n) !== n && n;
                        return r().createElement(Y, {
                            state: t,
                            boxesCount: e,
                            sunShineEffectCount: 5,
                            realm: u,
                            onInfoClick: u === v.China ? a : void 0,
                            className: o,
                            animationFrom: E ? ((A = e), (F = m), A > F ? 0 : A < F ? F : A) : e,
                            switchDelay: _ === q.Hidden ? s : void 0,
                        });
                        var A, F;
                    }),
                    J = ({
                        className: e,
                        switchDelay: u,
                        model: { maxBoxesCount: t, realm: i, state: o, onShowInfo: s, isPremiumType: l, isFocused: c },
                    }) => {
                        const d = (0, n.useCallback)(() => s(), [s]),
                            _ = (() => {
                                switch (!0) {
                                    case o === a.Disabled || !l:
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
                            state: _,
                            onInfoClick: d,
                            isFocused: c,
                            className: e,
                            switchDelay: u,
                        });
                    };
            },
            4069: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => s });
                var a = t(6179),
                    n = t.n(a),
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
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const s = (0, a.memo)((e) => {
                    let u = e.width,
                        t = e.height,
                        s = e.getSrcByFrame,
                        l = e.frameCount,
                        c = e.onAnimate,
                        d = void 0 === c ? r.Bi : c,
                        _ = e.frameTime,
                        m = void 0 === _ ? 33 : _,
                        E = e.initialFrameIndex,
                        A = void 0 === E ? 0 : E,
                        F = e.loop,
                        C = void 0 === F || F,
                        D = e.state,
                        B = void 0 === D ? 'play' : D,
                        h = e.onAnimationComplete,
                        g = void 0 === h ? r.Bi : h,
                        p = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, i);
                    const b = (0, a.useRef)(null);
                    return (
                        (0, a.useEffect)(() => {
                            const e = b.current;
                            if (!e) return;
                            const a = l - 1,
                                n = e.getContext('2d'),
                                r = (a) => {
                                    (n.clearRect(0, 0, e.width, e.height), n.drawImage(a, 0, 0, u, t));
                                };
                            if ('stop' === B) {
                                const e = s(0),
                                    u = new Image();
                                u.src = e;
                                const t = () => r(u);
                                return (u.addEventListener('load', t), () => u.removeEventListener('load', t));
                            }
                            const i = ((e, u) => {
                                    const t = [];
                                    for (let a = 0; a < e; a++) {
                                        const e = new Image();
                                        ((e.src = u(a)), t.push(e));
                                    }
                                    return t;
                                })(l, s),
                                o = ((e, u = 0) => {
                                    let t = u;
                                    return () => {
                                        const u = t;
                                        return ((t += 1), t > e && (t = 0), u);
                                    };
                                })(a, A),
                                c = setInterval(() => {
                                    const e = o(),
                                        u = i[e];
                                    (r(i[e]), d(e, u), e === a && (g(), C || clearInterval(c)));
                                }, m);
                            return () => clearInterval(c);
                        }, [l, m, s, t, A, C, d, g, B, u]),
                        n().createElement('canvas', o({}, p, { width: u, height: t, ref: b }))
                    );
                });
            },
            5976: (e, u, t) => {
                'use strict';
                let a;
                (t.d(u, { Z: () => r }),
                    (function (e) {
                        ((e[(e.Ultra = 0)] = 'Ultra'),
                            (e[(e.Max = 1)] = 'Max'),
                            (e[(e.Height = 2)] = 'Height'),
                            (e[(e.Medium = 3)] = 'Medium'),
                            (e[(e.Low = 4)] = 'Low'),
                            (e[(e.Min = 5)] = 'Min'),
                            (e[(e.PerfLevelCount = 6)] = 'PerfLevelCount'));
                    })(a || (a = {})));
                const n = a.Ultra,
                    r = {
                        GraphicsPreset: a,
                        isWeak: () => n >= a.Low,
                        betterThan: (e) => n < e,
                        betterThanEq: (e) => n <= e,
                        worseThan: (e) => n > e,
                        worseThanEq: (e) => n >= e,
                        is: (e) => n === e,
                    };
            },
            6808: (e, u, t) => {
                'use strict';
                t.d(u, { Bi: () => a });
                (t(6483), t(7739), t(3649), t(6179), t(2973));
                const a = () => {};
            },
            2973: (e, u, t) => {
                'use strict';
                let a, n;
                (t.d(u, { r: () => n }),
                    (function (e) {
                        ((e.ExtraSmall = 'extraSmall'),
                            (e.Small = 'small'),
                            (e.Medium = 'medium'),
                            (e.Large = 'large'),
                            (e.ExtraLarge = 'extraLarge'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Ru = 'RU'),
                            (e.Eu = 'EU'),
                            (e.Na = 'NA'),
                            (e.Asia = 'ASIA'),
                            (e.Cn = 'CN'),
                            (e.Kr = 'KR'),
                            (e.Ct = 'CT'),
                            (e.St = 'ST'),
                            (e.QA = 'QA'),
                            (e.Dev = 'DEV'),
                            (e.Sb = 'SB'));
                    })(n || (n = {})));
            },
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, a] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, a];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(u, { a: u }), u);
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
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 5964),
        (() => {
            var e = { 5964: 0, 4840: 0, 7188: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        ((n = r[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(2698));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
