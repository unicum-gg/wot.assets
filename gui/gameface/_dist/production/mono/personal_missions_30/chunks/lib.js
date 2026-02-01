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
    r as l,
    j as c,
    f as u,
    o as d,
    u as f,
    g as m,
    h,
    R as _,
    i as g,
    k as p,
    l as v,
    m as b,
    C as w,
} from './vendor.js';
const x = r();
function y(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function E(e, t) {
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
class C {
    constructor(e = window.R.images, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.images') ? e : y(this.prefix, e),
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
            })(e.startsWith('R.images') ? window : this.root, r);
        return void 0 === s ? ('silent' !== n && E(`Resource not found: ${r}`, n), t()) : s;
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
var S = ((e) => (
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
))(S || {});
const L = { integral: 0, gold: 1 },
    T = { fractional: 0, woZeroDigits: 1 },
    N = Object.keys(L),
    P = Object.keys(T);
const B = { full: S.FullTime, short: S.ShortTime };
const M = {
    isNumberFormat: function (e) {
        return e in L;
    },
    formatNumber: function (e, t) {
        return window.systemLocale.getNumberFormat(t, L[e]);
    },
    numberFormats: N,
    isRealFormat: function (e) {
        return e in T;
    },
    formatReal: function (e, t) {
        return window.systemLocale.getRealFormat(t, T[e]);
    },
    realFormats: P,
    formatDateTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    dateTimeFormats: S,
    formatTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    timeFormats: Object.keys(B),
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
function D(e, t, n) {
    const r = e.split('.');
    if (window.R && window.R.strings) {
        const e = r[r.length - 1];
        if (!e) return;
        const s = r.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
        }, n);
        if (!s) return;
        return 'function' == typeof s[e] ? (t ? s[e](t) : s[e]()) : void 0;
    }
    throw new Error('R class with strings field is not defined');
}
class k {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : y(this.prefix, e),
            s = D(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== n && E(`Resource not found: ${r}`, n), t()) : s;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : y(this.prefix, e),
            n = D(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const s = e.startsWith('R.strings') ? e : y(this.prefix, e),
            o = D(s, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== r && E(`Resource not found: ${s}`, r), n()) : o;
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
        const r = e.startsWith('R.videos') ? e : y(this.prefix, e),
            s = (function (e, t) {
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
        return void 0 === s ? ('silent' !== n && E(`Resource not found: ${e}`, n), t()) : s;
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
x.register({
    strings: a(() => new k()).singleton(),
    images: a(() => new C(window.R.images.gui.maps.icons)).singleton(),
    atlases: a(() => new C(window.R.atlases)).singleton(),
    videos: a(() => new F(window.R.videos)).singleton(),
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
                    : E(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: s(R.strings.settings.LANGUAGE_CODE()),
    intl: s(M),
});
const I = {
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
function O(e) {
    return e.replaceAll('-', '_');
}
function $(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function A(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const j = $('clientResized'),
    z = $('self.onScaleUpdated'),
    H = $('clientMinimized'),
    U = { down: $('mousedown'), up: $('mouseup'), move: $('mousemove') };
const V = (function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && A(!1);
    }
    function n() {
        e.enabled && A(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  A(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : A(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const s = `mouse${t}`,
                            o = U[t]((e) => n([e, 'outside']));
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
            e.enabled && A(!0);
        },
        disableOutside() {
            e.enabled && A(!1);
        },
    };
})();
function G(e = 'px') {
    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
}
function W(e) {
    engine.call('PlaySound', e);
}
const Z = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    q = { ...Object.keys(Z).reduce((e, t) => ((e[t] = () => W(Z[t])), e), {}), sound: W },
    X = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    Y = {
        onTextureFrozen: $('self.onTextureFrozen'),
        onTextureReady: $('self.onTextureReady'),
        onDomBuilt: $('self.onDomBuilt'),
        onLoaded: $('self.onLoaded'),
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
        onDisplayChanged: $('self.onShowingStatusChanged'),
        onFocusUpdated: $('self.onFocusChanged'),
        children: {
            onAdded: $('children.onAdded'),
            onLoaded: $('children.onLoaded'),
            onRemoved: $('children.onRemoved'),
            onAttached: $('children.onAttached'),
            onTextureReady: $('children.onTextureReady'),
            onRequestPosition: $('children.requestPosition'),
        },
    },
    Q = 1,
    K = 2,
    J = 4,
    ee = 16,
    te = 32,
    ne = 64;
function re(e) {
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
const se = (e) => {
        const t = [];
        for (const [n, r] of Object.entries(e)) {
            const e = re(r);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
        }
        return t;
    },
    oe = (e, t) => {
        const n = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...s } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: n, type: e, ...s, arguments: se(r) })
                : viewEnv.handleViewEvent({ __Type: n, type: e, ...s });
        }
        return viewEnv.handleViewEvent({ __Type: n, type: e });
    },
    ae = new Map(),
    ie = new Map(),
    le = {
        close(e) {
            oe('popover' === e ? K : te);
        },
        closeView() {
            oe(te);
        },
        minimize() {
            oe(ne);
        },
        move(e) {
            oe(ee, { isMouseEvent: !0, on: e });
        },
        popover: {
            open({ contentID: e, decoratorID: t = 0, targetID: n, direction: r, boundingBox: s, args: o }) {
                var a;
                oe(K, {
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
                oe(K, { on: !1 });
            },
        },
        tooltip: {
            open(e, t, n = 0, r) {
                (oe(Q, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    ae.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (oe(Q, { contentID: t, decoratorID: n, targetID: e, on: !1 }), ae.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(ae.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
        contextMenu: {
            open(e, t, n = 0, r) {
                (oe(J, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    ie.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (oe(J, { contentID: t, decoratorID: n, targetID: e, on: !1, isMouseEvent: !1 }),
                    ie.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(ie.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
    };
function ce(e) {
    return viewEnv.pxToRem(e);
}
function ue(e) {
    return viewEnv.remToPx(e);
}
function de() {
    viewEnv.forceTriggerMouseMove();
}
function fe(e) {
    viewEnv.setContentReady(e);
}
Object.keys(X).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === X[t]), e), {});
class me {
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
const he = (e) => (0 === e ? window : window.subViews.get(e));
function _e(
    { initializer: e = !0, rootId: t = 0, getRoot: n = he, context: r = 'model' } = {},
    { name: s = 'DataLayer' } = {},
) {
    const o = new Map(),
        a = { subscribersNotified: new me() },
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
            if (0 === t || window.subViews.ids().includes(t)) for (const e of o.keys()) u(e);
            i.then((e) => e());
        },
        unsubscribe: u,
        events: a,
    };
}
function ge(e, t) {
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
const pe = (e, t, n) => (n < e ? e : n > t ? t : n);
function ve() {}
function be() {
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
const we = { ESCAPE: 27, ARROW_LEFT: 37, ARROW_RIGHT: 39 };
function xe(e, t) {
    return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
}
const ye = {
    NONE: 'NONE',
    ...((Ee = [
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
    Ee.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...xe(
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
    ...xe(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...xe(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...xe(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...xe(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...xe(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...xe(['Up', 'Down'], 'Page'),
    ...xe(['Left', 'Right'], 'Bracket'),
};
var Ee;
function Ce(e) {
    return 'number' == typeof e
        ? (function (e) {
              return window.systemInput.getKeyName(e);
          })(e)
        : e;
}
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
    return 'function' == typeof t ? Fe(0, e, t) : (De(void 0 !== n, 'fn must be defined'), Fe(e, t, n));
}
function Fe(e, t, n) {
    const r = new Array(t - e);
    for (let s = e; s < t; s++) r[s] = n(s);
    return r;
}
De.log = function (e, t) {
    e || console.error(t || 'Assertion failed');
};
const Ie = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    Oe = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
    $e = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
function Ae(e) {
    if (e <= 10) return $e[e] ?? String(e);
    let t = '';
    for (let n = Oe.length - 1; n >= 0; n--) {
        let r = Oe[n];
        for (; void 0 !== r && e >= r; ) ((t += Ie[n]), (e -= r));
    }
    return t;
}
function je(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
}
function ze() {
    return Math.random() > 0.5;
}
['ko', 'no'].includes(x.resolve('langCode'));
class He {
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
const Ue = 0;
function Ve(e) {
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
const Ge = {
    zh_cn: Ve,
    zh_sg: Ve,
    zh_tw: Ve,
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
function We(e) {
    return e.split(' ');
}
const Ze = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko']);
const qe = l.createContext(void 0);
const Xe = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large', extraLarge: 'extraLarge' },
    Ye = {
        extraSmall: { weight: 0, name: Xe.extraSmall, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: Xe.small, className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: Xe.medium, className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: Xe.large, className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: Xe.extraLarge, className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var Qe,
    Ke,
    Je,
    et =
        (((Qe = et || {})[(Qe.Small = Ye.small.width)] = 'Small'),
        (Qe[(Qe.Medium = Ye.medium.width)] = 'Medium'),
        (Qe[(Qe.Large = Ye.large.width)] = 'Large'),
        (Qe[(Qe.ExtraLarge = Ye.extraLarge.width)] = 'ExtraLarge'),
        Qe),
    tt =
        (((Ke = tt || {})[(Ke.Small = Ye.small.width)] = 'Small'),
        (Ke[(Ke.Medium = Ye.medium.width)] = 'Medium'),
        (Ke[(Ke.Large = Ye.large.width)] = 'Large'),
        (Ke[(Ke.ExtraLarge = Ye.extraLarge.width)] = 'ExtraLarge'),
        Ke),
    nt =
        (((Je = nt || {})[(Je.Small = Ye.small.height)] = 'Small'),
        (Je[(Je.Medium = Ye.medium.height)] = 'Medium'),
        (Je[(Je.Large = Ye.large.height)] = 'Large'),
        (Je[(Je.ExtraLarge = Ye.extraLarge.height)] = 'ExtraLarge'),
        Je);
const rt = Object.values(Ye);
function st(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        s = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...s])).join(' ');
}
const ot = () => {
    const e = (function (e = 'px') {
        return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
    })('rem');
    return (function (e, t, n) {
        const r = rt.reduce(
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
            a = o.names[o.names.length - 1] ?? Xe.extraSmall,
            i = Ye[a],
            l = r.width.names,
            c = r.height.names,
            u = l[l.length - 1] ?? Xe.extraSmall,
            d = c[c.length - 1] ?? Xe.extraSmall,
            f = { width: Ye[u].width, height: Ye[d].height };
        return {
            mediaClass: st(s, r),
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
    })(e.width, e.height, ue(1));
};
function at({ children: e }) {
    const [t, n] = l.useState(ot);
    return (
        l.useLayoutEffect(() => {
            function e() {
                n(ot);
            }
            e();
            const t = j(e),
                r = z(e);
            return () => {
                (t(), r());
            };
        }, []),
        c.jsx(qe.Provider, { value: t, children: e })
    );
}
function it() {
    return (function () {
        const e = l.useContext(qe);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function lt({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: s } = it();
    return c.jsx('div', { className: u(t, 'media-wrapper', r, s && 'media-upscale'), ...n, children: e });
}
function ct({ children: e, ...t }) {
    return c.jsx(at, { children: c.jsx(lt, { ...t, children: e }) });
}
function ut(e, t) {
    return (function (e, t, n) {
        return n ? e.breaks.reduce((e, t) => (n[t] ? { ...e, ...n[t] } : e), t) : t;
    })(it(), e, t);
}
const dt = (e) => {
    const t = l.useRef();
    return (
        l.useEffect(() => {
            t.current = e;
        }, [e]),
        t.current
    );
};
function ft() {
    return l.useMemo(() => {
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
const mt = [];
function ht(e) {
    const t = l.useRef(e);
    return (
        l.useLayoutEffect(() => {
            t.current = e;
        }),
        l.useCallback((...e) => (0, t.current)(...e), mt)
    );
}
function _t(e) {
    l.useEffect(e, []);
}
function gt(e) {
    l.useEffect(() => e, []);
}
const pt = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new He();
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
                if (e === ye.NONE) return be;
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
    vt = l.createContext(void 0);
function bt(e, t, n, r = !1) {
    const s = Ce(e),
        o = ht((e) => {
            viewEnv.isEventHandled() || (n(e), viewEnv.setEventHandled(), r && e.stopPropagation());
        }),
        a = (function () {
            const e = l.useContext(vt);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        i = l.useMemo(() => a[t].register(s, o), [a, t, s, o]);
    l.useEffect(() => i, [i]);
}
function wt(e, t, n = !1) {
    return bt(Ce(e), 'keydown', t, n);
}
function xt(e) {
    const t = l.useMemo(pt, []),
        n = l.useMemo(pt, []);
    l.useEffect(() => {
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
    const r = l.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: n.register, unregister: n.unregister },
        }),
        [t, n],
    );
    return c.jsx(vt.Provider, { value: r, children: e.children });
}
function yt(e, t) {
    l.useEffect(() => (window.addEventListener('resize', e), () => window.removeEventListener('resize', e)), t);
}
const Et = (e, t, n = !0) => {
        const r = ht((e) => {
            const n = e[0];
            n && t(n);
        });
        l.useEffect(() => {
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
    Ct = 0;
function Rt() {
    const e = l.useRef(Ct);
    return (
        gt(() => {
            window.cancelAnimationFrame(e.current);
        }),
        l.useMemo(
            () => ({
                run: (t) => {
                    (window.cancelAnimationFrame(e.current),
                        (e.current = window.requestAnimationFrame(() => {
                            e.current = window.requestAnimationFrame(() => {
                                ((e.current = Ct), t());
                            });
                        })));
                },
                clear: () => {
                    (window.cancelAnimationFrame(e.current), (e.current = Ct));
                },
                get isRunning() {
                    return e.current !== Ct;
                },
            }),
            [],
        )
    );
}
function St(e, t, n) {
    const r = l.useMemo(
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
    return (l.useEffect(() => r.cancel, [r]), r);
}
function Lt() {
    const e = l.useRef(0);
    return (
        gt(() => {
            window.clearTimeout(e.current);
        }),
        l.useMemo(
            () => ({
                run: (t, n) => {
                    (window.clearTimeout(e.current),
                        (e.current = window.setTimeout(() => {
                            ((e.current = 0), t());
                        }, n)));
                },
                clear: () => {
                    (window.clearTimeout(e.current), (e.current = 0));
                },
                get isRunning() {
                    return 0 !== e.current;
                },
            }),
            [],
        )
    );
}
const Tt = new WeakMap(),
    Nt = 0,
    Pt = { await: 'await', idle: 'idle', display: 'display' };
function Bt({ resId: e = Nt, contentId: t, decoratorId: n, disabled: r, args: s, showDelay: o = 400 }) {
    const a = l.useRef({ status: Pt.idle, resId: e, timeoutId: 0 }),
        [i, c] = l.useMemo(() => {
            let i = null;
            function l() {
                r ||
                    ((a.current.status = Pt.await),
                    window.clearTimeout(a.current.timeoutId),
                    (a.current.timeoutId = window.setTimeout(c, o)));
            }
            function c() {
                ((a.current.status = Pt.display), le.tooltip.open(e, t, n, s), i && Tt.set(i, d));
            }
            function u() {
                if (
                    (window.clearTimeout(a.current.timeoutId),
                    a.current.status === Pt.display && le.tooltip.hide(e, t, n),
                    (a.current.status = Pt.idle),
                    i)
                ) {
                    Tt.delete(i);
                    let e = i.parentElement;
                    for (; e && !Tt.has(e); ) e = e.parentElement;
                    if (e) {
                        Tt.get(e).show();
                    }
                    i = null;
                }
            }
            const d = {
                hide: u,
                show: c,
                rerun: function () {
                    a.current.status !== Pt.idle && (r ? d.hide() : l());
                },
            };
            return [
                d,
                {
                    onMouseEnter: (e) => {
                        ((i = null == e ? void 0 : e.currentTarget), l());
                    },
                    onMouseLeave: r ? ve : u,
                    onClick: r ? ve : u,
                },
            ];
        }, [s, t, n, r, e, o]);
    return (
        l.useEffect(() => {
            i.rerun();
        }, [i]),
        gt(ht(i.hide)),
        c
    );
}
function Mt({ alert: e, body: t, header: n, note: r, hasHtmlContent: s, disabled: o }) {
    const a = x.resolve('views');
    return Bt({
        disabled: o,
        contentId: a.read((e) =>
            s
                ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
        ),
        decoratorId: a.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
        args: l.useMemo(() => ({ body: t, header: n, note: r, alert: e }), [e, t, n, r]),
    });
}
const Dt = [];
function kt(e, t = Dt, n) {
    return Bt({
        ...n,
        disabled: null == n ? void 0 : n.disabled,
        contentId: x.resolve('aliases').read((e) => e.common.tooltip.Backport('resId')),
        args: l.useMemo(
            () => ({ tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == n ? void 0 : n.args) }),
            [t, e, null == n ? void 0 : n.args],
        ),
    });
}
function Ft(e, t, n) {
    return Bt({
        ...n,
        disabled: 'string' != typeof e || (null == n ? void 0 : n.disabled),
        contentId: x.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
        args: l.useMemo(() => ({ type: e, params: JSON.stringify(t), resId: t.resId }), [t, e]),
    });
}
const It = ['ko', 'no'];
const Ot = {
    click: $t('play'),
    'hot-key': $t('play'),
    'mouse-enter': $t('highlight'),
    increaseAmount: $t('cons_ammo_single_plus'),
    decreaseAmount: $t('cons_ammo_single_minus'),
    increaseAmountRoll: $t('cons_ammo_roll_plus'),
    decreaseAmountRoll: $t('cons_ammo_roll_minus'),
    close: $t('cancelcloseno'),
    'show-context-menu': $t('tabb'),
    progressSimple: $t('gui_hangar_progressbar_simple'),
    increaseDelta: $t('gui_hangar_progressbar_delta_increase'),
    decreaseDelta: $t('gui_hangar_progressbar_delta_decrease'),
    increaseDeltaMax: $t('gui_hangar_progressbar_delta_max'),
    pointerGrab: $t('gui_hangar_progressbar_pointer_grab'),
    pointerDrag: $t('gui_hangar_progressbar_pointer_drag'),
};
function $t(e) {
    return () => {
        q.sound(e);
    };
}
const At = l.createContext(null);
function jt({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const s = l.useMemo(() => ({ ...Ot, ...t }), [t]),
        o = l.useMemo(
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
    return c.jsx(At.Provider, { value: o, children: r });
}
function zt() {
    const e = l.useContext(At);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const Ht = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    Ut = new Set(['number', 'string', 'boolean', 'bigint']),
    Vt = new Set(['Dict']);
function Gt(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var s, o;
    const a = e,
        i = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (Ht.has(i)) return a;
    if (null === a) return a;
    const l = { depth: n + 1, maxDepth: r };
    if (Array.isArray(a)) return a.map((e) => Gt(e, l));
    if ('object' === i) {
        const r = (null == (s = a.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => Gt(e, l));
        if ('CoherentArrayProxy' === r) return e.map((e) => Gt(e.value, l));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in a) {
                    const n = a[t];
                    Ut.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in a) {
                    const n = a[t],
                        r = (null == (o = null == a ? void 0 : a.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                    Vt.has(r) || (e[t] = Gt(n, l));
                }
                return e;
            }
        }
        const i = {};
        for (const e of Object.keys(a)) i[e] = Gt(a[e], l);
        return i;
    }
    return (console.error('Incorrect value to clone model', a), a);
}
const Wt = { deep: !1, equals: be },
    Zt = { cloneItem: !0 },
    qt = { shallow: !1 };
class Xt {
    constructor(e, t = Zt) {
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
            r[t] = d.box(this.takeItem(e, t), Wt);
        }
        ((this._keys = d.set(new Set(s))), (this._data = d.box(r, Wt)));
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
                : null !== o && ((n[s] = d.box(o, Wt)), this._keys.add(s), this.set(n));
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
        return this.options.cloneItem ? Gt(n, qt) : n;
    }
    untrackedData() {
        return f(() => this._data.get());
    }
}
const Yt = l.createContext({ mode: 'real' });
function Qt(e) {
    return (t, n) => {
        const r = ge(t, n);
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
const Kt = { equals: be, deep: !1 };
function Jt(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        i(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const s = (s, o, a = Kt) => {
            const i = d.box(s(n(o)), a);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(s(e))), o), i);
        },
        o = (s, o) => {
            const a = new Xt(n(s), o);
            return ('real' === t && e.subscribe((e, t) => r.push(() => a.update(e, t)), s), a);
        },
        a = (s, o) => {
            const a = d.box(n(s) ?? o, Kt);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(e)), s), a);
        };
    return {
        dict: o,
        dictRef: (e, t) => o(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => s(Gt, e),
        array: a,
        object: a,
        transform: s,
        primitives: (s, o) => {
            const a = n(o);
            if (Array.isArray(s)) {
                const n = s.reduce((e, t) => ((e[t] = d.box(a[t], {})), e), {});
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
                    l = i.reduce((e, [t, n]) => ((e[n] = d.box(a[t], {})), e), {});
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
const en =
        (e = 'DataLayerProvider') =>
        (t, n, r) => {
            const s = l.createContext(null);
            function o(o) {
                var a;
                const { mode: i, options: u, children: d, mocks: f } = o,
                    m = l.useContext(Yt),
                    h = i ?? m.mode,
                    _ = f ?? m.mocks,
                    g = l.useRef([]),
                    p = null == (a = null == r ? void 0 : r.useRequires) ? void 0 : a.call(r),
                    v = ht((s, a, i) => {
                        var l;
                        const c =
                                'real' !== s && i
                                    ? (function (e, t) {
                                          return {
                                              subscribe: () => 0,
                                              readSafeByPath: e,
                                              readByPath: e,
                                              createCallback: (n, r) => {
                                                  const s = e(ge(r, t));
                                                  return (...e) => {
                                                      s(n(...e));
                                                  };
                                              },
                                              createCallbackNoArgs: (n) => {
                                                  const r = e(ge(n, t));
                                                  return () => {
                                                      r();
                                                  };
                                              },
                                              dispose: () => {},
                                              unsubscribe: () => {},
                                              events: { subscribersNotified: new me() },
                                          };
                                      })(i.getter, a)
                                    : _e(a, { name: e }),
                            u = (e) => ('mocks' === s ? (null == i ? void 0 : i.getter(e, a)) : c.readByPath(e)),
                            d = (e) => g.current.push(e),
                            f = 'initial' in o && {
                                initial: null == (l = null == r ? void 0 : r.initial) ? void 0 : l.call(r, o.initial),
                            },
                            m = t({
                                ...f,
                                mode: s,
                                readByPath: u,
                                requires: p,
                                externalModel: c,
                                observableModel: Jt(c, s, u),
                                cleanup: d,
                            }),
                            h = { ...f, mode: s, model: m, externalModel: c, cleanup: d, requires: p },
                            _ = 'mocks' === s && (null == i ? void 0 : i.controls) ? i.controls(h) : {};
                        return {
                            model: m,
                            controls: { ...(null == n ? void 0 : n(h)), ..._ },
                            externalModel: c,
                            mode: s,
                        };
                    }),
                    b = l.useRef(!1),
                    [w, x] = l.useState(h);
                l.useEffect(() => {
                    x(h);
                }, [h]);
                const [y, E] = l.useState(() => v(w, u, _));
                return (
                    l.useEffect(() => {
                        b.current ? E(v(w, u, _)) : (b.current = !0);
                    }, [
                        v,
                        _,
                        w,
                        null == u ? void 0 : u.context,
                        null == u ? void 0 : u.initializer,
                        null == u ? void 0 : u.getRoot,
                        null == u ? void 0 : u.rootId,
                    ]),
                    l.useEffect(
                        () => () => {
                            (y.externalModel.dispose(), g.current.forEach((e) => e()));
                        },
                        [y],
                    ),
                    c.jsx(s.Provider, { value: y, children: d })
                );
            }
            return (
                (o.displayName = e),
                [
                    o,
                    function () {
                        const e = l.useContext(s);
                        if (!e) throw new Error(`hook useModel must be used within a ${o.displayName}.`);
                        return e;
                    },
                    { Context: s },
                ]
            );
        },
    tn = {
        model: (e, t) => m(e, { equals: be, ...t }),
        primitive: m,
        shallow: (e, t) => m(e, { equals: h.shallow, ...t }),
        structural: (e, t) => m(e, { equals: h.structural, ...t }),
    },
    nn = (e) => (t) => {
        e.forEach((e) =>
            ((e, t) => {
                e && ('function' == typeof e ? e(t) : (e.current = t));
            })(e, t),
        );
    };
l.forwardRef(function (e, t) {
    const n = l.useRef(null);
    return (
        l.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return Y.onHitTest((t) => {
                    const n = e.getBoundingClientRect();
                    return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                });
        }, []),
        c.jsx('div', { ...e, ref: nn([t, n]) })
    );
});
class rn {
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
        return c.jsx(c.Fragment, {
            children: this.items.reduceRight((e, [t, n], r) => l.createElement(t, { ...n, key: r }, e), e),
        });
    }
}
async function sn(
    e,
    { root: t = document.getElementById('root'), withMedia: n = !0, fullScreen: r = !1, immediateLayout: s = !0 } = {},
) {
    var o;
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
    const a = n ? ct : _.Fragment,
        i = (null == (o = null == window ? void 0 : window.engine) ? void 0 : o.whenReady) ?? Promise.resolve();
    (s && engine.enableImmediateLayout(!0),
        await i,
        document.documentElement.setAttribute('lang', x.resolve('langCode')),
        g.createRoot(t).render(c.jsx(a, { children: c.jsx(xt, { children: e }) })),
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
function on(e) {
    return c.jsx(c.Fragment, { children: e.children });
}
function an(e) {
    return c.jsx(on, {
        children: c.jsx(jt, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
const ln = l.forwardRef(function (
        {
            src: e,
            className: t,
            autoplay: n = !1,
            style: r,
            loop: s = !1,
            isPrebufferKeyframes: o,
            keyframesNameConfig: a,
            onClick: i,
            ...u
        },
        d,
    ) {
        const f = d,
            m = l.useRef(null);
        return (
            _t(() => {
                let e = !1;
                return Y.onDisplayChanged((t, n) => {
                    const r = m.current;
                    r && (n === X.hidden ? ((e = r.paused), r.pause()) : e || n !== X.shown || r.play());
                });
            }),
            _t(() => {
                let e = !1;
                return H((t) => {
                    const n = m.current;
                    n && (t ? ((e = n.paused), n.pause()) : e || n.play());
                });
            }),
            l.useEffect(
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
            l.useEffect(() => {
                if (f && m.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: ve },
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
                            m.current && (m.current.currentTime = pe(0, m.current.duration, e));
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
                        g = (e) => {
                            (l(e), u());
                        },
                        p = () => {
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
                            cleanup: p,
                            getCurrentTime: s,
                            getDuration: i,
                            getCachedKeyframes: h,
                            goToAndPlay: _,
                            goToAndStop: g,
                            setCurrentTime: l,
                            domRef: m.current,
                            onChangeTime: n,
                            onKeyframes: r,
                        }),
                        () => {
                            (p(), (f.current = null));
                        }
                    );
                }
            }, [a, f, o]),
            l.useEffect(() => {
                m.current && n && m.current.play();
            }, [n, s]),
            gt(() => {
                var e;
                null == (e = m.current) || e.pause();
            }),
            c.jsx('video', { src: e, className: t, style: r, loop: s, ref: m, onClick: i, ...u })
        );
    }),
    cn = l.memo(ln),
    un = () => {};
function dn(e) {
    const t = e;
    return l.forwardRef(function (e, n) {
        const r = ut(e, e.adaptive),
            { path: s, ...o } = r,
            a = r.images ?? x.resolve('images'),
            i = { ...o, ref: n };
        {
            const e = s ? a.readOr(s, un, 'warn') : void 0;
            return e ? c.jsx(t, { ...i, src: e }) : c.jsx(t, { ...i, unknown: !0 });
        }
    });
}
const fn = {
        background:
            'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
        backgroundSize: '20rem 20rem',
        backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
        backgroundColor: '#000',
    },
    mn = dn(
        l.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: n,
                    fit: r,
                    position: s,
                    width: o,
                    src: a,
                    height: i,
                    unselectable: l,
                    unknown: u,
                    unknownStyle: d = fn,
                    ...f
                } = e;
                return c.jsx('div', { ...f, ref: t, style: { width: e.width, height: e.height, ...d, ...e.style } });
            }
            const {
                repeat: n,
                fit: r,
                position: s,
                width: o,
                height: a,
                unknownStyle: i,
                unknown: l,
                unselectable: u,
                ...d
            } = e;
            return c.jsx('div', {
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
dn(
    l.forwardRef(function (e, t) {
        const { width: n, height: r, src: s, unselectable: o, unknown: a, unknownStyle: i = fn, ...l } = e;
        return e.unknown
            ? c.jsx('div', { ...l, style: { width: e.width, height: e.height, ...i } })
            : c.jsx('img', { ...l, ref: t, src: s, width: n, height: r });
    }),
);
const hn = 1,
    _n = 2,
    gn = 3;
const pn = {
        COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
        base: 'FormatText_db904f12',
        base__fullSize: 'FormatText_base__fullSize_a514958e',
        nowrap: 'FormatText_nowrap_ff69eca3',
    },
    vn = new Set((null == (e = pn.COLORS) ? void 0 : e.split(', ')) ?? []);
let bn = 0;
function wn() {
    return ++bn;
}
const xn =
    /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
function yn(e) {
    const t = x.resolve('langCode');
    return (function (e, t, n) {
        return Ze.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
    })(
        (function (e, t) {
            return (Ge[t] ?? We)(e);
        })(e, t),
        t,
        (e, t) => e && c.jsx('span', { children: e }, `${e}${t}`),
    );
}
function En(e) {
    return Array.isArray(e)
        ? (function (e) {
              const t = [];
              for (let n = 0; n < e.length; n++) {
                  const r = e[n],
                      s = e[n + 1];
                  if ('string' != typeof s || !xn.test(s)) {
                      t.push(En(r));
                      continue;
                  }
                  const o = yn(s.slice(1));
                  (t.push(
                      c.jsxs(
                          l.Fragment,
                          { children: [c.jsxs('span', { className: pn.nowrap, children: [En(r), s[0]] }), o] },
                          wn(),
                      ),
                  ),
                      (n += 1));
              }
              return t;
          })(e)
        : 'string' == typeof e
          ? c.jsx(l.Fragment, { children: yn(e) }, wn())
          : e;
}
const Cn = {
    class: function (e, ...t) {
        return c.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            wn(),
        );
    },
    colorLegacy: function (e, t) {
        const n = wn();
        return vn.has(String(t))
            ? c.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : c.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: En,
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
            wn(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function Rn(e, t, n, r) {
    const s = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...s] = n.slice(1, -1).split(' ');
                return t ? Rn(e, t, s, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        o = r[t];
    return o ? o(e, ...s) : (console.error(`Function ${t} is not registered`), e);
}
function Sn(e, t, n) {
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
        return r ? Rn(e, r, s, n) : e;
    }, t);
}
function Ln(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function Tn(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !Ln(e[r]); ) r++;
            const s = e.slice(n + 1, r),
                o = t[s];
            if (o) return Tn(e.replace(`$${s}`, String(o)), t);
        }
    }
    return e;
}
function Nn(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = Tn(e[r], t);
    return n;
}
const Pn = ['number', 'string', 'undefined'];
function Bn(e, t, n = {}, r = !0) {
    r && (bn = 0);
    const s = [];
    function o(e) {
        if (Pn.includes(typeof e)) {
            const t = s.at(-1);
            if ('string' == typeof t) return void (s[s.length - 1] = t + e);
        }
        s.push(e);
    }
    for (const a of e)
        if (a.type === hn) o(a.value);
        else if (a.type === gn)
            null === n[a.name] || Pn.includes(typeof n[a.name])
                ? o(n[a.name] ?? `{{${a.name}}}`)
                : s.push(c.jsx(l.Fragment, { children: n[a.name] }, `var-${a.name}-${a.instanceId}`));
        else if (a.type === _n) {
            const e = Bn(a.children, t, n, !1),
                r = Sn(Nn(a.attrs, n), e, t);
            s.push(r);
        }
    return s;
}
function Mn(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function Dn(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function kn(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const Fn = { start: '{{', end: '}}' },
    In = l.memo(function (e) {
        const {
                brackets: t = Fn,
                text: n,
                params: r,
                upgradeLegacy: s,
                fullSize: o,
                inline: a,
                formatters: i,
                split: d,
                ...f
            } = e,
            m = l.useMemo(
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
                              })(e, kn, Mn, Dn);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            h = l.useMemo(() => (e.formatters ? { ...Cn, ...e.formatters } : Cn), [e.formatters]),
            _ = l.useMemo(
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
                                        ? r[r.length - 1].node.children.push({ type: hn, value: s })
                                        : n.push({ type: hn, value: s }),
                                    (s = '')),
                                    (o = !0),
                                    (l += t.start.length - 1));
                            else if (c === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                                ((o = !1), (l += t.end.length - 1));
                                const e = a.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        s = { type: _n, attrs: t.split('|'), instanceId: ++i, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(s) : n.push(s),
                                        r.push({ node: s, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: gn, instanceId: ++i, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                a = '';
                            } else o ? (a += c) : (s += c);
                        }
                        s &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: hn, value: s })
                                : n.push({ type: hn, value: s }));
                        return n;
                    })(d ? `{{@ split}}${m}{{/}}` : m, t),
                [t, m, d],
            ),
            g = l.useMemo(() => Bn(_, h, e.params), [_, h, e.params]),
            p = u(pn.base, o && pn.base__fullSize, f.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              c.jsx('p', {
                  ...f,
                  className: p,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: g,
              }))
            : c.jsx('span', { ...f, className: p, children: g });
    });
function On({ path: e, ...t }) {
    return c.jsx(In, { text: x.resolve('strings').readOrEmpty(e), ...t });
}
const $n = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    An = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
function jn(e, t, n) {
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
            r = p(n.className, n.cva),
            s = n.element,
            a = l.forwardRef(function (e, t) {
                return l.createElement(s, { ...('function' == typeof s ? e : zn(o, e)), ref: t, className: r(e) });
            });
        return ((a.displayName = e), n.cva && (a.cva = n.cva), a);
    }
    const a = p(t, n),
        i = l.forwardRef(function (t, n) {
            return c.jsx('div', { 'data-name': e, ...zn(o, t), ref: n, className: a(t) });
        });
    return ((i.displayName = e), n && (i.cva = n), i);
}
function zn(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
const Hn = jn('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    Un = l.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: s = !1, silent: o = !1, ...a },
        i,
    ) {
        const l = zt();
        return c.jsx(Hn, {
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
    Vn = {
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
    Gn = l.forwardRef(function (
        {
            children: e,
            size: t = An.large,
            theme: n = $n.primary,
            disabled: r = !1,
            silent: s = !1,
            autoAlignContent: o = !0,
            classNames: a,
            className: i,
            ...l
        },
        d,
    ) {
        return c.jsxs(Un, {
            ...l,
            ref: d,
            silent: s,
            disabled: r,
            className: u(
                Vn.base,
                Vn[`base__size-${t}`],
                Vn[`base__theme-${n}`],
                r ? Vn.base__disabled : Vn.base__enabled,
                i,
                null == a ? void 0 : a.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = l.onClick) || t.call(l, e);
            },
            children: [
                c.jsx('div', { className: u(Vn.background, null == a ? void 0 : a.background) }),
                c.jsx('div', { className: u(Vn.border, null == a ? void 0 : a.border) }),
                c.jsx('div', { className: u(Vn.overlay, null == a ? void 0 : a.overlay) }),
                c.jsx('div', {
                    className: u(Vn.content, o && Vn.content__fontAligned, null == a ? void 0 : a.content),
                    children: e,
                }),
            ],
        });
    });
((Gn.themes = $n), (Gn.sizes = An));
var Wn = ((e) => ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e))(Wn || {});
const Zn = {
        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
        animationConfig: { tension: 170, friction: 26 },
    },
    qn = ({
        getContainerSize: e,
        getBounds: t,
        setScrollPosition: n,
        getDirection: r,
        getWrapperSize: s,
        triggerMouseMoveOnUpdate: o = !1,
    }) => {
        const a = (e, n) => {
            const [r, s] = t(e);
            return pe(r, s, n);
        };
        return (i = {}) => {
            const { settings: c = Zn } = i,
                [u, d] = l.useState(!1),
                f = l.useRef(null),
                m = l.useRef(null),
                h = l.useRef({ wrapper: 0, container: 0 }),
                _ = ft(),
                g = St(
                    () => {
                        de();
                    },
                    [],
                    150,
                ),
                [p, b] = v(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = f.current;
                        t && (n(t, e), _.trigger('change', e));
                    },
                    onRest: (e) => _.trigger('rest', e),
                    onStart: (e) => _.trigger('start', e),
                    onPause: (e) => _.trigger('pause', e),
                })),
                w = l.useCallback(
                    (e, t, n) => {
                        const r = p.scrollPosition.get(),
                            s = (p.scrollPosition.goal ?? 0) - r;
                        return a(e, t * n + s + r);
                    },
                    [p.scrollPosition],
                ),
                x = l.useCallback(
                    function (e, { immediate: t = !1, reset: n = !0 } = {}) {
                        const r = f.current;
                        if (!r) return;
                        const s = a(r, e);
                        p.scrollPosition.goal !== s &&
                            b.start({
                                scrollPosition: s,
                                immediate: t,
                                reset: n,
                                config: c.animationConfig,
                                from: { scrollPosition: a(r, p.scrollPosition.get()) },
                                onChange: () => {
                                    o && g();
                                },
                            });
                    },
                    [p.scrollPosition, b, c.animationConfig, g],
                ),
                y = l.useCallback(
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
                            })(n, c.step),
                            o = w(t, e, r);
                        x(o);
                    },
                    [x, w, c.step],
                ),
                E = l.useCallback(
                    function (e) {
                        u ||
                            (0 !== e.deltaY && y(r(e)),
                            f.current && _.trigger('mouseWheel', e, p.scrollPosition, t(f.current)));
                    },
                    [p.scrollPosition, y, _, u],
                ),
                C = l.useCallback(
                    function () {
                        const e = f.current;
                        e && (x(a(e, p.scrollPosition.goal), { immediate: !0 }), _.trigger('resizeHandled'));
                    },
                    [x, p.scrollPosition.goal, _],
                );
            Et(m, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = s(t);
                h.current.wrapper !== n && C();
            });
            const R = ht(function () {
                    const t = f.current;
                    if (!t) return;
                    const n = e(t),
                        r = m.current ? s(m.current) : 0;
                    if (h.current.container !== n || h.current.wrapper !== r) {
                        const e = a(t, p.scrollPosition.goal);
                        (e !== p.scrollPosition.goal && x(e, { immediate: !0 }),
                            (h.current.container = n),
                            (h.current.wrapper = r),
                            _.trigger('recalculateContent'));
                    }
                }),
                S = Rt();
            l.useEffect(() => {
                return (
                    (e = window),
                    (t = 'resize'),
                    (n = () => S.run(C)),
                    e.addEventListener(t, n, r),
                    () => e.removeEventListener(t, n, r)
                );
                var e, t, n, r;
            }, [C, S]);
            return l.useMemo(
                () => ({
                    getWrapperSize: () => (m.current ? s(m.current) : void 0),
                    getContainerSize: () => (f.current ? e(f.current) : void 0),
                    getBounds: () =>
                        f.current ? t(f.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: c.step.clampedArrowStepTimeout,
                    settings: c,
                    clampPosition: a,
                    handleMouseWheel: E,
                    applyScroll: x,
                    applyStepTo: y,
                    contentRef: f,
                    wrapperRef: m,
                    scrollPosition: b,
                    animationScroll: p,
                    recalculateContent: R,
                    disabled: u,
                    setDisabled: d,
                    events: { on: _.on, off: _.off },
                }),
                [c, E, x, y, b, p, R, u, d, _.on, _.off],
            );
        };
    },
    Xn = l.createContext(void 0);
function Yn() {
    const e = l.useContext(Xn);
    if (!e) throw new Error('useHorizontalScroll must be used within a Scroll.Horizontal.Base component');
    return e;
}
const Qn = qn({
        getBounds: (e) => {
            var t;
            return [0, e.offsetWidth - ((null == (t = e.parentElement) ? void 0 : t.offsetWidth) ?? 0)];
        },
        getContainerSize: (e) => e.offsetWidth,
        getWrapperSize: (e) => e.offsetWidth,
        setScrollPosition: (e, t) => {
            e.style.transform = `translateX(-${0 | (t.value.scrollPosition ?? 0)}px)`;
        },
        getDirection: (e) => (e.deltaY > 1 ? Wn.Next : Wn.Prev),
        triggerMouseMoveOnUpdate: !0,
    }),
    Kn = { horizontal: 'horizontal', vertical: 'vertical' },
    Jn = {
        background: 'Thumb_background_7f3dd6ac',
        border: 'Thumb_border_5749138b',
        innerBorder: 'Thumb_innerBorder_42bafd18',
        icon: 'Thumb_icon_dca8bf26',
        base: 'Thumb_6ff3e706',
        base__vertical: 'Thumb_base__vertical_55a67c91',
        base__horizontal: 'Thumb_base__horizontal_27ca7ace',
        base__active: 'Thumb_base__active_830942bb',
    },
    er = 'forwardDisabled',
    tr = 'backwardDisabled';
function nr(e) {
    const t = l.useRef(null),
        [n, r] = l.useState(!1),
        s = ht(function () {
            const n = t.current,
                r = e.trackRef.current,
                s = e.api.getWrapperSize(),
                o = e.api.getContainerSize();
            if (!(s && o && n && r)) return;
            const a = Math.min(1, s / o),
                i = 'horizontal' === e.direction ? 'width' : 'height';
            return ((n.style[i] = `${e.calculateSize(r, a)}px`), (n.style.display = 'flex'), a);
        }),
        [o, a] = v(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: I.easeInCubic,
            config: { duration: 200 },
        }));
    l.useEffect(() => {
        n || e.dragging
            ? a.start({
                  to: e.styles.opened,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.add(Jn.base__active);
                  },
              })
            : a.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.remove(Jn.base__active);
                  },
              });
    }, [n, e.dragging, e.styles.closed, e.styles.opened, a]);
    const i = ht(function () {
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
                f = pe(0, 1, u / (c - l)),
                m = e.calculateSize(r, d),
                h = (('horizontal' === e.direction ? r.offsetWidth : r.offsetHeight) - m) * f || 0,
                _ = Math.round(2 * (2 * f - 1));
            (s.style.setProperty('--thumbOffset', `${h}px`),
                null == (n = e.onUpdate) || n.call(e, { thumbSize: m, thumbOffset: h, newBouncingCorrection: _ }));
            const g = 0 === h || e.isBoundThumb(h) ? 0 : _;
            return (
                a.start({
                    to: { '--bouncingCorrection': `${g}px` },
                    ...(0 === g ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                h
            );
        }),
        d = Rt(),
        f = ht(function () {
            s();
            const t = i();
            'number' == typeof t &&
                (function (e, t) {
                    if (!e.trackRef.current || !e.thumbRef.current) return;
                    const n = e.trackRef.current.parentNode;
                    if (n instanceof HTMLElement) {
                        if (0 === t) return (n.classList.add(tr), void n.classList.remove(er));
                        if (e.isBoundThumb(t)) return (n.classList.remove(tr), void n.classList.add(er));
                        (n.classList.remove(tr), n.classList.remove(er));
                    }
                })(e, t);
        });
    l.useEffect(() => d.run(f));
    const { api: m } = e;
    return (
        l.useEffect(() => {
            function e() {
                d.run(f);
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
        }, [m, d, f]),
        c.jsxs(b.div, {
            ref: nn([t, e.thumbRef]),
            className: u(Jn.base, Jn[`base__${e.direction}`], e.className),
            style: o,
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: [
                c.jsx('div', { className: Jn.background }),
                c.jsx('div', { className: Jn.border }),
                c.jsx('div', { className: Jn.innerBorder }),
                c.jsx('div', { className: Jn.icon }),
            ],
        })
    );
}
const rr = { pending: !1, offset: 0 };
function sr(e, t, n, r, s) {
    const [o, a] = l.useState(rr),
        i = ht(t),
        c = l.useCallback(
            (t) => {
                (a(t), e.current && i({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [i, e],
        );
    return (
        l.useEffect(() => {
            if (!o.pending) return;
            const t = V.move(function ([t]) {
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
                a = V.up(() => {
                    c(rr);
                });
            return () => {
                (t(), a());
            };
        }, [n, o.offset, o.pending, i, c, e, r, o, s]),
        c
    );
}
const or = 'disable',
    ar = 'scroll-active';
function ir({ api: e, baseRef: t }) {
    const n = Rt(),
        r = ht(function () {
            const n = e.getWrapperSize(),
                r = e.getContainerSize();
            if (null === t.current || void 0 === r || void 0 === n) return;
            1 === Math.min(1, n / r || 1) ? t.current.classList.remove(ar) : t.current.classList.add(ar);
        });
    (l.useEffect(() => n.run(r)),
        l.useEffect(() => {
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
function lr(e, t) {
    const n = e.getBoundingClientRect(),
        r = t === Kn.horizontal ? n.x : n.y;
    return { start: r, end: t === Kn.horizontal ? r + n.width : r + n.height };
}
function cr(e, t, n, r, s, o, a) {
    const i = zt(),
        c = s.stepTimeout || 100,
        [u, d] = (function (e, t, n = []) {
            const r = l.useRef(0),
                s = l.useCallback(() => {
                    (window.clearInterval(r.current), (r.current = 0));
                }, n || []);
            l.useEffect(() => s, [s]);
            const o = (n ?? []).concat([t]);
            return [
                l.useCallback((n) => {
                    (0 !== r.current && s(), (r.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                }, o),
                s,
            ];
        })((e) => s.applyStepTo(e), c, [s]);
    l.useEffect(
        () => (document.addEventListener('mouseup', d, !0), () => document.removeEventListener('mouseup', d, !0)),
        [d],
    );
    const f = l.useCallback(
            (e) => {
                e.target.classList.contains(or) ||
                    (i.play('click', { target: 'Scroll:Back', original: e }), u(Wn.Next));
            },
            [u, i],
        ),
        m = l.useCallback(
            (e) => {
                e.target.classList.contains(or) ||
                    (i.play('click', { target: 'Scroll:Forward', original: e }), u(Wn.Prev));
            },
            [u, i],
        ),
        h = l.useCallback(
            (l) => {
                const c = e.current,
                    u = t.current,
                    d = n.current,
                    h = r.current;
                if (!(c && u && d && h && 0 === l.button)) return;
                const _ = (function (e, t, n, r, s, o) {
                        return {
                            occurredEvent: o === Kn.horizontal ? e.screenX : e.screenY,
                            bar: lr(t, o),
                            thumb: lr(n, o),
                            backButton: lr(r, o),
                            forwardButton: lr(s, o),
                        };
                    })(l, c, u, d, h, a),
                    g = _.thumb.start <= _.occurredEvent && _.occurredEvent <= _.thumb.end,
                    p =
                        (_.backButton.start <= _.occurredEvent && _.occurredEvent <= _.backButton.end) ||
                        (_.forwardButton.start <= _.occurredEvent && _.occurredEvent <= _.forwardButton.end);
                if (g) o({ pending: !0, offset: _.occurredEvent - _.thumb.start });
                else if (p) {
                    ((_.occurredEvent > _.thumb.start ? Wn.Prev : Wn.Next) === Wn.Next ? f : m)(l);
                } else {
                    const e = _.occurredEvent - _.bar.start,
                        t = _.thumb.end - _.thumb.start,
                        n = _.bar.end - _.bar.start,
                        r = s.getContainerSize();
                    if ('number' != typeof r || Number.isNaN(r)) return console.error('Incorrect container size');
                    const o = ((e - t / 2) / n) * r;
                    s.applyScroll(o);
                }
                i.play('click', { target: 'Scroll:' + (g ? 'thumb' : p ? 'button' : ''), original: l });
            },
            [e, t, n, r, i, a, o, f, m, s],
        ),
        _ = l.useCallback(
            (e) => {
                e.target.classList.contains(or) || i.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [i],
        );
    return l.useMemo(
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
const ur = 'HorizontalBar_rail_37858d8f',
    dr = 'HorizontalBar_4df27ac3',
    fr = 'HorizontalBar_track_649dc296',
    mr = 'HorizontalBar_rail__left_1a906b4e',
    hr = 'HorizontalBar_rail__right_cd24364e',
    _r = 'HorizontalBar_button__right_e8f0aa2d',
    gr = 'HorizontalBar_button__left_da330e13',
    pr = 'HorizontalBar_button_cbabd91',
    vr = { closed: { height: '3rem', top: '4rem' }, opened: { height: '11rem', top: '0rem' } },
    br = (e, t) => Math.max(ue(13), e.offsetWidth * t),
    wr = l.memo(function ({ classNames: e = {}, onDrag: t = ve }) {
        const n = l.useRef(null),
            r = l.useRef(null),
            s = l.useRef(null),
            o = l.useRef(null),
            a = l.useRef(null),
            i = l.useRef(null),
            d = l.useRef(null),
            [f, m] = l.useState(!1),
            { api: h } = Yn();
        ir({ baseRef: n, api: h });
        const _ = ht((e, t, { parent: n }) => (e.screenX - t.offset - n.getBoundingClientRect().x) / n.offsetWidth),
            g = ht((e) => e - (o.current.offsetWidth - a.current.offsetWidth) >= -0.5),
            p = l.useCallback((e) => ('dragStart' === e.type ? m(!0) : 'dragEnd' === e.type && m(!1), t(e)), [t]),
            v = sr(a, p, h, o, _),
            b = ht(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
                const r = o.current,
                    s = i.current,
                    a = d.current;
                if (!r || !s || !a) return;
                const l = ue(5);
                ((s.style.width = `${t - l + n}px`), (a.style.width = r.offsetWidth - e - t - l - n + 'px'));
            }),
            { handleMouseEnter: w, handleMouseDownTrack: x } = cr(n, a, s, r, h, v, Kn.horizontal);
        return c.jsxs('div', {
            className: u(dr, e.base),
            ref: n,
            onWheel: h.handleMouseWheel,
            onMouseDown: x,
            onMouseEnter: w,
            children: [
                c.jsx('div', { ref: r, className: u(pr, gr, e.leftButton) }),
                c.jsxs('div', {
                    ref: o,
                    className: u(fr, e.track),
                    children: [
                        c.jsx('div', { ref: i, className: u(ur, mr, e.leftRail) }),
                        c.jsx(nr, {
                            dragging: f,
                            api: h,
                            calculateOffset: _,
                            calculateSize: br,
                            direction: 'horizontal',
                            isBoundThumb: g,
                            railAfterRef: i,
                            railBeforeRef: d,
                            styles: vr,
                            onUpdate: b,
                            thumbRef: a,
                            trackRef: o,
                        }),
                        c.jsx('div', { ref: d, className: u(ur, hr, e.rightRail) }),
                    ],
                }),
                c.jsx('div', { ref: s, className: u(pr, _r, e.rightButton) }),
            ],
        });
    }),
    xr = {
        base: 'HorizontalScroll_5b201d2b',
        wrapper: 'HorizontalScroll_wrapper_abec8dee',
        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_a5c0f45',
    },
    yr = ({
        children: e,
        className: t,
        barClassNames: n,
        areaClassName: r,
        classNames: s,
        scrollClassName: o,
        onDrag: a,
    }) => {
        const { api: i } = Yn(),
            d = l.useMemo(() => {
                const e = n || {};
                return { ...e, base: u(xr.base, e.base) };
            }, [n]);
        return c.jsxs('div', {
            className: u(xr.defaultScroll, t),
            onWheel: i.handleMouseWheel,
            children: [
                c.jsx('div', {
                    className: u(xr.defaultScrollArea, r),
                    children: c.jsx(Er, { className: o, classNames: s, children: e }),
                }),
                c.jsx(wr, { onDrag: a, classNames: d }),
            ],
        });
    };
function Er({ className: e, classNames: t, children: n }) {
    const { api: r } = Yn();
    return c.jsx('div', {
        className: u(xr.base, e),
        children: c.jsx('div', {
            className: u(xr.wrapper, null == t ? void 0 : t.wrapper),
            onWheel: r.handleMouseWheel,
            ref: r.wrapperRef,
            children: c.jsx('div', {
                className: u(xr.content, null == t ? void 0 : t.content),
                ref: r.contentRef,
                children: n,
            }),
        }),
    });
}
((Er.Bar = wr), (Er.Default = yr));
const Cr = { horizontal: 'horizontal', vertical: 'vertical' };
function Rr(e, t) {
    switch (t) {
        case Cr.horizontal:
            return e.screenX;
        case Cr.vertical:
            return e.screenY;
        default:
            De(!1, `Such drag direction ${t} is not supported`);
    }
}
const Sr = { type: 'idle' };
function Lr(e, t, n, r) {
    const {
            contentRef: s,
            wrapperRef: o,
            scrollPosition: a,
            clampPosition: i,
            animationScroll: c,
            events: u,
            disabled: d,
        } = e,
        [f, m] = l.useState(Sr),
        [h, _] = l.useState(0),
        { gapBeforeStart: g } = r ?? {},
        p = Rt(),
        v = ht(() => {
            p.run(() => {
                const t = e.contentRef.current,
                    n = e.getWrapperSize(),
                    r = e.getContainerSize();
                t && n && r && !d && (t.style.cursor = r <= n ? 'auto' : 'dragging' === f.type ? 'move' : 'grab');
            });
        });
    return (
        l.useEffect(() => {
            v();
        }, [f.type, v]),
        yt(() => {
            v();
        }, [v]),
        l.useEffect(() => {
            if ('pending' !== f.type) return;
            const e = s.current,
                n = o.current;
            if (null === e || null === n) return;
            const r = V.move(([e]) => {
                    const n = Rr(e, t);
                    (void 0 === g || Math.abs(h - n) > g) &&
                        m({ type: 'dragging', positionFrom: n, previousScrollPosition: c.scrollPosition.get() });
                }),
                a = V.up(() => m({ type: 'scrollComplete' }));
            return () => {
                (r(), a());
            };
        }, [c.scrollPosition, s, h, t, f, g, o]),
        l.useEffect(() => {
            if ('dragging' !== f.type) return;
            const e = V.move(([e, r]) => {
                const l = s.current,
                    u = o.current;
                if ('outside' === r) return void m({ type: 'scrollComplete' });
                const d = (function (e, t) {
                    switch (t) {
                        case Cr.horizontal:
                            return e.clientX;
                        case Cr.vertical:
                            return e.clientY;
                        default:
                            De(!1, `Such drag direction ${t} is not supported`);
                    }
                })(e, t);
                if (null === l || null === u || ('inside' === r && d < 0)) return;
                const h = u.offsetLeft,
                    _ = 'inside' === r ? d : d - h,
                    g = f.positionFrom - _,
                    p = f.previousScrollPosition + g;
                a.start({ scrollPosition: i(l, p), from: { scrollPosition: c.scrollPosition.get() }, ...n });
            });
            const r = V.up(function () {
                m({ type: 'scrollComplete' });
            });
            return () => {
                (e(), r());
            };
        }, [c.scrollPosition, i, s, f, a, o, n, t]),
        l.useEffect(() => {
            if ('scrollComplete' !== f.type) return;
            const e = () => {
                m(Sr);
            };
            return (e(), u.on('rest', e), () => u.off('rest', e));
        }, [c.scrollPosition, f.type, u]),
        l.useEffect(() => {
            if (d) return;
            const e = s.current;
            if (!e) return;
            const n = (e) => {
                if (e.button !== Ue) return;
                const n = Rr(e, t);
                (_(n),
                    m(
                        void 0 === g || g <= 0
                            ? { type: 'dragging', positionFrom: n, previousScrollPosition: c.scrollPosition.get() }
                            : { type: 'pending' },
                    ));
            };
            return (e.addEventListener('mousedown', n), () => e.removeEventListener('mousedown', n));
        }, [c.scrollPosition, s, d, t, g]),
        f
    );
}
function Tr({ settings: e, children: t }) {
    const n = Qn({ settings: e }),
        r = l.useMemo(() => ({ api: n }), [n]);
    return c.jsx(Xn.Provider, { value: r, children: t });
}
const Nr = l.createContext(void 0);
function Pr() {
    const e = l.useContext(Nr);
    if (!e) throw new Error('useVerticalScroll must be used within a Scroll.Vertical.Base component');
    return e;
}
const Br = qn({
        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
        getContainerSize: (e) => e.scrollHeight,
        getWrapperSize: (e) => e.offsetHeight,
        setScrollPosition: (e, t) => {
            e.scrollTop = Math.trunc(t.value.scrollPosition ?? 0);
        },
        getDirection: (e) => (e.deltaY > 1 ? Wn.Next : Wn.Prev),
    }),
    Mr = 'VerticalBar_rail_3d663c9',
    Dr = 'VerticalBar_7187fa00',
    kr = 'VerticalBar_track_ff482708',
    Fr = 'VerticalBar_rail__top_ee531f43',
    Ir = 'VerticalBar_rail__bottom_3eaa33b1',
    Or = 'VerticalBar_button__bottom_6880f123',
    $r = 'VerticalBar_button__top_b8383775',
    Ar = 'VerticalBar_button_7b0e4aca',
    jr = { closed: { width: '3rem', left: '3rem' }, opened: { width: '9rem', left: '0rem' } },
    zr = (e, t) => Math.max(ue(13), e.offsetHeight * t),
    Hr = l.memo(function ({ classNames: e = {}, onDrag: t = ve }) {
        const n = l.useRef(null),
            r = l.useRef(null),
            s = l.useRef(null),
            o = l.useRef(null),
            a = l.useRef(null),
            i = l.useRef(null),
            d = l.useRef(null),
            [f, m] = l.useState(!1),
            { api: h } = Pr();
        ir({ baseRef: n, api: h });
        const _ = ht((e) => e - (o.current.offsetHeight - a.current.offsetHeight) >= -0.5),
            g = ht((e, t, { parent: n }) => (e.screenY - t.offset - n.getBoundingClientRect().y) / n.offsetHeight),
            p = l.useCallback((e) => ('dragStart' === e.type ? m(!0) : 'dragEnd' === e.type && m(!1), t(e)), [t]),
            v = sr(a, p, h, o, g),
            b = ht(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
                const r = o.current,
                    s = i.current,
                    a = d.current;
                if (!r || !s || !a) return;
                const l = ue(5);
                ((s.style.height = `${t - l + n}px`), (a.style.height = r.offsetHeight - e - t - l - n + 'px'));
            }),
            { handleMouseEnter: w, handleMouseDownTrack: x } = cr(n, a, r, s, h, v, Kn.vertical);
        return c.jsxs('div', {
            className: u(Dr, e.base),
            ref: n,
            onWheel: h.handleMouseWheel,
            onMouseDown: x,
            onMouseEnter: w,
            children: [
                c.jsx('div', { ref: r, className: u(Ar, $r, e.topButton) }),
                c.jsxs('div', {
                    ref: o,
                    className: u(kr, e.track),
                    children: [
                        c.jsx('div', { ref: i, className: u(Mr, Fr, e.topRail) }),
                        c.jsx(nr, {
                            dragging: f,
                            api: h,
                            calculateOffset: g,
                            calculateSize: zr,
                            direction: 'vertical',
                            isBoundThumb: _,
                            railAfterRef: i,
                            railBeforeRef: d,
                            styles: jr,
                            onUpdate: b,
                            thumbRef: a,
                            trackRef: o,
                        }),
                        c.jsx('div', { ref: d, className: u(Mr, Ir, e.bottomRail) }),
                    ],
                }),
                c.jsx('div', { ref: s, className: u(Ar, Or, e.bottomButton) }),
            ],
        });
    }),
    Ur = {
        content: 'VerticalScroll_content_62cb6120',
        defaultScroll: 'VerticalScroll_defaultScroll_c69fa70e',
        area: 'VerticalScroll_area_a3c0086a',
    },
    Vr = ({
        children: e,
        className: t,
        barClassNames: n,
        areaClassName: r,
        scrollClassName: s,
        scrollClassNames: o,
        onDrag: a,
    }) => {
        const { api: i } = Pr(),
            d = l.useMemo(() => {
                const e = n || {};
                return { ...e, base: u(Ur.base, e.base) };
            }, [n]);
        return c.jsxs('div', {
            className: u(Ur.defaultScroll, t),
            onWheel: i.handleMouseWheel,
            children: [
                c.jsx('div', {
                    className: u(Ur.area, r),
                    children: c.jsx(Gr, { className: s, classNames: o, children: e }),
                }),
                c.jsx(Hr, { onDrag: a, classNames: d }),
            ],
        });
    },
    Gr = ({ className: e, classNames: t, children: n, ...r }) => {
        const { api: s } = Pr();
        return (
            l.useEffect(() => Me(() => Me(s.recalculateContent))),
            c.jsx('div', {
                className: u(Ur.base, null == t ? void 0 : t.wrapper, e),
                ref: s.wrapperRef,
                onWheel: s.handleMouseWheel,
                children: c.jsx('div', {
                    ...r,
                    className: u(Ur.content, null == t ? void 0 : t.content),
                    ref: s.contentRef,
                    children: n,
                }),
            })
        );
    };
function Wr({ children: e }) {
    const t = Br(),
        n = l.useMemo(() => ({ api: t }), [t]);
    return c.jsx(Nr.Provider, { value: n, children: e });
}
Gr.Default = Vr;
var Zr = ((e) => (
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
    ))(Zr || {}),
    qr = ((e) => (
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
    ))(qr || {}),
    Xr = ((e) => (
        (e.MULTI = 'multi'),
        (e.CURRENCY = 'currency'),
        (e.PREMIUM_PLUS = 'premium_plus'),
        (e.NUMBER = 'number'),
        (e.STRING = 'string'),
        e
    ))(Xr || {}),
    Yr = ((e) => (
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
    ))(Yr || {}),
    Qr = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(Qr || {}),
    Kr = ((e) => (
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
    ))(Kr || {});
const Jr = [
        Zr.Items,
        Zr.Equipment,
        Zr.Xp,
        Zr.XpFactor,
        Zr.Blueprints,
        Zr.BlueprintsAny,
        Zr.Goodies,
        Zr.Berths,
        Zr.Slots,
        Zr.Tokens,
        Zr.CrewSkins,
        Zr.CrewBooks,
        Zr.Customizations,
        Zr.CreditsFactor,
        Zr.TankmenXp,
        Zr.TankmenXpFactor,
        Zr.FreeXpFactor,
        Zr.BattleToken,
        Zr.LootBox,
        Zr.PremiumUniversal,
        Zr.NaturalCover,
        Zr.BpCoin,
        Zr.BattlePassSelectToken,
        Zr.BattlaPassFinalAchievement,
        Zr.BattleBadge,
        Zr.BonusX5,
        Zr.CrewBonusX3,
        Zr.EpicSelectToken,
        Zr.Comp7TokenWeeklyReward,
        Zr.DeluxeGift,
        Zr.BattleBoosterGift,
        Zr.OptionalDevice,
    ],
    es = [Zr.Gold, Zr.Credits, Zr.Crystal, Zr.FreeXp],
    ts = [Zr.BattlePassPoints, Zr.EquipCoin],
    ns = [Zr.PremiumPlus, Zr.Premium],
    rs = (e) =>
        Jr.includes(e)
            ? Xr.MULTI
            : es.includes(e)
              ? Xr.CURRENCY
              : ts.includes(e)
                ? Xr.NUMBER
                : ns.includes(e)
                  ? Xr.PREMIUM_PLUS
                  : Xr.STRING,
    ss = ['engravings', 'backgrounds'],
    os = ['engraving', 'background'],
    as = (e, t = qr.Small) => {
        const { name: n, type: r, value: s, icon: o, item: a, dogTagType: i } = e,
            l = t === qr.S24x24 ? qr.Small : t,
            c = ((e) => {
                switch (e) {
                    case qr.S600x450:
                        return 'c_600x450';
                    case qr.S400x300:
                        return 'c_400x300';
                    case qr.S296x222:
                        return 'c_296x222';
                    case qr.S232x174:
                        return 'c_232x174';
                    case qr.Big:
                        return 'c_80x80';
                    case qr.Small:
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
                    const r = ss[e];
                    if (r) {
                        const s = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                            o = s.$dyn(n);
                        return !o && os[e] ? `${s.$dyn(os[e])}` : `${o}`;
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
    is = (e, t) => ({ args: e, contentId: t }),
    ls = [qr.Small, qr.Big],
    cs = 'lightTank',
    us = 'mediumTank',
    ds = 'heavyTank',
    fs = 'SPG',
    ms = 'AT-SPG',
    hs = l.createContext(null);
function _s() {
    const e = l.useContext(hs);
    return (De(null !== e, 'You can use tabs hooks only with Tabs component'), e);
}
const gs = { primary: 'primary', custom: 'custom' },
    ps = { large: 'large', medium: 'medium', small: 'small' },
    vs = 'HorizontalTabs_outerBorderImage_8085e49e',
    bs = 'HorizontalTabs_mainBorderImage_558d1c3f',
    ws = 'HorizontalTabs_outerBorder_3255d0c5',
    xs = 'HorizontalTabs_mainBorder_61e34c2c',
    ys = 'HorizontalTabs_content_1ae3c4bd',
    Es = jn('Tabs', 'HorizontalTabs_69e3c6f3', {
        variants: {
            size: {
                [ps.large]: 'HorizontalTabs_base__size-large_12c75e24',
                [ps.medium]: 'HorizontalTabs_base__size-medium_afc0934f',
                [ps.small]: 'HorizontalTabs_base__size-small_75fae891',
            },
            theme: { [gs.primary]: 'HorizontalTabs_base__theme-primary_5e3af03e', [gs.custom]: void 0 },
        },
    }),
    Cs = l.forwardRef(function ({ children: e, classNames: t, ...n }, r) {
        const s = _s();
        return c.jsx(Es, {
            ...n,
            ref: r,
            className: u(n.className, null == t ? void 0 : t.base),
            size: s.size,
            theme: s.theme,
            children: c.jsxs('div', {
                className: u(ws, null == t ? void 0 : t.outerBorder),
                children: [
                    c.jsx('div', { className: u(vs, null == t ? void 0 : t.outerBorderImage) }),
                    c.jsxs('div', {
                        className: u(xs, null == t ? void 0 : t.mainBorder),
                        children: [
                            c.jsx('div', { className: u(bs, null == t ? void 0 : t.mainBorderImage) }),
                            c.jsx('div', { className: u(ys, null == t ? void 0 : t.content), children: e }),
                        ],
                    }),
                ],
            }),
        });
    }),
    Rs = 'Tab_border_a63aeb3f',
    Ss = 'Tab_background_4c9b3eb9',
    Ls = 'Tab_backgroundPattern_417be4b5',
    Ts = 'Tab_innerBorderImage_adadda5f',
    Ns = 'Tab_content_b3f6c22b',
    Ps = jn('Tab', 'Tab_f59c2b00', {
        variants: {
            size: {
                [ps.large]: 'Tab_base__size-large_0',
                [ps.medium]: 'Tab_base__size-medium_0',
                [ps.small]: 'Tab_base__size-small_0',
            },
            theme: { [gs.primary]: 'Tab_base__theme-primary_90fd5ee', [gs.custom]: void 0 },
            state: { active: 'Tab_base__active_0', inactive: 'Tab_base__inactive_0' },
        },
        defaultVariants: { size: ps.medium, theme: gs.primary },
    }),
    Bs = l.forwardRef(function (
        { theme: e, size: t, tabId: n, active: r, children: s, onClick: o, onMouseEnter: a, ...i },
        l,
    ) {
        const u = zt();
        return c.jsx(Ps, {
            ...i,
            ref: l,
            theme: e,
            size: t,
            state: r === n ? 'active' : 'inactive',
            onMouseEnter: function (e) {
                (r !== n && u.play('mouse-enter', { target: Ps.displayName, original: e }), null == a || a(e));
            },
            onClick: function (e) {
                (r !== n && u.play('click', { target: Ps.displayName, original: e }), null == o || o(e));
            },
            children: s,
        });
    });
function Ms({ active: e, theme: t, size: n, children: r, onActiveChange: s }) {
    const [o, a] = l.useState(e),
        i = l.useRef(e),
        u = l.useMemo(() => ({ active: o, theme: t, size: n, change: a }), [o, n, t]);
    return (
        l.useLayoutEffect(() => {
            a(e);
        }, [e]),
        l.useEffect(() => {
            i.current !== o && ((i.current = o), null == s || s(o));
        }, [o, s]),
        c.jsx(hs.Provider, { value: u, children: r })
    );
}
((Ms.Switcher = Cs),
    (Ms.Tab = function ({ tabId: e, classNames: t, className: n, children: r, ...s }) {
        const o = _s();
        return c.jsxs(Bs, {
            'data-test-id': `${e}Tab`,
            ...s,
            tabId: e,
            theme: o.theme,
            size: o.size,
            active: o.active,
            className: u(null == t ? void 0 : t.base, n),
            onClick: (t) => {
                var n;
                (null == (n = s.onClick) || n.call(s, t), o.change(e));
            },
            children: [
                c.jsx('div', { className: u(Ss, null == t ? void 0 : t.background) }),
                c.jsx('div', { className: u(Ls, null == t ? void 0 : t.backgroundPattern) }),
                c.jsx('div', { className: u(Rs, null == t ? void 0 : t.border) }),
                c.jsx('div', { className: u(Ts, null == t ? void 0 : t.borderImage) }),
                c.jsx('div', { className: u(Ns, null == t ? void 0 : t.content), children: r }),
            ],
        });
    }),
    (Ms.Content = function ({ children: e, keyOverride: t }) {
        const n = _s();
        return c.jsx(l.Fragment, { children: e(n.active) }, t ?? n.active);
    }));
const Ds = l.createContext(void 0);
function ks() {
    const e = l.useContext(Ds);
    if (!e) throw new Error('Card context must be used only within its provider');
    return e;
}
function Fs({ selected: e, hover: t, disabled: n, multiple: r, status: s, children: o }) {
    const a = l.useMemo(() => ({ selected: e, hover: t, disabled: n, multiple: r, status: s }), [n, t, r, e, s]);
    return c.jsx(Ds.Provider, { value: a, children: o });
}
const Is = l.createContext(null);
const Os = Is.Provider,
    $s = 'Content_ab8563af',
    As = 'Content_disabledOverlay_af87c441',
    js = 'Content_multipleCorner_151c26ee',
    zs = jn('Content', 'Content_8eaaf71a', {
        variants: {
            multiple: { true: 'Content_base__multiple_da09528a' },
            selected: { true: 'Content_base__selected_da09528a' },
            hover: { true: 'Content_base__hover_da09528a' },
            disabled: { true: 'Content_base__disabled_da09528a' },
        },
        compoundVariants: [{ hover: !0, selected: !0, className: 'Content_base__selectedHover_da09528a' }],
    }),
    Hs = ({ children: e, classNames: t }) => {
        const n = _.useRef(null),
            r = ks();
        return (
            _.useEffect(() => {
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
            c.jsxs(zs, {
                multiple: r.multiple,
                selected: r.selected,
                hover: r.hover,
                disabled: r.disabled,
                children: [
                    r.multiple && c.jsx('div', { className: js }),
                    c.jsxs('div', {
                        ref: n,
                        className: u($s, null == t ? void 0 : t.mainContainerContent),
                        children: [r.disabled && c.jsx('div', { className: As }), e],
                    }),
                ],
            })
        );
    },
    Us = {
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
    Vs = x.resolve('strings');
jn('Status', Us.base, {
    variants: { status: { done: Us.base__done, alert: Us.base__alert, locked: Us.base__locked } },
});
const Gs = ({ header: e, body: t }) => Boolean(e && t),
    Ws = ({ reason: e, classNames: t }) => {
        const n = l.useRef(null),
            [r, s] = _.useState(!1),
            o = `base__${ks().status}${r ? 'Small' : ''}`,
            a = _.useCallback(() => {
                var e;
                const t = null == (e = n.current) ? void 0 : e.getBoundingClientRect();
                t && s(t.width <= 100);
            }, [n]);
        Et(n, a);
        const i = e
                ? {
                      header: Vs.readOrEmpty(`tooltips.moduleFits.${e}.header`),
                      body: Vs.readOrEmpty(`tooltips.moduleFits.${e}.text`),
                  }
                : {},
            d = Mt(i);
        return c.jsxs('div', {
            className: u(Us.base, Us[o], null == t ? void 0 : t.wrapper),
            ref: n,
            children: [
                c.jsx('div', { className: Us.glowBig }),
                c.jsx('div', { className: Us.line }),
                c.jsx('div', { className: Us.shadow }),
                c.jsx('div', { className: Us.glowInner }),
                c.jsx('svg', {
                    width: '42',
                    height: '42',
                    viewBox: '0 0 42 42',
                    className: Us.blur,
                    children: c.jsx('g', { children: c.jsx('circle', { cx: '21', cy: '21', r: '3' }) }),
                }),
                c.jsx('div', { ...(Gs(i) && d), className: u(Us.icon, null == t ? void 0 : t.icon) }),
            ],
        });
    },
    Zs = 'Card_base__wrapped_c6eb8737',
    qs = 'Card_f7ddaa4a',
    Xs = 'Card_content_b6f6a22a',
    Ys = 'Card_centerBorder_8a0f28ae',
    Qs = jn('Card', 'Card_f0963ece', {
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
    Ks = l.forwardRef(function (
        {
            children: e,
            active: t,
            status: n,
            statusReason: r,
            disableMouse: s,
            onMouseOver: o,
            onMouseOut: a,
            soundTarget: i,
            disabled: d = !1,
            className: f,
            classNames: m,
            ...h
        },
        _,
    ) {
        const [g, p] = l.useState(!1),
            v = zt(),
            b = l.useContext(Is),
            w = s || d;
        return c.jsx(Qs, {
            ...h,
            ref: _,
            hover: g,
            disableMouse: s,
            active: t,
            className: u(qs, f, (null == b ? void 0 : b.enabled) && Zs),
            children: c.jsxs(Fs, {
                disabled: d,
                selected: h.selected ?? !1,
                multiple: h.multiple ?? !1,
                hover: g,
                status: n,
                children: [
                    c.jsx('div', {
                        className: u(Xs, null == m ? void 0 : m.content),
                        onClick: function (e) {
                            w || v.play('click', { target: i || 'react-ui:card', original: e });
                        },
                        onMouseEnter: function (e) {
                            w || v.play('mouse-enter', { target: i || 'react-ui:card', original: e });
                        },
                        onMouseOver: function (e) {
                            w || (p(!0), null == o || o(e));
                        },
                        onMouseOut: function (e) {
                            w || (p(!1), null == a || a(e));
                        },
                        children: c.jsx(Hs, { classNames: m, children: e }),
                    }),
                    c.jsx('div', { className: Ys }),
                    n && c.jsx(Ws, { reason: r, classNames: null == m ? void 0 : m.status }),
                ],
            }),
        });
    }),
    Js = 3,
    eo = 'none',
    to = 'contour',
    no = (e, t) => ({ x: e, y: t });
function ro(e) {
    let { x: t, y: n, width: r, height: s } = e;
    const o = no(t, n),
        a = no(t + r, n),
        i = no(t + r, n + s),
        l = no(t, n + s);
    return [
        [o, a],
        [a, i],
        [i, l],
        [l, o],
    ];
}
function so(e, t) {
    return (function (e) {
        if (0 === e.length) return [];
        const t = e[0],
            n = { x: t[0].x - Js, y: t[0].y - Js },
            r = [n];
        let s = t[1],
            o = n,
            a = n,
            i = -Js,
            l = -Js;
        for (e.splice(0, 1); e.length > 0; ) {
            const t = e.findIndex((e) => e[0].x === s.x && e[0].y === s.y);
            if (-1 === t) break;
            const n = e[t],
                c = s;
            (s.x <= a.x ? (l = Js) : (l === Js && (o.y -= 2 * Js), (l = -Js)),
                s.y >= a.y ? (i = Js) : (i === Js && (o.x -= 2 * Js), (i = -Js)),
                (s = { x: s.x + i, y: s.y + l }),
                r.push(s),
                (a = c),
                (o = s),
                (s = n[1]),
                e.splice(t, 1));
        }
        return (l === Js && i === Js && (o = { ...o, x: o.x - 2 * Js }), r.push(n), r);
    })(
        (function (e) {
            const t = e.flatMap(ro),
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
class oo {
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
const ao = 'LinesBuilder_lineInner_a52dc157',
    io = 'LinesBuilder_lineOuter_c57514b2';
const lo = l.memo(({ containerRef: e, generation: t, border: n, cardSelector: r }) => {
        const [s, o] = l.useState([]),
            a = ht(() => {
                const t = e.current;
                if (!t) return;
                const s = t.getBoundingClientRect(),
                    a = (function (e, t, n) {
                        const r = [],
                            s = new oo(t);
                        for (let o = 0; o < e.length; o++) {
                            const t = e[o],
                                a = t.getBoundingClientRect();
                            if (0 === a.width || 0 === a.height)
                                return void console.debug(
                                    `Card rect has zero size by one side: ${a.width}x${a.height} (${t.getAttribute('data-test-id')}) `,
                                );
                            (n !== eo && r.push({ x: a.x, y: a.y, width: a.width, height: a.height }),
                                s.addLine(a.x, a.y, a.width, 1, ao),
                                s.addLine(a.x, a.y + a.height, a.width, 1, ao),
                                s.addLine(a.x, a.y, 1, a.height, ao),
                                s.addLine(a.x + a.width, a.y, 1, a.height + 1, ao));
                        }
                        if (n !== eo) {
                            const e = so(r);
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
                                        io,
                                    );
                                }
                                t = e;
                            });
                        }
                        return s.run();
                    })(t.querySelectorAll(`.${r || qs}`), s, n);
                o(a ?? []);
            });
        return (
            l.useEffect(a, [a, t]),
            c.jsx(c.Fragment, {
                children: s.map((e, t) =>
                    c.jsx(
                        'div',
                        { className: e.className, style: { left: e.x, top: e.y, width: e.width, height: e.height } },
                        t,
                    ),
                ),
            })
        );
    }),
    co = 'CardsWrapper_3b6cc4f6',
    uo = 'CardsWrapper_card_c7fc9ee7',
    fo = 'CardsWrapper_centerBorderCommon_b4b27a11',
    mo = 'CardsWrapper_outerBorderCommon_f4887371',
    ho = jn('CardsWrapper', co);
l.forwardRef(function (
    { children: e, className: t, trashhold: n, border: r = to, enabled: s = !0, cardSelector: o, ...a },
    i,
) {
    const u = l.useRef([]),
        d = l.useRef(null),
        [f, m] = l.useState('');
    l.useImperativeHandle(i, () => d.current);
    const h = l.useCallback(
        (e) => {
            const t = d.current;
            if (!t) return;
            const n = t.querySelectorAll(`.${o || qs}`);
            if (n.length > 0) {
                const r = t.getBoundingClientRect(),
                    s = n.length;
                s !== u.current.length && (u.current = Array.from(n));
                const o = `${Math.round(r.width)}x${Math.round(r.height)}-${s}|${e}`;
                m(o);
            } else m('');
        },
        [o],
    );
    (l.useEffect(() => {
        h(n);
    }),
        Et(
            d,
            l.useCallback(() => h(), [h]),
        ));
    const _ = l.useMemo(() => ({ recalculate: h, enabled: s }), [h, s]);
    return c.jsx(ho, {
        ...a,
        ref: d,
        children: c.jsxs('div', {
            className: t,
            children: [
                c.jsx(Os, { value: _, children: e }),
                c.jsx(lo, { cardsRef: u, containerRef: d, border: r, generation: f, cardSelector: o }),
            ],
        }),
    });
});
const _o = l.forwardRef(({ className: e, classNames: t, ...n }, r) =>
        c.jsxs('div', {
            className: u(co, null == t ? void 0 : t.wrapper),
            children: [
                c.jsx('div', { className: fo }),
                c.jsx('div', { className: mo }),
                c.jsx(Ks, { className: u(uo, e, null == t ? void 0 : t.card), classNames: t, ...n, ref: r }),
            ],
        }),
    ),
    go = { done: 'done', locked: 'locked' },
    po = {
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
        image: 'Reward_image_810ec3a2',
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
        info: 'Reward_info_26d38c48',
        info__multi: 'Reward_info__multi_465d34bd',
        info__credits: 'Reward_info__credits_1643219',
        info__gold: 'Reward_info__gold_c751be5d',
        info__crystal: 'Reward_info__crystal_18ccfdd0',
        info__premiumTank: 'Reward_info__premiumTank_7862152',
        title: 'Reward_title_fbcf4b5',
        timer: 'Reward_timer_22ba7b8b',
    },
    vo = x.resolve('images'),
    bo = new Map([
        [qr.S24x24, qr.Small],
        [qr.S48x48, qr.Small],
    ]),
    wo = ({
        name: e,
        image: t,
        isPeriodic: n = !1,
        isFixedBoxSize: r = !0,
        size: s = qr.Big,
        special: o,
        value: a,
        valueType: i,
        title: l,
        style: d,
        className: f,
        classNames: m,
        tooltipArgs: h,
        periodicIconTooltipArgs: _,
    }) => {
        const g = bo.has(s) ? bo.get(s) : s,
            p = ((e, t) => {
                if (void 0 === t || !ls.includes(e)) return null;
                switch (t) {
                    case Yr.BATTLE_BOOSTER:
                    case Yr.BATTLE_BOOSTER_REPLACE:
                        return Qr.BATTLE_BOOSTER;
                }
            })(s, o),
            v = ((e) => {
                if (void 0 === e) return null;
                switch (e) {
                    case Yr.BATTLE_BOOSTER:
                        return Kr.BATTLE_BOOSTER;
                    case Yr.BATTLE_BOOSTER_REPLACE:
                        return Kr.BATTLE_BOOSTER_REPLACE;
                    case Yr.BUILT_IN_EQUIPMENT:
                        return Kr.BUILT_IN_EQUIPMENT;
                    case Yr.EQUIPMENT_PLUS:
                        return Kr.EQUIPMENT_PLUS;
                    case Yr.EQUIPMENT_TROPHY_BASIC:
                        return Kr.EQUIPMENT_TROPHY_BASIC;
                    case Yr.EQUIPMENT_TROPHY_UPGRADED:
                        return Kr.EQUIPMENT_TROPHY_UPGRADED;
                    case Yr.EQUIPMENT_MODERNIZED_UPGRADED_1:
                        return Kr.EQUIPMENT_MODERNIZED_UPGRADED_1;
                    case Yr.EQUIPMENT_MODERNIZED_UPGRADED_2:
                        return Kr.EQUIPMENT_MODERNIZED_UPGRADED_2;
                    case Yr.EQUIPMENT_MODERNIZED_UPGRADED_3:
                        return Kr.EQUIPMENT_MODERNIZED_UPGRADED_3;
                    case Yr.PROGRESSION_STYLE_UPGRADED_1:
                        return Kr.PROGRESSION_STYLE_UPGRADED_1;
                    case Yr.PROGRESSION_STYLE_UPGRADED_2:
                        return Kr.PROGRESSION_STYLE_UPGRADED_2;
                    case Yr.PROGRESSION_STYLE_UPGRADED_3:
                        return Kr.PROGRESSION_STYLE_UPGRADED_3;
                    case Yr.PROGRESSION_STYLE_UPGRADED_4:
                        return Kr.PROGRESSION_STYLE_UPGRADED_4;
                    case Yr.PROGRESSION_STYLE_UPGRADED_5:
                        return Kr.PROGRESSION_STYLE_UPGRADED_5;
                    case Yr.PROGRESSION_STYLE_UPGRADED_6:
                        return Kr.PROGRESSION_STYLE_UPGRADED_6;
                }
            })(o),
            b = ((e, t) => {
                const n = x.resolve('intl');
                if (void 0 === e) return null;
                switch (t) {
                    case Xr.MULTI: {
                        const t = Number(e);
                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                    }
                    case Xr.CURRENCY:
                    case Xr.NUMBER:
                        return n.formatNumber(n.numberFormats[0] || 'integral', Number(e));
                    case Xr.PREMIUM_PLUS: {
                        const t = Number(e);
                        return isNaN(t) ? e : null;
                    }
                    default:
                        return e;
                }
            })(a, i),
            w = Bt({
                contentId: (null == h ? void 0 : h.contentId) ?? 0,
                args: null == h ? void 0 : h.args,
                resId: null == h ? void 0 : h.resId,
                decoratorId: null == h ? void 0 : h.decoratorId,
            }),
            y = Mt({ header: null == _ ? void 0 : _.header, body: null == _ ? void 0 : _.body });
        return c.jsxs('div', {
            className: u(po.base, po[`base__${s}`], !r && po.base__dynamicBox, f),
            style: d,
            ...w,
            children: [
                c.jsxs(c.Fragment, {
                    children: [
                        c.jsxs('div', {
                            className: u(
                                po.image,
                                r ? po.image__fixedBox : po[`image__${s}`],
                                null == m ? void 0 : m.image,
                            ),
                            children: [
                                p &&
                                    c.jsx('div', {
                                        className: u(po.highlight, null == m ? void 0 : m.highlight),
                                        style: {
                                            backgroundImage: `url(${vo.readOrEmpty(`quests.bonuses.${g}.${p}_highlight`)})`,
                                        },
                                    }),
                                t &&
                                    c.jsx('div', {
                                        className: u(po.icon, null == m ? void 0 : m.rewardIcon),
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                v &&
                                    c.jsx('div', {
                                        className: u(po.overlay, null == m ? void 0 : m.overlay),
                                        style: {
                                            backgroundImage: `url(${vo.readOrEmpty(`quests.bonuses.${g}.${v}_overlay`)})`,
                                        },
                                    }),
                            ],
                        }),
                        b &&
                            c.jsx('div', {
                                className: u(
                                    po.info,
                                    po[`info__${e}`],
                                    i === Xr.MULTI && po.info__multi,
                                    null == m ? void 0 : m.info,
                                ),
                                children: b,
                            }),
                        l && c.jsx('div', { className: po.title, children: l }),
                    ],
                }),
                n && c.jsx('div', { className: u(po.timer, null == m ? void 0 : m.periodicIcon), ...y }),
            ],
        });
    },
    xo = 'SceneWrapper_52fcfc1e',
    yo = 'SceneWrapper_base__down_4ece5089',
    Eo = 'SceneWrapper_base__moveSpaceDisabled_1b1cd939';
function Co({
    children: e,
    moveSpace: t,
    onMouseOver3dScene: n,
    onDragStateChange: r,
    moveSpaceEnabled: s = !0,
    className: o,
    ...a
}) {
    const [i, d] = l.useState(!1),
        [f, m] = l.useState(!1),
        [h, _] = l.useState({ x: 0, y: 0 }),
        g = l.useRef(null);
    (l.useEffect(() => {
        function e() {
            (d(!1), m(!1));
        }
        return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
    }, []),
        l.useEffect(
            () => () => {
                n({ isOver3dScene: !1 });
            },
            [n],
        ));
    const p = ht((e) => (null == r ? void 0 : r(e)));
    function v(e) {
        if (!g.current) return;
        const { left: t, right: n, top: r, bottom: s } = g.current.getBoundingClientRect();
        return !(e.clientX < t || e.clientY < r || e.clientX > n || e.clientY > s);
    }
    function b(e) {
        return 1 === e.buttons && v(e) && s;
    }
    return (
        l.useEffect(() => {
            p(i && f);
        }, [i, p, f]),
        c.jsx('div', {
            ...a,
            ref: g,
            className: u(xo, i && yo, !s && Eo, o),
            onMouseDown: function (e) {
                (e.preventDefault(), b(e) && (d(!0), m(!0), _({ x: e.clientX, y: e.clientY })));
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
                d(!1);
            },
            onWheel: function (e) {
                if ((e.preventDefault(), !s || !v(e))) return;
                const n = e.deltaY < 0;
                t({ dx: 0, dy: 0, dz: n ? -600 : 600 });
            },
            onMouseOver: function (e) {
                (n({ isOver3dScene: !0 }), b(e) && (d(!0), _({ x: e.clientX, y: e.clientY })));
            },
            onMouseOut: function () {
                (n({ isOver3dScene: !1 }), d(!1));
            },
            children: e,
        })
    );
}
const Ro = l.createContext(void 0);
function So() {
    const e = l.useContext(Ro);
    if (!e) throw new Error('useProgressBar must be used within a ProgressBar');
    return e;
}
const Lo = {
        fill: 'Filled_fill_32930ca9',
        filled: 'Filled_228d842a',
        wrapper: 'Filled_wrapper_fac9294',
        filled__small: 'Filled_filled__small_94d1350d',
        pattern: 'Filled_pattern_6ec8608d',
        filled__medium: 'Filled_filled__medium_94d1350d',
    },
    To = l.forwardRef(function ({ className: e, classNames: t, ...n }, r) {
        const s = So();
        return c.jsx('div', {
            ...n,
            ref: r,
            className: u(Lo.filled, Lo[`filled__${s.size}`], e),
            children: c.jsxs('div', {
                className: u(Lo.wrapper, null == t ? void 0 : t.wrapper),
                children: [
                    c.jsx('div', {
                        className: u(Lo.fill, null == t ? void 0 : t.fill),
                        style: { width: 100 * s.percentage + '%' },
                    }),
                    c.jsx('div', {
                        className: u(Lo.pattern, null == t ? void 0 : t.pattern),
                        style: { width: 100 * s.percentage + '%' },
                    }),
                ],
            }),
        });
    });
function No(e) {
    const [t, n] = l.useState(Math.min(e.value, e.maxValue)),
        [r, s] = l.useState(e.maxValue),
        o = dt(t),
        a = dt(r),
        i = ht((t) => n(Math.min(t, e.maxValue)));
    (l.useLayoutEffect(() => {
        i(e.value);
    }, [e.value, i]),
        l.useLayoutEffect(() => {
            s(e.maxValue);
        }, [e.maxValue]));
    const u = ht((t) => {
        var n;
        return null == (n = e.onValueChange) ? void 0 : n.call(e, t);
    });
    l.useEffect(() => {
        u(t);
    }, [u, t]);
    const d = ht((t) => {
        var n;
        return null == (n = e.onMaxValueChange) ? void 0 : n.call(e, t);
    });
    l.useEffect(() => {
        d(r);
    }, [d, r]);
    const f = l.useMemo(() => {
        if (void 0 !== o && void 0 !== a) return { value: o, maxValue: a, percentage: o / a };
    }, [o, a]);
    De(r > 0, 'ProgressBar: maxValue must be greater than 0');
    const m = l.useMemo(
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
    return c.jsx(Ro.Provider, { value: m, children: e.children });
}
const Po = 'ProgressBar_background_b40cdfdf',
    Bo = 'ProgressBar_backgroundPattern_7e932276',
    Mo = jn('ProgressBar', 'ProgressBar_27c2305c', {
        variants: {
            size: {
                small: 'ProgressBar_base__small_61ccd4be',
                medium: 'ProgressBar_base__medium_478d985a',
                full: 'ProgressBar_base__full_be7f12da',
            },
        },
    });
function Do({ size: e = 'medium', className: t, classNames: n, filledClassName: r, filledClassNames: s, ...o }) {
    return c.jsx(No, {
        size: e,
        ...o,
        children: c.jsxs(Mo, {
            size: e,
            className: t,
            children: [
                c.jsx('div', { className: u(Po, null == n ? void 0 : n.background) }),
                c.jsx('div', { className: u(Bo, null == n ? void 0 : n.backgroundPattern) }),
                c.jsx(To, { className: r, classNames: s }),
                o.children,
            ],
        }),
    });
}
const ko = 'Delta_5c8185db',
    Fo = 'Delta_delta__increase_e6e76b0b',
    Io = 'Delta_glow_8e83fd7a',
    Oo = l.memo(
        l.forwardRef(function (
            { initValue: e, initMaxValue: t, animationEnabled: n = !0, animationProps: r, classNames: s, ...o },
            a,
        ) {
            const i = l.useRef(null),
                d = l.useRef(null),
                f = So(),
                m = l.useMemo(() => {
                    if ('number' != typeof e || 'number' != typeof t) return;
                    De(t > 0, 'initMaxValue must be greater than 0');
                    const n = Math.min(e, t);
                    return { value: n, maxValue: t, percentage: n / t };
                }, [e, t]),
                h = f.previous ?? m;
            return (
                l.useEffect(() => {
                    const e = i.current,
                        t = d.current;
                    if (!e || !h || !t) return;
                    const s = f.percentage - h.percentage;
                    if (
                        ((e.style.left = 100 * Math.max(0, f.percentage - Math.max(0, s)) + '%'),
                        (e.style.width = 100 * Math.abs(s) + '%'),
                        e.classList.toggle(Fo, s > 0),
                        (t.style.width = '100%'),
                        n && 0 != s)
                    ) {
                        const e = new w({
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
                }, [f.percentage, n, r, h]),
                c.jsxs('div', {
                    ...o,
                    ref: nn([a, i]),
                    className: u(o.className, ko),
                    children: [
                        h && c.jsx('div', { className: u(Io, null == s ? void 0 : s.glow), ref: d }),
                        o.children,
                    ],
                })
            );
        }),
    ),
    $o = { lightTank: cs, mediumTank: us, heavyTank: ds, SPG: 'SPG', 'AT-SPG': ms },
    Ao = Object.values($o),
    jo = (e) => Ao.includes(e),
    zo = 'assault',
    Ho = 'sniper',
    Uo = 'support',
    Vo = 'universal',
    Go = 'break',
    Wo = 'wheeled',
    Zo = 'VehicleLevel_3c938122',
    qo = { arabic: 'arabic', roman: 'roman' };
const Xo = l.forwardRef(function ({ value: e, numberType: t, ...n }, r) {
    const s = (function (e, t) {
            return e || (t ? qo.arabic : qo.roman);
        })(
            t,
            (function () {
                const e = x.resolve('strings');
                return It.includes(e.readOrEmpty('settings.LANGUAGE_CODE'));
            })(),
        ),
        o = s === qo.roman ? Ae(e) : e;
    return c.jsx('div', { ...n, 'data-name': 'VehicleLevel', className: u(Zo, n.className), ref: r, children: o });
});
Xo.numberTypes = qo;
const Yo = 'prestige',
    Qo = 'short',
    Ko = 'medium',
    Jo = 'long',
    ea = (e) => (e < 10 ? Qo : e < 100 ? Ko : Jo),
    ta = (e, t, n) => (t === Yo ? Yo : `${t}.${ea(e)}.c_${n}`),
    na = {
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
function ra({ level: e, grade: t, type: n, direction: r, classNames: s, ...o }) {
    return e < 1 || -1 === t
        ? null
        : c.jsxs('div', {
              ...o,
              className: u(na.base, na[`base__${n}`], na[`base__${r}`], o.className, null == s ? void 0 : s.base),
              children: [
                  c.jsx(mn, {
                      path: `prestige.tab.${ta(e, n, t)}`,
                      className: u(na.icon, null == s ? void 0 : s.icon),
                  }),
                  n !== Yo &&
                      c.jsx('div', {
                          className: u(na.level, na[`level__${ea(e)}`], null == s ? void 0 : s.level),
                          children: e,
                      }),
              ],
          });
}
ra.direction = { left: 'left', right: 'right' };
const sa = {
        [`${zo}_x16x16`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M8 1L1 6.03876L3.67531 14H12.3247L15 6.03876L8 1ZM10.5 11.5H5.5L4 7L8 4L12 7L10.5 11.5Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Go}_x16x16`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', { d: 'M8 2L15 9H11L8 6L5 9H1L8 2Z', fill: '#FFB34D' }),
                l.createElement('path', { d: 'M11 11L8 8L5 11V14L8 11L11 14V11Z', fill: '#FFB34D' }),
            ),
        [`${Ho}_x16x16`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', { d: 'M9 8L10 9H14V7H10L9 8Z', fill: '#FFB34D' }),
                l.createElement('path', { d: 'M7 8L6 9H2V7H6L7 8Z', fill: '#FFB34D' }),
                l.createElement('path', { d: 'M8 9L7 10V14H9V10L8 9Z', fill: '#FFB34D' }),
                l.createElement('path', { d: 'M8 7L7 6V2H9V6L8 7Z', fill: '#FFB34D' }),
            ),
        [`${Uo}_x16x16`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M3 5V8.40002L2.80001 8.10004L2.20001 9.00005H1V3H2.20001L2.80002 4.00001L3.40002 3H8.80006C9.61885 3 10.7815 4.12547 11.5618 5.00075C11.55 5.00025 11.5382 5 11.5263 5H6.47368L5.89474 6L5.31579 5H3ZM6.39951 11.9999H11.7996C13.0298 11.9999 15.3996 9.01318 15.3996 9.01318C15.3996 9.01318 13.1393 5.99989 11.7996 5.99989H6.39951L5.79951 6.9999L5.1995 5.99989H3.99949V11.9999H5.1995L5.79951 11.0999L6.39951 11.9999Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Vo}_x16x16`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M4.79109 7.99164C4.79109 6.22006 6.22841 4.79109 7.99164 4.79109C8.45961 4.79109 8.90251 4.89972 9.30362 5.07521L11.1504 2.90251C10.2312 2.33426 9.1532 2 7.99164 2C4.68245 2 2 4.68245 2 8C2 9.50418 2.55153 10.8747 3.47075 11.9276L5.32591 9.75487C4.99164 9.25348 4.79944 8.65181 4.79944 8L4.79109 7.99164ZM12.6295 4.18941L10.7493 6.38719C11.0251 6.86351 11.2006 7.40669 11.2006 8C11.2006 9.77159 9.76323 11.2006 8 11.2006C7.59053 11.2006 7.19777 11.117 6.83844 10.9749L4.96657 13.1727C5.86072 13.6992 6.88858 14 8 14C11.3175 14 14 11.3175 14 8C14 6.55432 13.4903 5.22563 12.6295 4.18941Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Wo}_x16x16`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M7 8C7 9.65685 5.65685 11 4 11C2.34315 11 1 9.65685 1 8C1 6.34315 2.34315 5 4 5C5.65685 5 7 6.34315 7 8Z',
                    fill: '#FFB34D',
                }),
                l.createElement('path', {
                    d: 'M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${zo}_x24x24`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M12 3L3 9.58915L6.43968 20H17.5603L21 9.58915L12 3ZM15 17H9L7 11L12 7.5L17 11L15 17Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Go}_x24x24`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', { d: 'M12 3L21 12H16L12 8L8 12H3L12 3Z', fill: '#FFB34D' }),
                l.createElement('path', { d: 'M16 15L12 11L8 15V19L12 15L16 19V15Z', fill: '#FFB34D' }),
            ),
        [`${Ho}_x24x24`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', { d: 'M10 3V8L12 10L14 8V3H10Z', fill: '#FFB34D' }),
                l.createElement('path', { d: 'M10 21V16L12 14L14 16V21H10Z', fill: '#FFB34D' }),
                l.createElement('path', { d: 'M8 14H3V10H8L10 12L8 14Z', fill: '#FFB34D' }),
                l.createElement('path', { d: 'M21 14H16L14 12L16 10H21V14Z', fill: '#FFB34D' }),
            ),
        [`${Uo}_x24x24`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M6 8V12.2364L5.46667 13H4V6H5.46667L6.2 7.16667L6.93333 6H13.5333C14.712 6 16.4737 7.82156 17.3683 8.84226C16.7413 8.35641 16.1028 8 15.5789 8H10.4211L9.68421 9.16667L8.94737 8H6ZM10.9474 17H17.5789C19.0897 17 22 13.5155 22 13.5155C22 13.5155 19.2242 10 17.5789 10H10.9474L10.2105 11.1667L9.47368 10H8V17H9.47368L10.2105 15.95L10.9474 17Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Vo}_x24x24`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M7.72145 11.9889C7.72145 9.62674 9.63788 7.72145 11.9889 7.72145C12.6128 7.72145 13.2033 7.8663 13.7382 8.10028L16.2006 5.20334C14.9749 4.44568 13.5376 4 11.9889 4C7.5766 4 4 7.5766 4 12C4 14.0056 4.73538 15.8329 5.961 17.2368L8.43454 14.3398C7.98886 13.6713 7.73259 12.8691 7.73259 12L7.72145 11.9889ZM18.1727 6.91922L15.6657 9.84958C16.0334 10.4847 16.2674 11.2089 16.2674 12C16.2674 14.3621 14.351 16.2674 12 16.2674C11.454 16.2674 10.9304 16.156 10.4513 15.9666L7.95543 18.8969C9.14763 19.5989 10.5181 20 12 20C16.4234 20 20 16.4234 20 12C20 10.0724 19.3203 8.30084 18.1727 6.91922Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Wo}_x24x24`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M11 12C11 14.2091 9.20914 16 7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C9.20914 8 11 9.79086 11 12Z',
                    fill: '#FFB34D',
                }),
                l.createElement('path', {
                    d: 'M21 12C21 14.2091 19.2091 16 17 16C14.7909 16 13 14.2091 13 12C13 9.79086 14.7909 8 17 8C19.2091 8 21 9.79086 21 12Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${zo}_x32x32`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M16.5914 5.76714C16.2395 5.50928 15.7611 5.50928 15.4092 5.76714L5.65573 12.9145C5.30611 13.1707 5.16135 13.623 5.29721 14.0346L9.02038 25.3139C9.15564 25.7237 9.53848 26.0005 9.96998 26.0005H22.0306C22.4621 26.0005 22.8449 25.7237 22.9802 25.3139L26.7033 14.0346C26.8392 13.623 26.6944 13.1707 26.3448 12.9145L16.5914 5.76714ZM20.2642 22.8457L19.5741 22.1309H12.3525L11.6378 22.8457L12.143 21.7858L9.97409 15.1188L8.97588 14.6382L10.3931 14.7615L15.7292 10.8919L15.9633 9.56094L16.2344 10.9042L21.5335 14.7615L22.9384 14.6259L21.9525 15.1188L19.7959 21.7489L20.2765 22.8333L20.2642 22.8457Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Go}_x32x32`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M15.6464 5.35355C15.8417 5.15829 16.1583 5.15829 16.3536 5.35355L28 17H22.1988C22.0711 17 21.9483 16.9512 21.8555 16.8635L16.3433 11.6576C16.1506 11.4756 15.8494 11.4756 15.6567 11.6576L10.1445 16.8635C10.0517 16.9512 9.92888 17 9.80121 17H4L15.6464 5.35355Z',
                    fill: '#FFB34D',
                }),
                l.createElement('path', {
                    d: 'M22 20.8738C22 20.7412 21.9473 20.614 21.8536 20.5203L16.3536 15.0203C16.1583 14.825 15.8417 14.825 15.6464 15.0203L10.1464 20.5203C10.0527 20.614 10 20.7412 10 20.8738V27L15.6464 21.3536C15.8417 21.1583 16.1583 21.1583 16.3536 21.3536L22 27V20.8738Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Ho}_x32x32`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M16.0003 13L13 10V3.5C13 3.22386 13.2239 3 13.5 3H18.5C18.7761 3 19 3.22386 19 3.5V10L16.0003 13Z',
                    fill: '#FFB34D',
                }),
                l.createElement('path', {
                    d: 'M16.0003 19L13 22V28.5C13 28.7761 13.2239 29 13.5 29H18.5C18.7761 29 19 28.7761 19 28.5V22L16.0003 19Z',
                    fill: '#FFB34D',
                }),
                l.createElement('path', {
                    d: 'M22 13L19 16L22 19H28.5C28.7761 19 29 18.7761 29 18.5V13.5C29 13.2239 28.7761 13 28.5 13H22Z',
                    fill: '#FFB34D',
                }),
                l.createElement('path', {
                    d: 'M13 15.9998L10 13H3.5C3.22386 13 3 13.2239 3 13.5L3.00005 18.5C3.00005 18.7761 3.22391 19 3.50005 19H10L13 15.9998Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Uo}_x32x32`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M7 11.5V16.9014C6.84147 16.9014 6.68293 16.9756 6.58398 17.124L6.14843 17.7774C6.0557 17.9164 5.89959 18 5.73241 18H4.5C4.22386 18 4 17.7761 4 17.5V8.5C4 8.22386 4.22386 8 4.5 8H5.7169C5.89254 8 6.05529 8.09215 6.14565 8.24275L6.57125 8.95209C6.76546 9.27576 7.23455 9.27576 7.42875 8.95209L7.85435 8.24275C7.94471 8.09215 8.10746 8 8.2831 8H17C18.591 8 20.9608 10.5496 22.1919 12.0156C21.4185 11.4193 20.6452 11 20 11H13.2831C13.1075 11 12.9447 11.0921 12.8543 11.2428L12.4287 11.9521C12.2345 12.2758 11.7655 12.2758 11.5713 11.9521L11.1457 11.2428C11.0553 11.0921 10.8925 11 10.7169 11H7.5C7.22386 11 7 11.2239 7 11.5ZM13.2676 23H22C24.0503 23 28 18.0221 28 18.0221C28 18.0221 24.2329 13 22 13H13.2831C13.1075 13 12.9447 13.0921 12.8543 13.2428L12.4287 13.9521C12.2345 14.2758 11.7655 14.2758 11.5713 13.9521L11.1457 13.2428C11.0553 13.0921 10.8925 13 10.7169 13H9.5C9.22386 13 9 13.2239 9 13.5V22.5C9 22.7761 9.22386 23 9.5 23H10.7324C10.8996 23 11.0557 22.9164 11.1484 22.7774L11.584 22.124C11.7819 21.8272 12.2181 21.8272 12.416 22.124L12.8516 22.7774C12.9443 22.9164 13.1004 23 13.2676 23Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Vo}_x32x32`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M10.6518 15.9861C10.6518 13.0334 13.0474 10.6518 15.9861 10.6518C16.766 10.6518 17.5042 10.8329 18.1727 11.1253L21.2507 7.50418C19.7187 6.5571 17.922 6 15.9861 6C10.4708 6 6 10.4708 6 16C6 18.507 6.91922 20.7911 8.45125 22.546L11.5432 18.9248C10.9861 18.0891 10.6657 17.0864 10.6657 16L10.6518 15.9861ZM23.7159 9.64902L20.5822 13.312C21.0418 14.1058 21.3343 15.0111 21.3343 16C21.3343 18.9526 18.9387 21.3343 16 21.3343C15.3175 21.3343 14.663 21.195 14.0641 20.9582L10.9443 24.6212C12.4345 25.4986 14.1476 26 16 26C21.5292 26 26 21.5292 26 16C26 13.5905 25.1504 11.376 23.7159 9.64902Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Wo}_x32x32`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M14 16C14 18.7614 11.7614 21 9 21C6.23858 21 4 18.7614 4 16C4 13.2386 6.23858 11 9 11C11.7614 11 14 13.2386 14 16Z',
                    fill: '#FFB34D',
                }),
                l.createElement('path', {
                    d: 'M28 16C28 18.7614 25.7614 21 23 21C20.2386 21 18 18.7614 18 16C18 13.2386 20.2386 11 23 11C25.7614 11 28 13.2386 28 16Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${zo}_x48x48`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M24.591 8.43413C24.2391 8.17627 23.7607 8.17627 23.4088 8.43413L8.18991 19.5867C7.84029 19.8429 7.69553 20.2951 7.83139 20.7067L13.6434 38.3142C13.7786 38.7239 14.1615 39.0007 14.593 39.0007H33.4069C33.8384 39.0007 34.2212 38.7239 34.3565 38.3142L40.1685 20.7067C40.3043 20.2951 40.1596 19.8429 39.8099 19.5867L24.591 8.43413ZM30.3958 34.2685L29.3606 33.1964H18.5283L17.4561 34.2685L18.214 32.6788L14.9606 22.6783L13.4633 21.9573L15.5891 22.1422L23.5932 16.3378L23.9445 14.3414L24.3511 16.3563L32.2998 22.1422L34.4071 21.9388L32.9283 22.6783L29.6934 32.6233L30.4143 34.25L30.3958 34.2685Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Go}_x48x48`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M23.2929 8.70711C23.6834 8.31658 24.3166 8.31658 24.7071 8.70711L42 26H33.4142C33.149 26 32.8946 25.8946 32.7071 25.7071L24.7071 17.7071C24.3166 17.3166 23.6834 17.3166 23.2929 17.7071L15.2929 25.7071C15.1054 25.8946 14.851 26 14.5858 26H6L23.2929 8.70711Z',
                    fill: '#FFB34D',
                }),
                l.createElement('path', {
                    d: 'M33 31.4142C33 31.149 32.8946 30.8946 32.7071 30.7071L24.7071 22.7071C24.3166 22.3166 23.6834 22.3166 23.2929 22.7071L15.2929 30.7071C15.1054 30.8946 15 31.149 15 31.4142V40L23.2929 31.7071C23.6834 31.3166 24.3166 31.3166 24.7071 31.7071L33 40V31.4142Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Ho}_x48x48`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M24 20.5L20 16.4V7.7C20 7.3134 20.3134 7 20.7 7H27.3C27.6866 7 28 7.3134 28 7.7V16.4L24 20.5Z',
                    fill: '#FFB34D',
                }),
                l.createElement('path', {
                    d: 'M24 27.5L20 31.6V40.3C20 40.6866 20.3134 41 20.7 41H27.3C27.6866 41 28 40.6866 28 40.3V31.6L24 27.5Z',
                    fill: '#FFB34D',
                }),
                l.createElement('path', {
                    d: 'M31.4 20L27.5 24L31.4 28H40.3C40.6866 28 41 27.6866 41 27.3V20.7C41 20.3134 40.6866 20 40.3 20L31.4 20Z',
                    fill: '#FFB34D',
                }),
                l.createElement('path', {
                    d: 'M20.5 24L16.6 20L7.7 20C7.3134 20 7 20.3134 7 20.7V27.3C7 27.6866 7.3134 28 7.7 28H16.6L20.5 24Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Uo}_x48x48`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M33.4476 34H20C19.6852 34 19.3889 33.8518 19.2 33.6L18.8 33.0667C18.4 32.5333 17.6 32.5333 17.2 33.0667L16.8 33.6C16.6111 33.8518 16.3148 34 16 34H15C14.4477 34 14 33.5523 14 33V21C14 20.4477 14.4477 20 15 20H16C16.3148 20 16.6111 20.1482 16.8 20.4L17.2007 20.9343C17.6005 21.4673 18.4 21.4677 18.8002 20.935L19.2 20.4029C19.3889 20.1515 19.685 20.0036 19.9995 20.0036H33.4476C36.797 20.0036 42 27.0332 42 27.0332C42 27.0332 36.5231 34 33.4476 34ZM18.8 16.9333C18.4 17.4667 17.6 17.4667 17.2 16.9333L16.8 16.4C16.6111 16.1482 16.3148 16 16 16H11C10.4477 16 10 16.4477 10 17V23.6667C10 23.883 9.92982 24.0936 9.8 24.2667L8.79646 25.6047C8.6096 25.8539 8.31733 26.0017 8.00591 26.0047L7.00945 26.0141C6.4535 26.0193 6 25.5701 6 25.0141V13C6 12.4477 6.44772 12 7 12H7.95334C8.29399 12 8.61121 12.1734 8.79511 12.4602L9.15823 13.0264C9.55171 13.6399 10.4483 13.6399 10.8418 13.0264L11.2049 12.4602C11.3888 12.1734 11.706 12 12.0467 12H25.0638C26.8964 12 29.3189 14.119 31.1094 16.0382L20.0021 16.0017C19.6861 16.0006 19.3883 16.1489 19.1988 16.4016L18.8 16.9333Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Vo}_x48x48`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M15.9777 23.9791C15.9777 19.5501 19.571 15.9777 23.9791 15.9777C25.149 15.9777 26.2563 16.2493 27.2591 16.688L31.876 11.2563C29.578 9.83565 26.883 9 23.9791 9C15.7061 9 9 15.7061 9 24C9 27.7604 10.3788 31.1866 12.6769 33.8189L17.3148 28.3872C16.4791 27.1337 15.9986 25.6295 15.9986 24L15.9777 23.9791ZM35.5738 14.4735L30.8733 19.968C31.5627 21.1588 32.0014 22.5167 32.0014 24C32.0014 28.429 28.4081 32.0014 24 32.0014C22.9763 32.0014 21.9944 31.7925 21.0961 31.4373L16.4164 36.9318C18.6518 38.2479 21.2214 39 24 39C32.2939 39 39 32.2939 39 24C39 20.3858 37.7256 17.0641 35.5738 14.4735Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Wo}_x48x48`]: (e) =>
            l.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                l.createElement('path', {
                    d: 'M21 24C21 28.4183 17.4183 32 13 32C8.58172 32 5 28.4183 5 24C5 19.5817 8.58172 16 13 16C17.4183 16 21 19.5817 21 24Z',
                    fill: '#FFB34D',
                }),
                l.createElement('path', {
                    d: 'M43 24C43 28.4183 39.4183 32 35 32C30.5817 32 27 28.4183 27 24C27 19.5817 30.5817 16 35 16C39.4183 16 43 19.5817 43 24Z',
                    fill: '#FFB34D',
                }),
            ),
    },
    oa = {
        base: 'VehicleRole_e70537d3',
        base__x16x16: 'VehicleRole_base__x16x16_f444f190',
        base__x24x24: 'VehicleRole_base__x24x24_cc02d077',
        base__x32x32: 'VehicleRole_base__x32x32_2180a099',
        base__x48x48: 'VehicleRole_base__x48x48_2a01e86c',
        icon: 'VehicleRole_icon_7f7f6256',
    },
    aa = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48' },
    ia = l.forwardRef(function ({ roleKey: e, size: t = aa.x24x24, classNames: n, ...r }, s) {
        const o = sa[`${e}_${t}`];
        if (o)
            return c.jsx('div', {
                ...r,
                ref: s,
                className: u(oa.base, oa[`base__${t}`], null == n ? void 0 : n.base),
                children: c.jsx(o, { className: u(oa.icon, null == n ? void 0 : n.icon) }),
            });
        console.error(`Unknown vehicle role type ${e} with size ${t}`);
    });
ia.sizes = aa;
const la = { x24x24: 'x24x24', x48x48: 'x48x48', x64x64: 'x64x64', x96x96: 'x96x96' },
    ca = { x24x24: 'x64x64', x48x48: 'x96x96', x64x64: 'x96x96', x96x96: 'x96x96' },
    ua = {
        [$o.lightTank]: 'light_tank',
        [$o.mediumTank]: 'medium_tank',
        [$o.heavyTank]: 'heavy_tank',
        [$o.SPG]: 'spg',
        [$o['AT-SPG']]: 'tank_destroyer',
    },
    da = {
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
    fa = l.forwardRef(function ({ type: e, size: t = la.x48x48, premium: n = !1, fit: r = 'contain', ...s }, o) {
        const a = ((i = la[t]), (l = ca[t]), it().upscale ? l : i);
        var i, l;
        return c.jsx(mn, {
            ...s,
            ref: o,
            fit: r,
            className: u(da.base, n ? da[`base__premium__${t}`] : da[`base__${t}`], s.className),
            path: `ui_kit.vehicle_type.${a}.${n ? 'premium_' : ''}${O(ua[e])}_${a}`,
        });
    });
((fa.types = $o), (fa.sizes = la));
const ma = 'VehicleInfo_1732f1f0',
    ha = jn('VehicleName', 'VehicleInfo_name_3989ca04', {
        variants: { premium: { true: 'VehicleInfo_name__premium_258b3b93' } },
    }),
    _a = l.forwardRef(function (e, t) {
        return c.jsx('div', { ...e, ref: t, className: u(ma, e.className) });
    });
((_a.Prestige = ra), (_a.Level = Xo), (_a.Type = fa), (_a.Name = ha), (_a.Role = ia));
const ga = 'Tooltip_decorator_b3486d4e',
    pa = jn('Base', 'Tooltip_6d997cee'),
    va = jn('Decorator', ga),
    ba = l.forwardRef(function ({ children: e, ...t }, n) {
        const r = l.useRef(null);
        return (
            Et(r, (e) => {
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
            c.jsx(pa, {
                ...t,
                ref: function (e) {
                    ((r.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                children: e,
            })
        );
    });
ba.Decorator = va;
export {
    de as $,
    O as A,
    Gn as B,
    Ae as C,
    Vr as D,
    ms as E,
    On as F,
    Bt as G,
    ds as H,
    mn as I,
    ke as J,
    it as K,
    cs as L,
    us as M,
    Xe as N,
    Rt as O,
    yt as P,
    ce as Q,
    wo as R,
    fs as S,
    Ms as T,
    an as U,
    cn as V,
    qr as W,
    go as X,
    nn as Y,
    _o as Z,
    gt as _,
    _t as a,
    Ne as a0,
    Yn as a1,
    Lr as a2,
    yr as a3,
    Cr as a4,
    ps as a5,
    gs as a6,
    Tr as a7,
    ze as a8,
    je as a9,
    Do as aa,
    Oo as ab,
    _a as ac,
    jo as ad,
    dt as ae,
    Le as af,
    An as ag,
    G as ah,
    fe as ai,
    Co as aj,
    ft as ak,
    Lt as al,
    is as am,
    rs as an,
    as as ao,
    Te as ap,
    Zr as aq,
    Me as ar,
    rt as as,
    ba as at,
    rn as au,
    wt as b,
    $t as c,
    sn as d,
    I as e,
    tn as f,
    Pe as g,
    Re as h,
    en as i,
    ut as j,
    we as k,
    ue as l,
    kt as m,
    ve as n,
    H as o,
    Ft as p,
    Be as q,
    x as r,
    le as s,
    $n as t,
    zt as u,
    Qt as v,
    Zn as w,
    ht as x,
    In as y,
    Wr as z,
};
