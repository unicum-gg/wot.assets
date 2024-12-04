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
            8680: (e, t, n) => {
                'use strict';
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => w, off: () => f, on: () => h, onResize: () => d, onScaleUpdated: () => g });
                var a = {};
                n.r(a),
                    n.d(a, {
                        events: () => r,
                        getMouseGlobalPosition: () => _,
                        getSize: () => x,
                        graphicsQuality: () => S,
                        playSound: () => b,
                        setRTPC: () => E,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => T, getTextureUrl: () => H });
                var l = {};
                n.r(l),
                    n.d(l, {
                        addModelObserver: () => D,
                        addPreloadTexture: () => O,
                        children: () => i,
                        displayStatus: () => M,
                        displayStatusIs: () => ee,
                        events: () => A,
                        extraSize: () => te,
                        forceTriggerMouseMove: () => K,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => $,
                        getDisplayStatus: () => Y,
                        getFontNames: () => Z,
                        getScale: () => U,
                        getSize: () => G,
                        getViewGlobalPosition: () => j,
                        isEventHandled: () => J,
                        isFocused: () => X,
                        pxToRem: () => B,
                        remToPx: () => V,
                        resize: () => N,
                        sendEvent: () => I,
                        setAnimateWindow: () => q,
                        setEventHandled: () => Q,
                        setInputPaddingsRem: () => k,
                        setSidePaddingsRem: () => z,
                        whenTutorialReady: () => ne,
                    });
                var o = n(6179),
                    s = n.n(o);
                const u = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                function c(e) {
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
                const d = c('clientResized'),
                    g = c('self.onScaleUpdated'),
                    h = (e, t) => engine.on(e, t),
                    f = (e, t) => engine.off(e, t),
                    v = { down: c('mousedown'), up: c('mouseup'), move: c('mousemove') },
                    w = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && m(!1);
                        }
                        function n() {
                            e.enabled && m(!0);
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
                                : m(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const i = `mouse${t}`,
                                            l = v[t]((e) => n([e, 'outside']));
                                        function o(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, o),
                                            r(),
                                            () => {
                                                a &&
                                                    (l(),
                                                    window.removeEventListener(i, o),
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
                                (e.enabled = !1), r();
                            },
                            enable() {
                                (e.enabled = !0), r();
                            },
                            enableOutside() {
                                e.enabled && m(!0);
                            },
                            disableOutside() {
                                e.enabled && m(!1);
                            },
                        });
                    })();
                function b(e) {
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
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const S = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(p).reduce((e, t) => ((e[t] = () => b(p[t])), e), {}),
                    L = { play: Object.assign({}, y, { sound: b }), setRTPC: E };
                function H(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function T(e, t, n) {
                    return `url(${H(e, t, n)})`;
                }
                const M = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    A = {
                        onTextureFrozen: c('self.onTextureFrozen'),
                        onTextureReady: c('self.onTextureReady'),
                        onDomBuilt: c('self.onDomBuilt'),
                        onLoaded: c('self.onLoaded'),
                        onDisplayChanged: c('self.onShowingStatusChanged'),
                        onFocusUpdated: c('self.onFocusChanged'),
                        children: {
                            onAdded: c('children.onAdded'),
                            onLoaded: c('children.onLoaded'),
                            onRemoved: c('children.onRemoved'),
                            onAttached: c('children.onAttached'),
                            onTextureReady: c('children.onTextureReady'),
                            onRequestPosition: c('children.requestPosition'),
                        },
                    },
                    P = ['args'],
                    C = (e, t) => {
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
                                })(t, P);
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
                    I = {
                        close(e) {
                            C('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            C(64);
                        },
                        move(e) {
                            C(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    W = 15;
                function O(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function k(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, W);
                }
                function $(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function D(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, W);
                }
                function G(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function j(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: V(t.x), y: V(t.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function V(e) {
                    return viewEnv.remToPx(e);
                }
                function q(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function X() {
                    return viewEnv.isFocused();
                }
                function Q() {
                    return viewEnv.setEventHandled();
                }
                function J() {
                    return viewEnv.isEventHandled();
                }
                function K() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Y() {
                    return viewEnv.getShowingStatus();
                }
                const Z = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ee = Object.keys(M).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === M[t]), e), {}),
                    te = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ne = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : A.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    re = { view: l, client: a, sound: L },
                    ae = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var ie;
                function le(e, t, n) {
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
                })(ie || (ie = {}));
                const oe = re.client.getSize('rem'),
                    se = oe.width,
                    ue = oe.height,
                    ce = Object.assign({ width: se, height: ue }, le(se, ue, ae)),
                    me = (0, o.createContext)(ce),
                    de = ['children'],
                    ge = (e) => {
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
                            })(e, de);
                        const r = (0, o.useContext)(me),
                            a = r.extraLarge,
                            i = r.large,
                            l = r.medium,
                            s = r.small,
                            c = r.extraSmall,
                            m = r.extraLargeWidth,
                            d = r.largeWidth,
                            g = r.mediumWidth,
                            h = r.smallWidth,
                            f = r.extraSmallWidth,
                            v = r.extraLargeHeight,
                            w = r.largeHeight,
                            b = r.mediumHeight,
                            E = r.smallHeight,
                            x = r.extraSmallHeight,
                            _ = { extraLarge: v, large: w, medium: b, small: E, extraSmall: x };
                        if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                            if (n.extraLarge && a) return t;
                            if (n.large && i) return t;
                            if (n.medium && l) return t;
                            if (n.small && s) return t;
                            if (n.extraSmall && c) return t;
                        } else {
                            if (n.extraLargeWidth && m) return u(t, n, _);
                            if (n.largeWidth && d) return u(t, n, _);
                            if (n.mediumWidth && g) return u(t, n, _);
                            if (n.smallWidth && h) return u(t, n, _);
                            if (n.extraSmallWidth && f) return u(t, n, _);
                            if (
                                !(
                                    n.extraLargeWidth ||
                                    n.largeWidth ||
                                    n.mediumWidth ||
                                    n.smallWidth ||
                                    n.extraSmallWidth
                                )
                            ) {
                                if (n.extraLargeHeight && v) return t;
                                if (n.largeHeight && w) return t;
                                if (n.mediumHeight && b) return t;
                                if (n.smallHeight && E) return t;
                                if (n.extraSmallHeight && x) return t;
                            }
                        }
                        return null;
                    };
                (ge.defaultProps = {
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
                    (0, o.memo)(ge);
                const he = ({ children: e }) => {
                    const t = (0, o.useContext)(me),
                        n = (0, o.useState)(t),
                        r = n[0],
                        a = n[1],
                        i = (0, o.useCallback)((e, t) => {
                            const n = re.view.pxToRem(e),
                                r = re.view.pxToRem(t);
                            a(Object.assign({ width: n, height: r }, le(n, r, ae)));
                        }, []),
                        l = (0, o.useCallback)(() => {
                            const e = re.client.getSize('px');
                            i(e.width, e.height);
                        }, [i]);
                    ((e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        re.client.events.on('clientResized', i), re.client.events.on('self.onScaleUpdated', l);
                    }),
                        (0, o.useEffect)(
                            () => () => {
                                re.client.events.off('clientResized', i),
                                    re.client.events.off('self.onScaleUpdated', l);
                            },
                            [i, l],
                        );
                    const u = (0, o.useMemo)(() => Object.assign({}, r), [r]);
                    return s().createElement(me.Provider, { value: u }, e);
                };
                var fe = n(6483),
                    ve = n.n(fe),
                    we = n(926),
                    be = n.n(we);
                let Ee, xe, _e;
                !(function (e) {
                    (e[(e.ExtraSmall = ae.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = ae.small.width)] = 'Small'),
                        (e[(e.Medium = ae.medium.width)] = 'Medium'),
                        (e[(e.Large = ae.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = ae.extraLarge.width)] = 'ExtraLarge');
                })(Ee || (Ee = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = ae.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = ae.small.width)] = 'Small'),
                            (e[(e.Medium = ae.medium.width)] = 'Medium'),
                            (e[(e.Large = ae.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = ae.extraLarge.width)] = 'ExtraLarge');
                    })(xe || (xe = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = ae.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = ae.small.height)] = 'Small'),
                            (e[(e.Medium = ae.medium.height)] = 'Medium'),
                            (e[(e.Large = ae.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = ae.extraLarge.height)] = 'ExtraLarge');
                    })(_e || (_e = {}));
                const Se = ['children', 'className'];
                function pe() {
                    return (
                        (pe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        pe.apply(null, arguments)
                    );
                }
                const ye = {
                        [xe.ExtraSmall]: '',
                        [xe.Small]: be().SMALL_WIDTH,
                        [xe.Medium]: `${be().SMALL_WIDTH} ${be().MEDIUM_WIDTH}`,
                        [xe.Large]: `${be().SMALL_WIDTH} ${be().MEDIUM_WIDTH} ${be().LARGE_WIDTH}`,
                        [xe.ExtraLarge]: `${be().SMALL_WIDTH} ${be().MEDIUM_WIDTH} ${be().LARGE_WIDTH} ${be().EXTRA_LARGE_WIDTH}`,
                    },
                    Le = {
                        [_e.ExtraSmall]: '',
                        [_e.Small]: be().SMALL_HEIGHT,
                        [_e.Medium]: `${be().SMALL_HEIGHT} ${be().MEDIUM_HEIGHT}`,
                        [_e.Large]: `${be().SMALL_HEIGHT} ${be().MEDIUM_HEIGHT} ${be().LARGE_HEIGHT}`,
                        [_e.ExtraLarge]: `${be().SMALL_HEIGHT} ${be().MEDIUM_HEIGHT} ${be().LARGE_HEIGHT} ${be().EXTRA_LARGE_HEIGHT}`,
                    },
                    He = {
                        [Ee.ExtraSmall]: '',
                        [Ee.Small]: be().SMALL,
                        [Ee.Medium]: `${be().SMALL} ${be().MEDIUM}`,
                        [Ee.Large]: `${be().SMALL} ${be().MEDIUM} ${be().LARGE}`,
                        [Ee.ExtraLarge]: `${be().SMALL} ${be().MEDIUM} ${be().LARGE} ${be().EXTRA_LARGE}`,
                    },
                    Te = (e) => {
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
                            })(e, Se);
                        const a = (() => {
                                const e = (0, o.useContext)(me),
                                    t = e.width,
                                    n = e.height,
                                    r = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return Ee.ExtraLarge;
                                            case e.large:
                                                return Ee.Large;
                                            case e.medium:
                                                return Ee.Medium;
                                            case e.small:
                                                return Ee.Small;
                                            case e.extraSmall:
                                                return Ee.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), Ee.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return xe.ExtraLarge;
                                            case e.largeWidth:
                                                return xe.Large;
                                            case e.mediumWidth:
                                                return xe.Medium;
                                            case e.smallWidth:
                                                return xe.Small;
                                            case e.extraSmallWidth:
                                                return xe.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), xe.ExtraSmall
                                                );
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
                                                return (
                                                    console.error('Unreachable media context resolution'), _e.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: r,
                                    mediaWidth: a,
                                    mediaHeight: i,
                                    remScreenWidth: t,
                                    remScreenHeight: n,
                                };
                            })(),
                            i = a.mediaWidth,
                            l = a.mediaHeight,
                            u = a.mediaSize;
                        return s().createElement('div', pe({ className: ve()(n, ye[i], Le[l], He[u]) }, r), t);
                    },
                    Me = ['children'],
                    Ae = (e) => {
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
                            })(e, Me);
                        return s().createElement(he, null, s().createElement(Te, n, t));
                    };
                var Pe = n(493),
                    Ce = n.n(Pe);
                const Re = !0,
                    Ie = 'play',
                    We = [
                        'width',
                        'height',
                        'getImageSource',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'lastFrameIndex',
                        'loop',
                        'state',
                        'onAnimationDone',
                        'onAnimationComplete',
                        'poster',
                    ];
                function Oe() {
                    return (
                        (Oe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Oe.apply(null, arguments)
                    );
                }
                const ke = (0, o.memo)(function (e) {
                        let t = e.width,
                            n = e.height,
                            r = e.getImageSource,
                            a = e.frameCount,
                            i = e.onAnimate,
                            l = e.frameTime,
                            u = void 0 === l ? 33 : l,
                            c = e.initialFrameIndex,
                            m = void 0 === c ? 0 : c,
                            d = e.lastFrameIndex,
                            g = void 0 === d ? a - 1 : d,
                            h = e.loop,
                            f = void 0 === h ? Re : h,
                            v = e.state,
                            w = void 0 === v ? Ie : v,
                            b = e.onAnimationDone,
                            E = e.onAnimationComplete,
                            x = e.poster,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, We);
                        const S = (0, o.useRef)(null);
                        return (
                            (0, o.useEffect)(() => {
                                const e = S.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    n = (n) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(n.img, -n.x, -n.y);
                                    };
                                switch (w) {
                                    case 'play':
                                        return (function () {
                                            const e = ze(m, g, r),
                                                t = $e(m, g),
                                                a = window.setInterval(() => {
                                                    const r = t(),
                                                        l = e.get(r);
                                                    l
                                                        ? (null == i || i(r, l),
                                                          n(l),
                                                          r === g &&
                                                              (null == E || E(),
                                                              f || (null == b || b(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, u);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === m && x ? { path: x, x: 0, y: 0 } : r(m),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => n(De(e, t));
                                            return (
                                                t.addEventListener('load', a), () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [u, r, m, g, f, i, E, b, x, w]),
                            s().createElement('canvas', Oe({}, _, { width: t, height: n, ref: S }))
                        );
                    }),
                    $e = (e, t) => {
                        let n = e;
                        return () => {
                            const r = n;
                            return (n += 1), n > t && (n = e), r;
                        };
                    },
                    De = (e, t) => Object.assign({}, e, { img: t }),
                    ze = (e, t, n) => {
                        const r = new Map(),
                            a = {};
                        for (let i = e; i <= t; i++) {
                            const e = n(i),
                                t = a[e.path];
                            if (t) r.set(i, De(e, t));
                            else {
                                const t = new Image();
                                (a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${i})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    r.set(i, De(e, t));
                            }
                        }
                        return r;
                    },
                    Ge = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    Ne = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function je() {
                    return (
                        (je = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        je.apply(null, arguments)
                    );
                }
                const Fe = (e) => {
                    let t = e.size,
                        n = e.value,
                        r = e.isEmpty,
                        a = e.fadeInAnimation,
                        i = e.hide,
                        l = e.maximumNumber,
                        o = e.className,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, Ne);
                    const c = r ? null : n,
                        m = 'string' == typeof c;
                    if ((c && !m && c < 0) || 0 === c) return null;
                    const d = c && !m && c > l,
                        g = ve()(
                            Ge.base,
                            Ge[`base__${t}`],
                            a && Ge.base__animated,
                            i && Ge.base__hidden,
                            !c && Ge.base__pattern,
                            r && Ge.base__empty,
                            o,
                        );
                    return s().createElement(
                        'div',
                        je({ className: g }, u),
                        s().createElement('div', { className: Ge.bg }),
                        s().createElement('div', { className: Ge.pattern }),
                        s().createElement(
                            'div',
                            { className: ve()(Ge.value, m && Ge.value__text) },
                            d ? l : c,
                            d && s().createElement('span', { className: Ge.plus }, '+'),
                        ),
                    );
                };
                Fe.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Ue = {
                    base: 'EntryPoint_base_aa',
                    bg: 'EntryPoint_bg_ae',
                    base__disabled: 'EntryPoint_base__disabled_dd',
                    stroke: 'EntryPoint_stroke_b5',
                    base__big: 'EntryPoint_base__big_9c',
                    base__wideSmall: 'EntryPoint_base__wideSmall_bf',
                    base__thinSmall: 'EntryPoint_base__thinSmall_7e',
                    base__thinExtraSmall: 'EntryPoint_base__thinExtraSmall_95',
                    highlight: 'EntryPoint_highlight_e7',
                    container: 'EntryPoint_container_72',
                    particles: 'EntryPoint_particles_2a',
                    new: 'EntryPoint_new_2c',
                    content: 'EntryPoint_content_db',
                    title: 'EntryPoint_title_c5',
                    subtitle: 'EntryPoint_subtitle_b8',
                };
                function Be() {
                    return (
                        (Be = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Be.apply(null, arguments)
                    );
                }
                let Ve;
                !(function (e) {
                    (e.Big = 'big'),
                        (e.WideSmall = 'wideSmall'),
                        (e.ThinSmall = 'thinSmall'),
                        (e.ThinExtraSmall = 'thinExtraSmall');
                })(Ve || (Ve = {}));
                const qe = '302*152',
                    Xe = '302*114',
                    Qe = '222*114',
                    Je = '162*114',
                    Ke = { [qe]: Ve.Big, [Xe]: Ve.WideSmall, [Qe]: Ve.ThinSmall, [Je]: Ve.ThinExtraSmall },
                    Ye = {
                        width: 280,
                        height: 170,
                        frameCount: 136,
                        chunk: { count: 1, rows: 20, columns: 7 },
                        getChunkPath: () => 'R.images.story_mode.gui.maps.icons.entryPoint.particles_sequence',
                    },
                    Ze = (function (e) {
                        const t = e.chunk,
                            n = t.rows * t.columns;
                        return (r) => {
                            const a = r % n,
                                i = (a % t.columns) * e.width,
                                l = Math.trunc(a / t.columns) * e.height;
                            return { path: e.getChunkPath(Math.trunc(r / n)), x: i, y: l };
                        };
                    })(Ye),
                    et = (0, o.memo)(function ({
                        title: e,
                        subtitle: t,
                        bgFolderName: n,
                        isNew: r,
                        onClick: a,
                        onHoverForSetTime: i,
                        onLeaveAfterSetTime: l,
                    }) {
                        const u = (0, o.useState)(!1),
                            c = u[0],
                            m = u[1],
                            d = (0, o.useState)(Ve.Big),
                            g = d[0],
                            h = d[1],
                            f = (function () {
                                const e = (0, o.useRef)(0);
                                var t;
                                return (
                                    (t = () => {
                                        window.clearTimeout(e.current);
                                    }),
                                    (0, o.useEffect)(() => t, []),
                                    (0, o.useMemo)(
                                        () => ({
                                            run: (t, n) => {
                                                window.clearTimeout(e.current),
                                                    (e.current = window.setTimeout(() => {
                                                        (e.current = 0), t();
                                                    }, n));
                                            },
                                            clear: () => {
                                                window.clearTimeout(e.current), (e.current = 0);
                                            },
                                            get isRunning() {
                                                return 0 !== e.current;
                                            },
                                        }),
                                        [],
                                    )
                                );
                            })(),
                            v = (0, o.useRef)(!1),
                            w = (0, o.useRef)(!1),
                            b = R.images.story_mode.gui.maps.icons.$dyn(n),
                            E = (function (e = {}, t = []) {
                                var n, r, a, i;
                                const l = (0, o.useState)(null != (n = e.state) ? n : Ie),
                                    s = l[0],
                                    u = l[1],
                                    c = (0, o.useState)(null != (r = e.initialFrameIndex) ? r : 0),
                                    m = c[0],
                                    d = c[1],
                                    g = (0, o.useState)(null != (a = e.frameTime) ? a : 33),
                                    h = g[0],
                                    f = g[1],
                                    v = (0, o.useState)(null != (i = e.loop) ? i : Re),
                                    w = v[0],
                                    b = v[1],
                                    E = (0, o.useRef)(m),
                                    x = (0, o.useCallback)((e) => {
                                        d(e), u('play');
                                    }, []),
                                    _ = (0, o.useCallback)((e) => {
                                        d(e), u('stop');
                                    }, []),
                                    S = (0, o.useCallback)(() => {
                                        d(0), u('stop');
                                    }, []),
                                    p = (0, o.useCallback)(() => u('play'), []),
                                    y = (0, o.useCallback)(() => {
                                        d(E.current + 1), u('stop');
                                    }, []);
                                return {
                                    props: {
                                        state: s,
                                        initialFrameIndex: m,
                                        frameTime: h,
                                        loop: w,
                                        onAnimate: (0, o.useCallback)((t, n) => {
                                            (E.current = t), null == e.onAnimate || e.onAnimate(t, n);
                                        }, t),
                                        onAnimationDone: (0, o.useCallback)(() => {
                                            S();
                                        }, t),
                                    },
                                    enableLoop: (0, o.useCallback)(() => b(!0), []),
                                    disableLoop: (0, o.useCallback)(() => b(!1), []),
                                    setState: u,
                                    setInitialFrameIndex: d,
                                    setFrameTime: f,
                                    goAndPlay: x,
                                    goAndStop: _,
                                    stop: S,
                                    play: p,
                                    pause: y,
                                };
                            })();
                        return (
                            (0, o.useEffect)(() => {
                                const e = () => {
                                    const e = re.view.getSize('rem'),
                                        t = Ke[`${e.width}*${e.height}`];
                                    t ? h(t) : console.warn(`Can't find banner size ${e.width}*${e.height}`);
                                };
                                return (
                                    re.client.events.on('screenResized', e),
                                    re.client.events.on('self.onScaleUpdated', e),
                                    e(),
                                    () => {
                                        re.client.events.off('screenResized', e),
                                            re.client.events.off('self.onScaleUpdated', e);
                                    }
                                );
                            }, []),
                            s().createElement(
                                'div',
                                {
                                    className: ve()(Ue.base, Ue[`base__${g}`]),
                                    onClick: () => {
                                        re.sound.play.click(), a();
                                    },
                                    onMouseEnter: () => {
                                        re.sound.play.highlight(),
                                            m(!0),
                                            (v.current = !0),
                                            f.run(() => {
                                                v.current && (i(), (w.current = !0));
                                            }, 2e3);
                                    },
                                    onMouseLeave: () => {
                                        m(!1), (v.current = !1), w.current && l(), (w.current = !1), f.clear();
                                    },
                                },
                                s().createElement('div', {
                                    className: Ue.bg,
                                    style: { backgroundImage: `url(${b.$dyn(`size_${g}`)})` },
                                }),
                                s().createElement('div', { className: Ue.stroke }),
                                c &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: Ue.highlight }),
                                        s().createElement(
                                            ke,
                                            Be({}, E.props, {
                                                width: Ye.width,
                                                height: Ye.height,
                                                frameCount: Ye.frameCount,
                                                getImageSource: Ze,
                                                frameTime: 50,
                                                className: Ue.particles,
                                                loop: !0,
                                            }),
                                        ),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: Ue.container, onMouseEnter: re.sound.play.highlight },
                                    s().createElement(Fe, {
                                        className: Ue.new,
                                        size: 'small',
                                        value: R.strings.sm_lobby.entryPoint.new(),
                                        hide: !r,
                                        fadeInAnimation: !0,
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: Ue.content },
                                        s().createElement('div', { className: Ue.title }, e),
                                        s().createElement('div', { className: Ue.subtitle }, t),
                                    ),
                                ),
                            )
                        );
                    });
                var tt = n(3403);
                function nt() {
                    return !1;
                }
                console.log;
                var rt = n(9174);
                function at(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const it = (e) => (0 === e ? window : window.subViews.get(e)),
                    lt = ((e, t) => {
                        const n = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: a, mocks: i }) {
                                const l = (0, o.useRef)([]),
                                    u = (e, n, r) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = it,
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
                                                const l = (e) => {
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
                                                        const o = 'string' == typeof i ? `${r}.${i}` : r,
                                                            s = re.view.addModelObserver(o, t, !0);
                                                        return a.set(s, n), e && n(l(i)), s;
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
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return at(e, t);
                                                                                var n = {}.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? at(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = n()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            o =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : o.readByPath(t),
                                            u = (e) => l.current.push(e),
                                            c = (({ observableModel: e }) =>
                                                e.primitives([
                                                    'startDate',
                                                    'endDate',
                                                    'isNew',
                                                    'title',
                                                    'subtitle',
                                                    'bgFolderName',
                                                ]))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const r = null != n ? n : s(t),
                                                            a = rt.LO.box(r, { equals: nt });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, rt.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : s(t),
                                                            a = rt.LO.box(r, { equals: nt });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, rt.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = s(n);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = rt.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, rt.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                a[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = t,
                                                                i = Object.entries(a),
                                                                l = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = rt.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, rt.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                l[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                l
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            m = { mode: e, model: c, externalModel: o, cleanup: u };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && r ? r.controls(m) : t(m),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    c = (0, o.useRef)(!1),
                                    m = (0, o.useState)(e),
                                    d = m[0],
                                    g = m[1],
                                    h = (0, o.useState)(() => u(e, r, i)),
                                    f = h[0],
                                    v = h[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        c.current ? v(u(d, r, i)) : (c.current = !0);
                                    }, [i, d, r]),
                                    (0, o.useEffect)(() => {
                                        g(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    s().createElement(n.Provider, { value: f }, a)
                                );
                            },
                            () => (0, o.useContext)(n),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        click: e.createCallbackNoArgs('onClick'),
                        hoverForSetTime: e.createCallbackNoArgs('onHoverForSetTime'),
                        leaveAfterSetTime: e.createCallbackNoArgs('onLeaveAfterSetTime'),
                    })),
                    ot = lt[0],
                    st = lt[1],
                    ut = (0, tt.Pi)(() => {
                        const e = st(),
                            t = e.controls,
                            n = e.model;
                        return s().createElement(et, {
                            title: n.title.get(),
                            subtitle: n.subtitle.get(),
                            bgFolderName: n.bgFolderName.get(),
                            isNew: n.isNew.get(),
                            onClick: t.click,
                            onLeaveAfterSetTime: t.hoverForSetTime,
                            onHoverForSetTime: t.leaveAfterSetTime,
                        });
                    });
                engine.whenReady.then(() => {
                    Ce().render(
                        s().createElement(ot, null, s().createElement(Ae, null, s().createElement(ut, null))),
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
        return t[e](i, i.exports, r), i.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, n, a, i) => {
            if (!n) {
                var l = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [n, a, i] = e[c], o = !0, s = 0; s < n.length; s++)
                        (!1 & i || l >= i) && Object.keys(r.O).every((e) => r.O[e](n[s]))
                            ? n.splice(s--, 1)
                            : ((o = !1), i < l && (l = i));
                    if (o) {
                        e.splice(c--, 1);
                        var u = a();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [n, a, i];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 375),
        (() => {
            var e = { 375: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        i,
                        [l, o, s] = n,
                        u = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (a in o) r.o(o, a) && (r.m[a] = o[a]);
                        if (s) var c = s(r);
                    }
                    for (t && t(n); u < l.length; u++) (i = l[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var a = r.O(void 0, [503], () => r(8680));
    a = r.O(a);
})();
