(() => {
    'use strict';
    var e,
        t = {
            4401: (e, t, n) => {
                var o = {};
                n.r(o),
                    n.d(o, { mouse: () => B, off: () => S, on: () => x, onResize: () => w, onScaleUpdated: () => C });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => T,
                        getSize: () => O,
                        graphicsQuality: () => M,
                        playSound: () => k,
                        setRTPC: () => A,
                    });
                var a = {};
                n.r(a), n.d(a, { getBgUrl: () => Y, getTextureUrl: () => Q });
                var i = {};
                n.r(i),
                    n.d(i, {
                        addModelObserver: () => ue,
                        addPreloadTexture: () => ie,
                        children: () => a,
                        displayStatus: () => J,
                        displayStatusIs: () => Se,
                        events: () => K,
                        extraSize: () => Pe,
                        forceTriggerMouseMove: () => we,
                        freezeTextureBeforeResize: () => ge,
                        getBrowserTexturePath: () => le,
                        getDisplayStatus: () => Ce,
                        getFontNames: () => xe,
                        getScale: () => fe,
                        getSize: () => de,
                        getViewGlobalPosition: () => me,
                        isEventHandled: () => Ee,
                        isFocused: () => he,
                        pxToRem: () => _e,
                        remToPx: () => be,
                        resize: () => ve,
                        sendEvent: () => re,
                        setAnimateWindow: () => pe,
                        setEventHandled: () => ye,
                        setInputPaddingsRem: () => se,
                        setSidePaddingsRem: () => ce,
                        whenTutorialReady: () => Re,
                    });
                var s = n(6179),
                    l = n.n(s),
                    u = n(493),
                    c = n.n(u),
                    d = n(6483),
                    v = n.n(d);
                function m(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const g = {
                        playHighlight() {
                            m('highlight');
                        },
                        playClick() {
                            m('play');
                        },
                        playYes() {
                            m('yes1');
                        },
                    },
                    f = {
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
                let _, b;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(_ || (_ = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(b || (b = {}));
                const p = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: o,
                    disabled: r,
                    mixClass: a,
                    soundHover: i,
                    soundClick: u,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: g,
                    onMouseUp: b,
                    onMouseLeave: p,
                    onClick: h,
                }) => {
                    const y = (0, s.useRef)(null),
                        E = (0, s.useState)(n),
                        w = E[0],
                        C = E[1],
                        x = (0, s.useState)(!1),
                        S = x[0],
                        P = x[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                w && null !== y.current && !y.current.contains(e.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [w]),
                        (0, s.useEffect)(() => {
                            C(n);
                        }, [n]),
                        l().createElement(
                            'div',
                            {
                                ref: y,
                                className: v()(
                                    f.base,
                                    f[`base__${o}`],
                                    r && f.base__disabled,
                                    t && f[`base__${t}`],
                                    w && f.base__focus,
                                    S && f.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== i && m(i), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    r || (b && b(e), P(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== u && m(u),
                                        g && g(e),
                                        n && (r || (y.current && (y.current.focus(), C(!0)))),
                                        P(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (p && p(e), P(!1));
                                },
                                onClick: function (e) {
                                    r || (h && h(e));
                                },
                            },
                            o !== _.ghost &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: f.back }),
                                    l().createElement('span', { className: f.texture }),
                                ),
                            l().createElement(
                                'span',
                                { className: v()(f.state, f.state__default) },
                                l().createElement('span', { className: f.stateDisabled }),
                                l().createElement('span', { className: f.stateHighlightHover }),
                                l().createElement('span', { className: f.stateHighlightActive }),
                            ),
                            l().createElement(
                                'span',
                                { className: f.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                p.defaultProps = { type: _.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const h = p;
                function y(e) {
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
                const w = y('clientResized'),
                    C = y('self.onScaleUpdated'),
                    x = (e, t) => engine.on(e, t),
                    S = (e, t) => engine.off(e, t),
                    P = { down: y('mousedown'), up: y('mouseup'), move: y('mousemove') };
                const B = (function () {
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
                                    const a = `mouse${t}`,
                                        i = P[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        o(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, s),
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
                            (e.enabled = !1), o();
                        },
                        enable() {
                            (e.enabled = !0), o();
                        },
                        enableOutside() {
                            e.enabled && E(!0);
                        },
                        disableOutside() {
                            e.enabled && E(!1);
                        },
                    });
                })();
                function k(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function A(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function O(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const M = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    z = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    N = Object.keys(z).reduce((e, t) => ((e[t] = () => k(z[t])), e), {}),
                    j = Object.assign({}, N, { sound: k }),
                    D = { play: j, setRTPC: A };
                var L = n(3403);
                const H = 'Background_base_40',
                    G = 'Background_base__popUp_48',
                    U = 'Background_base__withoutBorder_11',
                    F = 'Background_image_33',
                    V = ({
                        customUrl: e = 'R.images.gui.maps.icons.newYear.notifications.common.background_forest',
                        isPopUp: t,
                    }) =>
                        l().createElement(
                            'div',
                            { className: v()(H, t && G, Boolean(e) && U) },
                            l().createElement('div', {
                                className: F,
                                style: {
                                    backgroundImage: `url(${e || 'R.images.gui.maps.icons.newYear.notifications.common.background_forest'})`,
                                },
                            }),
                        ),
                    $ = 'CloseButton_base_9f',
                    I = ({ classNames: e }) =>
                        l().createElement('div', {
                            className: v()($, null == e ? void 0 : e.base),
                            onMouseEnter: g.playHighlight,
                            onClick: () => m(R.sounds.cancelcloseno()),
                        });
                function W() {
                    return !1;
                }
                console.log;
                var q = n(9174);
                function Q(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function Y(e, t, n) {
                    return `url(${Q(e, t, n)})`;
                }
                const J = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    K = {
                        onTextureFrozen: y('self.onTextureFrozen'),
                        onTextureReady: y('self.onTextureReady'),
                        onDomBuilt: y('self.onDomBuilt'),
                        onLoaded: y('self.onLoaded'),
                        onDisplayChanged: y('self.onShowingStatusChanged'),
                        onFocusUpdated: y('self.onFocusChanged'),
                        children: {
                            onAdded: y('children.onAdded'),
                            onLoaded: y('children.onLoaded'),
                            onRemoved: y('children.onRemoved'),
                            onAttached: y('children.onAttached'),
                            onTextureReady: y('children.onTextureReady'),
                            onRequestPosition: y('children.requestPosition'),
                        },
                    },
                    X = ['args'];
                const Z = 2,
                    ee = 16,
                    te = 32,
                    ne = 64,
                    oe = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var o in e)
                                        if ({}.hasOwnProperty.call(e, o)) {
                                            if (t.indexOf(o) >= 0) continue;
                                            n[o] = e[o];
                                        }
                                    return n;
                                })(t, X);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    re = {
                        close(e) {
                            oe('popover' === e ? Z : te);
                        },
                        minimize() {
                            oe(ne);
                        },
                        move(e) {
                            oe(ee, { isMouseEvent: !0, on: e });
                        },
                    },
                    ae = 15;
                function ie(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function se(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, ae);
                }
                function le(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function ue(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function ce(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, ae);
                }
                function de(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function ve(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function me(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: be(t.x), y: be(t.y) };
                }
                function ge() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function fe() {
                    return viewEnv.getScale();
                }
                function _e(e) {
                    return viewEnv.pxToRem(e);
                }
                function be(e) {
                    return viewEnv.remToPx(e);
                }
                function pe(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function he() {
                    return viewEnv.isFocused();
                }
                function ye() {
                    return viewEnv.setEventHandled();
                }
                function Ee() {
                    return viewEnv.isEventHandled();
                }
                function we() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Ce() {
                    return viewEnv.getShowingStatus();
                }
                const xe = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    Se = Object.keys(J).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === J[t]), e), {}),
                    Pe = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    Re = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : K.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Be = { view: i, client: r, sound: D };
                function ke(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return Ae(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? Ae(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var o = 0;
                        return function () {
                            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ae(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
                    return o;
                }
                const Oe = (e) => (0 === e ? window : window.subViews.get(e));
                const Te = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: o = 'real', options: r, children: a, mocks: i }) {
                                const u = (0, s.useRef)([]),
                                    c = (n, o, r) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Oe,
                                                context: o = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, t = 0) {
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
                                                const i = (e) => {
                                                    const r = n(t),
                                                        a = o.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (n, a) => {
                                                        const s = 'string' == typeof a ? `${o}.${a}` : o,
                                                            l = Be.view.addModelObserver(s, t, !0);
                                                        return r.set(l, n), e && n(i(a)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const n = i(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = ke(r.keys()); !(e = n()).done; ) a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(o),
                                            s =
                                                'real' === n
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === n ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            c = (e) => u.current.push(e),
                                            d = e({
                                                mode: n,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const o = null != t ? t : l(e),
                                                            r = q.LO.box(o, { equals: W });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, q.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const o = null != t ? t : l(e),
                                                            r = q.LO.box(o, { equals: W });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, q.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const o = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = q.LO.box(o[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, q.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                i = a.reduce(
                                                                    (e, [t, n]) => ((e[n] = q.LO.box(o[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, q.aD)((e) => {
                                                                            a.forEach(([t, n]) => {
                                                                                i[n].set(e[t]);
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
                                            v = { mode: n, model: d, externalModel: s, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && r ? r.controls(v) : t(v),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    v = (0, s.useState)(o),
                                    m = v[0],
                                    g = v[1],
                                    f = (0, s.useState)(() => c(o, r, i)),
                                    _ = f[0],
                                    b = f[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? b(c(m, r, i)) : (d.current = !0);
                                    }, [i, m, r]),
                                    (0, s.useEffect)(() => {
                                        g(o);
                                    }, [o]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            _.externalModel.dispose(), u.current.forEach((e) => e());
                                        },
                                        [_],
                                    ),
                                    l().createElement(n.Provider, { value: _ }, a)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        ({ externalModel: e }) => ({ onClick: e.createCallbackNoArgs('onClick') }),
                    ),
                    Me = Te[0],
                    ze = Te[1],
                    Ne = 'App_base_1e',
                    je = 'App_base__popUp_e5',
                    De = 'App_content_03',
                    Le = 'App_description_04',
                    He = 'App_title_86',
                    Ge = 'App_closeButton_5d',
                    Ue = 'App_buttonWrapper_42',
                    Fe = 'App_backgroundWrapper_e4',
                    Ve = 'App_dog_30',
                    $e = R.strings.ny.notifications.nyDogAchieved,
                    Ie = (0, L.Pi)(() => {
                        const e = ze(),
                            t = e.model,
                            n = e.controls,
                            o = t.root.get(),
                            r = o.isPopUp,
                            a = o.isButtonDisabled;
                        var i;
                        return (
                            (i = () => {
                                r && j.sound(R.sounds.hangar_newyear_notification());
                            }),
                            (0, s.useEffect)(i, []),
                            l().createElement(
                                'div',
                                { className: v()(Ne, r && je), lang: R.strings.settings.LANGUAGE_CODE() },
                                l().createElement(
                                    'div',
                                    { className: De },
                                    r && l().createElement(I, { classNames: { base: Ge } }),
                                    l().createElement('div', { className: He }, $e.title()),
                                    l().createElement('div', { className: Ve }),
                                    r && l().createElement('div', { className: Le }, $e.description()),
                                    l().createElement(
                                        'div',
                                        { className: Ue },
                                        l().createElement(
                                            h,
                                            { type: _.ghost, onClick: n.onClick, size: b.medium, disabled: a },
                                            $e.button(),
                                        ),
                                    ),
                                ),
                                l().createElement('div', { className: Fe }, l().createElement(V, { isPopUp: r })),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    c().render(
                        l().createElement(Me, null, l().createElement(Ie, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        n = {};
    function o(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var a = (n[e] = { exports: {} });
        return t[e](a, a.exports, o), a.exports;
    }
    (o.m = t),
        (e = []),
        (o.O = (t, n, r, a) => {
            if (!n) {
                var i = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [n, r, a] = e[c], s = !0, l = 0; l < n.length; l++)
                        (!1 & a || i >= a) && Object.keys(o.O).every((e) => o.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), a < i && (i = a));
                    if (s) {
                        e.splice(c--, 1);
                        var u = r();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            a = a || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
            e[c] = [n, r, a];
        }),
        (o.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return o.d(t, { a: t }), t;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.j = 6146),
        (() => {
            var e = { 6146: 0 };
            o.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [i, s, l] = n,
                        u = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (l) var c = l(o);
                    }
                    for (t && t(n); u < i.length; u++) (a = i[u]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return o.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var r = o.O(void 0, [8360], () => o(4401));
    r = o.O(r);
})();
