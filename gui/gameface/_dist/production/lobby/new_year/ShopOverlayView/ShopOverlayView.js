(() => {
    var __webpack_modules__ = {
            280: (u, e, t) => {
                'use strict';
                t.d(e, { z: () => l });
                var n = t(6483),
                    a = t.n(n),
                    r = t(3649),
                    i = t(6179),
                    o = t.n(i),
                    s = t(5287);
                const l = ({
                    binding: u,
                    text: e = '',
                    classMix: t,
                    alignment: n = r.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && u ? (0, r.WU)(e, u) : e;
                    return o().createElement(
                        i.Fragment,
                        null,
                        c.split('\n').map((e, l) =>
                            o().createElement(
                                'div',
                                { className: a()(s.Z.base, t), key: `${e}-${l}` },
                                (0, r.Uw)(e, n, u).map((u, e) =>
                                    o().createElement(i.Fragment, { key: `${e}-${u}` }, u),
                                ),
                            ),
                        ),
                    );
                };
            },
            926: (u) => {
                u.exports = {
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
            527: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i }));
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (u, e) => engine.on(u, e),
                    s = (u, e) => engine.off(u, e),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${e}`,
                                        i = l[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, o),
                                                (u.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            ((u.enabled = !1), n());
                        },
                        enable() {
                            ((u.enabled = !0), n());
                        },
                        enableOutside() {
                            u.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(527),
                    a = t(2493);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2493: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function a(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => a, G: () => n });
            },
            2472: (u, e, t) => {
                'use strict';
                function n(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => n });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => i });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((u, e) => ((u[e] = () => (0, n.playSound)(a[e])), u), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (u, e, t) => {
                'use strict';
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => a });
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
            7641: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => y,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => p,
                        getFontNames: () => b,
                        getScale: () => C,
                        getSize: () => A,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => v,
                        isFocused: () => h,
                        pxToRem: () => B,
                        remToPx: () => _,
                        resize: () => F,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    }));
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                const o = 15;
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, o);
                }
                function c(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function d(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, o);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function D(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: _(e.x), y: _(e.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function C() {
                    return viewEnv.getScale();
                }
                function B(u) {
                    return viewEnv.pxToRem(u);
                }
                function _(u) {
                    return viewEnv.remToPx(u);
                }
                function g(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const b = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    y = Object.keys(a.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === a.W[e]), u),
                        {},
                    ),
                    x = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    S = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    o = 64,
                    s = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    l = {
                        close(u) {
                            s('popover' === u ? a : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(u) {
                            s(r, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
                'use strict';
                let n, a;
                (t.d(e, { n: () => n }),
                    (function (u) {
                        ((u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'));
                    })(n || (n = {})),
                    (function (u) {
                        ((u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock'));
                    })(a || (a = {})));
            },
            3649: (u, e, t) => {
                'use strict';
                t.d(e, { Uw: () => A, WU: () => r, v2: () => a });
                var n = t(1281);
                let a;
                function r(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(a || (a = {}));
                const i = (u) => u.replace(/&nbsp;/g, ' '),
                    o = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    s = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    l = (u, e, t = a.left) => u.split(e).reduce(t === a.left ? o : s, []),
                    c = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    d = (u, e = a.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(t)) return c(u);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(u)
                                .map((u) => i(u));
                        }
                        return ((u, e = a.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = i(u);
                            return (l(r, /( )/, e).forEach((u) => (t = t.concat(l(u, n, a.left)))), t);
                        })(u, e);
                    },
                    A = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : d(u, e)));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var n = t(3138);
                class a {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(u, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
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
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(u) {
                        (this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data));
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (u, e, t) => {
                'use strict';
                t.d(e, {
                    c1: () => f,
                    Sw: () => r.Z,
                    B3: () => s,
                    Z5: () => i.Z5,
                    B0: () => o,
                    ry: () => C,
                    Sy: () => _,
                });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                var r = t(1358);
                var i = t(8613);
                let o;
                !(function (u) {
                    ((u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(u, e, t, n, a, r, i) {
                    try {
                        var o = u[r](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(n, a);
                }
                const m = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (n, a) {
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            D(r, n, a, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            D(r, n, a, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, F);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    _ = () => B(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var h = t(7572);
                const f = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (u) => B(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: _,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), r) => {
                            const i = A.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                d = s.height,
                                F = {
                                    x: A.O.view.pxToRem(l) + i.x,
                                    y: A.O.view.pxToRem(c) + i.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(d),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: m(F),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, _);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const a = Object.prototype.toString.call(e[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < a.length; e++) t[n].push({ value: u(a[e].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    a = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            1672: (u, e, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n);
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var i = t(3138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function l(u, e, t) {
                    const n = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        a = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
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
                !(function (u) {
                    ((u.extraLarge = 'extraLarge'),
                        (u.large = 'large'),
                        (u.medium = 'medium'),
                        (u.small = 'small'),
                        (u.extraSmall = 'extraSmall'),
                        (u.extraLargeWidth = 'extraLargeWidth'),
                        (u.largeWidth = 'largeWidth'),
                        (u.mediumWidth = 'mediumWidth'),
                        (u.smallWidth = 'smallWidth'),
                        (u.extraSmallWidth = 'extraSmallWidth'),
                        (u.extraLargeHeight = 'extraLargeHeight'),
                        (u.largeHeight = 'largeHeight'),
                        (u.mediumHeight = 'mediumHeight'),
                        (u.smallHeight = 'smallHeight'),
                        (u.extraSmallHeight = 'extraSmallHeight'));
                })(s || (s = {}));
                const c = i.O.client.getSize('rem'),
                    E = c.width,
                    d = c.height,
                    A = Object.assign({ width: E, height: d }, l(E, d, o)),
                    F = (0, n.createContext)(A),
                    D = ['children'];
                const m = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, D);
                    const a = (0, n.useContext)(F),
                        i = a.extraLarge,
                        o = a.large,
                        s = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        E = a.extraLargeWidth,
                        d = a.largeWidth,
                        A = a.mediumWidth,
                        m = a.smallWidth,
                        C = a.extraSmallWidth,
                        B = a.extraLargeHeight,
                        _ = a.largeHeight,
                        g = a.mediumHeight,
                        h = a.smallHeight,
                        f = a.extraSmallHeight,
                        v = { extraLarge: B, large: _, medium: g, small: h, extraSmall: f };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && o) return e;
                        if (t.medium && s) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return r(e, t, v);
                        if (t.largeWidth && d) return r(e, t, v);
                        if (t.mediumWidth && A) return r(e, t, v);
                        if (t.smallWidth && m) return r(e, t, v);
                        if (t.extraSmallWidth && C) return r(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && _) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && h) return e;
                            if (t.extraSmallHeight && f) return e;
                        }
                    }
                    return null;
                };
                m.defaultProps = {
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
                (0, n.memo)(m);
                const C = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    B = ({ children: u }) => {
                        const e = (0, n.useContext)(F),
                            t = (0, n.useState)(e),
                            r = t[0],
                            s = t[1],
                            c = (0, n.useCallback)((u, e) => {
                                const t = i.O.view.pxToRem(u),
                                    n = i.O.view.pxToRem(e);
                                s(Object.assign({ width: t, height: n }, l(t, n, o)));
                            }, []),
                            E = (0, n.useCallback)(() => {
                                const u = i.O.client.getSize('px');
                                c(u.width, u.height);
                            }, [c]);
                        (C(() => {
                            (i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', E));
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    (i.O.client.events.off('clientResized', c),
                                        i.O.client.events.off('self.onScaleUpdated', E));
                                },
                                [c, E],
                            ));
                        const d = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(F.Provider, { value: d }, u);
                    };
                var _ = t(6483),
                    g = t.n(_),
                    h = t(926),
                    f = t.n(h);
                let v, w, p;
                (!(function (u) {
                    ((u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = o.small.width)] = 'Small'),
                        (u[(u.Medium = o.medium.width)] = 'Medium'),
                        (u[(u.Large = o.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(v || (v = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.width)] = 'Small'),
                            (u[(u.Medium = o.medium.width)] = 'Medium'),
                            (u[(u.Large = o.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(w || (w = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.height)] = 'Small'),
                            (u[(u.Medium = o.medium.height)] = 'Medium'),
                            (u[(u.Large = o.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(p || (p = {})));
                const b = () => {
                        const u = (0, n.useContext)(F),
                            e = u.width,
                            t = u.height,
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return v.ExtraLarge;
                                    case u.large:
                                        return v.Large;
                                    case u.medium:
                                        return v.Medium;
                                    case u.small:
                                        return v.Small;
                                    case u.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(u),
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case u.largeWidth:
                                        return w.Large;
                                    case u.mediumWidth:
                                        return w.Medium;
                                    case u.smallWidth:
                                        return w.Small;
                                    case u.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return p.ExtraLarge;
                                    case u.largeHeight:
                                        return p.Large;
                                    case u.mediumHeight:
                                        return p.Medium;
                                    case u.smallHeight:
                                        return p.Small;
                                    case u.extraSmallHeight:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function x() {
                    return (
                        (x = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        x.apply(null, arguments)
                    );
                }
                const S = {
                        [w.ExtraSmall]: '',
                        [w.Small]: f().SMALL_WIDTH,
                        [w.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [w.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [p.ExtraSmall]: '',
                        [p.Small]: f().SMALL_HEIGHT,
                        [p.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [p.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL,
                        [v.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [v.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [v.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    M = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, y);
                        const r = b(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return a().createElement('div', x({ className: g()(t, S[i], L[o], T[s]) }, n), e);
                    },
                    N = ['children'];
                const O = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, N);
                    return a().createElement(B, null, a().createElement(M, t, e));
                };
                var k = t(493),
                    I = t.n(k);
                function P() {}
                function H() {
                    return !1;
                }
                console.log;
                var W = t(9174);
                function G(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return z(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? z(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var n = 0;
                        return function () {
                            return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function z(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const U = (u) => (0 === u ? window : window.subViews.get(u));
                const j = () => (u, e) => {
                    const t = (0, n.createContext)({});
                    return [
                        function ({ mode: r = 'real', options: o, children: s, mocks: l }) {
                            const c = (0, n.useRef)([]),
                                E = (t, n, a) => {
                                    var r;
                                    const o = (function ({
                                            initializer: u = !0,
                                            rootId: e = 0,
                                            getRoot: t = U,
                                            context: n = 'model',
                                        } = {}) {
                                            const a = new Map();
                                            function r(u, e = 0) {
                                                viewEnv.removeDataChangedCallback(u, e)
                                                    ? a.delete(u)
                                                    : console.error("Can't remove callback by id:", u);
                                            }
                                            engine.whenReady.then(() => {
                                                engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                    t.forEach((e) => {
                                                        const t = a.get(e);
                                                        void 0 !== t && t(u);
                                                    });
                                                });
                                            });
                                            const o = (u) => {
                                                const a = t(e),
                                                    r = n.split('.').reduce((u, e) => u[e], a);
                                                return 'string' != typeof u || 0 === u.length
                                                    ? r
                                                    : u.split('.').reduce((u, e) => {
                                                          const t = u[e];
                                                          return 'function' == typeof t ? t.bind(u) : t;
                                                      }, r);
                                            };
                                            return {
                                                subscribe: (t, r) => {
                                                    const s = 'string' == typeof r ? `${n}.${r}` : n,
                                                        l = i.O.view.addModelObserver(s, e, !0);
                                                    return (a.set(l, t), u && t(o(r)), l);
                                                },
                                                readByPath: o,
                                                createCallback: (u, e) => {
                                                    const t = o(e);
                                                    return (...e) => {
                                                        t(u(...e));
                                                    };
                                                },
                                                createCallbackNoArgs: (u) => {
                                                    const e = o(u);
                                                    return () => {
                                                        e();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var u, t = G(a.keys()); !(u = t()).done; ) r(u.value, e);
                                                },
                                                unsubscribe: r,
                                            };
                                        })(n),
                                        s =
                                            'real' === t
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (r = null == a ? void 0 : a.getter) ? r : () => {},
                                                  }),
                                        l = (u) =>
                                            'mocks' === t ? (null == a ? void 0 : a.getter(u)) : s.readByPath(u),
                                        E = (u) => c.current.push(u),
                                        d = u({
                                            mode: t,
                                            readByPath: l,
                                            externalModel: s,
                                            observableModel: {
                                                array: (u, e) => {
                                                    const n = null != e ? e : l(u),
                                                        a = W.LO.box(n, { equals: H });
                                                    return (
                                                        'real' === t &&
                                                            s.subscribe(
                                                                (0, W.aD)((u) => a.set(u)),
                                                                u,
                                                            ),
                                                        a
                                                    );
                                                },
                                                object: (u, e) => {
                                                    const n = null != e ? e : l(u),
                                                        a = W.LO.box(n, { equals: H });
                                                    return (
                                                        'real' === t &&
                                                            s.subscribe(
                                                                (0, W.aD)((u) => a.set(u)),
                                                                u,
                                                            ),
                                                        a
                                                    );
                                                },
                                                primitives: (u, e) => {
                                                    const n = l(e);
                                                    if (Array.isArray(u)) {
                                                        const a = u.reduce(
                                                            (u, e) => ((u[e] = W.LO.box(n[e], {})), u),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, W.aD)((e) => {
                                                                        u.forEach((u) => {
                                                                            a[u].set(e[u]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = u,
                                                            r = Object.entries(a),
                                                            i = r.reduce(
                                                                (u, [e, t]) => ((u[t] = W.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, W.aD)((u) => {
                                                                        r.forEach(([e, t]) => {
                                                                            i[t].set(u[e]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        A = { mode: t, model: d, externalModel: s, cleanup: E };
                                    return {
                                        model: d,
                                        controls: 'mocks' === t && a ? a.controls(A) : e(A),
                                        externalModel: s,
                                        mode: t,
                                    };
                                },
                                d = (0, n.useRef)(!1),
                                A = (0, n.useState)(r),
                                F = A[0],
                                D = A[1],
                                m = (0, n.useState)(() => E(r, o, l)),
                                C = m[0],
                                B = m[1];
                            return (
                                (0, n.useEffect)(() => {
                                    d.current ? B(E(F, o, l)) : (d.current = !0);
                                }, [l, F, o]),
                                (0, n.useEffect)(() => {
                                    D(r);
                                }, [r]),
                                (0, n.useEffect)(
                                    () => () => {
                                        (C.externalModel.dispose(), c.current.forEach((u) => u()));
                                    },
                                    [C],
                                ),
                                a().createElement(t.Provider, { value: C }, s)
                            );
                        },
                        () => (0, n.useContext)(t),
                    ];
                };
                var K = t(3946);
                let V, $, q, Y;
                (!(function (u) {
                    ((u.Initialization = 'initialization'),
                        (u.Loading = 'loading'),
                        (u.ForceLoading = 'forceLoading'),
                        (u.Loaded = 'loaded'));
                })(V || (V = {})),
                    (function (u) {
                        ((u.Initialization = 'initialization'),
                            (u.Loading = 'loading'),
                            (u.Loaded = 'loaded'),
                            (u.Failed = 'failed'));
                    })($ || ($ = {})),
                    (function (u) {
                        ((u.Initialization = 'initialization'), (u.Loaded = 'loaded'), (u.Failed = 'failed'));
                    })(q || (q = {})),
                    (function (u) {
                        ((u.Initialization = 'initialization'),
                            (u.BrowserLoading = 'browserLoading'),
                            (u.PageLoading = 'pageLoading'),
                            (u.ForceLoading = 'forceLoading'),
                            (u.PageFailed = 'pageFailed'),
                            (u.TextureFailed = 'textureFailed'),
                            (u.Loaded = 'loaded'));
                    })(Y || (Y = {})));
                (V.Initialization, $.Initialization);
                const Z = (u) => u > 0,
                    X = (u) => !Z(u),
                    Q = 1,
                    J = 1,
                    uu = 1e-5,
                    eu = 1;
                function tu(u, e) {
                    var t;
                    if (X(u)) return void console.warn('Invalid id, should be greater than zero', u);
                    const n = 0 === e.scale ? uu : null != (t = e.scale) ? t : eu;
                    return i.O.view.getBrowserTexturePath(u, Math.max(e.width, Q), Math.max(e.height, J), n);
                }
                const nu = j()(
                        ({ observableModel: u }) => {
                            const e = u.object(),
                                t = (0, K.Om)(() =>
                                    (function ({ pageState: u, browserState: e, texState: t }) {
                                        return e === V.Initialization
                                            ? Y.Initialization
                                            : e === V.ForceLoading
                                              ? Y.ForceLoading
                                              : e === V.Loading
                                                ? Y.BrowserLoading
                                                : u === $.Loaded && e === V.Loaded && t === q.Loaded
                                                  ? Y.Loaded
                                                  : t === q.Failed
                                                    ? Y.TextureFailed
                                                    : u === $.Failed
                                                      ? Y.PageFailed
                                                      : Y.PageLoading;
                                    })(e.get()),
                                );
                            return { root: e, getState: t };
                        },
                        ({ externalModel: u }) => ({
                            blur: u.createCallbackNoArgs('unfocus'),
                            focus: u.createCallbackNoArgs('focus'),
                            createWebView: u.createCallbackNoArgs('createWebView'),
                        }),
                    ),
                    au = nu[0],
                    ru = nu[1];
                var iu = t(3403);
                const ou = (u) => {
                    (0, n.useEffect)(() => u, []);
                };
                const su = 0;
                const lu = 'BrowserView_base_6b',
                    cu = 'BrowserView_texture_17',
                    Eu = 'Spinner_base_87',
                    du = 'Spinner_caption_cf',
                    Au = 'Spinner_gear_c4',
                    Fu = 'Spinner_logo_bf',
                    Du = ({ message: u, className: e, classNames: t }) =>
                        a().createElement(
                            'div',
                            { className: g()(Eu, e) },
                            u && a().createElement('div', { className: g()(du, null == t ? void 0 : t.caption) }, u),
                            a().createElement('div', { className: g()(Au, null == t ? void 0 : t.gear) }),
                            a().createElement('div', { className: g()(Fu, null == t ? void 0 : t.logo) }),
                        );
                function mu(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const Cu = {
                        playHighlight() {
                            mu('highlight');
                        },
                        playClick() {
                            mu('play');
                        },
                        playYes() {
                            mu('yes1');
                        },
                    },
                    Bu = {
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
                let _u, gu;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(_u || (_u = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'),
                            (u.small = 'small'),
                            (u.medium = 'medium'),
                            (u.large = 'large'));
                    })(gu || (gu = {})));
                const hu = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: A,
                    onMouseLeave: F,
                    onClick: D,
                }) => {
                    const m = (0, n.useRef)(null),
                        C = (0, n.useState)(t),
                        B = C[0],
                        _ = C[1],
                        h = (0, n.useState)(!1),
                        f = h[0],
                        v = h[1];
                    return (
                        (0, n.useEffect)(() => {
                            function u(u) {
                                B && null !== m.current && !m.current.contains(u.target) && _(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [B]),
                        (0, n.useEffect)(() => {
                            _(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: m,
                                className: g()(
                                    Bu.base,
                                    Bu[`base__${r}`],
                                    i && Bu.base__disabled,
                                    e && Bu[`base__${e}`],
                                    B && Bu.base__focus,
                                    f && Bu.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (u) {
                                    i || (null !== s && mu(s), c && c(u));
                                },
                                onMouseMove: function (u) {
                                    E && E(u);
                                },
                                onMouseUp: function (u) {
                                    i || (A && A(u), v(!1));
                                },
                                onMouseDown: function (u) {
                                    i ||
                                        (null !== l && mu(l),
                                        d && d(u),
                                        t && (i || (m.current && (m.current.focus(), _(!0)))),
                                        v(!0));
                                },
                                onMouseLeave: function (u) {
                                    i || (F && F(u), v(!1));
                                },
                                onClick: function (u) {
                                    i || (D && D(u));
                                },
                            },
                            r !== _u.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Bu.back }),
                                    a().createElement('span', { className: Bu.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: g()(Bu.state, Bu.state__default) },
                                a().createElement('span', { className: Bu.stateDisabled }),
                                a().createElement('span', { className: Bu.stateHighlightHover }),
                                a().createElement('span', { className: Bu.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: Bu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                hu.defaultProps = { type: _u.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const fu = hu,
                    vu = 'Error_base_46',
                    wu = 'Error_alertIcon_04',
                    pu = 'Error_errorCaption_f2',
                    bu = 'Error_button_cd',
                    yu = ({ errorBtnLabel: u, errorBtnClickHandler: e, errorMessage: t }) =>
                        a().createElement(
                            'div',
                            { className: vu },
                            a().createElement('div', { className: wu }),
                            a().createElement('div', { className: pu }, t),
                            a().createElement(fu, { size: gu.medium, mixClass: bu, onClick: e }, u),
                        );
                yu.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const xu = 'Waiting_base_c5',
                    Su = 'Waiting_blackOverlay_55',
                    Lu = ({
                        message: u,
                        isError: e,
                        errorMessage: t,
                        errorBtnLabel: r,
                        errorBtnClickHandler: i,
                        overlayAlpha: o,
                    }) => {
                        const s = a().createRef();
                        return (
                            (0, n.useEffect)(() => {
                                const u = s.current;
                                u && o && (u.style.opacity = o);
                            }, [s, o]),
                            a().createElement(
                                'div',
                                { className: xu },
                                a().createElement('div', { className: Su, ref: s }),
                                e
                                    ? a().createElement(yu, {
                                          errorBtnLabel: r,
                                          errorMessage: t,
                                          errorBtnClickHandler: i,
                                      })
                                    : a().createElement(Du, { message: u }),
                            )
                        );
                    };
                Lu.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                const Tu = 'DisplayBrowserState_base_e7',
                    Mu = 'DisplayBrowserState_error_4e',
                    Nu = 'DisplayBrowserState_alertIcon_c4',
                    Ru = 'DisplayBrowserState_errorCaption_dd',
                    Ou = ({ waitingText: u, className: e }) =>
                        a().createElement(
                            'div',
                            { className: g()(Tu, e) },
                            a().createElement(Lu, { errorBtnClickHandler: P, message: u }),
                        ),
                    ku = () =>
                        a().createElement(
                            'div',
                            { className: Mu },
                            a().createElement('div', { className: Nu }),
                            a().createElement(
                                'div',
                                { className: Ru },
                                R.strings.dialogs.messenger.userInfoNotAvailable.title(),
                            ),
                        ),
                    Iu = () =>
                        a().createElement(
                            'div',
                            { className: Mu },
                            a().createElement('div', { className: Nu }),
                            a().createElement(
                                'div',
                                { className: Ru },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.title(),
                            ),
                            a().createElement(
                                'div',
                                { className: Ru },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.message(),
                            ),
                        );
                function Pu(u) {
                    const e = (0, n.useRef)(u);
                    return (
                        (function (u) {
                            return u !== Y.BrowserLoading && u !== Y.PageLoading;
                        })(u) && (e.current = u),
                        e.current
                    );
                }
                function Hu(u) {
                    const e = (function (u) {
                            const e = (0, n.useRef)(!1);
                            return (
                                (u !== Y.Loaded && u !== Y.PageFailed && u !== Y.TextureFailed) || (e.current = !0),
                                e.current
                            );
                        })(u),
                        t = Pu(u);
                    return e ? t : u;
                }
                const Wu = ({ viewState: u, waitingText: e, waitingClassName: t }) => {
                        switch (Hu(u)) {
                            case Y.BrowserLoading:
                            case Y.PageLoading:
                            case Y.ForceLoading:
                                return a().createElement(Ou, { waitingText: e, className: t });
                            case Y.PageFailed:
                                return a().createElement(ku, null);
                            case Y.TextureFailed:
                                return a().createElement(Iu, null);
                            default:
                                return null;
                        }
                    },
                    Gu = (u) =>
                        'width' in u && 'height' in u && 'number' == typeof u.width && 'number' == typeof u.height;
                function zu(u) {
                    return null != u ? u : viewEnv.getScale();
                }
                function Uu(u) {
                    const e = (0, n.useState)(zu(u.scale)),
                        t = e[0],
                        a = e[1],
                        r = (function (u) {
                            return Gu(u) ? tu(u.id, u) : void 0;
                        })(Object.assign({}, u, { scale: t })),
                        i = (0, n.useState)(r),
                        o = i[0],
                        s = i[1],
                        l = (0, n.useRef)(!1),
                        c = 'width' in u ? u.width : 0,
                        E = 'height' in u ? u.height : 0,
                        d = (function () {
                            const u = (0, n.useRef)(su);
                            return (
                                ou(() => {
                                    window.cancelAnimationFrame(u.current);
                                }),
                                (0, n.useMemo)(
                                    () => ({
                                        run: (e) => {
                                            (window.cancelAnimationFrame(u.current),
                                                (u.current = window.requestAnimationFrame(() => {
                                                    u.current = window.requestAnimationFrame(() => {
                                                        (e(), (u.current = su));
                                                    });
                                                })));
                                        },
                                        clear: () => {
                                            (window.cancelAnimationFrame(u.current), (u.current = su));
                                        },
                                        get isRunning() {
                                            return u.current !== su;
                                        },
                                    }),
                                    [],
                                )
                            );
                        })();
                    return (
                        (0, n.useEffect)(() => {
                            const e = () => {
                                a(zu(u.scale));
                            };
                            return (
                                window.addEventListener('resize', e),
                                () => {
                                    window.removeEventListener('resize', e);
                                }
                            );
                        }, [u.scale]),
                        (0, n.useEffect)(() => {
                            if (void 0 === r || 0 === c || 0 === E || r === o) return;
                            const u = () => {
                                s(r);
                            };
                            if (!1 === l.current) return ((l.current = !0), void u());
                            const e = new Image(),
                                t = () => {
                                    d.run(u);
                                };
                            return (
                                e.addEventListener('load', t),
                                (e.src = r),
                                () => {
                                    (e.removeEventListener('load', t), (e.src = ''));
                                }
                            );
                        }, [r, o]),
                        o
                    );
                }
                const ju = a().memo(function (u) {
                        const e = u.id,
                            t = u.className,
                            n = u.classNameTexture,
                            r = u.waitingClassName,
                            i = u.onMouseEnter,
                            o = u.onMouseLeave,
                            s = u.onMouseWheel,
                            l = u.onMouseMove,
                            c = u.onMouseDown,
                            E = u.onMouseUp,
                            d = u.renderStateDisplay,
                            A = u.viewState,
                            F = u.statusCode,
                            D = u.waitingText,
                            m = u.scrollSpeed,
                            C = void 0 === m ? 20 : m,
                            B = Uu(u);
                        return a().createElement(
                            'div',
                            { className: g()(lu, t), onMouseEnter: i, onMouseLeave: o },
                            B &&
                                a().createElement('div', {
                                    onWheel: s,
                                    onMouseMove: l,
                                    onMouseDown: c,
                                    onMouseUp: E,
                                    className: g()(lu, cu, n),
                                    'data-browser-id': e,
                                    'data-browser-scroll-speed': C,
                                    style: { backgroundImage: `url(${B})` },
                                }),
                            'function' == typeof d
                                ? d({ viewState: A, statusCode: F, waitingText: D, waitingClassName: r })
                                : a().createElement(Wu, {
                                      viewState: A,
                                      statusCode: F,
                                      waitingText: D,
                                      waitingClassName: r,
                                  }),
                        );
                    }),
                    Ku = 'none-ref',
                    Vu = 'measured',
                    $u = { type: 'measuring' };
                function qu() {
                    const u = (0, n.useRef)(null),
                        e = (0, n.useState)($u),
                        t = e[0],
                        a = e[1],
                        r = ((u, e = []) => {
                            const t = (0, n.useRef)(),
                                a = (0, n.useCallback)((...e) => {
                                    (t.current && t.current(), (t.current = u(...e)));
                                }, e);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        t.current && t.current();
                                    },
                                    [a],
                                ),
                                a
                            );
                        })(
                            () => (
                                a($u),
                                ((u) => {
                                    let e,
                                        t = null;
                                    return (
                                        (t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                ((t = null), (e = u()));
                                            });
                                        })),
                                        () => {
                                            ('function' == typeof e && e(), null !== t && cancelAnimationFrame(t));
                                        }
                                    );
                                })(() => {
                                    u.current
                                        ? a({
                                              type: Vu,
                                              size: { width: u.current.offsetWidth, height: u.current.offsetHeight },
                                          })
                                        : a({ type: Ku });
                                })
                            ),
                            [],
                        );
                    return (
                        (0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', r),
                                r(),
                                () => window.removeEventListener('resize', r)
                            ),
                            [r],
                        ),
                        [u, t, r]
                    );
                }
                function Yu() {
                    return (
                        (Yu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Yu.apply(null, arguments)
                    );
                }
                const Zu = a().memo(function (u) {
                    const e = qu(),
                        t = e[0],
                        n = e[1];
                    return a().createElement(
                        'div',
                        { ref: t, className: lu },
                        a().createElement(
                            ju,
                            Yu(
                                {},
                                u,
                                (function (u, e = {}) {
                                    return 'measured' === u.type ? Object.assign({}, u.size, e) : e;
                                })(n),
                            ),
                        ),
                    );
                });
                function Xu() {
                    return (
                        (Xu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Xu.apply(null, arguments)
                    );
                }
                const Qu = (0, iu.Pi)(function (u) {
                        const e = u.defaultWaitingText,
                            t = u.className,
                            r = u.waitingClassName,
                            i = u.isLazy,
                            o = void 0 === i || i,
                            s = u.displayContentWhenLoading,
                            l = void 0 === s || s,
                            c = u.renderStateDisplay,
                            E = u.onMouseEnter,
                            d = u.onMouseLeave,
                            A = u.onMouseMove,
                            F = u.onMouseWheel,
                            D = u.onMouseDown,
                            m = u.onMouseUp,
                            C = ru(),
                            B = C.model,
                            _ = C.controls,
                            g = B.root.get(),
                            h = g.id,
                            f = g.httpStatusCode,
                            v = g.waitingMessage,
                            w = B.getState(),
                            p = l || w === Y.Loaded;
                        var b;
                        ((b = () => {
                            o && X(h) && _.createWebView();
                        }),
                            (0, n.useEffect)(b, []),
                            (0, n.useEffect)(() => {
                                Z(h) && _.focus();
                            }, [h, _]));
                        const y = (0, n.useMemo)(() => {
                            const u = {
                                onMouseEnter: E,
                                onMouseLeave: d,
                                onMouseMove: A,
                                onMouseWheel: F,
                                onMouseDown: D,
                                onMouseUp: m,
                            };
                            return p
                                ? Object.assign({}, u, {
                                      onMouseEnter: (u) => {
                                          (_.focus(), null == E || E(u));
                                      },
                                      onMouseLeave: (u) => {
                                          (_.blur(), null == d || d(u));
                                      },
                                  })
                                : u;
                        }, [p, _, D, E, d, A, m, F]);
                        if (X(h)) return null;
                        const x = Gu(u)
                                ? (function (u, e) {
                                      const t = {};
                                      return (
                                          e.forEach((e) => {
                                              t[e] = u[e];
                                          }),
                                          t
                                      );
                                  })(u, ['width', 'height'])
                                : {},
                            S = v.length > 0 ? v : e;
                        return u.isFullSize
                            ? a().createElement(
                                  Zu,
                                  Xu({}, y, {
                                      id: h,
                                      className: t,
                                      waitingClassName: r,
                                      statusCode: f,
                                      viewState: w,
                                      waitingText: S,
                                      renderStateDisplay: c,
                                      onMouseEnter: _.focus,
                                      onMouseLeave: _.blur,
                                  }),
                              )
                            : a().createElement(
                                  ju,
                                  Xu({}, y, x, {
                                      id: h,
                                      className: t,
                                      waitingClassName: r,
                                      statusCode: f,
                                      viewState: w,
                                      waitingText: S,
                                      renderStateDisplay: c,
                                      onMouseEnter: _.focus,
                                      onMouseLeave: _.blur,
                                  }),
                              );
                    }),
                    Ju = {
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
                    ue = [
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
                function ee() {
                    return (
                        (ee = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        ee.apply(null, arguments)
                    );
                }
                class te extends a().PureComponent {
                    constructor(...u) {
                        (super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && mu(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                (u && u(e), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && mu(this.props.soundClick));
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                (u && u(e), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            n = u.goto,
                            r = u.side,
                            i = u.type,
                            o = u.classNames,
                            s = u.onMouseEnter,
                            l = u.onMouseLeave,
                            c = u.onMouseDown,
                            E = u.onMouseUp,
                            d =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(u, ue)),
                            A = g()(Ju.base, Ju[`base__${i}`], Ju[`base__${r}`], null == o ? void 0 : o.base),
                            F = g()(Ju.icon, Ju[`icon__${i}`], Ju[`icon__${r}`], null == o ? void 0 : o.icon),
                            D = g()(Ju.glow, null == o ? void 0 : o.glow),
                            m = g()(Ju.caption, Ju[`caption__${i}`], null == o ? void 0 : o.caption),
                            C = g()(Ju.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            ee(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== i && a().createElement('div', { className: Ju.shine }),
                            a().createElement('div', { className: F }, a().createElement('div', { className: D })),
                            a().createElement('div', { className: m }, e),
                            n && a().createElement('div', { className: C }, n),
                        );
                    }
                }
                let ne;
                ((te.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (u) {
                        ((u[(u.Normal = 0)] = 'Normal'), (u[(u.Disabled = 1)] = 'Disabled'));
                    })(ne || (ne = {})));
                var ae = t(5521),
                    re = t(9916);
                const ie = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function oe(u = ae.n.NONE, e = ie, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== ae.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!a && i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), e(n), t && n.stopPropagation());
                            }
                        }
                    }, [e, u, t, a]);
                }
                t(3649);
                var se = t(8613);
                (Date.now(), se.Ew.getRegionalDateTime, se.Ew.getFormattedDateTime);
                const le = (u, e) => {
                    const t = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            (e && !e(u)) || (t.current = u);
                        }, [e, u]),
                        t.current
                    );
                };
                re.Sw.instance;
                let ce;
                !(function (u) {
                    ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                })(ce || (ce = {}));
                re.Sw.instance;
                const Ee = le,
                    de = [
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
                function Ae(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const Fe = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: re.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    De = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            d = void 0 !== E && E,
                            A = u.decoratorId,
                            F = void 0 === A ? 0 : A,
                            D = u.isEnabled,
                            m = void 0 === D || D,
                            C = u.targetId,
                            B = void 0 === C ? 0 : C,
                            _ = u.onShow,
                            g = u.onHide,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, de);
                        const f = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(
                                () =>
                                    B ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            e &&
                                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: e, resId: n }
                                        );
                                    })().resId,
                                [B],
                            ),
                            w = (0, n.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (Fe(t, F, { isMouseEvent: !0, on: !0, arguments: Ae(a) }, v),
                                    _ && _(),
                                    (f.current.isVisible = !0));
                            }, [t, F, a, v, _]),
                            p = (0, n.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const u = f.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (f.current.timeoutId = 0)),
                                        Fe(t, F, { on: !1 }, v),
                                        f.current.isVisible && g && g(),
                                        (f.current.isVisible = !1));
                                }
                            }, [t, F, v, g]),
                            b = (0, n.useCallback)((u) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(f.current.prevTarget) && p();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const u = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', b, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', b, { capture: !0 }),
                                        u && window.clearTimeout(u));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === m && p();
                            }, [m, p]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', p),
                                    () => {
                                        (window.removeEventListener('mouseleave', p), p());
                                    }
                                ),
                                [p],
                            ));
                        return m
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(w, c ? 100 : 400)),
                                                      r && r(u),
                                                      y && y(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (p(), null == i || i(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === d && p(), null == s || s(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === d && p(), null == o || o(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : e;
                        var y;
                    };
                var me = t(7030);
                let Ce, Be;
                (!(function (u) {
                    ((u.ExtraSmall = 'extraSmall'),
                        (u.Small = 'small'),
                        (u.Medium = 'medium'),
                        (u.Large = 'large'),
                        (u.ExtraLarge = 'extraLarge'));
                })(Ce || (Ce = {})),
                    (function (u) {
                        ((u.Ru = 'RU'),
                            (u.Eu = 'EU'),
                            (u.Na = 'NA'),
                            (u.Asia = 'ASIA'),
                            (u.Cn = 'CN'),
                            (u.Kr = 'KR'),
                            (u.Ct = 'CT'),
                            (u.St = 'ST'),
                            (u.QA = 'QA'),
                            (u.Dev = 'DEV'),
                            (u.Sb = 'SB'));
                    })(Be || (Be = {})));
                const _e = () => {},
                    ge = [
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
                function he() {
                    return (
                        (he = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        he.apply(null, arguments)
                    );
                }
                const fe = (0, n.memo)((u) => {
                        let e = u.width,
                            t = u.height,
                            r = u.getSrcByFrame,
                            i = u.frameCount,
                            o = u.onAnimate,
                            s = void 0 === o ? _e : o,
                            l = u.frameTime,
                            c = void 0 === l ? 33 : l,
                            E = u.initialFrameIndex,
                            d = void 0 === E ? 0 : E,
                            A = u.loop,
                            F = void 0 === A || A,
                            D = u.state,
                            m = void 0 === D ? 'play' : D,
                            C = u.onAnimationComplete,
                            B = void 0 === C ? _e : C,
                            _ = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, ge);
                        const g = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const u = g.current;
                                if (!u) return;
                                const n = i - 1,
                                    a = u.getContext('2d'),
                                    o = (n) => {
                                        (a.clearRect(0, 0, u.width, u.height), a.drawImage(n, 0, 0, e, t));
                                    };
                                if ('stop' === m) {
                                    const u = r(0),
                                        e = new Image();
                                    e.src = u;
                                    const t = () => o(e);
                                    return (e.addEventListener('load', t), () => e.removeEventListener('load', t));
                                }
                                const l = ((u, e) => {
                                        const t = [];
                                        for (let n = 0; n < u; n++) {
                                            const u = new Image();
                                            ((u.src = e(n)), t.push(u));
                                        }
                                        return t;
                                    })(i, r),
                                    E = ((u, e = 0) => {
                                        let t = e;
                                        return () => {
                                            const e = t;
                                            return ((t += 1), t > u && (t = 0), e);
                                        };
                                    })(n, d),
                                    A = setInterval(() => {
                                        const u = E(),
                                            e = l[u];
                                        (o(l[u]), s(u, e), u === n && (B(), F || clearInterval(A)));
                                    }, c);
                                return () => clearInterval(A);
                            }, [i, c, r, t, d, F, s, B, m, e]),
                            a().createElement('canvas', he({}, _, { width: e, height: t, ref: g }))
                        );
                    }),
                    ve = 'EffectCounter_base_5a',
                    we = 'EffectCounter_count_06',
                    pe = 'EffectCounter_base__strong_86',
                    be = 'EffectCounter_effect_12',
                    ye = 'EffectCounter_strongEffect_3f',
                    xe = 'EffectCounter_particles_04';
                let Se;
                !(function (u) {
                    ((u.None = 'none'),
                        (u.StrongEffect = 'strongEffect'),
                        (u.WeakEffect = 'weakEffect'),
                        (u.Default = 'none'));
                })(Se || (Se = {}));
                const Le = { duration: 1e3 },
                    Te = { duration: 500 },
                    Me = (u) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${u.toString().padStart(5, '0')}`,
                    Ne = (u) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((u + 75) % 120).toString().padStart(5, '0')}`,
                    Re = 140,
                    Oe = a().memo(function ({
                        value: u,
                        className: e,
                        from: t,
                        onStart: r,
                        onRest: i,
                        onChange: o,
                        onPause: s,
                        onResume: l,
                        onProps: c,
                        onResolve: E,
                        style: d = Se.Default,
                        valueConfig: A = Le,
                        changeShineConfig: F = Te,
                    }) {
                        const D = (0, me.useSpring)(() => ({
                                to: { value: u },
                                from: { value: null != t ? t : u },
                                config: A,
                                onStart: r,
                                onRest: i,
                                onChange: o,
                                onPause: s,
                                onResume: l,
                                onProps: c,
                                onResolve: E,
                            })),
                            m = D[0],
                            C = D[1],
                            B = (0, me.useTransition)(d, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                config: F,
                            });
                        return (
                            (0, n.useEffect)(() => {
                                'number' == typeof t &&
                                    C.start({ to: { value: u }, from: { value: t }, config: A, reset: !0 });
                            }, [u, t, C, A]),
                            a().createElement(
                                'div',
                                { className: g()(ve, d === Se.StrongEffect && pe, e) },
                                a().createElement(
                                    'div',
                                    { className: we },
                                    B((u, e) =>
                                        a().createElement(
                                            me.animated.div,
                                            { style: u, className: be },
                                            e === Se.StrongEffect &&
                                                a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement(fe, {
                                                        width: Re,
                                                        height: Re,
                                                        frameCount: 120,
                                                        frameTime: 50,
                                                        getSrcByFrame: Me,
                                                        className: xe,
                                                    }),
                                                    a().createElement(fe, {
                                                        width: Re,
                                                        height: Re,
                                                        frameCount: 120,
                                                        frameTime: 50,
                                                        getSrcByFrame: Ne,
                                                        className: xe,
                                                    }),
                                                    a().createElement('div', { className: ye }),
                                                ),
                                        ),
                                    ),
                                    a().createElement(
                                        me.animated.div,
                                        null,
                                        m.value.to((u) => u.toFixed(0)),
                                    ),
                                ),
                            )
                        );
                    });
                let ke;
                !(function (u) {
                    ((u[(u.Ultra = 0)] = 'Ultra'),
                        (u[(u.Max = 1)] = 'Max'),
                        (u[(u.Height = 2)] = 'Height'),
                        (u[(u.Medium = 3)] = 'Medium'),
                        (u[(u.Low = 4)] = 'Low'),
                        (u[(u.Min = 5)] = 'Min'),
                        (u[(u.PerfLevelCount = 6)] = 'PerfLevelCount'));
                })(ke || (ke = {}));
                const Ie = ke.Ultra,
                    Pe = () => Ie >= ke.Low;
                let He;
                !(function (u) {
                    ((u.China = 'CN'), (u.Ru = 'RU'));
                })(He || (He = {}));
                var We = t(280);
                const Ge = 'GuaranteedRewardCount_base_d0',
                    ze = 'GuaranteedRewardCount_text_3b',
                    Ue = 'GuaranteedRewardCount_countWrapper_52',
                    je = 'GuaranteedRewardCount_icon_ea',
                    Ke = ({ onInfoClick: u, InfoComponent: e, boxesCount: t, children: n }) =>
                        a().createElement(
                            'div',
                            { className: Ge },
                            a().createElement(We.z, {
                                classMix: ze,
                                text: R.strings.ny.rewardKitMain.guaranteedReward.$plural('boxesLeft', t),
                                binding: { count: a().createElement('div', { className: Ue }, n) },
                            }),
                            a().createElement(
                                'div',
                                { className: ze },
                                a().createElement('div', { className: je }, a().createElement(e, { onClick: u })),
                            ),
                        ),
                    Ve = {
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
                    $e = 220,
                    qe = (u) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${u.toString().padStart(5, '0')}`,
                    Ye = (u) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((u + 75) % 120).toString().padStart(5, '0')}`,
                    Ze = (u) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((u + 50) % 120).toString().padStart(5, '0')}`,
                    Xe = ({ onInfoClick: u, InfoComponent: e }) =>
                        a().createElement(
                            'div',
                            { className: Ve.base },
                            a().createElement(fe, {
                                width: $e,
                                height: $e,
                                frameCount: 120,
                                frameTime: 50,
                                getSrcByFrame: qe,
                                className: g()(Ve.particles, Ve.particles__left),
                            }),
                            a().createElement(fe, {
                                width: $e,
                                height: $e,
                                frameCount: 120,
                                getSrcByFrame: Ye,
                                className: g()(Ve.particles, Ve.particles__center),
                            }),
                            a().createElement(fe, {
                                width: $e,
                                height: $e,
                                frameCount: 120,
                                frameTime: 50,
                                getSrcByFrame: Ze,
                                className: g()(Ve.particles, Ve.particles__right),
                            }),
                            a().createElement(
                                'div',
                                { className: Ve.text },
                                a().createElement('div', { className: Ve.firstShine }),
                                a().createElement('div', { className: Ve.secondShine }),
                                a().createElement(
                                    'div',
                                    { className: Ve.content },
                                    R.strings.ny.rewardKitMain.guaranteedReward.next(),
                                ),
                                a().createElement('div', { className: Ve.icon }, a().createElement(e, { onClick: u })),
                            ),
                        ),
                    Qe = 'InfoIcon_base_5d',
                    Je = 'InfoIcon_base__clickable_fd',
                    ut = ({ onClick: u }) => a().createElement('div', { className: g()(Qe, u && Je), onClick: u }),
                    et = 'InfoText_base_16',
                    tt = 'InfoText_text_83',
                    nt = 'InfoText_icon_ef',
                    at = 'InfoText_underline_f3',
                    rt = ({ onClick: u }) =>
                        a().createElement(
                            'div',
                            { className: et, onClick: u },
                            a().createElement(
                                'div',
                                { className: tt },
                                a().createElement('div', { className: at }),
                                R.strings.ny.rewardKitMain.guaranteedReward.moreInfo(),
                            ),
                            a().createElement('div', { className: nt }),
                        );
                let it;
                !(function (u) {
                    ((u[(u.Hidden = 0)] = 'Hidden'),
                        (u[(u.NextGuaranteed = 1)] = 'NextGuaranteed'),
                        (u[(u.ThroughCountGuaranteed = 2)] = 'ThroughCountGuaranteed'));
                })(it || (it = {}));
                const ot = (u) => u === it.ThroughCountGuaranteed,
                    st = a().memo(function ({
                        state: u,
                        boxesCount: e,
                        onInfoClick: t,
                        className: r,
                        sunShineEffectCount: i,
                        switchDelay: o,
                        animationFrom: s = e,
                        realm: l,
                    }) {
                        var c;
                        const E = (0, n.useRef)(e);
                        (0, n.useEffect)(() => {
                            u === it.ThroughCountGuaranteed && (E.current = e);
                        }, [e, u]);
                        const d = (0, me.useTransition)(u, {
                                from: { opacity: 0 },
                                enter: { opacity: 1, delay: null != (c = null == o ? void 0 : o.enter) ? c : 0 },
                                leave: { opacity: 0 },
                                config: { duration: 300 },
                            }),
                            A = l === He.China ? rt : ut;
                        return a().createElement(
                            a().Fragment,
                            null,
                            d(
                                (n, o) =>
                                    o !== it.Hidden &&
                                    a().createElement(
                                        me.animated.div,
                                        { style: n, className: r },
                                        a().createElement(
                                            De,
                                            {
                                                isEnabled: l !== He.China,
                                                contentId:
                                                    R.views.lobby.new_year.tooltips.NyGuaranteedRewardTooltip('resId'),
                                            },
                                            a().createElement(
                                                'div',
                                                null,
                                                (() => {
                                                    switch (o) {
                                                        case it.ThroughCountGuaranteed:
                                                            return a().createElement(
                                                                Ke,
                                                                { onInfoClick: t, boxesCount: e, InfoComponent: A },
                                                                a().createElement(Oe, {
                                                                    value: ot(u) ? e : E.current,
                                                                    from: ot(u) ? s : E.current,
                                                                    style: e > i ? Se.WeakEffect : Se.StrongEffect,
                                                                    sequenceAnimationState: Pe() ? 'stop' : 'play',
                                                                }),
                                                            );
                                                        case it.NextGuaranteed:
                                                            return a().createElement(Xe, {
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
                    lt = { enter: 850 },
                    ct = a().memo(function ({
                        maxBoxesCount: u,
                        realm: e,
                        state: t,
                        onInfoClick: n,
                        isFocused: r = !1,
                        className: i = '',
                        switchDelay: o = lt,
                    }) {
                        var s, l, c;
                        const E = null != (s = Ee(t)) ? s : t,
                            d = null != (l = Ee(u)) ? l : u,
                            A = (null != (c = Ee(r)) ? c : r) !== r && r;
                        return a().createElement(st, {
                            state: t,
                            boxesCount: u,
                            sunShineEffectCount: 5,
                            realm: e,
                            onInfoClick: e === He.China ? n : void 0,
                            className: i,
                            animationFrom: A ? ((F = u), (D = d), F > D ? 0 : F < D ? D : F) : u,
                            switchDelay: E === it.Hidden ? o : void 0,
                        });
                        var F, D;
                    });
                var Et = t(406);
                class dt extends a().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = re.B3.GOLD;
                        else u = re.B3.INTEGRAL;
                        const e = re.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                dt.defaultProps = { format: 'integral' };
                const At = 'Background_base_d7',
                    Ft = 'Background_rightBorder_62',
                    Dt = 'Background_background_d7',
                    mt = () =>
                        a().createElement(
                            'div',
                            { className: At },
                            a().createElement('div', { className: Dt }),
                            a().createElement('div', { className: Ft }),
                        ),
                    Ct = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Bt() {
                    return (
                        (Bt = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Bt.apply(null, arguments)
                    );
                }
                const _t = R.views.common.tooltip_window.simple_tooltip_content,
                    gt = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            i = u.note,
                            o = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, Ct);
                        const c = (0, n.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, r, i, s]);
                        return a().createElement(
                            De,
                            Bt(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? _t.SimpleTooltipHtmlContent('resId') : _t.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            e,
                        );
                        var E;
                    },
                    ht = 'Footer_base_3d',
                    ft = 'Footer_errorMessage_e5',
                    vt = 'Footer_alertIcon_df',
                    wt = 'Footer_buttonContent_0d',
                    pt = R.strings.ny.rewardKitStatistics,
                    bt = ({ isResetFailed: u, hasStatistics: e, resetStatistics: t }) =>
                        a().createElement(
                            'div',
                            { className: ht },
                            a().createElement(
                                gt,
                                { body: pt.statistics.resetDescription() },
                                a().createElement(
                                    fu,
                                    { type: _u.ghost, size: gu.medium, onClick: t, disabled: !e, mixClass: wt },
                                    pt.statistics.reset(),
                                ),
                            ),
                            u &&
                                a().createElement(
                                    gt,
                                    { body: pt.resetError.body() },
                                    a().createElement(
                                        'div',
                                        { className: ft },
                                        a().createElement(We.z, {
                                            text: pt.resetError.label(),
                                            binding: { alertIcon: a().createElement('span', { className: vt }) },
                                        }),
                                    ),
                                ),
                        ),
                    yt = 'Header_base_f9',
                    xt = 'Header_content_ea',
                    St = 'Header_highlightedText_37',
                    Lt = 'Header_infoIcon_2b',
                    Tt = R.strings.ny.rewardKitStatistics,
                    Mt = ({ count: u }) =>
                        a().createElement(
                            'div',
                            { className: yt },
                            a().createElement(
                                gt,
                                { header: Tt.tooltip.header(), body: Tt.tooltip.body() },
                                a().createElement(
                                    'div',
                                    { className: xt },
                                    a().createElement(We.z, {
                                        text: R.strings.ny.rewardKitStatistics.$plural('openedBoxes', u),
                                        binding: { count: a().createElement('span', { className: St }, u) },
                                    }),
                                    a().createElement('div', { className: Lt }),
                                ),
                            ),
                        );
                function Nt(u, e) {
                    if (Array.isArray(u)) return u.filter(e);
                    const t = [];
                    for (let a = 0; a < u.length; a++) {
                        var n;
                        const r = null == (n = u[a]) ? void 0 : n.value;
                        e(r, a, u) && t.push(r);
                    }
                    return t;
                }
                let Rt, Ot, kt, It, Pt, Ht, Wt, Gt;
                (!(function (u) {
                    ((u.None = ''),
                        (u.Vehicles = 'vehicles'),
                        (u.Customizations = 'customizations'),
                        (u.Attachment = 'attachment'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Currencies = 'currencies'),
                        (u.ModernizedEquipment = 'modernizedEquipment'),
                        (u.NyToys = 'nyToys'));
                })(Rt || (Rt = {})),
                    (function (u) {
                        ((u.Undefined = 'undefined'),
                            (u.NewYear = 'NewYear'),
                            (u.Christmas = 'Christmas'),
                            (u.Fairytale = 'Fairytale'),
                            (u.Oriental = 'Oriental'),
                            (u.Soviet = 'soviet'),
                            (u.TraditionalWestern = 'traditionalWestern'),
                            (u.ModernWestern = 'modernWestern'),
                            (u.Asian = 'asian'),
                            (u.Mega = 'Mega'),
                            (u.GiftSystem = 'GiftSystem'),
                            (u.Cat = 'Cat'),
                            (u.Atm = 'Atm'),
                            (u.Gift2 = 'Gift2'),
                            (u.Bro = 'Bro'),
                            (u.Dog = 'Dog'),
                            (u.Surprise = 'Surprise'));
                    })(Ot || (Ot = {})),
                    (function (u) {
                        ((u.Crystal = 'ny_crystal'),
                            (u.Emerald = 'ny_emerald'),
                            (u.Amber = 'ny_amber'),
                            (u.Iron = 'ny_iron'),
                            (u.AnyResource = 'anyResource'));
                    })(kt || (kt = {})),
                    (function (u) {
                        ((u.XP = 'xpFactor'),
                            (u.TankmenXP = 'tankmenXPFactor'),
                            (u.FreeXp = 'freeXPFactor'),
                            (u.Credits = 'creditsFactor'));
                    })(It || (It = {})),
                    (function (u) {
                        ((u.NewYear = 'NewYear'),
                            (u.Christmas = 'Christmas'),
                            (u.Fairytale = 'Fairytale'),
                            (u.Oriental = 'Oriental'));
                    })(Pt || (Pt = {})),
                    (function (u) {
                        ((u.Level1 = 'level1'), (u.Level2 = 'level2'), (u.Level3 = 'level3'), (u.Level4 = 'level4'));
                    })(Ht || (Ht = {})),
                    (function (u) {
                        ((u.Zero = 'zero'), (u.Number = 'number'), (u.Default = 'default'));
                    })(Wt || (Wt = {})),
                    (function (u) {
                        ((u.Undefined = 'undefined'),
                            (u.ToEvent = 'toEvent'),
                            (u.ToGuestD = 'toGuestD'),
                            (u.ToGuestC = 'toGuestC'),
                            (u.ToMarkertplace = 'toMarkertplace'),
                            (u.ToGiftmachine = 'toGiftmachine'),
                            (u.ToRewards = 'toRewards'));
                    })(Gt || (Gt = {})));
                const zt = R.images.gui.maps.icons.quests.bonuses.big,
                    Ut = {
                        [Rt.None]: '',
                        [Rt.Vehicles]: zt.vehicles(),
                        [Rt.Customizations]: zt.style_3d(),
                        [Rt.Attachment]: zt.attachment(),
                        [Rt.PremiumPlus]: zt.premium_plus_universal(),
                        [Rt.Gold]: zt.gold(),
                        [Rt.Credits]: zt.credits(),
                        [kt.Crystal]: zt.ny_crystal(),
                        [kt.Emerald]: zt.ny_emerald(),
                        [kt.Amber]: zt.ny_amber(),
                        [kt.Iron]: zt.ny_iron(),
                        [Rt.ModernizedEquipment]: zt.modernizedEquipment(),
                        [Rt.NyToys]: zt.nyToys(),
                    },
                    jt = {
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
                    Kt = R.strings.ny.rewardKitStatistics.statistics,
                    Vt = [Rt.Gold, Rt.Credits],
                    $t = ({ type: u, count: e }) => {
                        const t = a().createElement(dt, { value: e, format: Vt.includes(u) ? 'gold' : 'integral' });
                        return a().createElement(
                            'div',
                            { className: jt.base },
                            a().createElement('div', {
                                className: jt.icon,
                                style: { backgroundImage: `url('${Ut[u]}')` },
                            }),
                            a().createElement(
                                'div',
                                { className: jt.name },
                                a().createElement(We.z, {
                                    text: Kt.$dyn(u),
                                    binding: {
                                        units: a().createElement(We.z, {
                                            text: Kt.units(),
                                            binding: { unitsCount: t },
                                            classMix: jt.count,
                                        }),
                                        days: a().createElement(We.z, {
                                            text: Kt.days(),
                                            binding: { daysCount: t },
                                            classMix: jt.count,
                                        }),
                                        currency: a().createElement(
                                            'span',
                                            { className: g()(jt.count, jt[`count__${u}`]) },
                                            t,
                                        ),
                                    },
                                }),
                            ),
                        );
                    },
                    qt = 'ResourcesStatistics_base_33',
                    Yt = 'ResourcesStatistics_column_e1',
                    Zt = 'ResourcesStatistics_resource_83',
                    Xt = (u, e) => Nt(u, e ? (u, e) => e % 2 == 1 : (u, e) => e % 2 == 0),
                    Qt = ({ resources: u }) =>
                        a().createElement(
                            'div',
                            { className: qt },
                            a().createElement(
                                'div',
                                { className: Yt },
                                Xt(u, !1).map((u, e) =>
                                    a().createElement(
                                        De,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                            args: { type: u.type },
                                            key: e,
                                        },
                                        a().createElement(
                                            'div',
                                            { className: Zt },
                                            a().createElement($t, { type: u.type, count: u.value }),
                                        ),
                                    ),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: Yt },
                                Xt(u, !0).map((u, e) =>
                                    a().createElement(
                                        De,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                            args: { type: u.type },
                                            key: e,
                                        },
                                        a().createElement(
                                            'div',
                                            { className: Zt },
                                            a().createElement($t, { type: u.type, count: u.value }),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    Jt = 'Statistics_base_f5',
                    un = 'Statistics_item_0b',
                    en = [Rt.Vehicles, Rt.Customizations, Rt.Attachment, Rt.ModernizedEquipment],
                    tn = R.views.lobby.new_year.tooltips,
                    nn = (u) => {
                        switch (u) {
                            case Rt.Vehicles:
                                return tn.NyVehiclesStatisticsTooltip('resId');
                            case Rt.Customizations:
                                return tn.NyCustomizationsStatisticsTooltip('resId');
                            case Rt.Attachment:
                                return tn.NyAttachmentsStatisticsTooltip('resId');
                            case Rt.ModernizedEquipment:
                                return tn.NyEquipmentsStatisticsTooltip('resId');
                            default:
                                return R.invalid('resId');
                        }
                    },
                    an = ({ rewards: u }) => {
                        return a().createElement(
                            'div',
                            { className: Jt },
                            ((e = u),
                            (t = (u, e) =>
                                a().createElement(
                                    De,
                                    {
                                        ignoreShowDelay: !0,
                                        contentId: nn(u.type),
                                        isEnabled: en.includes(u.type),
                                        key: e,
                                    },
                                    a().createElement(
                                        'div',
                                        { className: un },
                                        a().createElement($t, { type: u.type, count: u.count }),
                                    ),
                                )),
                            Array.isArray(e) ? e.map(t) : e.map((u, e, n) => t(null == u ? void 0 : u.value, e, n))),
                        );
                        var e, t;
                    },
                    rn = 'NyRewardKitStatistics_base_7e',
                    on = 'NyRewardKitStatistics_content_08',
                    sn = 'NyRewardKitStatistics_closeBtn_64',
                    ln = 'NyRewardKitStatistics_message_e4',
                    cn = 'NyRewardKitStatistics_rewards_0f',
                    En = 'NyRewardKitStatistics_resources_b9',
                    dn = 'NyRewardKitStatistics_resourcesCounter_5b',
                    An = 'NyRewardKitStatistics_line_4c',
                    Fn = 'NyRewardKitStatistics_resourcesCounterText_d3',
                    Dn = R.strings.ny.rewardKitStatistics,
                    mn = ({
                        closeStatistics: u,
                        boxesCount: e,
                        hasStatistics: t,
                        resourcesTotalCount: n,
                        resetStatistics: r,
                        isResetFailed: i,
                        rewards: o,
                        resources: s,
                    }) =>
                        a().createElement(
                            'div',
                            { className: g()(rn) },
                            a().createElement(mt, null),
                            a().createElement('div', {
                                className: sn,
                                onClick: () => {
                                    (mu(R.sounds.cancelcloseno()), u());
                                },
                            }),
                            a().createElement(
                                'div',
                                { className: on },
                                a().createElement(Mt, { count: e }),
                                t
                                    ? a().createElement(
                                          'div',
                                          null,
                                          a().createElement(
                                              'div',
                                              { className: cn },
                                              a().createElement(an, { rewards: o }),
                                          ),
                                          a().createElement(
                                              'div',
                                              { className: dn },
                                              a().createElement('div', { className: An }),
                                              a().createElement(Et.B, {
                                                  text: Dn.resourcesTotalCount(),
                                                  binding: { count: a().createElement(dt, { value: n }) },
                                                  className: Fn,
                                              }),
                                              a().createElement('div', { className: An }),
                                          ),
                                          a().createElement(
                                              'div',
                                              { className: En },
                                              a().createElement(Qt, { resources: s }),
                                          ),
                                      )
                                    : a().createElement(
                                          'div',
                                          { className: ln },
                                          R.strings.ny.rewardKitStatistics.noStatistics(),
                                      ),
                            ),
                            a().createElement(bt, { hasStatistics: t, isResetFailed: i, resetStatistics: r }),
                        ),
                    Cn = 'NyRewardKitsStatisticsSlider_base_71',
                    Bn = 'NyRewardKitsStatisticsSlider_base__visible_25',
                    _n = 'NyRewardKitsStatisticsSlider_shadow_2d',
                    gn = ({
                        isVisible: u,
                        closeStatistics: e,
                        resources: t,
                        rewards: r,
                        isResetFailed: i,
                        resetStatistics: o,
                        resourcesTotalCount: s,
                        boxesCount: l,
                    }) => {
                        const c = t.length + r.length > 0,
                            E = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const t = E.current;
                                if (t && u) return (re.c1.register(t, e), () => re.c1.unregister(t, e));
                            }, [u, E, e]),
                            (0, n.useEffect)(() => {
                                u && mu(R.sounds.gui_lootbox_in_game_shop_box_buy());
                            }, [u]),
                            a().createElement(
                                'div',
                                { className: g()(Cn, u && Bn), ref: E },
                                a().createElement('div', { className: _n }),
                                a().createElement(mn, {
                                    closeStatistics: e,
                                    hasStatistics: c,
                                    isResetFailed: i,
                                    resetStatistics: o,
                                    boxesCount: l,
                                    rewards: r,
                                    resources: t,
                                    resourcesTotalCount: s,
                                }),
                            )
                        );
                    },
                    hn = 'StatisticsButton_base_2d',
                    fn = R.strings.ny.rewardKitStatistics.tooltip,
                    vn = ({ onClick: u, classNames: e }) =>
                        a().createElement(
                            gt,
                            {
                                header: fn.header(),
                                body: fn.body(),
                                onClick: () => {
                                    (Cu.playClick(), null == u || u());
                                },
                            },
                            a().createElement('div', {
                                className: g()(hn, null == e ? void 0 : e.base),
                                onMouseEnter: () => {
                                    Cu.playHighlight();
                                },
                            }),
                        ),
                    wn = j()(
                        ({ observableModel: u }) => {
                            const e = {
                                root: u.object(),
                                subViewId: W.LO.box(((t = 1), window.subViews.ids().includes(t) ? t : void 0)),
                                guaranteedReward: u.object('guaranteedReward'),
                                rewardKitStatistics: u.object('rewardKitStatistics'),
                                rewards: u.array('rewardKitStatistics.rewards', []),
                                resources: u.array('rewardKitStatistics.resources', []),
                            };
                            var t;
                            return Object.assign({}, e);
                        },
                        ({ externalModel: u }) => ({
                            openInfoInWeb: u.createCallbackNoArgs('guaranteedReward.onShowInfo'),
                            resetStatistics: u.createCallbackNoArgs('rewardKitStatistics.onResetStatistics'),
                            updateLastSeen: u.createCallbackNoArgs('rewardKitStatistics.onUpdateLastSeen'),
                        }),
                    ),
                    pn = wn[0],
                    bn = wn[1],
                    yn = 'Content_base_1d',
                    xn = 'Content_close_36',
                    Sn = 'Content_close__hide_f5',
                    Ln = 'Content_statistic_25',
                    Tn = 'Content_browser_41',
                    Mn = 'Content_guaranteed_9f',
                    Nn = (0, iu.Pi)(() => {
                        const u = bn(),
                            e = u.model,
                            t = u.controls,
                            r = e.root.get().isMainPageVisible,
                            i = ru().model.getState(),
                            o = (0, n.useState)(!1),
                            s = o[0],
                            l = o[1];
                        var c;
                        ((c = () => {
                            s ? l(!1) : (0, re.Sy)();
                        }),
                            oe(ae.n.ESCAPE, c));
                        const E = r && i === Y.Loaded,
                            d = e.guaranteedReward.get(),
                            A = d.maxBoxesCount,
                            F = d.realm,
                            D = d.state,
                            m = d.isPremiumType,
                            C = d.isFocused,
                            B =
                                D !== ne.Disabled && m
                                    ? A <= 1
                                        ? it.NextGuaranteed
                                        : it.ThroughCountGuaranteed
                                    : it.Hidden,
                            _ = i === Y.BrowserLoading || i === Y.PageFailed || i === Y.TextureFailed;
                        return a().createElement(
                            'div',
                            { className: yn, lang: R.strings.settings.LANGUAGE_CODE() },
                            a().createElement(
                                'div',
                                { className: g()(xn, !_ && Sn) },
                                a().createElement(te, {
                                    caption: R.strings.ny.shopOverlay.closeButton(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: re.Sy,
                                }),
                            ),
                            E &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(gn, {
                                        isVisible: s,
                                        rewards: e.rewards.get(),
                                        resources: e.resources.get(),
                                        boxesCount: e.rewardKitStatistics.get().count,
                                        isResetFailed: e.rewardKitStatistics.get().isResetFailed,
                                        resourcesTotalCount: e.rewardKitStatistics.get().totalResourcesCount,
                                        closeStatistics: () => l(!1),
                                        resetStatistics: () => t.resetStatistics(),
                                    }),
                                    a().createElement(
                                        'div',
                                        { className: Ln },
                                        a().createElement(vn, {
                                            onClick: () => {
                                                (t.updateLastSeen(), l(!0));
                                            },
                                        }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: Mn },
                                        a().createElement(ct, {
                                            maxBoxesCount: A,
                                            realm: F,
                                            state: B,
                                            onInfoClick: t.openInfoInWeb,
                                            isFocused: C,
                                        }),
                                    ),
                                ),
                            a().createElement(Qu, {
                                isFullSize: !0,
                                defaultWaitingText: R.strings.waiting.browser.init(),
                                waitingClassName: Tn,
                            }),
                        );
                    }),
                    Rn = (0, iu.Pi)(() => {
                        const u = bn().model.subViewId.get(),
                            e = (0, n.useMemo)(() => (void 0 === u ? void 0 : { rootId: u }), [u]);
                        return a().createElement(au, { options: e }, a().createElement(Nn, null));
                    });
                engine.whenReady.then(() => {
                    I().render(
                        a().createElement(pn, null, a().createElement(O, null, a().createElement(Rn, null))),
                        document.getElementById('root'),
                    );
                });
            },
            406: (u, e, t) => {
                'use strict';
                t.d(e, { B: () => l });
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
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const l = (0, a.memo)((u) => {
                    let e = u.text,
                        t = u.binding,
                        a = u.className,
                        l = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, o);
                    const c = ((u, e) => {
                            const t =
                                    /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                                a = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                                o = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                                s = e ? Object.assign({}, e) : {};
                            let l = t.exec(u),
                                c = u,
                                E = 0;
                            for (; l; ) {
                                const A = l[0],
                                    F = a.exec(A),
                                    D = o.exec(A),
                                    m = l[1];
                                if (F && D) {
                                    const u = F[0],
                                        t = u + E++ + D[0].replaceAll(')', '') + u;
                                    ((c = c.replace(A, `%(${t})`)),
                                        (s[t] = i[u]
                                            ? r().createElement(
                                                  'span',
                                                  { className: i[u] },
                                                  r().createElement(n.z, { text: m, binding: e }),
                                              )
                                            : r().createElement(
                                                  'span',
                                                  { style: ((d = u), { color: `#${d}` }) },
                                                  r().createElement(n.z, { text: m, binding: e }),
                                              )));
                                }
                                l = t.exec(u);
                            }
                            var d;
                            return [c, s];
                        })(e, t),
                        E = c[0],
                        d = c[1];
                    return r().createElement(n.z, s({ text: E, classMix: a, binding: d }, l));
                });
            },
            5287: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return (__webpack_modules__[u](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], r = !0, i = 0; i < e.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, n];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return (__webpack_require__.d(e, { a: e }), e);
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 4584),
        (() => {
            var u = { 4584: 0, 4840: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        ((a = r[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(1672));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
