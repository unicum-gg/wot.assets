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
    const m = d(s),
        p = t.createContainer();
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
    class P {
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
    class T {
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
    function N() {
        for (var e, t, n = 0, s = '', r = arguments.length; n < r; n++)
            (e = arguments[n]) && (t = S(e)) && (s && (s += ' '), (s += t));
        return s;
    }
    p.register({
        strings: t.asFunction(() => new P()).singleton(),
        images: t.asFunction(() => new g(window.R.images.gui.maps.icons)).singleton(),
        atlases: t.asFunction(() => new g(window.R.atlases)).singleton(),
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
    const k = {
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
        reverseEaseInOutCirc: (e) => 1 - k.easeInOutCirc(1 - e),
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
                    const a = I(r, t, n);
                    if (Math.abs(a) < s) break;
                    r -= o / a;
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
    const F = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
        $ = { ...Object.keys(F).reduce((e, t) => ((e[t] = () => B(F[t])), e), {}), sound: B },
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
            a = { subscribersNotified: new W() },
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
                const a = (function (e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                })('string' == typeof r ? `${s}.${r}` : s, t, !0);
                return (o.set(a, n), e && n(c(r), []), a);
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
                i.then((e) => e());
            },
            unsubscribe: u,
            events: a,
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
                (u.call(d.prototype),
                    u.call(f.prototype),
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
                              var e = i(this);
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
    const re = fetch;
    function oe(e, t) {
        return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
    }
    const ae = {
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
    var ie;
    new Set(Object.values(ae));
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
    const de = (e) => {
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
    function pe(e, t, n) {
        return 'function' == typeof t ? fe(0, e, t) : (me(void 0 !== n, 'fn must be defined'), fe(e, t, n));
    }
    function fe(e, t, n) {
        const s = new Array(t - e);
        for (let r = e; r < t; r++) s[r] = n(r);
        return s;
    }
    me.log = function (e, t) {
        e || console.error(t || 'Assertion failed');
    };
    function he(e) {
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
    ['ko', 'no'].includes(p.resolve('langCode'));
    const ge = {
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
    function _e(e) {
        return e.split(' ');
    }
    const be = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko', 'th']);
    function ye() {
        return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    }
    var ve = ((e) => ((e.Done = 'done'), (e.InProgress = 'inProgress'), (e.Unavailable = 'unavailable'), e))(ve || {});
    function we(e) {
        for (let t = 0; t < document.styleSheets.length; t++) {
            const n = document.styleSheets.item(t);
            if (n.ownerNode === e) return n;
        }
    }
    function xe(e) {
        for (let t = 0; t < e.cssRules.length; t++) e.deleteRule(t);
    }
    function Ee(e) {
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
                          const n = we(t);
                          if (!n) throw new Error(`Can't find sheets for ${t}`);
                          (xe(n),
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
                    se(t, 'error', (t) => {
                        (console.error(t), s.reject(`Load css failure ${e}`));
                    }),
                )
                .add(() => {
                    !(function (e, t) {
                        const n = we(t);
                        if (!n) return console.error(`Can't find sheets for ${t.id} (${e}). Clean rules skipped.`);
                        xe(n);
                    })(e, t);
                }),
            { promise: s, link: t, cleanup: o.dispose }
        );
    }
    const Re = (e) => {
            const t = s.useRef(void 0);
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
    function Te(e) {
        s.useEffect(() => e, []);
    }
    s.createContext(void 0);
    var Se = Ve(),
        Ne = (e) => Le(e, Se),
        ke = Ve();
    Ne.write = (e) => Le(e, ke);
    var Ae = Ve();
    Ne.onStart = (e) => Le(e, Ae);
    var Ie = Ve();
    Ne.onFrame = (e) => Le(e, Ie);
    var Me = Ve();
    Ne.onFinish = (e) => Le(e, Me);
    var je = [];
    Ne.setTimeout = (e, t) => {
        const n = Ne.now() + t,
            s = () => {
                const e = je.findIndex((e) => e.cancel == s);
                (~e && je.splice(e, 1), (Fe -= ~e ? 1 : 0));
            },
            r = { time: n, handler: e, cancel: s };
        return (je.splice(De(n), 0, r), (Fe += 1), Ue(), r);
    };
    var De = (e) => ~(~je.findIndex((t) => t.time > e) || ~je.length);
    ((Ne.cancel = (e) => {
        (Ae.delete(e), Ie.delete(e), Me.delete(e), Se.delete(e), ke.delete(e));
    }),
        (Ne.sync = (e) => {
            (($e = !0), Ne.batchedUpdates(e), ($e = !1));
        }),
        (Ne.throttle = (e) => {
            let t;
            function n() {
                try {
                    e(...t);
                } finally {
                    t = null;
                }
            }
            function s(...e) {
                ((t = e), Ne.onStart(n));
            }
            return (
                (s.handler = e),
                (s.cancel = () => {
                    (Ae.delete(n), (t = null));
                }),
                s
            );
        }));
    var Oe = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
    ((Ne.use = (e) => (Oe = e)),
        (Ne.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
        (Ne.batchedUpdates = (e) => e()),
        (Ne.catch = console.error),
        (Ne.frameLoop = 'always'),
        (Ne.advance = () => {
            'demand' !== Ne.frameLoop
                ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
                : qe();
        }));
    var Be = -1,
        Fe = 0,
        $e = !1;
    function Le(e, t) {
        $e ? (t.delete(e), e(0)) : (t.add(e), Ue());
    }
    function Ue() {
        Be < 0 && ((Be = 0), 'demand' !== Ne.frameLoop && Oe(ze));
    }
    function ze() {
        ~Be && (Oe(ze), Ne.batchedUpdates(qe));
    }
    function qe() {
        const e = Be;
        Be = Ne.now();
        const t = De(Be);
        (t && (Ge(je.splice(0, t), (e) => e.handler()), (Fe -= t)),
            Fe
                ? (Ae.flush(), Se.flush(e ? Math.min(64, Be - e) : 16.667), Ie.flush(), ke.flush(), Me.flush())
                : (Be = -1));
    }
    function Ve() {
        let e = new Set(),
            t = e;
        return {
            add(n) {
                ((Fe += t != e || e.has(n) ? 0 : 1), e.add(n));
            },
            delete: (n) => ((Fe -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
            flush(n) {
                t.size && ((e = new Set()), (Fe -= t.size), Ge(t, (t) => t(n) && e.add(t)), (Fe += e.size), (t = e));
            },
        };
    }
    function Ge(e, t) {
        e.forEach((e) => {
            try {
                t(e);
            } catch (n) {
                Ne.catch(n);
            }
        });
    }
    var He = Object.defineProperty,
        Qe = {};
    function We() {}
    ((e, t) => {
        for (var n in t) He(e, n, { get: t[n], enumerable: !0 });
    })(Qe, {
        assign: () => lt,
        colors: () => ot,
        createStringInterpolator: () => tt,
        skipAnimation: () => at,
        to: () => nt,
        willAdvance: () => it,
    });
    var Ye = {
        arr: Array.isArray,
        obj: (e) => !!e && 'Object' === e.constructor.name,
        fun: (e) => 'function' == typeof e,
        str: (e) => 'string' == typeof e,
        num: (e) => 'number' == typeof e,
        und: (e) => void 0 === e,
    };
    function Xe(e, t) {
        if (Ye.arr(e)) {
            if (!Ye.arr(t) || e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
        }
        return e === t;
    }
    var Ze = (e, t) => e.forEach(t);
    function Ke(e, t, n) {
        if (Ye.arr(e)) for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s);
    }
    var Je = (e) => (Ye.und(e) ? [] : Ye.arr(e) ? e : [e]);
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
        at = !1,
        it = We,
        lt = (e) => {
            (e.to && (nt = e.to),
                e.now && (Ne.now = e.now),
                void 0 !== e.colors && (ot = e.colors),
                null != e.skipAnimation && (at = e.skipAnimation),
                e.createStringInterpolator && (tt = e.createStringInterpolator),
                e.requestAnimationFrame && Ne.use(e.requestAnimationFrame),
                e.batchedUpdates && (Ne.batchedUpdates = e.batchedUpdates),
                e.willAdvance && (it = e.willAdvance),
                e.frameLoop && (Ne.frameLoop = e.frameLoop));
        },
        ct = new Set(),
        ut = [],
        dt = [],
        mt = 0,
        pt = {
            get idle() {
                return !ct.size && !ut.length;
            },
            start(e) {
                mt > e.priority ? (ct.add(e), Ne.onStart(ft)) : (ht(e), Ne(_t));
            },
            advance: _t,
            sort(e) {
                if (mt) Ne.onFrame(() => pt.sort(e));
                else {
                    const t = ut.indexOf(e);
                    ~t && (ut.splice(t, 1), gt(e));
                }
            },
            clear() {
                ((ut = []), ct.clear());
            },
        };
    function ft() {
        (ct.forEach(ht), ct.clear(), Ne(_t));
    }
    function ht(e) {
        ut.includes(e) || gt(e);
    }
    function gt(e) {
        ut.splice(
            (function (e, t) {
                const n = e.findIndex(t);
                return n < 0 ? e.length : n;
            })(ut, (t) => t.priority > e.priority),
            0,
            e,
        );
    }
    function _t(e) {
        const t = dt;
        for (let n = 0; n < ut.length; n++) {
            const s = ut[n];
            ((mt = s.priority), s.idle || (it(s), s.advance(e), s.idle || t.push(s)));
        }
        return ((mt = 0), ((dt = ut).length = 0), (ut = t).length > 0);
    }
    var bt = '[-+]?\\d*\\.?\\d+',
        yt = bt + '%';
    function vt(...e) {
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var wt = new RegExp('rgb' + vt(bt, bt, bt)),
        xt = new RegExp('rgba' + vt(bt, bt, bt, bt)),
        Et = new RegExp('hsl' + vt(bt, yt, yt)),
        Rt = new RegExp('hsla' + vt(bt, yt, yt, bt)),
        Ct = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Pt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Tt = /^#([0-9a-fA-F]{6})$/,
        St = /^#([0-9a-fA-F]{8})$/;
    function Nt(e, t, n) {
        return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        );
    }
    function kt(e, t, n) {
        const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
            r = 2 * n - s,
            o = Nt(r, s, e + 1 / 3),
            a = Nt(r, s, e),
            i = Nt(r, s, e - 1 / 3);
        return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * i) << 8);
    }
    function At(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function It(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function Mt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function jt(e) {
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
                : (t = Tt.exec(e))
                  ? parseInt(t[1] + 'ff', 16) >>> 0
                  : ot && void 0 !== ot[e]
                    ? ot[e]
                    : (t = wt.exec(e))
                      ? ((At(t[1]) << 24) | (At(t[2]) << 16) | (At(t[3]) << 8) | 255) >>> 0
                      : (t = xt.exec(e))
                        ? ((At(t[1]) << 24) | (At(t[2]) << 16) | (At(t[3]) << 8) | Mt(t[4])) >>> 0
                        : (t = Ct.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                          : (t = St.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = Pt.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = Et.exec(e))
                                ? (255 | kt(It(t[1]), jt(t[2]), jt(t[3]))) >>> 0
                                : (t = Rt.exec(e))
                                  ? (kt(It(t[1]), jt(t[2]), jt(t[3])) | Mt(t[4])) >>> 0
                                  : null;
        })(e);
        if (null === t) return e;
        t = t || 0;
        return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
    }
    var Ot = (e, t, n) => {
        if (Ye.fun(e)) return e;
        if (Ye.arr(e)) return Ot({ range: e, output: t, extrapolate: n });
        if (Ye.str(e.output[0])) return tt(e);
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
                let c = l ? l(e) : e;
                if (c < t) {
                    if ('identity' === a) return c;
                    'clamp' === a && (c = t);
                }
                if (c > n) {
                    if ('identity' === i) return c;
                    'clamp' === i && (c = n);
                }
                if (s === r) return s;
                if (t === n) return e <= t ? s : r;
                t === -1 / 0 ? (c = -c) : n === 1 / 0 ? (c -= t) : (c = (c - t) / (n - t));
                ((c = o(c)), s === -1 / 0 ? (c = -c) : r === 1 / 0 ? (c += s) : (c = c * (r - s) + s));
                return c;
            })(e, o[t], o[t + 1], r[t], r[t + 1], l, a, i, s.map);
        };
    };
    var Bt = { linear: (e) => e, easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2) },
        Ft = Symbol.for('FluidValue.get'),
        $t = Symbol.for('FluidValue.observers'),
        Lt = (e) => Boolean(e && e[Ft]),
        Ut = (e) => (e && e[Ft] ? e[Ft]() : e),
        zt = (e) => e[$t] || null;
    function qt(e, t) {
        const n = e[$t];
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
        Gt = (e, t) => Yt(e, Ft, t);
    function Ht(e, t) {
        if (e[Ft]) {
            let n = e[$t];
            (n || Yt(e, $t, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
        }
        return t;
    }
    function Qt(e, t) {
        const n = e[$t];
        if (n && n.has(t)) {
            const s = n.size - 1;
            (s ? n.delete(t) : (e[$t] = null), e.observerRemoved && e.observerRemoved(s, t));
        }
    }
    var Wt,
        Yt = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
        Xt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Zt = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Kt = new RegExp(`(${Xt.source})(%|[a-z]+)`, 'i'),
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
                n = t.map((e) => e.match(Xt).map(Number)),
                s = n[0].map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                ),
                r = s.map((t) => Ot({ ...e, output: t }));
            return (e) => {
                const n = !Kt.test(t[0]) && t.find((e) => Kt.test(e))?.replace(Xt, '');
                let s = 0;
                return t[0].replace(Xt, () => `${r[s++](e)}${n || ''}`).replace(Jt, sn);
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
    var cn = an(console.warn);
    function un(e) {
        return Ye.str(e) && ('#' == e[0] || /\d/.test(e) || (!rt() && en.test(e)) || e in (ot || {}));
    }
    var dn = rt() ? s.useEffect : s.useLayoutEffect;
    function mn() {
        const e = s.useState()[1],
            t = (() => {
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
            })();
        return () => {
            t.current && e(Math.random());
        };
    }
    var pn = (e) => s.useEffect(e, fn),
        fn = [];
    function hn(e) {
        const t = s.useRef();
        return (
            s.useEffect(() => {
                t.current = e;
            }),
            t.current
        );
    }
    var gn = Symbol.for('Animated:node'),
        _n = (e) => e && e[gn],
        bn = (e, t) => {
            return (
                (n = e),
                (s = gn),
                (r = t),
                Object.defineProperty(n, s, { value: r, writable: !0, configurable: !0 })
            );
            var n, s, r;
        },
        yn = (e) => e && e[gn] && e[gn].getPayload(),
        vn = class {
            constructor() {
                bn(this, this);
            }
            getPayload() {
                return this.payload || [];
            }
        },
        wn = class extends vn {
            constructor(e) {
                (super(),
                    (this._value = e),
                    (this.done = !0),
                    (this.durationProgress = 0),
                    Ye.num(this._value) && (this.lastPosition = this._value));
            }
            static create(e) {
                return new wn(e);
            }
            getPayload() {
                return [this];
            }
            getValue() {
                return this._value;
            }
            setValue(e, t) {
                return (
                    Ye.num(e) &&
                        ((this.lastPosition = e),
                        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                    this._value !== e && ((this._value = e), !0)
                );
            }
            reset() {
                const { done: e } = this;
                ((this.done = !1),
                    Ye.num(this._value) &&
                        ((this.elapsedTime = 0),
                        (this.durationProgress = 0),
                        (this.lastPosition = this._value),
                        e && (this.lastVelocity = null),
                        (this.v0 = null)));
            }
        },
        xn = class extends wn {
            constructor(e) {
                (super(0), (this._string = null), (this._toString = Ot({ output: [e, e] })));
            }
            static create(e) {
                return new xn(e);
            }
            getValue() {
                const e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }
            setValue(e) {
                if (Ye.str(e)) {
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
        Rn = class extends vn {
            constructor(e) {
                (super(), (this.source = e), this.setValue(e));
            }
            getValue(e) {
                const t = {};
                return (
                    Ke(this.source, (n, s) => {
                        var r;
                        (r = n) && r[gn] === r ? (t[s] = n.getValue(e)) : Lt(n) ? (t[s] = Ut(n)) : e || (t[s] = n);
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
        Cn = class extends Rn {
            constructor(e) {
                super(e);
            }
            static create(e) {
                return new Cn(e);
            }
            getValue() {
                return this.source.map((e) => e.getValue());
            }
            setValue(e) {
                const t = this.getPayload();
                return e.length == t.length
                    ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                    : (super.setValue(e.map(Pn)), !0);
            }
        };
    function Pn(e) {
        return (un(e) ? xn : wn).create(e);
    }
    function Tn(e) {
        const t = _n(e);
        return t ? t.constructor : Ye.arr(e) ? Cn : un(e) ? xn : wn;
    }
    var Sn = (e, t) => {
            const n = !Ye.fun(e) || (e.prototype && e.prototype.isReactComponent);
            return s.forwardRef((r, o) => {
                const a = s.useRef(null),
                    i =
                        n &&
                        s.useCallback(
                            (e) => {
                                a.current = (function (e, t) {
                                    e && (Ye.fun(e) ? e(t) : (e.current = t));
                                    return t;
                                })(o, e);
                            },
                            [o],
                        ),
                    [l, c] = (function (e, t) {
                        const n = new Set();
                        ((En.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                        return ((e = new Rn(e)), (En.dependencies = null), [e, n]);
                    })(r, t),
                    u = mn(),
                    d = () => {
                        const e = a.current;
                        if (n && !e) return;
                        !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && u();
                    },
                    p = new Nn(d, c),
                    f = s.useRef();
                (dn(
                    () => (
                        (f.current = p),
                        Ze(c, (e) => Ht(e, p)),
                        () => {
                            f.current && (Ze(f.current.deps, (e) => Qt(e, f.current)), Ne.cancel(f.current.update));
                        }
                    ),
                ),
                    s.useEffect(d, []),
                    pn(() => () => {
                        const e = f.current;
                        Ze(e.deps, (t) => Qt(t, e));
                    }));
                const h = t.getComponentProps(l.getValue());
                return m.createElement(e, { ...h, ref: i });
            });
        },
        Nn = class {
            constructor(e, t) {
                ((this.update = e), (this.deps = t));
            }
            eventObserved(e) {
                'change' == e.type && Ne.write(this.update);
            }
        };
    var kn = Symbol.for('AnimatedComponent'),
        An = (e) => (Ye.str(e) ? e : e && Ye.str(e.displayName) ? e.displayName : (Ye.fun(e) && e.name) || null);
    function In(e, ...t) {
        return Ye.fun(e) ? e(...t) : e;
    }
    var Mn = (e, t) => !0 === e || !!(t && e && (Ye.fun(e) ? e(t) : Je(e).includes(t))),
        jn = (e, t) => (Ye.obj(e) ? t && e[t] : e),
        Dn = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
        On = (e) => e,
        Bn = (e, t = On) => {
            let n = Fn;
            e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
            const s = {};
            for (const r of n) {
                const n = t(e[r], r);
                Ye.und(n) || (s[r] = n);
            }
            return s;
        },
        Fn = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
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
    function Ln(e) {
        const t = (function (e) {
            const t = {};
            let n = 0;
            if (
                (Ke(e, (e, s) => {
                    $n[s] || ((t[s] = e), n++);
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
    function Un(e) {
        return (
            (e = Ut(e)),
            Ye.arr(e) ? e.map(Un) : un(e) ? Qe.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
        );
    }
    function zn(e) {
        for (const t in e) return !0;
        return !1;
    }
    function qn(e) {
        return Ye.fun(e) || (Ye.arr(e) && Ye.obj(e[0]));
    }
    function Vn(e, t) {
        (e.ref?.delete(e), t?.delete(e));
    }
    function Gn(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), (e.ref = t));
    }
    var Hn = { tension: 170, friction: 26, mass: 1, damping: 1, easing: Bt.linear, clamp: !1 },
        Qn = class {
            constructor() {
                ((this.velocity = 0), Object.assign(this, Hn));
            }
        };
    function Wn(e, t) {
        if (Ye.und(t.decay)) {
            const n = !Ye.und(t.tension) || !Ye.und(t.friction);
            ((!n && Ye.und(t.frequency) && Ye.und(t.damping) && Ye.und(t.mass)) ||
                ((e.duration = void 0), (e.decay = void 0)),
                n && (e.frequency = void 0));
        } else e.duration = void 0;
    }
    var Yn = [],
        Xn = class {
            constructor() {
                ((this.changed = !1),
                    (this.values = Yn),
                    (this.toValues = null),
                    (this.fromValues = Yn),
                    (this.config = new Qn()),
                    (this.immediate = !1));
            }
        };
    function Zn(e, { key: t, props: n, defaultProps: s, state: r, actions: o }) {
        return new Promise((a, i) => {
            let l,
                c,
                u = Mn(n.cancel ?? s?.cancel, t);
            if (u) p();
            else {
                Ye.und(n.pause) || (r.paused = Mn(n.pause, t));
                let e = s?.pause;
                (!0 !== e && (e = r.paused || Mn(e, t)),
                    (l = In(n.delay || 0, t)),
                    e ? (r.resumeQueue.add(m), o.pause()) : (o.resume(), m()));
            }
            function d() {
                (r.resumeQueue.add(m), r.timeouts.delete(c), c.cancel(), (l = c.time - Ne.now()));
            }
            function m() {
                l > 0 && !Qe.skipAnimation
                    ? ((r.delayed = !0), (c = Ne.setTimeout(p, l)), r.pauseQueue.add(d), r.timeouts.add(c))
                    : p();
            }
            function p() {
                (r.delayed && (r.delayed = !1),
                    r.pauseQueue.delete(d),
                    r.timeouts.delete(c),
                    e <= (r.cancelId || 0) && (u = !0));
                try {
                    o.start({ ...n, callId: e, cancel: u }, a);
                } catch (t) {
                    i(t);
                }
            }
        });
    }
    var Kn = (e, t) =>
            1 == t.length
                ? t[0]
                : t.some((e) => e.cancelled)
                  ? ts(e.get())
                  : t.every((e) => e.noop)
                    ? Jn(e.get())
                    : es(
                          e.get(),
                          t.every((e) => e.finished),
                      ),
        Jn = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        es = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
        ts = (e) => ({ value: e, cancelled: !0, finished: !1 });
    function ns(e, t, n, s) {
        const { callId: r, parentId: o, onRest: a } = t,
            { asyncTo: i, promise: l } = n;
        return o || e !== i || t.reset
            ? (n.promise = (async () => {
                  ((n.asyncId = r), (n.asyncTo = e));
                  const c = Bn(t, (e, t) => ('onRest' === t ? void 0 : e));
                  let u, d;
                  const m = new Promise((e, t) => ((u = e), (d = t))),
                      p = (e) => {
                          const t = (r <= (n.cancelId || 0) && ts(s)) || (r !== n.asyncId && es(s, !1));
                          if (t) throw ((e.result = t), d(e), e);
                      },
                      f = (e, t) => {
                          const o = new rs(),
                              a = new os();
                          return (async () => {
                              if (Qe.skipAnimation) throw (ss(n), (a.result = es(s, !1)), d(a), a);
                              p(o);
                              const i = Ye.obj(e) ? { ...e } : { ...t, to: e };
                              ((i.parentId = r),
                                  Ke(c, (e, t) => {
                                      Ye.und(i[t]) && (i[t] = e);
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
                  if (Qe.skipAnimation) return (ss(n), es(s, !1));
                  try {
                      let t;
                      ((t = Ye.arr(e)
                          ? (async (e) => {
                                for (const t of e) await f(t);
                            })(e)
                          : Promise.resolve(e(f, s.stop.bind(s)))),
                          await Promise.all([t.then(u), m]),
                          (h = es(s.get(), !0, !1)));
                  } catch (g) {
                      if (g instanceof rs) h = g.result;
                      else {
                          if (!(g instanceof os)) throw g;
                          h = g.result;
                      }
                  } finally {
                      r == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? i : void 0), (n.promise = o ? l : void 0));
                  }
                  return (
                      Ye.fun(a) &&
                          Ne.batchedUpdates(() => {
                              a(h, s, s.item);
                          }),
                      h
                  );
              })())
            : l;
    }
    function ss(e, t) {
        (et(e.timeouts, (e) => e.cancel()),
            e.pauseQueue.clear(),
            e.resumeQueue.clear(),
            (e.asyncId = e.asyncTo = e.promise = void 0),
            t && (e.cancelId = t));
    }
    var rs = class extends Error {
            constructor() {
                super(
                    'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
                );
            }
        },
        os = class extends Error {
            constructor() {
                super('SkipAnimationSignal');
            }
        },
        as = (e) => e instanceof ls,
        is = 1,
        ls = class extends Vt {
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
                const e = _n(this);
                return e && e.getValue();
            }
            to(...e) {
                return Qe.to(this, e);
            }
            interpolate(...e) {
                return (ln(`${on}The "interpolate" function is deprecated in v9 (use "to" instead)`), Qe.to(this, e));
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
                qt(this, { type: 'change', parent: this, value: e, idle: t });
            }
            _onPriorityChange(e) {
                (this.idle || pt.sort(this), qt(this, { type: 'priority', parent: this, priority: e }));
            }
        },
        cs = Symbol.for('SpringPhase'),
        us = (e) => (1 & e[cs]) > 0,
        ds = (e) => (2 & e[cs]) > 0,
        ms = (e) => (4 & e[cs]) > 0,
        ps = (e, t) => (t ? (e[cs] |= 3) : (e[cs] &= -3)),
        fs = (e, t) => (t ? (e[cs] |= 4) : (e[cs] &= -5)),
        hs = class extends ls {
            constructor(e, t) {
                if (
                    (super(),
                    (this.animation = new Xn()),
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
                    !Ye.und(e) || !Ye.und(t))
                ) {
                    const n = Ye.obj(e) ? { ...e } : { ...t, from: e };
                    (Ye.und(n.default) && (n.default = !0), this.start(n));
                }
            }
            get idle() {
                return !(ds(this) || this._state.asyncTo) || ms(this);
            }
            get goal() {
                return Ut(this.animation.to);
            }
            get velocity() {
                const e = _n(this);
                return e instanceof wn ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
            }
            get hasAnimated() {
                return us(this);
            }
            get isAnimating() {
                return ds(this);
            }
            get isPaused() {
                return ms(this);
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
                    a = yn(s.to);
                (!a && Lt(s.to) && (r = Je(Ut(s.to))),
                    s.values.forEach((i, l) => {
                        if (i.done) return;
                        const c = i.constructor == xn ? 1 : a ? a[l].lastPosition : r[l];
                        let u = s.immediate,
                            d = c;
                        if (!u) {
                            if (((d = i.lastPosition), o.tension <= 0)) return void (i.done = !0);
                            let t = (i.elapsedTime += e);
                            const n = s.fromValues[l],
                                r = null != i.v0 ? i.v0 : (i.v0 = Ye.arr(o.velocity) ? o.velocity[l] : o.velocity);
                            let a;
                            const m = o.precision || (n == c ? 0.005 : Math.min(1, 0.001 * Math.abs(c - n)));
                            if (Ye.und(o.duration))
                                if (o.decay) {
                                    const e = !0 === o.decay ? 0.998 : o.decay,
                                        s = Math.exp(-(1 - e) * t);
                                    ((d = n + (r / (1 - e)) * (1 - s)),
                                        (u = Math.abs(i.lastPosition - d) <= m),
                                        (a = r * s));
                                } else {
                                    a = null == i.lastVelocity ? r : i.lastVelocity;
                                    const t = o.restVelocity || m / 10,
                                        s = o.clamp ? 0 : o.bounce,
                                        l = !Ye.und(s),
                                        p = n == c ? i.v0 > 0 : n < c;
                                    let f,
                                        h = !1;
                                    const g = 1,
                                        _ = Math.ceil(e / g);
                                    for (
                                        let e = 0;
                                        e < _ && ((f = Math.abs(a) > t), f || ((u = Math.abs(c - d) <= m), !u));
                                        ++e
                                    ) {
                                        l && ((h = d == c || d > c == p), h && ((a = -a * s), (d = c)));
                                        ((a += ((1e-6 * -o.tension * (d - c) + 0.001 * -o.friction * a) / o.mass) * g),
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
                                    (d = n + o.easing(s) * (c - n)),
                                    (a = (d - i.lastPosition) / e),
                                    (u = 1 == s));
                            }
                            ((i.lastVelocity = a),
                                Number.isNaN(d) && (console.warn('Got NaN while animating:', this), (u = !0)));
                        }
                        (a && !a[l].done && (u = !1), u ? (i.done = !0) : (t = !1), i.setValue(d, o.round) && (n = !0));
                    }));
                const i = _n(this),
                    l = i.getValue();
                if (t) {
                    const e = Ut(s.to);
                    ((l === e && !n) || o.decay
                        ? n && o.decay && this._onChange(l)
                        : (i.setValue(e), this._onChange(e)),
                        this._stop());
                } else n && this._onChange(l);
            }
            set(e) {
                return (
                    Ne.batchedUpdates(() => {
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
                if (ds(this)) {
                    const { to: e, config: t } = this.animation;
                    Ne.batchedUpdates(() => {
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
                    Ye.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Ye.obj(e) ? e : { ...t, to: e }]),
                    Promise.all(n.map((e) => this._update(e))).then((e) => Kn(this, e))
                );
            }
            stop(e) {
                const { to: t } = this.animation;
                return (
                    this._focus(this.get()),
                    ss(this._state, e && this._lastCallId),
                    Ne.batchedUpdates(() => this._stop(t, e)),
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
                ((n = Ye.obj(n) ? n[t] : n),
                    (null == n || qn(n)) && (n = void 0),
                    (s = Ye.obj(s) ? s[t] : s),
                    null == s && (s = void 0));
                const r = { to: n, from: s };
                return (
                    us(this) ||
                        (e.reverse && ([n, s] = [s, n]),
                        (s = Ut(s)),
                        Ye.und(s) ? _n(this) || this._set(n) : this._set(s)),
                    r
                );
            }
            _update({ ...e }, t) {
                const { key: n, defaultProps: s } = this;
                (e.default &&
                    Object.assign(
                        s,
                        Bn(e, (e, t) => (/^on/.test(t) ? jn(e, n) : e)),
                    ),
                    xs(this, e, 'onProps'),
                    Es(this, 'onProps', e, this));
                const r = this._prepareNode(e);
                if (Object.isFrozen(this))
                    throw Error(
                        'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                    );
                const o = this._state;
                return Zn(++this._lastCallId, {
                    key: n,
                    props: e,
                    defaultProps: s,
                    state: o,
                    actions: {
                        pause: () => {
                            ms(this) ||
                                (fs(this, !0),
                                st(o.pauseQueue),
                                Es(this, 'onPause', es(this, gs(this, this.animation.to)), this));
                        },
                        resume: () => {
                            ms(this) &&
                                (fs(this, !1),
                                ds(this) && this._resume(),
                                st(o.resumeQueue),
                                Es(this, 'onResume', es(this, gs(this, this.animation.to)), this));
                        },
                        start: this._merge.bind(this, r),
                    },
                }).then((n) => {
                    if (e.loop && n.finished && (!t || !n.noop)) {
                        const t = _s(e);
                        if (t) return this._update(t, !0);
                    }
                    return n;
                });
            }
            _merge(e, t, n) {
                if (t.cancel) return (this.stop(!0), n(ts(this)));
                const s = !Ye.und(e.to),
                    r = !Ye.und(e.from);
                if (s || r) {
                    if (!(t.callId > this._lastToId)) return n(ts(this));
                    this._lastToId = t.callId;
                }
                const { key: o, defaultProps: a, animation: i } = this,
                    { to: l, from: c } = i;
                let { to: u = l, from: d = c } = e;
                (!r || s || (t.default && !Ye.und(u)) || (u = d), t.reverse && ([u, d] = [d, u]));
                const m = !Xe(d, c);
                (m && (i.from = d), (d = Ut(d)));
                const p = !Xe(u, l);
                p && this._focus(u);
                const f = qn(t.to),
                    { config: h } = i,
                    { decay: g, velocity: _ } = h;
                ((s || r) && (h.velocity = 0),
                    t.config &&
                        !f &&
                        (function (e, t, n) {
                            (n && (Wn((n = { ...n }), t), (t = { ...n, ...t })), Wn(e, t), Object.assign(e, t));
                            for (const a in Hn) null == e[a] && (e[a] = Hn[a]);
                            let { frequency: s, damping: r } = e;
                            const { mass: o } = e;
                            Ye.und(s) ||
                                (s < 0.01 && (s = 0.01),
                                r < 0 && (r = 0),
                                (e.tension = Math.pow((2 * Math.PI) / s, 2) * o),
                                (e.friction = (4 * Math.PI * r * o) / s));
                        })(h, In(t.config, o), t.config !== a.config ? In(a.config, o) : void 0));
                let b = _n(this);
                if (!b || Ye.und(u)) return n(es(this, !0));
                const y = Ye.und(t.reset) ? r && !t.default : !Ye.und(d) && Mn(t.reset, o),
                    v = y ? d : this.get(),
                    w = Un(u),
                    x = Ye.num(w) || Ye.arr(w) || un(w),
                    E = !f && (!x || Mn(a.immediate || t.immediate, o));
                if (p) {
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
                let C = Lt(u),
                    P = !1;
                if (!C) {
                    const e = y || (!us(this) && m);
                    ((p || e) && ((P = Xe(Un(v), w)), (C = !P)),
                        ((Xe(i.immediate, E) || E) && Xe(h.decay, g) && Xe(h.velocity, _)) || (C = !0));
                }
                if (
                    (P && ds(this) && (i.changed && !y ? (C = !0) : C || this._stop(l)),
                    !f &&
                        ((C || Lt(l)) &&
                            ((i.values = b.getPayload()), (i.toValues = Lt(u) ? null : R == xn ? [1] : Je(w))),
                        i.immediate != E && ((i.immediate = E), E || y || this._set(l)),
                        C))
                ) {
                    const { onRest: e } = i;
                    Ze(ws, (e) => xs(this, t, e));
                    const s = es(this, gs(this, l));
                    (st(this._pendingCalls, s),
                        this._pendingCalls.add(n),
                        i.changed &&
                            Ne.batchedUpdates(() => {
                                ((i.changed = !y), e?.(s, this), y ? In(a.onRest, s) : i.onStart?.(s, this));
                            }));
                }
                (y && this._set(v),
                    f
                        ? n(ns(t.to, t, this._state, this))
                        : C
                          ? this._start()
                          : ds(this) && !p
                            ? this._pendingCalls.add(n)
                            : n(Jn(v)));
            }
            _focus(e) {
                const t = this.animation;
                e !== t.to && (zt(this) && this._detach(), (t.to = e), zt(this) && this._attach());
            }
            _attach() {
                let e = 0;
                const { to: t } = this.animation;
                (Lt(t) && (Ht(t, this), as(t) && (e = t.priority + 1)), (this.priority = e));
            }
            _detach() {
                const { to: e } = this.animation;
                Lt(e) && Qt(e, this);
            }
            _set(e, t = !0) {
                const n = Ut(e);
                if (!Ye.und(n)) {
                    const e = _n(this);
                    if (!e || !Xe(n, e.getValue())) {
                        const s = Tn(n);
                        (e && e.constructor == s ? e.setValue(n) : bn(this, s.create(n)),
                            e &&
                                Ne.batchedUpdates(() => {
                                    this._onChange(n, t);
                                }));
                    }
                }
                return _n(this);
            }
            _onStart() {
                const e = this.animation;
                e.changed || ((e.changed = !0), Es(this, 'onStart', es(this, gs(this, e.to)), this));
            }
            _onChange(e, t) {
                (t || (this._onStart(), In(this.animation.onChange, e, this)),
                    In(this.defaultProps.onChange, e, this),
                    super._onChange(e, t));
            }
            _start() {
                const e = this.animation;
                (_n(this).reset(Ut(e.to)),
                    e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                    ds(this) || (ps(this, !0), ms(this) || this._resume()));
            }
            _resume() {
                Qe.skipAnimation ? this.finish() : pt.start(this);
            }
            _stop(e, t) {
                if (ds(this)) {
                    ps(this, !1);
                    const n = this.animation;
                    (Ze(n.values, (e) => {
                        e.done = !0;
                    }),
                        n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                        qt(this, { type: 'idle', parent: this }));
                    const s = t ? ts(this.get()) : es(this.get(), gs(this, e ?? n.to));
                    (st(this._pendingCalls, s), n.changed && ((n.changed = !1), Es(this, 'onRest', s, this)));
                }
            }
        };
    function gs(e, t) {
        const n = Un(t);
        return Xe(Un(e.get()), n);
    }
    function _s(e, t = e.loop, n = e.to) {
        const s = In(t);
        if (s) {
            const r = !0 !== s && Ln(s),
                o = (r || e).reverse,
                a = !r || r.reset;
            return bs({
                ...e,
                loop: t,
                default: !1,
                pause: void 0,
                to: !o || qn(n) ? n : void 0,
                from: a ? e.from : void 0,
                reset: a,
                ...r,
            });
        }
    }
    function bs(e) {
        const { to: t, from: n } = (e = Ln(e)),
            s = new Set();
        return (Ye.obj(t) && vs(t, s), Ye.obj(n) && vs(n, s), (e.keys = s.size ? Array.from(s) : null), e);
    }
    function ys(e) {
        const t = bs(e);
        return (Ye.und(t.default) && (t.default = Bn(t)), t);
    }
    function vs(e, t) {
        Ke(e, (e, n) => null != e && t.add(n));
    }
    var ws = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
    function xs(e, t, n) {
        e.animation[n] = t[n] !== Dn(t, n) ? jn(t[n], e.key) : void 0;
    }
    function Es(e, t, ...n) {
        (e.animation[t]?.(...n), e.defaultProps[t]?.(...n));
    }
    var Rs = ['onStart', 'onChange', 'onRest'],
        Cs = 1,
        Ps = class {
            constructor(e, t) {
                ((this.id = Cs++),
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
                    Ye.und(n) || this.springs[t].set(n);
                }
            }
            update(e) {
                return (e && this.queue.push(bs(e)), this);
            }
            start(e) {
                let { queue: t } = this;
                return (
                    e ? (t = Je(e).map(bs)) : (this.queue = []),
                    this._flush ? this._flush(this, t) : (Ms(this, t), Ts(this, t))
                );
            }
            stop(e, t) {
                if ((e !== !!e && (t = e), t)) {
                    const n = this.springs;
                    Ze(Je(t), (t) => n[t].stop(!!e));
                } else (ss(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
                return this;
            }
            pause(e) {
                if (Ye.und(e)) this.start({ pause: !0 });
                else {
                    const t = this.springs;
                    Ze(Je(e), (e) => t[e].pause());
                }
                return this;
            }
            resume(e) {
                if (Ye.und(e)) this.start({ pause: !1 });
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
                    a = r || (o && n.size) ? this.get() : null;
                (r &&
                    t.size &&
                    et(t, ([e, t]) => {
                        ((t.value = a), e(t, this, this._item));
                    }),
                    o &&
                        ((this._started = !1),
                        et(n, ([e, t]) => {
                            ((t.value = a), e(t, this, this._item));
                        })));
            }
            eventObserved(e) {
                if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
                else {
                    if ('idle' != e.type) return;
                    this._active.delete(e.parent);
                }
                Ne.onFrame(this._onFrame);
            }
        };
    function Ts(e, t) {
        return Promise.all(t.map((t) => Ss(e, t))).then((t) => Kn(e, t));
    }
    async function Ss(e, t, n) {
        const { keys: s, to: r, from: o, loop: a, onRest: i, onResolve: l } = t,
            c = Ye.obj(t.default) && t.default;
        (a && (t.loop = !1), !1 === r && (t.to = null), !1 === o && (t.from = null));
        const u = Ye.arr(r) || Ye.fun(r) ? r : void 0;
        u
            ? ((t.to = void 0), (t.onRest = void 0), c && (c.onRest = void 0))
            : Ze(Rs, (n) => {
                  const s = t[n];
                  if (Ye.fun(s)) {
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
            ? ((d.paused = t.pause), st(t.pause ? d.pauseQueue : d.resumeQueue))
            : d.paused && (t.pause = !0);
        const m = (s || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
            p = !0 === t.cancel || !0 === Dn(t, 'cancel');
        ((u || (p && d.asyncId)) &&
            m.push(
                Zn(++e._lastAsyncId, {
                    props: t,
                    state: d,
                    actions: {
                        pause: We,
                        resume: We,
                        start(t, n) {
                            p ? (ss(d, e._lastAsyncId), n(ts(e))) : ((t.onRest = i), n(ns(u, t, d, e)));
                        },
                    },
                }),
            ),
            d.paused &&
                (await new Promise((e) => {
                    d.resumeQueue.add(e);
                })));
        const f = Kn(e, await Promise.all(m));
        if (a && f.finished && (!n || !f.noop)) {
            const n = _s(t, a, r);
            if (n) return (Ms(e, [n]), Ss(e, n, !0));
        }
        return (l && Ne.batchedUpdates(() => l(f, e, e.item)), f);
    }
    function Ns(e, t) {
        const n = { ...e.springs };
        return (
            t &&
                Ze(Je(t), (e) => {
                    (Ye.und(e.keys) && (e = bs(e)), Ye.obj(e.to) || (e = { ...e, to: void 0 }), Is(n, e, (e) => As(e)));
                }),
            ks(e, n),
            n
        );
    }
    function ks(e, t) {
        Ke(t, (t, n) => {
            e.springs[n] || ((e.springs[n] = t), Ht(t, e));
        });
    }
    function As(e, t) {
        const n = new hs();
        return ((n.key = e), t && Ht(n, t), n);
    }
    function Is(e, t, n) {
        t.keys &&
            Ze(t.keys, (s) => {
                (e[s] || (e[s] = n(s)))._prepareNode(t);
            });
    }
    function Ms(e, t) {
        Ze(t, (t) => {
            Is(e.springs, t, (t) => As(t, e));
        });
    }
    var js,
        Ds,
        Os = ({ children: e, ...t }) => {
            const n = s.useContext(Bs),
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
            const { Provider: a } = Bs;
            return m.createElement(a, { value: t }, e);
        },
        Bs =
            ((js = Os),
            (Ds = {}),
            Object.assign(js, m.createContext(Ds)),
            (js.Provider._context = js),
            (js.Consumer._context = js),
            js);
    ((Os.Provider = Bs.Provider), (Os.Consumer = Bs.Consumer));
    var Fs = () => {
        const e = [],
            t = function (t) {
                cn(
                    `${on}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
                const s = [];
                return (
                    Ze(e, (e, r) => {
                        if (Ye.und(t)) s.push(e.start());
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
                    const s = Ye.fun(t) ? t(n, e) : t;
                    s && e.set(s);
                });
            }),
            (t.start = function (t) {
                const n = [];
                return (
                    Ze(e, (e, s) => {
                        if (Ye.und(t)) n.push(e.start());
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
            return Ye.fun(e) ? e(n, t) : e;
        };
        return ((t._getProps = n), t);
    };
    function $s(e, t) {
        const n = Ye.fun(e),
            [[r], o] = (function (e, t, n) {
                const r = Ye.fun(t) && t;
                r && !n && (n = []);
                const o = s.useMemo(() => (r || 3 == arguments.length ? Fs() : void 0), []),
                    a = s.useRef(0),
                    i = mn(),
                    l = s.useMemo(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(e, t) {
                                const n = Ns(e, t);
                                return a.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                    ? Ts(e, t)
                                    : new Promise((s) => {
                                          (ks(e, n),
                                              l.queue.push(() => {
                                                  s(Ts(e, t));
                                              }),
                                              i());
                                      });
                            },
                        }),
                        [],
                    ),
                    c = s.useRef([...l.ctrls]),
                    u = [],
                    d = hn(e) || 0;
                function m(e, n) {
                    for (let s = e; s < n; s++) {
                        const e = c.current[s] || (c.current[s] = new Ps(null, l.flush)),
                            n = r ? r(s, e) : t[s];
                        n && (u[s] = ys(n));
                    }
                }
                (s.useMemo(() => {
                    (Ze(c.current.slice(e, d), (e) => {
                        (Vn(e, o), e.stop(!0));
                    }),
                        (c.current.length = e),
                        m(d, e));
                }, [e]),
                    s.useMemo(() => {
                        m(0, Math.min(d, e));
                    }, n));
                const p = c.current.map((e, t) => Ns(e, u[t])),
                    f = s.useContext(Os),
                    h = hn(f),
                    g = f !== h && zn(f);
                (dn(() => {
                    (a.current++, (l.ctrls = c.current));
                    const { queue: e } = l;
                    (e.length && ((l.queue = []), Ze(e, (e) => e())),
                        Ze(c.current, (e, t) => {
                            (o?.add(e), g && e.start({ default: f }));
                            const n = u[t];
                            n && (Gn(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                        }));
                }),
                    pn(() => () => {
                        Ze(l.ctrls, (e) => e.stop(!0));
                    }));
                const _ = p.map((e) => ({ ...e }));
                return o ? [_, o] : _;
            })(1, n ? e : [e], n ? [] : t);
        return n || 2 == arguments.length ? [r, o] : r;
    }
    var Ls = () => Fs(),
        Us = () => s.useState(Ls)[0];
    function zs(e, t, n) {
        const r = Ye.fun(t) && t,
            {
                reset: o,
                sort: a,
                trail: i = 0,
                expires: l = !0,
                exitBeforeEnter: c = !1,
                onDestroyed: u,
                ref: d,
                config: p,
            } = r ? r() : t,
            f = s.useMemo(() => (r || 3 == arguments.length ? Fs() : void 0), []),
            h = Je(e),
            g = [],
            _ = s.useRef(null),
            b = o ? null : _.current;
        (dn(() => {
            _.current = g;
        }),
            pn(
                () => (
                    Ze(g, (e) => {
                        (f?.add(e.ctrl), (e.ctrl.ref = f));
                    }),
                    () => {
                        Ze(_.current, (e) => {
                            (e.expired && clearTimeout(e.expirationId), Vn(e.ctrl, f), e.ctrl.stop(!0));
                        });
                    }
                ),
            ));
        const y = (function (e, { key: t, keys: n = t }, s) {
                if (null === n) {
                    const t = new Set();
                    return e.map((e) => {
                        const n = s && s.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                        return n ? (t.add(n), n.key) : qs++;
                    });
                }
                return Ye.und(n) ? e : Ye.fun(n) ? e.map(n) : Je(n);
            })(h, r ? r() : t, b),
            v = (o && _.current) || [];
        dn(() =>
            Ze(v, ({ ctrl: e, item: t, key: n }) => {
                (Vn(e, f), In(u, t, n));
            }),
        );
        const w = [];
        if (
            (b &&
                Ze(b, (e, t) => {
                    e.expired
                        ? (clearTimeout(e.expirationId), v.push(e))
                        : ~(t = w[t] = y.indexOf(e.key)) && (g[t] = e);
                }),
            Ze(h, (e, t) => {
                g[t] || ((g[t] = { key: y[t], item: e, phase: 'mount', ctrl: new Ps() }), (g[t].ctrl.item = e));
            }),
            w.length)
        ) {
            let e = -1;
            const { leave: n } = r ? r() : t;
            Ze(w, (t, s) => {
                const r = b[s];
                ~t ? ((e = g.indexOf(r)), (g[e] = { ...r, item: h[t] })) : n && g.splice(++e, 0, r);
            });
        }
        Ye.fun(a) && g.sort((e, t) => a(e.item, t.item));
        let x = -i;
        const E = mn(),
            R = Bn(t),
            C = new Map(),
            P = s.useRef(new Map()),
            T = s.useRef(!1);
        Ze(g, (e, n) => {
            const s = e.key,
                o = e.phase,
                a = r ? r() : t;
            let u, m;
            const f = In(a.delay || 0, s);
            if ('mount' == o) ((u = a.enter), (m = 'enter'));
            else {
                const e = y.indexOf(s) < 0;
                if ('leave' != o)
                    if (e) ((u = a.leave), (m = 'leave'));
                    else {
                        if (!(u = a.update)) return;
                        m = 'update';
                    }
                else {
                    if (e) return;
                    ((u = a.enter), (m = 'enter'));
                }
            }
            if (((u = In(u, e.item, n)), (u = Ye.obj(u) ? Ln(u) : { to: u }), !u.config)) {
                const t = p || R.config;
                u.config = In(t, e.item, n, m);
            }
            x += i;
            const h = { ...R, delay: f + x, ref: d, immediate: a.immediate, reset: !1, ...u };
            if ('enter' == m && Ye.und(h.from)) {
                const s = r ? r() : t,
                    o = Ye.und(s.initial) || b ? s.from : s.initial;
                h.from = In(o, e.item, n);
            }
            const { onResolve: g } = h;
            h.onResolve = (e) => {
                In(g, e);
                const t = _.current,
                    n = t.find((e) => e.key === s);
                if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                    const e = t.every((e) => e.ctrl.idle);
                    if ('leave' == n.phase) {
                        const t = In(l, n.item);
                        if (!1 !== t) {
                            const s = !0 === t ? 0 : t;
                            if (((n.expired = !0), !e && s > 0))
                                return void (s <= 2147483647 && (n.expirationId = setTimeout(E, s)));
                        }
                    }
                    e && t.some((e) => e.expired) && (P.current.delete(n), c && (T.current = !0), E());
                }
            };
            const v = Ns(e.ctrl, h);
            'leave' === m && c
                ? P.current.set(e, { phase: m, springs: v, payload: h })
                : C.set(e, { phase: m, springs: v, payload: h });
        });
        const S = s.useContext(Os),
            N = hn(S),
            k = S !== N && zn(S);
        (dn(() => {
            k &&
                Ze(g, (e) => {
                    e.ctrl.start({ default: S });
                });
        }, [S]),
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
                            f?.add(s),
                            k && 'enter' == e && s.start({ default: S }),
                            t &&
                                (Gn(s, t.ref),
                                (!s.ref && !f) || T.current
                                    ? (s.start(t), T.current && (T.current = !1))
                                    : s.update(t)));
                    });
                },
                o ? void 0 : n,
            ));
        const A = (e) =>
            m.createElement(
                m.Fragment,
                null,
                g.map((t, n) => {
                    const { springs: s } = C.get(t) || t.ctrl,
                        r = e({ ...s }, t.item, t, n);
                    return r && r.type
                        ? m.createElement(r.type, {
                              ...r.props,
                              key: Ye.str(t.key) || Ye.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref,
                          })
                        : r;
                }),
            );
        return f ? [A, f] : A;
    }
    var qs = 1;
    var Vs = class extends ls {
        constructor(e, t) {
            (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Ot(...t)));
            const n = this._get(),
                s = Tn(n);
            bn(this, s.create(n));
        }
        advance(e) {
            const t = this._get();
            (Xe(t, this.get()) || (_n(this).setValue(t), this._onChange(t, this.idle)),
                !this.idle && Hs(this._active) && Qs(this));
        }
        _get() {
            const e = Ye.arr(this.source) ? this.source.map(Ut) : Je(Ut(this.source));
            return this.calc(...e);
        }
        _start() {
            this.idle &&
                !Hs(this._active) &&
                ((this.idle = !1),
                Ze(yn(this), (e) => {
                    e.done = !1;
                }),
                Qe.skipAnimation ? (Ne.batchedUpdates(() => this.advance()), Qs(this)) : pt.start(this));
        }
        _attach() {
            let e = 1;
            (Ze(Je(this.source), (t) => {
                (Lt(t) && Ht(t, this), as(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
            }),
                (this.priority = e),
                this._start());
        }
        _detach() {
            (Ze(Je(this.source), (e) => {
                Lt(e) && Qt(e, this);
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
                    (this.priority = Je(this.source).reduce((e, t) => Math.max(e, (as(t) ? t.priority : 0) + 1), 0));
        }
    };
    function Gs(e) {
        return !1 !== e.idle;
    }
    function Hs(e) {
        return !e.size || Array.from(e).every(Gs);
    }
    function Qs(e) {
        e.idle ||
            ((e.idle = !0),
            Ze(yn(e), (e) => {
                e.done = !0;
            }),
            qt(e, { type: 'idle', parent: e }));
    }
    Qe.assign({ createStringInterpolator: rn, to: (e, t) => new Vs(e, t) });
    var Ws = /^--/;
    function Ys(e, t) {
        return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : 'number' != typeof t || 0 === t || Ws.test(e) || (Zs.hasOwnProperty(e) && Zs[e])
              ? ('' + t).trim()
              : t + 'px';
    }
    var Xs = {};
    var Zs = {
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
        Ks = ['Webkit', 'Ms', 'Moz', 'O'];
    Zs = Object.keys(Zs).reduce(
        (e, t) => (Ks.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
        Zs,
    );
    var Js = /^(matrix|translate|scale|rotate|skew)/,
        er = /^(translate)/,
        tr = /^(rotate|skew)/,
        nr = (e, t) => (Ye.num(e) && 0 !== e ? e + t : e),
        sr = (e, t) => (Ye.arr(e) ? e.every((e) => sr(e, t)) : Ye.num(e) ? e === t : parseFloat(e) === t),
        rr = class extends Rn {
            constructor({ x: e, y: t, z: n, ...s }) {
                const r = [],
                    o = [];
                ((e || t || n) &&
                    (r.push([e || 0, t || 0, n || 0]),
                    o.push((e) => [`translate3d(${e.map((e) => nr(e, 'px')).join(',')})`, sr(e, 0)])),
                    Ke(s, (e, t) => {
                        if ('transform' === t) (r.push([e || '']), o.push((e) => [e, '' === e]));
                        else if (Js.test(t)) {
                            if ((delete s[t], Ye.und(e))) return;
                            const n = er.test(t) ? 'px' : tr.test(t) ? 'deg' : '';
                            (r.push(Je(e)),
                                o.push(
                                    'rotate3d' === t
                                        ? ([e, t, s, r]) => [`rotate3d(${e},${t},${s},${nr(r, n)})`, sr(r, 0)]
                                        : (e) => [
                                              `${t}(${e.map((e) => nr(e, n)).join(',')})`,
                                              sr(e, t.startsWith('scale') ? 1 : 0),
                                          ],
                                ));
                        }
                    }),
                    r.length && (s.transform = new or(r, o)),
                    super(s));
            }
        },
        or = class extends Vt {
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
                            [o, a] = this.transforms[s](Ye.arr(r) ? r : n.map(Ut));
                        ((e += ' ' + o), (t = t && a));
                    }),
                    t ? 'none' : e
                );
            }
            observerAdded(e) {
                1 == e && Ze(this.inputs, (e) => Ze(e, (e) => Lt(e) && Ht(e, this)));
            }
            observerRemoved(e) {
                0 == e && Ze(this.inputs, (e) => Ze(e, (e) => Lt(e) && Qt(e, this)));
            }
            eventObserved(e) {
                ('change' == e.type && (this._value = null), qt(this, e));
            }
        };
    Qe.assign({
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
    var ar = ((
            e,
            {
                applyAnimatedValues: t = () => !1,
                createAnimatedStyle: n = (e) => new Rn(e),
                getComponentProps: s = (e) => e,
            } = {},
        ) => {
            const r = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: s },
                o = (e) => {
                    const t = An(e) || 'Anonymous';
                    return (
                        ((e = Ye.str(e) ? o[e] || (o[e] = Sn(e, r)) : e[kn] || (e[kn] = Sn(e, r))).displayName =
                            `Animated(${t})`),
                        e
                    );
                };
            return (
                Ke(e, (t, n) => {
                    (Ye.arr(e) && (n = An(t)), (o[n] = o(t)));
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
                        { className: s, style: r, children: o, scrollTop: a, scrollLeft: i, viewBox: l, ...c } = t,
                        u = Object.values(c),
                        d = Object.keys(c).map((t) =>
                            n || e.hasAttribute(t)
                                ? t
                                : Xs[t] || (Xs[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                        );
                    void 0 !== o && (e.textContent = o);
                    for (const m in r)
                        if (r.hasOwnProperty(m)) {
                            const t = Ys(m, r[m]);
                            Ws.test(m) ? e.style.setProperty(m, t) : (e.style[m] = t);
                        }
                    (d.forEach((t, n) => {
                        e.setAttribute(t, u[n]);
                    }),
                        void 0 !== s && (e.className = s),
                        void 0 !== a && (e.scrollTop = a),
                        void 0 !== i && (e.scrollLeft = i),
                        void 0 !== l && e.setAttribute('viewBox', l));
                },
                createAnimatedStyle: (e) => new rr(e),
                getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
            },
        ),
        ir = ar.animated;
    function lr() {
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
    const cr = new WeakMap(),
        ur = 'await',
        dr = 'idle',
        mr = 'display';
    function pr({ resId: e = 0, contentId: t, decoratorId: n, disabled: r, args: o, showDelay: a = 400 }) {
        const i = s.useRef({ status: dr, resId: e, timeoutId: 0 }),
            [l, c] = s.useMemo(() => {
                let s = null;
                function l() {
                    r ||
                        ((i.current.status = ur),
                        window.clearTimeout(i.current.timeoutId),
                        (i.current.timeoutId = window.setTimeout(c, a)));
                }
                function c() {
                    ((i.current.status = mr), Q.tooltip.open(e, t, n, o), s && cr.set(s, d));
                }
                function u() {
                    if (
                        (window.clearTimeout(i.current.timeoutId),
                        i.current.status === mr && Q.tooltip.hide(e, t, n),
                        (i.current.status = dr),
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
                    hide: u,
                    show: c,
                    rerun: function () {
                        i.current.status !== dr && (r ? d.hide() : l());
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
            }, [o, t, n, r, e, a]);
        return (
            s.useEffect(() => {
                l.rerun();
            }, [l]),
            Te(Pe(l.hide)),
            c
        );
    }
    function fr({ alert: e, body: t, header: n, note: r, hasHtmlContent: o, disabled: a }) {
        const i = p.resolve('views');
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
            $.sound(e);
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
    function yr() {
        const e = s.useContext(_r);
        if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
        return e;
    }
    const vr = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
        wr = new Set(['number', 'string', 'boolean', 'bigint']),
        xr = new Set(['Dict']);
    function Er(e, { shallow: t = !0, depth: n = 0, maxDepth: s = 32 } = {}) {
        const r = e,
            o = typeof e;
        if (n > s) throw new Error(`Too deeply nested to copy. Max is ${s}.`);
        if (vr.has(o)) return r;
        if (null === r) return r;
        const a = { depth: n + 1, maxDepth: s };
        if (Array.isArray(r)) return r.map((e) => Er(e, a));
        if ('object' === o) {
            const s = r.constructor?.name ?? 'UNKNOWN';
            if (Array.isArray(e)) return e.map((e) => Er(e, a));
            if ('CoherentArrayProxy' === s) return e.map((e) => Er(e.value, a));
            if ('Dict' === s) return;
            if ('UNKNOWN' === s) return;
            if (s.includes(':ViewModel:') || 'Object' === s) {
                if (t && 0 === n) {
                    const e = {};
                    for (const t in r) {
                        const n = r[t];
                        wr.has(typeof n) && (e[t] = n);
                    }
                    return e;
                }
                {
                    const e = {};
                    for (const t in r) {
                        const n = r[t],
                            s = r?.constructor?.name ?? 'UNKNOWN';
                        xr.has(s) || (e[t] = Er(n, a));
                    }
                    return e;
                }
            }
            const o = {};
            for (const e of Object.keys(r)) o[e] = Er(r[e], a);
            return o;
        }
        return (console.error('Incorrect value to clone model', r), r);
    }
    const Rr = { deep: !1, equals: ee },
        Cr = { cloneItem: !0 },
        Pr = { shallow: !1 };
    class Tr {
        constructor(e, t = Cr) {
            this.options = t;
            const s = {},
                r = e.keys();
            for (let o = 0; o < r.length; o++) {
                const t = r[o];
                s[t] = n.observable.box(this.takeItem(e, t), Rr);
            }
            ((this._keys = n.observable.set(new Set(r))), (this._data = n.observable.box(s, Rr)));
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
                    a = this.takeItem(e, o);
                o in s
                    ? null === a
                        ? (delete s[o], this._keys.delete(o), this.set(s))
                        : s[o].set(a)
                    : null !== a && ((s[o] = n.observable.box(a, Rr)), this._keys.add(o), this.set(s));
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
            return this.options.cloneItem ? Er(n, Pr) : n;
        }
        set = n.action((e) => {
            this._data.set(e);
        });
        untrackedData() {
            return n.untracked(() => this._data.get());
        }
    }
    const Sr = s.createContext({ mode: 'real' });
    const Nr = { equals: ee, deep: !1 };
    function kr(e, t, s) {
        const r = [];
        e.events.subscribersNotified.on(
            n.action(() => {
                for (const e of r) e();
                r.splice(0, r.length);
            }),
        );
        const o = (o, a, i = Nr) => {
                const l = n.observable.box(o(s(a)), i);
                return ('real' === t && e.subscribe((e) => r.push(() => l.set(o(e))), a), l);
            },
            a = (n, o) => {
                const a = new Tr(s(n), o);
                return ('real' === t && e.subscribe((e, t) => r.push(() => a.update(e, t)), n), a);
            },
            i = (o, a) => {
                const i = n.observable.box(s(o) ?? a, Nr);
                return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), o), i);
            };
        return {
            dict: a,
            dictRef: (e, t) => a(e, { cloneItem: !1, ...t }),
            arrayClone: (e) => o(Er, e),
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
                        c = l.reduce((e, [t, s]) => ((e[s] = n.observable.box(i[t], {})), e), {});
                    return (
                        'real' === t &&
                            e.subscribe((e) => {
                                r.push(() =>
                                    l.forEach(([t, n]) => {
                                        c[n].set(e[t]);
                                    }),
                                );
                            }, a),
                        c
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
                    return U.onHitTest((t) => {
                        const n = e.getBoundingClientRect();
                        return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                    });
            }, []),
            e.jsx('div', { ...t, ref: Ir([n, r]) })
        );
    });
    const Mr = 1,
        jr = 2,
        Dr = 3;
    function Or(e, t) {
        const n = [],
            s = [];
        let r = '',
            o = !1,
            a = '',
            i = 0;
        for (let l = 0; l < e.length; l++) {
            const c = e[l];
            if (c === t.start[0] && e.slice(l, l + t.start.length) === t.start) {
                if (r) {
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push({ type: Mr, value: r });
                    } else n.push({ type: Mr, value: r });
                    r = '';
                }
                ((o = !0), (l += t.start.length - 1));
            } else if (c === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                ((o = !1), (l += t.end.length - 1));
                const e = a.trim();
                if (e.startsWith('@')) {
                    const t = e.slice(1).trim(),
                        r = { type: jr, attrs: t.split('|'), instanceId: ++i, children: [] };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(r);
                    } else n.push(r);
                    s.push({ node: r, startIndex: n.length });
                } else if ('/' === e) s.length > 0 && s.pop();
                else {
                    const t = { type: Dr, instanceId: ++i, name: e };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(t);
                    } else n.push(t);
                }
                a = '';
            } else o ? (a += c) : (r += c);
        }
        if (r)
            if (s.length) {
                s[s.length - 1].node.children.push({ type: Mr, value: r });
            } else n.push({ type: Mr, value: r });
        return n;
    }
    const Br = {
            COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
            base: 'FormatText_db904f12',
            base__fullSize: 'FormatText_base__fullSize_a514958e',
            nowrap: 'FormatText_nowrap_ff69eca3',
        },
        Fr = new Set(Br.COLORS?.split(', ') ?? []);
    let $r = 0;
    function Lr() {
        return ++$r;
    }
    const Ur =
        /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
    function zr(t) {
        const n = p.resolve('langCode');
        return (function (e, t, n) {
            return be.has(t) ? e.map(n) : e.map((e, t, s) => (t === s.length - 1 ? n(e, t, s) : n(`${e} `, t, s)));
        })(
            (function (e, t) {
                return (ge[t] ?? _e)(e);
            })(t, n),
            n,
            (t, n) => t && e.jsx('span', { children: t }, `${t}${n}`),
        );
    }
    function qr(t) {
        return Array.isArray(t)
            ? (function (t) {
                  const n = [];
                  for (let r = 0; r < t.length; r++) {
                      const o = t[r],
                          a = t[r + 1];
                      if ('string' != typeof a || !Ur.test(a)) {
                          n.push(qr(o));
                          continue;
                      }
                      const i = zr(a.slice(1));
                      (n.push(
                          e.jsxs(
                              s.Fragment,
                              { children: [e.jsxs('span', { className: Br.nowrap, children: [qr(o), a[0]] }), i] },
                              Lr(),
                          ),
                      ),
                          (r += 1));
                  }
                  return n;
              })(t)
            : 'string' == typeof t
              ? e.jsx(s.Fragment, { children: zr(t) }, Lr())
              : t;
    }
    const Vr = {
        class: function (t, ...n) {
            return e.jsx(
                'span',
                { className: n.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: t },
                Lr(),
            );
        },
        colorLegacy: function (t, n) {
            const s = Lr();
            return Fr.has(String(n))
                ? e.jsx('span', { className: `FormatText_colorLegacy__${n}`, children: t }, s)
                : e.jsx('span', { style: { color: `#${n}` }, children: t }, s);
        },
        bold: (e) => ['fontWeight', 'bold'],
        split: qr,
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
                Lr(),
            );
        },
        color: (e, t) => ['color', t],
        fontSize: (e, t) => ['fontSize', t],
        fontWeight: (e, t) => ['fontWeight', t],
        textDecoration: (e, t) => ['textDecoration', t],
    };
    function Gr(e, t, n, s) {
        const r = n.map((t) => {
                if ('string' != typeof t) return t;
                const n = t.trim();
                if (n.startsWith('(') && n.endsWith(')')) {
                    const [t, ...r] = n.slice(1, -1).split(' ');
                    return t ? Gr(e, t, r, s) : e;
                }
                return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
            }),
            o = s[t];
        return o ? o(e, ...r) : (console.error(`Function ${t} is not registered`), e);
    }
    function Hr(e, t, n) {
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
            return s ? Gr(e, s, r, n) : e;
        }, t);
    }
    function Qr(e) {
        return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
    }
    function Wr(e, t) {
        for (let n = 0; n < e.length; n++) {
            if ('$' === e[n]) {
                let s = n + 1;
                for (; s < e.length && !Qr(e[s]); ) s++;
                const r = e.slice(n + 1, s),
                    o = t[r];
                if (o) return Wr(e.replace(`$${r}`, String(o)), t);
            }
        }
        return e;
    }
    function Yr(e, t) {
        const n = [];
        for (let s = 0; s < e.length; s++) n[s] = Wr(e[s], t);
        return n;
    }
    const Xr = ['number', 'string', 'undefined'];
    function Zr(t, n, r = {}, o = !0) {
        o && ($r = 0);
        const a = [];
        function i(e) {
            if (Xr.includes(typeof e)) {
                const t = a.at(-1);
                if ('string' == typeof t) return void (a[a.length - 1] = t + e);
            }
            a.push(e);
        }
        for (const l of t)
            if (l.type === Mr) i(l.value);
            else if (l.type === Dr)
                null === r[l.name] || Xr.includes(typeof r[l.name])
                    ? i(r[l.name] ?? `{{${l.name}}}`)
                    : a.push(e.jsx(s.Fragment, { children: r[l.name] }, `var-${l.name}-${l.instanceId}`));
            else if (l.type === jr) {
                const e = Zr(l.children, n, r, !1),
                    t = Hr(Yr(l.attrs, r), e, n);
                a.push(t);
            }
        return a;
    }
    function Kr(e) {
        return e
            .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
            .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
    }
    function Jr(e) {
        return e
            .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
            .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
    }
    function eo(e) {
        return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
    }
    function to(e) {
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
        })(e, eo, Kr, Jr);
    }
    const no = { start: '{{', end: '}}' },
        so = s.memo(function (t) {
            const {
                    brackets: n = no,
                    text: r,
                    params: o,
                    upgradeLegacy: a,
                    fullSize: i,
                    inline: l,
                    formatters: c,
                    split: u,
                    ...d
                } = t,
                m = s.useMemo(() => (t.upgradeLegacy ? to(t.text) : t.text), [t.text, t.upgradeLegacy]),
                p = s.useMemo(() => (t.formatters ? { ...Vr, ...t.formatters } : Vr), [t.formatters]),
                f = s.useMemo(() => Or(u ? `{{@ split}}${m}{{/}}` : m, n), [n, m, u]),
                h = s.useMemo(() => Zr(f, p, t.params), [f, p, t.params]),
                g = N(Br.base, i && Br.base__fullSize, d.className);
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
    function ro({ path: t, ...n }) {
        return e.jsx(so, { text: p.resolve('strings').readOrEmpty(t), ...n });
    }
    function oo(t) {
        return e.jsx(e.Fragment, { children: t.children });
    }
    const ao = () => {};
    function io(t) {
        const n = t;
        return s.forwardRef(function (t, s) {
            const r = t,
                o = a.useAdaptive(r, r.adaptive),
                { path: i, ...l } = o,
                c = o.images ?? p.resolve('images'),
                u = { ...l, ref: s };
            {
                const t = i ? c.readOr(i, ao, 'warn') : void 0;
                return t ? e.jsx(n, { ...u, src: t }) : e.jsx(n, { ...u, unknown: !0 });
            }
        });
    }
    const lo = {
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
                width: a,
                src: i,
                height: l,
                unselectable: c,
                unknownStyle: u = lo,
                ...d
            } = t;
            return e.jsx('div', { ...d, ref: n, style: { width: t.width, height: t.height, ...u, ...t.style } });
        }
        const { repeat: s, fit: r, position: o, width: a, height: i, unknownStyle: l, unselectable: c, ...u } = t;
        return e.jsx('div', {
            ...u,
            ref: n,
            style: {
                backgroundImage: `url(${t.src})`,
                backgroundRepeat: s ?? 'no-repeat',
                backgroundSize: r ?? 'contain',
                backgroundPosition: o ?? 'center center',
                width: 'number' == typeof a ? `${a}rem` : a,
                height: 'number' == typeof i ? `${i}rem` : i,
                ...u.style,
            },
        });
    });
    const co = io(
        s.forwardRef(function (t, n) {
            if (t.unknown) {
                const {
                    repeat: s,
                    fit: r,
                    position: o,
                    width: a,
                    src: i,
                    height: l,
                    unselectable: c,
                    unknown: u,
                    unknownStyle: d = lo,
                    ...m
                } = t;
                return e.jsx('div', { ...m, ref: n, style: { width: t.width, height: t.height, ...d, ...t.style } });
            }
            const {
                repeat: s,
                fit: r,
                position: o,
                width: a,
                height: i,
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
                    width: 'number' == typeof a ? `${a}rem` : a,
                    height: 'number' == typeof i ? `${i}rem` : i,
                    ...d.style,
                },
            });
        }),
    );
    io(
        s.forwardRef(function (t, n) {
            const { width: s, height: r, src: o, unselectable: a, unknown: i, unknownStyle: l = lo, ...c } = t;
            return t.unknown
                ? e.jsx('div', { ...c, style: { width: t.width, height: t.height, ...l } })
                : e.jsx('img', { ...c, ref: n, src: o, width: s, height: r });
        }),
    );
    const uo = 'TruncateText_dcb41d92',
        mo = s.forwardRef(function ({ text: t, tooltipParams: n, className: r, ...o }, a) {
            const i = fr({ header: n?.header, body: n?.body || t }),
                l = s.useRef(null),
                [c, u] = s.useState(!1),
                d = s.useCallback(() => {
                    l.current && u(l.current.scrollWidth - Math.ceil(l.current.getBoundingClientRect().width) > 0);
                }, []);
            var m, p;
            return (
                s.useEffect(() => {
                    c || i.onMouseLeave();
                }, [c, i]),
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
                            (t(), (t = de(e)));
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
                e.jsx('div', { ...o, ref: Ir([a, l]), className: N(uo, r), ...(c ? i : {}), children: t })
            );
        }),
        po = (e) => ('boolean' == typeof e ? `${e}` : 0 === e ? '0' : e),
        fo = N,
        ho = (e, t) => (n) => {
            var s;
            if (null == (null == t ? void 0 : t.variants))
                return fo(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: r, defaultVariants: o } = t,
                a = Object.keys(r).map((e) => {
                    const t = null == n ? void 0 : n[e],
                        s = null == o ? void 0 : o[e];
                    if (null === t) return null;
                    const a = po(t) || po(s);
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
            return fo(e, a, l, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        };
    function go(t, n, r) {
        const o = 'object' == typeof n && 'cva' in n ? n.cva?.variants : r?.variants,
            a = o ? Object.keys(o) : [];
        if ('object' == typeof n) {
            const e = n,
                r = ho(e.className, e.cva),
                o = e.element,
                i = s.forwardRef(function (e, t) {
                    return s.createElement(o, { ...('function' == typeof o ? e : _o(a, e)), ref: t, className: r(e) });
                });
            return ((i.displayName = t), e.cva && (i.cva = e.cva), i);
        }
        const i = ho(n, r),
            l = s.forwardRef(function (n, s) {
                return e.jsx('div', { 'data-name': t, ..._o(a, n), ref: s, className: i(n) });
            });
        return ((l.displayName = t), r && (l.cva = r), l);
    }
    function _o(e, t) {
        if (0 === e.length) return t;
        const n = { ...t };
        for (const s of e) delete n[s];
        return n;
    }
    const bo = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
        yo = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
        vo = go('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
        wo = s.forwardRef(function (
            { children: t, onClick: n, onMouseEnter: s, soundTarget: r, disabled: o = !1, silent: a = !1, ...i },
            l,
        ) {
            const c = yr();
            return e.jsx(vo, {
                ...i,
                ref: l,
                onMouseEnter: function (e) {
                    (o || a || c.play('mouse-enter', { target: r || 'Button', original: e }), s?.(e));
                },
                onClick: function (e) {
                    o || (a || c.play('click', { target: r || 'Button', original: e }), n?.(e));
                },
                children: t,
            });
        }),
        xo = {
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
        Eo = s.forwardRef(function (
            {
                children: t,
                size: n = yo.large,
                theme: s = bo.primary,
                disabled: r = !1,
                silent: o = !1,
                autoAlignContent: a = !0,
                classNames: i,
                className: l,
                ...c
            },
            u,
        ) {
            return e.jsxs(wo, {
                ...c,
                ref: u,
                silent: o,
                disabled: r,
                className: N(
                    xo.base,
                    xo[`base__size-${n}`],
                    xo[`base__theme-${s}`],
                    r ? xo.base__disabled : xo.base__enabled,
                    l,
                    i?.base,
                ),
                onClick: function (e) {
                    r || c.onClick?.(e);
                },
                children: [
                    e.jsx('div', { className: N(xo.background, i?.background) }),
                    e.jsx('div', { className: N(xo.border, i?.border) }),
                    e.jsx('div', { className: N(xo.overlay, i?.overlay) }),
                    e.jsx('div', { className: N(xo.content, a && xo.content__fontAligned, i?.content), children: t }),
                ],
            });
        });
    ((Eo.themes = bo), (Eo.sizes = yo));
    const Ro = 'Action_6c7b0c76',
        Co = 'Action_icon_7d5aed3b',
        Po = s.forwardRef(function ({ className: t, theme: n = Eo.themes.secondary, tooltipParams: s, ...r }, o) {
            const a = fr({ alert: s?.alert, header: s?.header, body: s?.body, note: s?.note });
            return e.jsx(Eo, {
                ...r,
                ref: o,
                onClick: (e) => {
                    (r.onClick(e), s && a.onClick());
                },
                onMouseEnter: (e) => {
                    (r.onMouseEnter?.(e), s && a.onMouseEnter(e));
                },
                onMouseLeave: (e) => {
                    (r.onMouseLeave?.(e), s && a.onMouseLeave());
                },
                autoAlignContent: !1,
                theme: n,
                className: N(Ro, t),
                children: e.jsx(co, { width: 10, height: 20, path: 'post_battle.progression.arrow', className: Co }),
            });
        }),
        To = 'Header_background_91826dd5',
        So = 'Header_mask_afb9c38d',
        No = 'Header_border_c6b1d37f',
        ko = go('CardHeader', 'Header_1c2ee301'),
        Ao = s.forwardRef(function ({ classNames: t, className: n, ...s }, r) {
            return e.jsxs(ko, {
                ...s,
                className: N(t?.base, n),
                ref: r,
                children: [
                    e.jsx('div', { className: N(To, t?.background) }),
                    e.jsx('div', { className: N(So, t?.mask) }),
                    e.jsx('div', { className: N(No, t?.border) }),
                    s.children,
                ],
            });
        }),
        Io = go('CardTitle', 'Title_e5ecf295'),
        Mo = s.forwardRef(function (t, n) {
            return e.jsx(Io, { ...t, ref: n, children: t.children });
        }),
        jo = 'Card_content_f7ddaa4a',
        Do = go('Card', 'Card_3f55e450'),
        Oo = go('CardContent', jo),
        Bo = s.forwardRef(function (t, n) {
            return e.jsx(Do, { ...t, ref: n, children: t.children });
        });
    ((Bo.Header = Ao), (Bo.Content = Oo), (Bo.Action = Po), (Bo.Title = Mo));
    const Fo = 'AnimatedValue_d9f4b2f0',
        $o = 'AnimatedValue_animatedValue_4c490d83',
        Lo = k.cubicBezier(0.33, 0, 0.25, 1);
    function Uo(e) {
        return {
            enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
            leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
        };
    }
    function zo({ value: t, transition: n, children: r, className: o, classNames: a }) {
        const i = s.useMemo(ye, []),
            l = zs(t, {
                ...n,
                initial: { opacity: 1, y: '0rem', ...n?.initial },
                from: { opacity: 0, y: '-5rem', ...n?.from },
                enter: () => ({
                    opacity: 1,
                    y: '0rem',
                    delay: 330,
                    config: { easing: Lo, duration: 330 },
                    onStart: () => {
                        const { enterElements: e, leftElements: t } = Uo(i);
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
                    config: { easing: Lo, duration: 330 },
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
                    ...n?.leave,
                }),
            });
        return e.jsx('div', {
            className: N(Fo, o),
            children: l((n, s) => {
                const o = 0 === n.opacity.get() && !1 === n.opacity.isAnimating;
                return e.jsx(ir.div, {
                    className: N($o, `js-animated-value-${i}-${t === s ? 'enter' : 'leave'}`, a?.animatedValue),
                    style: { ...n, position: o ? 'absolute' : 'relative' },
                    children: r(s),
                });
            }),
        });
    }
    const qo = 'ProgressCount_3c6daa70',
        Vo = 'ProgressCount_label_d15406bd',
        Go = 'ProgressCount_total_4f222a62',
        Ho = 'ProgressCount_divider_487d7768',
        Qo = p.resolve('intl');
    function Wo({ withLabel: e, withoutLimit: t }) {
        return t
            ? 'battle_results.progression.missionsCompleteCounter'
            : 'battle_results.progression.completedPointsFrom.' + (e ? 'withLabel' : 'withoutLabel');
    }
    function Yo({ current: t, total: n, withLabel: s, withoutLimit: r, className: o, classNames: a }) {
        return e.jsx(ro, {
            path: Wo({ withLabel: s, withoutLimit: r }),
            className: N(qo, o),
            params: {
                completed: Qo.formatNumber('integral', t),
                total: Qo.formatNumber('integral', n),
                totalClass: N(Go, a?.total),
                labelClass: s && N(Vo, a?.label),
            },
        });
    }
    function Xo({
        current: t,
        total: n,
        withLabel: r,
        className: o,
        classNames: a,
        transitionCurrent: i,
        transitionTotal: l,
    }) {
        const c = yr(),
            u = s.useRef({ transitionCurrent: i, transitionTotal: l });
        return (
            s.useEffect(() => {
                u.current = { transitionCurrent: i, transitionTotal: l };
            }, [i, l]),
            e.jsx(ro, {
                path: 'battle_results.progression.completedPointsFrom.' + (r ? 'withLabel' : 'withoutLabel'),
                className: N(qo, o),
                params: {
                    completed: e.jsx(zo, {
                        className: a?.currentTransitionWrapper,
                        value: Qo.formatNumber('integral', t),
                        transition: {
                            ...i,
                            enter: {
                                ...i.enter,
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
                    total: e.jsx(zo, {
                        className: a?.totalTransitionWrapper,
                        value: Qo.formatNumber('integral', n),
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
                    totalClass: N(Go, a?.total),
                    labelClass: r && N(Vo, a?.label),
                    dividerClass: Ho,
                },
            })
        );
    }
    const Zo = {
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
    function Ko({
        title: t,
        titleImageProps: n,
        disabled: s,
        actionTooltipParams: r,
        onHeaderClick: o,
        onButtonAction: a,
        children: i,
        progressionCountProps: l,
        className: c,
        classNames: u,
        ...d
    }) {
        return e.jsxs(Bo, {
            className: N(Zo.card, s && Zo.card__disabled, c),
            ...d,
            children: [
                e.jsxs(Bo.Header, {
                    onClick: o,
                    className: N(Zo.cardHeader, u?.header?.base),
                    classNames: {
                        ...u?.header,
                        background: N(Zo.cardHeaderBackground, u?.header?.background),
                        border: N(Zo.cardHeaderBorder, u?.header?.border),
                    },
                    children: [
                        e.jsxs('div', {
                            className: N(Zo.head, u?.head),
                            children: [
                                e.jsxs('div', {
                                    className: Zo.titleContainer,
                                    children: [
                                        void 0 !== n && e.jsx(co, { ...n }),
                                        e.jsx(Bo.Title, {
                                            className: N(Zo.title, u?.title),
                                            children: e.jsx(mo, { text: t }),
                                        }),
                                    ],
                                }),
                                void 0 !== a &&
                                    e.jsx(Bo.Action, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), a(e));
                                        },
                                        className: N(Zo.action, u?.action),
                                        tooltipParams: r,
                                    }),
                            ],
                        }),
                        e.jsx('div', { className: N(Zo.tail, u?.tail), children: void 0 !== l && e.jsx(Yo, { ...l }) }),
                    ],
                }),
                void 0 !== i && e.jsx(Bo.Content, { className: N(Zo.content, u?.content), children: i }),
                e.jsx('div', { className: Zo.divider }),
            ],
        });
    }
    function Jo(e) {
        return (
            !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
            (!s.isValidElement(e) && !!Array.isArray(e) && e.every(Jo))
        );
    }
    const ea = 'MultilineOverflow_8834bd8e',
        ta = 'MultilineOverflow_content_b539970d';
    const na = s.forwardRef(function (
        {
            text: t,
            brackets: n,
            params: r,
            formatters: o,
            upgradeLegacy: a,
            split: i = !0,
            onMouseEnter: l,
            onMouseLeave: c,
            onClick: u,
            tooltipDisabled: d = !1,
            tooltip: m,
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
                    (n.className = N(ta, e.children[0].className)),
                    (n.innerHTML = ''),
                    e.appendChild(n));
                const t = e.children[0];
                if (!t) return console.warn("MultilineOverflow can't get first child to handle it", e);
                const r =
                    ((o = e.getBoundingClientRect()), { x: (a = t.getBoundingClientRect()).x - o.x, y: a.y - o.y });
                var o, a;
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
                    (s = de(() => {
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
                return !e || Object.values(e).every(Jo);
            })(r),
            R = (function (e, t, n) {
                return pr({
                    ...n,
                    disabled: n?.disabled,
                    contentId: p.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
                    args: s.useMemo(() => ({ type: e, params: JSON.stringify(t), resId: t.resId }), [t, e]),
                });
            })(
                'format_text',
                s.useMemo(
                    () => ({
                        text: t,
                        params: E ? r : void 0,
                        split: i,
                        upgradeLegacy: a,
                        brackets: n,
                        resId: p.resolve('views').read((e) => e.mono.tooltips.tooltips('resId')),
                    }),
                    [t, n, i, a, r, E],
                ),
            ),
            C = m ?? R;
        if (
            (s.useEffect(() => {
                d || w || C.onMouseLeave();
            }, [w, C, m, d, E]),
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
            ref: Ir([y, v]),
            className: N(ea, f, h?.base),
            style: _,
            children: e.jsx(so, {
                text: t,
                brackets: n,
                params: r,
                upgradeLegacy: a,
                split: i,
                formatters: o,
                className: h?.text,
                style: { ...g, visibility: 'hidden' },
            }),
        });
    });
    function sa({
        baseValue: e,
        newValue: t,
        animationType: n = aa.simple,
        deltaVisible: s = !1,
        preViewDeltaVisible: r = !1,
        animationConfig: o,
    }) {
        return {
            from: { width: e },
            to: { width: t },
            config: o ?? { duration: (n === aa.simple && s) || (!s && r) ? 0 : ra, easing: Bt.easeInOutCubic },
        };
    }
    const ra = 600,
        oa = { duration: ra, easing: Bt.easeInOutCubic },
        aa = { simple: 'simple', grow: 'grow', growFreeze: 'growFreeze' },
        ia = { medium: 'medium', large: 'large' },
        la = { disabled: 'disabled', doneInactive: 'doneInactive', doneStatic: 'doneStatic' },
        ca = 'growing',
        ua = 'shrinking',
        da = 'done',
        ma = s.createContext(void 0);
    function pa() {
        const e = s.useContext(ma);
        if (!e) throw new Error('ProgressBar must be used within a ProgressBar');
        return e;
    }
    function fa(e) {
        const { activeComponents: t } = pa();
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
    const ha = {
        base: 'BackgroundPattern_8df99ec8',
        backgroundPattern: 'BackgroundPattern_backgroundPattern_d9136c40',
        backgroundPattern__medium: 'BackgroundPattern_backgroundPattern__medium_84d64a88',
        backgroundPattern__large: 'BackgroundPattern_backgroundPattern__large_3e5537fc',
    };
    const ga = s.memo(function ({ className: t, backgroundPattern: n }) {
        const s = pa();
        return (
            fa('backgroundPattern'),
            e.jsx('div', {
                className: ha.base,
                children: e.jsx(co, {
                    className: N(
                        t,
                        ha.backgroundPattern,
                        0 === s.percentage ? ha.backgroundPattern__noProgress : ha[`backgroundPattern__${s.size}`],
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    path:
                        n ??
                        ((r = s.size),
                        (o = s.status),
                        o === la.disabled
                            ? `ui.progressbar.bg_pattern_base_disabled_${r}`
                            : `ui.progressbar.bg_pattern_base_${r}`),
                }),
            })
        );
        var r, o;
    });
    function _a(e, t) {
        const n = pa(),
            s = yr();
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
    function ba(e = 0) {
        const t = pa(),
            n = t.soundTarget ?? 'progress-bar',
            s = yr(),
            r = _a(e, n),
            o = Pe(() => {
                t.status !== la.doneInactive && t.progressCompleted
                    ? s.play('increaseDeltaMax', { target: n })
                    : s.play('progressSimple', { target: n });
            });
        return Pe(({ step: e } = {}) => {
            if (!t.silent)
                return t.activeComponents.has('delta') ? r(e) : t.activeComponents.has('fill') ? o() : void 0;
        });
    }
    const ya = 'Delta_eb295acb',
        va = 'Delta_delta__increase_e6e76b0b',
        wa = 'Delta_outside_b28c01e5',
        xa = 'Delta_outside__increase_91391b24',
        Ea = 'Delta_inside_b1b3a5c5',
        Ra = 'Delta_inside__increase_fcd871c4',
        Ca = s.memo(
            s.forwardRef(function (
                {
                    from: t,
                    growAnimationConfig: n,
                    shrinkAnimationConfig: r,
                    classNames: o,
                    className: a,
                    steps: i,
                    onState: l,
                    ...c
                },
                u,
            ) {
                const d = s.useRef(null),
                    m = pa(),
                    [p, f] = $s(() => ({ width: 0 })),
                    [h, g] = $s(() => ({ width: 0 })),
                    [_, b] = $s(() => ({ left: 0, width: 0 })),
                    [y, ...v] = i,
                    [w, x] = s.useState(v),
                    [E, R] = s.useState(y ?? 'done'),
                    C = (m.value - t) / m.maxValue,
                    P = ba(C);
                (fa('delta'),
                    s.useEffect(() => {
                        if (0 === C) return;
                        const [e, ...t] = i;
                        (R(e ?? 'done'), x(t));
                    }, [f, g, i, C]));
                const T = Pe(l ?? K);
                s.useEffect(() => T(E), [E, T]);
                const S = Pe(() => {
                    const [e, ...t] = w;
                    void 0 !== e ? (R(e), x(t)) : R('done');
                });
                return (
                    s.useEffect(() => {
                        const e = d.current;
                        if (!e || 0 === C) return (g.set({ width: 0 }), f.set({ width: 0 }), R('done'), void x([]));
                        const t = 100 * Math.max(0, m.percentage - Math.max(0, C)),
                            s = 100 * Math.abs(C);
                        return (
                            e.classList.toggle(va, C > 0),
                            'growing' === E
                                ? (b.set({ left: t, width: s }),
                                  g.set({ width: 100 }),
                                  void f.start({
                                      from: { width: 0 },
                                      to: { width: 100 },
                                      config: n ?? oa,
                                      onRest: S,
                                      onStart: () => P({ step: E }),
                                  }))
                                : 'shrinking' === E
                                  ? (b.set({ left: t, width: s }),
                                    f.set({ width: 100 }),
                                    void g.start({
                                        from: { width: 100 },
                                        to: { width: 0 },
                                        config: r ?? oa,
                                        onRest: S,
                                        onStart: () => P({ step: E }),
                                    }))
                                  : void 0
                        );
                    }, [b, m.percentage, C, n, f, S, g, P, r, E]),
                    e.jsxs(ir.div, {
                        ...c,
                        ref: Ir([u, d]),
                        className: N(a, ya),
                        style: { left: _.left.to((e) => `${e}%`), width: _.width.to((e) => `${e}%`) },
                        children: [
                            e.jsxs(ir.div, {
                                ...c,
                                style: { width: h.width.to((e) => `${e}%`) },
                                className: N(o?.outside, wa, C > 0 && xa),
                                children: [
                                    e.jsx(ir.div, {
                                        style: { width: p.width.to((e) => `${e}%`) },
                                        className: N(o?.inside, Ea, C > 0 && Ra),
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
        Pa = {
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
        Ta = ir(co),
        Sa = s.memo(function ({ animationConfig: t, classNames: n }) {
            const r = pa(),
                { activeComponents: o } = pa(),
                a = 100 * r.percentage,
                i = 100 * (r.previous?.percentage ?? 0),
                l = void 0 === r.previous ? a : i,
                c = r.status === la.doneStatic,
                u = lr(),
                [d, m] = $s(() => ({ width: l }));
            return (
                s.useEffect(() => {
                    u.run(() =>
                        m.start(
                            sa({
                                baseValue: l,
                                newValue: a,
                                animationType: r.animationType,
                                deltaVisible: o.has('delta'),
                                preViewDeltaVisible: o.has('previewDelta'),
                                animationConfig: t,
                            }),
                        ),
                    );
                }, [a, m, l, r.animationType, t, o, u]),
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(Ta, {
                            path: `ui.progressbar.bg_pattern_base_done_${r.size}`,
                            className: N(
                                n?.done,
                                Pa.done,
                                !r.progressCompleted && Pa.done__hidden,
                                r.progressCompleted && (c ? Pa.done__doneStatic : Pa.done__visible),
                            ),
                            repeat: 'repeat',
                            position: 'left top',
                            style: { width: d.width.to((e) => `${e}%`) },
                        }),
                        !c &&
                            e.jsx(Ta, {
                                path: `ui.progressbar.bg_pattern_base_done_complete_${r.size}`,
                                className: N(n?.doneComplete, Pa.complete, r.progressCompleted && Pa.complete__visible),
                                repeat: 'repeat',
                                position: 'left top',
                                style: { width: d.width.to((e) => `${e}%`) },
                            }),
                    ],
                })
            );
        }),
        Na = ir(co),
        ka = s.memo(function ({ filledPattern: t, animationConfig: n, className: r }) {
            const o = pa(),
                { activeComponents: a } = pa(),
                i = lr(),
                l = 100 * o.percentage,
                c = 100 * (o.previous?.percentage ?? 0),
                u = void 0 === o.previous ? l : c,
                [d, m] = $s(() => ({ width: u }));
            return (
                s.useEffect(() => {
                    i.run(() =>
                        m.start(
                            sa({
                                baseValue: u,
                                newValue: l,
                                animationType: o.animationType,
                                deltaVisible: a.has('delta'),
                                preViewDeltaVisible: a.has('previewDelta'),
                                animationConfig: n,
                            }),
                        ),
                    );
                }, [m, u, o.animationType, a, l, n, i]),
                e.jsx(Na, {
                    path: t || `ui.progressbar.bg_pattern_base_filled_${o.size}`,
                    className: N(
                        r,
                        Pa.filled,
                        o.status && Pa[`filled__${o.status}`],
                        o.progressCompleted && Pa.filled__hidden,
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    style: { width: d.width.to((e) => `${e}%`) },
                })
            );
        }),
        Aa = s.memo(function ({ filledPattern: t, classNames: n, className: r, animationConfig: o, ...a }) {
            const i = pa(),
                l = ba(),
                c = lr(),
                { activeComponents: u } = pa(),
                d = 100 * i.percentage,
                m = 100 * (i.previous?.percentage ?? 0),
                p = void 0 === i.previous ? d : m;
            (fa('fill'),
                s.useEffect(() => {
                    'growFreeze' === i.animationType && i.progressCompleted && !i.activeComponents.has('delta') && l();
                }, [i.activeComponents, i.animationType, i.progressCompleted, l]));
            const [f, h] = $s(() => ({ width: p }));
            return (
                s.useEffect(() => {
                    c.run(() =>
                        h.start({
                            ...sa({
                                baseValue: p,
                                newValue: d,
                                animationType: i.animationType,
                                deltaVisible: u.has('delta'),
                                preViewDeltaVisible: u.has('previewDelta'),
                                animationConfig: o,
                            }),
                            onStart: () => l(),
                        }),
                    );
                }, [o, h, p, i.animationType, u, d, l, c]),
                e.jsxs('div', {
                    className: N(Pa.base, r),
                    children: [
                        e.jsx(ir.div, { className: n?.fill, style: { width: f.width.to((e) => `${e}%`) } }),
                        a.children ??
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(ka, { filledPattern: t, className: n?.filledPattern, animationConfig: o }),
                                    e.jsx(Sa, {
                                        classNames: { done: n?.done, doneComplete: n?.doneComplete },
                                        animationConfig: o,
                                    }),
                                ],
                            }),
                        e.jsx(ir.div, {
                            className: N(
                                n?.edge,
                                Pa.edge,
                                0 === i.percentage && Pa.edge__noProgress,
                                !u.has('previewDelta') && !i.progressCompleted && Pa.edge__visible,
                                i.status && Pa[`edge__${i.status}`],
                            ),
                            style: { left: f.width.to((e) => `${e}%`) },
                        }),
                    ],
                })
            );
        });
    ((Aa.Filled = ka), (Aa.Done = Sa));
    const Ia = { above: 'above', below: 'below' },
        Ma = {
            base: 'Indicators_f2e99d31',
            step: 'Indicators_step_a78300f3',
            step__above: 'Indicators_step__above_a95c746e',
            indicator: 'Indicators_indicator_8484a8c7',
            label: 'Indicators_label_f8c7ff1e',
        };
    function ja({ position: t, value: n, children: s, className: r, classNames: o }) {
        const a = pa();
        return e.jsxs('div', {
            className: N(Ma.step, Ma[`step__${t}`], r),
            style: { left: (n / a.maxValue) * 100 + '%' },
            children: [
                t === Ia.below && e.jsx('div', { className: N(Ma.indicator, o?.indicator) }),
                void 0 !== s && e.jsx('div', { className: N(Ma.label, o?.label), children: s }),
                t === Ia.above && e.jsx('div', { className: N(Ma.indicator, o?.indicator) }),
            ],
        });
    }
    const Da = go('Indicators', Ma.base),
        Oa = function (t) {
            const n = pa();
            return (
                fa('stepIndicators'),
                e.jsx(Da, {
                    children: pe(t.count, (s) => {
                        const r = (s / (t.count - 1)) * 100,
                            o = n.value >= r && 0 !== n.value;
                        return e.jsx(
                            ja,
                            {
                                position: t.position,
                                value: r,
                                className: N(t.classNames?.step, o && t.classNames?.completed),
                                classNames: t.classNames?.stepClassNames,
                                children: t.children ? t.children(s, r, o) : void 0,
                            },
                            s,
                        );
                    }),
                })
            );
        };
    ((Oa.Step = ja), (Oa.positions = Ia));
    const Ba = 'PreviewDelta_86b01c3e',
        Fa = 'PreviewDelta_negative_1c375892',
        $a = 'PreviewDelta_positive_be83fc48',
        La = 'PreviewDelta_negative__visible_19dda1c5',
        Ua = 'PreviewDelta_positive__visible_19dda1c5',
        za = s.forwardRef(function ({ value: t, classNames: n, ...s }, r) {
            const o = pa();
            fa('previewDelta');
            const a = t - o.value,
                i = a < 0 ? 'negative' : a > 0 ? 'positive' : 'neutral';
            if ('neutral' === i) return null;
            const l = Math.abs(a) / o.maxValue,
                c = a < 0 ? l : 0,
                u = 100 * (o.percentage - c),
                d = 100 * l;
            return e.jsxs('div', {
                ...s,
                'data-name': 'PreviewDelta',
                ref: r,
                className: N(Ba, s.className),
                children: [
                    e.jsx('div', {
                        style: { left: `${u}%`, width: `${d}%`, ...s.style },
                        className: N(n?.negative, Fa, 'negative' === i && La),
                    }),
                    e.jsx('div', {
                        style: { left: `${u}%`, width: `${d}%`, ...s.style },
                        className: N(n?.positive, $a, 'positive' === i && Ua),
                    }),
                ],
            });
        });
    function qa(t) {
        const [n, r] = s.useState(Math.min(t.value, t.maxValue)),
            [o, a] = s.useState(t.maxValue),
            i = Re(n),
            l = Re(o),
            c = s.useRef(new Set()),
            u = Pe((e) => r(Math.min(e, t.maxValue))),
            d = Pe((e) => c.current.has(e));
        (s.useLayoutEffect(() => {
            u(t.value);
        }, [t.value, u]),
            s.useLayoutEffect(() => {
                a(t.maxValue);
            }, [t.maxValue]));
        const m = Pe((e) => t.onValueChange?.(e));
        s.useEffect(() => {
            m(n);
        }, [m, n]);
        const p = Pe((e) => t.onMaxValueChange?.(e));
        s.useEffect(() => {
            p(o);
        }, [p, o]);
        const f = s.useMemo(() => {
            if (void 0 !== i && void 0 !== l) return { value: i, maxValue: l, percentage: i / l };
        }, [i, l]);
        me(o > 0, 'ProgressBar: maxValue must be greater than 0');
        const h = s.useMemo(() => {
                const e = n / o === 1 && t.status !== la.doneInactive;
                return t.animationType === aa.growFreeze ? e && t.maxValueAchieved : e;
            }, [o, t.animationType, t.maxValueAchieved, t.status, n]),
            g = s.useMemo(
                () => ({
                    value: n,
                    maxValue: o,
                    setValue: u,
                    setMaxValue: a,
                    animationType: t.animationType ?? aa.simple,
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
        return e.jsx(ma.Provider, { value: g, children: t.children });
    }
    const Va = {
            background: 'ProgressBar_background_b4143753',
            base: 'ProgressBar_27c2305c',
            base__medium: 'ProgressBar_base__medium_97d40af9',
            base__large: 'ProgressBar_base__large_56a06125',
            base__disabled: 'ProgressBar_base__disabled_c8466b10',
            base__done: 'ProgressBar_base__done_dcd0e31a',
            border: 'ProgressBar_border_cc9e47f4',
        },
        Ga = go('ProgressBar', Va.base, { variants: { size: { medium: Va.base__medium, large: Va.base__large } } }),
        Ha = function ({ size: t = ia.medium, backgroundPattern: n, status: s, className: r, classNames: o, ...a }) {
            return e.jsx(qa, {
                size: t,
                status: s,
                ...a,
                children: e.jsxs(Ga, {
                    size: t,
                    className: N(r, a.value === a.maxValue && s !== la.doneInactive && Va.base__done),
                    children: [
                        e.jsx('div', { className: N(Va.border, Va[`border__${t}`], o?.border) }),
                        e.jsx('div', { className: N(Va.background, o?.background) }),
                        e.jsx(ga, { backgroundPattern: n, className: o?.backgroundPattern }),
                        a.children,
                    ],
                }),
            });
        };
    ((Ha.Fill = Aa),
        (Ha.Delta = Ca),
        (Ha.PreviewDelta = za),
        (Ha.NumberIndicators = Oa),
        (Ha.sizes = ia),
        (Ha.statuses = la),
        (Ha.animations = aa));
    const Qa = 'ProgressBar_wrapper_a944db13',
        Wa = [ca, ua],
        Ya = s.memo(function ({ progressBar: t, fill: n, delta: s, wrapperSpringProps: r }) {
            const o = $s({ from: { opacity: 1 }, ...r });
            return e.jsx(Ha, {
                ...t,
                children: e.jsxs(ir.div, {
                    className: Qa,
                    style: o,
                    children: [
                        e.jsx(Ha.Fill, { ...n }),
                        void 0 !== s && e.jsx(Ha.Delta, { ...s, steps: s?.steps ?? Wa }),
                    ],
                }),
            });
        }),
        Xa = 'ProgressStats_label_6e975df0',
        Za = 'ProgressStats_receivedInBattle_d3abd2fe',
        Ka = go('ProgressStatsLabel', Xa),
        Ja = s.forwardRef(({ className: t, text: n, transitionProps: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                className: N(Xa, t),
                ref: o,
                children: e.jsx(zo, { value: n, transition: s, children: J }),
            }),
        ),
        ei = s.forwardRef(({ value: t, className: n, total: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                ref: o,
                className: N(Za, n),
                children: e.jsx(ro, {
                    path: s ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    params: { value: t },
                }),
            }),
        ),
        ti = s.forwardRef(({ value: t, className: n, total: r, transition: o, target: a, ...i }, l) => {
            const c = yr(),
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
                    ...i,
                    ref: l,
                    className: N(Za, n),
                    children: e.jsx(zo, {
                        value: u,
                        transition: {
                            ...o,
                            enter: {
                                ...o.enter,
                                onRest: (...e) => {
                                    (!0 !== d.current.immediate &&
                                        c.play('numbersShown', { target: a ?? 'mission-progress:received-value' }),
                                        'function' == typeof o?.enter?.onRest && o.enter.onRest(...e));
                                },
                            },
                        },
                        children: (t) => e.jsx(ro, { path: t.textPath, params: { value: t.value } }),
                    }),
                })
            );
        }),
        ni = go('ProgressStats');
    ((ni.Label = Ka), (ni.ReceivedValue = ei), (ni.AnimatedReceivedValue = ti), (ni.AnimatedLabel = Ja));
    const si = s.createContext(void 0);
    function ri() {
        const e = s.useContext(si);
        return (me(void 0 !== e, 'useCondition must be used under conditionContext.Provider'), e);
    }
    const oi = s.createContext(void 0);
    function ai() {
        const e = s.useContext(oi);
        return (me(void 0 !== e, 'useMissionCard must be used under missionCardContext.Provider'), e);
    }
    const ii = {
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
        li = ['win', 'isAlive'],
        ci = k.cubicBezier(0.33, 0, 0.25, 1);
    const ui = {
        Condition: function (t) {
            const n = t.completed && t.multiQuest;
            return (
                t.lastCondition && n && t.animation && (t.rewardsGlowRef?.start(), t.completedMarkRef?.start()),
                e.jsx(ui.Root, {
                    condition: t.value,
                    children: e.jsxs(ui.Body, {
                        children: [
                            e.jsx(ui.Title, { questsAmount: t.questsAmount }),
                            e.jsx(ui.Description, { guiDisabledDescription: t.guiDisabledDescription }),
                            !n &&
                                e.jsx(ui.Progression, {
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
            return e.jsx(si.Provider, {
                value: t,
                children: e.jsx('div', { ...n, className: N(ii.content, t.completed && ii.content__completed) }),
            });
        },
        Description: function ({ guiDisabledDescription: t }) {
            const { description: n, conditionType: s } = ri();
            return s && li.includes(s)
                ? null
                : e.jsx('div', {
                      className: ii.description,
                      children: e.jsx(na, { text: M(t ?? n), className: ii.multiline }),
                  });
        },
        Title: function ({ questsAmount: t }) {
            const { title: n, icon: s, completed: r, progression: o } = ri(),
                { completed: a } = ai();
            if (!s && !n) return null;
            const i = (function ({ icon: e, conditionCompleted: t, questsAmount: n, questCompleted: s }) {
                if (e && e.default.path) return (n && n > 1) || (s && 1 === n) || t ? e : void 0;
            })({ icon: s, questCompleted: a, questsAmount: t, conditionCompleted: r });
            return e.jsxs('div', {
                className: ii.title,
                children: [
                    void 0 !== i &&
                        e.jsx('div', {
                            style: { backgroundImage: `url(${i.default.path})` },
                            className: N(ii.titleIcon, i.default.isGold && ii.titleIcon__gold),
                        }),
                    o ? E.formatNumber('integral', o.total) : n?.trim(),
                ],
            });
        },
        Body: go('MissionCardBody', ii.body),
        Progression: function ({ completed: t, rewardsGlowRef: n, completedMarkRef: r }) {
            const { progression: o } = ri(),
                { animation: a, immediateAnimation: i } = ai(),
                l = Us(),
                c = Us(),
                [[u, d], m] = s.useState(() => {
                    if (!o) return [0, 0];
                    const e = Math.max(0, o.current - o.earned);
                    return [e, e];
                });
            (s.useEffect(() => {
                var e;
                (a || i) && o && ((e = o.current >= o.total ? o.total : o.current), m(([, t]) => [t, e]));
            }, [a, i, o]),
                s.useEffect(() => {
                    t && !o && (a || i) && (r?.start(), n?.start());
                }, [o, t, r, n, a, i]),
                s.useEffect(() => {
                    i && (l.start(), c.start(), t && (r?.start(), n?.start()));
                }, [i, t, l, c, r, n]));
            const p = s.useMemo(() => {
                if (void 0 !== o)
                    return {
                        progress: {
                            value: d,
                            silent: i,
                            animationType: aa.grow,
                            status: la.doneStatic,
                            maxValue: o.total,
                            className: ii.progressbar,
                            maxValueAchieved: d === o.total,
                        },
                        delta: i
                            ? void 0
                            : {
                                  from: u,
                                  steps: u === d ? [] : [ca, ua],
                                  growAnimationConfig: { duration: 600, easing: ci },
                                  shrinkAnimationConfig: { duration: 600, easing: ci },
                                  onState(e) {
                                      e === da &&
                                          d === o.current &&
                                          o.earned > 0 &&
                                          (l.start(), c.start(), t && r?.start());
                                  },
                              },
                        fill: { animationConfig: { duration: i ? 0 : 600, easing: ci } },
                    };
            }, [i, u, d, o, t, l, c, r]);
            return o
                ? (me.log(
                      o.total >= o.current && o.current >= 0,
                      `Unexpected progression values: current(${o.current}), total(${o.total})`,
                  ),
                  e.jsxs('div', {
                      className: ii.progression,
                      children: [
                          void 0 !== p && e.jsx(Ya, { progressBar: p.progress, delta: p.delta, fill: p.fill }),
                          e.jsxs('div', {
                              className: ii.numberStats,
                              children: [
                                  e.jsx(Xo, {
                                      current: i ? o.current : d,
                                      total: o.total,
                                      className: ii.progressionCounter,
                                      transitionCurrent: { ref: l, immediate: i },
                                      transitionTotal: { immediate: i },
                                  }),
                                  e.jsx(ni.AnimatedReceivedValue, {
                                      value: E.formatNumber('integral', o.earned),
                                      transition: {
                                          ref: c,
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
    var di = ((e) => (
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
        ))(di || {}),
        mi = ((e) => (
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
        ))(mi || {}),
        pi = ((e) => (
            (e.MULTI = 'multi'),
            (e.CURRENCY = 'currency'),
            (e.PREMIUM_PLUS = 'premium_plus'),
            (e.NUMBER = 'number'),
            (e.STRING = 'string'),
            e
        ))(pi || {}),
        fi = ((e) => (
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
        ))(fi || {}),
        hi = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(hi || {}),
        gi = ((e) => (
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
        ))(gi || {});
    function _i(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    var bi,
        yi = { exports: {} };
    var vi,
        wi =
            (bi ||
                ((bi = 1),
                (vi = yi),
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
                    vi.exports ? ((t.default = t), (vi.exports = t)) : (window.classNames = t);
                })()),
            yi.exports);
    const xi = _i(wi),
        Ei = [
            di.Items,
            di.Equipment,
            di.Xp,
            di.XpFactor,
            di.Blueprints,
            di.BlueprintsAny,
            di.Goodies,
            di.Berths,
            di.Slots,
            di.Tokens,
            di.CrewSkins,
            di.CrewBooks,
            di.Customizations,
            di.CreditsFactor,
            di.TankmenXp,
            di.TankmenXpFactor,
            di.FreeXpFactor,
            di.BattleToken,
            di.LootBox,
            di.PremiumUniversal,
            di.NaturalCover,
            di.BpCoin,
            di.BattlePassSelectToken,
            di.BattlaPassFinalAchievement,
            di.BattleBadge,
            di.BonusX5,
            di.CrewBonusX3,
            di.EpicSelectToken,
            di.Comp7TokenWeeklyReward,
            di.DeluxeGift,
            di.BattleBoosterGift,
            di.OptionalDevice,
        ],
        Ri = [di.Gold, di.Credits, di.Crystal, di.FreeXp],
        Ci = [di.BattlePassPoints, di.EquipCoin],
        Pi = [di.PremiumPlus, di.Premium],
        Ti = ['engravings', 'backgrounds'],
        Si = ['engraving', 'background'],
        Ni = (e, t = mi.Small) => {
            const { name: n, type: s, value: r, icon: o, item: a, dogTagType: i } = e,
                l = t === mi.S24x24 ? mi.Small : t,
                c = ((e) => {
                    switch (e) {
                        case mi.S600x450:
                            return 'c_600x450';
                        case mi.S400x300:
                            return 'c_400x300';
                        case mi.S296x222:
                            return 'c_296x222';
                        case mi.S232x174:
                            return 'c_232x174';
                        case mi.Big:
                            return 'c_80x80';
                        case mi.Small:
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
                        const s = Ti[e];
                        if (s) {
                            const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(s),
                                o = r.$dyn(n);
                            return !o && Si[e] ? `${r.$dyn(Si[e])}` : `${o}`;
                        }
                        return (
                            console.error(
                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                            ),
                            ''
                        );
                    })(i, l, o);
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
        ki = [mi.Small, mi.Big],
        Ai = {
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
        Ii = p.resolve('images'),
        Mi = new Map([
            [mi.S24x24, mi.Small],
            [mi.S48x48, mi.Small],
        ]),
        ji = ({
            name: t,
            image: n,
            isPeriodic: s = !1,
            isFixedBoxSize: r = !0,
            size: o = mi.Big,
            special: a,
            value: i,
            valueType: l,
            title: c,
            style: u,
            className: d,
            classNames: m,
            tooltipArgs: f,
            periodicIconTooltipArgs: h,
        }) => {
            const g = Mi.has(o) ? Mi.get(o) : o,
                _ = ((e, t) => {
                    if (void 0 === t || !ki.includes(e)) return null;
                    switch (t) {
                        case fi.BATTLE_BOOSTER:
                        case fi.BATTLE_BOOSTER_REPLACE:
                            return hi.BATTLE_BOOSTER;
                    }
                })(o, a),
                b = ((e) => {
                    if (void 0 === e) return null;
                    switch (e) {
                        case fi.BATTLE_BOOSTER:
                            return gi.BATTLE_BOOSTER;
                        case fi.BATTLE_BOOSTER_REPLACE:
                            return gi.BATTLE_BOOSTER_REPLACE;
                        case fi.BUILT_IN_EQUIPMENT:
                            return gi.BUILT_IN_EQUIPMENT;
                        case fi.EQUIPMENT_PLUS:
                            return gi.EQUIPMENT_PLUS;
                        case fi.EQUIPMENT_TROPHY_BASIC:
                            return gi.EQUIPMENT_TROPHY_BASIC;
                        case fi.EQUIPMENT_TROPHY_UPGRADED:
                            return gi.EQUIPMENT_TROPHY_UPGRADED;
                        case fi.EQUIPMENT_MODERNIZED_UPGRADED_1:
                            return gi.EQUIPMENT_MODERNIZED_UPGRADED_1;
                        case fi.EQUIPMENT_MODERNIZED_UPGRADED_2:
                            return gi.EQUIPMENT_MODERNIZED_UPGRADED_2;
                        case fi.EQUIPMENT_MODERNIZED_UPGRADED_3:
                            return gi.EQUIPMENT_MODERNIZED_UPGRADED_3;
                        case fi.PROGRESSION_STYLE_UPGRADED_1:
                            return gi.PROGRESSION_STYLE_UPGRADED_1;
                        case fi.PROGRESSION_STYLE_UPGRADED_2:
                            return gi.PROGRESSION_STYLE_UPGRADED_2;
                        case fi.PROGRESSION_STYLE_UPGRADED_3:
                            return gi.PROGRESSION_STYLE_UPGRADED_3;
                        case fi.PROGRESSION_STYLE_UPGRADED_4:
                            return gi.PROGRESSION_STYLE_UPGRADED_4;
                        case fi.PROGRESSION_STYLE_UPGRADED_5:
                            return gi.PROGRESSION_STYLE_UPGRADED_5;
                        case fi.PROGRESSION_STYLE_UPGRADED_6:
                            return gi.PROGRESSION_STYLE_UPGRADED_6;
                        case fi.ATTACHMENT_RARE:
                            return gi.ATTACHMENT_RARE;
                        case fi.ATTACHMENT_EPIC:
                            return gi.ATTACHMENT_EPIC;
                        case fi.ATTACHMENT_LEGENDARY:
                            return gi.ATTACHMENT_LEGENDARY;
                    }
                })(a),
                y = ((e, t) => {
                    const n = p.resolve('intl');
                    if (void 0 === e) return null;
                    switch (t) {
                        case pi.MULTI: {
                            const t = Number(e);
                            return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                        }
                        case pi.CURRENCY:
                        case pi.NUMBER:
                            return n.formatNumber(n.numberFormats[0] || 'integral', Number(e));
                        case pi.PREMIUM_PLUS: {
                            const t = Number(e);
                            return isNaN(t) ? e : null;
                        }
                        default:
                            return e;
                    }
                })(i, l),
                v = pr({ contentId: f?.contentId ?? 0, args: f?.args, resId: f?.resId, decoratorId: f?.decoratorId }),
                w = fr({ header: h?.header, body: h?.body });
            return e.jsxs('div', {
                className: xi(Ai.base, Ai[`base__${o}`], !r && Ai.base__dynamicBox, d),
                style: u,
                ...v,
                children: [
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs('div', {
                                className: xi(Ai.image, r ? Ai.image__fixedBox : Ai[`image__${o}`], m?.image),
                                children: [
                                    _ &&
                                        e.jsx('div', {
                                            className: xi(Ai.highlight, m?.highlight),
                                            style: {
                                                backgroundImage: `url(${Ii.readOrEmpty(`quests.bonuses.${g}.${_}_highlight`)})`,
                                            },
                                        }),
                                    n &&
                                        e.jsx('div', {
                                            className: xi(Ai.icon, m?.rewardIcon),
                                            style: { backgroundImage: `url(${n})` },
                                        }),
                                    b &&
                                        e.jsx('div', {
                                            className: xi(Ai.overlay, m?.overlay),
                                            style: {
                                                backgroundImage: `url(${Ii.readOrEmpty(`quests.bonuses.${g}.${b}_overlay`)})`,
                                            },
                                        }),
                                ],
                            }),
                            y &&
                                e.jsx('div', {
                                    className: xi(Ai.info, Ai[`info__${t}`], l === pi.MULTI && Ai.info__multi, m?.info),
                                    children: y,
                                }),
                            c && e.jsx('div', { className: Ai.title, children: c }),
                        ],
                    }),
                    s && e.jsx('div', { className: xi(Ai.timer, m?.periodicIcon), ...w }),
                ],
            });
        },
        Di = Object.fromEntries(Object.entries(Vr).map(([e]) => [e, (e) => e]));
    function Oi(e, t = {}) {
        const n = Or(e, no);
        return String(Zr(n, Di, t));
    }
    function Bi(e, t = {}) {
        const n = p.resolve('strings').readOrEmpty(e);
        return 0 === n.length ? n : Oi(n, t);
    }
    const Fi = 'RewardsList_b956755b',
        $i = 'RewardsList_base__vertical_59db3c9f',
        Li = 'RewardsList_reward_fc200613',
        Ui = 'RewardsList_reward__vertical_5f09c6e0',
        zi = 'RewardsList_boxRewardClassName_882c908d',
        qi = { [mi.S24x24]: mi.Small, [mi.S48x48]: mi.Small },
        Vi = s.memo(function ({
            data: t,
            isFixedBoxSize: n,
            size: s = mi.Big,
            isVertical: r = !1,
            count: o,
            classMix: a,
            rewardItemClassMix: i,
            boxRewardTooltip: l,
            boxRewardValue: c,
            boxRewardClassName: u,
            boxRewardClassNames: d,
        }) {
            const m = p.resolve('strings'),
                f = p.resolve('images'),
                h =
                    'number' == typeof o && o < t.length
                        ? `${f.readOrEmpty(`quests.bonuses.${qi[s] ?? s}.default`)}`
                        : void 0,
                g =
                    c ||
                    Oi(to(m.readOrEmpty('tooltips.quests.awards.additional.bottom')), { count: t.length - (o || 0) });
            return e.jsx('div', {
                className: xi(Fi, r && $i, a),
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
                                                  className: xi(Li, r && Ui, i),
                                                  children: e.jsx(ji, { size: s, isFixedBoxSize: n, ...t }),
                                              },
                                              o,
                                          ),
                                      ),
                                  e.jsx('div', {
                                      className: xi(Li, r && Ui, i),
                                      children: e.jsx(ji, {
                                          name: 'more',
                                          isFixedBoxSize: n,
                                          image: h,
                                          size: s,
                                          value: g,
                                          tooltipArgs: l,
                                          className: xi(zi, u),
                                          classNames: d,
                                      }),
                                  }),
                              ],
                          })
                        : t.map((t, o) =>
                              e.jsx(
                                  'div',
                                  {
                                      className: xi(Li, r && Ui, i),
                                      children: e.jsx(ji, { size: s, isFixedBoxSize: n, ...t }),
                                  },
                                  o,
                              ),
                          ),
            });
        });
    function Gi({ bonuses: t, size: n, resId: r, boxRewardTooltipArgs: o, maxRewardsCount: a, questId: i, ...l }) {
        const c = s.useMemo(
                () =>
                    ce(t, (e) => {
                        return {
                            size: n,
                            name: e.name,
                            image: Ni(e, n),
                            value: e.value,
                            valueType:
                                ((o = e.name),
                                Ei.includes(o)
                                    ? pi.MULTI
                                    : Ri.includes(o)
                                      ? pi.CURRENCY
                                      : Ci.includes(o)
                                        ? pi.NUMBER
                                        : Pi.includes(o)
                                          ? pi.PREMIUM_PLUS
                                          : pi.STRING),
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
                        var t, s, o;
                    }),
                [t, n, r, i],
            ),
            u = void 0 === a ? t.length : a <= 1 ? 1 : t.length <= a ? a : a - 1,
            d = s.useMemo(
                () =>
                    o || {
                        contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                        args: { showFromIndex: u },
                        resId: r,
                    },
                [u, r, o],
            );
        return e.jsx(Vi, { ...l, data: c, count: u, boxRewardTooltip: d, size: n });
    }
    const Hi = 'AnimatedRewards_glowContainer_82630782',
        Qi = 'AnimatedRewards_c981a355',
        Wi = 'AnimatedRewards_rewardsWrapper_11b576b3',
        Yi = 'AnimatedRewards_glow_3a2cd010',
        Xi = 'AnimatedRewards_glowImage_4ecce597',
        Zi = k.cubicBezier(0.33, 0, 0.67, 1),
        Ki = k.cubicBezier(0.23, 0, 0.57, 1),
        Ji = s.forwardRef(function (
            {
                animationRef: t,
                immediateAnimation: n,
                maxRewardsCount: r,
                bonuses: o,
                boxRewardTooltipArgs: a,
                className: i,
                classNames: l,
                ...c
            },
            u,
        ) {
            const d = Us(),
                [m] = $s(() => ({
                    ref: t,
                    from: { opacity: 0, scale: 0.6 },
                    to: async (e) => {
                        (await e({ opacity: 1, scale: 0.8, config: { duration: 330, easing: Zi } }),
                            d.start(),
                            await e({ opacity: 0, scale: 1, config: { duration: 330, easing: Zi } }));
                    },
                })),
                [p] = $s(() => ({
                    ref: d,
                    immediate: n,
                    from: { opacity: 1 },
                    to: { opacity: 0.4, config: { duration: 330, easing: Ki } },
                }));
            return (
                s.useEffect(() => {
                    n && (t?.pause(), t?.start({ immediate: !0, to: { opacity: 0, scale: 1 } }), d.start());
                }, [n]),
                e.jsxs('div', {
                    ref: u,
                    className: N(Qi, i),
                    children: [
                        e.jsx(ir.div, {
                            style: p,
                            className: N(Wi, l?.rewardsWrapper),
                            children: e.jsx(Gi, { ...c, maxRewardsCount: r, bonuses: o, boxRewardTooltipArgs: a }),
                        }),
                        e.jsx('div', {
                            className: N(Hi, l?.glowContainer),
                            children: pe(r ? Math.min(r, o.length) : o.length, (t) =>
                                e.jsx(
                                    ir.div,
                                    {
                                        style: m,
                                        className: Yi,
                                        children: e.jsx(
                                            co,
                                            { path: 'post_battle.progression.reward_glow', className: Xi },
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
        el = p.resolve('views');
    function tl({ limit: e, rewardsTooltipResId: t, ...n }) {
        return {
            contentId: el.read((e) => e.lobby.tooltips.AdditionalBattlePassRewardsTooltip('resId')),
            args: { showFromIndex: e - 1, ...n },
            resId: t,
        };
    }
    function nl({
        completed: t,
        rewardsGlowRef: n,
        bonuses: s,
        maxRewardsCount: r,
        rewardsTooltipResId: o,
        immediateAnimation: a,
        questId: i,
        level: l,
        chapter: c,
        rewardType: u,
        className: d,
        rewardItemClassName: m,
    }) {
        const p = {
            bonuses: s,
            questId: i,
            maxRewardsCount: r,
            size: mi.Small,
            resId: o,
            boxRewardTooltipArgs: tl({
                limit: r,
                rewardsTooltipResId: o,
                rewardType: u,
                level: l ? l - 1 : void 0,
                chapter: c,
                questId: i,
            }),
            rewardItemClassMix: m,
        };
        return t
            ? e.jsx(Ji, {
                  ...p,
                  animationRef: n,
                  immediateAnimation: a,
                  className: d,
                  classNames: { glowContainer: d },
              })
            : e.jsx(Gi, { ...p, classMix: d });
    }
    const sl = 'CompletedMark_fc4eee08',
        rl = 'CompletedMark_glow_33775180',
        ol = k.cubicBezier(1, 0, 0.95, 1),
        al = k.cubicBezier(0.45, 0, 0.52, 1),
        il = s.forwardRef(function (
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
                classNames: m,
                onGlowRest: p,
                ...f
            },
            h,
        ) {
            const g = s.useRef(u),
                _ = yr(),
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
                            config: { duration: 100, easing: ol },
                            immediate: g.current?.immediate,
                            onStart: () => {
                                !0 !== g.current?.immediate &&
                                    _.play('showCheckMark', { target: t || 'mission-progress:checkmark' });
                            },
                        },
                        {
                            maskSize: '100% 100%',
                            opacity: 1,
                            config: { duration: 100, easing: ol },
                            immediate: g.current?.immediate,
                        },
                    ],
                    onRest: () => {
                        v.start({
                            to: [
                                { opacity: 0.6, config: { duration: 160, easing: al } },
                                { opacity: 0, config: { duration: 160, easing: al } },
                            ],
                            onRest: p,
                        });
                    },
                    ...g,
                }));
            return (
                s.useEffect(() => {
                    g.current = u;
                }, [u]),
                e.jsxs('div', {
                    className: N(sl, r),
                    children: [
                        e.jsx(ir.div, {
                            style: y,
                            className: N(rl, m?.glow),
                            children: e.jsx(co, {
                                width: c?.width ?? b.glow.width,
                                height: c?.height ?? b.glow.height,
                                path: c?.path ?? b.glow.path,
                            }),
                        }),
                        e.jsx(ir.div, {
                            ...f,
                            style: { ...w, ...d },
                            ref: h,
                            className: m?.icon,
                            children: e.jsx(co, {
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
        return e.jsx(co, { ...r, ref: o, width: n ?? i.size, height: s ?? i.size, path: t ?? i.path });
    });
    var ll = ((e) => (
        (e.EASY = 'easy'),
        (e.MEDIUM = 'medium'),
        (e.HARD = 'hard'),
        (e.BONUS = 'bonus'),
        (e.PREMIUM = 'premium'),
        (e.EPIC = 'epic'),
        e
    ))(ll || {});
    function cl({ value: t, questType: n, className: s }) {
        return t
            ? e.jsx('div', {
                  className: N(ii.iconImage, ii.iconImage__regular, n === ll.PREMIUM && ii.iconImage__gold, s),
                  style: { backgroundImage: `url(${t})` },
              })
            : null;
    }
    const ul = (e) =>
            m.createElement(
                'svg',
                { width: 13, height: 7, viewBox: '0 0 13 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
                m.createElement('path', { d: 'M9 7L13 3.49026L9 0V2.98374L0 3V4H9V7Z', fill: '#454443' }),
            ),
        dl = p.resolve('strings');
    function ml(t) {
        return 'none' === t.type
            ? e.jsx('div', { className: N(ii.separator, ii.separator__none, t.className) })
            : 'union' === t.type
              ? e.jsx('div', { className: N(ii.separator, ii.separator__union, t.className) })
              : 'or' === t.type
                ? e.jsxs('div', {
                      className: N(ii.separator, ii.separator__or, t.className),
                      children: [
                          e.jsx(ul, { width: 16, height: 16, className: ii.invertedArrow }),
                          dl.readOrEmpty('battle_results.conditions.type.or'),
                          e.jsx(ul, { width: 16, height: 16, className: ii.arrow }),
                      ],
                  })
                : e.jsx('div', {
                      className: N(ii.separator, ii.separator__and, t.className),
                      children: dl.readOrEmpty('battle_results.conditions.type.and'),
                  });
    }
    function pl(t) {
        if (!t.children) return null;
        const n = s.Children.toArray(t.children);
        return e.jsx(e.Fragment, {
            children: ue(
                n,
                (e) => null != e,
                (n, r) => e.jsxs(s.Fragment, { children: [r > 0 && e.jsx(ml, { ...t }), n] }, r),
            ),
        });
    }
    const fl = { 1: 5, 2: 5, 3: 3 };
    function hl(e) {
        return 'item' === e.type ? 1 : e.groups.reduce((e, t) => e + hl(t), 0);
    }
    function gl(e) {
        if ('item' === e.type) return e.condition?.icon;
        for (const t of e.groups) {
            const e = gl(t);
            if (e) return e;
        }
    }
    function _l(t) {
        const n = t.value;
        return 'item' === n.type
            ? e.jsx(
                  ui.Condition,
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
            : e.jsx(pl, {
                  type: n.separate,
                  children: ue(
                      n.groups,
                      (e) => 'items' === e.type || e.index < 5,
                      (s, r) =>
                          e.jsx(
                              _l,
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
    const bl = 'R.images.gui.maps.icons.post_battle.general_quest',
        yl = { default: { path: `${bl}_32` }, medium: { path: bl } },
        vl = s.memo(function (t) {
            const n = Us(),
                r = Us(),
                { animation: o, immediateAnimation: i } = ai(),
                { icon: l, questsAmount: c } = s.useMemo(() => {
                    const e = hl(t.value);
                    return { icon: e > 1 ? (t.generalIcon ?? yl) : (gl(t.value) ?? yl), questsAmount: e };
                }, [t.generalIcon, t.value]),
                u = a.useAdaptive(l.default, l),
                d = fl[c] ?? 0,
                m = c > 3 ? 'groups__manyQuests' : 3 === c ? 'groups__threeQuests' : 'groups__twoQuests';
            return e.jsxs('div', {
                className: N(ii.groups, c > 4 && ii.groups__overflow, c > 1 && ii[m]),
                children: [
                    e.jsx('div', {
                        className: ii.iconContainer,
                        children: t.completed
                            ? e.jsx(il, {
                                  animationRef: n,
                                  className: ii.completedMark,
                                  classNames: { icon: ii.completedMarkIcon },
                                  springProps: { immediate: i, delay: 170 },
                              })
                            : e.jsx(cl, { value: u.path, questType: t.questType }),
                    }),
                    e.jsx('div', {
                        className: ii.questsWithRewards,
                        children: e.jsxs(pl, {
                            type: t.separate ?? 'none',
                            children: [
                                e.jsx('div', {
                                    className: ii.questsContainer,
                                    children: e.jsx(_l, {
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
                                            e.jsx('div', { className: ii.gap }),
                                            e.jsx('div', {
                                                className: ii.rewardsContainer,
                                                children: e.jsx(nl, {
                                                    completed: t.completed,
                                                    rewardsGlowRef: r,
                                                    immediateAnimation: i,
                                                    bonuses: t.bonuses,
                                                    maxRewardsCount: d,
                                                    rewardsTooltipResId: t.rewardsTooltipResId,
                                                    questId: t.questId,
                                                    className: ii.rewards,
                                                    rewardItemClassName: ii.reward,
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
    function wl({ completed: t, progress: n, animation: r, immediateAnimation: o, target: a, ...i }) {
        const l = yr(),
            c = s.useMemo(() => ({ completed: t, animation: r, immediateAnimation: o }), [t, r, o]);
        return e.jsx(oi.Provider, {
            value: c,
            children: e.jsx(Ko, {
                ...i,
                onMouseEnter: (e) => {
                    (i.onMouseEnter?.(e),
                        !0 !== i.disabled &&
                            l.play('mouse-enter', { target: a || 'mission-progress:mission-card', original: e }));
                },
                progressionCountProps: n,
                className: N(ii.base, t && ii.base__completed, i.className),
                classNames: { content: ii.cardContent, ...i.classNames },
            }),
        });
    }
    ((wl.Content = ui), (wl.Groups = vl), (wl.Separators = pl));
    const xl = p.resolve('strings'),
        El = p.resolve('aliases').read((e) => e.battle_results.progression.BattleMatters('resId')),
        Rl = { rootId: El },
        [Cl, Pl] = (
            (t = 'DataLayerProvider') =>
            (n, r, o) => {
                const a = s.createContext(null);
                function i(i) {
                    const { mode: l, options: c, children: u, mocks: d } = i,
                        m = s.useContext(Sr),
                        p = l ?? m.mode,
                        f = d ?? m.mocks,
                        h = s.useRef([]),
                        g = o?.useRequires?.(),
                        _ = Pe((e, s, a) => {
                            const l =
                                    'real' !== e && a
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
                                          })(a.getter, s)
                                        : X(s, { name: t }),
                                c = (t) => ('mocks' === e ? a?.getter(t, s) : l.readByPath(t)),
                                u = (e) => h.current.push(e),
                                d = 'initial' in i && { initial: o?.initial?.(i.initial) },
                                m = n({
                                    ...d,
                                    mode: e,
                                    readByPath: c,
                                    requires: g,
                                    externalModel: l,
                                    observableModel: kr(l, e, c),
                                    cleanup: u,
                                }),
                                p = { ...d, mode: e, model: m, externalModel: l, cleanup: u, requires: g },
                                f = 'mocks' === e && a?.controls ? a.controls(p) : {};
                            return {
                                model: m,
                                controls: { ...r?.(p), ...f },
                                externalModel: l,
                                mode: e,
                                rootId: s?.rootId ?? 0,
                            };
                        }),
                        b = s.useRef(!1),
                        [y, v] = s.useState(p);
                    s.useEffect(() => {
                        v(p);
                    }, [p]);
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
                        e.jsx(a.Provider, { value: w, children: u })
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
                        ce(t.battleMatters.get(), (e) => {
                            const t = e.state === ve.Done;
                            return {
                                number: e.number,
                                completed: t,
                                conditionContext: {
                                    id: String(e.number),
                                    description: xl.readOrEmpty(
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
        Tl = {
            base: 'BattleMatters_cd43d7e5',
            headContainer: 'BattleMatters_headContainer_4f657335',
            number: 'BattleMatters_number_5ae08c3e',
            condition: 'BattleMatters_condition_773e729e',
            rewards: 'BattleMatters_rewards_8b86d74c',
            rewardItem: 'BattleMatters_rewardItem_a3a4a78b',
        },
        Sl = p.resolve('strings'),
        Nl = i.observer(function ({ quest: t, animation: n, immediateAnimation: s }) {
            const r = Us(),
                o = Us(),
                a = fr({ body: Bi('battle_results.missionsProgress.battleMatters.doneInfo', { name: t.number }) });
            return e.jsxs('div', {
                className: Tl.base,
                children: [
                    e.jsx('div', {
                        className: Tl.headContainer,
                        children: t.completed
                            ? e.jsx(il, {
                                  ...a,
                                  animationRef: o,
                                  className: Tl.completedMark,
                                  springProps: { immediate: s },
                              })
                            : e.jsx('div', { className: Tl.number, children: t.number }),
                    }),
                    e.jsx('div', {
                        ...(t.completed && a),
                        className: Tl.condition,
                        children: e.jsx(ui.Condition, {
                            value: t.conditionContext,
                            rewardsGlowRef: r,
                            completedMarkRef: o,
                            completed: t.completed,
                            animation: n,
                        }),
                    }),
                    e.jsx('div', {
                        className: Tl.rewards,
                        children: e.jsx(nl, {
                            rewardsGlowRef: r,
                            completed: t.completed,
                            maxRewardsCount: 5,
                            bonuses: t.rewards,
                            rewardItemClassName: Tl.rewardItem,
                            rewardsTooltipResId: El,
                            immediateAnimation: s,
                        }),
                    }),
                ],
            });
        }),
        kl = i.observer(function ({ animation: t, immediateAnimation: n }) {
            const { model: r, controls: o } = Pl(),
                a = r.navigationEnabled.get(),
                i = s.useCallback(() => {
                    a && o.navigate();
                }, [o, a]);
            return e.jsx(wl, {
                animation: t,
                immediateAnimation: n,
                target: 'mission-progress:battle-matters:mission-card',
                disabled: !a,
                title: E.toUpperCase(Sl.readOrEmpty('battle_results.missionsProgress.battleMatters.title')),
                onButtonAction: i,
                onClick: i,
                actionTooltipParams: { body: Sl.readOrEmpty('battle_results.progression.linkBtn.info') },
                children: ce(r.quests(), (s) => e.jsx(Nl, { quest: s, animation: t, immediateAnimation: n }, s.number)),
            });
        }),
        Al = {
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
        Il = { ...Al, name: 'equipCoin', label: 'Боны', value: '1000' },
        Ml = { ...Al, name: 'freeXP', label: 'Свободный опыт', value: '1000' },
        jl = { ...Al, name: 'credits', label: 'Кредиты', value: '400000' },
        Dl = { ...Al, name: 'xpFactor', label: 'Коэффициент боевого опыта', value: '3.0' },
        Ol = [Dl, jl, Ml, Il, Dl],
        Bl = {
            navigationEnabled: !0,
            battleMatters: [
                { number: 11, state: ve.Done, currentProgress: -1, lastSeenProgress: -1, maxProgress: -1, rewards: Ol },
                {
                    number: 19,
                    state: ve.InProgress,
                    currentProgress: 4,
                    lastSeenProgress: 1,
                    maxProgress: 5,
                    rewards: Ol,
                },
            ],
            onNavigate: K,
        },
        Fl = {
            getter:
                (($l = Bl),
                (e, t) => {
                    const n = Z(e, t);
                    return n
                        ? (function (e, t) {
                              const n = e.split('.');
                              let s = t;
                              for (const r of n) s = s?.[r];
                              return s;
                          })(n, $l)
                        : $l;
                }),
        };
    var $l;
    const Ll = new (class {
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
        .addWithProps(Cl, { options: Rl, mode: 'real', mocks: Fl })
        .addWithProps(
            function (t) {
                return e.jsx(oo, {
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
                    ((Ul = {
                        showCheckMark: { 'mission-progress:checkmark': 'umg_hub_quest_complete' },
                        numbersShown: {
                            'mission-progress:received-value': 'gui_pbs_missions_progress_stats',
                            'mission-progress:progress-stats': 'gui_pbs_missions_progress_stats',
                        },
                    }),
                    Object.entries(Ul).reduce(
                        (e, [t, n]) => (
                            (e[t] = (e) => {
                                e && e.target in n ? $.sound(n[e.target]) : hr[t]?.(e);
                            }),
                            e
                        ),
                        {},
                    )),
            },
        );
    var Ul, zl;
    function ql(t) {
        return Ll.render(e.jsx(kl, { ...t }));
    }
    exports.plugin =
        ((zl = async ({ url: t }) => {
            const n = new ne();
            return {
                async init() {
                    var s,
                        r,
                        o,
                        a,
                        i,
                        l,
                        c,
                        d = [];
                    try {
                        const s = Ee(
                            `${(function (e, t = '/') {
                                let n = -1;
                                for (let s = 0; s < e.length; s++) {
                                    const r = e[s];
                                    if ((r === t && (n = s), '.' === r)) return e.slice(0, n);
                                }
                                return e;
                            })(t)}/battle_matters.css`,
                        );
                        (n.add(s.cleanup), await s.promise.catch(console.error));
                        const r = X(Rl, { name: 'BattleMattersProgressDataLayer' }),
                            o =
                                (u(d, ((c = r.dispose), { [Symbol.dispose]: c })),
                                (function (e, t) {
                                    if (Array.isArray(e)) return e.some(t);
                                    for (let n = 0; n < e.length; n++) if (t(le(e, n), n, e)) return !0;
                                    return !1;
                                })(r.readByPath('battleMatters'), (e) => e.state === ve.Done));
                        return {
                            animated: !0,
                            component: ql,
                            notifications: o
                                ? [
                                      {
                                          id: ye(),
                                          item: e.jsx(ro, {
                                              path: 'battle_results.missionsProgress.notificationsTabs.battleMatters',
                                          }),
                                      },
                                  ]
                                : void 0,
                            categoryOrder: 900,
                            completed: o,
                        };
                    } catch (f) {
                        var m = f,
                            p = !0;
                    } finally {
                        ((s = d),
                            (r = m),
                            (o = p),
                            (a =
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
                                (r = o ? new a(e, r, 'An error was suppressed during disposal') : ((o = !0), e))),
                            (l = (e) => {
                                for (; (e = s.pop()); )
                                    try {
                                        var t = e[1] && e[1].call(e[2]);
                                        if (e[0]) return Promise.resolve(t).then(l, (e) => (i(e), l()));
                                    } catch (n) {
                                        i(n);
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
        async (e) => ({ ...(await zl(e)), id: e.id }));
});

export default exports;
