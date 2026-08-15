(() => {
    var __webpack_modules__ = {
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var n = t(6483),
                    a = t.n(n),
                    r = t(3649),
                    i = t(6179),
                    s = t.n(i),
                    o = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: n = r.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, r.WU)(u, e) : u;
                    return s().createElement(
                        i.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            s().createElement(
                                'div',
                                { className: a()(o.Z.base, t), key: `${u}-${l}` },
                                (0, r.Uw)(u, n, e).map((e, u) =>
                                    s().createElement(i.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => y,
                        events: () => r.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getFontNames: () => f,
                        getScale: () => D,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => w,
                        isFocused: () => B,
                        pxToRem: () => C,
                        remToPx: () => g,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    }));
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                const s = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
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
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function w() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const f = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
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
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    s = 64,
                    o = (e, u) => {
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
                            o('popover' === e ? a : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
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
            3649: (e, u, t) => {
                'use strict';
                t.d(u, { BN: () => s, Uw: () => A, WU: () => r, uF: () => i, v2: () => a });
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
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(a || (a = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    c = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    d = (e, u, t = a.left) => e.split(u).reduce(t === a.left ? l : c, []),
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
                    m = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _ = (e, u = a.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (m.includes(t)) return E(e);
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
                            return (d(r, /( )/, u).forEach((e) => (t = t.concat(d(e, n, a.left)))), t);
                        })(e, u);
                    },
                    A = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : _(e, u)));
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
                t.d(u, {
                    c1: () => f,
                    Sw: () => r.Z,
                    B3: () => o,
                    Z5: () => i.Z5,
                    B0: () => s,
                    wU: () => w,
                    ry: () => D,
                    Eu: () => C,
                    SW: () => B,
                    P3: () => h,
                });
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
                var r = t(1358);
                var i = t(8613);
                let s;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(s || (s = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    m = t(3138);
                const _ = ['args'];
                function A(e, u, t, n, a, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                            A(r, n, a, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(r, n, a, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    g = (e, u) => {
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
                    p = () => g(s.CLOSE),
                    B = () => g(s.POP_OVER, { on: !1 }),
                    h = (e, u, t, n, a = R.invalid('resId'), r) => {
                        const i = m.O.view.getViewGlobalPosition(),
                            o = t.getBoundingClientRect(),
                            l = o.x,
                            c = o.y,
                            d = o.width,
                            E = o.height,
                            _ = {
                                x: m.O.view.pxToRem(l) + i.x,
                                y: m.O.view.pxToRem(c) + i.y,
                                width: m.O.view.pxToRem(d),
                                height: m.O.view.pxToRem(E),
                            };
                        g(s.POP_OVER, {
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
                    w = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    v = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var b = t(7572);
                const f = a.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: B,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: h,
                        addEscapeListener: (e) => {
                            const u = (u) => v(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, p);
                        },
                        handleViewEvent: g,
                        onBindingsReady: D,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: w,
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
                        ClickOutsideManager: f,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = y;
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
            6664: (e, u, t) => {
                'use strict';
                var n = t(6179),
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
                function l(e, u, t) {
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
                const c = i.O.client.getSize('rem'),
                    d = c.width,
                    E = c.height,
                    m = Object.assign({ width: d, height: E }, l(d, E, s)),
                    _ = (0, n.createContext)(m),
                    A = ['children'];
                const F = (e) => {
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
                        })(e, A);
                    const a = (0, n.useContext)(_),
                        i = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        d = a.extraLargeWidth,
                        E = a.largeWidth,
                        m = a.mediumWidth,
                        F = a.smallWidth,
                        D = a.extraSmallWidth,
                        C = a.extraLargeHeight,
                        g = a.largeHeight,
                        p = a.mediumHeight,
                        B = a.smallHeight,
                        h = a.extraSmallHeight,
                        w = { extraLarge: C, large: g, medium: p, small: B, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return r(u, t, w);
                        if (t.largeWidth && E) return r(u, t, w);
                        if (t.mediumWidth && m) return r(u, t, w);
                        if (t.smallWidth && F) return r(u, t, w);
                        if (t.extraSmallWidth && D) return r(u, t, w);
                        if (!(
                            t.extraLargeWidth ||
                            t.largeWidth ||
                            t.mediumWidth ||
                            t.smallWidth ||
                            t.extraSmallWidth
                        )) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                F.defaultProps = {
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
                (0, n.memo)(F);
                const D = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    C = ({ children: e }) => {
                        const u = (0, n.useContext)(_),
                            t = (0, n.useState)(u),
                            r = t[0],
                            o = t[1],
                            c = (0, n.useCallback)((e, u) => {
                                const t = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(u);
                                o(Object.assign({ width: t, height: n }, l(t, n, s)));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                const e = i.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        (D(() => {
                            (i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', d));
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    (i.O.client.events.off('clientResized', c),
                                        i.O.client.events.off('self.onScaleUpdated', d));
                                },
                                [c, d],
                            ));
                        const E = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(_.Provider, { value: E }, e);
                    };
                var g = t(6483),
                    p = t.n(g),
                    B = t(926),
                    h = t.n(B);
                let w, v, b;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(w || (w = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(b || (b = {})));
                const f = () => {
                        const e = (0, n.useContext)(_),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return w.ExtraLarge;
                                    case e.large:
                                        return w.Large;
                                    case e.medium:
                                        return w.Medium;
                                    case e.small:
                                        return w.Small;
                                    case e.extraSmall:
                                        return w.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case e.largeWidth:
                                        return v.Large;
                                    case e.mediumWidth:
                                        return v.Medium;
                                    case e.smallWidth:
                                        return v.Small;
                                    case e.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return b.ExtraLarge;
                                    case e.largeHeight:
                                        return b.Large;
                                    case e.mediumHeight:
                                        return b.Medium;
                                    case e.smallHeight:
                                        return b.Small;
                                    case e.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
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
                const x = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_WIDTH,
                        [v.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [v.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL_HEIGHT,
                        [b.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [b.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [w.ExtraSmall]: '',
                        [w.Small]: h().SMALL,
                        [w.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [w.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [w.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    O = (e) => {
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
                            })(e, y);
                        const r = f(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return a().createElement('div', S({ className: p()(t, x[i], T[s], N[o]) }, n), u);
                    },
                    I = ['children'];
                const P = (e) => {
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
                        })(e, I);
                    return a().createElement(C, null, a().createElement(O, t, u));
                };
                var k = t(493),
                    L = t.n(k),
                    M = t(3403),
                    G = t(9459);
                const U = 33,
                    H = 0,
                    $ = !0,
                    z = 'play';
                const W = [
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
                function q() {
                    return (
                        (q = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        q.apply(null, arguments)
                    );
                }
                const Y = (0, n.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            r = e.getImageSource,
                            i = e.frameCount,
                            s = e.onAnimate,
                            o = e.frameTime,
                            l = void 0 === o ? U : o,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? H : c,
                            E = e.lastFrameIndex,
                            m = void 0 === E ? i - 1 : E,
                            _ = e.loop,
                            A = void 0 === _ ? $ : _,
                            F = e.state,
                            D = void 0 === F ? z : F,
                            C = e.onAnimationDone,
                            g = e.onAnimationComplete,
                            p = e.poster,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, W);
                        const h = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = h.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = K(d, m, r),
                                                u = V(d, m),
                                                n = window.setInterval(() => {
                                                    const a = u(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == s || s(a, r),
                                                          t(r),
                                                          a === m &&
                                                              (null == g || g(),
                                                              A || (null == C || C(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && p ? { path: p, x: 0, y: 0 } : r(d),
                                                u = new Image();
                                            u.src = e.path;
                                            const n = () => t(j(e, u));
                                            return (
                                                u.addEventListener('load', n),
                                                () => u.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, d, m, A, s, g, C, p, D]),
                            a().createElement('canvas', q({}, B, { width: u, height: t, ref: h }))
                        );
                    }),
                    V = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return ((t += 1), t > u && (t = e), n);
                        };
                    },
                    j = (e, u) => Object.assign({}, e, { img: u }),
                    K = (e, u, t) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= u; r++) {
                            const e = t(r),
                                u = a[e.path];
                            if (u) n.set(r, j(e, u));
                            else {
                                const u = new Image();
                                ((a[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, j(e, u)));
                            }
                        }
                        return n;
                    };
                function X(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const Q = {
                        playHighlight() {
                            X('highlight');
                        },
                        playClick() {
                            X('play');
                        },
                        playYes() {
                            X('yes1');
                        },
                    },
                    Z = {
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
                    J = [
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
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ee.apply(null, arguments)
                    );
                }
                class ue extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && X(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && X(this.props.soundClick));
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
                            n = e.goto,
                            r = e.side,
                            i = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
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
                                })(e, J)),
                            m = p()(Z.base, Z[`base__${i}`], Z[`base__${r}`], null == s ? void 0 : s.base),
                            _ = p()(Z.icon, Z[`icon__${i}`], Z[`icon__${r}`], null == s ? void 0 : s.icon),
                            A = p()(Z.glow, null == s ? void 0 : s.glow),
                            F = p()(Z.caption, Z[`caption__${i}`], null == s ? void 0 : s.caption),
                            D = p()(Z.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            ee(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== i && a().createElement('div', { className: Z.shine }),
                            a().createElement('div', { className: _ }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: F }, u),
                            n && a().createElement('div', { className: D }, n),
                        );
                    }
                }
                function te(e, u, t, n) {
                    let a,
                        r = !1,
                        i = 0;
                    function s() {
                        a && clearTimeout(a);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            ((i = Date.now()), t.apply(l, o));
                        }
                        r ||
                            (n && !a && d(),
                            s(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== u &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : d,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (o.cancel = function () {
                            (s(), (r = !0));
                        }),
                        o
                    );
                }
                function ne(e, u, t, a = !1) {
                    const r = (0, n.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? te(e, u, !1) : te(e, t, !1 !== u);
                            })(t, a, e),
                        u,
                    );
                    return ((0, n.useEffect)(() => r.cancel, [r]), r);
                }
                ue.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var ae = t(5521),
                    re = t(9916);
                const ie = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function se(e = ae.n.NONE, u = ie, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== ae.n.NONE)
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
                let oe;
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
                })(oe || (oe = {}));
                const le = (e = {}) => {
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
                    ce = (e, u) => {
                        const t = (0, n.useRef)();
                        return (
                            (0, n.useEffect)(() => {
                                (u && !u(e)) || (t.current = e);
                            }, [u, e]),
                            t.current
                        );
                    };
                var de = t(406);
                class Ee extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = re.B3.GOLD;
                        else e = re.B3.INTEGRAL;
                        const u = re.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Ee.defaultProps = { format: 'integral' };
                const me = 'Background_base_d7',
                    _e = 'Background_rightBorder_62',
                    Ae = 'Background_background_d7',
                    Fe = () =>
                        a().createElement(
                            'div',
                            { className: me },
                            a().createElement('div', { className: Ae }),
                            a().createElement('div', { className: _e }),
                        ),
                    De = {
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
                let Ce, ge;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Ce || (Ce = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(ge || (ge = {})));
                const pe = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: s,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: _,
                    onClick: A,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        C = D[0],
                        g = D[1],
                        B = (0, n.useState)(!1),
                        h = B[0],
                        w = B[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                C && null !== F.current && !F.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, n.useEffect)(() => {
                            g(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: F,
                                className: p()(
                                    De.base,
                                    De[`base__${r}`],
                                    i && De.base__disabled,
                                    u && De[`base__${u}`],
                                    C && De.base__focus,
                                    h && De.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== o && X(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    i || (m && m(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== l && X(l),
                                        E && E(e),
                                        t && (i || (F.current && (F.current.focus(), g(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (_ && _(e), w(!1));
                                },
                                onClick: function (e) {
                                    i || (A && A(e));
                                },
                            },
                            r !== Ce.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: De.back }),
                                    a().createElement('span', { className: De.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: p()(De.state, De.state__default) },
                                a().createElement('span', { className: De.stateDisabled }),
                                a().createElement('span', { className: De.stateHighlightHover }),
                                a().createElement('span', { className: De.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: De.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                pe.defaultProps = { type: Ce.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Be = pe;
                var he = t(280),
                    we = t(3649);
                const ve = [
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
                function be(e) {
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
                const fe = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: re.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    ye = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            g = e.onShow,
                            p = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, ve);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, n.useMemo)(
                                () =>
                                    C ||
                                    ((e = 1) => {
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
                                    })().resId,
                                [C],
                            ),
                            v = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (fe(t, _, { isMouseEvent: !0, on: !0, arguments: be(a) }, w),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, _, a, w, g]),
                            b = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        fe(t, _, { on: !1 }, w),
                                        h.current.isVisible && p && p(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, _, w, p]),
                            f = (0, n.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', f, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
                            ));
                        return F
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (b(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === E && b(), null == o || o(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === E && b(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    Re = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Se() {
                    return (
                        (Se = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Se.apply(null, arguments)
                    );
                }
                const xe = R.views.common.tooltip_window.simple_tooltip_content,
                    Te = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            i = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Re);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: r, note: i, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, i, o]);
                        return a().createElement(
                            ye,
                            Se(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? xe.SimpleTooltipHtmlContent('resId') : xe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    Ne = 'Footer_base_3d',
                    Oe = 'Footer_errorMessage_e5',
                    Ie = 'Footer_alertIcon_df',
                    Pe = 'Footer_buttonContent_0d',
                    ke = R.strings.ny.rewardKitStatistics,
                    Le = ({ isResetFailed: e, hasStatistics: u, resetStatistics: t }) =>
                        a().createElement(
                            'div',
                            { className: Ne },
                            a().createElement(
                                Te,
                                { body: ke.statistics.resetDescription() },
                                a().createElement(
                                    Be,
                                    { type: Ce.ghost, size: ge.medium, onClick: t, disabled: !u, mixClass: Pe },
                                    ke.statistics.reset(),
                                ),
                            ),
                            e &&
                                a().createElement(
                                    Te,
                                    { body: ke.resetError.body() },
                                    a().createElement(
                                        'div',
                                        { className: Oe },
                                        a().createElement(he.z, {
                                            text: ke.resetError.label(),
                                            binding: { alertIcon: a().createElement('span', { className: Ie }) },
                                        }),
                                    ),
                                ),
                        ),
                    Me = 'Header_base_f9',
                    Ge = 'Header_content_ea',
                    Ue = 'Header_highlightedText_37',
                    He = 'Header_infoIcon_2b',
                    $e = R.strings.ny.rewardKitStatistics,
                    ze = ({ count: e }) =>
                        a().createElement(
                            'div',
                            { className: Me },
                            a().createElement(
                                Te,
                                { header: $e.tooltip.header(), body: $e.tooltip.body() },
                                a().createElement(
                                    'div',
                                    { className: Ge },
                                    a().createElement(he.z, {
                                        text: R.strings.ny.rewardKitStatistics.$plural('openedBoxes', e),
                                        binding: { count: a().createElement('span', { className: Ue }, e) },
                                    }),
                                    a().createElement('div', { className: He }),
                                ),
                            ),
                        );
                function We(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const qe = We;
                function Ye(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Ve(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let a = 0; a < e.length; a++) {
                        var n;
                        const r = null == (n = e[a]) ? void 0 : n.value;
                        u(r, a, e) && t.push(r);
                    }
                    return t;
                }
                let je, Ke, Xe, Qe, Ze, Je, eu, uu;
                (!(function (e) {
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
                })(je || (je = {})),
                    (function (e) {
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
                    })(Ke || (Ke = {})),
                    (function (e) {
                        ((e.Crystal = 'ny_crystal'),
                            (e.Emerald = 'ny_emerald'),
                            (e.Amber = 'ny_amber'),
                            (e.Iron = 'ny_iron'),
                            (e.AnyResource = 'anyResource'));
                    })(Xe || (Xe = {})),
                    (function (e) {
                        ((e.XP = 'xpFactor'),
                            (e.TankmenXP = 'tankmenXPFactor'),
                            (e.FreeXp = 'freeXPFactor'),
                            (e.Credits = 'creditsFactor'));
                    })(Qe || (Qe = {})),
                    (function (e) {
                        ((e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental'));
                    })(Ze || (Ze = {})),
                    (function (e) {
                        ((e.Level1 = 'level1'), (e.Level2 = 'level2'), (e.Level3 = 'level3'), (e.Level4 = 'level4'));
                    })(Je || (Je = {})),
                    (function (e) {
                        ((e.Zero = 'zero'), (e.Number = 'number'), (e.Default = 'default'));
                    })(eu || (eu = {})),
                    (function (e) {
                        ((e.Undefined = 'undefined'),
                            (e.ToEvent = 'toEvent'),
                            (e.ToGuestD = 'toGuestD'),
                            (e.ToGuestC = 'toGuestC'),
                            (e.ToMarkertplace = 'toMarkertplace'),
                            (e.ToGiftmachine = 'toGiftmachine'),
                            (e.ToRewards = 'toRewards'));
                    })(uu || (uu = {})));
                const tu = R.images.gui.maps.icons.quests.bonuses.big,
                    nu = {
                        [je.None]: '',
                        [je.Vehicles]: tu.vehicles(),
                        [je.Customizations]: tu.style_3d(),
                        [je.Attachment]: tu.attachment(),
                        [je.PremiumPlus]: tu.premium_plus_universal(),
                        [je.Gold]: tu.gold(),
                        [je.Credits]: tu.credits(),
                        [Xe.Crystal]: tu.ny_crystal(),
                        [Xe.Emerald]: tu.ny_emerald(),
                        [Xe.Amber]: tu.ny_amber(),
                        [Xe.Iron]: tu.ny_iron(),
                        [je.ModernizedEquipment]: tu.modernizedEquipment(),
                        [je.NyToys]: tu.nyToys(),
                    },
                    au = {
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
                    ru = R.strings.ny.rewardKitStatistics.statistics,
                    iu = [je.Gold, je.Credits],
                    su = ({ type: e, count: u }) => {
                        const t = a().createElement(Ee, { value: u, format: iu.includes(e) ? 'gold' : 'integral' });
                        return a().createElement(
                            'div',
                            { className: au.base },
                            a().createElement('div', {
                                className: au.icon,
                                style: { backgroundImage: `url('${nu[e]}')` },
                            }),
                            a().createElement(
                                'div',
                                { className: au.name },
                                a().createElement(he.z, {
                                    text: ru.$dyn(e),
                                    binding: {
                                        units: a().createElement(he.z, {
                                            text: ru.units(),
                                            binding: { unitsCount: t },
                                            classMix: au.count,
                                        }),
                                        days: a().createElement(he.z, {
                                            text: ru.days(),
                                            binding: { daysCount: t },
                                            classMix: au.count,
                                        }),
                                        currency: a().createElement(
                                            'span',
                                            { className: p()(au.count, au[`count__${e}`]) },
                                            t,
                                        ),
                                    },
                                }),
                            ),
                        );
                    },
                    ou = 'ResourcesStatistics_base_33',
                    lu = 'ResourcesStatistics_column_e1',
                    cu = 'ResourcesStatistics_resource_83',
                    du = (e, u) => Ve(e, u ? (e, u) => u % 2 == 1 : (e, u) => u % 2 == 0),
                    Eu = ({ resources: e }) =>
                        a().createElement(
                            'div',
                            { className: ou },
                            a().createElement(
                                'div',
                                { className: lu },
                                du(e, !1).map((e, u) =>
                                    a().createElement(
                                        ye,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                            args: { type: e.type },
                                            key: u,
                                        },
                                        a().createElement(
                                            'div',
                                            { className: cu },
                                            a().createElement(su, { type: e.type, count: e.value }),
                                        ),
                                    ),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: lu },
                                du(e, !0).map((e, u) =>
                                    a().createElement(
                                        ye,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                            args: { type: e.type },
                                            key: u,
                                        },
                                        a().createElement(
                                            'div',
                                            { className: cu },
                                            a().createElement(su, { type: e.type, count: e.value }),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    mu = 'Statistics_base_f5',
                    _u = 'Statistics_item_0b',
                    Au = [je.Vehicles, je.Customizations, je.Attachment, je.ModernizedEquipment],
                    Fu = R.views.lobby.new_year.tooltips,
                    Du = (e) => {
                        switch (e) {
                            case je.Vehicles:
                                return Fu.NyVehiclesStatisticsTooltip('resId');
                            case je.Customizations:
                                return Fu.NyCustomizationsStatisticsTooltip('resId');
                            case je.Attachment:
                                return Fu.NyAttachmentsStatisticsTooltip('resId');
                            case je.ModernizedEquipment:
                                return Fu.NyEquipmentsStatisticsTooltip('resId');
                            default:
                                return R.invalid('resId');
                        }
                    },
                    Cu = ({ rewards: e }) => {
                        return a().createElement(
                            'div',
                            { className: mu },
                            ((u = e),
                            (t = (e, u) =>
                                a().createElement(
                                    ye,
                                    {
                                        ignoreShowDelay: !0,
                                        contentId: Du(e.type),
                                        isEnabled: Au.includes(e.type),
                                        key: u,
                                    },
                                    a().createElement(
                                        'div',
                                        { className: _u },
                                        a().createElement(su, { type: e.type, count: e.count }),
                                    ),
                                )),
                            Array.isArray(u) ? u.map(t) : u.map((e, u, n) => t(null == e ? void 0 : e.value, u, n))),
                        );
                        var u, t;
                    },
                    gu = 'NyRewardKitStatistics_base_7e',
                    pu = 'NyRewardKitStatistics_content_08',
                    Bu = 'NyRewardKitStatistics_closeBtn_64',
                    hu = 'NyRewardKitStatistics_message_e4',
                    wu = 'NyRewardKitStatistics_rewards_0f',
                    vu = 'NyRewardKitStatistics_resources_b9',
                    bu = 'NyRewardKitStatistics_resourcesCounter_5b',
                    fu = 'NyRewardKitStatistics_line_4c',
                    yu = 'NyRewardKitStatistics_resourcesCounterText_d3',
                    Ru = R.strings.ny.rewardKitStatistics,
                    Su = ({
                        closeStatistics: e,
                        boxesCount: u,
                        hasStatistics: t,
                        resourcesTotalCount: n,
                        resetStatistics: r,
                        isResetFailed: i,
                        rewards: s,
                        resources: o,
                    }) =>
                        a().createElement(
                            'div',
                            { className: p()(gu) },
                            a().createElement(Fe, null),
                            a().createElement('div', {
                                className: Bu,
                                onClick: () => {
                                    (X(R.sounds.cancelcloseno()), e());
                                },
                            }),
                            a().createElement(
                                'div',
                                { className: pu },
                                a().createElement(ze, { count: u }),
                                t
                                    ? a().createElement(
                                          'div',
                                          null,
                                          a().createElement(
                                              'div',
                                              { className: wu },
                                              a().createElement(Cu, { rewards: s }),
                                          ),
                                          a().createElement(
                                              'div',
                                              { className: bu },
                                              a().createElement('div', { className: fu }),
                                              a().createElement(de.B, {
                                                  text: Ru.resourcesTotalCount(),
                                                  binding: { count: a().createElement(Ee, { value: n }) },
                                                  className: yu,
                                              }),
                                              a().createElement('div', { className: fu }),
                                          ),
                                          a().createElement(
                                              'div',
                                              { className: vu },
                                              a().createElement(Eu, { resources: o }),
                                          ),
                                      )
                                    : a().createElement(
                                          'div',
                                          { className: hu },
                                          R.strings.ny.rewardKitStatistics.noStatistics(),
                                      ),
                            ),
                            a().createElement(Le, { hasStatistics: t, isResetFailed: i, resetStatistics: r }),
                        ),
                    xu = 'NyRewardKitsStatisticsSlider_base_71',
                    Tu = 'NyRewardKitsStatisticsSlider_base__visible_25',
                    Nu = 'NyRewardKitsStatisticsSlider_shadow_2d',
                    Ou = ({
                        isVisible: e,
                        closeStatistics: u,
                        resources: t,
                        rewards: r,
                        isResetFailed: i,
                        resetStatistics: s,
                        resourcesTotalCount: o,
                        boxesCount: l,
                    }) => {
                        const c = t.length + r.length > 0,
                            d = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const t = d.current;
                                if (t && e) return (re.c1.register(t, u), () => re.c1.unregister(t, u));
                            }, [e, d, u]),
                            (0, n.useEffect)(() => {
                                e && X(R.sounds.gui_lootbox_in_game_shop_box_buy());
                            }, [e]),
                            a().createElement(
                                'div',
                                { className: p()(xu, e && Tu), ref: d },
                                a().createElement('div', { className: Nu }),
                                a().createElement(Su, {
                                    closeStatistics: u,
                                    hasStatistics: c,
                                    isResetFailed: i,
                                    resetStatistics: s,
                                    boxesCount: l,
                                    rewards: r,
                                    resources: t,
                                    resourcesTotalCount: o,
                                }),
                            )
                        );
                    },
                    Iu = 'StatisticsButton_base_2d',
                    Pu = R.strings.ny.rewardKitStatistics.tooltip,
                    ku = ({ onClick: e, classNames: u }) =>
                        a().createElement(
                            Te,
                            {
                                header: Pu.header(),
                                body: Pu.body(),
                                onClick: () => {
                                    (Q.playClick(), null == e || e());
                                },
                            },
                            a().createElement('div', {
                                className: p()(Iu, null == u ? void 0 : u.base),
                                onMouseEnter: () => {
                                    Q.playHighlight();
                                },
                            }),
                        );
                var Lu = t(4734),
                    Mu = t(3454);
                let Gu, Uu;
                (!(function (e) {
                    ((e.Init = 'init'),
                        (e.Opening = 'opening'),
                        (e.OpenRow = 'openRow'),
                        (e.Pause = 'pause'),
                        (e.PauseForSpecial = 'pauseForSpecial'),
                        (e.Idle = 'idle'));
                })(Gu || (Gu = {})),
                    (function (e) {
                        ((e.OpenNext = 'openNext'),
                            (e.StartOpening = 'startOpening'),
                            (e.ToIdle = 'toIdle'),
                            (e.ToPause = 'toPause'),
                            (e.ToOpening = 'toOpening'),
                            (e.ToSpecialPause = 'toSpecialPause'));
                    })(Uu || (Uu = {})));
                function Hu() {
                    return !1;
                }
                console.log;
                var $u = t(9174);
                function zu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return Wu(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? Wu(e, u)
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
                function Wu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const qu = (e) => (0 === e ? window : window.subViews.get(e));
                var Yu = t(3946);
                const Vu = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: s, children: o, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    d = (t, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = qu,
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
                                                        for (var e, t = zu(a.keys()); !(e = t()).done;) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = $u.LO.box(n, { equals: Hu });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, $u.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = $u.LO.box(n, { equals: Hu });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, $u.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = $u.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, $u.aD)((u) => {
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
                                                                    (e, [u, t]) => ((e[t] = $u.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, $u.aD)((e) => {
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
                                                cleanup: d,
                                            }),
                                            m = { mode: t, model: E, externalModel: o, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && a ? a.controls(m) : u(m),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    m = (0, n.useState)(r),
                                    _ = m[0],
                                    A = m[1],
                                    F = (0, n.useState)(() => d(r, s, l)),
                                    D = F[0],
                                    C = F[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? C(d(_, s, l)) : (E.current = !0);
                                    }, [l, _, s]),
                                    (0, n.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [D],
                                    ),
                                    a().createElement(t.Provider, { value: D }, o)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    rewardKitStatistics: e.object('rewardKitStatistics'),
                                    rewards: e.array('rewardKitStatistics.rewards', []),
                                    resources: e.array('rewardKitStatistics.resources', []),
                                    rewardRows: e.array('rewardRows.items', []),
                                    guaranteedReward: e.object('guaranteedReward'),
                                    limitToOpen: 5,
                                },
                                t = (0, Yu.Om)(() => u.root.get().boxesCounter),
                                n = (0, Yu.Om)(() => u.rewardRows.get().length),
                                a = (0, Yu.Om)(() => n() - 1),
                                r = (0, Yu.Om)((e) => {
                                    var t;
                                    return null == (t = We(u.rewardRows.get(), e)) ? void 0 : t.rewards;
                                }),
                                i = (0, Yu.Om)((e) => {
                                    var t;
                                    return null == (t = We(u.rewardRows.get(), e)) ? void 0 : t.specialIds;
                                });
                            return Object.assign({}, u, {
                                computes: {
                                    getRewardsLength: n,
                                    getRewardKitsCount: t,
                                    getLastRewardRowIndex: a,
                                    getRewardRow: r,
                                    getSpecialIds: i,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            openBox: e.createCallbackNoArgs('onOpenBox'),
                            openNextBoxes: e.createCallbackNoArgs('openNextBoxes'),
                            viewShowed: e.createCallbackNoArgs('onViewShowed'),
                            close: e.createCallbackNoArgs('onClose'),
                            resetStatistics: e.createCallbackNoArgs('rewardKitStatistics.onResetStatistics'),
                            updateLastSeen: e.createCallbackNoArgs('rewardKitStatistics.onUpdateLastSeen'),
                            showSpecialReward: e.createCallback((e) => ({ specialId: e }), 'showSpecialReward'),
                            infoClick: e.createCallbackNoArgs('guaranteedReward.onShowInfo'),
                        }),
                    ),
                    ju = Vu[0],
                    Ku = Vu[1];
                let Xu;
                !(function (e) {
                    ((e[(e.Normal = 0)] = 'Normal'), (e[(e.Disabled = 1)] = 'Disabled'));
                })(Xu || (Xu = {}));
                var Qu = t(8613);
                (Date.now(), Qu.Ew.getRegionalDateTime, Qu.Ew.getFormattedDateTime);
                re.Sw.instance;
                let Zu;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Zu || (Zu = {}));
                re.Sw.instance;
                const Ju = ce;
                var et = t(7030);
                let ut, tt;
                (!(function (e) {
                    ((e.ExtraSmall = 'extraSmall'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.ExtraLarge = 'extraLarge'));
                })(ut || (ut = {})),
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
                    })(tt || (tt = {})));
                const nt = () => {},
                    at = [
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
                function rt() {
                    return (
                        (rt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        rt.apply(null, arguments)
                    );
                }
                const it = (0, n.memo)((e) => {
                        let u = e.width,
                            t = e.height,
                            r = e.getSrcByFrame,
                            i = e.frameCount,
                            s = e.onAnimate,
                            o = void 0 === s ? nt : s,
                            l = e.frameTime,
                            c = void 0 === l ? 33 : l,
                            d = e.initialFrameIndex,
                            E = void 0 === d ? 0 : d,
                            m = e.loop,
                            _ = void 0 === m || m,
                            A = e.state,
                            F = void 0 === A ? 'play' : A,
                            D = e.onAnimationComplete,
                            C = void 0 === D ? nt : D,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, at);
                        const p = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = p.current;
                                if (!e) return;
                                const n = i - 1,
                                    a = e.getContext('2d'),
                                    s = (n) => {
                                        (a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, u, t));
                                    };
                                if ('stop' === F) {
                                    const e = r(0),
                                        u = new Image();
                                    u.src = e;
                                    const t = () => s(u);
                                    return (u.addEventListener('load', t), () => u.removeEventListener('load', t));
                                }
                                const l = ((e, u) => {
                                        const t = [];
                                        for (let n = 0; n < e; n++) {
                                            const e = new Image();
                                            ((e.src = u(n)), t.push(e));
                                        }
                                        return t;
                                    })(i, r),
                                    d = ((e, u = 0) => {
                                        let t = u;
                                        return () => {
                                            const u = t;
                                            return ((t += 1), t > e && (t = 0), u);
                                        };
                                    })(n, E),
                                    m = setInterval(() => {
                                        const e = d(),
                                            u = l[e];
                                        (s(l[e]), o(e, u), e === n && (C(), _ || clearInterval(m)));
                                    }, c);
                                return () => clearInterval(m);
                            }, [i, c, r, t, E, _, o, C, F, u]),
                            a().createElement('canvas', rt({}, g, { width: u, height: t, ref: p }))
                        );
                    }),
                    st = 'EffectCounter_base_5a',
                    ot = 'EffectCounter_count_06',
                    lt = 'EffectCounter_base__strong_86',
                    ct = 'EffectCounter_effect_12',
                    dt = 'EffectCounter_strongEffect_3f',
                    Et = 'EffectCounter_particles_04';
                let mt;
                !(function (e) {
                    ((e.None = 'none'),
                        (e.StrongEffect = 'strongEffect'),
                        (e.WeakEffect = 'weakEffect'),
                        (e.Default = 'none'));
                })(mt || (mt = {}));
                const _t = { duration: 1e3 },
                    At = { duration: 500 },
                    Ft = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${e.toString().padStart(5, '0')}`,
                    Dt = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((e + 75) % 120).toString().padStart(5, '0')}`,
                    Ct = 140,
                    gt = a().memo(function ({
                        value: e,
                        className: u,
                        from: t,
                        onStart: r,
                        onRest: i,
                        onChange: s,
                        onPause: o,
                        onResume: l,
                        onProps: c,
                        onResolve: d,
                        style: E = mt.Default,
                        valueConfig: m = _t,
                        changeShineConfig: _ = At,
                    }) {
                        const A = (0, et.useSpring)(() => ({
                                to: { value: e },
                                from: { value: null != t ? t : e },
                                config: m,
                                onStart: r,
                                onRest: i,
                                onChange: s,
                                onPause: o,
                                onResume: l,
                                onProps: c,
                                onResolve: d,
                            })),
                            F = A[0],
                            D = A[1],
                            C = (0, et.useTransition)(E, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                config: _,
                            });
                        return (
                            (0, n.useEffect)(() => {
                                'number' == typeof t &&
                                    D.start({ to: { value: e }, from: { value: t }, config: m, reset: !0 });
                            }, [e, t, D, m]),
                            a().createElement(
                                'div',
                                { className: p()(st, E === mt.StrongEffect && lt, u) },
                                a().createElement(
                                    'div',
                                    { className: ot },
                                    C((e, u) =>
                                        a().createElement(
                                            et.animated.div,
                                            { style: e, className: ct },
                                            u === mt.StrongEffect &&
                                                a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement(it, {
                                                        width: Ct,
                                                        height: Ct,
                                                        frameCount: 120,
                                                        frameTime: 50,
                                                        getSrcByFrame: Ft,
                                                        className: Et,
                                                    }),
                                                    a().createElement(it, {
                                                        width: Ct,
                                                        height: Ct,
                                                        frameCount: 120,
                                                        frameTime: 50,
                                                        getSrcByFrame: Dt,
                                                        className: Et,
                                                    }),
                                                    a().createElement('div', { className: dt }),
                                                ),
                                        ),
                                    ),
                                    a().createElement(
                                        et.animated.div,
                                        null,
                                        F.value.to((e) => e.toFixed(0)),
                                    ),
                                ),
                            )
                        );
                    });
                let pt;
                !(function (e) {
                    ((e[(e.Ultra = 0)] = 'Ultra'),
                        (e[(e.Max = 1)] = 'Max'),
                        (e[(e.Height = 2)] = 'Height'),
                        (e[(e.Medium = 3)] = 'Medium'),
                        (e[(e.Low = 4)] = 'Low'),
                        (e[(e.Min = 5)] = 'Min'),
                        (e[(e.PerfLevelCount = 6)] = 'PerfLevelCount'));
                })(pt || (pt = {}));
                const Bt = pt.Ultra,
                    ht = () => Bt >= pt.Low;
                let wt;
                !(function (e) {
                    ((e.China = 'CN'), (e.Ru = 'RU'));
                })(wt || (wt = {}));
                const vt = 'GuaranteedRewardCount_base_d0',
                    bt = 'GuaranteedRewardCount_text_3b',
                    ft = 'GuaranteedRewardCount_countWrapper_52',
                    yt = 'GuaranteedRewardCount_icon_ea',
                    Rt = ({ onInfoClick: e, InfoComponent: u, boxesCount: t, children: n }) =>
                        a().createElement(
                            'div',
                            { className: vt },
                            a().createElement(he.z, {
                                classMix: bt,
                                text: R.strings.ny.rewardKitMain.guaranteedReward.$plural('boxesLeft', t),
                                binding: { count: a().createElement('div', { className: ft }, n) },
                            }),
                            a().createElement(
                                'div',
                                { className: bt },
                                a().createElement('div', { className: yt }, a().createElement(u, { onClick: e })),
                            ),
                        ),
                    St = {
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
                    xt = 220,
                    Tt = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${e.toString().padStart(5, '0')}`,
                    Nt = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((e + 75) % 120).toString().padStart(5, '0')}`,
                    Ot = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((e + 50) % 120).toString().padStart(5, '0')}`,
                    It = ({ onInfoClick: e, InfoComponent: u }) =>
                        a().createElement(
                            'div',
                            { className: St.base },
                            a().createElement(it, {
                                width: xt,
                                height: xt,
                                frameCount: 120,
                                frameTime: 50,
                                getSrcByFrame: Tt,
                                className: p()(St.particles, St.particles__left),
                            }),
                            a().createElement(it, {
                                width: xt,
                                height: xt,
                                frameCount: 120,
                                getSrcByFrame: Nt,
                                className: p()(St.particles, St.particles__center),
                            }),
                            a().createElement(it, {
                                width: xt,
                                height: xt,
                                frameCount: 120,
                                frameTime: 50,
                                getSrcByFrame: Ot,
                                className: p()(St.particles, St.particles__right),
                            }),
                            a().createElement(
                                'div',
                                { className: St.text },
                                a().createElement('div', { className: St.firstShine }),
                                a().createElement('div', { className: St.secondShine }),
                                a().createElement(
                                    'div',
                                    { className: St.content },
                                    R.strings.ny.rewardKitMain.guaranteedReward.next(),
                                ),
                                a().createElement('div', { className: St.icon }, a().createElement(u, { onClick: e })),
                            ),
                        ),
                    Pt = 'InfoIcon_base_5d',
                    kt = 'InfoIcon_base__clickable_fd',
                    Lt = ({ onClick: e }) => a().createElement('div', { className: p()(Pt, e && kt), onClick: e }),
                    Mt = 'InfoText_base_16',
                    Gt = 'InfoText_text_83',
                    Ut = 'InfoText_icon_ef',
                    Ht = 'InfoText_underline_f3',
                    $t = ({ onClick: e }) =>
                        a().createElement(
                            'div',
                            { className: Mt, onClick: e },
                            a().createElement(
                                'div',
                                { className: Gt },
                                a().createElement('div', { className: Ht }),
                                R.strings.ny.rewardKitMain.guaranteedReward.moreInfo(),
                            ),
                            a().createElement('div', { className: Ut }),
                        );
                let zt;
                !(function (e) {
                    ((e[(e.Hidden = 0)] = 'Hidden'),
                        (e[(e.NextGuaranteed = 1)] = 'NextGuaranteed'),
                        (e[(e.ThroughCountGuaranteed = 2)] = 'ThroughCountGuaranteed'));
                })(zt || (zt = {}));
                const Wt = (e) => e === zt.ThroughCountGuaranteed,
                    qt = a().memo(function ({
                        state: e,
                        boxesCount: u,
                        onInfoClick: t,
                        className: r,
                        sunShineEffectCount: i,
                        switchDelay: s,
                        animationFrom: o = u,
                        realm: l,
                    }) {
                        var c;
                        const d = (0, n.useRef)(u);
                        (0, n.useEffect)(() => {
                            e === zt.ThroughCountGuaranteed && (d.current = u);
                        }, [u, e]);
                        const E = (0, et.useTransition)(e, {
                                from: { opacity: 0 },
                                enter: { opacity: 1, delay: null != (c = null == s ? void 0 : s.enter) ? c : 0 },
                                leave: { opacity: 0 },
                                config: { duration: 300 },
                            }),
                            m = l === wt.China ? $t : Lt;
                        return a().createElement(
                            a().Fragment,
                            null,
                            E(
                                (n, s) =>
                                    s !== zt.Hidden &&
                                    a().createElement(
                                        et.animated.div,
                                        { style: n, className: r },
                                        a().createElement(
                                            ye,
                                            {
                                                isEnabled: l !== wt.China,
                                                contentId:
                                                    R.views.lobby.new_year.tooltips.NyGuaranteedRewardTooltip('resId'),
                                            },
                                            a().createElement(
                                                'div',
                                                null,
                                                (() => {
                                                    switch (s) {
                                                        case zt.ThroughCountGuaranteed:
                                                            return a().createElement(
                                                                Rt,
                                                                { onInfoClick: t, boxesCount: u, InfoComponent: m },
                                                                a().createElement(gt, {
                                                                    value: Wt(e) ? u : d.current,
                                                                    from: Wt(e) ? o : d.current,
                                                                    style: u > i ? mt.WeakEffect : mt.StrongEffect,
                                                                    sequenceAnimationState: ht() ? 'stop' : 'play',
                                                                }),
                                                            );
                                                        case zt.NextGuaranteed:
                                                            return a().createElement(It, {
                                                                onInfoClick: t,
                                                                InfoComponent: m,
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
                    Yt = { enter: 850 },
                    Vt = a().memo(function ({
                        maxBoxesCount: e,
                        realm: u,
                        state: t,
                        onInfoClick: n,
                        isFocused: r = !1,
                        className: i = '',
                        switchDelay: s = Yt,
                    }) {
                        var o, l, c;
                        const d = null != (o = Ju(t)) ? o : t,
                            E = null != (l = Ju(e)) ? l : e,
                            m = (null != (c = Ju(r)) ? c : r) !== r && r;
                        return a().createElement(qt, {
                            state: t,
                            boxesCount: e,
                            sunShineEffectCount: 5,
                            realm: u,
                            onInfoClick: u === wt.China ? n : void 0,
                            className: i,
                            animationFrom: m ? ((_ = e), (A = E), _ > A ? 0 : _ < A ? A : _) : e,
                            switchDelay: d === zt.Hidden ? s : void 0,
                        });
                        var _, A;
                    }),
                    jt = (0, M.Pi)(() => {
                        const e = Ku(),
                            u = e.model,
                            t = e.controls,
                            n = u.guaranteedReward.get(),
                            r = n.maxBoxesCount,
                            i = n.realm,
                            s = n.state,
                            o = n.isFocused,
                            l = s === Xu.Disabled ? zt.Hidden : r <= 1 ? zt.NextGuaranteed : zt.ThroughCountGuaranteed;
                        return a().createElement(Vt, {
                            maxBoxesCount: r,
                            realm: i,
                            state: l,
                            onInfoClick: t.infoClick,
                            isFocused: o,
                        });
                    }),
                    Kt = 'Footer_base_0c',
                    Xt = 'Footer_guaranteedWrapper_71',
                    Qt = 'Footer_buttons_97',
                    Zt = 'Footer_button_1c',
                    Jt = 'Footer_button__hidden_b7',
                    en = 'Footer_noWrap_49',
                    un = 'Footer_errorBox_d4',
                    tn = 'Footer_errorBox__withIndent_82',
                    nn = 'Footer_errorIcon_0f',
                    an = 'Footer_errorIcon__withIndent_03',
                    rn = 'Footer_stopIcon_cf',
                    sn = 'Footer_playIcon_96',
                    on = 'Footer_error_8c',
                    ln = 'Footer_remainingBoxes_b3',
                    cn = 'Footer_accent_f6',
                    dn = R.strings.ny.lootBoxMultiOpen,
                    En = R.strings.ny.lootBoxPremiumMultiOpen,
                    mn = dn.closeButton.usual(),
                    _n = dn.closeButton.empty(),
                    An = dn.openButton(),
                    Fn = R.strings.ny.rewardKit.actionsUnavailable(),
                    Dn = dn.serverError(),
                    Cn = dn.remainingBoxes.usual(),
                    gn = dn.remainingBoxes.empty(),
                    pn = (0, M.Pi)(({ onOpenBox: e, onPause: u, onPlay: t, state: n }) => {
                        const r = Ku(),
                            i = r.model,
                            s = r.controls,
                            o = i.root.get(),
                            l = o.boxesCounter,
                            c = o.isRewardKitsEnabled,
                            d = o.leftToOpenCount,
                            E = o.isServerError,
                            m = Boolean(l),
                            _ = !c && !m,
                            A = Math.min(l, i.limitToOpen);
                        return a().createElement(
                            'div',
                            { className: Kt },
                            E || _
                                ? a().createElement(
                                      'div',
                                      { className: p()(un, _ && tn) },
                                      E
                                          ? a().createElement(
                                                'div',
                                                { className: on },
                                                a().createElement(he.z, {
                                                    text: Dn,
                                                    classMix: en,
                                                    binding: {
                                                        alertIcon: a().createElement('span', { className: nn }),
                                                    },
                                                }),
                                            )
                                          : a().createElement(
                                                'div',
                                                { className: on },
                                                a().createElement('span', { className: p()(nn, an) }),
                                                Fn,
                                            ),
                                      a().createElement(
                                          'div',
                                          { className: Zt },
                                          a().createElement(
                                              Be,
                                              { type: Ce.primary, size: ge.medium, onClick: s.close },
                                              _n,
                                          ),
                                      ),
                                  )
                                : a().createElement(
                                      a().Fragment,
                                      null,
                                      a().createElement('div', { className: Xt }, a().createElement(jt, null)),
                                      a().createElement(
                                          'div',
                                          { className: Qt },
                                          n === Gu.Idle &&
                                              a().createElement(
                                                  a().Fragment,
                                                  null,
                                                  m &&
                                                      a().createElement(
                                                          Te,
                                                          {
                                                              body: R.strings.ny.newYear.errors.lootboxDisabled(),
                                                              isEnabled: !c,
                                                          },
                                                          a().createElement(
                                                              'div',
                                                              { className: Zt },
                                                              a().createElement(
                                                                  Be,
                                                                  {
                                                                      type: Ce.main,
                                                                      size: ge.medium,
                                                                      disabled: !c,
                                                                      onClick: e,
                                                                  },
                                                                  (0, we.uF)(An, { count: A }),
                                                              ),
                                                          ),
                                                      ),
                                                  a().createElement(
                                                      Be,
                                                      {
                                                          type: Ce.primary,
                                                          size: ge.medium,
                                                          mixClass: Zt,
                                                          onClick: s.close,
                                                      },
                                                      m ? mn : _n,
                                                  ),
                                              ),
                                          (n === Gu.Opening || n === Gu.OpenRow) &&
                                              a().createElement(
                                                  Be,
                                                  {
                                                      type: Ce.primary,
                                                      size: ge.medium,
                                                      mixClass: p()(Zt, !d && Jt),
                                                      onClick: u,
                                                  },
                                                  a().createElement(he.z, {
                                                      text: En.stopAutoOpen(),
                                                      classMix: en,
                                                      binding: {
                                                          stopIcon: a().createElement('span', { className: rn }),
                                                          count: d,
                                                      },
                                                  }),
                                              ),
                                          n === Gu.Pause &&
                                              a().createElement(
                                                  Te,
                                                  {
                                                      body: R.strings.ny.newYear.errors.lootboxDisabled(),
                                                      isEnabled: !c,
                                                  },
                                                  a().createElement(
                                                      'div',
                                                      { className: p()(Zt, !d && Jt) },
                                                      a().createElement(
                                                          Be,
                                                          { type: Ce.main, size: ge.medium, disabled: !c, onClick: t },
                                                          a().createElement(he.z, {
                                                              text: En.continueAutoOpen(),
                                                              classMix: en,
                                                              binding: {
                                                                  continueIcon: a().createElement('span', {
                                                                      className: sn,
                                                                  }),
                                                              },
                                                          }),
                                                      ),
                                                  ),
                                              ),
                                      ),
                                  ),
                            !_ &&
                                a().createElement(
                                    'div',
                                    { className: ln },
                                    a().createElement(he.z, {
                                        text: m ? Cn : gn,
                                        binding: { count: a().createElement('div', { className: cn }, l) },
                                    }),
                                ),
                        );
                    }),
                    Bn = 'Header_base_d7',
                    hn = 'Header_title_dd',
                    wn = 'Header_accent_cd',
                    vn = (0, M.Pi)(({ onHeaderAnimationEnd: e }) => {
                        const u = Ku().model;
                        return a().createElement(
                            'div',
                            { className: Bn },
                            a().createElement(
                                'div',
                                { className: hn, onAnimationEnd: e },
                                a().createElement(he.z, {
                                    text: R.strings.ny.lootBoxPremiumMultiOpen.header.title(),
                                    binding: {
                                        typeBoxes: a().createElement(
                                            'div',
                                            { className: wn },
                                            (0, we.uF)(R.strings.ny.lootBoxPremiumMultiOpen.header.typeBoxes(), {
                                                typeName: R.strings.ny.lootBox.typeNames.of.$dyn(
                                                    u.root.get().boxCategory,
                                                ),
                                            }),
                                        ),
                                    },
                                }),
                            ),
                        );
                    });
                let bn;
                !(function (e) {
                    ((e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge'));
                })(bn || (bn = {}));
                const fn = () => {
                    const e = (0, n.useContext)(_);
                    return e.medium || e.large || e.extraLarge;
                };
                let yn, Rn, Sn, xn, Tn, Nn, On, In, Pn, kn, Ln, Mn, Gn;
                (!(function (e) {
                    ((e.Small = 'small'),
                        (e.Big = 'big'),
                        (e.S180x135 = 's180x135'),
                        (e.S232x174 = 's232x174'),
                        (e.S296x222 = 's296x222'),
                        (e.S360x270 = 's360x270'),
                        (e.S400x300 = 's400x300'),
                        (e.S600x450 = 's600x450'));
                })(yn || (yn = {})),
                    (function (e) {
                        ((e.None = 'noAnimation'),
                            (e.Default = 'defaultAnimation'),
                            (e.OnlyButton = 'onlyButtonAnimation'),
                            (e.OnlyText = 'onlyTextAnimation'));
                    })(Rn || (Rn = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Big = 'Big'));
                    })(Sn || (Sn = {})),
                    (function (e) {
                        ((e.GiftMachineToken = 'battleToken'),
                            (e.Tman = 'tmanToken'),
                            (e.AchievementReward = 'dossier_achievement'),
                            (e.Customizations = 'customizations'),
                            (e.VariadicDiscount = 'variadicDiscount'),
                            (e.AddcEconomicBonuses = 'addcEconomicBonuses'),
                            (e.Vehicles = 'vehicles'),
                            (e.MarketplaceToken = 'ny_marketplace'),
                            (e.RandomBooklet = 'randomNyBooklet'),
                            (e.RandomGuide = 'randomNyGuide'),
                            (e.RandomDecoration = 'randomNyToy'),
                            (e.RandomInstruction = 'randomNyInstruction'),
                            (e.RandomCrewInstruction = 'randomNyCrewInstruction'),
                            (e.EquipCoin = 'equipCoin'));
                    })(xn || (xn = {})),
                    (function (e) {
                        ((e.CelebrityAction = 'questTokenAnim'),
                            (e.Story = 'questTokenStory'),
                            (e.Decoration = 'questTokenDecoration'));
                    })(Tn || (Tn = {})),
                    (function (e) {
                        ((e.Items = 'items'),
                            (e.Equipment = 'equipment'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.Goodies = 'goodies'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Tokens = 'tokens'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.CrewBooks = 'crewBooks'),
                            (e.Customizations = 'customizations'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Tankman = 'tankman'),
                            (e.Tankwoman = 'tankwoman'),
                            (e.TankmenXp = 'tankmenXP'),
                            (e.TankmenXpFactor = 'tankmenXPFactor'),
                            (e.FreeXpFactor = 'freeXPFactor'),
                            (e.BattleToken = 'battleToken'),
                            (e.Entitlements = 'entitlements'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.FreeXp = 'freeXP'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattlePassSelectToken = 'battlePassSelectToken'),
                            (e.StyleProgressToken = 'styleProgressToken'),
                            (e.TmanToken = 'tmanToken'),
                            (e.NaturalCover = 'naturalCover'),
                            (e.BpCoin = 'bpcoin'),
                            (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.NewYearInvoice = 'newYearInvoice'),
                            (e.NewYearSlot = 'newYearSlot'),
                            (e.NewYearGuestD = 'ny_dog'),
                            (e.EquipCoin = 'equipCoin'),
                            (e.BonusX5 = 'battle_bonus_x5'),
                            (e.CrewBonusX3 = 'crew_bonus_x3'),
                            (e.Vehicles = 'vehicles'),
                            (e.EpicSelectToken = 'epicSelectToken'),
                            (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (e.DeluxeGift = 'deluxe_gift'),
                            (e.BattleBoosterGift = 'battleBooster_gift'),
                            (e.OptionalDevice = 'optionalDevice'),
                            (e.LootBox = 'lootBox'),
                            (e.BrCoin = 'brcoin'));
                    })(Nn || (Nn = {})),
                    (function (e) {
                        ((e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin'));
                    })(On || (On = {})),
                    (function (e) {
                        ((e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48'));
                    })(In || (In = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Pn || (Pn = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(kn || (kn = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Ln || (Ln = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(Mn || (Mn = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(Gn || (Gn = {})));
                const Un = [
                        Nn.Items,
                        Nn.Equipment,
                        Nn.Xp,
                        Nn.XpFactor,
                        Nn.Blueprints,
                        Nn.BlueprintsAny,
                        Nn.Goodies,
                        Nn.Berths,
                        Nn.Slots,
                        Nn.Tokens,
                        Nn.CrewSkins,
                        Nn.CrewBooks,
                        Nn.Customizations,
                        Nn.CreditsFactor,
                        Nn.TankmenXp,
                        Nn.TankmenXpFactor,
                        Nn.FreeXpFactor,
                        Nn.BattleToken,
                        Nn.Entitlements,
                        Nn.PremiumUniversal,
                        Nn.NaturalCover,
                        Nn.BpCoin,
                        Nn.BattlePassSelectToken,
                        Nn.BattlaPassFinalAchievement,
                        Nn.BattleBadge,
                        Nn.BonusX5,
                        Nn.CrewBonusX3,
                        Nn.NewYearInvoice,
                        Nn.EpicSelectToken,
                        Nn.Comp7TokenWeeklyReward,
                        Nn.DeluxeGift,
                        Nn.BattleBoosterGift,
                        Nn.OptionalDevice,
                    ],
                    Hn = [Nn.Gold, Nn.Credits, Nn.Crystal, Nn.FreeXp],
                    $n = [Nn.BattlePassPoints, Nn.EquipCoin],
                    zn = [Nn.PremiumPlus, Nn.Premium],
                    Wn = ['engravings', 'backgrounds'],
                    qn = ['engraving', 'background'],
                    Yn = (e, u = In.Small) => {
                        const t = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            i = e.item,
                            s = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case In.S600x450:
                                        return 'c_600x450';
                                    case In.S400x300:
                                        return 'c_400x300';
                                    case In.S296x222:
                                        return 'c_296x222';
                                    case In.S232x174:
                                        return 'c_232x174';
                                    case In.Big:
                                        return 'c_80x80';
                                    case In.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'entitlements':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = Wn[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(qn[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'premiumTank_rent':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles_rent`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                            case 'newYearSlot':
                                return `R.images.gui.maps.icons.newYear.rewards.${u}.slot`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Vn = [In.Small, In.Big],
                    jn = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case Pn.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case Pn.CURRENCY:
                            case Pn.NUMBER:
                                return a().createElement(Ee, { format: 'integral', value: Number(e) });
                            case Pn.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
                    Kn = ['ko', 'no'],
                    Xn = R.strings.settings.LANGUAGE_CODE(),
                    Qn = [
                        xn.Tman,
                        xn.GiftMachineToken,
                        xn.AddcEconomicBonuses,
                        xn.AchievementReward,
                        xn.Vehicles,
                        xn.EquipCoin,
                    ],
                    Zn = [Tn.CelebrityAction, Tn.Story, Tn.Decoration],
                    Jn = (Tn.CelebrityAction, Tn.Story, [xn.Vehicles, xn.AchievementReward]),
                    ea =
                        (xn.RandomBooklet,
                        xn.RandomGuide,
                        xn.RandomDecoration,
                        xn.RandomInstruction,
                        xn.RandomCrewInstruction,
                        Nn.Credits,
                        Nn.Gold,
                        Nn.FreeXp,
                        [Xe.Iron, Xe.Crystal, Xe.Emerald, Xe.Amber]),
                    ua = (e, u) => {
                        const t = 'R.images.gui.maps.icons';
                        return `${e === xn.AddcEconomicBonuses || e === Nn.EquipCoin ? `${t}.newYear.rewards` : e === xn.AchievementReward ? `${t}.achievement` : e === xn.Vehicles ? 'R.images.gui.maps.shop.vehicles' : e === Nn.CrewBooks ? 'R.images.gui.maps.icons.crewBooks.books' : `${t}.quests.bonuses`}.${(() => {
                            if (e === Nn.EquipCoin) return u;
                            switch (u) {
                                case yn.Small:
                                case yn.Big:
                                    return 'big';
                                default:
                                    return ((t = e), Jn.includes(t) ? u.replace('s', 'c_') : u);
                            }
                            var t;
                        })()}`;
                    },
                    ta = [yn.S360x270, yn.S400x300, yn.S600x450],
                    na = (e, u, t) => {
                        const n = e.name,
                            a = ta.includes(u) || ((e) => Qn.includes(e))(n);
                        if (a) {
                            const a = ua(n, u),
                                r = (({ name: e, icon: u, bigIcon: t, userName: n }) => {
                                    switch (e) {
                                        case xn.Tman:
                                            return t;
                                        case xn.Customizations:
                                            return u;
                                        case xn.Vehicles:
                                            return (0, we.BN)(n);
                                        default:
                                            return u || e;
                                    }
                                })(e);
                            '' === r && console.warn('empty icon');
                            return `${a}.${r}${t ? '_pixelated' : ''}`;
                        }
                        return Yn(e, u.toString());
                    },
                    aa = (e) => {
                        switch (e) {
                            case xn.Tman:
                            case xn.GiftMachineToken:
                            case xn.AddcEconomicBonuses:
                            case xn.RandomBooklet:
                            case xn.RandomGuide:
                            case xn.RandomDecoration:
                            case xn.RandomInstruction:
                            case xn.RandomCrewInstruction:
                                return Pn.MULTI;
                            default:
                                return (
                                    (u = e),
                                    Un.includes(u)
                                        ? Pn.MULTI
                                        : Hn.includes(u)
                                          ? Pn.CURRENCY
                                          : $n.includes(u)
                                            ? Pn.NUMBER
                                            : zn.includes(u)
                                              ? Pn.PREMIUM_PLUS
                                              : Pn.STRING
                                );
                        }
                        var u;
                    },
                    ra = () => {},
                    ia = (e, u, t = !0) => {
                        const a = (0, n.useState)(e[u]),
                            r = a[0],
                            i = a[1],
                            s = (0, n.useRef)(ra),
                            o = (0, n.useCallback)(() => {
                                r.stop ||
                                    (s.current(),
                                    (s.current = ((e, u) => {
                                        let t;
                                        const n = setTimeout(() => {
                                            t = e();
                                        }, u);
                                        return () => {
                                            ('function' == typeof t && t(), clearTimeout(n));
                                        };
                                    })(() => {
                                        i(e[null == r ? void 0 : r.nextState]);
                                    }, r.timeout)));
                            }, [r, e]);
                        return (
                            (0, n.useEffect)(() => (t && o(), () => s.current()), [t, o]),
                            {
                                step: r,
                                setStep: (0, n.useCallback)(
                                    (u) => {
                                        i(e[u]);
                                    },
                                    [e],
                                ),
                                next: o,
                            }
                        );
                    },
                    sa = {
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
                    oa = ['children'],
                    la = ['children'];
                function ca(e, u) {
                    if (null == e) return {};
                    var t = {};
                    for (var n in e)
                        if ({}.hasOwnProperty.call(e, n)) {
                            if (u.indexOf(n) >= 0) continue;
                            t[n] = e[n];
                        }
                    return t;
                }
                function da() {
                    return (
                        (da = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        da.apply(null, arguments)
                    );
                }
                const Ea = {
                        idle: { state: 'idle', nextState: 'start', timeout: 400 },
                        start: { state: 'start', nextState: 'bump', timeout: 960 },
                        bump: { state: 'bump', nextState: 'end', timeout: 33 },
                        end: { state: 'end', stop: !0 },
                    },
                    ma = { width: 250, height: 250 },
                    _a = () => {},
                    Aa = (e) =>
                        `R.images.gui.maps.icons.sequence.convert_twirly.twirly_convertation_${e.toString().padStart(5, '0')}`,
                    Fa = ({
                        children: [e, u],
                        className: t,
                        classNames: r = {},
                        onAnimate: i = _a,
                        animationSettings: s = Ea,
                        getSrcByFrameTwirly: o = Aa,
                        size: l = ma,
                        drawSize: c = ma,
                        isConvertationStart: d = !0,
                        initAnimationState: E = 'idle',
                    }) => {
                        const m = ia(s, E, d).step.state;
                        return (
                            (0, n.useEffect)(() => {
                                i(m);
                            }, [m, i]),
                            a().createElement(
                                'div',
                                {
                                    className: p()(sa.base, sa[`base__${m}`], t),
                                    style: {
                                        width: 'number' == typeof l.width ? `${l.width}rem` : l.width,
                                        height: 'number' == typeof l.height ? `${l.height}rem` : l.height,
                                    },
                                },
                                a().createElement(
                                    'div',
                                    { className: p()(sa.bumpStars, r.bumpStars) },
                                    a().createElement('div', { className: p()(sa.star, sa.star__one, r.star) }),
                                    a().createElement('div', { className: p()(sa.star, sa.star__second, r.star) }),
                                    a().createElement('div', { className: p()(sa.star, sa.star__third, r.star) }),
                                ),
                                a().createElement('div', { className: p()(sa.bump, r.bump) }),
                                a().createElement('div', { className: p()(sa.bumpRays, r.bumpRays) }),
                                a().createElement(
                                    'div',
                                    { className: p()(sa.reward, r.reward) },
                                    ('idle' === m || 'start' === m) &&
                                        a().createElement('div', { className: p()(sa.rewardFrom, r.rewardFrom) }, e),
                                    ('end' === m || 'bump' === m) &&
                                        a().createElement('div', { className: p()(sa.rewardTo, r.rewardTo) }, u),
                                ),
                                ('start' === m || 'bump' === m) &&
                                    a().createElement(
                                        it,
                                        da({}, c, {
                                            className: p()(sa.twirlyCanvas, r.twirlyCanvas),
                                            frameCount: 60,
                                            frameTime: 16,
                                            getSrcByFrame: o,
                                        }),
                                    ),
                                a().createElement('div', { className: p()(sa.bumpParticles, r.bumpParticles) }),
                            )
                        );
                    },
                    Da =
                        ((0, n.memo)(Fa, (e, u) => {
                            e.children;
                            const t = ca(e, oa),
                                n = (u.children, ca(u, la));
                            return (
                                (a = t),
                                (r = n),
                                Object.keys(a).length === Object.keys(r).length &&
                                    Object.keys(a).every(
                                        (e) => Object.prototype.hasOwnProperty.call(r, e) && a[e] === r[e],
                                    )
                            );
                            var a, r;
                        }),
                        ['children']);
                function Ca() {
                    return (
                        (Ca = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ca.apply(null, arguments)
                    );
                }
                const ga = (e) => {
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
                        })(e, Da);
                    return a().createElement(
                        ye,
                        Ca(
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
                function pa() {
                    return (
                        (pa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        pa.apply(null, arguments)
                    );
                }
                const Ba = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(Te, u, n);
                        const r = u.contentId;
                        return r ? a().createElement(ye, pa({}, u, { contentId: r }), n) : a().createElement(ga, u, n);
                    },
                    ha = {
                        base: 'CommonReward_base_c0',
                        base__small: 'CommonReward_base__small_cb',
                        base__big: 'CommonReward_base__big_4c',
                        base__s180x135: 'CommonReward_base__s180x135_11',
                        base__s232x174: 'CommonReward_base__s232x174_60',
                        base__s296x222: 'CommonReward_base__s296x222_06',
                        base__s360x270: 'CommonReward_base__s360x270_9a',
                        base__s400x300: 'CommonReward_base__s400x300_02',
                        base__s600x450: 'CommonReward_base__s600x450_8c',
                        base__flex: 'CommonReward_base__flex_0e',
                        bonusIcon: 'CommonReward_bonusIcon_a5',
                        compensationIcon: 'CommonReward_compensationIcon_d9',
                        info: 'CommonReward_info_37',
                        info__hidden: 'CommonReward_info__hidden_1b',
                        info__credits: 'CommonReward_info__credits_4b',
                        info__gold: 'CommonReward_info__gold_73',
                        info__crystal: 'CommonReward_info__crystal_f8',
                        info__premiumTank: 'CommonReward_info__premiumTank_a6',
                        info__style_3d: 'CommonReward_info__style_3d_7c',
                        info__multi: 'CommonReward_info__multi_64',
                    },
                    wa = R.strings.settings.LANGUAGE_CODE(),
                    va = ({
                        name: e,
                        image: u,
                        value: t,
                        valueType: n,
                        isCompensation: r,
                        tooltipId: i,
                        tooltipContentId: s,
                        tooltipDecoratorId: o,
                        size: l = yn.Big,
                        isLabelHidden: c = !1,
                        isFlexable: d = !1,
                        classNames: E,
                        tooltipArgs: m,
                    }) => {
                        const _ = ((e, u, t) => {
                                const n = u && { contentId: u };
                                return Object.assign(
                                    {
                                        args: e,
                                        isEnabled: Boolean((e && e.tooltipId) || u),
                                        ignoreMouseClick: !0,
                                        ignoreShowDelay: !u,
                                    },
                                    n,
                                    t,
                                );
                            })(Object.assign({ tooltipId: i, value: t }, m), Number(s), {
                                decoratorId: o,
                                ignoreMouseClick: !1,
                            }),
                            A = jn(t, n);
                        return a().createElement(
                            Ba,
                            { tooltipArgs: _, className: p()(ha.base, ha[`base__${l}`], d && ha.base__flex) },
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement('div', {
                                    className: ha.bonusIcon,
                                    style: { backgroundImage: `url(${u})` },
                                }),
                                A &&
                                    a().createElement(
                                        'div',
                                        {
                                            lang: wa,
                                            className: p()(
                                                ha.info,
                                                c && ha.info__hidden,
                                                ha[`info__${e}`],
                                                ha[`info__${n}`],
                                                null == E ? void 0 : E.info,
                                            ),
                                        },
                                        A,
                                    ),
                                r && a().createElement('div', { className: ha.compensationIcon }),
                            ),
                        );
                    },
                    ba = { width: 180, height: 180 },
                    fa = Object.assign({}, Ea, { idle: Object.assign({}, Ea.idle, { timeout: 0 }) }),
                    ya = (e, u) => ('vehicles' === e.name ? Yn(e, u.toString()) : na(e, u)),
                    Ra = ({
                        className: e,
                        bonusModel: u,
                        size: t,
                        playAnimation: r = !0,
                        isShowCompensation: i = !0,
                        animationSize: s = ba,
                        animationSettings: o = fa,
                    }) => {
                        const l = ((e, u = []) => {
                                const t = (0, n.useRef)(),
                                    a = (0, n.useCallback)((...u) => {
                                        (t.current && t.current(), (t.current = e(...u)));
                                    }, u);
                                return (
                                    (0, n.useEffect)(
                                        () => () => {
                                            t.current && t.current();
                                        },
                                        [a],
                                    ),
                                    a
                                );
                            })((e) => {
                                'start' === e && X('gui_gift_system_newyear_reward_transform');
                            }, []),
                            c = u.compensatedItem,
                            d = i ? 'idle' : 'end';
                        return a().createElement(
                            Fa,
                            {
                                className: e,
                                animationSettings: o,
                                onAnimate: l,
                                isConvertationStart: r,
                                initAnimationState: d,
                                size: s,
                            },
                            [
                                a().createElement(va, {
                                    key: 1,
                                    name: c.name,
                                    image: ya(c, t),
                                    value: c.value,
                                    valueType: aa(c.name),
                                    size: t,
                                }),
                                a().createElement(va, {
                                    key: 2,
                                    name: u.name,
                                    image: na(u, t),
                                    value: u.value,
                                    valueType: aa(u.name),
                                    isCompensation: u.isCompensation,
                                    tooltipId: u.tooltipId,
                                    tooltipContentId: u.tooltipContentId,
                                    tooltipDecoratorId:
                                        R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    size: t,
                                }),
                            ],
                        );
                    },
                    Sa = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    xa = {
                        base: 'PopoverDecorator_base_ed',
                        decorator: 'PopoverDecorator_decorator_d3',
                        arrow: 'PopoverDecorator_arrow_8a',
                        arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                        arrow__top: 'PopoverDecorator_arrow__top_6e',
                        arrow__left: 'PopoverDecorator_arrow__left_7a',
                        arrow__right: 'PopoverDecorator_arrow__right_b6',
                        closeBtn: 'PopoverDecorator_closeBtn_32',
                        content: 'PopoverDecorator_content_f0',
                    };
                function Ta() {
                    const e = (0, n.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useEffect)(() => u, []),
                        (0, n.useMemo)(
                            () => ({
                                run: (u) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                (u(), (e.current = 0));
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
                var Na;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(Na || (Na = {}));
                const Oa = ['__left', '__right', '__top', '__bottom'],
                    Ia =
                        ((0, n.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: r = {} }, s) => {
                                const o = (0, n.useRef)(null),
                                    l = (0, n.useRef)(null),
                                    c = (0, n.useRef)(null),
                                    d = (0, n.useState)(window.decorator && window.decorator.directionType),
                                    E = d[0],
                                    m = d[1],
                                    _ = (0, n.useCallback)(() => {
                                        (Q.playClick(), i.O.view.sendEvent.close());
                                    }, []),
                                    A = (0, n.useCallback)(() => {
                                        Q.playHighlight();
                                    }, []),
                                    F = p()(xa.arrow, xa[`arrow${Oa[E]}`]);
                                Sa(
                                    () => (
                                        i.O.client.events.mouse.enableOutside(),
                                        i.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : i.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const D = (0, n.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === o.current || u === c.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const n = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = i.O.client.getMouseGlobalPosition(),
                                                    u = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        e.x < n.boundX ||
                                                        e.x > n.boundX + n.boundWidth ||
                                                        e.y > n.boundY + n.boundHeight ||
                                                        e.y < n.boundY;
                                                if (u && !t) return;
                                            }
                                            t ? t() : i.O.view.sendEvent.close('popover');
                                        },
                                        [o, c, t],
                                    ),
                                    C = Ta(),
                                    g = (0, n.useCallback)(() => {
                                        const e = l.current;
                                        if (e)
                                            return (
                                                i.O.view.freezeTextureBeforeResize(),
                                                C.run(() => {
                                                    const u = e.scrollWidth,
                                                        t = e.scrollHeight;
                                                    (i.O.view.resize(u, t), m(window.decorator.directionType));
                                                })
                                            );
                                    }, [C]);
                                return (
                                    (0, n.useImperativeHandle)(s, () => ({ updateSize: g })),
                                    Sa(() => {
                                        i.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, n.useEffect)(() => {
                                        document.addEventListener('mousedown', D, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((t, n) => {
                                                    e.then((e) => !u && t(e)).catch((e) => !u && n(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, re.Eu)());
                                        return (
                                            !u && e.promise.then(() => g()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', D));
                                            }
                                        );
                                    }, [g, D, u]),
                                    a().createElement(
                                        'div',
                                        { className: xa.base, ref: l },
                                        a().createElement(
                                            'div',
                                            { className: xa.decorator },
                                            a().createElement(
                                                'div',
                                                { className: xa.content, ref: o },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    a().createElement(
                                                        Te,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        a().createElement('div', {
                                                            className: xa.closeBtn,
                                                            onClick: _,
                                                            onMouseEnter: A,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            a().createElement('div', { className: F, style: r.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function Pa() {
                    return (
                        (Pa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Pa.apply(null, arguments)
                    );
                }
                const ka = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            r = e.direction,
                            i = void 0 === r ? Na.Top : r,
                            s = e.targetId,
                            o = e.args,
                            l = e.onClick,
                            c = e.children,
                            d = e.isEnabled,
                            E = void 0 === d || d,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Ia);
                        const _ = (0, n.useRef)(null),
                            A = (0, n.useCallback)(() => {
                                if ((0, re.wU)()) return (0, re.SW)();
                                _.current && (0, re.P3)(u, i, _.current, t, s, o);
                            }, [u, i, o, t, s]);
                        return a().createElement(
                            'div',
                            Pa(
                                {
                                    ref: _,
                                    onMouseDown:
                                        ((F = c.props.onClick),
                                        (e) => {
                                            E && (A(), l && l(e), F && F(e));
                                        }),
                                },
                                m,
                            ),
                            c,
                        );
                        var F;
                    },
                    La = ['children'];
                function Ma() {
                    return (
                        (Ma = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ma.apply(null, arguments)
                    );
                }
                const Ga = (e) => {
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
                            })(e, La);
                        return a().createElement(
                            ka,
                            Ma(
                                {
                                    decoratorId:
                                        R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                    contentId:
                                        R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent(
                                            'resId',
                                        ),
                                },
                                t,
                            ),
                            u,
                        );
                    },
                    Ua = {
                        base: 'DiscountReward_base_86',
                        base__progressionReward: 'DiscountReward_base__progressionReward_49',
                        base__currentProgressionCompleted: 'DiscountReward_base__currentProgressionCompleted_04',
                        base__applied: 'DiscountReward_base__applied_fd',
                        base__flex: 'DiscountReward_base__flex_0d',
                        discountReward: 'DiscountReward_discountReward_5a',
                        base__small: 'DiscountReward_base__small_74',
                        base__big: 'DiscountReward_base__big_02',
                        base__s180x135: 'DiscountReward_base__s180x135_18',
                        base__s232x174: 'DiscountReward_base__s232x174_39',
                        base__s296x222: 'DiscountReward_base__s296x222_e9',
                        icon: 'DiscountReward_icon_ba',
                        vehicleLevel: 'DiscountReward_vehicleLevel_0b',
                        discountAmount: 'DiscountReward_discountAmount_cc',
                    },
                    Ha = (0, n.memo)(
                        ({
                            bonus: e,
                            options: u,
                            size: t = yn.Small,
                            className: r,
                            isCurrentProgressionCompleted: i,
                            isProgressionReward: s,
                            isFlexable: o,
                        }) => {
                            const l = e.level,
                                c = e.discount,
                                d = e.selectedVehicle,
                                E = e.variadicID,
                                m = u || {},
                                _ = m.disabled,
                                A = m.isPopoverOpened,
                                F = `${ua(xn.VariadicDiscount, t)}.${xn.VariadicDiscount}`,
                                D = Kn.includes(Xn) ? l : R.strings.roman_numerals.$dyn(`n_${l}`),
                                C = (0, n.useState)(!1),
                                g = C[0],
                                B = C[1],
                                h = (0, n.useState)(!1),
                                w = h[0],
                                v = h[1],
                                b = !d && !w,
                                f = { variadicID: E, discount: c, isCurrentProgressionCompleted: i },
                                y = { popoverId: 'NYSelectVehicleForDiscountPopover', variadicID: E },
                                S = {
                                    backgroundImage: `url('${d ? R.images.gui.maps.icons.vehicle.$dyn(((x = d), x.replace(/:|-/g, '_'))) : F}')`,
                                };
                            var x;
                            const T = (0, n.useCallback)(() => {
                                    _ || v(!0);
                                }, [_]),
                                N = (0, n.useCallback)(() => {
                                    b && i && !A && (X(R.sounds.hangar_newyear_slot_over()), B(!0));
                                }, [b, i, A]),
                                O = (0, n.useCallback)(() => {
                                    g && (X(R.sounds.hangar_newyear_slot_over_off()), B(!1));
                                }, [g]);
                            var I, P;
                            ((0, n.useEffect)(() => {
                                !b && g && (X(R.sounds.hangar_newyear_slot_over_off()), B(!1));
                            }, [b, g]),
                                (I = () => {
                                    !A && w && v(!1);
                                }),
                                (P = [A, w]),
                                (0, n.useEffect)(() => {
                                    let e = null;
                                    return (
                                        (e = requestAnimationFrame(() => {
                                            e = requestAnimationFrame(() => {
                                                ((e = null), I());
                                            });
                                        })),
                                        () => {
                                            null !== e && cancelAnimationFrame(e);
                                        }
                                    );
                                }, P));
                            const k = p()(
                                    Ua.base,
                                    Ua[`base__${t}`],
                                    _ && Ua.base__disabled,
                                    d && Ua.base__applied,
                                    i && Ua.base__currentProgressionCompleted,
                                    s && Ua.base__progressionReward,
                                    o && Ua.base__flex,
                                    r,
                                ),
                                L = a().createElement(
                                    ye,
                                    {
                                        contentId: R.views.lobby.new_year.tooltips.NyDiscountRewardTooltip('resId'),
                                        args: f,
                                    },
                                    a().createElement(
                                        'div',
                                        { className: k, onMouseEnter: N, onMouseLeave: O, onClick: T },
                                        a().createElement(
                                            'div',
                                            { className: Ua.discountReward },
                                            a().createElement('div', { className: Ua.icon, style: S }),
                                            a().createElement('div', { className: Ua.vehicleLevel }, D),
                                            a().createElement(
                                                'div',
                                                { className: Ua.discountAmount },
                                                s
                                                    ? R.strings.common.common.percent()
                                                    : (0, we.uF)(R.strings.ny.percentageValue.withMinus(), {
                                                          value: c,
                                                      }),
                                            ),
                                        ),
                                    ),
                                );
                            return _ || d || !i ? L : a().createElement(Ga, { args: y }, L);
                        },
                    ),
                    $a = 'ActivityReward_base_50',
                    za = 'ActivityReward_base__animated_b8',
                    Wa = 'ActivityReward_base__completed_02',
                    qa = 'ActivityReward_base__flex_24',
                    Ya = 'ActivityReward_inner_39',
                    Va = 'ActivityReward_icon_21',
                    ja = 'ActivityReward_iconPlay_02',
                    Ka = R.strings.ny.activityReward.tooltip,
                    Xa = ({ name: e, icon: u, isClickable: t, isNew: n, isFlexable: r }) => {
                        const i = ((e) => {
                            switch (e) {
                                case Tn.CelebrityAction:
                                    return 'action';
                                case Tn.Story:
                                    return 'story';
                                case Tn.Decoration:
                                    return 'decoration';
                                default:
                                    return e;
                            }
                        })(e);
                        return a().createElement(
                            Te,
                            { header: Ka.header.$dyn(i), body: Ka.body.$dyn(i) },
                            a().createElement(
                                'div',
                                { className: p()($a, t && Wa, t && n && za, r && qa) },
                                a().createElement(
                                    'div',
                                    { className: Ya },
                                    a().createElement('div', {
                                        className: Va,
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.newYear.rewards.activity.$dyn(u)})`,
                                        },
                                    }),
                                    e === Tn.CelebrityAction && a().createElement('div', { className: ja }),
                                ),
                            ),
                        );
                    },
                    Qa = { base: 'AttachmentReward_base_a0', glow: 'AttachmentReward_glow_5c' },
                    Za = (e, u) =>
                        R.images.gui.maps.vehicles.attachments.$dyn(u).$dyn(e) ||
                        `R.images.gui.maps.icons.quests.bonuses.${u}.attachment`,
                    Ja = ({
                        name: e,
                        iconName: u,
                        tooltipId: t,
                        rarity: n,
                        value: r,
                        tooltipContentId: i,
                        size: s = yn.Small,
                        isFlexable: o,
                        withGlowAndSign: l = !0,
                        classNames: c,
                    }) =>
                        a().createElement(
                            'div',
                            { className: p()(Qa.base, Qa[`base__${s}`]) },
                            a().createElement('div', {
                                className: Qa.glow,
                                style: l
                                    ? {
                                          backgroundImage: `url(R.images.gui.maps.icons.customization.rarity.glowWithSign.${s}.${n})`,
                                      }
                                    : {},
                            }),
                            a().createElement(va, {
                                name: e,
                                image: Za(u, s),
                                valueType: aa(e),
                                value: r,
                                tooltipId: t,
                                tooltipContentId: i,
                                size: s,
                                isFlexable: o,
                                classNames: c,
                            }),
                        ),
                    er = {
                        base: 'ItemReward_base_34',
                        overlay: 'ItemReward_overlay_47',
                        base__small: 'ItemReward_base__small_38',
                        base__big: 'ItemReward_base__big_a6',
                        base__s180x135: 'ItemReward_base__s180x135_ff',
                        base__s232x174: 'ItemReward_base__s232x174_61',
                        base__s296x222: 'ItemReward_base__s296x222_64',
                        base__s400x300: 'ItemReward_base__s400x300_c4',
                        base__s600x450: 'ItemReward_base__s600x450_fe',
                        highlight: 'ItemReward_highlight_21',
                    },
                    ur = ({
                        bonusModel: e,
                        size: u,
                        isLabelHidden: t,
                        isFlexable: n,
                        classNames: r,
                        tooltipArgs: i,
                    }) => {
                        const s = ((e, u) => {
                                if (void 0 === u || !Vn.includes(e)) return null;
                                switch (u) {
                                    case kn.BATTLE_BOOSTER:
                                    case kn.BATTLE_BOOSTER_REPLACE:
                                        return Ln.BATTLE_BOOSTER;
                                }
                            })(u, e.overlayType),
                            o = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case kn.BATTLE_BOOSTER:
                                        return Mn.BATTLE_BOOSTER;
                                    case kn.BATTLE_BOOSTER_REPLACE:
                                        return Mn.BATTLE_BOOSTER_REPLACE;
                                    case kn.BUILT_IN_EQUIPMENT:
                                        return Mn.BUILT_IN_EQUIPMENT;
                                    case kn.EQUIPMENT_PLUS:
                                        return Mn.EQUIPMENT_PLUS;
                                    case kn.EQUIPMENT_TROPHY_BASIC:
                                        return Mn.EQUIPMENT_TROPHY_BASIC;
                                    case kn.EQUIPMENT_TROPHY_UPGRADED:
                                        return Mn.EQUIPMENT_TROPHY_UPGRADED;
                                    case kn.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Mn.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case kn.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Mn.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case kn.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Mn.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case kn.PROGRESSION_STYLE_UPGRADED_1:
                                        return Mn.PROGRESSION_STYLE_UPGRADED_1;
                                    case kn.PROGRESSION_STYLE_UPGRADED_2:
                                        return Mn.PROGRESSION_STYLE_UPGRADED_2;
                                    case kn.PROGRESSION_STYLE_UPGRADED_3:
                                        return Mn.PROGRESSION_STYLE_UPGRADED_3;
                                    case kn.PROGRESSION_STYLE_UPGRADED_4:
                                        return Mn.PROGRESSION_STYLE_UPGRADED_4;
                                    case kn.PROGRESSION_STYLE_UPGRADED_5:
                                        return Mn.PROGRESSION_STYLE_UPGRADED_5;
                                    case kn.PROGRESSION_STYLE_UPGRADED_6:
                                        return Mn.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(e.overlayType);
                        return a().createElement(
                            'div',
                            { className: p()(er.base, er[`base__${u}`]) },
                            s &&
                                a().createElement('div', {
                                    className: er.highlight,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${s}_highlight)`,
                                    },
                                }),
                            a().createElement(va, {
                                name: e.name,
                                image: na(e, u),
                                value: e.value,
                                valueType: aa(e.name),
                                isCompensation: e.isCompensation,
                                tooltipId: e.tooltipId,
                                tooltipContentId: e.tooltipContentId,
                                tooltipArgs: i,
                                size: u,
                                isLabelHidden: t,
                                isFlexable: n,
                                classNames: r,
                            }),
                            o &&
                                a().createElement('div', {
                                    className: er.overlay,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${o}_overlay)`,
                                    },
                                }),
                        );
                    },
                    tr = {
                        base: 'ModernizedEquipmentReward_base_d8',
                        equipmentGlow: 'ModernizedEquipmentReward_equipmentGlow_05',
                        base__small: 'ModernizedEquipmentReward_base__small_36',
                        base__big: 'ModernizedEquipmentReward_base__big_09',
                        base__s180x135: 'ModernizedEquipmentReward_base__s180x135_ba',
                        base__s232x174: 'ModernizedEquipmentReward_base__s232x174_02',
                        base__s296x222: 'ModernizedEquipmentReward_base__s296x222_5f',
                        base__flex: 'ModernizedEquipmentReward_base__flex_8a',
                    },
                    nr = ({
                        name: e,
                        tooltipId: u,
                        image: t,
                        overlayType: n,
                        value: r,
                        tooltipContentId: i,
                        size: s = yn.Big,
                        isFlexable: o,
                        classNames: l,
                    }) =>
                        a().createElement(
                            'div',
                            { className: p()(tr.base, tr[`base__${s}`], o && tr.base__flex) },
                            a().createElement('div', {
                                className: tr.equipmentGlow,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${s}.${n}_overlay)`,
                                },
                            }),
                            a().createElement(va, {
                                name: e,
                                image: t,
                                valueType: aa(e),
                                value: r,
                                tooltipId: u,
                                tooltipContentId: i,
                                size: s,
                                classNames: l,
                                isFlexable: o,
                            }),
                        ),
                    ar = {
                        base: 'PremiumReward_base_16',
                        base__small: 'PremiumReward_base__small_21',
                        base__big: 'PremiumReward_base__big_08',
                        base__s180x135: 'PremiumReward_base__s180x135_68',
                        base__s232x174: 'PremiumReward_base__s232x174_8f',
                        base__s296x222: 'PremiumReward_base__s296x222_4b',
                        base__s360x270: 'PremiumReward_base__s360x270_75',
                        base__s400x300: 'PremiumReward_base__s400x300_92',
                        base__s600x450: 'PremiumReward_base__s600x450_d2',
                        base__flex: 'PremiumReward_base__flex_e2',
                        icon: 'PremiumReward_icon_e2',
                        info: 'PremiumReward_info_13',
                    },
                    rr = R.strings.ny.lootBoxAutoOpen.reward.premiumPlus,
                    ir = rr.label(),
                    sr = rr.tooltip.header(),
                    or = rr.tooltip.body(),
                    lr = ({ value: e, size: u = yn.Big, isFlexable: t = !1, classNames: n }) => {
                        const r = (0, we.uF)(ir, { quantity: e }),
                            i = (0, we.uF)(sr, { quantity: e });
                        return a().createElement(
                            Te,
                            { header: i, body: or },
                            a().createElement(
                                'div',
                                {
                                    className: p()(ar.base, ar[`base__${u}`], t && ar.base__flex),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                a().createElement('div', {
                                    className: ar.icon,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_1)`,
                                    },
                                }),
                                Number(e) > 1 &&
                                    a().createElement(
                                        'div',
                                        { className: p()(ar.info, null == n ? void 0 : n.info) },
                                        r,
                                    ),
                            ),
                        );
                    },
                    cr = {
                        base: 'ToyReward_base_1d',
                        base__large: 'ToyReward_base__large_c7',
                        base__flex: 'ToyReward_base__flex_3e',
                        label: 'ToyReward_label_f7',
                        image: 'ToyReward_image_46',
                        counter: 'ToyReward_counter_85',
                    };
                let dr;
                !(function (e) {
                    ((e.Medium = 'medium'), (e.Large = 'large'));
                })(dr || (dr = {}));
                const Er = R.views.lobby.new_year.tooltips,
                    mr = ({
                        image: e,
                        bigImage: u,
                        value: t,
                        size: n = dr.Medium,
                        toyID: r,
                        isFlexable: i,
                        classNames: s,
                    }) => {
                        const o = jn(t, Pn.MULTI);
                        return a().createElement(
                            ye,
                            { ignoreShowDelay: !0, contentId: Er.NyDecorationTooltip('resId'), args: { toyID: r } },
                            a().createElement(
                                'div',
                                {
                                    className: p()(cr.base, i && cr.base__flex, cr[`base__${n}`]),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                a().createElement(
                                    'div',
                                    {
                                        className: cr.image,
                                        style: { backgroundImage: `url(${n === dr.Medium ? e : u})` },
                                    },
                                    o &&
                                        a().createElement(
                                            'div',
                                            { className: p()(cr.counter, null == s ? void 0 : s.counter) },
                                            o,
                                        ),
                                ),
                            ),
                        );
                    },
                    _r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ar = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Fr = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Dr = (e) =>
                        Fr
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = Ar.length - 1; t >= 0; t--)
                                      for (; e >= Ar[t];) ((u += _r[t]), (e -= Ar[t]));
                                  return u;
                              })(e),
                    Cr = {
                        base: 'VehicleReward_base_a9',
                        vehicleInfo: 'VehicleReward_vehicleInfo_3e',
                        base__s360x270: 'VehicleReward_base__s360x270_be',
                        base__s400x300: 'VehicleReward_base__s400x300_67',
                        base__s600x450: 'VehicleReward_base__s600x450_f0',
                        base__withRent: 'VehicleReward_base__withRent_a4',
                        base__dark: 'VehicleReward_base__dark_af',
                        typeContainer: 'VehicleReward_typeContainer_19',
                        type: 'VehicleReward_type_90',
                        rent: 'VehicleReward_rent_6b',
                        rent__hidden: 'VehicleReward_rent__hidden_34',
                        clockIcon: 'VehicleReward_clockIcon_46',
                    },
                    gr = ['vehicleInfo', 'rentDays', 'rentBattles', 'size', 'theme', 'classNames'];
                function pr() {
                    return (
                        (pr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        pr.apply(null, arguments)
                    );
                }
                const Br = R.strings.ny.giftMachine,
                    hr = R.images.gui.maps.icons.newYear.tank_types;
                let wr;
                !(function (e) {
                    ((e.Light = 'light'), (e.Dark = 'dark'));
                })(wr || (wr = {}));
                const vr = (e) => {
                    let u = e.vehicleInfo,
                        t = e.rentDays,
                        n = void 0 === t ? 0 : t,
                        r = e.rentBattles,
                        i = void 0 === r ? 0 : r,
                        s = e.size,
                        o = void 0 === s ? yn.S180x135 : s,
                        l = e.theme,
                        c = void 0 === l ? wr.Light : l,
                        d = e.classNames,
                        E = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, gr);
                    const m = u.vehicleLvl,
                        _ = u.vehicleName,
                        A = u.vehicleType,
                        F = (c === wr.Light ? hr.white_elite : hr.blue_elite).$dyn(`${(0, we.BN)(A)}`),
                        D = n > 0 || i > 0;
                    return a().createElement(
                        'div',
                        {
                            className: p()(Cr.base, Cr[`base__${o}`], Cr[`base__${c}`], D && Cr.base__withRent),
                            lang: R.strings.settings.LANGUAGE_CODE(),
                        },
                        a().createElement(va, pr({ size: o, isLabelHidden: !0 }, E)),
                        n > 0 &&
                            a().createElement(he.z, {
                                text: Br.rentDays(),
                                binding: { clockIcon: a().createElement('span', { className: Cr.clockIcon }), days: n },
                                classMix: p()(Cr.rent, null == d ? void 0 : d.rent),
                            }),
                        i > 0 &&
                            a().createElement(he.z, {
                                text: Br.rentBattles(),
                                binding: {
                                    clockIcon: a().createElement('span', { className: Cr.clockIcon }),
                                    battles: i,
                                },
                                classMix: p()(Cr.rent, null == d ? void 0 : d.rent),
                            }),
                        a().createElement(
                            'div',
                            { className: p()(Cr.vehicleInfo, null == d ? void 0 : d.info) },
                            Dr(m),
                            a().createElement(
                                'div',
                                { className: Cr.typeContainer },
                                a().createElement('div', {
                                    className: Cr.type,
                                    style: { backgroundImage: `url('${F}')` },
                                }),
                            ),
                            _,
                        ),
                    );
                };
                function br() {
                    return (
                        (br = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        br.apply(null, arguments)
                    );
                }
                const fr = ({
                        bonusModel: e,
                        options: u,
                        size: t = yn.Big,
                        toyRewardOptions: n = {},
                        isProgressionReward: r,
                        isCurrentProgressionCompleted: i,
                        compensationRewardOptions: s = {},
                        activityRewardOptions: o = {},
                        vehicleRewardOptions: l = {},
                        isLabelHidden: c,
                        isFlexable: d = !1,
                        isPixelatedImage: E,
                        level: m,
                        classNames: _,
                        tooltipArgs: A,
                    }) => {
                        return ((e) => 'item' in e && e.item && e.item.startsWith('modernized'))(e)
                            ? a().createElement(
                                  nr,
                                  br({}, e, { image: na(e, t, E), size: t, classNames: _, isFlexable: d }),
                              )
                            : 'ny25Toys' === e.name
                              ? a().createElement(
                                    mr,
                                    br(
                                        {
                                            image: e.icon,
                                            bigImage: e.bigIcon,
                                            toyID: e.toyID,
                                            value: e.value,
                                            isFlexable: d,
                                        },
                                        n,
                                    ),
                                )
                              : ((e) => 'variadicDiscount' === e.name)(e)
                                ? a().createElement(Ha, {
                                      rewardLevel: m,
                                      bonus: e,
                                      options: u,
                                      size: t,
                                      className: null == _ ? void 0 : _.discountReward,
                                      isProgressionReward: r,
                                      isCurrentProgressionCompleted: i,
                                      isFlexable: d,
                                  })
                                : ((e) => 'premium_plus' === e.name)(e)
                                  ? a().createElement(lr, br({}, e, { size: t, isFlexable: d, classNames: _ }))
                                  : e.isCompensation
                                    ? a().createElement(Ra, br({ bonusModel: e, size: t }, s))
                                    : ((F = e.name),
                                      Zn.includes(F)
                                          ? a().createElement(Xa, br({}, e, o, { isFlexable: d }))
                                          : ((e) => e === Nn.Vehicles)(e.name)
                                            ? a().createElement(vr, br({ image: na(e, t, E), size: t }, e, l))
                                            : ((e) => e === Nn.Items)(e.name)
                                              ? a().createElement(ur, {
                                                    bonusModel: e,
                                                    size: t,
                                                    classNames: _,
                                                    tooltipArgs: A,
                                                    isLabelHidden: c,
                                                    isFlexable: d,
                                                })
                                              : ((e) => 'icon' in e && 'attachment' === e.icon)(e)
                                                ? a().createElement(
                                                      Ja,
                                                      br({}, e, { size: t, classNames: _, isFlexable: d }),
                                                  )
                                                : a().createElement(va, {
                                                      name: e.name,
                                                      image: na(e, t, E),
                                                      value: e.value,
                                                      valueType: aa(e.name),
                                                      isCompensation: e.isCompensation,
                                                      tooltipId: e.tooltipId,
                                                      tooltipContentId: e.tooltipContentId,
                                                      tooltipArgs: A,
                                                      size: t,
                                                      isLabelHidden: c,
                                                      isFlexable: d,
                                                      classNames: _,
                                                  }));
                        var F;
                    },
                    yr = 'RewardItem_base_ca',
                    Rr = 'RewardItem_base__animated_a5',
                    Sr = 'RewardItem_compensation_40',
                    xr = ({
                        reward: e,
                        rewardSize: u,
                        itemIndex: t,
                        isShowCompensation: r,
                        onAnimationEnd: i,
                        hasAnimation: s,
                        isSpecialReward: o,
                        isPausedForSpecial: l,
                    }) => {
                        var c;
                        const d = (0, n.useState)(!1),
                            E = d[0],
                            m = d[1],
                            _ = (0, n.useRef)(!1),
                            A = null != (c = ce(l)) ? c : l;
                        ((0, n.useEffect)(() => {
                            s && o && m(!0);
                        }, [s, o]),
                            (0, n.useEffect)(() => {
                                o && !l && A && m(!1);
                            }, [l, o, A]));
                        const F = { '--reward-delay': `${100 * t}ms`, '--reward-duration': '100ms' };
                        return a().createElement(
                            'div',
                            {
                                className: p()(yr, s && Rr),
                                style: F,
                                onAnimationEnd: () => {
                                    s && !_.current && ((_.current = !0), i(e.index));
                                },
                            },
                            a().createElement(fr, {
                                bonusModel: e,
                                compensationRewardOptions: { playAnimation: r, className: Sr },
                                isLabelHidden: E,
                                size: u,
                                tooltipArgs: ((D = e.name), ea.includes(D) ? { type: e.name } : void 0),
                            }),
                        );
                        var D;
                    },
                    Tr = 'RewardsRow_base_54',
                    Nr = 'RewardsRow_label_06',
                    Or = 'RewardsRow_reward_33',
                    Ir = (0, M.Pi)(
                        ({
                            rowIndex: e,
                            isNewRewardRow: u,
                            onRowAnimationEnd: t,
                            isPausedForSpecial: r,
                            onSpecialDropped: i,
                        }) => {
                            var s, o;
                            const l = Ku().model.computes,
                                c = l.getRewardRow,
                                d = l.getSpecialIds,
                                E = null != (s = c(e)) ? s : [],
                                m = null != (o = d(e)) ? o : [],
                                _ = fn(),
                                A = f().mediaSize,
                                F = (0, n.useRef)(nt),
                                D = (0, n.useState)(!1),
                                C = D[0],
                                g = D[1];
                            (0, n.useEffect)(() => {
                                u && X(R.sounds.gui_random_reward_appear());
                            }, [u]);
                            const p = E.findIndex(({ value: e }) =>
                                    (function (e, u) {
                                        for (let t = 0; t < e.length; t++) if (qe(e, t) === u) return !0;
                                        return !1;
                                    })(m, e.index),
                                ),
                                B = (e) => {
                                    (p === e && i(e), e === E.length - 1 && (g(!0), t()));
                                };
                            return (
                                (0, n.useEffect)(() => {
                                    F.current();
                                }, []),
                                a().createElement(
                                    'div',
                                    { className: Tr },
                                    a().createElement(
                                        'div',
                                        { className: Nr },
                                        A >= w.Medium
                                            ? (0, we.uF)(R.strings.ny.lootBoxPremiumMultiOpen.rowLabel(), {
                                                  number: e + 1,
                                              })
                                            : e + 1,
                                    ),
                                    E.map((e, t) => {
                                        const n = Ye(e);
                                        return a().createElement(
                                            'div',
                                            { className: Or, key: `${t}-${n.name}` },
                                            a().createElement(xr, {
                                                isShowCompensation: C,
                                                reward: n,
                                                rewardSize: _ ? yn.Big : yn.Small,
                                                itemIndex: t,
                                                hasAnimation: u,
                                                isSpecialReward: p === n.index,
                                                isPausedForSpecial: r,
                                                onAnimationEnd: B,
                                                key: t,
                                            }),
                                        );
                                    }),
                                )
                            );
                        },
                    ),
                    Pr = 'RewardsContainer_base_22',
                    kr = (e, u) => ({ width: `${(u ? 100 : 68) * e + (u ? 140 : 80)}rem` }),
                    Lr = (0, M.Pi)(({ onRowAnimationEnd: e, onSpecialDropped: u }) => {
                        const t = Ku().model,
                            n = t.computes.getLastRewardRowIndex(),
                            r = t.root.get().maxRewardsInRow,
                            i = fn();
                        return a().createElement(
                            'div',
                            { className: Pr, style: kr(r, i) },
                            t.rewardRows.get().map((r, i) =>
                                a().createElement(Ir, {
                                    rowIndex: i,
                                    onSpecialDropped: u,
                                    key: i,
                                    isNewRewardRow: i === n,
                                    onRowAnimationEnd: e,
                                    isPausedForSpecial: t.root.get().isPausedForSpecial,
                                }),
                            ),
                        );
                    }),
                    Mr = 'MainLayout_base_ac',
                    Gr = 'MainLayout_content_4e',
                    Ur = 'MainLayout_closeButton_25',
                    Hr = 'MainLayout_statisticButtonWrapper_1e',
                    $r = 'MainLayout_backgroundWrapper_af',
                    zr = 'MainLayout_sequence_e1',
                    Wr = 'MainLayout_background_dc',
                    qr = 'MainLayout_rewards_6c',
                    Yr = 'MainLayout_rewardsWrapper_42',
                    Vr = R.strings.ny.rewardKit,
                    jr = {
                        width: 800,
                        height: 450,
                        frameCount: 60,
                        chunk: { count: 3, rows: 5, columns: 4 },
                        getChunkPath:
                            ((Kr = 'R.images.gui.maps.icons.newYear.rewardkits_screens.shine_sequence.sprite_'),
                            (e) => `${Kr}${e}`),
                    };
                var Kr;
                const Xr = (function (e) {
                        const u = e.chunk,
                            t = u.rows * u.columns;
                        return (n) => {
                            const a = n % t,
                                r = (a % u.columns) * e.width,
                                i = Math.trunc(a / u.columns) * e.height;
                            return { path: e.getChunkPath(Math.trunc(n / t)), x: r, y: i };
                        };
                    })(jr),
                    Qr = (e) => ({
                        backgroundImage: `url(${R.images.gui.maps.icons.newYear.rewardkits_screens.backgrounds.$dyn(e)})`,
                    }),
                    Zr = (0, M.Pi)(() => {
                        var e, u;
                        const t = Ku(),
                            r = t.model,
                            s = t.controls,
                            o = r.root.get(),
                            l = o.leftToOpenCount,
                            c = o.isPausedForSpecial,
                            d = o.boxCategory,
                            E = o.isServerError,
                            m = o.boxesCounter,
                            _ =
                                null == (e = r.rewardRows.get()[r.computes.getLastRewardRowIndex()])
                                    ? void 0
                                    : e.value.rewards,
                            A = _ && _.some(({ value: e }) => e.isCompensation),
                            F = (0, n.useMemo)(
                                () =>
                                    ((e, u, t) =>
                                        (0, Mu.C8)({
                                            id: 'premium-multi-open',
                                            initial: Gu.Init,
                                            context: { leftToOpenCount: e, isCompensationDropped: t },
                                            states: {
                                                [Gu.Init]: {
                                                    on: {
                                                        [Uu.StartOpening]: {
                                                            target: Gu.Opening,
                                                            actions: [
                                                                (0, Lu.assign)((e, u) => ({
                                                                    leftToOpenCount: u.value.leftToOpenCount,
                                                                })),
                                                            ],
                                                        },
                                                        [Uu.ToPause]: {
                                                            target: Gu.Pause,
                                                            actions: [
                                                                (0, Lu.assign)((e, u) => ({
                                                                    leftToOpenCount: u.value.leftToOpenCount,
                                                                })),
                                                            ],
                                                        },
                                                    },
                                                },
                                                [Gu.Opening]: {
                                                    on: {
                                                        [Uu.ToIdle]: { target: Gu.Idle },
                                                        [Uu.ToPause]: { target: Gu.Pause },
                                                        [Uu.ToSpecialPause]: { target: Gu.PauseForSpecial },
                                                        [Uu.OpenNext]: {
                                                            target: Gu.OpenRow,
                                                            actions: [
                                                                (0, Lu.assign)((e, u) => ({
                                                                    leftToOpenCount: u.value.leftToOpenCount,
                                                                    isCompensationDropped:
                                                                        u.value.isCompensationDropped,
                                                                })),
                                                            ],
                                                            cond: (e) => e.leftToOpenCount > 0,
                                                        },
                                                    },
                                                },
                                                [Gu.OpenRow]: {
                                                    entry: (0, Lu.send)(
                                                        { type: 'open' },
                                                        { delay: (e) => (e.isCompensationDropped ? 1500 : 200) },
                                                    ),
                                                    on: {
                                                        open: { target: Gu.Opening, actions: () => u() },
                                                        [Uu.ToPause]: { target: Gu.Pause },
                                                        [Uu.ToSpecialPause]: { target: Gu.PauseForSpecial },
                                                    },
                                                },
                                                [Gu.Pause]: {
                                                    on: {
                                                        [Uu.ToOpening]: { target: Gu.Opening },
                                                        [Uu.ToIdle]: { target: Gu.Idle },
                                                    },
                                                },
                                                [Gu.PauseForSpecial]: {
                                                    on: { [Uu.ToOpening]: { target: Gu.Opening } },
                                                },
                                                [Gu.Idle]: {
                                                    on: {
                                                        [Uu.StartOpening]: {
                                                            target: Gu.Opening,
                                                            actions: [
                                                                (0, Lu.assign)((e, u) => ({
                                                                    leftToOpenCount: u.value.leftToOpenCount,
                                                                })),
                                                            ],
                                                        },
                                                    },
                                                },
                                            },
                                        }))(l, s.openBox, A),
                                [],
                            ),
                            D = (0, G.eO)(F),
                            C = D[0],
                            g = D[1],
                            p = (0, n.useState)(!1),
                            B = p[0],
                            h = p[1],
                            w = (null != (u = ce(c)) ? u : c) && !c;
                        ((0, n.useEffect)(() => {
                            C.value === Gu.Idle && l && g({ type: Uu.StartOpening, value: { leftToOpenCount: l } });
                        }, [l, g, C.value]),
                            (0, n.useEffect)(() => {
                                w &&
                                    (g({ type: Uu.ToOpening }),
                                    g(
                                        l
                                            ? {
                                                  type: Uu.OpenNext,
                                                  value: { leftToOpenCount: l, isCompensationDropped: A },
                                              }
                                            : { type: Uu.ToIdle, value: { leftToOpenCount: l } },
                                    ));
                            }, [A, l, w, g]));
                        const v = (0, n.useCallback)(() => {
                                ((0 === l || E) && g({ type: Uu.ToIdle, value: { leftToOpenCount: l } }),
                                    g({ type: Uu.OpenNext, value: { leftToOpenCount: l, isCompensationDropped: A } }));
                            }, [l, E, g, A]),
                            b = ne(
                                () => {
                                    (s.openNextBoxes(), g({ type: Uu.ToOpening }));
                                },
                                [s, g],
                                320,
                                !0,
                            ),
                            f = (0, n.useCallback)(() => {
                                l && g({ type: Uu.ToPause });
                            }, [l, g]),
                            y = (0, n.useCallback)(() => {
                                switch (C.value) {
                                    case Gu.Init:
                                        (g({ type: Uu.ToPause, value: { leftToOpenCount: l } }), h(!1));
                                        break;
                                    case Gu.Opening:
                                    case Gu.OpenRow:
                                        (f(), h(!1));
                                        break;
                                    default:
                                        B ? h(!1) : s.close();
                                }
                            }, [B, C.value, l, f, g, s]);
                        var S;
                        ((S = y), se(ae.n.ESCAPE, S));
                        const x = (0, n.useCallback)(() => {
                                l &&
                                    (g({ type: Uu.ToOpening }),
                                    g({ type: Uu.OpenNext, value: { leftToOpenCount: l, isCompensationDropped: A } }));
                            }, [A, l, g]),
                            T = (0, n.useCallback)(
                                (e) => {
                                    if (!e.repeat)
                                        if (!E && m)
                                            switch (C.value) {
                                                case Gu.Idle:
                                                    b();
                                                    break;
                                                case Gu.OpenRow:
                                                case Gu.Opening:
                                                    f();
                                                    break;
                                                case Gu.Pause:
                                                    x();
                                            }
                                        else s.close();
                                },
                                [E, m, C.value, s, b, f, x],
                            );
                        le({ [ae.n.SPACE]: T });
                        const N = (0, n.useCallback)(
                            (e) => {
                                (g({ type: Uu.ToSpecialPause }), s.showSpecialReward(e));
                            },
                            [s, g],
                        );
                        return a().createElement(
                            'div',
                            { className: Mr, lang: R.strings.settings.LANGUAGE_CODE() },
                            a().createElement(Ou, {
                                isVisible: B,
                                rewards: r.rewards.get(),
                                resources: r.resources.get(),
                                boxesCount: r.rewardKitStatistics.get().count,
                                isResetFailed: r.rewardKitStatistics.get().isResetFailed,
                                resourcesTotalCount: r.rewardKitStatistics.get().totalResourcesCount,
                                closeStatistics: () => h(!1),
                                resetStatistics: () => s.resetStatistics(),
                            }),
                            a().createElement(
                                'div',
                                { className: Gr },
                                a().createElement(
                                    'div',
                                    { className: $r },
                                    a().createElement('div', { className: Wr, style: Qr(d) }),
                                    i.O.client.graphicsQuality.isHigh() &&
                                        a().createElement(Y, {
                                            width: jr.width,
                                            height: jr.height,
                                            frameCount: jr.frameCount,
                                            getImageSource: Xr,
                                            className: zr,
                                        }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Ur },
                                    a().createElement(ue, {
                                        caption: Vr.upper.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: y,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Hr },
                                    a().createElement(ku, {
                                        onClick: () => {
                                            (s.updateLastSeen(), h(!0));
                                        },
                                    }),
                                ),
                                a().createElement(vn, {
                                    onHeaderAnimationEnd: () => {
                                        g({ type: Uu.StartOpening, value: { leftToOpenCount: l } });
                                    },
                                }),
                                C.value !== Gu.Init &&
                                    a().createElement(
                                        'div',
                                        { className: Yr },
                                        a().createElement(
                                            'div',
                                            { className: qr },
                                            r.computes.getRewardsLength() > 0 &&
                                                a().createElement(Lr, { onSpecialDropped: N, onRowAnimationEnd: v }),
                                        ),
                                    ),
                                a().createElement(pn, { onOpenBox: b, onPause: f, onPlay: x, state: C.value }),
                            ),
                        );
                    }),
                    Jr = (0, M.Pi)(() => {
                        const e = Ku().controls;
                        return (
                            (0, n.useEffect)(() => {
                                e.viewShowed();
                            }, [e]),
                            a().createElement(Zr, null)
                        );
                    });
                engine.whenReady.then(() => {
                    L().render(
                        a().createElement(P, null, a().createElement(ju, null, a().createElement(Jr, null))),
                        document.getElementById('root'),
                    );
                });
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
                    s = ['text', 'binding', 'className'];
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
                        })(e, s);
                    const c = ((e, u) => {
                            const t =
                                    /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                                a = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                                s = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                                o = u ? Object.assign({}, u) : {};
                            let l = t.exec(e),
                                c = e,
                                d = 0;
                            for (; l;) {
                                const m = l[0],
                                    _ = a.exec(m),
                                    A = s.exec(m),
                                    F = l[1];
                                if (_ && A) {
                                    const e = _[0],
                                        t = e + d++ + A[0].replaceAll(')', '') + e;
                                    ((c = c.replace(m, `%(${t})`)),
                                        (o[t] = i[e]
                                            ? r().createElement(
                                                  'span',
                                                  { className: i[e] },
                                                  r().createElement(n.z, { text: F, binding: u }),
                                              )
                                            : r().createElement(
                                                  'span',
                                                  { style: ((E = e), { color: `#${E}` }) },
                                                  r().createElement(n.z, { text: F, binding: u }),
                                              )));
                                }
                                l = t.exec(e);
                            }
                            var E;
                            return [c, o];
                        })(u, t),
                        d = c[0],
                        E = c[1];
                    return r().createElement(n.z, o({ text: d, classMix: a, binding: E }, l));
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
        (__webpack_require__.j = 6828),
        (() => {
            var e = { 6828: 0, 4840: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(6664));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
