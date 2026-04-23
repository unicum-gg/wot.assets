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
    var l = (e, t) => ((t = Symbol[e]) ? t : Symbol.for('Symbol.' + e)),
        c = (e) => {
            throw TypeError(e);
        },
        u = (e, t, n) => {
            var s, r;
            null != t
                ? ('object' != typeof t && 'function' != typeof t && c('Object expected'),
                  n && (s = t[l('asyncDispose')]),
                  void 0 === s && ((s = t[l('dispose')]), n && (r = s)),
                  'function' != typeof s && c('Object not disposable'),
                  r &&
                      (s = function () {
                          try {
                              r.call(this);
                          } catch (e) {
                              return Promise.reject(e);
                          }
                      }),
                  e.push([n, s, t]))
                : n && e.push([n]);
            return t;
        };
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
    const p = d(s),
        m = t.createContainer();
    function f(e, t) {
        return e && e.length > 0 ? `${e}.${t}` : t;
    }
    function h(e, t) {
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
                            if ('object' == typeof e?.[t]) return e[t];
                        }, e);
                        if (!s) return;
                        return 'function' == typeof s[t] ? s[t]() : void 0;
                    }
                    throw new Error('R class with images field is not defined');
                })(e.startsWith('R.images') ? window : this.root, s);
            return void 0 === r ? ('silent' !== n && h(`Resource not found: ${s}`, n), t()) : r;
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
        y = { fractional: 0, woZeroDigits: 1 },
        v = Object.keys(b),
        w = Object.keys(y);
    const x = { full: _.FullTime, short: _.ShortTime };
    const E = {
        isNumberFormat: function (e) {
            return e in b;
        },
        formatNumber: function (e, t) {
            return window.formatters.getNumberFormat(t, b[e]);
        },
        numberFormats: v,
        isRealFormat: function (e) {
            return e in y;
        },
        formatReal: function (e, t, n = 2) {
            return window.formatters.getRealFormat(t, y[e], n);
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
    function C(e, t, n) {
        const s = e.split('.'),
            r = s[s.length - 1];
        if (!r) return;
        const o = s.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof e?.[t]) return e[t];
        }, n);
        return o && 'function' == typeof o[r] ? (t ? o[r](t) : o[r]()) : void 0;
    }
    class T {
        constructor(e = window.R.strings, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, n = 'silent') {
            const s = e.startsWith('R.strings') ? e : f(this.prefix, e),
                r = C(s, void 0, e.startsWith('R.strings') ? window : this.root);
            return void 0 === r ? ('silent' !== n && h(`Resource not found: ${s}`, n), t()) : r;
        }
        readOrEmpty(e, t = 'warn') {
            return this.readOr(e, () => '', t);
        }
        readOrThrow(e) {
            const t = e.startsWith('R.strings') ? e : f(this.prefix, e),
                n = C(t, void 0, e.startsWith('R.strings') ? window : this.root);
            if (void 0 === n) throw new Error(`Resource not found: ${t}`);
            return n;
        }
        plural(e, t) {
            return this.pluralOr(e, t, () => {});
        }
        pluralOr(e, t, n, s = 'silent') {
            const r = e.startsWith('R.strings') ? e : f(this.prefix, e),
                o = C(r, t, e.startsWith('R.strings') ? window : this.root);
            return void 0 === o ? ('silent' !== s && h(`Resource not found: ${r}`, s), n()) : o;
        }
        pluralOrEmpty(e, t, n = 'warn') {
            return this.pluralOr(e, t, () => '', n);
        }
    }
    class P {
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
                            if ('object' == typeof e?.[t]) return e[t];
                        }, e);
                        if (!s) return;
                        return 'function' == typeof s[t] ? s[t]() : void 0;
                    }
                    throw new Error('R class with videos field is not defined');
                })(e.startsWith('R.videos') ? window : this.root, s);
            return void 0 === r ? ('silent' !== n && h(`Resource not found: ${e}`, n), t()) : r;
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
    function S(e) {
        var t,
            n,
            s = '';
        if ('string' == typeof e || 'number' == typeof e) s += e;
        else if ('object' == typeof e)
            if (Array.isArray(e)) {
                var r = e.length;
                for (t = 0; t < r; t++) e[t] && (n = S(e[t])) && (s && (s += ' '), (s += n));
            } else for (n in e) e[n] && (s && (s += ' '), (s += n));
        return s;
    }
    function k() {
        for (var e, t, n = 0, s = '', r = arguments.length; n < r; n++)
            (e = arguments[n]) && (t = S(e)) && (s && (s += ' '), (s += t));
        return s;
    }
    m.register({
        strings: t.asFunction(() => new T()).singleton(),
        images: t.asFunction(() => new g(window.R.images.gui.maps.icons)).singleton(),
        atlases: t.asFunction(() => new g(window.R.atlases)).singleton(),
        videos: t.asFunction(() => new P(window.R.videos)).singleton(),
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
                            : h(`Sound not found: ${e}`, 'warn');
                    }
                },
            )
            .singleton(),
        langCode: t.asValue(R.strings.settings.LANGUAGE_CODE()),
        intl: t.asValue(E),
    });
    const N = {
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
        reverseEaseInOutCirc: (e) => 1 - N.easeInOutCirc(1 - e),
        easeOutBack(e) {
            const t = 1.70158;
            return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
        },
        bezier: (e, t, n, s) => (r) =>
            (1 - r) * (1 - r) * (1 - r) * e + 3 * (1 - r) * (1 - r) * r * t + 3 * (1 - r) * r * r * n + r * r * r * s,
        cubicBezier: (e, t, n, s) => (r) => {
            const o = (function (e, t, n, s = 1e-5) {
                let r = e;
                for (let o = 0; o < 8; o++) {
                    const o = A(r, t, n) - e;
                    if (Math.abs(o) < s) return r;
                    const i = I(r, t, n);
                    if (Math.abs(i) < s) break;
                    r -= o / i;
                }
                return r;
            })(r, e, n);
            return 3 * t * (1 - o) ** 2 * o + 3 * s * (1 - o) * o ** 2 + o ** 3;
        },
    };
    function A(e, t, n) {
        return 3 * t * (1 - e) ** 2 * e + 3 * n * (1 - e) * e ** 2 + e ** 3;
    }
    function I(e, t, n) {
        return 9 * t * (1 - e) ** 2 + 6 * (n - t) * (1 - e) * e + 3 * (1 - n) * e ** 2;
    }
    function M(e) {
        return e
            ? (function (e) {
                  return window.systemLocale.toUpperCase(e);
              })(e.charAt(0)) + e.slice(1)
            : '';
    }
    function j(e) {
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
    const O = { down: j('mousedown'), up: j('mouseup'), move: j('mousemove') };
    function B(e) {
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
                            o = O[t]((e) => n([e, 'outside']));
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
    const $ = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
        F = { ...Object.keys($).reduce((e, t) => ((e[t] = () => B($[t])), e), {}), sound: B },
        L = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
        U = {
            onTextureFrozen: j('self.onTextureFrozen'),
            onTextureReady: j('self.onTextureReady'),
            onDomBuilt: j('self.onDomBuilt'),
            onLoaded: j('self.onLoaded'),
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
            onDisplayChanged: j('self.onShowingStatusChanged'),
            onFocusUpdated: j('self.onFocusChanged'),
            onExternalPaddingsUpdated: j('self.onPaddingsUpdated'),
            children: {
                onAdded: j('children.onAdded'),
                onLoaded: j('children.onLoaded'),
                onRemoved: j('children.onRemoved'),
                onAttached: j('children.onAttached'),
                onTextureReady: j('children.onTextureReady'),
                onRequestPosition: j('children.requestPosition'),
            },
        },
        z = 1;
    function q(e) {
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
                const e = q(s);
                void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
            }
            return t;
        },
        G = (e, t) => {
            const n = 'GFViewEventProxy';
            if (void 0 !== t) {
                const { args: s, ...r } = t;
                return void 0 !== s
                    ? viewEnv.handleViewEvent({ __Type: n, type: e, ...r, arguments: V(s) })
                    : viewEnv.handleViewEvent({ __Type: n, type: e, ...r });
            }
            return viewEnv.handleViewEvent({ __Type: n, type: e });
        },
        H = new Map(),
        Q = {
            tooltip: {
                open(e, t, n = 0, s) {
                    (G(z, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: s }),
                        H.set(`${e}-${t}`, { targetID: e, contentID: t }));
                },
                hide(e, t, n = 0) {
                    (G(z, { contentID: t, decoratorID: n, targetID: e, on: !1 }), H.delete(`${e}-${t}`));
                },
                hideAll() {
                    const e = Array.from(H.values());
                    for (const t of e) this.hide(t.targetID, t.contentID);
                },
            },
        };
    Object.keys(L).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === L[t]), e), {});
    class W {
        listeners = new Set();
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
    function X(
        { initializer: e = !0, rootId: t = 0, getRoot: n = Y, context: s = 'model' } = {},
        { name: r = 'DataLayer' } = {},
    ) {
        const o = new Map(),
            i = { subscribersNotified: new W() },
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
                throw new Error(`Failure readByPath in ${r}. Root id: ${t}. Context: ${s}:\n${o}\n`);
            }
        };
        function u(e) {
            viewEnv.removeDataChangedCallback(e, t) ? o.delete(e) : console.error("Can't remove callback by id:", e);
        }
        return {
            subscribe: (n, r) => {
                const i = (function (e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                })('string' == typeof r ? `${s}.${r}` : s, t, !0);
                return (o.set(i, n), e && n(c(r), []), i);
            },
            readByPath: c,
            readSafeByPath: (e) => {
                const t = l();
                return 'string' != typeof e || 0 === e.length
                    ? t
                    : e.split('.').reduce((e, t) => {
                          const n = e?.[t];
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
    function Z(e, t) {
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
    function K() {}
    function J(e) {
        return e;
    }
    function ee() {
        return !1;
    }
    function te() {
        throw new Error('Unreachable absurd brach');
    }
    class ne {
        _disposes = new Set();
        add(e) {
            return (this._disposes.add(e), this);
        }
        remove(e) {
            return (this._disposes.delete(e), this);
        }
        dispose = () => {
            for (const e of this._disposes) e();
        };
    }
    function se(e, t, n, s) {
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
                (u.call(d.prototype),
                    u.call(f.prototype),
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
    const re = fetch;
    function oe(e, t) {
        return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
    }
    const ie = {
        NONE: 'NONE',
        ...((ae = [
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
        ]),
        ae.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
        ...oe(
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
        ...oe(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
        ...oe(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
        ...oe(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
        ...oe(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
        ...oe(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
        ...oe(['Up', 'Down'], 'Page'),
        ...oe(['Left', 'Right'], 'Bracket'),
    };
    var ae;
    new Set(Object.values(ie));
    const le = function (e, t) {
        if (!(t >= e.length)) return Array.isArray(e) ? e[t] : e[t]?.value;
    };
    function ce(e, t) {
        return Array.isArray(e) ? e.map(t) : e.map((e, n, s) => t(e?.value, n, s));
    }
    function ue(e, t, n) {
        const s = [];
        for (let r = 0; r < e.length; r++) {
            const o = le(e, r);
            t(o, r, e) && s.push(n(o, r, e));
        }
        return s;
    }
    function de(e) {
        const t = [];
        return (
            (function (e, t) {
                for (let n = 0; n < e.length; n++) t(le(e, n), n, e);
            })(e, (e) => {
                !1 !== e && null != e && t.push(e);
            }),
            t
        );
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
    function me(e, t) {
        e || console.error(t || 'Assertion failed');
    }
    function fe(e, t, n) {
        return 'function' == typeof t ? he(0, e, t) : (me(void 0 !== n, 'fn must be defined'), he(e, t, n));
    }
    function he(e, t, n) {
        const s = new Array(t - e);
        for (let r = e; r < t; r++) s[r] = n(r);
        return s;
    }
    me.log = function (e, t) {
        e || console.error(t || 'Assertion failed');
    };
    function ge(e) {
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
    ['ko', 'no'].includes(m.resolve('langCode'));
    const _e = {
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
        th: function (e) {
            const t = [],
                n = e
                    .replace(/&nbsp;/g, ' ')
                    .matchAll(
                        /[【「(（『"《]?[\u0E00-\u0E7F%](?:[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E。!?,.:、…・/ー—–!%+?）)】」"》』]+)?|[「【(（『《"]?\d+(?:,\d{3})*(?:-\d+(?:,\d{3})*)?(?:\s*[a-zA-Z\u0E00-\u0E7F/%]+)?(?:[。.,，、:;：；!?）)】」"》・%)、]+)?|[「【(（『《"]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?"》】」）)』]+)?|[\u00A0 ]|[^\s]/gu,
                    );
            for (const [s] of n)
                /^\s+$/.test(s)
                    ? t.length
                        ? (t[t.length - 1] += s)
                        : t.push(s)
                    : 1 === t.length && t[0]?.startsWith('  ')
                      ? (t[0] = ' ' + s)
                      : t.push(s);
            return t;
        },
    };
    function be(e) {
        return e.split(' ');
    }
    const ye = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko', 'th']);
    function ve() {
        return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    }
    var we = ((e) => ((e.Done = 'done'), (e.Locked = 'notAvailable'), (e.Active = ''), e))(we || {}),
        xe = ((e) => (
            (e.EASY = 'easy'),
            (e.MEDIUM = 'medium'),
            (e.HARD = 'hard'),
            (e.BONUS = 'bonus'),
            (e.PREMIUM = 'premium'),
            (e.EPIC = 'epic'),
            e
        ))(xe || {});
    const Ee = (e) => {
            const t = s.useRef(void 0);
            return (
                s.useEffect(() => {
                    t.current = e;
                }, [e]),
                t.current
            );
        },
        Re = [];
    function Ce(e) {
        const t = s.useRef(e);
        return (
            s.useLayoutEffect(() => {
                t.current = e;
            }),
            s.useCallback((...e) => (0, t.current)(...e), Re)
        );
    }
    function Te(e) {
        s.useEffect(() => e, []);
    }
    s.createContext(void 0);
    var Pe = qe(),
        Se = (e) => Fe(e, Pe),
        ke = qe();
    Se.write = (e) => Fe(e, ke);
    var Ne = qe();
    Se.onStart = (e) => Fe(e, Ne);
    var Ae = qe();
    Se.onFrame = (e) => Fe(e, Ae);
    var Ie = qe();
    Se.onFinish = (e) => Fe(e, Ie);
    var Me = [];
    Se.setTimeout = (e, t) => {
        const n = Se.now() + t,
            s = () => {
                const e = Me.findIndex((e) => e.cancel == s);
                (~e && Me.splice(e, 1), (Be -= ~e ? 1 : 0));
            },
            r = { time: n, handler: e, cancel: s };
        return (Me.splice(je(n), 0, r), (Be += 1), Le(), r);
    };
    var je = (e) => ~(~Me.findIndex((t) => t.time > e) || ~Me.length);
    ((Se.cancel = (e) => {
        (Ne.delete(e), Ae.delete(e), Ie.delete(e), Pe.delete(e), ke.delete(e));
    }),
        (Se.sync = (e) => {
            (($e = !0), Se.batchedUpdates(e), ($e = !1));
        }),
        (Se.throttle = (e) => {
            let t;
            function n() {
                try {
                    e(...t);
                } finally {
                    t = null;
                }
            }
            function s(...e) {
                ((t = e), Se.onStart(n));
            }
            return (
                (s.handler = e),
                (s.cancel = () => {
                    (Ne.delete(n), (t = null));
                }),
                s
            );
        }));
    var De = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
    ((Se.use = (e) => (De = e)),
        (Se.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
        (Se.batchedUpdates = (e) => e()),
        (Se.catch = console.error),
        (Se.frameLoop = 'always'),
        (Se.advance = () => {
            'demand' !== Se.frameLoop
                ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
                : ze();
        }));
    var Oe = -1,
        Be = 0,
        $e = !1;
    function Fe(e, t) {
        $e ? (t.delete(e), e(0)) : (t.add(e), Le());
    }
    function Le() {
        Oe < 0 && ((Oe = 0), 'demand' !== Se.frameLoop && De(Ue));
    }
    function Ue() {
        ~Oe && (De(Ue), Se.batchedUpdates(ze));
    }
    function ze() {
        const e = Oe;
        Oe = Se.now();
        const t = je(Oe);
        (t && (Ve(Me.splice(0, t), (e) => e.handler()), (Be -= t)),
            Be
                ? (Ne.flush(), Pe.flush(e ? Math.min(64, Oe - e) : 16.667), Ae.flush(), ke.flush(), Ie.flush())
                : (Oe = -1));
    }
    function qe() {
        let e = new Set(),
            t = e;
        return {
            add(n) {
                ((Be += t != e || e.has(n) ? 0 : 1), e.add(n));
            },
            delete: (n) => ((Be -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
            flush(n) {
                t.size && ((e = new Set()), (Be -= t.size), Ve(t, (t) => t(n) && e.add(t)), (Be += e.size), (t = e));
            },
        };
    }
    function Ve(e, t) {
        e.forEach((e) => {
            try {
                t(e);
            } catch (n) {
                Se.catch(n);
            }
        });
    }
    var Ge = Object.defineProperty,
        He = {};
    function Qe() {}
    ((e, t) => {
        for (var n in t) Ge(e, n, { get: t[n], enumerable: !0 });
    })(He, {
        assign: () => at,
        colors: () => rt,
        createStringInterpolator: () => et,
        skipAnimation: () => ot,
        to: () => tt,
        willAdvance: () => it,
    });
    var We = {
        arr: Array.isArray,
        obj: (e) => !!e && 'Object' === e.constructor.name,
        fun: (e) => 'function' == typeof e,
        str: (e) => 'string' == typeof e,
        num: (e) => 'number' == typeof e,
        und: (e) => void 0 === e,
    };
    function Ye(e, t) {
        if (We.arr(e)) {
            if (!We.arr(t) || e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
        }
        return e === t;
    }
    var Xe = (e, t) => e.forEach(t);
    function Ze(e, t, n) {
        if (We.arr(e)) for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s);
    }
    var Ke = (e) => (We.und(e) ? [] : We.arr(e) ? e : [e]);
    function Je(e, t) {
        if (e.size) {
            const n = Array.from(e);
            (e.clear(), Xe(n, t));
        }
    }
    var et,
        tt,
        nt = (e, ...t) => Je(e, (e) => e(...t)),
        st = () =>
            'undefined' == typeof window ||
            !window.navigator ||
            /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        rt = null,
        ot = !1,
        it = Qe,
        at = (e) => {
            (e.to && (tt = e.to),
                e.now && (Se.now = e.now),
                void 0 !== e.colors && (rt = e.colors),
                null != e.skipAnimation && (ot = e.skipAnimation),
                e.createStringInterpolator && (et = e.createStringInterpolator),
                e.requestAnimationFrame && Se.use(e.requestAnimationFrame),
                e.batchedUpdates && (Se.batchedUpdates = e.batchedUpdates),
                e.willAdvance && (it = e.willAdvance),
                e.frameLoop && (Se.frameLoop = e.frameLoop));
        },
        lt = new Set(),
        ct = [],
        ut = [],
        dt = 0,
        pt = {
            get idle() {
                return !lt.size && !ct.length;
            },
            start(e) {
                dt > e.priority ? (lt.add(e), Se.onStart(mt)) : (ft(e), Se(gt));
            },
            advance: gt,
            sort(e) {
                if (dt) Se.onFrame(() => pt.sort(e));
                else {
                    const t = ct.indexOf(e);
                    ~t && (ct.splice(t, 1), ht(e));
                }
            },
            clear() {
                ((ct = []), lt.clear());
            },
        };
    function mt() {
        (lt.forEach(ft), lt.clear(), Se(gt));
    }
    function ft(e) {
        ct.includes(e) || ht(e);
    }
    function ht(e) {
        ct.splice(
            (function (e, t) {
                const n = e.findIndex(t);
                return n < 0 ? e.length : n;
            })(ct, (t) => t.priority > e.priority),
            0,
            e,
        );
    }
    function gt(e) {
        const t = ut;
        for (let n = 0; n < ct.length; n++) {
            const s = ct[n];
            ((dt = s.priority), s.idle || (it(s), s.advance(e), s.idle || t.push(s)));
        }
        return ((dt = 0), ((ut = ct).length = 0), (ct = t).length > 0);
    }
    var _t = '[-+]?\\d*\\.?\\d+',
        bt = _t + '%';
    function yt(...e) {
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var vt = new RegExp('rgb' + yt(_t, _t, _t)),
        wt = new RegExp('rgba' + yt(_t, _t, _t, _t)),
        xt = new RegExp('hsl' + yt(_t, bt, bt)),
        Et = new RegExp('hsla' + yt(_t, bt, bt, _t)),
        Rt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ct = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Tt = /^#([0-9a-fA-F]{6})$/,
        Pt = /^#([0-9a-fA-F]{8})$/;
    function St(e, t, n) {
        return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        );
    }
    function kt(e, t, n) {
        const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
            r = 2 * n - s,
            o = St(r, s, e + 1 / 3),
            i = St(r, s, e),
            a = St(r, s, e - 1 / 3);
        return (Math.round(255 * o) << 24) | (Math.round(255 * i) << 16) | (Math.round(255 * a) << 8);
    }
    function Nt(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function At(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function It(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function Mt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
    }
    function jt(e) {
        let t = (function (e) {
            let t;
            return 'number' == typeof e
                ? e >>> 0 === e && e >= 0 && e <= 4294967295
                    ? e
                    : null
                : (t = Tt.exec(e))
                  ? parseInt(t[1] + 'ff', 16) >>> 0
                  : rt && void 0 !== rt[e]
                    ? rt[e]
                    : (t = vt.exec(e))
                      ? ((Nt(t[1]) << 24) | (Nt(t[2]) << 16) | (Nt(t[3]) << 8) | 255) >>> 0
                      : (t = wt.exec(e))
                        ? ((Nt(t[1]) << 24) | (Nt(t[2]) << 16) | (Nt(t[3]) << 8) | It(t[4])) >>> 0
                        : (t = Rt.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                          : (t = Pt.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = Ct.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = xt.exec(e))
                                ? (255 | kt(At(t[1]), Mt(t[2]), Mt(t[3]))) >>> 0
                                : (t = Et.exec(e))
                                  ? (kt(At(t[1]), Mt(t[2]), Mt(t[3])) | It(t[4])) >>> 0
                                  : null;
        })(e);
        if (null === t) return e;
        t = t || 0;
        return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
    }
    var Dt = (e, t, n) => {
        if (We.fun(e)) return e;
        if (We.arr(e)) return Dt({ range: e, output: t, extrapolate: n });
        if (We.str(e.output[0])) return et(e);
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
                let c = l ? l(e) : e;
                if (c < t) {
                    if ('identity' === i) return c;
                    'clamp' === i && (c = t);
                }
                if (c > n) {
                    if ('identity' === a) return c;
                    'clamp' === a && (c = n);
                }
                if (s === r) return s;
                if (t === n) return e <= t ? s : r;
                t === -1 / 0 ? (c = -c) : n === 1 / 0 ? (c -= t) : (c = (c - t) / (n - t));
                ((c = o(c)), s === -1 / 0 ? (c = -c) : r === 1 / 0 ? (c += s) : (c = c * (r - s) + s));
                return c;
            })(e, o[t], o[t + 1], r[t], r[t + 1], l, i, a, s.map);
        };
    };
    var Ot = { linear: (e) => e, easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2) },
        Bt = Symbol.for('FluidValue.get'),
        $t = Symbol.for('FluidValue.observers'),
        Ft = (e) => Boolean(e && e[Bt]),
        Lt = (e) => (e && e[Bt] ? e[Bt]() : e),
        Ut = (e) => e[$t] || null;
    function zt(e, t) {
        const n = e[$t];
        n &&
            n.forEach((e) => {
                !(function (e, t) {
                    e.eventObserved ? e.eventObserved(t) : e(t);
                })(e, t);
            });
    }
    var qt = class {
            constructor(e) {
                if (!e && !(e = this.get)) throw Error('Unknown getter');
                Vt(this, e);
            }
        },
        Vt = (e, t) => Wt(e, Bt, t);
    function Gt(e, t) {
        if (e[Bt]) {
            let n = e[$t];
            (n || Wt(e, $t, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
        }
        return t;
    }
    function Ht(e, t) {
        const n = e[$t];
        if (n && n.has(t)) {
            const s = n.size - 1;
            (s ? n.delete(t) : (e[$t] = null), e.observerRemoved && e.observerRemoved(s, t));
        }
    }
    var Qt,
        Wt = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
        Yt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Xt = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Zt = new RegExp(`(${Yt.source})(%|[a-z]+)`, 'i'),
        Kt = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Jt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        en = (e) => {
            const [t, n] = tn(e);
            if (!t || st()) return e;
            const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
            if (s) return s.trim();
            if (n && n.startsWith('--')) {
                const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
                return t || e;
            }
            return n && Jt.test(n) ? en(n) : n || e;
        },
        tn = (e) => {
            const t = Jt.exec(e);
            if (!t) return [,];
            const [, n, s] = t;
            return [n, s];
        },
        nn = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
        sn = (e) => {
            Qt || (Qt = rt ? new RegExp(`(${Object.keys(rt).join('|')})(?!\\w)`, 'g') : /^\b$/);
            const t = e.output.map((e) => Lt(e).replace(Jt, en).replace(Xt, jt).replace(Qt, jt)),
                n = t.map((e) => e.match(Yt).map(Number)),
                s = n[0].map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                ),
                r = s.map((t) => Dt({ ...e, output: t }));
            return (e) => {
                const n = !Zt.test(t[0]) && t.find((e) => Zt.test(e))?.replace(Yt, '');
                let s = 0;
                return t[0].replace(Yt, () => `${r[s++](e)}${n || ''}`).replace(Kt, nn);
            };
        },
        rn = 'react-spring: ',
        on = (e) => {
            const t = e;
            let n = !1;
            if ('function' != typeof t) throw new TypeError(`${rn}once requires a function parameter`);
            return (...e) => {
                n || (t(...e), (n = !0));
            };
        },
        an = on(console.warn);
    var ln = on(console.warn);
    function cn(e) {
        return We.str(e) && ('#' == e[0] || /\d/.test(e) || (!st() && Jt.test(e)) || e in (rt || {}));
    }
    var un = st() ? s.useEffect : s.useLayoutEffect;
    function dn() {
        const e = s.useState()[1],
            t = (() => {
                const e = s.useRef(!1);
                return (
                    un(
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
    var pn = (e) => s.useEffect(e, mn),
        mn = [];
    function fn(e) {
        const t = s.useRef();
        return (
            s.useEffect(() => {
                t.current = e;
            }),
            t.current
        );
    }
    var hn = Symbol.for('Animated:node'),
        gn = (e) => e && e[hn],
        _n = (e, t) => {
            return (
                (n = e),
                (s = hn),
                (r = t),
                Object.defineProperty(n, s, { value: r, writable: !0, configurable: !0 })
            );
            var n, s, r;
        },
        bn = (e) => e && e[hn] && e[hn].getPayload(),
        yn = class {
            constructor() {
                _n(this, this);
            }
            getPayload() {
                return this.payload || [];
            }
        },
        vn = class extends yn {
            constructor(e) {
                (super(),
                    (this._value = e),
                    (this.done = !0),
                    (this.durationProgress = 0),
                    We.num(this._value) && (this.lastPosition = this._value));
            }
            static create(e) {
                return new vn(e);
            }
            getPayload() {
                return [this];
            }
            getValue() {
                return this._value;
            }
            setValue(e, t) {
                return (
                    We.num(e) &&
                        ((this.lastPosition = e),
                        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                    this._value !== e && ((this._value = e), !0)
                );
            }
            reset() {
                const { done: e } = this;
                ((this.done = !1),
                    We.num(this._value) &&
                        ((this.elapsedTime = 0),
                        (this.durationProgress = 0),
                        (this.lastPosition = this._value),
                        e && (this.lastVelocity = null),
                        (this.v0 = null)));
            }
        },
        wn = class extends vn {
            constructor(e) {
                (super(0), (this._string = null), (this._toString = Dt({ output: [e, e] })));
            }
            static create(e) {
                return new wn(e);
            }
            getValue() {
                const e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }
            setValue(e) {
                if (We.str(e)) {
                    if (e == this._string) return !1;
                    ((this._string = e), (this._value = 1));
                } else {
                    if (!super.setValue(e)) return !1;
                    this._string = null;
                }
                return !0;
            }
            reset(e) {
                (e && (this._toString = Dt({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
            }
        },
        xn = { dependencies: null },
        En = class extends yn {
            constructor(e) {
                (super(), (this.source = e), this.setValue(e));
            }
            getValue(e) {
                const t = {};
                return (
                    Ze(this.source, (n, s) => {
                        var r;
                        (r = n) && r[hn] === r ? (t[s] = n.getValue(e)) : Ft(n) ? (t[s] = Lt(n)) : e || (t[s] = n);
                    }),
                    t
                );
            }
            setValue(e) {
                ((this.source = e), (this.payload = this._makePayload(e)));
            }
            reset() {
                this.payload && Xe(this.payload, (e) => e.reset());
            }
            _makePayload(e) {
                if (e) {
                    const t = new Set();
                    return (Ze(e, this._addToPayload, t), Array.from(t));
                }
            }
            _addToPayload(e) {
                xn.dependencies && Ft(e) && xn.dependencies.add(e);
                const t = bn(e);
                t && Xe(t, (e) => this.add(e));
            }
        },
        Rn = class extends En {
            constructor(e) {
                super(e);
            }
            static create(e) {
                return new Rn(e);
            }
            getValue() {
                return this.source.map((e) => e.getValue());
            }
            setValue(e) {
                const t = this.getPayload();
                return e.length == t.length
                    ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                    : (super.setValue(e.map(Cn)), !0);
            }
        };
    function Cn(e) {
        return (cn(e) ? wn : vn).create(e);
    }
    function Tn(e) {
        const t = gn(e);
        return t ? t.constructor : We.arr(e) ? Rn : cn(e) ? wn : vn;
    }
    var Pn = (e, t) => {
            const n = !We.fun(e) || (e.prototype && e.prototype.isReactComponent);
            return s.forwardRef((r, o) => {
                const i = s.useRef(null),
                    a =
                        n &&
                        s.useCallback(
                            (e) => {
                                i.current = (function (e, t) {
                                    e && (We.fun(e) ? e(t) : (e.current = t));
                                    return t;
                                })(o, e);
                            },
                            [o],
                        ),
                    [l, c] = (function (e, t) {
                        const n = new Set();
                        ((xn.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                        return ((e = new En(e)), (xn.dependencies = null), [e, n]);
                    })(r, t),
                    u = dn(),
                    d = () => {
                        const e = i.current;
                        if (n && !e) return;
                        !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && u();
                    },
                    m = new Sn(d, c),
                    f = s.useRef();
                (un(
                    () => (
                        (f.current = m),
                        Xe(c, (e) => Gt(e, m)),
                        () => {
                            f.current && (Xe(f.current.deps, (e) => Ht(e, f.current)), Se.cancel(f.current.update));
                        }
                    ),
                ),
                    s.useEffect(d, []),
                    pn(() => () => {
                        const e = f.current;
                        Xe(e.deps, (t) => Ht(t, e));
                    }));
                const h = t.getComponentProps(l.getValue());
                return p.createElement(e, { ...h, ref: a });
            });
        },
        Sn = class {
            constructor(e, t) {
                ((this.update = e), (this.deps = t));
            }
            eventObserved(e) {
                'change' == e.type && Se.write(this.update);
            }
        };
    var kn = Symbol.for('AnimatedComponent'),
        Nn = (e) => (We.str(e) ? e : e && We.str(e.displayName) ? e.displayName : (We.fun(e) && e.name) || null);
    function An(e, ...t) {
        return We.fun(e) ? e(...t) : e;
    }
    var In = (e, t) => !0 === e || !!(t && e && (We.fun(e) ? e(t) : Ke(e).includes(t))),
        Mn = (e, t) => (We.obj(e) ? t && e[t] : e),
        jn = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
        Dn = (e) => e,
        On = (e, t = Dn) => {
            let n = Bn;
            e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
            const s = {};
            for (const r of n) {
                const n = t(e[r], r);
                We.und(n) || (s[r] = n);
            }
            return s;
        },
        Bn = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
        $n = {
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
    function Fn(e) {
        const t = (function (e) {
            const t = {};
            let n = 0;
            if (
                (Ze(e, (e, s) => {
                    $n[s] || ((t[s] = e), n++);
                }),
                n)
            )
                return t;
        })(e);
        if (t) {
            const n = { to: t };
            return (Ze(e, (e, s) => s in t || (n[s] = e)), n);
        }
        return { ...e };
    }
    function Ln(e) {
        return (
            (e = Lt(e)),
            We.arr(e) ? e.map(Ln) : cn(e) ? He.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
        );
    }
    function Un(e) {
        for (const t in e) return !0;
        return !1;
    }
    function zn(e) {
        return We.fun(e) || (We.arr(e) && We.obj(e[0]));
    }
    function qn(e, t) {
        (e.ref?.delete(e), t?.delete(e));
    }
    function Vn(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), (e.ref = t));
    }
    var Gn = { tension: 170, friction: 26, mass: 1, damping: 1, easing: Ot.linear, clamp: !1 },
        Hn = class {
            constructor() {
                ((this.velocity = 0), Object.assign(this, Gn));
            }
        };
    function Qn(e, t) {
        if (We.und(t.decay)) {
            const n = !We.und(t.tension) || !We.und(t.friction);
            ((!n && We.und(t.frequency) && We.und(t.damping) && We.und(t.mass)) ||
                ((e.duration = void 0), (e.decay = void 0)),
                n && (e.frequency = void 0));
        } else e.duration = void 0;
    }
    var Wn = [],
        Yn = class {
            constructor() {
                ((this.changed = !1),
                    (this.values = Wn),
                    (this.toValues = null),
                    (this.fromValues = Wn),
                    (this.config = new Hn()),
                    (this.immediate = !1));
            }
        };
    function Xn(e, { key: t, props: n, defaultProps: s, state: r, actions: o }) {
        return new Promise((i, a) => {
            let l,
                c,
                u = In(n.cancel ?? s?.cancel, t);
            if (u) m();
            else {
                We.und(n.pause) || (r.paused = In(n.pause, t));
                let e = s?.pause;
                (!0 !== e && (e = r.paused || In(e, t)),
                    (l = An(n.delay || 0, t)),
                    e ? (r.resumeQueue.add(p), o.pause()) : (o.resume(), p()));
            }
            function d() {
                (r.resumeQueue.add(p), r.timeouts.delete(c), c.cancel(), (l = c.time - Se.now()));
            }
            function p() {
                l > 0 && !He.skipAnimation
                    ? ((r.delayed = !0), (c = Se.setTimeout(m, l)), r.pauseQueue.add(d), r.timeouts.add(c))
                    : m();
            }
            function m() {
                (r.delayed && (r.delayed = !1),
                    r.pauseQueue.delete(d),
                    r.timeouts.delete(c),
                    e <= (r.cancelId || 0) && (u = !0));
                try {
                    o.start({ ...n, callId: e, cancel: u }, i);
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
                  const c = On(t, (e, t) => ('onRest' === t ? void 0 : e));
                  let u, d;
                  const p = new Promise((e, t) => ((u = e), (d = t))),
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
                              const a = We.obj(e) ? { ...e } : { ...t, to: e };
                              ((a.parentId = r),
                                  Ze(c, (e, t) => {
                                      We.und(a[t]) && (a[t] = e);
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
                      ((t = We.arr(e)
                          ? (async (e) => {
                                for (const t of e) await f(t);
                            })(e)
                          : Promise.resolve(e(f, s.stop.bind(s)))),
                          await Promise.all([t.then(u), p]),
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
                      We.fun(i) &&
                          Se.batchedUpdates(() => {
                              i(h, s, s.item);
                          }),
                      h
                  );
              })())
            : l;
    }
    function ns(e, t) {
        (Je(e.timeouts, (e) => e.cancel()),
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
        as = class extends qt {
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
                const e = gn(this);
                return e && e.getValue();
            }
            to(...e) {
                return He.to(this, e);
            }
            interpolate(...e) {
                return (an(`${rn}The "interpolate" function is deprecated in v9 (use "to" instead)`), He.to(this, e));
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
                (this.idle || pt.sort(this), zt(this, { type: 'priority', parent: this, priority: e }));
            }
        },
        ls = Symbol.for('SpringPhase'),
        cs = (e) => (1 & e[ls]) > 0,
        us = (e) => (2 & e[ls]) > 0,
        ds = (e) => (4 & e[ls]) > 0,
        ps = (e, t) => (t ? (e[ls] |= 3) : (e[ls] &= -3)),
        ms = (e, t) => (t ? (e[ls] |= 4) : (e[ls] &= -5)),
        fs = class extends as {
            constructor(e, t) {
                if (
                    (super(),
                    (this.animation = new Yn()),
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
                    !We.und(e) || !We.und(t))
                ) {
                    const n = We.obj(e) ? { ...e } : { ...t, from: e };
                    (We.und(n.default) && (n.default = !0), this.start(n));
                }
            }
            get idle() {
                return !(us(this) || this._state.asyncTo) || ds(this);
            }
            get goal() {
                return Lt(this.animation.to);
            }
            get velocity() {
                const e = gn(this);
                return e instanceof vn ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
            }
            get hasAnimated() {
                return cs(this);
            }
            get isAnimating() {
                return us(this);
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
                    i = bn(s.to);
                (!i && Ft(s.to) && (r = Ke(Lt(s.to))),
                    s.values.forEach((a, l) => {
                        if (a.done) return;
                        const c = a.constructor == wn ? 1 : i ? i[l].lastPosition : r[l];
                        let u = s.immediate,
                            d = c;
                        if (!u) {
                            if (((d = a.lastPosition), o.tension <= 0)) return void (a.done = !0);
                            let t = (a.elapsedTime += e);
                            const n = s.fromValues[l],
                                r = null != a.v0 ? a.v0 : (a.v0 = We.arr(o.velocity) ? o.velocity[l] : o.velocity);
                            let i;
                            const p = o.precision || (n == c ? 0.005 : Math.min(1, 0.001 * Math.abs(c - n)));
                            if (We.und(o.duration))
                                if (o.decay) {
                                    const e = !0 === o.decay ? 0.998 : o.decay,
                                        s = Math.exp(-(1 - e) * t);
                                    ((d = n + (r / (1 - e)) * (1 - s)),
                                        (u = Math.abs(a.lastPosition - d) <= p),
                                        (i = r * s));
                                } else {
                                    i = null == a.lastVelocity ? r : a.lastVelocity;
                                    const t = o.restVelocity || p / 10,
                                        s = o.clamp ? 0 : o.bounce,
                                        l = !We.und(s),
                                        m = n == c ? a.v0 > 0 : n < c;
                                    let f,
                                        h = !1;
                                    const g = 1,
                                        _ = Math.ceil(e / g);
                                    for (
                                        let e = 0;
                                        e < _ && ((f = Math.abs(i) > t), f || ((u = Math.abs(c - d) <= p), !u));
                                        ++e
                                    ) {
                                        l && ((h = d == c || d > c == m), h && ((i = -i * s), (d = c)));
                                        ((i += ((1e-6 * -o.tension * (d - c) + 0.001 * -o.friction * i) / o.mass) * g),
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
                                    (d = n + o.easing(s) * (c - n)),
                                    (i = (d - a.lastPosition) / e),
                                    (u = 1 == s));
                            }
                            ((a.lastVelocity = i),
                                Number.isNaN(d) && (console.warn('Got NaN while animating:', this), (u = !0)));
                        }
                        (i && !i[l].done && (u = !1), u ? (a.done = !0) : (t = !1), a.setValue(d, o.round) && (n = !0));
                    }));
                const a = gn(this),
                    l = a.getValue();
                if (t) {
                    const e = Lt(s.to);
                    ((l === e && !n) || o.decay
                        ? n && o.decay && this._onChange(l)
                        : (a.setValue(e), this._onChange(e)),
                        this._stop());
                } else n && this._onChange(l);
            }
            set(e) {
                return (
                    Se.batchedUpdates(() => {
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
                if (us(this)) {
                    const { to: e, config: t } = this.animation;
                    Se.batchedUpdates(() => {
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
                    We.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [We.obj(e) ? e : { ...t, to: e }]),
                    Promise.all(n.map((e) => this._update(e))).then((e) => Zn(this, e))
                );
            }
            stop(e) {
                const { to: t } = this.animation;
                return (
                    this._focus(this.get()),
                    ns(this._state, e && this._lastCallId),
                    Se.batchedUpdates(() => this._stop(t, e)),
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
                ((n = We.obj(n) ? n[t] : n),
                    (null == n || zn(n)) && (n = void 0),
                    (s = We.obj(s) ? s[t] : s),
                    null == s && (s = void 0));
                const r = { to: n, from: s };
                return (
                    cs(this) ||
                        (e.reverse && ([n, s] = [s, n]),
                        (s = Lt(s)),
                        We.und(s) ? gn(this) || this._set(n) : this._set(s)),
                    r
                );
            }
            _update({ ...e }, t) {
                const { key: n, defaultProps: s } = this;
                (e.default &&
                    Object.assign(
                        s,
                        On(e, (e, t) => (/^on/.test(t) ? Mn(e, n) : e)),
                    ),
                    ws(this, e, 'onProps'),
                    xs(this, 'onProps', e, this));
                const r = this._prepareNode(e);
                if (Object.isFrozen(this))
                    throw Error(
                        'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                    );
                const o = this._state;
                return Xn(++this._lastCallId, {
                    key: n,
                    props: e,
                    defaultProps: s,
                    state: o,
                    actions: {
                        pause: () => {
                            ds(this) ||
                                (ms(this, !0),
                                nt(o.pauseQueue),
                                xs(this, 'onPause', Jn(this, hs(this, this.animation.to)), this));
                        },
                        resume: () => {
                            ds(this) &&
                                (ms(this, !1),
                                us(this) && this._resume(),
                                nt(o.resumeQueue),
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
                const s = !We.und(e.to),
                    r = !We.und(e.from);
                if (s || r) {
                    if (!(t.callId > this._lastToId)) return n(es(this));
                    this._lastToId = t.callId;
                }
                const { key: o, defaultProps: i, animation: a } = this,
                    { to: l, from: c } = a;
                let { to: u = l, from: d = c } = e;
                (!r || s || (t.default && !We.und(u)) || (u = d), t.reverse && ([u, d] = [d, u]));
                const p = !Ye(d, c);
                (p && (a.from = d), (d = Lt(d)));
                const m = !Ye(u, l);
                m && this._focus(u);
                const f = zn(t.to),
                    { config: h } = a,
                    { decay: g, velocity: _ } = h;
                ((s || r) && (h.velocity = 0),
                    t.config &&
                        !f &&
                        (function (e, t, n) {
                            (n && (Qn((n = { ...n }), t), (t = { ...n, ...t })), Qn(e, t), Object.assign(e, t));
                            for (const i in Gn) null == e[i] && (e[i] = Gn[i]);
                            let { frequency: s, damping: r } = e;
                            const { mass: o } = e;
                            We.und(s) ||
                                (s < 0.01 && (s = 0.01),
                                r < 0 && (r = 0),
                                (e.tension = Math.pow((2 * Math.PI) / s, 2) * o),
                                (e.friction = (4 * Math.PI * r * o) / s));
                        })(h, An(t.config, o), t.config !== i.config ? An(i.config, o) : void 0));
                let b = gn(this);
                if (!b || We.und(u)) return n(Jn(this, !0));
                const y = We.und(t.reset) ? r && !t.default : !We.und(d) && In(t.reset, o),
                    v = y ? d : this.get(),
                    w = Ln(u),
                    x = We.num(w) || We.arr(w) || cn(w),
                    E = !f && (!x || In(i.immediate || t.immediate, o));
                if (m) {
                    const e = Tn(u);
                    if (e !== b.constructor) {
                        if (!E)
                            throw Error(
                                `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`,
                            );
                        b = this._set(w);
                    }
                }
                const R = b.constructor;
                let C = Ft(u),
                    T = !1;
                if (!C) {
                    const e = y || (!cs(this) && p);
                    ((m || e) && ((T = Ye(Ln(v), w)), (C = !T)),
                        ((Ye(a.immediate, E) || E) && Ye(h.decay, g) && Ye(h.velocity, _)) || (C = !0));
                }
                if (
                    (T && us(this) && (a.changed && !y ? (C = !0) : C || this._stop(l)),
                    !f &&
                        ((C || Ft(l)) &&
                            ((a.values = b.getPayload()), (a.toValues = Ft(u) ? null : R == wn ? [1] : Ke(w))),
                        a.immediate != E && ((a.immediate = E), E || y || this._set(l)),
                        C))
                ) {
                    const { onRest: e } = a;
                    Xe(vs, (e) => ws(this, t, e));
                    const s = Jn(this, hs(this, l));
                    (nt(this._pendingCalls, s),
                        this._pendingCalls.add(n),
                        a.changed &&
                            Se.batchedUpdates(() => {
                                ((a.changed = !y), e?.(s, this), y ? An(i.onRest, s) : a.onStart?.(s, this));
                            }));
                }
                (y && this._set(v),
                    f
                        ? n(ts(t.to, t, this._state, this))
                        : C
                          ? this._start()
                          : us(this) && !m
                            ? this._pendingCalls.add(n)
                            : n(Kn(v)));
            }
            _focus(e) {
                const t = this.animation;
                e !== t.to && (Ut(this) && this._detach(), (t.to = e), Ut(this) && this._attach());
            }
            _attach() {
                let e = 0;
                const { to: t } = this.animation;
                (Ft(t) && (Gt(t, this), os(t) && (e = t.priority + 1)), (this.priority = e));
            }
            _detach() {
                const { to: e } = this.animation;
                Ft(e) && Ht(e, this);
            }
            _set(e, t = !0) {
                const n = Lt(e);
                if (!We.und(n)) {
                    const e = gn(this);
                    if (!e || !Ye(n, e.getValue())) {
                        const s = Tn(n);
                        (e && e.constructor == s ? e.setValue(n) : _n(this, s.create(n)),
                            e &&
                                Se.batchedUpdates(() => {
                                    this._onChange(n, t);
                                }));
                    }
                }
                return gn(this);
            }
            _onStart() {
                const e = this.animation;
                e.changed || ((e.changed = !0), xs(this, 'onStart', Jn(this, hs(this, e.to)), this));
            }
            _onChange(e, t) {
                (t || (this._onStart(), An(this.animation.onChange, e, this)),
                    An(this.defaultProps.onChange, e, this),
                    super._onChange(e, t));
            }
            _start() {
                const e = this.animation;
                (gn(this).reset(Lt(e.to)),
                    e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                    us(this) || (ps(this, !0), ds(this) || this._resume()));
            }
            _resume() {
                He.skipAnimation ? this.finish() : pt.start(this);
            }
            _stop(e, t) {
                if (us(this)) {
                    ps(this, !1);
                    const n = this.animation;
                    (Xe(n.values, (e) => {
                        e.done = !0;
                    }),
                        n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                        zt(this, { type: 'idle', parent: this }));
                    const s = t ? es(this.get()) : Jn(this.get(), hs(this, e ?? n.to));
                    (nt(this._pendingCalls, s), n.changed && ((n.changed = !1), xs(this, 'onRest', s, this)));
                }
            }
        };
    function hs(e, t) {
        const n = Ln(t);
        return Ye(Ln(e.get()), n);
    }
    function gs(e, t = e.loop, n = e.to) {
        const s = An(t);
        if (s) {
            const r = !0 !== s && Fn(s),
                o = (r || e).reverse,
                i = !r || r.reset;
            return _s({
                ...e,
                loop: t,
                default: !1,
                pause: void 0,
                to: !o || zn(n) ? n : void 0,
                from: i ? e.from : void 0,
                reset: i,
                ...r,
            });
        }
    }
    function _s(e) {
        const { to: t, from: n } = (e = Fn(e)),
            s = new Set();
        return (We.obj(t) && ys(t, s), We.obj(n) && ys(n, s), (e.keys = s.size ? Array.from(s) : null), e);
    }
    function bs(e) {
        const t = _s(e);
        return (We.und(t.default) && (t.default = On(t)), t);
    }
    function ys(e, t) {
        Ze(e, (e, n) => null != e && t.add(n));
    }
    var vs = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
    function ws(e, t, n) {
        e.animation[n] = t[n] !== jn(t, n) ? Mn(t[n], e.key) : void 0;
    }
    function xs(e, t, ...n) {
        (e.animation[t]?.(...n), e.defaultProps[t]?.(...n));
    }
    var Es = ['onStart', 'onChange', 'onRest'],
        Rs = 1,
        Cs = class {
            constructor(e, t) {
                ((this.id = Rs++),
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
                    We.und(n) || this.springs[t].set(n);
                }
            }
            update(e) {
                return (e && this.queue.push(_s(e)), this);
            }
            start(e) {
                let { queue: t } = this;
                return (
                    e ? (t = Ke(e).map(_s)) : (this.queue = []),
                    this._flush ? this._flush(this, t) : (Is(this, t), Ts(this, t))
                );
            }
            stop(e, t) {
                if ((e !== !!e && (t = e), t)) {
                    const n = this.springs;
                    Xe(Ke(t), (t) => n[t].stop(!!e));
                } else (ns(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
                return this;
            }
            pause(e) {
                if (We.und(e)) this.start({ pause: !0 });
                else {
                    const t = this.springs;
                    Xe(Ke(e), (e) => t[e].pause());
                }
                return this;
            }
            resume(e) {
                if (We.und(e)) this.start({ pause: !1 });
                else {
                    const t = this.springs;
                    Xe(Ke(e), (e) => t[e].resume());
                }
                return this;
            }
            each(e) {
                Ze(this.springs, e);
            }
            _onFrame() {
                const { onStart: e, onChange: t, onRest: n } = this._events,
                    s = this._active.size > 0,
                    r = this._changed.size > 0;
                ((s && !this._started) || (r && !this._started)) &&
                    ((this._started = !0),
                    Je(e, ([e, t]) => {
                        ((t.value = this.get()), e(t, this, this._item));
                    }));
                const o = !s && this._started,
                    i = r || (o && n.size) ? this.get() : null;
                (r &&
                    t.size &&
                    Je(t, ([e, t]) => {
                        ((t.value = i), e(t, this, this._item));
                    }),
                    o &&
                        ((this._started = !1),
                        Je(n, ([e, t]) => {
                            ((t.value = i), e(t, this, this._item));
                        })));
            }
            eventObserved(e) {
                if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
                else {
                    if ('idle' != e.type) return;
                    this._active.delete(e.parent);
                }
                Se.onFrame(this._onFrame);
            }
        };
    function Ts(e, t) {
        return Promise.all(t.map((t) => Ps(e, t))).then((t) => Zn(e, t));
    }
    async function Ps(e, t, n) {
        const { keys: s, to: r, from: o, loop: i, onRest: a, onResolve: l } = t,
            c = We.obj(t.default) && t.default;
        (i && (t.loop = !1), !1 === r && (t.to = null), !1 === o && (t.from = null));
        const u = We.arr(r) || We.fun(r) ? r : void 0;
        u
            ? ((t.to = void 0), (t.onRest = void 0), c && (c.onRest = void 0))
            : Xe(Es, (n) => {
                  const s = t[n];
                  if (We.fun(s)) {
                      const r = e._events[n];
                      ((t[n] = ({ finished: e, cancelled: t }) => {
                          const n = r.get(s);
                          n
                              ? (e || (n.finished = !1), t && (n.cancelled = !0))
                              : r.set(s, { value: null, finished: e || !1, cancelled: t || !1 });
                      }),
                          c && (c[n] = t[n]));
                  }
              });
        const d = e._state;
        t.pause === !d.paused
            ? ((d.paused = t.pause), nt(t.pause ? d.pauseQueue : d.resumeQueue))
            : d.paused && (t.pause = !0);
        const p = (s || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
            m = !0 === t.cancel || !0 === jn(t, 'cancel');
        ((u || (m && d.asyncId)) &&
            p.push(
                Xn(++e._lastAsyncId, {
                    props: t,
                    state: d,
                    actions: {
                        pause: Qe,
                        resume: Qe,
                        start(t, n) {
                            m ? (ns(d, e._lastAsyncId), n(es(e))) : ((t.onRest = a), n(ts(u, t, d, e)));
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
            if (n) return (Is(e, [n]), Ps(e, n, !0));
        }
        return (l && Se.batchedUpdates(() => l(f, e, e.item)), f);
    }
    function Ss(e, t) {
        const n = { ...e.springs };
        return (
            t &&
                Xe(Ke(t), (e) => {
                    (We.und(e.keys) && (e = _s(e)), We.obj(e.to) || (e = { ...e, to: void 0 }), As(n, e, (e) => Ns(e)));
                }),
            ks(e, n),
            n
        );
    }
    function ks(e, t) {
        Ze(t, (t, n) => {
            e.springs[n] || ((e.springs[n] = t), Gt(t, e));
        });
    }
    function Ns(e, t) {
        const n = new fs();
        return ((n.key = e), t && Gt(n, t), n);
    }
    function As(e, t, n) {
        t.keys &&
            Xe(t.keys, (s) => {
                (e[s] || (e[s] = n(s)))._prepareNode(t);
            });
    }
    function Is(e, t) {
        Xe(t, (t) => {
            As(e.springs, t, (t) => Ns(t, e));
        });
    }
    var Ms,
        js,
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
            return p.createElement(i, { value: t }, e);
        },
        Os =
            ((Ms = Ds),
            (js = {}),
            Object.assign(Ms, p.createContext(js)),
            (Ms.Provider._context = Ms),
            (Ms.Consumer._context = Ms),
            Ms);
    ((Ds.Provider = Os.Provider), (Ds.Consumer = Os.Consumer));
    var Bs = () => {
        const e = [],
            t = function (t) {
                ln(
                    `${rn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
                const s = [];
                return (
                    Xe(e, (e, r) => {
                        if (We.und(t)) s.push(e.start());
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
                return (Xe(e, (e) => e.pause(...arguments)), this);
            }),
            (t.resume = function () {
                return (Xe(e, (e) => e.resume(...arguments)), this);
            }),
            (t.set = function (t) {
                Xe(e, (e, n) => {
                    const s = We.fun(t) ? t(n, e) : t;
                    s && e.set(s);
                });
            }),
            (t.start = function (t) {
                const n = [];
                return (
                    Xe(e, (e, s) => {
                        if (We.und(t)) n.push(e.start());
                        else {
                            const r = this._getProps(t, e, s);
                            r && n.push(e.start(r));
                        }
                    }),
                    n
                );
            }),
            (t.stop = function () {
                return (Xe(e, (e) => e.stop(...arguments)), this);
            }),
            (t.update = function (t) {
                return (Xe(e, (e, n) => e.update(this._getProps(t, e, n))), this);
            }));
        const n = function (e, t, n) {
            return We.fun(e) ? e(n, t) : e;
        };
        return ((t._getProps = n), t);
    };
    function $s(e, t) {
        const n = We.fun(e),
            [[r], o] = (function (e, t, n) {
                const r = We.fun(t) && t;
                r && !n && (n = []);
                const o = s.useMemo(() => (r || 3 == arguments.length ? Bs() : void 0), []),
                    i = s.useRef(0),
                    a = dn(),
                    l = s.useMemo(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(e, t) {
                                const n = Ss(e, t);
                                return i.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                    ? Ts(e, t)
                                    : new Promise((s) => {
                                          (ks(e, n),
                                              l.queue.push(() => {
                                                  s(Ts(e, t));
                                              }),
                                              a());
                                      });
                            },
                        }),
                        [],
                    ),
                    c = s.useRef([...l.ctrls]),
                    u = [],
                    d = fn(e) || 0;
                function p(e, n) {
                    for (let s = e; s < n; s++) {
                        const e = c.current[s] || (c.current[s] = new Cs(null, l.flush)),
                            n = r ? r(s, e) : t[s];
                        n && (u[s] = bs(n));
                    }
                }
                (s.useMemo(() => {
                    (Xe(c.current.slice(e, d), (e) => {
                        (qn(e, o), e.stop(!0));
                    }),
                        (c.current.length = e),
                        p(d, e));
                }, [e]),
                    s.useMemo(() => {
                        p(0, Math.min(d, e));
                    }, n));
                const m = c.current.map((e, t) => Ss(e, u[t])),
                    f = s.useContext(Ds),
                    h = fn(f),
                    g = f !== h && Un(f);
                (un(() => {
                    (i.current++, (l.ctrls = c.current));
                    const { queue: e } = l;
                    (e.length && ((l.queue = []), Xe(e, (e) => e())),
                        Xe(c.current, (e, t) => {
                            (o?.add(e), g && e.start({ default: f }));
                            const n = u[t];
                            n && (Vn(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                        }));
                }),
                    pn(() => () => {
                        Xe(l.ctrls, (e) => e.stop(!0));
                    }));
                const _ = m.map((e) => ({ ...e }));
                return o ? [_, o] : _;
            })(1, n ? e : [e], n ? [] : t);
        return n || 2 == arguments.length ? [r, o] : r;
    }
    var Fs = () => Bs(),
        Ls = () => s.useState(Fs)[0];
    function Us(e, t, n) {
        const r = We.fun(t) && t,
            {
                reset: o,
                sort: i,
                trail: a = 0,
                expires: l = !0,
                exitBeforeEnter: c = !1,
                onDestroyed: u,
                ref: d,
                config: m,
            } = r ? r() : t,
            f = s.useMemo(() => (r || 3 == arguments.length ? Bs() : void 0), []),
            h = Ke(e),
            g = [],
            _ = s.useRef(null),
            b = o ? null : _.current;
        (un(() => {
            _.current = g;
        }),
            pn(
                () => (
                    Xe(g, (e) => {
                        (f?.add(e.ctrl), (e.ctrl.ref = f));
                    }),
                    () => {
                        Xe(_.current, (e) => {
                            (e.expired && clearTimeout(e.expirationId), qn(e.ctrl, f), e.ctrl.stop(!0));
                        });
                    }
                ),
            ));
        const y = (function (e, { key: t, keys: n = t }, s) {
                if (null === n) {
                    const t = new Set();
                    return e.map((e) => {
                        const n = s && s.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                        return n ? (t.add(n), n.key) : zs++;
                    });
                }
                return We.und(n) ? e : We.fun(n) ? e.map(n) : Ke(n);
            })(h, r ? r() : t, b),
            v = (o && _.current) || [];
        un(() =>
            Xe(v, ({ ctrl: e, item: t, key: n }) => {
                (qn(e, f), An(u, t, n));
            }),
        );
        const w = [];
        if (
            (b &&
                Xe(b, (e, t) => {
                    e.expired
                        ? (clearTimeout(e.expirationId), v.push(e))
                        : ~(t = w[t] = y.indexOf(e.key)) && (g[t] = e);
                }),
            Xe(h, (e, t) => {
                g[t] || ((g[t] = { key: y[t], item: e, phase: 'mount', ctrl: new Cs() }), (g[t].ctrl.item = e));
            }),
            w.length)
        ) {
            let e = -1;
            const { leave: n } = r ? r() : t;
            Xe(w, (t, s) => {
                const r = b[s];
                ~t ? ((e = g.indexOf(r)), (g[e] = { ...r, item: h[t] })) : n && g.splice(++e, 0, r);
            });
        }
        We.fun(i) && g.sort((e, t) => i(e.item, t.item));
        let x = -a;
        const E = dn(),
            R = On(t),
            C = new Map(),
            T = s.useRef(new Map()),
            P = s.useRef(!1);
        Xe(g, (e, n) => {
            const s = e.key,
                o = e.phase,
                i = r ? r() : t;
            let u, p;
            const f = An(i.delay || 0, s);
            if ('mount' == o) ((u = i.enter), (p = 'enter'));
            else {
                const e = y.indexOf(s) < 0;
                if ('leave' != o)
                    if (e) ((u = i.leave), (p = 'leave'));
                    else {
                        if (!(u = i.update)) return;
                        p = 'update';
                    }
                else {
                    if (e) return;
                    ((u = i.enter), (p = 'enter'));
                }
            }
            if (((u = An(u, e.item, n)), (u = We.obj(u) ? Fn(u) : { to: u }), !u.config)) {
                const t = m || R.config;
                u.config = An(t, e.item, n, p);
            }
            x += a;
            const h = { ...R, delay: f + x, ref: d, immediate: i.immediate, reset: !1, ...u };
            if ('enter' == p && We.und(h.from)) {
                const s = r ? r() : t,
                    o = We.und(s.initial) || b ? s.from : s.initial;
                h.from = An(o, e.item, n);
            }
            const { onResolve: g } = h;
            h.onResolve = (e) => {
                An(g, e);
                const t = _.current,
                    n = t.find((e) => e.key === s);
                if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                    const e = t.every((e) => e.ctrl.idle);
                    if ('leave' == n.phase) {
                        const t = An(l, n.item);
                        if (!1 !== t) {
                            const s = !0 === t ? 0 : t;
                            if (((n.expired = !0), !e && s > 0))
                                return void (s <= 2147483647 && (n.expirationId = setTimeout(E, s)));
                        }
                    }
                    e && t.some((e) => e.expired) && (T.current.delete(n), c && (P.current = !0), E());
                }
            };
            const v = Ss(e.ctrl, h);
            'leave' === p && c
                ? T.current.set(e, { phase: p, springs: v, payload: h })
                : C.set(e, { phase: p, springs: v, payload: h });
        });
        const S = s.useContext(Ds),
            k = fn(S),
            N = S !== k && Un(S);
        (un(() => {
            N &&
                Xe(g, (e) => {
                    e.ctrl.start({ default: S });
                });
        }, [S]),
            Xe(C, (e, t) => {
                if (T.current.size) {
                    const e = g.findIndex((e) => e.key === t.key);
                    g.splice(e, 1);
                }
            }),
            un(
                () => {
                    Xe(T.current.size ? T.current : C, ({ phase: e, payload: t }, n) => {
                        const { ctrl: s } = n;
                        ((n.phase = e),
                            f?.add(s),
                            N && 'enter' == e && s.start({ default: S }),
                            t &&
                                (Vn(s, t.ref),
                                (!s.ref && !f) || P.current
                                    ? (s.start(t), P.current && (P.current = !1))
                                    : s.update(t)));
                    });
                },
                o ? void 0 : n,
            ));
        const A = (e) =>
            p.createElement(
                p.Fragment,
                null,
                g.map((t, n) => {
                    const { springs: s } = C.get(t) || t.ctrl,
                        r = e({ ...s }, t.item, t, n);
                    return r && r.type
                        ? p.createElement(r.type, {
                              ...r.props,
                              key: We.str(t.key) || We.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref,
                          })
                        : r;
                }),
            );
        return f ? [A, f] : A;
    }
    var zs = 1;
    var qs = class extends as {
        constructor(e, t) {
            (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Dt(...t)));
            const n = this._get(),
                s = Tn(n);
            _n(this, s.create(n));
        }
        advance(e) {
            const t = this._get();
            (Ye(t, this.get()) || (gn(this).setValue(t), this._onChange(t, this.idle)),
                !this.idle && Gs(this._active) && Hs(this));
        }
        _get() {
            const e = We.arr(this.source) ? this.source.map(Lt) : Ke(Lt(this.source));
            return this.calc(...e);
        }
        _start() {
            this.idle &&
                !Gs(this._active) &&
                ((this.idle = !1),
                Xe(bn(this), (e) => {
                    e.done = !1;
                }),
                He.skipAnimation ? (Se.batchedUpdates(() => this.advance()), Hs(this)) : pt.start(this));
        }
        _attach() {
            let e = 1;
            (Xe(Ke(this.source), (t) => {
                (Ft(t) && Gt(t, this), os(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
            }),
                (this.priority = e),
                this._start());
        }
        _detach() {
            (Xe(Ke(this.source), (e) => {
                Ft(e) && Ht(e, this);
            }),
                this._active.clear(),
                Hs(this));
        }
        eventObserved(e) {
            'change' == e.type
                ? e.idle
                    ? this.advance()
                    : (this._active.add(e.parent), this._start())
                : 'idle' == e.type
                  ? this._active.delete(e.parent)
                  : 'priority' == e.type &&
                    (this.priority = Ke(this.source).reduce((e, t) => Math.max(e, (os(t) ? t.priority : 0) + 1), 0));
        }
    };
    function Vs(e) {
        return !1 !== e.idle;
    }
    function Gs(e) {
        return !e.size || Array.from(e).every(Vs);
    }
    function Hs(e) {
        e.idle ||
            ((e.idle = !0),
            Xe(bn(e), (e) => {
                e.done = !0;
            }),
            zt(e, { type: 'idle', parent: e }));
    }
    He.assign({ createStringInterpolator: sn, to: (e, t) => new qs(e, t) });
    var Qs = /^--/;
    function Ws(e, t) {
        return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : 'number' != typeof t || 0 === t || Qs.test(e) || (Xs.hasOwnProperty(e) && Xs[e])
              ? ('' + t).trim()
              : t + 'px';
    }
    var Ys = {};
    var Xs = {
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
    Xs = Object.keys(Xs).reduce(
        (e, t) => (Zs.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
        Xs,
    );
    var Ks = /^(matrix|translate|scale|rotate|skew)/,
        Js = /^(translate)/,
        er = /^(rotate|skew)/,
        tr = (e, t) => (We.num(e) && 0 !== e ? e + t : e),
        nr = (e, t) => (We.arr(e) ? e.every((e) => nr(e, t)) : We.num(e) ? e === t : parseFloat(e) === t),
        sr = class extends En {
            constructor({ x: e, y: t, z: n, ...s }) {
                const r = [],
                    o = [];
                ((e || t || n) &&
                    (r.push([e || 0, t || 0, n || 0]),
                    o.push((e) => [`translate3d(${e.map((e) => tr(e, 'px')).join(',')})`, nr(e, 0)])),
                    Ze(s, (e, t) => {
                        if ('transform' === t) (r.push([e || '']), o.push((e) => [e, '' === e]));
                        else if (Ks.test(t)) {
                            if ((delete s[t], We.und(e))) return;
                            const n = Js.test(t) ? 'px' : er.test(t) ? 'deg' : '';
                            (r.push(Ke(e)),
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
        rr = class extends qt {
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
                    Xe(this.inputs, (n, s) => {
                        const r = Lt(n[0]),
                            [o, i] = this.transforms[s](We.arr(r) ? r : n.map(Lt));
                        ((e += ' ' + o), (t = t && i));
                    }),
                    t ? 'none' : e
                );
            }
            observerAdded(e) {
                1 == e && Xe(this.inputs, (e) => Xe(e, (e) => Ft(e) && Gt(e, this)));
            }
            observerRemoved(e) {
                0 == e && Xe(this.inputs, (e) => Xe(e, (e) => Ft(e) && Ht(e, this)));
            }
            eventObserved(e) {
                ('change' == e.type && (this._value = null), zt(this, e));
            }
        };
    He.assign({
        batchedUpdates: r.unstable_batchedUpdates,
        createStringInterpolator: sn,
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
                createAnimatedStyle: n = (e) => new En(e),
                getComponentProps: s = (e) => e,
            } = {},
        ) => {
            const r = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: s },
                o = (e) => {
                    const t = Nn(e) || 'Anonymous';
                    return (
                        ((e = We.str(e) ? o[e] || (o[e] = Pn(e, r)) : e[kn] || (e[kn] = Pn(e, r))).displayName =
                            `Animated(${t})`),
                        e
                    );
                };
            return (
                Ze(e, (t, n) => {
                    (We.arr(e) && (n = Nn(t)), (o[n] = o(t)));
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
                        { className: s, style: r, children: o, scrollTop: i, scrollLeft: a, viewBox: l, ...c } = t,
                        u = Object.values(c),
                        d = Object.keys(c).map((t) =>
                            n || e.hasAttribute(t)
                                ? t
                                : Ys[t] || (Ys[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                        );
                    void 0 !== o && (e.textContent = o);
                    for (const p in r)
                        if (r.hasOwnProperty(p)) {
                            const t = Ws(p, r[p]);
                            Qs.test(p) ? e.style.setProperty(p, t) : (e.style[p] = t);
                        }
                    (d.forEach((t, n) => {
                        e.setAttribute(t, u[n]);
                    }),
                        void 0 !== s && (e.className = s),
                        void 0 !== i && (e.scrollTop = i),
                        void 0 !== a && (e.scrollLeft = a),
                        void 0 !== l && e.setAttribute('viewBox', l));
                },
                createAnimatedStyle: (e) => new sr(e),
                getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
            },
        ),
        ir = or.animated;
    function ar() {
        const e = s.useRef(0);
        return (
            Te(() => {
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
        cr = 'await',
        ur = 'idle',
        dr = 'display';
    function pr({ resId: e = 0, contentId: t, decoratorId: n, disabled: r, args: o, showDelay: i = 400 }) {
        const a = s.useRef({ status: ur, resId: e, timeoutId: 0 }),
            [l, c] = s.useMemo(() => {
                let s = null;
                function l() {
                    r ||
                        ((a.current.status = cr),
                        window.clearTimeout(a.current.timeoutId),
                        (a.current.timeoutId = window.setTimeout(c, i)));
                }
                function c() {
                    ((a.current.status = dr), Q.tooltip.open(e, t, n, o), s && lr.set(s, d));
                }
                function u() {
                    if (
                        (window.clearTimeout(a.current.timeoutId),
                        a.current.status === dr && Q.tooltip.hide(e, t, n),
                        (a.current.status = ur),
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
                    hide: u,
                    show: c,
                    rerun: function () {
                        a.current.status !== ur && (r ? d.hide() : l());
                    },
                };
                return [
                    d,
                    {
                        onMouseEnter: (e) => {
                            ((s = e?.currentTarget), l());
                        },
                        onMouseLeave: r ? K : u,
                        onClick: r ? K : u,
                    },
                ];
            }, [o, t, n, r, e, i]);
        return (
            s.useEffect(() => {
                l.rerun();
            }, [l]),
            Te(Ce(l.hide)),
            c
        );
    }
    function mr({ alert: e, body: t, header: n, note: r, hasHtmlContent: o, disabled: i }) {
        const a = m.resolve('views');
        return pr({
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
    const fr = {
        click: hr('play'),
        'hot-key': hr('play'),
        'mouse-enter': hr('highlight'),
        increaseAmount: hr('cons_ammo_single_plus'),
        decreaseAmount: hr('cons_ammo_single_minus'),
        increaseAmountRoll: hr('cons_ammo_roll_plus'),
        decreaseAmountRoll: hr('cons_ammo_roll_minus'),
        close: hr('cancelcloseno'),
        'show-context-menu': hr('tabb'),
        progressSimple: hr('gui_hangar_progressbar_simple'),
        increaseDelta: hr('gui_hangar_progressbar_delta_increase'),
        decreaseDelta: hr('gui_hangar_progressbar_delta_decrease'),
        increaseDeltaMax: hr('gui_hangar_progressbar_delta_max'),
        pointerGrab: hr('gui_hangar_progressbar_pointer_grab'),
        pointerDrag: hr('gui_hangar_progressbar_pointer_drag'),
    };
    function hr(e) {
        return () => {
            F.sound(e);
        };
    }
    const gr = s.createContext(null);
    function _r({ severity: t = 'warn', overrides: n, silent: r = !1, children: o }) {
        const i = s.useMemo(() => ({ ...fr, ...n }), [n]),
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
        return e.jsx(gr.Provider, { value: a, children: o });
    }
    function br() {
        const e = s.useContext(gr);
        if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
        return e;
    }
    const yr = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
        vr = new Set(['number', 'string', 'boolean', 'bigint']),
        wr = new Set(['Dict']);
    function xr(e, { shallow: t = !0, depth: n = 0, maxDepth: s = 32 } = {}) {
        const r = e,
            o = typeof e;
        if (n > s) throw new Error(`Too deeply nested to copy. Max is ${s}.`);
        if (yr.has(o)) return r;
        if (null === r) return r;
        const i = { depth: n + 1, maxDepth: s };
        if (Array.isArray(r)) return r.map((e) => xr(e, i));
        if ('object' === o) {
            const s = r.constructor?.name ?? 'UNKNOWN';
            if (Array.isArray(e)) return e.map((e) => xr(e, i));
            if ('CoherentArrayProxy' === s) return e.map((e) => xr(e.value, i));
            if ('Dict' === s) return;
            if ('UNKNOWN' === s) return;
            if (s.includes(':ViewModel:') || 'Object' === s) {
                if (t && 0 === n) {
                    const e = {};
                    for (const t in r) {
                        const n = r[t];
                        vr.has(typeof n) && (e[t] = n);
                    }
                    return e;
                }
                {
                    const e = {};
                    for (const t in r) {
                        const n = r[t],
                            s = r?.constructor?.name ?? 'UNKNOWN';
                        wr.has(s) || (e[t] = xr(n, i));
                    }
                    return e;
                }
            }
            const o = {};
            for (const e of Object.keys(r)) o[e] = xr(r[e], i);
            return o;
        }
        return (console.error('Incorrect value to clone model', r), r);
    }
    const Er = { deep: !1, equals: ee },
        Rr = { cloneItem: !0 },
        Cr = { shallow: !1 };
    class Tr {
        constructor(e, t = Rr) {
            this.options = t;
            const s = {},
                r = e.keys();
            for (let o = 0; o < r.length; o++) {
                const t = r[o];
                s[t] = n.observable.box(this.takeItem(e, t), Er);
            }
            ((this._keys = n.observable.set(new Set(r))), (this._data = n.observable.box(s, Er)));
        }
        _data;
        _keys;
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
                    : null !== i && ((s[o] = n.observable.box(i, Er)), this._keys.add(o), this.set(s));
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
            return this.options.cloneItem ? xr(n, Cr) : n;
        }
        set = n.action((e) => {
            this._data.set(e);
        });
        untrackedData() {
            return n.untracked(() => this._data.get());
        }
    }
    const Pr = s.createContext({ mode: 'real' }),
        Sr = { equals: ee, deep: !1 };
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
                const i = new Tr(s(n), o);
                return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), n), i);
            },
            a = (o, i) => {
                const a = n.observable.box(s(o) ?? i, Sr);
                return ('real' === t && e.subscribe((e) => r.push(() => a.set(e)), o), a);
            };
        return {
            dict: i,
            dictRef: (e, t) => i(e, { cloneItem: !1, ...t }),
            arrayClone: (e) => o(xr, e),
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
                        c = l.reduce((e, [t, s]) => ((e[s] = n.observable.box(a[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                r.push(() =>
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
    o.computedFn;
    const Nr = (e, t) => o.computedFn(e, { equals: n.comparer.structural, ...t }),
        Ar = (e) => (t) => {
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
                    return U.onHitTest((t) => {
                        const n = e.getBoundingClientRect();
                        return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                    });
            }, []),
            e.jsx('div', { ...t, ref: Ar([n, r]) })
        );
    });
    function Ir(e) {
        return {
            lang: e?.lang ?? undefined,
            message: e?.message,
            abortEarly: e?.abortEarly ?? undefined,
            abortPipeEarly: e?.abortPipeEarly ?? undefined,
        };
    }
    function Mr(e) {
        const t = typeof e;
        return 'string' === t
            ? `"${e}"`
            : 'number' === t || 'bigint' === t || 'boolean' === t
              ? `${e}`
              : 'object' === t || 'function' === t
                ? ((e && Object.getPrototypeOf(e)?.constructor?.name) ?? 'null')
                : t;
    }
    function jr(e, t, n, s, r) {
        const o = r && 'input' in r ? r.input : n.value,
            i = r?.expected ?? e.expects ?? null,
            a = r?.received ?? Mr(o),
            l = {
                kind: e.kind,
                type: e.type,
                input: o,
                expected: i,
                received: a,
                message: `Invalid ${t}: ${i ? `Expected ${i} but r` : 'R'}eceived ${a}`,
                requirement: e.requirement,
                path: r?.path,
                issues: r?.issues,
                lang: s.lang,
                abortEarly: s.abortEarly,
                abortPipeEarly: s.abortPipeEarly,
            },
            c = 'schema' === e.kind,
            u =
                r?.message ??
                e.message ??
                (e.reference, void l.lang) ??
                (c ? void l.lang : null) ??
                s.message ??
                void l.lang;
        (void 0 !== u && (l.message = 'function' == typeof u ? u(l) : u),
            c && (n.typed = !1),
            n.issues ? n.issues.push(l) : (n.issues = [l]));
    }
    function Dr(e) {
        return { version: 1, vendor: 'valibot', validate: (t) => e['~run']({ value: t }, Ir()) };
    }
    function Or(e, t) {
        const n = [...new Set(e)];
        return n.length > 1 ? `(${n.join(` ${t} `)})` : (n[0] ?? 'never');
    }
    var Br = class extends Error {
        constructor(e) {
            (super(e[0].message), (this.name = 'ValiError'), (this.issues = e));
        }
    };
    function $r(e, t, n) {
        return 'function' == typeof e.fallback ? e.fallback(t, n) : e.fallback;
    }
    function Fr(e, t, n) {
        return 'function' == typeof e.default ? e.default(t, n) : e.default;
    }
    function Lr(e, t) {
        return {
            kind: 'schema',
            type: 'array',
            reference: Lr,
            expects: 'Array',
            async: !1,
            item: e,
            message: t,
            get '~standard'() {
                return Dr(this);
            },
            '~run'(e, t) {
                const n = e.value;
                if (Array.isArray(n)) {
                    ((e.typed = !0), (e.value = []));
                    for (let s = 0; s < n.length; s++) {
                        const r = n[s],
                            o = this.item['~run']({ value: r }, t);
                        if (o.issues) {
                            const i = { type: 'array', origin: 'value', input: n, key: s, value: r };
                            for (const t of o.issues) (t.path ? t.path.unshift(i) : (t.path = [i]), e.issues?.push(t));
                            if ((e.issues || (e.issues = o.issues), t.abortEarly)) {
                                e.typed = !1;
                                break;
                            }
                        }
                        (o.typed || (e.typed = !1), e.value.push(o.value));
                    }
                } else jr(this, 'type', e, t);
                return e;
            },
        };
    }
    function Ur(e) {
        return {
            kind: 'schema',
            type: 'boolean',
            reference: Ur,
            expects: 'boolean',
            async: !1,
            message: e,
            get '~standard'() {
                return Dr(this);
            },
            '~run'(e, t) {
                return ('boolean' == typeof e.value ? (e.typed = !0) : jr(this, 'type', e, t), e);
            },
        };
    }
    function zr(e, t) {
        const n = [];
        for (const s in e) ('' + +s === s && 'string' == typeof e[s] && Object.is(e[e[s]], +s)) || n.push(e[s]);
        return {
            kind: 'schema',
            type: 'enum',
            reference: zr,
            expects: Or(n.map(Mr), '|'),
            async: !1,
            enum: e,
            options: n,
            message: t,
            get '~standard'() {
                return Dr(this);
            },
            '~run'(e, t) {
                return (this.options.includes(e.value) ? (e.typed = !0) : jr(this, 'type', e, t), e);
            },
        };
    }
    function qr(e) {
        return {
            kind: 'schema',
            type: 'lazy',
            reference: qr,
            expects: 'unknown',
            async: !1,
            getter: e,
            get '~standard'() {
                return Dr(this);
            },
            '~run'(e, t) {
                return this.getter(e.value)['~run'](e, t);
            },
        };
    }
    function Vr(e) {
        return {
            kind: 'schema',
            type: 'number',
            reference: Vr,
            expects: 'number',
            async: !1,
            message: e,
            get '~standard'() {
                return Dr(this);
            },
            '~run'(e, t) {
                return ('number' != typeof e.value || isNaN(e.value) ? jr(this, 'type', e, t) : (e.typed = !0), e);
            },
        };
    }
    function Gr(e, t) {
        return {
            kind: 'schema',
            type: 'object',
            reference: Gr,
            expects: 'Object',
            async: !1,
            entries: e,
            message: t,
            get '~standard'() {
                return Dr(this);
            },
            '~run'(e, t) {
                const n = e.value;
                if (n && 'object' == typeof n) {
                    ((e.typed = !0), (e.value = {}));
                    for (const s in this.entries) {
                        const r = this.entries[s];
                        if (
                            s in n ||
                            (('exact_optional' === r.type || 'optional' === r.type || 'nullish' === r.type) &&
                                void 0 !== r.default)
                        ) {
                            const o = s in n ? n[s] : Fr(r),
                                i = r['~run']({ value: o }, t);
                            if (i.issues) {
                                const r = { type: 'object', origin: 'value', input: n, key: s, value: o };
                                for (const t of i.issues)
                                    (t.path ? t.path.unshift(r) : (t.path = [r]), e.issues?.push(t));
                                if ((e.issues || (e.issues = i.issues), t.abortEarly)) {
                                    e.typed = !1;
                                    break;
                                }
                            }
                            (i.typed || (e.typed = !1), (e.value[s] = i.value));
                        } else if (void 0 !== r.fallback) e.value[s] = $r(r);
                        else if (
                            'exact_optional' !== r.type &&
                            'optional' !== r.type &&
                            'nullish' !== r.type &&
                            (jr(this, 'key', e, t, {
                                input: void 0,
                                expected: `"${s}"`,
                                path: [{ type: 'object', origin: 'key', input: n, key: s, value: n[s] }],
                            }),
                            t.abortEarly)
                        )
                            break;
                    }
                } else jr(this, 'type', e, t);
                return e;
            },
        };
    }
    function Hr(e, t) {
        return {
            kind: 'schema',
            type: 'optional',
            reference: Hr,
            expects: `(${e.expects} | undefined)`,
            async: !1,
            wrapped: e,
            default: t,
            get '~standard'() {
                return Dr(this);
            },
            '~run'(e, t) {
                return void 0 === e.value && (void 0 !== this.default && (e.value = Fr(this, e, t)), void 0 === e.value)
                    ? ((e.typed = !0), e)
                    : this.wrapped['~run'](e, t);
            },
        };
    }
    function Qr(e) {
        return {
            kind: 'schema',
            type: 'string',
            reference: Qr,
            expects: 'string',
            async: !1,
            message: e,
            get '~standard'() {
                return Dr(this);
            },
            '~run'(e, t) {
                return ('string' == typeof e.value ? (e.typed = !0) : jr(this, 'type', e, t), e);
            },
        };
    }
    function Wr(e) {
        let t;
        if (e) for (const n of e) t ? t.push(...n.issues) : (t = n.issues);
        return t;
    }
    function Yr(e, t) {
        return {
            kind: 'schema',
            type: 'union',
            reference: Yr,
            expects: Or(
                e.map((e) => e.expects),
                '|',
            ),
            async: !1,
            options: e,
            message: t,
            get '~standard'() {
                return Dr(this);
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
                    (jr(this, 'type', e, t, { issues: Wr(s) }), (e.typed = !0));
                } else {
                    if (1 === r?.length) return r[0];
                    jr(this, 'type', e, t, { issues: Wr(r) });
                }
                return e;
            },
        };
    }
    class Xr {
        index = 0;
        next() {
            return this.index++;
        }
    }
    function Zr({ model: e, indexer: t, resolveIcon: n, commonIcon: s, guiDisabled: r }) {
        if ('items' in e)
            return {
                type: 'items',
                separate:
                    ((o = e.conditionType),
                    'or' === o || 'and' === o ? o : (console.warn(`Unexpected conditionType: ${o}`), 'none')),
                groups: ce(e.items, (e) => Zr({ model: e, indexer: t, resolveIcon: n, commonIcon: s, guiDisabled: r })),
            };
        var o;
        const i = {
            type: 'item',
            index: t.next(),
            condition: {
                icon: n?.(s ?? e.iconKey),
                title: r ? '' : e.titleData,
                description: e.descrData,
                completed: e.current >= e.total,
                conditionType: e.conditionType,
            },
        };
        return (e.total > 0 && (i.condition.progression = { current: e.current, total: e.total, earned: e.earned }), i);
    }
    const Kr = Gr({
            index: Vr(),
            name: Qr(),
            value: Qr(),
            isCompensation: Ur(),
            tooltipId: Qr(),
            tooltipContentId: Qr(),
            label: Qr(),
            probability: Vr(),
            item: Hr(Qr()),
            icon: Hr(Qr()),
            iconBig: Hr(Qr()),
            iconSmall: Hr(Qr()),
        }),
        Jr = Gr({ conditionType: Qr() }),
        eo = Gr({
            ...Jr.entries,
            titleData: Qr(),
            descrData: Qr(),
            iconKey: Qr(),
            current: Vr(),
            total: Vr(),
            earned: Vr(),
            progressType: Qr(),
            sortKey: Qr(),
        }),
        to = Gr({ ...Jr.entries, items: Lr(Yr([eo, qr(() => to)])) }),
        no = Gr({
            ...Gr({
                id: Qr(),
                groupId: Qr(),
                type: Vr(),
                title: Qr(),
                description: Qr(),
                decoration: Vr(),
                status: zr(we),
            }).entries,
            bonuses: Lr(Kr),
            preBattleCondition: to,
            bonusCondition: to,
            postBattleCondition: to,
        }),
        so = m.resolve('images'),
        ro = { rootId: m.resolve('aliases').read((e) => e.battle_results.progression.DailyMissions('resId')) };
    function oo(e, t) {
        const n = t === xe.PREMIUM,
            s = n ? 'gold' : 'silver';
        return {
            default: { path: so.readOrEmpty(`userMissions.missionIcons.c_32.${e}_${s}`), isGold: n },
            large: { path: so.readOrEmpty(`userMissions.missionIcons.c_80.${e}_${s}`), isGold: n },
        };
    }
    const io = Gr({ ...no.entries, icon: Qr(), navigationEnabled: Ur(), level: zr(xe) }),
        ao = { [xe.EASY]: 1, [xe.MEDIUM]: 10, [xe.HARD]: 20, [xe.BONUS]: 30, [xe.PREMIUM]: 40, [xe.EPIC]: 50 };
    function lo(e) {
        return e.status === we.Done ? 1e3 * ao[e.level] : ao[e.level];
    }
    function co(e) {
        return ((t = (e, t) => lo(t) - lo(e)), ce(e, J).sort(t));
        var t;
    }
    const [uo, po] = (
            (t = 'DataLayerProvider') =>
            (n, r, o) => {
                const i = s.createContext(null);
                function a(a) {
                    const { mode: l, options: c, children: u, mocks: d } = a,
                        p = s.useContext(Pr),
                        m = l ?? p.mode,
                        f = d ?? p.mocks,
                        h = s.useRef([]),
                        g = o?.useRequires?.(),
                        _ = Ce((e, s, i) => {
                            const l =
                                    'real' !== e && i
                                        ? (function (e, t) {
                                              return {
                                                  subscribe: () => 0,
                                                  readSafeByPath: e,
                                                  readByPath: e,
                                                  createCallback: (n, s) => {
                                                      const r = e(Z(s, t));
                                                      return (...e) => {
                                                          r(n(...e));
                                                      };
                                                  },
                                                  createCallbackNoArgs: (n) => {
                                                      const s = e(Z(n, t));
                                                      return () => {
                                                          s();
                                                      };
                                                  },
                                                  dispose: () => {},
                                                  unsubscribe: () => {},
                                                  events: { subscribersNotified: new W() },
                                              };
                                          })(i.getter, s)
                                        : X(s, { name: t }),
                                c = (t) => ('mocks' === e ? i?.getter(t, s) : l.readByPath(t)),
                                u = (e) => h.current.push(e),
                                d = 'initial' in a && { initial: o?.initial?.(a.initial) },
                                p = n({
                                    ...d,
                                    mode: e,
                                    readByPath: c,
                                    requires: g,
                                    externalModel: l,
                                    observableModel: kr(l, e, c),
                                    cleanup: u,
                                }),
                                m = { ...d, mode: e, model: p, externalModel: l, cleanup: u, requires: g },
                                f = 'mocks' === e && i?.controls ? i.controls(m) : {};
                            return {
                                model: p,
                                controls: { ...r?.(m), ...f },
                                externalModel: l,
                                mode: e,
                                rootId: s?.rootId ?? 0,
                            };
                        }),
                        b = s.useRef(!1),
                        [y, v] = s.useState(m);
                    s.useEffect(() => {
                        v(m);
                    }, [m]);
                    const [w, x] = s.useState(() => _(y, c, f));
                    return (
                        s.useEffect(() => {
                            b.current ? x(_(y, c, f)) : (b.current = !0);
                        }, [_, f, y, c?.context, c?.initializer, c?.getRoot, c?.rootId]),
                        s.useEffect(
                            () => () => {
                                (w.externalModel.dispose(), h.current.forEach((e) => e()));
                            },
                            [w],
                        ),
                        e.jsx(i.Provider, { value: w, children: u })
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
                    quests: Nr(() =>
                        ce(co(t.dailyQuests.get()), (e) => {
                            const t = (function (e, t, n) {
                                    const s = e['~run']({ value: t }, Ir(n));
                                    if (s.issues) throw new Br(s.issues);
                                    return s.value;
                                })(io, e),
                                n = new Xr(),
                                s = t.status === we.Done,
                                r =
                                    t.postBattleCondition.items.length + t.bonusCondition.items.length <= 1
                                        ? t.icon
                                        : void 0;
                            return {
                                questId: t.id,
                                completed: s,
                                bonuses: t.bonuses,
                                rewardsTooltipResId: ro.rootId,
                                questType: t.level,
                                value: {
                                    type: 'items',
                                    separate: 'union',
                                    groups: de([
                                        t.postBattleCondition.items.length > 0 &&
                                            Zr({
                                                indexer: n,
                                                commonIcon: r,
                                                model: t.postBattleCondition,
                                                resolveIcon: (e) => oo(e, t.level),
                                            }),
                                        t.bonusCondition.items.length > 0 &&
                                            Zr({
                                                indexer: n,
                                                commonIcon: r,
                                                model: t.bonusCondition,
                                                resolveIcon: (e) => oo(e, t.level),
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
        mo = () => {};
    function fo(t) {
        const n = t;
        return s.forwardRef(function (t, s) {
            const r = t,
                o = a.useAdaptive(r, r.adaptive),
                { path: i, ...l } = o,
                c = o.images ?? m.resolve('images'),
                u = { ...l, ref: s };
            {
                const t = i ? c.readOr(i, mo, 'warn') : void 0;
                return t ? e.jsx(n, { ...u, src: t }) : e.jsx(n, { ...u, unknown: !0 });
            }
        });
    }
    const ho = {
        background:
            'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
        backgroundSize: '20rem 20rem',
        backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
        backgroundColor: '#000',
    };
    s.forwardRef(function (t, n) {
        if (!t.src) {
            const {
                repeat: s,
                fit: r,
                position: o,
                width: i,
                src: a,
                height: l,
                unselectable: c,
                unknownStyle: u = ho,
                ...d
            } = t;
            return e.jsx('div', { ...d, ref: n, style: { width: t.width, height: t.height, ...u, ...t.style } });
        }
        const { repeat: s, fit: r, position: o, width: i, height: a, unknownStyle: l, unselectable: c, ...u } = t;
        return e.jsx('div', {
            ...u,
            ref: n,
            style: {
                backgroundImage: `url(${t.src})`,
                backgroundRepeat: s ?? 'no-repeat',
                backgroundSize: r ?? 'contain',
                backgroundPosition: o ?? 'center center',
                width: 'number' == typeof i ? `${i}rem` : i,
                height: 'number' == typeof a ? `${a}rem` : a,
                ...u.style,
            },
        });
    });
    const go = fo(
        s.forwardRef(function (t, n) {
            if (t.unknown) {
                const {
                    repeat: s,
                    fit: r,
                    position: o,
                    width: i,
                    src: a,
                    height: l,
                    unselectable: c,
                    unknown: u,
                    unknownStyle: d = ho,
                    ...p
                } = t;
                return e.jsx('div', { ...p, ref: n, style: { width: t.width, height: t.height, ...d, ...t.style } });
            }
            const {
                repeat: s,
                fit: r,
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
    fo(
        s.forwardRef(function (t, n) {
            const { width: s, height: r, src: o, unselectable: i, unknown: a, unknownStyle: l = ho, ...c } = t;
            return t.unknown
                ? e.jsx('div', { ...c, style: { width: t.width, height: t.height, ...l } })
                : e.jsx('img', { ...c, ref: n, src: o, width: s, height: r });
        }),
    );
    const _o = 'Divider_80a19f4b';
    function bo({ classNames: t }) {
        return e.jsx('div', {
            className: k(_o, t?.base),
            children: e.jsx(go, {
                className: t?.image,
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    }
    const yo = 'TruncateText_dcb41d92',
        vo = s.forwardRef(function ({ text: t, tooltipParams: n, className: r, ...o }, i) {
            const a = mr({ header: n?.header, body: n?.body || t }),
                l = s.useRef(null),
                [c, u] = s.useState(!1),
                d = s.useCallback(() => {
                    l.current && u(l.current.scrollWidth - Math.ceil(l.current.getBoundingClientRect().width) > 0);
                }, []);
            var p, m;
            return (
                s.useEffect(() => {
                    c || a.onMouseLeave();
                }, [c, a]),
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
                    const r = Ce((e) => {
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
                e.jsx('div', { ...o, ref: Ar([i, l]), className: k(yo, r), ...(c ? a : {}), children: t })
            );
        }),
        wo = (e) => ('boolean' == typeof e ? `${e}` : 0 === e ? '0' : e),
        xo = k,
        Eo = (e, t) => (n) => {
            var s;
            if (null == (null == t ? void 0 : t.variants))
                return xo(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: r, defaultVariants: o } = t,
                i = Object.keys(r).map((e) => {
                    const t = null == n ? void 0 : n[e],
                        s = null == o ? void 0 : o[e];
                    if (null === t) return null;
                    const i = wo(t) || wo(s);
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
            return xo(e, i, l, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        };
    function Ro(t, n, r) {
        const o = 'object' == typeof n && 'cva' in n ? n.cva?.variants : r?.variants,
            i = o ? Object.keys(o) : [];
        if ('object' == typeof n) {
            const e = n,
                r = Eo(e.className, e.cva),
                o = e.element,
                a = s.forwardRef(function (e, t) {
                    return s.createElement(o, { ...('function' == typeof o ? e : Co(i, e)), ref: t, className: r(e) });
                });
            return ((a.displayName = t), e.cva && (a.cva = e.cva), a);
        }
        const a = Eo(n, r),
            l = s.forwardRef(function (n, s) {
                return e.jsx('div', { 'data-name': t, ...Co(i, n), ref: s, className: a(n) });
            });
        return ((l.displayName = t), r && (l.cva = r), l);
    }
    function Co(e, t) {
        if (0 === e.length) return t;
        const n = { ...t };
        for (const s of e) delete n[s];
        return n;
    }
    const To = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
        Po = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
        So = Ro('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
        ko = s.forwardRef(function (
            { children: t, onClick: n, onMouseEnter: s, soundTarget: r, disabled: o = !1, silent: i = !1, ...a },
            l,
        ) {
            const c = br();
            return e.jsx(So, {
                ...a,
                ref: l,
                onMouseEnter: function (e) {
                    (o || i || c.play('mouse-enter', { target: r || 'Button', original: e }), s?.(e));
                },
                onClick: function (e) {
                    o || (i || c.play('click', { target: r || 'Button', original: e }), n?.(e));
                },
                children: t,
            });
        }),
        No = {
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
        Ao = s.forwardRef(function (
            {
                children: t,
                size: n = Po.large,
                theme: s = To.primary,
                disabled: r = !1,
                silent: o = !1,
                autoAlignContent: i = !0,
                classNames: a,
                className: l,
                ...c
            },
            u,
        ) {
            return e.jsxs(ko, {
                ...c,
                ref: u,
                silent: o,
                disabled: r,
                className: k(
                    No.base,
                    No[`base__size-${n}`],
                    No[`base__theme-${s}`],
                    r ? No.base__disabled : No.base__enabled,
                    l,
                    a?.base,
                ),
                onClick: function (e) {
                    r || c.onClick?.(e);
                },
                children: [
                    e.jsx('div', { className: k(No.background, a?.background) }),
                    e.jsx('div', { className: k(No.border, a?.border) }),
                    e.jsx('div', { className: k(No.overlay, a?.overlay) }),
                    e.jsx('div', { className: k(No.content, i && No.content__fontAligned, a?.content), children: t }),
                ],
            });
        });
    ((Ao.themes = To), (Ao.sizes = Po));
    const Io = 'Action_6c7b0c76',
        Mo = 'Action_icon_7d5aed3b',
        jo = s.forwardRef(function ({ className: t, theme: n = Ao.themes.secondary, tooltipParams: s, ...r }, o) {
            const i = mr({ alert: s?.alert, header: s?.header, body: s?.body, note: s?.note });
            return e.jsx(Ao, {
                ...r,
                ref: o,
                onClick: (e) => {
                    (r.onClick(e), s && i.onClick());
                },
                onMouseEnter: (e) => {
                    (r.onMouseEnter?.(e), s && i.onMouseEnter(e));
                },
                onMouseLeave: (e) => {
                    (r.onMouseLeave?.(e), s && i.onMouseLeave());
                },
                autoAlignContent: !1,
                theme: n,
                className: k(Io, t),
                children: e.jsx(go, { width: 10, height: 20, path: 'post_battle.progression.arrow', className: Mo }),
            });
        }),
        Do = 'Header_background_91826dd5',
        Oo = 'Header_mask_afb9c38d',
        Bo = 'Header_border_c6b1d37f',
        $o = Ro('CardHeader', 'Header_1c2ee301'),
        Fo = s.forwardRef(function ({ classNames: t, className: n, ...s }, r) {
            return e.jsxs($o, {
                ...s,
                className: k(t?.base, n),
                ref: r,
                children: [
                    e.jsx('div', { className: k(Do, t?.background) }),
                    e.jsx('div', { className: k(Oo, t?.mask) }),
                    e.jsx('div', { className: k(Bo, t?.border) }),
                    s.children,
                ],
            });
        }),
        Lo = Ro('CardTitle', 'Title_e5ecf295'),
        Uo = s.forwardRef(function (t, n) {
            return e.jsx(Lo, { ...t, ref: n, children: t.children });
        }),
        zo = 'Card_content_f7ddaa4a',
        qo = Ro('Card', 'Card_3f55e450'),
        Vo = Ro('CardContent', zo),
        Go = s.forwardRef(function (t, n) {
            return e.jsx(qo, { ...t, ref: n, children: t.children });
        });
    ((Go.Header = Fo), (Go.Content = Vo), (Go.Action = jo), (Go.Title = Uo));
    const Ho = 1,
        Qo = 2,
        Wo = 3;
    function Yo(e, t) {
        const n = [],
            s = [];
        let r = '',
            o = !1,
            i = '',
            a = 0;
        for (let l = 0; l < e.length; l++) {
            const c = e[l];
            if (c === t.start[0] && e.slice(l, l + t.start.length) === t.start) {
                if (r) {
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push({ type: Ho, value: r });
                    } else n.push({ type: Ho, value: r });
                    r = '';
                }
                ((o = !0), (l += t.start.length - 1));
            } else if (c === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                ((o = !1), (l += t.end.length - 1));
                const e = i.trim();
                if (e.startsWith('@')) {
                    const t = e.slice(1).trim(),
                        r = { type: Qo, attrs: t.split('|'), instanceId: ++a, children: [] };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(r);
                    } else n.push(r);
                    s.push({ node: r, startIndex: n.length });
                } else if ('/' === e) s.length > 0 && s.pop();
                else {
                    const t = { type: Wo, instanceId: ++a, name: e };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(t);
                    } else n.push(t);
                }
                i = '';
            } else o ? (i += c) : (r += c);
        }
        if (r)
            if (s.length) {
                s[s.length - 1].node.children.push({ type: Ho, value: r });
            } else n.push({ type: Ho, value: r });
        return n;
    }
    const Xo = {
            COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
            base: 'FormatText_db904f12',
            base__fullSize: 'FormatText_base__fullSize_a514958e',
            nowrap: 'FormatText_nowrap_ff69eca3',
        },
        Zo = new Set(Xo.COLORS?.split(', ') ?? []);
    let Ko = 0;
    function Jo() {
        return ++Ko;
    }
    const ei =
        /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
    function ti(t) {
        const n = m.resolve('langCode');
        return (function (e, t, n) {
            return ye.has(t) ? e.map(n) : e.map((e, t, s) => (t === s.length - 1 ? n(e, t, s) : n(`${e} `, t, s)));
        })(
            (function (e, t) {
                return (_e[t] ?? be)(e);
            })(t, n),
            n,
            (t, n) => t && e.jsx('span', { children: t }, `${t}${n}`),
        );
    }
    function ni(t) {
        return Array.isArray(t)
            ? (function (t) {
                  const n = [];
                  for (let r = 0; r < t.length; r++) {
                      const o = t[r],
                          i = t[r + 1];
                      if ('string' != typeof i || !ei.test(i)) {
                          n.push(ni(o));
                          continue;
                      }
                      const a = ti(i.slice(1));
                      (n.push(
                          e.jsxs(
                              s.Fragment,
                              { children: [e.jsxs('span', { className: Xo.nowrap, children: [ni(o), i[0]] }), a] },
                              Jo(),
                          ),
                      ),
                          (r += 1));
                  }
                  return n;
              })(t)
            : 'string' == typeof t
              ? e.jsx(s.Fragment, { children: ti(t) }, Jo())
              : t;
    }
    const si = {
        class: function (t, ...n) {
            return e.jsx(
                'span',
                { className: n.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: t },
                Jo(),
            );
        },
        colorLegacy: function (t, n) {
            const s = Jo();
            return Zo.has(String(n))
                ? e.jsx('span', { className: `FormatText_colorLegacy__${n}`, children: t }, s)
                : e.jsx('span', { style: { color: `#${n}` }, children: t }, s);
        },
        bold: (e) => ['fontWeight', 'bold'],
        split: ni,
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
                Jo(),
            );
        },
        color: (e, t) => ['color', t],
        fontSize: (e, t) => ['fontSize', t],
        fontWeight: (e, t) => ['fontWeight', t],
        textDecoration: (e, t) => ['textDecoration', t],
    };
    function ri(e, t, n, s) {
        const r = n.map((t) => {
                if ('string' != typeof t) return t;
                const n = t.trim();
                if (n.startsWith('(') && n.endsWith(')')) {
                    const [t, ...r] = n.slice(1, -1).split(' ');
                    return t ? ri(e, t, r, s) : e;
                }
                return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
            }),
            o = s[t];
        return o ? o(e, ...r) : (console.error(`Function ${t} is not registered`), e);
    }
    function oi(e, t, n) {
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
            return s ? ri(e, s, r, n) : e;
        }, t);
    }
    function ii(e) {
        return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
    }
    function ai(e, t) {
        for (let n = 0; n < e.length; n++) {
            if ('$' === e[n]) {
                let s = n + 1;
                for (; s < e.length && !ii(e[s]); ) s++;
                const r = e.slice(n + 1, s),
                    o = t[r];
                if (o) return ai(e.replace(`$${r}`, String(o)), t);
            }
        }
        return e;
    }
    function li(e, t) {
        const n = [];
        for (let s = 0; s < e.length; s++) n[s] = ai(e[s], t);
        return n;
    }
    const ci = ['number', 'string', 'undefined'];
    function ui(t, n, r = {}, o = !0) {
        o && (Ko = 0);
        const i = [];
        function a(e) {
            if (ci.includes(typeof e)) {
                const t = i.at(-1);
                if ('string' == typeof t) return void (i[i.length - 1] = t + e);
            }
            i.push(e);
        }
        for (const l of t)
            if (l.type === Ho) a(l.value);
            else if (l.type === Wo)
                null === r[l.name] || ci.includes(typeof r[l.name])
                    ? a(r[l.name] ?? `{{${l.name}}}`)
                    : i.push(e.jsx(s.Fragment, { children: r[l.name] }, `var-${l.name}-${l.instanceId}`));
            else if (l.type === Qo) {
                const e = ui(l.children, n, r, !1),
                    t = oi(li(l.attrs, r), e, n);
                i.push(t);
            }
        return i;
    }
    function di(e) {
        return e
            .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
            .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
    }
    function pi(e) {
        return e
            .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
            .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
    }
    function mi(e) {
        return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
    }
    function fi(e) {
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
        })(e, mi, di, pi);
    }
    const hi = { start: '{{', end: '}}' },
        gi = s.memo(function (t) {
            const {
                    brackets: n = hi,
                    text: r,
                    params: o,
                    upgradeLegacy: i,
                    fullSize: a,
                    inline: l,
                    formatters: c,
                    split: u,
                    ...d
                } = t,
                p = s.useMemo(() => (t.upgradeLegacy ? fi(t.text) : t.text), [t.text, t.upgradeLegacy]),
                m = s.useMemo(() => (t.formatters ? { ...si, ...t.formatters } : si), [t.formatters]),
                f = s.useMemo(() => Yo(u ? `{{@ split}}${p}{{/}}` : p, n), [n, p, u]),
                h = s.useMemo(() => ui(f, m, t.params), [f, m, t.params]),
                g = k(Xo.base, a && Xo.base__fullSize, d.className);
            return t.inline
                ? (console.warn(
                      "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                      "Use 'split' prop instead.",
                  ),
                  e.jsx('p', {
                      ...d,
                      className: g,
                      ref: (e) => {
                          e?.setAttribute('cohinline', 'true');
                      },
                      children: h,
                  }))
                : e.jsx('span', { ...d, className: g, children: h });
        });
    function _i({ path: t, ...n }) {
        return e.jsx(gi, { text: m.resolve('strings').readOrEmpty(t), ...n });
    }
    const bi = 'AnimatedValue_d9f4b2f0',
        yi = 'AnimatedValue_animatedValue_4c490d83',
        vi = N.cubicBezier(0.33, 0, 0.25, 1);
    function wi(e) {
        return {
            enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
            leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
        };
    }
    function xi({ value: t, transition: n, children: r, className: o, classNames: i }) {
        const a = s.useMemo(ve, []),
            l = Us(t, {
                ...n,
                initial: { opacity: 1, y: '0rem', ...n?.initial },
                from: { opacity: 0, y: '-5rem', ...n?.from },
                enter: () => ({
                    opacity: 1,
                    y: '0rem',
                    delay: 330,
                    config: { easing: vi, duration: 330 },
                    onStart: () => {
                        const { enterElements: e, leftElements: t } = wi(a);
                        (e.forEach((e) => {
                            e instanceof HTMLElement && ((e.style.width = 'auto'), (e.style.position = 'relative'));
                        }),
                            t.forEach((e) => {
                                e instanceof HTMLElement && (e.style.position = 'absolute');
                            }));
                    },
                    ...n?.enter,
                }),
                leave: () => ({
                    top: 0,
                    left: 0,
                    opacity: 0,
                    y: '5rem',
                    config: { easing: vi, duration: 330 },
                    onStart: () => {
                        let e = 0;
                        const { enterElements: t, leftElements: n } = wi(a);
                        (n.forEach((t) => {
                            t instanceof HTMLElement &&
                                ((e = Math.max(e, t.offsetWidth)), (t.style.position = 'relative'));
                        }),
                            t.forEach((t) => {
                                t instanceof HTMLElement &&
                                    ((t.style.width = `${e}px`), (t.style.position = 'absolute'));
                            }));
                    },
                    ...n?.leave,
                }),
            });
        return e.jsx('div', {
            className: k(bi, o),
            children: l((n, s) => {
                const o = 0 === n.opacity.get() && !1 === n.opacity.isAnimating;
                return e.jsx(ir.div, {
                    className: k(yi, `js-animated-value-${a}-${t === s ? 'enter' : 'leave'}`, i?.animatedValue),
                    style: { ...n, position: o ? 'absolute' : 'relative' },
                    children: r(s),
                });
            }),
        });
    }
    const Ei = 'ProgressCount_3c6daa70',
        Ri = 'ProgressCount_label_d15406bd',
        Ci = 'ProgressCount_total_4f222a62',
        Ti = 'ProgressCount_divider_487d7768',
        Pi = m.resolve('intl');
    function Si({ withLabel: e, withoutLimit: t }) {
        return t
            ? 'battle_results.progression.missionsCompleteCounter'
            : 'battle_results.progression.completedPointsFrom.' + (e ? 'withLabel' : 'withoutLabel');
    }
    function ki({ current: t, total: n, withLabel: s, withoutLimit: r, className: o, classNames: i }) {
        return e.jsx(_i, {
            path: Si({ withLabel: s, withoutLimit: r }),
            className: k(Ei, o),
            params: {
                completed: Pi.formatNumber('integral', t),
                total: Pi.formatNumber('integral', n),
                totalClass: k(Ci, i?.total),
                labelClass: s && k(Ri, i?.label),
            },
        });
    }
    function Ni({
        current: t,
        total: n,
        withLabel: r,
        className: o,
        classNames: i,
        transitionCurrent: a,
        transitionTotal: l,
    }) {
        const c = br(),
            u = s.useRef({ transitionCurrent: a, transitionTotal: l });
        return (
            s.useEffect(() => {
                u.current = { transitionCurrent: a, transitionTotal: l };
            }, [a, l]),
            e.jsx(_i, {
                path: 'battle_results.progression.completedPointsFrom.' + (r ? 'withLabel' : 'withoutLabel'),
                className: k(Ei, o),
                params: {
                    completed: e.jsx(xi, {
                        className: i?.currentTransitionWrapper,
                        value: Pi.formatNumber('integral', t),
                        transition: {
                            ...a,
                            enter: {
                                ...a.enter,
                                onRest: (...e) => {
                                    (!0 !== u.current.transitionCurrent.immediate &&
                                        c.play('numbersShown', { target: 'mission-progress:progress-stats' }),
                                        'function' == typeof u?.current.transitionCurrent?.onRest &&
                                            u.current.transitionCurrent.onRest(...e));
                                },
                            },
                        },
                        children: J,
                    }),
                    total: e.jsx(xi, {
                        className: i?.totalTransitionWrapper,
                        value: Pi.formatNumber('integral', n),
                        transition: {
                            ...l,
                            enter: {
                                ...l?.enter,
                                onRest: (...e) => {
                                    (!0 !== u.current.transitionTotal?.immediate &&
                                        c.play('numbersShown', { target: 'mission-progress:progress-stats' }),
                                        'function' == typeof u?.current.transitionTotal?.onRest &&
                                            u.current.transitionTotal.onRest(...e));
                                },
                            },
                        },
                        children: J,
                    }),
                    totalClass: k(Ci, i?.total),
                    labelClass: r && k(Ri, i?.label),
                    dividerClass: Ti,
                },
            })
        );
    }
    const Ai = {
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
        className: c,
        classNames: u,
        ...d
    }) {
        return e.jsxs(Go, {
            className: k(Ai.card, s && Ai.card__disabled, c),
            ...d,
            children: [
                e.jsxs(Go.Header, {
                    onClick: o,
                    className: k(Ai.cardHeader, u?.header?.base),
                    classNames: {
                        ...u?.header,
                        background: k(Ai.cardHeaderBackground, u?.header?.background),
                        border: k(Ai.cardHeaderBorder, u?.header?.border),
                    },
                    children: [
                        e.jsxs('div', {
                            className: k(Ai.head, u?.head),
                            children: [
                                e.jsxs('div', {
                                    className: Ai.titleContainer,
                                    children: [
                                        void 0 !== n && e.jsx(go, { ...n }),
                                        e.jsx(Go.Title, {
                                            className: k(Ai.title, u?.title),
                                            children: e.jsx(vo, { text: t }),
                                        }),
                                    ],
                                }),
                                void 0 !== i &&
                                    e.jsx(Go.Action, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), i(e));
                                        },
                                        className: k(Ai.action, u?.action),
                                        tooltipParams: r,
                                    }),
                            ],
                        }),
                        e.jsx('div', { className: k(Ai.tail, u?.tail), children: void 0 !== l && e.jsx(ki, { ...l }) }),
                    ],
                }),
                void 0 !== a && e.jsx(Go.Content, { className: k(Ai.content, u?.content), children: a }),
                e.jsx('div', { className: Ai.divider }),
            ],
        });
    }
    function Mi(e) {
        return (
            !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
            (!s.isValidElement(e) && !!Array.isArray(e) && e.every(Mi))
        );
    }
    const ji = 'MultilineOverflow_8834bd8e',
        Di = 'MultilineOverflow_content_b539970d';
    const Oi = s.forwardRef(function (
        {
            text: t,
            brackets: n,
            params: r,
            formatters: o,
            upgradeLegacy: i,
            split: a = !0,
            onMouseEnter: l,
            onMouseLeave: c,
            onClick: u,
            tooltipDisabled: d = !1,
            tooltip: p,
            className: f,
            classNames: h,
            style: g,
            styleBase: _,
            ...b
        },
        y,
    ) {
        const v = s.useRef(null),
            [w, x] = s.useState(!1);
        s.useEffect(() => {
            if (0 === t.length) return;
            const e = v.current;
            if (!e) return;
            const n = document.createElement('div');
            let s = K;
            function r() {
                if (!e) return;
                (s(),
                    (n.style.visibility = 'hidden'),
                    (n.className = k(Di, e.children[0].className)),
                    (n.innerHTML = ''),
                    e.appendChild(n));
                const t = e.children[0];
                if (!t) return console.warn("MultilineOverflow can't get first child to handle it", e);
                const r =
                    ((o = e.getBoundingClientRect()), { x: (i = t.getBoundingClientRect()).x - o.x, y: i.y - o.y });
                var o, i;
                (t instanceof HTMLElement && (n.style.cssText = t.style.cssText),
                    (n.style.left = `${r.x}px`),
                    (n.style.top = `${r.y}px`));
                for (let e of t.childNodes.values()) {
                    if (e instanceof HTMLElement) {
                        const t = e.cloneNode(!0);
                        n.appendChild(t);
                    }
                    if (e.nodeType === Node.TEXT_NODE) {
                        const t = document.createTextNode(e.nodeValue ?? '');
                        n.appendChild(t);
                    }
                }
                const a = document.createElement('div');
                ((a.innerHTML = '...'),
                    n.appendChild(a),
                    (s = pe(() => {
                        const t = [];
                        for (let s = n.childNodes.length - 2; 0 !== s; s--) {
                            const r = n.childNodes[s];
                            if (r instanceof HTMLElement) {
                                if (r.offsetTop + r.offsetHeight <= e.offsetHeight) break;
                                t.push(r);
                            }
                        }
                        if (0 === t.length) (x(!1), a.remove());
                        else {
                            (x(!0), t.forEach((e) => e.remove()));
                            let n = 0;
                            for (; n++ < 1e3 && a.previousSibling && a.offsetTop + a.offsetHeight > e.offsetHeight; )
                                a.previousSibling?.remove();
                        }
                        n.style.visibility = '';
                    })));
            }
            const o = new ResizeObserver(r);
            return (
                o.observe(e),
                new ne()
                    .add(() => s())
                    .add(se(window, 'resize', r))
                    .add(o.disconnect.bind(o))
                    .add(n.remove.bind(n)).dispose
            );
        }, [y, t]);
        const E = (function (e) {
                return !e || Object.values(e).every(Mi);
            })(r),
            R = (function (e, t, n) {
                return pr({
                    ...n,
                    disabled: n?.disabled,
                    contentId: m.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
                    args: s.useMemo(() => ({ type: e, params: JSON.stringify(t), resId: t.resId }), [t, e]),
                });
            })(
                'format_text',
                s.useMemo(
                    () => ({
                        text: t,
                        params: E ? r : void 0,
                        split: a,
                        upgradeLegacy: i,
                        brackets: n,
                        resId: m.resolve('views').read((e) => e.mono.tooltips.tooltips('resId')),
                    }),
                    [t, n, a, i, r, E],
                ),
            ),
            C = p ?? R;
        if (
            (s.useEffect(() => {
                d || w || C.onMouseLeave();
            }, [w, C, p, d, E]),
            0 === t.length)
        )
            return null;
        return e.jsx('div', {
            ...b,
            onMouseEnter: function (e) {
                (l?.(e), w && !d && C.onMouseEnter(e));
            },
            onClick: function (e) {
                (u?.(e), d || C.onClick());
            },
            onMouseLeave: function (e) {
                (c?.(e), d || C.onMouseLeave());
            },
            ref: Ar([y, v]),
            className: k(ji, f, h?.base),
            style: _,
            children: e.jsx(gi, {
                text: t,
                brackets: n,
                params: r,
                upgradeLegacy: i,
                split: a,
                formatters: o,
                className: h?.text,
                style: { ...g, visibility: 'hidden' },
            }),
        });
    });
    function Bi({
        baseValue: e,
        newValue: t,
        animationType: n = Li.simple,
        deltaVisible: s = !1,
        preViewDeltaVisible: r = !1,
        animationConfig: o,
    }) {
        return {
            from: { width: e },
            to: { width: t },
            config: o ?? { duration: (n === Li.simple && s) || (!s && r) ? 0 : $i, easing: Ot.easeInOutCubic },
        };
    }
    const $i = 600,
        Fi = { duration: $i, easing: Ot.easeInOutCubic },
        Li = { simple: 'simple', grow: 'grow', growFreeze: 'growFreeze' },
        Ui = { medium: 'medium', large: 'large' },
        zi = { disabled: 'disabled', doneInactive: 'doneInactive', doneStatic: 'doneStatic' },
        qi = 'growing',
        Vi = 'shrinking',
        Gi = 'done',
        Hi = s.createContext(void 0);
    function Qi() {
        const e = s.useContext(Hi);
        if (!e) throw new Error('ProgressBar must be used within a ProgressBar');
        return e;
    }
    function Wi(e) {
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
    const Yi = {
        base: 'BackgroundPattern_8df99ec8',
        backgroundPattern: 'BackgroundPattern_backgroundPattern_d9136c40',
        backgroundPattern__medium: 'BackgroundPattern_backgroundPattern__medium_84d64a88',
        backgroundPattern__large: 'BackgroundPattern_backgroundPattern__large_3e5537fc',
    };
    const Xi = s.memo(function ({ className: t, backgroundPattern: n }) {
        const s = Qi();
        return (
            Wi('backgroundPattern'),
            e.jsx('div', {
                className: Yi.base,
                children: e.jsx(go, {
                    className: k(
                        t,
                        Yi.backgroundPattern,
                        0 === s.percentage ? Yi.backgroundPattern__noProgress : Yi[`backgroundPattern__${s.size}`],
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    path:
                        n ??
                        ((r = s.size),
                        (o = s.status),
                        o === zi.disabled
                            ? `ui.progressbar.bg_pattern_base_disabled_${r}`
                            : `ui.progressbar.bg_pattern_base_${r}`),
                }),
            })
        );
        var r, o;
    });
    function Zi(e, t) {
        const n = Qi(),
            s = br();
        return Ce((r) => {
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
    function Ki(e = 0) {
        const t = Qi(),
            n = t.soundTarget ?? 'progress-bar',
            s = br(),
            r = Zi(e, n),
            o = Ce(() => {
                t.status !== zi.doneInactive && t.progressCompleted
                    ? s.play('increaseDeltaMax', { target: n })
                    : s.play('progressSimple', { target: n });
            });
        return Ce(({ step: e } = {}) => {
            if (!t.silent)
                return t.activeComponents.has('delta') ? r(e) : t.activeComponents.has('fill') ? o() : void 0;
        });
    }
    const Ji = 'Delta_eb295acb',
        ea = 'Delta_delta__increase_e6e76b0b',
        ta = 'Delta_outside_b28c01e5',
        na = 'Delta_outside__increase_91391b24',
        sa = 'Delta_inside_b1b3a5c5',
        ra = 'Delta_inside__increase_fcd871c4',
        oa = s.memo(
            s.forwardRef(function (
                {
                    from: t,
                    growAnimationConfig: n,
                    shrinkAnimationConfig: r,
                    classNames: o,
                    className: i,
                    steps: a,
                    onState: l,
                    ...c
                },
                u,
            ) {
                const d = s.useRef(null),
                    p = Qi(),
                    [m, f] = $s(() => ({ width: 0 })),
                    [h, g] = $s(() => ({ width: 0 })),
                    [_, b] = $s(() => ({ left: 0, width: 0 })),
                    [y, ...v] = a,
                    [w, x] = s.useState(v),
                    [E, R] = s.useState(y ?? 'done'),
                    C = (p.value - t) / p.maxValue,
                    T = Ki(C);
                (Wi('delta'),
                    s.useEffect(() => {
                        if (0 === C) return;
                        const [e, ...t] = a;
                        (R(e ?? 'done'), x(t));
                    }, [f, g, a, C]));
                const P = Ce(l ?? K);
                s.useEffect(() => P(E), [E, P]);
                const S = Ce(() => {
                    const [e, ...t] = w;
                    void 0 !== e ? (R(e), x(t)) : R('done');
                });
                return (
                    s.useEffect(() => {
                        const e = d.current;
                        if (!e || 0 === C) return (g.set({ width: 0 }), f.set({ width: 0 }), R('done'), void x([]));
                        const t = 100 * Math.max(0, p.percentage - Math.max(0, C)),
                            s = 100 * Math.abs(C);
                        return (
                            e.classList.toggle(ea, C > 0),
                            'growing' === E
                                ? (b.set({ left: t, width: s }),
                                  g.set({ width: 100 }),
                                  void f.start({
                                      from: { width: 0 },
                                      to: { width: 100 },
                                      config: n ?? Fi,
                                      onRest: S,
                                      onStart: () => T({ step: E }),
                                  }))
                                : 'shrinking' === E
                                  ? (b.set({ left: t, width: s }),
                                    f.set({ width: 100 }),
                                    void g.start({
                                        from: { width: 100 },
                                        to: { width: 0 },
                                        config: r ?? Fi,
                                        onRest: S,
                                        onStart: () => T({ step: E }),
                                    }))
                                  : void 0
                        );
                    }, [b, p.percentage, C, n, f, S, g, T, r, E]),
                    e.jsxs(ir.div, {
                        ...c,
                        ref: Ar([u, d]),
                        className: k(i, Ji),
                        style: { left: _.left.to((e) => `${e}%`), width: _.width.to((e) => `${e}%`) },
                        children: [
                            e.jsxs(ir.div, {
                                ...c,
                                style: { width: h.width.to((e) => `${e}%`) },
                                className: k(o?.outside, ta, C > 0 && na),
                                children: [
                                    e.jsx(ir.div, {
                                        style: { width: m.width.to((e) => `${e}%`) },
                                        className: k(o?.inside, sa, C > 0 && ra),
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
        ia = {
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
        aa = ir(go),
        la = s.memo(function ({ animationConfig: t, classNames: n }) {
            const r = Qi(),
                { activeComponents: o } = Qi(),
                i = 100 * r.percentage,
                a = 100 * (r.previous?.percentage ?? 0),
                l = void 0 === r.previous ? i : a,
                c = r.status === zi.doneStatic,
                u = ar(),
                [d, p] = $s(() => ({ width: l }));
            return (
                s.useEffect(() => {
                    u.run(() =>
                        p.start(
                            Bi({
                                baseValue: l,
                                newValue: i,
                                animationType: r.animationType,
                                deltaVisible: o.has('delta'),
                                preViewDeltaVisible: o.has('previewDelta'),
                                animationConfig: t,
                            }),
                        ),
                    );
                }, [i, p, l, r.animationType, t, o, u]),
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(aa, {
                            path: `ui.progressbar.bg_pattern_base_done_${r.size}`,
                            className: k(
                                n?.done,
                                ia.done,
                                !r.progressCompleted && ia.done__hidden,
                                r.progressCompleted && (c ? ia.done__doneStatic : ia.done__visible),
                            ),
                            repeat: 'repeat',
                            position: 'left top',
                            style: { width: d.width.to((e) => `${e}%`) },
                        }),
                        !c &&
                            e.jsx(aa, {
                                path: `ui.progressbar.bg_pattern_base_done_complete_${r.size}`,
                                className: k(n?.doneComplete, ia.complete, r.progressCompleted && ia.complete__visible),
                                repeat: 'repeat',
                                position: 'left top',
                                style: { width: d.width.to((e) => `${e}%`) },
                            }),
                    ],
                })
            );
        }),
        ca = ir(go),
        ua = s.memo(function ({ filledPattern: t, animationConfig: n, className: r }) {
            const o = Qi(),
                { activeComponents: i } = Qi(),
                a = ar(),
                l = 100 * o.percentage,
                c = 100 * (o.previous?.percentage ?? 0),
                u = void 0 === o.previous ? l : c,
                [d, p] = $s(() => ({ width: u }));
            return (
                s.useEffect(() => {
                    a.run(() =>
                        p.start(
                            Bi({
                                baseValue: u,
                                newValue: l,
                                animationType: o.animationType,
                                deltaVisible: i.has('delta'),
                                preViewDeltaVisible: i.has('previewDelta'),
                                animationConfig: n,
                            }),
                        ),
                    );
                }, [p, u, o.animationType, i, l, n, a]),
                e.jsx(ca, {
                    path: t || `ui.progressbar.bg_pattern_base_filled_${o.size}`,
                    className: k(
                        r,
                        ia.filled,
                        o.status && ia[`filled__${o.status}`],
                        o.progressCompleted && ia.filled__hidden,
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    style: { width: d.width.to((e) => `${e}%`) },
                })
            );
        }),
        da = s.memo(function ({ filledPattern: t, classNames: n, className: r, animationConfig: o, ...i }) {
            const a = Qi(),
                l = Ki(),
                c = ar(),
                { activeComponents: u } = Qi(),
                d = 100 * a.percentage,
                p = 100 * (a.previous?.percentage ?? 0),
                m = void 0 === a.previous ? d : p;
            (Wi('fill'),
                s.useEffect(() => {
                    'growFreeze' === a.animationType && a.progressCompleted && !a.activeComponents.has('delta') && l();
                }, [a.activeComponents, a.animationType, a.progressCompleted, l]));
            const [f, h] = $s(() => ({ width: m }));
            return (
                s.useEffect(() => {
                    c.run(() =>
                        h.start({
                            ...Bi({
                                baseValue: m,
                                newValue: d,
                                animationType: a.animationType,
                                deltaVisible: u.has('delta'),
                                preViewDeltaVisible: u.has('previewDelta'),
                                animationConfig: o,
                            }),
                            onStart: () => l(),
                        }),
                    );
                }, [o, h, m, a.animationType, u, d, l, c]),
                e.jsxs('div', {
                    className: k(ia.base, r),
                    children: [
                        e.jsx(ir.div, { className: n?.fill, style: { width: f.width.to((e) => `${e}%`) } }),
                        i.children ??
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(ua, { filledPattern: t, className: n?.filledPattern, animationConfig: o }),
                                    e.jsx(la, {
                                        classNames: { done: n?.done, doneComplete: n?.doneComplete },
                                        animationConfig: o,
                                    }),
                                ],
                            }),
                        e.jsx(ir.div, {
                            className: k(
                                n?.edge,
                                ia.edge,
                                0 === a.percentage && ia.edge__noProgress,
                                !u.has('previewDelta') && !a.progressCompleted && ia.edge__visible,
                                a.status && ia[`edge__${a.status}`],
                            ),
                            style: { left: f.width.to((e) => `${e}%`) },
                        }),
                    ],
                })
            );
        });
    ((da.Filled = ua), (da.Done = la));
    const pa = { above: 'above', below: 'below' },
        ma = {
            base: 'Indicators_f2e99d31',
            step: 'Indicators_step_a78300f3',
            step__above: 'Indicators_step__above_a95c746e',
            indicator: 'Indicators_indicator_8484a8c7',
            label: 'Indicators_label_f8c7ff1e',
        };
    function fa({ position: t, value: n, children: s, className: r, classNames: o }) {
        const i = Qi();
        return e.jsxs('div', {
            className: k(ma.step, ma[`step__${t}`], r),
            style: { left: (n / i.maxValue) * 100 + '%' },
            children: [
                t === pa.below && e.jsx('div', { className: k(ma.indicator, o?.indicator) }),
                void 0 !== s && e.jsx('div', { className: k(ma.label, o?.label), children: s }),
                t === pa.above && e.jsx('div', { className: k(ma.indicator, o?.indicator) }),
            ],
        });
    }
    const ha = Ro('Indicators', ma.base),
        ga = function (t) {
            const n = Qi();
            return (
                Wi('stepIndicators'),
                e.jsx(ha, {
                    children: fe(t.count, (s) => {
                        const r = (s / (t.count - 1)) * 100,
                            o = n.value >= r && 0 !== n.value;
                        return e.jsx(
                            fa,
                            {
                                position: t.position,
                                value: r,
                                className: k(t.classNames?.step, o && t.classNames?.completed),
                                classNames: t.classNames?.stepClassNames,
                                children: t.children ? t.children(s, r, o) : void 0,
                            },
                            s,
                        );
                    }),
                })
            );
        };
    ((ga.Step = fa), (ga.positions = pa));
    const _a = 'PreviewDelta_86b01c3e',
        ba = 'PreviewDelta_negative_1c375892',
        ya = 'PreviewDelta_positive_be83fc48',
        va = 'PreviewDelta_negative__visible_19dda1c5',
        wa = 'PreviewDelta_positive__visible_19dda1c5',
        xa = s.forwardRef(function ({ value: t, classNames: n, ...s }, r) {
            const o = Qi();
            Wi('previewDelta');
            const i = t - o.value,
                a = i < 0 ? 'negative' : i > 0 ? 'positive' : 'neutral';
            if ('neutral' === a) return null;
            const l = Math.abs(i) / o.maxValue,
                c = i < 0 ? l : 0,
                u = 100 * (o.percentage - c),
                d = 100 * l;
            return e.jsxs('div', {
                ...s,
                'data-name': 'PreviewDelta',
                ref: r,
                className: k(_a, s.className),
                children: [
                    e.jsx('div', {
                        style: { left: `${u}%`, width: `${d}%`, ...s.style },
                        className: k(n?.negative, ba, 'negative' === a && va),
                    }),
                    e.jsx('div', {
                        style: { left: `${u}%`, width: `${d}%`, ...s.style },
                        className: k(n?.positive, ya, 'positive' === a && wa),
                    }),
                ],
            });
        });
    function Ea(t) {
        const [n, r] = s.useState(Math.min(t.value, t.maxValue)),
            [o, i] = s.useState(t.maxValue),
            a = Ee(n),
            l = Ee(o),
            c = s.useRef(new Set()),
            u = Ce((e) => r(Math.min(e, t.maxValue))),
            d = Ce((e) => c.current.has(e));
        (s.useLayoutEffect(() => {
            u(t.value);
        }, [t.value, u]),
            s.useLayoutEffect(() => {
                i(t.maxValue);
            }, [t.maxValue]));
        const p = Ce((e) => t.onValueChange?.(e));
        s.useEffect(() => {
            p(n);
        }, [p, n]);
        const m = Ce((e) => t.onMaxValueChange?.(e));
        s.useEffect(() => {
            m(o);
        }, [m, o]);
        const f = s.useMemo(() => {
            if (void 0 !== a && void 0 !== l) return { value: a, maxValue: l, percentage: a / l };
        }, [a, l]);
        me(o > 0, 'ProgressBar: maxValue must be greater than 0');
        const h = s.useMemo(() => {
                const e = n / o === 1 && t.status !== zi.doneInactive;
                return t.animationType === Li.growFreeze ? e && t.maxValueAchieved : e;
            }, [o, t.animationType, t.maxValueAchieved, t.status, n]),
            g = s.useMemo(
                () => ({
                    value: n,
                    maxValue: o,
                    setValue: u,
                    setMaxValue: i,
                    animationType: t.animationType ?? Li.simple,
                    size: t.size,
                    status: t.status,
                    previous: f,
                    activeComponents: c.current,
                    progressCompleted: h,
                    hasComponent: d,
                    soundTarget: t.soundTarget,
                    silent: t.silent ?? !1,
                    freezeUnlocked: t.maxValueAchieved ?? !1,
                    percentage: n / o,
                }),
                [n, o, u, t.animationType, t.size, t.status, t.soundTarget, t.silent, t.maxValueAchieved, f, h, d],
            );
        return e.jsx(Hi.Provider, { value: g, children: t.children });
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
        Ca = Ro('ProgressBar', Ra.base, { variants: { size: { medium: Ra.base__medium, large: Ra.base__large } } }),
        Ta = function ({ size: t = Ui.medium, backgroundPattern: n, status: s, className: r, classNames: o, ...i }) {
            return e.jsx(Ea, {
                size: t,
                status: s,
                ...i,
                children: e.jsxs(Ca, {
                    size: t,
                    className: k(r, i.value === i.maxValue && s !== zi.doneInactive && Ra.base__done),
                    children: [
                        e.jsx('div', { className: k(Ra.border, Ra[`border__${t}`], o?.border) }),
                        e.jsx('div', { className: k(Ra.background, o?.background) }),
                        e.jsx(Xi, { backgroundPattern: n, className: o?.backgroundPattern }),
                        i.children,
                    ],
                }),
            });
        };
    ((Ta.Fill = da),
        (Ta.Delta = oa),
        (Ta.PreviewDelta = xa),
        (Ta.NumberIndicators = ga),
        (Ta.sizes = Ui),
        (Ta.statuses = zi),
        (Ta.animations = Li));
    const Pa = 'ProgressBar_wrapper_a944db13',
        Sa = [qi, Vi],
        ka = s.memo(function ({ progressBar: t, fill: n, delta: s, wrapperSpringProps: r }) {
            const o = $s({ from: { opacity: 1 }, ...r });
            return e.jsx(Ta, {
                ...t,
                children: e.jsxs(ir.div, {
                    className: Pa,
                    style: o,
                    children: [
                        e.jsx(Ta.Fill, { ...n }),
                        void 0 !== s && e.jsx(Ta.Delta, { ...s, steps: s?.steps ?? Sa }),
                    ],
                }),
            });
        }),
        Na = 'ProgressStats_label_6e975df0',
        Aa = 'ProgressStats_receivedInBattle_d3abd2fe',
        Ia = Ro('ProgressStatsLabel', Na),
        Ma = s.forwardRef(({ className: t, text: n, transitionProps: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                className: k(Na, t),
                ref: o,
                children: e.jsx(xi, { value: n, transition: s, children: J }),
            }),
        ),
        ja = s.forwardRef(({ value: t, className: n, total: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                ref: o,
                className: k(Aa, n),
                children: e.jsx(_i, {
                    path: s ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    params: { value: t },
                }),
            }),
        ),
        Da = s.forwardRef(({ value: t, className: n, total: r, transition: o, target: i, ...a }, l) => {
            const c = br(),
                u = s.useMemo(
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
                    className: k(Aa, n),
                    children: e.jsx(xi, {
                        value: u,
                        transition: {
                            ...o,
                            enter: {
                                ...o.enter,
                                onRest: (...e) => {
                                    (!0 !== d.current.immediate &&
                                        c.play('numbersShown', { target: i ?? 'mission-progress:received-value' }),
                                        'function' == typeof o?.enter?.onRest && o.enter.onRest(...e));
                                },
                            },
                        },
                        children: (t) => e.jsx(_i, { path: t.textPath, params: { value: t.value } }),
                    }),
                })
            );
        }),
        Oa = Ro('ProgressStats');
    ((Oa.Label = Ia), (Oa.ReceivedValue = ja), (Oa.AnimatedReceivedValue = Da), (Oa.AnimatedLabel = Ma));
    const Ba = s.createContext(void 0);
    function $a() {
        const e = s.useContext(Ba);
        return (me(void 0 !== e, 'useCondition must be used under conditionContext.Provider'), e);
    }
    const Fa = s.createContext(void 0);
    function La() {
        const e = s.useContext(Fa);
        return (me(void 0 !== e, 'useMissionCard must be used under missionCardContext.Provider'), e);
    }
    const Ua = {
            base: 'MissonCard_b1fbfe09',
            groups: 'MissonCard_groups_5fd7af34',
            groups__overflow: 'MissonCard_groups__overflow_4afc997d',
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
            completedMarkIcon: 'MissonCard_completedMarkIcon_58afd8bc',
            reward: 'MissonCard_reward_710b2a75',
            rewards: 'MissonCard_rewards_e17088a1',
        },
        za = ['win', 'isAlive'],
        qa = N.cubicBezier(0.33, 0, 0.25, 1);
    const Va = {
        Condition: function (t) {
            const n = t.completed && t.multiQuest;
            return (
                t.lastCondition && n && t.animation && (t.rewardsGlowRef?.start(), t.completedMarkRef?.start()),
                e.jsx(Va.Root, {
                    condition: t.value,
                    children: e.jsxs(Va.Body, {
                        children: [
                            e.jsx(Va.Title, { questsAmount: t.questsAmount }),
                            e.jsx(Va.Description, { guiDisabledDescription: t.guiDisabledDescription }),
                            !n &&
                                e.jsx(Va.Progression, {
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
            return e.jsx(Ba.Provider, {
                value: t,
                children: e.jsx('div', { ...n, className: k(Ua.content, t.completed && Ua.content__completed) }),
            });
        },
        Description: function ({ guiDisabledDescription: t }) {
            const { description: n, conditionType: s } = $a();
            return s && za.includes(s)
                ? null
                : e.jsx('div', {
                      className: Ua.description,
                      children: e.jsx(Oi, { text: M(t ?? n), className: Ua.multiline }),
                  });
        },
        Title: function ({ questsAmount: t }) {
            const { title: n, icon: s, completed: r, progression: o } = $a(),
                { completed: i } = La();
            if (!s && !n) return null;
            const a = (function ({ icon: e, conditionCompleted: t, questsAmount: n, questCompleted: s }) {
                if (e && e.default.path) return (n && n > 1) || (s && 1 === n) || t ? e : void 0;
            })({ icon: s, questCompleted: i, questsAmount: t, conditionCompleted: r });
            return e.jsxs('div', {
                className: Ua.title,
                children: [
                    void 0 !== a &&
                        e.jsx('div', {
                            style: { backgroundImage: `url(${a.default.path})` },
                            className: k(Ua.titleIcon, a.default.isGold && Ua.titleIcon__gold),
                        }),
                    o ? E.formatNumber('integral', o.total) : n?.trim(),
                ],
            });
        },
        Body: Ro('MissionCardBody', Ua.body),
        Progression: function ({ completed: t, rewardsGlowRef: n, completedMarkRef: r }) {
            const { progression: o } = $a(),
                { animation: i, immediateAnimation: a } = La(),
                l = Ls(),
                c = Ls(),
                [[u, d], p] = s.useState(() => {
                    if (!o) return [0, 0];
                    const e = Math.max(0, o.current - o.earned);
                    return [e, e];
                });
            (s.useEffect(() => {
                var e;
                (i || a) && o && ((e = o.current >= o.total ? o.total : o.current), p(([, t]) => [t, e]));
            }, [i, a, o]),
                s.useEffect(() => {
                    t && !o && (i || a) && (r?.start(), n?.start());
                }, [o, t, r, n, i, a]),
                s.useEffect(() => {
                    a && (l.start(), c.start(), t && (r?.start(), n?.start()));
                }, [a, t, l, c, r, n]));
            const m = s.useMemo(() => {
                if (void 0 !== o)
                    return {
                        progress: {
                            value: d,
                            silent: a,
                            animationType: Li.grow,
                            status: zi.doneStatic,
                            maxValue: o.total,
                            className: Ua.progressbar,
                            maxValueAchieved: d === o.total,
                        },
                        delta: a
                            ? void 0
                            : {
                                  from: u,
                                  steps: u === d ? [] : [qi, Vi],
                                  growAnimationConfig: { duration: 600, easing: qa },
                                  shrinkAnimationConfig: { duration: 600, easing: qa },
                                  onState(e) {
                                      e === Gi &&
                                          d === o.current &&
                                          o.earned > 0 &&
                                          (l.start(), c.start(), t && r?.start());
                                  },
                              },
                        fill: { animationConfig: { duration: a ? 0 : 600, easing: qa } },
                    };
            }, [a, u, d, o, t, l, c, r]);
            return o
                ? (me.log(
                      o.total >= o.current && o.current >= 0,
                      `Unexpected progression values: current(${o.current}), total(${o.total})`,
                  ),
                  e.jsxs('div', {
                      className: Ua.progression,
                      children: [
                          void 0 !== m && e.jsx(ka, { progressBar: m.progress, delta: m.delta, fill: m.fill }),
                          e.jsxs('div', {
                              className: Ua.numberStats,
                              children: [
                                  e.jsx(Ni, {
                                      current: a ? o.current : d,
                                      total: o.total,
                                      className: Ua.progressionCounter,
                                      transitionCurrent: { ref: l, immediate: a },
                                      transitionTotal: { immediate: a },
                                  }),
                                  e.jsx(Oa.AnimatedReceivedValue, {
                                      value: E.formatNumber('integral', o.earned),
                                      transition: {
                                          ref: c,
                                          immediate: a,
                                          initial: { opacity: 0, y: '-5rem' },
                                          enter: {
                                              onRest: () => {
                                                  n?.start();
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
    var Ga = ((e) => (
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
        ))(Ga || {}),
        Ha = ((e) => (
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
        ))(Ha || {}),
        Qa = ((e) => (
            (e.MULTI = 'multi'),
            (e.CURRENCY = 'currency'),
            (e.PREMIUM_PLUS = 'premium_plus'),
            (e.NUMBER = 'number'),
            (e.STRING = 'string'),
            e
        ))(Qa || {}),
        Wa = ((e) => (
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
        ))(Wa || {}),
        Ya = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(Ya || {}),
        Xa = ((e) => (
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
        ))(Xa || {});
    function Za(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    var Ka,
        Ja = { exports: {} };
    var el,
        tl =
            (Ka ||
                ((Ka = 1),
                (el = Ja),
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
                    el.exports ? ((t.default = t), (el.exports = t)) : (window.classNames = t);
                })()),
            Ja.exports);
    const nl = Za(tl),
        sl = [
            Ga.Items,
            Ga.Equipment,
            Ga.Xp,
            Ga.XpFactor,
            Ga.Blueprints,
            Ga.BlueprintsAny,
            Ga.Goodies,
            Ga.Berths,
            Ga.Slots,
            Ga.Tokens,
            Ga.CrewSkins,
            Ga.CrewBooks,
            Ga.Customizations,
            Ga.CreditsFactor,
            Ga.TankmenXp,
            Ga.TankmenXpFactor,
            Ga.FreeXpFactor,
            Ga.BattleToken,
            Ga.LootBox,
            Ga.PremiumUniversal,
            Ga.NaturalCover,
            Ga.BpCoin,
            Ga.BattlePassSelectToken,
            Ga.BattlaPassFinalAchievement,
            Ga.BattleBadge,
            Ga.BonusX5,
            Ga.CrewBonusX3,
            Ga.EpicSelectToken,
            Ga.Comp7TokenWeeklyReward,
            Ga.DeluxeGift,
            Ga.BattleBoosterGift,
            Ga.OptionalDevice,
        ],
        rl = [Ga.Gold, Ga.Credits, Ga.Crystal, Ga.FreeXp],
        ol = [Ga.BattlePassPoints, Ga.EquipCoin],
        il = [Ga.PremiumPlus, Ga.Premium],
        al = ['engravings', 'backgrounds'],
        ll = ['engraving', 'background'],
        cl = (e, t = Ha.Small) => {
            const { name: n, type: s, value: r, icon: o, item: i, dogTagType: a } = e,
                l = t === Ha.S24x24 ? Ha.Small : t,
                c = ((e) => {
                    switch (e) {
                        case Ha.S600x450:
                            return 'c_600x450';
                        case Ha.S400x300:
                            return 'c_400x300';
                        case Ha.S296x222:
                            return 'c_296x222';
                        case Ha.S232x174:
                            return 'c_232x174';
                        case Ha.Big:
                            return 'c_80x80';
                        case Ha.Small:
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
                    return `R.images.gui.maps.icons.quests.bonuses.badges.${c}.${o}`;
                case 'dossier_achievement':
                    return `R.images.gui.maps.icons.achievement.${c}.${o}`;
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
                    return `R.images.gui.maps.icons.collectionItems.${c}.${o}`;
                default:
                    return `R.images.gui.maps.icons.quests.bonuses.${l}.${n}`;
            }
        },
        ul = [Ha.Small, Ha.Big],
        dl = {
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
            base: 'Reward_d65e1e12',
            base__dynamicBox: 'Reward_base__dynamicBox_45d7782b',
            tooltipWrapper: 'Reward_tooltipWrapper_75b925a5',
            icon: 'Reward_icon_e152f13b',
            overlay: 'Reward_overlay_8cbe65c9',
            highlight: 'Reward_highlight_f1cd08e0',
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
            image: 'Reward_image_810ec3a2',
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
        pl = m.resolve('images'),
        ml = new Map([
            [Ha.S24x24, Ha.Small],
            [Ha.S48x48, Ha.Small],
        ]),
        fl = ({
            name: t,
            image: n,
            isPeriodic: s = !1,
            isFixedBoxSize: r = !0,
            size: o = Ha.Big,
            special: i,
            value: a,
            valueType: l,
            title: c,
            style: u,
            className: d,
            classNames: p,
            tooltipArgs: f,
            periodicIconTooltipArgs: h,
        }) => {
            const g = ml.has(o) ? ml.get(o) : o,
                _ = ((e, t) => {
                    if (void 0 === t || !ul.includes(e)) return null;
                    switch (t) {
                        case Wa.BATTLE_BOOSTER:
                        case Wa.BATTLE_BOOSTER_REPLACE:
                            return Ya.BATTLE_BOOSTER;
                    }
                })(o, i),
                b = ((e) => {
                    if (void 0 === e) return null;
                    switch (e) {
                        case Wa.BATTLE_BOOSTER:
                            return Xa.BATTLE_BOOSTER;
                        case Wa.BATTLE_BOOSTER_REPLACE:
                            return Xa.BATTLE_BOOSTER_REPLACE;
                        case Wa.BUILT_IN_EQUIPMENT:
                            return Xa.BUILT_IN_EQUIPMENT;
                        case Wa.EQUIPMENT_PLUS:
                            return Xa.EQUIPMENT_PLUS;
                        case Wa.EQUIPMENT_TROPHY_BASIC:
                            return Xa.EQUIPMENT_TROPHY_BASIC;
                        case Wa.EQUIPMENT_TROPHY_UPGRADED:
                            return Xa.EQUIPMENT_TROPHY_UPGRADED;
                        case Wa.EQUIPMENT_MODERNIZED_UPGRADED_1:
                            return Xa.EQUIPMENT_MODERNIZED_UPGRADED_1;
                        case Wa.EQUIPMENT_MODERNIZED_UPGRADED_2:
                            return Xa.EQUIPMENT_MODERNIZED_UPGRADED_2;
                        case Wa.EQUIPMENT_MODERNIZED_UPGRADED_3:
                            return Xa.EQUIPMENT_MODERNIZED_UPGRADED_3;
                        case Wa.PROGRESSION_STYLE_UPGRADED_1:
                            return Xa.PROGRESSION_STYLE_UPGRADED_1;
                        case Wa.PROGRESSION_STYLE_UPGRADED_2:
                            return Xa.PROGRESSION_STYLE_UPGRADED_2;
                        case Wa.PROGRESSION_STYLE_UPGRADED_3:
                            return Xa.PROGRESSION_STYLE_UPGRADED_3;
                        case Wa.PROGRESSION_STYLE_UPGRADED_4:
                            return Xa.PROGRESSION_STYLE_UPGRADED_4;
                        case Wa.PROGRESSION_STYLE_UPGRADED_5:
                            return Xa.PROGRESSION_STYLE_UPGRADED_5;
                        case Wa.PROGRESSION_STYLE_UPGRADED_6:
                            return Xa.PROGRESSION_STYLE_UPGRADED_6;
                        case Wa.ATTACHMENT_RARE:
                            return Xa.ATTACHMENT_RARE;
                        case Wa.ATTACHMENT_EPIC:
                            return Xa.ATTACHMENT_EPIC;
                        case Wa.ATTACHMENT_LEGENDARY:
                            return Xa.ATTACHMENT_LEGENDARY;
                    }
                })(i),
                y = ((e, t) => {
                    const n = m.resolve('intl');
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
                v = pr({ contentId: f?.contentId ?? 0, args: f?.args, resId: f?.resId, decoratorId: f?.decoratorId }),
                w = mr({ header: h?.header, body: h?.body });
            return e.jsxs('div', {
                className: nl(dl.base, dl[`base__${o}`], !r && dl.base__dynamicBox, d),
                style: u,
                ...v,
                children: [
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs('div', {
                                className: nl(dl.image, r ? dl.image__fixedBox : dl[`image__${o}`], p?.image),
                                children: [
                                    _ &&
                                        e.jsx('div', {
                                            className: nl(dl.highlight, p?.highlight),
                                            style: {
                                                backgroundImage: `url(${pl.readOrEmpty(`quests.bonuses.${g}.${_}_highlight`)})`,
                                            },
                                        }),
                                    n &&
                                        e.jsx('div', {
                                            className: nl(dl.icon, p?.rewardIcon),
                                            style: { backgroundImage: `url(${n})` },
                                        }),
                                    b &&
                                        e.jsx('div', {
                                            className: nl(dl.overlay, p?.overlay),
                                            style: {
                                                backgroundImage: `url(${pl.readOrEmpty(`quests.bonuses.${g}.${b}_overlay`)})`,
                                            },
                                        }),
                                ],
                            }),
                            y &&
                                e.jsx('div', {
                                    className: nl(dl.info, dl[`info__${t}`], l === Qa.MULTI && dl.info__multi, p?.info),
                                    children: y,
                                }),
                            c && e.jsx('div', { className: dl.title, children: c }),
                        ],
                    }),
                    s && e.jsx('div', { className: nl(dl.timer, p?.periodicIcon), ...w }),
                ],
            });
        },
        hl = Object.fromEntries(Object.entries(si).map(([e]) => [e, (e) => e]));
    const gl = 'RewardsList_b956755b',
        _l = 'RewardsList_base__vertical_59db3c9f',
        bl = 'RewardsList_reward_fc200613',
        yl = 'RewardsList_reward__vertical_5f09c6e0',
        vl = 'RewardsList_boxRewardClassName_882c908d',
        wl = { [Ha.S24x24]: Ha.Small, [Ha.S48x48]: Ha.Small },
        xl = s.memo(function ({
            data: t,
            isFixedBoxSize: n,
            size: s = Ha.Big,
            isVertical: r = !1,
            count: o,
            classMix: i,
            rewardItemClassMix: a,
            boxRewardTooltip: l,
            boxRewardValue: c,
            boxRewardClassName: u,
            boxRewardClassNames: d,
        }) {
            const p = m.resolve('strings'),
                f = m.resolve('images'),
                h =
                    'number' == typeof o && o < t.length
                        ? `${f.readOrEmpty(`quests.bonuses.${wl[s] ?? s}.default`)}`
                        : void 0,
                g =
                    c ||
                    (function (e, t = {}) {
                        const n = Yo(e, hi);
                        return String(ui(n, hl, t));
                    })(fi(p.readOrEmpty('tooltips.quests.awards.additional.bottom')), { count: t.length - (o || 0) });
            return e.jsx('div', {
                className: nl(gl, r && _l, i),
                children:
                    void 0 !== h
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  t
                                      .slice(0, o)
                                      .map((t, o) =>
                                          e.jsx(
                                              'div',
                                              {
                                                  className: nl(bl, r && yl, a),
                                                  children: e.jsx(fl, { size: s, isFixedBoxSize: n, ...t }),
                                              },
                                              o,
                                          ),
                                      ),
                                  e.jsx('div', {
                                      className: nl(bl, r && yl, a),
                                      children: e.jsx(fl, {
                                          name: 'more',
                                          isFixedBoxSize: n,
                                          image: h,
                                          size: s,
                                          value: g,
                                          tooltipArgs: l,
                                          className: nl(vl, u),
                                          classNames: d,
                                      }),
                                  }),
                              ],
                          })
                        : t.map((t, o) =>
                              e.jsx(
                                  'div',
                                  {
                                      className: nl(bl, r && yl, a),
                                      children: e.jsx(fl, { size: s, isFixedBoxSize: n, ...t }),
                                  },
                                  o,
                              ),
                          ),
            });
        });
    function El({ bonuses: t, size: n, resId: r, boxRewardTooltipArgs: o, maxRewardsCount: i, questId: a, ...l }) {
        const c = s.useMemo(
                () =>
                    ce(t, (e) => {
                        return {
                            size: n,
                            name: e.name,
                            image: cl(e, n),
                            value: e.value,
                            valueType:
                                ((o = e.name),
                                sl.includes(o)
                                    ? Qa.MULTI
                                    : rl.includes(o)
                                      ? Qa.CURRENCY
                                      : ol.includes(o)
                                        ? Qa.NUMBER
                                        : il.includes(o)
                                          ? Qa.PREMIUM_PLUS
                                          : Qa.STRING),
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
            u = void 0 === i ? t.length : i <= 1 ? 1 : t.length <= i ? i : i - 1,
            d = s.useMemo(
                () =>
                    o || {
                        contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                        args: { showFromIndex: u },
                        resId: r,
                    },
                [u, r, o],
            );
        return e.jsx(xl, { ...l, data: c, count: u, boxRewardTooltip: d, size: n });
    }
    const Rl = 'AnimatedRewards_glowContainer_82630782',
        Cl = 'AnimatedRewards_c981a355',
        Tl = 'AnimatedRewards_rewardsWrapper_11b576b3',
        Pl = 'AnimatedRewards_glow_3a2cd010',
        Sl = 'AnimatedRewards_glowImage_4ecce597',
        kl = N.cubicBezier(0.33, 0, 0.67, 1),
        Nl = N.cubicBezier(0.23, 0, 0.57, 1),
        Al = s.forwardRef(function (
            {
                animationRef: t,
                immediateAnimation: n,
                maxRewardsCount: r,
                bonuses: o,
                boxRewardTooltipArgs: i,
                className: a,
                classNames: l,
                ...c
            },
            u,
        ) {
            const d = Ls(),
                [p] = $s(() => ({
                    ref: t,
                    from: { opacity: 0, scale: 0.6 },
                    to: async (e) => {
                        (await e({ opacity: 1, scale: 0.8, config: { duration: 330, easing: kl } }),
                            d.start(),
                            await e({ opacity: 0, scale: 1, config: { duration: 330, easing: kl } }));
                    },
                })),
                [m] = $s(() => ({
                    ref: d,
                    immediate: n,
                    from: { opacity: 1 },
                    to: { opacity: 0.4, config: { duration: 330, easing: Nl } },
                }));
            return (
                s.useEffect(() => {
                    n && (t?.pause(), t?.start({ immediate: !0, to: { opacity: 0, scale: 1 } }), d.start());
                }, [n]),
                e.jsxs('div', {
                    ref: u,
                    className: k(Cl, a),
                    children: [
                        e.jsx(ir.div, {
                            style: m,
                            className: k(Tl, l?.rewardsWrapper),
                            children: e.jsx(El, { ...c, maxRewardsCount: r, bonuses: o, boxRewardTooltipArgs: i }),
                        }),
                        e.jsx('div', {
                            className: k(Rl, l?.glowContainer),
                            children: fe(r ? Math.min(r, o.length) : o.length, (t) =>
                                e.jsx(
                                    ir.div,
                                    {
                                        style: p,
                                        className: Pl,
                                        children: e.jsx(
                                            go,
                                            { path: 'post_battle.progression.reward_glow', className: Sl },
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
        Il = m.resolve('views');
    function Ml({ limit: e, rewardsTooltipResId: t, ...n }) {
        return {
            contentId: Il.read((e) => e.lobby.tooltips.AdditionalBattlePassRewardsTooltip('resId')),
            args: { showFromIndex: e - 1, ...n },
            resId: t,
        };
    }
    function jl({
        completed: t,
        rewardsGlowRef: n,
        bonuses: s,
        maxRewardsCount: r,
        rewardsTooltipResId: o,
        immediateAnimation: i,
        questId: a,
        level: l,
        chapter: c,
        rewardType: u,
        className: d,
        rewardItemClassName: p,
    }) {
        const m = {
            bonuses: s,
            questId: a,
            maxRewardsCount: r,
            size: Ha.Small,
            resId: o,
            boxRewardTooltipArgs: Ml({
                limit: r,
                rewardsTooltipResId: o,
                rewardType: u,
                level: l ? l - 1 : void 0,
                chapter: c,
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
    const Dl = 'CompletedMark_fc4eee08',
        Ol = 'CompletedMark_glow_33775180',
        Bl = N.cubicBezier(1, 0, 0.95, 1),
        $l = N.cubicBezier(0.45, 0, 0.52, 1),
        Fl = s.forwardRef(function (
            {
                target: t,
                animationRef: n,
                className: r,
                path: o,
                width: i,
                height: l,
                glow: c,
                springProps: u,
                style: d,
                classNames: p,
                onGlowRest: m,
                ...f
            },
            h,
        ) {
            const g = s.useRef(u),
                _ = br(),
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
                [y, v] = $s(() => ({ from: { opacity: 0 } })),
                [w] = $s(() => ({
                    ref: n,
                    from: { maskSize: '0% 100%', opacity: 0 },
                    to: [
                        {
                            maskSize: '40% 80%',
                            opacity: 0.5,
                            config: { duration: 100, easing: Bl },
                            immediate: g.current?.immediate,
                            onStart: () => {
                                !0 !== g.current?.immediate &&
                                    _.play('showCheckMark', { target: t || 'mission-progress:checkmark' });
                            },
                        },
                        {
                            maskSize: '100% 100%',
                            opacity: 1,
                            config: { duration: 100, easing: Bl },
                            immediate: g.current?.immediate,
                        },
                    ],
                    onRest: () => {
                        v.start({
                            to: [
                                { opacity: 0.6, config: { duration: 160, easing: $l } },
                                { opacity: 0, config: { duration: 160, easing: $l } },
                            ],
                            onRest: m,
                        });
                    },
                    ...g,
                }));
            return (
                s.useEffect(() => {
                    g.current = u;
                }, [u]),
                e.jsxs('div', {
                    className: k(Dl, r),
                    children: [
                        e.jsx(ir.div, {
                            style: y,
                            className: k(Ol, p?.glow),
                            children: e.jsx(go, {
                                width: c?.width ?? b.glow.width,
                                height: c?.height ?? b.glow.height,
                                path: c?.path ?? b.glow.path,
                            }),
                        }),
                        e.jsx(ir.div, {
                            ...f,
                            style: { ...w, ...d },
                            ref: h,
                            className: p?.icon,
                            children: e.jsx(go, {
                                width: i ?? b.icon.width,
                                height: l ?? b.icon.height,
                                path: o ?? b.icon.path,
                            }),
                        }),
                    ],
                })
            );
        });
    function Ll({ value: t, questType: n, className: s }) {
        return t
            ? e.jsx('div', {
                  className: k(Ua.iconImage, Ua.iconImage__regular, n === xe.PREMIUM && Ua.iconImage__gold, s),
                  style: { backgroundImage: `url(${t})` },
              })
            : null;
    }
    s.forwardRef(function ({ path: t, width: n, height: s, ...r }, o) {
        const i = a.useAdaptive(
            { size: 24, path: 'post_battle.progression.done_24x24' },
            { large: { size: 32, path: 'post_battle.progression.done_32x32' } },
        );
        return e.jsx(go, { ...r, ref: o, width: n ?? i.size, height: s ?? i.size, path: t ?? i.path });
    });
    const Ul = (e) =>
            p.createElement(
                'svg',
                { width: 13, height: 7, viewBox: '0 0 13 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
                p.createElement('path', { d: 'M9 7L13 3.49026L9 0V2.98374L0 3V4H9V7Z', fill: '#454443' }),
            ),
        zl = m.resolve('strings');
    function ql(t) {
        return 'none' === t.type
            ? e.jsx('div', { className: k(Ua.separator, Ua.separator__none, t.className) })
            : 'union' === t.type
              ? e.jsx('div', { className: k(Ua.separator, Ua.separator__union, t.className) })
              : 'or' === t.type
                ? e.jsxs('div', {
                      className: k(Ua.separator, Ua.separator__or, t.className),
                      children: [
                          e.jsx(Ul, { width: 16, height: 16, className: Ua.invertedArrow }),
                          zl.readOrEmpty('battle_results.conditions.type.or'),
                          e.jsx(Ul, { width: 16, height: 16, className: Ua.arrow }),
                      ],
                  })
                : e.jsx('div', {
                      className: k(Ua.separator, Ua.separator__and, t.className),
                      children: zl.readOrEmpty('battle_results.conditions.type.and'),
                  });
    }
    function Vl(t) {
        if (!t.children) return null;
        const n = s.Children.toArray(t.children);
        return e.jsx(e.Fragment, {
            children: ue(
                n,
                (e) => null != e,
                (n, r) => e.jsxs(s.Fragment, { children: [r > 0 && e.jsx(ql, { ...t }), n] }, r),
            ),
        });
    }
    const Gl = { 1: 5, 2: 5, 3: 3 };
    function Hl(e) {
        return 'item' === e.type ? 1 : e.groups.reduce((e, t) => e + Hl(t), 0);
    }
    function Ql(e) {
        if ('item' === e.type) return e.condition?.icon;
        for (const t of e.groups) {
            const e = Ql(t);
            if (e) return e;
        }
    }
    function Wl(t) {
        const n = t.value;
        return 'item' === n.type
            ? e.jsx(
                  Va.Condition,
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
            : e.jsx(Vl, {
                  type: n.separate,
                  children: ue(
                      n.groups,
                      (e) => 'items' === e.type || e.index < 5,
                      (s, r) =>
                          e.jsx(
                              Wl,
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
    const Yl = 'R.images.gui.maps.icons.post_battle.general_quest',
        Xl = { default: { path: `${Yl}_32` }, medium: { path: Yl } },
        Zl = s.memo(function (t) {
            const n = Ls(),
                r = Ls(),
                { animation: o, immediateAnimation: i } = La(),
                { icon: l, questsAmount: c } = s.useMemo(() => {
                    const e = Hl(t.value);
                    return { icon: e > 1 ? (t.generalIcon ?? Xl) : (Ql(t.value) ?? Xl), questsAmount: e };
                }, [t.generalIcon, t.value]),
                u = a.useAdaptive(l.default, l),
                d = Gl[c] ?? 0,
                p = c > 3 ? 'groups__manyQuests' : 3 === c ? 'groups__threeQuests' : 'groups__twoQuests';
            return e.jsxs('div', {
                className: k(Ua.groups, c > 4 && Ua.groups__overflow, c > 1 && Ua[p]),
                children: [
                    e.jsx('div', {
                        className: Ua.iconContainer,
                        children: t.completed
                            ? e.jsx(Fl, {
                                  animationRef: n,
                                  className: Ua.completedMark,
                                  classNames: { icon: Ua.completedMarkIcon },
                                  springProps: { immediate: i, delay: 170 },
                              })
                            : e.jsx(Ll, { value: u.path, questType: t.questType }),
                    }),
                    e.jsx('div', {
                        className: Ua.questsWithRewards,
                        children: e.jsxs(Vl, {
                            type: t.separate ?? 'none',
                            children: [
                                e.jsx('div', {
                                    className: Ua.questsContainer,
                                    children: e.jsx(Wl, {
                                        value: t.value,
                                        completed: t.completed,
                                        questsAmount: c,
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
                                            e.jsx('div', { className: Ua.gap }),
                                            e.jsx('div', {
                                                className: Ua.rewardsContainer,
                                                children: e.jsx(jl, {
                                                    completed: t.completed,
                                                    rewardsGlowRef: r,
                                                    immediateAnimation: i,
                                                    bonuses: t.bonuses,
                                                    maxRewardsCount: d,
                                                    rewardsTooltipResId: t.rewardsTooltipResId,
                                                    questId: t.questId,
                                                    className: Ua.rewards,
                                                    rewardItemClassName: Ua.reward,
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
    function Kl({ completed: t, progress: n, animation: r, immediateAnimation: o, target: i, ...a }) {
        const l = br(),
            c = s.useMemo(() => ({ completed: t, animation: r, immediateAnimation: o }), [t, r, o]);
        return e.jsx(Fa.Provider, {
            value: c,
            children: e.jsx(Ii, {
                ...a,
                onMouseEnter: (e) => {
                    (a.onMouseEnter?.(e),
                        !0 !== a.disabled &&
                            l.play('mouse-enter', { target: i || 'mission-progress:mission-card', original: e }));
                },
                progressionCountProps: n,
                className: k(Ua.base, t && Ua.base__completed, a.className),
                classNames: { content: Ua.cardContent, ...a.classNames },
            }),
        });
    }
    ((Kl.Content = Va), (Kl.Groups = Zl), (Kl.Separators = Vl));
    const Jl = 'DailyQuests_divider_ac8bb1b5',
        ec = m.resolve('strings'),
        tc = i.observer(function ({ target: t, animation: n, immediateAnimation: r }) {
            const { model: o, controls: i } = po(),
                a = br();
            return e.jsx(Kl, {
                target: t,
                title: ec.readOrEmpty('user_missions.hub.basic_missions.daily.title'),
                onButtonAction: i.navigate,
                onClick: function (e) {
                    (a.play('click', { target: t, original: e }), i.navigate());
                },
                animation: n,
                immediateAnimation: r,
                actionTooltipParams: { body: ec.readOrEmpty('battle_results.progression.linkBtn.info') },
                children: e.jsx('div', {
                    children: ce(o.quests(), (t, n, r) =>
                        e.jsxs(
                            s.Fragment,
                            {
                                children: [
                                    e.jsx(Kl.Groups, { ...t }),
                                    r.length - 1 !== n && e.jsx(bo, { classNames: { base: Jl } }),
                                ],
                            },
                            t.questId,
                        ),
                    ),
                }),
            });
        });
    function nc(e) {
        for (let t = 0; t < document.styleSheets.length; t++) {
            const n = document.styleSheets.item(t);
            if (n.ownerNode === e) return n;
        }
    }
    function sc(e) {
        for (let t = 0; t < e.cssRules.length; t++) e.deleteRule(t);
    }
    function rc(e) {
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
                let e = te,
                    t = te;
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
        const o = new ne();
        return (
            n
                ? o.add(
                      se(t, 'load', () => {
                          s.resolve(t);
                      }),
                  )
                : re(e)
                      .then((e) => e.text())
                      .then((e) => {
                          const n = nc(t);
                          if (!n) throw new Error(`Can't find sheets for ${t}`);
                          (sc(n),
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
                    se(t, 'error', (t) => {
                        (console.error(t), s.reject(`Load css failure ${e}`));
                    }),
                )
                .add(() => {
                    !(function (e, t) {
                        const n = nc(t);
                        if (!n) return console.error(`Can't find sheets for ${t.id} (${e}). Clean rules skipped.`);
                        sc(n);
                    })(e, t);
                }),
            { promise: s, link: t, cleanup: o.dispose }
        );
    }
    function oc(t) {
        return e.jsx(e.Fragment, { children: t.children });
    }
    const ic = [xe.EASY, xe.MEDIUM, xe.HARD, xe.BONUS],
        ac = new (class {
            items = [];
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
            .addWithProps(uo, { options: ro })
            .addWithProps(
                function (t) {
                    return e.jsx(oc, {
                        children: e.jsx(_r, {
                            overrides: t.soundsOverrides,
                            severity: t.soundSeverity,
                            silent: t.soundsOff,
                            children: t.children,
                        }),
                    });
                },
                {
                    soundsOverrides:
                        ((lc = {
                            showCheckMark: { 'mission-progress:checkmark': 'umg_hub_quest_complete' },
                            numbersShown: {
                                'mission-progress:received-value': 'gui_pbs_missions_progress_stats',
                                'mission-progress:progress-stats': 'gui_pbs_missions_progress_stats',
                            },
                        }),
                        Object.entries(lc).reduce(
                            (e, [t, n]) => (
                                (e[t] = (e) => {
                                    e && e.target in n ? F.sound(n[e.target]) : fr[t]?.(e);
                                }),
                                e
                            ),
                            {},
                        )),
                },
            );
    var lc, cc;
    function uc(t) {
        return ac.render(e.jsx(tc, { target: 'mission-progress:daily-quests', ...t }));
    }
    exports.plugin =
        ((cc = async ({ url: t }) => {
            const n = new ne();
            return {
                async init() {
                    var s,
                        r,
                        o,
                        i,
                        a,
                        l,
                        c,
                        d = [];
                    try {
                        const s = rc(
                            `${(function (e, t = '/') {
                                let n = -1;
                                for (let s = 0; s < e.length; s++) {
                                    const r = e[s];
                                    if ((r === t && (n = s), '.' === r)) return e.slice(0, n);
                                }
                                return e;
                            })(t)}/daily_quests.css`,
                        );
                        (n.add(s.cleanup), await s.promise.catch(console.error));
                        const r = X(ro, { name: 'DailyQuestsProgressDataLayer' }),
                            o = (u(d, ((c = r.dispose), { [Symbol.dispose]: c })), []),
                            i = r.readByPath('dailyQuests'),
                            {
                                daily: a,
                                premium: l,
                                epic: p,
                            } = (function (e, t, n) {
                                if (Array.isArray(e)) return e.reduce(t, n);
                                let s = n;
                                for (let r = 0; r < e.length; r++) s = t(s, le(e, r), r, e);
                                return s;
                            })(
                                i,
                                (e, t) => (
                                    t.status !== we.Done ||
                                        (ic.includes(t.level)
                                            ? (e.daily = !0)
                                            : t.level === xe.PREMIUM
                                              ? (e.premium = !0)
                                              : t.level === xe.EPIC && (e.epic = !0)),
                                    e
                                ),
                                { daily: !1, premium: !1, epic: !1 },
                            );
                        return (
                            p &&
                                o.push({
                                    id: ve(),
                                    item: e.jsx(_i, { path: 'battle_results.missionsProgress.notificationsTabs.epic' }),
                                }),
                            l &&
                                o.push({
                                    id: ve(),
                                    item: e.jsx(_i, {
                                        path: 'battle_results.missionsProgress.notificationsTabs.premium',
                                    }),
                                }),
                            a &&
                                o.push({
                                    id: ve(),
                                    item: e.jsx(_i, {
                                        path: 'battle_results.missionsProgress.notificationsTabs.daily',
                                    }),
                                }),
                            {
                                notifications: o,
                                animated: !0,
                                component: uc,
                                categoryOrder: 800,
                                completed: a || l || p,
                            }
                        );
                    } catch (f) {
                        var p = f,
                            m = !0;
                    } finally {
                        ((s = d),
                            (r = p),
                            (o = m),
                            (i =
                                'function' == typeof SuppressedError
                                    ? SuppressedError
                                    : function (e, t, n, s) {
                                          return (
                                              ((s = Error(n)).name = 'SuppressedError'),
                                              (s.error = e),
                                              (s.suppressed = t),
                                              s
                                          );
                                      }),
                            (a = (e) =>
                                (r = o ? new i(e, r, 'An error was suppressed during disposal') : ((o = !0), e))),
                            (l = (e) => {
                                for (; (e = s.pop()); )
                                    try {
                                        var t = e[1] && e[1].call(e[2]);
                                        if (e[0]) return Promise.resolve(t).then(l, (e) => (a(e), l()));
                                    } catch (n) {
                                        a(n);
                                    }
                                if (o) throw r;
                            })());
                    }
                },
                async destroy() {
                    n.dispose();
                },
            };
        }),
        async (e) => ({ ...(await cc(e)), id: e.id }));
});

export default exports;
