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
            9978: (e, t, r) => {
                'use strict';
                var a = {};
                (r.r(a),
                    r.d(a, { mouse: () => v, off: () => h, on: () => g, onResize: () => c, onScaleUpdated: () => m }));
                var n = {};
                (r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => p,
                        getSize: () => x,
                        graphicsQuality: () => b,
                        playSound: () => w,
                        setRTPC: () => E,
                    }));
                var i = {};
                (r.r(i), r.d(i, { getBgUrl: () => T, getTextureUrl: () => A }));
                var l = {};
                (r.r(l),
                    r.d(l, {
                        addModelObserver: () => G,
                        addPreloadTexture: () => D,
                        arabic2roman: () => ee,
                        children: () => i,
                        displayStatus: () => M,
                        displayStatusIs: () => te,
                        events: () => W,
                        extraSize: () => re,
                        forceTriggerMouseMove: () => J,
                        freezeTextureBeforeResize: () => V,
                        getBrowserTexturePath: () => k,
                        getDisplayStatus: () => K,
                        getFontNames: () => Z,
                        getScale: () => U,
                        getSize: () => C,
                        getViewGlobalPosition: () => z,
                        isEventHandled: () => Y,
                        isFocused: () => q,
                        pxToRem: () => F,
                        remToPx: () => B,
                        resize: () => N,
                        sendEvent: () => P,
                        setAnimateWindow: () => X,
                        setEventHandled: () => Q,
                        setInputPaddingsRem: () => $,
                        setSidePaddingsRem: () => j,
                        whenTutorialReady: () => ae,
                    }));
                var o = r(6483),
                    s = r.n(o);
                function u(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function d(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const c = u('clientResized'),
                    m = u('self.onScaleUpdated'),
                    g = (e, t) => engine.on(e, t),
                    h = (e, t) => engine.off(e, t),
                    f = { down: u('mousedown'), up: u('mouseup'), move: u('mousemove') },
                    v = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && d(!1);
                        }
                        function r() {
                            e.enabled && d(!0);
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
                                : d(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const i = `mouse${t}`,
                                            l = f[t]((e) => r([e, 'outside']));
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
                                e.enabled && d(!0);
                            },
                            disableOutside() {
                                e.enabled && d(!1);
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
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    L = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    S = Object.keys(L).reduce((e, t) => ((e[t] = () => w(L[t])), e), {}),
                    y = { play: Object.assign({}, S, { sound: w }), setRTPC: E },
                    _ = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    H = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function A(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function T(e, t, r) {
                    return `url(${A(e, t, r)})`;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const M = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    I = ['args'],
                    O = (e, t) => {
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
                    P = {
                        close(e) {
                            O('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            O(64);
                        },
                        move(e) {
                            O(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function D(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function k(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function G(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function j(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function z(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: B(t.x), y: B(t.y) };
                }
                function V() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
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
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function J() {
                    viewEnv.forceTriggerMouseMove();
                }
                function K() {
                    return viewEnv.getShowingStatus();
                }
                const Z = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ee = function (e) {
                        let t = '';
                        for (let r = H.length - 1; r >= 0; r--) for (; e >= H[r]; ) ((t += _[r]), (e -= H[r]));
                        return t;
                    },
                    te = Object.keys(M).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === M[t]), e), {}),
                    re = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ae = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : W.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ne = { view: l, client: n, sound: y };
                var ie = r(7363),
                    le = r.n(ie);
                const oe = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    se = ['children', 'className', 'theme'];
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const de = le().forwardRef(function (e, t) {
                        let r = e.children,
                            a = e.className,
                            n = e.theme,
                            i = void 0 === n ? 'default' : n,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                return n;
                            })(e, se);
                        const o = (function () {
                                const e = (0, ie.useRef)(0);
                                var t;
                                return (
                                    (t = () => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
                                    (0, ie.useEffect)(() => t, []),
                                    (0, ie.useMemo)(
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
                            })(),
                            u = le().useRef(null);
                        var d;
                        return (
                            (d = () => {
                                o.run(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const t = e.scrollWidth,
                                        r = e.scrollHeight;
                                    ne.view.resize(t, r);
                                    const a = window.getComputedStyle(e);
                                    ne.view.setSidePaddingsRem({
                                        left: parseInt(a.getPropertyValue('padding-left'), 10),
                                        top: parseInt(a.getPropertyValue('padding-top'), 10),
                                        right: parseInt(a.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(a.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, ie.useEffect)(d, []),
                            le().createElement(
                                'div',
                                ue({}, l, {
                                    className: s()(oe.base, oe[`base__theme-${i}`], a),
                                    ref: function (e) {
                                        ((u.current = e), 'function' == typeof t ? t(e) : t && (t.current = e));
                                    },
                                }),
                                le().createElement('div', { className: oe.decorator }, r),
                            )
                        );
                    }),
                    ce = (e, t, r) =>
                        t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                            ? (t.extraLargeHeight && r.extraLarge) ||
                              (t.largeHeight && r.large) ||
                              (t.mediumHeight && r.medium) ||
                              (t.smallHeight && r.small) ||
                              (t.extraSmallHeight && r.extraSmall)
                                ? e
                                : null
                            : e,
                    me = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var ge;
                function he(e, t, r) {
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
                })(ge || (ge = {}));
                const fe = ne.client.getSize('rem'),
                    ve = fe.width,
                    we = fe.height,
                    Ee = Object.assign({ width: ve, height: we }, he(ve, we, me)),
                    xe = (0, ie.createContext)(Ee),
                    pe = ['children'],
                    be = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                return n;
                            })(e, pe);
                        const a = (0, ie.useContext)(xe),
                            n = a.extraLarge,
                            i = a.large,
                            l = a.medium,
                            o = a.small,
                            s = a.extraSmall,
                            u = a.extraLargeWidth,
                            d = a.largeWidth,
                            c = a.mediumWidth,
                            m = a.smallWidth,
                            g = a.extraSmallWidth,
                            h = a.extraLargeHeight,
                            f = a.largeHeight,
                            v = a.mediumHeight,
                            w = a.smallHeight,
                            E = a.extraSmallHeight,
                            x = { extraLarge: h, large: f, medium: v, small: w, extraSmall: E };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && n) return t;
                            if (r.large && i) return t;
                            if (r.medium && l) return t;
                            if (r.small && o) return t;
                            if (r.extraSmall && s) return t;
                        } else {
                            if (r.extraLargeWidth && u) return ce(t, r, x);
                            if (r.largeWidth && d) return ce(t, r, x);
                            if (r.mediumWidth && c) return ce(t, r, x);
                            if (r.smallWidth && m) return ce(t, r, x);
                            if (r.extraSmallWidth && g) return ce(t, r, x);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && h) return t;
                                if (r.largeHeight && f) return t;
                                if (r.mediumHeight && v) return t;
                                if (r.smallHeight && w) return t;
                                if (r.extraSmallHeight && E) return t;
                            }
                        }
                        return null;
                    };
                ((be.defaultProps = {
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
                    (0, ie.memo)(be));
                const Le = ({ children: e }) => {
                    const t = (0, ie.useContext)(xe),
                        r = (0, ie.useState)(t),
                        a = r[0],
                        n = r[1],
                        i = (0, ie.useCallback)((e, t) => {
                            const r = ne.view.pxToRem(e),
                                a = ne.view.pxToRem(t);
                            n(Object.assign({ width: r, height: a }, he(r, a, me)));
                        }, []),
                        l = (0, ie.useCallback)(() => {
                            const e = ne.client.getSize('px');
                            i(e.width, e.height);
                        }, [i]);
                    (((e) => {
                        const t = (0, ie.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        (ne.client.events.on('clientResized', i), ne.client.events.on('self.onScaleUpdated', l));
                    }),
                        (0, ie.useEffect)(
                            () => () => {
                                (ne.client.events.off('clientResized', i),
                                    ne.client.events.off('self.onScaleUpdated', l));
                            },
                            [i, l],
                        ));
                    const o = (0, ie.useMemo)(() => Object.assign({}, a), [a]);
                    return le().createElement(xe.Provider, { value: o }, e);
                };
                var Se = r(926),
                    ye = r.n(Se);
                let _e, He, Ae;
                (!(function (e) {
                    ((e[(e.ExtraSmall = me.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = me.small.width)] = 'Small'),
                        (e[(e.Medium = me.medium.width)] = 'Medium'),
                        (e[(e.Large = me.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = me.extraLarge.width)] = 'ExtraLarge'));
                })(_e || (_e = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = me.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = me.small.width)] = 'Small'),
                            (e[(e.Medium = me.medium.width)] = 'Medium'),
                            (e[(e.Large = me.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = me.extraLarge.width)] = 'ExtraLarge'));
                    })(He || (He = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = me.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = me.small.height)] = 'Small'),
                            (e[(e.Medium = me.medium.height)] = 'Medium'),
                            (e[(e.Large = me.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = me.extraLarge.height)] = 'ExtraLarge'));
                    })(Ae || (Ae = {})));
                const Te = ['children', 'className'];
                function Me() {
                    return (
                        (Me =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        Me.apply(this, arguments)
                    );
                }
                const Re = {
                        [He.ExtraSmall]: '',
                        [He.Small]: ye().SMALL_WIDTH,
                        [He.Medium]: `${ye().SMALL_WIDTH} ${ye().MEDIUM_WIDTH}`,
                        [He.Large]: `${ye().SMALL_WIDTH} ${ye().MEDIUM_WIDTH} ${ye().LARGE_WIDTH}`,
                        [He.ExtraLarge]: `${ye().SMALL_WIDTH} ${ye().MEDIUM_WIDTH} ${ye().LARGE_WIDTH} ${ye().EXTRA_LARGE_WIDTH}`,
                    },
                    We = {
                        [Ae.ExtraSmall]: '',
                        [Ae.Small]: ye().SMALL_HEIGHT,
                        [Ae.Medium]: `${ye().SMALL_HEIGHT} ${ye().MEDIUM_HEIGHT}`,
                        [Ae.Large]: `${ye().SMALL_HEIGHT} ${ye().MEDIUM_HEIGHT} ${ye().LARGE_HEIGHT}`,
                        [Ae.ExtraLarge]: `${ye().SMALL_HEIGHT} ${ye().MEDIUM_HEIGHT} ${ye().LARGE_HEIGHT} ${ye().EXTRA_LARGE_HEIGHT}`,
                    },
                    Ie = {
                        [_e.ExtraSmall]: '',
                        [_e.Small]: ye().SMALL,
                        [_e.Medium]: `${ye().SMALL} ${ye().MEDIUM}`,
                        [_e.Large]: `${ye().SMALL} ${ye().MEDIUM} ${ye().LARGE}`,
                        [_e.ExtraLarge]: `${ye().SMALL} ${ye().MEDIUM} ${ye().LARGE} ${ye().EXTRA_LARGE}`,
                    },
                    Oe = (e) => {
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
                            })(e, Te);
                        const n = (() => {
                                const e = (0, ie.useContext)(xe),
                                    t = e.width,
                                    r = e.height,
                                    a = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    _e.ExtraSmall
                                                );
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
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    He.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    Ae.ExtraSmall
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
                            o = n.mediaSize;
                        return le().createElement('div', Me({ className: s()(r, Re[i], We[l], Ie[o]) }, a), t);
                    },
                    Pe = ['children'],
                    De = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                return n;
                            })(e, Pe);
                        return le().createElement(Le, null, le().createElement(Oe, r, t));
                    };
                var $e = r(1533),
                    ke = r.n($e),
                    Ge = r(3403);
                function je() {
                    return !1;
                }
                console.log;
                var Ce = r(9174);
                function Ne(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const ze = (e) => (0 === e ? window : window.subViews.get(e)),
                    Ve = ((e, t) => {
                        const r = (0, ie.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: n, mocks: i }) {
                                const l = (0, ie.useRef)([]),
                                    o = (e, r, a) => {
                                        var n;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = ze,
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
                                                            s = ne.view.addModelObserver(o, t, !0);
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
                                                                                    return Ne(e, t);
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
                                            u = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => ({
                                                root: e.object(),
                                                strengths: e.array('parameters.strengths', []),
                                                weaknesses: e.array('parameters.weaknesses', []),
                                            }))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const a = null != r ? r : s(t),
                                                            n = Ce.LO.box(a, { equals: je });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Ce.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const a = null != r ? r : s(t),
                                                            n = Ce.LO.box(a, { equals: je });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Ce.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const a = s(r);
                                                        if (Array.isArray(t)) {
                                                            const n = t.reduce(
                                                                (e, t) => ((e[t] = Ce.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Ce.aD)((e) => {
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
                                                                    (e, [t, r]) => ((e[r] = Ce.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Ce.aD)((e) => {
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
                                            c = { mode: e, model: d, externalModel: o, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && a ? a.controls(c) : t(c),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    s = (0, ie.useRef)(!1),
                                    u = (0, ie.useState)(e),
                                    d = u[0],
                                    c = u[1],
                                    m = (0, ie.useState)(() => o(e, a, i)),
                                    g = m[0],
                                    h = m[1];
                                return (
                                    (0, ie.useEffect)(() => {
                                        s.current ? h(o(d, a, i)) : (s.current = !0);
                                    }, [i, d, a]),
                                    (0, ie.useEffect)(() => {
                                        c(e);
                                    }, [e]),
                                    (0, ie.useEffect)(
                                        () => () => {
                                            (g.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [g],
                                    ),
                                    le().createElement(r.Provider, { value: g }, n)
                                );
                            },
                            () => (0, ie.useContext)(r),
                        ];
                    })(0, function () {}),
                    Ue = Ve[0],
                    Fe = Ve[1],
                    Be =
                        R.images.fun_random.gui.maps.icons.feature.asset_packs.sub_modes.auto_shoot_guns
                            .strengths_weakness,
                    Xe = R.strings.fun_random.strengths_weaknesses,
                    qe = ({ parameterName: e, icon: t, kind: r, className: a, classNames: n }) =>
                        e && t && r
                            ? le().createElement(
                                  'div',
                                  { className: s()('Advantage_base_66', a) },
                                  le().createElement('span', {
                                      className: s()('Advantage_icon_0f', null == n ? void 0 : n.icon),
                                      style: { backgroundImage: `url('${Be.$dyn(r).$dyn(t)}')` },
                                  }),
                                  le().createElement(
                                      'span',
                                      { className: s()('Advantage_text_c2', null == n ? void 0 : n.text) },
                                      Xe.$dyn(r).$dyn(e),
                                  ),
                              )
                            : null,
                    Qe = (0, Ge.Pi)(({ kind: e }) => {
                        const t = Fe().model,
                            r = 'strength' === e ? t.strengths : t.weaknesses;
                        return le().createElement(
                            'div',
                            { className: 'Advantages_overlay_21' },
                            ((a = r.get()),
                            (n = (t) => {
                                const r = t.icon,
                                    a = t.parameterName;
                                return le().createElement(qe, {
                                    key: a,
                                    icon: r,
                                    parameterName: a,
                                    kind: e,
                                    className: 'Advantages_base_26',
                                    classNames: { icon: 'Advantages_icon_45', text: 'Advantages_text_19' },
                                });
                            }),
                            Array.isArray(a) ? a.map(n) : a.map((e, t, r) => n(null == e ? void 0 : e.value))),
                        );
                        var a, n;
                    });
                let Ye;
                !(function (e) {
                    ((e.READY = 'ready'), (e.NOT_READY = 'not_ready'), (e.IN_BATTLE = 'in_battle'));
                })(Ye || (Ye = {}));
                const Je = R.strings.fun_random.vehicle_tooltip,
                    Ke = R.images.gui.maps.icons.flags.c_160x100,
                    Ze = {
                        [Ye.READY]: 'App_status__ready_88',
                        [Ye.NOT_READY]: 'App_status__notReady_5b',
                        [Ye.IN_BATTLE]: 'App_status__inBattle_24',
                    },
                    et = (0, Ge.Pi)(() => {
                        const e = Fe().model.root.get(),
                            t = e.description,
                            r = e.status,
                            a = e.nationName,
                            n = e.vehicleName,
                            i = { backgroundImage: `url('${Ke.$dyn(a)}')` };
                        return le().createElement(
                            'div',
                            { className: 'App_base_0a' },
                            le().createElement('div', { className: 'App_background_17', style: i }),
                            le().createElement('div', { className: 'App_title_69' }, n),
                            le().createElement('div', { className: 'App_text_7b' }, Je.subtitle()),
                            le().createElement(
                                'div',
                                { className: 'App_description_f1' },
                                Je.vehicle.description.$dyn(t),
                            ),
                            le().createElement(
                                'div',
                                { className: 'App_advantages_75' },
                                le().createElement(Qe, { kind: 'strength' }),
                                le().createElement(Qe, { kind: 'weakness' }),
                            ),
                            le().createElement('div', { className: 'App_separator_51' }),
                            le().createElement('div', { className: s()('App_status_31', Ze[r]) }, Je.status.$dyn(r)),
                        );
                    });
                engine.whenReady.then(() => {
                    ke().render(
                        le().createElement(
                            De,
                            null,
                            le().createElement(Ue, null, le().createElement(de, null, le().createElement(et, null))),
                        ),
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
        (a.j = 'lobby/tooltips/FunRandomVehicleTooltipView/FunRandomVehicleTooltipView'),
        (() => {
            var e = { 'lobby/tooltips/FunRandomVehicleTooltipView/FunRandomVehicleTooltipView': 0 };
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
    var n = a.O(void 0, ['lib/fun_random.vendors'], () => a(9978));
    n = a.O(n);
})();
