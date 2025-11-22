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
            1845: (e, t, n) => {
                'use strict';
                var a = {};
                (n.r(a),
                    n.d(a, { mouse: () => b, off: () => _, on: () => h, onResize: () => m, onScaleUpdated: () => g }));
                var r = {};
                (n.r(r),
                    n.d(r, {
                        events: () => a,
                        getMouseGlobalPosition: () => w,
                        getSize: () => x,
                        graphicsQuality: () => p,
                        playSound: () => f,
                        setRTPC: () => E,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => O, getTextureUrl: () => W }));
                var l = {};
                (n.r(l),
                    n.d(l, {
                        addModelObserver: () => V,
                        addPreloadTexture: () => N,
                        arabic2roman: () => se,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => de,
                        enableFullScreenModeSupported: () => me,
                        events: () => P,
                        extraSize: () => ue,
                        forceTriggerMouseMove: () => re,
                        freezeTextureBeforeResize: () => K,
                        getBrowserTexturePath: () => z,
                        getDisplayStatus: () => ie,
                        getExternalPaddingsRem: () => oe,
                        getFontNames: () => le,
                        getScale: () => J,
                        getSize: () => X,
                        getViewGlobalPosition: () => Q,
                        initExternalPaddings: () => ge,
                        isEventHandled: () => ae,
                        isFocused: () => te,
                        pxToRem: () => Y,
                        remToPx: () => Z,
                        resize: () => q,
                        sendEvent: () => U,
                        setAnimateWindow: () => ee,
                        setEventHandled: () => ne,
                        setInputPaddingsRem: () => j,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => ce,
                    }));
                var s = n(7363),
                    o = n.n(s);
                const d = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
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
                    _ = (e, t) => engine.off(e, t),
                    v = { down: u('mousedown'), up: u('mouseup'), move: u('mousemove') };
                const b = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : c(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        l = v[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        a(),
                                        () => {
                                            r &&
                                                (l(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                a(),
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
                function f(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function E(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    S = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    L = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(L).reduce((e, t) => ((e[t] = () => f(L[t])), e), {}),
                    H = { play: Object.assign({}, y, { sound: f }), setRTPC: E },
                    M = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    T = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function B(e) {
                    let t = '';
                    for (let n = T.length - 1; n >= 0; n--) for (; e >= T[n]; ) ((t += M[n]), (e -= T[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function W(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function O(e, t, n) {
                    return `url(${W(e, t, n)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    P = {
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
                    I = ['args'];
                const C = 2,
                    D = 16,
                    k = 32,
                    G = 64,
                    $ = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, I);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
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
                        var a;
                    },
                    U = {
                        close(e) {
                            $('popover' === e ? C : k);
                        },
                        minimize() {
                            $(G);
                        },
                        move(e) {
                            $(D, { isMouseEvent: !0, on: e });
                        },
                    };
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function j(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function z(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function V(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function Q(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Z(t.x), y: Z(t.y) };
                }
                function K() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function J() {
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
                function ne() {
                    return viewEnv.setEventHandled();
                }
                function ae() {
                    return viewEnv.isEventHandled();
                }
                function re() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ie() {
                    return viewEnv.getShowingStatus();
                }
                const le = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    se = B;
                function oe() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const de = Object.keys(A).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === A[t]), e), {}),
                    ue = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ce = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : P.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function me() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ge(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            a = t.right,
                            r = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const he = { view: l, client: r, sound: H, intl: S };
                const _e = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var ve;
                function be(e = he.client.getSize('rem')) {
                    const t = e.width,
                        n = e.height;
                    return Object.assign(
                        { width: t, height: n },
                        (function (e, t, n) {
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
                                })(e, n),
                                r = (function (e, t) {
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
                                })(t, n),
                                i = Math.min(a, r);
                            return {
                                extraLarge: i === n.extraLarge.weight,
                                large: i === n.large.weight,
                                medium: i === n.medium.weight,
                                small: i === n.small.weight,
                                extraSmall: i === n.extraSmall.weight,
                                extraLargeWidth: a === n.extraLarge.weight,
                                largeWidth: a === n.large.weight,
                                mediumWidth: a === n.medium.weight,
                                smallWidth: a === n.small.weight,
                                extraSmallWidth: a === n.extraSmall.weight,
                                extraLargeHeight: r === n.extraLarge.weight,
                                largeHeight: r === n.large.weight,
                                mediumHeight: r === n.medium.weight,
                                smallHeight: r === n.small.weight,
                                extraSmallHeight: r === n.extraSmall.weight,
                            };
                        })(t, n, _e),
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
                const fe = be(),
                    Ee = (0, s.createContext)(fe),
                    xe = ['children'];
                (0, s.memo)((e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, xe);
                    const a = (0, s.useContext)(Ee),
                        r = a.extraLarge,
                        i = a.large,
                        l = a.medium,
                        o = a.small,
                        u = a.extraSmall,
                        c = a.extraLargeWidth,
                        m = a.largeWidth,
                        g = a.mediumWidth,
                        h = a.smallWidth,
                        _ = a.extraSmallWidth,
                        v = a.extraLargeHeight,
                        b = a.largeHeight,
                        f = a.mediumHeight,
                        E = a.smallHeight,
                        x = a.extraSmallHeight,
                        w = { extraLarge: v, large: b, medium: f, small: E, extraSmall: x };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && r) return t;
                        if (n.large && i) return t;
                        if (n.medium && l) return t;
                        if (n.small && o) return t;
                        if (n.extraSmall && u) return t;
                    } else {
                        if (n.extraLargeWidth && c) return d(t, n, w);
                        if (n.largeWidth && m) return d(t, n, w);
                        if (n.mediumWidth && g) return d(t, n, w);
                        if (n.smallWidth && h) return d(t, n, w);
                        if (n.extraSmallWidth && _) return d(t, n, w);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && v) return t;
                            if (n.largeHeight && b) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && E) return t;
                            if (n.extraSmallHeight && x) return t;
                        }
                    }
                    return null;
                });
                const we = ({ children: e }) => {
                    const t = (0, s.useState)(be),
                        n = t[0],
                        a = t[1],
                        r = (0, s.useState)(!1),
                        i = r[0],
                        l = r[1];
                    return (
                        (0, s.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const t = he.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : be(t);
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
                        o().createElement(Ee.Provider, { value: n }, i && e)
                    );
                };
                var pe = n(6483),
                    Se = n.n(pe),
                    Le = n(926),
                    ye = n.n(Le);
                let He, Re, Me;
                (!(function (e) {
                    ((e[(e.ExtraSmall = _e.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = _e.small.width)] = 'Small'),
                        (e[(e.Medium = _e.medium.width)] = 'Medium'),
                        (e[(e.Large = _e.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = _e.extraLarge.width)] = 'ExtraLarge'));
                })(He || (He = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = _e.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = _e.small.width)] = 'Small'),
                            (e[(e.Medium = _e.medium.width)] = 'Medium'),
                            (e[(e.Large = _e.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = _e.extraLarge.width)] = 'ExtraLarge'));
                    })(Re || (Re = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = _e.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = _e.small.height)] = 'Small'),
                            (e[(e.Medium = _e.medium.height)] = 'Medium'),
                            (e[(e.Large = _e.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = _e.extraLarge.height)] = 'ExtraLarge'));
                    })(Me || (Me = {})));
                const Te = () => {
                        const e = (0, s.useContext)(Ee),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return He.ExtraLarge;
                                    case e.large:
                                        return He.Large;
                                    case e.medium:
                                        return He.Medium;
                                    case e.small:
                                        return He.Small;
                                    case e.extraSmall:
                                        return He.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), He.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
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
                                        return Me.ExtraLarge;
                                    case e.largeHeight:
                                        return Me.Large;
                                    case e.mediumHeight:
                                        return Me.Medium;
                                    case e.smallHeight:
                                        return Me.Small;
                                    case e.extraSmallHeight:
                                        return Me.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Me.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: t, remScreenHeight: n };
                    },
                    Be = ['children', 'className'];
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        We.apply(this, arguments)
                    );
                }
                const Oe = {
                        [Re.ExtraSmall]: '',
                        [Re.Small]: ye().SMALL_WIDTH,
                        [Re.Medium]: `${ye().SMALL_WIDTH} ${ye().MEDIUM_WIDTH}`,
                        [Re.Large]: `${ye().SMALL_WIDTH} ${ye().MEDIUM_WIDTH} ${ye().LARGE_WIDTH}`,
                        [Re.ExtraLarge]: `${ye().SMALL_WIDTH} ${ye().MEDIUM_WIDTH} ${ye().LARGE_WIDTH} ${ye().EXTRA_LARGE_WIDTH}`,
                    },
                    Ae = {
                        [Me.ExtraSmall]: '',
                        [Me.Small]: ye().SMALL_HEIGHT,
                        [Me.Medium]: `${ye().SMALL_HEIGHT} ${ye().MEDIUM_HEIGHT}`,
                        [Me.Large]: `${ye().SMALL_HEIGHT} ${ye().MEDIUM_HEIGHT} ${ye().LARGE_HEIGHT}`,
                        [Me.ExtraLarge]: `${ye().SMALL_HEIGHT} ${ye().MEDIUM_HEIGHT} ${ye().LARGE_HEIGHT} ${ye().EXTRA_LARGE_HEIGHT}`,
                    },
                    Pe = {
                        [He.ExtraSmall]: '',
                        [He.Small]: ye().SMALL,
                        [He.Medium]: `${ye().SMALL} ${ye().MEDIUM}`,
                        [He.Large]: `${ye().SMALL} ${ye().MEDIUM} ${ye().LARGE}`,
                        [He.ExtraLarge]: `${ye().SMALL} ${ye().MEDIUM} ${ye().LARGE} ${ye().EXTRA_LARGE}`,
                    },
                    Ie = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Be);
                        const r = Te(),
                            i = r.mediaWidth,
                            l = r.mediaHeight,
                            s = r.mediaSize;
                        return o().createElement('div', We({ className: Se()(n, Oe[i], Ae[l], Pe[s]) }, a), t);
                    },
                    Ce = ['children'];
                const De = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, Ce);
                    return o().createElement(we, null, o().createElement(Ie, n, t));
                };
                var ke = n(1533),
                    Ge = n.n(ke);
                let $e;
                !(function (e) {
                    ((e.Worse = 'worse'), (e.Usual = 'usual'), (e.Better = 'better'), (e.Unset = 'unset'));
                })($e || ($e = {}));
                var Ue = n(3403);
                function Ne(e) {
                    return e;
                }
                function je() {
                    return !1;
                }
                console.log;
                var ze = n(9174);
                function Ve(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Fe(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Fe(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
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
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const Xe = (e) => (0 === e ? window : window.subViews.get(e));
                var qe = n(3946);
                const Qe = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: r, children: i, mocks: l }) {
                                const d = (0, s.useRef)([]),
                                    u = (n, a, r) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Xe,
                                                context: a = 'model',
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
                                                const l = (e) => {
                                                    const r = n(t),
                                                        i = a.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const s = 'string' == typeof i ? `${a}.${i}` : a,
                                                            o = he.view.addModelObserver(s, t, !0);
                                                        return (r.set(o, n), e && n(l(i)), o);
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, t) => {
                                                        const n = l(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = l(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = Ve(r.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(a),
                                            s =
                                                'real' === n
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === n ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            u = (e) => d.current.push(e),
                                            c = e({
                                                mode: n,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = o(e),
                                                            a = ze.LO.box(t, { equals: je });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, ze.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const a = null != t ? t : o(e),
                                                            r = ze.LO.box(a, { equals: je });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, ze.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : o(e),
                                                            r = ze.LO.box(a, { equals: je });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, ze.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = o(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = ze.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, ze.aD)((t) => {
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
                                                                i = Object.entries(r),
                                                                l = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = ze.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, ze.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                l[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                l
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            m = { mode: n, model: c, externalModel: s, cleanup: u };
                                        return {
                                            model: c,
                                            controls: 'mocks' === n && r ? r.controls(m) : t(m),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    c = (0, s.useRef)(!1),
                                    m = (0, s.useState)(a),
                                    g = m[0],
                                    h = m[1],
                                    _ = (0, s.useState)(() => u(a, r, l)),
                                    v = _[0],
                                    b = _[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        c.current ? b(u(g, r, l)) : (c.current = !0);
                                    }, [l, g, r]),
                                    (0, s.useEffect)(() => {
                                        h(a);
                                    }, [a]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            (v.externalModel.dispose(), d.current.forEach((e) => e()));
                                        },
                                        [v],
                                    ),
                                    o().createElement(n.Provider, { value: v }, i)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    { rating: ze.LO.box($e.Unset), ratingButtons: e.array('ratingButtons', []) },
                                    e.primitives([
                                        'isFrontline',
                                        'isFreecamAvailable',
                                        'isBlinking',
                                        'hasLivesAvailable',
                                        'isRatingWidgetEnabled',
                                        'isRatingWidgetVisible',
                                    ]),
                                ),
                                n = (0, qe.Om)(() => {
                                    return (
                                        (e = t.ratingButtons.get()),
                                        (n = Ne),
                                        Array.isArray(e)
                                            ? e.map(n)
                                            : e.map((e, t, a) => n(null == e ? void 0 : e.value, t, a))
                                    );
                                    var e, n;
                                }),
                                a = (0, qe.Om)(() => n().map((e) => e.buttonVariant));
                            return Object.assign({}, t, { computes: { getRatingButtons: n, getButtonOrder: a } });
                        },
                        ({ externalModel: e, model: t }) => ({
                            onRateButtonClick: (0, ze.aD)(
                                e.createCallback((e) => (t.rating.set(e), { rating: e }), 'onRateButtonClick'),
                            ),
                        }),
                    ),
                    Ke = Qe[0],
                    Je = Qe[1],
                    Ye = 'RateButton_base_b4',
                    Ze = 'RateButton_base__hovered_92',
                    et = 'RateButton_base__neutral_e1',
                    tt = 'RateButton_base__negative_0a',
                    nt = 'RateButton_base__selected_50',
                    at = 'RateButton_base__animate_f4',
                    rt = 'RateButton_base__positive_ee',
                    it = 'RateButton_base__disabled_71',
                    lt = ['variant', 'selected', 'className', 'isHovered', 'isUnset'];
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const ot = { [$e.Better]: rt, [$e.Usual]: et, [$e.Worse]: tt, [$e.Unset]: null },
                    dt = (e) => {
                        let t = e.variant,
                            n = e.selected,
                            a = e.className,
                            r = e.isHovered,
                            i = e.isUnset,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, lt);
                        return o().createElement(
                            'button',
                            st({ className: Se()(r && Ze, !i && at, Ye, a, ot[t], n && nt, l.disabled && it) }, l),
                        );
                    },
                    ut = {
                        base: 'BattleRateWidget_base_d7',
                        base_wrapper: 'BattleRateWidget_base_wrapper_bb',
                        base_selected: 'BattleRateWidget_base_selected_be',
                        base__without_delay: 'BattleRateWidget_base__without_delay_62',
                        base_widget: 'BattleRateWidget_base_widget_68',
                        base_text: 'BattleRateWidget_base_text_bd',
                        base_text__negative: 'BattleRateWidget_base_text__negative_d2',
                        base_text__positive: 'BattleRateWidget_base_text__positive_58',
                        base_text__neutral: 'BattleRateWidget_base_text__neutral_84',
                        base_buttons: 'BattleRateWidget_base_buttons_dc',
                        widgetDisappear: 'BattleRateWidget_widgetDisappear_ca',
                    },
                    ct = (0, Ue.Pi)(() => {
                        const e = Je(),
                            t = e.controls,
                            n = e.model,
                            a = n.rating.get(),
                            r = n.isRatingWidgetVisible.get(),
                            i = (0, s.useState)(!1),
                            l = i[0],
                            d = i[1],
                            u = n.computes.getButtonOrder(),
                            c = a !== $e.Unset,
                            m = R.strings.player_satisfaction.battleResult.battleRating[a].header();
                        return o().createElement(
                            'div',
                            {
                                className: Se()(ut.base, (!r || c) && ut.base_selected, !r && ut.base__without_delay),
                                onMouseEnter: () => {
                                    d(!0);
                                },
                            },
                            o().createElement(
                                'div',
                                { className: ut.base_buttons },
                                u.map(
                                    (e) =>
                                        e !== $e.Unset &&
                                        o().createElement(dt, {
                                            key: e,
                                            variant: e,
                                            className: ut.base_button,
                                            selected: a === e,
                                            onClick: () => {
                                                t.onRateButtonClick(e);
                                            },
                                            onMouseEnter: () => {
                                                f('highlight');
                                            },
                                            disabled: e !== a && c,
                                            isHovered: l,
                                            isUnset: c,
                                        }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                {
                                    className: Se()(
                                        ut.base_text,
                                        a === u[0] && ut.base_text__negative,
                                        a === u[1] && ut.base_text__neutral,
                                        a === u[2] && ut.base_text__positive,
                                    ),
                                },
                                m,
                            ),
                        );
                    });
                var mt = n(7030);
                const gt = {
                        base: 'HintButton_base_19',
                        base__small: 'HintButton_base__small_63',
                        btnInner: 'HintButton_btnInner_e4',
                        btnOuter: 'HintButton_btnOuter_f9',
                        btnOuter__blink: 'HintButton_btnOuter__blink_e7',
                        animationContainer: 'HintButton_animationContainer_c5',
                        buttonContainer: 'HintButton_buttonContainer_2a',
                        btnInner__blink: 'HintButton_btnInner__blink_75',
                    },
                    ht = ({ btnText: e, hasBlinkAnimation: t = !1, isBlinking: n = !1, isSmall: a = !1 }) => {
                        const r = (0, s.useState)(!1),
                            i = r[0],
                            l = r[1],
                            d = Se()(gt.btnOuter, gt.btnOuter__blink),
                            u = Se()(gt.btnInner, gt.btnInner__blink),
                            c = (0, mt.useSpring)({
                                loop: !0,
                                reset: i,
                                from: { opacity: 0, transform: 'scale(1)' },
                                to: i
                                    ? [
                                          { opacity: 0, transform: 'scale(1)', config: { duration: 150 } },
                                          { opacity: 1, transform: 'scale(1)', config: { duration: 150 } },
                                          { opacity: 0, transform: 'scale(1.4)', config: { duration: 250 } },
                                      ]
                                    : { opacity: 0, transform: 'scale(1)' },
                                delay: 700,
                            });
                        return (
                            (0, s.useEffect)(() => {
                                l(!!n);
                            }, [n]),
                            o().createElement(
                                'div',
                                { className: Se()(gt.base, a && gt.__small) },
                                o().createElement(
                                    'div',
                                    { className: gt.btnContainer },
                                    o().createElement(
                                        'div',
                                        { className: gt.btnOuter },
                                        o().createElement('div', { className: gt.btnInner }, e),
                                    ),
                                ),
                                t &&
                                    n &&
                                    o().createElement(
                                        mt.animated.div,
                                        { className: gt.animationContainer, style: c },
                                        o().createElement(
                                            'div',
                                            { className: d },
                                            o().createElement('div', { className: u }, e),
                                        ),
                                    ),
                            )
                        );
                    },
                    _t = 'Hint_base_b3',
                    vt = 'Hint___small_95',
                    bt = 'Hint_header_d5',
                    ft = 'Hint_description_30',
                    Et = ({ headerText: e, descriptionText: t, isSmall: n = !1, className: a }) =>
                        o().createElement(
                            'div',
                            { className: Se()(_t, n && vt, a) },
                            e && o().createElement('div', { className: bt }, e),
                            t && o().createElement('div', { className: ft }, t),
                        ),
                    xt = {
                        base: 'HintBar_base_63',
                        column: 'HintBar_column_74',
                        rating: 'HintBar_rating_40',
                        alignmentContainer: 'HintBar_alignmentContainer_4e',
                        container: 'HintBar_container_6c',
                        __small: 'HintBar___small_00',
                        __selected: 'HintBar___selected_7d',
                        roundOnRatingSelected: 'HintBar_roundOnRatingSelected_63',
                        __withoutDelay: 'HintBar___withoutDelay_7a',
                        container__side: 'HintBar_container__side_61',
                        icon_divider: 'HintBar_icon_divider_40',
                        line: 'HintBar_line_d4',
                        btnContainer: 'HintBar_btnContainer_21',
                        btnContainer__small: 'HintBar_btnContainer__small_23',
                        icon: 'HintBar_icon_bb',
                        seperator: 'HintBar_seperator_e1',
                    },
                    wt = R.strings.ingame_gui.postmortem.tips,
                    pt = R.images.gui.maps.icons.battle.postmortem,
                    St = (0, Ue.Pi)(() => {
                        const e = Je().model,
                            t = e.isFrontline.get(),
                            n = e.isFreecamAvailable.get(),
                            a = e.hasLivesAvailable.get(),
                            r = e.isBlinking.get(),
                            i = e.rating.get() !== $e.Unset,
                            l = e.isRatingWidgetVisible.get(),
                            s = t ? pt.frontlineFollowBtn() : pt.defaultFollowBtn(),
                            d = R.strings.player_satisfaction.battle.widget.hintBarMouseText(),
                            u = R.strings.player_satisfaction.battle.widget.hintBarKeyboardText(),
                            c = !0;
                        return o().createElement(
                            'div',
                            {
                                className: Se()(
                                    xt.container,
                                    xt.__small,
                                    (i || !l) && xt.__selected,
                                    !l && xt.__withoutDelay,
                                ),
                            },
                            o().createElement(
                                'div',
                                { className: xt.container__side },
                                o().createElement('div', {
                                    className: xt.icon,
                                    style: { backgroundImage: `url('${s}')` },
                                }),
                                n &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(
                                            'div',
                                            { className: xt.icon_divider },
                                            o().createElement('div', { className: xt.line }),
                                        ),
                                        o().createElement(ht, {
                                            btnText: wt.freecam.button(),
                                            hasBlinkAnimation: !0,
                                            isBlinking: r,
                                            isSmall: c,
                                        }),
                                    ),
                                o().createElement(Et, { className: xt.hint, headerText: d, isSmall: c }),
                            ),
                            o().createElement(
                                'div',
                                { className: xt.container__side },
                                a &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(
                                            'div',
                                            { className: Se()(xt.btnContainer, xt.__small) },
                                            o().createElement(ht, { btnText: wt.exitHangar.button(), isSmall: c }),
                                        ),
                                        o().createElement(Et, { className: xt.hint, headerText: u, isSmall: c }),
                                    ),
                            ),
                        );
                    }),
                    Lt = 'PostmortemPanelViewApp_base_7e',
                    yt = 'PostmortemPanelViewApp_column_69',
                    Ht = 'PostmortemPanelViewApp_bottom_line_28',
                    Rt = 'PostmortemPanelViewApp_bottom_line__selected_af',
                    Mt = (0, Ue.Pi)(() => {
                        const e = Je().model,
                            t = e.isRatingWidgetEnabled.get(),
                            n = e.rating.get();
                        return o().createElement(
                            'div',
                            { className: Lt },
                            o().createElement(
                                'div',
                                { className: yt },
                                t && o().createElement(ct, null),
                                t && o().createElement('div', { className: Se()(Ht, n !== $e.Unset && Rt) }),
                                o().createElement(St, null),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    Ge().render(
                        o().createElement(De, null, o().createElement(Ke, null, o().createElement(Mt, null))),
                        document.getElementById('root'),
                    );
                });
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
        n = {};
    function a(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var i = (n[e] = { exports: {} });
        return (t[e](i, i.exports, a), i.exports);
    }
    ((a.m = t),
        (e = []),
        (a.O = (t, n, r, i) => {
            if (!n) {
                var l = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, r, i] = e[u], s = !0, o = 0; o < n.length; o++)
                        (!1 & i || l >= i) && Object.keys(a.O).every((e) => a.O[e](n[o]))
                            ? n.splice(o--, 1)
                            : ((s = !1), i < l && (l = i));
                    if (s) {
                        e.splice(u--, 1);
                        var d = r();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, r, i];
        }),
        (a.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (a.d(t, { a: t }), t);
        }),
        (a.d = (e, t) => {
            for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (a.j = 82),
        (() => {
            var e = { 82: 0 };
            a.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [l, s, o] = n,
                        d = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (r in s) a.o(s, r) && (a.m[r] = s[r]);
                        if (o) var u = o(a);
                    }
                    for (t && t(n); d < l.length; d++) ((i = l[d]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return a.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var r = a.O(void 0, [532], () => a(1845));
    r = a.O(r);
})();
