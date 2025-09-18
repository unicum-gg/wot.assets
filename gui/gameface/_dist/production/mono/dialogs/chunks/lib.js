var e,
    t = Object.defineProperty,
    n = (e, n, r) =>
        ((e, n, r) => (n in e ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[n] = r)))(
            e,
            'symbol' != typeof n ? n + '' : n,
            r,
        );
import {
    c as r,
    a as o,
    b as s,
    d as i,
    l as a,
    r as c,
    j as u,
    e as l,
    o as d,
    f as h,
    u as f,
    R as m,
    g as p,
    h as g,
} from './vendor.js';
const w = r();
function y(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function b(e, t) {
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
    constructor(e, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = y(this.prefix, e),
            o = (function (e, t) {
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
            })(this.root, r);
        return void 0 === o ? ('silent' !== n && b(`Resource not found: ${r}`, n), t()) : o;
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
const x = { integral: 0, gold: 1 },
    E = { fractional: 0, woZeroDigits: 1 },
    k = Object.keys(x),
    S = Object.keys(E);
function N(e) {
    return Number.isFinite(e)
        ? e < 0
            ? (console.error(`Negative timestamp (${e}) is not allowed. Clamping to 0.`), 0)
            : e > Number.MAX_SAFE_INTEGER
              ? (console.error(`Number(${e}) is bigger than MAX_SAFE_INTEGER. Clamping to ${Number.MAX_SAFE_INTEGER}.`),
                Number.MAX_SAFE_INTEGER)
              : e
        : (console.error(`Incorrect value to convert. Value is ${e}. Expected a finite number.`), 0);
}
const C = { full: _.FullTime, short: _.ShortTime },
    T = Object.keys(C);
const $ = { short: 0, full: 1 },
    j = {
        isNumberFormat: function (e) {
            return e in x;
        },
        formatNumber: function (e, t) {
            return window.systemLocale.getNumberFormat(t, x[e]);
        },
        numberFormats: k,
        isRealFormat: function (e) {
            return e in E;
        },
        formatReal: function (e, t) {
            return window.systemLocale.getRealFormat(t, E[e]);
        },
        realFormats: S,
        formatDateTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(N(t), e, n);
        },
        dateTimeFormats: _,
        formatTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(N(t), e, n);
        },
        timeFormats: T,
        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
        system: {
            time: (e, t) => window.systemLocale.getTimeFormat(N(e), $[t]),
            date: (e, t) => window.systemLocale.getDateFormat(N(e), $[t]),
        },
    };
function A(e, t) {
    const n = e.split('.');
    if (window.R && window.R.strings) {
        const e = n[n.length - 1];
        if (!e) return;
        const r = window.R.strings,
            o = n.slice(0, -1).reduce((e, t) => {
                if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
            }, r);
        if (!o) return;
        return 'function' == typeof o[e] ? (t ? o[e](t) : o[e]()) : void 0;
    }
    throw new Error('R class with strings field is not defined');
}
class L {
    constructor(e) {
        this.prefix = e;
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = y(this.prefix, e),
            o = A(r);
        return void 0 === o ? ('silent' !== n && b(`Resource not found: ${r}`, n), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = y(this.prefix, e),
            n = A(t);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const o = y(this.prefix, e),
            s = A(o, t);
        return void 0 === s ? ('silent' !== r && b(`Resource not found: ${o}`, r), n()) : s;
    }
    pluralOrEmpty(e, t, n = 'warn') {
        return this.pluralOr(e, t, () => '', n);
    }
}
class O {
    constructor(e = window.R.videos) {
        this.root = e;
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = (function (e, t) {
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
        })(this.root, e);
        return void 0 === r ? ('silent' !== n && b(`Resource not found: ${e}`, n), t()) : r;
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
w.register({
    strings: i(() => new L()).singleton(),
    images: i(() => new v(window.R.images.gui.maps.icons)).singleton(),
    atlases: i(() => new v(window.R.atlases)).singleton(),
    videos: i(() => new O(window.R.videos)).singleton(),
    views: s(
        class {
            read(e) {
                return e(window.R.views);
            }
        },
    ).singleton(),
    aliases: s(
        class {
            read(e) {
                return e(window.R.aliases);
            }
        },
    ).singleton(),
    sounds: s(
        class {
            play(e) {
                const t = window.R.sounds[e];
                'function' == typeof t
                    ? engine.call('PlaySound', t.apply(window.R.sounds))
                    : b(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: o(R.strings.settings.LANGUAGE_CODE()),
    intl: o(j),
});
const F = P('clientResized'),
    M = P('self.onScaleUpdated'),
    B = { down: P('mousedown'), up: P('mouseup'), move: P('mousemove') };
function z(e) {
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
    function r() {
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
                    const o = `mouse${t}`,
                        s = B[t]((e) => n([e, 'outside']));
                    function i(e) {
                        n([e, 'inside']);
                    }
                    return (
                        window.addEventListener(o, i),
                        r(),
                        () => {
                            (s(), window.removeEventListener(o, i), (e.listeners -= 1), r());
                        }
                    );
                };
            })(n)),
            t
        ),
        {},
    );
})();
const I = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    U = { ...Object.keys(I).reduce((e, t) => ((e[t] = () => z(I[t])), e), {}), sound: z },
    H = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    X = {
        onTextureFrozen: P('self.onTextureFrozen'),
        onTextureReady: P('self.onTextureReady'),
        onDomBuilt: P('self.onDomBuilt'),
        onLoaded: P('self.onLoaded'),
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
        onDisplayChanged: P('self.onShowingStatusChanged'),
        onFocusUpdated: P('self.onFocusChanged'),
        children: {
            onAdded: P('children.onAdded'),
            onLoaded: P('children.onLoaded'),
            onRemoved: P('children.onRemoved'),
            onAttached: P('children.onAttached'),
            onTextureReady: P('children.onTextureReady'),
            onRequestPosition: P('children.requestPosition'),
        },
    };
function W() {
    return viewEnv.setEventHandled();
}
function q() {
    return viewEnv.isEventHandled();
}
Object.keys(H).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === H[t]), e), {});
class G {
    constructor() {
        n(this, 'listeners', new Set());
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
function V(
    { initializer: e = !0, rootId: t = 0, getRoot: n = K, context: r = 'model' } = {},
    { name: o = 'DataLayer' } = {},
) {
    const s = new Map(),
        i = { subscribersNotified: new G() },
        a = engine.whenReady.then(() => {
            function e(e, t, n) {
                (n.forEach((n) => {
                    const r = s.get(n);
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
    function c() {
        try {
            const e = n(t);
            return r.split('.').reduce((e, t) => e[t], e);
        } catch (e) {
            throw new Error(`Failure get root of ${o}. Root id: ${t}. Context: ${r}`);
        }
    }
    const u = (e) => {
        const n = c();
        if ('string' != typeof e || 0 === e.length) return n;
        try {
            return e.split('.').reduce((e, t) => {
                if (!(t in e)) throw new Error(`Key "${t}" doesn't exists in part of model`);
                const n = e[t];
                return 'function' == typeof n ? n.bind(e) : n;
            }, n);
        } catch (s) {
            throw new Error(`Failure readByPath in ${o}. Root id: ${t}. Context: ${r}:\n${s}\n`);
        }
    };
    function l(e) {
        viewEnv.removeDataChangedCallback(e, t) ? s.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (n, o) => {
            const i = (function (e, t, n) {
                return viewEnv.addDataChangedCallback(e, t, n);
            })('string' == typeof o ? `${r}.${o}` : r, t, !0);
            return (s.set(i, n), e && n(u(o), []), i);
        },
        readByPath: u,
        readSafeByPath: (e) => {
            const t = c();
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
            if (0 === t || window.subViews.ids().includes(t)) for (const e of s.keys()) l(e);
            a.then((e) => e());
        },
        unsubscribe: l,
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
function Y() {
    return !1;
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((i.prototype.append = function (e, t) {
                ((e = o(e)), (t = s(t)));
                var n = this.map[e];
                (n || ((n = []), (this.map[e] = n)), n.push(t));
            }),
                (i.prototype.delete = function (e) {
                    delete this.map[o(e)];
                }),
                (i.prototype.get = function (e) {
                    var t = this.map[o(e)];
                    return t ? t[0] : null;
                }),
                (i.prototype.getAll = function (e) {
                    return this.map[o(e)] || [];
                }),
                (i.prototype.has = function (e) {
                    return this.map.hasOwnProperty(o(e));
                }),
                (i.prototype.set = function (e, t) {
                    this.map[o(e)] = [s(t)];
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
            (l.call(d.prototype),
                l.call(m.prototype),
                (self.Headers = i),
                (self.Request = d),
                (self.Response = m),
                (self.fetch = function (t, n) {
                    var o;
                    return (
                        (o = d.prototype.isPrototypeOf(t) && !n ? t : new d(t, n)),
                        new fetch.Promise(function (t, n) {
                            var s = (function () {
                                return r && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function i() {
                                if (4 === s.readyState) {
                                    var e = 1223 === s.status ? 204 : s.status;
                                    if (e < 100 || e > 599) n(new TypeError('Network request failed'));
                                    else {
                                        var r = {
                                                status: e,
                                                statusText: s.statusText,
                                                headers: f(s),
                                                url:
                                                    'responseURL' in s
                                                        ? s.responseURL
                                                        : /^X-Request-URL:/m.test(s.getAllResponseHeaders())
                                                          ? s.getResponseHeader('X-Request-URL')
                                                          : void 0,
                                            },
                                            o = 'response' in s ? s.response : s.responseText;
                                        t(new m(o, r));
                                    }
                                }
                            }
                            ('cors' === o.credentials && (s.withCredentials = !0),
                                (s.onreadystatechange = i),
                                self.usingActiveXhr ||
                                    ((s.onload = i),
                                    (s.onerror = function () {
                                        n(new TypeError('Network request failed'));
                                    })),
                                s.open(o.method, o.url, !0),
                                'responseType' in s && e && (s.responseType = 'blob'),
                                o.headers.forEach(function (e, t) {
                                    t.forEach(function (t) {
                                        s.setRequestHeader(e, t);
                                    });
                                }),
                                s.send(void 0 === o._bodyInit ? null : o._bodyInit));
                        })
                    );
                }),
                (fetch.Promise = self.Promise),
                (self.fetch.polyfill = !0));
        }
        function o(e) {
            if (('string' != typeof e && (e = e.toString()), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)))
                throw new TypeError('Invalid character in header field name');
            return e.toLowerCase();
        }
        function s(e) {
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
        function u(e) {
            var t = new FileReader();
            return (t.readAsArrayBuffer(e), c(t));
        }
        function l() {
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
                          if (this._bodyBlob) return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), c(t));
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
            var r, o;
            if (
                ((t = t || {}),
                (this.url = e),
                (this.credentials = t.credentials || 'omit'),
                (this.headers = new i(t.headers)),
                (this.method = ((r = t.method || 'GET'), (o = r.toUpperCase()), n.indexOf(o) > -1 ? o : r)),
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
                                o = n.join('=').replace(/\+/g, ' ');
                            t.append(decodeURIComponent(r), decodeURIComponent(o));
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
                            o = n.join(':').trim();
                        t.append(r, o);
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
                (this.headers = t.headers instanceof i ? t.headers : new i(t.headers)),
                (this.url = t.url || ''));
        }
    })());
const J = { NONE: -1, ENTER: 13, ESCAPE: 27, SPACE: 32 };
['ko', 'no'].includes(w.resolve('langCode'));
class Q {
    constructor() {
        n(this, 'items', []);
    }
    get length() {
        return this.items.length;
    }
    push(e) {
        this.items.push(e);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    clear() {
        this.items = [];
    }
    includes(e) {
        return this.items.includes(e);
    }
    some(e) {
        return this.items.some(e);
    }
    remove(e) {
        const t = this.items.indexOf(e);
        return -1 !== t && (this.items.splice(t, 1), !0);
    }
    isEmpty() {
        return 0 === this.items.length;
    }
    toArray() {
        return this.items.slice();
    }
}
const ee = new Set(['zh_cn', 'zh_sg', 'zh_tw']);
function te(e, t, n) {
    return ee.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
}
function ne(e, t) {
    return ee.has(t)
        ? (function (e) {
              const t = [],
                  n = e
                      .replace(/&nbsp;/g, ' ')
                      .replace(/ /g, ' ')
                      .matchAll(
                          /[\u4E00-\u9FFF\u3400-\u4DBF][。，: ; ：；！？《》「」•)、]?|[a-zA-Z0-9]+[.,!?]?|\xa0|[^\u4E00-\u9FFF\u3400-\u4DBF\s]/gu,
                      );
              for (const [r] of n) t.push(r);
              return t;
          })(e)
        : 'ja' === t
          ? a()
                .parse(e)
                .map((e) => e.replace(/&nbsp;/g, ' '))
          : e.split(' ');
}
const re = c.createContext(void 0);
const oe = 'extraSmall',
    se = {
        extraSmall: { weight: 0, name: oe, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var ie,
    ae,
    ce,
    ue =
        (((ie = ue || {})[(ie.Small = se.small.width)] = 'Small'),
        (ie[(ie.Medium = se.medium.width)] = 'Medium'),
        (ie[(ie.Large = se.large.width)] = 'Large'),
        (ie[(ie.ExtraLarge = se.extraLarge.width)] = 'ExtraLarge'),
        ie),
    le =
        (((ae = le || {})[(ae.Small = se.small.width)] = 'Small'),
        (ae[(ae.Medium = se.medium.width)] = 'Medium'),
        (ae[(ae.Large = se.large.width)] = 'Large'),
        (ae[(ae.ExtraLarge = se.extraLarge.width)] = 'ExtraLarge'),
        ae),
    de =
        (((ce = de || {})[(ce.Small = se.small.height)] = 'Small'),
        (ce[(ce.Medium = se.medium.height)] = 'Medium'),
        (ce[(ce.Large = se.large.height)] = 'Large'),
        (ce[(ce.ExtraLarge = se.extraLarge.height)] = 'ExtraLarge'),
        ce);
const he = Object.values(se);
function fe(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        o = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...o])).join(' ');
}
const me = () => {
        return ((e = 1), viewEnv.remToPx(e));
        var e;
    },
    pe = () => {
        const e = (function (e = 'px') {
            return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
        })('rem');
        return (function (e, t, n) {
            const r = he.reduce(
                    (n, r) => (
                        r.width <= e &&
                            (n.width.classes.push(r.className, `${r.className}Width`),
                            n.width.names.push(r.name),
                            (n.width.weight += 1)),
                        r.height <= t &&
                            (n.height.classes.push(r.className, `${r.className}Height`),
                            n.height.names.push(r.name),
                            (n.height.weight += 1)),
                        n
                    ),
                    { width: { classes: [], names: [], weight: 0 }, height: { classes: [], names: [], weight: 0 } },
                ),
                o = r.width.weight <= r.height.weight ? 'width' : 'height',
                s = r[o],
                i = s.names[s.names.length - 1] ?? oe,
                a = se[i],
                c = r.width.names,
                u = r.height.names,
                l = c[c.length - 1] ?? oe,
                d = u[u.length - 1] ?? oe,
                h = { width: se[l].width, height: se[d].height };
            return {
                mediaClass: fe(o, r),
                breakpoint: a,
                screenWidthRem: e,
                screenHeightRem: t,
                breaks: s.names,
                sides: h,
                mediaSize: a.width,
                mediaWidth: h.width,
                mediaHeight: h.height,
                upscale: n > 1,
            };
        })(e.width, e.height, me());
    };
function ge({ children: e }) {
    const [t, n] = c.useState(pe);
    return (
        c.useLayoutEffect(() => {
            function e() {
                n(pe);
            }
            e();
            const t = F(e),
                r = M(e);
            return () => {
                (t(), r());
            };
        }, []),
        u.jsx(re.Provider, { value: t, children: e })
    );
}
function we() {
    return (function () {
        const e = c.useContext(re);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function ye({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: o } = we();
    return u.jsx('div', { className: l(t, 'media-wrapper', r, o && 'media-upscale'), ...n, children: e });
}
function be({ children: e, ...t }) {
    return u.jsx(ge, { children: u.jsx(ye, { ...t, children: e }) });
}
const ve = [];
function _e(e) {
    const t = c.useRef(e);
    return (
        c.useLayoutEffect(() => {
            t.current = e;
        }),
        c.useCallback((...e) => (0, t.current)(...e), ve)
    );
}
const xe = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new Q();
            return (e.set(t, r), r);
        }
        function n(t, n) {
            const r = e.get(t);
            return !!r && r.remove(n);
        }
        return {
            handlers: e,
            obtain: t,
            register: function (e, r) {
                if (e === J.NONE) return Y;
                const o = t(e);
                return (o.includes(r) || o.push(r), () => n(e, r));
            },
            unregister: n,
            takeCurrent: function (t) {
                const n = e.get(t);
                if (!n) return;
                const r = n.peek();
                return r || void 0;
            },
        };
    },
    Ee = c.createContext(void 0);
function ke(e, t, n, r) {
    const o = _e((e) => {
            q() || (n(e), W());
        }),
        s = (function () {
            const e = c.useContext(Ee);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        i = c.useMemo(() => s[t].register(e, o), [s, t, e, o]);
    c.useEffect(() => i, [i]);
}
function Re(e, t, n) {
    return ke(e, 'keydown', t);
}
function Se(e) {
    const t = c.useMemo(xe, []),
        n = c.useMemo(xe, []);
    c.useEffect(() => {
        function e(e) {
            const n = t.takeCurrent(e.keyCode);
            n && n(e);
        }
        function r(e) {
            const t = n.takeCurrent(e.keyCode);
            t && t(e);
        }
        return (
            window.addEventListener('keydown', e),
            window.addEventListener('keyup', r),
            () => {
                (window.removeEventListener('keydown', e), window.removeEventListener('keyup', r));
            }
        );
    }, [t, n]);
    const r = c.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: n.register, unregister: n.unregister },
        }),
        [t, n],
    );
    return u.jsx(Ee.Provider, { value: r, children: e.children });
}
const Ne = (e) => {
    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
};
function Ce(e = J.ESCAPE, t = Ne, n = !1) {
    c.useEffect(() => {
        if (e !== J.NONE)
            return (
                window.addEventListener('keydown', r, n),
                () => {
                    window.removeEventListener('keydown', r, n);
                }
            );
        function r(r) {
            if (r.keyCode === e) {
                if (q()) return;
                (t(r), W(), n && r.stopPropagation());
            }
        }
    }, [t, e, n]);
}
const Te = {
    click: $e('play'),
    'mouse-enter': $e('highlight'),
    increaseAmount: $e('cons_ammo_roll_plus'),
    decreaseAmount: $e('cons_ammo_roll_minus'),
    close: $e('cancelcloseno'),
    'show-context-menu': $e('tabb'),
};
function $e(e) {
    return () => {
        U.sound(e);
    };
}
const je = c.createContext(null);
function Ae({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const o = c.useMemo(() => ({ ...Te, ...t }), [t]),
        s = c.useMemo(
            () => ({
                play: function (t, r) {
                    if (n) return;
                    const s = o[t];
                    s
                        ? s(r)
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
                          })(`There is no sound for event: ${t}`, e);
                },
                settings: { plays: o, severity: e, silent: n },
            }),
            [o, e, n],
        );
    return u.jsx(je.Provider, { value: s, children: r });
}
const Le = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    Oe = new Set(['number', 'string', 'boolean', 'bigint']),
    Pe = new Set(['Dict']);
function De(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var o, s;
    const i = e,
        a = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (Le.has(a)) return i;
    if (null === i) return i;
    const c = { depth: n + 1, maxDepth: r };
    if (Array.isArray(i)) return i.map((e) => De(e, c));
    if ('object' === a) {
        const r = (null == (o = i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => De(e, c));
        if ('CoherentArrayProxy' === r) return e.map((e) => De(e.value, c));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in i) {
                    const n = i[t];
                    Oe.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in i) {
                    const n = i[t],
                        r = (null == (s = null == i ? void 0 : i.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                    Pe.has(r) || (e[t] = De(n, c));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(i)) a[e] = De(i[e], c);
        return a;
    }
    return (console.error('Incorrect value to clone model', i), i);
}
const Fe = { deep: !1, equals: Y },
    Me = { cloneItem: !0 },
    Be = { shallow: !1 };
class ze {
    constructor(e, t = Me) {
        (n(this, '_data'),
            n(this, '_keys'),
            n(
                this,
                'set',
                h((e) => {
                    this._data.set(e);
                }),
            ),
            (this.options = t));
        const r = {},
            o = e.keys();
        for (let n = 0; n < o.length; n++) {
            const t = o[n];
            r[t] = d.box(this.takeItem(e, t), Fe);
        }
        ((this._keys = d.set(new Set(o))), (this._data = d.box(r, Fe)));
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
            const o = t[r],
                s = this.takeItem(e, o);
            o in n
                ? null === s
                    ? (delete n[o], this._keys.delete(o), this.set(n))
                    : n[o].set(s)
                : null !== s && ((n[o] = d.box(s, Fe)), this._keys.add(o), this.set(n));
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
        for (const o of this.keys.values()) n = e(n, r[o].get(), o);
        return n;
    }
    takeItem(e, t) {
        const n = e.get(t);
        return this.options.cloneItem ? De(n, Be) : n;
    }
    untrackedData() {
        return f(() => this._data.get());
    }
}
const Ie = c.createContext({ mode: 'real' }),
    Ue = { equals: Y, deep: !1 };
function He(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        h(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const o = (o, s, i = Ue) => {
            const a = d.box(o(n(s)), i);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(o(e))), s), a);
        },
        s = (o, s) => {
            const i = new ze(n(o), s);
            return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), o), i);
        },
        i = (o, s) => {
            const i = d.box(n(o) ?? s, Ue);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), o), i);
        };
    return {
        dict: s,
        dictRef: (e, t) => s(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => o(De, e),
        array: i,
        object: i,
        transform: o,
        primitives: (o, s) => {
            const i = n(s);
            if (Array.isArray(o)) {
                const n = o.reduce((e, t) => ((e[t] = d.box(i[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                o.forEach((t) => {
                                    n[t].set(e[t]);
                                }),
                            );
                        }, s),
                    n
                );
            }
            {
                const n = o,
                    a = Object.entries(n),
                    c = a.reduce((e, [t, n]) => ((e[n] = d.box(i[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                a.forEach(([t, n]) => {
                                    c[n].set(e[t]);
                                }),
                            );
                        }, s),
                    c
                );
            }
        },
    };
}
const Xe =
    (e = 'DataLayerProvider') =>
    (t, n, r) => {
        const o = c.createContext(null);
        function s(s) {
            var i;
            const { mode: a, options: l, children: d, mocks: h } = s,
                f = c.useContext(Ie),
                m = a ?? f.mode,
                p = h ?? f.mocks,
                g = c.useRef([]),
                w = null == (i = null == r ? void 0 : r.useRequires) ? void 0 : i.call(r),
                y = _e((o, i, a) => {
                    var c;
                    const u =
                            'real' !== o && a
                                ? (function (e, t) {
                                      return {
                                          subscribe: () => 0,
                                          readSafeByPath: e,
                                          readByPath: e,
                                          createCallback: (n, r) => {
                                              const o = e(Z(r, t));
                                              return (...e) => {
                                                  o(n(...e));
                                              };
                                          },
                                          createCallbackNoArgs: (n) => {
                                              const r = e(Z(n, t));
                                              return () => {
                                                  r();
                                              };
                                          },
                                          dispose: () => {},
                                          unsubscribe: () => {},
                                          events: { subscribersNotified: new G() },
                                      };
                                  })(a.getter, i)
                                : V(i, { name: e }),
                        l = (e) => ('mocks' === o ? (null == a ? void 0 : a.getter(e, i)) : u.readByPath(e)),
                        d = (e) => g.current.push(e),
                        h = 'initial' in s && {
                            initial: null == (c = null == r ? void 0 : r.initial) ? void 0 : c.call(r, s.initial),
                        },
                        f = t({
                            ...h,
                            mode: o,
                            readByPath: l,
                            requires: w,
                            externalModel: u,
                            observableModel: He(u, o, l),
                            cleanup: d,
                        }),
                        m = { ...h, mode: o, model: f, externalModel: u, cleanup: d, requires: w },
                        p = 'mocks' === o && (null == a ? void 0 : a.controls) ? a.controls(m) : {};
                    return { model: f, controls: { ...(null == n ? void 0 : n(m)), ...p }, externalModel: u, mode: o };
                }),
                b = c.useRef(!1),
                [v, _] = c.useState(m);
            c.useEffect(() => {
                _(m);
            }, [m]);
            const [x, E] = c.useState(() => y(v, l, p));
            return (
                c.useEffect(() => {
                    b.current ? E(y(v, l, p)) : (b.current = !0);
                }, [
                    y,
                    p,
                    v,
                    null == l ? void 0 : l.context,
                    null == l ? void 0 : l.initializer,
                    null == l ? void 0 : l.getRoot,
                    null == l ? void 0 : l.rootId,
                ]),
                c.useEffect(
                    () => () => {
                        (x.externalModel.dispose(), g.current.forEach((e) => e()));
                    },
                    [x],
                ),
                u.jsx(o.Provider, { value: x, children: d })
            );
        }
        return (
            (s.displayName = e),
            [
                s,
                function () {
                    const e = c.useContext(o);
                    if (!e) throw new Error(`hook useModel must be used within a ${s.displayName}.`);
                    return e;
                },
                { Context: o },
            ]
        );
    };
async function We(e, { root: t = document.getElementById('root'), withMedia: n = !0, fullScreen: r = !1 } = {}) {
    var o;
    !(function () {
        const e = (t = window.model, { depth: n = 16, convertArrays: r = !0 } = {}) => {
            var o;
            if (n < 0)
                return (
                    console.warn(
                        'Depth limit has been reached.\n                You can change the limit with second argument.\n                Use _showModel(model, { depth = <number> }) for this. 16 is default.',
                    ),
                    'Depth limit has been reached'
                );
            if (null === t) return null;
            switch (typeof t) {
                case 'number':
                case 'string':
                case 'boolean':
                case 'bigint':
                case 'undefined':
                    return t;
                case 'function':
                    return 'function';
                case 'object': {
                    const s = { depth: n - 1, convertArrays: r },
                        i = (null == (o = t.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                    switch (!0) {
                        case i.includes('CoherentArrayProxy'):
                            return [...t.values()].map((t) => e(s.convertArrays ? t.value : t, s));
                        case 'Dict' === i:
                            return [...t.entries()].reduce((t, [n, r]) => ((t[n] = e(r, s)), t), { $$type: 'Dict' });
                        case 'UNKNOWN' === i:
                            return 'UNKNOWN_TYPE';
                        case i.includes('ViewModel'):
                        default: {
                            const n = {};
                            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = e(t[r], s));
                            return n;
                        }
                    }
                }
                default:
                    return `Unknown: ${String(t)}`;
            }
        };
        window._showModel = e;
        const t = {
            subViews: function () {
                const t = {};
                for (const n of window.subViews.ids()) {
                    const r = window.subViews.get(n);
                    t[n] = {
                        id: n,
                        uid: r.uid,
                        path: r.path,
                        get model() {
                            return e(r.model);
                        },
                    };
                }
                return t;
            },
            showModel: e,
            showModelById: (t) => e(window.subViews.get(t).model),
        };
        window._debugs = t;
    })();
    const s = n ? be : m.Fragment,
        i = (null == (o = null == window ? void 0 : window.engine) ? void 0 : o.whenReady) ?? Promise.resolve();
    (await i,
        document.documentElement.setAttribute('lang', w.resolve('langCode')),
        p.createRoot(t).render(u.jsx(s, { children: u.jsx(Se, { children: e }) })),
        r &&
            (!(function (e) {
                function t() {
                    const { top: t, right: n, bottom: r, left: o } = viewEnv.getExternalPaddingsRem();
                    (e.style.setProperty('--external-padding-top', `${t}rem`),
                        e.style.setProperty('--external-padding-right', `${n}rem`),
                        e.style.setProperty('--external-padding-bottom', `${r}rem`),
                        e.style.setProperty('--external-padding-left', `${o}rem`));
                }
                (t(), engine.on('self.onPaddingsUpdated', () => t()));
            })(t),
            viewEnv.setFullscreenModeSupported(!0)));
}
function qe(e) {
    return u.jsx(u.Fragment, { children: e.children });
}
function Ge(e) {
    return u.jsx(qe, {
        children: u.jsx(Ae, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
c.forwardRef(function (e, t) {
    const n = c.useRef(null);
    return (
        c.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return X.onHitTest((t) => {
                    const n = e.getBoundingClientRect();
                    return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                });
        }, []),
        u.jsx('div', {
            ...e,
            ref:
                ((r = [t, n]),
                (e) => {
                    r.forEach((t) =>
                        ((e, t) => {
                            e && ('function' == typeof e ? e(t) : (e.current = t));
                        })(t, e),
                    );
                }),
        })
    );
    var r;
});
const Ke = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    Ve = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
function Ze(e, t, n) {
    var r;
    const o =
            'object' == typeof t && 'cva' in t
                ? null == (r = t.cva)
                    ? void 0
                    : r.variants
                : null == n
                  ? void 0
                  : n.variants,
        s = o ? Object.keys(o) : [];
    if ('object' == typeof t) {
        const n = t,
            r = g(n.className, n.cva),
            o = n.element,
            i = c.forwardRef(function (e, t) {
                return c.createElement(o, { ...('function' == typeof o ? e : Ye(s, e)), ref: t, className: r(e) });
            });
        return ((i.displayName = e), n.cva && (i.cva = n.cva), i);
    }
    const i = g(t, n),
        a = c.forwardRef(function (t, n) {
            return u.jsx('div', { 'data-name': e, ...Ye(s, t), ref: n, className: i(t) });
        });
    return ((a.displayName = e), n && (a.cva = n), a);
}
function Ye(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
const Je = Ze('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    Qe = c.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: o = !1, silent: s = !1, ...i },
        a,
    ) {
        const l = (function () {
            const e = c.useContext(je);
            if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
            return e;
        })();
        return u.jsx(Je, {
            ...i,
            ref: a,
            onMouseEnter: function (e) {
                (o || s || l.play('mouse-enter', { target: r || 'Button', original: e }), null == n || n(e));
            },
            onClick: function (e) {
                o || (s || l.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    et = {
        root: 'Button_root_6bcdc8c',
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
    tt = c.forwardRef(function (
        {
            children: e,
            size: t = Ve.large,
            theme: n = Ke.primary,
            disabled: r = !1,
            silent: o = !1,
            autoAlignContent: s = !0,
            classNames: i,
            className: a,
            ...c
        },
        d,
    ) {
        return u.jsxs(Qe, {
            ...c,
            ref: d,
            silent: o,
            disabled: r,
            className: l(
                et.base,
                et[`base__size-${t}`],
                et[`base__theme-${n}`],
                r ? et.base__disabled : et.base__enabled,
                a,
                null == i ? void 0 : i.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = c.onClick) || t.call(c, e);
            },
            children: [
                u.jsx('div', { className: l(et.background, null == i ? void 0 : i.background) }),
                u.jsx('div', { className: l(et.border, null == i ? void 0 : i.border) }),
                u.jsx('div', { className: l(et.overlay, null == i ? void 0 : i.overlay) }),
                u.jsx('div', {
                    className: l(et.content, s && et.content__fontAligned, null == i ? void 0 : i.content),
                    children: e,
                }),
            ],
        });
    });
((tt.themes = Ke), (tt.sizes = Ve));
const nt = 1,
    rt = 2,
    ot = 3;
const st = 'FormatText_db904f12',
    it = 'FormatText_base__fullSize_a514958e',
    at = new Set(
        (null ==
        (e =
            'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom')
            ? void 0
            : e.split(', ')) ?? [],
    );
let ct = 0;
function ut() {
    return ++ct;
}
const lt = {
    class: function (e, ...t) {
        return u.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            ut(),
        );
    },
    colorLegacy: function (e, t) {
        const n = ut();
        return at.has(String(t))
            ? u.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : u.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: function e(t) {
        if (Array.isArray(t)) return t.map(e);
        if ('string' == typeof t) {
            const e = w.resolve('langCode');
            return u.jsx(
                c.Fragment,
                { children: te(ne(t, e), e, (e, t) => u.jsx('span', { children: e }, `${e}${t}`)) },
                ut(),
            );
        }
        return t;
    },
    style: function (e, ...t) {
        return u.jsx(
            'span',
            {
                style: t.reduce((n, r) => {
                    if (Array.isArray(r)) {
                        const [e, t] = r;
                        return ((n[e] = t), n);
                    }
                    return (console.warn(`Invalid argument ${r} in ${e}: ${t}`), n);
                }, {}),
                children: e,
            },
            ut(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function dt(e, t, n, r) {
    const o = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...o] = n.slice(1, -1).split(' ');
                return t ? dt(e, t, o, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        s = r[t];
    return s ? s(e, ...o) : (console.error(`Function ${t} is not registered`), e);
}
function ht(e, t, n) {
    return e.reduce((e, t) => {
        const [r, ...o] = (function (e) {
            const t = [];
            let n = '',
                r = !1,
                o = !1,
                s = '';
            for (let i = 0; i < e.length; i++) {
                const a = e[i];
                ("'" !== a && '"' !== a) || o || r
                    ? a === s && o
                        ? ((o = !1), (n += a))
                        : '(' !== a || o
                          ? ')' === a && r && !o
                              ? ((r = !1), (n += a))
                              : ' ' !== a || r || o
                                ? (n += a)
                                : n && (t.push(n), (n = ''))
                          : ((r = !0), (n += a))
                    : ((o = !0), (s = a), (n += a));
            }
            return (n && t.push(n), t);
        })(t.trim());
        return r ? dt(e, r, o, n) : e;
    }, t);
}
function ft(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function mt(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !ft(e[r]); ) r++;
            const o = e.slice(n + 1, r),
                s = t[o];
            if (s) return mt(e.replace(`$${o}`, String(s)), t);
        }
    }
    return e;
}
function pt(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = mt(e[r], t);
    return n;
}
const gt = ['number', 'string', 'undefined'];
function wt(e, t, n = {}, r = !0) {
    r && (ct = 0);
    const o = [];
    function s(e) {
        if (gt.includes(typeof e)) {
            const t = o.at(-1);
            if ('string' == typeof t) return void (o[o.length - 1] = t + e);
        }
        o.push(e);
    }
    for (const i of e)
        if (i.type === nt) s(i.value);
        else if (i.type === ot)
            null === n[i.name] || gt.includes(typeof n[i.name])
                ? s(n[i.name] ?? `{{${i.name}}}`)
                : o.push(u.jsx(c.Fragment, { children: n[i.name] }, `var-${i.name}-${i.instanceId}`));
        else if (i.type === rt) {
            const e = wt(i.children, t, n, !1),
                r = ht(pt(i.attrs, n), e, t);
            o.push(r);
        }
    return o;
}
function yt(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function bt(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function vt(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const _t = { start: '{{', end: '}}' },
    xt = c.memo(function (e) {
        const {
                brackets: t = _t,
                text: n,
                params: r,
                upgradeLegacy: o,
                fullSize: s,
                inline: i,
                formatters: a,
                split: d,
                ...h
            } = e,
            f = c.useMemo(
                () =>
                    e.upgradeLegacy
                        ? (function (e) {
                              return (function (e, t, n, r, o, s, i, a, c) {
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
                                          return o(r(n(t(e))));
                                      case 6:
                                          return s(o(r(n(t(e)))));
                                      case 7:
                                          return i(s(o(r(n(t(e))))));
                                      case 8:
                                          return a(i(s(o(r(n(t(e)))))));
                                      case 9:
                                          return c(a(i(s(o(r(n(t(e))))))));
                                      default: {
                                          let e = arguments[0];
                                          for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
                                          return e;
                                      }
                                  }
                              })(e, vt, yt, bt);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            m = c.useMemo(() => (e.formatters ? { ...lt, ...e.formatters } : lt), [e.formatters]),
            p = c.useMemo(
                () =>
                    (function (e, t) {
                        const n = [],
                            r = [];
                        let o = '',
                            s = !1,
                            i = '',
                            a = 0;
                        for (let c = 0; c < e.length; c++) {
                            const u = e[c];
                            if (u === t.start[0] && e.slice(c, c + t.start.length) === t.start)
                                (o &&
                                    (r.length > 0
                                        ? r[r.length - 1].node.children.push({ type: nt, value: o })
                                        : n.push({ type: nt, value: o }),
                                    (o = '')),
                                    (s = !0),
                                    (c += t.start.length - 1));
                            else if (u === t.end[0] && e.slice(c, c + t.end.length) === t.end) {
                                ((s = !1), (c += t.end.length - 1));
                                const e = i.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        o = { type: rt, attrs: t.split('|'), instanceId: ++a, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(o) : n.push(o),
                                        r.push({ node: o, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: ot, instanceId: ++a, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                i = '';
                            } else s ? (i += u) : (o += u);
                        }
                        o &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: nt, value: o })
                                : n.push({ type: nt, value: o }));
                        return n;
                    })(d ? `{{@ split}}${f}{{/}}` : f, t),
                [t, f, d],
            ),
            g = c.useMemo(() => wt(p, m, e.params), [p, m, e.params]),
            w = l(st, s && it, h.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              u.jsx('p', {
                  ...h,
                  className: w,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: g,
              }))
            : u.jsx('span', { ...h, className: w, children: g });
    }),
    Et = () => {};
function kt(e) {
    const t = e;
    return c.forwardRef(function (e, n) {
        const r = (function (e, t) {
                return (function (e, t, n) {
                    return n ? e.breaks.reduce((e, t) => (n[t] ? { ...e, ...n[t] } : e), t) : t;
                })(we(), e, t);
            })(e, e.adaptive),
            { path: o, ...s } = r,
            i = r.images ?? w.resolve('images'),
            a = { ...s, ref: n };
        {
            const e = o ? i.readOr(o, Et, 'warn') : void 0;
            return e ? u.jsx(t, { ...a, src: e }) : u.jsx(t, { ...a, unknown: !0 });
        }
    });
}
const Rt = {
        background:
            'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
        backgroundSize: '20rem 20rem',
        backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
        backgroundColor: '#000',
    },
    St = kt(
        c.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: n,
                    fit: r,
                    position: o,
                    width: s,
                    src: i,
                    height: a,
                    unselectable: c,
                    unknown: l,
                    unknownStyle: d = Rt,
                    ...h
                } = e;
                return u.jsx('div', { ...h, ref: t, style: { width: e.width, height: e.height, ...d, ...e.style } });
            }
            const {
                repeat: n,
                fit: r,
                position: o,
                width: s,
                height: i,
                unknownStyle: a,
                unknown: c,
                unselectable: l,
                ...d
            } = e;
            return u.jsx('div', {
                ...d,
                ref: t,
                style: {
                    backgroundImage: `url(${e.src})`,
                    backgroundRepeat: n ?? 'no-repeat',
                    backgroundSize: r ?? 'contain',
                    backgroundPosition: o ?? 'center center',
                    width: 'number' == typeof s ? `${s}rem` : s,
                    height: 'number' == typeof i ? `${i}rem` : i,
                    ...d.style,
                },
            });
        }),
    );
kt(
    c.forwardRef(function (e, t) {
        const { width: n, height: r, src: o, unselectable: s, unknown: i, unknownStyle: a = Rt, ...c } = e;
        return e.unknown
            ? u.jsx('div', { ...c, style: { width: e.width, height: e.height, ...a } })
            : u.jsx('img', { ...c, ref: t, src: o, width: n, height: r });
    }),
);
const Nt = {
        tankXP: 'tankXP',
        freeXP: 'freeXP',
        credits: 'credits',
        gold: 'gold',
        crystal: 'crystal',
        equipCoin: 'equipCoin',
        eliteXp: 'eliteXp',
        depot: 'depot',
        crew: 'crew',
        custom: 'custom',
    },
    Ct = Object.values(Nt),
    Tt = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
        xxl: 'xxl',
    },
    $t = { [Tt.extraSmall]: 16, [Tt.small]: 24, [Tt.medium]: 32, [Tt.large]: 48, [Tt.extraLarge]: 80, [Tt.xxl]: 96 },
    jt = { [Tt.extraSmall]: 32, [Tt.small]: 48, [Tt.medium]: 32, [Tt.large]: 96, [Tt.extraLarge]: 80, [Tt.xxl]: 96 },
    At = {
        root: 'Currency_root_271064ec',
        base: 'Currency_72d4be39',
        base__reverse: 'Currency_base__reverse_f12e61b0',
        base__notEnough: 'Currency_base__notEnough_9a7842f',
        base__credits: 'Currency_base__credits_7b9ae721',
        base__gold: 'Currency_base__gold_d6e3cbc',
        base__freeXP: 'Currency_base__freeXP_d29d5a57',
        base__crystal: 'Currency_base__crystal_f830cb47',
        base__tankXP: 'Currency_base__tankXP_1707c68b',
    },
    Lt = w.resolve('intl'),
    Ot = Ze('Currency', At.base, { variants: { reverse: { true: At.base__reverse } } });
function Pt(e, t) {
    const n = t === Nt.gold ? 'gold' : 'integral';
    return Array.isArray(e)
        ? e.map((e) => ('number' == typeof e ? Lt.formatNumber(n, e) : e))
        : 'number' == typeof e
          ? Lt.formatNumber(n, e)
          : e;
}
function Dt({
    children: e,
    type: t,
    className: n,
    classNames: r,
    imagePath: o,
    size: s = Tt.small,
    enough: i = !0,
    ...a
}) {
    const c = $t[s],
        d = `${t}_${c}x${c}`,
        h = jt[s],
        f = `${t}_${h}x${h}`,
        m = o || Ct.includes(t),
        p = ((g = `library.currency.${d}`), (w = `library.currency.${f}`), we().upscale ? w : g);
    var g, w;
    return u.jsxs(Ot, {
        ...a,
        className: l(null == r ? void 0 : r.base, i ? At[`base__${t}`] : At.base__notEnough, n),
        children: [
            m && u.jsx(St, { width: c, height: c, path: o ?? p, className: null == r ? void 0 : r.icon }),
            Pt(e, t),
        ],
    });
}
((Dt.sizes = Tt), (Dt.types = Nt));
export { tt as B, Dt as C, xt as F, Ge as U, Nt as a, Ce as b, Xe as i, J as k, We as r, Ke as t, Re as u };
