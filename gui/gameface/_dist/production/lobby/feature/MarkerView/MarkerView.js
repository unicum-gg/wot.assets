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
            3576: (e, t, r) => {
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
                        playSound: () => E,
                        setRTPC: () => w,
                    }));
                var i = {};
                (r.r(i), r.d(i, { getBgUrl: () => _, getTextureUrl: () => M }));
                var l = {};
                (r.r(l),
                    r.d(l, {
                        addModelObserver: () => z,
                        addPreloadTexture: () => D,
                        children: () => i,
                        displayStatus: () => T,
                        displayStatusIs: () => ee,
                        events: () => W,
                        extraSize: () => te,
                        forceTriggerMouseMove: () => K,
                        freezeTextureBeforeResize: () => N,
                        getBrowserTexturePath: () => C,
                        getDisplayStatus: () => Y,
                        getFontNames: () => Z,
                        getScale: () => B,
                        getSize: () => k,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => J,
                        isFocused: () => q,
                        pxToRem: () => V,
                        remToPx: () => F,
                        resize: () => j,
                        sendEvent: () => I,
                        setAnimateWindow: () => X,
                        setEventHandled: () => Q,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => $,
                        whenTutorialReady: () => re,
                    }));
                var o = r(6179),
                    s = r.n(o);
                const d = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
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
                function m(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const c = u('clientResized'),
                    g = u('self.onScaleUpdated'),
                    h = (e, t) => engine.on(e, t),
                    f = (e, t) => engine.off(e, t),
                    v = { down: u('mousedown'), up: u('mouseup'), move: u('mousemove') },
                    x = (function () {
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
                function E(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function w(e, t) {
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
                    H = { play: Object.assign({}, y, { sound: E }), setRTPC: w };
                function M(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function _(e, t, r) {
                    return `url(${M(e, t, r)})`;
                }
                const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    W = {
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
                    A = ['args'],
                    O = (e, t) => {
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
                    I = {
                        close(e) {
                            O('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            O(64);
                        },
                        move(e) {
                            O(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    P = 15;
                function D(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, P);
                }
                function C(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function z(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, P);
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function j(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function U(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function N() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function V(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function X(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function q() {
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
                    ee = Object.keys(T).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === T[t]), e), {}),
                    te = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    re = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : W.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ae = { view: l, client: n, sound: H },
                    ne = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var ie;
                function le(e, t, r) {
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
                })(ie || (ie = {}));
                const oe = ae.client.getSize('rem'),
                    se = oe.width,
                    de = oe.height,
                    ue = Object.assign({ width: se, height: de }, le(se, de, ne)),
                    me = (0, o.createContext)(ue),
                    ce = ['children'],
                    ge = (e) => {
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
                            })(e, ce);
                        const a = (0, o.useContext)(me),
                            n = a.extraLarge,
                            i = a.large,
                            l = a.medium,
                            s = a.small,
                            u = a.extraSmall,
                            m = a.extraLargeWidth,
                            c = a.largeWidth,
                            g = a.mediumWidth,
                            h = a.smallWidth,
                            f = a.extraSmallWidth,
                            v = a.extraLargeHeight,
                            x = a.largeHeight,
                            E = a.mediumHeight,
                            w = a.smallHeight,
                            S = a.extraSmallHeight,
                            L = { extraLarge: v, large: x, medium: E, small: w, extraSmall: S };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && n) return t;
                            if (r.large && i) return t;
                            if (r.medium && l) return t;
                            if (r.small && s) return t;
                            if (r.extraSmall && u) return t;
                        } else {
                            if (r.extraLargeWidth && m) return d(t, r, L);
                            if (r.largeWidth && c) return d(t, r, L);
                            if (r.mediumWidth && g) return d(t, r, L);
                            if (r.smallWidth && h) return d(t, r, L);
                            if (r.extraSmallWidth && f) return d(t, r, L);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && v) return t;
                                if (r.largeHeight && x) return t;
                                if (r.mediumHeight && E) return t;
                                if (r.smallHeight && w) return t;
                                if (r.extraSmallHeight && S) return t;
                            }
                        }
                        return null;
                    };
                ((ge.defaultProps = {
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
                    (0, o.memo)(ge));
                const he = ({ children: e }) => {
                    const t = (0, o.useContext)(me),
                        r = (0, o.useState)(t),
                        a = r[0],
                        n = r[1],
                        i = (0, o.useCallback)((e, t) => {
                            const r = ae.view.pxToRem(e),
                                a = ae.view.pxToRem(t);
                            n(Object.assign({ width: r, height: a }, le(r, a, ne)));
                        }, []),
                        l = (0, o.useCallback)(() => {
                            const e = ae.client.getSize('px');
                            i(e.width, e.height);
                        }, [i]);
                    (((e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        (ae.client.events.on('clientResized', i), ae.client.events.on('self.onScaleUpdated', l));
                    }),
                        (0, o.useEffect)(
                            () => () => {
                                (ae.client.events.off('clientResized', i),
                                    ae.client.events.off('self.onScaleUpdated', l));
                            },
                            [i, l],
                        ));
                    const d = (0, o.useMemo)(() => Object.assign({}, a), [a]);
                    return s().createElement(me.Provider, { value: d }, e);
                };
                var fe = r(6483),
                    ve = r.n(fe),
                    xe = r(926),
                    Ee = r.n(xe);
                let we, Se, Le;
                (!(function (e) {
                    ((e[(e.ExtraSmall = ne.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = ne.small.width)] = 'Small'),
                        (e[(e.Medium = ne.medium.width)] = 'Medium'),
                        (e[(e.Large = ne.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = ne.extraLarge.width)] = 'ExtraLarge'));
                })(we || (we = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = ne.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = ne.small.width)] = 'Small'),
                            (e[(e.Medium = ne.medium.width)] = 'Medium'),
                            (e[(e.Large = ne.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = ne.extraLarge.width)] = 'ExtraLarge'));
                    })(Se || (Se = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = ne.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = ne.small.height)] = 'Small'),
                            (e[(e.Medium = ne.medium.height)] = 'Medium'),
                            (e[(e.Large = ne.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = ne.extraLarge.height)] = 'ExtraLarge'));
                    })(Le || (Le = {})));
                const be = ['children', 'className'];
                function pe() {
                    return (
                        (pe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                  }
                                  return e;
                              }),
                        pe.apply(null, arguments)
                    );
                }
                const ye = {
                        [Se.ExtraSmall]: '',
                        [Se.Small]: Ee().SMALL_WIDTH,
                        [Se.Medium]: `${Ee().SMALL_WIDTH} ${Ee().MEDIUM_WIDTH}`,
                        [Se.Large]: `${Ee().SMALL_WIDTH} ${Ee().MEDIUM_WIDTH} ${Ee().LARGE_WIDTH}`,
                        [Se.ExtraLarge]: `${Ee().SMALL_WIDTH} ${Ee().MEDIUM_WIDTH} ${Ee().LARGE_WIDTH} ${Ee().EXTRA_LARGE_WIDTH}`,
                    },
                    He = {
                        [Le.ExtraSmall]: '',
                        [Le.Small]: Ee().SMALL_HEIGHT,
                        [Le.Medium]: `${Ee().SMALL_HEIGHT} ${Ee().MEDIUM_HEIGHT}`,
                        [Le.Large]: `${Ee().SMALL_HEIGHT} ${Ee().MEDIUM_HEIGHT} ${Ee().LARGE_HEIGHT}`,
                        [Le.ExtraLarge]: `${Ee().SMALL_HEIGHT} ${Ee().MEDIUM_HEIGHT} ${Ee().LARGE_HEIGHT} ${Ee().EXTRA_LARGE_HEIGHT}`,
                    },
                    Me = {
                        [we.ExtraSmall]: '',
                        [we.Small]: Ee().SMALL,
                        [we.Medium]: `${Ee().SMALL} ${Ee().MEDIUM}`,
                        [we.Large]: `${Ee().SMALL} ${Ee().MEDIUM} ${Ee().LARGE}`,
                        [we.ExtraLarge]: `${Ee().SMALL} ${Ee().MEDIUM} ${Ee().LARGE} ${Ee().EXTRA_LARGE}`,
                    },
                    _e = (e) => {
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
                            })(e, be);
                        const n = (() => {
                                const e = (0, o.useContext)(me),
                                    t = e.width,
                                    r = e.height,
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return we.ExtraLarge;
                                            case e.large:
                                                return we.Large;
                                            case e.medium:
                                                return we.Medium;
                                            case e.small:
                                                return we.Small;
                                            case e.extraSmall:
                                                return we.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    we.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    n = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return Se.ExtraLarge;
                                            case e.largeWidth:
                                                return Se.Large;
                                            case e.mediumWidth:
                                                return Se.Medium;
                                            case e.smallWidth:
                                                return Se.Small;
                                            case e.extraSmallWidth:
                                                return Se.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    Se.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return Le.ExtraLarge;
                                            case e.largeHeight:
                                                return Le.Large;
                                            case e.mediumHeight:
                                                return Le.Medium;
                                            case e.smallHeight:
                                                return Le.Small;
                                            case e.extraSmallHeight:
                                                return Le.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    Le.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: a,
                                    mediaWidth: n,
                                    mediaHeight: i,
                                    remScreenWidth: t,
                                    remScreenHeight: r,
                                };
                            })(),
                            i = n.mediaWidth,
                            l = n.mediaHeight,
                            d = n.mediaSize;
                        return s().createElement('div', pe({ className: ve()(r, ye[i], He[l], Me[d]) }, a), t);
                    },
                    Te = ['children'],
                    We = (e) => {
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
                            })(e, Te);
                        return s().createElement(he, null, s().createElement(_e, r, t));
                    };
                var Ae = r(493),
                    Re = r.n(Ae),
                    Oe = r(3403);
                const Ie = ({
                    children: e,
                    className: t,
                    startColor: r = '#213da1',
                    endColor: a = '#4361c8',
                    classNames: n,
                }) => {
                    const i = (() => {
                        const e = (0, o.useState)(ae.view.getScale()),
                            t = e[0],
                            r = e[1];
                        return (
                            (0, o.useEffect)(() => {
                                const e = () => {
                                    r(ae.view.getScale());
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
                        { className: ve()('InfoDecorator_base_f5', t) },
                        s().createElement(
                            'svg',
                            { className: 'InfoDecorator_background_0b', viewBox: '0 0 100% 100%' },
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
                                    s().createElement('stop', { offset: '0%', stopColor: r, stopOpacity: '0%' }),
                                    s().createElement('stop', { offset: '100%', stopColor: a, stopOpacity: '100%' }),
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
                        s().createElement('div', {
                            className: ve()('InfoDecorator_arrow_3b', null == n ? void 0 : n.arrow),
                        }),
                    );
                };
                var Pe = r(7030);
                const De = 'MarkerContent_content__default_f5',
                    Ge = s().memo((e) => {
                        const t = (0, Pe.useTransition)(e, {
                            from: { opacity: 0, transform: 'translate(-50%, 50%)' },
                            enter: { opacity: 1, transform: 'translate(-50%, -50%)' },
                            leave: { opacity: 0, transform: 'translate(-50%, -150%)' },
                            config: { duration: 600 },
                        });
                        return s().createElement(
                            'div',
                            { className: ve()('MarkerContent_base_38', e.className) },
                            t((e, { markerContent: t }) =>
                                s().createElement(
                                    Pe.animated.div,
                                    { style: e, className: ve()('MarkerContent_content_aa', De, De) },
                                    t,
                                    s().createElement('div', { className: ve()('MarkerContent_gradient_32') }, t),
                                ),
                            ),
                        );
                    });
                function Ce() {
                    return !1;
                }
                console.log;
                var ze = r(9174);
                function $e(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const ke = (e) => (0 === e ? window : window.subViews.get(e)),
                    je = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: n, mocks: i }) {
                                const l = (0, o.useRef)([]),
                                    d = (e, r, a) => {
                                        var n;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = ke,
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
                                                            s = ae.view.addModelObserver(o, t, !0);
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
                                                                                    return $e(e, t);
                                                                                var r = {}.toString
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
                                                                                          ? $e(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        r && (e = r);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(e = r()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            o =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : o.readByPath(t),
                                            d = (e) => l.current.push(e),
                                            u = (({ observableModel: e }) => ({ root: e.object() }))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const a = null != r ? r : s(t),
                                                            n = ze.LO.box(a, { equals: Ce });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, ze.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const a = null != r ? r : s(t),
                                                            n = ze.LO.box(a, { equals: Ce });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, ze.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const a = s(r);
                                                        if (Array.isArray(t)) {
                                                            const n = t.reduce(
                                                                (e, t) => ((e[t] = ze.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, ze.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                n[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = t,
                                                                i = Object.entries(n),
                                                                l = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = ze.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, ze.aD)((e) => {
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
                                                cleanup: d,
                                            }),
                                            m = { mode: e, model: u, externalModel: o, cleanup: d };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && a ? a.controls(m) : t(m),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    u = (0, o.useRef)(!1),
                                    m = (0, o.useState)(e),
                                    c = m[0],
                                    g = m[1],
                                    h = (0, o.useState)(() => d(e, a, i)),
                                    f = h[0],
                                    v = h[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        u.current ? v(d(c, a, i)) : (u.current = !0);
                                    }, [i, c, a]),
                                    (0, o.useEffect)(() => {
                                        g(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            (f.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [f],
                                    ),
                                    s().createElement(r.Provider, { value: f }, n)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(0, function () {}),
                    Ue = je[0],
                    Ne = je[1],
                    Be = (0, Oe.Pi)(() => {
                        const e = Ne().model.root.get(),
                            t = e.isVisible,
                            r = e.availableDoorsAmount,
                            a = e.isFirstDay;
                        return (
                            (0, o.useEffect)(() => {
                                ae.view.resize(190, 190, 'rem');
                            }, []),
                            t
                                ? s().createElement(
                                      'div',
                                      { className: 'App_base_a9' },
                                      a
                                          ? s().createElement(
                                                'div',
                                                { className: 'App_firstDayMarker_23' },
                                                s().createElement(Ge, {
                                                    markerContent: R.strings.advent_calendar.marker.exclamationMark(),
                                                    className: 'App_firstDayContent_a1',
                                                }),
                                            )
                                          : s().createElement(
                                                Ie,
                                                { className: ve()('App_marker__animated_d7') },
                                                s().createElement(
                                                    'div',
                                                    { className: 'App_content_cd' },
                                                    s().createElement('div', { className: 'App_icon_86' }),
                                                    s().createElement(
                                                        'div',
                                                        {
                                                            className: 'App_count_dd',
                                                            lang: R.strings.settings.LANGUAGE_CODE(),
                                                        },
                                                        r,
                                                    ),
                                                ),
                                            ),
                                  )
                                : null
                        );
                    });
                engine.whenReady.then(() => {
                    Re().render(
                        s().createElement(We, null, s().createElement(Ue, null, s().createElement(Be, null))),
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
        return (t[e](i, i.exports, a), i.exports);
    }
    ((a.m = t),
        (e = []),
        (a.O = (t, r, n, i) => {
            if (!r) {
                var l = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [r, n, i] = e[u], o = !0, s = 0; s < r.length; s++)
                        (!1 & i || l >= i) && Object.keys(a.O).every((e) => a.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), i < l && (l = i));
                    if (o) {
                        e.splice(u--, 1);
                        var d = n();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [r, n, i];
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
        (a.j = 429),
        (() => {
            var e = { 429: 0 };
            a.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        i,
                        [l, o, s] = r,
                        d = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (n in o) a.o(o, n) && (a.m[n] = o[n]);
                        if (s) var u = s(a);
                    }
                    for (t && t(r); d < l.length; d++) ((i = l[d]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return a.O(u);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var n = a.O(void 0, [503], () => a(3576));
    n = a.O(n);
})();
