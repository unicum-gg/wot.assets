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
    r as i,
    j as l,
    e as c,
    o as u,
    f as d,
    u as m,
    R as _,
    g as h,
    h as f,
    i as p,
    k as g,
} from './vendor.js';
const b = r();
function x(e, t) {
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
class v {
    constructor(e = window.R.images, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.images') ? e : x(this.prefix, e),
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
        return void 0 === s ? ('silent' !== n && w(`Resource not found: ${r}`, n), t()) : s;
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
const y = { integral: 0, gold: 1 },
    C = { fractional: 0, woZeroDigits: 1 },
    S = Object.keys(y),
    L = Object.keys(C);
const T = { full: E.FullTime, short: E.ShortTime };
const N = {
    isNumberFormat: function (e) {
        return e in y;
    },
    formatNumber: function (e, t) {
        return window.formatters.getNumberFormat(t, y[e]);
    },
    numberFormats: S,
    isRealFormat: function (e) {
        return e in C;
    },
    formatReal: function (e, t, n = 2) {
        return window.formatters.getRealFormat(t, C[e], n);
    },
    realFormats: L,
    formatDateTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    dateTimeFormats: E,
    formatTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    timeFormats: Object.keys(T),
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
function B(e, t, n) {
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
class D {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : x(this.prefix, e),
            s = B(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== n && w(`Resource not found: ${r}`, n), t()) : s;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : x(this.prefix, e),
            n = B(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const s = e.startsWith('R.strings') ? e : x(this.prefix, e),
            o = B(s, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== r && w(`Resource not found: ${s}`, r), n()) : o;
    }
    pluralOrEmpty(e, t, n = 'warn') {
        return this.pluralOr(e, t, () => '', n);
    }
}
class M {
    constructor(e = window.R.videos, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.videos') ? e : x(this.prefix, e),
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
        return void 0 === s ? ('silent' !== n && w(`Resource not found: ${e}`, n), t()) : s;
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
b.register({
    strings: a(() => new D()).singleton(),
    images: a(() => new v(window.R.images.gui.maps.icons)).singleton(),
    atlases: a(() => new v(window.R.atlases)).singleton(),
    videos: a(() => new M(window.R.videos)).singleton(),
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
    langCode: s(R.strings.settings.LANGUAGE_CODE()),
    intl: s(N),
});
const P = { easeInCubic: (e) => e * e * e };
function k(e) {
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
const F = Symbol('Duration');
function A(e) {
    return 'object' == typeof e && null !== e && e[F] === F;
}
function I(e) {
    return { [F]: F, value: e, unit: 'millis' };
}
const $ = I(0);
function O(e) {
    return { [F]: F, value: e, unit: 'seconds' };
}
const j = {
        millis: (e) => e,
        seconds: (e) => 1e3 * e,
        minutes: (e) => 1e3 * e * 60,
        hours: (e) => 1e3 * e * 60 * 60,
        days: (e) => 1e3 * e * 60 * 60 * 24,
        weeks: (e) => 1e3 * e * 60 * 60 * 24 * 7,
    },
    H = (e) => e / 1e3,
    U = (e) => e / 1e3 / 60,
    z = (e) => e / 1e3 / 60 / 60,
    V = (e) => e / 1e3 / 60 / 60 / 24,
    G = (e) => e / 1e3 / 60 / 60 / 24 / 7;
function Z(e) {
    return (0, j[e.unit])(e.value);
}
const W = k(function (e, t) {
        return I(Z(e) + Z(t));
    }),
    q = k(function (e, t) {
        return I(Z(e) - Z(t));
    }),
    Y = k(function (e, t) {
        return Z(e) > Z(t);
    }),
    X = k(function (e, t) {
        return Z(e) < Z(t);
    }),
    Q = {
        DD: (e) => Math.floor(V(e)).toString().padStart(2, '0'),
        D: (e) => Math.floor(V(e)).toString(),
        WW: (e) => Math.floor(G(e)).toString().padStart(2, '0'),
        W: (e) => Math.floor(G(e)).toString(),
        hh: (e) =>
            Math.floor(z(e) % 24)
                .toString()
                .padStart(2, '0'),
        mm: (e) =>
            Math.floor(U(e) % 60)
                .toString()
                .padStart(2, '0'),
        ss: (e) =>
            Math.floor(H(e) % 60)
                .toString()
                .padStart(2, '0'),
        h: (e) => Math.floor(z(e) % 24).toString(),
        m: (e) => Math.floor(U(e) % 60).toString(),
        s: (e) => Math.floor(H(e) % 60).toString(),
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
function K(e) {
    return e.replaceAll('-', '_');
}
function J(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
function ee(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function te(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const ne = ee('clientResized'),
    re = ee('self.onScaleUpdated'),
    se = { down: ee('mousedown'), up: ee('mouseup'), move: ee('mousemove') };
const oe = (function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && te(!1);
    }
    function n() {
        e.enabled && te(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  te(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : te(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const s = `mouse${t}`,
                            o = se[t]((e) => n([e, 'outside']));
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
            e.enabled && te(!0);
        },
        disableOutside() {
            e.enabled && te(!1);
        },
    };
})();
function ae(e) {
    engine.call('PlaySound', e);
}
const ie = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    le = { ...Object.keys(ie).reduce((e, t) => ((e[t] = () => ae(ie[t])), e), {}), sound: ae },
    ce = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    ue = {
        onTextureFrozen: ee('self.onTextureFrozen'),
        onTextureReady: ee('self.onTextureReady'),
        onDomBuilt: ee('self.onDomBuilt'),
        onLoaded: ee('self.onLoaded'),
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
        onDisplayChanged: ee('self.onShowingStatusChanged'),
        onFocusUpdated: ee('self.onFocusChanged'),
        onExternalPaddingsUpdated: ee('self.onPaddingsUpdated'),
        children: {
            onAdded: ee('children.onAdded'),
            onLoaded: ee('children.onLoaded'),
            onRemoved: ee('children.onRemoved'),
            onAttached: ee('children.onAttached'),
            onTextureReady: ee('children.onTextureReady'),
            onRequestPosition: ee('children.requestPosition'),
        },
    },
    de = 1,
    me = 2,
    _e = 4,
    he = 16,
    fe = 32,
    pe = 64;
function ge(e) {
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
const be = (e) => {
        const t = [];
        for (const [n, r] of Object.entries(e)) {
            const e = ge(r);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
        }
        return t;
    },
    xe = (e, t) => {
        const n = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...s } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: n, type: e, ...s, arguments: be(r) })
                : viewEnv.handleViewEvent({ __Type: n, type: e, ...s });
        }
        return viewEnv.handleViewEvent({ __Type: n, type: e });
    },
    we = new Map(),
    ve = new Map(),
    Ee = {
        close(e) {
            xe('popover' === e ? me : fe);
        },
        closeView() {
            xe(fe);
        },
        minimize() {
            xe(pe);
        },
        move(e) {
            xe(he, { isMouseEvent: !0, on: e });
        },
        popover: {
            open({ contentID: e, decoratorID: t = 0, targetID: n, direction: r, boundingBox: s, args: o }) {
                var a;
                xe(me, {
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
                xe(me, { on: !1 });
            },
        },
        tooltip: {
            open(e, t, n = 0, r) {
                (xe(de, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    we.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (xe(de, { contentID: t, decoratorID: n, targetID: e, on: !1 }), we.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(we.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
        contextMenu: {
            open(e, t, n = 0, r) {
                (xe(_e, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    ve.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (xe(_e, { contentID: t, decoratorID: n, targetID: e, on: !1, isMouseEvent: !1 }),
                    ve.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(ve.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
    };
function ye(e, t, n = 'px') {
    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
}
function Ce() {
    return viewEnv.getScale();
}
function Re(e) {
    return viewEnv.pxToRem(e);
}
function Se(e) {
    return viewEnv.remToPx(e);
}
Object.keys(ce).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === ce[t]), e), {});
class Le {
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
const Te = (e) => (0 === e ? window : window.subViews.get(e));
function Ne(
    { initializer: e = !0, rootId: t = 0, getRoot: n = Te, context: r = 'model' } = {},
    { name: s = 'DataLayer' } = {},
) {
    const o = new Map(),
        a = { subscribersNotified: new Le() },
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
function Be(e, t) {
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
const De = (e, t, n) => (n < e ? e : n > t ? t : n);
function Me() {}
function Pe() {
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
                                                headers: _(o),
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
                        return this.text().then(m);
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
        function m(e) {
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
        function _(e) {
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
const ke = { ENTER: 13, SPACE: 32 };
function Fe(e, t) {
    return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
}
const Ae = {
    NONE: 'NONE',
    ...((Ie = [
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
    Ie.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...Fe(
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
    ...Fe(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...Fe(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...Fe(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...Fe(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...Fe(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...Fe(['Up', 'Down'], 'Page'),
    ...Fe(['Left', 'Right'], 'Bracket'),
};
var Ie;
function $e(e) {
    return 'number' == typeof e
        ? (function (e) {
              return window.systemInput.getKeyName(e);
          })(e)
        : e;
}
function Oe(e) {
    return (
        !1 ===
        (function (e) {
            return null == e;
        })(e)
    );
}
const je = function (e, t) {
    var n;
    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
};
function He(e, t) {
    return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r));
}
function Ue(e, t) {
    return (function (e, t, n) {
        const r = [];
        for (let s = 0; s < e.length; s++) {
            const o = je(e, s);
            t(o, s, e) && r.push(n(o, s, e));
        }
        return r;
    })(e, Oe, t);
}
const ze = (e) => {
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
    },
    Ve = (e, t) => {
        let n;
        const r = setTimeout(() => {
            n = e();
        }, t);
        return () => {
            ('function' == typeof n && n(), clearTimeout(r));
        };
    },
    Ge = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    Ze = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
    We = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
['ko', 'no'].includes(b.resolve('langCode'));
class qe {
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
function Ye(e) {
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
const Xe = {
    zh_cn: Ye,
    zh_sg: Ye,
    zh_tw: Ye,
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
    th: function (e) {
        var t;
        const n = [],
            r = e
                .replace(/&nbsp;/g, ' ')
                .matchAll(
                    /[【「(（『"《]?[\u0E00-\u0E7F%](?:[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E。!?,.:、…・/ー—–!%+?）)】」"》』]+)?|[「【(（『《"]?\d+(?:,\d{3})*(?:-\d+(?:,\d{3})*)?(?:\s*[a-zA-Z\u0E00-\u0E7F/%]+)?(?:[。.,，、:;：；!?）)】」"》・%)、]+)?|[「【(（『《"]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?"》】」）)』]+)?|[\u00A0 ]|[^\s]/gu,
                );
        for (const [s] of r)
            /^\s+$/.test(s)
                ? n.length
                    ? (n[n.length - 1] += s)
                    : n.push(s)
                : 1 === n.length && (null == (t = n[0]) ? void 0 : t.startsWith('  '))
                  ? (n[0] = ' ' + s)
                  : n.push(s);
        return n;
    },
};
function Qe(e) {
    return e.split(' ');
}
const Ke = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko', 'th']);
const Je = i.createContext(void 0);
const et = 'extraSmall',
    tt = {
        extraSmall: { weight: 0, name: et, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var nt,
    rt,
    st,
    ot =
        (((nt = ot || {})[(nt.Small = tt.small.width)] = 'Small'),
        (nt[(nt.Medium = tt.medium.width)] = 'Medium'),
        (nt[(nt.Large = tt.large.width)] = 'Large'),
        (nt[(nt.ExtraLarge = tt.extraLarge.width)] = 'ExtraLarge'),
        nt),
    at =
        (((rt = at || {})[(rt.Small = tt.small.width)] = 'Small'),
        (rt[(rt.Medium = tt.medium.width)] = 'Medium'),
        (rt[(rt.Large = tt.large.width)] = 'Large'),
        (rt[(rt.ExtraLarge = tt.extraLarge.width)] = 'ExtraLarge'),
        rt),
    it =
        (((st = it || {})[(st.Small = tt.small.height)] = 'Small'),
        (st[(st.Medium = tt.medium.height)] = 'Medium'),
        (st[(st.Large = tt.large.height)] = 'Large'),
        (st[(st.ExtraLarge = tt.extraLarge.height)] = 'ExtraLarge'),
        st);
const lt = Object.values(tt);
function ct(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        s = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...s])).join(' ');
}
const ut = () => {
    const e = (function (e = 'px') {
        return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
    })('rem');
    return (function (e, t, n) {
        const r = lt.reduce(
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
            a = o.names[o.names.length - 1] ?? et,
            i = tt[a],
            l = r.width.names,
            c = r.height.names,
            u = l[l.length - 1] ?? et,
            d = c[c.length - 1] ?? et,
            m = { width: tt[u].width, height: tt[d].height };
        return {
            mediaClass: ct(s, r),
            breakpoint: i,
            screenWidthRem: e,
            screenHeightRem: t,
            breaks: o.names,
            sides: m,
            mediaSize: i.width,
            mediaWidth: m.width,
            mediaHeight: m.height,
            upscale: n > 1,
        };
    })(e.width, e.height, Se(1));
};
function dt({ children: e }) {
    const [t, n] = i.useState(ut);
    return (
        i.useLayoutEffect(() => {
            function e() {
                n(ut);
            }
            e();
            const t = ne(e),
                r = re(e);
            return () => {
                (t(), r());
            };
        }, []),
        l.jsx(Je.Provider, { value: t, children: e })
    );
}
function mt() {
    return (function () {
        const e = i.useContext(Je);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function _t({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: s } = mt();
    return l.jsx('div', { className: c(t, 'media-wrapper', r, s && 'media-upscale'), ...n, children: e });
}
function ht({ children: e, ...t }) {
    return l.jsx(dt, { children: l.jsx(_t, { ...t, children: e }) });
}
function ft(e, t) {
    return (function (e, t, n) {
        return n ? e.breaks.reduce((e, t) => (n[t] ? { ...e, ...n[t] } : e), t) : t;
    })(mt(), e, t);
}
function pt(e, t) {
    return mt().upscale ? t : e;
}
function gt(e, t, n, r) {
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
}
function bt(e, t, n) {
    const r = i.useMemo(
        () =>
            (function (e, t, n) {
                return void 0 === n ? gt(e, t, !1) : gt(e, n, !1 !== t);
            })(n, e),
        t,
    );
    return (i.useEffect(() => r.cancel, [r]), r);
}
const xt = [];
function wt(e) {
    const t = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            t.current = e;
        }),
        i.useCallback((...e) => (0, t.current)(...e), xt)
    );
}
function vt(e) {
    i.useEffect(e, []);
}
function Et(e) {
    i.useEffect(() => e, []);
}
const yt = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new qe();
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
                if (e === Ae.NONE) return Pe;
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
    Ct = i.createContext(void 0);
function Rt(e, t, n, r = !1) {
    const s = $e(e),
        o = wt((e) => {
            viewEnv.isEventHandled() || (n(e), viewEnv.setEventHandled(), r && e.stopPropagation());
        }),
        a = (function () {
            const e = i.useContext(Ct);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        l = i.useMemo(() => a[t].register(s, o), [a, t, s, o]);
    i.useEffect(() => l, [l]);
}
function St(e, t, n = !1) {
    return Rt($e(e), 'keyup', t, n);
}
function Lt(e) {
    const t = i.useMemo(yt, []),
        n = i.useMemo(yt, []);
    i.useEffect(() => {
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
    const r = i.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: n.register, unregister: n.unregister },
        }),
        [t, n],
    );
    return l.jsx(Ct.Provider, { value: r, children: e.children });
}
function Tt(e) {
    return (function (e, t, n = !1) {
        return Rt($e(e), 'keydown', t, n);
    })(Ae.ESCAPE, e);
}
const Nt = (e, t, n = !0) => {
        const r = wt((e) => {
            const n = e[0];
            n && t(n);
        });
        i.useEffect(() => {
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
    Bt = 0;
function Dt() {
    const e = i.useRef(Bt);
    return (
        Et(() => {
            window.cancelAnimationFrame(e.current);
        }),
        i.useMemo(
            () => ({
                run: (t) => {
                    (window.cancelAnimationFrame(e.current),
                        (e.current = window.requestAnimationFrame(() => {
                            e.current = window.requestAnimationFrame(() => {
                                ((e.current = Bt), t());
                            });
                        })));
                },
                clear: () => {
                    (window.cancelAnimationFrame(e.current), (e.current = Bt));
                },
                get isRunning() {
                    return e.current !== Bt;
                },
            }),
            [],
        )
    );
}
const Mt = new WeakMap(),
    Pt = 0,
    kt = { await: 'await', idle: 'idle', display: 'display' };
function Ft({ resId: e = Pt, contentId: t, decoratorId: n, disabled: r, args: s, showDelay: o = 400 }) {
    const a = i.useRef({ status: kt.idle, resId: e, timeoutId: 0 }),
        [l, c] = i.useMemo(() => {
            let i = null;
            function l() {
                r ||
                    ((a.current.status = kt.await),
                    window.clearTimeout(a.current.timeoutId),
                    (a.current.timeoutId = window.setTimeout(c, o)));
            }
            function c() {
                ((a.current.status = kt.display), Ee.tooltip.open(e, t, n, s), i && Mt.set(i, d));
            }
            function u() {
                if (
                    (window.clearTimeout(a.current.timeoutId),
                    a.current.status === kt.display && Ee.tooltip.hide(e, t, n),
                    (a.current.status = kt.idle),
                    i)
                ) {
                    Mt.delete(i);
                    let e = i.parentElement;
                    for (; e && !Mt.has(e); ) e = e.parentElement;
                    if (e) {
                        Mt.get(e).show();
                    }
                    i = null;
                }
            }
            const d = {
                hide: u,
                show: c,
                rerun: function () {
                    a.current.status !== kt.idle && (r ? d.hide() : l());
                },
            };
            return [
                d,
                {
                    onMouseEnter: (e) => {
                        ((i = null == e ? void 0 : e.currentTarget), l());
                    },
                    onMouseLeave: r ? Me : u,
                    onClick: r ? Me : u,
                },
            ];
        }, [s, t, n, r, e, o]);
    return (
        i.useEffect(() => {
            l.rerun();
        }, [l]),
        Et(wt(l.hide)),
        c
    );
}
function At({ alert: e, body: t, header: n, note: r, hasHtmlContent: s, disabled: o }) {
    const a = b.resolve('views');
    return Ft({
        disabled: o,
        contentId: a.read((e) =>
            s
                ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
        ),
        decoratorId: a.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
        args: i.useMemo(() => ({ body: t, header: n, note: r, alert: e }), [e, t, n, r]),
    });
}
function It(e) {
    return Ft({
        ...e,
        contentId: b
            .resolve('views')
            .read((e) => e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
    });
}
const $t = ['ko', 'no'];
const Ot = {
    click: jt('play'),
    'hot-key': jt('play'),
    'mouse-enter': jt('highlight'),
    increaseAmount: jt('cons_ammo_single_plus'),
    decreaseAmount: jt('cons_ammo_single_minus'),
    increaseAmountRoll: jt('cons_ammo_roll_plus'),
    decreaseAmountRoll: jt('cons_ammo_roll_minus'),
    close: jt('cancelcloseno'),
    'show-context-menu': jt('tabb'),
    progressSimple: jt('gui_hangar_progressbar_simple'),
    increaseDelta: jt('gui_hangar_progressbar_delta_increase'),
    decreaseDelta: jt('gui_hangar_progressbar_delta_decrease'),
    increaseDeltaMax: jt('gui_hangar_progressbar_delta_max'),
    pointerGrab: jt('gui_hangar_progressbar_pointer_grab'),
    pointerDrag: jt('gui_hangar_progressbar_pointer_drag'),
};
function jt(e) {
    return () => {
        le.sound(e);
    };
}
function Ht(e, t) {
    return Object.entries(e).reduce(
        (e, [t, n]) => (
            (e[t] = (e) => {
                var r;
                e && e.target in n ? le.sound(n[e.target]) : null == (r = Ot[t]) || r.call(Ot, e);
            }),
            e
        ),
        {},
    );
}
const Ut = i.createContext(null);
function zt({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const s = i.useMemo(() => ({ ...Ot, ...t }), [t]),
        o = i.useMemo(
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
    return l.jsx(Ut.Provider, { value: o, children: r });
}
function Vt() {
    const e = i.useContext(Ut);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const Gt = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    Zt = new Set(['number', 'string', 'boolean', 'bigint']),
    Wt = new Set(['Dict']);
function qt(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var s, o;
    const a = e,
        i = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (Gt.has(i)) return a;
    if (null === a) return a;
    const l = { depth: n + 1, maxDepth: r };
    if (Array.isArray(a)) return a.map((e) => qt(e, l));
    if ('object' === i) {
        const r = (null == (s = a.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => qt(e, l));
        if ('CoherentArrayProxy' === r) return e.map((e) => qt(e.value, l));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in a) {
                    const n = a[t];
                    Zt.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in a) {
                    const n = a[t],
                        r = (null == (o = null == a ? void 0 : a.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                    Wt.has(r) || (e[t] = qt(n, l));
                }
                return e;
            }
        }
        const i = {};
        for (const e of Object.keys(a)) i[e] = qt(a[e], l);
        return i;
    }
    return (console.error('Incorrect value to clone model', a), a);
}
const Yt = { deep: !1, equals: Pe },
    Xt = { cloneItem: !0 },
    Qt = { shallow: !1 };
class Kt {
    constructor(e, t = Xt) {
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
            s = e.keys();
        for (let n = 0; n < s.length; n++) {
            const t = s[n];
            r[t] = u.box(this.takeItem(e, t), Yt);
        }
        ((this._keys = u.set(new Set(s))), (this._data = u.box(r, Yt)));
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
                : null !== o && ((n[s] = u.box(o, Yt)), this._keys.add(s), this.set(n));
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
        return this.options.cloneItem ? qt(n, Qt) : n;
    }
    untrackedData() {
        return m(() => this._data.get());
    }
}
const Jt = i.createContext({ mode: 'real' }),
    en = { equals: Pe, deep: !1 };
function tn(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        d(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const s = (s, o, a = en) => {
            const i = u.box(s(n(o)), a);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(s(e))), o), i);
        },
        o = (s, o) => {
            const a = new Kt(n(s), o);
            return ('real' === t && e.subscribe((e, t) => r.push(() => a.update(e, t)), s), a);
        },
        a = (s, o) => {
            const a = u.box(n(s) ?? o, en);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(e)), s), a);
        };
    return {
        dict: o,
        dictRef: (e, t) => o(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => s(qt, e),
        array: a,
        object: a,
        transform: s,
        primitives: (s, o) => {
            const a = n(o);
            if (Array.isArray(s)) {
                const n = s.reduce((e, t) => ((e[t] = u.box(a[t], {})), e), {});
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
                    l = i.reduce((e, [t, n]) => ((e[n] = u.box(a[t], {})), e), {});
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
const nn =
        (e = 'DataLayerProvider') =>
        (t, n, r) => {
            const s = i.createContext(null);
            function o(o) {
                var a;
                const { mode: c, options: u, children: d, mocks: m } = o,
                    _ = i.useContext(Jt),
                    h = c ?? _.mode,
                    f = m ?? _.mocks,
                    p = i.useRef([]),
                    g = null == (a = null == r ? void 0 : r.useRequires) ? void 0 : a.call(r),
                    b = wt((s, a, i) => {
                        var l;
                        const c =
                                'real' !== s && i
                                    ? (function (e, t) {
                                          return {
                                              subscribe: () => 0,
                                              readSafeByPath: e,
                                              readByPath: e,
                                              createCallback: (n, r) => {
                                                  const s = e(Be(r, t));
                                                  return (...e) => {
                                                      s(n(...e));
                                                  };
                                              },
                                              createCallbackNoArgs: (n) => {
                                                  const r = e(Be(n, t));
                                                  return () => {
                                                      r();
                                                  };
                                              },
                                              dispose: () => {},
                                              unsubscribe: () => {},
                                              events: { subscribersNotified: new Le() },
                                          };
                                      })(i.getter, a)
                                    : Ne(a, { name: e }),
                            u = (e) => ('mocks' === s ? (null == i ? void 0 : i.getter(e, a)) : c.readByPath(e)),
                            d = (e) => p.current.push(e),
                            m = 'initial' in o && {
                                initial: null == (l = null == r ? void 0 : r.initial) ? void 0 : l.call(r, o.initial),
                            },
                            _ = t({
                                ...m,
                                mode: s,
                                readByPath: u,
                                requires: g,
                                externalModel: c,
                                observableModel: tn(c, s, u),
                                cleanup: d,
                            }),
                            h = { ...m, mode: s, model: _, externalModel: c, cleanup: d, requires: g },
                            f = 'mocks' === s && (null == i ? void 0 : i.controls) ? i.controls(h) : {};
                        return {
                            model: _,
                            controls: { ...(null == n ? void 0 : n(h)), ...f },
                            externalModel: c,
                            mode: s,
                            rootId: (null == a ? void 0 : a.rootId) ?? 0,
                        };
                    }),
                    x = i.useRef(!1),
                    [w, v] = i.useState(h);
                i.useEffect(() => {
                    v(h);
                }, [h]);
                const [E, y] = i.useState(() => b(w, u, f));
                return (
                    i.useEffect(() => {
                        x.current ? y(b(w, u, f)) : (x.current = !0);
                    }, [
                        b,
                        f,
                        w,
                        null == u ? void 0 : u.context,
                        null == u ? void 0 : u.initializer,
                        null == u ? void 0 : u.getRoot,
                        null == u ? void 0 : u.rootId,
                    ]),
                    i.useEffect(
                        () => () => {
                            (E.externalModel.dispose(), p.current.forEach((e) => e()));
                        },
                        [E],
                    ),
                    l.jsx(s.Provider, { value: E, children: d })
                );
            }
            return (
                (o.displayName = e),
                [
                    o,
                    function () {
                        const e = i.useContext(s);
                        if (!e) throw new Error(`hook useModel must be used within a ${o.displayName}.`);
                        return e;
                    },
                    { Context: s },
                ]
            );
        },
    rn = (e) => (t) => {
        e.forEach((e) =>
            ((e, t) => {
                e && ('function' == typeof e ? e(t) : (e.current = t));
            })(e, t),
        );
    };
i.forwardRef(function (e, t) {
    const n = i.useRef(null);
    return (
        i.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return ue.onHitTest((t) => {
                    const n = e.getBoundingClientRect();
                    return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                });
        }, []),
        l.jsx('div', { ...e, ref: rn([t, n]) })
    );
});
class sn {
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
        return l.jsx(l.Fragment, {
            children: this.items.reduceRight((e, [t, n], r) => i.createElement(t, { ...n, key: r }, e), e),
        });
    }
}
async function on(
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
    const a = n ? ht : _.Fragment,
        i = (null == (o = null == window ? void 0 : window.engine) ? void 0 : o.whenReady) ?? Promise.resolve();
    (s && engine.enableImmediateLayout(!0),
        await i,
        document.documentElement.setAttribute('lang', b.resolve('langCode')),
        h.createRoot(t).render(l.jsx(a, { children: l.jsx(Lt, { children: e }) })),
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
function an(e) {
    return l.jsx(l.Fragment, { children: e.children });
}
function ln(e) {
    return l.jsx(an, {
        children: l.jsx(zt, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
const cn = {
        root: 'CloseButton_root_987cb365',
        base: 'CloseButton_7488a1b8',
        base__medium: 'CloseButton_base__medium_97d04067',
        base__small: 'CloseButton_base__small_c1b29bae',
        base__extraSmall: 'CloseButton_base__extraSmall_f52764c1',
        base__x96x96: 'CloseButton_base__x96x96_8157b84d',
        base__x32x32: 'CloseButton_base__x32x32_6466ea31',
    },
    un = { medium: 'medium', small: 'small', extraSmall: 'extraSmall' },
    dn = { [un.medium]: 'x96x96', [un.small]: un.medium, [un.extraSmall]: 'x32x32' };
function mn({
    size: e = un.medium,
    hoverSound: t = ie.highlight,
    clickSound: n = ie.click,
    className: r,
    onHover: s,
    onClose: o,
}) {
    const a = pt(cn[`base__${e}`], cn[`base__${dn[e]}`]);
    return l.jsx('div', {
        className: c(cn.base, a, r),
        onMouseEnter: () => {
            (le.sound(t), null == s || s());
        },
        onClick: () => {
            (le.sound(n), o());
        },
    });
}
mn.size = un;
var _n = ((e) => (
        (e[(e.NonSet = 0)] = 'NonSet'),
        (e[(e.Debug = 10)] = 'Debug'),
        (e[(e.Info = 20)] = 'Info'),
        (e[(e.Warning = 30)] = 'Warning'),
        e
    ))(_n || {}),
    hn = ((e) => ((e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed'), e))(
        hn || {},
    );
const fn = 'metrics',
    pn = () => Date.now(),
    gn = ({ partnerID: e, item: t, parentScreen: n, itemState: r, info: s }) => ({
        item: t,
        partnerID: e || null,
        parent_screen: n || null,
        item_state: r || null,
        additional_info: s || null,
    }),
    bn = (e, t) => {
        const n = i.useCallback(
            (n, r = _n.Info, s) => {
                (s || (s = {}),
                    Object.keys(s).length >= 200 ||
                        window.uiLoggerModel.log({
                            feature: e,
                            group: t,
                            action: n,
                            logLevel: r,
                            params: JSON.stringify(s),
                        }));
            },
            [e, t],
        );
        return (e, t, r) => n(e, t, r);
    },
    xn = (e, t) => {
        const n = bn(e, t),
            r = i.useRef([]),
            s = i.useCallback(
                (e, t, s) => {
                    e && !r.current.includes(e) && (r.current.push(e), n(e, t, s));
                },
                [r, n],
            );
        return [
            (e, t, n) => s(e, t, n),
            () => {
                r.current = [];
            },
        ];
    },
    wn = (e) => {
        const t = bn(e, fn),
            n = i.useCallback(
                (e) => {
                    t(e.action, e.logLevel, gn(e));
                },
                [t],
            );
        return (e) => n(e);
    },
    vn = (e) => {
        const [t, n] = xn(e, fn),
            r = i.useCallback(
                (e) => {
                    const { action: n, logLevel: r } = e;
                    t(n, r, gn(e));
                },
                [t],
            );
        return [(e) => r(e), () => n()];
    },
    En = (e) => {
        const [t, n, r, s, o] = ((e, t) => {
                const n = bn(e, t),
                    r = i.useRef(new Map()),
                    s = i.useRef(new Map()),
                    o = i.useCallback(
                        (e) => {
                            if (!e) return;
                            const t = r.current.get(e);
                            (void 0 !== t && t > 0) || r.current.set(e, pn());
                        },
                        [r],
                    ),
                    a = i.useCallback(() => {
                        (r.current.clear(), s.current.clear());
                    }, [r, s]),
                    l = i.useCallback(
                        (e) => {
                            e && void 0 !== r.current.get(e) && void 0 === s.current.get(e) && s.current.set(e, pn());
                        },
                        [r, s],
                    ),
                    c = i.useCallback(
                        (e) => {
                            if (!e) return;
                            const t = r.current.get(e);
                            if (void 0 === t) return;
                            const n = s.current.get(e);
                            if (void 0 === n) return;
                            s.current.delete(e);
                            const o = pn() - n;
                            r.current.set(e, t + o);
                        },
                        [r, s],
                    ),
                    u = i.useCallback(
                        (e, t = 0, o, a) => {
                            const i = r.current.get(e);
                            if (void 0 === i) return;
                            (void 0 !== s.current.get(e) && c(e), r.current.delete(e));
                            const l = (pn() - i) / 1e3;
                            l <= t ||
                                ((a = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(a, l)), n(e, o, a));
                        },
                        [r, s, n, c],
                    );
                return [(e) => o(e), (e, t, n, r) => u(e, t, n, r), () => a(), (e) => l(e), (e) => c(e)];
            })(e, fn),
            a = i.useCallback(
                (e) => {
                    const { action: t, timeLimit: r, logLevel: s } = e;
                    n(t, r, s, gn(e));
                },
                [n],
            );
        return [(e) => t(e), (e) => a(e), () => r(), (e) => s(e), (e) => o(e)];
    },
    yn = 1,
    Cn = 2,
    Rn = 3;
const Sn = {
        COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
        base: 'FormatText_db904f12',
        base__fullSize: 'FormatText_base__fullSize_a514958e',
        nowrap: 'FormatText_nowrap_ff69eca3',
    },
    Ln = new Set((null == (e = Sn.COLORS) ? void 0 : e.split(', ')) ?? []);
let Tn = 0;
function Nn() {
    return ++Tn;
}
const Bn =
    /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
function Dn(e) {
    const t = b.resolve('langCode');
    return (function (e, t, n) {
        return Ke.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
    })(
        (function (e, t) {
            return (Xe[t] ?? Qe)(e);
        })(e, t),
        t,
        (e, t) => e && l.jsx('span', { children: e }, `${e}${t}`),
    );
}
function Mn(e) {
    return Array.isArray(e)
        ? (function (e) {
              const t = [];
              for (let n = 0; n < e.length; n++) {
                  const r = e[n],
                      s = e[n + 1];
                  if ('string' != typeof s || !Bn.test(s)) {
                      t.push(Mn(r));
                      continue;
                  }
                  const o = Dn(s.slice(1));
                  (t.push(
                      l.jsxs(
                          i.Fragment,
                          { children: [l.jsxs('span', { className: Sn.nowrap, children: [Mn(r), s[0]] }), o] },
                          Nn(),
                      ),
                  ),
                      (n += 1));
              }
              return t;
          })(e)
        : 'string' == typeof e
          ? l.jsx(i.Fragment, { children: Dn(e) }, Nn())
          : e;
}
const Pn = {
    class: function (e, ...t) {
        return l.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            Nn(),
        );
    },
    colorLegacy: function (e, t) {
        const n = Nn();
        return Ln.has(String(t))
            ? l.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : l.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: Mn,
    style: function (e, ...t) {
        return l.jsx(
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
            Nn(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function kn(e, t, n, r) {
    const s = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...s] = n.slice(1, -1).split(' ');
                return t ? kn(e, t, s, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        o = r[t];
    return o ? o(e, ...s) : (console.error(`Function ${t} is not registered`), e);
}
function Fn(e, t, n) {
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
        return r ? kn(e, r, s, n) : e;
    }, t);
}
function An(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function In(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !An(e[r]); ) r++;
            const s = e.slice(n + 1, r),
                o = t[s];
            if (o) return In(e.replace(`$${s}`, String(o)), t);
        }
    }
    return e;
}
function $n(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = In(e[r], t);
    return n;
}
const On = ['number', 'string', 'undefined'];
function jn(e, t, n = {}, r = !0) {
    r && (Tn = 0);
    const s = [];
    function o(e) {
        if (On.includes(typeof e)) {
            const t = s.at(-1);
            if ('string' == typeof t) return void (s[s.length - 1] = t + e);
        }
        s.push(e);
    }
    for (const a of e)
        if (a.type === yn) o(a.value);
        else if (a.type === Rn)
            null === n[a.name] || On.includes(typeof n[a.name])
                ? o(n[a.name] ?? `{{${a.name}}}`)
                : s.push(l.jsx(i.Fragment, { children: n[a.name] }, `var-${a.name}-${a.instanceId}`));
        else if (a.type === Cn) {
            const e = jn(a.children, t, n, !1),
                r = Fn($n(a.attrs, n), e, t);
            s.push(r);
        }
    return s;
}
function Hn(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function Un(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function zn(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const Vn = { start: '{{', end: '}}' },
    Gn = i.memo(function (e) {
        const {
                brackets: t = Vn,
                text: n,
                params: r,
                upgradeLegacy: s,
                fullSize: o,
                inline: a,
                formatters: u,
                split: d,
                ...m
            } = e,
            _ = i.useMemo(
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
                              })(e, zn, Hn, Un);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            h = i.useMemo(() => (e.formatters ? { ...Pn, ...e.formatters } : Pn), [e.formatters]),
            f = i.useMemo(
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
                                        ? r[r.length - 1].node.children.push({ type: yn, value: s })
                                        : n.push({ type: yn, value: s }),
                                    (s = '')),
                                    (o = !0),
                                    (l += t.start.length - 1));
                            else if (c === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
                                ((o = !1), (l += t.end.length - 1));
                                const e = a.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        s = { type: Cn, attrs: t.split('|'), instanceId: ++i, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(s) : n.push(s),
                                        r.push({ node: s, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: Rn, instanceId: ++i, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                a = '';
                            } else o ? (a += c) : (s += c);
                        }
                        s &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: yn, value: s })
                                : n.push({ type: yn, value: s }));
                        return n;
                    })(d ? `{{@ split}}${_}{{/}}` : _, t),
                [t, _, d],
            ),
            p = i.useMemo(() => jn(f, h, e.params), [f, h, e.params]),
            g = c(Sn.base, o && Sn.base__fullSize, m.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              l.jsx('p', {
                  ...m,
                  className: g,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: p,
              }))
            : l.jsx('span', { ...m, className: g, children: p });
    });
function Zn({ path: e, count: t, ...n }) {
    return l.jsx(Gn, { text: b.resolve('strings').pluralOrEmpty(e, t), ...n });
}
const Wn = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    qn = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
function Yn(e, t, n) {
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
            r = f(n.className, n.cva),
            s = n.element,
            a = i.forwardRef(function (e, t) {
                return i.createElement(s, { ...('function' == typeof s ? e : Xn(o, e)), ref: t, className: r(e) });
            });
        return ((a.displayName = e), n.cva && (a.cva = n.cva), a);
    }
    const a = f(t, n),
        c = i.forwardRef(function (t, n) {
            return l.jsx('div', { 'data-name': e, ...Xn(o, t), ref: n, className: a(t) });
        });
    return ((c.displayName = e), n && (c.cva = n), c);
}
function Xn(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
const Qn = Yn('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    Kn = i.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: s = !1, silent: o = !1, ...a },
        i,
    ) {
        const c = Vt();
        return l.jsx(Qn, {
            ...a,
            ref: i,
            onMouseEnter: function (e) {
                (s || o || c.play('mouse-enter', { target: r || 'Button', original: e }), null == n || n(e));
            },
            onClick: function (e) {
                s || (o || c.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    Jn = {
        root: 'Button_root_6bcdc8c',
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
    er = i.forwardRef(function (
        {
            children: e,
            size: t = qn.large,
            theme: n = Wn.primary,
            disabled: r = !1,
            silent: s = !1,
            autoAlignContent: o = !0,
            classNames: a,
            className: i,
            ...u
        },
        d,
    ) {
        return l.jsxs(Kn, {
            ...u,
            ref: d,
            silent: s,
            disabled: r,
            className: c(
                Jn.base,
                Jn[`base__size-${t}`],
                Jn[`base__theme-${n}`],
                r ? Jn.base__disabled : Jn.base__enabled,
                i,
                null == a ? void 0 : a.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = u.onClick) || t.call(u, e);
            },
            children: [
                l.jsx('div', { className: c(Jn.background, null == a ? void 0 : a.background) }),
                l.jsx('div', { className: c(Jn.border, null == a ? void 0 : a.border) }),
                l.jsx('div', { className: c(Jn.overlay, null == a ? void 0 : a.overlay) }),
                l.jsx('div', {
                    className: c(Jn.content, o && Jn.content__fontAligned, null == a ? void 0 : a.content),
                    children: e,
                }),
            ],
        });
    });
((er.themes = Wn), (er.sizes = qn));
var tr = ((e) => (
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
    ))(tr || {}),
    nr = ((e) => (
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
    ))(nr || {}),
    rr = ((e) => (
        (e.MULTI = 'multi'),
        (e.CURRENCY = 'currency'),
        (e.PREMIUM_PLUS = 'premium_plus'),
        (e.NUMBER = 'number'),
        (e.STRING = 'string'),
        e
    ))(rr || {}),
    sr = ((e) => (
        (e.ATTACHMENT_RARE = 'rare'),
        (e.ATTACHMENT_EPIC = 'epic'),
        (e.ATTACHMENT_LEGENDARY = 'legendary'),
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
    ))(sr || {}),
    or = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(or || {}),
    ar = ((e) => (
        (e.ATTACHMENT_RARE = 'rare'),
        (e.ATTACHMENT_EPIC = 'epic'),
        (e.ATTACHMENT_LEGENDARY = 'legendary'),
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
    ))(ar || {});
const ir = [
        tr.Items,
        tr.Equipment,
        tr.Xp,
        tr.XpFactor,
        tr.Blueprints,
        tr.BlueprintsAny,
        tr.Goodies,
        tr.Berths,
        tr.Slots,
        tr.Tokens,
        tr.CrewSkins,
        tr.CrewBooks,
        tr.Customizations,
        tr.CreditsFactor,
        tr.TankmenXp,
        tr.TankmenXpFactor,
        tr.FreeXpFactor,
        tr.BattleToken,
        tr.LootBox,
        tr.PremiumUniversal,
        tr.NaturalCover,
        tr.BpCoin,
        tr.BattlePassSelectToken,
        tr.BattlaPassFinalAchievement,
        tr.BattleBadge,
        tr.BonusX5,
        tr.CrewBonusX3,
        tr.EpicSelectToken,
        tr.Comp7TokenWeeklyReward,
        tr.DeluxeGift,
        tr.BattleBoosterGift,
        tr.OptionalDevice,
    ],
    lr = [tr.Gold, tr.Credits, tr.Crystal, tr.FreeXp],
    cr = [tr.BattlePassPoints, tr.EquipCoin],
    ur = [tr.PremiumPlus, tr.Premium],
    dr = (e) =>
        ir.includes(e)
            ? rr.MULTI
            : lr.includes(e)
              ? rr.CURRENCY
              : cr.includes(e)
                ? rr.NUMBER
                : ur.includes(e)
                  ? rr.PREMIUM_PLUS
                  : rr.STRING,
    mr = ['engravings', 'backgrounds'],
    _r = ['engraving', 'background'],
    hr = (e, t = nr.Small) => {
        const { name: n, type: r, value: s, icon: o, item: a, dogTagType: i } = e,
            l = t === nr.S24x24 ? nr.Small : t,
            c = ((e) => {
                switch (e) {
                    case nr.S600x450:
                        return 'c_600x450';
                    case nr.S400x300:
                        return 'c_400x300';
                    case nr.S296x222:
                        return 'c_296x222';
                    case nr.S232x174:
                        return 'c_232x174';
                    case nr.Big:
                        return 'c_80x80';
                    case nr.Small:
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
                    const r = mr[e];
                    if (r) {
                        const s = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                            o = s.$dyn(n);
                        return !o && _r[e] ? `${s.$dyn(_r[e])}` : `${o}`;
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
    fr = (e, t) => ({ args: e, contentId: t }),
    pr = [nr.Small, nr.Big],
    gr = (e, t) => {
        const n = b.resolve('intl');
        if (void 0 === e) return null;
        switch (t) {
            case rr.MULTI: {
                const t = Number(e);
                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
            }
            case rr.CURRENCY:
            case rr.NUMBER:
                return n.formatNumber(n.numberFormats[0] || 'integral', Number(e));
            case rr.PREMIUM_PLUS: {
                const t = Number(e);
                return isNaN(t) ? e : null;
            }
            default:
                return e;
        }
    },
    br = {
        root: 'Reward_root_21f091ec',
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
    xr = b.resolve('images'),
    wr = new Map([
        [nr.S24x24, nr.Small],
        [nr.S48x48, nr.Small],
    ]),
    vr = ({
        name: e,
        image: t,
        isPeriodic: n = !1,
        isFixedBoxSize: r = !0,
        size: s = nr.Big,
        special: o,
        value: a,
        valueType: i,
        title: u,
        style: d,
        className: m,
        classNames: _,
        tooltipArgs: h,
        periodicIconTooltipArgs: f,
    }) => {
        const p = wr.has(s) ? wr.get(s) : s,
            g = ((e, t) => {
                if (void 0 === t || !pr.includes(e)) return null;
                switch (t) {
                    case sr.BATTLE_BOOSTER:
                    case sr.BATTLE_BOOSTER_REPLACE:
                        return or.BATTLE_BOOSTER;
                }
            })(s, o),
            b = ((e) => {
                if (void 0 === e) return null;
                switch (e) {
                    case sr.BATTLE_BOOSTER:
                        return ar.BATTLE_BOOSTER;
                    case sr.BATTLE_BOOSTER_REPLACE:
                        return ar.BATTLE_BOOSTER_REPLACE;
                    case sr.BUILT_IN_EQUIPMENT:
                        return ar.BUILT_IN_EQUIPMENT;
                    case sr.EQUIPMENT_PLUS:
                        return ar.EQUIPMENT_PLUS;
                    case sr.EQUIPMENT_TROPHY_BASIC:
                        return ar.EQUIPMENT_TROPHY_BASIC;
                    case sr.EQUIPMENT_TROPHY_UPGRADED:
                        return ar.EQUIPMENT_TROPHY_UPGRADED;
                    case sr.EQUIPMENT_MODERNIZED_UPGRADED_1:
                        return ar.EQUIPMENT_MODERNIZED_UPGRADED_1;
                    case sr.EQUIPMENT_MODERNIZED_UPGRADED_2:
                        return ar.EQUIPMENT_MODERNIZED_UPGRADED_2;
                    case sr.EQUIPMENT_MODERNIZED_UPGRADED_3:
                        return ar.EQUIPMENT_MODERNIZED_UPGRADED_3;
                    case sr.PROGRESSION_STYLE_UPGRADED_1:
                        return ar.PROGRESSION_STYLE_UPGRADED_1;
                    case sr.PROGRESSION_STYLE_UPGRADED_2:
                        return ar.PROGRESSION_STYLE_UPGRADED_2;
                    case sr.PROGRESSION_STYLE_UPGRADED_3:
                        return ar.PROGRESSION_STYLE_UPGRADED_3;
                    case sr.PROGRESSION_STYLE_UPGRADED_4:
                        return ar.PROGRESSION_STYLE_UPGRADED_4;
                    case sr.PROGRESSION_STYLE_UPGRADED_5:
                        return ar.PROGRESSION_STYLE_UPGRADED_5;
                    case sr.PROGRESSION_STYLE_UPGRADED_6:
                        return ar.PROGRESSION_STYLE_UPGRADED_6;
                    case sr.ATTACHMENT_RARE:
                        return ar.ATTACHMENT_RARE;
                    case sr.ATTACHMENT_EPIC:
                        return ar.ATTACHMENT_EPIC;
                    case sr.ATTACHMENT_LEGENDARY:
                        return ar.ATTACHMENT_LEGENDARY;
                }
            })(o),
            x = gr(a, i),
            w = Ft({
                contentId: (null == h ? void 0 : h.contentId) ?? 0,
                args: null == h ? void 0 : h.args,
                resId: null == h ? void 0 : h.resId,
                decoratorId: null == h ? void 0 : h.decoratorId,
            }),
            v = At({ header: null == f ? void 0 : f.header, body: null == f ? void 0 : f.body });
        return l.jsxs('div', {
            className: c(br.base, br[`base__${s}`], !r && br.base__dynamicBox, m),
            style: d,
            ...w,
            children: [
                l.jsxs(l.Fragment, {
                    children: [
                        l.jsxs('div', {
                            className: c(
                                br.image,
                                r ? br.image__fixedBox : br[`image__${s}`],
                                null == _ ? void 0 : _.image,
                            ),
                            children: [
                                g &&
                                    l.jsx('div', {
                                        className: c(br.highlight, null == _ ? void 0 : _.highlight),
                                        style: {
                                            backgroundImage: `url(${xr.readOrEmpty(`quests.bonuses.${p}.${g}_highlight`)})`,
                                        },
                                    }),
                                t &&
                                    l.jsx('div', {
                                        className: c(br.icon, null == _ ? void 0 : _.rewardIcon),
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                b &&
                                    l.jsx('div', {
                                        className: c(br.overlay, null == _ ? void 0 : _.overlay),
                                        style: {
                                            backgroundImage: `url(${xr.readOrEmpty(`quests.bonuses.${p}.${b}_overlay`)})`,
                                        },
                                    }),
                            ],
                        }),
                        x &&
                            l.jsx('div', {
                                className: c(
                                    br.info,
                                    br[`info__${e}`],
                                    i === rr.MULTI && br.info__multi,
                                    null == _ ? void 0 : _.info,
                                ),
                                children: x,
                            }),
                        u && l.jsx('div', { className: br.title, children: u }),
                    ],
                }),
                n && l.jsx('div', { className: c(br.timer, null == _ ? void 0 : _.periodicIcon), ...v }),
            ],
        });
    },
    Er = { lightTank: 'lightTank', mediumTank: 'mediumTank', heavyTank: 'heavyTank', SPG: 'SPG', 'AT-SPG': 'AT-SPG' },
    yr = Object.values(Er),
    Cr = (e) => yr.includes(e),
    Rr = 'assault',
    Sr = 'sniper',
    Lr = 'support',
    Tr = 'universal',
    Nr = 'break',
    Br = 'wheeled',
    Dr = () => {};
function Mr(e) {
    const t = e;
    return i.forwardRef(function (e, n) {
        const r = ft(e, e.adaptive),
            { path: s, ...o } = r,
            a = r.images ?? b.resolve('images'),
            i = { ...o, ref: n };
        {
            const e = s ? a.readOr(s, Dr, 'warn') : void 0;
            return e ? l.jsx(t, { ...i, src: e }) : l.jsx(t, { ...i, unknown: !0 });
        }
    });
}
const Pr = {
    background:
        'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
    backgroundSize: '20rem 20rem',
    backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
    backgroundColor: '#000',
};
i.forwardRef(function (e, t) {
    if (!e.src) {
        const {
            repeat: n,
            fit: r,
            position: s,
            width: o,
            src: a,
            height: i,
            unselectable: c,
            unknownStyle: u = Pr,
            ...d
        } = e;
        return l.jsx('div', { ...d, ref: t, style: { width: e.width, height: e.height, ...u, ...e.style } });
    }
    const { repeat: n, fit: r, position: s, width: o, height: a, unknownStyle: i, unselectable: c, ...u } = e;
    return l.jsx('div', {
        ...u,
        ref: t,
        style: {
            backgroundImage: `url(${e.src})`,
            backgroundRepeat: n ?? 'no-repeat',
            backgroundSize: r ?? 'contain',
            backgroundPosition: s ?? 'center center',
            width: 'number' == typeof o ? `${o}rem` : o,
            height: 'number' == typeof a ? `${a}rem` : a,
            ...u.style,
        },
    });
});
const kr = Mr(
    i.forwardRef(function (e, t) {
        if (e.unknown) {
            const {
                repeat: n,
                fit: r,
                position: s,
                width: o,
                src: a,
                height: i,
                unselectable: c,
                unknown: u,
                unknownStyle: d = Pr,
                ...m
            } = e;
            return l.jsx('div', { ...m, ref: t, style: { width: e.width, height: e.height, ...d, ...e.style } });
        }
        const {
            repeat: n,
            fit: r,
            position: s,
            width: o,
            height: a,
            unknownStyle: i,
            unknown: c,
            unselectable: u,
            ...d
        } = e;
        return l.jsx('div', {
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
Mr(
    i.forwardRef(function (e, t) {
        const { width: n, height: r, src: s, unselectable: o, unknown: a, unknownStyle: i = Pr, ...c } = e;
        return e.unknown
            ? l.jsx('div', { ...c, style: { width: e.width, height: e.height, ...i } })
            : l.jsx('img', { ...c, ref: t, src: s, width: n, height: r });
    }),
);
const Fr = 'VehicleLevel_3c938122',
    Ar = { arabic: 'arabic', roman: 'roman' };
const Ir = i.forwardRef(function ({ value: e, numberType: t, ...n }, r) {
    const s = (function (e, t) {
            return e || (t ? Ar.arabic : Ar.roman);
        })(
            t,
            (function () {
                const e = b.resolve('strings');
                return $t.includes(e.readOrEmpty('settings.LANGUAGE_CODE'));
            })(),
        ),
        o =
            s === Ar.roman
                ? (function (e) {
                      if (e <= 10) return We[e] ?? String(e);
                      let t = '';
                      for (let n = Ze.length - 1; n >= 0; n--) {
                          let r = Ze[n];
                          for (; void 0 !== r && e >= r; ) ((t += Ge[n]), (e -= r));
                      }
                      return t;
                  })(e)
                : e;
    return l.jsx('div', { ...n, 'data-name': 'VehicleLevel', className: c(Fr, n.className), ref: r, children: o });
});
Ir.numberTypes = Ar;
const $r = 'prestige',
    Or = 'short',
    jr = 'medium',
    Hr = 'long',
    Ur = (e) => (e < 10 ? Or : e < 100 ? jr : Hr),
    zr = (e, t, n) => (t === $r ? $r : `${t}.${Ur(e)}.c_${n}`),
    Vr = {
        root: 'VehiclePrestigeLevel_root_4426b46c',
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
function Gr({ level: e, grade: t, type: n, direction: r, classNames: s, ...o }) {
    return e < 1
        ? null
        : l.jsxs('div', {
              ...o,
              className: c(Vr.base, Vr[`base__${n}`], Vr[`base__${r}`], o.className, null == s ? void 0 : s.base),
              children: [
                  l.jsx(kr, {
                      path: `prestige.tab.${zr(e, n, t)}`,
                      className: c(Vr.icon, null == s ? void 0 : s.icon),
                  }),
                  n !== $r &&
                      l.jsx('div', {
                          className: c(Vr.level, Vr[`level__${Ur(e)}`], null == s ? void 0 : s.level),
                          children: e,
                      }),
              ],
          });
}
Gr.direction = { left: 'left', right: 'right' };
const Zr = {
        [`${Rr}_x16x16`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M8 1L1 6.03876L3.67531 14H12.3247L15 6.03876L8 1ZM10.5 11.5H5.5L4 7L8 4L12 7L10.5 11.5Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Nr}_x16x16`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', { d: 'M8 2L15 9H11L8 6L5 9H1L8 2Z', fill: '#FFB34D' }),
                i.createElement('path', { d: 'M11 11L8 8L5 11V14L8 11L11 14V11Z', fill: '#FFB34D' }),
            ),
        [`${Sr}_x16x16`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', { d: 'M9 8L10 9H14V7H10L9 8Z', fill: '#FFB34D' }),
                i.createElement('path', { d: 'M7 8L6 9H2V7H6L7 8Z', fill: '#FFB34D' }),
                i.createElement('path', { d: 'M8 9L7 10V14H9V10L8 9Z', fill: '#FFB34D' }),
                i.createElement('path', { d: 'M8 7L7 6V2H9V6L8 7Z', fill: '#FFB34D' }),
            ),
        [`${Lr}_x16x16`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M3 5V8.40002L2.80001 8.10004L2.20001 9.00005H1V3H2.20001L2.80002 4.00001L3.40002 3H8.80006C9.61885 3 10.7815 4.12547 11.5618 5.00075C11.55 5.00025 11.5382 5 11.5263 5H6.47368L5.89474 6L5.31579 5H3ZM6.39951 11.9999H11.7996C13.0298 11.9999 15.3996 9.01318 15.3996 9.01318C15.3996 9.01318 13.1393 5.99989 11.7996 5.99989H6.39951L5.79951 6.9999L5.1995 5.99989H3.99949V11.9999H5.1995L5.79951 11.0999L6.39951 11.9999Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Tr}_x16x16`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M4.79109 7.99164C4.79109 6.22006 6.22841 4.79109 7.99164 4.79109C8.45961 4.79109 8.90251 4.89972 9.30362 5.07521L11.1504 2.90251C10.2312 2.33426 9.1532 2 7.99164 2C4.68245 2 2 4.68245 2 8C2 9.50418 2.55153 10.8747 3.47075 11.9276L5.32591 9.75487C4.99164 9.25348 4.79944 8.65181 4.79944 8L4.79109 7.99164ZM12.6295 4.18941L10.7493 6.38719C11.0251 6.86351 11.2006 7.40669 11.2006 8C11.2006 9.77159 9.76323 11.2006 8 11.2006C7.59053 11.2006 7.19777 11.117 6.83844 10.9749L4.96657 13.1727C5.86072 13.6992 6.88858 14 8 14C11.3175 14 14 11.3175 14 8C14 6.55432 13.4903 5.22563 12.6295 4.18941Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Br}_x16x16`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M7 8C7 9.65685 5.65685 11 4 11C2.34315 11 1 9.65685 1 8C1 6.34315 2.34315 5 4 5C5.65685 5 7 6.34315 7 8Z',
                    fill: '#FFB34D',
                }),
                i.createElement('path', {
                    d: 'M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Rr}_x24x24`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M12 3L3 9.58915L6.43968 20H17.5603L21 9.58915L12 3ZM15 17H9L7 11L12 7.5L17 11L15 17Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Nr}_x24x24`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', { d: 'M12 3L21 12H16L12 8L8 12H3L12 3Z', fill: '#FFB34D' }),
                i.createElement('path', { d: 'M16 15L12 11L8 15V19L12 15L16 19V15Z', fill: '#FFB34D' }),
            ),
        [`${Sr}_x24x24`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', { d: 'M10 3V8L12 10L14 8V3H10Z', fill: '#FFB34D' }),
                i.createElement('path', { d: 'M10 21V16L12 14L14 16V21H10Z', fill: '#FFB34D' }),
                i.createElement('path', { d: 'M8 14H3V10H8L10 12L8 14Z', fill: '#FFB34D' }),
                i.createElement('path', { d: 'M21 14H16L14 12L16 10H21V14Z', fill: '#FFB34D' }),
            ),
        [`${Lr}_x24x24`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M6 8V12.2364L5.46667 13H4V6H5.46667L6.2 7.16667L6.93333 6H13.5333C14.712 6 16.4737 7.82156 17.3683 8.84226C16.7413 8.35641 16.1028 8 15.5789 8H10.4211L9.68421 9.16667L8.94737 8H6ZM10.9474 17H17.5789C19.0897 17 22 13.5155 22 13.5155C22 13.5155 19.2242 10 17.5789 10H10.9474L10.2105 11.1667L9.47368 10H8V17H9.47368L10.2105 15.95L10.9474 17Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Tr}_x24x24`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M7.72145 11.9889C7.72145 9.62674 9.63788 7.72145 11.9889 7.72145C12.6128 7.72145 13.2033 7.8663 13.7382 8.10028L16.2006 5.20334C14.9749 4.44568 13.5376 4 11.9889 4C7.5766 4 4 7.5766 4 12C4 14.0056 4.73538 15.8329 5.961 17.2368L8.43454 14.3398C7.98886 13.6713 7.73259 12.8691 7.73259 12L7.72145 11.9889ZM18.1727 6.91922L15.6657 9.84958C16.0334 10.4847 16.2674 11.2089 16.2674 12C16.2674 14.3621 14.351 16.2674 12 16.2674C11.454 16.2674 10.9304 16.156 10.4513 15.9666L7.95543 18.8969C9.14763 19.5989 10.5181 20 12 20C16.4234 20 20 16.4234 20 12C20 10.0724 19.3203 8.30084 18.1727 6.91922Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Br}_x24x24`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M11 12C11 14.2091 9.20914 16 7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C9.20914 8 11 9.79086 11 12Z',
                    fill: '#FFB34D',
                }),
                i.createElement('path', {
                    d: 'M21 12C21 14.2091 19.2091 16 17 16C14.7909 16 13 14.2091 13 12C13 9.79086 14.7909 8 17 8C19.2091 8 21 9.79086 21 12Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Rr}_x32x32`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M16.5914 5.76714C16.2395 5.50928 15.7611 5.50928 15.4092 5.76714L5.65573 12.9145C5.30611 13.1707 5.16135 13.623 5.29721 14.0346L9.02038 25.3139C9.15564 25.7237 9.53848 26.0005 9.96998 26.0005H22.0306C22.4621 26.0005 22.8449 25.7237 22.9802 25.3139L26.7033 14.0346C26.8392 13.623 26.6944 13.1707 26.3448 12.9145L16.5914 5.76714ZM20.2642 22.8457L19.5741 22.1309H12.3525L11.6378 22.8457L12.143 21.7858L9.97409 15.1188L8.97588 14.6382L10.3931 14.7615L15.7292 10.8919L15.9633 9.56094L16.2344 10.9042L21.5335 14.7615L22.9384 14.6259L21.9525 15.1188L19.7959 21.7489L20.2765 22.8333L20.2642 22.8457Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Nr}_x32x32`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M15.6464 5.35355C15.8417 5.15829 16.1583 5.15829 16.3536 5.35355L28 17H22.1988C22.0711 17 21.9483 16.9512 21.8555 16.8635L16.3433 11.6576C16.1506 11.4756 15.8494 11.4756 15.6567 11.6576L10.1445 16.8635C10.0517 16.9512 9.92888 17 9.80121 17H4L15.6464 5.35355Z',
                    fill: '#FFB34D',
                }),
                i.createElement('path', {
                    d: 'M22 20.8738C22 20.7412 21.9473 20.614 21.8536 20.5203L16.3536 15.0203C16.1583 14.825 15.8417 14.825 15.6464 15.0203L10.1464 20.5203C10.0527 20.614 10 20.7412 10 20.8738V27L15.6464 21.3536C15.8417 21.1583 16.1583 21.1583 16.3536 21.3536L22 27V20.8738Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Sr}_x32x32`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M16.0003 13L13 10V3.5C13 3.22386 13.2239 3 13.5 3H18.5C18.7761 3 19 3.22386 19 3.5V10L16.0003 13Z',
                    fill: '#FFB34D',
                }),
                i.createElement('path', {
                    d: 'M16.0003 19L13 22V28.5C13 28.7761 13.2239 29 13.5 29H18.5C18.7761 29 19 28.7761 19 28.5V22L16.0003 19Z',
                    fill: '#FFB34D',
                }),
                i.createElement('path', {
                    d: 'M22 13L19 16L22 19H28.5C28.7761 19 29 18.7761 29 18.5V13.5C29 13.2239 28.7761 13 28.5 13H22Z',
                    fill: '#FFB34D',
                }),
                i.createElement('path', {
                    d: 'M13 15.9998L10 13H3.5C3.22386 13 3 13.2239 3 13.5L3.00005 18.5C3.00005 18.7761 3.22391 19 3.50005 19H10L13 15.9998Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Lr}_x32x32`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M7 11.5V16.9014C6.84147 16.9014 6.68293 16.9756 6.58398 17.124L6.14843 17.7774C6.0557 17.9164 5.89959 18 5.73241 18H4.5C4.22386 18 4 17.7761 4 17.5V8.5C4 8.22386 4.22386 8 4.5 8H5.7169C5.89254 8 6.05529 8.09215 6.14565 8.24275L6.57125 8.95209C6.76546 9.27576 7.23455 9.27576 7.42875 8.95209L7.85435 8.24275C7.94471 8.09215 8.10746 8 8.2831 8H17C18.591 8 20.9608 10.5496 22.1919 12.0156C21.4185 11.4193 20.6452 11 20 11H13.2831C13.1075 11 12.9447 11.0921 12.8543 11.2428L12.4287 11.9521C12.2345 12.2758 11.7655 12.2758 11.5713 11.9521L11.1457 11.2428C11.0553 11.0921 10.8925 11 10.7169 11H7.5C7.22386 11 7 11.2239 7 11.5ZM13.2676 23H22C24.0503 23 28 18.0221 28 18.0221C28 18.0221 24.2329 13 22 13H13.2831C13.1075 13 12.9447 13.0921 12.8543 13.2428L12.4287 13.9521C12.2345 14.2758 11.7655 14.2758 11.5713 13.9521L11.1457 13.2428C11.0553 13.0921 10.8925 13 10.7169 13H9.5C9.22386 13 9 13.2239 9 13.5V22.5C9 22.7761 9.22386 23 9.5 23H10.7324C10.8996 23 11.0557 22.9164 11.1484 22.7774L11.584 22.124C11.7819 21.8272 12.2181 21.8272 12.416 22.124L12.8516 22.7774C12.9443 22.9164 13.1004 23 13.2676 23Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Tr}_x32x32`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M10.6518 15.9861C10.6518 13.0334 13.0474 10.6518 15.9861 10.6518C16.766 10.6518 17.5042 10.8329 18.1727 11.1253L21.2507 7.50418C19.7187 6.5571 17.922 6 15.9861 6C10.4708 6 6 10.4708 6 16C6 18.507 6.91922 20.7911 8.45125 22.546L11.5432 18.9248C10.9861 18.0891 10.6657 17.0864 10.6657 16L10.6518 15.9861ZM23.7159 9.64902L20.5822 13.312C21.0418 14.1058 21.3343 15.0111 21.3343 16C21.3343 18.9526 18.9387 21.3343 16 21.3343C15.3175 21.3343 14.663 21.195 14.0641 20.9582L10.9443 24.6212C12.4345 25.4986 14.1476 26 16 26C21.5292 26 26 21.5292 26 16C26 13.5905 25.1504 11.376 23.7159 9.64902Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Br}_x32x32`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 32,
                    height: 32,
                    viewBox: '0 0 32 32',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M14 16C14 18.7614 11.7614 21 9 21C6.23858 21 4 18.7614 4 16C4 13.2386 6.23858 11 9 11C11.7614 11 14 13.2386 14 16Z',
                    fill: '#FFB34D',
                }),
                i.createElement('path', {
                    d: 'M28 16C28 18.7614 25.7614 21 23 21C20.2386 21 18 18.7614 18 16C18 13.2386 20.2386 11 23 11C25.7614 11 28 13.2386 28 16Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Rr}_x48x48`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M24.591 8.43413C24.2391 8.17627 23.7607 8.17627 23.4088 8.43413L8.18991 19.5867C7.84029 19.8429 7.69553 20.2951 7.83139 20.7067L13.6434 38.3142C13.7786 38.7239 14.1615 39.0007 14.593 39.0007H33.4069C33.8384 39.0007 34.2212 38.7239 34.3565 38.3142L40.1685 20.7067C40.3043 20.2951 40.1596 19.8429 39.8099 19.5867L24.591 8.43413ZM30.3958 34.2685L29.3606 33.1964H18.5283L17.4561 34.2685L18.214 32.6788L14.9606 22.6783L13.4633 21.9573L15.5891 22.1422L23.5932 16.3378L23.9445 14.3414L24.3511 16.3563L32.2998 22.1422L34.4071 21.9388L32.9283 22.6783L29.6934 32.6233L30.4143 34.25L30.3958 34.2685Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Nr}_x48x48`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M23.2929 8.70711C23.6834 8.31658 24.3166 8.31658 24.7071 8.70711L42 26H33.4142C33.149 26 32.8946 25.8946 32.7071 25.7071L24.7071 17.7071C24.3166 17.3166 23.6834 17.3166 23.2929 17.7071L15.2929 25.7071C15.1054 25.8946 14.851 26 14.5858 26H6L23.2929 8.70711Z',
                    fill: '#FFB34D',
                }),
                i.createElement('path', {
                    d: 'M33 31.4142C33 31.149 32.8946 30.8946 32.7071 30.7071L24.7071 22.7071C24.3166 22.3166 23.6834 22.3166 23.2929 22.7071L15.2929 30.7071C15.1054 30.8946 15 31.149 15 31.4142V40L23.2929 31.7071C23.6834 31.3166 24.3166 31.3166 24.7071 31.7071L33 40V31.4142Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Sr}_x48x48`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M24 20.5L20 16.4V7.7C20 7.3134 20.3134 7 20.7 7H27.3C27.6866 7 28 7.3134 28 7.7V16.4L24 20.5Z',
                    fill: '#FFB34D',
                }),
                i.createElement('path', {
                    d: 'M24 27.5L20 31.6V40.3C20 40.6866 20.3134 41 20.7 41H27.3C27.6866 41 28 40.6866 28 40.3V31.6L24 27.5Z',
                    fill: '#FFB34D',
                }),
                i.createElement('path', {
                    d: 'M31.4 20L27.5 24L31.4 28H40.3C40.6866 28 41 27.6866 41 27.3V20.7C41 20.3134 40.6866 20 40.3 20L31.4 20Z',
                    fill: '#FFB34D',
                }),
                i.createElement('path', {
                    d: 'M20.5 24L16.6 20L7.7 20C7.3134 20 7 20.3134 7 20.7V27.3C7 27.6866 7.3134 28 7.7 28H16.6L20.5 24Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Lr}_x48x48`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M33.4476 34H20C19.6852 34 19.3889 33.8518 19.2 33.6L18.8 33.0667C18.4 32.5333 17.6 32.5333 17.2 33.0667L16.8 33.6C16.6111 33.8518 16.3148 34 16 34H15C14.4477 34 14 33.5523 14 33V21C14 20.4477 14.4477 20 15 20H16C16.3148 20 16.6111 20.1482 16.8 20.4L17.2007 20.9343C17.6005 21.4673 18.4 21.4677 18.8002 20.935L19.2 20.4029C19.3889 20.1515 19.685 20.0036 19.9995 20.0036H33.4476C36.797 20.0036 42 27.0332 42 27.0332C42 27.0332 36.5231 34 33.4476 34ZM18.8 16.9333C18.4 17.4667 17.6 17.4667 17.2 16.9333L16.8 16.4C16.6111 16.1482 16.3148 16 16 16H11C10.4477 16 10 16.4477 10 17V23.6667C10 23.883 9.92982 24.0936 9.8 24.2667L8.79646 25.6047C8.6096 25.8539 8.31733 26.0017 8.00591 26.0047L7.00945 26.0141C6.4535 26.0193 6 25.5701 6 25.0141V13C6 12.4477 6.44772 12 7 12H7.95334C8.29399 12 8.61121 12.1734 8.79511 12.4602L9.15823 13.0264C9.55171 13.6399 10.4483 13.6399 10.8418 13.0264L11.2049 12.4602C11.3888 12.1734 11.706 12 12.0467 12H25.0638C26.8964 12 29.3189 14.119 31.1094 16.0382L20.0021 16.0017C19.6861 16.0006 19.3883 16.1489 19.1988 16.4016L18.8 16.9333Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Tr}_x48x48`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M15.9777 23.9791C15.9777 19.5501 19.571 15.9777 23.9791 15.9777C25.149 15.9777 26.2563 16.2493 27.2591 16.688L31.876 11.2563C29.578 9.83565 26.883 9 23.9791 9C15.7061 9 9 15.7061 9 24C9 27.7604 10.3788 31.1866 12.6769 33.8189L17.3148 28.3872C16.4791 27.1337 15.9986 25.6295 15.9986 24L15.9777 23.9791ZM35.5738 14.4735L30.8733 19.968C31.5627 21.1588 32.0014 22.5167 32.0014 24C32.0014 28.429 28.4081 32.0014 24 32.0014C22.9763 32.0014 21.9944 31.7925 21.0961 31.4373L16.4164 36.9318C18.6518 38.2479 21.2214 39 24 39C32.2939 39 39 32.2939 39 24C39 20.3858 37.7256 17.0641 35.5738 14.4735Z',
                    fill: '#FFB34D',
                }),
            ),
        [`${Br}_x48x48`]: (e) =>
            i.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                i.createElement('path', {
                    d: 'M21 24C21 28.4183 17.4183 32 13 32C8.58172 32 5 28.4183 5 24C5 19.5817 8.58172 16 13 16C17.4183 16 21 19.5817 21 24Z',
                    fill: '#FFB34D',
                }),
                i.createElement('path', {
                    d: 'M43 24C43 28.4183 39.4183 32 35 32C30.5817 32 27 28.4183 27 24C27 19.5817 30.5817 16 35 16C39.4183 16 43 19.5817 43 24Z',
                    fill: '#FFB34D',
                }),
            ),
    },
    Wr = {
        root: 'VehicleRole_root_741b56a9',
        base: 'VehicleRole_e70537d3',
        base__x16x16: 'VehicleRole_base__x16x16_f444f190',
        base__x24x24: 'VehicleRole_base__x24x24_cc02d077',
        base__x32x32: 'VehicleRole_base__x32x32_2180a099',
        base__x48x48: 'VehicleRole_base__x48x48_2a01e86c',
        icon: 'VehicleRole_icon_7f7f6256',
    },
    qr = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48' },
    Yr = i.forwardRef(function ({ roleKey: e, size: t = qr.x24x24, classNames: n, ...r }, s) {
        const o = Zr[`${e}_${t}`];
        if (o)
            return l.jsx('div', {
                ...r,
                ref: s,
                className: c(Wr.base, Wr[`base__${t}`], null == n ? void 0 : n.base),
                children: l.jsx(o, { className: c(Wr.icon, null == n ? void 0 : n.icon) }),
            });
        console.error(`Unknown vehicle role type ${e} with size ${t}`);
    });
Yr.sizes = qr;
const Xr = { x24x24: 'x24x24', x48x48: 'x48x48', x64x64: 'x64x64', x96x96: 'x96x96' },
    Qr = { x24x24: 'x64x64', x48x48: 'x96x96', x64x64: 'x96x96', x96x96: 'x96x96' },
    Kr = {
        [Er.lightTank]: 'light_tank',
        [Er.mediumTank]: 'medium_tank',
        [Er.heavyTank]: 'heavy_tank',
        [Er.SPG]: 'spg',
        [Er['AT-SPG']]: 'tank_destroyer',
    },
    Jr = {
        root: 'VehicleType_root_4e0d61e4',
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
    es = i.forwardRef(function ({ type: e, size: t = Xr.x48x48, premium: n = !1, fit: r = 'contain', ...s }, o) {
        const a = pt(Xr[t], Qr[t]);
        return l.jsx(kr, {
            ...s,
            ref: o,
            fit: r,
            className: c(Jr.base, n ? Jr[`base__premium__${t}`] : Jr[`base__${t}`], s.className),
            path: `ui_kit.vehicle_type.${a}.${n ? 'premium_' : ''}${K(Kr[e])}_${a}`,
        });
    });
((es.types = Er), (es.sizes = Xr));
const ts = 'VehicleInfo_1732f1f0',
    ns = Yn('VehicleName', 'VehicleInfo_name_3989ca04', {
        variants: { premium: { true: 'VehicleInfo_name__premium_258b3b93' } },
    }),
    rs = i.forwardRef(function (e, t) {
        return l.jsx('div', { ...e, ref: t, className: c(ts, e.className) });
    });
((rs.Prestige = Gr), (rs.Level = Ir), (rs.Type = es), (rs.Name = ns), (rs.Role = Yr));
const ss = i.createContext(void 0);
function os() {
    const e = i.useContext(ss);
    if (!e) throw new Error('useHorizontalScroll must be used within a Scroll.Horizontal.Base component');
    return e;
}
var as = ((e) => ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e))(as || {});
const is = {
        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
        animationConfig: { tension: 170, friction: 26 },
    },
    ls = (({
        getContainerSize: e,
        getBounds: t,
        setScrollPosition: n,
        getDirection: r,
        getWrapperSize: s,
        triggerMouseMoveOnUpdate: o = !1,
    }) => {
        const a = (e, n) => {
            const [r, s] = t(e);
            return De(r, s, n);
        };
        return (l = {}) => {
            const { settings: c = is } = l,
                [u, d] = i.useState(!1),
                m = i.useRef(null),
                _ = i.useRef(null),
                h = i.useRef({ wrapper: 0, container: 0 }),
                f = i.useMemo(() => {
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
                }, []),
                g = (function (e, t, n) {
                    const r = i.useMemo(() => gt(n, e), t);
                    return (i.useEffect(() => r.cancel, [r]), r);
                })(
                    () => {
                        viewEnv.forceTriggerMouseMove();
                    },
                    [],
                    150,
                ),
                [b, x] = p(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = m.current;
                        t && (n(t, e), f.trigger('change', e));
                    },
                    onRest: (e) => f.trigger('rest', e),
                    onStart: (e) => f.trigger('start', e),
                    onPause: (e) => f.trigger('pause', e),
                })),
                w = i.useCallback(
                    (e, t, n) => {
                        const r = b.scrollPosition.get(),
                            s = (b.scrollPosition.goal ?? 0) - r;
                        return a(e, t * n + s + r);
                    },
                    [b.scrollPosition],
                ),
                v = i.useCallback(
                    function (e, { immediate: t = !1, reset: n = !0 } = {}) {
                        const r = m.current;
                        if (!r) return;
                        const s = a(r, e);
                        b.scrollPosition.goal !== s &&
                            x.start({
                                scrollPosition: s,
                                immediate: t,
                                reset: n,
                                config: c.animationConfig,
                                from: { scrollPosition: a(r, b.scrollPosition.get()) },
                                onChange: () => {
                                    o && g();
                                },
                            });
                    },
                    [b.scrollPosition, x, c.animationConfig, g],
                ),
                E = i.useCallback(
                    function (e) {
                        const t = m.current,
                            n = _.current;
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
                        v(o);
                    },
                    [v, w, c.step],
                ),
                y = i.useCallback(
                    function (e) {
                        u ||
                            (0 !== e.deltaY && E(r(e)),
                            m.current && f.trigger('mouseWheel', e, b.scrollPosition, t(m.current)));
                    },
                    [b.scrollPosition, E, f, u],
                ),
                C = i.useCallback(
                    function () {
                        const e = m.current;
                        e && (v(a(e, b.scrollPosition.goal), { immediate: !0 }), f.trigger('resizeHandled'));
                    },
                    [v, b.scrollPosition.goal, f],
                );
            Nt(_, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = s(t);
                h.current.wrapper !== n && C();
            });
            const R = wt(function () {
                    const t = m.current;
                    if (!t) return;
                    const n = e(t),
                        r = _.current ? s(_.current) : 0;
                    if (h.current.container !== n || h.current.wrapper !== r) {
                        const e = a(t, b.scrollPosition.goal);
                        (e !== b.scrollPosition.goal && v(e, { immediate: !0 }),
                            (h.current.container = n),
                            (h.current.wrapper = r),
                            f.trigger('recalculateContent'));
                    }
                }),
                S = Dt();
            i.useEffect(() => {
                return (
                    (e = window),
                    (t = 'resize'),
                    (n = () => S.run(C)),
                    e.addEventListener(t, n, r),
                    () => e.removeEventListener(t, n, r)
                );
                var e, t, n, r;
            }, [C, S]);
            return i.useMemo(
                () => ({
                    getWrapperSize: () => (_.current ? s(_.current) : void 0),
                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                    getBounds: () =>
                        m.current ? t(m.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: c.step.clampedArrowStepTimeout,
                    settings: c,
                    clampPosition: a,
                    handleMouseWheel: y,
                    applyScroll: v,
                    applyStepTo: E,
                    contentRef: m,
                    wrapperRef: _,
                    scrollPosition: x,
                    animationScroll: b,
                    recalculateContent: R,
                    disabled: u,
                    setDisabled: d,
                    events: { on: f.on, off: f.off },
                }),
                [c, y, v, E, x, b, R, u, d, f.on, f.off],
            );
        };
    })({
        getBounds: (e) => {
            var t;
            return [0, e.offsetWidth - ((null == (t = e.parentElement) ? void 0 : t.offsetWidth) ?? 0)];
        },
        getContainerSize: (e) => e.offsetWidth,
        getWrapperSize: (e) => e.offsetWidth,
        setScrollPosition: (e, t) => {
            e.style.transform = `translateX(-${0 | (t.value.scrollPosition ?? 0)}px)`;
        },
        getDirection: (e) => (e.deltaY > 1 ? as.Next : as.Prev),
        triggerMouseMoveOnUpdate: !0,
    }),
    cs = { horizontal: 'horizontal', vertical: 'vertical' },
    us = {
        root: 'Thumb_root_830942bb',
        background: 'Thumb_background_7f3dd6ac',
        border: 'Thumb_border_5749138b',
        innerBorder: 'Thumb_innerBorder_42bafd18',
        icon: 'Thumb_icon_dca8bf26',
        base: 'Thumb_6ff3e706',
        base__vertical: 'Thumb_base__vertical_55a67c91',
        base__horizontal: 'Thumb_base__horizontal_27ca7ace',
        base__active: 'Thumb_base__active_830942bb',
    },
    ds = 'forwardDisabled',
    ms = 'backwardDisabled';
function _s(e) {
    const t = i.useRef(null),
        [n, r] = i.useState(!1),
        s = wt(function () {
            const n = t.current,
                r = e.trackRef.current,
                s = e.api.getWrapperSize(),
                o = e.api.getContainerSize();
            if (!(s && o && n && r)) return;
            const a = Math.min(1, s / o),
                i = 'horizontal' === e.direction ? 'width' : 'height';
            return ((n.style[i] = `${e.calculateSize(r, a)}px`), (n.style.display = 'flex'), a);
        }),
        [o, a] = p(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: P.easeInCubic,
            config: { duration: 200 },
        }));
    i.useEffect(() => {
        n || e.dragging
            ? a.start({
                  to: e.styles.opened,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.add(us.base__active);
                  },
              })
            : a.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.remove(us.base__active);
                  },
              });
    }, [n, e.dragging, e.styles.closed, e.styles.opened, a]);
    const u = wt(function () {
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
                m = De(0, 1, u / (c - l)),
                _ = e.calculateSize(r, d),
                h = (('horizontal' === e.direction ? r.offsetWidth : r.offsetHeight) - _) * m || 0,
                f = Math.round(2 * (2 * m - 1));
            (s.style.setProperty('--thumbOffset', `${h}px`),
                null == (n = e.onUpdate) || n.call(e, { thumbSize: _, thumbOffset: h, newBouncingCorrection: f }));
            const p = 0 === h || e.isBoundThumb(h) ? 0 : f;
            return (
                a.start({
                    to: { '--bouncingCorrection': `${p}px` },
                    ...(0 === p ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                h
            );
        }),
        d = Dt(),
        m = wt(function () {
            s();
            const t = u();
            'number' == typeof t &&
                (function (e, t) {
                    if (!e.trackRef.current || !e.thumbRef.current) return;
                    const n = e.trackRef.current.parentNode;
                    if (n instanceof HTMLElement) {
                        if (0 === t) return (n.classList.add(ms), void n.classList.remove(ds));
                        if (e.isBoundThumb(t)) return (n.classList.remove(ms), void n.classList.add(ds));
                        (n.classList.remove(ms), n.classList.remove(ds));
                    }
                })(e, t);
        });
    i.useEffect(() => d.run(m));
    const { api: _ } = e;
    return (
        i.useEffect(() => {
            function e() {
                d.run(m);
            }
            return (
                _.events.on('recalculateContent', e),
                _.events.on('rest', m),
                _.events.on('change', m),
                _.events.on('resizeHandled', e),
                () => {
                    (_.events.off('recalculateContent', e),
                        _.events.off('rest', m),
                        _.events.off('change', m),
                        _.events.off('resizeHandled', e));
                }
            );
        }, [_, d, m]),
        l.jsxs(g.div, {
            ref: rn([t, e.thumbRef]),
            className: c(us.base, us[`base__${e.direction}`], e.className),
            style: o,
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: [
                l.jsx('div', { className: us.background }),
                l.jsx('div', { className: us.border }),
                l.jsx('div', { className: us.innerBorder }),
                l.jsx('div', { className: us.icon }),
            ],
        })
    );
}
const hs = { pending: !1, offset: 0 };
function fs(e, t, n, r, s) {
    const [o, a] = i.useState(hs),
        l = wt(t),
        c = i.useCallback(
            (t) => {
                (a(t), e.current && l({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [l, e],
        );
    return (
        i.useEffect(() => {
            if (!o.pending) return;
            const t = oe.move(function ([t]) {
                    const a = n.contentRef.current;
                    if (!a) return;
                    const i = r.current,
                        c = e.current;
                    if (!a || !i || !c) return;
                    const u = s(t, o, { parent: i, thumb: c }),
                        d = u * (n.getContainerSize() ?? 0);
                    (n.scrollPosition.start({
                        scrollPosition: n.clampPosition(a, d),
                        reset: !0,
                        immediate: !0,
                        from: { scrollPosition: n.animationScroll.scrollPosition.get() },
                    }),
                        l({ type: 'dragging', dragElement: c, elementOffset: u, contentOffset: d }));
                }),
                a = oe.up(() => {
                    c(hs);
                });
            return () => {
                (t(), a());
            };
        }, [n, o.offset, o.pending, l, c, e, r, o, s]),
        c
    );
}
const ps = 'disable',
    gs = 'scroll-active';
function bs({ api: e, baseRef: t }) {
    const n = Dt(),
        r = wt(function () {
            const n = e.getWrapperSize(),
                r = e.getContainerSize();
            if (null === t.current || void 0 === r || void 0 === n) return;
            1 === Math.min(1, n / r || 1) ? t.current.classList.remove(gs) : t.current.classList.add(gs);
        });
    (i.useEffect(() => n.run(r)),
        i.useEffect(() => {
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
function xs(e, t) {
    const n = e.getBoundingClientRect(),
        r = t === cs.horizontal ? n.x : n.y;
    return { start: r, end: t === cs.horizontal ? r + n.width : r + n.height };
}
function ws(e, t, n, r, s, o, a) {
    const l = Vt(),
        c = s.stepTimeout || 100,
        [u, d] = (function (e, t, n = []) {
            const r = i.useRef(0),
                s = i.useCallback(() => {
                    (window.clearInterval(r.current), (r.current = 0));
                }, n || []);
            i.useEffect(() => s, [s]);
            const o = (n ?? []).concat([t]);
            return [
                i.useCallback((n) => {
                    (0 !== r.current && s(), (r.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                }, o),
                s,
            ];
        })((e) => s.applyStepTo(e), c, [s]);
    i.useEffect(
        () => (document.addEventListener('mouseup', d, !0), () => document.removeEventListener('mouseup', d, !0)),
        [d],
    );
    const m = i.useCallback(
            (e) => {
                e.target.classList.contains(ps) ||
                    (l.play('click', { target: 'Scroll:Back', original: e }), u(as.Next));
            },
            [u, l],
        ),
        _ = i.useCallback(
            (e) => {
                e.target.classList.contains(ps) ||
                    (l.play('click', { target: 'Scroll:Forward', original: e }), u(as.Prev));
            },
            [u, l],
        ),
        h = i.useCallback(
            (i) => {
                const c = e.current,
                    u = t.current,
                    d = n.current,
                    h = r.current;
                if (!(c && u && d && h && 0 === i.button)) return;
                const f = (function (e, t, n, r, s, o) {
                        return {
                            occurredEvent: o === cs.horizontal ? e.screenX : e.screenY,
                            bar: xs(t, o),
                            thumb: xs(n, o),
                            backButton: xs(r, o),
                            forwardButton: xs(s, o),
                        };
                    })(i, c, u, d, h, a),
                    p = f.thumb.start <= f.occurredEvent && f.occurredEvent <= f.thumb.end,
                    g =
                        (f.backButton.start <= f.occurredEvent && f.occurredEvent <= f.backButton.end) ||
                        (f.forwardButton.start <= f.occurredEvent && f.occurredEvent <= f.forwardButton.end);
                if (p) o({ pending: !0, offset: f.occurredEvent - f.thumb.start });
                else if (g) {
                    ((f.occurredEvent > f.thumb.start ? as.Prev : as.Next) === as.Next ? m : _)(i);
                } else {
                    const e = f.occurredEvent - f.bar.start,
                        t = f.thumb.end - f.thumb.start,
                        n = f.bar.end - f.bar.start,
                        r = s.getContainerSize();
                    if ('number' != typeof r || Number.isNaN(r)) return console.error('Incorrect container size');
                    const o = ((e - t / 2) / n) * r;
                    s.applyScroll(o);
                }
                l.play('click', { target: 'Scroll:' + (p ? 'thumb' : g ? 'button' : ''), original: i });
            },
            [e, t, n, r, l, a, o, m, _, s],
        ),
        f = i.useCallback(
            (e) => {
                e.target.classList.contains(ps) || l.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [l],
        );
    return i.useMemo(
        () => ({
            handleMouseBackDown: m,
            handleMouseEnter: f,
            handleMouseDownTrack: h,
            handleMouseForwardDown: _,
            handleMouseForwardUp: d,
            handleMouseBackUp: d,
        }),
        [m, f, h, _, d],
    );
}
const vs = 'HorizontalBar_rail_37858d8f',
    Es = 'HorizontalBar_4df27ac3',
    ys = 'HorizontalBar_track_649dc296',
    Cs = 'HorizontalBar_rail__left_1a906b4e',
    Rs = 'HorizontalBar_rail__right_cd24364e',
    Ss = 'HorizontalBar_button__right_e8f0aa2d',
    Ls = 'HorizontalBar_button__left_da330e13',
    Ts = 'HorizontalBar_button_cbabd91',
    Ns = { closed: { height: '3rem', top: '4rem' }, opened: { height: '11rem', top: '0rem' } },
    Bs = (e, t) => Math.max(Se(13), e.offsetWidth * t),
    Ds = i.memo(function ({ classNames: e = {}, onDrag: t = Me }) {
        const n = i.useRef(null),
            r = i.useRef(null),
            s = i.useRef(null),
            o = i.useRef(null),
            a = i.useRef(null),
            u = i.useRef(null),
            d = i.useRef(null),
            [m, _] = i.useState(!1),
            { api: h } = os();
        bs({ baseRef: n, api: h });
        const f = wt((e, t, { parent: n }) => (e.screenX - t.offset - n.getBoundingClientRect().x) / n.offsetWidth),
            p = wt((e) => e - (o.current.offsetWidth - a.current.offsetWidth) >= -0.5),
            g = i.useCallback((e) => ('dragStart' === e.type ? _(!0) : 'dragEnd' === e.type && _(!1), t(e)), [t]),
            b = fs(a, g, h, o, f),
            x = wt(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
                const r = o.current,
                    s = u.current,
                    a = d.current;
                if (!r || !s || !a) return;
                const i = Se(5);
                ((s.style.width = `${t - i + n}px`), (a.style.width = r.offsetWidth - e - t - i - n + 'px'));
            }),
            { handleMouseEnter: w, handleMouseDownTrack: v } = ws(n, a, s, r, h, b, cs.horizontal);
        return l.jsxs('div', {
            className: c(Es, e.base),
            ref: n,
            onWheel: h.handleMouseWheel,
            onMouseDown: v,
            onMouseEnter: w,
            children: [
                l.jsx('div', { ref: r, className: c(Ts, Ls, e.leftButton) }),
                l.jsxs('div', {
                    ref: o,
                    className: c(ys, e.track),
                    children: [
                        l.jsx('div', { ref: u, className: c(vs, Cs, e.leftRail) }),
                        l.jsx(_s, {
                            dragging: m,
                            api: h,
                            calculateOffset: f,
                            calculateSize: Bs,
                            direction: 'horizontal',
                            isBoundThumb: p,
                            railAfterRef: u,
                            railBeforeRef: d,
                            styles: Ns,
                            onUpdate: x,
                            thumbRef: a,
                            trackRef: o,
                        }),
                        l.jsx('div', { ref: d, className: c(vs, Rs, e.rightRail) }),
                    ],
                }),
                l.jsx('div', { ref: s, className: c(Ts, Ss, e.rightButton) }),
            ],
        });
    }),
    Ms = {
        base: 'HorizontalScroll_5b201d2b',
        wrapper: 'HorizontalScroll_wrapper_abec8dee',
        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_a5c0f45',
    };
function Ps({ className: e, classNames: t, children: n }) {
    const { api: r } = os();
    return l.jsx('div', {
        className: c(Ms.base, e),
        children: l.jsx('div', {
            className: c(Ms.wrapper, null == t ? void 0 : t.wrapper),
            onWheel: r.handleMouseWheel,
            ref: r.wrapperRef,
            children: l.jsx('div', {
                className: c(Ms.content, null == t ? void 0 : t.content),
                ref: r.contentRef,
                children: n,
            }),
        }),
    });
}
function ks({ settings: e, children: t }) {
    const n = ls({ settings: e }),
        r = i.useMemo(() => ({ api: n }), [n]);
    return l.jsx(ss.Provider, { value: r, children: t });
}
((Ps.Bar = Ds),
    (Ps.Default = ({
        children: e,
        className: t,
        barClassNames: n,
        areaClassName: r,
        classNames: s,
        scrollClassName: o,
        onDrag: a,
    }) => {
        const { api: u } = os(),
            d = i.useMemo(() => {
                const e = n || {};
                return { ...e, base: c(Ms.base, e.base) };
            }, [n]);
        return l.jsxs('div', {
            className: c(Ms.defaultScroll, t),
            onWheel: u.handleMouseWheel,
            children: [
                l.jsx('div', {
                    className: c(Ms.defaultScrollArea, r),
                    children: l.jsx(Ps, { className: o, classNames: s, children: e }),
                }),
                l.jsx(Ds, { onDrag: a, classNames: d }),
            ],
        });
    }));
const Fs = i.createContext(void 0);
const As = 'VerticalBar_rail_3d663c9',
    Is = 'VerticalBar_7187fa00',
    $s = 'VerticalBar_track_ff482708',
    Os = 'VerticalBar_rail__top_ee531f43',
    js = 'VerticalBar_rail__bottom_3eaa33b1',
    Hs = 'VerticalBar_button__bottom_6880f123',
    Us = 'VerticalBar_button__top_b8383775',
    zs = 'VerticalBar_button_7b0e4aca',
    Vs = { closed: { width: '3rem', left: '3rem' }, opened: { width: '9rem', left: '0rem' } },
    Gs = (e, t) => Math.max(Se(13), e.offsetHeight * t);
i.memo(function ({ classNames: e = {}, onDrag: t = Me }) {
    const n = i.useRef(null),
        r = i.useRef(null),
        s = i.useRef(null),
        o = i.useRef(null),
        a = i.useRef(null),
        u = i.useRef(null),
        d = i.useRef(null),
        [m, _] = i.useState(!1),
        { api: h } = (function () {
            const e = i.useContext(Fs);
            if (!e) throw new Error('useVerticalScroll must be used within a Scroll.Vertical.Base component');
            return e;
        })();
    bs({ baseRef: n, api: h });
    const f = wt((e) => e - (o.current.offsetHeight - a.current.offsetHeight) >= -0.5),
        p = wt((e, t, { parent: n }) => (e.screenY - t.offset - n.getBoundingClientRect().y) / n.offsetHeight),
        g = i.useCallback((e) => ('dragStart' === e.type ? _(!0) : 'dragEnd' === e.type && _(!1), t(e)), [t]),
        b = fs(a, g, h, o, p),
        x = wt(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
            const r = o.current,
                s = u.current,
                a = d.current;
            if (!r || !s || !a) return;
            const i = Se(5);
            ((s.style.height = `${t - i + n}px`), (a.style.height = r.offsetHeight - e - t - i - n + 'px'));
        }),
        { handleMouseEnter: w, handleMouseDownTrack: v } = ws(n, a, r, s, h, b, cs.vertical);
    return l.jsxs('div', {
        className: c(Is, e.base),
        ref: n,
        onWheel: h.handleMouseWheel,
        onMouseDown: v,
        onMouseEnter: w,
        children: [
            l.jsx('div', { ref: r, className: c(zs, Us, e.topButton) }),
            l.jsxs('div', {
                ref: o,
                className: c($s, e.track),
                children: [
                    l.jsx('div', { ref: u, className: c(As, Os, e.topRail) }),
                    l.jsx(_s, {
                        dragging: m,
                        api: h,
                        calculateOffset: p,
                        calculateSize: Gs,
                        direction: 'vertical',
                        isBoundThumb: f,
                        railAfterRef: u,
                        railBeforeRef: d,
                        styles: Vs,
                        onUpdate: x,
                        thumbRef: a,
                        trackRef: o,
                    }),
                    l.jsx('div', { ref: d, className: c(As, js, e.bottomRail) }),
                ],
            }),
            l.jsx('div', { ref: s, className: c(zs, Hs, e.bottomButton) }),
        ],
    });
});
const Zs = i.createContext(void 0);
function Ws() {
    const e = i.useContext(Zs);
    if (!e) throw new Error('Card context must be used only within its provider');
    return e;
}
function qs({ selected: e, hover: t, disabled: n, multiple: r, status: s, children: o }) {
    const a = i.useMemo(() => ({ selected: e, hover: t, disabled: n, multiple: r, status: s }), [n, t, r, e, s]);
    return l.jsx(Zs.Provider, { value: a, children: o });
}
const Ys = i.createContext(null);
function Xs() {
    const e = i.useContext(Ys);
    if (!e) throw new Error('CardsWrapper context must be used only within its provider');
    return e;
}
const Qs = Ys.Provider,
    Ks = 'Content_ab8563af',
    Js = 'Content_disabledOverlay_af87c441',
    eo = 'Content_multipleCorner_151c26ee',
    to = Yn('Content', 'Content_8eaaf71a', {
        variants: {
            multiple: { true: 'Content_base__multiple_da09528a' },
            selected: { true: 'Content_base__selected_da09528a' },
            hover: { true: 'Content_base__hover_da09528a' },
            disabled: { true: 'Content_base__disabled_da09528a' },
        },
        compoundVariants: [{ hover: !0, selected: !0, className: 'Content_base__selectedHover_da09528a' }],
    }),
    no = ({ children: e, classNames: t }) => {
        const n = _.useRef(null),
            r = Ws();
        return (
            _.useEffect(() => {
                if (r.multiple)
                    return ze(() => {
                        if (n.current) {
                            const e = n.current.getBoundingClientRect(),
                                t = Math.round((20 / e.width) * 100),
                                r = Math.round((20 / e.height) * 100);
                            (n.current.style.setProperty('--corner-width', `${t}%`),
                                n.current.style.setProperty('--corner-height', `${r}%`));
                        }
                    });
            }),
            l.jsxs(to, {
                multiple: r.multiple,
                selected: r.selected,
                hover: r.hover,
                disabled: r.disabled,
                children: [
                    r.multiple && l.jsx('div', { className: eo }),
                    l.jsxs('div', {
                        ref: n,
                        className: c(Ks, null == t ? void 0 : t.mainContainerContent),
                        children: [r.disabled && l.jsx('div', { className: Js }), e],
                    }),
                ],
            })
        );
    },
    ro = {
        root: 'Status_root_35b9a31c',
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
    so = b.resolve('strings');
Yn('Status', ro.base, {
    variants: { status: { done: ro.base__done, alert: ro.base__alert, locked: ro.base__locked } },
});
const oo = ({ header: e, body: t }) => Boolean(e && t),
    ao = ({ reason: e, classNames: t }) => {
        const n = i.useRef(null),
            [r, s] = _.useState(!1),
            o = `base__${Ws().status}${r ? 'Small' : ''}`,
            a = _.useCallback(() => {
                var e;
                const t = null == (e = n.current) ? void 0 : e.getBoundingClientRect();
                t && s(t.width <= 100);
            }, [n]);
        Nt(n, a);
        const u = e
                ? {
                      header: so.readOrEmpty(`tooltips.moduleFits.${e}.header`),
                      body: so.readOrEmpty(`tooltips.moduleFits.${e}.text`),
                  }
                : {},
            d = At(u);
        return l.jsxs('div', {
            className: c(ro.base, ro[o], null == t ? void 0 : t.wrapper),
            ref: n,
            children: [
                l.jsx('div', { className: ro.glowBig }),
                l.jsx('div', { className: ro.line }),
                l.jsx('div', { className: ro.shadow }),
                l.jsx('div', { className: ro.glowInner }),
                l.jsx('svg', {
                    width: '42',
                    height: '42',
                    viewBox: '0 0 42 42',
                    className: ro.blur,
                    children: l.jsx('g', { children: l.jsx('circle', { cx: '21', cy: '21', r: '3' }) }),
                }),
                l.jsx('div', { ...(oo(u) && d), className: c(ro.icon, null == t ? void 0 : t.icon) }),
            ],
        });
    },
    io = 'Card_base__wrapped_c6eb8737',
    lo = 'Card_f7ddaa4a',
    co = 'Card_content_b6f6a22a',
    uo = 'Card_centerBorder_8a0f28ae',
    mo = Yn('Card', 'Card_f0963ece', {
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
    _o = i.forwardRef(function (
        {
            children: e,
            active: t,
            status: n,
            statusReason: r,
            disableMouse: s,
            onMouseOver: o,
            onMouseOut: a,
            soundTarget: u,
            disabled: d = !1,
            className: m,
            classNames: _,
            ...h
        },
        f,
    ) {
        const [p, g] = i.useState(!1),
            b = Vt(),
            x = i.useContext(Ys),
            w = s || d;
        return l.jsx(mo, {
            ...h,
            ref: f,
            hover: p,
            disableMouse: s,
            active: t,
            className: c(lo, m, (null == x ? void 0 : x.enabled) && io),
            children: l.jsxs(qs, {
                disabled: d,
                selected: h.selected ?? !1,
                multiple: h.multiple ?? !1,
                hover: p,
                status: n,
                children: [
                    l.jsx('div', {
                        className: c(co, null == _ ? void 0 : _.content),
                        onClick: function (e) {
                            w || b.play('click', { target: u || 'react-ui:card', original: e });
                        },
                        onMouseEnter: function (e) {
                            w || b.play('mouse-enter', { target: u || 'react-ui:card', original: e });
                        },
                        onMouseOver: function (e) {
                            w || (g(!0), null == o || o(e));
                        },
                        onMouseOut: function (e) {
                            w || (g(!1), null == a || a(e));
                        },
                        children: l.jsx(no, { classNames: _, children: e }),
                    }),
                    l.jsx('div', { className: uo }),
                    n && l.jsx(ao, { reason: r, classNames: null == _ ? void 0 : _.status }),
                ],
            }),
        });
    }),
    ho = 3,
    fo = 'none',
    po = 'contour',
    go = (e, t) => ({ x: e, y: t });
function bo(e) {
    let { x: t, y: n, width: r, height: s } = e;
    const o = go(t, n),
        a = go(t + r, n),
        i = go(t + r, n + s),
        l = go(t, n + s);
    return [
        [o, a],
        [a, i],
        [i, l],
        [l, o],
    ];
}
function xo(e, t) {
    return (function (e) {
        if (0 === e.length) return [];
        const t = e[0],
            n = { x: t[0].x - ho, y: t[0].y - ho },
            r = [n];
        let s = t[1],
            o = n,
            a = n,
            i = -ho,
            l = -ho;
        for (e.splice(0, 1); e.length > 0; ) {
            const t = e.findIndex((e) => e[0].x === s.x && e[0].y === s.y);
            if (-1 === t) break;
            const n = e[t],
                c = s;
            (s.x <= a.x ? (l = ho) : (l === ho && (o.y -= 2 * ho), (l = -ho)),
                s.y >= a.y ? (i = ho) : (i === ho && (o.x -= 2 * ho), (i = -ho)),
                (s = { x: s.x + i, y: s.y + l }),
                r.push(s),
                (a = c),
                (o = s),
                (s = n[1]),
                e.splice(t, 1));
        }
        return (l === ho && i === ho && (o = { ...o, x: o.x - 2 * ho }), r.push(n), r);
    })(
        (function (e) {
            const t = e.flatMap(bo),
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
class wo {
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
const vo = 'LinesBuilder_lineInner_a52dc157',
    Eo = 'LinesBuilder_lineOuter_c57514b2';
const yo = i.memo(({ containerRef: e, generation: t, border: n, cardSelector: r }) => {
        const [s, o] = i.useState([]),
            a = wt(() => {
                const t = e.current;
                if (!t) return;
                const s = t.getBoundingClientRect(),
                    a = (function (e, t, n) {
                        const r = [],
                            s = new wo(t);
                        for (let o = 0; o < e.length; o++) {
                            const t = e[o],
                                a = t.getBoundingClientRect();
                            if (0 === a.width || 0 === a.height)
                                return void console.debug(
                                    `Card rect has zero size by one side: ${a.width}x${a.height} (${t.getAttribute('data-test-id')}) `,
                                );
                            (n !== fo && r.push({ x: a.x, y: a.y, width: a.width, height: a.height }),
                                s.addLine(a.x, a.y, a.width, 1, vo),
                                s.addLine(a.x, a.y + a.height, a.width, 1, vo),
                                s.addLine(a.x, a.y, 1, a.height, vo),
                                s.addLine(a.x + a.width, a.y, 1, a.height + 1, vo));
                        }
                        if (n !== fo) {
                            const e = xo(r);
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
                                        Eo,
                                    );
                                }
                                t = e;
                            });
                        }
                        return s.run();
                    })(t.querySelectorAll(`.${r || lo}`), s, n);
                o(a ?? []);
            });
        return (
            i.useEffect(a, [a, t]),
            l.jsx(l.Fragment, {
                children: s.map((e, t) =>
                    l.jsx(
                        'div',
                        { className: e.className, style: { left: e.x, top: e.y, width: e.width, height: e.height } },
                        t,
                    ),
                ),
            })
        );
    }),
    Co = 'CardsWrapper_3b6cc4f6',
    Ro = 'CardsWrapper_card_c7fc9ee7',
    So = 'CardsWrapper_centerBorderCommon_b4b27a11',
    Lo = 'CardsWrapper_outerBorderCommon_f4887371',
    To = Yn('CardsWrapper', Co),
    No = i.forwardRef(function (
        { children: e, className: t, trashhold: n, border: r = po, enabled: s = !0, cardSelector: o, ...a },
        c,
    ) {
        const u = i.useRef([]),
            d = i.useRef(null),
            [m, _] = i.useState('');
        i.useImperativeHandle(c, () => d.current);
        const h = i.useCallback(
            (e) => {
                const t = d.current;
                if (!t) return;
                const n = t.querySelectorAll(`.${o || lo}`);
                if (n.length > 0) {
                    const r = t.getBoundingClientRect(),
                        s = n.length;
                    s !== u.current.length && (u.current = Array.from(n));
                    const o = `${Math.round(r.width)}x${Math.round(r.height)}-${s}|${e}`;
                    _(o);
                } else _('');
            },
            [o],
        );
        (i.useEffect(() => {
            h(n);
        }),
            Nt(
                d,
                i.useCallback(() => h(), [h]),
            ));
        const f = i.useMemo(() => ({ recalculate: h, enabled: s }), [h, s]);
        return l.jsx(To, {
            ...a,
            ref: d,
            children: l.jsxs('div', {
                className: t,
                children: [
                    l.jsx(Qs, { value: f, children: e }),
                    l.jsx(yo, { cardsRef: u, containerRef: d, border: r, generation: m, cardSelector: o }),
                ],
            }),
        });
    });
i.forwardRef(({ className: e, classNames: t, ...n }, r) =>
    l.jsxs('div', {
        className: c(Co, null == t ? void 0 : t.wrapper),
        children: [
            l.jsx('div', { className: So }),
            l.jsx('div', { className: Lo }),
            l.jsx(_o, { className: c(Ro, e, null == t ? void 0 : t.card), classNames: t, ...n, ref: r }),
        ],
    }),
);
const Bo = { done: 'done' },
    Do = 'NotificationWrapper_6fe65b7',
    Mo = ({ children: e, ref: t, className: n }) => {
        const r = i.useRef(null),
            s = 288 * Ce(),
            o = 500 * Ce();
        var a, u;
        return (
            vt(() => {
                ye(s, 1);
            }),
            (a = () => {
                if (!r.current) return;
                const e = r.current.scrollHeight;
                e > o ? (console.warn(`maximum height exceeded ${e}`), ye(s, o)) : ye(s, e);
            }),
            (u = []),
            i.useEffect(() => {
                let e,
                    t = null;
                return (
                    (t = requestAnimationFrame(() => {
                        t = requestAnimationFrame(() => {
                            ((t = null), (e = a()));
                        });
                    })),
                    () => {
                        ('function' == typeof e && e(), null !== t && cancelAnimationFrame(t));
                    }
                );
            }, u),
            l.jsx('div', { ref: rn(t ? [t, r] : [r]), className: c(Do, n), children: e })
        );
    },
    Po = { superCompact: 'superCompact', compact: 'compact', default: 'default', detailed: 'detailed' },
    ko = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48', x80x80: 'x80x80' },
    Fo = { accent: 'accent', cooldown: 'cooldown' },
    Ao = {
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
function Io({ size: e, preFormatted: t }) {
    var n;
    const r = [];
    for (let s = 0; s < t.items.length; ++s)
        (t.separator &&
            s > 0 &&
            r.push(l.jsx('span', { className: c(Ao.detailedSeparator, Ao[`detailedSeparator__${e}`]) }, 'separator')),
            r.push(
                l.jsx(
                    'span',
                    {
                        className: c(Ao.item, Ao[`item__${e}`]),
                        children:
                            null == (n = t.items[s])
                                ? void 0
                                : n
                                      .split(' ')
                                      .map((t, n) =>
                                          l.jsx(
                                              'span',
                                              { className: c(Ao.part, Ao[`part__${e}`]), children: t },
                                              `part_${n}`,
                                          ),
                                      ),
                    },
                    `item_${s}`,
                ),
            ));
    return r;
}
const $o = b.resolve('strings'),
    Oo = 'D',
    jo = 'h',
    Ho = 'm',
    Uo = { [Po.compact]: [Oo, jo, Ho], [Po.default]: [Oo, jo, Ho], [Po.detailed]: [Oo, 'hh', 'mm', 'ss'] },
    zo = {
        [Po.compact]: function (e, t) {
            var n, r;
            const s = e.length,
                o = Uo[t],
                a = { separator: !1, items: [] };
            for (let i = 0; i < s; ++i)
                if (Number(e[i]) > 0) return ((a.items = [null == (n = Vo[o[i]]) ? void 0 : n.call(Vo, e[i])]), a);
            return ((a.items = [null == (r = Vo[Ho]) ? void 0 : r.call(Vo, 1)]), a);
        },
        [Po.default]: function (e, t) {
            var n;
            let r = 0;
            const s = e.length - 1,
                o = Uo[t],
                a = { separator: !1, items: [] };
            for (; r < s && !(Number(e[r]) > 0); ++r);
            o[r] === Ho && 0 === Number(e[r])
                ? (a.items = [null == (n = Vo[Ho]) ? void 0 : n.call(Vo, 1)])
                : (a.items = [r, r + 1].map((t) => {
                      var n;
                      return null == (n = Vo[o[t]]) ? void 0 : n.call(Vo, e[t]);
                  }));
            return a;
        },
        [Po.detailed]: function (e) {
            var t;
            const [n, ...r] = e,
                s = r.join(':');
            return { separator: !0, items: Number(n) > 0 ? [null == (t = Vo[Oo]) ? void 0 : t.call(Vo, n), s] : [s] };
        },
    },
    Vo = {
        [Oo]: (e) =>
            J(
                $o.readOr('common.timer.days', () => Oo.toLowerCase()),
                { days: e },
            ),
        [jo]: (e) =>
            J(
                $o.readOr('common.timer.hours', () => jo),
                { hours: e },
            ),
        [Ho]: (e) =>
            J(
                $o.readOr('common.timer.minutes', () => Ho),
                { minutes: e },
            ),
    };
const Go = (e, t) => {
        var n;
        return null == (n = zo[t])
            ? void 0
            : n.call(
                  zo,
                  (function (e, t) {
                      const n = Z(e);
                      return t.map((e) => Q[e](n));
                  })(e, Uo[t]),
                  t,
              );
    },
    Zo = {
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
function Wo({
    start: e,
    limit: t = 0,
    tick: n = 1,
    size: r = ko.x24x24,
    type: s = Fo.accent,
    format: o = Po.default,
    autostart: a = !0,
    className: u,
    classNames: d,
}) {
    const [m] = (function (e) {
        const { type: t, tick: n, limit: r } = e,
            s = e.autostart ?? !1,
            o = e.start ?? $,
            [a, l] = i.useState({ current: o, running: s }),
            c = i.useRef(0);
        i.useEffect(
            () => (
                (c.current = window.setInterval(() => {
                    a.running
                        ? l((e) => {
                              const s = 'countdown' === t ? q(e.current, n) : W(e.current, n),
                                  o = { ...e, current: s };
                              return (
                                  A(r) &&
                                      ('countdown' === t
                                          ? X(q(s, n), r) && ((o.current = r), (o.running = !1))
                                          : Y(W(s, n), r) && ((o.current = r), (o.running = !1))),
                                  o
                              );
                          })
                        : window.clearInterval(c.current);
                }, Z(n))),
                () => {
                    window.clearInterval(c.current);
                }
            ),
            [r, n, a.running, t],
        );
        const u = i.useMemo(
            () => ({
                start: () => l((e) => ({ ...e, isRunning: !0 })),
                stop: () => l((e) => ({ ...e, isRunning: !1 })),
                isRunning: () => a.running,
            }),
            [a.running],
        );
        return [a.current, u];
    })(
        i.useMemo(
            () => ({
                type: 'countdown',
                start: A(e) ? e : O(e),
                limit: A(t) ? t : O(t),
                tick: A(n) ? n : O(n),
                autostart: a,
            }),
            [a, t, e, n],
        ),
    );
    return l.jsxs('div', {
        className: c(Zo.base, u),
        children: [
            l.jsx('div', { className: c(Zo.icon, Zo[`icon__${r}`], Zo[`icon__${s}`], null == d ? void 0 : d.icon) }),
            o !== Po.superCompact &&
                l.jsx('div', {
                    className: c(Zo.label, Zo[`label__${r}`], Zo[`label__${s}`], null == d ? void 0 : d.label),
                    children: l.jsx(Io, { size: r, preFormatted: Go(m, o) }),
                }),
        ],
    });
}
((Wo.format = Po), (Wo.size = ko), (Wo.type = Fo));
const qo = 'Tooltip_decorator_b3486d4e',
    Yo = Yn('Base', 'Tooltip_6d997cee'),
    Xo = Yn('Decorator', qo),
    Qo = i.forwardRef(function ({ children: e, ...t }, n) {
        const r = i.useRef(null);
        return (
            Nt(r, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                ye(t.scrollWidth, t.scrollHeight);
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
            l.jsx(Yo, {
                ...t,
                ref: function (e) {
                    ((r.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                children: e,
            })
        );
    });
Qo.Decorator = Xo;
export {
    bt as $,
    Wn as A,
    er as B,
    mn as C,
    It as D,
    kr as E,
    Gn as F,
    rs as G,
    Cr as H,
    nr as I,
    sn as J,
    os as K,
    Ps as L,
    He as M,
    Ds as N,
    ks as O,
    Xr as P,
    Xs as Q,
    vr as R,
    ze as S,
    _o as T,
    ln as U,
    rr as V,
    Bo as W,
    No as X,
    vn as Y,
    Re as Z,
    Et as _,
    fr as a,
    vt as a0,
    Mo as a1,
    Wo as a2,
    Me as a3,
    Zn as a4,
    Qo as a5,
    hr as b,
    At as c,
    Ve as d,
    ft as e,
    gr as f,
    dr as g,
    lr as h,
    nn as i,
    wn as j,
    En as k,
    Tt as l,
    Ue as m,
    St as n,
    hn as o,
    ke as p,
    Ht as q,
    b as r,
    Ee as s,
    on as t,
    Vt as u,
    K as v,
    qr as w,
    Ft as x,
    Yr as y,
    qn as z,
};
