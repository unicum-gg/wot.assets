(() => {
    'use strict';
    var __webpack_modules__ = {
            280: (u, e, t) => {
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
            527: (u, e, t) => {
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
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2493: (u, e, t) => {
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
                t.d(e, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (u, e, t) => {
                t.d(e, { ZP: () => i });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((u, e) => ((u[e] = () => (0, n.playSound)(a[e])), u), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (u, e, t) => {
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
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
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => R,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getFontNames: () => f,
                        getScale: () => D,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => h,
                        isFocused: () => p,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
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
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function m(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function C(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function g(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const f = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    R = Object.keys(a.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === a.W[e]), u),
                        {},
                    ),
                    y = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    x = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
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
                t.d(e, { BN: () => o, Uw: () => m, WU: () => r, uF: () => i, v2: () => a });
                var n = t(1281);
                let a;
                function r(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function i(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                function o(u) {
                    return u.replace(/-/g, '_');
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(a || (a = {}));
                const s = (u) => u.replace(/&nbsp;/g, ' '),
                    l = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    c = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    E = (u, e, t = a.left) => u.split(e).reduce(t === a.left ? l : c, []),
                    d = (() => {
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
                    _ = ['zh_cn', 'zh_sg', 'zh_tw'],
                    A = (u, e = a.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (_.includes(t)) return d(u);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(u)
                                .map((u) => s(u));
                        }
                        return ((u, e = a.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = s(u);
                            return (E(r, /( )/, e).forEach((u) => (t = t.concat(E(u, n, a.left)))), t);
                        })(u, e);
                    },
                    m = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : A(u, e)));
            },
            1358: (u, e, t) => {
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
                t.d(e, {
                    B3: () => s,
                    Z5: () => i.Z5,
                    B0: () => o,
                    wU: () => h,
                    ry: () => D,
                    Eu: () => C,
                    SW: () => p,
                    P3: () => b,
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
                    _ = t(3138);
                const A = ['args'];
                function m(u, e, t, n, a, r, i) {
                    try {
                        var o = u[r](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(n, a);
                }
                const F = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    D = (function () {
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
                                            m(r, n, a, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            m(r, n, a, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
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
                                })(e, A);
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
                    g = () => B(o.CLOSE),
                    p = () => B(o.POP_OVER, { on: !1 }),
                    b = (u, e, t, n, a = R.invalid('resId'), r) => {
                        const i = _.O.view.getViewGlobalPosition(),
                            s = t.getBoundingClientRect(),
                            l = s.x,
                            c = s.y,
                            E = s.width,
                            d = s.height,
                            A = {
                                x: _.O.view.pxToRem(l) + i.x,
                                y: _.O.view.pxToRem(c) + i.y,
                                width: _.O.view.pxToRem(E),
                                height: _.O.view.pxToRem(d),
                            };
                        B(o.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: u,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: e,
                            bbox: F(A),
                            on: !0,
                            args: r,
                        });
                    },
                    h = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    v = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var w = t(7572);
                const f = a.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: w.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (u) => B(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: p,
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: b,
                        addEscapeListener: (u) => {
                            const e = (e) => v(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            v(u, g);
                        },
                        handleViewEvent: B,
                        onBindingsReady: D,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: h,
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
                window.ViewEnvHelper = y;
            },
            8613: (u, e, t) => {
                t.d(e, { Z5: () => n, cy: () => a });
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
                    };
            },
            406: (u, e, t) => {
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
                            for (; l;) {
                                const _ = l[0],
                                    A = a.exec(_),
                                    m = o.exec(_),
                                    F = l[1];
                                if (A && m) {
                                    const u = A[0],
                                        t = u + E++ + m[0].replaceAll(')', '') + u;
                                    ((c = c.replace(_, `%(${t})`)),
                                        (s[t] = i[u]
                                            ? r().createElement(
                                                  'span',
                                                  { className: i[u] },
                                                  r().createElement(n.z, { text: F, binding: e }),
                                              )
                                            : r().createElement(
                                                  'span',
                                                  { style: ((d = u), { color: `#${d}` }) },
                                                  r().createElement(n.z, { text: F, binding: e }),
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
            8003: (u, e, t) => {
                var n = t(6179),
                    a = t.n(n),
                    r = t(493),
                    i = t.n(r);
                let o, s, l, c, E, d, _, A;
                (!(function (u) {
                    ((u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Tankman = 'tankman'),
                        (u.Tankwoman = 'tankwoman'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.Entitlements = 'entitlements'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.NewYearGuestD = 'ny_dog'),
                        (u.EquipCoin = 'equipCoin'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.DeluxeGift = 'deluxe_gift'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.OptionalDevice = 'optionalDevice'),
                        (u.LootBox = 'lootBox'),
                        (u.BrCoin = 'brcoin'));
                })(o || (o = {})),
                    (function (u) {
                        ((u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'),
                            (u.EquipCoin = 'equipCoin'));
                    })(s || (s = {})),
                    (function (u) {
                        ((u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S64x64 = 's64x64'),
                            (u.S48x48 = 's48x48'));
                    })(l || (l = {})),
                    (function (u) {
                        ((u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string'));
                    })(c || (c = {})),
                    (function (u) {
                        ((u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(E || (E = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(d || (d = {})),
                    (function (u) {
                        ((u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(_ || (_ = {})),
                    (function (u) {
                        ((u[(u.Engraving = 0)] = 'Engraving'), (u[(u.Background = 1)] = 'Background'));
                    })(A || (A = {})));
                var m = t(3649),
                    F = t(3403),
                    D = t(406),
                    C = t(9916);
                class B extends a().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = C.B3.GOLD;
                        else u = C.B3.INTEGRAL;
                        const e = C.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                B.defaultProps = { format: 'integral' };
                const g = [
                        o.Items,
                        o.Equipment,
                        o.Xp,
                        o.XpFactor,
                        o.Blueprints,
                        o.BlueprintsAny,
                        o.Goodies,
                        o.Berths,
                        o.Slots,
                        o.Tokens,
                        o.CrewSkins,
                        o.CrewBooks,
                        o.Customizations,
                        o.CreditsFactor,
                        o.TankmenXp,
                        o.TankmenXpFactor,
                        o.FreeXpFactor,
                        o.BattleToken,
                        o.Entitlements,
                        o.PremiumUniversal,
                        o.NaturalCover,
                        o.BpCoin,
                        o.BattlePassSelectToken,
                        o.BattlaPassFinalAchievement,
                        o.BattleBadge,
                        o.BonusX5,
                        o.CrewBonusX3,
                        o.NewYearInvoice,
                        o.EpicSelectToken,
                        o.Comp7TokenWeeklyReward,
                        o.DeluxeGift,
                        o.BattleBoosterGift,
                        o.OptionalDevice,
                    ],
                    p = [o.Gold, o.Credits, o.Crystal, o.FreeXp],
                    b = [o.BattlePassPoints, o.EquipCoin],
                    h = [o.PremiumPlus, o.Premium],
                    v = ['engravings', 'backgrounds'],
                    w = ['engraving', 'background'],
                    f = (u, e = l.Small) => {
                        const t = u.name,
                            n = u.type,
                            a = u.value,
                            r = u.icon,
                            i = u.item,
                            o = u.dogTagType,
                            s = ((u) => {
                                switch (u) {
                                    case l.S600x450:
                                        return 'c_600x450';
                                    case l.S400x300:
                                        return 'c_400x300';
                                    case l.S296x222:
                                        return 'c_296x222';
                                    case l.S232x174:
                                        return 'c_232x174';
                                    case l.Big:
                                        return 'c_80x80';
                                    case l.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${r}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}`;
                            case 'entitlements':
                                return 'big' === e
                                    ? u.iconBig.replace('..', 'img://gui')
                                    : u.iconSmall.replace('..', 'img://gui');
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${r}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const n = v[u];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(w[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, e, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${s}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${s}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'premiumTank_rent':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles_rent`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${s}.${r}`;
                            case 'newYearSlot':
                                return `R.images.gui.maps.icons.newYear.rewards.${e}.slot`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    y = [l.Small, l.Big],
                    x = (u, e) => {
                        if (void 0 === u) return null;
                        switch (e) {
                            case c.MULTI: {
                                const e = Number(u);
                                return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                            }
                            case c.CURRENCY:
                            case c.NUMBER:
                                return a().createElement(B, { format: 'integral', value: Number(u) });
                            case c.PREMIUM_PLUS: {
                                const e = Number(u);
                                return isNaN(e) ? u : null;
                            }
                            default:
                                return u;
                        }
                    };
                function T(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const S = {
                    playHighlight() {
                        T('highlight');
                    },
                    playClick() {
                        T('play');
                    },
                    playYes() {
                        T('yes1');
                    },
                };
                var P = t(6483),
                    O = t.n(P);
                const N = () => {},
                    k = (u, e, t = !0) => {
                        const a = (0, n.useState)(u[e]),
                            r = a[0],
                            i = a[1],
                            o = (0, n.useRef)(N),
                            s = (0, n.useCallback)(() => {
                                r.stop ||
                                    (o.current(),
                                    (o.current = ((u, e) => {
                                        let t;
                                        const n = setTimeout(() => {
                                            t = u();
                                        }, e);
                                        return () => {
                                            ('function' == typeof t && t(), clearTimeout(n));
                                        };
                                    })(() => {
                                        i(u[null == r ? void 0 : r.nextState]);
                                    }, r.timeout)));
                            }, [r, u]);
                        return (
                            (0, n.useEffect)(() => (t && s(), () => o.current()), [t, s]),
                            {
                                step: r,
                                setStep: (0, n.useCallback)(
                                    (e) => {
                                        i(u[e]);
                                    },
                                    [u],
                                ),
                                next: s,
                            }
                        );
                    },
                    I = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u;
                var L = t(3138);
                var M;
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
                })(M || (M = {}));
                const U = L.O.client.getSize('rem'),
                    G = U.width,
                    H = U.height,
                    W = Object.assign(
                        { width: G, height: H },
                        (function (u, e, t) {
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
                        })(G, H, {
                            extraLarge: { weight: 4, width: 2560, height: 1440 },
                            large: { weight: 3, width: 1920, height: 1080 },
                            medium: { weight: 2, width: 1600, height: 900 },
                            small: { weight: 1, width: 1366, height: 768 },
                            extraSmall: { weight: 0, width: 1024, height: 768 },
                        }),
                    ),
                    z = (0, n.createContext)(W),
                    $ = ['children'];
                const q = (u) => {
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
                        })(u, $);
                    const a = (0, n.useContext)(z),
                        r = a.extraLarge,
                        i = a.large,
                        o = a.medium,
                        s = a.small,
                        l = a.extraSmall,
                        c = a.extraLargeWidth,
                        E = a.largeWidth,
                        d = a.mediumWidth,
                        _ = a.smallWidth,
                        A = a.extraSmallWidth,
                        m = a.extraLargeHeight,
                        F = a.largeHeight,
                        D = a.mediumHeight,
                        C = a.smallHeight,
                        B = a.extraSmallHeight,
                        g = { extraLarge: m, large: F, medium: D, small: C, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return e;
                        if (t.large && i) return e;
                        if (t.medium && o) return e;
                        if (t.small && s) return e;
                        if (t.extraSmall && l) return e;
                    } else {
                        if (t.extraLargeWidth && c) return I(e, t, g);
                        if (t.largeWidth && E) return I(e, t, g);
                        if (t.mediumWidth && d) return I(e, t, g);
                        if (t.smallWidth && _) return I(e, t, g);
                        if (t.extraSmallWidth && A) return I(e, t, g);
                        if (!(
                            t.extraLargeWidth ||
                            t.largeWidth ||
                            t.mediumWidth ||
                            t.smallWidth ||
                            t.extraSmallWidth
                        )) {
                            if (t.extraLargeHeight && m) return e;
                            if (t.largeHeight && F) return e;
                            if (t.mediumHeight && D) return e;
                            if (t.smallHeight && C) return e;
                            if (t.extraSmallHeight && B) return e;
                        }
                    }
                    return null;
                };
                q.defaultProps = {
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
                (0, n.memo)(q);
                let V, Y;
                (!(function (u) {
                    ((u.ExtraSmall = 'extraSmall'),
                        (u.Small = 'small'),
                        (u.Medium = 'medium'),
                        (u.Large = 'large'),
                        (u.ExtraLarge = 'extraLarge'));
                })(V || (V = {})),
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
                    })(Y || (Y = {})));
                const j = () => {},
                    X = [
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
                function Q() {
                    return (
                        (Q = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Q.apply(null, arguments)
                    );
                }
                const K = (0, n.memo)((u) => {
                        let e = u.width,
                            t = u.height,
                            r = u.getSrcByFrame,
                            i = u.frameCount,
                            o = u.onAnimate,
                            s = void 0 === o ? j : o,
                            l = u.frameTime,
                            c = void 0 === l ? 33 : l,
                            E = u.initialFrameIndex,
                            d = void 0 === E ? 0 : E,
                            _ = u.loop,
                            A = void 0 === _ || _,
                            m = u.state,
                            F = void 0 === m ? 'play' : m,
                            D = u.onAnimationComplete,
                            C = void 0 === D ? j : D,
                            B = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, X);
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
                                if ('stop' === F) {
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
                                    _ = setInterval(() => {
                                        const u = E(),
                                            e = l[u];
                                        (o(l[u]), s(u, e), u === n && (C(), A || clearInterval(_)));
                                    }, c);
                                return () => clearInterval(_);
                            }, [i, c, r, t, d, A, s, C, F, e]),
                            a().createElement('canvas', Q({}, B, { width: e, height: t, ref: g }))
                        );
                    }),
                    Z = {
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
                    J = ['children'],
                    uu = ['children'];
                function eu(u, e) {
                    if (null == u) return {};
                    var t = {};
                    for (var n in u)
                        if ({}.hasOwnProperty.call(u, n)) {
                            if (e.indexOf(n) >= 0) continue;
                            t[n] = u[n];
                        }
                    return t;
                }
                function tu() {
                    return (
                        (tu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        tu.apply(null, arguments)
                    );
                }
                const nu = {
                        idle: { state: 'idle', nextState: 'start', timeout: 400 },
                        start: { state: 'start', nextState: 'bump', timeout: 960 },
                        bump: { state: 'bump', nextState: 'end', timeout: 33 },
                        end: { state: 'end', stop: !0 },
                    },
                    au = { width: 250, height: 250 },
                    ru = () => {},
                    iu = (u) =>
                        `R.images.gui.maps.icons.sequence.convert_twirly.twirly_convertation_${u.toString().padStart(5, '0')}`,
                    ou = ({
                        children: [u, e],
                        className: t,
                        classNames: r = {},
                        onAnimate: i = ru,
                        animationSettings: o = nu,
                        getSrcByFrameTwirly: s = iu,
                        size: l = au,
                        drawSize: c = au,
                        isConvertationStart: E = !0,
                        initAnimationState: d = 'idle',
                    }) => {
                        const _ = k(o, d, E).step.state;
                        return (
                            (0, n.useEffect)(() => {
                                i(_);
                            }, [_, i]),
                            a().createElement(
                                'div',
                                {
                                    className: O()(Z.base, Z[`base__${_}`], t),
                                    style: {
                                        width: 'number' == typeof l.width ? `${l.width}rem` : l.width,
                                        height: 'number' == typeof l.height ? `${l.height}rem` : l.height,
                                    },
                                },
                                a().createElement(
                                    'div',
                                    { className: O()(Z.bumpStars, r.bumpStars) },
                                    a().createElement('div', { className: O()(Z.star, Z.star__one, r.star) }),
                                    a().createElement('div', { className: O()(Z.star, Z.star__second, r.star) }),
                                    a().createElement('div', { className: O()(Z.star, Z.star__third, r.star) }),
                                ),
                                a().createElement('div', { className: O()(Z.bump, r.bump) }),
                                a().createElement('div', { className: O()(Z.bumpRays, r.bumpRays) }),
                                a().createElement(
                                    'div',
                                    { className: O()(Z.reward, r.reward) },
                                    ('idle' === _ || 'start' === _) &&
                                        a().createElement('div', { className: O()(Z.rewardFrom, r.rewardFrom) }, u),
                                    ('end' === _ || 'bump' === _) &&
                                        a().createElement('div', { className: O()(Z.rewardTo, r.rewardTo) }, e),
                                ),
                                ('start' === _ || 'bump' === _) &&
                                    a().createElement(
                                        K,
                                        tu({}, c, {
                                            className: O()(Z.twirlyCanvas, r.twirlyCanvas),
                                            frameCount: 60,
                                            frameTime: 16,
                                            getSrcByFrame: s,
                                        }),
                                    ),
                                a().createElement('div', { className: O()(Z.bumpParticles, r.bumpParticles) }),
                            )
                        );
                    },
                    su =
                        ((0, n.memo)(ou, (u, e) => {
                            u.children;
                            const t = eu(u, J),
                                n = (e.children, eu(e, uu));
                            return (
                                (a = t),
                                (r = n),
                                Object.keys(a).length === Object.keys(r).length &&
                                    Object.keys(a).every(
                                        (u) => Object.prototype.hasOwnProperty.call(r, u) && a[u] === r[u],
                                    )
                            );
                            var a, r;
                        }),
                        [
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
                        ]);
                function lu(u) {
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
                const cu = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: C.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Eu = (u) => {
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
                            _ = u.decoratorId,
                            A = void 0 === _ ? 0 : _,
                            m = u.isEnabled,
                            F = void 0 === m || m,
                            D = u.targetId,
                            C = void 0 === D ? 0 : D,
                            B = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, su);
                        const b = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, n.useMemo)(
                                () =>
                                    C ||
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
                                [C],
                            ),
                            v = (0, n.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (cu(t, A, { isMouseEvent: !0, on: !0, arguments: lu(a) }, h),
                                    B && B(),
                                    (b.current.isVisible = !0));
                            }, [t, A, a, h, B]),
                            w = (0, n.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const u = b.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (b.current.timeoutId = 0)),
                                        cu(t, A, { on: !1 }, h),
                                        b.current.isVisible && g && g(),
                                        (b.current.isVisible = !1));
                                }
                            }, [t, A, h, g]),
                            f = (0, n.useCallback)((u) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(b.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const u = b.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', f, { capture: !0 }),
                                        u && window.clearTimeout(u));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && w();
                            }, [F, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ));
                        return F
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((b.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(u),
                                                      y && y(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (w(), null == i || i(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === d && w(), null == s || s(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === d && w(), null == o || o(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var y;
                    },
                    du = ['children'];
                function _u() {
                    return (
                        (_u = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        _u.apply(null, arguments)
                    );
                }
                const Au = (u) => {
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
                            })(u, du);
                        return a().createElement(
                            Eu,
                            _u(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            e,
                        );
                    },
                    mu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Fu() {
                    return (
                        (Fu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Fu.apply(null, arguments)
                    );
                }
                const Du = R.views.common.tooltip_window.simple_tooltip_content,
                    Cu = (u) => {
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
                            })(u, mu);
                        const c = (0, n.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, r, i, s]);
                        return a().createElement(
                            Eu,
                            Fu(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? Du.SimpleTooltipHtmlContent('resId') : Du.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            e,
                        );
                        var E;
                    };
                function Bu() {
                    return (
                        (Bu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Bu.apply(null, arguments)
                    );
                }
                const gu = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const n = a().createElement('div', { className: t }, u);
                    if (e.header || e.body) return a().createElement(Cu, e, n);
                    const r = e.contentId;
                    return r ? a().createElement(Eu, Bu({}, e, { contentId: r }), n) : a().createElement(Au, e, n);
                };
                let pu, bu, hu, vu, wu;
                (!(function (u) {
                    ((u.Small = 'small'),
                        (u.Big = 'big'),
                        (u.S180x135 = 's180x135'),
                        (u.S232x174 = 's232x174'),
                        (u.S296x222 = 's296x222'),
                        (u.S360x270 = 's360x270'),
                        (u.S400x300 = 's400x300'),
                        (u.S600x450 = 's600x450'));
                })(pu || (pu = {})),
                    (function (u) {
                        ((u.None = 'noAnimation'),
                            (u.Default = 'defaultAnimation'),
                            (u.OnlyButton = 'onlyButtonAnimation'),
                            (u.OnlyText = 'onlyTextAnimation'));
                    })(bu || (bu = {})),
                    (function (u) {
                        ((u.Default = 'default'), (u.Big = 'Big'));
                    })(hu || (hu = {})),
                    (function (u) {
                        ((u.GiftMachineToken = 'battleToken'),
                            (u.Tman = 'tmanToken'),
                            (u.AchievementReward = 'dossier_achievement'),
                            (u.Customizations = 'customizations'),
                            (u.VariadicDiscount = 'variadicDiscount'),
                            (u.AddcEconomicBonuses = 'addcEconomicBonuses'),
                            (u.Vehicles = 'vehicles'),
                            (u.MarketplaceToken = 'ny_marketplace'),
                            (u.RandomBooklet = 'randomNyBooklet'),
                            (u.RandomGuide = 'randomNyGuide'),
                            (u.RandomDecoration = 'randomNyToy'),
                            (u.RandomInstruction = 'randomNyInstruction'),
                            (u.RandomCrewInstruction = 'randomNyCrewInstruction'),
                            (u.EquipCoin = 'equipCoin'));
                    })(vu || (vu = {})),
                    (function (u) {
                        ((u.CelebrityAction = 'questTokenAnim'),
                            (u.Story = 'questTokenStory'),
                            (u.Decoration = 'questTokenDecoration'));
                    })(wu || (wu = {})));
                const fu = {
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
                    Ru = R.strings.settings.LANGUAGE_CODE(),
                    yu = ({
                        name: u,
                        image: e,
                        value: t,
                        valueType: n,
                        isCompensation: r,
                        tooltipId: i,
                        tooltipContentId: o,
                        tooltipDecoratorId: s,
                        size: l = pu.Big,
                        isLabelHidden: c = !1,
                        isFlexable: E = !1,
                        classNames: d,
                        tooltipArgs: _,
                    }) => {
                        const A = ((u, e, t) => {
                                const n = e && { contentId: e };
                                return Object.assign(
                                    {
                                        args: u,
                                        isEnabled: Boolean((u && u.tooltipId) || e),
                                        ignoreMouseClick: !0,
                                        ignoreShowDelay: !e,
                                    },
                                    n,
                                    t,
                                );
                            })(Object.assign({ tooltipId: i, value: t }, _), Number(o), {
                                decoratorId: s,
                                ignoreMouseClick: !1,
                            }),
                            m = x(t, n);
                        return a().createElement(
                            gu,
                            { tooltipArgs: A, className: O()(fu.base, fu[`base__${l}`], E && fu.base__flex) },
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement('div', {
                                    className: fu.bonusIcon,
                                    style: { backgroundImage: `url(${e})` },
                                }),
                                m &&
                                    a().createElement(
                                        'div',
                                        {
                                            lang: Ru,
                                            className: O()(
                                                fu.info,
                                                c && fu.info__hidden,
                                                fu[`info__${u}`],
                                                fu[`info__${n}`],
                                                null == d ? void 0 : d.info,
                                            ),
                                        },
                                        m,
                                    ),
                                r && a().createElement('div', { className: fu.compensationIcon }),
                            ),
                        );
                    };
                let xu, Tu, Su, Pu, Ou, Nu, ku;
                (!(function (u) {
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
                })(xu || (xu = {})),
                    (function (u) {
                        ((u.Crystal = 'ny_crystal'),
                            (u.Emerald = 'ny_emerald'),
                            (u.Amber = 'ny_amber'),
                            (u.Iron = 'ny_iron'),
                            (u.AnyResource = 'anyResource'));
                    })(Tu || (Tu = {})),
                    (function (u) {
                        ((u.XP = 'xpFactor'),
                            (u.TankmenXP = 'tankmenXPFactor'),
                            (u.FreeXp = 'freeXPFactor'),
                            (u.Credits = 'creditsFactor'));
                    })(Su || (Su = {})),
                    (function (u) {
                        ((u.NewYear = 'NewYear'),
                            (u.Christmas = 'Christmas'),
                            (u.Fairytale = 'Fairytale'),
                            (u.Oriental = 'Oriental'));
                    })(Pu || (Pu = {})),
                    (function (u) {
                        ((u.Level1 = 'level1'), (u.Level2 = 'level2'), (u.Level3 = 'level3'), (u.Level4 = 'level4'));
                    })(Ou || (Ou = {})),
                    (function (u) {
                        ((u.Zero = 'zero'), (u.Number = 'number'), (u.Default = 'default'));
                    })(Nu || (Nu = {})),
                    (function (u) {
                        ((u.Undefined = 'undefined'),
                            (u.ToEvent = 'toEvent'),
                            (u.ToGuestD = 'toGuestD'),
                            (u.ToGuestC = 'toGuestC'),
                            (u.ToMarkertplace = 'toMarkertplace'),
                            (u.ToGiftmachine = 'toGiftmachine'),
                            (u.ToRewards = 'toRewards'));
                    })(ku || (ku = {})));
                const Iu = ['ko', 'no'],
                    Lu = R.strings.settings.LANGUAGE_CODE(),
                    Mu = [
                        vu.Tman,
                        vu.GiftMachineToken,
                        vu.AddcEconomicBonuses,
                        vu.AchievementReward,
                        vu.Vehicles,
                        vu.EquipCoin,
                    ],
                    Uu = [wu.CelebrityAction, wu.Story, wu.Decoration],
                    Gu = (wu.CelebrityAction, wu.Story, [vu.Vehicles, vu.AchievementReward]),
                    Hu =
                        (vu.RandomBooklet,
                        vu.RandomGuide,
                        vu.RandomDecoration,
                        vu.RandomInstruction,
                        vu.RandomCrewInstruction,
                        o.Credits,
                        o.Gold,
                        o.FreeXp,
                        Tu.Iron,
                        Tu.Crystal,
                        Tu.Emerald,
                        Tu.Amber,
                        (u, e) => {
                            const t = 'R.images.gui.maps.icons';
                            return `${u === vu.AddcEconomicBonuses || u === o.EquipCoin ? `${t}.newYear.rewards` : u === vu.AchievementReward ? `${t}.achievement` : u === vu.Vehicles ? 'R.images.gui.maps.shop.vehicles' : u === o.CrewBooks ? 'R.images.gui.maps.icons.crewBooks.books' : `${t}.quests.bonuses`}.${(() => {
                                if (u === o.EquipCoin) return e;
                                switch (e) {
                                    case pu.Small:
                                    case pu.Big:
                                        return 'big';
                                    default:
                                        return ((t = u), Gu.includes(t) ? e.replace('s', 'c_') : e);
                                }
                                var t;
                            })()}`;
                        }),
                    Wu = [pu.S360x270, pu.S400x300, pu.S600x450],
                    zu = (u, e, t) => {
                        const n = u.name,
                            a = Wu.includes(e) || ((u) => Mu.includes(u))(n);
                        if (a) {
                            const a = Hu(n, e),
                                r = (({ name: u, icon: e, bigIcon: t, userName: n }) => {
                                    switch (u) {
                                        case vu.Tman:
                                            return t;
                                        case vu.Customizations:
                                            return e;
                                        case vu.Vehicles:
                                            return (0, m.BN)(n);
                                        default:
                                            return e || u;
                                    }
                                })(u);
                            '' === r && console.warn('empty icon');
                            return `${a}.${r}${t ? '_pixelated' : ''}`;
                        }
                        return f(u, e.toString());
                    },
                    $u = (u) => {
                        switch (u) {
                            case vu.Tman:
                            case vu.GiftMachineToken:
                            case vu.AddcEconomicBonuses:
                            case vu.RandomBooklet:
                            case vu.RandomGuide:
                            case vu.RandomDecoration:
                            case vu.RandomInstruction:
                            case vu.RandomCrewInstruction:
                                return c.MULTI;
                            default:
                                return (
                                    (e = u),
                                    g.includes(e)
                                        ? c.MULTI
                                        : p.includes(e)
                                          ? c.CURRENCY
                                          : b.includes(e)
                                            ? c.NUMBER
                                            : h.includes(e)
                                              ? c.PREMIUM_PLUS
                                              : c.STRING
                                );
                        }
                        var e;
                    },
                    qu = { width: 180, height: 180 },
                    Vu = Object.assign({}, nu, { idle: Object.assign({}, nu.idle, { timeout: 0 }) }),
                    Yu = (u, e) => ('vehicles' === u.name ? f(u, e.toString()) : zu(u, e)),
                    ju = ({
                        className: u,
                        bonusModel: e,
                        size: t,
                        playAnimation: r = !0,
                        isShowCompensation: i = !0,
                        animationSize: o = qu,
                        animationSettings: s = Vu,
                    }) => {
                        const l = ((u, e = []) => {
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
                            })((u) => {
                                'start' === u && T('gui_gift_system_newyear_reward_transform');
                            }, []),
                            c = e.compensatedItem,
                            E = i ? 'idle' : 'end';
                        return a().createElement(
                            ou,
                            {
                                className: u,
                                animationSettings: s,
                                onAnimate: l,
                                isConvertationStart: r,
                                initAnimationState: E,
                                size: o,
                            },
                            [
                                a().createElement(yu, {
                                    key: 1,
                                    name: c.name,
                                    image: Yu(c, t),
                                    value: c.value,
                                    valueType: $u(c.name),
                                    size: t,
                                }),
                                a().createElement(yu, {
                                    key: 2,
                                    name: e.name,
                                    image: zu(e, t),
                                    value: e.value,
                                    valueType: $u(e.name),
                                    isCompensation: e.isCompensation,
                                    tooltipId: e.tooltipId,
                                    tooltipContentId: e.tooltipContentId,
                                    tooltipDecoratorId:
                                        R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    size: t,
                                }),
                            ],
                        );
                    },
                    Xu = (u) => {
                        (0, n.useEffect)(u, []);
                    },
                    Qu = {
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
                function Ku() {
                    const u = (0, n.useRef)(0);
                    var e;
                    return (
                        (e = () => {
                            window.cancelAnimationFrame(u.current);
                        }),
                        (0, n.useEffect)(() => e, []),
                        (0, n.useMemo)(
                            () => ({
                                run: (e) => {
                                    (window.cancelAnimationFrame(u.current),
                                        (u.current = window.requestAnimationFrame(() => {
                                            u.current = window.requestAnimationFrame(() => {
                                                (e(), (u.current = 0));
                                            });
                                        })));
                                },
                                clear: () => {
                                    (window.cancelAnimationFrame(u.current), (u.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== u.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                var Zu;
                !(function (u) {
                    ((u[(u.Left = 0)] = 'Left'),
                        (u[(u.Right = 1)] = 'Right'),
                        (u[(u.Top = 2)] = 'Top'),
                        (u[(u.Bottom = 3)] = 'Bottom'));
                })(Zu || (Zu = {}));
                const Ju = ['__left', '__right', '__top', '__bottom'],
                    ue =
                        ((0, n.forwardRef)(
                            ({ children: u, disableAutoSizeUpdate: e, onOutsideClick: t, customStyles: r = {} }, i) => {
                                const o = (0, n.useRef)(null),
                                    s = (0, n.useRef)(null),
                                    l = (0, n.useRef)(null),
                                    c = (0, n.useState)(window.decorator && window.decorator.directionType),
                                    E = c[0],
                                    d = c[1],
                                    _ = (0, n.useCallback)(() => {
                                        (S.playClick(), L.O.view.sendEvent.close());
                                    }, []),
                                    A = (0, n.useCallback)(() => {
                                        S.playHighlight();
                                    }, []),
                                    m = O()(Qu.arrow, Qu[`arrow${Ju[E]}`]);
                                Xu(
                                    () => (
                                        L.O.client.events.mouse.enableOutside(),
                                        L.O.client.events.mouse.down(([, u]) => {
                                            'outside' === u && (t ? t() : L.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const F = (0, n.useCallback)(
                                        (u) => {
                                            let e = u.target;
                                            do {
                                                if (e === o.current || e === l.current) return;
                                                e = e.parentNode;
                                            } while (e);
                                            const n = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const u = L.O.client.getMouseGlobalPosition(),
                                                    e = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        u.x < n.boundX ||
                                                        u.x > n.boundX + n.boundWidth ||
                                                        u.y > n.boundY + n.boundHeight ||
                                                        u.y < n.boundY;
                                                if (e && !t) return;
                                            }
                                            t ? t() : L.O.view.sendEvent.close('popover');
                                        },
                                        [o, l, t],
                                    ),
                                    D = Ku(),
                                    B = (0, n.useCallback)(() => {
                                        const u = s.current;
                                        if (u)
                                            return (
                                                L.O.view.freezeTextureBeforeResize(),
                                                D.run(() => {
                                                    const e = u.scrollWidth,
                                                        t = u.scrollHeight;
                                                    (L.O.view.resize(e, t), d(window.decorator.directionType));
                                                })
                                            );
                                    }, [D]);
                                return (
                                    (0, n.useImperativeHandle)(i, () => ({ updateSize: B })),
                                    Xu(() => {
                                        L.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, n.useEffect)(() => {
                                        document.addEventListener('mousedown', F, { capture: !0 });
                                        const u = ((u) => {
                                            let e = !1;
                                            return {
                                                promise: new Promise((t, n) => {
                                                    u.then((u) => !e && t(u)).catch((u) => !e && n(u));
                                                }),
                                                cancel() {
                                                    e = !0;
                                                },
                                            };
                                        })((0, C.Eu)());
                                        return (
                                            !e && u.promise.then(() => B()),
                                            () => {
                                                (u.cancel(), document.removeEventListener('mousedown', F));
                                            }
                                        );
                                    }, [B, F, e]),
                                    a().createElement(
                                        'div',
                                        { className: Qu.base, ref: s },
                                        a().createElement(
                                            'div',
                                            { className: Qu.decorator },
                                            a().createElement(
                                                'div',
                                                { className: Qu.content, ref: o },
                                                u,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    a().createElement(
                                                        Cu,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        a().createElement('div', {
                                                            className: Qu.closeBtn,
                                                            onClick: _,
                                                            onMouseEnter: A,
                                                            ref: l,
                                                        }),
                                                    ),
                                            ),
                                            a().createElement('div', { className: m, style: r.arrow }),
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
                const te = (u) => {
                        let e = u.contentId,
                            t = u.decoratorId,
                            r = u.direction,
                            i = void 0 === r ? Zu.Top : r,
                            o = u.targetId,
                            s = u.args,
                            l = u.onClick,
                            c = u.children,
                            E = u.isEnabled,
                            d = void 0 === E || E,
                            _ = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, ue);
                        const A = (0, n.useRef)(null),
                            m = (0, n.useCallback)(() => {
                                if ((0, C.wU)()) return (0, C.SW)();
                                A.current && (0, C.P3)(e, i, A.current, t, o, s);
                            }, [e, i, s, t, o]);
                        return a().createElement(
                            'div',
                            ee(
                                {
                                    ref: A,
                                    onMouseDown:
                                        ((F = c.props.onClick),
                                        (u) => {
                                            d && (m(), l && l(u), F && F(u));
                                        }),
                                },
                                _,
                            ),
                            c,
                        );
                        var F;
                    },
                    ne = ['children'];
                function ae() {
                    return (
                        (ae = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        ae.apply(null, arguments)
                    );
                }
                const re = (u) => {
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
                            })(u, ne);
                        return a().createElement(
                            te,
                            ae(
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
                            e,
                        );
                    },
                    ie = {
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
                    oe = (0, n.memo)(
                        ({
                            bonus: u,
                            options: e,
                            size: t = pu.Small,
                            className: r,
                            isCurrentProgressionCompleted: i,
                            isProgressionReward: o,
                            isFlexable: s,
                        }) => {
                            const l = u.level,
                                c = u.discount,
                                E = u.selectedVehicle,
                                d = u.variadicID,
                                _ = e || {},
                                A = _.disabled,
                                F = _.isPopoverOpened,
                                D = `${Hu(vu.VariadicDiscount, t)}.${vu.VariadicDiscount}`,
                                C = Iu.includes(Lu) ? l : R.strings.roman_numerals.$dyn(`n_${l}`),
                                B = (0, n.useState)(!1),
                                g = B[0],
                                p = B[1],
                                b = (0, n.useState)(!1),
                                h = b[0],
                                v = b[1],
                                w = !E && !h,
                                f = { variadicID: d, discount: c, isCurrentProgressionCompleted: i },
                                y = { popoverId: 'NYSelectVehicleForDiscountPopover', variadicID: d },
                                x = {
                                    backgroundImage: `url('${E ? R.images.gui.maps.icons.vehicle.$dyn(((S = E), S.replace(/:|-/g, '_'))) : D}')`,
                                };
                            var S;
                            const P = (0, n.useCallback)(() => {
                                    A || v(!0);
                                }, [A]),
                                N = (0, n.useCallback)(() => {
                                    w && i && !F && (T(R.sounds.hangar_newyear_slot_over()), p(!0));
                                }, [w, i, F]),
                                k = (0, n.useCallback)(() => {
                                    g && (T(R.sounds.hangar_newyear_slot_over_off()), p(!1));
                                }, [g]);
                            var I, L;
                            ((0, n.useEffect)(() => {
                                !w && g && (T(R.sounds.hangar_newyear_slot_over_off()), p(!1));
                            }, [w, g]),
                                (I = () => {
                                    !F && h && v(!1);
                                }),
                                (L = [F, h]),
                                (0, n.useEffect)(() => {
                                    let u = null;
                                    return (
                                        (u = requestAnimationFrame(() => {
                                            u = requestAnimationFrame(() => {
                                                ((u = null), I());
                                            });
                                        })),
                                        () => {
                                            null !== u && cancelAnimationFrame(u);
                                        }
                                    );
                                }, L));
                            const M = O()(
                                    ie.base,
                                    ie[`base__${t}`],
                                    A && ie.base__disabled,
                                    E && ie.base__applied,
                                    i && ie.base__currentProgressionCompleted,
                                    o && ie.base__progressionReward,
                                    s && ie.base__flex,
                                    r,
                                ),
                                U = a().createElement(
                                    Eu,
                                    {
                                        contentId: R.views.lobby.new_year.tooltips.NyDiscountRewardTooltip('resId'),
                                        args: f,
                                    },
                                    a().createElement(
                                        'div',
                                        { className: M, onMouseEnter: N, onMouseLeave: k, onClick: P },
                                        a().createElement(
                                            'div',
                                            { className: ie.discountReward },
                                            a().createElement('div', { className: ie.icon, style: x }),
                                            a().createElement('div', { className: ie.vehicleLevel }, C),
                                            a().createElement(
                                                'div',
                                                { className: ie.discountAmount },
                                                o
                                                    ? R.strings.common.common.percent()
                                                    : (0, m.uF)(R.strings.ny.percentageValue.withMinus(), { value: c }),
                                            ),
                                        ),
                                    ),
                                );
                            return A || E || !i ? U : a().createElement(re, { args: y }, U);
                        },
                    ),
                    se = 'ActivityReward_base_50',
                    le = 'ActivityReward_base__animated_b8',
                    ce = 'ActivityReward_base__completed_02',
                    Ee = 'ActivityReward_base__flex_24',
                    de = 'ActivityReward_inner_39',
                    _e = 'ActivityReward_icon_21',
                    Ae = 'ActivityReward_iconPlay_02',
                    me = R.strings.ny.activityReward.tooltip,
                    Fe = ({ name: u, icon: e, isClickable: t, isNew: n, isFlexable: r }) => {
                        const i = ((u) => {
                            switch (u) {
                                case wu.CelebrityAction:
                                    return 'action';
                                case wu.Story:
                                    return 'story';
                                case wu.Decoration:
                                    return 'decoration';
                                default:
                                    return u;
                            }
                        })(u);
                        return a().createElement(
                            Cu,
                            { header: me.header.$dyn(i), body: me.body.$dyn(i) },
                            a().createElement(
                                'div',
                                { className: O()(se, t && ce, t && n && le, r && Ee) },
                                a().createElement(
                                    'div',
                                    { className: de },
                                    a().createElement('div', {
                                        className: _e,
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.newYear.rewards.activity.$dyn(e)})`,
                                        },
                                    }),
                                    u === wu.CelebrityAction && a().createElement('div', { className: Ae }),
                                ),
                            ),
                        );
                    },
                    De = { base: 'AttachmentReward_base_a0', glow: 'AttachmentReward_glow_5c' },
                    Ce = (u, e) =>
                        R.images.gui.maps.vehicles.attachments.$dyn(e).$dyn(u) ||
                        `R.images.gui.maps.icons.quests.bonuses.${e}.attachment`,
                    Be = ({
                        name: u,
                        iconName: e,
                        tooltipId: t,
                        rarity: n,
                        value: r,
                        tooltipContentId: i,
                        size: o = pu.Small,
                        isFlexable: s,
                        withGlowAndSign: l = !0,
                        classNames: c,
                    }) =>
                        a().createElement(
                            'div',
                            { className: O()(De.base, De[`base__${o}`]) },
                            a().createElement('div', {
                                className: De.glow,
                                style: l
                                    ? {
                                          backgroundImage: `url(R.images.gui.maps.icons.customization.rarity.glowWithSign.${o}.${n})`,
                                      }
                                    : {},
                            }),
                            a().createElement(yu, {
                                name: u,
                                image: Ce(e, o),
                                valueType: $u(u),
                                value: r,
                                tooltipId: t,
                                tooltipContentId: i,
                                size: o,
                                isFlexable: s,
                                classNames: c,
                            }),
                        ),
                    ge = {
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
                    pe = ({
                        bonusModel: u,
                        size: e,
                        isLabelHidden: t,
                        isFlexable: n,
                        classNames: r,
                        tooltipArgs: i,
                    }) => {
                        const o = ((u, e) => {
                                if (void 0 === e || !y.includes(u)) return null;
                                switch (e) {
                                    case E.BATTLE_BOOSTER:
                                    case E.BATTLE_BOOSTER_REPLACE:
                                        return d.BATTLE_BOOSTER;
                                }
                            })(e, u.overlayType),
                            s = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case E.BATTLE_BOOSTER:
                                        return _.BATTLE_BOOSTER;
                                    case E.BATTLE_BOOSTER_REPLACE:
                                        return _.BATTLE_BOOSTER_REPLACE;
                                    case E.BUILT_IN_EQUIPMENT:
                                        return _.BUILT_IN_EQUIPMENT;
                                    case E.EQUIPMENT_PLUS:
                                        return _.EQUIPMENT_PLUS;
                                    case E.EQUIPMENT_TROPHY_BASIC:
                                        return _.EQUIPMENT_TROPHY_BASIC;
                                    case E.EQUIPMENT_TROPHY_UPGRADED:
                                        return _.EQUIPMENT_TROPHY_UPGRADED;
                                    case E.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return _.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case E.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return _.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case E.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return _.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case E.PROGRESSION_STYLE_UPGRADED_1:
                                        return _.PROGRESSION_STYLE_UPGRADED_1;
                                    case E.PROGRESSION_STYLE_UPGRADED_2:
                                        return _.PROGRESSION_STYLE_UPGRADED_2;
                                    case E.PROGRESSION_STYLE_UPGRADED_3:
                                        return _.PROGRESSION_STYLE_UPGRADED_3;
                                    case E.PROGRESSION_STYLE_UPGRADED_4:
                                        return _.PROGRESSION_STYLE_UPGRADED_4;
                                    case E.PROGRESSION_STYLE_UPGRADED_5:
                                        return _.PROGRESSION_STYLE_UPGRADED_5;
                                    case E.PROGRESSION_STYLE_UPGRADED_6:
                                        return _.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(u.overlayType);
                        return a().createElement(
                            'div',
                            { className: O()(ge.base, ge[`base__${e}`]) },
                            o &&
                                a().createElement('div', {
                                    className: ge.highlight,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${e}.${o}_highlight)`,
                                    },
                                }),
                            a().createElement(yu, {
                                name: u.name,
                                image: zu(u, e),
                                value: u.value,
                                valueType: $u(u.name),
                                isCompensation: u.isCompensation,
                                tooltipId: u.tooltipId,
                                tooltipContentId: u.tooltipContentId,
                                tooltipArgs: i,
                                size: e,
                                isLabelHidden: t,
                                isFlexable: n,
                                classNames: r,
                            }),
                            s &&
                                a().createElement('div', {
                                    className: ge.overlay,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${e}.${s}_overlay)`,
                                    },
                                }),
                        );
                    },
                    be = {
                        base: 'ModernizedEquipmentReward_base_d8',
                        equipmentGlow: 'ModernizedEquipmentReward_equipmentGlow_05',
                        base__small: 'ModernizedEquipmentReward_base__small_36',
                        base__big: 'ModernizedEquipmentReward_base__big_09',
                        base__s180x135: 'ModernizedEquipmentReward_base__s180x135_ba',
                        base__s232x174: 'ModernizedEquipmentReward_base__s232x174_02',
                        base__s296x222: 'ModernizedEquipmentReward_base__s296x222_5f',
                        base__flex: 'ModernizedEquipmentReward_base__flex_8a',
                    },
                    he = ({
                        name: u,
                        tooltipId: e,
                        image: t,
                        overlayType: n,
                        value: r,
                        tooltipContentId: i,
                        size: o = pu.Big,
                        isFlexable: s,
                        classNames: l,
                    }) =>
                        a().createElement(
                            'div',
                            { className: O()(be.base, be[`base__${o}`], s && be.base__flex) },
                            a().createElement('div', {
                                className: be.equipmentGlow,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${o}.${n}_overlay)`,
                                },
                            }),
                            a().createElement(yu, {
                                name: u,
                                image: t,
                                valueType: $u(u),
                                value: r,
                                tooltipId: e,
                                tooltipContentId: i,
                                size: o,
                                classNames: l,
                                isFlexable: s,
                            }),
                        ),
                    ve = {
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
                    we = R.strings.ny.lootBoxAutoOpen.reward.premiumPlus,
                    fe = we.label(),
                    Re = we.tooltip.header(),
                    ye = we.tooltip.body(),
                    xe = ({ value: u, size: e = pu.Big, isFlexable: t = !1, classNames: n }) => {
                        const r = (0, m.uF)(fe, { quantity: u }),
                            i = (0, m.uF)(Re, { quantity: u });
                        return a().createElement(
                            Cu,
                            { header: i, body: ye },
                            a().createElement(
                                'div',
                                {
                                    className: O()(ve.base, ve[`base__${e}`], t && ve.base__flex),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                a().createElement('div', {
                                    className: ve.icon,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${e}.premium_plus_1)`,
                                    },
                                }),
                                Number(u) > 1 &&
                                    a().createElement(
                                        'div',
                                        { className: O()(ve.info, null == n ? void 0 : n.info) },
                                        r,
                                    ),
                            ),
                        );
                    },
                    Te = {
                        base: 'ToyReward_base_1d',
                        base__large: 'ToyReward_base__large_c7',
                        base__flex: 'ToyReward_base__flex_3e',
                        label: 'ToyReward_label_f7',
                        image: 'ToyReward_image_46',
                        counter: 'ToyReward_counter_85',
                    };
                let Se;
                !(function (u) {
                    ((u.Medium = 'medium'), (u.Large = 'large'));
                })(Se || (Se = {}));
                const Pe = R.views.lobby.new_year.tooltips,
                    Oe = ({
                        image: u,
                        bigImage: e,
                        value: t,
                        size: n = Se.Medium,
                        toyID: r,
                        isFlexable: i,
                        classNames: o,
                    }) => {
                        const s = x(t, c.MULTI);
                        return a().createElement(
                            Eu,
                            { ignoreShowDelay: !0, contentId: Pe.NyDecorationTooltip('resId'), args: { toyID: r } },
                            a().createElement(
                                'div',
                                {
                                    className: O()(Te.base, i && Te.base__flex, Te[`base__${n}`]),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                a().createElement(
                                    'div',
                                    {
                                        className: Te.image,
                                        style: { backgroundImage: `url(${n === Se.Medium ? u : e})` },
                                    },
                                    s &&
                                        a().createElement(
                                            'div',
                                            { className: O()(Te.counter, null == o ? void 0 : o.counter) },
                                            s,
                                        ),
                                ),
                            ),
                        );
                    };
                var Ne = t(280);
                const ke = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ie = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Le = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Me = (u) =>
                        Le
                            ? `${u}`
                            : (function (u) {
                                  let e = '';
                                  for (let t = Ie.length - 1; t >= 0; t--)
                                      for (; u >= Ie[t];) ((e += ke[t]), (u -= Ie[t]));
                                  return e;
                              })(u),
                    Ue = {
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
                    Ge = ['vehicleInfo', 'rentDays', 'rentBattles', 'size', 'theme', 'classNames'];
                function He() {
                    return (
                        (He = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        He.apply(null, arguments)
                    );
                }
                const We = R.strings.ny.giftMachine,
                    ze = R.images.gui.maps.icons.newYear.tank_types;
                let $e;
                !(function (u) {
                    ((u.Light = 'light'), (u.Dark = 'dark'));
                })($e || ($e = {}));
                const qe = (u) => {
                    let e = u.vehicleInfo,
                        t = u.rentDays,
                        n = void 0 === t ? 0 : t,
                        r = u.rentBattles,
                        i = void 0 === r ? 0 : r,
                        o = u.size,
                        s = void 0 === o ? pu.S180x135 : o,
                        l = u.theme,
                        c = void 0 === l ? $e.Light : l,
                        E = u.classNames,
                        d = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, Ge);
                    const _ = e.vehicleLvl,
                        A = e.vehicleName,
                        F = e.vehicleType,
                        D = (c === $e.Light ? ze.white_elite : ze.blue_elite).$dyn(`${(0, m.BN)(F)}`),
                        C = n > 0 || i > 0;
                    return a().createElement(
                        'div',
                        {
                            className: O()(Ue.base, Ue[`base__${s}`], Ue[`base__${c}`], C && Ue.base__withRent),
                            lang: R.strings.settings.LANGUAGE_CODE(),
                        },
                        a().createElement(yu, He({ size: s, isLabelHidden: !0 }, d)),
                        n > 0 &&
                            a().createElement(Ne.z, {
                                text: We.rentDays(),
                                binding: { clockIcon: a().createElement('span', { className: Ue.clockIcon }), days: n },
                                classMix: O()(Ue.rent, null == E ? void 0 : E.rent),
                            }),
                        i > 0 &&
                            a().createElement(Ne.z, {
                                text: We.rentBattles(),
                                binding: {
                                    clockIcon: a().createElement('span', { className: Ue.clockIcon }),
                                    battles: i,
                                },
                                classMix: O()(Ue.rent, null == E ? void 0 : E.rent),
                            }),
                        a().createElement(
                            'div',
                            { className: O()(Ue.vehicleInfo, null == E ? void 0 : E.info) },
                            Me(_),
                            a().createElement(
                                'div',
                                { className: Ue.typeContainer },
                                a().createElement('div', {
                                    className: Ue.type,
                                    style: { backgroundImage: `url('${D}')` },
                                }),
                            ),
                            A,
                        ),
                    );
                };
                function Ve() {
                    return (
                        (Ve = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Ve.apply(null, arguments)
                    );
                }
                const Ye = ({
                    bonusModel: u,
                    options: e,
                    size: t = pu.Big,
                    toyRewardOptions: n = {},
                    isProgressionReward: r,
                    isCurrentProgressionCompleted: i,
                    compensationRewardOptions: s = {},
                    activityRewardOptions: l = {},
                    vehicleRewardOptions: c = {},
                    isLabelHidden: E,
                    isFlexable: d = !1,
                    isPixelatedImage: _,
                    level: A,
                    classNames: m,
                    tooltipArgs: F,
                }) => {
                    return ((u) => 'item' in u && u.item && u.item.startsWith('modernized'))(u)
                        ? a().createElement(
                              he,
                              Ve({}, u, { image: zu(u, t, _), size: t, classNames: m, isFlexable: d }),
                          )
                        : 'ny25Toys' === u.name
                          ? a().createElement(
                                Oe,
                                Ve(
                                    {
                                        image: u.icon,
                                        bigImage: u.bigIcon,
                                        toyID: u.toyID,
                                        value: u.value,
                                        isFlexable: d,
                                    },
                                    n,
                                ),
                            )
                          : ((u) => 'variadicDiscount' === u.name)(u)
                            ? a().createElement(oe, {
                                  rewardLevel: A,
                                  bonus: u,
                                  options: e,
                                  size: t,
                                  className: null == m ? void 0 : m.discountReward,
                                  isProgressionReward: r,
                                  isCurrentProgressionCompleted: i,
                                  isFlexable: d,
                              })
                            : ((u) => 'premium_plus' === u.name)(u)
                              ? a().createElement(xe, Ve({}, u, { size: t, isFlexable: d, classNames: m }))
                              : u.isCompensation
                                ? a().createElement(ju, Ve({ bonusModel: u, size: t }, s))
                                : ((D = u.name),
                                  Uu.includes(D)
                                      ? a().createElement(Fe, Ve({}, u, l, { isFlexable: d }))
                                      : ((u) => u === o.Vehicles)(u.name)
                                        ? a().createElement(qe, Ve({ image: zu(u, t, _), size: t }, u, c))
                                        : ((u) => u === o.Items)(u.name)
                                          ? a().createElement(pe, {
                                                bonusModel: u,
                                                size: t,
                                                classNames: m,
                                                tooltipArgs: F,
                                                isLabelHidden: E,
                                                isFlexable: d,
                                            })
                                          : ((u) => 'icon' in u && 'attachment' === u.icon)(u)
                                            ? a().createElement(
                                                  Be,
                                                  Ve({}, u, { size: t, classNames: m, isFlexable: d }),
                                              )
                                            : a().createElement(yu, {
                                                  name: u.name,
                                                  image: zu(u, t, _),
                                                  value: u.value,
                                                  valueType: $u(u.name),
                                                  isCompensation: u.isCompensation,
                                                  tooltipId: u.tooltipId,
                                                  tooltipContentId: u.tooltipContentId,
                                                  tooltipArgs: F,
                                                  size: t,
                                                  isLabelHidden: E,
                                                  isFlexable: d,
                                                  classNames: m,
                                              }));
                    var D;
                };
                function je(u) {
                    return (
                        !1 ===
                        (function (u) {
                            return null == u;
                        })(u)
                    );
                }
                function Xe(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                const Qe = Xe;
                function Ke(u, e) {
                    return (function (u, e, t) {
                        const n = [];
                        for (let a = 0; a < u.length; a++) {
                            const r = Qe(u, a);
                            e(r, a, u) && n.push(t(r, a, u));
                        }
                        return n;
                    })(u, je, e);
                }
                const Ze = { isPopoverOpened: !1, disabled: !0, animation: bu.None },
                    Je = {
                        rewardWrapper__tman: 'HugeReward_rewardWrapper__tman_12',
                        label: 'HugeReward_label_5d',
                        label__tman: 'HugeReward_label__tman_89',
                        label__withDescription: 'HugeReward_label__withDescription_7b',
                        info: 'HugeReward_info_96',
                        slideInFadeIn: 'HugeReward_slideInFadeIn_9c',
                        fadeOut: 'HugeReward_fadeOut_8b',
                        fadeIn: 'HugeReward_fadeIn_ba',
                        fadeInWithScale: 'HugeReward_fadeInWithScale_e7',
                        slideUp: 'HugeReward_slideUp_3a',
                        scale: 'HugeReward_scale_27',
                        spin: 'HugeReward_spin_ed',
                        blink: 'HugeReward_blink_d3',
                        slideInNotification: 'HugeReward_slideInNotification_19',
                    },
                    ut = ({ rewardModel: u, withDescription: e = !1, hasLabel: t = !0 }) => {
                        const n = u.name === o.TmanToken,
                            r = u.name === o.Vehicles,
                            i = null == u ? void 0 : u.selectedVehicle;
                        return a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                'div',
                                { className: O()(Je.rewardWrapper, n && Je.rewardWrapper__tman) },
                                a().createElement(Ye, {
                                    bonusModel: u,
                                    isFlexable: n,
                                    size: r ? pu.S180x135 : pu.S232x174,
                                    options: Object.assign({}, Ze, { isSelectable: Boolean(i) }),
                                    vehicleRewardOptions: r
                                        ? {
                                              vehicleInfo: {
                                                  vehicleLvl: null == u ? void 0 : u.vehicleLvl,
                                                  vehicleName: null == u ? void 0 : u.vehicleName,
                                                  vehicleType: u.type,
                                              },
                                          }
                                        : {},
                                    classNames: { info: Je.info },
                                }),
                            ),
                            t &&
                                a().createElement(
                                    'div',
                                    { className: O()(Je.label, n && Je.label__tman, e && Je.label__withDescription) },
                                    ((u) => {
                                        if (u.rarity)
                                            return (0, m.uF)(R.strings.ny.notifications.challenge.label.attachment(), {
                                                rarity: R.strings.vehicle_customization.customization.rarity.$dyn(
                                                    u.rarity,
                                                ),
                                            });
                                        switch (u.name) {
                                            case o.TmanToken:
                                                return u.userName;
                                            case o.Vehicles:
                                                return '';
                                            case vu.VariadicDiscount:
                                                return (0, m.uF)(
                                                    R.strings.ny.notifications.challenge.label.discount(),
                                                    { level: Me(u.level) },
                                                );
                                            default:
                                                return u.label;
                                        }
                                    })(u),
                                ),
                        );
                    },
                    et = {
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
                let tt, nt;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(tt || (tt = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'),
                            (u.small = 'small'),
                            (u.medium = 'medium'),
                            (u.large = 'large'));
                    })(nt || (nt = {})));
                const at = ({
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
                    onMouseUp: _,
                    onMouseLeave: A,
                    onClick: m,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        C = D[0],
                        B = D[1],
                        g = (0, n.useState)(!1),
                        p = g[0],
                        b = g[1];
                    return (
                        (0, n.useEffect)(() => {
                            function u(u) {
                                C && null !== F.current && !F.current.contains(u.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [C]),
                        (0, n.useEffect)(() => {
                            B(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: F,
                                className: O()(
                                    et.base,
                                    et[`base__${r}`],
                                    i && et.base__disabled,
                                    e && et[`base__${e}`],
                                    C && et.base__focus,
                                    p && et.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (u) {
                                    i || (null !== s && T(s), c && c(u));
                                },
                                onMouseMove: function (u) {
                                    E && E(u);
                                },
                                onMouseUp: function (u) {
                                    i || (_ && _(u), b(!1));
                                },
                                onMouseDown: function (u) {
                                    i ||
                                        (null !== l && T(l),
                                        d && d(u),
                                        t && (i || (F.current && (F.current.focus(), B(!0)))),
                                        b(!0));
                                },
                                onMouseLeave: function (u) {
                                    i || (A && A(u), b(!1));
                                },
                                onClick: function (u) {
                                    i || (m && m(u));
                                },
                            },
                            r !== tt.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: et.back }),
                                    a().createElement('span', { className: et.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: O()(et.state, et.state__default) },
                                a().createElement('span', { className: et.stateDisabled }),
                                a().createElement('span', { className: et.stateHighlightHover }),
                                a().createElement('span', { className: et.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: et.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                at.defaultProps = { type: tt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const rt = at,
                    it = 'Background_base_40',
                    ot = 'Background_base__popUp_48',
                    st = 'Background_base__withoutBorder_11',
                    lt = 'Background_image_33',
                    ct = ({
                        customUrl: u = 'R.images.gui.maps.icons.newYear.notifications.common.background_forest',
                        isPopUp: e,
                    }) =>
                        a().createElement(
                            'div',
                            { className: O()(it, e && ot, Boolean(u) && st) },
                            a().createElement('div', {
                                className: lt,
                                style: {
                                    backgroundImage: `url(${u || 'R.images.gui.maps.icons.newYear.notifications.common.background_forest'})`,
                                },
                            }),
                        ),
                    Et = 'CloseButton_base_9f',
                    dt = ({ classNames: u }) =>
                        a().createElement('div', {
                            className: O()(Et, null == u ? void 0 : u.base),
                            onMouseEnter: S.playHighlight,
                            onClick: () => T(R.sounds.cancelcloseno()),
                        }),
                    _t = 'RewardNotificationDecorator_base_c8',
                    At = 'RewardNotificationDecorator_base__popUp_c4',
                    mt = 'RewardNotificationDecorator_closeButton_e2',
                    Ft = 'RewardNotificationDecorator_content_7a',
                    Dt = 'RewardNotificationDecorator_header_56',
                    Ct = 'RewardNotificationDecorator_title_ec',
                    Bt = 'RewardNotificationDecorator_subtitle_fd',
                    gt = 'RewardNotificationDecorator_rewards_96',
                    pt = 'RewardNotificationDecorator_rareReward_85',
                    bt = 'RewardNotificationDecorator_rareReward__tman_fb',
                    ht = 'RewardNotificationDecorator_shadow_2c',
                    vt = 'RewardNotificationDecorator_additionalRewards_50',
                    wt = 'RewardNotificationDecorator_buttonWrapper_c2',
                    ft = 'RewardNotificationDecorator_backgroundWrapper_8b',
                    Rt = 'RewardNotificationDecorator_description_58',
                    yt = 'RewardNotificationDecorator_lipTop_f3',
                    xt = 'RewardNotificationDecorator_lipBottom_0b',
                    Tt = ({
                        title: u,
                        buttonText: e,
                        buttonAction: t,
                        rareReward: n,
                        additionalRewards: r,
                        isPopUp: i = !1,
                        isButtonDisabled: o = !1,
                        isTman: s = !1,
                        backgroundUrl: l,
                        description: c,
                        subtitle: E,
                        classNames: d,
                    }) => (
                        Xu(() => {
                            i && T(R.sounds.hangar_newyear_notification());
                        }),
                        a().createElement(
                            'div',
                            {
                                className: O()(_t, i && At, null == d ? void 0 : d.base),
                                lang: R.strings.settings.LANGUAGE_CODE(),
                            },
                            i && a().createElement(dt, { classNames: { base: mt } }),
                            a().createElement(
                                'div',
                                { className: Ft },
                                a().createElement(
                                    'div',
                                    { className: O()(Dt, null == d ? void 0 : d.header) },
                                    a().createElement('div', { className: O()(Ct, null == d ? void 0 : d.title) }, u),
                                    E &&
                                        a().createElement(
                                            'div',
                                            { className: O()(Bt, null == d ? void 0 : d.subtitle) },
                                            E,
                                        ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: gt },
                                    a().createElement('div', { className: O()(pt, s && bt) }, n),
                                    r
                                        ? a().createElement(
                                              'div',
                                              { className: vt },
                                              i && a().createElement('div', { className: ht }),
                                              r,
                                          )
                                        : c && a().createElement('div', { className: Rt }, c),
                                ),
                                a().createElement(
                                    'div',
                                    { className: wt },
                                    a().createElement(
                                        rt,
                                        {
                                            type: tt.ghost,
                                            onClick: t,
                                            size: nt.medium,
                                            disabled: o,
                                            mixClass: null == d ? void 0 : d.button,
                                        },
                                        e,
                                    ),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: ft },
                                a().createElement(ct, { customUrl: l, isPopUp: i }),
                            ),
                            !i &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: yt }),
                                    a().createElement('div', { className: xt }),
                                ),
                        )
                    );
                function St() {
                    return !1;
                }
                console.log;
                var Pt = t(9174);
                function Ot(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return Nt(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? Nt(u, e)
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
                function Nt(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const kt = (u) => (0 === u ? window : window.subViews.get(u));
                var It = t(3946);
                const Lt = ((u, e) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: i, children: o, mocks: s }) {
                                const l = (0, n.useRef)([]),
                                    c = (t, n, a) => {
                                        var r;
                                        const i = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = kt,
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
                                                const i = (u) => {
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
                                                        const o = 'string' == typeof r ? `${n}.${r}` : n,
                                                            s = L.O.view.addModelObserver(o, e, !0);
                                                        return (a.set(s, t), u && t(i(r)), s);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = Ot(a.keys()); !(u = t()).done;) r(u.value, e);
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
                                            s = (u) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(u)) : o.readByPath(u),
                                            c = (u) => l.current.push(u),
                                            E = u({
                                                mode: t,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const n = null != e ? e : s(u),
                                                            a = Pt.LO.box(n, { equals: St });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Pt.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const n = null != e ? e : s(u),
                                                            a = Pt.LO.box(n, { equals: St });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Pt.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const n = s(e);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (u, e) => ((u[e] = Pt.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Pt.aD)((e) => {
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
                                                                    (u, [e, t]) => ((u[t] = Pt.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Pt.aD)((u) => {
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
                                                cleanup: c,
                                            }),
                                            d = { mode: t, model: E, externalModel: o, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && a ? a.controls(d) : e(d),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    d = (0, n.useState)(r),
                                    _ = d[0],
                                    A = d[1],
                                    m = (0, n.useState)(() => c(r, i, s)),
                                    F = m[0],
                                    D = m[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? D(c(_, i, s)) : (E.current = !0);
                                    }, [s, _, i]),
                                    (0, n.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((u) => u()));
                                        },
                                        [F],
                                    ),
                                    a().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = {
                                    root: u.object(),
                                    rewards: u.array('rewards.items', []),
                                    hugeRewards: u.array('hugeRewards.items', []),
                                },
                                t = (0, It.Om)(() => Ke(e.rewards.get(), (u) => u)),
                                n = (0, It.Om)(() => Ke(e.hugeRewards.get(), (u) => u)[0]),
                                a = (0, It.Om)(() => t().slice(0, 3)),
                                r = (0, It.Om)(() => {
                                    const u = e.root.get(),
                                        t = u.questsQuantity;
                                    return u.completedQuestsQuantity === t;
                                });
                            return Object.assign({}, e, {
                                computed: {
                                    getRewards: t,
                                    getAdditionalRewards: a,
                                    getHugeReward: n,
                                    isAdvancedLabelVisible: r,
                                },
                            });
                        },
                        ({ externalModel: u }) => ({
                            onClick: u.createCallbackNoArgs('onClick'),
                            recruit: u.createCallbackNoArgs('onRecruit'),
                            goToExterior: u.createCallbackNoArgs('onGoToExterior'),
                            goToGarage: u.createCallbackNoArgs('onGoToGarage'),
                        }),
                    ),
                    Mt = Lt[0],
                    Ut = Lt[1],
                    Gt = 'App_reward_6a',
                    Ht = 'App_title_bc',
                    Wt = R.strings.ny.notifications.challenge,
                    zt = (0, F.Pi)(() => {
                        const u = Ut(),
                            e = u.model,
                            t = u.controls,
                            n = e.root.get(),
                            r = n.isPopUp,
                            i = n.isButtonDisabled,
                            s = n.completedQuestsQuantity,
                            l = n.totalQuestsQuantity,
                            c = n.otherBonusCount,
                            E = n.isFirstAttach,
                            d = e.computed.getHugeReward(),
                            _ = e.computed.isAdvancedLabelVisible(),
                            A = (null == d ? void 0 : d.name) === o.TmanToken,
                            F = s === l,
                            C = _
                                ? { buttonText: Wt.button.mission(), clickHandler: () => t.onClick() }
                                : d.rarity
                                  ? {
                                        buttonText: E ? Wt.button.garage() : Wt.button.exterior(),
                                        clickHandler: () => (E ? t.goToGarage() : t.goToExterior()),
                                    }
                                  : d.name === o.TmanToken
                                    ? { buttonText: Wt.button.recruit(), clickHandler: () => t.recruit() }
                                    : {
                                          buttonText: c
                                              ? (0, m.uF)(Wt.button.andMore(), { value: c })
                                              : Wt.button.mission(),
                                          clickHandler: () => t.onClick(),
                                      },
                            B = C.buttonText,
                            g = C.clickHandler;
                        return a().createElement(Tt, {
                            isPopUp: r,
                            buttonAction: g,
                            buttonText: B,
                            title: F
                                ? Wt.completed.title()
                                : a().createElement(D.B, {
                                      text: Wt.inProgress.title(),
                                      binding: { completedAssignments: s, allAssignments: l },
                                      className: Ht,
                                  }),
                            rareReward: a().createElement(ut, {
                                rewardModel: d,
                                withDescription: !e.computed.getRewards().length || _,
                            }),
                            isButtonDisabled: i,
                            isTman: A,
                            additionalRewards: _
                                ? null
                                : ((p = e.computed.getAdditionalRewards()),
                                  (b = (u, e) =>
                                      a().createElement(
                                          'div',
                                          { key: e, className: Gt },
                                          a().createElement(Ye, { isFlexable: !0, bonusModel: u, options: Ze }),
                                      )),
                                  Array.isArray(p)
                                      ? p.map(b)
                                      : p.map((u, e, t) => b(null == u ? void 0 : u.value, e, t))),
                            description: _ ? Wt.label.advancedMissions() : void 0,
                        });
                        var p, b;
                    });
                engine.whenReady.then(() => {
                    i().render(
                        a().createElement(Mt, null, a().createElement(zt, null)),
                        document.getElementById('root'),
                    );
                });
            },
            5287: (u, e, t) => {
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
        (__webpack_require__.j = 1740),
        (() => {
            var u = { 1740: 0, 4840: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(8003));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
