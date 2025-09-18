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
            31: (e, t, r) => {
                'use strict';
                var n = {};
                (r.r(n),
                    r.d(n, { mouse: () => w, off: () => f, on: () => h, onResize: () => m, onScaleUpdated: () => g }));
                var a = {};
                (r.r(a),
                    r.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => p,
                        getSize: () => S,
                        graphicsQuality: () => L,
                        playSound: () => E,
                        setRTPC: () => x,
                    }));
                var i = {};
                (r.r(i), r.d(i, { getBgUrl: () => W, getTextureUrl: () => A }));
                var l = {};
                (r.r(l),
                    r.d(l, {
                        addModelObserver: () => F,
                        addPreloadTexture: () => U,
                        arabic2roman: () => oe,
                        children: () => i,
                        displayStatus: () => I,
                        displayStatusIs: () => ue,
                        enableFullScreenModeSupported: () => me,
                        events: () => O,
                        extraSize: () => de,
                        forceTriggerMouseMove: () => ae,
                        freezeTextureBeforeResize: () => J,
                        getBrowserTexturePath: () => V,
                        getDisplayStatus: () => ie,
                        getExternalPaddingsRem: () => se,
                        getFontNames: () => le,
                        getScale: () => K,
                        getSize: () => X,
                        getViewGlobalPosition: () => Q,
                        initExternalPaddings: () => ge,
                        isEventHandled: () => ne,
                        isFocused: () => te,
                        pxToRem: () => Y,
                        remToPx: () => Z,
                        resize: () => q,
                        sendEvent: () => k,
                        setAnimateWindow: () => ee,
                        setEventHandled: () => re,
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => B,
                        whenTutorialReady: () => ce,
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
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const L = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    b = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    y = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    H = Object.keys(y).reduce((e, t) => ((e[t] = () => E(y[t])), e), {}),
                    M = { play: Object.assign({}, H, { sound: E }), setRTPC: x },
                    _ = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    T = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function P(e) {
                    let t = '';
                    for (let r = T.length - 1; r >= 0; r--) for (; e >= T[r]; ) ((t += _[r]), (e -= T[r]));
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
                    C = ['args'];
                const D = 2,
                    $ = 16,
                    G = 32,
                    z = 64,
                    j = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                    return a;
                                })(t, C);
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
                    k = {
                        close(e) {
                            j('popover' === e ? D : G);
                        },
                        minimize() {
                            j(z);
                        },
                        move(e) {
                            j($, { isMouseEvent: !0, on: e });
                        },
                    };
                function U(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function V(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function F(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function Q(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Z(t.x), y: Z(t.y) };
                }
                function J() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function K() {
                    return viewEnv.getScale();
                }
                function Y(e) {
                    return viewEnv.pxToRem(e);
                }
                function Z(e) {
                    return viewEnv.remToPx(e);
                }
                function ee(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function te() {
                    return viewEnv.isFocused();
                }
                function re() {
                    return viewEnv.setEventHandled();
                }
                function ne() {
                    return viewEnv.isEventHandled();
                }
                function ae() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ie() {
                    return viewEnv.getShowingStatus();
                }
                const le = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    oe = P;
                function se() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ue = Object.keys(I).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === I[t]), e), {}),
                    de = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ce = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : O.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function me() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ge(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            r = t.top,
                            n = t.right,
                            a = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${r}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const he = { view: l, client: a, sound: M, intl: b };
                const fe = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var ve;
                function we(e = he.client.getSize('rem')) {
                    const t = e.width,
                        r = e.height;
                    return Object.assign(
                        { width: t, height: r },
                        (function (e, t, r) {
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
                        })(t, r, fe),
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
                })(ve || (ve = {}));
                const Ee = we(),
                    xe = (0, o.createContext)(Ee),
                    Se = ['children'];
                (0, o.memo)((e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, Se);
                    const n = (0, o.useContext)(xe),
                        a = n.extraLarge,
                        i = n.large,
                        l = n.medium,
                        s = n.small,
                        d = n.extraSmall,
                        c = n.extraLargeWidth,
                        m = n.largeWidth,
                        g = n.mediumWidth,
                        h = n.smallWidth,
                        f = n.extraSmallWidth,
                        v = n.extraLargeHeight,
                        w = n.largeHeight,
                        E = n.mediumHeight,
                        x = n.smallHeight,
                        S = n.extraSmallHeight,
                        p = { extraLarge: v, large: w, medium: E, small: x, extraSmall: S };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && a) return t;
                        if (r.large && i) return t;
                        if (r.medium && l) return t;
                        if (r.small && s) return t;
                        if (r.extraSmall && d) return t;
                    } else {
                        if (r.extraLargeWidth && c) return u(t, r, p);
                        if (r.largeWidth && m) return u(t, r, p);
                        if (r.mediumWidth && g) return u(t, r, p);
                        if (r.smallWidth && h) return u(t, r, p);
                        if (r.extraSmallWidth && f) return u(t, r, p);
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
                });
                const pe = ({ children: e }) => {
                    const t = (0, o.useState)(we),
                        r = t[0],
                        n = t[1],
                        a = (0, o.useState)(!1),
                        i = a[0],
                        l = a[1];
                    return (
                        (0, o.useLayoutEffect)(() => {
                            function e() {
                                n((e) => {
                                    const t = he.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : we(t);
                                });
                            }
                            return (
                                e(),
                                l(!0),
                                he.client.events.on('clientResized', e),
                                he.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (he.client.events.off('clientResized', e),
                                        he.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        s().createElement(xe.Provider, { value: r }, i && e)
                    );
                };
                var Le = r(483),
                    be = r.n(Le),
                    ye = r(926),
                    He = r.n(ye);
                let Me, _e, Te;
                (!(function (e) {
                    ((e[(e.ExtraSmall = fe.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = fe.small.width)] = 'Small'),
                        (e[(e.Medium = fe.medium.width)] = 'Medium'),
                        (e[(e.Large = fe.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = fe.extraLarge.width)] = 'ExtraLarge'));
                })(Me || (Me = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = fe.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = fe.small.width)] = 'Small'),
                            (e[(e.Medium = fe.medium.width)] = 'Medium'),
                            (e[(e.Large = fe.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = fe.extraLarge.width)] = 'ExtraLarge'));
                    })(_e || (_e = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = fe.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = fe.small.height)] = 'Small'),
                            (e[(e.Medium = fe.medium.height)] = 'Medium'),
                            (e[(e.Large = fe.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = fe.extraLarge.height)] = 'ExtraLarge'));
                    })(Te || (Te = {})));
                const Re = () => {
                        const e = (0, o.useContext)(xe),
                            t = e.width,
                            r = e.height,
                            n = ((e) => {
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
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return _e.ExtraLarge;
                                    case e.largeWidth:
                                        return _e.Large;
                                    case e.mediumWidth:
                                        return _e.Medium;
                                    case e.smallWidth:
                                        return _e.Small;
                                    case e.extraSmallWidth:
                                        return _e.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), _e.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Te.ExtraLarge;
                                    case e.largeHeight:
                                        return Te.Large;
                                    case e.mediumHeight:
                                        return Te.Medium;
                                    case e.smallHeight:
                                        return Te.Small;
                                    case e.extraSmallHeight:
                                        return Te.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Te.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: i, remScreenWidth: t, remScreenHeight: r };
                    },
                    Pe = ['children', 'className'];
                function Ae() {
                    return (
                        (Ae =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        Ae.apply(this, arguments)
                    );
                }
                const We = {
                        [_e.ExtraSmall]: '',
                        [_e.Small]: He().SMALL_WIDTH,
                        [_e.Medium]: `${He().SMALL_WIDTH} ${He().MEDIUM_WIDTH}`,
                        [_e.Large]: `${He().SMALL_WIDTH} ${He().MEDIUM_WIDTH} ${He().LARGE_WIDTH}`,
                        [_e.ExtraLarge]: `${He().SMALL_WIDTH} ${He().MEDIUM_WIDTH} ${He().LARGE_WIDTH} ${He().EXTRA_LARGE_WIDTH}`,
                    },
                    Ie = {
                        [Te.ExtraSmall]: '',
                        [Te.Small]: He().SMALL_HEIGHT,
                        [Te.Medium]: `${He().SMALL_HEIGHT} ${He().MEDIUM_HEIGHT}`,
                        [Te.Large]: `${He().SMALL_HEIGHT} ${He().MEDIUM_HEIGHT} ${He().LARGE_HEIGHT}`,
                        [Te.ExtraLarge]: `${He().SMALL_HEIGHT} ${He().MEDIUM_HEIGHT} ${He().LARGE_HEIGHT} ${He().EXTRA_LARGE_HEIGHT}`,
                    },
                    Oe = {
                        [Me.ExtraSmall]: '',
                        [Me.Small]: He().SMALL,
                        [Me.Medium]: `${He().SMALL} ${He().MEDIUM}`,
                        [Me.Large]: `${He().SMALL} ${He().MEDIUM} ${He().LARGE}`,
                        [Me.ExtraLarge]: `${He().SMALL} ${He().MEDIUM} ${He().LARGE} ${He().EXTRA_LARGE}`,
                    },
                    Ce = (e) => {
                        let t = e.children,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, Pe);
                        const a = Re(),
                            i = a.mediaWidth,
                            l = a.mediaHeight,
                            o = a.mediaSize;
                        return s().createElement('div', Ae({ className: be()(r, We[i], Ie[l], Oe[o]) }, n), t);
                    },
                    De = ['children'];
                const $e = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, De);
                    return s().createElement(pe, null, s().createElement(Ce, r, t));
                };
                var Ge = r(533),
                    ze = r.n(Ge);
                function je() {
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
                var ke = r(403);
                function Ue() {
                    return !1;
                }
                console.log;
                var Ne = r(174);
                function Ve(e, t) {
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
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Fe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const Be = (e) => (0 === e ? window : window.subViews.get(e));
                var Xe = r(946);
                const qe = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: a, children: i, mocks: l }) {
                                const u = (0, o.useRef)([]),
                                    d = (r, n, a) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Be,
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
                                                            s = he.view.addModelObserver(o, t, !0);
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
                                                        for (var e, r = Ve(a.keys()); !(e = r()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            o =
                                                'real' === r
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === r ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            c = e({
                                                mode: r,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = s(e),
                                                            n = Ne.LO.box(t, { equals: Ue });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ne.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            a = Ne.LO.box(n, { equals: Ue });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ne.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            a = Ne.LO.box(n, { equals: Ue });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ne.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = Ne.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Ne.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                i = Object.entries(a),
                                                                l = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = Ne.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Ne.aD)((e) => {
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
                                            controls: 'mocks' === r && a ? a.controls(m) : t(m),
                                            externalModel: o,
                                            mode: r,
                                        };
                                    },
                                    c = (0, o.useRef)(!1),
                                    m = (0, o.useState)(n),
                                    g = m[0],
                                    h = m[1],
                                    f = (0, o.useState)(() => d(n, a, l)),
                                    v = f[0],
                                    w = f[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        c.current ? w(d(g, a, l)) : (c.current = !0);
                                    }, [l, g, a]),
                                    (0, o.useEffect)(() => {
                                        h(n);
                                    }, [n]),
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
                                    vehicleCombatParams: (0, Xe.Om)(() =>
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
                    Qe = qe[0],
                    Je = qe[1];
                function Ke(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const Ye = 'Button_base_8c',
                    Ze = 'Button_glow_a6',
                    et = 'Button_label_3d',
                    tt = (0, ke.Pi)(() => {
                        const e = Je().controls;
                        return s().createElement(
                            'div',
                            {
                                className: Ye,
                                onClick: () => {
                                    (Ke('play'), e.openTechTreeWindow());
                                },
                                onMouseEnter: () => {
                                    Ke('highlight');
                                },
                            },
                            s().createElement('div', { className: Ze }),
                            s().createElement('div', { className: et }, R.strings.battle_royale.button.modules()),
                        );
                    }),
                    rt = 'Section_base_bd',
                    nt = 'Section_defaultSection_8c',
                    at = 'Section_filledSection_7e',
                    it = 'Section_filledSection__fullSection_09',
                    lt = ({ filledSectionWidth: e }) => {
                        const t = e % 100 == 0;
                        return s().createElement(
                            'div',
                            { className: rt, style: { width: '20%' } },
                            s().createElement('div', { className: nt }),
                            e > 0 &&
                                s().createElement('div', { className: be()(at, t && it), style: { width: `${e}%` } }),
                        );
                    },
                    ot = 'Parameter_base_c0',
                    st = 'Parameter_paramType_40',
                    ut = 'Parameter_iconContainer_93',
                    dt = 'Parameter_wrapper_b9',
                    ct = 'Parameter_type_20',
                    mt = 'Parameter_text_db',
                    gt = 'Parameter_paramValuesContainer_e5',
                    ht = R.images.gui.maps.icons.battleRoyale.techParams,
                    ft = R.strings.battle_royale.techParams.type,
                    vt = ({ parameter: e }) => {
                        const t = e.type,
                            r = e.sectionValues;
                        return s().createElement(
                            'div',
                            { className: ot },
                            s().createElement(
                                'div',
                                { className: st },
                                s().createElement(
                                    'div',
                                    { className: ut },
                                    s().createElement(
                                        'div',
                                        { className: dt },
                                        s().createElement('div', {
                                            className: ct,
                                            style: { backgroundImage: `url(${ht.$dyn(t)})` },
                                        }),
                                    ),
                                    s().createElement('div', { className: mt }, ft.$dyn(t)),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: gt },
                                r.map((e, t) => s().createElement(lt, { filledSectionWidth: e, key: t })),
                            ),
                        );
                    },
                    wt = 'App_base_e7',
                    Et = 'App_container_87',
                    xt = (0, ke.Pi)(() => {
                        const e = s().useRef(null),
                            t = Je(),
                            r = t.controls,
                            n = t.model,
                            a = je();
                        var i;
                        return (
                            (i = () => {
                                he.view.setSidePaddingsRem({ left: 50, right: 0, top: 0, bottom: 0 });
                            }),
                            (0, o.useEffect)(i, []),
                            s().useLayoutEffect(() => {
                                const t = () => {
                                    a.run(() => {
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
                            }, [r, a]),
                            s().createElement(
                                'div',
                                { className: wt, ref: e },
                                s().createElement(
                                    'div',
                                    { className: Et },
                                    n.computes
                                        .vehicleCombatParams()
                                        .map((e, t) => s().createElement(vt, { parameter: e, key: t })),
                                ),
                                s().createElement(tt, null),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    ze().render(
                        s().createElement(Qe, null, s().createElement($e, null, s().createElement(xt, null))),
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
                for (d = 0; d < e.length; d++) {
                    for (var [r, a, i] = e[d], o = !0, s = 0; s < r.length; s++)
                        (!1 & i || l >= i) && Object.keys(n.O).every((e) => n.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), i < l && (l = i));
                    if (o) {
                        e.splice(d--, 1);
                        var u = a();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
            e[d] = [r, a, i];
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
        (n.j = 706),
        (() => {
            var e = { 706: 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var a,
                        i,
                        [l, o, s] = r,
                        u = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (a in o) n.o(o, a) && (n.m[a] = o[a]);
                        if (s) var d = s(n);
                    }
                    for (t && t(r); u < l.length; u++) ((i = l[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return n.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var a = n.O(void 0, [695], () => n(31));
    a = n.O(a);
})();
