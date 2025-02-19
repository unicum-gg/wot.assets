(() => {
    'use strict';
    var e,
        n = {
            3466: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => _, off: () => y, on: () => b, onResize: () => h, onScaleUpdated: () => E });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => O,
                        getSize: () => S,
                        graphicsQuality: () => z,
                        playSound: () => x,
                        setRTPC: () => T,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => N, getTextureUrl: () => M });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => Q,
                        addPreloadTexture: () => $,
                        children: () => i,
                        displayStatus: () => V,
                        displayStatusIs: () => ue,
                        events: () => k,
                        extraSize: () => de,
                        forceTriggerMouseMove: () => se,
                        freezeTextureBeforeResize: () => Z,
                        getBrowserTexturePath: () => U,
                        getDisplayStatus: () => le,
                        getFontNames: () => ce,
                        getScale: () => ee,
                        getSize: () => K,
                        getViewGlobalPosition: () => Y,
                        isEventHandled: () => ae,
                        isFocused: () => oe,
                        pxToRem: () => ne,
                        remToPx: () => te,
                        resize: () => X,
                        sendEvent: () => H,
                        setAnimateWindow: () => re,
                        setEventHandled: () => ie,
                        setInputPaddingsRem: () => q,
                        setSidePaddingsRem: () => J,
                        whenTutorialReady: () => ve,
                    });
                var s = t(7363),
                    l = t.n(s),
                    c = t(1533),
                    u = t.n(c);
                const d = {
                        base: 'Content_base_f0',
                        images: 'Content_images_aa',
                        content: 'Content_content_69',
                        title: 'Content_title_70',
                        descriptionBlock: 'Content_descriptionBlock_91',
                        firstPart: 'Content_firstPart_eb',
                        separatorWrapper: 'Content_separatorWrapper_c6',
                        separator: 'Content_separator_ae',
                        moreInfo: 'Content_moreInfo_2f',
                    },
                    v = R.strings.resource_well.tooltips.uniq_style,
                    m = () =>
                        l().createElement(
                            'div',
                            { className: d.base },
                            l().createElement('div', { className: d.images }),
                            l().createElement(
                                'div',
                                { className: d.content },
                                l().createElement('div', { className: d.title }, v.title()),
                                l().createElement(
                                    'div',
                                    { className: d.descriptionBlock },
                                    l().createElement('div', { className: d.firstPart }, v.description.firstPart()),
                                    l().createElement('div', { className: d.secondPart }, v.description.secondPart()),
                                ),
                                l().createElement(
                                    'div',
                                    { className: d.separatorWrapper },
                                    l().createElement('div', { className: d.separator }),
                                ),
                                l().createElement('div', { className: d.moreInfo }, v.moreInfo()),
                            ),
                        );
                var f = t(6483),
                    g = t.n(f);
                function p(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function w(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const h = p('clientResized'),
                    E = p('self.onScaleUpdated'),
                    b = (e, n) => engine.on(e, n),
                    y = (e, n) => engine.off(e, n),
                    P = { down: p('mousedown'), up: p('mouseup'), move: p('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && w(!1);
                    }
                    function t() {
                        e.enabled && w(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', n),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', n),
                                  document.body.addEventListener('mouseleave', t))
                            : w(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        a = P[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            o &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && w(!0);
                        },
                        disableOutside() {
                            e.enabled && w(!1);
                        },
                    });
                })();
                function x(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function T(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function O(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const z = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    j = Object.keys(C).reduce((e, n) => ((e[n] = () => x(C[n])), e), {}),
                    F = { play: Object.assign({}, j, { sound: x }), setRTPC: T };
                function M(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function N(e, n, t) {
                    return `url(${M(e, n, t)})`;
                }
                const V = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    k = {
                        onTextureFrozen: p('self.onTextureFrozen'),
                        onTextureReady: p('self.onTextureReady'),
                        onDomBuilt: p('self.onDomBuilt'),
                        onLoaded: p('self.onLoaded'),
                        onDisplayChanged: p('self.onShowingStatusChanged'),
                        onFocusUpdated: p('self.onFocusChanged'),
                        children: {
                            onAdded: p('children.onAdded'),
                            onLoaded: p('children.onLoaded'),
                            onRemoved: p('children.onRemoved'),
                            onAttached: p('children.onAttached'),
                            onTextureReady: p('children.onTextureReady'),
                            onRequestPosition: p('children.requestPosition'),
                        },
                    },
                    A = ['args'];
                const B = 2,
                    D = 16,
                    G = 32,
                    I = 64,
                    L = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (n.indexOf(r) >= 0) continue;
                                            t[r] = e[r];
                                        }
                                    return t;
                                })(n, A);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, n]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof n) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: n };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: n };
                                                      default:
                                                          return { __Type: t, name: e, string: n.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    H = {
                        close(e) {
                            L('popover' === e ? B : G);
                        },
                        minimize() {
                            L(I);
                        },
                        move(e) {
                            L(D, { isMouseEvent: !0, on: e });
                        },
                    },
                    W = 15;
                function $(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function q(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, W);
                }
                function U(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function Q(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function J(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, W);
                }
                function K(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function X(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function Y(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: te(n.x), y: te(n.y) };
                }
                function Z() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function ee() {
                    return viewEnv.getScale();
                }
                function ne(e) {
                    return viewEnv.pxToRem(e);
                }
                function te(e) {
                    return viewEnv.remToPx(e);
                }
                function re(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function oe() {
                    return viewEnv.isFocused();
                }
                function ie() {
                    return viewEnv.setEventHandled();
                }
                function ae() {
                    return viewEnv.isEventHandled();
                }
                function se() {
                    viewEnv.forceTriggerMouseMove();
                }
                function le() {
                    return viewEnv.getShowingStatus();
                }
                const ce = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ue = Object.keys(V).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === V[n]), e), {}),
                    de = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ve = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : k.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    me = { view: a, client: o, sound: F };
                function fe() {
                    const e = (0, s.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, s.useEffect)(() => n, []),
                        (0, s.useMemo)(
                            () => ({
                                run: (n) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                n(), (e.current = 0);
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
                const ge = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    pe = ['children', 'className', 'theme'];
                function we() {
                    return (
                        (we = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        we.apply(null, arguments)
                    );
                }
                const he = l().forwardRef(function (e, n) {
                        let t = e.children,
                            r = e.className,
                            o = e.theme,
                            i = void 0 === o ? 'default' : o,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (n.indexOf(r) >= 0) continue;
                                        t[r] = e[r];
                                    }
                                return t;
                            })(e, pe);
                        const c = fe(),
                            u = l().useRef(null);
                        var d;
                        return (
                            (d = () => {
                                c.run(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    me.view.resize(n, t);
                                    const r = window.getComputedStyle(e);
                                    me.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(d, []),
                            l().createElement(
                                'div',
                                we({}, a, {
                                    className: g()(ge.base, ge[`base__theme-${i}`], r),
                                    ref: function (e) {
                                        (u.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                l().createElement('div', { className: ge.decorator }, t),
                            )
                        );
                    }),
                    Ee = () => l().createElement(he, null, l().createElement(m, null));
                engine.whenReady.then(() => {
                    u().render(l().createElement(Ee, null), document.getElementById('root'));
                });
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
            },
        },
        t = {};
    function r(e) {
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var i = (t[e] = { exports: {} });
        return n[e](i, i.exports, r), i.exports;
    }
    (r.m = n),
        (e = []),
        (r.O = (n, t, o, i) => {
            if (!t) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [t, o, i] = e[u], s = !0, l = 0; l < t.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (n = c);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [t, o, i];
        }),
        (r.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return r.d(n, { a: n }), n;
        }),
        (r.d = (e, n) => {
            for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (r.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 738),
        (() => {
            var e = { 738: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [a, s, l] = t,
                        c = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var u = l(r);
                    }
                    for (n && n(t); c < a.length; c++) (i = a[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var o = r.O(void 0, [52], () => r(3466));
    o = r.O(o);
})();
