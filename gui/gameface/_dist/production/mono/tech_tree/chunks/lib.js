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
function b(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function v(e, t) {
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
class _ {
    constructor(e = window.R.images, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.images') ? e : b(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && v(`Resource not found: ${r}`, n), t()) : o;
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
var E = ((e) => (
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
))(E || {});
const x = { integral: 0, gold: 1 },
    k = { fractional: 0, woZeroDigits: 1 },
    S = Object.keys(x),
    D = Object.keys(k);
const A = { full: E.FullTime, short: E.ShortTime };
const N = {
    isNumberFormat: function (e) {
        return e in x;
    },
    formatNumber: function (e, t) {
        return window.systemLocale.getNumberFormat(t, x[e]);
    },
    numberFormats: S,
    isRealFormat: function (e) {
        return e in k;
    },
    formatReal: function (e, t) {
        return window.systemLocale.getRealFormat(t, k[e]);
    },
    realFormats: D,
    formatDateTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    dateTimeFormats: E,
    formatTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    timeFormats: Object.keys(A),
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
class C {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : b(this.prefix, e),
            o = T(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== n && v(`Resource not found: ${r}`, n), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : b(this.prefix, e),
            n = T(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const o = e.startsWith('R.strings') ? e : b(this.prefix, e),
            s = T(o, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== r && v(`Resource not found: ${o}`, r), n()) : s;
    }
    pluralOrEmpty(e, t, n = 'warn') {
        return this.pluralOr(e, t, () => '', n);
    }
}
class I {
    constructor(e = window.R.videos, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.videos') ? e : b(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && v(`Resource not found: ${e}`, n), t()) : o;
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
    return e.replaceAll('-', '_');
}
function O(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function F(e) {
    viewEnv.setTrackMouseOnStage(e);
}
y.register({
    strings: i(() => new C()).singleton(),
    images: i(() => new _(window.R.images.gui.maps.icons)).singleton(),
    atlases: i(() => new _(window.R.atlases)).singleton(),
    videos: i(() => new I(window.R.videos)).singleton(),
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
                    : v(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: o(R.strings.settings.LANGUAGE_CODE()),
    intl: o(N),
});
const M = O('clientResized'),
    L = O('self.onScaleUpdated'),
    $ = { down: O('mousedown'), up: O('mouseup'), move: O('mousemove') };
function P(e) {
    engine.call('PlaySound', e);
}
!(function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && F(!1);
    }
    function n() {
        e.enabled && F(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  F(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : F(!1);
    }
    ['down', 'up', 'move'].reduce(
        (t, n) => (
            (t[n] = (function (t) {
                return (n) => {
                    e.listeners += 1;
                    const o = `mouse${t}`,
                        s = $[t]((e) => n([e, 'outside']));
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
const B = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    z = { ...Object.keys(B).reduce((e, t) => ((e[t] = () => P(B[t])), e), {}), sound: P },
    U = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    W = {
        onTextureFrozen: O('self.onTextureFrozen'),
        onTextureReady: O('self.onTextureReady'),
        onDomBuilt: O('self.onDomBuilt'),
        onLoaded: O('self.onLoaded'),
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
        onDisplayChanged: O('self.onShowingStatusChanged'),
        onFocusUpdated: O('self.onFocusChanged'),
        children: {
            onAdded: O('children.onAdded'),
            onLoaded: O('children.onLoaded'),
            onRemoved: O('children.onRemoved'),
            onAttached: O('children.onAttached'),
            onTextureReady: O('children.onTextureReady'),
            onRequestPosition: O('children.requestPosition'),
        },
    },
    H = 1,
    V = 4;
function q(e) {
    switch (typeof e) {
        case 'number':
            return { number: e };
        case 'boolean':
            return { bool: e };
        case 'undefined':
            return;
        case 'string':
            return { string: e };
        default:
            return void (null !== e && console.warn('Unsupported argument type', typeof e));
    }
}
const X = (e) => {
        const t = [];
        for (const [n, r] of Object.entries(e)) {
            const e = q(r);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
        }
        return t;
    },
    G = (e, t) => {
        const n = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...o } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: n, type: e, ...o, arguments: X(r) })
                : viewEnv.handleViewEvent({ __Type: n, type: e, ...o });
        }
        return viewEnv.handleViewEvent({ __Type: n, type: e });
    },
    K = new Map(),
    Z = new Map(),
    J = {
        tooltip: {
            open(e, t, n = 0, r) {
                (G(H, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    K.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (G(H, { contentID: t, decoratorID: n, targetID: e, on: !1 }), K.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(K.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
        contextMenu: {
            open(e, t, n = 0, r) {
                (G(V, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    Z.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (G(V, { contentID: t, decoratorID: n, targetID: e, on: !1, isMouseEvent: !1 }), Z.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(Z.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
    };
function Y(e) {
    viewEnv.setContentReady(e);
}
Object.keys(U).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === U[t]), e), {});
class Q {
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
const ee = (e) => (0 === e ? window : window.subViews.get(e));
function te(
    { initializer: e = !0, rootId: t = 0, getRoot: n = ee, context: r = 'model' } = {},
    { name: o = 'DataLayer' } = {},
) {
    const s = new Map(),
        i = { subscribersNotified: new Q() },
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
function ne(e, t) {
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
function re() {}
function oe() {
    return !1;
}
function se(e) {
    return 'function' == typeof e;
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
const ie = { ESCAPE: 27, ARROW_UP: 38, ARROW_DOWN: 40 };
function ae(e, t) {
    return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
}
const ue = {
    NONE: 'NONE',
    ...((ce = [
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
    ce.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...ae(
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
    ...ae(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...ae(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...ae(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...ae(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...ae(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...ae(['Up', 'Down'], 'Page'),
    ...ae(['Left', 'Right'], 'Bracket'),
};
var ce;
function le(e) {
    return 'number' == typeof e
        ? (function (e) {
              return window.systemInput.getKeyName(e);
          })(e)
        : e;
}
function de(e, t) {
    e || console.error(t || 'Assertion failed');
}
function he(e, t, n) {
    return 'function' == typeof t ? fe(0, e, t) : (de(void 0 !== n, 'fn must be defined'), fe(e, t, n));
}
function fe(e, t, n) {
    const r = new Array(t - e);
    for (let o = e; o < t; o++) r[o] = n(o);
    return r;
}
de.log = function (e, t) {
    e || console.error(t || 'Assertion failed');
};
const me = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    pe = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
    ge = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
    we = ['ko', 'no'].includes(y.resolve('langCode'));
function ye(e) {
    return e <= 0
        ? (console.error('Arabic value must be greater than zero.'), String(e))
        : we
          ? String(e)
          : (function (e) {
                if (e <= 10) return ge[e] ?? String(e);
                let t = '';
                for (let n = pe.length - 1; n >= 0; n--) {
                    let r = pe[n];
                    for (; void 0 !== r && e >= r; ) ((t += me[n]), (e -= r));
                }
                return t;
            })(e);
}
class be {
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
function ve(e, t, n = -1) {
    return _e(e, t, n);
}
function _e(e, t, n, r, o) {
    if (e === t) return 0 !== e || 1 / Number(e) == 1 / Number(t);
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    const s = typeof e;
    if ('function' !== s && 'object' !== s && 'object' != typeof t) return !1;
    const i = toString.call(e);
    if (i !== toString.call(t)) return !1;
    switch (i) {
        case '[object RegExp]':
        case '[object String]':
            return String(e) === String(t);
        case '[object Number]':
            return Number(e) != Number(e)
                ? Number(t) != Number(t)
                : 0 === Number(e)
                  ? 1 / Number(e) == 1 / Number(t)
                  : Number(e) === Number(t);
        case '[object Date]':
        case '[object Boolean]':
            return Number(e) === Number(t);
        case '[object Symbol]':
            return 'undefined' != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
        case '[object Map]':
        case '[object Set]':
            n >= 0 && n++;
    }
    const a = Ee(e),
        u = Ee(t),
        c = Array.isArray(a) && Array.isArray(u);
    if (!c) {
        if ('object' != typeof a || 'object' != typeof u) return !1;
        const e = a.constructor,
            t = u.constructor;
        if (
            e !== t &&
            !(se(e) && e instanceof e && se(t) && t instanceof t) &&
            'constructor' in a &&
            'constructor' in u
        )
            return !1;
    }
    if (0 === n) return !1;
    (n < 0 && (n = -1), (o = o || []));
    let l = (r = r || []).length;
    for (; l--; ) if (r[l] === a) return o[l] === u;
    if ((r.push(e), o.push(t), c)) {
        if (((l = a.length), l !== u.length)) return !1;
        for (; l--; ) if (!_e(a[l], u[l], n - 1, r, o)) return !1;
    } else {
        const e = Object.keys(a);
        let t;
        if (((l = e.length), Object.keys(u).length !== l)) return !1;
        for (; l--; ) {
            if (((t = e[l]), void 0 === t))
                return (console.error('Error: met undefined in object during deepEqual comparison'), !1);
            if (!Object.prototype.hasOwnProperty.call(u, t) || !_e(a[t], u[t], n - 1, r, o)) return !1;
        }
    }
    return (r.pop(), o.pop(), !0);
}
function Ee(e) {
    return e instanceof Map || e instanceof Set ? Array.from(e.entries()) : e;
}
const xe = {
    identity: function (e, t) {
        return e === t;
    },
    structural: function (e, t) {
        return ve(e, t);
    },
    sameValue: function (e, t) {
        return Object.is(e, t);
    },
    shallow: function (e, t) {
        return ve(e, t, 1);
    },
};
function Re(e) {
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
const ke = {
    zh_cn: Re,
    zh_sg: Re,
    zh_tw: Re,
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
function Se(e) {
    return e.split(' ');
}
const De = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko']);
const Ae = a.createContext(void 0);
const Ne = 'extraSmall',
    Te = {
        extraSmall: { weight: 0, name: Ne, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var Ce,
    Ie,
    je,
    Oe =
        (((Ce = Oe || {})[(Ce.Small = Te.small.width)] = 'Small'),
        (Ce[(Ce.Medium = Te.medium.width)] = 'Medium'),
        (Ce[(Ce.Large = Te.large.width)] = 'Large'),
        (Ce[(Ce.ExtraLarge = Te.extraLarge.width)] = 'ExtraLarge'),
        Ce),
    Fe =
        (((Ie = Fe || {})[(Ie.Small = Te.small.width)] = 'Small'),
        (Ie[(Ie.Medium = Te.medium.width)] = 'Medium'),
        (Ie[(Ie.Large = Te.large.width)] = 'Large'),
        (Ie[(Ie.ExtraLarge = Te.extraLarge.width)] = 'ExtraLarge'),
        Ie),
    Me =
        (((je = Me || {})[(je.Small = Te.small.height)] = 'Small'),
        (je[(je.Medium = Te.medium.height)] = 'Medium'),
        (je[(je.Large = Te.large.height)] = 'Large'),
        (je[(je.ExtraLarge = Te.extraLarge.height)] = 'ExtraLarge'),
        je);
const Le = Object.values(Te);
function $e(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        o = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...o])).join(' ');
}
const Pe = () => {
        return ((e = 1), viewEnv.remToPx(e));
        var e;
    },
    Be = () => {
        const e = (function (e = 'px') {
            return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
        })('rem');
        return (function (e, t, n) {
            const r = Le.reduce(
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
                i = s.names[s.names.length - 1] ?? Ne,
                a = Te[i],
                u = r.width.names,
                c = r.height.names,
                l = u[u.length - 1] ?? Ne,
                d = c[c.length - 1] ?? Ne,
                h = { width: Te[l].width, height: Te[d].height };
            return {
                mediaClass: $e(o, r),
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
        })(e.width, e.height, Pe());
    };
function ze({ children: e }) {
    const [t, n] = a.useState(Be);
    return (
        a.useLayoutEffect(() => {
            function e() {
                n(Be);
            }
            e();
            const t = M(e),
                r = L(e);
            return () => {
                (t(), r());
            };
        }, []),
        u.jsx(Ae.Provider, { value: t, children: e })
    );
}
function Ue() {
    return (function () {
        const e = a.useContext(Ae);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function We({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: o } = Ue();
    return u.jsx('div', { className: c(t, 'media-wrapper', r, o && 'media-upscale'), ...n, children: e });
}
function He({ children: e, ...t }) {
    return u.jsx(ze, { children: u.jsx(We, { ...t, children: e }) });
}
const Ve = [];
function qe(e) {
    const t = a.useRef(e);
    return (
        a.useLayoutEffect(() => {
            t.current = e;
        }),
        a.useCallback((...e) => (0, t.current)(...e), Ve)
    );
}
const Xe = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new be();
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
                if (e === ue.NONE) return oe;
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
    Ge = a.createContext(void 0);
function Ke(e, t, n, r = !1) {
    const o = le(e),
        s = qe((e) => {
            viewEnv.isEventHandled() || (n(e), viewEnv.setEventHandled(), r && e.stopPropagation());
        }),
        i = (function () {
            const e = a.useContext(Ge);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        u = a.useMemo(() => i[t].register(o, s), [i, t, o, s]);
    a.useEffect(() => u, [u]);
}
function Ze(e, t, n = !1) {
    return Ke(le(e), 'keydown', t, n);
}
function Je(e) {
    const t = a.useMemo(Xe, []),
        n = a.useMemo(Xe, []);
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
    return u.jsx(Ge.Provider, { value: r, children: e.children });
}
const Ye = new WeakMap(),
    Qe = 0,
    et = { await: 'await', idle: 'idle', display: 'display' };
function tt({ resId: e = Qe, contentId: t, decoratorId: n, disabled: r, args: o, showDelay: s = 400 }) {
    const i = a.useRef({ status: et.idle, resId: e, timeoutId: 0 }),
        [u, c] = a.useMemo(() => {
            let a = null;
            function u() {
                r ||
                    ((i.current.status = et.await),
                    window.clearTimeout(i.current.timeoutId),
                    (i.current.timeoutId = window.setTimeout(c, s)));
            }
            function c() {
                ((i.current.status = et.display), J.tooltip.open(e, t, n, o), a && Ye.set(a, d));
            }
            function l() {
                if (
                    (window.clearTimeout(i.current.timeoutId),
                    i.current.status === et.display && J.tooltip.hide(e, t, n),
                    (i.current.status = et.idle),
                    a)
                ) {
                    Ye.delete(a);
                    let e = a.parentElement;
                    for (; e && !Ye.has(e); ) e = e.parentElement;
                    if (e) {
                        Ye.get(e).show();
                    }
                    a = null;
                }
            }
            const d = {
                hide: l,
                show: c,
                rerun: function () {
                    i.current.status !== et.idle && (r ? d.hide() : u());
                },
            };
            return [
                d,
                {
                    onMouseEnter: (e) => {
                        ((a = null == e ? void 0 : e.currentTarget), u());
                    },
                    onMouseLeave: r ? re : l,
                    onClick: r ? re : l,
                },
            ];
        }, [o, t, n, r, e, s]);
    var l;
    return (
        a.useEffect(() => {
            u.rerun();
        }, [u]),
        (l = qe(u.hide)),
        a.useEffect(() => l, []),
        c
    );
}
function nt({ alert: e, body: t, header: n, note: r, hasHtmlContent: o, disabled: s }) {
    const i = y.resolve('views');
    return tt({
        disabled: s,
        contentId: i.read((e) =>
            o
                ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
        ),
        decoratorId: i.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
        args: a.useMemo(() => ({ body: t, header: n, note: r, alert: e }), [e, t, n, r]),
    });
}
function rt(e) {
    return tt({
        ...e,
        contentId: y
            .resolve('views')
            .read((e) => e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
    });
}
const ot = {
    click: st('play'),
    'hot-key': st('play'),
    'mouse-enter': st('highlight'),
    increaseAmount: st('cons_ammo_single_plus'),
    decreaseAmount: st('cons_ammo_single_minus'),
    increaseAmountRoll: st('cons_ammo_roll_plus'),
    decreaseAmountRoll: st('cons_ammo_roll_minus'),
    close: st('cancelcloseno'),
    'show-context-menu': st('tabb'),
    progressSimple: st('gui_hangar_progressbar_simple'),
    increaseDelta: st('gui_hangar_progressbar_delta_increase'),
    decreaseDelta: st('gui_hangar_progressbar_delta_decrease'),
    increaseDeltaMax: st('gui_hangar_progressbar_delta_max'),
    pointerGrab: st('gui_hangar_progressbar_pointer_grab'),
    pointerDrag: st('gui_hangar_progressbar_pointer_drag'),
};
function st(e) {
    return () => {
        z.sound(e);
    };
}
const it = a.createContext(null);
function at({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const o = a.useMemo(() => ({ ...ot, ...t }), [t]),
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
    return u.jsx(it.Provider, { value: s, children: r });
}
function ut() {
    const e = a.useContext(it);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const ct = 2;
function lt({ resId: e = 0, contentId: t, decoratorId: n, args: r, disabled: o, soundTarget: s }) {
    const i = ut(),
        [{ hide: u }, c] = a.useMemo(() => {
            function a() {
                o || J.contextMenu.open(e, t, n, r);
            }
            return [
                {
                    hide: function () {
                        J.contextMenu.hide(e, t, n);
                    },
                    show: a,
                },
                {
                    onMouseDown: (e) => {
                        (function (e) {
                            return e.button === ct;
                        })(e) &&
                            (i.play('show-context-menu', {
                                target: s ?? 'react-toolkit:use_context_menu',
                                original: e,
                            }),
                            a());
                    },
                },
            ];
        }, [r, t, n, e, o, i, s]);
    return (a.useEffect(() => u, [u]), c);
}
function dt(e, t, n) {
    return lt(
        a.useMemo(
            () => ({
                ...n,
                contentId: y.resolve('aliases').read((e) => e.common.contextMenu.Backport('resId')),
                disabled: null == n ? void 0 : n.disabled,
                args: { menuId: e, menuArgs: JSON.stringify(t), ...(null == n ? void 0 : n.args) },
            }),
            [t, e, n],
        ),
    );
}
const ht = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    ft = new Set(['number', 'string', 'boolean', 'bigint']),
    mt = new Set(['Dict']);
function pt(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var o, s;
    const i = e,
        a = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (ht.has(a)) return i;
    if (null === i) return i;
    const u = { depth: n + 1, maxDepth: r };
    if (Array.isArray(i)) return i.map((e) => pt(e, u));
    if ('object' === a) {
        const r = (null == (o = i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => pt(e, u));
        if ('CoherentArrayProxy' === r) return e.map((e) => pt(e.value, u));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in i) {
                    const n = i[t];
                    ft.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in i) {
                    const n = i[t],
                        r = (null == (s = null == i ? void 0 : i.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                    mt.has(r) || (e[t] = pt(n, u));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(i)) a[e] = pt(i[e], u);
        return a;
    }
    return (console.error('Incorrect value to clone model', i), i);
}
const gt = { deep: !1, equals: oe },
    wt = { cloneItem: !0 },
    yt = { shallow: !1 };
class bt {
    constructor(e, t = wt) {
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
            r[t] = l.box(this.takeItem(e, t), gt);
        }
        ((this._keys = l.set(new Set(o))), (this._data = l.box(r, gt)));
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
                : null !== s && ((n[o] = l.box(s, gt)), this._keys.add(o), this.set(n));
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
        return this.options.cloneItem ? pt(n, yt) : n;
    }
    untrackedData() {
        return h(() => this._data.get());
    }
}
const vt = a.createContext({ mode: 'real' }),
    _t = { equals: oe, deep: !1 };
function Et(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        d(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const o = (o, s, i = _t) => {
            const a = l.box(o(n(s)), i);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(o(e))), s), a);
        },
        s = (o, s) => {
            const i = new bt(n(o), s);
            return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), o), i);
        },
        i = (o, s) => {
            const i = l.box(n(o) ?? s, _t);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), o), i);
        };
    return {
        dict: s,
        dictRef: (e, t) => s(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => o(pt, e),
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
const xt =
        (e = 'DataLayerProvider') =>
        (t, n, r) => {
            const o = a.createContext(null);
            function s(s) {
                var i;
                const { mode: c, options: l, children: d, mocks: h } = s,
                    f = a.useContext(vt),
                    m = c ?? f.mode,
                    p = h ?? f.mocks,
                    g = a.useRef([]),
                    w = null == (i = null == r ? void 0 : r.useRequires) ? void 0 : i.call(r),
                    y = qe((o, i, a) => {
                        var u;
                        const c =
                                'real' !== o && a
                                    ? (function (e, t) {
                                          return {
                                              subscribe: () => 0,
                                              readSafeByPath: e,
                                              readByPath: e,
                                              createCallback: (n, r) => {
                                                  const o = e(ne(r, t));
                                                  return (...e) => {
                                                      o(n(...e));
                                                  };
                                              },
                                              createCallbackNoArgs: (n) => {
                                                  const r = e(ne(n, t));
                                                  return () => {
                                                      r();
                                                  };
                                              },
                                              dispose: () => {},
                                              unsubscribe: () => {},
                                              events: { subscribersNotified: new Q() },
                                          };
                                      })(a.getter, i)
                                    : te(i, { name: e }),
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
                                observableModel: Et(c, o, l),
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
                    u.jsx(o.Provider, { value: E, children: d })
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
    Rt = {
        model: (e, t) => f(e, { equals: oe, ...t }),
        primitive: f,
        shallow: (e, t) => f(e, { equals: m.shallow, ...t }),
        structural: (e, t) => f(e, { equals: m.structural, ...t }),
    };
async function kt(
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
    const i = n ? He : p.Fragment,
        a = (null == (s = null == window ? void 0 : window.engine) ? void 0 : s.whenReady) ?? Promise.resolve();
    (o && engine.enableImmediateLayout(!0),
        await a,
        document.documentElement.setAttribute('lang', y.resolve('langCode')),
        g.createRoot(t).render(u.jsx(i, { children: u.jsx(Je, { children: e }) })),
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
function St(e) {
    return u.jsx(u.Fragment, { children: e.children });
}
function Dt(e) {
    return u.jsx(St, {
        children: u.jsx(at, {
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
                return W.onHitTest((t) => {
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
const At = a.createContext(void 0);
function Nt() {
    const e = a.useContext(At);
    if (!e) throw new Error('useRouter must be used within a RouterProvider');
    return e;
}
var Tt = {};
function Ct({ children: e, prefix: t = '', context: n, getRoot: r, initializer: o, rootId: s }) {
    const i = a.useRef([]),
        c = a.useRef(null),
        l = a.useMemo(() => te({ context: n, getRoot: r, initializer: o, rootId: s }), [n, r, o, s]),
        d = a.useCallback(
            (e) => {
                const t = l.subscribe(e);
                return () => l.unsubscribe(t);
            },
            [l],
        ),
        h = a.useCallback(() => {
            const e = l.readByPath(),
                n = { location: ((r = t + e.route), r.endsWith('/') ? r.slice(0, -1) : r), params: e.params };
            var r;
            return c.current && xe.shallow(c.current, n) ? c.current : ((c.current = n), n);
        }, [l, t]),
        f = a.useSyncExternalStore(d, h);
    a.useEffect(() => l.dispose, [l]);
    const m = a.useMemo(() => {
        const e = [...i.current, f];
        return ((i.current = e), { ...f, history: e });
    }, [f]);
    Tt.PUBLIC_ROUTER_DEBUG && console.log('🗺️ Route updated:', m);
    const p = a.useMemo(() => {
            const e = l.createCallback(
                    (e, t) => (
                        Tt.PUBLIC_ROUTER_DEBUG && console.log('➡️ Going to', e, t),
                        { route: e, ...(Boolean(t) && { params: JSON.stringify(t) }) }
                    ),
                    'navigateTo',
                ),
                t = l.createCallbackNoArgs('navigateBack');
            return {
                push: e,
                replace: e,
                goBack: Tt.PUBLIC_ROUTER_DEBUG
                    ? () => {
                          (console.log('🗺️ Route back'), t());
                      }
                    : t,
            };
        }, [l]),
        g = a.useMemo(() => ({ ...m, ...p }), [p, m]);
    return u.jsx(At.Provider, { value: g, children: e });
}
function It(e) {
    const t = e.indexOf(':');
    return j(t < 0 ? e.toLowerCase() : e.substring(t + 1).toLowerCase());
}
a.createContext(void 0);
const jt = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    Ot = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
function Ft(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
const Mt = (function (e, t, n) {
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
                    return a.createElement(o, { ...('function' == typeof o ? e : Ft(s, e)), ref: t, className: r(e) });
                });
            return ((i.displayName = e), n.cva && (i.cva = n.cva), i);
        }
        const i = w(t, n),
            c = a.forwardRef(function (t, n) {
                return u.jsx('div', { 'data-name': e, ...Ft(s, t), ref: n, className: i(t) });
            });
        return ((c.displayName = e), c);
    })('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    Lt = a.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: o = !1, silent: s = !1, ...i },
        a,
    ) {
        const c = ut();
        return u.jsx(Mt, {
            ...i,
            ref: a,
            onMouseEnter: function (e) {
                (o || s || c.play('mouse-enter', { target: r || 'Button', original: e }), null == n || n(e));
            },
            onClick: function (e) {
                o || (s || c.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    $t = {
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
    Pt = a.forwardRef(function (
        {
            children: e,
            size: t = Ot.large,
            theme: n = jt.primary,
            disabled: r = !1,
            silent: o = !1,
            autoAlignContent: s = !0,
            classNames: i,
            className: a,
            ...l
        },
        d,
    ) {
        return u.jsxs(Lt, {
            ...l,
            ref: d,
            silent: o,
            disabled: r,
            className: c(
                $t.base,
                $t[`base__size-${t}`],
                $t[`base__theme-${n}`],
                r ? $t.base__disabled : $t.base__enabled,
                a,
                null == i ? void 0 : i.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = l.onClick) || t.call(l, e);
            },
            children: [
                u.jsx('div', { className: c($t.background, null == i ? void 0 : i.background) }),
                u.jsx('div', { className: c($t.border, null == i ? void 0 : i.border) }),
                u.jsx('div', { className: c($t.overlay, null == i ? void 0 : i.overlay) }),
                u.jsx('div', {
                    className: c($t.content, s && $t.content__fontAligned, null == i ? void 0 : i.content),
                    children: e,
                }),
            ],
        });
    });
((Pt.themes = jt), (Pt.sizes = Ot));
const Bt = 1,
    zt = 2,
    Ut = 3;
const Wt = {
        COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
        base: 'FormatText_db904f12',
        base__fullSize: 'FormatText_base__fullSize_a514958e',
        nowrap: 'FormatText_nowrap_ff69eca3',
    },
    Ht = new Set((null == (e = Wt.COLORS) ? void 0 : e.split(', ')) ?? []);
let Vt = 0;
function qt() {
    return ++Vt;
}
const Xt =
    /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
function Gt(e) {
    const t = y.resolve('langCode');
    return (function (e, t, n) {
        return De.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
    })(
        (function (e, t) {
            return (ke[t] ?? Se)(e);
        })(e, t),
        t,
        (e, t) => e && u.jsx('span', { children: e }, `${e}${t}`),
    );
}
function Kt(e) {
    return Array.isArray(e)
        ? (function (e) {
              const t = [];
              for (let n = 0; n < e.length; n++) {
                  const r = e[n],
                      o = e[n + 1];
                  if ('string' != typeof o || !Xt.test(o)) {
                      t.push(Kt(r));
                      continue;
                  }
                  const s = Gt(o.slice(1));
                  (t.push(
                      u.jsxs(
                          a.Fragment,
                          { children: [u.jsxs('span', { className: Wt.nowrap, children: [Kt(r), o[0]] }), s] },
                          qt(),
                      ),
                  ),
                      (n += 1));
              }
              return t;
          })(e)
        : 'string' == typeof e
          ? u.jsx(a.Fragment, { children: Gt(e) }, qt())
          : e;
}
const Zt = {
    class: function (e, ...t) {
        return u.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            qt(),
        );
    },
    colorLegacy: function (e, t) {
        const n = qt();
        return Ht.has(String(t))
            ? u.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : u.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: Kt,
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
            qt(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function Jt(e, t, n, r) {
    const o = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...o] = n.slice(1, -1).split(' ');
                return t ? Jt(e, t, o, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        s = r[t];
    return s ? s(e, ...o) : (console.error(`Function ${t} is not registered`), e);
}
function Yt(e, t, n) {
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
        return r ? Jt(e, r, o, n) : e;
    }, t);
}
function Qt(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function en(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !Qt(e[r]); ) r++;
            const o = e.slice(n + 1, r),
                s = t[o];
            if (s) return en(e.replace(`$${o}`, String(s)), t);
        }
    }
    return e;
}
function tn(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = en(e[r], t);
    return n;
}
const nn = ['number', 'string', 'undefined'];
function rn(e, t, n = {}, r = !0) {
    r && (Vt = 0);
    const o = [];
    function s(e) {
        if (nn.includes(typeof e)) {
            const t = o.at(-1);
            if ('string' == typeof t) return void (o[o.length - 1] = t + e);
        }
        o.push(e);
    }
    for (const i of e)
        if (i.type === Bt) s(i.value);
        else if (i.type === Ut)
            null === n[i.name] || nn.includes(typeof n[i.name])
                ? s(n[i.name] ?? `{{${i.name}}}`)
                : o.push(u.jsx(a.Fragment, { children: n[i.name] }, `var-${i.name}-${i.instanceId}`));
        else if (i.type === zt) {
            const e = rn(i.children, t, n, !1),
                r = Yt(tn(i.attrs, n), e, t);
            o.push(r);
        }
    return o;
}
function on(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function sn(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function an(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const un = { start: '{{', end: '}}' },
    cn = a.memo(function (e) {
        const {
                brackets: t = un,
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
                              })(e, an, on, sn);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            m = a.useMemo(() => (e.formatters ? { ...Zt, ...e.formatters } : Zt), [e.formatters]),
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
                                        ? r[r.length - 1].node.children.push({ type: Bt, value: o })
                                        : n.push({ type: Bt, value: o }),
                                    (o = '')),
                                    (s = !0),
                                    (u += t.start.length - 1));
                            else if (c === t.end[0] && e.slice(u, u + t.end.length) === t.end) {
                                ((s = !1), (u += t.end.length - 1));
                                const e = i.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        o = { type: zt, attrs: t.split('|'), instanceId: ++a, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(o) : n.push(o),
                                        r.push({ node: o, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: Ut, instanceId: ++a, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                i = '';
                            } else s ? (i += c) : (o += c);
                        }
                        o &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: Bt, value: o })
                                : n.push({ type: Bt, value: o }));
                        return n;
                    })(d ? `{{@ split}}${f}{{/}}` : f, t),
                [t, f, d],
            ),
            g = a.useMemo(() => rn(p, m, e.params), [p, m, e.params]),
            w = c(Wt.base, s && Wt.base__fullSize, h.className);
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
export {
    Pt as B,
    cn as F,
    Ct as M,
    Dt as U,
    st as a,
    nt as b,
    Rt as c,
    rt as d,
    dt as e,
    Nt as f,
    It as g,
    Ze as h,
    xt as i,
    Y as j,
    ie as k,
    kt as l,
    he as m,
    y as r,
    J as s,
    ye as t,
    ut as u,
};
