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
    l as a,
    r as u,
    j as c,
    e as l,
    o as d,
    f,
    u as h,
    g as m,
    h as p,
    R as g,
    i as w,
    k as y,
} from './vendor.js';
const b = r();
function v(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function _(e, t) {
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
    constructor(e, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = v(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && _(`Resource not found: ${r}`, n), t()) : o;
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
var x = ((e) => (
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
))(x || {});
const k = { integral: 0, gold: 1 },
    S = { fractional: 0, woZeroDigits: 1 },
    N = Object.keys(k),
    T = Object.keys(S);
function C(e) {
    return Number.isFinite(e)
        ? e < 0
            ? (console.error(`Negative timestamp (${e}) is not allowed. Clamping to 0.`), 0)
            : e > Number.MAX_SAFE_INTEGER
              ? (console.error(`Number(${e}) is bigger than MAX_SAFE_INTEGER. Clamping to ${Number.MAX_SAFE_INTEGER}.`),
                Number.MAX_SAFE_INTEGER)
              : e
        : (console.error(`Incorrect value to convert. Value is ${e}. Expected a finite number.`), 0);
}
const D = { full: x.FullTime, short: x.ShortTime },
    j = Object.keys(D);
const A = { short: 0, full: 1 },
    I = {
        isNumberFormat: function (e) {
            return e in k;
        },
        formatNumber: function (e, t) {
            return window.systemLocale.getNumberFormat(t, k[e]);
        },
        numberFormats: N,
        isRealFormat: function (e) {
            return e in S;
        },
        formatReal: function (e, t) {
            return window.systemLocale.getRealFormat(t, S[e]);
        },
        realFormats: T,
        formatDateTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(C(t), e, n);
        },
        dateTimeFormats: x,
        formatTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(C(t), e, n);
        },
        timeFormats: j,
        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
        system: {
            time: (e, t) => window.systemLocale.getTimeFormat(C(e), A[t]),
            date: (e, t) => window.systemLocale.getDateFormat(C(e), A[t]),
        },
    };
function M(e, t) {
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
        const r = v(this.prefix, e),
            o = M(r);
        return void 0 === o ? ('silent' !== n && _(`Resource not found: ${r}`, n), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = v(this.prefix, e),
            n = M(t);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const o = v(this.prefix, e),
            s = M(o, t);
        return void 0 === s ? ('silent' !== r && _(`Resource not found: ${o}`, r), n()) : s;
    }
    pluralOrEmpty(e, t, n = 'warn') {
        return this.pluralOr(e, t, () => '', n);
    }
}
class L {
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
        return void 0 === r ? ('silent' !== n && _(`Resource not found: ${e}`, n), t()) : r;
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
    return e.replaceAll('-', '_');
}
function P(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function B(e) {
    viewEnv.setTrackMouseOnStage(e);
}
b.register({
    strings: i(() => new O()).singleton(),
    images: i(() => new E(window.R.images.gui.maps.icons)).singleton(),
    atlases: i(() => new E(window.R.atlases)).singleton(),
    videos: i(() => new L(window.R.videos)).singleton(),
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
                    : _(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: o(R.strings.settings.LANGUAGE_CODE()),
    intl: o(I),
});
const F = P('clientResized'),
    z = P('self.onScaleUpdated'),
    U = { down: P('mousedown'), up: P('mouseup'), move: P('mousemove') };
function H(e) {
    engine.call('PlaySound', e);
}
!(function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && B(!1);
    }
    function n() {
        e.enabled && B(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  B(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : B(!1);
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
const W = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    V = { ...Object.keys(W).reduce((e, t) => ((e[t] = () => H(W[t])), e), {}), sound: H },
    q = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    X = {
        onTextureFrozen: P('self.onTextureFrozen'),
        onTextureReady: P('self.onTextureReady'),
        onDomBuilt: P('self.onDomBuilt'),
        onLoaded: P('self.onLoaded'),
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
        onDisplayChanged: P('self.onShowingStatusChanged'),
        onFocusUpdated: P('self.onFocusChanged'),
        children: {
            onAdded: P('children.onAdded'),
            onLoaded: P('children.onLoaded'),
            onRemoved: P('children.onRemoved'),
            onAttached: P('children.onAttached'),
            onTextureReady: P('children.onTextureReady'),
            onRequestPosition: P('children.requestPosition'),
        },
    },
    G = 1,
    K = 4;
function Z(e) {
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
const J = (e) => {
        const t = [];
        for (const [n, r] of Object.entries(e)) {
            const e = Z(r);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
        }
        return t;
    },
    Y = (e, t) => {
        const n = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...o } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: n, type: e, ...o, arguments: J(r) })
                : viewEnv.handleViewEvent({ __Type: n, type: e, ...o });
        }
        return viewEnv.handleViewEvent({ __Type: n, type: e });
    },
    Q = new Map(),
    ee = {
        tooltip: {
            open(e, t, n = 0, r) {
                (Y(G, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    Q.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (Y(G, { contentID: t, decoratorID: n, targetID: e, on: !1 }), Q.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(Q.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
        contextMenu: {
            open(e, t, n = 0, r) {
                Y(K, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r });
            },
            hide(e, t, n = 0) {
                Y(K, { contentID: t, decoratorID: n, targetID: e, on: !1, isMouseEvent: !1 });
            },
        },
    };
function te() {
    return window.subViews.ids();
}
function ne(e) {
    viewEnv.setContentReady(e);
}
Object.keys(q).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === q[t]), e), {});
class re {
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
const oe = (e) => (0 === e ? window : window.subViews.get(e));
function se(
    { initializer: e = !0, rootId: t = 0, getRoot: n = oe, context: r = 'model' } = {},
    { name: o = 'DataLayer' } = {},
) {
    const s = new Map(),
        i = { subscribersNotified: new re() },
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
            if (0 === t || te().includes(t)) for (const e of s.keys()) l(e);
            a.then((e) => e());
        },
        unsubscribe: l,
        events: i,
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
function ae(e) {
    return e;
}
function ue() {
    return !1;
}
function ce(e) {
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
                                                headers: h(s),
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
                        return this.text().then(f);
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
        function f(e) {
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
        function h(e) {
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
const le = { NONE: -1, ESCAPE: 27, ARROW_UP: 38, ARROW_DOWN: 40 };
function de(e, t) {
    return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r));
}
function fe(e, t) {
    e || console.error(t || 'Assertion failed');
}
function he(e, t, n) {
    return 'function' == typeof t ? me(0, e, t) : (fe(void 0 !== n, 'fn must be defined'), me(e, t, n));
}
function me(e, t, n) {
    const r = new Array(t - e);
    for (let o = e; o < t; o++) r[o] = n(o);
    return r;
}
fe.log = function (e, t) {
    e || console.error(t || 'Assertion failed');
};
const pe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    ge = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
    we = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
    ye = ['ko', 'no'].includes(b.resolve('langCode'));
function be(e) {
    return e <= 0
        ? (console.error('Arabic value must be greater than zero.'), String(e))
        : ye
          ? String(e)
          : (function (e) {
                if (e <= 10) return we[e] ?? String(e);
                let t = '';
                for (let n = ge.length - 1; n >= 0; n--) {
                    let r = ge[n];
                    for (; void 0 !== r && e >= r; ) ((t += pe[n]), (e -= r));
                }
                return t;
            })(e);
}
class ve {
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
function _e(e, t, n = -1) {
    return Ee(e, t, n);
}
function Ee(e, t, n, r, o) {
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
    const a = xe(e),
        u = xe(t),
        c = Array.isArray(a) && Array.isArray(u);
    if (!c) {
        if ('object' != typeof a || 'object' != typeof u) return !1;
        const e = a.constructor,
            t = u.constructor;
        if (
            e !== t &&
            !(ce(e) && e instanceof e && ce(t) && t instanceof t) &&
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
        for (; l--; ) if (!Ee(a[l], u[l], n - 1, r, o)) return !1;
    } else {
        const e = Object.keys(a);
        let t;
        if (((l = e.length), Object.keys(u).length !== l)) return !1;
        for (; l--; ) {
            if (((t = e[l]), void 0 === t))
                return (console.error('Error: met undefined in object during deepEqual comparison'), !1);
            if (!Object.prototype.hasOwnProperty.call(u, t) || !Ee(a[t], u[t], n - 1, r, o)) return !1;
        }
    }
    return (r.pop(), o.pop(), !0);
}
function xe(e) {
    return e instanceof Map || e instanceof Set ? Array.from(e.entries()) : e;
}
const Re = {
        identity: function (e, t) {
            return e === t;
        },
        structural: function (e, t) {
            return _e(e, t);
        },
        sameValue: function (e, t) {
            return Object.is(e, t);
        },
        shallow: function (e, t) {
            return _e(e, t, 1);
        },
    },
    ke = new Set(['zh_cn', 'zh_sg', 'zh_tw']);
function Se(e, t, n) {
    return ke.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
}
function Ne(e, t) {
    return ke.has(t)
        ? (function (e) {
              const t = [],
                  n = e
                      .replace(/&nbsp;/g, ' ')
                      .replace(/ /g, ' ')
                      .matchAll(
                          /[\u4E00-\u9FFF\u3400-\u4DBF][。，: ; ：；！？《》「」•)、]?|[a-zA-Z0-9]+[.,!?]?|\xa0|[^\u4E00-\u9FFF\u3400-\u4DBF\s]/gu,
                      );
              for (const [r] of n) t.push(r);
              return t;
          })(e)
        : 'ja' === t
          ? a()
                .parse(e)
                .map((e) => e.replace(/&nbsp;/g, ' '))
          : e.split(' ');
}
const Te = u.createContext(void 0);
const Ce = 'extraSmall',
    De = {
        extraSmall: { weight: 0, name: Ce, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var je,
    Ae,
    Ie,
    Me =
        (((je = Me || {})[(je.Small = De.small.width)] = 'Small'),
        (je[(je.Medium = De.medium.width)] = 'Medium'),
        (je[(je.Large = De.large.width)] = 'Large'),
        (je[(je.ExtraLarge = De.extraLarge.width)] = 'ExtraLarge'),
        je),
    Oe =
        (((Ae = Oe || {})[(Ae.Small = De.small.width)] = 'Small'),
        (Ae[(Ae.Medium = De.medium.width)] = 'Medium'),
        (Ae[(Ae.Large = De.large.width)] = 'Large'),
        (Ae[(Ae.ExtraLarge = De.extraLarge.width)] = 'ExtraLarge'),
        Ae),
    Le =
        (((Ie = Le || {})[(Ie.Small = De.small.height)] = 'Small'),
        (Ie[(Ie.Medium = De.medium.height)] = 'Medium'),
        (Ie[(Ie.Large = De.large.height)] = 'Large'),
        (Ie[(Ie.ExtraLarge = De.extraLarge.height)] = 'ExtraLarge'),
        Ie);
const $e = Object.values(De);
function Pe(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        o = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...o])).join(' ');
}
const Be = () => {
        return ((e = 1), viewEnv.remToPx(e));
        var e;
    },
    Fe = () => {
        const e = (function (e = 'px') {
            return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
        })('rem');
        return (function (e, t, n) {
            const r = $e.reduce(
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
                i = s.names[s.names.length - 1] ?? Ce,
                a = De[i],
                u = r.width.names,
                c = r.height.names,
                l = u[u.length - 1] ?? Ce,
                d = c[c.length - 1] ?? Ce,
                f = { width: De[l].width, height: De[d].height };
            return {
                mediaClass: Pe(o, r),
                breakpoint: a,
                screenWidthRem: e,
                screenHeightRem: t,
                breaks: s.names,
                sides: f,
                mediaSize: a.width,
                mediaWidth: f.width,
                mediaHeight: f.height,
                upscale: n > 1,
            };
        })(e.width, e.height, Be());
    };
function ze({ children: e }) {
    const [t, n] = u.useState(Fe);
    return (
        u.useLayoutEffect(() => {
            function e() {
                n(Fe);
            }
            e();
            const t = F(e),
                r = z(e);
            return () => {
                (t(), r());
            };
        }, []),
        c.jsx(Te.Provider, { value: t, children: e })
    );
}
function Ue() {
    return (function () {
        const e = u.useContext(Te);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function He({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: o } = Ue();
    return c.jsx('div', { className: l(t, 'media-wrapper', r, o && 'media-upscale'), ...n, children: e });
}
function We({ children: e, ...t }) {
    return c.jsx(ze, { children: c.jsx(He, { ...t, children: e }) });
}
const Ve = [];
function qe(e) {
    const t = u.useRef(e);
    return (
        u.useLayoutEffect(() => {
            t.current = e;
        }),
        u.useCallback((...e) => (0, t.current)(...e), Ve)
    );
}
function Xe(e) {
    u.useEffect(() => e, []);
}
const Ge = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new ve();
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
                if (e === le.NONE) return ue;
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
    Ke = u.createContext(void 0);
function Ze(e, t, n, r) {
    const o = qe((e) => {
            viewEnv.isEventHandled() || (n(e), viewEnv.setEventHandled());
        }),
        s = (function () {
            const e = u.useContext(Ke);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        i = u.useMemo(() => s[t].register(e, o), [s, t, e, o]);
    u.useEffect(() => i, [i]);
}
function Je(e, t, n) {
    return Ze(e, 'keydown', t);
}
function Ye(e) {
    const t = u.useMemo(Ge, []),
        n = u.useMemo(Ge, []);
    u.useEffect(() => {
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
    const r = u.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: n.register, unregister: n.unregister },
        }),
        [t, n],
    );
    return c.jsx(Ke.Provider, { value: r, children: e.children });
}
const Qe = 0;
function et({ resId: e = 0, contentId: t, decoratorId: n, disabled: r, args: o, showDelay: s = 400 }) {
    const i = (function () {
            const e = u.useRef(Qe);
            return (
                Xe(() => {
                    window.clearTimeout(e.current);
                }),
                u.useMemo(
                    () => ({
                        run: (t, n) => {
                            (window.clearTimeout(e.current),
                                (e.current = window.setTimeout(() => {
                                    ((e.current = Qe), t());
                                }, n)));
                        },
                        clear: () => {
                            (window.clearTimeout(e.current), (e.current = Qe));
                        },
                        get isRunning() {
                            return e.current !== Qe;
                        },
                    }),
                    [],
                )
            );
        })(),
        a = u.useRef({ display: !1, resId: e }),
        [{ hide: c, getCurrentState: l }, d] = u.useMemo(() => {
            function u() {
                r || ((a.current.display = !0), ee.tooltip.open(e, t, n, o));
            }
            function c() {
                (i.clear(), ee.tooltip.hide(e, t, n), (a.current.display = !1));
            }
            return [
                { hide: c, show: u, getCurrentState: () => a.current },
                {
                    onMouseEnter: () => {
                        i.run(u, s);
                    },
                    onMouseLeave: c,
                    onClick: c,
                },
            ];
        }, [o, t, n, r, e, s, i]);
    return (
        Xe(() => {
            const e = l().resId;
            l().display && void 0 !== e && te().includes(e) && c();
        }),
        d
    );
}
function tt({ alert: e, body: t, header: n, note: r, hasHtmlContent: o }) {
    return et(
        u.useMemo(() => {
            const s = b.resolve('views');
            return {
                contentId: s.read((e) =>
                    o
                        ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                        : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
                ),
                decoratorId: s.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
                args: { body: t, header: n, note: r, alert: e },
            };
        }, [e, t, n, r, o]),
    );
}
function nt(e) {
    const t = b.resolve('views');
    return et(
        u.useMemo(
            () => ({
                ...e,
                contentId: t.read((e) =>
                    e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                ),
            }),
            [e, t],
        ),
    );
}
const rt = {
    click: ot('play'),
    'mouse-enter': ot('highlight'),
    increaseAmount: ot('cons_ammo_roll_plus'),
    decreaseAmount: ot('cons_ammo_roll_minus'),
    close: ot('cancelcloseno'),
    'show-context-menu': ot('tabb'),
};
function ot(e) {
    return () => {
        V.sound(e);
    };
}
const st = u.createContext(null);
function it({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const o = u.useMemo(() => ({ ...rt, ...t }), [t]),
        s = u.useMemo(
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
    return c.jsx(st.Provider, { value: s, children: r });
}
function at() {
    const e = u.useContext(st);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const ut = 2;
function ct({ resId: e = 0, contentId: t, decoratorId: n, args: r, disabled: o, soundTarget: s }) {
    const i = at(),
        [{ hide: a }, c] = u.useMemo(() => {
            function a() {
                o || ee.contextMenu.open(e, t, n, r);
            }
            return [
                {
                    hide: function () {
                        ee.contextMenu.hide(e, t, n);
                    },
                    show: a,
                },
                {
                    onMouseDown: (e) => {
                        (function (e) {
                            return e.button === ut;
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
    return (u.useEffect(() => a, [a]), c);
}
function lt(e, t, n) {
    return ct(
        u.useMemo(
            () => ({
                ...n,
                contentId: b.resolve('aliases').read((e) => e.common.contextMenu.Backport('resId')),
                disabled: null == n ? void 0 : n.disabled,
                args: { menuId: e, menuArgs: JSON.stringify(t), ...(null == n ? void 0 : n.args) },
            }),
            [t, e, n],
        ),
    );
}
const dt = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    ft = new Set(['number', 'string', 'boolean', 'bigint']),
    ht = new Set(['Dict']);
function mt(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var o, s;
    const i = e,
        a = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (dt.has(a)) return i;
    if (null === i) return i;
    const u = { depth: n + 1, maxDepth: r };
    if (Array.isArray(i)) return i.map((e) => mt(e, u));
    if ('object' === a) {
        const r = (null == (o = i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => mt(e, u));
        if ('CoherentArrayProxy' === r) return e.map((e) => mt(e.value, u));
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
                    ht.has(r) || (e[t] = mt(n, u));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(i)) a[e] = mt(i[e], u);
        return a;
    }
    return (console.error('Incorrect value to clone model', i), i);
}
const pt = { deep: !1, equals: ue },
    gt = { cloneItem: !0 },
    wt = { shallow: !1 };
class yt {
    constructor(e, t = gt) {
        (n(this, '_data'),
            n(this, '_keys'),
            n(
                this,
                'set',
                f((e) => {
                    this._data.set(e);
                }),
            ),
            (this.options = t));
        const r = {},
            o = e.keys();
        for (let n = 0; n < o.length; n++) {
            const t = o[n];
            r[t] = d.box(this.takeItem(e, t), pt);
        }
        ((this._keys = d.set(new Set(o))), (this._data = d.box(r, pt)));
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
                : null !== s && ((n[o] = d.box(s, pt)), this._keys.add(o), this.set(n));
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
        return this.options.cloneItem ? mt(n, wt) : n;
    }
    untrackedData() {
        return h(() => this._data.get());
    }
}
const bt = u.createContext({ mode: 'real' }),
    vt = { equals: ue, deep: !1 };
function _t(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        f(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const o = (o, s, i = vt) => {
            const a = d.box(o(n(s)), i);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(o(e))), s), a);
        },
        s = (o, s) => {
            const i = new yt(n(o), s);
            return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), o), i);
        },
        i = (o, s) => {
            const i = d.box(n(o) ?? s, vt);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), o), i);
        };
    return {
        dict: s,
        dictRef: (e, t) => s(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => o(mt, e),
        array: i,
        object: i,
        transform: o,
        primitives: (o, s) => {
            const i = n(s);
            if (Array.isArray(o)) {
                const n = o.reduce((e, t) => ((e[t] = d.box(i[t], {})), e), {});
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
                    u = a.reduce((e, [t, n]) => ((e[n] = d.box(i[t], {})), e), {});
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
const Et =
        (e = 'DataLayerProvider') =>
        (t, n, r) => {
            const o = u.createContext(null);
            function s(s) {
                var i;
                const { mode: a, options: l, children: d, mocks: f } = s,
                    h = u.useContext(bt),
                    m = a ?? h.mode,
                    p = f ?? h.mocks,
                    g = u.useRef([]),
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
                                              events: { subscribersNotified: new re() },
                                          };
                                      })(a.getter, i)
                                    : se(i, { name: e }),
                            l = (e) => ('mocks' === o ? (null == a ? void 0 : a.getter(e, i)) : c.readByPath(e)),
                            d = (e) => g.current.push(e),
                            f = 'initial' in s && {
                                initial: null == (u = null == r ? void 0 : r.initial) ? void 0 : u.call(r, s.initial),
                            },
                            h = t({
                                ...f,
                                mode: o,
                                readByPath: l,
                                requires: w,
                                externalModel: c,
                                observableModel: _t(c, o, l),
                                cleanup: d,
                            }),
                            m = { ...f, mode: o, model: h, externalModel: c, cleanup: d, requires: w },
                            p = 'mocks' === o && (null == a ? void 0 : a.controls) ? a.controls(m) : {};
                        return {
                            model: h,
                            controls: { ...(null == n ? void 0 : n(m)), ...p },
                            externalModel: c,
                            mode: o,
                        };
                    }),
                    b = u.useRef(!1),
                    [v, _] = u.useState(m);
                u.useEffect(() => {
                    _(m);
                }, [m]);
                const [E, x] = u.useState(() => y(v, l, p));
                return (
                    u.useEffect(() => {
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
                    u.useEffect(
                        () => () => {
                            (E.externalModel.dispose(), g.current.forEach((e) => e()));
                        },
                        [E],
                    ),
                    c.jsx(o.Provider, { value: E, children: d })
                );
            }
            return (
                (s.displayName = e),
                [
                    s,
                    function () {
                        const e = u.useContext(o);
                        if (!e) throw new Error(`hook useModel must be used within a ${s.displayName}.`);
                        return e;
                    },
                    { Context: o },
                ]
            );
        },
    xt = {
        model: (e, t) => m(e, { equals: ue, ...t }),
        primitive: m,
        shallow: (e, t) => m(e, { equals: p.shallow, ...t }),
        structural: (e, t) => m(e, { equals: p.structural, ...t }),
    };
async function Rt(e, { root: t = document.getElementById('root'), withMedia: n = !0, fullScreen: r = !1 } = {}) {
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
    const s = n ? We : g.Fragment,
        i = (null == (o = null == window ? void 0 : window.engine) ? void 0 : o.whenReady) ?? Promise.resolve();
    (await i,
        document.documentElement.setAttribute('lang', b.resolve('langCode')),
        w.createRoot(t).render(c.jsx(s, { children: c.jsx(Ye, { children: e }) })),
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
function kt(e) {
    return c.jsx(c.Fragment, { children: e.children });
}
function St(e) {
    return c.jsx(kt, {
        children: c.jsx(it, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
u.forwardRef(function (e, t) {
    const n = u.useRef(null);
    return (
        u.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return X.onHitTest((t) => {
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
const Nt = u.createContext(void 0);
function Tt() {
    const e = u.useContext(Nt);
    if (!e) throw new Error('useRouter must be used within a RouterProvider');
    return e;
}
var Ct = {};
function Dt({ children: e, prefix: t = '', context: n, getRoot: r, initializer: o, rootId: s }) {
    const i = u.useRef([]),
        a = u.useRef(null),
        l = u.useMemo(() => se({ context: n, getRoot: r, initializer: o, rootId: s }), [n, r, o, s]),
        d = u.useCallback(
            (e) => {
                const t = l.subscribe(e);
                return () => l.unsubscribe(t);
            },
            [l],
        ),
        f = u.useCallback(() => {
            const e = l.readByPath(),
                n = { location: ((r = t + e.route), r.endsWith('/') ? r.slice(0, -1) : r), params: e.params };
            var r;
            return a.current && Re.shallow(a.current, n) ? a.current : ((a.current = n), n);
        }, [l, t]),
        h = u.useSyncExternalStore(d, f);
    u.useEffect(() => l.dispose, [l]);
    const m = u.useMemo(() => {
        const e = [...i.current, h];
        return ((i.current = e), { ...h, history: e });
    }, [h]);
    Ct.PUBLIC_ROUTER_DEBUG && console.log('🗺️ Route updated:', m);
    const p = u.useMemo(() => {
            const e = l.createCallback(
                    (e, t) => (
                        Ct.PUBLIC_ROUTER_DEBUG && console.log('➡️ Going to', e, t),
                        { route: e, ...(Boolean(t) && { params: JSON.stringify(t) }) }
                    ),
                    'navigateTo',
                ),
                t = l.createCallbackNoArgs('navigateBack');
            return {
                push: e,
                replace: e,
                goBack: Ct.PUBLIC_ROUTER_DEBUG
                    ? () => {
                          (console.log('🗺️ Route back'), t());
                      }
                    : t,
            };
        }, [l]),
        g = u.useMemo(() => ({ ...m, ...p }), [p, m]);
    return c.jsx(Nt.Provider, { value: g, children: e });
}
function jt(e) {
    const t = e.indexOf(':');
    return $(t < 0 ? e.toLowerCase() : e.substring(t + 1).toLowerCase());
}
u.createContext(void 0);
const At = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    It = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
function Mt(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
const Ot = (function (e, t, n) {
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
                r = y(n.className, n.cva),
                o = n.element,
                i = u.forwardRef(function (e, t) {
                    return u.createElement(o, { ...('function' == typeof o ? e : Mt(s, e)), ref: t, className: r(e) });
                });
            return ((i.displayName = e), n.cva && (i.cva = n.cva), i);
        }
        const i = y(t, n),
            a = u.forwardRef(function (t, n) {
                return c.jsx('div', { 'data-name': e, ...Mt(s, t), ref: n, className: i(t) });
            });
        return ((a.displayName = e), a);
    })('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    Lt = u.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: o = !1, silent: s = !1, ...i },
        a,
    ) {
        const u = at();
        return c.jsx(Ot, {
            ...i,
            ref: a,
            onMouseEnter: function (e) {
                (o || s || u.play('mouse-enter', { target: r || 'Button', original: e }), null == n || n(e));
            },
            onClick: function (e) {
                o || (s || u.play('click', { target: r || 'Button', original: e }), null == t || t(e));
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
    Pt = u.forwardRef(function (
        {
            children: e,
            size: t = It.large,
            theme: n = At.primary,
            disabled: r = !1,
            silent: o = !1,
            autoAlignContent: s = !0,
            classNames: i,
            className: a,
            ...u
        },
        d,
    ) {
        return c.jsxs(Lt, {
            ...u,
            ref: d,
            silent: o,
            disabled: r,
            className: l(
                $t.base,
                $t[`base__size-${t}`],
                $t[`base__theme-${n}`],
                r ? $t.base__disabled : $t.base__enabled,
                a,
                null == i ? void 0 : i.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = u.onClick) || t.call(u, e);
            },
            children: [
                c.jsx('div', { className: l($t.background, null == i ? void 0 : i.background) }),
                c.jsx('div', { className: l($t.border, null == i ? void 0 : i.border) }),
                c.jsx('div', { className: l($t.overlay, null == i ? void 0 : i.overlay) }),
                c.jsx('div', {
                    className: l($t.content, s && $t.content__fontAligned, null == i ? void 0 : i.content),
                    children: e,
                }),
            ],
        });
    });
((Pt.themes = At), (Pt.sizes = It));
const Bt = 1,
    Ft = 2,
    zt = 3;
const Ut = 'FormatText_db904f12',
    Ht = 'FormatText_base__fullSize_a514958e',
    Wt = new Set(
        (null ==
        (e =
            'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom')
            ? void 0
            : e.split(', ')) ?? [],
    );
let Vt = 0;
function qt() {
    return ++Vt;
}
const Xt = {
    class: function (e, ...t) {
        return c.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            qt(),
        );
    },
    colorLegacy: function (e, t) {
        const n = qt();
        return Wt.has(String(t))
            ? c.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : c.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: function e(t) {
        if (Array.isArray(t)) return t.map(e);
        if ('string' == typeof t) {
            const e = b.resolve('langCode');
            return c.jsx(
                u.Fragment,
                { children: Se(Ne(t, e), e, (e, t) => c.jsx('span', { children: e }, `${e}${t}`)) },
                qt(),
            );
        }
        return t;
    },
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
            qt(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function Gt(e, t, n, r) {
    const o = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...o] = n.slice(1, -1).split(' ');
                return t ? Gt(e, t, o, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        s = r[t];
    return s ? s(e, ...o) : (console.error(`Function ${t} is not registered`), e);
}
function Kt(e, t, n) {
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
        return r ? Gt(e, r, o, n) : e;
    }, t);
}
function Zt(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function Jt(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !Zt(e[r]); ) r++;
            const o = e.slice(n + 1, r),
                s = t[o];
            if (s) return Jt(e.replace(`$${o}`, String(s)), t);
        }
    }
    return e;
}
function Yt(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = Jt(e[r], t);
    return n;
}
const Qt = ['number', 'string', 'undefined'];
function en(e, t, n = {}, r = !0) {
    r && (Vt = 0);
    const o = [];
    function s(e) {
        if (Qt.includes(typeof e)) {
            const t = o.at(-1);
            if ('string' == typeof t) return void (o[o.length - 1] = t + e);
        }
        o.push(e);
    }
    for (const i of e)
        if (i.type === Bt) s(i.value);
        else if (i.type === zt)
            null === n[i.name] || Qt.includes(typeof n[i.name])
                ? s(n[i.name] ?? `{{${i.name}}}`)
                : o.push(c.jsx(u.Fragment, { children: n[i.name] }, `var-${i.name}-${i.instanceId}`));
        else if (i.type === Ft) {
            const e = en(i.children, t, n, !1),
                r = Kt(Yt(i.attrs, n), e, t);
            o.push(r);
        }
    return o;
}
function tn(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function nn(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function rn(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const on = { start: '{{', end: '}}' },
    sn = u.memo(function (e) {
        const {
                brackets: t = on,
                text: n,
                params: r,
                upgradeLegacy: o,
                fullSize: s,
                inline: i,
                formatters: a,
                split: d,
                ...f
            } = e,
            h = u.useMemo(
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
                              })(e, rn, tn, nn);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            m = u.useMemo(() => (e.formatters ? { ...Xt, ...e.formatters } : Xt), [e.formatters]),
            p = u.useMemo(
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
                                        o = { type: Ft, attrs: t.split('|'), instanceId: ++a, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(o) : n.push(o),
                                        r.push({ node: o, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: zt, instanceId: ++a, name: e };
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
                    })(d ? `{{@ split}}${h}{{/}}` : h, t),
                [t, h, d],
            ),
            g = u.useMemo(() => en(p, m, e.params), [p, m, e.params]),
            w = l(Ut, s && Ht, f.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              c.jsx('p', {
                  ...f,
                  className: w,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: g,
              }))
            : c.jsx('span', { ...f, className: w, children: g });
    });
export {
    Pt as B,
    sn as F,
    Dt as M,
    St as U,
    ae as a,
    ot as b,
    xt as c,
    tt as d,
    nt as e,
    lt as f,
    jt as g,
    he as h,
    Et as i,
    Tt as j,
    Je as k,
    ne as l,
    de as m,
    le as n,
    Rt as o,
    b as r,
    ee as s,
    be as t,
    at as u,
};
