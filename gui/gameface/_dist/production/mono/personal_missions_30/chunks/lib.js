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
    d as a,
    e as i,
    l,
    r as c,
    j as u,
    f as d,
    o as f,
    u as m,
    g as h,
    h as _,
    R as p,
    i as g,
    k as v,
    m as b,
    n as w,
    C as x,
} from './vendor.js';
const y = r();
function E(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function C(e, t) {
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
class S {
    constructor(e, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = E(this.prefix, e),
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
            })(this.root, r);
        return void 0 === s ? ('silent' !== n && C(`Resource not found: ${r}`, n), t()) : s;
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
var L = ((e) => (
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
))(L || {});
const T = { integral: 0, gold: 1 },
    N = { fractional: 0, woZeroDigits: 1 },
    P = Object.keys(T),
    B = Object.keys(N);
function M(e) {
    return Number.isFinite(e)
        ? e < 0
            ? (console.error(`Negative timestamp (${e}) is not allowed. Clamping to 0.`), 0)
            : e > Number.MAX_SAFE_INTEGER
              ? (console.error(`Number(${e}) is bigger than MAX_SAFE_INTEGER. Clamping to ${Number.MAX_SAFE_INTEGER}.`),
                Number.MAX_SAFE_INTEGER)
              : e
        : (console.error(`Incorrect value to convert. Value is ${e}. Expected a finite number.`), 0);
}
const D = { full: L.FullTime, short: L.ShortTime },
    k = Object.keys(D);
const I = { short: 0, full: 1 },
    O = {
        isNumberFormat: function (e) {
            return e in T;
        },
        formatNumber: function (e, t) {
            return window.systemLocale.getNumberFormat(t, T[e]);
        },
        numberFormats: P,
        isRealFormat: function (e) {
            return e in N;
        },
        formatReal: function (e, t) {
            return window.systemLocale.getRealFormat(t, N[e]);
        },
        realFormats: B,
        formatDateTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(M(t), e, n);
        },
        dateTimeFormats: L,
        formatTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(M(t), e, n);
        },
        timeFormats: k,
        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
        system: {
            time: (e, t) => window.systemLocale.getTimeFormat(M(e), I[t]),
            date: (e, t) => window.systemLocale.getDateFormat(M(e), I[t]),
        },
    };
function F(e, t) {
    const n = e.split('.');
    if (window.R && window.R.strings) {
        const e = n[n.length - 1];
        if (!e) return;
        const r = window.R.strings,
            s = n.slice(0, -1).reduce((e, t) => {
                if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
            }, r);
        if (!s) return;
        return 'function' == typeof s[e] ? (t ? s[e](t) : s[e]()) : void 0;
    }
    throw new Error('R class with strings field is not defined');
}
class $ {
    constructor(e) {
        this.prefix = e;
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = E(this.prefix, e),
            s = F(r);
        return void 0 === s ? ('silent' !== n && C(`Resource not found: ${r}`, n), t()) : s;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = E(this.prefix, e),
            n = F(t);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const s = E(this.prefix, e),
            o = F(s, t);
        return void 0 === o ? ('silent' !== r && C(`Resource not found: ${s}`, r), n()) : o;
    }
    pluralOrEmpty(e, t, n = 'warn') {
        return this.pluralOr(e, t, () => '', n);
    }
}
class j {
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
        return void 0 === r ? ('silent' !== n && C(`Resource not found: ${e}`, n), t()) : r;
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
y.register({
    strings: a(() => new $()).singleton(),
    images: a(() => new S(window.R.images.gui.maps.icons)).singleton(),
    atlases: a(() => new S(window.R.atlases)).singleton(),
    videos: a(() => new j(window.R.videos)).singleton(),
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
                    : C(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: s(R.strings.settings.LANGUAGE_CODE()),
    intl: s(O),
});
const A = {
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => --e * e * e + 1,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - --e * e * e * e,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc(e) {
        const t = Math.sqrt,
            n = Math.pow;
        return e < 0.5 ? (1 - t(1 - n(2 * e, 2))) / 2 : (t(1 - n(-2 * e + 2, 2)) + 1) / 2;
    },
};
function H(e) {
    return e.replaceAll('-', '_');
}
function z(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function U(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const V = z('clientResized'),
    G = z('self.onScaleUpdated'),
    Z = z('clientMinimized'),
    W = { down: z('mousedown'), up: z('mouseup'), move: z('mousemove') };
const q = (function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && U(!1);
    }
    function n() {
        e.enabled && U(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  U(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : U(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const s = `mouse${t}`,
                            o = W[t]((e) => n([e, 'outside']));
                        function a(e) {
                            n([e, 'inside']);
                        }
                        return (
                            window.addEventListener(s, a),
                            r(),
                            () => {
                                (o(), window.removeEventListener(s, a), (e.listeners -= 1), r());
                            }
                        );
                    };
                })(n)),
                t
            ),
            {},
        ),
        disable() {
            ((e.enabled = !1), r());
        },
        enable() {
            ((e.enabled = !0), r());
        },
        enableOutside() {
            e.enabled && U(!0);
        },
        disableOutside() {
            e.enabled && U(!1);
        },
    };
})();
function X(e = 'px') {
    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
}
function Y(e) {
    engine.call('PlaySound', e);
}
const Q = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    K = { ...Object.keys(Q).reduce((e, t) => ((e[t] = () => Y(Q[t])), e), {}), sound: Y },
    J = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    ee = {
        onTextureFrozen: z('self.onTextureFrozen'),
        onTextureReady: z('self.onTextureReady'),
        onDomBuilt: z('self.onDomBuilt'),
        onLoaded: z('self.onLoaded'),
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
        onDisplayChanged: z('self.onShowingStatusChanged'),
        onFocusUpdated: z('self.onFocusChanged'),
        children: {
            onAdded: z('children.onAdded'),
            onLoaded: z('children.onLoaded'),
            onRemoved: z('children.onRemoved'),
            onAttached: z('children.onAttached'),
            onTextureReady: z('children.onTextureReady'),
            onRequestPosition: z('children.requestPosition'),
        },
    },
    te = 1,
    ne = 2,
    re = 4,
    se = 16,
    oe = 32,
    ae = 64;
