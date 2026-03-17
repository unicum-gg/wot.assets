var e = Object.defineProperty,
    t = (t, n, r) =>
        ((t, n, r) => (n in t ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[n] = r)))(
            t,
            'symbol' != typeof n ? n + '' : n,
            r,
        );
import {
    c as n,
    a as r,
    b as o,
    d as s,
    r as i,
    j as a,
    e as u,
    o as c,
    f as l,
    u as d,
    R as h,
    g as f,
    h as m,
} from './vendor.js';
const w = n();
function g(e, t) {
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
class b {
    constructor(e = window.R.images, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.images') ? e : g(this.prefix, e),
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
            })(e.startsWith('R.images') ? window : this.root, r);
        return void 0 === o ? ('silent' !== n && p(`Resource not found: ${r}`, n), t()) : o;
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
var y = ((e) => (
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
))(y || {});
const v = { integral: 0, gold: 1 },
    _ = { fractional: 0, woZeroDigits: 1 },
    x = Object.keys(v),
    E = Object.keys(_);
const k = { full: y.FullTime, short: y.ShortTime };
const S = {
    isNumberFormat: function (e) {
        return e in v;
    },
    formatNumber: function (e, t) {
        return window.formatters.getNumberFormat(t, v[e]);
    },
    numberFormats: x,
    isRealFormat: function (e) {
        return e in _;
    },
    formatReal: function (e, t, n = 2) {
        return window.formatters.getRealFormat(t, _[e], n);
    },
    realFormats: E,
    formatDateTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    dateTimeFormats: y,
    formatTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    timeFormats: Object.keys(k),
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
function C(e, t, n) {
    const r = e.split('.');
    if (window.R && window.R.strings) {
        const e = r[r.length - 1];
        if (!e) return;
        const o = r.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
        }, n);
        if (!o) return;
        return 'function' == typeof o[e] ? (t ? o[e](t) : o[e]()) : void 0;
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
        const r = e.startsWith('R.strings') ? e : g(this.prefix, e),
            o = C(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== n && p(`Resource not found: ${r}`, n), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : g(this.prefix, e),
            n = C(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const o = e.startsWith('R.strings') ? e : g(this.prefix, e),
            s = C(o, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== r && p(`Resource not found: ${o}`, r), n()) : s;
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
        const r = e.startsWith('R.videos') ? e : g(this.prefix, e),
            o = (function (e, t) {
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
        return void 0 === o ? ('silent' !== n && p(`Resource not found: ${e}`, n), t()) : o;
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
function O(e) {
    viewEnv.setTrackMouseOnStage(e);
}
w.register({
    strings: s(() => new N()).singleton(),
    images: s(() => new b(window.R.images.gui.maps.icons)).singleton(),
    atlases: s(() => new b(window.R.atlases)).singleton(),
    videos: s(() => new T(window.R.videos)).singleton(),
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
                    : p(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: r(R.strings.settings.LANGUAGE_CODE()),
    intl: r(S),
});
const P = D('clientResized'),
    j = D('self.onScaleUpdated'),
    L = { down: D('mousedown'), up: D('mouseup'), move: D('mousemove') };
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
    function r() {
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
                    const o = `mouse${t}`,
                        s = L[t]((e) => n([e, 'outside']));
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
const M = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    $ = { ...Object.keys(M).reduce((e, t) => ((e[t] = () => B(M[t])), e), {}), sound: B },
    A = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    F = {
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
        onExternalPaddingsUpdated: D('self.onPaddingsUpdated'),
        children: {
            onAdded: D('children.onAdded'),
            onLoaded: D('children.onLoaded'),
            onRemoved: D('children.onRemoved'),
            onAttached: D('children.onAttached'),
            onTextureReady: D('children.onTextureReady'),
            onRequestPosition: D('children.requestPosition'),
        },
    };
function z() {
    return viewEnv.setEventHandled();
}
function U() {
    return viewEnv.isEventHandled();
}
Object.keys(A).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === A[t]), e), {});
class H {
    constructor() {
        t(this, 'listeners', new Set());
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
const I = (e) => (0 === e ? window : window.subViews.get(e));
function W(
    { initializer: e = !0, rootId: t = 0, getRoot: n = I, context: r = 'model' } = {},
    { name: o = 'DataLayer' } = {},
) {
    const s = new Map(),
        i = { subscribersNotified: new H() },
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
    function u() {
        try {
            const e = n(t);
            return r.split('.').reduce((e, t) => e[t], e);
        } catch (e) {
            throw new Error(`Failure get root of ${o}. Root id: ${t}. Context: ${r}`);
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
            return (s.set(i, n), e && n(c(o), []), i);
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
            if (0 === t || window.subViews.ids().includes(t)) for (const e of s.keys()) l(e);
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
function K() {
    return !1;
}
function X(e, t) {
    return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
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
const G = {
    NONE: 'NONE',
    ...((V = [
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
    V.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...X(
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
    ...X(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...X(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...X(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...X(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...X(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...X(['Up', 'Down'], 'Page'),
    ...X(['Left', 'Right'], 'Bracket'),
};
var V;
function Y(e) {
    return 'number' == typeof e
        ? (function (e) {
              return window.systemInput.getKeyName(e);
          })(e)
        : e;
}
['ko', 'no'].includes(w.resolve('langCode'));
class J {
    constructor() {
        t(this, 'items', []);
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
const Q = i.createContext(void 0);
const Z = 'extraSmall',
    ee = {
        extraSmall: { weight: 0, name: Z, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var te,
    ne,
    re,
    oe =
        (((te = oe || {})[(te.Small = ee.small.width)] = 'Small'),
        (te[(te.Medium = ee.medium.width)] = 'Medium'),
        (te[(te.Large = ee.large.width)] = 'Large'),
        (te[(te.ExtraLarge = ee.extraLarge.width)] = 'ExtraLarge'),
        te),
    se =
        (((ne = se || {})[(ne.Small = ee.small.width)] = 'Small'),
        (ne[(ne.Medium = ee.medium.width)] = 'Medium'),
        (ne[(ne.Large = ee.large.width)] = 'Large'),
        (ne[(ne.ExtraLarge = ee.extraLarge.width)] = 'ExtraLarge'),
        ne),
    ie =
        (((re = ie || {})[(re.Small = ee.small.height)] = 'Small'),
        (re[(re.Medium = ee.medium.height)] = 'Medium'),
        (re[(re.Large = ee.large.height)] = 'Large'),
        (re[(re.ExtraLarge = ee.extraLarge.height)] = 'ExtraLarge'),
        re);
const ae = Object.values(ee);
function ue(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        o = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...o])).join(' ');
}
const ce = () => {
        return ((e = 1), viewEnv.remToPx(e));
        var e;
    },
    le = () => {
        const e = (function (e = 'px') {
            return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
        })('rem');
        return (function (e, t, n) {
            const r = ae.reduce(
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
                i = s.names[s.names.length - 1] ?? Z,
                a = ee[i],
                u = r.width.names,
                c = r.height.names,
                l = u[u.length - 1] ?? Z,
                d = c[c.length - 1] ?? Z,
                h = { width: ee[l].width, height: ee[d].height };
            return {
                mediaClass: ue(o, r),
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
        })(e.width, e.height, ce());
    };
function de({ children: e }) {
    const [t, n] = i.useState(le);
    return (
        i.useLayoutEffect(() => {
            function e() {
                n(le);
            }
            e();
            const t = P(e),
                r = j(e);
            return () => {
                (t(), r());
            };
        }, []),
        a.jsx(Q.Provider, { value: t, children: e })
    );
}
function he() {
    return (function () {
        const e = i.useContext(Q);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function fe({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: o } = he();
    return a.jsx('div', { className: u(t, 'media-wrapper', r, o && 'media-upscale'), ...n, children: e });
}
function me({ children: e, ...t }) {
    return a.jsx(de, { children: a.jsx(fe, { ...t, children: e }) });
}
const we = [];
function ge(e) {
    const t = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            t.current = e;
        }),
        i.useCallback((...e) => (0, t.current)(...e), we)
    );
}
const pe = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new J();
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
                if (e === G.NONE) return K;
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
    be = i.createContext(void 0);
function ye(e, t, n, r = !1) {
    const o = Y(e),
        s = ge((e) => {
            U() || (n(e), z(), r && e.stopPropagation());
        }),
        a = (function () {
            const e = i.useContext(be);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        u = i.useMemo(() => a[t].register(o, s), [a, t, o, s]);
    i.useEffect(() => u, [u]);
}
function ve(e) {
    const t = i.useMemo(pe, []),
        n = i.useMemo(pe, []);
    i.useEffect(() => {
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
    const r = i.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: n.register, unregister: n.unregister },
        }),
        [t, n],
    );
    return a.jsx(be.Provider, { value: r, children: e.children });
}
const _e = (e) => {
    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
};
function xe(e = G.ESCAPE, t = _e, n = !1) {
    const r = Y(e);
    i.useEffect(() => {
        if (r !== G.NONE)
            return (window.addEventListener('keydown', e, n), () => window.removeEventListener('keydown', e, n));
        function e(e) {
            e.code !== r || U() || (t(e), z(), n && e.stopPropagation());
        }
    }, [t, r, n]);
}
function Ee(e) {
    return (function (e, t, n = !1) {
        return ye(Y(e), 'keydown', t, n);
    })(G.ESCAPE, e);
}
const ke = {
    click: Re('play'),
    'hot-key': Re('play'),
    'mouse-enter': Re('highlight'),
    increaseAmount: Re('cons_ammo_single_plus'),
    decreaseAmount: Re('cons_ammo_single_minus'),
    increaseAmountRoll: Re('cons_ammo_roll_plus'),
    decreaseAmountRoll: Re('cons_ammo_roll_minus'),
    close: Re('cancelcloseno'),
    'show-context-menu': Re('tabb'),
    progressSimple: Re('gui_hangar_progressbar_simple'),
    increaseDelta: Re('gui_hangar_progressbar_delta_increase'),
    decreaseDelta: Re('gui_hangar_progressbar_delta_decrease'),
    increaseDeltaMax: Re('gui_hangar_progressbar_delta_max'),
    pointerGrab: Re('gui_hangar_progressbar_pointer_grab'),
    pointerDrag: Re('gui_hangar_progressbar_pointer_drag'),
};
function Re(e) {
    return () => {
        $.sound(e);
    };
}
const Se = i.createContext(null);
function Ce({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const o = i.useMemo(() => ({ ...ke, ...t }), [t]),
        s = i.useMemo(
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
    return a.jsx(Se.Provider, { value: s, children: r });
}
const Ne = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    Te = new Set(['number', 'string', 'boolean', 'bigint']),
    De = new Set(['Dict']);
function Oe(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var o, s;
    const i = e,
        a = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (Ne.has(a)) return i;
    if (null === i) return i;
    const u = { depth: n + 1, maxDepth: r };
    if (Array.isArray(i)) return i.map((e) => Oe(e, u));
    if ('object' === a) {
        const r = (null == (o = i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => Oe(e, u));
        if ('CoherentArrayProxy' === r) return e.map((e) => Oe(e.value, u));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in i) {
                    const n = i[t];
                    Te.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in i) {
                    const n = i[t],
                        r = (null == (s = null == i ? void 0 : i.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                    De.has(r) || (e[t] = Oe(n, u));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(i)) a[e] = Oe(i[e], u);
        return a;
    }
    return (console.error('Incorrect value to clone model', i), i);
}
const Pe = { deep: !1, equals: K },
    je = { cloneItem: !0 },
    Le = { shallow: !1 };
class Be {
    constructor(e, n = je) {
        (t(this, '_data'),
            t(this, '_keys'),
            t(
                this,
                'set',
                l((e) => {
                    this._data.set(e);
                }),
            ),
            (this.options = n));
        const r = {},
            o = e.keys();
        for (let t = 0; t < o.length; t++) {
            const n = o[t];
            r[n] = c.box(this.takeItem(e, n), Pe);
        }
        ((this._keys = c.set(new Set(o))), (this._data = c.box(r, Pe)));
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
                : null !== s && ((n[o] = c.box(s, Pe)), this._keys.add(o), this.set(n));
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
        return this.options.cloneItem ? Oe(n, Le) : n;
    }
    untrackedData() {
        return d(() => this._data.get());
    }
}
const Me = i.createContext({ mode: 'real' }),
    $e = { equals: K, deep: !1 };
function Ae(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        l(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const o = (o, s, i = $e) => {
            const a = c.box(o(n(s)), i);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(o(e))), s), a);
        },
        s = (o, s) => {
            const i = new Be(n(o), s);
            return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), o), i);
        },
        i = (o, s) => {
            const i = c.box(n(o) ?? s, $e);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), o), i);
        };
    return {
        dict: s,
        dictRef: (e, t) => s(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => o(Oe, e),
        array: i,
        object: i,
        transform: o,
        primitives: (o, s) => {
            const i = n(s);
            if (Array.isArray(o)) {
                const n = o.reduce((e, t) => ((e[t] = c.box(i[t], {})), e), {});
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
                    u = a.reduce((e, [t, n]) => ((e[n] = c.box(i[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                a.forEach(([t, n]) => {
                                    u[n].set(e[t]);
                                }),
                            );
                        }, s),
                    u
                );
            }
        },
    };
}
const Fe =
    (e = 'DataLayerProvider') =>
    (t, n, r) => {
        const o = i.createContext(null);
        function s(s) {
            var u;
            const { mode: c, options: l, children: d, mocks: h } = s,
                f = i.useContext(Me),
                m = c ?? f.mode,
                w = h ?? f.mocks,
                g = i.useRef([]),
                p = null == (u = null == r ? void 0 : r.useRequires) ? void 0 : u.call(r),
                b = ge((o, i, a) => {
                    var u;
                    const c =
                            'real' !== o && a
                                ? (function (e, t) {
                                      return {
                                          subscribe: () => 0,
                                          readSafeByPath: e,
                                          readByPath: e,
                                          createCallback: (n, r) => {
                                              const o = e(q(r, t));
                                              return (...e) => {
                                                  o(n(...e));
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
                                          events: { subscribersNotified: new H() },
                                      };
                                  })(a.getter, i)
                                : W(i, { name: e }),
                        l = (e) => ('mocks' === o ? (null == a ? void 0 : a.getter(e, i)) : c.readByPath(e)),
                        d = (e) => g.current.push(e),
                        h = 'initial' in s && {
                            initial: null == (u = null == r ? void 0 : r.initial) ? void 0 : u.call(r, s.initial),
                        },
                        f = t({
                            ...h,
                            mode: o,
                            readByPath: l,
                            requires: p,
                            externalModel: c,
                            observableModel: Ae(c, o, l),
                            cleanup: d,
                        }),
                        m = { ...h, mode: o, model: f, externalModel: c, cleanup: d, requires: p },
                        w = 'mocks' === o && (null == a ? void 0 : a.controls) ? a.controls(m) : {};
                    return {
                        model: f,
                        controls: { ...(null == n ? void 0 : n(m)), ...w },
                        externalModel: c,
                        mode: o,
                        rootId: (null == i ? void 0 : i.rootId) ?? 0,
                    };
                }),
                y = i.useRef(!1),
                [v, _] = i.useState(m);
            i.useEffect(() => {
                _(m);
            }, [m]);
            const [x, E] = i.useState(() => b(v, l, w));
            return (
                i.useEffect(() => {
                    y.current ? E(b(v, l, w)) : (y.current = !0);
                }, [
                    b,
                    w,
                    v,
                    null == l ? void 0 : l.context,
                    null == l ? void 0 : l.initializer,
                    null == l ? void 0 : l.getRoot,
                    null == l ? void 0 : l.rootId,
                ]),
                i.useEffect(
                    () => () => {
                        (x.externalModel.dispose(), g.current.forEach((e) => e()));
                    },
                    [x],
                ),
                a.jsx(o.Provider, { value: x, children: d })
            );
        }
        return (
            (s.displayName = e),
            [
                s,
                function () {
                    const e = i.useContext(o);
                    if (!e) throw new Error(`hook useModel must be used within a ${s.displayName}.`);
                    return e;
                },
                { Context: o },
            ]
        );
    };
async function ze(
    e,
    { root: t = document.getElementById('root'), withMedia: n = !0, fullScreen: r = !1, immediateLayout: o = !0 } = {},
) {
    var s;
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
    const i = n ? me : h.Fragment,
        u = (null == (s = null == window ? void 0 : window.engine) ? void 0 : s.whenReady) ?? Promise.resolve();
    (o && engine.enableImmediateLayout(!0),
        await u,
        document.documentElement.setAttribute('lang', w.resolve('langCode')),
        f.createRoot(t).render(a.jsx(i, { children: a.jsx(ve, { children: e }) })),
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
function Ue(e) {
    return a.jsx(a.Fragment, { children: e.children });
}
function He(e) {
    return a.jsx(Ue, {
        children: a.jsx(Ce, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
i.forwardRef(function (e, t) {
    const n = i.useRef(null);
    return (
        i.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return F.onHitTest((t) => {
                    const n = e.getBoundingClientRect();
                    return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                });
        }, []),
        a.jsx('div', {
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
const Ie = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    We = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
function qe(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
const Ke = (function (e, t, n) {
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
                r = m(n.className, n.cva),
                o = n.element,
                a = i.forwardRef(function (e, t) {
                    return i.createElement(o, { ...('function' == typeof o ? e : qe(s, e)), ref: t, className: r(e) });
                });
            return ((a.displayName = e), n.cva && (a.cva = n.cva), a);
        }
        const u = m(t, n),
            c = i.forwardRef(function (t, n) {
                return a.jsx('div', { 'data-name': e, ...qe(s, t), ref: n, className: u(t) });
            });
        return ((c.displayName = e), c);
    })('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    Xe = i.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: o = !1, silent: s = !1, ...u },
        c,
    ) {
        const l = (function () {
            const e = i.useContext(Se);
            if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
            return e;
        })();
        return a.jsx(Ke, {
            ...u,
            ref: c,
            onMouseEnter: function (e) {
                (o || s || l.play('mouse-enter', { target: r || 'Button', original: e }), null == n || n(e));
            },
            onClick: function (e) {
                o || (s || l.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    Ge = {
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
    Ve = i.forwardRef(function (
        {
            children: e,
            size: t = We.large,
            theme: n = Ie.primary,
            disabled: r = !1,
            silent: o = !1,
            autoAlignContent: s = !0,
            classNames: i,
            className: c,
            ...l
        },
        d,
    ) {
        return a.jsxs(Xe, {
            ...l,
            ref: d,
            silent: o,
            disabled: r,
            className: u(
                Ge.base,
                Ge[`base__size-${t}`],
                Ge[`base__theme-${n}`],
                r ? Ge.base__disabled : Ge.base__enabled,
                c,
                null == i ? void 0 : i.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = l.onClick) || t.call(l, e);
            },
            children: [
                a.jsx('div', { className: u(Ge.background, null == i ? void 0 : i.background) }),
                a.jsx('div', { className: u(Ge.border, null == i ? void 0 : i.border) }),
                a.jsx('div', { className: u(Ge.overlay, null == i ? void 0 : i.overlay) }),
                a.jsx('div', {
                    className: u(Ge.content, s && Ge.content__fontAligned, null == i ? void 0 : i.content),
                    children: e,
                }),
            ],
        });
    });
((Ve.themes = Ie), (Ve.sizes = We));
const Ye = {
        base: 'CloseButton_7488a1b8',
        base__medium: 'CloseButton_base__medium_97d04067',
        base__small: 'CloseButton_base__small_c1b29bae',
        base__extraSmall: 'CloseButton_base__extraSmall_f52764c1',
        base__x96x96: 'CloseButton_base__x96x96_8157b84d',
        base__x32x32: 'CloseButton_base__x32x32_6466ea31',
    },
    Je = { medium: 'medium', small: 'small', extraSmall: 'extraSmall' },
    Qe = { [Je.medium]: 'x96x96', [Je.small]: Je.medium, [Je.extraSmall]: 'x32x32' };
function Ze({
    size: e = Je.medium,
    hoverSound: t = M.highlight,
    clickSound: n = M.click,
    className: r,
    onHover: o,
    onClose: s,
}) {
    const i = ((c = Ye[`base__${e}`]), (l = Ye[`base__${Qe[e]}`]), he().upscale ? l : c);
    var c, l;
    return a.jsx('div', {
        className: u(Ye.base, i, r),
        onMouseEnter: () => {
            ($.sound(t), null == o || o());
        },
        onClick: () => {
            ($.sound(n), s());
        },
    });
}
Ze.size = Je;
const et = () => {};
function tt(e) {
    const t = e;
    return i.forwardRef(function (e, n) {
        const r = (function (e, t) {
                return (function (e, t, n) {
                    return n ? e.breaks.reduce((e, t) => (n[t] ? { ...e, ...n[t] } : e), t) : t;
                })(he(), e, t);
            })(e, e.adaptive),
            { path: o, ...s } = r,
            i = r.images ?? w.resolve('images'),
            u = { ...s, ref: n };
        {
            const e = o ? i.readOr(o, et, 'warn') : void 0;
            return e ? a.jsx(t, { ...u, src: e }) : a.jsx(t, { ...u, unknown: !0 });
        }
    });
}
const nt = {
    background:
        'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
    backgroundSize: '20rem 20rem',
    backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
    backgroundColor: '#000',
};
i.forwardRef(function (e, t) {
    if (!e.src) {
        const {
            repeat: n,
            fit: r,
            position: o,
            width: s,
            src: i,
            height: u,
            unselectable: c,
            unknownStyle: l = nt,
            ...d
        } = e;
        return a.jsx('div', { ...d, ref: t, style: { width: e.width, height: e.height, ...l, ...e.style } });
    }
    const { repeat: n, fit: r, position: o, width: s, height: i, unknownStyle: u, unselectable: c, ...l } = e;
    return a.jsx('div', {
        ...l,
        ref: t,
        style: {
            backgroundImage: `url(${e.src})`,
            backgroundRepeat: n ?? 'no-repeat',
            backgroundSize: r ?? 'contain',
            backgroundPosition: o ?? 'center center',
            width: 'number' == typeof s ? `${s}rem` : s,
            height: 'number' == typeof i ? `${i}rem` : i,
            ...l.style,
        },
    });
});
const rt = tt(
    i.forwardRef(function (e, t) {
        if (e.unknown) {
            const {
                repeat: n,
                fit: r,
                position: o,
                width: s,
                src: i,
                height: u,
                unselectable: c,
                unknown: l,
                unknownStyle: d = nt,
                ...h
            } = e;
            return a.jsx('div', { ...h, ref: t, style: { width: e.width, height: e.height, ...d, ...e.style } });
        }
        const {
            repeat: n,
            fit: r,
            position: o,
            width: s,
            height: i,
            unknownStyle: u,
            unknown: c,
            unselectable: l,
            ...d
        } = e;
        return a.jsx('div', {
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
tt(
    i.forwardRef(function (e, t) {
        const { width: n, height: r, src: o, unselectable: s, unknown: i, unknownStyle: u = nt, ...c } = e;
        return e.unknown
            ? a.jsx('div', { ...c, style: { width: e.width, height: e.height, ...u } })
            : a.jsx('img', { ...c, ref: t, src: o, width: n, height: r });
    }),
);
export { Ve as B, Ze as C, rt as I, He as U, xe as a, ze as b, Fe as i, G as k, w as r, Ee as u };
