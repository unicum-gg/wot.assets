var e = Object.defineProperty,
    t = (t, n, r) =>
        ((t, n, r) => (n in t ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[n] = r)))(
            t,
            'symbol' != typeof n ? n + '' : n,
            r,
        );
import { c as n, a as r, b as o, d as i, r as s, j as a, e as d, R as u, f as l } from './vendor.js';
const c = n();
function h(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function f(e, t) {
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
class m {
    constructor(e, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = h(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && f(`Resource not found: ${r}`, n), t()) : o;
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
var w = ((e) => (
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
))(w || {});
const p = { integral: 0, gold: 1 },
    g = { fractional: 0, woZeroDigits: 1 },
    y = Object.keys(p),
    v = Object.keys(g);
function b(e) {
    return Number.isFinite(e)
        ? e < 0
            ? (console.error(`Negative timestamp (${e}) is not allowed. Clamping to 0.`), 0)
            : e > Number.MAX_SAFE_INTEGER
              ? (console.error(`Number(${e}) is bigger than MAX_SAFE_INTEGER. Clamping to ${Number.MAX_SAFE_INTEGER}.`),
                Number.MAX_SAFE_INTEGER)
              : e
        : (console.error(`Incorrect value to convert. Value is ${e}. Expected a finite number.`), 0);
}
const E = { full: w.FullTime, short: w.ShortTime },
    x = Object.keys(E);
const T = { short: 0, full: 1 },
    L = {
        isNumberFormat: function (e) {
            return e in p;
        },
        formatNumber: function (e, t) {
            return window.systemLocale.getNumberFormat(t, p[e]);
        },
        numberFormats: y,
        isRealFormat: function (e) {
            return e in g;
        },
        formatReal: function (e, t) {
            return window.systemLocale.getRealFormat(t, g[e]);
        },
        realFormats: v,
        formatDateTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(b(t), e, n);
        },
        dateTimeFormats: w,
        formatTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(b(t), e, n);
        },
        timeFormats: x,
        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
        system: {
            time: (e, t) => window.systemLocale.getTimeFormat(b(e), T[t]),
            date: (e, t) => window.systemLocale.getDateFormat(b(e), T[t]),
        },
    };
function S(e, t) {
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
class O {
    constructor(e) {
        this.prefix = e;
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = h(this.prefix, e),
            o = S(r);
        return void 0 === o ? ('silent' !== n && f(`Resource not found: ${r}`, n), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = h(this.prefix, e),
            n = S(t);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const o = h(this.prefix, e),
            i = S(o, t);
        return void 0 === i ? ('silent' !== r && f(`Resource not found: ${o}`, r), n()) : i;
    }
    pluralOrEmpty(e, t, n = 'warn') {
        return this.pluralOr(e, t, () => '', n);
    }
}
class D {
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
        return void 0 === r ? ('silent' !== n && f(`Resource not found: ${e}`, n), t()) : r;
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
function N(e) {
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
c.register({
    strings: i(() => new O()).singleton(),
    images: i(() => new m(window.R.images.gui.maps.icons)).singleton(),
    atlases: i(() => new m(window.R.atlases)).singleton(),
    videos: i(() => new D(window.R.videos)).singleton(),
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
                    : f(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: r(R.strings.settings.LANGUAGE_CODE()),
    intl: r(L),
});
const P = N('clientResized'),
    F = N('self.onScaleUpdated'),
    A = { down: N('mousedown'), up: N('mouseup'), move: N('mousemove') };
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
                        i = A[t]((e) => n([e, 'outside']));
                    function s(e) {
                        n([e, 'inside']);
                    }
                    return (
                        window.addEventListener(o, s),
                        r(),
                        () => {
                            (i(), window.removeEventListener(o, s), (e.listeners -= 1), r());
                        }
                    );
                };
            })(n)),
            t
        ),
        {},
    );
})();
const C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    j =
        (Object.keys(C).reduce(
            (e, t) => (
                (e[t] = () =>
                    (function (e) {
                        engine.call('PlaySound', e);
                    })(C[t])),
                e
            ),
            {},
        ),
        { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 }),
    k = {
        onTextureFrozen: N('self.onTextureFrozen'),
        onTextureReady: N('self.onTextureReady'),
        onDomBuilt: N('self.onDomBuilt'),
        onLoaded: N('self.onLoaded'),
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
        onDisplayChanged: N('self.onShowingStatusChanged'),
        onFocusUpdated: N('self.onFocusChanged'),
        children: {
            onAdded: N('children.onAdded'),
            onLoaded: N('children.onLoaded'),
            onRemoved: N('children.onRemoved'),
            onAttached: N('children.onAttached'),
            onTextureReady: N('children.onTextureReady'),
            onRequestPosition: N('children.requestPosition'),
        },
    };
