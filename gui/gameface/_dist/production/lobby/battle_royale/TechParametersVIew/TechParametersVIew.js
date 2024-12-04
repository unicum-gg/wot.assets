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
            104: (e, t, r) => {
                'use strict';
                var a = {};
                r.r(a),
                    r.d(a, { mouse: () => w, off: () => f, on: () => h, onResize: () => m, onScaleUpdated: () => g });
                var n = {};
                r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => L,
                        getSize: () => S,
                        graphicsQuality: () => b,
                        playSound: () => E,
                        setRTPC: () => x,
                    });
                var i = {};
                r.r(i), r.d(i, { getBgUrl: () => M, getTextureUrl: () => _ });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => z,
                        children: () => i,
                        displayStatus: () => T,
                        displayStatusIs: () => ne,
                        events: () => W,
                        extraSize: () => ie,
                        forceTriggerMouseMove: () => te,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => k,
                        getDisplayStatus: () => re,
                        getFontNames: () => ae,
                        getScale: () => X,
                        getSize: () => B,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => ee,
                        isFocused: () => Y,
                        pxToRem: () => Q,
                        remToPx: () => J,
                        resize: () => V,
                        sendEvent: () => $,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Z,
                        setInputPaddingsRem: () => j,
                        setSidePaddingsRem: () => N,
                        whenTutorialReady: () => le,
                    });
                var o = r(179),
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
                function L(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(p).reduce((e, t) => ((e[t] = () => E(p[t])), e), {}),
                    H = { play: Object.assign({}, y, { sound: E }), setRTPC: x };
                function _(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function M(e, t, r) {
                    return `url(${_(e, t, r)})`;
                }
                const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    A = ['args'];
                const P = 2,
                    O = 16,
                    I = 32,
                    G = 64,
                    D = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            r[a] = e[a];
                                        }
                                    return r;
                                })(t, A);
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
                    $ = {
                        close(e) {
                            D('popover' === e ? P : I);
                        },
                        minimize() {
                            D(G);
                        },
                        move(e) {
                            D(O, { isMouseEvent: !0, on: e });
                        },
                    },
                    C = 15;
                function z(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function j(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, C);
                }
                function k(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function U(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, C);
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function F(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: J(t.x), y: J(t.y) };
                }
                function q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function X() {
                    return viewEnv.getScale();
                }
                function Q(e) {
                    return viewEnv.pxToRem(e);
                }
                function J(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, t) {
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
                function re() {
                    return viewEnv.getShowingStatus();
                }
                const ae = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ne = Object.keys(T).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === T[t]), e), {}),
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
                    oe = { view: l, client: n, sound: H };
                const se = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var ue;
                function de(e, t, r) {
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
                const ce = oe.client.getSize('rem'),
                    me = ce.width,
                    ge = ce.height,
                    he = Object.assign({ width: me, height: ge }, de(me, ge, se)),
                    fe = (0, o.createContext)(he),
                    ve = ['children'];
                const we = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    r[a] = e[a];
                                }
                            return r;
                        })(e, ve);
                    const a = (0, o.useContext)(fe),
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
                        L = { extraLarge: v, large: w, medium: E, small: x, extraSmall: S };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && n) return t;
                        if (r.large && i) return t;
                        if (r.medium && l) return t;
                        if (r.small && s) return t;
                        if (r.extraSmall && d) return t;
                    } else {
                        if (r.extraLargeWidth && c) return u(t, r, L);
                        if (r.largeWidth && m) return u(t, r, L);
                        if (r.mediumWidth && g) return u(t, r, L);
                        if (r.smallWidth && h) return u(t, r, L);
                        if (r.extraSmallWidth && f) return u(t, r, L);
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
                we.defaultProps = {
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
                (0, o.memo)(we);
                const Ee = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    xe = ({ children: e }) => {
                        const t = (0, o.useContext)(fe),
                            r = (0, o.useState)(t),
                            a = r[0],
                            n = r[1],
                            i = (0, o.useCallback)((e, t) => {
                                const r = oe.view.pxToRem(e),
                                    a = oe.view.pxToRem(t);
                                n(Object.assign({ width: r, height: a }, de(r, a, se)));
                            }, []),
                            l = (0, o.useCallback)(() => {
                                const e = oe.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        Ee(() => {
                            oe.client.events.on('clientResized', i), oe.client.events.on('self.onScaleUpdated', l);
                        }),
                            (0, o.useEffect)(
                                () => () => {
                                    oe.client.events.off('clientResized', i),
                                        oe.client.events.off('self.onScaleUpdated', l);
                                },
                                [i, l],
                            );
                        const u = (0, o.useMemo)(() => Object.assign({}, a), [a]);
                        return s().createElement(fe.Provider, { value: u }, e);
                    };
                var Se = r(483),
                    Le = r.n(Se),
                    be = r(926),
                    pe = r.n(be);
                let ye, He, _e;
                !(function (e) {
                    (e[(e.ExtraSmall = se.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = se.small.width)] = 'Small'),
                        (e[(e.Medium = se.medium.width)] = 'Medium'),
                        (e[(e.Large = se.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = se.extraLarge.width)] = 'ExtraLarge');
                })(ye || (ye = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = se.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = se.small.width)] = 'Small'),
                            (e[(e.Medium = se.medium.width)] = 'Medium'),
                            (e[(e.Large = se.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = se.extraLarge.width)] = 'ExtraLarge');
                    })(He || (He = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = se.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = se.small.height)] = 'Small'),
                            (e[(e.Medium = se.medium.height)] = 'Medium'),
                            (e[(e.Large = se.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = se.extraLarge.height)] = 'ExtraLarge');
                    })(_e || (_e = {}));
                const Me = () => {
                        const e = (0, o.useContext)(fe),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return ye.ExtraLarge;
                                    case e.large:
                                        return ye.Large;
                                    case e.medium:
                                        return ye.Medium;
                                    case e.small:
                                        return ye.Small;
                                    case e.extraSmall:
                                        return ye.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ye.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return He.ExtraLarge;
                                    case e.largeWidth:
                                        return He.Large;
                                    case e.mediumWidth:
                                        return He.Medium;
                                    case e.smallWidth:
                                        return He.Small;
                                    case e.extraSmallWidth:
                                        return He.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), He.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return _e.ExtraLarge;
                                    case e.largeHeight:
                                        return _e.Large;
                                    case e.mediumHeight:
                                        return _e.Medium;
                                    case e.smallHeight:
                                        return _e.Small;
                                    case e.extraSmallHeight:
                                        return _e.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), _e.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: r };
                    },
                    Te = ['children', 'className'];
                function Re() {
                    return (
                        (Re = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                  }
                                  return e;
                              }),
                        Re.apply(null, arguments)
                    );
                }
                const We = {
                        [He.ExtraSmall]: '',
                        [He.Small]: pe().SMALL_WIDTH,
                        [He.Medium]: `${pe().SMALL_WIDTH} ${pe().MEDIUM_WIDTH}`,
                        [He.Large]: `${pe().SMALL_WIDTH} ${pe().MEDIUM_WIDTH} ${pe().LARGE_WIDTH}`,
                        [He.ExtraLarge]: `${pe().SMALL_WIDTH} ${pe().MEDIUM_WIDTH} ${pe().LARGE_WIDTH} ${pe().EXTRA_LARGE_WIDTH}`,
                    },
                    Ae = {
                        [_e.ExtraSmall]: '',
                        [_e.Small]: pe().SMALL_HEIGHT,
                        [_e.Medium]: `${pe().SMALL_HEIGHT} ${pe().MEDIUM_HEIGHT}`,
                        [_e.Large]: `${pe().SMALL_HEIGHT} ${pe().MEDIUM_HEIGHT} ${pe().LARGE_HEIGHT}`,
                        [_e.ExtraLarge]: `${pe().SMALL_HEIGHT} ${pe().MEDIUM_HEIGHT} ${pe().LARGE_HEIGHT} ${pe().EXTRA_LARGE_HEIGHT}`,
                    },
                    Pe = {
                        [ye.ExtraSmall]: '',
                        [ye.Small]: pe().SMALL,
                        [ye.Medium]: `${pe().SMALL} ${pe().MEDIUM}`,
                        [ye.Large]: `${pe().SMALL} ${pe().MEDIUM} ${pe().LARGE}`,
                        [ye.ExtraLarge]: `${pe().SMALL} ${pe().MEDIUM} ${pe().LARGE} ${pe().EXTRA_LARGE}`,
                    },
                    Oe = (e) => {
                        let t = e.children,
                            r = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        r[a] = e[a];
                                    }
                                return r;
                            })(e, Te);
                        const n = Me(),
                            i = n.mediaWidth,
                            l = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', Re({ className: Le()(r, We[i], Ae[l], Pe[o]) }, a), t);
                    },
                    Ie = ['children'];
                const Ge = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    r[a] = e[a];
                                }
                            return r;
                        })(e, Ie);
                    return s().createElement(xe, null, s().createElement(Oe, r, t));
                };
                var De = r(493),
                    $e = r.n(De);
                function Ce() {
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
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                var ze = r(403);
                function je() {
                    return !1;
                }
                console.log;
                var ke = r(174);
                function Ue(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return Ne(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === r && e.constructor && (r = e.constructor.name),
                                    'Map' === r || 'Set' === r
                                        ? Array.from(e)
                                        : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                          ? Ne(e, t)
                                          : void 0
                                );
                            }
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
                function Ne(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const Be = (e) => (0 === e ? window : window.subViews.get(e));
                var Ve = r(946);
                const Fe = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: n, children: i, mocks: l }) {
                                const u = (0, o.useRef)([]),
                                    d = (r, a, n) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Be,
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
                                                            s = oe.view.addModelObserver(o, t, !0);
                                                        return n.set(s, r), e && r(l(i)), s;
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
                                                        for (var e, r = Ue(n.keys()); !(e = r()).done; ) i(e.value, t);
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
                                                            n = ke.LO.box(a, { equals: je });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, ke.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = ke.LO.box(a, { equals: je });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, ke.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = ke.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, ke.aD)((t) => {
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
                                                                    (e, [t, r]) => ((e[r] = ke.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, ke.aD)((e) => {
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
                                            v.externalModel.dispose(), u.current.forEach((e) => e());
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
                                    vehicleCombatParams: (0, Ve.Om)(() =>
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
                    qe = Fe[0],
                    Xe = Fe[1];
                function Qe(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const Je = 'Button_base_8c',
                    Ke = 'Button_glow_a6',
                    Ye = 'Button_label_3d',
                    Ze = (0, ze.Pi)(() => {
                        const e = Xe().controls;
                        return s().createElement(
                            'div',
                            {
                                className: Je,
                                onClick: () => {
                                    Qe('play'), e.openTechTreeWindow();
                                },
                                onMouseEnter: () => {
                                    Qe('highlight');
                                },
                            },
                            s().createElement('div', { className: Ke }),
                            s().createElement('div', { className: Ye }, R.strings.battle_royale.button.modules()),
                        );
                    }),
                    et = 'Section_base_bd',
                    tt = 'Section_defaultSection_8c',
                    rt = 'Section_filledSection_7e',
                    at = 'Section_filledSection__fullSection_09',
                    nt = ({ filledSectionWidth: e }) => {
                        const t = e % 100 == 0;
                        return s().createElement(
                            'div',
                            { className: et, style: { width: '20%' } },
                            s().createElement('div', { className: tt }),
                            e > 0 &&
                                s().createElement('div', { className: Le()(rt, t && at), style: { width: `${e}%` } }),
                        );
                    },
                    it = 'Parameter_base_c0',
                    lt = 'Parameter_paramType_40',
                    ot = 'Parameter_iconContainer_93',
                    st = 'Parameter_wrapper_b9',
                    ut = 'Parameter_type_20',
                    dt = 'Parameter_text_db',
                    ct = 'Parameter_paramValuesContainer_e5',
                    mt = R.images.gui.maps.icons.battleRoyale.techParams,
                    gt = R.strings.battle_royale.techParams.type,
                    ht = ({ parameter: e }) => {
                        const t = e.type,
                            r = e.sectionValues;
                        return s().createElement(
                            'div',
                            { className: it },
                            s().createElement(
                                'div',
                                { className: lt },
                                s().createElement(
                                    'div',
                                    { className: ot },
                                    s().createElement(
                                        'div',
                                        { className: st },
                                        s().createElement('div', {
                                            className: ut,
                                            style: { backgroundImage: `url(${mt.$dyn(t)})` },
                                        }),
                                    ),
                                    s().createElement('div', { className: dt }, gt.$dyn(t)),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: ct },
                                r.map((e, t) => s().createElement(nt, { filledSectionWidth: e, key: t })),
                            ),
                        );
                    },
                    ft = 'App_base_e7',
                    vt = 'App_container_87',
                    wt = (0, ze.Pi)(() => {
                        const e = s().useRef(null),
                            t = Xe(),
                            r = t.controls,
                            a = t.model,
                            n = Ce();
                        var i;
                        return (
                            (i = () => {
                                oe.view.setSidePaddingsRem({ left: 50, right: 0, top: 0, bottom: 0 });
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
                                { className: ft, ref: e },
                                s().createElement(
                                    'div',
                                    { className: vt },
                                    a.computes
                                        .vehicleCombatParams()
                                        .map((e, t) => s().createElement(ht, { parameter: e, key: t })),
                                ),
                                s().createElement(Ze, null),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    $e().render(
                        s().createElement(qe, null, s().createElement(Ge, null, s().createElement(wt, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        r = {};
    function a(e) {
        var n = r[e];
        if (void 0 !== n) return n.exports;
        var i = (r[e] = { exports: {} });
        return t[e](i, i.exports, a), i.exports;
    }
    (a.m = t),
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
                    for (t && t(r); u < l.length; u++) (i = l[u]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return a.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var n = a.O(void 0, [695], () => a(104));
    n = a.O(n);
})();
