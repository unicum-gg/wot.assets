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
            2169: (e, t, r) => {
                'use strict';
                var a = {};
                r.r(a), r.d(a, { mouse: () => f, onResize: () => h });
                var i = {};
                r.r(i),
                    r.d(i, {
                        events: () => a,
                        getMouseGlobalPosition: () => w,
                        getSize: () => x,
                        graphicsQuality: () => E,
                    });
                var n = {};
                r.r(n), r.d(n, { getBgUrl: () => b, getTextureUrl: () => L });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => R,
                        addPreloadTexture: () => T,
                        children: () => n,
                        displayStatus: () => S,
                        displayStatusIs: () => F,
                        events: () => H,
                        extraSize: () => X,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => P,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => V,
                        getScale: () => D,
                        getSize: () => I,
                        getViewGlobalPosition: () => G,
                        isEventHandled: () => U,
                        isFocused: () => C,
                        pxToRem: () => $,
                        remToPx: () => z,
                        resize: () => O,
                        sendEvent: () => M,
                        setAnimateWindow: () => j,
                        setEventHandled: () => k,
                        setInputPaddingsRem: () => _,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => N,
                    });
                var o = r(6179),
                    u = r.n(o),
                    s = r(493),
                    d = r.n(s);
                const m = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                function g(e) {
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
                const h = g('clientResized'),
                    v = { down: g('mousedown'), up: g('mouseup'), move: g('mousemove') },
                    f = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && c(!1);
                        }
                        function r() {
                            e.enabled && c(!0);
                        }
                        function a() {
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
                        const i = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let i = !0;
                                        const n = `mouse${t}`,
                                            l = v[t]((e) => r([e, 'outside']));
                                        function o(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, o),
                                            a(),
                                            () => {
                                                i &&
                                                    (l(),
                                                    window.removeEventListener(n, o),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (i = !1));
                                            }
                                        );
                                    };
                                })(r)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
                            },
                            enableOutside() {
                                e.enabled && c(!0);
                            },
                            disableOutside() {
                                e.enabled && c(!1);
                            },
                        });
                    })();
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function L(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function b(e, t, r) {
                    return `url(${L(e, t, r)})`;
                }
                const S = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    H = {
                        onTextureFrozen: g('self.onTextureFrozen'),
                        onTextureReady: g('self.onTextureReady'),
                        onDomBuilt: g('self.onDomBuilt'),
                        onLoaded: g('self.onLoaded'),
                        onDisplayChanged: g('self.onShowingStatusChanged'),
                        onFocusUpdated: g('self.onFocusChanged'),
                        children: {
                            onAdded: g('children.onAdded'),
                            onLoaded: g('children.onLoaded'),
                            onRemoved: g('children.onRemoved'),
                            onAttached: g('children.onAttached'),
                            onTextureReady: g('children.onTextureReady'),
                            onRequestPosition: g('children.requestPosition'),
                        },
                    },
                    p = ['args'],
                    y = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        a,
                                        i = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (r = n[a]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                    return i;
                                })(t, p);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, n, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    M = {
                        close(e) {
                            y('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            y(64);
                        },
                        move(e) {
                            y(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function T(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function W(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function R(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function I(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function O(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function G(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: z(t.x), y: z(t.y) };
                }
                function P() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function $(e) {
                    return viewEnv.pxToRem(e);
                }
                function z(e) {
                    return viewEnv.remToPx(e);
                }
                function j(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function k() {
                    return viewEnv.setEventHandled();
                }
                function U() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function V() {
                    return viewEnv.getShowingStatus();
                }
                const F = Object.keys(S).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === S[t]), e), {}),
                    X = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    N = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : H.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    q = { view: l, client: i },
                    Q = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var J;
                function K(e, t, r) {
                    const a = (function (e, t) {
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
                        i = (function (e, t) {
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
                        n = Math.min(a, i);
                    return {
                        extraLarge: n === r.extraLarge.weight,
                        large: n === r.large.weight,
                        medium: n === r.medium.weight,
                        small: n === r.small.weight,
                        extraSmall: n === r.extraSmall.weight,
                        extraLargeWidth: a === r.extraLarge.weight,
                        largeWidth: a === r.large.weight,
                        mediumWidth: a === r.medium.weight,
                        smallWidth: a === r.small.weight,
                        extraSmallWidth: a === r.extraSmall.weight,
                        extraLargeHeight: i === r.extraLarge.weight,
                        largeHeight: i === r.large.weight,
                        mediumHeight: i === r.medium.weight,
                        smallHeight: i === r.small.weight,
                        extraSmallHeight: i === r.extraSmall.weight,
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
                })(J || (J = {}));
                const Y = q.client.getSize('rem'),
                    Z = Y.width,
                    ee = Y.height,
                    te = Object.assign({ width: Z, height: ee }, K(Z, ee, Q)),
                    re = (0, o.createContext)(te),
                    ae = ['children'],
                    ie = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    i = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (r = n[a]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i;
                            })(e, ae);
                        const a = (0, o.useContext)(re),
                            i = a.extraLarge,
                            n = a.large,
                            l = a.medium,
                            u = a.small,
                            s = a.extraSmall,
                            d = a.extraLargeWidth,
                            g = a.largeWidth,
                            c = a.mediumWidth,
                            h = a.smallWidth,
                            v = a.extraSmallWidth,
                            f = a.extraLargeHeight,
                            x = a.largeHeight,
                            w = a.mediumHeight,
                            E = a.smallHeight,
                            L = a.extraSmallHeight,
                            b = { extraLarge: f, large: x, medium: w, small: E, extraSmall: L };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && i) return t;
                            if (r.large && n) return t;
                            if (r.medium && l) return t;
                            if (r.small && u) return t;
                            if (r.extraSmall && s) return t;
                        } else {
                            if (r.extraLargeWidth && d) return m(t, r, b);
                            if (r.largeWidth && g) return m(t, r, b);
                            if (r.mediumWidth && c) return m(t, r, b);
                            if (r.smallWidth && h) return m(t, r, b);
                            if (r.extraSmallWidth && v) return m(t, r, b);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && f) return t;
                                if (r.largeHeight && x) return t;
                                if (r.mediumHeight && w) return t;
                                if (r.smallHeight && E) return t;
                                if (r.extraSmallHeight && L) return t;
                            }
                        }
                        return null;
                    };
                (ie.defaultProps = {
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
                    (0, o.memo)(ie);
                const ne = (0, o.memo)(({ children: e }) => {
                    const t = (0, o.useContext)(re),
                        r = (0, o.useState)(t),
                        a = r[0],
                        i = r[1],
                        n = (0, o.useCallback)((e, t) => {
                            const r = q.view.pxToRem(e),
                                a = q.view.pxToRem(t);
                            i(Object.assign({ width: r, height: a }, K(r, a, Q)));
                        }, []);
                    ((e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        engine.on('clientResized', n);
                    }),
                        (0, o.useEffect)(() => () => engine.off('clientResized', n), [n]);
                    const l = (0, o.useMemo)(() => Object.assign({}, a), [a]);
                    return u().createElement(re.Provider, { value: l }, e);
                });
                var le = r(6483),
                    oe = r.n(le),
                    ue = r(926),
                    se = r.n(ue);
                let de, me, ge;
                !(function (e) {
                    (e[(e.ExtraSmall = Q.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = Q.small.width)] = 'Small'),
                        (e[(e.Medium = Q.medium.width)] = 'Medium'),
                        (e[(e.Large = Q.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = Q.extraLarge.width)] = 'ExtraLarge');
                })(de || (de = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = Q.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = Q.small.width)] = 'Small'),
                            (e[(e.Medium = Q.medium.width)] = 'Medium'),
                            (e[(e.Large = Q.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = Q.extraLarge.width)] = 'ExtraLarge');
                    })(me || (me = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = Q.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = Q.small.height)] = 'Small'),
                            (e[(e.Medium = Q.medium.height)] = 'Medium'),
                            (e[(e.Large = Q.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = Q.extraLarge.height)] = 'ExtraLarge');
                    })(ge || (ge = {}));
                const ce = ['children', 'className'];
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const ve = {
                        [me.ExtraSmall]: '',
                        [me.Small]: se().SMALL_WIDTH,
                        [me.Medium]: `${se().SMALL_WIDTH} ${se().MEDIUM_WIDTH}`,
                        [me.Large]: `${se().SMALL_WIDTH} ${se().MEDIUM_WIDTH} ${se().LARGE_WIDTH}`,
                        [me.ExtraLarge]: `${se().SMALL_WIDTH} ${se().MEDIUM_WIDTH} ${se().LARGE_WIDTH} ${se().EXTRA_LARGE_WIDTH}`,
                    },
                    fe = {
                        [ge.ExtraSmall]: '',
                        [ge.Small]: se().SMALL_HEIGHT,
                        [ge.Medium]: `${se().SMALL_HEIGHT} ${se().MEDIUM_HEIGHT}`,
                        [ge.Large]: `${se().SMALL_HEIGHT} ${se().MEDIUM_HEIGHT} ${se().LARGE_HEIGHT}`,
                        [ge.ExtraLarge]: `${se().SMALL_HEIGHT} ${se().MEDIUM_HEIGHT} ${se().LARGE_HEIGHT} ${se().EXTRA_LARGE_HEIGHT}`,
                    },
                    xe = {
                        [de.ExtraSmall]: '',
                        [de.Small]: se().SMALL,
                        [de.Medium]: `${se().SMALL} ${se().MEDIUM}`,
                        [de.Large]: `${se().SMALL} ${se().MEDIUM} ${se().LARGE}`,
                        [de.ExtraLarge]: `${se().SMALL} ${se().MEDIUM} ${se().LARGE} ${se().EXTRA_LARGE}`,
                    },
                    we = (e) => {
                        let t = e.children,
                            r = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    i = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (r = n[a]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i;
                            })(e, ce);
                        const i = (() => {
                                const e = (0, o.useContext)(re),
                                    t = e.width,
                                    r = e.height,
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return de.ExtraLarge;
                                            case e.large:
                                                return de.Large;
                                            case e.medium:
                                                return de.Medium;
                                            case e.small:
                                                return de.Small;
                                            case e.extraSmall:
                                                return de.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), de.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return me.ExtraLarge;
                                            case e.largeWidth:
                                                return me.Large;
                                            case e.mediumWidth:
                                                return me.Medium;
                                            case e.smallWidth:
                                                return me.Small;
                                            case e.extraSmallWidth:
                                                return me.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), me.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    n = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return ge.ExtraLarge;
                                            case e.largeHeight:
                                                return ge.Large;
                                            case e.mediumHeight:
                                                return ge.Medium;
                                            case e.smallHeight:
                                                return ge.Small;
                                            case e.extraSmallHeight:
                                                return ge.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), ge.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: a,
                                    mediaWidth: i,
                                    mediaHeight: n,
                                    remScreenWidth: t,
                                    remScreenHeight: r,
                                };
                            })(),
                            n = i.mediaWidth,
                            l = i.mediaHeight,
                            s = i.mediaSize;
                        return u().createElement('div', he({ className: oe()(r, ve[n], fe[l], xe[s]) }, a), t);
                    },
                    Ee = ['children'],
                    Le = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    i = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (r = n[a]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i;
                            })(e, Ee);
                        return u().createElement(ne, null, u().createElement(we, r, t));
                    };
                function be() {
                    return !1;
                }
                console.log;
                var Se = r(3915);
                function He(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const pe = (e) => (0 === e ? window : window.subViews.get(e)),
                    ye = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: i, mocks: n }) {
                                const l = (0, o.useRef)([]),
                                    s = (e, r, a) => {
                                        var i;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = pe,
                                                context: a = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function n(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? i.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = i.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const i = r(t),
                                                        n = a.split('.').reduce((e, t) => e[t], i);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (r, n) => {
                                                        const o = 'string' == typeof n ? `${a}.${n}` : a,
                                                            u = q.view.addModelObserver(o, t, !0);
                                                        return i.set(u, r), e && r(l(n)), u;
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
                                                                                    return He(e, t);
                                                                                var r = Object.prototype.toString
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
                                                                                          ? He(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        r && (e = r);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(i.keys());
                                                            !(e = r()).done;

                                                        )
                                                            n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(r),
                                            o =
                                                'real' === e
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            u = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : o.readByPath(t),
                                            s = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => {
                                                const t = { root: e.object() };
                                                return Object.assign({}, t);
                                            })({
                                                mode: e,
                                                readByPath: u,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const a = null != r ? r : u(t),
                                                            i = Se.observable.box(a, { equals: be });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Se.action)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const a = null != r ? r : u(t),
                                                            i = Se.observable.box(a, { equals: be });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Se.action)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const a = u(r);
                                                        if (Array.isArray(t)) {
                                                            const i = t.reduce(
                                                                (e, t) => ((e[t] = Se.observable.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Se.action)((e) => {
                                                                            t.forEach((t) => {
                                                                                i[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                        {
                                                            const i = t,
                                                                n = Object.entries(i),
                                                                l = n.reduce(
                                                                    (e, [t, r]) => (
                                                                        (e[r] = Se.observable.box(a[t], {})), e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Se.action)((e) => {
                                                                            n.forEach(([t, r]) => {
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
                                                cleanup: s,
                                            }),
                                            m = { mode: e, model: d, externalModel: o, cleanup: s };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && a ? a.controls(m) : t(m),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    d = (0, o.useRef)(!1),
                                    m = (0, o.useState)(e),
                                    g = m[0],
                                    c = m[1],
                                    h = (0, o.useState)(() => s(e, a, n)),
                                    v = h[0],
                                    f = h[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        d.current ? f(s(g, a, n)) : (d.current = !0);
                                    }, [n, g, a]),
                                    (0, o.useEffect)(() => {
                                        c(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    u().createElement(r.Provider, { value: v }, i)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(0, function () {}),
                    Me = ye[0],
                    Te = ye[1];
                var _e = r(3282);
                const We = {
                        base: 'App_base_31',
                        base__offence: 'App_base__offence_42',
                        base__defence: 'App_base__defence_a7',
                    },
                    Re = (0, _e.observer)(() => {
                        const e = Te().model.root.get().frontType,
                            t = oe()(We.base, We[`base__${e}`]);
                        var r;
                        return (
                            (r = () => {
                                q.view.setInputPaddingsRem(Q.extraLarge.width);
                            }),
                            (0, o.useEffect)(r, []),
                            u().createElement('div', { className: t })
                        );
                    });
                engine.whenReady.then(() => {
                    d().render(
                        u().createElement(Le, null, u().createElement(Me, null, u().createElement(Re, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        r = {};
    function a(e) {
        var i = r[e];
        if (void 0 !== i) return i.exports;
        var n = (r[e] = { exports: {} });
        return t[e].call(n.exports, n, n.exports, a), n.exports;
    }
    (a.m = t),
        (e = []),
        (a.O = (t, r, i, n) => {
            if (!r) {
                var l = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [r, i, n] = e[d], o = !0, u = 0; u < r.length; u++)
                        (!1 & n || l >= n) && Object.keys(a.O).every((e) => a.O[e](r[u]))
                            ? r.splice(u--, 1)
                            : ((o = !1), n < l && (l = n));
                    if (o) {
                        e.splice(d--, 1);
                        var s = i();
                        void 0 !== s && (t = s);
                    }
                }
                return t;
            }
            n = n || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
            e[d] = [r, i, n];
        }),
        (a.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return a.d(t, { a: t }), t;
        }),
        (a.d = (e, t) => {
            for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (a.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (a.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (() => {
            var e = { 234: 0 };
            a.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var i,
                        n,
                        [l, o, u] = r,
                        s = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (i in o) a.o(o, i) && (a.m[i] = o[i]);
                        if (u) var d = u(a);
                    }
                    for (t && t(r); s < l.length; s++) (n = l[s]), a.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return a.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var i = a.O(void 0, [503], () => a(2169));
    i = a.O(i);
})();
