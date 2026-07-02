(() => {
    'use strict';
    var e,
        t = {
            829: (e, t, n) => {
                var r = {};
                (n.r(r), n.d(r, { mouse: () => M, onResize: () => P }));
                var o = {};
                (n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => T,
                        getSize: () => O,
                        graphicsQuality: () => z,
                    }));
                var a = {};
                (n.r(a), n.d(a, { getBgUrl: () => G, getTextureUrl: () => N }));
                var s = {};
                (n.r(s),
                    n.d(s, {
                        addModelObserver: () => J,
                        addPreloadTexture: () => W,
                        children: () => a,
                        displayStatus: () => j,
                        displayStatusIs: () => ce,
                        events: () => H,
                        extraSize: () => de,
                        forceTriggerMouseMove: () => le,
                        freezeTextureBeforeResize: () => ee,
                        getBrowserTexturePath: () => Q,
                        getDisplayStatus: () => ue,
                        getScale: () => te,
                        getSize: () => X,
                        getViewGlobalPosition: () => Z,
                        isEventHandled: () => ie,
                        isFocused: () => ae,
                        pxToRem: () => ne,
                        remToPx: () => re,
                        resize: () => Y,
                        sendEvent: () => $,
                        setAnimateWindow: () => oe,
                        setEventHandled: () => se,
                        setInputPaddingsRem: () => q,
                        setSidePaddingsRem: () => K,
                        whenTutorialReady: () => ve,
                    }));
                var i = n(179),
                    l = n.n(i),
                    u = n(493),
                    c = n.n(u),
                    d = n(483),
                    v = n.n(d);
                function m(e) {
                    engine.call('PlaySound', e);
                }
                const b = {
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
                    base__disabled: 'CButton_base__disabled_d9',
                    back: 'CButton_back_e5',
                    texture: 'CButton_texture_fe',
                    state: 'CButton_state_11',
                    base__focus: 'CButton_base__focus_83',
                    stateHighlightHover: 'CButton_stateHighlightHover_ff',
                    stateHighlightActive: 'CButton_stateHighlightActive_35',
                    stateDisabled: 'CButton_stateDisabled_54',
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
                let _, f;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(_ || (_ = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(f || (f = {})));
                const g = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: r,
                    disabled: o,
                    mixClass: a,
                    soundHover: s,
                    soundClick: u,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: f,
                    onMouseUp: g,
                    onMouseLeave: p,
                    onClick: h,
                }) => {
                    const w = (0, i.useRef)(null),
                        E = (0, i.useState)(n),
                        y = E[0],
                        C = E[1],
                        x = (0, i.useState)(!1),
                        k = x[0],
                        S = x[1],
                        B = (0, i.useState)(!1),
                        P = B[0],
                        A = B[1],
                        M = (0, i.useCallback)(() => {
                            o || (w.current && (w.current.focus(), C(!0)));
                        }, [o]),
                        O = (0, i.useCallback)(
                            (e) => {
                                y && null !== w.current && !w.current.contains(e.target) && C(!1);
                            },
                            [y],
                        ),
                        T = (0, i.useCallback)(
                            (e) => {
                                o || (h && h(e));
                            },
                            [o, h],
                        ),
                        z = (0, i.useCallback)(
                            (e) => {
                                o || (null !== s && m(s), c && c(e), A(!0));
                            },
                            [o, s, c],
                        ),
                        N = (0, i.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        G = (0, i.useCallback)(
                            (e) => {
                                o || (g && g(e), S(!1));
                            },
                            [o, g],
                        ),
                        j = (0, i.useCallback)(
                            (e) => {
                                o || (null !== u && m(u), f && f(e), n && M(), S(!0));
                            },
                            [o, u, f, M, n],
                        ),
                        H = (0, i.useCallback)(
                            (e) => {
                                o || (p && p(e), S(!1));
                            },
                            [o, p],
                        ),
                        L = v()(
                            b.base,
                            b[`base__${r}`],
                            {
                                [b.base__disabled]: o,
                                [b[`base__${t}`]]: t,
                                [b.base__focus]: y,
                                [b.base__highlightActive]: k,
                                [b.base__firstHover]: P,
                            },
                            a,
                        ),
                        D = v()(b.state, b.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', O),
                                () => {
                                    document.removeEventListener('mousedown', O);
                                }
                            ),
                            [O],
                        ),
                        (0, i.useEffect)(() => {
                            C(n);
                        }, [n]),
                        l().createElement(
                            'div',
                            {
                                ref: w,
                                className: L,
                                onMouseEnter: z,
                                onMouseMove: N,
                                onMouseUp: G,
                                onMouseDown: j,
                                onMouseLeave: H,
                                onClick: T,
                            },
                            r !== _.ghost &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: b.back }),
                                    l().createElement('span', { className: b.texture }),
                                ),
                            l().createElement(
                                'span',
                                { className: D },
                                l().createElement('span', { className: b.stateDisabled }),
                                l().createElement('span', { className: b.stateHighlightHover }),
                                l().createElement('span', { className: b.stateHighlightActive }),
                            ),
                            l().createElement(
                                'span',
                                { className: b.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                g.defaultProps = { type: _.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const p = (0, i.memo)(g);
                var h = n(515);
                const w = {
                        base: 'Background_base_b9',
                        topGlow: 'Background_topGlow_35',
                        forest: 'Background_forest_e8',
                        centerGlow: 'Background_centerGlow_4b',
                    },
                    E = ({ isPopUp: e }) =>
                        l().createElement(
                            'div',
                            { className: v()(w.base, e && w.base__popUp) },
                            e && l().createElement('div', { className: w.topGlow }),
                            l().createElement('div', { className: w.forest }),
                            l().createElement('div', { className: w.centerGlow }),
                        ),
                    y = 'CloseButton_base_a1',
                    C = ({ classNames: e }) =>
                        l().createElement('div', { className: v()(y, null == e ? void 0 : e.base) });
                function x() {
                    return !1;
                }
                console.log;
                var k = n(174);
                function S(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function B(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const P = S('clientResized'),
                    A = { down: S('mousedown'), up: S('mouseup'), move: S('mousemove') };
                const M = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && B(!1);
                    }
                    function n() {
                        e.enabled && B(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : B(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const a = `mouse${t}`,
                                        s = A[t]((e) => n([e, 'outside']));
                                    function i(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        r(),
                                        () => {
                                            o &&
                                                (s(),
                                                window.removeEventListener(a, i),
                                                (e.listeners -= 1),
                                                r(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && B(!0);
                        },
                        disableOutside() {
                            e.enabled && B(!1);
                        },
                    });
                })();
                function O(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const z = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function N(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function G(e, t, n) {
                    return `url(${N(e, t, n)})`;
                }
                const j = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    H = {
                        onTextureFrozen: S('self.onTextureFrozen'),
                        onTextureReady: S('self.onTextureReady'),
                        onDomBuilt: S('self.onDomBuilt'),
                        onLoaded: S('self.onLoaded'),
                        onDisplayChanged: S('self.onShowingStatusChanged'),
                        onFocusUpdated: S('self.onFocusChanged'),
                        children: {
                            onAdded: S('children.onAdded'),
                            onLoaded: S('children.onLoaded'),
                            onRemoved: S('children.onRemoved'),
                            onAttached: S('children.onAttached'),
                            onTextureReady: S('children.onTextureReady'),
                            onRequestPosition: S('children.requestPosition'),
                        },
                    },
                    L = ['args'];
                const D = 2,
                    U = 16,
                    F = 32,
                    V = 64,
                    I = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                    return o;
                                })(t, L);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    $ = {
                        close(e) {
                            I('popover' === e ? D : F);
                        },
                        minimize() {
                            I(V);
                        },
                        move(e) {
                            I(U, { isMouseEvent: !0, on: e });
                        },
                    };
                function W(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function q(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function Q(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function J(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function K(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Y(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function Z(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: re(t.x), y: re(t.y) };
                }
                function ee() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function te() {
                    return viewEnv.getScale();
                }
                function ne(e) {
                    return viewEnv.pxToRem(e);
                }
                function re(e) {
                    return viewEnv.remToPx(e);
                }
                function oe(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function ae() {
                    return viewEnv.isFocused();
                }
                function se() {
                    return viewEnv.setEventHandled();
                }
                function ie() {
                    return viewEnv.isEventHandled();
                }
                function le() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ue() {
                    return viewEnv.getShowingStatus();
                }
                const ce = Object.keys(j).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === j[t]), e), {}),
                    de = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ve = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : H.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    me = { view: s, client: o };
                function be(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return _e(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return _e(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function _e(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const fe = (e) => (0 === e ? window : window.subViews.get(e));
                const ge = ((e, t) => {
                        const n = (0, i.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: a, mocks: s }) {
                                const u = (0, i.useRef)([]),
                                    c = (n, r, o) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = fe,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function a(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = o.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const o = n(t),
                                                        a = r.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (n, a) => {
                                                        const i = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = me.view.addModelObserver(i, t, !0);
                                                        return (o.set(l, n), e && n(s(a)), l);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const n = s(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = be(o.keys()); !(e = n()).done;) a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            i =
                                                'real' === n
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == o ? void 0 : o.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === n ? (null == o ? void 0 : o.getter(e)) : i.readByPath(e),
                                            c = (e) => u.current.push(e),
                                            d = e({
                                                mode: n,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            o = k.LO.box(r, { equals: x });
                                                        return (
                                                            'real' === n &&
                                                                i.subscribe(
                                                                    (0, k.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            o = k.LO.box(r, { equals: x });
                                                        return (
                                                            'real' === n &&
                                                                i.subscribe(
                                                                    (0, k.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = l(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, t) => ((e[t] = k.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    i.subscribe(
                                                                        (0, k.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                a = Object.entries(o),
                                                                s = a.reduce(
                                                                    (e, [t, n]) => ((e[n] = k.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    i.subscribe(
                                                                        (0, k.aD)((e) => {
                                                                            a.forEach(([t, n]) => {
                                                                                s[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            v = { mode: n, model: d, externalModel: i, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && o ? o.controls(v) : t(v),
                                            externalModel: i,
                                            mode: n,
                                        };
                                    },
                                    d = (0, i.useRef)(!1),
                                    v = (0, i.useState)(r),
                                    m = v[0],
                                    b = v[1],
                                    _ = (0, i.useState)(() => c(r, o, s)),
                                    f = _[0],
                                    g = _[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        d.current ? g(c(m, o, s)) : (d.current = !0);
                                    }, [s, m, o]),
                                    (0, i.useEffect)(() => {
                                        b(r);
                                    }, [r]),
                                    (0, i.useEffect)(
                                        () => () => {
                                            (f.externalModel.dispose(), u.current.forEach((e) => e()));
                                        },
                                        [f],
                                    ),
                                    l().createElement(n.Provider, { value: f }, a)
                                );
                            },
                            () => (0, i.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        ({ externalModel: e }) => ({ onClick: e.createCallbackNoArgs('onClick') }),
                    ),
                    pe = ge[0],
                    he = ge[1],
                    we = 'App_base_8a',
                    Ee = 'App_base__popUp_f5',
                    ye = 'App_content_f3',
                    Ce = 'App_description_80',
                    xe = 'App_title_fa',
                    ke = 'App_closeButton_b9',
                    Se = 'App_buttonWrapper_40',
                    Be = 'App_backgroundWrapper_ba',
                    Pe = 'App_dog_67',
                    Re = R.strings.play_streak.notifications.playStreakRewards,
                    Ae = (0, h.Pi)(() => {
                        const e = he(),
                            t = e.model,
                            n = e.controls,
                            r = t.root.get().isPopUp;
                        return l().createElement(
                            'div',
                            { className: v()(we, r && Ee) },
                            l().createElement(
                                'div',
                                { className: ye },
                                r && l().createElement(C, { classNames: { base: ke } }),
                                l().createElement(
                                    'div',
                                    { className: xe, lang: R.strings.settings.LANGUAGE_CODE() },
                                    Re.title(),
                                ),
                                l().createElement('div', { className: Pe }),
                                r && l().createElement('div', { className: Ce }, Re.description()),
                                l().createElement(
                                    'div',
                                    { className: Se },
                                    l().createElement(
                                        p,
                                        { type: _.ghost, onClick: n.onClick, size: f.medium },
                                        Re.button(),
                                    ),
                                ),
                            ),
                            l().createElement('div', { className: Be }, l().createElement(E, { isPopUp: r })),
                        );
                    });
                engine.whenReady.then(() => {
                    c().render(
                        l().createElement(pe, null, l().createElement(Ae, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var a = (n[e] = { exports: {} });
        return (t[e](a, a.exports, r), a.exports);
    }
    ((r.m = t),
        (e = []),
        (r.O = (t, n, o, a) => {
            if (!n) {
                var s = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [n, o, a] = e[c], i = !0, l = 0; l < n.length; l++)
                        (!1 & a || s >= a) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((i = !1), a < s && (s = a));
                    if (i) {
                        e.splice(c--, 1);
                        var u = o();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            a = a || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
            e[c] = [n, o, a];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (r.d(t, { a: t }), t);
        }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (() => {
            var e = { 631: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        a,
                        [s, i, l] = n,
                        u = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (o in i) r.o(i, o) && (r.m[o] = i[o]);
                        if (l) var c = l(r);
                    }
                    for (t && t(n); u < s.length; u++) ((a = s[u]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return r.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var o = r.O(void 0, [524], () => r(829));
    o = r.O(o);
})();
