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
})(this, function (e, t, n, r, s, o, i, a) {
    'use strict';
    var l,
        c = Object.defineProperty,
        u = (e, t) => ((t = Symbol[e]) ? t : Symbol.for('Symbol.' + e)),
        d = (e) => {
            throw TypeError(e);
        },
        h = (e, t, n) =>
            ((e, t, n) =>
                t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n))(
                e,
                'symbol' != typeof t ? t + '' : t,
                n,
            );
    function f(e) {
        const t = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
        if (e)
            for (const n in e)
                if ('default' !== n) {
                    const r = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, r.get ? r : { enumerable: !0, get: () => e[n] });
                }
        return ((t.default = e), Object.freeze(t));
    }
    const p = f(r),
        m = t.createContainer();
    function g(e, t) {
        return e && e.length > 0 ? `${e}.${t}` : t;
    }
    function v(e, t) {
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
            return void 0 === s ? ('silent' !== n && v(`Resource not found: ${r}`, n), t()) : s;
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
        C = Object.keys(w);
    const L = { full: _.FullTime, short: _.ShortTime };
    const E = {
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
        realFormats: C,
        formatDateTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(t, e, n);
        },
        dateTimeFormats: _,
        formatTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(t, e, n);
        },
        timeFormats: Object.keys(L),
        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
    };
    function k(e, t, n) {
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
    class F {
        constructor(e = window.R.strings, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, n = 'silent') {
            const r = e.startsWith('R.strings') ? e : g(this.prefix, e),
                s = k(r, void 0, e.startsWith('R.strings') ? window : this.root);
            return void 0 === s ? ('silent' !== n && v(`Resource not found: ${r}`, n), t()) : s;
        }
        readOrEmpty(e, t = 'warn') {
            return this.readOr(e, () => '', t);
        }
        readOrThrow(e) {
            const t = e.startsWith('R.strings') ? e : g(this.prefix, e),
                n = k(t, void 0, e.startsWith('R.strings') ? window : this.root);
            if (void 0 === n) throw new Error(`Resource not found: ${t}`);
            return n;
        }
        plural(e, t) {
            return this.pluralOr(e, t, () => {});
        }
        pluralOr(e, t, n, r = 'silent') {
            const s = e.startsWith('R.strings') ? e : g(this.prefix, e),
                o = k(s, t, e.startsWith('R.strings') ? window : this.root);
            return void 0 === o ? ('silent' !== r && v(`Resource not found: ${s}`, r), n()) : o;
        }
        pluralOrEmpty(e, t, n = 'warn') {
            return this.pluralOr(e, t, () => '', n);
        }
    }
    class j {
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
            return void 0 === s ? ('silent' !== n && v(`Resource not found: ${e}`, n), t()) : s;
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
    m.register({
        strings: t.asFunction(() => new F()).singleton(),
        images: t.asFunction(() => new b(window.R.images.gui.maps.icons)).singleton(),
        atlases: t.asFunction(() => new b(window.R.atlases)).singleton(),
        videos: t.asFunction(() => new j(window.R.videos)).singleton(),
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
                            : v(`Sound not found: ${e}`, 'warn');
                    }
                },
            )
            .singleton(),
        langCode: t.asValue(R.strings.settings.LANGUAGE_CODE()),
        intl: t.asValue(E),
    });
    var M,
        T = { exports: {} };
    /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */ ((M = T),
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
                                var i = t.apply(null, s);
                                i && n.push(i);
                            }
                        } else if ('object' === o) {
                            if (
                                s.toString !== Object.prototype.toString &&
                                !s.toString.toString().includes('[native code]')
                            ) {
                                n.push(s.toString());
                                continue;
                            }
                            for (var a in s) e.call(s, a) && s[a] && n.push(a);
                        }
                    }
                }
                return n.join(' ');
            }
            M.exports ? ((t.default = t), (M.exports = t)) : (window.classNames = t);
        })());
    const V = N(T.exports);
    function A(e) {
        return e.replaceAll('-', '_');
    }
    function $(e) {
        return (t) => (
            engine.on(e, t),
            () => {
                engine.off(e, t);
            }
        );
    }
    function S(e) {
        viewEnv.setTrackMouseOnStage(e);
    }
    const B = { down: $('mousedown'), up: $('mouseup'), move: $('mousemove') };
    function D(e) {
        engine.call('PlaySound', e);
    }
    !(function () {
        const e = { listeners: 0, enabled: !0, initialized: !1 };
        function t() {
            e.enabled && S(!1);
        }
        function n() {
            e.enabled && S(!0);
        }
        function r() {
            e.enabled
                ? e.listeners < 1
                    ? ((e.initialized = !1),
                      document.body.removeEventListener('mouseenter', t),
                      document.body.removeEventListener('mouseleave', n),
                      S(!1))
                    : e.initialized ||
                      ((e.initialized = !0),
                      document.body.addEventListener('mouseenter', t),
                      document.body.addEventListener('mouseleave', n))
                : S(!1);
        }
        ['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const s = `mouse${t}`,
                            o = B[t]((e) => n([e, 'outside']));
                        function i(e) {
                            n([e, 'inside']);
                        }
                        return (
                            window.addEventListener(s, i),
                            r(),
                            () => {
                                (o(), window.removeEventListener(s, i), (e.listeners -= 1), r());
                            }
                        );
                    };
                })(n)),
                t
            ),
            {},
        );
    })();
    const P = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
        I = { ...Object.keys(P).reduce((e, t) => ((e[t] = () => D(P[t])), e), {}), sound: D },
        O = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
        H = {
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
            children: {
                onAdded: $('children.onAdded'),
                onLoaded: $('children.onLoaded'),
                onRemoved: $('children.onRemoved'),
                onAttached: $('children.onAttached'),
                onTextureReady: $('children.onTextureReady'),
                onRequestPosition: $('children.requestPosition'),
            },
        },
        z = 1;
    function Z(e) {
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
    const U = (e) => {
            const t = [];
            for (const [n, r] of Object.entries(e)) {
                const e = Z(r);
                void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
            }
            return t;
        },
        q = (e, t) => {
            const n = 'GFViewEventProxy';
            if (void 0 !== t) {
                const { args: r, ...s } = t;
                return void 0 !== r
                    ? viewEnv.handleViewEvent({ __Type: n, type: e, ...s, arguments: U(r) })
                    : viewEnv.handleViewEvent({ __Type: n, type: e, ...s });
            }
            return viewEnv.handleViewEvent({ __Type: n, type: e });
        },
        W = new Map(),
        X = {
            tooltip: {
                open(e, t, n = 0, r) {
                    (q(z, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                        W.set(`${e}-${t}`, { targetID: e, contentID: t }));
                },
                hide(e, t, n = 0) {
                    (q(z, { contentID: t, decoratorID: n, targetID: e, on: !1 }), W.delete(`${e}-${t}`));
                },
                hideAll() {
                    const e = Array.from(W.values());
                    for (const t of e) this.hide(t.targetID, t.contentID);
                },
            },
        };
    Object.keys(O).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === O[t]), e), {});
    class G {
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
    const K = (e) => (0 === e ? window : window.subViews.get(e));
    function J(
        { initializer: e = !0, rootId: t = 0, getRoot: n = K, context: r = 'model' } = {},
        { name: s = 'DataLayer' } = {},
    ) {
        const o = new Map(),
            i = { subscribersNotified: new G() },
            a = engine.whenReady.then(() => {
                function e(e, t, n) {
                    (n.forEach((n) => {
                        const r = o.get(n);
                        void 0 !== r && r(e, t);
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
                return r.split('.').reduce((e, t) => e[t], e);
            } catch (e) {
                throw new Error(`Failure get root of ${s}. Root id: ${t}. Context: ${r}`);
            }
        }
        const c = (e) => {
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
        function u(e) {
            viewEnv.removeDataChangedCallback(e, t) ? o.delete(e) : console.error("Can't remove callback by id:", e);
        }
        return {
            subscribe: (n, s) => {
                const i = (function (e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                })('string' == typeof s ? `${r}.${s}` : r, t, !0);
                return (o.set(i, n), e && n(c(s), []), i);
            },
            readByPath: c,
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
                const n = c(t);
                return (...t) => {
                    n(e(...t));
                };
            },
            createCallbackNoArgs: (e) => {
                const t = c(e);
                return () => {
                    t();
                };
            },
            dispose: function () {
                if (0 === t || window.subViews.ids().includes(t)) for (const e of o.keys()) u(e);
                a.then((e) => e());
            },
            unsubscribe: u,
            events: i,
        };
    }
    function Q(e, t) {
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
    function Y() {}
    function ee(e) {
        return e;
    }
    function te() {
        return !1;
    }
    function ne() {
        throw new Error('Unreachable absurd brach');
    }
    class re {
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
    function se(e, t, n, r) {
        return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
    }
    ('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
        'symbol' != typeof Symbol.asyncDispose &&
            Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
        (function () {
            if (!self.fetch) {
                ((i.prototype.append = function (e, t) {
                    ((e = s(e)), (t = o(t)));
                    var n = this.map[e];
                    (n || ((n = []), (this.map[e] = n)), n.push(t));
                }),
                    (i.prototype.delete = function (e) {
                        delete this.map[s(e)];
                    }),
                    (i.prototype.get = function (e) {
                        var t = this.map[s(e)];
                        return t ? t[0] : null;
                    }),
                    (i.prototype.getAll = function (e) {
                        return this.map[s(e)] || [];
                    }),
                    (i.prototype.has = function (e) {
                        return this.map.hasOwnProperty(s(e));
                    }),
                    (i.prototype.set = function (e, t) {
                        this.map[s(e)] = [o(t)];
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
                    r = !(
                        'undefined' == typeof window ||
                        !window.ActiveXObject ||
                        (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
                    );
                (u.call(d.prototype),
                    u.call(p.prototype),
                    (self.Headers = i),
                    (self.Request = d),
                    (self.Response = p),
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
                                function i() {
                                    if (4 === o.readyState) {
                                        var e = 1223 === o.status ? 204 : o.status;
                                        if (e < 100 || e > 599) n(new TypeError('Network request failed'));
                                        else {
                                            var r = {
                                                    status: e,
                                                    statusText: o.statusText,
                                                    headers: f(o),
                                                    url:
                                                        'responseURL' in o
                                                            ? o.responseURL
                                                            : /^X-Request-URL:/m.test(o.getAllResponseHeaders())
                                                              ? o.getResponseHeader('X-Request-URL')
                                                              : void 0,
                                                },
                                                s = 'response' in o ? o.response : o.responseText;
                                            t(new p(s, r));
                                        }
                                    }
                                }
                                ('cors' === s.credentials && (o.withCredentials = !0),
                                    (o.onreadystatechange = i),
                                    self.usingActiveXhr ||
                                        ((o.onload = i),
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
            function c(e) {
                var t = new FileReader();
                return (t.readAsArrayBuffer(e), l(t));
            }
            function u() {
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
                              return this.blob().then(c);
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
                    (this.headers = new i(t.headers)),
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
            function f(e) {
                var t = new i();
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
            function p(e, t) {
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
        return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r));
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
        },
        ce = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
        ue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
        de = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    function he(e) {
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
    ['ko', 'no'].includes(m.resolve('langCode'));
    const fe = {
        zh_cn: he,
        zh_sg: he,
        zh_tw: he,
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
    };
    function pe(e) {
        return e.split(' ');
    }
    const me = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko']);
    function ge() {
        return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    }
    function ve(e) {
        for (let t = 0; t < document.styleSheets.length; t++) {
            const n = document.styleSheets.item(t);
            if (n.ownerNode === e) return n;
        }
    }
    function be(e) {
        for (let t = 0; t < e.cssRules.length; t++) e.deleteRule(t);
    }
    function _e(e) {
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
                let e = ne,
                    t = ne;
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
        const o = new re();
        return (
            n
                ? o.add(
                      se(t, 'load', () => {
                          r.resolve(t);
                      }),
                  )
                : oe(e)
                      .then((e) => e.text())
                      .then((e) => {
                          const n = ve(t);
                          if (!n) throw new Error(`Can't find sheets for ${t}`);
                          (be(n),
                              (function (e, t) {
                                  const n = (function (e) {
                                      const t = [];
                                      let n = 0,
                                          r = 0,
                                          s = !1,
                                          o = !1;
                                      for (let i = 0; i < e.length; i++) {
                                          const a = e[i],
                                              l = e[i + 1];
                                          if (o || '/' !== a || '*' !== l) {
                                              if (s && '*' === a && '/' === l) ((s = !1), i++, (n = i + 1));
                                              else if (
                                                  !s &&
                                                  (o || '@' !== a || ((o = !0), (r = 0)),
                                                  '{' === a && r++,
                                                  '}' === a && r--,
                                                  '}' === a && 0 === r)
                                              ) {
                                                  if (o) (t.push(e.substring(n, i + 1)), (o = !1));
                                                  else {
                                                      let r = n;
                                                      for (; '\n' === e[r] || ' ' === e[r]; ) r++;
                                                      t.push(e.substring(r, i + 1));
                                                  }
                                                  n = i + 1;
                                              }
                                          } else ((s = !0), i++);
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
                    se(t, 'error', (t) => {
                        (console.error(t), r.reject(`Load css failure ${e}`));
                    }),
                )
                .add(() => {
                    !(function (e, t) {
                        const n = ve(t);
                        if (!n) return console.error(`Can't find sheets for ${t.id} (${e}). Clean rules skipped.`);
                        be(n);
                    })(e, t);
                }),
            { promise: r, link: t, cleanup: o.dispose }
        );
    }
    const ye = (e) => {
            const t = r.useRef();
            return (
                r.useEffect(() => {
                    t.current = e;
                }, [e]),
                t.current
            );
        },
        we = [];
    function xe(e) {
        const t = r.useRef(e);
        return (
            r.useLayoutEffect(() => {
                t.current = e;
            }),
            r.useCallback((...e) => (0, t.current)(...e), we)
        );
    }
    r.createContext(void 0);
    var Ce = Pe(),
        Le = (e) => $e(e, Ce),
        Ee = Pe();
    Le.write = (e) => $e(e, Ee);
    var ke = Pe();
    Le.onStart = (e) => $e(e, ke);
    var Fe = Pe();
    Le.onFrame = (e) => $e(e, Fe);
    var je = Pe();
    Le.onFinish = (e) => $e(e, je);
    var Ne = [];
    Le.setTimeout = (e, t) => {
        const n = Le.now() + t,
            r = () => {
                const e = Ne.findIndex((e) => e.cancel == r);
                (~e && Ne.splice(e, 1), (Ve -= ~e ? 1 : 0));
            },
            s = { time: n, handler: e, cancel: r };
        return (Ne.splice(Re(n), 0, s), (Ve += 1), Se(), s);
    };
    var Re = (e) => ~(~Ne.findIndex((t) => t.time > e) || ~Ne.length);
    ((Le.cancel = (e) => {
        (ke.delete(e), Fe.delete(e), je.delete(e), Ce.delete(e), Ee.delete(e));
    }),
        (Le.sync = (e) => {
            ((Ae = !0), Le.batchedUpdates(e), (Ae = !1));
        }),
        (Le.throttle = (e) => {
            let t;
            function n() {
                try {
                    e(...t);
                } finally {
                    t = null;
                }
            }
            function r(...e) {
                ((t = e), Le.onStart(n));
            }
            return (
                (r.handler = e),
                (r.cancel = () => {
                    (ke.delete(n), (t = null));
                }),
                r
            );
        }));
    var Me = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
    ((Le.use = (e) => (Me = e)),
        (Le.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
        (Le.batchedUpdates = (e) => e()),
        (Le.catch = console.error),
        (Le.frameLoop = 'always'),
        (Le.advance = () => {
            'demand' !== Le.frameLoop
                ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
                : De();
        }));
    var Te = -1,
        Ve = 0,
        Ae = !1;
    function $e(e, t) {
        Ae ? (t.delete(e), e(0)) : (t.add(e), Se());
    }
    function Se() {
        Te < 0 && ((Te = 0), 'demand' !== Le.frameLoop && Me(Be));
    }
    function Be() {
        ~Te && (Me(Be), Le.batchedUpdates(De));
    }
    function De() {
        const e = Te;
        Te = Le.now();
        const t = Re(Te);
        (t && (Ie(Ne.splice(0, t), (e) => e.handler()), (Ve -= t)),
            Ve
                ? (ke.flush(), Ce.flush(e ? Math.min(64, Te - e) : 16.667), Fe.flush(), Ee.flush(), je.flush())
                : (Te = -1));
    }
    function Pe() {
        let e = new Set(),
            t = e;
        return {
            add(n) {
                ((Ve += t != e || e.has(n) ? 0 : 1), e.add(n));
            },
            delete: (n) => ((Ve -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
            flush(n) {
                t.size && ((e = new Set()), (Ve -= t.size), Ie(t, (t) => t(n) && e.add(t)), (Ve += e.size), (t = e));
            },
        };
    }
    function Ie(e, t) {
        e.forEach((e) => {
            try {
                t(e);
            } catch (n) {
                Le.catch(n);
            }
        });
    }
    var Oe = Object.defineProperty,
        He = {};
    ((e, t) => {
        for (var n in t) Oe(e, n, { get: t[n], enumerable: !0 });
    })(He, {
        assign: () => Ye,
        colors: () => Ke,
        createStringInterpolator: () => qe,
        skipAnimation: () => Je,
        to: () => We,
        willAdvance: () => Qe,
    });
    var ze = {
        arr: Array.isArray,
        obj: (e) => !!e && 'Object' === e.constructor.name,
        fun: (e) => 'function' == typeof e,
        str: (e) => 'string' == typeof e,
        num: (e) => 'number' == typeof e,
        und: (e) => void 0 === e,
    };
    var Ze = (e, t) => e.forEach(t);
    function Ue(e, t, n) {
        if (ze.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
    }
    var qe,
        We,
        Xe = (e) => (ze.und(e) ? [] : ze.arr(e) ? e : [e]),
        Ge = () =>
            'undefined' == typeof window ||
            !window.navigator ||
            /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Ke = null,
        Je = !1,
        Qe = function () {},
        Ye = (e) => {
            (e.to && (We = e.to),
                e.now && (Le.now = e.now),
                void 0 !== e.colors && (Ke = e.colors),
                null != e.skipAnimation && (Je = e.skipAnimation),
                e.createStringInterpolator && (qe = e.createStringInterpolator),
                e.requestAnimationFrame && Le.use(e.requestAnimationFrame),
                e.batchedUpdates && (Le.batchedUpdates = e.batchedUpdates),
                e.willAdvance && (Qe = e.willAdvance),
                e.frameLoop && (Le.frameLoop = e.frameLoop));
        },
        et = new Set(),
        tt = [],
        nt = [],
        rt = 0,
        st = {
            get idle() {
                return !et.size && !tt.length;
            },
            start(e) {
                rt > e.priority ? (et.add(e), Le.onStart(ot)) : (it(e), Le(lt));
            },
            advance: lt,
            sort(e) {
                if (rt) Le.onFrame(() => st.sort(e));
                else {
                    const t = tt.indexOf(e);
                    ~t && (tt.splice(t, 1), at(e));
                }
            },
            clear() {
                ((tt = []), et.clear());
            },
        };
    function ot() {
        (et.forEach(it), et.clear(), Le(lt));
    }
    function it(e) {
        tt.includes(e) || at(e);
    }
    function at(e) {
        tt.splice(
            (function (e, t) {
                const n = e.findIndex(t);
                return n < 0 ? e.length : n;
            })(tt, (t) => t.priority > e.priority),
            0,
            e,
        );
    }
    function lt(e) {
        const t = nt;
        for (let n = 0; n < tt.length; n++) {
            const r = tt[n];
            ((rt = r.priority), r.idle || (Qe(r), r.advance(e), r.idle || t.push(r)));
        }
        return ((rt = 0), ((nt = tt).length = 0), (tt = t).length > 0);
    }
    var ct = '[-+]?\\d*\\.?\\d+',
        ut = ct + '%';
    function dt(...e) {
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var ht = new RegExp('rgb' + dt(ct, ct, ct)),
        ft = new RegExp('rgba' + dt(ct, ct, ct, ct)),
        pt = new RegExp('hsl' + dt(ct, ut, ut)),
        mt = new RegExp('hsla' + dt(ct, ut, ut, ct)),
        gt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        vt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        bt = /^#([0-9a-fA-F]{6})$/,
        _t = /^#([0-9a-fA-F]{8})$/;
    function yt(e, t, n) {
        return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        );
    }
    function wt(e, t, n) {
        const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
            s = 2 * n - r,
            o = yt(s, r, e + 1 / 3),
            i = yt(s, r, e),
            a = yt(s, r, e - 1 / 3);
        return (Math.round(255 * o) << 24) | (Math.round(255 * i) << 16) | (Math.round(255 * a) << 8);
    }
    function xt(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function Ct(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function Lt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function Et(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
    }
    function kt(e) {
        let t = (function (e) {
            let t;
            return 'number' == typeof e
                ? e >>> 0 === e && e >= 0 && e <= 4294967295
                    ? e
                    : null
                : (t = bt.exec(e))
                  ? parseInt(t[1] + 'ff', 16) >>> 0
                  : Ke && void 0 !== Ke[e]
                    ? Ke[e]
                    : (t = ht.exec(e))
                      ? ((xt(t[1]) << 24) | (xt(t[2]) << 16) | (xt(t[3]) << 8) | 255) >>> 0
                      : (t = ft.exec(e))
                        ? ((xt(t[1]) << 24) | (xt(t[2]) << 16) | (xt(t[3]) << 8) | Lt(t[4])) >>> 0
                        : (t = gt.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                          : (t = _t.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = vt.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = pt.exec(e))
                                ? (255 | wt(Ct(t[1]), Et(t[2]), Et(t[3]))) >>> 0
                                : (t = mt.exec(e))
                                  ? (wt(Ct(t[1]), Et(t[2]), Et(t[3])) | Lt(t[4])) >>> 0
                                  : null;
        })(e);
        if (null === t) return e;
        t = t || 0;
        return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
    }
    var Ft = (e, t, n) => {
        if (ze.fun(e)) return e;
        if (ze.arr(e)) return Ft({ range: e, output: t, extrapolate: n });
        if (ze.str(e.output[0])) return qe(e);
        const r = e,
            s = r.output,
            o = r.range || [0, 1],
            i = r.extrapolateLeft || r.extrapolate || 'extend',
            a = r.extrapolateRight || r.extrapolate || 'extend',
            l = r.easing || ((e) => e);
        return (e) => {
            const t = (function (e, t) {
                for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                return n - 1;
            })(e, o);
            return (function (e, t, n, r, s, o, i, a, l) {
                let c = l ? l(e) : e;
                if (c < t) {
                    if ('identity' === i) return c;
                    'clamp' === i && (c = t);
                }
                if (c > n) {
                    if ('identity' === a) return c;
                    'clamp' === a && (c = n);
                }
                if (r === s) return r;
                if (t === n) return e <= t ? r : s;
                t === -1 / 0 ? (c = -c) : n === 1 / 0 ? (c -= t) : (c = (c - t) / (n - t));
                ((c = o(c)), r === -1 / 0 ? (c = -c) : s === 1 / 0 ? (c += r) : (c = c * (s - r) + r));
                return c;
            })(e, o[t], o[t + 1], s[t], s[t + 1], l, i, a, r.map);
        };
    };
    var jt = Symbol.for('FluidValue.get'),
        Nt = Symbol.for('FluidValue.observers'),
        Rt = (e) => Boolean(e && e[jt]),
        Mt = (e) => (e && e[jt] ? e[jt]() : e);
    function Tt(e, t) {
        const n = e[Nt];
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
                At(this, e);
            }
        },
        At = (e, t) => Dt(e, jt, t);
    function $t(e, t) {
        if (e[jt]) {
            let n = e[Nt];
            (n || Dt(e, Nt, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
        }
        return t;
    }
    function St(e, t) {
        const n = e[Nt];
        if (n && n.has(t)) {
            const r = n.size - 1;
            (r ? n.delete(t) : (e[Nt] = null), e.observerRemoved && e.observerRemoved(r, t));
        }
    }
    var Bt,
        Dt = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
        Pt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        It = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Ot = new RegExp(`(${Pt.source})(%|[a-z]+)`, 'i'),
        Ht = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        zt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Zt = (e) => {
            const [t, n] = Ut(e);
            if (!t || Ge()) return e;
            const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
            if (r) return r.trim();
            if (n && n.startsWith('--')) {
                const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
                return t || e;
            }
            return n && zt.test(n) ? Zt(n) : n || e;
        },
        Ut = (e) => {
            const t = zt.exec(e);
            if (!t) return [,];
            const [, n, r] = t;
            return [n, r];
        },
        qt = (e, t, n, r, s) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${s})`,
        Wt = (e) => {
            Bt || (Bt = Ke ? new RegExp(`(${Object.keys(Ke).join('|')})(?!\\w)`, 'g') : /^\b$/);
            const t = e.output.map((e) => Mt(e).replace(zt, Zt).replace(It, kt).replace(Bt, kt)),
                n = t.map((e) => e.match(Pt).map(Number)),
                r = n[0].map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                ),
                s = r.map((t) => Ft({ ...e, output: t }));
            return (e) => {
                var n;
                const r = !Ot.test(t[0]) && (null == (n = t.find((e) => Ot.test(e))) ? void 0 : n.replace(Pt, ''));
                let o = 0;
                return t[0].replace(Pt, () => `${s[o++](e)}${r || ''}`).replace(Ht, qt);
            };
        },
        Xt = 'react-spring: ',
        Gt = (e) => {
            const t = e;
            let n = !1;
            if ('function' != typeof t) throw new TypeError(`${Xt}once requires a function parameter`);
            return (...e) => {
                n || (t(...e), (n = !0));
            };
        },
        Kt = Gt(console.warn);
    function Jt(e) {
        return ze.str(e) && ('#' == e[0] || /\d/.test(e) || (!Ge() && zt.test(e)) || e in (Ke || {}));
    }
    Gt(console.warn);
    var Qt = Ge() ? r.useEffect : r.useLayoutEffect;
    function Yt() {
        const e = r.useState()[1],
            t = (() => {
                const e = r.useRef(!1);
                return (
                    Qt(
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
            })();
        return () => {
            t.current && e(Math.random());
        };
    }
    var en = [],
        tn = Symbol.for('Animated:node'),
        nn = (e) => e && e[tn],
        rn = (e, t) => {
            return (
                (n = e),
                (r = tn),
                (s = t),
                Object.defineProperty(n, r, { value: s, writable: !0, configurable: !0 })
            );
            var n, r, s;
        },
        sn = (e) => e && e[tn] && e[tn].getPayload(),
        on = class {
            constructor() {
                rn(this, this);
            }
            getPayload() {
                return this.payload || [];
            }
        },
        an = class extends on {
            constructor(e) {
                (super(),
                    (this._value = e),
                    (this.done = !0),
                    (this.durationProgress = 0),
                    ze.num(this._value) && (this.lastPosition = this._value));
            }
            static create(e) {
                return new an(e);
            }
            getPayload() {
                return [this];
            }
            getValue() {
                return this._value;
            }
            setValue(e, t) {
                return (
                    ze.num(e) &&
                        ((this.lastPosition = e),
                        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                    this._value !== e && ((this._value = e), !0)
                );
            }
            reset() {
                const { done: e } = this;
                ((this.done = !1),
                    ze.num(this._value) &&
                        ((this.elapsedTime = 0),
                        (this.durationProgress = 0),
                        (this.lastPosition = this._value),
                        e && (this.lastVelocity = null),
                        (this.v0 = null)));
            }
        },
        ln = class extends an {
            constructor(e) {
                (super(0), (this._string = null), (this._toString = Ft({ output: [e, e] })));
            }
            static create(e) {
                return new ln(e);
            }
            getValue() {
                const e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }
            setValue(e) {
                if (ze.str(e)) {
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
        cn = { dependencies: null },
        un = class extends on {
            constructor(e) {
                (super(), (this.source = e), this.setValue(e));
            }
            getValue(e) {
                const t = {};
                return (
                    Ue(this.source, (n, r) => {
                        var s;
                        (s = n) && s[tn] === s ? (t[r] = n.getValue(e)) : Rt(n) ? (t[r] = Mt(n)) : e || (t[r] = n);
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
                    return (Ue(e, this._addToPayload, t), Array.from(t));
                }
            }
            _addToPayload(e) {
                cn.dependencies && Rt(e) && cn.dependencies.add(e);
                const t = sn(e);
                t && Ze(t, (e) => this.add(e));
            }
        },
        dn = class extends un {
            constructor(e) {
                super(e);
            }
            static create(e) {
                return new dn(e);
            }
            getValue() {
                return this.source.map((e) => e.getValue());
            }
            setValue(e) {
                const t = this.getPayload();
                return e.length == t.length
                    ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                    : (super.setValue(e.map(hn)), !0);
            }
        };
    function hn(e) {
        return (Jt(e) ? ln : an).create(e);
    }
    var fn = (e, t) => {
            const n = !ze.fun(e) || (e.prototype && e.prototype.isReactComponent);
            return r.forwardRef((s, o) => {
                const i = r.useRef(null),
                    a =
                        n &&
                        r.useCallback(
                            (e) => {
                                i.current = (function (e, t) {
                                    e && (ze.fun(e) ? e(t) : (e.current = t));
                                    return t;
                                })(o, e);
                            },
                            [o],
                        ),
                    [l, c] = (function (e, t) {
                        const n = new Set();
                        ((cn.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                        return ((e = new un(e)), (cn.dependencies = null), [e, n]);
                    })(s, t),
                    u = Yt(),
                    d = () => {
                        const e = i.current;
                        if (n && !e) return;
                        !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && u();
                    },
                    h = new pn(d, c),
                    f = r.useRef();
                var m;
                (Qt(
                    () => (
                        (f.current = h),
                        Ze(c, (e) => $t(e, h)),
                        () => {
                            f.current && (Ze(f.current.deps, (e) => St(e, f.current)), Le.cancel(f.current.update));
                        }
                    ),
                ),
                    r.useEffect(d, []),
                    (m = () => () => {
                        const e = f.current;
                        Ze(e.deps, (t) => St(t, e));
                    }),
                    r.useEffect(m, en));
                const g = t.getComponentProps(l.getValue());
                return p.createElement(e, { ...g, ref: a });
            });
        },
        pn = class {
            constructor(e, t) {
                ((this.update = e), (this.deps = t));
            }
            eventObserved(e) {
                'change' == e.type && Le.write(this.update);
            }
        };
    var mn,
        gn,
        vn = Symbol.for('AnimatedComponent'),
        bn = (e) => (ze.str(e) ? e : e && ze.str(e.displayName) ? e.displayName : (ze.fun(e) && e.name) || null),
        _n = (e) => e instanceof wn,
        yn = 1,
        wn = class extends Vt {
            constructor() {
                (super(...arguments), (this.id = yn++), (this._priority = 0));
            }
            get priority() {
                return this._priority;
            }
            set priority(e) {
                this._priority != e && ((this._priority = e), this._onPriorityChange(e));
            }
            get() {
                const e = nn(this);
                return e && e.getValue();
            }
            to(...e) {
                return He.to(this, e);
            }
            interpolate(...e) {
                return (Kt(`${Xt}The "interpolate" function is deprecated in v9 (use "to" instead)`), He.to(this, e));
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
                Tt(this, { type: 'change', parent: this, value: e, idle: t });
            }
            _onPriorityChange(e) {
                (this.idle || st.sort(this), Tt(this, { type: 'priority', parent: this, priority: e }));
            }
        },
        xn = ({ children: e, ...t }) => {
            const n = r.useContext(Cn),
                s = t.pause || !!n.pause,
                o = t.immediate || !!n.immediate;
            t = (function (e, t) {
                const [n] = r.useState(() => ({ inputs: t, result: e() })),
                    s = r.useRef(),
                    o = s.current;
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
                    r.useEffect(() => {
                        ((s.current = i), o == n && (n.inputs = n.result = void 0));
                    }, [i]),
                    i.result
                );
            })(() => ({ pause: s, immediate: o }), [s, o]);
            const { Provider: i } = Cn;
            return p.createElement(i, { value: t }, e);
        },
        Cn =
            ((mn = xn),
            (gn = {}),
            Object.assign(mn, p.createContext(gn)),
            (mn.Provider._context = mn),
            (mn.Consumer._context = mn),
            mn);
    ((xn.Provider = Cn.Provider), (xn.Consumer = Cn.Consumer));
    var Ln = class extends wn {
        constructor(e, t) {
            (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Ft(...t)));
            const n = this._get(),
                r = (function (e) {
                    const t = nn(e);
                    return t ? t.constructor : ze.arr(e) ? dn : Jt(e) ? ln : an;
                })(n);
            rn(this, r.create(n));
        }
        advance(e) {
            const t = this._get();
            ((function (e, t) {
                if (ze.arr(e)) {
                    if (!ze.arr(t) || e.length !== t.length) return !1;
                    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                    return !0;
                }
                return e === t;
            })(t, this.get()) || (nn(this).setValue(t), this._onChange(t, this.idle)),
                !this.idle && kn(this._active) && Fn(this));
        }
        _get() {
            const e = ze.arr(this.source) ? this.source.map(Mt) : Xe(Mt(this.source));
            return this.calc(...e);
        }
        _start() {
            this.idle &&
                !kn(this._active) &&
                ((this.idle = !1),
                Ze(sn(this), (e) => {
                    e.done = !1;
                }),
                He.skipAnimation ? (Le.batchedUpdates(() => this.advance()), Fn(this)) : st.start(this));
        }
        _attach() {
            let e = 1;
            (Ze(Xe(this.source), (t) => {
                (Rt(t) && $t(t, this), _n(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
            }),
                (this.priority = e),
                this._start());
        }
        _detach() {
            (Ze(Xe(this.source), (e) => {
                Rt(e) && St(e, this);
            }),
                this._active.clear(),
                Fn(this));
        }
        eventObserved(e) {
            'change' == e.type
                ? e.idle
                    ? this.advance()
                    : (this._active.add(e.parent), this._start())
                : 'idle' == e.type
                  ? this._active.delete(e.parent)
                  : 'priority' == e.type &&
                    (this.priority = Xe(this.source).reduce((e, t) => Math.max(e, (_n(t) ? t.priority : 0) + 1), 0));
        }
    };
    function En(e) {
        return !1 !== e.idle;
    }
    function kn(e) {
        return !e.size || Array.from(e).every(En);
    }
    function Fn(e) {
        e.idle ||
            ((e.idle = !0),
            Ze(sn(e), (e) => {
                e.done = !0;
            }),
            Tt(e, { type: 'idle', parent: e }));
    }
    He.assign({ createStringInterpolator: Wt, to: (e, t) => new Ln(e, t) });
    var jn = /^--/;
    function Nn(e, t) {
        return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : 'number' != typeof t || 0 === t || jn.test(e) || (Mn.hasOwnProperty(e) && Mn[e])
              ? ('' + t).trim()
              : t + 'px';
    }
    var Rn = {};
    var Mn = {
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
        Tn = ['Webkit', 'Ms', 'Moz', 'O'];
    Mn = Object.keys(Mn).reduce(
        (e, t) => (Tn.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
        Mn,
    );
    var Vn = /^(matrix|translate|scale|rotate|skew)/,
        An = /^(translate)/,
        $n = /^(rotate|skew)/,
        Sn = (e, t) => (ze.num(e) && 0 !== e ? e + t : e),
        Bn = (e, t) => (ze.arr(e) ? e.every((e) => Bn(e, t)) : ze.num(e) ? e === t : parseFloat(e) === t),
        Dn = class extends un {
            constructor({ x: e, y: t, z: n, ...r }) {
                const s = [],
                    o = [];
                ((e || t || n) &&
                    (s.push([e || 0, t || 0, n || 0]),
                    o.push((e) => [`translate3d(${e.map((e) => Sn(e, 'px')).join(',')})`, Bn(e, 0)])),
                    Ue(r, (e, t) => {
                        if ('transform' === t) (s.push([e || '']), o.push((e) => [e, '' === e]));
                        else if (Vn.test(t)) {
                            if ((delete r[t], ze.und(e))) return;
                            const n = An.test(t) ? 'px' : $n.test(t) ? 'deg' : '';
                            (s.push(Xe(e)),
                                o.push(
                                    'rotate3d' === t
                                        ? ([e, t, r, s]) => [`rotate3d(${e},${t},${r},${Sn(s, n)})`, Bn(s, 0)]
                                        : (e) => [
                                              `${t}(${e.map((e) => Sn(e, n)).join(',')})`,
                                              Bn(e, t.startsWith('scale') ? 1 : 0),
                                          ],
                                ));
                        }
                    }),
                    s.length && (r.transform = new Pn(s, o)),
                    super(r));
            }
        },
        Pn = class extends Vt {
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
                    Ze(this.inputs, (n, r) => {
                        const s = Mt(n[0]),
                            [o, i] = this.transforms[r](ze.arr(s) ? s : n.map(Mt));
                        ((e += ' ' + o), (t = t && i));
                    }),
                    t ? 'none' : e
                );
            }
            observerAdded(e) {
                1 == e && Ze(this.inputs, (e) => Ze(e, (e) => Rt(e) && $t(e, this)));
            }
            observerRemoved(e) {
                0 == e && Ze(this.inputs, (e) => Ze(e, (e) => Rt(e) && St(e, this)));
            }
            eventObserved(e) {
                ('change' == e.type && (this._value = null), Tt(this, e));
            }
        };
    (He.assign({
        batchedUpdates: s.unstable_batchedUpdates,
        createStringInterpolator: Wt,
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
    }),
        ((
            e,
            {
                applyAnimatedValues: t = () => !1,
                createAnimatedStyle: n = (e) => new un(e),
                getComponentProps: r = (e) => e,
            } = {},
        ) => {
            const s = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
                o = (e) => {
                    const t = bn(e) || 'Anonymous';
                    return (
                        ((e = ze.str(e) ? o[e] || (o[e] = fn(e, s)) : e[vn] || (e[vn] = fn(e, s))).displayName =
                            `Animated(${t})`),
                        e
                    );
                };
            Ue(e, (t, n) => {
                (ze.arr(e) && (n = bn(t)), (o[n] = o(t)));
            });
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
                        { style: r, children: s, scrollTop: o, scrollLeft: i, viewBox: a, ...l } = t,
                        c = Object.values(l),
                        u = Object.keys(l).map((t) =>
                            n || e.hasAttribute(t)
                                ? t
                                : Rn[t] || (Rn[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                        );
                    void 0 !== s && (e.textContent = s);
                    for (const d in r)
                        if (r.hasOwnProperty(d)) {
                            const t = Nn(d, r[d]);
                            jn.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                        }
                    (u.forEach((t, n) => {
                        e.setAttribute(t, c[n]);
                    }),
                        void 0 !== o && (e.scrollTop = o),
                        void 0 !== i && (e.scrollLeft = i),
                        void 0 !== a && e.setAttribute('viewBox', a));
                },
                createAnimatedStyle: (e) => new Dn(e),
                getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
            },
        ));
    const In = new WeakMap(),
        On = 0,
        Hn = { await: 'await', idle: 'idle', display: 'display' };
    function zn({ resId: e = On, contentId: t, decoratorId: n, disabled: s, args: o, showDelay: i = 400 }) {
        const a = r.useRef({ status: Hn.idle, resId: e, timeoutId: 0 }),
            [l, c] = r.useMemo(() => {
                let r = null;
                function l() {
                    s ||
                        ((a.current.status = Hn.await),
                        window.clearTimeout(a.current.timeoutId),
                        (a.current.timeoutId = window.setTimeout(c, i)));
                }
                function c() {
                    ((a.current.status = Hn.display), X.tooltip.open(e, t, n, o), r && In.set(r, d));
                }
                function u() {
                    if (
                        (window.clearTimeout(a.current.timeoutId),
                        a.current.status === Hn.display && X.tooltip.hide(e, t, n),
                        (a.current.status = Hn.idle),
                        r)
                    ) {
                        In.delete(r);
                        let e = r.parentElement;
                        for (; e && !In.has(e); ) e = e.parentElement;
                        if (e) {
                            In.get(e).show();
                        }
                        r = null;
                    }
                }
                const d = {
                    hide: u,
                    show: c,
                    rerun: function () {
                        a.current.status !== Hn.idle && (s ? d.hide() : l());
                    },
                };
                return [
                    d,
                    {
                        onMouseEnter: (e) => {
                            ((r = null == e ? void 0 : e.currentTarget), l());
                        },
                        onMouseLeave: s ? Y : u,
                        onClick: s ? Y : u,
                    },
                ];
            }, [o, t, n, s, e, i]);
        var u;
        return (
            r.useEffect(() => {
                l.rerun();
            }, [l]),
            (u = xe(l.hide)),
            r.useEffect(() => u, []),
            c
        );
    }
    function Zn({ alert: e, body: t, header: n, note: s, hasHtmlContent: o, disabled: i }) {
        const a = m.resolve('views');
        return zn({
            disabled: i,
            contentId: a.read((e) =>
                o
                    ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                    : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
            ),
            decoratorId: a.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
            args: r.useMemo(() => ({ body: t, header: n, note: s, alert: e }), [e, t, n, s]),
        });
    }
    function Un(e) {
        return zn({
            ...e,
            contentId: m
                .resolve('views')
                .read((e) => e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
        });
    }
    const qn = [];
    function Wn(e, t, n) {
        return zn({
            ...n,
            disabled: 'string' != typeof e || (null == n ? void 0 : n.disabled),
            contentId: m.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
            args: r.useMemo(() => ({ type: e, params: JSON.stringify(t), resId: t.resId }), [t, e]),
        });
    }
    const Xn = ['ko', 'no'];
    const Gn = {
        click: Kn('play'),
        'hot-key': Kn('play'),
        'mouse-enter': Kn('highlight'),
        increaseAmount: Kn('cons_ammo_single_plus'),
        decreaseAmount: Kn('cons_ammo_single_minus'),
        increaseAmountRoll: Kn('cons_ammo_roll_plus'),
        decreaseAmountRoll: Kn('cons_ammo_roll_minus'),
        close: Kn('cancelcloseno'),
        'show-context-menu': Kn('tabb'),
        progressSimple: Kn('gui_hangar_progressbar_simple'),
        increaseDelta: Kn('gui_hangar_progressbar_delta_increase'),
        decreaseDelta: Kn('gui_hangar_progressbar_delta_decrease'),
        increaseDeltaMax: Kn('gui_hangar_progressbar_delta_max'),
        pointerGrab: Kn('gui_hangar_progressbar_pointer_grab'),
        pointerDrag: Kn('gui_hangar_progressbar_pointer_drag'),
    };
    function Kn(e) {
        return () => {
            I.sound(e);
        };
    }
    const Jn = r.createContext(null);
    function Qn({ severity: t = 'warn', overrides: n, silent: s = !1, children: o }) {
        const i = r.useMemo(() => ({ ...Gn, ...n }), [n]),
            a = r.useMemo(
                () => ({
                    play: function (e, n) {
                        if (s) return;
                        const r = i[e];
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
                    settings: { plays: i, severity: t, silent: s },
                }),
                [i, t, s],
            );
        return e.jsx(Jn.Provider, { value: a, children: o });
    }
    function Yn() {
        const e = r.useContext(Jn);
        if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
        return e;
    }
    const er = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
        tr = new Set(['number', 'string', 'boolean', 'bigint']),
        nr = new Set(['Dict']);
    function rr(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
        var s, o;
        const i = e,
            a = typeof e;
        if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
        if (er.has(a)) return i;
        if (null === i) return i;
        const l = { depth: n + 1, maxDepth: r };
        if (Array.isArray(i)) return i.map((e) => rr(e, l));
        if ('object' === a) {
            const r = (null == (s = i.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
            if (Array.isArray(e)) return e.map((e) => rr(e, l));
            if ('CoherentArrayProxy' === r) return e.map((e) => rr(e.value, l));
            if ('Dict' === r) return;
            if ('UNKNOWN' === r) return;
            if (r.includes(':ViewModel:') || 'Object' === r) {
                if (t && 0 === n) {
                    const e = {};
                    for (const t in i) {
                        const n = i[t];
                        tr.has(typeof n) && (e[t] = n);
                    }
                    return e;
                }
                {
                    const e = {};
                    for (const t in i) {
                        const n = i[t],
                            r = (null == (o = null == i ? void 0 : i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                        nr.has(r) || (e[t] = rr(n, l));
                    }
                    return e;
                }
            }
            const a = {};
            for (const e of Object.keys(i)) a[e] = rr(i[e], l);
            return a;
        }
        return (console.error('Incorrect value to clone model', i), i);
    }
    const sr = { deep: !1, equals: te },
        or = { cloneItem: !0 },
        ir = { shallow: !1 };
    class ar {
        constructor(e, t = or) {
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
                r[t] = n.observable.box(this.takeItem(e, t), sr);
            }
            ((this._keys = n.observable.set(new Set(s))), (this._data = n.observable.box(r, sr)));
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
                    i = this.takeItem(e, o);
                o in r
                    ? null === i
                        ? (delete r[o], this._keys.delete(o), this.set(r))
                        : r[o].set(i)
                    : null !== i && ((r[o] = n.observable.box(i, sr)), this._keys.add(o), this.set(r));
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
            return this.options.cloneItem ? rr(n, ir) : n;
        }
        untrackedData() {
            return n.untracked(() => this._data.get());
        }
    }
    const lr = r.createContext({ mode: 'real' }),
        cr = { equals: te, deep: !1 };
    function ur(e, t, r) {
        const s = [];
        e.events.subscribersNotified.on(
            n.action(() => {
                for (const e of s) e();
                s.splice(0, s.length);
            }),
        );
        const o = (o, i, a = cr) => {
                const l = n.observable.box(o(r(i)), a);
                return ('real' === t && e.subscribe((e) => s.push(() => l.set(o(e))), i), l);
            },
            i = (n, o) => {
                const i = new ar(r(n), o);
                return ('real' === t && e.subscribe((e, t) => s.push(() => i.update(e, t)), n), i);
            },
            a = (o, i) => {
                const a = n.observable.box(r(o) ?? i, cr);
                return ('real' === t && e.subscribe((e) => s.push(() => a.set(e)), o), a);
            };
        return {
            dict: i,
            dictRef: (e, t) => i(e, { cloneItem: !1, ...t }),
            arrayClone: (e) => o(rr, e),
            array: a,
            object: a,
            transform: o,
            primitives: (o, i) => {
                const a = r(i);
                if (Array.isArray(o)) {
                    const r = o.reduce((e, t) => ((e[t] = n.observable.box(a[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                s.push(() =>
                                    o.forEach((t) => {
                                        r[t].set(e[t]);
                                    }),
                                );
                            }, i),
                        r
                    );
                }
                {
                    const r = o,
                        l = Object.entries(r),
                        c = l.reduce((e, [t, r]) => ((e[r] = n.observable.box(a[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                s.push(() =>
                                    l.forEach(([t, n]) => {
                                        c[n].set(e[t]);
                                    }),
                                );
                            }, i),
                        c
                    );
                }
            },
        };
    }
    const dr = {
            model: (e, t) => o.computedFn(e, { equals: te, ...t }),
            primitive: o.computedFn,
            shallow: (e, t) => o.computedFn(e, { equals: n.comparer.shallow, ...t }),
            structural: (e, t) => o.computedFn(e, { equals: n.comparer.structural, ...t }),
        },
        hr = (e) => (t) => {
            e.forEach((e) =>
                ((e, t) => {
                    e && ('function' == typeof e ? e(t) : (e.current = t));
                })(e, t),
            );
        };
    r.forwardRef(function (t, n) {
        const s = r.useRef(null);
        return (
            r.useEffect(() => {
                const e = s.current;
                if (null !== e)
                    return H.onHitTest((t) => {
                        const n = e.getBoundingClientRect();
                        return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                    });
            }, []),
            e.jsx('div', { ...t, ref: hr([n, s]) })
        );
    });
    const fr = 1,
        pr = 2,
        mr = 3;
    const gr = {
            COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
            base: 'FormatText_db904f12',
            base__fullSize: 'FormatText_base__fullSize_a514958e',
            nowrap: 'FormatText_nowrap_ff69eca3',
        },
        vr = new Set((null == (l = gr.COLORS) ? void 0 : l.split(', ')) ?? []);
    let br = 0;
    function _r() {
        return ++br;
    }
    const yr =
        /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
    function wr(t) {
        const n = m.resolve('langCode');
        return (function (e, t, n) {
            return me.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
        })(
            (function (e, t) {
                return (fe[t] ?? pe)(e);
            })(t, n),
            n,
            (t, n) => t && e.jsx('span', { children: t }, `${t}${n}`),
        );
    }
    function xr(t) {
        return Array.isArray(t)
            ? (function (t) {
                  const n = [];
                  for (let s = 0; s < t.length; s++) {
                      const o = t[s],
                          i = t[s + 1];
                      if ('string' != typeof i || !yr.test(i)) {
                          n.push(xr(o));
                          continue;
                      }
                      const a = wr(i.slice(1));
                      (n.push(
                          e.jsxs(
                              r.Fragment,
                              { children: [e.jsxs('span', { className: gr.nowrap, children: [xr(o), i[0]] }), a] },
                              _r(),
                          ),
                      ),
                          (s += 1));
                  }
                  return n;
              })(t)
            : 'string' == typeof t
              ? e.jsx(r.Fragment, { children: wr(t) }, _r())
              : t;
    }
    const Cr = {
        class: function (t, ...n) {
            return e.jsx(
                'span',
                { className: n.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: t },
                _r(),
            );
        },
        colorLegacy: function (t, n) {
            const r = _r();
            return vr.has(String(n))
                ? e.jsx('span', { className: `FormatText_colorLegacy__${n}`, children: t }, r)
                : e.jsx('span', { style: { color: `#${n}` }, children: t }, r);
        },
        bold: (e) => ['fontWeight', 'bold'],
        split: xr,
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
                _r(),
            );
        },
        color: (e, t) => ['color', t],
        fontSize: (e, t) => ['fontSize', t],
        fontWeight: (e, t) => ['fontWeight', t],
        textDecoration: (e, t) => ['textDecoration', t],
    };
    function Lr(e, t, n, r) {
        const s = n.map((t) => {
                if ('string' != typeof t) return t;
                const n = t.trim();
                if (n.startsWith('(') && n.endsWith(')')) {
                    const [t, ...s] = n.slice(1, -1).split(' ');
                    return t ? Lr(e, t, s, r) : e;
                }
                return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
            }),
            o = r[t];
        return o ? o(e, ...s) : (console.error(`Function ${t} is not registered`), e);
    }
    function Er(e, t, n) {
        return e.reduce((e, t) => {
            const [r, ...s] = (function (e) {
                const t = [];
                let n = '',
                    r = !1,
                    s = !1,
                    o = '';
                for (let i = 0; i < e.length; i++) {
                    const a = e[i];
                    ("'" !== a && '"' !== a) || s || r
                        ? a === o && s
                            ? ((s = !1), (n += a))
                            : '(' !== a || s
                              ? ')' === a && r && !s
                                  ? ((r = !1), (n += a))
                                  : ' ' !== a || r || s
                                    ? (n += a)
                                    : n && (t.push(n), (n = ''))
                              : ((r = !0), (n += a))
                        : ((s = !0), (o = a), (n += a));
                }
                return (n && t.push(n), t);
            })(t.trim());
            return r ? Lr(e, r, s, n) : e;
        }, t);
    }
    function kr(e) {
        return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
    }
    function Fr(e, t) {
        for (let n = 0; n < e.length; n++) {
            if ('$' === e[n]) {
                let r = n + 1;
                for (; r < e.length && !kr(e[r]); ) r++;
                const s = e.slice(n + 1, r),
                    o = t[s];
                if (o) return Fr(e.replace(`$${s}`, String(o)), t);
            }
        }
        return e;
    }
    function jr(e, t) {
        const n = [];
        for (let r = 0; r < e.length; r++) n[r] = Fr(e[r], t);
        return n;
    }
    const Nr = ['number', 'string', 'undefined'];
    function Rr(t, n, s = {}, o = !0) {
        o && (br = 0);
        const i = [];
        function a(e) {
            if (Nr.includes(typeof e)) {
                const t = i.at(-1);
                if ('string' == typeof t) return void (i[i.length - 1] = t + e);
            }
            i.push(e);
        }
        for (const l of t)
            if (l.type === fr) a(l.value);
            else if (l.type === mr)
                null === s[l.name] || Nr.includes(typeof s[l.name])
                    ? a(s[l.name] ?? `{{${l.name}}}`)
                    : i.push(e.jsx(r.Fragment, { children: s[l.name] }, `var-${l.name}-${l.instanceId}`));
            else if (l.type === pr) {
                const e = Rr(l.children, n, s, !1),
                    t = Er(jr(l.attrs, s), e, n);
                i.push(t);
            }
        return i;
    }
    function Mr(e) {
        return e
            .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
            .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
    }
    function Tr(e) {
        return e
            .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
            .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
    }
    function Vr(e) {
        return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
    }
    const Ar = { start: '{{', end: '}}' },
        $r = r.memo(function (t) {
            const {
                    brackets: n = Ar,
                    text: s,
                    params: o,
                    upgradeLegacy: i,
                    fullSize: a,
                    inline: l,
                    formatters: c,
                    split: u,
                    ...d
                } = t,
                h = r.useMemo(
                    () =>
                        t.upgradeLegacy
                            ? (function (e) {
                                  return (function (e, t, n, r, s, o, i, a, l) {
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
                                              return i(o(s(r(n(t(e))))));
                                          case 8:
                                              return a(i(o(s(r(n(t(e)))))));
                                          case 9:
                                              return l(a(i(o(s(r(n(t(e))))))));
                                          default: {
                                              let e = arguments[0];
                                              for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
                                              return e;
                                          }
                                      }
                                  })(e, Vr, Mr, Tr);
                              })(t.text)
                            : t.text,
                    [t.text, t.upgradeLegacy],
                ),
                f = r.useMemo(() => (t.formatters ? { ...Cr, ...t.formatters } : Cr), [t.formatters]),
                p = r.useMemo(
                    () =>
                        (function (e, t) {
                            const n = [],
                                r = [];
                            let s = '',
                                o = !1,
                                i = '',
                                a = 0;
                            for (let l = 0; l < e.length; l++) {
                                const c = e[l];
                                if (c === t.start[0] && e.slice(l, l + t.start.length) === t.start)
                                    (s &&
                                        (r.length > 0
                                            ? r[r.length - 1].node.children.push({ type: fr, value: s })
                                            : n.push({ type: fr, value: s }),
                                        (s = '')),
                                        (o = !0),
                                        (l += t.start.length - 1));
                                else if (c === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                                    ((o = !1), (l += t.end.length - 1));
                                    const e = i.trim();
                                    if (e.startsWith('@')) {
                                        const t = e.slice(1).trim(),
                                            s = { type: pr, attrs: t.split('|'), instanceId: ++a, children: [] };
                                        (r.length > 0 ? r[r.length - 1].node.children.push(s) : n.push(s),
                                            r.push({ node: s, startIndex: n.length }));
                                    } else if ('/' === e) r.length > 0 && r.pop();
                                    else {
                                        const t = { type: mr, instanceId: ++a, name: e };
                                        r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                    }
                                    i = '';
                                } else o ? (i += c) : (s += c);
                            }
                            s &&
                                (r.length
                                    ? r[r.length - 1].node.children.push({ type: fr, value: s })
                                    : n.push({ type: fr, value: s }));
                            return n;
                        })(u ? `{{@ split}}${h}{{/}}` : h, n),
                    [n, h, u],
                ),
                m = r.useMemo(() => Rr(p, f, t.params), [p, f, t.params]),
                g = V(gr.base, a && gr.base__fullSize, d.className);
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
                      children: m,
                  }))
                : e.jsx('span', { ...d, className: g, children: m });
        });
    function Sr({ path: t, ...n }) {
        return e.jsx($r, { text: m.resolve('strings').readOrEmpty(t), ...n });
    }
    function Br(t) {
        return e.jsx(e.Fragment, { children: t.children });
    }
    const Dr = {
            vehicleChassis: 'chassis',
            vehicleEngine: 'engine',
            vehicleGun: 'gun',
            vehicleWheels: 'wheel',
            vehicleTurret: 'turret',
            vehicleRadio: 'radio',
        },
        [Pr, Ir] = (
            (t = 'DataLayerProvider') =>
            (n, s, o) => {
                const i = r.createContext(null);
                function a(a) {
                    var l;
                    const { mode: c, options: u, children: d, mocks: h } = a,
                        f = r.useContext(lr),
                        p = c ?? f.mode,
                        m = h ?? f.mocks,
                        g = r.useRef([]),
                        v = null == (l = null == o ? void 0 : o.useRequires) ? void 0 : l.call(o),
                        b = xe((e, r, i) => {
                            var l;
                            const c =
                                    'real' !== e && i
                                        ? (function (e, t) {
                                              return {
                                                  subscribe: () => 0,
                                                  readSafeByPath: e,
                                                  readByPath: e,
                                                  createCallback: (n, r) => {
                                                      const s = e(Q(r, t));
                                                      return (...e) => {
                                                          s(n(...e));
                                                      };
                                                  },
                                                  createCallbackNoArgs: (n) => {
                                                      const r = e(Q(n, t));
                                                      return () => {
                                                          r();
                                                      };
                                                  },
                                                  dispose: () => {},
                                                  unsubscribe: () => {},
                                                  events: { subscribersNotified: new G() },
                                              };
                                          })(i.getter, r)
                                        : J(r, { name: t }),
                                u = (t) => ('mocks' === e ? (null == i ? void 0 : i.getter(t, r)) : c.readByPath(t)),
                                d = (e) => g.current.push(e),
                                h = 'initial' in a && {
                                    initial:
                                        null == (l = null == o ? void 0 : o.initial) ? void 0 : l.call(o, a.initial),
                                },
                                f = n({
                                    ...h,
                                    mode: e,
                                    readByPath: u,
                                    requires: v,
                                    externalModel: c,
                                    observableModel: ur(c, e, u),
                                    cleanup: d,
                                }),
                                p = { ...h, mode: e, model: f, externalModel: c, cleanup: d, requires: v },
                                m = 'mocks' === e && (null == i ? void 0 : i.controls) ? i.controls(p) : {};
                            return {
                                model: f,
                                controls: { ...(null == s ? void 0 : s(p)), ...m },
                                externalModel: c,
                                mode: e,
                            };
                        }),
                        _ = r.useRef(!1),
                        [y, w] = r.useState(p);
                    r.useEffect(() => {
                        w(p);
                    }, [p]);
                    const [x, C] = r.useState(() => b(y, u, m));
                    return (
                        r.useEffect(() => {
                            _.current ? C(b(y, u, m)) : (_.current = !0);
                        }, [
                            b,
                            m,
                            y,
                            null == u ? void 0 : u.context,
                            null == u ? void 0 : u.initializer,
                            null == u ? void 0 : u.getRoot,
                            null == u ? void 0 : u.rootId,
                        ]),
                        r.useEffect(
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
                            const e = r.useContext(i);
                            if (!e) throw new Error(`hook useModel must be used within a ${a.displayName}.`);
                            return e;
                        },
                        { Context: i },
                    ]
                );
            }
        )('DailyQuestsProgressModelProvider')(
            ({ observableModel: e }) => {
                const t = {
                        unlockedVehicles: e.arrayClone('unlockedVehicles'),
                        unlockedModules: e.arrayClone('unlockedModule'),
                    },
                    n = dr.shallow(() => {
                        return (
                            (e = t.unlockedVehicles.get()),
                            (n = (e, t) =>
                                e.price.value !== t.price.value
                                    ? e.price.value - t.price.value
                                    : e.userName.localeCompare(t.userName)),
                            ae(e, ee).sort(n)
                        );
                        var e, n;
                    }),
                    r = dr.shallow(() =>
                        ae(t.unlockedModules.get(), (e) => ({ ...e, moduleTypeName: Dr[e.itemTypeName] })).sort(
                            (e, t) =>
                                e.price.value !== t.price.value
                                    ? e.price.value - t.price.value
                                    : e.userName.localeCompare(t.userName),
                        ),
                    ),
                    s = dr.primitive(() => t.unlockedVehicles.get().some((e) => e.avgBattlesTillUnlock <= 0)),
                    o = dr.primitive(() => t.unlockedModules.get().length > 0);
                return {
                    ...t,
                    computes: {
                        isUnlockedVehicles: s,
                        isUnlockedModules: o,
                        sortedUnlockedVehicles: n,
                        mappedUnlockedModules: r,
                    },
                };
            },
            ({ externalModel: e }) => ({ navigate: e.createCallback((e) => ({ vehicleCD: e }), 'onNavigate') }),
        ),
        Or = () => {};
    function Hr(t) {
        const n = t;
        return r.forwardRef(function (t, r) {
            const s = i.useAdaptive(t, t.adaptive),
                { path: o, ...a } = s,
                l = s.images ?? m.resolve('images'),
                c = { ...a, ref: r };
            {
                const t = o ? l.readOr(o, Or, 'warn') : void 0;
                return t ? e.jsx(n, { ...c, src: t }) : e.jsx(n, { ...c, unknown: !0 });
            }
        });
    }
    const zr = {
            background:
                'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
            backgroundSize: '20rem 20rem',
            backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
            backgroundColor: '#000',
        },
        Zr = Hr(
            r.forwardRef(function (t, n) {
                if (t.unknown) {
                    const {
                        repeat: r,
                        fit: s,
                        position: o,
                        width: i,
                        src: a,
                        height: l,
                        unselectable: c,
                        unknown: u,
                        unknownStyle: d = zr,
                        ...h
                    } = t;
                    return e.jsx('div', {
                        ...h,
                        ref: n,
                        style: { width: t.width, height: t.height, ...d, ...t.style },
                    });
                }
                const {
                    repeat: r,
                    fit: s,
                    position: o,
                    width: i,
                    height: a,
                    unknownStyle: l,
                    unknown: c,
                    unselectable: u,
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
                        width: 'number' == typeof i ? `${i}rem` : i,
                        height: 'number' == typeof a ? `${a}rem` : a,
                        ...d.style,
                    },
                });
            }),
        );
    Hr(
        r.forwardRef(function (t, n) {
            const { width: r, height: s, src: o, unselectable: i, unknown: a, unknownStyle: l = zr, ...c } = t;
            return t.unknown
                ? e.jsx('div', { ...c, style: { width: t.width, height: t.height, ...l } })
                : e.jsx('img', { ...c, ref: n, src: o, width: r, height: s });
        }),
    );
    const Ur = 'Divider_80a19f4b';
    function qr({ classNames: t }) {
        return e.jsx('div', {
            className: V(Ur, null == t ? void 0 : t.base),
            children: e.jsx(Zr, {
                className: null == t ? void 0 : t.image,
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    }
    const Wr = 'TruncateText_dcb41d92',
        Xr = r.forwardRef(function ({ text: t, tooltipParams: n, className: s, ...o }, i) {
            const a = Zn({ header: null == n ? void 0 : n.header, body: (null == n ? void 0 : n.body) || t }),
                l = r.useRef(null),
                [c, u] = r.useState(!1);
            const d = r.useCallback(() => {
                if (l.current) {
                    const { scrollWidth: e, offsetWidth: t } = l.current;
                    u(e > t);
                }
            }, []);
            var h, f;
            return (
                r.useEffect(() => {
                    c || a.onMouseLeave();
                }, [c, a]),
                (h = d),
                (f = [d]),
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
                }, f),
                (function (e, t) {
                    r.useEffect(() => {
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
                    const s = xe((e) => {
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
                        ((l.current = e), 'function' == typeof i ? i(e) : i && (i.current = e));
                    },
                    className: V(Wr, s),
                    ...(c ? a : {}),
                    children: t,
                })
            );
        });
    function Gr(e) {
        var t,
            n,
            r = '';
        if ('string' == typeof e || 'number' == typeof e) r += e;
        else if ('object' == typeof e)
            if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Gr(e[t])) && (r && (r += ' '), (r += n));
            else for (t in e) e[t] && (r && (r += ' '), (r += t));
        return r;
    }
    const Kr = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
        Jr = function () {
            for (var e, t, n = 0, r = ''; n < arguments.length; )
                (e = arguments[n++]) && (t = Gr(e)) && (r && (r += ' '), (r += t));
            return r;
        },
        Qr = (e, t) => (n) => {
            var r;
            if (null == (null == t ? void 0 : t.variants))
                return Jr(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: s, defaultVariants: o } = t,
                i = Object.keys(s).map((e) => {
                    const t = null == n ? void 0 : n[e],
                        r = null == o ? void 0 : o[e];
                    if (null === t) return null;
                    const i = Kr(t) || Kr(r);
                    return s[e][i];
                }),
                a =
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
                                  return Array.isArray(n) ? n.includes({ ...o, ...a }[t]) : { ...o, ...a }[t] === n;
                              })
                                  ? [...e, n, r]
                                  : e;
                          }, []);
            return Jr(e, i, l, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        };
    function Yr(t, n, s) {
        var o;
        const i =
                'object' == typeof n && 'cva' in n
                    ? null == (o = n.cva)
                        ? void 0
                        : o.variants
                    : null == s
                      ? void 0
                      : s.variants,
            a = i ? Object.keys(i) : [];
        if ('object' == typeof n) {
            const e = n,
                s = Qr(e.className, e.cva),
                o = e.element,
                i = r.forwardRef(function (e, t) {
                    return r.createElement(o, { ...('function' == typeof o ? e : es(a, e)), ref: t, className: s(e) });
                });
            return ((i.displayName = t), e.cva && (i.cva = e.cva), i);
        }
        const l = Qr(n, s),
            c = r.forwardRef(function (n, r) {
                return e.jsx('div', { 'data-name': t, ...es(a, n), ref: r, className: l(n) });
            });
        return ((c.displayName = t), s && (c.cva = s), c);
    }
    function es(e, t) {
        if (0 === e.length) return t;
        const n = { ...t };
        for (const r of e) delete n[r];
        return n;
    }
    const ts = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
        ns = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
        rs = Yr('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
        ss = r.forwardRef(function (
            { children: t, onClick: n, onMouseEnter: r, soundTarget: s, disabled: o = !1, silent: i = !1, ...a },
            l,
        ) {
            const c = Yn();
            return e.jsx(rs, {
                ...a,
                ref: l,
                onMouseEnter: function (e) {
                    (o || i || c.play('mouse-enter', { target: s || 'Button', original: e }), null == r || r(e));
                },
                onClick: function (e) {
                    o || (i || c.play('click', { target: s || 'Button', original: e }), null == n || n(e));
                },
                children: t,
            });
        }),
        os = {
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
        is = r.forwardRef(function (
            {
                children: t,
                size: n = ns.large,
                theme: r = ts.primary,
                disabled: s = !1,
                silent: o = !1,
                autoAlignContent: i = !0,
                classNames: a,
                className: l,
                ...c
            },
            u,
        ) {
            return e.jsxs(ss, {
                ...c,
                ref: u,
                silent: o,
                disabled: s,
                className: V(
                    os.base,
                    os[`base__size-${n}`],
                    os[`base__theme-${r}`],
                    s ? os.base__disabled : os.base__enabled,
                    l,
                    null == a ? void 0 : a.base,
                ),
                onClick: function (e) {
                    var t;
                    s || null == (t = c.onClick) || t.call(c, e);
                },
                children: [
                    e.jsx('div', { className: V(os.background, null == a ? void 0 : a.background) }),
                    e.jsx('div', { className: V(os.border, null == a ? void 0 : a.border) }),
                    e.jsx('div', { className: V(os.overlay, null == a ? void 0 : a.overlay) }),
                    e.jsx('div', {
                        className: V(os.content, i && os.content__fontAligned, null == a ? void 0 : a.content),
                        children: t,
                    }),
                ],
            });
        });
    ((is.themes = ts), (is.sizes = ns));
    const as = 'Action_6c7b0c76',
        ls = 'Action_icon_7d5aed3b',
        cs = r.forwardRef(function ({ className: t, theme: n = is.themes.secondary, tooltipParams: r, ...s }, o) {
            const i = Zn({
                alert: null == r ? void 0 : r.alert,
                header: null == r ? void 0 : r.header,
                body: null == r ? void 0 : r.body,
                note: null == r ? void 0 : r.note,
            });
            return e.jsx(is, {
                ...s,
                ref: o,
                onClick: (e) => {
                    (s.onClick(e), r && i.onClick());
                },
                onMouseEnter: (e) => {
                    var t;
                    (null == (t = s.onMouseEnter) || t.call(s, e), r && i.onMouseEnter(e));
                },
                onMouseLeave: (e) => {
                    var t;
                    (null == (t = s.onMouseLeave) || t.call(s, e), r && i.onMouseLeave());
                },
                autoAlignContent: !1,
                theme: n,
                className: V(as, t),
                children: e.jsx(Zr, { width: 10, height: 20, path: 'post_battle.progression.arrow', className: ls }),
            });
        }),
        us = 'Header_background_91826dd5',
        ds = 'Header_mask_afb9c38d',
        hs = 'Header_border_c6b1d37f',
        fs = Yr('CardHeader', 'Header_1c2ee301'),
        ps = r.forwardRef(function ({ classNames: t, className: n, ...r }, s) {
            return e.jsxs(fs, {
                ...r,
                className: V(null == t ? void 0 : t.base, n),
                ref: s,
                children: [
                    e.jsx('div', { className: V(us, null == t ? void 0 : t.background) }),
                    e.jsx('div', { className: V(ds, null == t ? void 0 : t.mask) }),
                    e.jsx('div', { className: V(hs, null == t ? void 0 : t.border) }),
                    r.children,
                ],
            });
        }),
        ms = Yr('CardTitle', 'Title_e5ecf295'),
        gs = r.forwardRef(function (t, n) {
            return e.jsx(ms, { ...t, ref: n, children: t.children });
        }),
        vs = 'Card_content_f7ddaa4a',
        bs = Yr('Card', 'Card_3f55e450'),
        _s = Yr('CardContent', vs),
        ys = r.forwardRef(function (t, n) {
            return e.jsx(bs, { ...t, ref: n, children: t.children });
        });
    ((ys.Header = ps), (ys.Content = _s), (ys.Action = cs), (ys.Title = gs));
    const ws = {
            base: 'ProgressCount_3c6daa70',
            label: 'ProgressCount_label_d15406bd',
            total: 'ProgressCount_total_4f222a62',
        },
        xs = m.resolve('intl');
    function Cs({ withLabel: e, withoutLimit: t }) {
        return t
            ? 'battle_results.progression.missionsCompleteCounter'
            : 'battle_results.progression.completedPointsFrom.' + (e ? 'withLabel' : 'withoutLabel');
    }
    function Ls({ current: t, total: n, withLabel: r, withoutLimit: s, className: o, classNames: i }) {
        return e.jsx(Sr, {
            path: Cs({ withLabel: r, withoutLimit: s }),
            className: V(ws.base, o),
            params: {
                completed: xs.formatNumber('integral', t),
                total: xs.formatNumber('integral', n),
                totalClass: V(ws.total, null == i ? void 0 : i.total),
                labelClass: r && V(ws.label, null == i ? void 0 : i.label),
            },
        });
    }
    const Es = {
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
    function ks({
        title: t,
        titleImageProps: n,
        disabled: r,
        actionTooltipParams: s,
        onHeaderClick: o,
        onButtonAction: i,
        children: a,
        progressionCountProps: l,
        className: c,
        classNames: u,
        ...d
    }) {
        var h, f, p;
        return e.jsxs(ys, {
            className: V(Es.card, r && Es.card__disabled, c),
            ...d,
            children: [
                e.jsxs(ys.Header, {
                    onClick: o,
                    className: V(Es.cardHeader, null == (h = null == u ? void 0 : u.header) ? void 0 : h.base),
                    classNames: {
                        ...(null == u ? void 0 : u.header),
                        background: V(
                            Es.cardHeaderBackground,
                            null == (f = null == u ? void 0 : u.header) ? void 0 : f.background,
                        ),
                        border: V(Es.cardHeaderBorder, null == (p = null == u ? void 0 : u.header) ? void 0 : p.border),
                    },
                    children: [
                        e.jsxs('div', {
                            className: V(Es.head, null == u ? void 0 : u.head),
                            children: [
                                e.jsxs('div', {
                                    className: Es.titleContainer,
                                    children: [
                                        void 0 !== n && e.jsx(Zr, { ...n }),
                                        e.jsx(ys.Title, {
                                            className: V(Es.title, null == u ? void 0 : u.title),
                                            children: e.jsx(Xr, { text: t }),
                                        }),
                                    ],
                                }),
                                void 0 !== i &&
                                    e.jsx(ys.Action, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), i(e));
                                        },
                                        className: V(Es.action, null == u ? void 0 : u.action),
                                        tooltipParams: s,
                                    }),
                            ],
                        }),
                        e.jsx('div', {
                            className: V(Es.tail, null == u ? void 0 : u.tail),
                            children: void 0 !== l && e.jsx(Ls, { ...l }),
                        }),
                    ],
                }),
                void 0 !== a &&
                    e.jsx(ys.Content, { className: V(Es.content, null == u ? void 0 : u.content), children: a }),
                e.jsx('div', { className: Es.divider }),
            ],
        });
    }
    function Fs(e) {
        return (
            !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
            (!r.isValidElement(e) && !!Array.isArray(e) && e.every(Fs))
        );
    }
    const js = 'MultilineOverflow_8834bd8e',
        Ns = 'MultilineOverflow_content_b539970d';
    const Rs = r.forwardRef(function (
            {
                text: t,
                brackets: n,
                params: s,
                formatters: o,
                upgradeLegacy: i,
                split: a = !0,
                onMouseEnter: l,
                onMouseLeave: c,
                onClick: u,
                tooltipDisabled: d = !1,
                tooltip: h,
                className: f,
                classNames: p,
                ...g
            },
            v,
        ) {
            const b = r.useRef(null),
                [_, y] = r.useState(!1);
            r.useEffect(() => {
                if (0 === t.length) return;
                const e = b.current;
                if (!e) return;
                const n = document.createElement('div');
                let r = Y;
                function s() {
                    if (!e) return;
                    (r(),
                        (n.style.visibility = 'hidden'),
                        (n.className = V(Ns, e.children[0].className)),
                        (n.innerHTML = ''),
                        e.appendChild(n));
                    for (let r of e.children[0].childNodes.values()) {
                        if (r instanceof HTMLElement) {
                            const e = r.cloneNode(!0);
                            n.appendChild(e);
                        }
                        if (r.nodeType === Node.TEXT_NODE) {
                            const e = document.createTextNode(r.nodeValue ?? '');
                            n.appendChild(e);
                        }
                    }
                    const t = document.createElement('div');
                    ((t.innerHTML = '...'),
                        n.appendChild(t),
                        (r = le(() => {
                            var r, s;
                            const o = [];
                            for (let t = n.childNodes.length - 2; 0 !== t; t--) {
                                const r = n.childNodes[t];
                                if (r instanceof HTMLElement) {
                                    if (r.offsetTop + r.offsetHeight <= e.offsetHeight) break;
                                    o.push(r);
                                }
                            }
                            o.forEach((e) => e.remove());
                            const i = null == (r = n.lastChild) ? void 0 : r.previousSibling;
                            (0 === o.length
                                ? (null == (s = n.lastChild) || s.remove(), y(!1))
                                : i.offsetWidth + i.offsetLeft + t.offsetWidth > e.offsetWidth
                                  ? (i.remove(), y(!0))
                                  : y(!0),
                                (n.style.visibility = ''));
                        })));
                }
                const o = new ResizeObserver(s);
                return (
                    o.observe(e),
                    new re()
                        .add(() => r())
                        .add(se(window, 'resize', s))
                        .add(o.disconnect.bind(o))
                        .add(n.remove.bind(n)).dispose
                );
            }, [v, t]);
            const w = (function (e) {
                    return !e || Object.values(e).every(Fs);
                })(s),
                x = Wn(
                    'format_text',
                    r.useMemo(
                        () => ({
                            text: t,
                            params: w ? s : void 0,
                            split: a,
                            upgradeLegacy: i,
                            brackets: n,
                            resId: m.resolve('views').read((e) => e.mono.tooltips.tooltips('resId')),
                        }),
                        [t, n, a, i, s, w],
                    ),
                ),
                C = h ?? x;
            if (
                (r.useEffect(() => {
                    d || _ || C.onMouseLeave();
                }, [_, C, h, d, w]),
                0 === t.length)
            )
                return null;
            return e.jsx('div', {
                ...g,
                onMouseEnter: function (e) {
                    (null == l || l(e), _ && !d && C.onMouseEnter(e));
                },
                onClick: function (e) {
                    (null == u || u(e), d || C.onClick());
                },
                onMouseLeave: function (e) {
                    (null == c || c(e), d || C.onMouseLeave());
                },
                ref: hr([v, b]),
                className: V(js, f, null == p ? void 0 : p.base),
                children: e.jsx($r, {
                    text: t,
                    brackets: n,
                    params: s,
                    upgradeLegacy: i,
                    split: a,
                    formatters: o,
                    className: null == p ? void 0 : p.text,
                    style: { visibility: 'hidden' },
                }),
            });
        }),
        Ms = r.forwardRef((t, n) => {
            const { children: s, ...o } = t,
                i = r.Children.toArray(s),
                a = i.find(As);
            if (a) {
                const t = a.props.children,
                    s = i.map((e) =>
                        e === a
                            ? r.Children.count(t) > 1
                                ? r.Children.only(null)
                                : r.isValidElement(t)
                                  ? t.props.children
                                  : null
                            : e,
                    );
                return e.jsx(Ts, { ...o, ref: n, children: r.isValidElement(t) ? r.cloneElement(t, void 0, s) : null });
            }
            return e.jsx(Ts, { ...o, ref: n, children: s });
        });
    Ms.displayName = 'Slot';
    const Ts = r.forwardRef((e, t) => {
        const { children: n, ...s } = e;
        if (r.isValidElement(n)) {
            const e = (o = n).props.ref || o.ref,
                i = (function (e, t) {
                    const n = { ...e, ...t };
                    for (const r in t) {
                        const s = e[r],
                            o = t[r];
                        r.startsWith('on')
                            ? s && o
                                ? (n[r] = (...e) => {
                                      (o(...e), s(...e));
                                  })
                                : s && (n[r] = s)
                            : 'style' === r
                              ? (n[r] = { ...s, ...o })
                              : 'className' === r && (n[r] = [s, o].filter(Boolean).join(' '));
                    }
                    return n;
                })(s, n.props);
            return (n.type !== r.Fragment && (i.ref = t ? hr([t, e]) : e), r.cloneElement(n, i));
        }
        var o;
        return (console.warn('Invalid children', n), null);
    });
    Ts.displayName = 'SlotClone';
    const Vs = ({ children: t }) => e.jsx(e.Fragment, { children: t });
    function As(e) {
        return r.isValidElement(e) && e.type === Vs;
    }
    function $s(t, n) {
        function r({ asChild: n, params: r, disabled: s, ...o }) {
            const i = n ? Ms : 'div',
                a = t(s ? { ...r, disabled: s } : r);
            return e.jsx(i, { ...o, ...a });
        }
        return ((r.displayName = n), r);
    }
    $s(zn, 'Tooltip');
    const Ss = $s(Zn, 'SimpleTooltip');
    ($s(function (e) {
        return Wn(e.type, e.args, e.params);
    }, 'ParamsTooltip'),
        $s(function (e) {
            return (
                (t = e.tooltipId),
                (n = e.args),
                (s = e.params),
                zn({
                    ...s,
                    disabled: 'string' != typeof t || (null == s ? void 0 : s.disabled),
                    contentId: m.resolve('aliases').read((e) => e.common.tooltip.Wulf('resId')),
                    args: r.useMemo(
                        () => ({ tooltipId: t, tooltipArgs: JSON.stringify(n), ...(null == s ? void 0 : s.args) }),
                        [n, t, null == s ? void 0 : s.args],
                    ),
                })
            );
            var t, n, s;
        }, 'WulfTooltip'),
        $s(function (e) {
            return (function (e, t = qn, n) {
                return zn({
                    ...n,
                    disabled: 'string' != typeof e || (null == n ? void 0 : n.disabled),
                    contentId: m.resolve('aliases').read((e) => e.common.tooltip.Backport('resId')),
                    args: r.useMemo(
                        () => ({ tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == n ? void 0 : n.args) }),
                        [t, e, null == n ? void 0 : n.args],
                    ),
                });
            })(e.tooltipId, e.args, e.params);
        }, 'SpecialTooltip'),
        $s(Un, 'BackportTooltip'));
    const Bs = {
            tankXP: 'tankXP',
            freeXP: 'freeXP',
            credits: 'credits',
            gold: 'gold',
            crystal: 'crystal',
            equipCoin: 'equipCoin',
            eliteXp: 'eliteXp',
            depot: 'depot',
            vehicle: 'vehicle',
            crew: 'crew',
            custom: 'custom',
        },
        Ds = Object.values(Bs),
        Ps = {
            extraSmall: 'extraSmall',
            small: 'small',
            medium: 'medium',
            large: 'large',
            extraLarge: 'extraLarge',
            xxl: 'xxl',
        },
        Is = {
            [Ps.extraSmall]: 16,
            [Ps.small]: 24,
            [Ps.medium]: 32,
            [Ps.large]: 48,
            [Ps.extraLarge]: 80,
            [Ps.xxl]: 96,
        },
        Os = {
            [Ps.extraSmall]: 32,
            [Ps.small]: 48,
            [Ps.medium]: 32,
            [Ps.large]: 96,
            [Ps.extraLarge]: 80,
            [Ps.xxl]: 96,
        },
        Hs = {
            base: 'Currency_72d4be39',
            base__reverse: 'Currency_base__reverse_f12e61b0',
            base__notEnough: 'Currency_base__notEnough_9a7842f',
            base__credits: 'Currency_base__credits_7b9ae721',
            base__gold: 'Currency_base__gold_d6e3cbc',
            base__freeXP: 'Currency_base__freeXP_d29d5a57',
            base__crystal: 'Currency_base__crystal_f830cb47',
            base__tankXP: 'Currency_base__tankXP_1707c68b',
        },
        zs = m.resolve('intl'),
        Zs = Yr('Currency', Hs.base, { variants: { reverse: { true: Hs.base__reverse } } });
    function Us(e, t) {
        const n = t === Bs.gold ? 'gold' : 'integral';
        return Array.isArray(e)
            ? e.map((e) => ('number' == typeof e ? zs.formatNumber(n, e) : e))
            : 'number' == typeof e
              ? zs.formatNumber(n, e)
              : e;
    }
    function qs({
        children: t,
        type: n,
        className: r,
        classNames: s,
        imagePath: o,
        size: a = Ps.small,
        enough: l = !0,
        ...c
    }) {
        const u = Is[a],
            d = `${n}_${u}x${u}`,
            h = Os[a],
            f = `${n}_${h}x${h}`,
            p = o || Ds.includes(n),
            m = i.useUpscale(`library.currency.${d}`, `library.currency.${f}`);
        return e.jsxs(Zs, {
            ...c,
            className: V(null == s ? void 0 : s.base, l ? Hs[`base__${n}`] : Hs.base__notEnough, r),
            children: [
                p && e.jsx(Zr, { width: u, height: u, path: o ?? m, className: null == s ? void 0 : s.icon }),
                Us(t, n),
            ],
        });
    }
    ((qs.sizes = Ps), (qs.types = Bs));
    const Ws = 'VehicleLevel_3c938122',
        Xs = { arabic: 'arabic', roman: 'roman' };
    const Gs = r.forwardRef(function ({ value: t, numberType: n, ...r }, s) {
        const o = (function (e, t) {
                return e || (t ? Xs.arabic : Xs.roman);
            })(
                n,
                (function () {
                    const e = m.resolve('strings');
                    return Xn.includes(e.readOrEmpty('settings.LANGUAGE_CODE'));
                })(),
            ),
            i =
                o === Xs.roman
                    ? (function (e) {
                          if (e <= 10) return de[e] ?? String(e);
                          let t = '';
                          for (let n = ue.length - 1; n >= 0; n--) {
                              let r = ue[n];
                              for (; void 0 !== r && e >= r; ) ((t += ce[n]), (e -= r));
                          }
                          return t;
                      })(t)
                    : t;
        return e.jsx('div', { ...r, 'data-name': 'VehicleLevel', className: V(Ws, r.className), ref: s, children: i });
    });
    Gs.numberTypes = Xs;
    const Ks = 'prestige',
        Js = 'short',
        Qs = 'medium',
        Ys = 'long',
        eo = (e) => (e < 10 ? Js : e < 100 ? Qs : Ys),
        to = (e, t, n) => (t === Ks ? Ks : `${t}.${eo(e)}.c_${n}`),
        no = {
            base: 'VehiclePrestigeLevel_a750cce',
            icon: 'VehiclePrestigeLevel_icon_ef024cc3',
            base__left: 'VehiclePrestigeLevel_base__left_4426b46c',
            level: 'VehiclePrestigeLevel_level_10f410ba',
            level__short: 'VehiclePrestigeLevel_level__short_d1939fb1',
            base__right: 'VehiclePrestigeLevel_base__right_4426b46c',
            level__medium: 'VehiclePrestigeLevel_level__medium_90aed80f',
            level__long: 'VehiclePrestigeLevel_level__long_26625167',
            base__iron: 'VehiclePrestigeLevel_base__iron_4426b46c',
            base__bronze: 'VehiclePrestigeLevel_base__bronze_4426b46c',
            base__silver: 'VehiclePrestigeLevel_base__silver_4426b46c',
            base__gold: 'VehiclePrestigeLevel_base__gold_4426b46c',
            base__enamel: 'VehiclePrestigeLevel_base__enamel_4426b46c',
        };
    function ro({ level: t, grade: n, type: r, direction: s, classNames: o, ...i }) {
        return t < 1 || -1 === n
            ? null
            : e.jsxs('div', {
                  ...i,
                  className: V(no.base, no[`base__${r}`], no[`base__${s}`], i.className, null == o ? void 0 : o.base),
                  children: [
                      e.jsx(Zr, {
                          path: `prestige.tab.${to(t, r, n)}`,
                          className: V(no.icon, null == o ? void 0 : o.icon),
                      }),
                      r !== Ks &&
                          e.jsx('div', {
                              className: V(no.level, no[`level__${eo(t)}`], null == o ? void 0 : o.level),
                              children: t,
                          }),
                  ],
              });
    }
    ro.direction = { left: 'left', right: 'right' };
    const so = {
            lightTank: 'lightTank',
            mediumTank: 'mediumTank',
            heavyTank: 'heavyTank',
            SPG: 'SPG',
            'AT-SPG': 'AT-SPG',
        },
        oo = Object.values(so);
    function io(e) {
        const t = e.indexOf(':');
        return A(t < 0 ? e.toLowerCase() : e.substring(t + 1).toLowerCase());
    }
    const ao = 'assault',
        lo = 'sniper',
        co = 'support',
        uo = 'universal',
        ho = 'break',
        fo = 'wheeled',
        po = {
            [`${ao}_x16x16`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 16,
                        height: 16,
                        viewBox: '0 0 16 16',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M8 1L1 6.03876L3.67531 14H12.3247L15 6.03876L8 1ZM10.5 11.5H5.5L4 7L8 4L12 7L10.5 11.5Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${ho}_x16x16`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 16,
                        height: 16,
                        viewBox: '0 0 16 16',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', { d: 'M8 2L15 9H11L8 6L5 9H1L8 2Z', fill: '#FFB34D' }),
                    p.createElement('path', { d: 'M11 11L8 8L5 11V14L8 11L11 14V11Z', fill: '#FFB34D' }),
                ),
            [`${lo}_x16x16`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 16,
                        height: 16,
                        viewBox: '0 0 16 16',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', { d: 'M9 8L10 9H14V7H10L9 8Z', fill: '#FFB34D' }),
                    p.createElement('path', { d: 'M7 8L6 9H2V7H6L7 8Z', fill: '#FFB34D' }),
                    p.createElement('path', { d: 'M8 9L7 10V14H9V10L8 9Z', fill: '#FFB34D' }),
                    p.createElement('path', { d: 'M8 7L7 6V2H9V6L8 7Z', fill: '#FFB34D' }),
                ),
            [`${co}_x16x16`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 16,
                        height: 16,
                        viewBox: '0 0 16 16',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M3 5V8.40002L2.80001 8.10004L2.20001 9.00005H1V3H2.20001L2.80002 4.00001L3.40002 3H8.80006C9.61885 3 10.7815 4.12547 11.5618 5.00075C11.55 5.00025 11.5382 5 11.5263 5H6.47368L5.89474 6L5.31579 5H3ZM6.39951 11.9999H11.7996C13.0298 11.9999 15.3996 9.01318 15.3996 9.01318C15.3996 9.01318 13.1393 5.99989 11.7996 5.99989H6.39951L5.79951 6.9999L5.1995 5.99989H3.99949V11.9999H5.1995L5.79951 11.0999L6.39951 11.9999Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${uo}_x16x16`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 16,
                        height: 16,
                        viewBox: '0 0 16 16',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M4.79109 7.99164C4.79109 6.22006 6.22841 4.79109 7.99164 4.79109C8.45961 4.79109 8.90251 4.89972 9.30362 5.07521L11.1504 2.90251C10.2312 2.33426 9.1532 2 7.99164 2C4.68245 2 2 4.68245 2 8C2 9.50418 2.55153 10.8747 3.47075 11.9276L5.32591 9.75487C4.99164 9.25348 4.79944 8.65181 4.79944 8L4.79109 7.99164ZM12.6295 4.18941L10.7493 6.38719C11.0251 6.86351 11.2006 7.40669 11.2006 8C11.2006 9.77159 9.76323 11.2006 8 11.2006C7.59053 11.2006 7.19777 11.117 6.83844 10.9749L4.96657 13.1727C5.86072 13.6992 6.88858 14 8 14C11.3175 14 14 11.3175 14 8C14 6.55432 13.4903 5.22563 12.6295 4.18941Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${fo}_x16x16`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 16,
                        height: 16,
                        viewBox: '0 0 16 16',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M7 8C7 9.65685 5.65685 11 4 11C2.34315 11 1 9.65685 1 8C1 6.34315 2.34315 5 4 5C5.65685 5 7 6.34315 7 8Z',
                        fill: '#FFB34D',
                    }),
                    p.createElement('path', {
                        d: 'M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${ao}_x24x24`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 24,
                        height: 24,
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M12 3L3 9.58915L6.43968 20H17.5603L21 9.58915L12 3ZM15 17H9L7 11L12 7.5L17 11L15 17Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${ho}_x24x24`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 24,
                        height: 24,
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', { d: 'M12 3L21 12H16L12 8L8 12H3L12 3Z', fill: '#FFB34D' }),
                    p.createElement('path', { d: 'M16 15L12 11L8 15V19L12 15L16 19V15Z', fill: '#FFB34D' }),
                ),
            [`${lo}_x24x24`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 24,
                        height: 24,
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', { d: 'M10 3V8L12 10L14 8V3H10Z', fill: '#FFB34D' }),
                    p.createElement('path', { d: 'M10 21V16L12 14L14 16V21H10Z', fill: '#FFB34D' }),
                    p.createElement('path', { d: 'M8 14H3V10H8L10 12L8 14Z', fill: '#FFB34D' }),
                    p.createElement('path', { d: 'M21 14H16L14 12L16 10H21V14Z', fill: '#FFB34D' }),
                ),
            [`${co}_x24x24`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 24,
                        height: 24,
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M6 8V12.2364L5.46667 13H4V6H5.46667L6.2 7.16667L6.93333 6H13.5333C14.712 6 16.4737 7.82156 17.3683 8.84226C16.7413 8.35641 16.1028 8 15.5789 8H10.4211L9.68421 9.16667L8.94737 8H6ZM10.9474 17H17.5789C19.0897 17 22 13.5155 22 13.5155C22 13.5155 19.2242 10 17.5789 10H10.9474L10.2105 11.1667L9.47368 10H8V17H9.47368L10.2105 15.95L10.9474 17Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${uo}_x24x24`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 24,
                        height: 24,
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M7.72145 11.9889C7.72145 9.62674 9.63788 7.72145 11.9889 7.72145C12.6128 7.72145 13.2033 7.8663 13.7382 8.10028L16.2006 5.20334C14.9749 4.44568 13.5376 4 11.9889 4C7.5766 4 4 7.5766 4 12C4 14.0056 4.73538 15.8329 5.961 17.2368L8.43454 14.3398C7.98886 13.6713 7.73259 12.8691 7.73259 12L7.72145 11.9889ZM18.1727 6.91922L15.6657 9.84958C16.0334 10.4847 16.2674 11.2089 16.2674 12C16.2674 14.3621 14.351 16.2674 12 16.2674C11.454 16.2674 10.9304 16.156 10.4513 15.9666L7.95543 18.8969C9.14763 19.5989 10.5181 20 12 20C16.4234 20 20 16.4234 20 12C20 10.0724 19.3203 8.30084 18.1727 6.91922Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${fo}_x24x24`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 24,
                        height: 24,
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M11 12C11 14.2091 9.20914 16 7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C9.20914 8 11 9.79086 11 12Z',
                        fill: '#FFB34D',
                    }),
                    p.createElement('path', {
                        d: 'M21 12C21 14.2091 19.2091 16 17 16C14.7909 16 13 14.2091 13 12C13 9.79086 14.7909 8 17 8C19.2091 8 21 9.79086 21 12Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${ao}_x32x32`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 32,
                        height: 32,
                        viewBox: '0 0 32 32',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M16.5914 5.76714C16.2395 5.50928 15.7611 5.50928 15.4092 5.76714L5.65573 12.9145C5.30611 13.1707 5.16135 13.623 5.29721 14.0346L9.02038 25.3139C9.15564 25.7237 9.53848 26.0005 9.96998 26.0005H22.0306C22.4621 26.0005 22.8449 25.7237 22.9802 25.3139L26.7033 14.0346C26.8392 13.623 26.6944 13.1707 26.3448 12.9145L16.5914 5.76714ZM20.2642 22.8457L19.5741 22.1309H12.3525L11.6378 22.8457L12.143 21.7858L9.97409 15.1188L8.97588 14.6382L10.3931 14.7615L15.7292 10.8919L15.9633 9.56094L16.2344 10.9042L21.5335 14.7615L22.9384 14.6259L21.9525 15.1188L19.7959 21.7489L20.2765 22.8333L20.2642 22.8457Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${ho}_x32x32`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 32,
                        height: 32,
                        viewBox: '0 0 32 32',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M15.6464 5.35355C15.8417 5.15829 16.1583 5.15829 16.3536 5.35355L28 17H22.1988C22.0711 17 21.9483 16.9512 21.8555 16.8635L16.3433 11.6576C16.1506 11.4756 15.8494 11.4756 15.6567 11.6576L10.1445 16.8635C10.0517 16.9512 9.92888 17 9.80121 17H4L15.6464 5.35355Z',
                        fill: '#FFB34D',
                    }),
                    p.createElement('path', {
                        d: 'M22 20.8738C22 20.7412 21.9473 20.614 21.8536 20.5203L16.3536 15.0203C16.1583 14.825 15.8417 14.825 15.6464 15.0203L10.1464 20.5203C10.0527 20.614 10 20.7412 10 20.8738V27L15.6464 21.3536C15.8417 21.1583 16.1583 21.1583 16.3536 21.3536L22 27V20.8738Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${lo}_x32x32`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 32,
                        height: 32,
                        viewBox: '0 0 32 32',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M16.0003 13L13 10V3.5C13 3.22386 13.2239 3 13.5 3H18.5C18.7761 3 19 3.22386 19 3.5V10L16.0003 13Z',
                        fill: '#FFB34D',
                    }),
                    p.createElement('path', {
                        d: 'M16.0003 19L13 22V28.5C13 28.7761 13.2239 29 13.5 29H18.5C18.7761 29 19 28.7761 19 28.5V22L16.0003 19Z',
                        fill: '#FFB34D',
                    }),
                    p.createElement('path', {
                        d: 'M22 13L19 16L22 19H28.5C28.7761 19 29 18.7761 29 18.5V13.5C29 13.2239 28.7761 13 28.5 13H22Z',
                        fill: '#FFB34D',
                    }),
                    p.createElement('path', {
                        d: 'M13 15.9998L10 13H3.5C3.22386 13 3 13.2239 3 13.5L3.00005 18.5C3.00005 18.7761 3.22391 19 3.50005 19H10L13 15.9998Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${co}_x32x32`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 32,
                        height: 32,
                        viewBox: '0 0 32 32',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M7 11.5V16.9014C6.84147 16.9014 6.68293 16.9756 6.58398 17.124L6.14843 17.7774C6.0557 17.9164 5.89959 18 5.73241 18H4.5C4.22386 18 4 17.7761 4 17.5V8.5C4 8.22386 4.22386 8 4.5 8H5.7169C5.89254 8 6.05529 8.09215 6.14565 8.24275L6.57125 8.95209C6.76546 9.27576 7.23455 9.27576 7.42875 8.95209L7.85435 8.24275C7.94471 8.09215 8.10746 8 8.2831 8H17C18.591 8 20.9608 10.5496 22.1919 12.0156C21.4185 11.4193 20.6452 11 20 11H13.2831C13.1075 11 12.9447 11.0921 12.8543 11.2428L12.4287 11.9521C12.2345 12.2758 11.7655 12.2758 11.5713 11.9521L11.1457 11.2428C11.0553 11.0921 10.8925 11 10.7169 11H7.5C7.22386 11 7 11.2239 7 11.5ZM13.2676 23H22C24.0503 23 28 18.0221 28 18.0221C28 18.0221 24.2329 13 22 13H13.2831C13.1075 13 12.9447 13.0921 12.8543 13.2428L12.4287 13.9521C12.2345 14.2758 11.7655 14.2758 11.5713 13.9521L11.1457 13.2428C11.0553 13.0921 10.8925 13 10.7169 13H9.5C9.22386 13 9 13.2239 9 13.5V22.5C9 22.7761 9.22386 23 9.5 23H10.7324C10.8996 23 11.0557 22.9164 11.1484 22.7774L11.584 22.124C11.7819 21.8272 12.2181 21.8272 12.416 22.124L12.8516 22.7774C12.9443 22.9164 13.1004 23 13.2676 23Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${uo}_x32x32`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 32,
                        height: 32,
                        viewBox: '0 0 32 32',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M10.6518 15.9861C10.6518 13.0334 13.0474 10.6518 15.9861 10.6518C16.766 10.6518 17.5042 10.8329 18.1727 11.1253L21.2507 7.50418C19.7187 6.5571 17.922 6 15.9861 6C10.4708 6 6 10.4708 6 16C6 18.507 6.91922 20.7911 8.45125 22.546L11.5432 18.9248C10.9861 18.0891 10.6657 17.0864 10.6657 16L10.6518 15.9861ZM23.7159 9.64902L20.5822 13.312C21.0418 14.1058 21.3343 15.0111 21.3343 16C21.3343 18.9526 18.9387 21.3343 16 21.3343C15.3175 21.3343 14.663 21.195 14.0641 20.9582L10.9443 24.6212C12.4345 25.4986 14.1476 26 16 26C21.5292 26 26 21.5292 26 16C26 13.5905 25.1504 11.376 23.7159 9.64902Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${fo}_x32x32`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 32,
                        height: 32,
                        viewBox: '0 0 32 32',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M14 16C14 18.7614 11.7614 21 9 21C6.23858 21 4 18.7614 4 16C4 13.2386 6.23858 11 9 11C11.7614 11 14 13.2386 14 16Z',
                        fill: '#FFB34D',
                    }),
                    p.createElement('path', {
                        d: 'M28 16C28 18.7614 25.7614 21 23 21C20.2386 21 18 18.7614 18 16C18 13.2386 20.2386 11 23 11C25.7614 11 28 13.2386 28 16Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${ao}_x48x48`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 48,
                        height: 48,
                        viewBox: '0 0 48 48',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M24.591 8.43413C24.2391 8.17627 23.7607 8.17627 23.4088 8.43413L8.18991 19.5867C7.84029 19.8429 7.69553 20.2951 7.83139 20.7067L13.6434 38.3142C13.7786 38.7239 14.1615 39.0007 14.593 39.0007H33.4069C33.8384 39.0007 34.2212 38.7239 34.3565 38.3142L40.1685 20.7067C40.3043 20.2951 40.1596 19.8429 39.8099 19.5867L24.591 8.43413ZM30.3958 34.2685L29.3606 33.1964H18.5283L17.4561 34.2685L18.214 32.6788L14.9606 22.6783L13.4633 21.9573L15.5891 22.1422L23.5932 16.3378L23.9445 14.3414L24.3511 16.3563L32.2998 22.1422L34.4071 21.9388L32.9283 22.6783L29.6934 32.6233L30.4143 34.25L30.3958 34.2685Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${ho}_x48x48`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 48,
                        height: 48,
                        viewBox: '0 0 48 48',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M23.2929 8.70711C23.6834 8.31658 24.3166 8.31658 24.7071 8.70711L42 26H33.4142C33.149 26 32.8946 25.8946 32.7071 25.7071L24.7071 17.7071C24.3166 17.3166 23.6834 17.3166 23.2929 17.7071L15.2929 25.7071C15.1054 25.8946 14.851 26 14.5858 26H6L23.2929 8.70711Z',
                        fill: '#FFB34D',
                    }),
                    p.createElement('path', {
                        d: 'M33 31.4142C33 31.149 32.8946 30.8946 32.7071 30.7071L24.7071 22.7071C24.3166 22.3166 23.6834 22.3166 23.2929 22.7071L15.2929 30.7071C15.1054 30.8946 15 31.149 15 31.4142V40L23.2929 31.7071C23.6834 31.3166 24.3166 31.3166 24.7071 31.7071L33 40V31.4142Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${lo}_x48x48`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 48,
                        height: 48,
                        viewBox: '0 0 48 48',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M24 20.5L20 16.4V7.7C20 7.3134 20.3134 7 20.7 7H27.3C27.6866 7 28 7.3134 28 7.7V16.4L24 20.5Z',
                        fill: '#FFB34D',
                    }),
                    p.createElement('path', {
                        d: 'M24 27.5L20 31.6V40.3C20 40.6866 20.3134 41 20.7 41H27.3C27.6866 41 28 40.6866 28 40.3V31.6L24 27.5Z',
                        fill: '#FFB34D',
                    }),
                    p.createElement('path', {
                        d: 'M31.4 20L27.5 24L31.4 28H40.3C40.6866 28 41 27.6866 41 27.3V20.7C41 20.3134 40.6866 20 40.3 20L31.4 20Z',
                        fill: '#FFB34D',
                    }),
                    p.createElement('path', {
                        d: 'M20.5 24L16.6 20L7.7 20C7.3134 20 7 20.3134 7 20.7V27.3C7 27.6866 7.3134 28 7.7 28H16.6L20.5 24Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${co}_x48x48`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 48,
                        height: 48,
                        viewBox: '0 0 48 48',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M33.4476 34H20C19.6852 34 19.3889 33.8518 19.2 33.6L18.8 33.0667C18.4 32.5333 17.6 32.5333 17.2 33.0667L16.8 33.6C16.6111 33.8518 16.3148 34 16 34H15C14.4477 34 14 33.5523 14 33V21C14 20.4477 14.4477 20 15 20H16C16.3148 20 16.6111 20.1482 16.8 20.4L17.2007 20.9343C17.6005 21.4673 18.4 21.4677 18.8002 20.935L19.2 20.4029C19.3889 20.1515 19.685 20.0036 19.9995 20.0036H33.4476C36.797 20.0036 42 27.0332 42 27.0332C42 27.0332 36.5231 34 33.4476 34ZM18.8 16.9333C18.4 17.4667 17.6 17.4667 17.2 16.9333L16.8 16.4C16.6111 16.1482 16.3148 16 16 16H11C10.4477 16 10 16.4477 10 17V23.6667C10 23.883 9.92982 24.0936 9.8 24.2667L8.79646 25.6047C8.6096 25.8539 8.31733 26.0017 8.00591 26.0047L7.00945 26.0141C6.4535 26.0193 6 25.5701 6 25.0141V13C6 12.4477 6.44772 12 7 12H7.95334C8.29399 12 8.61121 12.1734 8.79511 12.4602L9.15823 13.0264C9.55171 13.6399 10.4483 13.6399 10.8418 13.0264L11.2049 12.4602C11.3888 12.1734 11.706 12 12.0467 12H25.0638C26.8964 12 29.3189 14.119 31.1094 16.0382L20.0021 16.0017C19.6861 16.0006 19.3883 16.1489 19.1988 16.4016L18.8 16.9333Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${uo}_x48x48`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 48,
                        height: 48,
                        viewBox: '0 0 48 48',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M15.9777 23.9791C15.9777 19.5501 19.571 15.9777 23.9791 15.9777C25.149 15.9777 26.2563 16.2493 27.2591 16.688L31.876 11.2563C29.578 9.83565 26.883 9 23.9791 9C15.7061 9 9 15.7061 9 24C9 27.7604 10.3788 31.1866 12.6769 33.8189L17.3148 28.3872C16.4791 27.1337 15.9986 25.6295 15.9986 24L15.9777 23.9791ZM35.5738 14.4735L30.8733 19.968C31.5627 21.1588 32.0014 22.5167 32.0014 24C32.0014 28.429 28.4081 32.0014 24 32.0014C22.9763 32.0014 21.9944 31.7925 21.0961 31.4373L16.4164 36.9318C18.6518 38.2479 21.2214 39 24 39C32.2939 39 39 32.2939 39 24C39 20.3858 37.7256 17.0641 35.5738 14.4735Z',
                        fill: '#FFB34D',
                    }),
                ),
            [`${fo}_x48x48`]: (e) =>
                p.createElement(
                    'svg',
                    {
                        width: 48,
                        height: 48,
                        viewBox: '0 0 48 48',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        ...e,
                    },
                    p.createElement('path', {
                        d: 'M21 24C21 28.4183 17.4183 32 13 32C8.58172 32 5 28.4183 5 24C5 19.5817 8.58172 16 13 16C17.4183 16 21 19.5817 21 24Z',
                        fill: '#FFB34D',
                    }),
                    p.createElement('path', {
                        d: 'M43 24C43 28.4183 39.4183 32 35 32C30.5817 32 27 28.4183 27 24C27 19.5817 30.5817 16 35 16C39.4183 16 43 19.5817 43 24Z',
                        fill: '#FFB34D',
                    }),
                ),
        },
        mo = {
            base: 'VehicleRole_e70537d3',
            base__x16x16: 'VehicleRole_base__x16x16_f444f190',
            base__x24x24: 'VehicleRole_base__x24x24_cc02d077',
            base__x32x32: 'VehicleRole_base__x32x32_2180a099',
            base__x48x48: 'VehicleRole_base__x48x48_2a01e86c',
            icon: 'VehicleRole_icon_7f7f6256',
        },
        go = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48' },
        vo = r.forwardRef(function ({ roleKey: t, size: n = go.x24x24, classNames: r, ...s }, o) {
            const i = po[`${t}_${n}`];
            if (i)
                return e.jsx('div', {
                    ...s,
                    ref: o,
                    className: V(mo.base, mo[`base__${n}`], null == r ? void 0 : r.base),
                    children: e.jsx(i, { className: V(mo.icon, null == r ? void 0 : r.icon) }),
                });
            console.error(`Unknown vehicle role type ${t} with size ${n}`);
        });
    vo.sizes = go;
    const bo = { x24x24: 'x24x24', x48x48: 'x48x48', x64x64: 'x64x64', x96x96: 'x96x96' },
        _o = { x24x24: 'x64x64', x48x48: 'x96x96', x64x64: 'x96x96', x96x96: 'x96x96' },
        yo = {
            [so.lightTank]: 'light_tank',
            [so.mediumTank]: 'medium_tank',
            [so.heavyTank]: 'heavy_tank',
            [so.SPG]: 'spg',
            [so['AT-SPG']]: 'tank_destroyer',
        },
        wo = {
            base: 'VehicleType_30b4aab0',
            base__x24x24: 'VehicleType_base__x24x24_a3dc7aa3',
            base__x48x48: 'VehicleType_base__x48x48_cb59f57a',
            base__x64x64: 'VehicleType_base__x64x64_bb9b890',
            base__x96x96: 'VehicleType_base__x96x96_919f9f92',
            base__premium__x24x24: 'VehicleType_base__premium__x24x24_92335fef',
            base__premium__x48x48: 'VehicleType_base__premium__x48x48_e19c5d21',
            base__premium__x64x64: 'VehicleType_base__premium__x64x64_ba9a2a05',
            base__premium__x96x96: 'VehicleType_base__premium__x96x96_d837a523',
            icon: 'VehicleType_icon_b15d2628',
        },
        xo = r.forwardRef(function ({ type: t, size: n = bo.x48x48, premium: r = !1, fit: s = 'contain', ...o }, a) {
            const l = i.useUpscale(bo[n], _o[n]);
            return e.jsx(Zr, {
                ...o,
                ref: a,
                fit: s,
                className: V(wo.base, r ? wo[`base__premium__${n}`] : wo[`base__${n}`], o.className),
                path: `ui_kit.vehicle_type.${l}.${r ? 'premium_' : ''}${A(yo[t])}_${l}`,
            });
        });
    ((xo.types = so), (xo.sizes = bo));
    const Co = 'VehicleInfo_1732f1f0',
        Lo = Yr('VehicleName', 'VehicleInfo_name_3989ca04', {
            variants: { premium: { true: 'VehicleInfo_name__premium_258b3b93' } },
        }),
        Eo = r.forwardRef(function (t, n) {
            return e.jsx('div', { ...t, ref: n, className: V(Co, t.className) });
        });
    ((Eo.Prestige = ro), (Eo.Level = Gs), (Eo.Type = xo), (Eo.Name = Lo), (Eo.Role = vo));
    const ko = 'Module_90bedba7',
        Fo = 'Module_moduleIcon_73484912',
        jo = 'Module_content_e4970b35',
        No = 'Module_title_fca6e045',
        Ro = 'Module_moduleType_15d47b48',
        Mo = 'Module_level_8004dc5',
        To = 'Module_name_e5db7b89',
        Vo = m.resolve('strings'),
        Ao = a.observer(function ({ level: t, iconName: n, moduleTypeName: r, userName: s }) {
            const o = i.useMedia(),
                a = i.useUpscale(
                    `modules.${n}${o.breakpoint.weight >= i.breakpointsByType.large.weight ? 'Big' : ''}`,
                    `modules.${n}Big`,
                );
            return e.jsxs('div', {
                className: ko,
                children: [
                    e.jsx(Zr, { className: Fo, path: a }),
                    e.jsxs('div', {
                        className: jo,
                        children: [
                            e.jsxs('div', {
                                className: No,
                                children: [
                                    e.jsx(Xr, { className: Ro, text: Vo.readOrEmpty(`item_types.${r}.name`) }),
                                    e.jsx(Eo.Level, { className: Mo, value: t }),
                                ],
                            }),
                            e.jsx('div', { className: To, children: e.jsx(Xr, { text: s }) }),
                        ],
                    }),
                ],
            });
        }),
        $o = {
            base__x120x96: 'VehicleImage_base__x120x96_32ca06f1',
            base__x190x152: 'VehicleImage_base__x190x152_41379c70',
            base__x380x304: 'VehicleImage_base__x380x304_274f87fe',
        },
        So = { x120x96: 'x120x96', x190x152: 'x190x152', x380x304: 'x380x304' },
        Bo = Yr('VehicleImage', {
            element: Zr,
            className: $o.base,
            cva: {
                variants: {
                    size: {
                        [So.x120x96]: $o.base__x120x96,
                        [So.x190x152]: $o.base__x190x152,
                        [So.x380x304]: $o.base__x380x304,
                    },
                },
            },
        });
    function Do({ size: t = So.x380x304, ...n }) {
        return e.jsx(Bo, { ...n, size: t, path: `vehicle.${t}.tank_empty` });
    }
    const Po = r.forwardRef(function ({ size: t = So.x380x304, name: n, width: r, height: s, className: o, ...i }, a) {
        const l = m.resolve('images'),
            c = `vehicle.${t}.${io(n)}`;
        return l.has(c)
            ? e.jsx(Bo, { ...i, ref: a, size: t, className: o, path: c, width: r, height: s })
            : (console.warn(`Fail to retrieve icon maps/icons/vehicle/${t}/${io(n)}`),
              e.jsx(Do, { size: t, className: o, width: r, height: s }));
    });
    ((Po.UnknownVehicleImage = Do), (Po.size = So));
    const Io = 'Vehicle_976d8d19',
        Oo = 'Vehicle_flag_c5f283e7',
        Ho = 'Vehicle_content_5718d63e',
        zo = 'Vehicle_vehicleFrame_4e583c78',
        Zo = 'Vehicle_vehicleIcon_af78190f',
        Uo = 'Vehicle_level_be57c8d0',
        qo = 'Vehicle_textContent_b1dd994e',
        Wo = 'Vehicle_name_101935bf',
        Xo = a.observer(function ({ nationName: t, vehicleIcon: n, level: r, userName: s, vehicleType: o }) {
            const a = i.useAdaptive(
                { vehicleInfoSize: Eo.Type.sizes.x24x24, vehicleImage: Po.size.x120x96 },
                { large: { vehicleInfoSize: Eo.Type.sizes.x48x48, vehicleImage: Po.size.x190x152 } },
            );
            return e.jsxs('div', {
                className: Io,
                children: [
                    e.jsx(Zr, { className: Oo, path: `flags.c_600x450.${t}` }),
                    e.jsxs('div', {
                        className: Ho,
                        children: [
                            e.jsx('div', {
                                className: zo,
                                children: e.jsx(Po, { className: Zo, size: a.vehicleImage, name: n }),
                            }),
                            e.jsxs('div', {
                                className: qo,
                                children: [
                                    e.jsx(Eo.Level, { className: Uo, value: r }),
                                    ((l = o), oo.includes(l) && e.jsx(Eo.Type, { type: o, size: a.vehicleInfoSize })),
                                    e.jsx('div', { className: Wo, children: e.jsx(Xr, { text: s }) }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
            var l;
        }),
        Go = 'Card_8fd06c33',
        Ko = 'Card_info_9492ce15',
        Jo = 'Card_content_868a9eb1',
        Qo = 'Card_currencyWrapper_e0c0ff9e',
        Yo = 'Card_currency_997a5058',
        ei = 'Card_description_e0774020',
        ti = 'Card_multilineText_e5c8d10b',
        ni = 'Card_currencyIcon_f027b643',
        ri = 'Card_button_876704f',
        si = m.resolve('strings'),
        oi = m.resolve('aliases'),
        ii = 'mission-progress:vehicle-reserch:card';
    const ai = a.observer(function ({ currency: t, avgBattlesTillUnlock: n = 0, vehicleId: r = 0, children: s }) {
        const { controls: o } = Ir(),
            i = Yn(),
            a =
                (l = n) > 0
                    ? { text: si.readOrEmpty(di + '.prediction'), params: { prediction: l } }
                    : { text: si.readOrEmpty(di + '.description') };
        var l;
        return e.jsxs('div', {
            className: Go,
            onMouseEnter: (e) => {
                i.play('mouse-enter', { target: ii, original: e });
            },
            onClick: (e) => {
                (i.play('click', { original: e, target: ii }), o.navigate(r));
            },
            children: [
                e.jsx('div', { className: Ko, children: s }),
                e.jsxs('div', {
                    className: Jo,
                    children: [
                        e.jsx(Rs, { text: a.text, params: a.params, className: ei, classNames: { text: ti } }),
                        e.jsx('div', {
                            className: Qo,
                            children: e.jsx(Ss, {
                                asChild: !0,
                                params: { body: si.readOrEmpty('battle_results.progression.linkBtn.info') },
                                children: e.jsx(qs, {
                                    className: Yo,
                                    type: qs.types.tankXP,
                                    size: qs.sizes.small,
                                    reverse: !0,
                                    classNames: { icon: ni },
                                    children: E.formatNumber('integral', t),
                                }),
                            }),
                        }),
                        e.jsx(Ss, {
                            asChild: !0,
                            params: { body: si.readOrEmpty('battle_results.progression.linkBtn.info') },
                            children: e.jsx(is, {
                                className: ri,
                                size: 'small',
                                theme: is.themes.secondary,
                                onClick: () => o.navigate(r),
                                children: e.jsx(Xr, { text: si.readOrEmpty(di + '.button') }),
                            }),
                        }),
                    ],
                }),
            ],
        });
    });
    function li(t) {
        const n = Un({
            resId: oi.read((e) => e.battle_results.progression.ModuleVehicleUnlocks('resId')),
            args: r.useMemo(() => ({ itemCD: t.vehicleId, tooltipId: 'techtreeVehicle' }), [t.vehicleId]),
        });
        return e.jsx('div', {
            ...n,
            children: e.jsx(ai, {
                currency: t.price.value,
                avgBattlesTillUnlock: t.avgBattlesTillUnlock,
                vehicleId: t.vehicleId,
                children: e.jsx(Xo, { ...t }),
            }),
        });
    }
    function ci(t) {
        const n = Un({
            resId: oi.read((e) => e.battle_results.progression.ModuleVehicleUnlocks('resId')),
            args: r.useMemo(() => ({ itemCD: t.moduleId, tooltipId: 'techtreeModule' }), [t.moduleId]),
        });
        return e.jsx('div', { ...n, children: e.jsx(ai, { currency: t.price.value, children: e.jsx(Ao, { ...t }) }) });
    }
    const ui = 'VehicleResearch_divider_9eeb4cbc',
        di = 'battle_results.missionsProgress.aboutVehicle',
        hi = m.resolve('strings'),
        fi = a.observer(function ({ pushNotifications: t }) {
            const { model: n } = Ir(),
                s = n.computes.sortedUnlockedVehicles(),
                o = n.computes.mappedUnlockedModules(),
                i = n.computes.isUnlockedVehicles(),
                a = ye(i),
                l = n.computes.isUnlockedModules(),
                c = ye(l);
            return (
                r.useEffect(() => {
                    if (void 0 === t) return;
                    const n = [];
                    (!1 === a &&
                        i &&
                        n.push({
                            id: ge(),
                            item: e.jsx(Sr, {
                                path: 'battle_results.missionsProgress.notificationsTabs.aboutVehicle.vehicle',
                            }),
                        }),
                        !1 === c &&
                            l &&
                            n.push({
                                id: ge(),
                                item: e.jsx(Sr, {
                                    path: 'battle_results.missionsProgress.notificationsTabs.aboutVehicle.module',
                                }),
                            }),
                        n.length > 0 && t(n));
                }, [a, i, c, l, t]),
                e.jsxs(ks, {
                    disabled: !0,
                    title: E.toUpperCase(hi.readOrEmpty(`${di}.title`)),
                    children: [
                        s.map((t, n) =>
                            e.jsxs(
                                r.Fragment,
                                { children: [n > 0 && e.jsx(qr, { classNames: { base: ui } }), e.jsx(li, { ...t })] },
                                t.vehicleId,
                            ),
                        ),
                        o.map((t, n) =>
                            e.jsxs(
                                r.Fragment,
                                {
                                    children: [
                                        (s.length > 0 || n > 0) && e.jsx(qr, { classNames: { base: ui } }),
                                        e.jsx(ci, { ...t }),
                                    ],
                                },
                                t.moduleId,
                            ),
                        ),
                    ],
                })
            );
        }),
        pi = { rootId: m.resolve('aliases').read((e) => e.battle_results.progression.ModuleVehicleUnlocks('resId')) },
        mi = new (class {
            constructor() {
                h(this, 'items', []);
            }
            add(e) {
                return (this.items.push([e, {}]), this);
            }
            addWithProps(e, t) {
                return (this.items.push([e, t]), this);
            }
            render(t) {
                return e.jsx(e.Fragment, {
                    children: this.items.reduceRight((e, [t, n], s) => r.createElement(t, { ...n, key: s }, e), t),
                });
            }
        })()
            .addWithProps(Pr, { options: pi })
            .addWithProps(
                function (t) {
                    return e.jsx(Br, {
                        children: e.jsx(Qn, {
                            overrides: t.soundsOverrides,
                            severity: t.soundSeverity,
                            silent: t.soundsOff,
                            children: t.children,
                        }),
                    });
                },
                {
                    soundsOverrides:
                        ((gi = {
                            showCheckMark: { 'mission-progress:checkmark': 'umg_hub_quest_complete' },
                            numbersShown: {
                                'mission-progress:received-value': 'gui_pbs_missions_progress_stats',
                                'mission-progress:progress-stats': 'gui_pbs_missions_progress_stats',
                            },
                        }),
                        Object.entries(gi).reduce(
                            (e, [t, n]) => (
                                (e[t] = (e) => {
                                    var r;
                                    e && e.target in n ? I.sound(n[e.target]) : null == (r = Gn[t]) || r.call(Gn, e);
                                }),
                                e
                            ),
                            {},
                        )),
                },
            );
    var gi, vi;
    function bi(t) {
        return mi.render(e.jsx(fi, { ...t }));
    }
    exports.plugin =
        ((vi = async ({ url: t }) => {
            const n = new re();
            return {
                async init() {
                    var r,
                        s,
                        o,
                        i,
                        a,
                        l = [];
                    try {
                        const c = _e(
                            `${(function (e, t = '/') {
                                let n = -1;
                                for (let r = 0; r < e.length; r++) {
                                    const s = e[r];
                                    if ((s === t && (n = r), '.' === s)) return e.slice(0, n);
                                }
                                return e;
                            })(t)}/vehicle_research.css`,
                        );
                        (n.add(c.cleanup), await c.promise.catch(console.error));
                        const h = J(pi, { name: 'ModuleVehicleProgressDataLayer' }),
                            f =
                                ((r = l),
                                (a = h.dispose),
                                null != (s = { [Symbol.dispose]: a })
                                    ? ('object' != typeof s && 'function' != typeof s && d('Object expected'),
                                      o && (i = s[u('asyncDispose')]),
                                      void 0 === i && (i = s[u('dispose')]),
                                      'function' != typeof i && d('Object not disposable'),
                                      r.push([o, i, s]))
                                    : o && r.push([o]),
                                h.readByPath('unlockedVehicles').some((e) => e.value.avgBattlesTillUnlock <= 0)),
                            p = h.readByPath('unlockedModule').length,
                            m = [];
                        return (
                            f &&
                                m.push({
                                    id: ge(),
                                    item: e.jsx(Sr, {
                                        path: 'battle_results.missionsProgress.notificationsTabs.aboutVehicle.vehicle',
                                    }),
                                }),
                            p > 0 &&
                                m.push({
                                    id: ge(),
                                    item: e.jsx(Sr, {
                                        path: 'battle_results.missionsProgress.notificationsTabs.aboutVehicle.module',
                                    }),
                                }),
                            { notifications: m, component: bi, categoryOrder: 650, completed: f || p > 0 }
                        );
                    } catch (f) {
                        var c = f,
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
                                            var i = r[1] && r[1].call(r[2]);
                                            if (r[0]) return Promise.resolve(i).then(o, (e) => (s(e), o()));
                                        } catch (a) {
                                            s(a);
                                        }
                                    if (n) throw t;
                                };
                            o();
                        })(l, c, h);
                    }
                },
                async destroy() {
                    n.dispose();
                },
            };
        }),
        async (e) => ({ ...(await vi(e)), id: e.id }));
});

export default exports;
