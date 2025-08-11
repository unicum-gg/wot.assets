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
            67: (e, t, r) => {
                'use strict';
                var n = {};
                (r.r(n),
                    r.d(n, { mouse: () => x, off: () => f, on: () => m, onResize: () => h, onScaleUpdated: () => g }));
                var i = {};
                (r.r(i),
                    r.d(i, {
                        events: () => n,
                        getMouseGlobalPosition: () => p,
                        getSize: () => b,
                        graphicsQuality: () => L,
                        playSound: () => w,
                        setRTPC: () => E,
                    }));
                var a = {};
                (r.r(a), r.d(a, { getBgUrl: () => W, getTextureUrl: () => A }));
                var l = {};
                (r.r(l),
                    r.d(l, {
                        addModelObserver: () => N,
                        addPreloadTexture: () => z,
                        arabic2roman: () => le,
                        children: () => a,
                        displayStatus: () => I,
                        displayStatusIs: () => oe,
                        events: () => O,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => ne,
                        freezeTextureBeforeResize: () => Q,
                        getBrowserTexturePath: () => B,
                        getDisplayStatus: () => ie,
                        getFontNames: () => ae,
                        getScale: () => Y,
                        getSize: () => X,
                        getViewGlobalPosition: () => q,
                        isEventHandled: () => re,
                        isFocused: () => ee,
                        pxToRem: () => J,
                        remToPx: () => K,
                        resize: () => F,
                        sendEvent: () => j,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => te,
                        setInputPaddingsRem: () => U,
                        setSidePaddingsRem: () => V,
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
                const h = d('clientResized'),
                    g = d('self.onScaleUpdated'),
                    m = (e, t) => engine.on(e, t),
                    f = (e, t) => engine.off(e, t),
                    v = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
                const x = (function () {
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
                    const i = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const a = `mouse${t}`,
                                        l = v[t]((e) => r([e, 'outside']));
                                    function o(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            i &&
                                                (l(),
                                                window.removeEventListener(a, o),
                                                (e.listeners -= 1),
                                                n(),
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
                function E(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const L = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    S = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(S).reduce((e, t) => ((e[t] = () => w(S[t])), e), {}),
                    H = { play: Object.assign({}, y, { sound: w }), setRTPC: E },
                    M = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    _ = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function T(e) {
                    let t = '';
                    for (let r = _.length - 1; r >= 0; r--) for (; e >= _[r]; ) ((t += M[r]), (e -= _[r]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function A(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function W(e, t, r) {
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
                    D = ['args'];
                const P = 2,
                    C = 16,
                    G = 32,
                    k = 64,
                    $ = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        i = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                                    return i;
                                })(t, D);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, a, {
                                          arguments:
                                              ((n = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    j = {
                        close(e) {
                            $('popover' === e ? P : G);
                        },
                        minimize() {
                            $(k);
                        },
                        move(e) {
                            $(C, { isMouseEvent: !0, on: e });
                        },
                    };
                function z(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function B(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function N(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function V(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function q(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: K(t.x), y: K(t.y) };
                }
                function Q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Y() {
                    return viewEnv.getScale();
                }
                function J(e) {
                    return viewEnv.pxToRem(e);
                }
                function K(e) {
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
                function ne() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ie() {
                    return viewEnv.getShowingStatus();
                }
                const ae = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    le = T,
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
                    de = { view: l, client: i, sound: H };
                const ce = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var he;
                function ge(e, t, r) {
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
                        a = Math.min(n, i);
                    return {
                        extraLarge: a === r.extraLarge.weight,
                        large: a === r.large.weight,
                        medium: a === r.medium.weight,
                        small: a === r.small.weight,
                        extraSmall: a === r.extraSmall.weight,
                        extraLargeWidth: n === r.extraLarge.weight,
                        largeWidth: n === r.large.weight,
                        mediumWidth: n === r.medium.weight,
                        smallWidth: n === r.small.weight,
                        extraSmallWidth: n === r.extraSmall.weight,
                        extraLargeHeight: i === r.extraLarge.weight,
                        largeHeight: i === r.large.weight,
                        mediumHeight: i === r.medium.weight,
                        smallHeight: i === r.small.weight,
                        extraSmallHeight: i === r.extraSmall.weight,
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
                })(he || (he = {}));
                const me = de.client.getSize('rem'),
                    fe = me.width,
                    ve = me.height,
                    xe = Object.assign({ width: fe, height: ve }, ge(fe, ve, ce)),
                    we = (0, o.createContext)(xe),
                    Ee = ['children'];
                const be = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                i = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                            return i;
                        })(e, Ee);
                    const n = (0, o.useContext)(we),
                        i = n.extraLarge,
                        a = n.large,
                        l = n.medium,
                        s = n.small,
                        d = n.extraSmall,
                        c = n.extraLargeWidth,
                        h = n.largeWidth,
                        g = n.mediumWidth,
                        m = n.smallWidth,
                        f = n.extraSmallWidth,
                        v = n.extraLargeHeight,
                        x = n.largeHeight,
                        w = n.mediumHeight,
                        E = n.smallHeight,
                        b = n.extraSmallHeight,
                        p = { extraLarge: v, large: x, medium: w, small: E, extraSmall: b };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && i) return t;
                        if (r.large && a) return t;
                        if (r.medium && l) return t;
                        if (r.small && s) return t;
                        if (r.extraSmall && d) return t;
                    } else {
                        if (r.extraLargeWidth && c) return u(t, r, p);
                        if (r.largeWidth && h) return u(t, r, p);
                        if (r.mediumWidth && g) return u(t, r, p);
                        if (r.smallWidth && m) return u(t, r, p);
                        if (r.extraSmallWidth && f) return u(t, r, p);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && v) return t;
                            if (r.largeHeight && x) return t;
                            if (r.mediumHeight && w) return t;
                            if (r.smallHeight && E) return t;
                            if (r.extraSmallHeight && b) return t;
                        }
                    }
                    return null;
                };
                be.defaultProps = {
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
                (0, o.memo)(be);
                const pe = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    Le = ({ children: e }) => {
                        const t = (0, o.useContext)(we),
                            r = (0, o.useState)(t),
                            n = r[0],
                            i = r[1],
                            a = (0, o.useCallback)((e, t) => {
                                const r = de.view.pxToRem(e),
                                    n = de.view.pxToRem(t);
                                i(Object.assign({ width: r, height: n }, ge(r, n, ce)));
                            }, []),
                            l = (0, o.useCallback)(() => {
                                const e = de.client.getSize('px');
                                a(e.width, e.height);
                            }, [a]);
                        (pe(() => {
                            (de.client.events.on('clientResized', a), de.client.events.on('self.onScaleUpdated', l));
                        }),
                            (0, o.useEffect)(
                                () => () => {
                                    (de.client.events.off('clientResized', a),
                                        de.client.events.off('self.onScaleUpdated', l));
                                },
                                [a, l],
                            ));
                        const u = (0, o.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(we.Provider, { value: u }, e);
                    };
                var Se = r(483),
                    ye = r.n(Se),
                    He = r(926),
                    Me = r.n(He);
                let _e, Te, Ae;
                (!(function (e) {
                    ((e[(e.ExtraSmall = ce.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = ce.small.width)] = 'Small'),
                        (e[(e.Medium = ce.medium.width)] = 'Medium'),
                        (e[(e.Large = ce.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = ce.extraLarge.width)] = 'ExtraLarge'));
                })(_e || (_e = {})),
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
                    })(Ae || (Ae = {})));
                const Re = () => {
                        const e = (0, o.useContext)(we),
                            t = e.width,
                            r = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return _e.ExtraLarge;
                                    case e.large:
                                        return _e.Large;
                                    case e.medium:
                                        return _e.Medium;
                                    case e.small:
                                        return _e.Small;
                                    case e.extraSmall:
                                        return _e.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), _e.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
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
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Ae.ExtraLarge;
                                    case e.largeHeight:
                                        return Ae.Large;
                                    case e.mediumHeight:
                                        return Ae.Medium;
                                    case e.smallHeight:
                                        return Ae.Small;
                                    case e.extraSmallHeight:
                                        return Ae.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Ae.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: i, mediaHeight: a, remScreenWidth: t, remScreenHeight: r };
                    },
                    We = ['children', 'className'];
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                const Oe = {
                        [Te.ExtraSmall]: '',
                        [Te.Small]: Me().SMALL_WIDTH,
                        [Te.Medium]: `${Me().SMALL_WIDTH} ${Me().MEDIUM_WIDTH}`,
                        [Te.Large]: `${Me().SMALL_WIDTH} ${Me().MEDIUM_WIDTH} ${Me().LARGE_WIDTH}`,
                        [Te.ExtraLarge]: `${Me().SMALL_WIDTH} ${Me().MEDIUM_WIDTH} ${Me().LARGE_WIDTH} ${Me().EXTRA_LARGE_WIDTH}`,
                    },
                    De = {
                        [Ae.ExtraSmall]: '',
                        [Ae.Small]: Me().SMALL_HEIGHT,
                        [Ae.Medium]: `${Me().SMALL_HEIGHT} ${Me().MEDIUM_HEIGHT}`,
                        [Ae.Large]: `${Me().SMALL_HEIGHT} ${Me().MEDIUM_HEIGHT} ${Me().LARGE_HEIGHT}`,
                        [Ae.ExtraLarge]: `${Me().SMALL_HEIGHT} ${Me().MEDIUM_HEIGHT} ${Me().LARGE_HEIGHT} ${Me().EXTRA_LARGE_HEIGHT}`,
                    },
                    Pe = {
                        [_e.ExtraSmall]: '',
                        [_e.Small]: Me().SMALL,
                        [_e.Medium]: `${Me().SMALL} ${Me().MEDIUM}`,
                        [_e.Large]: `${Me().SMALL} ${Me().MEDIUM} ${Me().LARGE}`,
                        [_e.ExtraLarge]: `${Me().SMALL} ${Me().MEDIUM} ${Me().LARGE} ${Me().EXTRA_LARGE}`,
                    },
                    Ce = (e) => {
                        let t = e.children,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    i = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                                return i;
                            })(e, We);
                        const i = Re(),
                            a = i.mediaWidth,
                            l = i.mediaHeight,
                            o = i.mediaSize;
                        return s().createElement('div', Ie({ className: ye()(r, Oe[a], De[l], Pe[o]) }, n), t);
                    },
                    Ge = ['children'];
                const ke = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                i = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                            return i;
                        })(e, Ge);
                    return s().createElement(Le, null, s().createElement(Ce, r, t));
                };
                var $e = r(533),
                    je = r.n($e);
                let ze;
                !(function (e) {
                    ((e.AVAILABLE = 'available'), (e.IDLE = 'idle'), (e.COMPLETED = 'completed'));
                })(ze || (ze = {}));
                const Ue = () => {
                    const e = de.view.getSize('rem'),
                        t = (0, o.useState)({ height: e.height, width: e.width }),
                        r = t[0],
                        n = t[1];
                    return (
                        (0, o.useEffect)(() => {
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
                        r
                    );
                };
                function Be(e, t, r) {
                    const n = (0, o.useMemo)(
                        () =>
                            (function (e, t, r, n) {
                                let i,
                                    a = !1,
                                    l = 0;
                                function o() {
                                    i && clearTimeout(i);
                                }
                                function s(...s) {
                                    const u = this,
                                        d = Date.now() - l;
                                    function c() {
                                        ((l = Date.now()), r.apply(u, s));
                                    }
                                    a ||
                                        (n && !i && c(),
                                        o(),
                                        void 0 === n && d > e
                                            ? c()
                                            : !0 !== t &&
                                              (i = setTimeout(
                                                  n
                                                      ? function () {
                                                            i = void 0;
                                                        }
                                                      : c,
                                                  void 0 === n ? e - d : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((n = r), (r = t), (t = void 0)),
                                    (s.cancel = function () {
                                        (o(), (a = !0));
                                    }),
                                    s
                                );
                            })(r, e),
                        t,
                    );
                    return ((0, o.useEffect)(() => n.cancel, [n]), n);
                }
                function Ne() {
                    const e = (0, o.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.clearTimeout(e.current);
                        }),
                        (0, o.useEffect)(() => t, []),
                        (0, o.useMemo)(
                            () => ({
                                run: (t, r) => {
                                    (window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            ((e.current = 0), t());
                                        }, r)));
                                },
                                clear: () => {
                                    (window.clearTimeout(e.current), (e.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                var Ve = r(403);
                const Xe = {
                        0: { box: { top: 416, left: 285, width: 267, height: 187 } },
                        1: { box: { top: 443, left: 616, width: 214, height: 240 } },
                        2: { box: { top: 392, left: 894, width: 307, height: 268 } },
                        3: { box: { top: 707, left: 264, width: 240, height: 294 } },
                        4: { box: { top: 741, left: 568, width: 374, height: 347 } },
                        5: { box: { top: 809, left: 1006, width: 214, height: 240 } },
                        6: { box: { top: 349, left: 1341, width: 267, height: 187 } },
                        7: { box: { top: 375, left: 1723, width: 280, height: 320 } },
                        8: { box: { top: 424, left: 2067, width: 214, height: 240 } },
                        9: { box: { top: 601, left: 1373, width: 286, height: 200 } },
                        10: { box: { top: 878, left: 1341, width: 200, height: 200 } },
                        11: { box: { top: 865, left: 1611, width: 266, height: 226 } },
                        12: { box: { top: 759, left: 1947, width: 360, height: 320 } },
                    },
                    Fe = {
                        13: { box: { top: 410, left: 286, width: 280, height: 266 } },
                        14: { box: { top: 458, left: 630, width: 267, height: 187 } },
                        15: { box: { top: 422, left: 961, width: 214, height: 240 } },
                        16: { box: { top: 764, left: 253, width: 280, height: 320 } },
                        17: { box: { top: 732, left: 597, width: 320, height: 320 } },
                        18: { box: { top: 777, left: 981, width: 240, height: 294 } },
                        19: { box: { top: 390, left: 1375, width: 400, height: 294 } },
                        20: { box: { top: 364, left: 1839, width: 374, height: 347 } },
                        21: { box: { top: 821, left: 1341, width: 213, height: 213 } },
                        22: { box: { top: 774, left: 1618, width: 294, height: 307 } },
                        23: { box: { top: 807, left: 1976, width: 320, height: 240 } },
                    },
                    qe =
                        (Math.max(...Object.keys(Xe).map((e) => Number(e))),
                        Math.max(...Object.keys(Fe).map((e) => Number(e))),
                        _e.ExtraSmall,
                        _e.Small,
                        _e.Medium,
                        _e.Large,
                        _e.ExtraLarge,
                        'ev_bday_2025_collection_rollover'),
                    Qe = 'ev_bday_2025_collection_rollout',
                    Ye = 'play',
                    Je = {
                        low: [55, 34.5, 223, 34.5, 223, 194.5, 55, 34.5, 55, 194.5, 223, 194.5],
                        high: [
                            125.5, 175.5, 70.8, 176, 68.5, 172.26, 68.5, 96.27, 64.82, 95.83, 55.09, 86.59, 55.09,
                            86.59, 55, 54, 74.56, 34.5, 74.56, 34.5, 214.97, 34.5, 215.5, 81.2, 212.54, 84.53, 223,
                            94.5, 222.98, 156.02, 222.98, 156.02, 201.52, 176.98, 163.01, 177, 163.01, 177, 144.56,
                            194.45, 125.5, 175.5, 125.5, 175.5, 68.5, 172.26, 68.5, 96.27, 68.5, 96.27, 55.09, 86.59,
                            74.56, 34.5, 74.56, 34.5, 215.5, 81.2, 212.54, 84.53, 212.54, 84.53, 222.98, 156.02, 163.01,
                            177, 163.01, 177, 125.5, 175.5, 68.5, 96.27, 68.5, 96.27, 74.56, 34.5, 212.54, 84.53,
                            212.54, 84.53, 163.01, 177, 68.5, 96.27,
                        ],
                    },
                    Ke = {
                        low: [42, 19, 125, 19, 125, 99, 42, 19, 42, 99, 125, 99],
                        high: [
                            52.3, 19, 121, 19, 122, 20.01, 122, 20.01, 122, 40.64, 120.51, 42.51, 120.51, 42.51, 125,
                            48, 124.99, 79.51, 124.99, 79.51, 115.82, 90, 95.89, 90.11, 95.89, 90.11, 87.48, 99, 86, 99,
                            76.97, 89, 48.5, 88.9, 48.44, 50.46, 48.44, 50.46, 42, 45.48, 42.02, 29.98, 42.02, 29.98,
                            52.3, 19, 122, 20.01, 120.51, 42.51, 124.99, 79.51, 95.89, 90.11, 95.89, 90.11, 86, 99,
                            76.97, 89, 76.97, 89, 48.44, 50.46, 42.02, 29.98, 42.02, 29.98, 122, 20.01, 120.51, 42.51,
                            120.51, 42.51, 95.89, 90.11, 76.97, 89, 76.97, 89, 42.02, 29.98, 120.51, 42.51,
                        ],
                    };
                function Ze() {
                    return !1;
                }
                console.log;
                var et = r(174);
                function tt(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return rt(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return rt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function rt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const nt = (e) => (0 === e ? window : window.subViews.get(e));
                const it = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: i, children: a, mocks: l }) {
                                const u = (0, o.useRef)([]),
                                    d = (r, n, i) => {
                                        var a;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = nt,
                                                context: n = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function a(e, t = 0) {
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
                                                        a = n.split('.').reduce((e, t) => e[t], i);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (r, a) => {
                                                        const o = 'string' == typeof a ? `${n}.${a}` : n,
                                                            s = de.view.addModelObserver(o, t, !0);
                                                        return (i.set(s, r), e && r(l(a)), s);
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
                                                        for (var e, r = tt(i.keys()); !(e = r()).done; ) a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            o =
                                                'real' === r
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (a = null == i ? void 0 : i.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === r ? (null == i ? void 0 : i.getter(e)) : o.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            c = e({
                                                mode: r,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            i = et.LO.box(n, { equals: Ze });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, et.aD)((e) => i.set(e)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            i = et.LO.box(n, { equals: Ze });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, et.aD)((e) => i.set(e)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(e)) {
                                                            const i = e.reduce(
                                                                (e, t) => ((e[t] = et.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, et.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                i[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                        {
                                                            const i = e,
                                                                a = Object.entries(i),
                                                                l = a.reduce(
                                                                    (e, [t, r]) => ((e[r] = et.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, et.aD)((e) => {
                                                                            a.forEach(([t, r]) => {
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
                                            h = { mode: r, model: c, externalModel: o, cleanup: d };
                                        return {
                                            model: c,
                                            controls: 'mocks' === r && i ? i.controls(h) : t(h),
                                            externalModel: o,
                                            mode: r,
                                        };
                                    },
                                    c = (0, o.useRef)(!1),
                                    h = (0, o.useState)(n),
                                    g = h[0],
                                    m = h[1],
                                    f = (0, o.useState)(() => d(n, i, l)),
                                    v = f[0],
                                    x = f[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        c.current ? x(d(g, i, l)) : (c.current = !0);
                                    }, [l, g, i]),
                                    (0, o.useEffect)(() => {
                                        m(n);
                                    }, [n]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            (v.externalModel.dispose(), u.current.forEach((e) => e()));
                                        },
                                        [v],
                                    ),
                                    s().createElement(r.Provider, { value: v }, a)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        ({ externalModel: e }) => ({ enterEventLobby: e.createCallbackNoArgs('onEnterEventLobby') }),
                    ),
                    at = it[0],
                    lt = it[1],
                    ot = {
                        base: 'App_base_42',
                        base__large: 'App_base__large_95',
                        base__hover: 'App_base__hover_2d',
                        logo: 'App_logo_54',
                        glareMask: 'App_glareMask_5a',
                        glare: 'App_glare_5a',
                        status: 'App_status_f4',
                        title: 'App_title_26',
                        subTitle: 'App_subTitle_f1',
                        check: 'App_check_87',
                    },
                    st = Math.round(1e3 / 120),
                    ut = { 280: 'large', 170: 'small' },
                    dt = (e, t, r, n) => {
                        let i = !1;
                        for (let a = 0, l = 2; a < 3; l = a++) {
                            const o = r[n + 2 * a],
                                s = r[n + 2 * a + 1],
                                u = r[n + 2 * l],
                                d = r[n + 2 * l + 1];
                            s > t != d > t && e < ((u - o) * (t - s)) / (d - s) + o && (i = !i);
                        }
                        return i;
                    },
                    ct = (e, t, r) => {
                        for (let n = 0; n < r.length; n += 6) if (dt(e, t, r, n)) return !0;
                        return !1;
                    },
                    ht = (0, Ve.Pi)(() => {
                        const e = (0, o.useRef)(null),
                            t = (0, o.useRef)(null),
                            r = lt(),
                            n = r.model,
                            i = r.controls,
                            a = n.root.get(),
                            l = a.state,
                            u = a.envelopesCount,
                            d = Ue().width,
                            c = ut[d] || ut[280],
                            h = (0, o.useState)(!1),
                            g = h[0],
                            m = h[1],
                            f = (0, o.useState)(!1),
                            v = f[0],
                            x = f[1],
                            w = (0, o.useState)(!0),
                            E = w[0],
                            b = w[1],
                            p = Ne(),
                            L = (t, r) => {
                                if (!e.current) return !1;
                                const n = e.current.getBoundingClientRect(),
                                    i = n.x,
                                    a = n.y,
                                    l = viewEnv.pxToRem(t - i),
                                    o = viewEnv.pxToRem(r - a),
                                    s = 'large' === c ? Je : Ke;
                                return ct(l, o, s.low) && ct(l, o, s.high);
                            },
                            S = Be(
                                (e, r) => {
                                    L(e, r) ||
                                    ((e, r) => {
                                        if (!t.current) return !1;
                                        const n = t.current.getBoundingClientRect(),
                                            i = n.x,
                                            a = n.y,
                                            l = n.width,
                                            o = n.height;
                                        return e >= i && e <= i + l && r >= a && r <= a + o;
                                    })(e, r)
                                        ? (m(!0), b(!1))
                                        : m(!1);
                                },
                                [c],
                                st,
                            );
                        return (
                            (0, o.useEffect)(() => {
                                g ? de.sound.play.sound(qe) : !v && de.sound.play.sound(Qe);
                            }, [g]),
                            s().createElement(
                                'div',
                                { className: ye()(ot.base, ot[`base__${c}`], g && ot.base__hover) },
                                s().createElement(
                                    'div',
                                    {
                                        ref: e,
                                        onClick: (e) => {
                                            (g || L(e.clientX, e.clientY)) &&
                                                (de.sound.play.sound(Ye),
                                                i.enterEventLobby(),
                                                x(!0),
                                                p.run(() => {
                                                    x(!1);
                                                }, 600));
                                        },
                                        onMouseMove: (e) => {
                                            S(e.clientX, e.clientY);
                                        },
                                        onMouseLeave: () => {
                                            E || (m(!1), b(!0));
                                        },
                                        className: ot.logo,
                                    },
                                    l === ze.AVAILABLE &&
                                        s().createElement(
                                            'div',
                                            { className: ot.glareMask },
                                            s().createElement('div', { className: ot.glare }),
                                        ),
                                ),
                                s().createElement(
                                    'div',
                                    { ref: t, className: ot.status },
                                    s().createElement(
                                        'span',
                                        { className: ot.title },
                                        R.strings.wot_anniversary.entryPoint[l].title(),
                                    ),
                                    (() => {
                                        switch (l) {
                                            case ze.COMPLETED:
                                                return s().createElement('div', { className: ot.check });
                                            case ze.AVAILABLE:
                                                return s().createElement('span', { className: ot.subTitle }, u);
                                            default:
                                                return null;
                                        }
                                    })(),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    je().render(
                        s().createElement(ke, null, s().createElement(at, null, s().createElement(ht, null))),
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
    function n(e) {
        var i = r[e];
        if (void 0 !== i) return i.exports;
        var a = (r[e] = { exports: {} });
        return (t[e](a, a.exports, n), a.exports);
    }
    ((n.m = t),
        (e = []),
        (n.O = (t, r, i, a) => {
            if (!r) {
                var l = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [r, i, a] = e[d], o = !0, s = 0; s < r.length; s++)
                        (!1 & a || l >= a) && Object.keys(n.O).every((e) => n.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), a < l && (l = a));
                    if (o) {
                        e.splice(d--, 1);
                        var u = i();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            a = a || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1];
            e[d] = [r, i, a];
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
        (n.j = 612),
        (() => {
            var e = { 612: 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var i,
                        a,
                        [l, o, s] = r,
                        u = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (i in o) n.o(o, i) && (n.m[i] = o[i]);
                        if (s) var d = s(n);
                    }
                    for (t && t(r); u < l.length; u++) ((a = l[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return n.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var i = n.O(void 0, [46], () => n(67));
    i = n.O(i);
})();
