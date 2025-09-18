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
    d as a,
    l as i,
    r as c,
    j as l,
    e as u,
    o as d,
    f,
    u as m,
    g as h,
    h as g,
    R as p,
    i as b,
    k as _,
    m as v,
    n as y,
    p as w,
    q as x,
    s as E,
    t as N,
    v as S,
    w as T,
    x as C,
} from './vendor.js';
const k = r();
function z(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function P(e, t) {
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
class j {
    constructor(e, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = z(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && P(`Resource not found: ${r}`, n), t()) : o;
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
var A = ((e) => (
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
))(A || {});
const I = { integral: 0, gold: 1 },
    M = { fractional: 0, woZeroDigits: 1 },
    B = Object.keys(I),
    O = Object.keys(M);
function L(e) {
    return Number.isFinite(e)
        ? e < 0
            ? (console.error(`Negative timestamp (${e}) is not allowed. Clamping to 0.`), 0)
            : e > Number.MAX_SAFE_INTEGER
              ? (console.error(`Number(${e}) is bigger than MAX_SAFE_INTEGER. Clamping to ${Number.MAX_SAFE_INTEGER}.`),
                Number.MAX_SAFE_INTEGER)
              : e
        : (console.error(`Incorrect value to convert. Value is ${e}. Expected a finite number.`), 0);
}
const D = { full: A.FullTime, short: A.ShortTime },
    $ = Object.keys(D);
const F = { short: 0, full: 1 },
    H = {
        isNumberFormat: function (e) {
            return e in I;
        },
        formatNumber: function (e, t) {
            return window.systemLocale.getNumberFormat(t, I[e]);
        },
        numberFormats: B,
        isRealFormat: function (e) {
            return e in M;
        },
        formatReal: function (e, t) {
            return window.systemLocale.getRealFormat(t, M[e]);
        },
        realFormats: O,
        formatDateTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(L(t), e, n);
        },
        dateTimeFormats: A,
        formatTime: function (e, t, n = !0) {
            return window.regionalDateTime.getRegionalDateTime(L(t), e, n);
        },
        timeFormats: $,
        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
        system: {
            time: (e, t) => window.systemLocale.getTimeFormat(L(e), F[t]),
            date: (e, t) => window.systemLocale.getDateFormat(L(e), F[t]),
        },
    };
function W(e, t) {
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
class U {
    constructor(e) {
        this.prefix = e;
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = z(this.prefix, e),
            o = W(r);
        return void 0 === o ? ('silent' !== n && P(`Resource not found: ${r}`, n), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = z(this.prefix, e),
            n = W(t);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const o = z(this.prefix, e),
            s = W(o, t);
        return void 0 === s ? ('silent' !== r && P(`Resource not found: ${o}`, r), n()) : s;
    }
    pluralOrEmpty(e, t, n = 'warn') {
        return this.pluralOr(e, t, () => '', n);
    }
}
class K {
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
        return void 0 === r ? ('silent' !== n && P(`Resource not found: ${e}`, n), t()) : r;
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
k.register({
    strings: a(() => new U()).singleton(),
    images: a(() => new j(window.R.images.gui.maps.icons)).singleton(),
    atlases: a(() => new j(window.R.atlases)).singleton(),
    videos: a(() => new K(window.R.videos)).singleton(),
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
                    : P(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: o(R.strings.settings.LANGUAGE_CODE()),
    intl: o(H),
});
const V = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => e * (2 - e),
    easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => --e * e * e + 1,
    easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - --e * e * e * e,
    easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 + --e * e * e * e * e,
    easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutSine: (e) => (1 - Math.cos(Math.PI * e)) / 2,
    easeInOutCirc(e) {
        const t = Math.sqrt,
            n = Math.pow;
        return e < 0.5 ? (1 - t(1 - n(2 * e, 2))) / 2 : (t(1 - n(-2 * e + 2, 2)) + 1) / 2;
    },
    reverseEaseInOutCirc: (e) => 1 - V.easeInOutCirc(1 - e),
    easeOutBack(e) {
        const t = 1.70158;
        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
    },
    bezier: (e, t, n, r) => (o) =>
        (1 - o) * (1 - o) * (1 - o) * e + 3 * (1 - o) * (1 - o) * o * t + 3 * (1 - o) * o * o * n + o * o * o * r,
    cubicBezier: (e, t, n, r) => (o) => {
        const s = (function (e, t, n, r = 1e-5) {
            let o = e;
            for (let s = 0; s < 8; s++) {
                const s = G(o, t, n) - e;
                if (Math.abs(s) < r) return o;
                const a = q(o, t, n);
                if (Math.abs(a) < r) break;
                o -= s / a;
            }
            return o;
        })(o, e, n);
        return 3 * t * (1 - s) ** 2 * s + 3 * r * (1 - s) * s ** 2 + s ** 3;
    },
};
function G(e, t, n) {
    return 3 * t * (1 - e) ** 2 * e + 3 * n * (1 - e) * e ** 2 + e ** 3;
}
function q(e, t, n) {
    return 9 * t * (1 - e) ** 2 + 6 * (n - t) * (1 - e) * e + 3 * (1 - n) * e ** 2;
}
function X(e) {
    return e.replaceAll('-', '_');
}
function Y(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function Q(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const Z = Y('clientResized'),
    J = Y('self.onScaleUpdated'),
    ee = Y('clientMinimized'),
    te = { down: Y('mousedown'), up: Y('mouseup'), move: Y('mousemove') };
const ne = (function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && Q(!1);
    }
    function n() {
        e.enabled && Q(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  Q(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : Q(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const o = `mouse${t}`,
                            s = te[t]((e) => n([e, 'outside']));
                        function a(e) {
                            n([e, 'inside']);
                        }
                        return (
                            window.addEventListener(o, a),
                            r(),
                            () => {
                                (s(), window.removeEventListener(o, a), (e.listeners -= 1), r());
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
            e.enabled && Q(!0);
        },
        disableOutside() {
            e.enabled && Q(!1);
        },
    };
})();
function re(e = 'px') {
    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
}
function oe(e) {
    engine.call('PlaySound', e);
}
const se = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    ae = { ...Object.keys(se).reduce((e, t) => ((e[t] = () => oe(se[t])), e), {}), sound: oe },
    ie = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    ce = {
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
    },
    le = 1,
    ue = 4;
function de(e) {
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
const fe = (e) => {
        const t = [];
        for (const [n, r] of Object.entries(e)) {
            const e = de(r);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
        }
        return t;
    },
    me = (e, t) => {
        const n = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...o } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: n, type: e, ...o, arguments: fe(r) })
                : viewEnv.handleViewEvent({ __Type: n, type: e, ...o });
        }
        return viewEnv.handleViewEvent({ __Type: n, type: e });
    },
    he = new Map(),
    ge = {
        tooltip: {
            open(e, t, n = 0, r) {
                (me(le, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    he.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (me(le, { contentID: t, decoratorID: n, targetID: e, on: !1 }), he.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(he.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
        contextMenu: {
            open(e, t, n = 0, r) {
                me(ue, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r });
            },
            hide(e, t, n = 0) {
                me(ue, { contentID: t, decoratorID: n, targetID: e, on: !1, isMouseEvent: !1 });
            },
        },
    };
function pe() {
    return window.subViews.ids();
}
function be(e) {
    return viewEnv.pxToRem(e);
}
function _e(e) {
    return viewEnv.remToPx(e);
}
function ve() {
    viewEnv.setFullscreenModeSupported(!0);
}
function ye(e) {
    function t() {
        const { top: t, right: n, bottom: r, left: o } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${t}rem`),
            e.style.setProperty('--external-padding-right', `${n}rem`),
            e.style.setProperty('--external-padding-bottom', `${r}rem`),
            e.style.setProperty('--external-padding-left', `${o}rem`));
    }
    (t(), engine.on('self.onPaddingsUpdated', () => t()));
}
Object.keys(ie).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === ie[t]), e), {});
class we {
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
const xe = (e) => (0 === e ? window : window.subViews.get(e));
function Ee(
    { initializer: e = !0, rootId: t = 0, getRoot: n = xe, context: r = 'model' } = {},
    { name: o = 'DataLayer' } = {},
) {
    const s = new Map(),
        a = { subscribersNotified: new we() },
        i = engine.whenReady.then(() => {
            function e(e, t, n) {
                (n.forEach((n) => {
                    const r = s.get(n);
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
    function c() {
        try {
            const e = n(t);
            return r.split('.').reduce((e, t) => e[t], e);
        } catch (e) {
            throw new Error(`Failure get root of ${o}. Root id: ${t}. Context: ${r}`);
        }
    }
    const l = (e) => {
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
    function u(e) {
        viewEnv.removeDataChangedCallback(e, t) ? s.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (n, o) => {
            const a = (function (e, t, n) {
                return viewEnv.addDataChangedCallback(e, t, n);
            })('string' == typeof o ? `${r}.${o}` : r, t, !0);
            return (s.set(a, n), e && n(l(o), []), a);
        },
        readByPath: l,
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
            const n = l(t);
            return (...t) => {
                n(e(...t));
            };
        },
        createCallbackNoArgs: (e) => {
            const t = l(e);
            return () => {
                t();
            };
        },
        dispose: function () {
            if (0 === t || pe().includes(t)) for (const e of s.keys()) u(e);
            i.then((e) => e());
        },
        unsubscribe: u,
        events: a,
    };
}
function Re(e, t) {
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
const Ne = (e, t, n) => (n < e ? e : n > t ? t : n);
function Se() {}
function Te(e) {
    return e;
}
function Ce() {
    return !1;
}
function ke(e) {
    return 'function' == typeof e;
}
function ze(e, t, n, r) {
    return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((a.prototype.append = function (e, t) {
                ((e = o(e)), (t = s(t)));
                var n = this.map[e];
                (n || ((n = []), (this.map[e] = n)), n.push(t));
            }),
                (a.prototype.delete = function (e) {
                    delete this.map[o(e)];
                }),
                (a.prototype.get = function (e) {
                    var t = this.map[o(e)];
                    return t ? t[0] : null;
                }),
                (a.prototype.getAll = function (e) {
                    return this.map[o(e)] || [];
                }),
                (a.prototype.has = function (e) {
                    return this.map.hasOwnProperty(o(e));
                }),
                (a.prototype.set = function (e, t) {
                    this.map[o(e)] = [s(t)];
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
                    var o;
                    return (
                        (o = d.prototype.isPrototypeOf(t) && !n ? t : new d(t, n)),
                        new fetch.Promise(function (t, n) {
                            var s = (function () {
                                return r && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function a() {
                                if (4 === s.readyState) {
                                    var e = 1223 === s.status ? 204 : s.status;
                                    if (e < 100 || e > 599) n(new TypeError('Network request failed'));
                                    else {
                                        var r = {
                                                status: e,
                                                statusText: s.statusText,
                                                headers: m(s),
                                                url:
                                                    'responseURL' in s
                                                        ? s.responseURL
                                                        : /^X-Request-URL:/m.test(s.getAllResponseHeaders())
                                                          ? s.getResponseHeader('X-Request-URL')
                                                          : void 0,
                                            },
                                            o = 'response' in s ? s.response : s.responseText;
                                        t(new h(o, r));
                                    }
                                }
                            }
                            ('cors' === o.credentials && (s.withCredentials = !0),
                                (s.onreadystatechange = a),
                                self.usingActiveXhr ||
                                    ((s.onload = a),
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
        function l(e) {
            var t = new FileReader();
            return (t.readAsArrayBuffer(e), c(t));
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
                          return this.blob().then(l);
                      }),
                      (this.text = function () {
                          var e,
                              t,
                              n = i(this);
                          if (n) return n;
                          if (this._bodyBlob) return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), c(t));
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
            var r, o;
            if (
                ((t = t || {}),
                (this.url = e),
                (this.credentials = t.credentials || 'omit'),
                (this.headers = new a(t.headers)),
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
                            o = n.join(':').trim();
                        t.append(r, o);
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
const Pe = {
    NONE: -1,
    ALT: 18,
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    PLUS: 187,
    MINUS: 189,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    BACKSPACE: 8,
    DELETE: 46,
    TAB: 9,
    A: 65,
    D: 68,
    B: 66,
    C: 67,
    V: 86,
    X: 88,
    Z: 90,
    W: 87,
    E: 69,
    N: 78,
    KEY_1: 49,
    KEY_2: 50,
    KEY_3: 51,
    KEY_4: 52,
    KEY_5: 53,
    KEY_6: 54,
    KEY_7: 55,
    KEY_8: 56,
    KEY_9: 57,
};
function je(e, t) {
    var n;
    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
}
const Ae = je;
function Ie(e, t) {
    return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r));
}
function Me(e, t) {
    if (Array.isArray(e)) return e.some(t);
    for (let n = 0; n < e.length; n++) {
        if (t(Ae(e, n), n, e)) return !0;
    }
    return !1;
}
function Be(e, t) {
    for (let o = 0; o < e.length; o++) {
        const s =
            ((n = e[o]),
            (r = void 0),
            n &&
            'object' == typeof n &&
            'value' in n &&
            (null == (r = n.constructor) ? void 0 : r.name.includes('ArrayItem'))
                ? null == n
                    ? void 0
                    : n.value
                : n);
        if (t(s, o, e)) return s;
    }
    var n, r;
}
function Oe(e, t, n) {
    const r = [];
    for (let o = 0; o < e.length; o++) {
        const s = Ae(e, o);
        t(s, o, e) && r.push(n(s, o, e));
    }
    return r;
}
function Le(e, t, n) {
    if (Array.isArray(e)) return e.reduce(t, n);
    let r = n;
    for (let o = 0; o < e.length; o++) {
        r = t(r, Ae(e, o), o, e);
    }
    return r;
}
function De(e, t) {
    return Ie(e, Te).sort(t);
}
const $e = (e) => {
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
function Fe(e, t) {
    e || console.error(t || 'Assertion failed');
}
function He(e, t, n) {
    return 'function' == typeof t ? We(0, e, t) : (Fe(void 0 !== n, 'fn must be defined'), We(e, t, n));
}
function We(e, t, n) {
    const r = new Array(t - e);
    for (let o = e; o < t; o++) r[o] = n(o);
    return r;
}
function Ue(e, t) {
    return new Set([...e, t]);
}
function Ke(e, t) {
    const n = new Set(e);
    return (n.delete(t), n);
}
Fe.log = function (e, t) {
    e || console.error(t || 'Assertion failed');
};
const Ve = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    Ge = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
    qe = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
['ko', 'no'].includes(k.resolve('langCode'));
const Xe = function (e) {
    return 'number' == typeof e && !Number.isNaN(e) && Number.isFinite(e);
};
class Ye {
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
function Qe(e, t, n = -1) {
    return Ze(e, t, n);
}
function Ze(e, t, n, r, o) {
    if (e === t) return 0 !== e || 1 / Number(e) == 1 / Number(t);
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    const s = typeof e;
    if ('function' !== s && 'object' !== s && 'object' != typeof t) return !1;
    const a = toString.call(e);
    if (a !== toString.call(t)) return !1;
    switch (a) {
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
    const i = Je(e),
        c = Je(t),
        l = Array.isArray(i) && Array.isArray(c);
    if (!l) {
        if ('object' != typeof i || 'object' != typeof c) return !1;
        const e = i.constructor,
            t = c.constructor;
        if (
            e !== t &&
            !(ke(e) && e instanceof e && ke(t) && t instanceof t) &&
            'constructor' in i &&
            'constructor' in c
        )
            return !1;
    }
    if (0 === n) return !1;
    (n < 0 && (n = -1), (o = o || []));
    let u = (r = r || []).length;
    for (; u--; ) if (r[u] === i) return o[u] === c;
    if ((r.push(e), o.push(t), l)) {
        if (((u = i.length), u !== c.length)) return !1;
        for (; u--; ) if (!Ze(i[u], c[u], n - 1, r, o)) return !1;
    } else {
        const e = Object.keys(i);
        let t;
        if (((u = e.length), Object.keys(c).length !== u)) return !1;
        for (; u--; ) {
            if (((t = e[u]), void 0 === t))
                return (console.error('Error: met undefined in object during deepEqual comparison'), !1);
            if (!Object.prototype.hasOwnProperty.call(c, t) || !Ze(i[t], c[t], n - 1, r, o)) return !1;
        }
    }
    return (r.pop(), o.pop(), !0);
}
function Je(e) {
    return e instanceof Map || e instanceof Set ? Array.from(e.entries()) : e;
}
const et = {
        identity: function (e, t) {
            return e === t;
        },
        structural: function (e, t) {
            return Qe(e, t);
        },
        sameValue: function (e, t) {
            return Object.is(e, t);
        },
        shallow: function (e, t) {
            return Qe(e, t, 1);
        },
    },
    tt = new Set(['zh_cn', 'zh_sg', 'zh_tw']);
function nt(e, t, n) {
    return tt.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
}
function rt(e, t) {
    return tt.has(t)
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
          ? i()
                .parse(e)
                .map((e) => e.replace(/&nbsp;/g, ' '))
          : e.split(' ');
}
const ot = c.createContext(void 0);
const st = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large', extraLarge: 'extraLarge' },
    at = {
        extraSmall: { weight: 0, name: st.extraSmall, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: st.small, className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: st.medium, className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: st.large, className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: st.extraLarge, className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var it,
    ct,
    lt,
    ut =
        (((it = ut || {})[(it.Small = at.small.width)] = 'Small'),
        (it[(it.Medium = at.medium.width)] = 'Medium'),
        (it[(it.Large = at.large.width)] = 'Large'),
        (it[(it.ExtraLarge = at.extraLarge.width)] = 'ExtraLarge'),
        it),
    dt =
        (((ct = dt || {})[(ct.Small = at.small.width)] = 'Small'),
        (ct[(ct.Medium = at.medium.width)] = 'Medium'),
        (ct[(ct.Large = at.large.width)] = 'Large'),
        (ct[(ct.ExtraLarge = at.extraLarge.width)] = 'ExtraLarge'),
        ct),
    ft =
        (((lt = ft || {})[(lt.Small = at.small.height)] = 'Small'),
        (lt[(lt.Medium = at.medium.height)] = 'Medium'),
        (lt[(lt.Large = at.large.height)] = 'Large'),
        (lt[(lt.ExtraLarge = at.extraLarge.height)] = 'ExtraLarge'),
        lt);
const mt = Object.values(at);
function ht(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        o = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...o])).join(' ');
}
const gt = () => {
    const e = re('rem');
    return (function (e, t, n) {
        const r = mt.reduce(
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
            a = s.names[s.names.length - 1] ?? st.extraSmall,
            i = at[a],
            c = r.width.names,
            l = r.height.names,
            u = c[c.length - 1] ?? st.extraSmall,
            d = l[l.length - 1] ?? st.extraSmall,
            f = { width: at[u].width, height: at[d].height };
        return {
            mediaClass: ht(o, r),
            breakpoint: i,
            screenWidthRem: e,
            screenHeightRem: t,
            breaks: s.names,
            sides: f,
            mediaSize: i.width,
            mediaWidth: f.width,
            mediaHeight: f.height,
            upscale: n > 1,
        };
    })(e.width, e.height, _e(1));
};
function pt({ children: e }) {
    const [t, n] = c.useState(gt);
    return (
        c.useLayoutEffect(() => {
            function e() {
                n(gt);
            }
            e();
            const t = Z(e),
                r = J(e);
            return () => {
                (t(), r());
            };
        }, []),
        l.jsx(ot.Provider, { value: t, children: e })
    );
}
function bt() {
    return (function () {
        const e = c.useContext(ot);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function _t({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: o } = bt();
    return l.jsx('div', { className: u(t, 'media-wrapper', r, o && 'media-upscale'), ...n, children: e });
}
function vt({ children: e, ...t }) {
    return l.jsx(pt, { children: l.jsx(_t, { ...t, children: e }) });
}
function yt(e, t) {
    return (function (e, t, n) {
        return n ? e.breaks.reduce((e, t) => (n[t] ? { ...e, ...n[t] } : e), t) : t;
    })(bt(), e, t);
}
function wt(e, t) {
    return bt().upscale ? t : e;
}
const xt = (e) => {
    const t = c.useRef();
    return (
        c.useEffect(() => {
            t.current = e;
        }, [e]),
        t.current
    );
};
const Et = [];
function Rt(e) {
    const t = c.useRef(e);
    return (
        c.useLayoutEffect(() => {
            t.current = e;
        }),
        c.useCallback((...e) => (0, t.current)(...e), Et)
    );
}
function Nt(e) {
    c.useEffect(e, []);
}
function St(e) {
    c.useEffect(() => e, []);
}
const Tt = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new Ye();
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
                if (e === Pe.NONE) return Ce;
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
    Ct = c.createContext(void 0);
function kt(e, t, n, r) {
    const o = Rt((e) => {
            viewEnv.isEventHandled() || (n(e), viewEnv.setEventHandled());
        }),
        s = (function () {
            const e = c.useContext(Ct);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        a = c.useMemo(() => s[t].register(e, o), [s, t, e, o]);
    c.useEffect(() => a, [a]);
}
function zt(e, t, n) {
    return kt(e, 'keydown', t);
}
function Pt(e) {
    const t = c.useMemo(Tt, []),
        n = c.useMemo(Tt, []);
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
    return l.jsx(Ct.Provider, { value: r, children: e.children });
}
const jt = (e, t) => {
    c.useEffect(() => {
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
    }, t);
};
function At(e, t) {
    c.useEffect(() => {
        let t = () => {};
        const n = () => {
            (t(), (t = $e(e)));
        };
        return (
            window.addEventListener('resize', n),
            () => {
                (t(), window.removeEventListener('resize', n));
            }
        );
    }, t);
}
const It = (e, t, n = !0) => {
        const r = Rt((e) => {
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
    Mt = 0;
function Bt() {
    const e = c.useRef(Mt);
    return (
        St(() => {
            window.cancelAnimationFrame(e.current);
        }),
        c.useMemo(
            () => ({
                run: (t) => {
                    (window.cancelAnimationFrame(e.current),
                        (e.current = window.requestAnimationFrame(() => {
                            e.current = window.requestAnimationFrame(() => {
                                (t(), (e.current = Mt));
                            });
                        })));
                },
                clear: () => {
                    (window.cancelAnimationFrame(e.current), (e.current = Mt));
                },
                get isRunning() {
                    return e.current !== Mt;
                },
            }),
            [],
        )
    );
}
function Ot(e, t, n) {
    const r = c.useMemo(
        () =>
            (function (e, t, n, r) {
                let o,
                    s = !1,
                    a = 0;
                function i() {
                    o && clearTimeout(o);
                }
                function c(...c) {
                    const l = this,
                        u = Date.now() - a;
                    function d() {
                        ((a = Date.now()), n.apply(l, c));
                    }
                    s ||
                        (r && !o && d(),
                        i(),
                        void 0 === r && u > e
                            ? d()
                            : !0 !== t &&
                              (o = setTimeout(
                                  r
                                      ? function () {
                                            o = void 0;
                                        }
                                      : d,
                                  void 0 === r ? e - u : e,
                              )));
                }
                return (
                    'boolean' != typeof t && ((r = n), (n = t), (t = void 0)),
                    (c.cancel = function () {
                        (i(), (s = !0));
                    }),
                    c
                );
            })(n, e),
        t,
    );
    return (c.useEffect(() => r.cancel, [r]), r);
}
const Lt = 0;
function Dt() {
    const e = c.useRef(Lt);
    return (
        St(() => {
            window.clearTimeout(e.current);
        }),
        c.useMemo(
            () => ({
                run: (t, n) => {
                    (window.clearTimeout(e.current),
                        (e.current = window.setTimeout(() => {
                            ((e.current = Lt), t());
                        }, n)));
                },
                clear: () => {
                    (window.clearTimeout(e.current), (e.current = Lt));
                },
                get isRunning() {
                    return e.current !== Lt;
                },
            }),
            [],
        )
    );
}
function $t({ resId: e = 0, contentId: t, decoratorId: n, disabled: r, args: o, showDelay: s = 400 }) {
    const a = Dt(),
        i = c.useRef({ display: !1, resId: e }),
        [{ hide: l, getCurrentState: u }, d] = c.useMemo(() => {
            function c() {
                r || ((i.current.display = !0), ge.tooltip.open(e, t, n, o));
            }
            function l() {
                (a.clear(), ge.tooltip.hide(e, t, n), (i.current.display = !1));
            }
            return [
                { hide: l, show: c, getCurrentState: () => i.current },
                {
                    onMouseEnter: () => {
                        a.run(c, s);
                    },
                    onMouseLeave: l,
                    onClick: l,
                },
            ];
        }, [o, t, n, r, e, s, a]);
    return (
        St(() => {
            const e = u().resId;
            u().display && void 0 !== e && pe().includes(e) && l();
        }),
        d
    );
}
function Ft({ alert: e, body: t, header: n, note: r, hasHtmlContent: o }) {
    return $t(
        c.useMemo(() => {
            const s = k.resolve('views');
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
function Ht(e) {
    const t = k.resolve('views');
    return $t(
        c.useMemo(
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
const Wt = ['ko', 'no'];
const Ut = {
    click: Kt('play'),
    'mouse-enter': Kt('highlight'),
    increaseAmount: Kt('cons_ammo_roll_plus'),
    decreaseAmount: Kt('cons_ammo_roll_minus'),
    close: Kt('cancelcloseno'),
    'show-context-menu': Kt('tabb'),
};
function Kt(e) {
    return () => {
        ae.sound(e);
    };
}
function Vt(e, t) {
    return Object.entries(e).reduce(
        (e, [t, n]) => (
            (e[t] = (e) => {
                var r;
                e && e.target in n ? ae.sound(n[e.target]) : null == (r = Ut[t]) || r.call(Ut, e);
            }),
            e
        ),
        {},
    );
}
const Gt = c.createContext(null);
function qt({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const o = c.useMemo(() => ({ ...Ut, ...t }), [t]),
        s = c.useMemo(
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
    return l.jsx(Gt.Provider, { value: s, children: r });
}
function Xt() {
    const e = c.useContext(Gt);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const Yt = 2;
function Qt({ resId: e = 0, contentId: t, decoratorId: n, args: r, disabled: o, soundTarget: s }) {
    const a = Xt(),
        [{ hide: i }, l] = c.useMemo(() => {
            function i() {
                o || ge.contextMenu.open(e, t, n, r);
            }
            return [
                {
                    hide: function () {
                        ge.contextMenu.hide(e, t, n);
                    },
                    show: i,
                },
                {
                    onMouseDown: (e) => {
                        (function (e) {
                            return e.button === Yt;
                        })(e) &&
                            (a.play('show-context-menu', {
                                target: s ?? 'react-toolkit:use_context_menu',
                                original: e,
                            }),
                            i());
                    },
                },
            ];
        }, [r, t, n, e, o, a, s]);
    return (c.useEffect(() => i, [i]), l);
}
const Zt = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    Jt = new Set(['number', 'string', 'boolean', 'bigint']),
    en = new Set(['Dict']);
function tn(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var o, s;
    const a = e,
        i = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (Zt.has(i)) return a;
    if (null === a) return a;
    const c = { depth: n + 1, maxDepth: r };
    if (Array.isArray(a)) return a.map((e) => tn(e, c));
    if ('object' === i) {
        const r = (null == (o = a.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => tn(e, c));
        if ('CoherentArrayProxy' === r) return e.map((e) => tn(e.value, c));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in a) {
                    const n = a[t];
                    Jt.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in a) {
                    const n = a[t],
                        r = (null == (s = null == a ? void 0 : a.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                    en.has(r) || (e[t] = tn(n, c));
                }
                return e;
            }
        }
        const i = {};
        for (const e of Object.keys(a)) i[e] = tn(a[e], c);
        return i;
    }
    return (console.error('Incorrect value to clone model', a), a);
}
const nn = { deep: !1, equals: Ce },
    rn = { cloneItem: !0 },
    on = { shallow: !1 };
class sn {
    constructor(e, t = rn) {
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
            r[t] = d.box(this.takeItem(e, t), nn);
        }
        ((this._keys = d.set(new Set(o))), (this._data = d.box(r, nn)));
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
                : null !== s && ((n[o] = d.box(s, nn)), this._keys.add(o), this.set(n));
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
        return this.options.cloneItem ? tn(n, on) : n;
    }
    untrackedData() {
        return m(() => this._data.get());
    }
}
const an = c.createContext({ mode: 'real' }),
    cn = { equals: Ce, deep: !1 };
function ln(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        f(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const o = (o, s, a = cn) => {
            const i = d.box(o(n(s)), a);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(o(e))), s), i);
        },
        s = (o, s) => {
            const a = new sn(n(o), s);
            return ('real' === t && e.subscribe((e, t) => r.push(() => a.update(e, t)), o), a);
        },
        a = (o, s) => {
            const a = d.box(n(o) ?? s, cn);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(e)), o), a);
        };
    return {
        dict: s,
        dictRef: (e, t) => s(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => o(tn, e),
        array: a,
        object: a,
        transform: o,
        primitives: (o, s) => {
            const a = n(s);
            if (Array.isArray(o)) {
                const n = o.reduce((e, t) => ((e[t] = d.box(a[t], {})), e), {});
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
                    i = Object.entries(n),
                    c = i.reduce((e, [t, n]) => ((e[n] = d.box(a[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                i.forEach(([t, n]) => {
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
const un =
        (e = 'DataLayerProvider') =>
        (t, n, r) => {
            const o = c.createContext(null);
            function s(s) {
                var a;
                const { mode: i, options: u, children: d, mocks: f } = s,
                    m = c.useContext(an),
                    h = i ?? m.mode,
                    g = f ?? m.mocks,
                    p = c.useRef([]),
                    b = null == (a = null == r ? void 0 : r.useRequires) ? void 0 : a.call(r),
                    _ = Rt((o, a, i) => {
                        var c;
                        const l =
                                'real' !== o && i
                                    ? (function (e, t) {
                                          return {
                                              subscribe: () => 0,
                                              readSafeByPath: e,
                                              readByPath: e,
                                              createCallback: (n, r) => {
                                                  const o = e(Re(r, t));
                                                  return (...e) => {
                                                      o(n(...e));
                                                  };
                                              },
                                              createCallbackNoArgs: (n) => {
                                                  const r = e(Re(n, t));
                                                  return () => {
                                                      r();
                                                  };
                                              },
                                              dispose: () => {},
                                              unsubscribe: () => {},
                                              events: { subscribersNotified: new we() },
                                          };
                                      })(i.getter, a)
                                    : Ee(a, { name: e }),
                            u = (e) => ('mocks' === o ? (null == i ? void 0 : i.getter(e, a)) : l.readByPath(e)),
                            d = (e) => p.current.push(e),
                            f = 'initial' in s && {
                                initial: null == (c = null == r ? void 0 : r.initial) ? void 0 : c.call(r, s.initial),
                            },
                            m = t({
                                ...f,
                                mode: o,
                                readByPath: u,
                                requires: b,
                                externalModel: l,
                                observableModel: ln(l, o, u),
                                cleanup: d,
                            }),
                            h = { ...f, mode: o, model: m, externalModel: l, cleanup: d, requires: b },
                            g = 'mocks' === o && (null == i ? void 0 : i.controls) ? i.controls(h) : {};
                        return {
                            model: m,
                            controls: { ...(null == n ? void 0 : n(h)), ...g },
                            externalModel: l,
                            mode: o,
                        };
                    }),
                    v = c.useRef(!1),
                    [y, w] = c.useState(h);
                c.useEffect(() => {
                    w(h);
                }, [h]);
                const [x, E] = c.useState(() => _(y, u, g));
                return (
                    c.useEffect(() => {
                        v.current ? E(_(y, u, g)) : (v.current = !0);
                    }, [
                        _,
                        g,
                        y,
                        null == u ? void 0 : u.context,
                        null == u ? void 0 : u.initializer,
                        null == u ? void 0 : u.getRoot,
                        null == u ? void 0 : u.rootId,
                    ]),
                    c.useEffect(
                        () => () => {
                            (x.externalModel.dispose(), p.current.forEach((e) => e()));
                        },
                        [x],
                    ),
                    l.jsx(o.Provider, { value: x, children: d })
                );
            }
            return (
                (s.displayName = e),
                [
                    s,
                    function () {
                        const e = c.useContext(o);
                        if (!e) throw new Error(`hook useModel must be used within a ${s.displayName}.`);
                        return e;
                    },
                    { Context: o },
                ]
            );
        },
    dn = {
        model: (e, t) => h(e, { equals: Ce, ...t }),
        primitive: h,
        shallow: (e, t) => h(e, { equals: g.shallow, ...t }),
        structural: (e, t) => h(e, { equals: g.structural, ...t }),
    },
    fn = (e) => (t) => {
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
                return ce.onHitTest((t) => {
                    const n = e.getBoundingClientRect();
                    return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                });
        }, []),
        l.jsx('div', { ...e, ref: fn([t, n]) })
    );
});
class mn {
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
            children: this.items.reduceRight((e, [t, n], r) => c.createElement(t, { ...n, key: r }, e), e),
        });
    }
}
async function hn(e, { root: t = document.getElementById('root'), withMedia: n = !0, fullScreen: r = !1 } = {}) {
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
                        a = (null == (o = t.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                    switch (!0) {
                        case a.includes('CoherentArrayProxy'):
                            return [...t.values()].map((t) => e(s.convertArrays ? t.value : t, s));
                        case 'Dict' === a:
                            return [...t.entries()].reduce((t, [n, r]) => ((t[n] = e(r, s)), t), { $$type: 'Dict' });
                        case 'UNKNOWN' === a:
                            return 'UNKNOWN_TYPE';
                        case a.includes('ViewModel'):
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
    const s = n ? vt : p.Fragment,
        a = (null == (o = null == window ? void 0 : window.engine) ? void 0 : o.whenReady) ?? Promise.resolve();
    (await a,
        document.documentElement.setAttribute('lang', k.resolve('langCode')),
        b.createRoot(t).render(l.jsx(s, { children: l.jsx(Pt, { children: e }) })),
        r && (ye(t), ve()));
}
const gn = c.createContext(void 0);
function pn() {
    const e = c.useContext(gn);
    if (!e) throw new Error('useRouter must be used within a RouterProvider');
    return e;
}
var bn = {};
function _n({ children: e, prefix: t = '', context: n, getRoot: r, initializer: o, rootId: s }) {
    const a = c.useRef([]),
        i = c.useRef(null),
        u = c.useMemo(() => Ee({ context: n, getRoot: r, initializer: o, rootId: s }), [n, r, o, s]),
        d = c.useCallback(
            (e) => {
                const t = u.subscribe(e);
                return () => u.unsubscribe(t);
            },
            [u],
        ),
        f = c.useCallback(() => {
            const e = u.readByPath(),
                n = { location: ((r = t + e.route), r.endsWith('/') ? r.slice(0, -1) : r), params: e.params };
            var r;
            return i.current && et.shallow(i.current, n) ? i.current : ((i.current = n), n);
        }, [u, t]),
        m = c.useSyncExternalStore(d, f);
    c.useEffect(() => u.dispose, [u]);
    const h = c.useMemo(() => {
        const e = [...a.current, m];
        return ((a.current = e), { ...m, history: e });
    }, [m]);
    bn.PUBLIC_ROUTER_DEBUG && console.log('🗺️ Route updated:', h);
    const g = c.useMemo(() => {
            const e = u.createCallback(
                    (e, t) => (
                        bn.PUBLIC_ROUTER_DEBUG && console.log('➡️ Going to', e, t),
                        { route: e, ...(Boolean(t) && { params: JSON.stringify(t) }) }
                    ),
                    'navigateTo',
                ),
                t = u.createCallbackNoArgs('navigateBack');
            return {
                push: e,
                replace: e,
                goBack: bn.PUBLIC_ROUTER_DEBUG
                    ? () => {
                          (console.log('🗺️ Route back'), t());
                      }
                    : t,
            };
        }, [u]),
        p = c.useMemo(() => ({ ...h, ...g }), [g, h]);
    return l.jsx(gn.Provider, { value: p, children: e });
}
const vn = c.forwardRef(function (
        {
            src: e,
            className: t,
            autoplay: n = !1,
            style: r,
            loop: o = !1,
            isPrebufferKeyframes: s,
            keyframesNameConfig: a,
            onClick: i,
            ...u
        },
        d,
    ) {
        const f = d,
            m = c.useRef(null);
        return (
            Nt(() => {
                let e = !1;
                return ce.onDisplayChanged((t, n) => {
                    const r = m.current;
                    r && (n === ie.hidden ? ((e = r.paused), r.pause()) : e || n !== ie.shown || r.play());
                });
            }),
            Nt(() => {
                let e = !1;
                return ee((t) => {
                    const n = m.current;
                    n && (t ? ((e = n.paused), n.pause()) : e || n.play());
                });
            }),
            c.useEffect(
                () =>
                    $e(() => {
                        const e = m.current;
                        if (!f || !e || !s) return void ((null == e ? void 0 : e.cohFastSeek) && (e.cohFastSeek = !1));
                        const t = e.cohGetKeyframeTimestamps ? e.cohGetKeyframeTimestamps() : [];
                        t.length > 0
                            ? ((e.cohFastSeek = !0),
                              t.map((t) => {
                                  (null == e ? void 0 : e.cohPrebufferKeyframe) && e.cohPrebufferKeyframe(t);
                              }))
                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                    }),
                [s, f],
            ),
            c.useEffect(() => {
                if (f && m.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: Se },
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
                                        m.current.paused || !f || !s)
                                    )
                                        return;
                                    const o = m.current.cohGetKeyframeTimestamps
                                        ? m.current.cohGetKeyframeTimestamps()
                                        : [];
                                    o.forEach((t, r) => {
                                        void 0 !== o[r] &&
                                            n > o[r] - 0.02 &&
                                            n < o[r] &&
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
                        o = () => {
                            var e;
                            return null == (e = m.current) ? void 0 : e.currentTime;
                        },
                        i = () => {
                            var e;
                            return null == (e = m.current) ? void 0 : e.duration;
                        },
                        c = (e) => {
                            m.current && (m.current.currentTime = Ne(0, m.current.duration, e));
                        },
                        l = () => {
                            var e;
                            return null == (e = m.current) ? void 0 : e.play();
                        },
                        u = () => {
                            var e;
                            return null == (e = m.current) ? void 0 : e.pause();
                        },
                        d = () => {
                            (u(), c(0));
                        },
                        h = () => {
                            var e;
                            return (null == (e = m.current) ? void 0 : e.cohGetKeyframeTimestamps)
                                ? m.current.cohGetKeyframeTimestamps()
                                : [];
                        },
                        g = (e) => {
                            (c(e), l());
                        },
                        p = (e) => {
                            (c(e), u());
                        },
                        b = () => {
                            var t;
                            ((e.changeTimeHandlers = []),
                                (e.changeKeyframeHandlers = []),
                                null == (t = e.changeTimeLoop) || t.call(e));
                        },
                        _ = (e, t) => {
                            var n;
                            return (
                                null == (n = m.current) || n.addEventListener(e, t),
                                () => {
                                    var n;
                                    return null == (n = m.current) ? void 0 : n.removeEventListener(e, t);
                                }
                            );
                        },
                        v = (e, t) => {
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
                            on: _,
                            off: v,
                            play: l,
                            pause: u,
                            stop: d,
                            cleanup: b,
                            getCurrentTime: o,
                            getDuration: i,
                            getCachedKeyframes: h,
                            goToAndPlay: g,
                            goToAndStop: p,
                            setCurrentTime: c,
                            domRef: m.current,
                            onChangeTime: n,
                            onKeyframes: r,
                        }),
                        () => {
                            (b(), (f.current = null));
                        }
                    );
                }
            }, [a, f, s]),
            c.useEffect(() => {
                m.current && n && m.current.play();
            }, [n, o]),
            St(() => {
                var e;
                null == (e = m.current) || e.pause();
            }),
            l.jsx('video', { src: e, className: t, style: r, loop: o, ref: m, onClick: i, ...u })
        );
    }),
    yn = c.memo(vn);
function wn(e, t, n) {
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
            r = _(n.className, n.cva),
            o = n.element,
            a = c.forwardRef(function (e, t) {
                return c.createElement(o, { ...('function' == typeof o ? e : xn(s, e)), ref: t, className: r(e) });
            });
        return ((a.displayName = e), n.cva && (a.cva = n.cva), a);
    }
    const a = _(t, n),
        i = c.forwardRef(function (t, n) {
            return l.jsx('div', { 'data-name': e, ...xn(s, t), ref: n, className: a(t) });
        });
    return ((i.displayName = e), n && (i.cva = n), i);
}
function xn(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
function En(e) {
    return l.jsx(l.Fragment, { children: e.children });
}
function Rn(e) {
    return l.jsx(En, {
        children: l.jsx(qt, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
const Nn = 1,
    Sn = 2,
    Tn = 3;
const Cn = 'FormatText_db904f12',
    kn = 'FormatText_base__fullSize_a514958e',
    zn = new Set(
        (null ==
        (e =
            'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom')
            ? void 0
            : e.split(', ')) ?? [],
    );
let Pn = 0;
function jn() {
    return ++Pn;
}
const An = {
    class: function (e, ...t) {
        return l.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            jn(),
        );
    },
    colorLegacy: function (e, t) {
        const n = jn();
        return zn.has(String(t))
            ? l.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : l.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: function e(t) {
        if (Array.isArray(t)) return t.map(e);
        if ('string' == typeof t) {
            const e = k.resolve('langCode');
            return l.jsx(
                c.Fragment,
                { children: nt(rt(t, e), e, (e, t) => l.jsx('span', { children: e }, `${e}${t}`)) },
                jn(),
            );
        }
        return t;
    },
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
            jn(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function In(e, t, n, r) {
    const o = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...o] = n.slice(1, -1).split(' ');
                return t ? In(e, t, o, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        s = r[t];
    return s ? s(e, ...o) : (console.error(`Function ${t} is not registered`), e);
}
function Mn(e, t, n) {
    return e.reduce((e, t) => {
        const [r, ...o] = (function (e) {
            const t = [];
            let n = '',
                r = !1,
                o = !1,
                s = '';
            for (let a = 0; a < e.length; a++) {
                const i = e[a];
                ("'" !== i && '"' !== i) || o || r
                    ? i === s && o
                        ? ((o = !1), (n += i))
                        : '(' !== i || o
                          ? ')' === i && r && !o
                              ? ((r = !1), (n += i))
                              : ' ' !== i || r || o
                                ? (n += i)
                                : n && (t.push(n), (n = ''))
                          : ((r = !0), (n += i))
                    : ((o = !0), (s = i), (n += i));
            }
            return (n && t.push(n), t);
        })(t.trim());
        return r ? In(e, r, o, n) : e;
    }, t);
}
function Bn(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function On(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !Bn(e[r]); ) r++;
            const o = e.slice(n + 1, r),
                s = t[o];
            if (s) return On(e.replace(`$${o}`, String(s)), t);
        }
    }
    return e;
}
function Ln(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = On(e[r], t);
    return n;
}
const Dn = ['number', 'string', 'undefined'];
function $n(e, t, n = {}, r = !0) {
    r && (Pn = 0);
    const o = [];
    function s(e) {
        if (Dn.includes(typeof e)) {
            const t = o.at(-1);
            if ('string' == typeof t) return void (o[o.length - 1] = t + e);
        }
        o.push(e);
    }
    for (const a of e)
        if (a.type === Nn) s(a.value);
        else if (a.type === Tn)
            null === n[a.name] || Dn.includes(typeof n[a.name])
                ? s(n[a.name] ?? `{{${a.name}}}`)
                : o.push(l.jsx(c.Fragment, { children: n[a.name] }, `var-${a.name}-${a.instanceId}`));
        else if (a.type === Sn) {
            const e = $n(a.children, t, n, !1),
                r = Mn(Ln(a.attrs, n), e, t);
            o.push(r);
        }
    return o;
}
function Fn(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function Hn(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function Wn(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const Un = { start: '{{', end: '}}' },
    Kn = c.memo(function (e) {
        const {
                brackets: t = Un,
                text: n,
                params: r,
                upgradeLegacy: o,
                fullSize: s,
                inline: a,
                formatters: i,
                split: d,
                ...f
            } = e,
            m = c.useMemo(
                () =>
                    e.upgradeLegacy
                        ? (function (e) {
                              return (function (e, t, n, r, o, s, a, i, c) {
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
                                          return a(s(o(r(n(t(e))))));
                                      case 8:
                                          return i(a(s(o(r(n(t(e)))))));
                                      case 9:
                                          return c(i(a(s(o(r(n(t(e))))))));
                                      default: {
                                          let e = arguments[0];
                                          for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
                                          return e;
                                      }
                                  }
                              })(e, Wn, Fn, Hn);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            h = c.useMemo(() => (e.formatters ? { ...An, ...e.formatters } : An), [e.formatters]),
            g = c.useMemo(
                () =>
                    (function (e, t) {
                        const n = [],
                            r = [];
                        let o = '',
                            s = !1,
                            a = '',
                            i = 0;
                        for (let c = 0; c < e.length; c++) {
                            const l = e[c];
                            if (l === t.start[0] && e.slice(c, c + t.start.length) === t.start)
                                (o &&
                                    (r.length > 0
                                        ? r[r.length - 1].node.children.push({ type: Nn, value: o })
                                        : n.push({ type: Nn, value: o }),
                                    (o = '')),
                                    (s = !0),
                                    (c += t.start.length - 1));
                            else if (l === t.end[0] && e.slice(c, c + t.end.length) === t.end) {
                                ((s = !1), (c += t.end.length - 1));
                                const e = a.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        o = { type: Sn, attrs: t.split('|'), instanceId: ++i, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(o) : n.push(o),
                                        r.push({ node: o, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: Tn, instanceId: ++i, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                a = '';
                            } else s ? (a += l) : (o += l);
                        }
                        o &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: Nn, value: o })
                                : n.push({ type: Nn, value: o }));
                        return n;
                    })(d ? `{{@ split}}${m}{{/}}` : m, t),
                [t, m, d],
            ),
            p = c.useMemo(() => $n(g, h, e.params), [g, h, e.params]),
            b = u(Cn, s && kn, f.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              l.jsx('p', {
                  ...f,
                  className: b,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: p,
              }))
            : l.jsx('span', { ...f, className: b, children: p });
    });
function Vn({ path: e, ...t }) {
    return l.jsx(Kn, { text: k.resolve('strings').readOrEmpty(e), ...t });
}
const Gn = 'primary',
    qn = 'custom',
    Xn = { large: 'large', medium: 'medium', small: 'small' },
    Yn = c.createContext(null);
function Qn() {
    const e = c.useContext(Yn);
    return (Fe(null !== e, 'You can use tabs hooks only with Tabs component'), e);
}
const Zn = 'HorizontalTabs_outerBorderImage_8085e49e',
    Jn = 'HorizontalTabs_mainBorderImage_558d1c3f',
    er = 'HorizontalTabs_outerBorder_3255d0c5',
    tr = 'HorizontalTabs_mainBorder_61e34c2c',
    nr = 'HorizontalTabs_content_1ae3c4bd',
    rr = wn('Tabs', 'HorizontalTabs_69e3c6f3', {
        variants: {
            size: {
                [Xn.large]: 'HorizontalTabs_base__size-large_12c75e24',
                [Xn.medium]: 'HorizontalTabs_base__size-medium_afc0934f',
                [Xn.small]: 'HorizontalTabs_base__size-small_75fae891',
            },
            theme: { [Gn]: 'HorizontalTabs_base__theme-primary_5e3af03e', [qn]: void 0 },
        },
    }),
    or = c.forwardRef(function ({ children: e, classNames: t, ...n }, r) {
        const o = Qn();
        return l.jsx(rr, {
            ...n,
            ref: r,
            className: u(n.className, null == t ? void 0 : t.base),
            size: o.size,
            theme: o.theme,
            children: l.jsxs('div', {
                className: u(er, null == t ? void 0 : t.outerBorder),
                children: [
                    l.jsx('div', { className: u(Zn, null == t ? void 0 : t.outerBorderImage) }),
                    l.jsxs('div', {
                        className: u(tr, null == t ? void 0 : t.mainBorder),
                        children: [
                            l.jsx('div', { className: u(Jn, null == t ? void 0 : t.mainBorderImage) }),
                            l.jsx('div', { className: u(nr, null == t ? void 0 : t.content), children: e }),
                        ],
                    }),
                ],
            }),
        });
    }),
    sr = 'Tab_border_a63aeb3f',
    ar = 'Tab_background_4c9b3eb9',
    ir = 'Tab_backgroundPattern_417be4b5',
    cr = 'Tab_innerBorderImage_adadda5f',
    lr = 'Tab_content_b3f6c22b',
    ur = wn('Tab', 'Tab_f59c2b00', {
        variants: {
            size: {
                [Xn.large]: 'Tab_base__size-large_0',
                [Xn.medium]: 'Tab_base__size-medium_0',
                [Xn.small]: 'Tab_base__size-small_0',
            },
            theme: { [Gn]: 'Tab_base__theme-primary_90fd5ee', [qn]: void 0 },
            state: { active: 'Tab_base__active_0', inactive: 'Tab_base__inactive_0' },
        },
        defaultVariants: { size: Xn.medium, theme: Gn },
    }),
    dr = c.forwardRef(function (
        { theme: e, size: t, tabId: n, active: r, children: o, onClick: s, onMouseEnter: a, ...i },
        c,
    ) {
        const u = Xt();
        return l.jsx(ur, {
            ...i,
            ref: c,
            theme: e,
            size: t,
            state: r === n ? 'active' : 'inactive',
            onMouseEnter: function (e) {
                (r !== n && u.play('mouse-enter', { target: ur.displayName, original: e }), null == a || a(e));
            },
            onClick: function (e) {
                (r !== n && u.play('click', { target: ur.displayName, original: e }), null == s || s(e));
            },
            children: o,
        });
    });
function fr({ active: e, theme: t, size: n, children: r, onActiveChange: o }) {
    const [s, a] = c.useState(e),
        i = c.useRef(e),
        u = c.useMemo(() => ({ active: s, theme: t, size: n, change: a }), [s, n, t]);
    return (
        c.useLayoutEffect(() => {
            a(e);
        }, [e]),
        c.useEffect(() => {
            i.current !== s && ((i.current = s), null == o || o(s));
        }, [s, o]),
        l.jsx(Yn.Provider, { value: u, children: r })
    );
}
((fr.Switcher = or),
    (fr.Tab = function ({ tabId: e, classNames: t, className: n, children: r, ...o }) {
        const s = Qn();
        return l.jsxs(dr, {
            'data-test-id': `${e}Tab`,
            ...o,
            tabId: e,
            theme: s.theme,
            size: s.size,
            active: s.active,
            className: u(null == t ? void 0 : t.base, n),
            onClick: (t) => {
                var n;
                (null == (n = o.onClick) || n.call(o, t), s.change(e));
            },
            children: [
                l.jsx('div', { className: u(ar, null == t ? void 0 : t.background) }),
                l.jsx('div', { className: u(ir, null == t ? void 0 : t.backgroundPattern) }),
                l.jsx('div', { className: u(sr, null == t ? void 0 : t.border) }),
                l.jsx('div', { className: u(cr, null == t ? void 0 : t.borderImage) }),
                l.jsx('div', { className: u(lr, null == t ? void 0 : t.content), children: r }),
            ],
        });
    }),
    (fr.Content = function ({ children: e, keyOverride: t }) {
        const n = Qn();
        return l.jsx(c.Fragment, { children: e(n.active) }, t ?? n.active);
    }));
const mr = () => {};
function hr(e) {
    const t = e;
    return c.forwardRef(function (e, n) {
        const r = yt(e, e.adaptive),
            { path: o, ...s } = r,
            a = r.images ?? k.resolve('images'),
            i = { ...s, ref: n };
        {
            const e = o ? a.readOr(o, mr, 'warn') : void 0;
            return e ? l.jsx(t, { ...i, src: e }) : l.jsx(t, { ...i, unknown: !0 });
        }
    });
}
const gr = {
        background:
            'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
        backgroundSize: '20rem 20rem',
        backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
        backgroundColor: '#000',
    },
    pr = hr(
        c.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: n,
                    fit: r,
                    position: o,
                    width: s,
                    src: a,
                    height: i,
                    unselectable: c,
                    unknown: u,
                    unknownStyle: d = gr,
                    ...f
                } = e;
                return l.jsx('div', { ...f, ref: t, style: { width: e.width, height: e.height, ...d, ...e.style } });
            }
            const {
                repeat: n,
                fit: r,
                position: o,
                width: s,
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
                    backgroundPosition: o ?? 'center center',
                    width: 'number' == typeof s ? `${s}rem` : s,
                    height: 'number' == typeof a ? `${a}rem` : a,
                    ...d.style,
                },
            });
        }),
    ),
    br = hr(
        c.forwardRef(function (e, t) {
            const { width: n, height: r, src: o, unselectable: s, unknown: a, unknownStyle: i = gr, ...c } = e;
            return e.unknown
                ? l.jsx('div', { ...c, style: { width: e.width, height: e.height, ...i } })
                : l.jsx('img', { ...c, ref: t, src: o, width: n, height: r });
        }),
    ),
    _r = c.createContext(void 0);
var vr = ((e) => ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e))(vr || {});
const yr = {
        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
        animationConfig: { tension: 170, friction: 26 },
    },
    wr = { horizontal: 'horizontal', vertical: 'vertical' },
    xr = {
        background: 'Thumb_background_7f3dd6ac',
        border: 'Thumb_border_5749138b',
        innerBorder: 'Thumb_innerBorder_42bafd18',
        icon: 'Thumb_icon_dca8bf26',
        base: 'Thumb_6ff3e706',
        base__vertical: 'Thumb_base__vertical_55a67c91',
        base__horizontal: 'Thumb_base__horizontal_27ca7ace',
        base__active: 'Thumb_base__active_830942bb',
    },
    Er = 'forwardDisabled',
    Rr = 'backwardDisabled';
function Nr(e) {
    const t = c.useRef(null),
        [n, r] = c.useState(!1),
        o = Rt(function () {
            const n = t.current,
                r = e.trackRef.current,
                o = e.api.getWrapperSize(),
                s = e.api.getContainerSize();
            if (!(o && s && n && r)) return;
            const a = Math.min(1, o / s),
                i = 'horizontal' === e.direction ? 'width' : 'height';
            return ((n.style[i] = `${e.calculateSize(r, a)}px`), (n.style.display = 'flex'), a);
        }),
        [s, a] = v(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: V.easeInCubic,
            config: { duration: 200 },
        }));
    c.useEffect(() => {
        n || e.dragging
            ? a.start({
                  to: e.styles.opened,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.add(xr.base__active);
                  },
              })
            : a.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.remove(xr.base__active);
                  },
              });
    }, [n, e.dragging, e.styles.closed, e.styles.opened, a]);
    const i = Rt(function () {
            var n;
            const r = e.trackRef.current,
                o = t.current,
                s = e.railBeforeRef.current,
                i = e.railAfterRef.current,
                c = e.api.getWrapperSize(),
                l = e.api.getContainerSize();
            if (!(c && r && o && s && i && l)) return;
            const u = e.api.animationScroll.scrollPosition.get(),
                d = Math.min(1, c / l),
                f = Ne(0, 1, u / (l - c)),
                m = e.calculateSize(r, d),
                h = (('horizontal' === e.direction ? r.offsetWidth : r.offsetHeight) - m) * f || 0,
                g = Math.round(2 * (2 * f - 1));
            (o.style.setProperty('--thumbOffset', `${h}px`),
                null == (n = e.onUpdate) || n.call(e, { thumbSize: m, thumbOffset: h, newBouncingCorrection: g }));
            const p = 0 === h || e.isBoundThumb(h) ? 0 : g;
            return (
                a.start({
                    to: { '--bouncingCorrection': `${p}px` },
                    ...(0 === p ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                h
            );
        }),
        d = Bt(),
        f = Rt(function () {
            o();
            const t = i();
            'number' == typeof t &&
                (function (e, t) {
                    if (!e.trackRef.current || !e.thumbRef.current) return;
                    const n = e.trackRef.current.parentNode;
                    if (n instanceof HTMLElement) {
                        if (0 === t) return (n.classList.add(Rr), void n.classList.remove(Er));
                        if (e.isBoundThumb(t)) return (n.classList.remove(Rr), void n.classList.add(Er));
                        (n.classList.remove(Rr), n.classList.remove(Er));
                    }
                })(e, t);
        });
    c.useEffect(() => d.run(f));
    const { api: m } = e;
    return (
        c.useEffect(() => {
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
        l.jsxs(y.div, {
            ref: fn([t, e.thumbRef]),
            className: u(xr.base, xr[`base__${e.direction}`], e.className),
            style: s,
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: [
                l.jsx('div', { className: xr.background }),
                l.jsx('div', { className: xr.border }),
                l.jsx('div', { className: xr.innerBorder }),
                l.jsx('div', { className: xr.icon }),
            ],
        })
    );
}
const Sr = { pending: !1, offset: 0 };
function Tr(e, t, n, r, o) {
    const [s, a] = c.useState(Sr),
        i = Rt(t),
        l = c.useCallback(
            (t) => {
                (a(t), e.current && i({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [i, e],
        );
    return (
        c.useEffect(() => {
            if (!s.pending) return;
            const t = ne.move(function ([t]) {
                    const a = n.contentRef.current;
                    if (!a) return;
                    const c = r.current,
                        l = e.current;
                    if (!a || !c || !l) return;
                    const u = o(t, s, { parent: c, thumb: l }),
                        d = u * (n.getContainerSize() ?? 0);
                    (n.scrollPosition.start({
                        scrollPosition: n.clampPosition(a, d),
                        reset: !0,
                        immediate: !0,
                        from: { scrollPosition: n.animationScroll.scrollPosition.get() },
                    }),
                        i({ type: 'dragging', dragElement: l, elementOffset: u, contentOffset: d }));
                }),
                a = ne.up(() => {
                    l(Sr);
                });
            return () => {
                (t(), a());
            };
        }, [n, s.offset, s.pending, i, l, e, r, s, o]),
        l
    );
}
const Cr = 'disable',
    kr = 'scroll-active';
function zr({ api: e, baseRef: t }) {
    const n = Bt(),
        r = Rt(function () {
            const n = e.getWrapperSize(),
                r = e.getContainerSize();
            if (null === t.current || void 0 === r || void 0 === n) return;
            1 === Math.min(1, n / r || 1) ? t.current.classList.remove(kr) : t.current.classList.add(kr);
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
function Pr(e, t) {
    const n = e.getBoundingClientRect(),
        r = t === wr.horizontal ? n.x : n.y;
    return { start: r, end: t === wr.horizontal ? r + n.width : r + n.height };
}
function jr(e, t, n, r, o, s, a) {
    const i = Xt(),
        l = o.stepTimeout || 100,
        [u, d] = (function (e, t, n = []) {
            const r = c.useRef(0),
                o = c.useCallback(() => window.clearInterval(r.current), n || []);
            c.useEffect(() => o, [o]);
            const s = (n ?? []).concat([t]);
            return [
                c.useCallback((n) => {
                    ((r.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                }, s),
                o,
            ];
        })((e) => o.applyStepTo(e), l, [o]);
    c.useEffect(
        () => (document.addEventListener('mouseup', d, !0), () => document.removeEventListener('mouseup', d, !0)),
        [d],
    );
    const f = c.useCallback(
            (e) => {
                e.target.classList.contains(Cr) ||
                    (i.play('click', { target: 'Scroll:Back', original: e }), u(vr.Next));
            },
            [u, i],
        ),
        m = c.useCallback(
            (e) => {
                e.target.classList.contains(Cr) ||
                    (i.play('click', { target: 'Scroll:Forward', original: e }), u(vr.Prev));
            },
            [u, i],
        ),
        h = c.useCallback(
            (c) => {
                const l = e.current,
                    u = t.current,
                    d = n.current,
                    h = r.current;
                if (!(l && u && d && h && 0 === c.button)) return;
                const g = (function (e, t, n, r, o, s) {
                        return {
                            occurredEvent: s === wr.horizontal ? e.screenX : e.screenY,
                            bar: Pr(t, s),
                            thumb: Pr(n, s),
                            backButton: Pr(r, s),
                            forwardButton: Pr(o, s),
                        };
                    })(c, l, u, d, h, a),
                    p = g.thumb.start <= g.occurredEvent && g.occurredEvent <= g.thumb.end,
                    b =
                        (g.backButton.start <= g.occurredEvent && g.occurredEvent <= g.backButton.end) ||
                        (g.forwardButton.start <= g.occurredEvent && g.occurredEvent <= g.forwardButton.end);
                if (p) s({ pending: !0, offset: g.occurredEvent - g.thumb.start });
                else if (b) {
                    ((g.occurredEvent > g.thumb.start ? vr.Prev : vr.Next) === vr.Next ? f : m)(c);
                } else {
                    const e = g.occurredEvent - g.bar.start,
                        t = g.thumb.end - g.thumb.start,
                        n = g.bar.end - g.bar.start,
                        r = o.getContainerSize();
                    if ('number' != typeof r || Number.isNaN(r)) return console.error('Incorrect container size');
                    const s = ((e - t / 2) / n) * r;
                    o.applyScroll(s);
                }
                i.play('click', { target: 'Scroll:' + (p ? 'thumb' : b ? 'button' : ''), original: c });
            },
            [e, t, n, r, i, a, s, f, m, o],
        ),
        g = c.useCallback(
            (e) => {
                e.target.classList.contains(Cr) || i.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [i],
        );
    return c.useMemo(
        () => ({
            handleMouseBackDown: f,
            handleMouseEnter: g,
            handleMouseDownTrack: h,
            handleMouseForwardDown: m,
            handleMouseForwardUp: d,
            handleMouseBackUp: d,
        }),
        [f, g, h, m, d],
    );
}
const Ar = 'HorizontalBar_rail_37858d8f',
    Ir = 'HorizontalBar_4df27ac3',
    Mr = 'HorizontalBar_track_649dc296',
    Br = 'HorizontalBar_rail__left_1a906b4e',
    Or = 'HorizontalBar_rail__right_cd24364e',
    Lr = 'HorizontalBar_button__right_e8f0aa2d',
    Dr = 'HorizontalBar_button__left_da330e13',
    $r = 'HorizontalBar_button_cbabd91',
    Fr = { closed: { height: '3rem', top: '4rem' }, opened: { height: '11rem', top: '0rem' } },
    Hr = (e, t) => Math.max(_e(13), e.offsetWidth * t);
c.memo(function ({ classNames: e = {}, onDrag: t = Se }) {
    const n = c.useRef(null),
        r = c.useRef(null),
        o = c.useRef(null),
        s = c.useRef(null),
        a = c.useRef(null),
        i = c.useRef(null),
        d = c.useRef(null),
        [f, m] = c.useState(!1),
        { api: h } = (function () {
            const e = c.useContext(_r);
            if (!e) throw new Error('useHorizontalScroll must be used within a Scroll.Horizontal.Base component');
            return e;
        })();
    zr({ baseRef: n, api: h });
    const g = Rt((e, t, { parent: n }) => (e.screenX - t.offset - n.getBoundingClientRect().x) / n.offsetWidth),
        p = Rt((e) => e - (s.current.offsetWidth - a.current.offsetWidth) >= -0.5),
        b = c.useCallback((e) => ('dragStart' === e.type ? m(!0) : 'dragEnd' === e.type && m(!1), t(e)), [t]),
        _ = Tr(a, b, h, s, g),
        v = Rt(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
            const r = s.current,
                o = i.current,
                a = d.current;
            if (!r || !o || !a) return;
            const c = _e(5);
            ((o.style.width = `${t - c + n}px`), (a.style.width = r.offsetWidth - e - t - c - n + 'px'));
        }),
        { handleMouseEnter: y, handleMouseDownTrack: w } = jr(n, a, o, r, h, _, wr.horizontal);
    return l.jsxs('div', {
        className: u(Ir, e.base),
        ref: n,
        onWheel: h.handleMouseWheel,
        onMouseDown: w,
        onMouseEnter: y,
        children: [
            l.jsx('div', { ref: r, className: u($r, Dr, e.leftButton) }),
            l.jsxs('div', {
                ref: s,
                className: u(Mr, e.track),
                children: [
                    l.jsx('div', { ref: i, className: u(Ar, Br, e.leftRail) }),
                    l.jsx(Nr, {
                        dragging: f,
                        api: h,
                        calculateOffset: g,
                        calculateSize: Hr,
                        direction: 'horizontal',
                        isBoundThumb: p,
                        railAfterRef: i,
                        railBeforeRef: d,
                        styles: Fr,
                        onUpdate: v,
                        thumbRef: a,
                        trackRef: s,
                    }),
                    l.jsx('div', { ref: d, className: u(Ar, Or, e.rightRail) }),
                ],
            }),
            l.jsx('div', { ref: o, className: u($r, Lr, e.rightButton) }),
        ],
    });
});
const Wr = c.createContext(void 0);
function Ur() {
    const e = c.useContext(Wr);
    if (!e) throw new Error('useVerticalScroll must be used within a Scroll.Vertical.Base component');
    return e;
}
const Kr = (({
        getContainerSize: e,
        getBounds: t,
        setScrollPosition: n,
        getDirection: r,
        getWrapperSize: o,
        triggerMouseMoveOnUpdate: s = !1,
    }) => {
        const a = (e, n) => {
            const [r, o] = t(e);
            return Ne(r, o, n);
        };
        return (i = {}) => {
            const { settings: l = yr } = i,
                [u, d] = c.useState(!1),
                f = c.useRef(null),
                m = c.useRef(null),
                h = c.useRef({ wrapper: 0, container: 0 }),
                g = c.useMemo(() => {
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
                p = Ot(
                    () => {
                        viewEnv.forceTriggerMouseMove();
                    },
                    [],
                    150,
                ),
                [b, _] = v(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = f.current;
                        t && (n(t, e), g.trigger('change', e));
                    },
                    onRest: (e) => g.trigger('rest', e),
                    onStart: (e) => g.trigger('start', e),
                    onPause: (e) => g.trigger('pause', e),
                })),
                y = c.useCallback(
                    (e, t, n) => {
                        const r = b.scrollPosition.get(),
                            o = (b.scrollPosition.goal ?? 0) - r;
                        return a(e, t * n + o + r);
                    },
                    [b.scrollPosition],
                ),
                w = c.useCallback(
                    function (e, { immediate: t = !1, reset: n = !0 } = {}) {
                        const r = f.current;
                        r &&
                            _.start({
                                scrollPosition: a(r, e),
                                immediate: t,
                                reset: n,
                                config: l.animationConfig,
                                from: { scrollPosition: a(r, b.scrollPosition.get()) },
                                onChange: () => {
                                    s && p();
                                },
                            });
                    },
                    [_, l.animationConfig, b.scrollPosition, p],
                ),
                x = c.useCallback(
                    function (e) {
                        const t = f.current,
                            n = m.current;
                        if (!t || !n) return;
                        const r = ((e, t) => {
                                switch (t.type) {
                                    case 'proportional':
                                        return o(e) / t.factor;
                                    case 'fixed':
                                        return t.value;
                                }
                            })(n, l.step),
                            s = y(t, e, r);
                        w(s);
                    },
                    [w, y, l.step],
                ),
                E = c.useCallback(
                    function (e) {
                        u ||
                            (0 !== e.deltaY && x(r(e)),
                            f.current && g.trigger('mouseWheel', e, b.scrollPosition, t(f.current)));
                    },
                    [b.scrollPosition, x, g, u],
                ),
                R = Bt(),
                N = c.useCallback(
                    function () {
                        return R.run(() => {
                            const e = f.current;
                            e && (w(a(e, b.scrollPosition.goal), { immediate: !0 }), g.trigger('resizeHandled'));
                        });
                    },
                    [R, w, b.scrollPosition.goal, g],
                );
            It(m, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = o(t);
                h.current.wrapper !== n && N();
            });
            const S = Rt(function () {
                const t = f.current;
                if (!t) return;
                const n = e(t),
                    r = m.current ? o(m.current) : 0;
                if (h.current.container !== n || h.current.wrapper !== r) {
                    const e = a(t, b.scrollPosition.goal);
                    (e !== b.scrollPosition.goal && w(e, { immediate: !0 }),
                        (h.current.container = n),
                        (h.current.wrapper = r),
                        g.trigger('recalculateContent'));
                }
            });
            c.useEffect(
                () => (
                    window.addEventListener('resize', N),
                    () => {
                        window.removeEventListener('resize', N);
                    }
                ),
                [N],
            );
            return c.useMemo(
                () => ({
                    getWrapperSize: () => (m.current ? o(m.current) : void 0),
                    getContainerSize: () => (f.current ? e(f.current) : void 0),
                    getBounds: () =>
                        f.current ? t(f.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: l.step.clampedArrowStepTimeout,
                    settings: l,
                    clampPosition: a,
                    handleMouseWheel: E,
                    applyScroll: w,
                    applyStepTo: x,
                    contentRef: f,
                    wrapperRef: m,
                    scrollPosition: _,
                    animationScroll: b,
                    recalculateContent: S,
                    disabled: u,
                    setDisabled: d,
                    events: { on: g.on, off: g.off },
                }),
                [l, E, w, x, _, b, S, u, d, g.on, g.off],
            );
        };
    })({
        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
        getContainerSize: (e) => e.scrollHeight,
        getWrapperSize: (e) => e.offsetHeight,
        setScrollPosition: (e, t) => {
            e.scrollTop = Math.trunc(t.value.scrollPosition ?? 0);
        },
        getDirection: (e) => (e.deltaY > 1 ? vr.Next : vr.Prev),
    }),
    Vr = 'VerticalBar_rail_3d663c9',
    Gr = 'VerticalBar_7187fa00',
    qr = 'VerticalBar_track_ff482708',
    Xr = 'VerticalBar_rail__top_ee531f43',
    Yr = 'VerticalBar_rail__bottom_3eaa33b1',
    Qr = 'VerticalBar_button__bottom_6880f123',
    Zr = 'VerticalBar_button__top_b8383775',
    Jr = 'VerticalBar_button_7b0e4aca',
    eo = { closed: { width: '3rem', left: '3rem' }, opened: { width: '9rem', left: '0rem' } },
    to = (e, t) => Math.max(_e(13), e.offsetHeight * t),
    no = c.memo(function ({ classNames: e = {}, onDrag: t = Se }) {
        const n = c.useRef(null),
            r = c.useRef(null),
            o = c.useRef(null),
            s = c.useRef(null),
            a = c.useRef(null),
            i = c.useRef(null),
            d = c.useRef(null),
            [f, m] = c.useState(!1),
            { api: h } = Ur();
        zr({ baseRef: n, api: h });
        const g = Rt((e) => e - (s.current.offsetHeight - a.current.offsetHeight) >= -0.5),
            p = Rt((e, t, { parent: n }) => (e.screenY - t.offset - n.getBoundingClientRect().y) / n.offsetHeight),
            b = c.useCallback((e) => ('dragStart' === e.type ? m(!0) : 'dragEnd' === e.type && m(!1), t(e)), [t]),
            _ = Tr(a, b, h, s, p),
            v = Rt(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
                const r = s.current,
                    o = i.current,
                    a = d.current;
                if (!r || !o || !a) return;
                const c = _e(5);
                ((o.style.height = `${t - c + n}px`), (a.style.height = r.offsetHeight - e - t - c - n + 'px'));
            }),
            { handleMouseEnter: y, handleMouseDownTrack: w } = jr(n, a, r, o, h, _, wr.vertical);
        return l.jsxs('div', {
            className: u(Gr, e.base),
            ref: n,
            onWheel: h.handleMouseWheel,
            onMouseDown: w,
            onMouseEnter: y,
            children: [
                l.jsx('div', { ref: r, className: u(Jr, Zr, e.topButton) }),
                l.jsxs('div', {
                    ref: s,
                    className: u(qr, e.track),
                    children: [
                        l.jsx('div', { ref: i, className: u(Vr, Xr, e.topRail) }),
                        l.jsx(Nr, {
                            dragging: f,
                            api: h,
                            calculateOffset: p,
                            calculateSize: to,
                            direction: 'vertical',
                            isBoundThumb: g,
                            railAfterRef: i,
                            railBeforeRef: d,
                            styles: eo,
                            onUpdate: v,
                            thumbRef: a,
                            trackRef: s,
                        }),
                        l.jsx('div', { ref: d, className: u(Vr, Yr, e.bottomRail) }),
                    ],
                }),
                l.jsx('div', { ref: o, className: u(Jr, Qr, e.bottomButton) }),
            ],
        });
    }),
    ro = {
        content: 'VerticalScroll_content_62cb6120',
        defaultScroll: 'VerticalScroll_defaultScroll_c69fa70e',
        area: 'VerticalScroll_area_a3c0086a',
    },
    oo = ({ className: e, classNames: t, children: n, ...r }) => {
        const { api: o } = Ur();
        return (
            c.useEffect(() => $e(() => $e(o.recalculateContent))),
            l.jsx('div', {
                className: u(ro.base, null == t ? void 0 : t.wrapper, e),
                ref: o.wrapperRef,
                onWheel: o.handleMouseWheel,
                children: l.jsx('div', {
                    ...r,
                    className: u(ro.content, null == t ? void 0 : t.content),
                    ref: o.contentRef,
                    children: n,
                }),
            })
        );
    };
function so({ children: e }) {
    const t = Kr(),
        n = c.useMemo(() => ({ api: t }), [t]);
    return l.jsx(Wr.Provider, { value: n, children: e });
}
oo.Default = ({
    children: e,
    className: t,
    barClassNames: n,
    areaClassName: r,
    scrollClassName: o,
    scrollClassNames: s,
    onDrag: a,
}) => {
    const { api: i } = Ur(),
        d = c.useMemo(() => {
            const e = n || {};
            return { ...e, base: u(ro.base, e.base) };
        }, [n]);
    return l.jsxs('div', {
        className: u(ro.defaultScroll, t),
        onWheel: i.handleMouseWheel,
        children: [
            l.jsx('div', {
                className: u(ro.area, r),
                children: l.jsx(oo, { className: o, classNames: s, children: e }),
            }),
            l.jsx(no, { onDrag: a, classNames: d }),
        ],
    });
};
const ao = {
        tankXP: 'tankXP',
        freeXP: 'freeXP',
        credits: 'credits',
        gold: 'gold',
        crystal: 'crystal',
        equipCoin: 'equipCoin',
        eliteXp: 'eliteXp',
        depot: 'depot',
        crew: 'crew',
        custom: 'custom',
    },
    io = Object.values(ao),
    co = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
        xxl: 'xxl',
    },
    lo = { [co.extraSmall]: 16, [co.small]: 24, [co.medium]: 32, [co.large]: 48, [co.extraLarge]: 80, [co.xxl]: 96 },
    uo = { [co.extraSmall]: 32, [co.small]: 48, [co.medium]: 32, [co.large]: 96, [co.extraLarge]: 80, [co.xxl]: 96 },
    fo = {
        base: 'Currency_72d4be39',
        base__reverse: 'Currency_base__reverse_f12e61b0',
        base__notEnough: 'Currency_base__notEnough_9a7842f',
        base__credits: 'Currency_base__credits_7b9ae721',
        base__gold: 'Currency_base__gold_d6e3cbc',
        base__freeXP: 'Currency_base__freeXP_d29d5a57',
        base__crystal: 'Currency_base__crystal_f830cb47',
        base__tankXP: 'Currency_base__tankXP_1707c68b',
    },
    mo = k.resolve('intl'),
    ho = wn('Currency', fo.base, { variants: { reverse: { true: fo.base__reverse } } });
function go(e, t) {
    const n = t === ao.gold ? 'gold' : 'integral';
    return Array.isArray(e)
        ? e.map((e) => ('number' == typeof e ? mo.formatNumber(n, e) : e))
        : 'number' == typeof e
          ? mo.formatNumber(n, e)
          : e;
}
function po({
    children: e,
    type: t,
    className: n,
    classNames: r,
    imagePath: o,
    size: s = co.small,
    enough: a = !0,
    ...i
}) {
    const c = lo[s],
        d = `${t}_${c}x${c}`,
        f = uo[s],
        m = `${t}_${f}x${f}`,
        h = o || io.includes(t),
        g = wt(`library.currency.${d}`, `library.currency.${m}`);
    return l.jsxs(ho, {
        ...i,
        className: u(null == r ? void 0 : r.base, a ? fo[`base__${t}`] : fo.base__notEnough, n),
        children: [
            h && l.jsx(pr, { width: c, height: c, path: o ?? g, className: null == r ? void 0 : r.icon }),
            go(e, t),
        ],
    });
}
((po.sizes = co), (po.types = ao));
const bo = { lightTank: 'lightTank', mediumTank: 'mediumTank', heavyTank: 'heavyTank', SPG: 'SPG', 'AT-SPG': 'AT-SPG' },
    _o = Object.values(bo);
function vo(e) {
    const t = e.indexOf(':');
    return X(t < 0 ? e.toLowerCase() : e.substring(t + 1).toLowerCase());
}
function yo(e) {
    const t = e.tier;
    var n;
    Fe((n = t) >= 1 && n <= 11, `Such tier ${t} is not supported`);
    const r = e.type;
    return (
        Fe(((e) => _o.includes(e))(r), `Such vehicle type ${r} is not supported`),
        {
            tier: t,
            type: r,
            normilizedType: X(e.type),
            name: e.name,
            techName: e.techName,
            premium: e.isPremium,
            vehicleCD: e.vehicleCD,
            nation: e.nation,
        }
    );
}
function wo(e) {
    return {
        username: e.userName,
        fakeUsername: e.fakeUserName,
        clanAbbreviation: e.clanAbbrev,
        anonymizer: e.anonymizer,
        igrType: e.igrType,
        teamKiller: e.isTeamKiller,
        killed: e.isKilled,
        badge: e.badge,
        suffixBadge: e.suffixBadge,
    };
}
const xo = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    Eo = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
    Ro = wn('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    No = c.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: o = !1, silent: s = !1, ...a },
        i,
    ) {
        const c = Xt();
        return l.jsx(Ro, {
            ...a,
            ref: i,
            onMouseEnter: function (e) {
                (o || s || c.play('mouse-enter', { target: r || 'Button', original: e }), null == n || n(e));
            },
            onClick: function (e) {
                o || (s || c.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    So = {
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
    To = c.forwardRef(function (
        {
            children: e,
            size: t = Eo.large,
            theme: n = xo.primary,
            disabled: r = !1,
            silent: o = !1,
            autoAlignContent: s = !0,
            classNames: a,
            className: i,
            ...c
        },
        d,
    ) {
        return l.jsxs(No, {
            ...c,
            ref: d,
            silent: o,
            disabled: r,
            className: u(
                So.base,
                So[`base__size-${t}`],
                So[`base__theme-${n}`],
                r ? So.base__disabled : So.base__enabled,
                i,
                null == a ? void 0 : a.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = c.onClick) || t.call(c, e);
            },
            children: [
                l.jsx('div', { className: u(So.background, null == a ? void 0 : a.background) }),
                l.jsx('div', { className: u(So.border, null == a ? void 0 : a.border) }),
                l.jsx('div', { className: u(So.overlay, null == a ? void 0 : a.overlay) }),
                l.jsx('div', {
                    className: u(So.content, s && So.content__fontAligned, null == a ? void 0 : a.content),
                    children: e,
                }),
            ],
        });
    });
((To.themes = xo), (To.sizes = Eo));
const Co = 'GradientText_textOverlay_2d67fbb8',
    ko = 'GradientText_5009d812',
    zo = c.forwardRef(function ({ classNames: e, children: t }, n) {
        return l.jsxs('div', {
            ref: n,
            className: u(ko, null == e ? void 0 : e.base),
            children: [
                l.jsx('div', { className: null == e ? void 0 : e.text, children: t }),
                l.jsx('div', { className: u(Co, null == e ? void 0 : e.textOverlay), children: t }),
            ],
        });
    }),
    Po = { noneRef: 'none-ref', measured: 'measured' },
    jo = { type: 'measuring' };
function Ao() {
    const e = c.useRef(null),
        [t, n] = c.useState(jo),
        r = ((e, t = []) => {
            const n = c.useRef(),
                r = c.useCallback((...t) => {
                    (n.current && n.current(), (n.current = e(...t)));
                }, t);
            return (
                c.useEffect(
                    () => () => {
                        n.current && n.current();
                    },
                    [r],
                ),
                r
            );
        })(
            () => (
                n(jo),
                $e(() => {
                    e.current
                        ? n({
                              type: Po.measured,
                              size: { width: e.current.offsetWidth, height: e.current.offsetHeight },
                          })
                        : n({ type: Po.noneRef });
                })
            ),
            [],
        );
    return (
        c.useEffect(
            () => (window.addEventListener('resize', r), r(), () => window.removeEventListener('resize', r)),
            [r],
        ),
        [e, t, r]
    );
}
const Io = {
        [Pe.NONE]: 'NONE',
        [Pe.ALT]: 'ALT',
        [Pe.ENTER]: 'ENTER',
        [Pe.ESCAPE]: 'ESCAPE',
        [Pe.SPACE]: 'SPACE',
        [Pe.END]: 'END',
        [Pe.HOME]: 'HOME',
        [Pe.ARROW_LEFT]: 'ARROW LEFT',
        [Pe.ARROW_UP]: 'ARROW UP',
        [Pe.ARROW_RIGHT]: 'ARROW RIGHT',
        [Pe.ARROW_DOWN]: 'ARROW DOWN',
        [Pe.NUM_PLUS]: 'NUM PLUS',
        [Pe.NUM_MINUS]: 'NUM MINUS',
        [Pe.PLUS]: 'PLUS',
        [Pe.MINUS]: 'MINUS',
        [Pe.PAGE_UP]: 'PAGE UP',
        [Pe.PAGE_DOWN]: 'PAGE DOWN',
        [Pe.BACKSPACE]: 'BACKSPACE',
        [Pe.DELETE]: 'DELETE',
        [Pe.TAB]: 'TAB',
        [Pe.A]: 'A',
        [Pe.D]: 'D',
        [Pe.B]: 'B',
        [Pe.C]: 'C',
        [Pe.V]: 'V',
        [Pe.X]: 'X',
        [Pe.Z]: 'Z',
        [Pe.W]: 'W',
        [Pe.E]: 'E',
        [Pe.N]: 'N',
        [Pe.KEY_1]: 'KEY 1',
        [Pe.KEY_2]: 'KEY 2',
        [Pe.KEY_3]: 'KEY 3',
        [Pe.KEY_4]: 'KEY 4',
        [Pe.KEY_5]: 'KEY 5',
        [Pe.KEY_6]: 'KEY 6',
        [Pe.KEY_7]: 'KEY 7',
        [Pe.KEY_8]: 'KEY 8',
        [Pe.KEY_9]: 'KEY 9',
    },
    Mo = 'KeyButton_background_8a852f95',
    Bo = 'KeyButton_border_b1c50f01',
    Oo = 'KeyButton_8fd343f8',
    Lo = 'KeyButton_content_895f3727',
    Do = wn('KeyButton', Oo);
function $o({ children: e, onClick: t, onMouseEnter: n, soundTarget: r, silent: o, ...s }) {
    const a = Xt();
    return l.jsx(Do, {
        ...s,
        onMouseEnter: function (e) {
            (o || a.play('mouse-enter', { target: r ?? 'KeyButton', original: e }), null == n || n(e));
        },
        onClick: function (e) {
            (o || a.play('click', { target: r ?? 'KeyButton', original: e }), null == t || t(e));
        },
        children: e,
    });
}
const Fo = c.createContext(void 0);
function Ho({ keyCode: e, onActive: t, children: n }) {
    kt(e, 'keyup', t);
    const r = c.useMemo(() => ({ keyCode: e, onActive: t }), [e, t]);
    return l.jsx(Fo.Provider, { value: r, children: n });
}
const Wo = function ({ keyCode: e, onActive: t, silent: n = !1, classNames: r, children: o, ...s }) {
    return l.jsx(Ho, {
        keyCode: e,
        onActive: t,
        children: l.jsxs($o, {
            ...s,
            silent: n,
            className: u(Oo, null == r ? void 0 : r.base),
            children: [
                l.jsx('div', { className: u(Mo, null == r ? void 0 : r.background) }),
                l.jsx('div', { className: u(Bo, null == r ? void 0 : r.border) }),
                l.jsx('div', { className: u(Lo, null == r ? void 0 : r.content), children: o }),
            ],
        }),
    });
};
Wo.Code = function () {
    const { keyCode: e } = (function () {
        const e = c.useContext(Fo);
        if (!e) throw new Error('useKeyButtonContext must be used within KeyButtonContext');
        return e;
    })();
    return Io[e];
};
const Uo = { static: 'static', screenResponsive: 'screenResponsive', contentResponsive: 'contentResponsive' };
Object.values(Uo);
const Ko = { header: 'header', body: 'body', footer: 'footer' },
    Vo = Object.values(Ko),
    Go = c.createContext(null);
function qo() {
    const e = c.useContext(Go);
    if (null === e) throw new Error('You can use the table hooks only with the table component');
    return e;
}
function Xo({ children: e, columns: t, data: n, sorting: r, pagination: o, rowSelection: s, initialState: a, ...i }) {
    const u = c.useRef({ header: [], body: [], footer: [] }),
        m = c.useRef(new Map()),
        h = c.useRef(null),
        g = w(() => {
            const e = d.array([]);
            return {
                updateAt: f((t, n) => {
                    e[t] = n;
                }),
                getAt: dn.primitive((t) => e[t]),
            };
        }),
        p = c.useCallback(
            function () {
                0 !== m.current.size &&
                    (x(() => {
                        for (const [e, t] of m.current.entries()) g.updateAt(e, t);
                    }),
                    m.current.clear(),
                    (h.current = null));
            },
            [g],
        ),
        b = c.useCallback(
            function (e, t) {
                (m.current.set(e, t), null === h.current && (h.current = requestAnimationFrame(p)));
            },
            [p],
        ),
        _ = c.useCallback(
            (e, n, r, o) => {
                if (void 0 === u.current) return;
                Array.isArray(u.current[e][r]) || (u.current[e][r] = new Array(t.length));
                const s = u.current[e][r];
                void 0 !== s && (s[o] = n);
            },
            [t.length],
        );
    (St(() => {
        null !== h.current && (cancelAnimationFrame(h.current), (h.current = null));
    }),
        c.useLayoutEffect(
            () =>
                $e(function () {
                    const e = [...u.current.header, ...u.current.body, ...u.current.footer],
                        n = new Array(t.length).fill(0),
                        r = t.length;
                    for (let t = 0; t < e.length; t += 1) {
                        const o = e[t];
                        if (void 0 !== o)
                            for (let e = 0; e < r; e += 1) {
                                const t = o[e],
                                    r = (null == t ? void 0 : t.scrollWidth) ?? 0;
                                r > n[e] && (n[e] = r);
                            }
                        else console.warn(`Row is not found by index ${t}`);
                    }
                    for (let t = 0; t < r; t += 1) b(t, n[t]);
                }),
            [t.length, g, b],
        ));
    const v = E({
            data: n,
            columns: t,
            getCoreRowModel: T(),
            getSortedRowModel: r ? S() : void 0,
            getPaginationRowModel: o ? N() : void 0,
            initialState: a,
            state: { sorting: r, rowSelection: s, pagination: o },
            ...i,
        }),
        y = c.useMemo(
            () => ({ table: v, cellRefs: u, columnSizes: g, handleCellRefsSet: _, scheduleColumnSizeUpdate: b }),
            [v, u, g, _, b],
        );
    return l.jsx(Go.Provider, { value: y, children: e });
}
const Yo = {
        base: 'Table_85be883a',
        row: 'Table_row_881b7550',
        header: 'Table_header_ef69bf65',
        footer: 'Table_footer_ef69bf65',
        body: 'Table_body_df2c1607',
        cell: 'Table_cell_7df9641e',
        sortable: 'Table_sortable_f63b3b4f',
        contentResponsiveCellWrapper: 'Table_contentResponsiveCellWrapper_ddee221c',
    },
    Qo = wn('ContentResponsiveTableCell', Yo.cell),
    Zo = C(function (e) {
        var t;
        (Fe(
            e.cell.minSize.endsWith('rem'),
            `minSize unit of the content_responsive_cell should be in rem for ${e.cell.column.id} column`,
        ),
            Fe(
                e.cell.maxSize.endsWith('rem'),
                `maxSize unit of the content_responsive_cell should be in rem for ${e.cell.column.id} column`,
            ));
        const { className: n, style: r, cell: o, ...s } = e,
            a = c.useRef(null),
            i = o.column.getCanSort(),
            { cellRefs: d, columnSizes: f, handleCellRefsSet: m, scheduleColumnSizeUpdate: h } = qo(),
            g = f.getAt(o.index);
        return (
            c.useLayoutEffect(() => {
                var e, t;
                const n =
                    null == (t = null == (e = d.current) ? void 0 : e[o.tablePart][o.rowIndex]) ? void 0 : t[o.index];
                if (null == n)
                    return void console.warn(
                        `Ref is not assigned for content responsive cell at tablePart ${o.tablePart}, row index ${o.rowIndex}, cell index ${o.index}`,
                    );
                a.current = new ResizeObserver(function () {
                    var e;
                    let t = 0;
                    for (const n of Vo)
                        for (const r of d.current[n]) {
                            const n = (null == (e = r[o.index]) ? void 0 : e.scrollWidth) ?? 0;
                            t = Math.max(t, n);
                        }
                    h(o.index, t);
                });
                return (
                    a.current.observe(n),
                    () => {
                        a.current && (a.current.disconnect(), (a.current = null));
                    }
                );
            }, [o.index, o.rowIndex, o.tablePart, h]),
            l.jsx(
                Qo,
                {
                    className: u(
                        null == (t = o.column.columnDef.meta) ? void 0 : t.className,
                        i && Ko.header === o.tablePart && Yo.sortable,
                        n,
                    ),
                    style: {
                        ...r,
                        maxWidth: o.maxSize,
                        minWidth: o.minSize,
                        width: Xe(g) ? g : 'auto',
                        opacity: Xe(g) ? 1 : 0,
                    },
                    ...s,
                    children: l.jsx('div', {
                        className: Yo.contentResponsiveCellWrapper,
                        ref: c.useCallback(
                            (e) => m(o.tablePart, e, o.rowIndex, o.index),
                            [o.tablePart, o.rowIndex, o.index, m],
                        ),
                        children: e.children,
                    }),
                },
                e.id,
            )
        );
    }),
    Jo = wn('ScreenResponsiveTableCell', Yo.cell);
function es(e) {
    var t;
    (Fe(
        e.cell.size.endsWith('%'),
        `Size unit of the screen_responsive_cell should be in percents for ${e.cell.column.id} column`,
    ),
        Fe(
            e.cell.minSize.endsWith('rem'),
            `minSize unit of the screen_responsive_cell should be in rem for ${e.cell.column.id} column`,
        ),
        Fe(
            e.cell.maxSize.endsWith('rem'),
            `maxSize unit of the screen_responsive_cell should be in rem for ${e.cell.column.id} column`,
        ));
    const { className: n, style: r, cell: o, ...s } = e,
        [a, i] = c.useState(!1),
        d = e.cell.column.getCanSort(),
        { handleCellRefsSet: f } = qo();
    return (
        c.useEffect(
            () =>
                $e(() => {
                    i(!0);
                }),
            [],
        ),
        l.jsx(
            Jo,
            {
                ref: c.useCallback(
                    (e) => f(o.tablePart, e, o.rowIndex, o.index),
                    [o.tablePart, o.rowIndex, o.index, f],
                ),
                className: u(
                    null == (t = o.column.columnDef.meta) ? void 0 : t.className,
                    d && Ko.header === o.tablePart && Yo.sortable,
                    n,
                ),
                style: { ...r, width: o.size, minWidth: o.minSize, maxWidth: o.maxSize, opacity: a ? 1 : 0 },
                ...s,
                children: e.children,
            },
            e.id,
        )
    );
}
const ts = wn('StaticTableCell', Yo.cell);
function ns(e) {
    var t;
    Fe(e.cell.size.endsWith('rem'), `Size unit is not correct for the ${e.cell.column.id} column`);
    const { className: n, style: r, cell: o, ...s } = e,
        [a, i] = c.useState(!1),
        d = o.column.getCanSort(),
        { handleCellRefsSet: f } = qo();
    return (
        c.useEffect(
            () =>
                $e(() => {
                    i(!0);
                }),
            [],
        ),
        l.jsx(ts, {
            ref: c.useCallback((e) => f(o.tablePart, e, o.rowIndex, o.index), [o.tablePart, o.rowIndex, o.index, f]),
            className: u(
                null == (t = o.column.columnDef.meta) ? void 0 : t.className,
                d && Ko.header === o.tablePart && Yo.sortable,
                n,
            ),
            style: { ...r, width: o.size, opacity: a ? 1 : 0 },
            ...s,
            children: e.children,
        })
    );
}
const rs = wn('Table', Yo.base),
    os = wn('TableHeader', Yo.header),
    ss = wn('TableBody', Yo.body),
    as = wn('TableFooter', Yo.footer),
    is = wn('TableRow', Yo.row),
    cs = c.forwardRef(function (e, t) {
        return l.jsx(rs, { ref: t, ...e, children: e.children });
    });
((cs.Header = os),
    (cs.Body = ss),
    (cs.Footer = as),
    (cs.Row = is),
    (cs.Cell = function (e) {
        const t = e.cell.column.columnDef.meta;
        Fe(void 0 !== t, `meta data is not provided in the table columns config for ${e.cell.column.id}`);
        const { cell: n, ...r } = e;
        switch (t.column.behaviour) {
            case Uo.static:
                return l.jsx(ns, { ...r, cell: { ...n, size: t.column.size } });
            case Uo.contentResponsive:
                return l.jsx(Zo, { ...r, cell: { ...n, minSize: t.column.minSize, maxSize: t.column.maxSize } });
            case Uo.screenResponsive:
                return l.jsx(es, {
                    ...r,
                    cell: { ...n, size: t.column.size, minSize: t.column.minSize, maxSize: t.column.maxSize },
                });
            default:
                return (console.error(`Column behaviour for ${e.cell.column.id} is not provided`), null);
        }
    }),
    (cs.behaviours = Uo));
const ls = 'TruncateText_dcb41d92',
    us = c.forwardRef(function ({ text: e, tooltipParams: t, className: n, ...r }, o) {
        const s = Ft({ header: null == t ? void 0 : t.header, body: (null == t ? void 0 : t.body) || e }),
            a = c.useRef(null),
            [i, d] = c.useState(!1);
        const f = c.useCallback(() => {
            if (a.current) {
                const { scrollWidth: e, offsetWidth: t } = a.current;
                d(e > t);
            }
        }, []);
        return (
            c.useEffect(() => {
                i || s.onMouseLeave();
            }, [i, s]),
            jt(f, [f]),
            At(f, [f]),
            It(a, f),
            l.jsx('div', {
                ...r,
                ref: function (e) {
                    ((a.current = e), 'function' == typeof o ? o(e) : o && (o.current = e));
                },
                className: u(ls, n),
                ...(i ? s : {}),
                children: e,
            })
        );
    }),
    ds = { x24x24: '24x24', x32x32: '32x32', x48x48: '48x48' },
    fs = {
        [ds.x24x24]: 'library.gray_eye_24x24',
        [ds.x32x32]: 'library.gray_eye_32x32',
        [ds.x48x48]: 'library.gray_eye_48x48',
    },
    ms = {
        [ds.x24x24]: { width: '24rem', height: '24rem' },
        [ds.x32x32]: { width: '32rem', height: '32rem' },
        [ds.x48x48]: { width: '48rem', height: '48rem' },
    },
    hs = wn('PlayerInfoAnonymizer', { element: pr }),
    gs = c.forwardRef(function (
        { size: e, path: t = fs[e], width: n = ms[e].width, height: r = ms[e].height, className: o, ...s },
        a,
    ) {
        return l.jsx(hs, { ...s, ref: a, path: t, width: n, height: r, className: o });
    });
gs.sizes = ds;
const ps = {
        base: 'PlayerInfo_89eea88b',
        badge: 'PlayerInfo_badge_9f134a01',
        name: 'PlayerInfo_name_120449f9',
        name__medium: 'PlayerInfo_name__medium_4066d463',
        name__big: 'PlayerInfo_name__big_4119f7ab',
        clanTag: 'PlayerInfo_clanTag_120449f9',
        clanTag__medium: 'PlayerInfo_clanTag__medium_4066d463',
        clanTag__big: 'PlayerInfo_clanTag__big_4119f7ab',
        stripe: 'PlayerInfo_stripe_65882a8f',
        stripe__medium: 'PlayerInfo_stripe__medium_cc0a2a19',
        stripe__big: 'PlayerInfo_stripe__big_ccbc3007',
        stripeBadge: 'PlayerInfo_stripeBadge_605bfd0a',
    },
    bs = { x24x24: '24x24', x48x48: '48x48', x80x80: '80x80' },
    _s = {
        [bs.x24x24]: { width: '24rem', height: '24rem' },
        [bs.x48x48]: { width: '48rem', height: '48rem' },
        [bs.x80x80]: { width: '80rem', height: '80rem' },
    },
    vs = wn('PlayerInfoBadge', { element: pr }),
    ys = c.forwardRef(function (
        {
            size: e,
            badgeId: t,
            path: n = `library.badges.c_${e}.badge_${t}`,
            width: r = _s[e].width,
            height: o = _s[e].height,
            className: s,
            ...a
        },
        i,
    ) {
        return l.jsx(vs, { ...a, ref: i, path: n, width: r, height: o, className: u(ps.badge, s) });
    });
ys.sizes = bs;
const ws = { x64x28: '64x28', x34x16: '34x16', x26x16: '26x16', x10x10: '10x10' },
    xs = {
        [ws.x10x10]: 'library.premium_igr_ico',
        [ws.x26x16]: 'library.premium_igr_small',
        [ws.x34x16]: 'library.premium_small',
        [ws.x64x28]: 'library.premium_igr_big',
    },
    Es = {
        [ws.x10x10]: { width: '10rem', height: '10rem' },
        [ws.x26x16]: { width: '26rem', height: '16rem' },
        [ws.x34x16]: { width: '34rem', height: '16rem' },
        [ws.x64x28]: { width: '64rem', height: '28rem' },
    },
    Rs = wn('PlayerInfoIgr', { element: pr }),
    Ns = c.forwardRef(function (
        { size: e, path: t = xs[e], width: n = Es[e].width, height: r = Es[e].height, className: o, ...s },
        a,
    ) {
        return l.jsx(Rs, { ...s, ref: a, path: t, width: n, height: r, className: o });
    });
Ns.sizes = ws;
const Ss = { default: 'default', regular: 'regular', medium: 'medium', big: 'big' },
    Ts = { [Ss.default]: 'c_64x24', [Ss.regular]: 'c_68x28', [Ss.medium]: 'c_68x28', [Ss.big]: 'c_100x40' },
    Cs = { [Ss.default]: 'c_24x24', [Ss.regular]: 'c_32x32', [Ss.medium]: 'c_48x48', [Ss.big]: 'c_80x80' },
    ks = {
        [Ss.default]: { width: '24rem', height: '24rem', marginLeft: '-15rem' },
        [Ss.regular]: { width: '32rem', height: '32rem', marginLeft: '-19rem' },
        [Ss.medium]: { width: '48rem', height: '48rem', marginLeft: '-32rem' },
        [Ss.big]: { width: '80rem', height: '80rem', marginLeft: '-25rem' },
    },
    zs = wn('StripeBadgeIcon', { element: pr }),
    Ps = c.forwardRef(function (
        {
            size: e = Ss.default,
            badgeId: t,
            stripeExists: n,
            path: r = `library.badges.${Cs[e]}.badge_${t}`,
            width: o = ks[e].width,
            height: s = ks[e].height,
            className: a,
            ...i
        },
        c,
    ) {
        const u = ks[e];
        return l.jsx(zs, {
            ...i,
            ref: c,
            path: r,
            width: o,
            height: s,
            style: n ? { marginLeft: u.marginLeft } : void 0,
            className: a,
        });
    }),
    js = {
        [Ss.default]: { width: '64rem', height: '24rem' },
        [Ss.regular]: { width: '68rem', height: '24rem' },
        [Ss.medium]: { width: '68rem', height: '28rem' },
        [Ss.big]: { width: '100rem', height: '40rem' },
    },
    As = wn('StripeIcon', { element: pr }),
    Is = c.forwardRef(function (
        {
            size: e = Ss.default,
            badgeId: t,
            stripeExists: n,
            path: r = `library.badges.strips.${Ts[e]}.strip_${t}`,
            width: o = js[e].width,
            height: s = js[e].height,
            className: a,
            ...i
        },
        c,
    ) {
        return n ? l.jsx(As, { ...i, ref: c, path: r, width: o, height: s, className: u(ps.stripeBadge, a) }) : null;
    }),
    Ms = wn('PlayerInfoStripe', ps.stripe),
    Bs = c.forwardRef(function ({ size: e = Ss.default, badgeId: t, classNames: n, className: r, ...o }, s) {
        const a = k.resolve('images'),
            i = Ts[e],
            c = a.has(`library.badges.strips.${i}.strip_${t}`);
        return l.jsxs(Ms, {
            ...o,
            ref: s,
            className: u(c && ps[`stripe__${e}`], r),
            children: [
                l.jsx(Is, { size: e, badgeId: t, stripeExists: c, className: null == n ? void 0 : n.stripe }),
                l.jsx(Ps, { size: e, badgeId: t, stripeExists: c, className: null == n ? void 0 : n.badge }),
            ],
        });
    });
Bs.sizes = Ss;
const Os = wn('AccountInfo', ps.base),
    Ls = wn('AccountInfoWrapper', ps.base),
    Ds = c.forwardRef((e, t) => l.jsx(Os, { ref: t, ...e }));
((Ds.Name = function ({ size: e, className: t, children: n }) {
    return l.jsx('div', { className: u(ps.name, e && ps[`name__${e}`], t), children: n });
}),
    (Ds.ClanTag = function ({ size: e, className: t, children: n, ...r }) {
        return l.jsx('div', { ...r, className: u(ps.clanTag, e && ps[`clanTag__${e}`], t), children: n });
    }),
    (Ds.Badge = ys),
    (Ds.IgrIcon = Ns),
    (Ds.AnonymizerIcon = gs),
    (Ds.Stripe = Bs),
    (Ds.Wrapper = Ls));
const $s = {
        base__x120x96: 'VehicleImage_base__x120x96_32ca06f1',
        base__x190x152: 'VehicleImage_base__x190x152_41379c70',
        base__x380x304: 'VehicleImage_base__x380x304_274f87fe',
    },
    Fs = { x120x96: 'x120x96', x190x152: 'x190x152', x380x304: 'x380x304' },
    Hs = wn('VehicleImage', {
        element: pr,
        className: $s.base,
        cva: {
            variants: {
                size: {
                    [Fs.x120x96]: $s.base__x120x96,
                    [Fs.x190x152]: $s.base__x190x152,
                    [Fs.x380x304]: $s.base__x380x304,
                },
            },
        },
    });
function Ws({ size: e = Fs.x380x304, ...t }) {
    return l.jsx(Hs, { ...t, size: e, path: `vehicle.${e}.tank_empty` });
}
const Us = c.forwardRef(function ({ size: e = Fs.x380x304, name: t, width: n, height: r, className: o, ...s }, a) {
    const i = k.resolve('images'),
        c = `vehicle.${e}.${vo(t)}`;
    return i.has(c)
        ? l.jsx(Hs, { ...s, ref: a, size: e, className: o, path: c, width: n, height: r })
        : (console.warn(`Fail to retrieve icon maps/icons/vehicle/${e}/${vo(t)}`),
          l.jsx(Ws, { size: e, className: o, width: n, height: r }));
});
((Us.UnknownVehicleImage = Ws), (Us.size = Fs));
const Ks = 'VehicleLevel_3c938122',
    Vs = { arabic: 'arabic', roman: 'roman' };
const Gs = c.forwardRef(function ({ value: e, numberType: t, ...n }, r) {
    const o = (function (e, t) {
            return e || (t ? Vs.arabic : Vs.roman);
        })(
            t,
            (function () {
                const e = k.resolve('strings');
                return Wt.includes(e.readOrEmpty('settings.LANGUAGE_CODE'));
            })(),
        ),
        s =
            o === Vs.roman
                ? (function (e) {
                      if (e <= 10) return qe[e] ?? String(e);
                      let t = '';
                      for (let n = Ge.length - 1; n >= 0; n--) {
                          let r = Ge[n];
                          for (; void 0 !== r && e >= r; ) ((t += Ve[n]), (e -= r));
                      }
                      return t;
                  })(e)
                : e;
    return l.jsx('div', { ...n, 'data-name': 'VehicleLevel', className: u(Ks, n.className), ref: r, children: s });
});
Gs.numberTypes = Vs;
const qs = { x24x24: 'x24x24', x48x48: 'x48x48', x64x64: 'x64x64', x96x96: 'x96x96' },
    Xs = { x24x24: 'x64x64', x48x48: 'x96x96', x64x64: 'x96x96', x96x96: 'x96x96' },
    Ys = {
        [bo.lightTank]: 'light_tank',
        [bo.mediumTank]: 'medium_tank',
        [bo.heavyTank]: 'heavy_tank',
        [bo.SPG]: 'spg',
        [bo['AT-SPG']]: 'tank_destroyer',
    },
    Qs = {
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
    Zs = c.forwardRef(function ({ type: e, size: t = qs.x48x48, premium: n = !1, fit: r = 'contain', ...o }, s) {
        const a = wt(qs[t], Xs[t]);
        return l.jsx(pr, {
            ...o,
            ref: s,
            fit: r,
            className: u(Qs.base, n ? Qs[`base__premium__${t}`] : Qs[`base__${t}`], o.className),
            path: `ui_kit.vehicle_type.${a}.${n ? 'premium_' : ''}${X(Ys[e])}_${a}`,
        });
    });
function Js(e) {
    return 'string' == typeof e && e in st;
}
((Zs.types = bo), (Zs.sizes = qs));
const ea = 'Tooltip_decorator_b3486d4e',
    ta = wn('Base', 'Tooltip_6d997cee'),
    na = wn('Decorator', ea),
    ra = c.forwardRef(function ({ children: e, ...t }, n) {
        const r = c.useRef(null);
        return (
            It(r, (e) => {
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
            l.jsx(ta, {
                ...t,
                ref: function (e) {
                    ((r.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                children: e,
            })
        );
    });
ra.Decorator = na;
export {
    re as $,
    oo as A,
    so as B,
    po as C,
    yo as D,
    wo as E,
    Vn as F,
    Ht as G,
    jt as H,
    pr as I,
    mn as J,
    _e as K,
    Nt as L,
    _n as M,
    To as N,
    bt as O,
    at as P,
    br as Q,
    zo as R,
    Ao as S,
    Po as T,
    He as U,
    yn as V,
    ao as W,
    xt as X,
    Ke as Y,
    Qn as Z,
    ne as _,
    hn as a,
    Ot as a0,
    Wo as a1,
    Pe as a2,
    Qt as a3,
    cs as a4,
    Ko as a5,
    qo as a6,
    Bt as a7,
    zt as a8,
    vr as a9,
    Xo as aa,
    Uo as ab,
    st as ac,
    Ds as ad,
    us as ae,
    $t as af,
    Xe as ag,
    Us as ah,
    Gs as ai,
    Zs as aj,
    be as ak,
    At as al,
    $e as am,
    ze as an,
    bo as ao,
    Js as ap,
    ge as aq,
    fr as ar,
    Xn as as,
    Vt as at,
    Rn as au,
    ye as av,
    ve as aw,
    ra as ax,
    Ft as b,
    dn as c,
    wn as d,
    H as e,
    Dt as f,
    Xt as g,
    V as h,
    un as i,
    Ue as j,
    no as k,
    Ur as l,
    Ie as m,
    Le as n,
    Oe as o,
    Fe as p,
    Se as q,
    k as r,
    Me as s,
    co as t,
    pn as u,
    yt as v,
    It as w,
    De as x,
    Be as y,
    je as z,
};
