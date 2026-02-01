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
    a as s,
    b as o,
    d as i,
    r as a,
    j as u,
    e as c,
    o as l,
    f as d,
    u as h,
    R as f,
    g as m,
    h as p,
} from './vendor.js';
const g = r();
function w(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function y(e, t) {
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
        const r = e.startsWith('R.images') ? e : w(this.prefix, e),
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
        return void 0 === s ? ('silent' !== n && y(`Resource not found: ${r}`, n), t()) : s;
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
class v {
    constructor(e) {
        (n(this, 'prefix'),
            (this.EXT = e),
            (this.prefix = e ? `R.images.${e}.gui.maps.icons` : 'R.images.gui.maps.icons'));
    }
    has() {
        return !0;
    }
    read(e) {
        return `/${this.prefix}.${e}`;
    }
    readOr(e, t, n = 'silent') {
        return this.read(e);
    }
    readOrEmpty(e, t = 'warn') {
        return this.read(e);
    }
    readOrThrow(e) {
        return this.read(e);
    }
}
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
const E = { integral: 0, gold: 1 },
    x = { fractional: 0, woZeroDigits: 1 },
    k = Object.keys(E),
    S = Object.keys(x);
const F = { full: _.FullTime, short: _.ShortTime };
const T = {
    isNumberFormat: function (e) {
        return e in E;
    },
    formatNumber: function (e, t) {
        return window.systemLocale.getNumberFormat(t, E[e]);
    },
    numberFormats: k,
    isRealFormat: function (e) {
        return e in x;
    },
    formatReal: function (e, t) {
        return window.systemLocale.getRealFormat(t, x[e]);
    },
    realFormats: S,
    formatDateTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    dateTimeFormats: _,
    formatTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    timeFormats: Object.keys(F),
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
function A(e, t, n) {
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
class N {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : w(this.prefix, e),
            s = A(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== n && y(`Resource not found: ${r}`, n), t()) : s;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : w(this.prefix, e),
            n = A(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const s = e.startsWith('R.strings') ? e : w(this.prefix, e),
            o = A(s, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== r && y(`Resource not found: ${s}`, r), n()) : o;
    }
    pluralOrEmpty(e, t, n = 'warn') {
        return this.pluralOr(e, t, () => '', n);
    }
}
class O {
    constructor(e = window.R.videos, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.videos') ? e : w(this.prefix, e),
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
        return void 0 === s ? ('silent' !== n && y(`Resource not found: ${e}`, n), t()) : s;
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
function D(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function C(e) {
    viewEnv.setTrackMouseOnStage(e);
}
(g.register({
    strings: i(() => new N()).singleton(),
    images: i(() => new b(window.R.images.gui.maps.icons)).singleton(),
    atlases: i(() => new b(window.R.atlases)).singleton(),
    videos: i(() => new O(window.R.videos)).singleton(),
    views: o(
        class {
            read(e) {
                return e(window.R.views);
            }
        },
    ).singleton(),
    aliases: o(
        class {
            read(e) {
                return e(window.R.aliases);
            }
        },
    ).singleton(),
    sounds: o(
        class {
            play(e) {
                const t = window.R.sounds[e];
                'function' == typeof t
                    ? engine.call('PlaySound', t.apply(window.R.sounds))
                    : y(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: s(R.strings.settings.LANGUAGE_CODE()),
    intl: s(T),
}),
    {}.VITE_HOT_LIVE_SERVER && g.register('images', i(() => new v()).singleton()));
const L = D('clientResized'),
    j = D('self.onScaleUpdated'),
    $ = { down: D('mousedown'), up: D('mouseup'), move: D('mousemove') };
function P(e) {
    engine.call('PlaySound', e);
}
!(function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && C(!1);
    }
    function n() {
        e.enabled && C(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  C(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : C(!1);
    }
    ['down', 'up', 'move'].reduce(
        (t, n) => (
            (t[n] = (function (t) {
                return (n) => {
                    e.listeners += 1;
                    const s = `mouse${t}`,
                        o = $[t]((e) => n([e, 'outside']));
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
const B = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    M = { ...Object.keys(B).reduce((e, t) => ((e[t] = () => P(B[t])), e), {}), sound: P },
    z = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    U = {
        onTextureFrozen: D('self.onTextureFrozen'),
        onTextureReady: D('self.onTextureReady'),
        onDomBuilt: D('self.onDomBuilt'),
        onLoaded: D('self.onLoaded'),
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
        onDisplayChanged: D('self.onShowingStatusChanged'),
        onFocusUpdated: D('self.onFocusChanged'),
        children: {
            onAdded: D('children.onAdded'),
            onLoaded: D('children.onLoaded'),
            onRemoved: D('children.onRemoved'),
            onAttached: D('children.onAttached'),
            onTextureReady: D('children.onTextureReady'),
            onRequestPosition: D('children.requestPosition'),
        },
    };
function W(e, t, n, r, s, o, i, a, u) {
    switch (arguments.length) {
        case 1:
            return e;
        case 2:
            return function () {
                return t(e.apply(this, arguments));
            };
        case 3:
            return function () {
                return n(t(e.apply(this, arguments)));
            };
        case 4:
            return function () {
                return r(n(t(e.apply(this, arguments))));
            };
        case 5:
            return function () {
                return s(r(n(t(e.apply(this, arguments)))));
            };
        case 6:
            return function () {
                return o(s(r(n(t(e.apply(this, arguments))))));
            };
        case 7:
            return function () {
                return i(o(s(r(n(t(e.apply(this, arguments)))))));
            };
        case 8:
            return function () {
                return a(i(o(s(r(n(t(e.apply(this, arguments))))))));
            };
        case 9:
            return function () {
                return u(a(i(o(s(r(n(t(e.apply(this, arguments)))))))));
            };
    }
}
Object.keys(z).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === z[t]), e), {});
class I {
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
var H = {};
function q(e, t = []) {
    return 'object' != typeof e || null === e
        ? e
        : new Proxy(e, { get: (e, n) => ('function' == typeof e[n] ? e[n].bind(e) : q(e[n], [...t, n])) });
}
const K = (e) => (0 === e ? window : window.subViews.get(e));
function V(
    {
        initializer: e = !0,
        rootId: t = 0,
        getRoot: n = 'true' === H.PUBLIC_DEBUG_MODEL_ACCESS ? W(K, q) : K,
        context: r = 'model',
    } = {},
    { name: s = 'DataLayer' } = {},
) {
    const o = new Map(),
        i = { subscribersNotified: new I() },
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
    function u() {
        try {
            const e = n(t);
            return r.split('.').reduce((e, t) => e[t], e);
        } catch (e) {
            throw new Error(`Failure get root of ${s}. Root id: ${t}. Context: ${r}`);
        }
    }
    const c = (e) => {
        const n = u();
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
    function l(e) {
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
            const t = u();
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
            if (0 === t || window.subViews.ids().includes(t)) for (const e of o.keys()) l(e);
            a.then((e) => e());
        },
        unsubscribe: l,
        events: i,
    };
}
function X(e, t) {
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
function Z() {}
function G() {
    return !1;
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
            (l.call(d.prototype),
                l.call(m.prototype),
                (self.Headers = i),
                (self.Request = d),
                (self.Response = m),
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
                                        t(new m(s, r));
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
        function u(e) {
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
            return (t.readAsArrayBuffer(e), u(t));
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
                          return this.blob().then(c);
                      }),
                      (this.text = function () {
                          var e,
                              t,
                              n = a(this);
                          if (n) return n;
                          if (this._bodyBlob) return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), u(t));
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
const J = { ENTER: 13 };
function Y(e, t) {
    return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
}
const Q = {
    NONE: 'NONE',
    ...((ee = [
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
    ee.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...Y(
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
    ...Y(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...Y(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...Y(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...Y(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...Y(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...Y(['Up', 'Down'], 'Page'),
    ...Y(['Left', 'Right'], 'Bracket'),
};
var ee;
function te(e) {
    return 'number' == typeof e
        ? (function (e) {
              return window.systemInput.getKeyName(e);
          })(e)
        : e;
}
['ko', 'no'].includes(g.resolve('langCode'));
class ne {
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
function re(e) {
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
const se = {
    zh_cn: re,
    zh_sg: re,
    zh_tw: re,
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
function oe(e) {
    return e.split(' ');
}
const ie = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko']);
const ae = a.createContext(void 0);
const ue = 'extraSmall',
    ce = {
        extraSmall: { weight: 0, name: ue, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var le,
    de,
    he,
    fe =
        (((le = fe || {})[(le.Small = ce.small.width)] = 'Small'),
        (le[(le.Medium = ce.medium.width)] = 'Medium'),
        (le[(le.Large = ce.large.width)] = 'Large'),
        (le[(le.ExtraLarge = ce.extraLarge.width)] = 'ExtraLarge'),
        le),
    me =
        (((de = me || {})[(de.Small = ce.small.width)] = 'Small'),
        (de[(de.Medium = ce.medium.width)] = 'Medium'),
        (de[(de.Large = ce.large.width)] = 'Large'),
        (de[(de.ExtraLarge = ce.extraLarge.width)] = 'ExtraLarge'),
        de),
    pe =
        (((he = pe || {})[(he.Small = ce.small.height)] = 'Small'),
        (he[(he.Medium = ce.medium.height)] = 'Medium'),
        (he[(he.Large = ce.large.height)] = 'Large'),
        (he[(he.ExtraLarge = ce.extraLarge.height)] = 'ExtraLarge'),
        he);
const ge = Object.values(ce);
function we(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        s = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...s])).join(' ');
}
const ye = () => {
        return ((e = 1), viewEnv.remToPx(e));
        var e;
    },
    be = () => {
        const e = (function (e = 'px') {
            return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
        })('rem');
        return (function (e, t, n) {
            const r = ge.reduce(
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
                s = r.width.weight <= r.height.weight ? 'width' : 'height',
                o = r[s],
                i = o.names[o.names.length - 1] ?? ue,
                a = ce[i],
                u = r.width.names,
                c = r.height.names,
                l = u[u.length - 1] ?? ue,
                d = c[c.length - 1] ?? ue,
                h = { width: ce[l].width, height: ce[d].height };
            return {
                mediaClass: we(s, r),
                breakpoint: a,
                screenWidthRem: e,
                screenHeightRem: t,
                breaks: o.names,
                sides: h,
                mediaSize: a.width,
                mediaWidth: h.width,
                mediaHeight: h.height,
                upscale: n > 1,
            };
        })(e.width, e.height, ye());
    };
function ve({ children: e }) {
    const [t, n] = a.useState(be);
    return (
        a.useLayoutEffect(() => {
            function e() {
                n(be);
            }
            e();
            const t = L(e),
                r = j(e);
            return () => {
                (t(), r());
            };
        }, []),
        u.jsx(ae.Provider, { value: t, children: e })
    );
}
function _e() {
    return (function () {
        const e = a.useContext(ae);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function Ee({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: s } = _e();
    return u.jsx('div', { className: c(t, 'media-wrapper', r, s && 'media-upscale'), ...n, children: e });
}
function xe({ children: e, ...t }) {
    return u.jsx(ve, { children: u.jsx(Ee, { ...t, children: e }) });
}
const Re = [];
const ke = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new ne();
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
                if (e === Q.NONE) return G;
                const s = t(e);
                return (s.includes(r) || s.push(r), () => n(e, r));
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
    Se = a.createContext(void 0);
function Fe(e) {
    const t = a.useMemo(ke, []),
        n = a.useMemo(ke, []);
    a.useEffect(() => {
        function e(e) {
            var n;
            null == (n = t.takeCurrent(e.code)) || n(e);
        }
        function r(e) {
            var t;
            null == (t = n.takeCurrent(e.code)) || t(e);
        }
        return (
            window.addEventListener('keydown', e),
            window.addEventListener('keyup', r),
            () => {
                (window.removeEventListener('keydown', e), window.removeEventListener('keyup', r));
            }
        );
    }, [t, n]);
    const r = a.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: n.register, unregister: n.unregister },
        }),
        [t, n],
    );
    return u.jsx(Se.Provider, { value: r, children: e.children });
}
const Te = (e) => {
    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
};
function Ae(e = Q.ESCAPE, t = Te, n = !1) {
    const r = te(e);
    a.useEffect(() => {
        if (r !== Q.NONE)
            return (window.addEventListener('keydown', e, n), () => window.removeEventListener('keydown', e, n));
        function e(e) {
            e.code !== r || viewEnv.isEventHandled() || (t(e), viewEnv.setEventHandled(), n && e.stopPropagation());
        }
    }, [t, r, n]);
}
const Ne = {
    click: Oe('play'),
    'hot-key': Oe('play'),
    'mouse-enter': Oe('highlight'),
    increaseAmount: Oe('cons_ammo_single_plus'),
    decreaseAmount: Oe('cons_ammo_single_minus'),
    increaseAmountRoll: Oe('cons_ammo_roll_plus'),
    decreaseAmountRoll: Oe('cons_ammo_roll_minus'),
    close: Oe('cancelcloseno'),
    'show-context-menu': Oe('tabb'),
    progressSimple: Oe('gui_hangar_progressbar_simple'),
    increaseDelta: Oe('gui_hangar_progressbar_delta_increase'),
    decreaseDelta: Oe('gui_hangar_progressbar_delta_decrease'),
    increaseDeltaMax: Oe('gui_hangar_progressbar_delta_max'),
    pointerGrab: Oe('gui_hangar_progressbar_pointer_grab'),
    pointerDrag: Oe('gui_hangar_progressbar_pointer_drag'),
};
function Oe(e) {
    return () => {
        M.sound(e);
    };
}
const De = a.createContext(null);
function Ce({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const s = a.useMemo(() => ({ ...Ne, ...t }), [t]),
        o = a.useMemo(
            () => ({
                play: function (t, r) {
                    if (n) return;
                    const o = s[t];
                    o
                        ? o(r)
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
                settings: { plays: s, severity: e, silent: n },
            }),
            [s, e, n],
        );
    return u.jsx(De.Provider, { value: o, children: r });
}
const Le = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    je = new Set(['number', 'string', 'boolean', 'bigint']),
    $e = new Set(['Dict']);
function Pe(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var s, o;
    const i = e,
        a = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (Le.has(a)) return i;
    if (null === i) return i;
    const u = { depth: n + 1, maxDepth: r };
    if (Array.isArray(i)) return i.map((e) => Pe(e, u));
    if ('object' === a) {
        const r = (null == (s = i.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => Pe(e, u));
        if ('CoherentArrayProxy' === r) return e.map((e) => Pe(e.value, u));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in i) {
                    const n = i[t];
                    je.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in i) {
                    const n = i[t],
                        r = (null == (o = null == i ? void 0 : i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                    $e.has(r) || (e[t] = Pe(n, u));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(i)) a[e] = Pe(i[e], u);
        return a;
    }
    return (console.error('Incorrect value to clone model', i), i);
}
const Be = { deep: !1, equals: G },
    Me = { cloneItem: !0 },
    ze = { shallow: !1 };
class Ue {
    constructor(e, t = Me) {
        (n(this, '_data'),
            n(this, '_keys'),
            n(
                this,
                'set',
                d((e) => {
                    this._data.set(e);
                }),
            ),
            (this.options = t));
        const r = {},
            s = e.keys();
        for (let n = 0; n < s.length; n++) {
            const t = s[n];
            r[t] = l.box(this.takeItem(e, t), Be);
        }
        ((this._keys = l.set(new Set(s))), (this._data = l.box(r, Be)));
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
            const s = t[r],
                o = this.takeItem(e, s);
            s in n
                ? null === o
                    ? (delete n[s], this._keys.delete(s), this.set(n))
                    : n[s].set(o)
                : null !== o && ((n[s] = l.box(o, Be)), this._keys.add(s), this.set(n));
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
        return this.options.cloneItem ? Pe(n, ze) : n;
    }
    untrackedData() {
        return h(() => this._data.get());
    }
}
const We = a.createContext({ mode: 'real' }),
    Ie = { equals: G, deep: !1 };
function He(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        d(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const s = (s, o, i = Ie) => {
            const a = l.box(s(n(o)), i);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(s(e))), o), a);
        },
        o = (s, o) => {
            const i = new Ue(n(s), o);
            return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), s), i);
        },
        i = (s, o) => {
            const i = l.box(n(s) ?? o, Ie);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), s), i);
        };
    return {
        dict: o,
        dictRef: (e, t) => o(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => s(Pe, e),
        array: i,
        object: i,
        transform: s,
        primitives: (s, o) => {
            const i = n(o);
            if (Array.isArray(s)) {
                const n = s.reduce((e, t) => ((e[t] = l.box(i[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                s.forEach((t) => {
                                    n[t].set(e[t]);
                                }),
                            );
                        }, o),
                    n
                );
            }
            {
                const n = s,
                    a = Object.entries(n),
                    u = a.reduce((e, [t, n]) => ((e[n] = l.box(i[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                a.forEach(([t, n]) => {
                                    u[n].set(e[t]);
                                }),
                            );
                        }, o),
                    u
                );
            }
        },
    };
}
const qe =
    (e = 'DataLayerProvider') =>
    (t, n, r) => {
        const s = a.createContext(null);
        function o(o) {
            var i;
            const { mode: c, options: l, children: d, mocks: h } = o,
                f = a.useContext(We),
                m = c ?? f.mode,
                p = h ?? f.mocks,
                g = a.useRef([]),
                w = null == (i = null == r ? void 0 : r.useRequires) ? void 0 : i.call(r),
                y = (function (e) {
                    const t = a.useRef(e);
                    return (
                        a.useLayoutEffect(() => {
                            t.current = e;
                        }),
                        a.useCallback((...e) => (0, t.current)(...e), Re)
                    );
                })((s, i, a) => {
                    var u;
                    const c =
                            'real' !== s && a
                                ? (function (e, t) {
                                      return {
                                          subscribe: () => 0,
                                          readSafeByPath: e,
                                          readByPath: e,
                                          createCallback: (n, r) => {
                                              const s = e(X(r, t));
                                              return (...e) => {
                                                  s(n(...e));
                                              };
                                          },
                                          createCallbackNoArgs: (n) => {
                                              const r = e(X(n, t));
                                              return () => {
                                                  r();
                                              };
                                          },
                                          dispose: () => {},
                                          unsubscribe: () => {},
                                          events: { subscribersNotified: new I() },
                                      };
                                  })(a.getter, i)
                                : V(i, { name: e }),
                        l = (e) => ('mocks' === s ? (null == a ? void 0 : a.getter(e, i)) : c.readByPath(e)),
                        d = (e) => g.current.push(e),
                        h = 'initial' in o && {
                            initial: null == (u = null == r ? void 0 : r.initial) ? void 0 : u.call(r, o.initial),
                        },
                        f = t({
                            ...h,
                            mode: s,
                            readByPath: l,
                            requires: w,
                            externalModel: c,
                            observableModel: He(c, s, l),
                            cleanup: d,
                        }),
                        m = { ...h, mode: s, model: f, externalModel: c, cleanup: d, requires: w },
                        p = 'mocks' === s && (null == a ? void 0 : a.controls) ? a.controls(m) : {};
                    return { model: f, controls: { ...(null == n ? void 0 : n(m)), ...p }, externalModel: c, mode: s };
                }),
                b = a.useRef(!1),
                [v, _] = a.useState(m);
            a.useEffect(() => {
                _(m);
            }, [m]);
            const [E, x] = a.useState(() => y(v, l, p));
            return (
                a.useEffect(() => {
                    b.current ? x(y(v, l, p)) : (b.current = !0);
                }, [
                    y,
                    p,
                    v,
                    null == l ? void 0 : l.context,
                    null == l ? void 0 : l.initializer,
                    null == l ? void 0 : l.getRoot,
                    null == l ? void 0 : l.rootId,
                ]),
                a.useEffect(
                    () => () => {
                        (E.externalModel.dispose(), g.current.forEach((e) => e()));
                    },
                    [E],
                ),
                u.jsx(s.Provider, { value: E, children: d })
            );
        }
        return (
            (o.displayName = e),
            [
                o,
                function () {
                    const e = a.useContext(s);
                    if (!e) throw new Error(`hook useModel must be used within a ${o.displayName}.`);
                    return e;
                },
                { Context: s },
            ]
        );
    };
a.forwardRef(function (e, t) {
    const n = a.useRef(null);
    return (
        a.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return U.onHitTest((t) => {
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
class Ke {
    constructor() {
        n(this, 'items', []);
    }
    add(e) {
        return (this.items.push([e, {}]), this);
    }
    addWithProps(e, t) {
        return (this.items.push([e, t]), this);
    }
    render(e) {
        return u.jsx(u.Fragment, {
            children: this.items.reduceRight((e, [t, n], r) => a.createElement(t, { ...n, key: r }, e), e),
        });
    }
}
async function Ve(
    e,
    { root: t = document.getElementById('root'), withMedia: n = !0, fullScreen: r = !1, immediateLayout: s = !0 } = {},
) {
    var o;
    !(function () {
        const e = (t = window.model, { depth: n = 16, convertArrays: r = !0 } = {}) => {
            var s;
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
                    const o = { depth: n - 1, convertArrays: r },
                        i = (null == (s = t.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                    switch (!0) {
                        case i.includes('CoherentArrayProxy'):
                            return [...t.values()].map((t) => e(o.convertArrays ? t.value : t, o));
                        case 'Dict' === i:
                            return [...t.entries()].reduce((t, [n, r]) => ((t[n] = e(r, o)), t), { $$type: 'Dict' });
                        case 'UNKNOWN' === i:
                            return 'UNKNOWN_TYPE';
                        case i.includes('ViewModel'):
                        default: {
                            const n = {};
                            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = e(t[r], o));
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
    const i = n ? xe : f.Fragment,
        a = (null == (o = null == window ? void 0 : window.engine) ? void 0 : o.whenReady) ?? Promise.resolve();
    (s && engine.enableImmediateLayout(!0),
        await a,
        document.documentElement.setAttribute('lang', g.resolve('langCode')),
        m.createRoot(t).render(u.jsx(i, { children: u.jsx(Fe, { children: e }) })),
        r &&
            (!(function (e) {
                function t() {
                    const { top: t, right: n, bottom: r, left: s } = viewEnv.getExternalPaddingsRem();
                    (e.style.setProperty('--external-padding-top', `${t}rem`),
                        e.style.setProperty('--external-padding-right', `${n}rem`),
                        e.style.setProperty('--external-padding-bottom', `${r}rem`),
                        e.style.setProperty('--external-padding-left', `${s}rem`));
                }
                (t(), engine.on('self.onPaddingsUpdated', () => t()));
            })(t),
            viewEnv.setFullscreenModeSupported(!0)));
}
function Xe(e) {
    return u.jsx(u.Fragment, { children: e.children });
}
function Ze(e) {
    return u.jsx(Xe, {
        children: u.jsx(Ce, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
const Ge = 1,
    Je = 2,
    Ye = 3;
const Qe = {
        COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
        base: 'FormatText_db904f12',
        base__fullSize: 'FormatText_base__fullSize_a514958e',
        nowrap: 'FormatText_nowrap_ff69eca3',
    },
    et = new Set((null == (e = Qe.COLORS) ? void 0 : e.split(', ')) ?? []);
let tt = 0;
function nt() {
    return ++tt;
}
const rt =
    /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
function st(e) {
    const t = g.resolve('langCode');
    return (function (e, t, n) {
        return ie.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
    })(
        (function (e, t) {
            return (se[t] ?? oe)(e);
        })(e, t),
        t,
        (e, t) => e && u.jsx('span', { children: e }, `${e}${t}`),
    );
}
function ot(e) {
    return Array.isArray(e)
        ? (function (e) {
              const t = [];
              for (let n = 0; n < e.length; n++) {
                  const r = e[n],
                      s = e[n + 1];
                  if ('string' != typeof s || !rt.test(s)) {
                      t.push(ot(r));
                      continue;
                  }
                  const o = st(s.slice(1));
                  (t.push(
                      u.jsxs(
                          a.Fragment,
                          { children: [u.jsxs('span', { className: Qe.nowrap, children: [ot(r), s[0]] }), o] },
                          nt(),
                      ),
                  ),
                      (n += 1));
              }
              return t;
          })(e)
        : 'string' == typeof e
          ? u.jsx(a.Fragment, { children: st(e) }, nt())
          : e;
}
const it = {
    class: function (e, ...t) {
        return u.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            nt(),
        );
    },
    colorLegacy: function (e, t) {
        const n = nt();
        return et.has(String(t))
            ? u.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : u.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: ot,
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
            nt(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function at(e, t, n, r) {
    const s = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...s] = n.slice(1, -1).split(' ');
                return t ? at(e, t, s, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        o = r[t];
    return o ? o(e, ...s) : (console.error(`Function ${t} is not registered`), e);
}
function ut(e, t, n) {
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
        return r ? at(e, r, s, n) : e;
    }, t);
}
function ct(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function lt(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !ct(e[r]); ) r++;
            const s = e.slice(n + 1, r),
                o = t[s];
            if (o) return lt(e.replace(`$${s}`, String(o)), t);
        }
    }
    return e;
}
function dt(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = lt(e[r], t);
    return n;
}
const ht = ['number', 'string', 'undefined'];
function ft(e, t, n = {}, r = !0) {
    r && (tt = 0);
    const s = [];
    function o(e) {
        if (ht.includes(typeof e)) {
            const t = s.at(-1);
            if ('string' == typeof t) return void (s[s.length - 1] = t + e);
        }
        s.push(e);
    }
    for (const i of e)
        if (i.type === Ge) o(i.value);
        else if (i.type === Ye)
            null === n[i.name] || ht.includes(typeof n[i.name])
                ? o(n[i.name] ?? `{{${i.name}}}`)
                : s.push(u.jsx(a.Fragment, { children: n[i.name] }, `var-${i.name}-${i.instanceId}`));
        else if (i.type === Je) {
            const e = ft(i.children, t, n, !1),
                r = ut(dt(i.attrs, n), e, t);
            s.push(r);
        }
    return s;
}
function mt(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function pt(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function gt(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const wt = { start: '{{', end: '}}' },
    yt = a.memo(function (e) {
        const {
                brackets: t = wt,
                text: n,
                params: r,
                upgradeLegacy: s,
                fullSize: o,
                inline: i,
                formatters: l,
                split: d,
                ...h
            } = e,
            f = a.useMemo(
                () =>
                    e.upgradeLegacy
                        ? (function (e) {
                              return (function (e, t, n, r, s, o, i, a, u) {
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
                                          return u(a(i(o(s(r(n(t(e))))))));
                                      default: {
                                          let e = arguments[0];
                                          for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
                                          return e;
                                      }
                                  }
                              })(e, gt, mt, pt);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            m = a.useMemo(() => (e.formatters ? { ...it, ...e.formatters } : it), [e.formatters]),
            p = a.useMemo(
                () =>
                    (function (e, t) {
                        const n = [],
                            r = [];
                        let s = '',
                            o = !1,
                            i = '',
                            a = 0;
                        for (let u = 0; u < e.length; u++) {
                            const c = e[u];
                            if (c === t.start[0] && e.slice(u, u + t.start.length) === t.start)
                                (s &&
                                    (r.length > 0
                                        ? r[r.length - 1].node.children.push({ type: Ge, value: s })
                                        : n.push({ type: Ge, value: s }),
                                    (s = '')),
                                    (o = !0),
                                    (u += t.start.length - 1));
                            else if (c === t.end[0] && e.slice(u, u + t.end.length) === t.end) {
                                ((o = !1), (u += t.end.length - 1));
                                const e = i.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        s = { type: Je, attrs: t.split('|'), instanceId: ++a, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(s) : n.push(s),
                                        r.push({ node: s, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: Ye, instanceId: ++a, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                i = '';
                            } else o ? (i += c) : (s += c);
                        }
                        s &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: Ge, value: s })
                                : n.push({ type: Ge, value: s }));
                        return n;
                    })(d ? `{{@ split}}${f}{{/}}` : f, t),
                [t, f, d],
            ),
            g = a.useMemo(() => ft(p, m, e.params), [p, m, e.params]),
            w = c(Qe.base, o && Qe.base__fullSize, h.className);
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
    bt = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    vt = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
function _t(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
const Et = (function (e, t, n) {
        var r;
        const s =
                'object' == typeof t && 'cva' in t
                    ? null == (r = t.cva)
                        ? void 0
                        : r.variants
                    : null == n
                      ? void 0
                      : n.variants,
            o = s ? Object.keys(s) : [];
        if ('object' == typeof t) {
            const n = t,
                r = p(n.className, n.cva),
                s = n.element,
                i = a.forwardRef(function (e, t) {
                    return a.createElement(s, { ...('function' == typeof s ? e : _t(o, e)), ref: t, className: r(e) });
                });
            return ((i.displayName = e), n.cva && (i.cva = n.cva), i);
        }
        const i = p(t, n),
            c = a.forwardRef(function (t, n) {
                return u.jsx('div', { 'data-name': e, ..._t(o, t), ref: n, className: i(t) });
            });
        return ((c.displayName = e), c);
    })('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    xt = a.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: s = !1, silent: o = !1, ...i },
        c,
    ) {
        const l = (function () {
            const e = a.useContext(De);
            if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
            return e;
        })();
        return u.jsx(Et, {
            ...i,
            ref: c,
            onMouseEnter: function (e) {
                (s || o || l.play('mouse-enter', { target: r || 'Button', original: e }), null == n || n(e));
            },
            onClick: function (e) {
                s || (o || l.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    Rt = {
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
    kt = a.forwardRef(function (
        {
            children: e,
            size: t = vt.large,
            theme: n = bt.primary,
            disabled: r = !1,
            silent: s = !1,
            autoAlignContent: o = !0,
            classNames: i,
            className: a,
            ...l
        },
        d,
    ) {
        return u.jsxs(xt, {
            ...l,
            ref: d,
            silent: s,
            disabled: r,
            className: c(
                Rt.base,
                Rt[`base__size-${t}`],
                Rt[`base__theme-${n}`],
                r ? Rt.base__disabled : Rt.base__enabled,
                a,
                null == i ? void 0 : i.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = l.onClick) || t.call(l, e);
            },
            children: [
                u.jsx('div', { className: c(Rt.background, null == i ? void 0 : i.background) }),
                u.jsx('div', { className: c(Rt.border, null == i ? void 0 : i.border) }),
                u.jsx('div', { className: c(Rt.overlay, null == i ? void 0 : i.overlay) }),
                u.jsx('div', {
                    className: c(Rt.content, o && Rt.content__fontAligned, null == i ? void 0 : i.content),
                    children: e,
                }),
            ],
        });
    });
((kt.themes = bt), (kt.sizes = vt));
export { kt as B, yt as F, Ke as J, Ze as U, _e as a, ce as b, qe as i, J as k, Z as n, M as p, Ve as r, Ae as u };
