(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var r = t(6483),
                    n = t.n(r),
                    a = t(7727),
                    s = t(7363),
                    i = t.n(s),
                    o = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: c,
                    mixClass: d,
                    soundHover: _,
                    soundClick: m,
                    onMouseEnter: E,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: D,
                    onMouseLeave: p,
                    onClick: g,
                }) => {
                    const h = (0, s.useRef)(null),
                        C = (0, s.useState)(t),
                        B = C[0],
                        b = C[1],
                        f = (0, s.useState)(!1),
                        v = f[0],
                        w = f[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                B && null !== h.current && !h.current.contains(e.target) && b(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, s.useEffect)(() => {
                            b(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: h,
                                className: n()(
                                    o.Z.base,
                                    o.Z[`base__${r}`],
                                    c && o.Z.base__disabled,
                                    u && o.Z[`base__${u}`],
                                    B && o.Z.base__focus,
                                    v && o.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== _ && (0, a.G)(_), E && E(e));
                                },
                                onMouseMove: function (e) {
                                    A && A(e);
                                },
                                onMouseUp: function (e) {
                                    c || (D && D(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== m && (0, a.G)(m),
                                        F && F(e),
                                        t && (c || (h.current && (h.current.focus(), b(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (p && p(e), w(!1));
                                },
                                onClick: function (e) {
                                    c || (g && g(e));
                                },
                            },
                            r !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: o.Z.back }),
                                    i().createElement('span', { className: o.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: n()(o.Z.state, o.Z.state__default) },
                                i().createElement('span', { className: o.Z.stateDisabled }),
                                i().createElement('span', { className: o.Z.stateHighlightHover }),
                                i().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = c;
            },
            2106: (e, u, t) => {
                'use strict';
                let r, n;
                t.d(u, { L: () => r, q: () => n }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(r || (r = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(n || (n = {}));
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var r = t(6483),
                    n = t.n(r),
                    a = t(3649),
                    s = t(7363),
                    i = t.n(s),
                    o = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: r = a.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                    const c = l && e ? (0, a.WU)(u, e) : u;
                    return i().createElement(
                        s.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            i().createElement(
                                'div',
                                { className: n()(o.Z.base, t), key: `${u}-${l}` },
                                (0, a.Uw)(u, r, e).map((e, u) =>
                                    i().createElement(s.Fragment, { key: `${u}-${e}` }, e),
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
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => a, onScaleUpdated: () => s });
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    s = (0, r.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function r() {
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
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${u}`,
                                            s = l[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            r(),
                                            () => {
                                                n &&
                                                    (s(),
                                                    window.removeEventListener(a, i),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (n = !1));
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
                                (e.enabled = !1), r();
                            },
                            enable() {
                                (e.enabled = !0), r();
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
                t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => s,
                        getSize: () => a,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var r = t(527),
                    n = t(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            2493: (e, u, t) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => r });
            },
            2472: (e, u, t) => {
                'use strict';
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => r });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => a });
                var r = t(5959),
                    n = t(514);
                const a = { view: t(7641), client: r, sound: n.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s });
                var r = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, r.playSound)(n[u])), e), {}),
                    s = { play: Object.assign({}, a, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var r = t(2472);
                const n = {
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        arabic2roman: () => y,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => S,
                        events: () => s.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getFontNames: () => w,
                        getScale: () => D,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => b,
                        isFocused: () => C,
                        pxToRem: () => p,
                        remToPx: () => g,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => N,
                    });
                var r = t(9690),
                    n = t(3722),
                    a = t(6112),
                    s = t(6538),
                    i = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
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
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = r.cg,
                    S = Object.keys(a.W).reduce(
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
                    N = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const r = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    a = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let r, n;
                t.d(u, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(n || (n = {}));
            },
            3368: () => {
                !(function () {
                    let e,
                        u,
                        t,
                        r,
                        n,
                        a,
                        s,
                        i = -1;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            t.target.select &&
                                -1 === i &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === i && t.target.select && t.target === e && (i = e.selectionStart), i > -1)) {
                                const r = Math.min(Math.max(t.x, u.left), u.right),
                                    n = Math.min(Math.max(t.y, u.top), u.bottom),
                                    a = document.createEvent('MouseEvent');
                                a.initMouseEvent('mousedown', !0, !0, null, 1, r, n, r, n, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(a);
                                const s = e.selectionEnd;
                                s > i ? e.setSelectionRange(i, s, 'forward') : e.setSelectionRange(s, i, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (i = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (t = e.target),
                                (r = e.target.value),
                                (n = t.selectionStart),
                                (a = -1 !== r.lastIndexOf(' ', n) ? r.lastIndexOf(' ', n) + 1 : 0),
                                (s = -1 !== r.indexOf(' ', n) ? r.indexOf(' ', n) : r.length),
                                t.setSelectionRange(a, s, 'forward'));
                        });
                })(),
                    (function () {
                        let e = null;
                        document.addEventListener('mousedown', (u) => {
                            document.getSelection().empty(),
                                0 !== u.button ||
                                    u.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(u.x, u.y));
                        }),
                            document.addEventListener('mousemove', (u) => {
                                if (0 === u.button && !u.target.select && e) {
                                    const t = document.caretPositionFromPoint(u.x, u.y);
                                    if (!t.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, t.offsetNode, t.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            });
                    })();
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => i, cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let u = '';
                    for (let t = n.length - 1; t >= 0; t--) for (; e >= n[t]; ) (u += r[t]), (e -= n[t]);
                    return u;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) => (s ? `${e}` : a(e));
            },
            7727: (e, u, t) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { G: () => r });
            },
            3649: (e, u, t) => {
                'use strict';
                t.d(u, { BN: () => s, Uw: () => E, WU: () => a, e: () => i, v2: () => n, z4: () => o });
                var r = t(1281);
                let n;
                function a(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function s(e) {
                    return e.replace(/-/g, '_');
                }
                function i(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(n || (n = {}));
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
                    d = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? l : c, []),
                    _ = (() => {
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
                    E = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = n.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return m.includes(t)
                                          ? _(e)
                                          : 'ja' === t
                                            ? (0, r.D4)()
                                                  .parse(e)
                                                  .map((e) => o(e))
                                            : ((e, u = n.left) => {
                                                  let t = [];
                                                  const r =
                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                      a = o(e);
                                                  return (
                                                      d(a, /( )/, u).forEach((e) => (t = t.concat(d(e, r, n.left)))), t
                                                  );
                                              })(e, u);
                                  })(e, u),
                        );
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
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
                t.d(u, { B3: () => l, Z5: () => s.Z5, B0: () => i, ry: () => p });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                r.__instance = void 0;
                const n = r;
                var a = t(1358),
                    s = t(8613);
                let i;
                var o;
                ((o = i || (i = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    E = t(3138);
                const A = ['args'];
                function F(e, u, t, r, n, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(r, n);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            F(a, r, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(a, r, n, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, A);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    h = () => g(i.CLOSE),
                    C = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var B = t(7572);
                const b = n.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: B.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => g(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                _ = o.height,
                                m = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(_),
                                };
                            g(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: D(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, h);
                        },
                        handleViewEvent: g,
                        onBindingsReady: p,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => r, cy: () => n });
                const r = {
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
                    };
            },
            2231: (e, u, t) => {
                'use strict';
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => Se,
                        Bar: () => ve,
                        DefaultScroll: () => ye,
                        Direction: () => me,
                        defaultSettings: () => Ee,
                        useHorizontalScrollApi: () => pe,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => He, Bar: () => ke, Default: () => Oe, useVerticalScrollApi: () => Fe });
                var a = t(7363),
                    s = t.n(a);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, u, t) {
                    const r = (function (e, u) {
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
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                !(function (e) {
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
                })(c || (c = {}));
                const _ = o.O.client.getSize('rem'),
                    m = _.width,
                    E = _.height,
                    A = Object.assign({ width: m, height: E }, d(m, E, l)),
                    F = (0, a.createContext)(A),
                    D = ['children'],
                    p = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, D);
                        const r = (0, a.useContext)(F),
                            n = r.extraLarge,
                            s = r.large,
                            o = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            d = r.extraLargeWidth,
                            _ = r.largeWidth,
                            m = r.mediumWidth,
                            E = r.smallWidth,
                            A = r.extraSmallWidth,
                            p = r.extraLargeHeight,
                            g = r.largeHeight,
                            h = r.mediumHeight,
                            C = r.smallHeight,
                            B = r.extraSmallHeight,
                            b = { extraLarge: p, large: g, medium: h, small: C, extraSmall: B };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && s) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && d) return i(u, t, b);
                            if (t.largeWidth && _) return i(u, t, b);
                            if (t.mediumWidth && m) return i(u, t, b);
                            if (t.smallWidth && E) return i(u, t, b);
                            if (t.extraSmallWidth && A) return i(u, t, b);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && p) return u;
                                if (t.largeHeight && g) return u;
                                if (t.mediumHeight && h) return u;
                                if (t.smallHeight && C) return u;
                                if (t.extraSmallHeight && B) return u;
                            }
                        }
                        return null;
                    };
                (p.defaultProps = {
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
                }),
                    (0, a.memo)(p);
                const g = ({ children: e }) => {
                    const u = (0, a.useContext)(F),
                        t = (0, a.useState)(u),
                        r = t[0],
                        n = t[1],
                        i = (0, a.useCallback)((e, u) => {
                            const t = o.O.view.pxToRem(e),
                                r = o.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: r }, d(t, r, l)));
                        }, []),
                        c = (0, a.useCallback)(() => {
                            const e = o.O.client.getSize('px');
                            i(e.width, e.height);
                        }, [i]);
                    ((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        o.O.client.events.on('clientResized', i), o.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                o.O.client.events.off('clientResized', i),
                                    o.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [i, c],
                        );
                    const _ = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return s().createElement(F.Provider, { value: _ }, e);
                };
                var h = t(6483),
                    C = t.n(h),
                    B = t(926),
                    b = t.n(B);
                let f, v, w;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const y = () => {
                        const e = (0, a.useContext)(F),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return f.ExtraLarge;
                                    case e.large:
                                        return f.Large;
                                    case e.medium:
                                        return f.Medium;
                                    case e.small:
                                        return f.Small;
                                    case e.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case e.largeHeight:
                                        return w.Large;
                                    case e.mediumHeight:
                                        return w.Medium;
                                    case e.smallHeight:
                                        return w.Small;
                                    case e.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const N = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL_WIDTH,
                        [v.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [v.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [w.ExtraSmall]: '',
                        [w.Small]: b().SMALL_HEIGHT,
                        [w.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [w.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [f.ExtraSmall]: '',
                        [f.Small]: b().SMALL,
                        [f.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [f.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [f.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    I = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, S);
                        const n = y(),
                            a = n.mediaWidth,
                            i = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', x({ className: C()(t, N[a], M[i], L[o]) }, r), u);
                    },
                    T = ['children'],
                    k = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, T);
                        return s().createElement(g, null, s().createElement(I, t, u));
                    };
                var P = t(1533),
                    O = t.n(P),
                    H = t(7727);
                const V = {
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
                    W = [
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
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                class $ extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, H.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, H.G)(this.props.soundClick);
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
                            r = e.goto,
                            n = e.side,
                            a = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, W)),
                            m = C()(V.base, V[`base__${a}`], V[`base__${n}`], null == i ? void 0 : i.base),
                            E = C()(V.icon, V[`icon__${a}`], V[`icon__${n}`], null == i ? void 0 : i.icon),
                            A = C()(V.glow, null == i ? void 0 : i.glow),
                            F = C()(V.caption, V[`caption__${a}`], null == i ? void 0 : i.caption),
                            D = C()(V.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            z(
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
                                _,
                            ),
                            'info' !== a && s().createElement('div', { className: V.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: F }, u),
                            r && s().createElement('div', { className: D }, r),
                        );
                    }
                }
                $.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var U = t(5521),
                    G = t(9916);
                const j = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function q(e = U.n.NONE, u = j, t = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== U.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, r]);
                }
                var K = t(3403);
                let X;
                !(function (e) {
                    (e.Active = 'active'), (e.NoProgress = 'noProgress'), (e.NoVehicles = 'noVehicles');
                })(X || (X = {}));
                const Z = 'resources_well_progress_click_up',
                    Y = 'resources_well_progress_click_down',
                    Q = 'bp_highlight';
                var J = t(7712);
                function ee() {
                    return !1;
                }
                console.log;
                var ue = t(9174);
                function te(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const re = (e) => (0 === e ? window : window.subViews.get(e)),
                    ne = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: n, mocks: i }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, r) => {
                                        var n;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = re,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(e, u = 0) {
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
                                                const s = (e) => {
                                                    const n = t(u),
                                                        a = r.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const i = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return n.set(l, t), e && t(s(a)), l;
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
                                                                                    return te(e, u);
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
                                                                                          ? te(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(e = t()).done;

                                                        )
                                                            a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => ({
                                                root: e.object(),
                                                resourcesTabs: e.array('resourcesTabs'),
                                                vehicleInfo: e.object('vehicleInfo'),
                                                vehicleCounter: e.object('vehicleCounter'),
                                            }))({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const r = null != t ? t : i(u),
                                                            n = ue.LO.box(r, { equals: ee });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ue.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const r = null != t ? t : i(u),
                                                            n = ue.LO.box(r, { equals: ee });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ue.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const r = i(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = ue.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ue.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                a = Object.entries(n),
                                                                i = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = ue.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ue.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
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
                                            _ = { mode: e, model: d, externalModel: s, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && r ? r.controls(_) : u(_),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    _ = (0, a.useState)(e),
                                    m = _[0],
                                    E = _[1],
                                    A = (0, a.useState)(() => c(e, r, i)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? D(c(m, r, i)) : (d.current = !0);
                                    }, [i, m, r]),
                                    (0, a.useEffect)(() => {
                                        E(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    s().createElement(t.Provider, { value: F }, n)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('close'),
                        showHangar: e.createCallbackNoArgs('showHangar'),
                        loadResources: e.createCallback((e) => e, 'loadResources'),
                    })),
                    ae = ne[0],
                    se = ne[1],
                    ie = (e, u, t) => (t < e ? e : t > u ? u : t),
                    oe = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (u = e());
                                });
                            })),
                            () => {
                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    };
                function le(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const ce = [];
                function de(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), ce)
                    );
                }
                var _e = t(7030);
                let me;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(me || (me = {}));
                const Ee = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ae = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        forceTriggerMouseMove: s,
                    }) => {
                        const i = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return a <= n ? 0 : ie(n, a, t);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                c = void 0 === l ? Ee : l,
                                d = (0, a.useRef)(null),
                                _ = (0, a.useRef)(null),
                                m = (0, a.useRef)(!1),
                                E = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (
                                                var r,
                                                    n = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return le(e, u);
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
                                                                              ? le(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var r = 0;
                                                            return function () {
                                                                return r >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[r++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(r = n()).done;

                                            )
                                                (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, r) {
                                                let n,
                                                    a = !1,
                                                    s = 0;
                                                function i() {
                                                    n && clearTimeout(n);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function d() {
                                                        (s = Date.now()), t.apply(l, o);
                                                    }
                                                    a ||
                                                        (r && !n && d(),
                                                        i(),
                                                        void 0 === r && c > e
                                                            ? d()
                                                            : !0 !== u &&
                                                              (n = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === r ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                                    (o.cancel = function () {
                                                        i(), (a = !0);
                                                    }),
                                                    o
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                                })(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, _e.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), E.trigger('change', e), s && m.current && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                D = F[0],
                                p = F[1],
                                g = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = D.scrollPosition.get(),
                                            a = (null != (r = D.scrollPosition.goal) ? r : 0) - n;
                                        return i(e, u * t + a + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = d.current;
                                        r &&
                                            p.start({
                                                scrollPosition: i(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(r, D.scrollPosition.get()) },
                                            });
                                    },
                                    [p, c.animationConfig, D.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = _.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = g(u, e, r);
                                        h(a);
                                    },
                                    [h, g, c.step],
                                ),
                                B = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(r(e)),
                                            d.current && E.trigger('mouseWheel', e, D.scrollPosition, u(d.current));
                                    },
                                    [D.scrollPosition, C, E],
                                ),
                                b = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        oe(() => {
                                            const e = d.current;
                                            e &&
                                                (h(i(e, D.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [h, D.scrollPosition.goal],
                                ),
                                f = de(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = i(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && h(u, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            return (
                                (0, a.useEffect)(
                                    () => (
                                        window.addEventListener('resize', b),
                                        () => {
                                            window.removeEventListener('resize', b);
                                        }
                                    ),
                                    [b],
                                ),
                                (0, a.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !s) return;
                                    const u = () => {
                                            m.current = !0;
                                        },
                                        t = () => {
                                            m.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t);
                                        }
                                    );
                                }, [d]),
                                (0, a.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (_.current ? n(_.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? u(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: i,
                                        handleMouseWheel: B,
                                        applyScroll: h,
                                        applyStepTo: C,
                                        contentRef: d,
                                        wrapperRef: _,
                                        scrollPosition: p,
                                        animationScroll: D,
                                        recalculateContent: f,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [D.scrollPosition, h, C, E.off, E.on, f, B, p, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    Fe = Ae({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? me.Next : me.Prev),
                    });
                function De(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        n,
                    ];
                }
                const pe = Ae({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? me.Next : me.Prev),
                        forceTriggerMouseMove: o.O.view.forceTriggerMouseMove,
                    }),
                    ge = 'HorizontalBar_base__nonActive_82',
                    he = 'disable',
                    Ce = { pending: !1, offset: 0 },
                    Be = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    be = () => {},
                    fe = (e, u) => Math.max(20, e.offsetWidth * u),
                    ve = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Be, onDrag: r = be }) => {
                        const n = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, a.useState)(Ce),
                            E = m[0],
                            A = m[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [r],
                            ),
                            D = () => {
                                const u = c.current,
                                    t = d.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    o = ie(0, 1, a / (n - r)),
                                    _ = (u.offsetWidth - fe(u, s)) * o;
                                (t.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return i.current.classList.add(he), void l.current.classList.remove(he);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(he), void l.current.classList.add(he);
                                            var u, t;
                                            i.current.classList.remove(he), l.current.classList.remove(he);
                                        }
                                    })(_);
                            },
                            p = de(() => {
                                (() => {
                                    const u = d.current,
                                        t = c.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const s = Math.min(1, r / a);
                                    (u.style.width = `${fe(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(ge) : n.current.classList.remove(ge));
                                })(),
                                    D();
                            });
                        (0, a.useEffect)(() => oe(p)),
                            (0, a.useEffect)(
                                () =>
                                    oe(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = be;
                                        const r = () => {
                                            t(), (t = oe(p));
                                        };
                                        return (
                                            e.events.on('recalculateContent', p),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', p),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!E.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const a = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!a || !s) return;
                                        const i = c.current,
                                            o = d.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - E.offset - i.getBoundingClientRect().x,
                                            _ = (l / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: _ });
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        u(), F(Ce);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, E.offset, E.pending, r, F]);
                        const g = De((u) => e.applyStepTo(u), _, [e]),
                            h = g[0],
                            B = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const b = (e) => {
                            e.target.classList.contains(he) || (0, H.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: C()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: C()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(he) || 0 !== e.button || ((0, H.G)('play'), h(me.Next));
                                },
                                onMouseUp: B,
                                ref: i,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: C()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = d.current;
                                        r &&
                                            0 === u.button &&
                                            ((0, H.G)('play'),
                                            u.target === r
                                                ? F({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = d.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? me.Prev : me.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: d, className: C()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: C()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: C()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(he) || 0 !== e.button || ((0, H.G)('play'), h(me.Prev));
                                },
                                onMouseUp: B,
                                ref: l,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    we = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ye = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: C()(we.base, e.base) });
                            }, [r]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: C()(we.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: C()(we.defaultScrollArea, n) },
                                s().createElement(Se, { className: o, api: _, classNames: i }, e),
                            ),
                            s().createElement(ve, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Se = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => oe(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: C()(we.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: C()(we.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: C()(we.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (Se.Bar = ve), (Se.Default = ye);
                const xe = 'VerticalBar_base__nonActive_42',
                    Ne = 'disable',
                    Re = () => {},
                    Me = { pending: !1, offset: 0 },
                    Le = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Ie = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Te = (e, u) => Math.max(20, e.offsetHeight * u),
                    ke = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Le, onDrag: r = Re }) => {
                        const n = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, a.useState)(Me),
                            E = m[0],
                            A = m[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [r],
                            ),
                            D = de(() => {
                                const u = d.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const s = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${Te(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(xe) : n.current.classList.remove(xe)),
                                    s
                                );
                            }),
                            p = de(() => {
                                const u = c.current,
                                    t = d.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    o = ie(0, 1, a / (n - r)),
                                    _ = (u.offsetHeight - Te(u, s)) * o;
                                (t.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(Ne), void l.current.classList.remove(Ne);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(Ne), void l.current.classList.add(Ne);
                                            var u, t;
                                            i.current.classList.remove(Ne), l.current.classList.remove(Ne);
                                        }
                                    })(_);
                            }),
                            g = de(() => {
                                Ie(e, () => {
                                    D(), p();
                                });
                            });
                        (0, a.useEffect)(() => oe(g)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    Ie(e, () => {
                                        p();
                                    });
                                };
                                let t = Re;
                                const r = () => {
                                    t(), (t = oe(g));
                                };
                                return (
                                    e.events.on('recalculateContent', g),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', g),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!E.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        F(Me);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        Ie(e, (t) => {
                                            const n = c.current,
                                                a = d.current,
                                                s = e.getContainerSize();
                                            if (!n || !a || !s) return;
                                            const i = u.screenY - E.offset - n.getBoundingClientRect().y,
                                                o = (i / n.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, E.offset, E.pending, r, F]);
                        const h = De((u) => e.applyStepTo(u), _, [e]),
                            B = h[0],
                            b = h[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Ne) || (0, H.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: C()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: C()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ne) || 0 !== e.button || ((0, H.G)('play'), B(me.Next));
                                },
                                ref: i,
                                onMouseEnter: f,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: C()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = d.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            ((0, H.G)('play'),
                                            u.target === r
                                                ? F({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y })
                                                : ((n = u.screenY > r.getBoundingClientRect().y ? me.Prev : me.Next),
                                                  d.current &&
                                                      Ie(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                s().createElement('div', { ref: d, className: C()('VerticalBar_thumb_32', u.thumb) }),
                                s().createElement('div', { className: C()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: C()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ne) || 0 !== e.button || ((0, H.G)('play'), B(me.Prev));
                                },
                                onMouseUp: b,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Pe = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Oe = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: C()(Pe.base, e.base) });
                            }, [r]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: C()(Pe.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: C()(Pe.area, n) },
                                s().createElement(He, { className: i, classNames: o, api: _ }, e),
                            ),
                            s().createElement(ke, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    He = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => oe(r.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: C()(Pe.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: C()(Pe.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                He.Default = Oe;
                const Ve = { Vertical: n, Horizontal: r };
                var We = t(3649);
                const ze = 'intelligence',
                    $e = ['gold', 'crystal', 'credits', 'freeXP'],
                    Ue = (e) => ({
                        backgroundImage: `url(${R.images.gui.maps.icons.blueprints.fragment.special.$dyn(e) || R.images.resource_well.gui.maps.icons.resourcesLoading.icons.$dyn(e)})`,
                    }),
                    Ge = (0, a.createContext)({}),
                    je = (0, K.Pi)(({ children: e }) => {
                        const u = (0, a.useState)({}),
                            t = u[0],
                            r = u[1],
                            n = (0, a.useState)({}),
                            i = n[0],
                            o = n[1],
                            l = (0, a.useState)({}),
                            c = l[0],
                            d = l[1],
                            _ = (0, a.useState)(0),
                            m = _[0],
                            E = _[1],
                            A = (0, a.useState)(),
                            F = A[0],
                            D = A[1],
                            p = (0, a.useState)(0),
                            g = p[0],
                            h = p[1],
                            C = (0, a.useState)(!1),
                            B = C[0],
                            b = C[1],
                            f = (0, a.useState)(!1),
                            v = f[0],
                            w = f[1],
                            y = se().controls,
                            S = (0, a.useCallback)(() => {
                                const e = ((e) => {
                                    const u = {};
                                    for (var t = 0, r = Object.entries(e); t < r.length; t++) {
                                        const e = r[t],
                                            n = e[0],
                                            a = e[1];
                                        a.value > 0 && (u[n] = a.value);
                                    }
                                    return u;
                                })(t);
                                y.loadResources(e), o(e);
                            }, [y, t]);
                        return s().createElement(
                            Ge.Provider,
                            {
                                value: {
                                    progression: m,
                                    setProgression: E,
                                    prevProgression: F,
                                    setPrevProgression: D,
                                    delta: g,
                                    setDelta: h,
                                    resources: t,
                                    setResources: r,
                                    resourcesAnimated: i,
                                    setResourcesAnimated: o,
                                    isAnimationEnabled: B,
                                    setIsAnimationEnabled: b,
                                    isCardAnimationEnabled: v,
                                    setIsCardAnimationEnabled: w,
                                    tabsAnimated: c,
                                    setTabsAnimated: d,
                                    loadResources: S,
                                },
                            },
                            e,
                        );
                    });
                class qe extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? G.B3.GOLD : G.B3.INTEGRAL;
                        const u = G.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                qe.defaultProps = { format: 'integral' };
                var Ke = t(280);
                const Xe = [
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
                function Ze(e) {
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
                const Ye = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: G.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    Qe = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            p = void 0 === D ? 0 : D,
                            g = e.onShow,
                            h = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Xe);
                        const B = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(
                                () =>
                                    p ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            r = R.invalid('resId'),
                                            n = '';
                                        var a;
                                        return (
                                            u &&
                                                ((n =
                                                    (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { callerUrl: n, caller: t, stack: u, resId: r }
                                        );
                                    })().resId,
                                [p],
                            ),
                            f = (0, a.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (Ye(t, E, { isMouseEvent: !0, on: !0, arguments: Ze(r) }, b),
                                    g && g(),
                                    (B.current.isVisible = !0));
                            }, [t, E, r, b, g]),
                            v = (0, a.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        Ye(t, E, { on: !1 }, b),
                                        B.current.isVisible && h && h(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, E, b, h]),
                            w = (0, a.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = B.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((B.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                          n && n(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  v(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === _ && v(), null == o || o(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === _ && v(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    Je = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                const uu = R.views.common.tooltip_window.simple_tooltip_content,
                    tu = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Je);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: r, note: n, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, r, n, o]);
                        return s().createElement(
                            Qe,
                            eu(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? uu.SimpleTooltipHtmlContent('resId') : uu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                let ru;
                t(3368),
                    (function (e) {
                        (e[(e.ZERO = 48)] = 'ZERO'),
                            (e[(e.ONE = 49)] = 'ONE'),
                            (e[(e.TWO = 50)] = 'TWO'),
                            (e[(e.THREE = 51)] = 'THREE'),
                            (e[(e.FOUR = 52)] = 'FOUR'),
                            (e[(e.FIVE = 53)] = 'FIVE'),
                            (e[(e.SIX = 54)] = 'SIX'),
                            (e[(e.SEVEN = 55)] = 'SEVEN'),
                            (e[(e.EIGHT = 56)] = 'EIGHT'),
                            (e[(e.NINE = 57)] = 'NINE'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9');
                    })(ru || (ru = {}));
                const nu = {
                    base: 'NumericStepper_base_db',
                    base__small: 'NumericStepper_base__small_53',
                    base__medium: 'NumericStepper_base__medium_af',
                    base__large: 'NumericStepper_base__large_35',
                    base__isFocus: 'NumericStepper_base__isFocus_30',
                    base__isDisabled: 'NumericStepper_base__isDisabled_10',
                    inputContainer: 'NumericStepper_inputContainer_04',
                    input: 'NumericStepper_input_da',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_bf',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_ff',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_74',
                    input__disabled: 'NumericStepper_input__disabled_14',
                    input__credits: 'NumericStepper_input__credits_df',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_ce',
                    input__gold: 'NumericStepper_input__gold_52',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_1f',
                    input__xp: 'NumericStepper_input__xp_a6',
                    input__freeXP: 'NumericStepper_input__freeXP_be',
                    input__crystal: 'NumericStepper_input__crystal_d4',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_39',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_7e',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_35',
                    input__withCurrency: 'NumericStepper_input__withCurrency_c1',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_82',
                    'input__xp-large': 'NumericStepper_input__xp-large_61',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_43',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_66',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_9d',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_b5',
                    currency: 'NumericStepper_currency_d7',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_77',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_8e',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_b0',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_c3',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_6d',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_4b',
                    currencyIcon: 'NumericStepper_currencyIcon_09',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_b2',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_3c',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_2a',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_2a',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_35',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_90',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_8d',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_34',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_d0',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_ed',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_91',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_2f',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_1f',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_f8',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_37',
                    dummyValue: 'NumericStepper_dummyValue_bb',
                    control: 'NumericStepper_control_f4',
                    buttonIncrement: 'NumericStepper_buttonIncrement_6b',
                    buttonDecrement: 'NumericStepper_buttonDecrement_a5',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_c0',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_9b',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_2b',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_b8',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_e8',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_8e',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_42',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_be',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_69',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_2a',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_0f',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_eb',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_95',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_55',
                };
                class au extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.timer = null),
                            (this.validationTimer = null),
                            (this.numericalStepper = (0, a.createRef)()),
                            (this.input = (0, a.createRef)()),
                            (this.state = {
                                value: this.props.value,
                                prevValue: this.props.value,
                                isFocused: this.props.isFocused,
                                activeDecrement: !1,
                                activeIncrement: !1,
                            }),
                            (this.setFocusOnInput = () => {
                                this.props.isDisabled ||
                                    (this.input.current &&
                                        (this.input.current.focus(), this.setState({ isFocused: !0 })));
                            }),
                            (this.blurInput = () => {
                                this.input.current && (this.input.current.blur(), this.setState({ isFocused: !1 }));
                            }),
                            (this.componentDidMount = () => {
                                this.state.isFocused &&
                                    (this.setFocusOnInput(),
                                    setTimeout(() => {
                                        const e = this.formattedValue.length;
                                        this.input.current && this.input.current.setSelectionRange(e, e);
                                    }, 0)),
                                    document.addEventListener('click', this.handleClickOutside),
                                    document.addEventListener('mouseup', this.handleMouseUp);
                            }),
                            (this.componentWillUnmount = () => {
                                this.stop(),
                                    document.removeEventListener('click', this.handleClickOutside),
                                    document.removeEventListener('mouseup', this.handleMouseUp);
                            }),
                            (this.formatValue = (e) => G.Z5.getNumberFormat(e, G.B3.GOLD)),
                            (this.getValidValue = (e) => {
                                const u = Math.min(this.props.maximum, Math.max(this.props.minimum, e)),
                                    t = this.props.stepSize;
                                return Math.floor(u / t) * t;
                            }),
                            (this.changeValue = (e) => {
                                e !== this.state.value && (this.setState({ value: e }), this.props.onChange(e));
                            }),
                            (this.setCursorPosition = (e, u) => {
                                this.input.current && this.input.current.setSelectionRange(e, u),
                                    setTimeout(() => {
                                        this.input.current && this.input.current.setSelectionRange(e, u);
                                    });
                            }),
                            (this.handleChange = () => {
                                this.props.isDisabled || this.updateInput();
                            }),
                            (this.updateInput = (e = 0) => {
                                const u = e === U.n.BACKSPACE,
                                    t = e === U.n.DELETE,
                                    r = this.input.current,
                                    n = r.selectionStart || 0,
                                    a = r.selectionEnd || 0;
                                let s = r.value;
                                const i = Math.max(n, a),
                                    o = i;
                                t && (s = s.substring(0, i) + s.substring(i + 1, s.length)),
                                    u && 1 === n && 1 === s.length && (s = '0');
                                const l = Number(s.trim().replace(/\D/g, '')),
                                    c = Number.isSafeInteger(l) ? l : Number.MAX_SAFE_INTEGER,
                                    d = G.Z5.getNumberFormat(c, G.B3.GOLD);
                                r.value = d;
                                const _ = new RegExp(/\d/g);
                                let m = 0;
                                for (let e = 0; e < o; e++) {
                                    const u = s[e] || '',
                                        t = d[m] || '';
                                    if (u.match(_) || u === t) {
                                        for (; u !== d[m] && m < d.length; ) m++;
                                        m++;
                                    }
                                }
                                '' === s && (m = 1),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(m, m),
                                    this.changeValue(c),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        const e = this.getValidValue(c);
                                        e > this.state.prevValue && e !== this.props.maximum && (0, H.G)(Z),
                                            e < this.state.prevValue && (0, H.G)(Y),
                                            e !== c &&
                                                this.state.isFocused &&
                                                (this.changeValue(this.getValidValue(c)),
                                                this.setCursorPosition(0, this.formatValue(e).length));
                                    }, 800));
                            }),
                            (this.handleDelete = (e) => {
                                const u = e.keyCode === U.n.BACKSPACE,
                                    t = e.keyCode === U.n.DELETE,
                                    r = e.target,
                                    n = r.selectionStart,
                                    a = r.selectionEnd,
                                    s = r.value,
                                    i = n !== a,
                                    o = new RegExp(/\D/),
                                    l = u && n ? n - 1 : n || 0;
                                if (i) return;
                                let c = l;
                                const d = o.test(s[l]);
                                if (t && d) for (; o.test(s[c]) && c < s.length; ) c++;
                                if (u && d) for (; o.test(s[c]) && c > 0; ) c--;
                                if (c !== l || (u && d))
                                    return e.preventDefault(), (c = c < 0 ? 0 : c), void this.setCursorPosition(c, c);
                                ((u && 1 === n && 1 === s.length) || t) &&
                                    (e.preventDefault(), this.updateInput(e.keyCode));
                            }),
                            (this.handleClickOutside = (e) => {
                                const u = document.activeElement;
                                this.state.isFocused &&
                                    u !== this.input.current &&
                                    null !== this.numericalStepper.current &&
                                    !this.numericalStepper.current.contains(e.target) &&
                                    this.setState({ isFocused: !1 });
                            }),
                            (this.handleBlur = () => {
                                if (this.props.isDisabled) return;
                                const e = this.getValidValue(this.state.value);
                                e !== this.state.value && this.changeValue(e);
                            }),
                            (this.handleWheel = (e) => {
                                !this.props.isDisabled &&
                                    this.state.isFocused &&
                                    (e.preventDefault(), e.deltaY < 0 ? this.decrement() : this.increment());
                            }),
                            (this.handleMouseUp = () => {
                                this.stop(), this.setState({ activeIncrement: !1, activeDecrement: !1 });
                            }),
                            (this.handleMouseLeave = () => {
                                this.stop();
                            }),
                            (this.incrementHandleMouseEnter = (e) => {
                                this.state.activeIncrement && this.incrementHandleMouseDown(e, !0),
                                    this.buttonIncrementIsDisabled || this.playHoverSound();
                            }),
                            (this.decrementHandleMouseEnter = (e) => {
                                this.state.activeDecrement && this.decrementHandleMouseDown(e, !0),
                                    this.buttonDecrementIsDisabled || this.playHoverSound();
                            }),
                            (this.handleKeyDown = (e) => {
                                if (!this.props.isDisabled) {
                                    switch (
                                        (e.keyCode in U.n &&
                                            e.keyCode !== U.n.BACKSPACE &&
                                            e.keyCode !== U.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case U.n.ARROW_UP:
                                        case U.n.NUM_PLUS:
                                            this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment();
                                            break;
                                        case U.n.ARROW_DOWN:
                                        case U.n.NUM_MINUS:
                                            this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement();
                                            break;
                                        case U.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case U.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case U.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                this.changeValue(this.props.maximum), this.setCursorPosition(0, e);
                                            }
                                            break;
                                        case U.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case U.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case U.n.BACKSPACE:
                                        case U.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case U.n.ARROW_UP:
                                        case U.n.NUM_PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case U.n.ARROW_DOWN:
                                        case U.n.NUM_MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in ru || e.preventDefault();
                            }),
                            (this.increment = () => {
                                const e = Math.min(
                                    this.getValidValue(this.state.value) + this.props.stepSize,
                                    this.props.maximum,
                                );
                                this.changeValue(e), this.playClickSound(Z);
                            }),
                            (this.decrement = () => {
                                const e = Math.max(
                                    this.getValidValue(this.state.value) - this.props.stepSize,
                                    this.props.minimum,
                                );
                                this.changeValue(e), this.playClickSound(Y);
                            }),
                            (this.incrementHandleMouseDown = (e, u = !1) => {
                                this.buttonIncrementIsDisabled ||
                                    (e.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value < this.props.maximum &&
                                        (0 === e.button || u) &&
                                        (this.increment(),
                                        (this.timer = setTimeout(
                                            () => {
                                                this.incrementHandleMouseDown(e, !0);
                                            },
                                            u ? 50 : 300,
                                        )),
                                        this.setState({ activeIncrement: !0 })));
                            }),
                            (this.decrementHandleMouseDown = (e, u = !1) => {
                                this.buttonDecrementIsDisabled ||
                                    (e.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value > this.props.minimum &&
                                        (0 === e.button || u) &&
                                        (this.decrement(),
                                        (this.timer = setTimeout(
                                            () => {
                                                this.decrementHandleMouseDown(e, !0);
                                            },
                                            u ? 50 : 300,
                                        )),
                                        this.setState({ activeDecrement: !0 })));
                            }),
                            (this.playHoverSound = () => {
                                this.props.isDisabled || (0, H.G)('highlight');
                            }),
                            (this.playClickSound = (e) => {
                                this.props.isDisabled || (0, H.G)(e);
                            }),
                            (this.stop = () => {
                                this.timer && clearTimeout(this.timer), (this.timer = null);
                            });
                    }
                    componentDidUpdate(e, u) {
                        const t = this.state,
                            r = t.value,
                            n = t.isFocused;
                        if (r !== u.value && n) {
                            this.setState({ prevValue: u.value });
                            const e = this.formattedValue.length,
                                t = this.input.current && this.input.current.selectionStart,
                                r = this.input.current && this.input.current.selectionEnd,
                                n = t === r ? e : t || 0;
                            0 === t && r === e
                                ? this.input.current && this.input.current.setSelectionRange(e, e)
                                : this.input.current && this.input.current.setSelectionRange(n, e);
                        }
                    }
                    componentWillReceiveProps({ value: e, isFocused: u }) {
                        e !== this.props.value && this.setState({ value: e }),
                            u !== this.props.isFocused &&
                                (this.setState({ isFocused: u }),
                                u
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput());
                    }
                    get formattedValue() {
                        return G.Z5.getNumberFormat(this.state.value, G.B3.GOLD);
                    }
                    get buttonIncrementIsDisabled() {
                        return this.state.value >= this.props.maximum || this.props.isDisabled;
                    }
                    get buttonDecrementIsDisabled() {
                        return this.state.value <= this.props.minimum || this.props.isDisabled;
                    }
                    render() {
                        const e = this.props,
                            u = e.isDisabled,
                            t = e.size,
                            r = e.currencyType,
                            n = C()(
                                nu.base,
                                nu[`base__${t}`],
                                r && nu[`base__withCurrency-${t}`],
                                u && nu.base__isDisabled,
                                this.state.isFocused && nu.base__isFocus,
                            ),
                            a = C()(
                                nu.buttonIncrement,
                                nu[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && nu.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    nu[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            i = C()(
                                nu.buttonDecrement,
                                nu[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && nu.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    nu[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            o = C()(
                                nu.input,
                                u && nu.input__disabled,
                                r && nu.input__withCurrency,
                                r && nu[`input__${r}-${t}`],
                                r && nu[`input__${r}`],
                                r && u && nu[`input__${r}-disabled`],
                            ),
                            l = C()(nu.currencyIcon, r && nu[`currencyIcon__${r}-${t}`]),
                            c = C()(nu.currency, r && nu[`currency__${r}`], r && nu[`currency__${r}-${t}`]);
                        return s().createElement(
                            'div',
                            {
                                className: n,
                                ref: this.numericalStepper,
                                style: ((d = this.props.width), d ? { width: `${d}rem` } : {}),
                            },
                            s().createElement(
                                'div',
                                { className: nu.inputContainer },
                                r &&
                                    s().createElement(
                                        'div',
                                        { className: c },
                                        s().createElement('span', { className: nu.dummyValue }, this.formattedValue),
                                        s().createElement('span', { className: l }),
                                    ),
                                s().createElement('input', {
                                    ref: this.input,
                                    className: o,
                                    type: 'text',
                                    value: this.formattedValue,
                                    disabled: u,
                                    onWheel: this.handleWheel,
                                    onChange: this.handleChange,
                                    onKeyPress: this.allowOnlyNumbers,
                                    onKeyDown: this.handleKeyDown,
                                    onKeyUp: this.handleKeyUp,
                                    onBlur: this.handleBlur,
                                    onFocus: this.setFocusOnInput,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: nu.control },
                                s().createElement('div', {
                                    className: a,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                s().createElement('div', {
                                    className: i,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.decrementHandleMouseEnter,
                                    onMouseDown: this.decrementHandleMouseDown,
                                }),
                            ),
                        );
                        var d;
                    }
                }
                au.defaultProps = {
                    value: 1,
                    stepSize: 1,
                    minimum: 0,
                    maximum: 0,
                    size: 'medium',
                    isFocused: !0,
                    isDisabled: !1,
                    onChange: () => null,
                    onKeyDown: () => null,
                };
                const su = ({ limit: e, rate: u, currentValue: t, className: r, type: n, isDisabled: i }) => {
                        const o = (0, a.useContext)(Ge),
                            l = o.setResources,
                            c = o.isCardAnimationEnabled;
                        return s().createElement(
                            'div',
                            { className: C()('ResourceStepper_base_b6', r) },
                            s().createElement(au, {
                                width: 140,
                                value: t,
                                minimum: 0,
                                maximum: e,
                                stepSize: u,
                                isFocused: !1,
                                onChange: (t) => {
                                    if (c) return;
                                    const r = { value: t >= e ? e : t, rate: u };
                                    l((e) => Object.assign({}, e, { [n]: r }));
                                },
                                isDisabled: i,
                            }),
                        );
                    },
                    iu = {
                        base: 'ResourcesCard_base_27',
                        base__disabled: 'ResourcesCard_base__disabled_b6',
                        base__selected: 'ResourcesCard_base__selected_8e',
                        base__first: 'ResourcesCard_base__first_16',
                        base__last: 'ResourcesCard_base__last_64',
                        clickArea: 'ResourcesCard_clickArea_f7',
                        clickArea__disabled: 'ResourcesCard_clickArea__disabled_ef',
                        count: 'ResourcesCard_count_a2',
                        count__zero: 'ResourcesCard_count__zero_08',
                        countIcon: 'ResourcesCard_countIcon_b0',
                        imageWrapper: 'ResourcesCard_imageWrapper_c9',
                        imageWrapper__disabled: 'ResourcesCard_imageWrapper__disabled_e9',
                        image: 'ResourcesCard_image_34',
                        image__gold: 'ResourcesCard_image__gold_c9',
                        image__credits: 'ResourcesCard_image__credits_c6',
                        image__freeXP: 'ResourcesCard_image__freeXP_3f',
                        image__crystal: 'ResourcesCard_image__crystal_59',
                        image__intelligence: 'ResourcesCard_image__intelligence_49',
                        image__ussr: 'ResourcesCard_image__ussr_13',
                        image__germany: 'ResourcesCard_image__germany_91',
                        image__china: 'ResourcesCard_image__china_5d',
                        image__czech: 'ResourcesCard_image__czech_27',
                        image__france: 'ResourcesCard_image__france_67',
                        image__italy: 'ResourcesCard_image__italy_9d',
                        image__japan: 'ResourcesCard_image__japan_09',
                        image__poland: 'ResourcesCard_image__poland_b8',
                        image__sweden: 'ResourcesCard_image__sweden_8f',
                        image__uk: 'ResourcesCard_image__uk_5a',
                        image__usa: 'ResourcesCard_image__usa_36',
                        image__disabled: 'ResourcesCard_image__disabled_dc',
                        imageDisabled: 'ResourcesCard_imageDisabled_68',
                        imageDisabled__gold: 'ResourcesCard_imageDisabled__gold_66',
                        imageDisabled__credits: 'ResourcesCard_imageDisabled__credits_de',
                        imageDisabled__freeXP: 'ResourcesCard_imageDisabled__freeXP_7b',
                        imageDisabled__crystal: 'ResourcesCard_imageDisabled__crystal_59',
                        imageDisabled__intelligence: 'ResourcesCard_imageDisabled__intelligence_a3',
                        imageDisabled__ussr: 'ResourcesCard_imageDisabled__ussr_5a',
                        imageDisabled__germany: 'ResourcesCard_imageDisabled__germany_6b',
                        imageDisabled__china: 'ResourcesCard_imageDisabled__china_e0',
                        imageDisabled__czech: 'ResourcesCard_imageDisabled__czech_80',
                        imageDisabled__france: 'ResourcesCard_imageDisabled__france_8c',
                        imageDisabled__italy: 'ResourcesCard_imageDisabled__italy_cb',
                        imageDisabled__japan: 'ResourcesCard_imageDisabled__japan_d8',
                        imageDisabled__poland: 'ResourcesCard_imageDisabled__poland_dc',
                        imageDisabled__sweden: 'ResourcesCard_imageDisabled__sweden_83',
                        imageDisabled__uk: 'ResourcesCard_imageDisabled__uk_40',
                        imageDisabled__usa: 'ResourcesCard_imageDisabled__usa_ff',
                        title: 'ResourcesCard_title_2e',
                        rateText: 'ResourcesCard_rateText_39',
                        rateText__gold: 'ResourcesCard_rateText__gold_b4',
                        rateText__credits: 'ResourcesCard_rateText__credits_ee',
                        rateText__min: 'ResourcesCard_rateText__min_65',
                        rateIcon: 'ResourcesCard_rateIcon_99',
                        rateIcon__intelligence: 'ResourcesCard_rateIcon__intelligence_4c',
                        rateIcon__currency: 'ResourcesCard_rateIcon__currency_fc',
                        icon: 'ResourcesCard_icon_a4',
                        icon__limit: 'ResourcesCard_icon__limit_a4',
                        icon__max: 'ResourcesCard_icon__max_8d',
                        icon__loaded: 'ResourcesCard_icon__loaded_be',
                        limitText: 'ResourcesCard_limitText_52',
                        limitText__show: 'ResourcesCard_limitText__show_06',
                        limitText__max: 'ResourcesCard_limitText__max_6c',
                        limitText__loaded: 'ResourcesCard_limitText__loaded_3a',
                        stepper: 'ResourcesCard_stepper_2e',
                        stepper__disabled: 'ResourcesCard_stepper__disabled_06',
                        fadeOut: 'ResourcesCard_fadeOut_34',
                        fadeIn: 'ResourcesCard_fadeIn_c1',
                        fadeInWithScale: 'ResourcesCard_fadeInWithScale_55',
                        slideUp: 'ResourcesCard_slideUp_a8',
                        slideUpCenter: 'ResourcesCard_slideUpCenter_84',
                        blink: 'ResourcesCard_blink_b5',
                    },
                    ou = R.strings.resource_well,
                    lu = ({ value: e, index: u, amount: t, currentValue: r, progressionState: n }) => {
                        const i = e.type,
                            o = e.inventoryCount,
                            l = e.rate,
                            c = e.limit,
                            d = e.tooltipId,
                            _ = e.balance,
                            m = (0, a.useContext)(Ge),
                            E = m.setResources,
                            A = m.progression,
                            F = m.delta,
                            D = m.isCardAnimationEnabled,
                            p = m.resourcesAnimated,
                            g = r + _ >= c,
                            h = A + F >= 100,
                            B = n === X.NoVehicles,
                            b = c / l < 100,
                            f = 0 === r || h || B || !D,
                            v = Math.min(Math.round((100 - A - F + r / l) * l), o - (o % l)),
                            w = (0 === o && 0 === r) || _ === c || (0 === r && h) || B,
                            y = w,
                            S = h ? r : Math.min(c - _, v),
                            x = {
                                icon: s().createElement('span', {
                                    className: C()(
                                        iu.rateIcon,
                                        $e.includes(i) && iu.rateIcon__currency,
                                        i === ze && iu.rateIcon__intelligence,
                                    ),
                                    style: Ue(i),
                                }),
                                minValue: s().createElement(Ke.z, {
                                    classMix: C()(iu.rateText, iu.rateText__min),
                                    text: ou.resourcesLoadingView.resourceRate.minValue(),
                                    binding: { minValue: 1 },
                                }),
                                equals: s().createElement('span', null, '='),
                                rate: s().createElement(qe, { value: l }),
                            },
                            N = {
                                maxValue: s().createElement(qe, { value: c }),
                                iconInfo: s().createElement('div', { className: C()(iu.icon, iu.icon__limit) }),
                                iconMax: s().createElement('div', { className: C()(iu.icon, iu.icon__max) }),
                                iconLoaded: s().createElement('div', { className: C()(iu.icon, iu.icon__loaded) }),
                            },
                            M = (0, a.useMemo)(() => ({ tooltipId: d }), [d]),
                            L = o - r;
                        (0, a.useEffect)(() => {
                            B && E({ [i]: { value: 0, rate: l } });
                        }, [B, l, E, i]);
                        const I = () => {
                                if (B || D) return;
                                w || (0, H.G)(Z);
                                const e = (({ value: e, rate: u }, t) => {
                                    const r = e - (e % u);
                                    return t > 100 ? { value: r - (t - 100) * u, rate: u } : { value: r, rate: u };
                                })({ value: r + l >= S ? S : r + l, rate: l }, A + F);
                                E((u) => Object.assign({}, u, { [i]: e }));
                            },
                            T = C()(
                                iu.base,
                                0 === u && iu.base__first,
                                u === t - 1 && iu.base__last,
                                Boolean(r) && iu.base__selected,
                                Object.keys(p).includes(i) && D && iu.base__animated,
                                B && iu.base__disabled,
                            ),
                            k = C()(
                                iu.limitText,
                                g && !h && iu.limitText__max,
                                h && iu.limitText__loaded,
                                h && iu.limitText__show,
                            );
                        return s().createElement(
                            'div',
                            {
                                className: T,
                                onMouseEnter: () => {
                                    (0, H.G)(Q);
                                },
                            },
                            s().createElement('div', {
                                className: C()(iu.clickArea, w && iu.clickArea__disabled),
                                onClick: I,
                            }),
                            s().createElement(
                                'div',
                                { className: C()(iu.count, 0 === L && iu.count__zero) },
                                s().createElement('div', { className: iu.countIcon }),
                                s().createElement(qe, { value: L }),
                            ),
                            s().createElement(
                                Qe,
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    args: M,
                                },
                                s().createElement(
                                    'div',
                                    { className: C()(iu.imageWrapper, y && iu.imageWrapper__disabled), onClick: I },
                                    s().createElement('div', {
                                        className: C()(iu.image, iu[`image__${i}`], y && iu.image__disabled),
                                    }),
                                    y &&
                                        s().createElement('div', {
                                            className: C()(iu.imageDisabled, iu[`imageDisabled__${i}`]),
                                        }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: iu.title },
                                ((e) => {
                                    var u;
                                    const t = e && R.strings.blueprints.nations.$dyn(e),
                                        r = R.strings.quests.bonusName.$dyn(e);
                                    switch (!0) {
                                        case e === ze:
                                            return R.strings.resource_well.resourcesLoadingView.resourceCard.intelligenceBlueprints();
                                        case Boolean(t):
                                            return t;
                                        case Boolean(r):
                                            return (0, We.z4)(
                                                (null == (u = R.strings.quests.bonusName.$dyn(e))
                                                    ? void 0
                                                    : u.toString()) || '',
                                            );
                                        default:
                                            console.error('title for reward is not provided');
                                    }
                                })(i),
                            ),
                            s().createElement(Ke.z, {
                                classMix: C()(iu.rateText, iu[`rateText__${i}`]),
                                text: ou.resourcesLoadingView.resourceRate.text(),
                                binding: x,
                            }),
                            s().createElement(su, {
                                currentValue: r,
                                limit: S,
                                rate: l,
                                inventoryCount: o,
                                className: C()(iu.stepper, f && iu.stepper__disabled),
                                type: i,
                                isDisabled: w || D,
                                progression: A,
                            }),
                            h &&
                                s().createElement(
                                    tu,
                                    {
                                        header: ou.tooltips.resourcesLoadingView.resourcesLoaded.header(),
                                        body: ou.tooltips.resourcesLoadingView.resourcesLoaded.body(),
                                    },
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(Ke.z, {
                                            classMix: k,
                                            text: ou.resourcesLoadingView.resourceRate.resourceLoadedText(),
                                            binding: N,
                                        }),
                                    ),
                                ),
                            b &&
                                !h &&
                                s().createElement(
                                    Qe,
                                    {
                                        contentId:
                                            R.views.resource_well.lobby.feature.tooltips.MaxProgressTooltip('resId'),
                                        args: { currentValue: r + _, maxValue: c, type: i },
                                    },
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(Ke.z, {
                                            classMix: k,
                                            text:
                                                g && !h
                                                    ? ou.resourcesLoadingView.resourceRate.maxReachedText()
                                                    : ou.resourcesLoadingView.resourceRate.maxText(),
                                            binding: N,
                                        }),
                                    ),
                                ),
                        );
                    },
                    cu = ({
                        resourcesTabs: e,
                        activeTabIndex: u,
                        currentScrollPosition: t,
                        api: r,
                        progressionState: n,
                    }) => {
                        const i = (0, a.useContext)(Ge).resources,
                            o = r.applyScroll;
                        return (
                            (0, a.useEffect)(
                                () =>
                                    oe(() => {
                                        o(t[u].position);
                                    }),
                                [u],
                            ),
                            s().createElement(
                                'div',
                                { className: 'ResourcesCards_base_f0' },
                                e.map(
                                    ({ value: e }, t) =>
                                        t === u &&
                                        s().createElement(
                                            'div',
                                            { className: 'ResourcesCards_scrollWrapper_90', key: t },
                                            s().createElement(
                                                Ve.Vertical.Area.Default,
                                                {
                                                    api: r,
                                                    barClassNames: { base: 'ResourcesCards_scrollBarPosition_0a' },
                                                },
                                                s().createElement(
                                                    'div',
                                                    { className: 'ResourcesCards_cardsWrapper_ef' },
                                                    e.resources.map(({ value: u }, t) => {
                                                        var r;
                                                        return s().createElement(lu, {
                                                            value: u,
                                                            currentValue:
                                                                (null == (r = i[u.type]) ? void 0 : r.value) || 0,
                                                            key: `card_${t}`,
                                                            index: t,
                                                            amount: e.resources.length,
                                                            progressionState: n,
                                                        });
                                                    }),
                                                ),
                                            ),
                                        ),
                                ),
                            )
                        );
                    },
                    du = {
                        base: 'ResourcesHeaderItem_base_fd',
                        base__active: 'ResourcesHeaderItem_base__active_8e',
                        title: 'ResourcesHeaderItem_title_35',
                        image: 'ResourcesHeaderItem_image_13',
                        image__currency: 'ResourcesHeaderItem_image__currency_20',
                        image__blueprints: 'ResourcesHeaderItem_image__blueprints_c1',
                        base__animated: 'ResourcesHeaderItem_base__animated_5c',
                        blink: 'ResourcesHeaderItem_blink_a3',
                        deltaPercent: 'ResourcesHeaderItem_deltaPercent_9c',
                        deltaPercent__loaded: 'ResourcesHeaderItem_deltaPercent__loaded_dd',
                        glow: 'ResourcesHeaderItem_glow_6b',
                        fadeOut: 'ResourcesHeaderItem_fadeOut_ba',
                        fadeIn: 'ResourcesHeaderItem_fadeIn_f9',
                        fadeInWithScale: 'ResourcesHeaderItem_fadeInWithScale_64',
                        slideUp: 'ResourcesHeaderItem_slideUp_4f',
                        slideUpCenter: 'ResourcesHeaderItem_slideUpCenter_eb',
                    },
                    _u = R.strings.resource_well,
                    mu = ({ type: e, delta: u, activeTabIndex: t, tabIndex: r, onClick: n }) => {
                        var i, o;
                        const l = (0, a.useContext)(Ge),
                            c = l.isCardAnimationEnabled,
                            d = l.tabsAnimated,
                            _ = C()(du.base, t === r && du.base__active, d[e] > 0 && t !== r && c && du.base__animated);
                        return s().createElement(
                            'div',
                            {
                                className: _,
                                onClick: () => {
                                    (0, H.G)('bp_click'), n(r);
                                },
                                onMouseEnter: () => {
                                    (0, H.G)(Q);
                                },
                            },
                            s().createElement('div', { className: du.glow }),
                            s().createElement(
                                'div',
                                { className: du.title },
                                _u.resourcesLoadingView.resourcesHeader.$dyn(e),
                            ),
                            s().createElement(
                                tu,
                                {
                                    header:
                                        null == (i = _u.tooltips.resourcesLoadingView.header.$dyn(`${e}_title`))
                                            ? void 0
                                            : i.toString(),
                                    body:
                                        null == (o = _u.tooltips.resourcesLoadingView.header.$dyn(`${e}_description`))
                                            ? void 0
                                            : o.toString(),
                                },
                                s().createElement('div', { className: C()(du.image, du[`image__${e}`]) }),
                            ),
                            s().createElement(Ke.z, {
                                classMix: C()(du.deltaPercent, u > 0 && du.deltaPercent__loaded),
                                text:
                                    0 === u
                                        ? _u.resourcesLoadingView.counter.current()
                                        : _u.resourcesLoadingView.counter.delta(),
                                binding: { delta: u.toFixed(), current: 0 },
                            }),
                        );
                    },
                    Eu = ({ resourcesTabs: e, handleTabClick: u, activeTabIndex: t }) => {
                        const r = (0, a.useContext)(Ge),
                            n = r.resources,
                            i = r.setDelta,
                            o = r.setTabsAnimated,
                            l = ((e) => {
                                const u = {};
                                let t = [];
                                return (
                                    e.map(({ value: e }) => {
                                        e.resources.map(({ value: e }) => {
                                            t.push(e.type);
                                        }),
                                            (u[e.type] = t),
                                            (t = []);
                                    }),
                                    u
                                );
                            })(e),
                            c = ((e, u) => {
                                const t = {};
                                let r = 0;
                                for (var n = 0, a = Object.entries(e); n < a.length; n++) {
                                    const e = a[n],
                                        o = e[0],
                                        l = e[1];
                                    for (var s = 0, i = Object.entries(u); s < i.length; s++) {
                                        const e = i[s],
                                            u = e[0],
                                            t = e[1];
                                        l.includes(u.toString()) && (r += t.value / t.rate);
                                    }
                                    (t[o] = r), (r = 0);
                                }
                                return t;
                            })(l, n);
                        i(((e) => Object.values(e).reduce((e, u) => e + u, 0))(c));
                        const d = (0, a.useCallback)(
                            (e) => {
                                o(c), u(e);
                            },
                            [u, c, o],
                        );
                        return s().createElement(
                            'div',
                            { className: 'ResourcesHeader_base_3d' },
                            e.map(({ value: e }, u) =>
                                s().createElement(mu, {
                                    type: e.type,
                                    resources: e.resources,
                                    delta: c[e.type] || 0,
                                    activeTabIndex: t,
                                    tabIndex: u,
                                    onClick: d,
                                    key: u,
                                }),
                            ),
                        );
                    },
                    Au = [
                        { position: 0, index: 0 },
                        { position: 0, index: 1 },
                    ],
                    Fu = ({ resourcesTabs: e, progressionState: u }) => {
                        const t = (0, a.useState)(0),
                            r = t[0],
                            n = t[1],
                            i = (0, a.useState)(Au),
                            o = i[0],
                            l = i[1],
                            c = Fe(),
                            d = c.animationScroll.scrollPosition,
                            _ = (0, a.useCallback)(
                                (e) => {
                                    l(o.map((e) => (e.index === r ? Object.assign({}, e, { position: d.goal }) : e))),
                                        n(e);
                                },
                                [r, o, d.goal],
                            ),
                            m = C()(
                                'Content_content_af',
                                e[r].value.resources.length <= 5 && 'Content_content__center_92',
                            );
                        return s().createElement(
                            'div',
                            { className: 'Content_base_7d' },
                            s().createElement(
                                'div',
                                { className: 'Content_header_66' },
                                s().createElement(Eu, { resourcesTabs: e, handleTabClick: _, activeTabIndex: r }),
                            ),
                            s().createElement(
                                'div',
                                { className: m },
                                s().createElement(cu, {
                                    api: c,
                                    resourcesTabs: e,
                                    activeTabIndex: r,
                                    currentScrollPosition: o,
                                    progressionState: u,
                                }),
                            ),
                        );
                    };
                let Du;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Forbidden = 'forbidden'),
                        (e.NoProgress = 'noProgress'),
                        (e.NoVehicles = 'noVehicles');
                })(Du || (Du = {}));
                var pu = t(7162);
                var gu = t(3457);
                const hu = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let Cu, Bu;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Cu || (Cu = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Bu || (Bu = {}));
                const bu = ({ size: e = Cu.Default }) => {
                        const u = C()(hu.background, hu[`background__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    fu = (e, u) => {
                        let t;
                        const r = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(r);
                        };
                    };
                let vu, wu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(vu || (vu = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(wu || (wu = {}));
                const yu = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Su = ({ size: e }) => {
                        const u = C()(yu.base, yu[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    xu = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < r,
                                d = (0, a.useState)(wu.Idle),
                                _ = d[0],
                                m = d[1],
                                E = _ === wu.In,
                                A = _ === wu.End,
                                F = _ === wu.Idle,
                                D = (0, a.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, a.useEffect)(() => {
                                if (F && !t)
                                    return fu(() => {
                                        D(wu.In);
                                    }, u);
                            }, [D, t, F, u]),
                                (0, a.useEffect)(() => {
                                    if (E)
                                        return fu(() => {
                                            o && o(), D(wu.End);
                                        }, e + u);
                                }, [D, E, o, u, e]);
                            const p = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                g = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                h = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(r - i)}%`, left: `${c ? i : r}%` }),
                                    [r, c, i],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: h },
                                      s().createElement(
                                          'div',
                                          { style: F ? p : g, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(Su, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    Nu = {
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
                    Ru = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: r, isComplete: n, withoutBounce: a }) => {
                            const i = C()(
                                    Nu.base,
                                    Nu[`base__${e}`],
                                    t && Nu.base__disabled,
                                    n && Nu.base__finished,
                                    a && Nu.base__withoutBounce,
                                ),
                                o = !t && !n;
                            return s().createElement(
                                'div',
                                { className: i, style: r, ref: u },
                                s().createElement('div', { className: Nu.pattern }),
                                s().createElement('div', { className: Nu.gradient }),
                                o && s().createElement(Su, { size: e }),
                            );
                        },
                    ),
                    Mu = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Ru, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: i,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    s().createElement(xu, {
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
                    Lu = (e) => (e ? { left: 0 } : { right: 0 }),
                    Iu = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Tu = (e) => ({ transitionDuration: `${e}ms` }),
                    ku = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = i < r,
                                _ = (0, a.useState)(vu.Idle),
                                m = _[0],
                                E = _[1],
                                A = m === vu.End,
                                F = m === vu.Idle,
                                D = m === vu.Grow,
                                p = m === vu.Shrink,
                                g = (0, a.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                h = (0, a.useCallback)(
                                    (e, u) =>
                                        fu(() => {
                                            g(e);
                                        }, u),
                                    [g],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? h(vu.Grow, u)
                                        : D
                                          ? h(vu.Shrink, e)
                                          : p
                                            ? h(vu.End, e)
                                            : void (A && o && o());
                            }, [h, t, A, D, F, p, o, u, e]);
                            const B = (0, a.useMemo)(() => Object.assign({ width: '100%' }, Tu(e), Lu(d)), [d, e]),
                                b = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Tu(e), Lu(d)), [d, e]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Iu(d, r), Tu(e)), [r, d, e]),
                                v = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - r)}%` }, Iu(d, r), Tu(e)),
                                    [r, d, i, e],
                                );
                            if (A) return null;
                            const w = C()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                d && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: F ? f : v, className: w },
                                s().createElement(
                                    'div',
                                    { style: p ? b : B, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(Su, { size: n }),
                                ),
                            );
                        },
                    ),
                    Pu = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                _ = (0, a.useState)(!1),
                                m = _[0],
                                E = _[1],
                                A = (0, a.useCallback)(
                                    (e) => {
                                        e === vu.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                F = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Ru, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: i,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: m ? D : F,
                                }),
                                t >= 0 &&
                                    s().createElement(ku, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: A,
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
                    Ou = ['onComplete', 'onEndAnimation'];
                function Hu() {
                    return (
                        (Hu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Hu.apply(this, arguments)
                    );
                }
                const Vu = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ou);
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            o = n[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== i && o(e), e && u && u(), t && t();
                            }, [i, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case Bu.Simple:
                                return s().createElement(Mu, Hu({}, r, { onEndAnimation: l, isComplete: i }));
                            case Bu.Growing:
                                return s().createElement(Pu, Hu({}, r, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    Wu = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: n }) => {
                        const i = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                o && n && n();
                            }, [o, n]),
                            s().createElement(Ru, { size: e, disabled: r, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    zu = ['onEndAnimation'];
                function $u() {
                    return (
                        ($u =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        $u.apply(this, arguments)
                    );
                }
                const Uu = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, zu);
                    const r = (0, a.useRef)({}),
                        n = (0, a.useCallback)(() => {
                            (r.current.from = void 0), u && u();
                        }, [u]),
                        i = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = i),
                        s().createElement(
                            Vu,
                            $u({}, t, {
                                onEndAnimation: n,
                                key: `${i}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: i,
                            }),
                        )
                    );
                });
                function Gu() {
                    return (
                        (Gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Gu.apply(this, arguments)
                    );
                }
                const ju = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: r,
                            deltaFrom: n,
                            additionalKey: a,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (n === u)
                                return s().createElement(Wu, {
                                    key: `${n}-${u}-${a}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: r,
                                    onComplete: c,
                                });
                            const d = {
                                from: n,
                                to: u,
                                size: e,
                                additionalKey: a,
                                lineRef: t,
                                disabled: r,
                                animationSettings: i,
                                onComplete: c,
                                onEndAnimation: o,
                                onChangeAnimationState: l,
                            };
                            return i.withStack
                                ? s().createElement(Uu, d)
                                : s().createElement(Vu, Gu({ key: `${n}-${u}-${a}` }, d));
                        },
                    ),
                    qu = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    Ku = (e, u, t) => ('number' == typeof t ? (ie(0, u, t) / u) * 100 : e),
                    Xu = {
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
                    Zu = {
                        freezed: !1,
                        withStack: !1,
                        type: Bu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Yu = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Xu,
                            size: t = Cu.Default,
                            animationSettings: r = Zu,
                            disabled: n = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: d,
                            onChangeAnimationState: _,
                            onEndAnimation: m,
                            onComplete: E,
                        }) => {
                            const A = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const r = (ie(0, u, e) / u) * 100;
                                    return { value: r, deltaFrom: Ku(r, u, t) };
                                }, [t, u, e]))(o, e, l);
                            return s().createElement(
                                'div',
                                { className: C()(hu.base, hu[`base__${t}`]), style: qu(u) },
                                !i && s().createElement(bu, { size: t }),
                                s().createElement(ju, {
                                    size: t,
                                    lineRef: d,
                                    disabled: n,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: r,
                                    onEndAnimation: m,
                                    onChangeAnimationState: _,
                                    onComplete: E,
                                }),
                            );
                        },
                    );
                var Qu = t(9690);
                const Ju = {
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
                let et, ut;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(et || (et = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(ut || (ut = {}));
                const tt = ({
                        isElite: e,
                        vehicleName: u,
                        vehicleShortName: t,
                        vehicleType: r,
                        vehicleLvl: n,
                        tags: a = '',
                        size: i = et.extraSmall,
                        type: o = ut.colored,
                        className: l,
                        classNames: c,
                        isShortName: d = !1,
                    }) => {
                        const _ = `${(0, We.BN)(r)}${e ? '_elite' : ''}`,
                            m = R.images.gui.maps.icons.vehicleTypes.big.$dyn(_);
                        return s().createElement(
                            'div',
                            {
                                className: C()(
                                    Ju.base,
                                    Ju[`base__size${(0, We.e)(i)}`],
                                    Ju[`base__type${(0, We.e)(o)}`],
                                    l,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: C()(Ju.level, null == c ? void 0 : c.level) },
                                (0, Qu.HG)(n),
                            ),
                            s().createElement('div', {
                                className: C()(
                                    Ju.type,
                                    e && Ju[`type__elite${(0, We.e)(i)}`],
                                    Ju[`type__${i}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: r ? { backgroundImage: `url(${m})` } : void 0,
                            }),
                            ((e, u) => e.split(',').includes(u))(a, 'premiumIGR') &&
                                s().createElement('div', { className: Ju.premiumIGR }),
                            s().createElement(
                                'div',
                                { className: C()(Ju.name, null == c ? void 0 : c.name) },
                                d ? t : u,
                            ),
                        );
                    },
                    rt = 'ActiveState_button_c7';
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const at = 100,
                    st = R.strings.resource_well,
                    it = Object.assign({}, Zu, {
                        freezed: !0,
                        withStack: !0,
                        type: Bu.Simple,
                        delta: { duration: 500, delay: 0 },
                    }),
                    ot = Zu,
                    lt = (0, K.Pi)(({ isSmall: e, onClose: u }) => {
                        const t = se().model,
                            r = t.root.get().isLoadingError,
                            n = t.vehicleCounter.get().isVehicleCountAvailable,
                            i = (0, a.useContext)(Ge),
                            o = i.progression,
                            l = i.prevProgression,
                            c = i.setPrevProgression,
                            d = i.delta,
                            _ = i.setIsCardAnimationEnabled,
                            m = i.setResourcesAnimated,
                            E = i.setTabsAnimated,
                            A = i.setResources,
                            F = i.loadResources,
                            D = (0, a.useState)(it),
                            p = D[0],
                            g = D[1],
                            h = Boolean(d);
                        (0, a.useEffect)(() => {
                            o + d === at && o !== at && (0, H.G)('resources_well_progress_click_oneshot');
                        }, [o, d, h]),
                            (0, a.useEffect)(() => {
                                o && void 0 !== l && o !== l && g(ot);
                            }, [l, o, p]),
                            (0, a.useEffect)(() => {
                                r && (A({}), g(it));
                            }, [r, A]);
                        const B = s().createElement(Ke.z, {
                                classMix: C()(
                                    'ActiveState_currentPercent_60',
                                    0 === o && 'ActiveState_currentPercent__zero_7d',
                                ),
                                text: st.resourcesLoadingView.counter.current(),
                                binding: { current: o },
                            }),
                            b = s().createElement(Ke.z, {
                                classMix: 'ActiveState_deltaPercent_54',
                                text: st.resourcesLoadingView.counter.delta(),
                                binding: { delta: d.toFixed() },
                            }),
                            f = { progressDiff: parseInt(d.toFixed()) },
                            v = s().createElement(Ke.z, {
                                text: st.resourcesLoadingView.counter.currentWithDelta(),
                                binding: { current: B, delta: b },
                            }),
                            w = (0, a.useCallback)(() => {
                                c(o),
                                    d || (o !== l && (0, H.G)('resources_well_progress_done_stop')),
                                    g(it),
                                    m({}),
                                    E({}),
                                    _(!1);
                            }, [c, o, d, m, E, _, l]);
                        return s().createElement(
                            'div',
                            { className: C()('ActiveState_base_05', e && 'ActiveState_base__small_47') },
                            s().createElement(
                                'div',
                                { className: 'ActiveState_progressionWrapper_ed' },
                                s().createElement(
                                    'div',
                                    { className: 'ActiveState_topLine_ac' },
                                    s().createElement(
                                        'div',
                                        { className: 'ActiveState_smallTitle_13' },
                                        st.mainView.footer.activeState.progressionFor.title(),
                                        s().createElement(
                                            tt,
                                            nt({}, t.vehicleInfo.get(), {
                                                className: 'ActiveState_tankName_b4',
                                                size: et.extraSmall,
                                                type: ut.white,
                                            }),
                                        ),
                                    ),
                                    s().createElement(
                                        Qe,
                                        {
                                            contentId:
                                                R.views.resource_well.lobby.feature.tooltips.ProgressTooltip('resId'),
                                            args: f,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: 'ActiveState_percentWrapper_d0' },
                                            0 === d ? B : 0 === o && 0 !== d ? b : v,
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'ActiveState_progressionBg_90' },
                                    s().createElement(
                                        'div',
                                        { className: 'ActiveState_progressBar_2c' },
                                        s().createElement(
                                            Qe,
                                            {
                                                contentId:
                                                    R.views.resource_well.lobby.feature.tooltips.ProgressTooltip(
                                                        'resId',
                                                    ),
                                                args: f,
                                            },
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(Yu, {
                                                    value: o + d,
                                                    deltaFrom: l,
                                                    maxValue: at,
                                                    animationSettings: p,
                                                    onEndAnimation: w,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'ActiveState_scaleValueWrapper_f5' },
                                    s().createElement('span', null, 0, '%'),
                                    s().createElement('span', null, at, '%'),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: 'ActiveState_buttonsBlock_f1' },
                                n
                                    ? s().createElement(
                                          gu.u5,
                                          {
                                              type: gu.L$.main,
                                              size: e ? gu.qE.small : gu.qE.medium,
                                              onClick: F,
                                              mixClass: rt,
                                              disabled: !h,
                                          },
                                          st.resourcesLoadingView.buttons.load(),
                                      )
                                    : s().createElement(
                                          tu,
                                          { body: st.tooltips.resourcesLoadingView.buttonDisabled.body() },
                                          s().createElement(
                                              'div',
                                              null,
                                              s().createElement(
                                                  gu.u5,
                                                  {
                                                      type: gu.L$.main,
                                                      size: e ? gu.qE.small : gu.qE.medium,
                                                      mixClass: rt,
                                                      disabled: !0,
                                                  },
                                                  st.resourcesLoadingView.buttons.load(),
                                              ),
                                          ),
                                      ),
                                s().createElement(
                                    'div',
                                    { className: 'ActiveState_buttonReturnBlock_bf' },
                                    s().createElement(
                                        gu.u5,
                                        {
                                            type: gu.L$.primary,
                                            size: e ? gu.qE.small : gu.qE.medium,
                                            onClick: u,
                                            mixClass: rt,
                                        },
                                        st.resourcesLoadingView.buttons.close(),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: 'ActiveState_footerDescr_dd' },
                                st.mainView.footer.description.text(),
                            ),
                        );
                    }),
                    ct = ({ progressionState: e, onHangarShow: u, onClose: t }) => {
                        const r = y().mediaSize <= f.Small,
                            n = e === Du.Active || e === Du.NoProgress;
                        return s().createElement(
                            'div',
                            { className: C()('Footer_base_31', n && 'Footer_base__alignBottom_ca') },
                            s().createElement('div', { className: 'Footer_background_4c' }),
                            e === Du.NoVehicles &&
                                s().createElement(pu.t, {
                                    isSmall: r,
                                    onHangarShow: u,
                                    subTitle: R.strings.resource_well.resourcesLoadingView.footer.noVehicles.subTitle(),
                                }),
                            n && s().createElement(lt, { isSmall: r, onClose: t }),
                        );
                    },
                    dt = () =>
                        s().createElement(
                            'div',
                            { className: 'Header_base_21' },
                            s().createElement(
                                'div',
                                { className: 'Header_title_2e' },
                                R.strings.resource_well.commonTexts.eventTitle(),
                            ),
                            s().createElement(
                                'div',
                                { className: 'Header_subtitle_24' },
                                R.strings.resource_well.resourcesLoadingView.subtitle(),
                            ),
                        ),
                    _t = (0, K.Pi)(() => {
                        const e = se(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get(),
                            n = r.progression,
                            i = r.progressionState,
                            o = r.isLoadingError;
                        var l;
                        (l = t.close), q(U.n.ESCAPE, l);
                        const c = (0, a.useContext)(Ge),
                            d = c.setProgression,
                            _ = c.setPrevProgression,
                            m = c.setResources,
                            E = c.prevProgression,
                            A = c.setIsAnimationEnabled,
                            F = c.delta,
                            D = c.setIsCardAnimationEnabled;
                        return (
                            d(n),
                            (0, a.useEffect)(() => _(n), []),
                            (0, a.useEffect)(() => {
                                m({});
                            }, [n, m]),
                            (0, a.useEffect)(() => {
                                o && (m({}), D(!1), A(!1));
                            }, [o, m, D, A]),
                            (0, a.useEffect)(() => {
                                Boolean(n) && void 0 !== E && n !== E && D(!0);
                            }, [E, n, D, i]),
                            (0, a.useEffect)(() => {
                                const e = i === X.NoProgress;
                                ((Boolean(n) && e) || F > 0) &&
                                    (n !== E && (0, H.G)('resources_well_progress_done_start'), A(!0));
                            }, [E, n, A, i, F]),
                            s().createElement(
                                'div',
                                { className: 'App_base_fe' },
                                s().createElement(
                                    'div',
                                    { className: 'App_counter_3b' },
                                    s().createElement(J.M, { vehicleCounter: u.vehicleCounter.get() }),
                                ),
                                s().createElement(dt, null),
                                s().createElement(
                                    'div',
                                    { className: 'App_close_cd' },
                                    s().createElement($, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                                s().createElement(Fu, { resourcesTabs: u.resourcesTabs.get(), progressionState: i }),
                                s().createElement(ct, {
                                    onHangarShow: t.showHangar,
                                    progressionState: i,
                                    onClose: t.close,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    O().render(
                        s().createElement(
                            ae,
                            null,
                            s().createElement(je, null, s().createElement(k, null, s().createElement(_t, null))),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            7162: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => i });
                var r = t(3457),
                    n = t(7363),
                    a = t.n(n);
                const s = R.strings.resource_well.mainView.footer,
                    i = ({ isSmall: e, onHangarShow: u, subTitle: t }) =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                'div',
                                { className: 'NoVehiclesState_footerTitle_29' },
                                s.noVehicles.title(),
                            ),
                            a().createElement('div', { className: 'NoVehiclesState_footerSubtitle_e6' }, t),
                            a().createElement(
                                'div',
                                { className: 'NoVehiclesState_buttonsBlock_d7' },
                                a().createElement(
                                    r.u5,
                                    {
                                        type: r.L$.primary,
                                        size: e ? r.qE.small : r.qE.medium,
                                        onClick: u,
                                        mixClass: 'NoVehiclesState_button_bb',
                                    },
                                    s.backToHangar.button.text(),
                                ),
                            ),
                        );
            },
            7712: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => _ });
                var r = t(6483),
                    n = t.n(r),
                    a = t(280),
                    s = t(7363),
                    i = t.n(s),
                    o = t(9953),
                    l = t(4306);
                const c = 'VehicleCount_text_6f',
                    d = { remainTop: 'remainTop', remain: 'remain', noRemains: 'noRemains', noData: 'noData' },
                    _ = (e) => {
                        const u = e.vehicleCounter,
                            t = u.vehicleCount,
                            r = u.isVehicleCountAvailable,
                            s = u.isSerial,
                            _ = t < 20,
                            m = r && t > 0,
                            E =
                                m && s
                                    ? d.remainTop
                                    : m && !s
                                      ? d.remain
                                      : r && 0 === t
                                        ? d.noRemains
                                        : r
                                          ? void 0
                                          : d.noData,
                            A = {
                                enter: 'VehicleCount_animations__enter_d9',
                                exit: 'VehicleCount_animations__exit_89',
                            },
                            F = {
                                counter: i().createElement(
                                    'div',
                                    { className: 'VehicleCount_counterWrapper_fc' },
                                    _ && i().createElement('span', { className: 'VehicleCount_counterGlow_a9' }),
                                    i().createElement('span', { className: 'VehicleCount_textCounter_f6' }, t),
                                ),
                                icon: i().createElement('span', { className: 'VehicleCount_alertIcon_63' }),
                            };
                        return i().createElement(
                            'div',
                            { className: 'VehicleCount_base_c4' },
                            i().createElement(
                                o.Z,
                                null,
                                i().createElement(
                                    l.Z,
                                    { key: `state-${d}-${t}`, timeout: 300, classNames: A },
                                    i().createElement(
                                        'div',
                                        null,
                                        (() => {
                                            switch (E) {
                                                case d.remainTop:
                                                    return i().createElement(a.z, {
                                                        classMix: c,
                                                        text: R.strings.resource_well.resourcesLoadingView.remainTopVehicles(),
                                                        binding: F,
                                                    });
                                                case d.remain:
                                                    return i().createElement(a.z, {
                                                        classMix: c,
                                                        text: R.strings.resource_well.resourcesLoadingView.remainVehicles(),
                                                        binding: F,
                                                    });
                                                case d.noRemains:
                                                    return i().createElement(
                                                        i().Fragment,
                                                        null,
                                                        i().createElement('span', {
                                                            className: 'VehicleCount_counterBg_52',
                                                        }),
                                                        i().createElement(
                                                            'span',
                                                            { className: n()(c, 'VehicleCount_text__finished_5a') },
                                                            R.strings.resource_well.resourcesLoadingView.noVehiclesRemains(),
                                                        ),
                                                    );
                                                case d.noData:
                                                    return i().createElement(a.z, {
                                                        classMix: n()(c, 'VehicleCount_text__alert_d1'),
                                                        text: R.strings.resource_well.resourcesLoadingView.noVehicleData(),
                                                        binding: F,
                                                    });
                                            }
                                        })(),
                                    ),
                                ),
                            ),
                        );
                    };
            },
            6880: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
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
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = { base: 'FormatText_base_d0' };
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
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, r] = deferred[o], a = !0, s = 0; s < u.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, r];
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
        (__webpack_require__.j = 'lobby/feature/ResourcesLoadingView/ResourcesLoadingView'),
        (() => {
            var e = {
                'lobby/feature/ResourcesLoadingView/ResourcesLoadingView': 0,
                'lobby/feature/sharedComponents/NoVehiclesState/NoVehiclesState': 0,
                'lobby/feature/sharedComponents/VehicleCount/VehicleCount': 0,
            };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, s, i] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        (n = a[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/resource_well.vendors'], () =>
        __webpack_require__(2231),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
