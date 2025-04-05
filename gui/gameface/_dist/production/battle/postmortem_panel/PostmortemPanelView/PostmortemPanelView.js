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
            1663: (e, t, a) => {
                'use strict';
                var n = {};
                a.r(n),
                    a.d(n, { mouse: () => v, off: () => _, on: () => h, onResize: () => m, onScaleUpdated: () => g });
                var r = {};
                a.r(r),
                    a.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => w,
                        getSize: () => E,
                        graphicsQuality: () => p,
                        playSound: () => f,
                        setRTPC: () => x,
                    });
                var i = {};
                a.r(i), a.d(i, { getBgUrl: () => T, getTextureUrl: () => y });
                var l = {};
                a.r(l),
                    a.d(l, {
                        addModelObserver: () => $,
                        addPreloadTexture: () => N,
                        children: () => i,
                        displayStatus: () => M,
                        displayStatusIs: () => re,
                        events: () => W,
                        extraSize: () => ie,
                        forceTriggerMouseMove: () => te,
                        freezeTextureBeforeResize: () => X,
                        getBrowserTexturePath: () => U,
                        getDisplayStatus: () => ae,
                        getFontNames: () => ne,
                        getScale: () => q,
                        getSize: () => j,
                        getViewGlobalPosition: () => V,
                        isEventHandled: () => ee,
                        isFocused: () => Y,
                        pxToRem: () => Q,
                        remToPx: () => K,
                        resize: () => F,
                        sendEvent: () => D,
                        setAnimateWindow: () => J,
                        setEventHandled: () => Z,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => z,
                        whenTutorialReady: () => le,
                    });
                var s = a(7363),
                    o = a.n(s);
                const u = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
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
                    _ = (e, t) => engine.off(e, t),
                    b = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
                const v = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function a() {
                        e.enabled && c(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : c(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        l = b[t]((e) => a([e, 'outside']));
                                    function s(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        n(),
                                        () => {
                                            r &&
                                                (l(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
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
                function x(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                function E(e = 'px') {
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
                    S = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    H = Object.keys(S).reduce((e, t) => ((e[t] = () => f(S[t])), e), {}),
                    L = { play: Object.assign({}, H, { sound: f }), setRTPC: x };
                function y(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function T(e, t, a) {
                    return `url(${y(e, t, a)})`;
                }
                const M = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    W = {
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
                    B = ['args'];
                const O = 2,
                    A = 16,
                    P = 32,
                    I = 64,
                    C = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var a = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            a[n] = e[n];
                                        }
                                    return a;
                                })(t, B);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    D = {
                        close(e) {
                            C('popover' === e ? O : P);
                        },
                        minimize() {
                            C(I);
                        },
                        move(e) {
                            C(A, { isMouseEvent: !0, on: e });
                        },
                    },
                    k = 15;
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, k);
                }
                function U(e, t, a, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, n);
                }
                function $(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, k);
                }
                function j(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function V(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: K(t.x), y: K(t.y) };
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
                function K(e) {
                    return viewEnv.remToPx(e);
                }
                function J(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Y() {
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
                function ae() {
                    return viewEnv.getShowingStatus();
                }
                const ne = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    re = Object.keys(M).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === M[t]), e), {}),
                    ie = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    le = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : W.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    se = { view: l, client: r, sound: L };
                const oe = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var ue;
                function de(e, t, a) {
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
                        })(e, a),
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
                        })(t, a),
                        i = Math.min(n, r);
                    return {
                        extraLarge: i === a.extraLarge.weight,
                        large: i === a.large.weight,
                        medium: i === a.medium.weight,
                        small: i === a.small.weight,
                        extraSmall: i === a.extraSmall.weight,
                        extraLargeWidth: n === a.extraLarge.weight,
                        largeWidth: n === a.large.weight,
                        mediumWidth: n === a.medium.weight,
                        smallWidth: n === a.small.weight,
                        extraSmallWidth: n === a.extraSmall.weight,
                        extraLargeHeight: r === a.extraLarge.weight,
                        largeHeight: r === a.large.weight,
                        mediumHeight: r === a.medium.weight,
                        smallHeight: r === a.small.weight,
                        extraSmallHeight: r === a.extraSmall.weight,
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
                })(ue || (ue = {}));
                const ce = se.client.getSize('rem'),
                    me = ce.width,
                    ge = ce.height,
                    he = Object.assign({ width: me, height: ge }, de(me, ge, oe)),
                    _e = (0, s.createContext)(he),
                    be = ['children'];
                const ve = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    a[n] = e[n];
                                }
                            return a;
                        })(e, be);
                    const n = (0, s.useContext)(_e),
                        r = n.extraLarge,
                        i = n.large,
                        l = n.medium,
                        o = n.small,
                        d = n.extraSmall,
                        c = n.extraLargeWidth,
                        m = n.largeWidth,
                        g = n.mediumWidth,
                        h = n.smallWidth,
                        _ = n.extraSmallWidth,
                        b = n.extraLargeHeight,
                        v = n.largeHeight,
                        f = n.mediumHeight,
                        x = n.smallHeight,
                        E = n.extraSmallHeight,
                        w = { extraLarge: b, large: v, medium: f, small: x, extraSmall: E };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && r) return t;
                        if (a.large && i) return t;
                        if (a.medium && l) return t;
                        if (a.small && o) return t;
                        if (a.extraSmall && d) return t;
                    } else {
                        if (a.extraLargeWidth && c) return u(t, a, w);
                        if (a.largeWidth && m) return u(t, a, w);
                        if (a.mediumWidth && g) return u(t, a, w);
                        if (a.smallWidth && h) return u(t, a, w);
                        if (a.extraSmallWidth && _) return u(t, a, w);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && b) return t;
                            if (a.largeHeight && v) return t;
                            if (a.mediumHeight && f) return t;
                            if (a.smallHeight && x) return t;
                            if (a.extraSmallHeight && E) return t;
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
                (0, s.memo)(ve);
                const fe = (e) => {
                        const t = (0, s.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    xe = ({ children: e }) => {
                        const t = (0, s.useContext)(_e),
                            a = (0, s.useState)(t),
                            n = a[0],
                            r = a[1],
                            i = (0, s.useCallback)((e, t) => {
                                const a = se.view.pxToRem(e),
                                    n = se.view.pxToRem(t);
                                r(Object.assign({ width: a, height: n }, de(a, n, oe)));
                            }, []),
                            l = (0, s.useCallback)(() => {
                                const e = se.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        fe(() => {
                            se.client.events.on('clientResized', i), se.client.events.on('self.onScaleUpdated', l);
                        }),
                            (0, s.useEffect)(
                                () => () => {
                                    se.client.events.off('clientResized', i),
                                        se.client.events.off('self.onScaleUpdated', l);
                                },
                                [i, l],
                            );
                        const u = (0, s.useMemo)(() => Object.assign({}, n), [n]);
                        return o().createElement(_e.Provider, { value: u }, e);
                    };
                var Ee = a(6483),
                    we = a.n(Ee),
                    pe = a(926),
                    Se = a.n(pe);
                let He, Le, ye;
                !(function (e) {
                    (e[(e.ExtraSmall = oe.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = oe.small.width)] = 'Small'),
                        (e[(e.Medium = oe.medium.width)] = 'Medium'),
                        (e[(e.Large = oe.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = oe.extraLarge.width)] = 'ExtraLarge');
                })(He || (He = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = oe.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = oe.small.width)] = 'Small'),
                            (e[(e.Medium = oe.medium.width)] = 'Medium'),
                            (e[(e.Large = oe.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = oe.extraLarge.width)] = 'ExtraLarge');
                    })(Le || (Le = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = oe.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = oe.small.height)] = 'Small'),
                            (e[(e.Medium = oe.medium.height)] = 'Medium'),
                            (e[(e.Large = oe.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = oe.extraLarge.height)] = 'ExtraLarge');
                    })(ye || (ye = {}));
                const Re = () => {
                        const e = (0, s.useContext)(_e),
                            t = e.width,
                            a = e.height,
                            n = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), He.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Le.ExtraLarge;
                                    case e.largeWidth:
                                        return Le.Large;
                                    case e.mediumWidth:
                                        return Le.Medium;
                                    case e.smallWidth:
                                        return Le.Small;
                                    case e.extraSmallWidth:
                                        return Le.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Le.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return ye.ExtraLarge;
                                    case e.largeHeight:
                                        return ye.Large;
                                    case e.mediumHeight:
                                        return ye.Medium;
                                    case e.smallHeight:
                                        return ye.Small;
                                    case e.extraSmallHeight:
                                        return ye.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ye.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: t, remScreenHeight: a };
                    },
                    Te = ['children', 'className'];
                function Me() {
                    return (
                        (Me = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        Me.apply(null, arguments)
                    );
                }
                const We = {
                        [Le.ExtraSmall]: '',
                        [Le.Small]: Se().SMALL_WIDTH,
                        [Le.Medium]: `${Se().SMALL_WIDTH} ${Se().MEDIUM_WIDTH}`,
                        [Le.Large]: `${Se().SMALL_WIDTH} ${Se().MEDIUM_WIDTH} ${Se().LARGE_WIDTH}`,
                        [Le.ExtraLarge]: `${Se().SMALL_WIDTH} ${Se().MEDIUM_WIDTH} ${Se().LARGE_WIDTH} ${Se().EXTRA_LARGE_WIDTH}`,
                    },
                    Be = {
                        [ye.ExtraSmall]: '',
                        [ye.Small]: Se().SMALL_HEIGHT,
                        [ye.Medium]: `${Se().SMALL_HEIGHT} ${Se().MEDIUM_HEIGHT}`,
                        [ye.Large]: `${Se().SMALL_HEIGHT} ${Se().MEDIUM_HEIGHT} ${Se().LARGE_HEIGHT}`,
                        [ye.ExtraLarge]: `${Se().SMALL_HEIGHT} ${Se().MEDIUM_HEIGHT} ${Se().LARGE_HEIGHT} ${Se().EXTRA_LARGE_HEIGHT}`,
                    },
                    Oe = {
                        [He.ExtraSmall]: '',
                        [He.Small]: Se().SMALL,
                        [He.Medium]: `${Se().SMALL} ${Se().MEDIUM}`,
                        [He.Large]: `${Se().SMALL} ${Se().MEDIUM} ${Se().LARGE}`,
                        [He.ExtraLarge]: `${Se().SMALL} ${Se().MEDIUM} ${Se().LARGE} ${Se().EXTRA_LARGE}`,
                    },
                    Ae = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, Te);
                        const r = Re(),
                            i = r.mediaWidth,
                            l = r.mediaHeight,
                            s = r.mediaSize;
                        return o().createElement('div', Me({ className: we()(a, We[i], Be[l], Oe[s]) }, n), t);
                    },
                    Pe = ['children'];
                const Ie = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    a[n] = e[n];
                                }
                            return a;
                        })(e, Pe);
                    return o().createElement(xe, null, o().createElement(Ae, a, t));
                };
                var Ce = a(1533),
                    De = a.n(Ce);
                let ke;
                !(function (e) {
                    (e.Worse = 'Worse'), (e.Usual = 'Usual'), (e.Better = 'Better'), (e.Unset = 'Unset');
                })(ke || (ke = {}));
                var Ne = a(3403);
                function Ge(e) {
                    return e;
                }
                function Ue() {
                    return !1;
                }
                console.log;
                var $e = a(9174);
                function ze(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return je(e, t);
                                var a = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === a && e.constructor && (a = e.constructor.name),
                                    'Map' === a || 'Set' === a
                                        ? Array.from(e)
                                        : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                                          ? je(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function je(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const Fe = (e) => (0 === e ? window : window.subViews.get(e));
                var Ve = a(3946);
                const Xe = ((e, t) => {
                        const a = (0, s.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: i, mocks: l }) {
                                const u = (0, s.useRef)([]),
                                    d = (a, n, r) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = Fe,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = r.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const r = a(t),
                                                        i = n.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (a, i) => {
                                                        const s = 'string' == typeof i ? `${n}.${i}` : n,
                                                            o = se.view.addModelObserver(s, t, !0);
                                                        return r.set(o, a), e && a(l(i)), o;
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, t) => {
                                                        const a = l(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = l(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = ze(r.keys()); !(e = a()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            s =
                                                'real' === a
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === a ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            c = e({
                                                mode: a,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : o(e),
                                                            r = $e.LO.box(n, { equals: Ue });
                                                        return (
                                                            'real' === a &&
                                                                s.subscribe(
                                                                    (0, $e.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : o(e),
                                                            r = $e.LO.box(n, { equals: Ue });
                                                        return (
                                                            'real' === a &&
                                                                s.subscribe(
                                                                    (0, $e.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = o(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = $e.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    s.subscribe(
                                                                        (0, $e.aD)((t) => {
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
                                                                    (e, [t, a]) => ((e[a] = $e.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    s.subscribe(
                                                                        (0, $e.aD)((e) => {
                                                                            i.forEach(([t, a]) => {
                                                                                l[a].set(e[t]);
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
                                            m = { mode: a, model: c, externalModel: s, cleanup: d };
                                        return {
                                            model: c,
                                            controls: 'mocks' === a && r ? r.controls(m) : t(m),
                                            externalModel: s,
                                            mode: a,
                                        };
                                    },
                                    c = (0, s.useRef)(!1),
                                    m = (0, s.useState)(n),
                                    g = m[0],
                                    h = m[1],
                                    _ = (0, s.useState)(() => d(n, r, l)),
                                    b = _[0],
                                    v = _[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        c.current ? v(d(g, r, l)) : (c.current = !0);
                                    }, [l, g, r]),
                                    (0, s.useEffect)(() => {
                                        h(n);
                                    }, [n]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            b.externalModel.dispose(), u.current.forEach((e) => e());
                                        },
                                        [b],
                                    ),
                                    o().createElement(a.Provider, { value: b }, i)
                                );
                            },
                            () => (0, s.useContext)(a),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    { rating: $e.LO.box(ke.Unset), ratingButtons: e.array('ratingButtons', []) },
                                    e.primitives([
                                        'isFrontline',
                                        'isFreecamAvailable',
                                        'isBlinking',
                                        'hasLivesAvailable',
                                        'isRatingWidgetEnabled',
                                        'isRatingWidgetVisible',
                                    ]),
                                ),
                                a = (0, Ve.Om)(() => {
                                    return (
                                        (e = t.ratingButtons.get()),
                                        (a = Ge),
                                        Array.isArray(e)
                                            ? e.map(a)
                                            : e.map((e, t, n) => a(null == e ? void 0 : e.value, t, n))
                                    );
                                    var e, a;
                                }),
                                n = (0, Ve.Om)(() => a().map((e) => e.buttonVariant));
                            return Object.assign({}, t, { computes: { getRatingButtons: a, getButtonOrder: n } });
                        },
                        ({ externalModel: e, model: t }) => ({
                            onRateButtonClick: (0, $e.aD)(
                                e.createCallback((e) => (t.rating.set(e), { rating: e }), 'onRateButtonClick'),
                            ),
                        }),
                    ),
                    qe = Xe[0],
                    Qe = Xe[1],
                    Ke = 'RateButton_base_b4',
                    Je = 'RateButton_base__hovered_92',
                    Ye = 'RateButton_base__neutral_e1',
                    Ze = 'RateButton_base__negative_0a',
                    et = 'RateButton_base__selected_50',
                    tt = 'RateButton_base__animate_f4',
                    at = 'RateButton_base__positive_ee',
                    nt = 'RateButton_base__disabled_71',
                    rt = ['variant', 'selected', 'className', 'isHovered', 'isUnset'];
                function it() {
                    return (
                        (it = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        it.apply(null, arguments)
                    );
                }
                const lt = { [ke.Better]: at, [ke.Usual]: Ye, [ke.Worse]: Ze, [ke.Unset]: null },
                    st = (e) => {
                        let t = e.variant,
                            a = e.selected,
                            n = e.className,
                            r = e.isHovered,
                            i = e.isUnset,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, rt);
                        return o().createElement(
                            'button',
                            it({ className: we()(r && Je, !i && tt, Ke, n, lt[t], a && et, l.disabled && nt) }, l),
                        );
                    },
                    ot = {
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
                    ut = (0, Ne.Pi)(() => {
                        const e = Qe(),
                            t = e.controls,
                            a = e.model,
                            n = a.rating.get(),
                            r = a.isRatingWidgetVisible.get(),
                            i = a.computes.getRatingButtons(),
                            l = (0, s.useState)(!1),
                            u = l[0],
                            d = l[1],
                            c = a.computes.getButtonOrder(),
                            m = n !== ke.Unset,
                            g = i.reduce(
                                (e, t, a) => (
                                    a < i.length &&
                                        null !== t.feedbackString &&
                                        (e[t.buttonVariant] = t.feedbackString),
                                    e
                                ),
                                {},
                            )[n];
                        return o().createElement(
                            'div',
                            {
                                className: we()(ot.base, (!r || m) && ot.base_selected, !r && ot.base__without_delay),
                                onMouseEnter: () => {
                                    d(!0);
                                },
                            },
                            o().createElement(
                                'div',
                                {
                                    className: we()(
                                        ot.base_text,
                                        n === c[0] && ot.base_text__negative,
                                        n === c[1] && ot.base_text__neutral,
                                        n === c[2] && ot.base_text__positive,
                                    ),
                                },
                                g,
                            ),
                            o().createElement(
                                'div',
                                { className: ot.base_buttons },
                                c.map(
                                    (e) =>
                                        e !== ke.Unset &&
                                        o().createElement(st, {
                                            key: e,
                                            variant: e,
                                            className: ot.base_button,
                                            selected: n === e,
                                            onClick: () => {
                                                t.onRateButtonClick(e);
                                            },
                                            onMouseEnter: () => {
                                                f('highlight');
                                            },
                                            disabled: e !== n && m,
                                            isHovered: u,
                                            isUnset: m,
                                        }),
                                ),
                            ),
                        );
                    });
                var dt = a(7030);
                const ct = {
                        base: 'HintButton_base_19',
                        base__small: 'HintButton_base__small_63',
                        btnInner: 'HintButton_btnInner_e4',
                        btnOuter: 'HintButton_btnOuter_f9',
                        btnOuter__blink: 'HintButton_btnOuter__blink_e7',
                        animationContainer: 'HintButton_animationContainer_c5',
                        buttonContainer: 'HintButton_buttonContainer_2a',
                        btnInner__blink: 'HintButton_btnInner__blink_75',
                    },
                    mt = ({ btnText: e, hasBlinkAnimation: t = !1, isBlinking: a = !1, isSmall: n = !1 }) => {
                        const r = (0, s.useState)(!1),
                            i = r[0],
                            l = r[1],
                            u = we()(ct.btnOuter, ct.btnOuter__blink),
                            d = we()(ct.btnInner, ct.btnInner__blink),
                            c = (0, dt.useSpring)({
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
                                l(!!a);
                            }, [a]),
                            o().createElement(
                                'div',
                                { className: we()(ct.base, n && ct.__small) },
                                o().createElement(
                                    'div',
                                    { className: ct.btnContainer },
                                    o().createElement(
                                        'div',
                                        { className: ct.btnOuter },
                                        o().createElement('div', { className: ct.btnInner }, e),
                                    ),
                                ),
                                t &&
                                    a &&
                                    o().createElement(
                                        dt.animated.div,
                                        { className: ct.animationContainer, style: c },
                                        o().createElement(
                                            'div',
                                            { className: u },
                                            o().createElement('div', { className: d }, e),
                                        ),
                                    ),
                            )
                        );
                    },
                    gt = 'Hint_base_b3',
                    ht = 'Hint___small_95',
                    _t = 'Hint_header_d5',
                    bt = 'Hint_description_30',
                    vt = ({ headerText: e, descriptionText: t, isSmall: a = !1, className: n }) =>
                        o().createElement(
                            'div',
                            { className: we()(gt, a && ht, n) },
                            e && o().createElement('div', { className: _t }, e),
                            t && o().createElement('div', { className: bt }, t),
                        ),
                    ft = {
                        base: 'HintBar_base_63',
                        column: 'HintBar_column_74',
                        rating: 'HintBar_rating_40',
                        alignmentContainer: 'HintBar_alignmentContainer_4e',
                        container: 'HintBar_container_6c',
                        __small: 'HintBar___small_00',
                        __selected: 'HintBar___selected_7d',
                        roundOnRatingSelected: 'HintBar_roundOnRatingSelected_63',
                        __withoutDelay: 'HintBar___withoutDelay_7a',
                        icon: 'HintBar_icon_bb',
                        container__side: 'HintBar_container__side_61',
                        btnContainer: 'HintBar_btnContainer_21',
                        btnContainer__unavailable: 'HintBar_btnContainer__unavailable_2b',
                        btnContainer__small: 'HintBar_btnContainer__small_23',
                        seperator: 'HintBar_seperator_e1',
                    },
                    xt = R.strings.ingame_gui.postmortem.tips,
                    Et = R.images.gui.maps.icons.battle.postmortem,
                    wt = (0, Ne.Pi)(() => {
                        const e = Qe().model,
                            t = e.isFrontline.get(),
                            a = e.isRatingWidgetEnabled.get(),
                            n = e.isFreecamAvailable.get(),
                            r = e.hasLivesAvailable.get(),
                            i = e.isBlinking.get(),
                            l = e.rating.get() !== ke.Unset,
                            s = e.isRatingWidgetVisible.get(),
                            u = t ? Et.frontlineFollowBtn() : Et.defaultFollowBtn(),
                            d = t ? xt.observerModeFrontline.label() : xt.observerMode.label(),
                            c = we()(ft.btnContainer, !n && ft.btnContainer__unavailable),
                            m = n ? xt.freecam.label() : xt.freecamUnavailable.label(),
                            g = n ? xt.freecam.text() : xt.freecamUnavailable.text(),
                            h = R.strings.player_satisfaction.battle.widget.hintBarMouseText(),
                            _ = R.strings.player_satisfaction.battle.widget.hintBarKeyboardText(),
                            b = t ? xt.observerModeFrontline.text() : xt.observerMode.text(),
                            v = !0;
                        return a
                            ? o().createElement(
                                  'div',
                                  {
                                      className: we()(
                                          ft.container,
                                          ft.__small,
                                          (l || !s) && ft.__selected,
                                          !s && ft.__withoutDelay,
                                      ),
                                  },
                                  o().createElement(
                                      'div',
                                      { className: ft.container__side },
                                      o().createElement('div', {
                                          className: ft.icon,
                                          style: { backgroundImage: `url('${u}')` },
                                      }),
                                      o().createElement(vt, { className: ft.hint, headerText: h, isSmall: v }),
                                      n &&
                                          o().createElement(
                                              o().Fragment,
                                              null,
                                              o().createElement(
                                                  'div',
                                                  { className: c },
                                                  o().createElement(mt, {
                                                      btnText: xt.freecam.button(),
                                                      hasBlinkAnimation: !0,
                                                      isBlinking: i,
                                                      isSmall: v,
                                                  }),
                                              ),
                                              o().createElement(vt, { className: ft.hint, headerText: m, isSmall: v }),
                                          ),
                                  ),
                                  o().createElement(
                                      'div',
                                      { className: ft.container__side },
                                      r &&
                                          o().createElement(
                                              o().Fragment,
                                              null,
                                              o().createElement(
                                                  'div',
                                                  { className: we()(ft.btnContainer, ft.__small) },
                                                  o().createElement(mt, {
                                                      btnText: xt.exitHangar.button(),
                                                      isSmall: v,
                                                  }),
                                              ),
                                              o().createElement(vt, { className: ft.hint, headerText: _, isSmall: v }),
                                          ),
                                  ),
                              )
                            : o().createElement(
                                  'div',
                                  { className: ft.container },
                                  o().createElement('div', {
                                      className: ft.icon,
                                      style: { backgroundImage: `url('${u}')` },
                                  }),
                                  o().createElement(vt, { className: ft.hint, headerText: d, descriptionText: b }),
                                  n &&
                                      o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement(
                                              'div',
                                              { className: c },
                                              o().createElement(mt, {
                                                  btnText: xt.freecam.button(),
                                                  hasBlinkAnimation: !0,
                                                  isBlinking: i,
                                              }),
                                          ),
                                          o().createElement(vt, {
                                              className: ft.hint,
                                              headerText: m,
                                              descriptionText: g,
                                          }),
                                      ),
                                  r &&
                                      o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement(
                                              'div',
                                              { className: ft.btnContainer },
                                              o().createElement(mt, { btnText: xt.exitHangar.button() }),
                                          ),
                                          o().createElement(vt, {
                                              className: ft.hint,
                                              headerText: xt.exitHangar.label(),
                                              descriptionText: xt.exitHangar.text(),
                                          }),
                                      ),
                              );
                    }),
                    pt = 'PostmortemPanelViewApp_base_7e',
                    St = 'PostmortemPanelViewApp_column_69',
                    Ht = 'PostmortemPanelViewApp_bottom_line_28',
                    Lt = 'PostmortemPanelViewApp_bottom_line__selected_af',
                    yt = (0, Ne.Pi)(() => {
                        const e = Qe().model,
                            t = e.isRatingWidgetEnabled.get(),
                            a = e.rating.get();
                        return o().createElement(
                            'div',
                            { className: pt },
                            o().createElement(
                                'div',
                                { className: St },
                                t && o().createElement(ut, null),
                                t && o().createElement('div', { className: we()(Ht, a !== ke.Unset && Lt) }),
                                o().createElement(wt, null),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    De().render(
                        o().createElement(Ie, null, o().createElement(qe, null, o().createElement(yt, null))),
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
        a = {};
    function n(e) {
        var r = a[e];
        if (void 0 !== r) return r.exports;
        var i = (a[e] = { exports: {} });
        return t[e](i, i.exports, n), i.exports;
    }
    (n.m = t),
        (e = []),
        (n.O = (t, a, r, i) => {
            if (!a) {
                var l = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [a, r, i] = e[d], s = !0, o = 0; o < a.length; o++)
                        (!1 & i || l >= i) && Object.keys(n.O).every((e) => n.O[e](a[o]))
                            ? a.splice(o--, 1)
                            : ((s = !1), i < l && (l = i));
                    if (s) {
                        e.splice(d--, 1);
                        var u = r();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
            e[d] = [a, r, i];
        }),
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, { a: t }), t;
        }),
        (n.d = (e, t) => {
            for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (n.j = 82),
        (() => {
            var e = { 82: 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var r,
                        i,
                        [l, s, o] = a,
                        u = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (r in s) n.o(s, r) && (n.m[r] = s[r]);
                        if (o) var d = o(n);
                    }
                    for (t && t(a); u < l.length; u++) (i = l[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return n.O(d);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var r = n.O(void 0, [532], () => n(1663));
    r = n.O(r);
})();
