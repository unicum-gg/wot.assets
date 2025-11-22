(() => {
    'use strict';
    var e,
        t = {
            4472: (e, t, n) => {
                var o = {};
                (n.r(o),
                    n.d(o, { mouse: () => M, off: () => S, on: () => O, onResize: () => x, onScaleUpdated: () => C }));
                var r = {};
                (n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => k,
                        getSize: () => A,
                        graphicsQuality: () => L,
                        playSound: () => T,
                        setRTPC: () => B,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => H, getTextureUrl: () => G }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        addModelObserver: () => K,
                        addPreloadTexture: () => X,
                        arabic2roman: () => ve,
                        children: () => i,
                        displayStatus: () => F,
                        displayStatusIs: () => be,
                        enableFullScreenModeSupported: () => _e,
                        events: () => $,
                        extraSize: () => fe,
                        forceTriggerMouseMove: () => ce,
                        freezeTextureBeforeResize: () => ne,
                        getBrowserTexturePath: () => J,
                        getDisplayStatus: () => de,
                        getExternalPaddingsRem: () => ge,
                        getFontNames: () => me,
                        getScale: () => oe,
                        getSize: () => Z,
                        getViewGlobalPosition: () => te,
                        initExternalPaddings: () => ye,
                        isEventHandled: () => le,
                        isFocused: () => se,
                        pxToRem: () => re,
                        remToPx: () => ie,
                        resize: () => ee,
                        sendEvent: () => q,
                        setAnimateWindow: () => ae,
                        setEventHandled: () => ue,
                        setInputPaddingsRem: () => W,
                        setSidePaddingsRem: () => Y,
                        whenTutorialReady: () => pe,
                    }));
                var s = n(7363),
                    u = n.n(s),
                    l = n(1533),
                    c = n.n(l),
                    d = n(6483),
                    m = n.n(d);
                function v(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const g = {
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
                let b, f;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(b || (b = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(f || (f = {})));
                const p = ({
                    children: e,
                    size: t,
                    disabled: n,
                    mixClass: o,
                    onMouseEnter: r,
                    onMouseMove: i,
                    onMouseDown: a,
                    onMouseUp: l,
                    onMouseLeave: c,
                    onClick: d,
                    isFocused: f = !1,
                    type: p = b.primary,
                    soundHover: _ = 'highlight',
                    soundClick: y = 'play',
                }) => {
                    const h = (0, s.useRef)(null),
                        w = (0, s.useState)(f),
                        E = w[0],
                        x = w[1],
                        C = (0, s.useState)(!1),
                        O = C[0],
                        S = C[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                E && null !== h.current && !h.current.contains(e.target) && x(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [E]),
                        (0, s.useEffect)(() => {
                            x(f);
                        }, [f]),
                        u().createElement(
                            'div',
                            {
                                ref: h,
                                className: m()(
                                    g.base,
                                    g[`base__${p}`],
                                    n && g.base__disabled,
                                    t && g[`base__${t}`],
                                    E && g.base__focus,
                                    O && g.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== _ && v(_), r && r(e));
                                },
                                onMouseMove: function (e) {
                                    i && i(e);
                                },
                                onMouseUp: function (e) {
                                    n || (l && l(e), S(!1));
                                },
                                onMouseDown: function (e) {
                                    n ||
                                        (null !== y && v(y),
                                        a && a(e),
                                        f && (n || (h.current && (h.current.focus(), x(!0)))),
                                        S(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (c && c(e), S(!1));
                                },
                                onClick: function (e) {
                                    n || (d && d(e));
                                },
                            },
                            p !== b.ghost &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: g.back }),
                                    u().createElement('span', { className: g.texture }),
                                ),
                            u().createElement(
                                'span',
                                { className: m()(g.state, g.state__default) },
                                u().createElement('span', { className: g.stateDisabled }),
                                u().createElement('span', { className: g.stateHighlightHover }),
                                u().createElement('span', { className: g.stateHighlightActive }),
                            ),
                            u().createElement(
                                'span',
                                { className: g.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                var _ = n(3403);
                function y() {
                    return !1;
                }
                console.log;
                var h = n(9174);
                function w(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function E(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const x = w('clientResized'),
                    C = w('self.onScaleUpdated'),
                    O = (e, t) => engine.on(e, t),
                    S = (e, t) => engine.off(e, t),
                    P = { down: w('mousedown'), up: w('mouseup'), move: w('mousemove') },
                    M = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && E(!1);
                        }
                        function n() {
                            e.enabled && E(!0);
                        }
                        function o() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : E(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const i = `mouse${t}`,
                                            a = P[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            o(),
                                            () => {
                                                r &&
                                                    (a(),
                                                    window.removeEventListener(i, s),
                                                    (e.listeners -= 1),
                                                    o(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                ((e.enabled = !1), o());
                            },
                            enable() {
                                ((e.enabled = !0), o());
                            },
                            enableOutside() {
                                e.enabled && E(!0);
                            },
                            disableOutside() {
                                e.enabled && E(!1);
                            },
                        });
                    })();
                function T(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function B(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const L = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    z = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    V = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    j = Object.keys(V).reduce((e, t) => ((e[t] = () => T(V[t])), e), {}),
                    D = { play: Object.assign({}, j, { sound: T }), setRTPC: B },
                    N = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Q = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function G(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function H(e, t, n) {
                    return `url(${G(e, t, n)})`;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const F = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    $ = {
                        onTextureFrozen: w('self.onTextureFrozen'),
                        onTextureReady: w('self.onTextureReady'),
                        onDomBuilt: w('self.onDomBuilt'),
                        onLoaded: w('self.onLoaded'),
                        onDisplayChanged: w('self.onShowingStatusChanged'),
                        onFocusUpdated: w('self.onFocusChanged'),
                        children: {
                            onAdded: w('children.onAdded'),
                            onLoaded: w('children.onLoaded'),
                            onRemoved: w('children.onRemoved'),
                            onAttached: w('children.onAttached'),
                            onTextureReady: w('children.onTextureReady'),
                            onRequestPosition: w('children.requestPosition'),
                        },
                    },
                    U = ['args'],
                    I = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, U);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    q = {
                        close(e) {
                            I('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            I(64);
                        },
                        move(e) {
                            I(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function X(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function J(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function K(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function Y(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function Z(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function ee(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function te(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: ie(t.x), y: ie(t.y) };
                }
                function ne() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function oe() {
                    return viewEnv.getScale();
                }
                function re(e) {
                    return viewEnv.pxToRem(e);
                }
                function ie(e) {
                    return viewEnv.remToPx(e);
                }
                function ae(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function se() {
                    return viewEnv.isFocused();
                }
                function ue() {
                    return viewEnv.setEventHandled();
                }
                function le() {
                    return viewEnv.isEventHandled();
                }
                function ce() {
                    viewEnv.forceTriggerMouseMove();
                }
                function de() {
                    return viewEnv.getShowingStatus();
                }
                const me = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ve = function (e) {
                        let t = '';
                        for (let n = Q.length - 1; n >= 0; n--) for (; e >= Q[n]; ) ((t += N[n]), (e -= Q[n]));
                        return t;
                    };
                function ge() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const be = Object.keys(F).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === F[t]), e), {}),
                    fe = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    pe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : $.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function _e() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ye(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            o = t.right,
                            r = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${o}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const he = { view: a, client: r, sound: D, intl: z };
                function we(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o;
                }
                const Ee = (e) => (0 === e ? window : window.subViews.get(e)),
                    xe = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: o, children: r, mocks: i }) {
                                const a = (0, s.useRef)([]),
                                    l = (e, n, o) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Ee,
                                                context: o = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = r.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const r = n(t),
                                                        i = o.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const s = 'string' == typeof i ? `${o}.${i}` : o,
                                                            u = he.view.addModelObserver(s, t, !0);
                                                        return (r.set(u, n), e && n(a(i)), u);
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, t) => {
                                                        const n = a(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = a(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return we(e, t);
                                                                                var n = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? we(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var o = 0;
                                                                        return function () {
                                                                            return o >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[o++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(e = n()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == o ? void 0 : o.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            u = (t) =>
                                                'mocks' === e ? (null == o ? void 0 : o.getter(t)) : s.readByPath(t),
                                            l = (e) => a.current.push(e),
                                            c = (({ observableModel: e }) => e.primitives(['isVisibleButton']))({
                                                mode: e,
                                                readByPath: u,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (t) => {
                                                        const n = u(t),
                                                            o = h.LO.box(n, { equals: y });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, h.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    array: (t, n) => {
                                                        const o = null != n ? n : u(t),
                                                            r = h.LO.box(o, { equals: y });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, h.aD)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const o = null != n ? n : u(t),
                                                            r = h.LO.box(o, { equals: y });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, h.aD)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const o = u(n);
                                                        if (Array.isArray(t)) {
                                                            const r = t.reduce(
                                                                (e, t) => ((e[t] = h.LO.box(o[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, h.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                r[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = t,
                                                                i = Object.entries(r),
                                                                a = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = h.LO.box(o[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, h.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                a[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            d = { mode: e, model: c, externalModel: s, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && o ? o.controls(d) : t(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    c = (0, s.useRef)(!1),
                                    d = (0, s.useState)(e),
                                    m = d[0],
                                    v = d[1],
                                    g = (0, s.useState)(() => l(e, o, i)),
                                    b = g[0],
                                    f = g[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        c.current ? f(l(m, o, i)) : (c.current = !0);
                                    }, [i, m, o]),
                                    (0, s.useEffect)(() => {
                                        v(e);
                                    }, [e]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            (b.externalModel.dispose(), a.current.forEach((e) => e()));
                                        },
                                        [b],
                                    ),
                                    u().createElement(n.Provider, { value: b }, r)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        exit: e.createCallbackNoArgs('onQuit'),
                        loaded: e.createCallbackNoArgs('onLoaded'),
                    })),
                    Ce = xe[0],
                    Oe = xe[1],
                    Se = (0, _.Pi)(() => {
                        const e = Oe(),
                            t = e.controls,
                            n = e.model;
                        return u().createElement(
                            'div',
                            { className: 'OnboardingQueueViewApp_base_6d' },
                            u().createElement('img', {
                                className: 'OnboardingQueueViewApp_preloader_1c',
                                onLoad: t.loaded,
                                onError: t.loaded,
                                src: R.images.story_mode.gui.maps.icons.queue.back(),
                            }),
                            u().createElement(
                                'div',
                                { className: 'OnboardingQueueViewApp_waiting_08' },
                                u().createElement(
                                    'div',
                                    { className: 'OnboardingQueueViewApp_text_4b' },
                                    R.strings.sm_lobby.onboardingQueue.spinnerText(),
                                ),
                                u().createElement('div', { className: 'OnboardingQueueViewApp_gear_85' }),
                                u().createElement('div', { className: 'OnboardingQueueViewApp_logo_24' }),
                            ),
                            n.isVisibleButton.get() &&
                                u().createElement(
                                    'div',
                                    { className: 'OnboardingQueueViewApp_block_b0' },
                                    R.strings.sm_lobby.onboardingQueue.skipText(),
                                    u().createElement(
                                        p,
                                        {
                                            type: b.primary,
                                            size: f.medium,
                                            mixClass: 'OnboardingQueueViewApp_button_2f',
                                            onClick: t.exit,
                                        },
                                        R.strings.sm_lobby.onboardingQueue.skipButton(),
                                    ),
                                ),
                        );
                    });
                engine.whenReady.then(() => {
                    c().render(
                        u().createElement(Ce, null, u().createElement(Se, null)),
                        document.getElementById('root'),
                    );
                });
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
            },
        },
        n = {};
    function o(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var i = (n[e] = { exports: {} });
        return (t[e](i, i.exports, o), i.exports);
    }
    ((o.m = t),
        (e = []),
        (o.O = (t, n, r, i) => {
            if (!n) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [n, r, i] = e[c], s = !0, u = 0; u < n.length; u++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](n[u]))
                            ? n.splice(u--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(c--, 1);
                        var l = r();
                        void 0 !== l && (t = l);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [n, r, i];
        }),
        (o.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (o.d(t, { a: t }), t);
        }),
        (o.d = (e, t) => {
            for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (o.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (o.j = 'common/OnboardingQueueView/OnboardingQueueView'),
        (() => {
            var e = { 'common/OnboardingQueueView/OnboardingQueueView': 0 };
            o.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [a, s, u] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (u) var c = u(o);
                    }
                    for (t && t(n); l < a.length; l++) ((i = a[l]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return o.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var r = o.O(void 0, ['lib/story_mode.vendors'], () => o(4472));
    r = o.O(r);
})();
