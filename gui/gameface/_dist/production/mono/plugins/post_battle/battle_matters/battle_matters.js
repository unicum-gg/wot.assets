const exports = {};
!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              require('react/jsx-runtime'),
              require('awilix'),
              require('mobx'),
              require('react'),
              require('react-dom'),
              require('mobx-utils'),
              require('@wg/media_wrapper'),
              require('mobx-react-lite'),
          )
        : 'function' == typeof define && define.amd
          ? define(
                [
                    'react/jsx-runtime',
                    'awilix',
                    'mobx',
                    'react',
                    'react-dom',
                    'mobx-utils',
                    '@wg/media_wrapper',
                    'mobx-react-lite',
                ],
                t,
            )
          : t(
                (e = 'undefined' != typeof globalThis ? globalThis : e || self).module_externals.jsxRuntime,
                e.module_externals.awilix,
                e.module_externals.mobx,
                e.module_externals.React,
                e.module_externals.ReactDOM,
                e.module_externals.mobxUtils,
                e.module_externals.wg.mediaWrapper,
                e.module_externals.mobxReactLite,
            );
})(this, function (e, t, n, s, r, o, a, i) {
    'use strict';
    var l,
        u = Object.defineProperty,
        c = (e, t) => ((t = Symbol[e]) ? t : Symbol.for('Symbol.' + e)),
        d = (e) => {
            throw TypeError(e);
        },
        m = (e, t, n) =>
            ((e, t, n) =>
                t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n))(
                e,
                'symbol' != typeof t ? t + '' : t,
                n,
            );
    function p(e) {
        const t = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
        if (e)
            for (const n in e)
                if ('default' !== n) {
                    const s = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, s.get ? s : { enumerable: !0, get: () => e[n] });
                }
        return ((t.default = e), Object.freeze(t));
    }
    const f = p(s),
        h = t.createContainer();
    function g(e, t) {
        return e && e.length > 0 ? `${e}.${t}` : t;
    }
    function _(e, t) {
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
    class b {
        constructor(e = window.R.images, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, n = 'silent') {
            const s = e.startsWith('R.images') ? e : g(this.prefix, e),
                r = (function (e, t) {
                    const n = t.split('.');
                    if (window.R && window.R.images) {
                        const t = n[n.length - 1];
                        if (!t) return;
                        const s = n.slice(0, -1).reduce((e, t) => {
                            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
                        }, e);
                        if (!s) return;
                        return 'function' == typeof s[t] ? s[t]() : void 0;
                    }
                    throw new Error('R class with images field is not defined');
                })(e.startsWith('R.images') ? window : this.root, s);
            return void 0 === r ? ('silent' !== n && _(`Resource not found: ${s}`, n), t()) : r;
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
    var v = ((e) => (
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
    ))(v || {});
    const y = { integral: 0, gold: 1 },
        w = { fractional: 0, woZeroDigits: 1 },
        x = Object.keys(y),
        E = Object.keys(w);
    const C = { full: v.FullTime, short: v.ShortTime };
    const P = {
        isNumberFormat: function (e) {
            return e in y;
        },
        formatNumber: function (e, t) {
            return window.systemLocale.getNumberFormat(t, y[e]);
        },
        numberFormats: x,
        isRealFormat: function (e) {
            return e in w;
        },
        formatReal: function (e, t) {
            return window.systemLocale.getRealFormat(t, w[e]);
        },
        realFormats: E,
        formatDateTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(t, e, n);
        },
        dateTimeFormats: v,
        formatTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(t, e, n);
        },
        timeFormats: Object.keys(C),
        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
    };
    function S(e, t, n) {
        const s = e.split('.');
        if (window.R && window.R.strings) {
            const e = s[s.length - 1];
            if (!e) return;
            const r = s.slice(0, -1).reduce((e, t) => {
                if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
            }, n);
            if (!r) return;
            return 'function' == typeof r[e] ? (t ? r[e](t) : r[e]()) : void 0;
        }
        throw new Error('R class with strings field is not defined');
    }
    class T {
        constructor(e = window.R.strings, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, n = 'silent') {
            const s = e.startsWith('R.strings') ? e : g(this.prefix, e),
                r = S(s, void 0, e.startsWith('R.strings') ? window : this.root);
            return void 0 === r ? ('silent' !== n && _(`Resource not found: ${s}`, n), t()) : r;
        }
        readOrEmpty(e, t = 'warn') {
            return this.readOr(e, () => '', t);
        }
        readOrThrow(e) {
            const t = e.startsWith('R.strings') ? e : g(this.prefix, e),
                n = S(t, void 0, e.startsWith('R.strings') ? window : this.root);
            if (void 0 === n) throw new Error(`Resource not found: ${t}`);
            return n;
        }
        plural(e, t) {
            return this.pluralOr(e, t, () => {});
        }
        pluralOr(e, t, n, s = 'silent') {
            const r = e.startsWith('R.strings') ? e : g(this.prefix, e),
                o = S(r, t, e.startsWith('R.strings') ? window : this.root);
            return void 0 === o ? ('silent' !== s && _(`Resource not found: ${r}`, s), n()) : o;
        }
        pluralOrEmpty(e, t, n = 'warn') {
            return this.pluralOr(e, t, () => '', n);
        }
    }
    class k {
        constructor(e = window.R.videos, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, n = 'silent') {
            const s = e.startsWith('R.videos') ? e : g(this.prefix, e),
                r = (function (e, t) {
                    const n = t.split('.');
                    if (window.R && window.R.videos) {
                        const t = n[n.length - 1];
                        if (!t) return;
                        const s = n.slice(0, -1).reduce((e, t) => {
                            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
                        }, e);
                        if (!s) return;
                        return 'function' == typeof s[t] ? s[t]() : void 0;
                    }
                    throw new Error('R class with videos field is not defined');
                })(e.startsWith('R.videos') ? window : this.root, s);
            return void 0 === r ? ('silent' !== n && _(`Resource not found: ${e}`, n), t()) : r;
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
    h.register({
        strings: t.asFunction(() => new T()).singleton(),
        images: t.asFunction(() => new b(window.R.images.gui.maps.icons)).singleton(),
        atlases: t.asFunction(() => new b(window.R.atlases)).singleton(),
        videos: t.asFunction(() => new k(window.R.videos)).singleton(),
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
                            : _(`Sound not found: ${e}`, 'warn');
                    }
                },
            )
            .singleton(),
        langCode: t.asValue(R.strings.settings.LANGUAGE_CODE()),
        intl: t.asValue(P),
    });
    var A,
        I = { exports: {} };
    /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */ ((A = I),
        (function () {
            var e = {}.hasOwnProperty;
            function t() {
                for (var n = [], s = 0; s < arguments.length; s++) {
                    var r = arguments[s];
                    if (r) {
                        var o = typeof r;
                        if ('string' === o || 'number' === o) n.push(r);
                        else if (Array.isArray(r)) {
                            if (r.length) {
                                var a = t.apply(null, r);
                                a && n.push(a);
                            }
                        } else if ('object' === o) {
                            if (
                                r.toString !== Object.prototype.toString &&
                                !r.toString.toString().includes('[native code]')
                            ) {
                                n.push(r.toString());
                                continue;
                            }
                            for (var i in r) e.call(r, i) && r[i] && n.push(i);
                        }
                    }
                }
                return n.join(' ');
            }
            A.exports ? ((t.default = t), (A.exports = t)) : (window.classNames = t);
        })());
    const M = N(I.exports),
        j = {
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
            reverseEaseInOutCirc: (e) => 1 - j.easeInOutCirc(1 - e),
            easeOutBack(e) {
                const t = 1.70158;
                return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
            },
            bezier: (e, t, n, s) => (r) =>
                (1 - r) * (1 - r) * (1 - r) * e +
                3 * (1 - r) * (1 - r) * r * t +
                3 * (1 - r) * r * r * n +
                r * r * r * s,
            cubicBezier: (e, t, n, s) => (r) => {
                const o = (function (e, t, n, s = 1e-5) {
                    let r = e;
                    for (let o = 0; o < 8; o++) {
                        const o = D(r, t, n) - e;
                        if (Math.abs(o) < s) return r;
                        const a = O(r, t, n);
                        if (Math.abs(a) < s) break;
                        r -= o / a;
                    }
                    return r;
                })(r, e, n);
                return 3 * t * (1 - o) ** 2 * o + 3 * s * (1 - o) * o ** 2 + o ** 3;
            },
        };
    function D(e, t, n) {
        return 3 * t * (1 - e) ** 2 * e + 3 * n * (1 - e) * e ** 2 + e ** 3;
    }
    function O(e, t, n) {
        return 9 * t * (1 - e) ** 2 + 6 * (n - t) * (1 - e) * e + 3 * (1 - n) * e ** 2;
    }
    function B(e) {
        return e
            ? (function (e) {
                  return window.systemLocale.toUpperCase(e);
              })(e.charAt(0)) + e.slice(1)
            : '';
    }
    function F(e) {
        return (t) => (
            engine.on(e, t),
            () => {
                engine.off(e, t);
            }
        );
    }
    function $(e) {
        viewEnv.setTrackMouseOnStage(e);
    }
    const L = { down: F('mousedown'), up: F('mouseup'), move: F('mousemove') };
    function U(e) {
        engine.call('PlaySound', e);
    }
    !(function () {
        const e = { listeners: 0, enabled: !0, initialized: !1 };
        function t() {
            e.enabled && $(!1);
        }
        function n() {
            e.enabled && $(!0);
        }
        function s() {
            e.enabled
                ? e.listeners < 1
                    ? ((e.initialized = !1),
                      document.body.removeEventListener('mouseenter', t),
                      document.body.removeEventListener('mouseleave', n),
                      $(!1))
                    : e.initialized ||
                      ((e.initialized = !0),
                      document.body.addEventListener('mouseenter', t),
                      document.body.addEventListener('mouseleave', n))
                : $(!1);
        }
        ['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const r = `mouse${t}`,
                            o = L[t]((e) => n([e, 'outside']));
                        function a(e) {
                            n([e, 'inside']);
                        }
                        return (
                            window.addEventListener(r, a),
                            s(),
                            () => {
                                (o(), window.removeEventListener(r, a), (e.listeners -= 1), s());
                            }
                        );
                    };
                })(n)),
                t
            ),
            {},
        );
    })();
    const q = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
        z = { ...Object.keys(q).reduce((e, t) => ((e[t] = () => U(q[t])), e), {}), sound: U },
        V = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
        G = {
            onTextureFrozen: F('self.onTextureFrozen'),
            onTextureReady: F('self.onTextureReady'),
            onDomBuilt: F('self.onDomBuilt'),
            onLoaded: F('self.onLoaded'),
            onHitTest: (() => {
                const e = new Set(),
                    t = (t, n) => {
                        for (const s of e.values())
                            if (s(t)) {
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
            onDisplayChanged: F('self.onShowingStatusChanged'),
            onFocusUpdated: F('self.onFocusChanged'),
            children: {
                onAdded: F('children.onAdded'),
                onLoaded: F('children.onLoaded'),
                onRemoved: F('children.onRemoved'),
                onAttached: F('children.onAttached'),
                onTextureReady: F('children.onTextureReady'),
                onRequestPosition: F('children.requestPosition'),
            },
        },
        Q = 1;
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
            for (const [n, s] of Object.entries(e)) {
                const e = H(s);
                void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
            }
            return t;
        },
        X = (e, t) => {
            const n = 'GFViewEventProxy';
            if (void 0 !== t) {
                const { args: s, ...r } = t;
                return void 0 !== s
                    ? viewEnv.handleViewEvent({ __Type: n, type: e, ...r, arguments: W(s) })
                    : viewEnv.handleViewEvent({ __Type: n, type: e, ...r });
            }
            return viewEnv.handleViewEvent({ __Type: n, type: e });
        },
        Y = new Map(),
        Z = {
            tooltip: {
                open(e, t, n = 0, s) {
                    (X(Q, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: s }),
                        Y.set(`${e}-${t}`, { targetID: e, contentID: t }));
                },
                hide(e, t, n = 0) {
                    (X(Q, { contentID: t, decoratorID: n, targetID: e, on: !1 }), Y.delete(`${e}-${t}`));
                },
                hideAll() {
                    const e = Array.from(Y.values());
                    for (const t of e) this.hide(t.targetID, t.contentID);
                },
            },
        };
    Object.keys(V).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === V[t]), e), {});
    class K {
        constructor() {
            m(this, 'listeners', new Set());
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
    function ee(
        { initializer: e = !0, rootId: t = 0, getRoot: n = J, context: s = 'model' } = {},
        { name: r = 'DataLayer' } = {},
    ) {
        const o = new Map(),
            a = { subscribersNotified: new K() },
            i = engine.whenReady.then(() => {
                function e(e, t, n) {
                    (n.forEach((n) => {
                        const s = o.get(n);
                        void 0 !== s && s(e, t);
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
                return s.split('.').reduce((e, t) => e[t], e);
            } catch (e) {
                throw new Error(`Failure get root of ${r}. Root id: ${t}. Context: ${s}`);
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
                throw new Error(`Failure readByPath in ${r}. Root id: ${t}. Context: ${s}:\n${o}\n`);
            }
        };
        function c(e) {
            viewEnv.removeDataChangedCallback(e, t) ? o.delete(e) : console.error("Can't remove callback by id:", e);
        }
        return {
            subscribe: (n, r) => {
                const a = (function (e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                })('string' == typeof r ? `${s}.${r}` : s, t, !0);
                return (o.set(a, n), e && n(u(r), []), a);
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
    function te(e, t) {
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
    function ne() {}
    function se(e) {
        return e;
    }
    function re() {
        return !1;
    }
    function oe() {
        throw new Error('Unreachable absurd brach');
    }
    class ae {
        constructor() {
            (m(this, '_disposes', new Set()),
                m(this, 'dispose', () => {
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
    function ie(e, t, n, s) {
        return (e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s));
    }
    ('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
        'symbol' != typeof Symbol.asyncDispose &&
            Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
        (function () {
            if (!self.fetch) {
                ((a.prototype.append = function (e, t) {
                    ((e = r(e)), (t = o(t)));
                    var n = this.map[e];
                    (n || ((n = []), (this.map[e] = n)), n.push(t));
                }),
                    (a.prototype.delete = function (e) {
                        delete this.map[r(e)];
                    }),
                    (a.prototype.get = function (e) {
                        var t = this.map[r(e)];
                        return t ? t[0] : null;
                    }),
                    (a.prototype.getAll = function (e) {
                        return this.map[r(e)] || [];
                    }),
                    (a.prototype.has = function (e) {
                        return this.map.hasOwnProperty(r(e));
                    }),
                    (a.prototype.set = function (e, t) {
                        this.map[r(e)] = [o(t)];
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
                    s = !(
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
                        var r;
                        return (
                            (r = d.prototype.isPrototypeOf(t) && !n ? t : new d(t, n)),
                            new fetch.Promise(function (t, n) {
                                var o = (function () {
                                    return s && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                        ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                        : new XMLHttpRequest();
                                })();
                                function a() {
                                    if (4 === o.readyState) {
                                        var e = 1223 === o.status ? 204 : o.status;
                                        if (e < 100 || e > 599) n(new TypeError('Network request failed'));
                                        else {
                                            var s = {
                                                    status: e,
                                                    statusText: o.statusText,
                                                    headers: p(o),
                                                    url:
                                                        'responseURL' in o
                                                            ? o.responseURL
                                                            : /^X-Request-URL:/m.test(o.getAllResponseHeaders())
                                                              ? o.getResponseHeader('X-Request-URL')
                                                              : void 0,
                                                },
                                                r = 'response' in o ? o.response : o.responseText;
                                            t(new f(r, s));
                                        }
                                    }
                                }
                                ('cors' === r.credentials && (o.withCredentials = !0),
                                    (o.onreadystatechange = a),
                                    self.usingActiveXhr ||
                                        ((o.onload = a),
                                        (o.onerror = function () {
                                            n(new TypeError('Network request failed'));
                                        })),
                                    o.open(r.method, r.url, !0),
                                    'responseType' in o && e && (o.responseType = 'blob'),
                                    r.headers.forEach(function (e, t) {
                                        t.forEach(function (t) {
                                            o.setRequestHeader(e, t);
                                        });
                                    }),
                                    o.send(void 0 === r._bodyInit ? null : r._bodyInit));
                            })
                        );
                    }),
                    (fetch.Promise = self.Promise),
                    (self.fetch.polyfill = !0));
            }
            function r(e) {
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
                            return this.text().then(m);
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
                var s, r;
                if (
                    ((t = t || {}),
                    (this.url = e),
                    (this.credentials = t.credentials || 'omit'),
                    (this.headers = new a(t.headers)),
                    (this.method = ((s = t.method || 'GET'), (r = s.toUpperCase()), n.indexOf(r) > -1 ? r : s)),
                    (this.mode = t.mode || null),
                    (this.referrer = null),
                    ('GET' === this.method || 'HEAD' === this.method) && t.body)
                )
                    throw new TypeError('Body not allowed for GET or HEAD requests');
                this._initBody(t.body);
            }
            function m(e) {
                var t = new FormData();
                return (
                    e
                        .trim()
                        .split('&')
                        .forEach(function (e) {
                            if (e) {
                                var n = e.split('='),
                                    s = n.shift().replace(/\+/g, ' '),
                                    r = n.join('=').replace(/\+/g, ' ');
                                t.append(decodeURIComponent(s), decodeURIComponent(r));
                            }
                        }),
                    t
                );
            }
            function p(e) {
                var t = new a();
                return (
                    e
                        .getAllResponseHeaders()
                        .trim()
                        .split('\n')
                        .forEach(function (e) {
                            var n = e.trim().split(':'),
                                s = n.shift().trim(),
                                r = n.join(':').trim();
                            t.append(s, r);
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
    const ce = function (e, t) {
        var n;
        if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
    };
    function de(e, t) {
        return Array.isArray(e) ? e.map(t) : e.map((e, n, s) => t(null == e ? void 0 : e.value, n, s));
    }
    function me(e, t, n) {
        const s = [];
        for (let r = 0; r < e.length; r++) {
            const o = ce(e, r);
            t(o, r, e) && s.push(n(o, r, e));
        }
        return s;
    }
    const pe = (e) => {
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
    };
    function fe(e, t) {
        e || console.error(t || 'Assertion failed');
    }
    function he(e, t, n) {
        return 'function' == typeof t ? ge(0, e, t) : (fe(void 0 !== n, 'fn must be defined'), ge(e, t, n));
    }
    function ge(e, t, n) {
        const s = new Array(t - e);
        for (let r = e; r < t; r++) s[r] = n(r);
        return s;
    }
    fe.log = function (e, t) {
        e || console.error(t || 'Assertion failed');
    };
    function _e(e) {
        const t = [],
            n = e
                .replace(/&nbsp;/g, ' ')
                .replace(/ /g, ' ')
                .matchAll(/[(（《「]*["'][^'"]*["'][。，:;：；—！!？?》」•%)、]*|.*?(?=[(（《「]*["'])|.*/gsu);
        for (const [s] of n) {
            const e = s.matchAll(
                /[(（《「“‘'"]*[\u4E00-\u9FFF\u3400-\u4DBF%][。，:;：；—！!？?》」•%)、’”'"]*|[(（《「“‘'"]*[a-zA-Z0-9-.,]+[。，:;：；—！!？?》」•%)、’”'"]*|\xa0|[^\u4E00-\u9FFF\u3400-\u4DBF\s]/gu,
            );
            for (const [n] of e) t.push(n);
        }
        return t;
    }
    ['ko', 'no'].includes(h.resolve('langCode'));
    const be = {
        zh_cn: _e,
        zh_sg: _e,
        zh_tw: _e,
        ja: function (e) {
            const t = [],
                n = e
                    .replace(/&nbsp;/g, ' ')
                    .matchAll(
                        /[【「(（『《]?[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF%](?:[。!?、…・ー—–!%?）)】」》』]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\u3040-\u30FF/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|\u00A0|[^\s]/gu,
                    );
            for (const [s] of n) t.push(s);
            return t;
        },
        ko: function (e) {
            const t = [],
                n = e
                    .replace(/&nbsp;/g, ' ')
                    .matchAll(
                        /\s+|\u00A0|[【「(（『《]?[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F%](?:[。!?、…・ー—–!%?）)】」》『]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|[^\s]/gu,
                    );
            for (const [s] of n) t.push(s);
            return t;
        },
    };
    function ve(e) {
        return e.split(' ');
    }
    const ye = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko']);
    function we() {
        return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    }
    var xe = ((e) => ((e.Done = 'done'), (e.InProgress = 'inProgress'), (e.Unavailable = 'unavailable'), e))(xe || {});
    function Re(e) {
        for (let t = 0; t < document.styleSheets.length; t++) {
            const n = document.styleSheets.item(t);
            if (n.ownerNode === e) return n;
        }
    }
    function Ee(e) {
        for (let t = 0; t < e.cssRules.length; t++) e.deleteRule(t);
    }
    function Ce(e) {
        const [t, n] = (function (e) {
                const t = `css-plugin-${e.replaceAll('/', '_').replaceAll(':', '').replaceAll('.', '_')}`,
                    n = document.querySelector(`#${t}`);
                if (n instanceof HTMLLinkElement) return [n, !1];
                const s = document.createElement('link');
                return (
                    (s.crossOrigin = 'anonymous'),
                    (s.href = e),
                    (s.rel = 'stylesheet'),
                    (s.id = t),
                    document.head.appendChild(s),
                    [s, !0]
                );
            })(e),
            s = (function () {
                let e = oe,
                    t = oe;
                const n = new Promise((n, s) => {
                    ((t = n), (e = s));
                });
                return {
                    then: n.then.bind(n),
                    catch: n.catch.bind(n),
                    finally: n.finally.bind(n),
                    reject: e,
                    resolve: t,
                };
            })(),
            r = document.createElement('style');
        document.body.appendChild(r);
        const o = new ae();
        return (
            n
                ? o.add(
                      ie(t, 'load', () => {
                          s.resolve(t);
                      }),
                  )
                : le(e)
                      .then((e) => e.text())
                      .then((e) => {
                          const n = Re(t);
                          if (!n) throw new Error(`Can't find sheets for ${t}`);
                          (Ee(n),
                              (function (e, t) {
                                  const n = (function (e) {
                                      const t = [];
                                      let n = 0,
                                          s = 0,
                                          r = !1,
                                          o = !1;
                                      for (let a = 0; a < e.length; a++) {
                                          const i = e[a],
                                              l = e[a + 1];
                                          if (o || '/' !== i || '*' !== l) {
                                              if (r && '*' === i && '/' === l) ((r = !1), a++, (n = a + 1));
                                              else if (
                                                  !r &&
                                                  (o || '@' !== i || ((o = !0), (s = 0)),
                                                  '{' === i && s++,
                                                  '}' === i && s--,
                                                  '}' === i && 0 === s)
                                              ) {
                                                  if (o) (t.push(e.substring(n, a + 1)), (o = !1));
                                                  else {
                                                      let s = n;
                                                      for (; '\n' === e[s] || ' ' === e[s]; ) s++;
                                                      t.push(e.substring(s, a + 1));
                                                  }
                                                  n = a + 1;
                                              }
                                          } else ((r = !0), a++);
                                      }
                                      return t.filter((e) => {
                                          const t = e.trim();
                                          return '' !== t && !t.startsWith('/*');
                                      });
                                  })(e);
                                  for (const s of n) t.insertRule(s, t.cssRules.length);
                              })(e, n),
                              s.resolve(t));
                      })
                      .catch(s.reject),
            o
                .add(
                    ie(t, 'error', (t) => {
                        (console.error(t), s.reject(`Load css failure ${e}`));
                    }),
                )
                .add(() => {
                    !(function (e, t) {
                        const n = Re(t);
                        if (!n) return console.error(`Can't find sheets for ${t.id} (${e}). Clean rules skipped.`);
                        Ee(n);
                    })(e, t);
                }),
            { promise: s, link: t, cleanup: o.dispose }
        );
    }
    const Pe = (e) => {
            const t = s.useRef();
            return (
                s.useEffect(() => {
                    t.current = e;
                }, [e]),
                t.current
            );
        },
        Se = [];
    function Te(e) {
        const t = s.useRef(e);
        return (
            s.useLayoutEffect(() => {
                t.current = e;
            }),
            s.useCallback((...e) => (0, t.current)(...e), Se)
        );
    }
    function ke(e) {
        s.useEffect(() => e, []);
    }
    s.createContext(void 0);
    var Ne = Qe(),
        Ae = (e) => qe(e, Ne),
        Ie = Qe();
    Ae.write = (e) => qe(e, Ie);
    var Me = Qe();
    Ae.onStart = (e) => qe(e, Me);
    var je = Qe();
    Ae.onFrame = (e) => qe(e, je);
    var De = Qe();
    Ae.onFinish = (e) => qe(e, De);
    var Oe = [];
    Ae.setTimeout = (e, t) => {
        const n = Ae.now() + t,
            s = () => {
                const e = Oe.findIndex((e) => e.cancel == s);
                (~e && Oe.splice(e, 1), (Le -= ~e ? 1 : 0));
            },
            r = { time: n, handler: e, cancel: s };
        return (Oe.splice(Be(n), 0, r), (Le += 1), ze(), r);
    };
    var Be = (e) => ~(~Oe.findIndex((t) => t.time > e) || ~Oe.length);
    ((Ae.cancel = (e) => {
        (Me.delete(e), je.delete(e), De.delete(e), Ne.delete(e), Ie.delete(e));
    }),
        (Ae.sync = (e) => {
            ((Ue = !0), Ae.batchedUpdates(e), (Ue = !1));
        }),
        (Ae.throttle = (e) => {
            let t;
            function n() {
                try {
                    e(...t);
                } finally {
                    t = null;
                }
            }
            function s(...e) {
                ((t = e), Ae.onStart(n));
            }
            return (
                (s.handler = e),
                (s.cancel = () => {
                    (Me.delete(n), (t = null));
                }),
                s
            );
        }));
    var Fe = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
    ((Ae.use = (e) => (Fe = e)),
        (Ae.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
        (Ae.batchedUpdates = (e) => e()),
        (Ae.catch = console.error),
        (Ae.frameLoop = 'always'),
        (Ae.advance = () => {
            'demand' !== Ae.frameLoop
                ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
                : Ge();
        }));
    var $e = -1,
        Le = 0,
        Ue = !1;
    function qe(e, t) {
        Ue ? (t.delete(e), e(0)) : (t.add(e), ze());
    }
    function ze() {
        $e < 0 && (($e = 0), 'demand' !== Ae.frameLoop && Fe(Ve));
    }
    function Ve() {
        ~$e && (Fe(Ve), Ae.batchedUpdates(Ge));
    }
    function Ge() {
        const e = $e;
        $e = Ae.now();
        const t = Be($e);
        (t && (He(Oe.splice(0, t), (e) => e.handler()), (Le -= t)),
            Le
                ? (Me.flush(), Ne.flush(e ? Math.min(64, $e - e) : 16.667), je.flush(), Ie.flush(), De.flush())
                : ($e = -1));
    }
    function Qe() {
        let e = new Set(),
            t = e;
        return {
            add(n) {
                ((Le += t != e || e.has(n) ? 0 : 1), e.add(n));
            },
            delete: (n) => ((Le -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
            flush(n) {
                t.size && ((e = new Set()), (Le -= t.size), He(t, (t) => t(n) && e.add(t)), (Le += e.size), (t = e));
            },
        };
    }
    function He(e, t) {
        e.forEach((e) => {
            try {
                t(e);
            } catch (n) {
                Ae.catch(n);
            }
        });
    }
    var We = Object.defineProperty,
        Xe = {};
    function Ye() {}
    ((e, t) => {
        for (var n in t) We(e, n, { get: t[n], enumerable: !0 });
    })(Xe, {
        assign: () => ct,
        colors: () => it,
        createStringInterpolator: () => st,
        skipAnimation: () => lt,
        to: () => rt,
        willAdvance: () => ut,
    });
    var Ze = {
        arr: Array.isArray,
        obj: (e) => !!e && 'Object' === e.constructor.name,
        fun: (e) => 'function' == typeof e,
        str: (e) => 'string' == typeof e,
        num: (e) => 'number' == typeof e,
        und: (e) => void 0 === e,
    };
    function Ke(e, t) {
        if (Ze.arr(e)) {
            if (!Ze.arr(t) || e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
        }
        return e === t;
    }
    var Je = (e, t) => e.forEach(t);
    function et(e, t, n) {
        if (Ze.arr(e)) for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s);
    }
    var tt = (e) => (Ze.und(e) ? [] : Ze.arr(e) ? e : [e]);
    function nt(e, t) {
        if (e.size) {
            const n = Array.from(e);
            (e.clear(), Je(n, t));
        }
    }
    var st,
        rt,
        ot = (e, ...t) => nt(e, (e) => e(...t)),
        at = () =>
            'undefined' == typeof window ||
            !window.navigator ||
            /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        it = null,
        lt = !1,
        ut = Ye,
        ct = (e) => {
            (e.to && (rt = e.to),
                e.now && (Ae.now = e.now),
                void 0 !== e.colors && (it = e.colors),
                null != e.skipAnimation && (lt = e.skipAnimation),
                e.createStringInterpolator && (st = e.createStringInterpolator),
                e.requestAnimationFrame && Ae.use(e.requestAnimationFrame),
                e.batchedUpdates && (Ae.batchedUpdates = e.batchedUpdates),
                e.willAdvance && (ut = e.willAdvance),
                e.frameLoop && (Ae.frameLoop = e.frameLoop));
        },
        dt = new Set(),
        mt = [],
        pt = [],
        ft = 0,
        ht = {
            get idle() {
                return !dt.size && !mt.length;
            },
            start(e) {
                ft > e.priority ? (dt.add(e), Ae.onStart(gt)) : (_t(e), Ae(vt));
            },
            advance: vt,
            sort(e) {
                if (ft) Ae.onFrame(() => ht.sort(e));
                else {
                    const t = mt.indexOf(e);
                    ~t && (mt.splice(t, 1), bt(e));
                }
            },
            clear() {
                ((mt = []), dt.clear());
            },
        };
    function gt() {
        (dt.forEach(_t), dt.clear(), Ae(vt));
    }
    function _t(e) {
        mt.includes(e) || bt(e);
    }
    function bt(e) {
        mt.splice(
            (function (e, t) {
                const n = e.findIndex(t);
                return n < 0 ? e.length : n;
            })(mt, (t) => t.priority > e.priority),
            0,
            e,
        );
    }
    function vt(e) {
        const t = pt;
        for (let n = 0; n < mt.length; n++) {
            const s = mt[n];
            ((ft = s.priority), s.idle || (ut(s), s.advance(e), s.idle || t.push(s)));
        }
        return ((ft = 0), ((pt = mt).length = 0), (mt = t).length > 0);
    }
    var yt = '[-+]?\\d*\\.?\\d+',
        wt = yt + '%';
    function xt(...e) {
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var Rt = new RegExp('rgb' + xt(yt, yt, yt)),
        Et = new RegExp('rgba' + xt(yt, yt, yt, yt)),
        Ct = new RegExp('hsl' + xt(yt, wt, wt)),
        Pt = new RegExp('hsla' + xt(yt, wt, wt, yt)),
        St = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Tt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        kt = /^#([0-9a-fA-F]{6})$/,
        Nt = /^#([0-9a-fA-F]{8})$/;
    function At(e, t, n) {
        return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        );
    }
    function It(e, t, n) {
        const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
            r = 2 * n - s,
            o = At(r, s, e + 1 / 3),
            a = At(r, s, e),
            i = At(r, s, e - 1 / 3);
        return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * i) << 8);
    }
    function Mt(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function jt(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function Dt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function Ot(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
    }
    function Bt(e) {
        let t = (function (e) {
            let t;
            return 'number' == typeof e
                ? e >>> 0 === e && e >= 0 && e <= 4294967295
                    ? e
                    : null
                : (t = kt.exec(e))
                  ? parseInt(t[1] + 'ff', 16) >>> 0
                  : it && void 0 !== it[e]
                    ? it[e]
                    : (t = Rt.exec(e))
                      ? ((Mt(t[1]) << 24) | (Mt(t[2]) << 16) | (Mt(t[3]) << 8) | 255) >>> 0
                      : (t = Et.exec(e))
                        ? ((Mt(t[1]) << 24) | (Mt(t[2]) << 16) | (Mt(t[3]) << 8) | Dt(t[4])) >>> 0
                        : (t = St.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                          : (t = Nt.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = Tt.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = Ct.exec(e))
                                ? (255 | It(jt(t[1]), Ot(t[2]), Ot(t[3]))) >>> 0
                                : (t = Pt.exec(e))
                                  ? (It(jt(t[1]), Ot(t[2]), Ot(t[3])) | Dt(t[4])) >>> 0
                                  : null;
        })(e);
        if (null === t) return e;
        t = t || 0;
        return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
    }
    var Ft = (e, t, n) => {
        if (Ze.fun(e)) return e;
        if (Ze.arr(e)) return Ft({ range: e, output: t, extrapolate: n });
        if (Ze.str(e.output[0])) return st(e);
        const s = e,
            r = s.output,
            o = s.range || [0, 1],
            a = s.extrapolateLeft || s.extrapolate || 'extend',
            i = s.extrapolateRight || s.extrapolate || 'extend',
            l = s.easing || ((e) => e);
        return (e) => {
            const t = (function (e, t) {
                for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                return n - 1;
            })(e, o);
            return (function (e, t, n, s, r, o, a, i, l) {
                let u = l ? l(e) : e;
                if (u < t) {
                    if ('identity' === a) return u;
                    'clamp' === a && (u = t);
                }
                if (u > n) {
                    if ('identity' === i) return u;
                    'clamp' === i && (u = n);
                }
                if (s === r) return s;
                if (t === n) return e <= t ? s : r;
                t === -1 / 0 ? (u = -u) : n === 1 / 0 ? (u -= t) : (u = (u - t) / (n - t));
                ((u = o(u)), s === -1 / 0 ? (u = -u) : r === 1 / 0 ? (u += s) : (u = u * (r - s) + s));
                return u;
            })(e, o[t], o[t + 1], r[t], r[t + 1], l, a, i, s.map);
        };
    };
    var $t = { linear: (e) => e, easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2) },
        Lt = Symbol.for('FluidValue.get'),
        Ut = Symbol.for('FluidValue.observers'),
        qt = (e) => Boolean(e && e[Lt]),
        zt = (e) => (e && e[Lt] ? e[Lt]() : e),
        Vt = (e) => e[Ut] || null;
    function Gt(e, t) {
        const n = e[Ut];
        n &&
            n.forEach((e) => {
                !(function (e, t) {
                    e.eventObserved ? e.eventObserved(t) : e(t);
                })(e, t);
            });
    }
    var Qt = class {
            constructor(e) {
                if (!e && !(e = this.get)) throw Error('Unknown getter');
                Ht(this, e);
            }
        },
        Ht = (e, t) => Zt(e, Lt, t);
    function Wt(e, t) {
        if (e[Lt]) {
            let n = e[Ut];
            (n || Zt(e, Ut, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
        }
        return t;
    }
    function Xt(e, t) {
        const n = e[Ut];
        if (n && n.has(t)) {
            const s = n.size - 1;
            (s ? n.delete(t) : (e[Ut] = null), e.observerRemoved && e.observerRemoved(s, t));
        }
    }
    var Yt,
        Zt = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
        Kt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Jt = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        en = new RegExp(`(${Kt.source})(%|[a-z]+)`, 'i'),
        tn = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        nn = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        sn = (e) => {
            const [t, n] = rn(e);
            if (!t || at()) return e;
            const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
            if (s) return s.trim();
            if (n && n.startsWith('--')) {
                const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
                return t || e;
            }
            return n && nn.test(n) ? sn(n) : n || e;
        },
        rn = (e) => {
            const t = nn.exec(e);
            if (!t) return [,];
            const [, n, s] = t;
            return [n, s];
        },
        on = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
        an = (e) => {
            Yt || (Yt = it ? new RegExp(`(${Object.keys(it).join('|')})(?!\\w)`, 'g') : /^\b$/);
            const t = e.output.map((e) => zt(e).replace(nn, sn).replace(Jt, Bt).replace(Yt, Bt)),
                n = t.map((e) => e.match(Kt).map(Number)),
                s = n[0].map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                ),
                r = s.map((t) => Ft({ ...e, output: t }));
            return (e) => {
                var n;
                const s = !en.test(t[0]) && (null == (n = t.find((e) => en.test(e))) ? void 0 : n.replace(Kt, ''));
                let o = 0;
                return t[0].replace(Kt, () => `${r[o++](e)}${s || ''}`).replace(tn, on);
            };
        },
        ln = 'react-spring: ',
        un = (e) => {
            const t = e;
            let n = !1;
            if ('function' != typeof t) throw new TypeError(`${ln}once requires a function parameter`);
            return (...e) => {
                n || (t(...e), (n = !0));
            };
        },
        cn = un(console.warn);
    var dn = un(console.warn);
    function mn(e) {
        return Ze.str(e) && ('#' == e[0] || /\d/.test(e) || (!at() && nn.test(e)) || e in (it || {}));
    }
    var pn = at() ? s.useEffect : s.useLayoutEffect,
        fn = () => {
            const e = s.useRef(!1);
            return (
                pn(
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
    function hn() {
        const e = s.useState()[1],
            t = fn();
        return () => {
            t.current && e(Math.random());
        };
    }
    var gn = (e) => s.useEffect(e, _n),
        _n = [];
    function bn(e) {
        const t = s.useRef();
        return (
            s.useEffect(() => {
                t.current = e;
            }),
            t.current
        );
    }
    var vn = Symbol.for('Animated:node'),
        yn = (e) => e && e[vn],
        wn = (e, t) => {
            return (
                (n = e),
                (s = vn),
                (r = t),
                Object.defineProperty(n, s, { value: r, writable: !0, configurable: !0 })
            );
            var n, s, r;
        },
        xn = (e) => e && e[vn] && e[vn].getPayload(),
        Rn = class {
            constructor() {
                wn(this, this);
            }
            getPayload() {
                return this.payload || [];
            }
        },
        En = class extends Rn {
            constructor(e) {
                (super(),
                    (this._value = e),
                    (this.done = !0),
                    (this.durationProgress = 0),
                    Ze.num(this._value) && (this.lastPosition = this._value));
            }
            static create(e) {
                return new En(e);
            }
            getPayload() {
                return [this];
            }
            getValue() {
                return this._value;
            }
            setValue(e, t) {
                return (
                    Ze.num(e) &&
                        ((this.lastPosition = e),
                        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                    this._value !== e && ((this._value = e), !0)
                );
            }
            reset() {
                const { done: e } = this;
                ((this.done = !1),
                    Ze.num(this._value) &&
                        ((this.elapsedTime = 0),
                        (this.durationProgress = 0),
                        (this.lastPosition = this._value),
                        e && (this.lastVelocity = null),
                        (this.v0 = null)));
            }
        },
        Cn = class extends En {
            constructor(e) {
                (super(0), (this._string = null), (this._toString = Ft({ output: [e, e] })));
            }
            static create(e) {
                return new Cn(e);
            }
            getValue() {
                const e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }
            setValue(e) {
                if (Ze.str(e)) {
                    if (e == this._string) return !1;
                    ((this._string = e), (this._value = 1));
                } else {
                    if (!super.setValue(e)) return !1;
                    this._string = null;
                }
                return !0;
            }
            reset(e) {
                (e && (this._toString = Ft({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
            }
        },
        Pn = { dependencies: null },
        Sn = class extends Rn {
            constructor(e) {
                (super(), (this.source = e), this.setValue(e));
            }
            getValue(e) {
                const t = {};
                return (
                    et(this.source, (n, s) => {
                        var r;
                        (r = n) && r[vn] === r ? (t[s] = n.getValue(e)) : qt(n) ? (t[s] = zt(n)) : e || (t[s] = n);
                    }),
                    t
                );
            }
            setValue(e) {
                ((this.source = e), (this.payload = this._makePayload(e)));
            }
            reset() {
                this.payload && Je(this.payload, (e) => e.reset());
            }
            _makePayload(e) {
                if (e) {
                    const t = new Set();
                    return (et(e, this._addToPayload, t), Array.from(t));
                }
            }
            _addToPayload(e) {
                Pn.dependencies && qt(e) && Pn.dependencies.add(e);
                const t = xn(e);
                t && Je(t, (e) => this.add(e));
            }
        },
        Tn = class extends Sn {
            constructor(e) {
                super(e);
            }
            static create(e) {
                return new Tn(e);
            }
            getValue() {
                return this.source.map((e) => e.getValue());
            }
            setValue(e) {
                const t = this.getPayload();
                return e.length == t.length
                    ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                    : (super.setValue(e.map(kn)), !0);
            }
        };
    function kn(e) {
        return (mn(e) ? Cn : En).create(e);
    }
    function Nn(e) {
        const t = yn(e);
        return t ? t.constructor : Ze.arr(e) ? Tn : mn(e) ? Cn : En;
    }
    var An = (e, t) => {
            const n = !Ze.fun(e) || (e.prototype && e.prototype.isReactComponent);
            return s.forwardRef((r, o) => {
                const a = s.useRef(null),
                    i =
                        n &&
                        s.useCallback(
                            (e) => {
                                a.current = (function (e, t) {
                                    e && (Ze.fun(e) ? e(t) : (e.current = t));
                                    return t;
                                })(o, e);
                            },
                            [o],
                        ),
                    [l, u] = (function (e, t) {
                        const n = new Set();
                        ((Pn.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                        return ((e = new Sn(e)), (Pn.dependencies = null), [e, n]);
                    })(r, t),
                    c = hn(),
                    d = () => {
                        const e = a.current;
                        if (n && !e) return;
                        !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && c();
                    },
                    m = new In(d, u),
                    p = s.useRef();
                (pn(
                    () => (
                        (p.current = m),
                        Je(u, (e) => Wt(e, m)),
                        () => {
                            p.current && (Je(p.current.deps, (e) => Xt(e, p.current)), Ae.cancel(p.current.update));
                        }
                    ),
                ),
                    s.useEffect(d, []),
                    gn(() => () => {
                        const e = p.current;
                        Je(e.deps, (t) => Xt(t, e));
                    }));
                const h = t.getComponentProps(l.getValue());
                return f.createElement(e, { ...h, ref: i });
            });
        },
        In = class {
            constructor(e, t) {
                ((this.update = e), (this.deps = t));
            }
            eventObserved(e) {
                'change' == e.type && Ae.write(this.update);
            }
        };
    var Mn = Symbol.for('AnimatedComponent'),
        jn = (e) => (Ze.str(e) ? e : e && Ze.str(e.displayName) ? e.displayName : (Ze.fun(e) && e.name) || null);
    function Dn(e, ...t) {
        return Ze.fun(e) ? e(...t) : e;
    }
    var On = (e, t) => !0 === e || !!(t && e && (Ze.fun(e) ? e(t) : tt(e).includes(t))),
        Bn = (e, t) => (Ze.obj(e) ? t && e[t] : e),
        Fn = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
        $n = (e) => e,
        Ln = (e, t = $n) => {
            let n = Un;
            e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
            const s = {};
            for (const r of n) {
                const n = t(e[r], r);
                Ze.und(n) || (s[r] = n);
            }
            return s;
        },
        Un = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
        qn = {
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
    function zn(e) {
        const t = (function (e) {
            const t = {};
            let n = 0;
            if (
                (et(e, (e, s) => {
                    qn[s] || ((t[s] = e), n++);
                }),
                n)
            )
                return t;
        })(e);
        if (t) {
            const n = { to: t };
            return (et(e, (e, s) => s in t || (n[s] = e)), n);
        }
        return { ...e };
    }
    function Vn(e) {
        return (
            (e = zt(e)),
            Ze.arr(e) ? e.map(Vn) : mn(e) ? Xe.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
        );
    }
    function Gn(e) {
        for (const t in e) return !0;
        return !1;
    }
    function Qn(e) {
        return Ze.fun(e) || (Ze.arr(e) && Ze.obj(e[0]));
    }
    function Hn(e, t) {
        var n;
        (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
    }
    function Wn(e, t) {
        var n;
        t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
    }
    var Xn = { tension: 170, friction: 26, mass: 1, damping: 1, easing: $t.linear, clamp: !1 };
    function Yn(e, t) {
        if (Ze.und(t.decay)) {
            const n = !Ze.und(t.tension) || !Ze.und(t.friction);
            ((!n && Ze.und(t.frequency) && Ze.und(t.damping) && Ze.und(t.mass)) ||
                ((e.duration = void 0), (e.decay = void 0)),
                n && (e.frequency = void 0));
        } else e.duration = void 0;
    }
    var Zn = [];
    function Kn(e, { key: t, props: n, defaultProps: s, state: r, actions: o }) {
        return new Promise((a, i) => {
            let l,
                u,
                c = On(n.cancel ?? (null == s ? void 0 : s.cancel), t);
            if (c) p();
            else {
                Ze.und(n.pause) || (r.paused = On(n.pause, t));
                let e = null == s ? void 0 : s.pause;
                (!0 !== e && (e = r.paused || On(e, t)),
                    (l = Dn(n.delay || 0, t)),
                    e ? (r.resumeQueue.add(m), o.pause()) : (o.resume(), m()));
            }
            function d() {
                (r.resumeQueue.add(m), r.timeouts.delete(u), u.cancel(), (l = u.time - Ae.now()));
            }
            function m() {
                l > 0 && !Xe.skipAnimation
                    ? ((r.delayed = !0), (u = Ae.setTimeout(p, l)), r.pauseQueue.add(d), r.timeouts.add(u))
                    : p();
            }
            function p() {
                (r.delayed && (r.delayed = !1),
                    r.pauseQueue.delete(d),
                    r.timeouts.delete(u),
                    e <= (r.cancelId || 0) && (c = !0));
                try {
                    o.start({ ...n, callId: e, cancel: c }, a);
                } catch (t) {
                    i(t);
                }
            }
        });
    }
    var Jn = (e, t) =>
            1 == t.length
                ? t[0]
                : t.some((e) => e.cancelled)
                  ? ns(e.get())
                  : t.every((e) => e.noop)
                    ? es(e.get())
                    : ts(
                          e.get(),
                          t.every((e) => e.finished),
                      ),
        es = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        ts = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
        ns = (e) => ({ value: e, cancelled: !0, finished: !1 });
    function ss(e, t, n, s) {
        const { callId: r, parentId: o, onRest: a } = t,
            { asyncTo: i, promise: l } = n;
        return o || e !== i || t.reset
            ? (n.promise = (async () => {
                  ((n.asyncId = r), (n.asyncTo = e));
                  const u = Ln(t, (e, t) => ('onRest' === t ? void 0 : e));
                  let c, d;
                  const m = new Promise((e, t) => ((c = e), (d = t))),
                      p = (e) => {
                          const t = (r <= (n.cancelId || 0) && ns(s)) || (r !== n.asyncId && ts(s, !1));
                          if (t) throw ((e.result = t), d(e), e);
                      },
                      f = (e, t) => {
                          const o = new os(),
                              a = new as();
                          return (async () => {
                              if (Xe.skipAnimation) throw (rs(n), (a.result = ts(s, !1)), d(a), a);
                              p(o);
                              const i = Ze.obj(e) ? { ...e } : { ...t, to: e };
                              ((i.parentId = r),
                                  et(u, (e, t) => {
                                      Ze.und(i[t]) && (i[t] = e);
                                  }));
                              const l = await s.start(i);
                              return (
                                  p(o),
                                  n.paused &&
                                      (await new Promise((e) => {
                                          n.resumeQueue.add(e);
                                      })),
                                  l
                              );
                          })();
                      };
                  let h;
                  if (Xe.skipAnimation) return (rs(n), ts(s, !1));
                  try {
                      let t;
                      ((t = Ze.arr(e)
                          ? (async (e) => {
                                for (const t of e) await f(t);
                            })(e)
                          : Promise.resolve(e(f, s.stop.bind(s)))),
                          await Promise.all([t.then(c), m]),
                          (h = ts(s.get(), !0, !1)));
                  } catch (g) {
                      if (g instanceof os) h = g.result;
                      else {
                          if (!(g instanceof as)) throw g;
                          h = g.result;
                      }
                  } finally {
                      r == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? i : void 0), (n.promise = o ? l : void 0));
                  }
                  return (
                      Ze.fun(a) &&
                          Ae.batchedUpdates(() => {
                              a(h, s, s.item);
                          }),
                      h
                  );
              })())
            : l;
    }
    function rs(e, t) {
        (nt(e.timeouts, (e) => e.cancel()),
            e.pauseQueue.clear(),
            e.resumeQueue.clear(),
            (e.asyncId = e.asyncTo = e.promise = void 0),
            t && (e.cancelId = t));
    }
    var os = class extends Error {
            constructor() {
                super(
                    'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
                );
            }
        },
        as = class extends Error {
            constructor() {
                super('SkipAnimationSignal');
            }
        },
        is = (e) => e instanceof us,
        ls = 1,
        us = class extends Qt {
            constructor() {
                (super(...arguments), (this.id = ls++), (this._priority = 0));
            }
            get priority() {
                return this._priority;
            }
            set priority(e) {
                this._priority != e && ((this._priority = e), this._onPriorityChange(e));
            }
            get() {
                const e = yn(this);
                return e && e.getValue();
            }
            to(...e) {
                return Xe.to(this, e);
            }
            interpolate(...e) {
                return (cn(`${ln}The "interpolate" function is deprecated in v9 (use "to" instead)`), Xe.to(this, e));
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
                Gt(this, { type: 'change', parent: this, value: e, idle: t });
            }
            _onPriorityChange(e) {
                (this.idle || ht.sort(this), Gt(this, { type: 'priority', parent: this, priority: e }));
            }
        },
        cs = Symbol.for('SpringPhase'),
        ds = (e) => (1 & e[cs]) > 0,
        ms = (e) => (2 & e[cs]) > 0,
        ps = (e) => (4 & e[cs]) > 0,
        fs = (e, t) => (t ? (e[cs] |= 3) : (e[cs] &= -3)),
        hs = (e, t) => (t ? (e[cs] |= 4) : (e[cs] &= -5)),
        gs = class extends us {
            constructor(e, t) {
                if (
                    (super(),
                    (this.animation = new (class {
                        constructor() {
                            ((this.changed = !1),
                                (this.values = Zn),
                                (this.toValues = null),
                                (this.fromValues = Zn),
                                (this.config = new (class {
                                    constructor() {
                                        ((this.velocity = 0), Object.assign(this, Xn));
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
                    !Ze.und(e) || !Ze.und(t))
                ) {
                    const n = Ze.obj(e) ? { ...e } : { ...t, from: e };
                    (Ze.und(n.default) && (n.default = !0), this.start(n));
                }
            }
            get idle() {
                return !(ms(this) || this._state.asyncTo) || ps(this);
            }
            get goal() {
                return zt(this.animation.to);
            }
            get velocity() {
                const e = yn(this);
                return e instanceof En ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
            }
            get hasAnimated() {
                return ds(this);
            }
            get isAnimating() {
                return ms(this);
            }
            get isPaused() {
                return ps(this);
            }
            get isDelayed() {
                return this._state.delayed;
            }
            advance(e) {
                let t = !0,
                    n = !1;
                const s = this.animation;
                let { toValues: r } = s;
                const { config: o } = s,
                    a = xn(s.to);
                (!a && qt(s.to) && (r = tt(zt(s.to))),
                    s.values.forEach((i, l) => {
                        if (i.done) return;
                        const u = i.constructor == Cn ? 1 : a ? a[l].lastPosition : r[l];
                        let c = s.immediate,
                            d = u;
                        if (!c) {
                            if (((d = i.lastPosition), o.tension <= 0)) return void (i.done = !0);
                            let t = (i.elapsedTime += e);
                            const n = s.fromValues[l],
                                r = null != i.v0 ? i.v0 : (i.v0 = Ze.arr(o.velocity) ? o.velocity[l] : o.velocity);
                            let a;
                            const m = o.precision || (n == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - n)));
                            if (Ze.und(o.duration))
                                if (o.decay) {
                                    const e = !0 === o.decay ? 0.998 : o.decay,
                                        s = Math.exp(-(1 - e) * t);
                                    ((d = n + (r / (1 - e)) * (1 - s)),
                                        (c = Math.abs(i.lastPosition - d) <= m),
                                        (a = r * s));
                                } else {
                                    a = null == i.lastVelocity ? r : i.lastVelocity;
                                    const t = o.restVelocity || m / 10,
                                        s = o.clamp ? 0 : o.bounce,
                                        l = !Ze.und(s),
                                        p = n == u ? i.v0 > 0 : n < u;
                                    let f,
                                        h = !1;
                                    const g = 1,
                                        _ = Math.ceil(e / g);
                                    for (
                                        let e = 0;
                                        e < _ && ((f = Math.abs(a) > t), f || ((c = Math.abs(u - d) <= m), !c));
                                        ++e
                                    ) {
                                        l && ((h = d == u || d > u == p), h && ((a = -a * s), (d = u)));
                                        ((a += ((1e-6 * -o.tension * (d - u) + 0.001 * -o.friction * a) / o.mass) * g),
                                            (d += a * g));
                                    }
                                }
                            else {
                                let s = 1;
                                (o.duration > 0 &&
                                    (this._memoizedDuration !== o.duration &&
                                        ((this._memoizedDuration = o.duration),
                                        i.durationProgress > 0 &&
                                            ((i.elapsedTime = o.duration * i.durationProgress),
                                            (t = i.elapsedTime += e))),
                                    (s = (o.progress || 0) + t / this._memoizedDuration),
                                    (s = s > 1 ? 1 : s < 0 ? 0 : s),
                                    (i.durationProgress = s)),
                                    (d = n + o.easing(s) * (u - n)),
                                    (a = (d - i.lastPosition) / e),
                                    (c = 1 == s));
                            }
                            ((i.lastVelocity = a),
                                Number.isNaN(d) && (console.warn('Got NaN while animating:', this), (c = !0)));
                        }
                        (a && !a[l].done && (c = !1), c ? (i.done = !0) : (t = !1), i.setValue(d, o.round) && (n = !0));
                    }));
                const i = yn(this),
                    l = i.getValue();
                if (t) {
                    const e = zt(s.to);
                    ((l === e && !n) || o.decay
                        ? n && o.decay && this._onChange(l)
                        : (i.setValue(e), this._onChange(e)),
                        this._stop());
                } else n && this._onChange(l);
            }
            set(e) {
                return (
                    Ae.batchedUpdates(() => {
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
                if (ms(this)) {
                    const { to: e, config: t } = this.animation;
                    Ae.batchedUpdates(() => {
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
                    Ze.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Ze.obj(e) ? e : { ...t, to: e }]),
                    Promise.all(n.map((e) => this._update(e))).then((e) => Jn(this, e))
                );
            }
            stop(e) {
                const { to: t } = this.animation;
                return (
                    this._focus(this.get()),
                    rs(this._state, e && this._lastCallId),
                    Ae.batchedUpdates(() => this._stop(t, e)),
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
                let { to: n, from: s } = e;
                ((n = Ze.obj(n) ? n[t] : n),
                    (null == n || Qn(n)) && (n = void 0),
                    (s = Ze.obj(s) ? s[t] : s),
                    null == s && (s = void 0));
                const r = { to: n, from: s };
                return (
                    ds(this) ||
                        (e.reverse && ([n, s] = [s, n]),
                        (s = zt(s)),
                        Ze.und(s) ? yn(this) || this._set(n) : this._set(s)),
                    r
                );
            }
            _update({ ...e }, t) {
                const { key: n, defaultProps: s } = this;
                (e.default &&
                    Object.assign(
                        s,
                        Ln(e, (e, t) => (/^on/.test(t) ? Bn(e, n) : e)),
                    ),
                    Rs(this, e, 'onProps'),
                    Es(this, 'onProps', e, this));
                const r = this._prepareNode(e);
                if (Object.isFrozen(this))
                    throw Error(
                        'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                    );
                const o = this._state;
                return Kn(++this._lastCallId, {
                    key: n,
                    props: e,
                    defaultProps: s,
                    state: o,
                    actions: {
                        pause: () => {
                            ps(this) ||
                                (hs(this, !0),
                                ot(o.pauseQueue),
                                Es(this, 'onPause', ts(this, _s(this, this.animation.to)), this));
                        },
                        resume: () => {
                            ps(this) &&
                                (hs(this, !1),
                                ms(this) && this._resume(),
                                ot(o.resumeQueue),
                                Es(this, 'onResume', ts(this, _s(this, this.animation.to)), this));
                        },
                        start: this._merge.bind(this, r),
                    },
                }).then((n) => {
                    if (e.loop && n.finished && (!t || !n.noop)) {
                        const t = bs(e);
                        if (t) return this._update(t, !0);
                    }
                    return n;
                });
            }
            _merge(e, t, n) {
                if (t.cancel) return (this.stop(!0), n(ns(this)));
                const s = !Ze.und(e.to),
                    r = !Ze.und(e.from);
                if (s || r) {
                    if (!(t.callId > this._lastToId)) return n(ns(this));
                    this._lastToId = t.callId;
                }
                const { key: o, defaultProps: a, animation: i } = this,
                    { to: l, from: u } = i;
                let { to: c = l, from: d = u } = e;
                (!r || s || (t.default && !Ze.und(c)) || (c = d), t.reverse && ([c, d] = [d, c]));
                const m = !Ke(d, u);
                (m && (i.from = d), (d = zt(d)));
                const p = !Ke(c, l);
                p && this._focus(c);
                const f = Qn(t.to),
                    { config: h } = i,
                    { decay: g, velocity: _ } = h;
                ((s || r) && (h.velocity = 0),
                    t.config &&
                        !f &&
                        (function (e, t, n) {
                            (n && (Yn((n = { ...n }), t), (t = { ...n, ...t })), Yn(e, t), Object.assign(e, t));
                            for (const a in Xn) null == e[a] && (e[a] = Xn[a]);
                            let { frequency: s, damping: r } = e;
                            const { mass: o } = e;
                            Ze.und(s) ||
                                (s < 0.01 && (s = 0.01),
                                r < 0 && (r = 0),
                                (e.tension = Math.pow((2 * Math.PI) / s, 2) * o),
                                (e.friction = (4 * Math.PI * r * o) / s));
                        })(h, Dn(t.config, o), t.config !== a.config ? Dn(a.config, o) : void 0));
                let b = yn(this);
                if (!b || Ze.und(c)) return n(ts(this, !0));
                const v = Ze.und(t.reset) ? r && !t.default : !Ze.und(d) && On(t.reset, o),
                    y = v ? d : this.get(),
                    w = Vn(c),
                    x = Ze.num(w) || Ze.arr(w) || mn(w),
                    R = !f && (!x || On(a.immediate || t.immediate, o));
                if (p) {
                    const e = Nn(c);
                    if (e !== b.constructor) {
                        if (!R)
                            throw Error(
                                `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`,
                            );
                        b = this._set(w);
                    }
                }
                const E = b.constructor;
                let C = qt(c),
                    P = !1;
                if (!C) {
                    const e = v || (!ds(this) && m);
                    ((p || e) && ((P = Ke(Vn(y), w)), (C = !P)),
                        ((Ke(i.immediate, R) || R) && Ke(h.decay, g) && Ke(h.velocity, _)) || (C = !0));
                }
                if (
                    (P && ms(this) && (i.changed && !v ? (C = !0) : C || this._stop(l)),
                    !f &&
                        ((C || qt(l)) &&
                            ((i.values = b.getPayload()), (i.toValues = qt(c) ? null : E == Cn ? [1] : tt(w))),
                        i.immediate != R && ((i.immediate = R), R || v || this._set(l)),
                        C))
                ) {
                    const { onRest: e } = i;
                    Je(xs, (e) => Rs(this, t, e));
                    const s = ts(this, _s(this, l));
                    (ot(this._pendingCalls, s),
                        this._pendingCalls.add(n),
                        i.changed &&
                            Ae.batchedUpdates(() => {
                                var t;
                                ((i.changed = !v),
                                    null == e || e(s, this),
                                    v ? Dn(a.onRest, s) : null == (t = i.onStart) || t.call(i, s, this));
                            }));
                }
                (v && this._set(y),
                    f
                        ? n(ss(t.to, t, this._state, this))
                        : C
                          ? this._start()
                          : ms(this) && !p
                            ? this._pendingCalls.add(n)
                            : n(es(y)));
            }
            _focus(e) {
                const t = this.animation;
                e !== t.to && (Vt(this) && this._detach(), (t.to = e), Vt(this) && this._attach());
            }
            _attach() {
                let e = 0;
                const { to: t } = this.animation;
                (qt(t) && (Wt(t, this), is(t) && (e = t.priority + 1)), (this.priority = e));
            }
            _detach() {
                const { to: e } = this.animation;
                qt(e) && Xt(e, this);
            }
            _set(e, t = !0) {
                const n = zt(e);
                if (!Ze.und(n)) {
                    const e = yn(this);
                    if (!e || !Ke(n, e.getValue())) {
                        const s = Nn(n);
                        (e && e.constructor == s ? e.setValue(n) : wn(this, s.create(n)),
                            e &&
                                Ae.batchedUpdates(() => {
                                    this._onChange(n, t);
                                }));
                    }
                }
                return yn(this);
            }
            _onStart() {
                const e = this.animation;
                e.changed || ((e.changed = !0), Es(this, 'onStart', ts(this, _s(this, e.to)), this));
            }
            _onChange(e, t) {
                (t || (this._onStart(), Dn(this.animation.onChange, e, this)),
                    Dn(this.defaultProps.onChange, e, this),
                    super._onChange(e, t));
            }
            _start() {
                const e = this.animation;
                (yn(this).reset(zt(e.to)),
                    e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                    ms(this) || (fs(this, !0), ps(this) || this._resume()));
            }
            _resume() {
                Xe.skipAnimation ? this.finish() : ht.start(this);
            }
            _stop(e, t) {
                if (ms(this)) {
                    fs(this, !1);
                    const n = this.animation;
                    (Je(n.values, (e) => {
                        e.done = !0;
                    }),
                        n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                        Gt(this, { type: 'idle', parent: this }));
                    const s = t ? ns(this.get()) : ts(this.get(), _s(this, e ?? n.to));
                    (ot(this._pendingCalls, s), n.changed && ((n.changed = !1), Es(this, 'onRest', s, this)));
                }
            }
        };
    function _s(e, t) {
        const n = Vn(t);
        return Ke(Vn(e.get()), n);
    }
    function bs(e, t = e.loop, n = e.to) {
        const s = Dn(t);
        if (s) {
            const r = !0 !== s && zn(s),
                o = (r || e).reverse,
                a = !r || r.reset;
            return vs({
                ...e,
                loop: t,
                default: !1,
                pause: void 0,
                to: !o || Qn(n) ? n : void 0,
                from: a ? e.from : void 0,
                reset: a,
                ...r,
            });
        }
    }
    function vs(e) {
        const { to: t, from: n } = (e = zn(e)),
            s = new Set();
        return (Ze.obj(t) && ws(t, s), Ze.obj(n) && ws(n, s), (e.keys = s.size ? Array.from(s) : null), e);
    }
    function ys(e) {
        const t = vs(e);
        return (Ze.und(t.default) && (t.default = Ln(t)), t);
    }
    function ws(e, t) {
        et(e, (e, n) => null != e && t.add(n));
    }
    var xs = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
    function Rs(e, t, n) {
        e.animation[n] = t[n] !== Fn(t, n) ? Bn(t[n], e.key) : void 0;
    }
    function Es(e, t, ...n) {
        var s, r, o, a;
        (null == (r = (s = e.animation)[t]) || r.call(s, ...n),
            null == (a = (o = e.defaultProps)[t]) || a.call(o, ...n));
    }
    var Cs = ['onStart', 'onChange', 'onRest'],
        Ps = 1,
        Ss = class {
            constructor(e, t) {
                ((this.id = Ps++),
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
                    Ze.und(n) || this.springs[t].set(n);
                }
            }
            update(e) {
                return (e && this.queue.push(vs(e)), this);
            }
            start(e) {
                let { queue: t } = this;
                return (
                    e ? (t = tt(e).map(vs)) : (this.queue = []),
                    this._flush ? this._flush(this, t) : (js(this, t), Ts(this, t))
                );
            }
            stop(e, t) {
                if ((e !== !!e && (t = e), t)) {
                    const n = this.springs;
                    Je(tt(t), (t) => n[t].stop(!!e));
                } else (rs(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
                return this;
            }
            pause(e) {
                if (Ze.und(e)) this.start({ pause: !0 });
                else {
                    const t = this.springs;
                    Je(tt(e), (e) => t[e].pause());
                }
                return this;
            }
            resume(e) {
                if (Ze.und(e)) this.start({ pause: !1 });
                else {
                    const t = this.springs;
                    Je(tt(e), (e) => t[e].resume());
                }
                return this;
            }
            each(e) {
                et(this.springs, e);
            }
            _onFrame() {
                const { onStart: e, onChange: t, onRest: n } = this._events,
                    s = this._active.size > 0,
                    r = this._changed.size > 0;
                ((s && !this._started) || (r && !this._started)) &&
                    ((this._started = !0),
                    nt(e, ([e, t]) => {
                        ((t.value = this.get()), e(t, this, this._item));
                    }));
                const o = !s && this._started,
                    a = r || (o && n.size) ? this.get() : null;
                (r &&
                    t.size &&
                    nt(t, ([e, t]) => {
                        ((t.value = a), e(t, this, this._item));
                    }),
                    o &&
                        ((this._started = !1),
                        nt(n, ([e, t]) => {
                            ((t.value = a), e(t, this, this._item));
                        })));
            }
            eventObserved(e) {
                if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
                else {
                    if ('idle' != e.type) return;
                    this._active.delete(e.parent);
                }
                Ae.onFrame(this._onFrame);
            }
        };
    function Ts(e, t) {
        return Promise.all(t.map((t) => ks(e, t))).then((t) => Jn(e, t));
    }
    async function ks(e, t, n) {
        const { keys: s, to: r, from: o, loop: a, onRest: i, onResolve: l } = t,
            u = Ze.obj(t.default) && t.default;
        (a && (t.loop = !1), !1 === r && (t.to = null), !1 === o && (t.from = null));
        const c = Ze.arr(r) || Ze.fun(r) ? r : void 0;
        c
            ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
            : Je(Cs, (n) => {
                  const s = t[n];
                  if (Ze.fun(s)) {
                      const r = e._events[n];
                      ((t[n] = ({ finished: e, cancelled: t }) => {
                          const n = r.get(s);
                          n
                              ? (e || (n.finished = !1), t && (n.cancelled = !0))
                              : r.set(s, { value: null, finished: e || !1, cancelled: t || !1 });
                      }),
                          u && (u[n] = t[n]));
                  }
              });
        const d = e._state;
        t.pause === !d.paused
            ? ((d.paused = t.pause), ot(t.pause ? d.pauseQueue : d.resumeQueue))
            : d.paused && (t.pause = !0);
        const m = (s || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
            p = !0 === t.cancel || !0 === Fn(t, 'cancel');
        ((c || (p && d.asyncId)) &&
            m.push(
                Kn(++e._lastAsyncId, {
                    props: t,
                    state: d,
                    actions: {
                        pause: Ye,
                        resume: Ye,
                        start(t, n) {
                            p ? (rs(d, e._lastAsyncId), n(ns(e))) : ((t.onRest = i), n(ss(c, t, d, e)));
                        },
                    },
                }),
            ),
            d.paused &&
                (await new Promise((e) => {
                    d.resumeQueue.add(e);
                })));
        const f = Jn(e, await Promise.all(m));
        if (a && f.finished && (!n || !f.noop)) {
            const n = bs(t, a, r);
            if (n) return (js(e, [n]), ks(e, n, !0));
        }
        return (l && Ae.batchedUpdates(() => l(f, e, e.item)), f);
    }
    function Ns(e, t) {
        const n = { ...e.springs };
        return (
            t &&
                Je(tt(t), (e) => {
                    (Ze.und(e.keys) && (e = vs(e)), Ze.obj(e.to) || (e = { ...e, to: void 0 }), Ms(n, e, (e) => Is(e)));
                }),
            As(e, n),
            n
        );
    }
    function As(e, t) {
        et(t, (t, n) => {
            e.springs[n] || ((e.springs[n] = t), Wt(t, e));
        });
    }
    function Is(e, t) {
        const n = new gs();
        return ((n.key = e), t && Wt(n, t), n);
    }
    function Ms(e, t, n) {
        t.keys &&
            Je(t.keys, (s) => {
                (e[s] || (e[s] = n(s)))._prepareNode(t);
            });
    }
    function js(e, t) {
        Je(t, (t) => {
            Ms(e.springs, t, (t) => Is(t, e));
        });
    }
    var Ds,
        Os,
        Bs = ({ children: e, ...t }) => {
            const n = s.useContext(Fs),
                r = t.pause || !!n.pause,
                o = t.immediate || !!n.immediate;
            t = (function (e, t) {
                const [n] = s.useState(() => ({ inputs: t, result: e() })),
                    r = s.useRef(),
                    o = r.current;
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
                    s.useEffect(() => {
                        ((r.current = a), o == n && (n.inputs = n.result = void 0));
                    }, [a]),
                    a.result
                );
            })(() => ({ pause: r, immediate: o }), [r, o]);
            const { Provider: a } = Fs;
            return f.createElement(a, { value: t }, e);
        },
        Fs =
            ((Ds = Bs),
            (Os = {}),
            Object.assign(Ds, f.createContext(Os)),
            (Ds.Provider._context = Ds),
            (Ds.Consumer._context = Ds),
            Ds);
    ((Bs.Provider = Fs.Provider), (Bs.Consumer = Fs.Consumer));
    var $s = () => {
        const e = [],
            t = function (t) {
                dn(
                    `${ln}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
                const s = [];
                return (
                    Je(e, (e, r) => {
                        if (Ze.und(t)) s.push(e.start());
                        else {
                            const o = n(t, e, r);
                            o && s.push(e.start(o));
                        }
                    }),
                    s
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
                return (Je(e, (e) => e.pause(...arguments)), this);
            }),
            (t.resume = function () {
                return (Je(e, (e) => e.resume(...arguments)), this);
            }),
            (t.set = function (t) {
                Je(e, (e, n) => {
                    const s = Ze.fun(t) ? t(n, e) : t;
                    s && e.set(s);
                });
            }),
            (t.start = function (t) {
                const n = [];
                return (
                    Je(e, (e, s) => {
                        if (Ze.und(t)) n.push(e.start());
                        else {
                            const r = this._getProps(t, e, s);
                            r && n.push(e.start(r));
                        }
                    }),
                    n
                );
            }),
            (t.stop = function () {
                return (Je(e, (e) => e.stop(...arguments)), this);
            }),
            (t.update = function (t) {
                return (Je(e, (e, n) => e.update(this._getProps(t, e, n))), this);
            }));
        const n = function (e, t, n) {
            return Ze.fun(e) ? e(n, t) : e;
        };
        return ((t._getProps = n), t);
    };
    function Ls(e, t) {
        const n = Ze.fun(e),
            [[r], o] = (function (e, t, n) {
                const r = Ze.fun(t) && t;
                r && !n && (n = []);
                const o = s.useMemo(() => (r || 3 == arguments.length ? $s() : void 0), []),
                    a = s.useRef(0),
                    i = hn(),
                    l = s.useMemo(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(e, t) {
                                const n = Ns(e, t);
                                return a.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                    ? Ts(e, t)
                                    : new Promise((s) => {
                                          (As(e, n),
                                              l.queue.push(() => {
                                                  s(Ts(e, t));
                                              }),
                                              i());
                                      });
                            },
                        }),
                        [],
                    ),
                    u = s.useRef([...l.ctrls]),
                    c = [],
                    d = bn(e) || 0;
                function m(e, n) {
                    for (let s = e; s < n; s++) {
                        const e = u.current[s] || (u.current[s] = new Ss(null, l.flush)),
                            n = r ? r(s, e) : t[s];
                        n && (c[s] = ys(n));
                    }
                }
                (s.useMemo(() => {
                    (Je(u.current.slice(e, d), (e) => {
                        (Hn(e, o), e.stop(!0));
                    }),
                        (u.current.length = e),
                        m(d, e));
                }, [e]),
                    s.useMemo(() => {
                        m(0, Math.min(d, e));
                    }, n));
                const p = u.current.map((e, t) => Ns(e, c[t])),
                    f = s.useContext(Bs),
                    h = bn(f),
                    g = f !== h && Gn(f);
                (pn(() => {
                    (a.current++, (l.ctrls = u.current));
                    const { queue: e } = l;
                    (e.length && ((l.queue = []), Je(e, (e) => e())),
                        Je(u.current, (e, t) => {
                            (null == o || o.add(e), g && e.start({ default: f }));
                            const n = c[t];
                            n && (Wn(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                        }));
                }),
                    gn(() => () => {
                        Je(l.ctrls, (e) => e.stop(!0));
                    }));
                const _ = p.map((e) => ({ ...e }));
                return o ? [_, o] : _;
            })(1, n ? e : [e], n ? [] : t);
        return n || 2 == arguments.length ? [r, o] : r;
    }
    var Us = () => $s(),
        qs = () => s.useState(Us)[0];
    function zs(e, t, n) {
        const r = Ze.fun(t) && t,
            {
                reset: o,
                sort: a,
                trail: i = 0,
                expires: l = !0,
                exitBeforeEnter: u = !1,
                onDestroyed: c,
                ref: d,
                config: m,
            } = r ? r() : t,
            p = s.useMemo(() => (r || 3 == arguments.length ? $s() : void 0), []),
            h = tt(e),
            g = [],
            _ = s.useRef(null),
            b = o ? null : _.current;
        (pn(() => {
            _.current = g;
        }),
            gn(
                () => (
                    Je(g, (e) => {
                        (null == p || p.add(e.ctrl), (e.ctrl.ref = p));
                    }),
                    () => {
                        Je(_.current, (e) => {
                            (e.expired && clearTimeout(e.expirationId), Hn(e.ctrl, p), e.ctrl.stop(!0));
                        });
                    }
                ),
            ));
        const v = (function (e, { key: t, keys: n = t }, s) {
                if (null === n) {
                    const t = new Set();
                    return e.map((e) => {
                        const n = s && s.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                        return n ? (t.add(n), n.key) : Vs++;
                    });
                }
                return Ze.und(n) ? e : Ze.fun(n) ? e.map(n) : tt(n);
            })(h, r ? r() : t, b),
            y = (o && _.current) || [];
        pn(() =>
            Je(y, ({ ctrl: e, item: t, key: n }) => {
                (Hn(e, p), Dn(c, t, n));
            }),
        );
        const w = [];
        if (
            (b &&
                Je(b, (e, t) => {
                    e.expired
                        ? (clearTimeout(e.expirationId), y.push(e))
                        : ~(t = w[t] = v.indexOf(e.key)) && (g[t] = e);
                }),
            Je(h, (e, t) => {
                g[t] || ((g[t] = { key: v[t], item: e, phase: 'mount', ctrl: new Ss() }), (g[t].ctrl.item = e));
            }),
            w.length)
        ) {
            let e = -1;
            const { leave: n } = r ? r() : t;
            Je(w, (t, s) => {
                const r = b[s];
                ~t ? ((e = g.indexOf(r)), (g[e] = { ...r, item: h[t] })) : n && g.splice(++e, 0, r);
            });
        }
        Ze.fun(a) && g.sort((e, t) => a(e.item, t.item));
        let x = -i;
        const R = hn(),
            E = Ln(t),
            C = new Map(),
            P = s.useRef(new Map()),
            S = s.useRef(!1);
        Je(g, (e, n) => {
            const s = e.key,
                o = e.phase,
                a = r ? r() : t;
            let c, p;
            const f = Dn(a.delay || 0, s);
            if ('mount' == o) ((c = a.enter), (p = 'enter'));
            else {
                const e = v.indexOf(s) < 0;
                if ('leave' != o)
                    if (e) ((c = a.leave), (p = 'leave'));
                    else {
                        if (!(c = a.update)) return;
                        p = 'update';
                    }
                else {
                    if (e) return;
                    ((c = a.enter), (p = 'enter'));
                }
            }
            if (((c = Dn(c, e.item, n)), (c = Ze.obj(c) ? zn(c) : { to: c }), !c.config)) {
                const t = m || E.config;
                c.config = Dn(t, e.item, n, p);
            }
            x += i;
            const h = { ...E, delay: f + x, ref: d, immediate: a.immediate, reset: !1, ...c };
            if ('enter' == p && Ze.und(h.from)) {
                const s = r ? r() : t,
                    o = Ze.und(s.initial) || b ? s.from : s.initial;
                h.from = Dn(o, e.item, n);
            }
            const { onResolve: g } = h;
            h.onResolve = (e) => {
                Dn(g, e);
                const t = _.current,
                    n = t.find((e) => e.key === s);
                if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                    const e = t.every((e) => e.ctrl.idle);
                    if ('leave' == n.phase) {
                        const t = Dn(l, n.item);
                        if (!1 !== t) {
                            const s = !0 === t ? 0 : t;
                            if (((n.expired = !0), !e && s > 0))
                                return void (s <= 2147483647 && (n.expirationId = setTimeout(R, s)));
                        }
                    }
                    e && t.some((e) => e.expired) && (P.current.delete(n), u && (S.current = !0), R());
                }
            };
            const y = Ns(e.ctrl, h);
            'leave' === p && u
                ? P.current.set(e, { phase: p, springs: y, payload: h })
                : C.set(e, { phase: p, springs: y, payload: h });
        });
        const T = s.useContext(Bs),
            k = bn(T),
            N = T !== k && Gn(T);
        (pn(() => {
            N &&
                Je(g, (e) => {
                    e.ctrl.start({ default: T });
                });
        }, [T]),
            Je(C, (e, t) => {
                if (P.current.size) {
                    const e = g.findIndex((e) => e.key === t.key);
                    g.splice(e, 1);
                }
            }),
            pn(
                () => {
                    Je(P.current.size ? P.current : C, ({ phase: e, payload: t }, n) => {
                        const { ctrl: s } = n;
                        ((n.phase = e),
                            null == p || p.add(s),
                            N && 'enter' == e && s.start({ default: T }),
                            t &&
                                (Wn(s, t.ref),
                                (!s.ref && !p) || S.current
                                    ? (s.start(t), S.current && (S.current = !1))
                                    : s.update(t)));
                    });
                },
                o ? void 0 : n,
            ));
        const A = (e) =>
            f.createElement(
                f.Fragment,
                null,
                g.map((t, n) => {
                    const { springs: s } = C.get(t) || t.ctrl,
                        r = e({ ...s }, t.item, t, n);
                    return r && r.type
                        ? f.createElement(r.type, {
                              ...r.props,
                              key: Ze.str(t.key) || Ze.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref,
                          })
                        : r;
                }),
            );
        return p ? [A, p] : A;
    }
    var Vs = 1;
    var Gs = class extends us {
        constructor(e, t) {
            (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Ft(...t)));
            const n = this._get(),
                s = Nn(n);
            wn(this, s.create(n));
        }
        advance(e) {
            const t = this._get();
            (Ke(t, this.get()) || (yn(this).setValue(t), this._onChange(t, this.idle)),
                !this.idle && Hs(this._active) && Ws(this));
        }
        _get() {
            const e = Ze.arr(this.source) ? this.source.map(zt) : tt(zt(this.source));
            return this.calc(...e);
        }
        _start() {
            this.idle &&
                !Hs(this._active) &&
                ((this.idle = !1),
                Je(xn(this), (e) => {
                    e.done = !1;
                }),
                Xe.skipAnimation ? (Ae.batchedUpdates(() => this.advance()), Ws(this)) : ht.start(this));
        }
        _attach() {
            let e = 1;
            (Je(tt(this.source), (t) => {
                (qt(t) && Wt(t, this), is(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
            }),
                (this.priority = e),
                this._start());
        }
        _detach() {
            (Je(tt(this.source), (e) => {
                qt(e) && Xt(e, this);
            }),
                this._active.clear(),
                Ws(this));
        }
        eventObserved(e) {
            'change' == e.type
                ? e.idle
                    ? this.advance()
                    : (this._active.add(e.parent), this._start())
                : 'idle' == e.type
                  ? this._active.delete(e.parent)
                  : 'priority' == e.type &&
                    (this.priority = tt(this.source).reduce((e, t) => Math.max(e, (is(t) ? t.priority : 0) + 1), 0));
        }
    };
    function Qs(e) {
        return !1 !== e.idle;
    }
    function Hs(e) {
        return !e.size || Array.from(e).every(Qs);
    }
    function Ws(e) {
        e.idle ||
            ((e.idle = !0),
            Je(xn(e), (e) => {
                e.done = !0;
            }),
            Gt(e, { type: 'idle', parent: e }));
    }
    Xe.assign({ createStringInterpolator: an, to: (e, t) => new Gs(e, t) });
    var Xs = /^--/;
    function Ys(e, t) {
        return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : 'number' != typeof t || 0 === t || Xs.test(e) || (Ks.hasOwnProperty(e) && Ks[e])
              ? ('' + t).trim()
              : t + 'px';
    }
    var Zs = {};
    var Ks = {
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
        Js = ['Webkit', 'Ms', 'Moz', 'O'];
    Ks = Object.keys(Ks).reduce(
        (e, t) => (Js.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
        Ks,
    );
    var er = /^(matrix|translate|scale|rotate|skew)/,
        tr = /^(translate)/,
        nr = /^(rotate|skew)/,
        sr = (e, t) => (Ze.num(e) && 0 !== e ? e + t : e),
        rr = (e, t) => (Ze.arr(e) ? e.every((e) => rr(e, t)) : Ze.num(e) ? e === t : parseFloat(e) === t),
        or = class extends Sn {
            constructor({ x: e, y: t, z: n, ...s }) {
                const r = [],
                    o = [];
                ((e || t || n) &&
                    (r.push([e || 0, t || 0, n || 0]),
                    o.push((e) => [`translate3d(${e.map((e) => sr(e, 'px')).join(',')})`, rr(e, 0)])),
                    et(s, (e, t) => {
                        if ('transform' === t) (r.push([e || '']), o.push((e) => [e, '' === e]));
                        else if (er.test(t)) {
                            if ((delete s[t], Ze.und(e))) return;
                            const n = tr.test(t) ? 'px' : nr.test(t) ? 'deg' : '';
                            (r.push(tt(e)),
                                o.push(
                                    'rotate3d' === t
                                        ? ([e, t, s, r]) => [`rotate3d(${e},${t},${s},${sr(r, n)})`, rr(r, 0)]
                                        : (e) => [
                                              `${t}(${e.map((e) => sr(e, n)).join(',')})`,
                                              rr(e, t.startsWith('scale') ? 1 : 0),
                                          ],
                                ));
                        }
                    }),
                    r.length && (s.transform = new ar(r, o)),
                    super(s));
            }
        },
        ar = class extends Qt {
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
                    Je(this.inputs, (n, s) => {
                        const r = zt(n[0]),
                            [o, a] = this.transforms[s](Ze.arr(r) ? r : n.map(zt));
                        ((e += ' ' + o), (t = t && a));
                    }),
                    t ? 'none' : e
                );
            }
            observerAdded(e) {
                1 == e && Je(this.inputs, (e) => Je(e, (e) => qt(e) && Wt(e, this)));
            }
            observerRemoved(e) {
                0 == e && Je(this.inputs, (e) => Je(e, (e) => qt(e) && Xt(e, this)));
            }
            eventObserved(e) {
                ('change' == e.type && (this._value = null), Gt(this, e));
            }
        };
    Xe.assign({
        batchedUpdates: r.unstable_batchedUpdates,
        createStringInterpolator: an,
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
    var ir = ((
            e,
            {
                applyAnimatedValues: t = () => !1,
                createAnimatedStyle: n = (e) => new Sn(e),
                getComponentProps: s = (e) => e,
            } = {},
        ) => {
            const r = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: s },
                o = (e) => {
                    const t = jn(e) || 'Anonymous';
                    return (
                        ((e = Ze.str(e) ? o[e] || (o[e] = An(e, r)) : e[Mn] || (e[Mn] = An(e, r))).displayName =
                            `Animated(${t})`),
                        e
                    );
                };
            return (
                et(e, (t, n) => {
                    (Ze.arr(e) && (n = jn(t)), (o[n] = o(t)));
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
                        { style: s, children: r, scrollTop: o, scrollLeft: a, viewBox: i, ...l } = t,
                        u = Object.values(l),
                        c = Object.keys(l).map((t) =>
                            n || e.hasAttribute(t)
                                ? t
                                : Zs[t] || (Zs[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                        );
                    void 0 !== r && (e.textContent = r);
                    for (const d in s)
                        if (s.hasOwnProperty(d)) {
                            const t = Ys(d, s[d]);
                            Xs.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                        }
                    (c.forEach((t, n) => {
                        e.setAttribute(t, u[n]);
                    }),
                        void 0 !== o && (e.scrollTop = o),
                        void 0 !== a && (e.scrollLeft = a),
                        void 0 !== i && e.setAttribute('viewBox', i));
                },
                createAnimatedStyle: (e) => new or(e),
                getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
            },
        ),
        lr = ir.animated;
    function ur() {
        const e = s.useRef(0);
        return (
            ke(() => {
                window.cancelAnimationFrame(e.current);
            }),
            s.useMemo(
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
    const cr = new WeakMap(),
        dr = 0,
        mr = { await: 'await', idle: 'idle', display: 'display' };
    function pr({ resId: e = dr, contentId: t, decoratorId: n, disabled: r, args: o, showDelay: a = 400 }) {
        const i = s.useRef({ status: mr.idle, resId: e, timeoutId: 0 }),
            [l, u] = s.useMemo(() => {
                let s = null;
                function l() {
                    r ||
                        ((i.current.status = mr.await),
                        window.clearTimeout(i.current.timeoutId),
                        (i.current.timeoutId = window.setTimeout(u, a)));
                }
                function u() {
                    ((i.current.status = mr.display), Z.tooltip.open(e, t, n, o), s && cr.set(s, d));
                }
                function c() {
                    if (
                        (window.clearTimeout(i.current.timeoutId),
                        i.current.status === mr.display && Z.tooltip.hide(e, t, n),
                        (i.current.status = mr.idle),
                        s)
                    ) {
                        cr.delete(s);
                        let e = s.parentElement;
                        for (; e && !cr.has(e); ) e = e.parentElement;
                        if (e) {
                            cr.get(e).show();
                        }
                        s = null;
                    }
                }
                const d = {
                    hide: c,
                    show: u,
                    rerun: function () {
                        i.current.status !== mr.idle && (r ? d.hide() : l());
                    },
                };
                return [
                    d,
                    {
                        onMouseEnter: (e) => {
                            ((s = null == e ? void 0 : e.currentTarget), l());
                        },
                        onMouseLeave: r ? ne : c,
                        onClick: r ? ne : c,
                    },
                ];
            }, [o, t, n, r, e, a]);
        return (
            s.useEffect(() => {
                l.rerun();
            }, [l]),
            ke(Te(l.hide)),
            u
        );
    }
    function fr({ alert: e, body: t, header: n, note: r, hasHtmlContent: o, disabled: a }) {
        const i = h.resolve('views');
        return pr({
            disabled: a,
            contentId: i.read((e) =>
                o
                    ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                    : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
            ),
            decoratorId: i.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
            args: s.useMemo(() => ({ body: t, header: n, note: r, alert: e }), [e, t, n, r]),
        });
    }
    const hr = {
        click: gr('play'),
        'hot-key': gr('play'),
        'mouse-enter': gr('highlight'),
        increaseAmount: gr('cons_ammo_single_plus'),
        decreaseAmount: gr('cons_ammo_single_minus'),
        increaseAmountRoll: gr('cons_ammo_roll_plus'),
        decreaseAmountRoll: gr('cons_ammo_roll_minus'),
        close: gr('cancelcloseno'),
        'show-context-menu': gr('tabb'),
        progressSimple: gr('gui_hangar_progressbar_simple'),
        increaseDelta: gr('gui_hangar_progressbar_delta_increase'),
        decreaseDelta: gr('gui_hangar_progressbar_delta_decrease'),
        increaseDeltaMax: gr('gui_hangar_progressbar_delta_max'),
        pointerGrab: gr('gui_hangar_progressbar_pointer_grab'),
        pointerDrag: gr('gui_hangar_progressbar_pointer_drag'),
    };
    function gr(e) {
        return () => {
            z.sound(e);
        };
    }
    const _r = s.createContext(null);
    function br({ severity: t = 'warn', overrides: n, silent: r = !1, children: o }) {
        const a = s.useMemo(() => ({ ...hr, ...n }), [n]),
            i = s.useMemo(
                () => ({
                    play: function (e, n) {
                        if (r) return;
                        const s = a[e];
                        s
                            ? s(n)
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
                    settings: { plays: a, severity: t, silent: r },
                }),
                [a, t, r],
            );
        return e.jsx(_r.Provider, { value: i, children: o });
    }
    function vr() {
        const e = s.useContext(_r);
        if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
        return e;
    }
    const yr = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
        wr = new Set(['number', 'string', 'boolean', 'bigint']),
        xr = new Set(['Dict']);
    function Rr(e, { shallow: t = !0, depth: n = 0, maxDepth: s = 32 } = {}) {
        var r, o;
        const a = e,
            i = typeof e;
        if (n > s) throw new Error(`Too deeply nested to copy. Max is ${s}.`);
        if (yr.has(i)) return a;
        if (null === a) return a;
        const l = { depth: n + 1, maxDepth: s };
        if (Array.isArray(a)) return a.map((e) => Rr(e, l));
        if ('object' === i) {
            const s = (null == (r = a.constructor) ? void 0 : r.name) ?? 'UNKNOWN';
            if (Array.isArray(e)) return e.map((e) => Rr(e, l));
            if ('CoherentArrayProxy' === s) return e.map((e) => Rr(e.value, l));
            if ('Dict' === s) return;
            if ('UNKNOWN' === s) return;
            if (s.includes(':ViewModel:') || 'Object' === s) {
                if (t && 0 === n) {
                    const e = {};
                    for (const t in a) {
                        const n = a[t];
                        wr.has(typeof n) && (e[t] = n);
                    }
                    return e;
                }
                {
                    const e = {};
                    for (const t in a) {
                        const n = a[t],
                            s = (null == (o = null == a ? void 0 : a.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                        xr.has(s) || (e[t] = Rr(n, l));
                    }
                    return e;
                }
            }
            const i = {};
            for (const e of Object.keys(a)) i[e] = Rr(a[e], l);
            return i;
        }
        return (console.error('Incorrect value to clone model', a), a);
    }
    const Er = { deep: !1, equals: re },
        Cr = { cloneItem: !0 },
        Pr = { shallow: !1 };
    class Sr {
        constructor(e, t = Cr) {
            (m(this, '_data'),
                m(this, '_keys'),
                m(
                    this,
                    'set',
                    n.action((e) => {
                        this._data.set(e);
                    }),
                ),
                (this.options = t));
            const s = {},
                r = e.keys();
            for (let o = 0; o < r.length; o++) {
                const t = r[o];
                s[t] = n.observable.box(this.takeItem(e, t), Er);
            }
            ((this._keys = n.observable.set(new Set(r))), (this._data = n.observable.box(s, Er)));
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
            const s = this._data.get();
            for (let r = 0; r < t.length; r++) {
                const o = t[r],
                    a = this.takeItem(e, o);
                o in s
                    ? null === a
                        ? (delete s[o], this._keys.delete(o), this.set(s))
                        : s[o].set(a)
                    : null !== a && ((s[o] = n.observable.box(a, Er)), this._keys.add(o), this.set(s));
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
            for (const s of this.keys.values()) t.push(e(n[s].get(), s));
            return t;
        }
        reduce(e, t) {
            let n = t;
            const s = this._data.get();
            for (const r of this.keys.values()) n = e(n, s[r].get(), r);
            return n;
        }
        takeItem(e, t) {
            const n = e.get(t);
            return this.options.cloneItem ? Rr(n, Pr) : n;
        }
        untrackedData() {
            return n.untracked(() => this._data.get());
        }
    }
    const Tr = s.createContext({ mode: 'real' });
    const kr = { equals: re, deep: !1 };
    function Nr(e, t, s) {
        const r = [];
        e.events.subscribersNotified.on(
            n.action(() => {
                for (const e of r) e();
                r.splice(0, r.length);
            }),
        );
        const o = (o, a, i = kr) => {
                const l = n.observable.box(o(s(a)), i);
                return ('real' === t && e.subscribe((e) => r.push(() => l.set(o(e))), a), l);
            },
            a = (n, o) => {
                const a = new Sr(s(n), o);
                return ('real' === t && e.subscribe((e, t) => r.push(() => a.update(e, t)), n), a);
            },
            i = (o, a) => {
                const i = n.observable.box(s(o) ?? a, kr);
                return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), o), i);
            };
        return {
            dict: a,
            dictRef: (e, t) => a(e, { cloneItem: !1, ...t }),
            arrayClone: (e) => o(Rr, e),
            array: i,
            object: i,
            transform: o,
            primitives: (o, a) => {
                const i = s(a);
                if (Array.isArray(o)) {
                    const s = o.reduce((e, t) => ((e[t] = n.observable.box(i[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                r.push(() =>
                                    o.forEach((t) => {
                                        s[t].set(e[t]);
                                    }),
                                );
                            }, a),
                        s
                    );
                }
                {
                    const s = o,
                        l = Object.entries(s),
                        u = l.reduce((e, [t, s]) => ((e[s] = n.observable.box(i[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                r.push(() =>
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
    o.computedFn;
    const Ar = (e, t) => o.computedFn(e, { equals: n.comparer.structural, ...t }),
        Ir = (e) => (t) => {
            e.forEach((e) =>
                ((e, t) => {
                    e && ('function' == typeof e ? e(t) : (e.current = t));
                })(e, t),
            );
        };
    s.forwardRef(function (t, n) {
        const r = s.useRef(null);
        return (
            s.useEffect(() => {
                const e = r.current;
                if (null !== e)
                    return G.onHitTest((t) => {
                        const n = e.getBoundingClientRect();
                        return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                    });
            }, []),
            e.jsx('div', { ...t, ref: Ir([n, r]) })
        );
    });
    const Mr = { Text: 1, Tag: 2, Var: 3 };
    function jr(e, t) {
        const n = [],
            s = [];
        let r = '',
            o = !1,
            a = '',
            i = 0;
        for (let l = 0; l < e.length; l++) {
            const u = e[l];
            if (u === t.start[0] && e.slice(l, l + t.start.length) === t.start) {
                if (r) {
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push({ type: Mr.Text, value: r });
                    } else n.push({ type: Mr.Text, value: r });
                    r = '';
                }
                ((o = !0), (l += t.start.length - 1));
            } else if (u === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                ((o = !1), (l += t.end.length - 1));
                const e = a.trim();
                if (e.startsWith('@')) {
                    const t = e.slice(1).trim(),
                        r = { type: Mr.Tag, attrs: t.split('|'), instanceId: ++i, children: [] };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(r);
                    } else n.push(r);
                    s.push({ node: r, startIndex: n.length });
                } else if ('/' === e) s.length > 0 && s.pop();
                else {
                    const t = { type: Mr.Var, instanceId: ++i, name: e };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(t);
                    } else n.push(t);
                }
                a = '';
            } else o ? (a += u) : (r += u);
        }
        if (r)
            if (s.length) {
                s[s.length - 1].node.children.push({ type: Mr.Text, value: r });
            } else n.push({ type: Mr.Text, value: r });
        return n;
    }
    const Dr = {
            COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
            base: 'FormatText_db904f12',
            base__fullSize: 'FormatText_base__fullSize_a514958e',
            nowrap: 'FormatText_nowrap_ff69eca3',
        },
        Or = new Set((null == (l = Dr.COLORS) ? void 0 : l.split(', ')) ?? []);
    let Br = 0;
    function Fr() {
        return ++Br;
    }
    const $r =
        /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
    function Lr(t) {
        const n = h.resolve('langCode');
        return (function (e, t, n) {
            return ye.has(t) ? e.map(n) : e.map((e, t, s) => (t === s.length - 1 ? n(e, t, s) : n(`${e} `, t, s)));
        })(
            (function (e, t) {
                return (be[t] ?? ve)(e);
            })(t, n),
            n,
            (t, n) => t && e.jsx('span', { children: t }, `${t}${n}`),
        );
    }
    function Ur(t) {
        return Array.isArray(t)
            ? (function (t) {
                  const n = [];
                  for (let r = 0; r < t.length; r++) {
                      const o = t[r],
                          a = t[r + 1];
                      if ('string' != typeof a || !$r.test(a)) {
                          n.push(Ur(o));
                          continue;
                      }
                      const i = Lr(a.slice(1));
                      (n.push(
                          e.jsxs(
                              s.Fragment,
                              { children: [e.jsxs('span', { className: Dr.nowrap, children: [Ur(o), a[0]] }), i] },
                              Fr(),
                          ),
                      ),
                          (r += 1));
                  }
                  return n;
              })(t)
            : 'string' == typeof t
              ? e.jsx(s.Fragment, { children: Lr(t) }, Fr())
              : t;
    }
    const qr = {
        class: function (t, ...n) {
            return e.jsx(
                'span',
                { className: n.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: t },
                Fr(),
            );
        },
        colorLegacy: function (t, n) {
            const s = Fr();
            return Or.has(String(n))
                ? e.jsx('span', { className: `FormatText_colorLegacy__${n}`, children: t }, s)
                : e.jsx('span', { style: { color: `#${n}` }, children: t }, s);
        },
        bold: (e) => ['fontWeight', 'bold'],
        split: Ur,
        style: function (t, ...n) {
            return e.jsx(
                'span',
                {
                    style: n.reduce((e, s) => {
                        if (Array.isArray(s)) {
                            const [t, n] = s;
                            return ((e[t] = n), e);
                        }
                        return (console.warn(`Invalid argument ${s} in ${t}: ${n}`), e);
                    }, {}),
                    children: t,
                },
                Fr(),
            );
        },
        color: (e, t) => ['color', t],
        fontSize: (e, t) => ['fontSize', t],
        fontWeight: (e, t) => ['fontWeight', t],
        textDecoration: (e, t) => ['textDecoration', t],
    };
    function zr(e, t, n, s) {
        const r = n.map((t) => {
                if ('string' != typeof t) return t;
                const n = t.trim();
                if (n.startsWith('(') && n.endsWith(')')) {
                    const [t, ...r] = n.slice(1, -1).split(' ');
                    return t ? zr(e, t, r, s) : e;
                }
                return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
            }),
            o = s[t];
        return o ? o(e, ...r) : (console.error(`Function ${t} is not registered`), e);
    }
    function Vr(e, t, n) {
        return e.reduce((e, t) => {
            const [s, ...r] = (function (e) {
                const t = [];
                let n = '',
                    s = !1,
                    r = !1,
                    o = '';
                for (let a = 0; a < e.length; a++) {
                    const i = e[a];
                    ("'" !== i && '"' !== i) || r || s
                        ? i === o && r
                            ? ((r = !1), (n += i))
                            : '(' !== i || r
                              ? ')' === i && s && !r
                                  ? ((s = !1), (n += i))
                                  : ' ' !== i || s || r
                                    ? (n += i)
                                    : n && (t.push(n), (n = ''))
                              : ((s = !0), (n += i))
                        : ((r = !0), (o = i), (n += i));
                }
                return (n && t.push(n), t);
            })(t.trim());
            return s ? zr(e, s, r, n) : e;
        }, t);
    }
    function Gr(e) {
        return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
    }
    function Qr(e, t) {
        for (let n = 0; n < e.length; n++) {
            if ('$' === e[n]) {
                let s = n + 1;
                for (; s < e.length && !Gr(e[s]); ) s++;
                const r = e.slice(n + 1, s),
                    o = t[r];
                if (o) return Qr(e.replace(`$${r}`, String(o)), t);
            }
        }
        return e;
    }
    function Hr(e, t) {
        const n = [];
        for (let s = 0; s < e.length; s++) n[s] = Qr(e[s], t);
        return n;
    }
    const Wr = ['number', 'string', 'undefined'];
    function Xr(t, n, r = {}, o = !0) {
        o && (Br = 0);
        const a = [];
        function i(e) {
            if (Wr.includes(typeof e)) {
                const t = a.at(-1);
                if ('string' == typeof t) return void (a[a.length - 1] = t + e);
            }
            a.push(e);
        }
        for (const l of t)
            if (l.type === Mr.Text) i(l.value);
            else if (l.type === Mr.Var)
                null === r[l.name] || Wr.includes(typeof r[l.name])
                    ? i(r[l.name] ?? `{{${l.name}}}`)
                    : a.push(e.jsx(s.Fragment, { children: r[l.name] }, `var-${l.name}-${l.instanceId}`));
            else if (l.type === Mr.Tag) {
                const e = Xr(l.children, n, r, !1),
                    t = Vr(Hr(l.attrs, r), e, n);
                a.push(t);
            }
        return a;
    }
    function Yr(e) {
        return e
            .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
            .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
    }
    function Zr(e) {
        return e
            .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
            .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
    }
    function Kr(e) {
        return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
    }
    function Jr(e) {
        return (function (e, t, n, s, r, o, a, i, l) {
            switch (arguments.length) {
                case 1:
                    return e;
                case 2:
                    return t(e);
                case 3:
                    return n(t(e));
                case 4:
                    return s(n(t(e)));
                case 5:
                    return r(s(n(t(e))));
                case 6:
                    return o(r(s(n(t(e)))));
                case 7:
                    return a(o(r(s(n(t(e))))));
                case 8:
                    return i(a(o(r(s(n(t(e)))))));
                case 9:
                    return l(i(a(o(r(s(n(t(e))))))));
                default: {
                    let e = arguments[0];
                    for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
                    return e;
                }
            }
        })(e, Kr, Yr, Zr);
    }
    const eo = { start: '{{', end: '}}' },
        to = s.memo(function (t) {
            const {
                    brackets: n = eo,
                    text: r,
                    params: o,
                    upgradeLegacy: a,
                    fullSize: i,
                    inline: l,
                    formatters: u,
                    split: c,
                    ...d
                } = t,
                m = s.useMemo(() => (t.upgradeLegacy ? Jr(t.text) : t.text), [t.text, t.upgradeLegacy]),
                p = s.useMemo(() => (t.formatters ? { ...qr, ...t.formatters } : qr), [t.formatters]),
                f = s.useMemo(() => jr(c ? `{{@ split}}${m}{{/}}` : m, n), [n, m, c]),
                h = s.useMemo(() => Xr(f, p, t.params), [f, p, t.params]),
                g = M(Dr.base, i && Dr.base__fullSize, d.className);
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
                      children: h,
                  }))
                : e.jsx('span', { ...d, className: g, children: h });
        });
    function no({ path: t, ...n }) {
        return e.jsx(to, { text: h.resolve('strings').readOrEmpty(t), ...n });
    }
    function so(t) {
        return e.jsx(e.Fragment, { children: t.children });
    }
    const ro = () => {};
    function oo(t) {
        const n = t;
        return s.forwardRef(function (t, s) {
            const r = a.useAdaptive(t, t.adaptive),
                { path: o, ...i } = r,
                l = r.images ?? h.resolve('images'),
                u = { ...i, ref: s };
            {
                const t = o ? l.readOr(o, ro, 'warn') : void 0;
                return t ? e.jsx(n, { ...u, src: t }) : e.jsx(n, { ...u, unknown: !0 });
            }
        });
    }
    const ao = {
            background:
                'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
            backgroundSize: '20rem 20rem',
            backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
            backgroundColor: '#000',
        },
        io = oo(
            s.forwardRef(function (t, n) {
                if (t.unknown) {
                    const {
                        repeat: s,
                        fit: r,
                        position: o,
                        width: a,
                        src: i,
                        height: l,
                        unselectable: u,
                        unknown: c,
                        unknownStyle: d = ao,
                        ...m
                    } = t;
                    return e.jsx('div', {
                        ...m,
                        ref: n,
                        style: { width: t.width, height: t.height, ...d, ...t.style },
                    });
                }
                const {
                    repeat: s,
                    fit: r,
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
                        backgroundRepeat: s ?? 'no-repeat',
                        backgroundSize: r ?? 'contain',
                        backgroundPosition: o ?? 'center center',
                        width: 'number' == typeof a ? `${a}rem` : a,
                        height: 'number' == typeof i ? `${i}rem` : i,
                        ...d.style,
                    },
                });
            }),
        );
    oo(
        s.forwardRef(function (t, n) {
            const { width: s, height: r, src: o, unselectable: a, unknown: i, unknownStyle: l = ao, ...u } = t;
            return t.unknown
                ? e.jsx('div', { ...u, style: { width: t.width, height: t.height, ...l } })
                : e.jsx('img', { ...u, ref: n, src: o, width: s, height: r });
        }),
    );
    const lo = 'TruncateText_dcb41d92',
        uo = s.forwardRef(function ({ text: t, tooltipParams: n, className: r, ...o }, a) {
            const i = fr({ header: null == n ? void 0 : n.header, body: (null == n ? void 0 : n.body) || t }),
                l = s.useRef(null),
                [u, c] = s.useState(!1);
            const d = s.useCallback(() => {
                if (l.current) {
                    const { scrollWidth: e, offsetWidth: t } = l.current;
                    c(e > t);
                }
            }, []);
            var m, p;
            return (
                s.useEffect(() => {
                    u || i.onMouseLeave();
                }, [u, i]),
                (m = d),
                (p = [d]),
                s.useEffect(() => {
                    let e,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((t = null), (e = m()));
                            });
                        })),
                        () => {
                            ('function' == typeof e && e(), null !== t && cancelAnimationFrame(t));
                        }
                    );
                }, p),
                (function (e, t) {
                    s.useEffect(() => {
                        let t = () => {};
                        const n = () => {
                            (t(), (t = pe(e)));
                        };
                        return (
                            window.addEventListener('resize', n),
                            () => {
                                (t(), window.removeEventListener('resize', n));
                            }
                        );
                    }, t);
                })(d, [d]),
                ((e, t, n = !0) => {
                    const r = Te((e) => {
                        const n = e[0];
                        n && t(n);
                    });
                    s.useEffect(() => {
                        if (!e.current || !n) return;
                        const t = new ResizeObserver((e) => r(e));
                        return (
                            t.observe(e.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [r, n, e]);
                })(l, d),
                e.jsx('div', {
                    ...o,
                    ref: function (e) {
                        ((l.current = e), 'function' == typeof a ? a(e) : a && (a.current = e));
                    },
                    className: M(lo, r),
                    ...(u ? i : {}),
                    children: t,
                })
            );
        });
    function co(e) {
        var t,
            n,
            s = '';
        if ('string' == typeof e || 'number' == typeof e) s += e;
        else if ('object' == typeof e)
            if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = co(e[t])) && (s && (s += ' '), (s += n));
            else for (t in e) e[t] && (s && (s += ' '), (s += t));
        return s;
    }
    const mo = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
        po = function () {
            for (var e, t, n = 0, s = ''; n < arguments.length; )
                (e = arguments[n++]) && (t = co(e)) && (s && (s += ' '), (s += t));
            return s;
        },
        fo = (e, t) => (n) => {
            var s;
            if (null == (null == t ? void 0 : t.variants))
                return po(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: r, defaultVariants: o } = t,
                a = Object.keys(r).map((e) => {
                    const t = null == n ? void 0 : n[e],
                        s = null == o ? void 0 : o[e];
                    if (null === t) return null;
                    const a = mo(t) || mo(s);
                    return r[e][a];
                }),
                i =
                    n &&
                    Object.entries(n).reduce((e, t) => {
                        let [n, s] = t;
                        return (void 0 === s || (e[n] = s), e);
                    }, {}),
                l =
                    null == t || null === (s = t.compoundVariants) || void 0 === s
                        ? void 0
                        : s.reduce((e, t) => {
                              let { class: n, className: s, ...r } = t;
                              return Object.entries(r).every((e) => {
                                  let [t, n] = e;
                                  return Array.isArray(n) ? n.includes({ ...o, ...i }[t]) : { ...o, ...i }[t] === n;
                              })
                                  ? [...e, n, s]
                                  : e;
                          }, []);
            return po(e, a, l, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        };
    function ho(t, n, r) {
        var o;
        const a =
                'object' == typeof n && 'cva' in n
                    ? null == (o = n.cva)
                        ? void 0
                        : o.variants
                    : null == r
                      ? void 0
                      : r.variants,
            i = a ? Object.keys(a) : [];
        if ('object' == typeof n) {
            const e = n,
                r = fo(e.className, e.cva),
                o = e.element,
                a = s.forwardRef(function (e, t) {
                    return s.createElement(o, { ...('function' == typeof o ? e : go(i, e)), ref: t, className: r(e) });
                });
            return ((a.displayName = t), e.cva && (a.cva = e.cva), a);
        }
        const l = fo(n, r),
            u = s.forwardRef(function (n, s) {
                return e.jsx('div', { 'data-name': t, ...go(i, n), ref: s, className: l(n) });
            });
        return ((u.displayName = t), r && (u.cva = r), u);
    }
    function go(e, t) {
        if (0 === e.length) return t;
        const n = { ...t };
        for (const s of e) delete n[s];
        return n;
    }
    const _o = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
        bo = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
        vo = ho('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
        yo = s.forwardRef(function (
            { children: t, onClick: n, onMouseEnter: s, soundTarget: r, disabled: o = !1, silent: a = !1, ...i },
            l,
        ) {
            const u = vr();
            return e.jsx(vo, {
                ...i,
                ref: l,
                onMouseEnter: function (e) {
                    (o || a || u.play('mouse-enter', { target: r || 'Button', original: e }), null == s || s(e));
                },
                onClick: function (e) {
                    o || (a || u.play('click', { target: r || 'Button', original: e }), null == n || n(e));
                },
                children: t,
            });
        }),
        wo = {
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
        xo = s.forwardRef(function (
            {
                children: t,
                size: n = bo.large,
                theme: s = _o.primary,
                disabled: r = !1,
                silent: o = !1,
                autoAlignContent: a = !0,
                classNames: i,
                className: l,
                ...u
            },
            c,
        ) {
            return e.jsxs(yo, {
                ...u,
                ref: c,
                silent: o,
                disabled: r,
                className: M(
                    wo.base,
                    wo[`base__size-${n}`],
                    wo[`base__theme-${s}`],
                    r ? wo.base__disabled : wo.base__enabled,
                    l,
                    null == i ? void 0 : i.base,
                ),
                onClick: function (e) {
                    var t;
                    r || null == (t = u.onClick) || t.call(u, e);
                },
                children: [
                    e.jsx('div', { className: M(wo.background, null == i ? void 0 : i.background) }),
                    e.jsx('div', { className: M(wo.border, null == i ? void 0 : i.border) }),
                    e.jsx('div', { className: M(wo.overlay, null == i ? void 0 : i.overlay) }),
                    e.jsx('div', {
                        className: M(wo.content, a && wo.content__fontAligned, null == i ? void 0 : i.content),
                        children: t,
                    }),
                ],
            });
        });
    ((xo.themes = _o), (xo.sizes = bo));
    const Ro = 'Action_6c7b0c76',
        Eo = 'Action_icon_7d5aed3b',
        Co = s.forwardRef(function ({ className: t, theme: n = xo.themes.secondary, tooltipParams: s, ...r }, o) {
            const a = fr({
                alert: null == s ? void 0 : s.alert,
                header: null == s ? void 0 : s.header,
                body: null == s ? void 0 : s.body,
                note: null == s ? void 0 : s.note,
            });
            return e.jsx(xo, {
                ...r,
                ref: o,
                onClick: (e) => {
                    (r.onClick(e), s && a.onClick());
                },
                onMouseEnter: (e) => {
                    var t;
                    (null == (t = r.onMouseEnter) || t.call(r, e), s && a.onMouseEnter(e));
                },
                onMouseLeave: (e) => {
                    var t;
                    (null == (t = r.onMouseLeave) || t.call(r, e), s && a.onMouseLeave());
                },
                autoAlignContent: !1,
                theme: n,
                className: M(Ro, t),
                children: e.jsx(io, { width: 10, height: 20, path: 'post_battle.progression.arrow', className: Eo }),
            });
        }),
        Po = 'Header_background_91826dd5',
        So = 'Header_mask_afb9c38d',
        To = 'Header_border_c6b1d37f',
        ko = ho('CardHeader', 'Header_1c2ee301'),
        No = s.forwardRef(function ({ classNames: t, className: n, ...s }, r) {
            return e.jsxs(ko, {
                ...s,
                className: M(null == t ? void 0 : t.base, n),
                ref: r,
                children: [
                    e.jsx('div', { className: M(Po, null == t ? void 0 : t.background) }),
                    e.jsx('div', { className: M(So, null == t ? void 0 : t.mask) }),
                    e.jsx('div', { className: M(To, null == t ? void 0 : t.border) }),
                    s.children,
                ],
            });
        }),
        Ao = ho('CardTitle', 'Title_e5ecf295'),
        Io = s.forwardRef(function (t, n) {
            return e.jsx(Ao, { ...t, ref: n, children: t.children });
        }),
        Mo = 'Card_content_f7ddaa4a',
        jo = ho('Card', 'Card_3f55e450'),
        Do = ho('CardContent', Mo),
        Oo = s.forwardRef(function (t, n) {
            return e.jsx(jo, { ...t, ref: n, children: t.children });
        });
    ((Oo.Header = No), (Oo.Content = Do), (Oo.Action = Co), (Oo.Title = Io));
    const Bo = { base: 'AnimatedValue_d9f4b2f0', animatedValue: 'AnimatedValue_animatedValue_4c490d83' },
        Fo = j.cubicBezier(0.33, 0, 0.25, 1),
        $o = 330,
        Lo = 330;
    function Uo(e) {
        return {
            enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
            leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
        };
    }
    function qo({ value: t, transition: n, children: r, className: o, classNames: a }) {
        const i = s.useMemo(we, []),
            l = zs(t, {
                ...n,
                initial: { opacity: 1, y: '0rem', ...(null == n ? void 0 : n.initial) },
                from: { opacity: 0, y: '-5rem', ...(null == n ? void 0 : n.from) },
                enter: () => ({
                    opacity: 1,
                    y: '0rem',
                    delay: Lo,
                    config: { easing: Fo, duration: $o },
                    onStart: () => {
                        const { enterElements: e, leftElements: t } = Uo(i);
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
                    config: { easing: Fo, duration: $o },
                    onStart: () => {
                        let e = 0;
                        const { enterElements: t, leftElements: n } = Uo(i);
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
            className: M(Bo.base, o),
            children: l((n, s) => {
                const o = 0 === n.opacity.get() && !1 === n.opacity.isAnimating;
                return e.jsx(lr.div, {
                    className: M(
                        Bo.animatedValue,
                        `js-animated-value-${i}-${t === s ? 'enter' : 'leave'}`,
                        null == a ? void 0 : a.animatedValue,
                    ),
                    style: { ...n, position: o ? 'absolute' : 'relative' },
                    children: r(s),
                });
            }),
        });
    }
    const zo = {
            base: 'ProgressCount_3c6daa70',
            label: 'ProgressCount_label_d15406bd',
            total: 'ProgressCount_total_4f222a62',
            divider: 'ProgressCount_divider_487d7768',
        },
        Vo = h.resolve('intl');
    function Go({ withLabel: e, withoutLimit: t }) {
        return t
            ? 'battle_results.progression.missionsCompleteCounter'
            : 'battle_results.progression.completedPointsFrom.' + (e ? 'withLabel' : 'withoutLabel');
    }
    function Qo({ current: t, total: n, withLabel: s, withoutLimit: r, className: o, classNames: a }) {
        return e.jsx(no, {
            path: Go({ withLabel: s, withoutLimit: r }),
            className: M(zo.base, o),
            params: {
                completed: Vo.formatNumber('integral', t),
                total: Vo.formatNumber('integral', n),
                totalClass: M(zo.total, null == a ? void 0 : a.total),
                labelClass: s && M(zo.label, null == a ? void 0 : a.label),
            },
        });
    }
    function Ho({
        current: t,
        total: n,
        withLabel: r,
        className: o,
        classNames: a,
        transitionCurrent: i,
        transitionTotal: l,
    }) {
        const u = vr(),
            c = s.useRef({ transitionCurrent: i, transitionTotal: l });
        return (
            s.useEffect(() => {
                c.current = { transitionCurrent: i, transitionTotal: l };
            }, [i, l]),
            e.jsx(no, {
                path: 'battle_results.progression.completedPointsFrom.' + (r ? 'withLabel' : 'withoutLabel'),
                className: M(zo.base, o),
                params: {
                    completed: e.jsx(qo, {
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
                        children: se,
                    }),
                    total: e.jsx(qo, {
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
                        children: se,
                    }),
                    totalClass: M(zo.total, null == a ? void 0 : a.total),
                    labelClass: r && M(zo.label, null == a ? void 0 : a.label),
                    dividerClass: zo.divider,
                },
            })
        );
    }
    const Wo = {
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
    function Xo({
        title: t,
        titleImageProps: n,
        disabled: s,
        actionTooltipParams: r,
        onHeaderClick: o,
        onButtonAction: a,
        children: i,
        progressionCountProps: l,
        className: u,
        classNames: c,
        ...d
    }) {
        var m, p, f;
        return e.jsxs(Oo, {
            className: M(Wo.card, s && Wo.card__disabled, u),
            ...d,
            children: [
                e.jsxs(Oo.Header, {
                    onClick: o,
                    className: M(Wo.cardHeader, null == (m = null == c ? void 0 : c.header) ? void 0 : m.base),
                    classNames: {
                        ...(null == c ? void 0 : c.header),
                        background: M(
                            Wo.cardHeaderBackground,
                            null == (p = null == c ? void 0 : c.header) ? void 0 : p.background,
                        ),
                        border: M(Wo.cardHeaderBorder, null == (f = null == c ? void 0 : c.header) ? void 0 : f.border),
                    },
                    children: [
                        e.jsxs('div', {
                            className: M(Wo.head, null == c ? void 0 : c.head),
                            children: [
                                e.jsxs('div', {
                                    className: Wo.titleContainer,
                                    children: [
                                        void 0 !== n && e.jsx(io, { ...n }),
                                        e.jsx(Oo.Title, {
                                            className: M(Wo.title, null == c ? void 0 : c.title),
                                            children: e.jsx(uo, { text: t }),
                                        }),
                                    ],
                                }),
                                void 0 !== a &&
                                    e.jsx(Oo.Action, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), a(e));
                                        },
                                        className: M(Wo.action, null == c ? void 0 : c.action),
                                        tooltipParams: r,
                                    }),
                            ],
                        }),
                        e.jsx('div', {
                            className: M(Wo.tail, null == c ? void 0 : c.tail),
                            children: void 0 !== l && e.jsx(Qo, { ...l }),
                        }),
                    ],
                }),
                void 0 !== i &&
                    e.jsx(Oo.Content, { className: M(Wo.content, null == c ? void 0 : c.content), children: i }),
                e.jsx('div', { className: Wo.divider }),
            ],
        });
    }
    function Yo(e) {
        return (
            !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
            (!s.isValidElement(e) && !!Array.isArray(e) && e.every(Yo))
        );
    }
    const Zo = 'MultilineOverflow_8834bd8e',
        Ko = 'MultilineOverflow_content_b539970d';
    const Jo = s.forwardRef(function (
        {
            text: t,
            brackets: n,
            params: r,
            formatters: o,
            upgradeLegacy: a,
            split: i = !0,
            onMouseEnter: l,
            onMouseLeave: u,
            onClick: c,
            tooltipDisabled: d = !1,
            tooltip: m,
            className: p,
            classNames: f,
            ...g
        },
        _,
    ) {
        const b = s.useRef(null),
            [v, y] = s.useState(!1);
        s.useEffect(() => {
            if (0 === t.length) return;
            const e = b.current;
            if (!e) return;
            const n = document.createElement('div');
            let s = ne;
            function r() {
                if (!e) return;
                (s(),
                    (n.style.visibility = 'hidden'),
                    (n.className = M(Ko, e.children[0].className)),
                    (n.innerHTML = ''),
                    e.appendChild(n));
                for (let s of e.children[0].childNodes.values()) {
                    if (s instanceof HTMLElement) {
                        const e = s.cloneNode(!0);
                        n.appendChild(e);
                    }
                    if (s.nodeType === Node.TEXT_NODE) {
                        const e = document.createTextNode(s.nodeValue ?? '');
                        n.appendChild(e);
                    }
                }
                const t = document.createElement('div');
                ((t.innerHTML = '...'),
                    n.appendChild(t),
                    (s = pe(() => {
                        var s, r;
                        const o = [];
                        for (let t = n.childNodes.length - 2; 0 !== t; t--) {
                            const s = n.childNodes[t];
                            if (s instanceof HTMLElement) {
                                if (s.offsetTop + s.offsetHeight <= e.offsetHeight) break;
                                o.push(s);
                            }
                        }
                        o.forEach((e) => e.remove());
                        const a = null == (s = n.lastChild) ? void 0 : s.previousSibling;
                        (0 === o.length
                            ? (null == (r = n.lastChild) || r.remove(), y(!1))
                            : a.offsetWidth + a.offsetLeft + t.offsetWidth > e.offsetWidth
                              ? (a.remove(), y(!0))
                              : y(!0),
                            (n.style.visibility = ''));
                    })));
            }
            const o = new ResizeObserver(r);
            return (
                o.observe(e),
                new ae()
                    .add(() => s())
                    .add(ie(window, 'resize', r))
                    .add(o.disconnect.bind(o))
                    .add(n.remove.bind(n)).dispose
            );
        }, [_, t]);
        const w = (function (e) {
                return !e || Object.values(e).every(Yo);
            })(r),
            x = (function (e, t, n) {
                return pr({
                    ...n,
                    disabled: null == n ? void 0 : n.disabled,
                    contentId: h.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
                    args: s.useMemo(() => ({ type: e, params: JSON.stringify(t), resId: t.resId }), [t, e]),
                });
            })(
                'format_text',
                s.useMemo(
                    () => ({
                        text: t,
                        params: w ? r : void 0,
                        split: i,
                        upgradeLegacy: a,
                        brackets: n,
                        resId: h.resolve('views').read((e) => e.mono.tooltips.tooltips('resId')),
                    }),
                    [t, n, i, a, r, w],
                ),
            ),
            R = m ?? x;
        if (
            (s.useEffect(() => {
                d || v || R.onMouseLeave();
            }, [v, R, m, d, w]),
            0 === t.length)
        )
            return null;
        return e.jsx('div', {
            ...g,
            onMouseEnter: function (e) {
                (null == l || l(e), v && !d && R.onMouseEnter(e));
            },
            onClick: function (e) {
                (null == c || c(e), d || R.onClick());
            },
            onMouseLeave: function (e) {
                (null == u || u(e), d || R.onMouseLeave());
            },
            ref: Ir([_, b]),
            className: M(Zo, p, null == f ? void 0 : f.base),
            children: e.jsx(to, {
                text: t,
                brackets: n,
                params: r,
                upgradeLegacy: a,
                split: i,
                formatters: o,
                className: null == f ? void 0 : f.text,
                style: { visibility: 'hidden' },
            }),
        });
    });
    function ea({
        baseValue: e,
        newValue: t,
        animationType: n = sa.simple,
        deltaVisible: s = !1,
        preViewDeltaVisible: r = !1,
        animationConfig: o,
    }) {
        return {
            from: { width: e },
            to: { width: t },
            config: o ?? { duration: (n === sa.simple && s) || (!s && r) ? 0 : ta, easing: $t.easeInOutCubic },
        };
    }
    const ta = 600,
        na = { duration: ta, easing: $t.easeInOutCubic },
        sa = { simple: 'simple', grow: 'grow', growFreeze: 'growFreeze' },
        ra = { medium: 'medium', large: 'large' },
        oa = { disabled: 'disabled', doneInactive: 'doneInactive', doneStatic: 'doneStatic' },
        aa = 'growing',
        ia = 'shrinking',
        la = 'done',
        ua = s.createContext(void 0);
    function ca() {
        const e = s.useContext(ua);
        if (!e) throw new Error('ProgressBar must be used within a ProgressBar');
        return e;
    }
    function da(e) {
        const { activeComponents: t } = ca();
        s.useEffect(
            () => (
                t.add(e),
                () => {
                    t.delete(e);
                }
            ),
            [t, e],
        );
    }
    const ma = {
        base: 'BackgroundPattern_8df99ec8',
        backgroundPattern: 'BackgroundPattern_backgroundPattern_d9136c40',
        backgroundPattern__medium: 'BackgroundPattern_backgroundPattern__medium_84d64a88',
        backgroundPattern__large: 'BackgroundPattern_backgroundPattern__large_3e5537fc',
    };
    const pa = s.memo(function ({ className: t, backgroundPattern: n }) {
        const s = ca();
        return (
            da('backgroundPattern'),
            e.jsx('div', {
                className: ma.base,
                children: e.jsx(io, {
                    className: M(
                        t,
                        ma.backgroundPattern,
                        0 === s.percentage ? ma.backgroundPattern__noProgress : ma[`backgroundPattern__${s.size}`],
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    path:
                        n ??
                        ((r = s.size),
                        (o = s.status),
                        o === oa.disabled
                            ? `ui.progressbar.bg_pattern_base_disabled_${r}`
                            : `ui.progressbar.bg_pattern_base_${r}`),
                }),
            })
        );
        var r, o;
    });
    function fa(e, t) {
        const n = ca(),
            s = vr();
        return Te((r) => {
            if (r)
                switch (n.animationType) {
                    case 'simple':
                        n.progressCompleted
                            ? s.play('increaseDeltaMax', { target: t })
                            : s.play('progressSimple', { target: t });
                        break;
                    case 'grow':
                        !(function (r) {
                            if ('growing' === r) return s.play('progressSimple', { target: t });
                            if ('shrinking' === r) {
                                if (n.progressCompleted) return s.play('increaseDeltaMax', { target: t });
                                if (e > 0) return s.play('increaseDelta', { target: t });
                                if (e < 0) s.play('decreaseDelta', { target: t });
                            }
                        })(r);
                        break;
                    case 'growFreeze':
                        !(function (n) {
                            e > 0 && 'shrinking' === n
                                ? s.play('increaseDeltaMax', { target: t })
                                : s.play('progressSimple', { target: t });
                        })(r);
                        break;
                    default:
                        s.play('progressSimple', { target: t });
                }
        });
    }
    function ha(e = 0) {
        const t = ca(),
            n = t.soundTarget ?? 'progress-bar',
            s = vr(),
            r = fa(e, n),
            o = Te(() => {
                t.status !== oa.doneInactive && t.progressCompleted
                    ? s.play('increaseDeltaMax', { target: n })
                    : s.play('progressSimple', { target: n });
            });
        return Te(({ step: e } = {}) => {
            if (!t.silent)
                return t.activeComponents.has('delta') ? r(e) : t.activeComponents.has('fill') ? o() : void 0;
        });
    }
    const ga = 'Delta_eb295acb',
        _a = 'Delta_delta__increase_e6e76b0b',
        ba = 'Delta_outside_b28c01e5',
        va = 'Delta_outside__increase_91391b24',
        ya = 'Delta_inside_b1b3a5c5',
        wa = 'Delta_inside__increase_fcd871c4',
        xa = s.memo(
            s.forwardRef(function (
                {
                    from: t,
                    growAnimationConfig: n,
                    shrinkAnimationConfig: r,
                    classNames: o,
                    className: a,
                    steps: i,
                    onState: l,
                    ...u
                },
                c,
            ) {
                const d = s.useRef(null),
                    m = ca(),
                    [p, f] = Ls(() => ({ width: 0 })),
                    [h, g] = Ls(() => ({ width: 0 })),
                    [_, b] = Ls(() => ({ left: 0, width: 0 })),
                    [v, ...y] = i,
                    [w, x] = s.useState(y),
                    [R, E] = s.useState(v ?? 'done'),
                    C = (m.value - t) / m.maxValue,
                    P = ha(C);
                (da('delta'),
                    s.useEffect(() => {
                        if (0 === C) return;
                        const [e, ...t] = i;
                        (E(e ?? 'done'), x(t));
                    }, [f, g, i, C]));
                const S = Te(l ?? ne);
                s.useEffect(() => S(R), [R, S]);
                const T = Te(() => {
                    const [e, ...t] = w;
                    void 0 !== e ? (E(e), x(t)) : E('done');
                });
                return (
                    s.useEffect(() => {
                        const e = d.current;
                        if (!e || 0 === C) return (g.set({ width: 0 }), f.set({ width: 0 }), E('done'), void x([]));
                        const t = 100 * Math.max(0, m.percentage - Math.max(0, C)),
                            s = 100 * Math.abs(C);
                        return (
                            e.classList.toggle(_a, C > 0),
                            'growing' === R
                                ? (b.set({ left: t, width: s }),
                                  g.set({ width: 100 }),
                                  void f.start({
                                      from: { width: 0 },
                                      to: { width: 100 },
                                      config: n ?? na,
                                      onRest: T,
                                      onStart: () => P({ step: R }),
                                  }))
                                : 'shrinking' === R
                                  ? (b.set({ left: t, width: s }),
                                    f.set({ width: 100 }),
                                    void g.start({
                                        from: { width: 100 },
                                        to: { width: 0 },
                                        config: r ?? na,
                                        onRest: T,
                                        onStart: () => P({ step: R }),
                                    }))
                                  : void 0
                        );
                    }, [b, m.percentage, C, n, f, T, g, P, r, R]),
                    e.jsxs(lr.div, {
                        ...u,
                        ref: Ir([c, d]),
                        className: M(a, ga),
                        style: { left: _.left.to((e) => `${e}%`), width: _.width.to((e) => `${e}%`) },
                        children: [
                            e.jsxs(lr.div, {
                                ...u,
                                style: { width: h.width.to((e) => `${e}%`) },
                                className: M(null == o ? void 0 : o.outside, ba, C > 0 && va),
                                children: [
                                    e.jsx(lr.div, {
                                        style: { width: p.width.to((e) => `${e}%`) },
                                        className: M(null == o ? void 0 : o.inside, ya, C > 0 && wa),
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
        Ra = {
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
        Ea = lr(io),
        Ca = s.memo(function ({ animationConfig: t, classNames: n }) {
            var r;
            const o = ca(),
                { activeComponents: a } = ca(),
                i = 100 * o.percentage,
                l = 100 * ((null == (r = o.previous) ? void 0 : r.percentage) ?? 0),
                u = void 0 === o.previous ? i : l,
                c = o.status === oa.doneStatic,
                d = ur(),
                [m, p] = Ls(() => ({ width: u }));
            return (
                s.useEffect(() => {
                    d.run(() =>
                        p.start(
                            ea({
                                baseValue: u,
                                newValue: i,
                                animationType: o.animationType,
                                deltaVisible: a.has('delta'),
                                preViewDeltaVisible: a.has('previewDelta'),
                                animationConfig: t,
                            }),
                        ),
                    );
                }, [i, p, u, o.animationType, t, a, d]),
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(Ea, {
                            path: `ui.progressbar.bg_pattern_base_done_${o.size}`,
                            className: M(
                                null == n ? void 0 : n.done,
                                Ra.done,
                                !o.progressCompleted && Ra.done__hidden,
                                o.progressCompleted && (c ? Ra.done__doneStatic : Ra.done__visible),
                            ),
                            repeat: 'repeat',
                            position: 'left top',
                            style: { width: m.width.to((e) => `${e}%`) },
                        }),
                        !c &&
                            e.jsx(Ea, {
                                path: `ui.progressbar.bg_pattern_base_done_complete_${o.size}`,
                                className: M(
                                    null == n ? void 0 : n.doneComplete,
                                    Ra.complete,
                                    o.progressCompleted && Ra.complete__visible,
                                ),
                                repeat: 'repeat',
                                position: 'left top',
                                style: { width: m.width.to((e) => `${e}%`) },
                            }),
                    ],
                })
            );
        }),
        Pa = lr(io),
        Sa = s.memo(function ({ animationConfig: t, className: n }) {
            var r;
            const o = ca(),
                { activeComponents: a } = ca(),
                i = ur(),
                l = 100 * o.percentage,
                u = 100 * ((null == (r = o.previous) ? void 0 : r.percentage) ?? 0),
                c = void 0 === o.previous ? l : u,
                [d, m] = Ls(() => ({ width: c }));
            return (
                s.useEffect(() => {
                    i.run(() =>
                        m.start(
                            ea({
                                baseValue: c,
                                newValue: l,
                                animationType: o.animationType,
                                deltaVisible: a.has('delta'),
                                preViewDeltaVisible: a.has('previewDelta'),
                                animationConfig: t,
                            }),
                        ),
                    );
                }, [m, c, o.animationType, a, l, t, i]),
                e.jsx(Pa, {
                    path: `ui.progressbar.bg_pattern_base_filled_${o.size}`,
                    className: M(
                        n,
                        Ra.filled,
                        o.status && Ra[`filled__${o.status}`],
                        o.progressCompleted && Ra.filled__hidden,
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    style: { width: d.width.to((e) => `${e}%`) },
                })
            );
        }),
        Ta = s.memo(function ({ classNames: t, className: n, animationConfig: r, ...o }) {
            var a;
            const i = ca(),
                l = ha(),
                u = ur(),
                { activeComponents: c } = ca(),
                d = 100 * i.percentage,
                m = 100 * ((null == (a = i.previous) ? void 0 : a.percentage) ?? 0),
                p = void 0 === i.previous ? d : m;
            (da('fill'),
                s.useEffect(() => {
                    'growFreeze' === i.animationType && i.progressCompleted && !i.activeComponents.has('delta') && l();
                }, [i.activeComponents, i.animationType, i.progressCompleted, l]));
            const [f, h] = Ls(() => ({ width: p }));
            return (
                s.useEffect(() => {
                    u.run(() =>
                        h.start({
                            ...ea({
                                baseValue: p,
                                newValue: d,
                                animationType: i.animationType,
                                deltaVisible: c.has('delta'),
                                preViewDeltaVisible: c.has('previewDelta'),
                                animationConfig: r,
                            }),
                            onStart: () => l(),
                        }),
                    );
                }, [r, h, p, i.animationType, c, d, l, u]),
                e.jsxs('div', {
                    className: M(Ra.base, n),
                    children: [
                        e.jsx(lr.div, {
                            className: null == t ? void 0 : t.fill,
                            style: { width: f.width.to((e) => `${e}%`) },
                        }),
                        o.children ??
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(Sa, { className: null == t ? void 0 : t.filledPattern, animationConfig: r }),
                                    e.jsx(Ca, {
                                        classNames: {
                                            done: null == t ? void 0 : t.done,
                                            doneComplete: null == t ? void 0 : t.doneComplete,
                                        },
                                        animationConfig: r,
                                    }),
                                ],
                            }),
                        e.jsx(lr.div, {
                            className: M(
                                null == t ? void 0 : t.edge,
                                Ra.edge,
                                0 === i.percentage && Ra.edge__noProgress,
                                !c.has('previewDelta') && !i.progressCompleted && Ra.edge__visible,
                                i.status && Ra[`edge__${i.status}`],
                            ),
                            style: { left: f.width.to((e) => `${e}%`) },
                        }),
                    ],
                })
            );
        });
    ((Ta.Filled = Sa), (Ta.Done = Ca));
    const ka = { above: 'above', below: 'below' },
        Na = {
            base: 'Indicators_f2e99d31',
            step: 'Indicators_step_a78300f3',
            step__above: 'Indicators_step__above_a95c746e',
            indicator: 'Indicators_indicator_8484a8c7',
            label: 'Indicators_label_f8c7ff1e',
        };
    function Aa({ position: t, value: n, children: s, className: r, classNames: o }) {
        const a = ca();
        return e.jsxs('div', {
            className: M(Na.step, Na[`step__${t}`], r),
            style: { left: (n / a.maxValue) * 100 + '%' },
            children: [
                t === ka.below && e.jsx('div', { className: M(Na.indicator, null == o ? void 0 : o.indicator) }),
                void 0 !== s && e.jsx('div', { className: M(Na.label, null == o ? void 0 : o.label), children: s }),
                t === ka.above && e.jsx('div', { className: M(Na.indicator, null == o ? void 0 : o.indicator) }),
            ],
        });
    }
    const Ia = ho('Indicators', Na.base),
        Ma = function (t) {
            const n = ca();
            return (
                da('stepIndicators'),
                e.jsx(Ia, {
                    children: he(t.count, (s) => {
                        var r, o, a;
                        const i = (s / (t.count - 1)) * 100,
                            l = n.value >= i && 0 !== n.value;
                        return e.jsx(
                            Aa,
                            {
                                position: t.position,
                                value: i,
                                className: M(
                                    null == (r = t.classNames) ? void 0 : r.step,
                                    l && (null == (o = t.classNames) ? void 0 : o.completed),
                                ),
                                classNames: null == (a = t.classNames) ? void 0 : a.stepClassNames,
                                children: t.children ? t.children(s, i, l) : void 0,
                            },
                            s,
                        );
                    }),
                })
            );
        };
    ((Ma.Step = Aa), (Ma.positions = ka));
    const ja = 'PreviewDelta_86b01c3e',
        Da = 'PreviewDelta_negative_1c375892',
        Oa = 'PreviewDelta_positive_be83fc48',
        Ba = 'PreviewDelta_negative__visible_19dda1c5',
        Fa = 'PreviewDelta_positive__visible_19dda1c5',
        $a = s.forwardRef(function ({ value: t, classNames: n, ...s }, r) {
            const o = ca();
            da('previewDelta');
            const a = t - o.value,
                i = a < 0 ? 'negative' : a > 0 ? 'positive' : 'neutral';
            if ('neutral' === i) return null;
            const l = Math.abs(a) / o.maxValue,
                u = a < 0 ? l : 0,
                c = 100 * (o.percentage - u),
                d = 100 * l;
            return e.jsxs('div', {
                ...s,
                'data-name': 'PreviewDelta',
                ref: r,
                className: M(ja, s.className),
                children: [
                    e.jsx('div', {
                        style: { left: `${c}%`, width: `${d}%`, ...s.style },
                        className: M(null == n ? void 0 : n.negative, Da, 'negative' === i && Ba),
                    }),
                    e.jsx('div', {
                        style: { left: `${c}%`, width: `${d}%`, ...s.style },
                        className: M(null == n ? void 0 : n.positive, Oa, 'positive' === i && Fa),
                    }),
                ],
            });
        });
    function La(t) {
        const [n, r] = s.useState(Math.min(t.value, t.maxValue)),
            [o, a] = s.useState(t.maxValue),
            i = Pe(n),
            l = Pe(o),
            u = s.useRef(new Set()),
            c = Te((e) => r(Math.min(e, t.maxValue))),
            d = Te((e) => u.current.has(e));
        (s.useLayoutEffect(() => {
            c(t.value);
        }, [t.value, c]),
            s.useLayoutEffect(() => {
                a(t.maxValue);
            }, [t.maxValue]));
        const m = Te((e) => {
            var n;
            return null == (n = t.onValueChange) ? void 0 : n.call(t, e);
        });
        s.useEffect(() => {
            m(n);
        }, [m, n]);
        const p = Te((e) => {
            var n;
            return null == (n = t.onMaxValueChange) ? void 0 : n.call(t, e);
        });
        s.useEffect(() => {
            p(o);
        }, [p, o]);
        const f = s.useMemo(() => {
            if (void 0 !== i && void 0 !== l) return { value: i, maxValue: l, percentage: i / l };
        }, [i, l]);
        fe(o > 0, 'ProgressBar: maxValue must be greater than 0');
        const h = s.useMemo(() => {
                const e = n / o == 1 && t.status !== oa.doneInactive;
                return t.animationType === sa.growFreeze ? e && t.maxValueAchieved : e;
            }, [o, t.animationType, t.maxValueAchieved, t.status, n]),
            g = s.useMemo(
                () => ({
                    value: n,
                    maxValue: o,
                    setValue: c,
                    setMaxValue: a,
                    animationType: t.animationType ?? sa.simple,
                    size: t.size,
                    status: t.status,
                    previous: f,
                    activeComponents: u.current,
                    progressCompleted: h,
                    hasComponent: d,
                    soundTarget: t.soundTarget,
                    silent: t.silent ?? !1,
                    freezeUnlocked: t.maxValueAchieved ?? !1,
                    percentage: n / o,
                }),
                [n, o, c, t.animationType, t.size, t.status, t.soundTarget, t.silent, t.maxValueAchieved, f, h, d],
            );
        return e.jsx(ua.Provider, { value: g, children: t.children });
    }
    const Ua = {
            background: 'ProgressBar_background_b4143753',
            base: 'ProgressBar_27c2305c',
            base__medium: 'ProgressBar_base__medium_97d40af9',
            base__large: 'ProgressBar_base__large_56a06125',
            base__disabled: 'ProgressBar_base__disabled_c8466b10',
            base__done: 'ProgressBar_base__done_dcd0e31a',
            border: 'ProgressBar_border_cc9e47f4',
        },
        qa = ho('ProgressBar', Ua.base, { variants: { size: { medium: Ua.base__medium, large: Ua.base__large } } }),
        za = function ({ size: t = ra.medium, backgroundPattern: n, status: s, className: r, classNames: o, ...a }) {
            return e.jsx(La, {
                size: t,
                status: s,
                ...a,
                children: e.jsxs(qa, {
                    size: t,
                    className: M(r, a.value === a.maxValue && s !== oa.doneInactive && Ua.base__done),
                    children: [
                        e.jsx('div', { className: M(Ua.border, Ua[`border__${t}`], null == o ? void 0 : o.border) }),
                        e.jsx('div', { className: M(Ua.background, null == o ? void 0 : o.background) }),
                        e.jsx(pa, { backgroundPattern: n, className: null == o ? void 0 : o.backgroundPattern }),
                        a.children,
                    ],
                }),
            });
        };
    ((za.Fill = Ta),
        (za.Delta = xa),
        (za.PreviewDelta = $a),
        (za.NumberIndicators = Ma),
        (za.sizes = ra),
        (za.statuses = oa),
        (za.animations = sa));
    const Va = 'ProgressBar_wrapper_a944db13',
        Ga = [aa, ia],
        Qa = s.memo(function ({ progressBar: t, fill: n, delta: s, wrapperSpringProps: r }) {
            const o = Ls({ from: { opacity: 1 }, ...r });
            return e.jsx(za, {
                ...t,
                children: e.jsxs(lr.div, {
                    className: Va,
                    style: o,
                    children: [
                        e.jsx(za.Fill, { ...n }),
                        void 0 !== s && e.jsx(za.Delta, { ...s, steps: (null == s ? void 0 : s.steps) ?? Ga }),
                    ],
                }),
            });
        }),
        Ha = 'ProgressStats_label_6e975df0',
        Wa = 'ProgressStats_receivedInBattle_d3abd2fe',
        Xa = ho('ProgressStatsLabel', Ha),
        Ya = s.forwardRef(({ className: t, text: n, transitionProps: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                className: M(Ha, t),
                ref: o,
                children: e.jsx(qo, { value: n, transition: s, children: se }),
            }),
        ),
        Za = s.forwardRef(({ value: t, className: n, total: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                ref: o,
                className: M(Wa, n),
                children: e.jsx(no, {
                    path: s ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    params: { value: t },
                }),
            }),
        ),
        Ka = s.forwardRef(({ value: t, className: n, total: r, transition: o, target: a, ...i }, l) => {
            const u = vr(),
                c = s.useMemo(
                    () => ({
                        value: t,
                        textPath: r ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    }),
                    [t, r],
                ),
                d = s.useRef(o);
            return (
                s.useEffect(() => {
                    d.current = o;
                }, [o]),
                e.jsx('div', {
                    ...i,
                    ref: l,
                    className: M(Wa, n),
                    children: e.jsx(qo, {
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
                        children: (t) => e.jsx(no, { path: t.textPath, params: { value: t.value } }),
                    }),
                })
            );
        }),
        Ja = ho('ProgressStats');
    ((Ja.Label = Xa), (Ja.ReceivedValue = Za), (Ja.AnimatedReceivedValue = Ka), (Ja.AnimatedLabel = Ya));
    const ei = s.createContext(void 0);
    function ti() {
        const e = s.useContext(ei);
        return (fe(void 0 !== e, 'useCondition must be used under conditionContext.Provider'), e);
    }
    const ni = s.createContext(void 0);
    function si() {
        const e = s.useContext(ni);
        return (fe(void 0 !== e, 'useMissionCard must be used under missionCardContext.Provider'), e);
    }
    const ri = {
            base: 'MissonCard_b1fbfe09',
            groups: 'MissonCard_groups_5fd7af34',
            groups__overflow: 'MissonCard_groups__overflow_fa25e1a0',
            questsWithRewards: 'MissonCard_questsWithRewards_2c6acde1',
            questsContainer: 'MissonCard_questsContainer_2b78ceb4',
            groups__twoQuests: 'MissonCard_groups__twoQuests_713fc99f',
            groups__threeQuests: 'MissonCard_groups__threeQuests_713fc99f',
            groups__manyQuests: 'MissonCard_groups__manyQuests_713fc99f',
            gap: 'MissonCard_gap_7a81161a',
            rewardsContainer: 'MissonCard_rewardsContainer_761d4534',
            cardContent: 'MissonCard_cardContent_14202111',
            separator: 'MissonCard_separator_47d9f7e0',
            separator__union: 'MissonCard_separator__union_be302392',
            separator__and: 'MissonCard_separator__and_d20efbf5',
            arrow: 'MissonCard_arrow_3cc43500',
            invertedArrow: 'MissonCard_invertedArrow_fc4b8656',
            body: 'MissonCard_body_f5e19bf4',
            iconContainer: 'MissonCard_iconContainer_3cd6d5ed',
            iconImage: 'MissonCard_iconImage_d53f4e16',
            iconImage__gold: 'MissonCard_iconImage__gold_b70dc826',
            base__completed: 'MissonCard_base__completed_713fc99f',
            iconImage__regular: 'MissonCard_iconImage__regular_9a58890b',
            content: 'MissonCard_content_82010dac',
            progressbar: 'MissonCard_progressbar_466e122a',
            progressionCounter: 'MissonCard_progressionCounter_3af331d',
            title: 'MissonCard_title_a3655b9d',
            titleIcon: 'MissonCard_titleIcon_7a875fd0',
            titleIcon__gold: 'MissonCard_titleIcon__gold_b70dc826',
            description: 'MissonCard_description_8624087b',
            multiline: 'MissonCard_multiline_fb0e3681',
            numberStats: 'MissonCard_numberStats_b1fbfe09',
            completedMark: 'MissonCard_completedMark_4f3d9604',
            completedMarkIcon: 'MissonCard_completedMarkIcon_1819b814',
            reward: 'MissonCard_reward_710b2a75',
            rewards: 'MissonCard_rewards_e17088a1',
        },
        oi = ['win', 'isAlive'],
        ai = j.cubicBezier(0.33, 0, 0.25, 1);
    const ii = {
        Condition: function (t) {
            var n, s;
            const r = t.completed && t.multiQuest;
            return (
                t.lastCondition &&
                    r &&
                    t.animation &&
                    (null == (n = t.rewardsGlowRef) || n.start(), null == (s = t.completedMarkRef) || s.start()),
                e.jsx(ii.Root, {
                    condition: t.value,
                    children: e.jsxs(ii.Body, {
                        children: [
                            e.jsx(ii.Title, { questsAmount: t.questsAmount }),
                            e.jsx(ii.Description, { guiDisabledDescription: t.guiDisabledDescription }),
                            !r &&
                                e.jsx(ii.Progression, {
                                    rewardsGlowRef: t.rewardsGlowRef,
                                    completedMarkRef: t.completedMarkRef,
                                    completed: t.completed,
                                }),
                        ],
                    }),
                })
            );
        },
        Root: function ({ condition: t, ...n }) {
            return e.jsx(ei.Provider, {
                value: t,
                children: e.jsx('div', { ...n, className: M(ri.content, t.completed && ri.content__completed) }),
            });
        },
        Description: function ({ guiDisabledDescription: t }) {
            const { description: n, conditionType: s } = ti();
            return s && oi.includes(s)
                ? null
                : e.jsx('div', {
                      className: ri.description,
                      children: e.jsx(Jo, { text: B(t ?? n), className: ri.multiline }),
                  });
        },
        Title: function ({ questsAmount: t }) {
            const { title: n, icon: s, completed: r, progression: o } = ti(),
                { completed: a } = si();
            if (!s && !n) return null;
            const i = (function ({ icon: e, conditionCompleted: t, questsAmount: n, questCompleted: s }) {
                if (e && e.default.path) return (n && n > 1) || (s && 1 === n) || t ? e : void 0;
            })({ icon: s, questCompleted: a, questsAmount: t, conditionCompleted: r });
            return e.jsxs('div', {
                className: ri.title,
                children: [
                    void 0 !== i &&
                        e.jsx('div', {
                            style: { backgroundImage: `url(${i.default.path})` },
                            className: M(ri.titleIcon, i.default.isGold && ri.titleIcon__gold),
                        }),
                    o ? P.formatNumber('integral', o.total) : null == n ? void 0 : n.trim(),
                ],
            });
        },
        Body: ho('MissionCardBody', ri.body),
        Progression: function ({ completed: t, rewardsGlowRef: n, completedMarkRef: r }) {
            const { progression: o } = ti(),
                { animation: a, immediateAnimation: i } = si(),
                l = qs(),
                u = qs(),
                [[c, d], m] = s.useState(() => {
                    if (!o) return [0, 0];
                    const e = Math.max(0, o.current - o.earned);
                    return [e, e];
                });
            (s.useEffect(() => {
                var e;
                (a || i) && o && ((e = o.current >= o.total ? o.total : o.current), m(([, t]) => [t, e]));
            }, [a, i, o]),
                s.useEffect(() => {
                    t && !o && (a || i) && (null == r || r.start(), null == n || n.start());
                }, [o, t, r, n, a, i]),
                s.useEffect(() => {
                    i && (l.start(), u.start(), t && (null == r || r.start(), null == n || n.start()));
                }, [i, t, l, u, r, n]));
            const p = s.useMemo(() => {
                if (void 0 !== o)
                    return {
                        progress: {
                            value: d,
                            silent: i,
                            animationType: sa.grow,
                            status: oa.doneStatic,
                            maxValue: o.total,
                            className: ri.progressbar,
                            maxValueAchieved: d === o.total,
                        },
                        delta: i
                            ? void 0
                            : {
                                  from: c,
                                  steps: c === d ? [] : [aa, ia],
                                  growAnimationConfig: { duration: 600, easing: ai },
                                  shrinkAnimationConfig: { duration: 600, easing: ai },
                                  onState(e) {
                                      e === la &&
                                          d === o.current &&
                                          o.earned > 0 &&
                                          (l.start(), u.start(), t && (null == r || r.start()));
                                  },
                              },
                        fill: { animationConfig: { duration: i ? 0 : 600, easing: ai } },
                    };
            }, [i, c, d, o, t, l, u, r]);
            return o
                ? (fe.log(
                      o.total >= o.current && o.current >= 0,
                      `Unexpected progression values: current(${o.current}), total(${o.total})`,
                  ),
                  e.jsxs('div', {
                      className: ri.progression,
                      children: [
                          void 0 !== p && e.jsx(Qa, { progressBar: p.progress, delta: p.delta, fill: p.fill }),
                          e.jsxs('div', {
                              className: ri.numberStats,
                              children: [
                                  e.jsx(Ho, {
                                      current: i ? o.current : d,
                                      total: o.total,
                                      className: ri.progressionCounter,
                                      transitionCurrent: { ref: l, immediate: i },
                                      transitionTotal: { immediate: i },
                                  }),
                                  e.jsx(Ja.AnimatedReceivedValue, {
                                      value: P.formatNumber('integral', o.earned),
                                      transition: {
                                          ref: u,
                                          immediate: i,
                                          initial: { opacity: 0, y: '-5rem' },
                                          enter: {
                                              onRest: () => {
                                                  null == n || n.start();
                                              },
                                          },
                                      },
                                  }),
                              ],
                          }),
                      ],
                  }))
                : null;
        },
    };
    var li = ((e) => (
            (e.Items = 'items'),
            (e.Equipment = 'equipment'),
            (e.Xp = 'xp'),
            (e.XpFactor = 'xpFactor'),
            (e.Blueprints = 'blueprints'),
            (e.BlueprintsAny = 'blueprintsAny'),
            (e.Goodies = 'goodies'),
            (e.Berths = 'berths'),
            (e.Slots = 'slots'),
            (e.Tokens = 'tokens'),
            (e.CrewSkins = 'crewSkins'),
            (e.CrewBooks = 'crewBooks'),
            (e.Customizations = 'customizations'),
            (e.CreditsFactor = 'creditsFactor'),
            (e.Tankman = 'tankman'),
            (e.Tankwoman = 'tankwoman'),
            (e.TankmenXp = 'tankmenXP'),
            (e.TankmenXpFactor = 'tankmenXPFactor'),
            (e.FreeXpFactor = 'freeXPFactor'),
            (e.BattleToken = 'battleToken'),
            (e.PremiumUniversal = 'premium_universal'),
            (e.Gold = 'gold'),
            (e.Credits = 'credits'),
            (e.Crystal = 'crystal'),
            (e.FreeXp = 'freeXP'),
            (e.Premium = 'premium'),
            (e.PremiumPlus = 'premium_plus'),
            (e.BattlePassPoints = 'battlePassPoints'),
            (e.BattlePassSelectToken = 'battlePassSelectToken'),
            (e.StyleProgressToken = 'styleProgressToken'),
            (e.TmanToken = 'tmanToken'),
            (e.NaturalCover = 'naturalCover'),
            (e.BpCoin = 'bpcoin'),
            (e.BattlaPassFinalAchievement = 'dossier_achievement'),
            (e.BattleBadge = 'dossier_badge'),
            (e.BonusX5 = 'battle_bonus_x5'),
            (e.CrewBonusX3 = 'crew_bonus_x3'),
            (e.Vehicles = 'vehicles'),
            (e.EpicSelectToken = 'epicSelectToken'),
            (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
            (e.DeluxeGift = 'deluxe_gift'),
            (e.BattleBoosterGift = 'battleBooster_gift'),
            (e.OptionalDevice = 'optionalDevice'),
            (e.EquipCoin = 'equipCoin'),
            (e.LootBox = 'lootBox'),
            (e.BrCoin = 'brcoin'),
            e
        ))(li || {}),
        ui = ((e) => (
            (e.Big = 'big'),
            (e.Small = 'small'),
            (e.Mini = 'mini'),
            (e.S600x450 = 's600x450'),
            (e.S400x300 = 's400x300'),
            (e.S296x222 = 's296x222'),
            (e.S232x174 = 's232x174'),
            (e.S180x135 = 's180x135'),
            (e.S128x100 = 's128x100'),
            (e.S80x80 = 's80x80'),
            (e.S64x64 = 's64x64'),
            (e.S48x48 = 's48x48'),
            (e.S24x24 = 's24x24'),
            e
        ))(ui || {}),
        ci = ((e) => (
            (e.MULTI = 'multi'),
            (e.CURRENCY = 'currency'),
            (e.PREMIUM_PLUS = 'premium_plus'),
            (e.NUMBER = 'number'),
            (e.STRING = 'string'),
            e
        ))(ci || {}),
        di = ((e) => (
            (e.BATTLE_BOOSTER = 'battleBooster'),
            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
            e
        ))(di || {}),
        mi = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(mi || {}),
        pi = ((e) => (
            (e.BATTLE_BOOSTER = 'battleBooster'),
            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
            e
        ))(pi || {});
    const fi = [
            li.Items,
            li.Equipment,
            li.Xp,
            li.XpFactor,
            li.Blueprints,
            li.BlueprintsAny,
            li.Goodies,
            li.Berths,
            li.Slots,
            li.Tokens,
            li.CrewSkins,
            li.CrewBooks,
            li.Customizations,
            li.CreditsFactor,
            li.TankmenXp,
            li.TankmenXpFactor,
            li.FreeXpFactor,
            li.BattleToken,
            li.LootBox,
            li.PremiumUniversal,
            li.NaturalCover,
            li.BpCoin,
            li.BattlePassSelectToken,
            li.BattlaPassFinalAchievement,
            li.BattleBadge,
            li.BonusX5,
            li.CrewBonusX3,
            li.EpicSelectToken,
            li.Comp7TokenWeeklyReward,
            li.DeluxeGift,
            li.BattleBoosterGift,
            li.OptionalDevice,
        ],
        hi = [li.Gold, li.Credits, li.Crystal, li.FreeXp],
        gi = [li.BattlePassPoints, li.EquipCoin],
        _i = [li.PremiumPlus, li.Premium],
        bi = (e) =>
            fi.includes(e)
                ? ci.MULTI
                : hi.includes(e)
                  ? ci.CURRENCY
                  : gi.includes(e)
                    ? ci.NUMBER
                    : _i.includes(e)
                      ? ci.PREMIUM_PLUS
                      : ci.STRING,
        vi = ['engravings', 'backgrounds'],
        yi = ['engraving', 'background'],
        wi = (e, t = ui.Small) => {
            const { name: n, type: s, value: r, icon: o, item: a, dogTagType: i } = e,
                l = t === ui.S24x24 ? ui.Small : t,
                u = ((e) => {
                    switch (e) {
                        case ui.S600x450:
                            return 'c_600x450';
                        case ui.S400x300:
                            return 'c_400x300';
                        case ui.S296x222:
                            return 'c_296x222';
                        case ui.S232x174:
                            return 'c_232x174';
                        case ui.Big:
                            return 'c_80x80';
                        case ui.Small:
                            return 'c_48x48';
                        default:
                            return e;
                    }
                })(l);
            switch (n) {
                case 'basic':
                case 'plus':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.${s}_${r}`;
                case 'premium':
                case 'premium_plus':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.${n}_${r}`;
                case 'items':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.${a}`;
                case 'blueprints':
                case 'blueprintsAny':
                case 'finalBlueprints':
                    return `R.images.gui.maps.icons.blueprints.fragment.${l}.${o}`;
                case 'tokens':
                case 'lootBox':
                case 'battleToken':
                    return 'big' === t ? e.iconBig.replace('..', 'img://gui') : e.iconSmall.replace('..', 'img://gui');
                case 'customizations':
                case 'styleProgress':
                case 'crewSkins':
                case 'goodies':
                case 'groups':
                case 'tmanToken':
                case 'battlePassSelectToken':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.${o}`;
                case 'crewBooks':
                    return `R.images.gui.maps.icons.crewBooks.books.${l}.${o}`;
                case 'dogTagComponents':
                    return ((e, t, n) => {
                        const s = vi[e];
                        if (s) {
                            const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(s),
                                o = r.$dyn(n);
                            return !o && yi[e] ? `${r.$dyn(yi[e])}` : `${o}`;
                        }
                        return (
                            console.error(
                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                            ),
                            ''
                        );
                    })(i, l, o);
                case 'dossier_badge':
                    return `R.images.gui.maps.icons.quests.bonuses.badges.${u}.${o}`;
                case 'dossier_achievement':
                    return `R.images.gui.maps.icons.achievement.${u}.${o}`;
                case 'xp':
                case 'xpFactor':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.exp`;
                case 'creditsFactor':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.credits`;
                case 'tankmenXPFactor':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.tankmenXP`;
                case 'dailyXPFactor':
                case 'freeXPFactor':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.freeXP`;
                case 'premiumTank':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.vehicles`;
                case 'styleProgressToken':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.style_3d`;
                case 'collectionItem':
                    return `R.images.gui.maps.icons.collectionItems.${u}.${o}`;
                default:
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.${n}`;
            }
        },
        xi = (e, t) => ({ args: e, contentId: t }),
        Ri = [ui.Small, ui.Big],
        Ei = {
            base: 'Reward_d65e1e12',
            base__s24x24: 'Reward_base__s24x24_954b5cee',
            base__s48x48: 'Reward_base__s48x48_21f091ec',
            base__small: 'Reward_base__small_3eddf28d',
            base__s80x80: 'Reward_base__s80x80_21f091ec',
            base__big: 'Reward_base__big_e23f2c77',
            base__s128x100: 'Reward_base__s128x100_1e08e04b',
            base__s180x135: 'Reward_base__s180x135_93fc57c',
            base__s232x174: 'Reward_base__s232x174_2904ea89',
            base__s296x222: 'Reward_base__s296x222_52f0615b',
            base__s400x300: 'Reward_base__s400x300_a8627e1b',
            base__s600x450: 'Reward_base__s600x450_e27f3852',
            base__dynamicBox: 'Reward_base__dynamicBox_45d7782b',
            tooltipWrapper: 'Reward_tooltipWrapper_75b925a5',
            icon: 'Reward_icon_e152f13b',
            overlay: 'Reward_overlay_8cbe65c9',
            highlight: 'Reward_highlight_f1cd08e0',
            image: 'Reward_image_810ec3a2',
            image__s24x24: 'Reward_image__s24x24_954b5cee',
            image__s48x48: 'Reward_image__s48x48_21f091ec',
            image__small: 'Reward_image__small_3eddf28d',
            image__s80x80: 'Reward_image__s80x80_21f091ec',
            image__big: 'Reward_image__big_e23f2c77',
            image__s128x100: 'Reward_image__s128x100_1e08e04b',
            image__s180x135: 'Reward_image__s180x135_93fc57c',
            image__s232x174: 'Reward_image__s232x174_2904ea89',
            image__s296x222: 'Reward_image__s296x222_52f0615b',
            image__s400x300: 'Reward_image__s400x300_a8627e1b',
            image__s600x450: 'Reward_image__s600x450_e27f3852',
            image__fixedBox: 'Reward_image__fixedBox_e45bdd8a',
            info: 'Reward_info_26d38c48',
            info__multi: 'Reward_info__multi_465d34bd',
            info__credits: 'Reward_info__credits_1643219',
            info__gold: 'Reward_info__gold_c751be5d',
            info__crystal: 'Reward_info__crystal_18ccfdd0',
            info__premiumTank: 'Reward_info__premiumTank_7862152',
            title: 'Reward_title_fbcf4b5',
            timer: 'Reward_timer_22ba7b8b',
        },
        Ci = h.resolve('images'),
        Pi = new Map([
            [ui.S24x24, ui.Small],
            [ui.S48x48, ui.Small],
        ]),
        Si = ({
            name: t,
            image: n,
            isPeriodic: s = !1,
            isFixedBoxSize: r = !0,
            size: o = ui.Big,
            special: a,
            value: i,
            valueType: l,
            title: u,
            style: c,
            className: d,
            classNames: m,
            tooltipArgs: p,
            periodicIconTooltipArgs: f,
        }) => {
            const g = Pi.has(o) ? Pi.get(o) : o,
                _ = ((e, t) => {
                    if (void 0 === t || !Ri.includes(e)) return null;
                    switch (t) {
                        case di.BATTLE_BOOSTER:
                        case di.BATTLE_BOOSTER_REPLACE:
                            return mi.BATTLE_BOOSTER;
                    }
                })(o, a),
                b = ((e) => {
                    if (void 0 === e) return null;
                    switch (e) {
                        case di.BATTLE_BOOSTER:
                            return pi.BATTLE_BOOSTER;
                        case di.BATTLE_BOOSTER_REPLACE:
                            return pi.BATTLE_BOOSTER_REPLACE;
                        case di.BUILT_IN_EQUIPMENT:
                            return pi.BUILT_IN_EQUIPMENT;
                        case di.EQUIPMENT_PLUS:
                            return pi.EQUIPMENT_PLUS;
                        case di.EQUIPMENT_TROPHY_BASIC:
                            return pi.EQUIPMENT_TROPHY_BASIC;
                        case di.EQUIPMENT_TROPHY_UPGRADED:
                            return pi.EQUIPMENT_TROPHY_UPGRADED;
                        case di.EQUIPMENT_MODERNIZED_UPGRADED_1:
                            return pi.EQUIPMENT_MODERNIZED_UPGRADED_1;
                        case di.EQUIPMENT_MODERNIZED_UPGRADED_2:
                            return pi.EQUIPMENT_MODERNIZED_UPGRADED_2;
                        case di.EQUIPMENT_MODERNIZED_UPGRADED_3:
                            return pi.EQUIPMENT_MODERNIZED_UPGRADED_3;
                        case di.PROGRESSION_STYLE_UPGRADED_1:
                            return pi.PROGRESSION_STYLE_UPGRADED_1;
                        case di.PROGRESSION_STYLE_UPGRADED_2:
                            return pi.PROGRESSION_STYLE_UPGRADED_2;
                        case di.PROGRESSION_STYLE_UPGRADED_3:
                            return pi.PROGRESSION_STYLE_UPGRADED_3;
                        case di.PROGRESSION_STYLE_UPGRADED_4:
                            return pi.PROGRESSION_STYLE_UPGRADED_4;
                        case di.PROGRESSION_STYLE_UPGRADED_5:
                            return pi.PROGRESSION_STYLE_UPGRADED_5;
                        case di.PROGRESSION_STYLE_UPGRADED_6:
                            return pi.PROGRESSION_STYLE_UPGRADED_6;
                    }
                })(a),
                v = ((e, t) => {
                    const n = h.resolve('intl');
                    if (void 0 === e) return null;
                    switch (t) {
                        case ci.MULTI: {
                            const t = Number(e);
                            return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                        }
                        case ci.CURRENCY:
                        case ci.NUMBER:
                            return n.formatNumber(n.numberFormats[0] || 'integral', Number(e));
                        case ci.PREMIUM_PLUS: {
                            const t = Number(e);
                            return isNaN(t) ? e : null;
                        }
                        default:
                            return e;
                    }
                })(i, l),
                y = pr({
                    contentId: (null == p ? void 0 : p.contentId) ?? 0,
                    args: null == p ? void 0 : p.args,
                    resId: null == p ? void 0 : p.resId,
                    decoratorId: null == p ? void 0 : p.decoratorId,
                }),
                w = fr({ header: null == f ? void 0 : f.header, body: null == f ? void 0 : f.body });
            return e.jsxs('div', {
                className: M(Ei.base, Ei[`base__${o}`], !r && Ei.base__dynamicBox, d),
                style: c,
                ...y,
                children: [
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs('div', {
                                className: M(
                                    Ei.image,
                                    r ? Ei.image__fixedBox : Ei[`image__${o}`],
                                    null == m ? void 0 : m.image,
                                ),
                                children: [
                                    _ &&
                                        e.jsx('div', {
                                            className: M(Ei.highlight, null == m ? void 0 : m.highlight),
                                            style: {
                                                backgroundImage: `url(${Ci.readOrEmpty(`quests.bonuses.${g}.${_}_highlight`)})`,
                                            },
                                        }),
                                    n &&
                                        e.jsx('div', {
                                            className: M(Ei.icon, null == m ? void 0 : m.rewardIcon),
                                            style: { backgroundImage: `url(${n})` },
                                        }),
                                    b &&
                                        e.jsx('div', {
                                            className: M(Ei.overlay, null == m ? void 0 : m.overlay),
                                            style: {
                                                backgroundImage: `url(${Ci.readOrEmpty(`quests.bonuses.${g}.${b}_overlay`)})`,
                                            },
                                        }),
                                ],
                            }),
                            v &&
                                e.jsx('div', {
                                    className: M(
                                        Ei.info,
                                        Ei[`info__${t}`],
                                        l === ci.MULTI && Ei.info__multi,
                                        null == m ? void 0 : m.info,
                                    ),
                                    children: v,
                                }),
                            u && e.jsx('div', { className: Ei.title, children: u }),
                        ],
                    }),
                    s && e.jsx('div', { className: M(Ei.timer, null == m ? void 0 : m.periodicIcon), ...w }),
                ],
            });
        },
        Ti = Object.fromEntries(Object.entries(qr).map(([e]) => [e, (e) => e]));
    function ki(e, t = {}) {
        const n = jr(e, eo);
        return String(Xr(n, Ti, t));
    }
    function Ni(e, t = {}) {
        const n = h.resolve('strings').readOrEmpty(e);
        return 0 === n.length ? n : ki(n, t);
    }
    const Ai = 'RewardsList_b956755b',
        Ii = 'RewardsList_base__vertical_59db3c9f',
        Mi = 'RewardsList_reward_fc200613',
        ji = 'RewardsList_reward__vertical_5f09c6e0',
        Di = 'RewardsList_boxRewardClassName_882c908d',
        Oi = { [ui.S24x24]: ui.Small, [ui.S48x48]: ui.Small },
        Bi = s.memo(function ({
            data: t,
            isFixedBoxSize: n,
            size: s = ui.Big,
            isVertical: r = !1,
            count: o,
            classMix: a,
            rewardItemClassMix: i,
            boxRewardTooltip: l,
            boxRewardValue: u,
            boxRewardClassName: c,
            boxRewardClassNames: d,
        }) {
            const m = h.resolve('strings'),
                p = h.resolve('images'),
                f =
                    'number' == typeof o && o < t.length
                        ? `${p.readOrEmpty(`quests.bonuses.${Oi[s] ?? s}.default`)}`
                        : void 0,
                g =
                    u ||
                    ki(Jr(m.readOrEmpty('tooltips.quests.awards.additional.bottom')), { count: t.length - (o || 0) });
            return e.jsx('div', {
                className: M(Ai, r && Ii, a),
                children:
                    void 0 !== f
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  t
                                      .slice(0, o)
                                      .map((t, o) =>
                                          e.jsx(
                                              'div',
                                              {
                                                  className: M(Mi, r && ji, i),
                                                  children: e.jsx(Si, { size: s, isFixedBoxSize: n, ...t }),
                                              },
                                              o,
                                          ),
                                      ),
                                  e.jsx('div', {
                                      className: M(Mi, r && ji, i),
                                      children: e.jsx(Si, {
                                          name: 'more',
                                          isFixedBoxSize: n,
                                          image: f,
                                          size: s,
                                          value: g,
                                          tooltipArgs: l,
                                          className: M(Di, c),
                                          classNames: d,
                                      }),
                                  }),
                              ],
                          })
                        : t.map((t, o) =>
                              e.jsx(
                                  'div',
                                  {
                                      className: M(Mi, r && ji, i),
                                      children: e.jsx(Si, { size: s, isFixedBoxSize: n, ...t }),
                                  },
                                  o,
                              ),
                          ),
            });
        });
    function Fi({ bonuses: t, size: n, resId: r, boxRewardTooltipArgs: o, maxRewardsCount: a, questId: i, ...l }) {
        const u = s.useMemo(
                () =>
                    de(t, (e) => ({
                        size: n,
                        name: e.name,
                        image: wi(e, n),
                        value: e.value,
                        valueType: bi(e.name),
                        tooltipArgs: {
                            ...xi(
                                { tooltipId: i ? `${i}:${e.tooltipId}` : e.tooltipId },
                                Number(e.tooltipContentId) ||
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                            ),
                            resId: r,
                        },
                    })),
                [t, n, r, i],
            ),
            c = void 0 === a ? t.length : a <= 1 ? 1 : t.length <= a ? a : a - 1,
            d = s.useMemo(
                () =>
                    o || {
                        contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                        args: { showFromIndex: c },
                        resId: r,
                    },
                [c, r, o],
            );
        return e.jsx(Bi, { ...l, data: u, count: c, boxRewardTooltip: d, size: n });
    }
    const $i = 'AnimatedRewards_glowContainer_82630782',
        Li = 'AnimatedRewards_c981a355',
        Ui = 'AnimatedRewards_rewardsWrapper_11b576b3',
        qi = 'AnimatedRewards_glow_3a2cd010',
        zi = 'AnimatedRewards_glowImage_4ecce597',
        Vi = j.cubicBezier(0.33, 0, 0.67, 1),
        Gi = j.cubicBezier(0.23, 0, 0.57, 1),
        Qi = s.forwardRef(function (
            {
                animationRef: t,
                immediateAnimation: n,
                maxRewardsCount: r,
                bonuses: o,
                boxRewardTooltipArgs: a,
                className: i,
                classNames: l,
                ...u
            },
            c,
        ) {
            const d = qs(),
                [m] = Ls(() => ({
                    ref: t,
                    from: { opacity: 0, scale: 0.6 },
                    to: async (e) => {
                        (await e({ opacity: 1, scale: 0.8, config: { duration: 330, easing: Vi } }),
                            d.start(),
                            await e({ opacity: 0, scale: 1, config: { duration: 330, easing: Vi } }));
                    },
                })),
                [p] = Ls(() => ({
                    ref: d,
                    immediate: n,
                    from: { opacity: 1 },
                    to: { opacity: 0.4, config: { duration: 330, easing: Gi } },
                }));
            return (
                s.useEffect(() => {
                    n &&
                        (null == t || t.pause(),
                        null == t || t.start({ immediate: !0, to: { opacity: 0, scale: 1 } }),
                        d.start());
                }, [n]),
                e.jsxs('div', {
                    ref: c,
                    className: M(Li, i),
                    children: [
                        e.jsx(lr.div, {
                            style: p,
                            className: M(Ui, null == l ? void 0 : l.rewardsWrapper),
                            children: e.jsx(Fi, { ...u, maxRewardsCount: r, bonuses: o, boxRewardTooltipArgs: a }),
                        }),
                        e.jsx('div', {
                            className: M($i, null == l ? void 0 : l.glowContainer),
                            children: he(r ? Math.min(r, o.length) : o.length, (t) =>
                                e.jsx(
                                    lr.div,
                                    {
                                        style: m,
                                        className: qi,
                                        children: e.jsx(
                                            io,
                                            { path: 'post_battle.progression.reward_glow', className: zi },
                                            t,
                                        ),
                                    },
                                    t,
                                ),
                            ),
                        }),
                    ],
                })
            );
        }),
        Hi = h.resolve('views');
    function Wi({ limit: e, rewardsTooltipResId: t, ...n }) {
        return {
            contentId: Hi.read((e) => e.lobby.tooltips.AdditionalBattlePassRewardsTooltip('resId')),
            args: { showFromIndex: e - 1, ...n },
            resId: t,
        };
    }
    function Xi({
        completed: t,
        rewardsGlowRef: n,
        bonuses: s,
        maxRewardsCount: r,
        rewardsTooltipResId: o,
        immediateAnimation: a,
        questId: i,
        level: l,
        chapter: u,
        rewardType: c,
        className: d,
        rewardItemClassName: m,
    }) {
        const p = {
            bonuses: s,
            questId: i,
            maxRewardsCount: r,
            size: ui.Small,
            resId: o,
            boxRewardTooltipArgs: Wi({
                limit: r,
                rewardsTooltipResId: o,
                rewardType: c,
                level: l ? l - 1 : void 0,
                chapter: u,
                questId: i,
            }),
            rewardItemClassMix: m,
        };
        return t
            ? e.jsx(Qi, {
                  ...p,
                  animationRef: n,
                  immediateAnimation: a,
                  className: d,
                  classNames: { glowContainer: d },
              })
            : e.jsx(Fi, { ...p, classMix: d });
    }
    const Yi = 'CompletedMark_fc4eee08',
        Zi = 'CompletedMark_glow_33775180',
        Ki = j.cubicBezier(1, 0, 0.95, 1),
        Ji = j.cubicBezier(0.45, 0, 0.52, 1),
        el = s.forwardRef(function (
            {
                target: t,
                animationRef: n,
                className: r,
                path: o,
                width: i,
                height: l,
                glow: u,
                springProps: c,
                style: d,
                classNames: m,
                onGlowRest: p,
                ...f
            },
            h,
        ) {
            const g = s.useRef(c),
                _ = vr(),
                b = a.useAdaptive(
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
                [v, y] = Ls(() => ({ from: { opacity: 0 } })),
                [w] = Ls(() => {
                    var e, s;
                    return {
                        ref: n,
                        from: { maskSize: '0% 100%', opacity: 0 },
                        to: [
                            {
                                maskSize: '40% 80%',
                                opacity: 0.5,
                                config: { duration: 100, easing: Ki },
                                immediate: null == (e = g.current) ? void 0 : e.immediate,
                                onStart: () => {
                                    var e;
                                    !0 !== (null == (e = g.current) ? void 0 : e.immediate) &&
                                        _.play('showCheckMark', { target: t || 'mission-progress:checkmark' });
                                },
                            },
                            {
                                maskSize: '100% 100%',
                                opacity: 1,
                                config: { duration: 100, easing: Ki },
                                immediate: null == (s = g.current) ? void 0 : s.immediate,
                            },
                        ],
                        onRest: () => {
                            y.start({
                                to: [
                                    { opacity: 0.6, config: { duration: 160, easing: Ji } },
                                    { opacity: 0, config: { duration: 160, easing: Ji } },
                                ],
                                onRest: p,
                            });
                        },
                        ...g,
                    };
                });
            return (
                s.useEffect(() => {
                    g.current = c;
                }, [c]),
                e.jsxs('div', {
                    className: M(Yi, r),
                    children: [
                        e.jsx(lr.div, {
                            style: v,
                            className: M(Zi, null == m ? void 0 : m.glow),
                            children: e.jsx(io, {
                                width: (null == u ? void 0 : u.width) ?? b.glow.width,
                                height: (null == u ? void 0 : u.height) ?? b.glow.height,
                                path: (null == u ? void 0 : u.path) ?? b.glow.path,
                            }),
                        }),
                        e.jsx(lr.div, {
                            ...f,
                            style: { ...w, ...d },
                            ref: h,
                            className: null == m ? void 0 : m.icon,
                            children: e.jsx(io, {
                                width: i ?? b.icon.width,
                                height: l ?? b.icon.height,
                                path: o ?? b.icon.path,
                            }),
                        }),
                    ],
                })
            );
        });
    s.forwardRef(function ({ path: t, width: n, height: s, ...r }, o) {
        const i = a.useAdaptive(
            { size: 24, path: 'post_battle.progression.done_24x24' },
            { large: { size: 32, path: 'post_battle.progression.done_32x32' } },
        );
        return e.jsx(io, { ...r, ref: o, width: n ?? i.size, height: s ?? i.size, path: t ?? i.path });
    });
    var tl = ((e) => (
        (e.EASY = 'easy'),
        (e.MEDIUM = 'medium'),
        (e.HARD = 'hard'),
        (e.BONUS = 'bonus'),
        (e.PREMIUM = 'premium'),
        (e.EPIC = 'epic'),
        e
    ))(tl || {});
    function nl({ value: t, questType: n, className: s }) {
        return t
            ? e.jsx('div', {
                  className: M(ri.iconImage, ri.iconImage__regular, n === tl.PREMIUM && ri.iconImage__gold, s),
                  style: { backgroundImage: `url(${t})` },
              })
            : null;
    }
    const sl = (e) =>
            f.createElement(
                'svg',
                { width: 13, height: 7, viewBox: '0 0 13 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
                f.createElement('path', { d: 'M9 7L13 3.49026L9 0V2.98374L0 3V4H9V7Z', fill: '#454443' }),
            ),
        rl = h.resolve('strings');
    function ol(t) {
        return 'none' === t.type
            ? e.jsx('div', { className: M(ri.separator, ri.separator__none, t.className) })
            : 'union' === t.type
              ? e.jsx('div', { className: M(ri.separator, ri.separator__union, t.className) })
              : 'or' === t.type
                ? e.jsxs('div', {
                      className: M(ri.separator, ri.separator__or, t.className),
                      children: [
                          e.jsx(sl, { width: 16, height: 16, className: ri.invertedArrow }),
                          rl.readOrEmpty('battle_results.conditions.type.or'),
                          e.jsx(sl, { width: 16, height: 16, className: ri.arrow }),
                      ],
                  })
                : e.jsx('div', {
                      className: M(ri.separator, ri.separator__and, t.className),
                      children: rl.readOrEmpty('battle_results.conditions.type.and'),
                  });
    }
    function al(t) {
        if (!t.children) return null;
        const n = s.Children.toArray(t.children);
        return e.jsx(e.Fragment, {
            children: me(
                n,
                (e) => null != e,
                (n, r) => e.jsxs(s.Fragment, { children: [r > 0 && e.jsx(ol, { ...t }), n] }, r),
            ),
        });
    }
    const il = { 1: 5, 2: 5, 3: 3 };
    function ll(e) {
        return 'item' === e.type ? 1 : e.groups.reduce((e, t) => e + ll(t), 0);
    }
    function ul(e) {
        var t;
        if ('item' === e.type) return null == (t = e.condition) ? void 0 : t.icon;
        for (const n of e.groups) {
            const e = ul(n);
            if (e) return e;
        }
    }
    function cl(t) {
        const n = t.value;
        return 'item' === n.type
            ? e.jsx(
                  ii.Condition,
                  {
                      value: n.condition,
                      completed: t.completed,
                      questsAmount: t.questsAmount,
                      guiDisabledDescription: t.guiDisabledDescription,
                      rewardsGlowRef: t.rewardsGlowRef,
                      completedMarkRef: t.completedMarkRef,
                      progressBarTarget: t.progressBarTarget,
                      multiQuest: t.multiQuest,
                      animation: t.animation,
                      lastCondition: t.lastCondition,
                  },
                  n.index,
              )
            : e.jsx(al, {
                  type: n.separate,
                  children: me(
                      n.groups,
                      (e) => 'items' === e.type || e.index < 5,
                      (s, r) =>
                          e.jsx(
                              cl,
                              {
                                  value: s,
                                  completed: t.completed,
                                  questsAmount: t.questsAmount,
                                  guiDisabledDescription: t.guiDisabledDescription,
                                  rewardsGlowRef: t.rewardsGlowRef,
                                  completedMarkRef: t.completedMarkRef,
                                  progressBarTarget: t.progressBarTarget,
                                  multiQuest: n.groups.length > 1,
                                  animation: t.animation,
                                  lastCondition: r === n.groups.length - 1,
                              },
                              r,
                          ),
                  ),
              });
    }
    const dl = 'R.images.gui.maps.icons.post_battle.general_quest',
        ml = { default: { path: `${dl}_32` }, medium: { path: dl } },
        pl = s.memo(function (t) {
            const n = qs(),
                r = qs(),
                { animation: o, immediateAnimation: i } = si(),
                { icon: l, questsAmount: u } = s.useMemo(() => {
                    const e = ll(t.value);
                    return { icon: e > 1 ? (t.generalIcon ?? ml) : (ul(t.value) ?? ml), questsAmount: e };
                }, [t.generalIcon, t.value]),
                c = a.useAdaptive(l.default, l),
                d = il[u] ?? 0,
                m = u > 3 ? 'groups__manyQuests' : 3 === u ? 'groups__threeQuests' : 'groups__twoQuests';
            return e.jsxs('div', {
                className: M(ri.groups, u > 4 && ri.groups__overflow, u > 1 && ri[m]),
                children: [
                    e.jsx('div', {
                        className: ri.iconContainer,
                        children: t.completed
                            ? e.jsx(el, {
                                  animationRef: n,
                                  className: ri.completedMark,
                                  classNames: { icon: ri.completedMarkIcon },
                                  springProps: { immediate: i, delay: 170 },
                              })
                            : e.jsx(nl, { value: c.path, questType: t.questType }),
                    }),
                    e.jsx('div', {
                        className: ri.questsWithRewards,
                        children: e.jsxs(al, {
                            type: t.separate ?? 'none',
                            children: [
                                e.jsx('div', {
                                    className: ri.questsContainer,
                                    children: e.jsx(cl, {
                                        value: t.value,
                                        completed: t.completed,
                                        questsAmount: u,
                                        guiDisabledDescription: t.guiDisabledDescription,
                                        rewardsGlowRef: r,
                                        completedMarkRef: n,
                                        progressBarTarget: t.progressBarTarget,
                                        animation: i || o,
                                    }),
                                }),
                                d > 1 &&
                                    e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx('div', { className: ri.gap }),
                                            e.jsx('div', {
                                                className: ri.rewardsContainer,
                                                children: e.jsx(Xi, {
                                                    completed: t.completed,
                                                    rewardsGlowRef: r,
                                                    immediateAnimation: i,
                                                    bonuses: t.bonuses,
                                                    maxRewardsCount: d,
                                                    rewardsTooltipResId: t.rewardsTooltipResId,
                                                    questId: t.questId,
                                                    className: ri.rewards,
                                                    rewardItemClassName: ri.reward,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        });
    function fl({ completed: t, progress: n, animation: r, immediateAnimation: o, target: a, ...i }) {
        const l = vr(),
            u = s.useMemo(() => ({ completed: t, animation: r, immediateAnimation: o }), [t, r, o]);
        return e.jsx(ni.Provider, {
            value: u,
            children: e.jsx(Xo, {
                ...i,
                onMouseEnter: (e) => {
                    var t;
                    (null == (t = i.onMouseEnter) || t.call(i, e),
                        !0 !== i.disabled &&
                            l.play('mouse-enter', { target: a || 'mission-progress:mission-card', original: e }));
                },
                progressionCountProps: n,
                className: M(ri.base, t && ri.base__completed, i.className),
                classNames: { content: ri.cardContent, ...i.classNames },
            }),
        });
    }
    ((fl.Content = ii), (fl.Groups = pl), (fl.Separators = al));
    const hl = h.resolve('strings'),
        gl = h.resolve('aliases').read((e) => e.battle_results.progression.BattleMatters('resId')),
        _l = { rootId: gl },
        [bl, vl] = (
            (t = 'DataLayerProvider') =>
            (n, r, o) => {
                const a = s.createContext(null);
                function i(i) {
                    var l;
                    const { mode: u, options: c, children: d, mocks: m } = i,
                        p = s.useContext(Tr),
                        f = u ?? p.mode,
                        h = m ?? p.mocks,
                        g = s.useRef([]),
                        _ = null == (l = null == o ? void 0 : o.useRequires) ? void 0 : l.call(o),
                        b = Te((e, s, a) => {
                            var l;
                            const u =
                                    'real' !== e && a
                                        ? (function (e, t) {
                                              return {
                                                  subscribe: () => 0,
                                                  readSafeByPath: e,
                                                  readByPath: e,
                                                  createCallback: (n, s) => {
                                                      const r = e(te(s, t));
                                                      return (...e) => {
                                                          r(n(...e));
                                                      };
                                                  },
                                                  createCallbackNoArgs: (n) => {
                                                      const s = e(te(n, t));
                                                      return () => {
                                                          s();
                                                      };
                                                  },
                                                  dispose: () => {},
                                                  unsubscribe: () => {},
                                                  events: { subscribersNotified: new K() },
                                              };
                                          })(a.getter, s)
                                        : ee(s, { name: t }),
                                c = (t) => ('mocks' === e ? (null == a ? void 0 : a.getter(t, s)) : u.readByPath(t)),
                                d = (e) => g.current.push(e),
                                m = 'initial' in i && {
                                    initial:
                                        null == (l = null == o ? void 0 : o.initial) ? void 0 : l.call(o, i.initial),
                                },
                                p = n({
                                    ...m,
                                    mode: e,
                                    readByPath: c,
                                    requires: _,
                                    externalModel: u,
                                    observableModel: Nr(u, e, c),
                                    cleanup: d,
                                }),
                                f = { ...m, mode: e, model: p, externalModel: u, cleanup: d, requires: _ },
                                h = 'mocks' === e && (null == a ? void 0 : a.controls) ? a.controls(f) : {};
                            return {
                                model: p,
                                controls: { ...(null == r ? void 0 : r(f)), ...h },
                                externalModel: u,
                                mode: e,
                            };
                        }),
                        v = s.useRef(!1),
                        [y, w] = s.useState(f);
                    s.useEffect(() => {
                        w(f);
                    }, [f]);
                    const [x, R] = s.useState(() => b(y, c, h));
                    return (
                        s.useEffect(() => {
                            v.current ? R(b(y, c, h)) : (v.current = !0);
                        }, [
                            b,
                            h,
                            y,
                            null == c ? void 0 : c.context,
                            null == c ? void 0 : c.initializer,
                            null == c ? void 0 : c.getRoot,
                            null == c ? void 0 : c.rootId,
                        ]),
                        s.useEffect(
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
                            const e = s.useContext(a);
                            if (!e) throw new Error(`hook useModel must be used within a ${i.displayName}.`);
                            return e;
                        },
                        { Context: a },
                    ]
                );
            }
        )('BattleMattersModelProvider')(
            ({ observableModel: e }) => {
                const t = { battleMatters: e.array('battleMatters'), ...e.primitives(['navigationEnabled']) },
                    n = Ar(() =>
                        de(t.battleMatters.get(), (e) => {
                            const t = e.state === xe.Done;
                            return {
                                number: e.number,
                                completed: t,
                                conditionContext: {
                                    id: String(e.number),
                                    description: hl.readOrEmpty(
                                        `static_quests.battle_matters_quests.battle_matters_${e.number}.conditions.description`,
                                    ),
                                    completed: t,
                                    progression:
                                        e.maxProgress > 1
                                            ? {
                                                  total: e.maxProgress,
                                                  current: e.currentProgress,
                                                  earned: e.currentProgress - e.lastSeenProgress,
                                              }
                                            : void 0,
                                },
                                rewards: e.rewards,
                            };
                        }).sort((e, t) => Number(t.completed) - Number(e.completed)),
                    );
                return { ...t, quests: n };
            },
            ({ externalModel: e }) => ({ navigate: e.createCallbackNoArgs('onNavigate') }),
        ),
        yl = {
            base: 'BattleMatters_cd43d7e5',
            headContainer: 'BattleMatters_headContainer_4f657335',
            number: 'BattleMatters_number_5ae08c3e',
            condition: 'BattleMatters_condition_773e729e',
            rewards: 'BattleMatters_rewards_8b86d74c',
            rewardItem: 'BattleMatters_rewardItem_a3a4a78b',
        },
        wl = h.resolve('strings'),
        xl = i.observer(function ({ quest: t, animation: n, immediateAnimation: s }) {
            const r = qs(),
                o = qs(),
                a = fr({ body: Ni('battle_results.missionsProgress.battleMatters.doneInfo', { name: t.number }) });
            return e.jsxs('div', {
                className: yl.base,
                children: [
                    e.jsx('div', {
                        className: yl.headContainer,
                        children: t.completed
                            ? e.jsx(el, {
                                  ...a,
                                  animationRef: o,
                                  className: yl.completedMark,
                                  springProps: { immediate: s },
                              })
                            : e.jsx('div', { className: yl.number, children: t.number }),
                    }),
                    e.jsx('div', {
                        ...(t.completed && a),
                        className: yl.condition,
                        children: e.jsx(ii.Condition, {
                            value: t.conditionContext,
                            rewardsGlowRef: r,
                            completedMarkRef: o,
                            completed: t.completed,
                            animation: n,
                        }),
                    }),
                    e.jsx('div', {
                        className: yl.rewards,
                        children: e.jsx(Xi, {
                            rewardsGlowRef: r,
                            completed: t.completed,
                            maxRewardsCount: 5,
                            bonuses: t.rewards,
                            rewardItemClassName: yl.rewardItem,
                            rewardsTooltipResId: gl,
                            immediateAnimation: s,
                        }),
                    }),
                ],
            });
        }),
        Rl = i.observer(function ({ animation: t, immediateAnimation: n }) {
            const { model: r, controls: o } = vl(),
                a = r.navigationEnabled.get(),
                i = s.useCallback(() => {
                    a && o.navigate();
                }, [o, a]);
            return e.jsx(fl, {
                animation: t,
                immediateAnimation: n,
                target: 'mission-progress:battle-matters:mission-card',
                disabled: !a,
                title: P.toUpperCase(wl.readOrEmpty('battle_results.missionsProgress.battleMatters.title')),
                onButtonAction: i,
                onClick: i,
                actionTooltipParams: { body: wl.readOrEmpty('battle_results.progression.linkBtn.info') },
                children: de(r.quests(), (s) => e.jsx(xl, { quest: s, animation: t, immediateAnimation: n }, s.number)),
            });
        }),
        El = {
            icon: '',
            index: 0,
            name: '',
            value: '',
            isCompensation: !1,
            tooltipId: '',
            tooltipContentId: '',
            label: '',
            probability: 0,
        },
        Cl = { ...El, name: 'equipCoin', label: 'Боны', value: '1000' },
        Pl = { ...El, name: 'freeXP', label: 'Свободный опыт', value: '1000' },
        Sl = { ...El, name: 'credits', label: 'Кредиты', value: '400000' },
        Tl = { ...El, name: 'xpFactor', label: 'Коэффициент боевого опыта', value: '3.0' },
        kl = [Tl, Sl, Pl, Cl, Tl],
        Nl = {
            navigationEnabled: !0,
            battleMatters: [
                { number: 11, state: xe.Done, currentProgress: -1, lastSeenProgress: -1, maxProgress: -1, rewards: kl },
                {
                    number: 19,
                    state: xe.InProgress,
                    currentProgress: 4,
                    lastSeenProgress: 1,
                    maxProgress: 5,
                    rewards: kl,
                },
            ],
            onNavigate: ne,
        },
        Al = {
            getter:
                ((Il = Nl),
                (e, t) => {
                    const n = te(e, t);
                    return n
                        ? (function (e, t) {
                              const n = e.split('.');
                              let s = t;
                              for (const r of n) s = null == s ? void 0 : s[r];
                              return s;
                          })(n, Il)
                        : Il;
                }),
        };
    var Il;
    const Ml = new (class {
        constructor() {
            m(this, 'items', []);
        }
        add(e) {
            return (this.items.push([e, {}]), this);
        }
        addWithProps(e, t) {
            return (this.items.push([e, t]), this);
        }
        render(t) {
            return e.jsx(e.Fragment, {
                children: this.items.reduceRight((e, [t, n], r) => s.createElement(t, { ...n, key: r }, e), t),
            });
        }
    })()
        .addWithProps(bl, { options: _l, mode: 'real', mocks: Al })
        .addWithProps(
            function (t) {
                return e.jsx(so, {
                    children: e.jsx(br, {
                        overrides: t.soundsOverrides,
                        severity: t.soundSeverity,
                        silent: t.soundsOff,
                        children: t.children,
                    }),
                });
            },
            {
                soundsOverrides:
                    ((jl = {
                        showCheckMark: { 'mission-progress:checkmark': 'umg_hub_quest_complete' },
                        numbersShown: {
                            'mission-progress:received-value': 'gui_pbs_missions_progress_stats',
                            'mission-progress:progress-stats': 'gui_pbs_missions_progress_stats',
                        },
                    }),
                    Object.entries(jl).reduce(
                        (e, [t, n]) => (
                            (e[t] = (e) => {
                                var s;
                                e && e.target in n ? z.sound(n[e.target]) : null == (s = hr[t]) || s.call(hr, e);
                            }),
                            e
                        ),
                        {},
                    )),
            },
        );
    var jl, Dl;
    function Ol(t) {
        return Ml.render(e.jsx(Rl, { ...t }));
    }
    exports.plugin =
        ((Dl = async ({ url: t }) => {
            const n = new ae();
            return {
                async init() {
                    var s,
                        r,
                        o,
                        a,
                        i,
                        l = [];
                    try {
                        const u = Ce(
                            `${(function (e, t = '/') {
                                let n = -1;
                                for (let s = 0; s < e.length; s++) {
                                    const r = e[s];
                                    if ((r === t && (n = s), '.' === r)) return e.slice(0, n);
                                }
                                return e;
                            })(t)}/battle_matters.css`,
                        );
                        (n.add(u.cleanup), await u.promise.catch(console.error));
                        const m = ee(_l, { name: 'BattleMattersProgressDataLayer' }),
                            p =
                                ((s = l),
                                (i = m.dispose),
                                null != (r = { [Symbol.dispose]: i })
                                    ? ('object' != typeof r && 'function' != typeof r && d('Object expected'),
                                      o && (a = r[c('asyncDispose')]),
                                      void 0 === a && (a = r[c('dispose')]),
                                      'function' != typeof a && d('Object not disposable'),
                                      s.push([o, a, r]))
                                    : o && s.push([o]),
                                (function (e, t) {
                                    if (Array.isArray(e)) return e.some(t);
                                    for (let n = 0; n < e.length; n++) if (t(ce(e, n), n, e)) return !0;
                                    return !1;
                                })(m.readByPath('battleMatters'), (e) => e.state === xe.Done));
                        return {
                            animated: !0,
                            component: Ol,
                            notifications: p
                                ? [
                                      {
                                          id: we(),
                                          item: e.jsx(no, {
                                              path: 'battle_results.missionsProgress.notificationsTabs.battleMatters',
                                          }),
                                      },
                                  ]
                                : void 0,
                            categoryOrder: 900,
                            completed: p,
                        };
                    } catch (p) {
                        var u = p,
                            m = !0;
                    } finally {
                        ((e, t, n) => {
                            var s =
                                    'function' == typeof SuppressedError
                                        ? SuppressedError
                                        : function (e, t, n, s) {
                                              return (
                                                  ((s = Error(n)).name = 'SuppressedError'),
                                                  (s.error = e),
                                                  (s.suppressed = t),
                                                  s
                                              );
                                          },
                                r = (e) =>
                                    (t = n ? new s(e, t, 'An error was suppressed during disposal') : ((n = !0), e)),
                                o = (s) => {
                                    for (; (s = e.pop()); )
                                        try {
                                            var a = s[1] && s[1].call(s[2]);
                                            if (s[0]) return Promise.resolve(a).then(o, (e) => (r(e), o()));
                                        } catch (i) {
                                            r(i);
                                        }
                                    if (n) throw t;
                                };
                            o();
                        })(l, u, m);
                    }
                },
                async destroy() {
                    n.dispose();
                },
            };
        }),
        async (e) => ({ ...(await Dl(e)), id: e.id }));
});

export default exports;
