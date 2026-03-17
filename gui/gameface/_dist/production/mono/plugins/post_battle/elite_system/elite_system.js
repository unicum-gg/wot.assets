const exports = {};
!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              require('react/jsx-runtime'),
              require('awilix'),
              require('mobx'),
              require('react'),
              require('@wg/media_wrapper'),
              require('react-dom'),
              require('mobx-utils'),
              require('mobx-react-lite'),
          )
        : 'function' == typeof define && define.amd
          ? define(
                [
                    'react/jsx-runtime',
                    'awilix',
                    'mobx',
                    'react',
                    '@wg/media_wrapper',
                    'react-dom',
                    'mobx-utils',
                    'mobx-react-lite',
                ],
                t,
            )
          : t(
                (e = 'undefined' != typeof globalThis ? globalThis : e || self).module_externals.jsxRuntime,
                e.module_externals.awilix,
                e.module_externals.mobx,
                e.module_externals.React,
                e.module_externals.wg.mediaWrapper,
                e.module_externals.ReactDOM,
                e.module_externals.mobxUtils,
                e.module_externals.mobxReactLite,
            );
})(this, function (e, t, n, r, s, o, a, i) {
    'use strict';
    var l,
        u = Object.defineProperty,
        c = (e, t) => ((t = Symbol[e]) ? t : Symbol.for('Symbol.' + e)),
        d = (e) => {
            throw TypeError(e);
        },
        h = (e, t, n) =>
            ((e, t, n) =>
                t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n))(
                e,
                'symbol' != typeof t ? t + '' : t,
                n,
            );
    function m(e) {
        const t = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
        if (e)
            for (const n in e)
                if ('default' !== n) {
                    const r = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, r.get ? r : { enumerable: !0, get: () => e[n] });
                }
        return ((t.default = e), Object.freeze(t));
    }
    const f = m(r),
        p = t.createContainer();
    function g(e, t) {
        return e && e.length > 0 ? `${e}.${t}` : t;
    }
    function b(e, t) {
        switch (t) {
            case 'error':
                console.error(e);
                break;
            case 'warn':
                console.warn(e);
                break;
            case 'info':
                console.info(e);
                break;
            case 'debug':
                console.debug(e);
                break;
            default:
                console.warn('Unknown severity log type:', t);
        }
    }
    class v {
        constructor(e = window.R.images, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, n = 'silent') {
            const r = e.startsWith('R.images') ? e : g(this.prefix, e),
                s = (function (e, t) {
                    const n = t.split('.');
                    if (window.R && window.R.images) {
                        const t = n[n.length - 1];
                        if (!t) return;
                        const r = n.slice(0, -1).reduce((e, t) => {
                            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
                        }, e);
                        if (!r) return;
                        return 'function' == typeof r[t] ? r[t]() : void 0;
                    }
                    throw new Error('R class with images field is not defined');
                })(e.startsWith('R.images') ? window : this.root, r);
            return void 0 === s ? ('silent' !== n && b(`Resource not found: ${r}`, n), t()) : s;
        }
        readOrEmpty(e, t = 'warn') {
            return this.readOr(e, () => '', t);
        }
        readOrThrow(e) {
            const t = this.read(e);
            if (void 0 === t) throw new Error(`Resource not found: ${this.prefix} ${e}`);
            return t;
        }
        has(e) {
            return void 0 !== this.read(e);
        }
    }
    Math.random().toString(36).slice(2);
    var _ = ((e) => (
        (e.DayMonthNumeric = 'dayMonthNumeric'),
        (e.DayMonthFull = 'dayMonthFull'),
        (e.DayMonthFullTime = 'dayMonthFullTime'),
        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
        (e.ShortDate = 'shortDate'),
        (e.ShortTime = 'ShortTime'),
        (e.ShortDateTime = 'ShortDateTime'),
        (e.FullDate = 'fullDate'),
        (e.FullTime = 'fullTime'),
        (e.FullDateTime = 'fullDateTime'),
        e
    ))(_ || {});
    const y = { integral: 0, gold: 1 },
        w = { fractional: 0, woZeroDigits: 1 },
        x = Object.keys(y),
        P = Object.keys(w);
    const k = { full: _.FullTime, short: _.ShortTime };
    const E = {
        isNumberFormat: function (e) {
            return e in y;
        },
        formatNumber: function (e, t) {
            return window.formatters.getNumberFormat(t, y[e]);
        },
        numberFormats: x,
        isRealFormat: function (e) {
            return e in w;
        },
        formatReal: function (e, t, n = 2) {
            return window.formatters.getRealFormat(t, w[e], n);
        },
        realFormats: P,
        formatDateTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(t, e, n);
        },
        dateTimeFormats: _,
        formatTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(t, e, n);
        },
        timeFormats: Object.keys(k),
        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
    };
    function j(e, t, n) {
        const r = e.split('.');
        if (window.R && window.R.strings) {
            const e = r[r.length - 1];
            if (!e) return;
            const s = r.slice(0, -1).reduce((e, t) => {
                if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
            }, n);
            if (!s) return;
            return 'function' == typeof s[e] ? (t ? s[e](t) : s[e]()) : void 0;
        }
        throw new Error('R class with strings field is not defined');
    }
    class C {
        constructor(e = window.R.strings, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, n = 'silent') {
            const r = e.startsWith('R.strings') ? e : g(this.prefix, e),
                s = j(r, void 0, e.startsWith('R.strings') ? window : this.root);
            return void 0 === s ? ('silent' !== n && b(`Resource not found: ${r}`, n), t()) : s;
        }
        readOrEmpty(e, t = 'warn') {
            return this.readOr(e, () => '', t);
        }
        readOrThrow(e) {
            const t = e.startsWith('R.strings') ? e : g(this.prefix, e),
                n = j(t, void 0, e.startsWith('R.strings') ? window : this.root);
            if (void 0 === n) throw new Error(`Resource not found: ${t}`);
            return n;
        }
        plural(e, t) {
            return this.pluralOr(e, t, () => {});
        }
        pluralOr(e, t, n, r = 'silent') {
            const s = e.startsWith('R.strings') ? e : g(this.prefix, e),
                o = j(s, t, e.startsWith('R.strings') ? window : this.root);
            return void 0 === o ? ('silent' !== r && b(`Resource not found: ${s}`, r), n()) : o;
        }
        pluralOrEmpty(e, t, n = 'warn') {
            return this.pluralOr(e, t, () => '', n);
        }
    }
    class S {
        constructor(e = window.R.videos, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, n = 'silent') {
            const r = e.startsWith('R.videos') ? e : g(this.prefix, e),
                s = (function (e, t) {
                    const n = t.split('.');
                    if (window.R && window.R.videos) {
                        const t = n[n.length - 1];
                        if (!t) return;
                        const r = n.slice(0, -1).reduce((e, t) => {
                            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
                        }, e);
                        if (!r) return;
                        return 'function' == typeof r[t] ? r[t]() : void 0;
                    }
                    throw new Error('R class with videos field is not defined');
                })(e.startsWith('R.videos') ? window : this.root, r);
            return void 0 === s ? ('silent' !== n && b(`Resource not found: ${e}`, n), t()) : s;
        }
        readOrEmpty(e, t = 'warn') {
            return this.readOr(e, () => '', t);
        }
        readOrThrow(e) {
            const t = this.read(e);
            if (void 0 === t) throw new Error(`Resource not found: ${e}`);
            return t;
        }
        has(e) {
            return void 0 !== this.read(e);
        }
    }
    function N(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    p.register({
        strings: t.asFunction(() => new C()).singleton(),
        images: t.asFunction(() => new v(window.R.images.gui.maps.icons)).singleton(),
        atlases: t.asFunction(() => new v(window.R.atlases)).singleton(),
        videos: t.asFunction(() => new S(window.R.videos)).singleton(),
        views: t
            .asClass(
                class {
                    read(e) {
                        return e(window.R.views);
                    }
                },
            )
            .singleton(),
        aliases: t
            .asClass(
                class {
                    read(e) {
                        return e(window.R.aliases);
                    }
                },
            )
            .singleton(),
        sounds: t
            .asClass(
                class {
                    play(e) {
                        const t = window.R.sounds[e];
                        'function' == typeof t
                            ? engine.call('PlaySound', t.apply(window.R.sounds))
                            : b(`Sound not found: ${e}`, 'warn');
                    }
                },
            )
            .singleton(),
        langCode: t.asValue(R.strings.settings.LANGUAGE_CODE()),
        intl: t.asValue(E),
    });
    var A,
        M = { exports: {} };
    /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */ ((A = M),
        (function () {
            var e = {}.hasOwnProperty;
            function t() {
                for (var n = [], r = 0; r < arguments.length; r++) {
                    var s = arguments[r];
                    if (s) {
                        var o = typeof s;
                        if ('string' === o || 'number' === o) n.push(s);
                        else if (Array.isArray(s)) {
                            if (s.length) {
                                var a = t.apply(null, s);
                                a && n.push(a);
                            }
                        } else if ('object' === o) {
                            if (
                                s.toString !== Object.prototype.toString &&
                                !s.toString.toString().includes('[native code]')
                            ) {
                                n.push(s.toString());
                                continue;
                            }
                            for (var i in s) e.call(s, i) && s[i] && n.push(i);
                        }
                    }
                }
                return n.join(' ');
            }
            A.exports ? ((t.default = t), (A.exports = t)) : (window.classNames = t);
        })());
    const T = N(M.exports),
        F = {
            linear: (e) => e,
            easeInQuad: (e) => e * e,
            easeOutQuad: (e) => e * (2 - e),
            easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
            easeInCubic: (e) => e * e * e,
            easeOutCubic: (e) => --e * e * e + 1,
            easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
            easeInQuart: (e) => e * e * e * e,
            easeOutQuart: (e) => 1 - --e * e * e * e,
            easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
            easeInQuint: (e) => e * e * e * e * e,
            easeOutQuint: (e) => 1 + --e * e * e * e * e,
            easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
            easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
            easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
            easeInOutSine: (e) => (1 - Math.cos(Math.PI * e)) / 2,
            easeInOutCirc(e) {
                const t = Math.sqrt,
                    n = Math.pow;
                return e < 0.5 ? (1 - t(1 - n(2 * e, 2))) / 2 : (t(1 - n(-2 * e + 2, 2)) + 1) / 2;
            },
            reverseEaseInOutCirc: (e) => 1 - F.easeInOutCirc(1 - e),
            easeOutBack(e) {
                const t = 1.70158;
                return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
            },
            bezier: (e, t, n, r) => (s) =>
                (1 - s) * (1 - s) * (1 - s) * e +
                3 * (1 - s) * (1 - s) * s * t +
                3 * (1 - s) * s * s * n +
                s * s * s * r,
            cubicBezier: (e, t, n, r) => (s) => {
                const o = (function (e, t, n, r = 1e-5) {
                    let s = e;
                    for (let o = 0; o < 8; o++) {
                        const o = I(s, t, n) - e;
                        if (Math.abs(o) < r) return s;
                        const a = O(s, t, n);
                        if (Math.abs(a) < r) break;
                        s -= o / a;
                    }
                    return s;
                })(s, e, n);
                return 3 * t * (1 - o) ** 2 * o + 3 * r * (1 - o) * o ** 2 + o ** 3;
            },
        };
    function I(e, t, n) {
        return 3 * t * (1 - e) ** 2 * e + 3 * n * (1 - e) * e ** 2 + e ** 3;
    }
    function O(e, t, n) {
        return 9 * t * (1 - e) ** 2 + 6 * (n - t) * (1 - e) * e + 3 * (1 - n) * e ** 2;
    }
    function $(e) {
        return (t) => (
            engine.on(e, t),
            () => {
                engine.off(e, t);
            }
        );
    }
    function V(e) {
        viewEnv.setTrackMouseOnStage(e);
    }
    const L = { down: $('mousedown'), up: $('mouseup'), move: $('mousemove') };
    function D(e) {
        engine.call('PlaySound', e);
    }
    !(function () {
        const e = { listeners: 0, enabled: !0, initialized: !1 };
        function t() {
            e.enabled && V(!1);
        }
        function n() {
            e.enabled && V(!0);
        }
        function r() {
            e.enabled
                ? e.listeners < 1
                    ? ((e.initialized = !1),
                      document.body.removeEventListener('mouseenter', t),
                      document.body.removeEventListener('mouseleave', n),
                      V(!1))
                    : e.initialized ||
                      ((e.initialized = !0),
                      document.body.addEventListener('mouseenter', t),
                      document.body.addEventListener('mouseleave', n))
                : V(!1);
        }
        ['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const s = `mouse${t}`,
                            o = L[t]((e) => n([e, 'outside']));
                        function a(e) {
                            n([e, 'inside']);
                        }
                        return (
                            window.addEventListener(s, a),
                            r(),
                            () => {
                                (o(), window.removeEventListener(s, a), (e.listeners -= 1), r());
                            }
                        );
                    };
                })(n)),
                t
            ),
            {},
        );
    })();
    const z = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
        B = { ...Object.keys(z).reduce((e, t) => ((e[t] = () => D(z[t])), e), {}), sound: D },
        q = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
        U = {
            onTextureFrozen: $('self.onTextureFrozen'),
            onTextureReady: $('self.onTextureReady'),
            onDomBuilt: $('self.onDomBuilt'),
            onLoaded: $('self.onLoaded'),
            onHitTest: (() => {
                const e = new Set(),
                    t = (t, n) => {
                        for (const r of e.values())
                            if (r(t)) {
                                n.value = !1;
                                break;
                            }
                    };
                return (n) => (
                    e.add(n),
                    1 === e.size && (viewEnv.setHitTestEnabled(!0), engine.on('self.onHitTest', t)),
                    () => {
                        (e.delete(n), 0 === e.size && (viewEnv.setHitTestEnabled(!1), engine.off('self.onHitTest', t)));
                    }
                );
            })(),
            onDisplayChanged: $('self.onShowingStatusChanged'),
            onFocusUpdated: $('self.onFocusChanged'),
            onExternalPaddingsUpdated: $('self.onPaddingsUpdated'),
            children: {
                onAdded: $('children.onAdded'),
                onLoaded: $('children.onLoaded'),
                onRemoved: $('children.onRemoved'),
                onAttached: $('children.onAttached'),
                onTextureReady: $('children.onTextureReady'),
                onRequestPosition: $('children.requestPosition'),
            },
        },
        X = 1;
    function H(e) {
        switch (typeof e) {
            case 'number':
                return { number: e };
            case 'boolean':
                return { bool: e };
            case 'undefined':
                return;
            case 'string':
                return { string: e };
            default:
                return void (null !== e && console.warn('Unsupported argument type', typeof e));
        }
    }
    const W = (e) => {
            const t = [];
            for (const [n, r] of Object.entries(e)) {
                const e = H(r);
                void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
            }
            return t;
        },
        Q = (e, t) => {
            const n = 'GFViewEventProxy';
            if (void 0 !== t) {
                const { args: r, ...s } = t;
                return void 0 !== r
                    ? viewEnv.handleViewEvent({ __Type: n, type: e, ...s, arguments: W(r) })
                    : viewEnv.handleViewEvent({ __Type: n, type: e, ...s });
            }
            return viewEnv.handleViewEvent({ __Type: n, type: e });
        },
        G = new Map(),
        Z = {
            tooltip: {
                open(e, t, n = 0, r) {
                    (Q(X, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                        G.set(`${e}-${t}`, { targetID: e, contentID: t }));
                },
                hide(e, t, n = 0) {
                    (Q(X, { contentID: t, decoratorID: n, targetID: e, on: !1 }), G.delete(`${e}-${t}`));
                },
                hideAll() {
                    const e = Array.from(G.values());
                    for (const t of e) this.hide(t.targetID, t.contentID);
                },
            },
        };
    Object.keys(q).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === q[t]), e), {});
    class K {
        constructor() {
            h(this, 'listeners', new Set());
        }
        on(e) {
            return (this.listeners.add(e), () => this.off(e));
        }
        off(e) {
            this.listeners.delete(e);
        }
        emit(e) {
            this.listeners.forEach((t) => t(e));
        }
    }
    const J = (e) => (0 === e ? window : window.subViews.get(e));
    function Y(
        { initializer: e = !0, rootId: t = 0, getRoot: n = J, context: r = 'model' } = {},
        { name: s = 'DataLayer' } = {},
    ) {
        const o = new Map(),
            a = { subscribersNotified: new K() },
            i = engine.whenReady.then(() => {
                function e(e, t, n) {
                    (n.forEach((n) => {
                        const r = o.get(n);
                        void 0 !== r && r(e, t);
                    }),
                        a.subscribersNotified.emit());
                }
                const t = [];
                return (
                    engine.on('viewEnv.onDataChanged', e),
                    t.push(() => engine.off('viewEnv.onDataChanged', e)),
                    () => {
                        t.forEach((e) => e());
                    }
                );
            });
        function l() {
            try {
                const e = n(t);
                return r.split('.').reduce((e, t) => e[t], e);
            } catch (e) {
                throw new Error(`Failure get root of ${s}. Root id: ${t}. Context: ${r}`);
            }
        }
        const u = (e) => {
            const n = l();
            if ('string' != typeof e || 0 === e.length) return n;
            try {
                return e.split('.').reduce((e, t) => {
                    if (!(t in e)) throw new Error(`Key "${t}" doesn't exists in part of model`);
                    const n = e[t];
                    return 'function' == typeof n ? n.bind(e) : n;
                }, n);
            } catch (o) {
                throw new Error(`Failure readByPath in ${s}. Root id: ${t}. Context: ${r}:\n${o}\n`);
            }
        };
        function c(e) {
            viewEnv.removeDataChangedCallback(e, t) ? o.delete(e) : console.error("Can't remove callback by id:", e);
        }
        return {
            subscribe: (n, s) => {
                const a = (function (e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                })('string' == typeof s ? `${r}.${s}` : r, t, !0);
                return (o.set(a, n), e && n(u(s), []), a);
            },
            readByPath: u,
            readSafeByPath: (e) => {
                const t = l();
                return 'string' != typeof e || 0 === e.length
                    ? t
                    : e.split('.').reduce((e, t) => {
                          const n = null == e ? void 0 : e[t];
                          return 'function' == typeof n ? n.bind(e) : n;
                      }, t);
            },
            createCallback: (e, t) => {
                const n = u(t);
                return (...t) => {
                    n(e(...t));
                };
            },
            createCallbackNoArgs: (e) => {
                const t = u(e);
                return () => {
                    t();
                };
            },
            dispose: function () {
                if (0 === t || window.subViews.ids().includes(t)) for (const e of o.keys()) c(e);
                i.then((e) => e());
            },
            unsubscribe: c,
            events: a,
        };
    }
    function ee(e, t) {
        return t
            ? (function (e, t) {
                  if (!t) return e;
                  const n = (function (e) {
                      return e.startsWith('model') ? e.split('.').slice(1).join('.') : e;
                  })(t);
                  return e ? (0 === n.length ? e : `${n}.${e}`) : n;
              })(e, t.context)
            : e;
    }
    function te() {}
    function ne(e) {
        return e;
    }
    function re() {
        return !1;
    }
    function se(e) {
        return 'function' == typeof e;
    }
    function oe() {
        throw new Error('Unreachable absurd brach');
    }
    class ae {
        constructor() {
            (h(this, '_disposes', new Set()),
                h(this, 'dispose', () => {
                    for (const e of this._disposes) e();
                }));
        }
        add(e) {
            return (this._disposes.add(e), this);
        }
        remove(e) {
            return (this._disposes.delete(e), this);
        }
    }
    function ie(e, t, n, r) {
        return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
    }
    ('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
        'symbol' != typeof Symbol.asyncDispose &&
            Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
        (function () {
            if (!self.fetch) {
                ((a.prototype.append = function (e, t) {
                    ((e = s(e)), (t = o(t)));
                    var n = this.map[e];
                    (n || ((n = []), (this.map[e] = n)), n.push(t));
                }),
                    (a.prototype.delete = function (e) {
                        delete this.map[s(e)];
                    }),
                    (a.prototype.get = function (e) {
                        var t = this.map[s(e)];
                        return t ? t[0] : null;
                    }),
                    (a.prototype.getAll = function (e) {
                        return this.map[s(e)] || [];
                    }),
                    (a.prototype.has = function (e) {
                        return this.map.hasOwnProperty(s(e));
                    }),
                    (a.prototype.set = function (e, t) {
                        this.map[s(e)] = [o(t)];
                    }),
                    (a.prototype.forEach = function (e) {
                        var t = this;
                        Object.getOwnPropertyNames(this.map).forEach(function (n) {
                            e(n, t.map[n]);
                        });
                    }));
                var e =
                        'FileReader' in self &&
                        'Blob' in self &&
                        (function () {
                            try {
                                return (new Blob(), !0);
                            } catch (e) {
                                return !1;
                            }
                        })(),
                    t = 'FormData' in self,
                    n = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'],
                    r = !(
                        'undefined' == typeof window ||
                        !window.ActiveXObject ||
                        (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
                    );
                (c.call(d.prototype),
                    c.call(f.prototype),
                    (self.Headers = a),
                    (self.Request = d),
                    (self.Response = f),
                    (self.fetch = function (t, n) {
                        var s;
                        return (
                            (s = d.prototype.isPrototypeOf(t) && !n ? t : new d(t, n)),
                            new fetch.Promise(function (t, n) {
                                var o = (function () {
                                    return r && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                        ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                        : new XMLHttpRequest();
                                })();
                                function a() {
                                    if (4 === o.readyState) {
                                        var e = 1223 === o.status ? 204 : o.status;
                                        if (e < 100 || e > 599) n(new TypeError('Network request failed'));
                                        else {
                                            var r = {
                                                    status: e,
                                                    statusText: o.statusText,
                                                    headers: m(o),
                                                    url:
                                                        'responseURL' in o
                                                            ? o.responseURL
                                                            : /^X-Request-URL:/m.test(o.getAllResponseHeaders())
                                                              ? o.getResponseHeader('X-Request-URL')
                                                              : void 0,
                                                },
                                                s = 'response' in o ? o.response : o.responseText;
                                            t(new f(s, r));
                                        }
                                    }
                                }
                                ('cors' === s.credentials && (o.withCredentials = !0),
                                    (o.onreadystatechange = a),
                                    self.usingActiveXhr ||
                                        ((o.onload = a),
                                        (o.onerror = function () {
                                            n(new TypeError('Network request failed'));
                                        })),
                                    o.open(s.method, s.url, !0),
                                    'responseType' in o && e && (o.responseType = 'blob'),
                                    s.headers.forEach(function (e, t) {
                                        t.forEach(function (t) {
                                            o.setRequestHeader(e, t);
                                        });
                                    }),
                                    o.send(void 0 === s._bodyInit ? null : s._bodyInit));
                            })
                        );
                    }),
                    (fetch.Promise = self.Promise),
                    (self.fetch.polyfill = !0));
            }
            function s(e) {
                if (('string' != typeof e && (e = e.toString()), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)))
                    throw new TypeError('Invalid character in header field name');
                return e.toLowerCase();
            }
            function o(e) {
                return ('string' != typeof e && (e = e.toString()), e);
            }
            function a(e) {
                this.map = {};
                var t = this;
                e instanceof a
                    ? e.forEach(function (e, n) {
                          n.forEach(function (n) {
                              t.append(e, n);
                          });
                      })
                    : e &&
                      Object.getOwnPropertyNames(e).forEach(function (n) {
                          t.append(n, e[n]);
                      });
            }
            function i(e) {
                if (e.bodyUsed) return fetch.Promise.reject(new TypeError('Already read'));
                e.bodyUsed = !0;
            }
            function l(e) {
                return new fetch.Promise(function (t, n) {
                    ((e.onload = function () {
                        t(e.result);
                    }),
                        (e.onerror = function () {
                            n(e.error);
                        }));
                });
            }
            function u(e) {
                var t = new FileReader();
                return (t.readAsArrayBuffer(e), l(t));
            }
            function c() {
                return (
                    (this.bodyUsed = !1),
                    (this._initBody = function (n) {
                        if (((this._bodyInit = n), 'string' == typeof n)) this._bodyText = n;
                        else if (e && Blob.prototype.isPrototypeOf(n)) this._bodyBlob = n;
                        else if (t && FormData.prototype.isPrototypeOf(n)) this._bodyFormData = n;
                        else {
                            if (n) throw new Error('unsupported BodyInit type');
                            this._bodyText = '';
                        }
                    }),
                    e
                        ? ((this.blob = function () {
                              var e = i(this);
                              if (e) return e;
                              if (this._bodyBlob) return fetch.Promise.resolve(this._bodyBlob);
                              if (this._bodyFormData) throw new Error('could not read FormData body as blob');
                              return fetch.Promise.resolve(new Blob([this._bodyText]));
                          }),
                          (this.arrayBuffer = function () {
                              return this.blob().then(u);
                          }),
                          (this.text = function () {
                              var e,
                                  t,
                                  n = i(this);
                              if (n) return n;
                              if (this._bodyBlob)
                                  return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), l(t));
                              if (this._bodyFormData) throw new Error('could not read FormData body as text');
                              return fetch.Promise.resolve(this._bodyText);
                          }))
                        : (this.text = function () {
                              var e = i(this);
                              return e || fetch.Promise.resolve(this._bodyText);
                          }),
                    t &&
                        (this.formData = function () {
                            return this.text().then(h);
                        }),
                    (this.json = function () {
                        return this.text().then(function (e) {
                            return JSON.parse(e);
                        });
                    }),
                    this
                );
            }
            function d(e, t) {
                var r, s;
                if (
                    ((t = t || {}),
                    (this.url = e),
                    (this.credentials = t.credentials || 'omit'),
                    (this.headers = new a(t.headers)),
                    (this.method = ((r = t.method || 'GET'), (s = r.toUpperCase()), n.indexOf(s) > -1 ? s : r)),
                    (this.mode = t.mode || null),
                    (this.referrer = null),
                    ('GET' === this.method || 'HEAD' === this.method) && t.body)
                )
                    throw new TypeError('Body not allowed for GET or HEAD requests');
                this._initBody(t.body);
            }
            function h(e) {
                var t = new FormData();
                return (
                    e
                        .trim()
                        .split('&')
                        .forEach(function (e) {
                            if (e) {
                                var n = e.split('='),
                                    r = n.shift().replace(/\+/g, ' '),
                                    s = n.join('=').replace(/\+/g, ' ');
                                t.append(decodeURIComponent(r), decodeURIComponent(s));
                            }
                        }),
                    t
                );
            }
            function m(e) {
                var t = new a();
                return (
                    e
                        .getAllResponseHeaders()
                        .trim()
                        .split('\n')
                        .forEach(function (e) {
                            var n = e.trim().split(':'),
                                r = n.shift().trim(),
                                s = n.join(':').trim();
                            t.append(r, s);
                        }),
                    t
                );
            }
            function f(e, t) {
                (t || (t = {}),
                    this._initBody(e),
                    (this.type = 'default'),
                    (this.url = null),
                    (this.status = t.status),
                    (this.ok = this.status >= 200 && this.status < 300),
                    (this.statusText = t.statusText),
                    (this.headers = t.headers instanceof a ? t.headers : new a(t.headers)),
                    (this.url = t.url || ''));
            }
        })());
    const le = fetch;
    function ue(e, t) {
        return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
    }
    ([
        'Escape',
        'Enter',
        'Space',
        'Delete',
        'Backspace',
        'Tab',
        'Home',
        'Slash',
        'Backslash',
        'Period',
        'Comma',
        'Quote',
        'Semicolon',
        'Insert',
        'End',
        'Minus',
    ].reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {}),
        ue(
            [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'X',
                'Y',
                'Z',
            ],
            'Key',
        ),
        ue(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
        ue(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
        ue(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
        ue(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
        ue(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
        ue(['Up', 'Down'], 'Page'),
        ue(['Left', 'Right'], 'Bracket'));
    function ce(e, t) {
        e || console.error(t || 'Assertion failed');
    }
    function de(e, t, n) {
        const r = new Array(t - e);
        for (let s = e; s < t; s++) r[s] = n(s);
        return r;
    }
    ce.log = function (e, t) {
        e || console.error(t || 'Assertion failed');
    };
    function he(e, t, n = -1) {
        return me(e, t, n);
    }
    function me(e, t, n, r, s) {
        if (e === t) return 0 !== e || 1 / Number(e) == 1 / Number(t);
        if (null == e || null == t) return !1;
        if (e != e) return t != t;
        const o = typeof e;
        if ('function' !== o && 'object' !== o && 'object' != typeof t) return !1;
        const a = toString.call(e);
        if (a !== toString.call(t)) return !1;
        switch (a) {
            case '[object RegExp]':
            case '[object String]':
                return String(e) === String(t);
            case '[object Number]':
                return Number(e) != Number(e)
                    ? Number(t) != Number(t)
                    : 0 === Number(e)
                      ? 1 / Number(e) == 1 / Number(t)
                      : Number(e) === Number(t);
            case '[object Date]':
            case '[object Boolean]':
                return Number(e) === Number(t);
            case '[object Symbol]':
                return 'undefined' != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
            case '[object Map]':
            case '[object Set]':
                n >= 0 && n++;
        }
        const i = fe(e),
            l = fe(t),
            u = Array.isArray(i) && Array.isArray(l);
        if (!u) {
            if ('object' != typeof i || 'object' != typeof l) return !1;
            const e = i.constructor,
                t = l.constructor;
            if (
                e !== t &&
                !(se(e) && e instanceof e && se(t) && t instanceof t) &&
                'constructor' in i &&
                'constructor' in l
            )
                return !1;
        }
        if (0 === n) return !1;
        (n < 0 && (n = -1), (s = s || []));
        let c = (r = r || []).length;
        for (; c--; ) if (r[c] === i) return s[c] === l;
        if ((r.push(e), s.push(t), u)) {
            if (((c = i.length), c !== l.length)) return !1;
            for (; c--; ) if (!me(i[c], l[c], n - 1, r, s)) return !1;
        } else {
            const e = Object.keys(i);
            let t;
            if (((c = e.length), Object.keys(l).length !== c)) return !1;
            for (; c--; ) {
                if (((t = e[c]), void 0 === t))
                    return (console.error('Error: met undefined in object during deepEqual comparison'), !1);
                if (!Object.prototype.hasOwnProperty.call(l, t) || !me(i[t], l[t], n - 1, r, s)) return !1;
            }
        }
        return (r.pop(), s.pop(), !0);
    }
    function fe(e) {
        return e instanceof Map || e instanceof Set ? Array.from(e.entries()) : e;
    }
    ['ko', 'no'].includes(p.resolve('langCode'));
    const pe = {
        shallow: function (e, t) {
            return he(e, t, 1);
        },
    };
    function ge(e) {
        const t = [],
            n = e
                .replace(/&nbsp;/g, ' ')
                .replace(/ /g, ' ')
                .matchAll(/[(（《「]*["'][^'"]*["'][。，:;：；—！!？?》」•%)、]*|.*?(?=[(（《「]*["'])|.*/gsu);
        for (const [r] of n) {
            const e = r.matchAll(
                /[(（《「“‘'"]*[\u4E00-\u9FFF\u3400-\u4DBF%][。，:;：；—！!？?》」•%)、’”'"]*|[(（《「“‘'"]*[a-zA-Z0-9-.,]+[。，:;：；—！!？?》」•%)、’”'"]*|\xa0|[^\u4E00-\u9FFF\u3400-\u4DBF\s]/gu,
            );
            for (const [n] of e) t.push(n);
        }
        return t;
    }
    const be = {
        zh_cn: ge,
        zh_sg: ge,
        zh_tw: ge,
        ja: function (e) {
            const t = [],
                n = e
                    .replace(/&nbsp;/g, ' ')
                    .matchAll(
                        /[【「(（『《]?[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF%](?:[。!?、…・ー—–!%?）)】」》』]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\u3040-\u30FF/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|\u00A0|[^\s]/gu,
                    );
            for (const [r] of n) t.push(r);
            return t;
        },
        ko: function (e) {
            const t = [],
                n = e
                    .replace(/&nbsp;/g, ' ')
                    .matchAll(
                        /\s+|\u00A0|[【「(（『《]?[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F%](?:[。!?、…・ー—–!%?）)】」》『]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|[^\s]/gu,
                    );
            for (const [r] of n) t.push(r);
            return t;
        },
        th: function (e) {
            var t;
            const n = [],
                r = e
                    .replace(/&nbsp;/g, ' ')
                    .matchAll(
                        /[【「(（『"《]?[\u0E00-\u0E7F%](?:[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E。!?,.:、…・/ー—–!%+?）)】」"》』]+)?|[「【(（『《"]?\d+(?:,\d{3})*(?:-\d+(?:,\d{3})*)?(?:\s*[a-zA-Z\u0E00-\u0E7F/%]+)?(?:[。.,，、:;：；!?）)】」"》・%)、]+)?|[「【(（『《"]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?"》】」）)』]+)?|[\u00A0 ]|[^\s]/gu,
                    );
            for (const [s] of r)
                /^\s+$/.test(s)
                    ? n.length
                        ? (n[n.length - 1] += s)
                        : n.push(s)
                    : 1 === n.length && (null == (t = n[0]) ? void 0 : t.startsWith('  '))
                      ? (n[0] = ' ' + s)
                      : n.push(s);
            return n;
        },
    };
    function ve(e) {
        return e.split(' ');
    }
    const _e = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko', 'th']);
    function ye() {
        return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    }
    const we = () => {};
    function xe(t) {
        const n = t;
        return r.forwardRef(function (t, r) {
            const o = s.useAdaptive(t, t.adaptive),
                { path: a, ...i } = o,
                l = o.images ?? p.resolve('images'),
                u = { ...i, ref: r };
            {
                const t = a ? l.readOr(a, we, 'warn') : void 0;
                return t ? e.jsx(n, { ...u, src: t }) : e.jsx(n, { ...u, unknown: !0 });
            }
        });
    }
    const Pe = {
        background:
            'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
        backgroundSize: '20rem 20rem',
        backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
        backgroundColor: '#000',
    };
    r.forwardRef(function (t, n) {
        if (!t.src) {
            const {
                repeat: r,
                fit: s,
                position: o,
                width: a,
                src: i,
                height: l,
                unselectable: u,
                unknownStyle: c = Pe,
                ...d
            } = t;
            return e.jsx('div', { ...d, ref: n, style: { width: t.width, height: t.height, ...c, ...t.style } });
        }
        const { repeat: r, fit: s, position: o, width: a, height: i, unknownStyle: l, unselectable: u, ...c } = t;
        return e.jsx('div', {
            ...c,
            ref: n,
            style: {
                backgroundImage: `url(${t.src})`,
                backgroundRepeat: r ?? 'no-repeat',
                backgroundSize: s ?? 'contain',
                backgroundPosition: o ?? 'center center',
                width: 'number' == typeof a ? `${a}rem` : a,
                height: 'number' == typeof i ? `${i}rem` : i,
                ...c.style,
            },
        });
    });
    const ke = xe(
        r.forwardRef(function (t, n) {
            if (t.unknown) {
                const {
                    repeat: r,
                    fit: s,
                    position: o,
                    width: a,
                    src: i,
                    height: l,
                    unselectable: u,
                    unknown: c,
                    unknownStyle: d = Pe,
                    ...h
                } = t;
                return e.jsx('div', { ...h, ref: n, style: { width: t.width, height: t.height, ...d, ...t.style } });
            }
            const {
                repeat: r,
                fit: s,
                position: o,
                width: a,
                height: i,
                unknownStyle: l,
                unknown: u,
                unselectable: c,
                ...d
            } = t;
            return e.jsx('div', {
                ...d,
                ref: n,
                style: {
                    backgroundImage: `url(${t.src})`,
                    backgroundRepeat: r ?? 'no-repeat',
                    backgroundSize: s ?? 'contain',
                    backgroundPosition: o ?? 'center center',
                    width: 'number' == typeof a ? `${a}rem` : a,
                    height: 'number' == typeof i ? `${i}rem` : i,
                    ...d.style,
                },
            });
        }),
    );
    xe(
        r.forwardRef(function (t, n) {
            const { width: r, height: s, src: o, unselectable: a, unknown: i, unknownStyle: l = Pe, ...u } = t;
            return t.unknown
                ? e.jsx('div', { ...u, style: { width: t.width, height: t.height, ...l } })
                : e.jsx('img', { ...u, ref: n, src: o, width: r, height: s });
        }),
    );
    const Ee = (e) => {
            const t = r.useRef();
            return (
                r.useEffect(() => {
                    t.current = e;
                }, [e]),
                t.current
            );
        },
        je = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
        Ce = new Set(['number', 'string', 'boolean', 'bigint']),
        Se = new Set(['Dict']);
    function Re(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
        var s, o;
        const a = e,
            i = typeof e;
        if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
        if (je.has(i)) return a;
        if (null === a) return a;
        const l = { depth: n + 1, maxDepth: r };
        if (Array.isArray(a)) return a.map((e) => Re(e, l));
        if ('object' === i) {
            const r = (null == (s = a.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
            if (Array.isArray(e)) return e.map((e) => Re(e, l));
            if ('CoherentArrayProxy' === r) return e.map((e) => Re(e.value, l));
            if ('Dict' === r) return;
            if ('UNKNOWN' === r) return;
            if (r.includes(':ViewModel:') || 'Object' === r) {
                if (t && 0 === n) {
                    const e = {};
                    for (const t in a) {
                        const n = a[t];
                        Ce.has(typeof n) && (e[t] = n);
                    }
                    return e;
                }
                {
                    const e = {};
                    for (const t in a) {
                        const n = a[t],
                            r = (null == (o = null == a ? void 0 : a.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                        Se.has(r) || (e[t] = Re(n, l));
                    }
                    return e;
                }
            }
            const i = {};
            for (const e of Object.keys(a)) i[e] = Re(a[e], l);
            return i;
        }
        return (console.error('Incorrect value to clone model', a), a);
    }
    const Ne = { deep: !1, equals: re },
        Ae = { cloneItem: !0 },
        Me = { shallow: !1 };
    class Te {
        constructor(e, t = Ae) {
            (h(this, '_data'),
                h(this, '_keys'),
                h(
                    this,
                    'set',
                    n.action((e) => {
                        this._data.set(e);
                    }),
                ),
                (this.options = t));
            const r = {},
                s = e.keys();
            for (let o = 0; o < s.length; o++) {
                const t = s[o];
                r[t] = n.observable.box(this.takeItem(e, t), Ne);
            }
            ((this._keys = n.observable.set(new Set(s))), (this._data = n.observable.box(r, Ne)));
        }
        get keys() {
            return this._keys;
        }
        get size() {
            return this._keys.size;
        }
        get length() {
            return this._keys.size;
        }
        update(e, t) {
            const r = this._data.get();
            for (let s = 0; s < t.length; s++) {
                const o = t[s],
                    a = this.takeItem(e, o);
                o in r
                    ? null === a
                        ? (delete r[o], this._keys.delete(o), this.set(r))
                        : r[o].set(a)
                    : null !== a && ((r[o] = n.observable.box(a, Ne)), this._keys.add(o), this.set(r));
            }
        }
        entries() {
            return Object.entries(this._data.get());
        }
        values() {
            return Object.values(this._data.get());
        }
        get(e) {
            const t = this.untrackedData()[e];
            if (t) return t.get();
            this._data.get();
        }
        unsafeGet(e) {
            const t = this.get(e);
            if (void 0 === t) throw new Error(`Can't resolve ${e} in DLDict`);
            return t;
        }
        mapKeys(e) {
            const t = [];
            for (const n of this.keys.values()) t.push(e(n));
            return t;
        }
        map(e) {
            const t = [],
                n = this._data.get();
            for (const r of this.keys.values()) t.push(e(n[r].get(), r));
            return t;
        }
        reduce(e, t) {
            let n = t;
            const r = this._data.get();
            for (const s of this.keys.values()) n = e(n, r[s].get(), s);
            return n;
        }
        takeItem(e, t) {
            const n = e.get(t);
            return this.options.cloneItem ? Re(n, Me) : n;
        }
        untrackedData() {
            return n.untracked(() => this._data.get());
        }
    }
    const Fe = r.createContext({ mode: 'real' }),
        Ie = { equals: re, deep: !1 };
    function Oe(e, t, r) {
        const s = [];
        e.events.subscribersNotified.on(
            n.action(() => {
                for (const e of s) e();
                s.splice(0, s.length);
            }),
        );
        const o = (o, a, i = Ie) => {
                const l = n.observable.box(o(r(a)), i);
                return ('real' === t && e.subscribe((e) => s.push(() => l.set(o(e))), a), l);
            },
            a = (n, o) => {
                const a = new Te(r(n), o);
                return ('real' === t && e.subscribe((e, t) => s.push(() => a.update(e, t)), n), a);
            },
            i = (o, a) => {
                const i = n.observable.box(r(o) ?? a, Ie);
                return ('real' === t && e.subscribe((e) => s.push(() => i.set(e)), o), i);
            };
        return {
            dict: a,
            dictRef: (e, t) => a(e, { cloneItem: !1, ...t }),
            arrayClone: (e) => o(Re, e),
            array: i,
            object: i,
            transform: o,
            primitives: (o, a) => {
                const i = r(a);
                if (Array.isArray(o)) {
                    const r = o.reduce((e, t) => ((e[t] = n.observable.box(i[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                s.push(() =>
                                    o.forEach((t) => {
                                        r[t].set(e[t]);
                                    }),
                                );
                            }, a),
                        r
                    );
                }
                {
                    const r = o,
                        l = Object.entries(r),
                        u = l.reduce((e, [t, r]) => ((e[r] = n.observable.box(i[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                s.push(() =>
                                    l.forEach(([t, n]) => {
                                        u[n].set(e[t]);
                                    }),
                                );
                            }, a),
                        u
                    );
                }
            },
        };
    }
    var $e = Ye(),
        Ve = (e) => Ge(e, $e),
        Le = Ye();
    Ve.write = (e) => Ge(e, Le);
    var De = Ye();
    Ve.onStart = (e) => Ge(e, De);
    var ze = Ye();
    Ve.onFrame = (e) => Ge(e, ze);
    var Be = Ye();
    Ve.onFinish = (e) => Ge(e, Be);
    var qe = [];
    Ve.setTimeout = (e, t) => {
        const n = Ve.now() + t,
            r = () => {
                const e = qe.findIndex((e) => e.cancel == r);
                (~e && qe.splice(e, 1), (We -= ~e ? 1 : 0));
            },
            s = { time: n, handler: e, cancel: r };
        return (qe.splice(Ue(n), 0, s), (We += 1), Ze(), s);
    };
    var Ue = (e) => ~(~qe.findIndex((t) => t.time > e) || ~qe.length);
    ((Ve.cancel = (e) => {
        (De.delete(e), ze.delete(e), Be.delete(e), $e.delete(e), Le.delete(e));
    }),
        (Ve.sync = (e) => {
            ((Qe = !0), Ve.batchedUpdates(e), (Qe = !1));
        }),
        (Ve.throttle = (e) => {
            let t;
            function n() {
                try {
                    e(...t);
                } finally {
                    t = null;
                }
            }
            function r(...e) {
                ((t = e), Ve.onStart(n));
            }
            return (
                (r.handler = e),
                (r.cancel = () => {
                    (De.delete(n), (t = null));
                }),
                r
            );
        }));
    var Xe = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
    ((Ve.use = (e) => (Xe = e)),
        (Ve.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
        (Ve.batchedUpdates = (e) => e()),
        (Ve.catch = console.error),
        (Ve.frameLoop = 'always'),
        (Ve.advance = () => {
            'demand' !== Ve.frameLoop
                ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
                : Je();
        }));
    var He = -1,
        We = 0,
        Qe = !1;
    function Ge(e, t) {
        Qe ? (t.delete(e), e(0)) : (t.add(e), Ze());
    }
    function Ze() {
        He < 0 && ((He = 0), 'demand' !== Ve.frameLoop && Xe(Ke));
    }
    function Ke() {
        ~He && (Xe(Ke), Ve.batchedUpdates(Je));
    }
    function Je() {
        const e = He;
        He = Ve.now();
        const t = Ue(He);
        (t && (et(qe.splice(0, t), (e) => e.handler()), (We -= t)),
            We
                ? (De.flush(), $e.flush(e ? Math.min(64, He - e) : 16.667), ze.flush(), Le.flush(), Be.flush())
                : (He = -1));
    }
    function Ye() {
        let e = new Set(),
            t = e;
        return {
            add(n) {
                ((We += t != e || e.has(n) ? 0 : 1), e.add(n));
            },
            delete: (n) => ((We -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
            flush(n) {
                t.size && ((e = new Set()), (We -= t.size), et(t, (t) => t(n) && e.add(t)), (We += e.size), (t = e));
            },
        };
    }
    function et(e, t) {
        e.forEach((e) => {
            try {
                t(e);
            } catch (n) {
                Ve.catch(n);
            }
        });
    }
    var tt = Object.defineProperty,
        nt = {};
    function rt() {}
    ((e, t) => {
        for (var n in t) tt(e, n, { get: t[n], enumerable: !0 });
    })(nt, {
        assign: () => bt,
        colors: () => ft,
        createStringInterpolator: () => ct,
        skipAnimation: () => pt,
        to: () => dt,
        willAdvance: () => gt,
    });
    var st = {
        arr: Array.isArray,
        obj: (e) => !!e && 'Object' === e.constructor.name,
        fun: (e) => 'function' == typeof e,
        str: (e) => 'string' == typeof e,
        num: (e) => 'number' == typeof e,
        und: (e) => void 0 === e,
    };
    function ot(e, t) {
        if (st.arr(e)) {
            if (!st.arr(t) || e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
        }
        return e === t;
    }
    var at = (e, t) => e.forEach(t);
    function it(e, t, n) {
        if (st.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
    }
    var lt = (e) => (st.und(e) ? [] : st.arr(e) ? e : [e]);
    function ut(e, t) {
        if (e.size) {
            const n = Array.from(e);
            (e.clear(), at(n, t));
        }
    }
    var ct,
        dt,
        ht = (e, ...t) => ut(e, (e) => e(...t)),
        mt = () =>
            'undefined' == typeof window ||
            !window.navigator ||
            /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        ft = null,
        pt = !1,
        gt = rt,
        bt = (e) => {
            (e.to && (dt = e.to),
                e.now && (Ve.now = e.now),
                void 0 !== e.colors && (ft = e.colors),
                null != e.skipAnimation && (pt = e.skipAnimation),
                e.createStringInterpolator && (ct = e.createStringInterpolator),
                e.requestAnimationFrame && Ve.use(e.requestAnimationFrame),
                e.batchedUpdates && (Ve.batchedUpdates = e.batchedUpdates),
                e.willAdvance && (gt = e.willAdvance),
                e.frameLoop && (Ve.frameLoop = e.frameLoop));
        },
        vt = new Set(),
        _t = [],
        yt = [],
        wt = 0,
        xt = {
            get idle() {
                return !vt.size && !_t.length;
            },
            start(e) {
                wt > e.priority ? (vt.add(e), Ve.onStart(Pt)) : (kt(e), Ve(jt));
            },
            advance: jt,
            sort(e) {
                if (wt) Ve.onFrame(() => xt.sort(e));
                else {
                    const t = _t.indexOf(e);
                    ~t && (_t.splice(t, 1), Et(e));
                }
            },
            clear() {
                ((_t = []), vt.clear());
            },
        };
    function Pt() {
        (vt.forEach(kt), vt.clear(), Ve(jt));
    }
    function kt(e) {
        _t.includes(e) || Et(e);
    }
    function Et(e) {
        _t.splice(
            (function (e, t) {
                const n = e.findIndex(t);
                return n < 0 ? e.length : n;
            })(_t, (t) => t.priority > e.priority),
            0,
            e,
        );
    }
    function jt(e) {
        const t = yt;
        for (let n = 0; n < _t.length; n++) {
            const r = _t[n];
            ((wt = r.priority), r.idle || (gt(r), r.advance(e), r.idle || t.push(r)));
        }
        return ((wt = 0), ((yt = _t).length = 0), (_t = t).length > 0);
    }
    var Ct = '[-+]?\\d*\\.?\\d+',
        St = Ct + '%';
    function Rt(...e) {
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var Nt = new RegExp('rgb' + Rt(Ct, Ct, Ct)),
        At = new RegExp('rgba' + Rt(Ct, Ct, Ct, Ct)),
        Mt = new RegExp('hsl' + Rt(Ct, St, St)),
        Tt = new RegExp('hsla' + Rt(Ct, St, St, Ct)),
        Ft = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        It = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ot = /^#([0-9a-fA-F]{6})$/,
        $t = /^#([0-9a-fA-F]{8})$/;
    function Vt(e, t, n) {
        return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        );
    }
    function Lt(e, t, n) {
        const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
            s = 2 * n - r,
            o = Vt(s, r, e + 1 / 3),
            a = Vt(s, r, e),
            i = Vt(s, r, e - 1 / 3);
        return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * i) << 8);
    }
    function Dt(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function zt(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function Bt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function qt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
    }
    function Ut(e) {
        let t = (function (e) {
            let t;
            return 'number' == typeof e
                ? e >>> 0 === e && e >= 0 && e <= 4294967295
                    ? e
                    : null
                : (t = Ot.exec(e))
                  ? parseInt(t[1] + 'ff', 16) >>> 0
                  : ft && void 0 !== ft[e]
                    ? ft[e]
                    : (t = Nt.exec(e))
                      ? ((Dt(t[1]) << 24) | (Dt(t[2]) << 16) | (Dt(t[3]) << 8) | 255) >>> 0
                      : (t = At.exec(e))
                        ? ((Dt(t[1]) << 24) | (Dt(t[2]) << 16) | (Dt(t[3]) << 8) | Bt(t[4])) >>> 0
                        : (t = Ft.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                          : (t = $t.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = It.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = Mt.exec(e))
                                ? (255 | Lt(zt(t[1]), qt(t[2]), qt(t[3]))) >>> 0
                                : (t = Tt.exec(e))
                                  ? (Lt(zt(t[1]), qt(t[2]), qt(t[3])) | Bt(t[4])) >>> 0
                                  : null;
        })(e);
        if (null === t) return e;
        t = t || 0;
        return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
    }
    var Xt = (e, t, n) => {
        if (st.fun(e)) return e;
        if (st.arr(e)) return Xt({ range: e, output: t, extrapolate: n });
        if (st.str(e.output[0])) return ct(e);
        const r = e,
            s = r.output,
            o = r.range || [0, 1],
            a = r.extrapolateLeft || r.extrapolate || 'extend',
            i = r.extrapolateRight || r.extrapolate || 'extend',
            l = r.easing || ((e) => e);
        return (e) => {
            const t = (function (e, t) {
                for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                return n - 1;
            })(e, o);
            return (function (e, t, n, r, s, o, a, i, l) {
                let u = l ? l(e) : e;
                if (u < t) {
                    if ('identity' === a) return u;
                    'clamp' === a && (u = t);
                }
                if (u > n) {
                    if ('identity' === i) return u;
                    'clamp' === i && (u = n);
                }
                if (r === s) return r;
                if (t === n) return e <= t ? r : s;
                t === -1 / 0 ? (u = -u) : n === 1 / 0 ? (u -= t) : (u = (u - t) / (n - t));
                ((u = o(u)), r === -1 / 0 ? (u = -u) : s === 1 / 0 ? (u += r) : (u = u * (s - r) + r));
                return u;
            })(e, o[t], o[t + 1], s[t], s[t + 1], l, a, i, r.map);
        };
    };
    var Ht = { linear: (e) => e, easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2) },
        Wt = Symbol.for('FluidValue.get'),
        Qt = Symbol.for('FluidValue.observers'),
        Gt = (e) => Boolean(e && e[Wt]),
        Zt = (e) => (e && e[Wt] ? e[Wt]() : e),
        Kt = (e) => e[Qt] || null;
    function Jt(e, t) {
        const n = e[Qt];
        n &&
            n.forEach((e) => {
                !(function (e, t) {
                    e.eventObserved ? e.eventObserved(t) : e(t);
                })(e, t);
            });
    }
    var Yt = class {
            constructor(e) {
                if (!e && !(e = this.get)) throw Error('Unknown getter');
                en(this, e);
            }
        },
        en = (e, t) => sn(e, Wt, t);
    function tn(e, t) {
        if (e[Wt]) {
            let n = e[Qt];
            (n || sn(e, Qt, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
        }
        return t;
    }
    function nn(e, t) {
        const n = e[Qt];
        if (n && n.has(t)) {
            const r = n.size - 1;
            (r ? n.delete(t) : (e[Qt] = null), e.observerRemoved && e.observerRemoved(r, t));
        }
    }
    var rn,
        sn = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
        on = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        an = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ln = new RegExp(`(${on.source})(%|[a-z]+)`, 'i'),
        un = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        cn = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        dn = (e) => {
            const [t, n] = hn(e);
            if (!t || mt()) return e;
            const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
            if (r) return r.trim();
            if (n && n.startsWith('--')) {
                const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
                return t || e;
            }
            return n && cn.test(n) ? dn(n) : n || e;
        },
        hn = (e) => {
            const t = cn.exec(e);
            if (!t) return [,];
            const [, n, r] = t;
            return [n, r];
        },
        mn = (e, t, n, r, s) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${s})`,
        fn = (e) => {
            rn || (rn = ft ? new RegExp(`(${Object.keys(ft).join('|')})(?!\\w)`, 'g') : /^\b$/);
            const t = e.output.map((e) => Zt(e).replace(cn, dn).replace(an, Ut).replace(rn, Ut)),
                n = t.map((e) => e.match(on).map(Number)),
                r = n[0].map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                ),
                s = r.map((t) => Xt({ ...e, output: t }));
            return (e) => {
                var n;
                const r = !ln.test(t[0]) && (null == (n = t.find((e) => ln.test(e))) ? void 0 : n.replace(on, ''));
                let o = 0;
                return t[0].replace(on, () => `${s[o++](e)}${r || ''}`).replace(un, mn);
            };
        },
        pn = 'react-spring: ',
        gn = (e) => {
            const t = e;
            let n = !1;
            if ('function' != typeof t) throw new TypeError(`${pn}once requires a function parameter`);
            return (...e) => {
                n || (t(...e), (n = !0));
            };
        },
        bn = gn(console.warn);
    var vn = gn(console.warn);
    function _n(e) {
        return st.str(e) && ('#' == e[0] || /\d/.test(e) || (!mt() && cn.test(e)) || e in (ft || {}));
    }
    var yn = mt() ? r.useEffect : r.useLayoutEffect,
        wn = () => {
            const e = r.useRef(!1);
            return (
                yn(
                    () => (
                        (e.current = !0),
                        () => {
                            e.current = !1;
                        }
                    ),
                    [],
                ),
                e
            );
        };
    function xn() {
        const e = r.useState()[1],
            t = wn();
        return () => {
            t.current && e(Math.random());
        };
    }
    var Pn = (e) => r.useEffect(e, kn),
        kn = [];
    function En(e) {
        const t = r.useRef();
        return (
            r.useEffect(() => {
                t.current = e;
            }),
            t.current
        );
    }
    var jn = Symbol.for('Animated:node'),
        Cn = (e) => e && e[jn],
        Sn = (e, t) => {
            return (
                (n = e),
                (r = jn),
                (s = t),
                Object.defineProperty(n, r, { value: s, writable: !0, configurable: !0 })
            );
            var n, r, s;
        },
        Rn = (e) => e && e[jn] && e[jn].getPayload(),
        Nn = class {
            constructor() {
                Sn(this, this);
            }
            getPayload() {
                return this.payload || [];
            }
        },
        An = class extends Nn {
            constructor(e) {
                (super(),
                    (this._value = e),
                    (this.done = !0),
                    (this.durationProgress = 0),
                    st.num(this._value) && (this.lastPosition = this._value));
            }
            static create(e) {
                return new An(e);
            }
            getPayload() {
                return [this];
            }
            getValue() {
                return this._value;
            }
            setValue(e, t) {
                return (
                    st.num(e) &&
                        ((this.lastPosition = e),
                        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                    this._value !== e && ((this._value = e), !0)
                );
            }
            reset() {
                const { done: e } = this;
                ((this.done = !1),
                    st.num(this._value) &&
                        ((this.elapsedTime = 0),
                        (this.durationProgress = 0),
                        (this.lastPosition = this._value),
                        e && (this.lastVelocity = null),
                        (this.v0 = null)));
            }
        },
        Mn = class extends An {
            constructor(e) {
                (super(0), (this._string = null), (this._toString = Xt({ output: [e, e] })));
            }
            static create(e) {
                return new Mn(e);
            }
            getValue() {
                const e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }
            setValue(e) {
                if (st.str(e)) {
                    if (e == this._string) return !1;
                    ((this._string = e), (this._value = 1));
                } else {
                    if (!super.setValue(e)) return !1;
                    this._string = null;
                }
                return !0;
            }
            reset(e) {
                (e && (this._toString = Xt({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
            }
        },
        Tn = { dependencies: null },
        Fn = class extends Nn {
            constructor(e) {
                (super(), (this.source = e), this.setValue(e));
            }
            getValue(e) {
                const t = {};
                return (
                    it(this.source, (n, r) => {
                        var s;
                        (s = n) && s[jn] === s ? (t[r] = n.getValue(e)) : Gt(n) ? (t[r] = Zt(n)) : e || (t[r] = n);
                    }),
                    t
                );
            }
            setValue(e) {
                ((this.source = e), (this.payload = this._makePayload(e)));
            }
            reset() {
                this.payload && at(this.payload, (e) => e.reset());
            }
            _makePayload(e) {
                if (e) {
                    const t = new Set();
                    return (it(e, this._addToPayload, t), Array.from(t));
                }
            }
            _addToPayload(e) {
                Tn.dependencies && Gt(e) && Tn.dependencies.add(e);
                const t = Rn(e);
                t && at(t, (e) => this.add(e));
            }
        },
        In = class extends Fn {
            constructor(e) {
                super(e);
            }
            static create(e) {
                return new In(e);
            }
            getValue() {
                return this.source.map((e) => e.getValue());
            }
            setValue(e) {
                const t = this.getPayload();
                return e.length == t.length
                    ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                    : (super.setValue(e.map(On)), !0);
            }
        };
    function On(e) {
        return (_n(e) ? Mn : An).create(e);
    }
    function $n(e) {
        const t = Cn(e);
        return t ? t.constructor : st.arr(e) ? In : _n(e) ? Mn : An;
    }
    var Vn = (e, t) => {
            const n = !st.fun(e) || (e.prototype && e.prototype.isReactComponent);
            return r.forwardRef((s, o) => {
                const a = r.useRef(null),
                    i =
                        n &&
                        r.useCallback(
                            (e) => {
                                a.current = (function (e, t) {
                                    e && (st.fun(e) ? e(t) : (e.current = t));
                                    return t;
                                })(o, e);
                            },
                            [o],
                        ),
                    [l, u] = (function (e, t) {
                        const n = new Set();
                        ((Tn.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                        return ((e = new Fn(e)), (Tn.dependencies = null), [e, n]);
                    })(s, t),
                    c = xn(),
                    d = () => {
                        const e = a.current;
                        if (n && !e) return;
                        !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && c();
                    },
                    h = new Ln(d, u),
                    m = r.useRef();
                (yn(
                    () => (
                        (m.current = h),
                        at(u, (e) => tn(e, h)),
                        () => {
                            m.current && (at(m.current.deps, (e) => nn(e, m.current)), Ve.cancel(m.current.update));
                        }
                    ),
                ),
                    r.useEffect(d, []),
                    Pn(() => () => {
                        const e = m.current;
                        at(e.deps, (t) => nn(t, e));
                    }));
                const p = t.getComponentProps(l.getValue());
                return f.createElement(e, { ...p, ref: i });
            });
        },
        Ln = class {
            constructor(e, t) {
                ((this.update = e), (this.deps = t));
            }
            eventObserved(e) {
                'change' == e.type && Ve.write(this.update);
            }
        };
    var Dn = Symbol.for('AnimatedComponent'),
        zn = (e) => (st.str(e) ? e : e && st.str(e.displayName) ? e.displayName : (st.fun(e) && e.name) || null);
    function Bn(e, ...t) {
        return st.fun(e) ? e(...t) : e;
    }
    var qn = (e, t) => !0 === e || !!(t && e && (st.fun(e) ? e(t) : lt(e).includes(t))),
        Un = (e, t) => (st.obj(e) ? t && e[t] : e),
        Xn = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
        Hn = (e) => e,
        Wn = (e, t = Hn) => {
            let n = Qn;
            e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
            const r = {};
            for (const s of n) {
                const n = t(e[s], s);
                st.und(n) || (r[s] = n);
            }
            return r;
        },
        Qn = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
        Gn = {
            config: 1,
            from: 1,
            to: 1,
            ref: 1,
            loop: 1,
            reset: 1,
            pause: 1,
            cancel: 1,
            reverse: 1,
            immediate: 1,
            default: 1,
            delay: 1,
            onProps: 1,
            onStart: 1,
            onChange: 1,
            onPause: 1,
            onResume: 1,
            onRest: 1,
            onResolve: 1,
            items: 1,
            trail: 1,
            sort: 1,
            expires: 1,
            initial: 1,
            enter: 1,
            update: 1,
            leave: 1,
            children: 1,
            onDestroyed: 1,
            keys: 1,
            callId: 1,
            parentId: 1,
        };
    function Zn(e) {
        const t = (function (e) {
            const t = {};
            let n = 0;
            if (
                (it(e, (e, r) => {
                    Gn[r] || ((t[r] = e), n++);
                }),
                n)
            )
                return t;
        })(e);
        if (t) {
            const n = { to: t };
            return (it(e, (e, r) => r in t || (n[r] = e)), n);
        }
        return { ...e };
    }
    function Kn(e) {
        return (
            (e = Zt(e)),
            st.arr(e) ? e.map(Kn) : _n(e) ? nt.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
        );
    }
    function Jn(e) {
        for (const t in e) return !0;
        return !1;
    }
    function Yn(e) {
        return st.fun(e) || (st.arr(e) && st.obj(e[0]));
    }
    function er(e, t) {
        var n;
        (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
    }
    function tr(e, t) {
        var n;
        t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
    }
    var nr = { tension: 170, friction: 26, mass: 1, damping: 1, easing: Ht.linear, clamp: !1 };
    function rr(e, t) {
        if (st.und(t.decay)) {
            const n = !st.und(t.tension) || !st.und(t.friction);
            ((!n && st.und(t.frequency) && st.und(t.damping) && st.und(t.mass)) ||
                ((e.duration = void 0), (e.decay = void 0)),
                n && (e.frequency = void 0));
        } else e.duration = void 0;
    }
    var sr = [];
    function or(e, { key: t, props: n, defaultProps: r, state: s, actions: o }) {
        return new Promise((a, i) => {
            let l,
                u,
                c = qn(n.cancel ?? (null == r ? void 0 : r.cancel), t);
            if (c) m();
            else {
                st.und(n.pause) || (s.paused = qn(n.pause, t));
                let e = null == r ? void 0 : r.pause;
                (!0 !== e && (e = s.paused || qn(e, t)),
                    (l = Bn(n.delay || 0, t)),
                    e ? (s.resumeQueue.add(h), o.pause()) : (o.resume(), h()));
            }
            function d() {
                (s.resumeQueue.add(h), s.timeouts.delete(u), u.cancel(), (l = u.time - Ve.now()));
            }
            function h() {
                l > 0 && !nt.skipAnimation
                    ? ((s.delayed = !0), (u = Ve.setTimeout(m, l)), s.pauseQueue.add(d), s.timeouts.add(u))
                    : m();
            }
            function m() {
                (s.delayed && (s.delayed = !1),
                    s.pauseQueue.delete(d),
                    s.timeouts.delete(u),
                    e <= (s.cancelId || 0) && (c = !0));
                try {
                    o.start({ ...n, callId: e, cancel: c }, a);
                } catch (t) {
                    i(t);
                }
            }
        });
    }
    var ar = (e, t) =>
            1 == t.length
                ? t[0]
                : t.some((e) => e.cancelled)
                  ? ur(e.get())
                  : t.every((e) => e.noop)
                    ? ir(e.get())
                    : lr(
                          e.get(),
                          t.every((e) => e.finished),
                      ),
        ir = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        lr = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
        ur = (e) => ({ value: e, cancelled: !0, finished: !1 });
    function cr(e, t, n, r) {
        const { callId: s, parentId: o, onRest: a } = t,
            { asyncTo: i, promise: l } = n;
        return o || e !== i || t.reset
            ? (n.promise = (async () => {
                  ((n.asyncId = s), (n.asyncTo = e));
                  const u = Wn(t, (e, t) => ('onRest' === t ? void 0 : e));
                  let c, d;
                  const h = new Promise((e, t) => ((c = e), (d = t))),
                      m = (e) => {
                          const t = (s <= (n.cancelId || 0) && ur(r)) || (s !== n.asyncId && lr(r, !1));
                          if (t) throw ((e.result = t), d(e), e);
                      },
                      f = (e, t) => {
                          const o = new hr(),
                              a = new mr();
                          return (async () => {
                              if (nt.skipAnimation) throw (dr(n), (a.result = lr(r, !1)), d(a), a);
                              m(o);
                              const i = st.obj(e) ? { ...e } : { ...t, to: e };
                              ((i.parentId = s),
                                  it(u, (e, t) => {
                                      st.und(i[t]) && (i[t] = e);
                                  }));
                              const l = await r.start(i);
                              return (
                                  m(o),
                                  n.paused &&
                                      (await new Promise((e) => {
                                          n.resumeQueue.add(e);
                                      })),
                                  l
                              );
                          })();
                      };
                  let p;
                  if (nt.skipAnimation) return (dr(n), lr(r, !1));
                  try {
                      let t;
                      ((t = st.arr(e)
                          ? (async (e) => {
                                for (const t of e) await f(t);
                            })(e)
                          : Promise.resolve(e(f, r.stop.bind(r)))),
                          await Promise.all([t.then(c), h]),
                          (p = lr(r.get(), !0, !1)));
                  } catch (g) {
                      if (g instanceof hr) p = g.result;
                      else {
                          if (!(g instanceof mr)) throw g;
                          p = g.result;
                      }
                  } finally {
                      s == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? i : void 0), (n.promise = o ? l : void 0));
                  }
                  return (
                      st.fun(a) &&
                          Ve.batchedUpdates(() => {
                              a(p, r, r.item);
                          }),
                      p
                  );
              })())
            : l;
    }
    function dr(e, t) {
        (ut(e.timeouts, (e) => e.cancel()),
            e.pauseQueue.clear(),
            e.resumeQueue.clear(),
            (e.asyncId = e.asyncTo = e.promise = void 0),
            t && (e.cancelId = t));
    }
    var hr = class extends Error {
            constructor() {
                super(
                    'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
                );
            }
        },
        mr = class extends Error {
            constructor() {
                super('SkipAnimationSignal');
            }
        },
        fr = (e) => e instanceof gr,
        pr = 1,
        gr = class extends Yt {
            constructor() {
                (super(...arguments), (this.id = pr++), (this._priority = 0));
            }
            get priority() {
                return this._priority;
            }
            set priority(e) {
                this._priority != e && ((this._priority = e), this._onPriorityChange(e));
            }
            get() {
                const e = Cn(this);
                return e && e.getValue();
            }
            to(...e) {
                return nt.to(this, e);
            }
            interpolate(...e) {
                return (bn(`${pn}The "interpolate" function is deprecated in v9 (use "to" instead)`), nt.to(this, e));
            }
            toJSON() {
                return this.get();
            }
            observerAdded(e) {
                1 == e && this._attach();
            }
            observerRemoved(e) {
                0 == e && this._detach();
            }
            _attach() {}
            _detach() {}
            _onChange(e, t = !1) {
                Jt(this, { type: 'change', parent: this, value: e, idle: t });
            }
            _onPriorityChange(e) {
                (this.idle || xt.sort(this), Jt(this, { type: 'priority', parent: this, priority: e }));
            }
        },
        br = Symbol.for('SpringPhase'),
        vr = (e) => (1 & e[br]) > 0,
        _r = (e) => (2 & e[br]) > 0,
        yr = (e) => (4 & e[br]) > 0,
        wr = (e, t) => (t ? (e[br] |= 3) : (e[br] &= -3)),
        xr = (e, t) => (t ? (e[br] |= 4) : (e[br] &= -5)),
        Pr = class extends gr {
            constructor(e, t) {
                if (
                    (super(),
                    (this.animation = new (class {
                        constructor() {
                            ((this.changed = !1),
                                (this.values = sr),
                                (this.toValues = null),
                                (this.fromValues = sr),
                                (this.config = new (class {
                                    constructor() {
                                        ((this.velocity = 0), Object.assign(this, nr));
                                    }
                                })()),
                                (this.immediate = !1));
                        }
                    })()),
                    (this.defaultProps = {}),
                    (this._state = {
                        paused: !1,
                        delayed: !1,
                        pauseQueue: new Set(),
                        resumeQueue: new Set(),
                        timeouts: new Set(),
                    }),
                    (this._pendingCalls = new Set()),
                    (this._lastCallId = 0),
                    (this._lastToId = 0),
                    (this._memoizedDuration = 0),
                    !st.und(e) || !st.und(t))
                ) {
                    const n = st.obj(e) ? { ...e } : { ...t, from: e };
                    (st.und(n.default) && (n.default = !0), this.start(n));
                }
            }
            get idle() {
                return !(_r(this) || this._state.asyncTo) || yr(this);
            }
            get goal() {
                return Zt(this.animation.to);
            }
            get velocity() {
                const e = Cn(this);
                return e instanceof An ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
            }
            get hasAnimated() {
                return vr(this);
            }
            get isAnimating() {
                return _r(this);
            }
            get isPaused() {
                return yr(this);
            }
            get isDelayed() {
                return this._state.delayed;
            }
            advance(e) {
                let t = !0,
                    n = !1;
                const r = this.animation;
                let { toValues: s } = r;
                const { config: o } = r,
                    a = Rn(r.to);
                (!a && Gt(r.to) && (s = lt(Zt(r.to))),
                    r.values.forEach((i, l) => {
                        if (i.done) return;
                        const u = i.constructor == Mn ? 1 : a ? a[l].lastPosition : s[l];
                        let c = r.immediate,
                            d = u;
                        if (!c) {
                            if (((d = i.lastPosition), o.tension <= 0)) return void (i.done = !0);
                            let t = (i.elapsedTime += e);
                            const n = r.fromValues[l],
                                s = null != i.v0 ? i.v0 : (i.v0 = st.arr(o.velocity) ? o.velocity[l] : o.velocity);
                            let a;
                            const h = o.precision || (n == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - n)));
                            if (st.und(o.duration))
                                if (o.decay) {
                                    const e = !0 === o.decay ? 0.998 : o.decay,
                                        r = Math.exp(-(1 - e) * t);
                                    ((d = n + (s / (1 - e)) * (1 - r)),
                                        (c = Math.abs(i.lastPosition - d) <= h),
                                        (a = s * r));
                                } else {
                                    a = null == i.lastVelocity ? s : i.lastVelocity;
                                    const t = o.restVelocity || h / 10,
                                        r = o.clamp ? 0 : o.bounce,
                                        l = !st.und(r),
                                        m = n == u ? i.v0 > 0 : n < u;
                                    let f,
                                        p = !1;
                                    const g = 1,
                                        b = Math.ceil(e / g);
                                    for (
                                        let e = 0;
                                        e < b && ((f = Math.abs(a) > t), f || ((c = Math.abs(u - d) <= h), !c));
                                        ++e
                                    ) {
                                        l && ((p = d == u || d > u == m), p && ((a = -a * r), (d = u)));
                                        ((a += ((1e-6 * -o.tension * (d - u) + 0.001 * -o.friction * a) / o.mass) * g),
                                            (d += a * g));
                                    }
                                }
                            else {
                                let r = 1;
                                (o.duration > 0 &&
                                    (this._memoizedDuration !== o.duration &&
                                        ((this._memoizedDuration = o.duration),
                                        i.durationProgress > 0 &&
                                            ((i.elapsedTime = o.duration * i.durationProgress),
                                            (t = i.elapsedTime += e))),
                                    (r = (o.progress || 0) + t / this._memoizedDuration),
                                    (r = r > 1 ? 1 : r < 0 ? 0 : r),
                                    (i.durationProgress = r)),
                                    (d = n + o.easing(r) * (u - n)),
                                    (a = (d - i.lastPosition) / e),
                                    (c = 1 == r));
                            }
                            ((i.lastVelocity = a),
                                Number.isNaN(d) && (console.warn('Got NaN while animating:', this), (c = !0)));
                        }
                        (a && !a[l].done && (c = !1), c ? (i.done = !0) : (t = !1), i.setValue(d, o.round) && (n = !0));
                    }));
                const i = Cn(this),
                    l = i.getValue();
                if (t) {
                    const e = Zt(r.to);
                    ((l === e && !n) || o.decay
                        ? n && o.decay && this._onChange(l)
                        : (i.setValue(e), this._onChange(e)),
                        this._stop());
                } else n && this._onChange(l);
            }
            set(e) {
                return (
                    Ve.batchedUpdates(() => {
                        (this._stop(), this._focus(e), this._set(e));
                    }),
                    this
                );
            }
            pause() {
                this._update({ pause: !0 });
            }
            resume() {
                this._update({ pause: !1 });
            }
            finish() {
                if (_r(this)) {
                    const { to: e, config: t } = this.animation;
                    Ve.batchedUpdates(() => {
                        (this._onStart(), t.decay || this._set(e, !1), this._stop());
                    });
                }
                return this;
            }
            update(e) {
                return ((this.queue || (this.queue = [])).push(e), this);
            }
            start(e, t) {
                let n;
                return (
                    st.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [st.obj(e) ? e : { ...t, to: e }]),
                    Promise.all(n.map((e) => this._update(e))).then((e) => ar(this, e))
                );
            }
            stop(e) {
                const { to: t } = this.animation;
                return (
                    this._focus(this.get()),
                    dr(this._state, e && this._lastCallId),
                    Ve.batchedUpdates(() => this._stop(t, e)),
                    this
                );
            }
            reset() {
                this._update({ reset: !0 });
            }
            eventObserved(e) {
                'change' == e.type ? this._start() : 'priority' == e.type && (this.priority = e.priority + 1);
            }
            _prepareNode(e) {
                const t = this.key || '';
                let { to: n, from: r } = e;
                ((n = st.obj(n) ? n[t] : n),
                    (null == n || Yn(n)) && (n = void 0),
                    (r = st.obj(r) ? r[t] : r),
                    null == r && (r = void 0));
                const s = { to: n, from: r };
                return (
                    vr(this) ||
                        (e.reverse && ([n, r] = [r, n]),
                        (r = Zt(r)),
                        st.und(r) ? Cn(this) || this._set(n) : this._set(r)),
                    s
                );
            }
            _update({ ...e }, t) {
                const { key: n, defaultProps: r } = this;
                (e.default &&
                    Object.assign(
                        r,
                        Wn(e, (e, t) => (/^on/.test(t) ? Un(e, n) : e)),
                    ),
                    Nr(this, e, 'onProps'),
                    Ar(this, 'onProps', e, this));
                const s = this._prepareNode(e);
                if (Object.isFrozen(this))
                    throw Error(
                        'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                    );
                const o = this._state;
                return or(++this._lastCallId, {
                    key: n,
                    props: e,
                    defaultProps: r,
                    state: o,
                    actions: {
                        pause: () => {
                            yr(this) ||
                                (xr(this, !0),
                                ht(o.pauseQueue),
                                Ar(this, 'onPause', lr(this, kr(this, this.animation.to)), this));
                        },
                        resume: () => {
                            yr(this) &&
                                (xr(this, !1),
                                _r(this) && this._resume(),
                                ht(o.resumeQueue),
                                Ar(this, 'onResume', lr(this, kr(this, this.animation.to)), this));
                        },
                        start: this._merge.bind(this, s),
                    },
                }).then((n) => {
                    if (e.loop && n.finished && (!t || !n.noop)) {
                        const t = Er(e);
                        if (t) return this._update(t, !0);
                    }
                    return n;
                });
            }
            _merge(e, t, n) {
                if (t.cancel) return (this.stop(!0), n(ur(this)));
                const r = !st.und(e.to),
                    s = !st.und(e.from);
                if (r || s) {
                    if (!(t.callId > this._lastToId)) return n(ur(this));
                    this._lastToId = t.callId;
                }
                const { key: o, defaultProps: a, animation: i } = this,
                    { to: l, from: u } = i;
                let { to: c = l, from: d = u } = e;
                (!s || r || (t.default && !st.und(c)) || (c = d), t.reverse && ([c, d] = [d, c]));
                const h = !ot(d, u);
                (h && (i.from = d), (d = Zt(d)));
                const m = !ot(c, l);
                m && this._focus(c);
                const f = Yn(t.to),
                    { config: p } = i,
                    { decay: g, velocity: b } = p;
                ((r || s) && (p.velocity = 0),
                    t.config &&
                        !f &&
                        (function (e, t, n) {
                            (n && (rr((n = { ...n }), t), (t = { ...n, ...t })), rr(e, t), Object.assign(e, t));
                            for (const a in nr) null == e[a] && (e[a] = nr[a]);
                            let { frequency: r, damping: s } = e;
                            const { mass: o } = e;
                            st.und(r) ||
                                (r < 0.01 && (r = 0.01),
                                s < 0 && (s = 0),
                                (e.tension = Math.pow((2 * Math.PI) / r, 2) * o),
                                (e.friction = (4 * Math.PI * s * o) / r));
                        })(p, Bn(t.config, o), t.config !== a.config ? Bn(a.config, o) : void 0));
                let v = Cn(this);
                if (!v || st.und(c)) return n(lr(this, !0));
                const _ = st.und(t.reset) ? s && !t.default : !st.und(d) && qn(t.reset, o),
                    y = _ ? d : this.get(),
                    w = Kn(c),
                    x = st.num(w) || st.arr(w) || _n(w),
                    P = !f && (!x || qn(a.immediate || t.immediate, o));
                if (m) {
                    const e = $n(c);
                    if (e !== v.constructor) {
                        if (!P)
                            throw Error(
                                `Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`,
                            );
                        v = this._set(w);
                    }
                }
                const k = v.constructor;
                let E = Gt(c),
                    j = !1;
                if (!E) {
                    const e = _ || (!vr(this) && h);
                    ((m || e) && ((j = ot(Kn(y), w)), (E = !j)),
                        ((ot(i.immediate, P) || P) && ot(p.decay, g) && ot(p.velocity, b)) || (E = !0));
                }
                if (
                    (j && _r(this) && (i.changed && !_ ? (E = !0) : E || this._stop(l)),
                    !f &&
                        ((E || Gt(l)) &&
                            ((i.values = v.getPayload()), (i.toValues = Gt(c) ? null : k == Mn ? [1] : lt(w))),
                        i.immediate != P && ((i.immediate = P), P || _ || this._set(l)),
                        E))
                ) {
                    const { onRest: e } = i;
                    at(Rr, (e) => Nr(this, t, e));
                    const r = lr(this, kr(this, l));
                    (ht(this._pendingCalls, r),
                        this._pendingCalls.add(n),
                        i.changed &&
                            Ve.batchedUpdates(() => {
                                var t;
                                ((i.changed = !_),
                                    null == e || e(r, this),
                                    _ ? Bn(a.onRest, r) : null == (t = i.onStart) || t.call(i, r, this));
                            }));
                }
                (_ && this._set(y),
                    f
                        ? n(cr(t.to, t, this._state, this))
                        : E
                          ? this._start()
                          : _r(this) && !m
                            ? this._pendingCalls.add(n)
                            : n(ir(y)));
            }
            _focus(e) {
                const t = this.animation;
                e !== t.to && (Kt(this) && this._detach(), (t.to = e), Kt(this) && this._attach());
            }
            _attach() {
                let e = 0;
                const { to: t } = this.animation;
                (Gt(t) && (tn(t, this), fr(t) && (e = t.priority + 1)), (this.priority = e));
            }
            _detach() {
                const { to: e } = this.animation;
                Gt(e) && nn(e, this);
            }
            _set(e, t = !0) {
                const n = Zt(e);
                if (!st.und(n)) {
                    const e = Cn(this);
                    if (!e || !ot(n, e.getValue())) {
                        const r = $n(n);
                        (e && e.constructor == r ? e.setValue(n) : Sn(this, r.create(n)),
                            e &&
                                Ve.batchedUpdates(() => {
                                    this._onChange(n, t);
                                }));
                    }
                }
                return Cn(this);
            }
            _onStart() {
                const e = this.animation;
                e.changed || ((e.changed = !0), Ar(this, 'onStart', lr(this, kr(this, e.to)), this));
            }
            _onChange(e, t) {
                (t || (this._onStart(), Bn(this.animation.onChange, e, this)),
                    Bn(this.defaultProps.onChange, e, this),
                    super._onChange(e, t));
            }
            _start() {
                const e = this.animation;
                (Cn(this).reset(Zt(e.to)),
                    e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                    _r(this) || (wr(this, !0), yr(this) || this._resume()));
            }
            _resume() {
                nt.skipAnimation ? this.finish() : xt.start(this);
            }
            _stop(e, t) {
                if (_r(this)) {
                    wr(this, !1);
                    const n = this.animation;
                    (at(n.values, (e) => {
                        e.done = !0;
                    }),
                        n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                        Jt(this, { type: 'idle', parent: this }));
                    const r = t ? ur(this.get()) : lr(this.get(), kr(this, e ?? n.to));
                    (ht(this._pendingCalls, r), n.changed && ((n.changed = !1), Ar(this, 'onRest', r, this)));
                }
            }
        };
    function kr(e, t) {
        const n = Kn(t);
        return ot(Kn(e.get()), n);
    }
    function Er(e, t = e.loop, n = e.to) {
        const r = Bn(t);
        if (r) {
            const s = !0 !== r && Zn(r),
                o = (s || e).reverse,
                a = !s || s.reset;
            return jr({
                ...e,
                loop: t,
                default: !1,
                pause: void 0,
                to: !o || Yn(n) ? n : void 0,
                from: a ? e.from : void 0,
                reset: a,
                ...s,
            });
        }
    }
    function jr(e) {
        const { to: t, from: n } = (e = Zn(e)),
            r = new Set();
        return (st.obj(t) && Sr(t, r), st.obj(n) && Sr(n, r), (e.keys = r.size ? Array.from(r) : null), e);
    }
    function Cr(e) {
        const t = jr(e);
        return (st.und(t.default) && (t.default = Wn(t)), t);
    }
    function Sr(e, t) {
        it(e, (e, n) => null != e && t.add(n));
    }
    var Rr = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
    function Nr(e, t, n) {
        e.animation[n] = t[n] !== Xn(t, n) ? Un(t[n], e.key) : void 0;
    }
    function Ar(e, t, ...n) {
        var r, s, o, a;
        (null == (s = (r = e.animation)[t]) || s.call(r, ...n),
            null == (a = (o = e.defaultProps)[t]) || a.call(o, ...n));
    }
    var Mr = ['onStart', 'onChange', 'onRest'],
        Tr = 1,
        Fr = class {
            constructor(e, t) {
                ((this.id = Tr++),
                    (this.springs = {}),
                    (this.queue = []),
                    (this._lastAsyncId = 0),
                    (this._active = new Set()),
                    (this._changed = new Set()),
                    (this._started = !1),
                    (this._state = { paused: !1, pauseQueue: new Set(), resumeQueue: new Set(), timeouts: new Set() }),
                    (this._events = { onStart: new Map(), onChange: new Map(), onRest: new Map() }),
                    (this._onFrame = this._onFrame.bind(this)),
                    t && (this._flush = t),
                    e && this.start({ default: !0, ...e }));
            }
            get idle() {
                return (
                    !this._state.asyncTo &&
                    Object.values(this.springs).every((e) => e.idle && !e.isDelayed && !e.isPaused)
                );
            }
            get item() {
                return this._item;
            }
            set item(e) {
                this._item = e;
            }
            get() {
                const e = {};
                return (this.each((t, n) => (e[n] = t.get())), e);
            }
            set(e) {
                for (const t in e) {
                    const n = e[t];
                    st.und(n) || this.springs[t].set(n);
                }
            }
            update(e) {
                return (e && this.queue.push(jr(e)), this);
            }
            start(e) {
                let { queue: t } = this;
                return (
                    e ? (t = lt(e).map(jr)) : (this.queue = []),
                    this._flush ? this._flush(this, t) : (zr(this, t), Ir(this, t))
                );
            }
            stop(e, t) {
                if ((e !== !!e && (t = e), t)) {
                    const n = this.springs;
                    at(lt(t), (t) => n[t].stop(!!e));
                } else (dr(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
                return this;
            }
            pause(e) {
                if (st.und(e)) this.start({ pause: !0 });
                else {
                    const t = this.springs;
                    at(lt(e), (e) => t[e].pause());
                }
                return this;
            }
            resume(e) {
                if (st.und(e)) this.start({ pause: !1 });
                else {
                    const t = this.springs;
                    at(lt(e), (e) => t[e].resume());
                }
                return this;
            }
            each(e) {
                it(this.springs, e);
            }
            _onFrame() {
                const { onStart: e, onChange: t, onRest: n } = this._events,
                    r = this._active.size > 0,
                    s = this._changed.size > 0;
                ((r && !this._started) || (s && !this._started)) &&
                    ((this._started = !0),
                    ut(e, ([e, t]) => {
                        ((t.value = this.get()), e(t, this, this._item));
                    }));
                const o = !r && this._started,
                    a = s || (o && n.size) ? this.get() : null;
                (s &&
                    t.size &&
                    ut(t, ([e, t]) => {
                        ((t.value = a), e(t, this, this._item));
                    }),
                    o &&
                        ((this._started = !1),
                        ut(n, ([e, t]) => {
                            ((t.value = a), e(t, this, this._item));
                        })));
            }
            eventObserved(e) {
                if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
                else {
                    if ('idle' != e.type) return;
                    this._active.delete(e.parent);
                }
                Ve.onFrame(this._onFrame);
            }
        };
    function Ir(e, t) {
        return Promise.all(t.map((t) => Or(e, t))).then((t) => ar(e, t));
    }
    async function Or(e, t, n) {
        const { keys: r, to: s, from: o, loop: a, onRest: i, onResolve: l } = t,
            u = st.obj(t.default) && t.default;
        (a && (t.loop = !1), !1 === s && (t.to = null), !1 === o && (t.from = null));
        const c = st.arr(s) || st.fun(s) ? s : void 0;
        c
            ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
            : at(Mr, (n) => {
                  const r = t[n];
                  if (st.fun(r)) {
                      const s = e._events[n];
                      ((t[n] = ({ finished: e, cancelled: t }) => {
                          const n = s.get(r);
                          n
                              ? (e || (n.finished = !1), t && (n.cancelled = !0))
                              : s.set(r, { value: null, finished: e || !1, cancelled: t || !1 });
                      }),
                          u && (u[n] = t[n]));
                  }
              });
        const d = e._state;
        t.pause === !d.paused
            ? ((d.paused = t.pause), ht(t.pause ? d.pauseQueue : d.resumeQueue))
            : d.paused && (t.pause = !0);
        const h = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
            m = !0 === t.cancel || !0 === Xn(t, 'cancel');
        ((c || (m && d.asyncId)) &&
            h.push(
                or(++e._lastAsyncId, {
                    props: t,
                    state: d,
                    actions: {
                        pause: rt,
                        resume: rt,
                        start(t, n) {
                            m ? (dr(d, e._lastAsyncId), n(ur(e))) : ((t.onRest = i), n(cr(c, t, d, e)));
                        },
                    },
                }),
            ),
            d.paused &&
                (await new Promise((e) => {
                    d.resumeQueue.add(e);
                })));
        const f = ar(e, await Promise.all(h));
        if (a && f.finished && (!n || !f.noop)) {
            const n = Er(t, a, s);
            if (n) return (zr(e, [n]), Or(e, n, !0));
        }
        return (l && Ve.batchedUpdates(() => l(f, e, e.item)), f);
    }
    function $r(e, t) {
        const n = { ...e.springs };
        return (
            t &&
                at(lt(t), (e) => {
                    (st.und(e.keys) && (e = jr(e)), st.obj(e.to) || (e = { ...e, to: void 0 }), Dr(n, e, (e) => Lr(e)));
                }),
            Vr(e, n),
            n
        );
    }
    function Vr(e, t) {
        it(t, (t, n) => {
            e.springs[n] || ((e.springs[n] = t), tn(t, e));
        });
    }
    function Lr(e, t) {
        const n = new Pr();
        return ((n.key = e), t && tn(n, t), n);
    }
    function Dr(e, t, n) {
        t.keys &&
            at(t.keys, (r) => {
                (e[r] || (e[r] = n(r)))._prepareNode(t);
            });
    }
    function zr(e, t) {
        at(t, (t) => {
            Dr(e.springs, t, (t) => Lr(t, e));
        });
    }
    var Br,
        qr,
        Ur = ({ children: e, ...t }) => {
            const n = r.useContext(Xr),
                s = t.pause || !!n.pause,
                o = t.immediate || !!n.immediate;
            t = (function (e, t) {
                const [n] = r.useState(() => ({ inputs: t, result: e() })),
                    s = r.useRef(),
                    o = s.current;
                let a = o;
                a
                    ? Boolean(
                          t &&
                          a.inputs &&
                          (function (e, t) {
                              if (e.length !== t.length) return !1;
                              for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                              return !0;
                          })(t, a.inputs),
                      ) || (a = { inputs: t, result: e() })
                    : (a = n);
                return (
                    r.useEffect(() => {
                        ((s.current = a), o == n && (n.inputs = n.result = void 0));
                    }, [a]),
                    a.result
                );
            })(() => ({ pause: s, immediate: o }), [s, o]);
            const { Provider: a } = Xr;
            return f.createElement(a, { value: t }, e);
        },
        Xr =
            ((Br = Ur),
            (qr = {}),
            Object.assign(Br, f.createContext(qr)),
            (Br.Provider._context = Br),
            (Br.Consumer._context = Br),
            Br);
    ((Ur.Provider = Xr.Provider), (Ur.Consumer = Xr.Consumer));
    var Hr = () => {
        const e = [],
            t = function (t) {
                vn(
                    `${pn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
                const r = [];
                return (
                    at(e, (e, s) => {
                        if (st.und(t)) r.push(e.start());
                        else {
                            const o = n(t, e, s);
                            o && r.push(e.start(o));
                        }
                    }),
                    r
                );
            };
        ((t.current = e),
            (t.add = function (t) {
                e.includes(t) || e.push(t);
            }),
            (t.delete = function (t) {
                const n = e.indexOf(t);
                ~n && e.splice(n, 1);
            }),
            (t.pause = function () {
                return (at(e, (e) => e.pause(...arguments)), this);
            }),
            (t.resume = function () {
                return (at(e, (e) => e.resume(...arguments)), this);
            }),
            (t.set = function (t) {
                at(e, (e, n) => {
                    const r = st.fun(t) ? t(n, e) : t;
                    r && e.set(r);
                });
            }),
            (t.start = function (t) {
                const n = [];
                return (
                    at(e, (e, r) => {
                        if (st.und(t)) n.push(e.start());
                        else {
                            const s = this._getProps(t, e, r);
                            s && n.push(e.start(s));
                        }
                    }),
                    n
                );
            }),
            (t.stop = function () {
                return (at(e, (e) => e.stop(...arguments)), this);
            }),
            (t.update = function (t) {
                return (at(e, (e, n) => e.update(this._getProps(t, e, n))), this);
            }));
        const n = function (e, t, n) {
            return st.fun(e) ? e(n, t) : e;
        };
        return ((t._getProps = n), t);
    };
    function Wr(e, t) {
        const n = st.fun(e),
            [[s], o] = (function (e, t, n) {
                const s = st.fun(t) && t;
                s && !n && (n = []);
                const o = r.useMemo(() => (s || 3 == arguments.length ? Hr() : void 0), []),
                    a = r.useRef(0),
                    i = xn(),
                    l = r.useMemo(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(e, t) {
                                const n = $r(e, t);
                                return a.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                    ? Ir(e, t)
                                    : new Promise((r) => {
                                          (Vr(e, n),
                                              l.queue.push(() => {
                                                  r(Ir(e, t));
                                              }),
                                              i());
                                      });
                            },
                        }),
                        [],
                    ),
                    u = r.useRef([...l.ctrls]),
                    c = [],
                    d = En(e) || 0;
                function h(e, n) {
                    for (let r = e; r < n; r++) {
                        const e = u.current[r] || (u.current[r] = new Fr(null, l.flush)),
                            n = s ? s(r, e) : t[r];
                        n && (c[r] = Cr(n));
                    }
                }
                (r.useMemo(() => {
                    (at(u.current.slice(e, d), (e) => {
                        (er(e, o), e.stop(!0));
                    }),
                        (u.current.length = e),
                        h(d, e));
                }, [e]),
                    r.useMemo(() => {
                        h(0, Math.min(d, e));
                    }, n));
                const m = u.current.map((e, t) => $r(e, c[t])),
                    f = r.useContext(Ur),
                    p = En(f),
                    g = f !== p && Jn(f);
                (yn(() => {
                    (a.current++, (l.ctrls = u.current));
                    const { queue: e } = l;
                    (e.length && ((l.queue = []), at(e, (e) => e())),
                        at(u.current, (e, t) => {
                            (null == o || o.add(e), g && e.start({ default: f }));
                            const n = c[t];
                            n && (tr(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                        }));
                }),
                    Pn(() => () => {
                        at(l.ctrls, (e) => e.stop(!0));
                    }));
                const b = m.map((e) => ({ ...e }));
                return o ? [b, o] : b;
            })(1, n ? e : [e], n ? [] : t);
        return n || 2 == arguments.length ? [s, o] : s;
    }
    var Qr = () => Hr(),
        Gr = () => r.useState(Qr)[0];
    function Zr(e, t, n) {
        const s = st.fun(t) && t,
            {
                reset: o,
                sort: a,
                trail: i = 0,
                expires: l = !0,
                exitBeforeEnter: u = !1,
                onDestroyed: c,
                ref: d,
                config: h,
            } = s ? s() : t,
            m = r.useMemo(() => (s || 3 == arguments.length ? Hr() : void 0), []),
            p = lt(e),
            g = [],
            b = r.useRef(null),
            v = o ? null : b.current;
        (yn(() => {
            b.current = g;
        }),
            Pn(
                () => (
                    at(g, (e) => {
                        (null == m || m.add(e.ctrl), (e.ctrl.ref = m));
                    }),
                    () => {
                        at(b.current, (e) => {
                            (e.expired && clearTimeout(e.expirationId), er(e.ctrl, m), e.ctrl.stop(!0));
                        });
                    }
                ),
            ));
        const _ = (function (e, { key: t, keys: n = t }, r) {
                if (null === n) {
                    const t = new Set();
                    return e.map((e) => {
                        const n = r && r.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                        return n ? (t.add(n), n.key) : Kr++;
                    });
                }
                return st.und(n) ? e : st.fun(n) ? e.map(n) : lt(n);
            })(p, s ? s() : t, v),
            y = (o && b.current) || [];
        yn(() =>
            at(y, ({ ctrl: e, item: t, key: n }) => {
                (er(e, m), Bn(c, t, n));
            }),
        );
        const w = [];
        if (
            (v &&
                at(v, (e, t) => {
                    e.expired
                        ? (clearTimeout(e.expirationId), y.push(e))
                        : ~(t = w[t] = _.indexOf(e.key)) && (g[t] = e);
                }),
            at(p, (e, t) => {
                g[t] || ((g[t] = { key: _[t], item: e, phase: 'mount', ctrl: new Fr() }), (g[t].ctrl.item = e));
            }),
            w.length)
        ) {
            let e = -1;
            const { leave: n } = s ? s() : t;
            at(w, (t, r) => {
                const s = v[r];
                ~t ? ((e = g.indexOf(s)), (g[e] = { ...s, item: p[t] })) : n && g.splice(++e, 0, s);
            });
        }
        st.fun(a) && g.sort((e, t) => a(e.item, t.item));
        let x = -i;
        const P = xn(),
            k = Wn(t),
            E = new Map(),
            j = r.useRef(new Map()),
            C = r.useRef(!1);
        at(g, (e, n) => {
            const r = e.key,
                o = e.phase,
                a = s ? s() : t;
            let c, m;
            const f = Bn(a.delay || 0, r);
            if ('mount' == o) ((c = a.enter), (m = 'enter'));
            else {
                const e = _.indexOf(r) < 0;
                if ('leave' != o)
                    if (e) ((c = a.leave), (m = 'leave'));
                    else {
                        if (!(c = a.update)) return;
                        m = 'update';
                    }
                else {
                    if (e) return;
                    ((c = a.enter), (m = 'enter'));
                }
            }
            if (((c = Bn(c, e.item, n)), (c = st.obj(c) ? Zn(c) : { to: c }), !c.config)) {
                const t = h || k.config;
                c.config = Bn(t, e.item, n, m);
            }
            x += i;
            const p = { ...k, delay: f + x, ref: d, immediate: a.immediate, reset: !1, ...c };
            if ('enter' == m && st.und(p.from)) {
                const r = s ? s() : t,
                    o = st.und(r.initial) || v ? r.from : r.initial;
                p.from = Bn(o, e.item, n);
            }
            const { onResolve: g } = p;
            p.onResolve = (e) => {
                Bn(g, e);
                const t = b.current,
                    n = t.find((e) => e.key === r);
                if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                    const e = t.every((e) => e.ctrl.idle);
                    if ('leave' == n.phase) {
                        const t = Bn(l, n.item);
                        if (!1 !== t) {
                            const r = !0 === t ? 0 : t;
                            if (((n.expired = !0), !e && r > 0))
                                return void (r <= 2147483647 && (n.expirationId = setTimeout(P, r)));
                        }
                    }
                    e && t.some((e) => e.expired) && (j.current.delete(n), u && (C.current = !0), P());
                }
            };
            const y = $r(e.ctrl, p);
            'leave' === m && u
                ? j.current.set(e, { phase: m, springs: y, payload: p })
                : E.set(e, { phase: m, springs: y, payload: p });
        });
        const S = r.useContext(Ur),
            R = En(S),
            N = S !== R && Jn(S);
        (yn(() => {
            N &&
                at(g, (e) => {
                    e.ctrl.start({ default: S });
                });
        }, [S]),
            at(E, (e, t) => {
                if (j.current.size) {
                    const e = g.findIndex((e) => e.key === t.key);
                    g.splice(e, 1);
                }
            }),
            yn(
                () => {
                    at(j.current.size ? j.current : E, ({ phase: e, payload: t }, n) => {
                        const { ctrl: r } = n;
                        ((n.phase = e),
                            null == m || m.add(r),
                            N && 'enter' == e && r.start({ default: S }),
                            t &&
                                (tr(r, t.ref),
                                (!r.ref && !m) || C.current
                                    ? (r.start(t), C.current && (C.current = !1))
                                    : r.update(t)));
                    });
                },
                o ? void 0 : n,
            ));
        const A = (e) =>
            f.createElement(
                f.Fragment,
                null,
                g.map((t, n) => {
                    const { springs: r } = E.get(t) || t.ctrl,
                        s = e({ ...r }, t.item, t, n);
                    return s && s.type
                        ? f.createElement(s.type, {
                              ...s.props,
                              key: st.str(t.key) || st.num(t.key) ? t.key : t.ctrl.id,
                              ref: s.ref,
                          })
                        : s;
                }),
            );
        return m ? [A, m] : A;
    }
    var Kr = 1;
    var Jr = class extends gr {
        constructor(e, t) {
            (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Xt(...t)));
            const n = this._get(),
                r = $n(n);
            Sn(this, r.create(n));
        }
        advance(e) {
            const t = this._get();
            (ot(t, this.get()) || (Cn(this).setValue(t), this._onChange(t, this.idle)),
                !this.idle && es(this._active) && ts(this));
        }
        _get() {
            const e = st.arr(this.source) ? this.source.map(Zt) : lt(Zt(this.source));
            return this.calc(...e);
        }
        _start() {
            this.idle &&
                !es(this._active) &&
                ((this.idle = !1),
                at(Rn(this), (e) => {
                    e.done = !1;
                }),
                nt.skipAnimation ? (Ve.batchedUpdates(() => this.advance()), ts(this)) : xt.start(this));
        }
        _attach() {
            let e = 1;
            (at(lt(this.source), (t) => {
                (Gt(t) && tn(t, this), fr(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
            }),
                (this.priority = e),
                this._start());
        }
        _detach() {
            (at(lt(this.source), (e) => {
                Gt(e) && nn(e, this);
            }),
                this._active.clear(),
                ts(this));
        }
        eventObserved(e) {
            'change' == e.type
                ? e.idle
                    ? this.advance()
                    : (this._active.add(e.parent), this._start())
                : 'idle' == e.type
                  ? this._active.delete(e.parent)
                  : 'priority' == e.type &&
                    (this.priority = lt(this.source).reduce((e, t) => Math.max(e, (fr(t) ? t.priority : 0) + 1), 0));
        }
    };
    function Yr(e) {
        return !1 !== e.idle;
    }
    function es(e) {
        return !e.size || Array.from(e).every(Yr);
    }
    function ts(e) {
        e.idle ||
            ((e.idle = !0),
            at(Rn(e), (e) => {
                e.done = !0;
            }),
            Jt(e, { type: 'idle', parent: e }));
    }
    nt.assign({ createStringInterpolator: fn, to: (e, t) => new Jr(e, t) });
    var ns = /^--/;
    function rs(e, t) {
        return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : 'number' != typeof t || 0 === t || ns.test(e) || (os.hasOwnProperty(e) && os[e])
              ? ('' + t).trim()
              : t + 'px';
    }
    var ss = {};
    var os = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
        },
        as = ['Webkit', 'Ms', 'Moz', 'O'];
    os = Object.keys(os).reduce(
        (e, t) => (as.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
        os,
    );
    var is = /^(matrix|translate|scale|rotate|skew)/,
        ls = /^(translate)/,
        us = /^(rotate|skew)/,
        cs = (e, t) => (st.num(e) && 0 !== e ? e + t : e),
        ds = (e, t) => (st.arr(e) ? e.every((e) => ds(e, t)) : st.num(e) ? e === t : parseFloat(e) === t),
        hs = class extends Fn {
            constructor({ x: e, y: t, z: n, ...r }) {
                const s = [],
                    o = [];
                ((e || t || n) &&
                    (s.push([e || 0, t || 0, n || 0]),
                    o.push((e) => [`translate3d(${e.map((e) => cs(e, 'px')).join(',')})`, ds(e, 0)])),
                    it(r, (e, t) => {
                        if ('transform' === t) (s.push([e || '']), o.push((e) => [e, '' === e]));
                        else if (is.test(t)) {
                            if ((delete r[t], st.und(e))) return;
                            const n = ls.test(t) ? 'px' : us.test(t) ? 'deg' : '';
                            (s.push(lt(e)),
                                o.push(
                                    'rotate3d' === t
                                        ? ([e, t, r, s]) => [`rotate3d(${e},${t},${r},${cs(s, n)})`, ds(s, 0)]
                                        : (e) => [
                                              `${t}(${e.map((e) => cs(e, n)).join(',')})`,
                                              ds(e, t.startsWith('scale') ? 1 : 0),
                                          ],
                                ));
                        }
                    }),
                    s.length && (r.transform = new ms(s, o)),
                    super(r));
            }
        },
        ms = class extends Yt {
            constructor(e, t) {
                (super(), (this.inputs = e), (this.transforms = t), (this._value = null));
            }
            get() {
                return this._value || (this._value = this._get());
            }
            _get() {
                let e = '',
                    t = !0;
                return (
                    at(this.inputs, (n, r) => {
                        const s = Zt(n[0]),
                            [o, a] = this.transforms[r](st.arr(s) ? s : n.map(Zt));
                        ((e += ' ' + o), (t = t && a));
                    }),
                    t ? 'none' : e
                );
            }
            observerAdded(e) {
                1 == e && at(this.inputs, (e) => at(e, (e) => Gt(e) && tn(e, this)));
            }
            observerRemoved(e) {
                0 == e && at(this.inputs, (e) => at(e, (e) => Gt(e) && nn(e, this)));
            }
            eventObserved(e) {
                ('change' == e.type && (this._value = null), Jt(this, e));
            }
        };
    nt.assign({
        batchedUpdates: o.unstable_batchedUpdates,
        createStringInterpolator: fn,
        colors: {
            transparent: 0,
            aliceblue: 4042850303,
            antiquewhite: 4209760255,
            aqua: 16777215,
            aquamarine: 2147472639,
            azure: 4043309055,
            beige: 4126530815,
            bisque: 4293182719,
            black: 255,
            blanchedalmond: 4293643775,
            blue: 65535,
            blueviolet: 2318131967,
            brown: 2771004159,
            burlywood: 3736635391,
            burntsienna: 3934150143,
            cadetblue: 1604231423,
            chartreuse: 2147418367,
            chocolate: 3530104575,
            coral: 4286533887,
            cornflowerblue: 1687547391,
            cornsilk: 4294499583,
            crimson: 3692313855,
            cyan: 16777215,
            darkblue: 35839,
            darkcyan: 9145343,
            darkgoldenrod: 3095792639,
            darkgray: 2846468607,
            darkgreen: 6553855,
            darkgrey: 2846468607,
            darkkhaki: 3182914559,
            darkmagenta: 2332068863,
            darkolivegreen: 1433087999,
            darkorange: 4287365375,
            darkorchid: 2570243327,
            darkred: 2332033279,
            darksalmon: 3918953215,
            darkseagreen: 2411499519,
            darkslateblue: 1211993087,
            darkslategray: 793726975,
            darkslategrey: 793726975,
            darkturquoise: 13554175,
            darkviolet: 2483082239,
            deeppink: 4279538687,
            deepskyblue: 12582911,
            dimgray: 1768516095,
            dimgrey: 1768516095,
            dodgerblue: 512819199,
            firebrick: 2988581631,
            floralwhite: 4294635775,
            forestgreen: 579543807,
            fuchsia: 4278255615,
            gainsboro: 3705462015,
            ghostwhite: 4177068031,
            gold: 4292280575,
            goldenrod: 3668254975,
            gray: 2155905279,
            green: 8388863,
            greenyellow: 2919182335,
            grey: 2155905279,
            honeydew: 4043305215,
            hotpink: 4285117695,
            indianred: 3445382399,
            indigo: 1258324735,
            ivory: 4294963455,
            khaki: 4041641215,
            lavender: 3873897215,
            lavenderblush: 4293981695,
            lawngreen: 2096890111,
            lemonchiffon: 4294626815,
            lightblue: 2916673279,
            lightcoral: 4034953471,
            lightcyan: 3774873599,
            lightgoldenrodyellow: 4210742015,
            lightgray: 3553874943,
            lightgreen: 2431553791,
            lightgrey: 3553874943,
            lightpink: 4290167295,
            lightsalmon: 4288707327,
            lightseagreen: 548580095,
            lightskyblue: 2278488831,
            lightslategray: 2005441023,
            lightslategrey: 2005441023,
            lightsteelblue: 2965692159,
            lightyellow: 4294959359,
            lime: 16711935,
            limegreen: 852308735,
            linen: 4210091775,
            magenta: 4278255615,
            maroon: 2147483903,
            mediumaquamarine: 1724754687,
            mediumblue: 52735,
            mediumorchid: 3126187007,
            mediumpurple: 2473647103,
            mediumseagreen: 1018393087,
            mediumslateblue: 2070474495,
            mediumspringgreen: 16423679,
            mediumturquoise: 1221709055,
            mediumvioletred: 3340076543,
            midnightblue: 421097727,
            mintcream: 4127193855,
            mistyrose: 4293190143,
            moccasin: 4293178879,
            navajowhite: 4292783615,
            navy: 33023,
            oldlace: 4260751103,
            olive: 2155872511,
            olivedrab: 1804477439,
            orange: 4289003775,
            orangered: 4282712319,
            orchid: 3664828159,
            palegoldenrod: 4008225535,
            palegreen: 2566625535,
            paleturquoise: 2951671551,
            palevioletred: 3681588223,
            papayawhip: 4293907967,
            peachpuff: 4292524543,
            peru: 3448061951,
            pink: 4290825215,
            plum: 3718307327,
            powderblue: 2967529215,
            purple: 2147516671,
            rebeccapurple: 1714657791,
            red: 4278190335,
            rosybrown: 3163525119,
            royalblue: 1097458175,
            saddlebrown: 2336560127,
            salmon: 4202722047,
            sandybrown: 4104413439,
            seagreen: 780883967,
            seashell: 4294307583,
            sienna: 2689740287,
            silver: 3233857791,
            skyblue: 2278484991,
            slateblue: 1784335871,
            slategray: 1887473919,
            slategrey: 1887473919,
            snow: 4294638335,
            springgreen: 16744447,
            steelblue: 1182971135,
            tan: 3535047935,
            teal: 8421631,
            thistle: 3636451583,
            tomato: 4284696575,
            turquoise: 1088475391,
            violet: 4001558271,
            wheat: 4125012991,
            white: 4294967295,
            whitesmoke: 4126537215,
            yellow: 4294902015,
            yellowgreen: 2597139199,
        },
    });
    var fs = ((
            e,
            {
                applyAnimatedValues: t = () => !1,
                createAnimatedStyle: n = (e) => new Fn(e),
                getComponentProps: r = (e) => e,
            } = {},
        ) => {
            const s = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
                o = (e) => {
                    const t = zn(e) || 'Anonymous';
                    return (
                        ((e = st.str(e) ? o[e] || (o[e] = Vn(e, s)) : e[Dn] || (e[Dn] = Vn(e, s))).displayName =
                            `Animated(${t})`),
                        e
                    );
                };
            return (
                it(e, (t, n) => {
                    (st.arr(e) && (n = zn(t)), (o[n] = o(t)));
                }),
                { animated: o }
            );
        })(
            [
                'a',
                'abbr',
                'address',
                'area',
                'article',
                'aside',
                'audio',
                'b',
                'base',
                'bdi',
                'bdo',
                'big',
                'blockquote',
                'body',
                'br',
                'button',
                'canvas',
                'caption',
                'cite',
                'code',
                'col',
                'colgroup',
                'data',
                'datalist',
                'dd',
                'del',
                'details',
                'dfn',
                'dialog',
                'div',
                'dl',
                'dt',
                'em',
                'embed',
                'fieldset',
                'figcaption',
                'figure',
                'footer',
                'form',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'head',
                'header',
                'hgroup',
                'hr',
                'html',
                'i',
                'iframe',
                'img',
                'input',
                'ins',
                'kbd',
                'keygen',
                'label',
                'legend',
                'li',
                'link',
                'main',
                'map',
                'mark',
                'menu',
                'menuitem',
                'meta',
                'meter',
                'nav',
                'noscript',
                'object',
                'ol',
                'optgroup',
                'option',
                'output',
                'p',
                'param',
                'picture',
                'pre',
                'progress',
                'q',
                'rp',
                'rt',
                'ruby',
                's',
                'samp',
                'script',
                'section',
                'select',
                'small',
                'source',
                'span',
                'strong',
                'style',
                'sub',
                'summary',
                'sup',
                'table',
                'tbody',
                'td',
                'textarea',
                'tfoot',
                'th',
                'thead',
                'time',
                'title',
                'tr',
                'track',
                'u',
                'ul',
                'var',
                'video',
                'wbr',
                'circle',
                'clipPath',
                'defs',
                'ellipse',
                'foreignObject',
                'g',
                'image',
                'line',
                'linearGradient',
                'mask',
                'path',
                'pattern',
                'polygon',
                'polyline',
                'radialGradient',
                'rect',
                'stop',
                'svg',
                'text',
                'tspan',
            ],
            {
                applyAnimatedValues: function (e, t) {
                    if (!e.nodeType || !e.setAttribute) return !1;
                    const n = 'filter' === e.nodeName || (e.parentNode && 'filter' === e.parentNode.nodeName),
                        { style: r, children: s, scrollTop: o, scrollLeft: a, viewBox: i, ...l } = t,
                        u = Object.values(l),
                        c = Object.keys(l).map((t) =>
                            n || e.hasAttribute(t)
                                ? t
                                : ss[t] || (ss[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                        );
                    void 0 !== s && (e.textContent = s);
                    for (const d in r)
                        if (r.hasOwnProperty(d)) {
                            const t = rs(d, r[d]);
                            ns.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                        }
                    (c.forEach((t, n) => {
                        e.setAttribute(t, u[n]);
                    }),
                        void 0 !== o && (e.scrollTop = o),
                        void 0 !== a && (e.scrollLeft = a),
                        void 0 !== i && e.setAttribute('viewBox', i));
                },
                createAnimatedStyle: (e) => new hs(e),
                getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
            },
        ),
        ps = fs.animated;
    const gs = {
            model: (e, t) => a.computedFn(e, { equals: re, ...t }),
            primitive: a.computedFn,
            shallow: (e, t) => a.computedFn(e, { equals: n.comparer.shallow, ...t }),
            structural: (e, t) => a.computedFn(e, { equals: n.comparer.structural, ...t }),
        },
        bs = (e) => (t) => {
            e.forEach((e) =>
                ((e, t) => {
                    e && ('function' == typeof e ? e(t) : (e.current = t));
                })(e, t),
            );
        };
    (r.forwardRef(function (t, n) {
        const s = r.useRef(null);
        return (
            r.useEffect(() => {
                const e = s.current;
                if (null !== e)
                    return U.onHitTest((t) => {
                        const n = e.getBoundingClientRect();
                        return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                    });
            }, []),
            e.jsx('div', { ...t, ref: bs([n, s]) })
        );
    }),
        r.createContext(void 0));
    const vs = [];
    function _s(e) {
        const t = r.useRef(e);
        return (
            r.useLayoutEffect(() => {
                t.current = e;
            }),
            r.useCallback((...e) => (0, t.current)(...e), vs)
        );
    }
    function ys(e) {
        r.useEffect(() => e, []);
    }
    function ws(e, t) {
        r.useEffect(() => {
            let t = () => {};
            const n = () => {
                (t(),
                    (t = ((e) => {
                        let t,
                            n = null;
                        return (
                            (n = requestAnimationFrame(() => {
                                n = requestAnimationFrame(() => {
                                    ((n = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== n && cancelAnimationFrame(n));
                            }
                        );
                    })(e)));
            };
            return (
                window.addEventListener('resize', n),
                () => {
                    (t(), window.removeEventListener('resize', n));
                }
            );
        }, t);
    }
    function xs() {
        const e = r.useRef(0);
        return (
            ys(() => {
                window.cancelAnimationFrame(e.current);
            }),
            r.useMemo(
                () => ({
                    run: (t) => {
                        (window.cancelAnimationFrame(e.current),
                            (e.current = window.requestAnimationFrame(() => {
                                e.current = window.requestAnimationFrame(() => {
                                    ((e.current = 0), t());
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
    const Ps = new WeakMap(),
        ks = 0,
        Es = { await: 'await', idle: 'idle', display: 'display' };
    function js({ alert: e, body: t, header: n, note: s, hasHtmlContent: o, disabled: a }) {
        const i = p.resolve('views');
        return (function ({ resId: e = ks, contentId: t, decoratorId: n, disabled: s, args: o, showDelay: a = 400 }) {
            const i = r.useRef({ status: Es.idle, resId: e, timeoutId: 0 }),
                [l, u] = r.useMemo(() => {
                    let r = null;
                    function l() {
                        s ||
                            ((i.current.status = Es.await),
                            window.clearTimeout(i.current.timeoutId),
                            (i.current.timeoutId = window.setTimeout(u, a)));
                    }
                    function u() {
                        ((i.current.status = Es.display), Z.tooltip.open(e, t, n, o), r && Ps.set(r, d));
                    }
                    function c() {
                        if (
                            (window.clearTimeout(i.current.timeoutId),
                            i.current.status === Es.display && Z.tooltip.hide(e, t, n),
                            (i.current.status = Es.idle),
                            r)
                        ) {
                            Ps.delete(r);
                            let e = r.parentElement;
                            for (; e && !Ps.has(e); ) e = e.parentElement;
                            (e && Ps.get(e).show(), (r = null));
                        }
                    }
                    const d = {
                        hide: c,
                        show: u,
                        rerun: function () {
                            i.current.status !== Es.idle && (s ? d.hide() : l());
                        },
                    };
                    return [
                        d,
                        {
                            onMouseEnter: (e) => {
                                ((r = null == e ? void 0 : e.currentTarget), l());
                            },
                            onMouseLeave: s ? te : c,
                            onClick: s ? te : c,
                        },
                    ];
                }, [o, t, n, s, e, a]);
            return (
                r.useEffect(() => {
                    l.rerun();
                }, [l]),
                ys(_s(l.hide)),
                u
            );
        })({
            disabled: a,
            contentId: i.read((e) =>
                o
                    ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                    : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
            ),
            decoratorId: i.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
            args: r.useMemo(() => ({ body: t, header: n, note: s, alert: e }), [e, t, n, s]),
        });
    }
    const Cs = {
        click: Ss('play'),
        'hot-key': Ss('play'),
        'mouse-enter': Ss('highlight'),
        increaseAmount: Ss('cons_ammo_single_plus'),
        decreaseAmount: Ss('cons_ammo_single_minus'),
        increaseAmountRoll: Ss('cons_ammo_roll_plus'),
        decreaseAmountRoll: Ss('cons_ammo_roll_minus'),
        close: Ss('cancelcloseno'),
        'show-context-menu': Ss('tabb'),
        progressSimple: Ss('gui_hangar_progressbar_simple'),
        increaseDelta: Ss('gui_hangar_progressbar_delta_increase'),
        decreaseDelta: Ss('gui_hangar_progressbar_delta_decrease'),
        increaseDeltaMax: Ss('gui_hangar_progressbar_delta_max'),
        pointerGrab: Ss('gui_hangar_progressbar_pointer_grab'),
        pointerDrag: Ss('gui_hangar_progressbar_pointer_drag'),
    };
    function Ss(e) {
        return () => {
            B.sound(e);
        };
    }
    const Rs = r.createContext(null);
    function Ns({ severity: t = 'warn', overrides: n, silent: s = !1, children: o }) {
        const a = r.useMemo(() => ({ ...Cs, ...n }), [n]),
            i = r.useMemo(
                () => ({
                    play: function (e, n) {
                        if (s) return;
                        const r = a[e];
                        r
                            ? r(n)
                            : (function (e, t) {
                                  switch (t) {
                                      case 'error':
                                          console.error(e);
                                          break;
                                      case 'warn':
                                          console.warn(e);
                                          break;
                                      case 'info':
                                          console.info(e);
                                          break;
                                      case 'debug':
                                          console.debug(e);
                                  }
                              })(`There is no sound for event: ${e}`, t);
                    },
                    settings: { plays: a, severity: t, silent: s },
                }),
                [a, t, s],
            );
        return e.jsx(Rs.Provider, { value: i, children: o });
    }
    function As() {
        const e = r.useContext(Rs);
        if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
        return e;
    }
    const Ms = 'TruncateText_dcb41d92',
        Ts = r.forwardRef(function ({ text: t, tooltipParams: n, className: s, ...o }, a) {
            const i = js({ header: null == n ? void 0 : n.header, body: (null == n ? void 0 : n.body) || t }),
                l = r.useRef(null),
                [u, c] = r.useState(!1);
            const d = r.useCallback(() => {
                if (l.current) {
                    const { scrollWidth: e, offsetWidth: t } = l.current;
                    c(e > t);
                }
            }, []);
            var h, m;
            return (
                r.useEffect(() => {
                    u || i.onMouseLeave();
                }, [u, i]),
                (h = d),
                (m = [d]),
                r.useEffect(() => {
                    let e,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((t = null), (e = h()));
                            });
                        })),
                        () => {
                            ('function' == typeof e && e(), null !== t && cancelAnimationFrame(t));
                        }
                    );
                }, m),
                ws(d, [d]),
                ((e, t, n = !0) => {
                    const s = _s((e) => {
                        const n = e[0];
                        n && t(n);
                    });
                    r.useEffect(() => {
                        if (!e.current || !n) return;
                        const t = new ResizeObserver((e) => s(e));
                        return (
                            t.observe(e.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [s, n, e]);
                })(l, d),
                e.jsx('div', {
                    ...o,
                    ref: function (e) {
                        ((l.current = e), 'function' == typeof a ? a(e) : a && (a.current = e));
                    },
                    className: T(Ms, s),
                    ...(u ? i : {}),
                    children: t,
                })
            );
        });
    function Fs(e) {
        var t,
            n,
            r = '';
        if ('string' == typeof e || 'number' == typeof e) r += e;
        else if ('object' == typeof e)
            if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Fs(e[t])) && (r && (r += ' '), (r += n));
            else for (t in e) e[t] && (r && (r += ' '), (r += t));
        return r;
    }
    const Is = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
        Os = function () {
            for (var e, t, n = 0, r = ''; n < arguments.length; )
                (e = arguments[n++]) && (t = Fs(e)) && (r && (r += ' '), (r += t));
            return r;
        },
        $s = (e, t) => (n) => {
            var r;
            if (null == (null == t ? void 0 : t.variants))
                return Os(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: s, defaultVariants: o } = t,
                a = Object.keys(s).map((e) => {
                    const t = null == n ? void 0 : n[e],
                        r = null == o ? void 0 : o[e];
                    if (null === t) return null;
                    const a = Is(t) || Is(r);
                    return s[e][a];
                }),
                i =
                    n &&
                    Object.entries(n).reduce((e, t) => {
                        let [n, r] = t;
                        return (void 0 === r || (e[n] = r), e);
                    }, {}),
                l =
                    null == t || null === (r = t.compoundVariants) || void 0 === r
                        ? void 0
                        : r.reduce((e, t) => {
                              let { class: n, className: r, ...s } = t;
                              return Object.entries(s).every((e) => {
                                  let [t, n] = e;
                                  return Array.isArray(n) ? n.includes({ ...o, ...i }[t]) : { ...o, ...i }[t] === n;
                              })
                                  ? [...e, n, r]
                                  : e;
                          }, []);
            return Os(e, a, l, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        };
    function Vs(t, n, s) {
        var o;
        const a =
                'object' == typeof n && 'cva' in n
                    ? null == (o = n.cva)
                        ? void 0
                        : o.variants
                    : null == s
                      ? void 0
                      : s.variants,
            i = a ? Object.keys(a) : [];
        if ('object' == typeof n) {
            const e = n,
                s = $s(e.className, e.cva),
                o = e.element,
                a = r.forwardRef(function (e, t) {
                    return r.createElement(o, { ...('function' == typeof o ? e : Ls(i, e)), ref: t, className: s(e) });
                });
            return ((a.displayName = t), e.cva && (a.cva = e.cva), a);
        }
        const l = $s(n, s),
            u = r.forwardRef(function (n, r) {
                return e.jsx('div', { 'data-name': t, ...Ls(i, n), ref: r, className: l(n) });
            });
        return ((u.displayName = t), s && (u.cva = s), u);
    }
    function Ls(e, t) {
        if (0 === e.length) return t;
        const n = { ...t };
        for (const r of e) delete n[r];
        return n;
    }
    const Ds = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
        zs = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
        Bs = Vs('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
        qs = r.forwardRef(function (
            { children: t, onClick: n, onMouseEnter: r, soundTarget: s, disabled: o = !1, silent: a = !1, ...i },
            l,
        ) {
            const u = As();
            return e.jsx(Bs, {
                ...i,
                ref: l,
                onMouseEnter: function (e) {
                    (o || a || u.play('mouse-enter', { target: s || 'Button', original: e }), null == r || r(e));
                },
                onClick: function (e) {
                    o || (a || u.play('click', { target: s || 'Button', original: e }), null == n || n(e));
                },
                children: t,
            });
        }),
        Us = {
            background: 'Button_background_98ebcfb8',
            border: 'Button_border_7e6390d7',
            overlay: 'Button_overlay_174632c8',
            base: 'Button_70871946',
            base__enabled: 'Button_base__enabled_96634d40',
            base__disabled: 'Button_base__disabled_b713e04a',
            'base__size-extraSmall': 'Button_base__size-extraSmall_d0cdb5ed',
            'base__size-small': 'Button_base__size-small_fc7095a4',
            'base__size-medium': 'Button_base__size-medium_814d61f0',
            'base__size-large': 'Button_base__size-large_83da852e',
            'base__theme-primary': 'Button_base__theme-primary_8ba55469',
            'base__theme-secondary': 'Button_base__theme-secondary_3fa4afc',
            content: 'Button_content_298de63f',
            content__fontAligned: 'Button_content__fontAligned_66115778',
        },
        Xs = r.forwardRef(function (
            {
                children: t,
                size: n = zs.large,
                theme: r = Ds.primary,
                disabled: s = !1,
                silent: o = !1,
                autoAlignContent: a = !0,
                classNames: i,
                className: l,
                ...u
            },
            c,
        ) {
            return e.jsxs(qs, {
                ...u,
                ref: c,
                silent: o,
                disabled: s,
                className: T(
                    Us.base,
                    Us[`base__size-${n}`],
                    Us[`base__theme-${r}`],
                    s ? Us.base__disabled : Us.base__enabled,
                    l,
                    null == i ? void 0 : i.base,
                ),
                onClick: function (e) {
                    var t;
                    s || null == (t = u.onClick) || t.call(u, e);
                },
                children: [
                    e.jsx('div', { className: T(Us.background, null == i ? void 0 : i.background) }),
                    e.jsx('div', { className: T(Us.border, null == i ? void 0 : i.border) }),
                    e.jsx('div', { className: T(Us.overlay, null == i ? void 0 : i.overlay) }),
                    e.jsx('div', {
                        className: T(Us.content, a && Us.content__fontAligned, null == i ? void 0 : i.content),
                        children: t,
                    }),
                ],
            });
        });
    ((Xs.themes = Ds), (Xs.sizes = zs));
    const Hs = 'Action_6c7b0c76',
        Ws = 'Action_icon_7d5aed3b',
        Qs = r.forwardRef(function ({ className: t, theme: n = Xs.themes.secondary, tooltipParams: r, ...s }, o) {
            const a = js({
                alert: null == r ? void 0 : r.alert,
                header: null == r ? void 0 : r.header,
                body: null == r ? void 0 : r.body,
                note: null == r ? void 0 : r.note,
            });
            return e.jsx(Xs, {
                ...s,
                ref: o,
                onClick: (e) => {
                    (s.onClick(e), r && a.onClick());
                },
                onMouseEnter: (e) => {
                    var t;
                    (null == (t = s.onMouseEnter) || t.call(s, e), r && a.onMouseEnter(e));
                },
                onMouseLeave: (e) => {
                    var t;
                    (null == (t = s.onMouseLeave) || t.call(s, e), r && a.onMouseLeave());
                },
                autoAlignContent: !1,
                theme: n,
                className: T(Hs, t),
                children: e.jsx(ke, { width: 10, height: 20, path: 'post_battle.progression.arrow', className: Ws }),
            });
        }),
        Gs = 'Header_background_91826dd5',
        Zs = 'Header_mask_afb9c38d',
        Ks = 'Header_border_c6b1d37f',
        Js = Vs('CardHeader', 'Header_1c2ee301'),
        Ys = r.forwardRef(function ({ classNames: t, className: n, ...r }, s) {
            return e.jsxs(Js, {
                ...r,
                className: T(null == t ? void 0 : t.base, n),
                ref: s,
                children: [
                    e.jsx('div', { className: T(Gs, null == t ? void 0 : t.background) }),
                    e.jsx('div', { className: T(Zs, null == t ? void 0 : t.mask) }),
                    e.jsx('div', { className: T(Ks, null == t ? void 0 : t.border) }),
                    r.children,
                ],
            });
        }),
        eo = Vs('CardTitle', 'Title_e5ecf295'),
        to = r.forwardRef(function (t, n) {
            return e.jsx(eo, { ...t, ref: n, children: t.children });
        }),
        no = 'Card_content_f7ddaa4a',
        ro = Vs('Card', 'Card_3f55e450'),
        so = Vs('CardContent', no),
        oo = r.forwardRef(function (t, n) {
            return e.jsx(ro, { ...t, ref: n, children: t.children });
        });
    ((oo.Header = Ys), (oo.Content = so), (oo.Action = Qs), (oo.Title = to));
    const ao = 1,
        io = 2,
        lo = 3;
    const uo = {
            COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
            base: 'FormatText_db904f12',
            base__fullSize: 'FormatText_base__fullSize_a514958e',
            nowrap: 'FormatText_nowrap_ff69eca3',
        },
        co = new Set((null == (l = uo.COLORS) ? void 0 : l.split(', ')) ?? []);
    let ho = 0;
    function mo() {
        return ++ho;
    }
    const fo =
        /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
    function po(t) {
        const n = p.resolve('langCode');
        return (function (e, t, n) {
            return _e.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
        })(
            (function (e, t) {
                return (be[t] ?? ve)(e);
            })(t, n),
            n,
            (t, n) => t && e.jsx('span', { children: t }, `${t}${n}`),
        );
    }
    function go(t) {
        return Array.isArray(t)
            ? (function (t) {
                  const n = [];
                  for (let s = 0; s < t.length; s++) {
                      const o = t[s],
                          a = t[s + 1];
                      if ('string' != typeof a || !fo.test(a)) {
                          n.push(go(o));
                          continue;
                      }
                      const i = po(a.slice(1));
                      (n.push(
                          e.jsxs(
                              r.Fragment,
                              { children: [e.jsxs('span', { className: uo.nowrap, children: [go(o), a[0]] }), i] },
                              mo(),
                          ),
                      ),
                          (s += 1));
                  }
                  return n;
              })(t)
            : 'string' == typeof t
              ? e.jsx(r.Fragment, { children: po(t) }, mo())
              : t;
    }
    const bo = {
        class: function (t, ...n) {
            return e.jsx(
                'span',
                { className: n.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: t },
                mo(),
            );
        },
        colorLegacy: function (t, n) {
            const r = mo();
            return co.has(String(n))
                ? e.jsx('span', { className: `FormatText_colorLegacy__${n}`, children: t }, r)
                : e.jsx('span', { style: { color: `#${n}` }, children: t }, r);
        },
        bold: (e) => ['fontWeight', 'bold'],
        split: go,
        style: function (t, ...n) {
            return e.jsx(
                'span',
                {
                    style: n.reduce((e, r) => {
                        if (Array.isArray(r)) {
                            const [t, n] = r;
                            return ((e[t] = n), e);
                        }
                        return (console.warn(`Invalid argument ${r} in ${t}: ${n}`), e);
                    }, {}),
                    children: t,
                },
                mo(),
            );
        },
        color: (e, t) => ['color', t],
        fontSize: (e, t) => ['fontSize', t],
        fontWeight: (e, t) => ['fontWeight', t],
        textDecoration: (e, t) => ['textDecoration', t],
    };
    function vo(e, t, n, r) {
        const s = n.map((t) => {
                if ('string' != typeof t) return t;
                const n = t.trim();
                if (n.startsWith('(') && n.endsWith(')')) {
                    const [t, ...s] = n.slice(1, -1).split(' ');
                    return t ? vo(e, t, s, r) : e;
                }
                return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
            }),
            o = r[t];
        return o ? o(e, ...s) : (console.error(`Function ${t} is not registered`), e);
    }
    function _o(e, t, n) {
        return e.reduce((e, t) => {
            const [r, ...s] = (function (e) {
                const t = [];
                let n = '',
                    r = !1,
                    s = !1,
                    o = '';
                for (let a = 0; a < e.length; a++) {
                    const i = e[a];
                    ("'" !== i && '"' !== i) || s || r
                        ? i === o && s
                            ? ((s = !1), (n += i))
                            : '(' !== i || s
                              ? ')' === i && r && !s
                                  ? ((r = !1), (n += i))
                                  : ' ' !== i || r || s
                                    ? (n += i)
                                    : n && (t.push(n), (n = ''))
                              : ((r = !0), (n += i))
                        : ((s = !0), (o = i), (n += i));
                }
                return (n && t.push(n), t);
            })(t.trim());
            return r ? vo(e, r, s, n) : e;
        }, t);
    }
    function yo(e) {
        return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
    }
    function wo(e, t) {
        for (let n = 0; n < e.length; n++) {
            if ('$' === e[n]) {
                let r = n + 1;
                for (; r < e.length && !yo(e[r]); ) r++;
                const s = e.slice(n + 1, r),
                    o = t[s];
                if (o) return wo(e.replace(`$${s}`, String(o)), t);
            }
        }
        return e;
    }
    function xo(e, t) {
        const n = [];
        for (let r = 0; r < e.length; r++) n[r] = wo(e[r], t);
        return n;
    }
    const Po = ['number', 'string', 'undefined'];
    function ko(t, n, s = {}, o = !0) {
        o && (ho = 0);
        const a = [];
        function i(e) {
            if (Po.includes(typeof e)) {
                const t = a.at(-1);
                if ('string' == typeof t) return void (a[a.length - 1] = t + e);
            }
            a.push(e);
        }
        for (const l of t)
            if (l.type === ao) i(l.value);
            else if (l.type === lo)
                null === s[l.name] || Po.includes(typeof s[l.name])
                    ? i(s[l.name] ?? `{{${l.name}}}`)
                    : a.push(e.jsx(r.Fragment, { children: s[l.name] }, `var-${l.name}-${l.instanceId}`));
            else if (l.type === io) {
                const e = ko(l.children, n, s, !1),
                    t = _o(xo(l.attrs, s), e, n);
                a.push(t);
            }
        return a;
    }
    function Eo(e) {
        return e
            .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
            .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
    }
    function jo(e) {
        return e
            .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
            .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
    }
    function Co(e) {
        return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
    }
    const So = { start: '{{', end: '}}' },
        Ro = r.memo(function (t) {
            const {
                    brackets: n = So,
                    text: s,
                    params: o,
                    upgradeLegacy: a,
                    fullSize: i,
                    inline: l,
                    formatters: u,
                    split: c,
                    ...d
                } = t,
                h = r.useMemo(
                    () =>
                        t.upgradeLegacy
                            ? (function (e) {
                                  return (function (e, t, n, r, s, o, a, i, l) {
                                      switch (arguments.length) {
                                          case 1:
                                              return e;
                                          case 2:
                                              return t(e);
                                          case 3:
                                              return n(t(e));
                                          case 4:
                                              return r(n(t(e)));
                                          case 5:
                                              return s(r(n(t(e))));
                                          case 6:
                                              return o(s(r(n(t(e)))));
                                          case 7:
                                              return a(o(s(r(n(t(e))))));
                                          case 8:
                                              return i(a(o(s(r(n(t(e)))))));
                                          case 9:
                                              return l(i(a(o(s(r(n(t(e))))))));
                                          default: {
                                              let e = arguments[0];
                                              for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
                                              return e;
                                          }
                                      }
                                  })(e, Co, Eo, jo);
                              })(t.text)
                            : t.text,
                    [t.text, t.upgradeLegacy],
                ),
                m = r.useMemo(() => (t.formatters ? { ...bo, ...t.formatters } : bo), [t.formatters]),
                f = r.useMemo(
                    () =>
                        (function (e, t) {
                            const n = [],
                                r = [];
                            let s = '',
                                o = !1,
                                a = '',
                                i = 0;
                            for (let l = 0; l < e.length; l++) {
                                const u = e[l];
                                if (u === t.start[0] && e.slice(l, l + t.start.length) === t.start)
                                    (s &&
                                        (r.length > 0
                                            ? r[r.length - 1].node.children.push({ type: ao, value: s })
                                            : n.push({ type: ao, value: s }),
                                        (s = '')),
                                        (o = !0),
                                        (l += t.start.length - 1));
                                else if (u === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                                    ((o = !1), (l += t.end.length - 1));
                                    const e = a.trim();
                                    if (e.startsWith('@')) {
                                        const t = e.slice(1).trim(),
                                            s = { type: io, attrs: t.split('|'), instanceId: ++i, children: [] };
                                        (r.length > 0 ? r[r.length - 1].node.children.push(s) : n.push(s),
                                            r.push({ node: s, startIndex: n.length }));
                                    } else if ('/' === e) r.length > 0 && r.pop();
                                    else {
                                        const t = { type: lo, instanceId: ++i, name: e };
                                        r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                    }
                                    a = '';
                                } else o ? (a += u) : (s += u);
                            }
                            s &&
                                (r.length
                                    ? r[r.length - 1].node.children.push({ type: ao, value: s })
                                    : n.push({ type: ao, value: s }));
                            return n;
                        })(c ? `{{@ split}}${h}{{/}}` : h, n),
                    [n, h, c],
                ),
                p = r.useMemo(() => ko(f, m, t.params), [f, m, t.params]),
                g = T(uo.base, i && uo.base__fullSize, d.className);
            return t.inline
                ? (console.warn(
                      "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                      "Use 'split' prop instead.",
                  ),
                  e.jsx('p', {
                      ...d,
                      className: g,
                      ref: (e) => {
                          null == e || e.setAttribute('cohinline', 'true');
                      },
                      children: p,
                  }))
                : e.jsx('span', { ...d, className: g, children: p });
        });
    function No({ path: t, ...n }) {
        return e.jsx(Ro, { text: p.resolve('strings').readOrEmpty(t), ...n });
    }
    const Ao = { base: 'AnimatedValue_d9f4b2f0', animatedValue: 'AnimatedValue_animatedValue_4c490d83' },
        Mo = F.cubicBezier(0.33, 0, 0.25, 1),
        To = 330,
        Fo = 330;
    function Io(e) {
        return {
            enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
            leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
        };
    }
    function Oo({ value: t, transition: n, children: s, className: o, classNames: a }) {
        const i = r.useMemo(ye, []),
            l = Zr(t, {
                ...n,
                initial: { opacity: 1, y: '0rem', ...(null == n ? void 0 : n.initial) },
                from: { opacity: 0, y: '-5rem', ...(null == n ? void 0 : n.from) },
                enter: () => ({
                    opacity: 1,
                    y: '0rem',
                    delay: Fo,
                    config: { easing: Mo, duration: To },
                    onStart: () => {
                        const { enterElements: e, leftElements: t } = Io(i);
                        (e.forEach((e) => {
                            e instanceof HTMLElement && ((e.style.width = 'auto'), (e.style.position = 'relative'));
                        }),
                            t.forEach((e) => {
                                e instanceof HTMLElement && (e.style.position = 'absolute');
                            }));
                    },
                    ...(null == n ? void 0 : n.enter),
                }),
                leave: () => ({
                    top: 0,
                    left: 0,
                    opacity: 0,
                    y: '5rem',
                    config: { easing: Mo, duration: To },
                    onStart: () => {
                        let e = 0;
                        const { enterElements: t, leftElements: n } = Io(i);
                        (n.forEach((t) => {
                            t instanceof HTMLElement &&
                                ((e = Math.max(e, t.offsetWidth)), (t.style.position = 'relative'));
                        }),
                            t.forEach((t) => {
                                t instanceof HTMLElement &&
                                    ((t.style.width = `${e}px`), (t.style.position = 'absolute'));
                            }));
                    },
                    ...(null == n ? void 0 : n.leave),
                }),
            });
        return e.jsx('div', {
            className: T(Ao.base, o),
            children: l((n, r) => {
                const o = 0 === n.opacity.get() && !1 === n.opacity.isAnimating;
                return e.jsx(ps.div, {
                    className: T(
                        Ao.animatedValue,
                        `js-animated-value-${i}-${t === r ? 'enter' : 'leave'}`,
                        null == a ? void 0 : a.animatedValue,
                    ),
                    style: { ...n, position: o ? 'absolute' : 'relative' },
                    children: s(r),
                });
            }),
        });
    }
    const $o = {
            base: 'ProgressCount_3c6daa70',
            label: 'ProgressCount_label_d15406bd',
            total: 'ProgressCount_total_4f222a62',
            divider: 'ProgressCount_divider_487d7768',
        },
        Vo = p.resolve('intl');
    function Lo({ withLabel: e, withoutLimit: t }) {
        return t
            ? 'battle_results.progression.missionsCompleteCounter'
            : 'battle_results.progression.completedPointsFrom.' + (e ? 'withLabel' : 'withoutLabel');
    }
    function Do({ current: t, total: n, withLabel: r, withoutLimit: s, className: o, classNames: a }) {
        return e.jsx(No, {
            path: Lo({ withLabel: r, withoutLimit: s }),
            className: T($o.base, o),
            params: {
                completed: Vo.formatNumber('integral', t),
                total: Vo.formatNumber('integral', n),
                totalClass: T($o.total, null == a ? void 0 : a.total),
                labelClass: r && T($o.label, null == a ? void 0 : a.label),
            },
        });
    }
    function zo({
        current: t,
        total: n,
        withLabel: s,
        className: o,
        classNames: a,
        transitionCurrent: i,
        transitionTotal: l,
    }) {
        const u = As(),
            c = r.useRef({ transitionCurrent: i, transitionTotal: l });
        return (
            r.useEffect(() => {
                c.current = { transitionCurrent: i, transitionTotal: l };
            }, [i, l]),
            e.jsx(No, {
                path: 'battle_results.progression.completedPointsFrom.' + (s ? 'withLabel' : 'withoutLabel'),
                className: T($o.base, o),
                params: {
                    completed: e.jsx(Oo, {
                        className: null == a ? void 0 : a.currentTransitionWrapper,
                        value: Vo.formatNumber('integral', t),
                        transition: {
                            ...i,
                            enter: {
                                ...i.enter,
                                onRest: (...e) => {
                                    var t;
                                    (!0 !== c.current.transitionCurrent.immediate &&
                                        u.play('numbersShown', { target: 'mission-progress:progress-stats' }),
                                        'function' ==
                                            typeof (null == (t = null == c ? void 0 : c.current.transitionCurrent)
                                                ? void 0
                                                : t.onRest) && c.current.transitionCurrent.onRest(...e));
                                },
                            },
                        },
                        children: ne,
                    }),
                    total: e.jsx(Oo, {
                        className: null == a ? void 0 : a.totalTransitionWrapper,
                        value: Vo.formatNumber('integral', n),
                        transition: {
                            ...l,
                            enter: {
                                ...(null == l ? void 0 : l.enter),
                                onRest: (...e) => {
                                    var t, n;
                                    (!0 !== (null == (t = c.current.transitionTotal) ? void 0 : t.immediate) &&
                                        u.play('numbersShown', { target: 'mission-progress:progress-stats' }),
                                        'function' ==
                                            typeof (null == (n = null == c ? void 0 : c.current.transitionTotal)
                                                ? void 0
                                                : n.onRest) && c.current.transitionTotal.onRest(...e));
                                },
                            },
                        },
                        children: ne,
                    }),
                    totalClass: T($o.total, null == a ? void 0 : a.total),
                    labelClass: s && T($o.label, null == a ? void 0 : a.label),
                    dividerClass: $o.divider,
                },
            })
        );
    }
    const Bo = {
        content: 'RandomCard_content_3a39201a',
        card: 'RandomCard_card_719fb411',
        card__disabled: 'RandomCard_card__disabled_165d868b',
        cardHeader: 'RandomCard_cardHeader_dbd28ae0',
        cardHeaderBackground: 'RandomCard_cardHeaderBackground_920052a8',
        cardHeaderBorder: 'RandomCard_cardHeaderBorder_363f2a21',
        head: 'RandomCard_head_5a6da112',
        tail: 'RandomCard_tail_25d8e2a1',
        titleContainer: 'RandomCard_titleContainer_25d8e2a1',
        action: 'RandomCard_action_78f61cab',
        divider: 'RandomCard_divider_edff3732',
    };
    function qo({
        title: t,
        titleImageProps: n,
        disabled: r,
        actionTooltipParams: s,
        onHeaderClick: o,
        onButtonAction: a,
        children: i,
        progressionCountProps: l,
        className: u,
        classNames: c,
        ...d
    }) {
        var h, m, f;
        return e.jsxs(oo, {
            className: T(Bo.card, r && Bo.card__disabled, u),
            ...d,
            children: [
                e.jsxs(oo.Header, {
                    onClick: o,
                    className: T(Bo.cardHeader, null == (h = null == c ? void 0 : c.header) ? void 0 : h.base),
                    classNames: {
                        ...(null == c ? void 0 : c.header),
                        background: T(
                            Bo.cardHeaderBackground,
                            null == (m = null == c ? void 0 : c.header) ? void 0 : m.background,
                        ),
                        border: T(Bo.cardHeaderBorder, null == (f = null == c ? void 0 : c.header) ? void 0 : f.border),
                    },
                    children: [
                        e.jsxs('div', {
                            className: T(Bo.head, null == c ? void 0 : c.head),
                            children: [
                                e.jsxs('div', {
                                    className: Bo.titleContainer,
                                    children: [
                                        void 0 !== n && e.jsx(ke, { ...n }),
                                        e.jsx(oo.Title, {
                                            className: T(Bo.title, null == c ? void 0 : c.title),
                                            children: e.jsx(Ts, { text: t }),
                                        }),
                                    ],
                                }),
                                void 0 !== a &&
                                    e.jsx(oo.Action, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), a(e));
                                        },
                                        className: T(Bo.action, null == c ? void 0 : c.action),
                                        tooltipParams: s,
                                    }),
                            ],
                        }),
                        e.jsx('div', {
                            className: T(Bo.tail, null == c ? void 0 : c.tail),
                            children: void 0 !== l && e.jsx(Do, { ...l }),
                        }),
                    ],
                }),
                void 0 !== i &&
                    e.jsx(oo.Content, { className: T(Bo.content, null == c ? void 0 : c.content), children: i }),
                e.jsx('div', { className: Bo.divider }),
            ],
        });
    }
    const Uo = {
        showCheckMark: { 'mission-progress:checkmark': 'umg_hub_quest_complete' },
        numbersShown: {
            'mission-progress:received-value': 'gui_pbs_missions_progress_stats',
            'mission-progress:progress-stats': 'gui_pbs_missions_progress_stats',
        },
    };
    var Xo = ((e) => (
        (e.IRON = 'iron'),
        (e.BRONZE = 'bronze'),
        (e.SILVER = 'silver'),
        (e.GOLD = 'gold'),
        (e.ENAMEL = 'enamel'),
        (e.MAXIMUM = 'prestige'),
        (e.UNDEFINED = 'undefined'),
        e
    ))(Xo || {});
    function Ho(e) {
        for (let t = 0; t < document.styleSheets.length; t++) {
            const n = document.styleSheets.item(t);
            if (n.ownerNode === e) return n;
        }
    }
    function Wo(e) {
        for (let t = 0; t < e.cssRules.length; t++) e.deleteRule(t);
    }
    function Qo(e) {
        const [t, n] = (function (e) {
                const t = `css-plugin-${e.replaceAll('/', '_').replaceAll(':', '').replaceAll('.', '_')}`,
                    n = document.querySelector(`#${t}`);
                if (n instanceof HTMLLinkElement) return [n, !1];
                const r = document.createElement('link');
                return (
                    (r.crossOrigin = 'anonymous'),
                    (r.href = e),
                    (r.rel = 'stylesheet'),
                    (r.id = t),
                    document.head.appendChild(r),
                    [r, !0]
                );
            })(e),
            r = (function () {
                let e = oe,
                    t = oe;
                const n = new Promise((n, r) => {
                    ((t = n), (e = r));
                });
                return {
                    then: n.then.bind(n),
                    catch: n.catch.bind(n),
                    finally: n.finally.bind(n),
                    reject: e,
                    resolve: t,
                };
            })(),
            s = document.createElement('style');
        document.body.appendChild(s);
        const o = new ae();
        return (
            n
                ? o.add(
                      ie(t, 'load', () => {
                          r.resolve(t);
                      }),
                  )
                : le(e)
                      .then((e) => e.text())
                      .then((e) => {
                          const n = Ho(t);
                          if (!n) throw new Error(`Can't find sheets for ${t}`);
                          (Wo(n),
                              (function (e, t) {
                                  const n = (function (e) {
                                      const t = [];
                                      let n = 0,
                                          r = 0,
                                          s = !1,
                                          o = !1;
                                      for (let a = 0; a < e.length; a++) {
                                          const i = e[a],
                                              l = e[a + 1];
                                          if (o || '/' !== i || '*' !== l) {
                                              if (s && '*' === i && '/' === l) ((s = !1), a++, (n = a + 1));
                                              else if (
                                                  !s &&
                                                  (o || '@' !== i || ((o = !0), (r = 0)),
                                                  '{' === i && r++,
                                                  '}' === i && r--,
                                                  '}' === i && 0 === r)
                                              ) {
                                                  if (o) (t.push(e.substring(n, a + 1)), (o = !1));
                                                  else {
                                                      let r = n;
                                                      for (; '\n' === e[r] || ' ' === e[r]; ) r++;
                                                      t.push(e.substring(r, a + 1));
                                                  }
                                                  n = a + 1;
                                              }
                                          } else ((s = !0), a++);
                                      }
                                      return t.filter((e) => {
                                          const t = e.trim();
                                          return '' !== t && !t.startsWith('/*');
                                      });
                                  })(e);
                                  for (const r of n) t.insertRule(r, t.cssRules.length);
                              })(e, n),
                              r.resolve(t));
                      })
                      .catch(r.reject),
            o
                .add(
                    ie(t, 'error', (t) => {
                        (console.error(t), r.reject(`Load css failure ${e}`));
                    }),
                )
                .add(() => {
                    !(function (e, t) {
                        const n = Ho(t);
                        if (!n) return console.error(`Can't find sheets for ${t.id} (${e}). Clean rules skipped.`);
                        Wo(n);
                    })(e, t);
                }),
            { promise: r, link: t, cleanup: o.dispose }
        );
    }
    function Go(t) {
        return e.jsx(e.Fragment, { children: t.children });
    }
    function Zo(t) {
        return e.jsx(Go, {
            children: e.jsx(Ns, {
                overrides: t.soundsOverrides,
                severity: t.soundSeverity,
                silent: t.soundsOff,
                children: t.children,
            }),
        });
    }
    function Ko(e, t) {
        return t
            ? 'battle_results.prestige.max.description'
            : e
              ? 'battle_results.prestige.newLevelAchieved.description'
              : 'battle_results.prestige.common.description';
    }
    function Jo(e) {
        return { level: e.level, grade: e.grade, type: e.type };
    }
    const [Yo, ea] = (
            (t = 'DataLayerProvider') =>
            (n, s, o) => {
                const a = r.createContext(null);
                function i(i) {
                    var l;
                    const { mode: u, options: c, children: d, mocks: h } = i,
                        m = r.useContext(Fe),
                        f = u ?? m.mode,
                        p = h ?? m.mocks,
                        g = r.useRef([]),
                        b = null == (l = null == o ? void 0 : o.useRequires) ? void 0 : l.call(o),
                        v = _s((e, r, a) => {
                            var l;
                            const u =
                                    'real' !== e && a
                                        ? (function (e, t) {
                                              return {
                                                  subscribe: () => 0,
                                                  readSafeByPath: e,
                                                  readByPath: e,
                                                  createCallback: (n, r) => {
                                                      const s = e(ee(r, t));
                                                      return (...e) => {
                                                          s(n(...e));
                                                      };
                                                  },
                                                  createCallbackNoArgs: (n) => {
                                                      const r = e(ee(n, t));
                                                      return () => {
                                                          r();
                                                      };
                                                  },
                                                  dispose: () => {},
                                                  unsubscribe: () => {},
                                                  events: { subscribersNotified: new K() },
                                              };
                                          })(a.getter, r)
                                        : Y(r, { name: t }),
                                c = (t) => ('mocks' === e ? (null == a ? void 0 : a.getter(t, r)) : u.readByPath(t)),
                                d = (e) => g.current.push(e),
                                h = 'initial' in i && {
                                    initial:
                                        null == (l = null == o ? void 0 : o.initial) ? void 0 : l.call(o, i.initial),
                                },
                                m = n({
                                    ...h,
                                    mode: e,
                                    readByPath: c,
                                    requires: b,
                                    externalModel: u,
                                    observableModel: Oe(u, e, c),
                                    cleanup: d,
                                }),
                                f = { ...h, mode: e, model: m, externalModel: u, cleanup: d, requires: b },
                                p = 'mocks' === e && (null == a ? void 0 : a.controls) ? a.controls(f) : {};
                            return {
                                model: m,
                                controls: { ...(null == s ? void 0 : s(f)), ...p },
                                externalModel: u,
                                mode: e,
                                rootId: (null == r ? void 0 : r.rootId) ?? 0,
                            };
                        }),
                        _ = r.useRef(!1),
                        [y, w] = r.useState(f);
                    r.useEffect(() => {
                        w(f);
                    }, [f]);
                    const [x, P] = r.useState(() => v(y, c, p));
                    return (
                        r.useEffect(() => {
                            _.current ? P(v(y, c, p)) : (_.current = !0);
                        }, [
                            v,
                            p,
                            y,
                            null == c ? void 0 : c.context,
                            null == c ? void 0 : c.initializer,
                            null == c ? void 0 : c.getRoot,
                            null == c ? void 0 : c.rootId,
                        ]),
                        r.useEffect(
                            () => () => {
                                (x.externalModel.dispose(), g.current.forEach((e) => e()));
                            },
                            [x],
                        ),
                        e.jsx(a.Provider, { value: x, children: d })
                    );
                }
                return (
                    (i.displayName = t),
                    [
                        i,
                        function () {
                            const e = r.useContext(a);
                            if (!e) throw new Error(`hook useModel must be used within a ${i.displayName}.`);
                            return e;
                        },
                        { Context: a },
                    ]
                );
            }
        )()(
            ({ observableModel: e }) => {
                const t = {
                        ...e.primitives([
                            'vehCD',
                            'oldLvl',
                            'newLvl',
                            'currentXP',
                            'currentNextLevelXP',
                            'oldXP',
                            'oldNextLvlXP',
                            'gainedXP',
                            'isNavigationEnabled',
                        ]),
                        currentPrestigeEmblem: e.transform(Jo, 'currentPrestigeEmblemModel', { equals: pe.shallow }),
                        oldPrestigeEmblemModel: e.transform(Jo, 'oldPrestigeEmblemModel', { equals: pe.shallow }),
                    },
                    n = gs.primitive(() => t.oldXP.get() + t.gainedXP.get() === t.oldNextLvlXP.get()),
                    r = gs.primitive(() => t.currentPrestigeEmblem.get().type === Xo.MAXIMUM),
                    s = gs.primitive(() => t.oldLvl.get() < t.newLvl.get());
                return { ...t, computes: { gainedEqualsMaxValue: n, maxLevelReached: r, isNextLevel: s } };
            },
            ({ externalModel: e }) => ({ navigate: e.createCallback((e) => ({ vehCD: e }), 'onNavigate') }),
        ),
        ta = 'idle',
        na = 'oldLevelFilled',
        ra = 'progressFade',
        sa = 'newLevelStart',
        oa = 'newLevelProgressFilled',
        aa = 'checkMarkShown',
        ia = 'maxLevelReached',
        la = r.createContext(null);
    function ua() {
        const e = r.useContext(la);
        if (null === e)
            throw new Error('You can use the animation context hooks only with the AnimationProvider component');
        return e;
    }
    const ca = i.observer(function ({ children: t, visible: n, immediateAnimation: s }) {
            const [o, a] = r.useState(ta),
                i = (function () {
                    const e = r.useRef(0);
                    return (
                        ys(() => {
                            window.clearTimeout(e.current);
                        }),
                        r.useMemo(
                            () => ({
                                run: (t, n) => {
                                    (window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            ((e.current = 0), t());
                                        }, n)));
                                },
                                clear: () => {
                                    (window.clearTimeout(e.current), (e.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                })(),
                l = Gr(),
                u = Gr(),
                c = Gr(),
                d = Gr(),
                h = Gr(),
                m = Gr(),
                f = Gr(),
                p = Gr(),
                g = Gr(),
                { model: b } = ea(),
                v = b.oldXP.get(),
                _ = b.gainedXP.get(),
                y = b.oldNextLvlXP.get(),
                w = b.currentNextLevelXP.get(),
                x = b.currentXP.get(),
                P = b.currentPrestigeEmblem.get(),
                k = b.oldPrestigeEmblemModel.get(),
                E = b.computes.isNextLevel(),
                j = b.computes.maxLevelReached(),
                C = b.computes.gainedEqualsMaxValue(),
                S = r.useCallback(function (e) {
                    a(e);
                }, []);
            (r.useEffect(() => {
                n && a(na);
            }, [n]),
                r.useEffect(() => {
                    if (s)
                        return (
                            l.start(),
                            c.start(),
                            h.start(),
                            m.start(),
                            p.start(),
                            g.start({ to: { opacity: 1 }, immediate: !0 }),
                            void (E && (u.start(), d.start(), f.start()))
                        );
                    switch (o) {
                        case ta:
                            return;
                        case na:
                            (l.start(), c.start());
                            break;
                        case ra:
                            g.start({
                                to: { opacity: 0 },
                                config: { duration: 200 },
                                onRest: () => {
                                    a(sa);
                                },
                            });
                            break;
                        case sa:
                            (h.start(),
                                i.run(() => {
                                    (a(oa), g.start({ to: { opacity: 1 }, immediate: !0 }), i.clear());
                                }, 500));
                            break;
                        case oa:
                            (u.start(),
                                l.start(),
                                c.start(),
                                f.start(),
                                C &&
                                    0 === x &&
                                    i.run(() => {
                                        (a(aa), i.clear());
                                    }, 1e3));
                            break;
                        case aa:
                            d.start();
                            break;
                        case ia:
                            (m.start(),
                                f.start(),
                                i.run(() => {
                                    p.start();
                                }, 450));
                    }
                }, [o, s]));
            const R = r.useMemo(() => {
                    if (s)
                        return {
                            deltaFrom: x,
                            progressBarValue: x,
                            progressBarMaxValue: w,
                            currentXP: x,
                            maxLevelXP: w,
                            totalLabel: E,
                            emblem: P,
                            labelPathKey: Ko(E, j),
                            deltaPoints: _,
                        };
                    switch (o) {
                        case ta:
                            return {
                                deltaFrom: v,
                                progressBarValue: v,
                                progressBarMaxValue: y,
                                currentXP: v,
                                maxLevelXP: y,
                                earnedValue: y - v,
                                totalLabel: !1,
                                emblem: k,
                                labelPathKey: 'battle_results.prestige.common.description',
                                deltaPoints: 0,
                            };
                        case na:
                        case ra: {
                            const e = E ? y : v + _;
                            return {
                                deltaFrom: o === ra ? y : v,
                                progressBarValue: e,
                                progressBarMaxValue: y,
                                currentXP: e,
                                maxLevelXP: y,
                                totalLabel: !1,
                                emblem: k,
                                labelPathKey: 'battle_results.prestige.common.description',
                                deltaPoints: E ? y - v : _,
                            };
                        }
                        case sa:
                            return {
                                deltaFrom: 0,
                                progressBarValue: 0,
                                progressBarMaxValue: w,
                                currentXP: x,
                                maxLevelXP: w,
                                totalLabel: !1,
                                emblem: P,
                                labelPathKey: 'battle_results.prestige.newLevelAchieved.description',
                                deltaPoints: _,
                            };
                        case oa:
                        case aa:
                            return {
                                deltaFrom: o === aa ? x : 0,
                                progressBarValue: x,
                                progressBarMaxValue: w,
                                currentXP: x,
                                maxLevelXP: w,
                                totalLabel: !0,
                                emblem: P,
                                labelPathKey: 'battle_results.prestige.newLevelAchieved.description',
                                deltaPoints: _,
                            };
                        case ia: {
                            const e = E ? y : v + _;
                            return {
                                deltaFrom: e,
                                progressBarValue: e,
                                progressBarMaxValue: y,
                                currentXP: e,
                                maxLevelXP: y,
                                totalLabel: !1,
                                emblem: P,
                                labelPathKey: 'battle_results.prestige.maxLevelReached.description',
                                deltaPoints: E ? y - v : _,
                            };
                        }
                    }
                }, [o, v, _, E, x, y, w, k, P, s, j]),
                N = r.useMemo(
                    () => ({
                        state: o,
                        handleState: S,
                        stepValues: R,
                        immediateAnimation: s,
                        emblemRef: f,
                        currentPointsRef: l,
                        totalPointsRef: u,
                        completedMarkRef: d,
                        receivedValueRef: c,
                        contentRef: m,
                        progressStatsLabelRef: h,
                        maxLevelReachedMarkRef: p,
                        progressWrapperRef: g,
                    }),
                    [o, R, s, S],
                );
            return e.jsx(la.Provider, { value: N, children: t });
        }),
        da = 'CompletedMark_fc4eee08',
        ha = 'CompletedMark_glow_33775180',
        ma = F.cubicBezier(1, 0, 0.95, 1),
        fa = F.cubicBezier(0.45, 0, 0.52, 1),
        pa = r.forwardRef(function (
            {
                target: t,
                animationRef: n,
                className: o,
                path: a,
                width: i,
                height: l,
                glow: u,
                springProps: c,
                style: d,
                classNames: h,
                onGlowRest: m,
                ...f
            },
            p,
        ) {
            const g = r.useRef(c),
                b = As(),
                v = s.useAdaptive(
                    {
                        icon: { width: 24, height: 24, path: 'post_battle.progression.done_24x24' },
                        glow: { width: 48, height: 48, path: 'post_battle.progression.done_glow_24x24' },
                    },
                    {
                        large: {
                            icon: { width: 32, height: 32, path: 'post_battle.progression.done_32x32' },
                            glow: { width: 64, height: 64, path: 'post_battle.progression.done_glow_32x32' },
                        },
                    },
                ),
                [_, y] = Wr(() => ({ from: { opacity: 0 } })),
                [w] = Wr(() => {
                    var e, r;
                    return {
                        ref: n,
                        from: { maskSize: '0% 100%', opacity: 0 },
                        to: [
                            {
                                maskSize: '40% 80%',
                                opacity: 0.5,
                                config: { duration: 100, easing: ma },
                                immediate: null == (e = g.current) ? void 0 : e.immediate,
                                onStart: () => {
                                    var e;
                                    !0 !== (null == (e = g.current) ? void 0 : e.immediate) &&
                                        b.play('showCheckMark', { target: t || 'mission-progress:checkmark' });
                                },
                            },
                            {
                                maskSize: '100% 100%',
                                opacity: 1,
                                config: { duration: 100, easing: ma },
                                immediate: null == (r = g.current) ? void 0 : r.immediate,
                            },
                        ],
                        onRest: () => {
                            y.start({
                                to: [
                                    { opacity: 0.6, config: { duration: 160, easing: fa } },
                                    { opacity: 0, config: { duration: 160, easing: fa } },
                                ],
                                onRest: m,
                            });
                        },
                        ...g,
                    };
                });
            return (
                r.useEffect(() => {
                    g.current = c;
                }, [c]),
                e.jsxs('div', {
                    className: T(da, o),
                    children: [
                        e.jsx(ps.div, {
                            style: _,
                            className: T(ha, null == h ? void 0 : h.glow),
                            children: e.jsx(ke, {
                                width: (null == u ? void 0 : u.width) ?? v.glow.width,
                                height: (null == u ? void 0 : u.height) ?? v.glow.height,
                                path: (null == u ? void 0 : u.path) ?? v.glow.path,
                            }),
                        }),
                        e.jsx(ps.div, {
                            ...f,
                            style: { ...w, ...d },
                            ref: p,
                            className: null == h ? void 0 : h.icon,
                            children: e.jsx(ke, {
                                width: i ?? v.icon.width,
                                height: l ?? v.icon.height,
                                path: a ?? v.icon.path,
                            }),
                        }),
                    ],
                })
            );
        });
    r.forwardRef(function ({ path: t, width: n, height: r, ...o }, a) {
        const i = s.useAdaptive(
            { size: 24, path: 'post_battle.progression.done_24x24' },
            { large: { size: 32, path: 'post_battle.progression.done_32x32' } },
        );
        return e.jsx(ke, { ...o, ref: a, width: n ?? i.size, height: r ?? i.size, path: t ?? i.path });
    });
    const ga = 'ProgressStats_label_6e975df0',
        ba = 'ProgressStats_receivedInBattle_d3abd2fe',
        va = Vs('ProgressStatsLabel', ga),
        _a = r.forwardRef(({ className: t, text: n, transitionProps: r, ...s }, o) =>
            e.jsx('div', {
                ...s,
                className: T(ga, t),
                ref: o,
                children: e.jsx(Oo, { value: n, transition: r, children: ne }),
            }),
        ),
        ya = r.forwardRef(({ value: t, className: n, total: r, ...s }, o) =>
            e.jsx('div', {
                ...s,
                ref: o,
                className: T(ba, n),
                children: e.jsx(No, {
                    path: r ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    params: { value: t },
                }),
            }),
        ),
        wa = r.forwardRef(({ value: t, className: n, total: s, transition: o, target: a, ...i }, l) => {
            const u = As(),
                c = r.useMemo(
                    () => ({
                        value: t,
                        textPath: s ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    }),
                    [t, s],
                ),
                d = r.useRef(o);
            return (
                r.useEffect(() => {
                    d.current = o;
                }, [o]),
                e.jsx('div', {
                    ...i,
                    ref: l,
                    className: T(ba, n),
                    children: e.jsx(Oo, {
                        value: c,
                        transition: {
                            ...o,
                            enter: {
                                ...o.enter,
                                onRest: (...e) => {
                                    var t;
                                    (!0 !== d.current.immediate &&
                                        u.play('numbersShown', { target: a ?? 'mission-progress:received-value' }),
                                        'function' ==
                                            typeof (null == (t = null == o ? void 0 : o.enter) ? void 0 : t.onRest) &&
                                            o.enter.onRest(...e));
                                },
                            },
                        },
                        children: (t) => e.jsx(No, { path: t.textPath, params: { value: t.value } }),
                    }),
                })
            );
        }),
        xa = Vs('ProgressStats');
    ((xa.Label = va), (xa.ReceivedValue = ya), (xa.AnimatedReceivedValue = wa), (xa.AnimatedLabel = _a));
    const Pa = 'gold',
        ka = 'enamel',
        Ea = 'prestige',
        ja = { xs: '48x48', sm: '72x72', md: '115x84', lg: '170x124', xl: '400x300', xxl: '600x450' },
        Ca = { xs: '6x12', sm: '9x19', md: '16x33', lg: '23x48', xl: '53x120', xxl: '77x176' };
    function Sa(e, t, n) {
        return t === Ea ? `.c_${ja[n]}.${t}` : `.c_${ja[n]}.${t}.c_${e}`;
    }
    const Ra = {
        icon: 'VehiclePrestigeEmblem_icon_940474a9',
        base: 'VehiclePrestigeEmblem_24849b0a',
        base__xs: 'VehiclePrestigeEmblem_base__xs_678b197f',
        base__sm: 'VehiclePrestigeEmblem_base__sm_f0368fa3',
        base__md: 'VehiclePrestigeEmblem_base__md_63f722e6',
        base__lg: 'VehiclePrestigeEmblem_base__lg_69373327',
        base__xl: 'VehiclePrestigeEmblem_base__xl_3144948a',
        base__xxl: 'VehiclePrestigeEmblem_base__xxl_fec732e8',
        level: 'VehiclePrestigeEmblem_level_8cc4a042',
        levelIcon__xs: 'VehiclePrestigeEmblem_levelIcon__xs_d11b6645',
        levelIcon__sm: 'VehiclePrestigeEmblem_levelIcon__sm_900b8c7f',
        levelIcon__md: 'VehiclePrestigeEmblem_levelIcon__md_914fcef3',
        levelIcon__lg: 'VehiclePrestigeEmblem_levelIcon__lg_2fd402cc',
        levelIcon__xl: 'VehiclePrestigeEmblem_levelIcon__xl_8c7e5b4d',
        levelIcon__xxl: 'VehiclePrestigeEmblem_levelIcon__xxl_f852cb4e',
    };
    function Na({ level: t, type: n, size: r, classNames: s, ...o }) {
        const a = t.toString().split('');
        return e.jsx('div', {
            ...o,
            className: Ra.level,
            children: a.map((t, o) =>
                e.jsx(
                    ke,
                    {
                        className: T(Ra.levelIcon, Ra[`levelIcon__${r}`], null == s ? void 0 : s.levelIcon),
                        path: `prestige.emblemFont.c_${Ca[r]}.${n === ka ? Pa : n}.c_${t}`,
                    },
                    o,
                ),
            ),
        });
    }
    const Aa = r.forwardRef(function ({ level: t, grade: n, type: r, size: s, classNames: o, ...a }, i) {
        return e.jsxs('div', {
            ...a,
            ref: i,
            className: T(Ra.base, Ra[`base__${s}`], null == o ? void 0 : o.base),
            children: [
                e.jsx(ke, {
                    path: `prestige.emblem${Sa(n, r, s)}`,
                    className: T(Ra.icon, null == o ? void 0 : o.icon),
                }),
                r !== Ea &&
                    e.jsx(Na, { level: t, type: r, size: s, classNames: { levelIcon: null == o ? void 0 : o.level } }),
            ],
        });
    });
    function Ma() {
        const { breakpoint: t } = s.useMedia(),
            { emblemRef: n, stepValues: r, immediateAnimation: o } = ua();
        return o
            ? e.jsx(Aa, {
                  level: r.emblem.level,
                  grade: r.emblem.grade,
                  type: r.emblem.type,
                  size: t.weight < s.breakpointsByType.large.weight ? Aa.sizes.sm : Aa.sizes.md,
              })
            : e.jsx(Oo, {
                  value: r.emblem,
                  transition: { ref: n, from: { y: '-10rem' }, leave: { y: '10rem' } },
                  children: (n) =>
                      e.jsx(Aa, {
                          level: n.level,
                          grade: n.grade,
                          type: n.type,
                          size: t.weight < s.breakpointsByType.large.weight ? Aa.sizes.sm : Aa.sizes.md,
                      }),
              });
    }
    Aa.sizes = { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', xxl: 'xxl' };
    const Ta = {
            content: 'EliteSystem_content_19cb9e91',
            animatedContent: 'EliteSystem_animatedContent_af4fd82e',
            progressStats: 'EliteSystem_progressStats_2c5cb458',
            label: 'EliteSystem_label_1d822bd9',
            label__zeroIndent: 'EliteSystem_label__zeroIndent_bb41ea6b',
            completedMark: 'EliteSystem_completedMark_23032e55',
            completedMarkIcon: 'EliteSystem_completedMarkIcon_3e18c4ff',
            currency: 'EliteSystem_currency_42f07642',
            progressCount: 'EliteSystem_progressCount_34f8dc47',
            progressBar: 'EliteSystem_progressBar_88f96644',
            numberStats: 'EliteSystem_numberStats_8dc9720',
        },
        Fa = p.resolve('strings');
    function Ia() {
        const { progressStatsLabelRef: t, completedMarkRef: n, stepValues: r, immediateAnimation: s } = ua();
        return e.jsxs('div', {
            className: Ta.label,
            children: [
                e.jsx(xa.AnimatedLabel, {
                    transitionProps: { immediate: s, ref: t },
                    text: Fa.readOrEmpty(r.labelPathKey),
                }),
                e.jsx(pa, {
                    animationRef: n,
                    className: Ta.completedMark,
                    classNames: { icon: Ta.completedMarkIcon },
                    springProps: { immediate: s },
                }),
            ],
        });
    }
    const Oa = {
            tankXP: 'tankXP',
            freeXP: 'freeXP',
            credits: 'credits',
            gold: 'gold',
            crystal: 'crystal',
            equipCoin: 'equipCoin',
            stpCoin: 'stpcoin',
            brCoin: 'brcoin',
            eliteXp: 'eliteXp',
            depot: 'depot',
            vehicle: 'vehicle',
            crew: 'crew',
            custom: 'custom',
            xp: 'xp',
            brProgressionToken: 'brProgressionToken',
            battlePassPoints: 'battlePassPoints',
        },
        $a = Object.values(Oa),
        Va = {
            extraSmall: 'extraSmall',
            small: 'small',
            medium: 'medium',
            large: 'large',
            extraLarge: 'extraLarge',
            xxl: 'xxl',
        },
        La = {
            [Va.extraSmall]: 16,
            [Va.small]: 24,
            [Va.medium]: 32,
            [Va.large]: 48,
            [Va.extraLarge]: 80,
            [Va.xxl]: 96,
        },
        Da = {
            [Va.extraSmall]: 32,
            [Va.small]: 48,
            [Va.medium]: 32,
            [Va.large]: 96,
            [Va.extraLarge]: 80,
            [Va.xxl]: 96,
        };
    (Va.extraSmall, Va.small, Va.medium, Va.large, Va.extraLarge, Va.xxl);
    const za = {
            base: 'Currency_72d4be39',
            base__reverse: 'Currency_base__reverse_f12e61b0',
            base__notEnough: 'Currency_base__notEnough_9a7842f',
            base__credits: 'Currency_base__credits_7b9ae721',
            base__gold: 'Currency_base__gold_d6e3cbc',
            base__freeXP: 'Currency_base__freeXP_d29d5a57',
            base__crystal: 'Currency_base__crystal_f830cb47',
            base__tankXP: 'Currency_base__tankXP_1707c68b',
        },
        Ba = p.resolve('intl'),
        qa = Vs('Currency', za.base, { variants: { reverse: { true: za.base__reverse } } });
    function Ua(e, t) {
        const n = t === Oa.gold ? 'gold' : 'integral';
        return Array.isArray(e)
            ? e.map((e) => ('number' == typeof e ? Ba.formatNumber(n, e) : e))
            : 'number' == typeof e
              ? Ba.formatNumber(n, e)
              : e;
    }
    function Xa({
        children: t,
        type: n,
        className: r,
        classNames: o,
        imagePath: a,
        size: i = Va.small,
        enough: l = !0,
        ...u
    }) {
        const c = La[i],
            d = `${n}_${c}x${c}`,
            h = Da[i],
            m = `${n}_${h}x${h}`,
            f = a || $a.includes(n),
            p = s.useUpscale(`library.currency.${d}`, `library.currency.${m}`);
        return e.jsxs(qa, {
            ...u,
            className: T(null == o ? void 0 : o.base, l ? za[`base__${n}`] : za.base__notEnough, r),
            children: [
                f && e.jsx(ke, { width: c, height: c, path: a ?? p, className: null == o ? void 0 : o.icon }),
                Ua(t, n),
            ],
        });
    }
    function Ha() {
        const { stepValues: t, immediateAnimation: n, currentPointsRef: r, totalPointsRef: s } = ua();
        return e.jsx(Xa, {
            reverse: !0,
            type: 'tankXP',
            className: Ta.currency,
            children: e.jsx(zo, {
                current: t.currentXP,
                total: t.maxLevelXP,
                transitionCurrent: { immediate: n, ref: r },
                transitionTotal: { ref: s, immediate: n },
                className: Ta.progressCount,
            }),
        });
    }
    function Wa({
        baseValue: e,
        newValue: t,
        animationType: n = Za.simple,
        deltaVisible: r = !1,
        preViewDeltaVisible: s = !1,
        animationConfig: o,
    }) {
        return {
            from: { width: e },
            to: { width: t },
            config: o ?? { duration: (n === Za.simple && r) || (!r && s) ? 0 : Qa, easing: Ht.easeInOutCubic },
        };
    }
    ((Xa.sizes = Va), (Xa.types = Oa));
    const Qa = 600,
        Ga = { duration: Qa, easing: Ht.easeInOutCubic },
        Za = { simple: 'simple', grow: 'grow', growFreeze: 'growFreeze' },
        Ka = { medium: 'medium', large: 'large' },
        Ja = { disabled: 'disabled', doneInactive: 'doneInactive', doneStatic: 'doneStatic' },
        Ya = 'growing',
        ei = 'shrinking',
        ti = 'done',
        ni = r.createContext(void 0);
    function ri() {
        const e = r.useContext(ni);
        if (!e) throw new Error('ProgressBar must be used within a ProgressBar');
        return e;
    }
    function si(e) {
        const { activeComponents: t } = ri();
        r.useEffect(
            () => (
                t.add(e),
                () => {
                    t.delete(e);
                }
            ),
            [t, e],
        );
    }
    const oi = {
        base: 'BackgroundPattern_8df99ec8',
        backgroundPattern: 'BackgroundPattern_backgroundPattern_d9136c40',
        backgroundPattern__medium: 'BackgroundPattern_backgroundPattern__medium_84d64a88',
        backgroundPattern__large: 'BackgroundPattern_backgroundPattern__large_3e5537fc',
    };
    const ai = r.memo(function ({ className: t, backgroundPattern: n }) {
        const r = ri();
        return (
            si('backgroundPattern'),
            e.jsx('div', {
                className: oi.base,
                children: e.jsx(ke, {
                    className: T(
                        t,
                        oi.backgroundPattern,
                        0 === r.percentage ? oi.backgroundPattern__noProgress : oi[`backgroundPattern__${r.size}`],
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    path:
                        n ??
                        ((s = r.size),
                        (o = r.status),
                        o === Ja.disabled
                            ? `ui.progressbar.bg_pattern_base_disabled_${s}`
                            : `ui.progressbar.bg_pattern_base_${s}`),
                }),
            })
        );
        var s, o;
    });
    function ii(e, t) {
        const n = ri(),
            r = As();
        return _s((s) => {
            if (s)
                switch (n.animationType) {
                    case 'simple':
                        n.progressCompleted
                            ? r.play('increaseDeltaMax', { target: t })
                            : r.play('progressSimple', { target: t });
                        break;
                    case 'grow':
                        !(function (s) {
                            if ('growing' === s) return r.play('progressSimple', { target: t });
                            if ('shrinking' === s) {
                                if (n.progressCompleted) return r.play('increaseDeltaMax', { target: t });
                                if (e > 0) return r.play('increaseDelta', { target: t });
                                if (e < 0) r.play('decreaseDelta', { target: t });
                            }
                        })(s);
                        break;
                    case 'growFreeze':
                        !(function (n) {
                            e > 0 && 'shrinking' === n
                                ? r.play('increaseDeltaMax', { target: t })
                                : r.play('progressSimple', { target: t });
                        })(s);
                        break;
                    default:
                        r.play('progressSimple', { target: t });
                }
        });
    }
    function li(e = 0) {
        const t = ri(),
            n = t.soundTarget ?? 'progress-bar',
            r = As(),
            s = ii(e, n),
            o = _s(() => {
                t.status !== Ja.doneInactive && t.progressCompleted
                    ? r.play('increaseDeltaMax', { target: n })
                    : r.play('progressSimple', { target: n });
            });
        return _s(({ step: e } = {}) => {
            if (!t.silent)
                return t.activeComponents.has('delta') ? s(e) : t.activeComponents.has('fill') ? o() : void 0;
        });
    }
    const ui = 'Delta_eb295acb',
        ci = 'Delta_delta__increase_e6e76b0b',
        di = 'Delta_outside_b28c01e5',
        hi = 'Delta_outside__increase_91391b24',
        mi = 'Delta_inside_b1b3a5c5',
        fi = 'Delta_inside__increase_fcd871c4',
        pi = r.memo(
            r.forwardRef(function (
                {
                    from: t,
                    growAnimationConfig: n,
                    shrinkAnimationConfig: s,
                    classNames: o,
                    className: a,
                    steps: i,
                    onState: l,
                    ...u
                },
                c,
            ) {
                const d = r.useRef(null),
                    h = ri(),
                    [m, f] = Wr(() => ({ width: 0 })),
                    [p, g] = Wr(() => ({ width: 0 })),
                    [b, v] = Wr(() => ({ left: 0, width: 0 })),
                    [_, ...y] = i,
                    [w, x] = r.useState(y),
                    [P, k] = r.useState(_ ?? 'done'),
                    E = (h.value - t) / h.maxValue,
                    j = li(E);
                (si('delta'),
                    r.useEffect(() => {
                        if (0 === E) return;
                        const [e, ...t] = i;
                        (k(e ?? 'done'), x(t));
                    }, [f, g, i, E]));
                const C = _s(l ?? te);
                r.useEffect(() => C(P), [P, C]);
                const S = _s(() => {
                    const [e, ...t] = w;
                    void 0 !== e ? (k(e), x(t)) : k('done');
                });
                return (
                    r.useEffect(() => {
                        const e = d.current;
                        if (!e || 0 === E) return (g.set({ width: 0 }), f.set({ width: 0 }), k('done'), void x([]));
                        const t = 100 * Math.max(0, h.percentage - Math.max(0, E)),
                            r = 100 * Math.abs(E);
                        return (
                            e.classList.toggle(ci, E > 0),
                            'growing' === P
                                ? (v.set({ left: t, width: r }),
                                  g.set({ width: 100 }),
                                  void f.start({
                                      from: { width: 0 },
                                      to: { width: 100 },
                                      config: n ?? Ga,
                                      onRest: S,
                                      onStart: () => j({ step: P }),
                                  }))
                                : 'shrinking' === P
                                  ? (v.set({ left: t, width: r }),
                                    f.set({ width: 100 }),
                                    void g.start({
                                        from: { width: 100 },
                                        to: { width: 0 },
                                        config: s ?? Ga,
                                        onRest: S,
                                        onStart: () => j({ step: P }),
                                    }))
                                  : void 0
                        );
                    }, [v, h.percentage, E, n, f, S, g, j, s, P]),
                    e.jsxs(ps.div, {
                        ...u,
                        ref: bs([c, d]),
                        className: T(a, ui),
                        style: { left: b.left.to((e) => `${e}%`), width: b.width.to((e) => `${e}%`) },
                        children: [
                            e.jsxs(ps.div, {
                                ...u,
                                style: { width: p.width.to((e) => `${e}%`) },
                                className: T(null == o ? void 0 : o.outside, di, E > 0 && hi),
                                children: [
                                    e.jsx(ps.div, {
                                        style: { width: m.width.to((e) => `${e}%`) },
                                        className: T(null == o ? void 0 : o.inside, mi, E > 0 && fi),
                                    }),
                                    u.children,
                                ],
                            }),
                            u.children,
                        ],
                    })
                );
            }),
        ),
        gi = {
            base: 'Fill_d056f825',
            filled: 'Fill_filled_c16bdce3',
            done: 'Fill_done_4d97d579',
            complete: 'Fill_complete_2cd6c62b',
            filled__hidden: 'Fill_filled__hidden_4e5b5ebf',
            filled__disabled: 'Fill_filled__disabled_6436ea6a',
            done__hidden: 'Fill_done__hidden_4a8ded52',
            done__visible: 'Fill_done__visible_91e1c2da',
            fadeInOut: 'Fill_fadeInOut_43ad874e',
            done__doneStatic: 'Fill_done__doneStatic_6c7a7d30',
            complete__visible: 'Fill_complete__visible_3f743fe8',
            edge: 'Fill_edge_f22fc9a7',
            edge__visible: 'Fill_edge__visible_3f743fe8',
            edge__disabled: 'Fill_edge__disabled_8e78bf83',
            edge__noProgress: 'Fill_edge__noProgress_387f6e75',
        },
        bi = ps(ke),
        vi = r.memo(function ({ animationConfig: t, classNames: n }) {
            var s;
            const o = ri(),
                { activeComponents: a } = ri(),
                i = 100 * o.percentage,
                l = 100 * ((null == (s = o.previous) ? void 0 : s.percentage) ?? 0),
                u = void 0 === o.previous ? i : l,
                c = o.status === Ja.doneStatic,
                d = xs(),
                [h, m] = Wr(() => ({ width: u }));
            return (
                r.useEffect(() => {
                    d.run(() =>
                        m.start(
                            Wa({
                                baseValue: u,
                                newValue: i,
                                animationType: o.animationType,
                                deltaVisible: a.has('delta'),
                                preViewDeltaVisible: a.has('previewDelta'),
                                animationConfig: t,
                            }),
                        ),
                    );
                }, [i, m, u, o.animationType, t, a, d]),
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(bi, {
                            path: `ui.progressbar.bg_pattern_base_done_${o.size}`,
                            className: T(
                                null == n ? void 0 : n.done,
                                gi.done,
                                !o.progressCompleted && gi.done__hidden,
                                o.progressCompleted && (c ? gi.done__doneStatic : gi.done__visible),
                            ),
                            repeat: 'repeat',
                            position: 'left top',
                            style: { width: h.width.to((e) => `${e}%`) },
                        }),
                        !c &&
                            e.jsx(bi, {
                                path: `ui.progressbar.bg_pattern_base_done_complete_${o.size}`,
                                className: T(
                                    null == n ? void 0 : n.doneComplete,
                                    gi.complete,
                                    o.progressCompleted && gi.complete__visible,
                                ),
                                repeat: 'repeat',
                                position: 'left top',
                                style: { width: h.width.to((e) => `${e}%`) },
                            }),
                    ],
                })
            );
        }),
        _i = ps(ke),
        yi = r.memo(function ({ animationConfig: t, className: n }) {
            var s;
            const o = ri(),
                { activeComponents: a } = ri(),
                i = xs(),
                l = 100 * o.percentage,
                u = 100 * ((null == (s = o.previous) ? void 0 : s.percentage) ?? 0),
                c = void 0 === o.previous ? l : u,
                [d, h] = Wr(() => ({ width: c }));
            return (
                r.useEffect(() => {
                    i.run(() =>
                        h.start(
                            Wa({
                                baseValue: c,
                                newValue: l,
                                animationType: o.animationType,
                                deltaVisible: a.has('delta'),
                                preViewDeltaVisible: a.has('previewDelta'),
                                animationConfig: t,
                            }),
                        ),
                    );
                }, [h, c, o.animationType, a, l, t, i]),
                e.jsx(_i, {
                    path: `ui.progressbar.bg_pattern_base_filled_${o.size}`,
                    className: T(
                        n,
                        gi.filled,
                        o.status && gi[`filled__${o.status}`],
                        o.progressCompleted && gi.filled__hidden,
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    style: { width: d.width.to((e) => `${e}%`) },
                })
            );
        }),
        wi = r.memo(function ({ classNames: t, className: n, animationConfig: s, ...o }) {
            var a;
            const i = ri(),
                l = li(),
                u = xs(),
                { activeComponents: c } = ri(),
                d = 100 * i.percentage,
                h = 100 * ((null == (a = i.previous) ? void 0 : a.percentage) ?? 0),
                m = void 0 === i.previous ? d : h;
            (si('fill'),
                r.useEffect(() => {
                    'growFreeze' === i.animationType && i.progressCompleted && !i.activeComponents.has('delta') && l();
                }, [i.activeComponents, i.animationType, i.progressCompleted, l]));
            const [f, p] = Wr(() => ({ width: m }));
            return (
                r.useEffect(() => {
                    u.run(() =>
                        p.start({
                            ...Wa({
                                baseValue: m,
                                newValue: d,
                                animationType: i.animationType,
                                deltaVisible: c.has('delta'),
                                preViewDeltaVisible: c.has('previewDelta'),
                                animationConfig: s,
                            }),
                            onStart: () => l(),
                        }),
                    );
                }, [s, p, m, i.animationType, c, d, l, u]),
                e.jsxs('div', {
                    className: T(gi.base, n),
                    children: [
                        e.jsx(ps.div, {
                            className: null == t ? void 0 : t.fill,
                            style: { width: f.width.to((e) => `${e}%`) },
                        }),
                        o.children ??
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(yi, { className: null == t ? void 0 : t.filledPattern, animationConfig: s }),
                                    e.jsx(vi, {
                                        classNames: {
                                            done: null == t ? void 0 : t.done,
                                            doneComplete: null == t ? void 0 : t.doneComplete,
                                        },
                                        animationConfig: s,
                                    }),
                                ],
                            }),
                        e.jsx(ps.div, {
                            className: T(
                                null == t ? void 0 : t.edge,
                                gi.edge,
                                0 === i.percentage && gi.edge__noProgress,
                                !c.has('previewDelta') && !i.progressCompleted && gi.edge__visible,
                                i.status && gi[`edge__${i.status}`],
                            ),
                            style: { left: f.width.to((e) => `${e}%`) },
                        }),
                    ],
                })
            );
        });
    ((wi.Filled = yi), (wi.Done = vi));
    const xi = { above: 'above', below: 'below' },
        Pi = {
            base: 'Indicators_f2e99d31',
            step: 'Indicators_step_a78300f3',
            step__above: 'Indicators_step__above_a95c746e',
            indicator: 'Indicators_indicator_8484a8c7',
            label: 'Indicators_label_f8c7ff1e',
        };
    function ki({ position: t, value: n, children: r, className: s, classNames: o }) {
        const a = ri();
        return e.jsxs('div', {
            className: T(Pi.step, Pi[`step__${t}`], s),
            style: { left: (n / a.maxValue) * 100 + '%' },
            children: [
                t === xi.below && e.jsx('div', { className: T(Pi.indicator, null == o ? void 0 : o.indicator) }),
                void 0 !== r && e.jsx('div', { className: T(Pi.label, null == o ? void 0 : o.label), children: r }),
                t === xi.above && e.jsx('div', { className: T(Pi.indicator, null == o ? void 0 : o.indicator) }),
            ],
        });
    }
    const Ei = Vs('Indicators', Pi.base),
        ji = function (t) {
            const n = ri();
            return (
                si('stepIndicators'),
                e.jsx(Ei, {
                    children:
                        ((r = t.count),
                        (s = (r) => {
                            var s, o, a;
                            const i = (r / (t.count - 1)) * 100,
                                l = n.value >= i && 0 !== n.value;
                            return e.jsx(
                                ki,
                                {
                                    position: t.position,
                                    value: i,
                                    className: T(
                                        null == (s = t.classNames) ? void 0 : s.step,
                                        l && (null == (o = t.classNames) ? void 0 : o.completed),
                                    ),
                                    classNames: null == (a = t.classNames) ? void 0 : a.stepClassNames,
                                    children: t.children ? t.children(r, i, l) : void 0,
                                },
                                r,
                            );
                        }),
                        'function' == typeof s ? de(0, r, s) : (ce(void 0 !== o, 'fn must be defined'), de(r, s, o))),
                })
            );
            var r, s, o;
        };
    ((ji.Step = ki), (ji.positions = xi));
    const Ci = 'PreviewDelta_86b01c3e',
        Si = 'PreviewDelta_negative_1c375892',
        Ri = 'PreviewDelta_positive_be83fc48',
        Ni = 'PreviewDelta_negative__visible_19dda1c5',
        Ai = 'PreviewDelta_positive__visible_19dda1c5',
        Mi = r.forwardRef(function ({ value: t, classNames: n, ...r }, s) {
            const o = ri();
            si('previewDelta');
            const a = t - o.value,
                i = a < 0 ? 'negative' : a > 0 ? 'positive' : 'neutral';
            if ('neutral' === i) return null;
            const l = Math.abs(a) / o.maxValue,
                u = a < 0 ? l : 0,
                c = 100 * (o.percentage - u),
                d = 100 * l;
            return e.jsxs('div', {
                ...r,
                'data-name': 'PreviewDelta',
                ref: s,
                className: T(Ci, r.className),
                children: [
                    e.jsx('div', {
                        style: { left: `${c}%`, width: `${d}%`, ...r.style },
                        className: T(null == n ? void 0 : n.negative, Si, 'negative' === i && Ni),
                    }),
                    e.jsx('div', {
                        style: { left: `${c}%`, width: `${d}%`, ...r.style },
                        className: T(null == n ? void 0 : n.positive, Ri, 'positive' === i && Ai),
                    }),
                ],
            });
        });
    function Ti(t) {
        const [n, s] = r.useState(Math.min(t.value, t.maxValue)),
            [o, a] = r.useState(t.maxValue),
            i = Ee(n),
            l = Ee(o),
            u = r.useRef(new Set()),
            c = _s((e) => s(Math.min(e, t.maxValue))),
            d = _s((e) => u.current.has(e));
        (r.useLayoutEffect(() => {
            c(t.value);
        }, [t.value, c]),
            r.useLayoutEffect(() => {
                a(t.maxValue);
            }, [t.maxValue]));
        const h = _s((e) => {
            var n;
            return null == (n = t.onValueChange) ? void 0 : n.call(t, e);
        });
        r.useEffect(() => {
            h(n);
        }, [h, n]);
        const m = _s((e) => {
            var n;
            return null == (n = t.onMaxValueChange) ? void 0 : n.call(t, e);
        });
        r.useEffect(() => {
            m(o);
        }, [m, o]);
        const f = r.useMemo(() => {
            if (void 0 !== i && void 0 !== l) return { value: i, maxValue: l, percentage: i / l };
        }, [i, l]);
        ce(o > 0, 'ProgressBar: maxValue must be greater than 0');
        const p = r.useMemo(() => {
                const e = n / o == 1 && t.status !== Ja.doneInactive;
                return t.animationType === Za.growFreeze ? e && t.maxValueAchieved : e;
            }, [o, t.animationType, t.maxValueAchieved, t.status, n]),
            g = r.useMemo(
                () => ({
                    value: n,
                    maxValue: o,
                    setValue: c,
                    setMaxValue: a,
                    animationType: t.animationType ?? Za.simple,
                    size: t.size,
                    status: t.status,
                    previous: f,
                    activeComponents: u.current,
                    progressCompleted: p,
                    hasComponent: d,
                    soundTarget: t.soundTarget,
                    silent: t.silent ?? !1,
                    freezeUnlocked: t.maxValueAchieved ?? !1,
                    percentage: n / o,
                }),
                [n, o, c, t.animationType, t.size, t.status, t.soundTarget, t.silent, t.maxValueAchieved, f, p, d],
            );
        return e.jsx(ni.Provider, { value: g, children: t.children });
    }
    const Fi = {
            background: 'ProgressBar_background_b4143753',
            base: 'ProgressBar_27c2305c',
            base__medium: 'ProgressBar_base__medium_97d40af9',
            base__large: 'ProgressBar_base__large_56a06125',
            base__disabled: 'ProgressBar_base__disabled_c8466b10',
            base__done: 'ProgressBar_base__done_dcd0e31a',
            border: 'ProgressBar_border_cc9e47f4',
        },
        Ii = Vs('ProgressBar', Fi.base, { variants: { size: { medium: Fi.base__medium, large: Fi.base__large } } }),
        Oi = function ({ size: t = Ka.medium, backgroundPattern: n, status: r, className: s, classNames: o, ...a }) {
            return e.jsx(Ti, {
                size: t,
                status: r,
                ...a,
                children: e.jsxs(Ii, {
                    size: t,
                    className: T(s, a.value === a.maxValue && r !== Ja.doneInactive && Fi.base__done),
                    children: [
                        e.jsx('div', { className: T(Fi.border, Fi[`border__${t}`], null == o ? void 0 : o.border) }),
                        e.jsx('div', { className: T(Fi.background, null == o ? void 0 : o.background) }),
                        e.jsx(ai, { backgroundPattern: n, className: null == o ? void 0 : o.backgroundPattern }),
                        a.children,
                    ],
                }),
            });
        };
    ((Oi.Fill = wi),
        (Oi.Delta = pi),
        (Oi.PreviewDelta = Mi),
        (Oi.NumberIndicators = ji),
        (Oi.sizes = Ka),
        (Oi.statuses = Ja),
        (Oi.animations = Za));
    const $i = 'ProgressBar_wrapper_a944db13',
        Vi = [Ya, ei],
        Li = r.memo(function ({ progressBar: t, fill: n, delta: r, wrapperSpringProps: s }) {
            const o = Wr({ from: { opacity: 1 }, ...s });
            return e.jsx(Oi, {
                ...t,
                children: e.jsxs(ps.div, {
                    className: $i,
                    style: o,
                    children: [
                        e.jsx(Oi.Fill, { ...n }),
                        void 0 !== r && e.jsx(Oi.Delta, { ...r, steps: (null == r ? void 0 : r.steps) ?? Vi }),
                    ],
                }),
            });
        }),
        Di = F.cubicBezier(0.33, 0, 0.25, 1),
        zi = i.observer(function () {
            const {
                    state: t,
                    handleState: n,
                    progressWrapperRef: s,
                    immediateAnimation: o,
                    stepValues: { progressBarValue: a, progressBarMaxValue: i, deltaFrom: l },
                } = ua(),
                { model: u } = ea(),
                c = u.computes.isNextLevel(),
                d = u.computes.maxLevelReached(),
                h = r.useMemo(() => {
                    const e = (c && t === sa) || o;
                    return {
                        progress: {
                            value: a,
                            silent: o,
                            animationType: c ? Za.simple : Za.grow,
                            status: Ja.doneInactive,
                            maxValue: i,
                            className: Ta.progressBar,
                            maxValueAchieved: a === i,
                        },
                        delta: o
                            ? void 0
                            : {
                                  from: l,
                                  steps: c ? [ei] : [Ya, ei],
                                  growAnimationConfig: { duration: e ? 0 : 600, easing: Di },
                                  shrinkAnimationConfig: { duration: e ? 0 : 600, easing: Di },
                                  onState: (e) => {
                                      if (e === ti) {
                                          if (t === oa) return void n(aa);
                                          if (t === na) return d ? void n(ia) : c ? void n(ra) : void 0;
                                      }
                                  },
                              },
                        fill: { animationConfig: { duration: c ? 0 : 600, easing: Di } },
                        wrapper: { ref: s },
                    };
                }, [t, c, o, d, a, l, i, n, s]);
            return e.jsx(Li, { wrapperSpringProps: h.wrapper, progressBar: h.progress, delta: h.delta, fill: h.fill });
        });
    function Bi() {
        const { stepValues: t, immediateAnimation: n, receivedValueRef: r } = ua();
        return e.jsx(xa.AnimatedReceivedValue, {
            total: t.totalLabel,
            value: E.formatNumber('integral', t.deltaPoints),
            transition: { immediate: n, ref: r, initial: { opacity: 0, y: '-5rem' } },
        });
    }
    const qi = p.resolve('strings');
    function Ui() {
        return e.jsxs(xa, {
            className: Ta.progressStats,
            children: [
                e.jsx(Ia, {}),
                e.jsx(zi, {}),
                e.jsxs('div', { className: Ta.numberStats, children: [e.jsx(Ha, {}), e.jsx(Bi, {})] }),
            ],
        });
    }
    function Xi() {
        const { stepValues: t, progressStatsLabelRef: n, immediateAnimation: r, maxLevelReachedMarkRef: s } = ua();
        return e.jsx(xa, {
            className: Ta.progressStats,
            children: e.jsxs('div', {
                className: T(Ta.label, Ta.label__zeroIndent),
                children: [
                    e.jsx(xa.AnimatedLabel, {
                        transitionProps: { immediate: r, ref: n },
                        text: qi.readOrEmpty(t.labelPathKey),
                    }),
                    e.jsx(pa, {
                        animationRef: s,
                        className: Ta.completedMark,
                        classNames: { icon: Ta.completedMarkIcon },
                        springProps: { immediate: r },
                    }),
                ],
            }),
        });
    }
    const Hi = i.observer(function () {
            const { contentRef: t, state: n, immediateAnimation: r } = ua(),
                { model: s } = ea(),
                o = s.computes.maxLevelReached();
            return e.jsxs('div', {
                className: Ta.content,
                children: [
                    e.jsx(Oo, {
                        value: n === ia || Boolean(o && r),
                        className: Ta.animatedContent,
                        transition: { immediate: r, ref: t, from: { y: '-10rem' }, leave: { y: '10rem' } },
                        children: (t) => (t ? e.jsx(Xi, {}) : e.jsx(Ui, {})),
                    }),
                    e.jsx(Ma, {}),
                ],
            });
        }),
        Wi = 'mission-progress:elite-system:random-card',
        Qi = p.resolve('strings'),
        Gi = { rootId: p.resolve('aliases').read((e) => e.battle_results.progression.Prestige('resId')) },
        Zi = i.observer(function () {
            const { model: t, controls: n } = ea(),
                r = As(),
                s = t.isNavigationEnabled.get(),
                o = t.vehCD.get(),
                a = js({ body: Qi.readOrEmpty('battle_results.progression.progressUnavailable') });
            return e.jsx(qo, {
                ...(!1 === s && a),
                disabled: !1 === s,
                title: E.toUpperCase(Qi.readOrEmpty('battle_results.prestige.title')),
                onButtonAction: () => {
                    s && n.navigate(o);
                },
                onClick: function (e) {
                    s && (r.play('click', { target: Wi, original: e }), n.navigate(o));
                },
                actionTooltipParams: { body: Qi.readOrEmpty('tooltips.quests.prestigeProgress.linkBtn') },
                onMouseEnter: (e) => {
                    s ? r.play('mouse-enter', { target: Wi, original: e }) : a.onMouseEnter(e);
                },
                children: e.jsx(Hi, {}),
            });
        });
    function Ki(t) {
        return e.jsx(Yo, {
            options: Gi,
            children: e.jsx(Zo, {
                soundsOverrides:
                    ((n = Uo),
                    Object.entries(n).reduce(
                        (e, [t, n]) => (
                            (e[t] = (e) => {
                                var r;
                                e && e.target in n ? B.sound(n[e.target]) : null == (r = Cs[t]) || r.call(Cs, e);
                            }),
                            e
                        ),
                        {},
                    )),
                children: e.jsx(ca, {
                    visible: t.animation,
                    immediateAnimation: t.immediateAnimation,
                    children: e.jsx(Zi, {}),
                }),
            }),
        });
        var n;
    }
    var Ji;
    exports.plugin =
        ((Ji = async ({ url: t }) => {
            const n = new ae();
            return {
                async init() {
                    var r,
                        s,
                        o,
                        a,
                        i,
                        l = [];
                    try {
                        const u = Qo(
                            `${(function (e, t = '/') {
                                let n = -1;
                                for (let r = 0; r < e.length; r++) {
                                    const s = e[r];
                                    if ((s === t && (n = r), '.' === s)) return e.slice(0, n);
                                }
                                return e;
                            })(t)}/elite_system.css`,
                        );
                        (n.add(u.cleanup), await u.promise.catch(console.error));
                        const h = Y(Gi, { name: 'EliteSystemProgressDataLayer' }),
                            m =
                                ((r = l),
                                (i = h.dispose),
                                null != (s = { [Symbol.dispose]: i })
                                    ? ('object' != typeof s && 'function' != typeof s && d('Object expected'),
                                      o && (a = s[c('asyncDispose')]),
                                      void 0 === a && (a = s[c('dispose')]),
                                      'function' != typeof a && d('Object not disposable'),
                                      r.push([o, a, s]))
                                    : o && r.push([o]),
                                h.readByPath('gainedXP')),
                            f = h.readByPath('oldXP'),
                            p = h.readByPath('oldNextLvlXP'),
                            g = h.readByPath('currentPrestigeEmblemModel').type === Xo.MAXIMUM,
                            b = f + m > p,
                            v = [];
                        return (
                            g
                                ? v.push({
                                      id: ye(),
                                      item: e.jsx(No, {
                                          path: 'battle_results.missionsProgress.notificationsTabs.eliteSystem.maxLevel',
                                      }),
                                  })
                                : b &&
                                  v.push({
                                      id: ye(),
                                      item: e.jsx(No, {
                                          path: 'battle_results.missionsProgress.notificationsTabs.eliteSystem.newLevel',
                                      }),
                                  }),
                            {
                                animated: !0,
                                notifications: v,
                                component: Ki,
                                categoryOrder: b ? 6e5 : 600,
                                completed: b,
                            }
                        );
                    } catch (m) {
                        var u = m,
                            h = !0;
                    } finally {
                        ((e, t, n) => {
                            var r =
                                    'function' == typeof SuppressedError
                                        ? SuppressedError
                                        : function (e, t, n, r) {
                                              return (
                                                  ((r = Error(n)).name = 'SuppressedError'),
                                                  (r.error = e),
                                                  (r.suppressed = t),
                                                  r
                                              );
                                          },
                                s = (e) =>
                                    (t = n ? new r(e, t, 'An error was suppressed during disposal') : ((n = !0), e)),
                                o = (r) => {
                                    for (; (r = e.pop()); )
                                        try {
                                            var a = r[1] && r[1].call(r[2]);
                                            if (r[0]) return Promise.resolve(a).then(o, (e) => (s(e), o()));
                                        } catch (i) {
                                            s(i);
                                        }
                                    if (n) throw t;
                                };
                            o();
                        })(l, u, h);
                    }
                },
                async destroy() {
                    n.dispose();
                },
            };
        }),
        async (e) => ({ ...(await Ji(e)), id: e.id }));
});

export default exports;
