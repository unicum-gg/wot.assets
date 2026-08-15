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
            348: (e, t, r) => {
                'use strict';
                var a = {};
                (r.r(a),
                    r.d(a, { mouse: () => x, off: () => f, on: () => h, onResize: () => c, onScaleUpdated: () => g }));
                var n = {};
                (r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => L,
                        getSize: () => S,
                        graphicsQuality: () => b,
                        playSound: () => w,
                        setRTPC: () => E,
                    }));
                var i = {};
                (r.r(i), r.d(i, { getBgUrl: () => _, getTextureUrl: () => A }));
                var l = {};
                (r.r(l),
                    r.d(l, {
                        addModelObserver: () => B,
                        addPreloadTexture: () => k,
                        arabic2roman: () => le,
                        children: () => i,
                        displayStatus: () => I,
                        displayStatusIs: () => oe,
                        events: () => O,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => ae,
                        freezeTextureBeforeResize: () => Q,
                        getBrowserTexturePath: () => V,
                        getDisplayStatus: () => ne,
                        getFontNames: () => ie,
                        getScale: () => J,
                        getSize: () => N,
                        getViewGlobalPosition: () => q,
                        isEventHandled: () => re,
                        isFocused: () => ee,
                        pxToRem: () => K,
                        remToPx: () => Y,
                        resize: () => X,
                        sendEvent: () => j,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => te,
                        setInputPaddingsRem: () => U,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => ue,
                    }));
                var o = r(363),
                    s = r.n(o);
                const u = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                function d(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function m(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const c = d('clientResized'),
                    g = d('self.onScaleUpdated'),
                    h = (e, t) => engine.on(e, t),
                    f = (e, t) => engine.off(e, t),
                    v = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
                const x = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && m(!1);
                    }
                    function r() {
                        e.enabled && m(!0);
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
                            : m(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${t}`,
                                        l = v[t]((e) => r([e, 'outside']));
                                    function o(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, o),
                                        a(),
                                        () => {
                                            n &&
                                                (l(),
                                                window.removeEventListener(i, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(r)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            ((e.enabled = !1), a());
                        },
                        enable() {
                            ((e.enabled = !0), a());
                        },
                        enableOutside() {
                            e.enabled && m(!0);
                        },
                        disableOutside() {
                            e.enabled && m(!1);
                        },
                    });
                })();
                function w(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function E(e, t) {
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
                const b = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(p).reduce((e, t) => ((e[t] = () => w(p[t])), e), {}),
                    H = { play: Object.assign({}, y, { sound: w }), setRTPC: E },
                    M = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    T = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function W(e) {
                    let t = '';
                    for (let r = T.length - 1; r >= 0; r--) for (; e >= T[r];) ((t += M[r]), (e -= T[r]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function A(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function _(e, t, r) {
                    return `url(${A(e, t, r)})`;
                }
                const I = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    O = {
                        onTextureFrozen: d('self.onTextureFrozen'),
                        onTextureReady: d('self.onTextureReady'),
                        onDomBuilt: d('self.onDomBuilt'),
                        onLoaded: d('self.onLoaded'),
                        onDisplayChanged: d('self.onShowingStatusChanged'),
                        onFocusUpdated: d('self.onFocusChanged'),
                        children: {
                            onAdded: d('children.onAdded'),
                            onLoaded: d('children.onLoaded'),
                            onRemoved: d('children.onRemoved'),
                            onAttached: d('children.onAttached'),
                            onTextureReady: d('children.onTextureReady'),
                            onRequestPosition: d('children.requestPosition'),
                        },
                    },
                    P = ['args'];
                const D = 2,
                    G = 16,
                    $ = 32,
                    C = 64,
                    z = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                    return n;
                                })(t, P);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    j = {
                        close(e) {
                            z('popover' === e ? D : $);
                        },
                        minimize() {
                            z(C);
                        },
                        move(e) {
                            z(G, { isMouseEvent: !0, on: e });
                        },
                    };
                function k(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function V(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function B(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function X(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function q(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Y(t.x), y: Y(t.y) };
                }
                function Q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function J() {
                    return viewEnv.getScale();
                }
                function K(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function ee() {
                    return viewEnv.isFocused();
                }
                function te() {
                    return viewEnv.setEventHandled();
                }
                function re() {
                    return viewEnv.isEventHandled();
                }
                function ae() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ne() {
                    return viewEnv.getShowingStatus();
                }
                const ie = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    le = W,
                    oe = Object.keys(I).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === I[t]), e), {}),
                    se = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ue = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : O.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    de = { view: l, client: n, sound: H };
                const me = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var ce;
                function ge(e, t, r) {
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
                        n = (function (e, t) {
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
                        i = Math.min(a, n);
                    return {
                        extraLarge: i === r.extraLarge.weight,
                        large: i === r.large.weight,
                        medium: i === r.medium.weight,
                        small: i === r.small.weight,
                        extraSmall: i === r.extraSmall.weight,
                        extraLargeWidth: a === r.extraLarge.weight,
                        largeWidth: a === r.large.weight,
                        mediumWidth: a === r.medium.weight,
                        smallWidth: a === r.small.weight,
                        extraSmallWidth: a === r.extraSmall.weight,
                        extraLargeHeight: n === r.extraLarge.weight,
                        largeHeight: n === r.large.weight,
                        mediumHeight: n === r.medium.weight,
                        smallHeight: n === r.small.weight,
                        extraSmallHeight: n === r.extraSmall.weight,
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
                })(ce || (ce = {}));
                const he = de.client.getSize('rem'),
                    fe = he.width,
                    ve = he.height,
                    xe = Object.assign({ width: fe, height: ve }, ge(fe, ve, me)),
                    we = (0, o.createContext)(xe),
                    Ee = ['children'];
                const Se = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                            return n;
                        })(e, Ee);
                    const a = (0, o.useContext)(we),
                        n = a.extraLarge,
                        i = a.large,
                        l = a.medium,
                        s = a.small,
                        d = a.extraSmall,
                        m = a.extraLargeWidth,
                        c = a.largeWidth,
                        g = a.mediumWidth,
                        h = a.smallWidth,
                        f = a.extraSmallWidth,
                        v = a.extraLargeHeight,
                        x = a.largeHeight,
                        w = a.mediumHeight,
                        E = a.smallHeight,
                        S = a.extraSmallHeight,
                        L = { extraLarge: v, large: x, medium: w, small: E, extraSmall: S };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && n) return t;
                        if (r.large && i) return t;
                        if (r.medium && l) return t;
                        if (r.small && s) return t;
                        if (r.extraSmall && d) return t;
                    } else {
                        if (r.extraLargeWidth && m) return u(t, r, L);
                        if (r.largeWidth && c) return u(t, r, L);
                        if (r.mediumWidth && g) return u(t, r, L);
                        if (r.smallWidth && h) return u(t, r, L);
                        if (r.extraSmallWidth && f) return u(t, r, L);
                        if (!(
                            r.extraLargeWidth ||
                            r.largeWidth ||
                            r.mediumWidth ||
                            r.smallWidth ||
                            r.extraSmallWidth
                        )) {
                            if (r.extraLargeHeight && v) return t;
                            if (r.largeHeight && x) return t;
                            if (r.mediumHeight && w) return t;
                            if (r.smallHeight && E) return t;
                            if (r.extraSmallHeight && S) return t;
                        }
                    }
                    return null;
                };
                Se.defaultProps = {
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
                (0, o.memo)(Se);
                const Le = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    be = ({ children: e }) => {
                        const t = (0, o.useContext)(we),
                            r = (0, o.useState)(t),
                            a = r[0],
                            n = r[1],
                            i = (0, o.useCallback)((e, t) => {
                                const r = de.view.pxToRem(e),
                                    a = de.view.pxToRem(t);
                                n(Object.assign({ width: r, height: a }, ge(r, a, me)));
                            }, []),
                            l = (0, o.useCallback)(() => {
                                const e = de.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        (Le(() => {
                            (de.client.events.on('clientResized', i), de.client.events.on('self.onScaleUpdated', l));
                        }),
                            (0, o.useEffect)(
                                () => () => {
                                    (de.client.events.off('clientResized', i),
                                        de.client.events.off('self.onScaleUpdated', l));
                                },
                                [i, l],
                            ));
                        const u = (0, o.useMemo)(() => Object.assign({}, a), [a]);
                        return s().createElement(we.Provider, { value: u }, e);
                    };
                var pe = r(483),
                    ye = r.n(pe),
                    He = r(926),
                    Me = r.n(He);
                let Te, Re, We;
                (!(function (e) {
                    ((e[(e.ExtraSmall = me.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = me.small.width)] = 'Small'),
                        (e[(e.Medium = me.medium.width)] = 'Medium'),
                        (e[(e.Large = me.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = me.extraLarge.width)] = 'ExtraLarge'));
                })(Te || (Te = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = me.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = me.small.width)] = 'Small'),
                            (e[(e.Medium = me.medium.width)] = 'Medium'),
                            (e[(e.Large = me.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = me.extraLarge.width)] = 'ExtraLarge'));
                    })(Re || (Re = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = me.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = me.small.height)] = 'Small'),
                            (e[(e.Medium = me.medium.height)] = 'Medium'),
                            (e[(e.Large = me.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = me.extraLarge.height)] = 'ExtraLarge'));
                    })(We || (We = {})));
                const Ae = () => {
                        const e = (0, o.useContext)(we),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return Te.ExtraLarge;
                                    case e.large:
                                        return Te.Large;
                                    case e.medium:
                                        return Te.Medium;
                                    case e.small:
                                        return Te.Small;
                                    case e.extraSmall:
                                        return Te.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Te.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Re.ExtraLarge;
                                    case e.largeWidth:
                                        return Re.Large;
                                    case e.mediumWidth:
                                        return Re.Medium;
                                    case e.smallWidth:
                                        return Re.Small;
                                    case e.extraSmallWidth:
                                        return Re.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Re.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return We.ExtraLarge;
                                    case e.largeHeight:
                                        return We.Large;
                                    case e.mediumHeight:
                                        return We.Medium;
                                    case e.smallHeight:
                                        return We.Small;
                                    case e.extraSmallHeight:
                                        return We.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), We.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: r };
                    },
                    _e = ['children', 'className'];
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                const Oe = {
                        [Re.ExtraSmall]: '',
                        [Re.Small]: Me().SMALL_WIDTH,
                        [Re.Medium]: `${Me().SMALL_WIDTH} ${Me().MEDIUM_WIDTH}`,
                        [Re.Large]: `${Me().SMALL_WIDTH} ${Me().MEDIUM_WIDTH} ${Me().LARGE_WIDTH}`,
                        [Re.ExtraLarge]: `${Me().SMALL_WIDTH} ${Me().MEDIUM_WIDTH} ${Me().LARGE_WIDTH} ${Me().EXTRA_LARGE_WIDTH}`,
                    },
                    Pe = {
                        [We.ExtraSmall]: '',
                        [We.Small]: Me().SMALL_HEIGHT,
                        [We.Medium]: `${Me().SMALL_HEIGHT} ${Me().MEDIUM_HEIGHT}`,
                        [We.Large]: `${Me().SMALL_HEIGHT} ${Me().MEDIUM_HEIGHT} ${Me().LARGE_HEIGHT}`,
                        [We.ExtraLarge]: `${Me().SMALL_HEIGHT} ${Me().MEDIUM_HEIGHT} ${Me().LARGE_HEIGHT} ${Me().EXTRA_LARGE_HEIGHT}`,
                    },
                    De = {
                        [Te.ExtraSmall]: '',
                        [Te.Small]: Me().SMALL,
                        [Te.Medium]: `${Me().SMALL} ${Me().MEDIUM}`,
                        [Te.Large]: `${Me().SMALL} ${Me().MEDIUM} ${Me().LARGE}`,
                        [Te.ExtraLarge]: `${Me().SMALL} ${Me().MEDIUM} ${Me().LARGE} ${Me().EXTRA_LARGE}`,
                    },
                    Ge = (e) => {
                        let t = e.children,
                            r = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                return n;
                            })(e, _e);
                        const n = Ae(),
                            i = n.mediaWidth,
                            l = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', Ie({ className: ye()(r, Oe[i], Pe[l], De[o]) }, a), t);
                    },
                    $e = ['children'];
                const Ce = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                            return n;
                        })(e, $e);
                    return s().createElement(be, null, s().createElement(Ge, r, t));
                };
                var ze = r(533),
                    je = r.n(ze),
                    ke = r(403),
                    Ue = r(30);
                const Ve = (e) => e * e * e,
                    Be = (e) => 1 - Math.pow(1 - e, 3),
                    Fe = (e, t, r, a, n) => {
                        const i = 1 - e;
                        return (
                            Math.pow(i, 3) * t +
                            3 * Math.pow(i, 2) * e * r +
                            3 * i * Math.pow(e, 2) * a +
                            Math.pow(e, 3) * n
                        );
                    },
                    Ne = (e, t, r, a, n) => {
                        const i = 1 - e;
                        return 3 * Math.pow(i, 2) * (r - t) + 6 * i * e * (a - r) + 3 * Math.pow(e, 2) * (n - a);
                    };
                ((Xe = 0.33), (qe = 0), (Qe = 0.25), (Je = 0));
                var Xe, qe, Qe, Je;
                const Ke = function () {};
                function Ye() {
                    return !1;
                }
                console.log;
                var Ze = r(174);
                function et(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return tt(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return tt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function tt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const rt = (e) => (0 === e ? window : window.subViews.get(e));
                const at = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: n, children: i, mocks: l }) {
                                const u = (0, o.useRef)([]),
                                    d = (r, a, n) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = rt,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = n.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const n = r(t),
                                                        i = a.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (r, i) => {
                                                        const o = 'string' == typeof i ? `${a}.${i}` : a,
                                                            s = de.view.addModelObserver(o, t, !0);
                                                        return (n.set(s, r), e && r(l(i)), s);
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
                                                        for (var e, r = et(n.keys()); !(e = r()).done;) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(a),
                                            o =
                                                'real' === r
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (i = null == n ? void 0 : n.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === r ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            m = e({
                                                mode: r,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = Ze.LO.box(a, { equals: Ye });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ze.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = Ze.LO.box(a, { equals: Ye });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ze.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = Ze.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Ze.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                i = Object.entries(n),
                                                                l = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = Ze.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Ze.aD)((e) => {
                                                                            i.forEach(([t, r]) => {
                                                                                l[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                l
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            c = { mode: r, model: m, externalModel: o, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === r && n ? n.controls(c) : t(c),
                                            externalModel: o,
                                            mode: r,
                                        };
                                    },
                                    m = (0, o.useRef)(!1),
                                    c = (0, o.useState)(a),
                                    g = c[0],
                                    h = c[1],
                                    f = (0, o.useState)(() => d(a, n, l)),
                                    v = f[0],
                                    x = f[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        m.current ? x(d(g, n, l)) : (m.current = !0);
                                    }, [l, g, n]),
                                    (0, o.useEffect)(() => {
                                        h(a);
                                    }, [a]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            (v.externalModel.dispose(), u.current.forEach((e) => e()));
                                        },
                                        [v],
                                    ),
                                    s().createElement(r.Provider, { value: v }, i)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(({ observableModel: e }) => ({ root: e.object() }), Ke),
                    nt = at[0],
                    it = at[1],
                    lt = 'App_base_09',
                    ot = 'App_content_7c',
                    st = 'App_count_ae',
                    ut = 'App_glareMask_c0',
                    dt = 'App_glare_c3',
                    mt = { [Te.ExtraSmall]: 15, [Te.Small]: 15, [Te.Medium]: 20, [Te.Large]: 25, [Te.ExtraLarge]: 25 },
                    ct = (0, ke.Pi)(() => {
                        const e = it().model.root.get(),
                            t = e.isVisible,
                            r = e.availableEnvelopesAmount,
                            a = Ae().mediaSize,
                            n = (0, o.useRef)(!1);
                        (0, o.useEffect)(() => {
                            de.view.resize(190, 190, 'rem');
                        }, []);
                        const i = (0, Ue.useSpring)(() => ({ y: '0' })),
                            l = i[0],
                            u = i[1],
                            d = (0, Ue.useSpring)(() => ({ x: '-100%', rotate: '60deg' })),
                            m = d[0],
                            c = d[1],
                            g = (e, t) => {
                                u.start({
                                    from: { y: '0' },
                                    to: { y: `-${mt[a]}rem` },
                                    delay: e,
                                    config: { duration: 150, easing: Ve },
                                    onRest: () => {
                                        u.start({
                                            to: { y: `${mt[a]}rem` },
                                            config: { duration: 150, easing: Ve },
                                            onRest: () => {
                                                u.start({
                                                    to: { y: '0' },
                                                    config: { duration: 200, easing: Be },
                                                    onRest: () => {
                                                        c.start({
                                                            from: { x: '-100%' },
                                                            to: { x: '100rem' },
                                                            delay: 100,
                                                            config: { duration: 1200, easing: Be },
                                                            onRest: t,
                                                        });
                                                    },
                                                });
                                            },
                                        });
                                    },
                                });
                            };
                        return (
                            (0, o.useEffect)(() => {
                                t &&
                                    !n.current &&
                                    ((n.current = !0),
                                    g(6e3, () => {
                                        g(0, () => g(0));
                                    }));
                            }, [t]),
                            t
                                ? s().createElement(
                                      'div',
                                      { className: lt },
                                      s().createElement(
                                          Ue.animated.div,
                                          { className: ot, style: l },
                                          s().createElement(
                                              'div',
                                              { className: ut },
                                              s().createElement(Ue.animated.div, { className: dt, style: m }),
                                          ),
                                          s().createElement('div', { className: ye()(st) }, r),
                                      ),
                                  )
                                : null
                        );
                    });
                engine.whenReady.then(() => {
                    je().render(
                        s().createElement(Ce, null, s().createElement(nt, null, s().createElement(ct, null))),
                        document.getElementById('root'),
                    );
                });
            },
            363: (e) => {
                'use strict';
                e.exports = React;
            },
            533: (e) => {
                'use strict';
                e.exports = ReactDOM;
            },
        },
        r = {};
    function a(e) {
        var n = r[e];
        if (void 0 !== n) return n.exports;
        var i = (r[e] = { exports: {} });
        return (t[e](i, i.exports, a), i.exports);
    }
    ((a.m = t),
        (e = []),
        (a.O = (t, r, n, i) => {
            if (!r) {
                var l = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [r, n, i] = e[d], o = !0, s = 0; s < r.length; s++)
                        (!1 & i || l >= i) && Object.keys(a.O).every((e) => a.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), i < l && (l = i));
                    if (o) {
                        e.splice(d--, 1);
                        var u = n();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
            e[d] = [r, n, i];
        }),
        (a.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (a.d(t, { a: t }), t);
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
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (a.j = 730),
        (() => {
            var e = { 730: 0 };
            a.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        i,
                        [l, o, s] = r,
                        u = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (n in o) a.o(o, n) && (a.m[n] = o[n]);
                        if (s) var d = s(a);
                    }
                    for (t && t(r); u < l.length; u++) ((i = l[u]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return a.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var n = a.O(void 0, [46], () => a(348));
    n = a.O(n);
})();
