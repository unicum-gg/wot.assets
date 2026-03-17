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
    d as i,
    r as s,
    j as a,
    e as u,
    o as d,
    f as l,
    u as c,
    R as h,
    g as f,
} from './vendor.js';
const m = n();
function p(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function w(e, t) {
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
        const r = e.startsWith('R.images') ? e : p(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && w(`Resource not found: ${r}`, n), t()) : o;
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
const y = { integral: 0, gold: 1 },
    _ = { fractional: 0, woZeroDigits: 1 },
    b = Object.keys(y),
    x = Object.keys(_);
const E = { full: v.FullTime, short: v.ShortTime };
const S = {
    isNumberFormat: function (e) {
        return e in y;
    },
    formatNumber: function (e, t) {
        return window.formatters.getNumberFormat(t, y[e]);
    },
    numberFormats: b,
    isRealFormat: function (e) {
        return e in _;
    },
    formatReal: function (e, t, n = 2) {
        return window.formatters.getRealFormat(t, _[e], n);
    },
    realFormats: x,
    formatDateTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    dateTimeFormats: v,
    formatTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    timeFormats: Object.keys(E),
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
function T(e, t, n) {
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
class P {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : p(this.prefix, e),
            o = T(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== n && w(`Resource not found: ${r}`, n), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : p(this.prefix, e),
            n = T(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const o = e.startsWith('R.strings') ? e : p(this.prefix, e),
            i = T(o, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === i ? ('silent' !== r && w(`Resource not found: ${o}`, r), n()) : i;
    }
    pluralOrEmpty(e, t, n = 'warn') {
        return this.pluralOr(e, t, () => '', n);
    }
}
class D {
    constructor(e = window.R.videos, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.videos') ? e : p(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && w(`Resource not found: ${e}`, n), t()) : o;
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
    return function (t, n) {
        switch (arguments.length) {
            case 1:
                return function (n) {
                    return e(t, n);
                };
            case 2:
                return e(t, n);
        }
    };
}
m.register({
    strings: i(() => new P()).singleton(),
    images: i(() => new g(window.R.images.gui.maps.icons)).singleton(),
    atlases: i(() => new g(window.R.atlases)).singleton(),
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
                    : w(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: r(R.strings.settings.LANGUAGE_CODE()),
    intl: r(S),
});
const k = Symbol('Duration');
function O(e) {
    return 'object' == typeof e && null !== e && e[k] === k;
}
function N(e) {
    return { [k]: k, value: e, unit: 'millis' };
}
const C = N(0);
function F(e) {
    return { [k]: k, value: e, unit: 'seconds' };
}
const L = {
        millis: (e) => e,
        seconds: (e) => 1e3 * e,
        minutes: (e) => 1e3 * e * 60,
        hours: (e) => 1e3 * e * 60 * 60,
        days: (e) => 1e3 * e * 60 * 60 * 24,
        weeks: (e) => 1e3 * e * 60 * 60 * 24 * 7,
    },
    j = (e) => e / 1e3,
    $ = (e) => e / 1e3 / 60,
    A = (e) => e / 1e3 / 60 / 60,
    z = (e) => e / 1e3 / 60 / 60 / 24,
    V = (e) => e / 1e3 / 60 / 60 / 24 / 7;
function B(e) {
    return (0, L[e.unit])(e.value);
}
const U = M(function (e, t) {
        return N(B(e) + B(t));
    }),
    I = M(function (e, t) {
        return N(B(e) - B(t));
    }),
    H = M(function (e, t) {
        return B(e) > B(t);
    }),
    W = M(function (e, t) {
        return B(e) < B(t);
    }),
    q = {
        DD: (e) => Math.floor(z(e)).toString().padStart(2, '0'),
        D: (e) => Math.floor(z(e)).toString(),
        WW: (e) => Math.floor(V(e)).toString().padStart(2, '0'),
        W: (e) => Math.floor(V(e)).toString(),
        hh: (e) =>
            Math.floor(A(e) % 24)
                .toString()
                .padStart(2, '0'),
        mm: (e) =>
            Math.floor($(e) % 60)
                .toString()
                .padStart(2, '0'),
        ss: (e) =>
            Math.floor(j(e) % 60)
                .toString()
                .padStart(2, '0'),
        h: (e) => Math.floor(A(e) % 24).toString(),
        m: (e) => Math.floor($(e) % 60).toString(),
        s: (e) => Math.floor(j(e) % 60).toString(),
        S: (e) => Math.floor(e % 1e3).toString(),
        SS: (e) =>
            Math.floor(e % 1e3)
                .toString()
                .padStart(2, '0'),
        SSS: (e) =>
            Math.floor(e % 1e3)
                .toString()
                .padStart(3, '0'),
    };
function X(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
function G(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function K(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const Y = G('clientResized'),
    J = G('self.onScaleUpdated'),
    Q = { down: G('mousedown'), up: G('mouseup'), move: G('mousemove') };
!(function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && K(!1);
    }
    function n() {
        e.enabled && K(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  K(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : K(!1);
    }
    ['down', 'up', 'move'].reduce(
        (t, n) => (
            (t[n] = (function (t) {
                return (n) => {
                    e.listeners += 1;
                    const o = `mouse${t}`,
                        i = Q[t]((e) => n([e, 'outside']));
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
const Z = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    ee =
        (Object.keys(Z).reduce(
            (e, t) => (
                (e[t] = () =>
                    (function (e) {
                        engine.call('PlaySound', e);
                    })(Z[t])),
                e
            ),
            {},
        ),
        { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 }),
    te = {
        onTextureFrozen: G('self.onTextureFrozen'),
        onTextureReady: G('self.onTextureReady'),
        onDomBuilt: G('self.onDomBuilt'),
        onLoaded: G('self.onLoaded'),
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
        onDisplayChanged: G('self.onShowingStatusChanged'),
        onFocusUpdated: G('self.onFocusChanged'),
        onExternalPaddingsUpdated: G('self.onPaddingsUpdated'),
        children: {
            onAdded: G('children.onAdded'),
            onLoaded: G('children.onLoaded'),
            onRemoved: G('children.onRemoved'),
            onAttached: G('children.onAttached'),
            onTextureReady: G('children.onTextureReady'),
            onRequestPosition: G('children.requestPosition'),
        },
    };
Object.keys(ee).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === ee[t]), e), {});
class ne {
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
const re = (e) => (0 === e ? window : window.subViews.get(e));
function oe(
    { initializer: e = !0, rootId: t = 0, getRoot: n = re, context: r = 'model' } = {},
    { name: o = 'DataLayer' } = {},
) {
    const i = new Map(),
        s = { subscribersNotified: new ne() },
        a = engine.whenReady.then(() => {
            function e(e, t, n) {
                (n.forEach((n) => {
                    const r = i.get(n);
                    void 0 !== r && r(e, t);
                }),
                    s.subscribersNotified.emit());
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
    const d = (e) => {
        const n = u();
        if ('string' != typeof e || 0 === e.length) return n;
        try {
            return e.split('.').reduce((e, t) => {
                if (!(t in e)) throw new Error(`Key "${t}" doesn't exists in part of model`);
                const n = e[t];
                return 'function' == typeof n ? n.bind(e) : n;
            }, n);
        } catch (i) {
            throw new Error(`Failure readByPath in ${o}. Root id: ${t}. Context: ${r}:\n${i}\n`);
        }
    };
    function l(e) {
        viewEnv.removeDataChangedCallback(e, t) ? i.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (n, o) => {
            const s = (function (e, t, n) {
                return viewEnv.addDataChangedCallback(e, t, n);
            })('string' == typeof o ? `${r}.${o}` : r, t, !0);
            return (i.set(s, n), e && n(d(o), []), s);
        },
        readByPath: d,
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
            const n = d(t);
            return (...t) => {
                n(e(...t));
            };
        },
        createCallbackNoArgs: (e) => {
            const t = d(e);
            return () => {
                t();
            };
        },
        dispose: function () {
            if (0 === t || window.subViews.ids().includes(t)) for (const e of i.keys()) l(e);
            a.then((e) => e());
        },
        unsubscribe: l,
        events: s,
    };
}
function ie(e, t) {
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
function se() {}
function ae() {
    return !1;
}
function ue(e, t) {
    return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
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
        function d(e) {
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
                          return this.blob().then(d);
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
const de = {
    NONE: 'NONE',
    ...((le = [
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
    le.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...ue(
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
    ...ue(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...ue(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...ue(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...ue(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...ue(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...ue(['Up', 'Down'], 'Page'),
    ...ue(['Left', 'Right'], 'Bracket'),
};
var le;
['ko', 'no'].includes(m.resolve('langCode'));
class ce {
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
const he = s.createContext(void 0);
const fe = 'extraSmall',
    me = {
        extraSmall: { weight: 0, name: fe, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var pe,
    we,
    ge,
    ve =
        (((pe = ve || {})[(pe.Small = me.small.width)] = 'Small'),
        (pe[(pe.Medium = me.medium.width)] = 'Medium'),
        (pe[(pe.Large = me.large.width)] = 'Large'),
        (pe[(pe.ExtraLarge = me.extraLarge.width)] = 'ExtraLarge'),
        pe),
    ye =
        (((we = ye || {})[(we.Small = me.small.width)] = 'Small'),
        (we[(we.Medium = me.medium.width)] = 'Medium'),
        (we[(we.Large = me.large.width)] = 'Large'),
        (we[(we.ExtraLarge = me.extraLarge.width)] = 'ExtraLarge'),
        we),
    _e =
        (((ge = _e || {})[(ge.Small = me.small.height)] = 'Small'),
        (ge[(ge.Medium = me.medium.height)] = 'Medium'),
        (ge[(ge.Large = me.large.height)] = 'Large'),
        (ge[(ge.ExtraLarge = me.extraLarge.height)] = 'ExtraLarge'),
        ge);
const be = Object.values(me);
function xe(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        o = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...o])).join(' ');
}
const Ee = () => {
        return ((e = 1), viewEnv.remToPx(e));
        var e;
    },
    Se = () => {
        const e = (function (e = 'px') {
            return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
        })('rem');
        return (function (e, t, n) {
            const r = be.reduce(
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
                s = i.names[i.names.length - 1] ?? fe,
                a = me[s],
                u = r.width.names,
                d = r.height.names,
                l = u[u.length - 1] ?? fe,
                c = d[d.length - 1] ?? fe,
                h = { width: me[l].width, height: me[c].height };
            return {
                mediaClass: xe(o, r),
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
        })(e.width, e.height, Ee());
    };
function Re({ children: e }) {
    const [t, n] = s.useState(Se);
    return (
        s.useLayoutEffect(() => {
            function e() {
                n(Se);
            }
            e();
            const t = Y(e),
                r = J(e);
            return () => {
                (t(), r());
            };
        }, []),
        a.jsx(he.Provider, { value: t, children: e })
    );
}
function Te() {
    return (function () {
        const e = s.useContext(he);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function Pe({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: o } = Te();
    return a.jsx('div', { className: u(t, 'media-wrapper', r, o && 'media-upscale'), ...n, children: e });
}
function De({ children: e, ...t }) {
    return a.jsx(Re, { children: a.jsx(Pe, { ...t, children: e }) });
}
const Me = [];
const ke = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new ce();
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
                if (e === de.NONE) return ae;
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
    Oe = s.createContext(void 0);
function Ne(e) {
    const t = s.useMemo(ke, []),
        n = s.useMemo(ke, []);
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
    return a.jsx(Oe.Provider, { value: r, children: e.children });
}
s.createContext(null);
const Ce = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    Fe = new Set(['number', 'string', 'boolean', 'bigint']),
    Le = new Set(['Dict']);
function je(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var o, i;
    const s = e,
        a = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (Ce.has(a)) return s;
    if (null === s) return s;
    const u = { depth: n + 1, maxDepth: r };
    if (Array.isArray(s)) return s.map((e) => je(e, u));
    if ('object' === a) {
        const r = (null == (o = s.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => je(e, u));
        if ('CoherentArrayProxy' === r) return e.map((e) => je(e.value, u));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in s) {
                    const n = s[t];
                    Fe.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in s) {
                    const n = s[t],
                        r = (null == (i = null == s ? void 0 : s.constructor) ? void 0 : i.name) ?? 'UNKNOWN';
                    Le.has(r) || (e[t] = je(n, u));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(s)) a[e] = je(s[e], u);
        return a;
    }
    return (console.error('Incorrect value to clone model', s), s);
}
const $e = { deep: !1, equals: ae },
    Ae = { cloneItem: !0 },
    ze = { shallow: !1 };
class Ve {
    constructor(e, n = Ae) {
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
            r[n] = d.box(this.takeItem(e, n), $e);
        }
        ((this._keys = d.set(new Set(o))), (this._data = d.box(r, $e)));
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
                i = this.takeItem(e, o);
            o in n
                ? null === i
                    ? (delete n[o], this._keys.delete(o), this.set(n))
                    : n[o].set(i)
                : null !== i && ((n[o] = d.box(i, $e)), this._keys.add(o), this.set(n));
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
        return this.options.cloneItem ? je(n, ze) : n;
    }
    untrackedData() {
        return c(() => this._data.get());
    }
}
const Be = s.createContext({ mode: 'real' }),
    Ue = { equals: ae, deep: !1 };
function Ie(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        l(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const o = (o, i, s = Ue) => {
            const a = d.box(o(n(i)), s);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(o(e))), i), a);
        },
        i = (o, i) => {
            const s = new Ve(n(o), i);
            return ('real' === t && e.subscribe((e, t) => r.push(() => s.update(e, t)), o), s);
        },
        s = (o, i) => {
            const s = d.box(n(o) ?? i, Ue);
            return ('real' === t && e.subscribe((e) => r.push(() => s.set(e)), o), s);
        };
    return {
        dict: i,
        dictRef: (e, t) => i(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => o(je, e),
        array: s,
        object: s,
        transform: o,
        primitives: (o, i) => {
            const s = n(i);
            if (Array.isArray(o)) {
                const n = o.reduce((e, t) => ((e[t] = d.box(s[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                o.forEach((t) => {
                                    n[t].set(e[t]);
                                }),
                            );
                        }, i),
                    n
                );
            }
            {
                const n = o,
                    a = Object.entries(n),
                    u = a.reduce((e, [t, n]) => ((e[n] = d.box(s[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                a.forEach(([t, n]) => {
                                    u[n].set(e[t]);
                                }),
                            );
                        }, i),
                    u
                );
            }
        },
    };
}
const He =
    (e = 'DataLayerProvider') =>
    (t, n, r) => {
        const o = s.createContext(null);
        function i(i) {
            var u;
            const { mode: d, options: l, children: c, mocks: h } = i,
                f = s.useContext(Be),
                m = d ?? f.mode,
                p = h ?? f.mocks,
                w = s.useRef([]),
                g = null == (u = null == r ? void 0 : r.useRequires) ? void 0 : u.call(r),
                v = (function (e) {
                    const t = s.useRef(e);
                    return (
                        s.useLayoutEffect(() => {
                            t.current = e;
                        }),
                        s.useCallback((...e) => (0, t.current)(...e), Me)
                    );
                })((o, s, a) => {
                    var u;
                    const d =
                            'real' !== o && a
                                ? (function (e, t) {
                                      return {
                                          subscribe: () => 0,
                                          readSafeByPath: e,
                                          readByPath: e,
                                          createCallback: (n, r) => {
                                              const o = e(ie(r, t));
                                              return (...e) => {
                                                  o(n(...e));
                                              };
                                          },
                                          createCallbackNoArgs: (n) => {
                                              const r = e(ie(n, t));
                                              return () => {
                                                  r();
                                              };
                                          },
                                          dispose: () => {},
                                          unsubscribe: () => {},
                                          events: { subscribersNotified: new ne() },
                                      };
                                  })(a.getter, s)
                                : oe(s, { name: e }),
                        l = (e) => ('mocks' === o ? (null == a ? void 0 : a.getter(e, s)) : d.readByPath(e)),
                        c = (e) => w.current.push(e),
                        h = 'initial' in i && {
                            initial: null == (u = null == r ? void 0 : r.initial) ? void 0 : u.call(r, i.initial),
                        },
                        f = t({
                            ...h,
                            mode: o,
                            readByPath: l,
                            requires: g,
                            externalModel: d,
                            observableModel: Ie(d, o, l),
                            cleanup: c,
                        }),
                        m = { ...h, mode: o, model: f, externalModel: d, cleanup: c, requires: g },
                        p = 'mocks' === o && (null == a ? void 0 : a.controls) ? a.controls(m) : {};
                    return {
                        model: f,
                        controls: { ...(null == n ? void 0 : n(m)), ...p },
                        externalModel: d,
                        mode: o,
                        rootId: (null == s ? void 0 : s.rootId) ?? 0,
                    };
                }),
                y = s.useRef(!1),
                [_, b] = s.useState(m);
            s.useEffect(() => {
                b(m);
            }, [m]);
            const [x, E] = s.useState(() => v(_, l, p));
            return (
                s.useEffect(() => {
                    y.current ? E(v(_, l, p)) : (y.current = !0);
                }, [
                    v,
                    p,
                    _,
                    null == l ? void 0 : l.context,
                    null == l ? void 0 : l.initializer,
                    null == l ? void 0 : l.getRoot,
                    null == l ? void 0 : l.rootId,
                ]),
                s.useEffect(
                    () => () => {
                        (x.externalModel.dispose(), w.current.forEach((e) => e()));
                    },
                    [x],
                ),
                a.jsx(o.Provider, { value: x, children: c })
            );
        }
        return (
            (i.displayName = e),
            [
                i,
                function () {
                    const e = s.useContext(o);
                    if (!e) throw new Error(`hook useModel must be used within a ${i.displayName}.`);
                    return e;
                },
                { Context: o },
            ]
        );
    };
async function We(
    e,
    { root: t = document.getElementById('root'), withMedia: n = !0, fullScreen: r = !1, immediateLayout: o = !0 } = {},
) {
    var i;
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
    const s = n ? De : h.Fragment,
        u = (null == (i = null == window ? void 0 : window.engine) ? void 0 : i.whenReady) ?? Promise.resolve();
    (o && engine.enableImmediateLayout(!0),
        await u,
        document.documentElement.setAttribute('lang', m.resolve('langCode')),
        f.createRoot(t).render(a.jsx(s, { children: a.jsx(Ne, { children: e }) })),
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
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function Xe(e) {
    viewEnv.setTrackMouseOnStage(e);
}
s.forwardRef(function (e, t) {
    const n = s.useRef(null);
    return (
        s.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return te.onHitTest((t) => {
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
const Ge = { down: qe('mousedown'), up: qe('mouseup'), move: qe('mousemove') };
!(function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && Xe(!1);
    }
    function n() {
        e.enabled && Xe(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : Xe(!1);
    }
    ['down', 'up', 'move'].reduce(
        (t, n) => (
            (t[n] = (function (t) {
                return (n) => {
                    e.listeners += 1;
                    let o = !0;
                    const i = `mouse${t}`,
                        s = Ge[t]((e) => n([e, 'outside']));
                    function a(e) {
                        n([e, 'inside']);
                    }
                    return (
                        window.addEventListener(i, a),
                        r(),
                        () => {
                            o && (s(), window.removeEventListener(i, a), (e.listeners -= 1), r(), (o = !1));
                        }
                    );
                };
            })(n)),
            t
        ),
        {},
    );
})();
const Ke = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    Ye =
        (Object.keys(Ke).reduce(
            (e, t) => (
                (e[t] = () =>
                    (function (e) {
                        engine.call('PlaySound', e).catch((t) => {
                            console.error(`playSound('${e}'): `, t);
                        });
                    })(Ke[t])),
                e
            ),
            {},
        ),
        ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']),
    Je = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
function Qe(e, t, n = 1) {
    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
}
['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
const Ze = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                getBgUrl: function (e, t, n) {
                    return `url(${Qe(e, t, n)})`;
                },
                getTextureUrl: Qe,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    et = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
    tt = {
        onTextureFrozen: qe('self.onTextureFrozen'),
        onTextureReady: qe('self.onTextureReady'),
        onDomBuilt: qe('self.onDomBuilt'),
        onLoaded: qe('self.onLoaded'),
        onDisplayChanged: qe('self.onShowingStatusChanged'),
        onFocusUpdated: qe('self.onFocusChanged'),
        children: {
            onAdded: qe('children.onAdded'),
            onLoaded: qe('children.onLoaded'),
            onRemoved: qe('children.onRemoved'),
            onAttached: qe('children.onAttached'),
            onTextureReady: qe('children.onTextureReady'),
            onRequestPosition: qe('children.requestPosition'),
        },
    },
    nt = 2,
    rt = 16,
    ot = 32,
    it = 64,
    st = (e, t) => {
        const n = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: o, ...i } = t;
            return void 0 !== o
                ? viewEnv.handleViewEvent({
                      __Type: n,
                      type: e,
                      ...i,
                      arguments:
                          ((r = o),
                          Object.entries(r).map(([e, t]) => {
                              const n = 'GFValueProxy';
                              switch (typeof t) {
                                  case 'number':
                                      return { __Type: n, name: e, number: t };
                                  case 'boolean':
                                      return { __Type: n, name: e, bool: t };
                                  default:
                                      return { __Type: n, name: e, string: t.toString() };
                              }
                          })),
                  })
                : viewEnv.handleViewEvent({ __Type: n, type: e, ...i });
        }
        return viewEnv.handleViewEvent({ __Type: n, type: e });
        var r;
    },
    at = {
        close(e) {
            st('popover' === e ? nt : ot);
        },
        minimize() {
            st(it);
        },
        move(e) {
            st(rt, { isMouseEvent: !0, on: e });
        },
    };
function ut(e) {
    return viewEnv.remToPx(e);
}
const dt = (() => {
        let e = [];
        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
    })(),
    lt = function (e) {
        let t = '';
        for (let n = Je.length - 1; n >= 0; n--) for (; e >= Je[n]; ) ((t += Ye[n]), (e -= Je[n]));
        return t;
    };
const ct = Object.keys(et).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === et[t]), e), {}),
    ht = {
        set: (e, t) => {
            viewEnv.setExtraSizeRem(e, t);
        },
        get: (e, t) => {
            viewEnv.getExtraSizeRem(e, t);
        },
    },
    ft = Promise.all([
        new Promise((e) => {
            window.isDomBuilt ? e() : tt.onDomBuilt(e);
        }),
        engine.whenReady,
    ]);
const mt = {
    view: Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                addModelObserver: function (e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                },
                addPreloadTexture: function (e) {
                    viewEnv.addPreloadTexture(e);
                },
                arabic2roman: lt,
                children: Ze,
                displayStatus: et,
                displayStatusIs: ct,
                enableFullScreenModeSupported: function () {
                    viewEnv.setFullscreenModeSupported(!0);
                },
                events: tt,
                extraSize: ht,
                forceTriggerMouseMove: function () {
                    viewEnv.forceTriggerMouseMove();
                },
                freezeTextureBeforeResize: function () {
                    viewEnv.freezeTextureBeforeResize();
                },
                getBrowserTexturePath: function (e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                },
                getDisplayStatus: function () {
                    return viewEnv.getShowingStatus();
                },
                getExternalPaddingsRem: function () {
                    return viewEnv.getExternalPaddingsRem();
                },
                getFontNames: dt,
                getScale: function () {
                    return viewEnv.getScale();
                },
                getSize: function (e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                },
                getViewGlobalPosition: function (e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: ut(t.x), y: ut(t.y) };
                },
                initExternalPaddings: function (e) {
                    function t() {
                        const { top: t, right: n, bottom: r, left: o } = viewEnv.getExternalPaddingsRem();
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${o}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                },
                isEventHandled: function () {
                    return viewEnv.isEventHandled();
                },
                isFocused: function () {
                    return viewEnv.isFocused();
                },
                pxToRem: function (e) {
                    return viewEnv.pxToRem(e);
                },
                remToPx: ut,
                resize: function (e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                },
                sendEvent: at,
                setAnimateWindow: function (e, t) {
                    viewEnv.setAnimateWindow(e, t);
                },
                setEventHandled: function () {
                    return viewEnv.setEventHandled();
                },
                setInputPaddingsRem: function (e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                },
                setSidePaddingsRem: function (e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                },
                whenTutorialReady: ft,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
};
function pt() {
    const e = s.useRef(0);
    var t;
    return (
        (t = () => {
            window.cancelAnimationFrame(e.current);
        }),
        s.useEffect(() => t, []),
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
const wt = {
        root: 'Tooltipdecorator_root_a254689f',
        base: 'Tooltipdecorator_ea72f443',
        'base__theme-default': 'Tooltipdecorator_base__theme-default_a254689f',
        decorator: 'Tooltipdecorator_decorator_3580e101',
    },
    gt = h.forwardRef(function ({ children: e, className: t, theme: n = 'default', ...r }, o) {
        const i = pt(),
            d = h.useRef(null);
        var l;
        return (
            (l = () => {
                i.run(() => {
                    const e = d.current;
                    if (!e) return;
                    const t = e.scrollWidth,
                        n = e.scrollHeight;
                    mt.view.resize(t, n);
                    const r = window.getComputedStyle(e);
                    mt.view.setSidePaddingsRem({
                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                    });
                });
            }),
            s.useEffect(l, []),
            a.jsx('div', {
                ...r,
                className: u(wt.base, wt[`base__theme-${n}`], t),
                ref: function (e) {
                    ((d.current = e), 'function' == typeof o ? o(e) : o && (o.current = e));
                },
                children: a.jsx('div', { className: wt.decorator, children: e }),
            })
        );
    }),
    vt = { superCompact: 'superCompact', compact: 'compact', default: 'default', detailed: 'detailed' },
    yt = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48', x80x80: 'x80x80' },
    _t = { accent: 'accent', cooldown: 'cooldown' },
    bt = {
        root: 'FormattedValue_root_30bfaeef',
        item__x16x16: 'FormattedValue_item__x16x16_9eb36ff5',
        item__x24x24: 'FormattedValue_item__x24x24_9eb36ff5',
        item__x32x32: 'FormattedValue_item__x32x32_bd66be3c',
        item__x48x48: 'FormattedValue_item__x48x48_43bf6d1b',
        item__x80x80: 'FormattedValue_item__x80x80_c03e8347',
        part__x16x16: 'FormattedValue_part__x16x16_2186b32f',
        part__x24x24: 'FormattedValue_part__x24x24_2186b32f',
        part__x32x32: 'FormattedValue_part__x32x32_f9323fe3',
        part__x48x48: 'FormattedValue_part__x48x48_bd002d69',
        part__x80x80: 'FormattedValue_part__x80x80_dca9ec18',
        detailedSeparator: 'FormattedValue_detailedSeparator_30bfaeef',
        detailedSeparator__x16x16: 'FormattedValue_detailedSeparator__x16x16_2b8550e4',
        detailedSeparator__x24x24: 'FormattedValue_detailedSeparator__x24x24_2b8550e4',
        detailedSeparator__x32x32: 'FormattedValue_detailedSeparator__x32x32_bc7822fa',
        detailedSeparator__x48x48: 'FormattedValue_detailedSeparator__x48x48_4cb1e66b',
        detailedSeparator__x80x80: 'FormattedValue_detailedSeparator__x80x80_2c1c84ee',
    };
function xt({ size: e, preFormatted: t }) {
    var n;
    const r = [];
    for (let o = 0; o < t.items.length; ++o)
        (t.separator &&
            o > 0 &&
            r.push(a.jsx('span', { className: u(bt.detailedSeparator, bt[`detailedSeparator__${e}`]) }, 'separator')),
            r.push(
                a.jsx(
                    'span',
                    {
                        className: u(bt.item, bt[`item__${e}`]),
                        children:
                            null == (n = t.items[o])
                                ? void 0
                                : n
                                      .split(' ')
                                      .map((t, n) =>
                                          a.jsx(
                                              'span',
                                              { className: u(bt.part, bt[`part__${e}`]), children: t },
                                              `part_${n}`,
                                          ),
                                      ),
                    },
                    `item_${o}`,
                ),
            ));
    return r;
}
const Et = m.resolve('strings'),
    St = 'D',
    Rt = 'h',
    Tt = 'm',
    Pt = { [vt.compact]: [St, Rt, Tt], [vt.default]: [St, Rt, Tt], [vt.detailed]: [St, 'hh', 'mm', 'ss'] },
    Dt = {
        [vt.compact]: function (e, t) {
            var n, r;
            const o = e.length,
                i = Pt[t],
                s = { separator: !1, items: [] };
            for (let a = 0; a < o; ++a)
                if (Number(e[a]) > 0) return ((s.items = [null == (n = Mt[i[a]]) ? void 0 : n.call(Mt, e[a])]), s);
            return ((s.items = [null == (r = Mt[Tt]) ? void 0 : r.call(Mt, 1)]), s);
        },
        [vt.default]: function (e, t) {
            var n;
            let r = 0;
            const o = e.length - 1,
                i = Pt[t],
                s = { separator: !1, items: [] };
            for (; r < o && !(Number(e[r]) > 0); ++r);
            i[r] === Tt && 0 === Number(e[r])
                ? (s.items = [null == (n = Mt[Tt]) ? void 0 : n.call(Mt, 1)])
                : (s.items = [r, r + 1].map((t) => {
                      var n;
                      return null == (n = Mt[i[t]]) ? void 0 : n.call(Mt, e[t]);
                  }));
            return s;
        },
        [vt.detailed]: function (e) {
            var t;
            const [n, ...r] = e,
                o = r.join(':');
            return { separator: !0, items: Number(n) > 0 ? [null == (t = Mt[St]) ? void 0 : t.call(Mt, n), o] : [o] };
        },
    },
    Mt = {
        [St]: (e) =>
            X(
                Et.readOr('common.timer.days', () => St.toLowerCase()),
                { days: e },
            ),
        [Rt]: (e) =>
            X(
                Et.readOr('common.timer.hours', () => Rt),
                { hours: e },
            ),
        [Tt]: (e) =>
            X(
                Et.readOr('common.timer.minutes', () => Tt),
                { minutes: e },
            ),
    };
const kt = (e, t) => {
        var n;
        return null == (n = Dt[t])
            ? void 0
            : n.call(
                  Dt,
                  (function (e, t) {
                      const n = B(e);
                      return t.map((e) => q[e](n));
                  })(e, Pt[t]),
                  t,
              );
    },
    Ot = {
        root: 'Timer_root_6ee5dd6c',
        base: 'Timer_dac0a0aa',
        icon: 'Timer_icon_a61415df',
        icon__x16x16: 'Timer_icon__x16x16_5bab55e2',
        icon__accent: 'Timer_icon__accent_2cf70c3b',
        icon__cooldown: 'Timer_icon__cooldown_4a26d3f',
        icon__x24x24: 'Timer_icon__x24x24_31571381',
        icon__x32x32: 'Timer_icon__x32x32_807dde34',
        icon__x48x48: 'Timer_icon__x48x48_ae779a9e',
        icon__x80x80: 'Timer_icon__x80x80_251aafea',
        label: 'Timer_label_1565f308',
        label__x16x16: 'Timer_label__x16x16_e3ff224',
        label__x24x24: 'Timer_label__x24x24_ca748cca',
        label__x32x32: 'Timer_label__x32x32_13cccf38',
        label__x48x48: 'Timer_label__x48x48_e3a9b542',
        label__x80x80: 'Timer_label__x80x80_10a84ee6',
        label__accent: 'Timer_label__accent_ac7d4f7b',
        label__cooldown: 'Timer_label__cooldown_c2349ab9',
    };
function Nt({
    start: e,
    limit: t = 0,
    tick: n = 1,
    size: r = yt.x24x24,
    type: o = _t.accent,
    format: i = vt.default,
    autostart: d = !0,
    className: l,
    classNames: c,
}) {
    const [h] = (function (e) {
        const { type: t, tick: n, limit: r } = e,
            o = e.autostart ?? !1,
            i = e.start ?? C,
            [a, u] = s.useState({ current: i, running: o }),
            d = s.useRef(0);
        s.useEffect(
            () => (
                (d.current = window.setInterval(() => {
                    a.running
                        ? u((e) => {
                              const o = 'countdown' === t ? I(e.current, n) : U(e.current, n),
                                  i = { ...e, current: o };
                              return (
                                  O(r) &&
                                      ('countdown' === t
                                          ? W(I(o, n), r) && ((i.current = r), (i.running = !1))
                                          : H(U(o, n), r) && ((i.current = r), (i.running = !1))),
                                  i
                              );
                          })
                        : window.clearInterval(d.current);
                }, B(n))),
                () => {
                    window.clearInterval(d.current);
                }
            ),
            [r, n, a.running, t],
        );
        const l = s.useMemo(
            () => ({
                start: () => u((e) => ({ ...e, isRunning: !0 })),
                stop: () => u((e) => ({ ...e, isRunning: !1 })),
                isRunning: () => a.running,
            }),
            [a.running],
        );
        return [a.current, l];
    })(
        s.useMemo(
            () => ({
                type: 'countdown',
                start: O(e) ? e : F(e),
                limit: O(t) ? t : F(t),
                tick: O(n) ? n : F(n),
                autostart: d,
            }),
            [d, t, e, n],
        ),
    );
    return a.jsxs('div', {
        className: u(Ot.base, l),
        children: [
            a.jsx('div', { className: u(Ot.icon, Ot[`icon__${r}`], Ot[`icon__${o}`], null == c ? void 0 : c.icon) }),
            i !== vt.superCompact &&
                a.jsx('div', {
                    className: u(Ot.label, Ot[`label__${r}`], Ot[`label__${o}`], null == c ? void 0 : c.label),
                    children: a.jsx(xt, { size: r, preFormatted: kt(h, i) }),
                }),
        ],
    });
}
((Nt.format = vt), (Nt.size = yt), (Nt.type = _t));
export { Nt as T, We as a, gt as b, He as i, se as n, m as r };
