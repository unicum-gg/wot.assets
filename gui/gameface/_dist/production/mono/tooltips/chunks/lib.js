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
const x = { integral: 0, gold: 1 },
    A = { fractional: 0, woZeroDigits: 1 },
    N = Object.keys(x),
    D = Object.keys(A);
const T = { full: _.FullTime, short: _.ShortTime };
const P = {
    isNumberFormat: function (e) {
        return e in x;
    },
    formatNumber: function (e, t) {
        return window.systemLocale.getNumberFormat(t, x[e]);
    },
    numberFormats: N,
    isRealFormat: function (e) {
        return e in A;
    },
    formatReal: function (e, t) {
        return window.systemLocale.getRealFormat(t, A[e]);
    },
    realFormats: D,
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
function S(e, t, n) {
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
class O {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : v(this.prefix, e),
            o = S(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== n && b(`Resource not found: ${r}`, n), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : v(this.prefix, e),
            n = S(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const o = e.startsWith('R.strings') ? e : v(this.prefix, e),
            s = S(o, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== r && b(`Resource not found: ${o}`, r), n()) : s;
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
function M(e) {
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
y.register({
    strings: i(() => new O()).singleton(),
    images: i(() => new E(window.R.images.gui.maps.icons)).singleton(),
    atlases: i(() => new E(window.R.atlases)).singleton(),
    videos: i(() => new F(window.R.videos)).singleton(),
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
const k = M('clientResized'),
    L = M('self.onScaleUpdated'),
    U = { down: M('mousedown'), up: M('mouseup'), move: M('mousemove') };
function I(e) {
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
const j = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    $ = { ...Object.keys(j).reduce((e, t) => ((e[t] = () => I(j[t])), e), {}), sound: I },
    K = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    B = {
        onTextureFrozen: M('self.onTextureFrozen'),
        onTextureReady: M('self.onTextureReady'),
        onDomBuilt: M('self.onDomBuilt'),
        onLoaded: M('self.onLoaded'),
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
        onDisplayChanged: M('self.onShowingStatusChanged'),
        onFocusUpdated: M('self.onFocusChanged'),
        children: {
            onAdded: M('children.onAdded'),
            onLoaded: M('children.onLoaded'),
            onRemoved: M('children.onRemoved'),
            onAttached: M('children.onAttached'),
            onTextureReady: M('children.onTextureReady'),
            onRequestPosition: M('children.requestPosition'),
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
const H = (e) => (0 === e ? window : window.subViews.get(e));
function z(
    { initializer: e = !0, rootId: t = 0, getRoot: n = H, context: r = 'model' } = {},
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
const X = {
    NONE: 'NONE',
    ...((Z = [
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
    Z.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
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
var Z;
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
const ee = new Set(['zh_cn', 'zh_sg', 'zh_tw']),
    te = 'ja';
const ne = a.createContext(void 0);
const re = 'extraSmall',
    oe = {
        extraSmall: { weight: 0, name: re, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var se,
    ie,
    ae,
    ue =
        (((se = ue || {})[(se.Small = oe.small.width)] = 'Small'),
        (se[(se.Medium = oe.medium.width)] = 'Medium'),
        (se[(se.Large = oe.large.width)] = 'Large'),
        (se[(se.ExtraLarge = oe.extraLarge.width)] = 'ExtraLarge'),
        se),
    ce =
        (((ie = ce || {})[(ie.Small = oe.small.width)] = 'Small'),
        (ie[(ie.Medium = oe.medium.width)] = 'Medium'),
        (ie[(ie.Large = oe.large.width)] = 'Large'),
        (ie[(ie.ExtraLarge = oe.extraLarge.width)] = 'ExtraLarge'),
        ie),
    le =
        (((ae = le || {})[(ae.Small = oe.small.height)] = 'Small'),
        (ae[(ae.Medium = oe.medium.height)] = 'Medium'),
        (ae[(ae.Large = oe.large.height)] = 'Large'),
        (ae[(ae.ExtraLarge = oe.extraLarge.height)] = 'ExtraLarge'),
        ae);
const de = Object.values(oe);
function he(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        o = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...o])).join(' ');
}
const fe = () => {
        return ((e = 1), viewEnv.remToPx(e));
        var e;
    },
    me = () => {
        const e = (function (e = 'px') {
            return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
        })('rem');
        return (function (e, t, n) {
            const r = de.reduce(
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
                i = s.names[s.names.length - 1] ?? re,
                a = oe[i],
                u = r.width.names,
                c = r.height.names,
                l = u[u.length - 1] ?? re,
                d = c[c.length - 1] ?? re,
                h = { width: oe[l].width, height: oe[d].height };
            return {
                mediaClass: he(o, r),
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
        })(e.width, e.height, fe());
    };
function pe({ children: e }) {
    const [t, n] = a.useState(me);
    return (
        a.useLayoutEffect(() => {
            function e() {
                n(me);
            }
            e();
            const t = k(e),
                r = L(e);
            return () => {
                (t(), r());
            };
        }, []),
        u.jsx(ne.Provider, { value: t, children: e })
    );
}
function ge() {
    return (function () {
        const e = a.useContext(ne);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function we({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: o } = ge();
    return u.jsx('div', { className: c(t, 'media-wrapper', r, o && 'media-upscale'), ...n, children: e });
}
function ye({ children: e, ...t }) {
    return u.jsx(pe, { children: u.jsx(we, { ...t, children: e }) });
}
const ve = [];
function be(e) {
    const t = a.useRef(e);
    return (
        a.useLayoutEffect(() => {
            t.current = e;
        }),
        a.useCallback((...e) => (0, t.current)(...e), ve)
    );
}
const Ee = () => {
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
                if (e === X.NONE) return q;
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
    _e = a.createContext(void 0);
function xe(e, t, n, r = !1) {
    const o = Q(e),
        s = be((e) => {
            viewEnv.isEventHandled() || (n(e), viewEnv.setEventHandled(), r && e.stopPropagation());
        }),
        i = (function () {
            const e = a.useContext(_e);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        u = a.useMemo(() => i[t].register(o, s), [i, t, o, s]);
    a.useEffect(() => u, [u]);
}
function Re(e) {
    const t = a.useMemo(Ee, []),
        n = a.useMemo(Ee, []);
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
    return u.jsx(_e.Provider, { value: r, children: e.children });
}
const Ae = {
    click: Ne('play'),
    'hot-key': Ne('play'),
    'mouse-enter': Ne('highlight'),
    increaseAmount: Ne('cons_ammo_single_plus'),
    decreaseAmount: Ne('cons_ammo_single_minus'),
    increaseAmountRoll: Ne('cons_ammo_roll_plus'),
    decreaseAmountRoll: Ne('cons_ammo_roll_minus'),
    close: Ne('cancelcloseno'),
    'show-context-menu': Ne('tabb'),
};
function Ne(e) {
    return () => {
        $.sound(e);
    };
}
const De = a.createContext(null);
function Te({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const o = a.useMemo(() => ({ ...Ae, ...t }), [t]),
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
    return u.jsx(De.Provider, { value: s, children: r });
}
const Pe = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    Se = new Set(['number', 'string', 'boolean', 'bigint']),
    Oe = new Set(['Dict']);
function Fe(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var o, s;
    const i = e,
        a = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (Pe.has(a)) return i;
    if (null === i) return i;
    const u = { depth: n + 1, maxDepth: r };
    if (Array.isArray(i)) return i.map((e) => Fe(e, u));
    if ('object' === a) {
        const r = (null == (o = i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => Fe(e, u));
        if ('CoherentArrayProxy' === r) return e.map((e) => Fe(e.value, u));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in i) {
                    const n = i[t];
                    Se.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in i) {
                    const n = i[t],
                        r = (null == (s = null == i ? void 0 : i.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                    Oe.has(r) || (e[t] = Fe(n, u));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(i)) a[e] = Fe(i[e], u);
        return a;
    }
    return (console.error('Incorrect value to clone model', i), i);
}
const Me = { deep: !1, equals: q },
    Ce = { cloneItem: !0 },
    ke = { shallow: !1 };
class Le {
    constructor(e, t = Ce) {
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
            r[t] = l.box(this.takeItem(e, t), Me);
        }
        ((this._keys = l.set(new Set(o))), (this._data = l.box(r, Me)));
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
                : null !== s && ((n[o] = l.box(s, Me)), this._keys.add(o), this.set(n));
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
        return this.options.cloneItem ? Fe(n, ke) : n;
    }
    untrackedData() {
        return h(() => this._data.get());
    }
}
const Ue = a.createContext({ mode: 'real' }),
    Ie = { equals: q, deep: !1 };
function je(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        d(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const o = (o, s, i = Ie) => {
            const a = l.box(o(n(s)), i);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(o(e))), s), a);
        },
        s = (o, s) => {
            const i = new Le(n(o), s);
            return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), o), i);
        },
        i = (o, s) => {
            const i = l.box(n(o) ?? s, Ie);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), o), i);
        };
    return {
        dict: s,
        dictRef: (e, t) => s(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => o(Fe, e),
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
const $e =
        (e = 'DataLayerProvider') =>
        (t, n, r) => {
            const o = a.createContext(null);
            function s(s) {
                var i;
                const { mode: c, options: l, children: d, mocks: h } = s,
                    f = a.useContext(Ue),
                    m = c ?? f.mode,
                    p = h ?? f.mocks,
                    g = a.useRef([]),
                    w = null == (i = null == r ? void 0 : r.useRequires) ? void 0 : i.call(r),
                    y = be((o, i, a) => {
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
                                    : z(i, { name: e }),
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
                                observableModel: je(c, o, l),
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
                const [_, x] = a.useState(() => y(b, l, p));
                return (
                    a.useEffect(() => {
                        v.current ? x(y(b, l, p)) : (v.current = !0);
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
    Ke = {
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
class Be {
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
async function We(
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
    const i = n ? ye : p.Fragment,
        a = (null == (s = null == window ? void 0 : window.engine) ? void 0 : s.whenReady) ?? Promise.resolve();
    (o && engine.enableImmediateLayout(!0),
        await a,
        document.documentElement.setAttribute('lang', y.resolve('langCode')),
        g.createRoot(t).render(u.jsx(i, { children: u.jsx(Re, { children: e }) })),
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
function He(e) {
    return u.jsx(u.Fragment, { children: e.children });
}
function ze(e) {
    return u.jsx(He, {
        children: u.jsx(Te, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
const Ye = 1,
    Ge = 2,
    qe = 3;
const Ve = {
        COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
        base: 'FormatText_db904f12',
        base__fullSize: 'FormatText_base__fullSize_a514958e',
        nowrap: 'FormatText_nowrap_ff69eca3',
    },
    Xe = new Set((null == (e = Ve.COLORS) ? void 0 : e.split(', ')) ?? []);
let Ze = 0;
function Qe() {
    return ++Ze;
}
const Je =
    /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
function et(e) {
    const t = y.resolve('langCode');
    return (function (e, t, n) {
        return ee.has(t) || t === te
            ? e.map(n)
            : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
    })(
        (function (e, t) {
            return ee.has(t)
                ? (function (e) {
                      const t = [],
                          n = e
                              .replace(/&nbsp;/g, ' ')
                              .replace(/ /g, ' ')
                              .matchAll(
                                  /[(（《「]*["'][^'"]*["'][。，:;：；—！!？?》」•%)、]*|.*?(?=[(（《「]*["'])|.*/gsu,
                              );
                      for (const [r] of n) {
                          const e = r.matchAll(
                              /[(（《「“‘'"]*[\u4E00-\u9FFF\u3400-\u4DBF%][。，:;：；—！!？?》」•%)、’”'"]*|[(（《「“‘'"]*[a-zA-Z0-9-.,]+[。，:;：；—！!？?》」•%)、’”'"]*|\xa0|[^\u4E00-\u9FFF\u3400-\u4DBF\s]/gu,
                          );
                          for (const [n] of e) t.push(n);
                      }
                      return t;
                  })(e)
                : t === te
                  ? (function (e) {
                        const t = [],
                            n = e
                                .replace(/&nbsp;/g, ' ')
                                .matchAll(
                                    /[【「(（『《]?[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF%](?:[。!?、…・ー—–!%?）)】」》』]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\u3040-\u30FF/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|\u00A0|[^\s]/gu,
                                );
                        for (const [r] of n) t.push(r);
                        return t;
                    })(e)
                  : e.split(' ');
        })(e, t),
        t,
        (e, t) => e && u.jsx('span', { children: e }, `${e}${t}`),
    );
}
function tt(e) {
    return Array.isArray(e)
        ? (function (e) {
              const t = [];
              for (let n = 0; n < e.length; n++) {
                  const r = e[n],
                      o = e[n + 1];
                  if ('string' != typeof o || !Je.test(o)) {
                      t.push(tt(r));
                      continue;
                  }
                  const s = et(o.slice(1));
                  (t.push(
                      u.jsxs(
                          a.Fragment,
                          { children: [u.jsxs('span', { className: Ve.nowrap, children: [tt(r), o[0]] }), s] },
                          Qe(),
                      ),
                  ),
                      (n += 1));
              }
              return t;
          })(e)
        : 'string' == typeof e
          ? u.jsx(a.Fragment, { children: et(e) }, Qe())
          : e;
}
const nt = {
    class: function (e, ...t) {
        return u.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            Qe(),
        );
    },
    colorLegacy: function (e, t) {
        const n = Qe();
        return Xe.has(String(t))
            ? u.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : u.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: tt,
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
            Qe(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function rt(e, t, n, r) {
    const o = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...o] = n.slice(1, -1).split(' ');
                return t ? rt(e, t, o, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        s = r[t];
    return s ? s(e, ...o) : (console.error(`Function ${t} is not registered`), e);
}
function ot(e, t, n) {
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
        return r ? rt(e, r, o, n) : e;
    }, t);
}
function st(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function it(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !st(e[r]); ) r++;
            const o = e.slice(n + 1, r),
                s = t[o];
            if (s) return it(e.replace(`$${o}`, String(s)), t);
        }
    }
    return e;
}
function at(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = it(e[r], t);
    return n;
}
const ut = ['number', 'string', 'undefined'];
function ct(e, t, n = {}, r = !0) {
    r && (Ze = 0);
    const o = [];
    function s(e) {
        if (ut.includes(typeof e)) {
            const t = o.at(-1);
            if ('string' == typeof t) return void (o[o.length - 1] = t + e);
        }
        o.push(e);
    }
    for (const i of e)
        if (i.type === Ye) s(i.value);
        else if (i.type === qe)
            null === n[i.name] || ut.includes(typeof n[i.name])
                ? s(n[i.name] ?? `{{${i.name}}}`)
                : o.push(u.jsx(a.Fragment, { children: n[i.name] }, `var-${i.name}-${i.instanceId}`));
        else if (i.type === Ge) {
            const e = ct(i.children, t, n, !1),
                r = ot(at(i.attrs, n), e, t);
            o.push(r);
        }
    return o;
}
function lt(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function dt(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function ht(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const ft = { start: '{{', end: '}}' },
    mt = a.memo(function (e) {
        const {
                brackets: t = ft,
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
                              })(e, ht, lt, dt);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            m = a.useMemo(() => (e.formatters ? { ...nt, ...e.formatters } : nt), [e.formatters]),
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
                                        ? r[r.length - 1].node.children.push({ type: Ye, value: o })
                                        : n.push({ type: Ye, value: o }),
                                    (o = '')),
                                    (s = !0),
                                    (u += t.start.length - 1));
                            else if (c === t.end[0] && e.slice(u, u + t.end.length) === t.end) {
                                ((s = !1), (u += t.end.length - 1));
                                const e = i.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        o = { type: Ge, attrs: t.split('|'), instanceId: ++a, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(o) : n.push(o),
                                        r.push({ node: o, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: qe, instanceId: ++a, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                i = '';
                            } else s ? (i += c) : (o += c);
                        }
                        o &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: Ye, value: o })
                                : n.push({ type: Ye, value: o }));
                        return n;
                    })(d ? `{{@ split}}${f}{{/}}` : f, t),
                [t, f, d],
            ),
            g = a.useMemo(() => ct(p, m, e.params), [p, m, e.params]),
            w = c(Ve.base, s && Ve.base__fullSize, h.className);
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
function pt(e, t, n) {
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
                return a.createElement(o, { ...('function' == typeof o ? e : gt(s, e)), ref: t, className: r(e) });
            });
        return ((i.displayName = e), n.cva && (i.cva = n.cva), i);
    }
    const i = w(t, n),
        c = a.forwardRef(function (t, n) {
            return u.jsx('div', { 'data-name': e, ...gt(s, t), ref: n, className: i(t) });
        });
    return ((c.displayName = e), c);
}
function gt(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
const wt = 'Tooltip_decorator_b3486d4e',
    yt = pt('Base', 'Tooltip_6d997cee'),
    vt = pt('Decorator', wt),
    bt = a.forwardRef(function ({ children: e, ...t }, n) {
        const r = a.useRef(null);
        return (
            ((e, t, n = !0) => {
                const r = be((e) => {
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
            u.jsx(yt, {
                ...t,
                ref: function (e) {
                    ((r.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                children: e,
            })
        );
    });
bt.Decorator = vt;
const Et = y.resolve('strings'),
    _t = y.resolve('intl'),
    xt = (e) => _t.toUpperCase(Et.readOr(`readable_key_names.KEY_${e}`, () => Rt)),
    Rt = _t.toUpperCase(Et.readOrEmpty('readable_key_names.KEY_NONE_ALT')),
    At = {
        [X.NONE]: xt('NONE_ALT'),
        [X.ESCAPE]: xt('ESCAPE'),
        [X.ENTER]: xt('ENTER'),
        [X.SPACE]: xt('SPACE'),
        [X.DELETE]: xt('DELETE'),
        [X.BACKSPACE]: xt('BACKSPACE'),
        [X.TAB]: xt('TAB'),
        [X.HOME]: xt('HOME'),
        [X.END]: xt('END'),
        [X.MINUS]: xt('MINUS'),
        [X.SLASH]: xt('SLASH'),
        [X.BACKSLASH]: xt('BACKSLASH'),
        [X.PERIOD]: xt('PERIOD'),
        [X.COMMA]: xt('COMMA'),
        [X.QUOTE]: xt('APOSTROPHE'),
        [X.SEMICOLON]: xt('SEMICOLON'),
        [X.INSERT]: xt('INSERT'),
        [X.KEY_A]: xt('A'),
        [X.KEY_B]: xt('B'),
        [X.KEY_C]: xt('C'),
        [X.KEY_D]: xt('D'),
        [X.KEY_E]: xt('E'),
        [X.KEY_F]: xt('F'),
        [X.KEY_G]: xt('G'),
        [X.KEY_H]: xt('H'),
        [X.KEY_I]: xt('I'),
        [X.KEY_J]: xt('J'),
        [X.KEY_K]: xt('K'),
        [X.KEY_L]: xt('L'),
        [X.KEY_M]: xt('M'),
        [X.KEY_N]: xt('N'),
        [X.KEY_O]: xt('O'),
        [X.KEY_P]: xt('P'),
        [X.KEY_Q]: xt('Q'),
        [X.KEY_R]: xt('R'),
        [X.KEY_S]: xt('S'),
        [X.KEY_T]: xt('T'),
        [X.KEY_U]: xt('U'),
        [X.KEY_V]: xt('V'),
        [X.KEY_W]: xt('W'),
        [X.KEY_X]: xt('X'),
        [X.KEY_Y]: xt('Y'),
        [X.KEY_Z]: xt('Z'),
        [X.DIGIT_0]: xt('0'),
        [X.DIGIT_1]: xt('1'),
        [X.DIGIT_2]: xt('2'),
        [X.DIGIT_3]: xt('3'),
        [X.DIGIT_4]: xt('4'),
        [X.DIGIT_5]: xt('5'),
        [X.DIGIT_6]: xt('6'),
        [X.DIGIT_7]: xt('7'),
        [X.DIGIT_8]: xt('8'),
        [X.DIGIT_9]: xt('9'),
        [X.NUMPAD_0]: xt('NUMPAD0'),
        [X.NUMPAD_1]: xt('NUMPAD1'),
        [X.NUMPAD_2]: xt('NUMPAD2'),
        [X.NUMPAD_3]: xt('NUMPAD3'),
        [X.NUMPAD_4]: xt('NUMPAD4'),
        [X.NUMPAD_5]: xt('NUMPAD5'),
        [X.NUMPAD_6]: xt('NUMPAD6'),
        [X.NUMPAD_7]: xt('NUMPAD7'),
        [X.NUMPAD_8]: xt('NUMPAD8'),
        [X.NUMPAD_9]: xt('NUMPAD9'),
        [X.F_1]: xt('F1'),
        [X.F_2]: xt('F2'),
        [X.F_3]: xt('F3'),
        [X.F_4]: xt('F4'),
        [X.F_5]: xt('F5'),
        [X.F_6]: xt('F6'),
        [X.F_7]: xt('F7'),
        [X.F_8]: xt('F8'),
        [X.F_9]: xt('F9'),
        [X.F_10]: xt('F10'),
        [X.F_11]: xt('F11'),
        [X.F_12]: xt('F12'),
        [X.NUMPAD_MULTIPLY]: xt('NUMPADSTAR'),
        [X.NUMPAD_DIVIDE]: xt('NUMPADSLASH'),
        [X.NUMPAD_ADD]: xt('ADD'),
        [X.NUMPAD_SUBTRACT]: xt('NUMPADMINUS'),
        [X.NUMPAD_DECIMAL]: xt('NUMPADPERIOD'),
        [X.ARROW_LEFT]: xt('LEFTARROW'),
        [X.ARROW_RIGHT]: xt('RIGHTARROW'),
        [X.ARROW_UP]: xt('UPARROW'),
        [X.ARROW_DOWN]: xt('DOWNARROW'),
        [X.PAGE_UP]: xt('PGUP'),
        [X.PAGE_DOWN]: xt('PGDN'),
        [X.BRACKET_LEFT]: xt('LBRACKET'),
        [X.BRACKET_RIGHT]: xt('RBRACKET'),
    },
    Nt = a.createContext(void 0);
function Dt() {
    const e = a.useContext(Nt);
    if (!e) throw new Error('useKeyButtonContext must be used within KeyButtonContext');
    return e;
}
const Tt = 'KeyButton_background_8a852f95',
    Pt = 'KeyButton_border_b1c50f01',
    St = 'KeyButton_8fd343f8',
    Ot = 'KeyButton_content_a724f532',
    Ft = pt('KeyButton', St);
function Mt({ children: e, onClick: t, onMouseEnter: n, ...r }) {
    const o = (function () {
            const e = a.useContext(De);
            if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
            return e;
        })(),
        { soundTarget: s, silent: i } = Dt();
    return u.jsx(Ft, {
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
function Ct({ keyCode: e, onActive: t, silent: n, soundTarget: r, idle: o, children: s }) {
    !(function (e, t, n = !1) {
        xe(Q(e), 'keyup', t, n);
    })(o ? X.NONE : Q(e), t);
    const i = a.useMemo(() => ({ keyCode: e, onActive: t, silent: n, soundTarget: r, idle: o }), [e, t, r, n, o]);
    return u.jsx(Nt.Provider, { value: i, children: s });
}
const kt = function ({
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
    return u.jsx(Ct, {
        keyCode: e,
        onActive: t,
        silent: n,
        idle: r,
        soundTarget: o,
        children: u.jsxs(Mt, {
            ...l,
            className: c(St, i, null == s ? void 0 : s.base),
            children: [
                u.jsx('div', { className: c(Tt, null == s ? void 0 : s.background) }),
                u.jsx('div', { className: c(Pt, null == s ? void 0 : s.border) }),
                u.jsx('div', { className: c(Ot, null == s ? void 0 : s.content), children: a }),
            ],
        }),
    });
};
kt.Code = function () {
    const { keyCode: e } = Dt(),
        t = Q(e);
    if (t === X.NONE) return Rt;
    const n = ((r = t), window.systemInput.getQWERTYScanCode(r));
    var r;
    const o = ((s = n), window.systemInput.getCurrentLayoutKeyName(s));
    var s;
    return o in At
        ? At[o]
        : (console.error(
              e === o
                  ? `KeyButton: key code "${e}" is not supported.`
                  : `KeyButton: virtual key code "${o}" for "${e}" is not supported.`,
          ),
          Rt);
};
export { mt as F, Be as J, kt as K, bt as T, ze as U, Ke as c, $e as i, G as n, We as r };
