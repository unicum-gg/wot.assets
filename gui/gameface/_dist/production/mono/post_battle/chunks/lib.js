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
    e as l,
    o as u,
    f as d,
    u as f,
    g as m,
    h,
    R as p,
    i as g,
    k as b,
    l as _,
    m as v,
    n as y,
    p as w,
    q as x,
    s as E,
    t as N,
    v as T,
    w as S,
} from './vendor.js';
const C = r();
function k(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function A(e, t) {
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
class P {
    constructor(e = window.R.images, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.images') ? e : k(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && A(`Resource not found: ${r}`, n), t()) : o;
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
var I = ((e) => (
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
))(I || {});
const M = { integral: 0, gold: 1 },
    z = { fractional: 0, woZeroDigits: 1 },
    D = Object.keys(M),
    j = Object.keys(z);
const O = { full: I.FullTime, short: I.ShortTime };
const B = {
    isNumberFormat: function (e) {
        return e in M;
    },
    formatNumber: function (e, t) {
        return window.systemLocale.getNumberFormat(t, M[e]);
    },
    numberFormats: D,
    isRealFormat: function (e) {
        return e in z;
    },
    formatReal: function (e, t) {
        return window.systemLocale.getRealFormat(t, z[e]);
    },
    realFormats: j,
    formatDateTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    dateTimeFormats: I,
    formatTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    timeFormats: Object.keys(O),
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
function L(e, t, n) {
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
class $ {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : k(this.prefix, e),
            o = L(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== n && A(`Resource not found: ${r}`, n), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : k(this.prefix, e),
            n = L(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const o = e.startsWith('R.strings') ? e : k(this.prefix, e),
            s = L(o, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== r && A(`Resource not found: ${o}`, r), n()) : s;
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
        const r = e.startsWith('R.videos') ? e : k(this.prefix, e),
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
        return void 0 === o ? ('silent' !== n && A(`Resource not found: ${e}`, n), t()) : o;
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
C.register({
    strings: i(() => new $()).singleton(),
    images: i(() => new P(window.R.images.gui.maps.icons)).singleton(),
    atlases: i(() => new P(window.R.atlases)).singleton(),
    videos: i(() => new F(window.R.videos)).singleton(),
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
                    : A(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: o(R.strings.settings.LANGUAGE_CODE()),
    intl: o(B),
});
const H = {
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
    reverseEaseInOutCirc: (e) => 1 - H.easeInOutCirc(1 - e),
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
                const s = W(o, t, n) - e;
                if (Math.abs(s) < r) return o;
                const i = U(o, t, n);
                if (Math.abs(i) < r) break;
                o -= s / i;
            }
            return o;
        })(o, e, n);
        return 3 * t * (1 - s) ** 2 * s + 3 * r * (1 - s) * s ** 2 + s ** 3;
    },
};
function W(e, t, n) {
    return 3 * t * (1 - e) ** 2 * e + 3 * n * (1 - e) * e ** 2 + e ** 3;
}
function U(e, t, n) {
    return 9 * t * (1 - e) ** 2 + 6 * (n - t) * (1 - e) * e + 3 * (1 - n) * e ** 2;
}
function K(e) {
    return e.replaceAll('-', '_');
}
function V(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function G(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const Y = V('clientResized'),
    q = V('self.onScaleUpdated'),
    X = V('clientMinimized'),
    Q = { down: V('mousedown'), up: V('mouseup'), move: V('mousemove') };
const Z = (function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && G(!1);
    }
    function n() {
        e.enabled && G(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  G(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : G(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const o = `mouse${t}`,
                            s = Q[t]((e) => n([e, 'outside']));
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
        ),
        disable() {
            ((e.enabled = !1), r());
        },
        enable() {
            ((e.enabled = !0), r());
        },
        enableOutside() {
            e.enabled && G(!0);
        },
        disableOutside() {
            e.enabled && G(!1);
        },
    };
})();
function J(e = 'px') {
    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
}
function ee(e) {
    engine.call('PlaySound', e);
}
const te = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    ne = { ...Object.keys(te).reduce((e, t) => ((e[t] = () => ee(te[t])), e), {}), sound: ee },
    re = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    oe = {
        onTextureFrozen: V('self.onTextureFrozen'),
        onTextureReady: V('self.onTextureReady'),
        onDomBuilt: V('self.onDomBuilt'),
        onLoaded: V('self.onLoaded'),
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
        onDisplayChanged: V('self.onShowingStatusChanged'),
        onFocusUpdated: V('self.onFocusChanged'),
        children: {
            onAdded: V('children.onAdded'),
            onLoaded: V('children.onLoaded'),
            onRemoved: V('children.onRemoved'),
            onAttached: V('children.onAttached'),
            onTextureReady: V('children.onTextureReady'),
            onRequestPosition: V('children.requestPosition'),
        },
    },
    se = 1,
    ie = 4;
function ae(e) {
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
const ce = (e) => {
        const t = [];
        for (const [n, r] of Object.entries(e)) {
            const e = ae(r);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
        }
        return t;
    },
    le = (e, t) => {
        const n = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...o } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: n, type: e, ...o, arguments: ce(r) })
                : viewEnv.handleViewEvent({ __Type: n, type: e, ...o });
        }
        return viewEnv.handleViewEvent({ __Type: n, type: e });
    },
    ue = new Map(),
    de = new Map(),
    fe = {
        tooltip: {
            open(e, t, n = 0, r) {
                (le(se, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    ue.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (le(se, { contentID: t, decoratorID: n, targetID: e, on: !1 }), ue.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(ue.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
        contextMenu: {
            open(e, t, n = 0, r) {
                (le(ie, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    de.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (le(ie, { contentID: t, decoratorID: n, targetID: e, on: !1, isMouseEvent: !1 }),
                    de.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(de.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
    };
function me(e) {
    return viewEnv.pxToRem(e);
}
function he(e) {
    return viewEnv.remToPx(e);
}
function pe() {
    viewEnv.setFullscreenModeSupported(!0);
}
function ge(e) {
    function t() {
        const { top: t, right: n, bottom: r, left: o } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${t}rem`),
            e.style.setProperty('--external-padding-right', `${n}rem`),
            e.style.setProperty('--external-padding-bottom', `${r}rem`),
            e.style.setProperty('--external-padding-left', `${o}rem`));
    }
    (t(), engine.on('self.onPaddingsUpdated', () => t()));
}
Object.keys(re).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === re[t]), e), {});
class be {
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
const _e = (e) => (0 === e ? window : window.subViews.get(e));
function ve(
    { initializer: e = !0, rootId: t = 0, getRoot: n = _e, context: r = 'model' } = {},
    { name: o = 'DataLayer' } = {},
) {
    const s = new Map(),
        i = { subscribersNotified: new be() },
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
            const i = (function (e, t, n) {
                return viewEnv.addDataChangedCallback(e, t, n);
            })('string' == typeof o ? `${r}.${o}` : r, t, !0);
            return (s.set(i, n), e && n(l(o), []), i);
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
            a.then((e) => e());
        },
        unsubscribe: u,
        events: i,
    };
}
function ye(e, t) {
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
const we = (e, t, n) => (n < e ? e : n > t ? t : n);
function xe() {}
function Ee(e) {
    return e;
}
function Ne() {
    return !1;
}
function Te(e) {
    return 'function' == typeof e;
}
class Re {
    constructor() {
        (n(this, '_disposes', new Set()),
            n(this, 'dispose', () => {
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
function Se(e, t, n, r) {
    return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
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
            (u.call(d.prototype),
                u.call(h.prototype),
                (self.Headers = i),
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
                            function i() {
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
                          var e = a(this);
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
        function m(e) {
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
        function h(e, t) {
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
const Ce = { ESCAPE: 27, SPACE: 32, ARROW_UP: 38, ARROW_DOWN: 40 };
function ke(e, t) {
    return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
}
const Ae = {
    NONE: 'NONE',
    ...((Pe = [
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
    Pe.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...ke(
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
    ...ke(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...ke(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...ke(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...ke(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...ke(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...ke(['Up', 'Down'], 'Page'),
    ...ke(['Left', 'Right'], 'Bracket'),
};
var Pe;
function Ie(e) {
    return 'number' == typeof e
        ? (function (e) {
              return window.systemInput.getKeyName(e);
          })(e)
        : e;
}
function Me(e, t) {
    var n;
    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
}
const ze = Me;
function De(e, t) {
    return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r));
}
function je(e, t) {
    if (Array.isArray(e)) return e.some(t);
    for (let n = 0; n < e.length; n++) {
        if (t(ze(e, n), n, e)) return !0;
    }
    return !1;
}
function Oe(e, t) {
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
function Be(e, t, n) {
    const r = [];
    for (let o = 0; o < e.length; o++) {
        const s = ze(e, o);
        t(s, o, e) && r.push(n(s, o, e));
    }
    return r;
}
function Le(e, t, n) {
    if (Array.isArray(e)) return e.reduce(t, n);
    let r = n;
    for (let o = 0; o < e.length; o++) {
        r = t(r, ze(e, o), o, e);
    }
    return r;
}
function $e(e, t) {
    return De(e, Ee).sort(t);
}
const Fe = (e) => {
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
function He(e, t) {
    e || console.error(t || 'Assertion failed');
}
function We(e, t, n) {
    return 'function' == typeof t ? Ue(0, e, t) : (He(void 0 !== n, 'fn must be defined'), Ue(e, t, n));
}
function Ue(e, t, n) {
    const r = new Array(t - e);
    for (let o = e; o < t; o++) r[o] = n(o);
    return r;
}
function Ke(e, t) {
    return new Set([...e, t]);
}
function Ve(e, t) {
    const n = new Set(e);
    return (n.delete(t), n);
}
He.log = function (e, t) {
    e || console.error(t || 'Assertion failed');
};
const Ge = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    Ye = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
    qe = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
['ko', 'no'].includes(C.resolve('langCode'));
const Xe = function (e) {
    return 'number' == typeof e && !Number.isNaN(e) && Number.isFinite(e);
};
class Qe {
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
function Ze(e, t, n = -1) {
    return Je(e, t, n);
}
function Je(e, t, n, r, o) {
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
    const a = et(e),
        c = et(t),
        l = Array.isArray(a) && Array.isArray(c);
    if (!l) {
        if ('object' != typeof a || 'object' != typeof c) return !1;
        const e = a.constructor,
            t = c.constructor;
        if (
            e !== t &&
            !(Te(e) && e instanceof e && Te(t) && t instanceof t) &&
            'constructor' in a &&
            'constructor' in c
        )
            return !1;
    }
    if (0 === n) return !1;
    (n < 0 && (n = -1), (o = o || []));
    let u = (r = r || []).length;
    for (; u--; ) if (r[u] === a) return o[u] === c;
    if ((r.push(e), o.push(t), l)) {
        if (((u = a.length), u !== c.length)) return !1;
        for (; u--; ) if (!Je(a[u], c[u], n - 1, r, o)) return !1;
    } else {
        const e = Object.keys(a);
        let t;
        if (((u = e.length), Object.keys(c).length !== u)) return !1;
        for (; u--; ) {
            if (((t = e[u]), void 0 === t))
                return (console.error('Error: met undefined in object during deepEqual comparison'), !1);
            if (!Object.prototype.hasOwnProperty.call(c, t) || !Je(a[t], c[t], n - 1, r, o)) return !1;
        }
    }
    return (r.pop(), o.pop(), !0);
}
function et(e) {
    return e instanceof Map || e instanceof Set ? Array.from(e.entries()) : e;
}
const tt = {
        identity: function (e, t) {
            return e === t;
        },
        structural: function (e, t) {
            return Ze(e, t);
        },
        sameValue: function (e, t) {
            return Object.is(e, t);
        },
        shallow: function (e, t) {
            return Ze(e, t, 1);
        },
    },
    nt = new Set(['zh_cn', 'zh_sg', 'zh_tw']),
    rt = 'ja';
const ot = a.createContext(void 0);
const st = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large', extraLarge: 'extraLarge' },
    it = {
        extraSmall: { weight: 0, name: st.extraSmall, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: st.small, className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: st.medium, className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: st.large, className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: st.extraLarge, className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var at,
    ct,
    lt,
    ut =
        (((at = ut || {})[(at.Small = it.small.width)] = 'Small'),
        (at[(at.Medium = it.medium.width)] = 'Medium'),
        (at[(at.Large = it.large.width)] = 'Large'),
        (at[(at.ExtraLarge = it.extraLarge.width)] = 'ExtraLarge'),
        at),
    dt =
        (((ct = dt || {})[(ct.Small = it.small.width)] = 'Small'),
        (ct[(ct.Medium = it.medium.width)] = 'Medium'),
        (ct[(ct.Large = it.large.width)] = 'Large'),
        (ct[(ct.ExtraLarge = it.extraLarge.width)] = 'ExtraLarge'),
        ct),
    ft =
        (((lt = ft || {})[(lt.Small = it.small.height)] = 'Small'),
        (lt[(lt.Medium = it.medium.height)] = 'Medium'),
        (lt[(lt.Large = it.large.height)] = 'Large'),
        (lt[(lt.ExtraLarge = it.extraLarge.height)] = 'ExtraLarge'),
        lt);
const mt = Object.values(it);
function ht(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        o = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...o])).join(' ');
}
const pt = () => {
    const e = J('rem');
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
            i = s.names[s.names.length - 1] ?? st.extraSmall,
            a = it[i],
            c = r.width.names,
            l = r.height.names,
            u = c[c.length - 1] ?? st.extraSmall,
            d = l[l.length - 1] ?? st.extraSmall,
            f = { width: it[u].width, height: it[d].height };
        return {
            mediaClass: ht(o, r),
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
    })(e.width, e.height, he(1));
};
function gt({ children: e }) {
    const [t, n] = a.useState(pt);
    return (
        a.useLayoutEffect(() => {
            function e() {
                n(pt);
            }
            e();
            const t = Y(e),
                r = q(e);
            return () => {
                (t(), r());
            };
        }, []),
        c.jsx(ot.Provider, { value: t, children: e })
    );
}
function bt() {
    return (function () {
        const e = a.useContext(ot);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function _t({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: o } = bt();
    return c.jsx('div', { className: l(t, 'media-wrapper', r, o && 'media-upscale'), ...n, children: e });
}
function vt({ children: e, ...t }) {
    return c.jsx(gt, { children: c.jsx(_t, { ...t, children: e }) });
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
    const t = a.useRef();
    return (
        a.useEffect(() => {
            t.current = e;
        }, [e]),
        t.current
    );
};
const Et = [];
function Nt(e) {
    const t = a.useRef(e);
    return (
        a.useLayoutEffect(() => {
            t.current = e;
        }),
        a.useCallback((...e) => (0, t.current)(...e), Et)
    );
}
function Tt(e) {
    a.useEffect(e, []);
}
function Rt(e) {
    a.useEffect(() => e, []);
}
const St = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new Qe();
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
                if (e === Ae.NONE) return Ne;
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
    Ct = a.createContext(void 0);
function kt(e, t, n, r = !1) {
    const o = Ie(e),
        s = Nt((e) => {
            viewEnv.isEventHandled() || (n(e), viewEnv.setEventHandled(), r && e.stopPropagation());
        }),
        i = (function () {
            const e = a.useContext(Ct);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        c = a.useMemo(() => i[t].register(o, s), [i, t, o, s]);
    a.useEffect(() => c, [c]);
}
function At(e, t, n = !1) {
    return kt(Ie(e), 'keydown', t, n);
}
function Pt(e) {
    const t = a.useMemo(St, []),
        n = a.useMemo(St, []);
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
    return c.jsx(Ct.Provider, { value: r, children: e.children });
}
const It = (e, t) => {
    a.useEffect(() => {
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
function Mt(e, t) {
    a.useEffect(() => {
        let t = () => {};
        const n = () => {
            (t(), (t = Fe(e)));
        };
        return (
            window.addEventListener('resize', n),
            () => {
                (t(), window.removeEventListener('resize', n));
            }
        );
    }, t);
}
const zt = (e, t, n = !0) => {
        const r = Nt((e) => {
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
    },
    Dt = 0;
function jt() {
    const e = a.useRef(Dt);
    return (
        Rt(() => {
            window.cancelAnimationFrame(e.current);
        }),
        a.useMemo(
            () => ({
                run: (t) => {
                    (window.cancelAnimationFrame(e.current),
                        (e.current = window.requestAnimationFrame(() => {
                            e.current = window.requestAnimationFrame(() => {
                                ((e.current = Dt), t());
                            });
                        })));
                },
                clear: () => {
                    (window.cancelAnimationFrame(e.current), (e.current = Dt));
                },
                get isRunning() {
                    return e.current !== Dt;
                },
            }),
            [],
        )
    );
}
function Ot(e, t, n) {
    const r = a.useMemo(
        () =>
            (function (e, t, n, r) {
                let o,
                    s = !1,
                    i = 0;
                function a() {
                    o && clearTimeout(o);
                }
                function c(...c) {
                    const l = this,
                        u = Date.now() - i;
                    function d() {
                        ((i = Date.now()), n.apply(l, c));
                    }
                    s ||
                        (r && !o && d(),
                        a(),
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
                        (a(), (s = !0));
                    }),
                    c
                );
            })(n, e),
        t,
    );
    return (a.useEffect(() => r.cancel, [r]), r);
}
function Bt() {
    const e = a.useRef(0);
    return (
        Rt(() => {
            window.clearTimeout(e.current);
        }),
        a.useMemo(
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
const Lt = new WeakMap(),
    $t = 0,
    Ft = { await: 'await', idle: 'idle', display: 'display' };
function Ht({ resId: e = $t, contentId: t, decoratorId: n, disabled: r, args: o, showDelay: s = 400 }) {
    const i = a.useRef({ status: Ft.idle, resId: e, timeoutId: 0 }),
        [c, l] = a.useMemo(() => {
            let a = null;
            function c() {
                r ||
                    ((i.current.status = Ft.await),
                    window.clearTimeout(i.current.timeoutId),
                    (i.current.timeoutId = window.setTimeout(l, s)));
            }
            function l() {
                ((i.current.status = Ft.display), fe.tooltip.open(e, t, n, o), a && Lt.set(a, d));
            }
            function u() {
                if (
                    (window.clearTimeout(i.current.timeoutId),
                    i.current.status === Ft.display && fe.tooltip.hide(e, t, n),
                    (i.current.status = Ft.idle),
                    a)
                ) {
                    Lt.delete(a);
                    let e = a.parentElement;
                    for (; e && !Lt.has(e); ) e = e.parentElement;
                    if (e) {
                        Lt.get(e).show();
                    }
                    a = null;
                }
            }
            const d = {
                hide: u,
                show: l,
                rerun: function () {
                    i.current.status !== Ft.idle && (r ? d.hide() : c());
                },
            };
            return [
                d,
                {
                    onMouseEnter: (e) => {
                        ((a = null == e ? void 0 : e.currentTarget), c());
                    },
                    onMouseLeave: r ? xe : u,
                    onClick: r ? xe : u,
                },
            ];
        }, [o, t, n, r, e, s]);
    return (
        a.useEffect(() => {
            c.rerun();
        }, [c]),
        Rt(Nt(c.hide)),
        l
    );
}
function Wt({ alert: e, body: t, header: n, note: r, hasHtmlContent: o, disabled: s }) {
    const i = C.resolve('views');
    return Ht({
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
function Ut(e) {
    return Ht({
        ...e,
        contentId: C.resolve('views').read((e) =>
            e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
        ),
    });
}
const Kt = [];
function Vt(e, t = Kt, n) {
    return Ht({
        ...n,
        disabled: 'string' != typeof e || (null == n ? void 0 : n.disabled),
        contentId: C.resolve('aliases').read((e) => e.common.tooltip.Backport('resId')),
        args: a.useMemo(
            () => ({ tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == n ? void 0 : n.args) }),
            [t, e, null == n ? void 0 : n.args],
        ),
    });
}
const Gt = ['ko', 'no'];
const Yt = {
    click: qt('play'),
    'hot-key': qt('play'),
    'mouse-enter': qt('highlight'),
    increaseAmount: qt('cons_ammo_single_plus'),
    decreaseAmount: qt('cons_ammo_single_minus'),
    increaseAmountRoll: qt('cons_ammo_roll_plus'),
    decreaseAmountRoll: qt('cons_ammo_roll_minus'),
    close: qt('cancelcloseno'),
    'show-context-menu': qt('tabb'),
};
function qt(e) {
    return () => {
        ne.sound(e);
    };
}
function Xt(e, t) {
    return Object.entries(e).reduce(
        (e, [t, n]) => (
            (e[t] = (e) => {
                var r;
                e && e.target in n ? ne.sound(n[e.target]) : null == (r = Yt[t]) || r.call(Yt, e);
            }),
            e
        ),
        {},
    );
}
const Qt = a.createContext(null);
function Zt({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const o = a.useMemo(() => ({ ...Yt, ...t }), [t]),
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
    return c.jsx(Qt.Provider, { value: s, children: r });
}
function Jt() {
    const e = a.useContext(Qt);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const en = 2;
function tn({ resId: e = 0, contentId: t, decoratorId: n, args: r, disabled: o, soundTarget: s }) {
    const i = Jt(),
        [{ hide: c }, l] = a.useMemo(() => {
            function a() {
                o || fe.contextMenu.open(e, t, n, r);
            }
            return [
                {
                    hide: function () {
                        fe.contextMenu.hide(e, t, n);
                    },
                    show: a,
                },
                {
                    onMouseDown: (e) => {
                        (function (e) {
                            return e.button === en;
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
    return (a.useEffect(() => c, [c]), l);
}
function nn(e) {
    return tn({ ...e, contentId: C.resolve('views').read((e) => e.common.BackportContextMenu('resId')) });
}
const rn = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    on = new Set(['number', 'string', 'boolean', 'bigint']),
    sn = new Set(['Dict']);
function an(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    var o, s;
    const i = e,
        a = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (rn.has(a)) return i;
    if (null === i) return i;
    const c = { depth: n + 1, maxDepth: r };
    if (Array.isArray(i)) return i.map((e) => an(e, c));
    if ('object' === a) {
        const r = (null == (o = i.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => an(e, c));
        if ('CoherentArrayProxy' === r) return e.map((e) => an(e.value, c));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in i) {
                    const n = i[t];
                    on.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in i) {
                    const n = i[t],
                        r = (null == (s = null == i ? void 0 : i.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                    sn.has(r) || (e[t] = an(n, c));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(i)) a[e] = an(i[e], c);
        return a;
    }
    return (console.error('Incorrect value to clone model', i), i);
}
const cn = { deep: !1, equals: Ne },
    ln = { cloneItem: !0 },
    un = { shallow: !1 };
class dn {
    constructor(e, t = ln) {
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
            r[t] = u.box(this.takeItem(e, t), cn);
        }
        ((this._keys = u.set(new Set(o))), (this._data = u.box(r, cn)));
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
                : null !== s && ((n[o] = u.box(s, cn)), this._keys.add(o), this.set(n));
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
        return this.options.cloneItem ? an(n, un) : n;
    }
    untrackedData() {
        return f(() => this._data.get());
    }
}
const fn = a.createContext({ mode: 'real' }),
    mn = { equals: Ne, deep: !1 };
function hn(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        d(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const o = (o, s, i = mn) => {
            const a = u.box(o(n(s)), i);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(o(e))), s), a);
        },
        s = (o, s) => {
            const i = new dn(n(o), s);
            return ('real' === t && e.subscribe((e, t) => r.push(() => i.update(e, t)), o), i);
        },
        i = (o, s) => {
            const i = u.box(n(o) ?? s, mn);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(e)), o), i);
        };
    return {
        dict: s,
        dictRef: (e, t) => s(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => o(an, e),
        array: i,
        object: i,
        transform: o,
        primitives: (o, s) => {
            const i = n(s);
            if (Array.isArray(o)) {
                const n = o.reduce((e, t) => ((e[t] = u.box(i[t], {})), e), {});
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
                    c = a.reduce((e, [t, n]) => ((e[n] = u.box(i[t], {})), e), {});
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
const pn =
        (e = 'DataLayerProvider') =>
        (t, n, r) => {
            const o = a.createContext(null);
            function s(s) {
                var i;
                const { mode: l, options: u, children: d, mocks: f } = s,
                    m = a.useContext(fn),
                    h = l ?? m.mode,
                    p = f ?? m.mocks,
                    g = a.useRef([]),
                    b = null == (i = null == r ? void 0 : r.useRequires) ? void 0 : i.call(r),
                    _ = Nt((o, i, a) => {
                        var c;
                        const l =
                                'real' !== o && a
                                    ? (function (e, t) {
                                          return {
                                              subscribe: () => 0,
                                              readSafeByPath: e,
                                              readByPath: e,
                                              createCallback: (n, r) => {
                                                  const o = e(ye(r, t));
                                                  return (...e) => {
                                                      o(n(...e));
                                                  };
                                              },
                                              createCallbackNoArgs: (n) => {
                                                  const r = e(ye(n, t));
                                                  return () => {
                                                      r();
                                                  };
                                              },
                                              dispose: () => {},
                                              unsubscribe: () => {},
                                              events: { subscribersNotified: new be() },
                                          };
                                      })(a.getter, i)
                                    : ve(i, { name: e }),
                            u = (e) => ('mocks' === o ? (null == a ? void 0 : a.getter(e, i)) : l.readByPath(e)),
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
                                observableModel: hn(l, o, u),
                                cleanup: d,
                            }),
                            h = { ...f, mode: o, model: m, externalModel: l, cleanup: d, requires: b },
                            p = 'mocks' === o && (null == a ? void 0 : a.controls) ? a.controls(h) : {};
                        return {
                            model: m,
                            controls: { ...(null == n ? void 0 : n(h)), ...p },
                            externalModel: l,
                            mode: o,
                        };
                    }),
                    v = a.useRef(!1),
                    [y, w] = a.useState(h);
                a.useEffect(() => {
                    w(h);
                }, [h]);
                const [x, E] = a.useState(() => _(y, u, p));
                return (
                    a.useEffect(() => {
                        v.current ? E(_(y, u, p)) : (v.current = !0);
                    }, [
                        _,
                        p,
                        y,
                        null == u ? void 0 : u.context,
                        null == u ? void 0 : u.initializer,
                        null == u ? void 0 : u.getRoot,
                        null == u ? void 0 : u.rootId,
                    ]),
                    a.useEffect(
                        () => () => {
                            (x.externalModel.dispose(), g.current.forEach((e) => e()));
                        },
                        [x],
                    ),
                    c.jsx(o.Provider, { value: x, children: d })
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
    gn = {
        model: (e, t) => m(e, { equals: Ne, ...t }),
        primitive: m,
        shallow: (e, t) => m(e, { equals: h.shallow, ...t }),
        structural: (e, t) => m(e, { equals: h.structural, ...t }),
    },
    bn = (e) => (t) => {
        e.forEach((e) =>
            ((e, t) => {
                e && ('function' == typeof e ? e(t) : (e.current = t));
            })(e, t),
        );
    };
a.forwardRef(function (e, t) {
    const n = a.useRef(null);
    return (
        a.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return oe.onHitTest((t) => {
                    const n = e.getBoundingClientRect();
                    return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                });
        }, []),
        c.jsx('div', { ...e, ref: bn([t, n]) })
    );
});
class _n {
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
            children: this.items.reduceRight((e, [t, n], r) => a.createElement(t, { ...n, key: r }, e), e),
        });
    }
}
async function vn(
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
    const i = n ? vt : p.Fragment,
        a = (null == (s = null == window ? void 0 : window.engine) ? void 0 : s.whenReady) ?? Promise.resolve();
    (o && engine.enableImmediateLayout(!0),
        await a,
        document.documentElement.setAttribute('lang', C.resolve('langCode')),
        g.createRoot(t).render(c.jsx(i, { children: c.jsx(Pt, { children: e }) })),
        r && (ge(t), pe()));
}
const yn = a.createContext(void 0);
function wn() {
    const e = a.useContext(yn);
    if (!e) throw new Error('useRouter must be used within a RouterProvider');
    return e;
}
var xn = {};
function En({ children: e, prefix: t = '', context: n, getRoot: r, initializer: o, rootId: s }) {
    const i = a.useRef([]),
        l = a.useRef(null),
        u = a.useMemo(() => ve({ context: n, getRoot: r, initializer: o, rootId: s }), [n, r, o, s]),
        d = a.useCallback(
            (e) => {
                const t = u.subscribe(e);
                return () => u.unsubscribe(t);
            },
            [u],
        ),
        f = a.useCallback(() => {
            const e = u.readByPath(),
                n = { location: ((r = t + e.route), r.endsWith('/') ? r.slice(0, -1) : r), params: e.params };
            var r;
            return l.current && tt.shallow(l.current, n) ? l.current : ((l.current = n), n);
        }, [u, t]),
        m = a.useSyncExternalStore(d, f);
    a.useEffect(() => u.dispose, [u]);
    const h = a.useMemo(() => {
        const e = [...i.current, m];
        return ((i.current = e), { ...m, history: e });
    }, [m]);
    xn.PUBLIC_ROUTER_DEBUG && console.log('🗺️ Route updated:', h);
    const p = a.useMemo(() => {
            const e = u.createCallback(
                    (e, t) => (
                        xn.PUBLIC_ROUTER_DEBUG && console.log('➡️ Going to', e, t),
                        { route: e, ...(Boolean(t) && { params: JSON.stringify(t) }) }
                    ),
                    'navigateTo',
                ),
                t = u.createCallbackNoArgs('navigateBack');
            return {
                push: e,
                replace: e,
                goBack: xn.PUBLIC_ROUTER_DEBUG
                    ? () => {
                          (console.log('🗺️ Route back'), t());
                      }
                    : t,
            };
        }, [u]),
        g = a.useMemo(() => ({ ...h, ...p }), [p, h]);
    return c.jsx(yn.Provider, { value: g, children: e });
}
const Nn = a.forwardRef(function (
        {
            src: e,
            className: t,
            autoplay: n = !1,
            style: r,
            loop: o = !1,
            isPrebufferKeyframes: s,
            keyframesNameConfig: i,
            onClick: l,
            ...u
        },
        d,
    ) {
        const f = d,
            m = a.useRef(null);
        return (
            Tt(() => {
                let e = !1;
                return oe.onDisplayChanged((t, n) => {
                    const r = m.current;
                    r && (n === re.hidden ? ((e = r.paused), r.pause()) : e || n !== re.shown || r.play());
                });
            }),
            Tt(() => {
                let e = !1;
                return X((t) => {
                    const n = m.current;
                    n && (t ? ((e = n.paused), n.pause()) : e || n.play());
                });
            }),
            a.useEffect(
                () =>
                    Fe(() => {
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
            a.useEffect(() => {
                if (f && m.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: xe },
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
                                                const n = Object.keys(i ?? {})[r];
                                                return e({ time: t, name: `${i ? n : `Point_${r}`}` });
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
                        a = () => {
                            var e;
                            return null == (e = m.current) ? void 0 : e.duration;
                        },
                        c = (e) => {
                            m.current && (m.current.currentTime = we(0, m.current.duration, e));
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
                            getDuration: a,
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
            }, [i, f, s]),
            a.useEffect(() => {
                m.current && n && m.current.play();
            }, [n, o]),
            Rt(() => {
                var e;
                null == (e = m.current) || e.pause();
            }),
            c.jsx('video', { src: e, className: t, style: r, loop: o, ref: m, onClick: l, ...u })
        );
    }),
    Tn = a.memo(Nn);
function Rn(e, t, n) {
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
            r = b(n.className, n.cva),
            o = n.element,
            i = a.forwardRef(function (e, t) {
                return a.createElement(o, { ...('function' == typeof o ? e : Sn(s, e)), ref: t, className: r(e) });
            });
        return ((i.displayName = e), n.cva && (i.cva = n.cva), i);
    }
    const i = b(t, n),
        l = a.forwardRef(function (t, n) {
            return c.jsx('div', { 'data-name': e, ...Sn(s, t), ref: n, className: i(t) });
        });
    return ((l.displayName = e), n && (l.cva = n), l);
}
function Sn(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
function Cn(e) {
    return c.jsx(c.Fragment, { children: e.children });
}
function kn(e) {
    return c.jsx(Cn, {
        children: c.jsx(Zt, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
const An = 1,
    Pn = 2,
    In = 3;
const Mn = {
        COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
        base: 'FormatText_db904f12',
        base__fullSize: 'FormatText_base__fullSize_a514958e',
        nowrap: 'FormatText_nowrap_ff69eca3',
    },
    zn = new Set((null == (e = Mn.COLORS) ? void 0 : e.split(', ')) ?? []);
let Dn = 0;
function jn() {
    return ++Dn;
}
const On =
    /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
function Bn(e) {
    const t = C.resolve('langCode');
    return (function (e, t, n) {
        return nt.has(t) || t === rt
            ? e.map(n)
            : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
    })(
        (function (e, t) {
            return nt.has(t)
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
                : t === rt
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
function Ln(e) {
    return Array.isArray(e)
        ? (function (e) {
              const t = [];
              for (let n = 0; n < e.length; n++) {
                  const r = e[n],
                      o = e[n + 1];
                  if ('string' != typeof o || !On.test(o)) {
                      t.push(Ln(r));
                      continue;
                  }
                  const s = Bn(o.slice(1));
                  (t.push(
                      c.jsxs(
                          a.Fragment,
                          { children: [c.jsxs('span', { className: Mn.nowrap, children: [Ln(r), o[0]] }), s] },
                          jn(),
                      ),
                  ),
                      (n += 1));
              }
              return t;
          })(e)
        : 'string' == typeof e
          ? c.jsx(a.Fragment, { children: Bn(e) }, jn())
          : e;
}
const $n = {
    class: function (e, ...t) {
        return c.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            jn(),
        );
    },
    colorLegacy: function (e, t) {
        const n = jn();
        return zn.has(String(t))
            ? c.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : c.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: Ln,
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
            jn(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function Fn(e, t, n, r) {
    const o = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...o] = n.slice(1, -1).split(' ');
                return t ? Fn(e, t, o, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        s = r[t];
    return s ? s(e, ...o) : (console.error(`Function ${t} is not registered`), e);
}
function Hn(e, t, n) {
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
        return r ? Fn(e, r, o, n) : e;
    }, t);
}
function Wn(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function Un(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !Wn(e[r]); ) r++;
            const o = e.slice(n + 1, r),
                s = t[o];
            if (s) return Un(e.replace(`$${o}`, String(s)), t);
        }
    }
    return e;
}
function Kn(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = Un(e[r], t);
    return n;
}
const Vn = ['number', 'string', 'undefined'];
function Gn(e, t, n = {}, r = !0) {
    r && (Dn = 0);
    const o = [];
    function s(e) {
        if (Vn.includes(typeof e)) {
            const t = o.at(-1);
            if ('string' == typeof t) return void (o[o.length - 1] = t + e);
        }
        o.push(e);
    }
    for (const i of e)
        if (i.type === An) s(i.value);
        else if (i.type === In)
            null === n[i.name] || Vn.includes(typeof n[i.name])
                ? s(n[i.name] ?? `{{${i.name}}}`)
                : o.push(c.jsx(a.Fragment, { children: n[i.name] }, `var-${i.name}-${i.instanceId}`));
        else if (i.type === Pn) {
            const e = Gn(i.children, t, n, !1),
                r = Hn(Kn(i.attrs, n), e, t);
            o.push(r);
        }
    return o;
}
function Yn(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function qn(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function Xn(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
const Qn = { start: '{{', end: '}}' },
    Zn = a.memo(function (e) {
        const {
                brackets: t = Qn,
                text: n,
                params: r,
                upgradeLegacy: o,
                fullSize: s,
                inline: i,
                formatters: u,
                split: d,
                ...f
            } = e,
            m = a.useMemo(
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
                              })(e, Xn, Yn, qn);
                          })(e.text)
                        : e.text,
                [e.text, e.upgradeLegacy],
            ),
            h = a.useMemo(() => (e.formatters ? { ...$n, ...e.formatters } : $n), [e.formatters]),
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
                            const l = e[c];
                            if (l === t.start[0] && e.slice(c, c + t.start.length) === t.start)
                                (o &&
                                    (r.length > 0
                                        ? r[r.length - 1].node.children.push({ type: An, value: o })
                                        : n.push({ type: An, value: o }),
                                    (o = '')),
                                    (s = !0),
                                    (c += t.start.length - 1));
                            else if (l === t.end[0] && e.slice(c, c + t.end.length) === t.end) {
                                ((s = !1), (c += t.end.length - 1));
                                const e = i.trim();
                                if (e.startsWith('@')) {
                                    const t = e.slice(1).trim(),
                                        o = { type: Pn, attrs: t.split('|'), instanceId: ++a, children: [] };
                                    (r.length > 0 ? r[r.length - 1].node.children.push(o) : n.push(o),
                                        r.push({ node: o, startIndex: n.length }));
                                } else if ('/' === e) r.length > 0 && r.pop();
                                else {
                                    const t = { type: In, instanceId: ++a, name: e };
                                    r.length > 0 ? r[r.length - 1].node.children.push(t) : n.push(t);
                                }
                                i = '';
                            } else s ? (i += l) : (o += l);
                        }
                        o &&
                            (r.length
                                ? r[r.length - 1].node.children.push({ type: An, value: o })
                                : n.push({ type: An, value: o }));
                        return n;
                    })(d ? `{{@ split}}${m}{{/}}` : m, t),
                [t, m, d],
            ),
            g = a.useMemo(() => Gn(p, h, e.params), [p, h, e.params]),
            b = l(Mn.base, s && Mn.base__fullSize, f.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              c.jsx('p', {
                  ...f,
                  className: b,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: g,
              }))
            : c.jsx('span', { ...f, className: b, children: g });
    });
function Jn({ path: e, ...t }) {
    return c.jsx(Zn, { text: C.resolve('strings').readOrEmpty(e), ...t });
}
const er = 'primary',
    tr = 'custom',
    nr = { large: 'large', medium: 'medium', small: 'small' },
    rr = a.createContext(null);
function or() {
    const e = a.useContext(rr);
    return (He(null !== e, 'You can use tabs hooks only with Tabs component'), e);
}
const sr = 'HorizontalTabs_outerBorderImage_8085e49e',
    ir = 'HorizontalTabs_mainBorderImage_558d1c3f',
    ar = 'HorizontalTabs_outerBorder_3255d0c5',
    cr = 'HorizontalTabs_mainBorder_61e34c2c',
    lr = 'HorizontalTabs_content_1ae3c4bd',
    ur = Rn('Tabs', 'HorizontalTabs_69e3c6f3', {
        variants: {
            size: {
                [nr.large]: 'HorizontalTabs_base__size-large_12c75e24',
                [nr.medium]: 'HorizontalTabs_base__size-medium_afc0934f',
                [nr.small]: 'HorizontalTabs_base__size-small_75fae891',
            },
            theme: { [er]: 'HorizontalTabs_base__theme-primary_5e3af03e', [tr]: void 0 },
        },
    }),
    dr = a.forwardRef(function ({ children: e, classNames: t, ...n }, r) {
        const o = or();
        return c.jsx(ur, {
            ...n,
            ref: r,
            className: l(n.className, null == t ? void 0 : t.base),
            size: o.size,
            theme: o.theme,
            children: c.jsxs('div', {
                className: l(ar, null == t ? void 0 : t.outerBorder),
                children: [
                    c.jsx('div', { className: l(sr, null == t ? void 0 : t.outerBorderImage) }),
                    c.jsxs('div', {
                        className: l(cr, null == t ? void 0 : t.mainBorder),
                        children: [
                            c.jsx('div', { className: l(ir, null == t ? void 0 : t.mainBorderImage) }),
                            c.jsx('div', { className: l(lr, null == t ? void 0 : t.content), children: e }),
                        ],
                    }),
                ],
            }),
        });
    }),
    fr = 'Tab_border_a63aeb3f',
    mr = 'Tab_background_4c9b3eb9',
    hr = 'Tab_backgroundPattern_417be4b5',
    pr = 'Tab_innerBorderImage_adadda5f',
    gr = 'Tab_content_b3f6c22b',
    br = Rn('Tab', 'Tab_f59c2b00', {
        variants: {
            size: {
                [nr.large]: 'Tab_base__size-large_0',
                [nr.medium]: 'Tab_base__size-medium_0',
                [nr.small]: 'Tab_base__size-small_0',
            },
            theme: { [er]: 'Tab_base__theme-primary_90fd5ee', [tr]: void 0 },
            state: { active: 'Tab_base__active_0', inactive: 'Tab_base__inactive_0' },
        },
        defaultVariants: { size: nr.medium, theme: er },
    }),
    _r = a.forwardRef(function (
        { theme: e, size: t, tabId: n, active: r, children: o, onClick: s, onMouseEnter: i, ...a },
        l,
    ) {
        const u = Jt();
        return c.jsx(br, {
            ...a,
            ref: l,
            theme: e,
            size: t,
            state: r === n ? 'active' : 'inactive',
            onMouseEnter: function (e) {
                (r !== n && u.play('mouse-enter', { target: br.displayName, original: e }), null == i || i(e));
            },
            onClick: function (e) {
                (r !== n && u.play('click', { target: br.displayName, original: e }), null == s || s(e));
            },
            children: o,
        });
    });
function vr({ active: e, theme: t, size: n, children: r, onActiveChange: o }) {
    const [s, i] = a.useState(e),
        l = a.useRef(e),
        u = a.useMemo(() => ({ active: s, theme: t, size: n, change: i }), [s, n, t]);
    return (
        a.useLayoutEffect(() => {
            i(e);
        }, [e]),
        a.useEffect(() => {
            l.current !== s && ((l.current = s), null == o || o(s));
        }, [s, o]),
        c.jsx(rr.Provider, { value: u, children: r })
    );
}
((vr.Switcher = dr),
    (vr.Tab = function ({ tabId: e, classNames: t, className: n, children: r, ...o }) {
        const s = or();
        return c.jsxs(_r, {
            'data-test-id': `${e}Tab`,
            ...o,
            tabId: e,
            theme: s.theme,
            size: s.size,
            active: s.active,
            className: l(null == t ? void 0 : t.base, n),
            onClick: (t) => {
                var n;
                (null == (n = o.onClick) || n.call(o, t), s.change(e));
            },
            children: [
                c.jsx('div', { className: l(mr, null == t ? void 0 : t.background) }),
                c.jsx('div', { className: l(hr, null == t ? void 0 : t.backgroundPattern) }),
                c.jsx('div', { className: l(fr, null == t ? void 0 : t.border) }),
                c.jsx('div', { className: l(pr, null == t ? void 0 : t.borderImage) }),
                c.jsx('div', { className: l(gr, null == t ? void 0 : t.content), children: r }),
            ],
        });
    }),
    (vr.Content = function ({ children: e, keyOverride: t }) {
        const n = or();
        return c.jsx(a.Fragment, { children: e(n.active) }, t ?? n.active);
    }));
const yr = () => {};
function wr(e) {
    const t = e;
    return a.forwardRef(function (e, n) {
        const r = yt(e, e.adaptive),
            { path: o, ...s } = r,
            i = r.images ?? C.resolve('images'),
            a = { ...s, ref: n };
        {
            const e = o ? i.readOr(o, yr, 'warn') : void 0;
            return e ? c.jsx(t, { ...a, src: e }) : c.jsx(t, { ...a, unknown: !0 });
        }
    });
}
const xr = {
        background:
            'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
        backgroundSize: '20rem 20rem',
        backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
        backgroundColor: '#000',
    },
    Er = wr(
        a.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: n,
                    fit: r,
                    position: o,
                    width: s,
                    src: i,
                    height: a,
                    unselectable: l,
                    unknown: u,
                    unknownStyle: d = xr,
                    ...f
                } = e;
                return c.jsx('div', { ...f, ref: t, style: { width: e.width, height: e.height, ...d, ...e.style } });
            }
            const {
                repeat: n,
                fit: r,
                position: o,
                width: s,
                height: i,
                unknownStyle: a,
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
                    backgroundPosition: o ?? 'center center',
                    width: 'number' == typeof s ? `${s}rem` : s,
                    height: 'number' == typeof i ? `${i}rem` : i,
                    ...d.style,
                },
            });
        }),
    ),
    Nr = wr(
        a.forwardRef(function (e, t) {
            const { width: n, height: r, src: o, unselectable: s, unknown: i, unknownStyle: a = xr, ...l } = e;
            return e.unknown
                ? c.jsx('div', { ...l, style: { width: e.width, height: e.height, ...a } })
                : c.jsx('img', { ...l, ref: t, src: o, width: n, height: r });
        }),
    ),
    Tr = a.createContext(void 0);
var Rr = ((e) => ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e))(Rr || {});
const Sr = {
        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
        animationConfig: { tension: 170, friction: 26 },
    },
    Cr = { horizontal: 'horizontal', vertical: 'vertical' },
    kr = {
        background: 'Thumb_background_7f3dd6ac',
        border: 'Thumb_border_5749138b',
        innerBorder: 'Thumb_innerBorder_42bafd18',
        icon: 'Thumb_icon_dca8bf26',
        base: 'Thumb_6ff3e706',
        base__vertical: 'Thumb_base__vertical_55a67c91',
        base__horizontal: 'Thumb_base__horizontal_27ca7ace',
        base__active: 'Thumb_base__active_830942bb',
    },
    Ar = 'forwardDisabled',
    Pr = 'backwardDisabled';
function Ir(e) {
    const t = a.useRef(null),
        [n, r] = a.useState(!1),
        o = Nt(function () {
            const n = t.current,
                r = e.trackRef.current,
                o = e.api.getWrapperSize(),
                s = e.api.getContainerSize();
            if (!(o && s && n && r)) return;
            const i = Math.min(1, o / s),
                a = 'horizontal' === e.direction ? 'width' : 'height';
            return ((n.style[a] = `${e.calculateSize(r, i)}px`), (n.style.display = 'flex'), i);
        }),
        [s, i] = _(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: H.easeInCubic,
            config: { duration: 200 },
        }));
    a.useEffect(() => {
        n || e.dragging
            ? i.start({
                  to: e.styles.opened,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.add(kr.base__active);
                  },
              })
            : i.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.remove(kr.base__active);
                  },
              });
    }, [n, e.dragging, e.styles.closed, e.styles.opened, i]);
    const u = Nt(function () {
            var n;
            const r = e.trackRef.current,
                o = t.current,
                s = e.railBeforeRef.current,
                a = e.railAfterRef.current,
                c = e.api.getWrapperSize(),
                l = e.api.getContainerSize();
            if (!(c && r && o && s && a && l)) return;
            const u = e.api.animationScroll.scrollPosition.get(),
                d = Math.min(1, c / l),
                f = we(0, 1, u / (l - c)),
                m = e.calculateSize(r, d),
                h = (('horizontal' === e.direction ? r.offsetWidth : r.offsetHeight) - m) * f || 0,
                p = Math.round(2 * (2 * f - 1));
            (o.style.setProperty('--thumbOffset', `${h}px`),
                null == (n = e.onUpdate) || n.call(e, { thumbSize: m, thumbOffset: h, newBouncingCorrection: p }));
            const g = 0 === h || e.isBoundThumb(h) ? 0 : p;
            return (
                i.start({
                    to: { '--bouncingCorrection': `${g}px` },
                    ...(0 === g ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                h
            );
        }),
        d = jt(),
        f = Nt(function () {
            o();
            const t = u();
            'number' == typeof t &&
                (function (e, t) {
                    if (!e.trackRef.current || !e.thumbRef.current) return;
                    const n = e.trackRef.current.parentNode;
                    if (n instanceof HTMLElement) {
                        if (0 === t) return (n.classList.add(Pr), void n.classList.remove(Ar));
                        if (e.isBoundThumb(t)) return (n.classList.remove(Pr), void n.classList.add(Ar));
                        (n.classList.remove(Pr), n.classList.remove(Ar));
                    }
                })(e, t);
        });
    a.useEffect(() => d.run(f));
    const { api: m } = e;
    return (
        a.useEffect(() => {
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
        c.jsxs(v.div, {
            ref: bn([t, e.thumbRef]),
            className: l(kr.base, kr[`base__${e.direction}`], e.className),
            style: s,
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: [
                c.jsx('div', { className: kr.background }),
                c.jsx('div', { className: kr.border }),
                c.jsx('div', { className: kr.innerBorder }),
                c.jsx('div', { className: kr.icon }),
            ],
        })
    );
}
const Mr = { pending: !1, offset: 0 };
function zr(e, t, n, r, o) {
    const [s, i] = a.useState(Mr),
        c = Nt(t),
        l = a.useCallback(
            (t) => {
                (i(t), e.current && c({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [c, e],
        );
    return (
        a.useEffect(() => {
            if (!s.pending) return;
            const t = Z.move(function ([t]) {
                    const i = n.contentRef.current;
                    if (!i) return;
                    const a = r.current,
                        l = e.current;
                    if (!i || !a || !l) return;
                    const u = o(t, s, { parent: a, thumb: l }),
                        d = u * (n.getContainerSize() ?? 0);
                    (n.scrollPosition.start({
                        scrollPosition: n.clampPosition(i, d),
                        reset: !0,
                        immediate: !0,
                        from: { scrollPosition: n.animationScroll.scrollPosition.get() },
                    }),
                        c({ type: 'dragging', dragElement: l, elementOffset: u, contentOffset: d }));
                }),
                i = Z.up(() => {
                    l(Mr);
                });
            return () => {
                (t(), i());
            };
        }, [n, s.offset, s.pending, c, l, e, r, s, o]),
        l
    );
}
const Dr = 'disable',
    jr = 'scroll-active';
function Or({ api: e, baseRef: t }) {
    const n = jt(),
        r = Nt(function () {
            const n = e.getWrapperSize(),
                r = e.getContainerSize();
            if (null === t.current || void 0 === r || void 0 === n) return;
            1 === Math.min(1, n / r || 1) ? t.current.classList.remove(jr) : t.current.classList.add(jr);
        });
    (a.useEffect(() => n.run(r)),
        a.useEffect(() => {
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
function Br(e, t) {
    const n = e.getBoundingClientRect(),
        r = t === Cr.horizontal ? n.x : n.y;
    return { start: r, end: t === Cr.horizontal ? r + n.width : r + n.height };
}
function Lr(e, t, n, r, o, s, i) {
    const c = Jt(),
        l = o.stepTimeout || 100,
        [u, d] = (function (e, t, n = []) {
            const r = a.useRef(0),
                o = a.useCallback(() => window.clearInterval(r.current), n || []);
            a.useEffect(() => o, [o]);
            const s = (n ?? []).concat([t]);
            return [
                a.useCallback((n) => {
                    ((r.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                }, s),
                o,
            ];
        })((e) => o.applyStepTo(e), l, [o]);
    a.useEffect(
        () => (document.addEventListener('mouseup', d, !0), () => document.removeEventListener('mouseup', d, !0)),
        [d],
    );
    const f = a.useCallback(
            (e) => {
                e.target.classList.contains(Dr) ||
                    (c.play('click', { target: 'Scroll:Back', original: e }), u(Rr.Next));
            },
            [u, c],
        ),
        m = a.useCallback(
            (e) => {
                e.target.classList.contains(Dr) ||
                    (c.play('click', { target: 'Scroll:Forward', original: e }), u(Rr.Prev));
            },
            [u, c],
        ),
        h = a.useCallback(
            (a) => {
                const l = e.current,
                    u = t.current,
                    d = n.current,
                    h = r.current;
                if (!(l && u && d && h && 0 === a.button)) return;
                const p = (function (e, t, n, r, o, s) {
                        return {
                            occurredEvent: s === Cr.horizontal ? e.screenX : e.screenY,
                            bar: Br(t, s),
                            thumb: Br(n, s),
                            backButton: Br(r, s),
                            forwardButton: Br(o, s),
                        };
                    })(a, l, u, d, h, i),
                    g = p.thumb.start <= p.occurredEvent && p.occurredEvent <= p.thumb.end,
                    b =
                        (p.backButton.start <= p.occurredEvent && p.occurredEvent <= p.backButton.end) ||
                        (p.forwardButton.start <= p.occurredEvent && p.occurredEvent <= p.forwardButton.end);
                if (g) s({ pending: !0, offset: p.occurredEvent - p.thumb.start });
                else if (b) {
                    ((p.occurredEvent > p.thumb.start ? Rr.Prev : Rr.Next) === Rr.Next ? f : m)(a);
                } else {
                    const e = p.occurredEvent - p.bar.start,
                        t = p.thumb.end - p.thumb.start,
                        n = p.bar.end - p.bar.start,
                        r = o.getContainerSize();
                    if ('number' != typeof r || Number.isNaN(r)) return console.error('Incorrect container size');
                    const s = ((e - t / 2) / n) * r;
                    o.applyScroll(s);
                }
                c.play('click', { target: 'Scroll:' + (g ? 'thumb' : b ? 'button' : ''), original: a });
            },
            [e, t, n, r, c, i, s, f, m, o],
        ),
        p = a.useCallback(
            (e) => {
                e.target.classList.contains(Dr) || c.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [c],
        );
    return a.useMemo(
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
const $r = 'HorizontalBar_rail_37858d8f',
    Fr = 'HorizontalBar_4df27ac3',
    Hr = 'HorizontalBar_track_649dc296',
    Wr = 'HorizontalBar_rail__left_1a906b4e',
    Ur = 'HorizontalBar_rail__right_cd24364e',
    Kr = 'HorizontalBar_button__right_e8f0aa2d',
    Vr = 'HorizontalBar_button__left_da330e13',
    Gr = 'HorizontalBar_button_cbabd91',
    Yr = { closed: { height: '3rem', top: '4rem' }, opened: { height: '11rem', top: '0rem' } },
    qr = (e, t) => Math.max(he(13), e.offsetWidth * t);
a.memo(function ({ classNames: e = {}, onDrag: t = xe }) {
    const n = a.useRef(null),
        r = a.useRef(null),
        o = a.useRef(null),
        s = a.useRef(null),
        i = a.useRef(null),
        u = a.useRef(null),
        d = a.useRef(null),
        [f, m] = a.useState(!1),
        { api: h } = (function () {
            const e = a.useContext(Tr);
            if (!e) throw new Error('useHorizontalScroll must be used within a Scroll.Horizontal.Base component');
            return e;
        })();
    Or({ baseRef: n, api: h });
    const p = Nt((e, t, { parent: n }) => (e.screenX - t.offset - n.getBoundingClientRect().x) / n.offsetWidth),
        g = Nt((e) => e - (s.current.offsetWidth - i.current.offsetWidth) >= -0.5),
        b = a.useCallback((e) => ('dragStart' === e.type ? m(!0) : 'dragEnd' === e.type && m(!1), t(e)), [t]),
        _ = zr(i, b, h, s, p),
        v = Nt(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
            const r = s.current,
                o = u.current,
                i = d.current;
            if (!r || !o || !i) return;
            const a = he(5);
            ((o.style.width = `${t - a + n}px`), (i.style.width = r.offsetWidth - e - t - a - n + 'px'));
        }),
        { handleMouseEnter: y, handleMouseDownTrack: w } = Lr(n, i, o, r, h, _, Cr.horizontal);
    return c.jsxs('div', {
        className: l(Fr, e.base),
        ref: n,
        onWheel: h.handleMouseWheel,
        onMouseDown: w,
        onMouseEnter: y,
        children: [
            c.jsx('div', { ref: r, className: l(Gr, Vr, e.leftButton) }),
            c.jsxs('div', {
                ref: s,
                className: l(Hr, e.track),
                children: [
                    c.jsx('div', { ref: u, className: l($r, Wr, e.leftRail) }),
                    c.jsx(Ir, {
                        dragging: f,
                        api: h,
                        calculateOffset: p,
                        calculateSize: qr,
                        direction: 'horizontal',
                        isBoundThumb: g,
                        railAfterRef: u,
                        railBeforeRef: d,
                        styles: Yr,
                        onUpdate: v,
                        thumbRef: i,
                        trackRef: s,
                    }),
                    c.jsx('div', { ref: d, className: l($r, Ur, e.rightRail) }),
                ],
            }),
            c.jsx('div', { ref: o, className: l(Gr, Kr, e.rightButton) }),
        ],
    });
});
const Xr = a.createContext(void 0);
function Qr() {
    const e = a.useContext(Xr);
    if (!e) throw new Error('useVerticalScroll must be used within a Scroll.Vertical.Base component');
    return e;
}
const Zr = (({
        getContainerSize: e,
        getBounds: t,
        setScrollPosition: n,
        getDirection: r,
        getWrapperSize: o,
        triggerMouseMoveOnUpdate: s = !1,
    }) => {
        const i = (e, n) => {
            const [r, o] = t(e);
            return we(r, o, n);
        };
        return (c = {}) => {
            const { settings: l = Sr } = c,
                [u, d] = a.useState(!1),
                f = a.useRef(null),
                m = a.useRef(null),
                h = a.useRef({ wrapper: 0, container: 0 }),
                p = a.useMemo(() => {
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
                g = Ot(
                    () => {
                        viewEnv.forceTriggerMouseMove();
                    },
                    [],
                    150,
                ),
                [b, v] = _(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = f.current;
                        t && (n(t, e), p.trigger('change', e));
                    },
                    onRest: (e) => p.trigger('rest', e),
                    onStart: (e) => p.trigger('start', e),
                    onPause: (e) => p.trigger('pause', e),
                })),
                y = a.useCallback(
                    (e, t, n) => {
                        const r = b.scrollPosition.get(),
                            o = (b.scrollPosition.goal ?? 0) - r;
                        return i(e, t * n + o + r);
                    },
                    [b.scrollPosition],
                ),
                w = a.useCallback(
                    function (e, { immediate: t = !1, reset: n = !0 } = {}) {
                        const r = f.current;
                        if (!r) return;
                        const o = i(r, e);
                        b.scrollPosition.get() !== o &&
                            v.start({
                                scrollPosition: o,
                                immediate: t,
                                reset: n,
                                config: l.animationConfig,
                                from: { scrollPosition: i(r, b.scrollPosition.get()) },
                                onChange: () => {
                                    s && g();
                                },
                            });
                    },
                    [v, l.animationConfig, b.scrollPosition, g],
                ),
                x = a.useCallback(
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
                E = a.useCallback(
                    function (e) {
                        u ||
                            (0 !== e.deltaY && x(r(e)),
                            f.current && p.trigger('mouseWheel', e, b.scrollPosition, t(f.current)));
                    },
                    [b.scrollPosition, x, p, u],
                ),
                N = a.useCallback(
                    function () {
                        const e = f.current;
                        e && (w(i(e, b.scrollPosition.goal), { immediate: !0 }), p.trigger('resizeHandled'));
                    },
                    [w, b.scrollPosition.goal, p],
                );
            zt(m, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = o(t);
                h.current.wrapper !== n && N();
            });
            const T = Nt(function () {
                    const t = f.current;
                    if (!t) return;
                    const n = e(t),
                        r = m.current ? o(m.current) : 0;
                    if (h.current.container !== n || h.current.wrapper !== r) {
                        const e = i(t, b.scrollPosition.goal);
                        (e !== b.scrollPosition.goal && w(e, { immediate: !0 }),
                            (h.current.container = n),
                            (h.current.wrapper = r),
                            p.trigger('recalculateContent'));
                    }
                }),
                R = jt();
            a.useEffect(() => Se(window, 'resize', () => R.run(N)), [N, R]);
            return a.useMemo(
                () => ({
                    getWrapperSize: () => (m.current ? o(m.current) : void 0),
                    getContainerSize: () => (f.current ? e(f.current) : void 0),
                    getBounds: () =>
                        f.current ? t(f.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: l.step.clampedArrowStepTimeout,
                    settings: l,
                    clampPosition: i,
                    handleMouseWheel: E,
                    applyScroll: w,
                    applyStepTo: x,
                    contentRef: f,
                    wrapperRef: m,
                    scrollPosition: v,
                    animationScroll: b,
                    recalculateContent: T,
                    disabled: u,
                    setDisabled: d,
                    events: { on: p.on, off: p.off },
                }),
                [l, E, w, x, v, b, T, u, d, p.on, p.off],
            );
        };
    })({
        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
        getContainerSize: (e) => e.scrollHeight,
        getWrapperSize: (e) => e.offsetHeight,
        setScrollPosition: (e, t) => {
            e.scrollTop = Math.trunc(t.value.scrollPosition ?? 0);
        },
        getDirection: (e) => (e.deltaY > 1 ? Rr.Next : Rr.Prev),
    }),
    Jr = 'VerticalBar_rail_3d663c9',
    eo = 'VerticalBar_7187fa00',
    to = 'VerticalBar_track_ff482708',
    no = 'VerticalBar_rail__top_ee531f43',
    ro = 'VerticalBar_rail__bottom_3eaa33b1',
    oo = 'VerticalBar_button__bottom_6880f123',
    so = 'VerticalBar_button__top_b8383775',
    io = 'VerticalBar_button_7b0e4aca',
    ao = { closed: { width: '3rem', left: '3rem' }, opened: { width: '9rem', left: '0rem' } },
    co = (e, t) => Math.max(he(13), e.offsetHeight * t),
    lo = a.memo(function ({ classNames: e = {}, onDrag: t = xe }) {
        const n = a.useRef(null),
            r = a.useRef(null),
            o = a.useRef(null),
            s = a.useRef(null),
            i = a.useRef(null),
            u = a.useRef(null),
            d = a.useRef(null),
            [f, m] = a.useState(!1),
            { api: h } = Qr();
        Or({ baseRef: n, api: h });
        const p = Nt((e) => e - (s.current.offsetHeight - i.current.offsetHeight) >= -0.5),
            g = Nt((e, t, { parent: n }) => (e.screenY - t.offset - n.getBoundingClientRect().y) / n.offsetHeight),
            b = a.useCallback((e) => ('dragStart' === e.type ? m(!0) : 'dragEnd' === e.type && m(!1), t(e)), [t]),
            _ = zr(i, b, h, s, g),
            v = Nt(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
                const r = s.current,
                    o = u.current,
                    i = d.current;
                if (!r || !o || !i) return;
                const a = he(5);
                ((o.style.height = `${t - a + n}px`), (i.style.height = r.offsetHeight - e - t - a - n + 'px'));
            }),
            { handleMouseEnter: y, handleMouseDownTrack: w } = Lr(n, i, r, o, h, _, Cr.vertical);
        return c.jsxs('div', {
            className: l(eo, e.base),
            ref: n,
            onWheel: h.handleMouseWheel,
            onMouseDown: w,
            onMouseEnter: y,
            children: [
                c.jsx('div', { ref: r, className: l(io, so, e.topButton) }),
                c.jsxs('div', {
                    ref: s,
                    className: l(to, e.track),
                    children: [
                        c.jsx('div', { ref: u, className: l(Jr, no, e.topRail) }),
                        c.jsx(Ir, {
                            dragging: f,
                            api: h,
                            calculateOffset: g,
                            calculateSize: co,
                            direction: 'vertical',
                            isBoundThumb: p,
                            railAfterRef: u,
                            railBeforeRef: d,
                            styles: ao,
                            onUpdate: v,
                            thumbRef: i,
                            trackRef: s,
                        }),
                        c.jsx('div', { ref: d, className: l(Jr, ro, e.bottomRail) }),
                    ],
                }),
                c.jsx('div', { ref: o, className: l(io, oo, e.bottomButton) }),
            ],
        });
    }),
    uo = {
        content: 'VerticalScroll_content_62cb6120',
        defaultScroll: 'VerticalScroll_defaultScroll_c69fa70e',
        area: 'VerticalScroll_area_a3c0086a',
    },
    fo = ({ className: e, classNames: t, children: n, ...r }) => {
        const { api: o } = Qr();
        return (
            a.useEffect(() => Fe(() => Fe(o.recalculateContent))),
            c.jsx('div', {
                className: l(uo.base, null == t ? void 0 : t.wrapper, e),
                ref: o.wrapperRef,
                onWheel: o.handleMouseWheel,
                children: c.jsx('div', {
                    ...r,
                    className: l(uo.content, null == t ? void 0 : t.content),
                    ref: o.contentRef,
                    children: n,
                }),
            })
        );
    };
function mo({ children: e }) {
    const t = Zr(),
        n = a.useMemo(() => ({ api: t }), [t]);
    return c.jsx(Xr.Provider, { value: n, children: e });
}
fo.Default = ({
    children: e,
    className: t,
    barClassNames: n,
    areaClassName: r,
    scrollClassName: o,
    scrollClassNames: s,
    onDrag: i,
}) => {
    const { api: u } = Qr(),
        d = a.useMemo(() => {
            const e = n || {};
            return { ...e, base: l(uo.base, e.base) };
        }, [n]);
    return c.jsxs('div', {
        className: l(uo.defaultScroll, t),
        onWheel: u.handleMouseWheel,
        children: [
            c.jsx('div', {
                className: l(uo.area, r),
                children: c.jsx(fo, { className: o, classNames: s, children: e }),
            }),
            c.jsx(lo, { onDrag: i, classNames: d }),
        ],
    });
};
const ho = {
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
    po = Object.values(ho),
    go = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
        xxl: 'xxl',
    },
    bo = { [go.extraSmall]: 16, [go.small]: 24, [go.medium]: 32, [go.large]: 48, [go.extraLarge]: 80, [go.xxl]: 96 },
    _o = { [go.extraSmall]: 32, [go.small]: 48, [go.medium]: 32, [go.large]: 96, [go.extraLarge]: 80, [go.xxl]: 96 },
    vo = {
        base: 'Currency_72d4be39',
        base__reverse: 'Currency_base__reverse_f12e61b0',
        base__notEnough: 'Currency_base__notEnough_9a7842f',
        base__credits: 'Currency_base__credits_7b9ae721',
        base__gold: 'Currency_base__gold_d6e3cbc',
        base__freeXP: 'Currency_base__freeXP_d29d5a57',
        base__crystal: 'Currency_base__crystal_f830cb47',
        base__tankXP: 'Currency_base__tankXP_1707c68b',
    },
    yo = C.resolve('intl'),
    wo = Rn('Currency', vo.base, { variants: { reverse: { true: vo.base__reverse } } });
function xo(e, t) {
    const n = t === ho.gold ? 'gold' : 'integral';
    return Array.isArray(e)
        ? e.map((e) => ('number' == typeof e ? yo.formatNumber(n, e) : e))
        : 'number' == typeof e
          ? yo.formatNumber(n, e)
          : e;
}
function Eo({
    children: e,
    type: t,
    className: n,
    classNames: r,
    imagePath: o,
    size: s = go.small,
    enough: i = !0,
    ...a
}) {
    const u = bo[s],
        d = `${t}_${u}x${u}`,
        f = _o[s],
        m = `${t}_${f}x${f}`,
        h = o || po.includes(t),
        p = wt(`library.currency.${d}`, `library.currency.${m}`);
    return c.jsxs(wo, {
        ...a,
        className: l(null == r ? void 0 : r.base, i ? vo[`base__${t}`] : vo.base__notEnough, n),
        children: [
            h && c.jsx(Er, { width: u, height: u, path: o ?? p, className: null == r ? void 0 : r.icon }),
            xo(e, t),
        ],
    });
}
((Eo.sizes = go), (Eo.types = ho));
const No = { lightTank: 'lightTank', mediumTank: 'mediumTank', heavyTank: 'heavyTank', SPG: 'SPG', 'AT-SPG': 'AT-SPG' },
    To = Object.values(No);
function Ro(e) {
    const t = e.indexOf(':');
    return K(t < 0 ? e.toLowerCase() : e.substring(t + 1).toLowerCase());
}
function So(e) {
    const t = e.tier;
    var n;
    He((n = t) >= 1 && n <= 11, `Such tier ${t} is not supported`);
    const r = e.type;
    return (
        He(((e) => To.includes(e))(r), `Such vehicle type ${r} is not supported`),
        {
            tier: t,
            type: r,
            normilizedType: K(e.type),
            name: e.name,
            techName: e.techName,
            premium: e.isPremium,
            vehicleCD: e.vehicleCD,
            nation: e.nation,
        }
    );
}
function Co(e) {
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
function ko(e) {
    return (
        !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
        (!a.isValidElement(e) && !!Array.isArray(e) && e.every(ko))
    );
}
const Ao = 'MultilineOverflow_8834bd8e',
    Po = 'MultilineOverflow_content_b539970d';
const Io = a.forwardRef(function (
        {
            text: e,
            brackets: t,
            params: n,
            formatters: r,
            upgradeLegacy: o,
            split: s = !0,
            onMouseEnter: i,
            onMouseLeave: u,
            onClick: d,
            tooltipDisabled: f = !1,
            tooltip: m,
            className: h,
            classNames: p,
            ...g
        },
        b,
    ) {
        const _ = a.useRef(null),
            [v, y] = a.useState(!1);
        a.useEffect(() => {
            const e = _.current;
            if (!e) return;
            const t = document.createElement('div');
            let n = xe;
            function r() {
                if (!e) return;
                (n(),
                    (t.style.visibility = 'hidden'),
                    (t.className = l(Po, e.children[0].className)),
                    (t.innerHTML = ''),
                    e.appendChild(t));
                for (let n of e.children[0].childNodes.values()) {
                    if (n instanceof HTMLElement) {
                        const e = n.cloneNode(!0);
                        t.appendChild(e);
                    }
                    if (n.nodeType === Node.TEXT_NODE) {
                        const e = document.createTextNode(n.nodeValue ?? '');
                        t.appendChild(e);
                    }
                }
                const r = document.createElement('div');
                ((r.innerHTML = '...'),
                    t.appendChild(r),
                    (n = Fe(() => {
                        var n, o;
                        const s = [];
                        for (let r = t.childNodes.length - 2; 0 !== r; r--) {
                            const n = t.childNodes[r];
                            if (n.offsetTop + n.offsetHeight <= e.offsetHeight) break;
                            s.push(n);
                        }
                        s.forEach((e) => e.remove());
                        const i = null == (n = t.lastChild) ? void 0 : n.previousSibling;
                        (0 === s.length
                            ? (null == (o = t.lastChild) || o.remove(), y(!1))
                            : i.offsetWidth + i.offsetLeft + r.offsetWidth > e.offsetWidth
                              ? (i.remove(), y(!0))
                              : y(!0),
                            (t.style.visibility = ''));
                    })));
            }
            const o = new ResizeObserver(r);
            return (
                o.observe(e),
                window.addEventListener('resize', r),
                new Re()
                    .add(() => n())
                    .add(() => window.removeEventListener('resize', r))
                    .add(o.disconnect.bind(o))
                    .add(t.remove.bind(t)).dispose
            );
        }, [b]);
        const w = (function (e) {
                return !e || Object.values(e).every(ko);
            })(n),
            x = (function (e, t, n) {
                return Ht({
                    ...n,
                    disabled: null == n ? void 0 : n.disabled,
                    contentId: C.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
                    args: a.useMemo(() => ({ type: e, params: JSON.stringify(t), resId: t.resId }), [t, e]),
                });
            })(
                'format_text',
                a.useMemo(
                    () => ({
                        text: e,
                        params: w ? n : void 0,
                        split: s,
                        upgradeLegacy: o,
                        brackets: t,
                        resId: C.resolve('views').read((e) => e.mono.tooltips.tooltips('resId')),
                    }),
                    [e, t, s, o, n, w],
                ),
            ),
            E = m ?? x;
        return (
            a.useEffect(() => {
                f || v || E.onMouseLeave();
            }, [v, E, m, f, w]),
            c.jsx('div', {
                ...g,
                onMouseEnter: function (e) {
                    (null == i || i(e), v && !f && E.onMouseEnter(e));
                },
                onClick: function (e) {
                    (null == d || d(e), f || E.onClick());
                },
                onMouseLeave: function (e) {
                    (null == u || u(e), f || E.onMouseLeave());
                },
                ref: bn([b, _]),
                className: l(Ao, h, null == p ? void 0 : p.base),
                children: c.jsx(Zn, {
                    text: e,
                    brackets: t,
                    params: n,
                    upgradeLegacy: o,
                    split: s,
                    formatters: r,
                    className: null == p ? void 0 : p.text,
                    style: { visibility: 'hidden' },
                }),
            })
        );
    }),
    Mo = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    zo = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
    Do = Rn('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    jo = a.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: o = !1, silent: s = !1, ...i },
        a,
    ) {
        const l = Jt();
        return c.jsx(Do, {
            ...i,
            ref: a,
            onMouseEnter: function (e) {
                (o || s || l.play('mouse-enter', { target: r || 'Button', original: e }), null == n || n(e));
            },
            onClick: function (e) {
                o || (s || l.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    Oo = {
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
    Bo = a.forwardRef(function (
        {
            children: e,
            size: t = zo.large,
            theme: n = Mo.primary,
            disabled: r = !1,
            silent: o = !1,
            autoAlignContent: s = !0,
            classNames: i,
            className: a,
            ...u
        },
        d,
    ) {
        return c.jsxs(jo, {
            ...u,
            ref: d,
            silent: o,
            disabled: r,
            className: l(
                Oo.base,
                Oo[`base__size-${t}`],
                Oo[`base__theme-${n}`],
                r ? Oo.base__disabled : Oo.base__enabled,
                a,
                null == i ? void 0 : i.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = u.onClick) || t.call(u, e);
            },
            children: [
                c.jsx('div', { className: l(Oo.background, null == i ? void 0 : i.background) }),
                c.jsx('div', { className: l(Oo.border, null == i ? void 0 : i.border) }),
                c.jsx('div', { className: l(Oo.overlay, null == i ? void 0 : i.overlay) }),
                c.jsx('div', {
                    className: l(Oo.content, s && Oo.content__fontAligned, null == i ? void 0 : i.content),
                    children: e,
                }),
            ],
        });
    });
((Bo.themes = Mo), (Bo.sizes = zo));
const Lo = 'GradientText_textOverlay_2d67fbb8',
    $o = 'GradientText_5009d812',
    Fo = a.forwardRef(function ({ classNames: e, children: t }, n) {
        return c.jsxs('div', {
            ref: n,
            className: l($o, null == e ? void 0 : e.base),
            children: [
                c.jsx('div', { className: null == e ? void 0 : e.text, children: t }),
                c.jsx('div', { className: l(Lo, null == e ? void 0 : e.textOverlay), children: t }),
            ],
        });
    }),
    Ho = { noneRef: 'none-ref', measured: 'measured' },
    Wo = { type: 'measuring' };
function Uo() {
    const e = a.useRef(null),
        [t, n] = a.useState(Wo),
        r = ((e, t = []) => {
            const n = a.useRef(),
                r = a.useCallback((...t) => {
                    (n.current && n.current(), (n.current = e(...t)));
                }, t);
            return (
                a.useEffect(
                    () => () => {
                        n.current && n.current();
                    },
                    [r],
                ),
                r
            );
        })(
            () => (
                n(Wo),
                Fe(() => {
                    e.current
                        ? n({
                              type: Ho.measured,
                              size: { width: e.current.offsetWidth, height: e.current.offsetHeight },
                          })
                        : n({ type: Ho.noneRef });
                })
            ),
            [],
        );
    return (
        a.useEffect(
            () => (window.addEventListener('resize', r), r(), () => window.removeEventListener('resize', r)),
            [r],
        ),
        [e, t, r]
    );
}
const Ko = C.resolve('strings'),
    Vo = C.resolve('intl'),
    Go = (e) => Vo.toUpperCase(Ko.readOr(`readable_key_names.KEY_${e}`, () => Yo)),
    Yo = Vo.toUpperCase(Ko.readOrEmpty('readable_key_names.KEY_NONE_ALT')),
    qo = {
        [Ae.NONE]: Go('NONE_ALT'),
        [Ae.ESCAPE]: Go('ESCAPE'),
        [Ae.ENTER]: Go('ENTER'),
        [Ae.SPACE]: Go('SPACE'),
        [Ae.DELETE]: Go('DELETE'),
        [Ae.BACKSPACE]: Go('BACKSPACE'),
        [Ae.TAB]: Go('TAB'),
        [Ae.HOME]: Go('HOME'),
        [Ae.END]: Go('END'),
        [Ae.MINUS]: Go('MINUS'),
        [Ae.SLASH]: Go('SLASH'),
        [Ae.BACKSLASH]: Go('BACKSLASH'),
        [Ae.PERIOD]: Go('PERIOD'),
        [Ae.COMMA]: Go('COMMA'),
        [Ae.QUOTE]: Go('APOSTROPHE'),
        [Ae.SEMICOLON]: Go('SEMICOLON'),
        [Ae.INSERT]: Go('INSERT'),
        [Ae.KEY_A]: Go('A'),
        [Ae.KEY_B]: Go('B'),
        [Ae.KEY_C]: Go('C'),
        [Ae.KEY_D]: Go('D'),
        [Ae.KEY_E]: Go('E'),
        [Ae.KEY_F]: Go('F'),
        [Ae.KEY_G]: Go('G'),
        [Ae.KEY_H]: Go('H'),
        [Ae.KEY_I]: Go('I'),
        [Ae.KEY_J]: Go('J'),
        [Ae.KEY_K]: Go('K'),
        [Ae.KEY_L]: Go('L'),
        [Ae.KEY_M]: Go('M'),
        [Ae.KEY_N]: Go('N'),
        [Ae.KEY_O]: Go('O'),
        [Ae.KEY_P]: Go('P'),
        [Ae.KEY_Q]: Go('Q'),
        [Ae.KEY_R]: Go('R'),
        [Ae.KEY_S]: Go('S'),
        [Ae.KEY_T]: Go('T'),
        [Ae.KEY_U]: Go('U'),
        [Ae.KEY_V]: Go('V'),
        [Ae.KEY_W]: Go('W'),
        [Ae.KEY_X]: Go('X'),
        [Ae.KEY_Y]: Go('Y'),
        [Ae.KEY_Z]: Go('Z'),
        [Ae.DIGIT_0]: Go('0'),
        [Ae.DIGIT_1]: Go('1'),
        [Ae.DIGIT_2]: Go('2'),
        [Ae.DIGIT_3]: Go('3'),
        [Ae.DIGIT_4]: Go('4'),
        [Ae.DIGIT_5]: Go('5'),
        [Ae.DIGIT_6]: Go('6'),
        [Ae.DIGIT_7]: Go('7'),
        [Ae.DIGIT_8]: Go('8'),
        [Ae.DIGIT_9]: Go('9'),
        [Ae.NUMPAD_0]: Go('NUMPAD0'),
        [Ae.NUMPAD_1]: Go('NUMPAD1'),
        [Ae.NUMPAD_2]: Go('NUMPAD2'),
        [Ae.NUMPAD_3]: Go('NUMPAD3'),
        [Ae.NUMPAD_4]: Go('NUMPAD4'),
        [Ae.NUMPAD_5]: Go('NUMPAD5'),
        [Ae.NUMPAD_6]: Go('NUMPAD6'),
        [Ae.NUMPAD_7]: Go('NUMPAD7'),
        [Ae.NUMPAD_8]: Go('NUMPAD8'),
        [Ae.NUMPAD_9]: Go('NUMPAD9'),
        [Ae.F_1]: Go('F1'),
        [Ae.F_2]: Go('F2'),
        [Ae.F_3]: Go('F3'),
        [Ae.F_4]: Go('F4'),
        [Ae.F_5]: Go('F5'),
        [Ae.F_6]: Go('F6'),
        [Ae.F_7]: Go('F7'),
        [Ae.F_8]: Go('F8'),
        [Ae.F_9]: Go('F9'),
        [Ae.F_10]: Go('F10'),
        [Ae.F_11]: Go('F11'),
        [Ae.F_12]: Go('F12'),
        [Ae.NUMPAD_MULTIPLY]: Go('NUMPADSTAR'),
        [Ae.NUMPAD_DIVIDE]: Go('NUMPADSLASH'),
        [Ae.NUMPAD_ADD]: Go('ADD'),
        [Ae.NUMPAD_SUBTRACT]: Go('NUMPADMINUS'),
        [Ae.NUMPAD_DECIMAL]: Go('NUMPADPERIOD'),
        [Ae.ARROW_LEFT]: Go('LEFTARROW'),
        [Ae.ARROW_RIGHT]: Go('RIGHTARROW'),
        [Ae.ARROW_UP]: Go('UPARROW'),
        [Ae.ARROW_DOWN]: Go('DOWNARROW'),
        [Ae.PAGE_UP]: Go('PGUP'),
        [Ae.PAGE_DOWN]: Go('PGDN'),
        [Ae.BRACKET_LEFT]: Go('LBRACKET'),
        [Ae.BRACKET_RIGHT]: Go('RBRACKET'),
    },
    Xo = a.createContext(void 0);
function Qo() {
    const e = a.useContext(Xo);
    if (!e) throw new Error('useKeyButtonContext must be used within KeyButtonContext');
    return e;
}
const Zo = 'KeyButton_background_8a852f95',
    Jo = 'KeyButton_border_b1c50f01',
    es = 'KeyButton_8fd343f8',
    ts = 'KeyButton_content_a724f532',
    ns = Rn('KeyButton', es);
function rs({ children: e, onClick: t, onMouseEnter: n, ...r }) {
    const o = Jt(),
        { soundTarget: s, silent: i } = Qo();
    return c.jsx(ns, {
        ...r,
        onMouseEnter: function (e) {
            (i || o.play('mouse-enter', { target: s, original: e }), null == n || n(e));
        },
        onClick: function (e) {
            (i || o.play('click', { target: s, original: e }), null == t || t(e));
        },
        children: e,
    });
}
function os({ keyCode: e, onActive: t, silent: n, soundTarget: r, idle: o, children: s }) {
    !(function (e, t, n = !1) {
        kt(Ie(e), 'keyup', t, n);
    })(o ? Ae.NONE : Ie(e), t);
    const i = a.useMemo(() => ({ keyCode: e, onActive: t, silent: n, soundTarget: r, idle: o }), [e, t, r, n, o]);
    return c.jsx(Xo.Provider, { value: i, children: s });
}
const ss = function ({
    keyCode: e,
    onActive: t = xe,
    silent: n = !1,
    idle: r = !1,
    soundTarget: o = 'KeyButton',
    classNames: s,
    className: i,
    children: a,
    ...u
}) {
    return c.jsx(os, {
        keyCode: e,
        onActive: t,
        silent: n,
        idle: r,
        soundTarget: o,
        children: c.jsxs(rs, {
            ...u,
            className: l(es, i, null == s ? void 0 : s.base),
            children: [
                c.jsx('div', { className: l(Zo, null == s ? void 0 : s.background) }),
                c.jsx('div', { className: l(Jo, null == s ? void 0 : s.border) }),
                c.jsx('div', { className: l(ts, null == s ? void 0 : s.content), children: a }),
            ],
        }),
    });
};
ss.Code = function () {
    const { keyCode: e } = Qo(),
        t = Ie(e);
    if (t === Ae.NONE) return Yo;
    const n = ((r = t), window.systemInput.getQWERTYScanCode(r));
    var r;
    const o = ((s = n), window.systemInput.getCurrentLayoutKeyName(s));
    var s;
    return o in qo
        ? qo[o]
        : (console.error(
              e === o
                  ? `KeyButton: key code "${e}" is not supported.`
                  : `KeyButton: virtual key code "${o}" for "${e}" is not supported.`,
          ),
          Yo);
};
const is = { static: 'static', screenResponsive: 'screenResponsive', contentResponsive: 'contentResponsive' };
Object.values(is);
const as = { header: 'header', body: 'body', footer: 'footer' },
    cs = Object.values(as),
    ls = a.createContext(null);
function us() {
    const e = a.useContext(ls);
    if (null === e) throw new Error('You can use the table hooks only with the table component');
    return e;
}
function ds({ children: e, columns: t, data: n, sorting: r, pagination: o, rowSelection: s, initialState: i, ...l }) {
    const f = a.useRef({ header: [], body: [], footer: [] }),
        m = a.useRef(new Map()),
        h = a.useRef(null),
        p = y(() => {
            const e = u.array([]);
            return {
                updateAt: d((t, n) => {
                    e[t] = n;
                }),
                getAt: gn.primitive((t) => e[t]),
            };
        }),
        g = a.useCallback(
            function () {
                0 !== m.current.size &&
                    (w(() => {
                        for (const [e, t] of m.current.entries()) p.updateAt(e, t);
                    }),
                    m.current.clear(),
                    (h.current = null));
            },
            [p],
        ),
        b = a.useCallback(
            function (e, t) {
                (m.current.set(e, t), null === h.current && (h.current = requestAnimationFrame(g)));
            },
            [g],
        ),
        _ = a.useCallback(
            (e, n, r, o) => {
                if (void 0 === f.current) return;
                Array.isArray(f.current[e][r]) || (f.current[e][r] = new Array(t.length));
                const s = f.current[e][r];
                void 0 !== s && (s[o] = n);
            },
            [t.length],
        );
    (Rt(() => {
        null !== h.current && (cancelAnimationFrame(h.current), (h.current = null));
    }),
        a.useLayoutEffect(
            () =>
                Fe(function () {
                    const e = [...f.current.header, ...f.current.body, ...f.current.footer],
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
    const v = x({
            data: n,
            columns: t,
            getCoreRowModel: T(),
            getSortedRowModel: r ? N() : void 0,
            getPaginationRowModel: o ? E() : void 0,
            initialState: i,
            state: { sorting: r, rowSelection: s, pagination: o },
            ...l,
        }),
        R = a.useMemo(
            () => ({ table: v, cellRefs: f, columnSizes: p, handleCellRefsSet: _, scheduleColumnSizeUpdate: b }),
            [v, f, p, _, b],
        );
    return c.jsx(ls.Provider, { value: R, children: e });
}
const fs = {
        base: 'Table_85be883a',
        row: 'Table_row_881b7550',
        header: 'Table_header_ef69bf65',
        footer: 'Table_footer_ef69bf65',
        body: 'Table_body_df2c1607',
        cell: 'Table_cell_7df9641e',
        sortable: 'Table_sortable_f63b3b4f',
        contentResponsiveCellWrapper: 'Table_contentResponsiveCellWrapper_ddee221c',
    },
    ms = Rn('ContentResponsiveTableCell', fs.cell),
    hs = S(function (e) {
        var t;
        (He(
            e.cell.minSize.endsWith('rem'),
            `minSize unit of the content_responsive_cell should be in rem for ${e.cell.column.id} column`,
        ),
            He(
                e.cell.maxSize.endsWith('rem'),
                `maxSize unit of the content_responsive_cell should be in rem for ${e.cell.column.id} column`,
            ));
        const { className: n, style: r, cell: o, ...s } = e,
            i = a.useRef(null),
            u = o.column.getCanSort(),
            { cellRefs: d, columnSizes: f, handleCellRefsSet: m, scheduleColumnSizeUpdate: h } = us(),
            p = f.getAt(o.index);
        return (
            a.useLayoutEffect(() => {
                var e, t;
                const n =
                    null == (t = null == (e = d.current) ? void 0 : e[o.tablePart][o.rowIndex]) ? void 0 : t[o.index];
                if (null == n)
                    return void console.warn(
                        `Ref is not assigned for content responsive cell at tablePart ${o.tablePart}, row index ${o.rowIndex}, cell index ${o.index}`,
                    );
                i.current = new ResizeObserver(function () {
                    var e;
                    let t = 0;
                    for (const n of cs)
                        for (const r of d.current[n]) {
                            const n = (null == (e = r[o.index]) ? void 0 : e.scrollWidth) ?? 0;
                            t = Math.max(t, n);
                        }
                    h(o.index, t);
                });
                return (
                    i.current.observe(n),
                    () => {
                        i.current && (i.current.disconnect(), (i.current = null));
                    }
                );
            }, [o.index, o.rowIndex, o.tablePart, h]),
            c.jsx(
                ms,
                {
                    className: l(
                        null == (t = o.column.columnDef.meta) ? void 0 : t.className,
                        u && as.header === o.tablePart && fs.sortable,
                        n,
                    ),
                    style: {
                        ...r,
                        maxWidth: o.maxSize,
                        minWidth: o.minSize,
                        width: Xe(p) ? p : 'auto',
                        opacity: Xe(p) ? 1 : 0,
                    },
                    ...s,
                    children: c.jsx('div', {
                        className: fs.contentResponsiveCellWrapper,
                        ref: a.useCallback(
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
    ps = Rn('ScreenResponsiveTableCell', fs.cell);
function gs(e) {
    var t;
    (He(
        e.cell.size.endsWith('%'),
        `Size unit of the screen_responsive_cell should be in percents for ${e.cell.column.id} column`,
    ),
        He(
            e.cell.minSize.endsWith('rem'),
            `minSize unit of the screen_responsive_cell should be in rem for ${e.cell.column.id} column`,
        ),
        He(
            e.cell.maxSize.endsWith('rem'),
            `maxSize unit of the screen_responsive_cell should be in rem for ${e.cell.column.id} column`,
        ));
    const { className: n, style: r, cell: o, ...s } = e,
        [i, u] = a.useState(!1),
        d = e.cell.column.getCanSort(),
        { handleCellRefsSet: f } = us();
    return (
        a.useEffect(
            () =>
                Fe(() => {
                    u(!0);
                }),
            [],
        ),
        c.jsx(
            ps,
            {
                ref: a.useCallback(
                    (e) => f(o.tablePart, e, o.rowIndex, o.index),
                    [o.tablePart, o.rowIndex, o.index, f],
                ),
                className: l(
                    null == (t = o.column.columnDef.meta) ? void 0 : t.className,
                    d && as.header === o.tablePart && fs.sortable,
                    n,
                ),
                style: { ...r, width: o.size, minWidth: o.minSize, maxWidth: o.maxSize, opacity: i ? 1 : 0 },
                ...s,
                children: e.children,
            },
            e.id,
        )
    );
}
const bs = Rn('StaticTableCell', fs.cell);
function _s(e) {
    var t;
    He(e.cell.size.endsWith('rem'), `Size unit is not correct for the ${e.cell.column.id} column`);
    const { className: n, style: r, cell: o, ...s } = e,
        [i, u] = a.useState(!1),
        d = o.column.getCanSort(),
        { handleCellRefsSet: f } = us();
    return (
        a.useEffect(
            () =>
                Fe(() => {
                    u(!0);
                }),
            [],
        ),
        c.jsx(bs, {
            ref: a.useCallback((e) => f(o.tablePart, e, o.rowIndex, o.index), [o.tablePart, o.rowIndex, o.index, f]),
            className: l(
                null == (t = o.column.columnDef.meta) ? void 0 : t.className,
                d && as.header === o.tablePart && fs.sortable,
                n,
            ),
            style: { ...r, width: o.size, opacity: i ? 1 : 0 },
            ...s,
            children: e.children,
        })
    );
}
const vs = Rn('Table', fs.base),
    ys = Rn('TableHeader', fs.header),
    ws = Rn('TableBody', fs.body),
    xs = Rn('TableFooter', fs.footer),
    Es = Rn('TableRow', fs.row),
    Ns = a.forwardRef(function (e, t) {
        return c.jsx(vs, { ref: t, ...e, children: e.children });
    });
((Ns.Header = ys),
    (Ns.Body = ws),
    (Ns.Footer = xs),
    (Ns.Row = Es),
    (Ns.Cell = function (e) {
        const t = e.cell.column.columnDef.meta;
        He(void 0 !== t, `meta data is not provided in the table columns config for ${e.cell.column.id}`);
        const { cell: n, ...r } = e;
        switch (t.column.behaviour) {
            case is.static:
                return c.jsx(_s, { ...r, cell: { ...n, size: t.column.size } });
            case is.contentResponsive:
                return c.jsx(hs, { ...r, cell: { ...n, minSize: t.column.minSize, maxSize: t.column.maxSize } });
            case is.screenResponsive:
                return c.jsx(gs, {
                    ...r,
                    cell: { ...n, size: t.column.size, minSize: t.column.minSize, maxSize: t.column.maxSize },
                });
            default:
                return (console.error(`Column behaviour for ${e.cell.column.id} is not provided`), null);
        }
    }),
    (Ns.behaviours = is));
const Ts = 'TruncateText_dcb41d92',
    Rs = a.forwardRef(function ({ text: e, tooltipParams: t, className: n, ...r }, o) {
        const s = Wt({ header: null == t ? void 0 : t.header, body: (null == t ? void 0 : t.body) || e }),
            i = a.useRef(null),
            [u, d] = a.useState(!1);
        const f = a.useCallback(() => {
            if (i.current) {
                const { scrollWidth: e, offsetWidth: t } = i.current;
                d(e > t);
            }
        }, []);
        return (
            a.useEffect(() => {
                u || s.onMouseLeave();
            }, [u, s]),
            It(f, [f]),
            Mt(f, [f]),
            zt(i, f),
            c.jsx('div', {
                ...r,
                ref: function (e) {
                    ((i.current = e), 'function' == typeof o ? o(e) : o && (o.current = e));
                },
                className: l(Ts, n),
                ...(u ? s : {}),
                children: e,
            })
        );
    }),
    Ss = { x24x24: '24x24', x32x32: '32x32', x48x48: '48x48' },
    Cs = {
        [Ss.x24x24]: 'library.gray_eye_24x24',
        [Ss.x32x32]: 'library.gray_eye_32x32',
        [Ss.x48x48]: 'library.gray_eye_48x48',
    },
    ks = {
        [Ss.x24x24]: { width: '24rem', height: '24rem' },
        [Ss.x32x32]: { width: '32rem', height: '32rem' },
        [Ss.x48x48]: { width: '48rem', height: '48rem' },
    },
    As = Rn('PlayerInfoAnonymizer', { element: Er }),
    Ps = a.forwardRef(function (
        { size: e, path: t = Cs[e], width: n = ks[e].width, height: r = ks[e].height, className: o, ...s },
        i,
    ) {
        return c.jsx(As, { ...s, ref: i, path: t, width: n, height: r, className: o });
    });
Ps.sizes = Ss;
const Is = {
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
    Ms = { x24x24: '24x24', x48x48: '48x48', x80x80: '80x80' },
    zs = {
        [Ms.x24x24]: { width: '24rem', height: '24rem' },
        [Ms.x48x48]: { width: '48rem', height: '48rem' },
        [Ms.x80x80]: { width: '80rem', height: '80rem' },
    },
    Ds = Rn('PlayerInfoBadge', { element: Er }),
    js = a.forwardRef(function (
        {
            size: e,
            badgeId: t,
            path: n = `library.badges.c_${e}.badge_${t}`,
            width: r = zs[e].width,
            height: o = zs[e].height,
            className: s,
            ...i
        },
        a,
    ) {
        return c.jsx(Ds, { ...i, ref: a, path: n, width: r, height: o, className: l(Is.badge, s) });
    });
js.sizes = Ms;
const Os = { x64x28: '64x28', x34x16: '34x16', x26x16: '26x16', x10x10: '10x10' },
    Bs = {
        [Os.x10x10]: 'library.premium_igr_ico',
        [Os.x26x16]: 'library.premium_igr_small',
        [Os.x34x16]: 'library.premium_small',
        [Os.x64x28]: 'library.premium_igr_big',
    },
    Ls = {
        [Os.x10x10]: { width: '10rem', height: '10rem' },
        [Os.x26x16]: { width: '26rem', height: '16rem' },
        [Os.x34x16]: { width: '34rem', height: '16rem' },
        [Os.x64x28]: { width: '64rem', height: '28rem' },
    },
    $s = Rn('PlayerInfoIgr', { element: Er }),
    Fs = a.forwardRef(function (
        { size: e, path: t = Bs[e], width: n = Ls[e].width, height: r = Ls[e].height, className: o, ...s },
        i,
    ) {
        return c.jsx($s, { ...s, ref: i, path: t, width: n, height: r, className: o });
    });
Fs.sizes = Os;
const Hs = { default: 'default', regular: 'regular', medium: 'medium', big: 'big' },
    Ws = { [Hs.default]: 'c_64x24', [Hs.regular]: 'c_68x28', [Hs.medium]: 'c_68x28', [Hs.big]: 'c_100x40' },
    Us = { [Hs.default]: 'c_24x24', [Hs.regular]: 'c_32x32', [Hs.medium]: 'c_48x48', [Hs.big]: 'c_80x80' },
    Ks = {
        [Hs.default]: { width: '24rem', height: '24rem', marginLeft: '-15rem' },
        [Hs.regular]: { width: '32rem', height: '32rem', marginLeft: '-19rem' },
        [Hs.medium]: { width: '48rem', height: '48rem', marginLeft: '-32rem' },
        [Hs.big]: { width: '80rem', height: '80rem', marginLeft: '-25rem' },
    },
    Vs = Rn('StripeBadgeIcon', { element: Er }),
    Gs = a.forwardRef(function (
        {
            size: e = Hs.default,
            badgeId: t,
            stripeExists: n,
            path: r = `library.badges.${Us[e]}.badge_${t}`,
            width: o = Ks[e].width,
            height: s = Ks[e].height,
            className: i,
            ...a
        },
        l,
    ) {
        const u = Ks[e];
        return c.jsx(Vs, {
            ...a,
            ref: l,
            path: r,
            width: o,
            height: s,
            style: n ? { marginLeft: u.marginLeft } : void 0,
            className: i,
        });
    }),
    Ys = {
        [Hs.default]: { width: '64rem', height: '24rem' },
        [Hs.regular]: { width: '68rem', height: '24rem' },
        [Hs.medium]: { width: '68rem', height: '28rem' },
        [Hs.big]: { width: '100rem', height: '40rem' },
    },
    qs = Rn('StripeIcon', { element: Er }),
    Xs = a.forwardRef(function (
        {
            size: e = Hs.default,
            badgeId: t,
            stripeExists: n,
            path: r = `library.badges.strips.${Ws[e]}.strip_${t}`,
            width: o = Ys[e].width,
            height: s = Ys[e].height,
            className: i,
            ...a
        },
        u,
    ) {
        return n ? c.jsx(qs, { ...a, ref: u, path: r, width: o, height: s, className: l(Is.stripeBadge, i) }) : null;
    }),
    Qs = Rn('PlayerInfoStripe', Is.stripe),
    Zs = a.forwardRef(function ({ size: e = Hs.default, badgeId: t, classNames: n, className: r, ...o }, s) {
        const i = C.resolve('images'),
            a = Ws[e],
            u = i.has(`library.badges.strips.${a}.strip_${t}`);
        return c.jsxs(Qs, {
            ...o,
            ref: s,
            className: l(u && Is[`stripe__${e}`], r),
            children: [
                c.jsx(Xs, { size: e, badgeId: t, stripeExists: u, className: null == n ? void 0 : n.stripe }),
                c.jsx(Gs, { size: e, badgeId: t, stripeExists: u, className: null == n ? void 0 : n.badge }),
            ],
        });
    });
Zs.sizes = Hs;
const Js = Rn('AccountInfo', Is.base),
    ei = Rn('AccountInfoWrapper', Is.base),
    ti = a.forwardRef((e, t) => c.jsx(Js, { ref: t, ...e }));
((ti.Name = function ({ size: e, className: t, children: n }) {
    return c.jsx('div', { className: l(Is.name, e && Is[`name__${e}`], t), children: n });
}),
    (ti.ClanTag = function ({ size: e, className: t, children: n, ...r }) {
        return c.jsx('div', { ...r, className: l(Is.clanTag, e && Is[`clanTag__${e}`], t), children: n });
    }),
    (ti.Badge = js),
    (ti.IgrIcon = Fs),
    (ti.AnonymizerIcon = Ps),
    (ti.Stripe = Zs),
    (ti.Wrapper = ei));
const ni = {
        base__x120x96: 'VehicleImage_base__x120x96_32ca06f1',
        base__x190x152: 'VehicleImage_base__x190x152_41379c70',
        base__x380x304: 'VehicleImage_base__x380x304_274f87fe',
    },
    ri = { x120x96: 'x120x96', x190x152: 'x190x152', x380x304: 'x380x304' },
    oi = Rn('VehicleImage', {
        element: Er,
        className: ni.base,
        cva: {
            variants: {
                size: {
                    [ri.x120x96]: ni.base__x120x96,
                    [ri.x190x152]: ni.base__x190x152,
                    [ri.x380x304]: ni.base__x380x304,
                },
            },
        },
    });
function si({ size: e = ri.x380x304, ...t }) {
    return c.jsx(oi, { ...t, size: e, path: `vehicle.${e}.tank_empty` });
}
const ii = a.forwardRef(function ({ size: e = ri.x380x304, name: t, width: n, height: r, className: o, ...s }, i) {
    const a = C.resolve('images'),
        l = `vehicle.${e}.${Ro(t)}`;
    return a.has(l)
        ? c.jsx(oi, { ...s, ref: i, size: e, className: o, path: l, width: n, height: r })
        : (console.warn(`Fail to retrieve icon maps/icons/vehicle/${e}/${Ro(t)}`),
          c.jsx(si, { size: e, className: o, width: n, height: r }));
});
((ii.UnknownVehicleImage = si), (ii.size = ri));
const ai = 'VehicleLevel_3c938122',
    ci = { arabic: 'arabic', roman: 'roman' };
const li = a.forwardRef(function ({ value: e, numberType: t, ...n }, r) {
    const o = (function (e, t) {
            return e || (t ? ci.arabic : ci.roman);
        })(
            t,
            (function () {
                const e = C.resolve('strings');
                return Gt.includes(e.readOrEmpty('settings.LANGUAGE_CODE'));
            })(),
        ),
        s =
            o === ci.roman
                ? (function (e) {
                      if (e <= 10) return qe[e] ?? String(e);
                      let t = '';
                      for (let n = Ye.length - 1; n >= 0; n--) {
                          let r = Ye[n];
                          for (; void 0 !== r && e >= r; ) ((t += Ge[n]), (e -= r));
                      }
                      return t;
                  })(e)
                : e;
    return c.jsx('div', { ...n, 'data-name': 'VehicleLevel', className: l(ai, n.className), ref: r, children: s });
});
li.numberTypes = ci;
const ui = { x24x24: 'x24x24', x48x48: 'x48x48', x64x64: 'x64x64', x96x96: 'x96x96' },
    di = { x24x24: 'x64x64', x48x48: 'x96x96', x64x64: 'x96x96', x96x96: 'x96x96' },
    fi = {
        [No.lightTank]: 'light_tank',
        [No.mediumTank]: 'medium_tank',
        [No.heavyTank]: 'heavy_tank',
        [No.SPG]: 'spg',
        [No['AT-SPG']]: 'tank_destroyer',
    },
    mi = {
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
    hi = a.forwardRef(function ({ type: e, size: t = ui.x48x48, premium: n = !1, fit: r = 'contain', ...o }, s) {
        const i = wt(ui[t], di[t]);
        return c.jsx(Er, {
            ...o,
            ref: s,
            fit: r,
            className: l(mi.base, n ? mi[`base__premium__${t}`] : mi[`base__${t}`], o.className),
            path: `ui_kit.vehicle_type.${i}.${n ? 'premium_' : ''}${K(fi[e])}_${i}`,
        });
    });
function pi(e) {
    return 'string' == typeof e && e in st;
}
((hi.types = No), (hi.sizes = ui));
const gi = 'Tooltip_decorator_b3486d4e',
    bi = Rn('Base', 'Tooltip_6d997cee'),
    _i = Rn('Decorator', gi),
    vi = a.forwardRef(function ({ children: e, ...t }, n) {
        const r = a.useRef(null);
        return (
            zt(r, (e) => {
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
            c.jsx(bi, {
                ...t,
                ref: function (e) {
                    ((r.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                children: e,
            })
        );
    });
vi.Decorator = _i;
export {
    Ve as $,
    fo as A,
    mo as B,
    Eo as C,
    I as D,
    So as E,
    Jn as F,
    Co as G,
    tt as H,
    Er as I,
    _n as J,
    Ut as K,
    It as L,
    En as M,
    he as N,
    Tt as O,
    Io as P,
    Bo as Q,
    bt as R,
    it as S,
    Nr as T,
    Fo as U,
    Tn as V,
    Uo as W,
    Ho as X,
    We as Y,
    ho as Z,
    xt as _,
    vn as a,
    or as a0,
    Z as a1,
    J as a2,
    Ot as a3,
    ss as a4,
    Ce as a5,
    nn as a6,
    Ns as a7,
    as as a8,
    us as a9,
    pe as aA,
    vi as aB,
    jt as aa,
    At as ab,
    Rr as ac,
    ds as ad,
    is as ae,
    st as af,
    ti as ag,
    Rs as ah,
    Ht as ai,
    Xe as aj,
    ii as ak,
    li as al,
    hi as am,
    me as an,
    Vt as ao,
    Mt as ap,
    Fe as aq,
    Se as ar,
    No as as,
    pi as at,
    fe as au,
    vr as av,
    nr as aw,
    Xt as ax,
    kn as ay,
    ge as az,
    Wt as b,
    gn as c,
    Rn as d,
    B as e,
    Bt as f,
    Jt as g,
    H as h,
    pn as i,
    Ke as j,
    lo as k,
    Qr as l,
    De as m,
    Le as n,
    Be as o,
    He as p,
    xe as q,
    C as r,
    je as s,
    go as t,
    wn as u,
    yt as v,
    zt as w,
    $e as x,
    Oe as y,
    Me as z,
};
