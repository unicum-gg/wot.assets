var e = Object.defineProperty,
    t = (t, n, r) =>
        ((t, n, r) => (n in t ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[n] = r)))(
            t,
            'symbol' != typeof n ? n + '' : n,
            r,
        );
import { c as n, a as r, b as i, d as o, r as s, j as a, e as d, R as u, f as l } from './vendor.js';
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
    constructor(e = window.R.images, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.images') ? e : h(this.prefix, e),
            i = (function (e, t) {
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
        return void 0 === i ? ('silent' !== n && f(`Resource not found: ${r}`, n), t()) : i;
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
const b = { full: w.FullTime, short: w.ShortTime };
const E = {
    isNumberFormat: function (e) {
        return e in p;
    },
    formatNumber: function (e, t) {
        return window.formatters.getNumberFormat(t, p[e]);
    },
    numberFormats: y,
    isRealFormat: function (e) {
        return e in g;
    },
    formatReal: function (e, t, n = 2) {
        return window.formatters.getRealFormat(t, g[e], n);
    },
    realFormats: v,
    formatDateTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    dateTimeFormats: w,
    formatTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    timeFormats: Object.keys(b),
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
function x(e, t, n) {
    const r = e.split('.');
    if (window.R && window.R.strings) {
        const e = r[r.length - 1];
        if (!e) return;
        const i = r.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
        }, n);
        if (!i) return;
        return 'function' == typeof i[e] ? (t ? i[e](t) : i[e]()) : void 0;
    }
    throw new Error('R class with strings field is not defined');
}
class T {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : h(this.prefix, e),
            i = x(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === i ? ('silent' !== n && f(`Resource not found: ${r}`, n), t()) : i;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : h(this.prefix, e),
            n = x(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const i = e.startsWith('R.strings') ? e : h(this.prefix, e),
            o = x(i, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== r && f(`Resource not found: ${i}`, r), n()) : o;
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
        const r = e.startsWith('R.videos') ? e : h(this.prefix, e),
            i = (function (e, t) {
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
        return void 0 === i ? ('silent' !== n && f(`Resource not found: ${e}`, n), t()) : i;
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
function L(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function S(e) {
    viewEnv.setTrackMouseOnStage(e);
}
c.register({
    strings: o(() => new T()).singleton(),
    images: o(() => new m(window.R.images.gui.maps.icons)).singleton(),
    atlases: o(() => new m(window.R.atlases)).singleton(),
    videos: o(() => new O(window.R.videos)).singleton(),
    views: i(
        class {
            read(e) {
                return e(window.R.views);
            }
        },
    ).singleton(),
    aliases: i(
        class {
            read(e) {
                return e(window.R.aliases);
            }
        },
    ).singleton(),
    sounds: i(
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
    intl: r(E),
});
const D = L('clientResized'),
    P = L('self.onScaleUpdated'),
    N = { down: L('mousedown'), up: L('mouseup'), move: L('mousemove') };
!(function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && S(!1);
    }
    function n() {
        e.enabled && S(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  S(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : S(!1);
    }
    ['down', 'up', 'move'].reduce(
        (t, n) => (
            (t[n] = (function (t) {
                return (n) => {
                    e.listeners += 1;
                    const i = `mouse${t}`,
                        o = N[t]((e) => n([e, 'outside']));
                    function s(e) {
                        n([e, 'inside']);
                    }
                    return (
                        window.addEventListener(i, s),
                        r(),
                        () => {
                            (o(), window.removeEventListener(i, s), (e.listeners -= 1), r());
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
    C =
        (Object.keys(M).reduce(
            (e, t) => (
                (e[t] = () =>
                    (function (e) {
                        engine.call('PlaySound', e);
                    })(M[t])),
                e
            ),
            {},
        ),
        { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 }),
    F = {
        onTextureFrozen: L('self.onTextureFrozen'),
        onTextureReady: L('self.onTextureReady'),
        onDomBuilt: L('self.onDomBuilt'),
        onLoaded: L('self.onLoaded'),
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
        onDisplayChanged: L('self.onShowingStatusChanged'),
        onFocusUpdated: L('self.onFocusChanged'),
        onExternalPaddingsUpdated: L('self.onPaddingsUpdated'),
        children: {
            onAdded: L('children.onAdded'),
            onLoaded: L('children.onLoaded'),
            onRemoved: L('children.onRemoved'),
            onAttached: L('children.onAttached'),
            onTextureReady: L('children.onTextureReady'),
            onRequestPosition: L('children.requestPosition'),
        },
    };
function k() {
    return !1;
}
function A(e, t) {
    return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
}
(Object.keys(C).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === C[t]), e), {}),
    'symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((s.prototype.append = function (e, t) {
                ((e = i(e)), (t = o(t)));
                var n = this.map[e];
                (n || ((n = []), (this.map[e] = n)), n.push(t));
            }),
                (s.prototype.delete = function (e) {
                    delete this.map[i(e)];
                }),
                (s.prototype.get = function (e) {
                    var t = this.map[i(e)];
                    return t ? t[0] : null;
                }),
                (s.prototype.getAll = function (e) {
                    return this.map[i(e)] || [];
                }),
                (s.prototype.has = function (e) {
                    return this.map.hasOwnProperty(i(e));
                }),
                (s.prototype.set = function (e, t) {
                    this.map[i(e)] = [o(t)];
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
                    var i;
                    return (
                        (i = c.prototype.isPrototypeOf(t) && !n ? t : new c(t, n)),
                        new fetch.Promise(function (t, n) {
                            var o = (function () {
                                return r && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function s() {
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
                                            i = 'response' in o ? o.response : o.responseText;
                                        t(new m(i, r));
                                    }
                                }
                            }
                            ('cors' === i.credentials && (o.withCredentials = !0),
                                (o.onreadystatechange = s),
                                self.usingActiveXhr ||
                                    ((o.onload = s),
                                    (o.onerror = function () {
                                        n(new TypeError('Network request failed'));
                                    })),
                                o.open(i.method, i.url, !0),
                                'responseType' in o && e && (o.responseType = 'blob'),
                                i.headers.forEach(function (e, t) {
                                    t.forEach(function (t) {
                                        o.setRequestHeader(e, t);
                                    });
                                }),
                                o.send(void 0 === i._bodyInit ? null : i._bodyInit));
                        })
                    );
                }),
                (fetch.Promise = self.Promise),
                (self.fetch.polyfill = !0));
        }
        function i(e) {
            if (('string' != typeof e && (e = e.toString()), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)))
                throw new TypeError('Invalid character in header field name');
            return e.toLowerCase();
        }
        function o(e) {
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
            var r, i;
            if (
                ((t = t || {}),
                (this.url = e),
                (this.credentials = t.credentials || 'omit'),
                (this.headers = new s(t.headers)),
                (this.method = ((r = t.method || 'GET'), (i = r.toUpperCase()), n.indexOf(i) > -1 ? i : r)),
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
                                i = n.join('=').replace(/\+/g, ' ');
                            t.append(decodeURIComponent(r), decodeURIComponent(i));
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
                            i = n.join(':').trim();
                        t.append(r, i);
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
const j = {
    NONE: 'NONE',
    ...((U = [
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
    U.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...A(
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
    ...A(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...A(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...A(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...A(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...A(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...A(['Up', 'Down'], 'Page'),
    ...A(['Left', 'Right'], 'Bracket'),
};
var U;
['ko', 'no'].includes(c.resolve('langCode'));
class $ {
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
const _ = s.createContext(void 0);
const B = 'extraSmall',
    H = {
        extraSmall: { weight: 0, name: B, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var W,
    z,
    I,
    q =
        (((W = q || {})[(W.Small = H.small.width)] = 'Small'),
        (W[(W.Medium = H.medium.width)] = 'Medium'),
        (W[(W.Large = H.large.width)] = 'Large'),
        (W[(W.ExtraLarge = H.extraLarge.width)] = 'ExtraLarge'),
        W),
    X =
        (((z = X || {})[(z.Small = H.small.width)] = 'Small'),
        (z[(z.Medium = H.medium.width)] = 'Medium'),
        (z[(z.Large = H.large.width)] = 'Large'),
        (z[(z.ExtraLarge = H.extraLarge.width)] = 'ExtraLarge'),
        z),
    G =
        (((I = G || {})[(I.Small = H.small.height)] = 'Small'),
        (I[(I.Medium = H.medium.height)] = 'Medium'),
        (I[(I.Large = H.large.height)] = 'Large'),
        (I[(I.ExtraLarge = H.extraLarge.height)] = 'ExtraLarge'),
        I);
const V = Object.values(H);
function K(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        i = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...i])).join(' ');
}
const Y = () => {
        return ((e = 1), viewEnv.remToPx(e));
        var e;
    },
    J = () => {
        const e = (function (e = 'px') {
            return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
        })('rem');
        return (function (e, t, n) {
            const r = V.reduce(
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
                i = r.width.weight <= r.height.weight ? 'width' : 'height',
                o = r[i],
                s = o.names[o.names.length - 1] ?? B,
                a = H[s],
                d = r.width.names,
                u = r.height.names,
                l = d[d.length - 1] ?? B,
                c = u[u.length - 1] ?? B,
                h = { width: H[l].width, height: H[c].height };
            return {
                mediaClass: K(i, r),
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
        })(e.width, e.height, Y());
    };
function Q({ children: e }) {
    const [t, n] = s.useState(J);
    return (
        s.useLayoutEffect(() => {
            function e() {
                n(J);
            }
            e();
            const t = D(e),
                r = P(e);
            return () => {
                (t(), r());
            };
        }, []),
        a.jsx(_.Provider, { value: t, children: e })
    );
}
function Z() {
    return (function () {
        const e = s.useContext(_);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function ee({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: i } = Z();
    return a.jsx('div', { className: d(t, 'media-wrapper', r, i && 'media-upscale'), ...n, children: e });
}
function te({ children: e, ...t }) {
    return a.jsx(Q, { children: a.jsx(ee, { ...t, children: e }) });
}
const ne = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new $();
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
                if (e === j.NONE) return k;
                const i = t(e);
                return (i.includes(r) || i.push(r), () => n(e, r));
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
    re = s.createContext(void 0);
function ie(e) {
    const t = s.useMemo(ne, []),
        n = s.useMemo(ne, []);
    s.useEffect(() => {
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
    const r = s.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: n.register, unregister: n.unregister },
        }),
        [t, n],
    );
    return a.jsx(re.Provider, { value: r, children: e.children });
}
(s.createContext(null), s.createContext({ mode: 'real' }));
async function oe(
    e,
    { root: t = document.getElementById('root'), withMedia: n = !0, fullScreen: r = !1, immediateLayout: i = !0 } = {},
) {
    var o;
    !(function () {
        const e = (t = window.model, { depth: n = 16, convertArrays: r = !0 } = {}) => {
            var i;
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
                        s = (null == (i = t.constructor) ? void 0 : i.name) ?? 'UNKNOWN';
                    switch (!0) {
                        case s.includes('CoherentArrayProxy'):
                            return [...t.values()].map((t) => e(o.convertArrays ? t.value : t, o));
                        case 'Dict' === s:
                            return [...t.entries()].reduce((t, [n, r]) => ((t[n] = e(r, o)), t), { $$type: 'Dict' });
                        case 'UNKNOWN' === s:
                            return 'UNKNOWN_TYPE';
                        case s.includes('ViewModel'):
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
    const s = n ? te : u.Fragment,
        d = (null == (o = null == window ? void 0 : window.engine) ? void 0 : o.whenReady) ?? Promise.resolve();
    (i && engine.enableImmediateLayout(!0),
        await d,
        document.documentElement.setAttribute('lang', c.resolve('langCode')),
        l.createRoot(t).render(a.jsx(s, { children: a.jsx(ie, { children: e }) })),
        r &&
            (!(function (e) {
                function t() {
                    const { top: t, right: n, bottom: r, left: i } = viewEnv.getExternalPaddingsRem();
                    (e.style.setProperty('--external-padding-top', `${t}rem`),
                        e.style.setProperty('--external-padding-right', `${n}rem`),
                        e.style.setProperty('--external-padding-bottom', `${r}rem`),
                        e.style.setProperty('--external-padding-left', `${i}rem`));
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
export { oe as r };
