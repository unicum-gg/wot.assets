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
        Y = (e, t) => {
            const n = 'GFViewEventProxy';
            if (void 0 !== t) {
                const { args: s, ...r } = t;
                return void 0 !== s
                    ? viewEnv.handleViewEvent({ __Type: n, type: e, ...r, arguments: W(s) })
                    : viewEnv.handleViewEvent({ __Type: n, type: e, ...r });
            }
            return viewEnv.handleViewEvent({ __Type: n, type: e });
        },
        X = new Map(),
        Z = {
            tooltip: {
                open(e, t, n = 0, s) {
                    (Y(Q, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: s }),
                        X.set(`${e}-${t}`, { targetID: e, contentID: t }));
                },
                hide(e, t, n = 0) {
                    (Y(Q, { contentID: t, decoratorID: n, targetID: e, on: !1 }), X.delete(`${e}-${t}`));
                },
                hideAll() {
                    const e = Array.from(X.values());
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
    class Re {
        constructor() {
            p(this, 'index', 0);
        }
        next() {
            return this.index++;
        }
    }
    function Ee({ model: e, indexer: t, resolveIcon: n, commonIcon: s, guiDisabled: r }) {
        if ('items' in e)
            return {
                type: 'items',
                separate:
                    ((o = e.conditionType),
                    'or' === o || 'and' === o ? o : (console.warn(`Unexpected conditionType: ${o}`), 'none')),
                groups: de(e.items, (e) => Ee({ model: e, indexer: t, resolveIcon: n, commonIcon: s, guiDisabled: r })),
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
    var Ce,
        Pe,
        Se,
        ke,
        Te = ((e) => ((e.Done = 'done'), (e.Locked = 'notAvailable'), (e.Active = ''), e))(Te || {});
    function Ne(e) {
        return {
            lang: (null == e ? void 0 : e.lang) ?? (null == Ce ? void 0 : Ce.lang),
            message: null == e ? void 0 : e.message,
            abortEarly: (null == e ? void 0 : e.abortEarly) ?? (null == Ce ? void 0 : Ce.abortEarly),
            abortPipeEarly: (null == e ? void 0 : e.abortPipeEarly) ?? (null == Ce ? void 0 : Ce.abortPipeEarly),
        };
    }
    function Ie(e) {
        return null == Pe ? void 0 : Pe.get(e);
    }
    function Ae(e) {
        return null == Se ? void 0 : Se.get(e);
    }
    function je(e, t) {
        var n;
        return null == (n = null == ke ? void 0 : ke.get(e)) ? void 0 : n.get(t);
    }
    function Me(e) {
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
    function De(e, t, n, s, r) {
        const o = r && 'input' in r ? r.input : n.value,
            i = (null == r ? void 0 : r.expected) ?? e.expects ?? null,
            a = (null == r ? void 0 : r.received) ?? Me(o),
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
                je(e.reference, l.lang) ??
                (u ? Ae(l.lang) : null) ??
                s.message ??
                Ie(l.lang);
        (void 0 !== c && (l.message = 'function' == typeof c ? c(l) : c),
            u && (n.typed = !1),
            n.issues ? n.issues.push(l) : (n.issues = [l]));
    }
    function Oe(e) {
        return { version: 1, vendor: 'valibot', validate: (t) => e['~run']({ value: t }, Ne()) };
    }
    function Be(e, t) {
        const n = [...new Set(e)];
        return n.length > 1 ? `(${n.join(` ${t} `)})` : (n[0] ?? 'never');
    }
    var $e = class extends Error {
        constructor(e) {
            (super(e[0].message), (this.name = 'ValiError'), (this.issues = e));
        }
    };
    function Fe(e, t, n) {
        return 'function' == typeof e.fallback ? e.fallback(t, n) : e.fallback;
    }
    function Le(e, t, n) {
        return 'function' == typeof e.default ? e.default(t, n) : e.default;
    }
    function Ue(e, t) {
        return {
            kind: 'schema',
            type: 'array',
            reference: Ue,
            expects: 'Array',
            async: !1,
            item: e,
            message: t,
            get '~standard'() {
                return Oe(this);
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
                } else De(this, 'type', e, t);
                return e;
            },
        };
    }
    function qe(e) {
        return {
            kind: 'schema',
            type: 'boolean',
            reference: qe,
            expects: 'boolean',
            async: !1,
            message: e,
            get '~standard'() {
                return Oe(this);
            },
            '~run'(e, t) {
                return ('boolean' == typeof e.value ? (e.typed = !0) : De(this, 'type', e, t), e);
            },
        };
    }
    function ze(e, t) {
        const n = [];
        for (const s in e) ('' + +s === s && 'string' == typeof e[s] && Object.is(e[e[s]], +s)) || n.push(e[s]);
        return {
            kind: 'schema',
            type: 'enum',
            reference: ze,
            expects: Be(n.map(Me), '|'),
            async: !1,
            enum: e,
            options: n,
            message: t,
            get '~standard'() {
                return Oe(this);
            },
            '~run'(e, t) {
                return (this.options.includes(e.value) ? (e.typed = !0) : De(this, 'type', e, t), e);
            },
        };
    }
    function Ve(e) {
        return {
            kind: 'schema',
            type: 'lazy',
            reference: Ve,
            expects: 'unknown',
            async: !1,
            getter: e,
            get '~standard'() {
                return Oe(this);
            },
            '~run'(e, t) {
                return this.getter(e.value)['~run'](e, t);
            },
        };
    }
    function Ge(e) {
        return {
            kind: 'schema',
            type: 'number',
            reference: Ge,
            expects: 'number',
            async: !1,
            message: e,
            get '~standard'() {
                return Oe(this);
            },
            '~run'(e, t) {
                return ('number' != typeof e.value || isNaN(e.value) ? De(this, 'type', e, t) : (e.typed = !0), e);
            },
        };
    }
    function Qe(e, t) {
        return {
            kind: 'schema',
            type: 'object',
            reference: Qe,
            expects: 'Object',
            async: !1,
            entries: e,
            message: t,
            get '~standard'() {
                return Oe(this);
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
                            const i = r in s ? s[r] : Le(o),
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
                        } else if (void 0 !== o.fallback) e.value[r] = Fe(o);
                        else if (
                            'exact_optional' !== o.type &&
                            'optional' !== o.type &&
                            'nullish' !== o.type &&
                            (De(this, 'key', e, t, {
                                input: void 0,
                                expected: `"${r}"`,
                                path: [{ type: 'object', origin: 'key', input: s, key: r, value: s[r] }],
                            }),
                            t.abortEarly)
                        )
                            break;
                    }
                } else De(this, 'type', e, t);
                return e;
            },
        };
    }
    function He(e, t) {
        return {
            kind: 'schema',
            type: 'optional',
            reference: He,
            expects: `(${e.expects} | undefined)`,
            async: !1,
            wrapped: e,
            default: t,
            get '~standard'() {
                return Oe(this);
            },
            '~run'(e, t) {
                return void 0 === e.value && (void 0 !== this.default && (e.value = Le(this, e, t)), void 0 === e.value)
                    ? ((e.typed = !0), e)
                    : this.wrapped['~run'](e, t);
            },
        };
    }
    function We(e) {
        return {
            kind: 'schema',
            type: 'string',
            reference: We,
            expects: 'string',
            async: !1,
            message: e,
            get '~standard'() {
                return Oe(this);
            },
            '~run'(e, t) {
                return ('string' == typeof e.value ? (e.typed = !0) : De(this, 'type', e, t), e);
            },
        };
    }
    function Ye(e) {
        let t;
        if (e) for (const n of e) t ? t.push(...n.issues) : (t = n.issues);
        return t;
    }
    function Xe(e, t) {
        return {
            kind: 'schema',
            type: 'union',
            reference: Xe,
            expects: Be(
                e.map((e) => e.expects),
                '|',
            ),
            async: !1,
            options: e,
            message: t,
            get '~standard'() {
                return Oe(this);
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
                    (De(this, 'type', e, t, { issues: Ye(s) }), (e.typed = !0));
                } else {
                    if (1 === (null == r ? void 0 : r.length)) return r[0];
                    De(this, 'type', e, t, { issues: Ye(r) });
                }
                return e;
            },
        };
    }
    const Ze = Qe({
            index: Ge(),
            name: We(),
            value: We(),
            isCompensation: qe(),
            tooltipId: We(),
            tooltipContentId: We(),
            label: We(),
            probability: Ge(),
            item: He(We()),
            icon: He(We()),
            iconBig: He(We()),
            iconSmall: He(We()),
        }),
        Ke = Qe({ conditionType: We() }),
        Je = Qe({
            ...Ke.entries,
            titleData: We(),
            descrData: We(),
            iconKey: We(),
            current: Ge(),
            total: Ge(),
            earned: Ge(),
            progressType: We(),
            sortKey: We(),
        }),
        et = Qe({ ...Ke.entries, items: Ue(Xe([Je, Ve(() => et)])) }),
        tt = Qe({
            ...Qe({
                id: We(),
                groupId: We(),
                type: Ge(),
                title: We(),
                description: We(),
                decoration: Ge(),
                status: ze(Te),
            }).entries,
            bonuses: Ue(Ze),
            preBattleCondition: et,
            bonusCondition: et,
            postBattleCondition: et,
        });
    var nt = ((e) => (
        (e.EASY = 'easy'),
        (e.MEDIUM = 'medium'),
        (e.HARD = 'hard'),
        (e.BONUS = 'bonus'),
        (e.PREMIUM = 'premium'),
        (e.EPIC = 'epic'),
        e
    ))(nt || {});
    const st = (e) => {
            const t = s.useRef();
            return (
                s.useEffect(() => {
                    t.current = e;
                }, [e]),
                t.current
            );
        },
        rt = [];
    function ot(e) {
        const t = s.useRef(e);
        return (
            s.useLayoutEffect(() => {
                t.current = e;
            }),
            s.useCallback((...e) => (0, t.current)(...e), rt)
        );
    }
    function it(e) {
        s.useEffect(() => e, []);
    }
    s.createContext(void 0);
    var at = Rt(),
        lt = (e) => bt(e, at),
        ut = Rt();
    lt.write = (e) => bt(e, ut);
    var ct = Rt();
    lt.onStart = (e) => bt(e, ct);
    var dt = Rt();
    lt.onFrame = (e) => bt(e, dt);
    var pt = Rt();
    lt.onFinish = (e) => bt(e, pt);
    var mt = [];
    lt.setTimeout = (e, t) => {
        const n = lt.now() + t,
            s = () => {
                const e = mt.findIndex((e) => e.cancel == s);
                (~e && mt.splice(e, 1), (_t -= ~e ? 1 : 0));
            },
            r = { time: n, handler: e, cancel: s };
        return (mt.splice(ft(n), 0, r), (_t += 1), yt(), r);
    };
    var ft = (e) => ~(~mt.findIndex((t) => t.time > e) || ~mt.length);
    ((lt.cancel = (e) => {
        (ct.delete(e), dt.delete(e), pt.delete(e), at.delete(e), ut.delete(e));
    }),
        (lt.sync = (e) => {
            ((vt = !0), lt.batchedUpdates(e), (vt = !1));
        }),
        (lt.throttle = (e) => {
            let t;
            function n() {
                try {
                    e(...t);
                } finally {
                    t = null;
                }
            }
            function s(...e) {
                ((t = e), lt.onStart(n));
            }
            return (
                (s.handler = e),
                (s.cancel = () => {
                    (ct.delete(n), (t = null));
                }),
                s
            );
        }));
    var ht = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
    ((lt.use = (e) => (ht = e)),
        (lt.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
        (lt.batchedUpdates = (e) => e()),
        (lt.catch = console.error),
        (lt.frameLoop = 'always'),
        (lt.advance = () => {
            'demand' !== lt.frameLoop
                ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
                : xt();
        }));
    var gt = -1,
        _t = 0,
        vt = !1;
    function bt(e, t) {
        vt ? (t.delete(e), e(0)) : (t.add(e), yt());
    }
    function yt() {
        gt < 0 && ((gt = 0), 'demand' !== lt.frameLoop && ht(wt));
    }
    function wt() {
        ~gt && (ht(wt), lt.batchedUpdates(xt));
    }
    function xt() {
        const e = gt;
        gt = lt.now();
        const t = ft(gt);
        (t && (Et(mt.splice(0, t), (e) => e.handler()), (_t -= t)),
            _t
                ? (ct.flush(), at.flush(e ? Math.min(64, gt - e) : 16.667), dt.flush(), ut.flush(), pt.flush())
                : (gt = -1));
    }
    function Rt() {
        let e = new Set(),
            t = e;
        return {
            add(n) {
                ((_t += t != e || e.has(n) ? 0 : 1), e.add(n));
            },
            delete: (n) => ((_t -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
            flush(n) {
                t.size && ((e = new Set()), (_t -= t.size), Et(t, (t) => t(n) && e.add(t)), (_t += e.size), (t = e));
            },
        };
    }
    function Et(e, t) {
        e.forEach((e) => {
            try {
                t(e);
            } catch (n) {
                lt.catch(n);
            }
        });
    }
    var Ct = Object.defineProperty,
        Pt = {};
    function St() {}
    ((e, t) => {
        for (var n in t) Ct(e, n, { get: t[n], enumerable: !0 });
    })(Pt, {
        assign: () => Ut,
        colors: () => $t,
        createStringInterpolator: () => Mt,
        skipAnimation: () => Ft,
        to: () => Dt,
        willAdvance: () => Lt,
    });
    var kt = {
        arr: Array.isArray,
        obj: (e) => !!e && 'Object' === e.constructor.name,
        fun: (e) => 'function' == typeof e,
        str: (e) => 'string' == typeof e,
        num: (e) => 'number' == typeof e,
        und: (e) => void 0 === e,
    };
    function Tt(e, t) {
        if (kt.arr(e)) {
            if (!kt.arr(t) || e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
        }
        return e === t;
    }
    var Nt = (e, t) => e.forEach(t);
    function It(e, t, n) {
        if (kt.arr(e)) for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s);
    }
    var At = (e) => (kt.und(e) ? [] : kt.arr(e) ? e : [e]);
    function jt(e, t) {
        if (e.size) {
            const n = Array.from(e);
            (e.clear(), Nt(n, t));
        }
    }
    var Mt,
        Dt,
        Ot = (e, ...t) => jt(e, (e) => e(...t)),
        Bt = () =>
            'undefined' == typeof window ||
            !window.navigator ||
            /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        $t = null,
        Ft = !1,
        Lt = St,
        Ut = (e) => {
            (e.to && (Dt = e.to),
                e.now && (lt.now = e.now),
                void 0 !== e.colors && ($t = e.colors),
                null != e.skipAnimation && (Ft = e.skipAnimation),
                e.createStringInterpolator && (Mt = e.createStringInterpolator),
                e.requestAnimationFrame && lt.use(e.requestAnimationFrame),
                e.batchedUpdates && (lt.batchedUpdates = e.batchedUpdates),
                e.willAdvance && (Lt = e.willAdvance),
                e.frameLoop && (lt.frameLoop = e.frameLoop));
        },
        qt = new Set(),
        zt = [],
        Vt = [],
        Gt = 0,
        Qt = {
            get idle() {
                return !qt.size && !zt.length;
            },
            start(e) {
                Gt > e.priority ? (qt.add(e), lt.onStart(Ht)) : (Wt(e), lt(Xt));
            },
            advance: Xt,
            sort(e) {
                if (Gt) lt.onFrame(() => Qt.sort(e));
                else {
                    const t = zt.indexOf(e);
                    ~t && (zt.splice(t, 1), Yt(e));
                }
            },
            clear() {
                ((zt = []), qt.clear());
            },
        };
    function Ht() {
        (qt.forEach(Wt), qt.clear(), lt(Xt));
    }
    function Wt(e) {
        zt.includes(e) || Yt(e);
    }
    function Yt(e) {
        zt.splice(
            (function (e, t) {
                const n = e.findIndex(t);
                return n < 0 ? e.length : n;
            })(zt, (t) => t.priority > e.priority),
            0,
            e,
        );
    }
    function Xt(e) {
        const t = Vt;
        for (let n = 0; n < zt.length; n++) {
            const s = zt[n];
            ((Gt = s.priority), s.idle || (Lt(s), s.advance(e), s.idle || t.push(s)));
        }
        return ((Gt = 0), ((Vt = zt).length = 0), (zt = t).length > 0);
    }
    var Zt = '[-+]?\\d*\\.?\\d+',
        Kt = Zt + '%';
    function Jt(...e) {
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var en = new RegExp('rgb' + Jt(Zt, Zt, Zt)),
        tn = new RegExp('rgba' + Jt(Zt, Zt, Zt, Zt)),
        nn = new RegExp('hsl' + Jt(Zt, Kt, Kt)),
        sn = new RegExp('hsla' + Jt(Zt, Kt, Kt, Zt)),
        rn = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        on = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        an = /^#([0-9a-fA-F]{6})$/,
        ln = /^#([0-9a-fA-F]{8})$/;
    function un(e, t, n) {
        return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        );
    }
    function cn(e, t, n) {
        const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
            r = 2 * n - s,
            o = un(r, s, e + 1 / 3),
            i = un(r, s, e),
            a = un(r, s, e - 1 / 3);
        return (Math.round(255 * o) << 24) | (Math.round(255 * i) << 16) | (Math.round(255 * a) << 8);
    }
    function dn(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function pn(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function mn(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function fn(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
    }
    function hn(e) {
        let t = (function (e) {
            let t;
            return 'number' == typeof e
                ? e >>> 0 === e && e >= 0 && e <= 4294967295
                    ? e
                    : null
                : (t = an.exec(e))
                  ? parseInt(t[1] + 'ff', 16) >>> 0
                  : $t && void 0 !== $t[e]
                    ? $t[e]
                    : (t = en.exec(e))
                      ? ((dn(t[1]) << 24) | (dn(t[2]) << 16) | (dn(t[3]) << 8) | 255) >>> 0
                      : (t = tn.exec(e))
                        ? ((dn(t[1]) << 24) | (dn(t[2]) << 16) | (dn(t[3]) << 8) | mn(t[4])) >>> 0
                        : (t = rn.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                          : (t = ln.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = on.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = nn.exec(e))
                                ? (255 | cn(pn(t[1]), fn(t[2]), fn(t[3]))) >>> 0
                                : (t = sn.exec(e))
                                  ? (cn(pn(t[1]), fn(t[2]), fn(t[3])) | mn(t[4])) >>> 0
                                  : null;
        })(e);
        if (null === t) return e;
        t = t || 0;
        return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
    }
    var gn = (e, t, n) => {
        if (kt.fun(e)) return e;
        if (kt.arr(e)) return gn({ range: e, output: t, extrapolate: n });
        if (kt.str(e.output[0])) return Mt(e);
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
    var _n = { linear: (e) => e, easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2) },
        vn = Symbol.for('FluidValue.get'),
        bn = Symbol.for('FluidValue.observers'),
        yn = (e) => Boolean(e && e[vn]),
        wn = (e) => (e && e[vn] ? e[vn]() : e),
        xn = (e) => e[bn] || null;
    function Rn(e, t) {
        const n = e[bn];
        n &&
            n.forEach((e) => {
                !(function (e, t) {
                    e.eventObserved ? e.eventObserved(t) : e(t);
                })(e, t);
            });
    }
    var En = class {
            constructor(e) {
                if (!e && !(e = this.get)) throw Error('Unknown getter');
                Cn(this, e);
            }
        },
        Cn = (e, t) => Tn(e, vn, t);
    function Pn(e, t) {
        if (e[vn]) {
            let n = e[bn];
            (n || Tn(e, bn, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
        }
        return t;
    }
    function Sn(e, t) {
        const n = e[bn];
        if (n && n.has(t)) {
            const s = n.size - 1;
            (s ? n.delete(t) : (e[bn] = null), e.observerRemoved && e.observerRemoved(s, t));
        }
    }
    var kn,
        Tn = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
        Nn = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        In = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        An = new RegExp(`(${Nn.source})(%|[a-z]+)`, 'i'),
        jn = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Mn = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Dn = (e) => {
            const [t, n] = On(e);
            if (!t || Bt()) return e;
            const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
            if (s) return s.trim();
            if (n && n.startsWith('--')) {
                const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
                return t || e;
            }
            return n && Mn.test(n) ? Dn(n) : n || e;
        },
        On = (e) => {
            const t = Mn.exec(e);
            if (!t) return [,];
            const [, n, s] = t;
            return [n, s];
        },
        Bn = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
        $n = (e) => {
            kn || (kn = $t ? new RegExp(`(${Object.keys($t).join('|')})(?!\\w)`, 'g') : /^\b$/);
            const t = e.output.map((e) => wn(e).replace(Mn, Dn).replace(In, hn).replace(kn, hn)),
                n = t.map((e) => e.match(Nn).map(Number)),
                s = n[0].map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                ),
                r = s.map((t) => gn({ ...e, output: t }));
            return (e) => {
                var n;
                const s = !An.test(t[0]) && (null == (n = t.find((e) => An.test(e))) ? void 0 : n.replace(Nn, ''));
                let o = 0;
                return t[0].replace(Nn, () => `${r[o++](e)}${s || ''}`).replace(jn, Bn);
            };
        },
        Fn = 'react-spring: ',
        Ln = (e) => {
            const t = e;
            let n = !1;
            if ('function' != typeof t) throw new TypeError(`${Fn}once requires a function parameter`);
            return (...e) => {
                n || (t(...e), (n = !0));
            };
        },
        Un = Ln(console.warn);
    var qn = Ln(console.warn);
    function zn(e) {
        return kt.str(e) && ('#' == e[0] || /\d/.test(e) || (!Bt() && Mn.test(e)) || e in ($t || {}));
    }
    var Vn = Bt() ? s.useEffect : s.useLayoutEffect,
        Gn = () => {
            const e = s.useRef(!1);
            return (
                Vn(
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
    function Qn() {
        const e = s.useState()[1],
            t = Gn();
        return () => {
            t.current && e(Math.random());
        };
    }
    var Hn = (e) => s.useEffect(e, Wn),
        Wn = [];
    function Yn(e) {
        const t = s.useRef();
        return (
            s.useEffect(() => {
                t.current = e;
            }),
            t.current
        );
    }
    var Xn = Symbol.for('Animated:node'),
        Zn = (e) => e && e[Xn],
        Kn = (e, t) => {
            return (
                (n = e),
                (s = Xn),
                (r = t),
                Object.defineProperty(n, s, { value: r, writable: !0, configurable: !0 })
            );
            var n, s, r;
        },
        Jn = (e) => e && e[Xn] && e[Xn].getPayload(),
        es = class {
            constructor() {
                Kn(this, this);
            }
            getPayload() {
                return this.payload || [];
            }
        },
        ts = class extends es {
            constructor(e) {
                (super(),
                    (this._value = e),
                    (this.done = !0),
                    (this.durationProgress = 0),
                    kt.num(this._value) && (this.lastPosition = this._value));
            }
            static create(e) {
                return new ts(e);
            }
            getPayload() {
                return [this];
            }
            getValue() {
                return this._value;
            }
            setValue(e, t) {
                return (
                    kt.num(e) &&
                        ((this.lastPosition = e),
                        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                    this._value !== e && ((this._value = e), !0)
                );
            }
            reset() {
                const { done: e } = this;
                ((this.done = !1),
                    kt.num(this._value) &&
                        ((this.elapsedTime = 0),
                        (this.durationProgress = 0),
                        (this.lastPosition = this._value),
                        e && (this.lastVelocity = null),
                        (this.v0 = null)));
            }
        },
        ns = class extends ts {
            constructor(e) {
                (super(0), (this._string = null), (this._toString = gn({ output: [e, e] })));
            }
            static create(e) {
                return new ns(e);
            }
            getValue() {
                const e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }
            setValue(e) {
                if (kt.str(e)) {
                    if (e == this._string) return !1;
                    ((this._string = e), (this._value = 1));
                } else {
                    if (!super.setValue(e)) return !1;
                    this._string = null;
                }
                return !0;
            }
            reset(e) {
                (e && (this._toString = gn({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
            }
        },
        ss = { dependencies: null },
        rs = class extends es {
            constructor(e) {
                (super(), (this.source = e), this.setValue(e));
            }
            getValue(e) {
                const t = {};
                return (
                    It(this.source, (n, s) => {
                        var r;
                        (r = n) && r[Xn] === r ? (t[s] = n.getValue(e)) : yn(n) ? (t[s] = wn(n)) : e || (t[s] = n);
                    }),
                    t
                );
            }
            setValue(e) {
                ((this.source = e), (this.payload = this._makePayload(e)));
            }
            reset() {
                this.payload && Nt(this.payload, (e) => e.reset());
            }
            _makePayload(e) {
                if (e) {
                    const t = new Set();
                    return (It(e, this._addToPayload, t), Array.from(t));
                }
            }
            _addToPayload(e) {
                ss.dependencies && yn(e) && ss.dependencies.add(e);
                const t = Jn(e);
                t && Nt(t, (e) => this.add(e));
            }
        },
        os = class extends rs {
            constructor(e) {
                super(e);
            }
            static create(e) {
                return new os(e);
            }
            getValue() {
                return this.source.map((e) => e.getValue());
            }
            setValue(e) {
                const t = this.getPayload();
                return e.length == t.length
                    ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                    : (super.setValue(e.map(is)), !0);
            }
        };
    function is(e) {
        return (zn(e) ? ns : ts).create(e);
    }
    function as(e) {
        const t = Zn(e);
        return t ? t.constructor : kt.arr(e) ? os : zn(e) ? ns : ts;
    }
    var ls = (e, t) => {
            const n = !kt.fun(e) || (e.prototype && e.prototype.isReactComponent);
            return s.forwardRef((r, o) => {
                const i = s.useRef(null),
                    a =
                        n &&
                        s.useCallback(
                            (e) => {
                                i.current = (function (e, t) {
                                    e && (kt.fun(e) ? e(t) : (e.current = t));
                                    return t;
                                })(o, e);
                            },
                            [o],
                        ),
                    [l, u] = (function (e, t) {
                        const n = new Set();
                        ((ss.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                        return ((e = new rs(e)), (ss.dependencies = null), [e, n]);
                    })(r, t),
                    c = Qn(),
                    d = () => {
                        const e = i.current;
                        if (n && !e) return;
                        !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && c();
                    },
                    p = new us(d, u),
                    m = s.useRef();
                (Vn(
                    () => (
                        (m.current = p),
                        Nt(u, (e) => Pn(e, p)),
                        () => {
                            m.current && (Nt(m.current.deps, (e) => Sn(e, m.current)), lt.cancel(m.current.update));
                        }
                    ),
                ),
                    s.useEffect(d, []),
                    Hn(() => () => {
                        const e = m.current;
                        Nt(e.deps, (t) => Sn(t, e));
                    }));
                const h = t.getComponentProps(l.getValue());
                return f.createElement(e, { ...h, ref: a });
            });
        },
        us = class {
            constructor(e, t) {
                ((this.update = e), (this.deps = t));
            }
            eventObserved(e) {
                'change' == e.type && lt.write(this.update);
            }
        };
    var cs = Symbol.for('AnimatedComponent'),
        ds = (e) => (kt.str(e) ? e : e && kt.str(e.displayName) ? e.displayName : (kt.fun(e) && e.name) || null);
    function ps(e, ...t) {
        return kt.fun(e) ? e(...t) : e;
    }
    var ms = (e, t) => !0 === e || !!(t && e && (kt.fun(e) ? e(t) : At(e).includes(t))),
        fs = (e, t) => (kt.obj(e) ? t && e[t] : e),
        hs = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
        gs = (e) => e,
        _s = (e, t = gs) => {
            let n = vs;
            e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
            const s = {};
            for (const r of n) {
                const n = t(e[r], r);
                kt.und(n) || (s[r] = n);
            }
            return s;
        },
        vs = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
        bs = {
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
    function ys(e) {
        const t = (function (e) {
            const t = {};
            let n = 0;
            if (
                (It(e, (e, s) => {
                    bs[s] || ((t[s] = e), n++);
                }),
                n)
            )
                return t;
        })(e);
        if (t) {
            const n = { to: t };
            return (It(e, (e, s) => s in t || (n[s] = e)), n);
        }
        return { ...e };
    }
    function ws(e) {
        return (
            (e = wn(e)),
            kt.arr(e) ? e.map(ws) : zn(e) ? Pt.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
        );
    }
    function xs(e) {
        for (const t in e) return !0;
        return !1;
    }
    function Rs(e) {
        return kt.fun(e) || (kt.arr(e) && kt.obj(e[0]));
    }
    function Es(e, t) {
        var n;
        (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
    }
    function Cs(e, t) {
        var n;
        t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
    }
    var Ps = { tension: 170, friction: 26, mass: 1, damping: 1, easing: _n.linear, clamp: !1 };
    function Ss(e, t) {
        if (kt.und(t.decay)) {
            const n = !kt.und(t.tension) || !kt.und(t.friction);
            ((!n && kt.und(t.frequency) && kt.und(t.damping) && kt.und(t.mass)) ||
                ((e.duration = void 0), (e.decay = void 0)),
                n && (e.frequency = void 0));
        } else e.duration = void 0;
    }
    var ks = [];
    function Ts(e, { key: t, props: n, defaultProps: s, state: r, actions: o }) {
        return new Promise((i, a) => {
            let l,
                u,
                c = ms(n.cancel ?? (null == s ? void 0 : s.cancel), t);
            if (c) m();
            else {
                kt.und(n.pause) || (r.paused = ms(n.pause, t));
                let e = null == s ? void 0 : s.pause;
                (!0 !== e && (e = r.paused || ms(e, t)),
                    (l = ps(n.delay || 0, t)),
                    e ? (r.resumeQueue.add(p), o.pause()) : (o.resume(), p()));
            }
            function d() {
                (r.resumeQueue.add(p), r.timeouts.delete(u), u.cancel(), (l = u.time - lt.now()));
            }
            function p() {
                l > 0 && !Pt.skipAnimation
                    ? ((r.delayed = !0), (u = lt.setTimeout(m, l)), r.pauseQueue.add(d), r.timeouts.add(u))
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
    var Ns = (e, t) =>
            1 == t.length
                ? t[0]
                : t.some((e) => e.cancelled)
                  ? js(e.get())
                  : t.every((e) => e.noop)
                    ? Is(e.get())
                    : As(
                          e.get(),
                          t.every((e) => e.finished),
                      ),
        Is = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        As = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
        js = (e) => ({ value: e, cancelled: !0, finished: !1 });
    function Ms(e, t, n, s) {
        const { callId: r, parentId: o, onRest: i } = t,
            { asyncTo: a, promise: l } = n;
        return o || e !== a || t.reset
            ? (n.promise = (async () => {
                  ((n.asyncId = r), (n.asyncTo = e));
                  const u = _s(t, (e, t) => ('onRest' === t ? void 0 : e));
                  let c, d;
                  const p = new Promise((e, t) => ((c = e), (d = t))),
                      m = (e) => {
                          const t = (r <= (n.cancelId || 0) && js(s)) || (r !== n.asyncId && As(s, !1));
                          if (t) throw ((e.result = t), d(e), e);
                      },
                      f = (e, t) => {
                          const o = new Os(),
                              i = new Bs();
                          return (async () => {
                              if (Pt.skipAnimation) throw (Ds(n), (i.result = As(s, !1)), d(i), i);
                              m(o);
                              const a = kt.obj(e) ? { ...e } : { ...t, to: e };
                              ((a.parentId = r),
                                  It(u, (e, t) => {
                                      kt.und(a[t]) && (a[t] = e);
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
                  if (Pt.skipAnimation) return (Ds(n), As(s, !1));
                  try {
                      let t;
                      ((t = kt.arr(e)
                          ? (async (e) => {
                                for (const t of e) await f(t);
                            })(e)
                          : Promise.resolve(e(f, s.stop.bind(s)))),
                          await Promise.all([t.then(c), p]),
                          (h = As(s.get(), !0, !1)));
                  } catch (g) {
                      if (g instanceof Os) h = g.result;
                      else {
                          if (!(g instanceof Bs)) throw g;
                          h = g.result;
                      }
                  } finally {
                      r == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? a : void 0), (n.promise = o ? l : void 0));
                  }
                  return (
                      kt.fun(i) &&
                          lt.batchedUpdates(() => {
                              i(h, s, s.item);
                          }),
                      h
                  );
              })())
            : l;
    }
    function Ds(e, t) {
        (jt(e.timeouts, (e) => e.cancel()),
            e.pauseQueue.clear(),
            e.resumeQueue.clear(),
            (e.asyncId = e.asyncTo = e.promise = void 0),
            t && (e.cancelId = t));
    }
    var Os = class extends Error {
            constructor() {
                super(
                    'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
                );
            }
        },
        Bs = class extends Error {
            constructor() {
                super('SkipAnimationSignal');
            }
        },
        $s = (e) => e instanceof Ls,
        Fs = 1,
        Ls = class extends En {
            constructor() {
                (super(...arguments), (this.id = Fs++), (this._priority = 0));
            }
            get priority() {
                return this._priority;
            }
            set priority(e) {
                this._priority != e && ((this._priority = e), this._onPriorityChange(e));
            }
            get() {
                const e = Zn(this);
                return e && e.getValue();
            }
            to(...e) {
                return Pt.to(this, e);
            }
            interpolate(...e) {
                return (Un(`${Fn}The "interpolate" function is deprecated in v9 (use "to" instead)`), Pt.to(this, e));
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
                Rn(this, { type: 'change', parent: this, value: e, idle: t });
            }
            _onPriorityChange(e) {
                (this.idle || Qt.sort(this), Rn(this, { type: 'priority', parent: this, priority: e }));
            }
        },
        Us = Symbol.for('SpringPhase'),
        qs = (e) => (1 & e[Us]) > 0,
        zs = (e) => (2 & e[Us]) > 0,
        Vs = (e) => (4 & e[Us]) > 0,
        Gs = (e, t) => (t ? (e[Us] |= 3) : (e[Us] &= -3)),
        Qs = (e, t) => (t ? (e[Us] |= 4) : (e[Us] &= -5)),
        Hs = class extends Ls {
            constructor(e, t) {
                if (
                    (super(),
                    (this.animation = new (class {
                        constructor() {
                            ((this.changed = !1),
                                (this.values = ks),
                                (this.toValues = null),
                                (this.fromValues = ks),
                                (this.config = new (class {
                                    constructor() {
                                        ((this.velocity = 0), Object.assign(this, Ps));
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
                    !kt.und(e) || !kt.und(t))
                ) {
                    const n = kt.obj(e) ? { ...e } : { ...t, from: e };
                    (kt.und(n.default) && (n.default = !0), this.start(n));
                }
            }
            get idle() {
                return !(zs(this) || this._state.asyncTo) || Vs(this);
            }
            get goal() {
                return wn(this.animation.to);
            }
            get velocity() {
                const e = Zn(this);
                return e instanceof ts ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
            }
            get hasAnimated() {
                return qs(this);
            }
            get isAnimating() {
                return zs(this);
            }
            get isPaused() {
                return Vs(this);
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
                    i = Jn(s.to);
                (!i && yn(s.to) && (r = At(wn(s.to))),
                    s.values.forEach((a, l) => {
                        if (a.done) return;
                        const u = a.constructor == ns ? 1 : i ? i[l].lastPosition : r[l];
                        let c = s.immediate,
                            d = u;
                        if (!c) {
                            if (((d = a.lastPosition), o.tension <= 0)) return void (a.done = !0);
                            let t = (a.elapsedTime += e);
                            const n = s.fromValues[l],
                                r = null != a.v0 ? a.v0 : (a.v0 = kt.arr(o.velocity) ? o.velocity[l] : o.velocity);
                            let i;
                            const p = o.precision || (n == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - n)));
                            if (kt.und(o.duration))
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
                                        l = !kt.und(s),
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
                const a = Zn(this),
                    l = a.getValue();
                if (t) {
                    const e = wn(s.to);
                    ((l === e && !n) || o.decay
                        ? n && o.decay && this._onChange(l)
                        : (a.setValue(e), this._onChange(e)),
                        this._stop());
                } else n && this._onChange(l);
            }
            set(e) {
                return (
                    lt.batchedUpdates(() => {
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
                if (zs(this)) {
                    const { to: e, config: t } = this.animation;
                    lt.batchedUpdates(() => {
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
                    kt.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [kt.obj(e) ? e : { ...t, to: e }]),
                    Promise.all(n.map((e) => this._update(e))).then((e) => Ns(this, e))
                );
            }
            stop(e) {
                const { to: t } = this.animation;
                return (
                    this._focus(this.get()),
                    Ds(this._state, e && this._lastCallId),
                    lt.batchedUpdates(() => this._stop(t, e)),
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
                ((n = kt.obj(n) ? n[t] : n),
                    (null == n || Rs(n)) && (n = void 0),
                    (s = kt.obj(s) ? s[t] : s),
                    null == s && (s = void 0));
                const r = { to: n, from: s };
                return (
                    qs(this) ||
                        (e.reverse && ([n, s] = [s, n]),
                        (s = wn(s)),
                        kt.und(s) ? Zn(this) || this._set(n) : this._set(s)),
                    r
                );
            }
            _update({ ...e }, t) {
                const { key: n, defaultProps: s } = this;
                (e.default &&
                    Object.assign(
                        s,
                        _s(e, (e, t) => (/^on/.test(t) ? fs(e, n) : e)),
                    ),
                    er(this, e, 'onProps'),
                    tr(this, 'onProps', e, this));
                const r = this._prepareNode(e);
                if (Object.isFrozen(this))
                    throw Error(
                        'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                    );
                const o = this._state;
                return Ts(++this._lastCallId, {
                    key: n,
                    props: e,
                    defaultProps: s,
                    state: o,
                    actions: {
                        pause: () => {
                            Vs(this) ||
                                (Qs(this, !0),
                                Ot(o.pauseQueue),
                                tr(this, 'onPause', As(this, Ws(this, this.animation.to)), this));
                        },
                        resume: () => {
                            Vs(this) &&
                                (Qs(this, !1),
                                zs(this) && this._resume(),
                                Ot(o.resumeQueue),
                                tr(this, 'onResume', As(this, Ws(this, this.animation.to)), this));
                        },
                        start: this._merge.bind(this, r),
                    },
                }).then((n) => {
                    if (e.loop && n.finished && (!t || !n.noop)) {
                        const t = Ys(e);
                        if (t) return this._update(t, !0);
                    }
                    return n;
                });
            }
            _merge(e, t, n) {
                if (t.cancel) return (this.stop(!0), n(js(this)));
                const s = !kt.und(e.to),
                    r = !kt.und(e.from);
                if (s || r) {
                    if (!(t.callId > this._lastToId)) return n(js(this));
                    this._lastToId = t.callId;
                }
                const { key: o, defaultProps: i, animation: a } = this,
                    { to: l, from: u } = a;
                let { to: c = l, from: d = u } = e;
                (!r || s || (t.default && !kt.und(c)) || (c = d), t.reverse && ([c, d] = [d, c]));
                const p = !Tt(d, u);
                (p && (a.from = d), (d = wn(d)));
                const m = !Tt(c, l);
                m && this._focus(c);
                const f = Rs(t.to),
                    { config: h } = a,
                    { decay: g, velocity: _ } = h;
                ((s || r) && (h.velocity = 0),
                    t.config &&
                        !f &&
                        (function (e, t, n) {
                            (n && (Ss((n = { ...n }), t), (t = { ...n, ...t })), Ss(e, t), Object.assign(e, t));
                            for (const i in Ps) null == e[i] && (e[i] = Ps[i]);
                            let { frequency: s, damping: r } = e;
                            const { mass: o } = e;
                            kt.und(s) ||
                                (s < 0.01 && (s = 0.01),
                                r < 0 && (r = 0),
                                (e.tension = Math.pow((2 * Math.PI) / s, 2) * o),
                                (e.friction = (4 * Math.PI * r * o) / s));
                        })(h, ps(t.config, o), t.config !== i.config ? ps(i.config, o) : void 0));
                let v = Zn(this);
                if (!v || kt.und(c)) return n(As(this, !0));
                const b = kt.und(t.reset) ? r && !t.default : !kt.und(d) && ms(t.reset, o),
                    y = b ? d : this.get(),
                    w = ws(c),
                    x = kt.num(w) || kt.arr(w) || zn(w),
                    R = !f && (!x || ms(i.immediate || t.immediate, o));
                if (m) {
                    const e = as(c);
                    if (e !== v.constructor) {
                        if (!R)
                            throw Error(
                                `Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`,
                            );
                        v = this._set(w);
                    }
                }
                const E = v.constructor;
                let C = yn(c),
                    P = !1;
                if (!C) {
                    const e = b || (!qs(this) && p);
                    ((m || e) && ((P = Tt(ws(y), w)), (C = !P)),
                        ((Tt(a.immediate, R) || R) && Tt(h.decay, g) && Tt(h.velocity, _)) || (C = !0));
                }
                if (
                    (P && zs(this) && (a.changed && !b ? (C = !0) : C || this._stop(l)),
                    !f &&
                        ((C || yn(l)) &&
                            ((a.values = v.getPayload()), (a.toValues = yn(c) ? null : E == ns ? [1] : At(w))),
                        a.immediate != R && ((a.immediate = R), R || b || this._set(l)),
                        C))
                ) {
                    const { onRest: e } = a;
                    Nt(Js, (e) => er(this, t, e));
                    const s = As(this, Ws(this, l));
                    (Ot(this._pendingCalls, s),
                        this._pendingCalls.add(n),
                        a.changed &&
                            lt.batchedUpdates(() => {
                                var t;
                                ((a.changed = !b),
                                    null == e || e(s, this),
                                    b ? ps(i.onRest, s) : null == (t = a.onStart) || t.call(a, s, this));
                            }));
                }
                (b && this._set(y),
                    f
                        ? n(Ms(t.to, t, this._state, this))
                        : C
                          ? this._start()
                          : zs(this) && !m
                            ? this._pendingCalls.add(n)
                            : n(Is(y)));
            }
            _focus(e) {
                const t = this.animation;
                e !== t.to && (xn(this) && this._detach(), (t.to = e), xn(this) && this._attach());
            }
            _attach() {
                let e = 0;
                const { to: t } = this.animation;
                (yn(t) && (Pn(t, this), $s(t) && (e = t.priority + 1)), (this.priority = e));
            }
            _detach() {
                const { to: e } = this.animation;
                yn(e) && Sn(e, this);
            }
            _set(e, t = !0) {
                const n = wn(e);
                if (!kt.und(n)) {
                    const e = Zn(this);
                    if (!e || !Tt(n, e.getValue())) {
                        const s = as(n);
                        (e && e.constructor == s ? e.setValue(n) : Kn(this, s.create(n)),
                            e &&
                                lt.batchedUpdates(() => {
                                    this._onChange(n, t);
                                }));
                    }
                }
                return Zn(this);
            }
            _onStart() {
                const e = this.animation;
                e.changed || ((e.changed = !0), tr(this, 'onStart', As(this, Ws(this, e.to)), this));
            }
            _onChange(e, t) {
                (t || (this._onStart(), ps(this.animation.onChange, e, this)),
                    ps(this.defaultProps.onChange, e, this),
                    super._onChange(e, t));
            }
            _start() {
                const e = this.animation;
                (Zn(this).reset(wn(e.to)),
                    e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                    zs(this) || (Gs(this, !0), Vs(this) || this._resume()));
            }
            _resume() {
                Pt.skipAnimation ? this.finish() : Qt.start(this);
            }
            _stop(e, t) {
                if (zs(this)) {
                    Gs(this, !1);
                    const n = this.animation;
                    (Nt(n.values, (e) => {
                        e.done = !0;
                    }),
                        n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                        Rn(this, { type: 'idle', parent: this }));
                    const s = t ? js(this.get()) : As(this.get(), Ws(this, e ?? n.to));
                    (Ot(this._pendingCalls, s), n.changed && ((n.changed = !1), tr(this, 'onRest', s, this)));
                }
            }
        };
    function Ws(e, t) {
        const n = ws(t);
        return Tt(ws(e.get()), n);
    }
    function Ys(e, t = e.loop, n = e.to) {
        const s = ps(t);
        if (s) {
            const r = !0 !== s && ys(s),
                o = (r || e).reverse,
                i = !r || r.reset;
            return Xs({
                ...e,
                loop: t,
                default: !1,
                pause: void 0,
                to: !o || Rs(n) ? n : void 0,
                from: i ? e.from : void 0,
                reset: i,
                ...r,
            });
        }
    }
    function Xs(e) {
        const { to: t, from: n } = (e = ys(e)),
            s = new Set();
        return (kt.obj(t) && Ks(t, s), kt.obj(n) && Ks(n, s), (e.keys = s.size ? Array.from(s) : null), e);
    }
    function Zs(e) {
        const t = Xs(e);
        return (kt.und(t.default) && (t.default = _s(t)), t);
    }
    function Ks(e, t) {
        It(e, (e, n) => null != e && t.add(n));
    }
    var Js = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
    function er(e, t, n) {
        e.animation[n] = t[n] !== hs(t, n) ? fs(t[n], e.key) : void 0;
    }
    function tr(e, t, ...n) {
        var s, r, o, i;
        (null == (r = (s = e.animation)[t]) || r.call(s, ...n),
            null == (i = (o = e.defaultProps)[t]) || i.call(o, ...n));
    }
    var nr = ['onStart', 'onChange', 'onRest'],
        sr = 1,
        rr = class {
            constructor(e, t) {
                ((this.id = sr++),
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
                    kt.und(n) || this.springs[t].set(n);
                }
            }
            update(e) {
                return (e && this.queue.push(Xs(e)), this);
            }
            start(e) {
                let { queue: t } = this;
                return (
                    e ? (t = At(e).map(Xs)) : (this.queue = []),
                    this._flush ? this._flush(this, t) : (dr(this, t), or(this, t))
                );
            }
            stop(e, t) {
                if ((e !== !!e && (t = e), t)) {
                    const n = this.springs;
                    Nt(At(t), (t) => n[t].stop(!!e));
                } else (Ds(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
                return this;
            }
            pause(e) {
                if (kt.und(e)) this.start({ pause: !0 });
                else {
                    const t = this.springs;
                    Nt(At(e), (e) => t[e].pause());
                }
                return this;
            }
            resume(e) {
                if (kt.und(e)) this.start({ pause: !1 });
                else {
                    const t = this.springs;
                    Nt(At(e), (e) => t[e].resume());
                }
                return this;
            }
            each(e) {
                It(this.springs, e);
            }
            _onFrame() {
                const { onStart: e, onChange: t, onRest: n } = this._events,
                    s = this._active.size > 0,
                    r = this._changed.size > 0;
                ((s && !this._started) || (r && !this._started)) &&
                    ((this._started = !0),
                    jt(e, ([e, t]) => {
                        ((t.value = this.get()), e(t, this, this._item));
                    }));
                const o = !s && this._started,
                    i = r || (o && n.size) ? this.get() : null;
                (r &&
                    t.size &&
                    jt(t, ([e, t]) => {
                        ((t.value = i), e(t, this, this._item));
                    }),
                    o &&
                        ((this._started = !1),
                        jt(n, ([e, t]) => {
                            ((t.value = i), e(t, this, this._item));
                        })));
            }
            eventObserved(e) {
                if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
                else {
                    if ('idle' != e.type) return;
                    this._active.delete(e.parent);
                }
                lt.onFrame(this._onFrame);
            }
        };
    function or(e, t) {
        return Promise.all(t.map((t) => ir(e, t))).then((t) => Ns(e, t));
    }
    async function ir(e, t, n) {
        const { keys: s, to: r, from: o, loop: i, onRest: a, onResolve: l } = t,
            u = kt.obj(t.default) && t.default;
        (i && (t.loop = !1), !1 === r && (t.to = null), !1 === o && (t.from = null));
        const c = kt.arr(r) || kt.fun(r) ? r : void 0;
        c
            ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
            : Nt(nr, (n) => {
                  const s = t[n];
                  if (kt.fun(s)) {
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
            ? ((d.paused = t.pause), Ot(t.pause ? d.pauseQueue : d.resumeQueue))
            : d.paused && (t.pause = !0);
        const p = (s || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
            m = !0 === t.cancel || !0 === hs(t, 'cancel');
        ((c || (m && d.asyncId)) &&
            p.push(
                Ts(++e._lastAsyncId, {
                    props: t,
                    state: d,
                    actions: {
                        pause: St,
                        resume: St,
                        start(t, n) {
                            m ? (Ds(d, e._lastAsyncId), n(js(e))) : ((t.onRest = a), n(Ms(c, t, d, e)));
                        },
                    },
                }),
            ),
            d.paused &&
                (await new Promise((e) => {
                    d.resumeQueue.add(e);
                })));
        const f = Ns(e, await Promise.all(p));
        if (i && f.finished && (!n || !f.noop)) {
            const n = Ys(t, i, r);
            if (n) return (dr(e, [n]), ir(e, n, !0));
        }
        return (l && lt.batchedUpdates(() => l(f, e, e.item)), f);
    }
    function ar(e, t) {
        const n = { ...e.springs };
        return (
            t &&
                Nt(At(t), (e) => {
                    (kt.und(e.keys) && (e = Xs(e)), kt.obj(e.to) || (e = { ...e, to: void 0 }), cr(n, e, (e) => ur(e)));
                }),
            lr(e, n),
            n
        );
    }
    function lr(e, t) {
        It(t, (t, n) => {
            e.springs[n] || ((e.springs[n] = t), Pn(t, e));
        });
    }
    function ur(e, t) {
        const n = new Hs();
        return ((n.key = e), t && Pn(n, t), n);
    }
    function cr(e, t, n) {
        t.keys &&
            Nt(t.keys, (s) => {
                (e[s] || (e[s] = n(s)))._prepareNode(t);
            });
    }
    function dr(e, t) {
        Nt(t, (t) => {
            cr(e.springs, t, (t) => ur(t, e));
        });
    }
    var pr,
        mr,
        fr = ({ children: e, ...t }) => {
            const n = s.useContext(hr),
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
            const { Provider: i } = hr;
            return f.createElement(i, { value: t }, e);
        },
        hr =
            ((pr = fr),
            (mr = {}),
            Object.assign(pr, f.createContext(mr)),
            (pr.Provider._context = pr),
            (pr.Consumer._context = pr),
            pr);
    ((fr.Provider = hr.Provider), (fr.Consumer = hr.Consumer));
    var gr = () => {
        const e = [],
            t = function (t) {
                qn(
                    `${Fn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
                const s = [];
                return (
                    Nt(e, (e, r) => {
                        if (kt.und(t)) s.push(e.start());
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
                return (Nt(e, (e) => e.pause(...arguments)), this);
            }),
            (t.resume = function () {
                return (Nt(e, (e) => e.resume(...arguments)), this);
            }),
            (t.set = function (t) {
                Nt(e, (e, n) => {
                    const s = kt.fun(t) ? t(n, e) : t;
                    s && e.set(s);
                });
            }),
            (t.start = function (t) {
                const n = [];
                return (
                    Nt(e, (e, s) => {
                        if (kt.und(t)) n.push(e.start());
                        else {
                            const r = this._getProps(t, e, s);
                            r && n.push(e.start(r));
                        }
                    }),
                    n
                );
            }),
            (t.stop = function () {
                return (Nt(e, (e) => e.stop(...arguments)), this);
            }),
            (t.update = function (t) {
                return (Nt(e, (e, n) => e.update(this._getProps(t, e, n))), this);
            }));
        const n = function (e, t, n) {
            return kt.fun(e) ? e(n, t) : e;
        };
        return ((t._getProps = n), t);
    };
    function _r(e, t) {
        const n = kt.fun(e),
            [[r], o] = (function (e, t, n) {
                const r = kt.fun(t) && t;
                r && !n && (n = []);
                const o = s.useMemo(() => (r || 3 == arguments.length ? gr() : void 0), []),
                    i = s.useRef(0),
                    a = Qn(),
                    l = s.useMemo(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(e, t) {
                                const n = ar(e, t);
                                return i.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                    ? or(e, t)
                                    : new Promise((s) => {
                                          (lr(e, n),
                                              l.queue.push(() => {
                                                  s(or(e, t));
                                              }),
                                              a());
                                      });
                            },
                        }),
                        [],
                    ),
                    u = s.useRef([...l.ctrls]),
                    c = [],
                    d = Yn(e) || 0;
                function p(e, n) {
                    for (let s = e; s < n; s++) {
                        const e = u.current[s] || (u.current[s] = new rr(null, l.flush)),
                            n = r ? r(s, e) : t[s];
                        n && (c[s] = Zs(n));
                    }
                }
                (s.useMemo(() => {
                    (Nt(u.current.slice(e, d), (e) => {
                        (Es(e, o), e.stop(!0));
                    }),
                        (u.current.length = e),
                        p(d, e));
                }, [e]),
                    s.useMemo(() => {
                        p(0, Math.min(d, e));
                    }, n));
                const m = u.current.map((e, t) => ar(e, c[t])),
                    f = s.useContext(fr),
                    h = Yn(f),
                    g = f !== h && xs(f);
                (Vn(() => {
                    (i.current++, (l.ctrls = u.current));
                    const { queue: e } = l;
                    (e.length && ((l.queue = []), Nt(e, (e) => e())),
                        Nt(u.current, (e, t) => {
                            (null == o || o.add(e), g && e.start({ default: f }));
                            const n = c[t];
                            n && (Cs(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                        }));
                }),
                    Hn(() => () => {
                        Nt(l.ctrls, (e) => e.stop(!0));
                    }));
                const _ = m.map((e) => ({ ...e }));
                return o ? [_, o] : _;
            })(1, n ? e : [e], n ? [] : t);
        return n || 2 == arguments.length ? [r, o] : r;
    }
    var vr = () => gr(),
        br = () => s.useState(vr)[0];
    function yr(e, t, n) {
        const r = kt.fun(t) && t,
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
            m = s.useMemo(() => (r || 3 == arguments.length ? gr() : void 0), []),
            h = At(e),
            g = [],
            _ = s.useRef(null),
            v = o ? null : _.current;
        (Vn(() => {
            _.current = g;
        }),
            Hn(
                () => (
                    Nt(g, (e) => {
                        (null == m || m.add(e.ctrl), (e.ctrl.ref = m));
                    }),
                    () => {
                        Nt(_.current, (e) => {
                            (e.expired && clearTimeout(e.expirationId), Es(e.ctrl, m), e.ctrl.stop(!0));
                        });
                    }
                ),
            ));
        const b = (function (e, { key: t, keys: n = t }, s) {
                if (null === n) {
                    const t = new Set();
                    return e.map((e) => {
                        const n = s && s.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                        return n ? (t.add(n), n.key) : wr++;
                    });
                }
                return kt.und(n) ? e : kt.fun(n) ? e.map(n) : At(n);
            })(h, r ? r() : t, v),
            y = (o && _.current) || [];
        Vn(() =>
            Nt(y, ({ ctrl: e, item: t, key: n }) => {
                (Es(e, m), ps(c, t, n));
            }),
        );
        const w = [];
        if (
            (v &&
                Nt(v, (e, t) => {
                    e.expired
                        ? (clearTimeout(e.expirationId), y.push(e))
                        : ~(t = w[t] = b.indexOf(e.key)) && (g[t] = e);
                }),
            Nt(h, (e, t) => {
                g[t] || ((g[t] = { key: b[t], item: e, phase: 'mount', ctrl: new rr() }), (g[t].ctrl.item = e));
            }),
            w.length)
        ) {
            let e = -1;
            const { leave: n } = r ? r() : t;
            Nt(w, (t, s) => {
                const r = v[s];
                ~t ? ((e = g.indexOf(r)), (g[e] = { ...r, item: h[t] })) : n && g.splice(++e, 0, r);
            });
        }
        kt.fun(i) && g.sort((e, t) => i(e.item, t.item));
        let x = -a;
        const R = Qn(),
            E = _s(t),
            C = new Map(),
            P = s.useRef(new Map()),
            S = s.useRef(!1);
        Nt(g, (e, n) => {
            const s = e.key,
                o = e.phase,
                i = r ? r() : t;
            let c, m;
            const f = ps(i.delay || 0, s);
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
            if (((c = ps(c, e.item, n)), (c = kt.obj(c) ? ys(c) : { to: c }), !c.config)) {
                const t = p || E.config;
                c.config = ps(t, e.item, n, m);
            }
            x += a;
            const h = { ...E, delay: f + x, ref: d, immediate: i.immediate, reset: !1, ...c };
            if ('enter' == m && kt.und(h.from)) {
                const s = r ? r() : t,
                    o = kt.und(s.initial) || v ? s.from : s.initial;
                h.from = ps(o, e.item, n);
            }
            const { onResolve: g } = h;
            h.onResolve = (e) => {
                ps(g, e);
                const t = _.current,
                    n = t.find((e) => e.key === s);
                if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                    const e = t.every((e) => e.ctrl.idle);
                    if ('leave' == n.phase) {
                        const t = ps(l, n.item);
                        if (!1 !== t) {
                            const s = !0 === t ? 0 : t;
                            if (((n.expired = !0), !e && s > 0))
                                return void (s <= 2147483647 && (n.expirationId = setTimeout(R, s)));
                        }
                    }
                    e && t.some((e) => e.expired) && (P.current.delete(n), u && (S.current = !0), R());
                }
            };
            const y = ar(e.ctrl, h);
            'leave' === m && u
                ? P.current.set(e, { phase: m, springs: y, payload: h })
                : C.set(e, { phase: m, springs: y, payload: h });
        });
        const k = s.useContext(fr),
            T = Yn(k),
            N = k !== T && xs(k);
        (Vn(() => {
            N &&
                Nt(g, (e) => {
                    e.ctrl.start({ default: k });
                });
        }, [k]),
            Nt(C, (e, t) => {
                if (P.current.size) {
                    const e = g.findIndex((e) => e.key === t.key);
                    g.splice(e, 1);
                }
            }),
            Vn(
                () => {
                    Nt(P.current.size ? P.current : C, ({ phase: e, payload: t }, n) => {
                        const { ctrl: s } = n;
                        ((n.phase = e),
                            null == m || m.add(s),
                            N && 'enter' == e && s.start({ default: k }),
                            t &&
                                (Cs(s, t.ref),
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
                              key: kt.str(t.key) || kt.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref,
                          })
                        : r;
                }),
            );
        return m ? [I, m] : I;
    }
    var wr = 1;
    var xr = class extends Ls {
        constructor(e, t) {
            (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = gn(...t)));
            const n = this._get(),
                s = as(n);
            Kn(this, s.create(n));
        }
        advance(e) {
            const t = this._get();
            (Tt(t, this.get()) || (Zn(this).setValue(t), this._onChange(t, this.idle)),
                !this.idle && Er(this._active) && Cr(this));
        }
        _get() {
            const e = kt.arr(this.source) ? this.source.map(wn) : At(wn(this.source));
            return this.calc(...e);
        }
        _start() {
            this.idle &&
                !Er(this._active) &&
                ((this.idle = !1),
                Nt(Jn(this), (e) => {
                    e.done = !1;
                }),
                Pt.skipAnimation ? (lt.batchedUpdates(() => this.advance()), Cr(this)) : Qt.start(this));
        }
        _attach() {
            let e = 1;
            (Nt(At(this.source), (t) => {
                (yn(t) && Pn(t, this), $s(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
            }),
                (this.priority = e),
                this._start());
        }
        _detach() {
            (Nt(At(this.source), (e) => {
                yn(e) && Sn(e, this);
            }),
                this._active.clear(),
                Cr(this));
        }
        eventObserved(e) {
            'change' == e.type
                ? e.idle
                    ? this.advance()
                    : (this._active.add(e.parent), this._start())
                : 'idle' == e.type
                  ? this._active.delete(e.parent)
                  : 'priority' == e.type &&
                    (this.priority = At(this.source).reduce((e, t) => Math.max(e, ($s(t) ? t.priority : 0) + 1), 0));
        }
    };
    function Rr(e) {
        return !1 !== e.idle;
    }
    function Er(e) {
        return !e.size || Array.from(e).every(Rr);
    }
    function Cr(e) {
        e.idle ||
            ((e.idle = !0),
            Nt(Jn(e), (e) => {
                e.done = !0;
            }),
            Rn(e, { type: 'idle', parent: e }));
    }
    Pt.assign({ createStringInterpolator: $n, to: (e, t) => new xr(e, t) });
    var Pr = /^--/;
    function Sr(e, t) {
        return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : 'number' != typeof t || 0 === t || Pr.test(e) || (Tr.hasOwnProperty(e) && Tr[e])
              ? ('' + t).trim()
              : t + 'px';
    }
    var kr = {};
    var Tr = {
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
        Nr = ['Webkit', 'Ms', 'Moz', 'O'];
    Tr = Object.keys(Tr).reduce(
        (e, t) => (Nr.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
        Tr,
    );
    var Ir = /^(matrix|translate|scale|rotate|skew)/,
        Ar = /^(translate)/,
        jr = /^(rotate|skew)/,
        Mr = (e, t) => (kt.num(e) && 0 !== e ? e + t : e),
        Dr = (e, t) => (kt.arr(e) ? e.every((e) => Dr(e, t)) : kt.num(e) ? e === t : parseFloat(e) === t),
        Or = class extends rs {
            constructor({ x: e, y: t, z: n, ...s }) {
                const r = [],
                    o = [];
                ((e || t || n) &&
                    (r.push([e || 0, t || 0, n || 0]),
                    o.push((e) => [`translate3d(${e.map((e) => Mr(e, 'px')).join(',')})`, Dr(e, 0)])),
                    It(s, (e, t) => {
                        if ('transform' === t) (r.push([e || '']), o.push((e) => [e, '' === e]));
                        else if (Ir.test(t)) {
                            if ((delete s[t], kt.und(e))) return;
                            const n = Ar.test(t) ? 'px' : jr.test(t) ? 'deg' : '';
                            (r.push(At(e)),
                                o.push(
                                    'rotate3d' === t
                                        ? ([e, t, s, r]) => [`rotate3d(${e},${t},${s},${Mr(r, n)})`, Dr(r, 0)]
                                        : (e) => [
                                              `${t}(${e.map((e) => Mr(e, n)).join(',')})`,
                                              Dr(e, t.startsWith('scale') ? 1 : 0),
                                          ],
                                ));
                        }
                    }),
                    r.length && (s.transform = new Br(r, o)),
                    super(s));
            }
        },
        Br = class extends En {
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
                    Nt(this.inputs, (n, s) => {
                        const r = wn(n[0]),
                            [o, i] = this.transforms[s](kt.arr(r) ? r : n.map(wn));
                        ((e += ' ' + o), (t = t && i));
                    }),
                    t ? 'none' : e
                );
            }
            observerAdded(e) {
                1 == e && Nt(this.inputs, (e) => Nt(e, (e) => yn(e) && Pn(e, this)));
            }
            observerRemoved(e) {
                0 == e && Nt(this.inputs, (e) => Nt(e, (e) => yn(e) && Sn(e, this)));
            }
            eventObserved(e) {
                ('change' == e.type && (this._value = null), Rn(this, e));
            }
        };
    Pt.assign({
        batchedUpdates: r.unstable_batchedUpdates,
        createStringInterpolator: $n,
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
    var $r = ((
            e,
            {
                applyAnimatedValues: t = () => !1,
                createAnimatedStyle: n = (e) => new rs(e),
                getComponentProps: s = (e) => e,
            } = {},
        ) => {
            const r = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: s },
                o = (e) => {
                    const t = ds(e) || 'Anonymous';
                    return (
                        ((e = kt.str(e) ? o[e] || (o[e] = ls(e, r)) : e[cs] || (e[cs] = ls(e, r))).displayName =
                            `Animated(${t})`),
                        e
                    );
                };
            return (
                It(e, (t, n) => {
                    (kt.arr(e) && (n = ds(t)), (o[n] = o(t)));
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
                                : kr[t] || (kr[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                        );
                    void 0 !== r && (e.textContent = r);
                    for (const d in s)
                        if (s.hasOwnProperty(d)) {
                            const t = Sr(d, s[d]);
                            Pr.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                        }
                    (c.forEach((t, n) => {
                        e.setAttribute(t, u[n]);
                    }),
                        void 0 !== o && (e.scrollTop = o),
                        void 0 !== i && (e.scrollLeft = i),
                        void 0 !== a && e.setAttribute('viewBox', a));
                },
                createAnimatedStyle: (e) => new Or(e),
                getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
            },
        ),
        Fr = $r.animated;
    function Lr() {
        const e = s.useRef(0);
        return (
            it(() => {
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
    const Ur = new WeakMap(),
        qr = 0,
        zr = { await: 'await', idle: 'idle', display: 'display' };
    function Vr({ resId: e = qr, contentId: t, decoratorId: n, disabled: r, args: o, showDelay: i = 400 }) {
        const a = s.useRef({ status: zr.idle, resId: e, timeoutId: 0 }),
            [l, u] = s.useMemo(() => {
                let s = null;
                function l() {
                    r ||
                        ((a.current.status = zr.await),
                        window.clearTimeout(a.current.timeoutId),
                        (a.current.timeoutId = window.setTimeout(u, i)));
                }
                function u() {
                    ((a.current.status = zr.display), Z.tooltip.open(e, t, n, o), s && Ur.set(s, d));
                }
                function c() {
                    if (
                        (window.clearTimeout(a.current.timeoutId),
                        a.current.status === zr.display && Z.tooltip.hide(e, t, n),
                        (a.current.status = zr.idle),
                        s)
                    ) {
                        Ur.delete(s);
                        let e = s.parentElement;
                        for (; e && !Ur.has(e); ) e = e.parentElement;
                        if (e) {
                            Ur.get(e).show();
                        }
                        s = null;
                    }
                }
                const d = {
                    hide: c,
                    show: u,
                    rerun: function () {
                        a.current.status !== zr.idle && (r ? d.hide() : l());
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
            it(ot(l.hide)),
            u
        );
    }
    function Gr({ alert: e, body: t, header: n, note: r, hasHtmlContent: o, disabled: i }) {
        const a = h.resolve('views');
        return Vr({
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
    const Qr = {
        click: Hr('play'),
        'hot-key': Hr('play'),
        'mouse-enter': Hr('highlight'),
        increaseAmount: Hr('cons_ammo_single_plus'),
        decreaseAmount: Hr('cons_ammo_single_minus'),
        increaseAmountRoll: Hr('cons_ammo_roll_plus'),
        decreaseAmountRoll: Hr('cons_ammo_roll_minus'),
        close: Hr('cancelcloseno'),
        'show-context-menu': Hr('tabb'),
        progressSimple: Hr('gui_hangar_progressbar_simple'),
        increaseDelta: Hr('gui_hangar_progressbar_delta_increase'),
        decreaseDelta: Hr('gui_hangar_progressbar_delta_decrease'),
        increaseDeltaMax: Hr('gui_hangar_progressbar_delta_max'),
        pointerGrab: Hr('gui_hangar_progressbar_pointer_grab'),
        pointerDrag: Hr('gui_hangar_progressbar_pointer_drag'),
    };
    function Hr(e) {
        return () => {
            z.sound(e);
        };
    }
    const Wr = s.createContext(null);
    function Yr({ severity: t = 'warn', overrides: n, silent: r = !1, children: o }) {
        const i = s.useMemo(() => ({ ...Qr, ...n }), [n]),
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
        return e.jsx(Wr.Provider, { value: a, children: o });
    }
    function Xr() {
        const e = s.useContext(Wr);
        if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
        return e;
    }
    const Zr = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
        Kr = new Set(['number', 'string', 'boolean', 'bigint']),
        Jr = new Set(['Dict']);
    function eo(e, { shallow: t = !0, depth: n = 0, maxDepth: s = 32 } = {}) {
        var r, o;
        const i = e,
            a = typeof e;
        if (n > s) throw new Error(`Too deeply nested to copy. Max is ${s}.`);
        if (Zr.has(a)) return i;
        if (null === i) return i;
        const l = { depth: n + 1, maxDepth: s };
        if (Array.isArray(i)) return i.map((e) => eo(e, l));
        if ('object' === a) {
            const s = (null == (r = i.constructor) ? void 0 : r.name) ?? 'UNKNOWN';
            if (Array.isArray(e)) return e.map((e) => eo(e, l));
            if ('CoherentArrayProxy' === s) return e.map((e) => eo(e.value, l));
            if ('Dict' === s) return;
            if ('UNKNOWN' === s) return;
            if (s.includes(':ViewModel:') || 'Object' === s) {
                if (t && 0 === n) {
                    const e = {};
                    for (const t in i) {
                        const n = i[t];
                        Kr.has(typeof n) && (e[t] = n);
                    }
                    return e;
                }
                {
                    const e = {};
                    for (const t in i) {
                        const n = i[t],
                            s = (null == (o = null == i ? void 0 : i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                        Jr.has(s) || (e[t] = eo(n, l));
                    }
                    return e;
                }
            }
            const a = {};
            for (const e of Object.keys(i)) a[e] = eo(i[e], l);
            return a;
        }
        return (console.error('Incorrect value to clone model', i), i);
    }
    const to = { deep: !1, equals: re },
        no = { cloneItem: !0 },
        so = { shallow: !1 };
    class ro {
        constructor(e, t = no) {
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
                s[t] = n.observable.box(this.takeItem(e, t), to);
            }
            ((this._keys = n.observable.set(new Set(r))), (this._data = n.observable.box(s, to)));
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
                    : null !== i && ((s[o] = n.observable.box(i, to)), this._keys.add(o), this.set(s));
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
            return this.options.cloneItem ? eo(n, so) : n;
        }
        untrackedData() {
            return n.untracked(() => this._data.get());
        }
    }
    const oo = s.createContext({ mode: 'real' }),
        io = { equals: re, deep: !1 };
    function ao(e, t, s) {
        const r = [];
        e.events.subscribersNotified.on(
            n.action(() => {
                for (const e of r) e();
                r.splice(0, r.length);
            }),
        );
        const o = (o, i, a = io) => {
                const l = n.observable.box(o(s(i)), a);
                return ('real' === t && e.subscribe((e) => r.push(() => l.set(o(e))), i), l);
            },
            i = (n, o) => {
                const i = new ro(s(n), o);
                return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), n), i);
            },
            a = (o, i) => {
                const a = n.observable.box(s(o) ?? i, io);
                return ('real' === t && e.subscribe((e) => r.push(() => a.set(e)), o), a);
            };
        return {
            dict: i,
            dictRef: (e, t) => i(e, { cloneItem: !1, ...t }),
            arrayClone: (e) => o(eo, e),
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
    const lo = (e, t) => o.computedFn(e, { equals: n.comparer.structural, ...t }),
        uo = (e) => (t) => {
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
            e.jsx('div', { ...t, ref: uo([n, r]) })
        );
    });
    const co = h.resolve('images'),
        po = { rootId: h.resolve('aliases').read((e) => e.battle_results.progression.DailyMissions('resId')) };
    function mo(e, t) {
        const n = t === nt.PREMIUM,
            s = n ? 'gold' : 'silver';
        return {
            default: { path: co.readOrEmpty(`userMissions.missionIcons.c_32.${e}_${s}`), isGold: n },
            large: { path: co.readOrEmpty(`userMissions.missionIcons.c_80.${e}_${s}`), isGold: n },
        };
    }
    const fo = Qe({ ...tt.entries, icon: We(), navigationEnabled: qe(), level: ze(nt) }),
        ho = { [nt.EASY]: 1, [nt.MEDIUM]: 10, [nt.HARD]: 20, [nt.BONUS]: 30, [nt.PREMIUM]: 40, [nt.EPIC]: 50 },
        go = 1e3;
    function _o(e) {
        return e.status === Te.Done ? ho[e.level] * go : ho[e.level];
    }
    function vo(e) {
        return ((t = (e, t) => _o(t) - _o(e)), de(e, se).sort(t));
        var t;
    }
    const [bo, yo] = (
            (t = 'DataLayerProvider') =>
            (n, r, o) => {
                const i = s.createContext(null);
                function a(a) {
                    var l;
                    const { mode: u, options: c, children: d, mocks: p } = a,
                        m = s.useContext(oo),
                        f = u ?? m.mode,
                        h = p ?? m.mocks,
                        g = s.useRef([]),
                        _ = null == (l = null == o ? void 0 : o.useRequires) ? void 0 : l.call(o),
                        v = ot((e, s, i) => {
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
                                    observableModel: ao(u, e, c),
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
        )('DailyQuestsProgressModelProvider')(
            ({ observableModel: e }) => {
                const t = { dailyQuests: e.arrayClone('dailyQuests') };
                return {
                    quests: lo(() =>
                        de(vo(t.dailyQuests.get()), (e) => {
                            const t = (function (e, t, n) {
                                    const s = e['~run']({ value: t }, Ne(n));
                                    if (s.issues) throw new $e(s.issues);
                                    return s.value;
                                })(fo, e),
                                n = new Re(),
                                s = t.status === Te.Done,
                                r =
                                    t.postBattleCondition.items.length + t.bonusCondition.items.length <= 1
                                        ? t.icon
                                        : void 0;
                            return {
                                questId: t.id,
                                completed: s,
                                bonuses: t.bonuses,
                                rewardsTooltipResId: po.rootId,
                                questType: t.level,
                                value: {
                                    type: 'items',
                                    separate: 'union',
                                    groups: me([
                                        t.postBattleCondition.items.length > 0 &&
                                            Ee({
                                                indexer: n,
                                                commonIcon: r,
                                                model: t.postBattleCondition,
                                                resolveIcon: (e) => mo(e, t.level),
                                            }),
                                        t.bonusCondition.items.length > 0 &&
                                            Ee({
                                                indexer: n,
                                                commonIcon: r,
                                                model: t.bonusCondition,
                                                resolveIcon: (e) => mo(e, t.level),
                                            }),
                                    ]),
                                },
                            };
                        }),
                    ),
                };
            },
            ({ externalModel: e }) => ({ navigate: e.createCallbackNoArgs('onNavigate') }),
        ),
        wo = () => {};
    function xo(t) {
        const n = t;
        return s.forwardRef(function (t, s) {
            const r = i.useAdaptive(t, t.adaptive),
                { path: o, ...a } = r,
                l = r.images ?? h.resolve('images'),
                u = { ...a, ref: s };
            {
                const t = o ? l.readOr(o, wo, 'warn') : void 0;
                return t ? e.jsx(n, { ...u, src: t }) : e.jsx(n, { ...u, unknown: !0 });
            }
        });
    }
    const Ro = {
            background:
                'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
            backgroundSize: '20rem 20rem',
            backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
            backgroundColor: '#000',
        },
        Eo = xo(
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
                        unknownStyle: d = Ro,
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
    xo(
        s.forwardRef(function (t, n) {
            const { width: s, height: r, src: o, unselectable: i, unknown: a, unknownStyle: l = Ro, ...u } = t;
            return t.unknown
                ? e.jsx('div', { ...u, style: { width: t.width, height: t.height, ...l } })
                : e.jsx('img', { ...u, ref: n, src: o, width: s, height: r });
        }),
    );
    const Co = 'Divider_80a19f4b';
    function Po({ classNames: t }) {
        return e.jsx('div', {
            className: j(Co, null == t ? void 0 : t.base),
            children: e.jsx(Eo, {
                className: null == t ? void 0 : t.image,
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    }
    const So = 'TruncateText_dcb41d92',
        ko = s.forwardRef(function ({ text: t, tooltipParams: n, className: r, ...o }, i) {
            const a = Gr({ header: null == n ? void 0 : n.header, body: (null == n ? void 0 : n.body) || t }),
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
                    const r = ot((e) => {
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
                    className: j(So, r),
                    ...(u ? a : {}),
                    children: t,
                })
            );
        });
    function To(e) {
        var t,
            n,
            s = '';
        if ('string' == typeof e || 'number' == typeof e) s += e;
        else if ('object' == typeof e)
            if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = To(e[t])) && (s && (s += ' '), (s += n));
            else for (t in e) e[t] && (s && (s += ' '), (s += t));
        return s;
    }
    const No = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
        Io = function () {
            for (var e, t, n = 0, s = ''; n < arguments.length; )
                (e = arguments[n++]) && (t = To(e)) && (s && (s += ' '), (s += t));
            return s;
        },
        Ao = (e, t) => (n) => {
            var s;
            if (null == (null == t ? void 0 : t.variants))
                return Io(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: r, defaultVariants: o } = t,
                i = Object.keys(r).map((e) => {
                    const t = null == n ? void 0 : n[e],
                        s = null == o ? void 0 : o[e];
                    if (null === t) return null;
                    const i = No(t) || No(s);
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
            return Io(e, i, l, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        };
    function jo(t, n, r) {
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
                r = Ao(e.className, e.cva),
                o = e.element,
                i = s.forwardRef(function (e, t) {
                    return s.createElement(o, { ...('function' == typeof o ? e : Mo(a, e)), ref: t, className: r(e) });
                });
            return ((i.displayName = t), e.cva && (i.cva = e.cva), i);
        }
        const l = Ao(n, r),
            u = s.forwardRef(function (n, s) {
                return e.jsx('div', { 'data-name': t, ...Mo(a, n), ref: s, className: l(n) });
            });
        return ((u.displayName = t), r && (u.cva = r), u);
    }
    function Mo(e, t) {
        if (0 === e.length) return t;
        const n = { ...t };
        for (const s of e) delete n[s];
        return n;
    }
    const Do = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
        Oo = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
        Bo = jo('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
        $o = s.forwardRef(function (
            { children: t, onClick: n, onMouseEnter: s, soundTarget: r, disabled: o = !1, silent: i = !1, ...a },
            l,
        ) {
            const u = Xr();
            return e.jsx(Bo, {
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
        Fo = {
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
        Lo = s.forwardRef(function (
            {
                children: t,
                size: n = Oo.large,
                theme: s = Do.primary,
                disabled: r = !1,
                silent: o = !1,
                autoAlignContent: i = !0,
                classNames: a,
                className: l,
                ...u
            },
            c,
        ) {
            return e.jsxs($o, {
                ...u,
                ref: c,
                silent: o,
                disabled: r,
                className: j(
                    Fo.base,
                    Fo[`base__size-${n}`],
                    Fo[`base__theme-${s}`],
                    r ? Fo.base__disabled : Fo.base__enabled,
                    l,
                    null == a ? void 0 : a.base,
                ),
                onClick: function (e) {
                    var t;
                    r || null == (t = u.onClick) || t.call(u, e);
                },
                children: [
                    e.jsx('div', { className: j(Fo.background, null == a ? void 0 : a.background) }),
                    e.jsx('div', { className: j(Fo.border, null == a ? void 0 : a.border) }),
                    e.jsx('div', { className: j(Fo.overlay, null == a ? void 0 : a.overlay) }),
                    e.jsx('div', {
                        className: j(Fo.content, i && Fo.content__fontAligned, null == a ? void 0 : a.content),
                        children: t,
                    }),
                ],
            });
        });
    ((Lo.themes = Do), (Lo.sizes = Oo));
    const Uo = 'Action_6c7b0c76',
        qo = 'Action_icon_7d5aed3b',
        zo = s.forwardRef(function ({ className: t, theme: n = Lo.themes.secondary, tooltipParams: s, ...r }, o) {
            const i = Gr({
                alert: null == s ? void 0 : s.alert,
                header: null == s ? void 0 : s.header,
                body: null == s ? void 0 : s.body,
                note: null == s ? void 0 : s.note,
            });
            return e.jsx(Lo, {
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
                className: j(Uo, t),
                children: e.jsx(Eo, { width: 10, height: 20, path: 'post_battle.progression.arrow', className: qo }),
            });
        }),
        Vo = 'Header_background_91826dd5',
        Go = 'Header_mask_afb9c38d',
        Qo = 'Header_border_c6b1d37f',
        Ho = jo('CardHeader', 'Header_1c2ee301'),
        Wo = s.forwardRef(function ({ classNames: t, className: n, ...s }, r) {
            return e.jsxs(Ho, {
                ...s,
                className: j(null == t ? void 0 : t.base, n),
                ref: r,
                children: [
                    e.jsx('div', { className: j(Vo, null == t ? void 0 : t.background) }),
                    e.jsx('div', { className: j(Go, null == t ? void 0 : t.mask) }),
                    e.jsx('div', { className: j(Qo, null == t ? void 0 : t.border) }),
                    s.children,
                ],
            });
        }),
        Yo = jo('CardTitle', 'Title_e5ecf295'),
        Xo = s.forwardRef(function (t, n) {
            return e.jsx(Yo, { ...t, ref: n, children: t.children });
        }),
        Zo = 'Card_content_f7ddaa4a',
        Ko = jo('Card', 'Card_3f55e450'),
        Jo = jo('CardContent', Zo),
        ei = s.forwardRef(function (t, n) {
            return e.jsx(Ko, { ...t, ref: n, children: t.children });
        });
    ((ei.Header = Wo), (ei.Content = Jo), (ei.Action = zo), (ei.Title = Xo));
    const ti = { Text: 1, Tag: 2, Var: 3 };
    function ni(e, t) {
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
                        s[s.length - 1].node.children.push({ type: ti.Text, value: r });
                    } else n.push({ type: ti.Text, value: r });
                    r = '';
                }
                ((o = !0), (l += t.start.length - 1));
            } else if (u === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                ((o = !1), (l += t.end.length - 1));
                const e = i.trim();
                if (e.startsWith('@')) {
                    const t = e.slice(1).trim(),
                        r = { type: ti.Tag, attrs: t.split('|'), instanceId: ++a, children: [] };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(r);
                    } else n.push(r);
                    s.push({ node: r, startIndex: n.length });
                } else if ('/' === e) s.length > 0 && s.pop();
                else {
                    const t = { type: ti.Var, instanceId: ++a, name: e };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(t);
                    } else n.push(t);
                }
                i = '';
            } else o ? (i += u) : (r += u);
        }
        if (r)
            if (s.length) {
                s[s.length - 1].node.children.push({ type: ti.Text, value: r });
            } else n.push({ type: ti.Text, value: r });
        return n;
    }
    const si = {
            COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
            base: 'FormatText_db904f12',
            base__fullSize: 'FormatText_base__fullSize_a514958e',
            nowrap: 'FormatText_nowrap_ff69eca3',
        },
        ri = new Set((null == (l = si.COLORS) ? void 0 : l.split(', ')) ?? []);
    let oi = 0;
    function ii() {
        return ++oi;
    }
    const ai =
        /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
    function li(t) {
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
    function ui(t) {
        return Array.isArray(t)
            ? (function (t) {
                  const n = [];
                  for (let r = 0; r < t.length; r++) {
                      const o = t[r],
                          i = t[r + 1];
                      if ('string' != typeof i || !ai.test(i)) {
                          n.push(ui(o));
                          continue;
                      }
                      const a = li(i.slice(1));
                      (n.push(
                          e.jsxs(
                              s.Fragment,
                              { children: [e.jsxs('span', { className: si.nowrap, children: [ui(o), i[0]] }), a] },
                              ii(),
                          ),
                      ),
                          (r += 1));
                  }
                  return n;
              })(t)
            : 'string' == typeof t
              ? e.jsx(s.Fragment, { children: li(t) }, ii())
              : t;
    }
    const ci = {
        class: function (t, ...n) {
            return e.jsx(
                'span',
                { className: n.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: t },
                ii(),
            );
        },
        colorLegacy: function (t, n) {
            const s = ii();
            return ri.has(String(n))
                ? e.jsx('span', { className: `FormatText_colorLegacy__${n}`, children: t }, s)
                : e.jsx('span', { style: { color: `#${n}` }, children: t }, s);
        },
        bold: (e) => ['fontWeight', 'bold'],
        split: ui,
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
                ii(),
            );
        },
        color: (e, t) => ['color', t],
        fontSize: (e, t) => ['fontSize', t],
        fontWeight: (e, t) => ['fontWeight', t],
        textDecoration: (e, t) => ['textDecoration', t],
    };
    function di(e, t, n, s) {
        const r = n.map((t) => {
                if ('string' != typeof t) return t;
                const n = t.trim();
                if (n.startsWith('(') && n.endsWith(')')) {
                    const [t, ...r] = n.slice(1, -1).split(' ');
                    return t ? di(e, t, r, s) : e;
                }
                return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
            }),
            o = s[t];
        return o ? o(e, ...r) : (console.error(`Function ${t} is not registered`), e);
    }
    function pi(e, t, n) {
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
            return s ? di(e, s, r, n) : e;
        }, t);
    }
    function mi(e) {
        return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
    }
    function fi(e, t) {
        for (let n = 0; n < e.length; n++) {
            if ('$' === e[n]) {
                let s = n + 1;
                for (; s < e.length && !mi(e[s]); ) s++;
                const r = e.slice(n + 1, s),
                    o = t[r];
                if (o) return fi(e.replace(`$${r}`, String(o)), t);
            }
        }
        return e;
    }
    function hi(e, t) {
        const n = [];
        for (let s = 0; s < e.length; s++) n[s] = fi(e[s], t);
        return n;
    }
    const gi = ['number', 'string', 'undefined'];
    function _i(t, n, r = {}, o = !0) {
        o && (oi = 0);
        const i = [];
        function a(e) {
            if (gi.includes(typeof e)) {
                const t = i.at(-1);
                if ('string' == typeof t) return void (i[i.length - 1] = t + e);
            }
            i.push(e);
        }
        for (const l of t)
            if (l.type === ti.Text) a(l.value);
            else if (l.type === ti.Var)
                null === r[l.name] || gi.includes(typeof r[l.name])
                    ? a(r[l.name] ?? `{{${l.name}}}`)
                    : i.push(e.jsx(s.Fragment, { children: r[l.name] }, `var-${l.name}-${l.instanceId}`));
            else if (l.type === ti.Tag) {
                const e = _i(l.children, n, r, !1),
                    t = pi(hi(l.attrs, r), e, n);
                i.push(t);
            }
        return i;
    }
    function vi(e) {
        return e
            .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
            .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
    }
    function bi(e) {
        return e
            .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
            .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
    }
    function yi(e) {
        return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
    }
    function wi(e) {
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
        })(e, yi, vi, bi);
    }
    const xi = { start: '{{', end: '}}' },
        Ri = s.memo(function (t) {
            const {
                    brackets: n = xi,
                    text: r,
                    params: o,
                    upgradeLegacy: i,
                    fullSize: a,
                    inline: l,
                    formatters: u,
                    split: c,
                    ...d
                } = t,
                p = s.useMemo(() => (t.upgradeLegacy ? wi(t.text) : t.text), [t.text, t.upgradeLegacy]),
                m = s.useMemo(() => (t.formatters ? { ...ci, ...t.formatters } : ci), [t.formatters]),
                f = s.useMemo(() => ni(c ? `{{@ split}}${p}{{/}}` : p, n), [n, p, c]),
                h = s.useMemo(() => _i(f, m, t.params), [f, m, t.params]),
                g = j(si.base, a && si.base__fullSize, d.className);
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
    function Ei({ path: t, ...n }) {
        return e.jsx(Ri, { text: h.resolve('strings').readOrEmpty(t), ...n });
    }
    const Ci = { base: 'AnimatedValue_d9f4b2f0', animatedValue: 'AnimatedValue_animatedValue_4c490d83' },
        Pi = M.cubicBezier(0.33, 0, 0.25, 1),
        Si = 330,
        ki = 330;
    function Ti(e) {
        return {
            enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
            leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
        };
    }
    function Ni({ value: t, transition: n, children: r, className: o, classNames: i }) {
        const a = s.useMemo(xe, []),
            l = yr(t, {
                ...n,
                initial: { opacity: 1, y: '0rem', ...(null == n ? void 0 : n.initial) },
                from: { opacity: 0, y: '-5rem', ...(null == n ? void 0 : n.from) },
                enter: () => ({
                    opacity: 1,
                    y: '0rem',
                    delay: ki,
                    config: { easing: Pi, duration: Si },
                    onStart: () => {
                        const { enterElements: e, leftElements: t } = Ti(a);
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
                    config: { easing: Pi, duration: Si },
                    onStart: () => {
                        let e = 0;
                        const { enterElements: t, leftElements: n } = Ti(a);
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
            className: j(Ci.base, o),
            children: l((n, s) => {
                const o = 0 === n.opacity.get() && !1 === n.opacity.isAnimating;
                return e.jsx(Fr.div, {
                    className: j(
                        Ci.animatedValue,
                        `js-animated-value-${a}-${t === s ? 'enter' : 'leave'}`,
                        null == i ? void 0 : i.animatedValue,
                    ),
                    style: { ...n, position: o ? 'absolute' : 'relative' },
                    children: r(s),
                });
            }),
        });
    }
    const Ii = {
            base: 'ProgressCount_3c6daa70',
            label: 'ProgressCount_label_d15406bd',
            total: 'ProgressCount_total_4f222a62',
            divider: 'ProgressCount_divider_487d7768',
        },
        Ai = h.resolve('intl');
    function ji({ withLabel: e, withoutLimit: t }) {
        return t
            ? 'battle_results.progression.missionsCompleteCounter'
            : 'battle_results.progression.completedPointsFrom.' + (e ? 'withLabel' : 'withoutLabel');
    }
    function Mi({ current: t, total: n, withLabel: s, withoutLimit: r, className: o, classNames: i }) {
        return e.jsx(Ei, {
            path: ji({ withLabel: s, withoutLimit: r }),
            className: j(Ii.base, o),
            params: {
                completed: Ai.formatNumber('integral', t),
                total: Ai.formatNumber('integral', n),
                totalClass: j(Ii.total, null == i ? void 0 : i.total),
                labelClass: s && j(Ii.label, null == i ? void 0 : i.label),
            },
        });
    }
    function Di({
        current: t,
        total: n,
        withLabel: r,
        className: o,
        classNames: i,
        transitionCurrent: a,
        transitionTotal: l,
    }) {
        const u = Xr(),
            c = s.useRef({ transitionCurrent: a, transitionTotal: l });
        return (
            s.useEffect(() => {
                c.current = { transitionCurrent: a, transitionTotal: l };
            }, [a, l]),
            e.jsx(Ei, {
                path: 'battle_results.progression.completedPointsFrom.' + (r ? 'withLabel' : 'withoutLabel'),
                className: j(Ii.base, o),
                params: {
                    completed: e.jsx(Ni, {
                        className: null == i ? void 0 : i.currentTransitionWrapper,
                        value: Ai.formatNumber('integral', t),
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
                    total: e.jsx(Ni, {
                        className: null == i ? void 0 : i.totalTransitionWrapper,
                        value: Ai.formatNumber('integral', n),
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
                    totalClass: j(Ii.total, null == i ? void 0 : i.total),
                    labelClass: r && j(Ii.label, null == i ? void 0 : i.label),
                    dividerClass: Ii.divider,
                },
            })
        );
    }
    const Oi = {
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
    function Bi({
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
        return e.jsxs(ei, {
            className: j(Oi.card, s && Oi.card__disabled, u),
            ...d,
            children: [
                e.jsxs(ei.Header, {
                    onClick: o,
                    className: j(Oi.cardHeader, null == (p = null == c ? void 0 : c.header) ? void 0 : p.base),
                    classNames: {
                        ...(null == c ? void 0 : c.header),
                        background: j(
                            Oi.cardHeaderBackground,
                            null == (m = null == c ? void 0 : c.header) ? void 0 : m.background,
                        ),
                        border: j(Oi.cardHeaderBorder, null == (f = null == c ? void 0 : c.header) ? void 0 : f.border),
                    },
                    children: [
                        e.jsxs('div', {
                            className: j(Oi.head, null == c ? void 0 : c.head),
                            children: [
                                e.jsxs('div', {
                                    className: Oi.titleContainer,
                                    children: [
                                        void 0 !== n && e.jsx(Eo, { ...n }),
                                        e.jsx(ei.Title, {
                                            className: j(Oi.title, null == c ? void 0 : c.title),
                                            children: e.jsx(ko, { text: t }),
                                        }),
                                    ],
                                }),
                                void 0 !== i &&
                                    e.jsx(ei.Action, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), i(e));
                                        },
                                        className: j(Oi.action, null == c ? void 0 : c.action),
                                        tooltipParams: r,
                                    }),
                            ],
                        }),
                        e.jsx('div', {
                            className: j(Oi.tail, null == c ? void 0 : c.tail),
                            children: void 0 !== l && e.jsx(Mi, { ...l }),
                        }),
                    ],
                }),
                void 0 !== a &&
                    e.jsx(ei.Content, { className: j(Oi.content, null == c ? void 0 : c.content), children: a }),
                e.jsx('div', { className: Oi.divider }),
            ],
        });
    }
    function $i(e) {
        return (
            !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
            (!s.isValidElement(e) && !!Array.isArray(e) && e.every($i))
        );
    }
    const Fi = 'MultilineOverflow_8834bd8e',
        Li = 'MultilineOverflow_content_b539970d';
    const Ui = s.forwardRef(function (
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
                    (n.className = j(Li, e.children[0].className)),
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
                return !e || Object.values(e).every($i);
            })(r),
            x = (function (e, t, n) {
                return Vr({
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
            ref: uo([_, v]),
            className: j(Fi, m, null == f ? void 0 : f.base),
            children: e.jsx(Ri, {
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
    function qi({
        baseValue: e,
        newValue: t,
        animationType: n = Gi.simple,
        deltaVisible: s = !1,
        preViewDeltaVisible: r = !1,
        animationConfig: o,
    }) {
        return {
            from: { width: e },
            to: { width: t },
            config: o ?? { duration: (n === Gi.simple && s) || (!s && r) ? 0 : zi, easing: _n.easeInOutCubic },
        };
    }
    const zi = 600,
        Vi = { duration: zi, easing: _n.easeInOutCubic },
        Gi = { simple: 'simple', grow: 'grow', growFreeze: 'growFreeze' },
        Qi = { medium: 'medium', large: 'large' },
        Hi = { disabled: 'disabled', doneInactive: 'doneInactive', doneStatic: 'doneStatic' },
        Wi = 'growing',
        Yi = 'shrinking',
        Xi = 'done',
        Zi = s.createContext(void 0);
    function Ki() {
        const e = s.useContext(Zi);
        if (!e) throw new Error('ProgressBar must be used within a ProgressBar');
        return e;
    }
    function Ji(e) {
        const { activeComponents: t } = Ki();
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
    const ea = {
        base: 'BackgroundPattern_8df99ec8',
        backgroundPattern: 'BackgroundPattern_backgroundPattern_d9136c40',
        backgroundPattern__medium: 'BackgroundPattern_backgroundPattern__medium_84d64a88',
        backgroundPattern__large: 'BackgroundPattern_backgroundPattern__large_3e5537fc',
    };
    const ta = s.memo(function ({ className: t, backgroundPattern: n }) {
        const s = Ki();
        return (
            Ji('backgroundPattern'),
            e.jsx('div', {
                className: ea.base,
                children: e.jsx(Eo, {
                    className: j(
                        t,
                        ea.backgroundPattern,
                        0 === s.percentage ? ea.backgroundPattern__noProgress : ea[`backgroundPattern__${s.size}`],
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    path:
                        n ??
                        ((r = s.size),
                        (o = s.status),
                        o === Hi.disabled
                            ? `ui.progressbar.bg_pattern_base_disabled_${r}`
                            : `ui.progressbar.bg_pattern_base_${r}`),
                }),
            })
        );
        var r, o;
    });
    function na(e, t) {
        const n = Ki(),
            s = Xr();
        return ot((r) => {
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
    function sa(e = 0) {
        const t = Ki(),
            n = t.soundTarget ?? 'progress-bar',
            s = Xr(),
            r = na(e, n),
            o = ot(() => {
                t.status !== Hi.doneInactive && t.progressCompleted
                    ? s.play('increaseDeltaMax', { target: n })
                    : s.play('progressSimple', { target: n });
            });
        return ot(({ step: e } = {}) => {
            if (!t.silent)
                return t.activeComponents.has('delta') ? r(e) : t.activeComponents.has('fill') ? o() : void 0;
        });
    }
    const ra = 'Delta_eb295acb',
        oa = 'Delta_delta__increase_e6e76b0b',
        ia = 'Delta_outside_b28c01e5',
        aa = 'Delta_outside__increase_91391b24',
        la = 'Delta_inside_b1b3a5c5',
        ua = 'Delta_inside__increase_fcd871c4',
        ca = s.memo(
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
                    p = Ki(),
                    [m, f] = _r(() => ({ width: 0 })),
                    [h, g] = _r(() => ({ width: 0 })),
                    [_, v] = _r(() => ({ left: 0, width: 0 })),
                    [b, ...y] = a,
                    [w, x] = s.useState(y),
                    [R, E] = s.useState(b ?? 'done'),
                    C = (p.value - t) / p.maxValue,
                    P = sa(C);
                (Ji('delta'),
                    s.useEffect(() => {
                        if (0 === C) return;
                        const [e, ...t] = a;
                        (E(e ?? 'done'), x(t));
                    }, [f, g, a, C]));
                const S = ot(l ?? ne);
                s.useEffect(() => S(R), [R, S]);
                const k = ot(() => {
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
                            e.classList.toggle(oa, C > 0),
                            'growing' === R
                                ? (v.set({ left: t, width: s }),
                                  g.set({ width: 100 }),
                                  void f.start({
                                      from: { width: 0 },
                                      to: { width: 100 },
                                      config: n ?? Vi,
                                      onRest: k,
                                      onStart: () => P({ step: R }),
                                  }))
                                : 'shrinking' === R
                                  ? (v.set({ left: t, width: s }),
                                    f.set({ width: 100 }),
                                    void g.start({
                                        from: { width: 100 },
                                        to: { width: 0 },
                                        config: r ?? Vi,
                                        onRest: k,
                                        onStart: () => P({ step: R }),
                                    }))
                                  : void 0
                        );
                    }, [v, p.percentage, C, n, f, k, g, P, r, R]),
                    e.jsxs(Fr.div, {
                        ...u,
                        ref: uo([c, d]),
                        className: j(i, ra),
                        style: { left: _.left.to((e) => `${e}%`), width: _.width.to((e) => `${e}%`) },
                        children: [
                            e.jsxs(Fr.div, {
                                ...u,
                                style: { width: h.width.to((e) => `${e}%`) },
                                className: j(null == o ? void 0 : o.outside, ia, C > 0 && aa),
                                children: [
                                    e.jsx(Fr.div, {
                                        style: { width: m.width.to((e) => `${e}%`) },
                                        className: j(null == o ? void 0 : o.inside, la, C > 0 && ua),
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
        da = {
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
        pa = Fr(Eo),
        ma = s.memo(function ({ animationConfig: t, classNames: n }) {
            var r;
            const o = Ki(),
                { activeComponents: i } = Ki(),
                a = 100 * o.percentage,
                l = 100 * ((null == (r = o.previous) ? void 0 : r.percentage) ?? 0),
                u = void 0 === o.previous ? a : l,
                c = o.status === Hi.doneStatic,
                d = Lr(),
                [p, m] = _r(() => ({ width: u }));
            return (
                s.useEffect(() => {
                    d.run(() =>
                        m.start(
                            qi({
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
                        e.jsx(pa, {
                            path: `ui.progressbar.bg_pattern_base_done_${o.size}`,
                            className: j(
                                null == n ? void 0 : n.done,
                                da.done,
                                !o.progressCompleted && da.done__hidden,
                                o.progressCompleted && (c ? da.done__doneStatic : da.done__visible),
                            ),
                            repeat: 'repeat',
                            position: 'left top',
                            style: { width: p.width.to((e) => `${e}%`) },
                        }),
                        !c &&
                            e.jsx(pa, {
                                path: `ui.progressbar.bg_pattern_base_done_complete_${o.size}`,
                                className: j(
                                    null == n ? void 0 : n.doneComplete,
                                    da.complete,
                                    o.progressCompleted && da.complete__visible,
                                ),
                                repeat: 'repeat',
                                position: 'left top',
                                style: { width: p.width.to((e) => `${e}%`) },
                            }),
                    ],
                })
            );
        }),
        fa = Fr(Eo),
        ha = s.memo(function ({ animationConfig: t, className: n }) {
            var r;
            const o = Ki(),
                { activeComponents: i } = Ki(),
                a = Lr(),
                l = 100 * o.percentage,
                u = 100 * ((null == (r = o.previous) ? void 0 : r.percentage) ?? 0),
                c = void 0 === o.previous ? l : u,
                [d, p] = _r(() => ({ width: c }));
            return (
                s.useEffect(() => {
                    a.run(() =>
                        p.start(
                            qi({
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
                e.jsx(fa, {
                    path: `ui.progressbar.bg_pattern_base_filled_${o.size}`,
                    className: j(
                        n,
                        da.filled,
                        o.status && da[`filled__${o.status}`],
                        o.progressCompleted && da.filled__hidden,
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    style: { width: d.width.to((e) => `${e}%`) },
                })
            );
        }),
        ga = s.memo(function ({ classNames: t, className: n, animationConfig: r, ...o }) {
            var i;
            const a = Ki(),
                l = sa(),
                u = Lr(),
                { activeComponents: c } = Ki(),
                d = 100 * a.percentage,
                p = 100 * ((null == (i = a.previous) ? void 0 : i.percentage) ?? 0),
                m = void 0 === a.previous ? d : p;
            (Ji('fill'),
                s.useEffect(() => {
                    'growFreeze' === a.animationType && a.progressCompleted && !a.activeComponents.has('delta') && l();
                }, [a.activeComponents, a.animationType, a.progressCompleted, l]));
            const [f, h] = _r(() => ({ width: m }));
            return (
                s.useEffect(() => {
                    u.run(() =>
                        h.start({
                            ...qi({
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
                    className: j(da.base, n),
                    children: [
                        e.jsx(Fr.div, {
                            className: null == t ? void 0 : t.fill,
                            style: { width: f.width.to((e) => `${e}%`) },
                        }),
                        o.children ??
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(ha, { className: null == t ? void 0 : t.filledPattern, animationConfig: r }),
                                    e.jsx(ma, {
                                        classNames: {
                                            done: null == t ? void 0 : t.done,
                                            doneComplete: null == t ? void 0 : t.doneComplete,
                                        },
                                        animationConfig: r,
                                    }),
                                ],
                            }),
                        e.jsx(Fr.div, {
                            className: j(
                                null == t ? void 0 : t.edge,
                                da.edge,
                                0 === a.percentage && da.edge__noProgress,
                                !c.has('previewDelta') && !a.progressCompleted && da.edge__visible,
                                a.status && da[`edge__${a.status}`],
                            ),
                            style: { left: f.width.to((e) => `${e}%`) },
                        }),
                    ],
                })
            );
        });
    ((ga.Filled = ha), (ga.Done = ma));
    const _a = { above: 'above', below: 'below' },
        va = {
            base: 'Indicators_f2e99d31',
            step: 'Indicators_step_a78300f3',
            step__above: 'Indicators_step__above_a95c746e',
            indicator: 'Indicators_indicator_8484a8c7',
            label: 'Indicators_label_f8c7ff1e',
        };
    function ba({ position: t, value: n, children: s, className: r, classNames: o }) {
        const i = Ki();
        return e.jsxs('div', {
            className: j(va.step, va[`step__${t}`], r),
            style: { left: (n / i.maxValue) * 100 + '%' },
            children: [
                t === _a.below && e.jsx('div', { className: j(va.indicator, null == o ? void 0 : o.indicator) }),
                void 0 !== s && e.jsx('div', { className: j(va.label, null == o ? void 0 : o.label), children: s }),
                t === _a.above && e.jsx('div', { className: j(va.indicator, null == o ? void 0 : o.indicator) }),
            ],
        });
    }
    const ya = jo('Indicators', va.base),
        wa = function (t) {
            const n = Ki();
            return (
                Ji('stepIndicators'),
                e.jsx(ya, {
                    children: ge(t.count, (s) => {
                        var r, o, i;
                        const a = (s / (t.count - 1)) * 100,
                            l = n.value >= a && 0 !== n.value;
                        return e.jsx(
                            ba,
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
    ((wa.Step = ba), (wa.positions = _a));
    const xa = 'PreviewDelta_86b01c3e',
        Ra = 'PreviewDelta_negative_1c375892',
        Ea = 'PreviewDelta_positive_be83fc48',
        Ca = 'PreviewDelta_negative__visible_19dda1c5',
        Pa = 'PreviewDelta_positive__visible_19dda1c5',
        Sa = s.forwardRef(function ({ value: t, classNames: n, ...s }, r) {
            const o = Ki();
            Ji('previewDelta');
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
                className: j(xa, s.className),
                children: [
                    e.jsx('div', {
                        style: { left: `${c}%`, width: `${d}%`, ...s.style },
                        className: j(null == n ? void 0 : n.negative, Ra, 'negative' === a && Ca),
                    }),
                    e.jsx('div', {
                        style: { left: `${c}%`, width: `${d}%`, ...s.style },
                        className: j(null == n ? void 0 : n.positive, Ea, 'positive' === a && Pa),
                    }),
                ],
            });
        });
    function ka(t) {
        const [n, r] = s.useState(Math.min(t.value, t.maxValue)),
            [o, i] = s.useState(t.maxValue),
            a = st(n),
            l = st(o),
            u = s.useRef(new Set()),
            c = ot((e) => r(Math.min(e, t.maxValue))),
            d = ot((e) => u.current.has(e));
        (s.useLayoutEffect(() => {
            c(t.value);
        }, [t.value, c]),
            s.useLayoutEffect(() => {
                i(t.maxValue);
            }, [t.maxValue]));
        const p = ot((e) => {
            var n;
            return null == (n = t.onValueChange) ? void 0 : n.call(t, e);
        });
        s.useEffect(() => {
            p(n);
        }, [p, n]);
        const m = ot((e) => {
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
                const e = n / o == 1 && t.status !== Hi.doneInactive;
                return t.animationType === Gi.growFreeze ? e && t.maxValueAchieved : e;
            }, [o, t.animationType, t.maxValueAchieved, t.status, n]),
            g = s.useMemo(
                () => ({
                    value: n,
                    maxValue: o,
                    setValue: c,
                    setMaxValue: i,
                    animationType: t.animationType ?? Gi.simple,
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
        return e.jsx(Zi.Provider, { value: g, children: t.children });
    }
    const Ta = {
            background: 'ProgressBar_background_b4143753',
            base: 'ProgressBar_27c2305c',
            base__medium: 'ProgressBar_base__medium_97d40af9',
            base__large: 'ProgressBar_base__large_56a06125',
            base__disabled: 'ProgressBar_base__disabled_c8466b10',
            base__done: 'ProgressBar_base__done_dcd0e31a',
            border: 'ProgressBar_border_cc9e47f4',
        },
        Na = jo('ProgressBar', Ta.base, { variants: { size: { medium: Ta.base__medium, large: Ta.base__large } } }),
        Ia = function ({ size: t = Qi.medium, backgroundPattern: n, status: s, className: r, classNames: o, ...i }) {
            return e.jsx(ka, {
                size: t,
                status: s,
                ...i,
                children: e.jsxs(Na, {
                    size: t,
                    className: j(r, i.value === i.maxValue && s !== Hi.doneInactive && Ta.base__done),
                    children: [
                        e.jsx('div', { className: j(Ta.border, Ta[`border__${t}`], null == o ? void 0 : o.border) }),
                        e.jsx('div', { className: j(Ta.background, null == o ? void 0 : o.background) }),
                        e.jsx(ta, { backgroundPattern: n, className: null == o ? void 0 : o.backgroundPattern }),
                        i.children,
                    ],
                }),
            });
        };
    ((Ia.Fill = ga),
        (Ia.Delta = ca),
        (Ia.PreviewDelta = Sa),
        (Ia.NumberIndicators = wa),
        (Ia.sizes = Qi),
        (Ia.statuses = Hi),
        (Ia.animations = Gi));
    const Aa = 'ProgressBar_wrapper_a944db13',
        ja = [Wi, Yi],
        Ma = s.memo(function ({ progressBar: t, fill: n, delta: s, wrapperSpringProps: r }) {
            const o = _r({ from: { opacity: 1 }, ...r });
            return e.jsx(Ia, {
                ...t,
                children: e.jsxs(Fr.div, {
                    className: Aa,
                    style: o,
                    children: [
                        e.jsx(Ia.Fill, { ...n }),
                        void 0 !== s && e.jsx(Ia.Delta, { ...s, steps: (null == s ? void 0 : s.steps) ?? ja }),
                    ],
                }),
            });
        }),
        Da = 'ProgressStats_label_6e975df0',
        Oa = 'ProgressStats_receivedInBattle_d3abd2fe',
        Ba = jo('ProgressStatsLabel', Da),
        $a = s.forwardRef(({ className: t, text: n, transitionProps: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                className: j(Da, t),
                ref: o,
                children: e.jsx(Ni, { value: n, transition: s, children: se }),
            }),
        ),
        Fa = s.forwardRef(({ value: t, className: n, total: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                ref: o,
                className: j(Oa, n),
                children: e.jsx(Ei, {
                    path: s ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    params: { value: t },
                }),
            }),
        ),
        La = s.forwardRef(({ value: t, className: n, total: r, transition: o, target: i, ...a }, l) => {
            const u = Xr(),
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
                    className: j(Oa, n),
                    children: e.jsx(Ni, {
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
                        children: (t) => e.jsx(Ei, { path: t.textPath, params: { value: t.value } }),
                    }),
                })
            );
        }),
        Ua = jo('ProgressStats');
    ((Ua.Label = Ba), (Ua.ReceivedValue = Fa), (Ua.AnimatedReceivedValue = La), (Ua.AnimatedLabel = $a));
    const qa = s.createContext(void 0);
    function za() {
        const e = s.useContext(qa);
        return (he(void 0 !== e, 'useCondition must be used under conditionContext.Provider'), e);
    }
    const Va = s.createContext(void 0);
    function Ga() {
        const e = s.useContext(Va);
        return (he(void 0 !== e, 'useMissionCard must be used under missionCardContext.Provider'), e);
    }
    const Qa = {
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
        Ha = ['win', 'isAlive'],
        Wa = M.cubicBezier(0.33, 0, 0.25, 1);
    const Ya = {
        Condition: function (t) {
            var n, s;
            const r = t.completed && t.multiQuest;
            return (
                t.lastCondition &&
                    r &&
                    t.animation &&
                    (null == (n = t.rewardsGlowRef) || n.start(), null == (s = t.completedMarkRef) || s.start()),
                e.jsx(Ya.Root, {
                    condition: t.value,
                    children: e.jsxs(Ya.Body, {
                        children: [
                            e.jsx(Ya.Title, { questsAmount: t.questsAmount }),
                            e.jsx(Ya.Description, { guiDisabledDescription: t.guiDisabledDescription }),
                            !r &&
                                e.jsx(Ya.Progression, {
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
            return e.jsx(qa.Provider, {
                value: t,
                children: e.jsx('div', { ...n, className: j(Qa.content, t.completed && Qa.content__completed) }),
            });
        },
        Description: function ({ guiDisabledDescription: t }) {
            const { description: n, conditionType: s } = za();
            return s && Ha.includes(s)
                ? null
                : e.jsx('div', {
                      className: Qa.description,
                      children: e.jsx(Ui, { text: B(t ?? n), className: Qa.multiline }),
                  });
        },
        Title: function ({ questsAmount: t }) {
            const { title: n, icon: s, completed: r, progression: o } = za(),
                { completed: i } = Ga();
            if (!s && !n) return null;
            const a = (function ({ icon: e, conditionCompleted: t, questsAmount: n, questCompleted: s }) {
                if (e && e.default.path) return (n && n > 1) || (s && 1 === n) || t ? e : void 0;
            })({ icon: s, questCompleted: i, questsAmount: t, conditionCompleted: r });
            return e.jsxs('div', {
                className: Qa.title,
                children: [
                    void 0 !== a &&
                        e.jsx('div', {
                            style: { backgroundImage: `url(${a.default.path})` },
                            className: j(Qa.titleIcon, a.default.isGold && Qa.titleIcon__gold),
                        }),
                    o ? P.formatNumber('integral', o.total) : null == n ? void 0 : n.trim(),
                ],
            });
        },
        Body: jo('MissionCardBody', Qa.body),
        Progression: function ({ completed: t, rewardsGlowRef: n, completedMarkRef: r }) {
            const { progression: o } = za(),
                { animation: i, immediateAnimation: a } = Ga(),
                l = br(),
                u = br(),
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
                            animationType: Gi.grow,
                            status: Hi.doneStatic,
                            maxValue: o.total,
                            className: Qa.progressbar,
                            maxValueAchieved: d === o.total,
                        },
                        delta: a
                            ? void 0
                            : {
                                  from: c,
                                  steps: c === d ? [] : [Wi, Yi],
                                  growAnimationConfig: { duration: 600, easing: Wa },
                                  shrinkAnimationConfig: { duration: 600, easing: Wa },
                                  onState(e) {
                                      e === Xi &&
                                          d === o.current &&
                                          o.earned > 0 &&
                                          (l.start(), u.start(), t && (null == r || r.start()));
                                  },
                              },
                        fill: { animationConfig: { duration: a ? 0 : 600, easing: Wa } },
                    };
            }, [a, c, d, o, t, l, u, r]);
            return o
                ? (he.log(
                      o.total >= o.current && o.current >= 0,
                      `Unexpected progression values: current(${o.current}), total(${o.total})`,
                  ),
                  e.jsxs('div', {
                      className: Qa.progression,
                      children: [
                          void 0 !== m && e.jsx(Ma, { progressBar: m.progress, delta: m.delta, fill: m.fill }),
                          e.jsxs('div', {
                              className: Qa.numberStats,
                              children: [
                                  e.jsx(Di, {
                                      current: a ? o.current : d,
                                      total: o.total,
                                      className: Qa.progressionCounter,
                                      transitionCurrent: { ref: l, immediate: a },
                                      transitionTotal: { immediate: a },
                                  }),
                                  e.jsx(Ua.AnimatedReceivedValue, {
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
    var Xa = ((e) => (
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
        ))(Xa || {}),
        Za = ((e) => (
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
        ))(Za || {}),
        Ka = ((e) => (
            (e.MULTI = 'multi'),
            (e.CURRENCY = 'currency'),
            (e.PREMIUM_PLUS = 'premium_plus'),
            (e.NUMBER = 'number'),
            (e.STRING = 'string'),
            e
        ))(Ka || {}),
        Ja = ((e) => (
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
        ))(Ja || {}),
        el = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(el || {}),
        tl = ((e) => (
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
        ))(tl || {});
    const nl = [
            Xa.Items,
            Xa.Equipment,
            Xa.Xp,
            Xa.XpFactor,
            Xa.Blueprints,
            Xa.BlueprintsAny,
            Xa.Goodies,
            Xa.Berths,
            Xa.Slots,
            Xa.Tokens,
            Xa.CrewSkins,
            Xa.CrewBooks,
            Xa.Customizations,
            Xa.CreditsFactor,
            Xa.TankmenXp,
            Xa.TankmenXpFactor,
            Xa.FreeXpFactor,
            Xa.BattleToken,
            Xa.LootBox,
            Xa.PremiumUniversal,
            Xa.NaturalCover,
            Xa.BpCoin,
            Xa.BattlePassSelectToken,
            Xa.BattlaPassFinalAchievement,
            Xa.BattleBadge,
            Xa.BonusX5,
            Xa.CrewBonusX3,
            Xa.EpicSelectToken,
            Xa.Comp7TokenWeeklyReward,
            Xa.DeluxeGift,
            Xa.BattleBoosterGift,
            Xa.OptionalDevice,
        ],
        sl = [Xa.Gold, Xa.Credits, Xa.Crystal, Xa.FreeXp],
        rl = [Xa.BattlePassPoints, Xa.EquipCoin],
        ol = [Xa.PremiumPlus, Xa.Premium],
        il = (e) =>
            nl.includes(e)
                ? Ka.MULTI
                : sl.includes(e)
                  ? Ka.CURRENCY
                  : rl.includes(e)
                    ? Ka.NUMBER
                    : ol.includes(e)
                      ? Ka.PREMIUM_PLUS
                      : Ka.STRING,
        al = ['engravings', 'backgrounds'],
        ll = ['engraving', 'background'],
        ul = (e, t = Za.Small) => {
            const { name: n, type: s, value: r, icon: o, item: i, dogTagType: a } = e,
                l = t === Za.S24x24 ? Za.Small : t,
                u = ((e) => {
                    switch (e) {
                        case Za.S600x450:
                            return 'c_600x450';
                        case Za.S400x300:
                            return 'c_400x300';
                        case Za.S296x222:
                            return 'c_296x222';
                        case Za.S232x174:
                            return 'c_232x174';
                        case Za.Big:
                            return 'c_80x80';
                        case Za.Small:
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
                        const s = al[e];
                        if (s) {
                            const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(s),
                                o = r.$dyn(n);
                            return !o && ll[e] ? `${r.$dyn(ll[e])}` : `${o}`;
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
        cl = (e, t) => ({ args: e, contentId: t }),
        dl = [Za.Small, Za.Big],
        pl = {
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
        ml = h.resolve('images'),
        fl = new Map([
            [Za.S24x24, Za.Small],
            [Za.S48x48, Za.Small],
        ]),
        hl = ({
            name: t,
            image: n,
            isPeriodic: s = !1,
            isFixedBoxSize: r = !0,
            size: o = Za.Big,
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
            const g = fl.has(o) ? fl.get(o) : o,
                _ = ((e, t) => {
                    if (void 0 === t || !dl.includes(e)) return null;
                    switch (t) {
                        case Ja.BATTLE_BOOSTER:
                        case Ja.BATTLE_BOOSTER_REPLACE:
                            return el.BATTLE_BOOSTER;
                    }
                })(o, i),
                v = ((e) => {
                    if (void 0 === e) return null;
                    switch (e) {
                        case Ja.BATTLE_BOOSTER:
                            return tl.BATTLE_BOOSTER;
                        case Ja.BATTLE_BOOSTER_REPLACE:
                            return tl.BATTLE_BOOSTER_REPLACE;
                        case Ja.BUILT_IN_EQUIPMENT:
                            return tl.BUILT_IN_EQUIPMENT;
                        case Ja.EQUIPMENT_PLUS:
                            return tl.EQUIPMENT_PLUS;
                        case Ja.EQUIPMENT_TROPHY_BASIC:
                            return tl.EQUIPMENT_TROPHY_BASIC;
                        case Ja.EQUIPMENT_TROPHY_UPGRADED:
                            return tl.EQUIPMENT_TROPHY_UPGRADED;
                        case Ja.EQUIPMENT_MODERNIZED_UPGRADED_1:
                            return tl.EQUIPMENT_MODERNIZED_UPGRADED_1;
                        case Ja.EQUIPMENT_MODERNIZED_UPGRADED_2:
                            return tl.EQUIPMENT_MODERNIZED_UPGRADED_2;
                        case Ja.EQUIPMENT_MODERNIZED_UPGRADED_3:
                            return tl.EQUIPMENT_MODERNIZED_UPGRADED_3;
                        case Ja.PROGRESSION_STYLE_UPGRADED_1:
                            return tl.PROGRESSION_STYLE_UPGRADED_1;
                        case Ja.PROGRESSION_STYLE_UPGRADED_2:
                            return tl.PROGRESSION_STYLE_UPGRADED_2;
                        case Ja.PROGRESSION_STYLE_UPGRADED_3:
                            return tl.PROGRESSION_STYLE_UPGRADED_3;
                        case Ja.PROGRESSION_STYLE_UPGRADED_4:
                            return tl.PROGRESSION_STYLE_UPGRADED_4;
                        case Ja.PROGRESSION_STYLE_UPGRADED_5:
                            return tl.PROGRESSION_STYLE_UPGRADED_5;
                        case Ja.PROGRESSION_STYLE_UPGRADED_6:
                            return tl.PROGRESSION_STYLE_UPGRADED_6;
                    }
                })(i),
                b = ((e, t) => {
                    const n = h.resolve('intl');
                    if (void 0 === e) return null;
                    switch (t) {
                        case Ka.MULTI: {
                            const t = Number(e);
                            return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                        }
                        case Ka.CURRENCY:
                        case Ka.NUMBER:
                            return n.formatNumber(n.numberFormats[0] || 'integral', Number(e));
                        case Ka.PREMIUM_PLUS: {
                            const t = Number(e);
                            return isNaN(t) ? e : null;
                        }
                        default:
                            return e;
                    }
                })(a, l),
                y = Vr({
                    contentId: (null == m ? void 0 : m.contentId) ?? 0,
                    args: null == m ? void 0 : m.args,
                    resId: null == m ? void 0 : m.resId,
                    decoratorId: null == m ? void 0 : m.decoratorId,
                }),
                w = Gr({ header: null == f ? void 0 : f.header, body: null == f ? void 0 : f.body });
            return e.jsxs('div', {
                className: j(pl.base, pl[`base__${o}`], !r && pl.base__dynamicBox, d),
                style: c,
                ...y,
                children: [
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs('div', {
                                className: j(
                                    pl.image,
                                    r ? pl.image__fixedBox : pl[`image__${o}`],
                                    null == p ? void 0 : p.image,
                                ),
                                children: [
                                    _ &&
                                        e.jsx('div', {
                                            className: j(pl.highlight, null == p ? void 0 : p.highlight),
                                            style: {
                                                backgroundImage: `url(${ml.readOrEmpty(`quests.bonuses.${g}.${_}_highlight`)})`,
                                            },
                                        }),
                                    n &&
                                        e.jsx('div', {
                                            className: j(pl.icon, null == p ? void 0 : p.rewardIcon),
                                            style: { backgroundImage: `url(${n})` },
                                        }),
                                    v &&
                                        e.jsx('div', {
                                            className: j(pl.overlay, null == p ? void 0 : p.overlay),
                                            style: {
                                                backgroundImage: `url(${ml.readOrEmpty(`quests.bonuses.${g}.${v}_overlay`)})`,
                                            },
                                        }),
                                ],
                            }),
                            b &&
                                e.jsx('div', {
                                    className: j(
                                        pl.info,
                                        pl[`info__${t}`],
                                        l === Ka.MULTI && pl.info__multi,
                                        null == p ? void 0 : p.info,
                                    ),
                                    children: b,
                                }),
                            u && e.jsx('div', { className: pl.title, children: u }),
                        ],
                    }),
                    s && e.jsx('div', { className: j(pl.timer, null == p ? void 0 : p.periodicIcon), ...w }),
                ],
            });
        },
        gl = Object.fromEntries(Object.entries(ci).map(([e]) => [e, (e) => e]));
    const _l = 'RewardsList_b956755b',
        vl = 'RewardsList_base__vertical_59db3c9f',
        bl = 'RewardsList_reward_fc200613',
        yl = 'RewardsList_reward__vertical_5f09c6e0',
        wl = 'RewardsList_boxRewardClassName_882c908d',
        xl = { [Za.S24x24]: Za.Small, [Za.S48x48]: Za.Small },
        Rl = s.memo(function ({
            data: t,
            isFixedBoxSize: n,
            size: s = Za.Big,
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
                        ? `${m.readOrEmpty(`quests.bonuses.${xl[s] ?? s}.default`)}`
                        : void 0,
                g =
                    u ||
                    (function (e, t = {}) {
                        const n = ni(e, xi);
                        return String(_i(n, gl, t));
                    })(wi(p.readOrEmpty('tooltips.quests.awards.additional.bottom')), { count: t.length - (o || 0) });
            return e.jsx('div', {
                className: j(_l, r && vl, i),
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
                                                  className: j(bl, r && yl, a),
                                                  children: e.jsx(hl, { size: s, isFixedBoxSize: n, ...t }),
                                              },
                                              o,
                                          ),
                                      ),
                                  e.jsx('div', {
                                      className: j(bl, r && yl, a),
                                      children: e.jsx(hl, {
                                          name: 'more',
                                          isFixedBoxSize: n,
                                          image: f,
                                          size: s,
                                          value: g,
                                          tooltipArgs: l,
                                          className: j(wl, c),
                                          classNames: d,
                                      }),
                                  }),
                              ],
                          })
                        : t.map((t, o) =>
                              e.jsx(
                                  'div',
                                  {
                                      className: j(bl, r && yl, a),
                                      children: e.jsx(hl, { size: s, isFixedBoxSize: n, ...t }),
                                  },
                                  o,
                              ),
                          ),
            });
        });
    function El({ bonuses: t, size: n, resId: r, boxRewardTooltipArgs: o, maxRewardsCount: i, questId: a, ...l }) {
        const u = s.useMemo(
                () =>
                    de(t, (e) => ({
                        size: n,
                        name: e.name,
                        image: ul(e, n),
                        value: e.value,
                        valueType: il(e.name),
                        tooltipArgs: {
                            ...cl(
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
        return e.jsx(Rl, { ...l, data: u, count: c, boxRewardTooltip: d, size: n });
    }
    const Cl = 'AnimatedRewards_glowContainer_82630782',
        Pl = 'AnimatedRewards_c981a355',
        Sl = 'AnimatedRewards_rewardsWrapper_11b576b3',
        kl = 'AnimatedRewards_glow_3a2cd010',
        Tl = 'AnimatedRewards_glowImage_4ecce597',
        Nl = M.cubicBezier(0.33, 0, 0.67, 1),
        Il = M.cubicBezier(0.23, 0, 0.57, 1),
        Al = s.forwardRef(function (
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
            const d = br(),
                [p] = _r(() => ({
                    ref: t,
                    from: { opacity: 0, scale: 0.6 },
                    to: async (e) => {
                        (await e({ opacity: 1, scale: 0.8, config: { duration: 330, easing: Nl } }),
                            d.start(),
                            await e({ opacity: 0, scale: 1, config: { duration: 330, easing: Nl } }));
                    },
                })),
                [m] = _r(() => ({
                    ref: d,
                    immediate: n,
                    from: { opacity: 1 },
                    to: { opacity: 0.4, config: { duration: 330, easing: Il } },
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
                    className: j(Pl, a),
                    children: [
                        e.jsx(Fr.div, {
                            style: m,
                            className: j(Sl, null == l ? void 0 : l.rewardsWrapper),
                            children: e.jsx(El, { ...u, maxRewardsCount: r, bonuses: o, boxRewardTooltipArgs: i }),
                        }),
                        e.jsx('div', {
                            className: j(Cl, null == l ? void 0 : l.glowContainer),
                            children: ge(r ? Math.min(r, o.length) : o.length, (t) =>
                                e.jsx(
                                    Fr.div,
                                    {
                                        style: p,
                                        className: kl,
                                        children: e.jsx(
                                            Eo,
                                            { path: 'post_battle.progression.reward_glow', className: Tl },
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
        jl = h.resolve('views');
    function Ml({ limit: e, rewardsTooltipResId: t, ...n }) {
        return {
            contentId: jl.read((e) => e.lobby.tooltips.AdditionalBattlePassRewardsTooltip('resId')),
            args: { showFromIndex: e - 1, ...n },
            resId: t,
        };
    }
    function Dl({
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
            size: Za.Small,
            resId: o,
            boxRewardTooltipArgs: Ml({
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
            ? e.jsx(Al, {
                  ...m,
                  animationRef: n,
                  immediateAnimation: i,
                  className: d,
                  classNames: { glowContainer: d },
              })
            : e.jsx(El, { ...m, classMix: d });
    }
    const Ol = 'CompletedMark_fc4eee08',
        Bl = 'CompletedMark_glow_33775180',
        $l = M.cubicBezier(1, 0, 0.95, 1),
        Fl = M.cubicBezier(0.45, 0, 0.52, 1),
        Ll = s.forwardRef(function (
            {
                target: t,
                animationRef: n,
                className: r,
                path: o,
                width: a,
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
                _ = Xr(),
                v = i.useAdaptive(
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
                [b, y] = _r(() => ({ from: { opacity: 0 } })),
                [w] = _r(() => {
                    var e, s;
                    return {
                        ref: n,
                        from: { maskSize: '0% 100%', opacity: 0 },
                        to: [
                            {
                                maskSize: '40% 80%',
                                opacity: 0.5,
                                config: { duration: 100, easing: $l },
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
                                config: { duration: 100, easing: $l },
                                immediate: null == (s = g.current) ? void 0 : s.immediate,
                            },
                        ],
                        onRest: () => {
                            y.start({
                                to: [
                                    { opacity: 0.6, config: { duration: 160, easing: Fl } },
                                    { opacity: 0, config: { duration: 160, easing: Fl } },
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
                    className: j(Ol, r),
                    children: [
                        e.jsx(Fr.div, {
                            style: b,
                            className: j(Bl, null == p ? void 0 : p.glow),
                            children: e.jsx(Eo, {
                                width: (null == u ? void 0 : u.width) ?? v.glow.width,
                                height: (null == u ? void 0 : u.height) ?? v.glow.height,
                                path: (null == u ? void 0 : u.path) ?? v.glow.path,
                            }),
                        }),
                        e.jsx(Fr.div, {
                            ...f,
                            style: { ...w, ...d },
                            ref: h,
                            className: null == p ? void 0 : p.icon,
                            children: e.jsx(Eo, {
                                width: a ?? v.icon.width,
                                height: l ?? v.icon.height,
                                path: o ?? v.icon.path,
                            }),
                        }),
                    ],
                })
            );
        });
    function Ul({ value: t, questType: n, className: s }) {
        return t
            ? e.jsx('div', {
                  className: j(Qa.iconImage, Qa.iconImage__regular, n === nt.PREMIUM && Qa.iconImage__gold, s),
                  style: { backgroundImage: `url(${t})` },
              })
            : null;
    }
    s.forwardRef(function ({ path: t, width: n, height: s, ...r }, o) {
        const a = i.useAdaptive(
            { size: 24, path: 'post_battle.progression.done_24x24' },
            { large: { size: 32, path: 'post_battle.progression.done_32x32' } },
        );
        return e.jsx(Eo, { ...r, ref: o, width: n ?? a.size, height: s ?? a.size, path: t ?? a.path });
    });
    const ql = (e) =>
            f.createElement(
                'svg',
                { width: 13, height: 7, viewBox: '0 0 13 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
                f.createElement('path', { d: 'M9 7L13 3.49026L9 0V2.98374L0 3V4H9V7Z', fill: '#454443' }),
            ),
        zl = h.resolve('strings');
    function Vl(t) {
        return 'none' === t.type
            ? e.jsx('div', { className: j(Qa.separator, Qa.separator__none, t.className) })
            : 'union' === t.type
              ? e.jsx('div', { className: j(Qa.separator, Qa.separator__union, t.className) })
              : 'or' === t.type
                ? e.jsxs('div', {
                      className: j(Qa.separator, Qa.separator__or, t.className),
                      children: [
                          e.jsx(ql, { width: 16, height: 16, className: Qa.invertedArrow }),
                          zl.readOrEmpty('battle_results.conditions.type.or'),
                          e.jsx(ql, { width: 16, height: 16, className: Qa.arrow }),
                      ],
                  })
                : e.jsx('div', {
                      className: j(Qa.separator, Qa.separator__and, t.className),
                      children: zl.readOrEmpty('battle_results.conditions.type.and'),
                  });
    }
    function Gl(t) {
        if (!t.children) return null;
        const n = s.Children.toArray(t.children);
        return e.jsx(e.Fragment, {
            children: pe(
                n,
                (e) => null != e,
                (n, r) => e.jsxs(s.Fragment, { children: [r > 0 && e.jsx(Vl, { ...t }), n] }, r),
            ),
        });
    }
    const Ql = { 1: 5, 2: 5, 3: 3 };
    function Hl(e) {
        return 'item' === e.type ? 1 : e.groups.reduce((e, t) => e + Hl(t), 0);
    }
    function Wl(e) {
        var t;
        if ('item' === e.type) return null == (t = e.condition) ? void 0 : t.icon;
        for (const n of e.groups) {
            const e = Wl(n);
            if (e) return e;
        }
    }
    function Yl(t) {
        const n = t.value;
        return 'item' === n.type
            ? e.jsx(
                  Ya.Condition,
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
            : e.jsx(Gl, {
                  type: n.separate,
                  children: pe(
                      n.groups,
                      (e) => 'items' === e.type || e.index < 5,
                      (s, r) =>
                          e.jsx(
                              Yl,
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
    const Xl = 'R.images.gui.maps.icons.post_battle.general_quest',
        Zl = { default: { path: `${Xl}_32` }, medium: { path: Xl } },
        Kl = s.memo(function (t) {
            const n = br(),
                r = br(),
                { animation: o, immediateAnimation: a } = Ga(),
                { icon: l, questsAmount: u } = s.useMemo(() => {
                    const e = Hl(t.value);
                    return { icon: e > 1 ? (t.generalIcon ?? Zl) : (Wl(t.value) ?? Zl), questsAmount: e };
                }, [t.generalIcon, t.value]),
                c = i.useAdaptive(l.default, l),
                d = Ql[u] ?? 0,
                p = u > 3 ? 'groups__manyQuests' : 3 === u ? 'groups__threeQuests' : 'groups__twoQuests';
            return e.jsxs('div', {
                className: j(Qa.groups, u > 4 && Qa.groups__overflow, u > 1 && Qa[p]),
                children: [
                    e.jsx('div', {
                        className: Qa.iconContainer,
                        children: t.completed
                            ? e.jsx(Ll, {
                                  animationRef: n,
                                  className: Qa.completedMark,
                                  classNames: { icon: Qa.completedMarkIcon },
                                  springProps: { immediate: a, delay: 170 },
                              })
                            : e.jsx(Ul, { value: c.path, questType: t.questType }),
                    }),
                    e.jsx('div', {
                        className: Qa.questsWithRewards,
                        children: e.jsxs(Gl, {
                            type: t.separate ?? 'none',
                            children: [
                                e.jsx('div', {
                                    className: Qa.questsContainer,
                                    children: e.jsx(Yl, {
                                        value: t.value,
                                        completed: t.completed,
                                        questsAmount: u,
                                        guiDisabledDescription: t.guiDisabledDescription,
                                        rewardsGlowRef: r,
                                        completedMarkRef: n,
                                        progressBarTarget: t.progressBarTarget,
                                        animation: a || o,
                                    }),
                                }),
                                d > 1 &&
                                    e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx('div', { className: Qa.gap }),
                                            e.jsx('div', {
                                                className: Qa.rewardsContainer,
                                                children: e.jsx(Dl, {
                                                    completed: t.completed,
                                                    rewardsGlowRef: r,
                                                    immediateAnimation: a,
                                                    bonuses: t.bonuses,
                                                    maxRewardsCount: d,
                                                    rewardsTooltipResId: t.rewardsTooltipResId,
                                                    questId: t.questId,
                                                    className: Qa.rewards,
                                                    rewardItemClassName: Qa.reward,
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
    function Jl({ completed: t, progress: n, animation: r, immediateAnimation: o, target: i, ...a }) {
        const l = Xr(),
            u = s.useMemo(() => ({ completed: t, animation: r, immediateAnimation: o }), [t, r, o]);
        return e.jsx(Va.Provider, {
            value: u,
            children: e.jsx(Bi, {
                ...a,
                onMouseEnter: (e) => {
                    var t;
                    (null == (t = a.onMouseEnter) || t.call(a, e),
                        !0 !== a.disabled &&
                            l.play('mouse-enter', { target: i || 'mission-progress:mission-card', original: e }));
                },
                progressionCountProps: n,
                className: j(Qa.base, t && Qa.base__completed, a.className),
                classNames: { content: Qa.cardContent, ...a.classNames },
            }),
        });
    }
    ((Jl.Content = Ya), (Jl.Groups = Kl), (Jl.Separators = Gl));
    const eu = 'DailyQuests_divider_ac8bb1b5',
        tu = h.resolve('strings'),
        nu = a.observer(function ({ target: t, animation: n, immediateAnimation: r }) {
            const { model: o, controls: i } = yo(),
                a = Xr();
            return e.jsx(Jl, {
                target: t,
                title: tu.readOrEmpty('user_missions.hub.basic_missions.daily.title'),
                onButtonAction: i.navigate,
                onClick: function (e) {
                    (a.play('click', { target: t, original: e }), i.navigate());
                },
                animation: n,
                immediateAnimation: r,
                actionTooltipParams: { body: tu.readOrEmpty('battle_results.progression.linkBtn.info') },
                children: e.jsx('div', {
                    children: de(o.quests(), (t, n, r) =>
                        e.jsxs(
                            s.Fragment,
                            {
                                children: [
                                    e.jsx(Jl.Groups, { ...t }),
                                    r.length - 1 !== n && e.jsx(Po, { classNames: { base: eu } }),
                                ],
                            },
                            t.questId,
                        ),
                    ),
                }),
            });
        });
    function su(e) {
        for (let t = 0; t < document.styleSheets.length; t++) {
            const n = document.styleSheets.item(t);
            if (n.ownerNode === e) return n;
        }
    }
    function ru(e) {
        for (let t = 0; t < e.cssRules.length; t++) e.deleteRule(t);
    }
    function ou(e) {
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
                          const n = su(t);
                          if (!n) throw new Error(`Can't find sheets for ${t}`);
                          (ru(n),
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
                        const n = su(t);
                        if (!n) return console.error(`Can't find sheets for ${t.id} (${e}). Clean rules skipped.`);
                        ru(n);
                    })(e, t);
                }),
            { promise: s, link: t, cleanup: o.dispose }
        );
    }
    function iu(t) {
        return e.jsx(e.Fragment, { children: t.children });
    }
    const au = [nt.EASY, nt.MEDIUM, nt.HARD],
        lu = new (class {
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
            .addWithProps(bo, { options: po })
            .addWithProps(
                function (t) {
                    return e.jsx(iu, {
                        children: e.jsx(Yr, {
                            overrides: t.soundsOverrides,
                            severity: t.soundSeverity,
                            silent: t.soundsOff,
                            children: t.children,
                        }),
                    });
                },
                {
                    soundsOverrides:
                        ((uu = {
                            showCheckMark: { 'mission-progress:checkmark': 'umg_hub_quest_complete' },
                            numbersShown: {
                                'mission-progress:received-value': 'gui_pbs_missions_progress_stats',
                                'mission-progress:progress-stats': 'gui_pbs_missions_progress_stats',
                            },
                        }),
                        Object.entries(uu).reduce(
                            (e, [t, n]) => (
                                (e[t] = (e) => {
                                    var s;
                                    e && e.target in n ? z.sound(n[e.target]) : null == (s = Qr[t]) || s.call(Qr, e);
                                }),
                                e
                            ),
                            {},
                        )),
                },
            );
    var uu, cu;
    function du(t) {
        return lu.render(e.jsx(nu, { target: 'mission-progress:daily-quests', ...t }));
    }
    exports.plugin =
        ((cu = async ({ url: t }) => {
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
                        const u = ou(
                            `${(function (e, t = '/') {
                                let n = -1;
                                for (let s = 0; s < e.length; s++) {
                                    const r = e[s];
                                    if ((r === t && (n = s), '.' === r)) return e.slice(0, n);
                                }
                                return e;
                            })(t)}/daily_quests.css`,
                        );
                        (n.add(u.cleanup), await u.promise.catch(console.error));
                        const p = ee(po, { name: 'DailyQuestsProgressDataLayer' }),
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
                                []),
                            f = p.readByPath('dailyQuests'),
                            {
                                daily: h,
                                premium: g,
                                epic: _,
                            } = (function (e, t, n) {
                                if (Array.isArray(e)) return e.reduce(t, n);
                                let s = n;
                                for (let r = 0; r < e.length; r++) s = t(s, ce(e, r), r, e);
                                return s;
                            })(
                                f,
                                (e, t) => (
                                    t.status !== Te.Done ||
                                        (au.includes(t.level)
                                            ? (e.daily = !0)
                                            : t.level === nt.PREMIUM
                                              ? (e.premium = !0)
                                              : t.level === nt.EPIC && (e.epic = !0)),
                                    e
                                ),
                                { daily: !1, premium: !1, epic: !1 },
                            );
                        return (
                            _ &&
                                m.push({
                                    id: xe(),
                                    item: e.jsx(Ei, { path: 'battle_results.missionsProgress.notificationsTabs.epic' }),
                                }),
                            g &&
                                m.push({
                                    id: xe(),
                                    item: e.jsx(Ei, {
                                        path: 'battle_results.missionsProgress.notificationsTabs.premium',
                                    }),
                                }),
                            h &&
                                m.push({
                                    id: xe(),
                                    item: e.jsx(Ei, {
                                        path: 'battle_results.missionsProgress.notificationsTabs.daily',
                                    }),
                                }),
                            {
                                notifications: m,
                                animated: !0,
                                component: du,
                                categoryOrder: 800,
                                completed: h || g || _,
                            }
                        );
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
        async (e) => ({ ...(await cu(e)), id: e.id }));
});

export default exports;
