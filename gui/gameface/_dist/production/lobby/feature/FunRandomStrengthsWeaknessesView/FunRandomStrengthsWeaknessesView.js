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
            2162: (e, t, r) => {
                'use strict';
                var n = {};
                (r.r(n),
                    r.d(n, { mouse: () => w, off: () => f, on: () => h, onResize: () => g, onScaleUpdated: () => c }));
                var a = {};
                (r.r(a),
                    r.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => L,
                        getSize: () => S,
                        graphicsQuality: () => p,
                        playSound: () => x,
                        setRTPC: () => E,
                    }));
                var i = {};
                (r.r(i), r.d(i, { getBgUrl: () => W, getTextureUrl: () => T }));
                var l = {};
                (r.r(l),
                    r.d(l, {
                        addModelObserver: () => j,
                        addPreloadTexture: () => D,
                        arabic2roman: () => te,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => re,
                        events: () => O,
                        extraSize: () => ne,
                        forceTriggerMouseMove: () => Y,
                        freezeTextureBeforeResize: () => V,
                        getBrowserTexturePath: () => $,
                        getDisplayStatus: () => Z,
                        getFontNames: () => ee,
                        getScale: () => F,
                        getSize: () => z,
                        getViewGlobalPosition: () => N,
                        isEventHandled: () => K,
                        isFocused: () => Q,
                        pxToRem: () => B,
                        remToPx: () => X,
                        resize: () => U,
                        sendEvent: () => k,
                        setAnimateWindow: () => q,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => C,
                        whenTutorialReady: () => ae,
                    }));
                var s = r(7363),
                    o = r.n(s);
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
                const g = d('clientResized'),
                    c = d('self.onScaleUpdated'),
                    h = (e, t) => engine.on(e, t),
                    f = (e, t) => engine.off(e, t),
                    v = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') },
                    w = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && m(!1);
                        }
                        function r() {
                            e.enabled && m(!0);
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
                                : m(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const i = `mouse${t}`,
                                            l = v[t]((e) => r([e, 'outside']));
                                        function s(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            n(),
                                            () => {
                                                a &&
                                                    (l(),
                                                    window.removeEventListener(i, s),
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
                                e.enabled && m(!0);
                            },
                            disableOutside() {
                                e.enabled && m(!1);
                            },
                        });
                    })();
                function x(e) {
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
                const p = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    b = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(b).reduce((e, t) => ((e[t] = () => x(b[t])), e), {}),
                    H = { play: Object.assign({}, y, { sound: x }), setRTPC: E },
                    M = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    _ = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function T(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function W(e, t, r) {
                    return `url(${T(e, t, r)})`;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    I = ['args'],
                    P = (e, t) => {
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
                                })(t, I);
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
                            P('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            P(64);
                        },
                        move(e) {
                            P(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function D(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function $(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function j(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function C(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function N(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: X(t.x), y: X(t.y) };
                }
                function V() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function X(e) {
                    return viewEnv.remToPx(e);
                }
                function q(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function J() {
                    return viewEnv.setEventHandled();
                }
                function K() {
                    return viewEnv.isEventHandled();
                }
                function Y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const ee = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    te = function (e) {
                        let t = '';
                        for (let r = _.length - 1; r >= 0; r--) for (; e >= _[r];) ((t += M[r]), (e -= _[r]));
                        return t;
                    },
                    re = Object.keys(A).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === A[t]), e), {}),
                    ne = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ae = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : O.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ie = { view: l, client: a, sound: H },
                    le = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var se;
                function oe(e, t, r) {
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
                })(se || (se = {}));
                const ue = ie.client.getSize('rem'),
                    de = ue.width,
                    me = ue.height,
                    ge = Object.assign({ width: de, height: me }, oe(de, me, le)),
                    ce = (0, s.createContext)(ge),
                    he = ['children'],
                    fe = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, he);
                        const n = (0, s.useContext)(ce),
                            a = n.extraLarge,
                            i = n.large,
                            l = n.medium,
                            o = n.small,
                            d = n.extraSmall,
                            m = n.extraLargeWidth,
                            g = n.largeWidth,
                            c = n.mediumWidth,
                            h = n.smallWidth,
                            f = n.extraSmallWidth,
                            v = n.extraLargeHeight,
                            w = n.largeHeight,
                            x = n.mediumHeight,
                            E = n.smallHeight,
                            S = n.extraSmallHeight,
                            L = { extraLarge: v, large: w, medium: x, small: E, extraSmall: S };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && a) return t;
                            if (r.large && i) return t;
                            if (r.medium && l) return t;
                            if (r.small && o) return t;
                            if (r.extraSmall && d) return t;
                        } else {
                            if (r.extraLargeWidth && m) return u(t, r, L);
                            if (r.largeWidth && g) return u(t, r, L);
                            if (r.mediumWidth && c) return u(t, r, L);
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
                                if (r.largeHeight && w) return t;
                                if (r.mediumHeight && x) return t;
                                if (r.smallHeight && E) return t;
                                if (r.extraSmallHeight && S) return t;
                            }
                        }
                        return null;
                    };
                ((fe.defaultProps = {
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
                    (0, s.memo)(fe));
                const ve = ({ children: e }) => {
                    const t = (0, s.useContext)(ce),
                        r = (0, s.useState)(t),
                        n = r[0],
                        a = r[1],
                        i = (0, s.useCallback)((e, t) => {
                            const r = ie.view.pxToRem(e),
                                n = ie.view.pxToRem(t);
                            a(Object.assign({ width: r, height: n }, oe(r, n, le)));
                        }, []),
                        l = (0, s.useCallback)(() => {
                            const e = ie.client.getSize('px');
                            i(e.width, e.height);
                        }, [i]);
                    (((e) => {
                        const t = (0, s.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        (ie.client.events.on('clientResized', i), ie.client.events.on('self.onScaleUpdated', l));
                    }),
                        (0, s.useEffect)(
                            () => () => {
                                (ie.client.events.off('clientResized', i),
                                    ie.client.events.off('self.onScaleUpdated', l));
                            },
                            [i, l],
                        ));
                    const u = (0, s.useMemo)(() => Object.assign({}, n), [n]);
                    return o().createElement(ce.Provider, { value: u }, e);
                };
                var we = r(6483),
                    xe = r.n(we),
                    Ee = r(926),
                    Se = r.n(Ee);
                let Le, pe, be;
                (!(function (e) {
                    ((e[(e.ExtraSmall = le.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = le.small.width)] = 'Small'),
                        (e[(e.Medium = le.medium.width)] = 'Medium'),
                        (e[(e.Large = le.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = le.extraLarge.width)] = 'ExtraLarge'));
                })(Le || (Le = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = le.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = le.small.width)] = 'Small'),
                            (e[(e.Medium = le.medium.width)] = 'Medium'),
                            (e[(e.Large = le.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = le.extraLarge.width)] = 'ExtraLarge'));
                    })(pe || (pe = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = le.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = le.small.height)] = 'Small'),
                            (e[(e.Medium = le.medium.height)] = 'Medium'),
                            (e[(e.Large = le.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = le.extraLarge.height)] = 'ExtraLarge'));
                    })(be || (be = {})));
                const ye = () => {
                        const e = (0, s.useContext)(ce),
                            t = e.width,
                            r = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return Le.ExtraLarge;
                                    case e.large:
                                        return Le.Large;
                                    case e.medium:
                                        return Le.Medium;
                                    case e.small:
                                        return Le.Small;
                                    case e.extraSmall:
                                        return Le.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Le.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return pe.ExtraLarge;
                                    case e.largeWidth:
                                        return pe.Large;
                                    case e.mediumWidth:
                                        return pe.Medium;
                                    case e.smallWidth:
                                        return pe.Small;
                                    case e.extraSmallWidth:
                                        return pe.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), pe.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return be.ExtraLarge;
                                    case e.largeHeight:
                                        return be.Large;
                                    case e.mediumHeight:
                                        return be.Medium;
                                    case e.smallHeight:
                                        return be.Small;
                                    case e.extraSmallHeight:
                                        return be.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), be.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: i, remScreenWidth: t, remScreenHeight: r };
                    },
                    He = ['children', 'className'];
                function Me() {
                    return (
                        (Me =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        Me.apply(this, arguments)
                    );
                }
                const _e = {
                        [pe.ExtraSmall]: '',
                        [pe.Small]: Se().SMALL_WIDTH,
                        [pe.Medium]: `${Se().SMALL_WIDTH} ${Se().MEDIUM_WIDTH}`,
                        [pe.Large]: `${Se().SMALL_WIDTH} ${Se().MEDIUM_WIDTH} ${Se().LARGE_WIDTH}`,
                        [pe.ExtraLarge]: `${Se().SMALL_WIDTH} ${Se().MEDIUM_WIDTH} ${Se().LARGE_WIDTH} ${Se().EXTRA_LARGE_WIDTH}`,
                    },
                    Re = {
                        [be.ExtraSmall]: '',
                        [be.Small]: Se().SMALL_HEIGHT,
                        [be.Medium]: `${Se().SMALL_HEIGHT} ${Se().MEDIUM_HEIGHT}`,
                        [be.Large]: `${Se().SMALL_HEIGHT} ${Se().MEDIUM_HEIGHT} ${Se().LARGE_HEIGHT}`,
                        [be.ExtraLarge]: `${Se().SMALL_HEIGHT} ${Se().MEDIUM_HEIGHT} ${Se().LARGE_HEIGHT} ${Se().EXTRA_LARGE_HEIGHT}`,
                    },
                    Te = {
                        [Le.ExtraSmall]: '',
                        [Le.Small]: Se().SMALL,
                        [Le.Medium]: `${Se().SMALL} ${Se().MEDIUM}`,
                        [Le.Large]: `${Se().SMALL} ${Se().MEDIUM} ${Se().LARGE}`,
                        [Le.ExtraLarge]: `${Se().SMALL} ${Se().MEDIUM} ${Se().LARGE} ${Se().EXTRA_LARGE}`,
                    },
                    We = (e) => {
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
                            })(e, He);
                        const a = ye(),
                            i = a.mediaWidth,
                            l = a.mediaHeight,
                            s = a.mediaSize;
                        return o().createElement('div', Me({ className: xe()(r, _e[i], Re[l], Te[s]) }, n), t);
                    },
                    Ae = ['children'],
                    Oe = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, Ae);
                        return o().createElement(ve, null, o().createElement(We, r, t));
                    };
                var Ie = r(1533),
                    Pe = r.n(Ie),
                    ke = r(3403);
                function De(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, r, n) => t(null == e ? void 0 : e.value, r, n));
                }
                function Ge() {
                    return !1;
                }
                console.log;
                var $e = r(9174);
                function je(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const Ce = (e) => (0 === e ? window : window.subViews.get(e)),
                    ze = ((e, t) => {
                        const r = (0, s.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: a, mocks: i }) {
                                const l = (0, s.useRef)([]),
                                    u = (e, r, n) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Ce,
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
                                                        const s = 'string' == typeof i ? `${n}.${i}` : n,
                                                            o = ie.view.addModelObserver(s, t, !0);
                                                        return (a.set(o, r), e && r(l(i)), o);
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
                                                                                    return je(e, t);
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
                                                                                          ? je(e, t)
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
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (t) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(t)) : s.readByPath(t),
                                            u = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => {
                                                const t = {
                                                    root: e.object(),
                                                    strengths: e.array('parameters.strengths', []),
                                                    weaknesses: e.array('parameters.weaknesses', []),
                                                };
                                                return Object.assign({}, t, { computes: {} });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const n = null != r ? r : o(t),
                                                            a = $e.LO.box(n, { equals: Ge });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, $e.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const n = null != r ? r : o(t),
                                                            a = $e.LO.box(n, { equals: Ge });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, $e.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const n = o(r);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = $e.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, $e.aD)((e) => {
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
                                                                    (e, [t, r]) => ((e[r] = $e.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, $e.aD)((e) => {
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
                                                cleanup: u,
                                            }),
                                            m = { mode: e, model: d, externalModel: s, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && n ? n.controls(m) : t(m),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    m = (0, s.useState)(e),
                                    g = m[0],
                                    c = m[1],
                                    h = (0, s.useState)(() => u(e, n, i)),
                                    f = h[0],
                                    v = h[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? v(u(g, n, i)) : (d.current = !0);
                                    }, [i, g, n]),
                                    (0, s.useEffect)(() => {
                                        c(e);
                                    }, [e]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            (f.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [f],
                                    ),
                                    o().createElement(r.Provider, { value: f }, a)
                                );
                            },
                            () => (0, s.useContext)(r),
                        ];
                    })(0, function () {}),
                    Ue = ze[0],
                    Ne = ze[1],
                    Ve = 'App_title_5f',
                    Fe = 'App_itemList_8c',
                    Be =
                        R.images.fun_random.gui.maps.icons.feature.asset_packs.sub_modes.auto_shoot_guns
                            .strengths_weakness,
                    Xe = R.strings.fun_random.strengths_weaknesses,
                    qe = ({ parameterName: e, icon: t, kind: r, className: n, classNames: a }) =>
                        e && t && r
                            ? o().createElement(
                                  'div',
                                  { className: xe()('Advantage_base_66', n) },
                                  o().createElement('span', {
                                      className: xe()('Advantage_icon_0f', null == a ? void 0 : a.icon),
                                      style: { backgroundImage: `url('${Be.$dyn(r).$dyn(t)}')` },
                                  }),
                                  o().createElement(
                                      'span',
                                      { className: xe()('Advantage_text_c2', null == a ? void 0 : a.text) },
                                      Xe.$dyn(r).$dyn(e),
                                  ),
                              )
                            : null;
                function Qe() {
                    return (
                        (Qe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        Qe.apply(this, arguments)
                    );
                }
                const Je = R.strings.fun_random.strengths_weaknesses,
                    Ke = (0, ke.Pi)(() => {
                        const e = Ne().model,
                            t = e.strengths.get(),
                            r = e.weaknesses.get();
                        if (!t.length || !r.length) return null;
                        const n = (0, s.useRef)(null),
                            a = ye().mediaSize;
                        return (
                            (0, s.useEffect)(() => {
                                ((e) => {
                                    let t,
                                        r = null;
                                    r = requestAnimationFrame(() => {
                                        r = requestAnimationFrame(() => {
                                            ((r = null),
                                                (t = (() => {
                                                    const e = n.current.getBoundingClientRect(),
                                                        t = ie.view.getSize('rem'),
                                                        r = t.width,
                                                        a = t.height,
                                                        i = viewEnv.pxToRem(e.width),
                                                        l = viewEnv.pxToRem(e.height);
                                                    ie.view.setSidePaddingsRem({
                                                        left: r - i,
                                                        right: 0,
                                                        top: 0,
                                                        bottom: a - l,
                                                    });
                                                })()));
                                        });
                                    });
                                })();
                            }, [a]),
                            o().createElement(
                                'div',
                                { ref: n, className: 'App_base_8a' },
                                o().createElement(
                                    'div',
                                    { className: 'App_panel_34' },
                                    o().createElement('span', { className: Ve }, Je.strengths()),
                                    o().createElement(
                                        'div',
                                        { className: Fe },
                                        De(t, (e) =>
                                            o().createElement(
                                                qe,
                                                Qe({ key: e.parameterName }, e, { kind: 'strength' }),
                                            ),
                                        ),
                                    ),
                                    o().createElement('div', { className: 'App_separator_2e' }),
                                    o().createElement('span', { className: Ve }, Je.weaknesses()),
                                    o().createElement(
                                        'div',
                                        { className: Fe },
                                        De(r, (e) =>
                                            o().createElement(
                                                qe,
                                                Qe({ key: e.parameterName }, e, { kind: 'weakness' }),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    Pe().render(
                        o().createElement(Ue, null, o().createElement(Oe, null, o().createElement(Ke, null))),
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
                    for (var [r, a, i] = e[d], s = !0, o = 0; o < r.length; o++)
                        (!1 & i || l >= i) && Object.keys(n.O).every((e) => n.O[e](r[o]))
                            ? r.splice(o--, 1)
                            : ((s = !1), i < l && (l = i));
                    if (s) {
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
        (n.j = 'lobby/feature/FunRandomStrengthsWeaknessesView/FunRandomStrengthsWeaknessesView'),
        (() => {
            var e = { 'lobby/feature/FunRandomStrengthsWeaknessesView/FunRandomStrengthsWeaknessesView': 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var a,
                        i,
                        [l, s, o] = r,
                        u = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (a in s) n.o(s, a) && (n.m[a] = s[a]);
                        if (o) var d = o(n);
                    }
                    for (t && t(r); u < l.length; u++) ((i = l[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return n.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var a = n.O(void 0, ['lib/fun_random.vendors'], () => n(2162));
    a = n.O(a);
})();
