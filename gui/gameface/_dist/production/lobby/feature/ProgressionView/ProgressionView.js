(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => c });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7727),
                    i = t(7363),
                    s = t.n(i),
                    o = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    disabled: t,
                    mixClass: n,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: A,
                    onMouseUp: d,
                    onMouseLeave: m,
                    onClick: _,
                    isFocused: F = !1,
                    type: D = l.L.primary,
                    soundHover: C = 'highlight',
                    soundClick: B = 'play',
                }) => {
                    const g = (0, i.useRef)(null),
                        h = (0, i.useState)(F),
                        v = h[0],
                        b = h[1],
                        p = (0, i.useState)(!1),
                        f = p[0],
                        w = p[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                v && null !== g.current && !g.current.contains(e.target) && b(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [v]),
                        (0, i.useEffect)(() => {
                            b(F);
                        }, [F]),
                        s().createElement(
                            'div',
                            {
                                ref: g,
                                className: a()(
                                    o.Z.base,
                                    o.Z[`base__${D}`],
                                    t && o.Z.base__disabled,
                                    u && o.Z[`base__${u}`],
                                    v && o.Z.base__focus,
                                    f && o.Z.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    t || (null !== C && (0, r.G)(C), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    t || (d && d(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    t ||
                                        (null !== B && (0, r.G)(B),
                                        A && A(e),
                                        F && (t || (g.current && (g.current.focus(), b(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    t || (m && m(e), w(!1));
                                },
                                onClick: function (e) {
                                    t || (_ && _(e));
                                },
                            },
                            D !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: o.Z.back }),
                                    s().createElement('span', { className: o.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: a()(o.Z.state, o.Z.state__default) },
                                s().createElement('span', { className: o.Z.stateDisabled }),
                                s().createElement('span', { className: o.Z.stateHighlightHover }),
                                s().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2106: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { L: () => n, q: () => a }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(a || (a = {})));
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
            527: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => r, onScaleUpdated: () => i }));
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
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
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            n(),
                                            () => {
                                                a &&
                                                    (i(),
                                                    window.removeEventListener(r, s),
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
                                ((e.enabled = !1), n());
                            },
                            enable() {
                                ((e.enabled = !0), n());
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
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(527),
                    a = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
                t.d(u, { O: () => i });
                var n = t(5959),
                    a = t(7698),
                    r = t(514);
                const i = { view: t(7641), client: n, sound: r.ZP, intl: a.N };
            },
            7698: (e, u, t) => {
                'use strict';
                t.d(u, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
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
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n }));
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
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => o,
                        arabic2roman: () => S,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => T,
                        enableFullScreenModeSupported: () => I,
                        events: () => i.U,
                        extraSize: () => L,
                        forceTriggerMouseMove: () => p,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getExternalPaddingsRem: () => y,
                        getFontNames: () => w,
                        getScale: () => D,
                        getSize: () => d,
                        getViewGlobalPosition: () => _,
                        initExternalPaddings: () => R,
                        isEventHandled: () => b,
                        isFocused: () => h,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => x,
                    }));
                var n = t(9690),
                    a = t(3722),
                    r = t(6112),
                    i = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function C(e) {
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
                function v() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function p() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = n.cg;
                function y() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const T = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    L = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function I() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function R(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            n = u.right,
                            a = u.bottom,
                            r = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const n = ['args'],
                    a = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
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
                    r = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(a || (a = {})));
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => s, cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let u = '';
                    for (let t = a.length - 1; t >= 0; t--) for (; e >= a[t]; ) ((u += n[t]), (e -= a[t]));
                    return u;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) => (i ? `${e}` : r(e));
            },
            7727: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { G: () => n });
            },
            3649: (e, u, t) => {
                'use strict';
                t.d(u, { BN: () => s, Uw: () => _, WU: () => r, e: () => o, uF: () => i, v2: () => a });
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
                function s(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(a || (a = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    E = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    A = (e, u, t = a.left) => e.split(u).reduce(t === a.left ? c : E, []),
                    d = (() => {
                        const e = new RegExp(
                            [
                                /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                            ]
                                .map((e) => e.source)
                                .join('|'),
                            'gum',
                        );
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    m = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _ = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = a.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return m.includes(t)
                                          ? d(e)
                                          : 'ja' === t
                                            ? (0, n.D4)()
                                                  .parse(e)
                                                  .map((e) => l(e))
                                            : ((e, u = a.left) => {
                                                  let t = [];
                                                  const n =
                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                      r = l(e);
                                                  return (
                                                      A(r, /( )/, u).forEach((e) => (t = t.concat(A(e, n, a.left)))),
                                                      t
                                                  );
                                              })(e, u);
                                  })(e, u),
                        );
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
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
                t.d(u, { Sw: () => r.Z, B3: () => l, Z5: () => i.Z5, B0: () => s, ry: () => C });
                class n {
                    constructor() {
                        ((this.entries = []),
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
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                n.__instance = void 0;
                const a = n;
                var r = t(1358),
                    i = t(8613);
                let s;
                var o;
                (((o = s || (s = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    m = t(3138);
                const _ = ['args'];
                function F(e, u, t, n, a, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                            F(r, n, a, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(r, n, a, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
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
                    g = () => B(s.CLOSE),
                    h = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var v = t(7572);
                const b = a.instance,
                    p = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: A,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => B(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                A = o.height,
                                d = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(A),
                                };
                            B(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: D(d),
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
                            h(e, g);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                window.ViewEnvHelper = p;
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
            2746: (e, u, t) => {
                'use strict';
                var n = t(7363),
                    a = t.n(n);
                const r = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(e = i.O.client.getSize('rem')) {
                    const u = e.width,
                        t = e.height;
                    return Object.assign(
                        { width: u, height: t },
                        (function (e, u, t) {
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
                        })(u, t, s),
                    );
                }
                !(function (e) {
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
                })(o || (o = {}));
                const c = l(),
                    E = (0, n.createContext)(c),
                    A = ['children'];
                (0, n.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, A);
                    const a = (0, n.useContext)(E),
                        i = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        d = a.extraLargeWidth,
                        m = a.largeWidth,
                        _ = a.mediumWidth,
                        F = a.smallWidth,
                        D = a.extraSmallWidth,
                        C = a.extraLargeHeight,
                        B = a.largeHeight,
                        g = a.mediumHeight,
                        h = a.smallHeight,
                        v = a.extraSmallHeight,
                        b = { extraLarge: C, large: B, medium: g, small: h, extraSmall: v };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return r(u, t, b);
                        if (t.largeWidth && m) return r(u, t, b);
                        if (t.mediumWidth && _) return r(u, t, b);
                        if (t.smallWidth && F) return r(u, t, b);
                        if (t.extraSmallWidth && D) return r(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && h) return u;
                            if (t.extraSmallHeight && v) return u;
                        }
                    }
                    return null;
                });
                const d = ({ children: e }) => {
                    const u = (0, n.useState)(l),
                        t = u[0],
                        r = u[1],
                        s = (0, n.useState)(!1),
                        o = s[0],
                        c = s[1];
                    return (
                        (0, n.useLayoutEffect)(() => {
                            function e() {
                                r((e) => {
                                    const u = i.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : l(u);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                i.O.client.events.on('clientResized', e),
                                i.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (i.O.client.events.off('clientResized', e),
                                        i.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        a().createElement(E.Provider, { value: t }, o && e)
                    );
                };
                var m = t(6483),
                    _ = t.n(m),
                    F = t(926),
                    D = t.n(F);
                let C, B, g;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(C || (C = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(B || (B = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(g || (g = {})));
                const h = () => {
                        const e = (0, n.useContext)(E),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return C.ExtraLarge;
                                    case e.large:
                                        return C.Large;
                                    case e.medium:
                                        return C.Medium;
                                    case e.small:
                                        return C.Small;
                                    case e.extraSmall:
                                        return C.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), C.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return B.ExtraLarge;
                                    case e.largeWidth:
                                        return B.Large;
                                    case e.mediumWidth:
                                        return B.Medium;
                                    case e.smallWidth:
                                        return B.Small;
                                    case e.extraSmallWidth:
                                        return B.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return g.ExtraLarge;
                                    case e.largeHeight:
                                        return g.Large;
                                    case e.mediumHeight:
                                        return g.Medium;
                                    case e.smallHeight:
                                        return g.Small;
                                    case e.extraSmallHeight:
                                        return g.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), g.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    v = ['children', 'className'];
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const p = {
                        [B.ExtraSmall]: '',
                        [B.Small]: D().SMALL_WIDTH,
                        [B.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [B.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    f = {
                        [g.ExtraSmall]: '',
                        [g.Small]: D().SMALL_HEIGHT,
                        [g.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [g.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [g.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    w = {
                        [C.ExtraSmall]: '',
                        [C.Small]: D().SMALL,
                        [C.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [C.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [C.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    S = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, v);
                        const r = h(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return a().createElement('div', b({ className: _()(t, p[i], f[s], w[o]) }, n), u);
                    },
                    y = ['children'],
                    T = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, y);
                        return a().createElement(d, null, a().createElement(S, t, u));
                    };
                var L = t(1533),
                    x = t.n(L);
                const I = {
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
                    k = [
                        'caption',
                        'onClick',
                        'goto',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'side',
                        'type',
                        'soundHover',
                        'soundClick',
                    ];
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const O = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        r = e.goto,
                        s = e.classNames,
                        o = e.onMouseEnter,
                        l = e.onMouseLeave,
                        c = e.onMouseDown,
                        E = e.onMouseUp,
                        A = e.side,
                        d = void 0 === A ? 'left' : A,
                        m = e.type,
                        F = void 0 === m ? 'back' : m,
                        D = e.soundHover,
                        C = void 0 === D ? 'highlight' : D,
                        B = e.soundClick,
                        g = void 0 === B ? 'play' : B,
                        h = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, k);
                    const v = (0, n.useCallback)(
                            (e) => {
                                (null == o || o(e), i.O.sound.play.sound(C));
                            },
                            [o, C],
                        ),
                        b = (0, n.useCallback)(
                            (e) => {
                                null == l || l(e);
                            },
                            [l],
                        ),
                        p = (0, n.useCallback)(
                            (e) => {
                                (null == c || c(e), i.O.sound.play.sound(g));
                            },
                            [c, g],
                        ),
                        f = (0, n.useCallback)(
                            (e) => {
                                null == E || E(e);
                            },
                            [E],
                        );
                    return a().createElement(
                        'div',
                        N(
                            {
                                className: _()(I.base, I[`base__${F}`], I[`base__${d}`], null == s ? void 0 : s.base),
                                onMouseEnter: v,
                                onMouseLeave: b,
                                onMouseDown: p,
                                onMouseUp: f,
                                onClick: t,
                            },
                            h,
                        ),
                        'info' !== F && a().createElement('div', { className: I.shine }),
                        a().createElement(
                            'div',
                            { className: _()(I.icon, I[`icon__${F}`], I[`icon__${d}`], null == s ? void 0 : s.icon) },
                            a().createElement('div', { className: _()(I.glow, null == s ? void 0 : s.glow) }),
                        ),
                        a().createElement(
                            'div',
                            { className: _()(I.caption, I[`caption__${F}`], null == s ? void 0 : s.caption) },
                            u,
                        ),
                        r && a().createElement('div', { className: _()(I.goto, null == s ? void 0 : s.goto) }, r),
                    );
                };
                var M = t(5521),
                    P = t(9916);
                const V = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function H(e = M.n.NONE, u = V, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== M.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t, a]);
                }
                function W() {
                    return !1;
                }
                console.log;
                var $ = t(9174);
                function U(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const G = (e) => (0 === e ? window : window.subViews.get(e));
                var z = t(3946);
                let j, q;
                (!(function (e) {
                    ((e.ACTIVE = 'ACTIVE'),
                        (e.NOT_AVAILABLE = 'NOT_AVAILABLE'),
                        (e.ALREADY_IN_GARAGE = 'ALREADY_IN_GARAGE'),
                        (e.ALREADY_RECEIVED = 'ALREADY_RECEIVED'),
                        (e.SOLD_OUT = 'SOLD_OUT'),
                        (e.COUNT_NOT_AVAILABLE = 'COUNT_NOT_AVAILABLE'));
                })(j || (j = {})),
                    (function (e) {
                        ((e.ONE_SERIAL_PRODUCT = 'ONE_SERIAL_PRODUCT'),
                            (e.SEQUENTIAL_PRODUCT = 'SEQUENTIAL_PRODUCT'),
                            (e.TWO_PARALLEL_PRODUCTS = 'TWO_PARALLEL_PRODUCTS'));
                    })(q || (q = {})));
                const Y = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: s, mocks: o }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, t, n) => {
                                        var a;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = G,
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
                                                const s = (e) => {
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
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return (a.set(l, t), e && t(s(r)), l);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return U(e, u);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? U(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = t()).done;

                                                        )
                                                            r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = { root: e.object(), rewards: e.array('rewards') },
                                                    t = (0, z.Om)(
                                                        () => {
                                                            const e = u.root.get().eventMode;
                                                            var t, n;
                                                            return e === q.TWO_PARALLEL_PRODUCTS
                                                                ? null ==
                                                                  (t = u.rewards
                                                                      .get()
                                                                      .find(
                                                                          ({ value: e }) =>
                                                                              e.rewardId ===
                                                                              u.root.get().currentRewardId,
                                                                      ))
                                                                    ? void 0
                                                                    : t.value
                                                                : e === q.SEQUENTIAL_PRODUCT ||
                                                                    e === q.ONE_SERIAL_PRODUCT
                                                                  ? null ==
                                                                    (n = u.rewards
                                                                        .get()
                                                                        .find(({ value: e }) => e.state === j.ACTIVE))
                                                                      ? void 0
                                                                      : n.value
                                                                  : void 0;
                                                        },
                                                        { equals: W },
                                                    );
                                                return Object.assign({}, u, { computes: { selectedReward: t } });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (u) => {
                                                        const t = o(u),
                                                            n = $.LO.box(t, { equals: W });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, $.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (u, t) => {
                                                        const n = null != t ? t : o(u),
                                                            a = $.LO.box(n, { equals: W });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, $.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : o(u),
                                                            a = $.LO.box(n, { equals: W });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, $.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = o(t);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (e, u) => ((e[u] = $.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, $.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                a[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = u,
                                                                r = Object.entries(a),
                                                                i = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = $.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, $.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            A = { mode: e, model: E, externalModel: s, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && n ? n.controls(A) : u(A),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    A = (0, n.useState)(e),
                                    d = A[0],
                                    m = A[1],
                                    _ = (0, n.useState)(() => c(e, r, o)),
                                    F = _[0],
                                    D = _[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? D(c(d, r, o)) : (E.current = !0);
                                    }, [o, d, r]),
                                    (0, n.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    a().createElement(t.Provider, { value: F }, s)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        preview: e.createCallback((e) => ({ rewardId: e }), 'onPreview'),
                        showAbout: e.createCallbackNoArgs('onAboutClick'),
                        contributeResources: e.createCallback((e) => ({ rewardId: e }), 'onResourcesContribute'),
                        returnResources: e.createCallback((e) => ({ rewardId: e }), 'onResourcesReturn'),
                        selectReward: e.createCallback((e) => ({ rewardId: e }), 'onRewardSelected'),
                        showHangar: e.createCallbackNoArgs('onHangarShow'),
                        close: e.createCallbackNoArgs('onClose'),
                    })),
                    K = Y[0],
                    Z = Y[1];
                var X = t(3403),
                    Q = t(3457);
                const J = ({ value: e, format: u = 'integral' }) => {
                    const t = (function (e) {
                            return 'gold' === e ? P.B3.GOLD : P.B3.INTEGRAL;
                        })(u),
                        n = P.Z5.getNumberFormat(e, t);
                    return void 0 !== e && void 0 !== n ? n : null;
                };
                var ee = t(3649);
                const ue = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: r = ee.v2.left,
                    formatWithBrackets: i,
                }) => {
                    if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                    const s = i && e ? (0, ee.WU)(u, e) : u;
                    return a().createElement(
                        n.Fragment,
                        null,
                        s.split('\n').map((u, i) =>
                            a().createElement(
                                'div',
                                { className: _()('FormatText_base_d0', t), key: `${u}-${i}` },
                                (0, ee.Uw)(u, r, e).map((e, u) =>
                                    a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
                let te, ne;
                (!(function (e) {
                    ((e.mainScreen = 'mainScreen'), (e.entryPointTooltip = 'entryPointTooltip'));
                })(te || (te = {})),
                    (function (e) {
                        ((e.Active = 'active'),
                            (e.Forbidden = 'forbidden'),
                            (e.NoProgress = 'noProgress'),
                            (e.NoVehicles = 'noVehicles'));
                    })(ne || (ne = {})));
                const ae = [
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
                function re(e) {
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
                const ie = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: P.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    se = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            A = void 0 !== E && E,
                            d = e.decoratorId,
                            m = void 0 === d ? 0 : d,
                            _ = e.isEnabled,
                            F = void 0 === _ || _,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            g = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, ae);
                        const v = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(
                                () =>
                                    C ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId'),
                                            a = '';
                                        var r;
                                        return (
                                            u &&
                                                ((a =
                                                    (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { callerUrl: a, caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [C],
                            ),
                            p = (0, n.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (ie(t, m, { isMouseEvent: !0, on: !0, arguments: re(a) }, b),
                                    B && B(),
                                    (v.current.isVisible = !0));
                            }, [t, m, a, b, B]),
                            f = (0, n.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        ie(t, m, { on: !1 }, b),
                                        v.current.isVisible && g && g(),
                                        (v.current.isVisible = !1));
                                }
                            }, [t, m, b, g]),
                            w = (0, n.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(v.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = v.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            F
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          (clearTimeout(v.current.timeoutId),
                                                          (v.current.timeoutId = window.setTimeout(p, c ? 100 : 400)),
                                                          r && r(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (f(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === A && f(), null == o || o(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === A && f(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    oe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const ce = R.views.common.tooltip_window.simple_tooltip_content,
                    Ee = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            i = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, oe);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: r, note: i, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, i, o]);
                        return a().createElement(
                            se,
                            le(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? ce.SimpleTooltipHtmlContent('resId') : ce.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                let Ae;
                !(function (e) {
                    ((e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime'));
                })(Ae || (Ae = {}));
                var de = t(8613);
                const me = (Date.now(), de.Ew.getRegionalDateTime);
                de.Ew.getFormattedDateTime;
                const _e = () => {};
                let Fe;
                (P.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(Fe || (Fe = {})),
                    P.Sw.instance);
                const De = (e = 0, u, t = 0, a = _e) => {
                        const r = (0, n.useState)(e),
                            i = r[0],
                            s = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const n = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== t && u <= t ? (s(t), a && a(), clearInterval(r)) : s(u);
                                            },
                                            1e3 * (u || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, u, t, a]),
                            i
                        );
                    },
                    Ce = 'TimerEntryPointTooltip_text_50',
                    Be = R.strings.resource_well,
                    ge = ({ isEventEndingSoon: e, leftTime: u, untilTime: t, beforeEventTime: n, startDate: r }) =>
                        a().createElement(
                            'div',
                            { className: 'TimerEntryPointTooltip_base_43' },
                            e
                                ? a().createElement(
                                      a().Fragment,
                                      null,
                                      a().createElement(
                                          'div',
                                          { className: Ce },
                                          Be.tooltips.entryPoint.timer.leftTime(),
                                      ),
                                      a().createElement('div', { className: 'TimerEntryPointTooltip_leftTime_98' }, u),
                                  )
                                : a().createElement(
                                      a().Fragment,
                                      null,
                                      a().createElement(
                                          'div',
                                          { className: Ce },
                                          r
                                              ? Be.tooltips.entryPoint.timer.timeToStart()
                                              : Be.tooltips.entryPoint.timer.lastUntil(),
                                      ),
                                      a().createElement(
                                          'div',
                                          { className: 'TimerEntryPointTooltip_lastUntil_f4' },
                                          r ? n : t,
                                      ),
                                  ),
                        ),
                    he = R.strings.resource_well,
                    ve = ({ isEventEndingSoon: e, leftTime: u, untilTime: t, showShine: n = !0 }) => {
                        const r = _()(
                            'TimerMainScreen_content_2d',
                            e ? 'TimerMainScreen_content__endingSoon_bb' : 'TimerMainScreen_content__daysLeft_7f',
                        );
                        return a().createElement(
                            a().Fragment,
                            null,
                            n &&
                                a().createElement(
                                    'div',
                                    { className: 'TimerMainScreen_shineWrapper_61' },
                                    a().createElement('div', { className: 'TimerMainScreen_shineBg_aa' }),
                                ),
                            a().createElement(
                                'div',
                                { className: r },
                                a().createElement(
                                    'div',
                                    { className: 'TimerMainScreen_text_23' },
                                    e ? he.mainView.timer.leftTime() : he.mainView.timer.lastUntil(),
                                ),
                                a().createElement('div', { className: 'TimerMainScreen_time_5b' }, e ? u : t),
                            ),
                        );
                    },
                    be = R.strings.resource_well,
                    pe = (e) =>
                        ((e, u = !0) =>
                            e.days > 7 && u
                                ? (0, ee.WU)(R.strings.common.duration.days(), { days: e.days })
                                : e.days >= 1
                                  ? 0 === e.hours
                                      ? (0, ee.WU)(R.strings.common.duration.days(), { days: e.days })
                                      : (0, ee.WU)(R.strings.common.duration.days(), { days: e.days + 1 })
                                  : e.hours >= 1
                                    ? 0 === e.minutes
                                        ? (0, ee.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                        : (0, ee.WU)(R.strings.common.duration.hours(), { hours: e.hours + 1 })
                                    : (0, ee.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(
                            (function (e = 0) {
                                let u = e;
                                const t = Math.trunc(u / 86400);
                                u -= 86400 * t;
                                const n = Math.trunc(u / 3600);
                                u -= 3600 * n;
                                const a = Math.trunc(u / 60);
                                return ((u -= 60 * a), { days: t, hours: n, minutes: a, seconds: u });
                            })(e),
                            !1,
                        ),
                    fe = ({
                        usagePlace: e,
                        endDate: u = 0,
                        isEventEndingSoon: t = !1,
                        timeLeft: n = 0,
                        showShine: r = !1,
                        startDate: i = 0,
                    }) => {
                        const s = De(n),
                            o = u,
                            l = i,
                            c = (0, ee.uF)(be.tooltips.mainView.timer.leftTime(), { leftTime: pe(s) });
                        return a().createElement(
                            Ee,
                            { body: c },
                            a().createElement(
                                'div',
                                { className: 'Timer_base_45' },
                                e === te.entryPointTooltip
                                    ? a().createElement(ge, {
                                          isEventEndingSoon: t,
                                          leftTime: pe(s),
                                          untilTime: me(o, Ae.DayMonthFullTime),
                                          beforeEventTime: me(l, Ae.DayMonthFullTime),
                                          startDate: i,
                                      })
                                    : a().createElement(ve, {
                                          isEventEndingSoon: t,
                                          showShine: r && t,
                                          leftTime: pe(s),
                                          untilTime: me(o, Ae.DayMonthFullTime),
                                      }),
                            ),
                        );
                    },
                    we = 'EventInfo_description_51',
                    Se = R.strings.resource_well,
                    ye = (0, X.Pi)(() => {
                        const e = Z().model,
                            u = e.root.get(),
                            t = u.eventMode,
                            n = u.progressionState,
                            r = e.rewards.get(),
                            i = e.root.get(),
                            s = i.endDate,
                            o = i.timeLeft,
                            l = i.isEventEndingSoon,
                            c = r.reduce(
                                (e, u) => (
                                    u.value.hasStyle
                                        ? (e.withStyleCount = u.value.vehiclesLimit)
                                        : (e.withoutStyleCount = u.value.vehiclesLimit),
                                    e
                                ),
                                { withStyleCount: 0, withoutStyleCount: 0 },
                            ),
                            E = !(
                                r.every((e) => [j.ALREADY_IN_GARAGE, j.ALREADY_RECEIVED].includes(e.value.state)) ||
                                r.some(
                                    (e) =>
                                        [j.ALREADY_IN_GARAGE, j.ALREADY_RECEIVED].includes(e.value.state) &&
                                        r.some((u) => e !== u && 0 === u.value.vehiclesLeftCount),
                                )
                            ),
                            A = () =>
                                r.every((e) => e.value.state === j.ALREADY_RECEIVED)
                                    ? {
                                          title: Se.eventInfo.header.title.allVehiclesReceived(),
                                          subTitle: Se.eventInfo.header.subTitle.eventOver(),
                                      }
                                    : r.some(
                                            (e) =>
                                                e.value.state === j.ALREADY_RECEIVED &&
                                                r.some(
                                                    (u) =>
                                                        u !== e &&
                                                        (0 === u.value.vehiclesLeftCount ||
                                                            u.value.state === j.ALREADY_IN_GARAGE),
                                                ),
                                        )
                                      ? {
                                            title: Se.eventInfo.header.title.vehicleReceived(),
                                            subTitle: Se.eventInfo.header.subTitle.eventOver(),
                                        }
                                      : { title: Se.commonTexts.eventTitle(), subTitle: '' };
                        return a().createElement(
                            'div',
                            { className: 'EventInfo_base_ab' },
                            E
                                ? a().createElement(fe, {
                                      endDate: s,
                                      isEventEndingSoon: l,
                                      timeLeft: o,
                                      usagePlace: te.mainScreen,
                                      showShine: !0,
                                  })
                                : a().createElement('div', { className: 'EventInfo_subTitle_03' }, A().subTitle),
                            a().createElement('div', { className: 'EventInfo_title_9a' }, A().title),
                            t === q.SEQUENTIAL_PRODUCT &&
                                a().createElement(ue, {
                                    classMix: we,
                                    text: Se.eventInfo.description.sequentialEventMode(),
                                    binding: {
                                        styleTanksCount: a().createElement(J, {
                                            format: 'integral',
                                            value: c.withStyleCount,
                                        }),
                                        withoutStyleTanksCount: a().createElement(J, {
                                            format: 'integral',
                                            value: c.withoutStyleCount,
                                        }),
                                    },
                                }),
                            t === q.TWO_PARALLEL_PRODUCTS &&
                                n !== ne.Forbidden &&
                                r.some((e) => e.value.state === j.ACTIVE && Boolean(e.value.vehiclesLeftCount)) &&
                                a().createElement(
                                    'div',
                                    { className: we },
                                    Se.eventInfo.description.inParallelEventMode(),
                                ),
                            t === q.ONE_SERIAL_PRODUCT &&
                                a().createElement(
                                    'div',
                                    { className: we },
                                    Se.eventInfo.description.oneSerialEventMode(),
                                ),
                        );
                    });
                var Te = t(7162);
                const Le = {
                        base: 'Footer_base_a4',
                        base__active: 'Footer_base__active_bf',
                        topLip: 'Footer_topLip_f9',
                        topLightline: 'Footer_topLightline_31',
                    },
                    xe = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Ie, Re;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(Ie || (Ie = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(Re || (Re = {})));
                const ke = ({ size: e = Ie.Default }) => {
                        const u = _()(xe.background, xe[`background__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    Ne = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Oe = ({ size: e }) => {
                        const u = _()(Ne.base, Ne[`base__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    Me = {
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
                    Pe = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                            const s = _()(
                                    Me.base,
                                    Me[`base__${e}`],
                                    t && Me.base__disabled,
                                    r && Me.base__finished,
                                    i && Me.base__withoutBounce,
                                ),
                                o = !t && !r;
                            return a().createElement(
                                'div',
                                { className: s, style: n, ref: u },
                                a().createElement('div', { className: Me.pattern }),
                                a().createElement('div', { className: Me.gradient }),
                                o && a().createElement(Oe, { size: e }),
                            );
                        },
                    ),
                    Ve = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(n));
                        };
                    };
                let He, We;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(He || (He = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(We || (We = {})));
                const $e = (e) => (e ? { left: 0 } : { right: 0 }),
                    Ue = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Ge = (e) => ({ transitionDuration: `${e}ms` }),
                    ze = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: i,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = s < r,
                                A = (0, n.useState)(He.Idle),
                                d = A[0],
                                m = A[1],
                                F = d === He.End,
                                D = d === He.Idle,
                                C = d === He.Grow,
                                B = d === He.Shrink,
                                g = (0, n.useCallback)(
                                    (e) => {
                                        (m(e), l && l(e));
                                    },
                                    [l],
                                ),
                                h = (0, n.useCallback)(
                                    (e, u) =>
                                        Ve(() => {
                                            g(e);
                                        }, u),
                                    [g],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return D
                                        ? h(He.Grow, u)
                                        : C
                                          ? h(He.Shrink, e)
                                          : B
                                            ? h(He.End, e)
                                            : void (F && o && o());
                            }, [h, t, F, C, D, B, o, u, e]);
                            const v = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Ge(e), $e(E)), [E, e]),
                                b = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Ge(e), $e(E)), [E, e]),
                                p = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Ue(E, r), Ge(e)), [r, E, e]),
                                f = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - r)}%` }, Ue(E, r), Ge(e)),
                                    [r, E, s, e],
                                );
                            if (F) return null;
                            const w = _()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                E && 0 === s && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return a().createElement(
                                'div',
                                { style: D ? p : f, className: w },
                                a().createElement(
                                    'div',
                                    { style: B ? b : v, className: 'ProgressBarDeltaGrow_glow_68' },
                                    a().createElement(Oe, { size: i }),
                                ),
                            );
                        },
                    ),
                    je = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                A = (0, n.useState)(!1),
                                d = A[0],
                                m = A[1],
                                _ = (0, n.useCallback)(
                                    (e) => {
                                        (e === He.Shrink && m(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                F = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Pe, {
                                    size: u,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: s,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: d ? D : F,
                                }),
                                t >= 0 &&
                                    a().createElement(ze, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: _,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    qe = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: i,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = s < r,
                                E = (0, n.useState)(We.Idle),
                                A = E[0],
                                d = E[1],
                                m = A === We.In,
                                _ = A === We.End,
                                F = A === We.Idle,
                                D = (0, n.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (F && !t)
                                    return Ve(() => {
                                        D(We.In);
                                    }, u);
                            }, [D, t, F, u]),
                                (0, n.useEffect)(() => {
                                    if (m)
                                        return Ve(() => {
                                            (o && o(), D(We.End));
                                        }, e + u);
                                }, [D, m, o, u, e]));
                            const C = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                g = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - s)}%`, left: `${c ? s : r}%` }),
                                    [r, c, s],
                                );
                            return _
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: g },
                                      a().createElement(
                                          'div',
                                          { style: F ? C : B, className: 'ProgressBarDeltaSimple_delta_99' },
                                          a().createElement(Oe, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    Ye = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Pe, {
                                    size: u,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: s,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    a().createElement(qe, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Ke = ['onComplete', 'onEndAnimation'];
                function Ze() {
                    return (
                        (Ze =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ze.apply(this, arguments)
                    );
                }
                const Xe = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Ke);
                        const i = (0, n.useState)(!1),
                            s = i[0],
                            o = i[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== s && o(e), e && u && u(), t && t());
                            }, [s, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case Re.Simple:
                                return a().createElement(Ye, Ze({}, r, { onEndAnimation: l, isComplete: s }));
                            case Re.Growing:
                                return a().createElement(je, Ze({}, r, { onEndAnimation: l, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    Qe = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: i }) => {
                        const s = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                o && i && i();
                            }, [o, i]),
                            a().createElement(Pe, { size: e, disabled: r, baseStyles: s, isComplete: o, lineRef: t })
                        );
                    },
                    Je = ['onEndAnimation'];
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                const uu = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, Je);
                    const r = (0, n.useRef)({}),
                        i = (0, n.useCallback)(() => {
                            ((r.current.from = void 0), u && u());
                        }, [u]),
                        s = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = s),
                        a().createElement(
                            Xe,
                            eu({}, t, {
                                onEndAnimation: i,
                                key: `${s}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: s,
                            }),
                        )
                    );
                });
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const nu = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            additionalKey: i,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (r === u)
                                return a().createElement(Qe, {
                                    key: `${r}-${u}-${i}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: c,
                                });
                            const E = {
                                from: r,
                                to: u,
                                size: e,
                                additionalKey: i,
                                lineRef: t,
                                disabled: n,
                                animationSettings: s,
                                onComplete: c,
                                onEndAnimation: o,
                                onChangeAnimationState: l,
                            };
                            return s.withStack
                                ? a().createElement(uu, E)
                                : a().createElement(Xe, tu({ key: `${r}-${u}-${i}` }, E));
                        },
                    ),
                    au = (e) => {
                        var u, t, n, a, r, i, s, o, l, c, E, A, d, m, _, F, D, C, B, g;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (u = null == (t = e.bg) ? void 0 : t.height) ? u : '12rem',
                            '--progress-bg-height-small':
                                null != (n = null == (a = e.bg) ? void 0 : a.heightSmall) ? n : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (r = e.line.filter) ? r : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (i = e.pattern.size) ? i : '3rem 10rem',
                            '--progress-pattern-border-size': null != (s = e.pattern.borderSize) ? s : '1rem',
                            '--progress-pattern-gradient':
                                null != (o = e.pattern.gradient)
                                    ? o
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (l = e.pattern.gradientFinished)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (E = null == (A = e.glowSettings) ? void 0 : A.width) ? E : '60rem',
                            '--progress-glow-height':
                                null != (d = null == (m = e.glowSettings) ? void 0 : m.height) ? d : '100rem',
                            '--progress-glow-small-width':
                                null != (_ = null == (F = e.glowSettings) ? void 0 : F.smallWidth) ? _ : '44rem',
                            '--progress-glow-small-height':
                                null != (D = null == (C = e.glowSettings) ? void 0 : C.smallHeight) ? D : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (B = null == (g = e.glowSettings) ? void 0 : g.mixBlendMode) ? B : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    ru = (e, u, t) => (t < e ? e : t > u ? u : t),
                    iu = (e, u, t) => ('number' == typeof t ? (ru(0, u, t) / u) * 100 : e),
                    su = {
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
                    ou = {
                        freezed: !1,
                        withStack: !1,
                        type: Re.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    lu = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = su,
                            size: t = Ie.Default,
                            animationSettings: r = ou,
                            disabled: i = !1,
                            withoutBackground: s = !1,
                            value: o,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: E,
                            onChangeAnimationState: A,
                            onEndAnimation: d,
                            onComplete: m,
                            className: F,
                        }) => {
                            const D = (function (e, u, t) {
                                return (0, n.useMemo)(() => {
                                    const n = (ru(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: iu(n, u, t) };
                                }, [t, u, e]);
                            })(o, e, l);
                            return a().createElement(
                                'div',
                                { className: _()(xe.base, F, xe[`base__${t}`]), style: au(u) },
                                !s && a().createElement(ke, { size: t }),
                                a().createElement(nu, {
                                    size: t,
                                    lineRef: E,
                                    disabled: i,
                                    value: D.value,
                                    deltaFrom: D.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: r,
                                    onEndAnimation: d,
                                    onChangeAnimationState: A,
                                    onComplete: m,
                                }),
                            );
                        },
                    );
                var cu = t(9690);
                const Eu = {
                    base: 'TankName_base_f1',
                    base__sizeMedium: 'TankName_base__sizeMedium_3a',
                    base__sizBig: 'TankName_base__sizBig_a9',
                    base__typeWhite: 'TankName_base__typeWhite_32',
                    base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                    base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
                    base__typeColored: 'TankName_base__typeColored_bc',
                    level: 'TankName_level_bb',
                    type: 'TankName_type_3c',
                    type__extraSmall: 'TankName_type__extraSmall_80',
                    type__medium: 'TankName_type__medium_ff',
                    type__big: 'TankName_type__big_9a',
                    type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                    type__eliteMedium: 'TankName_type__eliteMedium_10',
                    type__eliteBig: 'TankName_type__eliteBig_ac',
                    name: 'TankName_name_56',
                    premiumIGR: 'TankName_premiumIGR_25',
                };
                let Au, du;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(Au || (Au = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(du || (du = {})));
                const mu = ({
                        isElite: e,
                        vehicleName: u,
                        vehicleShortName: t,
                        vehicleType: n,
                        vehicleLvl: r,
                        tags: i = '',
                        size: s = Au.extraSmall,
                        type: o = du.colored,
                        className: l,
                        classNames: c,
                        isShortName: E = !1,
                    }) => {
                        const A = `${(0, ee.BN)(n)}${e ? '_elite' : ''}`,
                            d = R.images.gui.maps.icons.vehicleTypes.big.$dyn(A);
                        return a().createElement(
                            'div',
                            {
                                className: _()(
                                    Eu.base,
                                    Eu[`base__size${(0, ee.e)(s)}`],
                                    Eu[`base__type${(0, ee.e)(o)}`],
                                    l,
                                ),
                            },
                            a().createElement(
                                'div',
                                { className: _()(Eu.level, null == c ? void 0 : c.level) },
                                (0, cu.HG)(r),
                            ),
                            a().createElement('div', {
                                className: _()(
                                    Eu.type,
                                    e && Eu[`type__elite${(0, ee.e)(s)}`],
                                    Eu[`type__${s}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: n ? { backgroundImage: `url(${d})` } : void 0,
                            }),
                            ((e, u) => e.split(',').includes(u))(i, 'premiumIGR') &&
                                a().createElement('div', { className: Eu.premiumIGR }),
                            a().createElement(
                                'div',
                                { className: _()(Eu.name, null == c ? void 0 : c.name) },
                                E ? t : u,
                            ),
                        );
                    },
                    _u = 'ActiveState_button_73';
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                const Du = R.strings.resource_well.mainView.footer,
                    Cu = ({
                        vehicleInfo: e,
                        progression: u,
                        isSmall: t,
                        onResourcesContribute: n,
                        onResourcesReturn: r,
                        eventMode: i,
                    }) =>
                        a().createElement(
                            'div',
                            { className: 'ActiveState_activeState_23' },
                            a().createElement(
                                'div',
                                { className: 'ActiveState_progressionWrapper_9d' },
                                a().createElement(
                                    'div',
                                    { className: 'ActiveState_topLine_04' },
                                    a().createElement(
                                        'div',
                                        { className: 'ActiveState_progressionTitle_27' },
                                        a().createElement(
                                            'span',
                                            null,
                                            i === q.TWO_PARALLEL_PRODUCTS
                                                ? Du.activeState.progressionFor.title()
                                                : Du.activeState.progression.title(),
                                        ),
                                        i === q.TWO_PARALLEL_PRODUCTS &&
                                            e &&
                                            a().createElement(
                                                mu,
                                                Fu({}, e, {
                                                    className: 'ActiveState_tankName_78',
                                                    size: Au.extraSmall,
                                                    type: du.white,
                                                }),
                                            ),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: 'ActiveState_percentWrapper_a8' },
                                        a().createElement(
                                            se,
                                            {
                                                contentId:
                                                    R.views.resource_well.lobby.feature.tooltips.ProgressTooltip(
                                                        'resId',
                                                    ),
                                            },
                                            a().createElement(
                                                'div',
                                                { className: 'ActiveState_activePercent_35' },
                                                `${u}%`,
                                            ),
                                        ),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'ActiveState_progressionBg_72' },
                                    a().createElement(
                                        se,
                                        {
                                            contentId:
                                                R.views.resource_well.lobby.feature.tooltips.ProgressTooltip('resId'),
                                        },
                                        a().createElement(
                                            'div',
                                            { className: 'ActiveState_progressBar_bd' },
                                            a().createElement(lu, { value: u, maxValue: 100 }),
                                        ),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'ActiveState_scaleValueWrapper_c7' },
                                    a().createElement('div', { className: 'ActiveState_minValue_54' }, '0%'),
                                    a().createElement('div', null, '100%'),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: 'ActiveState_buttonsBlock_e4' },
                                a().createElement('div', { className: 'ActiveState_iconInfoEmpty_42' }),
                                a().createElement(
                                    Q.u5,
                                    { type: Q.L$.main, size: t ? Q.qE.small : Q.qE.medium, onClick: n, mixClass: _u },
                                    Du.buttonChoose.text(),
                                ),
                                a().createElement(
                                    se,
                                    {
                                        contentId:
                                            R.views.resource_well.lobby.feature.tooltips.RefundResourcesTooltip(
                                                'resId',
                                            ),
                                    },
                                    a().createElement(
                                        'div',
                                        { className: 'ActiveState_buttonReturnBlock_da' },
                                        a().createElement(
                                            Q.u5,
                                            {
                                                type: Q.L$.ghost,
                                                size: t ? Q.qE.small : Q.qE.medium,
                                                onClick: r,
                                                mixClass: _u,
                                            },
                                            Du.activeState.buttonReturn.text(),
                                        ),
                                        a().createElement('div', { className: 'ActiveState_iconInfo_82' }),
                                    ),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: 'ActiveState_footerDescr_f1' },
                                Du.description.text(),
                            ),
                        ),
                    Bu = R.strings.resource_well.mainView.footer,
                    gu = ({ isSmall: e, onHangarShow: u }) =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement('div', { className: 'Forbidden_footerTitle_2a' }, Bu.forbidden.title()),
                            a().createElement(
                                'div',
                                { className: 'Forbidden_footerSubtitle_dc' },
                                Bu.forbidden.subTitle(),
                            ),
                            a().createElement(
                                'div',
                                { className: 'Forbidden_buttonsBlock_89' },
                                a().createElement(
                                    Q.u5,
                                    {
                                        type: Q.L$.primary,
                                        size: e ? Q.qE.small : Q.qE.medium,
                                        onClick: u,
                                        mixClass: 'Forbidden_button_da',
                                    },
                                    Bu.backToHangar.button.text(),
                                ),
                            ),
                        );
                function hu() {
                    return (
                        (hu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        hu.apply(this, arguments)
                    );
                }
                const vu = R.strings.resource_well.mainView.footer,
                    bu = ({ isSmall: e, onResourcesContribute: u, vehicleInfo: t }) =>
                        t
                            ? a().createElement(
                                  a().Fragment,
                                  null,
                                  a().createElement(ue, {
                                      classMix: 'NoProgress_footerTitle_9e',
                                      text: vu.noProgress.title(),
                                      binding: {
                                          vehicleName: a().createElement(
                                              mu,
                                              hu({}, t, {
                                                  className: 'NoProgress_tankName_5b',
                                                  classNames: { typeIcon: 'NoProgress_tankIcon_9d' },
                                                  size: Au.extraSmall,
                                                  type: du.white,
                                              }),
                                          ),
                                      },
                                  }),
                                  a().createElement(
                                      'div',
                                      { className: 'NoProgress_buttonsBlock_38' },
                                      a().createElement(
                                          Q.u5,
                                          {
                                              type: Q.L$.main,
                                              size: e ? Q.qE.small : Q.qE.medium,
                                              onClick: u,
                                              mixClass: 'NoProgress_button_a1',
                                          },
                                          vu.buttonChoose.text(),
                                      ),
                                  ),
                                  a().createElement(
                                      'div',
                                      { className: 'NoProgress_footerDescr_a2' },
                                      vu.description.text(),
                                  ),
                              )
                            : a().createElement(
                                  a().Fragment,
                                  null,
                                  a().createElement(
                                      'div',
                                      { className: 'NoProgress_selectVehicleTitle_e0' },
                                      vu.noProgress.selectVehicle.title(),
                                  ),
                                  a().createElement(
                                      'div',
                                      { className: 'NoProgress_selectVehicleDescription_bb' },
                                      vu.noProgress.selectVehicle.description(),
                                  ),
                              ),
                    pu = (0, X.Pi)(() => {
                        var e, u;
                        const t = h().mediaSize,
                            r = Z(),
                            i = r.model,
                            s = r.controls,
                            o = i.root.get(),
                            l = o.progression,
                            c = o.progressionState,
                            E = o.eventMode,
                            A = null == (e = i.computes.selectedReward()) ? void 0 : e.vehicleInfo,
                            d = null == (u = i.computes.selectedReward()) ? void 0 : u.rewardId,
                            m = t === C.Small || t === C.ExtraSmall,
                            F = (0, n.useCallback)(() => d && s.returnResources(d), [s, d]),
                            D = (0, n.useCallback)(() => d && s.contributeResources(d), [s, d]);
                        return a().createElement(
                            'div',
                            { className: _()(Le.base, Le[`base__${c}`]) },
                            a().createElement('div', { className: Le.topLip }),
                            a().createElement('div', { className: Le.topLightline }),
                            (() => {
                                switch (c) {
                                    case ne.Active:
                                        return a().createElement(Cu, {
                                            isSmall: m,
                                            vehicleInfo: A,
                                            onResourcesReturn: F,
                                            onResourcesContribute: D,
                                            progression: l,
                                            eventMode: E,
                                        });
                                    case ne.NoVehicles:
                                        return a().createElement(Te.t, {
                                            isSmall: m,
                                            onHangarShow: s.showHangar,
                                            subTitle: R.strings.resource_well.mainView.footer.noVehicles.subTitle(),
                                        });
                                    case ne.NoProgress:
                                        return a().createElement(bu, {
                                            isSmall: m,
                                            onResourcesContribute: D,
                                            vehicleInfo: A,
                                        });
                                    default:
                                        return a().createElement(gu, { isSmall: m, onHangarShow: s.showHangar });
                                }
                            })(),
                        );
                    }),
                    fu = R.strings.resource_well,
                    wu = () =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                Ee,
                                { ignoreMouseClick: !0, body: R.strings.resource_well.tooltips.counter.error.text() },
                                a().createElement(
                                    'div',
                                    { className: 'ErrorState_errorWrapper_8f' },
                                    a().createElement('div', { className: 'ErrorState_alertIcon_2f' }),
                                    a().createElement(
                                        'div',
                                        { className: 'ErrorState_decoration_35' },
                                        a().createElement('div', { className: 'ErrorState_counterBg_9d' }),
                                        a().createElement(
                                            'div',
                                            { className: 'ErrorState_errorLineWrapper_83' },
                                            Array.from({ length: 6 }).map((e, u) =>
                                                a().createElement('div', {
                                                    key: u,
                                                    className: 'ErrorState_errorLine_23',
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: 'ErrorState_tanksLeftText_b5' },
                                fu.eventInfo.withoutStyle.tanksLeftText(),
                            ),
                        ),
                    Su = {
                        base: 'Counter_base_27',
                        base__entryPointTooltip: 'Counter_base__entryPointTooltip_98',
                        counterNumber: 'Counter_counterNumber_8f',
                        counterNumber__less: 'Counter_counterNumber__less_54',
                        base__mainScreen: 'Counter_base__mainScreen_2e',
                        textWrapper: 'Counter_textWrapper_40',
                        tanksOverText: 'Counter_tanksOverText_0c',
                        counterBg: 'Counter_counterBg_e6',
                        counterBgGlow: 'Counter_counterBgGlow_6e',
                    },
                    yu = ({ vehiclesLeftCount: e, showCounterGlow: u, usagePlace: t }) =>
                        a().createElement(
                            'div',
                            { className: _()(Su.base, Su[`base__${t}`]) },
                            e
                                ? a().createElement(
                                      Ee,
                                      {
                                          ignoreMouseClick: !0,
                                          body: R.strings.resource_well.tooltips.counter.warning.text(),
                                      },
                                      a().createElement(
                                          'div',
                                          { className: _()(Su.counterNumber, u && Su.counterNumber__less) },
                                          a().createElement('div', { className: Su.counterBg }),
                                          u && a().createElement('div', { className: Su.counterBgGlow }),
                                          a().createElement(J, { format: 'integral', value: e }),
                                      ),
                                  )
                                : a().createElement(
                                      'div',
                                      { className: Su.textWrapper },
                                      a().createElement('div', { className: Su.counterBg }),
                                      a().createElement(
                                          'div',
                                          { className: Su.tanksOverText },
                                          R.strings.resource_well.eventInfo.tanksOver(),
                                      ),
                                  ),
                        );
                var Tu = t(2106);
                const Lu = (0, X.Pi)(({ vehicleIndex: e, title: u }) => {
                        var t;
                        const r = Z(),
                            i = r.model,
                            s = r.controls,
                            o = i.root.get(),
                            l = o.eventMode,
                            c = o.progressionState,
                            E = null == (t = i.computes.selectedReward()) ? void 0 : t.rewardId,
                            A = i.rewards.get()[e].value,
                            d = A.rewardId,
                            m = A.vehiclesLeftCount,
                            _ = A.state,
                            F = A.hasStyle,
                            D = s.selectReward,
                            C = (0, n.useCallback)(() => {
                                D(d);
                            }, [D, d]),
                            B =
                                l === q.TWO_PARALLEL_PRODUCTS &&
                                _ === j.ACTIVE &&
                                E !== d &&
                                c !== ne.Forbidden &&
                                Boolean(m),
                            g = ([q.ONE_SERIAL_PRODUCT, q.SEQUENTIAL_PRODUCT].includes(l) && F) || m <= 1e4;
                        return a().createElement(
                            'div',
                            { className: 'ActiveState_base_c9' },
                            a().createElement(yu, {
                                vehiclesLeftCount: m,
                                showCounterGlow: g,
                                usagePlace: te.mainScreen,
                            }),
                            u && Boolean(m) && a().createElement('div', { className: 'ActiveState_title_e0' }, u),
                            B &&
                                a().createElement(
                                    Ee,
                                    { body: R.strings.resource_well.tooltips.mainView.selectVehicle.button() },
                                    a().createElement(
                                        Q.u5,
                                        {
                                            type: Tu.L.primary,
                                            size: Q.qE.medium,
                                            mixClass: 'ActiveState_button_06',
                                            onClick: C,
                                        },
                                        R.strings.resource_well.counterStates.activeState.selectVehicleButton(),
                                    ),
                                ),
                        );
                    }),
                    xu = ({ title: e }) =>
                        a().createElement(
                            'div',
                            { className: 'VehicleReceivedState_base_fe' },
                            a().createElement(
                                'div',
                                { className: 'VehicleReceivedState_receiveDecoration_d5' },
                                a().createElement(
                                    'div',
                                    { className: 'VehicleReceivedState_receiveDoneIcon_5a' },
                                    a().createElement(
                                        'div',
                                        { className: 'VehicleReceivedState_receiveGreenBg_01' },
                                        a().createElement('div', {
                                            className: 'VehicleReceivedState_receiveGreenLine_a0',
                                        }),
                                    ),
                                ),
                            ),
                            a().createElement('div', { className: 'VehicleReceivedState_receiveTitle_a0' }, e),
                        ),
                    Iu = R.strings.resource_well,
                    Ru = ({ vehiclesLeftCount: e }) =>
                        a().createElement(
                            'div',
                            { className: 'DisabledState_base_1a' },
                            a().createElement(
                                'div',
                                { className: 'DisabledState_innerWrapper_a3' },
                                a().createElement('div', { className: 'DisabledState_lockIcon_02' }),
                                a().createElement(
                                    'div',
                                    { className: 'DisabledState_textInfoWrapper_2f' },
                                    a().createElement(ue, {
                                        classMix: 'DisabledState_tanksLeftBlockedText_ed',
                                        text: Iu.eventInfo.withoutStyle.blocked.textInfo(),
                                        binding: {
                                            regularRewardVehiclesCount: a().createElement(J, {
                                                format: 'integral',
                                                value: e,
                                            }),
                                        },
                                    }),
                                ),
                            ),
                        ),
                    ku = R.strings.resource_well,
                    Nu = (0, X.Pi)(({ vehicleIndex: e }) => {
                        const u = Z().model,
                            t = u.root.get().eventMode,
                            n = u.rewards.get()[e].value,
                            r = n.vehiclesLeftCount,
                            i = n.hasStyle,
                            s = n.state,
                            o =
                                t === q.TWO_PARALLEL_PRODUCTS
                                    ? ku.eventInfo.inParallelEventMode.tanksLeftText()
                                    : i
                                      ? ku.eventInfo.top.tanksLeftText()
                                      : ku.eventInfo.withoutStyle.tanksLeftText();
                        return a().createElement(
                            a().Fragment,
                            null,
                            (() => {
                                switch (!0) {
                                    case s === j.COUNT_NOT_AVAILABLE:
                                        return a().createElement(
                                            'div',
                                            { className: 'CounterStates_errorState_79' },
                                            a().createElement(wu, null),
                                        );
                                    case s === j.ALREADY_RECEIVED || s === j.ALREADY_IN_GARAGE:
                                        return a().createElement(
                                            'div',
                                            { className: 'CounterStates_vehicleReceivedState_29' },
                                            a().createElement(xu, {
                                                title:
                                                    s === j.ALREADY_RECEIVED
                                                        ? ku.eventInfo.tanksAlreadyReceived()
                                                        : ku.eventInfo.tanksAlreadyInGarage(),
                                            }),
                                        );
                                    case s === j.NOT_AVAILABLE:
                                        return a().createElement(
                                            'div',
                                            { className: 'CounterStates_disabledState_bb' },
                                            a().createElement(Ru, { vehiclesLeftCount: r }),
                                        );
                                    default:
                                        return a().createElement(
                                            'div',
                                            { className: 'CounterStates_activeState_b3' },
                                            a().createElement(Lu, { vehicleIndex: e, title: o }),
                                        );
                                }
                            })(),
                        );
                    }),
                    Ou = 'Tank_tank_42',
                    Mu = 'Tank_tank__state--show_a5',
                    Pu = ({
                        isTankActive: e,
                        activeTankImageSrc: u,
                        defaultTankImageSrc: t,
                        lightsImageSrc: n,
                        isLightsActive: r,
                    }) =>
                        a().createElement(
                            'div',
                            { className: 'Tank_base_9c' },
                            a().createElement(
                                'div',
                                { className: 'Tank_tankWrapper_30' },
                                a().createElement('div', {
                                    className: _()(Ou, e && Mu),
                                    style: { backgroundImage: `url(${u})` },
                                }),
                                a().createElement('div', {
                                    className: _()(Ou, !e && Mu),
                                    style: { backgroundImage: `url(${t})` },
                                }),
                            ),
                            a().createElement('div', {
                                className: _()('Tank_tankLight_81', r && 'Tank_tankLight__state--show_73'),
                                style: { backgroundImage: `url(${n})` },
                            }),
                        ),
                    Vu = 'TankDust_particles_88',
                    Hu = ({ isDustActive: e, classNames: u }) =>
                        a().createElement(
                            'div',
                            { className: _()('TankDust_base_94', e && 'TankDust_base__state--show_9c') },
                            a().createElement('img', {
                                className: _()(Vu, null == u ? void 0 : u.dust),
                                src: 'swf://gui/flash/animations/resourceWell/DustAni_dust.swf',
                            }),
                            a().createElement('img', {
                                className: _()(Vu, null == u ? void 0 : u.parts),
                                src: 'swf://gui/flash/animations/resourceWell/DustAni_parts.swf',
                            }),
                        ),
                    Wu =
                        (e, u) =>
                        (...t) => {
                            if (e(...t)) return u(...t);
                        };
                let $u;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })($u || ($u = {}));
                var Uu = t(7727);
                const Gu = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    zu = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function ju() {
                    return (
                        (ju =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ju.apply(this, arguments)
                    );
                }
                const qu = (e) => {
                    let u = e.type,
                        t = e.children,
                        r = e.className,
                        i = e.classNames,
                        s = e.disabled,
                        o = void 0 !== s && s,
                        l = e.isVisibleLabel,
                        c = void 0 !== l && l,
                        E = e.soundHover,
                        A = void 0 === E ? R.sounds.highlight() : E,
                        d = e.soundClick,
                        m = void 0 === d ? R.sounds.play() : d,
                        F = e.size,
                        D = void 0 === F ? 'normal' : F,
                        C = e.onClick,
                        B = e.onMouseEnter,
                        g = e.onMouseLeave,
                        h = e.onMouseDown,
                        v = e.onMouseUp,
                        b = e.onFocus,
                        p = e.onBlur,
                        f = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, zu);
                    const w = (0, n.useState)(!1),
                        S = w[0],
                        y = w[1],
                        T = (0, n.useState)(!1),
                        L = T[0],
                        x = T[1],
                        I = (0, n.useRef)(null),
                        k = () => !1 === o,
                        N = (e) => k() && ((e) => e.button === $u.LEFT)(e),
                        O = Wu(k, (e) => {
                            null == C || C(e);
                        }),
                        M = Wu(N, (e) => {
                            (y(!0), null == h || h(e), m && (0, Uu.G)(m));
                        }),
                        P = Wu(N, (e) => {
                            (y(!1), null == v || v(e));
                        }),
                        V = Wu(k, (e) => {
                            (x(!0), null == B || B(e), A && (0, Uu.G)(A));
                        }),
                        H = Wu(k, (e) => {
                            null == b || b(e);
                        }),
                        W = Wu(k, (e) => {
                            null == p || p(e);
                        });
                    return a().createElement(
                        'div',
                        ju(
                            {
                                ref: I,
                                className: _()(
                                    Gu.base,
                                    o && Gu.base__disabled,
                                    c && Gu.base__visibleLabel,
                                    !o && S && Gu.base__mouseDown,
                                    !o && L && Gu.base__hovered,
                                    r,
                                ),
                                onClick: O,
                                onMouseEnter: V,
                                onMouseLeave: (e) => {
                                    (x(!1), y(!1), null == g || g(e));
                                },
                                onMouseDown: M,
                                onMouseUp: P,
                                onFocus: H,
                                onBlur: W,
                            },
                            f,
                        ),
                        a().createElement('div', {
                            className: _()(Gu.icon, Gu[`icon__${D}`], Gu[`icon__${u}`], null == i ? void 0 : i.icon),
                        }),
                        t &&
                            a().createElement(
                                'div',
                                { className: _()(Gu.label, Gu[`label__${D}`], null == i ? void 0 : i.label) },
                                t,
                            ),
                    );
                };
                var Yu = t(5617);
                const Ku = 'VehicleInfo_infoText_a5',
                    Zu = R.strings.resource_well,
                    Xu = (0, X.Pi)(({ vehicleIndex: e }) => {
                        var u;
                        const t = Z(),
                            r = t.model,
                            i = t.controls,
                            s = r.root.get().eventMode,
                            o = r.rewards.get()[e].value,
                            l = o.vehicleInfo,
                            c = o.vehiclesLeftCount,
                            E = o.hasStyle,
                            A = o.rewardId,
                            d = o.state,
                            m = [j.ALREADY_RECEIVED, j.ALREADY_IN_GARAGE].includes(d),
                            F = null == (u = r.computes.selectedReward()) ? void 0 : u.rewardId,
                            D = (!m && 0 === c) || (F && F !== A),
                            C = (0, n.useCallback)(() => i.preview(A), [i, A]);
                        return a().createElement(
                            'div',
                            { className: 'VehicleInfo_base_ae' },
                            !m &&
                                a().createElement(
                                    qu,
                                    { className: 'VehicleInfo_preview_fb', type: 'preview', onClick: C },
                                    a().createElement(
                                        'div',
                                        { className: 'VehicleInfo_label_c1' },
                                        Zu.mainView.preview.label(),
                                    ),
                                ),
                            a().createElement(
                                'div',
                                { className: 'VehicleInfo_vehicleInfoWrapper_77' },
                                a().createElement(Yu.e, {
                                    vehicleInfo: l,
                                    theme: Yu.b.Progression,
                                    className: _()(
                                        'VehicleInfo_vehicleInfo_97',
                                        D && 'VehicleInfo_vehicleInfo__disabled_af',
                                    ),
                                }),
                                [q.SEQUENTIAL_PRODUCT, q.ONE_SERIAL_PRODUCT].includes(s) &&
                                    a().createElement(
                                        'div',
                                        { className: 'VehicleInfo_styleInfo_7a' },
                                        E
                                            ? a().createElement(
                                                  se,
                                                  {
                                                      contentId:
                                                          R.views.resource_well.lobby.feature.tooltips.SerialNumberTooltip(
                                                              'resId',
                                                          ),
                                                  },
                                                  a().createElement(
                                                      'div',
                                                      { className: 'VehicleInfo_infoWrapper_2f' },
                                                      a().createElement(
                                                          'div',
                                                          { className: Ku },
                                                          Zu.eventInfo.top.styleText(),
                                                      ),
                                                      a().createElement('div', {
                                                          className: 'VehicleInfo_infoIcon_c2',
                                                      }),
                                                  ),
                                              )
                                            : a().createElement(
                                                  'div',
                                                  { className: Ku },
                                                  Zu.eventInfo.withoutStyle.styleText(),
                                              ),
                                    ),
                            ),
                        );
                    }),
                    Qu = {
                        base: 'OneSerialVehicle_base_5b',
                        tank: 'OneSerialVehicle_tank_61',
                        dust: 'OneSerialVehicle_dust_a9',
                        'base__tankIndex--0': 'OneSerialVehicle_base__tankIndex--0_a5',
                        parts: 'OneSerialVehicle_parts_f9',
                        vehicleInfo: 'OneSerialVehicle_vehicleInfo_37',
                    },
                    Ju = (0, X.Pi)(({ vehicleIndex: e }) => {
                        const u = Z().model.rewards.get()[e].value,
                            t = u.vehiclesLeftCount,
                            n = u.state,
                            r = Boolean(t) && n === j.ACTIVE;
                        return e
                            ? null
                            : a().createElement(
                                  'div',
                                  { className: _()(Qu.base, Qu[`base__tankIndex--${e}`]) },
                                  a().createElement(
                                      'div',
                                      { className: Qu.tank },
                                      a().createElement(Pu, {
                                          isTankActive: r,
                                          activeTankImageSrc: R.images.resource_well.gui.maps.icons.tanksBg.$dyn(
                                              `tank_${e}_active`,
                                          ),
                                          defaultTankImageSrc: R.images.resource_well.gui.maps.icons.tanksBg.$dyn(
                                              `tank_${e}_default`,
                                          ),
                                          lightsImageSrc: R.images.resource_well.gui.maps.icons.tanksBg.$dyn(
                                              `tank_${e}_shine`,
                                          ),
                                          isLightsActive: r,
                                      }),
                                  ),
                                  a().createElement(Hu, {
                                      isDustActive: r,
                                      classNames: { parts: Qu.parts, dust: Qu.dust },
                                  }),
                                  a().createElement(
                                      'div',
                                      { className: Qu.vehicleInfo },
                                      a().createElement(Xu, { vehicleIndex: e }),
                                      a().createElement(Nu, { vehicleIndex: e }),
                                  ),
                              );
                    }),
                    et = {
                        base: 'ParallelVehicle_base_80',
                        vehicle: 'ParallelVehicle_vehicle_69',
                        dust: 'ParallelVehicle_dust_ce',
                        'base__tankIndex--0': 'ParallelVehicle_base__tankIndex--0_d8',
                        'base__tankIndex--1': 'ParallelVehicle_base__tankIndex--1_2a',
                        parts: 'ParallelVehicle_parts_ee',
                        vehicleInfo: 'ParallelVehicle_vehicleInfo_c8',
                    },
                    ut = (0, X.Pi)(({ vehicleIndex: e }) => {
                        var u;
                        const t = Z().model,
                            n = null == (u = t.computes.selectedReward()) ? void 0 : u.rewardId,
                            r = t.rewards.get()[e].value,
                            i = r.vehiclesLeftCount,
                            s = r.rewardId,
                            o = r.state,
                            l =
                                (Boolean(i) && o === j.ACTIVE && !n) ||
                                (j.ACTIVE && n === s) ||
                                [j.ALREADY_IN_GARAGE, j.ALREADY_RECEIVED].includes(o),
                            c = Boolean(i) && o === j.ACTIVE && n === s;
                        return a().createElement(
                            'div',
                            { className: _()(et.base, et[`base__tankIndex--${e}`]) },
                            a().createElement(
                                'div',
                                { className: et.vehicle },
                                a().createElement(Pu, {
                                    isTankActive: l,
                                    activeTankImageSrc: R.images.resource_well.gui.maps.icons.tanksBg.$dyn(
                                        `tank_${e}_active`,
                                    ),
                                    defaultTankImageSrc: R.images.resource_well.gui.maps.icons.tanksBg.$dyn(
                                        `tank_${e}_default`,
                                    ),
                                    lightsImageSrc: R.images.resource_well.gui.maps.icons.tanksBg.$dyn(
                                        `tank_${e}_shine`,
                                    ),
                                    isLightsActive: c,
                                }),
                            ),
                            a().createElement(Hu, { isDustActive: c, classNames: { parts: et.parts, dust: et.dust } }),
                            a().createElement(
                                'div',
                                { className: et.vehicleInfo },
                                a().createElement(Xu, { vehicleIndex: e }),
                                a().createElement(Nu, { vehicleIndex: e }),
                            ),
                        );
                    }),
                    tt = {
                        base: 'SequentialVehicle_base_8b',
                        tank: 'SequentialVehicle_tank_e1',
                        dust: 'SequentialVehicle_dust_3f',
                        'base__tankIndex--0': 'SequentialVehicle_base__tankIndex--0_40',
                        'base__tankIndex--1': 'SequentialVehicle_base__tankIndex--1_65',
                        parts: 'SequentialVehicle_parts_d3',
                        vehicleInfo: 'SequentialVehicle_vehicleInfo_5c',
                    },
                    nt = (0, X.Pi)(({ vehicleIndex: e }) => {
                        const u = Z().model.rewards.get()[e].value,
                            t = u.vehiclesLeftCount,
                            n = u.state,
                            r = Boolean(t) && n === j.ACTIVE;
                        return a().createElement(
                            'div',
                            { className: _()(tt.base, tt[`base__tankIndex--${e}`]) },
                            a().createElement(
                                'div',
                                { className: tt.tank },
                                a().createElement(Pu, {
                                    isTankActive: r,
                                    activeTankImageSrc: R.images.resource_well.gui.maps.icons.tanksBg.$dyn(
                                        `tank_${e}_active`,
                                    ),
                                    defaultTankImageSrc: R.images.resource_well.gui.maps.icons.tanksBg.$dyn(
                                        `tank_${e}_default`,
                                    ),
                                    lightsImageSrc: R.images.resource_well.gui.maps.icons.tanksBg.$dyn(
                                        `tank_${e}_shine`,
                                    ),
                                    isLightsActive: r,
                                }),
                            ),
                            a().createElement(Hu, { isDustActive: r, classNames: { parts: tt.parts, dust: tt.dust } }),
                            a().createElement(
                                'div',
                                { className: tt.vehicleInfo },
                                a().createElement(Xu, { vehicleIndex: e }),
                                a().createElement(Nu, { vehicleIndex: e }),
                            ),
                        );
                    }),
                    at = (0, X.Pi)(() => {
                        const e = Z().model,
                            u = e.root.get().eventMode,
                            t = e.rewards.get();
                        return a().createElement(
                            'div',
                            { className: 'Rewards_base_07' },
                            t.map((e, t) =>
                                u === q.TWO_PARALLEL_PRODUCTS
                                    ? a().createElement(ut, { key: t, vehicleIndex: t })
                                    : u === q.SEQUENTIAL_PRODUCT
                                      ? a().createElement(nt, { key: t, vehicleIndex: t })
                                      : u === q.ONE_SERIAL_PRODUCT
                                        ? a().createElement(Ju, { key: t, vehicleIndex: t })
                                        : null,
                            ),
                        );
                    }),
                    rt = (0, X.Pi)(() => {
                        const e = Z(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get().eventMode,
                            r = t.close,
                            i = t.showAbout,
                            s = u.rewards.get();
                        var o;
                        ((o = r), H(M.n.ESCAPE, o));
                        const l =
                            !s.every((e) => e.value.state === j.SOLD_OUT) &&
                            s.every((e) =>
                                [j.ALREADY_IN_GARAGE, j.ALREADY_RECEIVED, j.SOLD_OUT].includes(e.value.state),
                            );
                        return a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                'div',
                                { className: 'App_base_e5' },
                                a().createElement('div', { className: 'App_additionalBg_40' }),
                                a().createElement(
                                    'div',
                                    { className: 'App_aboutButton_97' },
                                    a().createElement(O, {
                                        caption: R.strings.resource_well.commonTexts.aboutButton(),
                                        type: 'info',
                                        onClick: i,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'App_close_e1' },
                                    a().createElement(O, {
                                        caption: R.strings.resource_well.commonTexts.closeBtn(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: r,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'App_eventInfo_d2' },
                                    a().createElement(ye, null),
                                ),
                                a().createElement(at, null),
                                n === q.TWO_PARALLEL_PRODUCTS && l
                                    ? a().createElement(
                                          Q.u5,
                                          {
                                              mixClass: 'App_affirmative_22',
                                              type: Q.L$.primary,
                                              size: Q.qE.medium,
                                              onClick: r,
                                          },
                                          R.strings.resource_well.mainView.affirmative.button(),
                                      )
                                    : a().createElement(pu, null),
                            ),
                            a().createElement('div', { className: 'App_animationBg_4c' }),
                        );
                    });
                engine.whenReady.then(() => {
                    x().render(
                        a().createElement(K, null, a().createElement(T, null, a().createElement(rt, null))),
                        document.getElementById('root'),
                    );
                });
            },
            7162: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => s });
                var n = t(3457),
                    a = t(7363),
                    r = t.n(a);
                const i = R.strings.resource_well.mainView.footer,
                    s = ({ isSmall: e, onHangarShow: u, subTitle: t }) =>
                        r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                                'div',
                                { className: 'NoVehiclesState_footerTitle_29' },
                                i.noVehicles.title(),
                            ),
                            r().createElement('div', { className: 'NoVehiclesState_footerSubtitle_e6' }, t),
                            r().createElement(
                                'div',
                                { className: 'NoVehiclesState_buttonsBlock_d7' },
                                r().createElement(
                                    n.u5,
                                    {
                                        type: n.L$.primary,
                                        size: e ? n.qE.small : n.qE.medium,
                                        onClick: u,
                                        mixClass: 'NoVehiclesState_button_bb',
                                    },
                                    i.backToHangar.button.text(),
                                ),
                            ),
                        );
            },
            5617: (e, u, t) => {
                'use strict';
                t.d(u, { b: () => c, e: () => E });
                var n = t(6483),
                    a = t.n(n),
                    r = t(9690),
                    i = t(3649),
                    s = t(7363),
                    o = t.n(s);
                const l = {
                    base: 'VehicleInfo_base_a4',
                    base__intro: 'VehicleInfo_base__intro_3f',
                    base__progression: 'VehicleInfo_base__progression_3a',
                    type: 'VehicleInfo_type_41',
                    base__award: 'VehicleInfo_base__award_f8',
                    ico: 'VehicleInfo_ico_6c',
                };
                let c;
                !(function (e) {
                    ((e.Intro = 'intro'), (e.Award = 'award'), (e.Progression = 'progression'));
                })(c || (c = {}));
                const E = ({ vehicleInfo: e, theme: u, className: t }) => {
                    const n = e.vehicleLvl,
                        s = e.vehicleName,
                        c = e.vehicleType,
                        E = e.isElite;
                    return o().createElement(
                        'div',
                        { className: a()(l.base, l[`base__${u}`], t) },
                        (0, r.cg)(n),
                        o().createElement(
                            'div',
                            { className: l.type, lang: R.strings.settings.LANGUAGE_CODE() },
                            o().createElement('div', {
                                className: l.ico,
                                style: (() => {
                                    const e = (0, i.BN)(c);
                                    return {
                                        backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${e}${E ? '_elite' : ''}`)})`,
                                    };
                                })(),
                            }),
                        ),
                        s,
                    );
                };
            },
            6880: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
            },
            7363: (e) => {
                'use strict';
                e.exports = React;
            },
            1533: (e) => {
                'use strict';
                e.exports = ReactDOM;
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 'lobby/feature/ProgressionView/ProgressionView'),
        (() => {
            var e = {
                'lobby/feature/ProgressionView/ProgressionView': 0,
                'lobby/feature/sharedComponents/NoVehiclesState/NoVehiclesState': 0,
                'lobby/feature/sharedComponents/VehicleInfo/VehicleInfo': 0,
            };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        ((a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/resource_well.vendors'], () =>
        __webpack_require__(2746),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
