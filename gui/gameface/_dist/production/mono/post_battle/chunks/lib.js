var e,
    t = Object.defineProperty,
    n = (e, t) => ((t = Symbol[e]) ? t : Symbol.for('Symbol.' + e)),
    r = (e) => {
        throw TypeError(e);
    },
    o = (e, n, r) =>
        ((e, n, r) => (n in e ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[n] = r)))(
            e,
            'symbol' != typeof n ? n + '' : n,
            r,
        );
import {
    c as s,
    a,
    b as i,
    d as c,
    r as l,
    j as u,
    e as d,
    o as f,
    f as m,
    u as h,
    g as p,
    h as g,
    R as b,
    i as _,
    k as v,
    l as y,
    m as w,
    n as x,
    p as E,
    q as N,
    s as S,
    t as T,
    v as C,
    w as k,
    x as A,
    y as P,
    z as M,
    A as I,
    B as z,
    C as j,
    D,
    E as O,
    F as B,
} from './vendor.js';
const L = s();
function F(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function $(e, t) {
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
class H {
    constructor(e = window.R.images, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.images') ? e : F(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && $(`Resource not found: ${r}`, n), t()) : o;
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
var W = ((e) => (
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
))(W || {});
const U = { integral: 0, gold: 1 },
    K = { fractional: 0, woZeroDigits: 1 },
    V = Object.keys(U),
    G = Object.keys(K);
const Y = { full: W.FullTime, short: W.ShortTime };
const q = {
    isNumberFormat: function (e) {
        return e in U;
    },
    formatNumber: function (e, t) {
        return window.systemLocale.getNumberFormat(t, U[e]);
    },
    numberFormats: V,
    isRealFormat: function (e) {
        return e in K;
    },
    formatReal: function (e, t) {
        return window.systemLocale.getRealFormat(t, K[e]);
    },
    realFormats: G,
    formatDateTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    dateTimeFormats: W,
    formatTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    timeFormats: Object.keys(Y),
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
function X(e, t, n) {
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
class Q {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : F(this.prefix, e),
            o = X(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== n && $(`Resource not found: ${r}`, n), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : F(this.prefix, e),
            n = X(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const o = e.startsWith('R.strings') ? e : F(this.prefix, e),
            s = X(o, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== r && $(`Resource not found: ${o}`, r), n()) : s;
    }
    pluralOrEmpty(e, t, n = 'warn') {
        return this.pluralOr(e, t, () => '', n);
    }
}
class Z {
    constructor(e = window.R.videos, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.videos') ? e : F(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && $(`Resource not found: ${e}`, n), t()) : o;
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
L.register({
    strings: c(() => new Q()).singleton(),
    images: c(() => new H(window.R.images.gui.maps.icons)).singleton(),
    atlases: c(() => new H(window.R.atlases)).singleton(),
    videos: c(() => new Z(window.R.videos)).singleton(),
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
                    : $(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: a(R.strings.settings.LANGUAGE_CODE()),
    intl: a(q),
});
const J = {
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
    reverseEaseInOutCirc: (e) => 1 - J.easeInOutCirc(1 - e),
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
                const s = ee(o, t, n) - e;
                if (Math.abs(s) < r) return o;
                const a = te(o, t, n);
                if (Math.abs(a) < r) break;
                o -= s / a;
            }
            return o;
        })(o, e, n);
        return 3 * t * (1 - s) ** 2 * s + 3 * r * (1 - s) * s ** 2 + s ** 3;
    },
};
function ee(e, t, n) {
    return 3 * t * (1 - e) ** 2 * e + 3 * n * (1 - e) * e ** 2 + e ** 3;
}
function te(e, t, n) {
    return 9 * t * (1 - e) ** 2 + 6 * (n - t) * (1 - e) * e + 3 * (1 - n) * e ** 2;
}
function ne(e) {
    return e.replaceAll('-', '_');
}
function re(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function oe(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const se = re('clientResized'),
    ae = re('self.onScaleUpdated'),
    ie = re('clientMinimized'),
    ce = { down: re('mousedown'), up: re('mouseup'), move: re('mousemove') };
const le = (function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && oe(!1);
    }
    function n() {
        e.enabled && oe(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  oe(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : oe(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const o = `mouse${t}`,
                            s = ce[t]((e) => n([e, 'outside']));
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
            e.enabled && oe(!0);
        },
        disableOutside() {
            e.enabled && oe(!1);
        },
    };
})();
function ue(e = 'px') {
    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
}
function de(e) {
    engine.call('PlaySound', e);
}
const fe = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    me = { ...Object.keys(fe).reduce((e, t) => ((e[t] = () => de(fe[t])), e), {}), sound: de },
    he = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    pe = {
        onTextureFrozen: re('self.onTextureFrozen'),
        onTextureReady: re('self.onTextureReady'),
        onDomBuilt: re('self.onDomBuilt'),
        onLoaded: re('self.onLoaded'),
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
        onDisplayChanged: re('self.onShowingStatusChanged'),
        onFocusUpdated: re('self.onFocusChanged'),
        children: {
            onAdded: re('children.onAdded'),
            onLoaded: re('children.onLoaded'),
            onRemoved: re('children.onRemoved'),
            onAttached: re('children.onAttached'),
            onTextureReady: re('children.onTextureReady'),
            onRequestPosition: re('children.requestPosition'),
        },
    },
    ge = 1,
    be = 4;
function _e(e) {
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
const ve = (e) => {
        const t = [];
        for (const [n, r] of Object.entries(e)) {
            const e = _e(r);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
        }
        return t;
    },
    ye = (e, t) => {
        const n = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...o } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: n, type: e, ...o, arguments: ve(r) })
                : viewEnv.handleViewEvent({ __Type: n, type: e, ...o });
        }
        return viewEnv.handleViewEvent({ __Type: n, type: e });
    },
    we = new Map(),
    xe = new Map(),
    Ee = {
        tooltip: {
            open(e, t, n = 0, r) {
                (ye(ge, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    we.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (ye(ge, { contentID: t, decoratorID: n, targetID: e, on: !1 }), we.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(we.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
        contextMenu: {
            open(e, t, n = 0, r) {
                (ye(be, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    xe.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (ye(be, { contentID: t, decoratorID: n, targetID: e, on: !1, isMouseEvent: !1 }),
                    xe.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(xe.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
    };
function Ne(e) {
    return viewEnv.pxToRem(e);
}
function Se(e) {
    return viewEnv.remToPx(e);
}
function Re() {
    viewEnv.setFullscreenModeSupported(!0);
}
function Te(e) {
    function t() {
        const { top: t, right: n, bottom: r, left: o } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${t}rem`),
            e.style.setProperty('--external-padding-right', `${n}rem`),
            e.style.setProperty('--external-padding-bottom', `${r}rem`),
            e.style.setProperty('--external-padding-left', `${o}rem`));
    }
    (t(), engine.on('self.onPaddingsUpdated', () => t()));
}
Object.keys(he).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === he[t]), e), {});
class Ce {
    constructor() {
        o(this, 'listeners', new Set());
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
const ke = (e) => (0 === e ? window : window.subViews.get(e));
function Ae(
    { initializer: e = !0, rootId: t = 0, getRoot: n = ke, context: r = 'model' } = {},
    { name: o = 'DataLayer' } = {},
) {
    const s = new Map(),
        a = { subscribersNotified: new Ce() },
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
            if (0 === t || window.subViews.ids().includes(t)) for (const e of s.keys()) u(e);
            i.then((e) => e());
        },
        unsubscribe: u,
        events: a,
    };
}
function Pe(e, t) {
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
const Me = (e, t, n) => (n < e ? e : n > t ? t : n);
function Ie() {}
function ze(e) {
    return e;
}
function je() {
    return !1;
}
function De(e) {
    return 'function' == typeof e;
}
function Oe() {
    throw new Error('Unreachable absurd brach');
}
class Be {
    constructor() {
        (o(this, '_disposes', new Set()),
            o(this, 'dispose', () => {
                for (const e of this._disposes) e();
            }));
    }
    add(e) {
        return (this._disposes.add(e), this);
    }
    remove(e) {
        return (this._disposes.delete(e), this);
    }
}
function Le(e, t, n, r) {
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
const Fe = { ESCAPE: 27, SPACE: 32, ARROW_UP: 38, ARROW_DOWN: 40 };
function $e(e, t) {
    return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
}
const He = {
    NONE: 'NONE',
    ...((We = [
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
    We.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...$e(
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
    ...$e(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...$e(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...$e(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...$e(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...$e(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...$e(['Up', 'Down'], 'Page'),
    ...$e(['Left', 'Right'], 'Bracket'),
};
var We;
function Ue(e) {
    return 'number' == typeof e
        ? (function (e) {
              return window.systemInput.getKeyName(e);
          })(e)
        : e;
}
function Ke(e, t) {
    var n;
    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
}
const Ve = Ke;
function Ge(e, t) {
    return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r));
}
function Ye(e, t) {
    if (Array.isArray(e)) return e.some(t);
    for (let n = 0; n < e.length; n++) {
        if (t(Ve(e, n), n, e)) return !0;
    }
    return !1;
}
function qe(e, t) {
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
function Xe(e, t, n) {
    const r = [];
    for (let o = 0; o < e.length; o++) {
        const s = Ve(e, o);
        t(s, o, e) && r.push(n(s, o, e));
    }
    return r;
}
function Qe(e, t, n) {
    if (Array.isArray(e)) return e.reduce(t, n);
    let r = n;
    for (let o = 0; o < e.length; o++) {
        r = t(r, Ve(e, o), o, e);
    }
    return r;
}
function Ze(e, t) {
    return Ge(e, ze).sort(t);
}
const Je = (e) => {
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
function et(e, t) {
    e || console.error(t || 'Assertion failed');
}
function tt(e, t, n) {
    return 'function' == typeof t ? nt(0, e, t) : (et(void 0 !== n, 'fn must be defined'), nt(e, t, n));
}
function nt(e, t, n) {
    const r = new Array(t - e);
    for (let o = e; o < t; o++) r[o] = n(o);
    return r;
}
function rt(e, t) {
    return new Set([...e, t]);
}
function ot(e, t) {
    const n = new Set(e);
    return (n.delete(t), n);
}
et.log = function (e, t) {
    e || console.error(t || 'Assertion failed');
};
const st = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    at = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
    it = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
['ko', 'no'].includes(L.resolve('langCode'));
const ct = function (e) {
    return 'number' == typeof e && !Number.isNaN(e) && Number.isFinite(e);
};
class lt {
    constructor() {
        o(this, 'items', []);
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
function ut(e, t, n = -1) {
    return dt(e, t, n);
}
function dt(e, t, n, r, o) {
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
    const i = ft(e),
        c = ft(t),
        l = Array.isArray(i) && Array.isArray(c);
    if (!l) {
        if ('object' != typeof i || 'object' != typeof c) return !1;
        const e = i.constructor,
            t = c.constructor;
        if (
            e !== t &&
            !(De(e) && e instanceof e && De(t) && t instanceof t) &&
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
        for (; u--; ) if (!dt(i[u], c[u], n - 1, r, o)) return !1;
    } else {
        const e = Object.keys(i);
        let t;
        if (((u = e.length), Object.keys(c).length !== u)) return !1;
        for (; u--; ) {
            if (((t = e[u]), void 0 === t))
                return (console.error('Error: met undefined in object during deepEqual comparison'), !1);
            if (!Object.prototype.hasOwnProperty.call(c, t) || !dt(i[t], c[t], n - 1, r, o)) return !1;
        }
    }
    return (r.pop(), o.pop(), !0);
}
function ft(e) {
    return e instanceof Map || e instanceof Set ? Array.from(e.entries()) : e;
}
const mt = {
    identity: function (e, t) {
        return e === t;
    },
    structural: function (e, t) {
        return ut(e, t);
    },
    sameValue: function (e, t) {
        return Object.is(e, t);
    },
    shallow: function (e, t) {
        return ut(e, t, 1);
    },
};
function ht(e) {
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
const pt = {
    zh_cn: ht,
    zh_sg: ht,
    zh_tw: ht,
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
function gt(e) {
    return e.split(' ');
}
const bt = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko']);
const _t = l.createContext(void 0);
function vt() {
    const e = l.useContext(_t);
    if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
    return e;
}
const yt = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large', extraLarge: 'extraLarge' },
    wt = {
        extraSmall: { weight: 0, name: yt.extraSmall, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: yt.small, className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: yt.medium, className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: yt.large, className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: yt.extraLarge, className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var xt,
    Et,
    Nt,
    St =
        (((xt = St || {})[(xt.Small = wt.small.width)] = 'Small'),
        (xt[(xt.Medium = wt.medium.width)] = 'Medium'),
        (xt[(xt.Large = wt.large.width)] = 'Large'),
        (xt[(xt.ExtraLarge = wt.extraLarge.width)] = 'ExtraLarge'),
        xt),
    Rt =
        (((Et = Rt || {})[(Et.Small = wt.small.width)] = 'Small'),
        (Et[(Et.Medium = wt.medium.width)] = 'Medium'),
        (Et[(Et.Large = wt.large.width)] = 'Large'),
        (Et[(Et.ExtraLarge = wt.extraLarge.width)] = 'ExtraLarge'),
        Et),
    Tt =
        (((Nt = Tt || {})[(Nt.Small = wt.small.height)] = 'Small'),
        (Nt[(Nt.Medium = wt.medium.height)] = 'Medium'),
        (Nt[(Nt.Large = wt.large.height)] = 'Large'),
        (Nt[(Nt.ExtraLarge = wt.extraLarge.height)] = 'ExtraLarge'),
        Nt);
const Ct = Object.values(wt);
function kt(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        o = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...o])).join(' ');
}
const At = () => {
    const e = ue('rem');
    return (function (e, t, n) {
        const r = Ct.reduce(
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
            a = s.names[s.names.length - 1] ?? yt.extraSmall,
            i = wt[a],
            c = r.width.names,
            l = r.height.names,
            u = c[c.length - 1] ?? yt.extraSmall,
            d = l[l.length - 1] ?? yt.extraSmall,
            f = { width: wt[u].width, height: wt[d].height };
        return {
            mediaClass: kt(o, r),
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
    })(e.width, e.height, Se(1));
};
function Pt({ children: e }) {
    const [t, n] = l.useState(At);
    return (
        l.useLayoutEffect(() => {
            function e() {
                n(At);
            }
            e();
            const t = se(e),
                r = ae(e);
            return () => {
                (t(), r());
            };
        }, []),
        u.jsx(_t.Provider, { value: t, children: e })
    );
}
function Mt() {
    return vt();
}
function It({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: o } = Mt();
    return u.jsx('div', { className: d(t, 'media-wrapper', r, o && 'media-upscale'), ...n, children: e });
}
function zt({ children: e, ...t }) {
    return u.jsx(Pt, { children: u.jsx(It, { ...t, children: e }) });
}
function jt(e, t, n) {
    return n ? e.breaks.reduce((e, t) => (n[t] ? { ...e, ...n[t] } : e), t) : t;
}
function Dt(e, t) {
    return jt(Mt(), e, t);
}
function Ot(e, t) {
    return Mt().upscale ? t : e;
}
function Bt(e, t) {
    const n = Mt();
    return t
        ? Object.values(wt).reduce((e, r) => (t[r.name] && n.sides.width >= r.width ? { ...e, ...t[r.name] } : e), e)
        : e;
}
const Lt = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                BREAKPOINTS: Ct,
                MediaContext: _t,
                MediaHeight: Tt,
                MediaSize: St,
                MediaWidth: Rt,
                MediaWrapper: zt,
                MediaWrapperElement: It,
                UPSCALE: 'upscale',
                breakpoints: yt,
                breakpointsByType: wt,
                useAdaptive: Dt,
                useAdaptiveMemo: function (e, t) {
                    const n = Mt();
                    return l.useMemo(() => {
                        const [t, r] = e();
                        return jt(n, t, r);
                    }, [n.breakpoint.name, n.breaks, ...t]);
                },
                useAdaptiveWidth: Bt,
                useMedia: Mt,
                useMediaContext: vt,
                useUpscale: Ot,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    Ft = (e) => {
        const t = l.useRef();
        return (
            l.useEffect(() => {
                t.current = e;
            }, [e]),
            t.current
        );
    };
const $t = [];
function Ht(e) {
    const t = l.useRef(e);
    return (
        l.useLayoutEffect(() => {
            t.current = e;
        }),
        l.useCallback((...e) => (0, t.current)(...e), $t)
    );
}
const Wt = (e, t) => {
    const n = l.useRef(e);
    ((n.current = e),
        l.useEffect(() => {
            if (void 0 === t) return;
            const e = window.setInterval(() => {
                n.current();
            }, t);
            return () => clearInterval(e);
        }, [t]));
};
function Ut(e) {
    l.useEffect(e, []);
}
function Kt(e) {
    l.useEffect(() => e, []);
}
const Vt = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new lt();
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
                if (e === He.NONE) return je;
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
    Gt = l.createContext(void 0);
function Yt(e, t, n, r = !1) {
    const o = Ue(e),
        s = Ht((e) => {
            viewEnv.isEventHandled() || (n(e), viewEnv.setEventHandled(), r && e.stopPropagation());
        }),
        a = (function () {
            const e = l.useContext(Gt);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        i = l.useMemo(() => a[t].register(o, s), [a, t, o, s]);
    l.useEffect(() => i, [i]);
}
function qt(e, t, n = !1) {
    return Yt(Ue(e), 'keydown', t, n);
}
function Xt(e) {
    const t = l.useMemo(Vt, []),
        n = l.useMemo(Vt, []);
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
    return u.jsx(Gt.Provider, { value: r, children: e.children });
}
const Qt = (e, t) => {
    l.useEffect(() => {
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
function Zt(e, t) {
    l.useEffect(() => {
        let t = () => {};
        const n = () => {
            (t(), (t = Je(e)));
        };
        return (
            window.addEventListener('resize', n),
            () => {
                (t(), window.removeEventListener('resize', n));
            }
        );
    }, t);
}
const Jt = (e, t, n = !0) => {
        const r = Ht((e) => {
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
    en = 0;
function tn() {
    const e = l.useRef(en);
    return (
        Kt(() => {
            window.cancelAnimationFrame(e.current);
        }),
        l.useMemo(
            () => ({
                run: (t) => {
                    (window.cancelAnimationFrame(e.current),
                        (e.current = window.requestAnimationFrame(() => {
                            e.current = window.requestAnimationFrame(() => {
                                ((e.current = en), t());
                            });
                        })));
                },
                clear: () => {
                    (window.cancelAnimationFrame(e.current), (e.current = en));
                },
                get isRunning() {
                    return e.current !== en;
                },
            }),
            [],
        )
    );
}
function nn(e, t, n) {
    const r = l.useMemo(
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
    return (l.useEffect(() => r.cancel, [r]), r);
}
function rn() {
    const e = l.useRef(0);
    return (
        Kt(() => {
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
const on = new WeakMap(),
    sn = 0,
    an = { await: 'await', idle: 'idle', display: 'display' };
function cn({ resId: e = sn, contentId: t, decoratorId: n, disabled: r, args: o, showDelay: s = 400 }) {
    const a = l.useRef({ status: an.idle, resId: e, timeoutId: 0 }),
        [i, c] = l.useMemo(() => {
            let i = null;
            function c() {
                r ||
                    ((a.current.status = an.await),
                    window.clearTimeout(a.current.timeoutId),
                    (a.current.timeoutId = window.setTimeout(l, s)));
            }
            function l() {
                ((a.current.status = an.display), Ee.tooltip.open(e, t, n, o), i && on.set(i, d));
            }
            function u() {
                if (
                    (window.clearTimeout(a.current.timeoutId),
                    a.current.status === an.display && Ee.tooltip.hide(e, t, n),
                    (a.current.status = an.idle),
                    i)
                ) {
                    on.delete(i);
                    let e = i.parentElement;
                    for (; e && !on.has(e); ) e = e.parentElement;
                    if (e) {
                        on.get(e).show();
                    }
                    i = null;
                }
            }
            const d = {
                hide: u,
                show: l,
                rerun: function () {
                    a.current.status !== an.idle && (r ? d.hide() : c());
                },
            };
            return [
                d,
                {
                    onMouseEnter: (e) => {
                        ((i = null == e ? void 0 : e.currentTarget), c());
                    },
                    onMouseLeave: r ? Ie : u,
                    onClick: r ? Ie : u,
                },
            ];
        }, [o, t, n, r, e, s]);
    return (
        l.useEffect(() => {
            i.rerun();
        }, [i]),
        Kt(Ht(i.hide)),
        c
    );
}
function ln({ alert: e, body: t, header: n, note: r, hasHtmlContent: o, disabled: s }) {
    const a = L.resolve('views');
    return cn({
        disabled: s,
        contentId: a.read((e) =>
            o
                ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
        ),
        decoratorId: a.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
        args: l.useMemo(() => ({ body: t, header: n, note: r, alert: e }), [e, t, n, r]),
    });
}
function un(e) {
    return cn({
        ...e,
        contentId: L.resolve('views').read((e) =>
            e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
        ),
    });
}
const dn = [];
function fn(e, t = dn, n) {
    return cn({
        ...n,
        disabled: 'string' != typeof e || (null == n ? void 0 : n.disabled),
        contentId: L.resolve('aliases').read((e) => e.common.tooltip.Backport('resId')),
        args: l.useMemo(
            () => ({ tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == n ? void 0 : n.args) }),
            [t, e, null == n ? void 0 : n.args],
        ),
    });
}
const mn = ['ko', 'no'];
const hn = {
    click: pn('play'),
    'hot-key': pn('play'),
    'mouse-enter': pn('highlight'),
    increaseAmount: pn('cons_ammo_single_plus'),
    decreaseAmount: pn('cons_ammo_single_minus'),
    increaseAmountRoll: pn('cons_ammo_roll_plus'),
    decreaseAmountRoll: pn('cons_ammo_roll_minus'),
    close: pn('cancelcloseno'),
    'show-context-menu': pn('tabb'),
    progressSimple: pn('gui_hangar_progressbar_simple'),
    increaseDelta: pn('gui_hangar_progressbar_delta_increase'),
    decreaseDelta: pn('gui_hangar_progressbar_delta_decrease'),
    increaseDeltaMax: pn('gui_hangar_progressbar_delta_max'),
    pointerGrab: pn('gui_hangar_progressbar_pointer_grab'),
    pointerDrag: pn('gui_hangar_progressbar_pointer_drag'),
};
function pn(e) {
    return () => {
        me.sound(e);
    };
}
function gn(e, t) {
    return Object.entries(e).reduce(
        (e, [t, n]) => (
            (e[t] = (e) => {
                var r;
                e && e.target in n ? me.sound(n[e.target]) : null == (r = hn[t]) || r.call(hn, e);
            }),
            e
        ),
        {},
    );
}
const bn = l.createContext(null);
function _n({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const o = l.useMemo(() => ({ ...hn, ...t }), [t]),
        s = l.useMemo(
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
    return u.jsx(bn.Provider, { value: s, children: r });
}
function vn() {
    const e = l.useContext(bn);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const yn = 2;
function wn({ resId: e = 0, contentId: t, decoratorId: n, args: r, disabled: o, soundTarget: s }) {
    const a = vn(),
        [{ hide: i }, c] = l.useMemo(() => {
            function i() {
                o || Ee.contextMenu.open(e, t, n, r);
            }
            return [
                {
                    hide: function () {
                        Ee.contextMenu.hide(e, t, n);
                    },
                    show: i,
                },
                {
                    onMouseDown: (e) => {
                        (function (e) {
                            return e.button === yn;
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
    return (l.useEffect(() => i, [i]), c);
}
function xn(e) {
    return wn({ ...e, contentId: L.resolve('views').read((e) => e.common.BackportContextMenu('resId')) });
}
function En(e, t) {
    return e + (e % 2) * ('extend' === t ? 1 : -1);
}
function Nn(e = 'extend') {
    const t = (function () {
            const [e, t] = l.useState(() => ue('rem'));
            return (
                l.useEffect(() => {
                    function e() {
                        t(ue('rem'));
                    }
                    const n = se(e),
                        r = ae(e);
                    return () => {
                        (n(), r());
                    };
                }, []),
                e
            );
        })(),
        [n, r] = l.useState(En(t.width, e));
    return (
        l.useEffect(() => {
            r(En(t.width, e));
        }, [e, t.width]),
        n
    );
}
const Sn = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    Rn = new Set(['number', 'string', 'boolean', 'bigint']),
    Tn = new Set(['Dict']);
function Cn(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var o, s;
    const a = e,
        i = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (Sn.has(i)) return a;
    if (null === a) return a;
    const c = { depth: n + 1, maxDepth: r };
    if (Array.isArray(a)) return a.map((e) => Cn(e, c));
    if ('object' === i) {
        const r = (null == (o = a.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => Cn(e, c));
        if ('CoherentArrayProxy' === r) return e.map((e) => Cn(e.value, c));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in a) {
                    const n = a[t];
                    Rn.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in a) {
                    const n = a[t],
                        r = (null == (s = null == a ? void 0 : a.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                    Tn.has(r) || (e[t] = Cn(n, c));
                }
                return e;
            }
        }
        const i = {};
        for (const e of Object.keys(a)) i[e] = Cn(a[e], c);
        return i;
    }
    return (console.error('Incorrect value to clone model', a), a);
}
const kn = { deep: !1, equals: je },
    An = { cloneItem: !0 },
    Pn = { shallow: !1 };
class Mn {
    constructor(e, t = An) {
        (o(this, '_data'),
            o(this, '_keys'),
            o(
                this,
                'set',
                m((e) => {
                    this._data.set(e);
                }),
            ),
            (this.options = t));
        const n = {},
            r = e.keys();
        for (let o = 0; o < r.length; o++) {
            const t = r[o];
            n[t] = f.box(this.takeItem(e, t), kn);
        }
        ((this._keys = f.set(new Set(r))), (this._data = f.box(n, kn)));
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
                : null !== s && ((n[o] = f.box(s, kn)), this._keys.add(o), this.set(n));
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
        return this.options.cloneItem ? Cn(n, Pn) : n;
    }
    untrackedData() {
        return h(() => this._data.get());
    }
}
const In = l.createContext({ mode: 'real' }),
    zn = { equals: je, deep: !1 };
function jn(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        m(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const o = (o, s, a = zn) => {
            const i = f.box(o(n(s)), a);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(o(e))), s), i);
        },
        s = (o, s) => {
            const a = new Mn(n(o), s);
            return ('real' === t && e.subscribe((e, t) => r.push(() => a.update(e, t)), o), a);
        },
        a = (o, s) => {
            const a = f.box(n(o) ?? s, zn);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(e)), o), a);
        };
    return {
        dict: s,
        dictRef: (e, t) => s(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => o(Cn, e),
        array: a,
        object: a,
        transform: o,
        primitives: (o, s) => {
            const a = n(s);
            if (Array.isArray(o)) {
                const n = o.reduce((e, t) => ((e[t] = f.box(a[t], {})), e), {});
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
                    c = i.reduce((e, [t, n]) => ((e[n] = f.box(a[t], {})), e), {});
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
const Dn =
        (e = 'DataLayerProvider') =>
        (t, n, r) => {
            const o = l.createContext(null);
            function s(s) {
                var a;
                const { mode: i, options: c, children: d, mocks: f } = s,
                    m = l.useContext(In),
                    h = i ?? m.mode,
                    p = f ?? m.mocks,
                    g = l.useRef([]),
                    b = null == (a = null == r ? void 0 : r.useRequires) ? void 0 : a.call(r),
                    _ = Ht((o, a, i) => {
                        var c;
                        const l =
                                'real' !== o && i
                                    ? (function (e, t) {
                                          return {
                                              subscribe: () => 0,
                                              readSafeByPath: e,
                                              readByPath: e,
                                              createCallback: (n, r) => {
                                                  const o = e(Pe(r, t));
                                                  return (...e) => {
                                                      o(n(...e));
                                                  };
                                              },
                                              createCallbackNoArgs: (n) => {
                                                  const r = e(Pe(n, t));
                                                  return () => {
                                                      r();
                                                  };
                                              },
                                              dispose: () => {},
                                              unsubscribe: () => {},
                                              events: { subscribersNotified: new Ce() },
                                          };
                                      })(i.getter, a)
                                    : Ae(a, { name: e }),
                            u = (e) => ('mocks' === o ? (null == i ? void 0 : i.getter(e, a)) : l.readByPath(e)),
                            d = (e) => g.current.push(e),
                            f = 'initial' in s && {
                                initial: null == (c = null == r ? void 0 : r.initial) ? void 0 : c.call(r, s.initial),
                            },
                            m = t({
                                ...f,
                                mode: o,
                                readByPath: u,
                                requires: b,
                                externalModel: l,
                                observableModel: jn(l, o, u),
                                cleanup: d,
                            }),
                            h = { ...f, mode: o, model: m, externalModel: l, cleanup: d, requires: b },
                            p = 'mocks' === o && (null == i ? void 0 : i.controls) ? i.controls(h) : {};
                        return {
                            model: m,
                            controls: { ...(null == n ? void 0 : n(h)), ...p },
                            externalModel: l,
                            mode: o,
                        };
                    }),
                    v = l.useRef(!1),
                    [y, w] = l.useState(h);
                l.useEffect(() => {
                    w(h);
                }, [h]);
                const [x, E] = l.useState(() => _(y, c, p));
                return (
                    l.useEffect(() => {
                        v.current ? E(_(y, c, p)) : (v.current = !0);
                    }, [
                        _,
                        p,
                        y,
                        null == c ? void 0 : c.context,
                        null == c ? void 0 : c.initializer,
                        null == c ? void 0 : c.getRoot,
                        null == c ? void 0 : c.rootId,
                    ]),
                    l.useEffect(
                        () => () => {
                            (x.externalModel.dispose(), g.current.forEach((e) => e()));
                        },
                        [x],
                    ),
                    u.jsx(o.Provider, { value: x, children: d })
                );
            }
            return (
                (s.displayName = e),
                [
                    s,
                    function () {
                        const e = l.useContext(o);
                        if (!e) throw new Error(`hook useModel must be used within a ${s.displayName}.`);
                        return e;
                    },
                    { Context: o },
                ]
            );
        },
    On = {
        model: (e, t) => p(e, { equals: je, ...t }),
        primitive: p,
        shallow: (e, t) => p(e, { equals: g.shallow, ...t }),
        structural: (e, t) => p(e, { equals: g.structural, ...t }),
    },
    Bn = (e) => (t) => {
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
                return pe.onHitTest((t) => {
                    const n = e.getBoundingClientRect();
                    return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                });
        }, []),
        u.jsx('div', { ...e, ref: Bn([t, n]) })
    );
});
class Ln {
    constructor() {
        o(this, 'items', []);
    }
    add(e) {
        return (this.items.push([e, {}]), this);
    }
    addWithProps(e, t) {
        return (this.items.push([e, t]), this);
    }
    render(e) {
        return u.jsx(u.Fragment, {
            children: this.items.reduceRight((e, [t, n], r) => l.createElement(t, { ...n, key: r }, e), e),
        });
    }
}
async function Fn(
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
    const a = n ? zt : b.Fragment,
        i = (null == (s = null == window ? void 0 : window.engine) ? void 0 : s.whenReady) ?? Promise.resolve();
    (o && engine.enableImmediateLayout(!0),
        await i,
        document.documentElement.setAttribute('lang', L.resolve('langCode')),
        _.createRoot(t).render(u.jsx(a, { children: u.jsx(Xt, { children: e }) })),
        r && (Te(t), Re()));
}
const $n = l.createContext(void 0);
function Hn() {
    const e = l.useContext($n);
    if (!e) throw new Error('useRouter must be used within a RouterProvider');
    return e;
}
var Wn = {};
function Un({ children: e, prefix: t = '', context: n, getRoot: r, initializer: o, rootId: s }) {
    const a = l.useRef([]),
        i = l.useRef(null),
        c = l.useMemo(() => Ae({ context: n, getRoot: r, initializer: o, rootId: s }), [n, r, o, s]),
        d = l.useCallback(
            (e) => {
                const t = c.subscribe(e);
                return () => c.unsubscribe(t);
            },
            [c],
        ),
        f = l.useCallback(() => {
            const e = c.readByPath(),
                n = { location: ((r = t + e.route), r.endsWith('/') ? r.slice(0, -1) : r), params: e.params };
            var r;
            return i.current && mt.shallow(i.current, n) ? i.current : ((i.current = n), n);
        }, [c, t]),
        m = l.useSyncExternalStore(d, f);
    l.useEffect(() => c.dispose, [c]);
    const h = l.useMemo(() => {
        const e = [...a.current, m];
        return ((a.current = e), { ...m, history: e });
    }, [m]);
    Wn.PUBLIC_ROUTER_DEBUG && console.log('🗺️ Route updated:', h);
    const p = l.useMemo(() => {
            const e = c.createCallback(
                    (e, t) => (
                        Wn.PUBLIC_ROUTER_DEBUG && console.log('➡️ Going to', e, t),
                        { route: e, ...(Boolean(t) && { params: JSON.stringify(t) }) }
                    ),
                    'navigateTo',
                ),
                t = c.createCallbackNoArgs('navigateBack');
            return {
                push: e,
                replace: e,
                goBack: Wn.PUBLIC_ROUTER_DEBUG
                    ? () => {
                          (console.log('🗺️ Route back'), t());
                      }
                    : t,
            };
        }, [c]),
        g = l.useMemo(() => ({ ...h, ...p }), [p, h]);
    return u.jsx($n.Provider, { value: g, children: e });
}
const Kn = l.forwardRef(function (
        {
            src: e,
            className: t,
            autoplay: n = !1,
            style: r,
            loop: o = !1,
            isPrebufferKeyframes: s,
            keyframesNameConfig: a,
            onClick: i,
            ...c
        },
        d,
    ) {
        const f = d,
            m = l.useRef(null);
        return (
            Ut(() => {
                let e = !1;
                return pe.onDisplayChanged((t, n) => {
                    const r = m.current;
                    r && (n === he.hidden ? ((e = r.paused), r.pause()) : e || n !== he.shown || r.play());
                });
            }),
            Ut(() => {
                let e = !1;
                return ie((t) => {
                    const n = m.current;
                    n && (t ? ((e = n.paused), n.pause()) : e || n.play());
                });
            }),
            l.useEffect(
                () =>
                    Je(() => {
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
            l.useEffect(() => {
                if (f && m.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: Ie },
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
                            m.current && (m.current.currentTime = Me(0, m.current.duration, e));
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
                        p = (e) => {
                            (c(e), l());
                        },
                        g = (e) => {
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
                            goToAndPlay: p,
                            goToAndStop: g,
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
            l.useEffect(() => {
                m.current && n && m.current.play();
            }, [n, o]),
            Kt(() => {
                var e;
                null == (e = m.current) || e.pause();
            }),
            u.jsx('video', { src: e, className: t, style: r, loop: o, ref: m, onClick: i, ...c })
        );
    }),
    Vn = l.memo(Kn);
function Gn(e, t, n) {
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
            r = v(n.className, n.cva),
            o = n.element,
            a = l.forwardRef(function (e, t) {
                return l.createElement(o, { ...('function' == typeof o ? e : Yn(s, e)), ref: t, className: r(e) });
            });
        return ((a.displayName = e), n.cva && (a.cva = n.cva), a);
    }
    const a = v(t, n),
        i = l.forwardRef(function (t, n) {
            return u.jsx('div', { 'data-name': e, ...Yn(s, t), ref: n, className: a(t) });
        });
    return ((i.displayName = e), n && (i.cva = n), i);
}
function Yn(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
!(function () {
    const e = 'undefined' != typeof document && document.createElement('link').relList;
    e && e.supports && e.supports('modulepreload');
})();
let qn = !1;
const Xn = new Map(),
    Qn = new Map();
const Zn = C({ default: C({ plugin: k((e) => 'function' == typeof e, 'Is not a function') }) });
async function Jn(e) {
    var t,
        o,
        s,
        a,
        i,
        c,
        l = [];
    try {
        if (!e) throw new Error(`Can't load plugin with incorrect url: ${e}`);
        if (!qn)
            throw new Error(
                "Can't load plugin because it's not injected.\n\nPlease add this code into main file (usually index.tsx):\n\nimport { injectGFPlugins } from '@wg/plugin_sdk'\n\ninjectGFPlugins()\n",
            );
        const u = ((c = e), Symbol.for(c.split('mono/')[1] || 'unknown'));
        if (Qn.has(u)) return Qn.get(u);
        if (Xn.has(u)) return Xn.get(u);
        const d = (function () {
            let e = Oe,
                t = Oe;
            const n = new Promise((n, r) => {
                ((t = n), (e = r));
            });
            return { then: n.then.bind(n), catch: n.catch.bind(n), finally: n.finally.bind(n), reject: e, resolve: t };
        })();
        Qn.set(u, d);
        ((t = l),
            (i = () => Qn.delete(u)),
            null != (o = { [Symbol.dispose]: i })
                ? ('object' != typeof o && 'function' != typeof o && r('Object expected'),
                  s && (a = o[n('asyncDispose')]),
                  void 0 === a && (a = o[n('dispose')]),
                  'function' != typeof a && r('Object not disposable'),
                  t.push([s, a, o]))
                : s && t.push([s]));
        const f = await import(e);
        if (!T(Zn, f)) throw new Error(`Not is plugin ${e}`);
        const m = await f.default.plugin({ id: u, url: e });
        return (
            Xn.set(u, m),
            d.resolve(m),
            {
                id: u,
                init: m.init,
                destroy: async () => {
                    (Xn.delete(u), await m.destroy());
                },
            }
        );
    } catch (f) {
        var u = f,
            d = !0;
    } finally {
        ((e, t, n) => {
            var r =
                    'function' == typeof SuppressedError
                        ? SuppressedError
                        : function (e, t, n, r) {
                              return (((r = Error(n)).name = 'SuppressedError'), (r.error = e), (r.suppressed = t), r);
                          },
                o = (e) => (t = n ? new r(e, t, 'An error was suppressed during disposal') : ((n = !0), e)),
                s = (r) => {
                    for (; (r = e.pop()); )
                        try {
                            var a = r[1] && r[1].call(r[2]);
                            if (r[0]) return Promise.resolve(a).then(s, (e) => (o(e), s()));
                        } catch (i) {
                            o(i);
                        }
                    if (n) throw t;
                };
            s();
        })(l, u, d);
    }
}
function er() {
    qn
        ? console.warn('Plugin system already injected')
        : ((window.module_externals = {
              React: b,
              ReactDOM: _,
              jsxDevRuntime: S,
              jsxRuntime: N,
              mobx: E,
              mobxUtils: x,
              mobxReactLite: w,
              awilix: y,
              wg: { mediaWrapper: Lt },
          }),
          (qn = !0));
}
function tr(e) {
    return u.jsx(u.Fragment, { children: e.children });
}
function nr(e) {
    return u.jsx(tr, {
        children: u.jsx(_n, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
const rr = 1,
    or = 2,
    sr = 3;
const ar = {
        COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
        base: 'FormatText_db904f12',
        base__fullSize: 'FormatText_base__fullSize_a514958e',
        nowrap: 'FormatText_nowrap_ff69eca3',
    },
    ir = new Set((null == (e = ar.COLORS) ? void 0 : e.split(', ')) ?? []);
let cr = 0;
function lr() {
    return ++cr;
}
const ur =
    /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
function dr(e) {
    const t = L.resolve('langCode');
    return (function (e, t, n) {
        return bt.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
    })(
        (function (e, t) {
            return (pt[t] ?? gt)(e);
        })(e, t),
        t,
        (e, t) => e && u.jsx('span', { children: e }, `${e}${t}`),
    );
}
function fr(e) {
    return Array.isArray(e)
        ? (function (e) {
              const t = [];
              for (let n = 0; n < e.length; n++) {
                  const r = e[n],
                      o = e[n + 1];
                  if ('string' != typeof o || !ur.test(o)) {
                      t.push(fr(r));
                      continue;
                  }
                  const s = dr(o.slice(1));
                  (t.push(
                      u.jsxs(
                          l.Fragment,
                          { children: [u.jsxs('span', { className: ar.nowrap, children: [fr(r), o[0]] }), s] },
                          lr(),
                      ),
                  ),
                      (n += 1));
              }
              return t;
          })(e)
        : 'string' == typeof e
          ? u.jsx(l.Fragment, { children: dr(e) }, lr())
          : e;
}
const mr = {
    class: function (e, ...t) {
        return u.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            lr(),
        );
    },
    colorLegacy: function (e, t) {
        const n = lr();
        return ir.has(String(t))
            ? u.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : u.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: fr,
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
            lr(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function hr(e, t, n, r) {
    const o = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...o] = n.slice(1, -1).split(' ');
                return t ? hr(e, t, o, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        s = r[t];
    return s ? s(e, ...o) : (console.error(`Function ${t} is not registered`), e);
}
function pr(e, t, n) {
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
        return r ? hr(e, r, o, n) : e;
    }, t);
}
function gr(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function br(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !gr(e[r]); ) r++;
            const o = e.slice(n + 1, r),
                s = t[o];
            if (s) return br(e.replace(`$${o}`, String(s)), t);
        }
    }
    return e;
}
function _r(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = br(e[r], t);
    return n;
}
const vr = ['number', 'string', 'undefined'];
function yr(e, t, n = {}, r = !0) {
    r && (cr = 0);
    const o = [];
    function s(e) {
        if (vr.includes(typeof e)) {
            const t = o.at(-1);
            if ('string' == typeof t) return void (o[o.length - 1] = t + e);
        }
        o.push(e);
    }
    for (const a of e)
        if (a.type === rr) s(a.value);
        else if (a.type === sr)
            null === n[a.name] || vr.includes(typeof n[a.name])
                ? s(n[a.name] ?? `{{${a.name}}}`)
                : o.push(u.jsx(l.Fragment, { children: n[a.name] }, `var-${a.name}-${a.instanceId}`));
        else if (a.type === or) {
            const e = yr(a.children, t, n, !1),
                r = pr(_r(a.attrs, n), e, t);
            o.push(r);
        }
    return o;
}
function wr(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function xr(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function Er(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const Nr = { start: '{{', end: '}}' },
    Sr = l.memo(function (e) {
        const {
                brackets: t = Nr,
                text: n,
                params: r,
                upgradeLegacy: o,
                fullSize: s,
                inline: a,
                formatters: i,
                split: c,
                ...f
            } = e,
            m = l.useMemo(
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
                              })(e, Er, wr, xr);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            h = l.useMemo(() => (e.formatters ? { ...mr, ...e.formatters } : mr), [e.formatters]),
            p = l.useMemo(
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
                                        ? r[r.length - 1].node.children.push({ type: rr, value: o })
                                        : n.push({ type: rr, value: o }),
                                    (o = '')),
                                    (s = !0),
                                    (c += t.start.length - 1));
                            else if (l === t.end[0] && e.slice(c, c + t.end.length) === t.end) {
                                ((s = !1), (c += t.end.length - 1));
                                const e = a.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        o = { type: or, attrs: t.split('|'), instanceId: ++i, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(o) : n.push(o),
                                        r.push({ node: o, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: sr, instanceId: ++i, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                a = '';
                            } else s ? (a += l) : (o += l);
                        }
                        o &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: rr, value: o })
                                : n.push({ type: rr, value: o }));
                        return n;
                    })(c ? `{{@ split}}${m}{{/}}` : m, t),
                [t, m, c],
            ),
            g = l.useMemo(() => yr(p, h, e.params), [p, h, e.params]),
            b = d(ar.base, s && ar.base__fullSize, f.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              u.jsx('p', {
                  ...f,
                  className: b,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: g,
              }))
            : u.jsx('span', { ...f, className: b, children: g });
    });
function Rr({ path: e, ...t }) {
    return u.jsx(Sr, { text: L.resolve('strings').readOrEmpty(e), ...t });
}
const Tr = () => {};
function Cr(e) {
    const t = e;
    return l.forwardRef(function (e, n) {
        const r = Dt(e, e.adaptive),
            { path: o, ...s } = r,
            a = r.images ?? L.resolve('images'),
            i = { ...s, ref: n };
        {
            const e = o ? a.readOr(o, Tr, 'warn') : void 0;
            return e ? u.jsx(t, { ...i, src: e }) : u.jsx(t, { ...i, unknown: !0 });
        }
    });
}
const kr = {
        background:
            'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
        backgroundSize: '20rem 20rem',
        backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
        backgroundColor: '#000',
    },
    Ar = Cr(
        l.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: n,
                    fit: r,
                    position: o,
                    width: s,
                    src: a,
                    height: i,
                    unselectable: c,
                    unknown: l,
                    unknownStyle: d = kr,
                    ...f
                } = e;
                return u.jsx('div', { ...f, ref: t, style: { width: e.width, height: e.height, ...d, ...e.style } });
            }
            const {
                repeat: n,
                fit: r,
                position: o,
                width: s,
                height: a,
                unknownStyle: i,
                unknown: c,
                unselectable: l,
                ...d
            } = e;
            return u.jsx('div', {
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
    Pr = Cr(
        l.forwardRef(function (e, t) {
            const { width: n, height: r, src: o, unselectable: s, unknown: a, unknownStyle: i = kr, ...c } = e;
            return e.unknown
                ? u.jsx('div', { ...c, style: { width: e.width, height: e.height, ...i } })
                : u.jsx('img', { ...c, ref: t, src: o, width: n, height: r });
        }),
    ),
    Mr = { small: 'small', medium: 'medium' };
L.resolve('intl');
const Ir = {
        Root: Gn('Bubble', 'Bubble_df22310d', { variants: { hidden: { true: 'Bubble_base__hidden_1700314d' } } }),
    },
    zr = 'primary',
    jr = 'custom',
    Dr = { large: 'large', medium: 'medium', small: 'small' },
    Or = l.createContext(null);
function Br() {
    const e = l.useContext(Or);
    return (et(null !== e, 'You can use tabs hooks only with Tabs component'), e);
}
const Lr = 'HorizontalTabs_outerBorderImage_8085e49e',
    Fr = 'HorizontalTabs_mainBorderImage_558d1c3f',
    $r = 'HorizontalTabs_outerBorder_3255d0c5',
    Hr = 'HorizontalTabs_mainBorder_61e34c2c',
    Wr = 'HorizontalTabs_content_1ae3c4bd',
    Ur = Gn('Tabs', 'HorizontalTabs_69e3c6f3', {
        variants: {
            size: {
                [Dr.large]: 'HorizontalTabs_base__size-large_12c75e24',
                [Dr.medium]: 'HorizontalTabs_base__size-medium_afc0934f',
                [Dr.small]: 'HorizontalTabs_base__size-small_75fae891',
            },
            theme: { [zr]: 'HorizontalTabs_base__theme-primary_5e3af03e', [jr]: void 0 },
        },
    }),
    Kr = l.forwardRef(function ({ children: e, classNames: t, ...n }, r) {
        const o = Br();
        return u.jsx(Ur, {
            ...n,
            ref: r,
            className: d(n.className, null == t ? void 0 : t.base),
            size: o.size,
            theme: o.theme,
            children: u.jsxs('div', {
                className: d($r, null == t ? void 0 : t.outerBorder),
                children: [
                    u.jsx('div', { className: d(Lr, null == t ? void 0 : t.outerBorderImage) }),
                    u.jsxs('div', {
                        className: d(Hr, null == t ? void 0 : t.mainBorder),
                        children: [
                            u.jsx('div', { className: d(Fr, null == t ? void 0 : t.mainBorderImage) }),
                            u.jsx('div', { className: d(Wr, null == t ? void 0 : t.content), children: e }),
                        ],
                    }),
                ],
            }),
        });
    }),
    Vr = 'Tab_border_a63aeb3f',
    Gr = 'Tab_background_4c9b3eb9',
    Yr = 'Tab_backgroundPattern_417be4b5',
    qr = 'Tab_innerBorderImage_adadda5f',
    Xr = 'Tab_content_b3f6c22b',
    Qr = Gn('Tab', 'Tab_f59c2b00', {
        variants: {
            size: {
                [Dr.large]: 'Tab_base__size-large_0',
                [Dr.medium]: 'Tab_base__size-medium_0',
                [Dr.small]: 'Tab_base__size-small_0',
            },
            theme: { [zr]: 'Tab_base__theme-primary_90fd5ee', [jr]: void 0 },
            state: { active: 'Tab_base__active_0', inactive: 'Tab_base__inactive_0' },
        },
        defaultVariants: { size: Dr.medium, theme: zr },
    }),
    Zr = l.forwardRef(function (
        { theme: e, size: t, tabId: n, active: r, children: o, onClick: s, onMouseEnter: a, ...i },
        c,
    ) {
        const l = vn();
        return u.jsx(Qr, {
            ...i,
            ref: c,
            theme: e,
            size: t,
            state: r === n ? 'active' : 'inactive',
            onMouseEnter: function (e) {
                (r !== n && l.play('mouse-enter', { target: Qr.displayName, original: e }), null == a || a(e));
            },
            onClick: function (e) {
                (r !== n && l.play('click', { target: Qr.displayName, original: e }), null == s || s(e));
            },
            children: o,
        });
    });
function Jr({ active: e, theme: t, size: n, children: r, onActiveChange: o }) {
    const [s, a] = l.useState(e),
        i = l.useRef(e),
        c = l.useMemo(() => ({ active: s, theme: t, size: n, change: a }), [s, n, t]);
    return (
        l.useLayoutEffect(() => {
            a(e);
        }, [e]),
        l.useEffect(() => {
            i.current !== s && ((i.current = s), null == o || o(s));
        }, [s, o]),
        u.jsx(Or.Provider, { value: c, children: r })
    );
}
((Jr.Switcher = Kr),
    (Jr.Tab = function ({ tabId: e, classNames: t, className: n, children: r, ...o }) {
        const s = Br();
        return u.jsxs(Zr, {
            'data-test-id': `${e}Tab`,
            ...o,
            tabId: e,
            theme: s.theme,
            size: s.size,
            active: s.active,
            className: d(null == t ? void 0 : t.base, n),
            onClick: (t) => {
                var n;
                (null == (n = o.onClick) || n.call(o, t), s.change(e));
            },
            children: [
                u.jsx('div', { className: d(Gr, null == t ? void 0 : t.background) }),
                u.jsx('div', { className: d(Yr, null == t ? void 0 : t.backgroundPattern) }),
                u.jsx('div', { className: d(Vr, null == t ? void 0 : t.border) }),
                u.jsx('div', { className: d(qr, null == t ? void 0 : t.borderImage) }),
                u.jsx('div', { className: d(Xr, null == t ? void 0 : t.content), children: r }),
            ],
        });
    }),
    (Jr.Content = function ({ children: e, keyOverride: t }) {
        const n = Br();
        return u.jsx(l.Fragment, { children: e(n.active) }, t ?? n.active);
    }));
const eo = l.createContext(void 0);
var to = ((e) => ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e))(to || {});
const no = {
        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
        animationConfig: { tension: 170, friction: 26 },
    },
    ro = [2, 2];
const oo = { horizontal: 'horizontal', vertical: 'vertical' },
    so = {
        background: 'Thumb_background_7f3dd6ac',
        border: 'Thumb_border_5749138b',
        innerBorder: 'Thumb_innerBorder_42bafd18',
        icon: 'Thumb_icon_dca8bf26',
        base: 'Thumb_6ff3e706',
        base__vertical: 'Thumb_base__vertical_55a67c91',
        base__horizontal: 'Thumb_base__horizontal_27ca7ace',
        base__active: 'Thumb_base__active_830942bb',
    },
    ao = 'forwardDisabled',
    io = 'backwardDisabled';
function co(e) {
    const t = l.useRef(null),
        [n, r] = l.useState(!1),
        o = Ht(function () {
            const n = t.current,
                r = e.trackRef.current,
                o = e.api.getWrapperSize(),
                s = e.api.getContainerSize();
            if (!(o && s && n && r)) return;
            const a = Math.min(1, o / s),
                i = 'horizontal' === e.direction ? 'width' : 'height';
            return ((n.style[i] = `${e.calculateSize(r, a)}px`), (n.style.display = 'flex'), a);
        }),
        [s, a] = A(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: J.easeInCubic,
            config: { duration: 200 },
        }));
    l.useEffect(() => {
        n || e.dragging
            ? a.start({
                  to: e.styles.opened,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.add(so.base__active);
                  },
              })
            : a.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.remove(so.base__active);
                  },
              });
    }, [n, e.dragging, e.styles.closed, e.styles.opened, a]);
    const i = Ht(function () {
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
                f = Me(0, 1, u / (l - c)),
                m = e.calculateSize(r, d),
                h = (('horizontal' === e.direction ? r.offsetWidth : r.offsetHeight) - m) * f || 0,
                p = Math.round(2 * (2 * f - 1));
            (o.style.setProperty('--thumbOffset', `${h}px`),
                null == (n = e.onUpdate) || n.call(e, { thumbSize: m, thumbOffset: h, newBouncingCorrection: p }));
            const g = 0 === h || e.isBoundThumb(h) ? 0 : p;
            return (
                a.start({
                    to: { '--bouncingCorrection': `${g}px` },
                    ...(0 === g ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                h
            );
        }),
        c = tn(),
        f = Ht(function () {
            o();
            const t = i();
            'number' == typeof t &&
                (function (e, t) {
                    if (!e.trackRef.current || !e.thumbRef.current) return;
                    const n = e.trackRef.current.parentNode;
                    if (n instanceof HTMLElement) {
                        if (0 === t) return (n.classList.add(io), void n.classList.remove(ao));
                        if (e.isBoundThumb(t)) return (n.classList.remove(io), void n.classList.add(ao));
                        (n.classList.remove(io), n.classList.remove(ao));
                    }
                })(e, t);
        });
    l.useEffect(() => c.run(f));
    const { api: m } = e;
    return (
        l.useEffect(() => {
            function e() {
                c.run(f);
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
        }, [m, c, f]),
        u.jsxs(P.div, {
            ref: Bn([t, e.thumbRef]),
            className: d(so.base, so[`base__${e.direction}`], e.className),
            style: s,
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: [
                u.jsx('div', { className: so.background }),
                u.jsx('div', { className: so.border }),
                u.jsx('div', { className: so.innerBorder }),
                u.jsx('div', { className: so.icon }),
            ],
        })
    );
}
const lo = { pending: !1, offset: 0 };
function uo(e, t, n, r, o) {
    const [s, a] = l.useState(lo),
        i = Ht(t),
        c = l.useCallback(
            (t) => {
                (a(t), e.current && i({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [i, e],
        );
    return (
        l.useEffect(() => {
            if (!s.pending) return;
            const t = le.move(function ([t]) {
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
                a = le.up(() => {
                    c(lo);
                });
            return () => {
                (t(), a());
            };
        }, [n, s.offset, s.pending, i, c, e, r, s, o]),
        c
    );
}
const fo = 'disable',
    mo = 'scroll-active';
function ho({ api: e, baseRef: t }) {
    const n = tn(),
        r = Ht(function () {
            const n = e.getWrapperSize(),
                r = e.getContainerSize();
            if (null === t.current || void 0 === r || void 0 === n) return;
            1 === Math.min(1, n / r || 1) ? t.current.classList.remove(mo) : t.current.classList.add(mo);
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
function po(e, t) {
    const n = e.getBoundingClientRect(),
        r = t === oo.horizontal ? n.x : n.y;
    return { start: r, end: t === oo.horizontal ? r + n.width : r + n.height };
}
function go(e, t, n, r, o, s, a) {
    const i = vn(),
        c = o.stepTimeout || 100,
        [u, d] = (function (e, t, n = []) {
            const r = l.useRef(0),
                o = l.useCallback(() => {
                    (window.clearInterval(r.current), (r.current = 0));
                }, n || []);
            l.useEffect(() => o, [o]);
            const s = (n ?? []).concat([t]);
            return [
                l.useCallback((n) => {
                    (0 !== r.current && o(), (r.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                }, s),
                o,
            ];
        })((e) => o.applyStepTo(e), c, [o]);
    l.useEffect(
        () => (document.addEventListener('mouseup', d, !0), () => document.removeEventListener('mouseup', d, !0)),
        [d],
    );
    const f = l.useCallback(
            (e) => {
                e.target.classList.contains(fo) ||
                    (i.play('click', { target: 'Scroll:Back', original: e }), u(to.Next));
            },
            [u, i],
        ),
        m = l.useCallback(
            (e) => {
                e.target.classList.contains(fo) ||
                    (i.play('click', { target: 'Scroll:Forward', original: e }), u(to.Prev));
            },
            [u, i],
        ),
        h = l.useCallback(
            (c) => {
                const l = e.current,
                    u = t.current,
                    d = n.current,
                    h = r.current;
                if (!(l && u && d && h && 0 === c.button)) return;
                const p = (function (e, t, n, r, o, s) {
                        return {
                            occurredEvent: s === oo.horizontal ? e.screenX : e.screenY,
                            bar: po(t, s),
                            thumb: po(n, s),
                            backButton: po(r, s),
                            forwardButton: po(o, s),
                        };
                    })(c, l, u, d, h, a),
                    g = p.thumb.start <= p.occurredEvent && p.occurredEvent <= p.thumb.end,
                    b =
                        (p.backButton.start <= p.occurredEvent && p.occurredEvent <= p.backButton.end) ||
                        (p.forwardButton.start <= p.occurredEvent && p.occurredEvent <= p.forwardButton.end);
                if (g) s({ pending: !0, offset: p.occurredEvent - p.thumb.start });
                else if (b) {
                    ((p.occurredEvent > p.thumb.start ? to.Prev : to.Next) === to.Next ? f : m)(c);
                } else {
                    const e = p.occurredEvent - p.bar.start,
                        t = p.thumb.end - p.thumb.start,
                        n = p.bar.end - p.bar.start,
                        r = o.getContainerSize();
                    if ('number' != typeof r || Number.isNaN(r)) return console.error('Incorrect container size');
                    const s = ((e - t / 2) / n) * r;
                    o.applyScroll(s);
                }
                i.play('click', { target: 'Scroll:' + (g ? 'thumb' : b ? 'button' : ''), original: c });
            },
            [e, t, n, r, i, a, s, f, m, o],
        ),
        p = l.useCallback(
            (e) => {
                e.target.classList.contains(fo) || i.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [i],
        );
    return l.useMemo(
        () => ({
            handleMouseBackDown: f,
            handleMouseEnter: p,
            handleMouseDownTrack: h,
            handleMouseForwardDown: m,
            handleMouseForwardUp: d,
            handleMouseBackUp: d,
        }),
        [f, p, h, m, d],
    );
}
const bo = 'HorizontalBar_rail_37858d8f',
    _o = 'HorizontalBar_4df27ac3',
    vo = 'HorizontalBar_track_649dc296',
    yo = 'HorizontalBar_rail__left_1a906b4e',
    wo = 'HorizontalBar_rail__right_cd24364e',
    xo = 'HorizontalBar_button__right_e8f0aa2d',
    Eo = 'HorizontalBar_button__left_da330e13',
    No = 'HorizontalBar_button_cbabd91',
    So = { closed: { height: '3rem', top: '4rem' }, opened: { height: '11rem', top: '0rem' } },
    Ro = (e, t) => Math.max(Se(13), e.offsetWidth * t);
l.memo(function ({ classNames: e = {}, onDrag: t = Ie }) {
    const n = l.useRef(null),
        r = l.useRef(null),
        o = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(null),
        i = l.useRef(null),
        c = l.useRef(null),
        [f, m] = l.useState(!1),
        { api: h } = (function () {
            const e = l.useContext(eo);
            if (!e) throw new Error('useHorizontalScroll must be used within a Scroll.Horizontal.Base component');
            return e;
        })();
    ho({ baseRef: n, api: h });
    const p = Ht((e, t, { parent: n }) => (e.screenX - t.offset - n.getBoundingClientRect().x) / n.offsetWidth),
        g = Ht((e) => e - (s.current.offsetWidth - a.current.offsetWidth) >= -0.5),
        b = l.useCallback((e) => ('dragStart' === e.type ? m(!0) : 'dragEnd' === e.type && m(!1), t(e)), [t]),
        _ = uo(a, b, h, s, p),
        v = Ht(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
            const r = s.current,
                o = i.current,
                a = c.current;
            if (!r || !o || !a) return;
            const l = Se(5);
            ((o.style.width = `${t - l + n}px`), (a.style.width = r.offsetWidth - e - t - l - n + 'px'));
        }),
        { handleMouseEnter: y, handleMouseDownTrack: w } = go(n, a, o, r, h, _, oo.horizontal);
    return u.jsxs('div', {
        className: d(_o, e.base),
        ref: n,
        onWheel: h.handleMouseWheel,
        onMouseDown: w,
        onMouseEnter: y,
        children: [
            u.jsx('div', { ref: r, className: d(No, Eo, e.leftButton) }),
            u.jsxs('div', {
                ref: s,
                className: d(vo, e.track),
                children: [
                    u.jsx('div', { ref: i, className: d(bo, yo, e.leftRail) }),
                    u.jsx(co, {
                        dragging: f,
                        api: h,
                        calculateOffset: p,
                        calculateSize: Ro,
                        direction: 'horizontal',
                        isBoundThumb: g,
                        railAfterRef: i,
                        railBeforeRef: c,
                        styles: So,
                        onUpdate: v,
                        thumbRef: a,
                        trackRef: s,
                    }),
                    u.jsx('div', { ref: c, className: d(bo, wo, e.rightRail) }),
                ],
            }),
            u.jsx('div', { ref: o, className: d(No, xo, e.rightButton) }),
        ],
    });
});
const To = l.createContext(void 0);
function Co() {
    const e = l.useContext(To);
    if (!e) throw new Error('useVerticalScroll must be used within a Scroll.Vertical.Base component');
    return e;
}
const ko = (({
        getContainerSize: e,
        getBounds: t,
        setScrollPosition: n,
        getDirection: r,
        getWrapperSize: o,
        triggerMouseMoveOnUpdate: s = !1,
    }) => {
        const a = (e, n) => {
            const [r, o] = t(e);
            return Me(r, o, n);
        };
        return (i = {}) => {
            const { settings: c = no } = i,
                [u, d] = l.useState(!1),
                f = l.useRef(null),
                m = l.useRef(null),
                h = l.useRef({ wrapper: 0, container: 0 }),
                p = l.useMemo(() => {
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
                g = nn(
                    () => {
                        viewEnv.forceTriggerMouseMove();
                    },
                    [],
                    150,
                ),
                [b, _] = A(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = f.current;
                        t && (n(t, e), p.trigger('change', e));
                    },
                    onRest: (e) => p.trigger('rest', e),
                    onStart: (e) => p.trigger('start', e),
                    onPause: (e) => p.trigger('pause', e),
                })),
                v = l.useCallback(
                    (e, t, n) => {
                        const r = b.scrollPosition.get(),
                            o = (b.scrollPosition.goal ?? 0) - r;
                        return a(e, t * n + o + r);
                    },
                    [b.scrollPosition],
                ),
                y = l.useCallback(
                    function (e, { immediate: t = !1, reset: n = !0 } = {}) {
                        const r = f.current;
                        if (!r) return;
                        const o = a(r, e);
                        b.scrollPosition.goal !== o &&
                            _.start({
                                scrollPosition: o,
                                immediate: t,
                                reset: n,
                                config: c.animationConfig,
                                from: { scrollPosition: a(r, b.scrollPosition.get()) },
                                onChange: () => {
                                    s && g();
                                },
                            });
                    },
                    [b.scrollPosition, _, c.animationConfig, g],
                ),
                w = l.useCallback(
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
                            })(n, c.step),
                            s = v(t, e, r);
                        y(s);
                    },
                    [y, v, c.step],
                ),
                x = l.useCallback(
                    function (e) {
                        u ||
                            (0 !== e.deltaY && w(r(e)),
                            f.current && p.trigger('mouseWheel', e, b.scrollPosition, t(f.current)));
                    },
                    [b.scrollPosition, w, p, u],
                ),
                E = l.useCallback(
                    function () {
                        const e = f.current;
                        e && (y(a(e, b.scrollPosition.goal), { immediate: !0 }), p.trigger('resizeHandled'));
                    },
                    [y, b.scrollPosition.goal, p],
                );
            Jt(m, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = o(t);
                h.current.wrapper !== n && E();
            });
            const N = Ht(function () {
                    const t = f.current;
                    if (!t) return;
                    const n = e(t),
                        r = m.current ? o(m.current) : 0;
                    if (h.current.container !== n || h.current.wrapper !== r) {
                        const e = a(t, b.scrollPosition.goal);
                        (e !== b.scrollPosition.goal && y(e, { immediate: !0 }),
                            (h.current.container = n),
                            (h.current.wrapper = r),
                            p.trigger('recalculateContent'));
                    }
                }),
                S = tn();
            l.useEffect(() => Le(window, 'resize', () => S.run(E)), [E, S]);
            return l.useMemo(
                () => ({
                    getWrapperSize: () => (m.current ? o(m.current) : void 0),
                    getContainerSize: () => (f.current ? e(f.current) : void 0),
                    getBounds: () =>
                        f.current ? t(f.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: c.step.clampedArrowStepTimeout,
                    settings: c,
                    clampPosition: a,
                    handleMouseWheel: x,
                    applyScroll: y,
                    applyStepTo: w,
                    contentRef: f,
                    wrapperRef: m,
                    scrollPosition: _,
                    animationScroll: b,
                    recalculateContent: N,
                    disabled: u,
                    setDisabled: d,
                    events: { on: p.on, off: p.off },
                }),
                [c, x, y, w, _, b, N, u, d, p.on, p.off],
            );
        };
    })({
        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
        getContainerSize: (e) => e.scrollHeight,
        getWrapperSize: (e) => e.offsetHeight,
        setScrollPosition: (e, t) => {
            e.scrollTop = Math.trunc(t.value.scrollPosition ?? 0);
        },
        getDirection: (e) => (e.deltaY > 1 ? to.Next : to.Prev),
    }),
    Ao = 'VerticalBar_rail_3d663c9',
    Po = 'VerticalBar_7187fa00',
    Mo = 'VerticalBar_track_ff482708',
    Io = 'VerticalBar_rail__top_ee531f43',
    zo = 'VerticalBar_rail__bottom_3eaa33b1',
    jo = 'VerticalBar_button__bottom_6880f123',
    Do = 'VerticalBar_button__top_b8383775',
    Oo = 'VerticalBar_button_7b0e4aca',
    Bo = { closed: { width: '3rem', left: '3rem' }, opened: { width: '9rem', left: '0rem' } },
    Lo = (e, t) => Math.max(Se(13), e.offsetHeight * t),
    Fo = l.memo(function ({ classNames: e = {}, onDrag: t = Ie }) {
        const n = l.useRef(null),
            r = l.useRef(null),
            o = l.useRef(null),
            s = l.useRef(null),
            a = l.useRef(null),
            i = l.useRef(null),
            c = l.useRef(null),
            [f, m] = l.useState(!1),
            { api: h } = Co();
        ho({ baseRef: n, api: h });
        const p = Ht((e) => e - (s.current.offsetHeight - a.current.offsetHeight) >= -0.5),
            g = Ht((e, t, { parent: n }) => (e.screenY - t.offset - n.getBoundingClientRect().y) / n.offsetHeight),
            b = l.useCallback((e) => ('dragStart' === e.type ? m(!0) : 'dragEnd' === e.type && m(!1), t(e)), [t]),
            _ = uo(a, b, h, s, g),
            v = Ht(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
                const r = s.current,
                    o = i.current,
                    a = c.current;
                if (!r || !o || !a) return;
                const l = Se(5);
                ((o.style.height = `${t - l + n}px`), (a.style.height = r.offsetHeight - e - t - l - n + 'px'));
            }),
            { handleMouseEnter: y, handleMouseDownTrack: w } = go(n, a, r, o, h, _, oo.vertical);
        return u.jsxs('div', {
            className: d(Po, e.base),
            ref: n,
            onWheel: h.handleMouseWheel,
            onMouseDown: w,
            onMouseEnter: y,
            children: [
                u.jsx('div', { ref: r, className: d(Oo, Do, e.topButton) }),
                u.jsxs('div', {
                    ref: s,
                    className: d(Mo, e.track),
                    children: [
                        u.jsx('div', { ref: i, className: d(Ao, Io, e.topRail) }),
                        u.jsx(co, {
                            dragging: f,
                            api: h,
                            calculateOffset: g,
                            calculateSize: Lo,
                            direction: 'vertical',
                            isBoundThumb: p,
                            railAfterRef: i,
                            railBeforeRef: c,
                            styles: Bo,
                            onUpdate: v,
                            thumbRef: a,
                            trackRef: s,
                        }),
                        u.jsx('div', { ref: c, className: d(Ao, zo, e.bottomRail) }),
                    ],
                }),
                u.jsx('div', { ref: o, className: d(Oo, jo, e.bottomButton) }),
            ],
        });
    }),
    $o = 'top',
    Ho = 'bottom',
    Wo = 'both',
    Uo = 'none',
    Ko = {
        content: 'VerticalScroll_content_62cb6120',
        content__top: 'VerticalScroll_content__top_b27098a4',
        content__bottom: 'VerticalScroll_content__bottom_d6604290',
        content__both: 'VerticalScroll_content__both_8d905712',
        defaultScroll: 'VerticalScroll_defaultScroll_c69fa70e',
        bar: 'VerticalScroll_bar_c5afe570',
        area: 'VerticalScroll_area_a3c0086a',
    },
    Vo = ({ className: e, classNames: t, children: n, ...r }) => {
        const { api: o } = Co();
        return (
            l.useEffect(() => Je(() => Je(o.recalculateContent))),
            u.jsx('div', {
                className: d(Ko.base, null == t ? void 0 : t.wrapper, e),
                ref: o.wrapperRef,
                onWheel: o.handleMouseWheel,
                children: u.jsx('div', {
                    ...r,
                    className: d(Ko.content, null == t ? void 0 : t.content),
                    ref: o.contentRef,
                    children: n,
                }),
            })
        );
    };
function Go({ classNames: e, ...t }) {
    const { api: n } = Co(),
        [r, o] = (function (e, [t, n] = ro) {
            const [r, o] = l.useState(!0),
                [s, a] = l.useState(!0);
            return (
                l.useEffect(() => {
                    function r() {
                        if (!e.contentRef.current) return;
                        const r = e.animationScroll.scrollPosition.get(),
                            [s, i] = e.getBounds(),
                            c = r >= i - n;
                        (o(r <= s + t), a(c));
                    }
                    return new Be()
                        .add(Je(r))
                        .add(e.events.on('resizeHandled', r))
                        .add(e.events.on('recalculateContent', r))
                        .add(e.events.on('change', r)).dispose;
                }, [e, t, n]),
                [r, s]
            );
        })(n);
    return u.jsx(Vo, {
        ...t,
        classNames: {
            ...e,
            content: d(
                Ko[`content__${((s = r), (a = o), s || a ? (s ? (a ? Uo : Ho) : $o) : Wo)}`],
                null == e ? void 0 : e.content,
            ),
        },
    });
    var s, a;
}
function Yo({ children: e }) {
    const t = ko(),
        n = l.useMemo(() => ({ api: t }), [t]);
    return u.jsx(To.Provider, { value: n, children: e });
}
Vo.Default = ({
    children: e,
    className: t,
    barClassNames: n,
    areaClassName: r,
    scrollClassName: o,
    scrollClassNames: s,
    onDrag: a,
}) => {
    const { api: i } = Co(),
        c = l.useMemo(() => {
            const e = n || {};
            return { ...e, base: d(Ko.base, e.base) };
        }, [n]);
    return u.jsxs('div', {
        className: d(Ko.defaultScroll, t),
        onWheel: i.handleMouseWheel,
        children: [
            u.jsx('div', {
                className: d(Ko.area, r),
                children: u.jsx(Vo, { className: o, classNames: s, children: e }),
            }),
            u.jsx(Fo, { onDrag: a, classNames: c }),
        ],
    });
};
const qo = {
        tankXP: 'tankXP',
        freeXP: 'freeXP',
        credits: 'credits',
        gold: 'gold',
        crystal: 'crystal',
        equipCoin: 'equipCoin',
        eliteXp: 'eliteXp',
        depot: 'depot',
        vehicle: 'vehicle',
        crew: 'crew',
        custom: 'custom',
    },
    Xo = Object.values(qo),
    Qo = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
        xxl: 'xxl',
    },
    Zo = { [Qo.extraSmall]: 16, [Qo.small]: 24, [Qo.medium]: 32, [Qo.large]: 48, [Qo.extraLarge]: 80, [Qo.xxl]: 96 },
    Jo = { [Qo.extraSmall]: 32, [Qo.small]: 48, [Qo.medium]: 32, [Qo.large]: 96, [Qo.extraLarge]: 80, [Qo.xxl]: 96 },
    es = {
        base: 'Currency_72d4be39',
        base__reverse: 'Currency_base__reverse_f12e61b0',
        base__notEnough: 'Currency_base__notEnough_9a7842f',
        base__credits: 'Currency_base__credits_7b9ae721',
        base__gold: 'Currency_base__gold_d6e3cbc',
        base__freeXP: 'Currency_base__freeXP_d29d5a57',
        base__crystal: 'Currency_base__crystal_f830cb47',
        base__tankXP: 'Currency_base__tankXP_1707c68b',
    },
    ts = L.resolve('intl'),
    ns = Gn('Currency', es.base, { variants: { reverse: { true: es.base__reverse } } });
function rs(e, t) {
    const n = t === qo.gold ? 'gold' : 'integral';
    return Array.isArray(e)
        ? e.map((e) => ('number' == typeof e ? ts.formatNumber(n, e) : e))
        : 'number' == typeof e
          ? ts.formatNumber(n, e)
          : e;
}
function os({
    children: e,
    type: t,
    className: n,
    classNames: r,
    imagePath: o,
    size: s = Qo.small,
    enough: a = !0,
    ...i
}) {
    const c = Zo[s],
        l = `${t}_${c}x${c}`,
        f = Jo[s],
        m = `${t}_${f}x${f}`,
        h = o || Xo.includes(t),
        p = Ot(`library.currency.${l}`, `library.currency.${m}`);
    return u.jsxs(ns, {
        ...i,
        className: d(null == r ? void 0 : r.base, a ? es[`base__${t}`] : es.base__notEnough, n),
        children: [
            h && u.jsx(Ar, { width: c, height: c, path: o ?? p, className: null == r ? void 0 : r.icon }),
            rs(e, t),
        ],
    });
}
function ss(e) {
    var t;
    return (
        ('function' == typeof e && !(null == (t = e.prototype) ? void 0 : t.isReactComponent)) ||
        (function (e) {
            return 'object' == typeof e && null !== e && 'symbol' == typeof e.$$typeof;
        })(e)
    );
}
function as(e) {
    for (const t in e) return !1;
    return !0;
}
((os.sizes = Qo), (os.types = qo));
class is extends l.Component {
    constructor() {
        (super(...arguments), o(this, 'state', { failure: !1, error: null }));
    }
    static getDerivedStateFromError(e) {
        return (console.error(e), { failure: !0, error: e });
    }
    failure() {
        return u.jsxs('div', {
            children: [
                u.jsx('h1', { children: 'Something went wrong.' }),
                this.state.error && u.jsx('pre', { children: this.state.error.toString() }),
            ],
        });
    }
    render() {
        return this.state.failure
            ? this.props.failure
                ? this.props.failure(this.state.error)
                : this.failure()
            : this.props.children;
    }
}
const cs = { lightTank: 'lightTank', mediumTank: 'mediumTank', heavyTank: 'heavyTank', SPG: 'SPG', 'AT-SPG': 'AT-SPG' },
    ls = Object.values(cs);
function us(e) {
    const t = e.indexOf(':');
    return ne(t < 0 ? e.toLowerCase() : e.substring(t + 1).toLowerCase());
}
function ds(e) {
    const t = e.tier;
    var n;
    et((n = t) >= 1 && n <= 11, `Such tier ${t} is not supported`);
    const r = e.type;
    return (
        et(((e) => ls.includes(e))(r), `Such vehicle type ${r} is not supported`),
        {
            tier: t,
            type: r,
            normilizedType: ne(e.type),
            name: e.name,
            techName: e.techName,
            premium: e.isPremium,
            vehicleCD: e.vehicleCD,
            nation: e.nation,
        }
    );
}
function fs(e) {
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
const ms = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    hs = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
    ps = Gn('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    gs = l.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: o = !1, silent: s = !1, ...a },
        i,
    ) {
        const c = vn();
        return u.jsx(ps, {
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
    bs = {
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
    _s = l.forwardRef(function (
        {
            children: e,
            size: t = hs.large,
            theme: n = ms.primary,
            disabled: r = !1,
            silent: o = !1,
            autoAlignContent: s = !0,
            classNames: a,
            className: i,
            ...c
        },
        l,
    ) {
        return u.jsxs(gs, {
            ...c,
            ref: l,
            silent: o,
            disabled: r,
            className: d(
                bs.base,
                bs[`base__size-${t}`],
                bs[`base__theme-${n}`],
                r ? bs.base__disabled : bs.base__enabled,
                i,
                null == a ? void 0 : a.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = c.onClick) || t.call(c, e);
            },
            children: [
                u.jsx('div', { className: d(bs.background, null == a ? void 0 : a.background) }),
                u.jsx('div', { className: d(bs.border, null == a ? void 0 : a.border) }),
                u.jsx('div', { className: d(bs.overlay, null == a ? void 0 : a.overlay) }),
                u.jsx('div', {
                    className: d(bs.content, s && bs.content__fontAligned, null == a ? void 0 : a.content),
                    children: e,
                }),
            ],
        });
    });
function vs(e) {
    return (
        !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
        (!l.isValidElement(e) && !!Array.isArray(e) && e.every(vs))
    );
}
((_s.themes = ms), (_s.sizes = hs));
const ys = 'MultilineOverflow_8834bd8e',
    ws = 'MultilineOverflow_content_b539970d';
const xs = l.forwardRef(function (
        {
            text: e,
            brackets: t,
            params: n,
            formatters: r,
            upgradeLegacy: o,
            split: s = !0,
            onMouseEnter: a,
            onMouseLeave: i,
            onClick: c,
            tooltipDisabled: f = !1,
            tooltip: m,
            className: h,
            classNames: p,
            ...g
        },
        b,
    ) {
        const _ = l.useRef(null),
            [v, y] = l.useState(!1);
        l.useEffect(() => {
            if (0 === e.length) return;
            const t = _.current;
            if (!t) return;
            const n = document.createElement('div');
            let r = Ie;
            function o() {
                if (!t) return;
                (r(),
                    (n.style.visibility = 'hidden'),
                    (n.className = d(ws, t.children[0].className)),
                    (n.innerHTML = ''),
                    t.appendChild(n));
                for (let r of t.children[0].childNodes.values()) {
                    if (r instanceof HTMLElement) {
                        const e = r.cloneNode(!0);
                        n.appendChild(e);
                    }
                    if (r.nodeType === Node.TEXT_NODE) {
                        const e = document.createTextNode(r.nodeValue ?? '');
                        n.appendChild(e);
                    }
                }
                const e = document.createElement('div');
                ((e.innerHTML = '...'),
                    n.appendChild(e),
                    (r = Je(() => {
                        var r, o;
                        const s = [];
                        for (let e = n.childNodes.length - 2; 0 !== e; e--) {
                            const r = n.childNodes[e];
                            if (r instanceof HTMLElement) {
                                if (r.offsetTop + r.offsetHeight <= t.offsetHeight) break;
                                s.push(r);
                            }
                        }
                        s.forEach((e) => e.remove());
                        const a = null == (r = n.lastChild) ? void 0 : r.previousSibling;
                        (0 === s.length
                            ? (null == (o = n.lastChild) || o.remove(), y(!1))
                            : a.offsetWidth + a.offsetLeft + e.offsetWidth > t.offsetWidth
                              ? (a.remove(), y(!0))
                              : y(!0),
                            (n.style.visibility = ''));
                    })));
            }
            const s = new ResizeObserver(o);
            return (
                s.observe(t),
                new Be()
                    .add(() => r())
                    .add(Le(window, 'resize', o))
                    .add(s.disconnect.bind(s))
                    .add(n.remove.bind(n)).dispose
            );
        }, [b, e]);
        const w = (function (e) {
                return !e || Object.values(e).every(vs);
            })(n),
            x = (function (e, t, n) {
                return cn({
                    ...n,
                    disabled: null == n ? void 0 : n.disabled,
                    contentId: L.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
                    args: l.useMemo(() => ({ type: e, params: JSON.stringify(t), resId: t.resId }), [t, e]),
                });
            })(
                'format_text',
                l.useMemo(
                    () => ({
                        text: e,
                        params: w ? n : void 0,
                        split: s,
                        upgradeLegacy: o,
                        brackets: t,
                        resId: L.resolve('views').read((e) => e.mono.tooltips.tooltips('resId')),
                    }),
                    [e, t, s, o, n, w],
                ),
            ),
            E = m ?? x;
        if (
            (l.useEffect(() => {
                f || v || E.onMouseLeave();
            }, [v, E, m, f, w]),
            0 === e.length)
        )
            return null;
        return u.jsx('div', {
            ...g,
            onMouseEnter: function (e) {
                (null == a || a(e), v && !f && E.onMouseEnter(e));
            },
            onClick: function (e) {
                (null == c || c(e), f || E.onClick());
            },
            onMouseLeave: function (e) {
                (null == i || i(e), f || E.onMouseLeave());
            },
            ref: Bn([b, _]),
            className: d(ys, h, null == p ? void 0 : p.base),
            children: u.jsx(Sr, {
                text: e,
                brackets: t,
                params: n,
                upgradeLegacy: o,
                split: s,
                formatters: r,
                className: null == p ? void 0 : p.text,
                style: { visibility: 'hidden' },
            }),
        });
    }),
    Es = 'GradientText_textOverlay_2d67fbb8',
    Ns = 'GradientText_5009d812',
    Ss = l.forwardRef(function ({ classNames: e, children: t }, n) {
        return u.jsxs('div', {
            ref: n,
            className: d(Ns, null == e ? void 0 : e.base),
            children: [
                u.jsx('div', { className: null == e ? void 0 : e.text, children: t }),
                u.jsx('div', { className: d(Es, null == e ? void 0 : e.textOverlay), children: t }),
            ],
        });
    }),
    Rs = { noneRef: 'none-ref', measured: 'measured' },
    Ts = { type: 'measuring' };
function Cs() {
    const e = l.useRef(null),
        [t, n] = l.useState(Ts),
        r = ((e, t = []) => {
            const n = l.useRef(),
                r = l.useCallback((...t) => {
                    (n.current && n.current(), (n.current = e(...t)));
                }, t);
            return (
                l.useEffect(
                    () => () => {
                        n.current && n.current();
                    },
                    [r],
                ),
                r
            );
        })(
            () => (
                n(Ts),
                Je(() => {
                    e.current
                        ? n({
                              type: Rs.measured,
                              size: { width: e.current.offsetWidth, height: e.current.offsetHeight },
                          })
                        : n({ type: Rs.noneRef });
                })
            ),
            [],
        );
    return (
        l.useEffect(
            () => (window.addEventListener('resize', r), r(), () => window.removeEventListener('resize', r)),
            [r],
        ),
        [e, t, r]
    );
}
const ks = L.resolve('strings'),
    As = L.resolve('intl'),
    Ps = (e) => As.toUpperCase(ks.readOr(`readable_key_names.KEY_${e}`, () => Ms)),
    Ms = As.toUpperCase(ks.readOrEmpty('readable_key_names.KEY_NONE_ALT')),
    Is = {
        [He.NONE]: Ps('NONE_ALT'),
        [He.ESCAPE]: Ps('ESCAPE'),
        [He.ENTER]: Ps('ENTER'),
        [He.SPACE]: Ps('SPACE'),
        [He.DELETE]: Ps('DELETE'),
        [He.BACKSPACE]: Ps('BACKSPACE'),
        [He.TAB]: Ps('TAB'),
        [He.HOME]: Ps('HOME'),
        [He.END]: Ps('END'),
        [He.MINUS]: Ps('MINUS'),
        [He.SLASH]: Ps('SLASH'),
        [He.BACKSLASH]: Ps('BACKSLASH'),
        [He.PERIOD]: Ps('PERIOD'),
        [He.COMMA]: Ps('COMMA'),
        [He.QUOTE]: Ps('APOSTROPHE'),
        [He.SEMICOLON]: Ps('SEMICOLON'),
        [He.INSERT]: Ps('INSERT'),
        [He.KEY_A]: Ps('A'),
        [He.KEY_B]: Ps('B'),
        [He.KEY_C]: Ps('C'),
        [He.KEY_D]: Ps('D'),
        [He.KEY_E]: Ps('E'),
        [He.KEY_F]: Ps('F'),
        [He.KEY_G]: Ps('G'),
        [He.KEY_H]: Ps('H'),
        [He.KEY_I]: Ps('I'),
        [He.KEY_J]: Ps('J'),
        [He.KEY_K]: Ps('K'),
        [He.KEY_L]: Ps('L'),
        [He.KEY_M]: Ps('M'),
        [He.KEY_N]: Ps('N'),
        [He.KEY_O]: Ps('O'),
        [He.KEY_P]: Ps('P'),
        [He.KEY_Q]: Ps('Q'),
        [He.KEY_R]: Ps('R'),
        [He.KEY_S]: Ps('S'),
        [He.KEY_T]: Ps('T'),
        [He.KEY_U]: Ps('U'),
        [He.KEY_V]: Ps('V'),
        [He.KEY_W]: Ps('W'),
        [He.KEY_X]: Ps('X'),
        [He.KEY_Y]: Ps('Y'),
        [He.KEY_Z]: Ps('Z'),
        [He.DIGIT_0]: Ps('0'),
        [He.DIGIT_1]: Ps('1'),
        [He.DIGIT_2]: Ps('2'),
        [He.DIGIT_3]: Ps('3'),
        [He.DIGIT_4]: Ps('4'),
        [He.DIGIT_5]: Ps('5'),
        [He.DIGIT_6]: Ps('6'),
        [He.DIGIT_7]: Ps('7'),
        [He.DIGIT_8]: Ps('8'),
        [He.DIGIT_9]: Ps('9'),
        [He.NUMPAD_0]: Ps('NUMPAD0'),
        [He.NUMPAD_1]: Ps('NUMPAD1'),
        [He.NUMPAD_2]: Ps('NUMPAD2'),
        [He.NUMPAD_3]: Ps('NUMPAD3'),
        [He.NUMPAD_4]: Ps('NUMPAD4'),
        [He.NUMPAD_5]: Ps('NUMPAD5'),
        [He.NUMPAD_6]: Ps('NUMPAD6'),
        [He.NUMPAD_7]: Ps('NUMPAD7'),
        [He.NUMPAD_8]: Ps('NUMPAD8'),
        [He.NUMPAD_9]: Ps('NUMPAD9'),
        [He.F_1]: Ps('F1'),
        [He.F_2]: Ps('F2'),
        [He.F_3]: Ps('F3'),
        [He.F_4]: Ps('F4'),
        [He.F_5]: Ps('F5'),
        [He.F_6]: Ps('F6'),
        [He.F_7]: Ps('F7'),
        [He.F_8]: Ps('F8'),
        [He.F_9]: Ps('F9'),
        [He.F_10]: Ps('F10'),
        [He.F_11]: Ps('F11'),
        [He.F_12]: Ps('F12'),
        [He.NUMPAD_MULTIPLY]: Ps('NUMPADSTAR'),
        [He.NUMPAD_DIVIDE]: Ps('NUMPADSLASH'),
        [He.NUMPAD_ADD]: Ps('ADD'),
        [He.NUMPAD_SUBTRACT]: Ps('NUMPADMINUS'),
        [He.NUMPAD_DECIMAL]: Ps('NUMPADPERIOD'),
        [He.ARROW_LEFT]: Ps('LEFTARROW'),
        [He.ARROW_RIGHT]: Ps('RIGHTARROW'),
        [He.ARROW_UP]: Ps('UPARROW'),
        [He.ARROW_DOWN]: Ps('DOWNARROW'),
        [He.PAGE_UP]: Ps('PGUP'),
        [He.PAGE_DOWN]: Ps('PGDN'),
        [He.BRACKET_LEFT]: Ps('LBRACKET'),
        [He.BRACKET_RIGHT]: Ps('RBRACKET'),
    },
    zs = l.createContext(void 0);
function js() {
    const e = l.useContext(zs);
    if (!e) throw new Error('useKeyButtonContext must be used within KeyButtonContext');
    return e;
}
const Ds = 'KeyButton_background_8a852f95',
    Os = 'KeyButton_border_b1c50f01',
    Bs = 'KeyButton_8fd343f8',
    Ls = 'KeyButton_content_a724f532',
    Fs = Gn('KeyButton', Bs);
function $s({ children: e, onClick: t, onMouseEnter: n, ...r }) {
    const o = vn(),
        { soundTarget: s, silent: a } = js();
    return u.jsx(Fs, {
        ...r,
        onMouseEnter: function (e) {
            (a || o.play('mouse-enter', { target: s, original: e }), null == n || n(e));
        },
        onClick: function (e) {
            (a || o.play('click', { target: s, original: e }), null == t || t(e));
        },
        children: e,
    });
}
function Hs({ keyCode: e, onActive: t, silent: n, soundTarget: r, idle: o, children: s }) {
    !(function (e, t, n = !1) {
        Yt(Ue(e), 'keyup', t, n);
    })(o ? He.NONE : Ue(e), t);
    const a = l.useMemo(() => ({ keyCode: e, onActive: t, silent: n, soundTarget: r, idle: o }), [e, t, r, n, o]);
    return u.jsx(zs.Provider, { value: a, children: s });
}
const Ws = function ({
    keyCode: e,
    onActive: t = Ie,
    silent: n = !1,
    idle: r = !1,
    soundTarget: o = 'KeyButton',
    classNames: s,
    className: a,
    children: i,
    ...c
}) {
    return u.jsx(Hs, {
        keyCode: e,
        onActive: t,
        silent: n,
        idle: r,
        soundTarget: o,
        children: u.jsxs($s, {
            ...c,
            className: d(Bs, a, null == s ? void 0 : s.base),
            children: [
                u.jsx('div', { className: d(Ds, null == s ? void 0 : s.background) }),
                u.jsx('div', { className: d(Os, null == s ? void 0 : s.border) }),
                u.jsx('div', { className: d(Ls, null == s ? void 0 : s.content), children: i }),
            ],
        }),
    });
};
Ws.Code = function () {
    const { keyCode: e } = js(),
        t = Ue(e);
    if (t === He.NONE) return Ms;
    const n = ((r = t), window.systemInput.getQWERTYScanCode(r));
    var r;
    const o = ((s = n), window.systemInput.getCurrentLayoutKeyName(s));
    var s;
    return o in Is
        ? Is[o]
        : (console.error(
              e === o
                  ? `KeyButton: key code "${e}" is not supported.`
                  : `KeyButton: virtual key code "${o}" for "${e}" is not supported.`,
          ),
          Ms);
};
const Us = { static: 'static', screenResponsive: 'screenResponsive', contentResponsive: 'contentResponsive' };
Object.values(Us);
const Ks = { header: 'header', body: 'body', footer: 'footer' },
    Vs = Object.values(Ks),
    Gs = l.createContext(null);
function Ys() {
    const e = l.useContext(Gs);
    if (null === e) throw new Error('You can use the table hooks only with the table component');
    return e;
}
function qs({ children: e, columns: t, data: n, sorting: r, pagination: o, rowSelection: s, initialState: a, ...i }) {
    const c = l.useRef({ header: [], body: [], footer: [] }),
        d = l.useRef(new Map()),
        h = l.useRef(null),
        p = M(() => {
            const e = f.array([]);
            return {
                updateAt: m((t, n) => {
                    e[t] = n;
                }),
                getAt: On.primitive((t) => e[t]),
            };
        }),
        g = l.useCallback(
            function () {
                0 !== d.current.size &&
                    (I(() => {
                        for (const [e, t] of d.current.entries()) p.updateAt(e, t);
                    }),
                    d.current.clear(),
                    (h.current = null));
            },
            [p],
        ),
        b = l.useCallback(
            function (e, t) {
                (d.current.set(e, t), null === h.current && (h.current = requestAnimationFrame(g)));
            },
            [g],
        ),
        _ = l.useCallback(
            (e, n, r, o) => {
                if (void 0 === c.current) return;
                Array.isArray(c.current[e][r]) || (c.current[e][r] = new Array(t.length));
                const s = c.current[e][r];
                void 0 !== s && (s[o] = n);
            },
            [t.length],
        );
    (Kt(() => {
        null !== h.current && (cancelAnimationFrame(h.current), (h.current = null));
    }),
        l.useLayoutEffect(
            () =>
                Je(function () {
                    const e = [...c.current.header, ...c.current.body, ...c.current.footer],
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
            [t.length, p, b],
        ));
    const v = z({
            data: n,
            columns: t,
            getCoreRowModel: O(),
            getSortedRowModel: r ? D() : void 0,
            getPaginationRowModel: o ? j() : void 0,
            initialState: a,
            state: { sorting: r, rowSelection: s, pagination: o },
            ...i,
        }),
        y = l.useMemo(
            () => ({ table: v, cellRefs: c, columnSizes: p, handleCellRefsSet: _, scheduleColumnSizeUpdate: b }),
            [v, c, p, _, b],
        );
    return u.jsx(Gs.Provider, { value: y, children: e });
}
const Xs = {
        base: 'Table_85be883a',
        row: 'Table_row_881b7550',
        header: 'Table_header_ef69bf65',
        footer: 'Table_footer_ef69bf65',
        body: 'Table_body_df2c1607',
        cell: 'Table_cell_7df9641e',
        sortable: 'Table_sortable_f63b3b4f',
        contentResponsiveCellWrapper: 'Table_contentResponsiveCellWrapper_ddee221c',
    },
    Qs = Gn('ContentResponsiveTableCell', Xs.cell),
    Zs = B(function (e) {
        var t;
        (et(
            e.cell.minSize.endsWith('rem'),
            `minSize unit of the content_responsive_cell should be in rem for ${e.cell.column.id} column`,
        ),
            et(
                e.cell.maxSize.endsWith('rem'),
                `maxSize unit of the content_responsive_cell should be in rem for ${e.cell.column.id} column`,
            ));
        const { className: n, style: r, cell: o, ...s } = e,
            a = l.useRef(null),
            i = o.column.getCanSort(),
            { cellRefs: c, columnSizes: f, handleCellRefsSet: m, scheduleColumnSizeUpdate: h } = Ys(),
            p = f.getAt(o.index);
        return (
            l.useLayoutEffect(() => {
                var e, t;
                const n =
                    null == (t = null == (e = c.current) ? void 0 : e[o.tablePart][o.rowIndex]) ? void 0 : t[o.index];
                if (null == n)
                    return void console.warn(
                        `Ref is not assigned for content responsive cell at tablePart ${o.tablePart}, row index ${o.rowIndex}, cell index ${o.index}`,
                    );
                a.current = new ResizeObserver(function () {
                    var e;
                    let t = 0;
                    for (const n of Vs)
                        for (const r of c.current[n]) {
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
            u.jsx(
                Qs,
                {
                    className: d(
                        null == (t = o.column.columnDef.meta) ? void 0 : t.className,
                        i && Ks.header === o.tablePart && Xs.sortable,
                        n,
                    ),
                    style: {
                        ...r,
                        maxWidth: o.maxSize,
                        minWidth: o.minSize,
                        width: ct(p) ? p : 'auto',
                        opacity: ct(p) ? 1 : 0,
                    },
                    ...s,
                    children: u.jsx('div', {
                        className: Xs.contentResponsiveCellWrapper,
                        ref: l.useCallback(
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
    Js = Gn('ScreenResponsiveTableCell', Xs.cell);
function ea(e) {
    var t;
    (et(
        e.cell.size.endsWith('%'),
        `Size unit of the screen_responsive_cell should be in percents for ${e.cell.column.id} column`,
    ),
        et(
            e.cell.minSize.endsWith('rem'),
            `minSize unit of the screen_responsive_cell should be in rem for ${e.cell.column.id} column`,
        ),
        et(
            e.cell.maxSize.endsWith('rem'),
            `maxSize unit of the screen_responsive_cell should be in rem for ${e.cell.column.id} column`,
        ));
    const { className: n, style: r, cell: o, ...s } = e,
        [a, i] = l.useState(!1),
        c = e.cell.column.getCanSort(),
        { handleCellRefsSet: f } = Ys();
    return (
        l.useEffect(
            () =>
                Je(() => {
                    i(!0);
                }),
            [],
        ),
        u.jsx(
            Js,
            {
                ref: l.useCallback(
                    (e) => f(o.tablePart, e, o.rowIndex, o.index),
                    [o.tablePart, o.rowIndex, o.index, f],
                ),
                className: d(
                    null == (t = o.column.columnDef.meta) ? void 0 : t.className,
                    c && Ks.header === o.tablePart && Xs.sortable,
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
const ta = Gn('StaticTableCell', Xs.cell);
function na(e) {
    var t;
    et(e.cell.size.endsWith('rem'), `Size unit is not correct for the ${e.cell.column.id} column`);
    const { className: n, style: r, cell: o, ...s } = e,
        [a, i] = l.useState(!1),
        c = o.column.getCanSort(),
        { handleCellRefsSet: f } = Ys();
    return (
        l.useEffect(
            () =>
                Je(() => {
                    i(!0);
                }),
            [],
        ),
        u.jsx(ta, {
            ref: l.useCallback((e) => f(o.tablePart, e, o.rowIndex, o.index), [o.tablePart, o.rowIndex, o.index, f]),
            className: d(
                null == (t = o.column.columnDef.meta) ? void 0 : t.className,
                c && Ks.header === o.tablePart && Xs.sortable,
                n,
            ),
            style: { ...r, width: o.size, opacity: a ? 1 : 0 },
            ...s,
            children: e.children,
        })
    );
}
const ra = Gn('Table', Xs.base),
    oa = Gn('TableHeader', Xs.header),
    sa = Gn('TableBody', Xs.body),
    aa = Gn('TableFooter', Xs.footer),
    ia = Gn('TableRow', Xs.row),
    ca = l.forwardRef(function (e, t) {
        return u.jsx(ra, { ref: t, ...e, children: e.children });
    });
((ca.Header = oa),
    (ca.Body = sa),
    (ca.Footer = aa),
    (ca.Row = ia),
    (ca.Cell = function (e) {
        const t = e.cell.column.columnDef.meta;
        et(void 0 !== t, `meta data is not provided in the table columns config for ${e.cell.column.id}`);
        const { cell: n, ...r } = e;
        switch (t.column.behaviour) {
            case Us.static:
                return u.jsx(na, { ...r, cell: { ...n, size: t.column.size } });
            case Us.contentResponsive:
                return u.jsx(Zs, { ...r, cell: { ...n, minSize: t.column.minSize, maxSize: t.column.maxSize } });
            case Us.screenResponsive:
                return u.jsx(ea, {
                    ...r,
                    cell: { ...n, size: t.column.size, minSize: t.column.minSize, maxSize: t.column.maxSize },
                });
            default:
                return (console.error(`Column behaviour for ${e.cell.column.id} is not provided`), null);
        }
    }),
    (ca.behaviours = Us));
const la = 'TruncateText_dcb41d92',
    ua = l.forwardRef(function ({ text: e, tooltipParams: t, className: n, ...r }, o) {
        const s = ln({ header: null == t ? void 0 : t.header, body: (null == t ? void 0 : t.body) || e }),
            a = l.useRef(null),
            [i, c] = l.useState(!1);
        const f = l.useCallback(() => {
            if (a.current) {
                const { scrollWidth: e, offsetWidth: t } = a.current;
                c(e > t);
            }
        }, []);
        return (
            l.useEffect(() => {
                i || s.onMouseLeave();
            }, [i, s]),
            Qt(f, [f]),
            Zt(f, [f]),
            Jt(a, f),
            u.jsx('div', {
                ...r,
                ref: function (e) {
                    ((a.current = e), 'function' == typeof o ? o(e) : o && (o.current = e));
                },
                className: d(la, n),
                ...(i ? s : {}),
                children: e,
            })
        );
    }),
    da = { x24x24: '24x24', x32x32: '32x32', x48x48: '48x48' },
    fa = {
        [da.x24x24]: 'library.gray_eye_24x24',
        [da.x32x32]: 'library.gray_eye_32x32',
        [da.x48x48]: 'library.gray_eye_48x48',
    },
    ma = {
        [da.x24x24]: { width: '24rem', height: '24rem' },
        [da.x32x32]: { width: '32rem', height: '32rem' },
        [da.x48x48]: { width: '48rem', height: '48rem' },
    },
    ha = Gn('PlayerInfoAnonymizer', { element: Ar }),
    pa = l.forwardRef(function (
        { size: e, path: t = fa[e], width: n = ma[e].width, height: r = ma[e].height, className: o, ...s },
        a,
    ) {
        return u.jsx(ha, { ...s, ref: a, path: t, width: n, height: r, className: o });
    });
pa.sizes = da;
const ga = {
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
    ba = { x24x24: '24x24', x48x48: '48x48', x80x80: '80x80' },
    _a = {
        [ba.x24x24]: { width: '24rem', height: '24rem' },
        [ba.x48x48]: { width: '48rem', height: '48rem' },
        [ba.x80x80]: { width: '80rem', height: '80rem' },
    },
    va = Gn('PlayerInfoBadge', { element: Ar }),
    ya = l.forwardRef(function (
        {
            size: e,
            badgeId: t,
            path: n = `library.badges.c_${e}.badge_${t}`,
            width: r = _a[e].width,
            height: o = _a[e].height,
            className: s,
            ...a
        },
        i,
    ) {
        return u.jsx(va, { ...a, ref: i, path: n, width: r, height: o, className: d(ga.badge, s) });
    });
ya.sizes = ba;
const wa = { x64x28: '64x28', x34x16: '34x16', x26x16: '26x16', x10x10: '10x10' },
    xa = {
        [wa.x10x10]: 'library.premium_igr_ico',
        [wa.x26x16]: 'library.premium_igr_small',
        [wa.x34x16]: 'library.premium_small',
        [wa.x64x28]: 'library.premium_igr_big',
    },
    Ea = {
        [wa.x10x10]: { width: '10rem', height: '10rem' },
        [wa.x26x16]: { width: '26rem', height: '16rem' },
        [wa.x34x16]: { width: '34rem', height: '16rem' },
        [wa.x64x28]: { width: '64rem', height: '28rem' },
    },
    Na = Gn('PlayerInfoIgr', { element: Ar }),
    Sa = l.forwardRef(function (
        { size: e, path: t = xa[e], width: n = Ea[e].width, height: r = Ea[e].height, className: o, ...s },
        a,
    ) {
        return u.jsx(Na, { ...s, ref: a, path: t, width: n, height: r, className: o });
    });
Sa.sizes = wa;
const Ra = { default: 'default', regular: 'regular', medium: 'medium', big: 'big' },
    Ta = { [Ra.default]: 'c_64x24', [Ra.regular]: 'c_68x28', [Ra.medium]: 'c_68x28', [Ra.big]: 'c_100x40' },
    Ca = { [Ra.default]: 'c_24x24', [Ra.regular]: 'c_32x32', [Ra.medium]: 'c_48x48', [Ra.big]: 'c_80x80' },
    ka = {
        [Ra.default]: { width: '24rem', height: '24rem', marginLeft: '-15rem' },
        [Ra.regular]: { width: '32rem', height: '32rem', marginLeft: '-19rem' },
        [Ra.medium]: { width: '48rem', height: '48rem', marginLeft: '-32rem' },
        [Ra.big]: { width: '80rem', height: '80rem', marginLeft: '-25rem' },
    },
    Aa = Gn('StripeBadgeIcon', { element: Ar }),
    Pa = l.forwardRef(function (
        {
            size: e = Ra.default,
            badgeId: t,
            stripeExists: n,
            path: r = `library.badges.${Ca[e]}.badge_${t}`,
            width: o = ka[e].width,
            height: s = ka[e].height,
            className: a,
            ...i
        },
        c,
    ) {
        const l = ka[e];
        return u.jsx(Aa, {
            ...i,
            ref: c,
            path: r,
            width: o,
            height: s,
            style: n ? { marginLeft: l.marginLeft } : void 0,
            className: a,
        });
    }),
    Ma = {
        [Ra.default]: { width: '64rem', height: '24rem' },
        [Ra.regular]: { width: '68rem', height: '24rem' },
        [Ra.medium]: { width: '68rem', height: '28rem' },
        [Ra.big]: { width: '100rem', height: '40rem' },
    },
    Ia = Gn('StripeIcon', { element: Ar }),
    za = l.forwardRef(function (
        {
            size: e = Ra.default,
            badgeId: t,
            stripeExists: n,
            path: r = `library.badges.strips.${Ta[e]}.strip_${t}`,
            width: o = Ma[e].width,
            height: s = Ma[e].height,
            className: a,
            ...i
        },
        c,
    ) {
        return n ? u.jsx(Ia, { ...i, ref: c, path: r, width: o, height: s, className: d(ga.stripeBadge, a) }) : null;
    }),
    ja = Gn('PlayerInfoStripe', ga.stripe),
    Da = l.forwardRef(function ({ size: e = Ra.default, badgeId: t, classNames: n, className: r, ...o }, s) {
        const a = L.resolve('images'),
            i = Ta[e],
            c = a.has(`library.badges.strips.${i}.strip_${t}`);
        return u.jsxs(ja, {
            ...o,
            ref: s,
            className: d(c && ga[`stripe__${e}`], r),
            children: [
                u.jsx(za, { size: e, badgeId: t, stripeExists: c, className: null == n ? void 0 : n.stripe }),
                u.jsx(Pa, { size: e, badgeId: t, stripeExists: c, className: null == n ? void 0 : n.badge }),
            ],
        });
    });
Da.sizes = Ra;
const Oa = Gn('AccountInfo', ga.base),
    Ba = Gn('AccountInfoWrapper', ga.base),
    La = l.forwardRef((e, t) => u.jsx(Oa, { ref: t, ...e }));
((La.Name = function ({ size: e, className: t, children: n }) {
    return u.jsx('div', { className: d(ga.name, e && ga[`name__${e}`], t), children: n });
}),
    (La.ClanTag = function ({ size: e, className: t, children: n, ...r }) {
        return u.jsx('div', { ...r, className: d(ga.clanTag, e && ga[`clanTag__${e}`], t), children: n });
    }),
    (La.Badge = ya),
    (La.IgrIcon = Sa),
    (La.AnonymizerIcon = pa),
    (La.Stripe = Da),
    (La.Wrapper = Ba));
const Fa = {
        base__x120x96: 'VehicleImage_base__x120x96_32ca06f1',
        base__x190x152: 'VehicleImage_base__x190x152_41379c70',
        base__x380x304: 'VehicleImage_base__x380x304_274f87fe',
    },
    $a = { x120x96: 'x120x96', x190x152: 'x190x152', x380x304: 'x380x304' },
    Ha = Gn('VehicleImage', {
        element: Ar,
        className: Fa.base,
        cva: {
            variants: {
                size: {
                    [$a.x120x96]: Fa.base__x120x96,
                    [$a.x190x152]: Fa.base__x190x152,
                    [$a.x380x304]: Fa.base__x380x304,
                },
            },
        },
    });
function Wa({ size: e = $a.x380x304, ...t }) {
    return u.jsx(Ha, { ...t, size: e, path: `vehicle.${e}.tank_empty` });
}
const Ua = l.forwardRef(function ({ size: e = $a.x380x304, name: t, width: n, height: r, className: o, ...s }, a) {
    const i = L.resolve('images'),
        c = `vehicle.${e}.${us(t)}`;
    return i.has(c)
        ? u.jsx(Ha, { ...s, ref: a, size: e, className: o, path: c, width: n, height: r })
        : (console.warn(`Fail to retrieve icon maps/icons/vehicle/${e}/${us(t)}`),
          u.jsx(Wa, { size: e, className: o, width: n, height: r }));
});
((Ua.UnknownVehicleImage = Wa), (Ua.size = $a));
const Ka = 'VehicleLevel_3c938122',
    Va = { arabic: 'arabic', roman: 'roman' };
const Ga = l.forwardRef(function ({ value: e, numberType: t, ...n }, r) {
    const o = (function (e, t) {
            return e || (t ? Va.arabic : Va.roman);
        })(
            t,
            (function () {
                const e = L.resolve('strings');
                return mn.includes(e.readOrEmpty('settings.LANGUAGE_CODE'));
            })(),
        ),
        s =
            o === Va.roman
                ? (function (e) {
                      if (e <= 10) return it[e] ?? String(e);
                      let t = '';
                      for (let n = at.length - 1; n >= 0; n--) {
                          let r = at[n];
                          for (; void 0 !== r && e >= r; ) ((t += st[n]), (e -= r));
                      }
                      return t;
                  })(e)
                : e;
    return u.jsx('div', { ...n, 'data-name': 'VehicleLevel', className: d(Ka, n.className), ref: r, children: s });
});
Ga.numberTypes = Va;
const Ya = { x24x24: 'x24x24', x48x48: 'x48x48', x64x64: 'x64x64', x96x96: 'x96x96' },
    qa = { x24x24: 'x64x64', x48x48: 'x96x96', x64x64: 'x96x96', x96x96: 'x96x96' },
    Xa = {
        [cs.lightTank]: 'light_tank',
        [cs.mediumTank]: 'medium_tank',
        [cs.heavyTank]: 'heavy_tank',
        [cs.SPG]: 'spg',
        [cs['AT-SPG']]: 'tank_destroyer',
    },
    Qa = {
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
    Za = l.forwardRef(function ({ type: e, size: t = Ya.x48x48, premium: n = !1, fit: r = 'contain', ...o }, s) {
        const a = Ot(Ya[t], qa[t]);
        return u.jsx(Ar, {
            ...o,
            ref: s,
            fit: r,
            className: d(Qa.base, n ? Qa[`base__premium__${t}`] : Qa[`base__${t}`], o.className),
            path: `ui_kit.vehicle_type.${a}.${n ? 'premium_' : ''}${ne(Xa[e])}_${a}`,
        });
    });
function Ja(e) {
    return 'string' == typeof e && e in yt;
}
((Za.types = cs), (Za.sizes = Ya));
const ei = 'Tooltip_decorator_b3486d4e',
    ti = Gn('Base', 'Tooltip_6d997cee'),
    ni = Gn('Decorator', ei),
    ri = l.forwardRef(function ({ children: e, ...t }, n) {
        const r = l.useRef(null);
        return (
            Jt(r, (e) => {
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
            u.jsx(ti, {
                ...t,
                ref: function (e) {
                    ((r.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                children: e,
            })
        );
    });
ri.Decorator = ni;
export {
    xs as $,
    Vo as A,
    Ir as B,
    os as C,
    W as D,
    Dt as E,
    Rr as F,
    Jt as G,
    ss as H,
    Ar as I,
    Ln as J,
    Ze as K,
    qe as L,
    Un as M,
    Ke as N,
    ds as O,
    fs as P,
    mt as Q,
    _s as R,
    Jn as S,
    as as T,
    Go as U,
    Vn as V,
    is as W,
    un as X,
    Qt as Y,
    Se as Z,
    Ut as _,
    Fn as a,
    Mt as a0,
    wt as a1,
    Pr as a2,
    Ss as a3,
    Cs as a4,
    Rs as a5,
    tt as a6,
    qo as a7,
    Ft as a8,
    ot as a9,
    Le as aA,
    cs as aB,
    Ja as aC,
    Nn as aD,
    Ee as aE,
    Jr as aF,
    Dr as aG,
    gn as aH,
    nr as aI,
    er as aJ,
    Te as aK,
    Re as aL,
    ri as aM,
    le as aa,
    ue as ab,
    nn as ac,
    Ws as ad,
    Fe as ae,
    xn as af,
    ca as ag,
    Ks as ah,
    Ys as ai,
    tn as aj,
    qt as ak,
    to as al,
    qs as am,
    Us as an,
    yt as ao,
    La as ap,
    ua as aq,
    cn as ar,
    ct as as,
    Ua as at,
    Ga as au,
    Za as av,
    Ne as aw,
    fn as ax,
    Zt as ay,
    Je as az,
    ln as b,
    On as c,
    Gn as d,
    q as e,
    J as f,
    Wt as g,
    rt as h,
    Dn as i,
    vn as j,
    Bt as k,
    Mr as l,
    rn as m,
    Br as n,
    Yo as o,
    Fo as p,
    Co as q,
    L as r,
    Ye as s,
    Ge as t,
    Hn as u,
    Qe as v,
    Xe as w,
    et as x,
    Ie as y,
    Qo as z,
};
