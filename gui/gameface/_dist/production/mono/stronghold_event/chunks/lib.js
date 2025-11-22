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
    j as c,
    e as u,
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
        return void 0 === o ? ('silent' !== n && y(`Resource not found: ${r}`, n), t()) : o;
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
    v = { fractional: 0, woZeroDigits: 1 },
    E = Object.keys(x),
    S = Object.keys(v);
const T = { full: _.FullTime, short: _.ShortTime };
const k = {
    isNumberFormat: function (e) {
        return e in x;
    },
    formatNumber: function (e, t) {
        return window.systemLocale.getNumberFormat(t, x[e]);
    },
    numberFormats: E,
    isRealFormat: function (e) {
        return e in v;
    },
    formatReal: function (e, t) {
        return window.systemLocale.getRealFormat(t, v[e]);
    },
    realFormats: S,
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
class N {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : w(this.prefix, e),
            o = F(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== n && y(`Resource not found: ${r}`, n), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : w(this.prefix, e),
            n = F(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const o = e.startsWith('R.strings') ? e : w(this.prefix, e),
            s = F(o, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== r && y(`Resource not found: ${o}`, r), n()) : s;
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
        const r = e.startsWith('R.videos') ? e : w(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && y(`Resource not found: ${e}`, n), t()) : o;
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
function j(e) {
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
g.register({
    strings: i(() => new N()).singleton(),
    images: i(() => new b(window.R.images.gui.maps.icons)).singleton(),
    atlases: i(() => new b(window.R.atlases)).singleton(),
    videos: i(() => new D(window.R.videos)).singleton(),
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
                    : y(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: o(R.strings.settings.LANGUAGE_CODE()),
    intl: o(k),
});
const O = Symbol('Duration');
function $(e) {
    return 'object' == typeof e && null !== e && e[O] === O;
}
function L(e) {
    return { [O]: O, value: e, unit: 'millis' };
}
const M = L(0);
function A(e) {
    return { [O]: O, value: e, unit: 'seconds' };
}
const C = {
        millis: (e) => e,
        seconds: (e) => 1e3 * e,
        minutes: (e) => 1e3 * e * 60,
        hours: (e) => 1e3 * e * 60 * 60,
        days: (e) => 1e3 * e * 60 * 60 * 24,
        weeks: (e) => 1e3 * e * 60 * 60 * 24 * 7,
    },
    P = (e) => e / 1e3,
    z = (e) => e / 1e3 / 60,
    B = (e) => e / 1e3 / 60 / 60,
    I = (e) => e / 1e3 / 60 / 60 / 24,
    W = (e) => e / 1e3 / 60 / 60 / 24 / 7;
function U(e) {
    return (0, C[e.unit])(e.value);
}
const V = j(function (e, t) {
        return L(U(e) + U(t));
    }),
    H = j(function (e, t) {
        return L(U(e) - U(t));
    }),
    q = j(function (e, t) {
        return U(e) > U(t);
    }),
    X = j(function (e, t) {
        return U(e) < U(t);
    }),
    K = {
        DD: (e) => Math.floor(I(e)).toString().padStart(2, '0'),
        D: (e) => Math.floor(I(e)).toString(),
        WW: (e) => Math.floor(W(e)).toString().padStart(2, '0'),
        W: (e) => Math.floor(W(e)).toString(),
        hh: (e) =>
            Math.floor(B(e) % 24)
                .toString()
                .padStart(2, '0'),
        mm: (e) =>
            Math.floor(z(e) % 60)
                .toString()
                .padStart(2, '0'),
        ss: (e) =>
            Math.floor(P(e) % 60)
                .toString()
                .padStart(2, '0'),
        h: (e) => Math.floor(B(e) % 24).toString(),
        m: (e) => Math.floor(z(e) % 60).toString(),
        s: (e) => Math.floor(P(e) % 60).toString(),
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
function G(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
function Z(e, t, n = !0) {
    return window.regionalDateTime.getRegionalDateTime(e, t, n);
}
function Y(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function J(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const Q = Y('clientResized'),
    ee = Y('self.onScaleUpdated'),
    te = { down: Y('mousedown'), up: Y('mouseup'), move: Y('mousemove') };
function ne(e) {
    engine.call('PlaySound', e);
}
!(function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && J(!1);
    }
    function n() {
        e.enabled && J(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  J(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : J(!1);
    }
    ['down', 'up', 'move'].reduce(
        (t, n) => (
            (t[n] = (function (t) {
                return (n) => {
                    e.listeners += 1;
                    const o = `mouse${t}`,
                        s = te[t]((e) => n([e, 'outside']));
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
const re = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    oe = { ...Object.keys(re).reduce((e, t) => ((e[t] = () => ne(re[t])), e), {}), sound: ne },
    se = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    ie = {
        onTextureFrozen: Y('self.onTextureFrozen'),
        onTextureReady: Y('self.onTextureReady'),
        onDomBuilt: Y('self.onDomBuilt'),
        onLoaded: Y('self.onLoaded'),
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
        onDisplayChanged: Y('self.onShowingStatusChanged'),
        onFocusUpdated: Y('self.onFocusChanged'),
        children: {
            onAdded: Y('children.onAdded'),
            onLoaded: Y('children.onLoaded'),
            onRemoved: Y('children.onRemoved'),
            onAttached: Y('children.onAttached'),
            onTextureReady: Y('children.onTextureReady'),
            onRequestPosition: Y('children.requestPosition'),
        },
    };
Object.keys(se).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === se[t]), e), {});
class ae {
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
const ce = (e) => (0 === e ? window : window.subViews.get(e));
function ue(
    { initializer: e = !0, rootId: t = 0, getRoot: n = ce, context: r = 'model' } = {},
    { name: o = 'DataLayer' } = {},
) {
    const s = new Map(),
        i = { subscribersNotified: new ae() },
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
function le(e, t) {
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
function de() {}
function he() {
    return !1;
}
function fe(e, t) {
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
const me = {
    NONE: 'NONE',
    ...((pe = [
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
    pe.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...fe(
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
    ...fe(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...fe(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...fe(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...fe(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...fe(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...fe(['Up', 'Down'], 'Page'),
    ...fe(['Left', 'Right'], 'Bracket'),
};
var pe;
['ko', 'no'].includes(g.resolve('langCode'));
class ge {
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
const we = new Set(['zh_cn', 'zh_sg', 'zh_tw']),
    ye = 'ja';
const be = a.createContext(void 0);
const _e = 'extraSmall',
    xe = {
        extraSmall: { weight: 0, name: _e, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var ve,
    Ee,
    Se,
    Re =
        (((ve = Re || {})[(ve.Small = xe.small.width)] = 'Small'),
        (ve[(ve.Medium = xe.medium.width)] = 'Medium'),
        (ve[(ve.Large = xe.large.width)] = 'Large'),
        (ve[(ve.ExtraLarge = xe.extraLarge.width)] = 'ExtraLarge'),
        ve),
    Te =
        (((Ee = Te || {})[(Ee.Small = xe.small.width)] = 'Small'),
        (Ee[(Ee.Medium = xe.medium.width)] = 'Medium'),
        (Ee[(Ee.Large = xe.large.width)] = 'Large'),
        (Ee[(Ee.ExtraLarge = xe.extraLarge.width)] = 'ExtraLarge'),
        Ee),
    ke =
        (((Se = ke || {})[(Se.Small = xe.small.height)] = 'Small'),
        (Se[(Se.Medium = xe.medium.height)] = 'Medium'),
        (Se[(Se.Large = xe.large.height)] = 'Large'),
        (Se[(Se.ExtraLarge = xe.extraLarge.height)] = 'ExtraLarge'),
        Se);
const Fe = Object.values(xe);
function Ne(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        o = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...o])).join(' ');
}
const De = () => {
        return ((e = 1), viewEnv.remToPx(e));
        var e;
    },
    je = () => {
        const e = (function (e = 'px') {
            return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
        })('rem');
        return (function (e, t, n) {
            const r = Fe.reduce(
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
                i = s.names[s.names.length - 1] ?? _e,
                a = xe[i],
                c = r.width.names,
                u = r.height.names,
                l = c[c.length - 1] ?? _e,
                d = u[u.length - 1] ?? _e,
                h = { width: xe[l].width, height: xe[d].height };
            return {
                mediaClass: Ne(o, r),
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
        })(e.width, e.height, De());
    };
function Oe({ children: e }) {
    const [t, n] = a.useState(je);
    return (
        a.useLayoutEffect(() => {
            function e() {
                n(je);
            }
            e();
            const t = Q(e),
                r = ee(e);
            return () => {
                (t(), r());
            };
        }, []),
        c.jsx(be.Provider, { value: t, children: e })
    );
}
function $e() {
    return (function () {
        const e = a.useContext(be);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function Le({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: o } = $e();
    return c.jsx('div', { className: u(t, 'media-wrapper', r, o && 'media-upscale'), ...n, children: e });
}
function Me({ children: e, ...t }) {
    return c.jsx(Oe, { children: c.jsx(Le, { ...t, children: e }) });
}
const Ae = [];
function Ce(e) {
    const t = a.useRef(e);
    return (
        a.useLayoutEffect(() => {
            t.current = e;
        }),
        a.useCallback((...e) => (0, t.current)(...e), Ae)
    );
}
const Pe = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new ge();
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
                if (e === me.NONE) return he;
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
    ze = a.createContext(void 0);
function Be(e) {
    const t = a.useMemo(Pe, []),
        n = a.useMemo(Pe, []);
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
    return c.jsx(ze.Provider, { value: r, children: e.children });
}
const Ie = {
    click: We('play'),
    'hot-key': We('play'),
    'mouse-enter': We('highlight'),
    increaseAmount: We('cons_ammo_single_plus'),
    decreaseAmount: We('cons_ammo_single_minus'),
    increaseAmountRoll: We('cons_ammo_roll_plus'),
    decreaseAmountRoll: We('cons_ammo_roll_minus'),
    close: We('cancelcloseno'),
    'show-context-menu': We('tabb'),
};
function We(e) {
    return () => {
        oe.sound(e);
    };
}
const Ue = a.createContext(null);
function Ve({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const o = a.useMemo(() => ({ ...Ie, ...t }), [t]),
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
    return c.jsx(Ue.Provider, { value: s, children: r });
}
const He = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    qe = new Set(['number', 'string', 'boolean', 'bigint']),
    Xe = new Set(['Dict']);
function Ke(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var o, s;
    const i = e,
        a = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (He.has(a)) return i;
    if (null === i) return i;
    const c = { depth: n + 1, maxDepth: r };
    if (Array.isArray(i)) return i.map((e) => Ke(e, c));
    if ('object' === a) {
        const r = (null == (o = i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => Ke(e, c));
        if ('CoherentArrayProxy' === r) return e.map((e) => Ke(e.value, c));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in i) {
                    const n = i[t];
                    qe.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in i) {
                    const n = i[t],
                        r = (null == (s = null == i ? void 0 : i.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                    Xe.has(r) || (e[t] = Ke(n, c));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(i)) a[e] = Ke(i[e], c);
        return a;
    }
    return (console.error('Incorrect value to clone model', i), i);
}
const Ge = { deep: !1, equals: he },
    Ze = { cloneItem: !0 },
    Ye = { shallow: !1 };
class Je {
    constructor(e, t = Ze) {
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
            r[t] = l.box(this.takeItem(e, t), Ge);
        }
        ((this._keys = l.set(new Set(o))), (this._data = l.box(r, Ge)));
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
                : null !== s && ((n[o] = l.box(s, Ge)), this._keys.add(o), this.set(n));
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
        return this.options.cloneItem ? Ke(n, Ye) : n;
    }
    untrackedData() {
        return h(() => this._data.get());
    }
}
const Qe = a.createContext({ mode: 'real' }),
    et = { equals: he, deep: !1 };
function tt(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        d(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const o = (o, s, i = et) => {
            const a = l.box(o(n(s)), i);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(o(e))), s), a);
        },
        s = (o, s) => {
            const i = new Je(n(o), s);
            return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), o), i);
        },
        i = (o, s) => {
            const i = l.box(n(o) ?? s, et);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), o), i);
        };
    return {
        dict: s,
        dictRef: (e, t) => s(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => o(Ke, e),
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
                    c = a.reduce((e, [t, n]) => ((e[n] = l.box(i[t], {})), e), {});
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
const nt =
    (e = 'DataLayerProvider') =>
    (t, n, r) => {
        const o = a.createContext(null);
        function s(s) {
            var i;
            const { mode: u, options: l, children: d, mocks: h } = s,
                f = a.useContext(Qe),
                m = u ?? f.mode,
                p = h ?? f.mocks,
                g = a.useRef([]),
                w = null == (i = null == r ? void 0 : r.useRequires) ? void 0 : i.call(r),
                y = Ce((o, i, a) => {
                    var c;
                    const u =
                            'real' !== o && a
                                ? (function (e, t) {
                                      return {
                                          subscribe: () => 0,
                                          readSafeByPath: e,
                                          readByPath: e,
                                          createCallback: (n, r) => {
                                              const o = e(le(r, t));
                                              return (...e) => {
                                                  o(n(...e));
                                              };
                                          },
                                          createCallbackNoArgs: (n) => {
                                              const r = e(le(n, t));
                                              return () => {
                                                  r();
                                              };
                                          },
                                          dispose: () => {},
                                          unsubscribe: () => {},
                                          events: { subscribersNotified: new ae() },
                                      };
                                  })(a.getter, i)
                                : ue(i, { name: e }),
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
                            observableModel: tt(u, o, l),
                            cleanup: d,
                        }),
                        m = { ...h, mode: o, model: f, externalModel: u, cleanup: d, requires: w },
                        p = 'mocks' === o && (null == a ? void 0 : a.controls) ? a.controls(m) : {};
                    return { model: f, controls: { ...(null == n ? void 0 : n(m)), ...p }, externalModel: u, mode: o };
                }),
                b = a.useRef(!1),
                [_, x] = a.useState(m);
            a.useEffect(() => {
                x(m);
            }, [m]);
            const [v, E] = a.useState(() => y(_, l, p));
            return (
                a.useEffect(() => {
                    b.current ? E(y(_, l, p)) : (b.current = !0);
                }, [
                    y,
                    p,
                    _,
                    null == l ? void 0 : l.context,
                    null == l ? void 0 : l.initializer,
                    null == l ? void 0 : l.getRoot,
                    null == l ? void 0 : l.rootId,
                ]),
                a.useEffect(
                    () => () => {
                        (v.externalModel.dispose(), g.current.forEach((e) => e()));
                    },
                    [v],
                ),
                c.jsx(o.Provider, { value: v, children: d })
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
    };
async function rt(
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
    const i = n ? Me : f.Fragment,
        a = (null == (s = null == window ? void 0 : window.engine) ? void 0 : s.whenReady) ?? Promise.resolve();
    (o && engine.enableImmediateLayout(!0),
        await a,
        document.documentElement.setAttribute('lang', g.resolve('langCode')),
        m.createRoot(t).render(c.jsx(i, { children: c.jsx(Be, { children: e }) })),
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
function ot(e) {
    return c.jsx(c.Fragment, { children: e.children });
}
function st(e) {
    return c.jsx(ot, {
        children: c.jsx(Ve, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
function it(e, t, n) {
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
            r = p(n.className, n.cva),
            o = n.element,
            i = a.forwardRef(function (e, t) {
                return a.createElement(o, { ...('function' == typeof o ? e : at(s, e)), ref: t, className: r(e) });
            });
        return ((i.displayName = e), n.cva && (i.cva = n.cva), i);
    }
    const i = p(t, n),
        u = a.forwardRef(function (t, n) {
            return c.jsx('div', { 'data-name': e, ...at(s, t), ref: n, className: i(t) });
        });
    return ((u.displayName = e), u);
}
function at(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
a.forwardRef(function (e, t) {
    const n = a.useRef(null);
    return (
        a.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return ie.onHitTest((t) => {
                    const n = e.getBoundingClientRect();
                    return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                });
        }, []),
        c.jsx('div', {
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
const ct = 'Tooltip_decorator_b3486d4e',
    ut = it('Base', 'Tooltip_6d997cee'),
    lt = it('Decorator', ct),
    dt = a.forwardRef(function ({ children: e, ...t }, n) {
        const r = a.useRef(null);
        return (
            ((e, t, n = !0) => {
                const r = Ce((e) => {
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
            c.jsx(ut, {
                ...t,
                ref: function (e) {
                    ((r.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                children: e,
            })
        );
    });
dt.Decorator = lt;
const ht = 1,
    ft = 2,
    mt = 3;
const pt = {
        COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
        base: 'FormatText_db904f12',
        base__fullSize: 'FormatText_base__fullSize_a514958e',
        nowrap: 'FormatText_nowrap_ff69eca3',
    },
    gt = new Set((null == (e = pt.COLORS) ? void 0 : e.split(', ')) ?? []);
let wt = 0;
function yt() {
    return ++wt;
}
const bt =
    /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
function _t(e) {
    const t = g.resolve('langCode');
    return (function (e, t, n) {
        return we.has(t) || t === ye
            ? e.map(n)
            : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
    })(
        (function (e, t) {
            return we.has(t)
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
                : t === ye
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
        (e, t) => e && c.jsx('span', { children: e }, `${e}${t}`),
    );
}
function xt(e) {
    return Array.isArray(e)
        ? (function (e) {
              const t = [];
              for (let n = 0; n < e.length; n++) {
                  const r = e[n],
                      o = e[n + 1];
                  if ('string' != typeof o || !bt.test(o)) {
                      t.push(xt(r));
                      continue;
                  }
                  const s = _t(o.slice(1));
                  (t.push(
                      c.jsxs(
                          a.Fragment,
                          { children: [c.jsxs('span', { className: pt.nowrap, children: [xt(r), o[0]] }), s] },
                          yt(),
                      ),
                  ),
                      (n += 1));
              }
              return t;
          })(e)
        : 'string' == typeof e
          ? c.jsx(a.Fragment, { children: _t(e) }, yt())
          : e;
}
const vt = {
    class: function (e, ...t) {
        return c.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            yt(),
        );
    },
    colorLegacy: function (e, t) {
        const n = yt();
        return gt.has(String(t))
            ? c.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : c.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: xt,
    style: function (e, ...t) {
        return c.jsx(
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
            yt(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function Et(e, t, n, r) {
    const o = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...o] = n.slice(1, -1).split(' ');
                return t ? Et(e, t, o, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        s = r[t];
    return s ? s(e, ...o) : (console.error(`Function ${t} is not registered`), e);
}
function St(e, t, n) {
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
        return r ? Et(e, r, o, n) : e;
    }, t);
}
function Rt(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function Tt(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !Rt(e[r]); ) r++;
            const o = e.slice(n + 1, r),
                s = t[o];
            if (s) return Tt(e.replace(`$${o}`, String(s)), t);
        }
    }
    return e;
}
function kt(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = Tt(e[r], t);
    return n;
}
const Ft = ['number', 'string', 'undefined'];
function Nt(e, t, n = {}, r = !0) {
    r && (wt = 0);
    const o = [];
    function s(e) {
        if (Ft.includes(typeof e)) {
            const t = o.at(-1);
            if ('string' == typeof t) return void (o[o.length - 1] = t + e);
        }
        o.push(e);
    }
    for (const i of e)
        if (i.type === ht) s(i.value);
        else if (i.type === mt)
            null === n[i.name] || Ft.includes(typeof n[i.name])
                ? s(n[i.name] ?? `{{${i.name}}}`)
                : o.push(c.jsx(a.Fragment, { children: n[i.name] }, `var-${i.name}-${i.instanceId}`));
        else if (i.type === ft) {
            const e = Nt(i.children, t, n, !1),
                r = St(kt(i.attrs, n), e, t);
            o.push(r);
        }
    return o;
}
function Dt(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function jt(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function Ot(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const $t = { start: '{{', end: '}}' },
    Lt = a.memo(function (e) {
        const {
                brackets: t = $t,
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
                              })(e, Ot, Dt, jt);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            m = a.useMemo(() => (e.formatters ? { ...vt, ...e.formatters } : vt), [e.formatters]),
            p = a.useMemo(
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
                                        ? r[r.length - 1].node.children.push({ type: ht, value: o })
                                        : n.push({ type: ht, value: o }),
                                    (o = '')),
                                    (s = !0),
                                    (c += t.start.length - 1));
                            else if (u === t.end[0] && e.slice(c, c + t.end.length) === t.end) {
                                ((s = !1), (c += t.end.length - 1));
                                const e = i.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        o = { type: ft, attrs: t.split('|'), instanceId: ++a, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(o) : n.push(o),
                                        r.push({ node: o, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: mt, instanceId: ++a, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                i = '';
                            } else s ? (i += u) : (o += u);
                        }
                        o &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: ht, value: o })
                                : n.push({ type: ht, value: o }));
                        return n;
                    })(d ? `{{@ split}}${f}{{/}}` : f, t),
                [t, f, d],
            ),
            g = a.useMemo(() => Nt(p, m, e.params), [p, m, e.params]),
            w = u(pt.base, s && pt.base__fullSize, h.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              c.jsx('p', {
                  ...h,
                  className: w,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: g,
              }))
            : c.jsx('span', { ...h, className: w, children: g });
    }),
    Mt = () => {};
function At(e) {
    const t = e;
    return a.forwardRef(function (e, n) {
        const r = (function (e, t) {
                return (function (e, t, n) {
                    return n ? e.breaks.reduce((e, t) => (n[t] ? { ...e, ...n[t] } : e), t) : t;
                })($e(), e, t);
            })(e, e.adaptive),
            { path: o, ...s } = r,
            i = r.images ?? g.resolve('images'),
            a = { ...s, ref: n };
        {
            const e = o ? i.readOr(o, Mt, 'warn') : void 0;
            return e ? c.jsx(t, { ...a, src: e }) : c.jsx(t, { ...a, unknown: !0 });
        }
    });
}
const Ct = {
        background:
            'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
        backgroundSize: '20rem 20rem',
        backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
        backgroundColor: '#000',
    },
    Pt = At(
        a.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: n,
                    fit: r,
                    position: o,
                    width: s,
                    src: i,
                    height: a,
                    unselectable: u,
                    unknown: l,
                    unknownStyle: d = Ct,
                    ...h
                } = e;
                return c.jsx('div', { ...h, ref: t, style: { width: e.width, height: e.height, ...d, ...e.style } });
            }
            const {
                repeat: n,
                fit: r,
                position: o,
                width: s,
                height: i,
                unknownStyle: a,
                unknown: u,
                unselectable: l,
                ...d
            } = e;
            return c.jsx('div', {
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
At(
    a.forwardRef(function (e, t) {
        const { width: n, height: r, src: o, unselectable: s, unknown: i, unknownStyle: a = Ct, ...u } = e;
        return e.unknown
            ? c.jsx('div', { ...u, style: { width: e.width, height: e.height, ...a } })
            : c.jsx('img', { ...u, ref: t, src: o, width: n, height: r });
    }),
);
const zt = { superCompact: 'superCompact', compact: 'compact', default: 'default', detailed: 'detailed' },
    Bt = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48', x80x80: 'x80x80' },
    It = { accent: 'accent', cooldown: 'cooldown' },
    Wt = {
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
function Ut({ size: e, preFormatted: t }) {
    var n;
    const r = [];
    for (let o = 0; o < t.items.length; ++o)
        (t.separator &&
            o > 0 &&
            r.push(c.jsx('span', { className: u(Wt.detailedSeparator, Wt[`detailedSeparator__${e}`]) }, 'separator')),
            r.push(
                c.jsx(
                    'span',
                    {
                        className: u(Wt.item, Wt[`item__${e}`]),
                        children:
                            null == (n = t.items[o])
                                ? void 0
                                : n
                                      .split(' ')
                                      .map((t, n) =>
                                          c.jsx(
                                              'span',
                                              { className: u(Wt.part, Wt[`part__${e}`]), children: t },
                                              `part_${n}`,
                                          ),
                                      ),
                    },
                    `item_${o}`,
                ),
            ));
    return r;
}
const Vt = g.resolve('strings'),
    Ht = 'D',
    qt = 'h',
    Xt = 'm',
    Kt = { [zt.compact]: [Ht, qt, Xt], [zt.default]: [Ht, qt, Xt], [zt.detailed]: [Ht, 'hh', 'mm', 'ss'] },
    Gt = {
        [zt.compact]: function (e, t) {
            var n, r;
            const o = e.length,
                s = Kt[t],
                i = { separator: !1, items: [] };
            for (let a = 0; a < o; ++a)
                if (Number(e[a]) > 0) return ((i.items = [null == (n = Zt[s[a]]) ? void 0 : n.call(Zt, e[a])]), i);
            return ((i.items = [null == (r = Zt[Xt]) ? void 0 : r.call(Zt, 1)]), i);
        },
        [zt.default]: function (e, t) {
            var n;
            let r = 0;
            const o = e.length - 1,
                s = Kt[t],
                i = { separator: !1, items: [] };
            for (; r < o && !(Number(e[r]) > 0); ++r);
            s[r] === Xt && 0 === Number(e[r])
                ? (i.items = [null == (n = Zt[Xt]) ? void 0 : n.call(Zt, 1)])
                : (i.items = [r, r + 1].map((t) => {
                      var n;
                      return null == (n = Zt[s[t]]) ? void 0 : n.call(Zt, e[t]);
                  }));
            return i;
        },
        [zt.detailed]: function (e) {
            var t;
            const [n, ...r] = e,
                o = r.join(':');
            return { separator: !0, items: Number(n) > 0 ? [null == (t = Zt[Ht]) ? void 0 : t.call(Zt, n), o] : [o] };
        },
    },
    Zt = {
        [Ht]: (e) =>
            G(
                Vt.readOr('common.timer.days', () => Ht.toLowerCase()),
                { days: e },
            ),
        [qt]: (e) =>
            G(
                Vt.readOr('common.timer.hours', () => qt),
                { hours: e },
            ),
        [Xt]: (e) =>
            G(
                Vt.readOr('common.timer.minutes', () => Xt),
                { minutes: e },
            ),
    };
const Yt = (e, t) => {
        var n;
        return null == (n = Gt[t])
            ? void 0
            : n.call(
                  Gt,
                  (function (e, t) {
                      const n = U(e);
                      return t.map((e) => K[e](n));
                  })(e, Kt[t]),
                  t,
              );
    },
    Jt = {
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
function Qt({
    start: e,
    limit: t = 0,
    tick: n = 1,
    size: r = Bt.x24x24,
    type: o = It.accent,
    format: s = zt.default,
    autostart: i = !0,
    className: l,
    classNames: d,
}) {
    const [h] = (function (e) {
        const { type: t, tick: n, limit: r } = e,
            o = e.autostart ?? !1,
            s = e.start ?? M,
            [i, c] = a.useState({ current: s, running: o }),
            u = a.useRef(0);
        a.useEffect(
            () => (
                (u.current = window.setInterval(() => {
                    i.running
                        ? c((e) => {
                              const o = 'countdown' === t ? H(e.current, n) : V(e.current, n),
                                  s = { ...e, current: o };
                              return (
                                  $(r) &&
                                      ('countdown' === t
                                          ? X(H(o, n), r) && ((s.current = r), (s.running = !1))
                                          : q(V(o, n), r) && ((s.current = r), (s.running = !1))),
                                  s
                              );
                          })
                        : window.clearInterval(u.current);
                }, U(n))),
                () => {
                    window.clearInterval(u.current);
                }
            ),
            [r, n, i.running, t],
        );
        const l = a.useMemo(
            () => ({
                start: () => c((e) => ({ ...e, isRunning: !0 })),
                stop: () => c((e) => ({ ...e, isRunning: !1 })),
                isRunning: () => i.running,
            }),
            [i.running],
        );
        return [i.current, l];
    })(
        a.useMemo(
            () => ({
                type: 'countdown',
                start: $(e) ? e : A(e),
                limit: $(t) ? t : A(t),
                tick: $(n) ? n : A(n),
                autostart: i,
            }),
            [i, t, e, n],
        ),
    );
    return c.jsxs('div', {
        className: u(Jt.base, l),
        children: [
            c.jsx('div', { className: u(Jt.icon, Jt[`icon__${r}`], Jt[`icon__${o}`], null == d ? void 0 : d.icon) }),
            s !== zt.superCompact &&
                c.jsx('div', {
                    className: u(Jt.label, Jt[`label__${r}`], Jt[`label__${o}`], null == d ? void 0 : d.label),
                    children: c.jsx(Ut, { size: r, preFormatted: Yt(h, s) }),
                }),
        ],
    });
}
((Qt.format = zt), (Qt.size = Bt), (Qt.type = It));
export { _ as D, Lt as F, Pt as I, Qt as T, st as U, rt as a, dt as b, Z as g, nt as i, de as n, g as r };