function _() {
    return !1;
}
(Object.keys(j).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === j[t]), e), {}),
    'symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((s.prototype.append = function (e, t) {
                ((e = o(e)), (t = i(t)));
                var n = this.map[e];
                (n || ((n = []), (this.map[e] = n)), n.push(t));
            }),
                (s.prototype.delete = function (e) {
                    delete this.map[o(e)];
                }),
                (s.prototype.get = function (e) {
                    var t = this.map[o(e)];
                    return t ? t[0] : null;
                }),
                (s.prototype.getAll = function (e) {
                    return this.map[o(e)] || [];
                }),
                (s.prototype.has = function (e) {
                    return this.map.hasOwnProperty(o(e));
                }),
                (s.prototype.set = function (e, t) {
                    this.map[o(e)] = [i(t)];
                }),
                (s.prototype.forEach = function (e) {
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
            (l.call(c.prototype),
                l.call(m.prototype),
                (self.Headers = s),
                (self.Request = c),
                (self.Response = m),
                (self.fetch = function (t, n) {
                    var o;
                    return (
                        (o = c.prototype.isPrototypeOf(t) && !n ? t : new c(t, n)),
                        new fetch.Promise(function (t, n) {
                            var i = (function () {
                                return r && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function s() {
                                if (4 === i.readyState) {
                                    var e = 1223 === i.status ? 204 : i.status;
                                    if (e < 100 || e > 599) n(new TypeError('Network request failed'));
                                    else {
                                        var r = {
                                                status: e,
                                                statusText: i.statusText,
                                                headers: f(i),
                                                url:
                                                    'responseURL' in i
                                                        ? i.responseURL
                                                        : /^X-Request-URL:/m.test(i.getAllResponseHeaders())
                                                          ? i.getResponseHeader('X-Request-URL')
                                                          : void 0,
                                            },
                                            o = 'response' in i ? i.response : i.responseText;
                                        t(new m(o, r));
                                    }
                                }
                            }
                            ('cors' === o.credentials && (i.withCredentials = !0),
                                (i.onreadystatechange = s),
                                self.usingActiveXhr ||
                                    ((i.onload = s),
                                    (i.onerror = function () {
                                        n(new TypeError('Network request failed'));
                                    })),
                                i.open(o.method, o.url, !0),
                                'responseType' in i && e && (i.responseType = 'blob'),
                                o.headers.forEach(function (e, t) {
                                    t.forEach(function (t) {
                                        i.setRequestHeader(e, t);
                                    });
                                }),
                                i.send(void 0 === o._bodyInit ? null : o._bodyInit));
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
        function i(e) {
            return ('string' != typeof e && (e = e.toString()), e);
        }
        function s(e) {
            this.map = {};
            var t = this;
            e instanceof s
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
        function d(e) {
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
            return (t.readAsArrayBuffer(e), d(t));
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
                          if (this._bodyBlob) return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), d(t));
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
        function c(e, t) {
            var r, o;
            if (
                ((t = t || {}),
                (this.url = e),
                (this.credentials = t.credentials || 'omit'),
                (this.headers = new s(t.headers)),
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
            var t = new s();
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
                (this.headers = t.headers instanceof s ? t.headers : new s(t.headers)),
                (this.url = t.url || ''));
        }
    })());
const $ = -1;
['ko', 'no'].includes(c.resolve('langCode'));
class U {
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
const H = s.createContext(void 0);
const B = 'extraSmall',
    I = {
        extraSmall: { weight: 0, name: B, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var X,
    z,
    q,
    G =
        (((X = G || {})[(X.Small = I.small.width)] = 'Small'),
        (X[(X.Medium = I.medium.width)] = 'Medium'),
        (X[(X.Large = I.large.width)] = 'Large'),
        (X[(X.ExtraLarge = I.extraLarge.width)] = 'ExtraLarge'),
        X),
    W =
        (((z = W || {})[(z.Small = I.small.width)] = 'Small'),
        (z[(z.Medium = I.medium.width)] = 'Medium'),
        (z[(z.Large = I.large.width)] = 'Large'),
        (z[(z.ExtraLarge = I.extraLarge.width)] = 'ExtraLarge'),
        z),
    V =
        (((q = V || {})[(q.Small = I.small.height)] = 'Small'),
        (q[(q.Medium = I.medium.height)] = 'Medium'),
        (q[(q.Large = I.large.height)] = 'Large'),
        (q[(q.ExtraLarge = I.extraLarge.height)] = 'ExtraLarge'),
        q);
const K = Object.values(I);
function Y(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        o = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...o])).join(' ');
}
const J = () => {
        return ((e = 1), viewEnv.remToPx(e));
        var e;
    },
    Z = () => {
        const e = (function (e = 'px') {
            return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
        })('rem');
        return (function (e, t, n) {
            const r = K.reduce(
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
                i = r[o],
                s = i.names[i.names.length - 1] ?? B,
                a = I[s],
                d = r.width.names,
                u = r.height.names,
                l = d[d.length - 1] ?? B,
                c = u[u.length - 1] ?? B,
                h = { width: I[l].width, height: I[c].height };
            return {
                mediaClass: Y(o, r),
                breakpoint: a,
                screenWidthRem: e,
                screenHeightRem: t,
                breaks: i.names,
                sides: h,
                mediaSize: a.width,
                mediaWidth: h.width,
                mediaHeight: h.height,
                upscale: n > 1,
            };
        })(e.width, e.height, J());
    };
function Q({ children: e }) {
    const [t, n] = s.useState(Z);
    return (
        s.useLayoutEffect(() => {
            function e() {
                n(Z);
            }
            e();
            const t = P(e),
                r = F(e);
            return () => {
                (t(), r());
            };
        }, []),
        a.jsx(H.Provider, { value: t, children: e })
    );
}
function ee() {
    return (function () {
        const e = s.useContext(H);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function te({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: o } = ee();
    return a.jsx('div', { className: d(t, 'media-wrapper', r, o && 'media-upscale'), ...n, children: e });
}
function ne({ children: e, ...t }) {
    return a.jsx(Q, { children: a.jsx(te, { ...t, children: e }) });
}
const re = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new U();
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
                if (e === $) return _;
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
    oe = s.createContext(void 0);
function ie(e) {
    const t = s.useMemo(re, []),
        n = s.useMemo(re, []);
    s.useEffect(() => {
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
    const r = s.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: n.register, unregister: n.unregister },
        }),
        [t, n],
    );
    return a.jsx(oe.Provider, { value: r, children: e.children });
}
(s.createContext(null), s.createContext({ mode: 'real' }));
async function se(e, { root: t = document.getElementById('root'), withMedia: n = !0, fullScreen: r = !1 } = {}) {
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
                    const i = { depth: n - 1, convertArrays: r },
                        s = (null == (o = t.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                    switch (!0) {
                        case s.includes('CoherentArrayProxy'):
                            return [...t.values()].map((t) => e(i.convertArrays ? t.value : t, i));
                        case 'Dict' === s:
                            return [...t.entries()].reduce((t, [n, r]) => ((t[n] = e(r, i)), t), { $$type: 'Dict' });
                        case 'UNKNOWN' === s:
                            return 'UNKNOWN_TYPE';
                        case s.includes('ViewModel'):
                        default: {
                            const n = {};
                            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = e(t[r], i));
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
    const i = n ? ne : u.Fragment,
        s = (null == (o = null == window ? void 0 : window.engine) ? void 0 : o.whenReady) ?? Promise.resolve();
    (await s,
        document.documentElement.setAttribute('lang', c.resolve('langCode')),
        l.createRoot(t).render(a.jsx(i, { children: a.jsx(ie, { children: e }) })),
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
s.forwardRef(function (e, t) {
    const n = s.useRef(null);
    return (
        s.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return k.onHitTest((t) => {
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
export { se as r };
