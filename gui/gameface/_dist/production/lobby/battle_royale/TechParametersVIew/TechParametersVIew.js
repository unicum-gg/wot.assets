(() => {
    var e,
        t = {
            338: (e) => {
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
            926: (e, t, r) => {
                'use strict';
                var a = {};
                (r.r(a),
                    r.d(a, { mouse: () => w, off: () => f, on: () => h, onResize: () => m, onScaleUpdated: () => g }));
                var n = {};
                (r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => b,
                        getSize: () => S,
                        graphicsQuality: () => L,
                        playSound: () => E,
                        setRTPC: () => x,
                    }));
                var i = {};
                (r.r(i), r.d(i, { getBgUrl: () => A, getTextureUrl: () => W }));
                var l = {};
                (r.r(l),
                    r.d(l, {
                        addModelObserver: () => V,
                        addPreloadTexture: () => k,
                        arabic2roman: () => le,
                        children: () => i,
                        displayStatus: () => P,
                        displayStatusIs: () => oe,
                        events: () => O,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => ae,
                        freezeTextureBeforeResize: () => Q,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => ne,
                        getFontNames: () => ie,
                        getScale: () => J,
                        getSize: () => F,
                        getViewGlobalPosition: () => q,
                        isEventHandled: () => re,
                        isFocused: () => ee,
                        pxToRem: () => K,
                        remToPx: () => Y,
                        resize: () => X,
                        sendEvent: () => z,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => te,
                        setInputPaddingsRem: () => U,
                        setSidePaddingsRem: () => B,
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
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const m = d('clientResized'),
                    g = d('self.onScaleUpdated'),
                    h = (e, t) => engine.on(e, t),
                    f = (e, t) => engine.off(e, t),
                    v = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
                const w = (function () {
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
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function E(e) {
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
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const L = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(p).reduce((e, t) => ((e[t] = () => E(p[t])), e), {}),
                    H = { play: Object.assign({}, y, { sound: E }), setRTPC: x },
                    _ = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    M = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function T(e) {
                    let t = '';
                    for (let r = M.length - 1; r >= 0; r--) for (; e >= M[r]; ) ((t += _[r]), (e -= M[r]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function W(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function A(e, t, r) {
                    return `url(${W(e, t, r)})`;
                }
                const P = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    I = ['args'];
                const C = 2,
                    D = 16,
                    G = 32,
                    $ = 64,
                    j = (e, t) => {
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
                                })(t, I);
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
                    z = {
                        close(e) {
                            j('popover' === e ? C : G);
                        },
                        minimize() {
                            j($);
                        },
                        move(e) {
                            j(D, { isMouseEvent: !0, on: e });
                        },
                    };
                function k(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function V(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function F(e = 'px') {
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
                    le = T,
                    oe = Object.keys(P).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === P[t]), e), {}),
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
                const ce = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var me;
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
                })(me || (me = {}));
                const he = de.client.getSize('rem'),
                    fe = he.width,
                    ve = he.height,
                    we = Object.assign({ width: fe, height: ve }, ge(fe, ve, ce)),
                    Ee = (0, o.createContext)(we),
                    xe = ['children'];
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
                        })(e, xe);
                    const a = (0, o.useContext)(Ee),
                        n = a.extraLarge,
                        i = a.large,
                        l = a.medium,
                        s = a.small,
                        d = a.extraSmall,
                        c = a.extraLargeWidth,
                        m = a.largeWidth,
                        g = a.mediumWidth,
                        h = a.smallWidth,
                        f = a.extraSmallWidth,
                        v = a.extraLargeHeight,
                        w = a.largeHeight,
                        E = a.mediumHeight,
                        x = a.smallHeight,
                        S = a.extraSmallHeight,
                        b = { extraLarge: v, large: w, medium: E, small: x, extraSmall: S };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && n) return t;
                        if (r.large && i) return t;
                        if (r.medium && l) return t;
                        if (r.small && s) return t;
                        if (r.extraSmall && d) return t;
                    } else {
                        if (r.extraLargeWidth && c) return u(t, r, b);
                        if (r.largeWidth && m) return u(t, r, b);
                        if (r.mediumWidth && g) return u(t, r, b);
                        if (r.smallWidth && h) return u(t, r, b);
                        if (r.extraSmallWidth && f) return u(t, r, b);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && v) return t;
                            if (r.largeHeight && w) return t;
                            if (r.mediumHeight && E) return t;
                            if (r.smallHeight && x) return t;
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
                const be = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    Le = ({ children: e }) => {
                        const t = (0, o.useContext)(Ee),
                            r = (0, o.useState)(t),
                            a = r[0],
                            n = r[1],
                            i = (0, o.useCallback)((e, t) => {
                                const r = de.view.pxToRem(e),
                                    a = de.view.pxToRem(t);
                                n(Object.assign({ width: r, height: a }, ge(r, a, ce)));
                            }, []),
                            l = (0, o.useCallback)(() => {
                                const e = de.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        (be(() => {
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
                        return s().createElement(Ee.Provider, { value: u }, e);
                    };
                var pe = r(483),
                    ye = r.n(pe),
                    He = r(338),
                    _e = r.n(He);
                let Me, Te, Re;
                (!(function (e) {
                    ((e[(e.ExtraSmall = ce.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = ce.small.width)] = 'Small'),
                        (e[(e.Medium = ce.medium.width)] = 'Medium'),
                        (e[(e.Large = ce.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = ce.extraLarge.width)] = 'ExtraLarge'));
                })(Me || (Me = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = ce.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = ce.small.width)] = 'Small'),
                            (e[(e.Medium = ce.medium.width)] = 'Medium'),
                            (e[(e.Large = ce.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = ce.extraLarge.width)] = 'ExtraLarge'));
                    })(Te || (Te = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = ce.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = ce.small.height)] = 'Small'),
                            (e[(e.Medium = ce.medium.height)] = 'Medium'),
                            (e[(e.Large = ce.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = ce.extraLarge.height)] = 'ExtraLarge'));
                    })(Re || (Re = {})));
                const We = () => {
                        const e = (0, o.useContext)(Ee),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return Me.ExtraLarge;
                                    case e.large:
                                        return Me.Large;
                                    case e.medium:
                                        return Me.Medium;
                                    case e.small:
                                        return Me.Small;
                                    case e.extraSmall:
                                        return Me.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Me.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Te.ExtraLarge;
                                    case e.largeWidth:
                                        return Te.Large;
                                    case e.mediumWidth:
                                        return Te.Medium;
                                    case e.smallWidth:
                                        return Te.Small;
                                    case e.extraSmallWidth:
                                        return Te.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Te.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Re.ExtraLarge;
                                    case e.largeHeight:
                                        return Re.Large;
                                    case e.mediumHeight:
                                        return Re.Medium;
                                    case e.smallHeight:
                                        return Re.Small;
                                    case e.extraSmallHeight:
                                        return Re.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Re.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: r };
                    },
                    Ae = ['children', 'className'];
                function Pe() {
                    return (
                        (Pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        Pe.apply(this, arguments)
                    );
                }
                const Oe = {
                        [Te.ExtraSmall]: '',
                        [Te.Small]: _e().SMALL_WIDTH,
                        [Te.Medium]: `${_e().SMALL_WIDTH} ${_e().MEDIUM_WIDTH}`,
                        [Te.Large]: `${_e().SMALL_WIDTH} ${_e().MEDIUM_WIDTH} ${_e().LARGE_WIDTH}`,
                        [Te.ExtraLarge]: `${_e().SMALL_WIDTH} ${_e().MEDIUM_WIDTH} ${_e().LARGE_WIDTH} ${_e().EXTRA_LARGE_WIDTH}`,
                    },
                    Ie = {
                        [Re.ExtraSmall]: '',
                        [Re.Small]: _e().SMALL_HEIGHT,
                        [Re.Medium]: `${_e().SMALL_HEIGHT} ${_e().MEDIUM_HEIGHT}`,
                        [Re.Large]: `${_e().SMALL_HEIGHT} ${_e().MEDIUM_HEIGHT} ${_e().LARGE_HEIGHT}`,
                        [Re.ExtraLarge]: `${_e().SMALL_HEIGHT} ${_e().MEDIUM_HEIGHT} ${_e().LARGE_HEIGHT} ${_e().EXTRA_LARGE_HEIGHT}`,
                    },
                    Ce = {
                        [Me.ExtraSmall]: '',
                        [Me.Small]: _e().SMALL,
                        [Me.Medium]: `${_e().SMALL} ${_e().MEDIUM}`,
                        [Me.Large]: `${_e().SMALL} ${_e().MEDIUM} ${_e().LARGE}`,
                        [Me.ExtraLarge]: `${_e().SMALL} ${_e().MEDIUM} ${_e().LARGE} ${_e().EXTRA_LARGE}`,
                    },
                    De = (e) => {
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
                            })(e, Ae);
                        const n = We(),
                            i = n.mediaWidth,
                            l = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', Pe({ className: ye()(r, Oe[i], Ie[l], Ce[o]) }, a), t);
                    },
                    Ge = ['children'];
                const $e = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                            return n;
                        })(e, Ge);
                    return s().createElement(Le, null, s().createElement(De, r, t));
                };
                var je = r(533),
                    ze = r.n(je);
                function ke() {
                    const e = (0, o.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, o.useEffect)(() => t, []),
                        (0, o.useMemo)(
                            () => ({
                                run: (t) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                (t(), (e.current = 0));
                                            });
                                        })));
                                },
                                clear: () => {
                                    (window.cancelAnimationFrame(e.current), (e.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                var Ue = r(403);
                function Ne() {
                    return !1;
                }
                console.log;
                var Ve = r(174);
                function Be(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Fe(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return Fe(e, t);
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
                function Fe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const Xe = (e) => (0 === e ? window : window.subViews.get(e));
                var qe = r(946);
                const Qe = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: n, children: i, mocks: l }) {
                                const u = (0, o.useRef)([]),
                                    d = (r, a, n) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Xe,
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
                                                        for (var e, r = Be(n.keys()); !(e = r()).done; ) i(e.value, t);
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
                                            c = e({
                                                mode: r,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = Ve.LO.box(a, { equals: Ne });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ve.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = Ve.LO.box(a, { equals: Ne });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ve.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = Ve.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Ve.aD)((t) => {
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
                                                                    (e, [t, r]) => ((e[r] = Ve.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Ve.aD)((e) => {
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
                                            m = { mode: r, model: c, externalModel: o, cleanup: d };
                                        return {
                                            model: c,
                                            controls: 'mocks' === r && n ? n.controls(m) : t(m),
                                            externalModel: o,
                                            mode: r,
                                        };
                                    },
                                    c = (0, o.useRef)(!1),
                                    m = (0, o.useState)(a),
                                    g = m[0],
                                    h = m[1],
                                    f = (0, o.useState)(() => d(a, n, l)),
                                    v = f[0],
                                    w = f[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        c.current ? w(d(g, n, l)) : (c.current = !0);
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
                    })(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() };
                            return {
                                computes: {
                                    vehicleCombatParams: (0, qe.Om)(() =>
                                        Object.entries(t.root.get()).map(([e, t]) => {
                                            return {
                                                type: e,
                                                sectionValues:
                                                    ((r = t),
                                                    Array.from(
                                                        { length: 5 },
                                                        (e, t) => (Math.max(0, Math.min(20, r - 20 * t)) / 20) * 100,
                                                    )),
                                            };
                                            var r;
                                        }),
                                    ),
                                },
                            };
                        },
                        ({ externalModel: e }) => ({
                            openTechTreeWindow: e.createCallbackNoArgs('onClick'),
                            updateViewHeight: e.createCallback((e) => ({ height: e }), 'onResized'),
                        }),
                    ),
                    Je = Qe[0],
                    Ke = Qe[1];
                function Ye(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const Ze = 'Button_base_8c',
                    et = 'Button_glow_a6',
                    tt = 'Button_label_3d',
                    rt = (0, Ue.Pi)(() => {
                        const e = Ke().controls;
                        return s().createElement(
                            'div',
                            {
                                className: Ze,
                                onClick: () => {
                                    (Ye('play'), e.openTechTreeWindow());
                                },
                                onMouseEnter: () => {
                                    Ye('highlight');
                                },
                            },
                            s().createElement('div', { className: et }),
                            s().createElement('div', { className: tt }, R.strings.battle_royale.button.modules()),
                        );
                    }),
                    at = 'Section_base_bd',
                    nt = 'Section_defaultSection_8c',
                    it = 'Section_filledSection_7e',
                    lt = 'Section_filledSection__fullSection_09',
                    ot = ({ filledSectionWidth: e }) => {
                        const t = e % 100 == 0;
                        return s().createElement(
                            'div',
                            { className: at, style: { width: '20%' } },
                            s().createElement('div', { className: nt }),
                            e > 0 &&
                                s().createElement('div', { className: ye()(it, t && lt), style: { width: `${e}%` } }),
                        );
                    },
                    st = 'Parameter_base_c0',
                    ut = 'Parameter_paramType_40',
                    dt = 'Parameter_iconContainer_93',
                    ct = 'Parameter_wrapper_b9',
                    mt = 'Parameter_type_20',
                    gt = 'Parameter_text_db',
                    ht = 'Parameter_paramValuesContainer_e5',
                    ft = R.images.gui.maps.icons.battleRoyale.techParams,
                    vt = R.strings.battle_royale.techParams.type,
                    wt = ({ parameter: e }) => {
                        const t = e.type,
                            r = e.sectionValues;
                        return s().createElement(
                            'div',
                            { className: st },
                            s().createElement(
                                'div',
                                { className: ut },
                                s().createElement(
                                    'div',
                                    { className: dt },
                                    s().createElement(
                                        'div',
                                        { className: ct },
                                        s().createElement('div', {
                                            className: mt,
                                            style: { backgroundImage: `url(${ft.$dyn(t)})` },
                                        }),
                                    ),
                                    s().createElement('div', { className: gt }, vt.$dyn(t)),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: ht },
                                r.map((e, t) => s().createElement(ot, { filledSectionWidth: e, key: t })),
                            ),
                        );
                    },
                    Et = 'App_base_e7',
                    xt = 'App_container_87',
                    St = (0, Ue.Pi)(() => {
                        const e = s().useRef(null),
                            t = Ke(),
                            r = t.controls,
                            a = t.model,
                            n = ke();
                        var i;
                        return (
                            (i = () => {
                                de.view.setSidePaddingsRem({ left: 50, right: 0, top: 0, bottom: 0 });
                            }),
                            (0, o.useEffect)(i, []),
                            s().useLayoutEffect(() => {
                                const t = () => {
                                    n.run(() => {
                                        const t = e.current;
                                        t && r.updateViewHeight(viewEnv.pxToRem(t.offsetHeight));
                                    });
                                };
                                return (
                                    t(),
                                    engine.on('clientResized', t),
                                    () => {
                                        engine.off('clientResized', t);
                                    }
                                );
                            }, [r, n]),
                            s().createElement(
                                'div',
                                { className: Et, ref: e },
                                s().createElement(
                                    'div',
                                    { className: xt },
                                    a.computes
                                        .vehicleCombatParams()
                                        .map((e, t) => s().createElement(wt, { parameter: e, key: t })),
                                ),
                                s().createElement(rt, null),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    ze().render(
                        s().createElement(Je, null, s().createElement($e, null, s().createElement(St, null))),
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
        (a.j = 706),
        (() => {
            var e = { 706: 0 };
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
    var n = a.O(void 0, [695], () => a(926));
    n = a.O(n);
})();