function ie(e) {
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
const le = (e) => {
        const t = [];
        for (const [n, r] of Object.entries(e)) {
            const e = ie(r);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
        }
        return t;
    },
    ce = (e, t) => {
        const n = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...s } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: n, type: e, ...s, arguments: le(r) })
                : viewEnv.handleViewEvent({ __Type: n, type: e, ...s });
        }
        return viewEnv.handleViewEvent({ __Type: n, type: e });
    },
    ue = new Map(),
    de = {
        close(e) {
            ce('popover' === e ? ne : oe);
        },
        closeView() {
            ce(oe);
        },
        minimize() {
            ce(ae);
        },
        move(e) {
            ce(se, { isMouseEvent: !0, on: e });
        },
        popover: {
            open({ contentID: e, decoratorID: t = 0, targetID: n, direction: r, boundingBox: s, args: o }) {
                var a;
                ce(ne, {
                    contentID: e,
                    decoratorID: t,
                    targetID: n,
                    direction: r,
                    bbox: ((a = s), { __Type: 'GFBoundingBox', x: a.x, y: a.y, width: a.width, height: a.height }),
                    on: !0,
                    isMouseEvent: !0,
                    args: o,
                });
            },
            close() {
                ce(ne, { on: !1 });
            },
        },
        tooltip: {
            open(e, t, n = 0, r) {
                (ce(te, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    ue.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (ce(te, { contentID: t, decoratorID: n, targetID: e, on: !1 }), ue.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(ue.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
        contextMenu: {
            open(e, t, n = 0, r) {
                ce(re, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r });
            },
            hide(e, t, n = 0) {
                ce(re, { contentID: t, decoratorID: n, targetID: e, on: !1, isMouseEvent: !1 });
            },
        },
    };
function fe() {
    return window.subViews.ids();
}
function me(e) {
    return viewEnv.pxToRem(e);
}
function he(e) {
    return viewEnv.remToPx(e);
}
function _e() {
    viewEnv.forceTriggerMouseMove();
}
function pe(e) {
    viewEnv.setContentReady(e);
}
Object.keys(J).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === J[t]), e), {});
class ge {
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
const ve = (e) => (0 === e ? window : window.subViews.get(e));
function be(
    { initializer: e = !0, rootId: t = 0, getRoot: n = ve, context: r = 'model' } = {},
    { name: s = 'DataLayer' } = {},
) {
    const o = new Map(),
        a = { subscribersNotified: new ge() },
        i = engine.whenReady.then(() => {
            function e(e, t, n) {
                (n.forEach((n) => {
                    const r = o.get(n);
                    void 0 !== r && r(e, t);
                }),
                    a.subscribersNotified.emit());
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
    function l() {
        try {
            const e = n(t);
            return r.split('.').reduce((e, t) => e[t], e);
        } catch (e) {
            throw new Error(`Failure get root of ${s}. Root id: ${t}. Context: ${r}`);
        }
    }
    const c = (e) => {
        const n = l();
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
    function u(e) {
        viewEnv.removeDataChangedCallback(e, t) ? o.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (n, s) => {
            const a = (function (e, t, n) {
                return viewEnv.addDataChangedCallback(e, t, n);
            })('string' == typeof s ? `${r}.${s}` : r, t, !0);
            return (o.set(a, n), e && n(c(s), []), a);
        },
        readByPath: c,
        readSafeByPath: (e) => {
            const t = l();
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
            if (0 === t || fe().includes(t)) for (const e of o.keys()) u(e);
            i.then((e) => e());
        },
        unsubscribe: u,
        events: a,
    };
}
function we(e, t) {
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
const xe = (e, t, n) => (n < e ? e : n > t ? t : n);
function ye() {}
function Ee() {
    return !1;
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((a.prototype.append = function (e, t) {
                ((e = s(e)), (t = o(t)));
                var n = this.map[e];
                (n || ((n = []), (this.map[e] = n)), n.push(t));
            }),
                (a.prototype.delete = function (e) {
                    delete this.map[s(e)];
                }),
                (a.prototype.get = function (e) {
                    var t = this.map[s(e)];
                    return t ? t[0] : null;
                }),
                (a.prototype.getAll = function (e) {
                    return this.map[s(e)] || [];
                }),
                (a.prototype.has = function (e) {
                    return this.map.hasOwnProperty(s(e));
                }),
                (a.prototype.set = function (e, t) {
                    this.map[s(e)] = [o(t)];
                }),
                (a.prototype.forEach = function (e) {
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
            (u.call(d.prototype),
                u.call(h.prototype),
                (self.Headers = a),
                (self.Request = d),
                (self.Response = h),
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
                            function a() {
                                if (4 === o.readyState) {
                                    var e = 1223 === o.status ? 204 : o.status;
                                    if (e < 100 || e > 599) n(new TypeError('Network request failed'));
                                    else {
                                        var r = {
                                                status: e,
                                                statusText: o.statusText,
                                                headers: m(o),
                                                url:
                                                    'responseURL' in o
                                                        ? o.responseURL
                                                        : /^X-Request-URL:/m.test(o.getAllResponseHeaders())
                                                          ? o.getResponseHeader('X-Request-URL')
                                                          : void 0,
                                            },
                                            s = 'response' in o ? o.response : o.responseText;
                                        t(new h(s, r));
                                    }
                                }
                            }
                            ('cors' === s.credentials && (o.withCredentials = !0),
                                (o.onreadystatechange = a),
                                self.usingActiveXhr ||
                                    ((o.onload = a),
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
        function a(e) {
            this.map = {};
            var t = this;
            e instanceof a
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
        function i(e) {
            if (e.bodyUsed) return fetch.Promise.reject(new TypeError('Already read'));
            e.bodyUsed = !0;
        }
        function l(e) {
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
            return (t.readAsArrayBuffer(e), l(t));
        }
        function u() {
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
                          var e = i(this);
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
                              n = i(this);
                          if (n) return n;
                          if (this._bodyBlob) return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), l(t));
                          if (this._bodyFormData) throw new Error('could not read FormData body as text');
                          return fetch.Promise.resolve(this._bodyText);
                      }))
                    : (this.text = function () {
                          var e = i(this);
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
            var r, s;
            if (
                ((t = t || {}),
                (this.url = e),
                (this.credentials = t.credentials || 'omit'),
                (this.headers = new a(t.headers)),
                (this.method = ((r = t.method || 'GET'), (s = r.toUpperCase()), n.indexOf(s) > -1 ? s : r)),
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
                                s = n.join('=').replace(/\+/g, ' ');
                            t.append(decodeURIComponent(r), decodeURIComponent(s));
                        }
                    }),
                t
            );
        }
        function m(e) {
            var t = new a();
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
        function h(e, t) {
            (t || (t = {}),
                this._initBody(e),
                (this.type = 'default'),
                (this.url = null),
                (this.status = t.status),
                (this.ok = this.status >= 200 && this.status < 300),
                (this.statusText = t.statusText),
                (this.headers = t.headers instanceof a ? t.headers : new a(t.headers)),
                (this.url = t.url || ''));
        }
    })());
const Ce = { NONE: -1, ESCAPE: 27, ARROW_LEFT: 37, ARROW_RIGHT: 39 };
function Re(e, t) {
    var n;
    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
}
const Se = Re;
function Le(e, t) {
    return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r));
}
function Te(e, t) {
    var n;
    if (Array.isArray(e)) return e.filter(t);
    const r = [];
    for (let s = 0; s < e.length; s++) {
        const o = null == (n = e[s]) ? void 0 : n.value;
        t(o, s, e) && r.push(o);
    }
    return r;
}
function Ne(e, t) {
    for (let n = 0; n < e.length; n++) {
        if (t(Se(e, n), n, e)) return n;
    }
}
function Pe(e, t, n) {
    if (Array.isArray(e)) return e.reduce(t, n);
    let r = n;
    for (let s = 0; s < e.length; s++) {
        r = t(r, Se(e, s), s, e);
    }
    return r;
}
function Be(e) {
    const t = {};
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            const r = e[n];
            t[n] = i(r);
        }
    return t;
}
const Me = (e) => {
    let t,
        n = null;
    return (
        (n = requestAnimationFrame(() => {
            n = requestAnimationFrame(() => {
                ((n = null), (t = e()));
            });
        })),
        () => {
            ('function' == typeof t && t(), null !== n && cancelAnimationFrame(n));
        }
    );
};
function De(e, t) {
    e || console.error(t || 'Assertion failed');
}
function ke(e, t, n) {
    return 'function' == typeof t ? Ie(0, e, t) : (De(void 0 !== n, 'fn must be defined'), Ie(e, t, n));
}
function Ie(e, t, n) {
    const r = new Array(t - e);
    for (let s = e; s < t; s++) r[s] = n(s);
    return r;
}
De.log = function (e, t) {
    e || console.error(t || 'Assertion failed');
};
const Oe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    Fe = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
    $e = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
function je(e) {
    if (e <= 10) return $e[e] ?? String(e);
    let t = '';
    for (let n = Fe.length - 1; n >= 0; n--) {
        let r = Fe[n];
        for (; void 0 !== r && e >= r; ) ((t += Oe[n]), (e -= r));
    }
    return t;
}
function Ae(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
}
function He() {
    return Math.random() > 0.5;
}
['ko', 'no'].includes(y.resolve('langCode'));
class ze {
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
const Ue = 0,
    Ve = new Set(['zh_cn', 'zh_sg', 'zh_tw']);
function Ge(e, t, n) {
    return Ve.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
}
function Ze(e, t) {
    return Ve.has(t)
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
          ? l()
                .parse(e)
                .map((e) => e.replace(/&nbsp;/g, ' '))
          : e.split(' ');
}
const We = c.createContext(void 0);
const qe = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large', extraLarge: 'extraLarge' },
    Xe = {
        extraSmall: { weight: 0, name: qe.extraSmall, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: qe.small, className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: qe.medium, className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: qe.large, className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: qe.extraLarge, className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var Ye,
    Qe,
    Ke,
    Je =
        (((Ye = Je || {})[(Ye.Small = Xe.small.width)] = 'Small'),
        (Ye[(Ye.Medium = Xe.medium.width)] = 'Medium'),
        (Ye[(Ye.Large = Xe.large.width)] = 'Large'),
        (Ye[(Ye.ExtraLarge = Xe.extraLarge.width)] = 'ExtraLarge'),
        Ye),
    et =
        (((Qe = et || {})[(Qe.Small = Xe.small.width)] = 'Small'),
        (Qe[(Qe.Medium = Xe.medium.width)] = 'Medium'),
        (Qe[(Qe.Large = Xe.large.width)] = 'Large'),
        (Qe[(Qe.ExtraLarge = Xe.extraLarge.width)] = 'ExtraLarge'),
        Qe),
    tt =
        (((Ke = tt || {})[(Ke.Small = Xe.small.height)] = 'Small'),
        (Ke[(Ke.Medium = Xe.medium.height)] = 'Medium'),
        (Ke[(Ke.Large = Xe.large.height)] = 'Large'),
        (Ke[(Ke.ExtraLarge = Xe.extraLarge.height)] = 'ExtraLarge'),
        Ke);
const nt = Object.values(Xe);
function rt(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        s = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...s])).join(' ');
}
const st = () => {
    const e = (function (e = 'px') {
        return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
    })('rem');
    return (function (e, t, n) {
        const r = nt.reduce(
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
            a = o.names[o.names.length - 1] ?? qe.extraSmall,
            i = Xe[a],
            l = r.width.names,
            c = r.height.names,
            u = l[l.length - 1] ?? qe.extraSmall,
            d = c[c.length - 1] ?? qe.extraSmall,
            f = { width: Xe[u].width, height: Xe[d].height };
        return {
            mediaClass: rt(s, r),
            breakpoint: i,
            screenWidthRem: e,
            screenHeightRem: t,
            breaks: o.names,
            sides: f,
            mediaSize: i.width,
            mediaWidth: f.width,
            mediaHeight: f.height,
            upscale: n > 1,
        };
    })(e.width, e.height, he(1));
};
function ot({ children: e }) {
    const [t, n] = c.useState(st);
    return (
        c.useLayoutEffect(() => {
            function e() {
                n(st);
            }
            e();
            const t = V(e),
                r = G(e);
            return () => {
                (t(), r());
            };
        }, []),
        u.jsx(We.Provider, { value: t, children: e })
    );
}
function at() {
    return (function () {
        const e = c.useContext(We);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function it({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: s } = at();
    return u.jsx('div', { className: d(t, 'media-wrapper', r, s && 'media-upscale'), ...n, children: e });
}
function lt({ children: e, ...t }) {
    return u.jsx(ot, { children: u.jsx(it, { ...t, children: e }) });
}
function ct(e, t) {
    return (function (e, t, n) {
        return n ? e.breaks.reduce((e, t) => (n[t] ? { ...e, ...n[t] } : e), t) : t;
    })(at(), e, t);
}
const ut = (e) => {
    const t = c.useRef();
    return (
        c.useEffect(() => {
            t.current = e;
        }, [e]),
        t.current
    );
};
function dt() {
    return c.useMemo(() => {
        const e = {},
            t = (t) => (e[t] || (e[t] = new Set()), e[t]),
            n = (e, n) => {
                t(e).delete(n);
            };
        return {
            on: (e, r) => (t(e).add(r), () => n(e, r)),
            off: n,
            trigger: (e, ...n) => {
                for (const r of t(e).values()) r(...n);
            },
        };
    }, []);
}
const ft = [];
function mt(e) {
    const t = c.useRef(e);
    return (
        c.useLayoutEffect(() => {
            t.current = e;
        }),
        c.useCallback((...e) => (0, t.current)(...e), ft)
    );
}
function ht(e) {
    c.useEffect(e, []);
}
function _t(e) {
    c.useEffect(() => e, []);
}
const pt = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new ze();
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
                if (e === Ce.NONE) return Ee;
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
    gt = c.createContext(void 0);
function vt(e, t, n, r) {
    const s = mt((e) => {
            viewEnv.isEventHandled() || (n(e), viewEnv.setEventHandled());
        }),
        o = (function () {
            const e = c.useContext(gt);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        a = c.useMemo(() => o[t].register(e, s), [o, t, e, s]);
    c.useEffect(() => a, [a]);
}
function bt(e, t, n) {
    return vt(e, 'keydown', t);
}
function wt(e) {
    const t = c.useMemo(pt, []),
        n = c.useMemo(pt, []);
    c.useEffect(() => {
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
    const r = c.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: n.register, unregister: n.unregister },
        }),
        [t, n],
    );
    return u.jsx(gt.Provider, { value: r, children: e.children });
}
function xt(e, t) {
    c.useEffect(() => (window.addEventListener('resize', e), () => window.removeEventListener('resize', e)), t);
}
const yt = (e, t, n = !0) => {
        const r = mt((e) => {
            const n = e[0];
            n && t(n);
        });
        c.useEffect(() => {
            if (!e.current || !n) return;
            const t = new ResizeObserver((e) => r(e));
            return (
                t.observe(e.current),
                () => {
                    t.disconnect();
                }
            );
        }, [r, n, e]);
    },
    Et = 0;
function Ct() {
    const e = c.useRef(Et);
    return (
        _t(() => {
            window.cancelAnimationFrame(e.current);
        }),
        c.useMemo(
            () => ({
                run: (t) => {
                    (window.cancelAnimationFrame(e.current),
                        (e.current = window.requestAnimationFrame(() => {
                            e.current = window.requestAnimationFrame(() => {
                                (t(), (e.current = Et));
                            });
                        })));
                },
                clear: () => {
                    (window.cancelAnimationFrame(e.current), (e.current = Et));
                },
                get isRunning() {
                    return e.current !== Et;
                },
            }),
            [],
        )
    );
}
function Rt(e, t, n) {
    const r = c.useMemo(
        () =>
            (function (e, t, n, r) {
                let s,
                    o = !1,
                    a = 0;
                function i() {
                    s && clearTimeout(s);
                }
                function l(...l) {
                    const c = this,
                        u = Date.now() - a;
                    function d() {
                        ((a = Date.now()), n.apply(c, l));
                    }
                    o ||
                        (r && !s && d(),
                        i(),
                        void 0 === r && u > e
                            ? d()
                            : !0 !== t &&
                              (s = setTimeout(
                                  r
                                      ? function () {
                                            s = void 0;
                                        }
                                      : d,
                                  void 0 === r ? e - u : e,
                              )));
                }
                return (
                    'boolean' != typeof t && ((r = n), (n = t), (t = void 0)),
                    (l.cancel = function () {
                        (i(), (o = !0));
                    }),
                    l
                );
            })(n, e),
        t,
    );
    return (c.useEffect(() => r.cancel, [r]), r);
}
const St = 0;
function Lt() {
    const e = c.useRef(St);
    return (
        _t(() => {
            window.clearTimeout(e.current);
        }),
        c.useMemo(
            () => ({
                run: (t, n) => {
                    (window.clearTimeout(e.current),
                        (e.current = window.setTimeout(() => {
                            ((e.current = St), t());
                        }, n)));
                },
                clear: () => {
                    (window.clearTimeout(e.current), (e.current = St));
                },
                get isRunning() {
                    return e.current !== St;
                },
            }),
            [],
        )
    );
}
function Tt({ resId: e = 0, contentId: t, decoratorId: n, disabled: r, args: s, showDelay: o = 400 }) {
    const a = Lt(),
        i = c.useRef({ display: !1, resId: e }),
        [{ hide: l, getCurrentState: u }, d] = c.useMemo(() => {
            function l() {
                r || ((i.current.display = !0), de.tooltip.open(e, t, n, s));
            }
            function c() {
                (a.clear(), de.tooltip.hide(e, t, n), (i.current.display = !1));
            }
            return [
                { hide: c, show: l, getCurrentState: () => i.current },
                {
                    onMouseEnter: () => {
                        a.run(l, o);
                    },
                    onMouseLeave: c,
                    onClick: c,
                },
            ];
        }, [s, t, n, r, e, o, a]);
    return (
        _t(() => {
            const e = u().resId;
            u().display && void 0 !== e && fe().includes(e) && l();
        }),
        d
    );
}
function Nt({ alert: e, body: t, header: n, note: r, hasHtmlContent: s }) {
    return Tt(
        c.useMemo(() => {
            const o = y.resolve('views');
            return {
                contentId: o.read((e) =>
                    s
                        ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                        : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
                ),
                decoratorId: o.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
                args: { body: t, header: n, note: r, alert: e },
            };
        }, [e, t, n, r, s]),
    );
}
const Pt = [];
function Bt(e, t = Pt, n) {
    return Tt(
        c.useMemo(
            () => ({
                ...n,
                disabled: null == n ? void 0 : n.disabled,
                contentId: y.resolve('aliases').read((e) => e.common.tooltip.Backport('resId')),
                args: { tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == n ? void 0 : n.args) },
            }),
            [t, e, n],
        ),
    );
}
function Mt(e, t, n) {
    return Tt(
        c.useMemo(
            () => ({
                ...n,
                disabled: 'string' != typeof e || (null == n ? void 0 : n.disabled),
                contentId: y.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
                args: { type: e, params: JSON.stringify(t), resId: t.resId },
            }),
            [t, e, n],
        ),
    );
}
const Dt = ['ko', 'no'];
const kt = {
    click: It('play'),
    'mouse-enter': It('highlight'),
    increaseAmount: It('cons_ammo_roll_plus'),
    decreaseAmount: It('cons_ammo_roll_minus'),
    close: It('cancelcloseno'),
    'show-context-menu': It('tabb'),
};
function It(e) {
    return () => {
        K.sound(e);
    };
}
const Ot = c.createContext(null);
function Ft({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const s = c.useMemo(() => ({ ...kt, ...t }), [t]),
        o = c.useMemo(
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
    return u.jsx(Ot.Provider, { value: o, children: r });
}
function $t() {
    const e = c.useContext(Ot);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const jt = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    At = new Set(['number', 'string', 'boolean', 'bigint']),
    Ht = new Set(['Dict']);
function zt(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var s, o;
    const a = e,
        i = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (jt.has(i)) return a;
    if (null === a) return a;
    const l = { depth: n + 1, maxDepth: r };
    if (Array.isArray(a)) return a.map((e) => zt(e, l));
    if ('object' === i) {
        const r = (null == (s = a.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => zt(e, l));
        if ('CoherentArrayProxy' === r) return e.map((e) => zt(e.value, l));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in a) {
                    const n = a[t];
                    At.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in a) {
                    const n = a[t],
                        r = (null == (o = null == a ? void 0 : a.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                    Ht.has(r) || (e[t] = zt(n, l));
                }
                return e;
            }
        }
        const i = {};
        for (const e of Object.keys(a)) i[e] = zt(a[e], l);
        return i;
    }
    return (console.error('Incorrect value to clone model', a), a);
}
const Ut = { deep: !1, equals: Ee },
    Vt = { cloneItem: !0 },
    Gt = { shallow: !1 };
class Zt {
    constructor(e, t = Vt) {
        (n(this, '_data'),
            n(this, '_keys'),
            n(
                this,
                'set',
                i((e) => {
                    this._data.set(e);
                }),
            ),
            (this.options = t));
        const r = {},
            s = e.keys();
        for (let n = 0; n < s.length; n++) {
            const t = s[n];
            r[t] = f.box(this.takeItem(e, t), Ut);
        }
        ((this._keys = f.set(new Set(s))), (this._data = f.box(r, Ut)));
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
                : null !== o && ((n[s] = f.box(o, Ut)), this._keys.add(s), this.set(n));
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
        return this.options.cloneItem ? zt(n, Gt) : n;
    }
    untrackedData() {
        return m(() => this._data.get());
    }
}
const Wt = c.createContext({ mode: 'real' });
function qt(e) {
    return (t, n) => {
        const r = we(t, n);
        return r
            ? (function (e, t) {
                  const n = e.split('.');
                  let r = t;
                  for (const s of n) r = null == r ? void 0 : r[s];
                  return r;
              })(r, e)
            : e;
    };
}
const Xt = { equals: Ee, deep: !1 };
function Yt(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        i(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const s = (s, o, a = Xt) => {
            const i = f.box(s(n(o)), a);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(s(e))), o), i);
        },
        o = (s, o) => {
            const a = new Zt(n(s), o);
            return ('real' === t && e.subscribe((e, t) => r.push(() => a.update(e, t)), s), a);
        },
        a = (s, o) => {
            const a = f.box(n(s) ?? o, Xt);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(e)), s), a);
        };
    return {
        dict: o,
        dictRef: (e, t) => o(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => s(zt, e),
        array: a,
        object: a,
        transform: s,
        primitives: (s, o) => {
            const a = n(o);
            if (Array.isArray(s)) {
                const n = s.reduce((e, t) => ((e[t] = f.box(a[t], {})), e), {});
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
                    i = Object.entries(n),
                    l = i.reduce((e, [t, n]) => ((e[n] = f.box(a[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                i.forEach(([t, n]) => {
                                    l[n].set(e[t]);
                                }),
                            );
                        }, o),
                    l
                );
            }
        },
    };
}
const Qt =
        (e = 'DataLayerProvider') =>
        (t, n, r) => {
            const s = c.createContext(null);
            function o(o) {
                var a;
                const { mode: i, options: l, children: d, mocks: f } = o,
                    m = c.useContext(Wt),
                    h = i ?? m.mode,
                    _ = f ?? m.mocks,
                    p = c.useRef([]),
                    g = null == (a = null == r ? void 0 : r.useRequires) ? void 0 : a.call(r),
                    v = mt((s, a, i) => {
                        var l;
                        const c =
                                'real' !== s && i
                                    ? (function (e, t) {
                                          return {
                                              subscribe: () => 0,
                                              readSafeByPath: e,
                                              readByPath: e,
                                              createCallback: (n, r) => {
                                                  const s = e(we(r, t));
                                                  return (...e) => {
                                                      s(n(...e));
                                                  };
                                              },
                                              createCallbackNoArgs: (n) => {
                                                  const r = e(we(n, t));
                                                  return () => {
                                                      r();
                                                  };
                                              },
                                              dispose: () => {},
                                              unsubscribe: () => {},
                                              events: { subscribersNotified: new ge() },
                                          };
                                      })(i.getter, a)
                                    : be(a, { name: e }),
                            u = (e) => ('mocks' === s ? (null == i ? void 0 : i.getter(e, a)) : c.readByPath(e)),
                            d = (e) => p.current.push(e),
                            f = 'initial' in o && {
                                initial: null == (l = null == r ? void 0 : r.initial) ? void 0 : l.call(r, o.initial),
                            },
                            m = t({
                                ...f,
                                mode: s,
                                readByPath: u,
                                requires: g,
                                externalModel: c,
                                observableModel: Yt(c, s, u),
                                cleanup: d,
                            }),
                            h = { ...f, mode: s, model: m, externalModel: c, cleanup: d, requires: g },
                            _ = 'mocks' === s && (null == i ? void 0 : i.controls) ? i.controls(h) : {};
                        return {
                            model: m,
                            controls: { ...(null == n ? void 0 : n(h)), ..._ },
                            externalModel: c,
                            mode: s,
                        };
                    }),
                    b = c.useRef(!1),
                    [w, x] = c.useState(h);
                c.useEffect(() => {
                    x(h);
                }, [h]);
                const [y, E] = c.useState(() => v(w, l, _));
                return (
                    c.useEffect(() => {
                        b.current ? E(v(w, l, _)) : (b.current = !0);
                    }, [
                        v,
                        _,
                        w,
                        null == l ? void 0 : l.context,
                        null == l ? void 0 : l.initializer,
                        null == l ? void 0 : l.getRoot,
                        null == l ? void 0 : l.rootId,
                    ]),
                    c.useEffect(
                        () => () => {
                            (y.externalModel.dispose(), p.current.forEach((e) => e()));
                        },
                        [y],
                    ),
                    u.jsx(s.Provider, { value: y, children: d })
                );
            }
            return (
                (o.displayName = e),
                [
                    o,
                    function () {
                        const e = c.useContext(s);
                        if (!e) throw new Error(`hook useModel must be used within a ${o.displayName}.`);
                        return e;
                    },
                    { Context: s },
                ]
            );
        },
    Kt = {
        model: (e, t) => h(e, { equals: Ee, ...t }),
        primitive: h,
        shallow: (e, t) => h(e, { equals: _.shallow, ...t }),
        structural: (e, t) => h(e, { equals: _.structural, ...t }),
    },
    Jt = (e) => (t) => {
        e.forEach((e) =>
            ((e, t) => {
                e && ('function' == typeof e ? e(t) : (e.current = t));
            })(e, t),
        );
    };
c.forwardRef(function (e, t) {
    const n = c.useRef(null);
    return (
        c.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return ee.onHitTest((t) => {
                    const n = e.getBoundingClientRect();
                    return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                });
        }, []),
        u.jsx('div', { ...e, ref: Jt([t, n]) })
    );
});
class en {
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
            children: this.items.reduceRight((e, [t, n], r) => c.createElement(t, { ...n, key: r }, e), e),
        });
    }
}
async function tn(e, { root: t = document.getElementById('root'), withMedia: n = !0, fullScreen: r = !1 } = {}) {
    var s;
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
                        a = (null == (s = t.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                    switch (!0) {
                        case a.includes('CoherentArrayProxy'):
                            return [...t.values()].map((t) => e(o.convertArrays ? t.value : t, o));
                        case 'Dict' === a:
                            return [...t.entries()].reduce((t, [n, r]) => ((t[n] = e(r, o)), t), { $$type: 'Dict' });
                        case 'UNKNOWN' === a:
                            return 'UNKNOWN_TYPE';
                        case a.includes('ViewModel'):
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
    const o = n ? lt : p.Fragment,
        a = (null == (s = null == window ? void 0 : window.engine) ? void 0 : s.whenReady) ?? Promise.resolve();
    (await a,
        document.documentElement.setAttribute('lang', y.resolve('langCode')),
        g.createRoot(t).render(u.jsx(o, { children: u.jsx(wt, { children: e }) })),
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
function nn(e) {
    return u.jsx(u.Fragment, { children: e.children });
}
function rn(e) {
    return u.jsx(nn, {
        children: u.jsx(Ft, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
const sn = c.forwardRef(function (
        {
            src: e,
            className: t,
            autoplay: n = !1,
            style: r,
            loop: s = !1,
            isPrebufferKeyframes: o,
            keyframesNameConfig: a,
            onClick: i,
            ...l
        },
        d,
    ) {
        const f = d,
            m = c.useRef(null);
        return (
            ht(() => {
                let e = !1;
                return ee.onDisplayChanged((t, n) => {
                    const r = m.current;
                    r && (n === J.hidden ? ((e = r.paused), r.pause()) : e || n !== J.shown || r.play());
                });
            }),
            ht(() => {
                let e = !1;
                return Z((t) => {
                    const n = m.current;
                    n && (t ? ((e = n.paused), n.pause()) : e || n.play());
                });
            }),
            c.useEffect(
                () =>
                    Me(() => {
                        const e = m.current;
                        if (!f || !e || !o) return void ((null == e ? void 0 : e.cohFastSeek) && (e.cohFastSeek = !1));
                        const t = e.cohGetKeyframeTimestamps ? e.cohGetKeyframeTimestamps() : [];
                        t.length > 0
                            ? ((e.cohFastSeek = !0),
                              t.map((t) => {
                                  (null == e ? void 0 : e.cohPrebufferKeyframe) && e.cohPrebufferKeyframe(t);
                              }))
                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                    }),
                [o, f],
            ),
            c.useEffect(() => {
                if (f && m.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: ye },
                        t = () => {
                            let t = 0;
                            const [n, r] = (function (e) {
                                let t = 0;
                                return [
                                    function n() {
                                        (e(), (t = requestAnimationFrame(n)));
                                    },
                                    function () {
                                        cancelAnimationFrame(t);
                                    },
                                ];
                            })(() => {
                                if (m.current) {
                                    const { currentTime: n, duration: r } = m.current;
                                    if (
                                        (t !== n &&
                                            (e.changeTimeHandlers.forEach((e) => e({ currentTime: n, duration: r })),
                                            (t = n)),
                                        m.current.paused || !f || !o)
                                    )
                                        return;
                                    const s = m.current.cohGetKeyframeTimestamps
                                        ? m.current.cohGetKeyframeTimestamps()
                                        : [];
                                    s.forEach((t, r) => {
                                        void 0 !== s[r] &&
                                            n > s[r] - 0.02 &&
                                            n < s[r] &&
                                            e.changeKeyframeHandlers.forEach((e) => {
                                                const n = Object.keys(a ?? {})[r];
                                                return e({ time: t, name: `${a ? n : `Point_${r}`}` });
                                            });
                                    });
                                }
                            });
                            return (n(), r);
                        };
                    e.changeTimeLoop = t();
                    const n = (t) => (
                            e.changeTimeHandlers.push(t),
                            () => {
                                const { changeTimeHandlers: n } = e,
                                    r = n.indexOf(t);
                                r < 0
                                    ? console.warn("Can't unsubscribe changeTimeHandler, this reference was not found")
                                    : n.splice(r, 1);
                            }
                        ),
                        r = (t) => (
                            e.changeKeyframeHandlers.push(t),
                            () => {
                                const { changeKeyframeHandlers: n } = e,
                                    r = n.indexOf(t);
                                r < 0
                                    ? console.warn(
                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                      )
                                    : n.splice(r, 1);
                            }
                        ),
                        s = () => {
                            var e;
                            return null == (e = m.current) ? void 0 : e.currentTime;
                        },
                        i = () => {
                            var e;
                            return null == (e = m.current) ? void 0 : e.duration;
                        },
                        l = (e) => {
                            m.current && (m.current.currentTime = xe(0, m.current.duration, e));
                        },
                        c = () => {
                            var e;
                            return null == (e = m.current) ? void 0 : e.play();
                        },
                        u = () => {
                            var e;
                            return null == (e = m.current) ? void 0 : e.pause();
                        },
                        d = () => {
                            (u(), l(0));
                        },
                        h = () => {
                            var e;
                            return (null == (e = m.current) ? void 0 : e.cohGetKeyframeTimestamps)
                                ? m.current.cohGetKeyframeTimestamps()
                                : [];
                        },
                        _ = (e) => {
                            (l(e), c());
                        },
                        p = (e) => {
                            (l(e), u());
                        },
                        g = () => {
                            var t;
                            ((e.changeTimeHandlers = []),
                                (e.changeKeyframeHandlers = []),
                                null == (t = e.changeTimeLoop) || t.call(e));
                        },
                        v = (e, t) => {
                            var n;
                            return (
                                null == (n = m.current) || n.addEventListener(e, t),
                                () => {
                                    var n;
                                    return null == (n = m.current) ? void 0 : n.removeEventListener(e, t);
                                }
                            );
                        },
                        b = (e, t) => {
                            var n;
                            return (
                                null == (n = m.current) || n.removeEventListener(e, t),
                                () => {
                                    var n;
                                    return null == (n = m.current) ? void 0 : n.removeEventListener(e, t);
                                }
                            );
                        };
                    return (
                        (f.current = {
                            on: v,
                            off: b,
                            play: c,
                            pause: u,
                            stop: d,
                            cleanup: g,
                            getCurrentTime: s,
                            getDuration: i,
                            getCachedKeyframes: h,
                            goToAndPlay: _,
                            goToAndStop: p,
                            setCurrentTime: l,
                            domRef: m.current,
                            onChangeTime: n,
                            onKeyframes: r,
                        }),
                        () => {
                            (g(), (f.current = null));
                        }
                    );
                }
            }, [a, f, o]),
            c.useEffect(() => {
                m.current && n && m.current.play();
            }, [n, s]),
            _t(() => {
                var e;
                null == (e = m.current) || e.pause();
            }),
            u.jsx('video', { src: e, className: t, style: r, loop: s, ref: m, onClick: i, ...l })
        );
    }),
    on = c.memo(sn),
    an = () => {};
function ln(e) {
    const t = e;
    return c.forwardRef(function (e, n) {
        const r = ct(e, e.adaptive),
            { path: s, ...o } = r,
            a = r.images ?? y.resolve('images'),
            i = { ...o, ref: n };
        {
            const e = s ? a.readOr(s, an, 'warn') : void 0;
            return e ? u.jsx(t, { ...i, src: e }) : u.jsx(t, { ...i, unknown: !0 });
        }
    });
}
const cn = {
        background:
            'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
        backgroundSize: '20rem 20rem',
        backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
        backgroundColor: '#000',
    },
    un = ln(
        c.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: n,
                    fit: r,
                    position: s,
                    width: o,
                    src: a,
                    height: i,
                    unselectable: l,
                    unknown: c,
                    unknownStyle: d = cn,
                    ...f
                } = e;
                return u.jsx('div', { ...f, ref: t, style: { width: e.width, height: e.height, ...d, ...e.style } });
            }
            const {
                repeat: n,
                fit: r,
                position: s,
                width: o,
                height: a,
                unknownStyle: i,
                unknown: l,
                unselectable: c,
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
                    height: 'number' == typeof a ? `${a}rem` : a,
                    ...d.style,
                },
            });
        }),
    );
ln(
    c.forwardRef(function (e, t) {
        const { width: n, height: r, src: s, unselectable: o, unknown: a, unknownStyle: i = cn, ...l } = e;
        return e.unknown
            ? u.jsx('div', { ...l, style: { width: e.width, height: e.height, ...i } })
            : u.jsx('img', { ...l, ref: t, src: s, width: n, height: r });
    }),
);
const dn = 1,
    fn = 2,
    mn = 3;
const hn = 'FormatText_db904f12',
    _n = 'FormatText_base__fullSize_a514958e',
    pn = new Set(
        (null ==
        (e =
            'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom')
            ? void 0
            : e.split(', ')) ?? [],
    );
let gn = 0;
function vn() {
    return ++gn;
}
const bn = {
    class: function (e, ...t) {
        return u.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            vn(),
        );
    },
    colorLegacy: function (e, t) {
        const n = vn();
        return pn.has(String(t))
            ? u.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : u.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: function e(t) {
        if (Array.isArray(t)) return t.map(e);
        if ('string' == typeof t) {
            const e = y.resolve('langCode');
            return u.jsx(
                c.Fragment,
                { children: Ge(Ze(t, e), e, (e, t) => u.jsx('span', { children: e }, `${e}${t}`)) },
                vn(),
            );
        }
        return t;
    },
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
            vn(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function wn(e, t, n, r) {
    const s = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...s] = n.slice(1, -1).split(' ');
                return t ? wn(e, t, s, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        o = r[t];
    return o ? o(e, ...s) : (console.error(`Function ${t} is not registered`), e);
}
function xn(e, t, n) {
    return e.reduce((e, t) => {
        const [r, ...s] = (function (e) {
            const t = [];
            let n = '',
                r = !1,
                s = !1,
                o = '';
            for (let a = 0; a < e.length; a++) {
                const i = e[a];
                ("'" !== i && '"' !== i) || s || r
                    ? i === o && s
                        ? ((s = !1), (n += i))
                        : '(' !== i || s
                          ? ')' === i && r && !s
                              ? ((r = !1), (n += i))
                              : ' ' !== i || r || s
                                ? (n += i)
                                : n && (t.push(n), (n = ''))
                          : ((r = !0), (n += i))
                    : ((s = !0), (o = i), (n += i));
            }
            return (n && t.push(n), t);
        })(t.trim());
        return r ? wn(e, r, s, n) : e;
    }, t);
}
function yn(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function En(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !yn(e[r]); ) r++;
            const s = e.slice(n + 1, r),
                o = t[s];
            if (o) return En(e.replace(`$${s}`, String(o)), t);
        }
    }
    return e;
}
function Cn(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = En(e[r], t);
    return n;
}
const Rn = ['number', 'string', 'undefined'];
function Sn(e, t, n = {}, r = !0) {
    r && (gn = 0);
    const s = [];
    function o(e) {
        if (Rn.includes(typeof e)) {
            const t = s.at(-1);
            if ('string' == typeof t) return void (s[s.length - 1] = t + e);
        }
        s.push(e);
    }
    for (const a of e)
        if (a.type === dn) o(a.value);
        else if (a.type === mn)
            null === n[a.name] || Rn.includes(typeof n[a.name])
                ? o(n[a.name] ?? `{{${a.name}}}`)
                : s.push(u.jsx(c.Fragment, { children: n[a.name] }, `var-${a.name}-${a.instanceId}`));
        else if (a.type === fn) {
            const e = Sn(a.children, t, n, !1),
                r = xn(Cn(a.attrs, n), e, t);
            s.push(r);
        }
    return s;
}
function Ln(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function Tn(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function Nn(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const Pn = { start: '{{', end: '}}' },
    Bn = c.memo(function (e) {
        const {
                brackets: t = Pn,
                text: n,
                params: r,
                upgradeLegacy: s,
                fullSize: o,
                inline: a,
                formatters: i,
                split: l,
                ...f
            } = e,
            m = c.useMemo(
                () =>
                    e.upgradeLegacy
                        ? (function (e) {
                              return (function (e, t, n, r, s, o, a, i, l) {
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
                                          return a(o(s(r(n(t(e))))));
                                      case 8:
                                          return i(a(o(s(r(n(t(e)))))));
                                      case 9:
                                          return l(i(a(o(s(r(n(t(e))))))));
                                      default: {
                                          let e = arguments[0];
                                          for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
                                          return e;
                                      }
                                  }
                              })(e, Nn, Ln, Tn);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            h = c.useMemo(() => (e.formatters ? { ...bn, ...e.formatters } : bn), [e.formatters]),
            _ = c.useMemo(
                () =>
                    (function (e, t) {
                        const n = [],
                            r = [];
                        let s = '',
                            o = !1,
                            a = '',
                            i = 0;
                        for (let l = 0; l < e.length; l++) {
                            const c = e[l];
                            if (c === t.start[0] && e.slice(l, l + t.start.length) === t.start)
                                (s &&
                                    (r.length > 0
                                        ? r[r.length - 1].node.children.push({ type: dn, value: s })
                                        : n.push({ type: dn, value: s }),
                                    (s = '')),
                                    (o = !0),
                                    (l += t.start.length - 1));
                            else if (c === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                                ((o = !1), (l += t.end.length - 1));
                                const e = a.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        s = { type: fn, attrs: t.split('|'), instanceId: ++i, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(s) : n.push(s),
                                        r.push({ node: s, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: mn, instanceId: ++i, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                a = '';
                            } else o ? (a += c) : (s += c);
                        }
                        s &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: dn, value: s })
                                : n.push({ type: dn, value: s }));
                        return n;
                    })(l ? `{{@ split}}${m}{{/}}` : m, t),
                [t, m, l],
            ),
            p = c.useMemo(() => Sn(_, h, e.params), [_, h, e.params]),
            g = d(hn, o && _n, f.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              u.jsx('p', {
                  ...f,
                  className: g,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: p,
              }))
            : u.jsx('span', { ...f, className: g, children: p });
    });
function Mn({ path: e, ...t }) {
    return u.jsx(Bn, { text: y.resolve('strings').readOrEmpty(e), ...t });
}
const Dn = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    kn = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
function In(e, t, n) {
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
            r = v(n.className, n.cva),
            s = n.element,
            a = c.forwardRef(function (e, t) {
                return c.createElement(s, { ...('function' == typeof s ? e : On(o, e)), ref: t, className: r(e) });
            });
        return ((a.displayName = e), n.cva && (a.cva = n.cva), a);
    }
    const a = v(t, n),
        i = c.forwardRef(function (t, n) {
            return u.jsx('div', { 'data-name': e, ...On(o, t), ref: n, className: a(t) });
        });
    return ((i.displayName = e), n && (i.cva = n), i);
}
function On(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
const Fn = In('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    $n = c.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: s = !1, silent: o = !1, ...a },
        i,
    ) {
        const l = $t();
        return u.jsx(Fn, {
            ...a,
            ref: i,
            onMouseEnter: function (e) {
                (s || o || l.play('mouse-enter', { target: r || 'Button', original: e }), null == n || n(e));
            },
            onClick: function (e) {
                s || (o || l.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    jn = {
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
    An = c.forwardRef(function (
        {
            children: e,
            size: t = kn.large,
            theme: n = Dn.primary,
            disabled: r = !1,
            silent: s = !1,
            autoAlignContent: o = !0,
            classNames: a,
            className: i,
            ...l
        },
        c,
    ) {
        return u.jsxs($n, {
            ...l,
            ref: c,
            silent: s,
            disabled: r,
            className: d(
                jn.base,
                jn[`base__size-${t}`],
                jn[`base__theme-${n}`],
                r ? jn.base__disabled : jn.base__enabled,
                i,
                null == a ? void 0 : a.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = l.onClick) || t.call(l, e);
            },
            children: [
                u.jsx('div', { className: d(jn.background, null == a ? void 0 : a.background) }),
                u.jsx('div', { className: d(jn.border, null == a ? void 0 : a.border) }),
                u.jsx('div', { className: d(jn.overlay, null == a ? void 0 : a.overlay) }),
                u.jsx('div', {
                    className: d(jn.content, o && jn.content__fontAligned, null == a ? void 0 : a.content),
                    children: e,
                }),
            ],
        });
    });
((An.themes = Dn), (An.sizes = kn));
var Hn = ((e) => ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e))(Hn || {});
const zn = {
        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
        animationConfig: { tension: 170, friction: 26 },
    },
    Un = ({
        getContainerSize: e,
        getBounds: t,
        setScrollPosition: n,
        getDirection: r,
        getWrapperSize: s,
        triggerMouseMoveOnUpdate: o = !1,
    }) => {
        const a = (e, n) => {
            const [r, s] = t(e);
            return xe(r, s, n);
        };
        return (i = {}) => {
            const { settings: l = zn } = i,
                [u, d] = c.useState(!1),
                f = c.useRef(null),
                m = c.useRef(null),
                h = c.useRef({ wrapper: 0, container: 0 }),
                _ = dt(),
                p = Rt(
                    () => {
                        _e();
                    },
                    [],
                    150,
                ),
                [g, v] = b(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = f.current;
                        t && (n(t, e), _.trigger('change', e));
                    },
                    onRest: (e) => _.trigger('rest', e),
                    onStart: (e) => _.trigger('start', e),
                    onPause: (e) => _.trigger('pause', e),
                })),
                w = c.useCallback(
                    (e, t, n) => {
                        const r = g.scrollPosition.get(),
                            s = (g.scrollPosition.goal ?? 0) - r;
                        return a(e, t * n + s + r);
                    },
                    [g.scrollPosition],
                ),
                x = c.useCallback(
                    function (e, { immediate: t = !1, reset: n = !0 } = {}) {
                        const r = f.current;
                        r &&
                            v.start({
                                scrollPosition: a(r, e),
                                immediate: t,
                                reset: n,
                                config: l.animationConfig,
                                from: { scrollPosition: a(r, g.scrollPosition.get()) },
                                onChange: () => {
                                    o && p();
                                },
                            });
                    },
                    [v, l.animationConfig, g.scrollPosition, p],
                ),
                y = c.useCallback(
                    function (e) {
                        const t = f.current,
                            n = m.current;
                        if (!t || !n) return;
                        const r = ((e, t) => {
                                switch (t.type) {
                                    case 'proportional':
                                        return s(e) / t.factor;
                                    case 'fixed':
                                        return t.value;
                                }
                            })(n, l.step),
                            o = w(t, e, r);
                        x(o);
                    },
                    [x, w, l.step],
                ),
                E = c.useCallback(
                    function (e) {
                        u ||
                            (0 !== e.deltaY && y(r(e)),
                            f.current && _.trigger('mouseWheel', e, g.scrollPosition, t(f.current)));
                    },
                    [g.scrollPosition, y, _, u],
                ),
                C = Ct(),
                R = c.useCallback(
                    function () {
                        return C.run(() => {
                            const e = f.current;
                            e && (x(a(e, g.scrollPosition.goal), { immediate: !0 }), _.trigger('resizeHandled'));
                        });
                    },
                    [C, x, g.scrollPosition.goal, _],
                );
            yt(m, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = s(t);
                h.current.wrapper !== n && R();
            });
            const S = mt(function () {
                const t = f.current;
                if (!t) return;
                const n = e(t),
                    r = m.current ? s(m.current) : 0;
                if (h.current.container !== n || h.current.wrapper !== r) {
                    const e = a(t, g.scrollPosition.goal);
                    (e !== g.scrollPosition.goal && x(e, { immediate: !0 }),
                        (h.current.container = n),
                        (h.current.wrapper = r),
                        _.trigger('recalculateContent'));
                }
            });
            c.useEffect(
                () => (
                    window.addEventListener('resize', R),
                    () => {
                        window.removeEventListener('resize', R);
                    }
                ),
                [R],
            );
            return c.useMemo(
                () => ({
                    getWrapperSize: () => (m.current ? s(m.current) : void 0),
                    getContainerSize: () => (f.current ? e(f.current) : void 0),
                    getBounds: () =>
                        f.current ? t(f.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: l.step.clampedArrowStepTimeout,
                    settings: l,
                    clampPosition: a,
                    handleMouseWheel: E,
                    applyScroll: x,
                    applyStepTo: y,
                    contentRef: f,
                    wrapperRef: m,
                    scrollPosition: v,
                    animationScroll: g,
                    recalculateContent: S,
                    disabled: u,
                    setDisabled: d,
                    events: { on: _.on, off: _.off },
                }),
                [l, E, x, y, v, g, S, u, d, _.on, _.off],
            );
        };
    },
    Vn = c.createContext(void 0);
function Gn() {
    const e = c.useContext(Vn);
    if (!e) throw new Error('useHorizontalScroll must be used within a Scroll.Horizontal.Base component');
    return e;
}
const Zn = Un({
        getBounds: (e) => {
            var t;
            return [0, e.offsetWidth - ((null == (t = e.parentElement) ? void 0 : t.offsetWidth) ?? 0)];
        },
        getContainerSize: (e) => e.offsetWidth,
        getWrapperSize: (e) => e.offsetWidth,
        setScrollPosition: (e, t) => {
            e.style.transform = `translateX(-${Math.trunc(t.value.scrollPosition ?? 0)}px)`;
        },
        getDirection: (e) => (e.deltaY > 1 ? Hn.Next : Hn.Prev),
        triggerMouseMoveOnUpdate: !0,
    }),
    Wn = { horizontal: 'horizontal', vertical: 'vertical' },
    qn = {
        background: 'Thumb_background_7f3dd6ac',
        border: 'Thumb_border_5749138b',
        innerBorder: 'Thumb_innerBorder_42bafd18',
        icon: 'Thumb_icon_dca8bf26',
        base: 'Thumb_6ff3e706',
        base__vertical: 'Thumb_base__vertical_55a67c91',
        base__horizontal: 'Thumb_base__horizontal_27ca7ace',
        base__active: 'Thumb_base__active_830942bb',
    },
    Xn = 'forwardDisabled',
    Yn = 'backwardDisabled';
function Qn(e) {
    const t = c.useRef(null),
        [n, r] = c.useState(!1),
        s = mt(function () {
            const n = t.current,
                r = e.trackRef.current,
                s = e.api.getWrapperSize(),
                o = e.api.getContainerSize();
            if (!(s && o && n && r)) return;
            const a = Math.min(1, s / o),
                i = 'horizontal' === e.direction ? 'width' : 'height';
            return ((n.style[i] = `${e.calculateSize(r, a)}px`), (n.style.display = 'flex'), a);
        }),
        [o, a] = b(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: A.easeInCubic,
            config: { duration: 200 },
        }));
    c.useEffect(() => {
        n || e.dragging
            ? a.start({
                  to: e.styles.opened,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.add(qn.base__active);
                  },
              })
            : a.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.remove(qn.base__active);
                  },
              });
    }, [n, e.dragging, e.styles.closed, e.styles.opened, a]);
    const i = mt(function () {
            var n;
            const r = e.trackRef.current,
                s = t.current,
                o = e.railBeforeRef.current,
                i = e.railAfterRef.current,
                l = e.api.getWrapperSize(),
                c = e.api.getContainerSize();
            if (!(l && r && s && o && i && c)) return;
            const u = e.api.animationScroll.scrollPosition.get(),
                d = Math.min(1, l / c),
                f = xe(0, 1, u / (c - l)),
                m = e.calculateSize(r, d),
                h = (('horizontal' === e.direction ? r.offsetWidth : r.offsetHeight) - m) * f || 0,
                _ = Math.round(2 * (2 * f - 1));
            (s.style.setProperty('--thumbOffset', `${h}px`),
                null == (n = e.onUpdate) || n.call(e, { thumbSize: m, thumbOffset: h, newBouncingCorrection: _ }));
            const p = 0 === h || e.isBoundThumb(h) ? 0 : _;
            return (
                a.start({
                    to: { '--bouncingCorrection': `${p}px` },
                    ...(0 === p ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                h
            );
        }),
        l = Ct(),
        f = mt(function () {
            s();
            const t = i();
            'number' == typeof t &&
                (function (e, t) {
                    if (!e.trackRef.current || !e.thumbRef.current) return;
                    const n = e.trackRef.current.parentNode;
                    if (n instanceof HTMLElement) {
                        if (0 === t) return (n.classList.add(Yn), void n.classList.remove(Xn));
                        if (e.isBoundThumb(t)) return (n.classList.remove(Yn), void n.classList.add(Xn));
                        (n.classList.remove(Yn), n.classList.remove(Xn));
                    }
                })(e, t);
        });
    c.useEffect(() => l.run(f));
    const { api: m } = e;
    return (
        c.useEffect(() => {
            function e() {
                l.run(f);
            }
            return (
                m.events.on('recalculateContent', e),
                m.events.on('rest', f),
                m.events.on('change', f),
                m.events.on('resizeHandled', e),
                () => {
                    (m.events.off('recalculateContent', e),
                        m.events.off('rest', f),
                        m.events.off('change', f),
                        m.events.off('resizeHandled', e));
                }
            );
        }, [m, l, f]),
        u.jsxs(w.div, {
            ref: Jt([t, e.thumbRef]),
            className: d(qn.base, qn[`base__${e.direction}`], e.className),
            style: o,
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: [
                u.jsx('div', { className: qn.background }),
                u.jsx('div', { className: qn.border }),
                u.jsx('div', { className: qn.innerBorder }),
                u.jsx('div', { className: qn.icon }),
            ],
        })
    );
}
const Kn = { pending: !1, offset: 0 };
function Jn(e, t, n, r, s) {
    const [o, a] = c.useState(Kn),
        i = mt(t),
        l = c.useCallback(
            (t) => {
                (a(t), e.current && i({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [i, e],
        );
    return (
        c.useEffect(() => {
            if (!o.pending) return;
            const t = q.move(function ([t]) {
                    const a = n.contentRef.current;
                    if (!a) return;
                    const l = r.current,
                        c = e.current;
                    if (!a || !l || !c) return;
                    const u = s(t, o, { parent: l, thumb: c }),
                        d = u * (n.getContainerSize() ?? 0);
                    (n.scrollPosition.start({
                        scrollPosition: n.clampPosition(a, d),
                        reset: !0,
                        immediate: !0,
                        from: { scrollPosition: n.animationScroll.scrollPosition.get() },
                    }),
                        i({ type: 'dragging', dragElement: c, elementOffset: u, contentOffset: d }));
                }),
                a = q.up(() => {
                    l(Kn);
                });
            return () => {
                (t(), a());
            };
        }, [n, o.offset, o.pending, i, l, e, r, o, s]),
        l
    );
}
const er = 'disable',
    tr = 'scroll-active';
function nr({ api: e, baseRef: t }) {
    const n = Ct(),
        r = mt(function () {
            const n = e.getWrapperSize(),
                r = e.getContainerSize();
            if (null === t.current || void 0 === r || void 0 === n) return;
            1 === Math.min(1, n / r || 1) ? t.current.classList.remove(tr) : t.current.classList.add(tr);
        });
    (c.useEffect(() => n.run(r)),
        c.useEffect(() => {
            function t() {
                n.run(r);
            }
            return (
                e.events.on('recalculateContent', t),
                e.events.on('resizeHandled', t),
                () => {
                    (e.events.off('recalculateContent', t), e.events.off('resizeHandled', t));
                }
            );
        }, [e, n, r]));
}
function rr(e, t) {
    const n = e.getBoundingClientRect(),
        r = t === Wn.horizontal ? n.x : n.y;
    return { start: r, end: t === Wn.horizontal ? r + n.width : r + n.height };
}
function sr(e, t, n, r, s, o, a) {
    const i = $t(),
        l = s.stepTimeout || 100,
        [u, d] = (function (e, t, n = []) {
            const r = c.useRef(0),
                s = c.useCallback(() => window.clearInterval(r.current), n || []);
            c.useEffect(() => s, [s]);
            const o = (n ?? []).concat([t]);
            return [
                c.useCallback((n) => {
                    ((r.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                }, o),
                s,
            ];
        })((e) => s.applyStepTo(e), l, [s]);
    c.useEffect(
        () => (document.addEventListener('mouseup', d, !0), () => document.removeEventListener('mouseup', d, !0)),
        [d],
    );
    const f = c.useCallback(
            (e) => {
                e.target.classList.contains(er) ||
                    (i.play('click', { target: 'Scroll:Back', original: e }), u(Hn.Next));
            },
            [u, i],
        ),
        m = c.useCallback(
            (e) => {
                e.target.classList.contains(er) ||
                    (i.play('click', { target: 'Scroll:Forward', original: e }), u(Hn.Prev));
            },
            [u, i],
        ),
        h = c.useCallback(
            (l) => {
                const c = e.current,
                    u = t.current,
                    d = n.current,
                    h = r.current;
                if (!(c && u && d && h && 0 === l.button)) return;
                const _ = (function (e, t, n, r, s, o) {
                        return {
                            occurredEvent: o === Wn.horizontal ? e.screenX : e.screenY,
                            bar: rr(t, o),
                            thumb: rr(n, o),
                            backButton: rr(r, o),
                            forwardButton: rr(s, o),
                        };
                    })(l, c, u, d, h, a),
                    p = _.thumb.start <= _.occurredEvent && _.occurredEvent <= _.thumb.end,
                    g =
                        (_.backButton.start <= _.occurredEvent && _.occurredEvent <= _.backButton.end) ||
                        (_.forwardButton.start <= _.occurredEvent && _.occurredEvent <= _.forwardButton.end);
                if (p) o({ pending: !0, offset: _.occurredEvent - _.thumb.start });
                else if (g) {
                    ((_.occurredEvent > _.thumb.start ? Hn.Prev : Hn.Next) === Hn.Next ? f : m)(l);
                } else {
                    const e = _.occurredEvent - _.bar.start,
                        t = _.thumb.end - _.thumb.start,
                        n = _.bar.end - _.bar.start,
                        r = s.getContainerSize();
                    if ('number' != typeof r || Number.isNaN(r)) return console.error('Incorrect container size');
                    const o = ((e - t / 2) / n) * r;
                    s.applyScroll(o);
                }
                i.play('click', { target: 'Scroll:' + (p ? 'thumb' : g ? 'button' : ''), original: l });
            },
            [e, t, n, r, i, a, o, f, m, s],
        ),
        _ = c.useCallback(
            (e) => {
                e.target.classList.contains(er) || i.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [i],
        );
    return c.useMemo(
        () => ({
            handleMouseBackDown: f,
            handleMouseEnter: _,
            handleMouseDownTrack: h,
            handleMouseForwardDown: m,
            handleMouseForwardUp: d,
            handleMouseBackUp: d,
        }),
        [f, _, h, m, d],
    );
}
const or = 'HorizontalBar_rail_37858d8f',
    ar = 'HorizontalBar_4df27ac3',
    ir = 'HorizontalBar_track_649dc296',
    lr = 'HorizontalBar_rail__left_1a906b4e',
    cr = 'HorizontalBar_rail__right_cd24364e',
    ur = 'HorizontalBar_button__right_e8f0aa2d',
    dr = 'HorizontalBar_button__left_da330e13',
    fr = 'HorizontalBar_button_cbabd91',
    mr = { closed: { height: '3rem', top: '4rem' }, opened: { height: '11rem', top: '0rem' } },
    hr = (e, t) => Math.max(he(13), e.offsetWidth * t),
    _r = c.memo(function ({ classNames: e = {}, onDrag: t = ye }) {
        const n = c.useRef(null),
            r = c.useRef(null),
            s = c.useRef(null),
            o = c.useRef(null),
            a = c.useRef(null),
            i = c.useRef(null),
            l = c.useRef(null),
            [f, m] = c.useState(!1),
            { api: h } = Gn();
        nr({ baseRef: n, api: h });
        const _ = mt((e, t, { parent: n }) => (e.screenX - t.offset - n.getBoundingClientRect().x) / n.offsetWidth),
            p = mt((e) => e - (o.current.offsetWidth - a.current.offsetWidth) >= -0.5),
            g = c.useCallback((e) => ('dragStart' === e.type ? m(!0) : 'dragEnd' === e.type && m(!1), t(e)), [t]),
            v = Jn(a, g, h, o, _),
            b = mt(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
                const r = o.current,
                    s = i.current,
                    a = l.current;
                if (!r || !s || !a) return;
                const c = he(5);
                ((s.style.width = `${t - c + n}px`), (a.style.width = r.offsetWidth - e - t - c - n + 'px'));
            }),
            { handleMouseEnter: w, handleMouseDownTrack: x } = sr(n, a, s, r, h, v, Wn.horizontal);
        return u.jsxs('div', {
            className: d(ar, e.base),
            ref: n,
            onWheel: h.handleMouseWheel,
            onMouseDown: x,
            onMouseEnter: w,
            children: [
                u.jsx('div', { ref: r, className: d(fr, dr, e.leftButton) }),
                u.jsxs('div', {
                    ref: o,
                    className: d(ir, e.track),
                    children: [
                        u.jsx('div', { ref: i, className: d(or, lr, e.leftRail) }),
                        u.jsx(Qn, {
                            dragging: f,
                            api: h,
                            calculateOffset: _,
                            calculateSize: hr,
                            direction: 'horizontal',
                            isBoundThumb: p,
                            railAfterRef: i,
                            railBeforeRef: l,
                            styles: mr,
                            onUpdate: b,
                            thumbRef: a,
                            trackRef: o,
                        }),
                        u.jsx('div', { ref: l, className: d(or, cr, e.rightRail) }),
                    ],
                }),
                u.jsx('div', { ref: s, className: d(fr, ur, e.rightButton) }),
            ],
        });
    }),
    pr = {
        base: 'HorizontalScroll_5b201d2b',
        wrapper: 'HorizontalScroll_wrapper_abec8dee',
        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_a5c0f45',
    },
    gr = ({
        children: e,
        className: t,
        barClassNames: n,
        areaClassName: r,
        classNames: s,
        scrollClassName: o,
        onDrag: a,
    }) => {
        const { api: i } = Gn(),
            l = c.useMemo(() => {
                const e = n || {};
                return { ...e, base: d(pr.base, e.base) };
            }, [n]);
        return u.jsxs('div', {
            className: d(pr.defaultScroll, t),
            onWheel: i.handleMouseWheel,
            children: [
                u.jsx('div', {
                    className: d(pr.defaultScrollArea, r),
                    children: u.jsx(vr, { className: o, classNames: s, children: e }),
                }),
                u.jsx(_r, { onDrag: a, classNames: l }),
            ],
        });
    };
function vr({ className: e, classNames: t, children: n }) {
    const { api: r } = Gn();
    return (
        c.useEffect(() => Me(() => Me(r.recalculateContent))),
        u.jsx('div', {
            className: d(pr.base, e),
            children: u.jsx('div', {
                className: d(pr.wrapper, null == t ? void 0 : t.wrapper),
                onWheel: r.handleMouseWheel,
                ref: r.wrapperRef,
                children: u.jsx('div', {
                    className: d(pr.content, null == t ? void 0 : t.content),
                    ref: r.contentRef,
                    children: n,
                }),
            }),
        })
    );
}
((vr.Bar = _r), (vr.Default = gr));
const br = { horizontal: 'horizontal', vertical: 'vertical' };
function wr(e, t) {
    switch (t) {
        case br.horizontal:
            return e.screenX;
        case br.vertical:
            return e.screenY;
        default:
            De(!1, `Such drag direction ${t} is not supported`);
    }
}
const xr = { type: 'idle' };
function yr(e, t, n, r) {
    const {
            contentRef: s,
            wrapperRef: o,
            scrollPosition: a,
            clampPosition: i,
            animationScroll: l,
            events: u,
            disabled: d,
        } = e,
        [f, m] = c.useState(xr),
        [h, _] = c.useState(0),
        { gapBeforeStart: p } = r ?? {},
        g = Ct(),
        v = mt(() => {
            g.run(() => {
                const t = e.contentRef.current,
                    n = e.getWrapperSize(),
                    r = e.getContainerSize();
                t && n && r && !d && (t.style.cursor = r <= n ? 'auto' : 'dragging' === f.type ? 'move' : 'grab');
            });
        });
    return (
        c.useEffect(() => {
            v();
        }, [f.type, v]),
        xt(() => {
            v();
        }, [v]),
        c.useEffect(() => {
            if ('pending' !== f.type) return;
            const e = s.current,
                n = o.current;
            if (null === e || null === n) return;
            const r = q.move(([e]) => {
                    const n = wr(e, t);
                    (void 0 === p || Math.abs(h - n) > p) &&
                        m({ type: 'dragging', positionFrom: n, previousScrollPosition: l.scrollPosition.get() });
                }),
                a = q.up(() => m({ type: 'scrollComplete' }));
            return () => {
                (r(), a());
            };
        }, [l.scrollPosition, s, h, t, f, p, o]),
        c.useEffect(() => {
            if ('dragging' !== f.type) return;
            const e = q.move(([e, r]) => {
                const c = s.current,
                    u = o.current;
                if ('outside' === r) return void m({ type: 'scrollComplete' });
                const d = (function (e, t) {
                    switch (t) {
                        case br.horizontal:
                            return e.clientX;
                        case br.vertical:
                            return e.clientY;
                        default:
                            De(!1, `Such drag direction ${t} is not supported`);
                    }
                })(e, t);
                if (null === c || null === u || ('inside' === r && d < 0)) return;
                const h = u.offsetLeft,
                    _ = 'inside' === r ? d : d - h,
                    p = f.positionFrom - _,
                    g = f.previousScrollPosition + p;
                a.start({ scrollPosition: i(c, g), from: { scrollPosition: l.scrollPosition.get() }, ...n });
            });
            const r = q.up(function () {
                m({ type: 'scrollComplete' });
            });
            return () => {
                (e(), r());
            };
        }, [l.scrollPosition, i, s, f, a, o, n, t]),
        c.useEffect(() => {
            if ('scrollComplete' !== f.type) return;
            const e = () => {
                m(xr);
            };
            return (e(), u.on('rest', e), () => u.off('rest', e));
        }, [l.scrollPosition, f.type, u]),
        c.useEffect(() => {
            if (d) return;
            const e = s.current;
            if (!e) return;
            const n = (e) => {
                if (e.button !== Ue) return;
                const n = wr(e, t);
                (_(n),
                    m(
                        void 0 === p || p <= 0
                            ? { type: 'dragging', positionFrom: n, previousScrollPosition: l.scrollPosition.get() }
                            : { type: 'pending' },
                    ));
            };
            return (e.addEventListener('mousedown', n), () => e.removeEventListener('mousedown', n));
        }, [l.scrollPosition, s, d, t, p]),
        f
    );
}
function Er({ settings: e, children: t }) {
    const n = Zn({ settings: e }),
        r = c.useMemo(() => ({ api: n }), [n]);
    return u.jsx(Vn.Provider, { value: r, children: t });
}
const Cr = c.createContext(void 0);
function Rr() {
    const e = c.useContext(Cr);
    if (!e) throw new Error('useVerticalScroll must be used within a Scroll.Vertical.Base component');
    return e;
}
const Sr = Un({
        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
        getContainerSize: (e) => e.scrollHeight,
        getWrapperSize: (e) => e.offsetHeight,
        setScrollPosition: (e, t) => {
            e.scrollTop = Math.trunc(t.value.scrollPosition ?? 0);
        },
        getDirection: (e) => (e.deltaY > 1 ? Hn.Next : Hn.Prev),
    }),
    Lr = 'VerticalBar_rail_3d663c9',
    Tr = 'VerticalBar_7187fa00',
    Nr = 'VerticalBar_track_ff482708',
    Pr = 'VerticalBar_rail__top_ee531f43',
    Br = 'VerticalBar_rail__bottom_3eaa33b1',
    Mr = 'VerticalBar_button__bottom_6880f123',
    Dr = 'VerticalBar_button__top_b8383775',
    kr = 'VerticalBar_button_7b0e4aca',
    Ir = { closed: { width: '3rem', left: '3rem' }, opened: { width: '9rem', left: '0rem' } },
    Or = (e, t) => Math.max(he(13), e.offsetHeight * t),
    Fr = c.memo(function ({ classNames: e = {}, onDrag: t = ye }) {
        const n = c.useRef(null),
            r = c.useRef(null),
            s = c.useRef(null),
            o = c.useRef(null),
            a = c.useRef(null),
            i = c.useRef(null),
            l = c.useRef(null),
            [f, m] = c.useState(!1),
            { api: h } = Rr();
        nr({ baseRef: n, api: h });
        const _ = mt((e) => e - (o.current.offsetHeight - a.current.offsetHeight) >= -0.5),
            p = mt((e, t, { parent: n }) => (e.screenY - t.offset - n.getBoundingClientRect().y) / n.offsetHeight),
            g = c.useCallback((e) => ('dragStart' === e.type ? m(!0) : 'dragEnd' === e.type && m(!1), t(e)), [t]),
            v = Jn(a, g, h, o, p),
            b = mt(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
                const r = o.current,
                    s = i.current,
                    a = l.current;
                if (!r || !s || !a) return;
                const c = he(5);
                ((s.style.height = `${t - c + n}px`), (a.style.height = r.offsetHeight - e - t - c - n + 'px'));
            }),
            { handleMouseEnter: w, handleMouseDownTrack: x } = sr(n, a, r, s, h, v, Wn.vertical);
        return u.jsxs('div', {
            className: d(Tr, e.base),
            ref: n,
            onWheel: h.handleMouseWheel,
            onMouseDown: x,
            onMouseEnter: w,
            children: [
                u.jsx('div', { ref: r, className: d(kr, Dr, e.topButton) }),
                u.jsxs('div', {
                    ref: o,
                    className: d(Nr, e.track),
                    children: [
                        u.jsx('div', { ref: i, className: d(Lr, Pr, e.topRail) }),
                        u.jsx(Qn, {
                            dragging: f,
                            api: h,
                            calculateOffset: p,
                            calculateSize: Or,
                            direction: 'vertical',
                            isBoundThumb: _,
                            railAfterRef: i,
                            railBeforeRef: l,
                            styles: Ir,
                            onUpdate: b,
                            thumbRef: a,
                            trackRef: o,
                        }),
                        u.jsx('div', { ref: l, className: d(Lr, Br, e.bottomRail) }),
                    ],
                }),
                u.jsx('div', { ref: s, className: d(kr, Mr, e.bottomButton) }),
            ],
        });
    }),
    $r = {
        content: 'VerticalScroll_content_62cb6120',
        defaultScroll: 'VerticalScroll_defaultScroll_c69fa70e',
        area: 'VerticalScroll_area_a3c0086a',
    },
    jr = ({
        children: e,
        className: t,
        barClassNames: n,
        areaClassName: r,
        scrollClassName: s,
        scrollClassNames: o,
        onDrag: a,
    }) => {
        const { api: i } = Rr(),
            l = c.useMemo(() => {
                const e = n || {};
                return { ...e, base: d($r.base, e.base) };
            }, [n]);
        return u.jsxs('div', {
            className: d($r.defaultScroll, t),
            onWheel: i.handleMouseWheel,
            children: [
                u.jsx('div', {
                    className: d($r.area, r),
                    children: u.jsx(Ar, { className: s, classNames: o, children: e }),
                }),
                u.jsx(Fr, { onDrag: a, classNames: l }),
            ],
        });
    },
    Ar = ({ className: e, classNames: t, children: n, ...r }) => {
        const { api: s } = Rr();
        return (
            c.useEffect(() => Me(() => Me(s.recalculateContent))),
            u.jsx('div', {
                className: d($r.base, null == t ? void 0 : t.wrapper, e),
                ref: s.wrapperRef,
                onWheel: s.handleMouseWheel,
                children: u.jsx('div', {
                    ...r,
                    className: d($r.content, null == t ? void 0 : t.content),
                    ref: s.contentRef,
                    children: n,
                }),
            })
        );
    };
function Hr({ children: e }) {
    const t = Sr(),
        n = c.useMemo(() => ({ api: t }), [t]);
    return u.jsx(Cr.Provider, { value: n, children: e });
}
Ar.Default = jr;
var zr = ((e) => (
        (e.Items = 'items'),
        (e.Equipment = 'equipment'),
        (e.Xp = 'xp'),
        (e.XpFactor = 'xpFactor'),
        (e.Blueprints = 'blueprints'),
        (e.BlueprintsAny = 'blueprintsAny'),
        (e.Goodies = 'goodies'),
        (e.Berths = 'berths'),
        (e.Slots = 'slots'),
        (e.Tokens = 'tokens'),
        (e.CrewSkins = 'crewSkins'),
        (e.CrewBooks = 'crewBooks'),
        (e.Customizations = 'customizations'),
        (e.CreditsFactor = 'creditsFactor'),
        (e.Tankman = 'tankman'),
        (e.Tankwoman = 'tankwoman'),
        (e.TankmenXp = 'tankmenXP'),
        (e.TankmenXpFactor = 'tankmenXPFactor'),
        (e.FreeXpFactor = 'freeXPFactor'),
        (e.BattleToken = 'battleToken'),
        (e.PremiumUniversal = 'premium_universal'),
        (e.Gold = 'gold'),
        (e.Credits = 'credits'),
        (e.Crystal = 'crystal'),
        (e.FreeXp = 'freeXP'),
        (e.Premium = 'premium'),
        (e.PremiumPlus = 'premium_plus'),
        (e.BattlePassPoints = 'battlePassPoints'),
        (e.BattlePassSelectToken = 'battlePassSelectToken'),
        (e.StyleProgressToken = 'styleProgressToken'),
        (e.TmanToken = 'tmanToken'),
        (e.NaturalCover = 'naturalCover'),
        (e.BpCoin = 'bpcoin'),
        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
        (e.BattleBadge = 'dossier_badge'),
        (e.BonusX5 = 'battle_bonus_x5'),
        (e.CrewBonusX3 = 'crew_bonus_x3'),
        (e.Vehicles = 'vehicles'),
        (e.EpicSelectToken = 'epicSelectToken'),
        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
        (e.DeluxeGift = 'deluxe_gift'),
        (e.BattleBoosterGift = 'battleBooster_gift'),
        (e.OptionalDevice = 'optionalDevice'),
        (e.EquipCoin = 'equipCoin'),
        (e.LootBox = 'lootBox'),
        (e.BrCoin = 'brcoin'),
        e
    ))(zr || {}),
    Ur = ((e) => (
        (e.Big = 'big'),
        (e.Small = 'small'),
        (e.Mini = 'mini'),
        (e.S600x450 = 's600x450'),
        (e.S400x300 = 's400x300'),
        (e.S296x222 = 's296x222'),
        (e.S232x174 = 's232x174'),
        (e.S180x135 = 's180x135'),
        (e.S128x100 = 's128x100'),
        (e.S80x80 = 's80x80'),
        (e.S64x64 = 's64x64'),
        (e.S48x48 = 's48x48'),
        (e.S24x24 = 's24x24'),
        e
    ))(Ur || {}),
    Vr = ((e) => (
        (e.MULTI = 'multi'),
        (e.CURRENCY = 'currency'),
        (e.PREMIUM_PLUS = 'premium_plus'),
        (e.NUMBER = 'number'),
        (e.STRING = 'string'),
        e
    ))(Vr || {}),
    Gr = ((e) => (
        (e.BATTLE_BOOSTER = 'battleBooster'),
        (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
        (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
        (e.EQUIPMENT_PLUS = 'equipmentPlus'),
        (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
        (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
        (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
        (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
        (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
        (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
        (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
        (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
        (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
        (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
        (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
        e
    ))(Gr || {}),
    Zr = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(Zr || {}),
    Wr = ((e) => (
        (e.BATTLE_BOOSTER = 'battleBooster'),
        (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
        (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
        (e.EQUIPMENT_PLUS = 'equipmentPlus'),
        (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
        (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
        (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
        (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
        (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
        (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
        (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
        (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
        (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
        (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
        (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
        e
    ))(Wr || {});
const qr = [
        zr.Items,
        zr.Equipment,
        zr.Xp,
        zr.XpFactor,
        zr.Blueprints,
        zr.BlueprintsAny,
        zr.Goodies,
        zr.Berths,
        zr.Slots,
        zr.Tokens,
        zr.CrewSkins,
        zr.CrewBooks,
        zr.Customizations,
        zr.CreditsFactor,
        zr.TankmenXp,
        zr.TankmenXpFactor,
        zr.FreeXpFactor,
        zr.BattleToken,
        zr.LootBox,
        zr.PremiumUniversal,
        zr.NaturalCover,
        zr.BpCoin,
        zr.BattlePassSelectToken,
        zr.BattlaPassFinalAchievement,
        zr.BattleBadge,
        zr.BonusX5,
        zr.CrewBonusX3,
        zr.EpicSelectToken,
        zr.Comp7TokenWeeklyReward,
        zr.DeluxeGift,
        zr.BattleBoosterGift,
        zr.OptionalDevice,
    ],
    Xr = [zr.Gold, zr.Credits, zr.Crystal, zr.FreeXp],
    Yr = [zr.BattlePassPoints, zr.EquipCoin],
    Qr = [zr.PremiumPlus, zr.Premium],
    Kr = (e) =>
        qr.includes(e)
            ? Vr.MULTI
            : Xr.includes(e)
              ? Vr.CURRENCY
              : Yr.includes(e)
                ? Vr.NUMBER
                : Qr.includes(e)
                  ? Vr.PREMIUM_PLUS
                  : Vr.STRING,
    Jr = ['engravings', 'backgrounds'],
    es = ['engraving', 'background'],
    ts = (e, t = Ur.Small) => {
        const { name: n, type: r, value: s, icon: o, item: a, dogTagType: i } = e,
            l = t === Ur.S24x24 ? Ur.Small : t,
            c = ((e) => {
                switch (e) {
                    case Ur.S600x450:
                        return 'c_600x450';
                    case Ur.S400x300:
                        return 'c_400x300';
                    case Ur.S296x222:
                        return 'c_296x222';
                    case Ur.S232x174:
                        return 'c_232x174';
                    case Ur.Big:
                        return 'c_80x80';
                    case Ur.Small:
                        return 'c_48x48';
                    default:
                        return e;
                }
            })(l);
        switch (n) {
            case 'basic':
            case 'plus':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.${r}_${s}`;
            case 'premium':
            case 'premium_plus':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.${n}_${s}`;
            case 'items':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.${a}`;
            case 'blueprints':
            case 'blueprintsAny':
            case 'finalBlueprints':
                return `R.images.gui.maps.icons.blueprints.fragment.${l}.${o}`;
            case 'tokens':
            case 'lootBox':
            case 'battleToken':
                return 'big' === t ? e.iconBig.replace('..', 'img://gui') : e.iconSmall.replace('..', 'img://gui');
            case 'customizations':
            case 'styleProgress':
            case 'crewSkins':
            case 'goodies':
            case 'groups':
            case 'tmanToken':
            case 'battlePassSelectToken':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.${o}`;
            case 'crewBooks':
                return `R.images.gui.maps.icons.crewBooks.books.${l}.${o}`;
            case 'dogTagComponents':
                return ((e, t, n) => {
                    const r = Jr[e];
                    if (r) {
                        const s = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                            o = s.$dyn(n);
                        return !o && es[e] ? `${s.$dyn(es[e])}` : `${o}`;
                    }
                    return (
                        console.error(
                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                        ),
                        ''
                    );
                })(i, l, o);
            case 'dossier_badge':
                return `R.images.gui.maps.icons.quests.bonuses.badges.${c}.${o}`;
            case 'dossier_achievement':
                return `R.images.gui.maps.icons.achievement.${c}.${o}`;
            case 'xp':
            case 'xpFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.exp`;
            case 'creditsFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.credits`;
            case 'tankmenXPFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.tankmenXP`;
            case 'dailyXPFactor':
            case 'freeXPFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.freeXP`;
            case 'premiumTank':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.vehicles`;
            case 'styleProgressToken':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.style_3d`;
            case 'collectionItem':
                return `R.images.gui.maps.icons.collectionItems.${c}.${o}`;
            default:
                return `R.images.gui.maps.icons.quests.bonuses.${l}.${n}`;
        }
    },
    ns = (e, t) => ({ args: e, contentId: t }),
    rs = [Ur.Small, Ur.Big],
    ss = 'lightTank',
    os = 'mediumTank',
    as = 'heavyTank',
    is = 'SPG',
    ls = 'AT-SPG',
    cs = c.createContext(null);
function us() {
    const e = c.useContext(cs);
    return (De(null !== e, 'You can use tabs hooks only with Tabs component'), e);
}
const ds = { primary: 'primary', custom: 'custom' },
    fs = { large: 'large', medium: 'medium', small: 'small' },
    ms = 'HorizontalTabs_outerBorderImage_8085e49e',
    hs = 'HorizontalTabs_mainBorderImage_558d1c3f',
    _s = 'HorizontalTabs_outerBorder_3255d0c5',
    ps = 'HorizontalTabs_mainBorder_61e34c2c',
    gs = 'HorizontalTabs_content_1ae3c4bd',
    vs = In('Tabs', 'HorizontalTabs_69e3c6f3', {
        variants: {
            size: {
                [fs.large]: 'HorizontalTabs_base__size-large_12c75e24',
                [fs.medium]: 'HorizontalTabs_base__size-medium_afc0934f',
                [fs.small]: 'HorizontalTabs_base__size-small_75fae891',
            },
            theme: { [ds.primary]: 'HorizontalTabs_base__theme-primary_5e3af03e', [ds.custom]: void 0 },
        },
    }),
    bs = c.forwardRef(function ({ children: e, classNames: t, ...n }, r) {
        const s = us();
        return u.jsx(vs, {
            ...n,
            ref: r,
            className: d(n.className, null == t ? void 0 : t.base),
            size: s.size,
            theme: s.theme,
            children: u.jsxs('div', {
                className: d(_s, null == t ? void 0 : t.outerBorder),
                children: [
                    u.jsx('div', { className: d(ms, null == t ? void 0 : t.outerBorderImage) }),
                    u.jsxs('div', {
                        className: d(ps, null == t ? void 0 : t.mainBorder),
                        children: [
                            u.jsx('div', { className: d(hs, null == t ? void 0 : t.mainBorderImage) }),
                            u.jsx('div', { className: d(gs, null == t ? void 0 : t.content), children: e }),
                        ],
                    }),
                ],
            }),
        });
    }),
    ws = 'Tab_border_a63aeb3f',
    xs = 'Tab_background_4c9b3eb9',
    ys = 'Tab_backgroundPattern_417be4b5',
    Es = 'Tab_innerBorderImage_adadda5f',
    Cs = 'Tab_content_b3f6c22b',
    Rs = In('Tab', 'Tab_f59c2b00', {
        variants: {
            size: {
                [fs.large]: 'Tab_base__size-large_0',
                [fs.medium]: 'Tab_base__size-medium_0',
                [fs.small]: 'Tab_base__size-small_0',
            },
            theme: { [ds.primary]: 'Tab_base__theme-primary_90fd5ee', [ds.custom]: void 0 },
            state: { active: 'Tab_base__active_0', inactive: 'Tab_base__inactive_0' },
        },
        defaultVariants: { size: fs.medium, theme: ds.primary },
    }),
    Ss = c.forwardRef(function (
        { theme: e, size: t, tabId: n, active: r, children: s, onClick: o, onMouseEnter: a, ...i },
        l,
    ) {
        const c = $t();
        return u.jsx(Rs, {
            ...i,
            ref: l,
            theme: e,
            size: t,
            state: r === n ? 'active' : 'inactive',
            onMouseEnter: function (e) {
                (r !== n && c.play('mouse-enter', { target: Rs.displayName, original: e }), null == a || a(e));
            },
            onClick: function (e) {
                (r !== n && c.play('click', { target: Rs.displayName, original: e }), null == o || o(e));
            },
            children: s,
        });
    });
function Ls({ active: e, theme: t, size: n, children: r, onActiveChange: s }) {
    const [o, a] = c.useState(e),
        i = c.useRef(e),
        l = c.useMemo(() => ({ active: o, theme: t, size: n, change: a }), [o, n, t]);
    return (
        c.useLayoutEffect(() => {
            a(e);
        }, [e]),
        c.useEffect(() => {
            i.current !== o && ((i.current = o), null == s || s(o));
        }, [o, s]),
        u.jsx(cs.Provider, { value: l, children: r })
    );
}
((Ls.Switcher = bs),
    (Ls.Tab = function ({ tabId: e, classNames: t, className: n, children: r, ...s }) {
        const o = us();
        return u.jsxs(Ss, {
            'data-test-id': `${e}Tab`,
            ...s,
            tabId: e,
            theme: o.theme,
            size: o.size,
            active: o.active,
            className: d(null == t ? void 0 : t.base, n),
            onClick: (t) => {
                var n;
                (null == (n = s.onClick) || n.call(s, t), o.change(e));
            },
            children: [
                u.jsx('div', { className: d(xs, null == t ? void 0 : t.background) }),
                u.jsx('div', { className: d(ys, null == t ? void 0 : t.backgroundPattern) }),
                u.jsx('div', { className: d(ws, null == t ? void 0 : t.border) }),
                u.jsx('div', { className: d(Es, null == t ? void 0 : t.borderImage) }),
                u.jsx('div', { className: d(Cs, null == t ? void 0 : t.content), children: r }),
            ],
        });
    }),
    (Ls.Content = function ({ children: e, keyOverride: t }) {
        const n = us();
        return u.jsx(c.Fragment, { children: e(n.active) }, t ?? n.active);
    }));
const Ts = c.createContext(void 0);
function Ns() {
    const e = c.useContext(Ts);
    if (!e) throw new Error('Card context must be used only within its provider');
    return e;
}
function Ps({ selected: e, hover: t, disabled: n, multiple: r, status: s, children: o }) {
    const a = c.useMemo(() => ({ selected: e, hover: t, disabled: n, multiple: r, status: s }), [n, t, r, e, s]);
    return u.jsx(Ts.Provider, { value: a, children: o });
}
const Bs = c.createContext(null);
const Ms = Bs.Provider,
    Ds = 'Content_ab8563af',
    ks = 'Content_disabledOverlay_af87c441',
    Is = 'Content_multipleCorner_151c26ee',
    Os = In('Content', 'Content_8eaaf71a', {
        variants: {
            multiple: { true: 'Content_base__multiple_da09528a' },
            selected: { true: 'Content_base__selected_da09528a' },
            hover: { true: 'Content_base__hover_da09528a' },
            disabled: { true: 'Content_base__disabled_da09528a' },
        },
        compoundVariants: [{ hover: !0, selected: !0, className: 'Content_base__selectedHover_da09528a' }],
    }),
    Fs = ({ children: e, classNames: t }) => {
        const n = p.useRef(null),
            r = Ns();
        return (
            p.useEffect(() => {
                if (r.multiple)
                    return Me(() => {
                        if (n.current) {
                            const e = n.current.getBoundingClientRect(),
                                t = Math.round((20 / e.width) * 100),
                                r = Math.round((20 / e.height) * 100);
                            (n.current.style.setProperty('--corner-width', `${t}%`),
                                n.current.style.setProperty('--corner-height', `${r}%`));
                        }
                    });
            }),
            u.jsxs(Os, {
                multiple: r.multiple,
                selected: r.selected,
                hover: r.hover,
                disabled: r.disabled,
                children: [
                    r.multiple && u.jsx('div', { className: Is }),
                    u.jsxs('div', {
                        ref: n,
                        className: d(Ds, null == t ? void 0 : t.mainContainerContent),
                        children: [r.disabled && u.jsx('div', { className: ks }), e],
                    }),
                ],
            })
        );
    },
    $s = {
        base: 'Status_68bd9bc6',
        icon: 'Status_icon_cef4536',
        base__done: 'Status_base__done_35b9a31c',
        base__doneSmall: 'Status_base__doneSmall_35b9a31c',
        base__alert: 'Status_base__alert_35b9a31c',
        base__alertSmall: 'Status_base__alertSmall_35b9a31c',
        line: 'Status_line_8f933ea7',
        shadow: 'Status_shadow_fc30bf98',
        base__lockedSmall: 'Status_base__lockedSmall_35b9a31c',
        glowInner: 'Status_glowInner_f8eb475a',
        blur: 'Status_blur_5675b854',
        glowBig: 'Status_glowBig_5954041c',
    },
    js = y.resolve('strings');
In('Status', $s.base, {
    variants: { status: { done: $s.base__done, alert: $s.base__alert, locked: $s.base__locked } },
});
const As = ({ header: e, body: t }) => Boolean(e && t),
    Hs = ({ reason: e, classNames: t }) => {
        const n = c.useRef(null),
            [r, s] = p.useState(!1),
            o = `base__${Ns().status}${r ? 'Small' : ''}`,
            a = p.useCallback(() => {
                var e;
                const t = null == (e = n.current) ? void 0 : e.getBoundingClientRect();
                t && s(t.width <= 100);
            }, [n]);
        yt(n, a);
        const i = e
                ? {
                      header: js.readOrEmpty(`tooltips.moduleFits.${e}.header`),
                      body: js.readOrEmpty(`tooltips.moduleFits.${e}.text`),
                  }
                : {},
            l = Nt(i);
        return u.jsxs('div', {
            className: d($s.base, $s[o], null == t ? void 0 : t.wrapper),
            ref: n,
            children: [
                u.jsx('div', { className: $s.glowBig }),
                u.jsx('div', { className: $s.line }),
                u.jsx('div', { className: $s.shadow }),
                u.jsx('div', { className: $s.glowInner }),
                u.jsx('svg', {
                    width: '42',
                    height: '42',
                    viewBox: '0 0 42 42',
                    className: $s.blur,
                    children: u.jsx('g', { children: u.jsx('circle', { cx: '21', cy: '21', r: '3' }) }),
                }),
                u.jsx('div', { ...(As(i) && l), className: d($s.icon, null == t ? void 0 : t.icon) }),
            ],
        });
    },
    zs = 'Card_base__wrapped_c6eb8737',
    Us = 'Card_f7ddaa4a',
    Vs = 'Card_content_b6f6a22a',
    Gs = 'Card_centerBorder_8a0f28ae',
    Zs = In('Card', 'Card_f0963ece', {
        variants: {
            active: { true: 'Card_base__active_f4c22d1c' },
            selected: { true: 'Card_base__selected_f4c22d1c' },
            hover: { true: 'Card_base__hover_f4c22d1c' },
            disableMouse: { true: 'Card_base__disableMouse_5cd80216' },
        },
        compoundVariants: [
            { hover: !0, active: !0, className: 'Card_base__activeHover_f4c22d1c' },
            { hover: !0, selected: !0, className: 'Card_base__selectedHover_f4c22d1c' },
        ],
    }),
    Ws = c.forwardRef(function (
        {
            children: e,
            active: t,
            status: n,
            statusReason: r,
            disableMouse: s,
            onMouseOver: o,
            onMouseOut: a,
            soundTarget: i,
            disabled: l = !1,
            className: f,
            classNames: m,
            ...h
        },
        _,
    ) {
        const [p, g] = c.useState(!1),
            v = $t(),
            b = c.useContext(Bs),
            w = s || l;
        return u.jsx(Zs, {
            ...h,
            ref: _,
            hover: p,
            disableMouse: s,
            active: t,
            className: d(Us, f, (null == b ? void 0 : b.enabled) && zs),
            children: u.jsxs(Ps, {
                disabled: l,
                selected: h.selected ?? !1,
                multiple: h.multiple ?? !1,
                hover: p,
                status: n,
                children: [
                    u.jsx('div', {
                        className: d(Vs, null == m ? void 0 : m.content),
                        onClick: function (e) {
                            w || v.play('click', { target: i || 'react-ui:card', original: e });
                        },
                        onMouseEnter: function (e) {
                            w || v.play('mouse-enter', { target: i || 'react-ui:card', original: e });
                        },
                        onMouseOver: function (e) {
                            w || (g(!0), null == o || o(e));
                        },
                        onMouseOut: function (e) {
                            w || (g(!1), null == a || a(e));
                        },
                        children: u.jsx(Fs, { classNames: m, children: e }),
                    }),
                    u.jsx('div', { className: Gs }),
                    n && u.jsx(Hs, { reason: r, classNames: null == m ? void 0 : m.status }),
                ],
            }),
        });
    }),
    qs = 3,
    Xs = 'none',
    Ys = 'contour',
    Qs = (e, t) => ({ x: e, y: t });
function Ks(e) {
    let { x: t, y: n, width: r, height: s } = e;
    const o = Qs(t, n),
        a = Qs(t + r, n),
        i = Qs(t + r, n + s),
        l = Qs(t, n + s);
    return [
        [o, a],
        [a, i],
        [i, l],
        [l, o],
    ];
}
function Js(e, t) {
    return (function (e) {
        if (0 === e.length) return [];
        const t = e[0],
            n = { x: t[0].x - qs, y: t[0].y - qs },
            r = [n];
        let s = t[1],
            o = n,
            a = n,
            i = -qs,
            l = -qs;
        for (e.splice(0, 1); e.length > 0; ) {
            const t = e.findIndex((e) => e[0].x === s.x && e[0].y === s.y);
            if (-1 === t) break;
            const n = e[t],
                c = s;
            (s.x <= a.x ? (l = qs) : (l === qs && (o.y -= 2 * qs), (l = -qs)),
                s.y >= a.y ? (i = qs) : (i === qs && (o.x -= 2 * qs), (i = -qs)),
                (s = { x: s.x + i, y: s.y + l }),
                r.push(s),
                (a = c),
                (o = s),
                (s = n[1]),
                e.splice(t, 1));
        }
        return (l === qs && i === qs && (o = { ...o, x: o.x - 2 * qs }), r.push(n), r);
    })(
        (function (e) {
            const t = e.flatMap(Ks),
                n = new Map();
            return (
                t.forEach((e) => {
                    const t = (function (e) {
                        const [t, n] = e;
                        return t.x < n.x || (t.x === n.x && t.y < n.y)
                            ? `${n.x},${n.y}-${t.x},${t.y}`
                            : `${t.x},${t.y}-${n.x},${n.y}`;
                    })(e);
                    n.has(t) ? n.delete(t) : n.set(t, e);
                }),
                Array.from(n.values())
            );
        })(e),
    );
}
class eo {
    constructor(e) {
        (n(this, 'lines', new Map()), (this.containerRect = e));
    }
    addLine(e, t, n, r, s) {
        var o;
        const a = `${1 === n ? 'V' : 'H'}-${1 === n ? Math.round(e) : Math.round(t)}-${s}`;
        this.lines.has(a) || this.lines.set(a, []);
        const i = { x: e - this.containerRect.x, y: t - this.containerRect.y, width: n, height: r, className: s };
        null == (o = this.lines.get(a)) || o.push(i);
    }
    run() {
        const e = [];
        return (
            this.lines.forEach((t, n) => {
                const r = 'H' === n.at(0),
                    s = t.sort((e, t) => (r ? e.x - t.x : e.y - t.y));
                let o = null;
                (s.forEach((t) => {
                    if (o)
                        if (r) {
                            const n = o.x + o.width,
                                r = t.x + t.width;
                            t.x >= o.x && t.x <= n ? (o = { ...o, width: Math.max(r, n) - o.x }) : (e.push(o), (o = t));
                        } else {
                            const n = o.y + o.height,
                                r = t.y + t.height;
                            t.y >= o.y && t.y <= n
                                ? (o = { ...o, height: Math.max(r, n) - o.y })
                                : (e.push(o), (o = t));
                        }
                    else o = t;
                }),
                    o && e.push(o));
            }),
            e
        );
    }
}
const to = 'LinesBuilder_lineInner_a52dc157',
    no = 'LinesBuilder_lineOuter_c57514b2';
const ro = c.memo(({ containerRef: e, generation: t, border: n, cardSelector: r }) => {
        const [s, o] = c.useState([]),
            a = mt(() => {
                const t = e.current;
                if (!t) return;
                const s = t.getBoundingClientRect(),
                    a = (function (e, t, n) {
                        const r = [],
                            s = new eo(t);
                        for (let o = 0; o < e.length; o++) {
                            const t = e[o],
                                a = t.getBoundingClientRect();
                            if (0 === a.width || 0 === a.height)
                                return void console.debug(
                                    `Card rect has zero size by one side: ${a.width}x${a.height} (${t.getAttribute('data-test-id')}) `,
                                );
                            (n !== Xs && r.push({ x: a.x, y: a.y, width: a.width, height: a.height }),
                                s.addLine(a.x, a.y, a.width, 1, to),
                                s.addLine(a.x, a.y + a.height, a.width, 1, to),
                                s.addLine(a.x, a.y, 1, a.height, to),
                                s.addLine(a.x + a.width, a.y, 1, a.height + 1, to));
                        }
                        if (n !== Xs) {
                            const e = Js(r);
                            let t = null;
                            e.forEach((e) => {
                                if (t) {
                                    const n = t.y === e.y,
                                        r = t,
                                        o = e;
                                    s.addLine(
                                        Math.min(r.x, o.x),
                                        Math.min(r.y, o.y),
                                        n ? Math.abs(o.x - r.x) : 1,
                                        n ? 1 : Math.abs(o.y - r.y) + 1,
                                        no,
                                    );
                                }
                                t = e;
                            });
                        }
                        return s.run();
                    })(t.querySelectorAll(`.${r || Us}`), s, n);
                o(a ?? []);
            });
        return (
            c.useEffect(a, [a, t]),
            u.jsx(u.Fragment, {
                children: s.map((e, t) =>
                    u.jsx(
                        'div',
                        { className: e.className, style: { left: e.x, top: e.y, width: e.width, height: e.height } },
                        t,
                    ),
                ),
            })
        );
    }),
    so = 'CardsWrapper_3b6cc4f6',
    oo = 'CardsWrapper_card_c7fc9ee7',
    ao = 'CardsWrapper_centerBorderCommon_b4b27a11',
    io = 'CardsWrapper_outerBorderCommon_f4887371',
    lo = In('CardsWrapper', so);
c.forwardRef(function (
    { children: e, className: t, trashhold: n, border: r = Ys, enabled: s = !0, cardSelector: o, ...a },
    i,
) {
    const l = c.useRef([]),
        d = c.useRef(null),
        [f, m] = c.useState('');
    c.useImperativeHandle(i, () => d.current);
    const h = c.useCallback(
        (e) => {
            const t = d.current;
            if (!t) return;
            const n = t.querySelectorAll(`.${o || Us}`);
            if (n.length > 0) {
                const r = t.getBoundingClientRect(),
                    s = n.length;
                s !== l.current.length && (l.current = Array.from(n));
                const o = `${Math.round(r.width)}x${Math.round(r.height)}-${s}|${e}`;
                m(o);
            } else m('');
        },
        [o],
    );
    (c.useEffect(() => {
        h(n);
    }),
        yt(
            d,
            c.useCallback(() => h(), [h]),
        ));
    const _ = c.useMemo(() => ({ recalculate: h, enabled: s }), [h, s]);
    return u.jsx(lo, {
        ...a,
        ref: d,
        children: u.jsxs('div', {
            className: t,
            children: [
                u.jsx(Ms, { value: _, children: e }),
                u.jsx(ro, { cardsRef: l, containerRef: d, border: r, generation: f, cardSelector: o }),
            ],
        }),
    });
});
const co = c.forwardRef(({ className: e, classNames: t, ...n }, r) =>
        u.jsxs('div', {
            className: d(so, null == t ? void 0 : t.wrapper),
            children: [
                u.jsx('div', { className: ao }),
                u.jsx('div', { className: io }),
                u.jsx(Ws, { className: d(oo, e, null == t ? void 0 : t.card), classNames: t, ...n, ref: r }),
            ],
        }),
    ),
    uo = { done: 'done', locked: 'locked' },
    fo = {
        base: 'Reward_d65e1e12',
        base__s24x24: 'Reward_base__s24x24_954b5cee',
        base__s48x48: 'Reward_base__s48x48_21f091ec',
        base__small: 'Reward_base__small_3eddf28d',
        base__s80x80: 'Reward_base__s80x80_21f091ec',
        base__big: 'Reward_base__big_e23f2c77',
        base__s128x100: 'Reward_base__s128x100_1e08e04b',
        base__s180x135: 'Reward_base__s180x135_93fc57c',
        base__s232x174: 'Reward_base__s232x174_2904ea89',
        base__s296x222: 'Reward_base__s296x222_52f0615b',
        base__s400x300: 'Reward_base__s400x300_a8627e1b',
        base__s600x450: 'Reward_base__s600x450_e27f3852',
        base__dynamicBox: 'Reward_base__dynamicBox_45d7782b',
        tooltipWrapper: 'Reward_tooltipWrapper_75b925a5',
        icon: 'Reward_icon_e152f13b',
        overlay: 'Reward_overlay_8cbe65c9',
        highlight: 'Reward_highlight_f1cd08e0',
        image: 'Reward_image_1cbfa020',
        image__s24x24: 'Reward_image__s24x24_954b5cee',
        image__s48x48: 'Reward_image__s48x48_21f091ec',
        image__small: 'Reward_image__small_3eddf28d',
        image__s80x80: 'Reward_image__s80x80_21f091ec',
        image__big: 'Reward_image__big_e23f2c77',
        image__s128x100: 'Reward_image__s128x100_1e08e04b',
        image__s180x135: 'Reward_image__s180x135_93fc57c',
        image__s232x174: 'Reward_image__s232x174_2904ea89',
        image__s296x222: 'Reward_image__s296x222_52f0615b',
        image__s400x300: 'Reward_image__s400x300_a8627e1b',
        image__s600x450: 'Reward_image__s600x450_e27f3852',
        image__fixedBox: 'Reward_image__fixedBox_e45bdd8a',
        info: 'Reward_info_81cb3342',
        info__multi: 'Reward_info__multi_465d34bd',
        info__credits: 'Reward_info__credits_1643219',
        info__gold: 'Reward_info__gold_c751be5d',
        info__crystal: 'Reward_info__crystal_18ccfdd0',
        info__premiumTank: 'Reward_info__premiumTank_7862152',
        title: 'Reward_title_fbcf4b5',
        timer: 'Reward_timer_22ba7b8b',
    },
    mo = y.resolve('images'),
    ho = new Map([
        [Ur.S24x24, Ur.Small],
        [Ur.S48x48, Ur.Small],
    ]),
    _o = ({
        name: e,
        image: t,
        isPeriodic: n = !1,
        isFixedBoxSize: r = !0,
        size: s = Ur.Big,
        special: o,
        value: a,
        valueType: i,
        title: l,
        style: c,
        className: f,
        classNames: m,
        tooltipArgs: h,
        periodicIconTooltipArgs: _,
    }) => {
        const p = ho.has(s) ? ho.get(s) : s,
            g = ((e, t) => {
                if (void 0 === t || !rs.includes(e)) return null;
                switch (t) {
                    case Gr.BATTLE_BOOSTER:
                    case Gr.BATTLE_BOOSTER_REPLACE:
                        return Zr.BATTLE_BOOSTER;
                }
            })(s, o),
            v = ((e) => {
                if (void 0 === e) return null;
                switch (e) {
                    case Gr.BATTLE_BOOSTER:
                        return Wr.BATTLE_BOOSTER;
                    case Gr.BATTLE_BOOSTER_REPLACE:
                        return Wr.BATTLE_BOOSTER_REPLACE;
                    case Gr.BUILT_IN_EQUIPMENT:
                        return Wr.BUILT_IN_EQUIPMENT;
                    case Gr.EQUIPMENT_PLUS:
                        return Wr.EQUIPMENT_PLUS;
                    case Gr.EQUIPMENT_TROPHY_BASIC:
                        return Wr.EQUIPMENT_TROPHY_BASIC;
                    case Gr.EQUIPMENT_TROPHY_UPGRADED:
                        return Wr.EQUIPMENT_TROPHY_UPGRADED;
                    case Gr.EQUIPMENT_MODERNIZED_UPGRADED_1:
                        return Wr.EQUIPMENT_MODERNIZED_UPGRADED_1;
                    case Gr.EQUIPMENT_MODERNIZED_UPGRADED_2:
                        return Wr.EQUIPMENT_MODERNIZED_UPGRADED_2;
                    case Gr.EQUIPMENT_MODERNIZED_UPGRADED_3:
                        return Wr.EQUIPMENT_MODERNIZED_UPGRADED_3;
                    case Gr.PROGRESSION_STYLE_UPGRADED_1:
                        return Wr.PROGRESSION_STYLE_UPGRADED_1;
                    case Gr.PROGRESSION_STYLE_UPGRADED_2:
                        return Wr.PROGRESSION_STYLE_UPGRADED_2;
                    case Gr.PROGRESSION_STYLE_UPGRADED_3:
                        return Wr.PROGRESSION_STYLE_UPGRADED_3;
                    case Gr.PROGRESSION_STYLE_UPGRADED_4:
                        return Wr.PROGRESSION_STYLE_UPGRADED_4;
                    case Gr.PROGRESSION_STYLE_UPGRADED_5:
                        return Wr.PROGRESSION_STYLE_UPGRADED_5;
                    case Gr.PROGRESSION_STYLE_UPGRADED_6:
                        return Wr.PROGRESSION_STYLE_UPGRADED_6;
                }
            })(o),
            b = ((e, t) => {
                const n = y.resolve('intl');
                if (void 0 === e) return null;
                switch (t) {
                    case Vr.MULTI: {
                        const t = Number(e);
                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                    }
                    case Vr.CURRENCY:
                    case Vr.NUMBER:
                        return n.formatNumber(n.numberFormats[0] || 'integral', Number(e));
                    case Vr.PREMIUM_PLUS: {
                        const t = Number(e);
                        return isNaN(t) ? e : null;
                    }
                    default:
                        return e;
                }
            })(a, i),
            w = Tt({
                contentId: (null == h ? void 0 : h.contentId) ?? 0,
                args: null == h ? void 0 : h.args,
                resId: null == h ? void 0 : h.resId,
            }),
            x = Nt({ header: null == _ ? void 0 : _.header, body: null == _ ? void 0 : _.body });
        return u.jsxs('div', {
            className: d(fo.base, fo[`base__${s}`], !r && fo.base__dynamicBox, f),
            style: c,
            ...w,
            children: [
                u.jsxs(u.Fragment, {
                    children: [
                        u.jsxs('div', {
                            className: d(
                                fo.image,
                                r ? fo.image__fixedBox : fo[`image__${s}`],
                                null == m ? void 0 : m.image,
                            ),
                            children: [
                                g &&
                                    u.jsx('div', {
                                        className: d(fo.highlight, null == m ? void 0 : m.highlight),
                                        style: {
                                            backgroundImage: `url(${mo.readOrEmpty(`quests.bonuses.${p}.${g}_highlight`)})`,
                                        },
                                    }),
                                t &&
                                    u.jsx('div', {
                                        className: d(fo.icon, null == m ? void 0 : m.rewardIcon),
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                v &&
                                    u.jsx('div', {
                                        className: d(fo.overlay, null == m ? void 0 : m.overlay),
                                        style: {
                                            backgroundImage: `url(${mo.readOrEmpty(`quests.bonuses.${p}.${v}_overlay`)})`,
                                        },
                                    }),
                            ],
                        }),
                        b &&
                            u.jsx('div', {
                                className: d(
                                    fo.info,
                                    fo[`info__${e}`],
                                    i === Vr.MULTI && fo.info__multi,
                                    null == m ? void 0 : m.info,
                                ),
                                children: b,
                            }),
                        l && u.jsx('div', { className: fo.title, children: l }),
                    ],
                }),
                n && u.jsx('div', { className: d(fo.timer, null == m ? void 0 : m.periodicIcon), ...x }),
            ],
        });
    },
    po = 'SceneWrapper_52fcfc1e',
    go = 'SceneWrapper_base__down_4ece5089',
    vo = 'SceneWrapper_base__moveSpaceDisabled_1b1cd939';
function bo({
    children: e,
    moveSpace: t,
    onMouseOver3dScene: n,
    onDragStateChange: r,
    moveSpaceEnabled: s = !0,
    className: o,
    ...a
}) {
    const [i, l] = c.useState(!1),
        [f, m] = c.useState(!1),
        [h, _] = c.useState({ x: 0, y: 0 }),
        p = c.useRef(null);
    (c.useEffect(() => {
        function e() {
            (l(!1), m(!1));
        }
        return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
    }, []),
        c.useEffect(
            () => () => {
                n({ isOver3dScene: !1 });
            },
            [n],
        ));
    const g = mt((e) => (null == r ? void 0 : r(e)));
    function v(e) {
        if (!p.current) return;
        const { left: t, right: n, top: r, bottom: s } = p.current.getBoundingClientRect();
        return !(e.clientX < t || e.clientY < r || e.clientX > n || e.clientY > s);
    }
    function b(e) {
        return 1 === e.buttons && v(e) && s;
    }
    return (
        c.useEffect(() => {
            g(i && f);
        }, [i, g, f]),
        u.jsx('div', {
            ...a,
            ref: p,
            className: d(po, i && go, !s && vo, o),
            onMouseDown: function (e) {
                (e.preventDefault(), b(e) && (l(!0), m(!0), _({ x: e.clientX, y: e.clientY })));
            },
            onMouseMove: function (e) {
                if ((e.preventDefault(), i && f)) {
                    if (!v(e)) return;
                    const n = e.clientX !== h.x ? e.clientX - h.x : 0,
                        r = e.clientY !== h.y ? e.clientY - h.y : 0;
                    (_({ x: e.clientX, y: e.clientY }), t({ dx: n, dy: r, dz: 0 }));
                }
            },
            onMouseUp: function () {
                l(!1);
            },
            onWheel: function (e) {
                if ((e.preventDefault(), !s || !v(e))) return;
                const n = e.deltaY < 0;
                t({ dx: 0, dy: 0, dz: n ? -600 : 600 });
            },
            onMouseOver: function (e) {
                (n({ isOver3dScene: !0 }), b(e) && (l(!0), _({ x: e.clientX, y: e.clientY })));
            },
            onMouseOut: function () {
                (n({ isOver3dScene: !1 }), l(!1));
            },
            children: e,
        })
    );
}
const wo = c.createContext(void 0);
function xo() {
    const e = c.useContext(wo);
    if (!e) throw new Error('useProgressBar must be used within a ProgressBar');
    return e;
}
const yo = {
        fill: 'Filled_fill_32930ca9',
        filled: 'Filled_228d842a',
        wrapper: 'Filled_wrapper_fac9294',
        filled__small: 'Filled_filled__small_94d1350d',
        pattern: 'Filled_pattern_6ec8608d',
        filled__medium: 'Filled_filled__medium_94d1350d',
    },
    Eo = c.forwardRef(function ({ className: e, classNames: t, ...n }, r) {
        const s = xo();
        return u.jsx('div', {
            ...n,
            ref: r,
            className: d(yo.filled, yo[`filled__${s.size}`], e),
            children: u.jsxs('div', {
                className: d(yo.wrapper, null == t ? void 0 : t.wrapper),
                children: [
                    u.jsx('div', {
                        className: d(yo.fill, null == t ? void 0 : t.fill),
                        style: { width: 100 * s.percentage + '%' },
                    }),
                    u.jsx('div', {
                        className: d(yo.pattern, null == t ? void 0 : t.pattern),
                        style: { width: 100 * s.percentage + '%' },
                    }),
                ],
            }),
        });
    });
function Co(e) {
    const [t, n] = c.useState(Math.min(e.value, e.maxValue)),
        [r, s] = c.useState(e.maxValue),
        o = ut(t),
        a = ut(r),
        i = mt((t) => n(Math.min(t, e.maxValue)));
    (c.useLayoutEffect(() => {
        i(e.value);
    }, [e.value, i]),
        c.useLayoutEffect(() => {
            s(e.maxValue);
        }, [e.maxValue]));
    const l = mt((t) => {
        var n;
        return null == (n = e.onValueChange) ? void 0 : n.call(e, t);
    });
    c.useEffect(() => {
        l(t);
    }, [l, t]);
    const d = mt((t) => {
        var n;
        return null == (n = e.onMaxValueChange) ? void 0 : n.call(e, t);
    });
    c.useEffect(() => {
        d(r);
    }, [d, r]);
    const f = c.useMemo(() => {
        if (void 0 !== o && void 0 !== a) return { value: o, maxValue: a, percentage: o / a };
    }, [o, a]);
    De(r > 0, 'initMaxValue must be greater than 0');
    const m = c.useMemo(
        () => ({
            value: t,
            maxValue: r,
            setValue: i,
            setMaxValue: s,
            size: e.size,
            previous: f,
            percentage: t / r,
            animationEnabled: e.animationEnabled,
        }),
        [t, r, i, s, f, e.size, e.animationEnabled],
    );
    return u.jsx(wo.Provider, { value: m, children: e.children });
}
const Ro = 'ProgressBar_background_b40cdfdf',
    So = 'ProgressBar_backgroundPattern_7e932276',
    Lo = In('ProgressBar', 'ProgressBar_27c2305c', {
        variants: {
            size: {
                small: 'ProgressBar_base__small_61ccd4be',
                medium: 'ProgressBar_base__medium_478d985a',
                full: 'ProgressBar_base__full_be7f12da',
            },
        },
    });
function To({ size: e = 'medium', className: t, classNames: n, filledClassNames: r, ...s }) {
    return u.jsx(Co, {
        size: e,
        ...s,
        children: u.jsxs(Lo, {
            size: e,
            className: t,
            children: [
                u.jsx('div', { className: d(Ro, null == n ? void 0 : n.background) }),
                u.jsx('div', { className: d(So, null == n ? void 0 : n.backgroundPattern) }),
                u.jsx(Eo, { classNames: r }),
                s.children,
            ],
        }),
    });
}
const No = 'Delta_5c8185db',
    Po = 'Delta_delta__increase_e6e76b0b',
    Bo = 'Delta_glow_8e83fd7a',
    Mo = c.memo(
        c.forwardRef(function (
            { initValue: e, initMaxValue: t, animationEnabled: n = !0, animationProps: r, ...s },
            o,
        ) {
            const a = c.useRef(null),
                i = c.useRef(null),
                l = xo(),
                f = c.useMemo(() => {
                    if ('number' != typeof e || 'number' != typeof t) return;
                    De(t > 0, 'initMaxValue must be greater than 0');
                    const n = Math.min(e, t);
                    return { value: n, maxValue: t, percentage: n / t };
                }, [e, t]),
                m = l.previous ?? f;
            return (
                c.useEffect(() => {
                    const e = a.current,
                        t = i.current;
                    if (!e || !m || !t) return;
                    const s = l.percentage - m.percentage;
                    if (
                        ((e.style.left = 100 * Math.max(0, l.percentage - Math.max(0, s)) + '%'),
                        (e.style.width = 100 * Math.abs(s) + '%'),
                        e.classList.toggle(Po, s > 0),
                        (t.style.width = '100%'),
                        n && 0 != s)
                    ) {
                        const e = new x({
                            ...r,
                            from: { ...(null == r ? void 0 : r.from), width: 100 },
                            to: { ...(null == r ? void 0 : r.to), width: 0 },
                            onChange: (e, ...n) => {
                                var s;
                                ((t.style.width = `${e.value.width}%`),
                                    'function' == typeof (null == r ? void 0 : r.onChange) &&
                                        (null == (s = null == r ? void 0 : r.onChange) || s.call(r, e, ...n)));
                            },
                        });
                        return (
                            e.start(),
                            () => {
                                e.stop();
                            }
                        );
                    }
                }, [l.percentage, n, r, m]),
                u.jsxs('div', {
                    ...s,
                    ref: Jt([o, a]),
                    className: d(s.className, No),
                    children: [m && u.jsx('div', { className: Bo, ref: i }), s.children],
                })
            );
        }),
    ),
    Do = { lightTank: ss, mediumTank: os, heavyTank: as, SPG: 'SPG', 'AT-SPG': ls },
    ko = Object.values(Do),
    Io = (e) => ko.includes(e),
    Oo = 'assault',
    Fo = 'sniper',
    $o = 'support',
    jo = 'universal',
    Ao = 'break',
    Ho = 'wheeled',
    zo = 'VehicleLevel_3c938122',
    Uo = { arabic: 'arabic', roman: 'roman' };
const Vo = c.forwardRef(function ({ value: e, numberType: t, ...n }, r) {
    const s = (function (e, t) {
            return e || (t ? Uo.arabic : Uo.roman);
        })(
            t,
            (function () {
                const e = y.resolve('strings');
                return Dt.includes(e.readOrEmpty('settings.LANGUAGE_CODE'));
            })(),
        ),
        o = s === Uo.roman ? je(e) : e;
    return u.jsx('div', { ...n, 'data-name': 'VehicleLevel', className: d(zo, n.className), ref: r, children: o });
});
Vo.numberTypes = Uo;
const Go = 'prestige',
    Zo = 'short',
    Wo = 'medium',
    qo = 'long',
    Xo = (e) => (e < 10 ? Zo : e < 100 ? Wo : qo),
    Yo = (e, t, n) => (t === Go ? Go : `${t}.${Xo(e)}.c_${n}`),
    Qo = {
        base: 'VehiclePrestigeLevel_a750cce',
        icon: 'VehiclePrestigeLevel_icon_ef024cc3',
        base__left: 'VehiclePrestigeLevel_base__left_4426b46c',
        level: 'VehiclePrestigeLevel_level_10f410ba',
        level__short: 'VehiclePrestigeLevel_level__short_d1939fb1',
        base__right: 'VehiclePrestigeLevel_base__right_4426b46c',
        level__medium: 'VehiclePrestigeLevel_level__medium_90aed80f',
        level__long: 'VehiclePrestigeLevel_level__long_26625167',
        base__iron: 'VehiclePrestigeLevel_base__iron_4426b46c',
        base__bronze: 'VehiclePrestigeLevel_base__bronze_4426b46c',
        base__silver: 'VehiclePrestigeLevel_base__silver_4426b46c',
        base__gold: 'VehiclePrestigeLevel_base__gold_4426b46c',
        base__enamel: 'VehiclePrestigeLevel_base__enamel_4426b46c',
    };
function Ko({ level: e, grade: t, type: n, direction: r, classNames: s, ...o }) {
    return e < 1
        ? null
        : u.jsxs('div', {
              ...o,
              className: d(Qo.base, Qo[`base__${n}`], Qo[`base__${r}`], o.className, null == s ? void 0 : s.base),
              children: [
                  u.jsx(un, {
                      path: `prestige.tab.${Yo(e, n, t)}`,
                      className: d(Qo.icon, null == s ? void 0 : s.icon),
                  }),
                  n !== Go &&
                      u.jsx('div', {
                          className: d(Qo.level, Qo[`level__${Xo(e)}`], null == s ? void 0 : s.level),
                          children: e,
                      }),
              ],
          });
}
Ko.direction = { left: 'left', right: 'right' };
const Jo = {
        [`${Oo}_x16x16`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M8 1L1 6.03876L3.67531 14H12.3247L15 6.03876L8 1ZM10.5 11.5H5.5L4 7L8 4L12 7L10.5 11.5Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Ao}_x16x16`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', { d: 'M8 2L15 9H11L8 6L5 9H1L8 2Z', fill: '#FFB34D' }),
                c.createElement('path', { d: 'M11 11L8 8L5 11V14L8 11L11 14V11Z', fill: '#FFB34D' }),
            ),
        [`${Fo}_x16x16`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', { d: 'M9 8L10 9H14V7H10L9 8Z', fill: '#FFB34D' }),
                c.createElement('path', { d: 'M7 8L6 9H2V7H6L7 8Z', fill: '#FFB34D' }),
                c.createElement('path', { d: 'M8 9L7 10V14H9V10L8 9Z', fill: '#FFB34D' }),
                c.createElement('path', { d: 'M8 7L7 6V2H9V6L8 7Z', fill: '#FFB34D' }),
            ),
        [`${$o}_x16x16`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M3 5V8.40002L2.80001 8.10004L2.20001 9.00005H1V3H2.20001L2.80002 4.00001L3.40002 3H8.80006C9.61885 3 10.7815 4.12547 11.5618 5.00075C11.55 5.00025 11.5382 5 11.5263 5H6.47368L5.89474 6L5.31579 5H3ZM6.39951 11.9999H11.7996C13.0298 11.9999 15.3996 9.01318 15.3996 9.01318C15.3996 9.01318 13.1393 5.99989 11.7996 5.99989H6.39951L5.79951 6.9999L5.1995 5.99989H3.99949V11.9999H5.1995L5.79951 11.0999L6.39951 11.9999Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${jo}_x16x16`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M4.79109 7.99164C4.79109 6.22006 6.22841 4.79109 7.99164 4.79109C8.45961 4.79109 8.90251 4.89972 9.30362 5.07521L11.1504 2.90251C10.2312 2.33426 9.1532 2 7.99164 2C4.68245 2 2 4.68245 2 8C2 9.50418 2.55153 10.8747 3.47075 11.9276L5.32591 9.75487C4.99164 9.25348 4.79944 8.65181 4.79944 8L4.79109 7.99164ZM12.6295 4.18941L10.7493 6.38719C11.0251 6.86351 11.2006 7.40669 11.2006 8C11.2006 9.77159 9.76323 11.2006 8 11.2006C7.59053 11.2006 7.19777 11.117 6.83844 10.9749L4.96657 13.1727C5.86072 13.6992 6.88858 14 8 14C11.3175 14 14 11.3175 14 8C14 6.55432 13.4903 5.22563 12.6295 4.18941Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Ho}_x16x16`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M7 8C7 9.65685 5.65685 11 4 11C2.34315 11 1 9.65685 1 8C1 6.34315 2.34315 5 4 5C5.65685 5 7 6.34315 7 8Z',
                    fill: '#FFB34D',
                }),
                c.createElement('path', {
                    d: 'M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Oo}_x24x24`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M12 3L3 9.58915L6.43968 20H17.5603L21 9.58915L12 3ZM15 17H9L7 11L12 7.5L17 11L15 17Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Ao}_x24x24`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', { d: 'M12 3L21 12H16L12 8L8 12H3L12 3Z', fill: '#FFB34D' }),
                c.createElement('path', { d: 'M16 15L12 11L8 15V19L12 15L16 19V15Z', fill: '#FFB34D' }),
            ),
        [`${Fo}_x24x24`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', { d: 'M10 3V8L12 10L14 8V3H10Z', fill: '#FFB34D' }),
                c.createElement('path', { d: 'M10 21V16L12 14L14 16V21H10Z', fill: '#FFB34D' }),
                c.createElement('path', { d: 'M8 14H3V10H8L10 12L8 14Z', fill: '#FFB34D' }),
                c.createElement('path', { d: 'M21 14H16L14 12L16 10H21V14Z', fill: '#FFB34D' }),
            ),
        [`${$o}_x24x24`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M6 8V12.2364L5.46667 13H4V6H5.46667L6.2 7.16667L6.93333 6H13.5333C14.712 6 16.4737 7.82156 17.3683 8.84226C16.7413 8.35641 16.1028 8 15.5789 8H10.4211L9.68421 9.16667L8.94737 8H6ZM10.9474 17H17.5789C19.0897 17 22 13.5155 22 13.5155C22 13.5155 19.2242 10 17.5789 10H10.9474L10.2105 11.1667L9.47368 10H8V17H9.47368L10.2105 15.95L10.9474 17Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${jo}_x24x24`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M7.72145 11.9889C7.72145 9.62674 9.63788 7.72145 11.9889 7.72145C12.6128 7.72145 13.2033 7.8663 13.7382 8.10028L16.2006 5.20334C14.9749 4.44568 13.5376 4 11.9889 4C7.5766 4 4 7.5766 4 12C4 14.0056 4.73538 15.8329 5.961 17.2368L8.43454 14.3398C7.98886 13.6713 7.73259 12.8691 7.73259 12L7.72145 11.9889ZM18.1727 6.91922L15.6657 9.84958C16.0334 10.4847 16.2674 11.2089 16.2674 12C16.2674 14.3621 14.351 16.2674 12 16.2674C11.454 16.2674 10.9304 16.156 10.4513 15.9666L7.95543 18.8969C9.14763 19.5989 10.5181 20 12 20C16.4234 20 20 16.4234 20 12C20 10.0724 19.3203 8.30084 18.1727 6.91922Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Ho}_x24x24`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M11 12C11 14.2091 9.20914 16 7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C9.20914 8 11 9.79086 11 12Z',
                    fill: '#FFB34D',
                }),
                c.createElement('path', {
                    d: 'M21 12C21 14.2091 19.2091 16 17 16C14.7909 16 13 14.2091 13 12C13 9.79086 14.7909 8 17 8C19.2091 8 21 9.79086 21 12Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Oo}_x32x32`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M16.5914 5.76714C16.2395 5.50928 15.7611 5.50928 15.4092 5.76714L5.65573 12.9145C5.30611 13.1707 5.16135 13.623 5.29721 14.0346L9.02038 25.3139C9.15564 25.7237 9.53848 26.0005 9.96998 26.0005H22.0306C22.4621 26.0005 22.8449 25.7237 22.9802 25.3139L26.7033 14.0346C26.8392 13.623 26.6944 13.1707 26.3448 12.9145L16.5914 5.76714ZM20.2642 22.8457L19.5741 22.1309H12.3525L11.6378 22.8457L12.143 21.7858L9.97409 15.1188L8.97588 14.6382L10.3931 14.7615L15.7292 10.8919L15.9633 9.56094L16.2344 10.9042L21.5335 14.7615L22.9384 14.6259L21.9525 15.1188L19.7959 21.7489L20.2765 22.8333L20.2642 22.8457Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Ao}_x32x32`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M15.6464 5.35355C15.8417 5.15829 16.1583 5.15829 16.3536 5.35355L28 17H22.1988C22.0711 17 21.9483 16.9512 21.8555 16.8635L16.3433 11.6576C16.1506 11.4756 15.8494 11.4756 15.6567 11.6576L10.1445 16.8635C10.0517 16.9512 9.92888 17 9.80121 17H4L15.6464 5.35355Z',
                    fill: '#FFB34D',
                }),
                c.createElement('path', {
                    d: 'M22 20.8738C22 20.7412 21.9473 20.614 21.8536 20.5203L16.3536 15.0203C16.1583 14.825 15.8417 14.825 15.6464 15.0203L10.1464 20.5203C10.0527 20.614 10 20.7412 10 20.8738V27L15.6464 21.3536C15.8417 21.1583 16.1583 21.1583 16.3536 21.3536L22 27V20.8738Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Fo}_x32x32`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M16.0003 13L13 10V3.5C13 3.22386 13.2239 3 13.5 3H18.5C18.7761 3 19 3.22386 19 3.5V10L16.0003 13Z',
                    fill: '#FFB34D',
                }),
                c.createElement('path', {
                    d: 'M16.0003 19L13 22V28.5C13 28.7761 13.2239 29 13.5 29H18.5C18.7761 29 19 28.7761 19 28.5V22L16.0003 19Z',
                    fill: '#FFB34D',
                }),
                c.createElement('path', {
                    d: 'M22 13L19 16L22 19H28.5C28.7761 19 29 18.7761 29 18.5V13.5C29 13.2239 28.7761 13 28.5 13H22Z',
                    fill: '#FFB34D',
                }),
                c.createElement('path', {
                    d: 'M13 15.9998L10 13H3.5C3.22386 13 3 13.2239 3 13.5L3.00005 18.5C3.00005 18.7761 3.22391 19 3.50005 19H10L13 15.9998Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${$o}_x32x32`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M7 11.5V16.9014C6.84147 16.9014 6.68293 16.9756 6.58398 17.124L6.14843 17.7774C6.0557 17.9164 5.89959 18 5.73241 18H4.5C4.22386 18 4 17.7761 4 17.5V8.5C4 8.22386 4.22386 8 4.5 8H5.7169C5.89254 8 6.05529 8.09215 6.14565 8.24275L6.57125 8.95209C6.76546 9.27576 7.23455 9.27576 7.42875 8.95209L7.85435 8.24275C7.94471 8.09215 8.10746 8 8.2831 8H17C18.591 8 20.9608 10.5496 22.1919 12.0156C21.4185 11.4193 20.6452 11 20 11H13.2831C13.1075 11 12.9447 11.0921 12.8543 11.2428L12.4287 11.9521C12.2345 12.2758 11.7655 12.2758 11.5713 11.9521L11.1457 11.2428C11.0553 11.0921 10.8925 11 10.7169 11H7.5C7.22386 11 7 11.2239 7 11.5ZM13.2676 23H22C24.0503 23 28 18.0221 28 18.0221C28 18.0221 24.2329 13 22 13H13.2831C13.1075 13 12.9447 13.0921 12.8543 13.2428L12.4287 13.9521C12.2345 14.2758 11.7655 14.2758 11.5713 13.9521L11.1457 13.2428C11.0553 13.0921 10.8925 13 10.7169 13H9.5C9.22386 13 9 13.2239 9 13.5V22.5C9 22.7761 9.22386 23 9.5 23H10.7324C10.8996 23 11.0557 22.9164 11.1484 22.7774L11.584 22.124C11.7819 21.8272 12.2181 21.8272 12.416 22.124L12.8516 22.7774C12.9443 22.9164 13.1004 23 13.2676 23Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${jo}_x32x32`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M10.6518 15.9861C10.6518 13.0334 13.0474 10.6518 15.9861 10.6518C16.766 10.6518 17.5042 10.8329 18.1727 11.1253L21.2507 7.50418C19.7187 6.5571 17.922 6 15.9861 6C10.4708 6 6 10.4708 6 16C6 18.507 6.91922 20.7911 8.45125 22.546L11.5432 18.9248C10.9861 18.0891 10.6657 17.0864 10.6657 16L10.6518 15.9861ZM23.7159 9.64902L20.5822 13.312C21.0418 14.1058 21.3343 15.0111 21.3343 16C21.3343 18.9526 18.9387 21.3343 16 21.3343C15.3175 21.3343 14.663 21.195 14.0641 20.9582L10.9443 24.6212C12.4345 25.4986 14.1476 26 16 26C21.5292 26 26 21.5292 26 16C26 13.5905 25.1504 11.376 23.7159 9.64902Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Ho}_x32x32`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M14 16C14 18.7614 11.7614 21 9 21C6.23858 21 4 18.7614 4 16C4 13.2386 6.23858 11 9 11C11.7614 11 14 13.2386 14 16Z',
                    fill: '#FFB34D',
                }),
                c.createElement('path', {
                    d: 'M28 16C28 18.7614 25.7614 21 23 21C20.2386 21 18 18.7614 18 16C18 13.2386 20.2386 11 23 11C25.7614 11 28 13.2386 28 16Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Oo}_x48x48`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M24.591 8.43413C24.2391 8.17627 23.7607 8.17627 23.4088 8.43413L8.18991 19.5867C7.84029 19.8429 7.69553 20.2951 7.83139 20.7067L13.6434 38.3142C13.7786 38.7239 14.1615 39.0007 14.593 39.0007H33.4069C33.8384 39.0007 34.2212 38.7239 34.3565 38.3142L40.1685 20.7067C40.3043 20.2951 40.1596 19.8429 39.8099 19.5867L24.591 8.43413ZM30.3958 34.2685L29.3606 33.1964H18.5283L17.4561 34.2685L18.214 32.6788L14.9606 22.6783L13.4633 21.9573L15.5891 22.1422L23.5932 16.3378L23.9445 14.3414L24.3511 16.3563L32.2998 22.1422L34.4071 21.9388L32.9283 22.6783L29.6934 32.6233L30.4143 34.25L30.3958 34.2685Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Ao}_x48x48`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M23.2929 8.70711C23.6834 8.31658 24.3166 8.31658 24.7071 8.70711L42 26H33.4142C33.149 26 32.8946 25.8946 32.7071 25.7071L24.7071 17.7071C24.3166 17.3166 23.6834 17.3166 23.2929 17.7071L15.2929 25.7071C15.1054 25.8946 14.851 26 14.5858 26H6L23.2929 8.70711Z',
                    fill: '#FFB34D',
                }),
                c.createElement('path', {
                    d: 'M33 31.4142C33 31.149 32.8946 30.8946 32.7071 30.7071L24.7071 22.7071C24.3166 22.3166 23.6834 22.3166 23.2929 22.7071L15.2929 30.7071C15.1054 30.8946 15 31.149 15 31.4142V40L23.2929 31.7071C23.6834 31.3166 24.3166 31.3166 24.7071 31.7071L33 40V31.4142Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Fo}_x48x48`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M24 20.5L20 16.4V7.7C20 7.3134 20.3134 7 20.7 7H27.3C27.6866 7 28 7.3134 28 7.7V16.4L24 20.5Z',
                    fill: '#FFB34D',
                }),
                c.createElement('path', {
                    d: 'M24 27.5L20 31.6V40.3C20 40.6866 20.3134 41 20.7 41H27.3C27.6866 41 28 40.6866 28 40.3V31.6L24 27.5Z',
                    fill: '#FFB34D',
                }),
                c.createElement('path', {
                    d: 'M31.4 20L27.5 24L31.4 28H40.3C40.6866 28 41 27.6866 41 27.3V20.7C41 20.3134 40.6866 20 40.3 20L31.4 20Z',
                    fill: '#FFB34D',
                }),
                c.createElement('path', {
                    d: 'M20.5 24L16.6 20L7.7 20C7.3134 20 7 20.3134 7 20.7V27.3C7 27.6866 7.3134 28 7.7 28H16.6L20.5 24Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${$o}_x48x48`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M33.4476 34H20C19.6852 34 19.3889 33.8518 19.2 33.6L18.8 33.0667C18.4 32.5333 17.6 32.5333 17.2 33.0667L16.8 33.6C16.6111 33.8518 16.3148 34 16 34H15C14.4477 34 14 33.5523 14 33V21C14 20.4477 14.4477 20 15 20H16C16.3148 20 16.6111 20.1482 16.8 20.4L17.2007 20.9343C17.6005 21.4673 18.4 21.4677 18.8002 20.935L19.2 20.4029C19.3889 20.1515 19.685 20.0036 19.9995 20.0036H33.4476C36.797 20.0036 42 27.0332 42 27.0332C42 27.0332 36.5231 34 33.4476 34ZM18.8 16.9333C18.4 17.4667 17.6 17.4667 17.2 16.9333L16.8 16.4C16.6111 16.1482 16.3148 16 16 16H11C10.4477 16 10 16.4477 10 17V23.6667C10 23.883 9.92982 24.0936 9.8 24.2667L8.79646 25.6047C8.6096 25.8539 8.31733 26.0017 8.00591 26.0047L7.00945 26.0141C6.4535 26.0193 6 25.5701 6 25.0141V13C6 12.4477 6.44772 12 7 12H7.95334C8.29399 12 8.61121 12.1734 8.79511 12.4602L9.15823 13.0264C9.55171 13.6399 10.4483 13.6399 10.8418 13.0264L11.2049 12.4602C11.3888 12.1734 11.706 12 12.0467 12H25.0638C26.8964 12 29.3189 14.119 31.1094 16.0382L20.0021 16.0017C19.6861 16.0006 19.3883 16.1489 19.1988 16.4016L18.8 16.9333Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${jo}_x48x48`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M15.9777 23.9791C15.9777 19.5501 19.571 15.9777 23.9791 15.9777C25.149 15.9777 26.2563 16.2493 27.2591 16.688L31.876 11.2563C29.578 9.83565 26.883 9 23.9791 9C15.7061 9 9 15.7061 9 24C9 27.7604 10.3788 31.1866 12.6769 33.8189L17.3148 28.3872C16.4791 27.1337 15.9986 25.6295 15.9986 24L15.9777 23.9791ZM35.5738 14.4735L30.8733 19.968C31.5627 21.1588 32.0014 22.5167 32.0014 24C32.0014 28.429 28.4081 32.0014 24 32.0014C22.9763 32.0014 21.9944 31.7925 21.0961 31.4373L16.4164 36.9318C18.6518 38.2479 21.2214 39 24 39C32.2939 39 39 32.2939 39 24C39 20.3858 37.7256 17.0641 35.5738 14.4735Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Ho}_x48x48`]: (e) =>
            c.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                c.createElement('path', {
                    d: 'M21 24C21 28.4183 17.4183 32 13 32C8.58172 32 5 28.4183 5 24C5 19.5817 8.58172 16 13 16C17.4183 16 21 19.5817 21 24Z',
                    fill: '#FFB34D',
                }),
                c.createElement('path', {
                    d: 'M43 24C43 28.4183 39.4183 32 35 32C30.5817 32 27 28.4183 27 24C27 19.5817 30.5817 16 35 16C39.4183 16 43 19.5817 43 24Z',
                    fill: '#FFB34D',
                }),
            ),
    },
    ea = {
        base: 'VehicleRole_e70537d3',
        base__x16x16: 'VehicleRole_base__x16x16_f444f190',
        base__x24x24: 'VehicleRole_base__x24x24_cc02d077',
        base__x32x32: 'VehicleRole_base__x32x32_2180a099',
        base__x48x48: 'VehicleRole_base__x48x48_2a01e86c',
        icon: 'VehicleRole_icon_7f7f6256',
    },
    ta = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48' },
    na = c.forwardRef(function ({ roleKey: e, size: t = ta.x24x24, classNames: n, ...r }, s) {
        const o = Jo[`${e}_${t}`];
        if (o)
            return u.jsx('div', {
                ...r,
                ref: s,
                className: d(ea.base, ea[`base__${t}`], null == n ? void 0 : n.base),
                children: u.jsx(o, { className: d(ea.icon, null == n ? void 0 : n.icon) }),
            });
        console.error(`Unknown vehicle role type ${e} with size ${t}`);
    });
na.sizes = ta;
const ra = { x24x24: 'x24x24', x48x48: 'x48x48', x64x64: 'x64x64', x96x96: 'x96x96' },
    sa = { x24x24: 'x64x64', x48x48: 'x96x96', x64x64: 'x96x96', x96x96: 'x96x96' },
    oa = {
        [Do.lightTank]: 'light_tank',
        [Do.mediumTank]: 'medium_tank',
        [Do.heavyTank]: 'heavy_tank',
        [Do.SPG]: 'spg',
        [Do['AT-SPG']]: 'tank_destroyer',
    },
    aa = {
        base: 'VehicleType_30b4aab0',
        base__x24x24: 'VehicleType_base__x24x24_a3dc7aa3',
        base__x48x48: 'VehicleType_base__x48x48_cb59f57a',
        base__x64x64: 'VehicleType_base__x64x64_bb9b890',
        base__x96x96: 'VehicleType_base__x96x96_919f9f92',
        base__premium__x24x24: 'VehicleType_base__premium__x24x24_92335fef',
        base__premium__x48x48: 'VehicleType_base__premium__x48x48_e19c5d21',
        base__premium__x64x64: 'VehicleType_base__premium__x64x64_ba9a2a05',
        base__premium__x96x96: 'VehicleType_base__premium__x96x96_d837a523',
        icon: 'VehicleType_icon_b15d2628',
    },
    ia = c.forwardRef(function ({ type: e, size: t = ra.x48x48, premium: n = !1, fit: r = 'contain', ...s }, o) {
        const a = ((i = ra[t]), (l = sa[t]), at().upscale ? l : i);
        var i, l;
        return u.jsx(un, {
            ...s,
            ref: o,
            fit: r,
            className: d(aa.base, n ? aa[`base__premium__${t}`] : aa[`base__${t}`], s.className),
            path: `ui_kit.vehicle_type.${a}.${n ? 'premium_' : ''}${H(oa[e])}_${a}`,
        });
    });
((ia.types = Do), (ia.sizes = ra));
const la = 'VehicleInfo_1732f1f0',
    ca = In('VehicleName', 'VehicleInfo_name_3989ca04', {
        variants: { premium: { true: 'VehicleInfo_name__premium_258b3b93' } },
    }),
    ua = c.forwardRef(function (e, t) {
        return u.jsx('div', { ...e, ref: t, className: d(la, e.className) });
    });
((ua.Prestige = Ko), (ua.Level = Vo), (ua.Type = ia), (ua.Name = ca), (ua.Role = na));
const da = 'Tooltip_decorator_b3486d4e',
    fa = In('Base', 'Tooltip_6d997cee'),
    ma = In('Decorator', da),
    ha = c.forwardRef(function ({ children: e, ...t }, n) {
        const r = c.useRef(null);
        return (
            yt(r, (e) => {
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
            u.jsx(fa, {
                ...t,
                ref: function (e) {
                    ((r.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                children: e,
            })
        );
    });
ha.Decorator = ma;
export {
    Ne as $,
    je as A,
    An as B,
    ls as C,
    jr as D,
    Tt as E,
    Mn as F,
    at as G,
    as as H,
    un as I,
    ke as J,
    qe as K,
    ss as L,
    os as M,
    Ct as N,
    xt as O,
    me as P,
    Ur as Q,
    _o as R,
    is as S,
    Ls as T,
    rn as U,
    on as V,
    uo as W,
    Jt as X,
    co as Y,
    _t as Z,
    _e as _,
    bt as a,
    Gn as a0,
    yr as a1,
    gr as a2,
    br as a3,
    fs as a4,
    ds as a5,
    Er as a6,
    He as a7,
    Ae as a8,
    To as a9,
    Mo as aa,
    ua as ab,
    Io as ac,
    ut as ad,
    Le as ae,
    kn as af,
    Bn as ag,
    X as ah,
    pe as ai,
    bo as aj,
    dt as ak,
    Lt as al,
    ns as am,
    Kr as an,
    ts as ao,
    Te as ap,
    zr as aq,
    Me as ar,
    nt as as,
    ha as at,
    en as au,
    ht as b,
    It as c,
    tn as d,
    A as e,
    Kt as f,
    Pe as g,
    Re as h,
    Qt as i,
    ct as j,
    Ce as k,
    he as l,
    Bt as m,
    Mt as n,
    Z as o,
    Be as p,
    qt as q,
    y as r,
    de as s,
    Dn as t,
    $t as u,
    ye as v,
    zn as w,
    mt as x,
    Hr as y,
    H as z,
};
