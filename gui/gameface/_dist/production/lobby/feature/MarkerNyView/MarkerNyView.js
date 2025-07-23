(() => {
    var e,
        t = {
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
            8231: (e, t, r) => {
                'use strict';
                var n = {};
                (r.r(n),
                    r.d(n, { mouse: () => E, off: () => f, on: () => h, onResize: () => m, onScaleUpdated: () => g }));
                var a = {};
                (r.r(a),
                    r.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => L,
                        getSize: () => S,
                        graphicsQuality: () => p,
                        playSound: () => w,
                        setRTPC: () => x,
                    }));
                var i = {};
                (r.r(i), r.d(i, { getBgUrl: () => M, getTextureUrl: () => H }));
                var l = {};
                (r.r(l),
                    r.d(l, {
                        addModelObserver: () => D,
                        addPreloadTexture: () => k,
                        children: () => i,
                        displayStatus: () => T,
                        displayStatusIs: () => ee,
                        events: () => W,
                        extraSize: () => te,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => j,
                        getBrowserTexturePath: () => P,
                        getDisplayStatus: () => J,
                        getFontNames: () => K,
                        getScale: () => F,
                        getSize: () => $,
                        getViewGlobalPosition: () => N,
                        isEventHandled: () => Y,
                        isFocused: () => q,
                        pxToRem: () => B,
                        remToPx: () => V,
                        resize: () => U,
                        sendEvent: () => I,
                        setAnimateWindow: () => X,
                        setEventHandled: () => Q,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => z,
                        whenTutorialReady: () => re,
                    }));
                var o = r(6179),
                    s = r.n(o);
                const d = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                function u(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const m = u('clientResized'),
                    g = u('self.onScaleUpdated'),
                    h = (e, t) => engine.on(e, t),
                    f = (e, t) => engine.off(e, t),
                    v = { down: u('mousedown'), up: u('mouseup'), move: u('mousemove') },
                    E = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && c(!1);
                        }
                        function r() {
                            e.enabled && c(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', r))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', r))
                                : c(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const i = `mouse${t}`,
                                            l = v[t]((e) => r([e, 'outside']));
                                        function o(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, o),
                                            n(),
                                            () => {
                                                a &&
                                                    (l(),
                                                    window.removeEventListener(i, o),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(r)),
                                t
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
                                e.enabled && c(!0);
                            },
                            disableOutside() {
                                e.enabled && c(!1);
                            },
                        });
                    })();
                function w(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function x(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function L(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    _ = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    b = Object.keys(_).reduce((e, t) => ((e[t] = () => w(_[t])), e), {}),
                    y = { play: Object.assign({}, b, { sound: w }), setRTPC: x };
                function H(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function M(e, t, r) {
                    return `url(${H(e, t, r)})`;
                }
                const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    W = {
                        onTextureFrozen: u('self.onTextureFrozen'),
                        onTextureReady: u('self.onTextureReady'),
                        onDomBuilt: u('self.onDomBuilt'),
                        onLoaded: u('self.onLoaded'),
                        onDisplayChanged: u('self.onShowingStatusChanged'),
                        onFocusUpdated: u('self.onFocusChanged'),
                        children: {
                            onAdded: u('children.onAdded'),
                            onLoaded: u('children.onLoaded'),
                            onRemoved: u('children.onRemoved'),
                            onAttached: u('children.onAttached'),
                            onTextureReady: u('children.onTextureReady'),
                            onRequestPosition: u('children.requestPosition'),
                        },
                    },
                    A = ['args'],
                    C = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            r[n] = e[n];
                                        }
                                    return r;
                                })(t, A);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: r, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: r, name: e, bool: t };
                                                      default:
                                                          return { __Type: r, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    I = {
                        close(e) {
                            C('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            C(64);
                        },
                        move(e) {
                            C(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    O = 15;
                function k(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, O);
                }
                function P(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function D(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, O);
                }
                function $(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function N(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: V(t.x), y: V(t.y) };
                }
                function j() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function V(e) {
                    return viewEnv.remToPx(e);
                }
                function X(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function Q() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function J() {
                    return viewEnv.getShowingStatus();
                }
                const K = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ee = Object.keys(T).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === T[t]), e), {}),
                    te = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    re = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : W.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ne = { view: l, client: a, sound: y },
                    ae = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var ie;
                function le(e, t, r) {
                    const n = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, r),
                        a = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, r),
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === r.extraLarge.weight,
                        large: i === r.large.weight,
                        medium: i === r.medium.weight,
                        small: i === r.small.weight,
                        extraSmall: i === r.extraSmall.weight,
                        extraLargeWidth: n === r.extraLarge.weight,
                        largeWidth: n === r.large.weight,
                        mediumWidth: n === r.medium.weight,
                        smallWidth: n === r.small.weight,
                        extraSmallWidth: n === r.extraSmall.weight,
                        extraLargeHeight: a === r.extraLarge.weight,
                        largeHeight: a === r.large.weight,
                        mediumHeight: a === r.medium.weight,
                        smallHeight: a === r.small.weight,
                        extraSmallHeight: a === r.extraSmall.weight,
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
                })(ie || (ie = {}));
                const oe = ne.client.getSize('rem'),
                    se = oe.width,
                    de = oe.height,
                    ue = Object.assign({ width: se, height: de }, le(se, de, ae)),
                    ce = (0, o.createContext)(ue),
                    me = ['children'],
                    ge = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n];
                                    }
                                return r;
                            })(e, me);
                        const n = (0, o.useContext)(ce),
                            a = n.extraLarge,
                            i = n.large,
                            l = n.medium,
                            s = n.small,
                            u = n.extraSmall,
                            c = n.extraLargeWidth,
                            m = n.largeWidth,
                            g = n.mediumWidth,
                            h = n.smallWidth,
                            f = n.extraSmallWidth,
                            v = n.extraLargeHeight,
                            E = n.largeHeight,
                            w = n.mediumHeight,
                            x = n.smallHeight,
                            S = n.extraSmallHeight,
                            L = { extraLarge: v, large: E, medium: w, small: x, extraSmall: S };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && a) return t;
                            if (r.large && i) return t;
                            if (r.medium && l) return t;
                            if (r.small && s) return t;
                            if (r.extraSmall && u) return t;
                        } else {
                            if (r.extraLargeWidth && c) return d(t, r, L);
                            if (r.largeWidth && m) return d(t, r, L);
                            if (r.mediumWidth && g) return d(t, r, L);
                            if (r.smallWidth && h) return d(t, r, L);
                            if (r.extraSmallWidth && f) return d(t, r, L);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && v) return t;
                                if (r.largeHeight && E) return t;
                                if (r.mediumHeight && w) return t;
                                if (r.smallHeight && x) return t;
                                if (r.extraSmallHeight && S) return t;
                            }
                        }
                        return null;
                    };
                ((ge.defaultProps = {
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
                    (0, o.memo)(ge));
                const he = ({ children: e }) => {
                    const t = (0, o.useContext)(ce),
                        r = (0, o.useState)(t),
                        n = r[0],
                        a = r[1],
                        i = (0, o.useCallback)((e, t) => {
                            const r = ne.view.pxToRem(e),
                                n = ne.view.pxToRem(t);
                            a(Object.assign({ width: r, height: n }, le(r, n, ae)));
                        }, []),
                        l = (0, o.useCallback)(() => {
                            const e = ne.client.getSize('px');
                            i(e.width, e.height);
                        }, [i]);
                    (((e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        (ne.client.events.on('clientResized', i), ne.client.events.on('self.onScaleUpdated', l));
                    }),
                        (0, o.useEffect)(
                            () => () => {
                                (ne.client.events.off('clientResized', i),
                                    ne.client.events.off('self.onScaleUpdated', l));
                            },
                            [i, l],
                        ));
                    const d = (0, o.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(ce.Provider, { value: d }, e);
                };
                var fe = r(6483),
                    ve = r.n(fe),
                    Ee = r(926),
                    we = r.n(Ee);
                let xe, Se, Le;
                (!(function (e) {
                    ((e[(e.ExtraSmall = ae.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = ae.small.width)] = 'Small'),
                        (e[(e.Medium = ae.medium.width)] = 'Medium'),
                        (e[(e.Large = ae.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = ae.extraLarge.width)] = 'ExtraLarge'));
                })(xe || (xe = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = ae.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = ae.small.width)] = 'Small'),
                            (e[(e.Medium = ae.medium.width)] = 'Medium'),
                            (e[(e.Large = ae.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = ae.extraLarge.width)] = 'ExtraLarge'));
                    })(Se || (Se = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = ae.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = ae.small.height)] = 'Small'),
                            (e[(e.Medium = ae.medium.height)] = 'Medium'),
                            (e[(e.Large = ae.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = ae.extraLarge.height)] = 'ExtraLarge'));
                    })(Le || (Le = {})));
                const pe = ['children', 'className'];
                function _e() {
                    return (
                        (_e = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                  }
                                  return e;
                              }),
                        _e.apply(null, arguments)
                    );
                }
                const be = {
                        [Se.ExtraSmall]: '',
                        [Se.Small]: we().SMALL_WIDTH,
                        [Se.Medium]: `${we().SMALL_WIDTH} ${we().MEDIUM_WIDTH}`,
                        [Se.Large]: `${we().SMALL_WIDTH} ${we().MEDIUM_WIDTH} ${we().LARGE_WIDTH}`,
                        [Se.ExtraLarge]: `${we().SMALL_WIDTH} ${we().MEDIUM_WIDTH} ${we().LARGE_WIDTH} ${we().EXTRA_LARGE_WIDTH}`,
                    },
                    ye = {
                        [Le.ExtraSmall]: '',
                        [Le.Small]: we().SMALL_HEIGHT,
                        [Le.Medium]: `${we().SMALL_HEIGHT} ${we().MEDIUM_HEIGHT}`,
                        [Le.Large]: `${we().SMALL_HEIGHT} ${we().MEDIUM_HEIGHT} ${we().LARGE_HEIGHT}`,
                        [Le.ExtraLarge]: `${we().SMALL_HEIGHT} ${we().MEDIUM_HEIGHT} ${we().LARGE_HEIGHT} ${we().EXTRA_LARGE_HEIGHT}`,
                    },
                    He = {
                        [xe.ExtraSmall]: '',
                        [xe.Small]: we().SMALL,
                        [xe.Medium]: `${we().SMALL} ${we().MEDIUM}`,
                        [xe.Large]: `${we().SMALL} ${we().MEDIUM} ${we().LARGE}`,
                        [xe.ExtraLarge]: `${we().SMALL} ${we().MEDIUM} ${we().LARGE} ${we().EXTRA_LARGE}`,
                    },
                    Me = (e) => {
                        let t = e.children,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n];
                                    }
                                return r;
                            })(e, pe);
                        const a = (() => {
                                const e = (0, o.useContext)(ce),
                                    t = e.width,
                                    r = e.height,
                                    n = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return xe.ExtraLarge;
                                            case e.large:
                                                return xe.Large;
                                            case e.medium:
                                                return xe.Medium;
                                            case e.small:
                                                return xe.Small;
                                            case e.extraSmall:
                                                return xe.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    xe.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return Se.ExtraLarge;
                                            case e.largeWidth:
                                                return Se.Large;
                                            case e.mediumWidth:
                                                return Se.Medium;
                                            case e.smallWidth:
                                                return Se.Small;
                                            case e.extraSmallWidth:
                                                return Se.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    Se.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return Le.ExtraLarge;
                                            case e.largeHeight:
                                                return Le.Large;
                                            case e.mediumHeight:
                                                return Le.Medium;
                                            case e.smallHeight:
                                                return Le.Small;
                                            case e.extraSmallHeight:
                                                return Le.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    Le.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: n,
                                    mediaWidth: a,
                                    mediaHeight: i,
                                    remScreenWidth: t,
                                    remScreenHeight: r,
                                };
                            })(),
                            i = a.mediaWidth,
                            l = a.mediaHeight,
                            d = a.mediaSize;
                        return s().createElement('div', _e({ className: ve()(r, be[i], ye[l], He[d]) }, n), t);
                    },
                    Te = ['children'],
                    We = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n];
                                    }
                                return r;
                            })(e, Te);
                        return s().createElement(he, null, s().createElement(Me, r, t));
                    };
                var Ae = r(493),
                    Re = r.n(Ae);
                const Ce = ({
                    children: e,
                    className: t,
                    startColor: r = '#213da1',
                    endColor: n = '#4361c8',
                    classNames: a,
                }) => {
                    const i = (() => {
                        const e = (0, o.useState)(ne.view.getScale()),
                            t = e[0],
                            r = e[1];
                        return (
                            (0, o.useEffect)(() => {
                                const e = () => {
                                    r(ne.view.getScale());
                                };
                                return (
                                    window.addEventListener('resize', e),
                                    () => {
                                        window.removeEventListener('resize', e);
                                    }
                                );
                            }, []),
                            t
                        );
                    })();
                    return s().createElement(
                        'div',
                        { className: ve()('InfoDecorator_base_e3', t) },
                        s().createElement(
                            'svg',
                            { className: 'InfoDecorator_background_a1', viewBox: '0 0 100% 100%' },
                            s().createElement(
                                'defs',
                                null,
                                s().createElement(
                                    'linearGradient',
                                    {
                                        id: 'bg-gradient',
                                        gradientUnits: 'userSpaceOnUse',
                                        x1: '0%',
                                        y1: '0%',
                                        x2: '0%',
                                        y2: '100%',
                                    },
                                    s().createElement('stop', { offset: '0%', stopColor: r, stopOpacity: '0%' }),
                                    s().createElement('stop', { offset: '100%', stopColor: n, stopOpacity: '100%' }),
                                ),
                            ),
                            s().createElement('rect', {
                                x: '0%',
                                y: '0%',
                                width: '100%',
                                height: '100%',
                                rx: 8 * i,
                                fill: 'url(#bg-gradient)',
                            }),
                        ),
                        e,
                        s().createElement('div', {
                            className: ve()('InfoDecorator_arrow_36', null == a ? void 0 : a.arrow),
                        }),
                    );
                };
                var Ie = r(7030);
                const Oe = {
                        base: 'MarkerContent_base_56',
                        content: 'MarkerContent_content_fa',
                        content__default: 'MarkerContent_content__default_10',
                        content__friend: 'MarkerContent_content__friend_03',
                        content__zero: 'MarkerContent_content__zero_d0',
                        content__number: 'MarkerContent_content__number_ca',
                        gradient: 'MarkerContent_gradient_ca',
                        slideInFadeIn: 'MarkerContent_slideInFadeIn_3c',
                        fadeOut: 'MarkerContent_fadeOut_3e',
                        fadeIn: 'MarkerContent_fadeIn_04',
                        fadeInWithScale: 'MarkerContent_fadeInWithScale_09',
                        slideUp: 'MarkerContent_slideUp_9f',
                        scale: 'MarkerContent_scale_99',
                        spin: 'MarkerContent_spin_aa',
                        blink: 'MarkerContent_blink_2e',
                        slideInNotification: 'MarkerContent_slideInNotification_32',
                    },
                    ke = s().memo((e) => {
                        const t = (0, Ie.useTransition)(e, {
                            from: { opacity: 0, transform: 'translate(-50%, 50%)' },
                            enter: { opacity: 1, transform: 'translate(-50%, -50%)' },
                            leave: { opacity: 0, transform: 'translate(-50%, -150%)' },
                            config: { duration: 600 },
                        });
                        return s().createElement(
                            'div',
                            { className: ve()(Oe.base, e.className) },
                            t((e, { markerType: t, levelState: r, markerContent: n }) =>
                                s().createElement(
                                    Ie.animated.div,
                                    { style: e, className: ve()(Oe.content, Oe[`content__${t}`], Oe[`content__${r}`]) },
                                    n,
                                    s().createElement('div', { className: ve()(Oe.gradient, Oe[`gradient__${t}`]) }, n),
                                ),
                            ),
                        );
                    });
                let Ge, Pe, De, ze, $e, Ue, Ne, je;
                (!(function (e) {
                    ((e.Friend = 'friend'), (e.Default = 'default'));
                })(Ge || (Ge = {})),
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
                    })(Pe || (Pe = {})),
                    (function (e) {
                        ((e.Crystal = 'ny_crystal'),
                            (e.Emerald = 'ny_emerald'),
                            (e.Amber = 'ny_amber'),
                            (e.Iron = 'ny_iron'),
                            (e.AnyResource = 'anyResource'));
                    })(De || (De = {})),
                    (function (e) {
                        ((e.XP = 'xpFactor'),
                            (e.TankmenXP = 'tankmenXPFactor'),
                            (e.FreeXp = 'freeXPFactor'),
                            (e.Credits = 'creditsFactor'));
                    })(ze || (ze = {})),
                    (function (e) {
                        ((e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental'));
                    })($e || ($e = {})),
                    (function (e) {
                        ((e.Level1 = 'level1'), (e.Level2 = 'level2'), (e.Level3 = 'level3'), (e.Level4 = 'level4'));
                    })(Ue || (Ue = {})),
                    (function (e) {
                        ((e.Zero = 'zero'), (e.Number = 'number'), (e.Default = 'default'));
                    })(Ne || (Ne = {})),
                    (function (e) {
                        ((e.Undefined = 'undefined'),
                            (e.ToEvent = 'toEvent'),
                            (e.ToGuestD = 'toGuestD'),
                            (e.ToGuestC = 'toGuestC'),
                            (e.ToMarkertplace = 'toMarkertplace'),
                            (e.ToGiftmachine = 'toGiftmachine'),
                            (e.ToRewards = 'toRewards'));
                    })(je || (je = {})));
                var Fe = r(3403);
                function Be() {
                    return !1;
                }
                console.log;
                var Ve = r(9174);
                function Xe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const qe = (e) => (0 === e ? window : window.subViews.get(e)),
                    Qe = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: a, mocks: i }) {
                                const l = (0, o.useRef)([]),
                                    d = (e, r, n) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = qe,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = a.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const a = r(t),
                                                        i = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (r, i) => {
                                                        const o = 'string' == typeof i ? `${n}.${i}` : n,
                                                            s = ne.view.addModelObserver(o, t, !0);
                                                        return (a.set(s, r), e && r(l(i)), s);
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, t) => {
                                                        const r = l(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = l(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                r = (function (e, t) {
                                                                    var r =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (r) return (r = r.call(e)).next.bind(r);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (r = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return Xe(e, t);
                                                                                var r = {}.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === r &&
                                                                                        e.constructor &&
                                                                                        (r = e.constructor.name),
                                                                                    'Map' === r || 'Set' === r
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === r ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                r,
                                                                                            )
                                                                                          ? Xe(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        r && (e = r);
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
                                                            !(e = r()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            o =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(t)) : o.readByPath(t),
                                            d = (e) => l.current.push(e),
                                            u = (({ observableModel: e }) => ({ root: e.object() }))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const n = null != r ? r : s(t),
                                                            a = Ve.LO.box(n, { equals: Be });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Ve.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const n = null != r ? r : s(t),
                                                            a = Ve.LO.box(n, { equals: Be });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Ve.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const n = s(r);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = Ve.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Ve.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                a[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = t,
                                                                i = Object.entries(a),
                                                                l = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = Ve.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Ve.aD)((e) => {
                                                                            i.forEach(([t, r]) => {
                                                                                l[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                l
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            c = { mode: e, model: u, externalModel: o, cleanup: d };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && n ? n.controls(c) : t(c),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    u = (0, o.useRef)(!1),
                                    c = (0, o.useState)(e),
                                    m = c[0],
                                    g = c[1],
                                    h = (0, o.useState)(() => d(e, n, i)),
                                    f = h[0],
                                    v = h[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        u.current ? v(d(m, n, i)) : (u.current = !0);
                                    }, [i, m, n]),
                                    (0, o.useEffect)(() => {
                                        g(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            (f.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [f],
                                    ),
                                    s().createElement(r.Provider, { value: f }, a)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(0, function () {}),
                    Ye = Qe[0],
                    Ze = Qe[1],
                    Je = (0, Fe.Pi)(() => {
                        const e = Ze().model.root.get(),
                            t = e.isVisible,
                            r = e.availableDoorsAmount,
                            n = e.isPostEvent,
                            a = e.dogSacksAvailable;
                        return (
                            (0, o.useEffect)(() => {
                                ne.view.resize(190, 190, 'rem');
                            }, []),
                            t
                                ? s().createElement(
                                      'div',
                                      { className: 'App_base_87' },
                                      n
                                          ? s().createElement(
                                                'div',
                                                { className: 'App_postEventMarker_ad' },
                                                s().createElement(ke, {
                                                    markerContent: R.strings.advent_calendar.marker.exclamationMark(),
                                                    levelState: Ne.Default,
                                                    markerType: Ge.Default,
                                                    className: 'App_postEventContent_75',
                                                }),
                                            )
                                          : s().createElement(
                                                Ce,
                                                { className: ve()(!a && 'App_marker__animated_a0') },
                                                s().createElement(
                                                    'div',
                                                    { className: 'App_content_81' },
                                                    s().createElement('div', { className: 'App_icon_54' }),
                                                    s().createElement(
                                                        'div',
                                                        {
                                                            className: 'App_count_1a',
                                                            lang: R.strings.settings.LANGUAGE_CODE(),
                                                        },
                                                        r,
                                                    ),
                                                ),
                                            ),
                                  )
                                : null
                        );
                    });
                engine.whenReady.then(() => {
                    Re().render(
                        s().createElement(We, null, s().createElement(Ye, null, s().createElement(Je, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        r = {};
    function n(e) {
        var a = r[e];
        if (void 0 !== a) return a.exports;
        var i = (r[e] = { exports: {} });
        return (t[e](i, i.exports, n), i.exports);
    }
    ((n.m = t),
        (e = []),
        (n.O = (t, r, a, i) => {
            if (!r) {
                var l = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [r, a, i] = e[u], o = !0, s = 0; s < r.length; s++)
                        (!1 & i || l >= i) && Object.keys(n.O).every((e) => n.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), i < l && (l = i));
                    if (o) {
                        e.splice(u--, 1);
                        var d = a();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [r, a, i];
        }),
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (n.d(t, { a: t }), t);
        }),
        (n.d = (e, t) => {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (n.j = 954),
        (() => {
            var e = { 954: 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var a,
                        i,
                        [l, o, s] = r,
                        d = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (a in o) n.o(o, a) && (n.m[a] = o[a]);
                        if (s) var u = s(n);
                    }
                    for (t && t(r); d < l.length; d++) ((i = l[d]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return n.O(u);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var a = n.O(void 0, [503], () => n(8231));
    a = n.O(a);
})();
