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
              require('mobx-react-lite'),
              require('@wg/media_wrapper'),
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
                    'mobx-react-lite',
                    '@wg/media_wrapper',
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
                e.module_externals.mobxReactLite,
                e.module_externals.wg.mediaWrapper,
            );
})(this, function (e, t, n, s, r, o, i, a) {
    'use strict';
    var l,
        u = Object.defineProperty,
        c = (e, t) => ((t = Symbol[e]) ? t : Symbol.for('Symbol.' + e)),
        d = (e) => {
            throw TypeError(e);
        },
        p = (e, t, n) =>
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
                    const s = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, s.get ? s : { enumerable: !0, get: () => e[n] });
                }
        return ((t.default = e), Object.freeze(t));
    }
    const f = m(s),
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
    class v {
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
    var b = ((e) => (
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
    ))(b || {});
    const y = { integral: 0, gold: 1 },
        w = { fractional: 0, woZeroDigits: 1 },
        x = Object.keys(y),
        E = Object.keys(w);
    const C = { full: b.FullTime, short: b.ShortTime };
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
        dateTimeFormats: b,
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
    class k {
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
    class T {
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
        strings: t.asFunction(() => new k()).singleton(),
        images: t.asFunction(() => new v(window.R.images.gui.maps.icons)).singleton(),
        atlases: t.asFunction(() => new v(window.R.atlases)).singleton(),
        videos: t.asFunction(() => new T(window.R.videos)).singleton(),
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
    var I,
        A = { exports: {} };
    /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */ ((I = A),
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
                                var i = t.apply(null, r);
                                i && n.push(i);
                            }
                        } else if ('object' === o) {
                            if (
                                r.toString !== Object.prototype.toString &&
                                !r.toString.toString().includes('[native code]')
                            ) {
                                n.push(r.toString());
                                continue;
                            }
                            for (var a in r) e.call(r, a) && r[a] && n.push(a);
                        }
                    }
                }
                return n.join(' ');
            }
            I.exports ? ((t.default = t), (I.exports = t)) : (window.classNames = t);
        })());
    const j = N(A.exports),
        M = {
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
            reverseEaseInOutCirc: (e) => 1 - M.easeInOutCirc(1 - e),
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
                        const i = O(r, t, n);
                        if (Math.abs(i) < s) break;
                        r -= o / i;
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
    function $(e) {
        return (t) => (
            engine.on(e, t),
            () => {
                engine.off(e, t);
            }
        );
    }
    function F(e) {
        viewEnv.setTrackMouseOnStage(e);
    }
    const L = { down: $('mousedown'), up: $('mouseup'), move: $('mousemove') };
    function U(e) {
        engine.call('PlaySound', e);
    }
    !(function () {
        const e = { listeners: 0, enabled: !0, initialized: !1 };
        function t() {
            e.enabled && F(!1);
        }
        function n() {
            e.enabled && F(!0);
        }
        function s() {
            e.enabled
                ? e.listeners < 1
                    ? ((e.initialized = !1),
                      document.body.removeEventListener('mouseenter', t),
                      document.body.removeEventListener('mouseleave', n),
                      F(!1))
                    : e.initialized ||
                      ((e.initialized = !0),
                      document.body.addEventListener('mouseenter', t),
                      document.body.addEventListener('mouseleave', n))
                : F(!1);
        }
        ['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const r = `mouse${t}`,
                            o = L[t]((e) => n([e, 'outside']));
                        function i(e) {
                            n([e, 'inside']);
                        }
                        return (
                            window.addEventListener(r, i),
                            s(),
                            () => {
                                (o(), window.removeEventListener(r, i), (e.listeners -= 1), s());
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
            onTextureFrozen: $('self.onTextureFrozen'),
            onTextureReady: $('self.onTextureReady'),
            onDomBuilt: $('self.onDomBuilt'),
            onLoaded: $('self.onLoaded'),
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
            onDisplayChanged: $('self.onShowingStatusChanged'),
            onFocusUpdated: $('self.onFocusChanged'),
            children: {
                onAdded: $('children.onAdded'),
                onLoaded: $('children.onLoaded'),
                onRemoved: $('children.onRemoved'),
                onAttached: $('children.onAttached'),
                onTextureReady: $('children.onTextureReady'),
                onRequestPosition: $('children.requestPosition'),
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
            p(this, 'listeners', new Set());
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
            i = { subscribersNotified: new K() },
            a = engine.whenReady.then(() => {
                function e(e, t, n) {
                    (n.forEach((n) => {
                        const s = o.get(n);
                        void 0 !== s && s(e, t);
                    }),
                        i.subscribersNotified.emit());
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
                const i = (function (e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                })('string' == typeof r ? `${s}.${r}` : s, t, !0);
                return (o.set(i, n), e && n(u(r), []), i);
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
                a.then((e) => e());
            },
            unsubscribe: c,
            events: i,
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
    class ie {
        constructor() {
            (p(this, '_disposes', new Set()),
                p(this, 'dispose', () => {
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
    function ae(e, t, n, s) {
        return (e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s));
    }
    ('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
        'symbol' != typeof Symbol.asyncDispose &&
            Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
        (function () {
            if (!self.fetch) {
                ((i.prototype.append = function (e, t) {
                    ((e = r(e)), (t = o(t)));
                    var n = this.map[e];
                    (n || ((n = []), (this.map[e] = n)), n.push(t));
                }),
                    (i.prototype.delete = function (e) {
                        delete this.map[r(e)];
                    }),
                    (i.prototype.get = function (e) {
                        var t = this.map[r(e)];
                        return t ? t[0] : null;
                    }),
                    (i.prototype.getAll = function (e) {
                        return this.map[r(e)] || [];
                    }),
                    (i.prototype.has = function (e) {
                        return this.map.hasOwnProperty(r(e));
                    }),
                    (i.prototype.set = function (e, t) {
                        this.map[r(e)] = [o(t)];
                    }),
                    (i.prototype.forEach = function (e) {
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
                    (self.Headers = i),
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
                                function i() {
                                    if (4 === o.readyState) {
                                        var e = 1223 === o.status ? 204 : o.status;
                                        if (e < 100 || e > 599) n(new TypeError('Network request failed'));
                                        else {
                                            var s = {
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
                                                r = 'response' in o ? o.response : o.responseText;
                                            t(new f(r, s));
                                        }
                                    }
                                }
                                ('cors' === r.credentials && (o.withCredentials = !0),
                                    (o.onreadystatechange = i),
                                    self.usingActiveXhr ||
                                        ((o.onload = i),
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
            function i(e) {
                this.map = {};
                var t = this;
                e instanceof i
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
            function a(e) {
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
                              var e = a(this);
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
                                  n = a(this);
                              if (n) return n;
                              if (this._bodyBlob)
                                  return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), l(t));
                              if (this._bodyFormData) throw new Error('could not read FormData body as text');
                              return fetch.Promise.resolve(this._bodyText);
                          }))
                        : (this.text = function () {
                              var e = a(this);
                              return e || fetch.Promise.resolve(this._bodyText);
                          }),
                    t &&
                        (this.formData = function () {
                            return this.text().then(p);
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
                    (this.headers = new i(t.headers)),
                    (this.method = ((s = t.method || 'GET'), (r = s.toUpperCase()), n.indexOf(r) > -1 ? r : s)),
                    (this.mode = t.mode || null),
                    (this.referrer = null),
                    ('GET' === this.method || 'HEAD' === this.method) && t.body)
                )
                    throw new TypeError('Body not allowed for GET or HEAD requests');
                this._initBody(t.body);
            }
            function p(e) {
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
            function m(e) {
                var t = new i();
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
                    (this.headers = t.headers instanceof i ? t.headers : new i(t.headers)),
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
    function pe(e, t, n) {
        const s = [];
        for (let r = 0; r < e.length; r++) {
            const o = ce(e, r);
            t(o, r, e) && s.push(n(o, r, e));
        }
        return s;
    }
    function me(e) {
        const t = [];
        return (
            (function (e, t) {
                for (let n = 0; n < e.length; n++) t(ce(e, n), n, e);
            })(e, (e) => {
                !1 !== e && null != e && t.push(e);
            }),
            t
        );
    }
    const fe = (e) => {
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
    function he(e, t) {
        e || console.error(t || 'Assertion failed');
    }
    function ge(e, t, n) {
        return 'function' == typeof t ? _e(0, e, t) : (he(void 0 !== n, 'fn must be defined'), _e(e, t, n));
    }
    function _e(e, t, n) {
        const s = new Array(t - e);
        for (let r = e; r < t; r++) s[r] = n(r);
        return s;
    }
    he.log = function (e, t) {
        e || console.error(t || 'Assertion failed');
    };
    function ve(e) {
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
        zh_cn: ve,
        zh_sg: ve,
        zh_tw: ve,
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
    function ye(e) {
        return e.split(' ');
    }
    const we = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko']);
    function xe() {
        return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    }
    var Re = ((e) => ((e.Done = 'done'), (e.Locked = 'notAvailable'), (e.Active = ''), e))(Re || {});
    const Ee = (e) => {
            const t = s.useRef();
            return (
                s.useEffect(() => {
                    t.current = e;
                }, [e]),
                t.current
            );
        },
        Ce = [];
    function Pe(e) {
        const t = s.useRef(e);
        return (
            s.useLayoutEffect(() => {
                t.current = e;
            }),
            s.useCallback((...e) => (0, t.current)(...e), Ce)
        );
    }
    function Se(e) {
        s.useEffect(() => e, []);
    }
    s.createContext(void 0);
    var ke = Ve(),
        Te = (e) => Le(e, ke),
        Ne = Ve();
    Te.write = (e) => Le(e, Ne);
    var Ie = Ve();
    Te.onStart = (e) => Le(e, Ie);
    var Ae = Ve();
    Te.onFrame = (e) => Le(e, Ae);
    var je = Ve();
    Te.onFinish = (e) => Le(e, je);
    var Me = [];
    Te.setTimeout = (e, t) => {
        const n = Te.now() + t,
            s = () => {
                const e = Me.findIndex((e) => e.cancel == s);
                (~e && Me.splice(e, 1), ($e -= ~e ? 1 : 0));
            },
            r = { time: n, handler: e, cancel: s };
        return (Me.splice(De(n), 0, r), ($e += 1), Ue(), r);
    };
    var De = (e) => ~(~Me.findIndex((t) => t.time > e) || ~Me.length);
    ((Te.cancel = (e) => {
        (Ie.delete(e), Ae.delete(e), je.delete(e), ke.delete(e), Ne.delete(e));
    }),
        (Te.sync = (e) => {
            ((Fe = !0), Te.batchedUpdates(e), (Fe = !1));
        }),
        (Te.throttle = (e) => {
            let t;
            function n() {
                try {
                    e(...t);
                } finally {
                    t = null;
                }
            }
            function s(...e) {
                ((t = e), Te.onStart(n));
            }
            return (
                (s.handler = e),
                (s.cancel = () => {
                    (Ie.delete(n), (t = null));
                }),
                s
            );
        }));
    var Oe = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
    ((Te.use = (e) => (Oe = e)),
        (Te.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
        (Te.batchedUpdates = (e) => e()),
        (Te.catch = console.error),
        (Te.frameLoop = 'always'),
        (Te.advance = () => {
            'demand' !== Te.frameLoop
                ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
                : ze();
        }));
    var Be = -1,
        $e = 0,
        Fe = !1;
    function Le(e, t) {
        Fe ? (t.delete(e), e(0)) : (t.add(e), Ue());
    }
    function Ue() {
        Be < 0 && ((Be = 0), 'demand' !== Te.frameLoop && Oe(qe));
    }
    function qe() {
        ~Be && (Oe(qe), Te.batchedUpdates(ze));
    }
    function ze() {
        const e = Be;
        Be = Te.now();
        const t = De(Be);
        (t && (Ge(Me.splice(0, t), (e) => e.handler()), ($e -= t)),
            $e
                ? (Ie.flush(), ke.flush(e ? Math.min(64, Be - e) : 16.667), Ae.flush(), Ne.flush(), je.flush())
                : (Be = -1));
    }
    function Ve() {
        let e = new Set(),
            t = e;
        return {
            add(n) {
                (($e += t != e || e.has(n) ? 0 : 1), e.add(n));
            },
            delete: (n) => (($e -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
            flush(n) {
                t.size && ((e = new Set()), ($e -= t.size), Ge(t, (t) => t(n) && e.add(t)), ($e += e.size), (t = e));
            },
        };
    }
    function Ge(e, t) {
        e.forEach((e) => {
            try {
                t(e);
            } catch (n) {
                Te.catch(n);
            }
        });
    }
    var Qe = Object.defineProperty,
        He = {};
    function We() {}
    ((e, t) => {
        for (var n in t) Qe(e, n, { get: t[n], enumerable: !0 });
    })(He, {
        assign: () => lt,
        colors: () => ot,
        createStringInterpolator: () => tt,
        skipAnimation: () => it,
        to: () => nt,
        willAdvance: () => at,
    });
    var Xe = {
        arr: Array.isArray,
        obj: (e) => !!e && 'Object' === e.constructor.name,
        fun: (e) => 'function' == typeof e,
        str: (e) => 'string' == typeof e,
        num: (e) => 'number' == typeof e,
        und: (e) => void 0 === e,
    };
    function Ye(e, t) {
        if (Xe.arr(e)) {
            if (!Xe.arr(t) || e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
        }
        return e === t;
    }
    var Ze = (e, t) => e.forEach(t);
    function Ke(e, t, n) {
        if (Xe.arr(e)) for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s);
    }
    var Je = (e) => (Xe.und(e) ? [] : Xe.arr(e) ? e : [e]);
    function et(e, t) {
        if (e.size) {
            const n = Array.from(e);
            (e.clear(), Ze(n, t));
        }
    }
    var tt,
        nt,
        st = (e, ...t) => et(e, (e) => e(...t)),
        rt = () =>
            'undefined' == typeof window ||
            !window.navigator ||
            /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        ot = null,
        it = !1,
        at = We,
        lt = (e) => {
            (e.to && (nt = e.to),
                e.now && (Te.now = e.now),
                void 0 !== e.colors && (ot = e.colors),
                null != e.skipAnimation && (it = e.skipAnimation),
                e.createStringInterpolator && (tt = e.createStringInterpolator),
                e.requestAnimationFrame && Te.use(e.requestAnimationFrame),
                e.batchedUpdates && (Te.batchedUpdates = e.batchedUpdates),
                e.willAdvance && (at = e.willAdvance),
                e.frameLoop && (Te.frameLoop = e.frameLoop));
        },
        ut = new Set(),
        ct = [],
        dt = [],
        pt = 0,
        mt = {
            get idle() {
                return !ut.size && !ct.length;
            },
            start(e) {
                pt > e.priority ? (ut.add(e), Te.onStart(ft)) : (ht(e), Te(_t));
            },
            advance: _t,
            sort(e) {
                if (pt) Te.onFrame(() => mt.sort(e));
                else {
                    const t = ct.indexOf(e);
                    ~t && (ct.splice(t, 1), gt(e));
                }
            },
            clear() {
                ((ct = []), ut.clear());
            },
        };
    function ft() {
        (ut.forEach(ht), ut.clear(), Te(_t));
    }
    function ht(e) {
        ct.includes(e) || gt(e);
    }
    function gt(e) {
        ct.splice(
            (function (e, t) {
                const n = e.findIndex(t);
                return n < 0 ? e.length : n;
            })(ct, (t) => t.priority > e.priority),
            0,
            e,
        );
    }
    function _t(e) {
        const t = dt;
        for (let n = 0; n < ct.length; n++) {
            const s = ct[n];
            ((pt = s.priority), s.idle || (at(s), s.advance(e), s.idle || t.push(s)));
        }
        return ((pt = 0), ((dt = ct).length = 0), (ct = t).length > 0);
    }
    var vt = '[-+]?\\d*\\.?\\d+',
        bt = vt + '%';
    function yt(...e) {
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var wt = new RegExp('rgb' + yt(vt, vt, vt)),
        xt = new RegExp('rgba' + yt(vt, vt, vt, vt)),
        Rt = new RegExp('hsl' + yt(vt, bt, bt)),
        Et = new RegExp('hsla' + yt(vt, bt, bt, vt)),
        Ct = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Pt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        St = /^#([0-9a-fA-F]{6})$/,
        kt = /^#([0-9a-fA-F]{8})$/;
    function Tt(e, t, n) {
        return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        );
    }
    function Nt(e, t, n) {
        const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
            r = 2 * n - s,
            o = Tt(r, s, e + 1 / 3),
            i = Tt(r, s, e),
            a = Tt(r, s, e - 1 / 3);
        return (Math.round(255 * o) << 24) | (Math.round(255 * i) << 16) | (Math.round(255 * a) << 8);
    }
    function It(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function At(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function jt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function Mt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
    }
    function Dt(e) {
        let t = (function (e) {
            let t;
            return 'number' == typeof e
                ? e >>> 0 === e && e >= 0 && e <= 4294967295
                    ? e
                    : null
                : (t = St.exec(e))
                  ? parseInt(t[1] + 'ff', 16) >>> 0
                  : ot && void 0 !== ot[e]
                    ? ot[e]
                    : (t = wt.exec(e))
                      ? ((It(t[1]) << 24) | (It(t[2]) << 16) | (It(t[3]) << 8) | 255) >>> 0
                      : (t = xt.exec(e))
                        ? ((It(t[1]) << 24) | (It(t[2]) << 16) | (It(t[3]) << 8) | jt(t[4])) >>> 0
                        : (t = Ct.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                          : (t = kt.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = Pt.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = Rt.exec(e))
                                ? (255 | Nt(At(t[1]), Mt(t[2]), Mt(t[3]))) >>> 0
                                : (t = Et.exec(e))
                                  ? (Nt(At(t[1]), Mt(t[2]), Mt(t[3])) | jt(t[4])) >>> 0
                                  : null;
        })(e);
        if (null === t) return e;
        t = t || 0;
        return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
    }
    var Ot = (e, t, n) => {
        if (Xe.fun(e)) return e;
        if (Xe.arr(e)) return Ot({ range: e, output: t, extrapolate: n });
        if (Xe.str(e.output[0])) return tt(e);
        const s = e,
            r = s.output,
            o = s.range || [0, 1],
            i = s.extrapolateLeft || s.extrapolate || 'extend',
            a = s.extrapolateRight || s.extrapolate || 'extend',
            l = s.easing || ((e) => e);
        return (e) => {
            const t = (function (e, t) {
                for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                return n - 1;
            })(e, o);
            return (function (e, t, n, s, r, o, i, a, l) {
                let u = l ? l(e) : e;
                if (u < t) {
                    if ('identity' === i) return u;
                    'clamp' === i && (u = t);
                }
                if (u > n) {
                    if ('identity' === a) return u;
                    'clamp' === a && (u = n);
                }
                if (s === r) return s;
                if (t === n) return e <= t ? s : r;
                t === -1 / 0 ? (u = -u) : n === 1 / 0 ? (u -= t) : (u = (u - t) / (n - t));
                ((u = o(u)), s === -1 / 0 ? (u = -u) : r === 1 / 0 ? (u += s) : (u = u * (r - s) + s));
                return u;
            })(e, o[t], o[t + 1], r[t], r[t + 1], l, i, a, s.map);
        };
    };
    var Bt = { linear: (e) => e, easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2) },
        $t = Symbol.for('FluidValue.get'),
        Ft = Symbol.for('FluidValue.observers'),
        Lt = (e) => Boolean(e && e[$t]),
        Ut = (e) => (e && e[$t] ? e[$t]() : e),
        qt = (e) => e[Ft] || null;
    function zt(e, t) {
        const n = e[Ft];
        n &&
            n.forEach((e) => {
                !(function (e, t) {
                    e.eventObserved ? e.eventObserved(t) : e(t);
                })(e, t);
            });
    }
    var Vt = class {
            constructor(e) {
                if (!e && !(e = this.get)) throw Error('Unknown getter');
                Gt(this, e);
            }
        },
        Gt = (e, t) => Xt(e, $t, t);
    function Qt(e, t) {
        if (e[$t]) {
            let n = e[Ft];
            (n || Xt(e, Ft, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
        }
        return t;
    }
    function Ht(e, t) {
        const n = e[Ft];
        if (n && n.has(t)) {
            const s = n.size - 1;
            (s ? n.delete(t) : (e[Ft] = null), e.observerRemoved && e.observerRemoved(s, t));
        }
    }
    var Wt,
        Xt = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
        Yt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Zt = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Kt = new RegExp(`(${Yt.source})(%|[a-z]+)`, 'i'),
        Jt = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        en = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        tn = (e) => {
            const [t, n] = nn(e);
            if (!t || rt()) return e;
            const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
            if (s) return s.trim();
            if (n && n.startsWith('--')) {
                const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
                return t || e;
            }
            return n && en.test(n) ? tn(n) : n || e;
        },
        nn = (e) => {
            const t = en.exec(e);
            if (!t) return [,];
            const [, n, s] = t;
            return [n, s];
        },
        sn = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
        rn = (e) => {
            Wt || (Wt = ot ? new RegExp(`(${Object.keys(ot).join('|')})(?!\\w)`, 'g') : /^\b$/);
            const t = e.output.map((e) => Ut(e).replace(en, tn).replace(Zt, Dt).replace(Wt, Dt)),
                n = t.map((e) => e.match(Yt).map(Number)),
                s = n[0].map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                ),
                r = s.map((t) => Ot({ ...e, output: t }));
            return (e) => {
                var n;
                const s = !Kt.test(t[0]) && (null == (n = t.find((e) => Kt.test(e))) ? void 0 : n.replace(Yt, ''));
                let o = 0;
                return t[0].replace(Yt, () => `${r[o++](e)}${s || ''}`).replace(Jt, sn);
            };
        },
        on = 'react-spring: ',
        an = (e) => {
            const t = e;
            let n = !1;
            if ('function' != typeof t) throw new TypeError(`${on}once requires a function parameter`);
            return (...e) => {
                n || (t(...e), (n = !0));
            };
        },
        ln = an(console.warn);
    var un = an(console.warn);
    function cn(e) {
        return Xe.str(e) && ('#' == e[0] || /\d/.test(e) || (!rt() && en.test(e)) || e in (ot || {}));
    }
    var dn = rt() ? s.useEffect : s.useLayoutEffect,
        pn = () => {
            const e = s.useRef(!1);
            return (
                dn(
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
    function mn() {
        const e = s.useState()[1],
            t = pn();
        return () => {
            t.current && e(Math.random());
        };
    }
    var fn = (e) => s.useEffect(e, hn),
        hn = [];
    function gn(e) {
        const t = s.useRef();
        return (
            s.useEffect(() => {
                t.current = e;
            }),
            t.current
        );
    }
    var _n = Symbol.for('Animated:node'),
        vn = (e) => e && e[_n],
        bn = (e, t) => {
            return (
                (n = e),
                (s = _n),
                (r = t),
                Object.defineProperty(n, s, { value: r, writable: !0, configurable: !0 })
            );
            var n, s, r;
        },
        yn = (e) => e && e[_n] && e[_n].getPayload(),
        wn = class {
            constructor() {
                bn(this, this);
            }
            getPayload() {
                return this.payload || [];
            }
        },
        xn = class extends wn {
            constructor(e) {
                (super(),
                    (this._value = e),
                    (this.done = !0),
                    (this.durationProgress = 0),
                    Xe.num(this._value) && (this.lastPosition = this._value));
            }
            static create(e) {
                return new xn(e);
            }
            getPayload() {
                return [this];
            }
            getValue() {
                return this._value;
            }
            setValue(e, t) {
                return (
                    Xe.num(e) &&
                        ((this.lastPosition = e),
                        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                    this._value !== e && ((this._value = e), !0)
                );
            }
            reset() {
                const { done: e } = this;
                ((this.done = !1),
                    Xe.num(this._value) &&
                        ((this.elapsedTime = 0),
                        (this.durationProgress = 0),
                        (this.lastPosition = this._value),
                        e && (this.lastVelocity = null),
                        (this.v0 = null)));
            }
        },
        Rn = class extends xn {
            constructor(e) {
                (super(0), (this._string = null), (this._toString = Ot({ output: [e, e] })));
            }
            static create(e) {
                return new Rn(e);
            }
            getValue() {
                const e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }
            setValue(e) {
                if (Xe.str(e)) {
                    if (e == this._string) return !1;
                    ((this._string = e), (this._value = 1));
                } else {
                    if (!super.setValue(e)) return !1;
                    this._string = null;
                }
                return !0;
            }
            reset(e) {
                (e && (this._toString = Ot({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
            }
        },
        En = { dependencies: null },
        Cn = class extends wn {
            constructor(e) {
                (super(), (this.source = e), this.setValue(e));
            }
            getValue(e) {
                const t = {};
                return (
                    Ke(this.source, (n, s) => {
                        var r;
                        (r = n) && r[_n] === r ? (t[s] = n.getValue(e)) : Lt(n) ? (t[s] = Ut(n)) : e || (t[s] = n);
                    }),
                    t
                );
            }
            setValue(e) {
                ((this.source = e), (this.payload = this._makePayload(e)));
            }
            reset() {
                this.payload && Ze(this.payload, (e) => e.reset());
            }
            _makePayload(e) {
                if (e) {
                    const t = new Set();
                    return (Ke(e, this._addToPayload, t), Array.from(t));
                }
            }
            _addToPayload(e) {
                En.dependencies && Lt(e) && En.dependencies.add(e);
                const t = yn(e);
                t && Ze(t, (e) => this.add(e));
            }
        },
        Pn = class extends Cn {
            constructor(e) {
                super(e);
            }
            static create(e) {
                return new Pn(e);
            }
            getValue() {
                return this.source.map((e) => e.getValue());
            }
            setValue(e) {
                const t = this.getPayload();
                return e.length == t.length
                    ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                    : (super.setValue(e.map(Sn)), !0);
            }
        };
    function Sn(e) {
        return (cn(e) ? Rn : xn).create(e);
    }
    function kn(e) {
        const t = vn(e);
        return t ? t.constructor : Xe.arr(e) ? Pn : cn(e) ? Rn : xn;
    }
    var Tn = (e, t) => {
            const n = !Xe.fun(e) || (e.prototype && e.prototype.isReactComponent);
            return s.forwardRef((r, o) => {
                const i = s.useRef(null),
                    a =
                        n &&
                        s.useCallback(
                            (e) => {
                                i.current = (function (e, t) {
                                    e && (Xe.fun(e) ? e(t) : (e.current = t));
                                    return t;
                                })(o, e);
                            },
                            [o],
                        ),
                    [l, u] = (function (e, t) {
                        const n = new Set();
                        ((En.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                        return ((e = new Cn(e)), (En.dependencies = null), [e, n]);
                    })(r, t),
                    c = mn(),
                    d = () => {
                        const e = i.current;
                        if (n && !e) return;
                        !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && c();
                    },
                    p = new Nn(d, u),
                    m = s.useRef();
                (dn(
                    () => (
                        (m.current = p),
                        Ze(u, (e) => Qt(e, p)),
                        () => {
                            m.current && (Ze(m.current.deps, (e) => Ht(e, m.current)), Te.cancel(m.current.update));
                        }
                    ),
                ),
                    s.useEffect(d, []),
                    fn(() => () => {
                        const e = m.current;
                        Ze(e.deps, (t) => Ht(t, e));
                    }));
                const h = t.getComponentProps(l.getValue());
                return f.createElement(e, { ...h, ref: a });
            });
        },
        Nn = class {
            constructor(e, t) {
                ((this.update = e), (this.deps = t));
            }
            eventObserved(e) {
                'change' == e.type && Te.write(this.update);
            }
        };
    var In = Symbol.for('AnimatedComponent'),
        An = (e) => (Xe.str(e) ? e : e && Xe.str(e.displayName) ? e.displayName : (Xe.fun(e) && e.name) || null);
    function jn(e, ...t) {
        return Xe.fun(e) ? e(...t) : e;
    }
    var Mn = (e, t) => !0 === e || !!(t && e && (Xe.fun(e) ? e(t) : Je(e).includes(t))),
        Dn = (e, t) => (Xe.obj(e) ? t && e[t] : e),
        On = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
        Bn = (e) => e,
        $n = (e, t = Bn) => {
            let n = Fn;
            e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
            const s = {};
            for (const r of n) {
                const n = t(e[r], r);
                Xe.und(n) || (s[r] = n);
            }
            return s;
        },
        Fn = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
        Ln = {
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
    function Un(e) {
        const t = (function (e) {
            const t = {};
            let n = 0;
            if (
                (Ke(e, (e, s) => {
                    Ln[s] || ((t[s] = e), n++);
                }),
                n)
            )
                return t;
        })(e);
        if (t) {
            const n = { to: t };
            return (Ke(e, (e, s) => s in t || (n[s] = e)), n);
        }
        return { ...e };
    }
    function qn(e) {
        return (
            (e = Ut(e)),
            Xe.arr(e) ? e.map(qn) : cn(e) ? He.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
        );
    }
    function zn(e) {
        for (const t in e) return !0;
        return !1;
    }
    function Vn(e) {
        return Xe.fun(e) || (Xe.arr(e) && Xe.obj(e[0]));
    }
    function Gn(e, t) {
        var n;
        (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
    }
    function Qn(e, t) {
        var n;
        t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
    }
    var Hn = { tension: 170, friction: 26, mass: 1, damping: 1, easing: Bt.linear, clamp: !1 };
    function Wn(e, t) {
        if (Xe.und(t.decay)) {
            const n = !Xe.und(t.tension) || !Xe.und(t.friction);
            ((!n && Xe.und(t.frequency) && Xe.und(t.damping) && Xe.und(t.mass)) ||
                ((e.duration = void 0), (e.decay = void 0)),
                n && (e.frequency = void 0));
        } else e.duration = void 0;
    }
    var Xn = [];
    function Yn(e, { key: t, props: n, defaultProps: s, state: r, actions: o }) {
        return new Promise((i, a) => {
            let l,
                u,
                c = Mn(n.cancel ?? (null == s ? void 0 : s.cancel), t);
            if (c) m();
            else {
                Xe.und(n.pause) || (r.paused = Mn(n.pause, t));
                let e = null == s ? void 0 : s.pause;
                (!0 !== e && (e = r.paused || Mn(e, t)),
                    (l = jn(n.delay || 0, t)),
                    e ? (r.resumeQueue.add(p), o.pause()) : (o.resume(), p()));
            }
            function d() {
                (r.resumeQueue.add(p), r.timeouts.delete(u), u.cancel(), (l = u.time - Te.now()));
            }
            function p() {
                l > 0 && !He.skipAnimation
                    ? ((r.delayed = !0), (u = Te.setTimeout(m, l)), r.pauseQueue.add(d), r.timeouts.add(u))
                    : m();
            }
            function m() {
                (r.delayed && (r.delayed = !1),
                    r.pauseQueue.delete(d),
                    r.timeouts.delete(u),
                    e <= (r.cancelId || 0) && (c = !0));
                try {
                    o.start({ ...n, callId: e, cancel: c }, i);
                } catch (t) {
                    a(t);
                }
            }
        });
    }
    var Zn = (e, t) =>
            1 == t.length
                ? t[0]
                : t.some((e) => e.cancelled)
                  ? es(e.get())
                  : t.every((e) => e.noop)
                    ? Kn(e.get())
                    : Jn(
                          e.get(),
                          t.every((e) => e.finished),
                      ),
        Kn = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        Jn = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
        es = (e) => ({ value: e, cancelled: !0, finished: !1 });
    function ts(e, t, n, s) {
        const { callId: r, parentId: o, onRest: i } = t,
            { asyncTo: a, promise: l } = n;
        return o || e !== a || t.reset
            ? (n.promise = (async () => {
                  ((n.asyncId = r), (n.asyncTo = e));
                  const u = $n(t, (e, t) => ('onRest' === t ? void 0 : e));
                  let c, d;
                  const p = new Promise((e, t) => ((c = e), (d = t))),
                      m = (e) => {
                          const t = (r <= (n.cancelId || 0) && es(s)) || (r !== n.asyncId && Jn(s, !1));
                          if (t) throw ((e.result = t), d(e), e);
                      },
                      f = (e, t) => {
                          const o = new ss(),
                              i = new rs();
                          return (async () => {
                              if (He.skipAnimation) throw (ns(n), (i.result = Jn(s, !1)), d(i), i);
                              m(o);
                              const a = Xe.obj(e) ? { ...e } : { ...t, to: e };
                              ((a.parentId = r),
                                  Ke(u, (e, t) => {
                                      Xe.und(a[t]) && (a[t] = e);
                                  }));
                              const l = await s.start(a);
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
                  let h;
                  if (He.skipAnimation) return (ns(n), Jn(s, !1));
                  try {
                      let t;
                      ((t = Xe.arr(e)
                          ? (async (e) => {
                                for (const t of e) await f(t);
                            })(e)
                          : Promise.resolve(e(f, s.stop.bind(s)))),
                          await Promise.all([t.then(c), p]),
                          (h = Jn(s.get(), !0, !1)));
                  } catch (g) {
                      if (g instanceof ss) h = g.result;
                      else {
                          if (!(g instanceof rs)) throw g;
                          h = g.result;
                      }
                  } finally {
                      r == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? a : void 0), (n.promise = o ? l : void 0));
                  }
                  return (
                      Xe.fun(i) &&
                          Te.batchedUpdates(() => {
                              i(h, s, s.item);
                          }),
                      h
                  );
              })())
            : l;
    }
    function ns(e, t) {
        (et(e.timeouts, (e) => e.cancel()),
            e.pauseQueue.clear(),
            e.resumeQueue.clear(),
            (e.asyncId = e.asyncTo = e.promise = void 0),
            t && (e.cancelId = t));
    }
    var ss = class extends Error {
            constructor() {
                super(
                    'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
                );
            }
        },
        rs = class extends Error {
            constructor() {
                super('SkipAnimationSignal');
            }
        },
        os = (e) => e instanceof as,
        is = 1,
        as = class extends Vt {
            constructor() {
                (super(...arguments), (this.id = is++), (this._priority = 0));
            }
            get priority() {
                return this._priority;
            }
            set priority(e) {
                this._priority != e && ((this._priority = e), this._onPriorityChange(e));
            }
            get() {
                const e = vn(this);
                return e && e.getValue();
            }
            to(...e) {
                return He.to(this, e);
            }
            interpolate(...e) {
                return (ln(`${on}The "interpolate" function is deprecated in v9 (use "to" instead)`), He.to(this, e));
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
                zt(this, { type: 'change', parent: this, value: e, idle: t });
            }
            _onPriorityChange(e) {
                (this.idle || mt.sort(this), zt(this, { type: 'priority', parent: this, priority: e }));
            }
        },
        ls = Symbol.for('SpringPhase'),
        us = (e) => (1 & e[ls]) > 0,
        cs = (e) => (2 & e[ls]) > 0,
        ds = (e) => (4 & e[ls]) > 0,
        ps = (e, t) => (t ? (e[ls] |= 3) : (e[ls] &= -3)),
        ms = (e, t) => (t ? (e[ls] |= 4) : (e[ls] &= -5)),
        fs = class extends as {
            constructor(e, t) {
                if (
                    (super(),
                    (this.animation = new (class {
                        constructor() {
                            ((this.changed = !1),
                                (this.values = Xn),
                                (this.toValues = null),
                                (this.fromValues = Xn),
                                (this.config = new (class {
                                    constructor() {
                                        ((this.velocity = 0), Object.assign(this, Hn));
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
                    !Xe.und(e) || !Xe.und(t))
                ) {
                    const n = Xe.obj(e) ? { ...e } : { ...t, from: e };
                    (Xe.und(n.default) && (n.default = !0), this.start(n));
                }
            }
            get idle() {
                return !(cs(this) || this._state.asyncTo) || ds(this);
            }
            get goal() {
                return Ut(this.animation.to);
            }
            get velocity() {
                const e = vn(this);
                return e instanceof xn ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
            }
            get hasAnimated() {
                return us(this);
            }
            get isAnimating() {
                return cs(this);
            }
            get isPaused() {
                return ds(this);
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
                    i = yn(s.to);
                (!i && Lt(s.to) && (r = Je(Ut(s.to))),
                    s.values.forEach((a, l) => {
                        if (a.done) return;
                        const u = a.constructor == Rn ? 1 : i ? i[l].lastPosition : r[l];
                        let c = s.immediate,
                            d = u;
                        if (!c) {
                            if (((d = a.lastPosition), o.tension <= 0)) return void (a.done = !0);
                            let t = (a.elapsedTime += e);
                            const n = s.fromValues[l],
                                r = null != a.v0 ? a.v0 : (a.v0 = Xe.arr(o.velocity) ? o.velocity[l] : o.velocity);
                            let i;
                            const p = o.precision || (n == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - n)));
                            if (Xe.und(o.duration))
                                if (o.decay) {
                                    const e = !0 === o.decay ? 0.998 : o.decay,
                                        s = Math.exp(-(1 - e) * t);
                                    ((d = n + (r / (1 - e)) * (1 - s)),
                                        (c = Math.abs(a.lastPosition - d) <= p),
                                        (i = r * s));
                                } else {
                                    i = null == a.lastVelocity ? r : a.lastVelocity;
                                    const t = o.restVelocity || p / 10,
                                        s = o.clamp ? 0 : o.bounce,
                                        l = !Xe.und(s),
                                        m = n == u ? a.v0 > 0 : n < u;
                                    let f,
                                        h = !1;
                                    const g = 1,
                                        _ = Math.ceil(e / g);
                                    for (
                                        let e = 0;
                                        e < _ && ((f = Math.abs(i) > t), f || ((c = Math.abs(u - d) <= p), !c));
                                        ++e
                                    ) {
                                        l && ((h = d == u || d > u == m), h && ((i = -i * s), (d = u)));
                                        ((i += ((1e-6 * -o.tension * (d - u) + 0.001 * -o.friction * i) / o.mass) * g),
                                            (d += i * g));
                                    }
                                }
                            else {
                                let s = 1;
                                (o.duration > 0 &&
                                    (this._memoizedDuration !== o.duration &&
                                        ((this._memoizedDuration = o.duration),
                                        a.durationProgress > 0 &&
                                            ((a.elapsedTime = o.duration * a.durationProgress),
                                            (t = a.elapsedTime += e))),
                                    (s = (o.progress || 0) + t / this._memoizedDuration),
                                    (s = s > 1 ? 1 : s < 0 ? 0 : s),
                                    (a.durationProgress = s)),
                                    (d = n + o.easing(s) * (u - n)),
                                    (i = (d - a.lastPosition) / e),
                                    (c = 1 == s));
                            }
                            ((a.lastVelocity = i),
                                Number.isNaN(d) && (console.warn('Got NaN while animating:', this), (c = !0)));
                        }
                        (i && !i[l].done && (c = !1), c ? (a.done = !0) : (t = !1), a.setValue(d, o.round) && (n = !0));
                    }));
                const a = vn(this),
                    l = a.getValue();
                if (t) {
                    const e = Ut(s.to);
                    ((l === e && !n) || o.decay
                        ? n && o.decay && this._onChange(l)
                        : (a.setValue(e), this._onChange(e)),
                        this._stop());
                } else n && this._onChange(l);
            }
            set(e) {
                return (
                    Te.batchedUpdates(() => {
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
                if (cs(this)) {
                    const { to: e, config: t } = this.animation;
                    Te.batchedUpdates(() => {
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
                    Xe.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Xe.obj(e) ? e : { ...t, to: e }]),
                    Promise.all(n.map((e) => this._update(e))).then((e) => Zn(this, e))
                );
            }
            stop(e) {
                const { to: t } = this.animation;
                return (
                    this._focus(this.get()),
                    ns(this._state, e && this._lastCallId),
                    Te.batchedUpdates(() => this._stop(t, e)),
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
                ((n = Xe.obj(n) ? n[t] : n),
                    (null == n || Vn(n)) && (n = void 0),
                    (s = Xe.obj(s) ? s[t] : s),
                    null == s && (s = void 0));
                const r = { to: n, from: s };
                return (
                    us(this) ||
                        (e.reverse && ([n, s] = [s, n]),
                        (s = Ut(s)),
                        Xe.und(s) ? vn(this) || this._set(n) : this._set(s)),
                    r
                );
            }
            _update({ ...e }, t) {
                const { key: n, defaultProps: s } = this;
                (e.default &&
                    Object.assign(
                        s,
                        $n(e, (e, t) => (/^on/.test(t) ? Dn(e, n) : e)),
                    ),
                    ws(this, e, 'onProps'),
                    xs(this, 'onProps', e, this));
                const r = this._prepareNode(e);
                if (Object.isFrozen(this))
                    throw Error(
                        'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                    );
                const o = this._state;
                return Yn(++this._lastCallId, {
                    key: n,
                    props: e,
                    defaultProps: s,
                    state: o,
                    actions: {
                        pause: () => {
                            ds(this) ||
                                (ms(this, !0),
                                st(o.pauseQueue),
                                xs(this, 'onPause', Jn(this, hs(this, this.animation.to)), this));
                        },
                        resume: () => {
                            ds(this) &&
                                (ms(this, !1),
                                cs(this) && this._resume(),
                                st(o.resumeQueue),
                                xs(this, 'onResume', Jn(this, hs(this, this.animation.to)), this));
                        },
                        start: this._merge.bind(this, r),
                    },
                }).then((n) => {
                    if (e.loop && n.finished && (!t || !n.noop)) {
                        const t = gs(e);
                        if (t) return this._update(t, !0);
                    }
                    return n;
                });
            }
            _merge(e, t, n) {
                if (t.cancel) return (this.stop(!0), n(es(this)));
                const s = !Xe.und(e.to),
                    r = !Xe.und(e.from);
                if (s || r) {
                    if (!(t.callId > this._lastToId)) return n(es(this));
                    this._lastToId = t.callId;
                }
                const { key: o, defaultProps: i, animation: a } = this,
                    { to: l, from: u } = a;
                let { to: c = l, from: d = u } = e;
                (!r || s || (t.default && !Xe.und(c)) || (c = d), t.reverse && ([c, d] = [d, c]));
                const p = !Ye(d, u);
                (p && (a.from = d), (d = Ut(d)));
                const m = !Ye(c, l);
                m && this._focus(c);
                const f = Vn(t.to),
                    { config: h } = a,
                    { decay: g, velocity: _ } = h;
                ((s || r) && (h.velocity = 0),
                    t.config &&
                        !f &&
                        (function (e, t, n) {
                            (n && (Wn((n = { ...n }), t), (t = { ...n, ...t })), Wn(e, t), Object.assign(e, t));
                            for (const i in Hn) null == e[i] && (e[i] = Hn[i]);
                            let { frequency: s, damping: r } = e;
                            const { mass: o } = e;
                            Xe.und(s) ||
                                (s < 0.01 && (s = 0.01),
                                r < 0 && (r = 0),
                                (e.tension = Math.pow((2 * Math.PI) / s, 2) * o),
                                (e.friction = (4 * Math.PI * r * o) / s));
                        })(h, jn(t.config, o), t.config !== i.config ? jn(i.config, o) : void 0));
                let v = vn(this);
                if (!v || Xe.und(c)) return n(Jn(this, !0));
                const b = Xe.und(t.reset) ? r && !t.default : !Xe.und(d) && Mn(t.reset, o),
                    y = b ? d : this.get(),
                    w = qn(c),
                    x = Xe.num(w) || Xe.arr(w) || cn(w),
                    R = !f && (!x || Mn(i.immediate || t.immediate, o));
                if (m) {
                    const e = kn(c);
                    if (e !== v.constructor) {
                        if (!R)
                            throw Error(
                                `Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`,
                            );
                        v = this._set(w);
                    }
                }
                const E = v.constructor;
                let C = Lt(c),
                    P = !1;
                if (!C) {
                    const e = b || (!us(this) && p);
                    ((m || e) && ((P = Ye(qn(y), w)), (C = !P)),
                        ((Ye(a.immediate, R) || R) && Ye(h.decay, g) && Ye(h.velocity, _)) || (C = !0));
                }
                if (
                    (P && cs(this) && (a.changed && !b ? (C = !0) : C || this._stop(l)),
                    !f &&
                        ((C || Lt(l)) &&
                            ((a.values = v.getPayload()), (a.toValues = Lt(c) ? null : E == Rn ? [1] : Je(w))),
                        a.immediate != R && ((a.immediate = R), R || b || this._set(l)),
                        C))
                ) {
                    const { onRest: e } = a;
                    Ze(ys, (e) => ws(this, t, e));
                    const s = Jn(this, hs(this, l));
                    (st(this._pendingCalls, s),
                        this._pendingCalls.add(n),
                        a.changed &&
                            Te.batchedUpdates(() => {
                                var t;
                                ((a.changed = !b),
                                    null == e || e(s, this),
                                    b ? jn(i.onRest, s) : null == (t = a.onStart) || t.call(a, s, this));
                            }));
                }
                (b && this._set(y),
                    f
                        ? n(ts(t.to, t, this._state, this))
                        : C
                          ? this._start()
                          : cs(this) && !m
                            ? this._pendingCalls.add(n)
                            : n(Kn(y)));
            }
            _focus(e) {
                const t = this.animation;
                e !== t.to && (qt(this) && this._detach(), (t.to = e), qt(this) && this._attach());
            }
            _attach() {
                let e = 0;
                const { to: t } = this.animation;
                (Lt(t) && (Qt(t, this), os(t) && (e = t.priority + 1)), (this.priority = e));
            }
            _detach() {
                const { to: e } = this.animation;
                Lt(e) && Ht(e, this);
            }
            _set(e, t = !0) {
                const n = Ut(e);
                if (!Xe.und(n)) {
                    const e = vn(this);
                    if (!e || !Ye(n, e.getValue())) {
                        const s = kn(n);
                        (e && e.constructor == s ? e.setValue(n) : bn(this, s.create(n)),
                            e &&
                                Te.batchedUpdates(() => {
                                    this._onChange(n, t);
                                }));
                    }
                }
                return vn(this);
            }
            _onStart() {
                const e = this.animation;
                e.changed || ((e.changed = !0), xs(this, 'onStart', Jn(this, hs(this, e.to)), this));
            }
            _onChange(e, t) {
                (t || (this._onStart(), jn(this.animation.onChange, e, this)),
                    jn(this.defaultProps.onChange, e, this),
                    super._onChange(e, t));
            }
            _start() {
                const e = this.animation;
                (vn(this).reset(Ut(e.to)),
                    e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                    cs(this) || (ps(this, !0), ds(this) || this._resume()));
            }
            _resume() {
                He.skipAnimation ? this.finish() : mt.start(this);
            }
            _stop(e, t) {
                if (cs(this)) {
                    ps(this, !1);
                    const n = this.animation;
                    (Ze(n.values, (e) => {
                        e.done = !0;
                    }),
                        n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                        zt(this, { type: 'idle', parent: this }));
                    const s = t ? es(this.get()) : Jn(this.get(), hs(this, e ?? n.to));
                    (st(this._pendingCalls, s), n.changed && ((n.changed = !1), xs(this, 'onRest', s, this)));
                }
            }
        };
    function hs(e, t) {
        const n = qn(t);
        return Ye(qn(e.get()), n);
    }
    function gs(e, t = e.loop, n = e.to) {
        const s = jn(t);
        if (s) {
            const r = !0 !== s && Un(s),
                o = (r || e).reverse,
                i = !r || r.reset;
            return _s({
                ...e,
                loop: t,
                default: !1,
                pause: void 0,
                to: !o || Vn(n) ? n : void 0,
                from: i ? e.from : void 0,
                reset: i,
                ...r,
            });
        }
    }
    function _s(e) {
        const { to: t, from: n } = (e = Un(e)),
            s = new Set();
        return (Xe.obj(t) && bs(t, s), Xe.obj(n) && bs(n, s), (e.keys = s.size ? Array.from(s) : null), e);
    }
    function vs(e) {
        const t = _s(e);
        return (Xe.und(t.default) && (t.default = $n(t)), t);
    }
    function bs(e, t) {
        Ke(e, (e, n) => null != e && t.add(n));
    }
    var ys = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
    function ws(e, t, n) {
        e.animation[n] = t[n] !== On(t, n) ? Dn(t[n], e.key) : void 0;
    }
    function xs(e, t, ...n) {
        var s, r, o, i;
        (null == (r = (s = e.animation)[t]) || r.call(s, ...n),
            null == (i = (o = e.defaultProps)[t]) || i.call(o, ...n));
    }
    var Rs = ['onStart', 'onChange', 'onRest'],
        Es = 1,
        Cs = class {
            constructor(e, t) {
                ((this.id = Es++),
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
                    Xe.und(n) || this.springs[t].set(n);
                }
            }
            update(e) {
                return (e && this.queue.push(_s(e)), this);
            }
            start(e) {
                let { queue: t } = this;
                return (
                    e ? (t = Je(e).map(_s)) : (this.queue = []),
                    this._flush ? this._flush(this, t) : (As(this, t), Ps(this, t))
                );
            }
            stop(e, t) {
                if ((e !== !!e && (t = e), t)) {
                    const n = this.springs;
                    Ze(Je(t), (t) => n[t].stop(!!e));
                } else (ns(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
                return this;
            }
            pause(e) {
                if (Xe.und(e)) this.start({ pause: !0 });
                else {
                    const t = this.springs;
                    Ze(Je(e), (e) => t[e].pause());
                }
                return this;
            }
            resume(e) {
                if (Xe.und(e)) this.start({ pause: !1 });
                else {
                    const t = this.springs;
                    Ze(Je(e), (e) => t[e].resume());
                }
                return this;
            }
            each(e) {
                Ke(this.springs, e);
            }
            _onFrame() {
                const { onStart: e, onChange: t, onRest: n } = this._events,
                    s = this._active.size > 0,
                    r = this._changed.size > 0;
                ((s && !this._started) || (r && !this._started)) &&
                    ((this._started = !0),
                    et(e, ([e, t]) => {
                        ((t.value = this.get()), e(t, this, this._item));
                    }));
                const o = !s && this._started,
                    i = r || (o && n.size) ? this.get() : null;
                (r &&
                    t.size &&
                    et(t, ([e, t]) => {
                        ((t.value = i), e(t, this, this._item));
                    }),
                    o &&
                        ((this._started = !1),
                        et(n, ([e, t]) => {
                            ((t.value = i), e(t, this, this._item));
                        })));
            }
            eventObserved(e) {
                if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
                else {
                    if ('idle' != e.type) return;
                    this._active.delete(e.parent);
                }
                Te.onFrame(this._onFrame);
            }
        };
    function Ps(e, t) {
        return Promise.all(t.map((t) => Ss(e, t))).then((t) => Zn(e, t));
    }
    async function Ss(e, t, n) {
        const { keys: s, to: r, from: o, loop: i, onRest: a, onResolve: l } = t,
            u = Xe.obj(t.default) && t.default;
        (i && (t.loop = !1), !1 === r && (t.to = null), !1 === o && (t.from = null));
        const c = Xe.arr(r) || Xe.fun(r) ? r : void 0;
        c
            ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
            : Ze(Rs, (n) => {
                  const s = t[n];
                  if (Xe.fun(s)) {
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
            ? ((d.paused = t.pause), st(t.pause ? d.pauseQueue : d.resumeQueue))
            : d.paused && (t.pause = !0);
        const p = (s || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
            m = !0 === t.cancel || !0 === On(t, 'cancel');
        ((c || (m && d.asyncId)) &&
            p.push(
                Yn(++e._lastAsyncId, {
                    props: t,
                    state: d,
                    actions: {
                        pause: We,
                        resume: We,
                        start(t, n) {
                            m ? (ns(d, e._lastAsyncId), n(es(e))) : ((t.onRest = a), n(ts(c, t, d, e)));
                        },
                    },
                }),
            ),
            d.paused &&
                (await new Promise((e) => {
                    d.resumeQueue.add(e);
                })));
        const f = Zn(e, await Promise.all(p));
        if (i && f.finished && (!n || !f.noop)) {
            const n = gs(t, i, r);
            if (n) return (As(e, [n]), Ss(e, n, !0));
        }
        return (l && Te.batchedUpdates(() => l(f, e, e.item)), f);
    }
    function ks(e, t) {
        const n = { ...e.springs };
        return (
            t &&
                Ze(Je(t), (e) => {
                    (Xe.und(e.keys) && (e = _s(e)), Xe.obj(e.to) || (e = { ...e, to: void 0 }), Is(n, e, (e) => Ns(e)));
                }),
            Ts(e, n),
            n
        );
    }
    function Ts(e, t) {
        Ke(t, (t, n) => {
            e.springs[n] || ((e.springs[n] = t), Qt(t, e));
        });
    }
    function Ns(e, t) {
        const n = new fs();
        return ((n.key = e), t && Qt(n, t), n);
    }
    function Is(e, t, n) {
        t.keys &&
            Ze(t.keys, (s) => {
                (e[s] || (e[s] = n(s)))._prepareNode(t);
            });
    }
    function As(e, t) {
        Ze(t, (t) => {
            Is(e.springs, t, (t) => Ns(t, e));
        });
    }
    var js,
        Ms,
        Ds = ({ children: e, ...t }) => {
            const n = s.useContext(Os),
                r = t.pause || !!n.pause,
                o = t.immediate || !!n.immediate;
            t = (function (e, t) {
                const [n] = s.useState(() => ({ inputs: t, result: e() })),
                    r = s.useRef(),
                    o = r.current;
                let i = o;
                i
                    ? Boolean(
                          t &&
                          i.inputs &&
                          (function (e, t) {
                              if (e.length !== t.length) return !1;
                              for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                              return !0;
                          })(t, i.inputs),
                      ) || (i = { inputs: t, result: e() })
                    : (i = n);
                return (
                    s.useEffect(() => {
                        ((r.current = i), o == n && (n.inputs = n.result = void 0));
                    }, [i]),
                    i.result
                );
            })(() => ({ pause: r, immediate: o }), [r, o]);
            const { Provider: i } = Os;
            return f.createElement(i, { value: t }, e);
        },
        Os =
            ((js = Ds),
            (Ms = {}),
            Object.assign(js, f.createContext(Ms)),
            (js.Provider._context = js),
            (js.Consumer._context = js),
            js);
    ((Ds.Provider = Os.Provider), (Ds.Consumer = Os.Consumer));
    var Bs = () => {
        const e = [],
            t = function (t) {
                un(
                    `${on}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
                const s = [];
                return (
                    Ze(e, (e, r) => {
                        if (Xe.und(t)) s.push(e.start());
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
                return (Ze(e, (e) => e.pause(...arguments)), this);
            }),
            (t.resume = function () {
                return (Ze(e, (e) => e.resume(...arguments)), this);
            }),
            (t.set = function (t) {
                Ze(e, (e, n) => {
                    const s = Xe.fun(t) ? t(n, e) : t;
                    s && e.set(s);
                });
            }),
            (t.start = function (t) {
                const n = [];
                return (
                    Ze(e, (e, s) => {
                        if (Xe.und(t)) n.push(e.start());
                        else {
                            const r = this._getProps(t, e, s);
                            r && n.push(e.start(r));
                        }
                    }),
                    n
                );
            }),
            (t.stop = function () {
                return (Ze(e, (e) => e.stop(...arguments)), this);
            }),
            (t.update = function (t) {
                return (Ze(e, (e, n) => e.update(this._getProps(t, e, n))), this);
            }));
        const n = function (e, t, n) {
            return Xe.fun(e) ? e(n, t) : e;
        };
        return ((t._getProps = n), t);
    };
    function $s(e, t) {
        const n = Xe.fun(e),
            [[r], o] = (function (e, t, n) {
                const r = Xe.fun(t) && t;
                r && !n && (n = []);
                const o = s.useMemo(() => (r || 3 == arguments.length ? Bs() : void 0), []),
                    i = s.useRef(0),
                    a = mn(),
                    l = s.useMemo(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(e, t) {
                                const n = ks(e, t);
                                return i.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                    ? Ps(e, t)
                                    : new Promise((s) => {
                                          (Ts(e, n),
                                              l.queue.push(() => {
                                                  s(Ps(e, t));
                                              }),
                                              a());
                                      });
                            },
                        }),
                        [],
                    ),
                    u = s.useRef([...l.ctrls]),
                    c = [],
                    d = gn(e) || 0;
                function p(e, n) {
                    for (let s = e; s < n; s++) {
                        const e = u.current[s] || (u.current[s] = new Cs(null, l.flush)),
                            n = r ? r(s, e) : t[s];
                        n && (c[s] = vs(n));
                    }
                }
                (s.useMemo(() => {
                    (Ze(u.current.slice(e, d), (e) => {
                        (Gn(e, o), e.stop(!0));
                    }),
                        (u.current.length = e),
                        p(d, e));
                }, [e]),
                    s.useMemo(() => {
                        p(0, Math.min(d, e));
                    }, n));
                const m = u.current.map((e, t) => ks(e, c[t])),
                    f = s.useContext(Ds),
                    h = gn(f),
                    g = f !== h && zn(f);
                (dn(() => {
                    (i.current++, (l.ctrls = u.current));
                    const { queue: e } = l;
                    (e.length && ((l.queue = []), Ze(e, (e) => e())),
                        Ze(u.current, (e, t) => {
                            (null == o || o.add(e), g && e.start({ default: f }));
                            const n = c[t];
                            n && (Qn(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                        }));
                }),
                    fn(() => () => {
                        Ze(l.ctrls, (e) => e.stop(!0));
                    }));
                const _ = m.map((e) => ({ ...e }));
                return o ? [_, o] : _;
            })(1, n ? e : [e], n ? [] : t);
        return n || 2 == arguments.length ? [r, o] : r;
    }
    var Fs = () => Bs(),
        Ls = () => s.useState(Fs)[0];
    function Us(e, t, n) {
        const r = Xe.fun(t) && t,
            {
                reset: o,
                sort: i,
                trail: a = 0,
                expires: l = !0,
                exitBeforeEnter: u = !1,
                onDestroyed: c,
                ref: d,
                config: p,
            } = r ? r() : t,
            m = s.useMemo(() => (r || 3 == arguments.length ? Bs() : void 0), []),
            h = Je(e),
            g = [],
            _ = s.useRef(null),
            v = o ? null : _.current;
        (dn(() => {
            _.current = g;
        }),
            fn(
                () => (
                    Ze(g, (e) => {
                        (null == m || m.add(e.ctrl), (e.ctrl.ref = m));
                    }),
                    () => {
                        Ze(_.current, (e) => {
                            (e.expired && clearTimeout(e.expirationId), Gn(e.ctrl, m), e.ctrl.stop(!0));
                        });
                    }
                ),
            ));
        const b = (function (e, { key: t, keys: n = t }, s) {
                if (null === n) {
                    const t = new Set();
                    return e.map((e) => {
                        const n = s && s.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                        return n ? (t.add(n), n.key) : qs++;
                    });
                }
                return Xe.und(n) ? e : Xe.fun(n) ? e.map(n) : Je(n);
            })(h, r ? r() : t, v),
            y = (o && _.current) || [];
        dn(() =>
            Ze(y, ({ ctrl: e, item: t, key: n }) => {
                (Gn(e, m), jn(c, t, n));
            }),
        );
        const w = [];
        if (
            (v &&
                Ze(v, (e, t) => {
                    e.expired
                        ? (clearTimeout(e.expirationId), y.push(e))
                        : ~(t = w[t] = b.indexOf(e.key)) && (g[t] = e);
                }),
            Ze(h, (e, t) => {
                g[t] || ((g[t] = { key: b[t], item: e, phase: 'mount', ctrl: new Cs() }), (g[t].ctrl.item = e));
            }),
            w.length)
        ) {
            let e = -1;
            const { leave: n } = r ? r() : t;
            Ze(w, (t, s) => {
                const r = v[s];
                ~t ? ((e = g.indexOf(r)), (g[e] = { ...r, item: h[t] })) : n && g.splice(++e, 0, r);
            });
        }
        Xe.fun(i) && g.sort((e, t) => i(e.item, t.item));
        let x = -a;
        const R = mn(),
            E = $n(t),
            C = new Map(),
            P = s.useRef(new Map()),
            S = s.useRef(!1);
        Ze(g, (e, n) => {
            const s = e.key,
                o = e.phase,
                i = r ? r() : t;
            let c, m;
            const f = jn(i.delay || 0, s);
            if ('mount' == o) ((c = i.enter), (m = 'enter'));
            else {
                const e = b.indexOf(s) < 0;
                if ('leave' != o)
                    if (e) ((c = i.leave), (m = 'leave'));
                    else {
                        if (!(c = i.update)) return;
                        m = 'update';
                    }
                else {
                    if (e) return;
                    ((c = i.enter), (m = 'enter'));
                }
            }
            if (((c = jn(c, e.item, n)), (c = Xe.obj(c) ? Un(c) : { to: c }), !c.config)) {
                const t = p || E.config;
                c.config = jn(t, e.item, n, m);
            }
            x += a;
            const h = { ...E, delay: f + x, ref: d, immediate: i.immediate, reset: !1, ...c };
            if ('enter' == m && Xe.und(h.from)) {
                const s = r ? r() : t,
                    o = Xe.und(s.initial) || v ? s.from : s.initial;
                h.from = jn(o, e.item, n);
            }
            const { onResolve: g } = h;
            h.onResolve = (e) => {
                jn(g, e);
                const t = _.current,
                    n = t.find((e) => e.key === s);
                if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                    const e = t.every((e) => e.ctrl.idle);
                    if ('leave' == n.phase) {
                        const t = jn(l, n.item);
                        if (!1 !== t) {
                            const s = !0 === t ? 0 : t;
                            if (((n.expired = !0), !e && s > 0))
                                return void (s <= 2147483647 && (n.expirationId = setTimeout(R, s)));
                        }
                    }
                    e && t.some((e) => e.expired) && (P.current.delete(n), u && (S.current = !0), R());
                }
            };
            const y = ks(e.ctrl, h);
            'leave' === m && u
                ? P.current.set(e, { phase: m, springs: y, payload: h })
                : C.set(e, { phase: m, springs: y, payload: h });
        });
        const k = s.useContext(Ds),
            T = gn(k),
            N = k !== T && zn(k);
        (dn(() => {
            N &&
                Ze(g, (e) => {
                    e.ctrl.start({ default: k });
                });
        }, [k]),
            Ze(C, (e, t) => {
                if (P.current.size) {
                    const e = g.findIndex((e) => e.key === t.key);
                    g.splice(e, 1);
                }
            }),
            dn(
                () => {
                    Ze(P.current.size ? P.current : C, ({ phase: e, payload: t }, n) => {
                        const { ctrl: s } = n;
                        ((n.phase = e),
                            null == m || m.add(s),
                            N && 'enter' == e && s.start({ default: k }),
                            t &&
                                (Qn(s, t.ref),
                                (!s.ref && !m) || S.current
                                    ? (s.start(t), S.current && (S.current = !1))
                                    : s.update(t)));
                    });
                },
                o ? void 0 : n,
            ));
        const I = (e) =>
            f.createElement(
                f.Fragment,
                null,
                g.map((t, n) => {
                    const { springs: s } = C.get(t) || t.ctrl,
                        r = e({ ...s }, t.item, t, n);
                    return r && r.type
                        ? f.createElement(r.type, {
                              ...r.props,
                              key: Xe.str(t.key) || Xe.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref,
                          })
                        : r;
                }),
            );
        return m ? [I, m] : I;
    }
    var qs = 1;
    var zs = class extends as {
        constructor(e, t) {
            (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Ot(...t)));
            const n = this._get(),
                s = kn(n);
            bn(this, s.create(n));
        }
        advance(e) {
            const t = this._get();
            (Ye(t, this.get()) || (vn(this).setValue(t), this._onChange(t, this.idle)),
                !this.idle && Gs(this._active) && Qs(this));
        }
        _get() {
            const e = Xe.arr(this.source) ? this.source.map(Ut) : Je(Ut(this.source));
            return this.calc(...e);
        }
        _start() {
            this.idle &&
                !Gs(this._active) &&
                ((this.idle = !1),
                Ze(yn(this), (e) => {
                    e.done = !1;
                }),
                He.skipAnimation ? (Te.batchedUpdates(() => this.advance()), Qs(this)) : mt.start(this));
        }
        _attach() {
            let e = 1;
            (Ze(Je(this.source), (t) => {
                (Lt(t) && Qt(t, this), os(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
            }),
                (this.priority = e),
                this._start());
        }
        _detach() {
            (Ze(Je(this.source), (e) => {
                Lt(e) && Ht(e, this);
            }),
                this._active.clear(),
                Qs(this));
        }
        eventObserved(e) {
            'change' == e.type
                ? e.idle
                    ? this.advance()
                    : (this._active.add(e.parent), this._start())
                : 'idle' == e.type
                  ? this._active.delete(e.parent)
                  : 'priority' == e.type &&
                    (this.priority = Je(this.source).reduce((e, t) => Math.max(e, (os(t) ? t.priority : 0) + 1), 0));
        }
    };
    function Vs(e) {
        return !1 !== e.idle;
    }
    function Gs(e) {
        return !e.size || Array.from(e).every(Vs);
    }
    function Qs(e) {
        e.idle ||
            ((e.idle = !0),
            Ze(yn(e), (e) => {
                e.done = !0;
            }),
            zt(e, { type: 'idle', parent: e }));
    }
    He.assign({ createStringInterpolator: rn, to: (e, t) => new zs(e, t) });
    var Hs = /^--/;
    function Ws(e, t) {
        return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : 'number' != typeof t || 0 === t || Hs.test(e) || (Ys.hasOwnProperty(e) && Ys[e])
              ? ('' + t).trim()
              : t + 'px';
    }
    var Xs = {};
    var Ys = {
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
        Zs = ['Webkit', 'Ms', 'Moz', 'O'];
    Ys = Object.keys(Ys).reduce(
        (e, t) => (Zs.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
        Ys,
    );
    var Ks = /^(matrix|translate|scale|rotate|skew)/,
        Js = /^(translate)/,
        er = /^(rotate|skew)/,
        tr = (e, t) => (Xe.num(e) && 0 !== e ? e + t : e),
        nr = (e, t) => (Xe.arr(e) ? e.every((e) => nr(e, t)) : Xe.num(e) ? e === t : parseFloat(e) === t),
        sr = class extends Cn {
            constructor({ x: e, y: t, z: n, ...s }) {
                const r = [],
                    o = [];
                ((e || t || n) &&
                    (r.push([e || 0, t || 0, n || 0]),
                    o.push((e) => [`translate3d(${e.map((e) => tr(e, 'px')).join(',')})`, nr(e, 0)])),
                    Ke(s, (e, t) => {
                        if ('transform' === t) (r.push([e || '']), o.push((e) => [e, '' === e]));
                        else if (Ks.test(t)) {
                            if ((delete s[t], Xe.und(e))) return;
                            const n = Js.test(t) ? 'px' : er.test(t) ? 'deg' : '';
                            (r.push(Je(e)),
                                o.push(
                                    'rotate3d' === t
                                        ? ([e, t, s, r]) => [`rotate3d(${e},${t},${s},${tr(r, n)})`, nr(r, 0)]
                                        : (e) => [
                                              `${t}(${e.map((e) => tr(e, n)).join(',')})`,
                                              nr(e, t.startsWith('scale') ? 1 : 0),
                                          ],
                                ));
                        }
                    }),
                    r.length && (s.transform = new rr(r, o)),
                    super(s));
            }
        },
        rr = class extends Vt {
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
                    Ze(this.inputs, (n, s) => {
                        const r = Ut(n[0]),
                            [o, i] = this.transforms[s](Xe.arr(r) ? r : n.map(Ut));
                        ((e += ' ' + o), (t = t && i));
                    }),
                    t ? 'none' : e
                );
            }
            observerAdded(e) {
                1 == e && Ze(this.inputs, (e) => Ze(e, (e) => Lt(e) && Qt(e, this)));
            }
            observerRemoved(e) {
                0 == e && Ze(this.inputs, (e) => Ze(e, (e) => Lt(e) && Ht(e, this)));
            }
            eventObserved(e) {
                ('change' == e.type && (this._value = null), zt(this, e));
            }
        };
    He.assign({
        batchedUpdates: r.unstable_batchedUpdates,
        createStringInterpolator: rn,
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
    var or = ((
            e,
            {
                applyAnimatedValues: t = () => !1,
                createAnimatedStyle: n = (e) => new Cn(e),
                getComponentProps: s = (e) => e,
            } = {},
        ) => {
            const r = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: s },
                o = (e) => {
                    const t = An(e) || 'Anonymous';
                    return (
                        ((e = Xe.str(e) ? o[e] || (o[e] = Tn(e, r)) : e[In] || (e[In] = Tn(e, r))).displayName =
                            `Animated(${t})`),
                        e
                    );
                };
            return (
                Ke(e, (t, n) => {
                    (Xe.arr(e) && (n = An(t)), (o[n] = o(t)));
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
                        { style: s, children: r, scrollTop: o, scrollLeft: i, viewBox: a, ...l } = t,
                        u = Object.values(l),
                        c = Object.keys(l).map((t) =>
                            n || e.hasAttribute(t)
                                ? t
                                : Xs[t] || (Xs[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                        );
                    void 0 !== r && (e.textContent = r);
                    for (const d in s)
                        if (s.hasOwnProperty(d)) {
                            const t = Ws(d, s[d]);
                            Hs.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                        }
                    (c.forEach((t, n) => {
                        e.setAttribute(t, u[n]);
                    }),
                        void 0 !== o && (e.scrollTop = o),
                        void 0 !== i && (e.scrollLeft = i),
                        void 0 !== a && e.setAttribute('viewBox', a));
                },
                createAnimatedStyle: (e) => new sr(e),
                getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
            },
        ),
        ir = or.animated;
    function ar() {
        const e = s.useRef(0);
        return (
            Se(() => {
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
    const lr = new WeakMap(),
        ur = 0,
        cr = { await: 'await', idle: 'idle', display: 'display' };
    function dr({ resId: e = ur, contentId: t, decoratorId: n, disabled: r, args: o, showDelay: i = 400 }) {
        const a = s.useRef({ status: cr.idle, resId: e, timeoutId: 0 }),
            [l, u] = s.useMemo(() => {
                let s = null;
                function l() {
                    r ||
                        ((a.current.status = cr.await),
                        window.clearTimeout(a.current.timeoutId),
                        (a.current.timeoutId = window.setTimeout(u, i)));
                }
                function u() {
                    ((a.current.status = cr.display), Z.tooltip.open(e, t, n, o), s && lr.set(s, d));
                }
                function c() {
                    if (
                        (window.clearTimeout(a.current.timeoutId),
                        a.current.status === cr.display && Z.tooltip.hide(e, t, n),
                        (a.current.status = cr.idle),
                        s)
                    ) {
                        lr.delete(s);
                        let e = s.parentElement;
                        for (; e && !lr.has(e); ) e = e.parentElement;
                        if (e) {
                            lr.get(e).show();
                        }
                        s = null;
                    }
                }
                const d = {
                    hide: c,
                    show: u,
                    rerun: function () {
                        a.current.status !== cr.idle && (r ? d.hide() : l());
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
            }, [o, t, n, r, e, i]);
        return (
            s.useEffect(() => {
                l.rerun();
            }, [l]),
            Se(Pe(l.hide)),
            u
        );
    }
    function pr({ alert: e, body: t, header: n, note: r, hasHtmlContent: o, disabled: i }) {
        const a = h.resolve('views');
        return dr({
            disabled: i,
            contentId: a.read((e) =>
                o
                    ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                    : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
            ),
            decoratorId: a.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
            args: s.useMemo(() => ({ body: t, header: n, note: r, alert: e }), [e, t, n, r]),
        });
    }
    const mr = {
        click: fr('play'),
        'hot-key': fr('play'),
        'mouse-enter': fr('highlight'),
        increaseAmount: fr('cons_ammo_single_plus'),
        decreaseAmount: fr('cons_ammo_single_minus'),
        increaseAmountRoll: fr('cons_ammo_roll_plus'),
        decreaseAmountRoll: fr('cons_ammo_roll_minus'),
        close: fr('cancelcloseno'),
        'show-context-menu': fr('tabb'),
        progressSimple: fr('gui_hangar_progressbar_simple'),
        increaseDelta: fr('gui_hangar_progressbar_delta_increase'),
        decreaseDelta: fr('gui_hangar_progressbar_delta_decrease'),
        increaseDeltaMax: fr('gui_hangar_progressbar_delta_max'),
        pointerGrab: fr('gui_hangar_progressbar_pointer_grab'),
        pointerDrag: fr('gui_hangar_progressbar_pointer_drag'),
    };
    function fr(e) {
        return () => {
            z.sound(e);
        };
    }
    const hr = s.createContext(null);
    function gr({ severity: t = 'warn', overrides: n, silent: r = !1, children: o }) {
        const i = s.useMemo(() => ({ ...mr, ...n }), [n]),
            a = s.useMemo(
                () => ({
                    play: function (e, n) {
                        if (r) return;
                        const s = i[e];
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
                    settings: { plays: i, severity: t, silent: r },
                }),
                [i, t, r],
            );
        return e.jsx(hr.Provider, { value: a, children: o });
    }
    function _r() {
        const e = s.useContext(hr);
        if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
        return e;
    }
    const vr = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
        br = new Set(['number', 'string', 'boolean', 'bigint']),
        yr = new Set(['Dict']);
    function wr(e, { shallow: t = !0, depth: n = 0, maxDepth: s = 32 } = {}) {
        var r, o;
        const i = e,
            a = typeof e;
        if (n > s) throw new Error(`Too deeply nested to copy. Max is ${s}.`);
        if (vr.has(a)) return i;
        if (null === i) return i;
        const l = { depth: n + 1, maxDepth: s };
        if (Array.isArray(i)) return i.map((e) => wr(e, l));
        if ('object' === a) {
            const s = (null == (r = i.constructor) ? void 0 : r.name) ?? 'UNKNOWN';
            if (Array.isArray(e)) return e.map((e) => wr(e, l));
            if ('CoherentArrayProxy' === s) return e.map((e) => wr(e.value, l));
            if ('Dict' === s) return;
            if ('UNKNOWN' === s) return;
            if (s.includes(':ViewModel:') || 'Object' === s) {
                if (t && 0 === n) {
                    const e = {};
                    for (const t in i) {
                        const n = i[t];
                        br.has(typeof n) && (e[t] = n);
                    }
                    return e;
                }
                {
                    const e = {};
                    for (const t in i) {
                        const n = i[t],
                            s = (null == (o = null == i ? void 0 : i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                        yr.has(s) || (e[t] = wr(n, l));
                    }
                    return e;
                }
            }
            const a = {};
            for (const e of Object.keys(i)) a[e] = wr(i[e], l);
            return a;
        }
        return (console.error('Incorrect value to clone model', i), i);
    }
    const xr = { deep: !1, equals: re },
        Rr = { cloneItem: !0 },
        Er = { shallow: !1 };
    class Cr {
        constructor(e, t = Rr) {
            (p(this, '_data'),
                p(this, '_keys'),
                p(
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
                s[t] = n.observable.box(this.takeItem(e, t), xr);
            }
            ((this._keys = n.observable.set(new Set(r))), (this._data = n.observable.box(s, xr)));
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
                    i = this.takeItem(e, o);
                o in s
                    ? null === i
                        ? (delete s[o], this._keys.delete(o), this.set(s))
                        : s[o].set(i)
                    : null !== i && ((s[o] = n.observable.box(i, xr)), this._keys.add(o), this.set(s));
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
            return this.options.cloneItem ? wr(n, Er) : n;
        }
        untrackedData() {
            return n.untracked(() => this._data.get());
        }
    }
    const Pr = s.createContext({ mode: 'real' }),
        Sr = { equals: re, deep: !1 };
    function kr(e, t, s) {
        const r = [];
        e.events.subscribersNotified.on(
            n.action(() => {
                for (const e of r) e();
                r.splice(0, r.length);
            }),
        );
        const o = (o, i, a = Sr) => {
                const l = n.observable.box(o(s(i)), a);
                return ('real' === t && e.subscribe((e) => r.push(() => l.set(o(e))), i), l);
            },
            i = (n, o) => {
                const i = new Cr(s(n), o);
                return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), n), i);
            },
            a = (o, i) => {
                const a = n.observable.box(s(o) ?? i, Sr);
                return ('real' === t && e.subscribe((e) => r.push(() => a.set(e)), o), a);
            };
        return {
            dict: i,
            dictRef: (e, t) => i(e, { cloneItem: !1, ...t }),
            arrayClone: (e) => o(wr, e),
            array: a,
            object: a,
            transform: o,
            primitives: (o, i) => {
                const a = s(i);
                if (Array.isArray(o)) {
                    const s = o.reduce((e, t) => ((e[t] = n.observable.box(a[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                r.push(() =>
                                    o.forEach((t) => {
                                        s[t].set(e[t]);
                                    }),
                                );
                            }, i),
                        s
                    );
                }
                {
                    const s = o,
                        l = Object.entries(s),
                        u = l.reduce((e, [t, s]) => ((e[s] = n.observable.box(a[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                r.push(() =>
                                    l.forEach(([t, n]) => {
                                        u[n].set(e[t]);
                                    }),
                                );
                            }, i),
                        u
                    );
                }
            },
        };
    }
    o.computedFn;
    const Tr = (e, t) => o.computedFn(e, { equals: n.comparer.structural, ...t }),
        Nr = (e) => (t) => {
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
            e.jsx('div', { ...t, ref: Nr([n, r]) })
        );
    });
    var Ir, Ar, jr, Mr;
    function Dr(e) {
        return {
            lang: (null == e ? void 0 : e.lang) ?? (null == Ir ? void 0 : Ir.lang),
            message: null == e ? void 0 : e.message,
            abortEarly: (null == e ? void 0 : e.abortEarly) ?? (null == Ir ? void 0 : Ir.abortEarly),
            abortPipeEarly: (null == e ? void 0 : e.abortPipeEarly) ?? (null == Ir ? void 0 : Ir.abortPipeEarly),
        };
    }
    function Or(e) {
        return null == Ar ? void 0 : Ar.get(e);
    }
    function Br(e) {
        return null == jr ? void 0 : jr.get(e);
    }
    function $r(e, t) {
        var n;
        return null == (n = null == Mr ? void 0 : Mr.get(e)) ? void 0 : n.get(t);
    }
    function Fr(e) {
        var t, n;
        const s = typeof e;
        return 'string' === s
            ? `"${e}"`
            : 'number' === s || 'bigint' === s || 'boolean' === s
              ? `${e}`
              : 'object' === s || 'function' === s
                ? ((e &&
                      (null == (n = null == (t = Object.getPrototypeOf(e)) ? void 0 : t.constructor)
                          ? void 0
                          : n.name)) ??
                  'null')
                : s;
    }
    function Lr(e, t, n, s, r) {
        const o = r && 'input' in r ? r.input : n.value,
            i = (null == r ? void 0 : r.expected) ?? e.expects ?? null,
            a = (null == r ? void 0 : r.received) ?? Fr(o),
            l = {
                kind: e.kind,
                type: e.type,
                input: o,
                expected: i,
                received: a,
                message: `Invalid ${t}: ${i ? `Expected ${i} but r` : 'R'}eceived ${a}`,
                requirement: e.requirement,
                path: null == r ? void 0 : r.path,
                issues: null == r ? void 0 : r.issues,
                lang: s.lang,
                abortEarly: s.abortEarly,
                abortPipeEarly: s.abortPipeEarly,
            },
            u = 'schema' === e.kind,
            c =
                (null == r ? void 0 : r.message) ??
                e.message ??
                $r(e.reference, l.lang) ??
                (u ? Br(l.lang) : null) ??
                s.message ??
                Or(l.lang);
        (void 0 !== c && (l.message = 'function' == typeof c ? c(l) : c),
            u && (n.typed = !1),
            n.issues ? n.issues.push(l) : (n.issues = [l]));
    }
    function Ur(e) {
        return { version: 1, vendor: 'valibot', validate: (t) => e['~run']({ value: t }, Dr()) };
    }
    function qr(e, t) {
        const n = [...new Set(e)];
        return n.length > 1 ? `(${n.join(` ${t} `)})` : (n[0] ?? 'never');
    }
    var zr = class extends Error {
        constructor(e) {
            (super(e[0].message), (this.name = 'ValiError'), (this.issues = e));
        }
    };
    function Vr(e, t, n) {
        return 'function' == typeof e.fallback ? e.fallback(t, n) : e.fallback;
    }
    function Gr(e, t, n) {
        return 'function' == typeof e.default ? e.default(t, n) : e.default;
    }
    function Qr(e, t) {
        return {
            kind: 'schema',
            type: 'array',
            reference: Qr,
            expects: 'Array',
            async: !1,
            item: e,
            message: t,
            get '~standard'() {
                return Ur(this);
            },
            '~run'(e, t) {
                var n;
                const s = e.value;
                if (Array.isArray(s)) {
                    ((e.typed = !0), (e.value = []));
                    for (let r = 0; r < s.length; r++) {
                        const o = s[r],
                            i = this.item['~run']({ value: o }, t);
                        if (i.issues) {
                            const a = { type: 'array', origin: 'value', input: s, key: r, value: o };
                            for (const t of i.issues)
                                (t.path ? t.path.unshift(a) : (t.path = [a]), null == (n = e.issues) || n.push(t));
                            if ((e.issues || (e.issues = i.issues), t.abortEarly)) {
                                e.typed = !1;
                                break;
                            }
                        }
                        (i.typed || (e.typed = !1), e.value.push(i.value));
                    }
                } else Lr(this, 'type', e, t);
                return e;
            },
        };
    }
    function Hr(e) {
        return {
            kind: 'schema',
            type: 'boolean',
            reference: Hr,
            expects: 'boolean',
            async: !1,
            message: e,
            get '~standard'() {
                return Ur(this);
            },
            '~run'(e, t) {
                return ('boolean' == typeof e.value ? (e.typed = !0) : Lr(this, 'type', e, t), e);
            },
        };
    }
    function Wr(e, t) {
        const n = [];
        for (const s in e) ('' + +s === s && 'string' == typeof e[s] && Object.is(e[e[s]], +s)) || n.push(e[s]);
        return {
            kind: 'schema',
            type: 'enum',
            reference: Wr,
            expects: qr(n.map(Fr), '|'),
            async: !1,
            enum: e,
            options: n,
            message: t,
            get '~standard'() {
                return Ur(this);
            },
            '~run'(e, t) {
                return (this.options.includes(e.value) ? (e.typed = !0) : Lr(this, 'type', e, t), e);
            },
        };
    }
    function Xr(e) {
        return {
            kind: 'schema',
            type: 'lazy',
            reference: Xr,
            expects: 'unknown',
            async: !1,
            getter: e,
            get '~standard'() {
                return Ur(this);
            },
            '~run'(e, t) {
                return this.getter(e.value)['~run'](e, t);
            },
        };
    }
    function Yr(e) {
        return {
            kind: 'schema',
            type: 'number',
            reference: Yr,
            expects: 'number',
            async: !1,
            message: e,
            get '~standard'() {
                return Ur(this);
            },
            '~run'(e, t) {
                return ('number' != typeof e.value || isNaN(e.value) ? Lr(this, 'type', e, t) : (e.typed = !0), e);
            },
        };
    }
    function Zr(e, t) {
        return {
            kind: 'schema',
            type: 'object',
            reference: Zr,
            expects: 'Object',
            async: !1,
            entries: e,
            message: t,
            get '~standard'() {
                return Ur(this);
            },
            '~run'(e, t) {
                var n;
                const s = e.value;
                if (s && 'object' == typeof s) {
                    ((e.typed = !0), (e.value = {}));
                    for (const r in this.entries) {
                        const o = this.entries[r];
                        if (
                            r in s ||
                            (('exact_optional' === o.type || 'optional' === o.type || 'nullish' === o.type) &&
                                void 0 !== o.default)
                        ) {
                            const i = r in s ? s[r] : Gr(o),
                                a = o['~run']({ value: i }, t);
                            if (a.issues) {
                                const o = { type: 'object', origin: 'value', input: s, key: r, value: i };
                                for (const t of a.issues)
                                    (t.path ? t.path.unshift(o) : (t.path = [o]), null == (n = e.issues) || n.push(t));
                                if ((e.issues || (e.issues = a.issues), t.abortEarly)) {
                                    e.typed = !1;
                                    break;
                                }
                            }
                            (a.typed || (e.typed = !1), (e.value[r] = a.value));
                        } else if (void 0 !== o.fallback) e.value[r] = Vr(o);
                        else if (
                            'exact_optional' !== o.type &&
                            'optional' !== o.type &&
                            'nullish' !== o.type &&
                            (Lr(this, 'key', e, t, {
                                input: void 0,
                                expected: `"${r}"`,
                                path: [{ type: 'object', origin: 'key', input: s, key: r, value: s[r] }],
                            }),
                            t.abortEarly)
                        )
                            break;
                    }
                } else Lr(this, 'type', e, t);
                return e;
            },
        };
    }
    function Kr(e, t) {
        return {
            kind: 'schema',
            type: 'optional',
            reference: Kr,
            expects: `(${e.expects} | undefined)`,
            async: !1,
            wrapped: e,
            default: t,
            get '~standard'() {
                return Ur(this);
            },
            '~run'(e, t) {
                return void 0 === e.value && (void 0 !== this.default && (e.value = Gr(this, e, t)), void 0 === e.value)
                    ? ((e.typed = !0), e)
                    : this.wrapped['~run'](e, t);
            },
        };
    }
    function Jr(e) {
        return {
            kind: 'schema',
            type: 'string',
            reference: Jr,
            expects: 'string',
            async: !1,
            message: e,
            get '~standard'() {
                return Ur(this);
            },
            '~run'(e, t) {
                return ('string' == typeof e.value ? (e.typed = !0) : Lr(this, 'type', e, t), e);
            },
        };
    }
    function eo(e) {
        let t;
        if (e) for (const n of e) t ? t.push(...n.issues) : (t = n.issues);
        return t;
    }
    function to(e, t) {
        return {
            kind: 'schema',
            type: 'union',
            reference: to,
            expects: qr(
                e.map((e) => e.expects),
                '|',
            ),
            async: !1,
            options: e,
            message: t,
            get '~standard'() {
                return Ur(this);
            },
            '~run'(e, t) {
                let n, s, r;
                for (const o of this.options) {
                    const i = o['~run']({ value: e.value }, t);
                    if (i.typed) {
                        if (!i.issues) {
                            n = i;
                            break;
                        }
                        s ? s.push(i) : (s = [i]);
                    } else r ? r.push(i) : (r = [i]);
                }
                if (n) return n;
                if (s) {
                    if (1 === s.length) return s[0];
                    (Lr(this, 'type', e, t, { issues: eo(s) }), (e.typed = !0));
                } else {
                    if (1 === (null == r ? void 0 : r.length)) return r[0];
                    Lr(this, 'type', e, t, { issues: eo(r) });
                }
                return e;
            },
        };
    }
    class no {
        constructor() {
            p(this, 'index', 0);
        }
        next() {
            return this.index++;
        }
    }
    function so({ model: e, indexer: t, resolveIcon: n, commonIcon: s, guiDisabled: r }) {
        if ('items' in e)
            return {
                type: 'items',
                separate:
                    ((o = e.conditionType),
                    'or' === o || 'and' === o ? o : (console.warn(`Unexpected conditionType: ${o}`), 'none')),
                groups: de(e.items, (e) => so({ model: e, indexer: t, resolveIcon: n, commonIcon: s, guiDisabled: r })),
            };
        var o;
        const i = {
            type: 'item',
            index: t.next(),
            condition: {
                icon: null == n ? void 0 : n(s ?? e.iconKey),
                title: r ? '' : e.titleData,
                description: e.descrData,
                completed: e.current >= e.total,
                conditionType: e.conditionType,
            },
        };
        return (e.total > 0 && (i.condition.progression = { current: e.current, total: e.total, earned: e.earned }), i);
    }
    const ro = Zr({
            index: Yr(),
            name: Jr(),
            value: Jr(),
            isCompensation: Hr(),
            tooltipId: Jr(),
            tooltipContentId: Jr(),
            label: Jr(),
            probability: Yr(),
            item: Kr(Jr()),
            icon: Kr(Jr()),
            iconBig: Kr(Jr()),
            iconSmall: Kr(Jr()),
        }),
        oo = Zr({ conditionType: Jr() }),
        io = Zr({
            ...oo.entries,
            titleData: Jr(),
            descrData: Jr(),
            iconKey: Jr(),
            current: Yr(),
            total: Yr(),
            earned: Yr(),
            progressType: Jr(),
            sortKey: Jr(),
        }),
        ao = Zr({ ...oo.entries, items: Qr(to([io, Xr(() => ao)])) }),
        lo = Zr({
            ...Zr({
                id: Jr(),
                groupId: Jr(),
                type: Yr(),
                title: Jr(),
                description: Jr(),
                decoration: Yr(),
                status: Wr(Re),
            }).entries,
            bonuses: Qr(ro),
            preBattleCondition: ao,
            bonusCondition: ao,
            postBattleCondition: ao,
        }),
        uo = h.resolve('aliases'),
        co = h.resolve('images'),
        po = uo.read((e) => e.battle_results.progression.CommonQuests('resId'));
    function mo(e) {
        return {
            default: { path: co.readOrEmpty(`userMissions.missionIcons.c_32.${e}_silver`) },
            large: { path: co.readOrEmpty(`userMissions.missionIcons.c_80.${e}_silver`) },
        };
    }
    const fo = Zr({
            ...lo.entries,
            icon: Jr(),
            guiDisabled: Hr(),
            hidden: Hr(),
            available: Hr(),
            currentCompletionCount: Yr(),
            maxCompletionCount: Yr(),
            defaultMaxCompletionCount: Yr(),
            navigationEnabled: Hr(),
        }),
        [ho, go] = (
            (t = 'DataLayerProvider') =>
            (n, r, o) => {
                const i = s.createContext(null);
                function a(a) {
                    var l;
                    const { mode: u, options: c, children: d, mocks: p } = a,
                        m = s.useContext(Pr),
                        f = u ?? m.mode,
                        h = p ?? m.mocks,
                        g = s.useRef([]),
                        _ = null == (l = null == o ? void 0 : o.useRequires) ? void 0 : l.call(o),
                        v = Pe((e, s, i) => {
                            var l;
                            const u =
                                    'real' !== e && i
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
                                          })(i.getter, s)
                                        : ee(s, { name: t }),
                                c = (t) => ('mocks' === e ? (null == i ? void 0 : i.getter(t, s)) : u.readByPath(t)),
                                d = (e) => g.current.push(e),
                                p = 'initial' in a && {
                                    initial:
                                        null == (l = null == o ? void 0 : o.initial) ? void 0 : l.call(o, a.initial),
                                },
                                m = n({
                                    ...p,
                                    mode: e,
                                    readByPath: c,
                                    requires: _,
                                    externalModel: u,
                                    observableModel: kr(u, e, c),
                                    cleanup: d,
                                }),
                                f = { ...p, mode: e, model: m, externalModel: u, cleanup: d, requires: _ },
                                h = 'mocks' === e && (null == i ? void 0 : i.controls) ? i.controls(f) : {};
                            return {
                                model: m,
                                controls: { ...(null == r ? void 0 : r(f)), ...h },
                                externalModel: u,
                                mode: e,
                            };
                        }),
                        b = s.useRef(!1),
                        [y, w] = s.useState(f);
                    s.useEffect(() => {
                        w(f);
                    }, [f]);
                    const [x, R] = s.useState(() => v(y, c, h));
                    return (
                        s.useEffect(() => {
                            b.current ? R(v(y, c, h)) : (b.current = !0);
                        }, [
                            v,
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
                        e.jsx(i.Provider, { value: x, children: d })
                    );
                }
                return (
                    (a.displayName = t),
                    [
                        a,
                        function () {
                            const e = s.useContext(i);
                            if (!e) throw new Error(`hook useModel must be used within a ${a.displayName}.`);
                            return e;
                        },
                        { Context: i },
                    ]
                );
            }
        )('CommonQuestsProgressModelProvider')(
            ({ observableModel: e }) => {
                const t = { quests: e.arrayClone('commonQuests') };
                return {
                    quests: Tr(() =>
                        de(t.quests.get(), (e) => {
                            const t = (function (e, t, n) {
                                    const s = e['~run']({ value: t }, Dr(n));
                                    if (s.issues) throw new zr(s.issues);
                                    return s.value;
                                })(fo, e),
                                n = new no();
                            return {
                                id: t.id,
                                title: t.title,
                                completed: t.status === Re.Done,
                                navigationEnabled: t.navigationEnabled,
                                guiDisabledDescription: t.guiDisabled ? t.description || '' : void 0,
                                type: t.type,
                                bonuses: t.bonuses,
                                groups: {
                                    type: 'items',
                                    separate: 'union',
                                    groups: me([
                                        t.postBattleCondition.items.length > 0 &&
                                            so({
                                                indexer: n,
                                                resolveIcon: mo,
                                                model: t.postBattleCondition,
                                                guiDisabled: t.guiDisabled,
                                            }),
                                        t.bonusCondition.items.length > 0 &&
                                            so({
                                                indexer: n,
                                                resolveIcon: mo,
                                                model: t.bonusCondition,
                                                guiDisabled: t.guiDisabled,
                                            }),
                                    ]),
                                },
                                ...(t.maxCompletionCount > 1 && {
                                    progress: {
                                        withLabel: !0,
                                        withoutLimit: t.defaultMaxCompletionCount === t.maxCompletionCount,
                                        current: t.currentCompletionCount,
                                        total: t.maxCompletionCount,
                                    },
                                }),
                            };
                        }).sort((e, t) => Number(t.completed) - Number(e.completed)),
                    ),
                };
            },
            ({ externalModel: e }) => ({
                navigate: e.createCallback((e, t) => ({ questId: e, eventType: t }), 'onNavigate'),
            }),
        ),
        _o = () => {};
    function vo(t) {
        const n = t;
        return s.forwardRef(function (t, s) {
            const r = a.useAdaptive(t, t.adaptive),
                { path: o, ...i } = r,
                l = r.images ?? h.resolve('images'),
                u = { ...i, ref: s };
            {
                const t = o ? l.readOr(o, _o, 'warn') : void 0;
                return t ? e.jsx(n, { ...u, src: t }) : e.jsx(n, { ...u, unknown: !0 });
            }
        });
    }
    const bo = {
            background:
                'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
            backgroundSize: '20rem 20rem',
            backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
            backgroundColor: '#000',
        },
        yo = vo(
            s.forwardRef(function (t, n) {
                if (t.unknown) {
                    const {
                        repeat: s,
                        fit: r,
                        position: o,
                        width: i,
                        src: a,
                        height: l,
                        unselectable: u,
                        unknown: c,
                        unknownStyle: d = bo,
                        ...p
                    } = t;
                    return e.jsx('div', {
                        ...p,
                        ref: n,
                        style: { width: t.width, height: t.height, ...d, ...t.style },
                    });
                }
                const {
                    repeat: s,
                    fit: r,
                    position: o,
                    width: i,
                    height: a,
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
                        width: 'number' == typeof i ? `${i}rem` : i,
                        height: 'number' == typeof a ? `${a}rem` : a,
                        ...d.style,
                    },
                });
            }),
        );
    vo(
        s.forwardRef(function (t, n) {
            const { width: s, height: r, src: o, unselectable: i, unknown: a, unknownStyle: l = bo, ...u } = t;
            return t.unknown
                ? e.jsx('div', { ...u, style: { width: t.width, height: t.height, ...l } })
                : e.jsx('img', { ...u, ref: n, src: o, width: s, height: r });
        }),
    );
    const wo = 'TruncateText_dcb41d92',
        xo = s.forwardRef(function ({ text: t, tooltipParams: n, className: r, ...o }, i) {
            const a = pr({ header: null == n ? void 0 : n.header, body: (null == n ? void 0 : n.body) || t }),
                l = s.useRef(null),
                [u, c] = s.useState(!1);
            const d = s.useCallback(() => {
                if (l.current) {
                    const { scrollWidth: e, offsetWidth: t } = l.current;
                    c(e > t);
                }
            }, []);
            var p, m;
            return (
                s.useEffect(() => {
                    u || a.onMouseLeave();
                }, [u, a]),
                (p = d),
                (m = [d]),
                s.useEffect(() => {
                    let e,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((t = null), (e = p()));
                            });
                        })),
                        () => {
                            ('function' == typeof e && e(), null !== t && cancelAnimationFrame(t));
                        }
                    );
                }, m),
                (function (e, t) {
                    s.useEffect(() => {
                        let t = () => {};
                        const n = () => {
                            (t(), (t = fe(e)));
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
                    const r = Pe((e) => {
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
                        ((l.current = e), 'function' == typeof i ? i(e) : i && (i.current = e));
                    },
                    className: j(wo, r),
                    ...(u ? a : {}),
                    children: t,
                })
            );
        });
    function Ro(e) {
        var t,
            n,
            s = '';
        if ('string' == typeof e || 'number' == typeof e) s += e;
        else if ('object' == typeof e)
            if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Ro(e[t])) && (s && (s += ' '), (s += n));
            else for (t in e) e[t] && (s && (s += ' '), (s += t));
        return s;
    }
    const Eo = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
        Co = function () {
            for (var e, t, n = 0, s = ''; n < arguments.length; )
                (e = arguments[n++]) && (t = Ro(e)) && (s && (s += ' '), (s += t));
            return s;
        },
        Po = (e, t) => (n) => {
            var s;
            if (null == (null == t ? void 0 : t.variants))
                return Co(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: r, defaultVariants: o } = t,
                i = Object.keys(r).map((e) => {
                    const t = null == n ? void 0 : n[e],
                        s = null == o ? void 0 : o[e];
                    if (null === t) return null;
                    const i = Eo(t) || Eo(s);
                    return r[e][i];
                }),
                a =
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
                                  return Array.isArray(n) ? n.includes({ ...o, ...a }[t]) : { ...o, ...a }[t] === n;
                              })
                                  ? [...e, n, s]
                                  : e;
                          }, []);
            return Co(e, i, l, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        };
    function So(t, n, r) {
        var o;
        const i =
                'object' == typeof n && 'cva' in n
                    ? null == (o = n.cva)
                        ? void 0
                        : o.variants
                    : null == r
                      ? void 0
                      : r.variants,
            a = i ? Object.keys(i) : [];
        if ('object' == typeof n) {
            const e = n,
                r = Po(e.className, e.cva),
                o = e.element,
                i = s.forwardRef(function (e, t) {
                    return s.createElement(o, { ...('function' == typeof o ? e : ko(a, e)), ref: t, className: r(e) });
                });
            return ((i.displayName = t), e.cva && (i.cva = e.cva), i);
        }
        const l = Po(n, r),
            u = s.forwardRef(function (n, s) {
                return e.jsx('div', { 'data-name': t, ...ko(a, n), ref: s, className: l(n) });
            });
        return ((u.displayName = t), r && (u.cva = r), u);
    }
    function ko(e, t) {
        if (0 === e.length) return t;
        const n = { ...t };
        for (const s of e) delete n[s];
        return n;
    }
    const To = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
        No = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
        Io = So('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
        Ao = s.forwardRef(function (
            { children: t, onClick: n, onMouseEnter: s, soundTarget: r, disabled: o = !1, silent: i = !1, ...a },
            l,
        ) {
            const u = _r();
            return e.jsx(Io, {
                ...a,
                ref: l,
                onMouseEnter: function (e) {
                    (o || i || u.play('mouse-enter', { target: r || 'Button', original: e }), null == s || s(e));
                },
                onClick: function (e) {
                    o || (i || u.play('click', { target: r || 'Button', original: e }), null == n || n(e));
                },
                children: t,
            });
        }),
        jo = {
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
        Mo = s.forwardRef(function (
            {
                children: t,
                size: n = No.large,
                theme: s = To.primary,
                disabled: r = !1,
                silent: o = !1,
                autoAlignContent: i = !0,
                classNames: a,
                className: l,
                ...u
            },
            c,
        ) {
            return e.jsxs(Ao, {
                ...u,
                ref: c,
                silent: o,
                disabled: r,
                className: j(
                    jo.base,
                    jo[`base__size-${n}`],
                    jo[`base__theme-${s}`],
                    r ? jo.base__disabled : jo.base__enabled,
                    l,
                    null == a ? void 0 : a.base,
                ),
                onClick: function (e) {
                    var t;
                    r || null == (t = u.onClick) || t.call(u, e);
                },
                children: [
                    e.jsx('div', { className: j(jo.background, null == a ? void 0 : a.background) }),
                    e.jsx('div', { className: j(jo.border, null == a ? void 0 : a.border) }),
                    e.jsx('div', { className: j(jo.overlay, null == a ? void 0 : a.overlay) }),
                    e.jsx('div', {
                        className: j(jo.content, i && jo.content__fontAligned, null == a ? void 0 : a.content),
                        children: t,
                    }),
                ],
            });
        });
    ((Mo.themes = To), (Mo.sizes = No));
    const Do = 'Action_6c7b0c76',
        Oo = 'Action_icon_7d5aed3b',
        Bo = s.forwardRef(function ({ className: t, theme: n = Mo.themes.secondary, tooltipParams: s, ...r }, o) {
            const i = pr({
                alert: null == s ? void 0 : s.alert,
                header: null == s ? void 0 : s.header,
                body: null == s ? void 0 : s.body,
                note: null == s ? void 0 : s.note,
            });
            return e.jsx(Mo, {
                ...r,
                ref: o,
                onClick: (e) => {
                    (r.onClick(e), s && i.onClick());
                },
                onMouseEnter: (e) => {
                    var t;
                    (null == (t = r.onMouseEnter) || t.call(r, e), s && i.onMouseEnter(e));
                },
                onMouseLeave: (e) => {
                    var t;
                    (null == (t = r.onMouseLeave) || t.call(r, e), s && i.onMouseLeave());
                },
                autoAlignContent: !1,
                theme: n,
                className: j(Do, t),
                children: e.jsx(yo, { width: 10, height: 20, path: 'post_battle.progression.arrow', className: Oo }),
            });
        }),
        $o = 'Header_background_91826dd5',
        Fo = 'Header_mask_afb9c38d',
        Lo = 'Header_border_c6b1d37f',
        Uo = So('CardHeader', 'Header_1c2ee301'),
        qo = s.forwardRef(function ({ classNames: t, className: n, ...s }, r) {
            return e.jsxs(Uo, {
                ...s,
                className: j(null == t ? void 0 : t.base, n),
                ref: r,
                children: [
                    e.jsx('div', { className: j($o, null == t ? void 0 : t.background) }),
                    e.jsx('div', { className: j(Fo, null == t ? void 0 : t.mask) }),
                    e.jsx('div', { className: j(Lo, null == t ? void 0 : t.border) }),
                    s.children,
                ],
            });
        }),
        zo = So('CardTitle', 'Title_e5ecf295'),
        Vo = s.forwardRef(function (t, n) {
            return e.jsx(zo, { ...t, ref: n, children: t.children });
        }),
        Go = 'Card_content_f7ddaa4a',
        Qo = So('Card', 'Card_3f55e450'),
        Ho = So('CardContent', Go),
        Wo = s.forwardRef(function (t, n) {
            return e.jsx(Qo, { ...t, ref: n, children: t.children });
        });
    ((Wo.Header = qo), (Wo.Content = Ho), (Wo.Action = Bo), (Wo.Title = Vo));
    const Xo = { Text: 1, Tag: 2, Var: 3 };
    function Yo(e, t) {
        const n = [],
            s = [];
        let r = '',
            o = !1,
            i = '',
            a = 0;
        for (let l = 0; l < e.length; l++) {
            const u = e[l];
            if (u === t.start[0] && e.slice(l, l + t.start.length) === t.start) {
                if (r) {
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push({ type: Xo.Text, value: r });
                    } else n.push({ type: Xo.Text, value: r });
                    r = '';
                }
                ((o = !0), (l += t.start.length - 1));
            } else if (u === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                ((o = !1), (l += t.end.length - 1));
                const e = i.trim();
                if (e.startsWith('@')) {
                    const t = e.slice(1).trim(),
                        r = { type: Xo.Tag, attrs: t.split('|'), instanceId: ++a, children: [] };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(r);
                    } else n.push(r);
                    s.push({ node: r, startIndex: n.length });
                } else if ('/' === e) s.length > 0 && s.pop();
                else {
                    const t = { type: Xo.Var, instanceId: ++a, name: e };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(t);
                    } else n.push(t);
                }
                i = '';
            } else o ? (i += u) : (r += u);
        }
        if (r)
            if (s.length) {
                s[s.length - 1].node.children.push({ type: Xo.Text, value: r });
            } else n.push({ type: Xo.Text, value: r });
        return n;
    }
    const Zo = {
            COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
            base: 'FormatText_db904f12',
            base__fullSize: 'FormatText_base__fullSize_a514958e',
            nowrap: 'FormatText_nowrap_ff69eca3',
        },
        Ko = new Set((null == (l = Zo.COLORS) ? void 0 : l.split(', ')) ?? []);
    let Jo = 0;
    function ei() {
        return ++Jo;
    }
    const ti =
        /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
    function ni(t) {
        const n = h.resolve('langCode');
        return (function (e, t, n) {
            return we.has(t) ? e.map(n) : e.map((e, t, s) => (t === s.length - 1 ? n(e, t, s) : n(`${e} `, t, s)));
        })(
            (function (e, t) {
                return (be[t] ?? ye)(e);
            })(t, n),
            n,
            (t, n) => t && e.jsx('span', { children: t }, `${t}${n}`),
        );
    }
    function si(t) {
        return Array.isArray(t)
            ? (function (t) {
                  const n = [];
                  for (let r = 0; r < t.length; r++) {
                      const o = t[r],
                          i = t[r + 1];
                      if ('string' != typeof i || !ti.test(i)) {
                          n.push(si(o));
                          continue;
                      }
                      const a = ni(i.slice(1));
                      (n.push(
                          e.jsxs(
                              s.Fragment,
                              { children: [e.jsxs('span', { className: Zo.nowrap, children: [si(o), i[0]] }), a] },
                              ei(),
                          ),
                      ),
                          (r += 1));
                  }
                  return n;
              })(t)
            : 'string' == typeof t
              ? e.jsx(s.Fragment, { children: ni(t) }, ei())
              : t;
    }
    const ri = {
        class: function (t, ...n) {
            return e.jsx(
                'span',
                { className: n.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: t },
                ei(),
            );
        },
        colorLegacy: function (t, n) {
            const s = ei();
            return Ko.has(String(n))
                ? e.jsx('span', { className: `FormatText_colorLegacy__${n}`, children: t }, s)
                : e.jsx('span', { style: { color: `#${n}` }, children: t }, s);
        },
        bold: (e) => ['fontWeight', 'bold'],
        split: si,
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
                ei(),
            );
        },
        color: (e, t) => ['color', t],
        fontSize: (e, t) => ['fontSize', t],
        fontWeight: (e, t) => ['fontWeight', t],
        textDecoration: (e, t) => ['textDecoration', t],
    };
    function oi(e, t, n, s) {
        const r = n.map((t) => {
                if ('string' != typeof t) return t;
                const n = t.trim();
                if (n.startsWith('(') && n.endsWith(')')) {
                    const [t, ...r] = n.slice(1, -1).split(' ');
                    return t ? oi(e, t, r, s) : e;
                }
                return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
            }),
            o = s[t];
        return o ? o(e, ...r) : (console.error(`Function ${t} is not registered`), e);
    }
    function ii(e, t, n) {
        return e.reduce((e, t) => {
            const [s, ...r] = (function (e) {
                const t = [];
                let n = '',
                    s = !1,
                    r = !1,
                    o = '';
                for (let i = 0; i < e.length; i++) {
                    const a = e[i];
                    ("'" !== a && '"' !== a) || r || s
                        ? a === o && r
                            ? ((r = !1), (n += a))
                            : '(' !== a || r
                              ? ')' === a && s && !r
                                  ? ((s = !1), (n += a))
                                  : ' ' !== a || s || r
                                    ? (n += a)
                                    : n && (t.push(n), (n = ''))
                              : ((s = !0), (n += a))
                        : ((r = !0), (o = a), (n += a));
                }
                return (n && t.push(n), t);
            })(t.trim());
            return s ? oi(e, s, r, n) : e;
        }, t);
    }
    function ai(e) {
        return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
    }
    function li(e, t) {
        for (let n = 0; n < e.length; n++) {
            if ('$' === e[n]) {
                let s = n + 1;
                for (; s < e.length && !ai(e[s]); ) s++;
                const r = e.slice(n + 1, s),
                    o = t[r];
                if (o) return li(e.replace(`$${r}`, String(o)), t);
            }
        }
        return e;
    }
    function ui(e, t) {
        const n = [];
        for (let s = 0; s < e.length; s++) n[s] = li(e[s], t);
        return n;
    }
    const ci = ['number', 'string', 'undefined'];
    function di(t, n, r = {}, o = !0) {
        o && (Jo = 0);
        const i = [];
        function a(e) {
            if (ci.includes(typeof e)) {
                const t = i.at(-1);
                if ('string' == typeof t) return void (i[i.length - 1] = t + e);
            }
            i.push(e);
        }
        for (const l of t)
            if (l.type === Xo.Text) a(l.value);
            else if (l.type === Xo.Var)
                null === r[l.name] || ci.includes(typeof r[l.name])
                    ? a(r[l.name] ?? `{{${l.name}}}`)
                    : i.push(e.jsx(s.Fragment, { children: r[l.name] }, `var-${l.name}-${l.instanceId}`));
            else if (l.type === Xo.Tag) {
                const e = di(l.children, n, r, !1),
                    t = ii(ui(l.attrs, r), e, n);
                i.push(t);
            }
        return i;
    }
    function pi(e) {
        return e
            .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
            .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
    }
    function mi(e) {
        return e
            .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
            .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
    }
    function fi(e) {
        return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
    }
    function hi(e) {
        return (function (e, t, n, s, r, o, i, a, l) {
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
                    return i(o(r(s(n(t(e))))));
                case 8:
                    return a(i(o(r(s(n(t(e)))))));
                case 9:
                    return l(a(i(o(r(s(n(t(e))))))));
                default: {
                    let e = arguments[0];
                    for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
                    return e;
                }
            }
        })(e, fi, pi, mi);
    }
    const gi = { start: '{{', end: '}}' },
        _i = s.memo(function (t) {
            const {
                    brackets: n = gi,
                    text: r,
                    params: o,
                    upgradeLegacy: i,
                    fullSize: a,
                    inline: l,
                    formatters: u,
                    split: c,
                    ...d
                } = t,
                p = s.useMemo(() => (t.upgradeLegacy ? hi(t.text) : t.text), [t.text, t.upgradeLegacy]),
                m = s.useMemo(() => (t.formatters ? { ...ri, ...t.formatters } : ri), [t.formatters]),
                f = s.useMemo(() => Yo(c ? `{{@ split}}${p}{{/}}` : p, n), [n, p, c]),
                h = s.useMemo(() => di(f, m, t.params), [f, m, t.params]),
                g = j(Zo.base, a && Zo.base__fullSize, d.className);
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
    function vi({ path: t, ...n }) {
        return e.jsx(_i, { text: h.resolve('strings').readOrEmpty(t), ...n });
    }
    const bi = { base: 'AnimatedValue_d9f4b2f0', animatedValue: 'AnimatedValue_animatedValue_4c490d83' },
        yi = M.cubicBezier(0.33, 0, 0.25, 1),
        wi = 330,
        xi = 330;
    function Ri(e) {
        return {
            enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
            leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
        };
    }
    function Ei({ value: t, transition: n, children: r, className: o, classNames: i }) {
        const a = s.useMemo(xe, []),
            l = Us(t, {
                ...n,
                initial: { opacity: 1, y: '0rem', ...(null == n ? void 0 : n.initial) },
                from: { opacity: 0, y: '-5rem', ...(null == n ? void 0 : n.from) },
                enter: () => ({
                    opacity: 1,
                    y: '0rem',
                    delay: xi,
                    config: { easing: yi, duration: wi },
                    onStart: () => {
                        const { enterElements: e, leftElements: t } = Ri(a);
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
                    config: { easing: yi, duration: wi },
                    onStart: () => {
                        let e = 0;
                        const { enterElements: t, leftElements: n } = Ri(a);
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
            className: j(bi.base, o),
            children: l((n, s) => {
                const o = 0 === n.opacity.get() && !1 === n.opacity.isAnimating;
                return e.jsx(ir.div, {
                    className: j(
                        bi.animatedValue,
                        `js-animated-value-${a}-${t === s ? 'enter' : 'leave'}`,
                        null == i ? void 0 : i.animatedValue,
                    ),
                    style: { ...n, position: o ? 'absolute' : 'relative' },
                    children: r(s),
                });
            }),
        });
    }
    const Ci = {
            base: 'ProgressCount_3c6daa70',
            label: 'ProgressCount_label_d15406bd',
            total: 'ProgressCount_total_4f222a62',
            divider: 'ProgressCount_divider_487d7768',
        },
        Pi = h.resolve('intl');
    function Si({ withLabel: e, withoutLimit: t }) {
        return t
            ? 'battle_results.progression.missionsCompleteCounter'
            : 'battle_results.progression.completedPointsFrom.' + (e ? 'withLabel' : 'withoutLabel');
    }
    function ki({ current: t, total: n, withLabel: s, withoutLimit: r, className: o, classNames: i }) {
        return e.jsx(vi, {
            path: Si({ withLabel: s, withoutLimit: r }),
            className: j(Ci.base, o),
            params: {
                completed: Pi.formatNumber('integral', t),
                total: Pi.formatNumber('integral', n),
                totalClass: j(Ci.total, null == i ? void 0 : i.total),
                labelClass: s && j(Ci.label, null == i ? void 0 : i.label),
            },
        });
    }
    function Ti({
        current: t,
        total: n,
        withLabel: r,
        className: o,
        classNames: i,
        transitionCurrent: a,
        transitionTotal: l,
    }) {
        const u = _r(),
            c = s.useRef({ transitionCurrent: a, transitionTotal: l });
        return (
            s.useEffect(() => {
                c.current = { transitionCurrent: a, transitionTotal: l };
            }, [a, l]),
            e.jsx(vi, {
                path: 'battle_results.progression.completedPointsFrom.' + (r ? 'withLabel' : 'withoutLabel'),
                className: j(Ci.base, o),
                params: {
                    completed: e.jsx(Ei, {
                        className: null == i ? void 0 : i.currentTransitionWrapper,
                        value: Pi.formatNumber('integral', t),
                        transition: {
                            ...a,
                            enter: {
                                ...a.enter,
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
                    total: e.jsx(Ei, {
                        className: null == i ? void 0 : i.totalTransitionWrapper,
                        value: Pi.formatNumber('integral', n),
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
                    totalClass: j(Ci.total, null == i ? void 0 : i.total),
                    labelClass: r && j(Ci.label, null == i ? void 0 : i.label),
                    dividerClass: Ci.divider,
                },
            })
        );
    }
    const Ni = {
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
    function Ii({
        title: t,
        titleImageProps: n,
        disabled: s,
        actionTooltipParams: r,
        onHeaderClick: o,
        onButtonAction: i,
        children: a,
        progressionCountProps: l,
        className: u,
        classNames: c,
        ...d
    }) {
        var p, m, f;
        return e.jsxs(Wo, {
            className: j(Ni.card, s && Ni.card__disabled, u),
            ...d,
            children: [
                e.jsxs(Wo.Header, {
                    onClick: o,
                    className: j(Ni.cardHeader, null == (p = null == c ? void 0 : c.header) ? void 0 : p.base),
                    classNames: {
                        ...(null == c ? void 0 : c.header),
                        background: j(
                            Ni.cardHeaderBackground,
                            null == (m = null == c ? void 0 : c.header) ? void 0 : m.background,
                        ),
                        border: j(Ni.cardHeaderBorder, null == (f = null == c ? void 0 : c.header) ? void 0 : f.border),
                    },
                    children: [
                        e.jsxs('div', {
                            className: j(Ni.head, null == c ? void 0 : c.head),
                            children: [
                                e.jsxs('div', {
                                    className: Ni.titleContainer,
                                    children: [
                                        void 0 !== n && e.jsx(yo, { ...n }),
                                        e.jsx(Wo.Title, {
                                            className: j(Ni.title, null == c ? void 0 : c.title),
                                            children: e.jsx(xo, { text: t }),
                                        }),
                                    ],
                                }),
                                void 0 !== i &&
                                    e.jsx(Wo.Action, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), i(e));
                                        },
                                        className: j(Ni.action, null == c ? void 0 : c.action),
                                        tooltipParams: r,
                                    }),
                            ],
                        }),
                        e.jsx('div', {
                            className: j(Ni.tail, null == c ? void 0 : c.tail),
                            children: void 0 !== l && e.jsx(ki, { ...l }),
                        }),
                    ],
                }),
                void 0 !== a &&
                    e.jsx(Wo.Content, { className: j(Ni.content, null == c ? void 0 : c.content), children: a }),
                e.jsx('div', { className: Ni.divider }),
            ],
        });
    }
    function Ai(e) {
        return (
            !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
            (!s.isValidElement(e) && !!Array.isArray(e) && e.every(Ai))
        );
    }
    const ji = 'MultilineOverflow_8834bd8e',
        Mi = 'MultilineOverflow_content_b539970d';
    const Di = s.forwardRef(function (
        {
            text: t,
            brackets: n,
            params: r,
            formatters: o,
            upgradeLegacy: i,
            split: a = !0,
            onMouseEnter: l,
            onMouseLeave: u,
            onClick: c,
            tooltipDisabled: d = !1,
            tooltip: p,
            className: m,
            classNames: f,
            ...g
        },
        _,
    ) {
        const v = s.useRef(null),
            [b, y] = s.useState(!1);
        s.useEffect(() => {
            if (0 === t.length) return;
            const e = v.current;
            if (!e) return;
            const n = document.createElement('div');
            let s = ne;
            function r() {
                if (!e) return;
                (s(),
                    (n.style.visibility = 'hidden'),
                    (n.className = j(Mi, e.children[0].className)),
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
                    (s = fe(() => {
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
                        const i = null == (s = n.lastChild) ? void 0 : s.previousSibling;
                        (0 === o.length
                            ? (null == (r = n.lastChild) || r.remove(), y(!1))
                            : i.offsetWidth + i.offsetLeft + t.offsetWidth > e.offsetWidth
                              ? (i.remove(), y(!0))
                              : y(!0),
                            (n.style.visibility = ''));
                    })));
            }
            const o = new ResizeObserver(r);
            return (
                o.observe(e),
                new ie()
                    .add(() => s())
                    .add(ae(window, 'resize', r))
                    .add(o.disconnect.bind(o))
                    .add(n.remove.bind(n)).dispose
            );
        }, [_, t]);
        const w = (function (e) {
                return !e || Object.values(e).every(Ai);
            })(r),
            x = (function (e, t, n) {
                return dr({
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
                        split: a,
                        upgradeLegacy: i,
                        brackets: n,
                        resId: h.resolve('views').read((e) => e.mono.tooltips.tooltips('resId')),
                    }),
                    [t, n, a, i, r, w],
                ),
            ),
            R = p ?? x;
        if (
            (s.useEffect(() => {
                d || b || R.onMouseLeave();
            }, [b, R, p, d, w]),
            0 === t.length)
        )
            return null;
        return e.jsx('div', {
            ...g,
            onMouseEnter: function (e) {
                (null == l || l(e), b && !d && R.onMouseEnter(e));
            },
            onClick: function (e) {
                (null == c || c(e), d || R.onClick());
            },
            onMouseLeave: function (e) {
                (null == u || u(e), d || R.onMouseLeave());
            },
            ref: Nr([_, v]),
            className: j(ji, m, null == f ? void 0 : f.base),
            children: e.jsx(_i, {
                text: t,
                brackets: n,
                params: r,
                upgradeLegacy: i,
                split: a,
                formatters: o,
                className: null == f ? void 0 : f.text,
                style: { visibility: 'hidden' },
            }),
        });
    });
    function Oi({
        baseValue: e,
        newValue: t,
        animationType: n = Fi.simple,
        deltaVisible: s = !1,
        preViewDeltaVisible: r = !1,
        animationConfig: o,
    }) {
        return {
            from: { width: e },
            to: { width: t },
            config: o ?? { duration: (n === Fi.simple && s) || (!s && r) ? 0 : Bi, easing: Bt.easeInOutCubic },
        };
    }
    const Bi = 600,
        $i = { duration: Bi, easing: Bt.easeInOutCubic },
        Fi = { simple: 'simple', grow: 'grow', growFreeze: 'growFreeze' },
        Li = { medium: 'medium', large: 'large' },
        Ui = { disabled: 'disabled', doneInactive: 'doneInactive', doneStatic: 'doneStatic' },
        qi = 'growing',
        zi = 'shrinking',
        Vi = 'done',
        Gi = s.createContext(void 0);
    function Qi() {
        const e = s.useContext(Gi);
        if (!e) throw new Error('ProgressBar must be used within a ProgressBar');
        return e;
    }
    function Hi(e) {
        const { activeComponents: t } = Qi();
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
    const Wi = {
        base: 'BackgroundPattern_8df99ec8',
        backgroundPattern: 'BackgroundPattern_backgroundPattern_d9136c40',
        backgroundPattern__medium: 'BackgroundPattern_backgroundPattern__medium_84d64a88',
        backgroundPattern__large: 'BackgroundPattern_backgroundPattern__large_3e5537fc',
    };
    const Xi = s.memo(function ({ className: t, backgroundPattern: n }) {
        const s = Qi();
        return (
            Hi('backgroundPattern'),
            e.jsx('div', {
                className: Wi.base,
                children: e.jsx(yo, {
                    className: j(
                        t,
                        Wi.backgroundPattern,
                        0 === s.percentage ? Wi.backgroundPattern__noProgress : Wi[`backgroundPattern__${s.size}`],
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    path:
                        n ??
                        ((r = s.size),
                        (o = s.status),
                        o === Ui.disabled
                            ? `ui.progressbar.bg_pattern_base_disabled_${r}`
                            : `ui.progressbar.bg_pattern_base_${r}`),
                }),
            })
        );
        var r, o;
    });
    function Yi(e, t) {
        const n = Qi(),
            s = _r();
        return Pe((r) => {
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
    function Zi(e = 0) {
        const t = Qi(),
            n = t.soundTarget ?? 'progress-bar',
            s = _r(),
            r = Yi(e, n),
            o = Pe(() => {
                t.status !== Ui.doneInactive && t.progressCompleted
                    ? s.play('increaseDeltaMax', { target: n })
                    : s.play('progressSimple', { target: n });
            });
        return Pe(({ step: e } = {}) => {
            if (!t.silent)
                return t.activeComponents.has('delta') ? r(e) : t.activeComponents.has('fill') ? o() : void 0;
        });
    }
    const Ki = 'Delta_eb295acb',
        Ji = 'Delta_delta__increase_e6e76b0b',
        ea = 'Delta_outside_b28c01e5',
        ta = 'Delta_outside__increase_91391b24',
        na = 'Delta_inside_b1b3a5c5',
        sa = 'Delta_inside__increase_fcd871c4',
        ra = s.memo(
            s.forwardRef(function (
                {
                    from: t,
                    growAnimationConfig: n,
                    shrinkAnimationConfig: r,
                    classNames: o,
                    className: i,
                    steps: a,
                    onState: l,
                    ...u
                },
                c,
            ) {
                const d = s.useRef(null),
                    p = Qi(),
                    [m, f] = $s(() => ({ width: 0 })),
                    [h, g] = $s(() => ({ width: 0 })),
                    [_, v] = $s(() => ({ left: 0, width: 0 })),
                    [b, ...y] = a,
                    [w, x] = s.useState(y),
                    [R, E] = s.useState(b ?? 'done'),
                    C = (p.value - t) / p.maxValue,
                    P = Zi(C);
                (Hi('delta'),
                    s.useEffect(() => {
                        if (0 === C) return;
                        const [e, ...t] = a;
                        (E(e ?? 'done'), x(t));
                    }, [f, g, a, C]));
                const S = Pe(l ?? ne);
                s.useEffect(() => S(R), [R, S]);
                const k = Pe(() => {
                    const [e, ...t] = w;
                    void 0 !== e ? (E(e), x(t)) : E('done');
                });
                return (
                    s.useEffect(() => {
                        const e = d.current;
                        if (!e || 0 === C) return (g.set({ width: 0 }), f.set({ width: 0 }), E('done'), void x([]));
                        const t = 100 * Math.max(0, p.percentage - Math.max(0, C)),
                            s = 100 * Math.abs(C);
                        return (
                            e.classList.toggle(Ji, C > 0),
                            'growing' === R
                                ? (v.set({ left: t, width: s }),
                                  g.set({ width: 100 }),
                                  void f.start({
                                      from: { width: 0 },
                                      to: { width: 100 },
                                      config: n ?? $i,
                                      onRest: k,
                                      onStart: () => P({ step: R }),
                                  }))
                                : 'shrinking' === R
                                  ? (v.set({ left: t, width: s }),
                                    f.set({ width: 100 }),
                                    void g.start({
                                        from: { width: 100 },
                                        to: { width: 0 },
                                        config: r ?? $i,
                                        onRest: k,
                                        onStart: () => P({ step: R }),
                                    }))
                                  : void 0
                        );
                    }, [v, p.percentage, C, n, f, k, g, P, r, R]),
                    e.jsxs(ir.div, {
                        ...u,
                        ref: Nr([c, d]),
                        className: j(i, Ki),
                        style: { left: _.left.to((e) => `${e}%`), width: _.width.to((e) => `${e}%`) },
                        children: [
                            e.jsxs(ir.div, {
                                ...u,
                                style: { width: h.width.to((e) => `${e}%`) },
                                className: j(null == o ? void 0 : o.outside, ea, C > 0 && ta),
                                children: [
                                    e.jsx(ir.div, {
                                        style: { width: m.width.to((e) => `${e}%`) },
                                        className: j(null == o ? void 0 : o.inside, na, C > 0 && sa),
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
        oa = {
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
        ia = ir(yo),
        aa = s.memo(function ({ animationConfig: t, classNames: n }) {
            var r;
            const o = Qi(),
                { activeComponents: i } = Qi(),
                a = 100 * o.percentage,
                l = 100 * ((null == (r = o.previous) ? void 0 : r.percentage) ?? 0),
                u = void 0 === o.previous ? a : l,
                c = o.status === Ui.doneStatic,
                d = ar(),
                [p, m] = $s(() => ({ width: u }));
            return (
                s.useEffect(() => {
                    d.run(() =>
                        m.start(
                            Oi({
                                baseValue: u,
                                newValue: a,
                                animationType: o.animationType,
                                deltaVisible: i.has('delta'),
                                preViewDeltaVisible: i.has('previewDelta'),
                                animationConfig: t,
                            }),
                        ),
                    );
                }, [a, m, u, o.animationType, t, i, d]),
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(ia, {
                            path: `ui.progressbar.bg_pattern_base_done_${o.size}`,
                            className: j(
                                null == n ? void 0 : n.done,
                                oa.done,
                                !o.progressCompleted && oa.done__hidden,
                                o.progressCompleted && (c ? oa.done__doneStatic : oa.done__visible),
                            ),
                            repeat: 'repeat',
                            position: 'left top',
                            style: { width: p.width.to((e) => `${e}%`) },
                        }),
                        !c &&
                            e.jsx(ia, {
                                path: `ui.progressbar.bg_pattern_base_done_complete_${o.size}`,
                                className: j(
                                    null == n ? void 0 : n.doneComplete,
                                    oa.complete,
                                    o.progressCompleted && oa.complete__visible,
                                ),
                                repeat: 'repeat',
                                position: 'left top',
                                style: { width: p.width.to((e) => `${e}%`) },
                            }),
                    ],
                })
            );
        }),
        la = ir(yo),
        ua = s.memo(function ({ animationConfig: t, className: n }) {
            var r;
            const o = Qi(),
                { activeComponents: i } = Qi(),
                a = ar(),
                l = 100 * o.percentage,
                u = 100 * ((null == (r = o.previous) ? void 0 : r.percentage) ?? 0),
                c = void 0 === o.previous ? l : u,
                [d, p] = $s(() => ({ width: c }));
            return (
                s.useEffect(() => {
                    a.run(() =>
                        p.start(
                            Oi({
                                baseValue: c,
                                newValue: l,
                                animationType: o.animationType,
                                deltaVisible: i.has('delta'),
                                preViewDeltaVisible: i.has('previewDelta'),
                                animationConfig: t,
                            }),
                        ),
                    );
                }, [p, c, o.animationType, i, l, t, a]),
                e.jsx(la, {
                    path: `ui.progressbar.bg_pattern_base_filled_${o.size}`,
                    className: j(
                        n,
                        oa.filled,
                        o.status && oa[`filled__${o.status}`],
                        o.progressCompleted && oa.filled__hidden,
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    style: { width: d.width.to((e) => `${e}%`) },
                })
            );
        }),
        ca = s.memo(function ({ classNames: t, className: n, animationConfig: r, ...o }) {
            var i;
            const a = Qi(),
                l = Zi(),
                u = ar(),
                { activeComponents: c } = Qi(),
                d = 100 * a.percentage,
                p = 100 * ((null == (i = a.previous) ? void 0 : i.percentage) ?? 0),
                m = void 0 === a.previous ? d : p;
            (Hi('fill'),
                s.useEffect(() => {
                    'growFreeze' === a.animationType && a.progressCompleted && !a.activeComponents.has('delta') && l();
                }, [a.activeComponents, a.animationType, a.progressCompleted, l]));
            const [f, h] = $s(() => ({ width: m }));
            return (
                s.useEffect(() => {
                    u.run(() =>
                        h.start({
                            ...Oi({
                                baseValue: m,
                                newValue: d,
                                animationType: a.animationType,
                                deltaVisible: c.has('delta'),
                                preViewDeltaVisible: c.has('previewDelta'),
                                animationConfig: r,
                            }),
                            onStart: () => l(),
                        }),
                    );
                }, [r, h, m, a.animationType, c, d, l, u]),
                e.jsxs('div', {
                    className: j(oa.base, n),
                    children: [
                        e.jsx(ir.div, {
                            className: null == t ? void 0 : t.fill,
                            style: { width: f.width.to((e) => `${e}%`) },
                        }),
                        o.children ??
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(ua, { className: null == t ? void 0 : t.filledPattern, animationConfig: r }),
                                    e.jsx(aa, {
                                        classNames: {
                                            done: null == t ? void 0 : t.done,
                                            doneComplete: null == t ? void 0 : t.doneComplete,
                                        },
                                        animationConfig: r,
                                    }),
                                ],
                            }),
                        e.jsx(ir.div, {
                            className: j(
                                null == t ? void 0 : t.edge,
                                oa.edge,
                                0 === a.percentage && oa.edge__noProgress,
                                !c.has('previewDelta') && !a.progressCompleted && oa.edge__visible,
                                a.status && oa[`edge__${a.status}`],
                            ),
                            style: { left: f.width.to((e) => `${e}%`) },
                        }),
                    ],
                })
            );
        });
    ((ca.Filled = ua), (ca.Done = aa));
    const da = { above: 'above', below: 'below' },
        pa = {
            base: 'Indicators_f2e99d31',
            step: 'Indicators_step_a78300f3',
            step__above: 'Indicators_step__above_a95c746e',
            indicator: 'Indicators_indicator_8484a8c7',
            label: 'Indicators_label_f8c7ff1e',
        };
    function ma({ position: t, value: n, children: s, className: r, classNames: o }) {
        const i = Qi();
        return e.jsxs('div', {
            className: j(pa.step, pa[`step__${t}`], r),
            style: { left: (n / i.maxValue) * 100 + '%' },
            children: [
                t === da.below && e.jsx('div', { className: j(pa.indicator, null == o ? void 0 : o.indicator) }),
                void 0 !== s && e.jsx('div', { className: j(pa.label, null == o ? void 0 : o.label), children: s }),
                t === da.above && e.jsx('div', { className: j(pa.indicator, null == o ? void 0 : o.indicator) }),
            ],
        });
    }
    const fa = So('Indicators', pa.base),
        ha = function (t) {
            const n = Qi();
            return (
                Hi('stepIndicators'),
                e.jsx(fa, {
                    children: ge(t.count, (s) => {
                        var r, o, i;
                        const a = (s / (t.count - 1)) * 100,
                            l = n.value >= a && 0 !== n.value;
                        return e.jsx(
                            ma,
                            {
                                position: t.position,
                                value: a,
                                className: j(
                                    null == (r = t.classNames) ? void 0 : r.step,
                                    l && (null == (o = t.classNames) ? void 0 : o.completed),
                                ),
                                classNames: null == (i = t.classNames) ? void 0 : i.stepClassNames,
                                children: t.children ? t.children(s, a, l) : void 0,
                            },
                            s,
                        );
                    }),
                })
            );
        };
    ((ha.Step = ma), (ha.positions = da));
    const ga = 'PreviewDelta_86b01c3e',
        _a = 'PreviewDelta_negative_1c375892',
        va = 'PreviewDelta_positive_be83fc48',
        ba = 'PreviewDelta_negative__visible_19dda1c5',
        ya = 'PreviewDelta_positive__visible_19dda1c5',
        wa = s.forwardRef(function ({ value: t, classNames: n, ...s }, r) {
            const o = Qi();
            Hi('previewDelta');
            const i = t - o.value,
                a = i < 0 ? 'negative' : i > 0 ? 'positive' : 'neutral';
            if ('neutral' === a) return null;
            const l = Math.abs(i) / o.maxValue,
                u = i < 0 ? l : 0,
                c = 100 * (o.percentage - u),
                d = 100 * l;
            return e.jsxs('div', {
                ...s,
                'data-name': 'PreviewDelta',
                ref: r,
                className: j(ga, s.className),
                children: [
                    e.jsx('div', {
                        style: { left: `${c}%`, width: `${d}%`, ...s.style },
                        className: j(null == n ? void 0 : n.negative, _a, 'negative' === a && ba),
                    }),
                    e.jsx('div', {
                        style: { left: `${c}%`, width: `${d}%`, ...s.style },
                        className: j(null == n ? void 0 : n.positive, va, 'positive' === a && ya),
                    }),
                ],
            });
        });
    function xa(t) {
        const [n, r] = s.useState(Math.min(t.value, t.maxValue)),
            [o, i] = s.useState(t.maxValue),
            a = Ee(n),
            l = Ee(o),
            u = s.useRef(new Set()),
            c = Pe((e) => r(Math.min(e, t.maxValue))),
            d = Pe((e) => u.current.has(e));
        (s.useLayoutEffect(() => {
            c(t.value);
        }, [t.value, c]),
            s.useLayoutEffect(() => {
                i(t.maxValue);
            }, [t.maxValue]));
        const p = Pe((e) => {
            var n;
            return null == (n = t.onValueChange) ? void 0 : n.call(t, e);
        });
        s.useEffect(() => {
            p(n);
        }, [p, n]);
        const m = Pe((e) => {
            var n;
            return null == (n = t.onMaxValueChange) ? void 0 : n.call(t, e);
        });
        s.useEffect(() => {
            m(o);
        }, [m, o]);
        const f = s.useMemo(() => {
            if (void 0 !== a && void 0 !== l) return { value: a, maxValue: l, percentage: a / l };
        }, [a, l]);
        he(o > 0, 'ProgressBar: maxValue must be greater than 0');
        const h = s.useMemo(() => {
                const e = n / o == 1 && t.status !== Ui.doneInactive;
                return t.animationType === Fi.growFreeze ? e && t.maxValueAchieved : e;
            }, [o, t.animationType, t.maxValueAchieved, t.status, n]),
            g = s.useMemo(
                () => ({
                    value: n,
                    maxValue: o,
                    setValue: c,
                    setMaxValue: i,
                    animationType: t.animationType ?? Fi.simple,
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
        return e.jsx(Gi.Provider, { value: g, children: t.children });
    }
    const Ra = {
            background: 'ProgressBar_background_b4143753',
            base: 'ProgressBar_27c2305c',
            base__medium: 'ProgressBar_base__medium_97d40af9',
            base__large: 'ProgressBar_base__large_56a06125',
            base__disabled: 'ProgressBar_base__disabled_c8466b10',
            base__done: 'ProgressBar_base__done_dcd0e31a',
            border: 'ProgressBar_border_cc9e47f4',
        },
        Ea = So('ProgressBar', Ra.base, { variants: { size: { medium: Ra.base__medium, large: Ra.base__large } } }),
        Ca = function ({ size: t = Li.medium, backgroundPattern: n, status: s, className: r, classNames: o, ...i }) {
            return e.jsx(xa, {
                size: t,
                status: s,
                ...i,
                children: e.jsxs(Ea, {
                    size: t,
                    className: j(r, i.value === i.maxValue && s !== Ui.doneInactive && Ra.base__done),
                    children: [
                        e.jsx('div', { className: j(Ra.border, Ra[`border__${t}`], null == o ? void 0 : o.border) }),
                        e.jsx('div', { className: j(Ra.background, null == o ? void 0 : o.background) }),
                        e.jsx(Xi, { backgroundPattern: n, className: null == o ? void 0 : o.backgroundPattern }),
                        i.children,
                    ],
                }),
            });
        };
    ((Ca.Fill = ca),
        (Ca.Delta = ra),
        (Ca.PreviewDelta = wa),
        (Ca.NumberIndicators = ha),
        (Ca.sizes = Li),
        (Ca.statuses = Ui),
        (Ca.animations = Fi));
    const Pa = 'ProgressBar_wrapper_a944db13',
        Sa = [qi, zi],
        ka = s.memo(function ({ progressBar: t, fill: n, delta: s, wrapperSpringProps: r }) {
            const o = $s({ from: { opacity: 1 }, ...r });
            return e.jsx(Ca, {
                ...t,
                children: e.jsxs(ir.div, {
                    className: Pa,
                    style: o,
                    children: [
                        e.jsx(Ca.Fill, { ...n }),
                        void 0 !== s && e.jsx(Ca.Delta, { ...s, steps: (null == s ? void 0 : s.steps) ?? Sa }),
                    ],
                }),
            });
        }),
        Ta = 'ProgressStats_label_6e975df0',
        Na = 'ProgressStats_receivedInBattle_d3abd2fe',
        Ia = So('ProgressStatsLabel', Ta),
        Aa = s.forwardRef(({ className: t, text: n, transitionProps: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                className: j(Ta, t),
                ref: o,
                children: e.jsx(Ei, { value: n, transition: s, children: se }),
            }),
        ),
        ja = s.forwardRef(({ value: t, className: n, total: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                ref: o,
                className: j(Na, n),
                children: e.jsx(vi, {
                    path: s ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    params: { value: t },
                }),
            }),
        ),
        Ma = s.forwardRef(({ value: t, className: n, total: r, transition: o, target: i, ...a }, l) => {
            const u = _r(),
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
                    ...a,
                    ref: l,
                    className: j(Na, n),
                    children: e.jsx(Ei, {
                        value: c,
                        transition: {
                            ...o,
                            enter: {
                                ...o.enter,
                                onRest: (...e) => {
                                    var t;
                                    (!0 !== d.current.immediate &&
                                        u.play('numbersShown', { target: i ?? 'mission-progress:received-value' }),
                                        'function' ==
                                            typeof (null == (t = null == o ? void 0 : o.enter) ? void 0 : t.onRest) &&
                                            o.enter.onRest(...e));
                                },
                            },
                        },
                        children: (t) => e.jsx(vi, { path: t.textPath, params: { value: t.value } }),
                    }),
                })
            );
        }),
        Da = So('ProgressStats');
    ((Da.Label = Ia), (Da.ReceivedValue = ja), (Da.AnimatedReceivedValue = Ma), (Da.AnimatedLabel = Aa));
    const Oa = s.createContext(void 0);
    function Ba() {
        const e = s.useContext(Oa);
        return (he(void 0 !== e, 'useCondition must be used under conditionContext.Provider'), e);
    }
    const $a = s.createContext(void 0);
    function Fa() {
        const e = s.useContext($a);
        return (he(void 0 !== e, 'useMissionCard must be used under missionCardContext.Provider'), e);
    }
    const La = {
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
        Ua = ['win', 'isAlive'],
        qa = M.cubicBezier(0.33, 0, 0.25, 1);
    const za = {
        Condition: function (t) {
            var n, s;
            const r = t.completed && t.multiQuest;
            return (
                t.lastCondition &&
                    r &&
                    t.animation &&
                    (null == (n = t.rewardsGlowRef) || n.start(), null == (s = t.completedMarkRef) || s.start()),
                e.jsx(za.Root, {
                    condition: t.value,
                    children: e.jsxs(za.Body, {
                        children: [
                            e.jsx(za.Title, { questsAmount: t.questsAmount }),
                            e.jsx(za.Description, { guiDisabledDescription: t.guiDisabledDescription }),
                            !r &&
                                e.jsx(za.Progression, {
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
            return e.jsx(Oa.Provider, {
                value: t,
                children: e.jsx('div', { ...n, className: j(La.content, t.completed && La.content__completed) }),
            });
        },
        Description: function ({ guiDisabledDescription: t }) {
            const { description: n, conditionType: s } = Ba();
            return s && Ua.includes(s)
                ? null
                : e.jsx('div', {
                      className: La.description,
                      children: e.jsx(Di, { text: B(t ?? n), className: La.multiline }),
                  });
        },
        Title: function ({ questsAmount: t }) {
            const { title: n, icon: s, completed: r, progression: o } = Ba(),
                { completed: i } = Fa();
            if (!s && !n) return null;
            const a = (function ({ icon: e, conditionCompleted: t, questsAmount: n, questCompleted: s }) {
                if (e && e.default.path) return (n && n > 1) || (s && 1 === n) || t ? e : void 0;
            })({ icon: s, questCompleted: i, questsAmount: t, conditionCompleted: r });
            return e.jsxs('div', {
                className: La.title,
                children: [
                    void 0 !== a &&
                        e.jsx('div', {
                            style: { backgroundImage: `url(${a.default.path})` },
                            className: j(La.titleIcon, a.default.isGold && La.titleIcon__gold),
                        }),
                    o ? P.formatNumber('integral', o.total) : null == n ? void 0 : n.trim(),
                ],
            });
        },
        Body: So('MissionCardBody', La.body),
        Progression: function ({ completed: t, rewardsGlowRef: n, completedMarkRef: r }) {
            const { progression: o } = Ba(),
                { animation: i, immediateAnimation: a } = Fa(),
                l = Ls(),
                u = Ls(),
                [[c, d], p] = s.useState(() => {
                    if (!o) return [0, 0];
                    const e = Math.max(0, o.current - o.earned);
                    return [e, e];
                });
            (s.useEffect(() => {
                var e;
                (i || a) && o && ((e = o.current >= o.total ? o.total : o.current), p(([, t]) => [t, e]));
            }, [i, a, o]),
                s.useEffect(() => {
                    t && !o && (i || a) && (null == r || r.start(), null == n || n.start());
                }, [o, t, r, n, i, a]),
                s.useEffect(() => {
                    a && (l.start(), u.start(), t && (null == r || r.start(), null == n || n.start()));
                }, [a, t, l, u, r, n]));
            const m = s.useMemo(() => {
                if (void 0 !== o)
                    return {
                        progress: {
                            value: d,
                            silent: a,
                            animationType: Fi.grow,
                            status: Ui.doneStatic,
                            maxValue: o.total,
                            className: La.progressbar,
                            maxValueAchieved: d === o.total,
                        },
                        delta: a
                            ? void 0
                            : {
                                  from: c,
                                  steps: c === d ? [] : [qi, zi],
                                  growAnimationConfig: { duration: 600, easing: qa },
                                  shrinkAnimationConfig: { duration: 600, easing: qa },
                                  onState(e) {
                                      e === Vi &&
                                          d === o.current &&
                                          o.earned > 0 &&
                                          (l.start(), u.start(), t && (null == r || r.start()));
                                  },
                              },
                        fill: { animationConfig: { duration: a ? 0 : 600, easing: qa } },
                    };
            }, [a, c, d, o, t, l, u, r]);
            return o
                ? (he.log(
                      o.total >= o.current && o.current >= 0,
                      `Unexpected progression values: current(${o.current}), total(${o.total})`,
                  ),
                  e.jsxs('div', {
                      className: La.progression,
                      children: [
                          void 0 !== m && e.jsx(ka, { progressBar: m.progress, delta: m.delta, fill: m.fill }),
                          e.jsxs('div', {
                              className: La.numberStats,
                              children: [
                                  e.jsx(Ti, {
                                      current: a ? o.current : d,
                                      total: o.total,
                                      className: La.progressionCounter,
                                      transitionCurrent: { ref: l, immediate: a },
                                      transitionTotal: { immediate: a },
                                  }),
                                  e.jsx(Da.AnimatedReceivedValue, {
                                      value: P.formatNumber('integral', o.earned),
                                      transition: {
                                          ref: u,
                                          immediate: a,
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
    var Va = ((e) => (
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
        ))(Va || {}),
        Ga = ((e) => (
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
        ))(Ga || {}),
        Qa = ((e) => (
            (e.MULTI = 'multi'),
            (e.CURRENCY = 'currency'),
            (e.PREMIUM_PLUS = 'premium_plus'),
            (e.NUMBER = 'number'),
            (e.STRING = 'string'),
            e
        ))(Qa || {}),
        Ha = ((e) => (
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
        ))(Ha || {}),
        Wa = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(Wa || {}),
        Xa = ((e) => (
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
        ))(Xa || {});
    const Ya = [
            Va.Items,
            Va.Equipment,
            Va.Xp,
            Va.XpFactor,
            Va.Blueprints,
            Va.BlueprintsAny,
            Va.Goodies,
            Va.Berths,
            Va.Slots,
            Va.Tokens,
            Va.CrewSkins,
            Va.CrewBooks,
            Va.Customizations,
            Va.CreditsFactor,
            Va.TankmenXp,
            Va.TankmenXpFactor,
            Va.FreeXpFactor,
            Va.BattleToken,
            Va.LootBox,
            Va.PremiumUniversal,
            Va.NaturalCover,
            Va.BpCoin,
            Va.BattlePassSelectToken,
            Va.BattlaPassFinalAchievement,
            Va.BattleBadge,
            Va.BonusX5,
            Va.CrewBonusX3,
            Va.EpicSelectToken,
            Va.Comp7TokenWeeklyReward,
            Va.DeluxeGift,
            Va.BattleBoosterGift,
            Va.OptionalDevice,
        ],
        Za = [Va.Gold, Va.Credits, Va.Crystal, Va.FreeXp],
        Ka = [Va.BattlePassPoints, Va.EquipCoin],
        Ja = [Va.PremiumPlus, Va.Premium],
        el = (e) =>
            Ya.includes(e)
                ? Qa.MULTI
                : Za.includes(e)
                  ? Qa.CURRENCY
                  : Ka.includes(e)
                    ? Qa.NUMBER
                    : Ja.includes(e)
                      ? Qa.PREMIUM_PLUS
                      : Qa.STRING,
        tl = ['engravings', 'backgrounds'],
        nl = ['engraving', 'background'],
        sl = (e, t = Ga.Small) => {
            const { name: n, type: s, value: r, icon: o, item: i, dogTagType: a } = e,
                l = t === Ga.S24x24 ? Ga.Small : t,
                u = ((e) => {
                    switch (e) {
                        case Ga.S600x450:
                            return 'c_600x450';
                        case Ga.S400x300:
                            return 'c_400x300';
                        case Ga.S296x222:
                            return 'c_296x222';
                        case Ga.S232x174:
                            return 'c_232x174';
                        case Ga.Big:
                            return 'c_80x80';
                        case Ga.Small:
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
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.${i}`;
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
                        const s = tl[e];
                        if (s) {
                            const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(s),
                                o = r.$dyn(n);
                            return !o && nl[e] ? `${r.$dyn(nl[e])}` : `${o}`;
                        }
                        return (
                            console.error(
                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                            ),
                            ''
                        );
                    })(a, l, o);
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
        rl = (e, t) => ({ args: e, contentId: t }),
        ol = [Ga.Small, Ga.Big],
        il = {
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
        al = h.resolve('images'),
        ll = new Map([
            [Ga.S24x24, Ga.Small],
            [Ga.S48x48, Ga.Small],
        ]),
        ul = ({
            name: t,
            image: n,
            isPeriodic: s = !1,
            isFixedBoxSize: r = !0,
            size: o = Ga.Big,
            special: i,
            value: a,
            valueType: l,
            title: u,
            style: c,
            className: d,
            classNames: p,
            tooltipArgs: m,
            periodicIconTooltipArgs: f,
        }) => {
            const g = ll.has(o) ? ll.get(o) : o,
                _ = ((e, t) => {
                    if (void 0 === t || !ol.includes(e)) return null;
                    switch (t) {
                        case Ha.BATTLE_BOOSTER:
                        case Ha.BATTLE_BOOSTER_REPLACE:
                            return Wa.BATTLE_BOOSTER;
                    }
                })(o, i),
                v = ((e) => {
                    if (void 0 === e) return null;
                    switch (e) {
                        case Ha.BATTLE_BOOSTER:
                            return Xa.BATTLE_BOOSTER;
                        case Ha.BATTLE_BOOSTER_REPLACE:
                            return Xa.BATTLE_BOOSTER_REPLACE;
                        case Ha.BUILT_IN_EQUIPMENT:
                            return Xa.BUILT_IN_EQUIPMENT;
                        case Ha.EQUIPMENT_PLUS:
                            return Xa.EQUIPMENT_PLUS;
                        case Ha.EQUIPMENT_TROPHY_BASIC:
                            return Xa.EQUIPMENT_TROPHY_BASIC;
                        case Ha.EQUIPMENT_TROPHY_UPGRADED:
                            return Xa.EQUIPMENT_TROPHY_UPGRADED;
                        case Ha.EQUIPMENT_MODERNIZED_UPGRADED_1:
                            return Xa.EQUIPMENT_MODERNIZED_UPGRADED_1;
                        case Ha.EQUIPMENT_MODERNIZED_UPGRADED_2:
                            return Xa.EQUIPMENT_MODERNIZED_UPGRADED_2;
                        case Ha.EQUIPMENT_MODERNIZED_UPGRADED_3:
                            return Xa.EQUIPMENT_MODERNIZED_UPGRADED_3;
                        case Ha.PROGRESSION_STYLE_UPGRADED_1:
                            return Xa.PROGRESSION_STYLE_UPGRADED_1;
                        case Ha.PROGRESSION_STYLE_UPGRADED_2:
                            return Xa.PROGRESSION_STYLE_UPGRADED_2;
                        case Ha.PROGRESSION_STYLE_UPGRADED_3:
                            return Xa.PROGRESSION_STYLE_UPGRADED_3;
                        case Ha.PROGRESSION_STYLE_UPGRADED_4:
                            return Xa.PROGRESSION_STYLE_UPGRADED_4;
                        case Ha.PROGRESSION_STYLE_UPGRADED_5:
                            return Xa.PROGRESSION_STYLE_UPGRADED_5;
                        case Ha.PROGRESSION_STYLE_UPGRADED_6:
                            return Xa.PROGRESSION_STYLE_UPGRADED_6;
                    }
                })(i),
                b = ((e, t) => {
                    const n = h.resolve('intl');
                    if (void 0 === e) return null;
                    switch (t) {
                        case Qa.MULTI: {
                            const t = Number(e);
                            return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                        }
                        case Qa.CURRENCY:
                        case Qa.NUMBER:
                            return n.formatNumber(n.numberFormats[0] || 'integral', Number(e));
                        case Qa.PREMIUM_PLUS: {
                            const t = Number(e);
                            return isNaN(t) ? e : null;
                        }
                        default:
                            return e;
                    }
                })(a, l),
                y = dr({
                    contentId: (null == m ? void 0 : m.contentId) ?? 0,
                    args: null == m ? void 0 : m.args,
                    resId: null == m ? void 0 : m.resId,
                    decoratorId: null == m ? void 0 : m.decoratorId,
                }),
                w = pr({ header: null == f ? void 0 : f.header, body: null == f ? void 0 : f.body });
            return e.jsxs('div', {
                className: j(il.base, il[`base__${o}`], !r && il.base__dynamicBox, d),
                style: c,
                ...y,
                children: [
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs('div', {
                                className: j(
                                    il.image,
                                    r ? il.image__fixedBox : il[`image__${o}`],
                                    null == p ? void 0 : p.image,
                                ),
                                children: [
                                    _ &&
                                        e.jsx('div', {
                                            className: j(il.highlight, null == p ? void 0 : p.highlight),
                                            style: {
                                                backgroundImage: `url(${al.readOrEmpty(`quests.bonuses.${g}.${_}_highlight`)})`,
                                            },
                                        }),
                                    n &&
                                        e.jsx('div', {
                                            className: j(il.icon, null == p ? void 0 : p.rewardIcon),
                                            style: { backgroundImage: `url(${n})` },
                                        }),
                                    v &&
                                        e.jsx('div', {
                                            className: j(il.overlay, null == p ? void 0 : p.overlay),
                                            style: {
                                                backgroundImage: `url(${al.readOrEmpty(`quests.bonuses.${g}.${v}_overlay`)})`,
                                            },
                                        }),
                                ],
                            }),
                            b &&
                                e.jsx('div', {
                                    className: j(
                                        il.info,
                                        il[`info__${t}`],
                                        l === Qa.MULTI && il.info__multi,
                                        null == p ? void 0 : p.info,
                                    ),
                                    children: b,
                                }),
                            u && e.jsx('div', { className: il.title, children: u }),
                        ],
                    }),
                    s && e.jsx('div', { className: j(il.timer, null == p ? void 0 : p.periodicIcon), ...w }),
                ],
            });
        },
        cl = Object.fromEntries(Object.entries(ri).map(([e]) => [e, (e) => e]));
    const dl = 'RewardsList_b956755b',
        pl = 'RewardsList_base__vertical_59db3c9f',
        ml = 'RewardsList_reward_fc200613',
        fl = 'RewardsList_reward__vertical_5f09c6e0',
        hl = 'RewardsList_boxRewardClassName_882c908d',
        gl = { [Ga.S24x24]: Ga.Small, [Ga.S48x48]: Ga.Small },
        _l = s.memo(function ({
            data: t,
            isFixedBoxSize: n,
            size: s = Ga.Big,
            isVertical: r = !1,
            count: o,
            classMix: i,
            rewardItemClassMix: a,
            boxRewardTooltip: l,
            boxRewardValue: u,
            boxRewardClassName: c,
            boxRewardClassNames: d,
        }) {
            const p = h.resolve('strings'),
                m = h.resolve('images'),
                f =
                    'number' == typeof o && o < t.length
                        ? `${m.readOrEmpty(`quests.bonuses.${gl[s] ?? s}.default`)}`
                        : void 0,
                g =
                    u ||
                    (function (e, t = {}) {
                        const n = Yo(e, gi);
                        return String(di(n, cl, t));
                    })(hi(p.readOrEmpty('tooltips.quests.awards.additional.bottom')), { count: t.length - (o || 0) });
            return e.jsx('div', {
                className: j(dl, r && pl, i),
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
                                                  className: j(ml, r && fl, a),
                                                  children: e.jsx(ul, { size: s, isFixedBoxSize: n, ...t }),
                                              },
                                              o,
                                          ),
                                      ),
                                  e.jsx('div', {
                                      className: j(ml, r && fl, a),
                                      children: e.jsx(ul, {
                                          name: 'more',
                                          isFixedBoxSize: n,
                                          image: f,
                                          size: s,
                                          value: g,
                                          tooltipArgs: l,
                                          className: j(hl, c),
                                          classNames: d,
                                      }),
                                  }),
                              ],
                          })
                        : t.map((t, o) =>
                              e.jsx(
                                  'div',
                                  {
                                      className: j(ml, r && fl, a),
                                      children: e.jsx(ul, { size: s, isFixedBoxSize: n, ...t }),
                                  },
                                  o,
                              ),
                          ),
            });
        });
    function vl({ bonuses: t, size: n, resId: r, boxRewardTooltipArgs: o, maxRewardsCount: i, questId: a, ...l }) {
        const u = s.useMemo(
                () =>
                    de(t, (e) => ({
                        size: n,
                        name: e.name,
                        image: sl(e, n),
                        value: e.value,
                        valueType: el(e.name),
                        tooltipArgs: {
                            ...rl(
                                { tooltipId: a ? `${a}:${e.tooltipId}` : e.tooltipId },
                                Number(e.tooltipContentId) ||
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                            ),
                            resId: r,
                        },
                    })),
                [t, n, r, a],
            ),
            c = void 0 === i ? t.length : i <= 1 ? 1 : t.length <= i ? i : i - 1,
            d = s.useMemo(
                () =>
                    o || {
                        contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                        args: { showFromIndex: c },
                        resId: r,
                    },
                [c, r, o],
            );
        return e.jsx(_l, { ...l, data: u, count: c, boxRewardTooltip: d, size: n });
    }
    const bl = 'AnimatedRewards_glowContainer_82630782',
        yl = 'AnimatedRewards_c981a355',
        wl = 'AnimatedRewards_rewardsWrapper_11b576b3',
        xl = 'AnimatedRewards_glow_3a2cd010',
        Rl = 'AnimatedRewards_glowImage_4ecce597',
        El = M.cubicBezier(0.33, 0, 0.67, 1),
        Cl = M.cubicBezier(0.23, 0, 0.57, 1),
        Pl = s.forwardRef(function (
            {
                animationRef: t,
                immediateAnimation: n,
                maxRewardsCount: r,
                bonuses: o,
                boxRewardTooltipArgs: i,
                className: a,
                classNames: l,
                ...u
            },
            c,
        ) {
            const d = Ls(),
                [p] = $s(() => ({
                    ref: t,
                    from: { opacity: 0, scale: 0.6 },
                    to: async (e) => {
                        (await e({ opacity: 1, scale: 0.8, config: { duration: 330, easing: El } }),
                            d.start(),
                            await e({ opacity: 0, scale: 1, config: { duration: 330, easing: El } }));
                    },
                })),
                [m] = $s(() => ({
                    ref: d,
                    immediate: n,
                    from: { opacity: 1 },
                    to: { opacity: 0.4, config: { duration: 330, easing: Cl } },
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
                    className: j(yl, a),
                    children: [
                        e.jsx(ir.div, {
                            style: m,
                            className: j(wl, null == l ? void 0 : l.rewardsWrapper),
                            children: e.jsx(vl, { ...u, maxRewardsCount: r, bonuses: o, boxRewardTooltipArgs: i }),
                        }),
                        e.jsx('div', {
                            className: j(bl, null == l ? void 0 : l.glowContainer),
                            children: ge(r ? Math.min(r, o.length) : o.length, (t) =>
                                e.jsx(
                                    ir.div,
                                    {
                                        style: p,
                                        className: xl,
                                        children: e.jsx(
                                            yo,
                                            { path: 'post_battle.progression.reward_glow', className: Rl },
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
        Sl = h.resolve('views');
    function kl({ limit: e, rewardsTooltipResId: t, ...n }) {
        return {
            contentId: Sl.read((e) => e.lobby.tooltips.AdditionalBattlePassRewardsTooltip('resId')),
            args: { showFromIndex: e - 1, ...n },
            resId: t,
        };
    }
    function Tl({
        completed: t,
        rewardsGlowRef: n,
        bonuses: s,
        maxRewardsCount: r,
        rewardsTooltipResId: o,
        immediateAnimation: i,
        questId: a,
        level: l,
        chapter: u,
        rewardType: c,
        className: d,
        rewardItemClassName: p,
    }) {
        const m = {
            bonuses: s,
            questId: a,
            maxRewardsCount: r,
            size: Ga.Small,
            resId: o,
            boxRewardTooltipArgs: kl({
                limit: r,
                rewardsTooltipResId: o,
                rewardType: c,
                level: l ? l - 1 : void 0,
                chapter: u,
                questId: a,
            }),
            rewardItemClassMix: p,
        };
        return t
            ? e.jsx(Pl, {
                  ...m,
                  animationRef: n,
                  immediateAnimation: i,
                  className: d,
                  classNames: { glowContainer: d },
              })
            : e.jsx(vl, { ...m, classMix: d });
    }
    const Nl = 'CompletedMark_fc4eee08',
        Il = 'CompletedMark_glow_33775180',
        Al = M.cubicBezier(1, 0, 0.95, 1),
        jl = M.cubicBezier(0.45, 0, 0.52, 1),
        Ml = s.forwardRef(function (
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
                classNames: p,
                onGlowRest: m,
                ...f
            },
            h,
        ) {
            const g = s.useRef(c),
                _ = _r(),
                v = a.useAdaptive(
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
                [b, y] = $s(() => ({ from: { opacity: 0 } })),
                [w] = $s(() => {
                    var e, s;
                    return {
                        ref: n,
                        from: { maskSize: '0% 100%', opacity: 0 },
                        to: [
                            {
                                maskSize: '40% 80%',
                                opacity: 0.5,
                                config: { duration: 100, easing: Al },
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
                                config: { duration: 100, easing: Al },
                                immediate: null == (s = g.current) ? void 0 : s.immediate,
                            },
                        ],
                        onRest: () => {
                            y.start({
                                to: [
                                    { opacity: 0.6, config: { duration: 160, easing: jl } },
                                    { opacity: 0, config: { duration: 160, easing: jl } },
                                ],
                                onRest: m,
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
                    className: j(Nl, r),
                    children: [
                        e.jsx(ir.div, {
                            style: b,
                            className: j(Il, null == p ? void 0 : p.glow),
                            children: e.jsx(yo, {
                                width: (null == u ? void 0 : u.width) ?? v.glow.width,
                                height: (null == u ? void 0 : u.height) ?? v.glow.height,
                                path: (null == u ? void 0 : u.path) ?? v.glow.path,
                            }),
                        }),
                        e.jsx(ir.div, {
                            ...f,
                            style: { ...w, ...d },
                            ref: h,
                            className: null == p ? void 0 : p.icon,
                            children: e.jsx(yo, {
                                width: i ?? v.icon.width,
                                height: l ?? v.icon.height,
                                path: o ?? v.icon.path,
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
        return e.jsx(yo, { ...r, ref: o, width: n ?? i.size, height: s ?? i.size, path: t ?? i.path });
    });
    var Dl = ((e) => (
        (e.EASY = 'easy'),
        (e.MEDIUM = 'medium'),
        (e.HARD = 'hard'),
        (e.BONUS = 'bonus'),
        (e.PREMIUM = 'premium'),
        (e.EPIC = 'epic'),
        e
    ))(Dl || {});
    function Ol({ value: t, questType: n, className: s }) {
        return t
            ? e.jsx('div', {
                  className: j(La.iconImage, La.iconImage__regular, n === Dl.PREMIUM && La.iconImage__gold, s),
                  style: { backgroundImage: `url(${t})` },
              })
            : null;
    }
    const Bl = (e) =>
            f.createElement(
                'svg',
                { width: 13, height: 7, viewBox: '0 0 13 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
                f.createElement('path', { d: 'M9 7L13 3.49026L9 0V2.98374L0 3V4H9V7Z', fill: '#454443' }),
            ),
        $l = h.resolve('strings');
    function Fl(t) {
        return 'none' === t.type
            ? e.jsx('div', { className: j(La.separator, La.separator__none, t.className) })
            : 'union' === t.type
              ? e.jsx('div', { className: j(La.separator, La.separator__union, t.className) })
              : 'or' === t.type
                ? e.jsxs('div', {
                      className: j(La.separator, La.separator__or, t.className),
                      children: [
                          e.jsx(Bl, { width: 16, height: 16, className: La.invertedArrow }),
                          $l.readOrEmpty('battle_results.conditions.type.or'),
                          e.jsx(Bl, { width: 16, height: 16, className: La.arrow }),
                      ],
                  })
                : e.jsx('div', {
                      className: j(La.separator, La.separator__and, t.className),
                      children: $l.readOrEmpty('battle_results.conditions.type.and'),
                  });
    }
    function Ll(t) {
        if (!t.children) return null;
        const n = s.Children.toArray(t.children);
        return e.jsx(e.Fragment, {
            children: pe(
                n,
                (e) => null != e,
                (n, r) => e.jsxs(s.Fragment, { children: [r > 0 && e.jsx(Fl, { ...t }), n] }, r),
            ),
        });
    }
    const Ul = { 1: 5, 2: 5, 3: 3 };
    function ql(e) {
        return 'item' === e.type ? 1 : e.groups.reduce((e, t) => e + ql(t), 0);
    }
    function zl(e) {
        var t;
        if ('item' === e.type) return null == (t = e.condition) ? void 0 : t.icon;
        for (const n of e.groups) {
            const e = zl(n);
            if (e) return e;
        }
    }
    function Vl(t) {
        const n = t.value;
        return 'item' === n.type
            ? e.jsx(
                  za.Condition,
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
            : e.jsx(Ll, {
                  type: n.separate,
                  children: pe(
                      n.groups,
                      (e) => 'items' === e.type || e.index < 5,
                      (s, r) =>
                          e.jsx(
                              Vl,
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
    const Gl = 'R.images.gui.maps.icons.post_battle.general_quest',
        Ql = { default: { path: `${Gl}_32` }, medium: { path: Gl } },
        Hl = s.memo(function (t) {
            const n = Ls(),
                r = Ls(),
                { animation: o, immediateAnimation: i } = Fa(),
                { icon: l, questsAmount: u } = s.useMemo(() => {
                    const e = ql(t.value);
                    return { icon: e > 1 ? (t.generalIcon ?? Ql) : (zl(t.value) ?? Ql), questsAmount: e };
                }, [t.generalIcon, t.value]),
                c = a.useAdaptive(l.default, l),
                d = Ul[u] ?? 0,
                p = u > 3 ? 'groups__manyQuests' : 3 === u ? 'groups__threeQuests' : 'groups__twoQuests';
            return e.jsxs('div', {
                className: j(La.groups, u > 4 && La.groups__overflow, u > 1 && La[p]),
                children: [
                    e.jsx('div', {
                        className: La.iconContainer,
                        children: t.completed
                            ? e.jsx(Ml, {
                                  animationRef: n,
                                  className: La.completedMark,
                                  classNames: { icon: La.completedMarkIcon },
                                  springProps: { immediate: i, delay: 170 },
                              })
                            : e.jsx(Ol, { value: c.path, questType: t.questType }),
                    }),
                    e.jsx('div', {
                        className: La.questsWithRewards,
                        children: e.jsxs(Ll, {
                            type: t.separate ?? 'none',
                            children: [
                                e.jsx('div', {
                                    className: La.questsContainer,
                                    children: e.jsx(Vl, {
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
                                            e.jsx('div', { className: La.gap }),
                                            e.jsx('div', {
                                                className: La.rewardsContainer,
                                                children: e.jsx(Tl, {
                                                    completed: t.completed,
                                                    rewardsGlowRef: r,
                                                    immediateAnimation: i,
                                                    bonuses: t.bonuses,
                                                    maxRewardsCount: d,
                                                    rewardsTooltipResId: t.rewardsTooltipResId,
                                                    questId: t.questId,
                                                    className: La.rewards,
                                                    rewardItemClassName: La.reward,
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
    function Wl({ completed: t, progress: n, animation: r, immediateAnimation: o, target: i, ...a }) {
        const l = _r(),
            u = s.useMemo(() => ({ completed: t, animation: r, immediateAnimation: o }), [t, r, o]);
        return e.jsx($a.Provider, {
            value: u,
            children: e.jsx(Ii, {
                ...a,
                onMouseEnter: (e) => {
                    var t;
                    (null == (t = a.onMouseEnter) || t.call(a, e),
                        !0 !== a.disabled &&
                            l.play('mouse-enter', { target: i || 'mission-progress:mission-card', original: e }));
                },
                progressionCountProps: n,
                className: j(La.base, t && La.base__completed, a.className),
                classNames: { content: La.cardContent, ...a.classNames },
            }),
        });
    }
    ((Wl.Content = za), (Wl.Groups = Hl), (Wl.Separators = Ll));
    const Xl = h.resolve('strings'),
        Yl = i.observer(function ({ target: t, animation: n, immediateAnimation: s }) {
            const r = go(),
                o = _r();
            return e.jsx('div', {
                children: de(r.model.quests(), (i) => {
                    const a = !1 === i.navigationEnabled;
                    return e.jsx(
                        Wl,
                        {
                            disabled: a,
                            target: t,
                            title: i.title,
                            completed: i.completed,
                            onButtonAction: () => {
                                a || r.controls.navigate(i.id, i.type);
                            },
                            onClick: (e) => {
                                a ||
                                    (o.play('click', { original: e, target: 'common-quests:mission-card' }),
                                    r.controls.navigate(i.id, i.type));
                            },
                            progress: i.progress,
                            animation: n,
                            immediateAnimation: s,
                            actionTooltipParams: { body: Xl.readOrEmpty('battle_results.progression.linkBtn.info') },
                            children: e.jsx(Wl.Groups, {
                                value: i.groups,
                                bonuses: i.bonuses,
                                questId: i.id,
                                completed: i.completed,
                                rewardsTooltipResId: po,
                                guiDisabledDescription: i.guiDisabledDescription,
                            }),
                        },
                        i.id,
                    );
                }),
            });
        });
    function Zl(e) {
        for (let t = 0; t < document.styleSheets.length; t++) {
            const n = document.styleSheets.item(t);
            if (n.ownerNode === e) return n;
        }
    }
    function Kl(e) {
        for (let t = 0; t < e.cssRules.length; t++) e.deleteRule(t);
    }
    function Jl(e) {
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
        const o = new ie();
        return (
            n
                ? o.add(
                      ae(t, 'load', () => {
                          s.resolve(t);
                      }),
                  )
                : le(e)
                      .then((e) => e.text())
                      .then((e) => {
                          const n = Zl(t);
                          if (!n) throw new Error(`Can't find sheets for ${t}`);
                          (Kl(n),
                              (function (e, t) {
                                  const n = (function (e) {
                                      const t = [];
                                      let n = 0,
                                          s = 0,
                                          r = !1,
                                          o = !1;
                                      for (let i = 0; i < e.length; i++) {
                                          const a = e[i],
                                              l = e[i + 1];
                                          if (o || '/' !== a || '*' !== l) {
                                              if (r && '*' === a && '/' === l) ((r = !1), i++, (n = i + 1));
                                              else if (
                                                  !r &&
                                                  (o || '@' !== a || ((o = !0), (s = 0)),
                                                  '{' === a && s++,
                                                  '}' === a && s--,
                                                  '}' === a && 0 === s)
                                              ) {
                                                  if (o) (t.push(e.substring(n, i + 1)), (o = !1));
                                                  else {
                                                      let s = n;
                                                      for (; '\n' === e[s] || ' ' === e[s]; ) s++;
                                                      t.push(e.substring(s, i + 1));
                                                  }
                                                  n = i + 1;
                                              }
                                          } else ((r = !0), i++);
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
                    ae(t, 'error', (t) => {
                        (console.error(t), s.reject(`Load css failure ${e}`));
                    }),
                )
                .add(() => {
                    !(function (e, t) {
                        const n = Zl(t);
                        if (!n) return console.error(`Can't find sheets for ${t.id} (${e}). Clean rules skipped.`);
                        Kl(n);
                    })(e, t);
                }),
            { promise: s, link: t, cleanup: o.dispose }
        );
    }
    function eu(t) {
        return e.jsx(e.Fragment, { children: t.children });
    }
    const tu = { rootId: h.resolve('aliases').read((e) => e.battle_results.progression.CommonQuests('resId')) },
        nu = new (class {
            constructor() {
                p(this, 'items', []);
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
            .addWithProps(ho, { options: tu })
            .addWithProps(
                function (t) {
                    return e.jsx(eu, {
                        children: e.jsx(gr, {
                            overrides: t.soundsOverrides,
                            severity: t.soundSeverity,
                            silent: t.soundsOff,
                            children: t.children,
                        }),
                    });
                },
                {
                    soundsOverrides:
                        ((su = {
                            showCheckMark: { 'mission-progress:checkmark': 'umg_hub_quest_complete' },
                            numbersShown: {
                                'mission-progress:received-value': 'gui_pbs_missions_progress_stats',
                                'mission-progress:progress-stats': 'gui_pbs_missions_progress_stats',
                            },
                        }),
                        Object.entries(su).reduce(
                            (e, [t, n]) => (
                                (e[t] = (e) => {
                                    var s;
                                    e && e.target in n ? z.sound(n[e.target]) : null == (s = mr[t]) || s.call(mr, e);
                                }),
                                e
                            ),
                            {},
                        )),
                },
            );
    var su, ru;
    function ou({ animation: t, immediateAnimation: n }) {
        return nu.render(e.jsx(Yl, { target: 'mission-progress:common-quests', animation: t, immediateAnimation: n }));
    }
    exports.plugin =
        ((ru = async ({ url: t }) => {
            const n = new ie();
            return {
                async init() {
                    var s,
                        r,
                        o,
                        i,
                        a,
                        l = [];
                    try {
                        const u = Jl(
                            `${(function (e, t = '/') {
                                let n = -1;
                                for (let s = 0; s < e.length; s++) {
                                    const r = e[s];
                                    if ((r === t && (n = s), '.' === r)) return e.slice(0, n);
                                }
                                return e;
                            })(t)}/common_quests.css`,
                        );
                        (n.add(u.cleanup), await u.promise.catch(console.error));
                        const p = ee(tu, { name: 'CommonQuestsProgressModelProvider' }),
                            m =
                                ((s = l),
                                (a = p.dispose),
                                null != (r = { [Symbol.dispose]: a })
                                    ? ('object' != typeof r && 'function' != typeof r && d('Object expected'),
                                      o && (i = r[c('asyncDispose')]),
                                      void 0 === i && (i = r[c('dispose')]),
                                      'function' != typeof i && d('Object not disposable'),
                                      s.push([o, i, r]))
                                    : o && s.push([o]),
                                (function (e, t) {
                                    if (Array.isArray(e)) return e.some(t);
                                    for (let n = 0; n < e.length; n++) if (t(ce(e, n), n, e)) return !0;
                                    return !1;
                                })(p.readByPath('commonQuests'), (e) => e.status === Re.Done));
                        return {
                            animated: !0,
                            component: ou,
                            notifications: m
                                ? [
                                      {
                                          id: xe(),
                                          item: e.jsx(vi, {
                                              path: 'battle_results.missionsProgress.notificationsTabs.common',
                                          }),
                                      },
                                  ]
                                : void 0,
                            categoryOrder: 850,
                            completed: m,
                        };
                    } catch (m) {
                        var u = m,
                            p = !0;
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
                                            var i = s[1] && s[1].call(s[2]);
                                            if (s[0]) return Promise.resolve(i).then(o, (e) => (r(e), o()));
                                        } catch (a) {
                                            r(a);
                                        }
                                    if (n) throw t;
                                };
                            o();
                        })(l, u, p);
                    }
                },
                async destroy() {
                    n.dispose();
                },
            };
        }),
        async (e) => ({ ...(await ru(e)), id: e.id }));
});

export default exports;
