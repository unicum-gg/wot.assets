(() => {
    var __webpack_modules__ = {
            944: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => F });
                var r = t(6483),
                    n = t.n(r),
                    a = t(7044),
                    i = t(2344),
                    o = t(3112),
                    s = t(3649),
                    l = t(7363),
                    c = t.n(l),
                    E = t(7916),
                    A = t(7165);
                const d = (e) => e.toString().padStart(2, '0'),
                    F = (e, u) => {
                        switch (u) {
                            case A.o.Description:
                                return (0, a.wB)(e);
                            case A.o.Short:
                                return `${d(e.minutes)}:${d(e.seconds)}`;
                            case A.o.Long:
                                return `${d(e.hours)}:${d(e.minutes)}:${d(e.seconds)}`;
                            case A.o.Extended:
                                return `${(0, s.WU)(R.strings.common.duration.days(), { days: e.days })} | ${d(e.hours)}:${d(e.minutes)}:${d(e.seconds)}`;
                        }
                    },
                    _ = R.images.gui.maps.icons.components.countdown,
                    D = (e, u) => {
                        const t = 2 === u ? _.big : _;
                        switch (e) {
                            case A.l.Timer:
                                return t.clock();
                            case A.l.Countdown:
                                return t.hourglass();
                            case A.l.Cooldown:
                                return t.lock();
                        }
                    };
                (0, l.memo)(
                    ({
                        duration: e,
                        icon: u = A.l.Timer,
                        style: t = A.o.Description,
                        onTimeReached: r,
                        refreshRate: s,
                        className: l = '',
                        classNames: d = {},
                    }) => {
                        const _ = null != s ? s : t !== A.o.Description ? 1 : void 0,
                            m = (0, i.au)(e, _),
                            C = (0, o.V)();
                        r && r[m] && r[m]();
                        const B = F((0, a.f8)(m), t);
                        return c().createElement(
                            'div',
                            { className: n()(E.Z.base, l) },
                            u !== A.l.None &&
                                c().createElement('div', {
                                    className: n()(E.Z.icon, d.icon),
                                    style: { backgroundImage: `url('${D(u, C)}')` },
                                }),
                            c().createElement('div', { className: n()(E.Z.description, d.text) }, B),
                        );
                    },
                );
            },
            7298: (e, u, t) => {
                'use strict';
                t.d(u, { o_: () => r.o });
                var r = t(7165);
                t(944);
            },
            7165: (e, u, t) => {
                'use strict';
                let r, n;
                (t.d(u, { l: () => r, o: () => n }),
                    (function (e) {
                        ((e.Timer = 'timer'),
                            (e.Countdown = 'countdown'),
                            (e.Cooldown = 'cooldown'),
                            (e.None = 'none'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(n || (n = {})));
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var r = t(6483),
                    n = t.n(r),
                    a = t(3649),
                    i = t(7363),
                    o = t.n(i),
                    s = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: r = a.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, a.WU)(u, e) : u;
                    return o().createElement(
                        i.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            o().createElement(
                                'div',
                                { className: n()(s.Z.base, t), key: `${u}-${l}` },
                                (0, a.Uw)(u, r, e).map((e, u) =>
                                    o().createElement(i.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => r.z });
                var r = t(280);
                t(8082);
            },
            8082: (e, u, t) => {
                'use strict';
                t(3649);
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
                t.d(u, { f8: () => l, s2: () => s, s_: () => a, wB: () => c, yR: () => i });
                var r = t(3649),
                    n = (t(9916), t(8613));
                const a = 1e3,
                    i = 60,
                    o = 60 * i,
                    s = 24 * o;
                (Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime);
                function l(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / s);
                    u -= t * s;
                    const r = Math.trunc(u / o);
                    u -= r * o;
                    const n = Math.trunc(u / i);
                    return ((u -= n * i), { days: t, hours: r, minutes: n, seconds: u });
                }
                const c = (e, u = !0) =>
                    e.days > 7 && u
                        ? (0, r.WU)(R.strings.common.duration.days(), { days: e.days })
                        : e.days >= 1
                          ? 0 === e.hours
                              ? (0, r.WU)(R.strings.common.duration.days(), { days: e.days })
                              : `${(0, r.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, r.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                          : e.hours >= 1
                            ? 0 === e.minutes
                                ? (0, r.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                : `${(0, r.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, r.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : (0, r.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 });
            },
            9294: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => Ee });
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => F, off: () => A, on: () => E, onResize: () => l, onScaleUpdated: () => c }));
                var n = {};
                (t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => C,
                        getSize: () => m,
                        graphicsQuality: () => B,
                        playSound: () => _,
                        setRTPC: () => D,
                    }));
                var a = {};
                (t.r(a), t.d(a, { getBgUrl: () => x, getTextureUrl: () => y }));
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
                        addModelObserver: () => G,
                        addPreloadTexture: () => W,
                        arabic2roman: () => ne,
                        children: () => a,
                        displayStatus: () => T,
                        displayStatusIs: () => ie,
                        enableFullScreenModeSupported: () => le,
                        events: () => L,
                        extraSize: () => oe,
                        forceTriggerMouseMove: () => ue,
                        freezeTextureBeforeResize: () => X,
                        getBrowserTexturePath: () => z,
                        getDisplayStatus: () => te,
                        getExternalPaddingsRem: () => ae,
                        getFontNames: () => re,
                        getScale: () => q,
                        getSize: () => $,
                        getViewGlobalPosition: () => V,
                        initExternalPaddings: () => ce,
                        isEventHandled: () => ee,
                        isFocused: () => Q,
                        pxToRem: () => Y,
                        remToPx: () => Z,
                        resize: () => j,
                        sendEvent: () => I,
                        setAnimateWindow: () => K,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => H,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => se,
                    }));
                const l = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    E = (e, u) => engine.on(e, u),
                    A = (e, u) => engine.off(e, u),
                    d = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const F = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && s(!1);
                    }
                    function t() {
                        e.enabled && s(!0);
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
                            : s(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${u}`,
                                        i = d[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        r(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(a, o),
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
                    return Object.assign({}, n, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
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
                function D(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const B = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    v = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(v).reduce((e, u) => ((e[u] = () => _(v[u])), e), {}),
                    h = { play: Object.assign({}, p, { sound: _ }), setRTPC: D },
                    f = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    b = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function w(e) {
                    let u = '';
                    for (let t = b.length - 1; t >= 0; t--) for (; e >= b[t]; ) ((u += f[t]), (e -= b[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function y(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function x(e, u, t) {
                    return `url(${y(e, u, t)})`;
                }
                const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    L = {
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
                    S = ['args'];
                const P = 2,
                    O = 16,
                    M = 32,
                    N = 64,
                    k = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, S);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    I = {
                        close(e) {
                            k('popover' === e ? P : M);
                        },
                        minimize() {
                            k(N);
                        },
                        move(e) {
                            k(O, { isMouseEvent: !0, on: e });
                        },
                    };
                function W(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function z(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function G(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function $(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function j(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function V(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: Z(u.x), y: Z(u.y) };
                }
                function X() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function Y(e) {
                    return viewEnv.pxToRem(e);
                }
                function Z(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function J() {
                    return viewEnv.setEventHandled();
                }
                function ee() {
                    return viewEnv.isEventHandled();
                }
                function ue() {
                    viewEnv.forceTriggerMouseMove();
                }
                function te() {
                    return viewEnv.getShowingStatus();
                }
                const re = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ne = w;
                function ae() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ie = Object.keys(T).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === T[u]), e), {}),
                    oe = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    se = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : L.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function le() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ce(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            r = u.right,
                            n = u.bottom,
                            a = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
                const Ee = { view: i, client: n, sound: h, intl: g };
            },
            4598: (e, u, t) => {
                'use strict';
                function r() {}
                t.d(u, { ZT: () => r, jv: () => a, yR: () => n });
                function n(e) {
                    return e;
                }
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => r });
                const r = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        r = R.invalid('resId'),
                        n = '';
                    var a;
                    u &&
                        ((n = (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) || ''),
                        (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (r = window.subViews[t].id));
                    return { callerUrl: n, caller: t, stack: u, resId: r };
                };
            },
            2344: (e, u, t) => {
                'use strict';
                t.d(u, { au: () => n });
                var r = t(3469);
                (t(2133), t(2790), t(579), t(5360), t(9056));
                const n = r.Z;
            },
            6536: (e, u, t) => {
                'use strict';
                t(7363);
            },
            3469: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => i });
                var r = t(7044),
                    n = t(7363);
                const a = () => {},
                    i = (e = 0, u, t = 0, i = a) => {
                        const o = (0, n.useState)(e),
                            s = o[0],
                            l = o[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const n = Date.now(),
                                        a = u || (e > 2 * r.yR ? r.yR : 1),
                                        o = setInterval(() => {
                                            const u = e - Math.floor((Date.now() - n) / r.s_);
                                            null !== t && u <= t ? (l(t), i && i(), clearInterval(o)) : l(u);
                                        }, a * r.s_);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                            }, [e, u, t, i]),
                            s
                        );
                    };
            },
            2133: (e, u, t) => {
                'use strict';
                t(7363);
            },
            5360: (e, u, t) => {
                'use strict';
                t(6536);
                var r = t(9916);
                t(7363);
                r.Sw.instance;
                let n;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(n || (n = {}));
            },
            9056: (e, u, t) => {
                'use strict';
                var r = t(9916);
                t(7363);
                r.Sw.instance;
            },
            2790: (e, u, t) => {
                'use strict';
                t(7363);
            },
            3112: (e, u, t) => {
                'use strict';
                t.d(u, { V: () => a });
                var r = t(7363),
                    n = t(9294);
                const a = () => {
                    const e = (0, r.useState)(n.O.view.getScale()),
                        u = e[0],
                        t = e[1];
                    return (
                        (0, r.useEffect)(() => {
                            const e = () => {
                                t(n.O.view.getScale());
                            };
                            return (
                                window.addEventListener('resize', e),
                                () => {
                                    window.removeEventListener('resize', e);
                                }
                            );
                        }, []),
                        u
                    );
                };
            },
            579: (e, u, t) => {
                'use strict';
                (t(9294), t(7363));
            },
            5521: (e, u, t) => {
                'use strict';
                let r, n;
                (t.d(u, { n: () => r }),
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
                    })(r || (r = {})),
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
            8440: (e, u, t) => {
                'use strict';
                t.d(u, { Zg: () => r });
                class r {
                    constructor(e = null) {
                        ((this._prices = []), null !== e && null !== e.prices && (this._prices = e.prices));
                    }
                    get length() {
                        return null !== this._prices ? this._prices.length : 0;
                    }
                    isEmpty(e = 0) {
                        return 0 === this.getValue(e);
                    }
                    hasDiscount(e = 0) {
                        return this.getDiscountValue(e) > 0;
                    }
                    getType(e = 0) {
                        const u = this._prices[e];
                        return u ? this._getPriceItemType(u.value.price) : '';
                    }
                    getValue(e = 0) {
                        const u = this._prices[e];
                        return u ? this._getPriceItemValue(u.value.price) : 0;
                    }
                    getDefValue(e = 0) {
                        const u = this._prices[e];
                        return u ? this._getPriceItemValue(u.value.defPrice) : 0;
                    }
                    getDiscountValue(e = 0) {
                        const u = this._prices[e];
                        return u ? this._getPriceItemValue(u.value.discount) : 0;
                    }
                    _getPriceItemType(e) {
                        let u = '';
                        return e.some((e) => ((u = e.value.name), e.value.value > 0)) ? u : '';
                    }
                    _getPriceItemValue(e) {
                        let u = 0;
                        return e.some((e) => ((u = e.value.value), u > 0)) ? u : 0;
                    }
                }
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
                t.d(u, { Uw: () => d, WU: () => a, v2: () => n });
                var r = t(1281);
                let n;
                function a(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(n || (n = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    s = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    l = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? o : s, []),
                    c = (() => {
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    A = (e, u = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(t)) return c(e);
                        if ('ja' === t) {
                            return (0, r.D4)()
                                .parse(e)
                                .map((e) => i(e));
                        }
                        return ((e, u = n.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = i(e);
                            return (l(a, /( )/, u).forEach((e) => (t = t.concat(l(e, r, n.left)))), t);
                        })(e, u);
                    },
                    d = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : A(e, u)));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(9294);
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
                t.d(u, { Sw: () => a.Z, B3: () => s, Z5: () => i.Z5, B0: () => o, ry: () => m });
                class r {
                    constructor() {
                        ((this.entries = []),
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
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                r.__instance = void 0;
                const n = r;
                var a = t(1358);
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
                var A = t(5521),
                    d = t(9294);
                const F = ['args'];
                function _(e, u, t, r, n, a, i) {
                    try {
                        var o = e[a](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(r, n);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    m = (function () {
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
                                        function i(e) {
                                            _(a, r, n, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            _(a, r, n, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, F);
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
                    B = () => C(o.CLOSE),
                    g = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var v = t(7572);
                const p = n.instance,
                    h = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => C(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                A = s.height,
                                F = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(c) + i.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(A),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: D(F),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, B);
                        },
                        handleViewEvent: C,
                        onBindingsReady: m,
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
                        ClickOutsideManager: p,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = h;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => a, Z5: () => r, cy: () => n });
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
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            8157: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => C });
                var r = t(7902),
                    n = t(9916),
                    a = t(7363),
                    i = t.n(a);
                const o = [
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
                function s(e) {
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
                const l = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    c = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            i = e.onMouseEnter,
                            c = e.onMouseLeave,
                            E = e.onMouseDown,
                            A = e.onClick,
                            d = e.ignoreShowDelay,
                            F = void 0 !== d && d,
                            _ = e.ignoreMouseClick,
                            D = void 0 !== _ && _,
                            m = e.decoratorId,
                            C = void 0 === m ? 0 : m,
                            B = e.isEnabled,
                            g = void 0 === B || B,
                            v = e.targetId,
                            p = void 0 === v ? 0 : v,
                            h = e.onShow,
                            f = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, o);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, a.useMemo)(() => p || (0, r.F)().resId, [p]),
                            x = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (l(t, C, { isMouseEvent: !0, on: !0, arguments: s(n) }, y),
                                    h && h(),
                                    (w.current.isVisible = !0));
                            }, [t, C, n, y, h]),
                            T = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        l(t, C, { on: !1 }, y),
                                        w.current.isVisible && f && f(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, C, y, f]),
                            L = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', L, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && T();
                            }, [g, T]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        (window.removeEventListener('mouseleave', T), T());
                                    }
                                ),
                                [T],
                            ));
                        return g
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(w.current.timeoutId),
                                                      (w.current.timeoutId = window.setTimeout(x, F ? 100 : 400)),
                                                      i && i(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (T(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === D && T(), null == A || A(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === D && T(), null == E || E(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : u;
                        var S;
                    },
                    E = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const d = R.views.common.tooltip_window.simple_tooltip_content,
                    F = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, E);
                        const F = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: n, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, n, s]);
                        return i().createElement(
                            c,
                            A(
                                {
                                    contentId:
                                        ((_ = null == s ? void 0 : s.hasHtmlContent),
                                        _ ? d.SimpleTooltipHtmlContent('resId') : d.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: F,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                var _ = t(2932),
                    D = t(9161),
                    m = t(6493);
                const C = ({
                    behaviour: e,
                    children: u,
                    item: t,
                    category: r,
                    activeSecondsLeft: n,
                    hasActiveGroupItems: a,
                }) => {
                    if (e === m.E.LOBBY) {
                        if (!t.isPremium && t.state !== _.mu.Active && a)
                            return i().createElement(
                                F,
                                { body: R.strings.personal_reserves.disabledReserveTooltip.text() },
                                u,
                            );
                        if (0 === t.inDepot && !t.isPremium && t.reserveType !== _.z3.Clan)
                            return i().createElement(
                                c,
                                { contentId: R.views.common.personal_reserves.ReservesDisabledTooltip('resId') },
                                u,
                            );
                        const e = t.reserveType === _.z3.Clan,
                            n = t.boosterID > 0 ? t.boosterID : D.py[r];
                        return e && !a
                            ? u
                            : i().createElement(
                                  c,
                                  {
                                      contentId: R.views.lobby.personal_reserves.BoosterTooltip('resId'),
                                      args: { specialAlias: e ? D.w0 : D.yD, boosterId: n },
                                  },
                                  u,
                              );
                    }
                    if (e === m.E.BATTLE) {
                        if (t.state !== _.mu.Active && a)
                            return i().createElement(
                                F,
                                { body: R.strings.personal_reserves.disabledReserveTooltip.text() },
                                u,
                            );
                        if (t.state === _.mu.Active && n <= 0)
                            return i().createElement(
                                F,
                                { body: R.strings.personal_reserves.finishedReserveTooltip.text() },
                                u,
                            );
                        if (0 === t.inDepot)
                            return t.isPremium
                                ? i().createElement(
                                      F,
                                      { body: R.strings.personal_reserves.noPaidReserveTooltip.text() },
                                      u,
                                  )
                                : i().createElement(
                                      c,
                                      { contentId: R.views.common.personal_reserves.ReservesDisabledTooltip('resId') },
                                      u,
                                  );
                    }
                    return u;
                };
            },
            5248: (e, u, t) => {
                'use strict';
                t.d(u, { _: () => I, Z: () => W });
                var r = t(6483),
                    n = t.n(r),
                    a = t(7363),
                    i = t.n(a);
                const o = {
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
                    s = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let u = e.value,
                        t = e.isEmpty,
                        r = e.className,
                        a = e.size,
                        c = void 0 === a ? 'normal' : a,
                        E = e.fadeInAnimation,
                        A = void 0 !== E && E,
                        d = e.hide,
                        F = void 0 !== d && d,
                        _ = e.maximumNumber,
                        D = void 0 === _ ? 99 : _,
                        m = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, s);
                    const C = t ? null : u,
                        B = 'string' == typeof C;
                    if ((C && !B && C < 0) || 0 === C) return null;
                    const g = C && !B && C > D,
                        v = n()(
                            o.base,
                            o[`base__${c}`],
                            A && o.base__animated,
                            F && o.base__hidden,
                            !C && o.base__pattern,
                            t && o.base__empty,
                            r,
                        );
                    return i().createElement(
                        'div',
                        l({ className: v }, m),
                        i().createElement('div', { className: o.bg }),
                        i().createElement('div', { className: o.pattern }),
                        i().createElement(
                            'div',
                            { className: n()(o.value, B && o.value__text) },
                            g ? D : C,
                            g && i().createElement('span', { className: o.plus }, '+'),
                        ),
                    );
                };
                var E = t(7298),
                    A = t(944),
                    d = t(9766),
                    F = t(2932),
                    _ = t(7044),
                    D = t(2344),
                    m = t(8440),
                    C = t(7727),
                    B = t(6342),
                    g = t(9916);
                const v = ({ value: e, format: u = 'integral' }) => {
                        const t = (function (e) {
                                return 'gold' === e ? g.B3.GOLD : g.B3.INTEGRAL;
                            })(u),
                            r = g.Z5.getNumberFormat(e, t);
                        return void 0 !== e && void 0 !== r ? r : null;
                    },
                    p = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                        'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                        'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                        'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__eliteXP: 'Currency_value__eliteXP_62',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    };
                let h, f, b;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(h || (h = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(f || (f = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(b || (b = {})));
                const w = (0, a.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: r,
                            value: a,
                            discountValue: o,
                            showPlus: s,
                            isEnough: l = !0,
                            stockBackgroundName: c = b.Red,
                            className: E,
                            classNames: A,
                        }) =>
                            i().createElement(
                                'span',
                                { className: n()(p.base, p[`base__${t}`], E) },
                                i().createElement(
                                    'span',
                                    {
                                        className: n()(
                                            p.value,
                                            p[`value__${r}`],
                                            !l && p.value__notEnough,
                                            null == A ? void 0 : A.value,
                                        ),
                                    },
                                    s && a > 0 && '+',
                                    i().createElement(v, { value: a, format: r === f.gold ? 'gold' : 'integral' }),
                                ),
                                i().createElement('span', {
                                    className: n()(p.icon, p[`icon__${r}-${t}`], null == A ? void 0 : A.icon),
                                }),
                                e &&
                                    i().createElement(
                                        'span',
                                        {
                                            className: n()(
                                                p.stock,
                                                o && p.stock__indent,
                                                u && p.stock__interactive,
                                                null == A ? void 0 : A.stock,
                                            ),
                                        },
                                        i().createElement('span', {
                                            className: p.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                        }),
                                        Boolean(o) && o,
                                    ),
                            ),
                    ),
                    y = 'Quantity_base_e7',
                    x = 'Quantity_base__highlighted_3d',
                    T = 'Quantity_icon_e5',
                    L = 'Quantity_price_5f',
                    S = 'Quantity_price_icon_83',
                    P = 'Quantity_price__discount_41',
                    O = ({
                        isPurchasable: e,
                        goldPrice: u = 0,
                        isDiscount: t = !1,
                        playerGold: r,
                        inDepot: a,
                        isHighlighted: o,
                    }) =>
                        e && u
                            ? i().createElement(w, {
                                  size: 'small',
                                  type: 'gold',
                                  value: u,
                                  isEnough: r >= u,
                                  isDiscount: t,
                                  className: n()(L, t && P),
                                  classNames: { icon: S },
                              })
                            : i().createElement(
                                  'div',
                                  { className: n()(y, { [x]: o }) },
                                  i().createElement('div', { className: T }),
                                  a,
                              ),
                    M = {
                        base: 'ReserveCard_base_37',
                        base__tooltipSize: 'ReserveCard_base__tooltipSize_15',
                        base__doubleSize: 'ReserveCard_base__doubleSize_fc',
                        base__clan: 'ReserveCard_base__clan_64',
                        activeLight: 'ReserveCard_activeLight_be',
                        boosterIcon: 'ReserveCard_boosterIcon_37',
                        base__expiringToday: 'ReserveCard_base__expiringToday_d3',
                        base__inactive: 'ReserveCard_base__inactive_20',
                        base__disabled: 'ReserveCard_base__disabled_9c',
                        timerContainer: 'ReserveCard_timerContainer_65',
                        overlay: 'ReserveCard_overlay_1c',
                        plusIcon: 'ReserveCard_plusIcon_27',
                        base__activatedAnimation: 'ReserveCard_base__activatedAnimation_aa',
                        cardFill: 'ReserveCard_cardFill_15',
                        fillIn: 'ReserveCard_fillIn_2b',
                        cardFill_border: 'ReserveCard_cardFill_border_c0',
                        borderBrightness: 'ReserveCard_borderBrightness_e5',
                        activeLight_border: 'ReserveCard_activeLight_border_97',
                        timerSpark: 'ReserveCard_timerSpark_2f',
                        scaleUpDown: 'ReserveCard_scaleUpDown_74',
                        fadeIn: 'ReserveCard_fadeIn_50',
                        base__zeroTime: 'ReserveCard_base__zeroTime_c0',
                        base__gradient: 'ReserveCard_base__gradient_f3',
                        disabledPattern: 'ReserveCard_disabledPattern_5d',
                        overlayButton: 'ReserveCard_overlayButton_c6',
                        overlayClanButton: 'ReserveCard_overlayClanButton_af',
                        overlayButton_light: 'ReserveCard_overlayButton_light_39',
                        overlayClanButton_light: 'ReserveCard_overlayClanButton_light_02',
                        overlayButton_icon: 'ReserveCard_overlayButton_icon_89',
                        cardContent: 'ReserveCard_cardContent_98',
                        cardContent_quantity: 'ReserveCard_cardContent_quantity_32',
                        base__active: 'ReserveCard_base__active_7e',
                        cardContent_expiringQuantity: 'ReserveCard_cardContent_expiringQuantity_a6',
                        cardFill_pattern: 'ReserveCard_cardFill_pattern_55',
                        cardFill_borderTop: 'ReserveCard_cardFill_borderTop_4f',
                        timerContainer_icon: 'ReserveCard_timerContainer_icon_c9',
                        timerContainer_timer: 'ReserveCard_timerContainer_timer_44',
                        bonus: 'ReserveCard_bonus_d5',
                        bonusText: 'ReserveCard_bonusText_b7',
                        bonusText__copied: 'ReserveCard_bonusText__copied_26',
                        expiringLight: 'ReserveCard_expiringLight_c0',
                        expiringIndicator: 'ReserveCard_expiringIndicator_bb',
                    },
                    N = [
                        'reserve',
                        'playerGold',
                        'activeSecondsLeft',
                        'isDisabled',
                        'isPurchasable',
                        'cardSize',
                        'onActivate',
                        'onExpire',
                        'onCardHover',
                    ];
                function k() {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                }
                let I;
                !(function (e) {
                    ((e[(e.TOOLTIP = 0)] = 'TOOLTIP'), (e[(e.SINGLE = 1)] = 'SINGLE'), (e[(e.DOUBLE = 2)] = 'DOUBLE'));
                })(I || (I = {}));
                const W = (e) => {
                    let u = e.reserve,
                        t = e.playerGold,
                        r = e.activeSecondsLeft,
                        o = e.isDisabled,
                        s = e.isPurchasable,
                        l = e.cardSize,
                        g = e.onActivate,
                        v = e.onExpire,
                        p = e.onCardHover,
                        h = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, N);
                    const f = u.boosterID,
                        b = u.reserveType,
                        w = u.inDepot,
                        y = u.totalDuration,
                        x = void 0 === y ? 60 : y,
                        T = u.isPremium,
                        L = u.iconId,
                        S = u.price,
                        P = u.minBonus,
                        W = u.maxBonus,
                        H = u.state,
                        z = u.nextExpirationAmount,
                        G = u.isNew,
                        U = u.inDepotExpirableAmount,
                        $ = u.isExpiringSoon,
                        j = U > 0,
                        V = (0, D.au)(r, 1),
                        X = Math.ceil((V / x) * 100),
                        q = H === F.mu.Active,
                        Y = l === I.TOOLTIP;
                    (0, a.useEffect)(() => {
                        q && V <= 0 && v && v();
                    }, [v, V, q]);
                    const Z = ($ || j) && !q,
                        K = q && x - r < 5;
                    (0, a.useEffect)(() => {
                        K && (0, C.G)('personal_reserves_activation');
                    }, [K]);
                    const Q = b === F.z3.Clan,
                        J = n()(M.base, {
                            [M.base__clan]: Q,
                            [M.base__event]: b === F.z3.Event,
                            [M.base__premium]: T,
                            [M.base__doubleSize]: l === I.DOUBLE,
                            [M.base__tooltipSize]: Y,
                            [M.base__active]: q,
                            [M.base__disabled]: !q && o,
                            [M.base__inactive]: !q && !o,
                            [M.base__activatedAnimation]: K,
                            [M.base__zeroTime]: q && V <= 0,
                            [M.base__gradient]: q,
                        }),
                        ee = (0, a.useCallback)(() => {
                            (q || o || (0, C.G)('personal_reserves_hover'), q || o || !p || p({ boosterId: f }));
                        }, [f, q, o, p]),
                        ue = (0, a.useCallback)(() => {
                            q || o || !g || g({ boosterId: f });
                        }, [f, g, q, o]),
                        te = (0, _.f8)(V),
                        re = (0, A.M)(te, te.hours ? E.o_.Long : E.o_.Short),
                        ne = (0, B.Eh)(P, W, L),
                        ae = ne[0],
                        ie = ne[1],
                        oe = new m.Zg(S),
                        se = oe.getValue(0),
                        le = oe.hasDiscount(0),
                        ce = (0, a.useRef)(null),
                        Ee = l === I.TOOLTIP ? 'big' : 's232x174',
                        Ae = `url(${!q && Q && Y ? R.images.gui.maps.icons.personal_reserves.clan_icon() : R.images.gui.maps.icons.quests.bonuses[Ee].$dyn(L)})`,
                        de = i().createElement(d.z, {
                            text: R.strings.personal_reserves.activation.bonus(),
                            binding: { bonus: ie },
                        });
                    return i().createElement(
                        'div',
                        k({ className: J, style: { '--fillPercentage': `${X}%` } }, h),
                        i().createElement(
                            'div',
                            { className: M.contentWrapper, onMouseEnter: ee, onClick: ue },
                            q &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: M.cardFill },
                                        i().createElement('div', { className: M.cardFill_pattern }),
                                        i().createElement('div', { className: M.cardFill_borderTop }),
                                    ),
                                    i().createElement('div', { className: M.activeLight }),
                                ),
                            i().createElement(
                                'div',
                                { className: M.overlay },
                                Q
                                    ? i().createElement(
                                          'div',
                                          { className: M.overlayClanButton },
                                          i().createElement('div', { className: M.overlayClanButton_light }),
                                          i().createElement(d.z, {
                                              text: R.strings.personal_reserves.activation.activateButtonClan(),
                                          }),
                                      )
                                    : i().createElement(
                                          'div',
                                          { className: M.overlayButton },
                                          i().createElement('div', { className: M.light }),
                                          i().createElement('img', {
                                              className: M.overlayButton_icon,
                                              src: R.images.gui.maps.icons.personal_reserves.activation.booster_icon(),
                                              alt: '',
                                          }),
                                          i().createElement(d.z, {
                                              text: R.strings.personal_reserves.activation.activateButton(),
                                          }),
                                      ),
                            ),
                            o && i().createElement('div', { className: M.disabledPattern }),
                            !q && !Q && $ && i().createElement('div', { className: M.expiringLight }),
                            i().createElement(
                                'div',
                                { className: M.cardContent },
                                !Q &&
                                    !q &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement(
                                            'div',
                                            { className: M.cardContent_quantity },
                                            i().createElement(O, {
                                                isPurchasable: s,
                                                goldPrice: se,
                                                isDiscount: le,
                                                playerGold: t,
                                                inDepot: w,
                                                isHighlighted: Z,
                                            }),
                                        ),
                                        $ &&
                                            !q &&
                                            i().createElement('div', { className: M.cardContent_expiringQuantity }, z),
                                    ),
                                i().createElement('div', {
                                    style: { backgroundImage: Ae },
                                    className: M.boosterIcon,
                                    ref: ce,
                                }),
                                i().createElement(
                                    'div',
                                    { className: M.timerContainer },
                                    i().createElement('div', { className: M.timerContainer_icon }),
                                    i().createElement('div', { className: M.timerContainer_timer }, re),
                                ),
                                i().createElement(
                                    'div',
                                    { className: M.bonus },
                                    ae &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement('div', { className: M.bonusText }, de),
                                            i().createElement(
                                                'div',
                                                { className: n()(M.bonusText, M.bonusText__copied) },
                                                de,
                                            ),
                                        ),
                                ),
                            ),
                            Q && !q && i().createElement('div', { className: M.plusIcon }),
                        ),
                        j &&
                            G &&
                            i().createElement(
                                'div',
                                { className: M.expiringIndicator },
                                i().createElement(c, { isEmpty: !0 }),
                            ),
                    );
                };
            },
            6493: (e, u, t) => {
                'use strict';
                t.d(u, { E: () => m, Z: () => B });
                var r = t(2932),
                    n = t(1226),
                    a = t(4598),
                    i = t(7363),
                    o = t.n(i);
                const s = {
                        [n.d.XP]: R.strings.personal_reserves.activation.battleXPTitle(),
                        [n.d.Credits]: R.strings.personal_reserves.activation.creditsTitle(),
                        [n.d.Combined_XP]: R.strings.personal_reserves.activation.comboXPTitle(),
                        [n.d.Event]: R.strings.personal_reserves.activation.frontLineXPTitle(),
                        [n.d.Clan]: R.strings.personal_reserves.activation.clanBoostersTitle(),
                    },
                    l = {
                        [n.d.XP]: R.strings.personal_reserves.activation.battleXPDescription(),
                        [n.d.Credits]: R.strings.personal_reserves.activation.creditsDescription(),
                        [n.d.Combined_XP]: R.strings.personal_reserves.activation.comboXPDescription(),
                        [n.d.Event]: R.strings.personal_reserves.activation.frontLineXPDescription(),
                        [n.d.Clan]: R.strings.personal_reserves.activation.clanBoostersDescriptionCrewAndFree(),
                    },
                    c = [
                        R.strings.personal_reserves.activation.clanBoostersDescriptionCrewAndFree(),
                        R.strings.personal_reserves.activation.clanBoostersDescription(),
                    ];
                var E = t(5248),
                    A = t(8157);
                const d = 'ReserveGroup_base_86',
                    F = 'ReserveGroup_header_58',
                    _ = 'ReserveGroup_header_title_e4',
                    D = 'ReserveGroup_header_description_03';
                let m;
                !(function (e) {
                    ((e[(e.LOBBY = 0)] = 'LOBBY'), (e[(e.BATTLE = 1)] = 'BATTLE'));
                })(m || (m = {}));
                function C(e, u, t, r) {
                    return !!e && (u ? r : t);
                }
                const B = ({
                    behaviour: e,
                    category: u,
                    className: t,
                    gold: B = 0,
                    items: g,
                    onActivate: v,
                    onCardHover: p = a.ZT,
                }) => {
                    const h = (0, i.useReducer)((e) => !e, !1)[1],
                        f = g.some((e) => (null == e ? void 0 : e.inactivationTime) > 0),
                        b = 1 === g.length,
                        w = u === n.d.Clan,
                        y = s[u],
                        x = Math.ceil(g.length / 2);
                    return o().createElement(
                        o().Fragment,
                        null,
                        Array(x)
                            .fill(0)
                            .map((a, i) => {
                                const s = w ? c[i] : l[u],
                                    x = g.slice(2 * i, 2 * (i + 1)),
                                    T = x.some((e) => (null == e ? void 0 : e.inactivationTime) > 0);
                                return o().createElement(
                                    'div',
                                    { id: `block-${u}`, key: `${u}-${i}`, className: t },
                                    o().createElement(
                                        'div',
                                        { className: d, key: u + '-' + i },
                                        o().createElement(
                                            'div',
                                            { className: F },
                                            o().createElement('div', { className: _ }, y),
                                            o().createElement('div', { className: D }, s),
                                        ),
                                        x.map((t, a) => {
                                            const i = Math.max(
                                                0,
                                                Math.floor((1e3 * t.inactivationTime - Date.now()) / 1e3),
                                            );
                                            let s = !1;
                                            u === n.d.Clan
                                                ? (s = i <= 0 && T)
                                                : e === m.BATTLE
                                                  ? t.state !== r.mu.Active && (s = 0 === t.inDepot || f)
                                                  : t.isPremium ||
                                                    t.state === r.mu.Active ||
                                                    (s = 0 === t.inDepot || (f && t.inactivationTime <= 0));
                                            const l =
                                                e !== m.BATTLE &&
                                                t.isPremium &&
                                                t.state !== r.mu.Active &&
                                                0 === t.inDepot;
                                            return o().createElement(
                                                A.Z,
                                                {
                                                    key: a,
                                                    behaviour: e,
                                                    item: t,
                                                    category: u,
                                                    activeSecondsLeft: i,
                                                    hasActiveGroupItems: C(g.length > 1, w, f, T),
                                                },
                                                o().createElement(E.Z, {
                                                    reserve: t,
                                                    playerGold: B,
                                                    activeSecondsLeft: i,
                                                    isDisabled: s,
                                                    isPurchasable: l,
                                                    cardSize: b ? E._.DOUBLE : E._.SINGLE,
                                                    onActivate: v,
                                                    onExpire: h,
                                                    onCardHover: p,
                                                }),
                                            );
                                        }),
                                    ),
                                );
                            }),
                    );
                };
            },
            6946: (e, u, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => de,
                        Bar: () => ce,
                        DefaultScroll: () => Ae,
                        Direction: () => q,
                        defaultSettings: () => Y,
                        useHorizontalScrollApi: () => K,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => Se, Bar: () => xe, Default: () => Le, useVerticalScrollApi: () => Fe }));
                var a = t(7363),
                    i = t.n(a);
                const o = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var s = t(9294);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e = s.O.client.getSize('rem')) {
                    const u = e.width,
                        t = e.height;
                    return Object.assign(
                        { width: u, height: t },
                        (function (e, u, t) {
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
                        })(u, t, l),
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
                })(c || (c = {}));
                const A = E(),
                    d = (0, a.createContext)(A),
                    F = ['children'];
                (0, a.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, F);
                    const r = (0, a.useContext)(d),
                        n = r.extraLarge,
                        i = r.large,
                        s = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        E = r.extraLargeWidth,
                        A = r.largeWidth,
                        _ = r.mediumWidth,
                        D = r.smallWidth,
                        m = r.extraSmallWidth,
                        C = r.extraLargeHeight,
                        B = r.largeHeight,
                        g = r.mediumHeight,
                        v = r.smallHeight,
                        p = r.extraSmallHeight,
                        h = { extraLarge: C, large: B, medium: g, small: v, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return u;
                        if (t.large && i) return u;
                        if (t.medium && s) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return o(u, t, h);
                        if (t.largeWidth && A) return o(u, t, h);
                        if (t.mediumWidth && _) return o(u, t, h);
                        if (t.smallWidth && D) return o(u, t, h);
                        if (t.extraSmallWidth && m) return o(u, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && v) return u;
                            if (t.extraSmallHeight && p) return u;
                        }
                    }
                    return null;
                });
                const _ = ({ children: e }) => {
                    const u = (0, a.useState)(E),
                        t = u[0],
                        r = u[1],
                        n = (0, a.useState)(!1),
                        o = n[0],
                        l = n[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function e() {
                                r((e) => {
                                    const u = s.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : E(u);
                                });
                            }
                            return (
                                e(),
                                l(!0),
                                s.O.client.events.on('clientResized', e),
                                s.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (s.O.client.events.off('clientResized', e),
                                        s.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        i().createElement(d.Provider, { value: t }, o && e)
                    );
                };
                var D = t(6483),
                    m = t.n(D),
                    C = t(926),
                    B = t.n(C);
                let g, v, p;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(g || (g = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(p || (p = {})));
                const h = () => {
                        const e = (0, a.useContext)(d),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return g.ExtraLarge;
                                    case e.large:
                                        return g.Large;
                                    case e.medium:
                                        return g.Medium;
                                    case e.small:
                                        return g.Small;
                                    case e.extraSmall:
                                        return g.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), g.ExtraSmall);
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
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return p.ExtraLarge;
                                    case e.largeHeight:
                                        return p.Large;
                                    case e.mediumHeight:
                                        return p.Medium;
                                    case e.smallHeight:
                                        return p.Small;
                                    case e.extraSmallHeight:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    f = ['children', 'className'];
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const w = {
                        [v.ExtraSmall]: '',
                        [v.Small]: B().SMALL_WIDTH,
                        [v.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [v.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [p.ExtraSmall]: '',
                        [p.Small]: B().SMALL_HEIGHT,
                        [p.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [p.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [g.ExtraSmall]: '',
                        [g.Small]: B().SMALL,
                        [g.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [g.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [g.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, f);
                        const n = h(),
                            a = n.mediaWidth,
                            o = n.mediaHeight,
                            s = n.mediaSize;
                        return i().createElement('div', b({ className: m()(t, w[a], y[o], x[s]) }, r), u);
                    },
                    L = ['children'];
                const S = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, L);
                    return i().createElement(_, null, i().createElement(T, t, u));
                };
                var P = t(1533),
                    O = t.n(P),
                    M = t(7298),
                    N = t(944),
                    k = t(9766);
                const I = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    ((t = null), (u = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
                            }
                        );
                    },
                    W = (e, u, t) => (t < e ? e : t > u ? u : t),
                    H = [];
                function z(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), H)
                    );
                }
                function G(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => {
                            (window.clearInterval(r.current), (r.current = 0));
                        }, t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const i = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (0 !== r.current && n(), (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, i),
                        n,
                    ];
                }
                var U = t(7727);
                function $(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return j(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return j(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
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
                function j(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                function V(e, u, t) {
                    const r = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, r) {
                                let n,
                                    a = !1,
                                    i = 0;
                                function o() {
                                    n && clearTimeout(n);
                                }
                                function s(...s) {
                                    const l = this,
                                        c = Date.now() - i;
                                    function E() {
                                        ((i = Date.now()), t.apply(l, s));
                                    }
                                    a ||
                                        (r && !n && E(),
                                        o(),
                                        void 0 === r && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (n = setTimeout(
                                                  r
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : E,
                                                  void 0 === r ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                    (s.cancel = function () {
                                        (o(), (a = !0));
                                    }),
                                    s
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                }
                var X = t(7030);
                let q;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(q || (q = {}));
                const Y = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Z = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        forceTriggerMouseMove: i,
                    }) => {
                        const o = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return a <= n ? 0 : W(n, a, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? Y : l,
                                E = (0, a.useRef)(null),
                                A = (0, a.useRef)(null),
                                d = (0, a.useRef)(!1),
                                F = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (var r, n = $(u(e).values()); !(r = n()).done; ) (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                _ = V(
                                    () => {
                                        i && i();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, X.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), F.trigger('change', e), i && d.current && _());
                                    },
                                    onRest: (e) => F.trigger('rest', e),
                                    onStart: (e) => F.trigger('start', e),
                                    onPause: (e) => F.trigger('pause', e),
                                })),
                                m = D[0],
                                C = D[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = m.scrollPosition.get(),
                                            a = (null != (r = m.scrollPosition.goal) ? r : 0) - n;
                                        return o(e, u * t + a + n);
                                    },
                                    [m.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            C.start({
                                                scrollPosition: o(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(r, m.scrollPosition.get()) },
                                            });
                                    },
                                    [C, c.animationConfig, m.scrollPosition],
                                ),
                                v = (0, a.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = A.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = B(u, e, r);
                                        g(a);
                                    },
                                    [g, B, c.step],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && v(r(e)),
                                            E.current && F.trigger('mouseWheel', e, m.scrollPosition, u(E.current)));
                                    },
                                    [m.scrollPosition, v, F],
                                ),
                                h = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
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
                                        I(() => {
                                            const e = E.current;
                                            e &&
                                                (g(o(e, m.scrollPosition.goal), { immediate: !0 }),
                                                F.trigger('resizeHandled'));
                                        }),
                                    [g, m.scrollPosition.goal],
                                ),
                                f = z(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = o(e, m.scrollPosition.goal);
                                    (u !== m.scrollPosition.goal && g(u, { immediate: !0 }),
                                        F.trigger('recalculateContent'));
                                });
                            ((0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            ),
                                (0, a.useEffect)(() => {
                                    const e = E.current;
                                    if (!e || !i) return;
                                    const u = () => {
                                            d.current = !0;
                                        },
                                        t = () => {
                                            d.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            (e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [E]));
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (A.current ? n(A.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: p,
                                    applyScroll: g,
                                    applyStepTo: v,
                                    contentRef: E,
                                    wrapperRef: A,
                                    scrollPosition: C,
                                    animationScroll: m,
                                    recalculateContent: f,
                                    events: { on: F.on, off: F.off },
                                }),
                                [m.scrollPosition, g, v, F.off, F.on, f, p, C, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    K = Z({
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
                            var t;
                            e.style.transform = `translateX(-${0 | (null != (t = u.value.scrollPosition) ? t : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? q.Next : q.Prev),
                        forceTriggerMouseMove: s.O.view.forceTriggerMouseMove,
                    }),
                    Q = 'HorizontalBar_base_49',
                    J = 'HorizontalBar_base__active_5e',
                    ee = 'HorizontalBar_leftButton_5f',
                    ue = 'HorizontalBar_rightButton_03',
                    te = 'HorizontalBar_track_0d',
                    re = 'HorizontalBar_thumb_fd',
                    ne = 'HorizontalBar_rail_32',
                    ae = 'disable',
                    ie = { pending: !1, offset: 0 },
                    oe = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    se = () => {},
                    le = (e, u) => Math.max(20, e.offsetWidth * u),
                    ce = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = oe, onDrag: r = se }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            A = e.stepTimeout || 100,
                            d = (0, a.useState)(ie),
                            F = d[0],
                            _ = d[1],
                            D = (0, a.useCallback)(
                                (e) => {
                                    (_(e),
                                        E.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            C = () => {
                                const u = c.current,
                                    t = E.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    s = W(0, 1, a / (n - r)),
                                    A = (u.offsetWidth - le(u, i)) * s;
                                ((t.style.transform = `translateX(${0 | A}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && E.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(ae),
                                                    void l.current.classList.remove(ae)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(ae),
                                                    void l.current.classList.add(ae)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(ae), l.current.classList.remove(ae));
                                        }
                                    })(A));
                            },
                            B = z(() => {
                                ((() => {
                                    const u = E.current,
                                        t = c.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const i = Math.min(1, r / a);
                                    ((u.style.width = `${le(t, i)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 !== i ? n.current.classList.add(J) : n.current.classList.remove(J)));
                                })(),
                                    C());
                            });
                        ((0, a.useEffect)(() => I(B)),
                            (0, a.useEffect)(
                                () =>
                                    I(() => {
                                        const u = () => {
                                            C();
                                        };
                                        let t = se;
                                        const r = () => {
                                            (t(), (t = I(B)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', B),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', B),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!F.pending) return;
                                const u = s.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const a = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!a || !i) return;
                                        const o = c.current,
                                            s = E.current;
                                        if (!o || !s) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - F.offset - o.getBoundingClientRect().x,
                                            A = (l / o.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, A),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: A }));
                                    }),
                                    t = s.O.client.events.mouse.up(() => {
                                        (u(), D(ie));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, F.offset, F.pending, r, D]));
                        const g = G((u) => e.applyStepTo(u), A, [e]),
                            v = g[0],
                            p = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const h = (e) => {
                            e.target.classList.contains(ae) || (0, U.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: m()(Q, u.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: m()(ee, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ae) || 0 !== e.button || ((0, U.G)('play'), v(q.Next));
                                },
                                onMouseUp: p,
                                ref: o,
                                onMouseEnter: h,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: m()(te, u.track),
                                    onMouseDown: (u) => {
                                        const r = E.current;
                                        if (r && 0 === u.button)
                                            if (((0, U.G)('play'), u.target === r))
                                                D({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const r = E.current,
                                                        n = e.contentRef.current;
                                                    if (!r || !n) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > r.getBoundingClientRect().x ? q.Prev : q.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                i().createElement('div', { ref: E, className: m()(re, u.thumb) }),
                                i().createElement('div', { className: m()(ne, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: m()(ue, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ae) || 0 !== e.button || ((0, U.G)('play'), v(q.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Ee = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ae = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: o,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: m()(Ee.base, e.base) });
                            }, [r]),
                            A = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: m()(Ee.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: m()(Ee.defaultScrollArea, n) },
                                i().createElement(de, { className: s, api: A, classNames: o }, e),
                            ),
                            i().createElement(ce, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    de = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => I(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: m()(Ee.base, u) },
                            i().createElement(
                                'div',
                                {
                                    className: m()(Ee.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: m()(Ee.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((de.Bar = ce), (de.Default = Ae));
                const Fe = Z({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? q.Next : q.Prev),
                    }),
                    _e = 'VerticalBar_base_f3',
                    De = 'VerticalBar_base__active_72',
                    me = 'VerticalBar_topButton_d7',
                    Ce = 'VerticalBar_bottomButton_06',
                    Be = 'VerticalBar_track_df',
                    ge = 'VerticalBar_thumb_32',
                    ve = 'VerticalBar_rail_43',
                    pe = 'disable',
                    he = () => {},
                    fe = { pending: !1, offset: 0 },
                    be = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    we = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    ye = (e, u) => Math.max(20, e.offsetHeight * u),
                    xe = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = be, onDrag: r = he }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            A = e.stepTimeout || 100,
                            d = (0, a.useState)(fe),
                            F = d[0],
                            _ = d[1],
                            D = (0, a.useCallback)(
                                (e) => {
                                    (_(e),
                                        E.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            C = z(() => {
                                const u = E.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const i = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${ye(t, i)}px`),
                                    (u.style.display = 'flex'),
                                    n.current &&
                                        (1 !== i ? n.current.classList.add(De) : n.current.classList.remove(De)),
                                    i
                                );
                            }),
                            B = z(() => {
                                const u = c.current,
                                    t = E.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    s = W(0, 1, a / (n - r)),
                                    A = (u.offsetHeight - ye(u, i)) * s;
                                ((t.style.transform = `translateY(${0 | A}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    o.current.classList.add(pe),
                                                    void l.current.classList.remove(pe)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(pe),
                                                    void l.current.classList.add(pe)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(pe), l.current.classList.remove(pe));
                                        }
                                    })(A));
                            }),
                            g = z(() => {
                                we(e, () => {
                                    (C(), B());
                                });
                            });
                        ((0, a.useEffect)(() => I(g)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    we(e, () => {
                                        B();
                                    });
                                };
                                let t = he;
                                const r = () => {
                                    (t(), (t = I(g)));
                                };
                                return (
                                    e.events.on('recalculateContent', g),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', g),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!F.pending) return;
                                const u = s.O.client.events.mouse.up(() => {
                                        D(fe);
                                    }),
                                    t = s.O.client.events.mouse.move(([u]) => {
                                        we(e, (t) => {
                                            const n = c.current,
                                                a = E.current,
                                                i = e.getContainerSize();
                                            if (!n || !a || !i) return;
                                            const o = u.screenY - F.offset - n.getBoundingClientRect().y,
                                                s = (o / n.offsetHeight) * i;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: s }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, F.offset, F.pending, r, D]));
                        const v = G((u) => e.applyStepTo(u), A, [e]),
                            p = v[0],
                            h = v[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const f = (e) => {
                            e.target.classList.contains(pe) || (0, U.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: m()(_e, u.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: m()(me, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pe) || 0 !== e.button || ((0, U.G)('play'), p(q.Next));
                                },
                                ref: o,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: m()(Be, u.track),
                                    onMouseDown: (u) => {
                                        const r = E.current;
                                        if (r && 0 === u.button)
                                            if (((0, U.G)('play'), u.target === r))
                                                D({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        we(e, (r) => {
                                                            if (!r) return;
                                                            const n = t(e),
                                                                a = e.clampPosition(r, r.scrollTop + n * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > r.getBoundingClientRect().y ? q.Prev : q.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: E, className: m()(ge, u.thumb) }),
                                i().createElement('div', { className: m()(ve, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: m()(Ce, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pe) || 0 !== e.button || ((0, U.G)('play'), p(q.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Te = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Le = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: o,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: m()(Te.base, e.base) });
                            }, [r]),
                            A = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: m()(Te.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: m()(Te.area, n) },
                                i().createElement(Se, { className: o, classNames: s, api: A }, e),
                            ),
                            i().createElement(xe, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Se = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => I(r.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: m()(Te.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: m()(Te.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                Se.Default = Le;
                const Re = { Vertical: n, Horizontal: r };
                var Pe = t(1226),
                    Oe = t(7044),
                    Me = t(2344),
                    Ne = t(5521);
                t(9916);
                const ke = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Ie(e = Ne.n.NONE, u = ke, t = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== Ne.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t, r]);
                }
                var We = t(3403),
                    He = t(280);
                const ze = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    Ge = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Ue = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    $e = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    je = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, a.useMemo)(() => u || {}, [u]);
                        let o = Ge.exec(e),
                            s = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                a = Ue.exec(t),
                                c = $e.exec(t),
                                E = o[1];
                            if (a && c) {
                                const e = a[0],
                                    o = e + l++ + e;
                                ((s = s.replace(t, `%(${o})`)),
                                    (n[o] = ze[e]
                                        ? i().createElement(
                                              'span',
                                              { className: ze[e] },
                                              i().createElement(He.z, { text: E, binding: u }),
                                          )
                                        : i().createElement(
                                              'span',
                                              { style: r(e) },
                                              i().createElement(He.z, { text: E, binding: u }),
                                          )));
                            }
                            o = Ge.exec(e);
                        }
                        return i().createElement(He.z, { text: s, classMix: t, binding: n });
                    });
                var Ve = t(4598),
                    Xe = t(9174);
                function qe(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Ye(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Ye(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
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
                function Ye(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const Ze = (e) => (0 === e ? window : window.subViews.get(e));
                function Ke(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                var Qe = t(3946);
                const Je = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: n, children: o, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, r, n) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Ze,
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
                                                const i = (e) => {
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
                                                        const o = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = s.O.view.addModelObserver(o, u, !0);
                                                        return (n.set(l, t), e && t(i(a)), l);
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
                                                        for (var e, t = qe(n.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            o =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            A = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const u = l(e),
                                                            r = Xe.LO.box(u, { equals: Ve.jv });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Xe.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            n = Xe.LO.box(r, { equals: Ve.jv });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Xe.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            n = Xe.LO.box(r, { equals: Ve.jv });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Xe.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const r = l(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = Xe.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Xe.aD)((u) => {
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
                                                                a = Object.entries(n),
                                                                i = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = Xe.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Xe.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
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
                                                cleanup: E,
                                            }),
                                            d = { mode: t, model: A, externalModel: o, cleanup: E };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && n ? n.controls(d) : u(d),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    A = (0, a.useRef)(!1),
                                    d = (0, a.useState)(r),
                                    F = d[0],
                                    _ = d[1],
                                    D = (0, a.useState)(() => E(r, n, l)),
                                    m = D[0],
                                    C = D[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        A.current ? C(E(F, n, l)) : (A.current = !0);
                                    }, [l, F, n]),
                                    (0, a.useEffect)(() => {
                                        _(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (m.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [m],
                                    ),
                                    i().createElement(t.Provider, { value: m }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    primitives: e.primitives([
                                        'gold',
                                        'canActivateClanReserves',
                                        'nextExpirationTime',
                                        'nextExpirationAmount',
                                    ]),
                                    reserveGroups: e.array('reserveGroups', []),
                                },
                                t = (0, Qe.Om)(() => Ke(u.reserveGroups.get(), ({ category: e }) => e)),
                                r = (0, Qe.Om)(() => Ke(u.reserveGroups.get(), Ve.yR)),
                                n = (0, Qe.Om)((e) => {
                                    const u = r().find((u) => u.category === e);
                                    if (!u) return [];
                                    return Ke(u.reserves, (e) => {
                                        const u = Ke(e.price.prices, (e) => {
                                                const u = Ke(e.price, (e) => ({ value: Object.assign({}, e) })),
                                                    t = Ke(e.defPrice, (e) => ({ value: Object.assign({}, e) })),
                                                    r = Ke(e.discount, (e) => ({ value: Object.assign({}, e) }));
                                                return {
                                                    value: Object.assign({}, e, { price: u, defPrice: t, discount: r }),
                                                };
                                            }),
                                            t = { prices: u };
                                        return Object.assign({}, e, { price: t });
                                    });
                                });
                            return Object.assign({}, u, {
                                computes: { getReserveCategoryNames: t, getReserveCategoryItems: n },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onClose: e.createCallbackNoArgs('onClose'),
                            onNavigateToStore: e.createCallbackNoArgs('onNavigateToStore'),
                            onNavigateToDepot: e.createCallbackNoArgs('onNavigateToDepot'),
                            onBoosterActivate: e.createCallback((e) => e, 'onBoosterActivate'),
                            onCardHover: e.createCallback((e) => e, 'onCardHover'),
                        }),
                    ),
                    eu = Je[0],
                    uu = Je[1],
                    tu = 'App_base_d1',
                    ru = 'App_title_23',
                    nu = 'App_title_icon_72',
                    au = 'App_subTitle_1f',
                    iu = 'App_subTitle_store_21',
                    ou = 'App_pageContent_b8',
                    su = 'App_groupWrapper_e9',
                    lu = 'App_groupWrapper_clan_bc',
                    cu = 'App_scrollWrapper_5c',
                    Eu = 'App_footerWrapper_bf',
                    Au = 'App_footer_f2',
                    du = 'App_footer_icon_c4',
                    Fu = 'App_footer_text_ea',
                    _u = 'App_footer_amount_62',
                    Du = 'App_footer_timer_57',
                    mu = 'App_footer_timerIcon_2e',
                    Cu = 'App_footer_timerGlow_df',
                    Bu = 'App_subFooter_74',
                    gu = 'App_subFooter_infoIcon_72',
                    vu = 'App_subFooter_text_2f',
                    pu = 'App_subFooter_depot_58',
                    hu = 'App_subFooter_depotIcon_da';
                var fu = t(6493);
                const bu = (0, We.Pi)(({ category: e, className: u }) => {
                        const t = uu(),
                            r = t.model,
                            n = t.controls,
                            a = r.computes.getReserveCategoryItems(e),
                            o = n.onBoosterActivate,
                            s = n.onCardHover,
                            l = r.primitives.gold.get();
                        return i().createElement(fu.Z, {
                            behaviour: fu.E.LOBBY,
                            category: e,
                            className: u,
                            onActivate: o,
                            onCardHover: s,
                            gold: l,
                            items: a,
                        });
                    }),
                    wu = (0, We.Pi)(() => {
                        const e = uu(),
                            u = e.model,
                            t = e.controls,
                            r = u.primitives.nextExpirationTime.get(),
                            n = u.primitives.nextExpirationAmount.get(),
                            o = t.onClose,
                            s = t.onNavigateToStore,
                            l = t.onNavigateToDepot,
                            c = u.computes.getReserveCategoryNames(),
                            E = (0, a.useCallback)(() => {
                                o();
                            }, [o]),
                            A = (0, a.useCallback)(() => {
                                s();
                            }, [s]),
                            d = (0, a.useCallback)(() => {
                                l();
                            }, [l]);
                        Ie(Ne.n.ESCAPE, E);
                        const F = Math.max(0, Math.floor((1e3 * r - Date.now()) / 1e3)),
                            _ = F < Oe.s2 && F > 0,
                            D = (0, Me.au)(F, 1),
                            C = (0, Oe.f8)(D),
                            B = (0, N.M)(C, M.o_.Long);
                        return i().createElement(
                            'div',
                            { className: tu },
                            i().createElement(
                                'div',
                                { className: ru },
                                i().createElement('div', { className: nu }),
                                R.strings.personal_reserves.activation.title(),
                            ),
                            i().createElement(je, {
                                classMix: au,
                                text: R.strings.personal_reserves.activation.subTitle.main(),
                                binding: {
                                    store: i().createElement(
                                        'span',
                                        { onClick: A, className: iu },
                                        R.strings.personal_reserves.activation.subTitle.store(),
                                    ),
                                },
                            }),
                            i().createElement(
                                'div',
                                { className: cu },
                                i().createElement(
                                    Re.Horizontal.Area.Default,
                                    { api: K() },
                                    i().createElement(
                                        'div',
                                        { className: ou },
                                        c.map((e) => {
                                            const u = e === Pe.d.Clan;
                                            return i().createElement(bu, {
                                                category: e,
                                                key: e,
                                                className: m()(su, u && lu),
                                            });
                                        }),
                                    ),
                                ),
                            ),
                            _ &&
                                i().createElement(
                                    'div',
                                    { className: Eu },
                                    i().createElement(
                                        'div',
                                        { className: Au },
                                        i().createElement('div', { className: du }),
                                        i().createElement(k.z, {
                                            classMix: Fu,
                                            text: R.strings.personal_reserves.activation.footer(),
                                            binding: {
                                                expirableAmount: i().createElement('div', { className: _u }, n),
                                                expirableTime: i().createElement(
                                                    'div',
                                                    { className: Du },
                                                    i().createElement('div', { className: mu }),
                                                    i().createElement('div', { className: Cu }),
                                                    B,
                                                ),
                                            },
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: Bu },
                                        i().createElement('div', { className: gu }),
                                        i().createElement(k.z, {
                                            classMix: vu,
                                            text: R.strings.personal_reserves.activation.subFooter.main(),
                                            binding: {
                                                depot: i().createElement(
                                                    i().Fragment,
                                                    null,
                                                    i().createElement('div', { className: hu }),
                                                    i().createElement(
                                                        'span',
                                                        { onClick: d, className: pu },
                                                        R.strings.personal_reserves.activation.subFooter.depot(),
                                                    ),
                                                ),
                                            },
                                        }),
                                    ),
                                ),
                        );
                    });
                engine.whenReady
                    .then(() => {
                        O().render(
                            i().createElement(eu, null, i().createElement(S, null, i().createElement(wu, null))),
                            document.getElementById('root'),
                        );
                    })
                    .then(() => s.O.view.enableFullScreenModeSupported())
                    .then(() => s.O.view.initExternalPaddings(document.getElementById('root')));
            },
            9161: (e, u, t) => {
                'use strict';
                t.d(u, { Q9: () => i, py: () => a, w0: () => n, yD: () => r });
                const r = 'boostersBoosterInfo',
                    n = 'clanReserveInfo',
                    a = { xp: 121e3, credits: 121002, combined: 121004 },
                    i = {
                        booster_xp: 50,
                        booster_xp_premium: 50,
                        booster_credits: 50,
                        booster_credits_premium: 50,
                        booster_free_xp_and_crew_xp: 200,
                        booster_free_xp_and_crew_xp_premium: 200,
                    };
            },
            6342: (e, u, t) => {
                'use strict';
                t.d(u, { Eh: () => i });
                var r = t(2932),
                    n = t(1387),
                    a = t(9161);
                (r.z3.Personal, n.a.Personal, r.z3.Event, n.a.Event, r.z3.Clan, n.a.Clan);
                function i(e, u, t) {
                    const r = e > -1 ? e : a.Q9[t];
                    let n = `${r}`;
                    return (e >= 0 && e < u && (n = `${e}-${u}`), [r > 0, n]);
                }
            },
            2932: (e, u, t) => {
                'use strict';
                let r, n, a;
                (t.d(u, { mu: () => n, z3: () => r }),
                    (function (e) {
                        ((e.Personal = 'personal'), (e.Clan = 'clan'), (e.Event = 'event'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e[(e.Inactive = 0)] = 'Inactive'),
                            (e[(e.Active = 1)] = 'Active'),
                            (e[(e.Used = 2)] = 'Used'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Gold = 'booster_gold'),
                            (e.Credits = 'booster_credits'),
                            (e.XP = 'booster_xp'),
                            (e.CrewXP = 'booster_crew_xp'),
                            (e.FreeXP = 'booster_free_xp'),
                            (e.FL_XP = 'booster_fl_xp'),
                            (e.FreeXPCrewXP = 'booster_free_xp_and_crew_xp'),
                            (e.FreeXPMainXP = 'booster_free_xp_and_crew_xp'));
                    })(a || (a = {})));
            },
            1226: (e, u, t) => {
                'use strict';
                let r;
                (t.d(u, { d: () => r }),
                    (function (e) {
                        ((e.XP = 'xp'),
                            (e.Credits = 'credits'),
                            (e.Combined_XP = 'combined'),
                            (e.Event = 'event'),
                            (e.Clan = 'clan'));
                    })(r || (r = {})));
            },
            1387: (e, u, t) => {
                'use strict';
                let r;
                (t.d(u, { a: () => r }),
                    (function (e) {
                        ((e.Personal = 'personal'), (e.Clan = 'clan'), (e.Event = 'event'));
                    })(r || (r = {})));
            },
            7916: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
                    base: 'Countdown_base_fe',
                    icon: 'Countdown_icon_8b',
                    description: 'Countdown_description_8d',
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
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, r] = deferred[s], a = !0, i = 0; i < u.length; i++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, r];
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
        (__webpack_require__.j = 39),
        (() => {
            var e = { 39: 0, 426: 0, 686: 0, 34: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        ((n = a[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [242], () => __webpack_require__(6946));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
