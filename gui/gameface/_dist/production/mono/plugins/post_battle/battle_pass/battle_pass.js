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
})(this, function (e, t, s, n, r, a, i, o) {
    'use strict';
    var l,
        c = Object.defineProperty,
        u = (e, t) => ((t = Symbol[e]) ? t : Symbol.for('Symbol.' + e)),
        d = (e) => {
            throw TypeError(e);
        },
        p = (e, t, s) =>
            ((e, t, s) =>
                t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s))(
                e,
                'symbol' != typeof t ? t + '' : t,
                s,
            );
    function m(e) {
        const t = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
        if (e)
            for (const s in e)
                if ('default' !== s) {
                    const n = Object.getOwnPropertyDescriptor(e, s);
                    Object.defineProperty(t, s, n.get ? n : { enumerable: !0, get: () => e[s] });
                }
        return ((t.default = e), Object.freeze(t));
    }
    const h = m(n),
        f = t.createContainer();
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
        readOr(e, t, s = 'silent') {
            const n = e.startsWith('R.images') ? e : g(this.prefix, e),
                r = (function (e, t) {
                    const s = t.split('.');
                    if (window.R && window.R.images) {
                        const t = s[s.length - 1];
                        if (!t) return;
                        const n = s.slice(0, -1).reduce((e, t) => {
                            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
                        }, e);
                        if (!n) return;
                        return 'function' == typeof n[t] ? n[t]() : void 0;
                    }
                    throw new Error('R class with images field is not defined');
                })(e.startsWith('R.images') ? window : this.root, n);
            return void 0 === r ? ('silent' !== s && _(`Resource not found: ${n}`, s), t()) : r;
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
    const P = { full: v.FullTime, short: v.ShortTime };
    const S = {
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
        formatReal: function (e, t, s = 2) {
            return window.formatters.getRealFormat(t, w[e], s);
        },
        realFormats: E,
        formatDateTime: function (e, t, s = !0) {
            return window.regionalDateTime.getRegionalDateTime(t, e, s);
        },
        dateTimeFormats: v,
        formatTime: function (e, t, s = !0) {
            return window.regionalDateTime.getRegionalDateTime(t, e, s);
        },
        timeFormats: Object.keys(P),
        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
    };
    function T(e, t, s) {
        const n = e.split('.');
        if (window.R && window.R.strings) {
            const e = n[n.length - 1];
            if (!e) return;
            const r = n.slice(0, -1).reduce((e, t) => {
                if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
            }, s);
            if (!r) return;
            return 'function' == typeof r[e] ? (t ? r[e](t) : r[e]()) : void 0;
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
        readOr(e, t, s = 'silent') {
            const n = e.startsWith('R.strings') ? e : g(this.prefix, e),
                r = T(n, void 0, e.startsWith('R.strings') ? window : this.root);
            return void 0 === r ? ('silent' !== s && _(`Resource not found: ${n}`, s), t()) : r;
        }
        readOrEmpty(e, t = 'warn') {
            return this.readOr(e, () => '', t);
        }
        readOrThrow(e) {
            const t = e.startsWith('R.strings') ? e : g(this.prefix, e),
                s = T(t, void 0, e.startsWith('R.strings') ? window : this.root);
            if (void 0 === s) throw new Error(`Resource not found: ${t}`);
            return s;
        }
        plural(e, t) {
            return this.pluralOr(e, t, () => {});
        }
        pluralOr(e, t, s, n = 'silent') {
            const r = e.startsWith('R.strings') ? e : g(this.prefix, e),
                a = T(r, t, e.startsWith('R.strings') ? window : this.root);
            return void 0 === a ? ('silent' !== n && _(`Resource not found: ${r}`, n), s()) : a;
        }
        pluralOrEmpty(e, t, s = 'warn') {
            return this.pluralOr(e, t, () => '', s);
        }
    }
    class N {
        constructor(e = window.R.videos, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, s = 'silent') {
            const n = e.startsWith('R.videos') ? e : g(this.prefix, e),
                r = (function (e, t) {
                    const s = t.split('.');
                    if (window.R && window.R.videos) {
                        const t = s[s.length - 1];
                        if (!t) return;
                        const n = s.slice(0, -1).reduce((e, t) => {
                            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
                        }, e);
                        if (!n) return;
                        return 'function' == typeof n[t] ? n[t]() : void 0;
                    }
                    throw new Error('R class with videos field is not defined');
                })(e.startsWith('R.videos') ? window : this.root, n);
            return void 0 === r ? ('silent' !== s && _(`Resource not found: ${e}`, s), t()) : r;
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
    function A(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    f.register({
        strings: t.asFunction(() => new C()).singleton(),
        images: t.asFunction(() => new b(window.R.images.gui.maps.icons)).singleton(),
        atlases: t.asFunction(() => new b(window.R.atlases)).singleton(),
        videos: t.asFunction(() => new N(window.R.videos)).singleton(),
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
        intl: t.asValue(S),
    });
    var k,
        I = { exports: {} };
    /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */ ((k = I),
        (function () {
            var e = {}.hasOwnProperty;
            function t() {
                for (var s = [], n = 0; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (r) {
                        var a = typeof r;
                        if ('string' === a || 'number' === a) s.push(r);
                        else if (Array.isArray(r)) {
                            if (r.length) {
                                var i = t.apply(null, r);
                                i && s.push(i);
                            }
                        } else if ('object' === a) {
                            if (
                                r.toString !== Object.prototype.toString &&
                                !r.toString.toString().includes('[native code]')
                            ) {
                                s.push(r.toString());
                                continue;
                            }
                            for (var o in r) e.call(r, o) && r[o] && s.push(o);
                        }
                    }
                }
                return s.join(' ');
            }
            k.exports ? ((t.default = t), (k.exports = t)) : (window.classNames = t);
        })());
    const j = A(I.exports),
        D = {
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
                    s = Math.pow;
                return e < 0.5 ? (1 - t(1 - s(2 * e, 2))) / 2 : (t(1 - s(-2 * e + 2, 2)) + 1) / 2;
            },
            reverseEaseInOutCirc: (e) => 1 - D.easeInOutCirc(1 - e),
            easeOutBack(e) {
                const t = 1.70158;
                return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
            },
            bezier: (e, t, s, n) => (r) =>
                (1 - r) * (1 - r) * (1 - r) * e +
                3 * (1 - r) * (1 - r) * r * t +
                3 * (1 - r) * r * r * s +
                r * r * r * n,
            cubicBezier: (e, t, s, n) => (r) => {
                const a = (function (e, t, s, n = 1e-5) {
                    let r = e;
                    for (let a = 0; a < 8; a++) {
                        const a = O(r, t, s) - e;
                        if (Math.abs(a) < n) return r;
                        const i = M(r, t, s);
                        if (Math.abs(i) < n) break;
                        r -= a / i;
                    }
                    return r;
                })(r, e, s);
                return 3 * t * (1 - a) ** 2 * a + 3 * n * (1 - a) * a ** 2 + a ** 3;
            },
        };
    function O(e, t, s) {
        return 3 * t * (1 - e) ** 2 * e + 3 * s * (1 - e) * e ** 2 + e ** 3;
    }
    function M(e, t, s) {
        return 9 * t * (1 - e) ** 2 + 6 * (s - t) * (1 - e) * e + 3 * (1 - s) * e ** 2;
    }
    function B(e) {
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
    const $ = { down: B('mousedown'), up: B('mouseup'), move: B('mousemove') };
    function L(e) {
        engine.call('PlaySound', e);
    }
    !(function () {
        const e = { listeners: 0, enabled: !0, initialized: !1 };
        function t() {
            e.enabled && F(!1);
        }
        function s() {
            e.enabled && F(!0);
        }
        function n() {
            e.enabled
                ? e.listeners < 1
                    ? ((e.initialized = !1),
                      document.body.removeEventListener('mouseenter', t),
                      document.body.removeEventListener('mouseleave', s),
                      F(!1))
                    : e.initialized ||
                      ((e.initialized = !0),
                      document.body.addEventListener('mouseenter', t),
                      document.body.addEventListener('mouseleave', s))
                : F(!1);
        }
        ['down', 'up', 'move'].reduce(
            (t, s) => (
                (t[s] = (function (t) {
                    return (s) => {
                        e.listeners += 1;
                        const r = `mouse${t}`,
                            a = $[t]((e) => s([e, 'outside']));
                        function i(e) {
                            s([e, 'inside']);
                        }
                        return (
                            window.addEventListener(r, i),
                            n(),
                            () => {
                                (a(), window.removeEventListener(r, i), (e.listeners -= 1), n());
                            }
                        );
                    };
                })(s)),
                t
            ),
            {},
        );
    })();
    const z = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
        U = { ...Object.keys(z).reduce((e, t) => ((e[t] = () => L(z[t])), e), {}), sound: L },
        q = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
        V = {
            onTextureFrozen: B('self.onTextureFrozen'),
            onTextureReady: B('self.onTextureReady'),
            onDomBuilt: B('self.onDomBuilt'),
            onLoaded: B('self.onLoaded'),
            onHitTest: (() => {
                const e = new Set(),
                    t = (t, s) => {
                        for (const n of e.values())
                            if (n(t)) {
                                s.value = !1;
                                break;
                            }
                    };
                return (s) => (
                    e.add(s),
                    1 === e.size && (viewEnv.setHitTestEnabled(!0), engine.on('self.onHitTest', t)),
                    () => {
                        (e.delete(s), 0 === e.size && (viewEnv.setHitTestEnabled(!1), engine.off('self.onHitTest', t)));
                    }
                );
            })(),
            onDisplayChanged: B('self.onShowingStatusChanged'),
            onFocusUpdated: B('self.onFocusChanged'),
            onExternalPaddingsUpdated: B('self.onPaddingsUpdated'),
            children: {
                onAdded: B('children.onAdded'),
                onLoaded: B('children.onLoaded'),
                onRemoved: B('children.onRemoved'),
                onAttached: B('children.onAttached'),
                onTextureReady: B('children.onTextureReady'),
                onRequestPosition: B('children.requestPosition'),
            },
        },
        G = 1;
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
    const Q = (e) => {
            const t = [];
            for (const [s, n] of Object.entries(e)) {
                const e = H(n);
                void 0 !== e && t.push({ __Type: 'GFValueProxy', name: s, ...e });
            }
            return t;
        },
        W = (e, t) => {
            const s = 'GFViewEventProxy';
            if (void 0 !== t) {
                const { args: n, ...r } = t;
                return void 0 !== n
                    ? viewEnv.handleViewEvent({ __Type: s, type: e, ...r, arguments: Q(n) })
                    : viewEnv.handleViewEvent({ __Type: s, type: e, ...r });
            }
            return viewEnv.handleViewEvent({ __Type: s, type: e });
        },
        Y = new Map(),
        X = {
            tooltip: {
                open(e, t, s = 0, n) {
                    (W(G, { contentID: t, decoratorID: s, targetID: e, isMouseEvent: !0, on: !0, args: n }),
                        Y.set(`${e}-${t}`, { targetID: e, contentID: t }));
                },
                hide(e, t, s = 0) {
                    (W(G, { contentID: t, decoratorID: s, targetID: e, on: !1 }), Y.delete(`${e}-${t}`));
                },
                hideAll() {
                    const e = Array.from(Y.values());
                    for (const t of e) this.hide(t.targetID, t.contentID);
                },
            },
        };
    Object.keys(q).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === q[t]), e), {});
    class Z {
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
    const K = (e) => (0 === e ? window : window.subViews.get(e));
    function J(
        { initializer: e = !0, rootId: t = 0, getRoot: s = K, context: n = 'model' } = {},
        { name: r = 'DataLayer' } = {},
    ) {
        const a = new Map(),
            i = { subscribersNotified: new Z() },
            o = engine.whenReady.then(() => {
                function e(e, t, s) {
                    (s.forEach((s) => {
                        const n = a.get(s);
                        void 0 !== n && n(e, t);
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
                const e = s(t);
                return n.split('.').reduce((e, t) => e[t], e);
            } catch (e) {
                throw new Error(`Failure get root of ${r}. Root id: ${t}. Context: ${n}`);
            }
        }
        const c = (e) => {
            const s = l();
            if ('string' != typeof e || 0 === e.length) return s;
            try {
                return e.split('.').reduce((e, t) => {
                    if (!(t in e)) throw new Error(`Key "${t}" doesn't exists in part of model`);
                    const s = e[t];
                    return 'function' == typeof s ? s.bind(e) : s;
                }, s);
            } catch (a) {
                throw new Error(`Failure readByPath in ${r}. Root id: ${t}. Context: ${n}:\n${a}\n`);
            }
        };
        function u(e) {
            viewEnv.removeDataChangedCallback(e, t) ? a.delete(e) : console.error("Can't remove callback by id:", e);
        }
        return {
            subscribe: (s, r) => {
                const i = (function (e, t, s) {
                    return viewEnv.addDataChangedCallback(e, t, s);
                })('string' == typeof r ? `${n}.${r}` : n, t, !0);
                return (a.set(i, s), e && s(c(r), []), i);
            },
            readByPath: c,
            readSafeByPath: (e) => {
                const t = l();
                return 'string' != typeof e || 0 === e.length
                    ? t
                    : e.split('.').reduce((e, t) => {
                          const s = null == e ? void 0 : e[t];
                          return 'function' == typeof s ? s.bind(e) : s;
                      }, t);
            },
            createCallback: (e, t) => {
                const s = c(t);
                return (...t) => {
                    s(e(...t));
                };
            },
            createCallbackNoArgs: (e) => {
                const t = c(e);
                return () => {
                    t();
                };
            },
            dispose: function () {
                if (0 === t || window.subViews.ids().includes(t)) for (const e of a.keys()) u(e);
                o.then((e) => e());
            },
            unsubscribe: u,
            events: i,
        };
    }
    function ee(e, t) {
        return t
            ? (function (e, t) {
                  if (!t) return e;
                  const s = (function (e) {
                      return e.startsWith('model') ? e.split('.').slice(1).join('.') : e;
                  })(t);
                  return e ? (0 === s.length ? e : `${s}.${e}`) : s;
              })(e, t.context)
            : e;
    }
    function te() {}
    function se(e) {
        return e;
    }
    function ne() {
        return !1;
    }
    function re() {
        throw new Error('Unreachable absurd brach');
    }
    class ae {
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
    function ie(e, t, s, n) {
        return (e.addEventListener(t, s, n), () => e.removeEventListener(t, s, n));
    }
    ('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
        'symbol' != typeof Symbol.asyncDispose &&
            Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
        (function () {
            if (!self.fetch) {
                ((i.prototype.append = function (e, t) {
                    ((e = r(e)), (t = a(t)));
                    var s = this.map[e];
                    (s || ((s = []), (this.map[e] = s)), s.push(t));
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
                        this.map[r(e)] = [a(t)];
                    }),
                    (i.prototype.forEach = function (e) {
                        var t = this;
                        Object.getOwnPropertyNames(this.map).forEach(function (s) {
                            e(s, t.map[s]);
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
                    s = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'],
                    n = !(
                        'undefined' == typeof window ||
                        !window.ActiveXObject ||
                        (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
                    );
                (u.call(d.prototype),
                    u.call(h.prototype),
                    (self.Headers = i),
                    (self.Request = d),
                    (self.Response = h),
                    (self.fetch = function (t, s) {
                        var r;
                        return (
                            (r = d.prototype.isPrototypeOf(t) && !s ? t : new d(t, s)),
                            new fetch.Promise(function (t, s) {
                                var a = (function () {
                                    return n && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                        ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                        : new XMLHttpRequest();
                                })();
                                function i() {
                                    if (4 === a.readyState) {
                                        var e = 1223 === a.status ? 204 : a.status;
                                        if (e < 100 || e > 599) s(new TypeError('Network request failed'));
                                        else {
                                            var n = {
                                                    status: e,
                                                    statusText: a.statusText,
                                                    headers: m(a),
                                                    url:
                                                        'responseURL' in a
                                                            ? a.responseURL
                                                            : /^X-Request-URL:/m.test(a.getAllResponseHeaders())
                                                              ? a.getResponseHeader('X-Request-URL')
                                                              : void 0,
                                                },
                                                r = 'response' in a ? a.response : a.responseText;
                                            t(new h(r, n));
                                        }
                                    }
                                }
                                ('cors' === r.credentials && (a.withCredentials = !0),
                                    (a.onreadystatechange = i),
                                    self.usingActiveXhr ||
                                        ((a.onload = i),
                                        (a.onerror = function () {
                                            s(new TypeError('Network request failed'));
                                        })),
                                    a.open(r.method, r.url, !0),
                                    'responseType' in a && e && (a.responseType = 'blob'),
                                    r.headers.forEach(function (e, t) {
                                        t.forEach(function (t) {
                                            a.setRequestHeader(e, t);
                                        });
                                    }),
                                    a.send(void 0 === r._bodyInit ? null : r._bodyInit));
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
            function a(e) {
                return ('string' != typeof e && (e = e.toString()), e);
            }
            function i(e) {
                this.map = {};
                var t = this;
                e instanceof i
                    ? e.forEach(function (e, s) {
                          s.forEach(function (s) {
                              t.append(e, s);
                          });
                      })
                    : e &&
                      Object.getOwnPropertyNames(e).forEach(function (s) {
                          t.append(s, e[s]);
                      });
            }
            function o(e) {
                if (e.bodyUsed) return fetch.Promise.reject(new TypeError('Already read'));
                e.bodyUsed = !0;
            }
            function l(e) {
                return new fetch.Promise(function (t, s) {
                    ((e.onload = function () {
                        t(e.result);
                    }),
                        (e.onerror = function () {
                            s(e.error);
                        }));
                });
            }
            function c(e) {
                var t = new FileReader();
                return (t.readAsArrayBuffer(e), l(t));
            }
            function u() {
                return (
                    (this.bodyUsed = !1),
                    (this._initBody = function (s) {
                        if (((this._bodyInit = s), 'string' == typeof s)) this._bodyText = s;
                        else if (e && Blob.prototype.isPrototypeOf(s)) this._bodyBlob = s;
                        else if (t && FormData.prototype.isPrototypeOf(s)) this._bodyFormData = s;
                        else {
                            if (s) throw new Error('unsupported BodyInit type');
                            this._bodyText = '';
                        }
                    }),
                    e
                        ? ((this.blob = function () {
                              var e = o(this);
                              if (e) return e;
                              if (this._bodyBlob) return fetch.Promise.resolve(this._bodyBlob);
                              if (this._bodyFormData) throw new Error('could not read FormData body as blob');
                              return fetch.Promise.resolve(new Blob([this._bodyText]));
                          }),
                          (this.arrayBuffer = function () {
                              return this.blob().then(c);
                          }),
                          (this.text = function () {
                              var e,
                                  t,
                                  s = o(this);
                              if (s) return s;
                              if (this._bodyBlob)
                                  return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), l(t));
                              if (this._bodyFormData) throw new Error('could not read FormData body as text');
                              return fetch.Promise.resolve(this._bodyText);
                          }))
                        : (this.text = function () {
                              var e = o(this);
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
                var n, r;
                if (
                    ((t = t || {}),
                    (this.url = e),
                    (this.credentials = t.credentials || 'omit'),
                    (this.headers = new i(t.headers)),
                    (this.method = ((n = t.method || 'GET'), (r = n.toUpperCase()), s.indexOf(r) > -1 ? r : n)),
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
                                var s = e.split('='),
                                    n = s.shift().replace(/\+/g, ' '),
                                    r = s.join('=').replace(/\+/g, ' ');
                                t.append(decodeURIComponent(n), decodeURIComponent(r));
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
                            var s = e.trim().split(':'),
                                n = s.shift().trim(),
                                r = s.join(':').trim();
                            t.append(n, r);
                        }),
                    t
                );
            }
            function h(e, t) {
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
    const oe = fetch;
    function le(e, t) {
        return e.reduce((e, s) => ({ ...e, [`${t}_${s}`.toUpperCase()]: `${t}${s}` }), {});
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
        le(
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
        le(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
        le(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
        le(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
        le(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
        le(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
        le(['Up', 'Down'], 'Page'),
        le(['Left', 'Right'], 'Bracket'));
    function ce(e, t) {
        e || console.error(t || 'Assertion failed');
    }
    function ue(e, t, s) {
        return 'function' == typeof t ? de(0, e, t) : (ce(void 0 !== s, 'fn must be defined'), de(e, t, s));
    }
    function de(e, t, s) {
        const n = new Array(t - e);
        for (let r = e; r < t; r++) n[r] = s(r);
        return n;
    }
    ce.log = function (e, t) {
        e || console.error(t || 'Assertion failed');
    };
    function pe(e) {
        const t = [],
            s = e
                .replace(/&nbsp;/g, ' ')
                .replace(/ /g, ' ')
                .matchAll(/[(（《「]*["'][^'"]*["'][。，:;：；—！!？?》」•%)、]*|.*?(?=[(（《「]*["'])|.*/gsu);
        for (const [n] of s) {
            const e = n.matchAll(
                /[(（《「“‘'"]*[\u4E00-\u9FFF\u3400-\u4DBF%][。，:;：；—！!？?》」•%)、’”'"]*|[(（《「“‘'"]*[a-zA-Z0-9-.,]+[。，:;：；—！!？?》」•%)、’”'"]*|\xa0|[^\u4E00-\u9FFF\u3400-\u4DBF\s]/gu,
            );
            for (const [s] of e) t.push(s);
        }
        return t;
    }
    ['ko', 'no'].includes(f.resolve('langCode'));
    const me = {
        zh_cn: pe,
        zh_sg: pe,
        zh_tw: pe,
        ja: function (e) {
            const t = [],
                s = e
                    .replace(/&nbsp;/g, ' ')
                    .matchAll(
                        /[【「(（『《]?[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF%](?:[。!?、…・ー—–!%?）)】」》』]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\u3040-\u30FF/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|\u00A0|[^\s]/gu,
                    );
            for (const [n] of s) t.push(n);
            return t;
        },
        ko: function (e) {
            const t = [],
                s = e
                    .replace(/&nbsp;/g, ' ')
                    .matchAll(
                        /\s+|\u00A0|[【「(（『《]?[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F%](?:[。!?、…・ー—–!%?）)】」》『]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|[^\s]/gu,
                    );
            for (const [n] of s) t.push(n);
            return t;
        },
        th: function (e) {
            var t;
            const s = [],
                n = e
                    .replace(/&nbsp;/g, ' ')
                    .matchAll(
                        /[【「(（『"《]?[\u0E00-\u0E7F%](?:[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E。!?,.:、…・/ー—–!%+?）)】」"》』]+)?|[「【(（『《"]?\d+(?:,\d{3})*(?:-\d+(?:,\d{3})*)?(?:\s*[a-zA-Z\u0E00-\u0E7F/%]+)?(?:[。.,，、:;：；!?）)】」"》・%)、]+)?|[「【(（『《"]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?"》】」）)』]+)?|[\u00A0 ]|[^\s]/gu,
                    );
            for (const [r] of n)
                /^\s+$/.test(r)
                    ? s.length
                        ? (s[s.length - 1] += r)
                        : s.push(r)
                    : 1 === s.length && (null == (t = s[0]) ? void 0 : t.startsWith('  '))
                      ? (s[0] = ' ' + r)
                      : s.push(r);
            return s;
        },
    };
    function he(e) {
        return e.split(' ');
    }
    const fe = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko', 'th']);
    function ge() {
        return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    }
    const _e = () => {};
    function be(t) {
        const s = t;
        return n.forwardRef(function (t, n) {
            const a = r.useAdaptive(t, t.adaptive),
                { path: i, ...o } = a,
                l = a.images ?? f.resolve('images'),
                c = { ...o, ref: n };
            {
                const t = i ? l.readOr(i, _e, 'warn') : void 0;
                return t ? e.jsx(s, { ...c, src: t }) : e.jsx(s, { ...c, unknown: !0 });
            }
        });
    }
    const ve = {
        background:
            'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
        backgroundSize: '20rem 20rem',
        backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
        backgroundColor: '#000',
    };
    n.forwardRef(function (t, s) {
        if (!t.src) {
            const {
                repeat: n,
                fit: r,
                position: a,
                width: i,
                src: o,
                height: l,
                unselectable: c,
                unknownStyle: u = ve,
                ...d
            } = t;
            return e.jsx('div', { ...d, ref: s, style: { width: t.width, height: t.height, ...u, ...t.style } });
        }
        const { repeat: n, fit: r, position: a, width: i, height: o, unknownStyle: l, unselectable: c, ...u } = t;
        return e.jsx('div', {
            ...u,
            ref: s,
            style: {
                backgroundImage: `url(${t.src})`,
                backgroundRepeat: n ?? 'no-repeat',
                backgroundSize: r ?? 'contain',
                backgroundPosition: a ?? 'center center',
                width: 'number' == typeof i ? `${i}rem` : i,
                height: 'number' == typeof o ? `${o}rem` : o,
                ...u.style,
            },
        });
    });
    const ye = be(
        n.forwardRef(function (t, s) {
            if (t.unknown) {
                const {
                    repeat: n,
                    fit: r,
                    position: a,
                    width: i,
                    src: o,
                    height: l,
                    unselectable: c,
                    unknown: u,
                    unknownStyle: d = ve,
                    ...p
                } = t;
                return e.jsx('div', { ...p, ref: s, style: { width: t.width, height: t.height, ...d, ...t.style } });
            }
            const {
                repeat: n,
                fit: r,
                position: a,
                width: i,
                height: o,
                unknownStyle: l,
                unknown: c,
                unselectable: u,
                ...d
            } = t;
            return e.jsx('div', {
                ...d,
                ref: s,
                style: {
                    backgroundImage: `url(${t.src})`,
                    backgroundRepeat: n ?? 'no-repeat',
                    backgroundSize: r ?? 'contain',
                    backgroundPosition: a ?? 'center center',
                    width: 'number' == typeof i ? `${i}rem` : i,
                    height: 'number' == typeof o ? `${o}rem` : o,
                    ...d.style,
                },
            });
        }),
    );
    be(
        n.forwardRef(function (t, s) {
            const { width: n, height: r, src: a, unselectable: i, unknown: o, unknownStyle: l = ve, ...c } = t;
            return t.unknown
                ? e.jsx('div', { ...c, style: { width: t.width, height: t.height, ...l } })
                : e.jsx('img', { ...c, ref: s, src: a, width: n, height: r });
        }),
    );
    const we = 'Divider_80a19f4b';
    function xe({ classNames: t }) {
        return e.jsx('div', {
            className: j(we, null == t ? void 0 : t.base),
            children: e.jsx(ye, {
                className: null == t ? void 0 : t.image,
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    }
    const Ee = (e) => {
            const t = n.useRef();
            return (
                n.useEffect(() => {
                    t.current = e;
                }, [e]),
                t.current
            );
        },
        Pe = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
        Re = new Set(['number', 'string', 'boolean', 'bigint']),
        Se = new Set(['Dict']);
    function Te(e, { shallow: t = !0, depth: s = 0, maxDepth: n = 32 } = {}) {
        var r, a;
        const i = e,
            o = typeof e;
        if (s > n) throw new Error(`Too deeply nested to copy. Max is ${n}.`);
        if (Pe.has(o)) return i;
        if (null === i) return i;
        const l = { depth: s + 1, maxDepth: n };
        if (Array.isArray(i)) return i.map((e) => Te(e, l));
        if ('object' === o) {
            const n = (null == (r = i.constructor) ? void 0 : r.name) ?? 'UNKNOWN';
            if (Array.isArray(e)) return e.map((e) => Te(e, l));
            if ('CoherentArrayProxy' === n) return e.map((e) => Te(e.value, l));
            if ('Dict' === n) return;
            if ('UNKNOWN' === n) return;
            if (n.includes(':ViewModel:') || 'Object' === n) {
                if (t && 0 === s) {
                    const e = {};
                    for (const t in i) {
                        const s = i[t];
                        Re.has(typeof s) && (e[t] = s);
                    }
                    return e;
                }
                {
                    const e = {};
                    for (const t in i) {
                        const s = i[t],
                            n = (null == (a = null == i ? void 0 : i.constructor) ? void 0 : a.name) ?? 'UNKNOWN';
                        Se.has(n) || (e[t] = Te(s, l));
                    }
                    return e;
                }
            }
            const o = {};
            for (const e of Object.keys(i)) o[e] = Te(i[e], l);
            return o;
        }
        return (console.error('Incorrect value to clone model', i), i);
    }
    const Ce = { deep: !1, equals: ne },
        Ne = { cloneItem: !0 },
        Ae = { shallow: !1 };
    class ke {
        constructor(e, t = Ne) {
            (p(this, '_data'),
                p(this, '_keys'),
                p(
                    this,
                    'set',
                    s.action((e) => {
                        this._data.set(e);
                    }),
                ),
                (this.options = t));
            const n = {},
                r = e.keys();
            for (let a = 0; a < r.length; a++) {
                const t = r[a];
                n[t] = s.observable.box(this.takeItem(e, t), Ce);
            }
            ((this._keys = s.observable.set(new Set(r))), (this._data = s.observable.box(n, Ce)));
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
            const n = this._data.get();
            for (let r = 0; r < t.length; r++) {
                const a = t[r],
                    i = this.takeItem(e, a);
                a in n
                    ? null === i
                        ? (delete n[a], this._keys.delete(a), this.set(n))
                        : n[a].set(i)
                    : null !== i && ((n[a] = s.observable.box(i, Ce)), this._keys.add(a), this.set(n));
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
            for (const s of this.keys.values()) t.push(e(s));
            return t;
        }
        map(e) {
            const t = [],
                s = this._data.get();
            for (const n of this.keys.values()) t.push(e(s[n].get(), n));
            return t;
        }
        reduce(e, t) {
            let s = t;
            const n = this._data.get();
            for (const r of this.keys.values()) s = e(s, n[r].get(), r);
            return s;
        }
        takeItem(e, t) {
            const s = e.get(t);
            return this.options.cloneItem ? Te(s, Ae) : s;
        }
        untrackedData() {
            return s.untracked(() => this._data.get());
        }
    }
    const Ie = n.createContext({ mode: 'real' }),
        je = { equals: ne, deep: !1 };
    function De(e, t, n) {
        const r = [];
        e.events.subscribersNotified.on(
            s.action(() => {
                for (const e of r) e();
                r.splice(0, r.length);
            }),
        );
        const a = (a, i, o = je) => {
                const l = s.observable.box(a(n(i)), o);
                return ('real' === t && e.subscribe((e) => r.push(() => l.set(a(e))), i), l);
            },
            i = (s, a) => {
                const i = new ke(n(s), a);
                return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), s), i);
            },
            o = (a, i) => {
                const o = s.observable.box(n(a) ?? i, je);
                return ('real' === t && e.subscribe((e) => r.push(() => o.set(e)), a), o);
            };
        return {
            dict: i,
            dictRef: (e, t) => i(e, { cloneItem: !1, ...t }),
            arrayClone: (e) => a(Te, e),
            array: o,
            object: o,
            transform: a,
            primitives: (a, i) => {
                const o = n(i);
                if (Array.isArray(a)) {
                    const n = a.reduce((e, t) => ((e[t] = s.observable.box(o[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                r.push(() =>
                                    a.forEach((t) => {
                                        n[t].set(e[t]);
                                    }),
                                );
                            }, i),
                        n
                    );
                }
                {
                    const n = a,
                        l = Object.entries(n),
                        c = l.reduce((e, [t, n]) => ((e[n] = s.observable.box(o[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                r.push(() =>
                                    l.forEach(([t, s]) => {
                                        c[s].set(e[t]);
                                    }),
                                );
                            }, i),
                        c
                    );
                }
            },
        };
    }
    var Oe = Ze(),
        Me = (e) => Qe(e, Oe),
        Be = Ze();
    Me.write = (e) => Qe(e, Be);
    var Fe = Ze();
    Me.onStart = (e) => Qe(e, Fe);
    var $e = Ze();
    Me.onFrame = (e) => Qe(e, $e);
    var Le = Ze();
    Me.onFinish = (e) => Qe(e, Le);
    var ze = [];
    Me.setTimeout = (e, t) => {
        const s = Me.now() + t,
            n = () => {
                const e = ze.findIndex((e) => e.cancel == n);
                (~e && ze.splice(e, 1), (Ge -= ~e ? 1 : 0));
            },
            r = { time: s, handler: e, cancel: n };
        return (ze.splice(Ue(s), 0, r), (Ge += 1), We(), r);
    };
    var Ue = (e) => ~(~ze.findIndex((t) => t.time > e) || ~ze.length);
    ((Me.cancel = (e) => {
        (Fe.delete(e), $e.delete(e), Le.delete(e), Oe.delete(e), Be.delete(e));
    }),
        (Me.sync = (e) => {
            ((He = !0), Me.batchedUpdates(e), (He = !1));
        }),
        (Me.throttle = (e) => {
            let t;
            function s() {
                try {
                    e(...t);
                } finally {
                    t = null;
                }
            }
            function n(...e) {
                ((t = e), Me.onStart(s));
            }
            return (
                (n.handler = e),
                (n.cancel = () => {
                    (Fe.delete(s), (t = null));
                }),
                n
            );
        }));
    var qe = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
    ((Me.use = (e) => (qe = e)),
        (Me.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
        (Me.batchedUpdates = (e) => e()),
        (Me.catch = console.error),
        (Me.frameLoop = 'always'),
        (Me.advance = () => {
            'demand' !== Me.frameLoop
                ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
                : Xe();
        }));
    var Ve = -1,
        Ge = 0,
        He = !1;
    function Qe(e, t) {
        He ? (t.delete(e), e(0)) : (t.add(e), We());
    }
    function We() {
        Ve < 0 && ((Ve = 0), 'demand' !== Me.frameLoop && qe(Ye));
    }
    function Ye() {
        ~Ve && (qe(Ye), Me.batchedUpdates(Xe));
    }
    function Xe() {
        const e = Ve;
        Ve = Me.now();
        const t = Ue(Ve);
        (t && (Ke(ze.splice(0, t), (e) => e.handler()), (Ge -= t)),
            Ge
                ? (Fe.flush(), Oe.flush(e ? Math.min(64, Ve - e) : 16.667), $e.flush(), Be.flush(), Le.flush())
                : (Ve = -1));
    }
    function Ze() {
        let e = new Set(),
            t = e;
        return {
            add(s) {
                ((Ge += t != e || e.has(s) ? 0 : 1), e.add(s));
            },
            delete: (s) => ((Ge -= t == e && e.has(s) ? 1 : 0), e.delete(s)),
            flush(s) {
                t.size && ((e = new Set()), (Ge -= t.size), Ke(t, (t) => t(s) && e.add(t)), (Ge += e.size), (t = e));
            },
        };
    }
    function Ke(e, t) {
        e.forEach((e) => {
            try {
                t(e);
            } catch (s) {
                Me.catch(s);
            }
        });
    }
    var Je = Object.defineProperty,
        et = {};
    function tt() {}
    ((e, t) => {
        for (var s in t) Je(e, s, { get: t[s], enumerable: !0 });
    })(et, {
        assign: () => ft,
        colors: () => pt,
        createStringInterpolator: () => lt,
        skipAnimation: () => mt,
        to: () => ct,
        willAdvance: () => ht,
    });
    var st = {
        arr: Array.isArray,
        obj: (e) => !!e && 'Object' === e.constructor.name,
        fun: (e) => 'function' == typeof e,
        str: (e) => 'string' == typeof e,
        num: (e) => 'number' == typeof e,
        und: (e) => void 0 === e,
    };
    function nt(e, t) {
        if (st.arr(e)) {
            if (!st.arr(t) || e.length !== t.length) return !1;
            for (let s = 0; s < e.length; s++) if (e[s] !== t[s]) return !1;
            return !0;
        }
        return e === t;
    }
    var rt = (e, t) => e.forEach(t);
    function at(e, t, s) {
        if (st.arr(e)) for (let n = 0; n < e.length; n++) t.call(s, e[n], `${n}`);
        else for (const n in e) e.hasOwnProperty(n) && t.call(s, e[n], n);
    }
    var it = (e) => (st.und(e) ? [] : st.arr(e) ? e : [e]);
    function ot(e, t) {
        if (e.size) {
            const s = Array.from(e);
            (e.clear(), rt(s, t));
        }
    }
    var lt,
        ct,
        ut = (e, ...t) => ot(e, (e) => e(...t)),
        dt = () =>
            'undefined' == typeof window ||
            !window.navigator ||
            /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        pt = null,
        mt = !1,
        ht = tt,
        ft = (e) => {
            (e.to && (ct = e.to),
                e.now && (Me.now = e.now),
                void 0 !== e.colors && (pt = e.colors),
                null != e.skipAnimation && (mt = e.skipAnimation),
                e.createStringInterpolator && (lt = e.createStringInterpolator),
                e.requestAnimationFrame && Me.use(e.requestAnimationFrame),
                e.batchedUpdates && (Me.batchedUpdates = e.batchedUpdates),
                e.willAdvance && (ht = e.willAdvance),
                e.frameLoop && (Me.frameLoop = e.frameLoop));
        },
        gt = new Set(),
        _t = [],
        bt = [],
        vt = 0,
        yt = {
            get idle() {
                return !gt.size && !_t.length;
            },
            start(e) {
                vt > e.priority ? (gt.add(e), Me.onStart(wt)) : (xt(e), Me(Pt));
            },
            advance: Pt,
            sort(e) {
                if (vt) Me.onFrame(() => yt.sort(e));
                else {
                    const t = _t.indexOf(e);
                    ~t && (_t.splice(t, 1), Et(e));
                }
            },
            clear() {
                ((_t = []), gt.clear());
            },
        };
    function wt() {
        (gt.forEach(xt), gt.clear(), Me(Pt));
    }
    function xt(e) {
        _t.includes(e) || Et(e);
    }
    function Et(e) {
        _t.splice(
            (function (e, t) {
                const s = e.findIndex(t);
                return s < 0 ? e.length : s;
            })(_t, (t) => t.priority > e.priority),
            0,
            e,
        );
    }
    function Pt(e) {
        const t = bt;
        for (let s = 0; s < _t.length; s++) {
            const n = _t[s];
            ((vt = n.priority), n.idle || (ht(n), n.advance(e), n.idle || t.push(n)));
        }
        return ((vt = 0), ((bt = _t).length = 0), (_t = t).length > 0);
    }
    var Rt = '[-+]?\\d*\\.?\\d+',
        St = Rt + '%';
    function Tt(...e) {
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var Ct = new RegExp('rgb' + Tt(Rt, Rt, Rt)),
        Nt = new RegExp('rgba' + Tt(Rt, Rt, Rt, Rt)),
        At = new RegExp('hsl' + Tt(Rt, St, St)),
        kt = new RegExp('hsla' + Tt(Rt, St, St, Rt)),
        It = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        jt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Dt = /^#([0-9a-fA-F]{6})$/,
        Ot = /^#([0-9a-fA-F]{8})$/;
    function Mt(e, t, s) {
        return (
            s < 0 && (s += 1),
            s > 1 && (s -= 1),
            s < 1 / 6 ? e + 6 * (t - e) * s : s < 0.5 ? t : s < 2 / 3 ? e + (t - e) * (2 / 3 - s) * 6 : e
        );
    }
    function Bt(e, t, s) {
        const n = s < 0.5 ? s * (1 + t) : s + t - s * t,
            r = 2 * s - n,
            a = Mt(r, n, e + 1 / 3),
            i = Mt(r, n, e),
            o = Mt(r, n, e - 1 / 3);
        return (Math.round(255 * a) << 24) | (Math.round(255 * i) << 16) | (Math.round(255 * o) << 8);
    }
    function Ft(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function $t(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function Lt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function zt(e) {
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
                : (t = Dt.exec(e))
                  ? parseInt(t[1] + 'ff', 16) >>> 0
                  : pt && void 0 !== pt[e]
                    ? pt[e]
                    : (t = Ct.exec(e))
                      ? ((Ft(t[1]) << 24) | (Ft(t[2]) << 16) | (Ft(t[3]) << 8) | 255) >>> 0
                      : (t = Nt.exec(e))
                        ? ((Ft(t[1]) << 24) | (Ft(t[2]) << 16) | (Ft(t[3]) << 8) | Lt(t[4])) >>> 0
                        : (t = It.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                          : (t = Ot.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = jt.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = At.exec(e))
                                ? (255 | Bt($t(t[1]), zt(t[2]), zt(t[3]))) >>> 0
                                : (t = kt.exec(e))
                                  ? (Bt($t(t[1]), zt(t[2]), zt(t[3])) | Lt(t[4])) >>> 0
                                  : null;
        })(e);
        if (null === t) return e;
        t = t || 0;
        return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
    }
    var qt = (e, t, s) => {
        if (st.fun(e)) return e;
        if (st.arr(e)) return qt({ range: e, output: t, extrapolate: s });
        if (st.str(e.output[0])) return lt(e);
        const n = e,
            r = n.output,
            a = n.range || [0, 1],
            i = n.extrapolateLeft || n.extrapolate || 'extend',
            o = n.extrapolateRight || n.extrapolate || 'extend',
            l = n.easing || ((e) => e);
        return (e) => {
            const t = (function (e, t) {
                for (var s = 1; s < t.length - 1 && !(t[s] >= e); ++s);
                return s - 1;
            })(e, a);
            return (function (e, t, s, n, r, a, i, o, l) {
                let c = l ? l(e) : e;
                if (c < t) {
                    if ('identity' === i) return c;
                    'clamp' === i && (c = t);
                }
                if (c > s) {
                    if ('identity' === o) return c;
                    'clamp' === o && (c = s);
                }
                if (n === r) return n;
                if (t === s) return e <= t ? n : r;
                t === -1 / 0 ? (c = -c) : s === 1 / 0 ? (c -= t) : (c = (c - t) / (s - t));
                ((c = a(c)), n === -1 / 0 ? (c = -c) : r === 1 / 0 ? (c += n) : (c = c * (r - n) + n));
                return c;
            })(e, a[t], a[t + 1], r[t], r[t + 1], l, i, o, n.map);
        };
    };
    var Vt = { linear: (e) => e, easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2) },
        Gt = Symbol.for('FluidValue.get'),
        Ht = Symbol.for('FluidValue.observers'),
        Qt = (e) => Boolean(e && e[Gt]),
        Wt = (e) => (e && e[Gt] ? e[Gt]() : e),
        Yt = (e) => e[Ht] || null;
    function Xt(e, t) {
        const s = e[Ht];
        s &&
            s.forEach((e) => {
                !(function (e, t) {
                    e.eventObserved ? e.eventObserved(t) : e(t);
                })(e, t);
            });
    }
    var Zt = class {
            constructor(e) {
                if (!e && !(e = this.get)) throw Error('Unknown getter');
                Kt(this, e);
            }
        },
        Kt = (e, t) => ss(e, Gt, t);
    function Jt(e, t) {
        if (e[Gt]) {
            let s = e[Ht];
            (s || ss(e, Ht, (s = new Set())), s.has(t) || (s.add(t), e.observerAdded && e.observerAdded(s.size, t)));
        }
        return t;
    }
    function es(e, t) {
        const s = e[Ht];
        if (s && s.has(t)) {
            const n = s.size - 1;
            (n ? s.delete(t) : (e[Ht] = null), e.observerRemoved && e.observerRemoved(n, t));
        }
    }
    var ts,
        ss = (e, t, s) => Object.defineProperty(e, t, { value: s, writable: !0, configurable: !0 }),
        ns = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        rs = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        as = new RegExp(`(${ns.source})(%|[a-z]+)`, 'i'),
        is = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        os = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        ls = (e) => {
            const [t, s] = cs(e);
            if (!t || dt()) return e;
            const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
            if (n) return n.trim();
            if (s && s.startsWith('--')) {
                const t = window.getComputedStyle(document.documentElement).getPropertyValue(s);
                return t || e;
            }
            return s && os.test(s) ? ls(s) : s || e;
        },
        cs = (e) => {
            const t = os.exec(e);
            if (!t) return [,];
            const [, s, n] = t;
            return [s, n];
        },
        us = (e, t, s, n, r) => `rgba(${Math.round(t)}, ${Math.round(s)}, ${Math.round(n)}, ${r})`,
        ds = (e) => {
            ts || (ts = pt ? new RegExp(`(${Object.keys(pt).join('|')})(?!\\w)`, 'g') : /^\b$/);
            const t = e.output.map((e) => Wt(e).replace(os, ls).replace(rs, Ut).replace(ts, Ut)),
                s = t.map((e) => e.match(ns).map(Number)),
                n = s[0].map((e, t) =>
                    s.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                ),
                r = n.map((t) => qt({ ...e, output: t }));
            return (e) => {
                var s;
                const n = !as.test(t[0]) && (null == (s = t.find((e) => as.test(e))) ? void 0 : s.replace(ns, ''));
                let a = 0;
                return t[0].replace(ns, () => `${r[a++](e)}${n || ''}`).replace(is, us);
            };
        },
        ps = 'react-spring: ',
        ms = (e) => {
            const t = e;
            let s = !1;
            if ('function' != typeof t) throw new TypeError(`${ps}once requires a function parameter`);
            return (...e) => {
                s || (t(...e), (s = !0));
            };
        },
        hs = ms(console.warn);
    var fs = ms(console.warn);
    function gs(e) {
        return st.str(e) && ('#' == e[0] || /\d/.test(e) || (!dt() && os.test(e)) || e in (pt || {}));
    }
    var _s = dt() ? n.useEffect : n.useLayoutEffect,
        bs = () => {
            const e = n.useRef(!1);
            return (
                _s(
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
    function vs() {
        const e = n.useState()[1],
            t = bs();
        return () => {
            t.current && e(Math.random());
        };
    }
    var ys = (e) => n.useEffect(e, ws),
        ws = [];
    function xs(e) {
        const t = n.useRef();
        return (
            n.useEffect(() => {
                t.current = e;
            }),
            t.current
        );
    }
    var Es = Symbol.for('Animated:node'),
        Ps = (e) => e && e[Es],
        Rs = (e, t) => {
            return (
                (s = e),
                (n = Es),
                (r = t),
                Object.defineProperty(s, n, { value: r, writable: !0, configurable: !0 })
            );
            var s, n, r;
        },
        Ss = (e) => e && e[Es] && e[Es].getPayload(),
        Ts = class {
            constructor() {
                Rs(this, this);
            }
            getPayload() {
                return this.payload || [];
            }
        },
        Cs = class extends Ts {
            constructor(e) {
                (super(),
                    (this._value = e),
                    (this.done = !0),
                    (this.durationProgress = 0),
                    st.num(this._value) && (this.lastPosition = this._value));
            }
            static create(e) {
                return new Cs(e);
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
        Ns = class extends Cs {
            constructor(e) {
                (super(0), (this._string = null), (this._toString = qt({ output: [e, e] })));
            }
            static create(e) {
                return new Ns(e);
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
                (e && (this._toString = qt({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
            }
        },
        As = { dependencies: null },
        ks = class extends Ts {
            constructor(e) {
                (super(), (this.source = e), this.setValue(e));
            }
            getValue(e) {
                const t = {};
                return (
                    at(this.source, (s, n) => {
                        var r;
                        (r = s) && r[Es] === r ? (t[n] = s.getValue(e)) : Qt(s) ? (t[n] = Wt(s)) : e || (t[n] = s);
                    }),
                    t
                );
            }
            setValue(e) {
                ((this.source = e), (this.payload = this._makePayload(e)));
            }
            reset() {
                this.payload && rt(this.payload, (e) => e.reset());
            }
            _makePayload(e) {
                if (e) {
                    const t = new Set();
                    return (at(e, this._addToPayload, t), Array.from(t));
                }
            }
            _addToPayload(e) {
                As.dependencies && Qt(e) && As.dependencies.add(e);
                const t = Ss(e);
                t && rt(t, (e) => this.add(e));
            }
        },
        Is = class extends ks {
            constructor(e) {
                super(e);
            }
            static create(e) {
                return new Is(e);
            }
            getValue() {
                return this.source.map((e) => e.getValue());
            }
            setValue(e) {
                const t = this.getPayload();
                return e.length == t.length
                    ? t.map((t, s) => t.setValue(e[s])).some(Boolean)
                    : (super.setValue(e.map(js)), !0);
            }
        };
    function js(e) {
        return (gs(e) ? Ns : Cs).create(e);
    }
    function Ds(e) {
        const t = Ps(e);
        return t ? t.constructor : st.arr(e) ? Is : gs(e) ? Ns : Cs;
    }
    var Os = (e, t) => {
            const s = !st.fun(e) || (e.prototype && e.prototype.isReactComponent);
            return n.forwardRef((r, a) => {
                const i = n.useRef(null),
                    o =
                        s &&
                        n.useCallback(
                            (e) => {
                                i.current = (function (e, t) {
                                    e && (st.fun(e) ? e(t) : (e.current = t));
                                    return t;
                                })(a, e);
                            },
                            [a],
                        ),
                    [l, c] = (function (e, t) {
                        const s = new Set();
                        ((As.dependencies = s), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                        return ((e = new ks(e)), (As.dependencies = null), [e, s]);
                    })(r, t),
                    u = vs(),
                    d = () => {
                        const e = i.current;
                        if (s && !e) return;
                        !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && u();
                    },
                    p = new Ms(d, c),
                    m = n.useRef();
                (_s(
                    () => (
                        (m.current = p),
                        rt(c, (e) => Jt(e, p)),
                        () => {
                            m.current && (rt(m.current.deps, (e) => es(e, m.current)), Me.cancel(m.current.update));
                        }
                    ),
                ),
                    n.useEffect(d, []),
                    ys(() => () => {
                        const e = m.current;
                        rt(e.deps, (t) => es(t, e));
                    }));
                const f = t.getComponentProps(l.getValue());
                return h.createElement(e, { ...f, ref: o });
            });
        },
        Ms = class {
            constructor(e, t) {
                ((this.update = e), (this.deps = t));
            }
            eventObserved(e) {
                'change' == e.type && Me.write(this.update);
            }
        };
    var Bs = Symbol.for('AnimatedComponent'),
        Fs = (e) => (st.str(e) ? e : e && st.str(e.displayName) ? e.displayName : (st.fun(e) && e.name) || null);
    function $s(e, ...t) {
        return st.fun(e) ? e(...t) : e;
    }
    var Ls = (e, t) => !0 === e || !!(t && e && (st.fun(e) ? e(t) : it(e).includes(t))),
        zs = (e, t) => (st.obj(e) ? t && e[t] : e),
        Us = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
        qs = (e) => e,
        Vs = (e, t = qs) => {
            let s = Gs;
            e.default && !0 !== e.default && ((e = e.default), (s = Object.keys(e)));
            const n = {};
            for (const r of s) {
                const s = t(e[r], r);
                st.und(s) || (n[r] = s);
            }
            return n;
        },
        Gs = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
        Hs = {
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
    function Qs(e) {
        const t = (function (e) {
            const t = {};
            let s = 0;
            if (
                (at(e, (e, n) => {
                    Hs[n] || ((t[n] = e), s++);
                }),
                s)
            )
                return t;
        })(e);
        if (t) {
            const s = { to: t };
            return (at(e, (e, n) => n in t || (s[n] = e)), s);
        }
        return { ...e };
    }
    function Ws(e) {
        return (
            (e = Wt(e)),
            st.arr(e) ? e.map(Ws) : gs(e) ? et.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
        );
    }
    function Ys(e) {
        for (const t in e) return !0;
        return !1;
    }
    function Xs(e) {
        return st.fun(e) || (st.arr(e) && st.obj(e[0]));
    }
    function Zs(e, t) {
        var s;
        (null == (s = e.ref) || s.delete(e), null == t || t.delete(e));
    }
    function Ks(e, t) {
        var s;
        t && e.ref !== t && (null == (s = e.ref) || s.delete(e), t.add(e), (e.ref = t));
    }
    var Js = { tension: 170, friction: 26, mass: 1, damping: 1, easing: Vt.linear, clamp: !1 };
    function en(e, t) {
        if (st.und(t.decay)) {
            const s = !st.und(t.tension) || !st.und(t.friction);
            ((!s && st.und(t.frequency) && st.und(t.damping) && st.und(t.mass)) ||
                ((e.duration = void 0), (e.decay = void 0)),
                s && (e.frequency = void 0));
        } else e.duration = void 0;
    }
    var tn = [];
    function sn(e, { key: t, props: s, defaultProps: n, state: r, actions: a }) {
        return new Promise((i, o) => {
            let l,
                c,
                u = Ls(s.cancel ?? (null == n ? void 0 : n.cancel), t);
            if (u) m();
            else {
                st.und(s.pause) || (r.paused = Ls(s.pause, t));
                let e = null == n ? void 0 : n.pause;
                (!0 !== e && (e = r.paused || Ls(e, t)),
                    (l = $s(s.delay || 0, t)),
                    e ? (r.resumeQueue.add(p), a.pause()) : (a.resume(), p()));
            }
            function d() {
                (r.resumeQueue.add(p), r.timeouts.delete(c), c.cancel(), (l = c.time - Me.now()));
            }
            function p() {
                l > 0 && !et.skipAnimation
                    ? ((r.delayed = !0), (c = Me.setTimeout(m, l)), r.pauseQueue.add(d), r.timeouts.add(c))
                    : m();
            }
            function m() {
                (r.delayed && (r.delayed = !1),
                    r.pauseQueue.delete(d),
                    r.timeouts.delete(c),
                    e <= (r.cancelId || 0) && (u = !0));
                try {
                    a.start({ ...s, callId: e, cancel: u }, i);
                } catch (t) {
                    o(t);
                }
            }
        });
    }
    var nn = (e, t) =>
            1 == t.length
                ? t[0]
                : t.some((e) => e.cancelled)
                  ? on(e.get())
                  : t.every((e) => e.noop)
                    ? rn(e.get())
                    : an(
                          e.get(),
                          t.every((e) => e.finished),
                      ),
        rn = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        an = (e, t, s = !1) => ({ value: e, finished: t, cancelled: s }),
        on = (e) => ({ value: e, cancelled: !0, finished: !1 });
    function ln(e, t, s, n) {
        const { callId: r, parentId: a, onRest: i } = t,
            { asyncTo: o, promise: l } = s;
        return a || e !== o || t.reset
            ? (s.promise = (async () => {
                  ((s.asyncId = r), (s.asyncTo = e));
                  const c = Vs(t, (e, t) => ('onRest' === t ? void 0 : e));
                  let u, d;
                  const p = new Promise((e, t) => ((u = e), (d = t))),
                      m = (e) => {
                          const t = (r <= (s.cancelId || 0) && on(n)) || (r !== s.asyncId && an(n, !1));
                          if (t) throw ((e.result = t), d(e), e);
                      },
                      h = (e, t) => {
                          const a = new un(),
                              i = new dn();
                          return (async () => {
                              if (et.skipAnimation) throw (cn(s), (i.result = an(n, !1)), d(i), i);
                              m(a);
                              const o = st.obj(e) ? { ...e } : { ...t, to: e };
                              ((o.parentId = r),
                                  at(c, (e, t) => {
                                      st.und(o[t]) && (o[t] = e);
                                  }));
                              const l = await n.start(o);
                              return (
                                  m(a),
                                  s.paused &&
                                      (await new Promise((e) => {
                                          s.resumeQueue.add(e);
                                      })),
                                  l
                              );
                          })();
                      };
                  let f;
                  if (et.skipAnimation) return (cn(s), an(n, !1));
                  try {
                      let t;
                      ((t = st.arr(e)
                          ? (async (e) => {
                                for (const t of e) await h(t);
                            })(e)
                          : Promise.resolve(e(h, n.stop.bind(n)))),
                          await Promise.all([t.then(u), p]),
                          (f = an(n.get(), !0, !1)));
                  } catch (g) {
                      if (g instanceof un) f = g.result;
                      else {
                          if (!(g instanceof dn)) throw g;
                          f = g.result;
                      }
                  } finally {
                      r == s.asyncId && ((s.asyncId = a), (s.asyncTo = a ? o : void 0), (s.promise = a ? l : void 0));
                  }
                  return (
                      st.fun(i) &&
                          Me.batchedUpdates(() => {
                              i(f, n, n.item);
                          }),
                      f
                  );
              })())
            : l;
    }
    function cn(e, t) {
        (ot(e.timeouts, (e) => e.cancel()),
            e.pauseQueue.clear(),
            e.resumeQueue.clear(),
            (e.asyncId = e.asyncTo = e.promise = void 0),
            t && (e.cancelId = t));
    }
    var un = class extends Error {
            constructor() {
                super(
                    'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
                );
            }
        },
        dn = class extends Error {
            constructor() {
                super('SkipAnimationSignal');
            }
        },
        pn = (e) => e instanceof hn,
        mn = 1,
        hn = class extends Zt {
            constructor() {
                (super(...arguments), (this.id = mn++), (this._priority = 0));
            }
            get priority() {
                return this._priority;
            }
            set priority(e) {
                this._priority != e && ((this._priority = e), this._onPriorityChange(e));
            }
            get() {
                const e = Ps(this);
                return e && e.getValue();
            }
            to(...e) {
                return et.to(this, e);
            }
            interpolate(...e) {
                return (hs(`${ps}The "interpolate" function is deprecated in v9 (use "to" instead)`), et.to(this, e));
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
                Xt(this, { type: 'change', parent: this, value: e, idle: t });
            }
            _onPriorityChange(e) {
                (this.idle || yt.sort(this), Xt(this, { type: 'priority', parent: this, priority: e }));
            }
        },
        fn = Symbol.for('SpringPhase'),
        gn = (e) => (1 & e[fn]) > 0,
        _n = (e) => (2 & e[fn]) > 0,
        bn = (e) => (4 & e[fn]) > 0,
        vn = (e, t) => (t ? (e[fn] |= 3) : (e[fn] &= -3)),
        yn = (e, t) => (t ? (e[fn] |= 4) : (e[fn] &= -5)),
        wn = class extends hn {
            constructor(e, t) {
                if (
                    (super(),
                    (this.animation = new (class {
                        constructor() {
                            ((this.changed = !1),
                                (this.values = tn),
                                (this.toValues = null),
                                (this.fromValues = tn),
                                (this.config = new (class {
                                    constructor() {
                                        ((this.velocity = 0), Object.assign(this, Js));
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
                    const s = st.obj(e) ? { ...e } : { ...t, from: e };
                    (st.und(s.default) && (s.default = !0), this.start(s));
                }
            }
            get idle() {
                return !(_n(this) || this._state.asyncTo) || bn(this);
            }
            get goal() {
                return Wt(this.animation.to);
            }
            get velocity() {
                const e = Ps(this);
                return e instanceof Cs ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
            }
            get hasAnimated() {
                return gn(this);
            }
            get isAnimating() {
                return _n(this);
            }
            get isPaused() {
                return bn(this);
            }
            get isDelayed() {
                return this._state.delayed;
            }
            advance(e) {
                let t = !0,
                    s = !1;
                const n = this.animation;
                let { toValues: r } = n;
                const { config: a } = n,
                    i = Ss(n.to);
                (!i && Qt(n.to) && (r = it(Wt(n.to))),
                    n.values.forEach((o, l) => {
                        if (o.done) return;
                        const c = o.constructor == Ns ? 1 : i ? i[l].lastPosition : r[l];
                        let u = n.immediate,
                            d = c;
                        if (!u) {
                            if (((d = o.lastPosition), a.tension <= 0)) return void (o.done = !0);
                            let t = (o.elapsedTime += e);
                            const s = n.fromValues[l],
                                r = null != o.v0 ? o.v0 : (o.v0 = st.arr(a.velocity) ? a.velocity[l] : a.velocity);
                            let i;
                            const p = a.precision || (s == c ? 0.005 : Math.min(1, 0.001 * Math.abs(c - s)));
                            if (st.und(a.duration))
                                if (a.decay) {
                                    const e = !0 === a.decay ? 0.998 : a.decay,
                                        n = Math.exp(-(1 - e) * t);
                                    ((d = s + (r / (1 - e)) * (1 - n)),
                                        (u = Math.abs(o.lastPosition - d) <= p),
                                        (i = r * n));
                                } else {
                                    i = null == o.lastVelocity ? r : o.lastVelocity;
                                    const t = a.restVelocity || p / 10,
                                        n = a.clamp ? 0 : a.bounce,
                                        l = !st.und(n),
                                        m = s == c ? o.v0 > 0 : s < c;
                                    let h,
                                        f = !1;
                                    const g = 1,
                                        _ = Math.ceil(e / g);
                                    for (
                                        let e = 0;
                                        e < _ && ((h = Math.abs(i) > t), h || ((u = Math.abs(c - d) <= p), !u));
                                        ++e
                                    ) {
                                        l && ((f = d == c || d > c == m), f && ((i = -i * n), (d = c)));
                                        ((i += ((1e-6 * -a.tension * (d - c) + 0.001 * -a.friction * i) / a.mass) * g),
                                            (d += i * g));
                                    }
                                }
                            else {
                                let n = 1;
                                (a.duration > 0 &&
                                    (this._memoizedDuration !== a.duration &&
                                        ((this._memoizedDuration = a.duration),
                                        o.durationProgress > 0 &&
                                            ((o.elapsedTime = a.duration * o.durationProgress),
                                            (t = o.elapsedTime += e))),
                                    (n = (a.progress || 0) + t / this._memoizedDuration),
                                    (n = n > 1 ? 1 : n < 0 ? 0 : n),
                                    (o.durationProgress = n)),
                                    (d = s + a.easing(n) * (c - s)),
                                    (i = (d - o.lastPosition) / e),
                                    (u = 1 == n));
                            }
                            ((o.lastVelocity = i),
                                Number.isNaN(d) && (console.warn('Got NaN while animating:', this), (u = !0)));
                        }
                        (i && !i[l].done && (u = !1), u ? (o.done = !0) : (t = !1), o.setValue(d, a.round) && (s = !0));
                    }));
                const o = Ps(this),
                    l = o.getValue();
                if (t) {
                    const e = Wt(n.to);
                    ((l === e && !s) || a.decay
                        ? s && a.decay && this._onChange(l)
                        : (o.setValue(e), this._onChange(e)),
                        this._stop());
                } else s && this._onChange(l);
            }
            set(e) {
                return (
                    Me.batchedUpdates(() => {
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
                if (_n(this)) {
                    const { to: e, config: t } = this.animation;
                    Me.batchedUpdates(() => {
                        (this._onStart(), t.decay || this._set(e, !1), this._stop());
                    });
                }
                return this;
            }
            update(e) {
                return ((this.queue || (this.queue = [])).push(e), this);
            }
            start(e, t) {
                let s;
                return (
                    st.und(e) ? ((s = this.queue || []), (this.queue = [])) : (s = [st.obj(e) ? e : { ...t, to: e }]),
                    Promise.all(s.map((e) => this._update(e))).then((e) => nn(this, e))
                );
            }
            stop(e) {
                const { to: t } = this.animation;
                return (
                    this._focus(this.get()),
                    cn(this._state, e && this._lastCallId),
                    Me.batchedUpdates(() => this._stop(t, e)),
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
                let { to: s, from: n } = e;
                ((s = st.obj(s) ? s[t] : s),
                    (null == s || Xs(s)) && (s = void 0),
                    (n = st.obj(n) ? n[t] : n),
                    null == n && (n = void 0));
                const r = { to: s, from: n };
                return (
                    gn(this) ||
                        (e.reverse && ([s, n] = [n, s]),
                        (n = Wt(n)),
                        st.und(n) ? Ps(this) || this._set(s) : this._set(n)),
                    r
                );
            }
            _update({ ...e }, t) {
                const { key: s, defaultProps: n } = this;
                (e.default &&
                    Object.assign(
                        n,
                        Vs(e, (e, t) => (/^on/.test(t) ? zs(e, s) : e)),
                    ),
                    Cn(this, e, 'onProps'),
                    Nn(this, 'onProps', e, this));
                const r = this._prepareNode(e);
                if (Object.isFrozen(this))
                    throw Error(
                        'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                    );
                const a = this._state;
                return sn(++this._lastCallId, {
                    key: s,
                    props: e,
                    defaultProps: n,
                    state: a,
                    actions: {
                        pause: () => {
                            bn(this) ||
                                (yn(this, !0),
                                ut(a.pauseQueue),
                                Nn(this, 'onPause', an(this, xn(this, this.animation.to)), this));
                        },
                        resume: () => {
                            bn(this) &&
                                (yn(this, !1),
                                _n(this) && this._resume(),
                                ut(a.resumeQueue),
                                Nn(this, 'onResume', an(this, xn(this, this.animation.to)), this));
                        },
                        start: this._merge.bind(this, r),
                    },
                }).then((s) => {
                    if (e.loop && s.finished && (!t || !s.noop)) {
                        const t = En(e);
                        if (t) return this._update(t, !0);
                    }
                    return s;
                });
            }
            _merge(e, t, s) {
                if (t.cancel) return (this.stop(!0), s(on(this)));
                const n = !st.und(e.to),
                    r = !st.und(e.from);
                if (n || r) {
                    if (!(t.callId > this._lastToId)) return s(on(this));
                    this._lastToId = t.callId;
                }
                const { key: a, defaultProps: i, animation: o } = this,
                    { to: l, from: c } = o;
                let { to: u = l, from: d = c } = e;
                (!r || n || (t.default && !st.und(u)) || (u = d), t.reverse && ([u, d] = [d, u]));
                const p = !nt(d, c);
                (p && (o.from = d), (d = Wt(d)));
                const m = !nt(u, l);
                m && this._focus(u);
                const h = Xs(t.to),
                    { config: f } = o,
                    { decay: g, velocity: _ } = f;
                ((n || r) && (f.velocity = 0),
                    t.config &&
                        !h &&
                        (function (e, t, s) {
                            (s && (en((s = { ...s }), t), (t = { ...s, ...t })), en(e, t), Object.assign(e, t));
                            for (const i in Js) null == e[i] && (e[i] = Js[i]);
                            let { frequency: n, damping: r } = e;
                            const { mass: a } = e;
                            st.und(n) ||
                                (n < 0.01 && (n = 0.01),
                                r < 0 && (r = 0),
                                (e.tension = Math.pow((2 * Math.PI) / n, 2) * a),
                                (e.friction = (4 * Math.PI * r * a) / n));
                        })(f, $s(t.config, a), t.config !== i.config ? $s(i.config, a) : void 0));
                let b = Ps(this);
                if (!b || st.und(u)) return s(an(this, !0));
                const v = st.und(t.reset) ? r && !t.default : !st.und(d) && Ls(t.reset, a),
                    y = v ? d : this.get(),
                    w = Ws(u),
                    x = st.num(w) || st.arr(w) || gs(w),
                    E = !h && (!x || Ls(i.immediate || t.immediate, a));
                if (m) {
                    const e = Ds(u);
                    if (e !== b.constructor) {
                        if (!E)
                            throw Error(
                                `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`,
                            );
                        b = this._set(w);
                    }
                }
                const P = b.constructor;
                let R = Qt(u),
                    S = !1;
                if (!R) {
                    const e = v || (!gn(this) && p);
                    ((m || e) && ((S = nt(Ws(y), w)), (R = !S)),
                        ((nt(o.immediate, E) || E) && nt(f.decay, g) && nt(f.velocity, _)) || (R = !0));
                }
                if (
                    (S && _n(this) && (o.changed && !v ? (R = !0) : R || this._stop(l)),
                    !h &&
                        ((R || Qt(l)) &&
                            ((o.values = b.getPayload()), (o.toValues = Qt(u) ? null : P == Ns ? [1] : it(w))),
                        o.immediate != E && ((o.immediate = E), E || v || this._set(l)),
                        R))
                ) {
                    const { onRest: e } = o;
                    rt(Tn, (e) => Cn(this, t, e));
                    const n = an(this, xn(this, l));
                    (ut(this._pendingCalls, n),
                        this._pendingCalls.add(s),
                        o.changed &&
                            Me.batchedUpdates(() => {
                                var t;
                                ((o.changed = !v),
                                    null == e || e(n, this),
                                    v ? $s(i.onRest, n) : null == (t = o.onStart) || t.call(o, n, this));
                            }));
                }
                (v && this._set(y),
                    h
                        ? s(ln(t.to, t, this._state, this))
                        : R
                          ? this._start()
                          : _n(this) && !m
                            ? this._pendingCalls.add(s)
                            : s(rn(y)));
            }
            _focus(e) {
                const t = this.animation;
                e !== t.to && (Yt(this) && this._detach(), (t.to = e), Yt(this) && this._attach());
            }
            _attach() {
                let e = 0;
                const { to: t } = this.animation;
                (Qt(t) && (Jt(t, this), pn(t) && (e = t.priority + 1)), (this.priority = e));
            }
            _detach() {
                const { to: e } = this.animation;
                Qt(e) && es(e, this);
            }
            _set(e, t = !0) {
                const s = Wt(e);
                if (!st.und(s)) {
                    const e = Ps(this);
                    if (!e || !nt(s, e.getValue())) {
                        const n = Ds(s);
                        (e && e.constructor == n ? e.setValue(s) : Rs(this, n.create(s)),
                            e &&
                                Me.batchedUpdates(() => {
                                    this._onChange(s, t);
                                }));
                    }
                }
                return Ps(this);
            }
            _onStart() {
                const e = this.animation;
                e.changed || ((e.changed = !0), Nn(this, 'onStart', an(this, xn(this, e.to)), this));
            }
            _onChange(e, t) {
                (t || (this._onStart(), $s(this.animation.onChange, e, this)),
                    $s(this.defaultProps.onChange, e, this),
                    super._onChange(e, t));
            }
            _start() {
                const e = this.animation;
                (Ps(this).reset(Wt(e.to)),
                    e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                    _n(this) || (vn(this, !0), bn(this) || this._resume()));
            }
            _resume() {
                et.skipAnimation ? this.finish() : yt.start(this);
            }
            _stop(e, t) {
                if (_n(this)) {
                    vn(this, !1);
                    const s = this.animation;
                    (rt(s.values, (e) => {
                        e.done = !0;
                    }),
                        s.toValues && (s.onChange = s.onPause = s.onResume = void 0),
                        Xt(this, { type: 'idle', parent: this }));
                    const n = t ? on(this.get()) : an(this.get(), xn(this, e ?? s.to));
                    (ut(this._pendingCalls, n), s.changed && ((s.changed = !1), Nn(this, 'onRest', n, this)));
                }
            }
        };
    function xn(e, t) {
        const s = Ws(t);
        return nt(Ws(e.get()), s);
    }
    function En(e, t = e.loop, s = e.to) {
        const n = $s(t);
        if (n) {
            const r = !0 !== n && Qs(n),
                a = (r || e).reverse,
                i = !r || r.reset;
            return Pn({
                ...e,
                loop: t,
                default: !1,
                pause: void 0,
                to: !a || Xs(s) ? s : void 0,
                from: i ? e.from : void 0,
                reset: i,
                ...r,
            });
        }
    }
    function Pn(e) {
        const { to: t, from: s } = (e = Qs(e)),
            n = new Set();
        return (st.obj(t) && Sn(t, n), st.obj(s) && Sn(s, n), (e.keys = n.size ? Array.from(n) : null), e);
    }
    function Rn(e) {
        const t = Pn(e);
        return (st.und(t.default) && (t.default = Vs(t)), t);
    }
    function Sn(e, t) {
        at(e, (e, s) => null != e && t.add(s));
    }
    var Tn = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
    function Cn(e, t, s) {
        e.animation[s] = t[s] !== Us(t, s) ? zs(t[s], e.key) : void 0;
    }
    function Nn(e, t, ...s) {
        var n, r, a, i;
        (null == (r = (n = e.animation)[t]) || r.call(n, ...s),
            null == (i = (a = e.defaultProps)[t]) || i.call(a, ...s));
    }
    var An = ['onStart', 'onChange', 'onRest'],
        kn = 1,
        In = class {
            constructor(e, t) {
                ((this.id = kn++),
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
                return (this.each((t, s) => (e[s] = t.get())), e);
            }
            set(e) {
                for (const t in e) {
                    const s = e[t];
                    st.und(s) || this.springs[t].set(s);
                }
            }
            update(e) {
                return (e && this.queue.push(Pn(e)), this);
            }
            start(e) {
                let { queue: t } = this;
                return (
                    e ? (t = it(e).map(Pn)) : (this.queue = []),
                    this._flush ? this._flush(this, t) : ($n(this, t), jn(this, t))
                );
            }
            stop(e, t) {
                if ((e !== !!e && (t = e), t)) {
                    const s = this.springs;
                    rt(it(t), (t) => s[t].stop(!!e));
                } else (cn(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
                return this;
            }
            pause(e) {
                if (st.und(e)) this.start({ pause: !0 });
                else {
                    const t = this.springs;
                    rt(it(e), (e) => t[e].pause());
                }
                return this;
            }
            resume(e) {
                if (st.und(e)) this.start({ pause: !1 });
                else {
                    const t = this.springs;
                    rt(it(e), (e) => t[e].resume());
                }
                return this;
            }
            each(e) {
                at(this.springs, e);
            }
            _onFrame() {
                const { onStart: e, onChange: t, onRest: s } = this._events,
                    n = this._active.size > 0,
                    r = this._changed.size > 0;
                ((n && !this._started) || (r && !this._started)) &&
                    ((this._started = !0),
                    ot(e, ([e, t]) => {
                        ((t.value = this.get()), e(t, this, this._item));
                    }));
                const a = !n && this._started,
                    i = r || (a && s.size) ? this.get() : null;
                (r &&
                    t.size &&
                    ot(t, ([e, t]) => {
                        ((t.value = i), e(t, this, this._item));
                    }),
                    a &&
                        ((this._started = !1),
                        ot(s, ([e, t]) => {
                            ((t.value = i), e(t, this, this._item));
                        })));
            }
            eventObserved(e) {
                if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
                else {
                    if ('idle' != e.type) return;
                    this._active.delete(e.parent);
                }
                Me.onFrame(this._onFrame);
            }
        };
    function jn(e, t) {
        return Promise.all(t.map((t) => Dn(e, t))).then((t) => nn(e, t));
    }
    async function Dn(e, t, s) {
        const { keys: n, to: r, from: a, loop: i, onRest: o, onResolve: l } = t,
            c = st.obj(t.default) && t.default;
        (i && (t.loop = !1), !1 === r && (t.to = null), !1 === a && (t.from = null));
        const u = st.arr(r) || st.fun(r) ? r : void 0;
        u
            ? ((t.to = void 0), (t.onRest = void 0), c && (c.onRest = void 0))
            : rt(An, (s) => {
                  const n = t[s];
                  if (st.fun(n)) {
                      const r = e._events[s];
                      ((t[s] = ({ finished: e, cancelled: t }) => {
                          const s = r.get(n);
                          s
                              ? (e || (s.finished = !1), t && (s.cancelled = !0))
                              : r.set(n, { value: null, finished: e || !1, cancelled: t || !1 });
                      }),
                          c && (c[s] = t[s]));
                  }
              });
        const d = e._state;
        t.pause === !d.paused
            ? ((d.paused = t.pause), ut(t.pause ? d.pauseQueue : d.resumeQueue))
            : d.paused && (t.pause = !0);
        const p = (n || Object.keys(e.springs)).map((s) => e.springs[s].start(t)),
            m = !0 === t.cancel || !0 === Us(t, 'cancel');
        ((u || (m && d.asyncId)) &&
            p.push(
                sn(++e._lastAsyncId, {
                    props: t,
                    state: d,
                    actions: {
                        pause: tt,
                        resume: tt,
                        start(t, s) {
                            m ? (cn(d, e._lastAsyncId), s(on(e))) : ((t.onRest = o), s(ln(u, t, d, e)));
                        },
                    },
                }),
            ),
            d.paused &&
                (await new Promise((e) => {
                    d.resumeQueue.add(e);
                })));
        const h = nn(e, await Promise.all(p));
        if (i && h.finished && (!s || !h.noop)) {
            const s = En(t, i, r);
            if (s) return ($n(e, [s]), Dn(e, s, !0));
        }
        return (l && Me.batchedUpdates(() => l(h, e, e.item)), h);
    }
    function On(e, t) {
        const s = { ...e.springs };
        return (
            t &&
                rt(it(t), (e) => {
                    (st.und(e.keys) && (e = Pn(e)), st.obj(e.to) || (e = { ...e, to: void 0 }), Fn(s, e, (e) => Bn(e)));
                }),
            Mn(e, s),
            s
        );
    }
    function Mn(e, t) {
        at(t, (t, s) => {
            e.springs[s] || ((e.springs[s] = t), Jt(t, e));
        });
    }
    function Bn(e, t) {
        const s = new wn();
        return ((s.key = e), t && Jt(s, t), s);
    }
    function Fn(e, t, s) {
        t.keys &&
            rt(t.keys, (n) => {
                (e[n] || (e[n] = s(n)))._prepareNode(t);
            });
    }
    function $n(e, t) {
        rt(t, (t) => {
            Fn(e.springs, t, (t) => Bn(t, e));
        });
    }
    var Ln,
        zn,
        Un = ({ children: e, ...t }) => {
            const s = n.useContext(qn),
                r = t.pause || !!s.pause,
                a = t.immediate || !!s.immediate;
            t = (function (e, t) {
                const [s] = n.useState(() => ({ inputs: t, result: e() })),
                    r = n.useRef(),
                    a = r.current;
                let i = a;
                i
                    ? Boolean(
                          t &&
                          i.inputs &&
                          (function (e, t) {
                              if (e.length !== t.length) return !1;
                              for (let s = 0; s < e.length; s++) if (e[s] !== t[s]) return !1;
                              return !0;
                          })(t, i.inputs),
                      ) || (i = { inputs: t, result: e() })
                    : (i = s);
                return (
                    n.useEffect(() => {
                        ((r.current = i), a == s && (s.inputs = s.result = void 0));
                    }, [i]),
                    i.result
                );
            })(() => ({ pause: r, immediate: a }), [r, a]);
            const { Provider: i } = qn;
            return h.createElement(i, { value: t }, e);
        },
        qn =
            ((Ln = Un),
            (zn = {}),
            Object.assign(Ln, h.createContext(zn)),
            (Ln.Provider._context = Ln),
            (Ln.Consumer._context = Ln),
            Ln);
    ((Un.Provider = qn.Provider), (Un.Consumer = qn.Consumer));
    var Vn = () => {
        const e = [],
            t = function (t) {
                fs(
                    `${ps}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
                const n = [];
                return (
                    rt(e, (e, r) => {
                        if (st.und(t)) n.push(e.start());
                        else {
                            const a = s(t, e, r);
                            a && n.push(e.start(a));
                        }
                    }),
                    n
                );
            };
        ((t.current = e),
            (t.add = function (t) {
                e.includes(t) || e.push(t);
            }),
            (t.delete = function (t) {
                const s = e.indexOf(t);
                ~s && e.splice(s, 1);
            }),
            (t.pause = function () {
                return (rt(e, (e) => e.pause(...arguments)), this);
            }),
            (t.resume = function () {
                return (rt(e, (e) => e.resume(...arguments)), this);
            }),
            (t.set = function (t) {
                rt(e, (e, s) => {
                    const n = st.fun(t) ? t(s, e) : t;
                    n && e.set(n);
                });
            }),
            (t.start = function (t) {
                const s = [];
                return (
                    rt(e, (e, n) => {
                        if (st.und(t)) s.push(e.start());
                        else {
                            const r = this._getProps(t, e, n);
                            r && s.push(e.start(r));
                        }
                    }),
                    s
                );
            }),
            (t.stop = function () {
                return (rt(e, (e) => e.stop(...arguments)), this);
            }),
            (t.update = function (t) {
                return (rt(e, (e, s) => e.update(this._getProps(t, e, s))), this);
            }));
        const s = function (e, t, s) {
            return st.fun(e) ? e(s, t) : e;
        };
        return ((t._getProps = s), t);
    };
    function Gn(e, t) {
        const s = st.fun(e),
            [[r], a] = (function (e, t, s) {
                const r = st.fun(t) && t;
                r && !s && (s = []);
                const a = n.useMemo(() => (r || 3 == arguments.length ? Vn() : void 0), []),
                    i = n.useRef(0),
                    o = vs(),
                    l = n.useMemo(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(e, t) {
                                const s = On(e, t);
                                return i.current > 0 && !l.queue.length && !Object.keys(s).some((t) => !e.springs[t])
                                    ? jn(e, t)
                                    : new Promise((n) => {
                                          (Mn(e, s),
                                              l.queue.push(() => {
                                                  n(jn(e, t));
                                              }),
                                              o());
                                      });
                            },
                        }),
                        [],
                    ),
                    c = n.useRef([...l.ctrls]),
                    u = [],
                    d = xs(e) || 0;
                function p(e, s) {
                    for (let n = e; n < s; n++) {
                        const e = c.current[n] || (c.current[n] = new In(null, l.flush)),
                            s = r ? r(n, e) : t[n];
                        s && (u[n] = Rn(s));
                    }
                }
                (n.useMemo(() => {
                    (rt(c.current.slice(e, d), (e) => {
                        (Zs(e, a), e.stop(!0));
                    }),
                        (c.current.length = e),
                        p(d, e));
                }, [e]),
                    n.useMemo(() => {
                        p(0, Math.min(d, e));
                    }, s));
                const m = c.current.map((e, t) => On(e, u[t])),
                    h = n.useContext(Un),
                    f = xs(h),
                    g = h !== f && Ys(h);
                (_s(() => {
                    (i.current++, (l.ctrls = c.current));
                    const { queue: e } = l;
                    (e.length && ((l.queue = []), rt(e, (e) => e())),
                        rt(c.current, (e, t) => {
                            (null == a || a.add(e), g && e.start({ default: h }));
                            const s = u[t];
                            s && (Ks(e, s.ref), e.ref ? e.queue.push(s) : e.start(s));
                        }));
                }),
                    ys(() => () => {
                        rt(l.ctrls, (e) => e.stop(!0));
                    }));
                const _ = m.map((e) => ({ ...e }));
                return a ? [_, a] : _;
            })(1, s ? e : [e], s ? [] : t);
        return s || 2 == arguments.length ? [r, a] : r;
    }
    var Hn = () => Vn(),
        Qn = () => n.useState(Hn)[0];
    function Wn(e, t, s) {
        const r = st.fun(t) && t,
            {
                reset: a,
                sort: i,
                trail: o = 0,
                expires: l = !0,
                exitBeforeEnter: c = !1,
                onDestroyed: u,
                ref: d,
                config: p,
            } = r ? r() : t,
            m = n.useMemo(() => (r || 3 == arguments.length ? Vn() : void 0), []),
            f = it(e),
            g = [],
            _ = n.useRef(null),
            b = a ? null : _.current;
        (_s(() => {
            _.current = g;
        }),
            ys(
                () => (
                    rt(g, (e) => {
                        (null == m || m.add(e.ctrl), (e.ctrl.ref = m));
                    }),
                    () => {
                        rt(_.current, (e) => {
                            (e.expired && clearTimeout(e.expirationId), Zs(e.ctrl, m), e.ctrl.stop(!0));
                        });
                    }
                ),
            ));
        const v = (function (e, { key: t, keys: s = t }, n) {
                if (null === s) {
                    const t = new Set();
                    return e.map((e) => {
                        const s = n && n.find((s) => s.item === e && 'leave' !== s.phase && !t.has(s));
                        return s ? (t.add(s), s.key) : Yn++;
                    });
                }
                return st.und(s) ? e : st.fun(s) ? e.map(s) : it(s);
            })(f, r ? r() : t, b),
            y = (a && _.current) || [];
        _s(() =>
            rt(y, ({ ctrl: e, item: t, key: s }) => {
                (Zs(e, m), $s(u, t, s));
            }),
        );
        const w = [];
        if (
            (b &&
                rt(b, (e, t) => {
                    e.expired
                        ? (clearTimeout(e.expirationId), y.push(e))
                        : ~(t = w[t] = v.indexOf(e.key)) && (g[t] = e);
                }),
            rt(f, (e, t) => {
                g[t] || ((g[t] = { key: v[t], item: e, phase: 'mount', ctrl: new In() }), (g[t].ctrl.item = e));
            }),
            w.length)
        ) {
            let e = -1;
            const { leave: s } = r ? r() : t;
            rt(w, (t, n) => {
                const r = b[n];
                ~t ? ((e = g.indexOf(r)), (g[e] = { ...r, item: f[t] })) : s && g.splice(++e, 0, r);
            });
        }
        st.fun(i) && g.sort((e, t) => i(e.item, t.item));
        let x = -o;
        const E = vs(),
            P = Vs(t),
            R = new Map(),
            S = n.useRef(new Map()),
            T = n.useRef(!1);
        rt(g, (e, s) => {
            const n = e.key,
                a = e.phase,
                i = r ? r() : t;
            let u, m;
            const h = $s(i.delay || 0, n);
            if ('mount' == a) ((u = i.enter), (m = 'enter'));
            else {
                const e = v.indexOf(n) < 0;
                if ('leave' != a)
                    if (e) ((u = i.leave), (m = 'leave'));
                    else {
                        if (!(u = i.update)) return;
                        m = 'update';
                    }
                else {
                    if (e) return;
                    ((u = i.enter), (m = 'enter'));
                }
            }
            if (((u = $s(u, e.item, s)), (u = st.obj(u) ? Qs(u) : { to: u }), !u.config)) {
                const t = p || P.config;
                u.config = $s(t, e.item, s, m);
            }
            x += o;
            const f = { ...P, delay: h + x, ref: d, immediate: i.immediate, reset: !1, ...u };
            if ('enter' == m && st.und(f.from)) {
                const n = r ? r() : t,
                    a = st.und(n.initial) || b ? n.from : n.initial;
                f.from = $s(a, e.item, s);
            }
            const { onResolve: g } = f;
            f.onResolve = (e) => {
                $s(g, e);
                const t = _.current,
                    s = t.find((e) => e.key === n);
                if (s && (!e.cancelled || 'update' == s.phase) && s.ctrl.idle) {
                    const e = t.every((e) => e.ctrl.idle);
                    if ('leave' == s.phase) {
                        const t = $s(l, s.item);
                        if (!1 !== t) {
                            const n = !0 === t ? 0 : t;
                            if (((s.expired = !0), !e && n > 0))
                                return void (n <= 2147483647 && (s.expirationId = setTimeout(E, n)));
                        }
                    }
                    e && t.some((e) => e.expired) && (S.current.delete(s), c && (T.current = !0), E());
                }
            };
            const y = On(e.ctrl, f);
            'leave' === m && c
                ? S.current.set(e, { phase: m, springs: y, payload: f })
                : R.set(e, { phase: m, springs: y, payload: f });
        });
        const C = n.useContext(Un),
            N = xs(C),
            A = C !== N && Ys(C);
        (_s(() => {
            A &&
                rt(g, (e) => {
                    e.ctrl.start({ default: C });
                });
        }, [C]),
            rt(R, (e, t) => {
                if (S.current.size) {
                    const e = g.findIndex((e) => e.key === t.key);
                    g.splice(e, 1);
                }
            }),
            _s(
                () => {
                    rt(S.current.size ? S.current : R, ({ phase: e, payload: t }, s) => {
                        const { ctrl: n } = s;
                        ((s.phase = e),
                            null == m || m.add(n),
                            A && 'enter' == e && n.start({ default: C }),
                            t &&
                                (Ks(n, t.ref),
                                (!n.ref && !m) || T.current
                                    ? (n.start(t), T.current && (T.current = !1))
                                    : n.update(t)));
                    });
                },
                a ? void 0 : s,
            ));
        const k = (e) =>
            h.createElement(
                h.Fragment,
                null,
                g.map((t, s) => {
                    const { springs: n } = R.get(t) || t.ctrl,
                        r = e({ ...n }, t.item, t, s);
                    return r && r.type
                        ? h.createElement(r.type, {
                              ...r.props,
                              key: st.str(t.key) || st.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref,
                          })
                        : r;
                }),
            );
        return m ? [k, m] : k;
    }
    var Yn = 1;
    var Xn = class extends hn {
        constructor(e, t) {
            (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = qt(...t)));
            const s = this._get(),
                n = Ds(s);
            Rs(this, n.create(s));
        }
        advance(e) {
            const t = this._get();
            (nt(t, this.get()) || (Ps(this).setValue(t), this._onChange(t, this.idle)),
                !this.idle && Kn(this._active) && Jn(this));
        }
        _get() {
            const e = st.arr(this.source) ? this.source.map(Wt) : it(Wt(this.source));
            return this.calc(...e);
        }
        _start() {
            this.idle &&
                !Kn(this._active) &&
                ((this.idle = !1),
                rt(Ss(this), (e) => {
                    e.done = !1;
                }),
                et.skipAnimation ? (Me.batchedUpdates(() => this.advance()), Jn(this)) : yt.start(this));
        }
        _attach() {
            let e = 1;
            (rt(it(this.source), (t) => {
                (Qt(t) && Jt(t, this), pn(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
            }),
                (this.priority = e),
                this._start());
        }
        _detach() {
            (rt(it(this.source), (e) => {
                Qt(e) && es(e, this);
            }),
                this._active.clear(),
                Jn(this));
        }
        eventObserved(e) {
            'change' == e.type
                ? e.idle
                    ? this.advance()
                    : (this._active.add(e.parent), this._start())
                : 'idle' == e.type
                  ? this._active.delete(e.parent)
                  : 'priority' == e.type &&
                    (this.priority = it(this.source).reduce((e, t) => Math.max(e, (pn(t) ? t.priority : 0) + 1), 0));
        }
    };
    function Zn(e) {
        return !1 !== e.idle;
    }
    function Kn(e) {
        return !e.size || Array.from(e).every(Zn);
    }
    function Jn(e) {
        e.idle ||
            ((e.idle = !0),
            rt(Ss(e), (e) => {
                e.done = !0;
            }),
            Xt(e, { type: 'idle', parent: e }));
    }
    et.assign({ createStringInterpolator: ds, to: (e, t) => new Xn(e, t) });
    var er = /^--/;
    function tr(e, t) {
        return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : 'number' != typeof t || 0 === t || er.test(e) || (nr.hasOwnProperty(e) && nr[e])
              ? ('' + t).trim()
              : t + 'px';
    }
    var sr = {};
    var nr = {
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
        rr = ['Webkit', 'Ms', 'Moz', 'O'];
    nr = Object.keys(nr).reduce(
        (e, t) => (rr.forEach((s) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(s, t)] = e[t])), e),
        nr,
    );
    var ar = /^(matrix|translate|scale|rotate|skew)/,
        ir = /^(translate)/,
        or = /^(rotate|skew)/,
        lr = (e, t) => (st.num(e) && 0 !== e ? e + t : e),
        cr = (e, t) => (st.arr(e) ? e.every((e) => cr(e, t)) : st.num(e) ? e === t : parseFloat(e) === t),
        ur = class extends ks {
            constructor({ x: e, y: t, z: s, ...n }) {
                const r = [],
                    a = [];
                ((e || t || s) &&
                    (r.push([e || 0, t || 0, s || 0]),
                    a.push((e) => [`translate3d(${e.map((e) => lr(e, 'px')).join(',')})`, cr(e, 0)])),
                    at(n, (e, t) => {
                        if ('transform' === t) (r.push([e || '']), a.push((e) => [e, '' === e]));
                        else if (ar.test(t)) {
                            if ((delete n[t], st.und(e))) return;
                            const s = ir.test(t) ? 'px' : or.test(t) ? 'deg' : '';
                            (r.push(it(e)),
                                a.push(
                                    'rotate3d' === t
                                        ? ([e, t, n, r]) => [`rotate3d(${e},${t},${n},${lr(r, s)})`, cr(r, 0)]
                                        : (e) => [
                                              `${t}(${e.map((e) => lr(e, s)).join(',')})`,
                                              cr(e, t.startsWith('scale') ? 1 : 0),
                                          ],
                                ));
                        }
                    }),
                    r.length && (n.transform = new dr(r, a)),
                    super(n));
            }
        },
        dr = class extends Zt {
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
                    rt(this.inputs, (s, n) => {
                        const r = Wt(s[0]),
                            [a, i] = this.transforms[n](st.arr(r) ? r : s.map(Wt));
                        ((e += ' ' + a), (t = t && i));
                    }),
                    t ? 'none' : e
                );
            }
            observerAdded(e) {
                1 == e && rt(this.inputs, (e) => rt(e, (e) => Qt(e) && Jt(e, this)));
            }
            observerRemoved(e) {
                0 == e && rt(this.inputs, (e) => rt(e, (e) => Qt(e) && es(e, this)));
            }
            eventObserved(e) {
                ('change' == e.type && (this._value = null), Xt(this, e));
            }
        };
    et.assign({
        batchedUpdates: a.unstable_batchedUpdates,
        createStringInterpolator: ds,
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
    var pr = ((
            e,
            {
                applyAnimatedValues: t = () => !1,
                createAnimatedStyle: s = (e) => new ks(e),
                getComponentProps: n = (e) => e,
            } = {},
        ) => {
            const r = { applyAnimatedValues: t, createAnimatedStyle: s, getComponentProps: n },
                a = (e) => {
                    const t = Fs(e) || 'Anonymous';
                    return (
                        ((e = st.str(e) ? a[e] || (a[e] = Os(e, r)) : e[Bs] || (e[Bs] = Os(e, r))).displayName =
                            `Animated(${t})`),
                        e
                    );
                };
            return (
                at(e, (t, s) => {
                    (st.arr(e) && (s = Fs(t)), (a[s] = a(t)));
                }),
                { animated: a }
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
                    const s = 'filter' === e.nodeName || (e.parentNode && 'filter' === e.parentNode.nodeName),
                        { style: n, children: r, scrollTop: a, scrollLeft: i, viewBox: o, ...l } = t,
                        c = Object.values(l),
                        u = Object.keys(l).map((t) =>
                            s || e.hasAttribute(t)
                                ? t
                                : sr[t] || (sr[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                        );
                    void 0 !== r && (e.textContent = r);
                    for (const d in n)
                        if (n.hasOwnProperty(d)) {
                            const t = tr(d, n[d]);
                            er.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                        }
                    (u.forEach((t, s) => {
                        e.setAttribute(t, c[s]);
                    }),
                        void 0 !== a && (e.scrollTop = a),
                        void 0 !== i && (e.scrollLeft = i),
                        void 0 !== o && e.setAttribute('viewBox', o));
                },
                createAnimatedStyle: (e) => new ur(e),
                getComponentProps: ({ scrollTop: e, scrollLeft: t, ...s }) => s,
            },
        ),
        mr = pr.animated;
    const hr = {
            model: (e, t) => i.computedFn(e, { equals: ne, ...t }),
            primitive: i.computedFn,
            shallow: (e, t) => i.computedFn(e, { equals: s.comparer.shallow, ...t }),
            structural: (e, t) => i.computedFn(e, { equals: s.comparer.structural, ...t }),
        },
        fr = (e) => (t) => {
            e.forEach((e) =>
                ((e, t) => {
                    e && ('function' == typeof e ? e(t) : (e.current = t));
                })(e, t),
            );
        };
    (n.forwardRef(function (t, s) {
        const r = n.useRef(null);
        return (
            n.useEffect(() => {
                const e = r.current;
                if (null !== e)
                    return V.onHitTest((t) => {
                        const s = e.getBoundingClientRect();
                        return s.left <= t.x && t.x <= s.right && s.top <= t.y && t.y <= s.bottom;
                    });
            }, []),
            e.jsx('div', { ...t, ref: fr([s, r]) })
        );
    }),
        n.createContext(void 0));
    const gr = [];
    function _r(e) {
        const t = n.useRef(e);
        return (
            n.useLayoutEffect(() => {
                t.current = e;
            }),
            n.useCallback((...e) => (0, t.current)(...e), gr)
        );
    }
    function br(e) {
        n.useEffect(() => e, []);
    }
    function vr(e, t) {
        n.useEffect(() => {
            let t = () => {};
            const s = () => {
                (t(),
                    (t = ((e) => {
                        let t,
                            s = null;
                        return (
                            (s = requestAnimationFrame(() => {
                                s = requestAnimationFrame(() => {
                                    ((s = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== s && cancelAnimationFrame(s));
                            }
                        );
                    })(e)));
            };
            return (
                window.addEventListener('resize', s),
                () => {
                    (t(), window.removeEventListener('resize', s));
                }
            );
        }, t);
    }
    function yr() {
        const e = n.useRef(0);
        return (
            br(() => {
                window.cancelAnimationFrame(e.current);
            }),
            n.useMemo(
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
    const wr = new WeakMap(),
        xr = 0,
        Er = { await: 'await', idle: 'idle', display: 'display' };
    function Pr({ resId: e = xr, contentId: t, decoratorId: s, disabled: r, args: a, showDelay: i = 400 }) {
        const o = n.useRef({ status: Er.idle, resId: e, timeoutId: 0 }),
            [l, c] = n.useMemo(() => {
                let n = null;
                function l() {
                    r ||
                        ((o.current.status = Er.await),
                        window.clearTimeout(o.current.timeoutId),
                        (o.current.timeoutId = window.setTimeout(c, i)));
                }
                function c() {
                    ((o.current.status = Er.display), X.tooltip.open(e, t, s, a), n && wr.set(n, d));
                }
                function u() {
                    if (
                        (window.clearTimeout(o.current.timeoutId),
                        o.current.status === Er.display && X.tooltip.hide(e, t, s),
                        (o.current.status = Er.idle),
                        n)
                    ) {
                        wr.delete(n);
                        let e = n.parentElement;
                        for (; e && !wr.has(e); ) e = e.parentElement;
                        if (e) {
                            wr.get(e).show();
                        }
                        n = null;
                    }
                }
                const d = {
                    hide: u,
                    show: c,
                    rerun: function () {
                        o.current.status !== Er.idle && (r ? d.hide() : l());
                    },
                };
                return [
                    d,
                    {
                        onMouseEnter: (e) => {
                            ((n = null == e ? void 0 : e.currentTarget), l());
                        },
                        onMouseLeave: r ? te : u,
                        onClick: r ? te : u,
                    },
                ];
            }, [a, t, s, r, e, i]);
        return (
            n.useEffect(() => {
                l.rerun();
            }, [l]),
            br(_r(l.hide)),
            c
        );
    }
    function Rr({ alert: e, body: t, header: s, note: r, hasHtmlContent: a, disabled: i }) {
        const o = f.resolve('views');
        return Pr({
            disabled: i,
            contentId: o.read((e) =>
                a
                    ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                    : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
            ),
            decoratorId: o.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
            args: n.useMemo(() => ({ body: t, header: s, note: r, alert: e }), [e, t, s, r]),
        });
    }
    const Sr = {
        click: Tr('play'),
        'hot-key': Tr('play'),
        'mouse-enter': Tr('highlight'),
        increaseAmount: Tr('cons_ammo_single_plus'),
        decreaseAmount: Tr('cons_ammo_single_minus'),
        increaseAmountRoll: Tr('cons_ammo_roll_plus'),
        decreaseAmountRoll: Tr('cons_ammo_roll_minus'),
        close: Tr('cancelcloseno'),
        'show-context-menu': Tr('tabb'),
        progressSimple: Tr('gui_hangar_progressbar_simple'),
        increaseDelta: Tr('gui_hangar_progressbar_delta_increase'),
        decreaseDelta: Tr('gui_hangar_progressbar_delta_decrease'),
        increaseDeltaMax: Tr('gui_hangar_progressbar_delta_max'),
        pointerGrab: Tr('gui_hangar_progressbar_pointer_grab'),
        pointerDrag: Tr('gui_hangar_progressbar_pointer_drag'),
    };
    function Tr(e) {
        return () => {
            U.sound(e);
        };
    }
    const Cr = n.createContext(null);
    function Nr({ severity: t = 'warn', overrides: s, silent: r = !1, children: a }) {
        const i = n.useMemo(() => ({ ...Sr, ...s }), [s]),
            o = n.useMemo(
                () => ({
                    play: function (e, s) {
                        if (r) return;
                        const n = i[e];
                        n
                            ? n(s)
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
        return e.jsx(Cr.Provider, { value: o, children: a });
    }
    function Ar() {
        const e = n.useContext(Cr);
        if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
        return e;
    }
    const kr = 'TruncateText_dcb41d92',
        Ir = n.forwardRef(function ({ text: t, tooltipParams: s, className: r, ...a }, i) {
            const o = Rr({ header: null == s ? void 0 : s.header, body: (null == s ? void 0 : s.body) || t }),
                l = n.useRef(null),
                [c, u] = n.useState(!1);
            const d = n.useCallback(() => {
                if (l.current) {
                    const { scrollWidth: e, offsetWidth: t } = l.current;
                    u(e > t);
                }
            }, []);
            var p, m;
            return (
                n.useEffect(() => {
                    c || o.onMouseLeave();
                }, [c, o]),
                (p = d),
                (m = [d]),
                n.useEffect(() => {
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
                vr(d, [d]),
                ((e, t, s = !0) => {
                    const r = _r((e) => {
                        const s = e[0];
                        s && t(s);
                    });
                    n.useEffect(() => {
                        if (!e.current || !s) return;
                        const t = new ResizeObserver((e) => r(e));
                        return (
                            t.observe(e.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [r, s, e]);
                })(l, d),
                e.jsx('div', {
                    ...a,
                    ref: function (e) {
                        ((l.current = e), 'function' == typeof i ? i(e) : i && (i.current = e));
                    },
                    className: j(kr, r),
                    ...(c ? o : {}),
                    children: t,
                })
            );
        });
    function jr(e) {
        var t,
            s,
            n = '';
        if ('string' == typeof e || 'number' == typeof e) n += e;
        else if ('object' == typeof e)
            if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (s = jr(e[t])) && (n && (n += ' '), (n += s));
            else for (t in e) e[t] && (n && (n += ' '), (n += t));
        return n;
    }
    const Dr = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
        Or = function () {
            for (var e, t, s = 0, n = ''; s < arguments.length; )
                (e = arguments[s++]) && (t = jr(e)) && (n && (n += ' '), (n += t));
            return n;
        },
        Mr = (e, t) => (s) => {
            var n;
            if (null == (null == t ? void 0 : t.variants))
                return Or(e, null == s ? void 0 : s.class, null == s ? void 0 : s.className);
            const { variants: r, defaultVariants: a } = t,
                i = Object.keys(r).map((e) => {
                    const t = null == s ? void 0 : s[e],
                        n = null == a ? void 0 : a[e];
                    if (null === t) return null;
                    const i = Dr(t) || Dr(n);
                    return r[e][i];
                }),
                o =
                    s &&
                    Object.entries(s).reduce((e, t) => {
                        let [s, n] = t;
                        return (void 0 === n || (e[s] = n), e);
                    }, {}),
                l =
                    null == t || null === (n = t.compoundVariants) || void 0 === n
                        ? void 0
                        : n.reduce((e, t) => {
                              let { class: s, className: n, ...r } = t;
                              return Object.entries(r).every((e) => {
                                  let [t, s] = e;
                                  return Array.isArray(s) ? s.includes({ ...a, ...o }[t]) : { ...a, ...o }[t] === s;
                              })
                                  ? [...e, s, n]
                                  : e;
                          }, []);
            return Or(e, i, l, null == s ? void 0 : s.class, null == s ? void 0 : s.className);
        };
    function Br(t, s, r) {
        var a;
        const i =
                'object' == typeof s && 'cva' in s
                    ? null == (a = s.cva)
                        ? void 0
                        : a.variants
                    : null == r
                      ? void 0
                      : r.variants,
            o = i ? Object.keys(i) : [];
        if ('object' == typeof s) {
            const e = s,
                r = Mr(e.className, e.cva),
                a = e.element,
                i = n.forwardRef(function (e, t) {
                    return n.createElement(a, { ...('function' == typeof a ? e : Fr(o, e)), ref: t, className: r(e) });
                });
            return ((i.displayName = t), e.cva && (i.cva = e.cva), i);
        }
        const l = Mr(s, r),
            c = n.forwardRef(function (s, n) {
                return e.jsx('div', { 'data-name': t, ...Fr(o, s), ref: n, className: l(s) });
            });
        return ((c.displayName = t), r && (c.cva = r), c);
    }
    function Fr(e, t) {
        if (0 === e.length) return t;
        const s = { ...t };
        for (const n of e) delete s[n];
        return s;
    }
    const $r = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
        Lr = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
        zr = Br('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
        Ur = n.forwardRef(function (
            { children: t, onClick: s, onMouseEnter: n, soundTarget: r, disabled: a = !1, silent: i = !1, ...o },
            l,
        ) {
            const c = Ar();
            return e.jsx(zr, {
                ...o,
                ref: l,
                onMouseEnter: function (e) {
                    (a || i || c.play('mouse-enter', { target: r || 'Button', original: e }), null == n || n(e));
                },
                onClick: function (e) {
                    a || (i || c.play('click', { target: r || 'Button', original: e }), null == s || s(e));
                },
                children: t,
            });
        }),
        qr = {
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
        Vr = n.forwardRef(function (
            {
                children: t,
                size: s = Lr.large,
                theme: n = $r.primary,
                disabled: r = !1,
                silent: a = !1,
                autoAlignContent: i = !0,
                classNames: o,
                className: l,
                ...c
            },
            u,
        ) {
            return e.jsxs(Ur, {
                ...c,
                ref: u,
                silent: a,
                disabled: r,
                className: j(
                    qr.base,
                    qr[`base__size-${s}`],
                    qr[`base__theme-${n}`],
                    r ? qr.base__disabled : qr.base__enabled,
                    l,
                    null == o ? void 0 : o.base,
                ),
                onClick: function (e) {
                    var t;
                    r || null == (t = c.onClick) || t.call(c, e);
                },
                children: [
                    e.jsx('div', { className: j(qr.background, null == o ? void 0 : o.background) }),
                    e.jsx('div', { className: j(qr.border, null == o ? void 0 : o.border) }),
                    e.jsx('div', { className: j(qr.overlay, null == o ? void 0 : o.overlay) }),
                    e.jsx('div', {
                        className: j(qr.content, i && qr.content__fontAligned, null == o ? void 0 : o.content),
                        children: t,
                    }),
                ],
            });
        });
    ((Vr.themes = $r), (Vr.sizes = Lr));
    const Gr = 'Action_6c7b0c76',
        Hr = 'Action_icon_7d5aed3b',
        Qr = n.forwardRef(function ({ className: t, theme: s = Vr.themes.secondary, tooltipParams: n, ...r }, a) {
            const i = Rr({
                alert: null == n ? void 0 : n.alert,
                header: null == n ? void 0 : n.header,
                body: null == n ? void 0 : n.body,
                note: null == n ? void 0 : n.note,
            });
            return e.jsx(Vr, {
                ...r,
                ref: a,
                onClick: (e) => {
                    (r.onClick(e), n && i.onClick());
                },
                onMouseEnter: (e) => {
                    var t;
                    (null == (t = r.onMouseEnter) || t.call(r, e), n && i.onMouseEnter(e));
                },
                onMouseLeave: (e) => {
                    var t;
                    (null == (t = r.onMouseLeave) || t.call(r, e), n && i.onMouseLeave());
                },
                autoAlignContent: !1,
                theme: s,
                className: j(Gr, t),
                children: e.jsx(ye, { width: 10, height: 20, path: 'post_battle.progression.arrow', className: Hr }),
            });
        }),
        Wr = 'Header_background_91826dd5',
        Yr = 'Header_mask_afb9c38d',
        Xr = 'Header_border_c6b1d37f',
        Zr = Br('CardHeader', 'Header_1c2ee301'),
        Kr = n.forwardRef(function ({ classNames: t, className: s, ...n }, r) {
            return e.jsxs(Zr, {
                ...n,
                className: j(null == t ? void 0 : t.base, s),
                ref: r,
                children: [
                    e.jsx('div', { className: j(Wr, null == t ? void 0 : t.background) }),
                    e.jsx('div', { className: j(Yr, null == t ? void 0 : t.mask) }),
                    e.jsx('div', { className: j(Xr, null == t ? void 0 : t.border) }),
                    n.children,
                ],
            });
        }),
        Jr = Br('CardTitle', 'Title_e5ecf295'),
        ea = n.forwardRef(function (t, s) {
            return e.jsx(Jr, { ...t, ref: s, children: t.children });
        }),
        ta = 'Card_content_f7ddaa4a',
        sa = Br('Card', 'Card_3f55e450'),
        na = Br('CardContent', ta),
        ra = n.forwardRef(function (t, s) {
            return e.jsx(sa, { ...t, ref: s, children: t.children });
        });
    ((ra.Header = Kr), (ra.Content = na), (ra.Action = Qr), (ra.Title = ea));
    const aa = { Text: 1, Tag: 2, Var: 3 };
    function ia(e, t) {
        const s = [],
            n = [];
        let r = '',
            a = !1,
            i = '',
            o = 0;
        for (let l = 0; l < e.length; l++) {
            const c = e[l];
            if (c === t.start[0] && e.slice(l, l + t.start.length) === t.start) {
                if (r) {
                    if (n.length > 0) {
                        n[n.length - 1].node.children.push({ type: aa.Text, value: r });
                    } else s.push({ type: aa.Text, value: r });
                    r = '';
                }
                ((a = !0), (l += t.start.length - 1));
            } else if (c === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                ((a = !1), (l += t.end.length - 1));
                const e = i.trim();
                if (e.startsWith('@')) {
                    const t = e.slice(1).trim(),
                        r = { type: aa.Tag, attrs: t.split('|'), instanceId: ++o, children: [] };
                    if (n.length > 0) {
                        n[n.length - 1].node.children.push(r);
                    } else s.push(r);
                    n.push({ node: r, startIndex: s.length });
                } else if ('/' === e) n.length > 0 && n.pop();
                else {
                    const t = { type: aa.Var, instanceId: ++o, name: e };
                    if (n.length > 0) {
                        n[n.length - 1].node.children.push(t);
                    } else s.push(t);
                }
                i = '';
            } else a ? (i += c) : (r += c);
        }
        if (r)
            if (n.length) {
                n[n.length - 1].node.children.push({ type: aa.Text, value: r });
            } else s.push({ type: aa.Text, value: r });
        return s;
    }
    const oa = {
            COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
            base: 'FormatText_db904f12',
            base__fullSize: 'FormatText_base__fullSize_a514958e',
            nowrap: 'FormatText_nowrap_ff69eca3',
        },
        la = new Set((null == (l = oa.COLORS) ? void 0 : l.split(', ')) ?? []);
    let ca = 0;
    function ua() {
        return ++ca;
    }
    const da =
        /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
    function pa(t) {
        const s = f.resolve('langCode');
        return (function (e, t, s) {
            return fe.has(t) ? e.map(s) : e.map((e, t, n) => (t === n.length - 1 ? s(e, t, n) : s(`${e} `, t, n)));
        })(
            (function (e, t) {
                return (me[t] ?? he)(e);
            })(t, s),
            s,
            (t, s) => t && e.jsx('span', { children: t }, `${t}${s}`),
        );
    }
    function ma(t) {
        return Array.isArray(t)
            ? (function (t) {
                  const s = [];
                  for (let r = 0; r < t.length; r++) {
                      const a = t[r],
                          i = t[r + 1];
                      if ('string' != typeof i || !da.test(i)) {
                          s.push(ma(a));
                          continue;
                      }
                      const o = pa(i.slice(1));
                      (s.push(
                          e.jsxs(
                              n.Fragment,
                              { children: [e.jsxs('span', { className: oa.nowrap, children: [ma(a), i[0]] }), o] },
                              ua(),
                          ),
                      ),
                          (r += 1));
                  }
                  return s;
              })(t)
            : 'string' == typeof t
              ? e.jsx(n.Fragment, { children: pa(t) }, ua())
              : t;
    }
    const ha = {
        class: function (t, ...s) {
            return e.jsx(
                'span',
                { className: s.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: t },
                ua(),
            );
        },
        colorLegacy: function (t, s) {
            const n = ua();
            return la.has(String(s))
                ? e.jsx('span', { className: `FormatText_colorLegacy__${s}`, children: t }, n)
                : e.jsx('span', { style: { color: `#${s}` }, children: t }, n);
        },
        bold: (e) => ['fontWeight', 'bold'],
        split: ma,
        style: function (t, ...s) {
            return e.jsx(
                'span',
                {
                    style: s.reduce((e, n) => {
                        if (Array.isArray(n)) {
                            const [t, s] = n;
                            return ((e[t] = s), e);
                        }
                        return (console.warn(`Invalid argument ${n} in ${t}: ${s}`), e);
                    }, {}),
                    children: t,
                },
                ua(),
            );
        },
        color: (e, t) => ['color', t],
        fontSize: (e, t) => ['fontSize', t],
        fontWeight: (e, t) => ['fontWeight', t],
        textDecoration: (e, t) => ['textDecoration', t],
    };
    function fa(e, t, s, n) {
        const r = s.map((t) => {
                if ('string' != typeof t) return t;
                const s = t.trim();
                if (s.startsWith('(') && s.endsWith(')')) {
                    const [t, ...r] = s.slice(1, -1).split(' ');
                    return t ? fa(e, t, r, n) : e;
                }
                return s.startsWith("'") && s.endsWith("'") ? s.slice(1, -1) : s;
            }),
            a = n[t];
        return a ? a(e, ...r) : (console.error(`Function ${t} is not registered`), e);
    }
    function ga(e, t, s) {
        return e.reduce((e, t) => {
            const [n, ...r] = (function (e) {
                const t = [];
                let s = '',
                    n = !1,
                    r = !1,
                    a = '';
                for (let i = 0; i < e.length; i++) {
                    const o = e[i];
                    ("'" !== o && '"' !== o) || r || n
                        ? o === a && r
                            ? ((r = !1), (s += o))
                            : '(' !== o || r
                              ? ')' === o && n && !r
                                  ? ((n = !1), (s += o))
                                  : ' ' !== o || n || r
                                    ? (s += o)
                                    : s && (t.push(s), (s = ''))
                              : ((n = !0), (s += o))
                        : ((r = !0), (a = o), (s += o));
                }
                return (s && t.push(s), t);
            })(t.trim());
            return n ? fa(e, n, r, s) : e;
        }, t);
    }
    function _a(e) {
        return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
    }
    function ba(e, t) {
        for (let s = 0; s < e.length; s++) {
            if ('$' === e[s]) {
                let n = s + 1;
                for (; n < e.length && !_a(e[n]); ) n++;
                const r = e.slice(s + 1, n),
                    a = t[r];
                if (a) return ba(e.replace(`$${r}`, String(a)), t);
            }
        }
        return e;
    }
    function va(e, t) {
        const s = [];
        for (let n = 0; n < e.length; n++) s[n] = ba(e[n], t);
        return s;
    }
    const ya = ['number', 'string', 'undefined'];
    function wa(t, s, r = {}, a = !0) {
        a && (ca = 0);
        const i = [];
        function o(e) {
            if (ya.includes(typeof e)) {
                const t = i.at(-1);
                if ('string' == typeof t) return void (i[i.length - 1] = t + e);
            }
            i.push(e);
        }
        for (const l of t)
            if (l.type === aa.Text) o(l.value);
            else if (l.type === aa.Var)
                null === r[l.name] || ya.includes(typeof r[l.name])
                    ? o(r[l.name] ?? `{{${l.name}}}`)
                    : i.push(e.jsx(n.Fragment, { children: r[l.name] }, `var-${l.name}-${l.instanceId}`));
            else if (l.type === aa.Tag) {
                const e = wa(l.children, s, r, !1),
                    t = ga(va(l.attrs, r), e, s);
                i.push(t);
            }
        return i;
    }
    function xa(e) {
        return e
            .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
            .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
    }
    function Ea(e) {
        return e
            .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
            .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
    }
    function Pa(e) {
        return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
    }
    function Ra(e) {
        return (function (e, t, s, n, r, a, i, o, l) {
            switch (arguments.length) {
                case 1:
                    return e;
                case 2:
                    return t(e);
                case 3:
                    return s(t(e));
                case 4:
                    return n(s(t(e)));
                case 5:
                    return r(n(s(t(e))));
                case 6:
                    return a(r(n(s(t(e)))));
                case 7:
                    return i(a(r(n(s(t(e))))));
                case 8:
                    return o(i(a(r(n(s(t(e)))))));
                case 9:
                    return l(o(i(a(r(n(s(t(e))))))));
                default: {
                    let e = arguments[0];
                    for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
                    return e;
                }
            }
        })(e, Pa, xa, Ea);
    }
    const Sa = { start: '{{', end: '}}' },
        Ta = n.memo(function (t) {
            const {
                    brackets: s = Sa,
                    text: r,
                    params: a,
                    upgradeLegacy: i,
                    fullSize: o,
                    inline: l,
                    formatters: c,
                    split: u,
                    ...d
                } = t,
                p = n.useMemo(() => (t.upgradeLegacy ? Ra(t.text) : t.text), [t.text, t.upgradeLegacy]),
                m = n.useMemo(() => (t.formatters ? { ...ha, ...t.formatters } : ha), [t.formatters]),
                h = n.useMemo(() => ia(u ? `{{@ split}}${p}{{/}}` : p, s), [s, p, u]),
                f = n.useMemo(() => wa(h, m, t.params), [h, m, t.params]),
                g = j(oa.base, o && oa.base__fullSize, d.className);
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
                      children: f,
                  }))
                : e.jsx('span', { ...d, className: g, children: f });
        });
    function Ca({ path: t, ...s }) {
        return e.jsx(Ta, { text: f.resolve('strings').readOrEmpty(t), ...s });
    }
    const Na = { base: 'AnimatedValue_d9f4b2f0', animatedValue: 'AnimatedValue_animatedValue_4c490d83' },
        Aa = D.cubicBezier(0.33, 0, 0.25, 1),
        ka = 330,
        Ia = 330;
    function ja(e) {
        return {
            enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
            leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
        };
    }
    function Da({ value: t, transition: s, children: r, className: a, classNames: i }) {
        const o = n.useMemo(ge, []),
            l = Wn(t, {
                ...s,
                initial: { opacity: 1, y: '0rem', ...(null == s ? void 0 : s.initial) },
                from: { opacity: 0, y: '-5rem', ...(null == s ? void 0 : s.from) },
                enter: () => ({
                    opacity: 1,
                    y: '0rem',
                    delay: Ia,
                    config: { easing: Aa, duration: ka },
                    onStart: () => {
                        const { enterElements: e, leftElements: t } = ja(o);
                        (e.forEach((e) => {
                            e instanceof HTMLElement && ((e.style.width = 'auto'), (e.style.position = 'relative'));
                        }),
                            t.forEach((e) => {
                                e instanceof HTMLElement && (e.style.position = 'absolute');
                            }));
                    },
                    ...(null == s ? void 0 : s.enter),
                }),
                leave: () => ({
                    top: 0,
                    left: 0,
                    opacity: 0,
                    y: '5rem',
                    config: { easing: Aa, duration: ka },
                    onStart: () => {
                        let e = 0;
                        const { enterElements: t, leftElements: s } = ja(o);
                        (s.forEach((t) => {
                            t instanceof HTMLElement &&
                                ((e = Math.max(e, t.offsetWidth)), (t.style.position = 'relative'));
                        }),
                            t.forEach((t) => {
                                t instanceof HTMLElement &&
                                    ((t.style.width = `${e}px`), (t.style.position = 'absolute'));
                            }));
                    },
                    ...(null == s ? void 0 : s.leave),
                }),
            });
        return e.jsx('div', {
            className: j(Na.base, a),
            children: l((s, n) => {
                const a = 0 === s.opacity.get() && !1 === s.opacity.isAnimating;
                return e.jsx(mr.div, {
                    className: j(
                        Na.animatedValue,
                        `js-animated-value-${o}-${t === n ? 'enter' : 'leave'}`,
                        null == i ? void 0 : i.animatedValue,
                    ),
                    style: { ...s, position: a ? 'absolute' : 'relative' },
                    children: r(n),
                });
            }),
        });
    }
    const Oa = {
            base: 'ProgressCount_3c6daa70',
            label: 'ProgressCount_label_d15406bd',
            total: 'ProgressCount_total_4f222a62',
            divider: 'ProgressCount_divider_487d7768',
        },
        Ma = f.resolve('intl');
    function Ba({ withLabel: e, withoutLimit: t }) {
        return t
            ? 'battle_results.progression.missionsCompleteCounter'
            : 'battle_results.progression.completedPointsFrom.' + (e ? 'withLabel' : 'withoutLabel');
    }
    function Fa({ current: t, total: s, withLabel: n, withoutLimit: r, className: a, classNames: i }) {
        return e.jsx(Ca, {
            path: Ba({ withLabel: n, withoutLimit: r }),
            className: j(Oa.base, a),
            params: {
                completed: Ma.formatNumber('integral', t),
                total: Ma.formatNumber('integral', s),
                totalClass: j(Oa.total, null == i ? void 0 : i.total),
                labelClass: n && j(Oa.label, null == i ? void 0 : i.label),
            },
        });
    }
    function $a({
        current: t,
        total: s,
        withLabel: r,
        className: a,
        classNames: i,
        transitionCurrent: o,
        transitionTotal: l,
    }) {
        const c = Ar(),
            u = n.useRef({ transitionCurrent: o, transitionTotal: l });
        return (
            n.useEffect(() => {
                u.current = { transitionCurrent: o, transitionTotal: l };
            }, [o, l]),
            e.jsx(Ca, {
                path: 'battle_results.progression.completedPointsFrom.' + (r ? 'withLabel' : 'withoutLabel'),
                className: j(Oa.base, a),
                params: {
                    completed: e.jsx(Da, {
                        className: null == i ? void 0 : i.currentTransitionWrapper,
                        value: Ma.formatNumber('integral', t),
                        transition: {
                            ...o,
                            enter: {
                                ...o.enter,
                                onRest: (...e) => {
                                    var t;
                                    (!0 !== u.current.transitionCurrent.immediate &&
                                        c.play('numbersShown', { target: 'mission-progress:progress-stats' }),
                                        'function' ==
                                            typeof (null == (t = null == u ? void 0 : u.current.transitionCurrent)
                                                ? void 0
                                                : t.onRest) && u.current.transitionCurrent.onRest(...e));
                                },
                            },
                        },
                        children: se,
                    }),
                    total: e.jsx(Da, {
                        className: null == i ? void 0 : i.totalTransitionWrapper,
                        value: Ma.formatNumber('integral', s),
                        transition: {
                            ...l,
                            enter: {
                                ...(null == l ? void 0 : l.enter),
                                onRest: (...e) => {
                                    var t, s;
                                    (!0 !== (null == (t = u.current.transitionTotal) ? void 0 : t.immediate) &&
                                        c.play('numbersShown', { target: 'mission-progress:progress-stats' }),
                                        'function' ==
                                            typeof (null == (s = null == u ? void 0 : u.current.transitionTotal)
                                                ? void 0
                                                : s.onRest) && u.current.transitionTotal.onRest(...e));
                                },
                            },
                        },
                        children: se,
                    }),
                    totalClass: j(Oa.total, null == i ? void 0 : i.total),
                    labelClass: r && j(Oa.label, null == i ? void 0 : i.label),
                    dividerClass: Oa.divider,
                },
            })
        );
    }
    const La = {
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
    function za({
        title: t,
        titleImageProps: s,
        disabled: n,
        actionTooltipParams: r,
        onHeaderClick: a,
        onButtonAction: i,
        children: o,
        progressionCountProps: l,
        className: c,
        classNames: u,
        ...d
    }) {
        var p, m, h;
        return e.jsxs(ra, {
            className: j(La.card, n && La.card__disabled, c),
            ...d,
            children: [
                e.jsxs(ra.Header, {
                    onClick: a,
                    className: j(La.cardHeader, null == (p = null == u ? void 0 : u.header) ? void 0 : p.base),
                    classNames: {
                        ...(null == u ? void 0 : u.header),
                        background: j(
                            La.cardHeaderBackground,
                            null == (m = null == u ? void 0 : u.header) ? void 0 : m.background,
                        ),
                        border: j(La.cardHeaderBorder, null == (h = null == u ? void 0 : u.header) ? void 0 : h.border),
                    },
                    children: [
                        e.jsxs('div', {
                            className: j(La.head, null == u ? void 0 : u.head),
                            children: [
                                e.jsxs('div', {
                                    className: La.titleContainer,
                                    children: [
                                        void 0 !== s && e.jsx(ye, { ...s }),
                                        e.jsx(ra.Title, {
                                            className: j(La.title, null == u ? void 0 : u.title),
                                            children: e.jsx(Ir, { text: t }),
                                        }),
                                    ],
                                }),
                                void 0 !== i &&
                                    e.jsx(ra.Action, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), i(e));
                                        },
                                        className: j(La.action, null == u ? void 0 : u.action),
                                        tooltipParams: r,
                                    }),
                            ],
                        }),
                        e.jsx('div', {
                            className: j(La.tail, null == u ? void 0 : u.tail),
                            children: void 0 !== l && e.jsx(Fa, { ...l }),
                        }),
                    ],
                }),
                void 0 !== o &&
                    e.jsx(ra.Content, { className: j(La.content, null == u ? void 0 : u.content), children: o }),
                e.jsx('div', { className: La.divider }),
            ],
        });
    }
    const Ua = {
        showCheckMark: { 'mission-progress:checkmark': 'umg_hub_quest_complete' },
        numbersShown: {
            'mission-progress:received-value': 'gui_pbs_missions_progress_stats',
            'mission-progress:progress-stats': 'gui_pbs_missions_progress_stats',
        },
    };
    function qa(e) {
        for (let t = 0; t < document.styleSheets.length; t++) {
            const s = document.styleSheets.item(t);
            if (s.ownerNode === e) return s;
        }
    }
    function Va(e) {
        for (let t = 0; t < e.cssRules.length; t++) e.deleteRule(t);
    }
    function Ga(e) {
        const [t, s] = (function (e) {
                const t = `css-plugin-${e.replaceAll('/', '_').replaceAll(':', '').replaceAll('.', '_')}`,
                    s = document.querySelector(`#${t}`);
                if (s instanceof HTMLLinkElement) return [s, !1];
                const n = document.createElement('link');
                return (
                    (n.crossOrigin = 'anonymous'),
                    (n.href = e),
                    (n.rel = 'stylesheet'),
                    (n.id = t),
                    document.head.appendChild(n),
                    [n, !0]
                );
            })(e),
            n = (function () {
                let e = re,
                    t = re;
                const s = new Promise((s, n) => {
                    ((t = s), (e = n));
                });
                return {
                    then: s.then.bind(s),
                    catch: s.catch.bind(s),
                    finally: s.finally.bind(s),
                    reject: e,
                    resolve: t,
                };
            })(),
            r = document.createElement('style');
        document.body.appendChild(r);
        const a = new ae();
        return (
            s
                ? a.add(
                      ie(t, 'load', () => {
                          n.resolve(t);
                      }),
                  )
                : oe(e)
                      .then((e) => e.text())
                      .then((e) => {
                          const s = qa(t);
                          if (!s) throw new Error(`Can't find sheets for ${t}`);
                          (Va(s),
                              (function (e, t) {
                                  const s = (function (e) {
                                      const t = [];
                                      let s = 0,
                                          n = 0,
                                          r = !1,
                                          a = !1;
                                      for (let i = 0; i < e.length; i++) {
                                          const o = e[i],
                                              l = e[i + 1];
                                          if (a || '/' !== o || '*' !== l) {
                                              if (r && '*' === o && '/' === l) ((r = !1), i++, (s = i + 1));
                                              else if (
                                                  !r &&
                                                  (a || '@' !== o || ((a = !0), (n = 0)),
                                                  '{' === o && n++,
                                                  '}' === o && n--,
                                                  '}' === o && 0 === n)
                                              ) {
                                                  if (a) (t.push(e.substring(s, i + 1)), (a = !1));
                                                  else {
                                                      let n = s;
                                                      for (; '\n' === e[n] || ' ' === e[n]; ) n++;
                                                      t.push(e.substring(n, i + 1));
                                                  }
                                                  s = i + 1;
                                              }
                                          } else ((r = !0), i++);
                                      }
                                      return t.filter((e) => {
                                          const t = e.trim();
                                          return '' !== t && !t.startsWith('/*');
                                      });
                                  })(e);
                                  for (const n of s) t.insertRule(n, t.cssRules.length);
                              })(e, s),
                              n.resolve(t));
                      })
                      .catch(n.reject),
            a
                .add(
                    ie(t, 'error', (t) => {
                        (console.error(t), n.reject(`Load css failure ${e}`));
                    }),
                )
                .add(() => {
                    !(function (e, t) {
                        const s = qa(t);
                        if (!s) return console.error(`Can't find sheets for ${t.id} (${e}). Clean rules skipped.`);
                        Va(s);
                    })(e, t);
                }),
            { promise: n, link: t, cleanup: a.dispose }
        );
    }
    function Ha(t) {
        return e.jsx(e.Fragment, { children: t.children });
    }
    function Qa(t) {
        return e.jsx(Ha, {
            children: e.jsx(Nr, {
                overrides: t.soundsOverrides,
                severity: t.soundSeverity,
                silent: t.soundsOff,
                children: t.children,
            }),
        });
    }
    const Wa = 'BattlePass_4584ba54',
        Ya = 'BattlePass_pointsTransfer_54437a70',
        Xa = 'BattlePass_amount_7ca1e54b',
        Za = 'BattlePass_freePoints_e7285302',
        Ka = 'BattlePass_freePoints__holiday_17460439',
        Ja = 'BattlePass_achievements_356aa939',
        ei = 'BattlePass_achievementsRow_e1e99cb2',
        ti = 'BattlePass_divider_dacb409f',
        si = 'BattlePass_divider__battlePassComplete_9e942559',
        ni = 'BattlePass_title_c5296481',
        ri = 'BattlePass_title__freePoints_cdf0d62f',
        ai = f.resolve('intl'),
        ii = f.resolve('strings');
    function oi({ bpTopPoints: t, questPoints: s, bonusCapPoints: n, className: r }) {
        return e.jsxs('div', {
            className: j(Ja, r),
            children: [
                t > 0 &&
                    e.jsxs('div', {
                        className: ei,
                        children: [
                            ii.readOrEmpty('battle_pass.reward.postBattle.progress.points.battle'),
                            e.jsx('span', { className: Xa, children: ai.formatNumber('integral', t) }),
                        ],
                    }),
                s > 0 &&
                    e.jsxs('div', {
                        className: ei,
                        children: [
                            ii.readOrEmpty('battle_pass.reward.postBattle.progress.points.quest'),
                            e.jsx('span', { className: Xa, children: ai.formatNumber('integral', s) }),
                        ],
                    }),
                n > 0 &&
                    e.jsxs('div', {
                        className: ei,
                        children: [
                            ii.readOrEmpty('battle_pass.reward.postBattle.progress.points.bonus'),
                            e.jsx('span', { className: Xa, children: ai.formatNumber('integral', n) }),
                        ],
                    }),
            ],
        });
    }
    const li = {
            base__x60x60: 'Emblem_base__x60x60_d8756e36',
            base__x100x100: 'Emblem_base__x100x100_547cf3ad',
            base__x160x160: 'Emblem_base__x160x160_c9c06954',
            base__x200x200: 'Emblem_base__x200x200_2ddeb5ee',
            base__x240x240: 'Emblem_base__x240x240_308c1aa9',
            base__x360x360: 'Emblem_base__x360x360_98f20cf9',
            shield: 'Emblem_shield_451cf2c9',
            icon: 'Emblem_icon_73d84087',
            shield__x74x74: 'Emblem_shield__x74x74_a298d905',
            shield__x120x120: 'Emblem_shield__x120x120_c8aa5234',
            shield__x200x200: 'Emblem_shield__x200x200_f1ed9db0',
            shield__x260x260: 'Emblem_shield__x260x260_ef1c262b',
            shield__x300x300: 'Emblem_shield__x300x300_7c6d6f97',
            shield__x456x456: 'Emblem_shield__x456x456_c818292e',
            icon__x28x28: 'Emblem_icon__x28x28_6ea3e635',
            icon__x48x48: 'Emblem_icon__x48x48_f2526f88',
            icon__x60x60: 'Emblem_icon__x60x60_628dbf9a',
            icon__x80x80: 'Emblem_icon__x80x80_34079478',
            icon__x100x100: 'Emblem_icon__x100x100_e8181a63',
            icon__x120x120: 'Emblem_icon__x120x120_c8aa5234',
            icon__x160x160: 'Emblem_icon__x160x160_aec06e5c',
        },
        ci = 'x60x60',
        ui = 'x100x100',
        di = 'x74x74',
        pi = 'x120x120',
        mi = 'x200x200',
        hi = 'x260x260',
        fi = 'x300x300',
        gi = 'x456x456',
        _i = 'x600x600',
        bi = 'x912x912',
        vi = 'x28x28',
        yi = 'x48x48',
        wi = 'x60x60',
        xi = 'x80x80',
        Ei = 'x100x100',
        Pi = 'x120x120',
        Ri = 'x160x160',
        Si = 'x240x240',
        Ti = 'x320x320',
        Ci = f.resolve('images'),
        Ni = function ({
            iconSize: t,
            shieldSize: s,
            containerSize: n,
            chapterID: a,
            bpPurchased: i,
            className: o = '',
        }) {
            const l = i ? 'purchased' : 'basic',
                c = String(a).slice(-1),
                u = s === di ? pi : s === pi ? hi : s === mi ? gi : s === hi || s === fi ? _i : bi,
                d = t === vi ? wi : t === yi ? Ei : t === wi ? Pi : t === xi ? Ri : t === Ei || t === Pi ? Si : Ti,
                p =
                    Ci.readOrEmpty(`battlePass.emblem.shield.c_${a}.${l}.${r.useUpscale(s, u)}`, 'silent') ||
                    Ci.readOrEmpty(`battlePass.emblem.shield.default.${l}.${s}`),
                m =
                    Ci.readOrEmpty(`battlePass.emblem.icon.c_${a}.${l}.${r.useUpscale(t, d)}`, 'silent') ||
                    Ci.readOrEmpty(`battlePass.emblem.icon.default_${c}.${l}.${t}`);
            return e.jsxs('div', {
                className: j(li.base, li[`base__${n}`], o),
                children: [
                    e.jsx('div', {
                        className: j(li.shield, li[`shield__${s}`]),
                        style: { backgroundImage: `url(${p})` },
                    }),
                    e.jsx('div', {
                        className: j(li.icon, li[`icon__${t}`]),
                        style: {
                            backgroundImage: `url(${a > 0 ? m : Ci.readOrEmpty(`battlePass.emblem.icon.not_chosen.${r.useUpscale(t, wi)}`)})`,
                        },
                    }),
                ],
            });
        },
        Ai = f.resolve('strings'),
        ki = f.resolve('aliases').read((e) => e.battle_results.progression.BattlePass('resId')),
        [Ii, ji] = (
            (t = 'DataLayerProvider') =>
            (s, r, a) => {
                const i = n.createContext(null);
                function o(o) {
                    var l;
                    const { mode: c, options: u, children: d, mocks: p } = o,
                        m = n.useContext(Ie),
                        h = c ?? m.mode,
                        f = p ?? m.mocks,
                        g = n.useRef([]),
                        _ = null == (l = null == a ? void 0 : a.useRequires) ? void 0 : l.call(a),
                        b = _r((e, n, i) => {
                            var l;
                            const c =
                                    'real' !== e && i
                                        ? (function (e, t) {
                                              return {
                                                  subscribe: () => 0,
                                                  readSafeByPath: e,
                                                  readByPath: e,
                                                  createCallback: (s, n) => {
                                                      const r = e(ee(n, t));
                                                      return (...e) => {
                                                          r(s(...e));
                                                      };
                                                  },
                                                  createCallbackNoArgs: (s) => {
                                                      const n = e(ee(s, t));
                                                      return () => {
                                                          n();
                                                      };
                                                  },
                                                  dispose: () => {},
                                                  unsubscribe: () => {},
                                                  events: { subscribersNotified: new Z() },
                                              };
                                          })(i.getter, n)
                                        : J(n, { name: t }),
                                u = (t) => ('mocks' === e ? (null == i ? void 0 : i.getter(t, n)) : c.readByPath(t)),
                                d = (e) => g.current.push(e),
                                p = 'initial' in o && {
                                    initial:
                                        null == (l = null == a ? void 0 : a.initial) ? void 0 : l.call(a, o.initial),
                                },
                                m = s({
                                    ...p,
                                    mode: e,
                                    readByPath: u,
                                    requires: _,
                                    externalModel: c,
                                    observableModel: De(c, e, u),
                                    cleanup: d,
                                }),
                                h = { ...p, mode: e, model: m, externalModel: c, cleanup: d, requires: _ },
                                f = 'mocks' === e && (null == i ? void 0 : i.controls) ? i.controls(h) : {};
                            return {
                                model: m,
                                controls: { ...(null == r ? void 0 : r(h)), ...f },
                                externalModel: c,
                                mode: e,
                                rootId: (null == n ? void 0 : n.rootId) ?? 0,
                            };
                        }),
                        v = n.useRef(!1),
                        [y, w] = n.useState(h);
                    n.useEffect(() => {
                        w(h);
                    }, [h]);
                    const [x, E] = n.useState(() => b(y, u, f));
                    return (
                        n.useEffect(() => {
                            v.current ? E(b(y, u, f)) : (v.current = !0);
                        }, [
                            b,
                            f,
                            y,
                            null == u ? void 0 : u.context,
                            null == u ? void 0 : u.initializer,
                            null == u ? void 0 : u.getRoot,
                            null == u ? void 0 : u.rootId,
                        ]),
                        n.useEffect(
                            () => () => {
                                (x.externalModel.dispose(), g.current.forEach((e) => e()));
                            },
                            [x],
                        ),
                        e.jsx(i.Provider, { value: x, children: d })
                    );
                }
                return (
                    (o.displayName = t),
                    [
                        o,
                        function () {
                            const e = n.useContext(i);
                            if (!e) throw new Error(`hook useModel must be used within a ${o.displayName}.`);
                            return e;
                        },
                        { Context: i },
                    ]
                );
            }
        )()(
            ({ observableModel: e }) => {
                const t = {
                        ...e.primitives([
                            'previousChapterID',
                            'currentChapterID',
                            'hasBattlePass',
                            'battlePassComplete',
                            'bpTopPoints',
                            'pointsAux',
                            'questPoints',
                            'bonusCapPoints',
                            'currentLevelPoints',
                            'maxLevelPoints',
                            'currentLevel',
                            'previousLevel',
                            'pointsDiff',
                            'levelReached',
                            'levelMax',
                            'navigationEnabled',
                            'holidayBattlePass',
                            'levelsInPostProgression',
                            'previousMaxLevelPoints',
                            'levelsInPreviousChapter',
                            'extraChapter',
                        ]),
                        previousFreeAwards: e.arrayClone('previousFreeAwards'),
                        previousPaidAwards: e.arrayClone('previousPaidAwards'),
                        currentFreeAwards: e.arrayClone('currentFreeAwards'),
                        currentPaidAwards: e.arrayClone('currentPaidAwards'),
                    },
                    s = hr.model(() => [...t.currentFreeAwards.get(), ...t.currentPaidAwards.get()]),
                    n = hr.structural(() => t.previousFreeAwards.get().map((e) => e.items)),
                    r = hr.structural(() => t.previousPaidAwards.get().map((e) => e.items)),
                    a = hr.structural(() => {
                        const e = n(),
                            t = r();
                        if (0 === t.length) return e;
                        if (0 === e.length) return t;
                        const s = Math.max(e.length, t.length),
                            a = new Array(s);
                        for (let n = 0; n < s; n++) {
                            const s = e[n] ?? [],
                                r = t[n] ?? [];
                            a[n] = [...s.values(), ...r.values()];
                        }
                        return a;
                    }),
                    i = hr.primitive(() => t.bpTopPoints.get() + t.questPoints.get() + t.bonusCapPoints.get()),
                    o = hr.primitive(
                        () =>
                            t.currentChapterID.get() <= 0 ||
                            (t.levelMax.get() && (t.pointsAux.get() > 0 || t.battlePassComplete.get())),
                    ),
                    l = hr.primitive(() => t.levelMax.get() && !t.battlePassComplete.get() && t.pointsAux.get() > 0),
                    c = hr.primitive(() => t.currentChapterID.get() <= 0 && !t.levelMax.get() && i() > 0),
                    u = hr.primitive(
                        () =>
                            t.battlePassComplete.get() &&
                            !t.levelMax.get() &&
                            !t.holidayBattlePass.get() &&
                            !t.extraChapter.get(),
                    ),
                    d = hr.primitive(() =>
                        t.levelMax.get()
                            ? t.levelsInPreviousChapter.get() - t.previousLevel.get()
                            : t.currentLevel.get() - t.previousLevel.get(),
                    ),
                    p = hr.primitive(() =>
                        (t.previousLevel.get() + 1) % t.levelsInPostProgression.get() == 0
                            ? t.levelsInPostProgression.get()
                            : (t.previousLevel.get() + 1) % t.levelsInPostProgression.get(),
                    ),
                    m = hr.primitive(() => {
                        const e =
                            t.levelMax.get() && !t.battlePassComplete.get() ? t.pointsAux.get() : t.pointsDiff.get();
                        return i() - e - t.previousMaxLevelPoints.get() * (d() - 1);
                    }),
                    h = hr.primitive((e, s) =>
                        0 !== e || s
                            ? t.hasBattlePass.get()
                                ? void 0
                                : Ai.readOrEmpty('battle_pass.battlePassStatus.improve')
                            : Ai.readOrEmpty('battle_pass.battlePassStatus.activateChapter'),
                    ),
                    f = hr.primitive((e, s) =>
                        s
                            ? Ai.readOrEmpty('battle_pass.tooltips.inProgress.postProgression.header')
                            : t.levelMax.get()
                              ? Ai.readOrEmpty('battle_pass.chapterChoice.chapterCompleted')
                              : e > 0
                                ? Ai.readOrEmpty(`battle_pass.chapter.fullName.c_${e}`)
                                : Ai.readOrEmpty('battle_pass.chapterStatus.notSelected'),
                    ),
                    g = hr.primitive(() => t.holidayBattlePass.get() && t.levelMax.get()),
                    _ = hr.primitive(
                        () => t.holidayBattlePass.get() && t.battlePassComplete.get() && !t.levelMax.get(),
                    );
                return {
                    ...t,
                    computes: {
                        totalPoints: i,
                        levelsDiff: d,
                        updatedPreviousLevel: p,
                        prevLevelDiff: m,
                        battlePassStatus: h,
                        chapterTitle: f,
                        currentCombinedRewards: s,
                        previousFreeRewards: n,
                        previousPaidRewards: r,
                        previousCombinedRewards: a,
                        postProgression: u,
                        dividerVisible: o,
                        freePointsTransfer: l,
                        freePointsVisible: c,
                        holidayBattlePassFinished: g,
                        holidayBattlePassCompleted: _,
                    },
                };
            },
            ({ externalModel: e }) => ({ navigateTo: e.createCallbackNoArgs('onNavigate') }),
        );
    var Di = ((e) => (
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
        ))(Di || {}),
        Oi = ((e) => (
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
        ))(Oi || {}),
        Mi = ((e) => (
            (e.MULTI = 'multi'),
            (e.CURRENCY = 'currency'),
            (e.PREMIUM_PLUS = 'premium_plus'),
            (e.NUMBER = 'number'),
            (e.STRING = 'string'),
            e
        ))(Mi || {}),
        Bi = ((e) => (
            (e.ATTACHMENT_RARE = 'rare'),
            (e.ATTACHMENT_EPIC = 'epic'),
            (e.ATTACHMENT_LEGENDARY = 'legendary'),
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
        ))(Bi || {}),
        Fi = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(Fi || {}),
        $i = ((e) => (
            (e.ATTACHMENT_RARE = 'rare'),
            (e.ATTACHMENT_EPIC = 'epic'),
            (e.ATTACHMENT_LEGENDARY = 'legendary'),
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
        ))($i || {});
    const Li = [
            Di.Items,
            Di.Equipment,
            Di.Xp,
            Di.XpFactor,
            Di.Blueprints,
            Di.BlueprintsAny,
            Di.Goodies,
            Di.Berths,
            Di.Slots,
            Di.Tokens,
            Di.CrewSkins,
            Di.CrewBooks,
            Di.Customizations,
            Di.CreditsFactor,
            Di.TankmenXp,
            Di.TankmenXpFactor,
            Di.FreeXpFactor,
            Di.BattleToken,
            Di.LootBox,
            Di.PremiumUniversal,
            Di.NaturalCover,
            Di.BpCoin,
            Di.BattlePassSelectToken,
            Di.BattlaPassFinalAchievement,
            Di.BattleBadge,
            Di.BonusX5,
            Di.CrewBonusX3,
            Di.EpicSelectToken,
            Di.Comp7TokenWeeklyReward,
            Di.DeluxeGift,
            Di.BattleBoosterGift,
            Di.OptionalDevice,
        ],
        zi = [Di.Gold, Di.Credits, Di.Crystal, Di.FreeXp],
        Ui = [Di.BattlePassPoints, Di.EquipCoin],
        qi = [Di.PremiumPlus, Di.Premium],
        Vi = (e) =>
            Li.includes(e)
                ? Mi.MULTI
                : zi.includes(e)
                  ? Mi.CURRENCY
                  : Ui.includes(e)
                    ? Mi.NUMBER
                    : qi.includes(e)
                      ? Mi.PREMIUM_PLUS
                      : Mi.STRING,
        Gi = ['engravings', 'backgrounds'],
        Hi = ['engraving', 'background'],
        Qi = (e, t = Oi.Small) => {
            const { name: s, type: n, value: r, icon: a, item: i, dogTagType: o } = e,
                l = t === Oi.S24x24 ? Oi.Small : t,
                c = ((e) => {
                    switch (e) {
                        case Oi.S600x450:
                            return 'c_600x450';
                        case Oi.S400x300:
                            return 'c_400x300';
                        case Oi.S296x222:
                            return 'c_296x222';
                        case Oi.S232x174:
                            return 'c_232x174';
                        case Oi.Big:
                            return 'c_80x80';
                        case Oi.Small:
                            return 'c_48x48';
                        default:
                            return e;
                    }
                })(l);
            switch (s) {
                case 'basic':
                case 'plus':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.${n}_${r}`;
                case 'premium':
                case 'premium_plus':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.${s}_${r}`;
                case 'items':
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.${i}`;
                case 'blueprints':
                case 'blueprintsAny':
                case 'finalBlueprints':
                    return `R.images.gui.maps.icons.blueprints.fragment.${l}.${a}`;
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
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.${a}`;
                case 'crewBooks':
                    return `R.images.gui.maps.icons.crewBooks.books.${l}.${a}`;
                case 'dogTagComponents':
                    return ((e, t, s) => {
                        const n = Gi[e];
                        if (n) {
                            const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                a = r.$dyn(s);
                            return !a && Hi[e] ? `${r.$dyn(Hi[e])}` : `${a}`;
                        }
                        return (
                            console.error(
                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                            ),
                            ''
                        );
                    })(o, l, a);
                case 'dossier_badge':
                    return `R.images.gui.maps.icons.quests.bonuses.badges.${c}.${a}`;
                case 'dossier_achievement':
                    return `R.images.gui.maps.icons.achievement.${c}.${a}`;
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
                    return `R.images.gui.maps.icons.collectionItems.${c}.${a}`;
                default:
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.${s}`;
            }
        },
        Wi = (e, t) => ({ args: e, contentId: t }),
        Yi = [Oi.Small, Oi.Big],
        Xi = {
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
        Zi = f.resolve('images'),
        Ki = new Map([
            [Oi.S24x24, Oi.Small],
            [Oi.S48x48, Oi.Small],
        ]),
        Ji = ({
            name: t,
            image: s,
            isPeriodic: n = !1,
            isFixedBoxSize: r = !0,
            size: a = Oi.Big,
            special: i,
            value: o,
            valueType: l,
            title: c,
            style: u,
            className: d,
            classNames: p,
            tooltipArgs: m,
            periodicIconTooltipArgs: h,
        }) => {
            const g = Ki.has(a) ? Ki.get(a) : a,
                _ = ((e, t) => {
                    if (void 0 === t || !Yi.includes(e)) return null;
                    switch (t) {
                        case Bi.BATTLE_BOOSTER:
                        case Bi.BATTLE_BOOSTER_REPLACE:
                            return Fi.BATTLE_BOOSTER;
                    }
                })(a, i),
                b = ((e) => {
                    if (void 0 === e) return null;
                    switch (e) {
                        case Bi.BATTLE_BOOSTER:
                            return $i.BATTLE_BOOSTER;
                        case Bi.BATTLE_BOOSTER_REPLACE:
                            return $i.BATTLE_BOOSTER_REPLACE;
                        case Bi.BUILT_IN_EQUIPMENT:
                            return $i.BUILT_IN_EQUIPMENT;
                        case Bi.EQUIPMENT_PLUS:
                            return $i.EQUIPMENT_PLUS;
                        case Bi.EQUIPMENT_TROPHY_BASIC:
                            return $i.EQUIPMENT_TROPHY_BASIC;
                        case Bi.EQUIPMENT_TROPHY_UPGRADED:
                            return $i.EQUIPMENT_TROPHY_UPGRADED;
                        case Bi.EQUIPMENT_MODERNIZED_UPGRADED_1:
                            return $i.EQUIPMENT_MODERNIZED_UPGRADED_1;
                        case Bi.EQUIPMENT_MODERNIZED_UPGRADED_2:
                            return $i.EQUIPMENT_MODERNIZED_UPGRADED_2;
                        case Bi.EQUIPMENT_MODERNIZED_UPGRADED_3:
                            return $i.EQUIPMENT_MODERNIZED_UPGRADED_3;
                        case Bi.PROGRESSION_STYLE_UPGRADED_1:
                            return $i.PROGRESSION_STYLE_UPGRADED_1;
                        case Bi.PROGRESSION_STYLE_UPGRADED_2:
                            return $i.PROGRESSION_STYLE_UPGRADED_2;
                        case Bi.PROGRESSION_STYLE_UPGRADED_3:
                            return $i.PROGRESSION_STYLE_UPGRADED_3;
                        case Bi.PROGRESSION_STYLE_UPGRADED_4:
                            return $i.PROGRESSION_STYLE_UPGRADED_4;
                        case Bi.PROGRESSION_STYLE_UPGRADED_5:
                            return $i.PROGRESSION_STYLE_UPGRADED_5;
                        case Bi.PROGRESSION_STYLE_UPGRADED_6:
                            return $i.PROGRESSION_STYLE_UPGRADED_6;
                        case Bi.ATTACHMENT_RARE:
                            return $i.ATTACHMENT_RARE;
                        case Bi.ATTACHMENT_EPIC:
                            return $i.ATTACHMENT_EPIC;
                        case Bi.ATTACHMENT_LEGENDARY:
                            return $i.ATTACHMENT_LEGENDARY;
                    }
                })(i),
                v = ((e, t) => {
                    const s = f.resolve('intl');
                    if (void 0 === e) return null;
                    switch (t) {
                        case Mi.MULTI: {
                            const t = Number(e);
                            return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                        }
                        case Mi.CURRENCY:
                        case Mi.NUMBER:
                            return s.formatNumber(s.numberFormats[0] || 'integral', Number(e));
                        case Mi.PREMIUM_PLUS: {
                            const t = Number(e);
                            return isNaN(t) ? e : null;
                        }
                        default:
                            return e;
                    }
                })(o, l),
                y = Pr({
                    contentId: (null == m ? void 0 : m.contentId) ?? 0,
                    args: null == m ? void 0 : m.args,
                    resId: null == m ? void 0 : m.resId,
                    decoratorId: null == m ? void 0 : m.decoratorId,
                }),
                w = Rr({ header: null == h ? void 0 : h.header, body: null == h ? void 0 : h.body });
            return e.jsxs('div', {
                className: j(Xi.base, Xi[`base__${a}`], !r && Xi.base__dynamicBox, d),
                style: u,
                ...y,
                children: [
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs('div', {
                                className: j(
                                    Xi.image,
                                    r ? Xi.image__fixedBox : Xi[`image__${a}`],
                                    null == p ? void 0 : p.image,
                                ),
                                children: [
                                    _ &&
                                        e.jsx('div', {
                                            className: j(Xi.highlight, null == p ? void 0 : p.highlight),
                                            style: {
                                                backgroundImage: `url(${Zi.readOrEmpty(`quests.bonuses.${g}.${_}_highlight`)})`,
                                            },
                                        }),
                                    s &&
                                        e.jsx('div', {
                                            className: j(Xi.icon, null == p ? void 0 : p.rewardIcon),
                                            style: { backgroundImage: `url(${s})` },
                                        }),
                                    b &&
                                        e.jsx('div', {
                                            className: j(Xi.overlay, null == p ? void 0 : p.overlay),
                                            style: {
                                                backgroundImage: `url(${Zi.readOrEmpty(`quests.bonuses.${g}.${b}_overlay`)})`,
                                            },
                                        }),
                                ],
                            }),
                            v &&
                                e.jsx('div', {
                                    className: j(
                                        Xi.info,
                                        Xi[`info__${t}`],
                                        l === Mi.MULTI && Xi.info__multi,
                                        null == p ? void 0 : p.info,
                                    ),
                                    children: v,
                                }),
                            c && e.jsx('div', { className: Xi.title, children: c }),
                        ],
                    }),
                    n && e.jsx('div', { className: j(Xi.timer, null == p ? void 0 : p.periodicIcon), ...w }),
                ],
            });
        },
        eo = Object.fromEntries(Object.entries(ha).map(([e]) => [e, (e) => e]));
    const to = 'RewardsList_b956755b',
        so = 'RewardsList_base__vertical_59db3c9f',
        no = 'RewardsList_reward_fc200613',
        ro = 'RewardsList_reward__vertical_5f09c6e0',
        ao = 'RewardsList_boxRewardClassName_882c908d',
        io = { [Oi.S24x24]: Oi.Small, [Oi.S48x48]: Oi.Small },
        oo = n.memo(function ({
            data: t,
            isFixedBoxSize: s,
            size: n = Oi.Big,
            isVertical: r = !1,
            count: a,
            classMix: i,
            rewardItemClassMix: o,
            boxRewardTooltip: l,
            boxRewardValue: c,
            boxRewardClassName: u,
            boxRewardClassNames: d,
        }) {
            const p = f.resolve('strings'),
                m = f.resolve('images'),
                h =
                    'number' == typeof a && a < t.length
                        ? `${m.readOrEmpty(`quests.bonuses.${io[n] ?? n}.default`)}`
                        : void 0,
                g =
                    c ||
                    (function (e, t = {}) {
                        const s = ia(e, Sa);
                        return String(wa(s, eo, t));
                    })(Ra(p.readOrEmpty('tooltips.quests.awards.additional.bottom')), { count: t.length - (a || 0) });
            return e.jsx('div', {
                className: j(to, r && so, i),
                children:
                    void 0 !== h
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  t
                                      .slice(0, a)
                                      .map((t, a) =>
                                          e.jsx(
                                              'div',
                                              {
                                                  className: j(no, r && ro, o),
                                                  children: e.jsx(Ji, { size: n, isFixedBoxSize: s, ...t }),
                                              },
                                              a,
                                          ),
                                      ),
                                  e.jsx('div', {
                                      className: j(no, r && ro, o),
                                      children: e.jsx(Ji, {
                                          name: 'more',
                                          isFixedBoxSize: s,
                                          image: h,
                                          size: n,
                                          value: g,
                                          tooltipArgs: l,
                                          className: j(ao, u),
                                          classNames: d,
                                      }),
                                  }),
                              ],
                          })
                        : t.map((t, a) =>
                              e.jsx(
                                  'div',
                                  {
                                      className: j(no, r && ro, o),
                                      children: e.jsx(Ji, { size: n, isFixedBoxSize: s, ...t }),
                                  },
                                  a,
                              ),
                          ),
            });
        });
    function lo({ bonuses: t, size: s, resId: r, boxRewardTooltipArgs: a, maxRewardsCount: i, questId: o, ...l }) {
        const c = n.useMemo(() => {
                return (
                    (e = t),
                    (n = (e) => ({
                        size: s,
                        name: e.name,
                        image: Qi(e, s),
                        value: e.value,
                        valueType: Vi(e.name),
                        tooltipArgs: {
                            ...Wi(
                                { tooltipId: o ? `${o}:${e.tooltipId}` : e.tooltipId },
                                Number(e.tooltipContentId) ||
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                            ),
                            resId: r,
                        },
                    })),
                    Array.isArray(e) ? e.map(n) : e.map((e, t, s) => n(null == e ? void 0 : e.value, t, s))
                );
                var e, n;
            }, [t, s, r, o]),
            u = void 0 === i ? t.length : i <= 1 ? 1 : t.length <= i ? i : i - 1,
            d = n.useMemo(
                () =>
                    a || {
                        contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                        args: { showFromIndex: u },
                        resId: r,
                    },
                [u, r, a],
            );
        return e.jsx(oo, { ...l, data: c, count: u, boxRewardTooltip: d, size: s });
    }
    const co = 'AnimatedRewards_glowContainer_82630782',
        uo = 'AnimatedRewards_c981a355',
        po = 'AnimatedRewards_rewardsWrapper_11b576b3',
        mo = 'AnimatedRewards_glow_3a2cd010',
        ho = 'AnimatedRewards_glowImage_4ecce597',
        fo = D.cubicBezier(0.33, 0, 0.67, 1),
        go = D.cubicBezier(0.23, 0, 0.57, 1),
        _o = n.forwardRef(function (
            {
                animationRef: t,
                immediateAnimation: s,
                maxRewardsCount: r,
                bonuses: a,
                boxRewardTooltipArgs: i,
                className: o,
                classNames: l,
                ...c
            },
            u,
        ) {
            const d = Qn(),
                [p] = Gn(() => ({
                    ref: t,
                    from: { opacity: 0, scale: 0.6 },
                    to: async (e) => {
                        (await e({ opacity: 1, scale: 0.8, config: { duration: 330, easing: fo } }),
                            d.start(),
                            await e({ opacity: 0, scale: 1, config: { duration: 330, easing: fo } }));
                    },
                })),
                [m] = Gn(() => ({
                    ref: d,
                    immediate: s,
                    from: { opacity: 1 },
                    to: { opacity: 0.4, config: { duration: 330, easing: go } },
                }));
            return (
                n.useEffect(() => {
                    s &&
                        (null == t || t.pause(),
                        null == t || t.start({ immediate: !0, to: { opacity: 0, scale: 1 } }),
                        d.start());
                }, [s]),
                e.jsxs('div', {
                    ref: u,
                    className: j(uo, o),
                    children: [
                        e.jsx(mr.div, {
                            style: m,
                            className: j(po, null == l ? void 0 : l.rewardsWrapper),
                            children: e.jsx(lo, { ...c, maxRewardsCount: r, bonuses: a, boxRewardTooltipArgs: i }),
                        }),
                        e.jsx('div', {
                            className: j(co, null == l ? void 0 : l.glowContainer),
                            children: ue(r ? Math.min(r, a.length) : a.length, (t) =>
                                e.jsx(
                                    mr.div,
                                    {
                                        style: p,
                                        className: mo,
                                        children: e.jsx(
                                            ye,
                                            { path: 'post_battle.progression.reward_glow', className: ho },
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
        bo = f.resolve('views'),
        vo = 'free',
        yo = 'paid',
        wo = 'both';
    function xo({ limit: e, rewardsTooltipResId: t, ...s }) {
        return {
            contentId: bo.read((e) => e.lobby.tooltips.AdditionalBattlePassRewardsTooltip('resId')),
            args: { showFromIndex: e - 1, ...s },
            resId: t,
        };
    }
    function Eo({
        completed: t,
        rewardsGlowRef: s,
        bonuses: n,
        maxRewardsCount: r,
        rewardsTooltipResId: a,
        immediateAnimation: i,
        questId: o,
        level: l,
        chapter: c,
        rewardType: u,
        className: d,
        rewardItemClassName: p,
    }) {
        const m = {
            bonuses: n,
            questId: o,
            maxRewardsCount: r,
            size: Oi.Small,
            resId: a,
            boxRewardTooltipArgs: xo({
                limit: r,
                rewardsTooltipResId: a,
                rewardType: u,
                level: l ? l - 1 : void 0,
                chapter: c,
                questId: o,
            }),
            rewardItemClassMix: p,
        };
        return t
            ? e.jsx(_o, {
                  ...m,
                  animationRef: s,
                  immediateAnimation: i,
                  className: d,
                  classNames: { glowContainer: d },
              })
            : e.jsx(lo, { ...m, classMix: d });
    }
    const Po = 'CompletedMark_fc4eee08',
        Ro = 'CompletedMark_glow_33775180',
        So = D.cubicBezier(1, 0, 0.95, 1),
        To = D.cubicBezier(0.45, 0, 0.52, 1),
        Co = n.forwardRef(function (
            {
                target: t,
                animationRef: s,
                className: a,
                path: i,
                width: o,
                height: l,
                glow: c,
                springProps: u,
                style: d,
                classNames: p,
                onGlowRest: m,
                ...h
            },
            f,
        ) {
            const g = n.useRef(u),
                _ = Ar(),
                b = r.useAdaptive(
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
                [v, y] = Gn(() => ({ from: { opacity: 0 } })),
                [w] = Gn(() => {
                    var e, n;
                    return {
                        ref: s,
                        from: { maskSize: '0% 100%', opacity: 0 },
                        to: [
                            {
                                maskSize: '40% 80%',
                                opacity: 0.5,
                                config: { duration: 100, easing: So },
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
                                config: { duration: 100, easing: So },
                                immediate: null == (n = g.current) ? void 0 : n.immediate,
                            },
                        ],
                        onRest: () => {
                            y.start({
                                to: [
                                    { opacity: 0.6, config: { duration: 160, easing: To } },
                                    { opacity: 0, config: { duration: 160, easing: To } },
                                ],
                                onRest: m,
                            });
                        },
                        ...g,
                    };
                });
            return (
                n.useEffect(() => {
                    g.current = u;
                }, [u]),
                e.jsxs('div', {
                    className: j(Po, a),
                    children: [
                        e.jsx(mr.div, {
                            style: v,
                            className: j(Ro, null == p ? void 0 : p.glow),
                            children: e.jsx(ye, {
                                width: (null == c ? void 0 : c.width) ?? b.glow.width,
                                height: (null == c ? void 0 : c.height) ?? b.glow.height,
                                path: (null == c ? void 0 : c.path) ?? b.glow.path,
                            }),
                        }),
                        e.jsx(mr.div, {
                            ...h,
                            style: { ...w, ...d },
                            ref: f,
                            className: null == p ? void 0 : p.icon,
                            children: e.jsx(ye, {
                                width: o ?? b.icon.width,
                                height: l ?? b.icon.height,
                                path: i ?? b.icon.path,
                            }),
                        }),
                    ],
                })
            );
        });
    function No({
        baseValue: e,
        newValue: t,
        animationType: s = Io.simple,
        deltaVisible: n = !1,
        preViewDeltaVisible: r = !1,
        animationConfig: a,
    }) {
        return {
            from: { width: e },
            to: { width: t },
            config: a ?? { duration: (s === Io.simple && n) || (!n && r) ? 0 : Ao, easing: Vt.easeInOutCubic },
        };
    }
    n.forwardRef(function ({ path: t, width: s, height: n, ...a }, i) {
        const o = r.useAdaptive(
            { size: 24, path: 'post_battle.progression.done_24x24' },
            { large: { size: 32, path: 'post_battle.progression.done_32x32' } },
        );
        return e.jsx(ye, { ...a, ref: i, width: s ?? o.size, height: n ?? o.size, path: t ?? o.path });
    });
    const Ao = 600,
        ko = { duration: Ao, easing: Vt.easeInOutCubic },
        Io = { simple: 'simple', grow: 'grow', growFreeze: 'growFreeze' },
        jo = { medium: 'medium', large: 'large' },
        Do = { disabled: 'disabled', doneInactive: 'doneInactive', doneStatic: 'doneStatic' },
        Oo = 'growing',
        Mo = 'shrinking',
        Bo = 'done',
        Fo = n.createContext(void 0);
    function $o() {
        const e = n.useContext(Fo);
        if (!e) throw new Error('ProgressBar must be used within a ProgressBar');
        return e;
    }
    function Lo(e) {
        const { activeComponents: t } = $o();
        n.useEffect(
            () => (
                t.add(e),
                () => {
                    t.delete(e);
                }
            ),
            [t, e],
        );
    }
    const zo = {
        base: 'BackgroundPattern_8df99ec8',
        backgroundPattern: 'BackgroundPattern_backgroundPattern_d9136c40',
        backgroundPattern__medium: 'BackgroundPattern_backgroundPattern__medium_84d64a88',
        backgroundPattern__large: 'BackgroundPattern_backgroundPattern__large_3e5537fc',
    };
    const Uo = n.memo(function ({ className: t, backgroundPattern: s }) {
        const n = $o();
        return (
            Lo('backgroundPattern'),
            e.jsx('div', {
                className: zo.base,
                children: e.jsx(ye, {
                    className: j(
                        t,
                        zo.backgroundPattern,
                        0 === n.percentage ? zo.backgroundPattern__noProgress : zo[`backgroundPattern__${n.size}`],
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    path:
                        s ??
                        ((r = n.size),
                        (a = n.status),
                        a === Do.disabled
                            ? `ui.progressbar.bg_pattern_base_disabled_${r}`
                            : `ui.progressbar.bg_pattern_base_${r}`),
                }),
            })
        );
        var r, a;
    });
    function qo(e, t) {
        const s = $o(),
            n = Ar();
        return _r((r) => {
            if (r)
                switch (s.animationType) {
                    case 'simple':
                        s.progressCompleted
                            ? n.play('increaseDeltaMax', { target: t })
                            : n.play('progressSimple', { target: t });
                        break;
                    case 'grow':
                        !(function (r) {
                            if ('growing' === r) return n.play('progressSimple', { target: t });
                            if ('shrinking' === r) {
                                if (s.progressCompleted) return n.play('increaseDeltaMax', { target: t });
                                if (e > 0) return n.play('increaseDelta', { target: t });
                                if (e < 0) n.play('decreaseDelta', { target: t });
                            }
                        })(r);
                        break;
                    case 'growFreeze':
                        !(function (s) {
                            e > 0 && 'shrinking' === s
                                ? n.play('increaseDeltaMax', { target: t })
                                : n.play('progressSimple', { target: t });
                        })(r);
                        break;
                    default:
                        n.play('progressSimple', { target: t });
                }
        });
    }
    function Vo(e = 0) {
        const t = $o(),
            s = t.soundTarget ?? 'progress-bar',
            n = Ar(),
            r = qo(e, s),
            a = _r(() => {
                t.status !== Do.doneInactive && t.progressCompleted
                    ? n.play('increaseDeltaMax', { target: s })
                    : n.play('progressSimple', { target: s });
            });
        return _r(({ step: e } = {}) => {
            if (!t.silent)
                return t.activeComponents.has('delta') ? r(e) : t.activeComponents.has('fill') ? a() : void 0;
        });
    }
    const Go = 'Delta_eb295acb',
        Ho = 'Delta_delta__increase_e6e76b0b',
        Qo = 'Delta_outside_b28c01e5',
        Wo = 'Delta_outside__increase_91391b24',
        Yo = 'Delta_inside_b1b3a5c5',
        Xo = 'Delta_inside__increase_fcd871c4',
        Zo = n.memo(
            n.forwardRef(function (
                {
                    from: t,
                    growAnimationConfig: s,
                    shrinkAnimationConfig: r,
                    classNames: a,
                    className: i,
                    steps: o,
                    onState: l,
                    ...c
                },
                u,
            ) {
                const d = n.useRef(null),
                    p = $o(),
                    [m, h] = Gn(() => ({ width: 0 })),
                    [f, g] = Gn(() => ({ width: 0 })),
                    [_, b] = Gn(() => ({ left: 0, width: 0 })),
                    [v, ...y] = o,
                    [w, x] = n.useState(y),
                    [E, P] = n.useState(v ?? 'done'),
                    R = (p.value - t) / p.maxValue,
                    S = Vo(R);
                (Lo('delta'),
                    n.useEffect(() => {
                        if (0 === R) return;
                        const [e, ...t] = o;
                        (P(e ?? 'done'), x(t));
                    }, [h, g, o, R]));
                const T = _r(l ?? te);
                n.useEffect(() => T(E), [E, T]);
                const C = _r(() => {
                    const [e, ...t] = w;
                    void 0 !== e ? (P(e), x(t)) : P('done');
                });
                return (
                    n.useEffect(() => {
                        const e = d.current;
                        if (!e || 0 === R) return (g.set({ width: 0 }), h.set({ width: 0 }), P('done'), void x([]));
                        const t = 100 * Math.max(0, p.percentage - Math.max(0, R)),
                            n = 100 * Math.abs(R);
                        return (
                            e.classList.toggle(Ho, R > 0),
                            'growing' === E
                                ? (b.set({ left: t, width: n }),
                                  g.set({ width: 100 }),
                                  void h.start({
                                      from: { width: 0 },
                                      to: { width: 100 },
                                      config: s ?? ko,
                                      onRest: C,
                                      onStart: () => S({ step: E }),
                                  }))
                                : 'shrinking' === E
                                  ? (b.set({ left: t, width: n }),
                                    h.set({ width: 100 }),
                                    void g.start({
                                        from: { width: 100 },
                                        to: { width: 0 },
                                        config: r ?? ko,
                                        onRest: C,
                                        onStart: () => S({ step: E }),
                                    }))
                                  : void 0
                        );
                    }, [b, p.percentage, R, s, h, C, g, S, r, E]),
                    e.jsxs(mr.div, {
                        ...c,
                        ref: fr([u, d]),
                        className: j(i, Go),
                        style: { left: _.left.to((e) => `${e}%`), width: _.width.to((e) => `${e}%`) },
                        children: [
                            e.jsxs(mr.div, {
                                ...c,
                                style: { width: f.width.to((e) => `${e}%`) },
                                className: j(null == a ? void 0 : a.outside, Qo, R > 0 && Wo),
                                children: [
                                    e.jsx(mr.div, {
                                        style: { width: m.width.to((e) => `${e}%`) },
                                        className: j(null == a ? void 0 : a.inside, Yo, R > 0 && Xo),
                                    }),
                                    c.children,
                                ],
                            }),
                            c.children,
                        ],
                    })
                );
            }),
        ),
        Ko = {
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
        Jo = mr(ye),
        el = n.memo(function ({ animationConfig: t, classNames: s }) {
            var r;
            const a = $o(),
                { activeComponents: i } = $o(),
                o = 100 * a.percentage,
                l = 100 * ((null == (r = a.previous) ? void 0 : r.percentage) ?? 0),
                c = void 0 === a.previous ? o : l,
                u = a.status === Do.doneStatic,
                d = yr(),
                [p, m] = Gn(() => ({ width: c }));
            return (
                n.useEffect(() => {
                    d.run(() =>
                        m.start(
                            No({
                                baseValue: c,
                                newValue: o,
                                animationType: a.animationType,
                                deltaVisible: i.has('delta'),
                                preViewDeltaVisible: i.has('previewDelta'),
                                animationConfig: t,
                            }),
                        ),
                    );
                }, [o, m, c, a.animationType, t, i, d]),
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(Jo, {
                            path: `ui.progressbar.bg_pattern_base_done_${a.size}`,
                            className: j(
                                null == s ? void 0 : s.done,
                                Ko.done,
                                !a.progressCompleted && Ko.done__hidden,
                                a.progressCompleted && (u ? Ko.done__doneStatic : Ko.done__visible),
                            ),
                            repeat: 'repeat',
                            position: 'left top',
                            style: { width: p.width.to((e) => `${e}%`) },
                        }),
                        !u &&
                            e.jsx(Jo, {
                                path: `ui.progressbar.bg_pattern_base_done_complete_${a.size}`,
                                className: j(
                                    null == s ? void 0 : s.doneComplete,
                                    Ko.complete,
                                    a.progressCompleted && Ko.complete__visible,
                                ),
                                repeat: 'repeat',
                                position: 'left top',
                                style: { width: p.width.to((e) => `${e}%`) },
                            }),
                    ],
                })
            );
        }),
        tl = mr(ye),
        sl = n.memo(function ({ animationConfig: t, className: s }) {
            var r;
            const a = $o(),
                { activeComponents: i } = $o(),
                o = yr(),
                l = 100 * a.percentage,
                c = 100 * ((null == (r = a.previous) ? void 0 : r.percentage) ?? 0),
                u = void 0 === a.previous ? l : c,
                [d, p] = Gn(() => ({ width: u }));
            return (
                n.useEffect(() => {
                    o.run(() =>
                        p.start(
                            No({
                                baseValue: u,
                                newValue: l,
                                animationType: a.animationType,
                                deltaVisible: i.has('delta'),
                                preViewDeltaVisible: i.has('previewDelta'),
                                animationConfig: t,
                            }),
                        ),
                    );
                }, [p, u, a.animationType, i, l, t, o]),
                e.jsx(tl, {
                    path: `ui.progressbar.bg_pattern_base_filled_${a.size}`,
                    className: j(
                        s,
                        Ko.filled,
                        a.status && Ko[`filled__${a.status}`],
                        a.progressCompleted && Ko.filled__hidden,
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    style: { width: d.width.to((e) => `${e}%`) },
                })
            );
        }),
        nl = n.memo(function ({ classNames: t, className: s, animationConfig: r, ...a }) {
            var i;
            const o = $o(),
                l = Vo(),
                c = yr(),
                { activeComponents: u } = $o(),
                d = 100 * o.percentage,
                p = 100 * ((null == (i = o.previous) ? void 0 : i.percentage) ?? 0),
                m = void 0 === o.previous ? d : p;
            (Lo('fill'),
                n.useEffect(() => {
                    'growFreeze' === o.animationType && o.progressCompleted && !o.activeComponents.has('delta') && l();
                }, [o.activeComponents, o.animationType, o.progressCompleted, l]));
            const [h, f] = Gn(() => ({ width: m }));
            return (
                n.useEffect(() => {
                    c.run(() =>
                        f.start({
                            ...No({
                                baseValue: m,
                                newValue: d,
                                animationType: o.animationType,
                                deltaVisible: u.has('delta'),
                                preViewDeltaVisible: u.has('previewDelta'),
                                animationConfig: r,
                            }),
                            onStart: () => l(),
                        }),
                    );
                }, [r, f, m, o.animationType, u, d, l, c]),
                e.jsxs('div', {
                    className: j(Ko.base, s),
                    children: [
                        e.jsx(mr.div, {
                            className: null == t ? void 0 : t.fill,
                            style: { width: h.width.to((e) => `${e}%`) },
                        }),
                        a.children ??
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(sl, { className: null == t ? void 0 : t.filledPattern, animationConfig: r }),
                                    e.jsx(el, {
                                        classNames: {
                                            done: null == t ? void 0 : t.done,
                                            doneComplete: null == t ? void 0 : t.doneComplete,
                                        },
                                        animationConfig: r,
                                    }),
                                ],
                            }),
                        e.jsx(mr.div, {
                            className: j(
                                null == t ? void 0 : t.edge,
                                Ko.edge,
                                0 === o.percentage && Ko.edge__noProgress,
                                !u.has('previewDelta') && !o.progressCompleted && Ko.edge__visible,
                                o.status && Ko[`edge__${o.status}`],
                            ),
                            style: { left: h.width.to((e) => `${e}%`) },
                        }),
                    ],
                })
            );
        });
    ((nl.Filled = sl), (nl.Done = el));
    const rl = { above: 'above', below: 'below' },
        al = {
            base: 'Indicators_f2e99d31',
            step: 'Indicators_step_a78300f3',
            step__above: 'Indicators_step__above_a95c746e',
            indicator: 'Indicators_indicator_8484a8c7',
            label: 'Indicators_label_f8c7ff1e',
        };
    function il({ position: t, value: s, children: n, className: r, classNames: a }) {
        const i = $o();
        return e.jsxs('div', {
            className: j(al.step, al[`step__${t}`], r),
            style: { left: (s / i.maxValue) * 100 + '%' },
            children: [
                t === rl.below && e.jsx('div', { className: j(al.indicator, null == a ? void 0 : a.indicator) }),
                void 0 !== n && e.jsx('div', { className: j(al.label, null == a ? void 0 : a.label), children: n }),
                t === rl.above && e.jsx('div', { className: j(al.indicator, null == a ? void 0 : a.indicator) }),
            ],
        });
    }
    const ol = Br('Indicators', al.base),
        ll = function (t) {
            const s = $o();
            return (
                Lo('stepIndicators'),
                e.jsx(ol, {
                    children: ue(t.count, (n) => {
                        var r, a, i;
                        const o = (n / (t.count - 1)) * 100,
                            l = s.value >= o && 0 !== s.value;
                        return e.jsx(
                            il,
                            {
                                position: t.position,
                                value: o,
                                className: j(
                                    null == (r = t.classNames) ? void 0 : r.step,
                                    l && (null == (a = t.classNames) ? void 0 : a.completed),
                                ),
                                classNames: null == (i = t.classNames) ? void 0 : i.stepClassNames,
                                children: t.children ? t.children(n, o, l) : void 0,
                            },
                            n,
                        );
                    }),
                })
            );
        };
    ((ll.Step = il), (ll.positions = rl));
    const cl = 'PreviewDelta_86b01c3e',
        ul = 'PreviewDelta_negative_1c375892',
        dl = 'PreviewDelta_positive_be83fc48',
        pl = 'PreviewDelta_negative__visible_19dda1c5',
        ml = 'PreviewDelta_positive__visible_19dda1c5',
        hl = n.forwardRef(function ({ value: t, classNames: s, ...n }, r) {
            const a = $o();
            Lo('previewDelta');
            const i = t - a.value,
                o = i < 0 ? 'negative' : i > 0 ? 'positive' : 'neutral';
            if ('neutral' === o) return null;
            const l = Math.abs(i) / a.maxValue,
                c = i < 0 ? l : 0,
                u = 100 * (a.percentage - c),
                d = 100 * l;
            return e.jsxs('div', {
                ...n,
                'data-name': 'PreviewDelta',
                ref: r,
                className: j(cl, n.className),
                children: [
                    e.jsx('div', {
                        style: { left: `${u}%`, width: `${d}%`, ...n.style },
                        className: j(null == s ? void 0 : s.negative, ul, 'negative' === o && pl),
                    }),
                    e.jsx('div', {
                        style: { left: `${u}%`, width: `${d}%`, ...n.style },
                        className: j(null == s ? void 0 : s.positive, dl, 'positive' === o && ml),
                    }),
                ],
            });
        });
    function fl(t) {
        const [s, r] = n.useState(Math.min(t.value, t.maxValue)),
            [a, i] = n.useState(t.maxValue),
            o = Ee(s),
            l = Ee(a),
            c = n.useRef(new Set()),
            u = _r((e) => r(Math.min(e, t.maxValue))),
            d = _r((e) => c.current.has(e));
        (n.useLayoutEffect(() => {
            u(t.value);
        }, [t.value, u]),
            n.useLayoutEffect(() => {
                i(t.maxValue);
            }, [t.maxValue]));
        const p = _r((e) => {
            var s;
            return null == (s = t.onValueChange) ? void 0 : s.call(t, e);
        });
        n.useEffect(() => {
            p(s);
        }, [p, s]);
        const m = _r((e) => {
            var s;
            return null == (s = t.onMaxValueChange) ? void 0 : s.call(t, e);
        });
        n.useEffect(() => {
            m(a);
        }, [m, a]);
        const h = n.useMemo(() => {
            if (void 0 !== o && void 0 !== l) return { value: o, maxValue: l, percentage: o / l };
        }, [o, l]);
        ce(a > 0, 'ProgressBar: maxValue must be greater than 0');
        const f = n.useMemo(() => {
                const e = s / a == 1 && t.status !== Do.doneInactive;
                return t.animationType === Io.growFreeze ? e && t.maxValueAchieved : e;
            }, [a, t.animationType, t.maxValueAchieved, t.status, s]),
            g = n.useMemo(
                () => ({
                    value: s,
                    maxValue: a,
                    setValue: u,
                    setMaxValue: i,
                    animationType: t.animationType ?? Io.simple,
                    size: t.size,
                    status: t.status,
                    previous: h,
                    activeComponents: c.current,
                    progressCompleted: f,
                    hasComponent: d,
                    soundTarget: t.soundTarget,
                    silent: t.silent ?? !1,
                    freezeUnlocked: t.maxValueAchieved ?? !1,
                    percentage: s / a,
                }),
                [s, a, u, t.animationType, t.size, t.status, t.soundTarget, t.silent, t.maxValueAchieved, h, f, d],
            );
        return e.jsx(Fo.Provider, { value: g, children: t.children });
    }
    const gl = {
            background: 'ProgressBar_background_b4143753',
            base: 'ProgressBar_27c2305c',
            base__medium: 'ProgressBar_base__medium_97d40af9',
            base__large: 'ProgressBar_base__large_56a06125',
            base__disabled: 'ProgressBar_base__disabled_c8466b10',
            base__done: 'ProgressBar_base__done_dcd0e31a',
            border: 'ProgressBar_border_cc9e47f4',
        },
        _l = Br('ProgressBar', gl.base, { variants: { size: { medium: gl.base__medium, large: gl.base__large } } }),
        bl = function ({ size: t = jo.medium, backgroundPattern: s, status: n, className: r, classNames: a, ...i }) {
            return e.jsx(fl, {
                size: t,
                status: n,
                ...i,
                children: e.jsxs(_l, {
                    size: t,
                    className: j(r, i.value === i.maxValue && n !== Do.doneInactive && gl.base__done),
                    children: [
                        e.jsx('div', { className: j(gl.border, gl[`border__${t}`], null == a ? void 0 : a.border) }),
                        e.jsx('div', { className: j(gl.background, null == a ? void 0 : a.background) }),
                        e.jsx(Uo, { backgroundPattern: s, className: null == a ? void 0 : a.backgroundPattern }),
                        i.children,
                    ],
                }),
            });
        };
    ((bl.Fill = nl),
        (bl.Delta = Zo),
        (bl.PreviewDelta = hl),
        (bl.NumberIndicators = ll),
        (bl.sizes = jo),
        (bl.statuses = Do),
        (bl.animations = Io));
    const vl = 'ProgressBar_wrapper_a944db13',
        yl = [Oo, Mo],
        wl = n.memo(function ({ progressBar: t, fill: s, delta: n, wrapperSpringProps: r }) {
            const a = Gn({ from: { opacity: 1 }, ...r });
            return e.jsx(bl, {
                ...t,
                children: e.jsxs(mr.div, {
                    className: vl,
                    style: a,
                    children: [
                        e.jsx(bl.Fill, { ...s }),
                        void 0 !== n && e.jsx(bl.Delta, { ...n, steps: (null == n ? void 0 : n.steps) ?? yl }),
                    ],
                }),
            });
        }),
        xl = 'ProgressStats_label_6e975df0',
        El = 'ProgressStats_receivedInBattle_d3abd2fe',
        Pl = Br('ProgressStatsLabel', xl),
        Rl = n.forwardRef(({ className: t, text: s, transitionProps: n, ...r }, a) =>
            e.jsx('div', {
                ...r,
                className: j(xl, t),
                ref: a,
                children: e.jsx(Da, { value: s, transition: n, children: se }),
            }),
        ),
        Sl = n.forwardRef(({ value: t, className: s, total: n, ...r }, a) =>
            e.jsx('div', {
                ...r,
                ref: a,
                className: j(El, s),
                children: e.jsx(Ca, {
                    path: n ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    params: { value: t },
                }),
            }),
        ),
        Tl = n.forwardRef(({ value: t, className: s, total: r, transition: a, target: i, ...o }, l) => {
            const c = Ar(),
                u = n.useMemo(
                    () => ({
                        value: t,
                        textPath: r ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    }),
                    [t, r],
                ),
                d = n.useRef(a);
            return (
                n.useEffect(() => {
                    d.current = a;
                }, [a]),
                e.jsx('div', {
                    ...o,
                    ref: l,
                    className: j(El, s),
                    children: e.jsx(Da, {
                        value: u,
                        transition: {
                            ...a,
                            enter: {
                                ...a.enter,
                                onRest: (...e) => {
                                    var t;
                                    (!0 !== d.current.immediate &&
                                        c.play('numbersShown', { target: i ?? 'mission-progress:received-value' }),
                                        'function' ==
                                            typeof (null == (t = null == a ? void 0 : a.enter) ? void 0 : t.onRest) &&
                                            a.enter.onRest(...e));
                                },
                            },
                        },
                        children: (t) => e.jsx(Ca, { path: t.textPath, params: { value: t.value } }),
                    }),
                })
            );
        }),
        Cl = Br('ProgressStats');
    ((Cl.Label = Pl), (Cl.ReceivedValue = Sl), (Cl.AnimatedReceivedValue = Tl), (Cl.AnimatedLabel = Rl));
    const Nl = n.createContext(void 0);
    const Al = 'Stage_unpaidRewards_9e057a77',
        kl = 'Stage_71984661',
        Il = 'Stage_progress_c5675d64',
        jl = 'Stage_progressStats_f3ded1ed',
        Dl = 'Stage_label_56ecd03c',
        Ol = 'Stage_completedMark_7ff4d47',
        Ml = 'Stage_completedMarkIcon_3750ba10',
        Bl = 'Stage_currency_7f0db2dc',
        Fl = 'Stage_progressBar_7044093c',
        $l = 'Stage_numberStats_cfdc0117',
        Ll = 'Stage_progressCount_c3fb4e69',
        zl = 'Stage_rewardsContainer_4dab8280',
        Ul = 'Stage_reward_fd572cb9',
        ql = 'Stage_dividerBlock_21d542b4',
        Vl = 'Stage_divider_b1969cd7',
        Gl = 'Stage_lock_1e42671c',
        Hl = 'Stage_unpaidContainer_37d54891',
        Ql = 'Stage_lastRewards_9578652b',
        Wl = f.resolve('strings'),
        Yl = D.cubicBezier(0.33, 0, 0.25, 1);
    function Xl({
        level: t,
        chapter: s,
        currentLevelPoints: r,
        maxLevelPoints: a,
        pointsDiff: i,
        battlePassPaid: o,
        freeAwards: l,
        paidAwards: c,
        combinedRewards: u,
    }) {
        const d = Rr({ body: Wl.readOrEmpty('battle_pass.tooltip.lock') }),
            { animation: p, immediateAnimation: m } = (function () {
                const e = n.useContext(Nl);
                return (ce(void 0 !== e, 'useBattlePass must be used under battlePassContext.Provider'), e);
            })(),
            h = Qn(),
            f = Qn(),
            g = Qn(),
            _ = Qn(),
            { model: b } = ji(),
            v = b.computes.holidayBattlePassFinished(),
            y = r >= a,
            w = c.length >= 3 ? 2 : 3,
            x = r - i,
            E = x > 0 ? x : 0,
            P = m || v,
            [[R, T], C] = n.useState([E, E]);
        (n.useEffect(() => {
            var e;
            (p || P) && ((e = r), C(([, t]) => [t, e]));
        }, [r, p, P]),
            n.useEffect(() => {
                P && (f.start(), g.start(), r === a && (null == h || h.start(), null == _ || _.start()));
            }, [P, r, a, f, g, h, _]));
        const N = n.useMemo(
            () => ({
                progress: {
                    value: T,
                    silent: P,
                    status: Do.doneStatic,
                    animationType: Io.grow,
                    maxValue: a,
                    className: Fl,
                    maxValueAchieved: T === a,
                },
                delta: P
                    ? void 0
                    : {
                          from: R,
                          steps: [Oo, Mo],
                          growAnimationConfig: { duration: 600, easing: Yl },
                          shrinkAnimationConfig: { easing: Yl, duration: 600 },
                          onState(e) {
                              e === Bo && T === r && (f.start(), y && h.start(), g.start());
                          },
                      },
                fill: { animationConfig: { duration: P ? 0 : 600, easing: Yl } },
            }),
            [R, T, a, P, f, h, g, y, r],
        );
        return e.jsxs('div', {
            className: kl,
            children: [
                e.jsx('div', {
                    className: Il,
                    children: e.jsxs(Cl, {
                        className: jl,
                        children: [
                            e.jsxs('div', {
                                className: Dl,
                                children: [
                                    e.jsx(Cl.Label, {
                                        children: e.jsx(Ca, { path: 'battle_pass.title.stage', params: { level: t } }),
                                    }),
                                    y &&
                                        e.jsx(Co, {
                                            animationRef: h,
                                            className: Ol,
                                            classNames: { icon: Ml },
                                            springProps: { immediate: P },
                                        }),
                                ],
                            }),
                            e.jsx(wl, { progressBar: N.progress, fill: N.fill, delta: N.delta }),
                            e.jsxs('div', {
                                className: $l,
                                children: [
                                    e.jsx($a, {
                                        current: P ? r : T,
                                        total: a,
                                        className: Ll,
                                        transitionTotal: { immediate: P },
                                        transitionCurrent: { ref: f, immediate: P },
                                    }),
                                    e.jsx(ye, { className: Bl, path: 'battlePass.icons.bp_points' }),
                                    e.jsx(Cl.AnimatedReceivedValue, {
                                        value: S.formatNumber('integral', i),
                                        transition: {
                                            ref: g,
                                            immediate: P,
                                            initial: { opacity: 0, y: '-5rem' },
                                            enter: { onRest: () => _.start() },
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                e.jsx('div', {
                    className: zl,
                    children: o
                        ? e.jsx(Eo, {
                              completed: y,
                              rewardsGlowRef: _,
                              bonuses: u,
                              immediateAnimation: P,
                              maxRewardsCount: 5,
                              rewardsTooltipResId: ki,
                              level: t,
                              chapter: s,
                              rewardType: wo,
                              className: Ql,
                              rewardItemClassName: Ul,
                          })
                        : e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx(Eo, {
                                      completed: y,
                                      rewardsGlowRef: _,
                                      bonuses: l,
                                      immediateAnimation: P,
                                      maxRewardsCount: w,
                                      rewardsTooltipResId: ki,
                                      level: t,
                                      chapter: s,
                                      rewardType: vo,
                                      className: j(0 === c.length && Ql),
                                      rewardItemClassName: Ul,
                                  }),
                                  c.length > 0 &&
                                      e.jsxs(e.Fragment, {
                                          children: [
                                              e.jsxs('div', {
                                                  ...d,
                                                  className: ql,
                                                  children: [
                                                      e.jsx('div', { className: Vl }),
                                                      e.jsx(ye, { className: Gl, path: 'battlePass.widget.lock' }),
                                                      e.jsx('div', { className: Vl }),
                                                  ],
                                              }),
                                              e.jsxs('div', {
                                                  className: Hl,
                                                  children: [
                                                      e.jsx('div', { className: Al }),
                                                      e.jsx(Eo, {
                                                          completed: !1,
                                                          bonuses: c,
                                                          maxRewardsCount: 3,
                                                          rewardsTooltipResId: ki,
                                                          level: t,
                                                          chapter: s,
                                                          rewardType: yo,
                                                          className: Ql,
                                                          rewardItemClassName: Ul,
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                }),
            ],
        });
    }
    const Zl = 'ChapterContent_header_31f4031e',
        Kl = 'ChapterContent_content_10fd4769',
        Jl = 'ChapterContent_info_cb358338',
        ec = 'ChapterContent_title_481bdaeb',
        tc = 'ChapterContent_navigation_b57418c9',
        sc = 'ChapterContent_status_18ebfb9b',
        nc = 'ChapterContent_achievements_ab6a323f',
        rc = 'ChapterContent_logo_d27a1604',
        ac = f.resolve('strings'),
        ic = [],
        oc = o.observer(function ({ chapterId: t, postProgression: s, handleCardAction: n }) {
            const { model: a } = ji(),
                i = Rr({
                    body: ac.readOrEmpty(
                        a.navigationEnabled.get()
                            ? 'tooltips.quests.battlePass.linkBtn'
                            : 'battle_pass.tooltip.cardButton.disabled.body',
                    ),
                }),
                o = a.levelMax.get(),
                l = t > 0,
                c = o ? !s : l || a.battlePassComplete.get(),
                u = a.currentLevel.get() + (o && !s ? 0 : 1),
                d = !o && s ? u % a.levelsInPostProgression.get() : u,
                p = d - a.computes.levelsDiff(),
                m = p < 0 ? a.previousMaxLevelPoints.get() : a.maxLevelPoints.get(),
                h = a.computes.levelsDiff() > 0 && (!s || !o),
                f = !(s && o) && a.computes.levelsDiff() > 1,
                g = a.pointsDiff.get() > 0 && (s || (l && !o)),
                _ = a.computes.battlePassStatus(t, o),
                b = r.useAdaptive(
                    { iconSize: vi, shieldSize: di, containerSize: ci },
                    { large: { iconSize: yi, shieldSize: pi, containerSize: ui } },
                );
            return e.jsxs(e.Fragment, {
                children: [
                    e.jsxs('div', {
                        className: Zl,
                        children: [
                            e.jsx(Ni, {
                                iconSize: b.iconSize,
                                shieldSize: b.shieldSize,
                                containerSize: b.containerSize,
                                bpPurchased: a.hasBattlePass.get() && !s,
                                chapterID: t,
                                className: rc,
                            }),
                            e.jsxs('div', {
                                className: Kl,
                                children: [
                                    e.jsxs('div', {
                                        className: Jl,
                                        children: [
                                            e.jsx('div', { className: ec, children: a.computes.chapterTitle(t, s) }),
                                            c &&
                                                e.jsx(oi, {
                                                    bpTopPoints: a.bpTopPoints.get(),
                                                    questPoints: a.questPoints.get(),
                                                    bonusCapPoints: a.bonusCapPoints.get(),
                                                    className: nc,
                                                }),
                                        ],
                                    }),
                                    !(o && s) &&
                                        e.jsxs('div', {
                                            className: tc,
                                            children: [
                                                !s &&
                                                    a.navigationEnabled.get() &&
                                                    _ &&
                                                    e.jsx('div', { className: sc, children: _ }),
                                                e.jsx(Vr, {
                                                    ...i,
                                                    theme: Vr.themes.secondary,
                                                    size: Vr.sizes.small,
                                                    onClick: n,
                                                    disabled: !a.navigationEnabled.get(),
                                                    children: ac.readOrEmpty(
                                                        'tooltips.quests.linkBtn.battlePass.select',
                                                    ),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (l || o) &&
                        e.jsxs(e.Fragment, {
                            children: [
                                h &&
                                    e.jsx(Xl, {
                                        level: !o && s ? a.computes.updatedPreviousLevel() : a.previousLevel.get() + 1,
                                        chapter: o ? a.previousChapterID.get() : a.currentChapterID.get(),
                                        currentLevelPoints: a.previousMaxLevelPoints.get(),
                                        maxLevelPoints: a.previousMaxLevelPoints.get(),
                                        pointsDiff: a.computes.prevLevelDiff(),
                                        battlePassPaid: a.hasBattlePass.get(),
                                        freeAwards: a.computes.previousFreeRewards()[0] || ic,
                                        paidAwards: a.computes.previousPaidRewards()[0] || ic,
                                        combinedRewards: a.computes.previousCombinedRewards()[0] || ic,
                                    }),
                                f &&
                                    e.jsx(e.Fragment, {
                                        children: Array.from({ length: a.computes.levelsDiff() - 1 }).map((t, s) =>
                                            e.jsx(
                                                Xl,
                                                {
                                                    level: (p < 0 ? a.previousLevel.get() + 1 : p) + s + 1,
                                                    chapter: a.previousChapterID.get(),
                                                    currentLevelPoints: m,
                                                    maxLevelPoints: m,
                                                    pointsDiff: m,
                                                    battlePassPaid: a.hasBattlePass.get(),
                                                    freeAwards: a.computes.previousFreeRewards()[s + 1] || ic,
                                                    paidAwards: a.computes.previousPaidRewards()[s + 1] || ic,
                                                    combinedRewards: a.computes.previousCombinedRewards()[s + 1] || ic,
                                                },
                                                s,
                                            ),
                                        ),
                                    }),
                                g &&
                                    e.jsx(Xl, {
                                        level: d,
                                        chapter: a.currentChapterID.get(),
                                        currentLevelPoints: a.currentLevelPoints.get(),
                                        maxLevelPoints: a.maxLevelPoints.get(),
                                        pointsDiff: a.pointsDiff.get(),
                                        battlePassPaid: a.hasBattlePass.get(),
                                        freeAwards: a.currentFreeAwards.get(),
                                        paidAwards: a.currentPaidAwards.get(),
                                        combinedRewards: a.computes.currentCombinedRewards(),
                                    }),
                            ],
                        }),
                ],
            });
        }),
        lc = 'missions-progress:battle-pass:random-card',
        cc = f.resolve('strings'),
        uc = { rootId: f.resolve('aliases').read((e) => e.battle_results.progression.BattlePass('resId')) },
        dc = o.observer(function () {
            const t = Ar(),
                { model: s, controls: n } = ji(),
                r = s.navigationEnabled.get();
            function a() {
                r && n.navigateTo();
            }
            const i = Rr({
                header: cc.readOrEmpty('battle_pass.tooltip.freePoints.header'),
                body: cc.readOrEmpty('battle_pass.tooltip.freePoints.body'),
            });
            return s.computes.holidayBattlePassCompleted()
                ? e.jsx(za, {
                      title: cc.readOrEmpty('battle_pass.battlePassVehicleAwardView.content.title'),
                      className: Wa,
                      children: e.jsxs('div', {
                          className: j(Za, Ka),
                          children: [
                              e.jsx('div', {
                                  className: j(ni, ri),
                                  children: cc.readOrEmpty('battle_pass.title.earningPoints'),
                              }),
                              e.jsx(oi, {
                                  bpTopPoints: s.bpTopPoints.get(),
                                  questPoints: s.questPoints.get(),
                                  bonusCapPoints: s.bonusCapPoints.get(),
                              }),
                          ],
                      }),
                  })
                : e.jsxs(za, {
                      title: cc.readOrEmpty('battle_pass.battlePassVehicleAwardView.content.title'),
                      onButtonAction: a,
                      onClick: (e) => {
                          r && (t.play('click', { target: lc, original: e }), a());
                      },
                      onMouseEnter: (e) => {
                          t.play('mouse-enter', { target: lc, original: e });
                      },
                      actionTooltipParams: { body: cc.readOrEmpty('tooltips.quests.battlePass.linkBtn') },
                      className: Wa,
                      disabled: !s.navigationEnabled.get(),
                      children: [
                          e.jsx(oc, {
                              chapterId: s.previousChapterID.get(),
                              postProgression: s.computes.postProgression(),
                              handleCardAction: a,
                          }),
                          s.computes.dividerVisible() &&
                              e.jsx(xe, {
                                  classNames: { base: j(ti, s.battlePassComplete.get() && s.levelMax.get() && si) },
                              }),
                          s.computes.freePointsTransfer() &&
                              e.jsxs('div', {
                                  ...i,
                                  className: Ya,
                                  children: [
                                      cc.readOrEmpty('battle_pass.points.transfer'),
                                      e.jsx('span', { className: Xa, children: s.pointsAux.get() }),
                                  ],
                              }),
                          s.computes.freePointsVisible() &&
                              e.jsxs('div', {
                                  className: Za,
                                  children: [
                                      e.jsx('div', {
                                          className: j(ni, ri),
                                          children: cc.readOrEmpty('battle_pass.title.freePoints'),
                                      }),
                                      e.jsx(oi, {
                                          bpTopPoints: s.bpTopPoints.get(),
                                          questPoints: s.questPoints.get(),
                                          bonusCapPoints: s.bonusCapPoints.get(),
                                      }),
                                  ],
                              }),
                          s.battlePassComplete.get() &&
                              s.levelMax.get() &&
                              !s.holidayBattlePass.get() &&
                              e.jsx(oc, {
                                  chapterId: s.currentChapterID.get(),
                                  postProgression: !0,
                                  handleCardAction: a,
                              }),
                      ],
                  });
        });
    function pc({ animation: t, immediateAnimation: s }) {
        const r = n.useMemo(() => ({ animation: t, immediateAnimation: s }), [t, s]);
        return e.jsx(Ii, {
            options: uc,
            children: e.jsx(Nl.Provider, {
                value: r,
                children: e.jsx(Qa, {
                    soundsOverrides:
                        ((a = Ua),
                        Object.entries(a).reduce(
                            (e, [t, s]) => (
                                (e[t] = (e) => {
                                    var n;
                                    e && e.target in s ? U.sound(s[e.target]) : null == (n = Sr[t]) || n.call(Sr, e);
                                }),
                                e
                            ),
                            {},
                        )),
                    children: e.jsx(dc, {}),
                }),
            }),
        });
        var a;
    }
    var mc;
    exports.plugin =
        ((mc = async ({ url: t }) => {
            const s = new ae();
            return {
                async init() {
                    var n,
                        r,
                        a,
                        i,
                        o,
                        l = [];
                    try {
                        const c = Ga(
                            `${(function (e, t = '/') {
                                let s = -1;
                                for (let n = 0; n < e.length; n++) {
                                    const r = e[n];
                                    if ((r === t && (s = n), '.' === r)) return e.slice(0, s);
                                }
                                return e;
                            })(t)}/battle_pass.css`,
                        );
                        (s.add(c.cleanup), await c.promise.catch(console.error));
                        const p = J(uc, { name: 'BattlePassProgressDataLayer' }),
                            m =
                                ((n = l),
                                (o = p.dispose),
                                null != (r = { [Symbol.dispose]: o })
                                    ? ('object' != typeof r && 'function' != typeof r && d('Object expected'),
                                      a && (i = r[u('asyncDispose')]),
                                      void 0 === i && (i = r[u('dispose')]),
                                      'function' != typeof i && d('Object not disposable'),
                                      n.push([a, i, r]))
                                    : a && n.push([a]),
                                p.readByPath('levelMax')),
                            h = p.readByPath('levelReached'),
                            f = [];
                        return (
                            m
                                ? f.push({
                                      id: ge(),
                                      item: e.jsx(Ca, {
                                          path: 'battle_results.missionsProgress.notificationsTabs.battlePass.chapterComplete',
                                      }),
                                  })
                                : h &&
                                  f.push({
                                      id: ge(),
                                      item: e.jsx(Ca, {
                                          path: 'battle_results.missionsProgress.notificationsTabs.battlePass.stageComplete',
                                      }),
                                  }),
                            { notifications: f, animated: !0, component: pc, categoryOrder: 950, completed: m || h }
                        );
                    } catch (m) {
                        var c = m,
                            p = !0;
                    } finally {
                        ((e, t, s) => {
                            var n =
                                    'function' == typeof SuppressedError
                                        ? SuppressedError
                                        : function (e, t, s, n) {
                                              return (
                                                  ((n = Error(s)).name = 'SuppressedError'),
                                                  (n.error = e),
                                                  (n.suppressed = t),
                                                  n
                                              );
                                          },
                                r = (e) =>
                                    (t = s ? new n(e, t, 'An error was suppressed during disposal') : ((s = !0), e)),
                                a = (n) => {
                                    for (; (n = e.pop()); )
                                        try {
                                            var i = n[1] && n[1].call(n[2]);
                                            if (n[0]) return Promise.resolve(i).then(a, (e) => (r(e), a()));
                                        } catch (o) {
                                            r(o);
                                        }
                                    if (s) throw t;
                                };
                            a();
                        })(l, c, p);
                    }
                },
                async destroy() {
                    s.dispose();
                },
            };
        }),
        async (e) => ({ ...(await mc(e)), id: e.id }));
});

export default exports;
