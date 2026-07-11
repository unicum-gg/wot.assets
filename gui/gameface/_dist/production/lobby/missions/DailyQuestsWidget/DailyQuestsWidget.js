(() => {
    'use strict';
    var __webpack_modules__ = {
            7044: (e, u, t) => {
                t.d(u, { dV: () => i, s_: () => a, yR: () => r });
                (t(3649), t(9916));
                var n = t(8613);
                const a = 1e3,
                    r = 60,
                    i = 60 * r;
                (Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime);
            },
            70: (e, u, t) => {
                t.d(u, { O: () => se });
                var n = {};
                (t.r(n),
                    t.d(n, { mouse: () => F, off: () => d, on: () => E, onResize: () => l, onScaleUpdated: () => c }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => p,
                        getSize: () => D,
                        graphicsQuality: () => C,
                        playSound: () => _,
                        setRTPC: () => m,
                    }));
                var r = {};
                (t.r(r), t.d(r, { getBgUrl: () => f, getTextureUrl: () => w }));
                var i = {};
                function o(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (t.r(i),
                    t.d(i, {
                        addModelObserver: () => Q,
                        addPreloadTexture: () => N,
                        arabic2roman: () => ue,
                        children: () => r,
                        displayStatus: () => y,
                        displayStatusIs: () => ne,
                        enableFullScreenModeSupported: () => ie,
                        events: () => S,
                        extraSize: () => ae,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => V,
                        getBrowserTexturePath: () => L,
                        getDisplayStatus: () => J,
                        getExternalPaddingsRem: () => te,
                        getFontNames: () => ee,
                        getScale: () => q,
                        getSize: () => $,
                        getViewGlobalPosition: () => j,
                        initExternalPaddings: () => oe,
                        isEventHandled: () => Z,
                        isFocused: () => H,
                        pxToRem: () => G,
                        remToPx: () => W,
                        resize: () => U,
                        sendEvent: () => R,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => x,
                        setSidePaddingsRem: () => z,
                        whenTutorialReady: () => re,
                    }));
                const l = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    E = (e, u) => engine.on(e, u),
                    d = (e, u) => engine.off(e, u),
                    A = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const F = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && s(!1);
                    }
                    function t() {
                        e.enabled && s(!0);
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
                            : s(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        i = A[u]((e) => t([e, 'outside']));
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
                    return Object.assign({}, a, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
                        },
                        enableOutside() {
                            e.enabled && s(!0);
                        },
                        disableOutside() {
                            e.enabled && s(!1);
                        },
                    });
                })();
                function _(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function m(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    B = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    g = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(g).reduce((e, u) => ((e[u] = () => _(g[u])), e), {}),
                    b = { play: Object.assign({}, h, { sound: _ }), setRTPC: m };
                var v = t(9690);
                function w(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function f(e, u, t) {
                    return `url(${w(e, u, t)})`;
                }
                const y = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    S = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    M = ['args'];
                const k = 2,
                    O = 16,
                    T = 32,
                    I = 64,
                    P = (e, u) => {
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
                                })(u, M);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    R = {
                        close(e) {
                            P('popover' === e ? k : T);
                        },
                        minimize() {
                            P(I);
                        },
                        move(e) {
                            P(O, { isMouseEvent: !0, on: e });
                        },
                    };
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function x(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function L(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function Q(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function $(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function j(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: W(u.x), y: W(u.y) };
                }
                function V() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function W(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function J() {
                    return viewEnv.getShowingStatus();
                }
                const ee = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ue = v.cg;
                function te() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ne = Object.keys(y).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === y[u]), e), {}),
                    ae = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    re = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : S.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ie() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function oe(e) {
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
                const se = { view: i, client: a, sound: b, intl: B };
            },
            7902: (e, u, t) => {
                t.d(u, { F: () => n });
                const n = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId'),
                        a = '';
                    var r;
                    u &&
                        ((a = (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                        (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (n = window.subViews[t].id));
                    return { callerUrl: a, caller: t, stack: u, resId: n };
                };
            },
            8071: (e, u, t) => {
                t.d(u, { M: () => n });
                const n = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
            },
            6364: (e, u, t) => {
                t.d(u, { au: () => p, tT: () => D, eI: () => s });
                var n = t(7044),
                    a = t(7363);
                const r = () => {},
                    i = (e = 0, u, t = 0, i = r) => {
                        const o = (0, a.useState)(e),
                            s = o[0],
                            l = o[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const a = Date.now(),
                                        r = u || (e > 2 * n.yR ? n.yR : 1),
                                        o = setInterval(() => {
                                            const u = e - Math.floor((Date.now() - a) / n.s_);
                                            null !== t && u <= t ? (l(t), i && i(), clearInterval(o)) : l(u);
                                        }, r * n.s_);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                            }, [e, u, t, i]),
                            s
                        );
                    };
                var o = t(70);
                const s = () => {
                    const e = o.O.view.getSize('rem'),
                        u = (0, a.useState)({ height: e.height, width: e.width }),
                        t = u[0],
                        n = u[1];
                    return (
                        (0, a.useEffect)(() => {
                            const e = (e) => {
                                n(e);
                            };
                            return (
                                engine.on('screenResized', e),
                                () => {
                                    engine.off('screenResized', e);
                                }
                            );
                        }, []),
                        t
                    );
                };
                var l = t(7902),
                    c = t(8071);
                const E = (e) => {
                    const u = (0, a.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
                var d = t(9916),
                    A = t(7332),
                    F = t(9617);
                const _ = d.Sw.instance;
                let m;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(m || (m = {}));
                const D = (e = 'model', u = m.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, a.useMemo)(() => (0, l.F)(), []),
                            i = r.callerUrl,
                            o = r.caller,
                            s = r.resId,
                            d = (0, a.useMemo)(() => {
                                const u = (0, F.sI)(i.replace('.js', '.html'));
                                return window.__feature && window.__feature !== o && !u ? `subViews.${o}.${e}` : e;
                            }, [i, o, e]),
                            D = (0, a.useState)(() =>
                                ((e) => {
                                    const u = (0, c.M)(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return (0, A.os)(u) ? u.value : u;
                                })((0, A.Gd)(d)),
                            ),
                            p = D[0],
                            C = D[1],
                            B = (0, a.useRef)(-1);
                        return (
                            E(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? m.Deep : m.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== m.None)
                                ) {
                                    const t = (e) => {
                                            (0, A.kJ)(e) && u === m.Deep
                                                ? (e === p && n((e) => e + 1), C(e))
                                                : C(Object.assign([], e));
                                        },
                                        a = (0, A.U0)(e);
                                    B.current = _.addCallback(a, t, s, u === m.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (u !== m.None)
                                    return () => {
                                        _.removeCallback(B.current, s);
                                    };
                            }, [s, u]),
                            p
                        );
                    },
                    p = (d.Sw.instance, i);
            },
            9617: (e, u, t) => {
                function n(e) {
                    return a().has(e);
                }
                t.d(u, { sI: () => n });
                const a = () => (window.injected || (window.injected = new Map()), window.injected);
            },
            5521: (e, u, t) => {
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
                t.d(u, { cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let u = '';
                    for (let t = a.length - 1; t >= 0; t--) for (; e >= a[t];) ((u += n[t]), (e -= a[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            3649: (e, u, t) => {
                t(1281);
                let n;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(n || (n = {}));
                (() => {
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
                })();
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => r });
                var n = t(70);
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
                t.d(u, { Sw: () => r.Z, B0: () => o, ry: () => D });
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
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(70);
                const F = ['args'];
                function _(e, u, t, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                            _(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            _(r, n, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
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
                                })(u, F);
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
                    C = () => p(o.CLOSE),
                    B = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var g = t(7572);
                const h = a.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: g.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => p(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => p(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
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
                            p(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: m(F),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, C);
                        },
                        handleViewEvent: p,
                        onBindingsReady: D,
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
                        ClickOutsideManager: h,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, u, t) => {
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
            7332: (e, u, t) => {
                t.d(u, { Gd: () => s, U0: () => l, kJ: () => i, os: () => r });
                var n = t(7902),
                    a = t(8071);
                const r = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    i = (e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name,
                    o = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    s = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = (0, a.M)(`${e}.${t}`, window);
                                return r(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    l = (e) => {
                        const u = ((e) => {
                                const u = (0, n.F)(),
                                    t = u.caller,
                                    a = u.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: o(r, e || ''), resId: a };
                            })(),
                            t = u.modelPrefix,
                            i = e.split('.');
                        if (i.length > 0) {
                            const e = [i[0]];
                            return (
                                i.reduce((u, n) => {
                                    const i = (0, a.M)(o(t, `${u}.${n}`), window);
                                    return r(i) ? (e.push(i.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
            },
            6267: (e, u, t) => {
                var n = t(70),
                    a = t(6364),
                    r = t(7363),
                    i = t.n(r),
                    o = t(1533),
                    s = t.n(o),
                    l = t(6483),
                    c = t.n(l);
                let E, d, A, F, _;
                (!(function (e) {
                    ((e.Init = 'init'),
                        (e.Appear = 'appear'),
                        (e.ForceComplete = 'force-complete'),
                        (e.Complete = 'complete'),
                        (e.ForceDisappear = 'force-disappear'),
                        (e.Disappear = 'disappear'));
                })(E || (E = {})),
                    (function (e) {
                        ((e.Micro = 'micro'), (e.Mini = 'mini'), (e.Normal = 'normal'));
                    })(d || (d = {})),
                    (function (e) {
                        ((e[(e.Micro = 155)] = 'Micro'),
                            (e[(e.Mini = 270)] = 'Mini'),
                            (e[(e.Normal = 365)] = 'Normal'));
                    })(A || (A = {})),
                    (function (e) {
                        ((e[(e.Mini = 65)] = 'Mini'), (e[(e.Normal = 186)] = 'Normal'));
                    })(F || (F = {})),
                    (function (e) {
                        ((e[(e.None = 0)] = 'None'), (e[(e.List = 1)] = 'List'), (e[(e.Bonus = 2)] = 'Bonus'));
                    })(_ || (_ = {})));
                const m = (e) => ({
                        backgroundImage: `url(${R.images.gui.maps.icons.missions.icons.$dyn(`c_32_${e}_silver`)})`,
                    }),
                    D = (e) => e.every((e) => e.value.completed),
                    p = (e) => (e === d.Normal ? eu : e === d.Micro ? iu : (d.Mini, ru)),
                    C = (e) => e.map((e) => e.value.currentProgress).join('-'),
                    B = 'QuestList_base_4a',
                    g = 'QuestList_base__horizontal_ea';
                class h extends i().Component {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { animateDisappear: !1 }),
                            (this.appearFinishedCount = 0),
                            (this.indicateCompleteFinishedQuests = Array.from(
                                Array(this.props.quests.length),
                                () => !1,
                            )),
                            (this.disappearFinishedCount = 0),
                            (this.currentProgressHash = ''),
                            (this.handleAnimationEvent = (e, u) => {
                                const t = this.props,
                                    n = t.quests,
                                    a = t.indicateCompleteQuests,
                                    r = t.onDisappear,
                                    i = t.onAppear;
                                var o, s;
                                (e === E.Appear &&
                                    (this.appearFinishedCount++,
                                    this.appearFinishedCount > n.length && (this.appearFinishedCount = 1),
                                    this.appearFinishedCount === n.length && i()),
                                    e === E.Complete &&
                                        ((this.indicateCompleteFinishedQuests[u - 1] = !0),
                                        D(n) &&
                                            ((o = a),
                                            (s = this.indicateCompleteFinishedQuests),
                                            o.every((e, u) => !e.value || s[u])) &&
                                            this.setState({ animateDisappear: !0 })),
                                    e === E.Disappear &&
                                        (this.disappearFinishedCount++,
                                        this.disappearFinishedCount === n.length && r()));
                            }));
                    }
                    componentDidUpdate(e) {
                        (this.props.animateDisappear !== e.animateDisappear &&
                            this.setState({ animateDisappear: this.props.animateDisappear }),
                            (this.currentProgressHash = C(this.props.quests)));
                    }
                    render() {
                        const e = this.props,
                            u = e.quests,
                            t = e.indicateCompleteQuests,
                            n = e.cardType,
                            a = e.innerRef,
                            r = e.onClick,
                            o = e.onMouseEnter,
                            s = this.state.animateDisappear,
                            l = p(n),
                            E = n === d.Micro || n === d.Mini;
                        return i().createElement(
                            'div',
                            { className: c()(B, { [g]: E }), ref: a },
                            u.map((e, n) =>
                                i().createElement(l, {
                                    position: n + 1,
                                    maxPosition: u.length,
                                    key: e.value.id,
                                    quest: e.value,
                                    onAnimationEvent: this.handleAnimationEvent,
                                    animateComplete: !this.indicateCompleteFinishedQuests[n] && t[n].value,
                                    animateDisappear: s,
                                    onClick: r,
                                    onMouseEnter: o,
                                    disableProgressbarDelta: this.currentProgressHash === C(this.props.quests),
                                }),
                            ),
                        );
                    }
                }
                const b = h,
                    v = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let w, f;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(w || (w = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(f || (f = {})));
                const y = ({ size: e = w.Default }) => {
                        const u = c()(v.background, v[`background__${e}`]);
                        return i().createElement('div', { className: u });
                    },
                    S = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    M = ({ size: e }) => {
                        const u = c()(S.base, S[`base__${e}`]);
                        return i().createElement('div', { className: u });
                    },
                    k = {
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
                    O = (0, r.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: a, withoutBounce: r }) => {
                            const o = c()(
                                    k.base,
                                    k[`base__${e}`],
                                    t && k.base__disabled,
                                    a && k.base__finished,
                                    r && k.base__withoutBounce,
                                ),
                                s = !t && !a;
                            return i().createElement(
                                'div',
                                { className: o, style: n, ref: u },
                                i().createElement('div', { className: k.pattern }),
                                i().createElement('div', { className: k.gradient }),
                                s && i().createElement(M, { size: e }),
                            );
                        },
                    ),
                    T = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(n));
                        };
                    };
                let I, P;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(I || (I = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(P || (P = {})));
                const N = 'ProgressBarDeltaGrow_base_7e',
                    x = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    L = 'ProgressBarDeltaGrow_glow_68',
                    Q = (e) => (e ? { left: 0 } : { right: 0 }),
                    z = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    $ = (e) => ({ transitionDuration: `${e}ms` }),
                    U = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: a,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            className: E,
                        }) => {
                            const d = o < n,
                                A = (0, r.useState)(I.Idle),
                                F = A[0],
                                _ = A[1],
                                m = F === I.End,
                                D = F === I.Idle,
                                p = F === I.Grow,
                                C = F === I.Shrink,
                                B = (0, r.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                ),
                                g = (0, r.useCallback)(
                                    (e, u) =>
                                        T(() => {
                                            B(e);
                                        }, u),
                                    [B],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return D
                                        ? g(I.Grow, u)
                                        : p
                                          ? g(I.Shrink, e)
                                          : C
                                            ? g(I.End, e)
                                            : void (m && s && s());
                            }, [g, t, m, p, D, C, s, u, e]);
                            const h = (0, r.useMemo)(() => Object.assign({ width: '100%' }, $(e), Q(d)), [d, e]),
                                b = (0, r.useMemo)(() => Object.assign({ width: '0%' }, $(e), Q(d)), [d, e]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, z(d, n), $(e)), [n, d, e]),
                                w = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - n)}%` }, z(d, n), $(e)),
                                    [n, d, o, e],
                                );
                            if (m) return null;
                            const f = c()(N, E, d && 0 === o && x);
                            return i().createElement(
                                'div',
                                { style: D ? v : w, className: f },
                                i().createElement(
                                    'div',
                                    { style: C ? b : h, className: L },
                                    i().createElement(M, { size: a }),
                                ),
                            );
                        },
                    ),
                    j = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: o,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                d = (0, r.useState)(!1),
                                A = d[0],
                                F = d[1],
                                _ = (0, r.useCallback)(
                                    (e) => {
                                        (e === I.Shrink && F(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                m = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(O, {
                                    size: u,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: o,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: A ? D : m,
                                }),
                                t >= 0 &&
                                    i().createElement(U, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: _,
                                        freezed: s.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    V = 'ProgressBarDeltaSimple_base_6c',
                    q = 'ProgressBarDeltaSimple_delta_99',
                    G = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: a,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < n,
                                E = (0, r.useState)(P.Idle),
                                d = E[0],
                                A = E[1],
                                F = d === P.In,
                                _ = d === P.End,
                                m = d === P.Idle,
                                D = (0, r.useCallback)(
                                    (e) => {
                                        (A(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, r.useEffect)(() => {
                                if (m && !t) {
                                    return T(() => {
                                        D(P.In);
                                    }, u);
                                }
                            }, [D, t, m, u]),
                                (0, r.useEffect)(() => {
                                    if (F) {
                                        return T(() => {
                                            (s && s(), D(P.End));
                                        }, e + u);
                                    }
                                }, [D, F, s, u, e]));
                            const p = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${c ? o : n}%` }),
                                    [n, c, o],
                                );
                            return _
                                ? null
                                : i().createElement(
                                      'div',
                                      { className: V, style: B },
                                      i().createElement(
                                          'div',
                                          { style: m ? p : C, className: q },
                                          i().createElement(M, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    W = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: o,
                            animationSettings: s,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, e],
                            );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(O, {
                                    size: u,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: o,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    i().createElement(G, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    K = ['onComplete', 'onEndAnimation'];
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const Y = (0, r.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, K);
                        const a = (0, r.useState)(!1),
                            o = a[0],
                            s = a[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === n.to;
                                (e !== o && s(e), e && u && u(), t && t());
                            }, [o, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case f.Simple:
                                return i().createElement(W, H({}, n, { onEndAnimation: l, isComplete: o }));
                            case f.Growing:
                                return i().createElement(j, H({}, n, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Z = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: a }) => {
                        const o = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            s = 100 === u;
                        return (
                            (0, r.useEffect)(() => {
                                s && a && a();
                            }, [s, a]),
                            i().createElement(O, { size: e, disabled: n, baseStyles: o, isComplete: s, lineRef: t })
                        );
                    },
                    X = ['onEndAnimation'];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const ee = (0, r.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, X);
                    const n = (0, r.useRef)({}),
                        a = (0, r.useCallback)(() => {
                            ((n.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = o),
                        i().createElement(
                            Y,
                            J({}, t, {
                                onEndAnimation: a,
                                key: `${o}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: o,
                            }),
                        )
                    );
                });
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const te = (0, r.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: a,
                            additionalKey: r,
                            animationSettings: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (a === u)
                                return i().createElement(Z, {
                                    key: `${a}-${u}-${r}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: c,
                                });
                            const E = {
                                from: a,
                                to: u,
                                size: e,
                                additionalKey: r,
                                lineRef: t,
                                disabled: n,
                                animationSettings: o,
                                onComplete: c,
                                onEndAnimation: s,
                                onChangeAnimationState: l,
                            };
                            return o.withStack
                                ? i().createElement(ee, E)
                                : i().createElement(Y, ue({ key: `${a}-${u}-${r}` }, E));
                        },
                    ),
                    ne = (e) => {
                        var u, t, n, a, r, i, o, s, l, c, E, d, A, F, _, m, D, p, C, B;
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
                            '--progress-pattern-border-size': null != (o = e.pattern.borderSize) ? o : '1rem',
                            '--progress-pattern-gradient':
                                null != (s = e.pattern.gradient)
                                    ? s
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (l = e.pattern.gradientFinished)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (E = null == (d = e.glowSettings) ? void 0 : d.width) ? E : '60rem',
                            '--progress-glow-height':
                                null != (A = null == (F = e.glowSettings) ? void 0 : F.height) ? A : '100rem',
                            '--progress-glow-small-width':
                                null != (_ = null == (m = e.glowSettings) ? void 0 : m.smallWidth) ? _ : '44rem',
                            '--progress-glow-small-height':
                                null != (D = null == (p = e.glowSettings) ? void 0 : p.smallHeight) ? D : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (C = null == (B = e.glowSettings) ? void 0 : B.mixBlendMode) ? C : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    ae = (e, u, t) => (t < e ? e : t > u ? u : t),
                    re = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (ae(0, u, t) / u) * 100;
                        }
                        return e;
                    };
                const ie = {
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
                    oe = {
                        freezed: !1,
                        withStack: !1,
                        type: f.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    se = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = ie,
                            size: t = w.Default,
                            animationSettings: n = oe,
                            disabled: a = !1,
                            withoutBackground: o = !1,
                            value: s,
                            deltaFrom: l,
                            additionalKey: E,
                            lineRef: d,
                            onChangeAnimationState: A,
                            onEndAnimation: F,
                            onComplete: _,
                            className: m,
                        }) => {
                            const D = (function (e, u, t) {
                                return (0, r.useMemo)(() => {
                                    const n = (ae(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: re(n, u, t) };
                                }, [t, u, e]);
                            })(s, e, l);
                            return i().createElement(
                                'div',
                                { className: c()(v.base, m, v[`base__${t}`]), style: ne(u) },
                                !o && i().createElement(y, { size: t }),
                                i().createElement(te, {
                                    size: t,
                                    lineRef: d,
                                    disabled: a,
                                    value: D.value,
                                    deltaFrom: D.deltaFrom,
                                    additionalKey: E,
                                    animationSettings: n,
                                    onEndAnimation: F,
                                    onChangeAnimationState: A,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    le = 'Countdown_base_6c',
                    ce = 'Countdown_icon_cb',
                    Ee = 'Countdown_time_96';
                var de = t(2993);
                const Ae = ({ countdown: e, noIcon: u }) =>
                    i().createElement(
                        'div',
                        { className: le },
                        !u && i().createElement('div', { className: ce }),
                        i().createElement(
                            'div',
                            { className: Ee },
                            i().createElement(de.Z, {
                                startValue: e,
                                hourFormat: R.strings.quests.general.countdown.timer_hrs_only(),
                                roundUpHours: !0,
                            }),
                        ),
                    );
                var Fe = t(7902),
                    _e = t(9916);
                const me = [
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
                function De(e) {
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
                const pe = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _e.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Ce = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            A = e.decoratorId,
                            F = void 0 === A ? 0 : A,
                            _ = e.isEnabled,
                            m = void 0 === _ || _,
                            D = e.targetId,
                            p = void 0 === D ? 0 : D,
                            C = e.onShow,
                            B = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, me);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, r.useMemo)(() => p || (0, Fe.F)().resId, [p]),
                            v = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (pe(t, F, { isMouseEvent: !0, on: !0, arguments: De(n) }, b),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, F, n, b, C]),
                            w = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        pe(t, F, { on: !1 }, b),
                                        h.current.isVisible && B && B(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, F, b, B]),
                            f = (0, r.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', f, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === m && w();
                            }, [m, w]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ));
                        return m
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(h.current.timeoutId),
                                                      (h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      a && a(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (w(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === d && w(), null == s || s(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === d && w(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : u;
                        var y;
                    };
                class Be extends i().Component {
                    constructor(e) {
                        (super(e),
                            (this.APPEAR_DURATION = 0),
                            (this.COMPLETE_DURATION = 0),
                            (this.DISAPPEAR_DURATION = 0),
                            (this.CARD_POSITION_DELAY = 0),
                            (this.state = { animateAppear: !1, animateComplete: !1, animateDisappear: !1 }),
                            (this.tooltipArgs = {}),
                            (this.animationTimeout = null),
                            (this.positionTimeout = null),
                            (this.componentDidMount = () => {
                                this.props.animateDisappear && !this.state.animateDisappear
                                    ? this.nextAnimation(E.ForceDisappear)
                                    : this.nextAnimation(E.Init);
                            }),
                            (this.componentDidUpdate = (e) => {
                                e !== this.props &&
                                    (this.props.animateComplete && !this.state.animateComplete
                                        ? this.nextAnimation(E.ForceComplete)
                                        : this.props.animateDisappear &&
                                          !this.state.animateDisappear &&
                                          this.nextAnimation(E.ForceDisappear),
                                    e.animateDisappear &&
                                        !this.props.animateDisappear &&
                                        this.setState(
                                            { animateAppear: !1, animateComplete: !1, animateDisappear: !1 },
                                            () => {
                                                this.nextAnimation(E.Init);
                                            },
                                        ));
                            }),
                            (this.componentWillUnmount = () => {
                                this.clearTimeouts();
                            }),
                            (this.scheduleAnimationEvent = (e, u) => {
                                this.animationTimeout = window.setTimeout(() => {
                                    this.nextAnimation(e);
                                }, u);
                            }),
                            (this.clearTimeouts = () => {
                                (null !== this.animationTimeout &&
                                    (window.clearTimeout(this.animationTimeout), (this.animationTimeout = null)),
                                    null !== this.positionTimeout &&
                                        (window.clearTimeout(this.positionTimeout), (this.positionTimeout = null)));
                            }),
                            (this.nextAnimation = (e) => {
                                const u = this.props,
                                    t = u.onAnimationEvent,
                                    n = u.position;
                                (this.clearTimeouts(), t && t(e, n));
                                const a = n * this.CARD_POSITION_DELAY;
                                switch (e) {
                                    case E.Init:
                                        ((this.positionTimeout = window.setTimeout(() => {
                                            this.setState({ animateAppear: !0 });
                                        }, a)),
                                            this.scheduleAnimationEvent(E.Appear, a + this.APPEAR_DURATION));
                                        break;
                                    case E.Appear:
                                    case E.ForceComplete:
                                        this.props.animateComplete &&
                                            (this.setState({ animateComplete: !0, animateAppear: !0 }),
                                            this.scheduleAnimationEvent(E.Complete, a + this.COMPLETE_DURATION));
                                        break;
                                    case E.Complete:
                                    case E.ForceDisappear:
                                        if (this.props.animateDisappear) {
                                            (this.setState({ animateDisappear: !0 }),
                                                this.scheduleAnimationEvent(E.Disappear, this.DISAPPEAR_DURATION));
                                            break;
                                        }
                                }
                            }),
                            (this.tooltipArgs = { missionId: e.quest.id }));
                    }
                    renderCard() {
                        return i().createElement('div', null);
                    }
                    render() {
                        return i().createElement(
                            Ce,
                            {
                                contentId: R.views.lobby.missions.DailyQuestsTooltip('resId'),
                                args: this.tooltipArgs,
                                isEnabled: !0,
                            },
                            this.renderCard(),
                        );
                    }
                }
                Be.defaultProps = { position: 1, maxPosition: 1 };
                const ge = Be,
                    he = 'QuestCard_base__appearStart_dd',
                    be = 'QuestCard_base__appearEnd_d5',
                    ve = 'QuestCard_base__disappearEnd_34',
                    we = 'QuestCard_border_bg__appearStart_07',
                    fe = 'QuestCard_border_bg__appearEnd_6e',
                    ye = 'QuestCard_complete__blink_78',
                    Se = 'QuestCard_complete_bg__completeStart_68',
                    Me = 'QuestCard_complete_bg__completeEnd_dd',
                    ke = 'QuestCard_icon__completeStart_af',
                    Oe = 'QuestCard_icon__completeEnd_e0',
                    Te = 'QuestCard_base_01',
                    Ie = 'QuestCard_hoverBg_62',
                    Pe = 'QuestCard_base__complete_b5',
                    Re = 'QuestCard_base__bonus_f0',
                    Ne = 'QuestCard_border_00',
                    xe = 'QuestCard_border_bg_cb',
                    Le = 'QuestCard_complete_97',
                    Qe = 'QuestCard_complete_bg_89',
                    ze = 'QuestCard_content_3e',
                    $e = 'QuestCard_icon_7e',
                    Ue = 'QuestCard_icon_img_d7',
                    je = 'QuestCard_icon_img__check_2e',
                    Ve = 'QuestCard_description_6a',
                    qe = 'QuestCard_description_pad_right_b6',
                    Ge = 'QuestCard_progressCounter_3f',
                    We = 'QuestCard_progressCounter_current_af',
                    Ke = 'QuestCard_progressCounter_separator_6b',
                    He = 'QuestCard_progressCounter_total_50',
                    Ye = 'QuestCard_progressCounterComplete_86',
                    Ze = 'QuestCard_progressBar_26',
                    Xe = 'QuestCard_countdown_1a',
                    Je = Object.assign({}, oe, {
                        line: Object.assign({}, oe.line, { delay: 1e3 }),
                        delta: Object.assign({}, oe.delta, { delay: 1e3 }),
                    });
                const eu = class extends ge {
                        constructor(...e) {
                            (super(...e),
                                (this.APPEAR_DURATION = 800),
                                (this.COMPLETE_DURATION = 2500),
                                (this.DISAPPEAR_DURATION = 400),
                                (this.CARD_POSITION_DELAY = 100));
                        }
                        renderCard() {
                            const e = this.props,
                                u = e.position,
                                t = e.maxPosition,
                                n = e.quest,
                                a = e.animateComplete,
                                r = e.bonus,
                                o = e.countdown,
                                s = e.onClick,
                                l = e.onMouseEnter,
                                E = e.innerRef,
                                d = e.disableProgressbarDelta,
                                A = this.state,
                                F = A.animateAppear,
                                _ = A.animateComplete,
                                D = A.animateDisappear,
                                p = n.description,
                                C = n.currentProgress,
                                B = n.earned,
                                g = n.icon,
                                h = n.completed,
                                b = n.totalProgress,
                                v = `${systemLocale.toUpperCase(p[0])}${p.slice(1)}`,
                                f = b > 0,
                                y = { transform: D ? `translateY(${60 * (t - u + 1) * 1.5}rem)` : void 0 };
                            return i().createElement(
                                'div',
                                {
                                    className: c()(Te, he, { [Pe]: h, [Re]: r }, { [be]: F, [ve]: D }),
                                    style: y,
                                    onClick: s,
                                    onMouseEnter: l,
                                    ref: E,
                                },
                                i().createElement(
                                    'div',
                                    { className: Ne },
                                    i().createElement('div', { className: c()(xe, we, { [fe]: F }) }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: c()(Le, { [ye]: _ }) },
                                    i().createElement('div', { className: c()(Qe, Se, { [Me]: _ }) }),
                                ),
                                i().createElement('div', { className: Ie }),
                                i().createElement(
                                    'div',
                                    { className: $e },
                                    i().createElement('div', {
                                        className: c()(Ue, { [je]: h }, { [ke]: a && h, [Oe]: _ }),
                                        style: h ? void 0 : m(g),
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: ze },
                                    i().createElement(
                                        'div',
                                        { className: c()(Ve, { [qe]: o }) },
                                        ((M = b ? 35 : 70),
                                        (S = v).length > M ? S.slice(0, M).split(' ').slice(0, -1).join(' ') + '…' : S),
                                    ),
                                    f &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement(
                                                'div',
                                                { className: c()(Ge, { [Ye]: h }) },
                                                i().createElement('span', { className: We }, C),
                                                i().createElement('span', { className: Ke }, '/'),
                                                i().createElement('span', { className: He }, b),
                                            ),
                                            i().createElement(
                                                'div',
                                                { className: Ze },
                                                i().createElement(se, {
                                                    animationSettings: Je,
                                                    size: w.Small,
                                                    value: C,
                                                    deltaFrom: d ? void 0 : C - B,
                                                    maxValue: b,
                                                }),
                                            ),
                                        ),
                                ),
                                !h &&
                                    o &&
                                    i().createElement(
                                        'div',
                                        { className: Xe },
                                        i().createElement(Ae, { countdown: o }),
                                    ),
                            );
                            var S, M;
                        }
                    },
                    uu = {
                        base__appearStart: 'IconQuestCardMini_base__appearStart_b2',
                        base__appearEnd: 'IconQuestCardMini_base__appearEnd_75',
                        base__disappearStart: 'IconQuestCardMini_base__disappearStart_cb',
                        border_bg__appearStart: 'IconQuestCardMini_border_bg__appearStart_34',
                        border_bg__appearEnd: 'IconQuestCardMini_border_bg__appearEnd_81',
                        complete__blink: 'IconQuestCardMini_complete__blink_31',
                        'bg-blink': 'IconQuestCardMini_bg-blink_e4',
                        complete_bg__completeStart: 'IconQuestCardMini_complete_bg__completeStart_e2',
                        complete_bg__completeEnd: 'IconQuestCardMini_complete_bg__completeEnd_d2',
                        check__completeStart: 'IconQuestCardMini_check__completeStart_4e',
                        check__completeEnd: 'IconQuestCardMini_check__completeEnd_0d',
                        base: 'IconQuestCardMini_base_8a',
                        hoverBg: 'IconQuestCardMini_hoverBg_18',
                        base__complete: 'IconQuestCardMini_base__complete_c2',
                        base__bonus: 'IconQuestCardMini_base__bonus_df',
                        border: 'IconQuestCardMini_border_d2',
                        border_bg: 'IconQuestCardMini_border_bg_47',
                        icon: 'IconQuestCardMini_icon_f7',
                        check: 'IconQuestCardMini_check_66',
                        complete: 'IconQuestCardMini_complete_4a',
                        complete_bg: 'IconQuestCardMini_complete_bg_30',
                    },
                    tu = {
                        base__appearStart: 'IconQuestCardMicro_base__appearStart_4e',
                        base__appearEnd: 'IconQuestCardMicro_base__appearEnd_1f',
                        base__disappearStart: 'IconQuestCardMicro_base__disappearStart_b0',
                        border_bg__appearStart: 'IconQuestCardMicro_border_bg__appearStart_f9',
                        border_bg__appearEnd: 'IconQuestCardMicro_border_bg__appearEnd_2a',
                        complete__blink: 'IconQuestCardMicro_complete__blink_25',
                        'bg-blink': 'IconQuestCardMicro_bg-blink_bc',
                        complete_bg__completeStart: 'IconQuestCardMicro_complete_bg__completeStart_9a',
                        complete_bg__completeEnd: 'IconQuestCardMicro_complete_bg__completeEnd_3c',
                        check__completeStart: 'IconQuestCardMicro_check__completeStart_d4',
                        check__completeEnd: 'IconQuestCardMicro_check__completeEnd_df',
                        base: 'IconQuestCardMicro_base_a6',
                        hoverBg: 'IconQuestCardMicro_hoverBg_60',
                        base__complete: 'IconQuestCardMicro_base__complete_b2',
                        base__bonus: 'IconQuestCardMicro_base__bonus_ea',
                        border: 'IconQuestCardMicro_border_b6',
                        border_bg: 'IconQuestCardMicro_border_bg_03',
                        icon: 'IconQuestCardMicro_icon_2a',
                        check: 'IconQuestCardMicro_check_3a',
                        complete: 'IconQuestCardMicro_complete_8d',
                        complete_bg: 'IconQuestCardMicro_complete_bg_94',
                    };
                function nu() {
                    return (
                        (nu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        nu.apply(this, arguments)
                    );
                }
                class au extends ge {
                    constructor(...e) {
                        (super(...e),
                            (this.APPEAR_DURATION = 300),
                            (this.COMPLETE_DURATION = 2500),
                            (this.DISAPPEAR_DURATION = 300),
                            (this.CARD_POSITION_DELAY = 100));
                    }
                    renderCard() {
                        const e = this.props,
                            u = e.position,
                            t = e.quest,
                            n = e.animateComplete,
                            a = e.bonus,
                            r = e.countdown,
                            o = e.onClick,
                            s = e.onMouseEnter,
                            l = e.micro,
                            E = e.innerRef,
                            d = this.state,
                            A = d.animateAppear,
                            F = d.animateComplete,
                            _ = d.animateDisappear,
                            D = t.icon,
                            p = t.completed,
                            C = { transform: _ ? `translateX(${-(60 * u)}rem)` : void 0 },
                            B = l ? tu : uu;
                        return i().createElement(
                            'div',
                            {
                                className: c()(
                                    B.base,
                                    B.base__appearStart,
                                    { [B.base__complete]: p, [B.base__bonus]: a },
                                    { [B.base__appearEnd]: A, [B.base__disappearStart]: _ },
                                ),
                                style: C,
                                onClick: o,
                                onMouseEnter: s,
                                ref: E,
                            },
                            i().createElement('div', { className: B.hoverBg }),
                            i().createElement(
                                'div',
                                { className: B.border },
                                i().createElement('div', {
                                    className: c()(B.border_bg, B.border_bg__appearStart, {
                                        [B.border_bg__appearEnd]: A,
                                    }),
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: c()(B.complete, { [B.complete__blink]: F }) },
                                i().createElement('div', {
                                    className: c()(B.complete_bg, B.complete_bg__completeStart, {
                                        [B.complete_bg__completeEnd]: F,
                                    }),
                                }),
                            ),
                            i().createElement('div', { className: B.icon, style: m(D) }),
                            p &&
                                i().createElement('div', {
                                    className: c()(B.check, { [B.check__completeStart]: n, [B.check__completeEnd]: F }),
                                }),
                            !p && r && i().createElement(Ae, { countdown: r, noIcon: !0 }),
                        );
                    }
                }
                const ru = au,
                    iu = (e) => i().createElement(au, nu({}, e, { micro: !0 }));
                function ou(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const su = 'Widget_base_f1',
                    lu = 'Widget_base__alignEnd_7b',
                    cu = () => {
                        ou(R.sounds.highlight());
                    },
                    Eu = ({
                        quests: e,
                        visible: u,
                        onQuestClick: t,
                        indicateCompleteQuests: n,
                        countdown: o,
                        onDisappear: s,
                    }) => {
                        const l = e.slice(0, 3),
                            F = n.slice(0, 3),
                            m = e[3] && e[3].value,
                            C = n[3] && n[3].value,
                            B = D(l),
                            g = ((e) => e.reduce((e, u) => (u.value ? e + 1 : e), 0))(F),
                            h = (0, r.useState)(
                                (({
                                    allStandardQuestsComplete: e,
                                    standardQuestsToBeIndicatedComplete: u,
                                    bonusQuest: t,
                                    bonusQuestIndicateComplete: n,
                                    visible: a,
                                }) => {
                                    if (a) {
                                        if (!e || u > 0) return _.List;
                                        if ((t && !t.completed) || n) return _.Bonus;
                                    }
                                    return _.None;
                                })({
                                    allStandardQuestsComplete: B,
                                    standardQuestsToBeIndicatedComplete: g,
                                    bonusQuest: m,
                                    bonusQuestIndicateComplete: C,
                                    visible: u,
                                }),
                            ),
                            v = h[0],
                            w = h[1],
                            f = (0, r.useRef)(null),
                            y = (0, r.useCallback)(() => {
                                setTimeout(() => {
                                    if (f.current) {
                                        const e = f.current.getBoundingClientRect();
                                        viewEnv.setInputArea(
                                            viewEnv.pxToRem(e.x),
                                            viewEnv.pxToRem(e.y),
                                            viewEnv.pxToRem(e.width),
                                            viewEnv.pxToRem(e.height),
                                        );
                                    }
                                }, 1e3);
                            }, [f]),
                            S = (0, r.useCallback)(() => {
                                u ? (w(_.Bonus), y()) : s();
                            }, [u, w, y, s]),
                            M = (0, r.useCallback)(
                                (e) => {
                                    (e === E.Appear && y(), e === E.Disappear && u && s());
                                },
                                [y, s, u],
                            ),
                            k = (0, r.useCallback)(() => {
                                (ou(R.sounds.play()), t());
                            }, [t]);
                        ((0, r.useEffect)(() => {
                            u &&
                                (g > 0
                                    ? ou(B ? R.sounds.dq_widget_bonus_reveal() : R.sounds.dq_widget_quest_complete())
                                    : m && m.completed
                                      ? ou(R.sounds.dq_widget_bonus_complete())
                                      : ou(R.sounds.dq_widget_slide_in()));
                        }, [u, g, B, m]),
                            (0, r.useEffect)(() => {
                                u && !B && w(_.List);
                            }, [u, B]));
                        const O = ((e) =>
                                e <= A.Micro ? d.Micro : e <= A.Mini ? d.Mini : e <= A.Normal ? d.Normal : d.Micro)(
                                (0, a.eI)().width,
                            ),
                            T = p(O);
                        return i().createElement(
                            'div',
                            { className: c()(su, { [lu]: v === _.Bonus && O === d.Normal }) },
                            v === _.List &&
                                i().createElement(b, {
                                    innerRef: f,
                                    quests: l,
                                    indicateCompleteQuests: F,
                                    cardType: O,
                                    animateDisappear: !u,
                                    onClick: k,
                                    onMouseEnter: cu,
                                    onAppear: y,
                                    onDisappear: S,
                                }),
                            v === _.Bonus &&
                                m &&
                                i().createElement(T, {
                                    bonus: !0,
                                    innerRef: f,
                                    quest: m,
                                    countdown: o,
                                    animateComplete: m.completed,
                                    animateDisappear: m.completed || !u,
                                    onClick: k,
                                    onMouseEnter: cu,
                                    onAnimationEvent: M,
                                }),
                        );
                    };
                n.O.view.extraSize.set(0, 0);
                const du = () => {
                    const e = (0, a.tT)();
                    return i().createElement(Eu, e);
                };
                engine.whenReady.then(() => {
                    s().render(i().createElement(du, null), document.getElementById('root'));
                });
            },
            2993: (e, u, t) => {
                t.d(u, { Z: () => l });
                var n = t(7044),
                    a = t(6364),
                    r = t(7363),
                    i = t.n(r),
                    o = t(5572),
                    s = t(1272);
                const l = ({
                    startValue: e,
                    hourFormat: u = R.strings.quests.general.countdown.timer_hrs(),
                    minuteFormat: t = R.strings.quests.general.countdown.timer_min(),
                    roundUpHours: r = !1,
                    pendingDotCount: l = 5,
                    className: c,
                }) => {
                    const E = e > n.dV + n.yR ? n.yR : 1,
                        d = (0, a.au)(e, E);
                    return i().createElement(
                        'div',
                        { className: c },
                        d > 0
                            ? ((e, u, t, a) => {
                                  const r = e < n.dV ? t : u;
                                  return (0, o.G)(r, e, a);
                              })(d, u, t, r)
                            : i().createElement(s.Z, { count: l, delay: 500 }),
                    );
                };
            },
            1272: (e, u, t) => {
                t.d(u, { Z: () => r });
                var n = t(7363),
                    a = t.n(n);
                const r = ({ className: e, count: u, delay: t }) => {
                    const r = (0, n.useState)(1),
                        i = r[0],
                        o = r[1];
                    return (
                        (0, n.useEffect)(() => {
                            const e = setInterval(() => {
                                o((e) => (e <= u ? e + 1 : 1));
                            }, t);
                            return () => {
                                clearInterval(e);
                            };
                        }),
                        a().createElement('span', { className: e }, '. '.repeat(i))
                    );
                };
            },
            5572: (e, u, t) => {
                t.d(u, { G: () => n });
                const n = (e, u, t) => {
                    const n = Math.floor(u / 3600).toString(),
                        a = Math.floor((u % 3600) / 60).toString(),
                        r = Math.floor(u % 60).toString();
                    return e
                        .replace('%HH', n.padStart(2, '0'))
                        .replace('%H', t && Number(a) >= 30 ? (Number(n) + 1).toString() : n)
                        .replace('%MM', a.padStart(2, '0'))
                        .replace('%M', a.toString())
                        .replace('%SS', r.padStart(2, '0'))
                        .replace('%S', r);
                };
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
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
        (__webpack_require__.j = 880),
        (() => {
            var e = { 880: 0, 224: 0, 536: 0 };
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
                        ((a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [45], () => __webpack_require__(6267));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
