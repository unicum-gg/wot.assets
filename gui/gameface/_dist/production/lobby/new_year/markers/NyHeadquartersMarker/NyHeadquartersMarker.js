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
            6936: (e, t, n) => {
                'use strict';
                var r = {};
                (n.r(r),
                    n.d(r, { mouse: () => v, off: () => f, on: () => h, onResize: () => m, onScaleUpdated: () => g }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        events: () => r,
                        getMouseGlobalPosition: () => b,
                        getSize: () => w,
                        graphicsQuality: () => S,
                        playSound: () => x,
                        setRTPC: () => E,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => H, getTextureUrl: () => M }));
                var o = {};
                (n.r(o),
                    n.d(o, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => G,
                        children: () => i,
                        displayStatus: () => I,
                        displayStatusIs: () => ae,
                        events: () => C,
                        extraSize: () => ie,
                        forceTriggerMouseMove: () => te,
                        freezeTextureBeforeResize: () => X,
                        getBrowserTexturePath: () => z,
                        getDisplayStatus: () => ne,
                        getFontNames: () => re,
                        getScale: () => q,
                        getSize: () => F,
                        getViewGlobalPosition: () => V,
                        isEventHandled: () => ee,
                        isFocused: () => K,
                        pxToRem: () => Q,
                        remToPx: () => Y,
                        resize: () => B,
                        sendEvent: () => D,
                        setAnimateWindow: () => J,
                        setEventHandled: () => Z,
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => j,
                        whenTutorialReady: () => oe,
                    }));
                var l = n(6179),
                    s = n.n(l);
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
                    f = (e, t) => engine.off(e, t),
                    _ = { down: u('mousedown'), up: u('mouseup'), move: u('mousemove') };
                const v = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        o = _[t]((e) => n([e, 'outside']));
                                    function l(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, l),
                                        r(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(i, l),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function x(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function E(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const S = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    L = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(L).reduce((e, t) => ((e[t] = () => x(L[t])), e), {}),
                    y = { play: Object.assign({}, p, { sound: x }), setRTPC: E };
                function M(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function H(e, t, n) {
                    return `url(${M(e, t, n)})`;
                }
                const I = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    C = {
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
                    k = ['args'];
                const A = 2,
                    T = 16,
                    W = 32,
                    O = 64,
                    P = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, k);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    D = {
                        close(e) {
                            P('popover' === e ? A : W);
                        },
                        minimize() {
                            P(O);
                        },
                        move(e) {
                            P(T, { isMouseEvent: !0, on: e });
                        },
                    },
                    $ = 15;
                function G(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, $);
                }
                function z(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function U(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function j(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, $);
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function B(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function V(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Y(t.x), y: Y(t.y) };
                }
                function X() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function Q(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function J(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function Z() {
                    return viewEnv.setEventHandled();
                }
                function ee() {
                    return viewEnv.isEventHandled();
                }
                function te() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ne() {
                    return viewEnv.getShowingStatus();
                }
                const re = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ae = Object.keys(I).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === I[t]), e), {}),
                    ie = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    oe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    le = { view: o, client: a, sound: y };
                const se = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var de;
                function ue(e, t, n) {
                    const r = (function (e, t) {
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
                        })(t, n),
                        i = Math.min(r, a);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: r === n.extraLarge.weight,
                        largeWidth: r === n.large.weight,
                        mediumWidth: r === n.medium.weight,
                        smallWidth: r === n.small.weight,
                        extraSmallWidth: r === n.extraSmall.weight,
                        extraLargeHeight: a === n.extraLarge.weight,
                        largeHeight: a === n.large.weight,
                        mediumHeight: a === n.medium.weight,
                        smallHeight: a === n.small.weight,
                        extraSmallHeight: a === n.extraSmall.weight,
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
                })(de || (de = {}));
                const ce = le.client.getSize('rem'),
                    me = ce.width,
                    ge = ce.height,
                    he = Object.assign({ width: me, height: ge }, ue(me, ge, se)),
                    fe = (0, l.createContext)(he),
                    _e = ['children'];
                const ve = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, _e);
                    const r = (0, l.useContext)(fe),
                        a = r.extraLarge,
                        i = r.large,
                        o = r.medium,
                        s = r.small,
                        u = r.extraSmall,
                        c = r.extraLargeWidth,
                        m = r.largeWidth,
                        g = r.mediumWidth,
                        h = r.smallWidth,
                        f = r.extraSmallWidth,
                        _ = r.extraLargeHeight,
                        v = r.largeHeight,
                        x = r.mediumHeight,
                        E = r.smallHeight,
                        w = r.extraSmallHeight,
                        b = { extraLarge: _, large: v, medium: x, small: E, extraSmall: w };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && a) return t;
                        if (n.large && i) return t;
                        if (n.medium && o) return t;
                        if (n.small && s) return t;
                        if (n.extraSmall && u) return t;
                    } else {
                        if (n.extraLargeWidth && c) return d(t, n, b);
                        if (n.largeWidth && m) return d(t, n, b);
                        if (n.mediumWidth && g) return d(t, n, b);
                        if (n.smallWidth && h) return d(t, n, b);
                        if (n.extraSmallWidth && f) return d(t, n, b);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && _) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && x) return t;
                            if (n.smallHeight && E) return t;
                            if (n.extraSmallHeight && w) return t;
                        }
                    }
                    return null;
                };
                ve.defaultProps = {
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
                (0, l.memo)(ve);
                const xe = (e) => {
                        const t = (0, l.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    Ee = ({ children: e }) => {
                        const t = (0, l.useContext)(fe),
                            n = (0, l.useState)(t),
                            r = n[0],
                            a = n[1],
                            i = (0, l.useCallback)((e, t) => {
                                const n = le.view.pxToRem(e),
                                    r = le.view.pxToRem(t);
                                a(Object.assign({ width: n, height: r }, ue(n, r, se)));
                            }, []),
                            o = (0, l.useCallback)(() => {
                                const e = le.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        (xe(() => {
                            (le.client.events.on('clientResized', i), le.client.events.on('self.onScaleUpdated', o));
                        }),
                            (0, l.useEffect)(
                                () => () => {
                                    (le.client.events.off('clientResized', i),
                                        le.client.events.off('self.onScaleUpdated', o));
                                },
                                [i, o],
                            ));
                        const d = (0, l.useMemo)(() => Object.assign({}, r), [r]);
                        return s().createElement(fe.Provider, { value: d }, e);
                    };
                var we = n(6483),
                    be = n.n(we),
                    Se = n(926),
                    Le = n.n(Se);
                let pe, ye, Me;
                (!(function (e) {
                    ((e[(e.ExtraSmall = se.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = se.small.width)] = 'Small'),
                        (e[(e.Medium = se.medium.width)] = 'Medium'),
                        (e[(e.Large = se.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = se.extraLarge.width)] = 'ExtraLarge'));
                })(pe || (pe = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = se.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = se.small.width)] = 'Small'),
                            (e[(e.Medium = se.medium.width)] = 'Medium'),
                            (e[(e.Large = se.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = se.extraLarge.width)] = 'ExtraLarge'));
                    })(ye || (ye = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = se.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = se.small.height)] = 'Small'),
                            (e[(e.Medium = se.medium.height)] = 'Medium'),
                            (e[(e.Large = se.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = se.extraLarge.height)] = 'ExtraLarge'));
                    })(Me || (Me = {})));
                const He = () => {
                        const e = (0, l.useContext)(fe),
                            t = e.width,
                            n = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return pe.ExtraLarge;
                                    case e.large:
                                        return pe.Large;
                                    case e.medium:
                                        return pe.Medium;
                                    case e.small:
                                        return pe.Small;
                                    case e.extraSmall:
                                        return pe.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), pe.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return ye.ExtraLarge;
                                    case e.largeWidth:
                                        return ye.Large;
                                    case e.mediumWidth:
                                        return ye.Medium;
                                    case e.smallWidth:
                                        return ye.Small;
                                    case e.extraSmallWidth:
                                        return ye.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), ye.ExtraSmall);
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
                        return { mediaSize: r, mediaWidth: a, mediaHeight: i, remScreenWidth: t, remScreenHeight: n };
                    },
                    Ie = ['children', 'className'];
                function Ce() {
                    return (
                        (Ce = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Ce.apply(null, arguments)
                    );
                }
                const ke = {
                        [ye.ExtraSmall]: '',
                        [ye.Small]: Le().SMALL_WIDTH,
                        [ye.Medium]: `${Le().SMALL_WIDTH} ${Le().MEDIUM_WIDTH}`,
                        [ye.Large]: `${Le().SMALL_WIDTH} ${Le().MEDIUM_WIDTH} ${Le().LARGE_WIDTH}`,
                        [ye.ExtraLarge]: `${Le().SMALL_WIDTH} ${Le().MEDIUM_WIDTH} ${Le().LARGE_WIDTH} ${Le().EXTRA_LARGE_WIDTH}`,
                    },
                    Ae = {
                        [Me.ExtraSmall]: '',
                        [Me.Small]: Le().SMALL_HEIGHT,
                        [Me.Medium]: `${Le().SMALL_HEIGHT} ${Le().MEDIUM_HEIGHT}`,
                        [Me.Large]: `${Le().SMALL_HEIGHT} ${Le().MEDIUM_HEIGHT} ${Le().LARGE_HEIGHT}`,
                        [Me.ExtraLarge]: `${Le().SMALL_HEIGHT} ${Le().MEDIUM_HEIGHT} ${Le().LARGE_HEIGHT} ${Le().EXTRA_LARGE_HEIGHT}`,
                    },
                    Te = {
                        [pe.ExtraSmall]: '',
                        [pe.Small]: Le().SMALL,
                        [pe.Medium]: `${Le().SMALL} ${Le().MEDIUM}`,
                        [pe.Large]: `${Le().SMALL} ${Le().MEDIUM} ${Le().LARGE}`,
                        [pe.ExtraLarge]: `${Le().SMALL} ${Le().MEDIUM} ${Le().LARGE} ${Le().EXTRA_LARGE}`,
                    },
                    We = (e) => {
                        let t = e.children,
                            n = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, Ie);
                        const a = He(),
                            i = a.mediaWidth,
                            o = a.mediaHeight,
                            l = a.mediaSize;
                        return s().createElement('div', Ce({ className: be()(n, ke[i], Ae[o], Te[l]) }, r), t);
                    },
                    Re = ['children'];
                const Oe = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, Re);
                    return s().createElement(Ee, null, s().createElement(We, n, t));
                };
                var Pe = n(493),
                    De = n.n(Pe),
                    $e = n(3403),
                    Ge = n(7030);
                const Ne = {
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
                    ze = s().memo((e) => {
                        const t = (0, Ge.useTransition)(e, {
                            from: { opacity: 0, transform: 'translate(-50%, 50%)' },
                            enter: { opacity: 1, transform: 'translate(-50%, -50%)' },
                            leave: { opacity: 0, transform: 'translate(-50%, -150%)' },
                            config: { duration: 600 },
                        });
                        return s().createElement(
                            'div',
                            { className: be()(Ne.base, e.className) },
                            t((e, { markerType: t, levelState: n, markerContent: r }) =>
                                s().createElement(
                                    Ge.animated.div,
                                    { style: e, className: be()(Ne.content, Ne[`content__${t}`], Ne[`content__${n}`]) },
                                    r,
                                    s().createElement('div', { className: be()(Ne.gradient, Ne[`gradient__${t}`]) }, r),
                                ),
                            ),
                        );
                    });
                let Ue;
                !(function (e) {
                    ((e.Friend = 'friend'), (e.Default = 'default'));
                })(Ue || (Ue = {}));
                function je() {
                    return !1;
                }
                console.log;
                var Fe = n(9174);
                function Be(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return Ve(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? Ve(e, t)
                                          : void 0
                                );
                            }
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
                function Ve(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const Xe = (e) => (0 === e ? window : window.subViews.get(e));
                var qe = n(3946);
                const Qe = ((e, t) => {
                        const n = (0, l.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: a, children: i, mocks: o }) {
                                const d = (0, l.useRef)([]),
                                    u = (n, r, a) => {
                                        var i;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Xe,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = a.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const a = n(t),
                                                        i = r.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const l = 'string' == typeof i ? `${r}.${i}` : r,
                                                            s = le.view.addModelObserver(l, t, !0);
                                                        return (a.set(s, n), e && n(o(i)), s);
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const n = o(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = Be(a.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            l =
                                                'real' === n
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === n ? (null == a ? void 0 : a.getter(e)) : l.readByPath(e),
                                            u = (e) => d.current.push(e),
                                            c = e({
                                                mode: n,
                                                readByPath: s,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : s(e),
                                                            a = Fe.LO.box(r, { equals: je });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Fe.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : s(e),
                                                            a = Fe.LO.box(r, { equals: je });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Fe.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = s(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = Fe.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, Fe.aD)((t) => {
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
                                                                o = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = Fe.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, Fe.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                o[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            m = { mode: n, model: c, externalModel: l, cleanup: u };
                                        return {
                                            model: c,
                                            controls: 'mocks' === n && a ? a.controls(m) : t(m),
                                            externalModel: l,
                                            mode: n,
                                        };
                                    },
                                    c = (0, l.useRef)(!1),
                                    m = (0, l.useState)(r),
                                    g = m[0],
                                    h = m[1],
                                    f = (0, l.useState)(() => u(r, a, o)),
                                    _ = f[0],
                                    v = f[1];
                                return (
                                    (0, l.useEffect)(() => {
                                        c.current ? v(u(g, a, o)) : (c.current = !0);
                                    }, [o, g, a]),
                                    (0, l.useEffect)(() => {
                                        h(r);
                                    }, [r]),
                                    (0, l.useEffect)(
                                        () => () => {
                                            (_.externalModel.dispose(), d.current.forEach((e) => e()));
                                        },
                                        [_],
                                    ),
                                    s().createElement(n.Provider, { value: _ }, i)
                                );
                            },
                            () => (0, l.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                n = (0, qe.Om)(() => (t.root.get().isFriendHangar ? Ue.Friend : Ue.Default));
                            return Object.assign({}, t, { computes: { getMarkerType: n } });
                        },
                        ({ externalModel: e }) => ({ finishAnimation: e.createCallbackNoArgs('onAnimationEnd') }),
                    ),
                    Ye = Qe[0],
                    Je = Qe[1],
                    Ke = (e, t) => {
                        let n;
                        const r = setTimeout(() => {
                            n = e();
                        }, t);
                        return () => {
                            ('function' == typeof n && n(), clearTimeout(r));
                        };
                    },
                    Ze = (e, t) => {
                        const n = (0, l.useRef)();
                        return (
                            (0, l.useEffect)(() => {
                                (t && !t(e)) || (n.current = e);
                            }, [t, e]),
                            n.current
                        );
                    },
                    et = 'InfoDecorator_base_e3',
                    tt = 'InfoDecorator_background_a1',
                    nt = 'InfoDecorator_arrow_36',
                    rt = ({
                        children: e,
                        className: t,
                        startColor: n = '#213da1',
                        endColor: r = '#4361c8',
                        classNames: a,
                    }) => {
                        const i = (() => {
                            const e = (0, l.useState)(le.view.getScale()),
                                t = e[0],
                                n = e[1];
                            return (
                                (0, l.useEffect)(() => {
                                    const e = () => {
                                        n(le.view.getScale());
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
                            { className: be()(et, t) },
                            s().createElement(
                                'svg',
                                { className: tt, viewBox: '0 0 100% 100%' },
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
                                        s().createElement('stop', { offset: '0%', stopColor: n, stopOpacity: '0%' }),
                                        s().createElement('stop', {
                                            offset: '100%',
                                            stopColor: r,
                                            stopOpacity: '100%',
                                        }),
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
                            s().createElement('div', { className: be()(nt, null == a ? void 0 : a.arrow) }),
                        );
                    },
                    at = {
                        base: 'MarkerItemCounter_base_e7',
                        icon: 'MarkerItemCounter_icon_91',
                        base__sack: 'MarkerItemCounter_base__sack_f5',
                        count: 'MarkerItemCounter_count_a9',
                        slideInFadeIn: 'MarkerItemCounter_slideInFadeIn_0e',
                        fadeOut: 'MarkerItemCounter_fadeOut_83',
                        fadeIn: 'MarkerItemCounter_fadeIn_37',
                        fadeInWithScale: 'MarkerItemCounter_fadeInWithScale_24',
                        slideUp: 'MarkerItemCounter_slideUp_93',
                        scale: 'MarkerItemCounter_scale_a0',
                        spin: 'MarkerItemCounter_spin_46',
                        blink: 'MarkerItemCounter_blink_05',
                        slideInNotification: 'MarkerItemCounter_slideInNotification_e4',
                    },
                    it = ({ count: e, type: t = 'sack', classNames: n }) =>
                        s().createElement(
                            'div',
                            { className: be()(at.base, at[`base__${t}`], null == n ? void 0 : n.base) },
                            s().createElement('div', { className: be()(at.icon, null == n ? void 0 : n.icon) }),
                            s().createElement('div', { className: be()(at.count, null == n ? void 0 : n.count) }, e),
                        ),
                    ot = {
                        base: 'AnimationContent_base_cf',
                        boxes: 'AnimationContent_boxes_b8',
                        box: 'AnimationContent_box_6e',
                        splash: 'AnimationContent_splash_81',
                        box__fill: 'AnimationContent_box__fill_0e',
                        box__1: 'AnimationContent_box__1_a7',
                        box__2: 'AnimationContent_box__2_07',
                        box__3: 'AnimationContent_box__3_f3',
                        box__4: 'AnimationContent_box__4_80',
                        box__5: 'AnimationContent_box__5_0b',
                        box__6: 'AnimationContent_box__6_bd',
                        box__7: 'AnimationContent_box__7_f8',
                        item: 'AnimationContent_item_a7',
                        animationItem: 'AnimationContent_animationItem_cc',
                        base__shake: 'AnimationContent_base__shake_25',
                        shake: 'AnimationContent_shake_97',
                        marker: 'AnimationContent_marker_e1',
                        scale: 'AnimationContent_scale_b6',
                    };
                var lt;
                !(function (e) {
                    ((e.None = 'none'), (e.Idle = 'idle'), (e.Shake = 'shake'));
                })(lt || (lt = {}));
                const st = (0, $e.Pi)(({ className: e }) => {
                        var t;
                        const n = Je(),
                            r = n.model,
                            a = n.controls,
                            i = r.root.get(),
                            o = i.isLobby,
                            d = i.sacksCount,
                            u = i.syncInitiator,
                            c = null != (t = Ze(u)) ? t : u,
                            m = (0, l.useState)(lt.None),
                            g = m[0],
                            h = m[1];
                        return (
                            (0, l.useEffect)(() => {
                                h(o ? lt.None : lt.Idle);
                            }, [o]),
                            (0, l.useEffect)(() => {
                                c !== u && g !== lt.None && h(lt.None);
                            }, [g, c, u]),
                            (0, l.useEffect)(() => {
                                switch (g) {
                                    case lt.None:
                                        return Ke(() => {
                                            h(lt.Shake);
                                        }, 2e3);
                                    case lt.Shake:
                                        return Ke(() => {
                                            (h(lt.Idle), a.finishAnimation());
                                        }, 2500);
                                    default:
                                        return;
                                }
                            }, [g, a]),
                            s().createElement(
                                'div',
                                { className: be()(ot.base, ot[`base__${g}`], e) },
                                g === lt.Shake &&
                                    s().createElement(
                                        'div',
                                        { className: ot.boxes },
                                        ((e, t) => {
                                            const n = [];
                                            for (let r = 0; r < e; r++) n.push(t(r));
                                            return n;
                                        })(7, (e) => {
                                            const t = 2 === e || 5 === e;
                                            return s().createElement('div', {
                                                key: e,
                                                className: be()(ot.box, t && ot.box__fill, ot[`box__${e + 1}`]),
                                            });
                                        }),
                                    ),
                                s().createElement(
                                    rt,
                                    { className: ot.marker },
                                    Boolean(d > 0) &&
                                        s().createElement(
                                            'div',
                                            { className: ot.item },
                                            s().createElement(it, {
                                                count: d,
                                                classNames: { icon: ot.animationItem, count: ot.animationItem },
                                            }),
                                        ),
                                ),
                            )
                        );
                    }),
                    dt = 'App_base_38',
                    ut = 'App_inner_d0',
                    ct = 'App_icon_68',
                    mt = 'App_content_8f',
                    gt = R.strings.ny.customizationObject.marker.nonUpgradable(),
                    ht = (0, $e.Pi)(() => {
                        const e = Je().model,
                            t = e.root.get(),
                            n = t.isFriendHangar,
                            r = t.isVisible,
                            a = t.sacksCount,
                            i = t.levelState,
                            o = t.isHangarReady,
                            d = e.computes.getMarkerType(),
                            u = !n && o && a > 0;
                        return (
                            (0, l.useEffect)(() => {
                                le.view.resize(340, 120, 'rem');
                            }, []),
                            s().createElement(
                                'div',
                                { className: dt, lang: R.strings.settings.LANGUAGE_CODE() },
                                r &&
                                    s().createElement(
                                        'div',
                                        { className: ut },
                                        u
                                            ? s().createElement(st, null)
                                            : s().createElement(
                                                  'div',
                                                  {
                                                      className: ct,
                                                      style: {
                                                          backgroundImage: `url(${R.images.gui.maps.icons.newYear.markers.customization.$dyn(`body_${d}`)})`,
                                                      },
                                                  },
                                                  s().createElement(ze, {
                                                      markerContent: gt,
                                                      levelState: i,
                                                      markerType: d,
                                                      className: mt,
                                                  }),
                                              ),
                                    ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    De().render(
                        s().createElement(Oe, null, s().createElement(Ye, null, s().createElement(ht, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        n = {};
    function r(e) {
        var a = n[e];
        if (void 0 !== a) return a.exports;
        var i = (n[e] = { exports: {} });
        return (t[e](i, i.exports, r), i.exports);
    }
    ((r.m = t),
        (e = []),
        (r.O = (t, n, a, i) => {
            if (!n) {
                var o = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, a, i] = e[u], l = !0, s = 0; s < n.length; s++)
                        (!1 & i || o >= i) && Object.keys(r.O).every((e) => r.O[e](n[s]))
                            ? n.splice(s--, 1)
                            : ((l = !1), i < o && (o = i));
                    if (l) {
                        e.splice(u--, 1);
                        var d = a();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, a, i];
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
        (r.j = 5269),
        (() => {
            var e = { 5269: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        i,
                        [o, l, s] = n,
                        d = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (a in l) r.o(l, a) && (r.m[a] = l[a]);
                        if (s) var u = s(r);
                    }
                    for (t && t(n); d < o.length; d++) ((i = o[d]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var a = r.O(void 0, [8360], () => r(6936));
    a = r.O(a);
})();
