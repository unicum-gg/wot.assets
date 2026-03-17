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
    h as g,
} from './vendor.js';
const p = r();
function w(e, t) {
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
class y {
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
        return void 0 === s ? ('silent' !== n && b(`Resource not found: ${r}`, n), t()) : s;
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
const _ = { integral: 0, gold: 1 },
    x = { fractional: 0, woZeroDigits: 1 },
    E = Object.keys(_),
    k = Object.keys(x);
const S = { full: v.FullTime, short: v.ShortTime };
const A = {
    isNumberFormat: function (e) {
        return e in _;
    },
    formatNumber: function (e, t) {
        return window.formatters.getNumberFormat(t, _[e]);
    },
    numberFormats: E,
    isRealFormat: function (e) {
        return e in x;
    },
    formatReal: function (e, t, n = 2) {
        return window.formatters.getRealFormat(t, x[e], n);
    },
    realFormats: k,
    formatDateTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    dateTimeFormats: v,
    formatTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    timeFormats: Object.keys(S),
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
function C(e, t, n) {
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
            s = C(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== n && b(`Resource not found: ${r}`, n), t()) : s;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : w(this.prefix, e),
            n = C(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const s = e.startsWith('R.strings') ? e : w(this.prefix, e),
            o = C(s, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== r && b(`Resource not found: ${s}`, r), n()) : o;
    }
    pluralOrEmpty(e, t, n = 'warn') {
        return this.pluralOr(e, t, () => '', n);
    }
}
class F {
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
        return void 0 === s ? ('silent' !== n && b(`Resource not found: ${e}`, n), t()) : s;
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
function $(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function j(e) {
    viewEnv.setTrackMouseOnStage(e);
}
p.register({
    strings: i(() => new N()).singleton(),
    images: i(() => new y(window.R.images.gui.maps.icons)).singleton(),
    atlases: i(() => new y(window.R.atlases)).singleton(),
    videos: i(() => new F(window.R.videos)).singleton(),
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
                    : b(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: s(R.strings.settings.LANGUAGE_CODE()),
    intl: s(A),
});
const P = $('clientResized'),
    T = $('self.onScaleUpdated'),
    D = { down: $('mousedown'), up: $('mouseup'), move: $('mousemove') };
function O(e) {
    engine.call('PlaySound', e);
}
!(function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && j(!1);
    }
    function n() {
        e.enabled && j(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  j(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : j(!1);
    }
    ['down', 'up', 'move'].reduce(
        (t, n) => (
            (t[n] = (function (t) {
                return (n) => {
                    e.listeners += 1;
                    const s = `mouse${t}`,
                        o = D[t]((e) => n([e, 'outside']));
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
const L = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    M = { ...Object.keys(L).reduce((e, t) => ((e[t] = () => O(L[t])), e), {}), sound: O },
    z = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    B = {
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
        onExternalPaddingsUpdated: $('self.onPaddingsUpdated'),
        children: {
            onAdded: $('children.onAdded'),
            onLoaded: $('children.onLoaded'),
            onRemoved: $('children.onRemoved'),
            onAttached: $('children.onAttached'),
            onTextureReady: $('children.onTextureReady'),
            onRequestPosition: $('children.requestPosition'),
        },
    };
function U() {
    return viewEnv.setEventHandled();
}
function I() {
    return viewEnv.isEventHandled();
}
Object.keys(z).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === z[t]), e), {});
class W {
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
const H = (e) => (0 === e ? window : window.subViews.get(e));
function X(
    { initializer: e = !0, rootId: t = 0, getRoot: n = H, context: r = 'model' } = {},
    { name: s = 'DataLayer' } = {},
) {
    const o = new Map(),
        i = { subscribersNotified: new W() },
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
function q(e, t) {
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
function Z() {
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
const K = { ENTER: 13, ESCAPE: 27, SPACE: 32 };
function G(e, t) {
    return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
}
const V = {
    NONE: 'NONE',
    ...((Y = [
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
    Y.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...G(
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
    ...G(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...G(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...G(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...G(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...G(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...G(['Up', 'Down'], 'Page'),
    ...G(['Left', 'Right'], 'Bracket'),
};
var Y;
function J(e) {
    return 'number' == typeof e
        ? (function (e) {
              return window.systemInput.getKeyName(e);
          })(e)
        : e;
}
['ko', 'no'].includes(p.resolve('langCode'));
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
function ee(e) {
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
const te = {
    zh_cn: ee,
    zh_sg: ee,
    zh_tw: ee,
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
    th: function (e) {
        var t;
        const n = [],
            r = e
                .replace(/&nbsp;/g, ' ')
                .matchAll(
                    /[【「(（『"《]?[\u0E00-\u0E7F%](?:[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E。!?,.:、…・/ー—–!%+?）)】」"》』]+)?|[「【(（『《"]?\d+(?:,\d{3})*(?:-\d+(?:,\d{3})*)?(?:\s*[a-zA-Z\u0E00-\u0E7F/%]+)?(?:[。.,，、:;：；!?）)】」"》・%)、]+)?|[「【(（『《"]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?"》】」）)』]+)?|[\u00A0 ]|[^\s]/gu,
                );
        for (const [s] of r)
            /^\s+$/.test(s)
                ? n.length
                    ? (n[n.length - 1] += s)
                    : n.push(s)
                : 1 === n.length && (null == (t = n[0]) ? void 0 : t.startsWith('  '))
                  ? (n[0] = ' ' + s)
                  : n.push(s);
        return n;
    },
};
function ne(e) {
    return e.split(' ');
}
const re = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko', 'th']);
const se = a.createContext(void 0);
const oe = 'extraSmall',
    ie = {
        extraSmall: { weight: 0, name: oe, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var ae,
    ue,
    ce,
    le =
        (((ae = le || {})[(ae.Small = ie.small.width)] = 'Small'),
        (ae[(ae.Medium = ie.medium.width)] = 'Medium'),
        (ae[(ae.Large = ie.large.width)] = 'Large'),
        (ae[(ae.ExtraLarge = ie.extraLarge.width)] = 'ExtraLarge'),
        ae),
    de =
        (((ue = de || {})[(ue.Small = ie.small.width)] = 'Small'),
        (ue[(ue.Medium = ie.medium.width)] = 'Medium'),
        (ue[(ue.Large = ie.large.width)] = 'Large'),
        (ue[(ue.ExtraLarge = ie.extraLarge.width)] = 'ExtraLarge'),
        ue),
    he =
        (((ce = he || {})[(ce.Small = ie.small.height)] = 'Small'),
        (ce[(ce.Medium = ie.medium.height)] = 'Medium'),
        (ce[(ce.Large = ie.large.height)] = 'Large'),
        (ce[(ce.ExtraLarge = ie.extraLarge.height)] = 'ExtraLarge'),
        ce);
const fe = Object.values(ie);
function me(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        s = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...s])).join(' ');
}
const ge = () => {
        return ((e = 1), viewEnv.remToPx(e));
        var e;
    },
    pe = () => {
        const e = (function (e = 'px') {
            return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
        })('rem');
        return (function (e, t, n) {
            const r = fe.reduce(
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
                i = o.names[o.names.length - 1] ?? oe,
                a = ie[i],
                u = r.width.names,
                c = r.height.names,
                l = u[u.length - 1] ?? oe,
                d = c[c.length - 1] ?? oe,
                h = { width: ie[l].width, height: ie[d].height };
            return {
                mediaClass: me(s, r),
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
        })(e.width, e.height, ge());
    };
function we({ children: e }) {
    const [t, n] = a.useState(pe);
    return (
        a.useLayoutEffect(() => {
            function e() {
                n(pe);
            }
            e();
            const t = P(e),
                r = T(e);
            return () => {
                (t(), r());
            };
        }, []),
        u.jsx(se.Provider, { value: t, children: e })
    );
}
function be() {
    return (function () {
        const e = a.useContext(se);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function ye({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: s } = be();
    return u.jsx('div', { className: c(t, 'media-wrapper', r, s && 'media-upscale'), ...n, children: e });
}
function ve({ children: e, ...t }) {
    return u.jsx(we, { children: u.jsx(ye, { ...t, children: e }) });
}
function _e(e, t) {
    return (function (e, t, n) {
        return n ? e.breaks.reduce((e, t) => (n[t] ? { ...e, ...n[t] } : e), t) : t;
    })(be(), e, t);
}
const xe = [];
function Ee(e) {
    const t = a.useRef(e);
    return (
        a.useLayoutEffect(() => {
            t.current = e;
        }),
        a.useCallback((...e) => (0, t.current)(...e), xe)
    );
}
const ke = () => {
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
                if (e === V.NONE) return Z;
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
    Re = a.createContext(void 0);
function Se(e, t, n, r = !1) {
    const s = J(e),
        o = Ee((e) => {
            I() || (n(e), U(), r && e.stopPropagation());
        }),
        i = (function () {
            const e = a.useContext(Re);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        u = a.useMemo(() => i[t].register(s, o), [i, t, s, o]);
    a.useEffect(() => u, [u]);
}
function Ae(e, t, n = !1) {
    return Se(J(e), 'keydown', t, n);
}
function Ce(e) {
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
    return u.jsx(Re.Provider, { value: r, children: e.children });
}
const Ne = (e) => {
    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
};
function Fe(e = V.ESCAPE, t = Ne, n = !1) {
    const r = J(e);
    a.useEffect(() => {
        if (r !== V.NONE)
            return (window.addEventListener('keydown', e, n), () => window.removeEventListener('keydown', e, n));
        function e(e) {
            e.code !== r || I() || (t(e), U(), n && e.stopPropagation());
        }
    }, [t, r, n]);
}
const $e = {
    click: je('play'),
    'hot-key': je('play'),
    'mouse-enter': je('highlight'),
    increaseAmount: je('cons_ammo_single_plus'),
    decreaseAmount: je('cons_ammo_single_minus'),
    increaseAmountRoll: je('cons_ammo_roll_plus'),
    decreaseAmountRoll: je('cons_ammo_roll_minus'),
    close: je('cancelcloseno'),
    'show-context-menu': je('tabb'),
    progressSimple: je('gui_hangar_progressbar_simple'),
    increaseDelta: je('gui_hangar_progressbar_delta_increase'),
    decreaseDelta: je('gui_hangar_progressbar_delta_decrease'),
    increaseDeltaMax: je('gui_hangar_progressbar_delta_max'),
    pointerGrab: je('gui_hangar_progressbar_pointer_grab'),
    pointerDrag: je('gui_hangar_progressbar_pointer_drag'),
};
function je(e) {
    return () => {
        M.sound(e);
    };
}
const Pe = a.createContext(null);
function Te({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const s = a.useMemo(() => ({ ...$e, ...t }), [t]),
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
    return u.jsx(Pe.Provider, { value: o, children: r });
}
function De() {
    const e = a.useContext(Pe);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const Oe = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    Le = new Set(['number', 'string', 'boolean', 'bigint']),
    Me = new Set(['Dict']);
function ze(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var s, o;
    const i = e,
        a = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (Oe.has(a)) return i;
    if (null === i) return i;
    const u = { depth: n + 1, maxDepth: r };
    if (Array.isArray(i)) return i.map((e) => ze(e, u));
    if ('object' === a) {
        const r = (null == (s = i.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => ze(e, u));
        if ('CoherentArrayProxy' === r) return e.map((e) => ze(e.value, u));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in i) {
                    const n = i[t];
                    Le.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in i) {
                    const n = i[t],
                        r = (null == (o = null == i ? void 0 : i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                    Me.has(r) || (e[t] = ze(n, u));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(i)) a[e] = ze(i[e], u);
        return a;
    }
    return (console.error('Incorrect value to clone model', i), i);
}
const Be = { deep: !1, equals: Z },
    Ue = { cloneItem: !0 },
    Ie = { shallow: !1 };
class We {
    constructor(e, t = Ue) {
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
        return this.options.cloneItem ? ze(n, Ie) : n;
    }
    untrackedData() {
        return h(() => this._data.get());
    }
}
const He = a.createContext({ mode: 'real' });
class Xe {
    constructor() {
        n(this, 'hashtable', new Map());
    }
    static fromEntries(e) {
        const t = new Xe();
        return ((t.hashtable = new Map(e)), t);
    }
    static fromObject(e) {
        const t = new Xe();
        for (const [n, r] of Object.entries(e)) t.hashtable.set(n, r);
        return t;
    }
    get(e) {
        const t = this.hashtable.get(e);
        return void 0 === t ? null : t;
    }
    values() {
        return [...this.hashtable.values()];
    }
    keys() {
        return [...this.hashtable.keys()];
    }
    entries() {
        return [...this.hashtable.entries()];
    }
}
const qe = { equals: Z, deep: !1 };
function Ze(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        d(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const s = (s, o, i = qe) => {
            const a = l.box(s(n(o)), i);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(s(e))), o), a);
        },
        o = (s, o) => {
            const i = new We(n(s), o);
            return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), s), i);
        },
        i = (s, o) => {
            const i = l.box(n(s) ?? o, qe);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), s), i);
        };
    return {
        dict: o,
        dictRef: (e, t) => o(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => s(ze, e),
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
const Ke =
    (e = 'DataLayerProvider') =>
    (t, n, r) => {
        const s = a.createContext(null);
        function o(o) {
            var i;
            const { mode: c, options: l, children: d, mocks: h } = o,
                f = a.useContext(He),
                m = c ?? f.mode,
                g = h ?? f.mocks,
                p = a.useRef([]),
                w = null == (i = null == r ? void 0 : r.useRequires) ? void 0 : i.call(r),
                b = Ee((s, i, a) => {
                    var u;
                    const c =
                            'real' !== s && a
                                ? (function (e, t) {
                                      return {
                                          subscribe: () => 0,
                                          readSafeByPath: e,
                                          readByPath: e,
                                          createCallback: (n, r) => {
                                              const s = e(q(r, t));
                                              return (...e) => {
                                                  s(n(...e));
                                              };
                                          },
                                          createCallbackNoArgs: (n) => {
                                              const r = e(q(n, t));
                                              return () => {
                                                  r();
                                              };
                                          },
                                          dispose: () => {},
                                          unsubscribe: () => {},
                                          events: { subscribersNotified: new W() },
                                      };
                                  })(a.getter, i)
                                : X(i, { name: e }),
                        l = (e) => ('mocks' === s ? (null == a ? void 0 : a.getter(e, i)) : c.readByPath(e)),
                        d = (e) => p.current.push(e),
                        h = 'initial' in o && {
                            initial: null == (u = null == r ? void 0 : r.initial) ? void 0 : u.call(r, o.initial),
                        },
                        f = t({
                            ...h,
                            mode: s,
                            readByPath: l,
                            requires: w,
                            externalModel: c,
                            observableModel: Ze(c, s, l),
                            cleanup: d,
                        }),
                        m = { ...h, mode: s, model: f, externalModel: c, cleanup: d, requires: w },
                        g = 'mocks' === s && (null == a ? void 0 : a.controls) ? a.controls(m) : {};
                    return {
                        model: f,
                        controls: { ...(null == n ? void 0 : n(m)), ...g },
                        externalModel: c,
                        mode: s,
                        rootId: (null == i ? void 0 : i.rootId) ?? 0,
                    };
                }),
                y = a.useRef(!1),
                [v, _] = a.useState(m);
            a.useEffect(() => {
                _(m);
            }, [m]);
            const [x, E] = a.useState(() => b(v, l, g));
            return (
                a.useEffect(() => {
                    y.current ? E(b(v, l, g)) : (y.current = !0);
                }, [
                    b,
                    g,
                    v,
                    null == l ? void 0 : l.context,
                    null == l ? void 0 : l.initializer,
                    null == l ? void 0 : l.getRoot,
                    null == l ? void 0 : l.rootId,
                ]),
                a.useEffect(
                    () => () => {
                        (x.externalModel.dispose(), p.current.forEach((e) => e()));
                    },
                    [x],
                ),
                u.jsx(s.Provider, { value: x, children: d })
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
async function Ge(
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
    const i = n ? ve : f.Fragment,
        a = (null == (o = null == window ? void 0 : window.engine) ? void 0 : o.whenReady) ?? Promise.resolve();
    (s && engine.enableImmediateLayout(!0),
        await a,
        document.documentElement.setAttribute('lang', p.resolve('langCode')),
        m.createRoot(t).render(u.jsx(i, { children: u.jsx(Ce, { children: e }) })),
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
function Ve(e) {
    return u.jsx(u.Fragment, { children: e.children });
}
function Ye(e) {
    return u.jsx(Ve, {
        children: u.jsx(Te, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
a.forwardRef(function (e, t) {
    const n = a.useRef(null);
    return (
        a.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return B.onHitTest((t) => {
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
const Je = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    Qe = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
function et(e, t, n) {
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
            r = g(n.className, n.cva),
            s = n.element,
            i = a.forwardRef(function (e, t) {
                return a.createElement(s, { ...('function' == typeof s ? e : tt(o, e)), ref: t, className: r(e) });
            });
        return ((i.displayName = e), n.cva && (i.cva = n.cva), i);
    }
    const i = g(t, n),
        c = a.forwardRef(function (t, n) {
            return u.jsx('div', { 'data-name': e, ...tt(o, t), ref: n, className: i(t) });
        });
    return ((c.displayName = e), n && (c.cva = n), c);
}
function tt(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
const nt = et('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    rt = a.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: s = !1, silent: o = !1, ...i },
        a,
    ) {
        const c = De();
        return u.jsx(nt, {
            ...i,
            ref: a,
            onMouseEnter: function (e) {
                (s || o || c.play('mouse-enter', { target: r || 'Button', original: e }), null == n || n(e));
            },
            onClick: function (e) {
                s || (o || c.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    st = {
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
    ot = a.forwardRef(function (
        {
            children: e,
            size: t = Qe.large,
            theme: n = Je.primary,
            disabled: r = !1,
            silent: s = !1,
            autoAlignContent: o = !0,
            classNames: i,
            className: a,
            ...l
        },
        d,
    ) {
        return u.jsxs(rt, {
            ...l,
            ref: d,
            silent: s,
            disabled: r,
            className: c(
                st.base,
                st[`base__size-${t}`],
                st[`base__theme-${n}`],
                r ? st.base__disabled : st.base__enabled,
                a,
                null == i ? void 0 : i.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = l.onClick) || t.call(l, e);
            },
            children: [
                u.jsx('div', { className: c(st.background, null == i ? void 0 : i.background) }),
                u.jsx('div', { className: c(st.border, null == i ? void 0 : i.border) }),
                u.jsx('div', { className: c(st.overlay, null == i ? void 0 : i.overlay) }),
                u.jsx('div', {
                    className: c(st.content, o && st.content__fontAligned, null == i ? void 0 : i.content),
                    children: e,
                }),
            ],
        });
    });
((ot.themes = Je), (ot.sizes = Qe));
const it = () => {};
function at(e) {
    const t = e;
    return a.forwardRef(function (e, n) {
        const r = _e(e, e.adaptive),
            { path: s, ...o } = r,
            i = r.images ?? p.resolve('images'),
            a = { ...o, ref: n };
        {
            const e = s ? i.readOr(s, it, 'warn') : void 0;
            return e ? u.jsx(t, { ...a, src: e }) : u.jsx(t, { ...a, unknown: !0 });
        }
    });
}
const ut = {
        background:
            'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
        backgroundSize: '20rem 20rem',
        backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
        backgroundColor: '#000',
    },
    ct = a.forwardRef(function (e, t) {
        if (!e.src) {
            const {
                repeat: n,
                fit: r,
                position: s,
                width: o,
                src: i,
                height: a,
                unselectable: c,
                unknownStyle: l = ut,
                ...d
            } = e;
            return u.jsx('div', { ...d, ref: t, style: { width: e.width, height: e.height, ...l, ...e.style } });
        }
        const { repeat: n, fit: r, position: s, width: o, height: i, unknownStyle: a, unselectable: c, ...l } = e;
        return u.jsx('div', {
            ...l,
            ref: t,
            style: {
                backgroundImage: `url(${e.src})`,
                backgroundRepeat: n ?? 'no-repeat',
                backgroundSize: r ?? 'contain',
                backgroundPosition: s ?? 'center center',
                width: 'number' == typeof o ? `${o}rem` : o,
                height: 'number' == typeof i ? `${i}rem` : i,
                ...l.style,
            },
        });
    }),
    lt = at(
        a.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: n,
                    fit: r,
                    position: s,
                    width: o,
                    src: i,
                    height: a,
                    unselectable: c,
                    unknown: l,
                    unknownStyle: d = ut,
                    ...h
                } = e;
                return u.jsx('div', { ...h, ref: t, style: { width: e.width, height: e.height, ...d, ...e.style } });
            }
            const {
                repeat: n,
                fit: r,
                position: s,
                width: o,
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
                    backgroundPosition: s ?? 'center center',
                    width: 'number' == typeof o ? `${o}rem` : o,
                    height: 'number' == typeof i ? `${i}rem` : i,
                    ...d.style,
                },
            });
        }),
    );
at(
    a.forwardRef(function (e, t) {
        const { width: n, height: r, src: s, unselectable: o, unknown: i, unknownStyle: a = ut, ...c } = e;
        return e.unknown
            ? u.jsx('div', { ...c, style: { width: e.width, height: e.height, ...a } })
            : u.jsx('img', { ...c, ref: t, src: s, width: n, height: r });
    }),
);
const dt = 1,
    ht = 2,
    ft = 3;
const mt = {
        COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
        base: 'FormatText_db904f12',
        base__fullSize: 'FormatText_base__fullSize_a514958e',
        nowrap: 'FormatText_nowrap_ff69eca3',
    },
    gt = new Set((null == (e = mt.COLORS) ? void 0 : e.split(', ')) ?? []);
let pt = 0;
function wt() {
    return ++pt;
}
const bt =
    /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
function yt(e) {
    const t = p.resolve('langCode');
    return (function (e, t, n) {
        return re.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
    })(
        (function (e, t) {
            return (te[t] ?? ne)(e);
        })(e, t),
        t,
        (e, t) => e && u.jsx('span', { children: e }, `${e}${t}`),
    );
}
function vt(e) {
    return Array.isArray(e)
        ? (function (e) {
              const t = [];
              for (let n = 0; n < e.length; n++) {
                  const r = e[n],
                      s = e[n + 1];
                  if ('string' != typeof s || !bt.test(s)) {
                      t.push(vt(r));
                      continue;
                  }
                  const o = yt(s.slice(1));
                  (t.push(
                      u.jsxs(
                          a.Fragment,
                          { children: [u.jsxs('span', { className: mt.nowrap, children: [vt(r), s[0]] }), o] },
                          wt(),
                      ),
                  ),
                      (n += 1));
              }
              return t;
          })(e)
        : 'string' == typeof e
          ? u.jsx(a.Fragment, { children: yt(e) }, wt())
          : e;
}
const _t = {
    class: function (e, ...t) {
        return u.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            wt(),
        );
    },
    colorLegacy: function (e, t) {
        const n = wt();
        return gt.has(String(t))
            ? u.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : u.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: vt,
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
            wt(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function xt(e, t, n, r) {
    const s = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...s] = n.slice(1, -1).split(' ');
                return t ? xt(e, t, s, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        o = r[t];
    return o ? o(e, ...s) : (console.error(`Function ${t} is not registered`), e);
}
function Et(e, t, n) {
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
        return r ? xt(e, r, s, n) : e;
    }, t);
}
function kt(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function Rt(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !kt(e[r]); ) r++;
            const s = e.slice(n + 1, r),
                o = t[s];
            if (o) return Rt(e.replace(`$${s}`, String(o)), t);
        }
    }
    return e;
}
function St(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = Rt(e[r], t);
    return n;
}
const At = ['number', 'string', 'undefined'];
function Ct(e, t, n = {}, r = !0) {
    r && (pt = 0);
    const s = [];
    function o(e) {
        if (At.includes(typeof e)) {
            const t = s.at(-1);
            if ('string' == typeof t) return void (s[s.length - 1] = t + e);
        }
        s.push(e);
    }
    for (const i of e)
        if (i.type === dt) o(i.value);
        else if (i.type === ft)
            null === n[i.name] || At.includes(typeof n[i.name])
                ? o(n[i.name] ?? `{{${i.name}}}`)
                : s.push(u.jsx(a.Fragment, { children: n[i.name] }, `var-${i.name}-${i.instanceId}`));
        else if (i.type === ht) {
            const e = Ct(i.children, t, n, !1),
                r = Et(St(i.attrs, n), e, t);
            s.push(r);
        }
    return s;
}
function Nt(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function Ft(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function $t(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const jt = { start: '{{', end: '}}' },
    Pt = a.memo(function (e) {
        const {
                brackets: t = jt,
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
                              })(e, $t, Nt, Ft);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            m = a.useMemo(() => (e.formatters ? { ..._t, ...e.formatters } : _t), [e.formatters]),
            g = a.useMemo(
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
                                        ? r[r.length - 1].node.children.push({ type: dt, value: s })
                                        : n.push({ type: dt, value: s }),
                                    (s = '')),
                                    (o = !0),
                                    (u += t.start.length - 1));
                            else if (c === t.end[0] && e.slice(u, u + t.end.length) === t.end) {
                                ((o = !1), (u += t.end.length - 1));
                                const e = i.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        s = { type: ht, attrs: t.split('|'), instanceId: ++a, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(s) : n.push(s),
                                        r.push({ node: s, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: ft, instanceId: ++a, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                i = '';
                            } else o ? (i += c) : (s += c);
                        }
                        s &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: dt, value: s })
                                : n.push({ type: dt, value: s }));
                        return n;
                    })(d ? `{{@ split}}${f}{{/}}` : f, t),
                [t, f, d],
            ),
            p = a.useMemo(() => Ct(g, m, e.params), [g, m, e.params]),
            w = c(mt.base, o && mt.base__fullSize, h.className);
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
                  children: p,
              }))
            : u.jsx('span', { ...h, className: w, children: p });
    }),
    Tt = {
        tankXP: 'tankXP',
        freeXP: 'freeXP',
        credits: 'credits',
        gold: 'gold',
        crystal: 'crystal',
        equipCoin: 'equipCoin',
        stpCoin: 'stpcoin',
        brCoin: 'brcoin',
        eliteXp: 'eliteXp',
        depot: 'depot',
        vehicle: 'vehicle',
        crew: 'crew',
        custom: 'custom',
        xp: 'xp',
        brProgressionToken: 'brProgressionToken',
        battlePassPoints: 'battlePassPoints',
    },
    Dt = Object.values(Tt),
    Ot = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
        xxl: 'xxl',
    },
    Lt = { [Ot.extraSmall]: 16, [Ot.small]: 24, [Ot.medium]: 32, [Ot.large]: 48, [Ot.extraLarge]: 80, [Ot.xxl]: 96 },
    Mt = { [Ot.extraSmall]: 32, [Ot.small]: 48, [Ot.medium]: 32, [Ot.large]: 96, [Ot.extraLarge]: 80, [Ot.xxl]: 96 },
    zt = {
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
    Bt = p.resolve('intl'),
    Ut = et('Currency', zt.base, { variants: { reverse: { true: zt.base__reverse } } });
function It(e, t) {
    const n = t === Tt.gold ? 'gold' : 'integral';
    return Array.isArray(e)
        ? e.map((e) => ('number' == typeof e ? Bt.formatNumber(n, e) : e))
        : 'number' == typeof e
          ? Bt.formatNumber(n, e)
          : e;
}
function Wt({
    children: e,
    type: t,
    className: n,
    classNames: r,
    imagePath: s,
    size: o = Ot.small,
    enough: i = !0,
    ...a
}) {
    const l = Lt[o],
        d = `${t}_${l}x${l}`,
        h = Mt[o],
        f = `${t}_${h}x${h}`,
        m = s || Dt.includes(t),
        g = ((p = `library.currency.${d}`), (w = `library.currency.${f}`), be().upscale ? w : p);
    var p, w;
    return u.jsxs(Ut, {
        ...a,
        className: c(null == r ? void 0 : r.base, i ? zt[`base__${t}`] : zt.base__notEnough, n),
        children: [
            m && u.jsx(lt, { width: l, height: l, path: s ?? g, className: null == r ? void 0 : r.icon }),
            It(e, t),
        ],
    });
}
((Wt.sizes = Ot), (Wt.types = Tt));
export {
    ot as B,
    Wt as C,
    Xe as D,
    Pt as F,
    lt as I,
    ct as R,
    Ye as U,
    Tt as a,
    Fe as b,
    V as c,
    _e as d,
    De as e,
    Ke as i,
    K as k,
    Ge as r,
    Je as t,
    Ae as u,
};
