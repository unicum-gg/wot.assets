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
    r as a,
    j as u,
    e as c,
    o as l,
    f as d,
    u as h,
    g as f,
    h as m,
    R as p,
    i as g,
    k as w,
} from './vendor.js';
const y = r();
function v(e, t) {
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
class E {
    constructor(e = window.R.images, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.images') ? e : v(this.prefix, e),
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
const A = { integral: 0, gold: 1 },
    x = { fractional: 0, woZeroDigits: 1 },
    D = Object.keys(A),
    N = Object.keys(x);
const T = { full: _.FullTime, short: _.ShortTime };
const P = {
    isNumberFormat: function (e) {
        return e in A;
    },
    formatNumber: function (e, t) {
        return window.systemLocale.getNumberFormat(t, A[e]);
    },
    numberFormats: D,
    isRealFormat: function (e) {
        return e in x;
    },
    formatReal: function (e, t) {
        return window.systemLocale.getRealFormat(t, x[e]);
    },
    realFormats: N,
    formatDateTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    dateTimeFormats: _,
    formatTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    timeFormats: Object.keys(T),
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
function F(e, t, n) {
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
class S {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : v(this.prefix, e),
            o = F(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== n && b(`Resource not found: ${r}`, n), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : v(this.prefix, e),
            n = F(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const o = e.startsWith('R.strings') ? e : v(this.prefix, e),
            s = F(o, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== r && b(`Resource not found: ${o}`, r), n()) : s;
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
        const r = e.startsWith('R.videos') ? e : v(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && b(`Resource not found: ${e}`, n), t()) : o;
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
function C(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function M(e) {
    viewEnv.setTrackMouseOnStage(e);
}
y.register({
    strings: i(() => new S()).singleton(),
    images: i(() => new E(window.R.images.gui.maps.icons)).singleton(),
    atlases: i(() => new E(window.R.atlases)).singleton(),
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
    intl: o(P),
});
const k = C('clientResized'),
    L = C('self.onScaleUpdated'),
    U = { down: C('mousedown'), up: C('mouseup'), move: C('mousemove') };
function j(e) {
    engine.call('PlaySound', e);
}
!(function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && M(!1);
    }
    function n() {
        e.enabled && M(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  M(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : M(!1);
    }
    ['down', 'up', 'move'].reduce(
        (t, n) => (
            (t[n] = (function (t) {
                return (n) => {
                    e.listeners += 1;
                    const o = `mouse${t}`,
                        s = U[t]((e) => n([e, 'outside']));
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
    $ = { ...Object.keys(I).reduce((e, t) => ((e[t] = () => j(I[t])), e), {}), sound: j },
    K = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    B = {
        onTextureFrozen: C('self.onTextureFrozen'),
        onTextureReady: C('self.onTextureReady'),
        onDomBuilt: C('self.onDomBuilt'),
        onLoaded: C('self.onLoaded'),
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
        onDisplayChanged: C('self.onShowingStatusChanged'),
        onFocusUpdated: C('self.onFocusChanged'),
        children: {
            onAdded: C('children.onAdded'),
            onLoaded: C('children.onLoaded'),
            onRemoved: C('children.onRemoved'),
            onAttached: C('children.onAttached'),
            onTextureReady: C('children.onTextureReady'),
            onRequestPosition: C('children.requestPosition'),
        },
    };
Object.keys(K).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === K[t]), e), {});
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
const z = (e) => (0 === e ? window : window.subViews.get(e));
function H(
    { initializer: e = !0, rootId: t = 0, getRoot: n = z, context: r = 'model' } = {},
    { name: o = 'DataLayer' } = {},
) {
    const s = new Map(),
        i = { subscribersNotified: new W() },
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
function Y(e, t) {
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
function G() {}
function q() {
    return !1;
}
function V(e, t) {
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
const Z = {
    NONE: 'NONE',
    ...((X = [
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
    X.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...V(
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
    ...V(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...V(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...V(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...V(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...V(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...V(['Up', 'Down'], 'Page'),
    ...V(['Left', 'Right'], 'Bracket'),
};
var X;
function Q(e) {
    return 'number' == typeof e
        ? (function (e) {
              return window.systemInput.getKeyName(e);
          })(e)
        : e;
}
['ko', 'no'].includes(y.resolve('langCode'));
class J {
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
};
function ne(e) {
    return e.split(' ');
}
const re = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko']);
const oe = a.createContext(void 0);
const se = 'extraSmall',
    ie = {
        extraSmall: { weight: 0, name: se, className: 'mediaExtraSmall', width: 1280, height: 768 },
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
        o = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...o])).join(' ');
}
const pe = () => {
        return ((e = 1), viewEnv.remToPx(e));
        var e;
    },
    ge = () => {
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
                o = r.width.weight <= r.height.weight ? 'width' : 'height',
                s = r[o],
                i = s.names[s.names.length - 1] ?? se,
                a = ie[i],
                u = r.width.names,
                c = r.height.names,
                l = u[u.length - 1] ?? se,
                d = c[c.length - 1] ?? se,
                h = { width: ie[l].width, height: ie[d].height };
            return {
                mediaClass: me(o, r),
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
        })(e.width, e.height, pe());
    };
function we({ children: e }) {
    const [t, n] = a.useState(ge);
    return (
        a.useLayoutEffect(() => {
            function e() {
                n(ge);
            }
            e();
            const t = k(e),
                r = L(e);
            return () => {
                (t(), r());
            };
        }, []),
        u.jsx(oe.Provider, { value: t, children: e })
    );
}
function ye() {
    return (function () {
        const e = a.useContext(oe);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function ve({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: o } = ye();
    return u.jsx('div', { className: c(t, 'media-wrapper', r, o && 'media-upscale'), ...n, children: e });
}
function be({ children: e, ...t }) {
    return u.jsx(we, { children: u.jsx(ve, { ...t, children: e }) });
}
const Ee = [];
function _e(e) {
    const t = a.useRef(e);
    return (
        a.useLayoutEffect(() => {
            t.current = e;
        }),
        a.useCallback((...e) => (0, t.current)(...e), Ee)
    );
}
const Ae = () => {
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
                if (e === Z.NONE) return q;
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
    xe = a.createContext(void 0);
function Re(e, t, n, r = !1) {
    const o = Q(e),
        s = _e((e) => {
            viewEnv.isEventHandled() || (n(e), viewEnv.setEventHandled(), r && e.stopPropagation());
        }),
        i = (function () {
            const e = a.useContext(xe);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        u = a.useMemo(() => i[t].register(o, s), [i, t, o, s]);
    a.useEffect(() => u, [u]);
}
function De(e) {
    const t = a.useMemo(Ae, []),
        n = a.useMemo(Ae, []);
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
    return u.jsx(xe.Provider, { value: r, children: e.children });
}
const Ne = {
    click: Te('play'),
    'hot-key': Te('play'),
    'mouse-enter': Te('highlight'),
    increaseAmount: Te('cons_ammo_single_plus'),
    decreaseAmount: Te('cons_ammo_single_minus'),
    increaseAmountRoll: Te('cons_ammo_roll_plus'),
    decreaseAmountRoll: Te('cons_ammo_roll_minus'),
    close: Te('cancelcloseno'),
    'show-context-menu': Te('tabb'),
    progressSimple: Te('gui_hangar_progressbar_simple'),
    increaseDelta: Te('gui_hangar_progressbar_delta_increase'),
    decreaseDelta: Te('gui_hangar_progressbar_delta_decrease'),
    increaseDeltaMax: Te('gui_hangar_progressbar_delta_max'),
    pointerGrab: Te('gui_hangar_progressbar_pointer_grab'),
    pointerDrag: Te('gui_hangar_progressbar_pointer_drag'),
};
function Te(e) {
    return () => {
        $.sound(e);
    };
}
const Pe = a.createContext(null);
function Fe({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const o = a.useMemo(() => ({ ...Ne, ...t }), [t]),
        s = a.useMemo(
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
    return u.jsx(Pe.Provider, { value: s, children: r });
}
const Se = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    Oe = new Set(['number', 'string', 'boolean', 'bigint']),
    Ce = new Set(['Dict']);
function Me(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var o, s;
    const i = e,
        a = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (Se.has(a)) return i;
    if (null === i) return i;
    const u = { depth: n + 1, maxDepth: r };
    if (Array.isArray(i)) return i.map((e) => Me(e, u));
    if ('object' === a) {
        const r = (null == (o = i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => Me(e, u));
        if ('CoherentArrayProxy' === r) return e.map((e) => Me(e.value, u));
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
                    Ce.has(r) || (e[t] = Me(n, u));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(i)) a[e] = Me(i[e], u);
        return a;
    }
    return (console.error('Incorrect value to clone model', i), i);
}
const ke = { deep: !1, equals: q },
    Le = { cloneItem: !0 },
    Ue = { shallow: !1 };
class je {
    constructor(e, t = Le) {
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
            o = e.keys();
        for (let n = 0; n < o.length; n++) {
            const t = o[n];
            r[t] = l.box(this.takeItem(e, t), ke);
        }
        ((this._keys = l.set(new Set(o))), (this._data = l.box(r, ke)));
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
                : null !== s && ((n[o] = l.box(s, ke)), this._keys.add(o), this.set(n));
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
        return this.options.cloneItem ? Me(n, Ue) : n;
    }
    untrackedData() {
        return h(() => this._data.get());
    }
}
const Ie = a.createContext({ mode: 'real' }),
    $e = { equals: q, deep: !1 };
function Ke(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        d(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const o = (o, s, i = $e) => {
            const a = l.box(o(n(s)), i);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(o(e))), s), a);
        },
        s = (o, s) => {
            const i = new je(n(o), s);
            return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), o), i);
        },
        i = (o, s) => {
            const i = l.box(n(o) ?? s, $e);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), o), i);
        };
    return {
        dict: s,
        dictRef: (e, t) => s(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => o(Me, e),
        array: i,
        object: i,
        transform: o,
        primitives: (o, s) => {
            const i = n(s);
            if (Array.isArray(o)) {
                const n = o.reduce((e, t) => ((e[t] = l.box(i[t], {})), e), {});
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
                    u = a.reduce((e, [t, n]) => ((e[n] = l.box(i[t], {})), e), {});
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
const Be =
        (e = 'DataLayerProvider') =>
        (t, n, r) => {
            const o = a.createContext(null);
            function s(s) {
                var i;
                const { mode: c, options: l, children: d, mocks: h } = s,
                    f = a.useContext(Ie),
                    m = c ?? f.mode,
                    p = h ?? f.mocks,
                    g = a.useRef([]),
                    w = null == (i = null == r ? void 0 : r.useRequires) ? void 0 : i.call(r),
                    y = _e((o, i, a) => {
                        var u;
                        const c =
                                'real' !== o && a
                                    ? (function (e, t) {
                                          return {
                                              subscribe: () => 0,
                                              readSafeByPath: e,
                                              readByPath: e,
                                              createCallback: (n, r) => {
                                                  const o = e(Y(r, t));
                                                  return (...e) => {
                                                      o(n(...e));
                                                  };
                                              },
                                              createCallbackNoArgs: (n) => {
                                                  const r = e(Y(n, t));
                                                  return () => {
                                                      r();
                                                  };
                                              },
                                              dispose: () => {},
                                              unsubscribe: () => {},
                                              events: { subscribersNotified: new W() },
                                          };
                                      })(a.getter, i)
                                    : H(i, { name: e }),
                            l = (e) => ('mocks' === o ? (null == a ? void 0 : a.getter(e, i)) : c.readByPath(e)),
                            d = (e) => g.current.push(e),
                            h = 'initial' in s && {
                                initial: null == (u = null == r ? void 0 : r.initial) ? void 0 : u.call(r, s.initial),
                            },
                            f = t({
                                ...h,
                                mode: o,
                                readByPath: l,
                                requires: w,
                                externalModel: c,
                                observableModel: Ke(c, o, l),
                                cleanup: d,
                            }),
                            m = { ...h, mode: o, model: f, externalModel: c, cleanup: d, requires: w },
                            p = 'mocks' === o && (null == a ? void 0 : a.controls) ? a.controls(m) : {};
                        return {
                            model: f,
                            controls: { ...(null == n ? void 0 : n(m)), ...p },
                            externalModel: c,
                            mode: o,
                        };
                    }),
                    v = a.useRef(!1),
                    [b, E] = a.useState(m);
                a.useEffect(() => {
                    E(m);
                }, [m]);
                const [_, A] = a.useState(() => y(b, l, p));
                return (
                    a.useEffect(() => {
                        v.current ? A(y(b, l, p)) : (v.current = !0);
                    }, [
                        y,
                        p,
                        b,
                        null == l ? void 0 : l.context,
                        null == l ? void 0 : l.initializer,
                        null == l ? void 0 : l.getRoot,
                        null == l ? void 0 : l.rootId,
                    ]),
                    a.useEffect(
                        () => () => {
                            (_.externalModel.dispose(), g.current.forEach((e) => e()));
                        },
                        [_],
                    ),
                    u.jsx(o.Provider, { value: _, children: d })
                );
            }
            return (
                (s.displayName = e),
                [
                    s,
                    function () {
                        const e = a.useContext(o);
                        if (!e) throw new Error(`hook useModel must be used within a ${s.displayName}.`);
                        return e;
                    },
                    { Context: o },
                ]
            );
        },
    We = {
        model: (e, t) => f(e, { equals: q, ...t }),
        primitive: f,
        shallow: (e, t) => f(e, { equals: m.shallow, ...t }),
        structural: (e, t) => f(e, { equals: m.structural, ...t }),
    };
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
class ze {
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
async function He(
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
    const i = n ? be : p.Fragment,
        a = (null == (s = null == window ? void 0 : window.engine) ? void 0 : s.whenReady) ?? Promise.resolve();
    (o && engine.enableImmediateLayout(!0),
        await a,
        document.documentElement.setAttribute('lang', y.resolve('langCode')),
        g.createRoot(t).render(u.jsx(i, { children: u.jsx(De, { children: e }) })),
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
function Ye(e) {
    return u.jsx(u.Fragment, { children: e.children });
}
function Ge(e) {
    return u.jsx(Ye, {
        children: u.jsx(Fe, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
const qe = 1,
    Ve = 2,
    Ze = 3;
const Xe = {
        COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
        base: 'FormatText_db904f12',
        base__fullSize: 'FormatText_base__fullSize_a514958e',
        nowrap: 'FormatText_nowrap_ff69eca3',
    },
    Qe = new Set((null == (e = Xe.COLORS) ? void 0 : e.split(', ')) ?? []);
let Je = 0;
function et() {
    return ++Je;
}
const tt =
    /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
function nt(e) {
    const t = y.resolve('langCode');
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
function rt(e) {
    return Array.isArray(e)
        ? (function (e) {
              const t = [];
              for (let n = 0; n < e.length; n++) {
                  const r = e[n],
                      o = e[n + 1];
                  if ('string' != typeof o || !tt.test(o)) {
                      t.push(rt(r));
                      continue;
                  }
                  const s = nt(o.slice(1));
                  (t.push(
                      u.jsxs(
                          a.Fragment,
                          { children: [u.jsxs('span', { className: Xe.nowrap, children: [rt(r), o[0]] }), s] },
                          et(),
                      ),
                  ),
                      (n += 1));
              }
              return t;
          })(e)
        : 'string' == typeof e
          ? u.jsx(a.Fragment, { children: nt(e) }, et())
          : e;
}
const ot = {
    class: function (e, ...t) {
        return u.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            et(),
        );
    },
    colorLegacy: function (e, t) {
        const n = et();
        return Qe.has(String(t))
            ? u.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : u.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: rt,
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
            et(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function st(e, t, n, r) {
    const o = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...o] = n.slice(1, -1).split(' ');
                return t ? st(e, t, o, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        s = r[t];
    return s ? s(e, ...o) : (console.error(`Function ${t} is not registered`), e);
}
function it(e, t, n) {
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
        return r ? st(e, r, o, n) : e;
    }, t);
}
function at(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function ut(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !at(e[r]); ) r++;
            const o = e.slice(n + 1, r),
                s = t[o];
            if (s) return ut(e.replace(`$${o}`, String(s)), t);
        }
    }
    return e;
}
function ct(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = ut(e[r], t);
    return n;
}
const lt = ['number', 'string', 'undefined'];
function dt(e, t, n = {}, r = !0) {
    r && (Je = 0);
    const o = [];
    function s(e) {
        if (lt.includes(typeof e)) {
            const t = o.at(-1);
            if ('string' == typeof t) return void (o[o.length - 1] = t + e);
        }
        o.push(e);
    }
    for (const i of e)
        if (i.type === qe) s(i.value);
        else if (i.type === Ze)
            null === n[i.name] || lt.includes(typeof n[i.name])
                ? s(n[i.name] ?? `{{${i.name}}}`)
                : o.push(u.jsx(a.Fragment, { children: n[i.name] }, `var-${i.name}-${i.instanceId}`));
        else if (i.type === Ve) {
            const e = dt(i.children, t, n, !1),
                r = it(ct(i.attrs, n), e, t);
            o.push(r);
        }
    return o;
}
function ht(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function ft(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function mt(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const pt = { start: '{{', end: '}}' },
    gt = a.memo(function (e) {
        const {
                brackets: t = pt,
                text: n,
                params: r,
                upgradeLegacy: o,
                fullSize: s,
                inline: i,
                formatters: l,
                split: d,
                ...h
            } = e,
            f = a.useMemo(
                () =>
                    e.upgradeLegacy
                        ? (function (e) {
                              return (function (e, t, n, r, o, s, i, a, u) {
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
                                          return u(a(i(s(o(r(n(t(e))))))));
                                      default: {
                                          let e = arguments[0];
                                          for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
                                          return e;
                                      }
                                  }
                              })(e, mt, ht, ft);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            m = a.useMemo(() => (e.formatters ? { ...ot, ...e.formatters } : ot), [e.formatters]),
            p = a.useMemo(
                () =>
                    (function (e, t) {
                        const n = [],
                            r = [];
                        let o = '',
                            s = !1,
                            i = '',
                            a = 0;
                        for (let u = 0; u < e.length; u++) {
                            const c = e[u];
                            if (c === t.start[0] && e.slice(u, u + t.start.length) === t.start)
                                (o &&
                                    (r.length > 0
                                        ? r[r.length - 1].node.children.push({ type: qe, value: o })
                                        : n.push({ type: qe, value: o }),
                                    (o = '')),
                                    (s = !0),
                                    (u += t.start.length - 1));
                            else if (c === t.end[0] && e.slice(u, u + t.end.length) === t.end) {
                                ((s = !1), (u += t.end.length - 1));
                                const e = i.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        o = { type: Ve, attrs: t.split('|'), instanceId: ++a, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(o) : n.push(o),
                                        r.push({ node: o, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: Ze, instanceId: ++a, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                i = '';
                            } else s ? (i += c) : (o += c);
                        }
                        o &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: qe, value: o })
                                : n.push({ type: qe, value: o }));
                        return n;
                    })(d ? `{{@ split}}${f}{{/}}` : f, t),
                [t, f, d],
            ),
            g = a.useMemo(() => dt(p, m, e.params), [p, m, e.params]),
            w = c(Xe.base, s && Xe.base__fullSize, h.className);
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
    });
function wt(e, t, n) {
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
            r = w(n.className, n.cva),
            o = n.element,
            i = a.forwardRef(function (e, t) {
                return a.createElement(o, { ...('function' == typeof o ? e : yt(s, e)), ref: t, className: r(e) });
            });
        return ((i.displayName = e), n.cva && (i.cva = n.cva), i);
    }
    const i = w(t, n),
        c = a.forwardRef(function (t, n) {
            return u.jsx('div', { 'data-name': e, ...yt(s, t), ref: n, className: i(t) });
        });
    return ((c.displayName = e), c);
}
function yt(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
const vt = 'Tooltip_decorator_b3486d4e',
    bt = wt('Base', 'Tooltip_6d997cee'),
    Et = wt('Decorator', vt),
    _t = a.forwardRef(function ({ children: e, ...t }, n) {
        const r = a.useRef(null);
        return (
            ((e, t, n = !0) => {
                const r = _e((e) => {
                    const n = e[0];
                    n && t(n);
                });
                a.useEffect(() => {
                    if (!e.current || !n) return;
                    const t = new ResizeObserver((e) => r(e));
                    return (
                        t.observe(e.current),
                        () => {
                            t.disconnect();
                        }
                    );
                }, [r, n, e]);
            })(r, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                !(function (e, t, n = 'px') {
                    'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                })(t.scrollWidth, t.scrollHeight);
                const n = window.getComputedStyle(t);
                var r;
                ((r = {
                    top: parseInt(n.getPropertyValue('padding-top'), 10),
                    left: parseInt(n.getPropertyValue('padding-left'), 10),
                    right: parseInt(n.getPropertyValue('padding-right'), 10),
                    bottom: parseInt(n.getPropertyValue('padding-bottom'), 10),
                }),
                    viewEnv.setHitAreaPaddingsRem(r.top, r.right, r.bottom, r.left, 15));
            }),
            u.jsx(bt, {
                ...t,
                ref: function (e) {
                    ((r.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                children: e,
            })
        );
    });
_t.Decorator = Et;
const At = y.resolve('strings'),
    xt = y.resolve('intl'),
    Rt = (e) => xt.toUpperCase(At.readOr(`readable_key_names.KEY_${e}`, () => Dt)),
    Dt = xt.toUpperCase(At.readOrEmpty('readable_key_names.KEY_NONE_ALT')),
    Nt = {
        [Z.NONE]: Rt('NONE_ALT'),
        [Z.ESCAPE]: Rt('ESCAPE'),
        [Z.ENTER]: Rt('ENTER'),
        [Z.SPACE]: Rt('SPACE'),
        [Z.DELETE]: Rt('DELETE'),
        [Z.BACKSPACE]: Rt('BACKSPACE'),
        [Z.TAB]: Rt('TAB'),
        [Z.HOME]: Rt('HOME'),
        [Z.END]: Rt('END'),
        [Z.MINUS]: Rt('MINUS'),
        [Z.SLASH]: Rt('SLASH'),
        [Z.BACKSLASH]: Rt('BACKSLASH'),
        [Z.PERIOD]: Rt('PERIOD'),
        [Z.COMMA]: Rt('COMMA'),
        [Z.QUOTE]: Rt('APOSTROPHE'),
        [Z.SEMICOLON]: Rt('SEMICOLON'),
        [Z.INSERT]: Rt('INSERT'),
        [Z.KEY_A]: Rt('A'),
        [Z.KEY_B]: Rt('B'),
        [Z.KEY_C]: Rt('C'),
        [Z.KEY_D]: Rt('D'),
        [Z.KEY_E]: Rt('E'),
        [Z.KEY_F]: Rt('F'),
        [Z.KEY_G]: Rt('G'),
        [Z.KEY_H]: Rt('H'),
        [Z.KEY_I]: Rt('I'),
        [Z.KEY_J]: Rt('J'),
        [Z.KEY_K]: Rt('K'),
        [Z.KEY_L]: Rt('L'),
        [Z.KEY_M]: Rt('M'),
        [Z.KEY_N]: Rt('N'),
        [Z.KEY_O]: Rt('O'),
        [Z.KEY_P]: Rt('P'),
        [Z.KEY_Q]: Rt('Q'),
        [Z.KEY_R]: Rt('R'),
        [Z.KEY_S]: Rt('S'),
        [Z.KEY_T]: Rt('T'),
        [Z.KEY_U]: Rt('U'),
        [Z.KEY_V]: Rt('V'),
        [Z.KEY_W]: Rt('W'),
        [Z.KEY_X]: Rt('X'),
        [Z.KEY_Y]: Rt('Y'),
        [Z.KEY_Z]: Rt('Z'),
        [Z.DIGIT_0]: Rt('0'),
        [Z.DIGIT_1]: Rt('1'),
        [Z.DIGIT_2]: Rt('2'),
        [Z.DIGIT_3]: Rt('3'),
        [Z.DIGIT_4]: Rt('4'),
        [Z.DIGIT_5]: Rt('5'),
        [Z.DIGIT_6]: Rt('6'),
        [Z.DIGIT_7]: Rt('7'),
        [Z.DIGIT_8]: Rt('8'),
        [Z.DIGIT_9]: Rt('9'),
        [Z.NUMPAD_0]: Rt('NUMPAD0'),
        [Z.NUMPAD_1]: Rt('NUMPAD1'),
        [Z.NUMPAD_2]: Rt('NUMPAD2'),
        [Z.NUMPAD_3]: Rt('NUMPAD3'),
        [Z.NUMPAD_4]: Rt('NUMPAD4'),
        [Z.NUMPAD_5]: Rt('NUMPAD5'),
        [Z.NUMPAD_6]: Rt('NUMPAD6'),
        [Z.NUMPAD_7]: Rt('NUMPAD7'),
        [Z.NUMPAD_8]: Rt('NUMPAD8'),
        [Z.NUMPAD_9]: Rt('NUMPAD9'),
        [Z.F_1]: Rt('F1'),
        [Z.F_2]: Rt('F2'),
        [Z.F_3]: Rt('F3'),
        [Z.F_4]: Rt('F4'),
        [Z.F_5]: Rt('F5'),
        [Z.F_6]: Rt('F6'),
        [Z.F_7]: Rt('F7'),
        [Z.F_8]: Rt('F8'),
        [Z.F_9]: Rt('F9'),
        [Z.F_10]: Rt('F10'),
        [Z.F_11]: Rt('F11'),
        [Z.F_12]: Rt('F12'),
        [Z.NUMPAD_MULTIPLY]: Rt('NUMPADSTAR'),
        [Z.NUMPAD_DIVIDE]: Rt('NUMPADSLASH'),
        [Z.NUMPAD_ADD]: Rt('ADD'),
        [Z.NUMPAD_SUBTRACT]: Rt('NUMPADMINUS'),
        [Z.NUMPAD_DECIMAL]: Rt('NUMPADPERIOD'),
        [Z.ARROW_LEFT]: Rt('LEFTARROW'),
        [Z.ARROW_RIGHT]: Rt('RIGHTARROW'),
        [Z.ARROW_UP]: Rt('UPARROW'),
        [Z.ARROW_DOWN]: Rt('DOWNARROW'),
        [Z.PAGE_UP]: Rt('PGUP'),
        [Z.PAGE_DOWN]: Rt('PGDN'),
        [Z.BRACKET_LEFT]: Rt('LBRACKET'),
        [Z.BRACKET_RIGHT]: Rt('RBRACKET'),
    },
    Tt = a.createContext(void 0);
function Pt() {
    const e = a.useContext(Tt);
    if (!e) throw new Error('useKeyButtonContext must be used within KeyButtonContext');
    return e;
}
const Ft = 'KeyButton_background_8a852f95',
    St = 'KeyButton_border_b1c50f01',
    Ot = 'KeyButton_8fd343f8',
    Ct = 'KeyButton_content_a724f532',
    Mt = wt('KeyButton', Ot);
function kt({ children: e, onClick: t, onMouseEnter: n, ...r }) {
    const o = (function () {
            const e = a.useContext(Pe);
            if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
            return e;
        })(),
        { soundTarget: s, silent: i } = Pt();
    return u.jsx(Mt, {
        ...r,
        onMouseEnter: function (e) {
            (i || o.play('mouse-enter', { target: s, original: e }), null == n || n(e));
        },
        onClick: function (e) {
            (i || o.play('click', { target: s, original: e }), null == t || t(e));
        },
        children: e,
    });
}
function Lt({ keyCode: e, onActive: t, silent: n, soundTarget: r, idle: o, children: s }) {
    !(function (e, t, n = !1) {
        Re(Q(e), 'keyup', t, n);
    })(o ? Z.NONE : Q(e), t);
    const i = a.useMemo(() => ({ keyCode: e, onActive: t, silent: n, soundTarget: r, idle: o }), [e, t, r, n, o]);
    return u.jsx(Tt.Provider, { value: i, children: s });
}
const Ut = function ({
    keyCode: e,
    onActive: t = G,
    silent: n = !1,
    idle: r = !1,
    soundTarget: o = 'KeyButton',
    classNames: s,
    className: i,
    children: a,
    ...l
}) {
    return u.jsx(Lt, {
        keyCode: e,
        onActive: t,
        silent: n,
        idle: r,
        soundTarget: o,
        children: u.jsxs(kt, {
            ...l,
            className: c(Ot, i, null == s ? void 0 : s.base),
            children: [
                u.jsx('div', { className: c(Ft, null == s ? void 0 : s.background) }),
                u.jsx('div', { className: c(St, null == s ? void 0 : s.border) }),
                u.jsx('div', { className: c(Ct, null == s ? void 0 : s.content), children: a }),
            ],
        }),
    });
};
Ut.Code = function () {
    const { keyCode: e } = Pt(),
        t = Q(e);
    if (t === Z.NONE) return Dt;
    const n = ((r = t), window.systemInput.getQWERTYScanCode(r));
    var r;
    const o = ((s = n), window.systemInput.getCurrentLayoutKeyName(s));
    var s;
    return o in Nt
        ? Nt[o]
        : (console.error(
              e === o
                  ? `KeyButton: key code "${e}" is not supported.`
                  : `KeyButton: virtual key code "${o}" for "${e}" is not supported.`,
          ),
          Dt);
};
export { gt as F, ze as J, Ut as K, _t as T, Ge as U, We as c, Be as i, G as n, He as r };
