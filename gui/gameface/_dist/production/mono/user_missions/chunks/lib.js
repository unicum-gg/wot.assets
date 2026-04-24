import {
    c as e,
    a as t,
    b as n,
    d as r,
    r as s,
    j as a,
    e as o,
    o as i,
    f as c,
    u as l,
    g as u,
    h as d,
    R as f,
    i as m,
    k as h,
    l as _,
    m as p,
    n as g,
    p as b,
    C as x,
} from './vendor.js';
const w = e();
function y(e, t) {
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
class E {
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
                        if ('object' == typeof e?.[t]) return e[t];
                    }, e);
                    if (!r) return;
                    return 'function' == typeof r[t] ? r[t]() : void 0;
                }
                throw new Error('R class with images field is not defined');
            })(e.startsWith('R.images') ? window : this.root, r);
        return void 0 === s ? ('silent' !== n && v(`Resource not found: ${r}`, n), t()) : s;
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
const T = { integral: 0, gold: 1 },
    N = { fractional: 0, woZeroDigits: 1 },
    C = Object.keys(T),
    P = Object.keys(N);
const M = { full: S.FullTime, short: S.ShortTime };
const k = {
    isNumberFormat: function (e) {
        return e in T;
    },
    formatNumber: function (e, t) {
        return window.formatters.getNumberFormat(t, T[e]);
    },
    numberFormats: C,
    isRealFormat: function (e) {
        return e in N;
    },
    formatReal: function (e, t, n = 2) {
        return window.formatters.getRealFormat(t, N[e], n);
    },
    realFormats: P,
    formatDateTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    dateTimeFormats: S,
    formatTime: function (e, t, n = !0) {
        return window.regionalDateTime.getRegionalDateTime(t, e, n);
    },
    timeFormats: Object.keys(M),
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
function B(e, t, n) {
    const r = e.split('.'),
        s = r[r.length - 1];
    if (!s) return;
    const a = r.slice(0, -1).reduce((e, t) => {
        if ('object' == typeof e?.[t]) return e[t];
    }, n);
    return a && 'function' == typeof a[s] ? (t ? a[s](t) : a[s]()) : void 0;
}
class D {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : y(this.prefix, e),
            s = B(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== n && v(`Resource not found: ${r}`, n), t()) : s;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : y(this.prefix, e),
            n = B(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, n, r = 'silent') {
        const s = e.startsWith('R.strings') ? e : y(this.prefix, e),
            a = B(s, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === a ? ('silent' !== r && v(`Resource not found: ${s}`, r), n()) : a;
    }
    pluralOrEmpty(e, t, n = 'warn') {
        return this.pluralOr(e, t, () => '', n);
    }
}
class A {
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
                        if ('object' == typeof e?.[t]) return e[t];
                    }, e);
                    if (!r) return;
                    return 'function' == typeof r[t] ? r[t]() : void 0;
                }
                throw new Error('R class with videos field is not defined');
            })(e.startsWith('R.videos') ? window : this.root, r);
        return void 0 === s ? ('silent' !== n && v(`Resource not found: ${e}`, n), t()) : s;
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
w.register({
    strings: r(() => new D()).singleton(),
    images: r(() => new E(window.R.images.gui.maps.icons)).singleton(),
    atlases: r(() => new E(window.R.atlases)).singleton(),
    videos: r(() => new A(window.R.videos)).singleton(),
    views: n(
        class {
            read(e) {
                return e(window.R.views);
            }
        },
    ).singleton(),
    aliases: n(
        class {
            read(e) {
                return e(window.R.aliases);
            }
        },
    ).singleton(),
    sounds: n(
        class {
            play(e) {
                const t = window.R.sounds[e];
                'function' == typeof t
                    ? engine.call('PlaySound', t.apply(window.R.sounds))
                    : v(`Sound not found: ${e}`, 'warn');
            }
        },
    ).singleton(),
    langCode: t(R.strings.settings.LANGUAGE_CODE()),
    intl: t(k),
});
const I = {
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => --e * e * e + 1,
    easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 + --e * e * e * e * e,
};
function O(e) {
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
const j = Symbol('Duration');
function L(e) {
    return 'object' == typeof e && null !== e && e[j] === j;
}
function z(e) {
    return { [j]: j, value: e, unit: 'millis' };
}
const $ = z(0);
function F(e) {
    return { [j]: j, value: e, unit: 'seconds' };
}
const U = {
        millis: (e) => e,
        seconds: (e) => 1e3 * e,
        minutes: (e) => 1e3 * e * 60,
        hours: (e) => 1e3 * e * 60 * 60,
        days: (e) => 1e3 * e * 60 * 60 * 24,
        weeks: (e) => 1e3 * e * 60 * 60 * 24 * 7,
    },
    H = (e) => e / 1e3,
    G = (e) => e / 1e3 / 60,
    V = (e) => e / 1e3 / 60 / 60,
    W = (e) => e / 1e3 / 60 / 60 / 24,
    q = (e) => e / 1e3 / 60 / 60 / 24 / 7;
function Y(e) {
    return (0, U[e.unit])(e.value);
}
function X(e) {
    const t = Y(e);
    return H(t);
}
function Q() {
    return z(Date.now());
}
const K = O(function (e, t) {
        return z(Y(e) + Y(t));
    }),
    Z = O(function (e, t) {
        return z(Y(e) - Y(t));
    }),
    J = O(function (e, t) {
        return Y(e) - Y(t);
    }),
    ee = O(function (e, t) {
        return Y(e) > Y(t);
    }),
    te = O(function (e, t) {
        return Y(e) < Y(t);
    }),
    ne = {
        DD: (e) => Math.floor(W(e)).toString().padStart(2, '0'),
        D: (e) => Math.floor(W(e)).toString(),
        WW: (e) => Math.floor(q(e)).toString().padStart(2, '0'),
        W: (e) => Math.floor(q(e)).toString(),
        hh: (e) =>
            Math.floor(V(e) % 24)
                .toString()
                .padStart(2, '0'),
        mm: (e) =>
            Math.floor(G(e) % 60)
                .toString()
                .padStart(2, '0'),
        ss: (e) =>
            Math.floor(H(e) % 60)
                .toString()
                .padStart(2, '0'),
        h: (e) => Math.floor(V(e) % 24).toString(),
        m: (e) => Math.floor(G(e) % 60).toString(),
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
function re(e, t) {
    const n = Y(e);
    return t.map((e) => ne[e](n));
}
function se(e) {
    return e.replaceAll('-', '_');
}
function ae(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
function oe(e) {
    return e
        ? (function (e) {
              return window.systemLocale.toUpperCase(e);
          })(e.charAt(0)) + e.slice(1)
        : '';
}
function ie(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function ce(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const le = ie('clientResized'),
    ue = ie('self.onScaleUpdated'),
    de = ie('clientMinimized'),
    fe = { down: ie('mousedown'), up: ie('mouseup'), move: ie('mousemove') };
const me = (function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && ce(!1);
    }
    function n() {
        e.enabled && ce(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n),
                  ce(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : ce(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, n) => (
                (t[n] = (function (t) {
                    return (n) => {
                        e.listeners += 1;
                        const s = `mouse${t}`,
                            a = fe[t]((e) => n([e, 'outside']));
                        function o(e) {
                            n([e, 'inside']);
                        }
                        return (
                            window.addEventListener(s, o),
                            r(),
                            () => {
                                (a(), window.removeEventListener(s, o), (e.listeners -= 1), r());
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
            e.enabled && ce(!0);
        },
        disableOutside() {
            e.enabled && ce(!1);
        },
    };
})();
function he(e) {
    engine.call('PlaySound', e);
}
const _e = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    pe = { ...Object.keys(_e).reduce((e, t) => ((e[t] = () => he(_e[t])), e), {}), sound: he },
    ge = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    be = {
        onTextureFrozen: ie('self.onTextureFrozen'),
        onTextureReady: ie('self.onTextureReady'),
        onDomBuilt: ie('self.onDomBuilt'),
        onLoaded: ie('self.onLoaded'),
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
        onDisplayChanged: ie('self.onShowingStatusChanged'),
        onFocusUpdated: ie('self.onFocusChanged'),
        onExternalPaddingsUpdated: ie('self.onPaddingsUpdated'),
        children: {
            onAdded: ie('children.onAdded'),
            onLoaded: ie('children.onLoaded'),
            onRemoved: ie('children.onRemoved'),
            onAttached: ie('children.onAttached'),
            onTextureReady: ie('children.onTextureReady'),
            onRequestPosition: ie('children.requestPosition'),
        },
    },
    xe = 1,
    we = 32;
function ye(e) {
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
            const e = ye(r);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: n, ...e });
        }
        return t;
    },
    Ee = (e, t) => {
        const n = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...s } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: n, type: e, ...s, arguments: ve(r) })
                : viewEnv.handleViewEvent({ __Type: n, type: e, ...s });
        }
        return viewEnv.handleViewEvent({ __Type: n, type: e });
    },
    Re = new Map(),
    Se = {
        closeView() {
            Ee(we);
        },
        tooltip: {
            open(e, t, n = 0, r) {
                (Ee(xe, { contentID: t, decoratorID: n, targetID: e, isMouseEvent: !0, on: !0, args: r }),
                    Re.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, n = 0) {
                (Ee(xe, { contentID: t, decoratorID: n, targetID: e, on: !1 }), Re.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(Re.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
    };
function Te(e) {
    return viewEnv.remToPx(e);
}
function Ne(e, t, n, r, s, a, o, i, c) {
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
            return a(s(r(n(t(e)))));
        case 7:
            return o(a(s(r(n(t(e))))));
        case 8:
            return i(o(a(s(r(n(t(e)))))));
        case 9:
            return c(i(o(a(s(r(n(t(e))))))));
        default: {
            let e = arguments[0];
            for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
            return e;
        }
    }
}
Object.keys(ge).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === ge[t]), e), {});
class Ce {
    listeners = new Set();
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
const Pe = (e) => (0 === e ? window : window.subViews.get(e));
function Me(
    { initializer: e = !0, rootId: t = 0, getRoot: n = Pe, context: r = 'model' } = {},
    { name: s = 'DataLayer' } = {},
) {
    const a = new Map(),
        o = { subscribersNotified: new Ce() },
        i = engine.whenReady.then(() => {
            function e(e, t, n) {
                (n.forEach((n) => {
                    const r = a.get(n);
                    void 0 !== r && r(e, t);
                }),
                    o.subscribersNotified.emit());
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
            throw new Error(`Failure get root of ${s}. Root id: ${t}. Context: ${r}`);
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
        } catch (a) {
            throw new Error(`Failure readByPath in ${s}. Root id: ${t}. Context: ${r}:\n${a}\n`);
        }
    };
    function u(e) {
        viewEnv.removeDataChangedCallback(e, t) ? a.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (n, s) => {
            const o = (function (e, t, n) {
                return viewEnv.addDataChangedCallback(e, t, n);
            })('string' == typeof s ? `${r}.${s}` : r, t, !0);
            return (a.set(o, n), e && n(l(s), []), o);
        },
        readByPath: l,
        readSafeByPath: (e) => {
            const t = c();
            return 'string' != typeof e || 0 === e.length
                ? t
                : e.split('.').reduce((e, t) => {
                      const n = e?.[t];
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
            if (0 === t || window.subViews.ids().includes(t)) for (const e of a.keys()) u(e);
            i.then((e) => e());
        },
        unsubscribe: u,
        events: o,
    };
}
function ke(e, t) {
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
const Be = (e, t, n) => (n < e ? e : n > t ? t : n);
function De() {}
function Ae() {
    return !1;
}
class Ie {
    _disposes = new Set();
    add(e) {
        return (this._disposes.add(e), this);
    }
    remove(e) {
        return (this._disposes.delete(e), this);
    }
    dispose = () => {
        for (const e of this._disposes) e();
    };
}
function Oe(e, t, n, r) {
    return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
function je(e, t) {
    return e.reduce((e, n) => ({ ...e, [`${t}_${n}`.toUpperCase()]: `${t}${n}` }), {});
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((o.prototype.append = function (e, t) {
                ((e = s(e)), (t = a(t)));
                var n = this.map[e];
                (n || ((n = []), (this.map[e] = n)), n.push(t));
            }),
                (o.prototype.delete = function (e) {
                    delete this.map[s(e)];
                }),
                (o.prototype.get = function (e) {
                    var t = this.map[s(e)];
                    return t ? t[0] : null;
                }),
                (o.prototype.getAll = function (e) {
                    return this.map[s(e)] || [];
                }),
                (o.prototype.has = function (e) {
                    return this.map.hasOwnProperty(s(e));
                }),
                (o.prototype.set = function (e, t) {
                    this.map[s(e)] = [a(t)];
                }),
                (o.prototype.forEach = function (e) {
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
                (self.Headers = o),
                (self.Request = d),
                (self.Response = h),
                (self.fetch = function (t, n) {
                    var s;
                    return (
                        (s = d.prototype.isPrototypeOf(t) && !n ? t : new d(t, n)),
                        new fetch.Promise(function (t, n) {
                            var a = (function () {
                                return r && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function o() {
                                if (4 === a.readyState) {
                                    var e = 1223 === a.status ? 204 : a.status;
                                    if (e < 100 || e > 599) n(new TypeError('Network request failed'));
                                    else {
                                        var r = {
                                                status: e,
                                                statusText: a.statusText,
                                                headers: m(a),
                                                url:
                                                    'responseURL' in a
                                                        ? a.responseURL
                                                        : /^X-Request-URL:/m.test(a.getAllResponseHeaders())
                                                          ? a.getResponseHeader('X-Request-URL')
                                                          : void 0,
                                            },
                                            s = 'response' in a ? a.response : a.responseText;
                                        t(new h(s, r));
                                    }
                                }
                            }
                            ('cors' === s.credentials && (a.withCredentials = !0),
                                (a.onreadystatechange = o),
                                self.usingActiveXhr ||
                                    ((a.onload = o),
                                    (a.onerror = function () {
                                        n(new TypeError('Network request failed'));
                                    })),
                                a.open(s.method, s.url, !0),
                                'responseType' in a && e && (a.responseType = 'blob'),
                                s.headers.forEach(function (e, t) {
                                    t.forEach(function (t) {
                                        a.setRequestHeader(e, t);
                                    });
                                }),
                                a.send(void 0 === s._bodyInit ? null : s._bodyInit));
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
        function a(e) {
            return ('string' != typeof e && (e = e.toString()), e);
        }
        function o(e) {
            this.map = {};
            var t = this;
            e instanceof o
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
            var r, s;
            if (
                ((t = t || {}),
                (this.url = e),
                (this.credentials = t.credentials || 'omit'),
                (this.headers = new o(t.headers)),
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
            var t = new o();
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
                (this.headers = t.headers instanceof o ? t.headers : new o(t.headers)),
                (this.url = t.url || ''));
        }
    })());
const Le = {
    NONE: 'NONE',
    ...((ze = [
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
    ze.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {})),
    ...je(
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
    ...je(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...je(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...je(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...je(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...je(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...je(['Up', 'Down'], 'Page'),
    ...je(['Left', 'Right'], 'Bracket'),
};
var ze;
function $e(e) {
    return 'number' == typeof e
        ? (function (e) {
              return window.systemInput.getKeyName(e);
          })(e)
        : e;
}
function Fe(e) {
    return (
        !1 ===
        (function (e) {
            return null == e;
        })(e)
    );
}
function Ue(e, t) {
    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : e[t]?.value;
}
new Set(Object.values(Le));
const He = Ue;
function Ge(e) {
    return e && 'object' == typeof e && 'value' in e && e.constructor?.name.includes('ArrayItem') ? e?.value : e;
}
function Ve(e, t) {
    return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(e?.value, n, r));
}
function We(e) {
    return Array.isArray(e) ? e : e.map((e) => e?.value);
}
function qe(e, t) {
    for (let n = 0; n < e.length; n++) {
        const r = Ge(e[n]);
        if (t(r, n, e)) return r;
    }
}
function Ye(e, t, n) {
    const r = [];
    for (let s = 0; s < e.length; s++) {
        const a = t(He(e, s), s, e);
        n(a, s, e) && r.push(a);
    }
    return r;
}
function Xe(e, t) {
    return Ye(e, t, Fe);
}
function Qe(e, t) {
    for (let n = 0; n < e.length; n++) {
        t(He(e, n), n, e);
    }
}
const Ke = (e) => {
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
function Ze(e, t) {
    e || console.error(t || 'Assertion failed');
}
Ze.log = function (e, t) {
    e || console.error(t || 'Assertion failed');
};
const Je = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    et = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
    tt = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
['ko', 'no'].includes(w.resolve('langCode'));
class nt {
    items = [];
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
function rt(e) {
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
const st = {
    zh_cn: rt,
    zh_sg: rt,
    zh_tw: rt,
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
        const t = [],
            n = e
                .replace(/&nbsp;/g, ' ')
                .matchAll(
                    /[【「(（『"《]?[\u0E00-\u0E7F%](?:[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E。!?,.:、…・/ー—–!%+?）)】」"》』]+)?|[「【(（『《"]?\d+(?:,\d{3})*(?:-\d+(?:,\d{3})*)?(?:\s*[a-zA-Z\u0E00-\u0E7F/%]+)?(?:[。.,，、:;：；!?）)】」"》・%)、]+)?|[「【(（『《"]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?"》】」）)』]+)?|[\u00A0 ]|[^\s]/gu,
                );
        for (const [r] of n)
            /^\s+$/.test(r)
                ? t.length
                    ? (t[t.length - 1] += r)
                    : t.push(r)
                : 1 === t.length && t[0]?.startsWith('  ')
                  ? (t[0] = ' ' + r)
                  : t.push(r);
        return t;
    },
};
function at(e) {
    return e.split(' ');
}
const ot = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko', 'th']);
const it = s.createContext(void 0);
const ct = 'extraSmall',
    lt = {
        extraSmall: { weight: 0, name: ct, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: 'small', className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: 'medium', className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: 'large', className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: { weight: 4, name: 'extraLarge', className: 'mediaExtraLarge', width: 2560, height: 1440 },
    };
var ut,
    dt,
    ft,
    mt =
        (((ut = mt || {})[(ut.Small = lt.small.width)] = 'Small'),
        (ut[(ut.Medium = lt.medium.width)] = 'Medium'),
        (ut[(ut.Large = lt.large.width)] = 'Large'),
        (ut[(ut.ExtraLarge = lt.extraLarge.width)] = 'ExtraLarge'),
        ut),
    ht =
        (((dt = ht || {})[(dt.Small = lt.small.width)] = 'Small'),
        (dt[(dt.Medium = lt.medium.width)] = 'Medium'),
        (dt[(dt.Large = lt.large.width)] = 'Large'),
        (dt[(dt.ExtraLarge = lt.extraLarge.width)] = 'ExtraLarge'),
        dt),
    _t =
        (((ft = _t || {})[(ft.Small = lt.small.height)] = 'Small'),
        (ft[(ft.Medium = lt.medium.height)] = 'Medium'),
        (ft[(ft.Large = lt.large.height)] = 'Large'),
        (ft[(ft.ExtraLarge = lt.extraLarge.height)] = 'ExtraLarge'),
        ft);
const pt = Object.values(lt);
function gt(e, t) {
    const n = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        s = new Set(n.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...s])).join(' ');
}
const bt = () => {
    const e = (function (e = 'px') {
        return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
    })('rem');
    return (function (e, t, n) {
        const r = pt.reduce(
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
            a = r[s],
            o = a.names[a.names.length - 1] ?? ct,
            i = lt[o],
            c = r.width.names,
            l = r.height.names,
            u = c[c.length - 1] ?? ct,
            d = l[l.length - 1] ?? ct,
            f = { width: lt[u].width, height: lt[d].height };
        return {
            mediaClass: gt(s, r),
            breakpoint: i,
            screenWidthRem: e,
            screenHeightRem: t,
            breaks: a.names,
            sides: f,
            mediaSize: i.width,
            mediaWidth: f.width,
            mediaHeight: f.height,
            upscale: n > 1,
        };
    })(e.width, e.height, Te(1));
};
function xt({ children: e }) {
    const [t, n] = s.useState(bt);
    return (
        s.useLayoutEffect(() => {
            function e() {
                n(bt);
            }
            e();
            const t = le(e),
                r = ue(e);
            return () => {
                (t(), r());
            };
        }, []),
        a.jsx(it.Provider, { value: t, children: e })
    );
}
function wt() {
    return (function () {
        const e = s.useContext(it);
        if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
        return e;
    })();
}
function yt({ children: e, className: t, ...n }) {
    const { mediaClass: r, upscale: s } = wt();
    return a.jsx('div', { className: o(t, 'media-wrapper', r, s && 'media-upscale'), ...n, children: e });
}
function vt({ children: e, ...t }) {
    return a.jsx(xt, { children: a.jsx(yt, { ...t, children: e }) });
}
function Et(e, t) {
    return (function (e, t, n) {
        return n ? e.breaks.reduce((e, t) => (n[t] ? { ...e, ...n[t] } : e), t) : t;
    })(wt(), e, t);
}
const Rt = (e) => {
    const t = s.useRef(void 0);
    return (
        s.useEffect(() => {
            t.current = e;
        }, [e]),
        t.current
    );
};
function St(e, t = []) {
    const n = s.useRef(!1);
    return s.useCallback(() => {
        n.current || (e(), (n.current = !0));
    }, t);
}
const Tt = [];
function Nt(e) {
    const t = s.useRef(e);
    return (
        s.useLayoutEffect(() => {
            t.current = e;
        }),
        s.useCallback((...e) => (0, t.current)(...e), Tt)
    );
}
const Ct = (e, t, n = !0) => {
    const r = Nt((e) => {
        const n = e[0];
        n && t(n);
    });
    s.useEffect(() => {
        if (!e.current || !n) return;
        const t = new ResizeObserver((e) => r(e));
        return (
            t.observe(e.current),
            () => {
                t.disconnect();
            }
        );
    }, [r, n, e]);
};
function Pt() {
    return s.useMemo(() => {
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
function Mt(e, t, n) {
    return s.useEffect(() => {
        if (n) return e.on(t, n);
    }, [e, t, n]);
}
function kt(e) {
    s.useEffect(e, []);
}
function Bt(e) {
    s.useEffect(() => e, []);
}
function Dt() {
    const e = s.useRef(!0);
    return (
        kt(() => {
            e.current = !1;
        }),
        e.current
    );
}
const At = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new nt();
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
                if (e === Le.NONE) return Ae;
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
    It = s.createContext(void 0);
function Ot(e, t, n, r = !1) {
    const a = $e(e),
        o = Nt((e) => {
            viewEnv.isEventHandled() || (n(e), viewEnv.setEventHandled(), r && e.stopPropagation());
        }),
        i = (function () {
            const e = s.useContext(It);
            if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
            return e;
        })(),
        c = s.useMemo(() => i[t].register(a, o), [i, t, a, o]);
    s.useEffect(() => c, [c]);
}
function jt(e, t, n = !1) {
    return Ot($e(e), 'keydown', t, n);
}
function Lt(e) {
    const t = s.useMemo(At, []),
        n = s.useMemo(At, []);
    s.useEffect(() => {
        function e(e) {
            t.takeCurrent(e.code)?.(e);
        }
        function r(e) {
            n.takeCurrent(e.code)?.(e);
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
    return a.jsx(It.Provider, { value: r, children: e.children });
}
function zt(e) {
    return jt(Le.ESCAPE, e);
}
function $t() {
    return (function (e = Le.ESCAPE) {
        return jt($e(e), Se.closeView, !0);
    })(Le.ESCAPE);
}
function Ft() {
    const e = s.useRef(0);
    return (
        Bt(() => {
            window.cancelAnimationFrame(e.current);
        }),
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
function Ut(e, t, n) {
    const r = s.useMemo(
        () =>
            (function (e, t, n, r) {
                let s,
                    a = !1,
                    o = 0;
                function i() {
                    s && clearTimeout(s);
                }
                function c(...c) {
                    const l = this,
                        u = Date.now() - o;
                    function d() {
                        ((o = Date.now()), n.apply(l, c));
                    }
                    a ||
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
                    (c.cancel = function () {
                        (i(), (a = !0));
                    }),
                    c
                );
            })(n, e),
        t,
    );
    return (s.useEffect(() => r.cancel, [r]), r);
}
function Ht(e) {
    const { start: t, until: n, tick: r } = s.useMemo(() => ({ ...e, start: e.start ?? Q() }), [e]),
        [a, o] = s.useState({ remaining: Z(n, t), until: n, done: !1 });
    return (
        s.useEffect(() => {
            let e = 0;
            const t = () => {
                const s = Z(n, Q()),
                    a = J(s, r) <= 0;
                if ((o({ remaining: s, done: a, until: n }), a)) return;
                const i = Y(s);
                e = window.setTimeout(t, Math.min(Y(r), i));
            };
            return (
                t(),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [n, r]),
        a
    );
}
const Gt = new WeakMap(),
    Vt = 'await',
    Wt = 'idle',
    qt = 'display';
function Yt({ resId: e = 0, contentId: t, decoratorId: n, disabled: r, args: a, showDelay: o = 400 }) {
    const i = s.useRef({ status: Wt, resId: e, timeoutId: 0 }),
        [c, l] = s.useMemo(() => {
            let s = null;
            function c() {
                r ||
                    ((i.current.status = Vt),
                    window.clearTimeout(i.current.timeoutId),
                    (i.current.timeoutId = window.setTimeout(l, o)));
            }
            function l() {
                ((i.current.status = qt), Se.tooltip.open(e, t, n, a), s && Gt.set(s, d));
            }
            function u() {
                if (
                    (window.clearTimeout(i.current.timeoutId),
                    i.current.status === qt && Se.tooltip.hide(e, t, n),
                    (i.current.status = Wt),
                    s)
                ) {
                    Gt.delete(s);
                    let e = s.parentElement;
                    for (; e && !Gt.has(e); ) e = e.parentElement;
                    if (e) {
                        Gt.get(e).show();
                    }
                    s = null;
                }
            }
            const d = {
                hide: u,
                show: l,
                rerun: function () {
                    i.current.status !== Wt && (r ? d.hide() : c());
                },
            };
            return [
                d,
                {
                    onMouseEnter: (e) => {
                        ((s = e?.currentTarget), c());
                    },
                    onMouseLeave: r ? De : u,
                    onClick: r ? De : u,
                },
            ];
        }, [a, t, n, r, e, o]);
    return (
        s.useEffect(() => {
            c.rerun();
        }, [c]),
        Bt(Nt(c.hide)),
        l
    );
}
function Xt({ alert: e, body: t, header: n, note: r, hasHtmlContent: a, disabled: o }) {
    const i = w.resolve('views');
    return Yt({
        disabled: o,
        contentId: i.read((e) =>
            a
                ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
        ),
        decoratorId: i.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
        args: s.useMemo(() => ({ body: t, header: n, note: r, alert: e }), [e, t, n, r]),
    });
}
function Qt(e, t, n) {
    return Yt({
        ...n,
        disabled: 'string' != typeof e || n?.disabled,
        contentId: w.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
        args: s.useMemo(() => ({ type: e, params: JSON.stringify(t), resId: t.resId }), [t, e]),
    });
}
const Kt = ['ko', 'no'];
const Zt = {
    click: Jt('play'),
    'hot-key': Jt('play'),
    'mouse-enter': Jt('highlight'),
    increaseAmount: Jt('cons_ammo_single_plus'),
    decreaseAmount: Jt('cons_ammo_single_minus'),
    increaseAmountRoll: Jt('cons_ammo_roll_plus'),
    decreaseAmountRoll: Jt('cons_ammo_roll_minus'),
    close: Jt('cancelcloseno'),
    'show-context-menu': Jt('tabb'),
    progressSimple: Jt('gui_hangar_progressbar_simple'),
    increaseDelta: Jt('gui_hangar_progressbar_delta_increase'),
    decreaseDelta: Jt('gui_hangar_progressbar_delta_decrease'),
    increaseDeltaMax: Jt('gui_hangar_progressbar_delta_max'),
    pointerGrab: Jt('gui_hangar_progressbar_pointer_grab'),
    pointerDrag: Jt('gui_hangar_progressbar_pointer_drag'),
};
function Jt(e) {
    return () => {
        pe.sound(e);
    };
}
const en = s.createContext(null);
function tn({ severity: e = 'warn', overrides: t, silent: n = !1, children: r }) {
    const o = s.useMemo(() => ({ ...Zt, ...t }), [t]),
        i = s.useMemo(
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
    return a.jsx(en.Provider, { value: i, children: r });
}
function nn() {
    const e = s.useContext(en);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
function rn() {
    return s.useContext(en);
}
const sn = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    an = new Set(['number', 'string', 'boolean', 'bigint']),
    on = new Set(['Dict']);
function cn(e, { shallow: t = !0, depth: n = 0, maxDepth: r = 32 } = {}) {
    const s = e,
        a = typeof e;
    if (n > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (sn.has(a)) return s;
    if (null === s) return s;
    const o = { depth: n + 1, maxDepth: r };
    if (Array.isArray(s)) return s.map((e) => cn(e, o));
    if ('object' === a) {
        const r = s.constructor?.name ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => cn(e, o));
        if ('CoherentArrayProxy' === r) return e.map((e) => cn(e.value, o));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === n) {
                const e = {};
                for (const t in s) {
                    const n = s[t];
                    an.has(typeof n) && (e[t] = n);
                }
                return e;
            }
            {
                const e = {};
                for (const t in s) {
                    const n = s[t],
                        r = s?.constructor?.name ?? 'UNKNOWN';
                    on.has(r) || (e[t] = cn(n, o));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(s)) a[e] = cn(s[e], o);
        return a;
    }
    return (console.error('Incorrect value to clone model', s), s);
}
const ln = { deep: !1, equals: Ae },
    un = { cloneItem: !0 },
    dn = { shallow: !1 };
class fn {
    constructor(e, t = un) {
        this.options = t;
        const n = {},
            r = e.keys();
        for (let s = 0; s < r.length; s++) {
            const t = r[s];
            n[t] = i.box(this.takeItem(e, t), ln);
        }
        ((this._keys = i.set(new Set(r))), (this._data = i.box(n, ln)));
    }
    _data;
    _keys;
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
                a = this.takeItem(e, s);
            s in n
                ? null === a
                    ? (delete n[s], this._keys.delete(s), this.set(n))
                    : n[s].set(a)
                : null !== a && ((n[s] = i.box(a, ln)), this._keys.add(s), this.set(n));
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
        return this.options.cloneItem ? cn(n, dn) : n;
    }
    set = c((e) => {
        this._data.set(e);
    });
    untrackedData() {
        return l(() => this._data.get());
    }
}
const mn = s.createContext({ mode: 'real' }),
    hn = { equals: Ae, deep: !1 };
function _n(e, t, n) {
    const r = [];
    e.events.subscribersNotified.on(
        c(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const s = (s, a, o = hn) => {
            const c = i.box(s(n(a)), o);
            return ('real' === t && e.subscribe((e) => r.push(() => c.set(s(e))), a), c);
        },
        a = (s, a) => {
            const o = new fn(n(s), a);
            return ('real' === t && e.subscribe((e, t) => r.push(() => o.update(e, t)), s), o);
        },
        o = (s, a) => {
            const o = i.box(n(s) ?? a, hn);
            return ('real' === t && e.subscribe((e) => r.push(() => o.set(e)), s), o);
        };
    return {
        dict: a,
        dictRef: (e, t) => a(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => s(cn, e),
        array: o,
        object: o,
        transform: s,
        primitives: (s, a) => {
            const o = n(a);
            if (Array.isArray(s)) {
                const n = s.reduce((e, t) => ((e[t] = i.box(o[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                s.forEach((t) => {
                                    n[t].set(e[t]);
                                }),
                            );
                        }, a),
                    n
                );
            }
            {
                const n = s,
                    c = Object.entries(n),
                    l = c.reduce((e, [t, n]) => ((e[n] = i.box(o[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                c.forEach(([t, n]) => {
                                    l[n].set(e[t]);
                                }),
                            );
                        }, a),
                    l
                );
            }
        },
    };
}
const pn =
        (e = 'DataLayerProvider') =>
        (t, n, r) => {
            const o = s.createContext(null);
            function i(i) {
                const { mode: c, options: l, children: u, mocks: d } = i,
                    f = s.useContext(mn),
                    m = c ?? f.mode,
                    h = d ?? f.mocks,
                    _ = s.useRef([]),
                    p = r?.useRequires?.(),
                    g = Nt((s, a, o) => {
                        const c =
                                'real' !== s && o
                                    ? (function (e, t) {
                                          return {
                                              subscribe: () => 0,
                                              readSafeByPath: e,
                                              readByPath: e,
                                              createCallback: (n, r) => {
                                                  const s = e(ke(r, t));
                                                  return (...e) => {
                                                      s(n(...e));
                                                  };
                                              },
                                              createCallbackNoArgs: (n) => {
                                                  const r = e(ke(n, t));
                                                  return () => {
                                                      r();
                                                  };
                                              },
                                              dispose: () => {},
                                              unsubscribe: () => {},
                                              events: { subscribersNotified: new Ce() },
                                          };
                                      })(o.getter, a)
                                    : Me(a, { name: e }),
                            l = (e) => ('mocks' === s ? o?.getter(e, a) : c.readByPath(e)),
                            u = (e) => _.current.push(e),
                            d = 'initial' in i && { initial: r?.initial?.(i.initial) },
                            f = t({
                                ...d,
                                mode: s,
                                readByPath: l,
                                requires: p,
                                externalModel: c,
                                observableModel: _n(c, s, l),
                                cleanup: u,
                            }),
                            m = { ...d, mode: s, model: f, externalModel: c, cleanup: u, requires: p },
                            h = 'mocks' === s && o?.controls ? o.controls(m) : {};
                        return {
                            model: f,
                            controls: { ...n?.(m), ...h },
                            externalModel: c,
                            mode: s,
                            rootId: a?.rootId ?? 0,
                        };
                    }),
                    b = s.useRef(!1),
                    [x, w] = s.useState(m);
                s.useEffect(() => {
                    w(m);
                }, [m]);
                const [y, v] = s.useState(() => g(x, l, h));
                return (
                    s.useEffect(() => {
                        b.current ? v(g(x, l, h)) : (b.current = !0);
                    }, [g, h, x, l?.context, l?.initializer, l?.getRoot, l?.rootId]),
                    s.useEffect(
                        () => () => {
                            (y.externalModel.dispose(), _.current.forEach((e) => e()));
                        },
                        [y],
                    ),
                    a.jsx(o.Provider, { value: y, children: u })
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
        },
    gn = {
        model: (e, t) => u(e, { equals: Ae, ...t }),
        primitive: u,
        shallow: (e, t) => u(e, { equals: d.shallow, ...t }),
        structural: (e, t) => u(e, { equals: d.structural, ...t }),
    },
    bn = (e) => (t) => {
        e.forEach((e) =>
            ((e, t) => {
                e && ('function' == typeof e ? e(t) : (e.current = t));
            })(e, t),
        );
    };
s.forwardRef(function (e, t) {
    const n = s.useRef(null);
    return (
        s.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return be.onHitTest((t) => {
                    const n = e.getBoundingClientRect();
                    return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                });
        }, []),
        a.jsx('div', { ...e, ref: bn([t, n]) })
    );
});
class xn {
    items = [];
    add(e) {
        return (this.items.push([e, {}]), this);
    }
    addWithProps(e, t) {
        return (this.items.push([e, t]), this);
    }
    render(e) {
        return a.jsx(a.Fragment, {
            children: this.items.reduceRight((e, [t, n], r) => s.createElement(t, { ...n, key: r }, e), e),
        });
    }
}
async function wn(
    e,
    { root: t = document.getElementById('root'), withMedia: n = !0, fullScreen: r = !1, immediateLayout: s = !0 } = {},
) {
    !(function () {
        const e = (t = window.model, { depth: n = 16, convertArrays: r = !0 } = {}) => {
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
                        a = t.constructor?.name ?? 'UNKNOWN';
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
    const o = n ? vt : f.Fragment,
        i = window?.engine?.whenReady ?? Promise.resolve();
    (s && engine.enableImmediateLayout(!0),
        await i,
        document.documentElement.setAttribute('lang', w.resolve('langCode')),
        m.createRoot(t).render(a.jsx(o, { children: a.jsx(Lt, { children: e }) })),
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
function yn(e) {
    return a.jsx(a.Fragment, { children: e.children });
}
function vn(e) {
    return a.jsx(yn, {
        children: a.jsx(tn, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
const En = s.createContext(null);
function Rn() {
    const e = s.useContext(En);
    return (Ze(null !== e, 'You can use tabs hooks only with Tabs component'), e);
}
function Sn(e, t, n) {
    const r = 'object' == typeof t && 'cva' in t ? t.cva?.variants : n?.variants,
        o = r ? Object.keys(r) : [];
    if ('object' == typeof t) {
        const n = t,
            r = h(n.className, n.cva),
            a = n.element,
            i = s.forwardRef(function (e, t) {
                return s.createElement(a, { ...('function' == typeof a ? e : Tn(o, e)), ref: t, className: r(e) });
            });
        return ((i.displayName = e), n.cva && (i.cva = n.cva), i);
    }
    const i = h(t, n),
        c = s.forwardRef(function (t, n) {
            return a.jsx('div', { 'data-name': e, ...Tn(o, t), ref: n, className: i(t) });
        });
    return ((c.displayName = e), n && (c.cva = n), c);
}
function Tn(e, t) {
    if (0 === e.length) return t;
    const n = { ...t };
    for (const r of e) delete n[r];
    return n;
}
const Nn = 'primary',
    Cn = 'custom',
    Pn = { large: 'large', medium: 'medium', small: 'small' },
    Mn = 'HorizontalTabs_outerBorderImage_8085e49e',
    kn = 'HorizontalTabs_mainBorderImage_558d1c3f',
    Bn = 'HorizontalTabs_base__size-small_75fae891',
    Dn = 'HorizontalTabs_base__size-medium_afc0934f',
    An = 'HorizontalTabs_base__size-large_12c75e24',
    In = 'HorizontalTabs_outerBorder_3255d0c5',
    On = 'HorizontalTabs_base__theme-primary_5e3af03e',
    jn = 'HorizontalTabs_mainBorder_61e34c2c',
    Ln = 'HorizontalTabs_content_1ae3c4bd',
    zn = Sn('Tabs', 'HorizontalTabs_69e3c6f3', {
        variants: { size: { [Pn.large]: An, [Pn.medium]: Dn, [Pn.small]: Bn }, theme: { [Nn]: On, [Cn]: void 0 } },
    }),
    $n = s.forwardRef(function ({ children: e, classNames: t, ...n }, r) {
        const s = Rn();
        return a.jsx(zn, {
            ...n,
            ref: r,
            className: o(n.className, t?.base),
            size: s.size,
            theme: s.theme,
            children: a.jsxs('div', {
                className: o(In, t?.outerBorder),
                children: [
                    a.jsx('div', { className: o(Mn, t?.outerBorderImage) }),
                    a.jsxs('div', {
                        className: o(jn, t?.mainBorder),
                        children: [
                            a.jsx('div', { className: o(kn, t?.mainBorderImage) }),
                            a.jsx('div', { className: o(Ln, t?.content), children: e }),
                        ],
                    }),
                ],
            }),
        });
    }),
    Fn = 'Tab_border_a63aeb3f',
    Un = 'Tab_background_4c9b3eb9',
    Hn = 'Tab_backgroundPattern_417be4b5',
    Gn = 'Tab_innerBorderImage_adadda5f',
    Vn = 'Tab_base__theme-primary_90fd5ee',
    Wn = 'Tab_content_b3f6c22b',
    qn = 'Tab_base__size-small_0',
    Yn = 'Tab_base__size-medium_0',
    Xn = 'Tab_base__size-large_0',
    Qn = 'Tab_base__active_0',
    Kn = 'Tab_base__inactive_0',
    Zn = Sn('Tab', 'Tab_f59c2b00', {
        variants: {
            size: { [Pn.large]: Xn, [Pn.medium]: Yn, [Pn.small]: qn },
            theme: { [Nn]: Vn, [Cn]: void 0 },
            state: { active: Qn, inactive: Kn },
        },
        defaultVariants: { size: Pn.medium, theme: Nn },
    }),
    Jn = s.forwardRef(function (
        { theme: e, size: t, tabId: n, active: r, children: s, onClick: o, onMouseEnter: i, ...c },
        l,
    ) {
        const u = nn();
        return a.jsx(Zn, {
            ...c,
            ref: l,
            theme: e,
            size: t,
            state: r === n ? 'active' : 'inactive',
            onMouseEnter: function (e) {
                (r !== n && u.play('mouse-enter', { target: Zn.displayName, original: e }), i?.(e));
            },
            onClick: function (e) {
                (r !== n && u.play('click', { target: Zn.displayName, original: e }), o?.(e));
            },
            children: s,
        });
    });
function er({ active: e, theme: t, size: n, children: r, onActiveChange: o }) {
    const [i, c] = s.useState(e),
        l = s.useRef(e),
        u = s.useMemo(() => ({ active: i, theme: t, size: n, change: c }), [i, n, t]);
    return (
        s.useLayoutEffect(() => {
            c(e);
        }, [e]),
        s.useEffect(() => {
            l.current !== i && ((l.current = i), o?.(i));
        }, [i, o]),
        a.jsx(En.Provider, { value: u, children: r })
    );
}
((er.Switcher = $n),
    (er.Tab = function ({ tabId: e, classNames: t, className: n, children: r, ...s }) {
        const i = Rn();
        return a.jsxs(Jn, {
            'data-test-id': `${e}Tab`,
            ...s,
            tabId: e,
            theme: i.theme,
            size: i.size,
            active: i.active,
            className: o(t?.base, n),
            onClick: (t) => {
                (s.onClick?.(t), i.change(e));
            },
            children: [
                a.jsx('div', { className: o(Un, t?.background) }),
                a.jsx('div', { className: o(Hn, t?.backgroundPattern) }),
                a.jsx('div', { className: o(Fn, t?.border) }),
                a.jsx('div', { className: o(Gn, t?.borderImage) }),
                a.jsx('div', { className: o(Wn, t?.content), children: r }),
            ],
        });
    }),
    (er.Content = function ({ children: e, keyOverride: t }) {
        const n = Rn();
        return a.jsx(s.Fragment, { children: e(n.active) }, t ?? n.active);
    }));
const tr = {
        base: 'CloseButton_7488a1b8',
        base__medium: 'CloseButton_base__medium_97d04067',
        base__small: 'CloseButton_base__small_c1b29bae',
        base__extraSmall: 'CloseButton_base__extraSmall_f52764c1',
        base__x96x96: 'CloseButton_base__x96x96_8157b84d',
        base__x32x32: 'CloseButton_base__x32x32_6466ea31',
    },
    nr = { medium: 'medium', small: 'small', extraSmall: 'extraSmall' },
    rr = { [nr.medium]: 'x96x96', [nr.small]: nr.medium, [nr.extraSmall]: 'x32x32' };
function sr({
    size: e = nr.medium,
    hoverSound: t = _e.highlight,
    clickSound: n = _e.click,
    className: r,
    onHover: s,
    onClose: o,
}) {
    const i = ((c = tr[`base__${e}`]), (l = tr[`base__${rr[e]}`]), wt().upscale ? l : c);
    var c, l;
    return a.jsx('div', {
        className: _(tr.base, i, r),
        onMouseEnter: () => {
            (pe.sound(t), s?.());
        },
        onClick: () => {
            (pe.sound(n), o());
        },
    });
}
sr.size = nr;
const ar = s.createContext(void 0);
function or() {
    const e = s.useContext(ar);
    if (!e) throw new Error('useHorizontalScroll must be used within a Scroll.Horizontal.Base component');
    return e;
}
var ir = ((e) => ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e))(ir || {});
const cr = {
        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
        animationConfig: { tension: 170, friction: 26 },
    },
    lr = ({
        getContainerSize: e,
        getBounds: t,
        setScrollPosition: n,
        getDirection: r,
        getWrapperSize: a,
        triggerMouseMoveOnUpdate: o = !1,
    }) => {
        const i = (e, n) => {
            const [r, s] = t(e);
            return Be(r, s, n);
        };
        return (c = {}) => {
            const { settings: l = cr } = c,
                [u, d] = s.useState(!1),
                f = s.useRef(null),
                m = s.useRef(null),
                h = s.useRef({ wrapper: 0, container: 0 }),
                _ = Pt(),
                g = Ut(
                    () => {
                        viewEnv.forceTriggerMouseMove();
                    },
                    [],
                    150,
                ),
                [b, x] = p(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = f.current;
                        t && (n(t, e), _.trigger('change', e));
                    },
                    onRest: (e) => _.trigger('rest', e),
                    onStart: (e) => _.trigger('start', e),
                    onPause: (e) => _.trigger('pause', e),
                })),
                w = s.useCallback(
                    (e, t, n) => {
                        const r = b.scrollPosition.get(),
                            s = (b.scrollPosition.goal ?? 0) - r;
                        return i(e, t * n + s + r);
                    },
                    [b.scrollPosition],
                ),
                y = s.useCallback(
                    function (e, { immediate: t = !1, reset: n = !0 } = {}) {
                        const r = f.current;
                        if (!r) return;
                        const s = i(r, e);
                        b.scrollPosition.goal !== s &&
                            x.start({
                                scrollPosition: s,
                                immediate: t,
                                reset: n,
                                config: l.animationConfig,
                                from: { scrollPosition: i(r, b.scrollPosition.get()) },
                                onChange: () => {
                                    o && g();
                                },
                            });
                    },
                    [b.scrollPosition, x, l.animationConfig, g],
                ),
                v = s.useCallback(
                    function (e) {
                        const t = f.current,
                            n = m.current;
                        if (!t || !n) return;
                        const r = ((e, t) => {
                                switch (t.type) {
                                    case 'proportional':
                                        return a(e) / t.factor;
                                    case 'fixed':
                                        return t.value;
                                }
                            })(n, l.step),
                            s = w(t, e, r);
                        y(s);
                    },
                    [y, w, l.step],
                ),
                E = s.useCallback(
                    function (e) {
                        u ||
                            (0 !== e.deltaY && v(r(e)),
                            f.current && _.trigger('mouseWheel', e, b.scrollPosition, t(f.current)));
                    },
                    [b.scrollPosition, v, _, u],
                ),
                R = s.useCallback(
                    function () {
                        const e = f.current;
                        e && (y(i(e, b.scrollPosition.goal), { immediate: !0 }), _.trigger('resizeHandled'));
                    },
                    [y, b.scrollPosition.goal, _],
                );
            Ct(m, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = a(t);
                h.current.wrapper !== n && R();
            });
            const S = Nt(function () {
                    const t = f.current;
                    if (!t) return;
                    const n = e(t),
                        r = m.current ? a(m.current) : 0;
                    if (h.current.container !== n || h.current.wrapper !== r) {
                        const e = i(t, b.scrollPosition.goal);
                        (e !== b.scrollPosition.goal && y(e, { immediate: !0 }),
                            (h.current.container = n),
                            (h.current.wrapper = r),
                            _.trigger('recalculateContent'));
                    }
                }),
                T = Ft();
            s.useEffect(() => Oe(window, 'resize', () => T.run(R)), [R, T]);
            return s.useMemo(
                () => ({
                    getWrapperSize: () => (m.current ? a(m.current) : void 0),
                    getContainerSize: () => (f.current ? e(f.current) : void 0),
                    getBounds: () =>
                        f.current ? t(f.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: l.step.clampedArrowStepTimeout,
                    settings: l,
                    clampPosition: i,
                    handleMouseWheel: E,
                    applyScroll: y,
                    applyStepTo: v,
                    contentRef: f,
                    wrapperRef: m,
                    scrollPosition: x,
                    animationScroll: b,
                    recalculateContent: S,
                    disabled: u,
                    setDisabled: d,
                    events: { on: _.on, off: _.off },
                }),
                [l, E, y, v, x, b, S, u, d, _.on, _.off],
            );
        };
    },
    ur = lr({
        getBounds: (e) => [0, Math.max(0, e.offsetWidth - (e.parentElement?.offsetWidth ?? 0))],
        getContainerSize: (e) => e.offsetWidth,
        getWrapperSize: (e) => e.offsetWidth,
        setScrollPosition: (e, t) => {
            e.style.transform = `translateX(-${0 | (t.value.scrollPosition ?? 0)}px)`;
        },
        getDirection: (e) => (e.deltaY > 1 ? ir.Next : ir.Prev),
        triggerMouseMoveOnUpdate: !0,
    }),
    dr = 'horizontal',
    fr = 'vertical',
    mr = {
        background: 'Thumb_background_7f3dd6ac',
        border: 'Thumb_border_5749138b',
        innerBorder: 'Thumb_innerBorder_42bafd18',
        icon: 'Thumb_icon_dca8bf26',
        base: 'Thumb_6ff3e706',
        base__vertical: 'Thumb_base__vertical_55a67c91',
        base__horizontal: 'Thumb_base__horizontal_27ca7ace',
        base__active: 'Thumb_base__active_830942bb',
    },
    hr = 'forwardDisabled',
    _r = 'backwardDisabled';
function pr(e) {
    const t = s.useRef(null),
        [n, r] = s.useState(!1),
        i = Nt(function () {
            const n = t.current,
                r = e.trackRef.current,
                s = e.api.getWrapperSize(),
                a = e.api.getContainerSize();
            if (!(s && a && n && r)) return;
            const o = Math.min(1, s / a),
                i = 'horizontal' === e.direction ? 'width' : 'height';
            return ((n.style[i] = `${e.calculateSize(r, o)}px`), (n.style.display = 'flex'), o);
        }),
        [c, l] = p(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: I.easeInCubic,
            config: { duration: 200 },
        }));
    s.useEffect(() => {
        n || e.dragging
            ? l.start({
                  to: e.styles.opened,
                  onRest() {
                      t.current?.classList.add(mr.base__active);
                  },
              })
            : l.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      t.current?.classList.remove(mr.base__active);
                  },
              });
    }, [n, e.dragging, e.styles.closed, e.styles.opened, l]);
    const u = Nt(function () {
            const n = e.trackRef.current,
                r = t.current,
                s = e.railBeforeRef.current,
                a = e.railAfterRef.current,
                o = e.api.getWrapperSize(),
                i = e.api.getContainerSize();
            if (!(o && n && r && s && a && i)) return;
            const c = e.api.animationScroll.scrollPosition.get(),
                u = Math.min(1, o / i),
                d = i !== o ? Be(0, 1, c / (i - o)) : 0,
                f = e.calculateSize(n, u),
                m = (('horizontal' === e.direction ? n.offsetWidth : n.offsetHeight) - f) * d || 0,
                h = Math.round(2 * (2 * d - 1));
            (r.style.setProperty('--thumbOffset', `${m}px`),
                e.onUpdate?.({ thumbSize: f, thumbOffset: m, newBouncingCorrection: h }));
            const _ = 0 === m || e.isBoundThumb(m) ? 0 : h;
            return (
                l.start({
                    to: { '--bouncingCorrection': `${_}px` },
                    ...(0 === _ ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                m
            );
        }),
        d = Ft(),
        f = Nt(function () {
            i();
            const t = u();
            'number' == typeof t &&
                (function (e, t) {
                    if (!e.trackRef.current || !e.thumbRef.current) return;
                    const n = e.trackRef.current.parentNode;
                    if (n instanceof HTMLElement) {
                        if (0 === t) return (n.classList.add(_r), void n.classList.remove(hr));
                        if (e.isBoundThumb(t)) return (n.classList.remove(_r), void n.classList.add(hr));
                        (n.classList.remove(_r), n.classList.remove(hr));
                    }
                })(e, t);
        });
    s.useEffect(() => d.run(f));
    const { api: m } = e;
    return (
        s.useEffect(() => {
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
        a.jsxs(g.div, {
            ref: bn([t, e.thumbRef]),
            className: o(mr.base, mr[`base__${e.direction}`], e.className),
            style: c,
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: [
                a.jsx('div', { className: mr.background }),
                a.jsx('div', { className: mr.border }),
                a.jsx('div', { className: mr.innerBorder }),
                a.jsx('div', { className: mr.icon }),
            ],
        })
    );
}
const gr = { pending: !1, offset: 0 };
function br(e, t, n, r, a) {
    const [o, i] = s.useState(gr),
        c = Nt(t),
        l = s.useCallback(
            (t) => {
                (i(t), e.current && c({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [c, e],
        );
    return (
        s.useEffect(() => {
            if (!o.pending) return;
            const t = me.move(function ([t]) {
                    const s = n.contentRef.current;
                    if (!s) return;
                    const i = r.current,
                        l = e.current;
                    if (!s || !i || !l) return;
                    const u = a(t, o, { parent: i, thumb: l }),
                        d = u * (n.getContainerSize() ?? 0);
                    (n.scrollPosition.start({
                        scrollPosition: n.clampPosition(s, d),
                        reset: !0,
                        immediate: !0,
                        from: { scrollPosition: n.animationScroll.scrollPosition.get() },
                    }),
                        c({ type: 'dragging', dragElement: l, elementOffset: u, contentOffset: d }));
                }),
                s = me.up(() => {
                    l(gr);
                });
            return () => {
                (t(), s());
            };
        }, [n, o.offset, o.pending, c, l, e, r, o, a]),
        l
    );
}
const xr = 'disable',
    wr = 'scroll-active';
function yr({ api: e, baseRef: t }) {
    const n = Ft(),
        r = Nt(function () {
            const n = e.getWrapperSize(),
                r = e.getContainerSize();
            if (null === t.current || void 0 === r || void 0 === n) return;
            1 === Math.min(1, n / r || 1) ? t.current.classList.remove(wr) : t.current.classList.add(wr);
        });
    (s.useEffect(() => n.run(r)),
        s.useEffect(() => {
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
function vr(e, t) {
    const n = e.getBoundingClientRect(),
        r = t === dr ? n.x : n.y;
    return { start: r, end: t === dr ? r + n.width : r + n.height };
}
function Er(e, t, n, r, a, o, i) {
    const c = nn(),
        l = a.stepTimeout || 100,
        [u, d] = (function (e, t, n = []) {
            const r = s.useRef(0),
                a = s.useCallback(() => {
                    (window.clearInterval(r.current), (r.current = 0));
                }, n || []);
            s.useEffect(() => a, [a]);
            const o = (n ?? []).concat([t]);
            return [
                s.useCallback((n) => {
                    (0 !== r.current && a(), (r.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                }, o),
                a,
            ];
        })((e) => a.applyStepTo(e), l, [a]);
    s.useEffect(
        () => (document.addEventListener('mouseup', d, !0), () => document.removeEventListener('mouseup', d, !0)),
        [d],
    );
    const f = s.useCallback(
            (e) => {
                e.target.classList.contains(xr) ||
                    (c.play('click', { target: 'Scroll:Back', original: e }), u(ir.Next));
            },
            [u, c],
        ),
        m = s.useCallback(
            (e) => {
                e.target.classList.contains(xr) ||
                    (c.play('click', { target: 'Scroll:Forward', original: e }), u(ir.Prev));
            },
            [u, c],
        ),
        h = s.useCallback(
            (s) => {
                const l = e.current,
                    u = t.current,
                    d = n.current,
                    h = r.current;
                if (!(l && u && d && h && 0 === s.button)) return;
                const _ = (function (e, t, n, r, s, a) {
                        return {
                            occurredEvent: a === dr ? e.screenX : e.screenY,
                            bar: vr(t, a),
                            thumb: vr(n, a),
                            backButton: vr(r, a),
                            forwardButton: vr(s, a),
                        };
                    })(s, l, u, d, h, i),
                    p = _.thumb.start <= _.occurredEvent && _.occurredEvent <= _.thumb.end,
                    g =
                        (_.backButton.start <= _.occurredEvent && _.occurredEvent <= _.backButton.end) ||
                        (_.forwardButton.start <= _.occurredEvent && _.occurredEvent <= _.forwardButton.end);
                if (p) o({ pending: !0, offset: _.occurredEvent - _.thumb.start });
                else if (g) {
                    ((_.occurredEvent > _.thumb.start ? ir.Prev : ir.Next) === ir.Next ? f : m)(s);
                } else {
                    const e = _.occurredEvent - _.bar.start,
                        t = _.thumb.end - _.thumb.start,
                        n = _.bar.end - _.bar.start,
                        r = a.getContainerSize();
                    if ('number' != typeof r || Number.isNaN(r)) return console.error('Incorrect container size');
                    const s = ((e - t / 2) / n) * r;
                    a.applyScroll(s);
                }
                c.play('click', { target: 'Scroll:' + (p ? 'thumb' : g ? 'button' : ''), original: s });
            },
            [e, t, n, r, c, i, o, f, m, a],
        ),
        _ = s.useCallback(
            (e) => {
                e.target.classList.contains(xr) || c.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [c],
        );
    return s.useMemo(
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
const Rr = 'HorizontalBar_rail_37858d8f',
    Sr = 'HorizontalBar_4df27ac3',
    Tr = 'HorizontalBar_track_649dc296',
    Nr = 'HorizontalBar_rail__left_1a906b4e',
    Cr = 'HorizontalBar_rail__right_cd24364e',
    Pr = 'HorizontalBar_button__right_e8f0aa2d',
    Mr = 'HorizontalBar_button__left_da330e13',
    kr = 'HorizontalBar_button_cbabd91',
    Br = { closed: { height: '3rem', top: '4rem' }, opened: { height: '11rem', top: '0rem' } },
    Dr = (e, t) => Math.max(Te(13), e.offsetWidth * t),
    Ar = s.memo(function ({ classNames: e = {}, onDrag: t = De }) {
        const n = s.useRef(null),
            r = s.useRef(null),
            i = s.useRef(null),
            c = s.useRef(null),
            l = s.useRef(null),
            u = s.useRef(null),
            d = s.useRef(null),
            [f, m] = s.useState(!1),
            { api: h } = or();
        yr({ baseRef: n, api: h });
        const _ = Nt((e, t, { parent: n }) => (e.screenX - t.offset - n.getBoundingClientRect().x) / n.offsetWidth),
            p = Nt((e) => e - (c.current.offsetWidth - l.current.offsetWidth) >= -0.5),
            g = s.useCallback((e) => ('dragStart' === e.type ? m(!0) : 'dragEnd' === e.type && m(!1), t(e)), [t]),
            b = br(l, g, h, c, _),
            x = Nt(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
                const r = c.current,
                    s = u.current,
                    a = d.current;
                if (!r || !s || !a) return;
                const o = Te(5);
                ((s.style.width = `${t - o + n}px`), (a.style.width = r.offsetWidth - e - t - o - n + 'px'));
            }),
            { handleMouseEnter: w, handleMouseDownTrack: y } = Er(n, l, i, r, h, b, dr);
        return a.jsxs('div', {
            className: o(Sr, e.base),
            ref: n,
            onWheel: h.handleMouseWheel,
            onMouseDown: y,
            onMouseEnter: w,
            children: [
                a.jsx('div', { ref: r, className: o(kr, Mr, e.leftButton) }),
                a.jsxs('div', {
                    ref: c,
                    className: o(Tr, e.track),
                    children: [
                        a.jsx('div', { ref: u, className: o(Rr, Nr, e.leftRail) }),
                        a.jsx(pr, {
                            dragging: f,
                            api: h,
                            calculateOffset: _,
                            calculateSize: Dr,
                            direction: 'horizontal',
                            isBoundThumb: p,
                            railAfterRef: u,
                            railBeforeRef: d,
                            styles: Br,
                            onUpdate: x,
                            thumbRef: l,
                            trackRef: c,
                        }),
                        a.jsx('div', { ref: d, className: o(Rr, Cr, e.rightRail) }),
                    ],
                }),
                a.jsx('div', { ref: i, className: o(kr, Pr, e.rightButton) }),
            ],
        });
    }),
    Ir = {
        base: 'HorizontalScroll_5b201d2b',
        wrapper: 'HorizontalScroll_wrapper_2fb60496',
        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_a5c0f45',
    };
function Or({ className: e, classNames: t, children: n }) {
    const { api: r } = or();
    return a.jsx('div', {
        className: o(Ir.base, e),
        children: a.jsx('div', {
            className: o(Ir.wrapper, t?.wrapper),
            onWheel: r.handleMouseWheel,
            ref: r.wrapperRef,
            children: a.jsx('div', { className: o(Ir.content, t?.content), ref: r.contentRef, children: n }),
        }),
    });
}
function jr({ settings: e, children: t }) {
    const n = ur({ settings: e }),
        r = s.useMemo(() => ({ api: n }), [n]);
    return a.jsx(ar.Provider, { value: r, children: t });
}
((Or.Bar = Ar),
    (Or.Default = ({
        children: e,
        className: t,
        barClassNames: n,
        areaClassName: r,
        classNames: i,
        scrollClassName: c,
        onDrag: l,
    }) => {
        const { api: u } = or(),
            d = s.useMemo(() => {
                const e = n || {};
                return { ...e, base: o(Ir.base, e.base) };
            }, [n]);
        return a.jsxs('div', {
            className: o(Ir.defaultScroll, t),
            onWheel: u.handleMouseWheel,
            children: [
                a.jsx('div', {
                    className: o(Ir.defaultScrollArea, r),
                    children: a.jsx(Or, { className: c, classNames: i, children: e }),
                }),
                a.jsx(Ar, { onDrag: l, classNames: d }),
            ],
        });
    }));
const Lr = s.createContext(void 0);
function zr() {
    const e = s.useContext(Lr);
    if (!e) throw new Error('useVerticalScroll must be used within a Scroll.Vertical.Base component');
    return e;
}
const $r = lr({
        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
        getContainerSize: (e) => e.scrollHeight,
        getWrapperSize: (e) => e.offsetHeight,
        setScrollPosition: (e, t) => {
            e.scrollTop = Math.trunc(t.value.scrollPosition ?? 0);
        },
        getDirection: (e) => (e.deltaY > 1 ? ir.Next : ir.Prev),
    }),
    Fr = 'VerticalBar_rail_3d663c9',
    Ur = 'VerticalBar_7187fa00',
    Hr = 'VerticalBar_track_ff482708',
    Gr = 'VerticalBar_rail__top_ee531f43',
    Vr = 'VerticalBar_rail__bottom_3eaa33b1',
    Wr = 'VerticalBar_button__bottom_6880f123',
    qr = 'VerticalBar_button__top_b8383775',
    Yr = 'VerticalBar_button_7b0e4aca',
    Xr = { closed: { width: '3rem', left: '3rem' }, opened: { width: '9rem', left: '0rem' } },
    Qr = (e, t) => Math.max(Te(13), e.offsetHeight * t),
    Kr = s.memo(function ({ classNames: e = {}, onDrag: t = De }) {
        const n = s.useRef(null),
            r = s.useRef(null),
            i = s.useRef(null),
            c = s.useRef(null),
            l = s.useRef(null),
            u = s.useRef(null),
            d = s.useRef(null),
            [f, m] = s.useState(!1),
            { api: h } = zr();
        yr({ baseRef: n, api: h });
        const _ = Nt((e) => e - (c.current.offsetHeight - l.current.offsetHeight) >= -0.5),
            p = Nt((e, t, { parent: n }) => (e.screenY - t.offset - n.getBoundingClientRect().y) / n.offsetHeight),
            g = s.useCallback((e) => ('dragStart' === e.type ? m(!0) : 'dragEnd' === e.type && m(!1), t(e)), [t]),
            b = br(l, g, h, c, p),
            x = Nt(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: n }) => {
                const r = c.current,
                    s = u.current,
                    a = d.current;
                if (!r || !s || !a) return;
                const o = Te(5);
                ((s.style.height = `${t - o + n}px`), (a.style.height = r.offsetHeight - e - t - o - n + 'px'));
            }),
            { handleMouseEnter: w, handleMouseDownTrack: y } = Er(n, l, r, i, h, b, fr);
        return a.jsxs('div', {
            className: o(Ur, e.base),
            ref: n,
            onWheel: h.handleMouseWheel,
            onMouseDown: y,
            onMouseEnter: w,
            children: [
                a.jsx('div', { ref: r, className: o(Yr, qr, e.topButton) }),
                a.jsxs('div', {
                    ref: c,
                    className: o(Hr, e.track),
                    children: [
                        a.jsx('div', { ref: u, className: o(Fr, Gr, e.topRail) }),
                        a.jsx(pr, {
                            dragging: f,
                            api: h,
                            calculateOffset: p,
                            calculateSize: Qr,
                            direction: 'vertical',
                            isBoundThumb: _,
                            railAfterRef: u,
                            railBeforeRef: d,
                            styles: Xr,
                            onUpdate: x,
                            thumbRef: l,
                            trackRef: c,
                        }),
                        a.jsx('div', { ref: d, className: o(Fr, Vr, e.bottomRail) }),
                    ],
                }),
                a.jsx('div', { ref: i, className: o(Yr, Wr, e.bottomButton) }),
            ],
        });
    }),
    Zr = {
        content: 'VerticalScroll_content_f30246e6',
        defaultScroll: 'VerticalScroll_defaultScroll_c69fa70e',
        area: 'VerticalScroll_area_a3c0086a',
    },
    Jr = ({ className: e, classNames: t, children: n, ...r }) => {
        const { api: i } = zr();
        return (
            s.useEffect(() => Ke(() => Ke(i.recalculateContent))),
            a.jsx('div', {
                className: o(Zr.base, t?.wrapper, e),
                ref: i.wrapperRef,
                onWheel: i.handleMouseWheel,
                children: a.jsx('div', { ...r, className: o(Zr.content, t?.content), ref: i.contentRef, children: n }),
            })
        );
    };
function es({ children: e }) {
    const t = $r(),
        n = s.useMemo(() => ({ api: t }), [t]);
    return a.jsx(Lr.Provider, { value: n, children: e });
}
Jr.Default = ({
    children: e,
    className: t,
    barClassNames: n,
    areaClassName: r,
    scrollClassName: i,
    scrollClassNames: c,
    onDrag: l,
}) => {
    const { api: u } = zr(),
        d = s.useMemo(() => {
            const e = n || {};
            return { ...e, base: o(Zr.base, e.base) };
        }, [n]);
    return a.jsxs('div', {
        className: o(Zr.defaultScroll, t),
        onWheel: u.handleMouseWheel,
        children: [
            a.jsx('div', {
                className: o(Zr.area, r),
                children: a.jsx(Jr, { className: i, classNames: c, children: e }),
            }),
            a.jsx(Kr, { onDrag: l, classNames: d }),
        ],
    });
};
const ts = 1,
    ns = 2,
    rs = 3;
function ss(e, t) {
    const n = [],
        r = [];
    let s = '',
        a = !1,
        o = '',
        i = 0;
    for (let c = 0; c < e.length; c++) {
        const l = e[c];
        if (l === t.start[0] && e.slice(c, c + t.start.length) === t.start) {
            if (s) {
                if (r.length > 0) {
                    r[r.length - 1].node.children.push({ type: ts, value: s });
                } else n.push({ type: ts, value: s });
                s = '';
            }
            ((a = !0), (c += t.start.length - 1));
        } else if (l === t.end[0] && e.slice(c, c + t.end.length) === t.end) {
            ((a = !1), (c += t.end.length - 1));
            const e = o.trim();
            if (e.startsWith('@')) {
                const t = e.slice(1).trim(),
                    s = { type: ns, attrs: t.split('|'), instanceId: ++i, children: [] };
                if (r.length > 0) {
                    r[r.length - 1].node.children.push(s);
                } else n.push(s);
                r.push({ node: s, startIndex: n.length });
            } else if ('/' === e) r.length > 0 && r.pop();
            else {
                const t = { type: rs, instanceId: ++i, name: e };
                if (r.length > 0) {
                    r[r.length - 1].node.children.push(t);
                } else n.push(t);
            }
            o = '';
        } else a ? (o += l) : (s += l);
    }
    if (s)
        if (r.length) {
            r[r.length - 1].node.children.push({ type: ts, value: s });
        } else n.push({ type: ts, value: s });
    return n;
}
const as = {
        COLORS: 'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
        base: 'FormatText_db904f12',
        base__fullSize: 'FormatText_base__fullSize_a514958e',
        nowrap: 'FormatText_nowrap_ff69eca3',
    },
    os = new Set(as.COLORS?.split(', ') ?? []);
let is = 0;
function cs() {
    return ++is;
}
const ls =
    /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
function us(e) {
    const t = w.resolve('langCode');
    return (function (e, t, n) {
        return ot.has(t) ? e.map(n) : e.map((e, t, r) => (t === r.length - 1 ? n(e, t, r) : n(`${e} `, t, r)));
    })(
        (function (e, t) {
            return (st[t] ?? at)(e);
        })(e, t),
        t,
        (e, t) => e && a.jsx('span', { children: e }, `${e}${t}`),
    );
}
function ds(e) {
    return Array.isArray(e)
        ? (function (e) {
              const t = [];
              for (let n = 0; n < e.length; n++) {
                  const r = e[n],
                      o = e[n + 1];
                  if ('string' != typeof o || !ls.test(o)) {
                      t.push(ds(r));
                      continue;
                  }
                  const i = us(o.slice(1));
                  (t.push(
                      a.jsxs(
                          s.Fragment,
                          { children: [a.jsxs('span', { className: as.nowrap, children: [ds(r), o[0]] }), i] },
                          cs(),
                      ),
                  ),
                      (n += 1));
              }
              return t;
          })(e)
        : 'string' == typeof e
          ? a.jsx(s.Fragment, { children: us(e) }, cs())
          : e;
}
const fs = {
    class: function (e, ...t) {
        return a.jsx(
            'span',
            { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
            cs(),
        );
    },
    colorLegacy: function (e, t) {
        const n = cs();
        return os.has(String(t))
            ? a.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, n)
            : a.jsx('span', { style: { color: `#${t}` }, children: e }, n);
    },
    bold: (e) => ['fontWeight', 'bold'],
    split: ds,
    style: function (e, ...t) {
        return a.jsx(
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
            cs(),
        );
    },
    color: (e, t) => ['color', t],
    fontSize: (e, t) => ['fontSize', t],
    fontWeight: (e, t) => ['fontWeight', t],
    textDecoration: (e, t) => ['textDecoration', t],
};
function ms(e, t, n, r) {
    const s = n.map((t) => {
            if ('string' != typeof t) return t;
            const n = t.trim();
            if (n.startsWith('(') && n.endsWith(')')) {
                const [t, ...s] = n.slice(1, -1).split(' ');
                return t ? ms(e, t, s, r) : e;
            }
            return n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n;
        }),
        a = r[t];
    return a ? a(e, ...s) : (console.error(`Function ${t} is not registered`), e);
}
function hs(e, t, n) {
    return e.reduce((e, t) => {
        const [r, ...s] = (function (e) {
            const t = [];
            let n = '',
                r = !1,
                s = !1,
                a = '';
            for (let o = 0; o < e.length; o++) {
                const i = e[o];
                ("'" !== i && '"' !== i) || s || r
                    ? i === a && s
                        ? ((s = !1), (n += i))
                        : '(' !== i || s
                          ? ')' === i && r && !s
                              ? ((r = !1), (n += i))
                              : ' ' !== i || r || s
                                ? (n += i)
                                : n && (t.push(n), (n = ''))
                          : ((r = !0), (n += i))
                    : ((s = !0), (a = i), (n += i));
            }
            return (n && t.push(n), t);
        })(t.trim());
        return r ? ms(e, r, s, n) : e;
    }, t);
}
function _s(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function ps(e, t) {
    for (let n = 0; n < e.length; n++) {
        if ('$' === e[n]) {
            let r = n + 1;
            for (; r < e.length && !_s(e[r]); ) r++;
            const s = e.slice(n + 1, r),
                a = t[s];
            if (a) return ps(e.replace(`$${s}`, String(a)), t);
        }
    }
    return e;
}
function gs(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = ps(e[r], t);
    return n;
}
const bs = ['number', 'string', 'undefined'];
function xs(e, t, n = {}, r = !0) {
    r && (is = 0);
    const o = [];
    function i(e) {
        if (bs.includes(typeof e)) {
            const t = o.at(-1);
            if ('string' == typeof t) return void (o[o.length - 1] = t + e);
        }
        o.push(e);
    }
    for (const c of e)
        if (c.type === ts) i(c.value);
        else if (c.type === rs)
            null === n[c.name] || bs.includes(typeof n[c.name])
                ? i(n[c.name] ?? `{{${c.name}}}`)
                : o.push(a.jsx(s.Fragment, { children: n[c.name] }, `var-${c.name}-${c.instanceId}`));
        else if (c.type === ns) {
            const e = xs(c.children, t, n, !1),
                r = hs(gs(c.attrs, n), e, t);
            o.push(r);
        }
    return o;
}
function ws(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function ys(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function vs(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
function Es(e) {
    return Ne(e, vs, ws, ys);
}
const Rs = { start: '{{', end: '}}' },
    Ss = s.memo(function (e) {
        const {
                brackets: t = Rs,
                text: n,
                params: r,
                upgradeLegacy: i,
                fullSize: c,
                inline: l,
                formatters: u,
                split: d,
                ...f
            } = e,
            m = s.useMemo(() => (e.upgradeLegacy ? Es(e.text) : e.text), [e.text, e.upgradeLegacy]),
            h = s.useMemo(() => (e.formatters ? { ...fs, ...e.formatters } : fs), [e.formatters]),
            _ = s.useMemo(() => ss(d ? `{{@ split}}${m}{{/}}` : m, t), [t, m, d]),
            p = s.useMemo(() => xs(_, h, e.params), [_, h, e.params]),
            g = o(as.base, c && as.base__fullSize, f.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              a.jsx('p', {
                  ...f,
                  className: g,
                  ref: (e) => {
                      e?.setAttribute('cohinline', 'true');
                  },
                  children: p,
              }))
            : a.jsx('span', { ...f, className: g, children: p });
    });
function Ts({ path: e, ...t }) {
    return a.jsx(Ss, { text: w.resolve('strings').readOrEmpty(e), ...t });
}
const Ns = () => {};
function Cs(e) {
    const t = e;
    return s.forwardRef(function (e, n) {
        const r = Et(e, e.adaptive),
            { path: s, ...o } = r,
            i = r.images ?? w.resolve('images'),
            c = { ...o, ref: n };
        {
            const e = s ? i.readOr(s, Ns, 'warn') : void 0;
            return e ? a.jsx(t, { ...c, src: e }) : a.jsx(t, { ...c, unknown: !0 });
        }
    });
}
const Ps = {
    background:
        'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
    backgroundSize: '20rem 20rem',
    backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
    backgroundColor: '#000',
};
s.forwardRef(function (e, t) {
    if (!e.src) {
        const {
            repeat: n,
            fit: r,
            position: s,
            width: o,
            src: i,
            height: c,
            unselectable: l,
            unknownStyle: u = Ps,
            ...d
        } = e;
        return a.jsx('div', { ...d, ref: t, style: { width: e.width, height: e.height, ...u, ...e.style } });
    }
    const { repeat: n, fit: r, position: s, width: o, height: i, unknownStyle: c, unselectable: l, ...u } = e;
    return a.jsx('div', {
        ...u,
        ref: t,
        style: {
            backgroundImage: `url(${e.src})`,
            backgroundRepeat: n ?? 'no-repeat',
            backgroundSize: r ?? 'contain',
            backgroundPosition: s ?? 'center center',
            width: 'number' == typeof o ? `${o}rem` : o,
            height: 'number' == typeof i ? `${i}rem` : i,
            ...u.style,
        },
    });
});
const Ms = Cs(
    s.forwardRef(function (e, t) {
        if (e.unknown) {
            const {
                repeat: n,
                fit: r,
                position: s,
                width: o,
                src: i,
                height: c,
                unselectable: l,
                unknown: u,
                unknownStyle: d = Ps,
                ...f
            } = e;
            return a.jsx('div', { ...f, ref: t, style: { width: e.width, height: e.height, ...d, ...e.style } });
        }
        const {
            repeat: n,
            fit: r,
            position: s,
            width: o,
            height: i,
            unknownStyle: c,
            unknown: l,
            unselectable: u,
            ...d
        } = e;
        return a.jsx('div', {
            ...d,
            ref: t,
            style: {
                backgroundImage: `url(${e.src})`,
                backgroundRepeat: n ?? 'no-repeat',
                backgroundSize: r ?? 'contain',
                backgroundPosition: s ?? 'center center',
                width: 'number' == typeof o ? `${o}rem` : o,
                height: 'number' == typeof i ? `${i}rem` : i,
                ...d.style,
            },
        });
    }),
);
Cs(
    s.forwardRef(function (e, t) {
        const { width: n, height: r, src: s, unselectable: o, unknown: i, unknownStyle: c = Ps, ...l } = e;
        return e.unknown
            ? a.jsx('div', { ...l, style: { width: e.width, height: e.height, ...c } })
            : a.jsx('img', { ...l, ref: t, src: s, width: n, height: r });
    }),
);
const ks = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    Bs = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
    Ds = Sn('Button', { element: 'button', className: 'HeadlessButton_df8536fc' }),
    As = s.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: n, soundTarget: r, disabled: s = !1, silent: o = !1, ...i },
        c,
    ) {
        const l = nn();
        return a.jsx(Ds, {
            ...i,
            ref: c,
            onMouseEnter: function (e) {
                (s || o || l.play('mouse-enter', { target: r || 'Button', original: e }), n?.(e));
            },
            onClick: function (e) {
                s || (o || l.play('click', { target: r || 'Button', original: e }), t?.(e));
            },
            children: e,
        });
    }),
    Is = {
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
    Os = s.forwardRef(function (
        {
            children: e,
            size: t = Bs.large,
            theme: n = ks.primary,
            disabled: r = !1,
            silent: s = !1,
            autoAlignContent: i = !0,
            classNames: c,
            className: l,
            ...u
        },
        d,
    ) {
        return a.jsxs(As, {
            ...u,
            ref: d,
            silent: s,
            disabled: r,
            className: o(
                Is.base,
                Is[`base__size-${t}`],
                Is[`base__theme-${n}`],
                r ? Is.base__disabled : Is.base__enabled,
                l,
                c?.base,
            ),
            onClick: function (e) {
                r || u.onClick?.(e);
            },
            children: [
                a.jsx('div', { className: o(Is.background, c?.background) }),
                a.jsx('div', { className: o(Is.border, c?.border) }),
                a.jsx('div', { className: o(Is.overlay, c?.overlay) }),
                a.jsx('div', { className: o(Is.content, i && Is.content__fontAligned, c?.content), children: e }),
            ],
        });
    });
function js(e) {
    return (
        !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
        (!s.isValidElement(e) && !!Array.isArray(e) && e.every(js))
    );
}
((Os.themes = ks), (Os.sizes = Bs));
const Ls = 'MultilineOverflow_8834bd8e',
    zs = 'MultilineOverflow_content_b539970d';
const $s = s.forwardRef(function (
    {
        text: e,
        brackets: t,
        params: n,
        formatters: r,
        upgradeLegacy: i,
        split: c = !0,
        onMouseEnter: l,
        onMouseLeave: u,
        onClick: d,
        tooltipDisabled: f = !1,
        tooltip: m,
        className: h,
        classNames: _,
        style: p,
        styleBase: g,
        ...b
    },
    x,
) {
    const y = s.useRef(null),
        [v, E] = s.useState(!1);
    s.useEffect(() => {
        if (0 === e.length) return;
        const t = y.current;
        if (!t) return;
        const n = document.createElement('div');
        let r = De;
        function s() {
            if (!t) return;
            (r(),
                (n.style.visibility = 'hidden'),
                (n.className = o(zs, t.children[0].className)),
                (n.innerHTML = ''),
                t.appendChild(n));
            const e = t.children[0];
            if (!e) return console.warn("MultilineOverflow can't get first child to handle it", t);
            const s = ((a = t.getBoundingClientRect()), { x: (i = e.getBoundingClientRect()).x - a.x, y: i.y - a.y });
            var a, i;
            (e instanceof HTMLElement && (n.style.cssText = e.style.cssText),
                (n.style.left = `${s.x}px`),
                (n.style.top = `${s.y}px`));
            for (let t of e.childNodes.values()) {
                if (t instanceof HTMLElement) {
                    const e = t.cloneNode(!0);
                    n.appendChild(e);
                }
                if (t.nodeType === Node.TEXT_NODE) {
                    const e = document.createTextNode(t.nodeValue ?? '');
                    n.appendChild(e);
                }
            }
            const c = document.createElement('div');
            ((c.innerHTML = '...'),
                n.appendChild(c),
                (r = Ke(() => {
                    const e = [];
                    for (let r = n.childNodes.length - 2; 0 !== r; r--) {
                        const s = n.childNodes[r];
                        if (s instanceof HTMLElement) {
                            if (s.offsetTop + s.offsetHeight <= t.offsetHeight) break;
                            e.push(s);
                        }
                    }
                    if (0 === e.length) (E(!1), c.remove());
                    else {
                        (E(!0), e.forEach((e) => e.remove()));
                        let n = 0;
                        for (; n++ < 1e3 && c.previousSibling && c.offsetTop + c.offsetHeight > t.offsetHeight; )
                            c.previousSibling?.remove();
                    }
                    n.style.visibility = '';
                })));
        }
        const a = new ResizeObserver(s);
        return (
            a.observe(t),
            new Ie()
                .add(() => r())
                .add(Oe(window, 'resize', s))
                .add(a.disconnect.bind(a))
                .add(n.remove.bind(n)).dispose
        );
    }, [x, e]);
    const R = (function (e) {
            return !e || Object.values(e).every(js);
        })(n),
        S = Qt(
            'format_text',
            s.useMemo(
                () => ({
                    text: e,
                    params: R ? n : void 0,
                    split: c,
                    upgradeLegacy: i,
                    brackets: t,
                    resId: w.resolve('views').read((e) => e.mono.tooltips.tooltips('resId')),
                }),
                [e, t, c, i, n, R],
            ),
        ),
        T = m ?? S;
    if (
        (s.useEffect(() => {
            f || v || T.onMouseLeave();
        }, [v, T, m, f, R]),
        0 === e.length)
    )
        return null;
    return a.jsx('div', {
        ...b,
        onMouseEnter: function (e) {
            (l?.(e), v && !f && T.onMouseEnter(e));
        },
        onClick: function (e) {
            (d?.(e), f || T.onClick());
        },
        onMouseLeave: function (e) {
            (u?.(e), f || T.onMouseLeave());
        },
        ref: bn([x, y]),
        className: o(Ls, h, _?.base),
        style: g,
        children: a.jsx(Ss, {
            text: e,
            brackets: t,
            params: n,
            upgradeLegacy: i,
            split: c,
            formatters: r,
            className: _?.text,
            style: { ...p, visibility: 'hidden' },
        }),
    });
});
function Fs({ className: e, ...t }) {
    return a.jsx('div', { className: e, children: t.text.split('\n').map((e) => a.jsx(Ss, { ...t, text: e }, e)) });
}
function Us(e) {
    (void 0 !== e.onSizeChanged && console.warn('[ExtendedText Adapter] Property "onSizeChanged" doesn\'t support'),
        void 0 !== e.targetId && console.warn('[ExtendedText Adapter] Property "targetId" doesn\'t support'));
    const t = e.isTruncationAvailable || e.truncateIdentify ? $s : Fs;
    return a.jsx(t, {
        split: e.split ?? !0,
        text: e.text,
        params: e.binding,
        style: { alignContent: e.alignContent, justifyContent: e.justifyContent },
        upgradeLegacy: !0,
        className: o(e.className, e.classMix),
    });
}
const Hs = { superCompact: 'superCompact', compact: 'compact', default: 'default', detailed: 'detailed' },
    Gs = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48', x80x80: 'x80x80' },
    Vs = { accent: 'accent', cooldown: 'cooldown' },
    Ws = {
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
function qs({ size: e, preFormatted: t }) {
    const n = [];
    for (let r = 0; r < t.items.length; ++r)
        (t.separator &&
            r > 0 &&
            n.push(a.jsx('span', { className: _(Ws.detailedSeparator, Ws[`detailedSeparator__${e}`]) }, 'separator')),
            n.push(
                a.jsx(
                    'span',
                    {
                        className: _(Ws.item, Ws[`item__${e}`]),
                        children: t.items[r]
                            ?.split(' ')
                            .map((t, n) =>
                                a.jsx('span', { className: _(Ws.part, Ws[`part__${e}`]), children: t }, `part_${n}`),
                            ),
                    },
                    `item_${r}`,
                ),
            ));
    return n;
}
const Ys = w.resolve('strings'),
    Xs = 'D',
    Qs = 'h',
    Ks = 'm',
    Zs = { [Hs.compact]: [Xs, Qs, Ks], [Hs.default]: [Xs, Qs, Ks], [Hs.detailed]: [Xs, 'hh', 'mm', 'ss'] },
    Js = {
        [Hs.compact]: function (e, t) {
            const n = e.length,
                r = Zs[t],
                s = { separator: !1, items: [] };
            for (let a = 0; a < n; ++a) if (Number(e[a]) > 0) return ((s.items = [ea[r[a]]?.(e[a])]), s);
            return ((s.items = [ea[Ks]?.(1)]), s);
        },
        [Hs.default]: function (e, t) {
            let n = 0;
            const r = e.length - 1,
                s = Zs[t],
                a = { separator: !1, items: [] };
            for (; n < r && !(Number(e[n]) > 0); ++n);
            s[n] === Ks && 0 === Number(e[n])
                ? (a.items = [ea[Ks]?.(1)])
                : (a.items = [n, n + 1].map((t) => ea[s[t]]?.(e[t])));
            return a;
        },
        [Hs.detailed]: function (e) {
            const [t, ...n] = e,
                r = n.join(':');
            return { separator: !0, items: Number(t) > 0 ? [ea[Xs]?.(t), r] : [r] };
        },
    },
    ea = {
        [Xs]: (e) =>
            ae(
                Ys.readOr('common.timer.days', () => Xs.toLowerCase()),
                { days: e },
            ),
        [Qs]: (e) =>
            ae(
                Ys.readOr('common.timer.hours', () => Qs),
                { hours: e },
            ),
        [Ks]: (e) =>
            ae(
                Ys.readOr('common.timer.minutes', () => Ks),
                { minutes: e },
            ),
    };
const ta = (e, t) => Js[t]?.(re(e, Zs[t]), t),
    na = {
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
function ra({
    start: e,
    limit: t = 0,
    tick: n = 1,
    size: r = Gs.x24x24,
    type: o = Vs.accent,
    format: i = Hs.default,
    autostart: c = !0,
    className: l,
    classNames: u,
}) {
    const [d] = (function (e) {
        const { type: t, tick: n, limit: r } = e,
            a = e.autostart ?? !1,
            o = e.start ?? $,
            [i, c] = s.useState({ current: o, running: a }),
            l = s.useRef(0);
        s.useEffect(
            () => (
                (l.current = window.setInterval(() => {
                    i.running
                        ? c((e) => {
                              const s = 'countdown' === t ? Z(e.current, n) : K(e.current, n),
                                  a = { ...e, current: s };
                              return (
                                  L(r) &&
                                      ('countdown' === t
                                          ? te(Z(s, n), r) && ((a.current = r), (a.running = !1))
                                          : ee(K(s, n), r) && ((a.current = r), (a.running = !1))),
                                  a
                              );
                          })
                        : window.clearInterval(l.current);
                }, Y(n))),
                () => {
                    window.clearInterval(l.current);
                }
            ),
            [r, n, i.running, t],
        );
        const u = s.useMemo(
            () => ({
                start: () => c((e) => ({ ...e, isRunning: !0 })),
                stop: () => c((e) => ({ ...e, isRunning: !1 })),
                isRunning: () => i.running,
            }),
            [i.running],
        );
        return [i.current, u];
    })(
        s.useMemo(
            () => ({
                type: 'countdown',
                start: L(e) ? e : F(e),
                limit: L(t) ? t : F(t),
                tick: L(n) ? n : F(n),
                autostart: c,
            }),
            [c, t, e, n],
        ),
    );
    return a.jsxs('div', {
        className: _(na.base, l),
        children: [
            a.jsx('div', { className: _(na.icon, na[`icon__${r}`], na[`icon__${o}`], u?.icon) }),
            i !== Hs.superCompact &&
                a.jsx('div', {
                    className: _(na.label, na[`label__${r}`], na[`label__${o}`], u?.label),
                    children: a.jsx(qs, { size: r, preFormatted: ta(d, i) }),
                }),
        ],
    });
}
((ra.format = Hs), (ra.size = Gs), (ra.type = Vs));
const sa = 'Tooltip_decorator_b3486d4e',
    aa = Sn('Base', 'Tooltip_6d997cee'),
    oa = Sn('Decorator', sa),
    ia = s.forwardRef(function ({ children: e, ...t }, n) {
        const r = s.useRef(null);
        return (
            Ct(r, (e) => {
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
            a.jsx(aa, {
                ...t,
                ref: function (e) {
                    ((r.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                children: e,
            })
        );
    });
ia.Decorator = oa;
var ca = ((e) => (
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
    ))(ca || {}),
    la = ((e) => (
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
    ))(la || {}),
    ua = ((e) => (
        (e.MULTI = 'multi'),
        (e.CURRENCY = 'currency'),
        (e.PREMIUM_PLUS = 'premium_plus'),
        (e.NUMBER = 'number'),
        (e.STRING = 'string'),
        e
    ))(ua || {}),
    da = ((e) => (
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
    ))(da || {}),
    fa = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(fa || {}),
    ma = ((e) => (
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
    ))(ma || {});
const ha = [
        ca.Items,
        ca.Equipment,
        ca.Xp,
        ca.XpFactor,
        ca.Blueprints,
        ca.BlueprintsAny,
        ca.Goodies,
        ca.Berths,
        ca.Slots,
        ca.Tokens,
        ca.CrewSkins,
        ca.CrewBooks,
        ca.Customizations,
        ca.CreditsFactor,
        ca.TankmenXp,
        ca.TankmenXpFactor,
        ca.FreeXpFactor,
        ca.BattleToken,
        ca.LootBox,
        ca.PremiumUniversal,
        ca.NaturalCover,
        ca.BpCoin,
        ca.BattlePassSelectToken,
        ca.BattlaPassFinalAchievement,
        ca.BattleBadge,
        ca.BonusX5,
        ca.CrewBonusX3,
        ca.EpicSelectToken,
        ca.Comp7TokenWeeklyReward,
        ca.DeluxeGift,
        ca.BattleBoosterGift,
        ca.OptionalDevice,
    ],
    _a = [ca.Gold, ca.Credits, ca.Crystal, ca.FreeXp],
    pa = [ca.BattlePassPoints, ca.EquipCoin],
    ga = [ca.PremiumPlus, ca.Premium],
    ba = (e) =>
        ha.includes(e)
            ? ua.MULTI
            : _a.includes(e)
              ? ua.CURRENCY
              : pa.includes(e)
                ? ua.NUMBER
                : ga.includes(e)
                  ? ua.PREMIUM_PLUS
                  : ua.STRING,
    xa = ['engravings', 'backgrounds'],
    wa = ['engraving', 'background'],
    ya = (e, t = la.Small) => {
        const { name: n, type: r, value: s, icon: a, item: o, dogTagType: i } = e,
            c = t === la.S24x24 ? la.Small : t,
            l = ((e) => {
                switch (e) {
                    case la.S600x450:
                        return 'c_600x450';
                    case la.S400x300:
                        return 'c_400x300';
                    case la.S296x222:
                        return 'c_296x222';
                    case la.S232x174:
                        return 'c_232x174';
                    case la.Big:
                        return 'c_80x80';
                    case la.Small:
                        return 'c_48x48';
                    default:
                        return e;
                }
            })(c);
        switch (n) {
            case 'basic':
            case 'plus':
                return `R.images.gui.maps.icons.quests.bonuses.${c}.${r}_${s}`;
            case 'premium':
            case 'premium_plus':
                return `R.images.gui.maps.icons.quests.bonuses.${c}.${n}_${s}`;
            case 'items':
                return `R.images.gui.maps.icons.quests.bonuses.${c}.${o}`;
            case 'blueprints':
            case 'blueprintsAny':
            case 'finalBlueprints':
                return `R.images.gui.maps.icons.blueprints.fragment.${c}.${a}`;
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
                return `R.images.gui.maps.icons.quests.bonuses.${c}.${a}`;
            case 'crewBooks':
                return `R.images.gui.maps.icons.crewBooks.books.${c}.${a}`;
            case 'dogTagComponents':
                return ((e, t, n) => {
                    const r = xa[e];
                    if (r) {
                        const s = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                            a = s.$dyn(n);
                        return !a && wa[e] ? `${s.$dyn(wa[e])}` : `${a}`;
                    }
                    return (
                        console.error(
                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                        ),
                        ''
                    );
                })(i, c, a);
            case 'dossier_badge':
                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
            case 'dossier_achievement':
                return `R.images.gui.maps.icons.achievement.${l}.${a}`;
            case 'xp':
            case 'xpFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${c}.exp`;
            case 'creditsFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${c}.credits`;
            case 'tankmenXPFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${c}.tankmenXP`;
            case 'dailyXPFactor':
            case 'freeXPFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${c}.freeXP`;
            case 'premiumTank':
                return `R.images.gui.maps.icons.quests.bonuses.${c}.vehicles`;
            case 'styleProgressToken':
                return `R.images.gui.maps.icons.quests.bonuses.${c}.style_3d`;
            case 'collectionItem':
                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
            default:
                return `R.images.gui.maps.icons.quests.bonuses.${c}.${n}`;
        }
    },
    va = (e, t) => ({ args: e, contentId: t }),
    Ea = [la.Small, la.Big],
    Ra = {
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
        base: 'Reward_d65e1e12',
        base__dynamicBox: 'Reward_base__dynamicBox_45d7782b',
        tooltipWrapper: 'Reward_tooltipWrapper_75b925a5',
        icon: 'Reward_icon_e152f13b',
        overlay: 'Reward_overlay_8cbe65c9',
        highlight: 'Reward_highlight_f1cd08e0',
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
        image: 'Reward_image_810ec3a2',
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
    Sa = w.resolve('images'),
    Ta = new Map([
        [la.S24x24, la.Small],
        [la.S48x48, la.Small],
    ]),
    Na = ({
        name: e,
        image: t,
        isPeriodic: n = !1,
        isFixedBoxSize: r = !0,
        size: s = la.Big,
        special: o,
        value: i,
        valueType: c,
        title: l,
        style: u,
        className: d,
        classNames: f,
        tooltipArgs: m,
        periodicIconTooltipArgs: h,
    }) => {
        const p = Ta.has(s) ? Ta.get(s) : s,
            g = ((e, t) => {
                if (void 0 === t || !Ea.includes(e)) return null;
                switch (t) {
                    case da.BATTLE_BOOSTER:
                    case da.BATTLE_BOOSTER_REPLACE:
                        return fa.BATTLE_BOOSTER;
                }
            })(s, o),
            b = ((e) => {
                if (void 0 === e) return null;
                switch (e) {
                    case da.BATTLE_BOOSTER:
                        return ma.BATTLE_BOOSTER;
                    case da.BATTLE_BOOSTER_REPLACE:
                        return ma.BATTLE_BOOSTER_REPLACE;
                    case da.BUILT_IN_EQUIPMENT:
                        return ma.BUILT_IN_EQUIPMENT;
                    case da.EQUIPMENT_PLUS:
                        return ma.EQUIPMENT_PLUS;
                    case da.EQUIPMENT_TROPHY_BASIC:
                        return ma.EQUIPMENT_TROPHY_BASIC;
                    case da.EQUIPMENT_TROPHY_UPGRADED:
                        return ma.EQUIPMENT_TROPHY_UPGRADED;
                    case da.EQUIPMENT_MODERNIZED_UPGRADED_1:
                        return ma.EQUIPMENT_MODERNIZED_UPGRADED_1;
                    case da.EQUIPMENT_MODERNIZED_UPGRADED_2:
                        return ma.EQUIPMENT_MODERNIZED_UPGRADED_2;
                    case da.EQUIPMENT_MODERNIZED_UPGRADED_3:
                        return ma.EQUIPMENT_MODERNIZED_UPGRADED_3;
                    case da.PROGRESSION_STYLE_UPGRADED_1:
                        return ma.PROGRESSION_STYLE_UPGRADED_1;
                    case da.PROGRESSION_STYLE_UPGRADED_2:
                        return ma.PROGRESSION_STYLE_UPGRADED_2;
                    case da.PROGRESSION_STYLE_UPGRADED_3:
                        return ma.PROGRESSION_STYLE_UPGRADED_3;
                    case da.PROGRESSION_STYLE_UPGRADED_4:
                        return ma.PROGRESSION_STYLE_UPGRADED_4;
                    case da.PROGRESSION_STYLE_UPGRADED_5:
                        return ma.PROGRESSION_STYLE_UPGRADED_5;
                    case da.PROGRESSION_STYLE_UPGRADED_6:
                        return ma.PROGRESSION_STYLE_UPGRADED_6;
                    case da.ATTACHMENT_RARE:
                        return ma.ATTACHMENT_RARE;
                    case da.ATTACHMENT_EPIC:
                        return ma.ATTACHMENT_EPIC;
                    case da.ATTACHMENT_LEGENDARY:
                        return ma.ATTACHMENT_LEGENDARY;
                }
            })(o),
            x = ((e, t) => {
                const n = w.resolve('intl');
                if (void 0 === e) return null;
                switch (t) {
                    case ua.MULTI: {
                        const t = Number(e);
                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                    }
                    case ua.CURRENCY:
                    case ua.NUMBER:
                        return n.formatNumber(n.numberFormats[0] || 'integral', Number(e));
                    case ua.PREMIUM_PLUS: {
                        const t = Number(e);
                        return isNaN(t) ? e : null;
                    }
                    default:
                        return e;
                }
            })(i, c),
            y = Yt({ contentId: m?.contentId ?? 0, args: m?.args, resId: m?.resId, decoratorId: m?.decoratorId }),
            v = Xt({ header: h?.header, body: h?.body });
        return a.jsxs('div', {
            className: _(Ra.base, Ra[`base__${s}`], !r && Ra.base__dynamicBox, d),
            style: u,
            ...y,
            children: [
                a.jsxs(a.Fragment, {
                    children: [
                        a.jsxs('div', {
                            className: _(Ra.image, r ? Ra.image__fixedBox : Ra[`image__${s}`], f?.image),
                            children: [
                                g &&
                                    a.jsx('div', {
                                        className: _(Ra.highlight, f?.highlight),
                                        style: {
                                            backgroundImage: `url(${Sa.readOrEmpty(`quests.bonuses.${p}.${g}_highlight`)})`,
                                        },
                                    }),
                                t &&
                                    a.jsx('div', {
                                        className: _(Ra.icon, f?.rewardIcon),
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                b &&
                                    a.jsx('div', {
                                        className: _(Ra.overlay, f?.overlay),
                                        style: {
                                            backgroundImage: `url(${Sa.readOrEmpty(`quests.bonuses.${p}.${b}_overlay`)})`,
                                        },
                                    }),
                            ],
                        }),
                        x &&
                            a.jsx('div', {
                                className: _(Ra.info, Ra[`info__${e}`], c === ua.MULTI && Ra.info__multi, f?.info),
                                children: x,
                            }),
                        l && a.jsx('div', { className: Ra.title, children: l }),
                    ],
                }),
                n && a.jsx('div', { className: _(Ra.timer, f?.periodicIcon), ...v }),
            ],
        });
    },
    Ca = Object.fromEntries(Object.entries(fs).map(([e]) => [e, (e) => e]));
const Pa = 'RewardsList_b956755b',
    Ma = 'RewardsList_base__vertical_59db3c9f',
    ka = 'RewardsList_reward_fc200613',
    Ba = 'RewardsList_reward__vertical_5f09c6e0',
    Da = 'RewardsList_boxRewardClassName_882c908d',
    Aa = { [la.S24x24]: la.Small, [la.S48x48]: la.Small },
    Ia = s.memo(function ({
        data: e,
        isFixedBoxSize: t,
        size: n = la.Big,
        isVertical: r = !1,
        count: s,
        classMix: o,
        rewardItemClassMix: i,
        boxRewardTooltip: c,
        boxRewardValue: l,
        boxRewardClassName: u,
        boxRewardClassNames: d,
    }) {
        const f = w.resolve('strings'),
            m = w.resolve('images'),
            h =
                'number' == typeof s && s < e.length
                    ? `${m.readOrEmpty(`quests.bonuses.${Aa[n] ?? n}.default`)}`
                    : void 0,
            p =
                l ||
                (function (e, t = {}) {
                    const n = ss(e, Rs);
                    return String(xs(n, Ca, t));
                })(Es(f.readOrEmpty('tooltips.quests.awards.additional.bottom')), { count: e.length - (s || 0) });
        return a.jsx('div', {
            className: _(Pa, r && Ma, o),
            children:
                void 0 !== h
                    ? a.jsxs(a.Fragment, {
                          children: [
                              e
                                  .slice(0, s)
                                  .map((e, s) =>
                                      a.jsx(
                                          'div',
                                          {
                                              className: _(ka, r && Ba, i),
                                              children: a.jsx(Na, { size: n, isFixedBoxSize: t, ...e }),
                                          },
                                          s,
                                      ),
                                  ),
                              a.jsx('div', {
                                  className: _(ka, r && Ba, i),
                                  children: a.jsx(Na, {
                                      name: 'more',
                                      isFixedBoxSize: t,
                                      image: h,
                                      size: n,
                                      value: p,
                                      tooltipArgs: c,
                                      className: _(Da, u),
                                      classNames: d,
                                  }),
                              }),
                          ],
                      })
                    : e.map((e, s) =>
                          a.jsx(
                              'div',
                              {
                                  className: _(ka, r && Ba, i),
                                  children: a.jsx(Na, { size: n, isFixedBoxSize: t, ...e }),
                              },
                              s,
                          ),
                      ),
        });
    });
function Oa(e) {
    return (t) => b(e, JSON.parse(t));
}
var ja = ((e) => ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'), e))(ja || {});
['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
const La = s.createContext(void 0);
function za() {
    const e = s.useContext(La);
    if (!e) throw new Error('useProgressBar must be used within a ProgressBar');
    return e;
}
const $a = {
        fill: 'Filled_fill_32930ca9',
        filled: 'Filled_228d842a',
        wrapper: 'Filled_wrapper_fac9294',
        filled__small: 'Filled_filled__small_94d1350d',
        pattern: 'Filled_pattern_6ec8608d',
        filled__medium: 'Filled_filled__medium_94d1350d',
    },
    Fa = s.forwardRef(function ({ className: e, classNames: t, ...n }, r) {
        const s = za();
        return a.jsx('div', {
            ...n,
            ref: r,
            className: o($a.filled, $a[`filled__${s.size}`], e),
            children: a.jsxs('div', {
                className: o($a.wrapper, t?.wrapper),
                children: [
                    a.jsx('div', { className: o($a.fill, t?.fill), style: { width: 100 * s.percentage + '%' } }),
                    a.jsx('div', { className: o($a.pattern, t?.pattern), style: { width: 100 * s.percentage + '%' } }),
                ],
            }),
        });
    });
function Ua(e) {
    const [t, n] = s.useState(Math.min(e.value, e.maxValue)),
        [r, o] = s.useState(e.maxValue),
        i = Rt(t),
        c = Rt(r),
        l = Nt((t) => n(Math.min(t, e.maxValue)));
    (s.useLayoutEffect(() => {
        l(e.value);
    }, [e.value, l]),
        s.useLayoutEffect(() => {
            o(e.maxValue);
        }, [e.maxValue]));
    const u = Nt((t) => e.onValueChange?.(t));
    s.useEffect(() => {
        u(t);
    }, [u, t]);
    const d = Nt((t) => e.onMaxValueChange?.(t));
    s.useEffect(() => {
        d(r);
    }, [d, r]);
    const f = s.useMemo(() => {
        if (void 0 !== i && void 0 !== c) return { value: i, maxValue: c, percentage: i / c };
    }, [i, c]);
    Ze(r > 0, 'ProgressBar: maxValue must be greater than 0');
    const m = s.useMemo(
        () => ({
            value: t,
            maxValue: r,
            setValue: l,
            setMaxValue: o,
            size: e.size,
            previous: f,
            percentage: t / r,
            animationEnabled: e.animationEnabled,
        }),
        [t, r, l, o, f, e.size, e.animationEnabled],
    );
    return a.jsx(La.Provider, { value: m, children: e.children });
}
const Ha = 'ProgressBar_background_b40cdfdf',
    Ga = 'ProgressBar_backgroundPattern_7e932276',
    Va = Sn('ProgressBar', 'ProgressBar_27c2305c', {
        variants: {
            size: {
                small: 'ProgressBar_base__small_61ccd4be',
                medium: 'ProgressBar_base__medium_478d985a',
                full: 'ProgressBar_base__full_be7f12da',
            },
        },
    });
function Wa({ size: e = 'medium', className: t, classNames: n, filledClassName: r, filledClassNames: s, ...i }) {
    return a.jsx(Ua, {
        size: e,
        ...i,
        children: a.jsxs(Va, {
            size: e,
            className: t,
            children: [
                a.jsx('div', { className: o(Ha, n?.background) }),
                a.jsx('div', { className: o(Ga, n?.backgroundPattern) }),
                a.jsx(Fa, { className: r, classNames: s }),
                i.children,
            ],
        }),
    });
}
const qa = 'Delta_5c8185db',
    Ya = 'Delta_delta__increase_e6e76b0b',
    Xa = 'Delta_glow_8e83fd7a',
    Qa = s.memo(
        s.forwardRef(function (
            { initValue: e, initMaxValue: t, animationEnabled: n = !0, animationProps: r, classNames: i, ...c },
            l,
        ) {
            const u = s.useRef(null),
                d = s.useRef(null),
                f = za(),
                m = s.useMemo(() => {
                    if ('number' != typeof e || 'number' != typeof t) return;
                    Ze(t > 0, 'initMaxValue must be greater than 0');
                    const n = Math.min(e, t);
                    return { value: n, maxValue: t, percentage: n / t };
                }, [e, t]),
                h = f.previous ?? m;
            return (
                s.useEffect(() => {
                    const e = u.current,
                        t = d.current;
                    if (!e || !h || !t) return;
                    const s = f.percentage - h.percentage;
                    if (
                        ((e.style.left = 100 * Math.max(0, f.percentage - Math.max(0, s)) + '%'),
                        (e.style.width = 100 * Math.abs(s) + '%'),
                        e.classList.toggle(Ya, s > 0),
                        (t.style.width = '100%'),
                        n && 0 != s)
                    ) {
                        const e = new x({
                            ...r,
                            from: { ...r?.from, width: 100 },
                            to: { ...r?.to, width: 0 },
                            onChange: (e, ...n) => {
                                ((t.style.width = `${e.value.width}%`),
                                    'function' == typeof r?.onChange && r?.onChange?.(e, ...n));
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
                a.jsxs('div', {
                    ...c,
                    ref: bn([l, u]),
                    className: o(c.className, qa),
                    children: [h && a.jsx('div', { className: o(Xa, i?.glow), ref: d }), c.children],
                })
            );
        }),
    ),
    Ka = s.createContext(void 0);
function Za() {
    const e = s.useContext(Ka);
    if (!e) throw new Error('Card context must be used only within its provider');
    return e;
}
function Ja({ selected: e, hover: t, disabled: n, multiple: r, status: o, children: i }) {
    const c = s.useMemo(() => ({ selected: e, hover: t, disabled: n, multiple: r, status: o }), [n, t, r, e, o]);
    return a.jsx(Ka.Provider, { value: c, children: i });
}
const eo = s.createContext(null);
const to = eo.Provider,
    no = 'Content_ab8563af',
    ro = 'Content_disabledOverlay_af87c441',
    so = 'Content_multipleCorner_151c26ee',
    ao = Sn('Content', 'Content_8eaaf71a', {
        variants: {
            multiple: { true: 'Content_base__multiple_da09528a' },
            selected: { true: 'Content_base__selected_da09528a' },
            hover: { true: 'Content_base__hover_da09528a' },
            disabled: { true: 'Content_base__disabled_da09528a' },
        },
        compoundVariants: [{ hover: !0, selected: !0, className: 'Content_base__selectedHover_da09528a' }],
    }),
    oo = ({ children: e, classNames: t }) => {
        const n = f.useRef(null),
            r = Za();
        return (
            f.useEffect(() => {
                if (r.multiple)
                    return Ke(() => {
                        if (n.current) {
                            const e = n.current.getBoundingClientRect(),
                                t = Math.round((20 / e.width) * 100),
                                r = Math.round((20 / e.height) * 100);
                            (n.current.style.setProperty('--corner-width', `${t}%`),
                                n.current.style.setProperty('--corner-height', `${r}%`));
                        }
                    });
            }),
            a.jsxs(ao, {
                multiple: r.multiple,
                selected: r.selected,
                hover: r.hover,
                disabled: r.disabled,
                children: [
                    r.multiple && a.jsx('div', { className: so }),
                    a.jsxs('div', {
                        ref: n,
                        className: o(no, t?.mainContainerContent),
                        children: [r.disabled && a.jsx('div', { className: ro }), e],
                    }),
                ],
            })
        );
    },
    io = {
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
    co = w.resolve('strings');
Sn('Status', io.base, {
    variants: { status: { done: io.base__done, alert: io.base__alert, locked: io.base__locked } },
});
const lo = ({ header: e, body: t }) => Boolean(e && t),
    uo = ({ reason: e, classNames: t }) => {
        const n = s.useRef(null),
            [r, i] = f.useState(!1),
            c = `base__${Za().status}${r ? 'Small' : ''}`,
            l = f.useCallback(() => {
                const e = n.current?.getBoundingClientRect();
                e && i(e.width <= 100);
            }, [n]);
        Ct(n, l);
        const u = e
                ? {
                      header: co.readOrEmpty(`tooltips.moduleFits.${e}.header`),
                      body: co.readOrEmpty(`tooltips.moduleFits.${e}.text`),
                  }
                : {},
            d = Xt(u);
        return a.jsxs('div', {
            className: o(io.base, io[c], t?.wrapper),
            ref: n,
            children: [
                a.jsx('div', { className: io.glowBig }),
                a.jsx('div', { className: io.line }),
                a.jsx('div', { className: io.shadow }),
                a.jsx('div', { className: io.glowInner }),
                a.jsx('svg', {
                    width: '42',
                    height: '42',
                    viewBox: '0 0 42 42',
                    className: io.blur,
                    children: a.jsx('g', { children: a.jsx('circle', { cx: '21', cy: '21', r: '3' }) }),
                }),
                a.jsx('div', { ...(lo(u) && d), className: o(io.icon, t?.icon) }),
            ],
        });
    },
    fo = 'Card_base__wrapped_c6eb8737',
    mo = 'Card_f7ddaa4a',
    ho = 'Card_content_b6f6a22a',
    _o = 'Card_centerBorder_8a0f28ae',
    po = Sn('Card', 'Card_f0963ece', {
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
    go = s.forwardRef(function (
        {
            children: e,
            active: t,
            status: n,
            statusReason: r,
            disableMouse: i,
            onMouseOver: c,
            onMouseOut: l,
            soundTarget: u,
            disabled: d = !1,
            className: f,
            classNames: m,
            ...h
        },
        _,
    ) {
        const [p, g] = s.useState(!1),
            b = nn(),
            x = s.useContext(eo),
            w = i || d;
        return a.jsx(po, {
            ...h,
            ref: _,
            hover: p,
            disableMouse: i,
            active: t,
            className: o(mo, f, x?.enabled && fo),
            children: a.jsxs(Ja, {
                disabled: d,
                selected: h.selected ?? !1,
                multiple: h.multiple ?? !1,
                hover: p,
                status: n,
                children: [
                    a.jsx('div', {
                        className: o(ho, m?.content),
                        onClick: function (e) {
                            w || b.play('click', { target: u || 'react-ui:card', original: e });
                        },
                        onMouseEnter: function (e) {
                            w || b.play('mouse-enter', { target: u || 'react-ui:card', original: e });
                        },
                        onMouseOver: function (e) {
                            w || (g(!0), c?.(e));
                        },
                        onMouseOut: function (e) {
                            w || (g(!1), l?.(e));
                        },
                        children: a.jsx(oo, { classNames: m, children: e }),
                    }),
                    a.jsx('div', { className: _o }),
                    n && a.jsx(uo, { reason: r, classNames: m?.status }),
                ],
            }),
        });
    }),
    bo = 'none',
    xo = 'contour',
    wo = (e, t) => ({ x: e, y: t });
function yo(e) {
    let { x: t, y: n, width: r, height: s } = e;
    const a = wo(t, n),
        o = wo(t + r, n),
        i = wo(t + r, n + s),
        c = wo(t, n + s);
    return [
        [a, o],
        [o, i],
        [i, c],
        [c, a],
    ];
}
function vo(e, t) {
    return (function (e) {
        if (0 === e.length) return [];
        const t = e[0],
            n = { x: t[0].x - 3, y: t[0].y - 3 },
            r = [n];
        let s = t[1],
            a = n,
            o = n,
            i = -3,
            c = -3;
        for (e.splice(0, 1); e.length > 0; ) {
            const t = e.findIndex((e) => e[0].x === s.x && e[0].y === s.y);
            if (-1 === t) break;
            const n = e[t],
                l = s;
            (s.x <= o.x ? (c = 3) : (3 === c && (a.y -= 6), (c = -3)),
                s.y >= o.y ? (i = 3) : (3 === i && (a.x -= 6), (i = -3)),
                (s = { x: s.x + i, y: s.y + c }),
                r.push(s),
                (o = l),
                (a = s),
                (s = n[1]),
                e.splice(t, 1));
        }
        return (3 === c && 3 === i && (a = { ...a, x: a.x - 6 }), r.push(n), r);
    })(
        (function (e) {
            const t = e.flatMap(yo),
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
class Eo {
    constructor(e) {
        this.containerRect = e;
    }
    lines = new Map();
    addLine(e, t, n, r, s) {
        const a = `${1 === n ? 'V' : 'H'}-${1 === n ? Math.round(e) : Math.round(t)}-${s}`;
        this.lines.has(a) || this.lines.set(a, []);
        const o = { x: e - this.containerRect.x, y: t - this.containerRect.y, width: n, height: r, className: s };
        this.lines.get(a)?.push(o);
    }
    run() {
        const e = [];
        return (
            this.lines.forEach((t, n) => {
                const r = 'H' === n.at(0),
                    s = t.sort((e, t) => (r ? e.x - t.x : e.y - t.y));
                let a = null;
                (s.forEach((t) => {
                    if (a)
                        if (r) {
                            const n = a.x + a.width,
                                r = t.x + t.width;
                            t.x >= a.x && t.x <= n ? (a = { ...a, width: Math.max(r, n) - a.x }) : (e.push(a), (a = t));
                        } else {
                            const n = a.y + a.height,
                                r = t.y + t.height;
                            t.y >= a.y && t.y <= n
                                ? (a = { ...a, height: Math.max(r, n) - a.y })
                                : (e.push(a), (a = t));
                        }
                    else a = t;
                }),
                    a && e.push(a));
            }),
            e
        );
    }
}
const Ro = 'LinesBuilder_lineInner_a52dc157',
    So = 'LinesBuilder_lineOuter_c57514b2';
const To = s.memo(({ containerRef: e, generation: t, border: n, cardSelector: r }) => {
        const [o, i] = s.useState([]),
            c = Nt(() => {
                const t = e.current;
                if (!t) return;
                const s = t.getBoundingClientRect(),
                    a = (function (e, t, n) {
                        const r = [],
                            s = new Eo(t);
                        for (let a = 0; a < e.length; a++) {
                            const t = e[a],
                                o = t.getBoundingClientRect();
                            if (0 === o.width || 0 === o.height)
                                return void console.debug(
                                    `Card rect has zero size by one side: ${o.width}x${o.height} (${t.getAttribute('data-test-id')}) `,
                                );
                            (n !== bo && r.push({ x: o.x, y: o.y, width: o.width, height: o.height }),
                                s.addLine(o.x, o.y, o.width, 1, Ro),
                                s.addLine(o.x, o.y + o.height, o.width, 1, Ro),
                                s.addLine(o.x, o.y, 1, o.height, Ro),
                                s.addLine(o.x + o.width, o.y, 1, o.height + 1, Ro));
                        }
                        if (n !== bo) {
                            const e = vo(r);
                            let t = null;
                            e.forEach((e) => {
                                if (t) {
                                    const n = t.y === e.y,
                                        r = t,
                                        a = e;
                                    s.addLine(
                                        Math.min(r.x, a.x),
                                        Math.min(r.y, a.y),
                                        n ? Math.abs(a.x - r.x) : 1,
                                        n ? 1 : Math.abs(a.y - r.y) + 1,
                                        So,
                                    );
                                }
                                t = e;
                            });
                        }
                        return s.run();
                    })(t.querySelectorAll(`.${r || mo}`), s, n);
                i(a ?? []);
            });
        return (
            s.useEffect(c, [c, t]),
            a.jsx(a.Fragment, {
                children: o.map((e, t) =>
                    a.jsx(
                        'div',
                        { className: e.className, style: { left: e.x, top: e.y, width: e.width, height: e.height } },
                        t,
                    ),
                ),
            })
        );
    }),
    No = 'CardsWrapper_3b6cc4f6',
    Co = 'CardsWrapper_card_c7fc9ee7',
    Po = 'CardsWrapper_centerBorderCommon_b4b27a11',
    Mo = 'CardsWrapper_outerBorderCommon_f4887371',
    ko = Sn('CardsWrapper', No),
    Bo = s.forwardRef(function (
        { children: e, className: t, threshold: n, border: r = xo, enabled: o = !0, cardSelector: i, ...c },
        l,
    ) {
        const u = s.useRef([]),
            d = s.useRef(null),
            [f, m] = s.useState('');
        s.useImperativeHandle(l, () => d.current);
        const h = s.useCallback(
            (e) => {
                const t = d.current;
                if (!t) return;
                const n = t.querySelectorAll(`.${i || mo}`);
                if (n.length > 0) {
                    const r = t.getBoundingClientRect(),
                        s = n.length;
                    s !== u.current.length && (u.current = Array.from(n));
                    const a = `${Math.round(r.width)}x${Math.round(r.height)}-${s}|${e}`;
                    m(a);
                } else m('');
            },
            [i],
        );
        (s.useEffect(() => {
            h(n);
        }),
            Ct(
                d,
                s.useCallback(() => h(), [h]),
            ));
        const _ = s.useMemo(() => ({ recalculate: h, enabled: o }), [h, o]);
        return a.jsx(ko, {
            ...c,
            ref: d,
            children: a.jsxs('div', {
                className: t,
                children: [
                    a.jsx(to, { value: _, children: e }),
                    a.jsx(To, { cardsRef: u, containerRef: d, border: r, generation: f, cardSelector: i }),
                ],
            }),
        });
    });
function Do(e) {
    for (const t in e) return !1;
    return !0;
}
s.forwardRef(({ className: e, classNames: t, ...n }, r) =>
    a.jsxs('div', {
        className: o(No, t?.wrapper),
        children: [
            a.jsx('div', { className: Po }),
            a.jsx('div', { className: Mo }),
            a.jsx(go, { className: o(Co, e, t?.card), classNames: t, ...n, ref: r }),
        ],
    }),
);
const Ao = s.forwardRef(function (
        {
            src: e,
            className: t,
            autoplay: n = !1,
            style: r,
            loop: o = !1,
            isPrebufferKeyframes: i,
            keyframesNameConfig: c,
            onClick: l,
            ...u
        },
        d,
    ) {
        const f = d,
            m = s.useRef(null);
        return (
            kt(() => {
                let e = !1;
                return be.onDisplayChanged((t, n) => {
                    const r = m.current;
                    r && (n === ge.hidden ? ((e = r.paused), r.pause()) : e || n !== ge.shown || r.play());
                });
            }),
            kt(() => {
                let e = !1;
                return de((t) => {
                    const n = m.current;
                    n && (t ? ((e = n.paused), n.pause()) : e || n.play());
                });
            }),
            s.useEffect(
                () =>
                    Ke(() => {
                        const e = m.current;
                        if (!f || !e || !i) return void (e?.cohFastSeek && (e.cohFastSeek = !1));
                        const t = e.cohGetKeyframeTimestamps ? e.cohGetKeyframeTimestamps() : [];
                        t.length > 0
                            ? ((e.cohFastSeek = !0),
                              t.map((t) => {
                                  e?.cohPrebufferKeyframe && e.cohPrebufferKeyframe(t);
                              }))
                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                    }),
                [i, f],
            ),
            s.useEffect(() => {
                if (f && m.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: De },
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
                                        m.current.paused || !f || !i)
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
                                                const n = Object.keys(c ?? {})[r];
                                                return e({ time: t, name: `${c ? n : `Point_${r}`}` });
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
                        s = () => m.current?.currentTime,
                        a = () => m.current?.duration,
                        o = (e) => {
                            m.current && (m.current.currentTime = Be(0, m.current.duration, e));
                        },
                        l = () => m.current?.play(),
                        u = () => m.current?.pause(),
                        d = () => {
                            (u(), o(0));
                        },
                        h = () => (m.current?.cohGetKeyframeTimestamps ? m.current.cohGetKeyframeTimestamps() : []),
                        _ = (e) => {
                            (o(e), l());
                        },
                        p = (e) => {
                            (o(e), u());
                        },
                        g = () => {
                            ((e.changeTimeHandlers = []), (e.changeKeyframeHandlers = []), e.changeTimeLoop?.());
                        },
                        b = (e, t) => (m.current?.addEventListener(e, t), () => m.current?.removeEventListener(e, t)),
                        x = (e, t) => (
                            m.current?.removeEventListener(e, t),
                            () => m.current?.removeEventListener(e, t)
                        );
                    return (
                        (f.current = {
                            on: b,
                            off: x,
                            play: l,
                            pause: u,
                            stop: d,
                            cleanup: g,
                            getCurrentTime: s,
                            getDuration: a,
                            getCachedKeyframes: h,
                            goToAndPlay: _,
                            goToAndStop: p,
                            setCurrentTime: o,
                            domRef: m.current,
                            onChangeTime: n,
                            onKeyframes: r,
                        }),
                        () => {
                            (g(), (f.current = null));
                        }
                    );
                }
            }, [c, f, i]),
            s.useEffect(() => {
                m.current && n && m.current.play();
            }, [n, o]),
            Bt(() => {
                m.current?.pause();
            }),
            a.jsx('video', { src: e, className: t, style: r, loop: o, ref: m, onClick: l, ...u })
        );
    }),
    Io = s.memo(Ao),
    Oo = 'VehicleLevel_3c938122',
    jo = { arabic: 'arabic', roman: 'roman' };
const Lo = s.forwardRef(function ({ value: e, numberType: t, ...n }, r) {
    const s = (function (e, t) {
            return e || (t ? jo.arabic : jo.roman);
        })(
            t,
            (function () {
                const e = w.resolve('strings');
                return Kt.includes(e.readOrEmpty('settings.LANGUAGE_CODE'));
            })(),
        ),
        i =
            s === jo.roman
                ? (function (e) {
                      if (e <= 10) return tt[e] ?? String(e);
                      let t = '';
                      for (let n = et.length - 1; n >= 0; n--) {
                          let r = et[n];
                          for (; void 0 !== r && e >= r; ) ((t += Je[n]), (e -= r));
                      }
                      return t;
                  })(e)
                : e;
    return a.jsx('div', { ...n, 'data-name': 'VehicleLevel', className: o(Oo, n.className), ref: r, children: i });
});
Lo.numberTypes = jo;
export {
    I as $,
    Jr as A,
    es as B,
    sr as C,
    Q as D,
    ia as E,
    Ss as F,
    ra as G,
    Oa as H,
    Ms as I,
    xn as J,
    ba as K,
    ya as L,
    Us as M,
    ja as N,
    Xt as O,
    Wa as P,
    Qt as Q,
    Ia as R,
    da as S,
    er as T,
    vn as U,
    Qa as V,
    go as W,
    cn as X,
    K as Y,
    nn as Z,
    Nt as _,
    Ke as a,
    Y as a0,
    Qe as a1,
    Ue as a2,
    Ze as a3,
    Do as a4,
    Pt as a5,
    rn as a6,
    qe as a7,
    Te as a8,
    Rt as a9,
    kt as aa,
    Mt as ab,
    Io as ac,
    Dt as ad,
    v as ae,
    Yt as af,
    We as ag,
    va as ah,
    Lo as ai,
    se as aj,
    Na as ak,
    Xe as al,
    or as am,
    Ft as an,
    St as ao,
    Or as ap,
    Ar as aq,
    jr as ar,
    Bo as as,
    Ye as at,
    w as b,
    Jt as c,
    Ts as d,
    F as e,
    re as f,
    zt as g,
    Kr as h,
    pn as i,
    $t as j,
    Os as k,
    Bs as l,
    Ve as m,
    De as n,
    oe as o,
    la as p,
    gn as q,
    wn as r,
    Pn as s,
    ks as t,
    Et as u,
    Ht as v,
    z as w,
    Ne as x,
    X as y,
    Z as z,
};
