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
})(this, function (e, t, n, s, r, o, i, a) {
    'use strict';
    var l,
        u = Object.defineProperty,
        c = (e, t, n) =>
            ((e, t, n) =>
                t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n))(
                e,
                'symbol' != typeof t ? t + '' : t,
                n,
            );
    function d(e) {
        const t = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
        if (e)
            for (const n in e)
                if ('default' !== n) {
                    const s = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, s.get ? s : { enumerable: !0, get: () => e[n] });
                }
        return ((t.default = e), Object.freeze(t));
    }
    const m = d(s),
        h = t.createContainer();
    function f(e, t) {
        return e && e.length > 0 ? `${e}.${t}` : t;
    }
    function p(e, t) {
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
    class g {
        constructor(e = window.R.images, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, n = 'silent') {
            const s = e.startsWith('R.images') ? e : f(this.prefix, e),
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
            return void 0 === r ? ('silent' !== n && p(`Resource not found: ${s}`, n), t()) : r;
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
    const b = { integral: 0, gold: 1 },
        v = { fractional: 0, woZeroDigits: 1 },
        y = Object.keys(b),
        w = Object.keys(v);
    const x = { full: _.FullTime, short: _.ShortTime };
    const E = {
        isNumberFormat: function (e) {
            return e in b;
        },
        formatNumber: function (e, t) {
            return window.systemLocale.getNumberFormat(t, b[e]);
        },
        numberFormats: y,
        isRealFormat: function (e) {
            return e in v;
        },
        formatReal: function (e, t) {
            return window.systemLocale.getRealFormat(t, v[e]);
        },
        realFormats: w,
        formatDateTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(t, e, n);
        },
        dateTimeFormats: _,
        formatTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(t, e, n);
        },
        timeFormats: Object.keys(x),
        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
    };
    function P(e, t, n) {
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
    class S {
        constructor(e = window.R.strings, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, n = 'silent') {
            const s = e.startsWith('R.strings') ? e : f(this.prefix, e),
                r = P(s, void 0, e.startsWith('R.strings') ? window : this.root);
            return void 0 === r ? ('silent' !== n && p(`Resource not found: ${s}`, n), t()) : r;
        }
        readOrEmpty(e, t = 'warn') {
            return this.readOr(e, () => '', t);
        }
        readOrThrow(e) {
            const t = e.startsWith('R.strings') ? e : f(this.prefix, e),
                n = P(t, void 0, e.startsWith('R.strings') ? window : this.root);
            if (void 0 === n) throw new Error(`Resource not found: ${t}`);
            return n;
        }
        plural(e, t) {
            return this.pluralOr(e, t, () => {});
        }
        pluralOr(e, t, n, s = 'silent') {
            const r = e.startsWith('R.strings') ? e : f(this.prefix, e),
                o = P(r, t, e.startsWith('R.strings') ? window : this.root);
            return void 0 === o ? ('silent' !== s && p(`Resource not found: ${r}`, s), n()) : o;
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
            const s = e.startsWith('R.videos') ? e : f(this.prefix, e),
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
            return void 0 === r ? ('silent' !== n && p(`Resource not found: ${e}`, n), t()) : r;
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
    function T(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    h.register({
        strings: t.asFunction(() => new S()).singleton(),
        images: t.asFunction(() => new g(window.R.images.gui.maps.icons)).singleton(),
        atlases: t.asFunction(() => new g(window.R.atlases)).singleton(),
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
                            : p(`Sound not found: ${e}`, 'warn');
                    }
                },
            )
            .singleton(),
        langCode: t.asValue(R.strings.settings.LANGUAGE_CODE()),
        intl: t.asValue(E),
    });
    var N,
        A = { exports: {} };
    /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */ ((N = A),
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
            N.exports ? ((t.default = t), (N.exports = t)) : (window.classNames = t);
        })());
    const I = T(A.exports),
        C = {
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
            reverseEaseInOutCirc: (e) => 1 - C.easeInOutCirc(1 - e),
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
                        const o = O(r, t, n) - e;
                        if (Math.abs(o) < s) return r;
                        const i = j(r, t, n);
                        if (Math.abs(i) < s) break;
                        r -= o / i;
                    }
                    return r;
                })(r, e, n);
                return 3 * t * (1 - o) ** 2 * o + 3 * s * (1 - o) * o ** 2 + o ** 3;
            },
        };
    function O(e, t, n) {
        return 3 * t * (1 - e) ** 2 * e + 3 * n * (1 - e) * e ** 2 + e ** 3;
    }
    function j(e, t, n) {
        return 9 * t * (1 - e) ** 2 + 6 * (n - t) * (1 - e) * e + 3 * (1 - n) * e ** 2;
    }
    function M(e) {
        return (t) => (
            engine.on(e, t),
            () => {
                engine.off(e, t);
            }
        );
    }
    function D(e) {
        viewEnv.setTrackMouseOnStage(e);
    }
    const B = { down: M('mousedown'), up: M('mouseup'), move: M('mousemove') };
    function L(e) {
        engine.call('PlaySound', e);
    }
    !(function () {
        const e = { listeners: 0, enabled: !0, initialized: !1 };
        function t() {
            e.enabled && D(!1);
        }
        function n() {
            e.enabled && D(!0);
        }
        function s() {
            e.enabled
                ? e.listeners < 1
                    ? ((e.initialized = !1),
                      document.body.removeEventListener('mouseenter', t),
                      document.body.removeEventListener('mouseleave', n),
                      D(!1))
                    : e.initialized ||
                      ((e.initialized = !0),
                      document.body.addEventListener('mouseenter', t),
                      document.body.addEventListener('mouseleave', n))
                : D(!1);
        }
        ['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const r = `mouse${t}`,
                            o = B[t]((e) => n([e, 'outside']));
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
    const F = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
        $ = { ...Object.keys(F).reduce((e, t) => ((e[t] = () => L(F[t])), e), {}), sound: L },
        U = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
        z = {
            onTextureFrozen: M('self.onTextureFrozen'),
            onTextureReady: M('self.onTextureReady'),
            onDomBuilt: M('self.onDomBuilt'),
            onLoaded: M('self.onLoaded'),
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
            onDisplayChanged: M('self.onShowingStatusChanged'),
            onFocusUpdated: M('self.onFocusChanged'),
            children: {
                onAdded: M('children.onAdded'),
                onLoaded: M('children.onLoaded'),
                onRemoved: M('children.onRemoved'),
                onAttached: M('children.onAttached'),
                onTextureReady: M('children.onTextureReady'),
                onRequestPosition: M('children.requestPosition'),
            },
        },
        q = 1;
    function G(e) {
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
    const V = (e) => {
            const t = [];
            for (const [n, s] of Object.entries(e)) {
                const e = G(s);
                void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
            }
            return t;
        },
        H = (e, t) => {
            const n = 'GFViewEventProxy';
            if (void 0 !== t) {
                const { args: s, ...r } = t;
                return void 0 !== s
                    ? viewEnv.handleViewEvent({ __Type: n, type: e, ...r, arguments: V(s) })
                    : viewEnv.handleViewEvent({ __Type: n, type: e, ...r });
            }
            return viewEnv.handleViewEvent({ __Type: n, type: e });
        },
        Q = new Map(),
        W = {
            tooltip: {
                open(e, t, n = 0, s) {
                    (H(q, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: s }),
                        Q.set(`${e}-${t}`, { targetID: e, contentID: t }));
                },
                hide(e, t, n = 0) {
                    (H(q, { contentID: t, decoratorID: n, targetID: e, on: !1 }), Q.delete(`${e}-${t}`));
                },
                hideAll() {
                    const e = Array.from(Q.values());
                    for (const t of e) this.hide(t.targetID, t.contentID);
                },
            },
        };
    Object.keys(U).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === U[t]), e), {});
    class X {
        constructor() {
            c(this, 'listeners', new Set());
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
    const Y = (e) => (0 === e ? window : window.subViews.get(e));
    function Z(
        { initializer: e = !0, rootId: t = 0, getRoot: n = Y, context: s = 'model' } = {},
        { name: r = 'DataLayer' } = {},
    ) {
        const o = new Map(),
            i = { subscribersNotified: new X() },
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
    function K(e, t) {
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
    function J() {}
    function ee(e) {
        return e;
    }
    function te() {
        return !1;
    }
    function ne() {
        throw new Error('Unreachable absurd brach');
    }
    class se {
        constructor() {
            (c(this, '_disposes', new Set()),
                c(this, 'dispose', () => {
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
    function re(e, t, n, s) {
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
                                                    headers: h(o),
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
                    (this.headers = new i(t.headers)),
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
            function h(e) {
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
    const oe = fetch;
    function ie(e, t) {
        return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
    }
    function ae(e, t) {
        return Array.isArray(e) ? e.map(t) : e.map((e, n, s) => t(null == e ? void 0 : e.value, n, s));
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
        ie(
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
        ie(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
        ie(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
        ie(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
        ie(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
        ie(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
        ie(['Up', 'Down'], 'Page'),
        ie(['Left', 'Right'], 'Bracket'));
    const le = (e) => {
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
    function ue(e, t) {
        e || console.error(t || 'Assertion failed');
    }
    function ce(e, t, n) {
        return 'function' == typeof t ? de(0, e, t) : (ue(void 0 !== n, 'fn must be defined'), de(e, t, n));
    }
    function de(e, t, n) {
        const s = new Array(t - e);
        for (let r = e; r < t; r++) s[r] = n(r);
        return s;
    }
    ue.log = function (e, t) {
        e || console.error(t || 'Assertion failed');
    };
    function me(e) {
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
    const he = {
        zh_cn: me,
        zh_sg: me,
        zh_tw: me,
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
    function fe(e) {
        return e.split(' ');
    }
    const pe = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko']);
    function ge() {
        return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    }
    const _e = () => {};
    function be(t) {
        const n = t;
        return s.forwardRef(function (t, s) {
            const o = r.useAdaptive(t, t.adaptive),
                { path: i, ...a } = o,
                l = o.images ?? h.resolve('images'),
                u = { ...a, ref: s };
            {
                const t = i ? l.readOr(i, _e, 'warn') : void 0;
                return t ? e.jsx(n, { ...u, src: t }) : e.jsx(n, { ...u, unknown: !0 });
            }
        });
    }
    const ve = {
            background:
                'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
            backgroundSize: '20rem 20rem',
            backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
            backgroundColor: '#000',
        },
        ye = be(
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
                        unknownStyle: d = ve,
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
    be(
        s.forwardRef(function (t, n) {
            const { width: s, height: r, src: o, unselectable: i, unknown: a, unknownStyle: l = ve, ...u } = t;
            return t.unknown
                ? e.jsx('div', { ...u, style: { width: t.width, height: t.height, ...l } })
                : e.jsx('img', { ...u, ref: n, src: o, width: s, height: r });
        }),
    );
    const we = 'Divider_80a19f4b';
    function xe({ classNames: t }) {
        return e.jsx('div', {
            className: I(we, null == t ? void 0 : t.base),
            children: e.jsx(ye, {
                className: null == t ? void 0 : t.image,
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    }
    var Re = Fe(),
        Ee = (e) => Me(e, Re),
        Pe = Fe();
    Ee.write = (e) => Me(e, Pe);
    var Se = Fe();
    Ee.onStart = (e) => Me(e, Se);
    var ke = Fe();
    Ee.onFrame = (e) => Me(e, ke);
    var Te = Fe();
    Ee.onFinish = (e) => Me(e, Te);
    var Ne = [];
    Ee.setTimeout = (e, t) => {
        const n = Ee.now() + t,
            s = () => {
                const e = Ne.findIndex((e) => e.cancel == s);
                (~e && Ne.splice(e, 1), (Oe -= ~e ? 1 : 0));
            },
            r = { time: n, handler: e, cancel: s };
        return (Ne.splice(Ae(n), 0, r), (Oe += 1), De(), r);
    };
    var Ae = (e) => ~(~Ne.findIndex((t) => t.time > e) || ~Ne.length);
    ((Ee.cancel = (e) => {
        (Se.delete(e), ke.delete(e), Te.delete(e), Re.delete(e), Pe.delete(e));
    }),
        (Ee.sync = (e) => {
            ((je = !0), Ee.batchedUpdates(e), (je = !1));
        }),
        (Ee.throttle = (e) => {
            let t;
            function n() {
                try {
                    e(...t);
                } finally {
                    t = null;
                }
            }
            function s(...e) {
                ((t = e), Ee.onStart(n));
            }
            return (
                (s.handler = e),
                (s.cancel = () => {
                    (Se.delete(n), (t = null));
                }),
                s
            );
        }));
    var Ie = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
    ((Ee.use = (e) => (Ie = e)),
        (Ee.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
        (Ee.batchedUpdates = (e) => e()),
        (Ee.catch = console.error),
        (Ee.frameLoop = 'always'),
        (Ee.advance = () => {
            'demand' !== Ee.frameLoop
                ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
                : Le();
        }));
    var Ce = -1,
        Oe = 0,
        je = !1;
    function Me(e, t) {
        je ? (t.delete(e), e(0)) : (t.add(e), De());
    }
    function De() {
        Ce < 0 && ((Ce = 0), 'demand' !== Ee.frameLoop && Ie(Be));
    }
    function Be() {
        ~Ce && (Ie(Be), Ee.batchedUpdates(Le));
    }
    function Le() {
        const e = Ce;
        Ce = Ee.now();
        const t = Ae(Ce);
        (t && ($e(Ne.splice(0, t), (e) => e.handler()), (Oe -= t)),
            Oe
                ? (Se.flush(), Re.flush(e ? Math.min(64, Ce - e) : 16.667), ke.flush(), Pe.flush(), Te.flush())
                : (Ce = -1));
    }
    function Fe() {
        let e = new Set(),
            t = e;
        return {
            add(n) {
                ((Oe += t != e || e.has(n) ? 0 : 1), e.add(n));
            },
            delete: (n) => ((Oe -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
            flush(n) {
                t.size && ((e = new Set()), (Oe -= t.size), $e(t, (t) => t(n) && e.add(t)), (Oe += e.size), (t = e));
            },
        };
    }
    function $e(e, t) {
        e.forEach((e) => {
            try {
                t(e);
            } catch (n) {
                Ee.catch(n);
            }
        });
    }
    var Ue = Object.defineProperty,
        ze = {};
    function qe() {}
    ((e, t) => {
        for (var n in t) Ue(e, n, { get: t[n], enumerable: !0 });
    })(ze, {
        assign: () => st,
        colors: () => et,
        createStringInterpolator: () => Ye,
        skipAnimation: () => tt,
        to: () => Ze,
        willAdvance: () => nt,
    });
    var Ge = {
        arr: Array.isArray,
        obj: (e) => !!e && 'Object' === e.constructor.name,
        fun: (e) => 'function' == typeof e,
        str: (e) => 'string' == typeof e,
        num: (e) => 'number' == typeof e,
        und: (e) => void 0 === e,
    };
    function Ve(e, t) {
        if (Ge.arr(e)) {
            if (!Ge.arr(t) || e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
        }
        return e === t;
    }
    var He = (e, t) => e.forEach(t);
    function Qe(e, t, n) {
        if (Ge.arr(e)) for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s);
    }
    var We = (e) => (Ge.und(e) ? [] : Ge.arr(e) ? e : [e]);
    function Xe(e, t) {
        if (e.size) {
            const n = Array.from(e);
            (e.clear(), He(n, t));
        }
    }
    var Ye,
        Ze,
        Ke = (e, ...t) => Xe(e, (e) => e(...t)),
        Je = () =>
            'undefined' == typeof window ||
            !window.navigator ||
            /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        et = null,
        tt = !1,
        nt = qe,
        st = (e) => {
            (e.to && (Ze = e.to),
                e.now && (Ee.now = e.now),
                void 0 !== e.colors && (et = e.colors),
                null != e.skipAnimation && (tt = e.skipAnimation),
                e.createStringInterpolator && (Ye = e.createStringInterpolator),
                e.requestAnimationFrame && Ee.use(e.requestAnimationFrame),
                e.batchedUpdates && (Ee.batchedUpdates = e.batchedUpdates),
                e.willAdvance && (nt = e.willAdvance),
                e.frameLoop && (Ee.frameLoop = e.frameLoop));
        },
        rt = new Set(),
        ot = [],
        it = [],
        at = 0,
        lt = {
            get idle() {
                return !rt.size && !ot.length;
            },
            start(e) {
                at > e.priority ? (rt.add(e), Ee.onStart(ut)) : (ct(e), Ee(mt));
            },
            advance: mt,
            sort(e) {
                if (at) Ee.onFrame(() => lt.sort(e));
                else {
                    const t = ot.indexOf(e);
                    ~t && (ot.splice(t, 1), dt(e));
                }
            },
            clear() {
                ((ot = []), rt.clear());
            },
        };
    function ut() {
        (rt.forEach(ct), rt.clear(), Ee(mt));
    }
    function ct(e) {
        ot.includes(e) || dt(e);
    }
    function dt(e) {
        ot.splice(
            (function (e, t) {
                const n = e.findIndex(t);
                return n < 0 ? e.length : n;
            })(ot, (t) => t.priority > e.priority),
            0,
            e,
        );
    }
    function mt(e) {
        const t = it;
        for (let n = 0; n < ot.length; n++) {
            const s = ot[n];
            ((at = s.priority), s.idle || (nt(s), s.advance(e), s.idle || t.push(s)));
        }
        return ((at = 0), ((it = ot).length = 0), (ot = t).length > 0);
    }
    var ht = '[-+]?\\d*\\.?\\d+',
        ft = ht + '%';
    function pt(...e) {
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var gt = new RegExp('rgb' + pt(ht, ht, ht)),
        _t = new RegExp('rgba' + pt(ht, ht, ht, ht)),
        bt = new RegExp('hsl' + pt(ht, ft, ft)),
        vt = new RegExp('hsla' + pt(ht, ft, ft, ht)),
        yt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        wt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        xt = /^#([0-9a-fA-F]{6})$/,
        Rt = /^#([0-9a-fA-F]{8})$/;
    function Et(e, t, n) {
        return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        );
    }
    function Pt(e, t, n) {
        const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
            r = 2 * n - s,
            o = Et(r, s, e + 1 / 3),
            i = Et(r, s, e),
            a = Et(r, s, e - 1 / 3);
        return (Math.round(255 * o) << 24) | (Math.round(255 * i) << 16) | (Math.round(255 * a) << 8);
    }
    function St(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function kt(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function Tt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function Nt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
    }
    function At(e) {
        let t = (function (e) {
            let t;
            return 'number' == typeof e
                ? e >>> 0 === e && e >= 0 && e <= 4294967295
                    ? e
                    : null
                : (t = xt.exec(e))
                  ? parseInt(t[1] + 'ff', 16) >>> 0
                  : et && void 0 !== et[e]
                    ? et[e]
                    : (t = gt.exec(e))
                      ? ((St(t[1]) << 24) | (St(t[2]) << 16) | (St(t[3]) << 8) | 255) >>> 0
                      : (t = _t.exec(e))
                        ? ((St(t[1]) << 24) | (St(t[2]) << 16) | (St(t[3]) << 8) | Tt(t[4])) >>> 0
                        : (t = yt.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                          : (t = Rt.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = wt.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = bt.exec(e))
                                ? (255 | Pt(kt(t[1]), Nt(t[2]), Nt(t[3]))) >>> 0
                                : (t = vt.exec(e))
                                  ? (Pt(kt(t[1]), Nt(t[2]), Nt(t[3])) | Tt(t[4])) >>> 0
                                  : null;
        })(e);
        if (null === t) return e;
        t = t || 0;
        return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
    }
    var It = (e, t, n) => {
        if (Ge.fun(e)) return e;
        if (Ge.arr(e)) return It({ range: e, output: t, extrapolate: n });
        if (Ge.str(e.output[0])) return Ye(e);
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
    var Ct = Symbol.for('FluidValue.get'),
        Ot = Symbol.for('FluidValue.observers'),
        jt = (e) => Boolean(e && e[Ct]),
        Mt = (e) => (e && e[Ct] ? e[Ct]() : e),
        Dt = (e) => e[Ot] || null;
    function Bt(e, t) {
        const n = e[Ot];
        n &&
            n.forEach((e) => {
                !(function (e, t) {
                    e.eventObserved ? e.eventObserved(t) : e(t);
                })(e, t);
            });
    }
    var Lt = class {
            constructor(e) {
                if (!e && !(e = this.get)) throw Error('Unknown getter');
                Ft(this, e);
            }
        },
        Ft = (e, t) => qt(e, Ct, t);
    function $t(e, t) {
        if (e[Ct]) {
            let n = e[Ot];
            (n || qt(e, Ot, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
        }
        return t;
    }
    function Ut(e, t) {
        const n = e[Ot];
        if (n && n.has(t)) {
            const s = n.size - 1;
            (s ? n.delete(t) : (e[Ot] = null), e.observerRemoved && e.observerRemoved(s, t));
        }
    }
    var zt,
        qt = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
        Gt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Vt = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Ht = new RegExp(`(${Gt.source})(%|[a-z]+)`, 'i'),
        Qt = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Wt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Xt = (e) => {
            const [t, n] = Yt(e);
            if (!t || Je()) return e;
            const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
            if (s) return s.trim();
            if (n && n.startsWith('--')) {
                const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
                return t || e;
            }
            return n && Wt.test(n) ? Xt(n) : n || e;
        },
        Yt = (e) => {
            const t = Wt.exec(e);
            if (!t) return [,];
            const [, n, s] = t;
            return [n, s];
        },
        Zt = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
        Kt = (e) => {
            zt || (zt = et ? new RegExp(`(${Object.keys(et).join('|')})(?!\\w)`, 'g') : /^\b$/);
            const t = e.output.map((e) => Mt(e).replace(Wt, Xt).replace(Vt, At).replace(zt, At)),
                n = t.map((e) => e.match(Gt).map(Number)),
                s = n[0].map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                ),
                r = s.map((t) => It({ ...e, output: t }));
            return (e) => {
                var n;
                const s = !Ht.test(t[0]) && (null == (n = t.find((e) => Ht.test(e))) ? void 0 : n.replace(Gt, ''));
                let o = 0;
                return t[0].replace(Gt, () => `${r[o++](e)}${s || ''}`).replace(Qt, Zt);
            };
        },
        Jt = 'react-spring: ',
        en = (e) => {
            const t = e;
            let n = !1;
            if ('function' != typeof t) throw new TypeError(`${Jt}once requires a function parameter`);
            return (...e) => {
                n || (t(...e), (n = !0));
            };
        },
        tn = en(console.warn);
    var nn = en(console.warn);
    function sn(e) {
        return Ge.str(e) && ('#' == e[0] || /\d/.test(e) || (!Je() && Wt.test(e)) || e in (et || {}));
    }
    var rn = Je() ? s.useEffect : s.useLayoutEffect,
        on = () => {
            const e = s.useRef(!1);
            return (
                rn(
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
    function an() {
        const e = s.useState()[1],
            t = on();
        return () => {
            t.current && e(Math.random());
        };
    }
    var ln = (e) => s.useEffect(e, un),
        un = [];
    function cn(e) {
        const t = s.useRef();
        return (
            s.useEffect(() => {
                t.current = e;
            }),
            t.current
        );
    }
    var dn = Symbol.for('Animated:node'),
        mn = (e) => e && e[dn],
        hn = (e, t) => {
            return (
                (n = e),
                (s = dn),
                (r = t),
                Object.defineProperty(n, s, { value: r, writable: !0, configurable: !0 })
            );
            var n, s, r;
        },
        fn = (e) => e && e[dn] && e[dn].getPayload(),
        pn = class {
            constructor() {
                hn(this, this);
            }
            getPayload() {
                return this.payload || [];
            }
        },
        gn = class extends pn {
            constructor(e) {
                (super(),
                    (this._value = e),
                    (this.done = !0),
                    (this.durationProgress = 0),
                    Ge.num(this._value) && (this.lastPosition = this._value));
            }
            static create(e) {
                return new gn(e);
            }
            getPayload() {
                return [this];
            }
            getValue() {
                return this._value;
            }
            setValue(e, t) {
                return (
                    Ge.num(e) &&
                        ((this.lastPosition = e),
                        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                    this._value !== e && ((this._value = e), !0)
                );
            }
            reset() {
                const { done: e } = this;
                ((this.done = !1),
                    Ge.num(this._value) &&
                        ((this.elapsedTime = 0),
                        (this.durationProgress = 0),
                        (this.lastPosition = this._value),
                        e && (this.lastVelocity = null),
                        (this.v0 = null)));
            }
        },
        _n = class extends gn {
            constructor(e) {
                (super(0), (this._string = null), (this._toString = It({ output: [e, e] })));
            }
            static create(e) {
                return new _n(e);
            }
            getValue() {
                const e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }
            setValue(e) {
                if (Ge.str(e)) {
                    if (e == this._string) return !1;
                    ((this._string = e), (this._value = 1));
                } else {
                    if (!super.setValue(e)) return !1;
                    this._string = null;
                }
                return !0;
            }
            reset(e) {
                (e && (this._toString = It({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
            }
        },
        bn = { dependencies: null },
        vn = class extends pn {
            constructor(e) {
                (super(), (this.source = e), this.setValue(e));
            }
            getValue(e) {
                const t = {};
                return (
                    Qe(this.source, (n, s) => {
                        var r;
                        (r = n) && r[dn] === r ? (t[s] = n.getValue(e)) : jt(n) ? (t[s] = Mt(n)) : e || (t[s] = n);
                    }),
                    t
                );
            }
            setValue(e) {
                ((this.source = e), (this.payload = this._makePayload(e)));
            }
            reset() {
                this.payload && He(this.payload, (e) => e.reset());
            }
            _makePayload(e) {
                if (e) {
                    const t = new Set();
                    return (Qe(e, this._addToPayload, t), Array.from(t));
                }
            }
            _addToPayload(e) {
                bn.dependencies && jt(e) && bn.dependencies.add(e);
                const t = fn(e);
                t && He(t, (e) => this.add(e));
            }
        },
        yn = class extends vn {
            constructor(e) {
                super(e);
            }
            static create(e) {
                return new yn(e);
            }
            getValue() {
                return this.source.map((e) => e.getValue());
            }
            setValue(e) {
                const t = this.getPayload();
                return e.length == t.length
                    ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                    : (super.setValue(e.map(wn)), !0);
            }
        };
    function wn(e) {
        return (sn(e) ? _n : gn).create(e);
    }
    function xn(e) {
        const t = mn(e);
        return t ? t.constructor : Ge.arr(e) ? yn : sn(e) ? _n : gn;
    }
    var Rn = (e, t) => {
            const n = !Ge.fun(e) || (e.prototype && e.prototype.isReactComponent);
            return s.forwardRef((r, o) => {
                const i = s.useRef(null),
                    a =
                        n &&
                        s.useCallback(
                            (e) => {
                                i.current = (function (e, t) {
                                    e && (Ge.fun(e) ? e(t) : (e.current = t));
                                    return t;
                                })(o, e);
                            },
                            [o],
                        ),
                    [l, u] = (function (e, t) {
                        const n = new Set();
                        ((bn.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                        return ((e = new vn(e)), (bn.dependencies = null), [e, n]);
                    })(r, t),
                    c = an(),
                    d = () => {
                        const e = i.current;
                        if (n && !e) return;
                        !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && c();
                    },
                    h = new En(d, u),
                    f = s.useRef();
                (rn(
                    () => (
                        (f.current = h),
                        He(u, (e) => $t(e, h)),
                        () => {
                            f.current && (He(f.current.deps, (e) => Ut(e, f.current)), Ee.cancel(f.current.update));
                        }
                    ),
                ),
                    s.useEffect(d, []),
                    ln(() => () => {
                        const e = f.current;
                        He(e.deps, (t) => Ut(t, e));
                    }));
                const p = t.getComponentProps(l.getValue());
                return m.createElement(e, { ...p, ref: a });
            });
        },
        En = class {
            constructor(e, t) {
                ((this.update = e), (this.deps = t));
            }
            eventObserved(e) {
                'change' == e.type && Ee.write(this.update);
            }
        };
    var Pn = Symbol.for('AnimatedComponent'),
        Sn = (e) => (Ge.str(e) ? e : e && Ge.str(e.displayName) ? e.displayName : (Ge.fun(e) && e.name) || null);
    function kn(e, ...t) {
        return Ge.fun(e) ? e(...t) : e;
    }
    var Tn = (e, t) => !0 === e || !!(t && e && (Ge.fun(e) ? e(t) : We(e).includes(t))),
        Nn = (e, t) => (Ge.obj(e) ? t && e[t] : e),
        An = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
        In = (e) => e,
        Cn = (e, t = In) => {
            let n = On;
            e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
            const s = {};
            for (const r of n) {
                const n = t(e[r], r);
                Ge.und(n) || (s[r] = n);
            }
            return s;
        },
        On = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
        jn = {
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
    function Mn(e) {
        const t = (function (e) {
            const t = {};
            let n = 0;
            if (
                (Qe(e, (e, s) => {
                    jn[s] || ((t[s] = e), n++);
                }),
                n)
            )
                return t;
        })(e);
        if (t) {
            const n = { to: t };
            return (Qe(e, (e, s) => s in t || (n[s] = e)), n);
        }
        return { ...e };
    }
    function Dn(e) {
        return (
            (e = Mt(e)),
            Ge.arr(e) ? e.map(Dn) : sn(e) ? ze.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
        );
    }
    function Bn(e) {
        for (const t in e) return !0;
        return !1;
    }
    function Ln(e) {
        return Ge.fun(e) || (Ge.arr(e) && Ge.obj(e[0]));
    }
    function Fn(e, t) {
        var n;
        (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
    }
    function $n(e, t) {
        var n;
        t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
    }
    var Un = { tension: 170, friction: 26, mass: 1, damping: 1, easing: (e) => e, clamp: !1 };
    function zn(e, t) {
        if (Ge.und(t.decay)) {
            const n = !Ge.und(t.tension) || !Ge.und(t.friction);
            ((!n && Ge.und(t.frequency) && Ge.und(t.damping) && Ge.und(t.mass)) ||
                ((e.duration = void 0), (e.decay = void 0)),
                n && (e.frequency = void 0));
        } else e.duration = void 0;
    }
    var qn = [];
    function Gn(e, { key: t, props: n, defaultProps: s, state: r, actions: o }) {
        return new Promise((i, a) => {
            let l,
                u,
                c = Tn(n.cancel ?? (null == s ? void 0 : s.cancel), t);
            if (c) h();
            else {
                Ge.und(n.pause) || (r.paused = Tn(n.pause, t));
                let e = null == s ? void 0 : s.pause;
                (!0 !== e && (e = r.paused || Tn(e, t)),
                    (l = kn(n.delay || 0, t)),
                    e ? (r.resumeQueue.add(m), o.pause()) : (o.resume(), m()));
            }
            function d() {
                (r.resumeQueue.add(m), r.timeouts.delete(u), u.cancel(), (l = u.time - Ee.now()));
            }
            function m() {
                l > 0 && !ze.skipAnimation
                    ? ((r.delayed = !0), (u = Ee.setTimeout(h, l)), r.pauseQueue.add(d), r.timeouts.add(u))
                    : h();
            }
            function h() {
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
    var Vn = (e, t) =>
            1 == t.length
                ? t[0]
                : t.some((e) => e.cancelled)
                  ? Wn(e.get())
                  : t.every((e) => e.noop)
                    ? Hn(e.get())
                    : Qn(
                          e.get(),
                          t.every((e) => e.finished),
                      ),
        Hn = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        Qn = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
        Wn = (e) => ({ value: e, cancelled: !0, finished: !1 });
    function Xn(e, t, n, s) {
        const { callId: r, parentId: o, onRest: i } = t,
            { asyncTo: a, promise: l } = n;
        return o || e !== a || t.reset
            ? (n.promise = (async () => {
                  ((n.asyncId = r), (n.asyncTo = e));
                  const u = Cn(t, (e, t) => ('onRest' === t ? void 0 : e));
                  let c, d;
                  const m = new Promise((e, t) => ((c = e), (d = t))),
                      h = (e) => {
                          const t = (r <= (n.cancelId || 0) && Wn(s)) || (r !== n.asyncId && Qn(s, !1));
                          if (t) throw ((e.result = t), d(e), e);
                      },
                      f = (e, t) => {
                          const o = new Zn(),
                              i = new Kn();
                          return (async () => {
                              if (ze.skipAnimation) throw (Yn(n), (i.result = Qn(s, !1)), d(i), i);
                              h(o);
                              const a = Ge.obj(e) ? { ...e } : { ...t, to: e };
                              ((a.parentId = r),
                                  Qe(u, (e, t) => {
                                      Ge.und(a[t]) && (a[t] = e);
                                  }));
                              const l = await s.start(a);
                              return (
                                  h(o),
                                  n.paused &&
                                      (await new Promise((e) => {
                                          n.resumeQueue.add(e);
                                      })),
                                  l
                              );
                          })();
                      };
                  let p;
                  if (ze.skipAnimation) return (Yn(n), Qn(s, !1));
                  try {
                      let t;
                      ((t = Ge.arr(e)
                          ? (async (e) => {
                                for (const t of e) await f(t);
                            })(e)
                          : Promise.resolve(e(f, s.stop.bind(s)))),
                          await Promise.all([t.then(c), m]),
                          (p = Qn(s.get(), !0, !1)));
                  } catch (g) {
                      if (g instanceof Zn) p = g.result;
                      else {
                          if (!(g instanceof Kn)) throw g;
                          p = g.result;
                      }
                  } finally {
                      r == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? a : void 0), (n.promise = o ? l : void 0));
                  }
                  return (
                      Ge.fun(i) &&
                          Ee.batchedUpdates(() => {
                              i(p, s, s.item);
                          }),
                      p
                  );
              })())
            : l;
    }
    function Yn(e, t) {
        (Xe(e.timeouts, (e) => e.cancel()),
            e.pauseQueue.clear(),
            e.resumeQueue.clear(),
            (e.asyncId = e.asyncTo = e.promise = void 0),
            t && (e.cancelId = t));
    }
    var Zn = class extends Error {
            constructor() {
                super(
                    'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
                );
            }
        },
        Kn = class extends Error {
            constructor() {
                super('SkipAnimationSignal');
            }
        },
        Jn = (e) => e instanceof ts,
        es = 1,
        ts = class extends Lt {
            constructor() {
                (super(...arguments), (this.id = es++), (this._priority = 0));
            }
            get priority() {
                return this._priority;
            }
            set priority(e) {
                this._priority != e && ((this._priority = e), this._onPriorityChange(e));
            }
            get() {
                const e = mn(this);
                return e && e.getValue();
            }
            to(...e) {
                return ze.to(this, e);
            }
            interpolate(...e) {
                return (tn(`${Jt}The "interpolate" function is deprecated in v9 (use "to" instead)`), ze.to(this, e));
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
                Bt(this, { type: 'change', parent: this, value: e, idle: t });
            }
            _onPriorityChange(e) {
                (this.idle || lt.sort(this), Bt(this, { type: 'priority', parent: this, priority: e }));
            }
        },
        ns = Symbol.for('SpringPhase'),
        ss = (e) => (1 & e[ns]) > 0,
        rs = (e) => (2 & e[ns]) > 0,
        os = (e) => (4 & e[ns]) > 0,
        is = (e, t) => (t ? (e[ns] |= 3) : (e[ns] &= -3)),
        as = (e, t) => (t ? (e[ns] |= 4) : (e[ns] &= -5)),
        ls = class extends ts {
            constructor(e, t) {
                if (
                    (super(),
                    (this.animation = new (class {
                        constructor() {
                            ((this.changed = !1),
                                (this.values = qn),
                                (this.toValues = null),
                                (this.fromValues = qn),
                                (this.config = new (class {
                                    constructor() {
                                        ((this.velocity = 0), Object.assign(this, Un));
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
                    !Ge.und(e) || !Ge.und(t))
                ) {
                    const n = Ge.obj(e) ? { ...e } : { ...t, from: e };
                    (Ge.und(n.default) && (n.default = !0), this.start(n));
                }
            }
            get idle() {
                return !(rs(this) || this._state.asyncTo) || os(this);
            }
            get goal() {
                return Mt(this.animation.to);
            }
            get velocity() {
                const e = mn(this);
                return e instanceof gn ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
            }
            get hasAnimated() {
                return ss(this);
            }
            get isAnimating() {
                return rs(this);
            }
            get isPaused() {
                return os(this);
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
                    i = fn(s.to);
                (!i && jt(s.to) && (r = We(Mt(s.to))),
                    s.values.forEach((a, l) => {
                        if (a.done) return;
                        const u = a.constructor == _n ? 1 : i ? i[l].lastPosition : r[l];
                        let c = s.immediate,
                            d = u;
                        if (!c) {
                            if (((d = a.lastPosition), o.tension <= 0)) return void (a.done = !0);
                            let t = (a.elapsedTime += e);
                            const n = s.fromValues[l],
                                r = null != a.v0 ? a.v0 : (a.v0 = Ge.arr(o.velocity) ? o.velocity[l] : o.velocity);
                            let i;
                            const m = o.precision || (n == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - n)));
                            if (Ge.und(o.duration))
                                if (o.decay) {
                                    const e = !0 === o.decay ? 0.998 : o.decay,
                                        s = Math.exp(-(1 - e) * t);
                                    ((d = n + (r / (1 - e)) * (1 - s)),
                                        (c = Math.abs(a.lastPosition - d) <= m),
                                        (i = r * s));
                                } else {
                                    i = null == a.lastVelocity ? r : a.lastVelocity;
                                    const t = o.restVelocity || m / 10,
                                        s = o.clamp ? 0 : o.bounce,
                                        l = !Ge.und(s),
                                        h = n == u ? a.v0 > 0 : n < u;
                                    let f,
                                        p = !1;
                                    const g = 1,
                                        _ = Math.ceil(e / g);
                                    for (
                                        let e = 0;
                                        e < _ && ((f = Math.abs(i) > t), f || ((c = Math.abs(u - d) <= m), !c));
                                        ++e
                                    ) {
                                        l && ((p = d == u || d > u == h), p && ((i = -i * s), (d = u)));
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
                const a = mn(this),
                    l = a.getValue();
                if (t) {
                    const e = Mt(s.to);
                    ((l === e && !n) || o.decay
                        ? n && o.decay && this._onChange(l)
                        : (a.setValue(e), this._onChange(e)),
                        this._stop());
                } else n && this._onChange(l);
            }
            set(e) {
                return (
                    Ee.batchedUpdates(() => {
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
                if (rs(this)) {
                    const { to: e, config: t } = this.animation;
                    Ee.batchedUpdates(() => {
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
                    Ge.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Ge.obj(e) ? e : { ...t, to: e }]),
                    Promise.all(n.map((e) => this._update(e))).then((e) => Vn(this, e))
                );
            }
            stop(e) {
                const { to: t } = this.animation;
                return (
                    this._focus(this.get()),
                    Yn(this._state, e && this._lastCallId),
                    Ee.batchedUpdates(() => this._stop(t, e)),
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
                ((n = Ge.obj(n) ? n[t] : n),
                    (null == n || Ln(n)) && (n = void 0),
                    (s = Ge.obj(s) ? s[t] : s),
                    null == s && (s = void 0));
                const r = { to: n, from: s };
                return (
                    ss(this) ||
                        (e.reverse && ([n, s] = [s, n]),
                        (s = Mt(s)),
                        Ge.und(s) ? mn(this) || this._set(n) : this._set(s)),
                    r
                );
            }
            _update({ ...e }, t) {
                const { key: n, defaultProps: s } = this;
                (e.default &&
                    Object.assign(
                        s,
                        Cn(e, (e, t) => (/^on/.test(t) ? Nn(e, n) : e)),
                    ),
                    ps(this, e, 'onProps'),
                    gs(this, 'onProps', e, this));
                const r = this._prepareNode(e);
                if (Object.isFrozen(this))
                    throw Error(
                        'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                    );
                const o = this._state;
                return Gn(++this._lastCallId, {
                    key: n,
                    props: e,
                    defaultProps: s,
                    state: o,
                    actions: {
                        pause: () => {
                            os(this) ||
                                (as(this, !0),
                                Ke(o.pauseQueue),
                                gs(this, 'onPause', Qn(this, us(this, this.animation.to)), this));
                        },
                        resume: () => {
                            os(this) &&
                                (as(this, !1),
                                rs(this) && this._resume(),
                                Ke(o.resumeQueue),
                                gs(this, 'onResume', Qn(this, us(this, this.animation.to)), this));
                        },
                        start: this._merge.bind(this, r),
                    },
                }).then((n) => {
                    if (e.loop && n.finished && (!t || !n.noop)) {
                        const t = cs(e);
                        if (t) return this._update(t, !0);
                    }
                    return n;
                });
            }
            _merge(e, t, n) {
                if (t.cancel) return (this.stop(!0), n(Wn(this)));
                const s = !Ge.und(e.to),
                    r = !Ge.und(e.from);
                if (s || r) {
                    if (!(t.callId > this._lastToId)) return n(Wn(this));
                    this._lastToId = t.callId;
                }
                const { key: o, defaultProps: i, animation: a } = this,
                    { to: l, from: u } = a;
                let { to: c = l, from: d = u } = e;
                (!r || s || (t.default && !Ge.und(c)) || (c = d), t.reverse && ([c, d] = [d, c]));
                const m = !Ve(d, u);
                (m && (a.from = d), (d = Mt(d)));
                const h = !Ve(c, l);
                h && this._focus(c);
                const f = Ln(t.to),
                    { config: p } = a,
                    { decay: g, velocity: _ } = p;
                ((s || r) && (p.velocity = 0),
                    t.config &&
                        !f &&
                        (function (e, t, n) {
                            (n && (zn((n = { ...n }), t), (t = { ...n, ...t })), zn(e, t), Object.assign(e, t));
                            for (const i in Un) null == e[i] && (e[i] = Un[i]);
                            let { frequency: s, damping: r } = e;
                            const { mass: o } = e;
                            Ge.und(s) ||
                                (s < 0.01 && (s = 0.01),
                                r < 0 && (r = 0),
                                (e.tension = Math.pow((2 * Math.PI) / s, 2) * o),
                                (e.friction = (4 * Math.PI * r * o) / s));
                        })(p, kn(t.config, o), t.config !== i.config ? kn(i.config, o) : void 0));
                let b = mn(this);
                if (!b || Ge.und(c)) return n(Qn(this, !0));
                const v = Ge.und(t.reset) ? r && !t.default : !Ge.und(d) && Tn(t.reset, o),
                    y = v ? d : this.get(),
                    w = Dn(c),
                    x = Ge.num(w) || Ge.arr(w) || sn(w),
                    R = !f && (!x || Tn(i.immediate || t.immediate, o));
                if (h) {
                    const e = xn(c);
                    if (e !== b.constructor) {
                        if (!R)
                            throw Error(
                                `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`,
                            );
                        b = this._set(w);
                    }
                }
                const E = b.constructor;
                let P = jt(c),
                    S = !1;
                if (!P) {
                    const e = v || (!ss(this) && m);
                    ((h || e) && ((S = Ve(Dn(y), w)), (P = !S)),
                        ((Ve(a.immediate, R) || R) && Ve(p.decay, g) && Ve(p.velocity, _)) || (P = !0));
                }
                if (
                    (S && rs(this) && (a.changed && !v ? (P = !0) : P || this._stop(l)),
                    !f &&
                        ((P || jt(l)) &&
                            ((a.values = b.getPayload()), (a.toValues = jt(c) ? null : E == _n ? [1] : We(w))),
                        a.immediate != R && ((a.immediate = R), R || v || this._set(l)),
                        P))
                ) {
                    const { onRest: e } = a;
                    He(fs, (e) => ps(this, t, e));
                    const s = Qn(this, us(this, l));
                    (Ke(this._pendingCalls, s),
                        this._pendingCalls.add(n),
                        a.changed &&
                            Ee.batchedUpdates(() => {
                                var t;
                                ((a.changed = !v),
                                    null == e || e(s, this),
                                    v ? kn(i.onRest, s) : null == (t = a.onStart) || t.call(a, s, this));
                            }));
                }
                (v && this._set(y),
                    f
                        ? n(Xn(t.to, t, this._state, this))
                        : P
                          ? this._start()
                          : rs(this) && !h
                            ? this._pendingCalls.add(n)
                            : n(Hn(y)));
            }
            _focus(e) {
                const t = this.animation;
                e !== t.to && (Dt(this) && this._detach(), (t.to = e), Dt(this) && this._attach());
            }
            _attach() {
                let e = 0;
                const { to: t } = this.animation;
                (jt(t) && ($t(t, this), Jn(t) && (e = t.priority + 1)), (this.priority = e));
            }
            _detach() {
                const { to: e } = this.animation;
                jt(e) && Ut(e, this);
            }
            _set(e, t = !0) {
                const n = Mt(e);
                if (!Ge.und(n)) {
                    const e = mn(this);
                    if (!e || !Ve(n, e.getValue())) {
                        const s = xn(n);
                        (e && e.constructor == s ? e.setValue(n) : hn(this, s.create(n)),
                            e &&
                                Ee.batchedUpdates(() => {
                                    this._onChange(n, t);
                                }));
                    }
                }
                return mn(this);
            }
            _onStart() {
                const e = this.animation;
                e.changed || ((e.changed = !0), gs(this, 'onStart', Qn(this, us(this, e.to)), this));
            }
            _onChange(e, t) {
                (t || (this._onStart(), kn(this.animation.onChange, e, this)),
                    kn(this.defaultProps.onChange, e, this),
                    super._onChange(e, t));
            }
            _start() {
                const e = this.animation;
                (mn(this).reset(Mt(e.to)),
                    e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                    rs(this) || (is(this, !0), os(this) || this._resume()));
            }
            _resume() {
                ze.skipAnimation ? this.finish() : lt.start(this);
            }
            _stop(e, t) {
                if (rs(this)) {
                    is(this, !1);
                    const n = this.animation;
                    (He(n.values, (e) => {
                        e.done = !0;
                    }),
                        n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                        Bt(this, { type: 'idle', parent: this }));
                    const s = t ? Wn(this.get()) : Qn(this.get(), us(this, e ?? n.to));
                    (Ke(this._pendingCalls, s), n.changed && ((n.changed = !1), gs(this, 'onRest', s, this)));
                }
            }
        };
    function us(e, t) {
        const n = Dn(t);
        return Ve(Dn(e.get()), n);
    }
    function cs(e, t = e.loop, n = e.to) {
        const s = kn(t);
        if (s) {
            const r = !0 !== s && Mn(s),
                o = (r || e).reverse,
                i = !r || r.reset;
            return ds({
                ...e,
                loop: t,
                default: !1,
                pause: void 0,
                to: !o || Ln(n) ? n : void 0,
                from: i ? e.from : void 0,
                reset: i,
                ...r,
            });
        }
    }
    function ds(e) {
        const { to: t, from: n } = (e = Mn(e)),
            s = new Set();
        return (Ge.obj(t) && hs(t, s), Ge.obj(n) && hs(n, s), (e.keys = s.size ? Array.from(s) : null), e);
    }
    function ms(e) {
        const t = ds(e);
        return (Ge.und(t.default) && (t.default = Cn(t)), t);
    }
    function hs(e, t) {
        Qe(e, (e, n) => null != e && t.add(n));
    }
    var fs = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
    function ps(e, t, n) {
        e.animation[n] = t[n] !== An(t, n) ? Nn(t[n], e.key) : void 0;
    }
    function gs(e, t, ...n) {
        var s, r, o, i;
        (null == (r = (s = e.animation)[t]) || r.call(s, ...n),
            null == (i = (o = e.defaultProps)[t]) || i.call(o, ...n));
    }
    var _s = ['onStart', 'onChange', 'onRest'],
        bs = 1,
        vs = class {
            constructor(e, t) {
                ((this.id = bs++),
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
                    Ge.und(n) || this.springs[t].set(n);
                }
            }
            update(e) {
                return (e && this.queue.push(ds(e)), this);
            }
            start(e) {
                let { queue: t } = this;
                return (
                    e ? (t = We(e).map(ds)) : (this.queue = []),
                    this._flush ? this._flush(this, t) : (Ss(this, t), ys(this, t))
                );
            }
            stop(e, t) {
                if ((e !== !!e && (t = e), t)) {
                    const n = this.springs;
                    He(We(t), (t) => n[t].stop(!!e));
                } else (Yn(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
                return this;
            }
            pause(e) {
                if (Ge.und(e)) this.start({ pause: !0 });
                else {
                    const t = this.springs;
                    He(We(e), (e) => t[e].pause());
                }
                return this;
            }
            resume(e) {
                if (Ge.und(e)) this.start({ pause: !1 });
                else {
                    const t = this.springs;
                    He(We(e), (e) => t[e].resume());
                }
                return this;
            }
            each(e) {
                Qe(this.springs, e);
            }
            _onFrame() {
                const { onStart: e, onChange: t, onRest: n } = this._events,
                    s = this._active.size > 0,
                    r = this._changed.size > 0;
                ((s && !this._started) || (r && !this._started)) &&
                    ((this._started = !0),
                    Xe(e, ([e, t]) => {
                        ((t.value = this.get()), e(t, this, this._item));
                    }));
                const o = !s && this._started,
                    i = r || (o && n.size) ? this.get() : null;
                (r &&
                    t.size &&
                    Xe(t, ([e, t]) => {
                        ((t.value = i), e(t, this, this._item));
                    }),
                    o &&
                        ((this._started = !1),
                        Xe(n, ([e, t]) => {
                            ((t.value = i), e(t, this, this._item));
                        })));
            }
            eventObserved(e) {
                if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
                else {
                    if ('idle' != e.type) return;
                    this._active.delete(e.parent);
                }
                Ee.onFrame(this._onFrame);
            }
        };
    function ys(e, t) {
        return Promise.all(t.map((t) => ws(e, t))).then((t) => Vn(e, t));
    }
    async function ws(e, t, n) {
        const { keys: s, to: r, from: o, loop: i, onRest: a, onResolve: l } = t,
            u = Ge.obj(t.default) && t.default;
        (i && (t.loop = !1), !1 === r && (t.to = null), !1 === o && (t.from = null));
        const c = Ge.arr(r) || Ge.fun(r) ? r : void 0;
        c
            ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
            : He(_s, (n) => {
                  const s = t[n];
                  if (Ge.fun(s)) {
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
            ? ((d.paused = t.pause), Ke(t.pause ? d.pauseQueue : d.resumeQueue))
            : d.paused && (t.pause = !0);
        const m = (s || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
            h = !0 === t.cancel || !0 === An(t, 'cancel');
        ((c || (h && d.asyncId)) &&
            m.push(
                Gn(++e._lastAsyncId, {
                    props: t,
                    state: d,
                    actions: {
                        pause: qe,
                        resume: qe,
                        start(t, n) {
                            h ? (Yn(d, e._lastAsyncId), n(Wn(e))) : ((t.onRest = a), n(Xn(c, t, d, e)));
                        },
                    },
                }),
            ),
            d.paused &&
                (await new Promise((e) => {
                    d.resumeQueue.add(e);
                })));
        const f = Vn(e, await Promise.all(m));
        if (i && f.finished && (!n || !f.noop)) {
            const n = cs(t, i, r);
            if (n) return (Ss(e, [n]), ws(e, n, !0));
        }
        return (l && Ee.batchedUpdates(() => l(f, e, e.item)), f);
    }
    function xs(e, t) {
        const n = { ...e.springs };
        return (
            t &&
                He(We(t), (e) => {
                    (Ge.und(e.keys) && (e = ds(e)), Ge.obj(e.to) || (e = { ...e, to: void 0 }), Ps(n, e, (e) => Es(e)));
                }),
            Rs(e, n),
            n
        );
    }
    function Rs(e, t) {
        Qe(t, (t, n) => {
            e.springs[n] || ((e.springs[n] = t), $t(t, e));
        });
    }
    function Es(e, t) {
        const n = new ls();
        return ((n.key = e), t && $t(n, t), n);
    }
    function Ps(e, t, n) {
        t.keys &&
            He(t.keys, (s) => {
                (e[s] || (e[s] = n(s)))._prepareNode(t);
            });
    }
    function Ss(e, t) {
        He(t, (t) => {
            Ps(e.springs, t, (t) => Es(t, e));
        });
    }
    var ks,
        Ts,
        Ns = ({ children: e, ...t }) => {
            const n = s.useContext(As),
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
            const { Provider: i } = As;
            return m.createElement(i, { value: t }, e);
        },
        As =
            ((ks = Ns),
            (Ts = {}),
            Object.assign(ks, m.createContext(Ts)),
            (ks.Provider._context = ks),
            (ks.Consumer._context = ks),
            ks);
    ((Ns.Provider = As.Provider), (Ns.Consumer = As.Consumer));
    var Is = () => {
        const e = [],
            t = function (t) {
                nn(
                    `${Jt}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
                const s = [];
                return (
                    He(e, (e, r) => {
                        if (Ge.und(t)) s.push(e.start());
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
                return (He(e, (e) => e.pause(...arguments)), this);
            }),
            (t.resume = function () {
                return (He(e, (e) => e.resume(...arguments)), this);
            }),
            (t.set = function (t) {
                He(e, (e, n) => {
                    const s = Ge.fun(t) ? t(n, e) : t;
                    s && e.set(s);
                });
            }),
            (t.start = function (t) {
                const n = [];
                return (
                    He(e, (e, s) => {
                        if (Ge.und(t)) n.push(e.start());
                        else {
                            const r = this._getProps(t, e, s);
                            r && n.push(e.start(r));
                        }
                    }),
                    n
                );
            }),
            (t.stop = function () {
                return (He(e, (e) => e.stop(...arguments)), this);
            }),
            (t.update = function (t) {
                return (He(e, (e, n) => e.update(this._getProps(t, e, n))), this);
            }));
        const n = function (e, t, n) {
            return Ge.fun(e) ? e(n, t) : e;
        };
        return ((t._getProps = n), t);
    };
    function Cs(e, t) {
        const n = Ge.fun(e),
            [[r], o] = (function (e, t, n) {
                const r = Ge.fun(t) && t;
                r && !n && (n = []);
                const o = s.useMemo(() => (r || 3 == arguments.length ? Is() : void 0), []),
                    i = s.useRef(0),
                    a = an(),
                    l = s.useMemo(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(e, t) {
                                const n = xs(e, t);
                                return i.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                    ? ys(e, t)
                                    : new Promise((s) => {
                                          (Rs(e, n),
                                              l.queue.push(() => {
                                                  s(ys(e, t));
                                              }),
                                              a());
                                      });
                            },
                        }),
                        [],
                    ),
                    u = s.useRef([...l.ctrls]),
                    c = [],
                    d = cn(e) || 0;
                function m(e, n) {
                    for (let s = e; s < n; s++) {
                        const e = u.current[s] || (u.current[s] = new vs(null, l.flush)),
                            n = r ? r(s, e) : t[s];
                        n && (c[s] = ms(n));
                    }
                }
                (s.useMemo(() => {
                    (He(u.current.slice(e, d), (e) => {
                        (Fn(e, o), e.stop(!0));
                    }),
                        (u.current.length = e),
                        m(d, e));
                }, [e]),
                    s.useMemo(() => {
                        m(0, Math.min(d, e));
                    }, n));
                const h = u.current.map((e, t) => xs(e, c[t])),
                    f = s.useContext(Ns),
                    p = cn(f),
                    g = f !== p && Bn(f);
                (rn(() => {
                    (i.current++, (l.ctrls = u.current));
                    const { queue: e } = l;
                    (e.length && ((l.queue = []), He(e, (e) => e())),
                        He(u.current, (e, t) => {
                            (null == o || o.add(e), g && e.start({ default: f }));
                            const n = c[t];
                            n && ($n(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                        }));
                }),
                    ln(() => () => {
                        He(l.ctrls, (e) => e.stop(!0));
                    }));
                const _ = h.map((e) => ({ ...e }));
                return o ? [_, o] : _;
            })(1, n ? e : [e], n ? [] : t);
        return n || 2 == arguments.length ? [r, o] : r;
    }
    var Os = () => Is(),
        js = () => s.useState(Os)[0];
    function Ms(e, t, n) {
        const r = Ge.fun(t) && t,
            {
                reset: o,
                sort: i,
                trail: a = 0,
                expires: l = !0,
                exitBeforeEnter: u = !1,
                onDestroyed: c,
                ref: d,
                config: h,
            } = r ? r() : t,
            f = s.useMemo(() => (r || 3 == arguments.length ? Is() : void 0), []),
            p = We(e),
            g = [],
            _ = s.useRef(null),
            b = o ? null : _.current;
        (rn(() => {
            _.current = g;
        }),
            ln(
                () => (
                    He(g, (e) => {
                        (null == f || f.add(e.ctrl), (e.ctrl.ref = f));
                    }),
                    () => {
                        He(_.current, (e) => {
                            (e.expired && clearTimeout(e.expirationId), Fn(e.ctrl, f), e.ctrl.stop(!0));
                        });
                    }
                ),
            ));
        const v = (function (e, { key: t, keys: n = t }, s) {
                if (null === n) {
                    const t = new Set();
                    return e.map((e) => {
                        const n = s && s.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                        return n ? (t.add(n), n.key) : Ds++;
                    });
                }
                return Ge.und(n) ? e : Ge.fun(n) ? e.map(n) : We(n);
            })(p, r ? r() : t, b),
            y = (o && _.current) || [];
        rn(() =>
            He(y, ({ ctrl: e, item: t, key: n }) => {
                (Fn(e, f), kn(c, t, n));
            }),
        );
        const w = [];
        if (
            (b &&
                He(b, (e, t) => {
                    e.expired
                        ? (clearTimeout(e.expirationId), y.push(e))
                        : ~(t = w[t] = v.indexOf(e.key)) && (g[t] = e);
                }),
            He(p, (e, t) => {
                g[t] || ((g[t] = { key: v[t], item: e, phase: 'mount', ctrl: new vs() }), (g[t].ctrl.item = e));
            }),
            w.length)
        ) {
            let e = -1;
            const { leave: n } = r ? r() : t;
            He(w, (t, s) => {
                const r = b[s];
                ~t ? ((e = g.indexOf(r)), (g[e] = { ...r, item: p[t] })) : n && g.splice(++e, 0, r);
            });
        }
        Ge.fun(i) && g.sort((e, t) => i(e.item, t.item));
        let x = -a;
        const R = an(),
            E = Cn(t),
            P = new Map(),
            S = s.useRef(new Map()),
            k = s.useRef(!1);
        He(g, (e, n) => {
            const s = e.key,
                o = e.phase,
                i = r ? r() : t;
            let c, m;
            const f = kn(i.delay || 0, s);
            if ('mount' == o) ((c = i.enter), (m = 'enter'));
            else {
                const e = v.indexOf(s) < 0;
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
            if (((c = kn(c, e.item, n)), (c = Ge.obj(c) ? Mn(c) : { to: c }), !c.config)) {
                const t = h || E.config;
                c.config = kn(t, e.item, n, m);
            }
            x += a;
            const p = { ...E, delay: f + x, ref: d, immediate: i.immediate, reset: !1, ...c };
            if ('enter' == m && Ge.und(p.from)) {
                const s = r ? r() : t,
                    o = Ge.und(s.initial) || b ? s.from : s.initial;
                p.from = kn(o, e.item, n);
            }
            const { onResolve: g } = p;
            p.onResolve = (e) => {
                kn(g, e);
                const t = _.current,
                    n = t.find((e) => e.key === s);
                if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                    const e = t.every((e) => e.ctrl.idle);
                    if ('leave' == n.phase) {
                        const t = kn(l, n.item);
                        if (!1 !== t) {
                            const s = !0 === t ? 0 : t;
                            if (((n.expired = !0), !e && s > 0))
                                return void (s <= 2147483647 && (n.expirationId = setTimeout(R, s)));
                        }
                    }
                    e && t.some((e) => e.expired) && (S.current.delete(n), u && (k.current = !0), R());
                }
            };
            const y = xs(e.ctrl, p);
            'leave' === m && u
                ? S.current.set(e, { phase: m, springs: y, payload: p })
                : P.set(e, { phase: m, springs: y, payload: p });
        });
        const T = s.useContext(Ns),
            N = cn(T),
            A = T !== N && Bn(T);
        (rn(() => {
            A &&
                He(g, (e) => {
                    e.ctrl.start({ default: T });
                });
        }, [T]),
            He(P, (e, t) => {
                if (S.current.size) {
                    const e = g.findIndex((e) => e.key === t.key);
                    g.splice(e, 1);
                }
            }),
            rn(
                () => {
                    He(S.current.size ? S.current : P, ({ phase: e, payload: t }, n) => {
                        const { ctrl: s } = n;
                        ((n.phase = e),
                            null == f || f.add(s),
                            A && 'enter' == e && s.start({ default: T }),
                            t &&
                                ($n(s, t.ref),
                                (!s.ref && !f) || k.current
                                    ? (s.start(t), k.current && (k.current = !1))
                                    : s.update(t)));
                    });
                },
                o ? void 0 : n,
            ));
        const I = (e) =>
            m.createElement(
                m.Fragment,
                null,
                g.map((t, n) => {
                    const { springs: s } = P.get(t) || t.ctrl,
                        r = e({ ...s }, t.item, t, n);
                    return r && r.type
                        ? m.createElement(r.type, {
                              ...r.props,
                              key: Ge.str(t.key) || Ge.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref,
                          })
                        : r;
                }),
            );
        return f ? [I, f] : I;
    }
    var Ds = 1;
    var Bs = class extends ts {
        constructor(e, t) {
            (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = It(...t)));
            const n = this._get(),
                s = xn(n);
            hn(this, s.create(n));
        }
        advance(e) {
            const t = this._get();
            (Ve(t, this.get()) || (mn(this).setValue(t), this._onChange(t, this.idle)),
                !this.idle && Fs(this._active) && $s(this));
        }
        _get() {
            const e = Ge.arr(this.source) ? this.source.map(Mt) : We(Mt(this.source));
            return this.calc(...e);
        }
        _start() {
            this.idle &&
                !Fs(this._active) &&
                ((this.idle = !1),
                He(fn(this), (e) => {
                    e.done = !1;
                }),
                ze.skipAnimation ? (Ee.batchedUpdates(() => this.advance()), $s(this)) : lt.start(this));
        }
        _attach() {
            let e = 1;
            (He(We(this.source), (t) => {
                (jt(t) && $t(t, this), Jn(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
            }),
                (this.priority = e),
                this._start());
        }
        _detach() {
            (He(We(this.source), (e) => {
                jt(e) && Ut(e, this);
            }),
                this._active.clear(),
                $s(this));
        }
        eventObserved(e) {
            'change' == e.type
                ? e.idle
                    ? this.advance()
                    : (this._active.add(e.parent), this._start())
                : 'idle' == e.type
                  ? this._active.delete(e.parent)
                  : 'priority' == e.type &&
                    (this.priority = We(this.source).reduce((e, t) => Math.max(e, (Jn(t) ? t.priority : 0) + 1), 0));
        }
    };
    function Ls(e) {
        return !1 !== e.idle;
    }
    function Fs(e) {
        return !e.size || Array.from(e).every(Ls);
    }
    function $s(e) {
        e.idle ||
            ((e.idle = !0),
            He(fn(e), (e) => {
                e.done = !0;
            }),
            Bt(e, { type: 'idle', parent: e }));
    }
    ze.assign({ createStringInterpolator: Kt, to: (e, t) => new Bs(e, t) });
    var Us = /^--/;
    function zs(e, t) {
        return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : 'number' != typeof t || 0 === t || Us.test(e) || (Gs.hasOwnProperty(e) && Gs[e])
              ? ('' + t).trim()
              : t + 'px';
    }
    var qs = {};
    var Gs = {
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
        Vs = ['Webkit', 'Ms', 'Moz', 'O'];
    Gs = Object.keys(Gs).reduce(
        (e, t) => (Vs.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
        Gs,
    );
    var Hs = /^(matrix|translate|scale|rotate|skew)/,
        Qs = /^(translate)/,
        Ws = /^(rotate|skew)/,
        Xs = (e, t) => (Ge.num(e) && 0 !== e ? e + t : e),
        Ys = (e, t) => (Ge.arr(e) ? e.every((e) => Ys(e, t)) : Ge.num(e) ? e === t : parseFloat(e) === t),
        Zs = class extends vn {
            constructor({ x: e, y: t, z: n, ...s }) {
                const r = [],
                    o = [];
                ((e || t || n) &&
                    (r.push([e || 0, t || 0, n || 0]),
                    o.push((e) => [`translate3d(${e.map((e) => Xs(e, 'px')).join(',')})`, Ys(e, 0)])),
                    Qe(s, (e, t) => {
                        if ('transform' === t) (r.push([e || '']), o.push((e) => [e, '' === e]));
                        else if (Hs.test(t)) {
                            if ((delete s[t], Ge.und(e))) return;
                            const n = Qs.test(t) ? 'px' : Ws.test(t) ? 'deg' : '';
                            (r.push(We(e)),
                                o.push(
                                    'rotate3d' === t
                                        ? ([e, t, s, r]) => [`rotate3d(${e},${t},${s},${Xs(r, n)})`, Ys(r, 0)]
                                        : (e) => [
                                              `${t}(${e.map((e) => Xs(e, n)).join(',')})`,
                                              Ys(e, t.startsWith('scale') ? 1 : 0),
                                          ],
                                ));
                        }
                    }),
                    r.length && (s.transform = new Ks(r, o)),
                    super(s));
            }
        },
        Ks = class extends Lt {
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
                    He(this.inputs, (n, s) => {
                        const r = Mt(n[0]),
                            [o, i] = this.transforms[s](Ge.arr(r) ? r : n.map(Mt));
                        ((e += ' ' + o), (t = t && i));
                    }),
                    t ? 'none' : e
                );
            }
            observerAdded(e) {
                1 == e && He(this.inputs, (e) => He(e, (e) => jt(e) && $t(e, this)));
            }
            observerRemoved(e) {
                0 == e && He(this.inputs, (e) => He(e, (e) => jt(e) && Ut(e, this)));
            }
            eventObserved(e) {
                ('change' == e.type && (this._value = null), Bt(this, e));
            }
        };
    ze.assign({
        batchedUpdates: o.unstable_batchedUpdates,
        createStringInterpolator: Kt,
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
    var Js = ((
            e,
            {
                applyAnimatedValues: t = () => !1,
                createAnimatedStyle: n = (e) => new vn(e),
                getComponentProps: s = (e) => e,
            } = {},
        ) => {
            const r = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: s },
                o = (e) => {
                    const t = Sn(e) || 'Anonymous';
                    return (
                        ((e = Ge.str(e) ? o[e] || (o[e] = Rn(e, r)) : e[Pn] || (e[Pn] = Rn(e, r))).displayName =
                            `Animated(${t})`),
                        e
                    );
                };
            return (
                Qe(e, (t, n) => {
                    (Ge.arr(e) && (n = Sn(t)), (o[n] = o(t)));
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
                                : qs[t] || (qs[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                        );
                    void 0 !== r && (e.textContent = r);
                    for (const d in s)
                        if (s.hasOwnProperty(d)) {
                            const t = zs(d, s[d]);
                            Us.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                        }
                    (c.forEach((t, n) => {
                        e.setAttribute(t, u[n]);
                    }),
                        void 0 !== o && (e.scrollTop = o),
                        void 0 !== i && (e.scrollLeft = i),
                        void 0 !== a && e.setAttribute('viewBox', a));
                },
                createAnimatedStyle: (e) => new Zs(e),
                getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
            },
        ),
        er = Js.animated;
    const tr = [];
    function nr(e) {
        const t = s.useRef(e);
        return (
            s.useLayoutEffect(() => {
                t.current = e;
            }),
            s.useCallback((...e) => (0, t.current)(...e), tr)
        );
    }
    s.createContext(void 0);
    const sr = new WeakMap(),
        rr = 0,
        or = { await: 'await', idle: 'idle', display: 'display' };
    function ir({ resId: e = rr, contentId: t, decoratorId: n, disabled: r, args: o, showDelay: i = 400 }) {
        const a = s.useRef({ status: or.idle, resId: e, timeoutId: 0 }),
            [l, u] = s.useMemo(() => {
                let s = null;
                function l() {
                    r ||
                        ((a.current.status = or.await),
                        window.clearTimeout(a.current.timeoutId),
                        (a.current.timeoutId = window.setTimeout(u, i)));
                }
                function u() {
                    ((a.current.status = or.display), W.tooltip.open(e, t, n, o), s && sr.set(s, d));
                }
                function c() {
                    if (
                        (window.clearTimeout(a.current.timeoutId),
                        a.current.status === or.display && W.tooltip.hide(e, t, n),
                        (a.current.status = or.idle),
                        s)
                    ) {
                        sr.delete(s);
                        let e = s.parentElement;
                        for (; e && !sr.has(e); ) e = e.parentElement;
                        if (e) {
                            sr.get(e).show();
                        }
                        s = null;
                    }
                }
                const d = {
                    hide: c,
                    show: u,
                    rerun: function () {
                        a.current.status !== or.idle && (r ? d.hide() : l());
                    },
                };
                return [
                    d,
                    {
                        onMouseEnter: (e) => {
                            ((s = null == e ? void 0 : e.currentTarget), l());
                        },
                        onMouseLeave: r ? J : c,
                        onClick: r ? J : c,
                    },
                ];
            }, [o, t, n, r, e, i]);
        var c;
        return (
            s.useEffect(() => {
                l.rerun();
            }, [l]),
            (c = nr(l.hide)),
            s.useEffect(() => c, []),
            u
        );
    }
    function ar({ alert: e, body: t, header: n, note: r, hasHtmlContent: o, disabled: i }) {
        const a = h.resolve('views');
        return ir({
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
    const lr = {
        click: ur('play'),
        'hot-key': ur('play'),
        'mouse-enter': ur('highlight'),
        increaseAmount: ur('cons_ammo_single_plus'),
        decreaseAmount: ur('cons_ammo_single_minus'),
        increaseAmountRoll: ur('cons_ammo_roll_plus'),
        decreaseAmountRoll: ur('cons_ammo_roll_minus'),
        close: ur('cancelcloseno'),
        'show-context-menu': ur('tabb'),
        progressSimple: ur('gui_hangar_progressbar_simple'),
        increaseDelta: ur('gui_hangar_progressbar_delta_increase'),
        decreaseDelta: ur('gui_hangar_progressbar_delta_decrease'),
        increaseDeltaMax: ur('gui_hangar_progressbar_delta_max'),
        pointerGrab: ur('gui_hangar_progressbar_pointer_grab'),
        pointerDrag: ur('gui_hangar_progressbar_pointer_drag'),
    };
    function ur(e) {
        return () => {
            $.sound(e);
        };
    }
    const cr = s.createContext(null);
    function dr({ severity: t = 'warn', overrides: n, silent: r = !1, children: o }) {
        const i = s.useMemo(() => ({ ...lr, ...n }), [n]),
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
        return e.jsx(cr.Provider, { value: a, children: o });
    }
    function mr() {
        const e = s.useContext(cr);
        if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
        return e;
    }
    const hr = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
        fr = new Set(['number', 'string', 'boolean', 'bigint']),
        pr = new Set(['Dict']);
    function gr(e, { shallow: t = !0, depth: n = 0, maxDepth: s = 32 } = {}) {
        var r, o;
        const i = e,
            a = typeof e;
        if (n > s) throw new Error(`Too deeply nested to copy. Max is ${s}.`);
        if (hr.has(a)) return i;
        if (null === i) return i;
        const l = { depth: n + 1, maxDepth: s };
        if (Array.isArray(i)) return i.map((e) => gr(e, l));
        if ('object' === a) {
            const s = (null == (r = i.constructor) ? void 0 : r.name) ?? 'UNKNOWN';
            if (Array.isArray(e)) return e.map((e) => gr(e, l));
            if ('CoherentArrayProxy' === s) return e.map((e) => gr(e.value, l));
            if ('Dict' === s) return;
            if ('UNKNOWN' === s) return;
            if (s.includes(':ViewModel:') || 'Object' === s) {
                if (t && 0 === n) {
                    const e = {};
                    for (const t in i) {
                        const n = i[t];
                        fr.has(typeof n) && (e[t] = n);
                    }
                    return e;
                }
                {
                    const e = {};
                    for (const t in i) {
                        const n = i[t],
                            s = (null == (o = null == i ? void 0 : i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                        pr.has(s) || (e[t] = gr(n, l));
                    }
                    return e;
                }
            }
            const a = {};
            for (const e of Object.keys(i)) a[e] = gr(i[e], l);
            return a;
        }
        return (console.error('Incorrect value to clone model', i), i);
    }
    const _r = { deep: !1, equals: te },
        br = { cloneItem: !0 },
        vr = { shallow: !1 };
    class yr {
        constructor(e, t = br) {
            (c(this, '_data'),
                c(this, '_keys'),
                c(
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
                s[t] = n.observable.box(this.takeItem(e, t), _r);
            }
            ((this._keys = n.observable.set(new Set(r))), (this._data = n.observable.box(s, _r)));
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
                    : null !== i && ((s[o] = n.observable.box(i, _r)), this._keys.add(o), this.set(s));
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
            return this.options.cloneItem ? gr(n, vr) : n;
        }
        untrackedData() {
            return n.untracked(() => this._data.get());
        }
    }
    const wr = s.createContext({ mode: 'real' });
    const xr = { equals: te, deep: !1 };
    function Rr(e, t, s) {
        const r = [];
        e.events.subscribersNotified.on(
            n.action(() => {
                for (const e of r) e();
                r.splice(0, r.length);
            }),
        );
        const o = (o, i, a = xr) => {
                const l = n.observable.box(o(s(i)), a);
                return ('real' === t && e.subscribe((e) => r.push(() => l.set(o(e))), i), l);
            },
            i = (n, o) => {
                const i = new yr(s(n), o);
                return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), n), i);
            },
            a = (o, i) => {
                const a = n.observable.box(s(o) ?? i, xr);
                return ('real' === t && e.subscribe((e) => r.push(() => a.set(e)), o), a);
            };
        return {
            dict: i,
            dictRef: (e, t) => i(e, { cloneItem: !1, ...t }),
            arrayClone: (e) => o(gr, e),
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
    const Er = (e) => (t) => {
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
                    return z.onHitTest((t) => {
                        const n = e.getBoundingClientRect();
                        return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                    });
            }, []),
            e.jsx('div', { ...t, ref: Er([n, r]) })
        );
    });
    var Pr = ((e) => (
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
        ))(Pr || {}),
        Sr = ((e) => (
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
        ))(Sr || {}),
        kr = ((e) => (
            (e.MULTI = 'multi'),
            (e.CURRENCY = 'currency'),
            (e.PREMIUM_PLUS = 'premium_plus'),
            (e.NUMBER = 'number'),
            (e.STRING = 'string'),
            e
        ))(kr || {}),
        Tr = ((e) => (
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
        ))(Tr || {}),
        Nr = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(Nr || {}),
        Ar = ((e) => (
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
        ))(Ar || {});
    const Ir = [
            Pr.Items,
            Pr.Equipment,
            Pr.Xp,
            Pr.XpFactor,
            Pr.Blueprints,
            Pr.BlueprintsAny,
            Pr.Goodies,
            Pr.Berths,
            Pr.Slots,
            Pr.Tokens,
            Pr.CrewSkins,
            Pr.CrewBooks,
            Pr.Customizations,
            Pr.CreditsFactor,
            Pr.TankmenXp,
            Pr.TankmenXpFactor,
            Pr.FreeXpFactor,
            Pr.BattleToken,
            Pr.LootBox,
            Pr.PremiumUniversal,
            Pr.NaturalCover,
            Pr.BpCoin,
            Pr.BattlePassSelectToken,
            Pr.BattlaPassFinalAchievement,
            Pr.BattleBadge,
            Pr.BonusX5,
            Pr.CrewBonusX3,
            Pr.EpicSelectToken,
            Pr.Comp7TokenWeeklyReward,
            Pr.DeluxeGift,
            Pr.BattleBoosterGift,
            Pr.OptionalDevice,
        ],
        Cr = [Pr.Gold, Pr.Credits, Pr.Crystal, Pr.FreeXp],
        Or = [Pr.BattlePassPoints, Pr.EquipCoin],
        jr = [Pr.PremiumPlus, Pr.Premium],
        Mr = ['engravings', 'backgrounds'],
        Dr = ['engraving', 'background'],
        Br = (e, t = Sr.Small) => {
            const { name: n, type: s, value: r, icon: o, item: i, dogTagType: a } = e,
                l = t === Sr.S24x24 ? Sr.Small : t,
                u = ((e) => {
                    switch (e) {
                        case Sr.S600x450:
                            return 'c_600x450';
                        case Sr.S400x300:
                            return 'c_400x300';
                        case Sr.S296x222:
                            return 'c_296x222';
                        case Sr.S232x174:
                            return 'c_232x174';
                        case Sr.Big:
                            return 'c_80x80';
                        case Sr.Small:
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
                        const s = Mr[e];
                        if (s) {
                            const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(s),
                                o = r.$dyn(n);
                            return !o && Dr[e] ? `${r.$dyn(Dr[e])}` : `${o}`;
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
        Lr = [Sr.Small, Sr.Big],
        Fr = {
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
        $r = h.resolve('images'),
        Ur = new Map([
            [Sr.S24x24, Sr.Small],
            [Sr.S48x48, Sr.Small],
        ]),
        zr = ({
            name: t,
            image: n,
            isPeriodic: s = !1,
            isFixedBoxSize: r = !0,
            size: o = Sr.Big,
            special: i,
            value: a,
            valueType: l,
            title: u,
            style: c,
            className: d,
            classNames: m,
            tooltipArgs: f,
            periodicIconTooltipArgs: p,
        }) => {
            const g = Ur.has(o) ? Ur.get(o) : o,
                _ = ((e, t) => {
                    if (void 0 === t || !Lr.includes(e)) return null;
                    switch (t) {
                        case Tr.BATTLE_BOOSTER:
                        case Tr.BATTLE_BOOSTER_REPLACE:
                            return Nr.BATTLE_BOOSTER;
                    }
                })(o, i),
                b = ((e) => {
                    if (void 0 === e) return null;
                    switch (e) {
                        case Tr.BATTLE_BOOSTER:
                            return Ar.BATTLE_BOOSTER;
                        case Tr.BATTLE_BOOSTER_REPLACE:
                            return Ar.BATTLE_BOOSTER_REPLACE;
                        case Tr.BUILT_IN_EQUIPMENT:
                            return Ar.BUILT_IN_EQUIPMENT;
                        case Tr.EQUIPMENT_PLUS:
                            return Ar.EQUIPMENT_PLUS;
                        case Tr.EQUIPMENT_TROPHY_BASIC:
                            return Ar.EQUIPMENT_TROPHY_BASIC;
                        case Tr.EQUIPMENT_TROPHY_UPGRADED:
                            return Ar.EQUIPMENT_TROPHY_UPGRADED;
                        case Tr.EQUIPMENT_MODERNIZED_UPGRADED_1:
                            return Ar.EQUIPMENT_MODERNIZED_UPGRADED_1;
                        case Tr.EQUIPMENT_MODERNIZED_UPGRADED_2:
                            return Ar.EQUIPMENT_MODERNIZED_UPGRADED_2;
                        case Tr.EQUIPMENT_MODERNIZED_UPGRADED_3:
                            return Ar.EQUIPMENT_MODERNIZED_UPGRADED_3;
                        case Tr.PROGRESSION_STYLE_UPGRADED_1:
                            return Ar.PROGRESSION_STYLE_UPGRADED_1;
                        case Tr.PROGRESSION_STYLE_UPGRADED_2:
                            return Ar.PROGRESSION_STYLE_UPGRADED_2;
                        case Tr.PROGRESSION_STYLE_UPGRADED_3:
                            return Ar.PROGRESSION_STYLE_UPGRADED_3;
                        case Tr.PROGRESSION_STYLE_UPGRADED_4:
                            return Ar.PROGRESSION_STYLE_UPGRADED_4;
                        case Tr.PROGRESSION_STYLE_UPGRADED_5:
                            return Ar.PROGRESSION_STYLE_UPGRADED_5;
                        case Tr.PROGRESSION_STYLE_UPGRADED_6:
                            return Ar.PROGRESSION_STYLE_UPGRADED_6;
                    }
                })(i),
                v = ((e, t) => {
                    const n = h.resolve('intl');
                    if (void 0 === e) return null;
                    switch (t) {
                        case kr.MULTI: {
                            const t = Number(e);
                            return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                        }
                        case kr.CURRENCY:
                        case kr.NUMBER:
                            return n.formatNumber(n.numberFormats[0] || 'integral', Number(e));
                        case kr.PREMIUM_PLUS: {
                            const t = Number(e);
                            return isNaN(t) ? e : null;
                        }
                        default:
                            return e;
                    }
                })(a, l),
                y = ir({
                    contentId: (null == f ? void 0 : f.contentId) ?? 0,
                    args: null == f ? void 0 : f.args,
                    resId: null == f ? void 0 : f.resId,
                    decoratorId: null == f ? void 0 : f.decoratorId,
                }),
                w = ar({ header: null == p ? void 0 : p.header, body: null == p ? void 0 : p.body });
            return e.jsxs('div', {
                className: I(Fr.base, Fr[`base__${o}`], !r && Fr.base__dynamicBox, d),
                style: c,
                ...y,
                children: [
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs('div', {
                                className: I(
                                    Fr.image,
                                    r ? Fr.image__fixedBox : Fr[`image__${o}`],
                                    null == m ? void 0 : m.image,
                                ),
                                children: [
                                    _ &&
                                        e.jsx('div', {
                                            className: I(Fr.highlight, null == m ? void 0 : m.highlight),
                                            style: {
                                                backgroundImage: `url(${$r.readOrEmpty(`quests.bonuses.${g}.${_}_highlight`)})`,
                                            },
                                        }),
                                    n &&
                                        e.jsx('div', {
                                            className: I(Fr.icon, null == m ? void 0 : m.rewardIcon),
                                            style: { backgroundImage: `url(${n})` },
                                        }),
                                    b &&
                                        e.jsx('div', {
                                            className: I(Fr.overlay, null == m ? void 0 : m.overlay),
                                            style: {
                                                backgroundImage: `url(${$r.readOrEmpty(`quests.bonuses.${g}.${b}_overlay`)})`,
                                            },
                                        }),
                                ],
                            }),
                            v &&
                                e.jsx('div', {
                                    className: I(
                                        Fr.info,
                                        Fr[`info__${t}`],
                                        l === kr.MULTI && Fr.info__multi,
                                        null == m ? void 0 : m.info,
                                    ),
                                    children: v,
                                }),
                            u && e.jsx('div', { className: Fr.title, children: u }),
                        ],
                    }),
                    s && e.jsx('div', { className: I(Fr.timer, null == m ? void 0 : m.periodicIcon), ...w }),
                ],
            });
        },
        qr = { Text: 1, Tag: 2, Var: 3 };
    function Gr(e, t) {
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
                        s[s.length - 1].node.children.push({ type: qr.Text, value: r });
                    } else n.push({ type: qr.Text, value: r });
                    r = '';
                }
                ((o = !0), (l += t.start.length - 1));
            } else if (u === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                ((o = !1), (l += t.end.length - 1));
                const e = i.trim();
                if (e.startsWith('@')) {
                    const t = e.slice(1).trim(),
                        r = { type: qr.Tag, attrs: t.split('|'), instanceId: ++a, children: [] };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(r);
                    } else n.push(r);
                    s.push({ node: r, startIndex: n.length });
                } else if ('/' === e) s.length > 0 && s.pop();
                else {
                    const t = { type: qr.Var, instanceId: ++a, name: e };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(t);
                    } else n.push(t);
                }
                i = '';
            } else o ? (i += u) : (r += u);
        }
        if (r)
            if (s.length) {
                s[s.length - 1].node.children.push({ type: qr.Text, value: r });
            } else n.push({ type: qr.Text, value: r });
        return n;
    }
    const Vr = {
            COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
            base: 'FormatText_db904f12',
            base__fullSize: 'FormatText_base__fullSize_a514958e',
            nowrap: 'FormatText_nowrap_ff69eca3',
        },
        Hr = new Set((null == (l = Vr.COLORS) ? void 0 : l.split(', ')) ?? []);
    let Qr = 0;
    function Wr() {
        return ++Qr;
    }
    const Xr =
        /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
    function Yr(t) {
        const n = h.resolve('langCode');
        return (function (e, t, n) {
            return pe.has(t) ? e.map(n) : e.map((e, t, s) => (t === s.length - 1 ? n(e, t, s) : n(`${e} `, t, s)));
        })(
            (function (e, t) {
                return (he[t] ?? fe)(e);
            })(t, n),
            n,
            (t, n) => t && e.jsx('span', { children: t }, `${t}${n}`),
        );
    }
    function Zr(t) {
        return Array.isArray(t)
            ? (function (t) {
                  const n = [];
                  for (let r = 0; r < t.length; r++) {
                      const o = t[r],
                          i = t[r + 1];
                      if ('string' != typeof i || !Xr.test(i)) {
                          n.push(Zr(o));
                          continue;
                      }
                      const a = Yr(i.slice(1));
                      (n.push(
                          e.jsxs(
                              s.Fragment,
                              { children: [e.jsxs('span', { className: Vr.nowrap, children: [Zr(o), i[0]] }), a] },
                              Wr(),
                          ),
                      ),
                          (r += 1));
                  }
                  return n;
              })(t)
            : 'string' == typeof t
              ? e.jsx(s.Fragment, { children: Yr(t) }, Wr())
              : t;
    }
    const Kr = {
        class: function (t, ...n) {
            return e.jsx(
                'span',
                { className: n.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: t },
                Wr(),
            );
        },
        colorLegacy: function (t, n) {
            const s = Wr();
            return Hr.has(String(n))
                ? e.jsx('span', { className: `FormatText_colorLegacy__${n}`, children: t }, s)
                : e.jsx('span', { style: { color: `#${n}` }, children: t }, s);
        },
        bold: (e) => ['fontWeight', 'bold'],
        split: Zr,
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
                Wr(),
            );
        },
        color: (e, t) => ['color', t],
        fontSize: (e, t) => ['fontSize', t],
        fontWeight: (e, t) => ['fontWeight', t],
        textDecoration: (e, t) => ['textDecoration', t],
    };
    function Jr(e, t, n, s) {
        const r = n.map((t) => {
                if ('string' != typeof t) return t;
                const n = t.trim();
                if (n.startsWith('(') && n.endsWith(')')) {
                    const [t, ...r] = n.slice(1, -1).split(' ');
                    return t ? Jr(e, t, r, s) : e;
                }
                return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
            }),
            o = s[t];
        return o ? o(e, ...r) : (console.error(`Function ${t} is not registered`), e);
    }
    function eo(e, t, n) {
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
            return s ? Jr(e, s, r, n) : e;
        }, t);
    }
    function to(e) {
        return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
    }
    function no(e, t) {
        for (let n = 0; n < e.length; n++) {
            if ('$' === e[n]) {
                let s = n + 1;
                for (; s < e.length && !to(e[s]); ) s++;
                const r = e.slice(n + 1, s),
                    o = t[r];
                if (o) return no(e.replace(`$${r}`, String(o)), t);
            }
        }
        return e;
    }
    function so(e, t) {
        const n = [];
        for (let s = 0; s < e.length; s++) n[s] = no(e[s], t);
        return n;
    }
    const ro = ['number', 'string', 'undefined'];
    function oo(t, n, r = {}, o = !0) {
        o && (Qr = 0);
        const i = [];
        function a(e) {
            if (ro.includes(typeof e)) {
                const t = i.at(-1);
                if ('string' == typeof t) return void (i[i.length - 1] = t + e);
            }
            i.push(e);
        }
        for (const l of t)
            if (l.type === qr.Text) a(l.value);
            else if (l.type === qr.Var)
                null === r[l.name] || ro.includes(typeof r[l.name])
                    ? a(r[l.name] ?? `{{${l.name}}}`)
                    : i.push(e.jsx(s.Fragment, { children: r[l.name] }, `var-${l.name}-${l.instanceId}`));
            else if (l.type === qr.Tag) {
                const e = oo(l.children, n, r, !1),
                    t = eo(so(l.attrs, r), e, n);
                i.push(t);
            }
        return i;
    }
    function io(e) {
        return e
            .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
            .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
    }
    function ao(e) {
        return e
            .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
            .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
    }
    function lo(e) {
        return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
    }
    function uo(e) {
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
        })(e, lo, io, ao);
    }
    const co = { start: '{{', end: '}}' },
        mo = s.memo(function (t) {
            const {
                    brackets: n = co,
                    text: r,
                    params: o,
                    upgradeLegacy: i,
                    fullSize: a,
                    inline: l,
                    formatters: u,
                    split: c,
                    ...d
                } = t,
                m = s.useMemo(() => (t.upgradeLegacy ? uo(t.text) : t.text), [t.text, t.upgradeLegacy]),
                h = s.useMemo(() => (t.formatters ? { ...Kr, ...t.formatters } : Kr), [t.formatters]),
                f = s.useMemo(() => Gr(c ? `{{@ split}}${m}{{/}}` : m, n), [n, m, c]),
                p = s.useMemo(() => oo(f, h, t.params), [f, h, t.params]),
                g = I(Vr.base, a && Vr.base__fullSize, d.className);
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
    function ho({ path: t, ...n }) {
        return e.jsx(mo, { text: h.resolve('strings').readOrEmpty(t), ...n });
    }
    const fo = Object.fromEntries(Object.entries(Kr).map(([e]) => [e, (e) => e]));
    const po = 'RewardsList_b956755b',
        go = 'RewardsList_base__vertical_59db3c9f',
        _o = 'RewardsList_reward_fc200613',
        bo = 'RewardsList_reward__vertical_5f09c6e0',
        vo = 'RewardsList_boxRewardClassName_882c908d',
        yo = { [Sr.S24x24]: Sr.Small, [Sr.S48x48]: Sr.Small },
        wo = s.memo(function ({
            data: t,
            isFixedBoxSize: n,
            size: s = Sr.Big,
            isVertical: r = !1,
            count: o,
            classMix: i,
            rewardItemClassMix: a,
            boxRewardTooltip: l,
            boxRewardValue: u,
            boxRewardClassName: c,
            boxRewardClassNames: d,
        }) {
            const m = h.resolve('strings'),
                f = h.resolve('images'),
                p =
                    'number' == typeof o && o < t.length
                        ? `${f.readOrEmpty(`quests.bonuses.${yo[s] ?? s}.default`)}`
                        : void 0,
                g =
                    u ||
                    (function (e, t = {}) {
                        const n = Gr(e, co);
                        return String(oo(n, fo, t));
                    })(uo(m.readOrEmpty('tooltips.quests.awards.additional.bottom')), { count: t.length - (o || 0) });
            return e.jsx('div', {
                className: I(po, r && go, i),
                children:
                    void 0 !== p
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  t
                                      .slice(0, o)
                                      .map((t, o) =>
                                          e.jsx(
                                              'div',
                                              {
                                                  className: I(_o, r && bo, a),
                                                  children: e.jsx(zr, { size: s, isFixedBoxSize: n, ...t }),
                                              },
                                              o,
                                          ),
                                      ),
                                  e.jsx('div', {
                                      className: I(_o, r && bo, a),
                                      children: e.jsx(zr, {
                                          name: 'more',
                                          isFixedBoxSize: n,
                                          image: p,
                                          size: s,
                                          value: g,
                                          tooltipArgs: l,
                                          className: I(vo, c),
                                          classNames: d,
                                      }),
                                  }),
                              ],
                          })
                        : t.map((t, o) =>
                              e.jsx(
                                  'div',
                                  {
                                      className: I(_o, r && bo, a),
                                      children: e.jsx(zr, { size: s, isFixedBoxSize: n, ...t }),
                                  },
                                  o,
                              ),
                          ),
            });
        });
    function xo({ bonuses: t, size: n, resId: r, boxRewardTooltipArgs: o, maxRewardsCount: i, questId: a, ...l }) {
        const u = s.useMemo(
                () =>
                    ae(t, (e) => {
                        return {
                            size: n,
                            name: e.name,
                            image: Br(e, n),
                            value: e.value,
                            valueType:
                                ((o = e.name),
                                Ir.includes(o)
                                    ? kr.MULTI
                                    : Cr.includes(o)
                                      ? kr.CURRENCY
                                      : Or.includes(o)
                                        ? kr.NUMBER
                                        : jr.includes(o)
                                          ? kr.PREMIUM_PLUS
                                          : kr.STRING),
                            tooltipArgs: {
                                ...((t = { tooltipId: a ? `${a}:${e.tooltipId}` : e.tooltipId }),
                                (s =
                                    Number(e.tooltipContentId) ||
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    )),
                                { args: t, contentId: s }),
                                resId: r,
                            },
                        };
                        var t, s, o;
                    }),
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
        return e.jsx(wo, { ...l, data: u, count: c, boxRewardTooltip: d, size: n });
    }
    const Ro = 'AnimatedRewards_glowContainer_82630782',
        Eo = 'AnimatedRewards_c981a355',
        Po = 'AnimatedRewards_rewardsWrapper_11b576b3',
        So = 'AnimatedRewards_glow_3a2cd010',
        ko = 'AnimatedRewards_glowImage_4ecce597',
        To = C.cubicBezier(0.33, 0, 0.67, 1),
        No = C.cubicBezier(0.23, 0, 0.57, 1),
        Ao = s.forwardRef(function (
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
            const d = js(),
                [m] = Cs(() => ({
                    ref: t,
                    from: { opacity: 0, scale: 0.6 },
                    to: async (e) => {
                        (await e({ opacity: 1, scale: 0.8, config: { duration: 330, easing: To } }),
                            d.start(),
                            await e({ opacity: 0, scale: 1, config: { duration: 330, easing: To } }));
                    },
                })),
                [h] = Cs(() => ({
                    ref: d,
                    immediate: n,
                    from: { opacity: 1 },
                    to: { opacity: 0.4, config: { duration: 330, easing: No } },
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
                    className: I(Eo, a),
                    children: [
                        e.jsx(er.div, {
                            style: h,
                            className: I(Po, null == l ? void 0 : l.rewardsWrapper),
                            children: e.jsx(xo, { ...u, maxRewardsCount: r, bonuses: o, boxRewardTooltipArgs: i }),
                        }),
                        e.jsx('div', {
                            className: I(Ro, null == l ? void 0 : l.glowContainer),
                            children: ce(r ? Math.min(r, o.length) : o.length, (t) =>
                                e.jsx(
                                    er.div,
                                    {
                                        style: m,
                                        className: So,
                                        children: e.jsx(
                                            ye,
                                            { path: 'post_battle.progression.reward_glow', className: ko },
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
        Io = 'CompletedMark_fc4eee08',
        Co = 'CompletedMark_glow_33775180',
        Oo = C.cubicBezier(1, 0, 0.95, 1),
        jo = C.cubicBezier(0.45, 0, 0.52, 1),
        Mo = s.forwardRef(function (
            {
                target: t,
                animationRef: n,
                className: o,
                path: i,
                width: a,
                height: l,
                glow: u,
                springProps: c,
                style: d,
                classNames: m,
                onGlowRest: h,
                ...f
            },
            p,
        ) {
            const g = s.useRef(c),
                _ = mr(),
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
                [v, y] = Cs(() => ({ from: { opacity: 0 } })),
                [w] = Cs(() => {
                    var e, s;
                    return {
                        ref: n,
                        from: { maskSize: '0% 100%', opacity: 0 },
                        to: [
                            {
                                maskSize: '40% 80%',
                                opacity: 0.5,
                                config: { duration: 100, easing: Oo },
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
                                config: { duration: 100, easing: Oo },
                                immediate: null == (s = g.current) ? void 0 : s.immediate,
                            },
                        ],
                        onRest: () => {
                            y.start({
                                to: [
                                    { opacity: 0.6, config: { duration: 160, easing: jo } },
                                    { opacity: 0, config: { duration: 160, easing: jo } },
                                ],
                                onRest: h,
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
                    className: I(Io, o),
                    children: [
                        e.jsx(er.div, {
                            style: v,
                            className: I(Co, null == m ? void 0 : m.glow),
                            children: e.jsx(ye, {
                                width: (null == u ? void 0 : u.width) ?? b.glow.width,
                                height: (null == u ? void 0 : u.height) ?? b.glow.height,
                                path: (null == u ? void 0 : u.path) ?? b.glow.path,
                            }),
                        }),
                        e.jsx(er.div, {
                            ...f,
                            style: { ...w, ...d },
                            ref: p,
                            className: null == m ? void 0 : m.icon,
                            children: e.jsx(ye, {
                                width: a ?? b.icon.width,
                                height: l ?? b.icon.height,
                                path: i ?? b.icon.path,
                            }),
                        }),
                    ],
                })
            );
        }),
        Do = s.forwardRef(function ({ path: t, width: n, height: s, ...o }, i) {
            const a = r.useAdaptive(
                { size: 24, path: 'post_battle.progression.done_24x24' },
                { large: { size: 32, path: 'post_battle.progression.done_32x32' } },
            );
            return e.jsx(ye, { ...o, ref: i, width: n ?? a.size, height: s ?? a.size, path: t ?? a.path });
        });
    function Bo(e) {
        var t,
            n,
            s = '';
        if ('string' == typeof e || 'number' == typeof e) s += e;
        else if ('object' == typeof e)
            if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Bo(e[t])) && (s && (s += ' '), (s += n));
            else for (t in e) e[t] && (s && (s += ' '), (s += t));
        return s;
    }
    const Lo = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
        Fo = function () {
            for (var e, t, n = 0, s = ''; n < arguments.length; )
                (e = arguments[n++]) && (t = Bo(e)) && (s && (s += ' '), (s += t));
            return s;
        },
        $o = (e, t) => (n) => {
            var s;
            if (null == (null == t ? void 0 : t.variants))
                return Fo(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: r, defaultVariants: o } = t,
                i = Object.keys(r).map((e) => {
                    const t = null == n ? void 0 : n[e],
                        s = null == o ? void 0 : o[e];
                    if (null === t) return null;
                    const i = Lo(t) || Lo(s);
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
            return Fo(e, i, l, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        };
    function Uo(t, n, r) {
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
                r = $o(e.className, e.cva),
                o = e.element,
                i = s.forwardRef(function (e, t) {
                    return s.createElement(o, { ...('function' == typeof o ? e : zo(a, e)), ref: t, className: r(e) });
                });
            return ((i.displayName = t), e.cva && (i.cva = e.cva), i);
        }
        const l = $o(n, r),
            u = s.forwardRef(function (n, s) {
                return e.jsx('div', { 'data-name': t, ...zo(a, n), ref: s, className: l(n) });
            });
        return ((u.displayName = t), u);
    }
    function zo(e, t) {
        if (0 === e.length) return t;
        const n = { ...t };
        for (const s of e) delete n[s];
        return n;
    }
    const qo = { base: 'AnimatedValue_d9f4b2f0', animatedValue: 'AnimatedValue_animatedValue_4c490d83' },
        Go = C.cubicBezier(0.33, 0, 0.25, 1),
        Vo = 330,
        Ho = 330;
    function Qo(e) {
        return {
            enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
            leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
        };
    }
    function Wo({ value: t, transition: n, children: r, className: o, classNames: i }) {
        const a = s.useMemo(ge, []),
            l = Ms(t, {
                ...n,
                initial: { opacity: 1, y: '0rem', ...(null == n ? void 0 : n.initial) },
                from: { opacity: 0, y: '-5rem', ...(null == n ? void 0 : n.from) },
                enter: () => ({
                    opacity: 1,
                    y: '0rem',
                    delay: Ho,
                    config: { easing: Go, duration: Vo },
                    onStart: () => {
                        const { enterElements: e, leftElements: t } = Qo(a);
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
                    config: { easing: Go, duration: Vo },
                    onStart: () => {
                        let e = 0;
                        const { enterElements: t, leftElements: n } = Qo(a);
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
            className: I(qo.base, o),
            children: l((n, s) => {
                const o = 0 === n.opacity.get() && !1 === n.opacity.isAnimating;
                return e.jsx(er.div, {
                    className: I(
                        qo.animatedValue,
                        `js-animated-value-${a}-${t === s ? 'enter' : 'leave'}`,
                        null == i ? void 0 : i.animatedValue,
                    ),
                    style: { ...n, position: o ? 'absolute' : 'relative' },
                    children: r(s),
                });
            }),
        });
    }
    const Xo = 'ProgressStats_label_6e975df0',
        Yo = 'ProgressStats_receivedInBattle_d3abd2fe',
        Zo = Uo('ProgressStatsLabel', Xo),
        Ko = s.forwardRef(({ className: t, text: n, transitionProps: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                className: I(Xo, t),
                ref: o,
                children: e.jsx(Wo, { value: n, transition: s, children: ee }),
            }),
        ),
        Jo = s.forwardRef(({ value: t, className: n, total: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                ref: o,
                className: I(Yo, n),
                children: e.jsx(ho, {
                    path: s ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    params: { value: t },
                }),
            }),
        ),
        ei = s.forwardRef(({ value: t, className: n, total: r, transition: o, target: i, ...a }, l) => {
            const u = mr(),
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
                    className: I(Yo, n),
                    children: e.jsx(Wo, {
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
                        children: (t) => e.jsx(ho, { path: t.textPath, params: { value: t.value } }),
                    }),
                })
            );
        }),
        ti = Uo('ProgressStats');
    ((ti.Label = Zo), (ti.ReceivedValue = Jo), (ti.AnimatedReceivedValue = ei), (ti.AnimatedLabel = Ko));
    const ni = 'TruncateText_dcb41d92',
        si = s.forwardRef(function ({ text: t, tooltipParams: n, className: r, ...o }, i) {
            const a = ar({ header: null == n ? void 0 : n.header, body: (null == n ? void 0 : n.body) || t }),
                l = s.useRef(null),
                [u, c] = s.useState(!1);
            const d = s.useCallback(() => {
                if (l.current) {
                    const { scrollWidth: e, offsetWidth: t } = l.current;
                    c(e > t);
                }
            }, []);
            var m, h;
            return (
                s.useEffect(() => {
                    u || a.onMouseLeave();
                }, [u, a]),
                (m = d),
                (h = [d]),
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
                }, h),
                (function (e, t) {
                    s.useEffect(() => {
                        let t = () => {};
                        const n = () => {
                            (t(), (t = le(e)));
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
                    const r = nr((e) => {
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
                    className: I(ni, r),
                    ...(u ? a : {}),
                    children: t,
                })
            );
        }),
        ri = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
        oi = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
        ii = Uo('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
        ai = s.forwardRef(function (
            { children: t, onClick: n, onMouseEnter: s, soundTarget: r, disabled: o = !1, silent: i = !1, ...a },
            l,
        ) {
            const u = mr();
            return e.jsx(ii, {
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
        li = {
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
        ui = s.forwardRef(function (
            {
                children: t,
                size: n = oi.large,
                theme: s = ri.primary,
                disabled: r = !1,
                silent: o = !1,
                autoAlignContent: i = !0,
                classNames: a,
                className: l,
                ...u
            },
            c,
        ) {
            return e.jsxs(ai, {
                ...u,
                ref: c,
                silent: o,
                disabled: r,
                className: I(
                    li.base,
                    li[`base__size-${n}`],
                    li[`base__theme-${s}`],
                    r ? li.base__disabled : li.base__enabled,
                    l,
                    null == a ? void 0 : a.base,
                ),
                onClick: function (e) {
                    var t;
                    r || null == (t = u.onClick) || t.call(u, e);
                },
                children: [
                    e.jsx('div', { className: I(li.background, null == a ? void 0 : a.background) }),
                    e.jsx('div', { className: I(li.border, null == a ? void 0 : a.border) }),
                    e.jsx('div', { className: I(li.overlay, null == a ? void 0 : a.overlay) }),
                    e.jsx('div', {
                        className: I(li.content, i && li.content__fontAligned, null == a ? void 0 : a.content),
                        children: t,
                    }),
                ],
            });
        });
    ((ui.themes = ri), (ui.sizes = oi));
    const ci = 'Action_6c7b0c76',
        di = 'Action_icon_7d5aed3b',
        mi = s.forwardRef(function ({ className: t, theme: n = ui.themes.secondary, tooltipParams: s, ...r }, o) {
            const i = ar({
                alert: null == s ? void 0 : s.alert,
                header: null == s ? void 0 : s.header,
                body: null == s ? void 0 : s.body,
                note: null == s ? void 0 : s.note,
            });
            return e.jsx(ui, {
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
                className: I(ci, t),
                children: e.jsx(ye, { width: 10, height: 20, path: 'post_battle.progression.arrow', className: di }),
            });
        }),
        hi = 'Header_background_91826dd5',
        fi = 'Header_mask_afb9c38d',
        pi = 'Header_border_c6b1d37f',
        gi = Uo('CardHeader', 'Header_1c2ee301'),
        _i = s.forwardRef(function ({ classNames: t, className: n, ...s }, r) {
            return e.jsxs(gi, {
                ...s,
                className: I(null == t ? void 0 : t.base, n),
                ref: r,
                children: [
                    e.jsx('div', { className: I(hi, null == t ? void 0 : t.background) }),
                    e.jsx('div', { className: I(fi, null == t ? void 0 : t.mask) }),
                    e.jsx('div', { className: I(pi, null == t ? void 0 : t.border) }),
                    s.children,
                ],
            });
        }),
        bi = Uo('CardTitle', 'Title_e5ecf295'),
        vi = s.forwardRef(function (t, n) {
            return e.jsx(bi, { ...t, ref: n, children: t.children });
        }),
        yi = 'Card_content_f7ddaa4a',
        wi = Uo('Card', 'Card_3f55e450'),
        xi = Uo('CardContent', yi),
        Ri = s.forwardRef(function (t, n) {
            return e.jsx(wi, { ...t, ref: n, children: t.children });
        });
    ((Ri.Header = _i), (Ri.Content = xi), (Ri.Action = mi), (Ri.Title = vi));
    const Ei = {
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
        return e.jsx(ho, {
            path: Si({ withLabel: s, withoutLimit: r }),
            className: I(Ei.base, o),
            params: {
                completed: Pi.formatNumber('integral', t),
                total: Pi.formatNumber('integral', n),
                totalClass: I(Ei.total, null == i ? void 0 : i.total),
                labelClass: s && I(Ei.label, null == i ? void 0 : i.label),
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
        const u = mr(),
            c = s.useRef({ transitionCurrent: a, transitionTotal: l });
        return (
            s.useEffect(() => {
                c.current = { transitionCurrent: a, transitionTotal: l };
            }, [a, l]),
            e.jsx(ho, {
                path: 'battle_results.progression.completedPointsFrom.' + (r ? 'withLabel' : 'withoutLabel'),
                className: I(Ei.base, o),
                params: {
                    completed: e.jsx(Wo, {
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
                        children: ee,
                    }),
                    total: e.jsx(Wo, {
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
                        children: ee,
                    }),
                    totalClass: I(Ei.total, null == i ? void 0 : i.total),
                    labelClass: r && I(Ei.label, null == i ? void 0 : i.label),
                    dividerClass: Ei.divider,
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
    function Ai({
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
        var m, h, f;
        return e.jsxs(Ri, {
            className: I(Ni.card, s && Ni.card__disabled, u),
            ...d,
            children: [
                e.jsxs(Ri.Header, {
                    onClick: o,
                    className: I(Ni.cardHeader, null == (m = null == c ? void 0 : c.header) ? void 0 : m.base),
                    classNames: {
                        ...(null == c ? void 0 : c.header),
                        background: I(
                            Ni.cardHeaderBackground,
                            null == (h = null == c ? void 0 : c.header) ? void 0 : h.background,
                        ),
                        border: I(Ni.cardHeaderBorder, null == (f = null == c ? void 0 : c.header) ? void 0 : f.border),
                    },
                    children: [
                        e.jsxs('div', {
                            className: I(Ni.head, null == c ? void 0 : c.head),
                            children: [
                                e.jsxs('div', {
                                    className: Ni.titleContainer,
                                    children: [
                                        void 0 !== n && e.jsx(ye, { ...n }),
                                        e.jsx(Ri.Title, {
                                            className: I(Ni.title, null == c ? void 0 : c.title),
                                            children: e.jsx(si, { text: t }),
                                        }),
                                    ],
                                }),
                                void 0 !== i &&
                                    e.jsx(Ri.Action, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), i(e));
                                        },
                                        className: I(Ni.action, null == c ? void 0 : c.action),
                                        tooltipParams: r,
                                    }),
                            ],
                        }),
                        e.jsx('div', {
                            className: I(Ni.tail, null == c ? void 0 : c.tail),
                            children: void 0 !== l && e.jsx(ki, { ...l }),
                        }),
                    ],
                }),
                void 0 !== a &&
                    e.jsx(Ri.Content, { className: I(Ni.content, null == c ? void 0 : c.content), children: a }),
                e.jsx('div', { className: Ni.divider }),
            ],
        });
    }
    const Ii = {
        showCheckMark: { 'mission-progress:checkmark': 'umg_hub_quest_complete' },
        numbersShown: {
            'mission-progress:received-value': 'gui_pbs_missions_progress_stats',
            'mission-progress:progress-stats': 'gui_pbs_missions_progress_stats',
        },
    };
    var Ci = ((e) => (
        (e.OPERATION_MISSION_PROGRESS = 'operation_mission_progress'),
        (e.OPERATION_MISSION_COMPLETE = 'operation_mission_complete'),
        (e.OPERATION_COMPLETED_WITH_HONOR = 'operation_completed_with_honor'),
        (e.CAMPAIGN_COMPLETED_WITH_HONOR = 'campaign_completed_with_honor'),
        e
    ))(Ci || {});
    const [Oi, ji] = (
            (t = 'DataLayerProvider') =>
            (n, r, o) => {
                const i = s.createContext(null);
                function a(a) {
                    var l;
                    const { mode: u, options: c, children: d, mocks: m } = a,
                        h = s.useContext(wr),
                        f = u ?? h.mode,
                        p = m ?? h.mocks,
                        g = s.useRef([]),
                        _ = null == (l = null == o ? void 0 : o.useRequires) ? void 0 : l.call(o),
                        b = nr((e, s, i) => {
                            var l;
                            const u =
                                    'real' !== e && i
                                        ? (function (e, t) {
                                              return {
                                                  subscribe: () => 0,
                                                  readSafeByPath: e,
                                                  readByPath: e,
                                                  createCallback: (n, s) => {
                                                      const r = e(K(s, t));
                                                      return (...e) => {
                                                          r(n(...e));
                                                      };
                                                  },
                                                  createCallbackNoArgs: (n) => {
                                                      const s = e(K(n, t));
                                                      return () => {
                                                          s();
                                                      };
                                                  },
                                                  dispose: () => {},
                                                  unsubscribe: () => {},
                                                  events: { subscribersNotified: new X() },
                                              };
                                          })(i.getter, s)
                                        : Z(s, { name: t }),
                                c = (t) => ('mocks' === e ? (null == i ? void 0 : i.getter(t, s)) : u.readByPath(t)),
                                d = (e) => g.current.push(e),
                                m = 'initial' in a && {
                                    initial:
                                        null == (l = null == o ? void 0 : o.initial) ? void 0 : l.call(o, a.initial),
                                },
                                h = n({
                                    ...m,
                                    mode: e,
                                    readByPath: c,
                                    requires: _,
                                    externalModel: u,
                                    observableModel: Rr(u, e, c),
                                    cleanup: d,
                                }),
                                f = { ...m, mode: e, model: h, externalModel: u, cleanup: d, requires: _ },
                                p = 'mocks' === e && (null == i ? void 0 : i.controls) ? i.controls(f) : {};
                            return {
                                model: h,
                                controls: { ...(null == r ? void 0 : r(f)), ...p },
                                externalModel: u,
                                mode: e,
                            };
                        }),
                        v = s.useRef(!1),
                        [y, w] = s.useState(f);
                    s.useEffect(() => {
                        w(f);
                    }, [f]);
                    const [x, R] = s.useState(() => b(y, c, p));
                    return (
                        s.useEffect(() => {
                            v.current ? R(b(y, c, p)) : (v.current = !0);
                        }, [
                            b,
                            p,
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
        )()(
            ({ observableModel: e }) => ({
                root: e.object(),
                bonuses: e.arrayClone('rewards'),
                quests: e.arrayClone('quests'),
                ...e.primitives(['navigationEnabled']),
            }),
            ({ externalModel: e }) => ({ navigate: e.createCallbackNoArgs('onNavigate') }),
        ),
        Mi = s.createContext(null),
        Di = () => {
            const e = s.useContext(Mi);
            return (ue(null !== e, 'Context for pm3 animations does not exist'), e);
        },
        Bi = a.observer(function (t) {
            const { model: n } = ji(),
                { currentProgress: r, maxProgress: o } = n.root.get(),
                [i, a] = s.useState('idle'),
                l = js(),
                u = js(),
                c = js(),
                d = js(),
                m = s.useCallback(
                    (e) =>
                        t.immediateAnimation
                            ? { currentProgress: r }
                            : 'idle' === e
                              ? { currentProgress: r - 1 }
                              : { currentProgress: r },
                    [r, t.immediateAnimation],
                );
            (s.useEffect(() => {
                t.animating && 'idle' === i && a(o > 1 ? 'progress' : 'labelCheckmark');
            }, [i, o, t.animating, t.immediateAnimation]),
                s.useEffect(() => {
                    if (t.immediateAnimation) return (u.start(), l.start(), void d.start());
                    switch (i) {
                        case 'progress':
                            (c.start(), d.start());
                            break;
                        case 'labelCheckmark':
                            u.start();
                            break;
                        case 'rewards':
                            l.start();
                    }
                }, [i, c, u, d, l, t.immediateAnimation]));
            const h = s.useMemo(
                () => ({
                    rewardsRef: l,
                    immediateAnimation: t.immediateAnimation,
                    labelCheckmarkRef: u,
                    counterRef: c,
                    progressCheckmarkRef: d,
                    getValuesByAnimationState: m,
                    animationState: i,
                    setAnimationState: a,
                }),
                [i, c, m, u, d, l, t.immediateAnimation],
            );
            return e.jsx(Mi.Provider, { value: h, children: t.children });
        });
    var Li = ((e) => ((e.ASSAULT = 'assault'), (e.SNIPER = 'sniper'), (e.SUPPORT = 'support'), e))(Li || {});
    const Fi = {
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
        $i = { ...Fi, name: 'equipCoin', label: 'Боны', value: '1000' },
        Ui = { ...Fi, name: 'freeXP', label: 'Свободный опыт', value: '1000' },
        zi = { ...Fi, name: 'credits', label: 'Кредиты', value: '400000' },
        qi = [{ ...Fi, name: 'xpFactor', label: 'Коэффициент боевого опыта', value: '3.0' }, zi, Ui, $i],
        Gi = {
            currentProgress: 2,
            maxProgress: 2,
            missionName: 'Vanguard: 1',
            missionCategory: Li.ASSAULT,
            quests: [
                {
                    id: '1',
                    questType: '',
                    summary: '',
                    questCondition: 'Cause 6 000 HP of damege to enemy light tanks.',
                },
                {
                    id: '2',
                    questType: '',
                    summary: '',
                    questCondition: 'Be the top player on your team by total damage blocked by armor.',
                },
            ],
            allQuestsRequired: !1,
            rewards: qi,
            onNavigate: J,
        },
        Vi = {
            getter:
                ((Hi = Gi),
                (e, t) => {
                    const n = K(e, t);
                    return n
                        ? (function (e, t) {
                              const n = e.split('.');
                              let s = t;
                              for (const r of n) s = null == s ? void 0 : s[r];
                              return s;
                          })(n, Hi)
                        : Hi;
                }),
        };
    var Hi;
    const Qi = 'Divider_793b04c9',
        Wi = 'Divider_dots_756ce4a5',
        Xi = 'Divider_dots__bottom_edc64468',
        Yi = 'Divider_text_e360a496';
    function Zi({ className: t }) {
        return e.jsxs('div', {
            className: I(Qi, t),
            children: [
                e.jsx('div', { className: Wi }),
                e.jsx(ho, { className: Yi, path: 'personal_missions_30.main.mission.mission.quest.separator' }),
                e.jsx('div', { className: I(Wi, Xi) }),
            ],
        });
    }
    function Ki(e) {
        return (
            !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
            (!s.isValidElement(e) && !!Array.isArray(e) && e.every(Ki))
        );
    }
    const Ji = 'MultilineOverflow_8834bd8e',
        ea = 'MultilineOverflow_content_b539970d';
    const ta = s.forwardRef(function (
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
                tooltip: m,
                className: f,
                classNames: p,
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
                let s = J;
                function r() {
                    if (!e) return;
                    (s(),
                        (n.style.visibility = 'hidden'),
                        (n.className = I(ea, e.children[0].className)),
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
                        (s = le(() => {
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
                    new se()
                        .add(() => s())
                        .add(re(window, 'resize', r))
                        .add(o.disconnect.bind(o))
                        .add(n.remove.bind(n)).dispose
                );
            }, [_, t]);
            const w = (function (e) {
                    return !e || Object.values(e).every(Ki);
                })(r),
                x = (function (e, t, n) {
                    return ir({
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
                ref: Er([_, b]),
                className: I(Ji, f, null == p ? void 0 : p.base),
                children: e.jsx(mo, {
                    text: t,
                    brackets: n,
                    params: r,
                    upgradeLegacy: i,
                    split: a,
                    formatters: o,
                    className: null == p ? void 0 : p.text,
                    style: { visibility: 'hidden' },
                }),
            });
        }),
        na = 'Quests_condition_d44c4c49',
        sa = 'Quests_condition__bulleted_f09ce410',
        ra = 'Quests_divider_ba208b45',
        oa = 'Quests_multiline_e471046b',
        ia = a.observer(function () {
            const { model: t } = ji(),
                { allQuestsRequired: n } = t.root.get(),
                s = t.quests.get();
            return e.jsx(e.Fragment, {
                children: ae(s, (t, s) =>
                    e.jsxs(
                        'div',
                        {
                            className: I(na, n && sa),
                            children: [
                                !n && s > 0 && e.jsx(Zi, { className: ra }),
                                e.jsx(ta, { text: t.questCondition, className: oa }),
                            ],
                        },
                        t.id,
                    ),
                ),
            });
        }),
        aa = 'ProgressItem_48f515a5',
        la = 'ProgressItem_checkmark_83f4f907',
        ua = 'ProgressItem_vehicle_f595c8d3',
        ca = 'ProgressItem_checkmarkWrapper_9a78549d',
        da = 'ProgressItem_checkmarkIcon_6c3da2d3',
        ma = a.observer(function ({ index: t, className: n }) {
            const { model: s } = ji(),
                { currentProgress: r, maxProgress: o } = s.root.get(),
                { progressCheckmarkRef: i, immediateAnimation: a, setAnimationState: l, animationState: u } = Di(),
                c = t + 1 <= r,
                d = t + 1 === r;
            return e.jsxs('div', {
                className: I(aa, n),
                children: [
                    e.jsx(ye, {
                        className: ua,
                        path: 'personal_missions_30.common.card.vehicle',
                        width: '64rem',
                        height: '64rem',
                    }),
                    c &&
                        e.jsx('div', {
                            className: ca,
                            children: d
                                ? e.jsx(Mo, {
                                      animationRef: i,
                                      springProps: { immediate: a },
                                      onGlowRest: () => {
                                          l((e) => ('progress' === e && r === o ? 'labelCheckmark' : e));
                                      },
                                      className: la,
                                      classNames: { icon: da },
                                      width: '48rem',
                                      height: '48rem',
                                      path: 'personal_missions_30.plugins.post_battle.tank_checkmark',
                                      glow: {
                                          width: '48rem',
                                          height: '48rem',
                                          path: 'personal_missions_30.plugins.post_battle.tank_checkmark_glow',
                                      },
                                  })
                                : e.jsx(Do, {
                                      className: la,
                                      width: '48rem',
                                      height: '48rem',
                                      path: 'personal_missions_30.plugins.post_battle.tank_checkmark',
                                  }),
                        }),
                ],
            });
        }),
        ha = 'VehiclesProgress_checkmarks_8bab3dda',
        fa = 'VehiclesProgress_progressItem_908bbb7f',
        pa = h.resolve('aliases'),
        ga = h.resolve('views'),
        _a = a.observer(function ({ className: t }) {
            const { model: n } = ji(),
                { currentProgress: s, maxProgress: r } = n.root.get(),
                o = s === r,
                {
                    counterRef: i,
                    animationState: a,
                    immediateAnimation: l,
                    getValuesByAnimationState: u,
                    setAnimationState: c,
                } = Di(),
                d = u(a),
                m = ir({
                    contentId: ga.read((e) => e.mono.personal_missions_30.tooltips.mission_progress_tooltip('resId')),
                    resId: pa.read((e) => e.battle_results.progression.PersonalMissions('resId')),
                });
            return e.jsxs('div', {
                className: t,
                children: [
                    e.jsx(Ti, {
                        withLabel: !0,
                        current: d.currentProgress,
                        total: r,
                        transitionTotal: { immediate: l },
                        transitionCurrent: { ref: i, immediate: l, enter: { onRest: () => o && c('labelCheckmark') } },
                    }),
                    e.jsx('div', {
                        ...m,
                        className: ha,
                        children: ce(r, (t) => e.jsx(ma, { index: t, className: fa }, t)),
                    }),
                ],
            });
        });
    function ba(e) {
        for (let t = 0; t < document.styleSheets.length; t++) {
            const n = document.styleSheets.item(t);
            if (n.ownerNode === e) return n;
        }
    }
    function va(e) {
        for (let t = 0; t < e.cssRules.length; t++) e.deleteRule(t);
    }
    function ya(e) {
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
                let e = ne,
                    t = ne;
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
        const o = new se();
        return (
            n
                ? o.add(
                      re(t, 'load', () => {
                          s.resolve(t);
                      }),
                  )
                : oe(e)
                      .then((e) => e.text())
                      .then((e) => {
                          const n = ba(t);
                          if (!n) throw new Error(`Can't find sheets for ${t}`);
                          (va(n),
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
                    re(t, 'error', (t) => {
                        (console.error(t), s.reject(`Load css failure ${e}`));
                    }),
                )
                .add(() => {
                    !(function (e, t) {
                        const n = ba(t);
                        if (!n) return console.error(`Can't find sheets for ${t.id} (${e}). Clean rules skipped.`);
                        va(n);
                    })(e, t);
                }),
            { promise: s, link: t, cleanup: o.dispose }
        );
    }
    function wa(t) {
        return e.jsx(e.Fragment, { children: t.children });
    }
    function xa(t) {
        return e.jsx(wa, {
            children: e.jsx(dr, {
                overrides: t.soundsOverrides,
                severity: t.soundSeverity,
                silent: t.soundsOff,
                children: t.children,
            }),
        });
    }
    const Ra = 'PersonalMissions_43fb0d20',
        Ea = 'PersonalMissions_missionIcon_2f45e854',
        Pa = 'PersonalMissions_head_31f59d66',
        Sa = 'PersonalMissions_missionInfo_907777c3',
        ka = 'PersonalMissions_base__withProgress_ffb86d3f',
        Ta = 'PersonalMissions_progress_a31d63d',
        Na = 'PersonalMissions_label_17593c5e',
        Aa = 'PersonalMissions_labelCheckmark_e49f4228',
        Ia = 'PersonalMissions_checkmarkIcon_295a1bf5',
        Ca = 'PersonalMissions_rewards_85d872a1',
        Oa = 'PersonalMissions_rewardItem_1414c582',
        ja = 'PersonalMissions_divider_b75cd1e2',
        Ma = 'PersonalMissions_dividerImage_106f58ee',
        Da = 'mission-progress:personal-missions:random-card',
        Ba = h.resolve('strings'),
        La = h.resolve('aliases'),
        Fa = h.resolve('views'),
        $a = { rootId: La.read((e) => e.battle_results.progression.PersonalMissions('resId')) },
        Ua = a.observer(function () {
            const t = mr(),
                { model: n, controls: r } = ji(),
                { currentProgress: o, maxProgress: i, missionName: a, missionCategory: l } = n.root.get(),
                u = n.bonuses.get(),
                c = n.navigationEnabled.get(),
                d = ir({
                    resId: La.read((e) => e.battle_results.progression.PersonalMissions('resId')),
                    contentId: Fa.read((e) => e.mono.personal_missions_30.tooltips.missions_category_tooltip('resId')),
                    args: s.useMemo(() => ({ category: l }), [l]),
                }),
                m = o === i,
                h = i > 1,
                { labelCheckmarkRef: f, rewardsRef: p, setAnimationState: g, immediateAnimation: _ } = Di();
            return e.jsx(Ai, {
                disabled: !1 === c,
                title: a,
                titleImageProps: {
                    path: `personal_missions_30.category.c_24x24.${l}`,
                    width: 24,
                    height: 24,
                    className: Ea,
                    ...d,
                },
                onButtonAction: () => {
                    c && r.navigate();
                },
                onClick: function (e) {
                    c && (r.navigate(), t.play('click', { target: Da, original: e }));
                },
                onMouseEnter: (e) => {
                    c && t.play('mouse-enter', { target: Da, original: e });
                },
                actionTooltipParams: { body: Ba.readOrEmpty('personal_missions_30.plugin.post_battle.openButton') },
                classNames: { head: Pa },
                children: e.jsxs('div', {
                    className: I(Ra, h && ka),
                    children: [
                        e.jsxs('div', {
                            className: Sa,
                            children: [
                                e.jsxs('div', {
                                    className: Ta,
                                    children: [
                                        m &&
                                            e.jsx(Mo, {
                                                animationRef: f,
                                                onGlowRest: () => g('rewards'),
                                                className: Aa,
                                                classNames: { icon: Ia },
                                                springProps: { immediate: _ },
                                            }),
                                        e.jsx(ti.Label, {
                                            className: Na,
                                            children: Ba.readOrEmpty(
                                                'personal_missions_30.plugin.post_battle.condition',
                                            ),
                                        }),
                                        h && e.jsx(_a, {}),
                                    ],
                                }),
                                e.jsx(Ao, {
                                    className: Ca,
                                    animationRef: p,
                                    immediateAnimation: _,
                                    maxRewardsCount: 3,
                                    bonuses: u,
                                    size: Sr.Small,
                                    rewardItemClassMix: Oa,
                                    resId: La.read((e) => e.battle_results.progression.PersonalMissions('resId')),
                                }),
                            ],
                        }),
                        e.jsx(xe, { classNames: { base: ja, image: Ma } }),
                        e.jsx(ia, {}),
                    ],
                }),
            });
        }),
        za = s.memo(function (t) {
            return e.jsx(Oi, {
                mode: 'real',
                mocks: Vi,
                options: $a,
                children: e.jsx(Bi, {
                    animating: t.animation ?? !0,
                    immediateAnimation: t.immediateAnimation,
                    children: e.jsx(xa, {
                        soundsOverrides:
                            ((n = Ii),
                            Object.entries(n).reduce(
                                (e, [t, n]) => (
                                    (e[t] = (e) => {
                                        var s;
                                        e && e.target in n
                                            ? $.sound(n[e.target])
                                            : null == (s = lr[t]) || s.call(lr, e);
                                    }),
                                    e
                                ),
                                {},
                            )),
                        children: e.jsx(Ua, {}),
                    }),
                }),
            });
            var n;
        });
    var qa;
    exports.plugin =
        ((qa = async ({ url: t }) => {
            const n = new se();
            return {
                async init() {
                    const s = ya(
                        `${(function (e, t = '/') {
                            let n = -1;
                            for (let s = 0; s < e.length; s++) {
                                const r = e[s];
                                if ((r === t && (n = s), '.' === r)) return e.slice(0, n);
                            }
                            return e;
                        })(t)}/post_battle.css`,
                    );
                    (n.add(s.cleanup), await s.promise.catch(console.error));
                    const r = Z($a, { name: 'PersonalMissionsProgressDataLayer' }),
                        o = r.readByPath('currentPM3Status');
                    return (
                        r.dispose(),
                        {
                            animated: !0,
                            component: za,
                            notifications:
                                o != Ci.OPERATION_MISSION_PROGRESS
                                    ? [
                                          {
                                              id: ge(),
                                              item: e.jsx(ho, {
                                                  path: 'battle_results.missionsProgress.notificationsTabs.personalMissions.operation_mission_complete',
                                              }),
                                          },
                                      ]
                                    : void 0,
                            categoryOrder: 700,
                            completed: o != Ci.OPERATION_MISSION_PROGRESS,
                        }
                    );
                },
                async destroy() {
                    n.dispose();
                },
            };
        }),
        async (e) => ({ ...(await qa(e)), id: e.id }));
});

export default exports;
