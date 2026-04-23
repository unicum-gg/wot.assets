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
    class S {
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
    function P(e) {
        var t,
            n,
            s = '';
        if ('string' == typeof e || 'number' == typeof e) s += e;
        else if ('object' == typeof e)
            if (Array.isArray(e)) {
                var r = e.length;
                for (t = 0; t < r; t++) e[t] && (n = P(e[t])) && (s && (s += ' '), (s += n));
            } else for (n in e) e[n] && (s && (s += ' '), (s += n));
        return s;
    }
    function k() {
        for (var e, t, n = 0, s = '', r = arguments.length; n < r; n++)
            (e = arguments[n]) && (t = P(e)) && (s && (s += ' '), (s += t));
        return s;
    }
    p.register({
        strings: t.asFunction(() => new T()).singleton(),
        images: t.asFunction(() => new g(window.R.images.gui.maps.icons)).singleton(),
        atlases: t.asFunction(() => new g(window.R.atlases)).singleton(),
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
    const ve = () => {};
    function we(t) {
        const n = t;
        return s.forwardRef(function (t, s) {
            const o = t,
                a = r.useAdaptive(o, o.adaptive),
                { path: i, ...l } = a,
                c = a.images ?? p.resolve('images'),
                u = { ...l, ref: s };
            {
                const t = i ? c.readOr(i, ve, 'warn') : void 0;
                return t ? e.jsx(n, { ...u, src: t }) : e.jsx(n, { ...u, unknown: !0 });
            }
        });
    }
    const xe = {
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
                unknownStyle: u = xe,
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
    const Ee = we(
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
                    unknownStyle: d = xe,
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
    we(
        s.forwardRef(function (t, n) {
            const { width: s, height: r, src: o, unselectable: a, unknown: i, unknownStyle: l = xe, ...c } = t;
            return t.unknown
                ? e.jsx('div', { ...c, style: { width: t.width, height: t.height, ...l } })
                : e.jsx('img', { ...c, ref: n, src: o, width: s, height: r });
        }),
    );
    const Re = 'Divider_80a19f4b';
    function Ce({ classNames: t }) {
        return e.jsx('div', {
            className: k(Re, t?.base),
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
        click: Se('play'),
        'hot-key': Se('play'),
        'mouse-enter': Se('highlight'),
        increaseAmount: Se('cons_ammo_single_plus'),
        decreaseAmount: Se('cons_ammo_single_minus'),
        increaseAmountRoll: Se('cons_ammo_roll_plus'),
        decreaseAmountRoll: Se('cons_ammo_roll_minus'),
        close: Se('cancelcloseno'),
        'show-context-menu': Se('tabb'),
        progressSimple: Se('gui_hangar_progressbar_simple'),
        increaseDelta: Se('gui_hangar_progressbar_delta_increase'),
        decreaseDelta: Se('gui_hangar_progressbar_delta_decrease'),
        increaseDeltaMax: Se('gui_hangar_progressbar_delta_max'),
        pointerGrab: Se('gui_hangar_progressbar_pointer_grab'),
        pointerDrag: Se('gui_hangar_progressbar_pointer_drag'),
    };
    function Se(e) {
        return () => {
            $.sound(e);
        };
    }
    const Pe = s.createContext(null);
    function ke({ severity: t = 'warn', overrides: n, silent: r = !1, children: o }) {
        const a = s.useMemo(() => ({ ...Te, ...n }), [n]),
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
        return e.jsx(Pe.Provider, { value: i, children: o });
    }
    function Ne() {
        const e = s.useContext(Pe);
        if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
        return e;
    }
    const Ae = (e) => (t) => {
            e.forEach((e) =>
                ((e, t) => {
                    e && ('function' == typeof e ? e(t) : (e.current = t));
                })(e, t),
            );
        },
        Ie = (e) => {
            const t = s.useRef(void 0);
            return (
                s.useEffect(() => {
                    t.current = e;
                }, [e]),
                t.current
            );
        },
        Me = [];
    function je(e) {
        const t = s.useRef(e);
        return (
            s.useLayoutEffect(() => {
                t.current = e;
            }),
            s.useCallback((...e) => (0, t.current)(...e), Me)
        );
    }
    function De(e) {
        s.useEffect(() => e, []);
    }
    s.createContext(void 0);
    var Oe = Ke(),
        Be = (e) => We(e, Oe),
        Fe = Ke();
    Be.write = (e) => We(e, Fe);
    var $e = Ke();
    Be.onStart = (e) => We(e, $e);
    var Le = Ke();
    Be.onFrame = (e) => We(e, Le);
    var Ue = Ke();
    Be.onFinish = (e) => We(e, Ue);
    var ze = [];
    Be.setTimeout = (e, t) => {
        const n = Be.now() + t,
            s = () => {
                const e = ze.findIndex((e) => e.cancel == s);
                (~e && ze.splice(e, 1), (He -= ~e ? 1 : 0));
            },
            r = { time: n, handler: e, cancel: s };
        return (ze.splice(qe(n), 0, r), (He += 1), Ye(), r);
    };
    var qe = (e) => ~(~ze.findIndex((t) => t.time > e) || ~ze.length);
    ((Be.cancel = (e) => {
        ($e.delete(e), Le.delete(e), Ue.delete(e), Oe.delete(e), Fe.delete(e));
    }),
        (Be.sync = (e) => {
            ((Qe = !0), Be.batchedUpdates(e), (Qe = !1));
        }),
        (Be.throttle = (e) => {
            let t;
            function n() {
                try {
                    e(...t);
                } finally {
                    t = null;
                }
            }
            function s(...e) {
                ((t = e), Be.onStart(n));
            }
            return (
                (s.handler = e),
                (s.cancel = () => {
                    ($e.delete(n), (t = null));
                }),
                s
            );
        }));
    var Ve = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
    ((Be.use = (e) => (Ve = e)),
        (Be.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
        (Be.batchedUpdates = (e) => e()),
        (Be.catch = console.error),
        (Be.frameLoop = 'always'),
        (Be.advance = () => {
            'demand' !== Be.frameLoop
                ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
                : Ze();
        }));
    var Ge = -1,
        He = 0,
        Qe = !1;
    function We(e, t) {
        Qe ? (t.delete(e), e(0)) : (t.add(e), Ye());
    }
    function Ye() {
        Ge < 0 && ((Ge = 0), 'demand' !== Be.frameLoop && Ve(Xe));
    }
    function Xe() {
        ~Ge && (Ve(Xe), Be.batchedUpdates(Ze));
    }
    function Ze() {
        const e = Ge;
        Ge = Be.now();
        const t = qe(Ge);
        (t && (Je(ze.splice(0, t), (e) => e.handler()), (He -= t)),
            He
                ? ($e.flush(), Oe.flush(e ? Math.min(64, Ge - e) : 16.667), Le.flush(), Fe.flush(), Ue.flush())
                : (Ge = -1));
    }
    function Ke() {
        let e = new Set(),
            t = e;
        return {
            add(n) {
                ((He += t != e || e.has(n) ? 0 : 1), e.add(n));
            },
            delete: (n) => ((He -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
            flush(n) {
                t.size && ((e = new Set()), (He -= t.size), Je(t, (t) => t(n) && e.add(t)), (He += e.size), (t = e));
            },
        };
    }
    function Je(e, t) {
        e.forEach((e) => {
            try {
                t(e);
            } catch (n) {
                Be.catch(n);
            }
        });
    }
    var et = Object.defineProperty,
        tt = {};
    function nt() {}
    ((e, t) => {
        for (var n in t) et(e, n, { get: t[n], enumerable: !0 });
    })(tt, {
        assign: () => gt,
        colors: () => pt,
        createStringInterpolator: () => ct,
        skipAnimation: () => ft,
        to: () => ut,
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
    function rt(e, t) {
        if (st.arr(e)) {
            if (!st.arr(t) || e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
        }
        return e === t;
    }
    var ot = (e, t) => e.forEach(t);
    function at(e, t, n) {
        if (st.arr(e)) for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s);
    }
    var it = (e) => (st.und(e) ? [] : st.arr(e) ? e : [e]);
    function lt(e, t) {
        if (e.size) {
            const n = Array.from(e);
            (e.clear(), ot(n, t));
        }
    }
    var ct,
        ut,
        dt = (e, ...t) => lt(e, (e) => e(...t)),
        mt = () =>
            'undefined' == typeof window ||
            !window.navigator ||
            /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        pt = null,
        ft = !1,
        ht = nt,
        gt = (e) => {
            (e.to && (ut = e.to),
                e.now && (Be.now = e.now),
                void 0 !== e.colors && (pt = e.colors),
                null != e.skipAnimation && (ft = e.skipAnimation),
                e.createStringInterpolator && (ct = e.createStringInterpolator),
                e.requestAnimationFrame && Be.use(e.requestAnimationFrame),
                e.batchedUpdates && (Be.batchedUpdates = e.batchedUpdates),
                e.willAdvance && (ht = e.willAdvance),
                e.frameLoop && (Be.frameLoop = e.frameLoop));
        },
        _t = new Set(),
        bt = [],
        yt = [],
        vt = 0,
        wt = {
            get idle() {
                return !_t.size && !bt.length;
            },
            start(e) {
                vt > e.priority ? (_t.add(e), Be.onStart(xt)) : (Et(e), Be(Ct));
            },
            advance: Ct,
            sort(e) {
                if (vt) Be.onFrame(() => wt.sort(e));
                else {
                    const t = bt.indexOf(e);
                    ~t && (bt.splice(t, 1), Rt(e));
                }
            },
            clear() {
                ((bt = []), _t.clear());
            },
        };
    function xt() {
        (_t.forEach(Et), _t.clear(), Be(Ct));
    }
    function Et(e) {
        bt.includes(e) || Rt(e);
    }
    function Rt(e) {
        bt.splice(
            (function (e, t) {
                const n = e.findIndex(t);
                return n < 0 ? e.length : n;
            })(bt, (t) => t.priority > e.priority),
            0,
            e,
        );
    }
    function Ct(e) {
        const t = yt;
        for (let n = 0; n < bt.length; n++) {
            const s = bt[n];
            ((vt = s.priority), s.idle || (ht(s), s.advance(e), s.idle || t.push(s)));
        }
        return ((vt = 0), ((yt = bt).length = 0), (bt = t).length > 0);
    }
    var Tt = '[-+]?\\d*\\.?\\d+',
        St = Tt + '%';
    function Pt(...e) {
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var kt = new RegExp('rgb' + Pt(Tt, Tt, Tt)),
        Nt = new RegExp('rgba' + Pt(Tt, Tt, Tt, Tt)),
        At = new RegExp('hsl' + Pt(Tt, St, St)),
        It = new RegExp('hsla' + Pt(Tt, St, St, Tt)),
        Mt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        jt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Dt = /^#([0-9a-fA-F]{6})$/,
        Ot = /^#([0-9a-fA-F]{8})$/;
    function Bt(e, t, n) {
        return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        );
    }
    function Ft(e, t, n) {
        const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
            r = 2 * n - s,
            o = Bt(r, s, e + 1 / 3),
            a = Bt(r, s, e),
            i = Bt(r, s, e - 1 / 3);
        return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * i) << 8);
    }
    function $t(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
    }
    function Lt(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
    }
    function Ut(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
    }
    function zt(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
    }
    function qt(e) {
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
                    : (t = kt.exec(e))
                      ? (($t(t[1]) << 24) | ($t(t[2]) << 16) | ($t(t[3]) << 8) | 255) >>> 0
                      : (t = Nt.exec(e))
                        ? (($t(t[1]) << 24) | ($t(t[2]) << 16) | ($t(t[3]) << 8) | Ut(t[4])) >>> 0
                        : (t = Mt.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                          : (t = Ot.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = jt.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = At.exec(e))
                                ? (255 | Ft(Lt(t[1]), zt(t[2]), zt(t[3]))) >>> 0
                                : (t = It.exec(e))
                                  ? (Ft(Lt(t[1]), zt(t[2]), zt(t[3])) | Ut(t[4])) >>> 0
                                  : null;
        })(e);
        if (null === t) return e;
        t = t || 0;
        return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
    }
    var Vt = (e, t, n) => {
        if (st.fun(e)) return e;
        if (st.arr(e)) return Vt({ range: e, output: t, extrapolate: n });
        if (st.str(e.output[0])) return ct(e);
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
    var Gt = { linear: (e) => e, easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2) },
        Ht = Symbol.for('FluidValue.get'),
        Qt = Symbol.for('FluidValue.observers'),
        Wt = (e) => Boolean(e && e[Ht]),
        Yt = (e) => (e && e[Ht] ? e[Ht]() : e),
        Xt = (e) => e[Qt] || null;
    function Zt(e, t) {
        const n = e[Qt];
        n &&
            n.forEach((e) => {
                !(function (e, t) {
                    e.eventObserved ? e.eventObserved(t) : e(t);
                })(e, t);
            });
    }
    var Kt = class {
            constructor(e) {
                if (!e && !(e = this.get)) throw Error('Unknown getter');
                Jt(this, e);
            }
        },
        Jt = (e, t) => sn(e, Ht, t);
    function en(e, t) {
        if (e[Ht]) {
            let n = e[Qt];
            (n || sn(e, Qt, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
        }
        return t;
    }
    function tn(e, t) {
        const n = e[Qt];
        if (n && n.has(t)) {
            const s = n.size - 1;
            (s ? n.delete(t) : (e[Qt] = null), e.observerRemoved && e.observerRemoved(s, t));
        }
    }
    var nn,
        sn = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
        rn = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        on = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        an = new RegExp(`(${rn.source})(%|[a-z]+)`, 'i'),
        ln = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        cn = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        un = (e) => {
            const [t, n] = dn(e);
            if (!t || mt()) return e;
            const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
            if (s) return s.trim();
            if (n && n.startsWith('--')) {
                const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
                return t || e;
            }
            return n && cn.test(n) ? un(n) : n || e;
        },
        dn = (e) => {
            const t = cn.exec(e);
            if (!t) return [,];
            const [, n, s] = t;
            return [n, s];
        },
        mn = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
        pn = (e) => {
            nn || (nn = pt ? new RegExp(`(${Object.keys(pt).join('|')})(?!\\w)`, 'g') : /^\b$/);
            const t = e.output.map((e) => Yt(e).replace(cn, un).replace(on, qt).replace(nn, qt)),
                n = t.map((e) => e.match(rn).map(Number)),
                s = n[0].map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                ),
                r = s.map((t) => Vt({ ...e, output: t }));
            return (e) => {
                const n = !an.test(t[0]) && t.find((e) => an.test(e))?.replace(rn, '');
                let s = 0;
                return t[0].replace(rn, () => `${r[s++](e)}${n || ''}`).replace(ln, mn);
            };
        },
        fn = 'react-spring: ',
        hn = (e) => {
            const t = e;
            let n = !1;
            if ('function' != typeof t) throw new TypeError(`${fn}once requires a function parameter`);
            return (...e) => {
                n || (t(...e), (n = !0));
            };
        },
        gn = hn(console.warn);
    var _n = hn(console.warn);
    function bn(e) {
        return st.str(e) && ('#' == e[0] || /\d/.test(e) || (!mt() && cn.test(e)) || e in (pt || {}));
    }
    var yn = mt() ? s.useEffect : s.useLayoutEffect;
    function vn() {
        const e = s.useState()[1],
            t = (() => {
                const e = s.useRef(!1);
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
            })();
        return () => {
            t.current && e(Math.random());
        };
    }
    var wn = (e) => s.useEffect(e, xn),
        xn = [];
    function En(e) {
        const t = s.useRef();
        return (
            s.useEffect(() => {
                t.current = e;
            }),
            t.current
        );
    }
    var Rn = Symbol.for('Animated:node'),
        Cn = (e) => e && e[Rn],
        Tn = (e, t) => {
            return (
                (n = e),
                (s = Rn),
                (r = t),
                Object.defineProperty(n, s, { value: r, writable: !0, configurable: !0 })
            );
            var n, s, r;
        },
        Sn = (e) => e && e[Rn] && e[Rn].getPayload(),
        Pn = class {
            constructor() {
                Tn(this, this);
            }
            getPayload() {
                return this.payload || [];
            }
        },
        kn = class extends Pn {
            constructor(e) {
                (super(),
                    (this._value = e),
                    (this.done = !0),
                    (this.durationProgress = 0),
                    st.num(this._value) && (this.lastPosition = this._value));
            }
            static create(e) {
                return new kn(e);
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
        Nn = class extends kn {
            constructor(e) {
                (super(0), (this._string = null), (this._toString = Vt({ output: [e, e] })));
            }
            static create(e) {
                return new Nn(e);
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
                (e && (this._toString = Vt({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
            }
        },
        An = { dependencies: null },
        In = class extends Pn {
            constructor(e) {
                (super(), (this.source = e), this.setValue(e));
            }
            getValue(e) {
                const t = {};
                return (
                    at(this.source, (n, s) => {
                        var r;
                        (r = n) && r[Rn] === r ? (t[s] = n.getValue(e)) : Wt(n) ? (t[s] = Yt(n)) : e || (t[s] = n);
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
                    return (at(e, this._addToPayload, t), Array.from(t));
                }
            }
            _addToPayload(e) {
                An.dependencies && Wt(e) && An.dependencies.add(e);
                const t = Sn(e);
                t && ot(t, (e) => this.add(e));
            }
        },
        Mn = class extends In {
            constructor(e) {
                super(e);
            }
            static create(e) {
                return new Mn(e);
            }
            getValue() {
                return this.source.map((e) => e.getValue());
            }
            setValue(e) {
                const t = this.getPayload();
                return e.length == t.length
                    ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                    : (super.setValue(e.map(jn)), !0);
            }
        };
    function jn(e) {
        return (bn(e) ? Nn : kn).create(e);
    }
    function Dn(e) {
        const t = Cn(e);
        return t ? t.constructor : st.arr(e) ? Mn : bn(e) ? Nn : kn;
    }
    var On = (e, t) => {
            const n = !st.fun(e) || (e.prototype && e.prototype.isReactComponent);
            return s.forwardRef((r, o) => {
                const a = s.useRef(null),
                    i =
                        n &&
                        s.useCallback(
                            (e) => {
                                a.current = (function (e, t) {
                                    e && (st.fun(e) ? e(t) : (e.current = t));
                                    return t;
                                })(o, e);
                            },
                            [o],
                        ),
                    [l, c] = (function (e, t) {
                        const n = new Set();
                        ((An.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                        return ((e = new In(e)), (An.dependencies = null), [e, n]);
                    })(r, t),
                    u = vn(),
                    d = () => {
                        const e = a.current;
                        if (n && !e) return;
                        !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && u();
                    },
                    p = new Bn(d, c),
                    f = s.useRef();
                (yn(
                    () => (
                        (f.current = p),
                        ot(c, (e) => en(e, p)),
                        () => {
                            f.current && (ot(f.current.deps, (e) => tn(e, f.current)), Be.cancel(f.current.update));
                        }
                    ),
                ),
                    s.useEffect(d, []),
                    wn(() => () => {
                        const e = f.current;
                        ot(e.deps, (t) => tn(t, e));
                    }));
                const h = t.getComponentProps(l.getValue());
                return m.createElement(e, { ...h, ref: i });
            });
        },
        Bn = class {
            constructor(e, t) {
                ((this.update = e), (this.deps = t));
            }
            eventObserved(e) {
                'change' == e.type && Be.write(this.update);
            }
        };
    var Fn = Symbol.for('AnimatedComponent'),
        $n = (e) => (st.str(e) ? e : e && st.str(e.displayName) ? e.displayName : (st.fun(e) && e.name) || null);
    function Ln(e, ...t) {
        return st.fun(e) ? e(...t) : e;
    }
    var Un = (e, t) => !0 === e || !!(t && e && (st.fun(e) ? e(t) : it(e).includes(t))),
        zn = (e, t) => (st.obj(e) ? t && e[t] : e),
        qn = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
        Vn = (e) => e,
        Gn = (e, t = Vn) => {
            let n = Hn;
            e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
            const s = {};
            for (const r of n) {
                const n = t(e[r], r);
                st.und(n) || (s[r] = n);
            }
            return s;
        },
        Hn = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
        Qn = {
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
    function Wn(e) {
        const t = (function (e) {
            const t = {};
            let n = 0;
            if (
                (at(e, (e, s) => {
                    Qn[s] || ((t[s] = e), n++);
                }),
                n)
            )
                return t;
        })(e);
        if (t) {
            const n = { to: t };
            return (at(e, (e, s) => s in t || (n[s] = e)), n);
        }
        return { ...e };
    }
    function Yn(e) {
        return (
            (e = Yt(e)),
            st.arr(e) ? e.map(Yn) : bn(e) ? tt.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
        );
    }
    function Xn(e) {
        for (const t in e) return !0;
        return !1;
    }
    function Zn(e) {
        return st.fun(e) || (st.arr(e) && st.obj(e[0]));
    }
    function Kn(e, t) {
        (e.ref?.delete(e), t?.delete(e));
    }
    function Jn(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), (e.ref = t));
    }
    var es = { tension: 170, friction: 26, mass: 1, damping: 1, easing: Gt.linear, clamp: !1 },
        ts = class {
            constructor() {
                ((this.velocity = 0), Object.assign(this, es));
            }
        };
    function ns(e, t) {
        if (st.und(t.decay)) {
            const n = !st.und(t.tension) || !st.und(t.friction);
            ((!n && st.und(t.frequency) && st.und(t.damping) && st.und(t.mass)) ||
                ((e.duration = void 0), (e.decay = void 0)),
                n && (e.frequency = void 0));
        } else e.duration = void 0;
    }
    var ss = [],
        rs = class {
            constructor() {
                ((this.changed = !1),
                    (this.values = ss),
                    (this.toValues = null),
                    (this.fromValues = ss),
                    (this.config = new ts()),
                    (this.immediate = !1));
            }
        };
    function os(e, { key: t, props: n, defaultProps: s, state: r, actions: o }) {
        return new Promise((a, i) => {
            let l,
                c,
                u = Un(n.cancel ?? s?.cancel, t);
            if (u) p();
            else {
                st.und(n.pause) || (r.paused = Un(n.pause, t));
                let e = s?.pause;
                (!0 !== e && (e = r.paused || Un(e, t)),
                    (l = Ln(n.delay || 0, t)),
                    e ? (r.resumeQueue.add(m), o.pause()) : (o.resume(), m()));
            }
            function d() {
                (r.resumeQueue.add(m), r.timeouts.delete(c), c.cancel(), (l = c.time - Be.now()));
            }
            function m() {
                l > 0 && !tt.skipAnimation
                    ? ((r.delayed = !0), (c = Be.setTimeout(p, l)), r.pauseQueue.add(d), r.timeouts.add(c))
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
    var as = (e, t) =>
            1 == t.length
                ? t[0]
                : t.some((e) => e.cancelled)
                  ? cs(e.get())
                  : t.every((e) => e.noop)
                    ? is(e.get())
                    : ls(
                          e.get(),
                          t.every((e) => e.finished),
                      ),
        is = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        ls = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
        cs = (e) => ({ value: e, cancelled: !0, finished: !1 });
    function us(e, t, n, s) {
        const { callId: r, parentId: o, onRest: a } = t,
            { asyncTo: i, promise: l } = n;
        return o || e !== i || t.reset
            ? (n.promise = (async () => {
                  ((n.asyncId = r), (n.asyncTo = e));
                  const c = Gn(t, (e, t) => ('onRest' === t ? void 0 : e));
                  let u, d;
                  const m = new Promise((e, t) => ((u = e), (d = t))),
                      p = (e) => {
                          const t = (r <= (n.cancelId || 0) && cs(s)) || (r !== n.asyncId && ls(s, !1));
                          if (t) throw ((e.result = t), d(e), e);
                      },
                      f = (e, t) => {
                          const o = new ms(),
                              a = new ps();
                          return (async () => {
                              if (tt.skipAnimation) throw (ds(n), (a.result = ls(s, !1)), d(a), a);
                              p(o);
                              const i = st.obj(e) ? { ...e } : { ...t, to: e };
                              ((i.parentId = r),
                                  at(c, (e, t) => {
                                      st.und(i[t]) && (i[t] = e);
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
                  if (tt.skipAnimation) return (ds(n), ls(s, !1));
                  try {
                      let t;
                      ((t = st.arr(e)
                          ? (async (e) => {
                                for (const t of e) await f(t);
                            })(e)
                          : Promise.resolve(e(f, s.stop.bind(s)))),
                          await Promise.all([t.then(u), m]),
                          (h = ls(s.get(), !0, !1)));
                  } catch (g) {
                      if (g instanceof ms) h = g.result;
                      else {
                          if (!(g instanceof ps)) throw g;
                          h = g.result;
                      }
                  } finally {
                      r == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? i : void 0), (n.promise = o ? l : void 0));
                  }
                  return (
                      st.fun(a) &&
                          Be.batchedUpdates(() => {
                              a(h, s, s.item);
                          }),
                      h
                  );
              })())
            : l;
    }
    function ds(e, t) {
        (lt(e.timeouts, (e) => e.cancel()),
            e.pauseQueue.clear(),
            e.resumeQueue.clear(),
            (e.asyncId = e.asyncTo = e.promise = void 0),
            t && (e.cancelId = t));
    }
    var ms = class extends Error {
            constructor() {
                super(
                    'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
                );
            }
        },
        ps = class extends Error {
            constructor() {
                super('SkipAnimationSignal');
            }
        },
        fs = (e) => e instanceof gs,
        hs = 1,
        gs = class extends Kt {
            constructor() {
                (super(...arguments), (this.id = hs++), (this._priority = 0));
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
                return tt.to(this, e);
            }
            interpolate(...e) {
                return (gn(`${fn}The "interpolate" function is deprecated in v9 (use "to" instead)`), tt.to(this, e));
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
                Zt(this, { type: 'change', parent: this, value: e, idle: t });
            }
            _onPriorityChange(e) {
                (this.idle || wt.sort(this), Zt(this, { type: 'priority', parent: this, priority: e }));
            }
        },
        _s = Symbol.for('SpringPhase'),
        bs = (e) => (1 & e[_s]) > 0,
        ys = (e) => (2 & e[_s]) > 0,
        vs = (e) => (4 & e[_s]) > 0,
        ws = (e, t) => (t ? (e[_s] |= 3) : (e[_s] &= -3)),
        xs = (e, t) => (t ? (e[_s] |= 4) : (e[_s] &= -5)),
        Es = class extends gs {
            constructor(e, t) {
                if (
                    (super(),
                    (this.animation = new rs()),
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
                return !(ys(this) || this._state.asyncTo) || vs(this);
            }
            get goal() {
                return Yt(this.animation.to);
            }
            get velocity() {
                const e = Cn(this);
                return e instanceof kn ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
            }
            get hasAnimated() {
                return bs(this);
            }
            get isAnimating() {
                return ys(this);
            }
            get isPaused() {
                return vs(this);
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
                    a = Sn(s.to);
                (!a && Wt(s.to) && (r = it(Yt(s.to))),
                    s.values.forEach((i, l) => {
                        if (i.done) return;
                        const c = i.constructor == Nn ? 1 : a ? a[l].lastPosition : r[l];
                        let u = s.immediate,
                            d = c;
                        if (!u) {
                            if (((d = i.lastPosition), o.tension <= 0)) return void (i.done = !0);
                            let t = (i.elapsedTime += e);
                            const n = s.fromValues[l],
                                r = null != i.v0 ? i.v0 : (i.v0 = st.arr(o.velocity) ? o.velocity[l] : o.velocity);
                            let a;
                            const m = o.precision || (n == c ? 0.005 : Math.min(1, 0.001 * Math.abs(c - n)));
                            if (st.und(o.duration))
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
                                        l = !st.und(s),
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
                const i = Cn(this),
                    l = i.getValue();
                if (t) {
                    const e = Yt(s.to);
                    ((l === e && !n) || o.decay
                        ? n && o.decay && this._onChange(l)
                        : (i.setValue(e), this._onChange(e)),
                        this._stop());
                } else n && this._onChange(l);
            }
            set(e) {
                return (
                    Be.batchedUpdates(() => {
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
                if (ys(this)) {
                    const { to: e, config: t } = this.animation;
                    Be.batchedUpdates(() => {
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
                    Promise.all(n.map((e) => this._update(e))).then((e) => as(this, e))
                );
            }
            stop(e) {
                const { to: t } = this.animation;
                return (
                    this._focus(this.get()),
                    ds(this._state, e && this._lastCallId),
                    Be.batchedUpdates(() => this._stop(t, e)),
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
                ((n = st.obj(n) ? n[t] : n),
                    (null == n || Zn(n)) && (n = void 0),
                    (s = st.obj(s) ? s[t] : s),
                    null == s && (s = void 0));
                const r = { to: n, from: s };
                return (
                    bs(this) ||
                        (e.reverse && ([n, s] = [s, n]),
                        (s = Yt(s)),
                        st.und(s) ? Cn(this) || this._set(n) : this._set(s)),
                    r
                );
            }
            _update({ ...e }, t) {
                const { key: n, defaultProps: s } = this;
                (e.default &&
                    Object.assign(
                        s,
                        Gn(e, (e, t) => (/^on/.test(t) ? zn(e, n) : e)),
                    ),
                    Ns(this, e, 'onProps'),
                    As(this, 'onProps', e, this));
                const r = this._prepareNode(e);
                if (Object.isFrozen(this))
                    throw Error(
                        'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                    );
                const o = this._state;
                return os(++this._lastCallId, {
                    key: n,
                    props: e,
                    defaultProps: s,
                    state: o,
                    actions: {
                        pause: () => {
                            vs(this) ||
                                (xs(this, !0),
                                dt(o.pauseQueue),
                                As(this, 'onPause', ls(this, Rs(this, this.animation.to)), this));
                        },
                        resume: () => {
                            vs(this) &&
                                (xs(this, !1),
                                ys(this) && this._resume(),
                                dt(o.resumeQueue),
                                As(this, 'onResume', ls(this, Rs(this, this.animation.to)), this));
                        },
                        start: this._merge.bind(this, r),
                    },
                }).then((n) => {
                    if (e.loop && n.finished && (!t || !n.noop)) {
                        const t = Cs(e);
                        if (t) return this._update(t, !0);
                    }
                    return n;
                });
            }
            _merge(e, t, n) {
                if (t.cancel) return (this.stop(!0), n(cs(this)));
                const s = !st.und(e.to),
                    r = !st.und(e.from);
                if (s || r) {
                    if (!(t.callId > this._lastToId)) return n(cs(this));
                    this._lastToId = t.callId;
                }
                const { key: o, defaultProps: a, animation: i } = this,
                    { to: l, from: c } = i;
                let { to: u = l, from: d = c } = e;
                (!r || s || (t.default && !st.und(u)) || (u = d), t.reverse && ([u, d] = [d, u]));
                const m = !rt(d, c);
                (m && (i.from = d), (d = Yt(d)));
                const p = !rt(u, l);
                p && this._focus(u);
                const f = Zn(t.to),
                    { config: h } = i,
                    { decay: g, velocity: _ } = h;
                ((s || r) && (h.velocity = 0),
                    t.config &&
                        !f &&
                        (function (e, t, n) {
                            (n && (ns((n = { ...n }), t), (t = { ...n, ...t })), ns(e, t), Object.assign(e, t));
                            for (const a in es) null == e[a] && (e[a] = es[a]);
                            let { frequency: s, damping: r } = e;
                            const { mass: o } = e;
                            st.und(s) ||
                                (s < 0.01 && (s = 0.01),
                                r < 0 && (r = 0),
                                (e.tension = Math.pow((2 * Math.PI) / s, 2) * o),
                                (e.friction = (4 * Math.PI * r * o) / s));
                        })(h, Ln(t.config, o), t.config !== a.config ? Ln(a.config, o) : void 0));
                let b = Cn(this);
                if (!b || st.und(u)) return n(ls(this, !0));
                const y = st.und(t.reset) ? r && !t.default : !st.und(d) && Un(t.reset, o),
                    v = y ? d : this.get(),
                    w = Yn(u),
                    x = st.num(w) || st.arr(w) || bn(w),
                    E = !f && (!x || Un(a.immediate || t.immediate, o));
                if (p) {
                    const e = Dn(u);
                    if (e !== b.constructor) {
                        if (!E)
                            throw Error(
                                `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`,
                            );
                        b = this._set(w);
                    }
                }
                const R = b.constructor;
                let C = Wt(u),
                    T = !1;
                if (!C) {
                    const e = y || (!bs(this) && m);
                    ((p || e) && ((T = rt(Yn(v), w)), (C = !T)),
                        ((rt(i.immediate, E) || E) && rt(h.decay, g) && rt(h.velocity, _)) || (C = !0));
                }
                if (
                    (T && ys(this) && (i.changed && !y ? (C = !0) : C || this._stop(l)),
                    !f &&
                        ((C || Wt(l)) &&
                            ((i.values = b.getPayload()), (i.toValues = Wt(u) ? null : R == Nn ? [1] : it(w))),
                        i.immediate != E && ((i.immediate = E), E || y || this._set(l)),
                        C))
                ) {
                    const { onRest: e } = i;
                    ot(ks, (e) => Ns(this, t, e));
                    const s = ls(this, Rs(this, l));
                    (dt(this._pendingCalls, s),
                        this._pendingCalls.add(n),
                        i.changed &&
                            Be.batchedUpdates(() => {
                                ((i.changed = !y), e?.(s, this), y ? Ln(a.onRest, s) : i.onStart?.(s, this));
                            }));
                }
                (y && this._set(v),
                    f
                        ? n(us(t.to, t, this._state, this))
                        : C
                          ? this._start()
                          : ys(this) && !p
                            ? this._pendingCalls.add(n)
                            : n(is(v)));
            }
            _focus(e) {
                const t = this.animation;
                e !== t.to && (Xt(this) && this._detach(), (t.to = e), Xt(this) && this._attach());
            }
            _attach() {
                let e = 0;
                const { to: t } = this.animation;
                (Wt(t) && (en(t, this), fs(t) && (e = t.priority + 1)), (this.priority = e));
            }
            _detach() {
                const { to: e } = this.animation;
                Wt(e) && tn(e, this);
            }
            _set(e, t = !0) {
                const n = Yt(e);
                if (!st.und(n)) {
                    const e = Cn(this);
                    if (!e || !rt(n, e.getValue())) {
                        const s = Dn(n);
                        (e && e.constructor == s ? e.setValue(n) : Tn(this, s.create(n)),
                            e &&
                                Be.batchedUpdates(() => {
                                    this._onChange(n, t);
                                }));
                    }
                }
                return Cn(this);
            }
            _onStart() {
                const e = this.animation;
                e.changed || ((e.changed = !0), As(this, 'onStart', ls(this, Rs(this, e.to)), this));
            }
            _onChange(e, t) {
                (t || (this._onStart(), Ln(this.animation.onChange, e, this)),
                    Ln(this.defaultProps.onChange, e, this),
                    super._onChange(e, t));
            }
            _start() {
                const e = this.animation;
                (Cn(this).reset(Yt(e.to)),
                    e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                    ys(this) || (ws(this, !0), vs(this) || this._resume()));
            }
            _resume() {
                tt.skipAnimation ? this.finish() : wt.start(this);
            }
            _stop(e, t) {
                if (ys(this)) {
                    ws(this, !1);
                    const n = this.animation;
                    (ot(n.values, (e) => {
                        e.done = !0;
                    }),
                        n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                        Zt(this, { type: 'idle', parent: this }));
                    const s = t ? cs(this.get()) : ls(this.get(), Rs(this, e ?? n.to));
                    (dt(this._pendingCalls, s), n.changed && ((n.changed = !1), As(this, 'onRest', s, this)));
                }
            }
        };
    function Rs(e, t) {
        const n = Yn(t);
        return rt(Yn(e.get()), n);
    }
    function Cs(e, t = e.loop, n = e.to) {
        const s = Ln(t);
        if (s) {
            const r = !0 !== s && Wn(s),
                o = (r || e).reverse,
                a = !r || r.reset;
            return Ts({
                ...e,
                loop: t,
                default: !1,
                pause: void 0,
                to: !o || Zn(n) ? n : void 0,
                from: a ? e.from : void 0,
                reset: a,
                ...r,
            });
        }
    }
    function Ts(e) {
        const { to: t, from: n } = (e = Wn(e)),
            s = new Set();
        return (st.obj(t) && Ps(t, s), st.obj(n) && Ps(n, s), (e.keys = s.size ? Array.from(s) : null), e);
    }
    function Ss(e) {
        const t = Ts(e);
        return (st.und(t.default) && (t.default = Gn(t)), t);
    }
    function Ps(e, t) {
        at(e, (e, n) => null != e && t.add(n));
    }
    var ks = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
    function Ns(e, t, n) {
        e.animation[n] = t[n] !== qn(t, n) ? zn(t[n], e.key) : void 0;
    }
    function As(e, t, ...n) {
        (e.animation[t]?.(...n), e.defaultProps[t]?.(...n));
    }
    var Is = ['onStart', 'onChange', 'onRest'],
        Ms = 1,
        js = class {
            constructor(e, t) {
                ((this.id = Ms++),
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
                return (e && this.queue.push(Ts(e)), this);
            }
            start(e) {
                let { queue: t } = this;
                return (
                    e ? (t = it(e).map(Ts)) : (this.queue = []),
                    this._flush ? this._flush(this, t) : (Us(this, t), Ds(this, t))
                );
            }
            stop(e, t) {
                if ((e !== !!e && (t = e), t)) {
                    const n = this.springs;
                    ot(it(t), (t) => n[t].stop(!!e));
                } else (ds(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
                return this;
            }
            pause(e) {
                if (st.und(e)) this.start({ pause: !0 });
                else {
                    const t = this.springs;
                    ot(it(e), (e) => t[e].pause());
                }
                return this;
            }
            resume(e) {
                if (st.und(e)) this.start({ pause: !1 });
                else {
                    const t = this.springs;
                    ot(it(e), (e) => t[e].resume());
                }
                return this;
            }
            each(e) {
                at(this.springs, e);
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
                const o = !s && this._started,
                    a = r || (o && n.size) ? this.get() : null;
                (r &&
                    t.size &&
                    lt(t, ([e, t]) => {
                        ((t.value = a), e(t, this, this._item));
                    }),
                    o &&
                        ((this._started = !1),
                        lt(n, ([e, t]) => {
                            ((t.value = a), e(t, this, this._item));
                        })));
            }
            eventObserved(e) {
                if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
                else {
                    if ('idle' != e.type) return;
                    this._active.delete(e.parent);
                }
                Be.onFrame(this._onFrame);
            }
        };
    function Ds(e, t) {
        return Promise.all(t.map((t) => Os(e, t))).then((t) => as(e, t));
    }
    async function Os(e, t, n) {
        const { keys: s, to: r, from: o, loop: a, onRest: i, onResolve: l } = t,
            c = st.obj(t.default) && t.default;
        (a && (t.loop = !1), !1 === r && (t.to = null), !1 === o && (t.from = null));
        const u = st.arr(r) || st.fun(r) ? r : void 0;
        u
            ? ((t.to = void 0), (t.onRest = void 0), c && (c.onRest = void 0))
            : ot(Is, (n) => {
                  const s = t[n];
                  if (st.fun(s)) {
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
            ? ((d.paused = t.pause), dt(t.pause ? d.pauseQueue : d.resumeQueue))
            : d.paused && (t.pause = !0);
        const m = (s || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
            p = !0 === t.cancel || !0 === qn(t, 'cancel');
        ((u || (p && d.asyncId)) &&
            m.push(
                os(++e._lastAsyncId, {
                    props: t,
                    state: d,
                    actions: {
                        pause: nt,
                        resume: nt,
                        start(t, n) {
                            p ? (ds(d, e._lastAsyncId), n(cs(e))) : ((t.onRest = i), n(us(u, t, d, e)));
                        },
                    },
                }),
            ),
            d.paused &&
                (await new Promise((e) => {
                    d.resumeQueue.add(e);
                })));
        const f = as(e, await Promise.all(m));
        if (a && f.finished && (!n || !f.noop)) {
            const n = Cs(t, a, r);
            if (n) return (Us(e, [n]), Os(e, n, !0));
        }
        return (l && Be.batchedUpdates(() => l(f, e, e.item)), f);
    }
    function Bs(e, t) {
        const n = { ...e.springs };
        return (
            t &&
                ot(it(t), (e) => {
                    (st.und(e.keys) && (e = Ts(e)), st.obj(e.to) || (e = { ...e, to: void 0 }), Ls(n, e, (e) => $s(e)));
                }),
            Fs(e, n),
            n
        );
    }
    function Fs(e, t) {
        at(t, (t, n) => {
            e.springs[n] || ((e.springs[n] = t), en(t, e));
        });
    }
    function $s(e, t) {
        const n = new Es();
        return ((n.key = e), t && en(n, t), n);
    }
    function Ls(e, t, n) {
        t.keys &&
            ot(t.keys, (s) => {
                (e[s] || (e[s] = n(s)))._prepareNode(t);
            });
    }
    function Us(e, t) {
        ot(t, (t) => {
            Ls(e.springs, t, (t) => $s(t, e));
        });
    }
    var zs,
        qs,
        Vs = ({ children: e, ...t }) => {
            const n = s.useContext(Gs),
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
            const { Provider: a } = Gs;
            return m.createElement(a, { value: t }, e);
        },
        Gs =
            ((zs = Vs),
            (qs = {}),
            Object.assign(zs, m.createContext(qs)),
            (zs.Provider._context = zs),
            (zs.Consumer._context = zs),
            zs);
    ((Vs.Provider = Gs.Provider), (Vs.Consumer = Gs.Consumer));
    var Hs = () => {
        const e = [],
            t = function (t) {
                _n(
                    `${fn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
                const s = [];
                return (
                    ot(e, (e, r) => {
                        if (st.und(t)) s.push(e.start());
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
                return (ot(e, (e) => e.pause(...arguments)), this);
            }),
            (t.resume = function () {
                return (ot(e, (e) => e.resume(...arguments)), this);
            }),
            (t.set = function (t) {
                ot(e, (e, n) => {
                    const s = st.fun(t) ? t(n, e) : t;
                    s && e.set(s);
                });
            }),
            (t.start = function (t) {
                const n = [];
                return (
                    ot(e, (e, s) => {
                        if (st.und(t)) n.push(e.start());
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
            return st.fun(e) ? e(n, t) : e;
        };
        return ((t._getProps = n), t);
    };
    function Qs(e, t) {
        const n = st.fun(e),
            [[r], o] = (function (e, t, n) {
                const r = st.fun(t) && t;
                r && !n && (n = []);
                const o = s.useMemo(() => (r || 3 == arguments.length ? Hs() : void 0), []),
                    a = s.useRef(0),
                    i = vn(),
                    l = s.useMemo(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(e, t) {
                                const n = Bs(e, t);
                                return a.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                    ? Ds(e, t)
                                    : new Promise((s) => {
                                          (Fs(e, n),
                                              l.queue.push(() => {
                                                  s(Ds(e, t));
                                              }),
                                              i());
                                      });
                            },
                        }),
                        [],
                    ),
                    c = s.useRef([...l.ctrls]),
                    u = [],
                    d = En(e) || 0;
                function m(e, n) {
                    for (let s = e; s < n; s++) {
                        const e = c.current[s] || (c.current[s] = new js(null, l.flush)),
                            n = r ? r(s, e) : t[s];
                        n && (u[s] = Ss(n));
                    }
                }
                (s.useMemo(() => {
                    (ot(c.current.slice(e, d), (e) => {
                        (Kn(e, o), e.stop(!0));
                    }),
                        (c.current.length = e),
                        m(d, e));
                }, [e]),
                    s.useMemo(() => {
                        m(0, Math.min(d, e));
                    }, n));
                const p = c.current.map((e, t) => Bs(e, u[t])),
                    f = s.useContext(Vs),
                    h = En(f),
                    g = f !== h && Xn(f);
                (yn(() => {
                    (a.current++, (l.ctrls = c.current));
                    const { queue: e } = l;
                    (e.length && ((l.queue = []), ot(e, (e) => e())),
                        ot(c.current, (e, t) => {
                            (o?.add(e), g && e.start({ default: f }));
                            const n = u[t];
                            n && (Jn(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                        }));
                }),
                    wn(() => () => {
                        ot(l.ctrls, (e) => e.stop(!0));
                    }));
                const _ = p.map((e) => ({ ...e }));
                return o ? [_, o] : _;
            })(1, n ? e : [e], n ? [] : t);
        return n || 2 == arguments.length ? [r, o] : r;
    }
    var Ws = () => Hs(),
        Ys = () => s.useState(Ws)[0];
    function Xs(e, t, n) {
        const r = st.fun(t) && t,
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
            f = s.useMemo(() => (r || 3 == arguments.length ? Hs() : void 0), []),
            h = it(e),
            g = [],
            _ = s.useRef(null),
            b = o ? null : _.current;
        (yn(() => {
            _.current = g;
        }),
            wn(
                () => (
                    ot(g, (e) => {
                        (f?.add(e.ctrl), (e.ctrl.ref = f));
                    }),
                    () => {
                        ot(_.current, (e) => {
                            (e.expired && clearTimeout(e.expirationId), Kn(e.ctrl, f), e.ctrl.stop(!0));
                        });
                    }
                ),
            ));
        const y = (function (e, { key: t, keys: n = t }, s) {
                if (null === n) {
                    const t = new Set();
                    return e.map((e) => {
                        const n = s && s.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                        return n ? (t.add(n), n.key) : Zs++;
                    });
                }
                return st.und(n) ? e : st.fun(n) ? e.map(n) : it(n);
            })(h, r ? r() : t, b),
            v = (o && _.current) || [];
        yn(() =>
            ot(v, ({ ctrl: e, item: t, key: n }) => {
                (Kn(e, f), Ln(u, t, n));
            }),
        );
        const w = [];
        if (
            (b &&
                ot(b, (e, t) => {
                    e.expired
                        ? (clearTimeout(e.expirationId), v.push(e))
                        : ~(t = w[t] = y.indexOf(e.key)) && (g[t] = e);
                }),
            ot(h, (e, t) => {
                g[t] || ((g[t] = { key: y[t], item: e, phase: 'mount', ctrl: new js() }), (g[t].ctrl.item = e));
            }),
            w.length)
        ) {
            let e = -1;
            const { leave: n } = r ? r() : t;
            ot(w, (t, s) => {
                const r = b[s];
                ~t ? ((e = g.indexOf(r)), (g[e] = { ...r, item: h[t] })) : n && g.splice(++e, 0, r);
            });
        }
        st.fun(a) && g.sort((e, t) => a(e.item, t.item));
        let x = -i;
        const E = vn(),
            R = Gn(t),
            C = new Map(),
            T = s.useRef(new Map()),
            S = s.useRef(!1);
        ot(g, (e, n) => {
            const s = e.key,
                o = e.phase,
                a = r ? r() : t;
            let u, m;
            const f = Ln(a.delay || 0, s);
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
            if (((u = Ln(u, e.item, n)), (u = st.obj(u) ? Wn(u) : { to: u }), !u.config)) {
                const t = p || R.config;
                u.config = Ln(t, e.item, n, m);
            }
            x += i;
            const h = { ...R, delay: f + x, ref: d, immediate: a.immediate, reset: !1, ...u };
            if ('enter' == m && st.und(h.from)) {
                const s = r ? r() : t,
                    o = st.und(s.initial) || b ? s.from : s.initial;
                h.from = Ln(o, e.item, n);
            }
            const { onResolve: g } = h;
            h.onResolve = (e) => {
                Ln(g, e);
                const t = _.current,
                    n = t.find((e) => e.key === s);
                if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                    const e = t.every((e) => e.ctrl.idle);
                    if ('leave' == n.phase) {
                        const t = Ln(l, n.item);
                        if (!1 !== t) {
                            const s = !0 === t ? 0 : t;
                            if (((n.expired = !0), !e && s > 0))
                                return void (s <= 2147483647 && (n.expirationId = setTimeout(E, s)));
                        }
                    }
                    e && t.some((e) => e.expired) && (T.current.delete(n), c && (S.current = !0), E());
                }
            };
            const v = Bs(e.ctrl, h);
            'leave' === m && c
                ? T.current.set(e, { phase: m, springs: v, payload: h })
                : C.set(e, { phase: m, springs: v, payload: h });
        });
        const P = s.useContext(Vs),
            k = En(P),
            N = P !== k && Xn(P);
        (yn(() => {
            N &&
                ot(g, (e) => {
                    e.ctrl.start({ default: P });
                });
        }, [P]),
            ot(C, (e, t) => {
                if (T.current.size) {
                    const e = g.findIndex((e) => e.key === t.key);
                    g.splice(e, 1);
                }
            }),
            yn(
                () => {
                    ot(T.current.size ? T.current : C, ({ phase: e, payload: t }, n) => {
                        const { ctrl: s } = n;
                        ((n.phase = e),
                            f?.add(s),
                            N && 'enter' == e && s.start({ default: P }),
                            t &&
                                (Jn(s, t.ref),
                                (!s.ref && !f) || S.current
                                    ? (s.start(t), S.current && (S.current = !1))
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
                              key: st.str(t.key) || st.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref,
                          })
                        : r;
                }),
            );
        return f ? [A, f] : A;
    }
    var Zs = 1;
    var Ks = class extends gs {
        constructor(e, t) {
            (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Vt(...t)));
            const n = this._get(),
                s = Dn(n);
            Tn(this, s.create(n));
        }
        advance(e) {
            const t = this._get();
            (rt(t, this.get()) || (Cn(this).setValue(t), this._onChange(t, this.idle)),
                !this.idle && er(this._active) && tr(this));
        }
        _get() {
            const e = st.arr(this.source) ? this.source.map(Yt) : it(Yt(this.source));
            return this.calc(...e);
        }
        _start() {
            this.idle &&
                !er(this._active) &&
                ((this.idle = !1),
                ot(Sn(this), (e) => {
                    e.done = !1;
                }),
                tt.skipAnimation ? (Be.batchedUpdates(() => this.advance()), tr(this)) : wt.start(this));
        }
        _attach() {
            let e = 1;
            (ot(it(this.source), (t) => {
                (Wt(t) && en(t, this), fs(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
            }),
                (this.priority = e),
                this._start());
        }
        _detach() {
            (ot(it(this.source), (e) => {
                Wt(e) && tn(e, this);
            }),
                this._active.clear(),
                tr(this));
        }
        eventObserved(e) {
            'change' == e.type
                ? e.idle
                    ? this.advance()
                    : (this._active.add(e.parent), this._start())
                : 'idle' == e.type
                  ? this._active.delete(e.parent)
                  : 'priority' == e.type &&
                    (this.priority = it(this.source).reduce((e, t) => Math.max(e, (fs(t) ? t.priority : 0) + 1), 0));
        }
    };
    function Js(e) {
        return !1 !== e.idle;
    }
    function er(e) {
        return !e.size || Array.from(e).every(Js);
    }
    function tr(e) {
        e.idle ||
            ((e.idle = !0),
            ot(Sn(e), (e) => {
                e.done = !0;
            }),
            Zt(e, { type: 'idle', parent: e }));
    }
    tt.assign({ createStringInterpolator: pn, to: (e, t) => new Ks(e, t) });
    var nr = /^--/;
    function sr(e, t) {
        return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : 'number' != typeof t || 0 === t || nr.test(e) || (or.hasOwnProperty(e) && or[e])
              ? ('' + t).trim()
              : t + 'px';
    }
    var rr = {};
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
        ar = ['Webkit', 'Ms', 'Moz', 'O'];
    or = Object.keys(or).reduce(
        (e, t) => (ar.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
        or,
    );
    var ir = /^(matrix|translate|scale|rotate|skew)/,
        lr = /^(translate)/,
        cr = /^(rotate|skew)/,
        ur = (e, t) => (st.num(e) && 0 !== e ? e + t : e),
        dr = (e, t) => (st.arr(e) ? e.every((e) => dr(e, t)) : st.num(e) ? e === t : parseFloat(e) === t),
        mr = class extends In {
            constructor({ x: e, y: t, z: n, ...s }) {
                const r = [],
                    o = [];
                ((e || t || n) &&
                    (r.push([e || 0, t || 0, n || 0]),
                    o.push((e) => [`translate3d(${e.map((e) => ur(e, 'px')).join(',')})`, dr(e, 0)])),
                    at(s, (e, t) => {
                        if ('transform' === t) (r.push([e || '']), o.push((e) => [e, '' === e]));
                        else if (ir.test(t)) {
                            if ((delete s[t], st.und(e))) return;
                            const n = lr.test(t) ? 'px' : cr.test(t) ? 'deg' : '';
                            (r.push(it(e)),
                                o.push(
                                    'rotate3d' === t
                                        ? ([e, t, s, r]) => [`rotate3d(${e},${t},${s},${ur(r, n)})`, dr(r, 0)]
                                        : (e) => [
                                              `${t}(${e.map((e) => ur(e, n)).join(',')})`,
                                              dr(e, t.startsWith('scale') ? 1 : 0),
                                          ],
                                ));
                        }
                    }),
                    r.length && (s.transform = new pr(r, o)),
                    super(s));
            }
        },
        pr = class extends Kt {
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
                        const r = Yt(n[0]),
                            [o, a] = this.transforms[s](st.arr(r) ? r : n.map(Yt));
                        ((e += ' ' + o), (t = t && a));
                    }),
                    t ? 'none' : e
                );
            }
            observerAdded(e) {
                1 == e && ot(this.inputs, (e) => ot(e, (e) => Wt(e) && en(e, this)));
            }
            observerRemoved(e) {
                0 == e && ot(this.inputs, (e) => ot(e, (e) => Wt(e) && tn(e, this)));
            }
            eventObserved(e) {
                ('change' == e.type && (this._value = null), Zt(this, e));
            }
        };
    tt.assign({
        batchedUpdates: o.unstable_batchedUpdates,
        createStringInterpolator: pn,
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
    var fr = ((
            e,
            {
                applyAnimatedValues: t = () => !1,
                createAnimatedStyle: n = (e) => new In(e),
                getComponentProps: s = (e) => e,
            } = {},
        ) => {
            const r = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: s },
                o = (e) => {
                    const t = $n(e) || 'Anonymous';
                    return (
                        ((e = st.str(e) ? o[e] || (o[e] = On(e, r)) : e[Fn] || (e[Fn] = On(e, r))).displayName =
                            `Animated(${t})`),
                        e
                    );
                };
            return (
                at(e, (t, n) => {
                    (st.arr(e) && (n = $n(t)), (o[n] = o(t)));
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
                                : rr[t] || (rr[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                        );
                    void 0 !== o && (e.textContent = o);
                    for (const m in r)
                        if (r.hasOwnProperty(m)) {
                            const t = sr(m, r[m]);
                            nr.test(m) ? e.style.setProperty(m, t) : (e.style[m] = t);
                        }
                    (d.forEach((t, n) => {
                        e.setAttribute(t, u[n]);
                    }),
                        void 0 !== s && (e.className = s),
                        void 0 !== a && (e.scrollTop = a),
                        void 0 !== i && (e.scrollLeft = i),
                        void 0 !== l && e.setAttribute('viewBox', l));
                },
                createAnimatedStyle: (e) => new mr(e),
                getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
            },
        ),
        hr = fr.animated;
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
    const _r = new WeakMap(),
        br = 'await',
        yr = 'idle',
        vr = 'display';
    function wr({ resId: e = 0, contentId: t, decoratorId: n, disabled: r, args: o, showDelay: a = 400 }) {
        const i = s.useRef({ status: yr, resId: e, timeoutId: 0 }),
            [l, c] = s.useMemo(() => {
                let s = null;
                function l() {
                    r ||
                        ((i.current.status = br),
                        window.clearTimeout(i.current.timeoutId),
                        (i.current.timeoutId = window.setTimeout(c, a)));
                }
                function c() {
                    ((i.current.status = vr), Q.tooltip.open(e, t, n, o), s && _r.set(s, d));
                }
                function u() {
                    if (
                        (window.clearTimeout(i.current.timeoutId),
                        i.current.status === vr && Q.tooltip.hide(e, t, n),
                        (i.current.status = yr),
                        s)
                    ) {
                        _r.delete(s);
                        let e = s.parentElement;
                        for (; e && !_r.has(e); ) e = e.parentElement;
                        if (e) {
                            _r.get(e).show();
                        }
                        s = null;
                    }
                }
                const d = {
                    hide: u,
                    show: c,
                    rerun: function () {
                        i.current.status !== yr && (r ? d.hide() : l());
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
            De(je(l.hide)),
            c
        );
    }
    function xr({ alert: e, body: t, header: n, note: r, hasHtmlContent: o, disabled: a }) {
        const i = p.resolve('views');
        return wr({
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
    const Er = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
        Rr = new Set(['number', 'string', 'boolean', 'bigint']),
        Cr = new Set(['Dict']);
    function Tr(e, { shallow: t = !0, depth: n = 0, maxDepth: s = 32 } = {}) {
        const r = e,
            o = typeof e;
        if (n > s) throw new Error(`Too deeply nested to copy. Max is ${s}.`);
        if (Er.has(o)) return r;
        if (null === r) return r;
        const a = { depth: n + 1, maxDepth: s };
        if (Array.isArray(r)) return r.map((e) => Tr(e, a));
        if ('object' === o) {
            const s = r.constructor?.name ?? 'UNKNOWN';
            if (Array.isArray(e)) return e.map((e) => Tr(e, a));
            if ('CoherentArrayProxy' === s) return e.map((e) => Tr(e.value, a));
            if ('Dict' === s) return;
            if ('UNKNOWN' === s) return;
            if (s.includes(':ViewModel:') || 'Object' === s) {
                if (t && 0 === n) {
                    const e = {};
                    for (const t in r) {
                        const n = r[t];
                        Rr.has(typeof n) && (e[t] = n);
                    }
                    return e;
                }
                {
                    const e = {};
                    for (const t in r) {
                        const n = r[t],
                            s = r?.constructor?.name ?? 'UNKNOWN';
                        Cr.has(s) || (e[t] = Tr(n, a));
                    }
                    return e;
                }
            }
            const o = {};
            for (const e of Object.keys(r)) o[e] = Tr(r[e], a);
            return o;
        }
        return (console.error('Incorrect value to clone model', r), r);
    }
    const Sr = { deep: !1, equals: ee },
        Pr = { cloneItem: !0 },
        kr = { shallow: !1 };
    class Nr {
        constructor(e, t = Pr) {
            this.options = t;
            const s = {},
                r = e.keys();
            for (let o = 0; o < r.length; o++) {
                const t = r[o];
                s[t] = n.observable.box(this.takeItem(e, t), Sr);
            }
            ((this._keys = n.observable.set(new Set(r))), (this._data = n.observable.box(s, Sr)));
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
                    : null !== a && ((s[o] = n.observable.box(a, Sr)), this._keys.add(o), this.set(s));
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
            return this.options.cloneItem ? Tr(n, kr) : n;
        }
        set = n.action((e) => {
            this._data.set(e);
        });
        untrackedData() {
            return n.untracked(() => this._data.get());
        }
    }
    const Ar = s.createContext({ mode: 'real' }),
        Ir = { equals: ee, deep: !1 };
    function Mr(e, t, s) {
        const r = [];
        e.events.subscribersNotified.on(
            n.action(() => {
                for (const e of r) e();
                r.splice(0, r.length);
            }),
        );
        const o = (o, a, i = Ir) => {
                const l = n.observable.box(o(s(a)), i);
                return ('real' === t && e.subscribe((e) => r.push(() => l.set(o(e))), a), l);
            },
            a = (n, o) => {
                const a = new Nr(s(n), o);
                return ('real' === t && e.subscribe((e, t) => r.push(() => a.update(e, t)), n), a);
            },
            i = (o, a) => {
                const i = n.observable.box(s(o) ?? a, Ir);
                return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), o), i);
            };
        return {
            dict: a,
            dictRef: (e, t) => a(e, { cloneItem: !1, ...t }),
            arrayClone: (e) => o(Tr, e),
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
    a.computedFn;
    const jr = (e, t) => a.computedFn(e, { equals: n.comparer.structural, ...t });
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
            e.jsx('div', { ...t, ref: Ae([n, r]) })
        );
    });
    const Dr = 'TruncateText_dcb41d92',
        Or = s.forwardRef(function ({ text: t, tooltipParams: n, className: r, ...o }, a) {
            const i = xr({ header: n?.header, body: n?.body || t }),
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
                    const r = je((e) => {
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
                e.jsx('div', { ...o, ref: Ae([a, l]), className: k(Dr, r), ...(c ? i : {}), children: t })
            );
        }),
        Br = (e) => ('boolean' == typeof e ? `${e}` : 0 === e ? '0' : e),
        Fr = k,
        $r = (e, t) => (n) => {
            var s;
            if (null == (null == t ? void 0 : t.variants))
                return Fr(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: r, defaultVariants: o } = t,
                a = Object.keys(r).map((e) => {
                    const t = null == n ? void 0 : n[e],
                        s = null == o ? void 0 : o[e];
                    if (null === t) return null;
                    const a = Br(t) || Br(s);
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
            return Fr(e, a, l, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        };
    function Lr(t, n, r) {
        const o = 'object' == typeof n && 'cva' in n ? n.cva?.variants : r?.variants,
            a = o ? Object.keys(o) : [];
        if ('object' == typeof n) {
            const e = n,
                r = $r(e.className, e.cva),
                o = e.element,
                i = s.forwardRef(function (e, t) {
                    return s.createElement(o, { ...('function' == typeof o ? e : Ur(a, e)), ref: t, className: r(e) });
                });
            return ((i.displayName = t), e.cva && (i.cva = e.cva), i);
        }
        const i = $r(n, r),
            l = s.forwardRef(function (n, s) {
                return e.jsx('div', { 'data-name': t, ...Ur(a, n), ref: s, className: i(n) });
            });
        return ((l.displayName = t), r && (l.cva = r), l);
    }
    function Ur(e, t) {
        if (0 === e.length) return t;
        const n = { ...t };
        for (const s of e) delete n[s];
        return n;
    }
    const zr = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
        qr = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
        Vr = Lr('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
        Gr = s.forwardRef(function (
            { children: t, onClick: n, onMouseEnter: s, soundTarget: r, disabled: o = !1, silent: a = !1, ...i },
            l,
        ) {
            const c = Ne();
            return e.jsx(Vr, {
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
        Hr = {
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
        Qr = s.forwardRef(function (
            {
                children: t,
                size: n = qr.large,
                theme: s = zr.primary,
                disabled: r = !1,
                silent: o = !1,
                autoAlignContent: a = !0,
                classNames: i,
                className: l,
                ...c
            },
            u,
        ) {
            return e.jsxs(Gr, {
                ...c,
                ref: u,
                silent: o,
                disabled: r,
                className: k(
                    Hr.base,
                    Hr[`base__size-${n}`],
                    Hr[`base__theme-${s}`],
                    r ? Hr.base__disabled : Hr.base__enabled,
                    l,
                    i?.base,
                ),
                onClick: function (e) {
                    r || c.onClick?.(e);
                },
                children: [
                    e.jsx('div', { className: k(Hr.background, i?.background) }),
                    e.jsx('div', { className: k(Hr.border, i?.border) }),
                    e.jsx('div', { className: k(Hr.overlay, i?.overlay) }),
                    e.jsx('div', { className: k(Hr.content, a && Hr.content__fontAligned, i?.content), children: t }),
                ],
            });
        });
    ((Qr.themes = zr), (Qr.sizes = qr));
    const Wr = 'Action_6c7b0c76',
        Yr = 'Action_icon_7d5aed3b',
        Xr = s.forwardRef(function ({ className: t, theme: n = Qr.themes.secondary, tooltipParams: s, ...r }, o) {
            const a = xr({ alert: s?.alert, header: s?.header, body: s?.body, note: s?.note });
            return e.jsx(Qr, {
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
                className: k(Wr, t),
                children: e.jsx(Ee, { width: 10, height: 20, path: 'post_battle.progression.arrow', className: Yr }),
            });
        }),
        Zr = 'Header_background_91826dd5',
        Kr = 'Header_mask_afb9c38d',
        Jr = 'Header_border_c6b1d37f',
        eo = Lr('CardHeader', 'Header_1c2ee301'),
        to = s.forwardRef(function ({ classNames: t, className: n, ...s }, r) {
            return e.jsxs(eo, {
                ...s,
                className: k(t?.base, n),
                ref: r,
                children: [
                    e.jsx('div', { className: k(Zr, t?.background) }),
                    e.jsx('div', { className: k(Kr, t?.mask) }),
                    e.jsx('div', { className: k(Jr, t?.border) }),
                    s.children,
                ],
            });
        }),
        no = Lr('CardTitle', 'Title_e5ecf295'),
        so = s.forwardRef(function (t, n) {
            return e.jsx(no, { ...t, ref: n, children: t.children });
        }),
        ro = 'Card_content_f7ddaa4a',
        oo = Lr('Card', 'Card_3f55e450'),
        ao = Lr('CardContent', ro),
        io = s.forwardRef(function (t, n) {
            return e.jsx(oo, { ...t, ref: n, children: t.children });
        });
    ((io.Header = to), (io.Content = ao), (io.Action = Xr), (io.Title = so));
    const lo = 1,
        co = 2,
        uo = 3;
    function mo(e, t) {
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
                        s[s.length - 1].node.children.push({ type: lo, value: r });
                    } else n.push({ type: lo, value: r });
                    r = '';
                }
                ((o = !0), (l += t.start.length - 1));
            } else if (c === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                ((o = !1), (l += t.end.length - 1));
                const e = a.trim();
                if (e.startsWith('@')) {
                    const t = e.slice(1).trim(),
                        r = { type: co, attrs: t.split('|'), instanceId: ++i, children: [] };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(r);
                    } else n.push(r);
                    s.push({ node: r, startIndex: n.length });
                } else if ('/' === e) s.length > 0 && s.pop();
                else {
                    const t = { type: uo, instanceId: ++i, name: e };
                    if (s.length > 0) {
                        s[s.length - 1].node.children.push(t);
                    } else n.push(t);
                }
                a = '';
            } else o ? (a += c) : (r += c);
        }
        if (r)
            if (s.length) {
                s[s.length - 1].node.children.push({ type: lo, value: r });
            } else n.push({ type: lo, value: r });
        return n;
    }
    const po = {
            COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
            base: 'FormatText_db904f12',
            base__fullSize: 'FormatText_base__fullSize_a514958e',
            nowrap: 'FormatText_nowrap_ff69eca3',
        },
        fo = new Set(po.COLORS?.split(', ') ?? []);
    let ho = 0;
    function go() {
        return ++ho;
    }
    const _o =
        /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
    function bo(t) {
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
    function yo(t) {
        return Array.isArray(t)
            ? (function (t) {
                  const n = [];
                  for (let r = 0; r < t.length; r++) {
                      const o = t[r],
                          a = t[r + 1];
                      if ('string' != typeof a || !_o.test(a)) {
                          n.push(yo(o));
                          continue;
                      }
                      const i = bo(a.slice(1));
                      (n.push(
                          e.jsxs(
                              s.Fragment,
                              { children: [e.jsxs('span', { className: po.nowrap, children: [yo(o), a[0]] }), i] },
                              go(),
                          ),
                      ),
                          (r += 1));
                  }
                  return n;
              })(t)
            : 'string' == typeof t
              ? e.jsx(s.Fragment, { children: bo(t) }, go())
              : t;
    }
    const vo = {
        class: function (t, ...n) {
            return e.jsx(
                'span',
                { className: n.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: t },
                go(),
            );
        },
        colorLegacy: function (t, n) {
            const s = go();
            return fo.has(String(n))
                ? e.jsx('span', { className: `FormatText_colorLegacy__${n}`, children: t }, s)
                : e.jsx('span', { style: { color: `#${n}` }, children: t }, s);
        },
        bold: (e) => ['fontWeight', 'bold'],
        split: yo,
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
                go(),
            );
        },
        color: (e, t) => ['color', t],
        fontSize: (e, t) => ['fontSize', t],
        fontWeight: (e, t) => ['fontWeight', t],
        textDecoration: (e, t) => ['textDecoration', t],
    };
    function wo(e, t, n, s) {
        const r = n.map((t) => {
                if ('string' != typeof t) return t;
                const n = t.trim();
                if (n.startsWith('(') && n.endsWith(')')) {
                    const [t, ...r] = n.slice(1, -1).split(' ');
                    return t ? wo(e, t, r, s) : e;
                }
                return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
            }),
            o = s[t];
        return o ? o(e, ...r) : (console.error(`Function ${t} is not registered`), e);
    }
    function xo(e, t, n) {
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
            return s ? wo(e, s, r, n) : e;
        }, t);
    }
    function Eo(e) {
        return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
    }
    function Ro(e, t) {
        for (let n = 0; n < e.length; n++) {
            if ('$' === e[n]) {
                let s = n + 1;
                for (; s < e.length && !Eo(e[s]); ) s++;
                const r = e.slice(n + 1, s),
                    o = t[r];
                if (o) return Ro(e.replace(`$${r}`, String(o)), t);
            }
        }
        return e;
    }
    function Co(e, t) {
        const n = [];
        for (let s = 0; s < e.length; s++) n[s] = Ro(e[s], t);
        return n;
    }
    const To = ['number', 'string', 'undefined'];
    function So(t, n, r = {}, o = !0) {
        o && (ho = 0);
        const a = [];
        function i(e) {
            if (To.includes(typeof e)) {
                const t = a.at(-1);
                if ('string' == typeof t) return void (a[a.length - 1] = t + e);
            }
            a.push(e);
        }
        for (const l of t)
            if (l.type === lo) i(l.value);
            else if (l.type === uo)
                null === r[l.name] || To.includes(typeof r[l.name])
                    ? i(r[l.name] ?? `{{${l.name}}}`)
                    : a.push(e.jsx(s.Fragment, { children: r[l.name] }, `var-${l.name}-${l.instanceId}`));
            else if (l.type === co) {
                const e = So(l.children, n, r, !1),
                    t = xo(Co(l.attrs, r), e, n);
                a.push(t);
            }
        return a;
    }
    function Po(e) {
        return e
            .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
            .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
    }
    function ko(e) {
        return e
            .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
            .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
    }
    function No(e) {
        return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
    }
    function Ao(e) {
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
        })(e, No, Po, ko);
    }
    const Io = { start: '{{', end: '}}' },
        Mo = s.memo(function (t) {
            const {
                    brackets: n = Io,
                    text: r,
                    params: o,
                    upgradeLegacy: a,
                    fullSize: i,
                    inline: l,
                    formatters: c,
                    split: u,
                    ...d
                } = t,
                m = s.useMemo(() => (t.upgradeLegacy ? Ao(t.text) : t.text), [t.text, t.upgradeLegacy]),
                p = s.useMemo(() => (t.formatters ? { ...vo, ...t.formatters } : vo), [t.formatters]),
                f = s.useMemo(() => mo(u ? `{{@ split}}${m}{{/}}` : m, n), [n, m, u]),
                h = s.useMemo(() => So(f, p, t.params), [f, p, t.params]),
                g = k(po.base, i && po.base__fullSize, d.className);
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
    function jo({ path: t, ...n }) {
        return e.jsx(Mo, { text: p.resolve('strings').readOrEmpty(t), ...n });
    }
    const Do = 'AnimatedValue_d9f4b2f0',
        Oo = 'AnimatedValue_animatedValue_4c490d83',
        Bo = N.cubicBezier(0.33, 0, 0.25, 1);
    function Fo(e) {
        return {
            enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
            leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
        };
    }
    function $o({ value: t, transition: n, children: r, className: o, classNames: a }) {
        const i = s.useMemo(ye, []),
            l = Xs(t, {
                ...n,
                initial: { opacity: 1, y: '0rem', ...n?.initial },
                from: { opacity: 0, y: '-5rem', ...n?.from },
                enter: () => ({
                    opacity: 1,
                    y: '0rem',
                    delay: 330,
                    config: { easing: Bo, duration: 330 },
                    onStart: () => {
                        const { enterElements: e, leftElements: t } = Fo(i);
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
                    config: { easing: Bo, duration: 330 },
                    onStart: () => {
                        let e = 0;
                        const { enterElements: t, leftElements: n } = Fo(i);
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
            className: k(Do, o),
            children: l((n, s) => {
                const o = 0 === n.opacity.get() && !1 === n.opacity.isAnimating;
                return e.jsx(hr.div, {
                    className: k(Oo, `js-animated-value-${i}-${t === s ? 'enter' : 'leave'}`, a?.animatedValue),
                    style: { ...n, position: o ? 'absolute' : 'relative' },
                    children: r(s),
                });
            }),
        });
    }
    const Lo = 'ProgressCount_3c6daa70',
        Uo = 'ProgressCount_label_d15406bd',
        zo = 'ProgressCount_total_4f222a62',
        qo = 'ProgressCount_divider_487d7768',
        Vo = p.resolve('intl');
    function Go({ withLabel: e, withoutLimit: t }) {
        return t
            ? 'battle_results.progression.missionsCompleteCounter'
            : 'battle_results.progression.completedPointsFrom.' + (e ? 'withLabel' : 'withoutLabel');
    }
    function Ho({ current: t, total: n, withLabel: s, withoutLimit: r, className: o, classNames: a }) {
        return e.jsx(jo, {
            path: Go({ withLabel: s, withoutLimit: r }),
            className: k(Lo, o),
            params: {
                completed: Vo.formatNumber('integral', t),
                total: Vo.formatNumber('integral', n),
                totalClass: k(zo, a?.total),
                labelClass: s && k(Uo, a?.label),
            },
        });
    }
    function Qo({
        current: t,
        total: n,
        withLabel: r,
        className: o,
        classNames: a,
        transitionCurrent: i,
        transitionTotal: l,
    }) {
        const c = Ne(),
            u = s.useRef({ transitionCurrent: i, transitionTotal: l });
        return (
            s.useEffect(() => {
                u.current = { transitionCurrent: i, transitionTotal: l };
            }, [i, l]),
            e.jsx(jo, {
                path: 'battle_results.progression.completedPointsFrom.' + (r ? 'withLabel' : 'withoutLabel'),
                className: k(Lo, o),
                params: {
                    completed: e.jsx($o, {
                        className: a?.currentTransitionWrapper,
                        value: Vo.formatNumber('integral', t),
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
                    total: e.jsx($o, {
                        className: a?.totalTransitionWrapper,
                        value: Vo.formatNumber('integral', n),
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
                    totalClass: k(zo, a?.total),
                    labelClass: r && k(Uo, a?.label),
                    dividerClass: qo,
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
    function Yo({
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
        return e.jsxs(io, {
            className: k(Wo.card, s && Wo.card__disabled, c),
            ...d,
            children: [
                e.jsxs(io.Header, {
                    onClick: o,
                    className: k(Wo.cardHeader, u?.header?.base),
                    classNames: {
                        ...u?.header,
                        background: k(Wo.cardHeaderBackground, u?.header?.background),
                        border: k(Wo.cardHeaderBorder, u?.header?.border),
                    },
                    children: [
                        e.jsxs('div', {
                            className: k(Wo.head, u?.head),
                            children: [
                                e.jsxs('div', {
                                    className: Wo.titleContainer,
                                    children: [
                                        void 0 !== n && e.jsx(Ee, { ...n }),
                                        e.jsx(io.Title, {
                                            className: k(Wo.title, u?.title),
                                            children: e.jsx(Or, { text: t }),
                                        }),
                                    ],
                                }),
                                void 0 !== a &&
                                    e.jsx(io.Action, {
                                        onClick: (e) => {
                                            (e.stopPropagation(), a(e));
                                        },
                                        className: k(Wo.action, u?.action),
                                        tooltipParams: r,
                                    }),
                            ],
                        }),
                        e.jsx('div', { className: k(Wo.tail, u?.tail), children: void 0 !== l && e.jsx(Ho, { ...l }) }),
                    ],
                }),
                void 0 !== i && e.jsx(io.Content, { className: k(Wo.content, u?.content), children: i }),
                e.jsx('div', { className: Wo.divider }),
            ],
        });
    }
    function Xo(e) {
        return (
            !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
            (!s.isValidElement(e) && !!Array.isArray(e) && e.every(Xo))
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
                    (n.className = k(Ko, e.children[0].className)),
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
                return !e || Object.values(e).every(Xo);
            })(r),
            R = (function (e, t, n) {
                return wr({
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
            ref: Ae([y, v]),
            className: k(Zo, f, h?.base),
            style: _,
            children: e.jsx(Mo, {
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
            config: o ?? { duration: (n === sa.simple && s) || (!s && r) ? 0 : ta, easing: Gt.easeInOutCubic },
        };
    }
    const ta = 600,
        na = { duration: ta, easing: Gt.easeInOutCubic },
        sa = { simple: 'simple', grow: 'grow', growFreeze: 'growFreeze' },
        ra = { medium: 'medium', large: 'large' },
        oa = { disabled: 'disabled', doneInactive: 'doneInactive', doneStatic: 'doneStatic' },
        aa = 'growing',
        ia = 'shrinking',
        la = 'done',
        ca = s.createContext(void 0);
    function ua() {
        const e = s.useContext(ca);
        if (!e) throw new Error('ProgressBar must be used within a ProgressBar');
        return e;
    }
    function da(e) {
        const { activeComponents: t } = ua();
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
        const s = ua();
        return (
            da('backgroundPattern'),
            e.jsx('div', {
                className: ma.base,
                children: e.jsx(Ee, {
                    className: k(
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
        const n = ua(),
            s = Ne();
        return je((r) => {
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
        const t = ua(),
            n = t.soundTarget ?? 'progress-bar',
            s = Ne(),
            r = fa(e, n),
            o = je(() => {
                t.status !== oa.doneInactive && t.progressCompleted
                    ? s.play('increaseDeltaMax', { target: n })
                    : s.play('progressSimple', { target: n });
            });
        return je(({ step: e } = {}) => {
            if (!t.silent)
                return t.activeComponents.has('delta') ? r(e) : t.activeComponents.has('fill') ? o() : void 0;
        });
    }
    const ga = 'Delta_eb295acb',
        _a = 'Delta_delta__increase_e6e76b0b',
        ba = 'Delta_outside_b28c01e5',
        ya = 'Delta_outside__increase_91391b24',
        va = 'Delta_inside_b1b3a5c5',
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
                    ...c
                },
                u,
            ) {
                const d = s.useRef(null),
                    m = ua(),
                    [p, f] = Qs(() => ({ width: 0 })),
                    [h, g] = Qs(() => ({ width: 0 })),
                    [_, b] = Qs(() => ({ left: 0, width: 0 })),
                    [y, ...v] = i,
                    [w, x] = s.useState(v),
                    [E, R] = s.useState(y ?? 'done'),
                    C = (m.value - t) / m.maxValue,
                    T = ha(C);
                (da('delta'),
                    s.useEffect(() => {
                        if (0 === C) return;
                        const [e, ...t] = i;
                        (R(e ?? 'done'), x(t));
                    }, [f, g, i, C]));
                const S = je(l ?? K);
                s.useEffect(() => S(E), [E, S]);
                const P = je(() => {
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
                            e.classList.toggle(_a, C > 0),
                            'growing' === E
                                ? (b.set({ left: t, width: s }),
                                  g.set({ width: 100 }),
                                  void f.start({
                                      from: { width: 0 },
                                      to: { width: 100 },
                                      config: n ?? na,
                                      onRest: P,
                                      onStart: () => T({ step: E }),
                                  }))
                                : 'shrinking' === E
                                  ? (b.set({ left: t, width: s }),
                                    f.set({ width: 100 }),
                                    void g.start({
                                        from: { width: 100 },
                                        to: { width: 0 },
                                        config: r ?? na,
                                        onRest: P,
                                        onStart: () => T({ step: E }),
                                    }))
                                  : void 0
                        );
                    }, [b, m.percentage, C, n, f, P, g, T, r, E]),
                    e.jsxs(hr.div, {
                        ...c,
                        ref: Ae([u, d]),
                        className: k(a, ga),
                        style: { left: _.left.to((e) => `${e}%`), width: _.width.to((e) => `${e}%`) },
                        children: [
                            e.jsxs(hr.div, {
                                ...c,
                                style: { width: h.width.to((e) => `${e}%`) },
                                className: k(o?.outside, ba, C > 0 && ya),
                                children: [
                                    e.jsx(hr.div, {
                                        style: { width: p.width.to((e) => `${e}%`) },
                                        className: k(o?.inside, va, C > 0 && wa),
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
        Ea = {
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
        Ra = hr(Ee),
        Ca = s.memo(function ({ animationConfig: t, classNames: n }) {
            const r = ua(),
                { activeComponents: o } = ua(),
                a = 100 * r.percentage,
                i = 100 * (r.previous?.percentage ?? 0),
                l = void 0 === r.previous ? a : i,
                c = r.status === oa.doneStatic,
                u = gr(),
                [d, m] = Qs(() => ({ width: l }));
            return (
                s.useEffect(() => {
                    u.run(() =>
                        m.start(
                            ea({
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
                        e.jsx(Ra, {
                            path: `ui.progressbar.bg_pattern_base_done_${r.size}`,
                            className: k(
                                n?.done,
                                Ea.done,
                                !r.progressCompleted && Ea.done__hidden,
                                r.progressCompleted && (c ? Ea.done__doneStatic : Ea.done__visible),
                            ),
                            repeat: 'repeat',
                            position: 'left top',
                            style: { width: d.width.to((e) => `${e}%`) },
                        }),
                        !c &&
                            e.jsx(Ra, {
                                path: `ui.progressbar.bg_pattern_base_done_complete_${r.size}`,
                                className: k(n?.doneComplete, Ea.complete, r.progressCompleted && Ea.complete__visible),
                                repeat: 'repeat',
                                position: 'left top',
                                style: { width: d.width.to((e) => `${e}%`) },
                            }),
                    ],
                })
            );
        }),
        Ta = hr(Ee),
        Sa = s.memo(function ({ filledPattern: t, animationConfig: n, className: r }) {
            const o = ua(),
                { activeComponents: a } = ua(),
                i = gr(),
                l = 100 * o.percentage,
                c = 100 * (o.previous?.percentage ?? 0),
                u = void 0 === o.previous ? l : c,
                [d, m] = Qs(() => ({ width: u }));
            return (
                s.useEffect(() => {
                    i.run(() =>
                        m.start(
                            ea({
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
                e.jsx(Ta, {
                    path: t || `ui.progressbar.bg_pattern_base_filled_${o.size}`,
                    className: k(
                        r,
                        Ea.filled,
                        o.status && Ea[`filled__${o.status}`],
                        o.progressCompleted && Ea.filled__hidden,
                    ),
                    repeat: 'repeat',
                    position: 'left top',
                    style: { width: d.width.to((e) => `${e}%`) },
                })
            );
        }),
        Pa = s.memo(function ({ filledPattern: t, classNames: n, className: r, animationConfig: o, ...a }) {
            const i = ua(),
                l = ha(),
                c = gr(),
                { activeComponents: u } = ua(),
                d = 100 * i.percentage,
                m = 100 * (i.previous?.percentage ?? 0),
                p = void 0 === i.previous ? d : m;
            (da('fill'),
                s.useEffect(() => {
                    'growFreeze' === i.animationType && i.progressCompleted && !i.activeComponents.has('delta') && l();
                }, [i.activeComponents, i.animationType, i.progressCompleted, l]));
            const [f, h] = Qs(() => ({ width: p }));
            return (
                s.useEffect(() => {
                    c.run(() =>
                        h.start({
                            ...ea({
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
                    className: k(Ea.base, r),
                    children: [
                        e.jsx(hr.div, { className: n?.fill, style: { width: f.width.to((e) => `${e}%`) } }),
                        a.children ??
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(Sa, { filledPattern: t, className: n?.filledPattern, animationConfig: o }),
                                    e.jsx(Ca, {
                                        classNames: { done: n?.done, doneComplete: n?.doneComplete },
                                        animationConfig: o,
                                    }),
                                ],
                            }),
                        e.jsx(hr.div, {
                            className: k(
                                n?.edge,
                                Ea.edge,
                                0 === i.percentage && Ea.edge__noProgress,
                                !u.has('previewDelta') && !i.progressCompleted && Ea.edge__visible,
                                i.status && Ea[`edge__${i.status}`],
                            ),
                            style: { left: f.width.to((e) => `${e}%`) },
                        }),
                    ],
                })
            );
        });
    ((Pa.Filled = Sa), (Pa.Done = Ca));
    const ka = { above: 'above', below: 'below' },
        Na = {
            base: 'Indicators_f2e99d31',
            step: 'Indicators_step_a78300f3',
            step__above: 'Indicators_step__above_a95c746e',
            indicator: 'Indicators_indicator_8484a8c7',
            label: 'Indicators_label_f8c7ff1e',
        };
    function Aa({ position: t, value: n, children: s, className: r, classNames: o }) {
        const a = ua();
        return e.jsxs('div', {
            className: k(Na.step, Na[`step__${t}`], r),
            style: { left: (n / a.maxValue) * 100 + '%' },
            children: [
                t === ka.below && e.jsx('div', { className: k(Na.indicator, o?.indicator) }),
                void 0 !== s && e.jsx('div', { className: k(Na.label, o?.label), children: s }),
                t === ka.above && e.jsx('div', { className: k(Na.indicator, o?.indicator) }),
            ],
        });
    }
    const Ia = Lr('Indicators', Na.base),
        Ma = function (t) {
            const n = ua();
            return (
                da('stepIndicators'),
                e.jsx(Ia, {
                    children: pe(t.count, (s) => {
                        const r = (s / (t.count - 1)) * 100,
                            o = n.value >= r && 0 !== n.value;
                        return e.jsx(
                            Aa,
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
    ((Ma.Step = Aa), (Ma.positions = ka));
    const ja = 'PreviewDelta_86b01c3e',
        Da = 'PreviewDelta_negative_1c375892',
        Oa = 'PreviewDelta_positive_be83fc48',
        Ba = 'PreviewDelta_negative__visible_19dda1c5',
        Fa = 'PreviewDelta_positive__visible_19dda1c5',
        $a = s.forwardRef(function ({ value: t, classNames: n, ...s }, r) {
            const o = ua();
            da('previewDelta');
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
                className: k(ja, s.className),
                children: [
                    e.jsx('div', {
                        style: { left: `${u}%`, width: `${d}%`, ...s.style },
                        className: k(n?.negative, Da, 'negative' === i && Ba),
                    }),
                    e.jsx('div', {
                        style: { left: `${u}%`, width: `${d}%`, ...s.style },
                        className: k(n?.positive, Oa, 'positive' === i && Fa),
                    }),
                ],
            });
        });
    function La(t) {
        const [n, r] = s.useState(Math.min(t.value, t.maxValue)),
            [o, a] = s.useState(t.maxValue),
            i = Ie(n),
            l = Ie(o),
            c = s.useRef(new Set()),
            u = je((e) => r(Math.min(e, t.maxValue))),
            d = je((e) => c.current.has(e));
        (s.useLayoutEffect(() => {
            u(t.value);
        }, [t.value, u]),
            s.useLayoutEffect(() => {
                a(t.maxValue);
            }, [t.maxValue]));
        const m = je((e) => t.onValueChange?.(e));
        s.useEffect(() => {
            m(n);
        }, [m, n]);
        const p = je((e) => t.onMaxValueChange?.(e));
        s.useEffect(() => {
            p(o);
        }, [p, o]);
        const f = s.useMemo(() => {
            if (void 0 !== i && void 0 !== l) return { value: i, maxValue: l, percentage: i / l };
        }, [i, l]);
        me(o > 0, 'ProgressBar: maxValue must be greater than 0');
        const h = s.useMemo(() => {
                const e = n / o === 1 && t.status !== oa.doneInactive;
                return t.animationType === sa.growFreeze ? e && t.maxValueAchieved : e;
            }, [o, t.animationType, t.maxValueAchieved, t.status, n]),
            g = s.useMemo(
                () => ({
                    value: n,
                    maxValue: o,
                    setValue: u,
                    setMaxValue: a,
                    animationType: t.animationType ?? sa.simple,
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
        return e.jsx(ca.Provider, { value: g, children: t.children });
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
        za = Lr('ProgressBar', Ua.base, { variants: { size: { medium: Ua.base__medium, large: Ua.base__large } } }),
        qa = function ({ size: t = ra.medium, backgroundPattern: n, status: s, className: r, classNames: o, ...a }) {
            return e.jsx(La, {
                size: t,
                status: s,
                ...a,
                children: e.jsxs(za, {
                    size: t,
                    className: k(r, a.value === a.maxValue && s !== oa.doneInactive && Ua.base__done),
                    children: [
                        e.jsx('div', { className: k(Ua.border, Ua[`border__${t}`], o?.border) }),
                        e.jsx('div', { className: k(Ua.background, o?.background) }),
                        e.jsx(pa, { backgroundPattern: n, className: o?.backgroundPattern }),
                        a.children,
                    ],
                }),
            });
        };
    ((qa.Fill = Pa),
        (qa.Delta = xa),
        (qa.PreviewDelta = $a),
        (qa.NumberIndicators = Ma),
        (qa.sizes = ra),
        (qa.statuses = oa),
        (qa.animations = sa));
    const Va = 'ProgressBar_wrapper_a944db13',
        Ga = [aa, ia],
        Ha = s.memo(function ({ progressBar: t, fill: n, delta: s, wrapperSpringProps: r }) {
            const o = Qs({ from: { opacity: 1 }, ...r });
            return e.jsx(qa, {
                ...t,
                children: e.jsxs(hr.div, {
                    className: Va,
                    style: o,
                    children: [
                        e.jsx(qa.Fill, { ...n }),
                        void 0 !== s && e.jsx(qa.Delta, { ...s, steps: s?.steps ?? Ga }),
                    ],
                }),
            });
        }),
        Qa = 'ProgressStats_label_6e975df0',
        Wa = 'ProgressStats_receivedInBattle_d3abd2fe',
        Ya = Lr('ProgressStatsLabel', Qa),
        Xa = s.forwardRef(({ className: t, text: n, transitionProps: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                className: k(Qa, t),
                ref: o,
                children: e.jsx($o, { value: n, transition: s, children: J }),
            }),
        ),
        Za = s.forwardRef(({ value: t, className: n, total: s, ...r }, o) =>
            e.jsx('div', {
                ...r,
                ref: o,
                className: k(Wa, n),
                children: e.jsx(jo, {
                    path: s ? 'battle_results.progression.totalEarned' : 'common.plusValueWithSpace',
                    params: { value: t },
                }),
            }),
        ),
        Ka = s.forwardRef(({ value: t, className: n, total: r, transition: o, target: a, ...i }, l) => {
            const c = Ne(),
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
                    className: k(Wa, n),
                    children: e.jsx($o, {
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
                        children: (t) => e.jsx(jo, { path: t.textPath, params: { value: t.value } }),
                    }),
                })
            );
        }),
        Ja = Lr('ProgressStats');
    ((Ja.Label = Ya), (Ja.ReceivedValue = Za), (Ja.AnimatedReceivedValue = Ka), (Ja.AnimatedLabel = Xa));
    const ei = s.createContext(void 0);
    function ti() {
        const e = s.useContext(ei);
        return (me(void 0 !== e, 'useCondition must be used under conditionContext.Provider'), e);
    }
    const ni = s.createContext(void 0);
    function si() {
        const e = s.useContext(ni);
        return (me(void 0 !== e, 'useMissionCard must be used under missionCardContext.Provider'), e);
    }
    const ri = {
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
        oi = ['win', 'isAlive'],
        ai = N.cubicBezier(0.33, 0, 0.25, 1);
    const ii = {
        Condition: function (t) {
            const n = t.completed && t.multiQuest;
            return (
                t.lastCondition && n && t.animation && (t.rewardsGlowRef?.start(), t.completedMarkRef?.start()),
                e.jsx(ii.Root, {
                    condition: t.value,
                    children: e.jsxs(ii.Body, {
                        children: [
                            e.jsx(ii.Title, { questsAmount: t.questsAmount }),
                            e.jsx(ii.Description, { guiDisabledDescription: t.guiDisabledDescription }),
                            !n &&
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
                children: e.jsx('div', { ...n, className: k(ri.content, t.completed && ri.content__completed) }),
            });
        },
        Description: function ({ guiDisabledDescription: t }) {
            const { description: n, conditionType: s } = ti();
            return s && oi.includes(s)
                ? null
                : e.jsx('div', {
                      className: ri.description,
                      children: e.jsx(Jo, { text: M(t ?? n), className: ri.multiline }),
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
                            className: k(ri.titleIcon, i.default.isGold && ri.titleIcon__gold),
                        }),
                    o ? E.formatNumber('integral', o.total) : n?.trim(),
                ],
            });
        },
        Body: Lr('MissionCardBody', ri.body),
        Progression: function ({ completed: t, rewardsGlowRef: n, completedMarkRef: r }) {
            const { progression: o } = ti(),
                { animation: a, immediateAnimation: i } = si(),
                l = Ys(),
                c = Ys(),
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
                            animationType: sa.grow,
                            status: oa.doneStatic,
                            maxValue: o.total,
                            className: ri.progressbar,
                            maxValueAchieved: d === o.total,
                        },
                        delta: i
                            ? void 0
                            : {
                                  from: u,
                                  steps: u === d ? [] : [aa, ia],
                                  growAnimationConfig: { duration: 600, easing: ai },
                                  shrinkAnimationConfig: { duration: 600, easing: ai },
                                  onState(e) {
                                      e === la &&
                                          d === o.current &&
                                          o.earned > 0 &&
                                          (l.start(), c.start(), t && r?.start());
                                  },
                              },
                        fill: { animationConfig: { duration: i ? 0 : 600, easing: ai } },
                    };
            }, [i, u, d, o, t, l, c, r]);
            return o
                ? (me.log(
                      o.total >= o.current && o.current >= 0,
                      `Unexpected progression values: current(${o.current}), total(${o.total})`,
                  ),
                  e.jsxs('div', {
                      className: ri.progression,
                      children: [
                          void 0 !== p && e.jsx(Ha, { progressBar: p.progress, delta: p.delta, fill: p.fill }),
                          e.jsxs('div', {
                              className: ri.numberStats,
                              children: [
                                  e.jsx(Qo, {
                                      current: i ? o.current : d,
                                      total: o.total,
                                      className: ri.progressionCounter,
                                      transitionCurrent: { ref: l, immediate: i },
                                      transitionTotal: { immediate: i },
                                  }),
                                  e.jsx(Ja.AnimatedReceivedValue, {
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
        ci = ((e) => (
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
        ))(ci || {}),
        ui = ((e) => (
            (e.MULTI = 'multi'),
            (e.CURRENCY = 'currency'),
            (e.PREMIUM_PLUS = 'premium_plus'),
            (e.NUMBER = 'number'),
            (e.STRING = 'string'),
            e
        ))(ui || {}),
        di = ((e) => (
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
        ))(di || {}),
        mi = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(mi || {}),
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
        ))(pi || {});
    function fi(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    var hi,
        gi = { exports: {} };
    var _i,
        bi =
            (hi ||
                ((hi = 1),
                (_i = gi),
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
                    _i.exports ? ((t.default = t), (_i.exports = t)) : (window.classNames = t);
                })()),
            gi.exports);
    const yi = fi(bi),
        vi = [
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
        wi = [li.Gold, li.Credits, li.Crystal, li.FreeXp],
        xi = [li.BattlePassPoints, li.EquipCoin],
        Ei = [li.PremiumPlus, li.Premium],
        Ri = ['engravings', 'backgrounds'],
        Ci = ['engraving', 'background'],
        Ti = (e, t = ci.Small) => {
            const { name: n, type: s, value: r, icon: o, item: a, dogTagType: i } = e,
                l = t === ci.S24x24 ? ci.Small : t,
                c = ((e) => {
                    switch (e) {
                        case ci.S600x450:
                            return 'c_600x450';
                        case ci.S400x300:
                            return 'c_400x300';
                        case ci.S296x222:
                            return 'c_296x222';
                        case ci.S232x174:
                            return 'c_232x174';
                        case ci.Big:
                            return 'c_80x80';
                        case ci.Small:
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
                        const s = Ri[e];
                        if (s) {
                            const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(s),
                                o = r.$dyn(n);
                            return !o && Ci[e] ? `${r.$dyn(Ci[e])}` : `${o}`;
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
        Si = [ci.Small, ci.Big],
        Pi = {
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
        ki = p.resolve('images'),
        Ni = new Map([
            [ci.S24x24, ci.Small],
            [ci.S48x48, ci.Small],
        ]),
        Ai = ({
            name: t,
            image: n,
            isPeriodic: s = !1,
            isFixedBoxSize: r = !0,
            size: o = ci.Big,
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
            const g = Ni.has(o) ? Ni.get(o) : o,
                _ = ((e, t) => {
                    if (void 0 === t || !Si.includes(e)) return null;
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
                        case di.ATTACHMENT_RARE:
                            return pi.ATTACHMENT_RARE;
                        case di.ATTACHMENT_EPIC:
                            return pi.ATTACHMENT_EPIC;
                        case di.ATTACHMENT_LEGENDARY:
                            return pi.ATTACHMENT_LEGENDARY;
                    }
                })(a),
                y = ((e, t) => {
                    const n = p.resolve('intl');
                    if (void 0 === e) return null;
                    switch (t) {
                        case ui.MULTI: {
                            const t = Number(e);
                            return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                        }
                        case ui.CURRENCY:
                        case ui.NUMBER:
                            return n.formatNumber(n.numberFormats[0] || 'integral', Number(e));
                        case ui.PREMIUM_PLUS: {
                            const t = Number(e);
                            return isNaN(t) ? e : null;
                        }
                        default:
                            return e;
                    }
                })(i, l),
                v = wr({ contentId: f?.contentId ?? 0, args: f?.args, resId: f?.resId, decoratorId: f?.decoratorId }),
                w = xr({ header: h?.header, body: h?.body });
            return e.jsxs('div', {
                className: yi(Pi.base, Pi[`base__${o}`], !r && Pi.base__dynamicBox, d),
                style: u,
                ...v,
                children: [
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs('div', {
                                className: yi(Pi.image, r ? Pi.image__fixedBox : Pi[`image__${o}`], m?.image),
                                children: [
                                    _ &&
                                        e.jsx('div', {
                                            className: yi(Pi.highlight, m?.highlight),
                                            style: {
                                                backgroundImage: `url(${ki.readOrEmpty(`quests.bonuses.${g}.${_}_highlight`)})`,
                                            },
                                        }),
                                    n &&
                                        e.jsx('div', {
                                            className: yi(Pi.icon, m?.rewardIcon),
                                            style: { backgroundImage: `url(${n})` },
                                        }),
                                    b &&
                                        e.jsx('div', {
                                            className: yi(Pi.overlay, m?.overlay),
                                            style: {
                                                backgroundImage: `url(${ki.readOrEmpty(`quests.bonuses.${g}.${b}_overlay`)})`,
                                            },
                                        }),
                                ],
                            }),
                            y &&
                                e.jsx('div', {
                                    className: yi(Pi.info, Pi[`info__${t}`], l === ui.MULTI && Pi.info__multi, m?.info),
                                    children: y,
                                }),
                            c && e.jsx('div', { className: Pi.title, children: c }),
                        ],
                    }),
                    s && e.jsx('div', { className: yi(Pi.timer, m?.periodicIcon), ...w }),
                ],
            });
        },
        Ii = Object.fromEntries(Object.entries(vo).map(([e]) => [e, (e) => e]));
    const Mi = 'RewardsList_b956755b',
        ji = 'RewardsList_base__vertical_59db3c9f',
        Di = 'RewardsList_reward_fc200613',
        Oi = 'RewardsList_reward__vertical_5f09c6e0',
        Bi = 'RewardsList_boxRewardClassName_882c908d',
        Fi = { [ci.S24x24]: ci.Small, [ci.S48x48]: ci.Small },
        $i = s.memo(function ({
            data: t,
            isFixedBoxSize: n,
            size: s = ci.Big,
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
                        ? `${f.readOrEmpty(`quests.bonuses.${Fi[s] ?? s}.default`)}`
                        : void 0,
                g =
                    c ||
                    (function (e, t = {}) {
                        const n = mo(e, Io);
                        return String(So(n, Ii, t));
                    })(Ao(m.readOrEmpty('tooltips.quests.awards.additional.bottom')), { count: t.length - (o || 0) });
            return e.jsx('div', {
                className: yi(Mi, r && ji, a),
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
                                                  className: yi(Di, r && Oi, i),
                                                  children: e.jsx(Ai, { size: s, isFixedBoxSize: n, ...t }),
                                              },
                                              o,
                                          ),
                                      ),
                                  e.jsx('div', {
                                      className: yi(Di, r && Oi, i),
                                      children: e.jsx(Ai, {
                                          name: 'more',
                                          isFixedBoxSize: n,
                                          image: h,
                                          size: s,
                                          value: g,
                                          tooltipArgs: l,
                                          className: yi(Bi, u),
                                          classNames: d,
                                      }),
                                  }),
                              ],
                          })
                        : t.map((t, o) =>
                              e.jsx(
                                  'div',
                                  {
                                      className: yi(Di, r && Oi, i),
                                      children: e.jsx(Ai, { size: s, isFixedBoxSize: n, ...t }),
                                  },
                                  o,
                              ),
                          ),
            });
        });
    function Li({ bonuses: t, size: n, resId: r, boxRewardTooltipArgs: o, maxRewardsCount: a, questId: i, ...l }) {
        const c = s.useMemo(
                () =>
                    ce(t, (e) => {
                        return {
                            size: n,
                            name: e.name,
                            image: Ti(e, n),
                            value: e.value,
                            valueType:
                                ((o = e.name),
                                vi.includes(o)
                                    ? ui.MULTI
                                    : wi.includes(o)
                                      ? ui.CURRENCY
                                      : xi.includes(o)
                                        ? ui.NUMBER
                                        : Ei.includes(o)
                                          ? ui.PREMIUM_PLUS
                                          : ui.STRING),
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
        return e.jsx($i, { ...l, data: c, count: u, boxRewardTooltip: d, size: n });
    }
    const Ui = 'AnimatedRewards_glowContainer_82630782',
        zi = 'AnimatedRewards_c981a355',
        qi = 'AnimatedRewards_rewardsWrapper_11b576b3',
        Vi = 'AnimatedRewards_glow_3a2cd010',
        Gi = 'AnimatedRewards_glowImage_4ecce597',
        Hi = N.cubicBezier(0.33, 0, 0.67, 1),
        Qi = N.cubicBezier(0.23, 0, 0.57, 1),
        Wi = s.forwardRef(function (
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
            const d = Ys(),
                [m] = Qs(() => ({
                    ref: t,
                    from: { opacity: 0, scale: 0.6 },
                    to: async (e) => {
                        (await e({ opacity: 1, scale: 0.8, config: { duration: 330, easing: Hi } }),
                            d.start(),
                            await e({ opacity: 0, scale: 1, config: { duration: 330, easing: Hi } }));
                    },
                })),
                [p] = Qs(() => ({
                    ref: d,
                    immediate: n,
                    from: { opacity: 1 },
                    to: { opacity: 0.4, config: { duration: 330, easing: Qi } },
                }));
            return (
                s.useEffect(() => {
                    n && (t?.pause(), t?.start({ immediate: !0, to: { opacity: 0, scale: 1 } }), d.start());
                }, [n]),
                e.jsxs('div', {
                    ref: u,
                    className: k(zi, i),
                    children: [
                        e.jsx(hr.div, {
                            style: p,
                            className: k(qi, l?.rewardsWrapper),
                            children: e.jsx(Li, { ...c, maxRewardsCount: r, bonuses: o, boxRewardTooltipArgs: a }),
                        }),
                        e.jsx('div', {
                            className: k(Ui, l?.glowContainer),
                            children: pe(r ? Math.min(r, o.length) : o.length, (t) =>
                                e.jsx(
                                    hr.div,
                                    {
                                        style: m,
                                        className: Vi,
                                        children: e.jsx(
                                            Ee,
                                            { path: 'post_battle.progression.reward_glow', className: Gi },
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
        Yi = p.resolve('views');
    function Xi({ limit: e, rewardsTooltipResId: t, ...n }) {
        return {
            contentId: Yi.read((e) => e.lobby.tooltips.AdditionalBattlePassRewardsTooltip('resId')),
            args: { showFromIndex: e - 1, ...n },
            resId: t,
        };
    }
    function Zi({
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
            size: ci.Small,
            resId: o,
            boxRewardTooltipArgs: Xi({
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
            ? e.jsx(Wi, {
                  ...p,
                  animationRef: n,
                  immediateAnimation: a,
                  className: d,
                  classNames: { glowContainer: d },
              })
            : e.jsx(Li, { ...p, classMix: d });
    }
    const Ki = 'CompletedMark_fc4eee08',
        Ji = 'CompletedMark_glow_33775180',
        el = N.cubicBezier(1, 0, 0.95, 1),
        tl = N.cubicBezier(0.45, 0, 0.52, 1),
        nl = s.forwardRef(function (
            {
                target: t,
                animationRef: n,
                className: o,
                path: a,
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
                _ = Ne(),
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
                [y, v] = Qs(() => ({ from: { opacity: 0 } })),
                [w] = Qs(() => ({
                    ref: n,
                    from: { maskSize: '0% 100%', opacity: 0 },
                    to: [
                        {
                            maskSize: '40% 80%',
                            opacity: 0.5,
                            config: { duration: 100, easing: el },
                            immediate: g.current?.immediate,
                            onStart: () => {
                                !0 !== g.current?.immediate &&
                                    _.play('showCheckMark', { target: t || 'mission-progress:checkmark' });
                            },
                        },
                        {
                            maskSize: '100% 100%',
                            opacity: 1,
                            config: { duration: 100, easing: el },
                            immediate: g.current?.immediate,
                        },
                    ],
                    onRest: () => {
                        v.start({
                            to: [
                                { opacity: 0.6, config: { duration: 160, easing: tl } },
                                { opacity: 0, config: { duration: 160, easing: tl } },
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
                    className: k(Ki, o),
                    children: [
                        e.jsx(hr.div, {
                            style: y,
                            className: k(Ji, m?.glow),
                            children: e.jsx(Ee, {
                                width: c?.width ?? b.glow.width,
                                height: c?.height ?? b.glow.height,
                                path: c?.path ?? b.glow.path,
                            }),
                        }),
                        e.jsx(hr.div, {
                            ...f,
                            style: { ...w, ...d },
                            ref: h,
                            className: m?.icon,
                            children: e.jsx(Ee, {
                                width: i ?? b.icon.width,
                                height: l ?? b.icon.height,
                                path: a ?? b.icon.path,
                            }),
                        }),
                    ],
                })
            );
        });
    s.forwardRef(function ({ path: t, width: n, height: s, ...o }, a) {
        const i = r.useAdaptive(
            { size: 24, path: 'post_battle.progression.done_24x24' },
            { large: { size: 32, path: 'post_battle.progression.done_32x32' } },
        );
        return e.jsx(Ee, { ...o, ref: a, width: n ?? i.size, height: s ?? i.size, path: t ?? i.path });
    });
    var sl = ((e) => (
        (e.EASY = 'easy'),
        (e.MEDIUM = 'medium'),
        (e.HARD = 'hard'),
        (e.BONUS = 'bonus'),
        (e.PREMIUM = 'premium'),
        (e.EPIC = 'epic'),
        e
    ))(sl || {});
    function rl({ value: t, questType: n, className: s }) {
        return t
            ? e.jsx('div', {
                  className: k(ri.iconImage, ri.iconImage__regular, n === sl.PREMIUM && ri.iconImage__gold, s),
                  style: { backgroundImage: `url(${t})` },
              })
            : null;
    }
    const ol = (e) =>
            m.createElement(
                'svg',
                { width: 13, height: 7, viewBox: '0 0 13 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
                m.createElement('path', { d: 'M9 7L13 3.49026L9 0V2.98374L0 3V4H9V7Z', fill: '#454443' }),
            ),
        al = p.resolve('strings');
    function il(t) {
        return 'none' === t.type
            ? e.jsx('div', { className: k(ri.separator, ri.separator__none, t.className) })
            : 'union' === t.type
              ? e.jsx('div', { className: k(ri.separator, ri.separator__union, t.className) })
              : 'or' === t.type
                ? e.jsxs('div', {
                      className: k(ri.separator, ri.separator__or, t.className),
                      children: [
                          e.jsx(ol, { width: 16, height: 16, className: ri.invertedArrow }),
                          al.readOrEmpty('battle_results.conditions.type.or'),
                          e.jsx(ol, { width: 16, height: 16, className: ri.arrow }),
                      ],
                  })
                : e.jsx('div', {
                      className: k(ri.separator, ri.separator__and, t.className),
                      children: al.readOrEmpty('battle_results.conditions.type.and'),
                  });
    }
    function ll(t) {
        if (!t.children) return null;
        const n = s.Children.toArray(t.children);
        return e.jsx(e.Fragment, {
            children: ue(
                n,
                (e) => null != e,
                (n, r) => e.jsxs(s.Fragment, { children: [r > 0 && e.jsx(il, { ...t }), n] }, r),
            ),
        });
    }
    const cl = { 1: 5, 2: 5, 3: 3 };
    function ul(e) {
        return 'item' === e.type ? 1 : e.groups.reduce((e, t) => e + ul(t), 0);
    }
    function dl(e) {
        if ('item' === e.type) return e.condition?.icon;
        for (const t of e.groups) {
            const e = dl(t);
            if (e) return e;
        }
    }
    function ml(t) {
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
            : e.jsx(ll, {
                  type: n.separate,
                  children: ue(
                      n.groups,
                      (e) => 'items' === e.type || e.index < 5,
                      (s, r) =>
                          e.jsx(
                              ml,
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
    const pl = 'R.images.gui.maps.icons.post_battle.general_quest',
        fl = { default: { path: `${pl}_32` }, medium: { path: pl } },
        hl = s.memo(function (t) {
            const n = Ys(),
                o = Ys(),
                { animation: a, immediateAnimation: i } = si(),
                { icon: l, questsAmount: c } = s.useMemo(() => {
                    const e = ul(t.value);
                    return { icon: e > 1 ? (t.generalIcon ?? fl) : (dl(t.value) ?? fl), questsAmount: e };
                }, [t.generalIcon, t.value]),
                u = r.useAdaptive(l.default, l),
                d = cl[c] ?? 0,
                m = c > 3 ? 'groups__manyQuests' : 3 === c ? 'groups__threeQuests' : 'groups__twoQuests';
            return e.jsxs('div', {
                className: k(ri.groups, c > 4 && ri.groups__overflow, c > 1 && ri[m]),
                children: [
                    e.jsx('div', {
                        className: ri.iconContainer,
                        children: t.completed
                            ? e.jsx(nl, {
                                  animationRef: n,
                                  className: ri.completedMark,
                                  classNames: { icon: ri.completedMarkIcon },
                                  springProps: { immediate: i, delay: 170 },
                              })
                            : e.jsx(rl, { value: u.path, questType: t.questType }),
                    }),
                    e.jsx('div', {
                        className: ri.questsWithRewards,
                        children: e.jsxs(ll, {
                            type: t.separate ?? 'none',
                            children: [
                                e.jsx('div', {
                                    className: ri.questsContainer,
                                    children: e.jsx(ml, {
                                        value: t.value,
                                        completed: t.completed,
                                        questsAmount: c,
                                        guiDisabledDescription: t.guiDisabledDescription,
                                        rewardsGlowRef: o,
                                        completedMarkRef: n,
                                        progressBarTarget: t.progressBarTarget,
                                        animation: i || a,
                                    }),
                                }),
                                d > 1 &&
                                    e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx('div', { className: ri.gap }),
                                            e.jsx('div', {
                                                className: ri.rewardsContainer,
                                                children: e.jsx(Zi, {
                                                    completed: t.completed,
                                                    rewardsGlowRef: o,
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
    function gl({ completed: t, progress: n, animation: r, immediateAnimation: o, target: a, ...i }) {
        const l = Ne(),
            c = s.useMemo(() => ({ completed: t, animation: r, immediateAnimation: o }), [t, r, o]);
        return e.jsx(ni.Provider, {
            value: c,
            children: e.jsx(Yo, {
                ...i,
                onMouseEnter: (e) => {
                    (i.onMouseEnter?.(e),
                        !0 !== i.disabled &&
                            l.play('mouse-enter', { target: a || 'mission-progress:mission-card', original: e }));
                },
                progressionCountProps: n,
                className: k(ri.base, t && ri.base__completed, i.className),
                classNames: { content: ri.cardContent, ...i.classNames },
            }),
        });
    }
    ((gl.Content = ii), (gl.Groups = hl), (gl.Separators = ll));
    const _l = {
        showCheckMark: { 'mission-progress:checkmark': 'umg_hub_quest_complete' },
        numbersShown: {
            'mission-progress:received-value': 'gui_pbs_missions_progress_stats',
            'mission-progress:progress-stats': 'gui_pbs_missions_progress_stats',
        },
    };
    function bl(e) {
        for (let t = 0; t < document.styleSheets.length; t++) {
            const n = document.styleSheets.item(t);
            if (n.ownerNode === e) return n;
        }
    }
    function yl(e) {
        for (let t = 0; t < e.cssRules.length; t++) e.deleteRule(t);
    }
    function vl(e) {
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
                          const n = bl(t);
                          if (!n) throw new Error(`Can't find sheets for ${t}`);
                          (yl(n),
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
                        const n = bl(t);
                        if (!n) return console.error(`Can't find sheets for ${t.id} (${e}). Clean rules skipped.`);
                        yl(n);
                    })(e, t);
                }),
            { promise: s, link: t, cleanup: o.dispose }
        );
    }
    function wl(t) {
        return e.jsx(e.Fragment, { children: t.children });
    }
    function xl(t) {
        return e.jsx(wl, {
            children: e.jsx(ke, {
                overrides: t.soundsOverrides,
                severity: t.soundSeverity,
                silent: t.soundsOff,
                children: t.children,
            }),
        });
    }
    const El = p.resolve('strings'),
        Rl = p.resolve('aliases').read((e) => e.battle_results.progression.WeeklyMissions('resId')),
        [Cl, Tl] = (
            (t = 'DataLayerProvider') =>
            (n, r, o) => {
                const a = s.createContext(null);
                function i(i) {
                    const { mode: l, options: c, children: u, mocks: d } = i,
                        m = s.useContext(Ar),
                        p = l ?? m.mode,
                        f = d ?? m.mocks,
                        h = s.useRef([]),
                        g = o?.useRequires?.(),
                        _ = je((e, s, a) => {
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
                                    observableModel: Mr(l, e, c),
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
        )()(
            ({ observableModel: e }) => {
                const t = { quests: e.arrayClone('weeklyQuests') };
                return {
                    quests: jr(() =>
                        ce(t.quests.get(), (e) => ({
                            value: {
                                type: 'item',
                                index: 0,
                                condition: {
                                    icon: {
                                        default: {
                                            path: `R.images.gui.maps.icons.userMissions.weekly.commonCond.x32x32.c_${e.commonConditionId}`,
                                        },
                                        large: {
                                            path: `R.images.gui.maps.icons.userMissions.weekly.commonCond.x80x80.c_${e.commonConditionId}`,
                                        },
                                    },
                                    description: El.readOrEmpty(
                                        `weekly_quests.condition.common.c_${e.commonConditionId}`,
                                    ),
                                    progression: {
                                        current: e.currentProgress,
                                        total: e.totalProgress,
                                        earned: e.earned,
                                    },
                                },
                            },
                            bonuses: e.bonuses,
                            completed: e.isCompleted,
                            rewardsTooltipResId: Rl,
                            questId: e.id,
                        })).sort((e, t) => Number(t.completed) - Number(e.completed)),
                    ),
                };
            },
            ({ externalModel: e }) => ({ navigateTo: e.createCallbackNoArgs('onNavigate') }),
        ),
        Sl = 'WeeklyQuests_divider_dc4e9ffb',
        Pl = 'mission-progress:weekly-quests:mission-card',
        kl = p.resolve('aliases'),
        Nl = p.resolve('strings'),
        Al = { rootId: kl.read((e) => e.battle_results.progression.WeeklyMissions('resId')) },
        Il = i.observer(function ({ animation: t, immediateAnimation: n }) {
            const r = Ne(),
                { model: o, controls: a } = Tl();
            return e.jsx(e.Fragment, {
                children: e.jsx(gl, {
                    target: Pl,
                    title: Nl.readOrEmpty('user_missions.hub.basic_missions.weekly.title'),
                    onButtonAction: a.navigateTo,
                    onClick: function (e) {
                        (r.play('click', { target: Pl, original: e }), a.navigateTo());
                    },
                    animation: t,
                    immediateAnimation: n,
                    actionTooltipParams: { body: Nl.readOrEmpty('battle_results.progression.linkBtn.info') },
                    children: o
                        .quests()
                        .map((t, n, r) =>
                            e.jsxs(
                                s.Fragment,
                                {
                                    children: [
                                        e.jsx(gl.Groups, { ...t }),
                                        r.length - 1 !== n && e.jsx(Ce, { classNames: { base: Sl } }),
                                    ],
                                },
                                t.questId,
                            ),
                        ),
                }),
            });
        });
    function Ml(t) {
        return e.jsx(Cl, {
            options: Al,
            children: e.jsx(xl, {
                soundsOverrides:
                    ((n = _l),
                    Object.entries(n).reduce(
                        (e, [t, n]) => (
                            (e[t] = (e) => {
                                e && e.target in n ? $.sound(n[e.target]) : Te[t]?.(e);
                            }),
                            e
                        ),
                        {},
                    )),
                children: e.jsx(Il, { ...t }),
            }),
        });
        var n;
    }
    var jl;
    exports.plugin =
        ((jl = async ({ url: t }) => {
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
                        const s = vl(
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
                        const r = X(Al, { name: 'WeeklyQuestsProgressDataLayer' }),
                            o =
                                (u(d, ((c = r.dispose), { [Symbol.dispose]: c })),
                                (function (e, t) {
                                    if (Array.isArray(e)) return e.some(t);
                                    for (let n = 0; n < e.length; n++) if (t(le(e, n), n, e)) return !0;
                                    return !1;
                                })(r.readByPath('weeklyQuests'), (e) => e.isCompleted));
                        return {
                            animated: !0,
                            component: Ml,
                            notifications: o
                                ? [
                                      {
                                          id: ye(),
                                          item: e.jsx(jo, {
                                              path: 'battle_results.missionsProgress.notificationsTabs.weekly',
                                          }),
                                      },
                                  ]
                                : void 0,
                            categoryOrder: 750,
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
        async (e) => ({ ...(await jl(e)), id: e.id }));
});

export default exports;
