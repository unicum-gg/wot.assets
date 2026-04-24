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
})(this, function (e, t, n, s, r, a, o, i) {
    'use strict';
    var c = (e, t) => ((t = Symbol[e]) ? t : Symbol.for('Symbol.' + e)),
        l = (e) => {
            throw TypeError(e);
        },
        u = (e, t, n) => {
            var s, r;
            null != t
                ? ('object' != typeof t && 'function' != typeof t && l('Object expected'),
                  n && (s = t[c('asyncDispose')]),
                  void 0 === s && ((s = t[c('dispose')]), n && (r = s)),
                  'function' != typeof s && l('Object not disposable'),
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
        f = t.createContainer();
    function m(e, t) {
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
    class _ {
        constructor(e = window.R.images, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, n = 'silent') {
            const s = e.startsWith('R.images') ? e : m(this.prefix, e),
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
    var g = ((e) => (
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
    ))(g || {});
    const b = { integral: 0, gold: 1 },
        y = { fractional: 0, woZeroDigits: 1 },
        v = Object.keys(b),
        w = Object.keys(y);
    const x = { full: g.FullTime, short: g.ShortTime };
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
        dateTimeFormats: g,
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
        const a = s.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof e?.[t]) return e[t];
        }, n);
        return a && 'function' == typeof a[r] ? (t ? a[r](t) : a[r]()) : void 0;
    }
    class P {
        constructor(e = window.R.strings, t) {
            ((this.root = e), (this.prefix = t));
        }
        read(e) {
            return this.readOr(e, () => {});
        }
        readOr(e, t, n = 'silent') {
            const s = e.startsWith('R.strings') ? e : m(this.prefix, e),
                r = C(s, void 0, e.startsWith('R.strings') ? window : this.root);
            return void 0 === r ? ('silent' !== n && h(`Resource not found: ${s}`, n), t()) : r;
        }
        readOrEmpty(e, t = 'warn') {
            return this.readOr(e, () => '', t);
        }
        readOrThrow(e) {
            const t = e.startsWith('R.strings') ? e : m(this.prefix, e),
                n = C(t, void 0, e.startsWith('R.strings') ? window : this.root);
            if (void 0 === n) throw new Error(`Resource not found: ${t}`);
            return n;
        }
        plural(e, t) {
            return this.pluralOr(e, t, () => {});
        }
        pluralOr(e, t, n, s = 'silent') {
            const r = e.startsWith('R.strings') ? e : m(this.prefix, e),
                a = C(r, t, e.startsWith('R.strings') ? window : this.root);
            return void 0 === a ? ('silent' !== s && h(`Resource not found: ${r}`, s), n()) : a;
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
            const s = e.startsWith('R.videos') ? e : m(this.prefix, e),
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
    function I(e) {
        var t,
            n,
            s = '';
        if ('string' == typeof e || 'number' == typeof e) s += e;
        else if ('object' == typeof e)
            if (Array.isArray(e)) {
                var r = e.length;
                for (t = 0; t < r; t++) e[t] && (n = I(e[t])) && (s && (s += ' '), (s += n));
            } else for (n in e) e[n] && (s && (s += ' '), (s += n));
        return s;
    }
    function k() {
        for (var e, t, n = 0, s = '', r = arguments.length; n < r; n++)
            (e = arguments[n]) && (t = I(e)) && (s && (s += ' '), (s += t));
        return s;
    }
    f.register({
        strings: t.asFunction(() => new P()).singleton(),
        images: t.asFunction(() => new _(window.R.images.gui.maps.icons)).singleton(),
        atlases: t.asFunction(() => new _(window.R.atlases)).singleton(),
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
                            : h(`Sound not found: ${e}`, 'warn');
                    }
                },
            )
            .singleton(),
        langCode: t.asValue(R.strings.settings.LANGUAGE_CODE()),
        intl: t.asValue(E),
    });
    const S = {
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
        reverseEaseInOutCirc: (e) => 1 - S.easeInOutCirc(1 - e),
        easeOutBack(e) {
            const t = 1.70158;
            return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
        },
        bezier: (e, t, n, s) => (r) =>
            (1 - r) * (1 - r) * (1 - r) * e + 3 * (1 - r) * (1 - r) * r * t + 3 * (1 - r) * r * r * n + r * r * r * s,
        cubicBezier: (e, t, n, s) => (r) => {
            const a = (function (e, t, n, s = 1e-5) {
                let r = e;
                for (let a = 0; a < 8; a++) {
                    const a = A(r, t, n) - e;
                    if (Math.abs(a) < s) return r;
                    const o = N(r, t, n);
                    if (Math.abs(o) < s) break;
                    r -= a / o;
                }
                return r;
            })(r, e, n);
            return 3 * t * (1 - a) ** 2 * a + 3 * s * (1 - a) * a ** 2 + a ** 3;
        },
    };
    function A(e, t, n) {
        return 3 * t * (1 - e) ** 2 * e + 3 * n * (1 - e) * e ** 2 + e ** 3;
    }
    function N(e, t, n) {
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
    function O(e) {
        viewEnv.setTrackMouseOnStage(e);
    }
    const D = { down: j('mousedown'), up: j('mouseup'), move: j('mousemove') };
    function B(e) {
        engine.call('PlaySound', e);
    }
    !(function () {
        const e = { listeners: 0, enabled: !0, initialized: !1 };
        function t() {
            e.enabled && O(!1);
        }
        function n() {
            e.enabled && O(!0);
        }
        function s() {
            e.enabled
                ? e.listeners < 1
                    ? ((e.initialized = !1),
                      document.body.removeEventListener('mouseenter', t),
                      document.body.removeEventListener('mouseleave', n),
                      O(!1))
                    : e.initialized ||
                      ((e.initialized = !0),
                      document.body.addEventListener('mouseenter', t),
                      document.body.addEventListener('mouseleave', n))
                : O(!1);
        }
        ['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const r = `mouse${t}`,
                            a = D[t]((e) => n([e, 'outside']));
                        function o(e) {
                            n([e, 'inside']);
                        }
                        return (
                            window.addEventListener(r, o),
                            s(),
                            () => {
                                (a(), window.removeEventListener(r, o), (e.listeners -= 1), s());
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
        $ = { ...Object.keys(F).reduce((e, t) => ((e[t] = () => B(F[t])), e), {}), sound: B },
        U = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
        L = {
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
    Object.keys(U).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === U[t]), e), {});
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
        const a = new Map(),
            o = { subscribersNotified: new W() },
            i = engine.whenReady.then(() => {
                function e(e, t, n) {
                    (n.forEach((n) => {
                        const s = a.get(n);
                        void 0 !== s && s(e, t);
                    }),
                        o.subscribersNotified.emit());
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
        function c() {
            try {
                const e = n(t);
                return s.split('.').reduce((e, t) => e[t], e);
            } catch (e) {
                throw new Error(`Failure get root of ${r}. Root id: ${t}. Context: ${s}`);
            }
        }
        const l = (e) => {
            const n = c();
            if ('string' != typeof e || 0 === e.length) return n;
            try {
                return e.split('.').reduce((e, t) => {
                    if (!(t in e)) throw new Error(`Key "${t}" doesn't exists in part of model`);
                    const n = e[t];
                    return 'function' == typeof n ? n.bind(e) : n;
                }, n);
            } catch (a) {
                throw new Error(`Failure readByPath in ${r}. Root id: ${t}. Context: ${s}:\n${a}\n`);
            }
        };
        function u(e) {
            viewEnv.removeDataChangedCallback(e, t) ? a.delete(e) : console.error("Can't remove callback by id:", e);
        }
        return {
            subscribe: (n, r) => {
                const o = (function (e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                })('string' == typeof r ? `${s}.${r}` : s, t, !0);
                return (a.set(o, n), e && n(l(r), []), o);
            },
            readByPath: l,
            readSafeByPath: (e) => {
                const t = c();
                return 'string' != typeof e || 0 === e.length
                    ? t
                    : e.split('.').reduce((e, t) => {
                          const n = e?.[t];
                          return 'function' == typeof n ? n.bind(e) : n;
                      }, t);
            },
            createCallback: (e, t) => {
                const n = l(t);
                return (...t) => {
                    n(e(...t));
                };
            },
            createCallbackNoArgs: (e) => {
                const t = l(e);
                return () => {
                    t();
                };
            },
            dispose: function () {
                if (0 === t || window.subViews.ids().includes(t)) for (const e of a.keys()) u(e);
                i.then((e) => e());
            },
            unsubscribe: u,
            events: o,
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
                ((o.prototype.append = function (e, t) {
                    ((e = r(e)), (t = a(t)));
                    var n = this.map[e];
                    (n || ((n = []), (this.map[e] = n)), n.push(t));
                }),
                    (o.prototype.delete = function (e) {
                        delete this.map[r(e)];
                    }),
                    (o.prototype.get = function (e) {
                        var t = this.map[r(e)];
                        return t ? t[0] : null;
                    }),
                    (o.prototype.getAll = function (e) {
                        return this.map[r(e)] || [];
                    }),
                    (o.prototype.has = function (e) {
                        return this.map.hasOwnProperty(r(e));
                    }),
                    (o.prototype.set = function (e, t) {
                        this.map[r(e)] = [a(t)];
                    }),
                    (o.prototype.forEach = function (e) {
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
                    u.call(m.prototype),
                    (self.Headers = o),
                    (self.Request = d),
                    (self.Response = m),
                    (self.fetch = function (t, n) {
                        var r;
                        return (
                            (r = d.prototype.isPrototypeOf(t) && !n ? t : new d(t, n)),
                            new fetch.Promise(function (t, n) {
                                var a = (function () {
                                    return s && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                        ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                        : new XMLHttpRequest();
                                })();
                                function o() {
                                    if (4 === a.readyState) {
                                        var e = 1223 === a.status ? 204 : a.status;
                                        if (e < 100 || e > 599) n(new TypeError('Network request failed'));
                                        else {
                                            var s = {
                                                    status: e,
                                                    statusText: a.statusText,
                                                    headers: f(a),
                                                    url:
                                                        'responseURL' in a
                                                            ? a.responseURL
                                                            : /^X-Request-URL:/m.test(a.getAllResponseHeaders())
                                                              ? a.getResponseHeader('X-Request-URL')
                                                              : void 0,
                                                },
                                                r = 'response' in a ? a.response : a.responseText;
                                            t(new m(r, s));
                                        }
                                    }
                                }
                                ('cors' === r.credentials && (a.withCredentials = !0),
                                    (a.onreadystatechange = o),
                                    self.usingActiveXhr ||
                                        ((a.onload = o),
                                        (a.onerror = function () {
                                            n(new TypeError('Network request failed'));
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
            function o(e) {
                this.map = {};
                var t = this;
                e instanceof o
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
            function c(e) {
                return new fetch.Promise(function (t, n) {
                    ((e.onload = function () {
                        t(e.result);
                    }),
                        (e.onerror = function () {
                            n(e.error);
                        }));
                });
            }
            function l(e) {
                var t = new FileReader();
                return (t.readAsArrayBuffer(e), c(t));
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
                              var e = i(this);
                              if (e) return e;
                              if (this._bodyBlob) return fetch.Promise.resolve(this._bodyBlob);
                              if (this._bodyFormData) throw new Error('could not read FormData body as blob');
                              return fetch.Promise.resolve(new Blob([this._bodyText]));
                          }),
                          (this.arrayBuffer = function () {
                              return this.blob().then(l);
                          }),
                          (this.text = function () {
                              var e,
                                  t,
                                  n = i(this);
                              if (n) return n;
                              if (this._bodyBlob)
                                  return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), c(t));
                              if (this._bodyFormData) throw new Error('could not read FormData body as text');
                              return fetch.Promise.resolve(this._bodyText);
                          }))
                        : (this.text = function () {
                              var e = i(this);
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
                    (this.headers = new o(t.headers)),
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
            function f(e) {
                var t = new o();
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
            function m(e, t) {
                (t || (t = {}),
                    this._initBody(e),
                    (this.type = 'default'),
                    (this.url = null),
                    (this.status = t.status),
                    (this.ok = this.status >= 200 && this.status < 300),
                    (this.statusText = t.statusText),
                    (this.headers = t.headers instanceof o ? t.headers : new o(t.headers)),
                    (this.url = t.url || ''));
            }
        })());
    const re = fetch;
    function ae(e, t) {
        return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
    }
    const oe = {
        NONE: 'NONE',
        ...((ie = [
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
        ie.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
        ...ae(
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
        ...ae(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
        ...ae(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
        ...ae(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
        ...ae(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
        ...ae(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
        ...ae(['Up', 'Down'], 'Page'),
        ...ae(['Left', 'Right'], 'Bracket'),
    };
    var ie;
    new Set(Object.values(oe));
    const ce = function (e, t) {
        if (!(t >= e.length)) return Array.isArray(e) ? e[t] : e[t]?.value;
    };
    function le(e, t) {
        return Array.isArray(e) ? e.map(t) : e.map((e, n, s) => t(e?.value, n, s));
    }
    function ue(e, t) {
        if (Array.isArray(e)) return e.some(t);
        for (let n = 0; n < e.length; n++) {
            if (t(ce(e, n), n, e)) return !0;
        }
        return !1;
    }
    function de(e, t, n) {
        const s = [];
        for (let r = 0; r < e.length; r++) {
            const a = ce(e, r);
            t(a, r, e) && s.push(n(a, r, e));
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
    function me(e, t, n) {
        return 'function' == typeof t ? he(0, e, t) : (fe(void 0 !== n, 'fn must be defined'), he(e, t, n));
    }
    function he(e, t, n) {
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
    ['ko', 'no'].includes(f.resolve('langCode'));
    const ge = {
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
    const we = () => {};
    function xe(t) {
        const n = t;
        return s.forwardRef(function (t, s) {
            const a = t,
                o = r.useAdaptive(a, a.adaptive),
                { path: i, ...c } = o,
                l = o.images ?? f.resolve('images'),
                u = { ...c, ref: s };
            {
                const t = i ? l.readOr(i, we, 'warn') : void 0;
                return t ? e.jsx(n, { ...u, src: t }) : e.jsx(n, { ...u, unknown: !0 });
            }
        });
    }
    const Re = {
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
                position: a,
                width: o,
                src: i,
                height: c,
                unselectable: l,
                unknownStyle: u = Re,
                ...d
            } = t;
            return e.jsx('div', { ...d, ref: n, style: { width: t.width, height: t.height, ...u, ...t.style } });
        }
        const { repeat: s, fit: r, position: a, width: o, height: i, unknownStyle: c, unselectable: l, ...u } = t;
        return e.jsx('div', {
            ...u,
            ref: n,
            style: {
                backgroundImage: `url(${t.src})`,
                backgroundRepeat: s ?? 'no-repeat',
                backgroundSize: r ?? 'contain',
                backgroundPosition: a ?? 'center center',
                width: 'number' == typeof o ? `${o}rem` : o,
                height: 'number' == typeof i ? `${i}rem` : i,
                ...u.style,
            },
        });
    });
    const Ee = xe(
        s.forwardRef(function (t, n) {
            if (t.unknown) {
                const {
                    repeat: s,
                    fit: r,
                    position: a,
                    width: o,
                    src: i,
                    height: c,
                    unselectable: l,
                    unknown: u,
                    unknownStyle: d = Re,
                    ...p
                } = t;
                return e.jsx('div', { ...p, ref: n, style: { width: t.width, height: t.height, ...d, ...t.style } });
            }
            const {
                repeat: s,
                fit: r,
                position: a,
                width: o,
                height: i,
                unknownStyle: c,
                unknown: l,
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
                    backgroundPosition: a ?? 'center center',
                    width: 'number' == typeof o ? `${o}rem` : o,
                    height: 'number' == typeof i ? `${i}rem` : i,
                    ...d.style,
                },
            });
        }),
    );
    xe(
        s.forwardRef(function (t, n) {
            const { width: s, height: r, src: a, unselectable: o, unknown: i, unknownStyle: c = Re, ...l } = t;
            return t.unknown
                ? e.jsx('div', { ...l, style: { width: t.width, height: t.height, ...c } })
                : e.jsx('img', { ...l, ref: n, src: a, width: s, height: r });
        }),
    );
    const Ce = 'Divider_80a19f4b';
    function Pe({ classNames: t }) {
        return e.jsx('div', {
            className: k(Ce, t?.base),
            children: e.jsx(Ee, {
                className: t?.image,
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    }
    const Te = {
        click: Ie('play'),
        'hot-key': Ie('play'),
        'mouse-enter': Ie('highlight'),
        increaseAmount: Ie('cons_ammo_single_plus'),
        decreaseAmount: Ie('cons_ammo_single_minus'),
        increaseAmountRoll: Ie('cons_ammo_roll_plus'),
        decreaseAmountRoll: Ie('cons_ammo_roll_minus'),
        close: Ie('cancelcloseno'),
        'show-context-menu': Ie('tabb'),
        progressSimple: Ie('gui_hangar_progressbar_simple'),
        increaseDelta: Ie('gui_hangar_progressbar_delta_increase'),
        decreaseDelta: Ie('gui_hangar_progressbar_delta_decrease'),
        increaseDeltaMax: Ie('gui_hangar_progressbar_delta_max'),
        pointerGrab: Ie('gui_hangar_progressbar_pointer_grab'),
        pointerDrag: Ie('gui_hangar_progressbar_pointer_drag'),
    };
    function Ie(e) {
        return () => {
            $.sound(e);
        };
    }
    const ke = s.createContext(null);
    function Se({ severity: t = 'warn', overrides: n, silent: r = !1, children: a }) {
        const o = s.useMemo(() => ({ ...Te, ...n }), [n]),
            i = s.useMemo(
                () => ({
                    play: function (e, n) {
                        if (r) return;
                        const s = o[e];
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
                    settings: { plays: o, severity: t, silent: r },
                }),
                [o, t, r],
            );
        return e.jsx(ke.Provider, { value: i, children: a });
    }
    function Ae() {
        const e = s.useContext(ke);
        if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
        return e;
    }
    const Ne = (e) => (t) => {
            e.forEach((e) =>
                ((e, t) => {
                    e && ('function' == typeof e ? e(t) : (e.current = t));
                })(e, t),
            );
        },
        Me = (e) => {
            const t = s.useRef(void 0);
            return (
                s.useEffect(() => {
                    t.current = e;
                }, [e]),
                t.current
            );
        },
        je = [];
    function Oe(e) {
        const t = s.useRef(e);
        return (
            s.useLayoutEffect(() => {
                t.current = e;
            }),
            s.useCallback((...e) => (0, t.current)(...e), je)
        );
    }
    function De(e) {
        s.useEffect(() => e, []);
    }
    s.createContext(void 0);
    var Be = Je(),
        Fe = (e) => Ye(e, Be),
        $e = Je();
    Fe.write = (e) => Ye(e, $e);
    var Ue = Je();
    Fe.onStart = (e) => Ye(e, Ue);
    var Le = Je();
    Fe.onFrame = (e) => Ye(e, Le);
    var ze = Je();
    Fe.onFinish = (e) => Ye(e, ze);
    var qe = [];
    Fe.setTimeout = (e, t) => {
        const n = Fe.now() + t,
            s = () => {
                const e = qe.findIndex((e) => e.cancel == s);
                (~e && qe.splice(e, 1), (Qe -= ~e ? 1 : 0));
            },
            r = { time: n, handler: e, cancel: s };
        return (qe.splice(Ve(n), 0, r), (Qe += 1), Xe(), r);
    };
    var Ve = (e) => ~(~qe.findIndex((t) => t.time > e) || ~qe.length);
    ((Fe.cancel = (e) => {
        (Ue.delete(e), Le.delete(e), ze.delete(e), Be.delete(e), $e.delete(e));
    }),
        (Fe.sync = (e) => {
            ((We = !0), Fe.batchedUpdates(e), (We = !1));
        }),
        (Fe.throttle = (e) => {
            let t;
            function n() {
                try {
                    e(...t);
                } finally {
                    t = null;
                }
            }
            function s(...e) {
                ((t = e), Fe.onStart(n));
            }
            return (
                (s.handler = e),
                (s.cancel = () => {
                    (Ue.delete(n), (t = null));
                }),
                s
            );
        }));
    var Ge = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
    ((Fe.use = (e) => (Ge = e)),
        (Fe.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
        (Fe.batchedUpdates = (e) => e()),
        (Fe.catch = console.error),
        (Fe.frameLoop = 'always'),
        (Fe.advance = () => {
            'demand' !== Fe.frameLoop
                ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
                : Ke();
        }));
    var He = -1,
        Qe = 0,
        We = !1;
    function Ye(e, t) {
        We ? (t.delete(e), e(0)) : (t.add(e), Xe());
    }
    function Xe() {
        He < 0 && ((He = 0), 'demand' !== Fe.frameLoop && Ge(Ze));
    }
    function Ze() {
        ~He && (Ge(Ze), Fe.batchedUpdates(Ke));
    }
    function Ke() {
        const e = He;
        He = Fe.now();
        const t = Ve(He);
        (t && (et(qe.splice(0, t), (e) => e.handler()), (Qe -= t)),
            Qe
                ? (Ue.flush(), Be.flush(e ? Math.min(64, He - e) : 16.667), Le.flush(), $e.flush(), ze.flush())
                : (He = -1));
    }
    function Je() {
        let e = new Set(),
            t = e;
        return {
            add(n) {
                ((Qe += t != e || e.has(n) ? 0 : 1), e.add(n));
            },
            delete: (n) => ((Qe -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
            flush(n) {
                t.size && ((e = new Set()), (Qe -= t.size), et(t, (t) => t(n) && e.add(t)), (Qe += e.size), (t = e));
            },
        };
    }
    function et(e, t) {
        e.forEach((e) => {
            try {
                t(e);
            } catch (n) {
                Fe.catch(n);
            }
        });
    }
    var tt = Object.defineProperty,
        nt = {};
    function st() {}
    ((e, t) => {
        for (var n in t) tt(e, n, { get: t[n], enumerable: !0 });
    })(nt, {
        assign: () => gt,
        colors: () => mt,
        createStringInterpolator: () => ut,
        skipAnimation: () => ht,
        to: () => dt,
        willAdvance: () => _t,
    });
    var rt = {
        arr: Array.isArray,
        obj: (e) => !!e && 'Object' === e.constructor.name,
        fun: (e) => 'function' == typeof e,
        str: (e) => 'string' == typeof e,
        num: (e) => 'number' == typeof e,
        und: (e) => void 0 === e,
    };
    function at(e, t) {
        if (rt.arr(e)) {
            if (!rt.arr(t) || e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
        }
        return e === t;
    }
    var ot = (e, t) => e.forEach(t);
    function it(e, t, n) {
        if (rt.arr(e)) for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s);
    }
    var ct = (e) => (rt.und(e) ? [] : rt.arr(e) ? e : [e]);
    function lt(e, t) {
        if (e.size) {
            const n = Array.from(e);
            (e.clear(), ot(n, t));
        }
    }
    var ut,
        dt,
        pt = (e, ...t) => lt(e, (e) => e(...t)),
        ft = () =>
            'undefined' == typeof window ||
            !window.navigator ||
            /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        mt = null,
        ht = !1,
        _t = st,
        gt = (e) => {
            (e.to && (dt = e.to),
                e.now && (Fe.now = e.now),
                void 0 !== e.colors && (mt = e.colors),
                null != e.skipAnimation && (ht = e.skipAnimation),
                e.createStringInterpolator && (ut = e.createStringInterpolator),
                e.requestAnimationFrame && Fe.use(e.requestAnimationFrame),
                e.batchedUpdates && (Fe.batchedUpdates = e.batchedUpdates),
                e.willAdvance && (_t = e.willAdvance),
                e.frameLoop && (Fe.frameLoop = e.frameLoop));
        },
        bt = new Set(),
        yt = [],
        vt = [],
        wt = 0,
        xt = {
            get idle() {
                return !bt.size && !yt.length;
            },
            start(e) {
                wt > e.priority ? (bt.add(e), Fe.onStart(Rt)) : (Et(e), Fe(Pt));
            },
            advance: Pt,
            sort(e) {
                if (wt) Fe.onFrame(() => xt.sort(e));
                else {
                    const t = yt.indexOf(e);
                    ~t && (yt.splice(t, 1), Ct(e));
                }
            },
            clear() {
                ((yt = []), bt.clear());
            },
        };
    function Rt() {
        (bt.forEach(Et), bt.clear(), Fe(Pt));
    }
    function Et(e) {
        yt.includes(e) || Ct(e);
    }
    function Ct(e) {
        yt.splice(
            (function (e, t) {
                const n = e.findIndex(t);
                return n < 0 ? e.length : n;
            })(yt, (t) => t.priority > e.priority),
            0,
            e,
        );
    }
    function Pt(e) {
        const t = vt;
        for (let n = 0; n < yt.length; n++) {
            const s = yt[n];
            ((wt = s.priority), s.idle || (_t(s), s.advance(e), s.idle || t.push(s)));
        }
        return ((wt = 0), ((vt = yt).length = 0), (yt = t).length > 0);
    }
    var Tt = '[-+]?\\d*\\.?\\d+',
        It = Tt + '%';
    function kt(...e) {
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var St = new RegExp('rgb' + kt(Tt, Tt, Tt)),
        At = new RegExp('rgba' + kt(Tt, Tt, Tt, Tt)),
        Nt = new RegExp('hsl' + kt(Tt, It, It)),
        Mt = new RegExp('hsla' + kt(Tt, It, It, Tt)),
        jt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ot = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Dt = /^#([0-9a-fA-F]{6})$/,
        Bt = /^#([0-9a-fA-F]{8})$/;
    function Ft(e, t, n) {
        return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        );
    }
    function $t(e, t, n) {
        const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
            r = 2 * n - s,
            a = Ft(r, s, e + 1 / 3),
            o = Ft(r, s, e),
            i = Ft(r, s, e - 1 / 3);
        return (Math.round(255 * a) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * i) << 8);
    }
    function Ut(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function Lt(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function zt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function qt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
    }
    function Vt(e) {
        let t = (function (e) {
            let t;
            return 'number' == typeof e
                ? e >>> 0 === e && e >= 0 && e <= 4294967295
                    ? e
                    : null
                : (t = Dt.exec(e))
                  ? parseInt(t[1] + 'ff', 16) >>> 0
                  : mt && void 0 !== mt[e]
                    ? mt[e]
                    : (t = St.exec(e))
                      ? ((Ut(t[1]) << 24) | (Ut(t[2]) << 16) | (Ut(t[3]) << 8) | 255) >>> 0
                      : (t = At.exec(e))
                        ? ((Ut(t[1]) << 24) | (Ut(t[2]) << 16) | (Ut(t[3]) << 8) | zt(t[4])) >>> 0
                        : (t = jt.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                          : (t = Bt.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = Ot.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = Nt.exec(e))
                                ? (255 | $t(Lt(t[1]), qt(t[2]), qt(t[3]))) >>> 0
                                : (t = Mt.exec(e))
                                  ? ($t(Lt(t[1]), qt(t[2]), qt(t[3])) | zt(t[4])) >>> 0
                                  : null;
        })(e);
        if (null === t) return e;
        t = t || 0;
        return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
    }
    var Gt = (e, t, n) => {
        if (rt.fun(e)) return e;
        if (rt.arr(e)) return Gt({ range: e, output: t, extrapolate: n });
        if (rt.str(e.output[0])) return ut(e);
        const s = e,
            r = s.output,
            a = s.range || [0, 1],
            o = s.extrapolateLeft || s.extrapolate || 'extend',
            i = s.extrapolateRight || s.extrapolate || 'extend',
            c = s.easing || ((e) => e);
        return (e) => {
            const t = (function (e, t) {
                for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                return n - 1;
            })(e, a);
            return (function (e, t, n, s, r, a, o, i, c) {
                let l = c ? c(e) : e;
                if (l < t) {
                    if ('identity' === o) return l;
                    'clamp' === o && (l = t);
                }
                if (l > n) {
                    if ('identity' === i) return l;
                    'clamp' === i && (l = n);
                }
                if (s === r) return s;
                if (t === n) return e <= t ? s : r;
                t === -1 / 0 ? (l = -l) : n === 1 / 0 ? (l -= t) : (l = (l - t) / (n - t));
                ((l = a(l)), s === -1 / 0 ? (l = -l) : r === 1 / 0 ? (l += s) : (l = l * (r - s) + s));
                return l;
            })(e, a[t], a[t + 1], r[t], r[t + 1], c, o, i, s.map);
        };
    };
    var Ht = { linear: (e) => e, easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2) },
        Qt = Symbol.for('FluidValue.get'),
        Wt = Symbol.for('FluidValue.observers'),
        Yt = (e) => Boolean(e && e[Qt]),
        Xt = (e) => (e && e[Qt] ? e[Qt]() : e),
        Zt = (e) => e[Wt] || null;
    function Kt(e, t) {
        const n = e[Wt];
        n &&
            n.forEach((e) => {
                !(function (e, t) {
                    e.eventObserved ? e.eventObserved(t) : e(t);
                })(e, t);
            });
    }
    var Jt = class {
            constructor(e) {
                if (!e && !(e = this.get)) throw Error('Unknown getter');
                en(this, e);
            }
        },
        en = (e, t) => rn(e, Qt, t);
    function tn(e, t) {
        if (e[Qt]) {
            let n = e[Wt];
            (n || rn(e, Wt, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
        }
        return t;
    }
    function nn(e, t) {
        const n = e[Wt];
        if (n && n.has(t)) {
            const s = n.size - 1;
            (s ? n.delete(t) : (e[Wt] = null), e.observerRemoved && e.observerRemoved(s, t));
        }
    }
    var sn,
        rn = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
        an = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        on = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        cn = new RegExp(`(${an.source})(%|[a-z]+)`, 'i'),
        ln = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        un = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        dn = (e) => {
            const [t, n] = pn(e);
            if (!t || ft()) return e;
            const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
            if (s) return s.trim();
            if (n && n.startsWith('--')) {
                const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
                return t || e;
            }
            return n && un.test(n) ? dn(n) : n || e;
        },
        pn = (e) => {
            const t = un.exec(e);
            if (!t) return [,];
            const [, n, s] = t;
            return [n, s];
        },
        fn = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
        mn = (e) => {
            sn || (sn = mt ? new RegExp(`(${Object.keys(mt).join('|')})(?!\\w)`, 'g') : /^\b$/);
            const t = e.output.map((e) => Xt(e).replace(un, dn).replace(on, Vt).replace(sn, Vt)),
                n = t.map((e) => e.match(an).map(Number)),
                s = n[0].map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                ),
                r = s.map((t) => Gt({ ...e, output: t }));
            return (e) => {
                const n = !cn.test(t[0]) && t.find((e) => cn.test(e))?.replace(an, '');
                let s = 0;
                return t[0].replace(an, () => `${r[s++](e)}${n || ''}`).replace(ln, fn);
            };
        },
        hn = 'react-spring: ',
        _n = (e) => {
            const t = e;
            let n = !1;
            if ('function' != typeof t) throw new TypeError(`${hn}once requires a function parameter`);
            return (...e) => {
                n || (t(...e), (n = !0));
            };
        },
        gn = _n(console.warn);
    var bn = _n(console.warn);
    function yn(e) {
        return rt.str(e) && ('#' == e[0] || /\d/.test(e) || (!ft() && un.test(e)) || e in (mt || {}));
    }
    var vn = ft() ? s.useEffect : s.useLayoutEffect;
    function wn() {
        const e = s.useState()[1],
            t = (() => {
                const e = s.useRef(!1);
                return (
                    vn(
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
    var xn = (e) => s.useEffect(e, Rn),
        Rn = [];
    function En(e) {
        const t = s.useRef();
        return (
            s.useEffect(() => {
                t.current = e;
            }),
            t.current
        );
    }
    var Cn = Symbol.for('Animated:node'),
        Pn = (e) => e && e[Cn],
        Tn = (e, t) => {
            return (
                (n = e),
                (s = Cn),
                (r = t),
                Object.defineProperty(n, s, { value: r, writable: !0, configurable: !0 })
            );
            var n, s, r;
        },
        In = (e) => e && e[Cn] && e[Cn].getPayload(),
        kn = class {
            constructor() {
                Tn(this, this);
            }
            getPayload() {
                return this.payload || [];
            }
        },
        Sn = class extends kn {
            constructor(e) {
                (super(),
                    (this._value = e),
                    (this.done = !0),
                    (this.durationProgress = 0),
                    rt.num(this._value) && (this.lastPosition = this._value));
            }
            static create(e) {
                return new Sn(e);
            }
            getPayload() {
                return [this];
            }
            getValue() {
                return this._value;
            }
            setValue(e, t) {
                return (
                    rt.num(e) &&
                        ((this.lastPosition = e),
                        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                    this._value !== e && ((this._value = e), !0)
                );
            }
            reset() {
                const { done: e } = this;
                ((this.done = !1),
                    rt.num(this._value) &&
                        ((this.elapsedTime = 0),
                        (this.durationProgress = 0),
                        (this.lastPosition = this._value),
                        e && (this.lastVelocity = null),
                        (this.v0 = null)));
            }
        },
        An = class extends Sn {
            constructor(e) {
                (super(0), (this._string = null), (this._toString = Gt({ output: [e, e] })));
            }
            static create(e) {
                return new An(e);
            }
            getValue() {
                const e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }
            setValue(e) {
                if (rt.str(e)) {
                    if (e == this._string) return !1;
                    ((this._string = e), (this._value = 1));
                } else {
                    if (!super.setValue(e)) return !1;
                    this._string = null;
                }
                return !0;
            }
            reset(e) {
                (e && (this._toString = Gt({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
            }
        },
        Nn = { dependencies: null },
        Mn = class extends kn {
            constructor(e) {
                (super(), (this.source = e), this.setValue(e));
            }
            getValue(e) {
                const t = {};
                return (
                    it(this.source, (n, s) => {
                        var r;
                        (r = n) && r[Cn] === r ? (t[s] = n.getValue(e)) : Yt(n) ? (t[s] = Xt(n)) : e || (t[s] = n);
                    }),
                    t
                );
            }
            setValue(e) {
                ((this.source = e), (this.payload = this._makePayload(e)));
            }
            reset() {
                this.payload && ot(this.payload, (e) => e.reset());
            }
            _makePayload(e) {
                if (e) {
                    const t = new Set();
                    return (it(e, this._addToPayload, t), Array.from(t));
                }
            }
            _addToPayload(e) {
                Nn.dependencies && Yt(e) && Nn.dependencies.add(e);
                const t = In(e);
                t && ot(t, (e) => this.add(e));
            }
        },
        jn = class extends Mn {
            constructor(e) {
                super(e);
            }
            static create(e) {
                return new jn(e);
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
        return (yn(e) ? An : Sn).create(e);
    }
    function Dn(e) {
        const t = Pn(e);
        return t ? t.constructor : rt.arr(e) ? jn : yn(e) ? An : Sn;
    }
    var Bn = (e, t) => {
            const n = !rt.fun(e) || (e.prototype && e.prototype.isReactComponent);
            return s.forwardRef((r, a) => {
                const o = s.useRef(null),
                    i =
                        n &&
                        s.useCallback(
                            (e) => {
                                o.current = (function (e, t) {
                                    e && (rt.fun(e) ? e(t) : (e.current = t));
                                    return t;
                                })(a, e);
                            },
                            [a],
                        ),
                    [c, l] = (function (e, t) {
                        const n = new Set();
                        ((Nn.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                        return ((e = new Mn(e)), (Nn.dependencies = null), [e, n]);
                    })(r, t),
                    u = wn(),
                    d = () => {
                        const e = o.current;
                        if (n && !e) return;
                        !1 === (!!e && t.applyAnimatedValues(e, c.getValue(!0))) && u();
                    },
                    f = new Fn(d, l),
                    m = s.useRef();
                (vn(
                    () => (
                        (m.current = f),
                        ot(l, (e) => tn(e, f)),
                        () => {
                            m.current && (ot(m.current.deps, (e) => nn(e, m.current)), Fe.cancel(m.current.update));
                        }
                    ),
                ),
                    s.useEffect(d, []),
                    xn(() => () => {
                        const e = m.current;
                        ot(e.deps, (t) => nn(t, e));
                    }));
                const h = t.getComponentProps(c.getValue());
                return p.createElement(e, { ...h, ref: i });
            });
        },
        Fn = class {
            constructor(e, t) {
                ((this.update = e), (this.deps = t));
            }
            eventObserved(e) {
                'change' == e.type && Fe.write(this.update);
            }
        };
    var $n = Symbol.for('AnimatedComponent'),
        Un = (e) => (rt.str(e) ? e : e && rt.str(e.displayName) ? e.displayName : (rt.fun(e) && e.name) || null);
    function Ln(e, ...t) {
        return rt.fun(e) ? e(...t) : e;
    }
    var zn = (e, t) => !0 === e || !!(t && e && (rt.fun(e) ? e(t) : ct(e).includes(t))),
        qn = (e, t) => (rt.obj(e) ? t && e[t] : e),
        Vn = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
        Gn = (e) => e,
        Hn = (e, t = Gn) => {
            let n = Qn;
            e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
            const s = {};
            for (const r of n) {
                const n = t(e[r], r);
                rt.und(n) || (s[r] = n);
            }
            return s;
        },
        Qn = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
        Wn = {
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
    function Yn(e) {
        const t = (function (e) {
            const t = {};
            let n = 0;
            if (
                (it(e, (e, s) => {
                    Wn[s] || ((t[s] = e), n++);
                }),
                n)
            )
                return t;
        })(e);
        if (t) {
            const n = { to: t };
            return (it(e, (e, s) => s in t || (n[s] = e)), n);
        }
        return { ...e };
    }
    function Xn(e) {
        return (
            (e = Xt(e)),
            rt.arr(e) ? e.map(Xn) : yn(e) ? nt.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
        );
    }
    function Zn(e) {
        for (const t in e) return !0;
        return !1;
    }
    function Kn(e) {
        return rt.fun(e) || (rt.arr(e) && rt.obj(e[0]));
    }
    function Jn(e, t) {
        (e.ref?.delete(e), t?.delete(e));
    }
    function es(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), (e.ref = t));
    }
    var ts = { tension: 170, friction: 26, mass: 1, damping: 1, easing: Ht.linear, clamp: !1 },
        ns = class {
            constructor() {
                ((this.velocity = 0), Object.assign(this, ts));
            }
        };
    function ss(e, t) {
        if (rt.und(t.decay)) {
            const n = !rt.und(t.tension) || !rt.und(t.friction);
            ((!n && rt.und(t.frequency) && rt.und(t.damping) && rt.und(t.mass)) ||
                ((e.duration = void 0), (e.decay = void 0)),
                n && (e.frequency = void 0));
        } else e.duration = void 0;
    }
    var rs = [],
        as = class {
            constructor() {
                ((this.changed = !1),
                    (this.values = rs),
                    (this.toValues = null),
                    (this.fromValues = rs),
                    (this.config = new ns()),
                    (this.immediate = !1));
            }
        };
    function os(e, { key: t, props: n, defaultProps: s, state: r, actions: a }) {
        return new Promise((o, i) => {
            let c,
                l,
                u = zn(n.cancel ?? s?.cancel, t);
            if (u) f();
            else {
                rt.und(n.pause) || (r.paused = zn(n.pause, t));
                let e = s?.pause;
                (!0 !== e && (e = r.paused || zn(e, t)),
                    (c = Ln(n.delay || 0, t)),
                    e ? (r.resumeQueue.add(p), a.pause()) : (a.resume(), p()));
            }
            function d() {
                (r.resumeQueue.add(p), r.timeouts.delete(l), l.cancel(), (c = l.time - Fe.now()));
            }
            function p() {
                c > 0 && !nt.skipAnimation
                    ? ((r.delayed = !0), (l = Fe.setTimeout(f, c)), r.pauseQueue.add(d), r.timeouts.add(l))
                    : f();
            }
            function f() {
                (r.delayed && (r.delayed = !1),
                    r.pauseQueue.delete(d),
                    r.timeouts.delete(l),
                    e <= (r.cancelId || 0) && (u = !0));
                try {
                    a.start({ ...n, callId: e, cancel: u }, o);
                } catch (t) {
                    i(t);
                }
            }
        });
    }
    var is = (e, t) =>
            1 == t.length
                ? t[0]
                : t.some((e) => e.cancelled)
                  ? us(e.get())
                  : t.every((e) => e.noop)
                    ? cs(e.get())
                    : ls(
                          e.get(),
                          t.every((e) => e.finished),
                      ),
        cs = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        ls = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
        us = (e) => ({ value: e, cancelled: !0, finished: !1 });
    function ds(e, t, n, s) {
        const { callId: r, parentId: a, onRest: o } = t,
            { asyncTo: i, promise: c } = n;
        return a || e !== i || t.reset
            ? (n.promise = (async () => {
                  ((n.asyncId = r), (n.asyncTo = e));
                  const l = Hn(t, (e, t) => ('onRest' === t ? void 0 : e));
                  let u, d;
                  const p = new Promise((e, t) => ((u = e), (d = t))),
                      f = (e) => {
                          const t = (r <= (n.cancelId || 0) && us(s)) || (r !== n.asyncId && ls(s, !1));
                          if (t) throw ((e.result = t), d(e), e);
                      },
                      m = (e, t) => {
                          const a = new fs(),
                              o = new ms();
                          return (async () => {
                              if (nt.skipAnimation) throw (ps(n), (o.result = ls(s, !1)), d(o), o);
                              f(a);
                              const i = rt.obj(e) ? { ...e } : { ...t, to: e };
                              ((i.parentId = r),
                                  it(l, (e, t) => {
                                      rt.und(i[t]) && (i[t] = e);
                                  }));
                              const c = await s.start(i);
                              return (
                                  f(a),
                                  n.paused &&
                                      (await new Promise((e) => {
                                          n.resumeQueue.add(e);
                                      })),
                                  c
                              );
                          })();
                      };
                  let h;
                  if (nt.skipAnimation) return (ps(n), ls(s, !1));
                  try {
                      let t;
                      ((t = rt.arr(e)
                          ? (async (e) => {
                                for (const t of e) await m(t);
                            })(e)
                          : Promise.resolve(e(m, s.stop.bind(s)))),
                          await Promise.all([t.then(u), p]),
                          (h = ls(s.get(), !0, !1)));
                  } catch (_) {
                      if (_ instanceof fs) h = _.result;
                      else {
                          if (!(_ instanceof ms)) throw _;
                          h = _.result;
                      }
                  } finally {
                      r == n.asyncId && ((n.asyncId = a), (n.asyncTo = a ? i : void 0), (n.promise = a ? c : void 0));
                  }
                  return (
                      rt.fun(o) &&
                          Fe.batchedUpdates(() => {
                              o(h, s, s.item);
                          }),
                      h
                  );
              })())
            : c;
    }
    function ps(e, t) {
        (lt(e.timeouts, (e) => e.cancel()),
            e.pauseQueue.clear(),
            e.resumeQueue.clear(),
            (e.asyncId = e.asyncTo = e.promise = void 0),
            t && (e.cancelId = t));
    }
    var fs = class extends Error {
            constructor() {
                super(
                    'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
                );
            }
        },
        ms = class extends Error {
            constructor() {
                super('SkipAnimationSignal');
            }
        },
        hs = (e) => e instanceof gs,
        _s = 1,
        gs = class extends Jt {
            constructor() {
                (super(...arguments), (this.id = _s++), (this._priority = 0));
            }
            get priority() {
                return this._priority;
            }
            set priority(e) {
                this._priority != e && ((this._priority = e), this._onPriorityChange(e));
            }
            get() {
                const e = Pn(this);
                return e && e.getValue();
            }
            to(...e) {
                return nt.to(this, e);
            }
            interpolate(...e) {
                return (gn(`${hn}The "interpolate" function is deprecated in v9 (use "to" instead)`), nt.to(this, e));
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
                Kt(this, { type: 'change', parent: this, value: e, idle: t });
            }
            _onPriorityChange(e) {
                (this.idle || xt.sort(this), Kt(this, { type: 'priority', parent: this, priority: e }));
            }
        },
        bs = Symbol.for('SpringPhase'),
        ys = (e) => (1 & e[bs]) > 0,
        vs = (e) => (2 & e[bs]) > 0,
        ws = (e) => (4 & e[bs]) > 0,
        xs = (e, t) => (t ? (e[bs] |= 3) : (e[bs] &= -3)),
        Rs = (e, t) => (t ? (e[bs] |= 4) : (e[bs] &= -5)),
        Es = class extends gs {
            constructor(e, t) {
                if (
                    (super(),
                    (this.animation = new as()),
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
                    !rt.und(e) || !rt.und(t))
                ) {
                    const n = rt.obj(e) ? { ...e } : { ...t, from: e };
                    (rt.und(n.default) && (n.default = !0), this.start(n));
                }
            }
            get idle() {
                return !(vs(this) || this._state.asyncTo) || ws(this);
            }
            get goal() {
                return Xt(this.animation.to);
            }
            get velocity() {
                const e = Pn(this);
                return e instanceof Sn ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
            }
            get hasAnimated() {
                return ys(this);
            }
            get isAnimating() {
                return vs(this);
            }
            get isPaused() {
                return ws(this);
            }
            get isDelayed() {
                return this._state.delayed;
            }
            advance(e) {
                let t = !0,
                    n = !1;
                const s = this.animation;
                let { toValues: r } = s;
                const { config: a } = s,
                    o = In(s.to);
                (!o && Yt(s.to) && (r = ct(Xt(s.to))),
                    s.values.forEach((i, c) => {
                        if (i.done) return;
                        const l = i.constructor == An ? 1 : o ? o[c].lastPosition : r[c];
                        let u = s.immediate,
                            d = l;
                        if (!u) {
                            if (((d = i.lastPosition), a.tension <= 0)) return void (i.done = !0);
                            let t = (i.elapsedTime += e);
                            const n = s.fromValues[c],
                                r = null != i.v0 ? i.v0 : (i.v0 = rt.arr(a.velocity) ? a.velocity[c] : a.velocity);
                            let o;
                            const p = a.precision || (n == l ? 0.005 : Math.min(1, 0.001 * Math.abs(l - n)));
                            if (rt.und(a.duration))
                                if (a.decay) {
                                    const e = !0 === a.decay ? 0.998 : a.decay,
                                        s = Math.exp(-(1 - e) * t);
                                    ((d = n + (r / (1 - e)) * (1 - s)),
                                        (u = Math.abs(i.lastPosition - d) <= p),
                                        (o = r * s));
                                } else {
                                    o = null == i.lastVelocity ? r : i.lastVelocity;
                                    const t = a.restVelocity || p / 10,
                                        s = a.clamp ? 0 : a.bounce,
                                        c = !rt.und(s),
                                        f = n == l ? i.v0 > 0 : n < l;
                                    let m,
                                        h = !1;
                                    const _ = 1,
                                        g = Math.ceil(e / _);
                                    for (
                                        let e = 0;
                                        e < g && ((m = Math.abs(o) > t), m || ((u = Math.abs(l - d) <= p), !u));
                                        ++e
                                    ) {
                                        c && ((h = d == l || d > l == f), h && ((o = -o * s), (d = l)));
                                        ((o += ((1e-6 * -a.tension * (d - l) + 0.001 * -a.friction * o) / a.mass) * _),
                                            (d += o * _));
                                    }
                                }
                            else {
                                let s = 1;
                                (a.duration > 0 &&
                                    (this._memoizedDuration !== a.duration &&
                                        ((this._memoizedDuration = a.duration),
                                        i.durationProgress > 0 &&
                                            ((i.elapsedTime = a.duration * i.durationProgress),
                                            (t = i.elapsedTime += e))),
                                    (s = (a.progress || 0) + t / this._memoizedDuration),
                                    (s = s > 1 ? 1 : s < 0 ? 0 : s),
                                    (i.durationProgress = s)),
                                    (d = n + a.easing(s) * (l - n)),
                                    (o = (d - i.lastPosition) / e),
                                    (u = 1 == s));
                            }
                            ((i.lastVelocity = o),
                                Number.isNaN(d) && (console.warn('Got NaN while animating:', this), (u = !0)));
                        }
                        (o && !o[c].done && (u = !1), u ? (i.done = !0) : (t = !1), i.setValue(d, a.round) && (n = !0));
                    }));
                const i = Pn(this),
                    c = i.getValue();
                if (t) {
                    const e = Xt(s.to);
                    ((c === e && !n) || a.decay
                        ? n && a.decay && this._onChange(c)
                        : (i.setValue(e), this._onChange(e)),
                        this._stop());
                } else n && this._onChange(c);
            }
            set(e) {
                return (
                    Fe.batchedUpdates(() => {
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
                if (vs(this)) {
                    const { to: e, config: t } = this.animation;
                    Fe.batchedUpdates(() => {
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
                    rt.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [rt.obj(e) ? e : { ...t, to: e }]),
                    Promise.all(n.map((e) => this._update(e))).then((e) => is(this, e))
                );
            }
            stop(e) {
                const { to: t } = this.animation;
                return (
                    this._focus(this.get()),
                    ps(this._state, e && this._lastCallId),
                    Fe.batchedUpdates(() => this._stop(t, e)),
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
                ((n = rt.obj(n) ? n[t] : n),
                    (null == n || Kn(n)) && (n = void 0),
                    (s = rt.obj(s) ? s[t] : s),
                    null == s && (s = void 0));
                const r = { to: n, from: s };
                return (
                    ys(this) ||
                        (e.reverse && ([n, s] = [s, n]),
                        (s = Xt(s)),
                        rt.und(s) ? Pn(this) || this._set(n) : this._set(s)),
                    r
                );
            }
            _update({ ...e }, t) {
                const { key: n, defaultProps: s } = this;
                (e.default &&
                    Object.assign(
                        s,
                        Hn(e, (e, t) => (/^on/.test(t) ? qn(e, n) : e)),
                    ),
                    As(this, e, 'onProps'),
                    Ns(this, 'onProps', e, this));
                const r = this._prepareNode(e);
                if (Object.isFrozen(this))
                    throw Error(
                        'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                    );
                const a = this._state;
                return os(++this._lastCallId, {
                    key: n,
                    props: e,
                    defaultProps: s,
                    state: a,
                    actions: {
                        pause: () => {
                            ws(this) ||
                                (Rs(this, !0),
                                pt(a.pauseQueue),
                                Ns(this, 'onPause', ls(this, Cs(this, this.animation.to)), this));
                        },
                        resume: () => {
                            ws(this) &&
                                (Rs(this, !1),
                                vs(this) && this._resume(),
                                pt(a.resumeQueue),
                                Ns(this, 'onResume', ls(this, Cs(this, this.animation.to)), this));
                        },
                        start: this._merge.bind(this, r),
                    },
                }).then((n) => {
                    if (e.loop && n.finished && (!t || !n.noop)) {
                        const t = Ps(e);
                        if (t) return this._update(t, !0);
                    }
                    return n;
                });
            }
            _merge(e, t, n) {
                if (t.cancel) return (this.stop(!0), n(us(this)));
                const s = !rt.und(e.to),
                    r = !rt.und(e.from);
                if (s || r) {
                    if (!(t.callId > this._lastToId)) return n(us(this));
                    this._lastToId = t.callId;
                }
                const { key: a, defaultProps: o, animation: i } = this,
                    { to: c, from: l } = i;
                let { to: u = c, from: d = l } = e;
                (!r || s || (t.default && !rt.und(u)) || (u = d), t.reverse && ([u, d] = [d, u]));
                const p = !at(d, l);
                (p && (i.from = d), (d = Xt(d)));
                const f = !at(u, c);
                f && this._focus(u);
                const m = Kn(t.to),
                    { config: h } = i,
                    { decay: _, velocity: g } = h;
                ((s || r) && (h.velocity = 0),
                    t.config &&
                        !m &&
                        (function (e, t, n) {
                            (n && (ss((n = { ...n }), t), (t = { ...n, ...t })), ss(e, t), Object.assign(e, t));
                            for (const o in ts) null == e[o] && (e[o] = ts[o]);
                            let { frequency: s, damping: r } = e;
                            const { mass: a } = e;
                            rt.und(s) ||
                                (s < 0.01 && (s = 0.01),
                                r < 0 && (r = 0),
                                (e.tension = Math.pow((2 * Math.PI) / s, 2) * a),
                                (e.friction = (4 * Math.PI * r * a) / s));
                        })(h, Ln(t.config, a), t.config !== o.config ? Ln(o.config, a) : void 0));
                let b = Pn(this);
                if (!b || rt.und(u)) return n(ls(this, !0));
                const y = rt.und(t.reset) ? r && !t.default : !rt.und(d) && zn(t.reset, a),
                    v = y ? d : this.get(),
                    w = Xn(u),
                    x = rt.num(w) || rt.arr(w) || yn(w),
                    R = !m && (!x || zn(o.immediate || t.immediate, a));
                if (f) {
                    const e = Dn(u);
                    if (e !== b.constructor) {
                        if (!R)
                            throw Error(
                                `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`,
                            );
                        b = this._set(w);
                    }
                }
                const E = b.constructor;
                let C = Yt(u),
                    P = !1;
                if (!C) {
                    const e = y || (!ys(this) && p);
                    ((f || e) && ((P = at(Xn(v), w)), (C = !P)),
                        ((at(i.immediate, R) || R) && at(h.decay, _) && at(h.velocity, g)) || (C = !0));
                }
                if (
                    (P && vs(this) && (i.changed && !y ? (C = !0) : C || this._stop(c)),
                    !m &&
                        ((C || Yt(c)) &&
                            ((i.values = b.getPayload()), (i.toValues = Yt(u) ? null : E == An ? [1] : ct(w))),
                        i.immediate != R && ((i.immediate = R), R || y || this._set(c)),
                        C))
                ) {
                    const { onRest: e } = i;
                    ot(Ss, (e) => As(this, t, e));
                    const s = ls(this, Cs(this, c));
                    (pt(this._pendingCalls, s),
                        this._pendingCalls.add(n),
                        i.changed &&
                            Fe.batchedUpdates(() => {
                                ((i.changed = !y), e?.(s, this), y ? Ln(o.onRest, s) : i.onStart?.(s, this));
                            }));
                }
                (y && this._set(v),
                    m
                        ? n(ds(t.to, t, this._state, this))
                        : C
                          ? this._start()
                          : vs(this) && !f
                            ? this._pendingCalls.add(n)
                            : n(cs(v)));
            }
            _focus(e) {
                const t = this.animation;
                e !== t.to && (Zt(this) && this._detach(), (t.to = e), Zt(this) && this._attach());
            }
            _attach() {
                let e = 0;
                const { to: t } = this.animation;
                (Yt(t) && (tn(t, this), hs(t) && (e = t.priority + 1)), (this.priority = e));
            }
            _detach() {
                const { to: e } = this.animation;
                Yt(e) && nn(e, this);
            }
            _set(e, t = !0) {
                const n = Xt(e);
                if (!rt.und(n)) {
                    const e = Pn(this);
                    if (!e || !at(n, e.getValue())) {
                        const s = Dn(n);
                        (e && e.constructor == s ? e.setValue(n) : Tn(this, s.create(n)),
                            e &&
                                Fe.batchedUpdates(() => {
                                    this._onChange(n, t);
                                }));
                    }
                }
                return Pn(this);
            }
            _onStart() {
                const e = this.animation;
                e.changed || ((e.changed = !0), Ns(this, 'onStart', ls(this, Cs(this, e.to)), this));
            }
            _onChange(e, t) {
                (t || (this._onStart(), Ln(this.animation.onChange, e, this)),
                    Ln(this.defaultProps.onChange, e, this),
                    super._onChange(e, t));
            }
            _start() {
                const e = this.animation;
                (Pn(this).reset(Xt(e.to)),
                    e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                    vs(this) || (xs(this, !0), ws(this) || this._resume()));
            }
            _resume() {
                nt.skipAnimation ? this.finish() : xt.start(this);
            }
            _stop(e, t) {
                if (vs(this)) {
                    xs(this, !1);
                    const n = this.animation;
                    (ot(n.values, (e) => {
                        e.done = !0;
                    }),
                        n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                        Kt(this, { type: 'idle', parent: this }));
                    const s = t ? us(this.get()) : ls(this.get(), Cs(this, e ?? n.to));
                    (pt(this._pendingCalls, s), n.changed && ((n.changed = !1), Ns(this, 'onRest', s, this)));
                }
            }
        };
    function Cs(e, t) {
        const n = Xn(t);
        return at(Xn(e.get()), n);
    }
    function Ps(e, t = e.loop, n = e.to) {
        const s = Ln(t);
        if (s) {
            const r = !0 !== s && Yn(s),
                a = (r || e).reverse,
                o = !r || r.reset;
            return Ts({
                ...e,
                loop: t,
                default: !1,
                pause: void 0,
                to: !a || Kn(n) ? n : void 0,
                from: o ? e.from : void 0,
                reset: o,
                ...r,
            });
        }
    }
    function Ts(e) {
        const { to: t, from: n } = (e = Yn(e)),
            s = new Set();
        return (rt.obj(t) && ks(t, s), rt.obj(n) && ks(n, s), (e.keys = s.size ? Array.from(s) : null), e);
    }
    function Is(e) {
        const t = Ts(e);
        return (rt.und(t.default) && (t.default = Hn(t)), t);
    }
    function ks(e, t) {
        it(e, (e, n) => null != e && t.add(n));
    }
    var Ss = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
    function As(e, t, n) {
        e.animation[n] = t[n] !== Vn(t, n) ? qn(t[n], e.key) : void 0;
    }
    function Ns(e, t, ...n) {
        (e.animation[t]?.(...n), e.defaultProps[t]?.(...n));
    }
    var Ms = ['onStart', 'onChange', 'onRest'],
        js = 1,
        Os = class {
            constructor(e, t) {
                ((this.id = js++),
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
                    rt.und(n) || this.springs[t].set(n);
                }
            }
            update(e) {
                return (e && this.queue.push(Ts(e)), this);
            }
            start(e) {
                let { queue: t } = this;
                return (
                    e ? (t = ct(e).map(Ts)) : (this.queue = []),
                    this._flush ? this._flush(this, t) : (zs(this, t), Ds(this, t))
                );
            }
            stop(e, t) {
                if ((e !== !!e && (t = e), t)) {
                    const n = this.springs;
                    ot(ct(t), (t) => n[t].stop(!!e));
                } else (ps(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
                return this;
            }
            pause(e) {
                if (rt.und(e)) this.start({ pause: !0 });
                else {
                    const t = this.springs;
                    ot(ct(e), (e) => t[e].pause());
                }
                return this;
            }
            resume(e) {
                if (rt.und(e)) this.start({ pause: !1 });
                else {
                    const t = this.springs;
                    ot(ct(e), (e) => t[e].resume());
                }
                return this;
            }
            each(e) {
                it(this.springs, e);
            }
            _onFrame() {
                const { onStart: e, onChange: t, onRest: n } = this._events,
                    s = this._active.size > 0,
                    r = this._changed.size > 0;
                ((s && !this._started) || (r && !this._started)) &&
                    ((this._started = !0),
                    lt(e, ([e, t]) => {
                        ((t.value = this.get()), e(t, this, this._item));
                    }));
                const a = !s && this._started,
                    o = r || (a && n.size) ? this.get() : null;
                (r &&
                    t.size &&
                    lt(t, ([e, t]) => {
                        ((t.value = o), e(t, this, this._item));
                    }),
                    a &&
                        ((this._started = !1),
                        lt(n, ([e, t]) => {
                            ((t.value = o), e(t, this, this._item));
                        })));
            }
            eventObserved(e) {
                if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
                else {
                    if ('idle' != e.type) return;
                    this._active.delete(e.parent);
                }
                Fe.onFrame(this._onFrame);
            }
        };
    function Ds(e, t) {
        return Promise.all(t.map((t) => Bs(e, t))).then((t) => is(e, t));
    }
    async function Bs(e, t, n) {
        const { keys: s, to: r, from: a, loop: o, onRest: i, onResolve: c } = t,
            l = rt.obj(t.default) && t.default;
        (o && (t.loop = !1), !1 === r && (t.to = null), !1 === a && (t.from = null));
        const u = rt.arr(r) || rt.fun(r) ? r : void 0;
        u
            ? ((t.to = void 0), (t.onRest = void 0), l && (l.onRest = void 0))
            : ot(Ms, (n) => {
                  const s = t[n];
                  if (rt.fun(s)) {
                      const r = e._events[n];
                      ((t[n] = ({ finished: e, cancelled: t }) => {
                          const n = r.get(s);
                          n
                              ? (e || (n.finished = !1), t && (n.cancelled = !0))
                              : r.set(s, { value: null, finished: e || !1, cancelled: t || !1 });
                      }),
                          l && (l[n] = t[n]));
                  }
              });
        const d = e._state;
        t.pause === !d.paused
            ? ((d.paused = t.pause), pt(t.pause ? d.pauseQueue : d.resumeQueue))
            : d.paused && (t.pause = !0);
        const p = (s || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
            f = !0 === t.cancel || !0 === Vn(t, 'cancel');
        ((u || (f && d.asyncId)) &&
            p.push(
                os(++e._lastAsyncId, {
                    props: t,
                    state: d,
                    actions: {
                        pause: st,
                        resume: st,
                        start(t, n) {
                            f ? (ps(d, e._lastAsyncId), n(us(e))) : ((t.onRest = i), n(ds(u, t, d, e)));
                        },
                    },
                }),
            ),
            d.paused &&
                (await new Promise((e) => {
                    d.resumeQueue.add(e);
                })));
        const m = is(e, await Promise.all(p));
        if (o && m.finished && (!n || !m.noop)) {
            const n = Ps(t, o, r);
            if (n) return (zs(e, [n]), Bs(e, n, !0));
        }
        return (c && Fe.batchedUpdates(() => c(m, e, e.item)), m);
    }
    function Fs(e, t) {
        const n = { ...e.springs };
        return (
            t &&
                ot(ct(t), (e) => {
                    (rt.und(e.keys) && (e = Ts(e)), rt.obj(e.to) || (e = { ...e, to: void 0 }), Ls(n, e, (e) => Us(e)));
                }),
            $s(e, n),
            n
        );
    }
    function $s(e, t) {
        it(t, (t, n) => {
            e.springs[n] || ((e.springs[n] = t), tn(t, e));
        });
    }
    function Us(e, t) {
        const n = new Es();
        return ((n.key = e), t && tn(n, t), n);
    }
    function Ls(e, t, n) {
        t.keys &&
            ot(t.keys, (s) => {
                (e[s] || (e[s] = n(s)))._prepareNode(t);
            });
    }
    function zs(e, t) {
        ot(t, (t) => {
            Ls(e.springs, t, (t) => Us(t, e));
        });
    }
    var qs,
        Vs,
        Gs = ({ children: e, ...t }) => {
            const n = s.useContext(Hs),
                r = t.pause || !!n.pause,
                a = t.immediate || !!n.immediate;
            t = (function (e, t) {
                const [n] = s.useState(() => ({ inputs: t, result: e() })),
                    r = s.useRef(),
                    a = r.current;
                let o = a;
                o
                    ? Boolean(
                          t &&
                          o.inputs &&
                          (function (e, t) {
                              if (e.length !== t.length) return !1;
                              for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                              return !0;
                          })(t, o.inputs),
                      ) || (o = { inputs: t, result: e() })
                    : (o = n);
                return (
                    s.useEffect(() => {
                        ((r.current = o), a == n && (n.inputs = n.result = void 0));
                    }, [o]),
                    o.result
                );
            })(() => ({ pause: r, immediate: a }), [r, a]);
            const { Provider: o } = Hs;
            return p.createElement(o, { value: t }, e);
        },
        Hs =
            ((qs = Gs),
            (Vs = {}),
            Object.assign(qs, p.createContext(Vs)),
            (qs.Provider._context = qs),
            (qs.Consumer._context = qs),
            qs);
    ((Gs.Provider = Hs.Provider), (Gs.Consumer = Hs.Consumer));
    var Qs = () => {
        const e = [],
            t = function (t) {
                bn(
                    `${hn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
                const s = [];
                return (
                    ot(e, (e, r) => {
                        if (rt.und(t)) s.push(e.start());
                        else {
                            const a = n(t, e, r);
                            a && s.push(e.start(a));
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
                return (ot(e, (e) => e.pause(...arguments)), this);
            }),
            (t.resume = function () {
                return (ot(e, (e) => e.resume(...arguments)), this);
            }),
            (t.set = function (t) {
                ot(e, (e, n) => {
                    const s = rt.fun(t) ? t(n, e) : t;
                    s && e.set(s);
                });
            }),
            (t.start = function (t) {
                const n = [];
                return (
                    ot(e, (e, s) => {
                        if (rt.und(t)) n.push(e.start());
                        else {
                            const r = this._getProps(t, e, s);
                            r && n.push(e.start(r));
                        }
                    }),
                    n
                );
            }),
            (t.stop = function () {
                return (ot(e, (e) => e.stop(...arguments)), this);
            }),
            (t.update = function (t) {
                return (ot(e, (e, n) => e.update(this._getProps(t, e, n))), this);
            }));
        const n = function (e, t, n) {
            return rt.fun(e) ? e(n, t) : e;
        };
        return ((t._getProps = n), t);
    };
    function Ws(e, t) {
        const n = rt.fun(e),
            [[r], a] = (function (e, t, n) {
                const r = rt.fun(t) && t;
                r && !n && (n = []);
                const a = s.useMemo(() => (r || 3 == arguments.length ? Qs() : void 0), []),
                    o = s.useRef(0),
                    i = wn(),
                    c = s.useMemo(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(e, t) {
                                const n = Fs(e, t);
                                return o.current > 0 && !c.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                    ? Ds(e, t)
                                    : new Promise((s) => {
                                          ($s(e, n),
                                              c.queue.push(() => {
                                                  s(Ds(e, t));
                                              }),
                                              i());
                                      });
                            },
                        }),
                        [],
                    ),
                    l = s.useRef([...c.ctrls]),
                    u = [],
                    d = En(e) || 0;
                function p(e, n) {
                    for (let s = e; s < n; s++) {
                        const e = l.current[s] || (l.current[s] = new Os(null, c.flush)),
                            n = r ? r(s, e) : t[s];
                        n && (u[s] = Is(n));
                    }
                }
                (s.useMemo(() => {
                    (ot(l.current.slice(e, d), (e) => {
                        (Jn(e, a), e.stop(!0));
                    }),
                        (l.current.length = e),
                        p(d, e));
                }, [e]),
                    s.useMemo(() => {
                        p(0, Math.min(d, e));
                    }, n));
                const f = l.current.map((e, t) => Fs(e, u[t])),
                    m = s.useContext(Gs),
                    h = En(m),
                    _ = m !== h && Zn(m);
                (vn(() => {
                    (o.current++, (c.ctrls = l.current));
                    const { queue: e } = c;
                    (e.length && ((c.queue = []), ot(e, (e) => e())),
                        ot(l.current, (e, t) => {
                            (a?.add(e), _ && e.start({ default: m }));
                            const n = u[t];
                            n && (es(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                        }));
                }),
                    xn(() => () => {
                        ot(c.ctrls, (e) => e.stop(!0));
                    }));
                const g = f.map((e) => ({ ...e }));
                return a ? [g, a] : g;
            })(1, n ? e : [e], n ? [] : t);
        return n || 2 == arguments.length ? [r, a] : r;
    }
    var Ys = () => Qs(),
        Xs = () => s.useState(Ys)[0];
    function Zs(e, t, n) {
        const r = rt.fun(t) && t,
            {
                reset: a,
                sort: o,
                trail: i = 0,
                expires: c = !0,
                exitBeforeEnter: l = !1,
                onDestroyed: u,
                ref: d,
                config: f,
            } = r ? r() : t,
            m = s.useMemo(() => (r || 3 == arguments.length ? Qs() : void 0), []),
            h = ct(e),
            _ = [],
            g = s.useRef(null),
            b = a ? null : g.current;
        (vn(() => {
            g.current = _;
        }),
            xn(
                () => (
                    ot(_, (e) => {
                        (m?.add(e.ctrl), (e.ctrl.ref = m));
                    }),
                    () => {
                        ot(g.current, (e) => {
                            (e.expired && clearTimeout(e.expirationId), Jn(e.ctrl, m), e.ctrl.stop(!0));
                        });
                    }
                ),
            ));
        const y = (function (e, { key: t, keys: n = t }, s) {
                if (null === n) {
                    const t = new Set();
                    return e.map((e) => {
                        const n = s && s.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                        return n ? (t.add(n), n.key) : Ks++;
                    });
                }
                return rt.und(n) ? e : rt.fun(n) ? e.map(n) : ct(n);
            })(h, r ? r() : t, b),
            v = (a && g.current) || [];
        vn(() =>
            ot(v, ({ ctrl: e, item: t, key: n }) => {
                (Jn(e, m), Ln(u, t, n));
            }),
        );
        const w = [];
        if (
            (b &&
                ot(b, (e, t) => {
                    e.expired
                        ? (clearTimeout(e.expirationId), v.push(e))
                        : ~(t = w[t] = y.indexOf(e.key)) && (_[t] = e);
                }),
            ot(h, (e, t) => {
                _[t] || ((_[t] = { key: y[t], item: e, phase: 'mount', ctrl: new Os() }), (_[t].ctrl.item = e));
            }),
            w.length)
        ) {
            let e = -1;
            const { leave: n } = r ? r() : t;
            ot(w, (t, s) => {
                const r = b[s];
                ~t ? ((e = _.indexOf(r)), (_[e] = { ...r, item: h[t] })) : n && _.splice(++e, 0, r);
            });
        }
        rt.fun(o) && _.sort((e, t) => o(e.item, t.item));
        let x = -i;
        const R = wn(),
            E = Hn(t),
            C = new Map(),
            P = s.useRef(new Map()),
            T = s.useRef(!1);
        ot(_, (e, n) => {
            const s = e.key,
                a = e.phase,
                o = r ? r() : t;
            let u, p;
            const m = Ln(o.delay || 0, s);
            if ('mount' == a) ((u = o.enter), (p = 'enter'));
            else {
                const e = y.indexOf(s) < 0;
                if ('leave' != a)
                    if (e) ((u = o.leave), (p = 'leave'));
                    else {
                        if (!(u = o.update)) return;
                        p = 'update';
                    }
                else {
                    if (e) return;
                    ((u = o.enter), (p = 'enter'));
                }
            }
            if (((u = Ln(u, e.item, n)), (u = rt.obj(u) ? Yn(u) : { to: u }), !u.config)) {
                const t = f || E.config;
                u.config = Ln(t, e.item, n, p);
            }
            x += i;
            const h = { ...E, delay: m + x, ref: d, immediate: o.immediate, reset: !1, ...u };
            if ('enter' == p && rt.und(h.from)) {
                const s = r ? r() : t,
                    a = rt.und(s.initial) || b ? s.from : s.initial;
                h.from = Ln(a, e.item, n);
            }
            const { onResolve: _ } = h;
            h.onResolve = (e) => {
                Ln(_, e);
                const t = g.current,
                    n = t.find((e) => e.key === s);
                if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                    const e = t.every((e) => e.ctrl.idle);
                    if ('leave' == n.phase) {
                        const t = Ln(c, n.item);
                        if (!1 !== t) {
                            const s = !0 === t ? 0 : t;
                            if (((n.expired = !0), !e && s > 0))
                                return void (s <= 2147483647 && (n.expirationId = setTimeout(R, s)));
                        }
                    }
                    e && t.some((e) => e.expired) && (P.current.delete(n), l && (T.current = !0), R());
                }
            };
            const v = Fs(e.ctrl, h);
            'leave' === p && l
                ? P.current.set(e, { phase: p, springs: v, payload: h })
                : C.set(e, { phase: p, springs: v, payload: h });
        });
        const I = s.useContext(Gs),
            k = En(I),
            S = I !== k && Zn(I);
        (vn(() => {
            S &&
                ot(_, (e) => {
                    e.ctrl.start({ default: I });
                });
        }, [I]),
            ot(C, (e, t) => {
                if (P.current.size) {
                    const e = _.findIndex((e) => e.key === t.key);
                    _.splice(e, 1);
                }
            }),
            vn(
                () => {
                    ot(P.current.size ? P.current : C, ({ phase: e, payload: t }, n) => {
                        const { ctrl: s } = n;
                        ((n.phase = e),
                            m?.add(s),
                            S && 'enter' == e && s.start({ default: I }),
                            t &&
                                (es(s, t.ref),
                                (!s.ref && !m) || T.current
                                    ? (s.start(t), T.current && (T.current = !1))
                                    : s.update(t)));
                    });
                },
                a ? void 0 : n,
            ));
        const A = (e) =>
            p.createElement(
                p.Fragment,
                null,
                _.map((t, n) => {
                    const { springs: s } = C.get(t) || t.ctrl,
                        r = e({ ...s }, t.item, t, n);
                    return r && r.type
                        ? p.createElement(r.type, {
                              ...r.props,
                              key: rt.str(t.key) || rt.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref,
                          })
                        : r;
                }),
            );
        return m ? [A, m] : A;
    }
    var Ks = 1;
    var Js = class extends gs {
        constructor(e, t) {
            (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Gt(...t)));
            const n = this._get(),
                s = Dn(n);
            Tn(this, s.create(n));
        }
        advance(e) {
            const t = this._get();
            (at(t, this.get()) || (Pn(this).setValue(t), this._onChange(t, this.idle)),
                !this.idle && tr(this._active) && nr(this));
        }
        _get() {
            const e = rt.arr(this.source) ? this.source.map(Xt) : ct(Xt(this.source));
            return this.calc(...e);
        }
        _start() {
            this.idle &&
                !tr(this._active) &&
                ((this.idle = !1),
                ot(In(this), (e) => {
                    e.done = !1;
                }),
                nt.skipAnimation ? (Fe.batchedUpdates(() => this.advance()), nr(this)) : xt.start(this));
        }
        _attach() {
            let e = 1;
            (ot(ct(this.source), (t) => {
                (Yt(t) && tn(t, this), hs(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
            }),
                (this.priority = e),
                this._start());
        }
        _detach() {
            (ot(ct(this.source), (e) => {
                Yt(e) && nn(e, this);
            }),
                this._active.clear(),
                nr(this));
        }
        eventObserved(e) {
            'change' == e.type
                ? e.idle
                    ? this.advance()
                    : (this._active.add(e.parent), this._start())
                : 'idle' == e.type
                  ? this._active.delete(e.parent)
                  : 'priority' == e.type &&
                    (this.priority = ct(this.source).reduce((e, t) => Math.max(e, (hs(t) ? t.priority : 0) + 1), 0));
        }
    };
    function er(e) {
        return !1 !== e.idle;
    }
    function tr(e) {
        return !e.size || Array.from(e).every(er);
    }
    function nr(e) {
        e.idle ||
            ((e.idle = !0),
            ot(In(e), (e) => {
                e.done = !0;
            }),
            Kt(e, { type: 'idle', parent: e }));
    }
    nt.assign({ createStringInterpolator: mn, to: (e, t) => new Js(e, t) });
    var sr = /^--/;
    function rr(e, t) {
        return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : 'number' != typeof t || 0 === t || sr.test(e) || (or.hasOwnProperty(e) && or[e])
              ? ('' + t).trim()
              : t + 'px';
    }
    var ar = {};
    var or = {
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
        ir = ['Webkit', 'Ms', 'Moz', 'O'];
    or = Object.keys(or).reduce(
        (e, t) => (ir.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
        or,
    );
    var cr = /^(matrix|translate|scale|rotate|skew)/,
        lr = /^(translate)/,
        ur = /^(rotate|skew)/,
        dr = (e, t) => (rt.num(e) && 0 !== e ? e + t : e),
        pr = (e, t) => (rt.arr(e) ? e.every((e) => pr(e, t)) : rt.num(e) ? e === t : parseFloat(e) === t),
        fr = class extends Mn {
            constructor({ x: e, y: t, z: n, ...s }) {
                const r = [],
                    a = [];
                ((e || t || n) &&
                    (r.push([e || 0, t || 0, n || 0]),
                    a.push((e) => [`translate3d(${e.map((e) => dr(e, 'px')).join(',')})`, pr(e, 0)])),
                    it(s, (e, t) => {
                        if ('transform' === t) (r.push([e || '']), a.push((e) => [e, '' === e]));
                        else if (cr.test(t)) {
                            if ((delete s[t], rt.und(e))) return;
                            const n = lr.test(t) ? 'px' : ur.test(t) ? 'deg' : '';
                            (r.push(ct(e)),
                                a.push(
                                    'rotate3d' === t
                                        ? ([e, t, s, r]) => [`rotate3d(${e},${t},${s},${dr(r, n)})`, pr(r, 0)]
                                        : (e) => [
                                              `${t}(${e.map((e) => dr(e, n)).join(',')})`,
                                              pr(e, t.startsWith('scale') ? 1 : 0),
                                          ],
                                ));
                        }
                    }),
                    r.length && (s.transform = new mr(r, a)),
                    super(s));
            }
        },
        mr = class extends Jt {
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
                    ot(this.inputs, (n, s) => {
                        const r = Xt(n[0]),
                            [a, o] = this.transforms[s](rt.arr(r) ? r : n.map(Xt));
                        ((e += ' ' + a), (t = t && o));
                    }),
                    t ? 'none' : e
                );
            }
            observerAdded(e) {
                1 == e && ot(this.inputs, (e) => ot(e, (e) => Yt(e) && tn(e, this)));
            }
            observerRemoved(e) {
                0 == e && ot(this.inputs, (e) => ot(e, (e) => Yt(e) && nn(e, this)));
            }
            eventObserved(e) {
                ('change' == e.type && (this._value = null), Kt(this, e));
            }
        };
    nt.assign({
        batchedUpdates: a.unstable_batchedUpdates,
        createStringInterpolator: mn,
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
    var hr = ((
            e,
            {
                applyAnimatedValues: t = () => !1,
                createAnimatedStyle: n = (e) => new Mn(e),
                getComponentProps: s = (e) => e,
            } = {},
        ) => {
            const r = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: s },
                a = (e) => {
                    const t = Un(e) || 'Anonymous';
                    return (
                        ((e = rt.str(e) ? a[e] || (a[e] = Bn(e, r)) : e[$n] || (e[$n] = Bn(e, r))).displayName =
                            `Animated(${t})`),
                        e
                    );
                };
            return (
                it(e, (t, n) => {
                    (rt.arr(e) && (n = Un(t)), (a[n] = a(t)));
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
                    const n = 'filter' === e.nodeName || (e.parentNode && 'filter' === e.parentNode.nodeName),
                        { className: s, style: r, children: a, scrollTop: o, scrollLeft: i, viewBox: c, ...l } = t,
                        u = Object.values(l),
                        d = Object.keys(l).map((t) =>
                            n || e.hasAttribute(t)
                                ? t
                                : ar[t] || (ar[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                        );
                    void 0 !== a && (e.textContent = a);
                    for (const p in r)
                        if (r.hasOwnProperty(p)) {
                            const t = rr(p, r[p]);
                            sr.test(p) ? e.style.setProperty(p, t) : (e.style[p] = t);
                        }
                    (d.forEach((t, n) => {
                        e.setAttribute(t, u[n]);
                    }),
                        void 0 !== s && (e.className = s),
                        void 0 !== o && (e.scrollTop = o),
                        void 0 !== i && (e.scrollLeft = i),
                        void 0 !== c && e.setAttribute('viewBox', c));
                },
                createAnimatedStyle: (e) => new fr(e),
                getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
            },
        ),
        _r = hr.animated;
    function gr() {
        const e = s.useRef(0);
        return (
            De(() => {
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
    const br = new WeakMap(),
        yr = 'await',
        vr = 'idle',
        wr = 'display';
    function xr({ resId: e = 0, contentId: t, decoratorId: n, disabled: r, args: a, showDelay: o = 400 }) {
        const i = s.useRef({ status: vr, resId: e, timeoutId: 0 }),
            [c, l] = s.useMemo(() => {
                let s = null;
                function c() {
                    r ||
                        ((i.current.status = yr),
                        window.clearTimeout(i.current.timeoutId),
                        (i.current.timeoutId = window.setTimeout(l, o)));
                }
                function l() {
                    ((i.current.status = wr), Q.tooltip.open(e, t, n, a), s && br.set(s, d));
                }
                function u() {
                    if (
                        (window.clearTimeout(i.current.timeoutId),
                        i.current.status === wr && Q.tooltip.hide(e, t, n),
                        (i.current.status = vr),
                        s)
                    ) {
                        br.delete(s);
                        let e = s.parentElement;
                        for (; e && !br.has(e); ) e = e.parentElement;
                        if (e) {
                            br.get(e).show();
                        }
                        s = null;
                    }
                }
                const d = {
                    hide: u,
                    show: l,
                    rerun: function () {
                        i.current.status !== vr && (r ? d.hide() : c());
                    },
                };
                return [
                    d,
                    {
                        onMouseEnter: (e) => {
                            ((s = e?.currentTarget), c());
                        },
                        onMouseLeave: r ? K : u,
                        onClick: r ? K : u,
                    },
                ];
            }, [a, t, n, r, e, o]);
        return (
            s.useEffect(() => {
                c.rerun();
            }, [c]),
            De(Oe(c.hide)),
            l
        );
    }
    function Rr({ alert: e, body: t, header: n, note: r, hasHtmlContent: a, disabled: o }) {
        const i = f.resolve('views');
        return xr({
            disabled: o,
            contentId: i.read((e) =>
                a
                    ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                    : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
            ),
            decoratorId: i.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
            args: s.useMemo(() => ({ body: t, header: n, note: r, alert: e }), [e, t, n, r]),
        });
    }
    const Er = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
        Cr = new Set(['number', 'string', 'boolean', 'bigint']),
        Pr = new Set(['Dict']);
    function Tr(e, { shallow: t = !0, depth: n = 0, maxDepth: s = 32 } = {}) {
        const r = e,
            a = typeof e;
        if (n > s) throw new Error(`Too deeply nested to copy. Max is ${s}.`);
        if (Er.has(a)) return r;
        if (null === r) return r;
        const o = { depth: n + 1, maxDepth: s };
        if (Array.isArray(r)) return r.map((e) => Tr(e, o));
        if ('object' === a) {
            const s = r.constructor?.name ?? 'UNKNOWN';
            if (Array.isArray(e)) return e.map((e) => Tr(e, o));
            if ('CoherentArrayProxy' === s) return e.map((e) => Tr(e.value, o));
            if ('Dict' === s) return;
            if ('UNKNOWN' === s) return;
            if (s.includes(':ViewModel:') || 'Object' === s) {
                if (t && 0 === n) {
                    const e = {};
                    for (const t in r) {
                        const n = r[t];
                        Cr.has(typeof n) && (e[t] = n);
                    }
                    return e;
                }
                {
                    const e = {};
                    for (const t in r) {
                        const n = r[t],
                            s = r?.constructor?.name ?? 'UNKNOWN';
                        Pr.has(s) || (e[t] = Tr(n, o));
                    }
                    return e;
                }
            }
            const a = {};
            for (const e of Object.keys(r)) a[e] = Tr(r[e], o);
            return a;
        }
        return (console.error('Incorrect value to clone model', r), r);
    }
    const Ir = { deep: !1, equals: ee },
        kr = { cloneItem: !0 },
        Sr = { shallow: !1 };
    class Ar {
        constructor(e, t = kr) {
            this.options = t;
            const s = {},
                r = e.keys();
            for (let a = 0; a < r.length; a++) {
                const t = r[a];
                s[t] = n.observable.box(this.takeItem(e, t), Ir);
            }
            ((this._keys = n.observable.set(new Set(r))), (this._data = n.observable.box(s, Ir)));
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
                const a = t[r],
                    o = this.takeItem(e, a);
                a in s
                    ? null === o
                        ? (delete s[a], this._keys.delete(a), this.set(s))
                        : s[a].set(o)
                    : null !== o && ((s[a] = n.observable.box(o, Ir)), this._keys.add(a), this.set(s));
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
            return this.options.cloneItem ? Tr(n, Sr) : n;
        }
        set = n.action((e) => {
            this._data.set(e);
        });
        untrackedData() {
            return n.untracked(() => this._data.get());
        }
    }
    const Nr = s.createContext({ mode: 'real' }),
        Mr = { equals: ee, deep: !1 };
    function jr(e, t, s) {
        const r = [];
        e.events.subscribersNotified.on(
            n.action(() => {
                for (const e of r) e();
                r.splice(0, r.length);
            }),
        );
        const a = (a, o, i = Mr) => {
                const c = n.observable.box(a(s(o)), i);
                return ('real' === t && e.subscribe((e) => r.push(() => c.set(a(e))), o), c);
            },
            o = (n, a) => {
                const o = new Ar(s(n), a);
                return ('real' === t && e.subscribe((e, t) => r.push(() => o.update(e, t)), n), o);
            },
            i = (a, o) => {
                const i = n.observable.box(s(a) ?? o, Mr);
                return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), a), i);
            };
        return {
            dict: o,
            dictRef: (e, t) => o(e, { cloneItem: !1, ...t }),
            arrayClone: (e) => a(Tr, e),
            array: i,
            object: i,
            transform: a,
            primitives: (a, o) => {
                const i = s(o);
                if (Array.isArray(a)) {
                    const s = a.reduce((e, t) => ((e[t] = n.observable.box(i[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                r.push(() =>
                                    a.forEach((t) => {
                                        s[t].set(e[t]);
                                    }),
                                );
                            }, o),
                        s
                    );
                }
                {
                    const s = a,
                        c = Object.entries(s),
                        l = c.reduce((e, [t, s]) => ((e[s] = n.observable.box(i[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                r.push(() =>
                                    c.forEach(([t, n]) => {
                                        l[n].set(e[t]);
                                    }),
                                );
                            }, o),
                        l
                    );
                }
            },
        };
    }
    o.computedFn;
    const Or = (e, t) => o.computedFn(e, { equals: n.comparer.structural, ...t });
    s.forwardRef(function (t, n) {
        const r = s.useRef(null);
        return (
            s.useEffect(() => {
                const e = r.current;
                if (null !== e)
                    return L.onHitTest((t) => {
                        const n = e.getBoundingClientRect();
                        return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                    });
            }, []),
            e.jsx('div', { ...t, ref: Ne([n, r]) })
        );
    });
    const Dr = 'TruncateText_dcb41d92',
        Br = s.forwardRef(function ({ text: t, tooltipParams: n, className: r, ...a }, o) {
            const i = Rr({ header: n?.header, body: n?.body || t }),
                c = s.useRef(null),
                [l, u] = s.useState(!1),
                d = s.useCallback(() => {
                    c.current && u(c.current.scrollWidth - Math.ceil(c.current.getBoundingClientRect().width) > 0);
                }, []);
            var p, f;
            return (
                s.useEffect(() => {
                    l || i.onMouseLeave();
                }, [l, i]),
                (p = d),
                (f = [d]),
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
                }, f),
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
                    const r = Oe((e) => {
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
                })(c, d),
                e.jsx('div', { ...a, ref: Ne([o, c]), className: k(Dr, r), ...(l ? i : {}), children: t })
            );
        }),
        Fr = (e) => ('boolean' == typeof e ? `${e}` : 0 === e ? '0' : e),
        $r = k,
        Ur = (e, t) => (n) => {
            var s;
            if (null == (null == t ? void 0 : t.variants))
                return $r(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: r, defaultVariants: a } = t,
                o = Object.keys(r).map((e) => {
                    const t = null == n ? void 0 : n[e],
                        s = null == a ? void 0 : a[e];
                    if (null === t) return null;
                    const o = Fr(t) || Fr(s);
                    return r[e][o];
                }),
                i =
                    n &&
                    Object.entries(n).reduce((e, t) => {
                        let [n, s] = t;
                        return (void 0 === s || (e[n] = s), e);
                    }, {}),
                c =
                    null == t || null === (s = t.compoundVariants) || void 0 === s
                        ? void 0
                        : s.reduce((e, t) => {
                              let { class: n, className: s, ...r } = t;
                              return Object.entries(r).every((e) => {
                                  let [t, n] = e;
                                  return Array.isArray(n) ? n.includes({ ...a, ...i }[t]) : { ...a, ...i }[t] === n;
                              })
                                  ? [...e, n, s]
                                  : e;
                          }, []);
            return $r(e, o, c, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        };
    function Lr(t, n, r) {
        const a = 'object' == typeof n && 'cva' in n ? n.cva?.variants : r?.variants,
            o = a ? Object.keys(a) : [];
        if ('object' == typeof n) {
            const e = n,
                r = Ur(e.className, e.cva),
                a = e.element,
                i = s.forwardRef(function (e, t) {
                    return s.createElement(a, { ...('function' == typeof a ? e : zr(o, e)), ref: t, className: r(e) });
                });
            return ((i.displayName = t), e.cva && (i.cva = e.cva), i);
        }
        const i = Ur(n, r),
            c = s.forwardRef(function (n, s) {
                return e.jsx('div', { 'data-name': t, ...zr(o, n), ref: s, className: i(n) });
            });
        return ((c.displayName = t), r && (c.cva = r), c);
    }
    function zr(e, t) {
        if (0 === e.length) return t;
        const n = { ...t };
        for (const s of e) delete n[s];
        return n;
    }
    const qr = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
        Vr = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
        Gr = Lr('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
        Hr = s.forwardRef(function (
            { children: t, onClick: n, onMouseEnter: s, soundTarget: r, disabled: a = !1, silent: o = !1, ...i },
            c,
        ) {
            const l = Ae();
            return e.jsx(Gr, {
                ...i,
                ref: c,
                onMouseEnter: function (e) {
                    (a || o || l.play('mouse-enter', { target: r || 'Button', original: e }), s?.(e));
                },
                onClick: function (e) {
                    a || (o || l.play('click', { target: r || 'Button', original: e }), n?.(e));
                },
                children: t,
            });
        }),
        Qr = {
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
            fadeIn: 'Button_fadeIn_6bcdc8c',
            fadeInThreeQuarters: 'Button_fadeInThreeQuarters_6bcdc8c',
            fadeInHalf: 'Button_fadeInHalf_6bcdc8c',
            fadeOut: 'Button_fadeOut_6bcdc8c',
            fadeInWithScale: 'Button_fadeInWithScale_6bcdc8c',
            slideUp: 'Button_slideUp_6bcdc8c',
            scale: 'Button_scale_6bcdc8c',
            raysAppearance: 'Button_raysAppearance_6bcdc8c',
            rotate: 'Button_rotate_6bcdc8c',
            'reverse-rotate': 'Button_reverse-rotate_6bcdc8c',
            glowAppearance: 'Button_glowAppearance_6bcdc8c',
            highlightAppearance: 'Button_highlightAppearance_6bcdc8c',
            blink: 'Button_blink_6bcdc8c',
            slideUpIn: 'Button_slideUpIn_6bcdc8c',
        },
        Wr = s.forwardRef(function (
            {
                children: t,
                size: n = Vr.large,
                theme: s = qr.primary,
                disabled: r = !1,
                silent: a = !1,
                autoAlignContent: o = !0,
                classNames: i,
                className: c,
                ...l
            },
            u,
        ) {
            return e.jsxs(Hr, {
                ...l,
                ref: u,
                silent: a,
                disabled: r,
                className: k(
                    Qr.base,
                    Qr[`base__size-${n}`],
                    Qr[`base__theme-${s}`],
                    r ? Qr.base__disabled : Qr.base__enabled,
                    c,
                    i?.base,
                ),
                onClick: function (e) {
                    r || l.onClick?.(e);
                },
                children: [
                    e.jsx('div', { className: k(Qr.background, i?.background) }),
                    e.jsx('div', { className: k(Qr.border, i?.border) }),
                    e.jsx('div', { className: k(Qr.overlay, i?.overlay) }),
                    e.jsx('div', { className: k(Qr.content, o && Qr.content__fontAligned, i?.content), children: t }),
                ],
            });
        });
    ((Wr.themes = qr), (Wr.sizes = Vr));
    const Yr = 'Action_6c7b0c76',
        Xr = 'Action_icon_7d5aed3b',
        Zr = s.forwardRef(function ({ className: t, theme: n = Wr.themes.secondary, tooltipParams: s, ...r }, a) {
            const o = Rr({ alert: s?.alert, header: s?.header, body: s?.body, note: s?.note });
            return e.jsx(Wr, {
                ...r,
                ref: a,
                onClick: (e) => {
                    (r.onClick(e), s && o.onClick());
                },
                onMouseEnter: (e) => {
                    (r.onMouseEnter?.(e), s && o.onMouseEnter(e));
                },
                onMouseLeave: (e) => {
                    (r.onMouseLeave?.(e), s && o.onMouseLeave());
                },
                autoAlignContent: !1,
                theme: n,
                className: k(Yr, t),
                children: e.jsx(Ee, { width: 10, height: 20, path: 'post_battle.progression.arrow', className: Xr }),
            });
        }),
        Kr = 'Header_background_91826dd5',
        Jr = 'Header_mask_afb9c38d',
        ea = 'Header_border_c6b1d37f',
        ta = Lr('CardHeader', 'Header_1c2ee301'),
        na = s.forwardRef(function ({ classNames: t, className: n, ...s }, r) {
            return e.jsxs(ta, {
                ...s,
                className: k(t?.base, n),
                ref: r,
                children: [
                    e.jsx('div', { className: k(Kr, t?.background) }),
                    e.jsx('div', { className: k(Jr, t?.mask) }),
                    e.jsx('div', { className: k(ea, t?.border) }),
                    s.children,
                ],
            });
        }),
        sa = Lr('CardTitle', 'Title_e5ecf295'),
        ra = s.forwardRef(function (t, n) {
            return e.jsx(sa, { ...t, ref: n, children: t.children });
        }),
        aa = 'Card_content_f7ddaa4a',
        oa = Lr('Card', 'Card_3f55e450'),
        ia = Lr('CardContent', aa),
        ca = s.forwardRef(function (t, n) {
            return e.jsx(oa, { ...t, ref: n, children: t.children });
        });
    ((ca.Header = na), (ca.Content = ia), (ca.Action = Zr), (ca.Title = ra));
    const la = 1,
        ua = 2,
        da = 3;
    function pa(e, t) {
        const n = [],
            s = [];
        let r = '',
            a = !1,
            o = '',
            i = 0;
        for (let c = 0; c < e.length; c++) {
            const l = e[c];
            if (l === t.start[0] && e.slice(c, c + t.start.length) === t.start) {
                if (r) {
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push({ type: la, value: r });
                    } else n.push({ type: la, value: r });
                    r = '';
                }
                ((a = !0), (c += t.start.length - 1));
            } else if (l === t.end[0] && e.slice(c, c + t.end.length) === t.end) {
                ((a = !1), (c += t.end.length - 1));
                const e = o.trim();
                if (e.startsWith('@')) {
                    const t = e.slice(1).trim(),
                        r = { type: ua, attrs: t.split('|'), instanceId: ++i, children: [] };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(r);
                    } else n.push(r);
                    s.push({ node: r, startIndex: n.length });
                } else if ('/' === e) s.length > 0 && s.pop();
                else {
                    const t = { type: da, instanceId: ++i, name: e };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(t);
                    } else n.push(t);
                }
                o = '';
            } else a ? (o += l) : (r += l);
        }
        if (r)
            if (s.length) {
                s[s.length - 1].node.children.push({ type: la, value: r });
            } else n.push({ type: la, value: r });
        return n;
    }
    const fa = {
            COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
            base: 'FormatText_db904f12',
            base__fullSize: 'FormatText_base__fullSize_a514958e',
            nowrap: 'FormatText_nowrap_ff69eca3',
        },
        ma = new Set(fa.COLORS?.split(', ') ?? []);
    let ha = 0;
    function _a() {
        return ++ha;
    }
    const ga =
        /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
    function ba(t) {
        const n = f.resolve('langCode');
        return (function (e, t, n) {
            return ye.has(t) ? e.map(n) : e.map((e, t, s) => (t === s.length - 1 ? n(e, t, s) : n(`${e} `, t, s)));
        })(
            (function (e, t) {
                return (ge[t] ?? be)(e);
            })(t, n),
            n,
            (t, n) => t && e.jsx('span', { children: t }, `${t}${n}`),
        );
    }
    function ya(t) {
        return Array.isArray(t)
            ? (function (t) {
                  const n = [];
                  for (let r = 0; r < t.length; r++) {
                      const a = t[r],
                          o = t[r + 1];
                      if ('string' != typeof o || !ga.test(o)) {
                          n.push(ya(a));
                          continue;
                      }
                      const i = ba(o.slice(1));
                      (n.push(
                          e.jsxs(
                              s.Fragment,
                              { children: [e.jsxs('span', { className: fa.nowrap, children: [ya(a), o[0]] }), i] },
                              _a(),
                          ),
                      ),
                          (r += 1));
                  }
                  return n;
              })(t)
            : 'string' == typeof t
              ? e.jsx(s.Fragment, { children: ba(t) }, _a())
              : t;
    }
    const va = {
        class: function (t, ...n) {
            return e.jsx(
                'span',
                { className: n.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: t },
                _a(),
            );
        },
        colorLegacy: function (t, n) {
            const s = _a();
            return ma.has(String(n))
                ? e.jsx('span', { className: `FormatText_colorLegacy__${n}`, children: t }, s)
                : e.jsx('span', { style: { color: `#${n}` }, children: t }, s);
        },
        bold: (e) => ['fontWeight', 'bold'],
        split: ya,
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
                _a(),
            );
        },
        color: (e, t) => ['color', t],
        fontSize: (e, t) => ['fontSize', t],
        fontWeight: (e, t) => ['fontWeight', t],
        textDecoration: (e, t) => ['textDecoration', t],
    };
    function wa(e, t, n, s) {
        const r = n.map((t) => {
                if ('string' != typeof t) return t;
                const n = t.trim();
                if (n.startsWith('(') && n.endsWith(')')) {
                    const [t, ...r] = n.slice(1, -1).split(' ');
                    return t ? wa(e, t, r, s) : e;
                }
                return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
            }),
            a = s[t];
        return a ? a(e, ...r) : (console.error(`Function ${t} is not registered`), e);
    }
    function xa(e, t, n) {
        return e.reduce((e, t) => {
            const [s, ...r] = (function (e) {
                const t = [];
                let n = '',
                    s = !1,
                    r = !1,
                    a = '';
                for (let o = 0; o < e.length; o++) {
                    const i = e[o];
                    ("'" !== i && '"' !== i) || r || s
                        ? i === a && r
                            ? ((r = !1), (n += i))
                            : '(' !== i || r
                              ? ')' === i && s && !r
                                  ? ((s = !1), (n += i))
                                  : ' ' !== i || s || r
                                    ? (n += i)
                                    : n && (t.push(n), (n = ''))
                              : ((s = !0), (n += i))
                        : ((r = !0), (a = i), (n += i));
                }
                return (n && t.push(n), t);
            })(t.trim());
            return s ? wa(e, s, r, n) : e;
        }, t);
    }
    function Ra(e) {
        return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
    }
    function Ea(e, t) {
        for (let n = 0; n < e.length; n++) {
            if ('$' === e[n]) {
                let s = n + 1;
                for (; s < e.length && !Ra(e[s]); ) s++;
                const r = e.slice(n + 1, s),
                    a = t[r];
                if (a) return Ea(e.replace(`$${r}`, String(a)), t);
            }
        }
        return e;
    }
    function Ca(e, t) {
        const n = [];
        for (let s = 0; s < e.length; s++) n[s] = Ea(e[s], t);
        return n;
    }
    const Pa = ['number', 'string', 'undefined'];
    function Ta(t, n, r = {}, a = !0) {
        a && (ha = 0);
        const o = [];
        function i(e) {
            if (Pa.includes(typeof e)) {
                const t = o.at(-1);
                if ('string' == typeof t) return void (o[o.length - 1] = t + e);
            }
            o.push(e);
        }
        for (const c of t)
            if (c.type === la) i(c.value);
            else if (c.type === da)
                null === r[c.name] || Pa.includes(typeof r[c.name])
                    ? i(r[c.name] ?? `{{${c.name}}}`)
                    : o.push(e.jsx(s.Fragment, { children: r[c.name] }, `var-${c.name}-${c.instanceId}`));
            else if (c.type === ua) {
                const e = Ta(c.children, n, r, !1),
                    t = xa(Ca(c.attrs, r), e, n);
                o.push(t);
            }
        return o;
    }
    function Ia(e) {
        return e
            .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
            .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
    }
    function ka(e) {
        return e
            .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
            .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
    }
    function Sa(e) {
        return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
    }
    function Aa(e) {
        return (function (e, t, n, s, r, a, o, i, c) {
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
                    return a(r(s(n(t(e)))));
                case 7:
                    return o(a(r(s(n(t(e))))));
                case 8:
                    return i(o(a(r(s(n(t(e)))))));
                case 9:
                    return c(i(o(a(r(s(n(t(e))))))));
                default: {
                    let e = arguments[0];
                    for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
                    return e;
                }
            }
        })(e, Sa, Ia, ka);
    }
    const Na = { start: '{{', end: '}}' },
        Ma = s.memo(function (t) {
            const {
                    brackets: n = Na,
                    text: r,
                    params: a,
                    upgradeLegacy: o,
                    fullSize: i,
                    inline: c,
                    formatters: l,
                    split: u,
                    ...d
                } = t,
                p = s.useMemo(() => (t.upgradeLegacy ? Aa(t.text) : t.text), [t.text, t.upgradeLegacy]),
                f = s.useMemo(() => (t.formatters ? { ...va, ...t.formatters } : va), [t.formatters]),
                m = s.useMemo(() => pa(u ? `{{@ split}}${p}{{/}}` : p, n), [n, p, u]),
                h = s.useMemo(() => Ta(m, f, t.params), [m, f, t.params]),
                _ = k(fa.base, i && fa.base__fullSize, d.className);
            return t.inline
                ? (console.warn(
                      "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                      "Use 'split' prop instead.",
                  ),
                  e.jsx('p', {
                      ...d,
                      className: _,
                      ref: (e) => {
                          e?.setAttribute('cohinline', 'true');
                      },
                      children: h,
                  }))
                : e.jsx('span', { ...d, className: _, children: h });
        });
    function ja({ path: t, ...n }) {
        return e.jsx(Ma, { text: f.resolve('strings').readOrEmpty(t), ...n });
    }
    const Oa = 'AnimatedValue_d9f4b2f0',
        Da = 'AnimatedValue_animatedValue_4c490d83',
        Ba = S.cubicBezier(0.33, 0, 0.25, 1);
    function Fa(e) {
        return {
            enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
            leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
        };
    }
    function $a({ value: t, transition: n, children: r, className: a, classNames: o }) {
        const i = s.useMemo(ve, []),
            c = Zs(t, {
                ...n,
                initial: { opacity: 1, y: '0rem', ...n?.initial },
                from: { opacity: 0, y: '-5rem', ...n?.from },
                enter: () => ({
                    opacity: 1,
                    y: '0rem',
                    delay: 330,
                    config: { easing: Ba, duration: 330 },
                    onStart: () => {
                        const { enterElements: e, leftElements: t } = Fa(i);
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
                    config: { easing: Ba, duration: 330 },
                    onStart: () => {
                        let e = 0;
                        const { enterElements: t, leftElements: n } = Fa(i);
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
            className: k(Oa, a),
            children: c((n, s) => {
                const a = 0 === n.opacity.get() && !1 === n.opacity.isAnimating;
                return e.jsx(_r.div, {
                    className: k(Da, `js-animated-value-${i}-${t === s ? 'enter' : 'leave'}`, o?.animatedValue),
                    style: { ...n, position: a ? 'absolute' : 'relative' },
                    children: r(s),
                });
            }),
        });
    }
    const Ua = 'ProgressCount_3c6daa70',
        La = 'ProgressCount_label_d15406bd',
        za = 'ProgressCount_total_4f222a62',
        qa = 'ProgressCount_divider_487d7768',
        Va = f.resolve('intl');
    function Ga({ withLabel: e, withoutLimit: t }) {
        return t
            ? 'battle_results.progression.missionsCompleteCounter'
            : 'battle_results.progression.completedPointsFrom.' + (e ? 'withLabel' : 'withoutLabel');
    }
    function Ha({ current: t, total: n, withLabel: s, withoutLimit: r, className: a, classNames: o }) {
        return e.jsx(ja, {
            path: Ga({ withLabel: s, withoutLimit: r }),
            className: k(Ua, a),
            params: {
                completed: Va.formatNumber('integral', t),
                total: Va.formatNumber('integral', n),
                totalClass: k(za, o?.total),
                labelClass: s && k(La, o?.label),
            },
        });
    }
    function Qa({
        current: t,
        total: n,
        withLabel: r,
        className: a,
        classNames: o,
        transitionCurrent: i,
        transitionTotal: c,
    }) {
        const l = Ae(),
            u = s.useRef({ transitionCurrent: i, transitionTotal: c });
        return (
            s.useEffect(() => {
                u.current = { transitionCurrent: i, transitionTotal: c };
            }, [i, c]),
            e.jsx(ja, {
                path: 'battle_results.progression.completedPointsFrom.' + (r ? 'withLabel' : 'withoutLabel'),
                className: k(Ua, a),
                params: {
                    completed: e.jsx($a, {
                        className: o?.currentTransitionWrapper,
                        value: Va.formatNumber('integral', t),
                        transition: {
                            ...i,
                            enter: {
                                ...i.enter,
                                onRest: (...e) => {
                                    (!0 !== u.current.transitionCurrent.immediate &&
                                        l.play('numbersShown', { target: 'mission-progress:progress-stats' }),
                                        'function' == typeof u?.current.transitionCurrent?.onRest &&
                                            u.current.transitionCurrent.onRest(...e));
                                },
                            },
                        },
                        children: J,
                    }),
                    total: e.jsx($a, {
                        className: o?.totalTransitionWrapper,
                        value: Va.formatNumber('integral', n),
                        transition: {
                            ...c,
                            enter: {
                                ...c?.enter,
                                onRest: (...e) => {
                                    (!0 !== u.current.transitionTotal?.immediate &&
                                        l.play('numbersShown', { target: 'mission-progress:progress-stats' }),
                                        'function' == typeof u?.current.transitionTotal?.onRest &&
                                            u.current.transitionTotal.onRest(...e));
                                },
                            },
                        },
                        children: J,
                    }),
                    totalClass: k(za, o?.total),
                    labelClass: r && k(La, o?.label),
                    dividerClass: qa,
                },
            })
        );
    }
    const Wa = {
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
    function Ya({
        title: t,
        titleImageProps: n,
        disabled: s,
        actionTooltipParams: r,
        onHeaderClick: a,
        onButtonAction: o,
        children: i,
        progressionCountProps: c,
        className: l,
        classNames: u,
        ...d
    }) {
        return e.jsxs(ca, {
            className: k(Wa.card, s && Wa.card__disabled, l),
            ...d,
            children: [
                e.jsxs(ca.Header, {
                    onClick: a,
                    className: k(Wa.cardHeader, u?.header?.base),
                    classNames: {
                        ...u?.header,
                        background: k(Wa.cardHeaderBackground, u?.header?.background),
                        border: k(Wa.cardHeaderBorder, u?.header?.border),
                    },
                    children: [
                        e.jsxs('div', {
                            className: k(Wa.head, u?.head),
                            children: [
                                e.jsxs('div', {
                                    className: Wa.titleContainer,
                                    children: [
                                        void 0 !== n && e.jsx(Ee, { ...n }),
                                        e.jsx(ca.Title, {
                                            className: k(Wa.title, u?.title),
                                            children: e.jsx(Br, { text: t }),
                                        }),
                                    ],
                                }),
                                void 0 !== o &&
                                    e.jsx(ca.Action, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), o(e));
                                        },
                                        className: k(Wa.action, u?.action),
                                        tooltipParams: r,
                                    }),
                            ],
                        }),
                        e.jsx('div', { className: k(Wa.tail, u?.tail), children: void 0 !== c && e.jsx(Ha, { ...c }) }),
                    ],
                }),
                void 0 !== i && e.jsx(ca.Content, { className: k(Wa.content, u?.content), children: i }),
                e.jsx('div', { className: Wa.divider }),
            ],
        });
    }
    function Xa(e) {
        return (
            !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
            (!s.isValidElement(e) && !!Array.isArray(e) && e.every(Xa))
        );
    }
    const Za = 'MultilineOverflow_8834bd8e',
        Ka = 'MultilineOverflow_content_b539970d';
    const Ja = s.forwardRef(function (
        {
            text: t,
            brackets: n,
            params: r,
            formatters: a,
            upgradeLegacy: o,
            split: i = !0,
            onMouseEnter: c,
            onMouseLeave: l,
            onClick: u,
            tooltipDisabled: d = !1,
            tooltip: p,
            className: m,
            classNames: h,
            style: _,
            styleBase: g,
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
                    (n.className = k(Ka, e.children[0].className)),
                    (n.innerHTML = ''),
                    e.appendChild(n));
                const t = e.children[0];
                if (!t) return console.warn("MultilineOverflow can't get first child to handle it", e);
                const r =
                    ((a = e.getBoundingClientRect()), { x: (o = t.getBoundingClientRect()).x - a.x, y: o.y - a.y });
                var a, o;
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
                const i = document.createElement('div');
                ((i.innerHTML = '...'),
                    n.appendChild(i),
                    (s = pe(() => {
                        const t = [];
                        for (let s = n.childNodes.length - 2; 0 !== s; s--) {
                            const r = n.childNodes[s];
                            if (r instanceof HTMLElement) {
                                if (r.offsetTop + r.offsetHeight <= e.offsetHeight) break;
                                t.push(r);
                            }
                        }
                        if (0 === t.length) (x(!1), i.remove());
                        else {
                            (x(!0), t.forEach((e) => e.remove()));
                            let n = 0;
                            for (; n++ < 1e3 && i.previousSibling && i.offsetTop + i.offsetHeight > e.offsetHeight; )
                                i.previousSibling?.remove();
                        }
                        n.style.visibility = '';
                    })));
            }
            const a = new ResizeObserver(r);
            return (
                a.observe(e),
                new ne()
                    .add(() => s())
                    .add(se(window, 'resize', r))
                    .add(a.disconnect.bind(a))
                    .add(n.remove.bind(n)).dispose
            );
        }, [y, t]);
        const R = (function (e) {
                return !e || Object.values(e).every(Xa);
            })(r),
            E = (function (e, t, n) {
                return xr({
                    ...n,
                    disabled: n?.disabled,
                    contentId: f.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
                    args: s.useMemo(() => ({ type: e, params: JSON.stringify(t), resId: t.resId }), [t, e]),
                });
            })(
                'format_text',
                s.useMemo(
                    () => ({
                        text: t,
                        params: R ? r : void 0,
                        split: i,
                        upgradeLegacy: o,
                        brackets: n,
                        resId: f.resolve('views').read((e) => e.mono.tooltips.tooltips('resId')),
                    }),
                    [t, n, i, o, r, R],
                ),
            ),
            C = p ?? E;
        if (
            (s.useEffect(() => {
                d || w || C.onMouseLeave();
            }, [w, C, p, d, R]),
            0 === t.length)
        )
            return null;
        return e.jsx('div', {
            ...b,
            onMouseEnter: function (e) {
                (c?.(e), w && !d && C.onMouseEnter(e));
            },
            onClick: function (e) {
                (u?.(e), d || C.onClick());
            },
            onMouseLeave: function (e) {
                (l?.(e), d || C.onMouseLeave());
            },
            ref: Ne([y, v]),
            className: k(Za, m, h?.base),
            style: g,
            children: e.jsx(Ma, {
                text: t,
                brackets: n,
                params: r,
                upgradeLegacy: o,
                split: i,
                formatters: a,
                className: h?.text,
                style: { ..._, visibility: 'hidden' },
            }),
        });
    });
    function eo({
        baseValue: e,
        newValue: t,
        animationType: n = so.simple,
        deltaVisible: s = !1,
        preViewDeltaVisible: r = !1,
        animationConfig: a,
    }) {
        return {
            from: { width: e },
            to: { width: t },
            config: a ?? { duration: (n === so.simple && s) || (!s && r) ? 0 : to, easing: Ht.easeInOutCubic },
        };
    }
    const to = 600,
        no = { duration: to, easing: Ht.easeInOutCubic },
        so = { simple: 'simple', grow: 'grow', growFreeze: 'growFreeze' },
        ro = { medium: 'medium', large: 'large' },
        ao = { disabled: 'disabled', doneInactive: 'doneInactive', doneStatic: 'doneStatic' },
        oo = 'growing',
        io = 'shrinking',
        co = 'done',
        lo = s.createContext(void 0);
    function uo() {
        const e = s.useContext(lo);
        if (!e) throw new Error('ProgressBar must be used within a ProgressBar');
        return e;
    }
    function po(e) {
        const { activeComponents: t } = uo();
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
    const fo = {
        base: 'BackgroundPattern_8df99ec8',
        backgroundPattern: 'BackgroundPattern_backgroundPattern_d9136c40',
        backgroundPattern__medium: 'BackgroundPattern_backgroundPattern__medium_84d64a88',
        backgroundPattern__large: 'BackgroundPattern_backgroundPattern__large_3e5537fc',
        fadeIn: 'BackgroundPattern_fadeIn_9cb0a5ae',
        fadeInThreeQuarters: 'BackgroundPattern_fadeInThreeQuarters_9cb0a5ae',
        fadeInHalf: 'BackgroundPattern_fadeInHalf_9cb0a5ae',
        fadeOut: 'BackgroundPattern_fadeOut_9cb0a5ae',
        fadeInWithScale: 'BackgroundPattern_fadeInWithScale_9cb0a5ae',
        slideUp: 'BackgroundPattern_slideUp_9cb0a5ae',
        scale: 'BackgroundPattern_scale_9cb0a5ae',
        raysAppearance: 'BackgroundPattern_raysAppearance_9cb0a5ae',
        rotate: 'BackgroundPattern_rotate_9cb0a5ae',
        'reverse-rotate': 'BackgroundPattern_reverse-rotate_9cb0a5ae',
        glowAppearance: 'BackgroundPattern_glowAppearance_9cb0a5ae',
        highlightAppearance: 'BackgroundPattern_highlightAppearance_9cb0a5ae',
        blink: 'BackgroundPattern_blink_9cb0a5ae',
        slideUpIn: 'BackgroundPattern_slideUpIn_9cb0a5ae',
    };
    const mo = s.memo(function ({ className: t, backgroundPattern: n }) {
        const s = uo();
        return (
            po('backgroundPattern'),
            e.jsx('div', {
                className: fo.base,
                children: e.jsx(Ee, {
                    className: k(
                        t,
                        fo.backgroundPattern,
                        0 === s.percentage ? fo.backgroundPattern__noProgress : fo[`backgroundPattern__${s.size}`],
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    path:
                        n ??
                        ((r = s.size),
                        (a = s.status),
                        a === ao.disabled
                            ? `ui.progressbar.bg_pattern_base_disabled_${r}`
                            : `ui.progressbar.bg_pattern_base_${r}`),
                }),
            })
        );
        var r, a;
    });
    function ho(e, t) {
        const n = uo(),
            s = Ae();
        return Oe((r) => {
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
    function _o(e = 0) {
        const t = uo(),
            n = t.soundTarget ?? 'progress-bar',
            s = Ae(),
            r = ho(e, n),
            a = Oe(() => {
                t.status !== ao.doneInactive && t.progressCompleted
                    ? s.play('increaseDeltaMax', { target: n })
                    : s.play('progressSimple', { target: n });
            });
        return Oe(({ step: e } = {}) => {
            if (!t.silent)
                return t.activeComponents.has('delta') ? r(e) : t.activeComponents.has('fill') ? a() : void 0;
        });
    }
    const go = 'Delta_eb295acb',
        bo = 'Delta_delta__increase_e6e76b0b',
        yo = 'Delta_outside_b28c01e5',
        vo = 'Delta_outside__increase_91391b24',
        wo = 'Delta_inside_b1b3a5c5',
        xo = 'Delta_inside__increase_fcd871c4',
        Ro = s.memo(
            s.forwardRef(function (
                {
                    from: t,
                    growAnimationConfig: n,
                    shrinkAnimationConfig: r,
                    classNames: a,
                    className: o,
                    steps: i,
                    onState: c,
                    ...l
                },
                u,
            ) {
                const d = s.useRef(null),
                    p = uo(),
                    [f, m] = Ws(() => ({ width: 0 })),
                    [h, _] = Ws(() => ({ width: 0 })),
                    [g, b] = Ws(() => ({ left: 0, width: 0 })),
                    [y, ...v] = i,
                    [w, x] = s.useState(v),
                    [R, E] = s.useState(y ?? 'done'),
                    C = (p.value - t) / p.maxValue,
                    P = _o(C);
                (po('delta'),
                    s.useEffect(() => {
                        if (0 === C) return;
                        const [e, ...t] = i;
                        (E(e ?? 'done'), x(t));
                    }, [m, _, i, C]));
                const T = Oe(c ?? K);
                s.useEffect(() => T(R), [R, T]);
                const I = Oe(() => {
                    const [e, ...t] = w;
                    void 0 !== e ? (E(e), x(t)) : E('done');
                });
                return (
                    s.useEffect(() => {
                        const e = d.current;
                        if (!e || 0 === C) return (_.set({ width: 0 }), m.set({ width: 0 }), E('done'), void x([]));
                        const t = 100 * Math.max(0, p.percentage - Math.max(0, C)),
                            s = 100 * Math.abs(C);
                        return (
                            e.classList.toggle(bo, C > 0),
                            'growing' === R
                                ? (b.set({ left: t, width: s }),
                                  _.set({ width: 100 }),
                                  void m.start({
                                      from: { width: 0 },
                                      to: { width: 100 },
                                      config: n ?? no,
                                      onRest: I,
                                      onStart: () => P({ step: R }),
                                  }))
                                : 'shrinking' === R
                                  ? (b.set({ left: t, width: s }),
                                    m.set({ width: 100 }),
                                    void _.start({
                                        from: { width: 100 },
                                        to: { width: 0 },
                                        config: r ?? no,
                                        onRest: I,
                                        onStart: () => P({ step: R }),
                                    }))
                                  : void 0
                        );
                    }, [b, p.percentage, C, n, m, I, _, P, r, R]),
                    e.jsxs(_r.div, {
                        ...l,
                        ref: Ne([u, d]),
                        className: k(o, go),
                        style: { left: g.left.to((e) => `${e}%`), width: g.width.to((e) => `${e}%`) },
                        children: [
                            e.jsxs(_r.div, {
                                ...l,
                                style: { width: h.width.to((e) => `${e}%`) },
                                className: k(a?.outside, yo, C > 0 && vo),
                                children: [
                                    e.jsx(_r.div, {
                                        style: { width: f.width.to((e) => `${e}%`) },
                                        className: k(a?.inside, wo, C > 0 && xo),
                                    }),
                                    l.children,
                                ],
                            }),
                            l.children,
                        ],
                    })
                );
            }),
        ),
        Eo = {
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
            fadeIn: 'Fill_fadeIn_43ad874e',
            fadeInThreeQuarters: 'Fill_fadeInThreeQuarters_43ad874e',
            fadeInHalf: 'Fill_fadeInHalf_43ad874e',
            fadeOut: 'Fill_fadeOut_43ad874e',
            fadeInWithScale: 'Fill_fadeInWithScale_43ad874e',
            slideUp: 'Fill_slideUp_43ad874e',
            scale: 'Fill_scale_43ad874e',
            raysAppearance: 'Fill_raysAppearance_43ad874e',
            rotate: 'Fill_rotate_43ad874e',
            'reverse-rotate': 'Fill_reverse-rotate_43ad874e',
            glowAppearance: 'Fill_glowAppearance_43ad874e',
            highlightAppearance: 'Fill_highlightAppearance_43ad874e',
            blink: 'Fill_blink_43ad874e',
            slideUpIn: 'Fill_slideUpIn_43ad874e',
        },
        Co = _r(Ee),
        Po = s.memo(function ({ animationConfig: t, classNames: n }) {
            const r = uo(),
                { activeComponents: a } = uo(),
                o = 100 * r.percentage,
                i = 100 * (r.previous?.percentage ?? 0),
                c = void 0 === r.previous ? o : i,
                l = r.status === ao.doneStatic,
                u = gr(),
                [d, p] = Ws(() => ({ width: c }));
            return (
                s.useEffect(() => {
                    u.run(() =>
                        p.start(
                            eo({
                                baseValue: c,
                                newValue: o,
                                animationType: r.animationType,
                                deltaVisible: a.has('delta'),
                                preViewDeltaVisible: a.has('previewDelta'),
                                animationConfig: t,
                            }),
                        ),
                    );
                }, [o, p, c, r.animationType, t, a, u]),
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(Co, {
                            path: `ui.progressbar.bg_pattern_base_done_${r.size}`,
                            className: k(
                                n?.done,
                                Eo.done,
                                !r.progressCompleted && Eo.done__hidden,
                                r.progressCompleted && (l ? Eo.done__doneStatic : Eo.done__visible),
                            ),
                            repeat: 'repeat',
                            position: 'left top',
                            style: { width: d.width.to((e) => `${e}%`) },
                        }),
                        !l &&
                            e.jsx(Co, {
                                path: `ui.progressbar.bg_pattern_base_done_complete_${r.size}`,
                                className: k(n?.doneComplete, Eo.complete, r.progressCompleted && Eo.complete__visible),
                                repeat: 'repeat',
                                position: 'left top',
                                style: { width: d.width.to((e) => `${e}%`) },
                            }),
                    ],
                })
            );
        }),
        To = _r(Ee),
        Io = s.memo(function ({ filledPattern: t, animationConfig: n, className: r }) {
            const a = uo(),
                { activeComponents: o } = uo(),
                i = gr(),
                c = 100 * a.percentage,
                l = 100 * (a.previous?.percentage ?? 0),
                u = void 0 === a.previous ? c : l,
                [d, p] = Ws(() => ({ width: u }));
            return (
                s.useEffect(() => {
                    i.run(() =>
                        p.start(
                            eo({
                                baseValue: u,
                                newValue: c,
                                animationType: a.animationType,
                                deltaVisible: o.has('delta'),
                                preViewDeltaVisible: o.has('previewDelta'),
                                animationConfig: n,
                            }),
                        ),
                    );
                }, [p, u, a.animationType, o, c, n, i]),
                e.jsx(To, {
                    path: t || `ui.progressbar.bg_pattern_base_filled_${a.size}`,
                    className: k(
                        r,
                        Eo.filled,
                        a.status && Eo[`filled__${a.status}`],
                        a.progressCompleted && Eo.filled__hidden,
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    style: { width: d.width.to((e) => `${e}%`) },
                })
            );
        }),
        ko = s.memo(function ({ filledPattern: t, classNames: n, className: r, animationConfig: a, ...o }) {
            const i = uo(),
                c = _o(),
                l = gr(),
                { activeComponents: u } = uo(),
                d = 100 * i.percentage,
                p = 100 * (i.previous?.percentage ?? 0),
                f = void 0 === i.previous ? d : p;
            (po('fill'),
                s.useEffect(() => {
                    'growFreeze' === i.animationType && i.progressCompleted && !i.activeComponents.has('delta') && c();
                }, [i.activeComponents, i.animationType, i.progressCompleted, c]));
            const [m, h] = Ws(() => ({ width: f }));
            return (
                s.useEffect(() => {
                    l.run(() =>
                        h.start({
                            ...eo({
                                baseValue: f,
                                newValue: d,
                                animationType: i.animationType,
                                deltaVisible: u.has('delta'),
                                preViewDeltaVisible: u.has('previewDelta'),
                                animationConfig: a,
                            }),
                            onStart: () => c(),
                        }),
                    );
                }, [a, h, f, i.animationType, u, d, c, l]),
                e.jsxs('div', {
                    className: k(Eo.base, r),
                    children: [
                        e.jsx(_r.div, { className: n?.fill, style: { width: m.width.to((e) => `${e}%`) } }),
                        o.children ??
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(Io, { filledPattern: t, className: n?.filledPattern, animationConfig: a }),
                                    e.jsx(Po, {
                                        classNames: { done: n?.done, doneComplete: n?.doneComplete },
                                        animationConfig: a,
                                    }),
                                ],
                            }),
                        e.jsx(_r.div, {
                            className: k(
                                n?.edge,
                                Eo.edge,
                                0 === i.percentage && Eo.edge__noProgress,
                                !u.has('previewDelta') && !i.progressCompleted && Eo.edge__visible,
                                i.status && Eo[`edge__${i.status}`],
                            ),
                            style: { left: m.width.to((e) => `${e}%`) },
                        }),
                    ],
                })
            );
        });
    ((ko.Filled = Io), (ko.Done = Po));
    const So = { above: 'above', below: 'below' },
        Ao = {
            base: 'Indicators_f2e99d31',
            step: 'Indicators_step_a78300f3',
            step__above: 'Indicators_step__above_a95c746e',
            indicator: 'Indicators_indicator_8484a8c7',
            label: 'Indicators_label_f8c7ff1e',
            fadeIn: 'Indicators_fadeIn_4533c96b',
            fadeInThreeQuarters: 'Indicators_fadeInThreeQuarters_4533c96b',
            fadeInHalf: 'Indicators_fadeInHalf_4533c96b',
            fadeOut: 'Indicators_fadeOut_4533c96b',
            fadeInWithScale: 'Indicators_fadeInWithScale_4533c96b',
            slideUp: 'Indicators_slideUp_4533c96b',
            scale: 'Indicators_scale_4533c96b',
            raysAppearance: 'Indicators_raysAppearance_4533c96b',
            rotate: 'Indicators_rotate_4533c96b',
            'reverse-rotate': 'Indicators_reverse-rotate_4533c96b',
            glowAppearance: 'Indicators_glowAppearance_4533c96b',
            highlightAppearance: 'Indicators_highlightAppearance_4533c96b',
            blink: 'Indicators_blink_4533c96b',
            slideUpIn: 'Indicators_slideUpIn_4533c96b',
        };
    function No({ position: t, value: n, children: s, className: r, classNames: a }) {
        const o = uo();
        return e.jsxs('div', {
            className: k(Ao.step, Ao[`step__${t}`], r),
            style: { left: (n / o.maxValue) * 100 + '%' },
            children: [
                t === So.below && e.jsx('div', { className: k(Ao.indicator, a?.indicator) }),
                void 0 !== s && e.jsx('div', { className: k(Ao.label, a?.label), children: s }),
                t === So.above && e.jsx('div', { className: k(Ao.indicator, a?.indicator) }),
            ],
        });
    }
    const Mo = Lr('Indicators', Ao.base),
        jo = function (t) {
            const n = uo();
            return (
                po('stepIndicators'),
                e.jsx(Mo, {
                    children: me(t.count, (s) => {
                        const r = (s / (t.count - 1)) * 100,
                            a = n.value >= r && 0 !== n.value;
                        return e.jsx(
                            No,
                            {
                                position: t.position,
                                value: r,
                                className: k(t.classNames?.step, a && t.classNames?.completed),
                                classNames: t.classNames?.stepClassNames,
                                children: t.children ? t.children(s, r, a) : void 0,
                            },
                            s,
                        );
                    }),
                })
            );
        };
    ((jo.Step = No), (jo.positions = So));
    const Oo = 'PreviewDelta_86b01c3e',
        Do = 'PreviewDelta_negative_1c375892',
        Bo = 'PreviewDelta_positive_be83fc48',
        Fo = 'PreviewDelta_negative__visible_19dda1c5',
        $o = 'PreviewDelta_positive__visible_19dda1c5',
        Uo = s.forwardRef(function ({ value: t, classNames: n, ...s }, r) {
            const a = uo();
            po('previewDelta');
            const o = t - a.value,
                i = o < 0 ? 'negative' : o > 0 ? 'positive' : 'neutral';
            if ('neutral' === i) return null;
            const c = Math.abs(o) / a.maxValue,
                l = o < 0 ? c : 0,
                u = 100 * (a.percentage - l),
                d = 100 * c;
            return e.jsxs('div', {
                ...s,
                'data-name': 'PreviewDelta',
                ref: r,
                className: k(Oo, s.className),
                children: [
                    e.jsx('div', {
                        style: { left: `${u}%`, width: `${d}%`, ...s.style },
                        className: k(n?.negative, Do, 'negative' === i && Fo),
                    }),
                    e.jsx('div', {
                        style: { left: `${u}%`, width: `${d}%`, ...s.style },
                        className: k(n?.positive, Bo, 'positive' === i && $o),
                    }),
                ],
            });
        });
    function Lo(t) {
        const [n, r] = s.useState(Math.min(t.value, t.maxValue)),
            [a, o] = s.useState(t.maxValue),
            i = Me(n),
            c = Me(a),
            l = s.useRef(new Set()),
            u = Oe((e) => r(Math.min(e, t.maxValue))),
            d = Oe((e) => l.current.has(e));
        (s.useLayoutEffect(() => {
            u(t.value);
        }, [t.value, u]),
            s.useLayoutEffect(() => {
                o(t.maxValue);
            }, [t.maxValue]));
        const p = Oe((e) => t.onValueChange?.(e));
        s.useEffect(() => {
            p(n);
        }, [p, n]);
        const f = Oe((e) => t.onMaxValueChange?.(e));
        s.useEffect(() => {
            f(a);
        }, [f, a]);
        const m = s.useMemo(() => {
            if (void 0 !== i && void 0 !== c) return { value: i, maxValue: c, percentage: i / c };
        }, [i, c]);
        fe(a > 0, 'ProgressBar: maxValue must be greater than 0');
        const h = s.useMemo(() => {
                const e = n / a === 1 && t.status !== ao.doneInactive;
                return t.animationType === so.growFreeze ? e && t.maxValueAchieved : e;
            }, [a, t.animationType, t.maxValueAchieved, t.status, n]),
            _ = s.useMemo(
                () => ({
                    value: n,
                    maxValue: a,
                    setValue: u,
                    setMaxValue: o,
                    animationType: t.animationType ?? so.simple,
                    size: t.size,
                    status: t.status,
                    previous: m,
                    activeComponents: l.current,
                    progressCompleted: h,
                    hasComponent: d,
                    soundTarget: t.soundTarget,
                    silent: t.silent ?? !1,
                    freezeUnlocked: t.maxValueAchieved ?? !1,
                    percentage: n / a,
                }),
                [n, a, u, t.animationType, t.size, t.status, t.soundTarget, t.silent, t.maxValueAchieved, m, h, d],
            );
        return e.jsx(lo.Provider, { value: _, children: t.children });
    }
    const zo = {
            background: 'ProgressBar_background_b4143753',
            base: 'ProgressBar_27c2305c',
            base__medium: 'ProgressBar_base__medium_97d40af9',
            base__large: 'ProgressBar_base__large_56a06125',
            base__disabled: 'ProgressBar_base__disabled_c8466b10',
            base__done: 'ProgressBar_base__done_dcd0e31a',
            border: 'ProgressBar_border_cc9e47f4',
            fadeIn: 'ProgressBar_fadeIn_13ab2776',
            fadeInThreeQuarters: 'ProgressBar_fadeInThreeQuarters_13ab2776',
            fadeInHalf: 'ProgressBar_fadeInHalf_13ab2776',
            fadeOut: 'ProgressBar_fadeOut_13ab2776',
            fadeInWithScale: 'ProgressBar_fadeInWithScale_13ab2776',
            slideUp: 'ProgressBar_slideUp_13ab2776',
            scale: 'ProgressBar_scale_13ab2776',
            raysAppearance: 'ProgressBar_raysAppearance_13ab2776',
            rotate: 'ProgressBar_rotate_13ab2776',
            'reverse-rotate': 'ProgressBar_reverse-rotate_13ab2776',
            glowAppearance: 'ProgressBar_glowAppearance_13ab2776',
            highlightAppearance: 'ProgressBar_highlightAppearance_13ab2776',
            blink: 'ProgressBar_blink_13ab2776',
            slideUpIn: 'ProgressBar_slideUpIn_13ab2776',
        },
        qo = Lr('ProgressBar', zo.base, { variants: { size: { medium: zo.base__medium, large: zo.base__large } } }),
        Vo = function ({ size: t = ro.medium, backgroundPattern: n, status: s, className: r, classNames: a, ...o }) {
            return e.jsx(Lo, {
                size: t,
                status: s,
                ...o,
                children: e.jsxs(qo, {
                    size: t,
                    className: k(r, o.value === o.maxValue && s !== ao.doneInactive && zo.base__done),
                    children: [
                        e.jsx('div', { className: k(zo.border, zo[`border__${t}`], a?.border) }),
                        e.jsx('div', { className: k(zo.background, a?.background) }),
                        e.jsx(mo, { backgroundPattern: n, className: a?.backgroundPattern }),
                        o.children,
                    ],
                }),
            });
        };
    ((Vo.Fill = ko),
        (Vo.Delta = Ro),
        (Vo.PreviewDelta = Uo),
        (Vo.NumberIndicators = jo),
        (Vo.sizes = ro),
        (Vo.statuses = ao),
        (Vo.animations = so));
    const Go = 'ProgressBar_wrapper_a944db13',
        Ho = [oo, io],
        Qo = s.memo(function ({ progressBar: t, fill: n, delta: s, wrapperSpringProps: r }) {
            const a = Ws({ from: { opacity: 1 }, ...r });
            return e.jsx(Vo, {
                ...t,
                children: e.jsxs(_r.div, {
                    className: Go,
                    style: a,
                    children: [
                        e.jsx(Vo.Fill, { ...n }),
                        void 0 !== s && e.jsx(Vo.Delta, { ...s, steps: s?.steps ?? Ho }),
                    ],
                }),
            });
        }),
        Wo = 'ProgressStats_label_6e975df0',
        Yo = 'ProgressStats_receivedInBattle_d3abd2fe',
        Xo = Lr('ProgressStatsLabel', Wo),
        Zo = s.forwardRef(({ className: t, text: n, transitionProps: s, ...r }, a) =>
            e.jsx('div', {
                ...r,
                className: k(Wo, t),
                ref: a,
                children: e.jsx($a, { value: n, transition: s, children: J }),
            }),
        ),
        Ko = s.forwardRef(({ value: t, className: n, total: s, ...r }, a) =>
            e.jsx('div', {
                ...r,
                ref: a,
                className: k(Yo, n),
                children: e.jsx(ja, {
                    path: s ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    params: { value: t },
                }),
            }),
        ),
        Jo = s.forwardRef(({ value: t, className: n, total: r, transition: a, target: o, ...i }, c) => {
            const l = Ae(),
                u = s.useMemo(
                    () => ({
                        value: t,
                        textPath: r ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    }),
                    [t, r],
                ),
                d = s.useRef(a);
            return (
                s.useEffect(() => {
                    d.current = a;
                }, [a]),
                e.jsx('div', {
                    ...i,
                    ref: c,
                    className: k(Yo, n),
                    children: e.jsx($a, {
                        value: u,
                        transition: {
                            ...a,
                            enter: {
                                ...a.enter,
                                onRest: (...e) => {
                                    (!0 !== d.current.immediate &&
                                        l.play('numbersShown', { target: o ?? 'mission-progress:received-value' }),
                                        'function' == typeof a?.enter?.onRest && a.enter.onRest(...e));
                                },
                            },
                        },
                        children: (t) => e.jsx(ja, { path: t.textPath, params: { value: t.value } }),
                    }),
                })
            );
        }),
        ei = Lr('ProgressStats');
    ((ei.Label = Xo), (ei.ReceivedValue = Ko), (ei.AnimatedReceivedValue = Jo), (ei.AnimatedLabel = Zo));
    const ti = s.createContext(void 0);
    function ni() {
        const e = s.useContext(ti);
        return (fe(void 0 !== e, 'useCondition must be used under conditionContext.Provider'), e);
    }
    const si = s.createContext(void 0);
    function ri() {
        const e = s.useContext(si);
        return (fe(void 0 !== e, 'useMissionCard must be used under missionCardContext.Provider'), e);
    }
    const ai = {
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
            fadeIn: 'MissonCard_fadeIn_713fc99f',
            fadeInThreeQuarters: 'MissonCard_fadeInThreeQuarters_713fc99f',
            fadeInHalf: 'MissonCard_fadeInHalf_713fc99f',
            fadeOut: 'MissonCard_fadeOut_713fc99f',
            fadeInWithScale: 'MissonCard_fadeInWithScale_713fc99f',
            slideUp: 'MissonCard_slideUp_713fc99f',
            scale: 'MissonCard_scale_713fc99f',
            raysAppearance: 'MissonCard_raysAppearance_713fc99f',
            rotate: 'MissonCard_rotate_713fc99f',
            'reverse-rotate': 'MissonCard_reverse-rotate_713fc99f',
            glowAppearance: 'MissonCard_glowAppearance_713fc99f',
            highlightAppearance: 'MissonCard_highlightAppearance_713fc99f',
            blink: 'MissonCard_blink_713fc99f',
            slideUpIn: 'MissonCard_slideUpIn_713fc99f',
        },
        oi = ['win', 'isAlive'],
        ii = S.cubicBezier(0.33, 0, 0.25, 1);
    const ci = {
        Condition: function (t) {
            const n = t.completed && t.multiQuest;
            return (
                t.lastCondition && n && t.animation && (t.rewardsGlowRef?.start(), t.completedMarkRef?.start()),
                e.jsx(ci.Root, {
                    condition: t.value,
                    children: e.jsxs(ci.Body, {
                        children: [
                            e.jsx(ci.Title, { questsAmount: t.questsAmount }),
                            e.jsx(ci.Description, { guiDisabledDescription: t.guiDisabledDescription }),
                            !n &&
                                e.jsx(ci.Progression, {
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
            return e.jsx(ti.Provider, {
                value: t,
                children: e.jsx('div', { ...n, className: k(ai.content, t.completed && ai.content__completed) }),
            });
        },
        Description: function ({ guiDisabledDescription: t }) {
            const { description: n, conditionType: s } = ni();
            return s && oi.includes(s)
                ? null
                : e.jsx('div', {
                      className: ai.description,
                      children: e.jsx(Ja, { text: M(t ?? n), className: ai.multiline }),
                  });
        },
        Title: function ({ questsAmount: t }) {
            const { title: n, icon: s, completed: r, progression: a } = ni(),
                { completed: o } = ri();
            if (!s && !n) return null;
            const i = (function ({ icon: e, conditionCompleted: t, questsAmount: n, questCompleted: s }) {
                if (e && e.default.path) return (n && n > 1) || (s && 1 === n) || t ? e : void 0;
            })({ icon: s, questCompleted: o, questsAmount: t, conditionCompleted: r });
            return e.jsxs('div', {
                className: ai.title,
                children: [
                    void 0 !== i &&
                        e.jsx('div', {
                            style: { backgroundImage: `url(${i.default.path})` },
                            className: k(ai.titleIcon, i.default.isGold && ai.titleIcon__gold),
                        }),
                    a ? E.formatNumber('integral', a.total) : n?.trim(),
                ],
            });
        },
        Body: Lr('MissionCardBody', ai.body),
        Progression: function ({ completed: t, rewardsGlowRef: n, completedMarkRef: r }) {
            const { progression: a } = ni(),
                { animation: o, immediateAnimation: i } = ri(),
                c = Xs(),
                l = Xs(),
                [[u, d], p] = s.useState(() => {
                    if (!a) return [0, 0];
                    const e = Math.max(0, a.current - a.earned);
                    return [e, e];
                });
            (s.useEffect(() => {
                var e;
                (o || i) && a && ((e = a.current >= a.total ? a.total : a.current), p(([, t]) => [t, e]));
            }, [o, i, a]),
                s.useEffect(() => {
                    t && !a && (o || i) && (r?.start(), n?.start());
                }, [a, t, r, n, o, i]),
                s.useEffect(() => {
                    i && (c.start(), l.start(), t && (r?.start(), n?.start()));
                }, [i, t, c, l, r, n]));
            const f = s.useMemo(() => {
                if (void 0 !== a)
                    return {
                        progress: {
                            value: d,
                            silent: i,
                            animationType: so.grow,
                            status: ao.doneStatic,
                            maxValue: a.total,
                            className: ai.progressbar,
                            maxValueAchieved: d === a.total,
                        },
                        delta: i
                            ? void 0
                            : {
                                  from: u,
                                  steps: u === d ? [] : [oo, io],
                                  growAnimationConfig: { duration: 600, easing: ii },
                                  shrinkAnimationConfig: { duration: 600, easing: ii },
                                  onState(e) {
                                      e === co &&
                                          d === a.current &&
                                          a.earned > 0 &&
                                          (c.start(), l.start(), t && r?.start());
                                  },
                              },
                        fill: { animationConfig: { duration: i ? 0 : 600, easing: ii } },
                    };
            }, [i, u, d, a, t, c, l, r]);
            return a
                ? (fe.log(
                      a.total >= a.current && a.current >= 0,
                      `Unexpected progression values: current(${a.current}), total(${a.total})`,
                  ),
                  e.jsxs('div', {
                      className: ai.progression,
                      children: [
                          void 0 !== f && e.jsx(Qo, { progressBar: f.progress, delta: f.delta, fill: f.fill }),
                          e.jsxs('div', {
                              className: ai.numberStats,
                              children: [
                                  e.jsx(Qa, {
                                      current: i ? a.current : d,
                                      total: a.total,
                                      className: ai.progressionCounter,
                                      transitionCurrent: { ref: c, immediate: i },
                                      transitionTotal: { immediate: i },
                                  }),
                                  e.jsx(ei.AnimatedReceivedValue, {
                                      value: E.formatNumber('integral', a.earned),
                                      transition: {
                                          ref: l,
                                          immediate: i,
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
        di = ((e) => (
            (e.MULTI = 'multi'),
            (e.CURRENCY = 'currency'),
            (e.PREMIUM_PLUS = 'premium_plus'),
            (e.NUMBER = 'number'),
            (e.STRING = 'string'),
            e
        ))(di || {}),
        pi = ((e) => (
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
        ))(pi || {}),
        fi = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(fi || {}),
        mi = ((e) => (
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
        ))(mi || {});
    function hi(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    var _i,
        gi = { exports: {} };
    var bi,
        yi =
            (_i ||
                ((_i = 1),
                (bi = gi),
                (function () {
                    var e = {}.hasOwnProperty;
                    function t() {
                        for (var n = [], s = 0; s < arguments.length; s++) {
                            var r = arguments[s];
                            if (r) {
                                var a = typeof r;
                                if ('string' === a || 'number' === a) n.push(r);
                                else if (Array.isArray(r)) {
                                    if (r.length) {
                                        var o = t.apply(null, r);
                                        o && n.push(o);
                                    }
                                } else if ('object' === a) {
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
                    bi.exports ? ((t.default = t), (bi.exports = t)) : (window.classNames = t);
                })()),
            gi.exports);
    const vi = hi(yi),
        wi = [
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
        xi = [li.Gold, li.Credits, li.Crystal, li.FreeXp],
        Ri = [li.BattlePassPoints, li.EquipCoin],
        Ei = [li.PremiumPlus, li.Premium],
        Ci = ['engravings', 'backgrounds'],
        Pi = ['engraving', 'background'],
        Ti = (e, t = ui.Small) => {
            const { name: n, type: s, value: r, icon: a, item: o, dogTagType: i } = e,
                c = t === ui.S24x24 ? ui.Small : t,
                l = ((e) => {
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
                })(c);
            switch (n) {
                case 'basic':
                case 'plus':
                    return `R.images.gui.maps.icons.quests.bonuses.${c}.${s}_${r}`;
                case 'premium':
                case 'premium_plus':
                    return `R.images.gui.maps.icons.quests.bonuses.${c}.${n}_${r}`;
                case 'items':
                    return `R.images.gui.maps.icons.quests.bonuses.${c}.${o}`;
                case 'blueprints':
                case 'blueprintsAny':
                case 'finalBlueprints':
                    return `R.images.gui.maps.icons.blueprints.fragment.${c}.${a}`;
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
                    return `R.images.gui.maps.icons.quests.bonuses.${c}.${a}`;
                case 'crewBooks':
                    return `R.images.gui.maps.icons.crewBooks.books.${c}.${a}`;
                case 'dogTagComponents':
                    return ((e, t, n) => {
                        const s = Ci[e];
                        if (s) {
                            const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(s),
                                a = r.$dyn(n);
                            return !a && Pi[e] ? `${r.$dyn(Pi[e])}` : `${a}`;
                        }
                        return (
                            console.error(
                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                            ),
                            ''
                        );
                    })(i, c, a);
                case 'dossier_badge':
                    return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
                case 'dossier_achievement':
                    return `R.images.gui.maps.icons.achievement.${l}.${a}`;
                case 'xp':
                case 'xpFactor':
                    return `R.images.gui.maps.icons.quests.bonuses.${c}.exp`;
                case 'creditsFactor':
                    return `R.images.gui.maps.icons.quests.bonuses.${c}.credits`;
                case 'tankmenXPFactor':
                    return `R.images.gui.maps.icons.quests.bonuses.${c}.tankmenXP`;
                case 'dailyXPFactor':
                case 'freeXPFactor':
                    return `R.images.gui.maps.icons.quests.bonuses.${c}.freeXP`;
                case 'premiumTank':
                    return `R.images.gui.maps.icons.quests.bonuses.${c}.vehicles`;
                case 'styleProgressToken':
                    return `R.images.gui.maps.icons.quests.bonuses.${c}.style_3d`;
                case 'collectionItem':
                    return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                default:
                    return `R.images.gui.maps.icons.quests.bonuses.${c}.${n}`;
            }
        },
        Ii = [ui.Small, ui.Big],
        ki = {
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
            fadeIn: 'Reward_fadeIn_21f091ec',
            fadeInThreeQuarters: 'Reward_fadeInThreeQuarters_21f091ec',
            fadeInHalf: 'Reward_fadeInHalf_21f091ec',
            fadeOut: 'Reward_fadeOut_21f091ec',
            fadeInWithScale: 'Reward_fadeInWithScale_21f091ec',
            slideUp: 'Reward_slideUp_21f091ec',
            scale: 'Reward_scale_21f091ec',
            raysAppearance: 'Reward_raysAppearance_21f091ec',
            rotate: 'Reward_rotate_21f091ec',
            'reverse-rotate': 'Reward_reverse-rotate_21f091ec',
            glowAppearance: 'Reward_glowAppearance_21f091ec',
            highlightAppearance: 'Reward_highlightAppearance_21f091ec',
            blink: 'Reward_blink_21f091ec',
            slideUpIn: 'Reward_slideUpIn_21f091ec',
        },
        Si = f.resolve('images'),
        Ai = new Map([
            [ui.S24x24, ui.Small],
            [ui.S48x48, ui.Small],
        ]),
        Ni = ({
            name: t,
            image: n,
            isPeriodic: s = !1,
            isFixedBoxSize: r = !0,
            size: a = ui.Big,
            special: o,
            value: i,
            valueType: c,
            title: l,
            style: u,
            className: d,
            classNames: p,
            tooltipArgs: m,
            periodicIconTooltipArgs: h,
        }) => {
            const _ = Ai.has(a) ? Ai.get(a) : a,
                g = ((e, t) => {
                    if (void 0 === t || !Ii.includes(e)) return null;
                    switch (t) {
                        case pi.BATTLE_BOOSTER:
                        case pi.BATTLE_BOOSTER_REPLACE:
                            return fi.BATTLE_BOOSTER;
                    }
                })(a, o),
                b = ((e) => {
                    if (void 0 === e) return null;
                    switch (e) {
                        case pi.BATTLE_BOOSTER:
                            return mi.BATTLE_BOOSTER;
                        case pi.BATTLE_BOOSTER_REPLACE:
                            return mi.BATTLE_BOOSTER_REPLACE;
                        case pi.BUILT_IN_EQUIPMENT:
                            return mi.BUILT_IN_EQUIPMENT;
                        case pi.EQUIPMENT_PLUS:
                            return mi.EQUIPMENT_PLUS;
                        case pi.EQUIPMENT_TROPHY_BASIC:
                            return mi.EQUIPMENT_TROPHY_BASIC;
                        case pi.EQUIPMENT_TROPHY_UPGRADED:
                            return mi.EQUIPMENT_TROPHY_UPGRADED;
                        case pi.EQUIPMENT_MODERNIZED_UPGRADED_1:
                            return mi.EQUIPMENT_MODERNIZED_UPGRADED_1;
                        case pi.EQUIPMENT_MODERNIZED_UPGRADED_2:
                            return mi.EQUIPMENT_MODERNIZED_UPGRADED_2;
                        case pi.EQUIPMENT_MODERNIZED_UPGRADED_3:
                            return mi.EQUIPMENT_MODERNIZED_UPGRADED_3;
                        case pi.PROGRESSION_STYLE_UPGRADED_1:
                            return mi.PROGRESSION_STYLE_UPGRADED_1;
                        case pi.PROGRESSION_STYLE_UPGRADED_2:
                            return mi.PROGRESSION_STYLE_UPGRADED_2;
                        case pi.PROGRESSION_STYLE_UPGRADED_3:
                            return mi.PROGRESSION_STYLE_UPGRADED_3;
                        case pi.PROGRESSION_STYLE_UPGRADED_4:
                            return mi.PROGRESSION_STYLE_UPGRADED_4;
                        case pi.PROGRESSION_STYLE_UPGRADED_5:
                            return mi.PROGRESSION_STYLE_UPGRADED_5;
                        case pi.PROGRESSION_STYLE_UPGRADED_6:
                            return mi.PROGRESSION_STYLE_UPGRADED_6;
                        case pi.ATTACHMENT_RARE:
                            return mi.ATTACHMENT_RARE;
                        case pi.ATTACHMENT_EPIC:
                            return mi.ATTACHMENT_EPIC;
                        case pi.ATTACHMENT_LEGENDARY:
                            return mi.ATTACHMENT_LEGENDARY;
                    }
                })(o),
                y = ((e, t) => {
                    const n = f.resolve('intl');
                    if (void 0 === e) return null;
                    switch (t) {
                        case di.MULTI: {
                            const t = Number(e);
                            return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                        }
                        case di.CURRENCY:
                        case di.NUMBER:
                            return n.formatNumber(n.numberFormats[0] || 'integral', Number(e));
                        case di.PREMIUM_PLUS: {
                            const t = Number(e);
                            return isNaN(t) ? e : null;
                        }
                        default:
                            return e;
                    }
                })(i, c),
                v = xr({ contentId: m?.contentId ?? 0, args: m?.args, resId: m?.resId, decoratorId: m?.decoratorId }),
                w = Rr({ header: h?.header, body: h?.body });
            return e.jsxs('div', {
                className: vi(ki.base, ki[`base__${a}`], !r && ki.base__dynamicBox, d),
                style: u,
                ...v,
                children: [
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs('div', {
                                className: vi(ki.image, r ? ki.image__fixedBox : ki[`image__${a}`], p?.image),
                                children: [
                                    g &&
                                        e.jsx('div', {
                                            className: vi(ki.highlight, p?.highlight),
                                            style: {
                                                backgroundImage: `url(${Si.readOrEmpty(`quests.bonuses.${_}.${g}_highlight`)})`,
                                            },
                                        }),
                                    n &&
                                        e.jsx('div', {
                                            className: vi(ki.icon, p?.rewardIcon),
                                            style: { backgroundImage: `url(${n})` },
                                        }),
                                    b &&
                                        e.jsx('div', {
                                            className: vi(ki.overlay, p?.overlay),
                                            style: {
                                                backgroundImage: `url(${Si.readOrEmpty(`quests.bonuses.${_}.${b}_overlay`)})`,
                                            },
                                        }),
                                ],
                            }),
                            y &&
                                e.jsx('div', {
                                    className: vi(ki.info, ki[`info__${t}`], c === di.MULTI && ki.info__multi, p?.info),
                                    children: y,
                                }),
                            l && e.jsx('div', { className: ki.title, children: l }),
                        ],
                    }),
                    s && e.jsx('div', { className: vi(ki.timer, p?.periodicIcon), ...w }),
                ],
            });
        },
        Mi = Object.fromEntries(Object.entries(va).map(([e]) => [e, (e) => e]));
    const ji = 'RewardsList_b956755b',
        Oi = 'RewardsList_base__vertical_59db3c9f',
        Di = 'RewardsList_reward_fc200613',
        Bi = 'RewardsList_reward__vertical_5f09c6e0',
        Fi = 'RewardsList_boxRewardClassName_882c908d',
        $i = { [ui.S24x24]: ui.Small, [ui.S48x48]: ui.Small },
        Ui = s.memo(function ({
            data: t,
            isFixedBoxSize: n,
            size: s = ui.Big,
            isVertical: r = !1,
            count: a,
            classMix: o,
            rewardItemClassMix: i,
            boxRewardTooltip: c,
            boxRewardValue: l,
            boxRewardClassName: u,
            boxRewardClassNames: d,
        }) {
            const p = f.resolve('strings'),
                m = f.resolve('images'),
                h =
                    'number' == typeof a && a < t.length
                        ? `${m.readOrEmpty(`quests.bonuses.${$i[s] ?? s}.default`)}`
                        : void 0,
                _ =
                    l ||
                    (function (e, t = {}) {
                        const n = pa(e, Na);
                        return String(Ta(n, Mi, t));
                    })(Aa(p.readOrEmpty('tooltips.quests.awards.additional.bottom')), { count: t.length - (a || 0) });
            return e.jsx('div', {
                className: vi(ji, r && Oi, o),
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
                                                  className: vi(Di, r && Bi, i),
                                                  children: e.jsx(Ni, { size: s, isFixedBoxSize: n, ...t }),
                                              },
                                              a,
                                          ),
                                      ),
                                  e.jsx('div', {
                                      className: vi(Di, r && Bi, i),
                                      children: e.jsx(Ni, {
                                          name: 'more',
                                          isFixedBoxSize: n,
                                          image: h,
                                          size: s,
                                          value: _,
                                          tooltipArgs: c,
                                          className: vi(Fi, u),
                                          classNames: d,
                                      }),
                                  }),
                              ],
                          })
                        : t.map((t, a) =>
                              e.jsx(
                                  'div',
                                  {
                                      className: vi(Di, r && Bi, i),
                                      children: e.jsx(Ni, { size: s, isFixedBoxSize: n, ...t }),
                                  },
                                  a,
                              ),
                          ),
            });
        });
    function Li({ bonuses: t, size: n, resId: r, boxRewardTooltipArgs: a, maxRewardsCount: o, questId: i, ...c }) {
        const l = s.useMemo(
                () =>
                    le(t, (e) => {
                        return {
                            size: n,
                            name: e.name,
                            image: Ti(e, n),
                            value: e.value,
                            valueType:
                                ((a = e.name),
                                wi.includes(a)
                                    ? di.MULTI
                                    : xi.includes(a)
                                      ? di.CURRENCY
                                      : Ri.includes(a)
                                        ? di.NUMBER
                                        : Ei.includes(a)
                                          ? di.PREMIUM_PLUS
                                          : di.STRING),
                            tooltipArgs: {
                                ...((t = { tooltipId: i ? `${i}:${e.tooltipId}` : e.tooltipId }),
                                (s =
                                    Number(e.tooltipContentId) ||
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    )),
                                { args: t, contentId: s }),
                                resId: r,
                            },
                        };
                        var t, s, a;
                    }),
                [t, n, r, i],
            ),
            u = void 0 === o ? t.length : o <= 1 ? 1 : t.length <= o ? o : o - 1,
            d = s.useMemo(
                () =>
                    a || {
                        contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                        args: { showFromIndex: u },
                        resId: r,
                    },
                [u, r, a],
            );
        return e.jsx(Ui, { ...c, data: l, count: u, boxRewardTooltip: d, size: n });
    }
    const zi = 'AnimatedRewards_glowContainer_82630782',
        qi = 'AnimatedRewards_c981a355',
        Vi = 'AnimatedRewards_rewardsWrapper_11b576b3',
        Gi = 'AnimatedRewards_glow_3a2cd010',
        Hi = 'AnimatedRewards_glowImage_4ecce597',
        Qi = S.cubicBezier(0.33, 0, 0.67, 1),
        Wi = S.cubicBezier(0.23, 0, 0.57, 1),
        Yi = s.forwardRef(function (
            {
                animationRef: t,
                immediateAnimation: n,
                maxRewardsCount: r,
                bonuses: a,
                boxRewardTooltipArgs: o,
                className: i,
                classNames: c,
                ...l
            },
            u,
        ) {
            const d = Xs(),
                [p] = Ws(() => ({
                    ref: t,
                    from: { opacity: 0, scale: 0.6 },
                    to: async (e) => {
                        (await e({ opacity: 1, scale: 0.8, config: { duration: 330, easing: Qi } }),
                            d.start(),
                            await e({ opacity: 0, scale: 1, config: { duration: 330, easing: Qi } }));
                    },
                })),
                [f] = Ws(() => ({
                    ref: d,
                    immediate: n,
                    from: { opacity: 1 },
                    to: { opacity: 0.4, config: { duration: 330, easing: Wi } },
                }));
            return (
                s.useEffect(() => {
                    n && (t?.pause(), t?.start({ immediate: !0, to: { opacity: 0, scale: 1 } }), d.start());
                }, [n]),
                e.jsxs('div', {
                    ref: u,
                    className: k(qi, i),
                    children: [
                        e.jsx(_r.div, {
                            style: f,
                            className: k(Vi, c?.rewardsWrapper),
                            children: e.jsx(Li, { ...l, maxRewardsCount: r, bonuses: a, boxRewardTooltipArgs: o }),
                        }),
                        e.jsx('div', {
                            className: k(zi, c?.glowContainer),
                            children: me(r ? Math.min(r, a.length) : a.length, (t) =>
                                e.jsx(
                                    _r.div,
                                    {
                                        style: p,
                                        className: Gi,
                                        children: e.jsx(
                                            Ee,
                                            { path: 'post_battle.progression.reward_glow', className: Hi },
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
        Xi = f.resolve('views');
    function Zi({ limit: e, rewardsTooltipResId: t, ...n }) {
        return {
            contentId: Xi.read((e) => e.lobby.tooltips.AdditionalBattlePassRewardsTooltip('resId')),
            args: { showFromIndex: e - 1, ...n },
            resId: t,
        };
    }
    function Ki({
        completed: t,
        rewardsGlowRef: n,
        bonuses: s,
        maxRewardsCount: r,
        rewardsTooltipResId: a,
        immediateAnimation: o,
        questId: i,
        level: c,
        chapter: l,
        rewardType: u,
        className: d,
        rewardItemClassName: p,
    }) {
        const f = {
            bonuses: s,
            questId: i,
            maxRewardsCount: r,
            size: ui.Small,
            resId: a,
            boxRewardTooltipArgs: Zi({
                limit: r,
                rewardsTooltipResId: a,
                rewardType: u,
                level: c ? c - 1 : void 0,
                chapter: l,
                questId: i,
            }),
            rewardItemClassMix: p,
        };
        return t
            ? e.jsx(Yi, {
                  ...f,
                  animationRef: n,
                  immediateAnimation: o,
                  className: d,
                  classNames: { glowContainer: d },
              })
            : e.jsx(Li, { ...f, classMix: d });
    }
    const Ji = 'CompletedMark_fc4eee08',
        ec = 'CompletedMark_glow_33775180',
        tc = S.cubicBezier(1, 0, 0.95, 1),
        nc = S.cubicBezier(0.45, 0, 0.52, 1),
        sc = s.forwardRef(function (
            {
                target: t,
                animationRef: n,
                className: a,
                path: o,
                width: i,
                height: c,
                glow: l,
                springProps: u,
                style: d,
                classNames: p,
                onGlowRest: f,
                ...m
            },
            h,
        ) {
            const _ = s.useRef(u),
                g = Ae(),
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
                [y, v] = Ws(() => ({ from: { opacity: 0 } })),
                [w] = Ws(() => ({
                    ref: n,
                    from: { maskSize: '0% 100%', opacity: 0 },
                    to: [
                        {
                            maskSize: '40% 80%',
                            opacity: 0.5,
                            config: { duration: 100, easing: tc },
                            immediate: _.current?.immediate,
                            onStart: () => {
                                !0 !== _.current?.immediate &&
                                    g.play('showCheckMark', { target: t || 'mission-progress:checkmark' });
                            },
                        },
                        {
                            maskSize: '100% 100%',
                            opacity: 1,
                            config: { duration: 100, easing: tc },
                            immediate: _.current?.immediate,
                        },
                    ],
                    onRest: () => {
                        v.start({
                            to: [
                                { opacity: 0.6, config: { duration: 160, easing: nc } },
                                { opacity: 0, config: { duration: 160, easing: nc } },
                            ],
                            onRest: f,
                        });
                    },
                    ..._,
                }));
            return (
                s.useEffect(() => {
                    _.current = u;
                }, [u]),
                e.jsxs('div', {
                    className: k(Ji, a),
                    children: [
                        e.jsx(_r.div, {
                            style: y,
                            className: k(ec, p?.glow),
                            children: e.jsx(Ee, {
                                width: l?.width ?? b.glow.width,
                                height: l?.height ?? b.glow.height,
                                path: l?.path ?? b.glow.path,
                            }),
                        }),
                        e.jsx(_r.div, {
                            ...m,
                            style: { ...w, ...d },
                            ref: h,
                            className: p?.icon,
                            children: e.jsx(Ee, {
                                width: i ?? b.icon.width,
                                height: c ?? b.icon.height,
                                path: o ?? b.icon.path,
                            }),
                        }),
                    ],
                })
            );
        });
    s.forwardRef(function ({ path: t, width: n, height: s, ...a }, o) {
        const i = r.useAdaptive(
            { size: 24, path: 'post_battle.progression.done_24x24' },
            { large: { size: 32, path: 'post_battle.progression.done_32x32' } },
        );
        return e.jsx(Ee, { ...a, ref: o, width: n ?? i.size, height: s ?? i.size, path: t ?? i.path });
    });
    var rc = ((e) => (
        (e.EASY = 'easy'),
        (e.MEDIUM = 'medium'),
        (e.HARD = 'hard'),
        (e.BONUS = 'bonus'),
        (e.PREMIUM = 'premium'),
        (e.EPIC = 'epic'),
        e
    ))(rc || {});
    function ac({ value: t, questType: n, className: s }) {
        return t
            ? e.jsx('div', {
                  className: k(ai.iconImage, ai.iconImage__regular, n === rc.PREMIUM && ai.iconImage__gold, s),
                  style: { backgroundImage: `url(${t})` },
              })
            : null;
    }
    const oc = (e) =>
            p.createElement(
                'svg',
                { width: 13, height: 7, viewBox: '0 0 13 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
                p.createElement('path', { d: 'M9 7L13 3.49026L9 0V2.98374L0 3V4H9V7Z', fill: '#454443' }),
            ),
        ic = f.resolve('strings');
    function cc(t) {
        return 'none' === t.type
            ? e.jsx('div', { className: k(ai.separator, ai.separator__none, t.className) })
            : 'union' === t.type
              ? e.jsx('div', { className: k(ai.separator, ai.separator__union, t.className) })
              : 'or' === t.type
                ? e.jsxs('div', {
                      className: k(ai.separator, ai.separator__or, t.className),
                      children: [
                          e.jsx(oc, { width: 16, height: 16, className: ai.invertedArrow }),
                          ic.readOrEmpty('battle_results.conditions.type.or'),
                          e.jsx(oc, { width: 16, height: 16, className: ai.arrow }),
                      ],
                  })
                : e.jsx('div', {
                      className: k(ai.separator, ai.separator__and, t.className),
                      children: ic.readOrEmpty('battle_results.conditions.type.and'),
                  });
    }
    function lc(t) {
        if (!t.children) return null;
        const n = s.Children.toArray(t.children);
        return e.jsx(e.Fragment, {
            children: de(
                n,
                (e) => null != e,
                (n, r) => e.jsxs(s.Fragment, { children: [r > 0 && e.jsx(cc, { ...t }), n] }, r),
            ),
        });
    }
    const uc = { 1: 5, 2: 5, 3: 3 };
    function dc(e) {
        return 'item' === e.type ? 1 : e.groups.reduce((e, t) => e + dc(t), 0);
    }
    function pc(e) {
        if ('item' === e.type) return e.condition?.icon;
        for (const t of e.groups) {
            const e = pc(t);
            if (e) return e;
        }
    }
    function fc(t) {
        const n = t.value;
        return 'item' === n.type
            ? e.jsx(
                  ci.Condition,
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
            : e.jsx(lc, {
                  type: n.separate,
                  children: de(
                      n.groups,
                      (e) => 'items' === e.type || e.index < 5,
                      (s, r) =>
                          e.jsx(
                              fc,
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
    const mc = 'R.images.gui.maps.icons.post_battle.general_quest',
        hc = { default: { path: `${mc}_32` }, medium: { path: mc } },
        _c = s.memo(function (t) {
            const n = Xs(),
                a = Xs(),
                { animation: o, immediateAnimation: i } = ri(),
                { icon: c, questsAmount: l } = s.useMemo(() => {
                    const e = dc(t.value);
                    return { icon: e > 1 ? (t.generalIcon ?? hc) : (pc(t.value) ?? hc), questsAmount: e };
                }, [t.generalIcon, t.value]),
                u = r.useAdaptive(c.default, c),
                d = uc[l] ?? 0,
                p = l > 3 ? 'groups__manyQuests' : 3 === l ? 'groups__threeQuests' : 'groups__twoQuests';
            return e.jsxs('div', {
                className: k(ai.groups, l > 4 && ai.groups__overflow, l > 1 && ai[p]),
                children: [
                    e.jsx('div', {
                        className: ai.iconContainer,
                        children: t.completed
                            ? e.jsx(sc, {
                                  animationRef: n,
                                  className: ai.completedMark,
                                  classNames: { icon: ai.completedMarkIcon },
                                  springProps: { immediate: i, delay: 170 },
                              })
                            : e.jsx(ac, { value: u.path, questType: t.questType }),
                    }),
                    e.jsx('div', {
                        className: ai.questsWithRewards,
                        children: e.jsxs(lc, {
                            type: t.separate ?? 'none',
                            children: [
                                e.jsx('div', {
                                    className: ai.questsContainer,
                                    children: e.jsx(fc, {
                                        value: t.value,
                                        completed: t.completed,
                                        questsAmount: l,
                                        guiDisabledDescription: t.guiDisabledDescription,
                                        rewardsGlowRef: a,
                                        completedMarkRef: n,
                                        progressBarTarget: t.progressBarTarget,
                                        animation: i || o,
                                    }),
                                }),
                                d > 1 &&
                                    e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx('div', { className: ai.gap }),
                                            e.jsx('div', {
                                                className: ai.rewardsContainer,
                                                children: e.jsx(Ki, {
                                                    completed: t.completed,
                                                    rewardsGlowRef: a,
                                                    immediateAnimation: i,
                                                    bonuses: t.bonuses,
                                                    maxRewardsCount: d,
                                                    rewardsTooltipResId: t.rewardsTooltipResId,
                                                    questId: t.questId,
                                                    className: ai.rewards,
                                                    rewardItemClassName: ai.reward,
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
    function gc({ completed: t, progress: n, animation: r, immediateAnimation: a, target: o, ...i }) {
        const c = Ae(),
            l = s.useMemo(() => ({ completed: t, animation: r, immediateAnimation: a }), [t, r, a]);
        return e.jsx(si.Provider, {
            value: l,
            children: e.jsx(Ya, {
                ...i,
                onMouseEnter: (e) => {
                    (i.onMouseEnter?.(e),
                        !0 !== i.disabled &&
                            c.play('mouse-enter', { target: o || 'mission-progress:mission-card', original: e }));
                },
                progressionCountProps: n,
                className: k(ai.base, t && ai.base__completed, i.className),
                classNames: { content: ai.cardContent, ...i.classNames },
            }),
        });
    }
    ((gc.Content = ci), (gc.Groups = _c), (gc.Separators = lc));
    const bc = {
        showCheckMark: { 'mission-progress:checkmark': 'umg_hub_quest_complete' },
        numbersShown: {
            'mission-progress:received-value': 'gui_pbs_missions_progress_stats',
            'mission-progress:progress-stats': 'gui_pbs_missions_progress_stats',
        },
    };
    function yc(e) {
        for (let t = 0; t < document.styleSheets.length; t++) {
            const n = document.styleSheets.item(t);
            if (n.ownerNode === e) return n;
        }
    }
    function vc(e) {
        for (let t = 0; t < e.cssRules.length; t++) e.deleteRule(t);
    }
    function wc(e) {
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
        const a = new ne();
        return (
            n
                ? a.add(
                      se(t, 'load', () => {
                          s.resolve(t);
                      }),
                  )
                : re(e)
                      .then((e) => e.text())
                      .then((e) => {
                          const n = yc(t);
                          if (!n) throw new Error(`Can't find sheets for ${t}`);
                          (vc(n),
                              (function (e, t) {
                                  const n = (function (e) {
                                      const t = [];
                                      let n = 0,
                                          s = 0,
                                          r = !1,
                                          a = !1;
                                      for (let o = 0; o < e.length; o++) {
                                          const i = e[o],
                                              c = e[o + 1];
                                          if (a || '/' !== i || '*' !== c) {
                                              if (r && '*' === i && '/' === c) ((r = !1), o++, (n = o + 1));
                                              else if (
                                                  !r &&
                                                  (a || '@' !== i || ((a = !0), (s = 0)),
                                                  '{' === i && s++,
                                                  '}' === i && s--,
                                                  '}' === i && 0 === s)
                                              ) {
                                                  if (a) (t.push(e.substring(n, o + 1)), (a = !1));
                                                  else {
                                                      let s = n;
                                                      for (; '\n' === e[s] || ' ' === e[s]; ) s++;
                                                      t.push(e.substring(s, o + 1));
                                                  }
                                                  n = o + 1;
                                              }
                                          } else ((r = !0), o++);
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
            a
                .add(
                    se(t, 'error', (t) => {
                        (console.error(t), s.reject(`Load css failure ${e}`));
                    }),
                )
                .add(() => {
                    !(function (e, t) {
                        const n = yc(t);
                        if (!n) return console.error(`Can't find sheets for ${t.id} (${e}). Clean rules skipped.`);
                        vc(n);
                    })(e, t);
                }),
            { promise: s, link: t, cleanup: a.dispose }
        );
    }
    function xc(t) {
        return e.jsx(e.Fragment, { children: t.children });
    }
    function Rc(t) {
        return e.jsx(xc, {
            children: e.jsx(Se, {
                overrides: t.soundsOverrides,
                severity: t.soundSeverity,
                silent: t.soundsOff,
                children: t.children,
            }),
        });
    }
    const Ec = f.resolve('aliases').read((e) => e.comp7.shared.BattleResultsWeeklyQuests('resId')),
        [Cc, Pc] = (
            (t = 'DataLayerProvider') =>
            (n, r, a) => {
                const o = s.createContext(null);
                function i(i) {
                    const { mode: c, options: l, children: u, mocks: d } = i,
                        p = s.useContext(Nr),
                        f = c ?? p.mode,
                        m = d ?? p.mocks,
                        h = s.useRef([]),
                        _ = a?.useRequires?.(),
                        g = Oe((e, s, o) => {
                            const c =
                                    'real' !== e && o
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
                                          })(o.getter, s)
                                        : X(s, { name: t }),
                                l = (t) => ('mocks' === e ? o?.getter(t, s) : c.readByPath(t)),
                                u = (e) => h.current.push(e),
                                d = 'initial' in i && { initial: a?.initial?.(i.initial) },
                                p = n({
                                    ...d,
                                    mode: e,
                                    readByPath: l,
                                    requires: _,
                                    externalModel: c,
                                    observableModel: jr(c, e, l),
                                    cleanup: u,
                                }),
                                f = { ...d, mode: e, model: p, externalModel: c, cleanup: u, requires: _ },
                                m = 'mocks' === e && o?.controls ? o.controls(f) : {};
                            return {
                                model: p,
                                controls: { ...r?.(f), ...m },
                                externalModel: c,
                                mode: e,
                                rootId: s?.rootId ?? 0,
                            };
                        }),
                        b = s.useRef(!1),
                        [y, v] = s.useState(f);
                    s.useEffect(() => {
                        v(f);
                    }, [f]);
                    const [w, x] = s.useState(() => g(y, l, m));
                    return (
                        s.useEffect(() => {
                            b.current ? x(g(y, l, m)) : (b.current = !0);
                        }, [g, m, y, l?.context, l?.initializer, l?.getRoot, l?.rootId]),
                        s.useEffect(
                            () => () => {
                                (w.externalModel.dispose(), h.current.forEach((e) => e()));
                            },
                            [w],
                        ),
                        e.jsx(o.Provider, { value: w, children: u })
                    );
                }
                return (
                    (i.displayName = t),
                    [
                        i,
                        function () {
                            const e = s.useContext(o);
                            if (!e) throw new Error(`hook useModel must be used within a ${i.displayName}.`);
                            return e;
                        },
                        { Context: o },
                    ]
                );
            }
        )()(({ observableModel: e }) => {
            const t = { quests: e.arrayClone('weeklyQuests') };
            return {
                quests: Or(() =>
                    le(t.quests.get(), (e) => ({
                        value: {
                            type: 'item',
                            index: 0,
                            condition: {
                                icon: {
                                    default: {
                                        path: `R.images.gui.maps.icons.userMissions.missionIcons.c_32.${e.iconKey}_silver`,
                                    },
                                    large: {
                                        path: `R.images.gui.maps.icons.userMissions.missionIcons.c_80.${e.iconKey}_silver`,
                                    },
                                },
                                description: e.description,
                                progression: { current: e.currentProgress, total: e.totalProgress, earned: e.earned },
                            },
                        },
                        bonuses: e.bonuses,
                        completed: e.isCompleted,
                        rewardsTooltipResId: Ec,
                        questId: e.id,
                    })).sort((e, t) => Number(t.completed) - Number(e.completed)),
                ),
            };
        }, K),
        Tc = 'WeeklyQuests_divider_dc4e9ffb',
        Ic = 'WeeklyQuests_headerBackground_44fd1e60',
        kc = 'WeeklyQuests_head_7bcc6cb7',
        Sc = { rootId: f.resolve('aliases').read((e) => e.comp7.shared.BattleResultsWeeklyQuests('resId')) },
        Ac = i.observer(function ({ animation: t, immediateAnimation: n }) {
            const { model: r } = Pc();
            return e.jsx(e.Fragment, {
                children: e.jsx(gc, {
                    title: R.strings.comp7_ext.pbs.missionsProgress.weekly.title(),
                    animation: t,
                    immediateAnimation: n,
                    classNames: { header: { background: Ic }, head: kc },
                    disabled: !0,
                    children: r
                        .quests()
                        .map((t, n, r) =>
                            e.jsxs(
                                s.Fragment,
                                {
                                    children: [
                                        e.jsx(gc.Groups, { ...t }),
                                        r.length - 1 !== n && e.jsx(Pe, { classNames: { base: Tc } }),
                                    ],
                                },
                                t.questId,
                            ),
                        ),
                }),
            });
        });
    function Nc(t) {
        return e.jsx(Cc, {
            options: Sc,
            children: e.jsx(Rc, {
                soundsOverrides:
                    ((n = bc),
                    Object.entries(n).reduce(
                        (e, [t, n]) => (
                            (e[t] = (e) => {
                                e && e.target in n ? $.sound(n[e.target]) : Te[t]?.(e);
                            }),
                            e
                        ),
                        {},
                    )),
                children: e.jsx(Ac, { ...t }),
            }),
        });
        var n;
    }
    var Mc;
    exports.plugin =
        ((Mc = async ({ url: t }) => {
            const n = new ne();
            return {
                async init() {
                    var s,
                        r,
                        a,
                        o,
                        i,
                        c,
                        l,
                        d = [];
                    try {
                        const s = wc(
                            `${(function (e, t = '/') {
                                let n = -1;
                                for (let s = 0; s < e.length; s++) {
                                    const r = e[s];
                                    if ((r === t && (n = s), '.' === r)) return e.slice(0, n);
                                }
                                return e;
                            })(t)}/weekly_quests.css`,
                        );
                        (n.add(s.cleanup), await s.promise.catch(console.error));
                        const r = X(Sc, { name: 'WeeklyQuestsProgressDataLayer' }),
                            a =
                                (u(d, ((l = r.dispose), { [Symbol.dispose]: l })),
                                ue(
                                    r.readByPath('weeklyQuests'),
                                    (e) => e.isCompleted && !e.id.includes('token_rewards'),
                                ));
                        let o = 0;
                        const i = ue(
                                r.readByPath('weeklyQuests'),
                                (e) => ((o = e.totalProgress), e.id.includes('token_rewards') && e.isCompleted),
                            ),
                            c = [];
                        (i &&
                            c.push({
                                id: ve(),
                                item: e.jsx(ja, {
                                    path: 'comp7_ext.pbs.missionsProgress.notificationTabs.tokenRewards',
                                    params: { count: o },
                                    upgradeLegacy: !0,
                                }),
                            }),
                            !i &&
                                a &&
                                c.push({
                                    id: ve(),
                                    item: e.jsx(ja, { path: 'comp7_ext.pbs.missionsProgress.notificationTabs.weekly' }),
                                }));
                        const p = c.length > 0;
                        return {
                            animated: !0,
                            component: Nc,
                            notifications: p ? c : void 0,
                            categoryOrder: 890,
                            completed: p,
                        };
                    } catch (m) {
                        var p = m,
                            f = !0;
                    } finally {
                        ((s = d),
                            (r = p),
                            (a = f),
                            (o =
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
                            (i = (e) =>
                                (r = a ? new o(e, r, 'An error was suppressed during disposal') : ((a = !0), e))),
                            (c = (e) => {
                                for (; (e = s.pop()); )
                                    try {
                                        var t = e[1] && e[1].call(e[2]);
                                        if (e[0]) return Promise.resolve(t).then(c, (e) => (i(e), c()));
                                    } catch (n) {
                                        i(n);
                                    }
                                if (a) throw r;
                            })());
                    }
                },
                async destroy() {
                    n.dispose();
                },
            };
        }),
        async (e) => ({ ...(await Mc(e)), id: e.id }));
});

export default exports;
